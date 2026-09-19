"""
בדיקות לעדכון הביניים, בלי רשת ובלי בינה:  python tools/test_war_brief.py
"""

import json
import os
import shutil
import sys
import tempfile
import unittest
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "mac"))
import test_analyze as ta     # noqa: E402  (כתבות לדוגמה + אירועים מזויפים)
import war_brief as wb        # noqa: E402


def utc(s):
    return datetime.fromisoformat(s).replace(tzinfo=timezone.utc)


class Slots(unittest.TestCase):
    # ספטמבר = שעון קיץ, ישראל = UTC+3
    def test_night_slot_starts_20_minutes_early(self):
        self.assertEqual(wb.current_slot(utc("2026-09-19T00:45")).hour, 4)     # 03:45 בישראל → מועד 04:00
        self.assertEqual(wb.current_slot(utc("2026-09-19T00:30")).hour, 18)    # 03:30 → עדיין המועד של אתמול 18:00

    def test_noon_and_evening(self):
        self.assertEqual(wb.current_slot(utc("2026-09-19T09:05")).hour, 12)
        self.assertEqual(wb.current_slot(utc("2026-09-19T15:10")).hour, 18)

    def test_previous_slot_wraps_to_yesterday(self):
        s = wb.current_slot(utc("2026-09-19T01:10"))
        p = wb.previous_slot(s)
        self.assertEqual((p.hour, p.day), (18, 18))


class Picking(unittest.TestCase):
    def test_telegram_first_israeli_mainstream_capped(self):
        mk = lambda sid, h: {"source_id": sid, "published_at": f"2026-09-19T{h:02d}:00:00+00:00"}  # noqa: E731
        items = [mk("src_ynet", 10), mk("src_maariv", 11), mk("src_israelhayom", 12), mk("src_ynet", 9),
                 mk("src_tg_carmel", 1), mk("src_kyivind", 8)]
        got = [i["source_id"] for i in wb.pick_items(items)]
        self.assertEqual(got[0], "src_tg_carmel")
        self.assertEqual(sum(1 for s in got if s in wb.ISRAELI_MAINSTREAM), wb.MAX_ISRAELI)


class Run(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.orig = (wb.BRIEF, wb.cw.collect, wb.an.llm_json, wb.an.active_model_name)
        wb.BRIEF = os.path.join(self.tmp, "brief.js")
        wb.cw.collect = lambda arena, hours=26, log=print: list(ta.ITEMS)
        self.calls = 0

        def fake_llm(system, user, schema):
            self.calls += 1
            evs = ta.FAKE_EVENTS["events"]
            return {a: {"events": evs} for a in ("iran", "ukraine", "yemen", "north")}   # יותר מ-3 — הקוד חותך
        wb.an.llm_json = fake_llm
        wb.an.active_model_name = lambda: "fake"

    def tearDown(self):
        wb.BRIEF, wb.cw.collect, wb.an.llm_json, wb.an.active_model_name = self.orig
        shutil.rmtree(self.tmp)

    def read(self):
        with open(wb.BRIEF, encoding="utf-8") as f:
            return wb.load_brief()

    def test_one_call_max_three_per_arena(self):
        wb.main(["--force"])
        self.assertEqual(self.calls, 1)                              # קריאה אחת לכל ארבע הזירות
        b = self.read()
        self.assertTrue(b["arenas"])
        for arena, v in b["arenas"].items():
            self.assertLessEqual(len(v["events"]), 3, arena)
            for e in v["events"]:
                self.assertTrue(all(r["url"].startswith("https://") for r in e["reports"]))

    def test_same_slot_not_repeated(self):
        wb.main(["--force"])
        wb.main([])                                                  # אותו מועד → לא קורא שוב לבינה
        self.assertEqual(self.calls, 1)

    def test_foreign_letters_skip_arena_not_whole_brief(self):
        def llm(system, user, schema):
            bad = dict(ta.FAKE_EVENTS["events"][0], title="פיצוץ בנמל اليمن")
            return {"iran": {"events": [bad]}, "ukraine": {"events": ta.FAKE_EVENTS["events"][:1]},
                    "yemen": {"events": []}, "north": {"events": []}}
        wb.an.llm_json = llm
        wb.main(["--force"])
        b = self.read()
        self.assertNotIn("iran", b["arenas"])
        self.assertIn("iran", b["skipped"])
        self.assertIn("ukraine", b["arenas"])

    def test_rejected_arena_retried_once(self):
        calls = []

        def llm(system, user, schema):
            calls.append(sorted(schema["required"]))
            ok = ta.FAKE_EVENTS["events"][:1]
            if len(calls) == 1:                                          # פעם ראשונה: אות ערבית בתימן
                bad = dict(ok[0], title="פיצוץ בנמל اليمن")
                return {"iran": {"events": ok}, "ukraine": {"events": ok}, "yemen": {"events": [bad]}, "north": {"events": ok}}
            return {"yemen": {"events": ok}}                             # ניסיון חוזר — רק תימן, נקי
        wb.an.llm_json = llm
        wb.main(["--force"])
        b = self.read()
        self.assertEqual(calls, [["iran", "north", "ukraine", "yemen"], ["yemen"]])   # קריאה אחת נוספת, רק לזירה שנדחתה
        self.assertIn("yemen", b["arenas"])
        self.assertEqual(b["skipped"], {})

    def test_retry_that_fails_again_is_reported(self):
        def llm(system, user, schema):
            bad = dict(ta.FAKE_EVENTS["events"][0], title="פיצוץ בנמל اليمن")
            return {a: {"events": [bad]} for a in schema["required"]}
        wb.an.llm_json = llm
        wb.main(["--force"])
        b = self.read()
        self.assertTrue(all("גם בניסיון חוזר" in w for w in b["skipped"].values()))

    def test_ai_failure_keeps_previous_brief(self):
        wb.main(["--force"])
        before = self.read()

        def boom(*a, **k):
            raise RuntimeError("503")
        wb.an.llm_json = boom
        wb.main(["--force"])
        self.assertEqual(self.read(), before)


if __name__ == "__main__":
    unittest.main(verbosity=2)
