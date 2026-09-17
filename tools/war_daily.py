"""
war_daily.py — הניתוח היומי של פינת המלחמות, בענן.
====================================================
לכל זירה:  איסוף מפידים (קוד) → ניתוח (Gemini) → בדיקת חוזה → תיבה → טיוטה.
שום דבר לא מתפרסם כאן. הטיוטות מחכות לאישור שלך (tools/war_approval.py).

הרצה:  GEMINI_API_KEY=... python tools/war_daily.py [--arenas iran,yemen]
פלט נוסף: רשימת הטיוטות החדשות → הקובץ שב---new-drafts (לפתיחת בקשת האישור).
"""

import argparse
import json
import os
import re
import sys
import time
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "mac"))
import analyze as an        # noqa: E402
import collect_war as cw    # noqa: E402
import ingest_war as iw     # noqa: E402
import war_contract as wc   # noqa: E402
from geocode import Geocoder  # noqa: E402

MIN_ITEMS = 3          # פחות מזה — אין על מה לנתח, לא מבזבזים קריאות
WINDOW_HOURS = 24


def map_confidence(arena):
    cfg = open(os.path.join(ROOT, "data", "config.js"), encoding="utf-8").read()
    m = re.search(r"id:\s*'" + arena + r"'.*?map_confidence:\s*'(\w+)'", cfg)
    return m.group(1) if m and m.group(1) in wc.CONFIDENCE else "low"


def all_drafts():
    out = set()
    for dirpath, _, files in os.walk(iw.DRAFTS):
        for f in files:
            if f.endswith(".json"):
                out.add(os.path.relpath(os.path.join(dirpath, f), iw.WAR).replace(os.sep, "/"))
    return out


# "מגמות כלכליות עם מספרים" (מהמפרט) — מקוד, לא מהבינה. שערי ייחוס של ECB דרך Frankfurter: חינם, רשמי, בלי מפתח.
ECONOMY = {"iran": [("USD", "ILS", "דולר/שקל")], "north": [("USD", "ILS", "דולר/שקל")],
           "yemen": [("USD", "ILS", "דולר/שקל")], "ukraine": [("EUR", "USD", "אירו/דולר")]}


def economy_for(arena, fetch=None):
    """שער אחרון + שינוי ביחס ליום המסחר הקודם. תקלה → רשימה ריקה (הניתוח ממשיך בלי)."""
    import urllib.request
    from datetime import timedelta
    out = []
    for base, sym, label in ECONOMY.get(arena, []):
        try:
            start = (datetime.now(timezone.utc) - timedelta(days=10)).strftime("%Y-%m-%d")
            url = f"https://api.frankfurter.dev/v1/{start}..?base={base}&symbols={sym}"
            if fetch:
                data = fetch(url)
            else:
                req = urllib.request.Request(url, headers={"User-Agent": "news-site-bot"})
                with urllib.request.urlopen(req, timeout=20) as r:
                    data = json.loads(r.read().decode("utf-8"))
            days = sorted(data.get("rates", {}).items())
            if not days:
                continue
            (d1, r1) = days[-1]
            value = float(r1[sym])
            change = None
            if len(days) > 1:
                prev = float(days[-2][1][sym])
                change = round((value - prev) / prev * 100, 2) if prev else None
            out.append({"indicator": label, "value": round(value, 4), "unit": sym, "change_pct": change,
                        "source_id": "src_ecb",
                        # ECB מפרסם בסביבות 16:00 CET; לא יותר מאוחר מעכשיו (החוזה דוחה תאריך עתידי)
                        "as_of": min(datetime.fromisoformat(d1 + "T15:00:00+00:00"),
                                     datetime.now(timezone.utc).replace(microsecond=0)).isoformat()})
        except Exception as e:
            print(f"  economy {base}/{sym} failed: {e}")
    return out


def done_today(arena):
    """יש כבר טיוטה מהיום לזירה הזו? (הריצות בצהריים ובערב משלימות רק זירות שנכשלו בבוקר)"""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    folder = os.path.join(iw.DRAFTS, arena)
    return os.path.isdir(folder) and any(f.startswith(today) for f in os.listdir(folder))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--arenas", default="iran,ukraine,yemen,north")
    ap.add_argument("--new-drafts", default=os.path.join(ROOT, "new-drafts.json"))
    ap.add_argument("--force", action="store_true", help="לנתח גם זירה שכבר נותחה היום")
    args = ap.parse_args()

    known, groups = iw.load_sources()
    before = all_drafts()
    os.makedirs(iw.INBOX, exist_ok=True)
    failed = []
    geocode = Geocoder()
    calls = 0

    for arena in (a for a in args.arenas.split(",") if a in wc.ARENAS):
        print(f"\n=== {arena} ===")
        if not args.force and done_today(arena):
            print("כבר נותחה היום — מדלג")
            continue
        items = [it for it in cw.collect(arena) if it["source_id"] in known]
        if len(items) < MIN_ITEMS:
            print(f"רק {len(items)} כתבות — מדלג (נשאר הניתוח הקודם)")
            failed.append(f"{arena}: מעט מדי כתבות ({len(items)})")
            continue
        if calls:
            time.sleep(20)                       # מרווח בין זירות — מכסת בקשות לדקה
        calls += 1
        try:
            doc, errors = an.analyze_arena(arena, items, WINDOW_HOURS, map_confidence(arena), known,
                                           log=print, geocode=geocode)
        except an.QuotaExhausted:
            print("⛔ המכסה היומית של Gemini נגמרה — עוצר (הזירות שנותרו יחכו לריצה הבאה היום או מחר)")
            failed.append(f"{arena} והלאה: המכסה היומית נגמרה")
            break
        except Exception as e:
            print(f"❌ הבינה נכשלה: {str(e)[:400]}")
            failed.append(f"{arena}: הבינה נכשלה")
            continue
        if not errors:
            doc["economy"] = economy_for(arena)
            errors = wc.validate(doc, known)
        if errors:
            print(f"❌ {len(errors)} שגיאות חוזה: " + " | ".join(errors[:5]))
            failed.append(f"{arena}: לא עבר את בדיקת החוזה")
            continue
        path = os.path.join(iw.INBOX, doc["model"]["run_id"] + ".json")
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
        print(f"✓ {len(doc['events'])} אירועים → תיבה")

    geocode.save()
    print("\n=== קליטה ===")
    for line in iw.ingest(known, groups):
        print(line)
    new = sorted(all_drafts() - before)
    with open(args.new_drafts, "w", encoding="utf-8") as f:
        json.dump({"drafts": new, "failed": failed}, f, ensure_ascii=False)
    print(f"\nטיוטות חדשות: {len(new)} · נכשלו: {len(failed)}")


if __name__ == "__main__":
    main()
