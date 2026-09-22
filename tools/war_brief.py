"""
war_brief.py — "עדכון ביניים" לפינת המלחמות: 3 פעמים ביום, עד 3 ידיעות לכל זירה.
=================================================================================
04:00 · 12:00 · 18:00 שעון ישראל (החלטת בעל האתר, 18/09/2026: קם ב-5 ורוצה עדכון מוכן).
הניתוח העמוק נשאר פעם ביום (war_daily.py). כאן — רק "מה חדש מאז העדכון הקודם".

  איסוף (קוד)  → עדיפות: טלגרם, אחריו מקורות זרים מהירים; תקשורת ישראלית רגילה לכל היותר 2 לזירה
  בינה         → קריאה אחת ל-Gemini לכל ארבע הזירות יחד (חוסך מכסה): עד 3 ידיעות לזירה
  הרכבה (קוד)  → אותו מסלול כמו בניתוח העמוק: מקורות-שורש, שומר העתקה, ניקוי כתב, בדיקת חוזה
  פרסום        → data/war/brief.js, אוטומטית, רק זירות שעברו את בדיקות האיכות. זירה שנכשלה — פשוט לא מוצגת.

הרצה: GEMINI_API_KEY=... python tools/war_brief.py [--force]
המשימה ב-GitHub רצה כמה פעמים סביב כל מועד (GitHub מדלג לפעמים); כאן נבדק אם המועד כבר בוצע.
"""

import argparse
import json
import os
import sys
from datetime import datetime, timedelta, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "mac"))
import analyze as an          # noqa: E402
import collect_war as cw      # noqa: E402
import ingest_war as iw       # noqa: E402
import war_approval as wa     # noqa: E402  (בדיקות האיכות: אותיות זרות)
import war_contract as wc     # noqa: E402

SLOTS = (4, 12, 18)           # שעות ישראל
LEAD_MIN = 20                 # מתחילים 20 דקות לפני המועד — שיהיה מוכן בזמן גם כשהבינה איטית
MAX_PER_ARENA = 3
ITEMS_PER_ARENA = 15
TEXT_PER_ITEM = 450
ISRAELI_MAINSTREAM = {"src_ynet", "src_maariv", "src_israelhayom", "src_walla"}
MAX_ISRAELI = 2
BRIEF = os.path.join(ROOT, "data", "war", "brief.js")


# ------------------------------------------------------------------ זמן ישראל ומועדים

def il_now(now=None):
    now = now or datetime.now(timezone.utc)
    try:
        from zoneinfo import ZoneInfo
        return now.astimezone(ZoneInfo("Asia/Jerusalem"))
    except Exception:
        # בלי מסד אזורי זמן (Windows בלי tzdata): קירוב — שעון קיץ אפריל-אוקטובר
        return now.astimezone(timezone(timedelta(hours=3 if 4 <= now.month <= 10 else 2)))


def current_slot(now=None):
    """המועד האחרון שהגיע (כולל 20 דקות מראש) → datetime בשעון ישראל."""
    t = il_now(now) + timedelta(minutes=LEAD_MIN)
    for day in (0, 1):
        base = (t - timedelta(days=day)).replace(minute=0, second=0, microsecond=0)
        for h in sorted(SLOTS, reverse=True):
            s = base.replace(hour=h)
            if s <= t:
                return s
    return None


def previous_slot(slot):
    hours = sorted(SLOTS)
    i = hours.index(slot.hour)
    if i > 0:
        return slot.replace(hour=hours[i - 1])
    return (slot - timedelta(days=1)).replace(hour=hours[-1])


CARRY_HOURS = 14          # ידיעה שנשמרת מהעדכון הקודם — עד גיל כזה (מעדכון בוקר עד ערב)


def within_hours(when, now, hours):
    try:
        t = datetime.fromisoformat(str(when))
    except ValueError:
        return False
    if t.tzinfo is None:
        t = t.replace(tzinfo=timezone.utc)
    return timedelta(0) <= now - t <= timedelta(hours=hours)


