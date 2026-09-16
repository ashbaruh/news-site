"""
update_data.py — המשימה האוטומטית של האתר
=============================================
רצה בענן (GitHub Actions) פעם בשעה, בלי המחשב הפרטי ובלי מפתחות.
אפשר גם להריץ ידנית:  python tools/update_data.py

מה היא עושה — רק מה שהאתר לא יכול לעשות לבד מהדפדפן
(מקורות שחוסמים קריאה ישירה מאתר אחר):
  1. ריבית בנק ישראל — מהמקור הרשמי
  1ב. גלובס — כתבות ראשיות וכותרות שוק (עברית, בלי תרגום)
  2. חתולים וחיות — Good News Network (אנגלית → כותרת מתורגמת)
  3. קולנוע ביתי / סטריאו — What Hi-Fi (אנגלית → כותרת מתורגמת)

כללים:
  - מתרגמים *רק כותרות*, לא כתבות. תמיד עם קישור למקור. (זכויות יוצרים, לפי המפרט)
  - כל תרגום נשמר, כדי לא לתרגם את אותה כותרת פעמיים.
  - מקור שנכשל לא מוחק את מה שהיה — הנתון הקודם נשאר, מסומן עם זמן הבדיקה האחרונה המוצלחת.
  - כל קלט נבדק: קישורים רק לדומיין של המקור, מספרים רק אם הם מספרים.
  - בינה פרטית לא משמשת כאן בכלל. היא שמורה לפינת המלחמות.

הפלט: data/generated/feeds.js  (האתר טוען אותו כמו כל קובץ נתונים)
        data/generated/feeds.json + translations.json (זיכרון בין הרצות)
"""

import csv
import hashlib
import io
import json
import os
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "data", "generated")
UA = "Mozilla/5.0 (personal news site data updater)"

# סדר ספקי התרגום. הראשון שמצליח — נבחר.
#   google   — איכות טובה יותר, אבל כתובת לא רשמית
#   mymemory — שירות רשמי עם תנאי שימוש, איכות נמוכה יותר
TRANSLATORS = ["google", "mymemory"]


# ------------------------------------------------------------------ רשת

def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def now_iso():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


# ------------------------------------------------------------------ RSS

def read_rss(url, allowed_host):
    root = ET.fromstring(fetch(url))
    out = []
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = (item.findtext("pubDate") or "").strip()
        try:
            host = urllib.parse.urlparse(link).hostname or ""
            scheme = urllib.parse.urlparse(link).scheme
            date = parsedate_to_datetime(pub).astimezone(timezone.utc)
        except Exception:
            continue
        if scheme != "https" or not (host == allowed_host or host.endswith("." + allowed_host)):
            continue  # קישור שלא מוביל לאתר המקור — נזרק
        title = re.sub(r"\s+", " ", title)
        link = re.sub(r"#utm_.*$", "", link)   # בלי תגי מעקב של המקור
        if not title or len(title) > 300:
            continue
        out.append({"title": title, "link": link, "date": date.isoformat(timespec="seconds")})
    if not out:
        raise ValueError("הפיד ריק")
    return out


# ------------------------------------------------------------------ תרגום

HEBREW = re.compile(r"[֐-׿]")


def translate_google(text):
    url = ("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=he&dt=t&q="
           + urllib.parse.quote(text))
    data = json.loads(fetch(url))
    return "".join(seg[0] for seg in data[0] if seg and seg[0])


def translate_mymemory(text):
    url = ("https://api.mymemory.translated.net/get?langpair=en|he&q=" + urllib.parse.quote(text))
    data = json.loads(fetch(url))
    if data.get("quotaFinished") or str(data.get("responseStatus")) != "200":
        raise ValueError("MyMemory: מכסה או שגיאה")
    return data["responseData"]["translatedText"]


TRANSLATE_FUNCS = {"google": translate_google, "mymemory": translate_mymemory}


