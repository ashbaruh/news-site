"""
war_contract.py — החוזה בין המחשב הפרטי (הבינה) לאתר, עבור פינת המלחמות
=========================================================================
המק מריץ את הבינה ושולח קובץ JSON אחד לכל זירה. לפני שהקובץ מגיע לאתר
הוא עובר את הבודק הזה. קובץ שלא עומד בחוזה — נדחה, לא "מתוקן אוטומטית".
(גבול האבטחה מהמפרט: "השרת בודק את מבנה הקלט".)

עקרונות שהבודק אוכף:
  1. הבינה לא קובעת "מאומת". אין שדה כזה בחוזה. אם הוא מופיע — דחייה.
     רמת האימות מחושבת באתר מתוך source_root_id ומשפחות המקורות.
  2. כל מקור חייב להיות רשום מראש ב-data/sources.js (עם רישיון).
     מקור חדש = אדם מוסיף אותו קודם. הבינה לא ממציאה מקורות.
  3. "מה לא מאומת" חובה — לכל אירוע, וגם סעיף נפרד לזירה.
  4. מטרות אסטרטגיות מופרדות: מוצהרת / מוסקת / תחזית. אי אפשר לערבב.
  5. המפה היא תמיד הערכה (is_assessment חייב להיות true) עם רמת ביטחון.
  6. בלי HTML, בלי קישורים שאינם https, בלי שדות שלא מוגדרים בחוזה.
  7. חלון זמן מוגדר ומוגבל (עד 72 שעות).

שימוש:  errors = validate(obj, known_sources)   → רשימה ריקה = תקין
"""

import re
from datetime import datetime, timezone

CONTRACT_VERSION = 1
ARENAS = {"iran", "ukraine", "yemen", "north"}
CLAIM_TYPES = {"incident", "statement", "assessment", "data"}
LIFECYCLES = {"active", "corrected", "retracted", "disputed"}
REVISION_KINDS = {"created", "correction", "retraction", "status_change", "downgrade", "source_added", "note"}
LEVELS = {"verified", "initial", "shared_root", "disputed", "retracted", "assessment", "unverified"}
CONFIDENCE = {"high", "medium", "low"}

# שדות שהבינה אסור לה לשלוח — אימות מחושב, לא מוצהר
FORBIDDEN_KEYS = {"level", "verification", "verified", "is_verified", "confidence_score"}

MAX_EVENTS = 60
MAX_PLACES = 5
MAX_WINDOW_HOURS = 72
EVENT_ID = re.compile(r"^[A-Z0-9][A-Z0-9\-]{2,39}$")
ROOT_ID = re.compile(r"^[a-z0-9_\-]{3,80}$")