def load_brief():
    try:
        with open(BRIEF, encoding="utf-8") as f:
            t = f.read()
        marker = "window.DB.war_brief ="
        return json.loads(t[t.index(marker) + len(marker):t.rindex(";")])
    except (FileNotFoundError, ValueError):
        return {}


# ------------------------------------------------------------------ איסוף

def pick_items(items):
    """טלגרם קודם, אחריו זרים, ישראלי רגיל לכל היותר 2. בכל קבוצה — החדש ביותר קודם."""
    items = sorted(items, key=lambda x: x.get("published_at", ""), reverse=True)
    tg = [i for i in items if i["source_id"].startswith("src_tg_")]
    il = [i for i in items if i["source_id"] in ISRAELI_MAINSTREAM][:MAX_ISRAELI]
    other = [i for i in items if not i["source_id"].startswith("src_tg_") and i["source_id"] not in ISRAELI_MAINSTREAM]
    return (tg + other + il)[:ITEMS_PER_ARENA]


def schema_for(arena_ids):
    return {"type": "object", "additionalProperties": False, "required": sorted(arena_ids),
            "properties": {a: {"type": "object", "additionalProperties": False, "required": ["events"],
                               "properties": {"events": dict(an.EVENTS_SCHEMA["properties"]["events"], maxItems=MAX_PER_ARENA)}}
                           for a in sorted(arena_ids)}}


BRIEF_SCHEMA = schema_for(wc.ARENAS)

# ניסיון חוזר לזירה שנדחתה (19/09/2026: תימן נדחתה בגלל אות ערבית אחת, ונשארה בלי עדכון בוקר).
# קריאה אחת נוספת בלבד, רק לזירות שנדחו מסיבה שאפשר לתקן — לא "אין ידיעות".
EMPTY = "הבינה החזירה רשימה ריקה"

# 22/09/2026: העדכונים של 12:00 ו-18:00 חזרו ריקים לכל ארבע הזירות אף שהיו 15 כתבות בכל זירה,
# והאתר נשאר בלי ידיעות ביניים כל היום. הניסיון החוזר אומר למודל במפורש שיש חומר.
EMPTY_NOTE = ("חשוב: בניסיון הקודם החזרת רשימה ריקה לכל הזירות. יש לפניך כתבות אמיתיות מהשעות האחרונות. "
              "לכל זירה בחר עד 3 ידיעות — אירועים או הודעות ממשיות מתוך הכתבות שלה. "
              "רשימה ריקה מותרת רק אם באמת אין בזירה שום אירוע, ולא כברירת מחדל.")

RETRY_NOTE = ("חשוב: בניסיון הקודם הופיעו אותיות בשפה אחרת בתוך הטקסט העברי. כתוב שמות מקומות, אנשים וארגונים "
              "בתעתיק עברי בלבד — בלי אף אות ערבית, קירילית, סינית או קוריאנית.")


def prompt(per_arena, note=""):
    parts = ["עדכון ביניים: לכל זירה בחר עד 3 הידיעות החשובות והחדשות ביותר מהכתבות שלה בלבד "
             "(מספרי הכתבות הם לפי הרשימה של אותה זירה). ידיעה = אירוע או הודעה ממשית, לא פרשנות. "
             "כותרת קצרה ותקציר של משפט אחד, בניסוח שלך. אם אין בזירה משהו חדש וממשי — רשימה ריקה." +
             (" " + note if note else "")]
    for arena in sorted(per_arena):
        items = [dict(i, text=(i.get("text") or "")[:TEXT_PER_ITEM]) for i in per_arena[arena]]
        parts.append(f"\n\n===== זירה: {arena} — {an.ARENA_SCOPE[arena]} =====\n" + (an.numbered(items) if items else "(אין כתבות)"))
    return "".join(parts)


# ------------------------------------------------------------------ הרכבה ובדיקה