def tidy(he):
    """MyMemory מוסיף רווחים סביב מקפים: 'USB - C', 'Hi - Fi', 'ה - OLED'. מחזירים למקף צמוד
    כשלפחות צד אחד הוא אות לטינית/ספרה, או כשמשמאל ה' הידיעה בודדת."""
    he = re.sub(r"(?<=[A-Za-z0-9]) - (?=[A-Za-z0-9])", "-", he)
    he = re.sub(r"(?:(?<=^)|(?<=\s))([הלבכמשו]) - (?=[A-Za-z0-9])", r"\1-", he)
    he = re.sub(r"(?<=היי) - (?=\S)", "-", he)   # "היי - רזולוציה" → "היי-רזולוציה"
    return he


def translate(text, cache):
    key = hashlib.sha1(text.encode("utf-8")).hexdigest()
    if key in cache:
        return tidy(cache[key]["he"]), cache[key]["by"]
    for name in TRANSLATORS:
        try:
            he = TRANSLATE_FUNCS[name](text).strip()
            # בדיקת שפיות: יש עברית, לא ארוך מדי, לא אזהרת מערכת
            if HEBREW.search(he) and len(he) < len(text) * 3 and "MYMEMORY" not in he.upper():
                cache[key] = {"he": he, "by": name, "at": now_iso()}
                return tidy(he), name
        except Exception as e:
            print(f"  translate[{name}] failed: {e}", file=sys.stderr)
    return None, None


# ------------------------------------------------------------------ מקורות

def job_animals(cache):
    items = read_rss("https://www.goodnewsnetwork.org/category/news/animals/feed/", "goodnewsnetwork.org")
    out = []
    for i in items[:6]:
        he, by = translate(i["title"], cache)
        out.append({"title_en": i["title"], "title_he": he, "translated_by": by,
                    "link": i["link"], "date": i["date"]})
        if len(out) >= 4:
            break
    return out


# לא מבצעים על ציוד — המפרט מבקש מוצרים, תערוכות וביקורות, לא "דילים"
AV_DEALS = re.compile(r"\b(deals?|sales?|discount\w*|save|saving|cheapest|price drops?|black friday|"
                      r"cyber monday|prime day|coupon|bargain|lowest price|offer|half the price|"
                      r"cheaper|for less|price cut|reduced)\b", re.I)


def job_av(cache):
    items = read_rss("https://www.whathifi.com/feeds.xml", "whathifi.com")
    out = []
    for i in items:
        if AV_DEALS.search(i["title"]):
            continue
        he, by = translate(i["title"], cache)
        out.append({"title_en": i["title"], "title_he": he, "translated_by": by,
                    "link": i["link"], "date": i["date"]})
        if len(out) >= 4:
            break
    return out


def job_globes():
    """גלובס — עברית, בלי תרגום. כותרות ראשיות + כותרות שוק (ת"א ווול סטריט).
    הסינון "מה נוגע לרשימה שלי" נעשה באתר עצמו, לפי ההגדרות שם."""
    main = read_rss("https://www.globes.co.il/webservice/rss/rssfeeder.asmx/FeederNode?iID=2", "globes.co.il")
    market = []
    seen = set()
    for iid in (585, 1225):
        try:
            for i in read_rss(f"https://www.globes.co.il/webservice/rss/rssfeeder.asmx/FeederNode?iID={iid}", "globes.co.il"):
                if i["link"] not in seen:
                    seen.add(i["link"])
                    market.append(i)
        except Exception as e:
            print(f"  globes {iid} failed: {e}", file=sys.stderr)
    market.sort(key=lambda i: i["date"], reverse=True)
    return {"top": main[:2], "market": market[:25]}


BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36"


