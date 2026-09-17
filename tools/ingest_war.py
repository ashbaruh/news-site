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


def compare(prev_doc, doc, groups):
    """מה השתנה מהניתוח המאושר הקודם באותה זירה. אירועים מזוהים לפי קישור משותף לכתבה — קוד, לא בינה."""
    if not prev_doc:
        return {}
    prev_by_url = {}
    for e in prev_doc.get("events", []):
        for r in e.get("reports", []):
            prev_by_url.setdefault(r.get("url"), e)
    changes = {}
    for e in doc.get("events", []):
        match = next((prev_by_url[r.get("url")] for r in e.get("reports", []) if r.get("url") in prev_by_url), None)
        if match is None:
            changes[e["id"]] = {"kind": "new"}
            continue
        a, b = wc.assess(match, groups), wc.assess(e, groups)
        kind = "same"
        if a in LEVEL_RANK and b in LEVEL_RANK and LEVEL_RANK[a] != LEVEL_RANK[b]:
            kind = "up" if LEVEL_RANK[b] > LEVEL_RANK[a] else "down"
        changes[e["id"]] = {"kind": kind, "from": a, "to": b}
    return changes


def publish(known, groups=None):
    """הטיוטה המאושרת האחרונה לכל זירה → data/war/published.js, כולל "מה השתנה" מול המאושרת הקודמת."""
    if groups is None:
        groups = load_sources()[1]
    try:
        with open(APPROVED, encoding="utf-8") as f:
            approved = json.load(f).get("approved", [])
    except FileNotFoundError:
        approved = []
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
        latest[arena] = {"draft": rel, "analysis": doc,
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
