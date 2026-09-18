"""
ingest_war.py — קליטת ניתוחי מלחמות מהמחשב הפרטי: תיבת דואר → בדיקה → טיוטה → אישור → פרסום
==============================================================================================
רץ בענן (GitHub Actions) לפני המשימה השעתית. בלי קבצים בתיבה — לא עושה כלום.

המסלול:
  data/war/inbox/*.json          ← המק מניח כאן קובץ (בכיוון אחד בלבד)
      │  בדיקה מול החוזה (tools/war_contract.py)
      ├─ נכשל → data/war/rejected/<שם>.errors.json   (רשימת שגיאות; הקובץ עצמו לא נשמר)
      └─ עבר  → data/war/drafts/<זירה>/<תאריך>__<ריצה>.json  + דוח: כמה אירועים בכל רמת אימות
  data/war/approved.json         ← אתה מוסיף כאן את שם הטיוטה שאישרת
      │  בדיקה חוזרת (אם מישהו שינה את הטיוטה בינתיים)
      └─ data/war/published.js   ← מה שהאתר מציג: הטיוטה המאושרת האחרונה לכל זירה

אף ניתוח לא מתפרסם בלי אישור שלך. טיוטות לא נמחקות — היסטוריה מלאה.
"""

import hashlib
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import war_contract as wc  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WAR = os.path.join(ROOT, "data", "war")
INBOX, DRAFTS, REJECTED = (os.path.join(WAR, d) for d in ("inbox", "drafts", "rejected"))
APPROVED = os.path.join(WAR, "approved.json")
PUBLISHED = os.path.join(WAR, "published.js")
MAX_FILE_BYTES = 300_000


def load_sources():
    with open(os.path.join(ROOT, "data", "sources.js"), encoding="utf-8") as f:
        t = f.read()
    return wc.known_source_ids(t), wc.source_groups(t)


def safe_name(s):
    return re.sub(r"[^A-Za-z0-9_\-]", "_", s)[:60]


def write_json(path, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)


def ingest(known, groups):
    if not os.path.isdir(INBOX):
        return []
    log = []
    for name in sorted(os.listdir(INBOX)):
        if name.startswith("."):
            continue
        path = os.path.join(INBOX, name)
        if not os.path.isfile(path):
            continue
        raw = open(path, "rb").read()
        digest = hashlib.sha256(raw).hexdigest()[:12]
        errors, doc = [], None
        if not name.endswith(".json"):
            errors = ["רק קבצי .json מתקבלים"]
        elif len(raw) > MAX_FILE_BYTES:
            errors = [f"קובץ גדול מדי ({len(raw)} > {MAX_FILE_BYTES} בייטים)"]
        else:
            try:
                doc = json.loads(raw.decode("utf-8"))
            except Exception as e:
                errors = [f"JSON לא תקין: {e}"]
            if doc is not None:
                errors = wc.validate(doc, known)

        if errors:
            write_json(os.path.join(REJECTED, f"{safe_name(name)}__{digest}.errors.json"),
                       {"file": name, "sha256_12": digest, "errors": errors[:200]})
            log.append(f"REJECTED {name}: {len(errors)} שגיאות (ראשונה: {errors[0]})")
        else:
            levels = {}
            for e in doc["events"]:
                lv = wc.assess(e, groups)
                levels[lv] = levels.get(lv, 0) + 1
            draft_name = f"{safe_name(doc['generated_at'][:16].replace(':', ''))}__{safe_name(doc['model']['run_id'])}.json"
            rel = f"drafts/{doc['arena']}/{draft_name}"
            write_json(os.path.join(WAR, rel), {
                "status": "draft",
                "received_sha256_12": digest,
                "preview": {"events": len(doc["events"]), "levels": levels,
                            "note": "כך האתר יחשב את רמות האימות. לאשר? הוסף את השם ל-data/war/approved.json"},
                "analysis": doc,
            })
            log.append(f"DRAFT    {rel}: {len(doc['events'])} אירועים, רמות: {levels}")
        os.remove(path)          # התיבה מתרוקנת — כל קובץ מטופל פעם אחת
    return log


# סדר רמות האימות — להשוואה "עלה/ירד" בין ניתוחים. הערכה/נתון לא משווים (הם לא סולם אימות).
LEVEL_RANK = {"retracted": 0, "disputed": 1, "unverified": 2, "initial": 3, "shared_root": 3, "verified": 4}


