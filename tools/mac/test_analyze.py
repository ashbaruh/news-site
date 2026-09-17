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
    ev("H: עם מקומות", [{"item": 0, "first_hand": True, "origin": ""}],
       places=[{"name_en": "Hodeidah, Yemen", "name_he": "חודיידה"}, {"name_en": "Nowhere Land", "name_he": "אין"},
               {"name_en": "Iran", "name_he": "איראן"}]),
]}
FAKE_OVERVIEW = {"summary": "סיכום <script>x</script> דמה.", "fronts": [{"name": "ציר דרום", "status": "פעילות."}],
                 "not_verified": ["פרט לא מאומת."],
                 "strategic_goals": [{"actor": "צד א'", "declared": ["מוצהרת"], "inferred": ["מוסקת"], "forecast": ["תחזית"]}]}


FAKE_GEO = {"Hodeidah, Yemen": (14.8, 42.95)}      # "Iran" (מדינה שלמה) ו-"Nowhere Land" — לא נמצאו


def build():
    return an.build("iran", ITEMS, FAKE_EVENTS, FAKE_OVERVIEW, 24, "low", "test-run", NOW, geocode=FAKE_GEO.get)


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

    def test_places_only_from_geocoder(self):
        self.assertEqual(self.by_title["H"]["places"], [{"name": "חודיידה", "lat": 14.8, "lon": 42.95}])
        self.assertEqual(self.by_title["A"]["places"], [])

    def test_telegram_never_first_hand(self):
        # שני "ראשוניים": אתר + טלגרם שהבינה סימנה כראשוני → עדיין לא מאומת
        items = ITEMS + [{"source_id": "src_tg_abualiexpress", "url": "https://t.me/x/1", "published_at": T(4),
                          "title": "טלגרם", "text": "..."}]
        doc = an.build("yemen", items, {"events": [ev("T", [{"item": 0, "first_hand": True, "origin": ""},
                                                           {"item": 6, "first_hand": True, "origin": ""}])]},
                       FAKE_OVERVIEW, 24, "low", "t", NOW)
        self.assertEqual(wc.assess(doc["events"][0], GROUPS), "shared_root")

    def test_arabic_letters_inside_hebrew_fixed(self):
        self.assertEqual(an.clean("לחץ על טهران", 100), "לחץ על טהראן")
        self.assertEqual(an.clean("אינה מאומتת", 100), "אינה מאומתת")
        self.assertEqual(an.clean("رئيس مجلس القيادة", 100), "رئيس مجلس القيادة")   # ערבית שלמה — לא נוגעים

    def test_claim_titles_become_statements(self):
        for title in ("טענה להפלת מטוס קרב", "החות'ים טוענים כי", "האשמות סעודיות כלפי", "צה\"ל הודיע על"):
            self.assertEqual(an.claim_type_for({"title": title, "claim_type": "incident"}), "statement", title)
        self.assertEqual(an.claim_type_for({"title": "פיצוץ בנמל חודיידה", "claim_type": "incident"}), "incident")
        self.assertEqual(an.clean("התאמת ערוצים לע랑 עקיפה", 100), "התאמת ערוצים לע עקיפה")

    def test_copied_sentences_removed(self):
        src = "The Houthis dug twenty kilometers of trenches in the mountains around the strait this week"
        items = [dict(ITEMS[0], text=src)]
        ev_copy = ev("T", [{"item": 0, "first_hand": True, "origin": ""}],
                     summary="לפי הדיווח The Houthis dug twenty kilometers of trenches in the mountains around the strait this week.")
        doc = an.build("yemen", items, {"events": [ev_copy]}, FAKE_OVERVIEW, 24, "low", "t", NOW)
        self.assertNotIn("dug twenty kilometers of trenches in the mountains", doc["events"][0]["summary"])
        self.assertIn("…", doc["events"][0]["summary"])
        self.assertEqual(an.strip_copied("ניסוח עצמאי לגמרי", set()), "ניסוח עצמאי לגמרי")

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


class GeminiFallback(unittest.TestCase):
    """מכסה יומית נגמרה / עומס → עוברים למודל הבא (כולל Flash-Lite). כולם נגמרו → QuotaExhausted."""

    def setUp(self):
        import io
        import urllib.error
        self.io, self.urlerr = io, urllib.error
        self.saved = (an._gemini_request, an._gemini_model, an.time.sleep)
        an.time.sleep = lambda s: None
        an._exhausted.clear()

    def tearDown(self):
        an._gemini_request, an._gemini_model, an.time.sleep = self.saved
        an._exhausted.clear()

    def err(self, code, quota=""):
        # הודעה ארוכה כמו של Google — בודק שמזהה המכסה לא נחתך (באג 17/09/2026)
        body = json.dumps({"error": {"message": "You exceeded your current quota. " + "x" * 700,
                                     "details": [{"quotaId": quota}] if quota else []}}).encode()
        return self.urlerr.HTTPError("u", code, "x", {}, self.io.BytesIO(body))

    def test_daily_quota_then_overload_then_lite(self):
        def fake(path, body=None):
            m = path.split("/")[2].split(":")[0]
            if m == "flash-a":
                raise self.err(429, "GenerateRequestsPerDayPerProjectPerModel-FreeTier")
            if m == "flash-b":
                raise self.err(503)
            return {"candidates": [{"content": {"parts": [{"text": '{"ok": 1}'}]}}]}
        an._gemini_request, an._gemini_model = fake, ["flash-a", "flash-b", "flash-lite"]
        self.assertEqual(an.gemini_json("s", "u", {}), {"ok": 1})
        self.assertEqual(an.gemini_json.used_model, "flash-lite")

    def test_rate_limit_moves_to_next_model(self):
        def fake(path, body=None):
            if "flash-a" in path:
                raise self.err(429)                      # מכסה לא מזוהה — אחרי הניסיונות עוברים למודל הבא
            return {"candidates": [{"content": {"parts": [{"text": '{"ok": 2}'}]}}]}
        an._gemini_request, an._gemini_model = fake, ["flash-a", "flash-lite"]
        self.assertEqual(an.gemini_json("s", "u", {}), {"ok": 2})

    def test_all_exhausted_raises(self):
        def fake(path, body=None):
            raise self.err(429, "PerDay")
        an._gemini_request, an._gemini_model = fake, ["a", "b"]
        with self.assertRaises(an.QuotaExhausted):
            an.gemini_json("s", "u", {})


if __name__ == "__main__":
    unittest.main(verbosity=2)
