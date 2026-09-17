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
ARENA_WORDS = {"iran": ["איראן"], "ukraine": ["אוקראינה", "רוסיה"],
               "yemen": ["תימן", "חותים", "חות'ים"], "north": ["צפון", "הצפונית", "לבנון", "סוריה"]}
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
        links = " · ".join(f"[{md(names.get(r['source_id'], r['source_id']))}]({r['url']})" for r in e["reports"])
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
    data = json.load(open(new_drafts_file, encoding="utf-8"))
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
             "איך מאשרים — כותבים תגובה למטה:",
             "- `מאשר` — הכל מתפרסם",
             "- `מאשר איראן תימן` — רק הזירות שכתבת (איראן / אוקראינה / תימן / צפון)",
             "- `דוחה` — כלום לא מתפרסם", "",
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
            if (old.get("user") or {}).get("login") == BOT and old.get("number") != issue.get("number") \
                    and MARK.search(old.get("body") or ""):
                gh("POST", f"/issues/{old['number']}/comments",
                   {"body": f"הוחלף בבקשה חדשה (#{issue.get('number')}). הבקשה הזו נסגרת — לא פורסם ממנה כלום."})
                gh("PATCH", f"/issues/{old['number']}", {"state": "closed", "state_reason": "not_planned"})
    except Exception as e:
        print("סגירת בקשות ישנות נכשלה:", e)


# ------------------------------------------------------------------ אישור

def approve(event_file):
    ev = json.load(open(event_file, encoding="utf-8"))
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
    text = comment.get("body") or ""
    n = issue["number"]

    if re.search(r"דוחה|לא\s+מאשר|לא\s+לאשר", text):
        gh("POST", f"/issues/{n}/comments", {"body": "👍 נדחה. באתר נשאר הניתוח הקודם."})
        gh("PATCH", f"/issues/{n}", {"state": "closed", "state_reason": "not_planned"})
        return print("נדחה")
    if not re.search(r"מאשר|מאושר|אישור", text):
        return print("אין מילת אישור — מתעלם")

    chosen = [a for a, words in ARENA_WORDS.items() if any(w in text for w in words)]
    if chosen:
        drafts = [d for d in drafts if d.split("/")[1] in chosen]
    if not drafts:
        gh("POST", f"/issues/{n}/comments", {"body": "לא מצאתי טיוטות מתאימות לאישור — לא פורסם כלום."})
        return

    try:
        approved = json.load(open(iw.APPROVED, encoding="utf-8"))
    except FileNotFoundError:
        approved = {"approved": []}
    lst = approved.setdefault("approved", [])
    lst += [d for d in drafts if d not in lst]
    with open(iw.APPROVED, "w", encoding="utf-8", newline="\n") as f:
        json.dump(approved, f, ensure_ascii=False, indent=1)
        f.write("\n")
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