# ------------------------------------------------------------------ זיהוי אירוע מתמשך (סעיף 13 בביקורת)
# עד 18/09/2026 אירוע זוהה כ"המשך" רק לפי קישור משותף — וכמעט הכל יצא "חדש" (7 מתוך 8 באיראן).
# עכשיו: ציון בקוד, בלי בינה, משלושה רכיבים — מילים משותפות בכותרת, מקום משותף, קרבה בזמן.
# נבדק על הטיוטות האמיתיות של 17-18/09: "דו"ח האו"ם על תקיפות במינאב" ← "ממצאי האו"ם לגבי תקיפות באיראן" = המשך;
# שני אירועים שונים בלונדון = לא (מקום משותף לבד לא מספיק — חייבת גם מילה משותפת בכותרת).

PREFIXES = "והבלמשכ"
STOPWORDS = {"על", "עם", "של", "את", "אל", "מול", "בין", "לגבי", "נגד", "אחרי", "לפני", "כי", "או", "גם", "לא",
             "כן", "זה", "זו", "הוא", "היא", "הם", "כל", "עוד", "יותר", "חדש", "חדשה", "חדשות", "דיווח", "דיווחים"}
CERTAIN, POSSIBLE = 0.65, 0.40


def _norm_word(w):
    """מילה עברית בלי אותיות שימוש בתחילתה (עד 2), בלי גרשיים: "להפלת" → "פלת", "הפלת" → "פלת", 'ארה"ב' → "ארהב"."""
    w = re.sub(r"[\"'״׳`]", "", w.lower())
    for _ in range(2):
        if len(w) > 3 and w[0] in PREFIXES:
            w = w[1:]
    return w


def _title_words(title):
    words = re.findall(r"[\w\"'״׳-]+", title or "")
    out = set()
    for w in words:
        for part in w.split("-"):
            n = _norm_word(part)
            if len(n) >= 3 and n not in STOPWORDS and _norm_word(n) not in STOPWORDS:
                out.add(n)
    return out


PLACE_STOP = {"דרום", "צפון", "מזרח", "מערב", "מחוז", "אזור", "העיר", "עיר", "רצועת", "חוף", "מרחב", "על", "הדון"}


def _place_keys(ev):
    """מילים משם המקום (בלי המדינה אחרי הפסיק): "רוסטוב על הדון" ו"מחוז רוסטוב" → "רוסטוב" בשניהם."""
    keys = set()
    for p in ev.get("places") or []:
        main = re.split(r"[,،]", str(p.get("name") or ""))[0]
        for w in re.findall(r"[\w\"'״׳-]+", main):
            w = re.sub(r"^(אל|א)-", "", w)
            if w in PLACE_STOP:
                continue
            n = _norm_word(w)
            if len(n) >= 3 and n not in PLACE_STOP:
                keys.add(n)
    return keys


def _similar(a, b):
    """שמות מקום בתעתיק שונה מעט ("לאמרד" / "לאמזרד") — אותו מקום."""
    if a == b:
        return True
    import difflib
    return min(len(a), len(b)) >= 4 and difflib.SequenceMatcher(None, a, b).ratio() >= 0.8


def _hours_apart(a, b):
    from datetime import datetime
    try:
        ta = datetime.fromisoformat(a.get("first_reported_at") or a.get("last_update_at"))
        tb = datetime.fromisoformat(b.get("first_reported_at") or b.get("last_update_at"))
        return abs((ta - tb).total_seconds()) / 3600
    except Exception:
        return 999


def event_match_score(prev_ev, ev):
    """→ (ציון 0-1, מספר מילים משותפות).
    קישור משותף + מילה משותפת בכותרת = ודאי. קישור משותף בלבד = "אולי" — כתבה אחת מסקרת לפעמים כמה אירועים
    (18/09: "כיבוש רצועת החוף" ו"חפירת תעלות בבאב אל-מנדב" חלקו כתבה, והם לא אותו אירוע)."""
    urls = {r.get("url") for r in prev_ev.get("reports", [])}
    shared = len(_title_words(prev_ev.get("title")) & _title_words(ev.get("title")))
    if any(r.get("url") in urls for r in ev.get("reports", [])):
        return (1.0, shared) if shared else (POSSIBLE, 0)
    if shared == 0:
        return 0.0, 0                                   # מקום משותף לבד לא מספיק
    pa, pb = _place_keys(prev_ev), _place_keys(ev)
    place = any(_similar(a, b) for a in pa for b in pb)
    close = _hours_apart(prev_ev, ev) <= 72
    return round(0.55 * min(shared, 3) / 3 + 0.35 * place + 0.10 * close, 3), shared


