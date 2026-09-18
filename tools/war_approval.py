"""
war_approval.py — אישור הניתוח היומי דרך GitHub, בלי לערוך קבצים.
==================================================================
open     : אחרי הניתוח היומי — פותח "בקשת אישור" (Issue) עם תצוגה מקדימה בעברית.
           GitHub שולח לך מייל. קוראים, ומגיבים:
             מאשר               → כל הזירות מתפרסמות
             מאשר איראן תימן    → רק הזירות שנכתבו
             דוחה               → כלום לא מתפרסם, הבקשה נסגרת
approve  : רץ כשנכתבת תגובה. מוסיף את הטיוטות ל-data/war/approved.json.
           רק תגובה של בעל הפרויקט נחשבת. בקשה שלא נפתחה ע"י הבוט — מתעלמים.

אבטחה: שמות הטיוטות נלקחים מהבקשה, אבל נבדקים שוב (תבנית קבועה + קובץ קיים + עומד בחוזה בזמן הפרסום).
"""

import json
import os
import re
import sys
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import ingest_war as iw     # noqa: E402
import war_contract as wc   # noqa: E402

BOT = "github-actions[bot]"
MARK = re.compile(r"<!-- war-drafts: (\[.*?\]) -->")
DRAFT_RE = re.compile(r"drafts/(iran|ukraine|yemen|north)/[A-Za-z0-9_\-]+\.json")
ARENA_HE = {"iran": 'איראן – ישראל – ארה"ב', "ukraine": "רוסיה – אוקראינה",
            "yemen": "תימן (חות'ים)", "north": "הגזרה הצפונית (סוריה/לבנון/טורקיה)"}
# פקודות מדויקות בלבד (סעיף 1 בביקורת 18/09/2026): חיפוש מילים חופשי אישר בטעות משפטים כמו
# "אפשר אישור?" או "מאשר חוץ מאיראן" (שאישר דווקא את איראן). כל ניסוח אחר → "פקודה לא מוכרת".
ARENA_CMD = {"איראן": "iran", "אוקראינה": "ukraine", "תימן": "yemen", "צפון": "north"}
HELP = ("הפקודות האפשריות (תגובה שמכילה רק אותן):\n"
        "- `מאשר` — כל הזירות\n"
        "- `מאשר איראן` / `מאשר אוקראינה` / `מאשר תימן` / `מאשר צפון` — ואפשר כמה יחד: `מאשר איראן תימן`\n"
        "- `דוחה` — כלום לא מתפרסם")
INVISIBLE = re.compile("[​-‏‪-‮⁦-⁩]")   # סימני כיווניות נסתרים שמקלדת מוסיפה


def parse_command(text):
    """→ ("approve", [זירות] | []=הכל) / ("reject", None) / ("unknown", None). התאמה מדויקת בלבד."""
    t = INVISIBLE.sub("", text or "")
    tokens = t.replace(",", " ").split()
    if tokens == ["דוחה"]:
        return "reject", None
    if not tokens or tokens[0] != "מאשר":
        return "unknown", None
    arenas = []
    for tok in tokens[1:]:
        if tok not in ARENA_CMD and tok.startswith("ו") and tok[1:] in ARENA_CMD:
            tok = tok[1:]                                   # "מאשר איראן ותימן"
        if tok not in ARENA_CMD or ARENA_CMD[tok] in arenas:
            return "unknown", None
        arenas.append(ARENA_CMD[tok])
    return "approve", arenas


LEVEL_HE = {"verified": "✅ מאומת", "initial": "🟡 דיווח ראשוני (מקור אחד)", "shared_root": "🟠 מקור-שורש משותף",
            "assessment": "🔵 הערכה", "disputed": "⚠️ שנוי במחלוקת", "retracted": "❌ הוכחש",
            "unverified": "⚪ לא מאומת"}


# ------------------------------------------------------------------ GitHub