STUB = {"summary": "עדכון ביניים — ידיעות מהשעות האחרונות.",
        "fronts": [{"name": "עדכון ביניים", "status": "ידיעות מהשעות האחרונות, לפני הניתוח היומי."}],
        "not_verified": [], "strategic_goals": []}


def build_arena(arena, items, events, window_hours, now, known, geocode=None):
    """→ (רשימת אירועים או None, סיבה). אותו מסלול הרכבה ובדיקת חוזה כמו בניתוח העמוק."""
    # אותיות זרות נבדקות בפלט הגולמי, לפני הניקוי: הניקוי ממיר ערבית לעברית בשקט ("اليمن" → "אלימן"),
    # ומשפט פגום היה נראה תקין. פלט כזה נדחה ולא מתוקן (הצעה מהביקורת החיצונית, 18/09/2026).
    raw_bad = sum(1 for e in (events or [])[:MAX_PER_ARENA] if isinstance(e, dict)
                  for t in (e.get("title"), e.get("summary")) if wa.bad_text(t))
    if raw_bad:
        return None, f"אותיות בשפה זרה בתוך הטקסט העברי ({raw_bad})"
    doc = an.build(arena, items, {"events": (events or [])[:MAX_PER_ARENA]}, STUB, window_hours, "low",
                   f"brief-{arena}-{now:%Y%m%d%H%M}", now, geocode=geocode)
    if not doc["events"]:
        return None, "אין ידיעות"
    errs = wc.validate(doc, known)
    if errs:
        return None, "לא עבר את בדיקת החוזה: " + errs[0][:120]
    bad = sum(1 for e in doc["events"] for t in (e["title"], e["summary"]) if wa.bad_text(t))
    if bad:
        return None, f"אותיות בשפה זרה בתוך הטקסט העברי ({bad})"
    return doc["events"], ""


STATUS = os.path.join(ROOT, "data", "war", "brief_status.json")