def fetch_html(url):
    req = urllib.request.Request(url, headers={"User-Agent": BROWSER_UA, "Accept-Language": "he-IL,he;q=0.9"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def strip_tags(s):
    s = re.sub(r"<[^>]+>", " ", s)
    s = s.replace("&quot;", '"').replace("&#39;", "'").replace("&amp;", "&").replace("&nbsp;", " ")
    return re.sub(r"\s+", " ", s).strip()


def job_ifa():
    """ליגת העל — לוח המשחקים הרשמי של ההתאחדות לכדורגל (עובדות: תאריך, קבוצות, שעה, תוצאה + קישור).
    זמנים בשעון ישראל, כפי שמופיעים באתר."""
    html = fetch_html("https://www.football.org.il/leagues/games/?league_id=40")
    rows = re.findall(r'<a class="table_row link_url"[^>]*href="(/leagues/games/game/\?game_id=\d+)"[^>]*>(.*?)</a>', html, re.S)
    today = datetime.now(timezone.utc) + timedelta(hours=3)          # קירוב לשעון ישראל — רק לחלון התאריכים
    lo, hi = (today - timedelta(days=21)).date(), (today + timedelta(days=12)).date()   # 3 שבועות — לזיהוי כל 14 הקבוצות
    games = []
    for href, body in rows:
        cols = [strip_tags(re.sub(r'<span class="sr-only">.*?</span>', "", c))
                for c in re.findall(r'<div class="table_col[^"]*">(.*?)</div>', body, re.S)]
        if len(cols) < 4:
            continue
        date_s, match_s = cols[0], cols[1]
        stadium = cols[2] if len(cols) >= 5 else ""
        time_s = cols[3] if len(cols) >= 5 else cols[2]
        result_s = cols[4] if len(cols) >= 5 else (cols[3] if len(cols) >= 4 else "")
        try:
            d = datetime.strptime(date_s, "%d/%m/%Y").date()
        except ValueError:
            continue
        if not (lo <= d <= hi) or " - " not in match_s:
            continue
        home, away = [t.strip() for t in match_s.split(" - ", 1)]
        if not re.fullmatch(r"\d{1,2}:\d{2}", time_s or ""):
            time_s = ""
        score = result_s if re.fullmatch(r"\d+\s*-\s*\d+", result_s or "") else ""
        games.append({"date": d.isoformat(), "time": time_s, "home": home, "away": away,
                      "stadium": stadium[:60], "score": score,
                      "link": "https://www.football.org.il" + href})
    if not rows:
        raise ValueError("מבנה הדף השתנה — לא נמצאו משחקים")
    games.sort(key=lambda g: (g["date"], g["time"]))
    return games


# הערה: עמוד המשחקים של ההתאחדות מציג רק משחקים ששוחקו. משחקים עתידיים — מלוח השידורים.


def job_tv():
    """לוח שידורי ספורט (LiveGames): ערוץ + שעה + משחק. רק כדורגל וכדורסל. עובדות בלבד + קישור ללוח המלא."""
    html = fetch_html("https://www.livegames.co.il/broadcastspage.aspx")
    out = []
    for m in re.finditer(r'<table class="broadcastTable[^"]*"[^>]*data-date="(\d{2}/\d{2}/\d{2})"[^>]*>(.*?)</table>', html, re.S):
        try:
            day = datetime.strptime(m.group(1), "%d/%m/%y").date().isoformat()
        except ValueError:
            continue
        for tr in re.findall(r"<tr[^>]*>(.*?)</tr>", m.group(2), re.S):
            ch = re.search(r'td2">(.*?)</td>', tr, re.S)
            tm = re.search(r'td3">(.*?)</td>', tr, re.S)
            ds = re.search(r'td4">(.*?)</td>', tr, re.S)
            if not (ch and tm and ds):
                continue
            desc = strip_tags(ds.group(1))
            if not re.match(r"^(כדורגל|כדורסל)\s*:", desc):
                continue
            sport, _, title = desc.partition(":")
            t = strip_tags(tm.group(1))
            if not re.fullmatch(r"\d{1,2}:\d{2}", t):
                continue
            out.append({"date": day, "time": t, "channel": strip_tags(ch.group(1))[:30],
                        "sport": sport.strip(), "title": title.strip()[:120]})
    if not out:
        raise ValueError("מבנה הדף השתנה — לא נמצאו שידורים")
    return out


# ---- ליגת העל: חיבור בין לוח ההתאחדות ללוח השידורים ----
# ההתאחדות כותבת "מכבי פ"ת", לוח השידורים כותב "מכבי פתח תקווה". מנרמלים לשני הכיוונים.

ABBR = [("י-ם", "ירושלים"), ('ב"ש', "באר שבע"), ('פ"ת', "פתח תקווה"), ('ק"ש', "קרית שמונה"),
        ('ר"ג', "רמת גן"), ('ת"א', "תל אביב"), ("תקוה", "תקווה"), ("קריית", "קרית")]
PREFIXES = ["מכבי", "הפועל", "ביתר", "בני", "עירוני"]


def team_parts(name):
    n = name.replace("״", '"').replace("בית\"ר", "ביתר")
    for a, b in ABBR:
        n = n.replace(a, b)
    n = re.sub(r'["\'׳.]', " ", n)
    n = re.sub(r"\s+", " ", n).strip()
    words = n.split(" ")
    prefix = words[0] if words and words[0] in PREFIXES else ""
    city = " ".join(w for w in words if w not in PREFIXES and w != "דורות")
    return prefix, city


def league_keys(ifa_teams):
    """מפתח זיהוי לכל קבוצה: העיר לבד אם היא ייחודית בליגה, אחרת קידומת+עיר."""
    parts = [team_parts(t) for t in ifa_teams]
    cities = [c for _, c in parts]
    return {t: (c if cities.count(c) == 1 else p + " " + c) for t, (p, c) in zip(ifa_teams, parts)}


def match_team(tv_name, keys):
    p, c = team_parts(tv_name)
    for team, key in keys.items():
        if key == c or key == (p + " " + c) or (" " not in key and key and key in c):
            return team
    return None


def build_ligat_haal(ifa_games, tv_rows):
    teams = sorted({g["home"] for g in ifa_games} | {g["away"] for g in ifa_games})
    keys = league_keys(teams)
    upcoming = {}
    for r in tv_rows or []:
        if r.get("sport") != "כדורגל" or " - " not in r["title"]:
            continue
        h, a = [x.strip() for x in r["title"].split(" - ", 1)]
        th, ta = match_team(h, keys), match_team(a, keys)
        if not (th and ta) or th == ta:
            continue                                 # שתי הקבוצות חייבות להיות מליגת העל
        k = (r["date"], th, ta)
        u = upcoming.setdefault(k, {"date": r["date"], "time": r["time"], "home": th, "away": ta, "channels": []})
        if r["channel"] not in u["channels"]:
            u["channels"].append(r["channel"])
    # לוח השידורים כולל גם משחקי נוער/נשים של אותם מועדונים (בלי סימון).
    # כלל: במחזור אחד כל קבוצה משחקת פעם אחת. מחזור = משחקים בטווח של עד 3 ימים.
    # עדיפות: משחקי ערב/צהריים לפני משחקי בוקר (נוער משחק בדרך כלל בשבת בבוקר).
    cands = sorted(upcoming.values(), key=lambda u: (u["date"], u["time"]))
    kept, window, used, window_start = [], [], set(), None

    def flush():
        for u in sorted(window, key=lambda u: (u["time"] < "13:00", u["date"], u["time"])):
            if u["home"] in used or u["away"] in used:
                continue
            used.update([u["home"], u["away"]])
            kept.append(u)

    for u in cands:
        d = datetime.strptime(u["date"], "%Y-%m-%d").date()
        if window_start is None or (d - window_start).days > 3:
            flush()
            window, used, window_start = [], set(), d
        window.append(u)
    flush()
    upcoming = {(u["date"], u["home"], u["away"]): u for u in kept}

    # תוצאות: המחזור האחרון ששוחק (לפי ההתאחדות)
    played = [g for g in ifa_games if g.get("score")]
    last_dates = sorted({g["date"] for g in played})[-3:]
    results = [g for g in played if g["date"] in last_dates]
    return {"teams": teams, "upcoming": sorted(upcoming.values(), key=lambda u: (u["date"], u["time"])),
            "results": results}


def job_boi():
    start = (datetime.now(timezone.utc) - timedelta(days=500)).strftime("%Y-%m-%d")
    url = ("https://edge.boi.gov.il/FusionEdgeServer/sdmx/v2/data/dataflow/BOI.STATISTICS/BR/1.0/"
           "MNT_RIB_BOI_D?format=csv&startperiod=" + start)
    rows = list(csv.DictReader(io.StringIO(fetch(url).decode("utf-8-sig"))))
    series = []
    for r in rows:
        if r.get("SERIES_CODE") != "MNT_RIB_BOI_D":
            continue
        try:
            v = float(r["OBS_VALUE"])
            d = datetime.strptime(r["TIME_PERIOD"], "%Y-%m-%d")
        except Exception:
            continue
        if 0 <= v <= 30:  # ריבית סבירה בלבד
            series.append((d.strftime("%Y-%m-%d"), v))
    series.sort()
    if len(series) < 2:
        raise ValueError("סדרת הריבית קצרה מדי")
    date, rate = series[-1]
    effective, previous = None, None
    for k in range(len(series) - 1, 0, -1):
        if series[k][1] != series[k - 1][1]:
            effective, previous = series[k][0], series[k - 1][1]
            break
    return {"rate": rate, "as_of": date, "effective_from": effective, "previous_rate": previous}


# ------------------------------------------------------------------ הרכבה

def load_json(path, default):
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default


def run_section(state, name, fn):
    """מריץ מקור. הצליח → מעדכן. נכשל → שומר את הנתון הקודם ומסמן את השגיאה."""
    prev = state.get(name) or {}
    try:
        data = fn()
        state[name] = {"data": data, "ok": True, "checked_at": now_iso(), "fetched_at": now_iso()}
        print(f"[{name}] ok")
    except Exception as e:
        state[name] = {"data": prev.get("data"), "ok": False, "error": str(e)[:200],
                       "checked_at": now_iso(), "fetched_at": prev.get("fetched_at")}
        print(f"[{name}] FAILED: {e}", file=sys.stderr)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    state_path = os.path.join(OUT_DIR, "feeds.json")
    cache_path = os.path.join(OUT_DIR, "translations.json")

    state = load_json(state_path, {})
    cache = load_json(cache_path, {})

    run_section(state, "boi", job_boi)
    run_section(state, "globes", job_globes)
    run_section(state, "ifa", job_ifa)
    run_section(state, "tv", job_tv)
    # ליגת העל = לוח ההתאחדות + לוח השידורים. גם אם אחד נכשל עכשיו — משתמשים בנתון הקודם שלו.
    run_section(state, "ligat_haal", lambda: build_ligat_haal(
        (state.get("ifa") or {}).get("data") or [], (state.get("tv") or {}).get("data") or []))
    run_section(state, "animals", lambda: job_animals(cache))
    run_section(state, "av_en", lambda: job_av(cache))
    state["generated_at"] = now_iso()

    # זיכרון התרגומים — שומרים רק 500 אחרונים
    if len(cache) > 500:
        cache = dict(sorted(cache.items(), key=lambda kv: kv[1].get("at", ""))[-500:])

    with open(state_path, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=1)
    with open(cache_path, "w", encoding="utf-8") as f:
        json.dump(cache, f, ensure_ascii=False, indent=1)
    with open(os.path.join(OUT_DIR, "feeds.js"), "w", encoding="utf-8") as f:
        f.write("/* נוצר אוטומטית ע\"י tools/update_data.py — לא לערוך ידנית */\n")
        f.write("window.DB = window.DB || {};\nwindow.DB.generated = ")
        json.dump(state, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    failed = [k for k in ("boi", "globes", "ifa", "tv", "animals", "av_en") if not state[k]["ok"]]
    print("done" + (f" — failed: {failed}" if failed else ""))


if __name__ == "__main__":
    main()
