"""
בדיקות לסקריפט של המק, בלי מודל אמיתי:  python tools/mac/test_analyze.py
"מודל מזויף" מחזיר תשובות קבועות — כולל טעויות שמודל קטן עלול לעשות.
"""

import json
import os
import sys
import threading
import unittest
from datetime import datetime, timedelta, timezone
from http.server import BaseHTTPRequestHandler, HTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(os.path.dirname(HERE)))
import analyze as an  # noqa: E402
import war_contract as wc  # noqa: E402

SOURCES_JS = open(os.path.join(an.ROOT, "data", "sources.js"), encoding="utf-8").read()
KNOWN, GROUPS = wc.known_source_ids(SOURCES_JS), wc.source_groups(SOURCES_JS)
NOW = datetime.now(timezone.utc).replace(microsecond=0)
T = lambda h: (NOW - timedelta(hours=h)).isoformat(timespec="seconds")  # noqa: E731

ITEMS = [
    {"source_id": "src_reuters",    "url": "https://example.com/r1", "published_at": T(10), "title": "כתב בשטח", "text": "..."},
    {"source_id": "src_planet",     "url": "https://example.com/p1", "published_at": T(8),  "title": "תמונת לוויין", "text": "..."},
    {"source_id": "src_tg_osint_a", "url": "https://example.com/t1", "published_at": T(9),  "title": "פוסט", "text": "..."},
    {"source_id": "src_jpost",      "url": "https://example.com/j1", "published_at": T(7),  "title": "מצטט טלגרם", "text": "..."},
    {"source_id": "src_irna",       "url": "https://example.com/i1", "published_at": T(6),  "title": "הודעה", "text": "..."},
    {"source_id": "src_tasnim",     "url": "https://example.com/s1", "published_at": T(5),  "title": "אותה מדינה", "text": "..."},
]


def ev(title, support, **kw):
    base = {"title": title, "summary": "תקציר.", "axis": "ציר דרום", "claim_type": "incident", "occurred_hint": "",
            "is_ongoing": False, "what_is_not_verified": "היקף.", "support": support}
    base.update(kw)
    return base


FAKE_EVENTS = {"events": [
    ev("A: שני מקורות ראשוניים עצמאיים", [{"item": 0, "first_hand": True, "origin": ""}, {"item": 1, "first_hand": True, "origin": ""}]),
    ev("B: טלגרם + אתר שמצטט אותו", [{"item": 2, "first_hand": True, "origin": ""}, {"item": 3, "first_hand": False, "origin": "פוסט טלגרם"}]),
    ev("C: שתי סוכנויות מאותה מדינה", [{"item": 4, "first_hand": True, "origin": ""}, {"item": 5, "first_hand": True, "origin": ""}]),
    ev("D: ראשוני + מצטט מקור לא ידוע", [{"item": 0, "first_hand": True, "origin": ""}, {"item": 3, "first_hand": False, "origin": ""}]),
    ev("E: שני מצטטים בלי מקור ראשוני", [{"item": 3, "first_hand": False, "origin": "גורם אנונימי"}, {"item": 2, "first_hand": False, "origin": "גורם אחר"}]),
    ev("F: מפנה לכתבה שלא קיימת", [{"item": 99, "first_hand": True, "origin": ""}]),
    ev('G: <img src=x onerror=alert(1)>כותרת', [{"item": 1, "first_hand": True, "origin": ""}], occurred_hint="2099-01-01T00:00:00+00:00"),
]}
FAKE_OVERVIEW = {"summary": "סיכום <script>x</script> דמה.", "fronts": [{"name": "ציר דרום", "status": "פעילות."}],
                 "not_verified": ["פרט לא מאומת."],
                 "strategic_goals": [{"actor": "צד א'", "declared": ["מוצהרת"], "inferred": ["מוסקת"], "forecast": ["תחזית"]}]}


def build():
    return an.build("iran", ITEMS, FAKE_EVENTS, FAKE_OVERVIEW, 24, "low", "test-run", NOW)


class Analyze(unittest.TestCase):
    def setUp(self):
        self.doc = build()
        self.by_title = {e["title"][:1]: e for e in self.doc["events"]}

    def level(self, letter):
        return wc.assess(self.by_title[letter], GROUPS)

    def test_output_passes_contract(self):
        self.assertEqual(wc.validate(self.doc, KNOWN), [])

    def test_two_independent_first_hand_is_verified(self):
        self.assertEqual(self.level("A"), "verified")

    def test_quoting_telegram_is_shared_root(self):
        self.assertEqual(self.level("B"), "shared_root")

    def test_same_country_agencies_not_independent(self):
        self.assertEqual(self.level("C"), "shared_root")

    def test_quote_of_unknown_origin_never_adds_independence(self):
        self.assertEqual(self.level("D"), "shared_root")      # הבאג שתוקן לפני הבדיקה

    def test_two_quotes_without_first_hand_not_verified(self):
        self.assertEqual(self.level("E"), "shared_root")

    def test_event_pointing_to_missing_item_dropped(self):
        self.assertNotIn("F", self.by_title)

    def test_html_removed(self):
        self.assertNotIn("<", self.by_title["G"]["title"])
        self.assertNotIn("<", self.doc["summary"])

    def test_future_occurred_time_clamped(self):
        g = self.by_title["G"]
        self.assertLessEqual(g["occurred_at"], g["first_reported_at"])

    def test_map_confidence_from_human_not_model(self):
        self.assertEqual(self.doc["map"]["confidence"], "low")
        self.assertTrue(self.doc["map"]["is_assessment"])

    def test_no_verification_field_in_output(self):
        for e in self.doc["events"]:
            self.assertFalse(set(e) & wc.FORBIDDEN_KEYS)


class Plumbing(unittest.TestCase):
    """שרת מזויף שמתנהג כמו LM Studio — בודק שהקריאה והפענוח עובדים (כולל תשובה עטופה ב-```json)."""

    def test_llm_json_roundtrip(self):
        seen = {}

        class H(BaseHTTPRequestHandler):
            def do_POST(self):
                body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
                seen["format"] = body["response_format"]["type"]
                is_events = "events" in body["response_format"]["json_schema"]["schema"]["properties"]
                payload = FAKE_EVENTS if is_events else FAKE_OVERVIEW
                out = json.dumps({"choices": [{"message": {"content": "```json\n" + json.dumps(payload, ensure_ascii=False) + "\n```"}}]}).encode()
                self.send_response(200); self.send_header("Content-Type", "application/json"); self.end_headers()
                self.wfile.write(out)

            def log_message(self, *a):
                pass

        srv = HTTPServer(("127.0.0.1", 0), H)
        threading.Thread(target=srv.serve_forever, daemon=True).start()
        an.LM_URL = f"http://127.0.0.1:{srv.server_address[1]}/v1/chat/completions"
        try:
            got = an.llm_json("s", "u", an.EVENTS_SCHEMA)
            self.assertEqual(len(got["events"]), len(FAKE_EVENTS["events"]))
            self.assertEqual(seen["format"], "json_schema")
        finally:
            srv.shutdown()


if __name__ == "__main__":
    unittest.main(verbosity=2)