def report(msg, ok=False):
    """מה קרה בריצה האחרונה — נשמר ל-git, כדי שאפשר לדעת למה לא התעדכן בלי להיכנס ליומני GitHub."""
    print(msg)
    try:
        with open(STATUS, "w", encoding="utf-8", newline="\n") as f:
            json.dump({"at": datetime.now(timezone.utc).replace(microsecond=0).isoformat(), "ok": ok, "msg": msg},
                      f, ensure_ascii=False, indent=1)
    except OSError:
        pass


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="להריץ גם אם המועד הנוכחי כבר בוצע")
    args = ap.parse_args(argv)

    now = datetime.now(timezone.utc).replace(microsecond=0)
    slot = current_slot(now)
    old = load_brief()
    if not args.force and old.get("slot") == slot.isoformat():
        return print(f"עדכון הביניים של {slot:%H:%M} כבר בוצע — אין מה לעשות")   # לא דורס את הסטטוס

    since = min(previous_slot(slot).astimezone(timezone.utc), now - timedelta(hours=4)) - timedelta(hours=1)
    window_hours = min(max((now - since).total_seconds() / 3600, 4), 24)
    known, _ = iw.load_sources()
    per_arena = {}
    for arena in sorted(wc.ARENAS):
        try:
            got = [it for it in cw.collect(arena, hours=window_hours, log=lambda *_: None) if it["source_id"] in known]
        except Exception as e:
            print(f"{arena}: איסוף נכשל — {e}")
            got = []
        per_arena[arena] = pick_items(got)
        print(f"{arena}: {len(per_arena[arena])} כתבות (טלגרם: {sum(i['source_id'].startswith('src_tg_') for i in per_arena[arena])})")

    if not any(per_arena.values()):
        return report("אין כתבות חדשות באף זירה — העדכון הקודם נשאר")
    try:
        out = an.llm_json(an.SYSTEM, prompt(per_arena), BRIEF_SCHEMA)
    except Exception as e:
        # ההודעה מרכזת את כל המודלים שנוסו — לחתוך רק את ההתחלה הסתיר את הגיבוי (22/09/2026)
        err = " | ".join(dict.fromkeys(str(e).split(" | ")))[:400]
        return report(f"הבינה נכשלה — העדכון הקודם נשאר: {err}")

    from geocode import Geocoder
    geocode = Geocoder()
    arenas, skipped = {}, {}
    for arena, items in per_arena.items():
        evs, why = build_arena(arena, items, (out.get(arena) or {}).get("events"), window_hours, now, known, geocode)
        if evs:
            arenas[arena] = {"events": evs}
        else:
            skipped[arena] = why

    # מודל חלש מחזיר לפעמים רשימה ריקה לכל הזירות אף שיש כתבות (22/09/2026: flash-lite ענה ריק,
    # והעדכון של 18:00 מחק את הידיעות של 12:00). זה ניסיון כושל — מנסים שוב.
    if not arenas and any(per_arena.values()):
        skipped = {a: EMPTY for a in skipped}
    retry = [a for a, why in skipped.items() if why != "אין ידיעות" and per_arena.get(a)]
    if retry:
        print("ניסיון חוזר ל:", ", ".join(retry))
        try:
            note = EMPTY_NOTE if all(skipped[a] == EMPTY for a in retry) else RETRY_NOTE
            out2 = an.llm_json(an.SYSTEM, prompt({a: per_arena[a] for a in retry}, note), schema_for(retry))
            for a in retry:
                evs, why = build_arena(a, per_arena[a], (out2.get(a) or {}).get("events"), window_hours, now, known, geocode)
                if evs:
                    arenas[a] = {"events": evs}
                    skipped.pop(a, None)
                else:
                    skipped[a] = why + " (גם בניסיון חוזר)"
        except Exception as e:
            print(f"הניסיון החוזר נכשל: {str(e)[:200]}")
    geocode.save()

    # זירה בלי ידיעות חדשות שומרת את מה שהוצג קודם, כל עוד הוא לא ישן מדי — עדכון חדש לא מוחק
    # ידיעות שעדיין רלוונטיות (22/09/2026: עדכון 18:00 שחזר ריק השאיר את האתר בלי ידיעות בכלל).
    if not arenas:
        # אין אף זירה חדשה — הקובץ הקודם נשאר כמו שהוא, והמועד נשאר פתוח לניסיון הבא
        return report("אין ידיעות חדשות באף זירה — העדכון הקודם נשאר: " +
                      "; ".join(f"{a}: {w}" for a, w in skipped.items()))
    kept = []
    for arena, old_arena in (old.get("arenas") or {}).items():
        if arena in arenas or not old_arena.get("events"):
            continue
        still = [e for e in old_arena["events"] if within_hours(e.get("occurred_at"), now, CARRY_HOURS)]
        if still:
            arenas[arena] = {"events": still, "from_slot": old.get("from_slot") or old.get("slot")}
            kept.append(f"{arena} {len(still)}")

    brief = {"slot": slot.isoformat(), "generated_at": now.isoformat(), "model": an.active_model_name(),
             "arenas": arenas, "skipped": skipped}
    tmp = BRIEF + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* נוצר אוטומטית ע\"י tools/war_brief.py — עדכון ביניים, עד 3 ידיעות לזירה. לא לערוך ידנית. */\n")
        f.write("window.DB = window.DB || {};\nwindow.DB.war_brief = ")
        json.dump(brief, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    os.replace(tmp, BRIEF)                               # קובץ חצי-כתוב לעולם לא נשאר במקום
    report(f"עדכון ביניים {slot:%H:%M}: " + ", ".join(f"{a} {len(v['events'])}" for a, v in arenas.items()) +
           (" · נשמרו מקודם: " + ", ".join(kept) if kept else "") +
           (" · דולגו: " + "; ".join(f"{a}: {w}" for a, w in skipped.items()) if skipped else ""), ok=True)


if __name__ == "__main__":
    main()
