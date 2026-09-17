"""
geocode.py — שם מקום → קואורדינטות, דרך OpenStreetMap (Nominatim). בלי מפתח.
============================================================================
הבינה נותנת רק שם ("Hodeidah, Yemen"). המיקום נקבע כאן, בקוד — כך הבינה לא יכולה להמציא נקודה על המפה.

כללי השימוש של Nominatim: עד בקשה אחת בשנייה, User-Agent מזהה, ושמירת תוצאות.
לכן כל תשובה (גם "לא נמצא") נשמרת ב-data/war/geocache.json ולא נשאלת שוב.
"""

import json
import os
import re
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, "data", "war", "geocache.json")
UA = "news-site-bot/1.0 (personal news site; https://github.com/ashbaruh/news-site)"
# "מדינה"/"מחוז" גדולים מדי לנקודה על מפה — נקודה באמצע מדינה מטעה.
TOO_BIG = {"country", "state", "region", "continent"}


class Geocoder:
    def __init__(self, cache_path=CACHE, fetch=None):
        self.path = cache_path
        try:
            self.cache = json.load(open(cache_path, encoding="utf-8"))
        except (FileNotFoundError, ValueError):
            self.cache = {}
        self.fetch = fetch or self._nominatim
        self._last = 0.0
        self.dirty = False

    def _nominatim(self, q):
        wait = 1.1 - (time.time() - self._last)
        if wait > 0:
            time.sleep(wait)
        self._last = time.time()
        url = ("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&accept-language=en&q="
               + urllib.parse.quote(q))
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.loads(r.read().decode("utf-8"))

    def __call__(self, name):
        q = re.sub(r"\s+", " ", str(name or "")).strip()[:120]
        if len(q) < 3:
            return None
        key = q.lower()
        if key not in self.cache:
            try:
                res = self.fetch(q)
            except Exception:
                return None                      # תקלת רשת — לא שומרים, ננסה בפעם הבאה
            hit = None
            for r in res or []:                  # התוצאה הראשונה שאינה מדינה/מחוז שלם (למשל העיר נבטיה, לא המחוז)
                if (r.get("addresstype") or r.get("type") or "").lower() not in TOO_BIG:
                    hit = [round(float(r["lat"]), 4), round(float(r["lon"]), 4)]
                    break
            self.cache[key] = hit
            self.dirty = True
        return tuple(self.cache[key]) if self.cache[key] else None

    def save(self):
        if self.dirty:
            os.makedirs(os.path.dirname(self.path), exist_ok=True)
            with open(self.path, "w", encoding="utf-8", newline="\n") as f:
                json.dump(self.cache, f, ensure_ascii=False, indent=0, sort_keys=True)


if __name__ == "__main__":
    import sys
    g = Geocoder()
    for n in sys.argv[1:] or ["Hodeidah, Yemen", "Kharkiv, Ukraine", "Iran"]:
        print(n, "→", g(n))
    g.save()
