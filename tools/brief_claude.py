"""
brief_claude.py — עדכון ביניים "לפי בקשה" שנכתב ע"י Claude, בלי Gemini (CLAUDE.md, החלטה מ-01/10/2026).
=========================================================================================================
שני שלבים, שניהם רצים ב-GitHub (שם יש רשת), והבחירה והניסוח באמצע — Claude:

  1. collect  → אותו איסוף ואותה בחירת כתבות כמו war_brief.py  →  data/war/claude_input.json
  2. (Claude קורא את הכתבות וכותב data/war/claude_events.json — עד 3 ידיעות לזירה, בפורמט EVENTS_SCHEMA,
      "support.item" = מספר הכתבה ברשימה של אותה זירה)
  3. build    → אותו מסלול הרכבה ובדיקות כמו war_brief.py (מקורות-שורש, שומר העתקה, חוזה, אותיות זרות)
                →  data/war/brief.js, עם "model": "claude"

התווית "מאומת" מחושבת בקוד (reliability.js) — Claude לא כותב שדה אימות.

הרצה:  python tools/brief_claude.py collect
       python tools/brief_claude.py build
"""

import json
import os
import sys
from datetime import datetime, timedelta, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "mac"))
import collect_war as cw      # noqa: E402
import ingest_war as iw       # noqa: E402
import war_brief as wb        # noqa: E402
import war_contract as wc     # noqa: E402

INPUT = os.path.join(wb.ROOT, "data", "war", "claude_input.json")
EVENTS = os.path.join(wb.ROOT, "data", "war", "claude_events.json")
MODEL = "claude"


def collect():
    now = datetime.now(timezone.utc).replace(microsecond=0)
    slot = wb.current_slot(now)
    since = min(wb.previous_slot(slot).astimezone(timezone.utc), now - timedelta(hours=4)) - timedelta(hours=1)
    window_hours = min(max((now - since).total_seconds() / 3600, 4), 24)
    known, _ = iw.load_sources()
    arenas = {}
    for arena in sorted(wc.ARENAS):
        try:
            got = [it for it in cw.collect(arena, hours=window_hours, log=lambda *_: None) if it["source_id"] in known]
        except Exception as e:
            print(f"{arena}: איסוף נכשל — {e}")
            got = []
        arenas[arena] = wb.pick_items(got)
        print(f"{arena}: {len(arenas[arena])} כתבות")
    with open(INPUT, "w", encoding="utf-8", newline="\n") as f:
        json.dump({"collected_at": now.isoformat(), "slot": slot.isoformat(), "window_hours": window_hours,
                   "arenas": arenas}, f, ensure_ascii=False, indent=1)