class _V:
    def __init__(self, known_sources):
        self.errors = []
        self.known = set(known_sources)

    def err(self, path, msg):
        self.errors.append(f"{path}: {msg}")

    # ---- טיפוסים בסיסיים ----

    def keys(self, obj, path, required, optional=()):
        if not isinstance(obj, dict):
            self.err(path, "חייב להיות אובייקט")
            return False
        for k in obj:
            if k in FORBIDDEN_KEYS:
                self.err(f"{path}.{k}", "שדה אסור — רמת אימות מחושבת באתר, לא נקבעת ע\"י הבינה")
            elif k not in required and k not in optional:
                self.err(f"{path}.{k}", "שדה לא מוגדר בחוזה")
        for k in required:
            if k not in obj:
                self.err(f"{path}.{k}", "חסר שדה חובה")
        return True

    def text(self, v, path, max_len, required=True):
        if v is None and not required:
            return
        if not isinstance(v, str):
            self.err(path, "חייב להיות טקסט")
            return
        if required and not v.strip():
            self.err(path, "לא יכול להיות ריק")
        if len(v) > max_len:
            self.err(path, f"ארוך מדי ({len(v)} > {max_len})")
        if re.search(r"<[a-zA-Z/!]|javascript:|data:text", v, re.I):
            self.err(path, "אסור HTML או קוד בטקסט")

    def time(self, v, path, required=True):
        if v is None and not required:
            return None
        if not isinstance(v, str):
            self.err(path, "חייב להיות תאריך ISO")
            return None
        try:
            d = datetime.fromisoformat(v)
        except ValueError:
            self.err(path, "תאריך לא תקין")
            return None
        if d.tzinfo is None:
            self.err(path, "חסר אזור זמן (למשל +03:00)")
            return None
        return d

    def url(self, v, path):
        if not isinstance(v, str) or not re.match(r"^https://[^\s<>\"']+$", v) or len(v) > 500:
            self.err(path, "קישור חייב להתחיל ב-https:// ובלי תווים אסורים")

    def enum(self, v, allowed, path):
        if v not in allowed:
            self.err(path, f"ערך לא מותר '{v}' (מותר: {', '.join(sorted(allowed))})")

    def source(self, v, path):
        if v not in self.known:
            self.err(path, f"מקור '{v}' לא רשום ב-data/sources.js — צריך להוסיף אותו קודם, עם רישיון")

    def text_list(self, v, path, max_items, max_len, allow_empty=True):
        if not isinstance(v, list):
            self.err(path, "חייב להיות רשימה")
            return
        if not allow_empty and not v:
            self.err(path, "לא יכול להיות ריק")
        if len(v) > max_items:
            self.err(path, f"יותר מדי פריטים ({len(v)} > {max_items})")
        for i, s in enumerate(v):
            self.text(s, f"{path}[{i}]", max_len)

    # ---- חלקי החוזה ----

    def report(self, r, path):
        if not self.keys(r, path, ["source_id", "source_root_id", "url", "published_at"], ["note"]):
            return
        self.source(r.get("source_id"), path + ".source_id")
        if not isinstance(r.get("source_root_id"), str) or not ROOT_ID.match(r["source_root_id"]):
            self.err(path + ".source_root_id", "חובה: מזהה מקור-שורש באותיות קטנות/ספרות/_- (3-80 תווים)")
        self.url(r.get("url"), path + ".url")
        self.time(r.get("published_at"), path + ".published_at")
        self.text(r.get("note"), path + ".note", 200, required=False)

    def place(self, pl, path):
        # מיקום על המפה — הקואורדינטות מחושבות בקוד (OpenStreetMap), לא ע"י הבינה
        if not self.keys(pl, path, ["name", "lat", "lon"]):
            return
        self.text(pl.get("name"), path + ".name", 80)
        for k, lim in (("lat", 90), ("lon", 180)):
            v = pl.get(k)
            if not isinstance(v, (int, float)) or isinstance(v, bool) or not -lim <= v <= lim:
                self.err(f"{path}.{k}", f"מספר בין {-lim} ל-{lim}")

    def revision(self, rv, path):
        if not self.keys(rv, path, ["at", "kind", "text"], ["from_level", "to_level"]):
            return
        self.time(rv.get("at"), path + ".at")
        self.enum(rv.get("kind"), REVISION_KINDS, path + ".kind")
        self.text(rv.get("text"), path + ".text", 400)
        for k in ("from_level", "to_level"):
            if k in rv:
                self.enum(rv[k], LEVELS, f"{path}.{k}")
        if rv.get("kind") == "downgrade" and not ("from_level" in rv and "to_level" in rv):
            self.err(path, "הורדת סטטוס חייבת לציין from_level ו-to_level — כדי שהקורא יראה מה השתנה")

    def event(self, e, path, window):
        req = ["id", "title", "summary", "axis", "claim_type", "lifecycle", "occurred_at", "is_ongoing",
               "first_reported_at", "last_update_at", "what_is_not_verified", "is_new_in_window", "reports"]
        if not self.keys(e, path, req, ["occurred_to", "revisions", "places"]):
            return
        if not isinstance(e.get("id"), str) or not EVENT_ID.match(e["id"]):
            self.err(path + ".id", "מזהה באותיות גדולות/ספרות/מקף, 3-40 תווים")
        self.text(e.get("title"), path + ".title", 200)
        self.text(e.get("summary"), path + ".summary", 1200)
        self.text(e.get("axis"), path + ".axis", 80)
        self.enum(e.get("claim_type"), CLAIM_TYPES, path + ".claim_type")
        self.enum(e.get("lifecycle"), LIFECYCLES, path + ".lifecycle")
        start = self.time(e.get("occurred_at"), path + ".occurred_at")
        end = self.time(e.get("occurred_to"), path + ".occurred_to", required=False)
        if not isinstance(e.get("is_ongoing"), bool):
            self.err(path + ".is_ongoing", "חייב להיות true/false")
        if e.get("is_ongoing") is True and end is not None:
            self.err(path, "אירוע מתמשך לא יכול להיות גם עם תאריך סיום")
        if start and end and end < start:
            self.err(path + ".occurred_to", "תאריך סיום לפני תאריך התחלה")
        self.time(e.get("first_reported_at"), path + ".first_reported_at")
        last = self.time(e.get("last_update_at"), path + ".last_update_at")
        self.text(e.get("what_is_not_verified"), path + ".what_is_not_verified", 600)
        if not isinstance(e.get("is_new_in_window"), bool):
            self.err(path + ".is_new_in_window", "חייב להיות true/false — מה חדש ומה אימות מאוחר (מהמפרט)")
        if last and window and not (window[0] <= last <= window[1]):
            self.err(path + ".last_update_at", "מחוץ לחלון הזמן של הדיווח")
        reps = e.get("reports")
        if not isinstance(reps, list) or not reps:
            self.err(path + ".reports", "חובה לפחות דיווח אחד עם מקור")
        else:
            for i, r in enumerate(reps[:30]):
                self.report(r, f"{path}.reports[{i}]")
        places = e.get("places", [])
        if not isinstance(places, list) or len(places) > MAX_PLACES:
            self.err(path + ".places", f"רשימה של עד {MAX_PLACES} מקומות")
        else:
            for i, pl in enumerate(places):
                self.place(pl, f"{path}.places[{i}]")
        revs = e.get("revisions", [])
        if not isinstance(revs, list):
            self.err(path + ".revisions", "חייב להיות רשימה")
        else:
            for i, rv in enumerate(revs[:30]):
                self.revision(rv, f"{path}.revisions[{i}]")

    def run(self, doc):
        req = ["contract_version", "arena", "generated_at", "window", "model", "summary", "fronts",
               "events", "not_verified", "map", "economy", "strategic_goals", "sources_cited"]
        if not self.keys(doc, "root", req):
            return self.errors
        if doc.get("contract_version") != CONTRACT_VERSION:
            self.err("root.contract_version", f"גרסת חוזה חייבת להיות {CONTRACT_VERSION}")
        self.enum(doc.get("arena"), ARENAS, "root.arena")
        gen = self.time(doc.get("generated_at"), "root.generated_at")
        if gen and gen > datetime.now(timezone.utc):
            self.err("root.generated_at", "תאריך בעתיד")

        window = None
        w = doc.get("window")
        if self.keys(w, "window", ["from", "to"]):
            f, t = self.time(w.get("from"), "window.from"), self.time(w.get("to"), "window.to")
            if f and t:
                hours = (t - f).total_seconds() / 3600
                if hours <= 0 or hours > MAX_WINDOW_HOURS:
                    self.err("window", f"חלון זמן חייב להיות בין 0 ל-{MAX_WINDOW_HOURS} שעות (התקבל {hours:.1f})")
                else:
                    window = (f, t)

        m = doc.get("model")
        if self.keys(m, "model", ["name", "run_id"]):
            self.text(m.get("name"), "model.name", 80)
            self.text(m.get("run_id"), "model.run_id", 80)

        self.text(doc.get("summary"), "root.summary", 1500)

        fronts = doc.get("fronts")
        if not isinstance(fronts, list) or not fronts:
            self.err("root.fronts", "חובה לפחות חזית/ציר אחד בשם (מהמפרט: לא 'הלחימה נמשכת')")
        else:
            for i, fr in enumerate(fronts[:20]):
                if self.keys(fr, f"fronts[{i}]", ["name", "status"]):
                    self.text(fr.get("name"), f"fronts[{i}].name", 80)
                    self.text(fr.get("status"), f"fronts[{i}].status", 800)

        events = doc.get("events")
        if not isinstance(events, list):
            self.err("root.events", "חייב להיות רשימה")
        else:
            if len(events) > MAX_EVENTS:
                self.err("root.events", f"יותר מדי אירועים ({len(events)} > {MAX_EVENTS})")
            ids = set()
            for i, e in enumerate(events[:MAX_EVENTS]):
                self.event(e, f"events[{i}]", window)
                if isinstance(e, dict) and e.get("id") in ids:
                    self.err(f"events[{i}].id", "מזהה כפול")
                if isinstance(e, dict):
                    ids.add(e.get("id"))

        self.text_list(doc.get("not_verified"), "root.not_verified", 40, 600)

        mp = doc.get("map")
        if self.keys(mp, "map", ["confidence", "is_assessment", "note"], ["layers"]):
            self.enum(mp.get("confidence"), CONFIDENCE, "map.confidence")
            if mp.get("is_assessment") is not True:
                self.err("map.is_assessment", "המפה היא תמיד הערכה אנליטית — חייב להיות true (מהמפרט)")
            self.text(mp.get("note"), "map.note", 600)
            layers = mp.get("layers", [])
            if not isinstance(layers, list) or len(layers) > 30:
                self.err("map.layers", "רשימה של עד 30 שכבות")
            else:
                for i, ly in enumerate(layers):
                    if self.keys(ly, f"map.layers[{i}]", ["name", "confidence", "description"]):
                        self.text(ly.get("name"), f"map.layers[{i}].name", 80)
                        self.enum(ly.get("confidence"), CONFIDENCE, f"map.layers[{i}].confidence")
                        self.text(ly.get("description"), f"map.layers[{i}].description", 400)

        eco = doc.get("economy")
        if not isinstance(eco, list):
            self.err("root.economy", "חייב להיות רשימה (מהמפרט: מגמות כלכליות עם מספרים)")
        else:
            for i, x in enumerate(eco[:20]):
                p = f"economy[{i}]"
                if self.keys(x, p, ["indicator", "value", "unit", "source_id", "as_of"], ["change_pct"]):
                    self.text(x.get("indicator"), p + ".indicator", 80)
                    if not isinstance(x.get("value"), (int, float)) or isinstance(x.get("value"), bool):
                        self.err(p + ".value", "חייב להיות מספר")
                    if "change_pct" in x and x["change_pct"] is not None and \
                            (not isinstance(x["change_pct"], (int, float)) or isinstance(x["change_pct"], bool)):
                        self.err(p + ".change_pct", "חייב להיות מספר או null")
                    self.text(x.get("unit"), p + ".unit", 20)
                    self.source(x.get("source_id"), p + ".source_id")
                    self.time(x.get("as_of"), p + ".as_of")

        goals = doc.get("strategic_goals")
        if not isinstance(goals, list):
            self.err("root.strategic_goals", "חייב להיות רשימה")
        else:
            for i, g in enumerate(goals[:10]):
                p = f"strategic_goals[{i}]"
                # שלוש רשימות נפרדות — אי אפשר לערבב מטרה מוצהרת עם הערכה או תחזית
                if self.keys(g, p, ["actor", "declared", "inferred", "forecast"]):
                    self.text(g.get("actor"), p + ".actor", 80)
                    for k in ("declared", "inferred", "forecast"):
                        self.text_list(g.get(k), f"{p}.{k}", 10, 400)

        cited = doc.get("sources_cited")
        if not isinstance(cited, list) or not cited:
            self.err("root.sources_cited", "חובה: ציטוט מקורות + תאריך בסוף כל עדכון (מהמפרט)")
        else:
            for i, c in enumerate(cited[:80]):
                p = f"sources_cited[{i}]"
                if self.keys(c, p, ["source_id", "url", "accessed_at"]):
                    self.source(c.get("source_id"), p + ".source_id")
                    self.url(c.get("url"), p + ".url")
                    self.time(c.get("accessed_at"), p + ".accessed_at")

        # עקביות: כל מקור שמופיע בדיווחים חייב להופיע גם ברשימת המקורות המצוטטים
        if isinstance(events, list) and isinstance(cited, list):
            used = {r.get("source_id") for e in events if isinstance(e, dict)
                    for r in (e.get("reports") or []) if isinstance(r, dict)}
            listed = {c.get("source_id") for c in cited if isinstance(c, dict)}
            missing = sorted(s for s in used - listed if s)
            if missing:
                self.err("root.sources_cited", "מקורות שמופיעים בדיווחים חסרים ברשימת הציטוט: " + ", ".join(missing))
        return self.errors