def gh(method, path, body=None):
    req = urllib.request.Request(
        "https://api.github.com/repos/" + os.environ["GITHUB_REPOSITORY"] + path, method=method,
        data=json.dumps(body).encode("utf-8") if body is not None else None,
        headers={"Authorization": "Bearer " + os.environ["GITHUB_TOKEN"],
                 "Accept": "application/vnd.github+json", "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read() or b"{}")


# ------------------------------------------------------------------ תצוגה מקדימה

def md(s):
    """טקסט מהבינה → Markdown בטוח: בלי תגיות, בלי קישורים/תיוגים שהבינה הכניסה."""
    s = re.sub(r"<[^>]*>", "", str(s or ""))
    s = s.replace("@", "@​")
    return re.sub(r"([\[\]()*_`#|>])", r"\\\1", s).strip()


def source_names():
    t = open(os.path.join(iw.ROOT, "data", "sources.js"), encoding="utf-8").read()
    return dict(re.findall(r"id:\s*'(src_[a-z0-9_]+)',\s*name:\s*'((?:[^'\\]|\\.)*)'", t))


def arena_md(rel, groups, names):
    doc = json.load(open(os.path.join(iw.WAR, rel), encoding="utf-8"))["analysis"]
    out = [f"## {ARENA_HE[doc['arena']]}", "", f"**תמונת מצב:** {md(doc['summary'])}", ""]
    out.append("**חזיתות:**")
    out += [f"- **{md(f['name'])}** — {md(f['status'])}" for f in doc["fronts"]]
    out += ["", f"**אירועים ({len(doc['events'])}):**"]
    for e in doc["events"]:
        links = " · ".join(f"[{md(names.get(r['source_id'], r['source_id']))}]"
                           f"({r['url'].replace('(', '%28').replace(')', '%29').replace(' ', '%20')})" for r in e["reports"])
        lvl = wc.assess(e, groups)
        label = "✅ אומת שנאמר — התוכן לא אומת" if lvl == "verified" and e.get("claim_type") == "statement" \
            else LEVEL_HE.get(lvl, "")
        out.append(f"- {label} — **{md(e['title'])}**  \n"
                   f"  {md(e['summary'])}  \n  _לא מאומת:_ {md(e['what_is_not_verified'])}  \n  מקורות: {links}")
    if doc["not_verified"]:
        out += ["", "**לא מאומת עדיין:**"] + [f"- {md(x)}" for x in doc["not_verified"]]
    if doc["strategic_goals"]:
        out += ["", "**מטרות הצדדים:**"]
        for g in doc["strategic_goals"]:
            out.append(f"- **{md(g['actor'])}** — מוצהר: {md('; '.join(g['declared'])) or '—'} · "
                       f"מוסק: {md('; '.join(g['inferred'])) or '—'} · תחזית: {md('; '.join(g['forecast'])) or '—'}")
    text = "\n".join(out)
    return text if len(text) < 14000 else text[:14000] + "\n\n…(קוצר — המלא בקובץ הטיוטה)"


def open_issue(new_drafts_file):
    try:
        with open(new_drafts_file, encoding="utf-8") as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        print("אין רשימת טיוטות חדשות (הניתוח לא הגיע לשמירה) — לא נפתחת בקשה")
        return
    drafts = [d for d in data.get("drafts", []) if DRAFT_RE.fullmatch(d)]
    failed = data.get("failed", [])
    if not drafts:
        print("אין טיוטות חדשות — לא נפתחת בקשה")
        return
    _, groups = iw.load_sources()
    names = source_names()
    date = re.search(r"/(\d{4})-(\d\d)-(\d\d)", "/" + os.path.basename(drafts[0]))
    day = f"{date.group(3)}/{date.group(2)}/{date.group(1)}" if date else ""
    # תיוג בעל הפרויקט — כך GitHub שולח התראה/מייל גם על בקשה שהבוט פתח (בלי תיוג: לא בטוח שתגיע התראה)
    owner = os.environ.get("GITHUB_REPOSITORY_OWNER", "")
    mention = f"@{owner} " if re.fullmatch(r"[A-Za-z0-9-]{1,39}", owner) else ""
    parts = [mention + "**הניתוח היומי מוכן — ממתין לאישור שלך.** עד שתאשר, באתר נשאר הניתוח הקודם.", "",
             "איך מאשרים — כותבים תגובה למטה. " + HELP, "",
             "> הבינה כתבה את הטקסט. **רמות האימות** (✅/🟡/🟠) חושבו בקוד לפי מספר המקורות העצמאיים — לא הבינה קבעה אותן.", ""]
    if failed:
        parts += ["**לא נותחו היום:** " + " · ".join(md(x) for x in failed), ""]
    for rel in drafts:
        parts += ["---", arena_md(rel, groups, names), ""]
    parts.append(f"<!-- war-drafts: {json.dumps(drafts)} -->")
    body = "\n".join(parts)[:64000]
    issue = gh("POST", "/issues", {"title": f"🛰️ ניתוח מלחמות יומי {day} — ממתין לאישור", "body": body})
    print("נפתחה בקשת אישור:", issue.get("html_url"))
    # בקשות אישור ישנות שעוד פתוחות — נסגרות, כדי שלא תאשר בטעות ניתוח ישן
    try:
        for old in gh("GET", "/issues?state=open&per_page=50") or []:
            if isinstance(old, dict) and (old.get("user") or {}).get("login") == BOT and old.get("number") != issue.get("number") \
                    and MARK.search(old.get("body") or ""):
                gh("POST", f"/issues/{old['number']}/comments",
                   {"body": f"הוחלף בבקשה חדשה (#{issue.get('number')}). הבקשה הזו נסגרת — לא פורסם ממנה כלום."})
                gh("PATCH", f"/issues/{old['number']}", {"state": "closed", "state_reason": "not_planned"})
    except Exception as e:
        print("סגירת בקשות ישנות נכשלה:", e)


# ------------------------------------------------------------------ אישור

def _generated_at(rel):
    try:
        with open(os.path.join(iw.WAR, rel), encoding="utf-8") as f:
            return json.load(f)["analysis"]["generated_at"]
    except Exception:
        return ""


def _write_json_atomic(path, obj):
    """כתיבה לקובץ זמני ואז החלפה — קובץ חצי-כתוב לעולם לא נשאר במקום."""
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write("\n")
    os.replace(tmp, path)


def _newer_request(n):
    """בקשת אישור פתוחה חדשה יותר של הבוט (אם יש). כשל ברשת → None (בדיקת הגיל למטה עדיין מגנה)."""
    try:
        for it in gh("GET", "/issues?state=open&per_page=50") or []:
            if isinstance(it, dict) and (it.get("user") or {}).get("login") == BOT \
                    and (it.get("number") or 0) > n and MARK.search(it.get("body") or ""):
                return it["number"]
    except Exception as e:
        print("בדיקת בקשות חדשות נכשלה:", e)
    return None


def approve(event_file):
    with open(event_file, encoding="utf-8") as f:
        ev = json.load(f)
    issue, comment = ev.get("issue") or {}, ev.get("comment") or {}
    owner = ev["repository"]["owner"]["login"]
    if (issue.get("user") or {}).get("login") != BOT or issue.get("state") != "open":
        return print("לא בקשת אישור של הבוט — מתעלם")
    if (comment.get("user") or {}).get("login") != owner or comment.get("author_association") != "OWNER":
        return print("תגובה לא של בעל הפרויקט — מתעלם")
    m = MARK.search(issue.get("body") or "")
    if not m:
        return print("אין רשימת טיוטות בבקשה — מתעלם")
    drafts = [d for d in json.loads(m.group(1)) if isinstance(d, str) and DRAFT_RE.fullmatch(d)
              and os.path.isfile(os.path.join(iw.WAR, d))]
    n = issue["number"]

    def say(text, close=None):
        gh("POST", f"/issues/{n}/comments", {"body": text})
        if close:
            gh("PATCH", f"/issues/{n}", {"state": "closed", "state_reason": close})

    kind, arenas = parse_command(comment.get("body"))
    if kind == "unknown":
        say("❓ פקודה לא מוכרת — לא פורסם דבר.\n\n" + HELP)
        return print("פקודה לא מוכרת")
    if kind == "reject":
        say("👍 נדחה. באתר נשאר הניתוח הקודם.", close="not_planned")
        return print("נדחה")

    # בקשה ישנה: אם יש בקשה חדשה יותר — מאשרים רק שם
    newer = _newer_request(n)
    if newer:
        say(f"⏭️ יש בקשת אישור חדשה יותר (#{newer}). הבקשה הזו ישנה — לא פורסם דבר. אשר בבקשה החדשה.",
            close="not_planned")
        return print("בקשה ישנה — יש חדשה יותר")

    if arenas:
        have = {d.split("/")[1] for d in drafts}
        missing = [a for a in arenas if a not in have]
        if missing:
            say("אין בבקשה הזו טיוטה ל: " + ", ".join(ARENA_HE[a] for a in missing) + " — לא פורסם דבר.")
            return print("זירה בלי טיוטה")
        drafts = [d for d in drafts if d.split("/")[1] in arenas]
    if not drafts:
        say("לא מצאתי טיוטות מתאימות לאישור — לא פורסם דבר.")
        return print("אין טיוטות")

    try:
        with open(iw.APPROVED, encoding="utf-8") as f:
            approved = json.load(f)
    except FileNotFoundError:
        approved = {"approved": []}
    lst = approved.setdefault("approved", [])

    # טיוטה ישנה או כבר מאושרת (סעיף 4: אושרה היום בקשה מאתמול שהתוכן שלה כבר היה באתר)
    newest = {}
    for rel in lst:
        if isinstance(rel, str) and DRAFT_RE.fullmatch(rel):
            a = rel.split("/")[1]
            newest[a] = max(newest.get(a, ""), _generated_at(rel))
    stale = [d for d in drafts if d in lst or _generated_at(d) <= newest.get(d.split("/")[1], "")]
    if stale:
        say("⏭️ הטיוטות בבקשה הזו כבר פורסמו או ישנות מהמפורסם (" +
            ", ".join(ARENA_HE[d.split("/")[1]] for d in stale) + ") — לא פורסם דבר.", close="not_planned")
        return print("טיוטות ישנות:", stale)

    lst += drafts
    _write_json_atomic(iw.APPROVED, approved)
    with open(os.path.join(ROOT, "approval-result.json"), "w", encoding="utf-8") as f:
        json.dump({"issue": n, "drafts": drafts}, f)
    print("אושרו:", drafts)


def report(result_file):
    """אחרי שהפרסום נשמר — תגובה בבקשה וסגירה."""
    res = json.load(open(result_file, encoding="utf-8"))
    names = ", ".join(ARENA_HE[d.split("/")[1]] for d in res["drafts"])
    gh("POST", f"/issues/{res['issue']}/comments",
       {"body": f"✅ פורסם באתר: {names}.\nהאתר יתעדכן תוך כמה דקות."})
    gh("PATCH", f"/issues/{res['issue']}", {"state": "closed", "state_reason": "completed"})


if __name__ == "__main__":
    cmd, arg = sys.argv[1], sys.argv[2]
    {"open": open_issue, "approve": approve, "report": report}[cmd](arg)