def build():
    with open(INPUT, encoding="utf-8") as f:
        inp = json.load(f)
    with open(EVENTS, encoding="utf-8") as f:
        out = json.load(f)
    now = datetime.now(timezone.utc).replace(microsecond=0)
    known, _ = iw.load_sources()
    from geocode import Geocoder
    geocode = Geocoder()
    arenas, skipped = {}, {}
    for arena, items in inp["arenas"].items():
        evs, why = wb.build_arena(arena, items, (out.get(arena) or {}).get("events"), inp["window_hours"], now, known, geocode)
        if evs:
            arenas[arena] = {"events": evs}
        else:
            skipped[arena] = why
    geocode.save()
    if not arenas:
        return wb.report("עדכון לפי בקשה (Claude): אף זירה לא עברה — העדכון הקודם נשאר: " +
                         "; ".join(f"{a}: {w}" for a, w in skipped.items()))
    old = wb.load_brief()
    kept = []
    for arena, old_arena in (old.get("arenas") or {}).items():
        if arena in arenas or not old_arena.get("events"):
            continue
        still = [e for e in old_arena["events"] if wb.within_hours(e.get("occurred_at"), now, wb.CARRY_HOURS)]
        if still:
            arenas[arena] = {"events": still, "from_slot": old_arena.get("from_slot") or old.get("slot")}
            kept.append(f"{arena} {len(still)}")
    # מועד = זמן הכתיבה בפועל (לא מועד קבוע), כדי שהערוץ יפרסם אותו כעדכון חדש ולא ידלג עליו
    slot = wb.il_now(now).replace(second=0, microsecond=0)
    brief = {"slot": slot.isoformat(), "generated_at": now.isoformat(), "model": MODEL, "arenas": arenas, "skipped": skipped}
    tmp = wb.BRIEF + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* נוצר אוטומטית ע\"י tools/war_brief.py — עדכון ביניים, עד 3 ידיעות לזירה. לא לערוך ידנית. */\n")
        f.write("window.DB = window.DB || {};\nwindow.DB.war_brief = ")
        json.dump(brief, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    os.replace(tmp, wb.BRIEF)
    wb.report(f"עדכון לפי בקשה (Claude) {slot:%H:%M}: " + ", ".join(f"{a} {len(v['events'])}" for a, v in arenas.items()) +
              (" · נשמרו מקודם: " + ", ".join(kept) if kept else "") +
              (" · דולגו: " + "; ".join(f"{a}: {w}" for a, w in skipped.items()) if skipped else ""), ok=True)


# ------------------------------------------------------------------ ניתוח עמוק לפי בקשה (Claude)
# אותו איסוף כמו war_daily.py (24-26 שעות, עד 40 כתבות לזירה), אותה הרכבה ובדיקת חוזה (analyze.build),
# אותה כלכלה (economy_for), ואז תיבה → טיוטה → אישור → פרסום (ingest_war.py). רק הבחירה והניסוח — Claude.

DEEP_INPUT = os.path.join(wb.ROOT, "data", "war", "claude_deep_input.json")
DEEP_EVENTS = os.path.join(wb.ROOT, "data", "war", "claude_deep_events.json")


def collect_deep():
    import analyze as an
    known, _ = iw.load_sources()
    now = datetime.now(timezone.utc).replace(microsecond=0)
    arenas = {}
    for arena in sorted(wc.ARENAS):
        try:
            got = [it for it in cw.collect(arena, log=lambda *_: None)
                   if it["source_id"] in known and str(it.get("url", "")).startswith("https://")]
        except Exception as e:
            print(f"{arena}: איסוף נכשל — {e}")
            got = []
        arenas[arena] = sorted(got, key=lambda it: it.get("published_at", ""), reverse=True)[:an.MAX_ITEMS]
        print(f"{arena}: {len(arenas[arena])} כתבות")
    with open(DEEP_INPUT, "w", encoding="utf-8", newline="\n") as f:
        json.dump({"collected_at": now.isoformat(), "window_hours": 24, "arenas": arenas}, f, ensure_ascii=False, indent=1)


def build_deep():
    import analyze as an
    import war_daily as wd
    from geocode import Geocoder
    an.active_model_name = lambda: MODEL            # בקובץ הניתוח: "model": {"name": "claude"} (CLAUDE.md)
    with open(DEEP_INPUT, encoding="utf-8") as f:
        inp = json.load(f)
    with open(DEEP_EVENTS, encoding="utf-8") as f:
        out = json.load(f)
    known, groups = iw.load_sources()
    now = datetime.now(timezone.utc).replace(microsecond=0)
    geocode = Geocoder()
    os.makedirs(iw.INBOX, exist_ok=True)
    results = []
    for arena, items in inp["arenas"].items():
        o = out.get(arena)
        if not o or not items:
            results.append(f"{arena}: דולג (אין ניתוח או אין כתבות)")
            continue
        doc = an.build(arena, items, o, o, inp["window_hours"], wd.map_confidence(arena),
                       f"{arena}-claude-{now:%Y%m%d%H%M}", now, geocode=geocode)
        doc["economy"] = wd.economy_for(arena)
        errors = wc.validate(doc, known)
        if errors:
            results.append(f"{arena}: ❌ לא עבר את בדיקת החוזה — {errors[0][:160]}")
            continue
        path = os.path.join(iw.INBOX, doc["model"]["run_id"] + ".json")
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
        results.append(f"{arena}: ✓ {len(doc['events'])} אירועים")
    geocode.save()
    before = set()
    for a in wc.ARENAS:
        d = os.path.join(iw.WAR, "drafts", a)
        if os.path.isdir(d):
            before |= {f"drafts/{a}/{n}" for n in os.listdir(d)}
    for line in iw.ingest(known, groups):
        print(line)
    new = set()
    for a in wc.ARENAS:
        d = os.path.join(iw.WAR, "drafts", a)
        if os.path.isdir(d):
            new |= {f"drafts/{a}/{n}" for n in os.listdir(d)}
    new = sorted(new - before)
    # בעל האתר ביקש את הניתוח ישירות — אישור בשמו (CLAUDE.md, שלב 2: "להוסיף את הטיוטה ל-approved.json")
    with open(iw.APPROVED, encoding="utf-8") as f:
        meta = json.load(f)
    meta.setdefault("approved", []).extend(n for n in new if n not in meta["approved"])
    with open(iw.APPROVED, "w", encoding="utf-8", newline="\n") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
        f.write("\n")
    for line in iw.publish(known, groups):
        print(line)
    print("\n".join(results))
    if not new:
        sys.exit("אף זירה לא עברה — הניתוח הקודם נשאר")


if __name__ == "__main__":
    {"collect": collect, "build": build, "collect-deep": collect_deep, "build-deep": build_deep}[sys.argv[1] if len(sys.argv) > 1 else ""]()
