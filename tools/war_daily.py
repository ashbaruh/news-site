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

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "mac"))
import analyze as an        # noqa: E402
import collect_war as cw    # noqa: E402
import ingest_war as iw     # noqa: E402
import war_contract as wc   # noqa: E402

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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--arenas", default="iran,ukraine,yemen,north")
    ap.add_argument("--new-drafts", default=os.path.join(ROOT, "new-drafts.json"))
    args = ap.parse_args()

    known, groups = iw.load_sources()
    before = all_drafts()
    os.makedirs(iw.INBOX, exist_ok=True)
    failed = []

    for n, arena in enumerate(a for a in args.arenas.split(",") if a in wc.ARENAS):
        print(f"\n=== {arena} ===")
        items = [it for it in cw.collect(arena) if it["source_id"] in known]
        if len(items) < MIN_ITEMS:
            print(f"רק {len(items)} כתבות — מדלג (נשאר הניתוח הקודם)")
            failed.append(f"{arena}: מעט מדי כתבות ({len(items)})")
            continue
        if n:
            time.sleep(15)                       # מרווח קטן בין זירות — מכסת בקשות לדקה
        try:
            doc, errors = an.analyze_arena(arena, items, WINDOW_HOURS, map_confidence(arena), known, log=print)
        except Exception as e:
            print(f"❌ הבינה נכשלה: {str(e)[:400]}")
            failed.append(f"{arena}: הבינה נכשלה")
            continue
        if errors:
            print(f"❌ {len(errors)} שגיאות חוזה: " + " | ".join(errors[:5]))
            failed.append(f"{arena}: לא עבר את בדיקת החוזה")
            continue
        path = os.path.join(iw.INBOX, doc["model"]["run_id"] + ".json")
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
        print(f"✓ {len(doc['events'])} אירועים → תיבה")

    print("\n=== קליטה ===")
    for line in iw.ingest(known, groups):
        print(line)
    new = sorted(all_drafts() - before)
    with open(args.new_drafts, "w", encoding="utf-8") as f:
        json.dump({"drafts": new, "failed": failed}, f, ensure_ascii=False)
    print(f"\nטיוטות חדשות: {len(new)} · נכשלו: {len(failed)}")


if __name__ == "__main__":
    main()
