"""
war_approval.py — אישור הניתוח היומי דרך GitHub, בלי לערוך קבצים.
==================================================================
auto     : אחרי הניתוח — טיוטה שעוברת את תנאי האיכות מתפרסמת לבד; חשודה נעצרת לאישור.
notify   : פותח הודעה אחת: מה פורסם אוטומטית (אפשר "בטל") ומה ממתין לאישור ולמה.
open     : (ישן) פותח "בקשת אישור" (Issue) עם תצוגה מקדימה בעברית.
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
def _cmd(c):
    """פקודה בבלוק קוד — ב-GitHub (גם באפליקציה בנייד) יש לבלוק כפתור העתקה."""
    return f"```\n{c}\n```"


HELP = ("הפקודות האפשריות (תגובה שמכילה רק אותן). **מאשר** — כל הזירות שממתינות:\n" + _cmd("מאשר") +
        "\nרק חלק מהזירות (אפשר כמה יחד, למשל `מאשר איראן תימן`): `מאשר איראן` / `מאשר אוקראינה` / "
        "`מאשר תימן` / `מאשר צפון`\n\n**דוחה** — כלום לא מתפרסם:\n" + _cmd("דוחה"))
HELP_AUTO = ("**בטל** — מחזיר את הניתוח הקודם במקום מה שפורסם אוטומטית:\n" + _cmd("בטל") +
             "\n**עצור אוטומטי** — מעכשיו כל ניתוח מחכה לאישור ידני (להחזרה: `הפעל אוטומטי`):\n" +
             _cmd("עצור אוטומטי"))
INVISIBLE = re.compile("[​-‏‪-‮⁦-⁩]")   # סימני כיווניות נסתרים שמקלדת מוסיפה


def parse_command(text):
    """→ ("approve", [זירות] | []=הכל) / ("reject", None) / ("unknown", None). התאמה מדויקת בלבד."""
    t = INVISIBLE.sub("", text or "")
    tokens = t.replace(",", " ").split()
    if tokens == ["דוחה"]:
        return "reject", None
    if tokens == ["בטל"]:
        return "revoke", None
    if tokens == ["עצור", "אוטומטי"]:
        return "auto_off", None
    if tokens == ["הפעל", "אוטומטי"]:
        return "auto_on", None
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


# ------------------------------------------------------------------ פרסום אוטומטי (אפשרות ב', 18/09/2026)
# טיוטה שעוברת את כל תנאי האיכות מתפרסמת לבד. טיוטה חשודה נעצרת ומחכה לאישור ידני, עם הסיבה.
# אחרי פרסום אוטומטי נפתחת הודעה, ובה אפשר לכתוב "בטל" (חזרה לניתוח הקודם) או "עצור אוטומטי".

AUTO_MARK = re.compile(r"<!-- war-auto: (\[.*?\]) -->")
# כתבים שאסור שיופיעו בטקסט העברי: ערבית, קירילית, יפנית/סינית, קוריאנית
FOREIGN = re.compile("[؀-ۿݐ-ݿЀ-ӿ぀-ヿ一-鿿가-힯]")
MIN_SOURCES, MIN_FAMILIES, MAX_EVENTS = 4, 3, 20


def auto_file():
    return os.path.join(iw.WAR, "auto.json")


def auto_enabled():
    try:
        with open(auto_file(), encoding="utf-8") as f:
            return json.load(f).get("enabled") is True
    except (FileNotFoundError, json.JSONDecodeError):
        return False


def _load(rel):
    with open(os.path.join(iw.WAR, rel), encoding="utf-8") as f:
        return json.load(f)["analysis"]


def _hebrew_texts(doc):
    yield doc.get("summary", "")
    for f in doc.get("fronts", []):
        yield f.get("name", "")
        yield f.get("status", "")
    for e in doc.get("events", []):
        yield e.get("title", "")
        yield e.get("summary", "")
        yield e.get("what_is_not_verified", "")
    yield from doc.get("not_verified", [])
    for g in doc.get("strategic_goals", []):
        yield g.get("actor", "")
        for k in ("declared", "inferred", "forecast"):
            yield from g.get(k, [])


def _approved_list():
    try:
        with open(iw.APPROVED, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"approved": []}


def _latest_approved(arena, exclude=()):
    best = None
    for rel in _approved_list().get("approved", []):
        if isinstance(rel, str) and DRAFT_RE.fullmatch(rel) and rel.split("/")[1] == arena and rel not in exclude:
            if best is None or _generated_at(rel) > _generated_at(best):
                best = rel
    return best


def quality_gate(rel, groups):
    """→ רשימת סיבות לעצירה. ריקה = מותר לפרסם אוטומטית. (החוזה כבר נבדק כשהטיוטה נוצרה.)"""
    doc = _load(rel)
    reasons = []
    ev = doc.get("events", [])
    if not 1 <= len(ev) <= MAX_EVENTS:
        reasons.append(f"מספר אירועים חריג ({len(ev)})")
    srcs = {r["source_id"] for e in ev for r in e.get("reports", [])}
    fams = {groups.get(s, s) for s in srcs}
    if len(srcs) < MIN_SOURCES:
        reasons.append(f"מעט מקורות ({len(srcs)})")
    if len(fams) < MIN_FAMILIES:
        reasons.append(f"מעט משפחות מקורות עצמאיות ({len(fams)})")
    bad = sum(1 for t in _hebrew_texts(doc) if isinstance(t, str) and FOREIGN.search(t))
    if bad:
        reasons.append(f"אותיות בשפה זרה בתוך הטקסט העברי ({bad} שדות)")
    ver = sum(1 for e in ev if wc.assess(e, groups) == "verified")
    prev_rel = _latest_approved(doc["arena"], exclude=(rel,))
    prev_ver = sum(1 for e in _load(prev_rel).get("events", []) if wc.assess(e, groups) == "verified") if prev_rel else 0
    if ver > max(3, prev_ver + 3):
        reasons.append(f"קפיצה חריגה באירועים המסומנים מאומתים ({prev_ver} → {ver})")
    return reasons


def auto(new_drafts_file):
    """אחרי הניתוח: מה שעבר את תנאי האיכות — מאושר ומתפרסם; השאר — ימתין לאישור (notify פותחת את הבקשה)."""
    try:
        with open(new_drafts_file, encoding="utf-8") as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return print("אין רשימת טיוטות חדשות — אין מה לפרסם")
    drafts = [d for d in data.get("drafts", []) if DRAFT_RE.fullmatch(d) and os.path.isfile(os.path.join(iw.WAR, d))]
    known, groups = iw.load_sources()
    published, held, reasons = [], [], {}
    for d in drafts:
        r = quality_gate(d, groups) if auto_enabled() else ["הפרסום האוטומטי כבוי"]
        if r:
            held.append(d)
            reasons[d] = r
        else:
            published.append(d)
    if published:
        approved = _approved_list()
        lst = approved.setdefault("approved", [])
        auto_lst = approved.setdefault("auto", [])
        lst += [d for d in published if d not in lst]
        auto_lst += [d for d in published if d not in auto_lst]
        _write_json_atomic(iw.APPROVED, approved)
        for line in iw.publish(known, groups):
            print(line)
    decision = {"published": published, "held": held, "reasons": reasons, "failed": data.get("failed", [])}
    _write_json_atomic(new_drafts_file + ".decision.json", decision)
    print("פורסם אוטומטית:", published, "· ממתין לאישור:", held)


def notify(decision_file):
    """פותח הודעה אחת: מה פורסם אוטומטית (אפשר "בטל") + מה ממתין לאישור ולמה."""
    try:
        with open(decision_file, encoding="utf-8") as f:
            dec = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return print("אין החלטת פרסום — לא נפתחת הודעה")
    open_issue(None, dec)


def open_issue(new_drafts_file, decision=None):
    published, reasons = [], {}
    if decision is not None:
        data = {"drafts": decision.get("held", []), "failed": decision.get("failed", [])}
        published = [d for d in decision.get("published", []) if DRAFT_RE.fullmatch(d)]
        reasons = decision.get("reasons", {})
    else:
        try:
            with open(new_drafts_file, encoding="utf-8") as f:
                data = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError):
            print("אין רשימת טיוטות חדשות (הניתוח לא הגיע לשמירה) — לא נפתחת בקשה")
            return
    drafts = [d for d in data.get("drafts", []) if DRAFT_RE.fullmatch(d)]
    failed = data.get("failed", [])
    if not drafts and not published:
        print("אין טיוטות חדשות — לא נפתחת בקשה")
        return
    # הבקשה החדשה סוגרת את הישנות — לכן היא לוקחת איתה טיוטות שעוד מחכות לאישור בבקשות הישנות
    # (18/09/2026: איראן נותחה בריצה אחת ושאר הזירות בריצה הבאה — בלי זה איראן הייתה נעלמת מהאישור).
    # לכל זירה נשארת הטיוטה החדשה ביותר, ורק כזו שעוד לא אושרה.
    try:
        old_issues = [o for o in (gh("GET", "/issues?state=open&per_page=50") or [])
                      if isinstance(o, dict) and (o.get("user") or {}).get("login") == BOT]
    except Exception as e:
        print("קריאת בקשות פתוחות נכשלה:", e)
        old_issues = []
    try:
        with open(iw.APPROVED, encoding="utf-8") as f:
            approved = set(json.load(f).get("approved", []))
    except (FileNotFoundError, json.JSONDecodeError):
        approved = set()
    pool = list(drafts)
    for o in old_issues:
        m = MARK.search(o.get("body") or "")
        for d in (json.loads(m.group(1)) if m else []):
            if isinstance(d, str) and DRAFT_RE.fullmatch(d) and os.path.isfile(os.path.join(iw.WAR, d)):
                pool.append(d)
    newest = {}
    for d in pool:
        if d in approved:
            continue
        a = d.split("/")[1]
        if a not in newest or _generated_at(d) > _generated_at(newest[a]):
            newest[a] = d
    drafts = [newest[a] for a in ("iran", "ukraine", "yemen", "north") if a in newest]
    failed = [f for f in failed if f.split(":")[0].split(" ")[0] not in newest]
    if not drafts and not published:
        print("כל הטיוטות כבר אושרו — לא נפתחת בקשה")
        return
    _, groups = iw.load_sources()
    names = source_names()
    date = re.search(r"/(\d{4})-(\d\d)-(\d\d)", "/" + os.path.basename((drafts or published)[0]))
    day = f"{date.group(3)}/{date.group(2)}/{date.group(1)}" if date else ""
    # תיוג בעל הפרויקט — כך GitHub שולח התראה/מייל גם על בקשה שהבוט פתח (בלי תיוג: לא בטוח שתגיע התראה)
    owner = os.environ.get("GITHUB_REPOSITORY_OWNER", "")
    mention = f"@{owner} " if re.fullmatch(r"[A-Za-z0-9-]{1,39}", owner) else ""
    note = "> הבינה כתבה את הטקסט. **רמות האימות** (✅/🟡/🟠) חושבו בקוד לפי מספר המקורות העצמאיים — לא הבינה קבעה אותן."
    parts = []
    if published:
        lite = any("lite" in str(_load(d).get("model", {}).get("name", "")) for d in published)
        parts += [mention + "**✅ פורסם אוטומטית באתר:** " + ", ".join(ARENA_HE[d.split("/")[1]] for d in published) +
                  ". עבר את כל בדיקות האיכות — אין צורך לעשות כלום.", ""]
        if lite:
            parts += ["⚠️ נכתב במודל הגיבוי (Flash-Lite) — איכות הניסוח עשויה להיות נמוכה יותר.", ""]
        parts += ["אם משהו לא בסדר: " + HELP_AUTO, ""]
        mention = ""
    if drafts:
        parts += [mention + "**⏸️ ממתין לאישור שלך:** " + ", ".join(ARENA_HE[d.split("/")[1]] for d in drafts) +
                  ". עד שתאשר, באתר נשאר הניתוח הקודם של הזירות האלה.", ""]
        for d in drafts:
            if reasons.get(d):
                parts.append(f"- **{ARENA_HE[d.split('/')[1]]}** נעצר: " + "; ".join(md(x) for x in reasons[d]))
        parts += ["", "איך מאשרים — כותבים תגובה למטה. " + HELP, ""]
    parts += [note, ""]
    if failed:
        parts += ["**לא נותחו היום:** " + " · ".join(md(x) for x in failed), ""]
    for rel in published + drafts:
        parts += ["---", arena_md(rel, groups, names), ""]
    parts.append(f"<!-- war-drafts: {json.dumps(drafts)} -->")
    parts.append(f"<!-- war-auto: {json.dumps(published)} -->")
    body = "\n".join(parts)[:64000]
    title = (f"🛰️ ניתוח מלחמות {day} — " +
             ("ממתין לאישור" if drafts and not published else
              "פורסם אוטומטית" if not drafts else "פורסם חלקית, חלק ממתין לאישור"))
    issue = gh("POST", "/issues", {"title": title, "body": body})
    print("נפתחה בקשת אישור:", issue.get("html_url"))
    # בקשות אישור ישנות שעוד פתוחות — נסגרות (הטיוטות שלהן שעוד לא אושרו עברו לבקשה החדשה)
    try:
        for old in old_issues:
            if old.get("number") != issue.get("number") and MARK.search(old.get("body") or ""):
                gh("POST", f"/issues/{old['number']}/comments",
                   {"body": f"הוחלף בבקשה חדשה (#{issue.get('number')}), שכוללת גם את הטיוטות מכאן שעוד לא אושרו. "
                            "הבקשה הזו נסגרת."})
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

    def result(drafts_done, action):
        """הקובץ שמפעיל בשלב הבא של ה-workflow: פרסום מחדש + שמירה + הודעת סיכום (report)."""
        with open(os.path.join(ROOT, "approval-result.json"), "w", encoding="utf-8") as f:
            json.dump({"issue": n, "drafts": drafts_done, "action": action}, f)

    if kind in ("auto_off", "auto_on"):
        _write_json_atomic(auto_file(), {"enabled": kind == "auto_on"})
        result([], kind)
        return print("פרסום אוטומטי:", kind)

    if kind == "revoke":
        am = AUTO_MARK.search(issue.get("body") or "")
        auto_d = [d for d in (json.loads(am.group(1)) if am else []) if isinstance(d, str) and DRAFT_RE.fullmatch(d)]
        approved = _approved_list()
        lst = approved.get("approved", [])
        gone = [d for d in auto_d if d in lst]
        if not gone:
            say("אין כאן ניתוח שפורסם אוטומטית ועדיין מופיע באתר — לא שונה דבר.")
            return print("אין מה לבטל")
        approved["approved"] = [d for d in lst if d not in gone]
        approved["auto"] = [d for d in approved.get("auto", []) if d not in gone]
        approved["revoked"] = approved.get("revoked", []) + gone
        _write_json_atomic(iw.APPROVED, approved)
        result(gone, "revoke")
        return print("בוטל:", gone)

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
    result(drafts, "approve")
    print("אושרו:", drafts)


def report(result_file):
    """אחרי שהשינוי נשמר — תגובה בבקשה (וסגירה, כשזה סוף הטיפול בה)."""
    with open(result_file, encoding="utf-8") as f:
        res = json.load(f)
    n, action = res["issue"], res.get("action", "approve")
    names = ", ".join(ARENA_HE[d.split("/")[1]] for d in res["drafts"])
    if action == "auto_off":
        return gh("POST", f"/issues/{n}/comments",
                  {"body": "⏸️ הפרסום האוטומטי כבוי. מעכשיו כל ניתוח ימתין לאישור שלך. להחזרה: `הפעל אוטומטי`"})
    if action == "auto_on":
        return gh("POST", f"/issues/{n}/comments",
                  {"body": "▶️ הפרסום האוטומטי פועל. ניתוח שעובר את כל בדיקות האיכות יתפרסם לבד."})
    text = (f"↩️ בוטל: {names}. באתר חזר הניתוח הקודם של הזירות האלה." if action == "revoke"
            else f"✅ פורסם באתר: {names}.")
    gh("POST", f"/issues/{n}/comments", {"body": text + "\nהאתר יתעדכן תוך כמה דקות."})
    gh("PATCH", f"/issues/{n}", {"state": "closed", "state_reason": "completed"})


if __name__ == "__main__":
    cmd, arg = sys.argv[1], sys.argv[2]
    {"open": open_issue, "auto": auto, "notify": notify, "approve": approve, "report": report}[cmd](arg)
