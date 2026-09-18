"""
בדיקות סטטיות לקוד האתר, בלי דפדפן:  python tools/test_site_static.py
סעיף 5 בביקורת (18/09/2026): אסור שנתוני דמה או תאריך קשיח יגיעו למסלול תצוגה.
"""

import os
import re
import unittest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def code_only(js):
    """JS בלי הערות — כדי שהסבר בהערה לא ייחשב קוד פעיל."""
    js = re.sub(r"/\*.*?\*/", "", js, flags=re.S)
    return re.sub(r"(^|[^:'\"\\])//[^\n]*", r"\1", js)


PROD_JS = ["assets/js/app.js", "assets/js/freshness.js", "assets/js/reliability.js", "assets/js/player.js",
           "data/config.js", "data/corners.js", "data/sources.js"]


class NoDemoData(unittest.TestCase):
    def test_no_demo_strings(self):
        bad = re.compile(r"(ידיעת|כתבת|שחקן|כלי|סקיל|ערוץ|מועדון|קבוצת) דמה")
        for rel in PROD_JS:
            with self.subTest(file=rel):
                self.assertIsNone(bad.search(read(rel)))

    def test_no_hardcoded_today(self):
        for rel in PROD_JS:
            with self.subTest(file=rel):
                self.assertNotIn("2026-09-16", code_only(read(rel)))

    def test_no_demo_freshness_or_events(self):
        for rel in PROD_JS:
            with self.subTest(file=rel):
                code = code_only(read(rel))
                self.assertNotIn("DB.freshness", code)
                self.assertNotIn("DB.events", code)

    def test_watchlist_has_symbols_only(self):
        js = code_only(read("data/corners.js"))
        self.assertIn("watchlist", js)
        self.assertNotRegex(js, r"price\s*:|change\s*:")

    def test_all_loaded_scripts_exist(self):
        html = read("index.html")
        for src in re.findall(r'<script src="([^"?]+)', html):
            if src.startswith("http"):
                continue
            with self.subTest(src=src):
                self.assertTrue(os.path.isfile(os.path.join(ROOT, src)), src)


if __name__ == "__main__":
    unittest.main(verbosity=2)
