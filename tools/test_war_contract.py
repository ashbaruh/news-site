"""
בדיקות לחוזה של פינת המלחמות.  הרצה:  python tools/test_war_contract.py
כל בדיקה בונה ניתוח לדוגמה (נתוני דמה) ומוודאת שהבודק מקבל את התקין ודוחה את השגוי.
"""

import copy
import os
import sys
import unittest
from datetime import datetime, timedelta, timezone

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import war_contract as wc  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCES_JS = open(os.path.join(ROOT, "data", "sources.js"), encoding="utf-8").read()
KNOWN = wc.known_source_ids(SOURCES_JS)
GROUPS = wc.source_groups(SOURCES_JS)


def iso(dt):
    return dt.isoformat(timespec="seconds")


def sample():
    now = datetime.now(timezone.utc).replace(microsecond=0)
    t = lambda h: iso(now - timedelta(hours=h))  # noqa: E731
    return {
        "contract_version": 1,
        "arena": "iran",
        "generated_at": t(0),
        "window": {"from": t(6), "to": t(0)},
        "model": {"name": "demo-local-model", "run_id": "test-001"},
        "summary": "סיכום דמה של 6 השעות האחרונות.",
        "fronts": [{"name": "ציר דרום – מפרץ", "status": "דמה: פעילות מוגברת סביב נמלים."}],
        "events": [
            {
                "id": "EV-T1", "title": "אירוע דמה עם שני מקורות עצמאיים", "summary": "דמה.",
                "axis": "ציר דרום – מפרץ", "claim_type": "incident", "lifecycle": "active",
                "occurred_at": t(5), "is_ongoing": False, "first_reported_at": t(5), "last_update_at": t(1),
                "what_is_not_verified": "היקף הנזק.", "is_new_in_window": True,
                "reports": [
                    {"source_id": "src_reuters", "source_root_id": "root_reuters_field_x", "url": "https://example.com/a", "published_at": t(4)},
                    {"source_id": "src_planet", "source_root_id": "root_planet_img_x", "url": "https://example.com/b", "published_at": t(2)},
                ],
                "revisions": [{"at": t(1), "kind": "status_change", "from_level": "initial", "to_level": "verified", "text": "נוסף מקור עצמאי."}],
            },
            {
                "id": "EV-T2", "title": "אירוע דמה — שני פרסומים, שורש אחד", "summary": "דמה.",
                "axis": "ציר מרכז איראן", "claim_type": "incident", "lifecycle": "active",
                "occurred_at": t(3), "is_ongoing": False, "first_reported_at": t(3), "last_update_at": t(2),
                "what_is_not_verified": "הכל — הד של פוסט אחד.", "is_new_in_window": True,
                "reports": [
                    {"source_id": "src_tg_osint_a", "source_root_id": "root_tg_a_1", "url": "https://example.com/c", "published_at": t(3)},
                    {"source_id": "src_jpost", "source_root_id": "root_tg_a_1", "url": "https://example.com/d", "published_at": t(2)},
                ],
            },
        ],
        "not_verified": ["EV-T2 נשען על פוסט טלגרם יחיד."],
        "map": {"confidence": "medium", "is_assessment": True, "note": "הערכה אנליטית, לא קו שליטה.",
                "layers": [{"name": "אזורי פעילות", "confidence": "low", "description": "דמה."}]},
        "economy": [{"indicator": "נפט ברנט", "value": 104.2, "unit": "$", "change_pct": -1.6, "source_id": "src_reuters", "as_of": t(1)}],
        "strategic_goals": [{"actor": "צד א'", "declared": ["מטרה מוצהרת דמה"], "inferred": ["מטרה מוסקת דמה"], "forecast": ["תחזית דמה"]}],
        "sources_cited": [
            {"source_id": "src_reuters", "url": "https://example.com/a", "accessed_at": t(0)},
            {"source_id": "src_planet", "url": "https://example.com/b", "accessed_at": t(0)},
            {"source_id": "src_tg_osint_a", "url": "https://example.com/c", "accessed_at": t(0)},
            {"source_id": "src_jpost", "url": "https://example.com/d", "accessed_at": t(0)},
        ],
    }