def validate(doc, known_sources):
    return _V(known_sources).run(doc)


def known_source_ids(sources_js_text):
    """קורא את מזהי המקורות מ-data/sources.js (בלי להריץ JavaScript)."""
    return set(re.findall(r"\bid:\s*'(src_[a-z0-9_]+)'", sources_js_text))


# ---- חישוב רמת אימות — אותם כללים בדיוק כמו assets/js/reliability.js ----
# משמש רק כדי להראות לך, לפני אישור, מה האתר יציג. לא נשמר כ"אמת".

def source_groups(sources_js_text):
    groups = {}
    for m in re.finditer(r"id:\s*'(src_[a-z0-9_]+)'.*?independence_group:\s*'([^']+)'", sources_js_text, re.S):
        groups[m.group(1)] = m.group(2)
    return groups


IDF_GROUP = "official_il"


def assess(event, groups):
    reports = event.get("reports") or []
    roots = {r.get("source_root_id") for r in reports}
    fams = {groups.get(r.get("source_id")) for r in reports}
    if event.get("lifecycle") == "retracted":
        return "retracted"
    if event.get("lifecycle") == "disputed":
        return "disputed"
    if event.get("claim_type") == "assessment":
        return "assessment"
    if event.get("claim_type") == "data" and reports:
        return "verified"
    if not reports:
        return "unverified"
    if len(roots) >= 2 and len(fams) >= 2:
        return "verified"
    if IDF_GROUP in fams:            # הודעה רשמית של צה"ל = מאושר (החלטת בעל האתר, 21/09/2026)
        return "verified"
    if len(reports) == 1:
        return "initial"
    return "shared_root"
