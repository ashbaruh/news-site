"""
smoke_test.py — בדיקה קצרה במק: האם הבינה המקומית מחזירה פלט תקין, ובאיזו מהירות.
====================================================================================
לא שולח שום דבר לשום מקום. רק בודק.

הרצה (LM Studio פתוח, השרת במצב Running):
    python3 tools/mac/smoke_test.py

זמן צפוי: במק 3-6 דקות; בענן (Gemini) פחות מדקה.
"""

import os
import sys
import time
from datetime import datetime, timedelta, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.dirname(HERE))
import analyze as an  # noqa: E402
import war_contract as wc  # noqa: E402

NOW = datetime.now(timezone.utc).replace(microsecond=0)
T = lambda h: (NOW - timedelta(hours=h)).isoformat(timespec="seconds")  # noqa: E731

# טקסטים לדוגמה בלבד — לא מידע אמיתי. בכוונה עם מקרה של ציטוט (כתבה 2 מצטטת את 1).
ITEMS = [
    {"source_id": "src_reuters", "url": "https://example.com/demo-1", "published_at": T(6),
     "title": "DEMO: port facility damaged near city A",
     "text": "DEMO TEXT. A Reuters reporter at the scene saw damage to a fuel storage area at the port of city A "
             "on Tuesday night. Local officials declined to comment on the cause. The extent of the damage is unclear."},
    {"source_id": "src_jpost", "url": "https://example.com/demo-2", "published_at": T(5),
     "title": "DEMO: reports of port strike",
     "text": "DEMO TEXT. According to a Reuters report, a fuel storage area at the port of city A was damaged overnight. "
             "No group has claimed responsibility."},
    {"source_id": "src_planet", "url": "https://example.com/demo-3", "published_at": T(3),
     "title": "DEMO: satellite image shows burn marks at port",
     "text": "DEMO TEXT. A commercial satellite image taken Wednesday morning shows burn marks on two storage tanks "
             "at the port of city A, consistent with a fire."},
]


def main():
    try:
        model = an.active_model_name()
    except Exception as e:
        print("❌ לא הצלחתי לקבל את רשימת המודלים:", e)
        sys.exit(1)
    print(f"ספק: {an.PROVIDER} · מודל: {model}\n")
    material = an.numbered(ITEMS)
    try:
        t0 = time.time()
        events = an.llm_json(an.SYSTEM, "חלץ אירועים מהכתבות הבאות. לכל אירוע ציין אילו כתבות תומכות בו (לפי המספר), "
                                        "והאם כל כתבה היא מקור ראשוני או מצטטת אחרים.\n\n" + material, an.EVENTS_SCHEMA)
        t1 = time.time()
        u1 = an.llm_json.last_usage
        overview = an.llm_json(an.SYSTEM, "על סמך הכתבות בלבד: סיכום קצר, חזיתות/צירים בשם, פרטים לא מאומתים, "
                                          "ומטרות הצדדים בנפרד (declared / inferred / forecast).\n\n" + material, an.OVERVIEW_SCHEMA)
        t2 = time.time()
        u2 = an.llm_json.last_usage
    except Exception as e:
        print("❌ הקריאה לבינה נכשלה:", e)
        if an.PROVIDER == "gemini":
            print("   לבדוק: המפתח GEMINI_API_KEY תקין? המכסה היומית לא נגמרה?")
        else:
            print("   לבדוק: LM Studio פתוח? Developer → Status: Running? המודל טעון?")
        sys.exit(1)

    def rate(u, secs):
        out = u.get("completion_tokens")
        return f"{out} טוקנים בתשובה, {secs:.0f} שניות" + (f" (~{out / secs:.1f} לשנייה כולל קריאה)" if out and secs else "")

    print(f"שלב 1 (אירועים):   {rate(u1, t1 - t0)}")
    print(f"שלב 2 (תמונת מצב): {rate(u2, t2 - t1)}\n")

    doc = an.build("iran", ITEMS, events, overview, 24, "low", "smoke-test", NOW)
    known = wc.known_source_ids(open(os.path.join(an.ROOT, "data", "sources.js"), encoding="utf-8").read())
    errors = wc.validate(doc, known)
    groups = wc.source_groups(open(os.path.join(an.ROOT, "data", "sources.js"), encoding="utf-8").read())

    print("אירועים שהבינה חילצה:")
    for e in doc["events"]:
        print(f"  • [{wc.assess(e, groups)}] {e['title']}")
        for r in e["reports"]:
            print(f"      - {r['source_id']}  שורש: {r['source_root_id']}")
    print(f"\nסיכום: {doc['summary'][:300]}")
    print(f"חזיתות: {[f['name'] for f in doc['fronts']]}")

    print("\n" + ("✅ הקובץ עומד בחוזה" if not errors else f"❌ {len(errors)} שגיאות חוזה:\n  " + "\n  ".join(errors[:10])))
    per_arena_min = ((t2 - t0) * 40 / len(ITEMS)) / 60
    print(f"\nהערכה גסה לזירה מלאה (40 כתבות): ~{per_arena_min:.0f} דקות")
    print("\nהעתק את כל הפלט הזה ושלח לי.")


if __name__ == "__main__":
    main()