def compare(prev_doc, doc, groups):
    """מה השתנה מהניתוח המאושר הקודם באותה זירה — קוד, לא בינה.
    לכל אירוע: new / same / up / down (המשך ודאי), או possible (אולי המשך — בלי לטעון עלה/ירד)."""
    if not prev_doc:
        return {}
    prev_events, cur_events = prev_doc.get("events", []), doc.get("events", [])
    pairs = []
    for i, p in enumerate(prev_events):
        for j, e in enumerate(cur_events):
            score, _ = event_match_score(p, e)
            if score >= POSSIBLE:
                pairs.append((score, i, j))
    pairs.sort(reverse=True)                             # ההתאמות החזקות קודם; כל אירוע מותאם פעם אחת לכל היותר
    used_prev, match = set(), {}
    for score, i, j in pairs:
        if i in used_prev or j in match:
            continue
        used_prev.add(i)
        match[j] = (prev_events[i], score)
    changes = {}
    for j, e in enumerate(cur_events):
        if j not in match:
            changes[e["id"]] = {"kind": "new"}
            continue
        prev, score = match[j]
        if score < CERTAIN:
            changes[e["id"]] = {"kind": "possible", "prev": prev.get("title", ""), "score": score}
            continue
        a, b = wc.assess(prev, groups), wc.assess(e, groups)
        kind = "same"
        if a in LEVEL_RANK and b in LEVEL_RANK and LEVEL_RANK[a] != LEVEL_RANK[b]:
            kind = "up" if LEVEL_RANK[b] > LEVEL_RANK[a] else "down"
        changes[e["id"]] = {"kind": kind, "from": a, "to": b, "prev": prev.get("title", ""), "score": score}
    return changes


def publish(known, groups=None):
    """הטיוטה המאושרת האחרונה לכל זירה → data/war/published.js, כולל "מה השתנה" מול המאושרת הקודמת."""
    if groups is None:
        groups = load_sources()[1]
    try:
        with open(APPROVED, encoding="utf-8") as f:
            meta = json.load(f)
    except FileNotFoundError:
        meta = {}
    approved = meta.get("approved", [])
    auto_set = set(meta.get("auto", []))       # פורסמו אוטומטית (עברו את בדיקות האיכות, לא נבדקו ידנית)
    per_arena, log = {}, []
    for rel in approved:
        if not isinstance(rel, str) or not re.fullmatch(r"drafts/(iran|ukraine|yemen|north)/[A-Za-z0-9_\-]+\.json", rel):
            log.append(f"SKIP     שם לא תקין ב-approved.json: {rel!r}")
            continue
        path = os.path.join(WAR, rel)
        if not os.path.isfile(path):
            log.append(f"SKIP     טיוטה לא קיימת: {rel}")
            continue
        with open(path, encoding="utf-8") as f:
            doc = json.load(f).get("analysis")
        errs = wc.validate(doc, known)       # בדיקה חוזרת — אולי הטיוטה נערכה אחרי שנוצרה
        if errs:
            log.append(f"SKIP     {rel} כבר לא עומד בחוזה: {errs[0]}")
            continue
        per_arena.setdefault(doc["arena"], []).append((doc["generated_at"], rel, doc))
    latest = {}
    for arena, rows in per_arena.items():
        rows.sort(key=lambda x: x[0])
        _, rel, doc = rows[-1]
        prev = rows[-2][2] if len(rows) > 1 else None
        latest[arena] = {"draft": rel, "analysis": doc, "auto": rel in auto_set,
                         "previous_generated_at": prev["generated_at"] if prev else None,
                         "changes": compare(prev, doc, groups)}
    os.makedirs(WAR, exist_ok=True)
    with open(PUBLISHED, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* נוצר אוטומטית ע\"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */\n")
        f.write("window.DB = window.DB || {};\nwindow.DB.war_published = ")
        json.dump(latest, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    for arena, v in sorted(latest.items()):
        log.append(f"PUBLISH  {arena} ← {v['draft']}")
    return log


def main():
    known, groups = load_sources()
    for line in ingest(known, groups) + publish(known, groups):
        print(line)


if __name__ == "__main__":
    main()
