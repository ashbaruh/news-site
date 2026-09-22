"""בדיקות לשעון הפנימי (tools/clock.py)."""
import os
import sys
import unittest
from datetime import datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import clock  # noqa: E402

IL = clock.IL


def at(s):
    return datetime.fromisoformat(s).replace(tzinfo=IL)


def names(now):
    return sorted(wf for wf, _ in clock.due(at(now)))


class Clock(unittest.TestCase):
    def test_brief_at_0340(self):
        self.assertEqual(names("2026-09-20T03:40:05"), ["war-brief.yml"])

    def test_daily_at_0240(self):
        self.assertEqual(names("2026-09-20T02:40:00"), ["war-daily.yml"])

    def test_backups(self):
        # ב-05:40 וב-13:40 רצים גם ההשלמה של הניתוח וגם ניסיון חוזר של הביניים — זה בסדר,
        # ניסיון חוזר למועד שכבר בוצע נגמר תוך פחות מדקה בלי לקרוא לבינה.
        self.assertIn("war-daily.yml", names("2026-09-20T05:41"))
        self.assertIn("war-daily.yml", names("2026-09-20T13:45"))

    def test_brief_noon_and_evening(self):
        self.assertEqual(names("2026-09-20T11:40"), ["war-brief.yml"])
        self.assertEqual(names("2026-09-20T17:59"), ["war-brief.yml"])

    def test_brief_retries_every_half_hour(self):
        for t in ("12:10", "12:40", "13:10", "14:40", "15:10"):
            self.assertIn("war-brief.yml", names(f"2026-09-20T{t}"), t)

    def test_brief_retries_stop_after_three_and_a_half_hours(self):
        self.assertNotIn("war-brief.yml", names("2026-09-20T15:40"))

    def test_night_retries_cross_midnight(self):
        self.assertIn("war-brief.yml", names("2026-09-20T21:10"))   # המועד של 17:40
        self.assertNotIn("war-brief.yml", names("2026-09-20T22:10"))

    def test_data_every_hour(self):
        for h in (0, 9, 23):
            self.assertEqual(names(f"2026-09-20T{h:02d}:17"), ["update-data.yml"])

    def test_not_before_slot(self):
        self.assertEqual(names("2026-09-20T03:39:59"), [])
        self.assertEqual(names("2026-09-20T04:09"), [])
        self.assertEqual(names("2026-09-20T09:40"), [])   # אחרי סוף הניסיונות של 03:40

    def test_missed_slot_caught_within_window(self):
        self.assertEqual(names("2026-09-20T03:59"), ["war-brief.yml"])
        self.assertEqual(names("2026-09-20T04:00"), [])   # 20 דק' אחרי — כבר לא (עד הניסיון של 04:10)

    def test_window_across_midnight(self):
        self.assertEqual(names("2026-09-20T00:30"), ["update-data.yml"])  # 00:17 עדיין בחלון

    def test_slot_is_exact_time(self):
        (wf, s), = clock.due(at("2026-09-20T03:50"))
        self.assertEqual((s.hour, s.minute), (3, 40))

    def test_quiet_minute(self):
        self.assertTrue(clock.quiet_minute(at("2026-09-20T10:00")))
        self.assertFalse(clock.quiet_minute(at("2026-09-20T10:15")))
        self.assertFalse(clock.quiet_minute(at("2026-09-20T10:43")))


if __name__ == "__main__":
    unittest.main(verbosity=2)