class Contract(unittest.TestCase):
    def rejects(self, doc, fragment):
        errs = wc.validate(doc, KNOWN)
        self.assertTrue(any(fragment in e for e in errs), f"ציפיתי לשגיאה עם '{fragment}', התקבל: {errs}")

    def test_valid_sample_passes(self):
        self.assertEqual(wc.validate(sample(), KNOWN), [])

    def test_levels_computed_like_the_site(self):
        d = sample()
        self.assertEqual(wc.assess(d["events"][0], GROUPS), "verified")
        self.assertEqual(wc.assess(d["events"][1], GROUPS), "shared_root")   # כשל מקור משותף

    # ---- הבינה לא קובעת "מאומת" ----
    def test_ai_cannot_declare_verified(self):
        d = sample(); d["events"][1]["level"] = "verified"
        self.rejects(d, "שדה אסור")

    def test_ai_cannot_declare_verified_under_other_name(self):
        d = sample(); d["events"][1]["is_verified"] = True
        self.rejects(d, "שדה אסור")

    # ---- מקורות ----
    def test_unknown_source_rejected(self):
        d = sample(); d["events"][0]["reports"][0]["source_id"] = "src_made_up_by_ai"
        self.rejects(d, "לא רשום")

    def test_event_without_reports_rejected(self):
        d = sample(); d["events"][0]["reports"] = []
        self.rejects(d, "לפחות דיווח אחד")

    def test_source_used_but_not_cited_rejected(self):
        d = sample(); d["sources_cited"] = d["sources_cited"][:1]
        self.rejects(d, "חסרים ברשימת הציטוט")

    def test_missing_root_id_rejected(self):
        d = sample(); d["events"][0]["reports"][0]["source_root_id"] = ""
        self.rejects(d, "מקור-שורש")

    # ---- "מה לא מאומת" ----
    def test_missing_not_verified_per_event_rejected(self):
        d = sample(); d["events"][0]["what_is_not_verified"] = "  "
        self.rejects(d, "לא יכול להיות ריק")

    def test_missing_not_verified_section_rejected(self):
        d = sample(); del d["not_verified"]
        self.rejects(d, "חסר שדה חובה")

    # ---- מפה ----
    def test_map_must_be_assessment(self):
        d = sample(); d["map"]["is_assessment"] = False
        self.rejects(d, "תמיד הערכה")

    def test_map_confidence_enum(self):
        d = sample(); d["map"]["confidence"] = "certain"
        self.rejects(d, "ערך לא מותר")

    # ---- מטרות אסטרטגיות מופרדות ----
    def test_goals_cannot_be_mixed_into_one_field(self):
        d = sample(); d["strategic_goals"][0] = {"actor": "צד א'", "goals": ["הכל ביחד"]}
        self.rejects(d, "שדה לא מוגדר")

    # ---- אבטחה ----
    def test_html_injection_rejected(self):
        d = sample(); d["events"][0]["title"] = 'כותרת <script>alert(1)</script>'
        self.rejects(d, "אסור HTML")

    def test_javascript_url_rejected(self):
        d = sample(); d["events"][0]["reports"][0]["url"] = "javascript:alert(1)"
        self.rejects(d, "https://")

    def test_http_url_rejected(self):
        d = sample(); d["sources_cited"][0]["url"] = "http://example.com"
        self.rejects(d, "https://")

    def test_unknown_top_level_field_rejected(self):
        d = sample(); d["run_shell"] = "rm -rf /"
        self.rejects(d, "שדה לא מוגדר")

    def test_unknown_arena_rejected(self):
        d = sample(); d["arena"] = "../../index"
        self.rejects(d, "ערך לא מותר")

    # ---- זמנים ----
    def test_window_over_72h_rejected(self):
        d = sample()
        d["window"]["from"] = iso(datetime.fromisoformat(d["window"]["to"]) - timedelta(hours=100))
        self.rejects(d, "חלון זמן")

    def test_future_generated_at_rejected(self):
        d = sample(); d["generated_at"] = iso(datetime.now(timezone.utc) + timedelta(days=1))
        self.rejects(d, "בעתיד")

    def test_timestamp_without_timezone_rejected(self):
        d = sample(); d["events"][0]["occurred_at"] = "2026-09-16T10:00:00"
        self.rejects(d, "אזור זמן")

    def test_ongoing_with_end_date_rejected(self):
        d = sample(); d["events"][0]["is_ongoing"] = True; d["events"][0]["occurred_to"] = d["events"][0]["last_update_at"]
        self.rejects(d, "מתמשך")

    def test_update_outside_window_rejected(self):
        d = sample(); d["events"][0]["last_update_at"] = iso(datetime.now(timezone.utc) - timedelta(days=5))
        self.rejects(d, "מחוץ לחלון")

    # ---- היסטוריה ----
    def test_downgrade_needs_levels(self):
        d = sample(); d["events"][0]["revisions"] = [{"at": d["events"][0]["last_update_at"], "kind": "downgrade", "text": "בוטל."}]
        self.rejects(d, "from_level")

    # ---- חזיתות בשם ----
    def test_fronts_required(self):
        d = sample(); d["fronts"] = []
        self.rejects(d, "חזית")

    def test_duplicate_event_ids_rejected(self):
        d = sample(); d["events"][1]["id"] = d["events"][0]["id"]
        self.rejects(d, "כפול")

    def test_economy_value_must_be_number(self):
        d = sample(); d["economy"][0]["value"] = "הרבה"
        self.rejects(d, "מספר")


if __name__ == "__main__":
    unittest.main(verbosity=1)
