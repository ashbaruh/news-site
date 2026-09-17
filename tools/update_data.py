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
# ⚠️ 17/09/2026: ההתאחדות חוסמת את שרתי GitHub (403), והתוצאה בעמוד שלה נקראה בסדר הפוך
#    ("1-4" = אורחת-מארחת). הוחלף ב-ONE (למטה). הפונקציה נשארת לתיעוד בלבד.

ONE_LEAGUE = "https://www.one.co.il/Soccer/League/1"


def job_one_league():
    """ליגת העל מ-ONE: כל המחזורים, תאריך, שעה, קבוצות ותוצאה — מממשק הנתונים שהאתר שלהם עצמו משתמש בו.
    נבדק 17/09/2026 מול טבלת הליגה: מכבי ת"א 4 ניצחונות — תואם ל-4:1 בדרבי (ההתאחדות נקראה הפוך).
    מחזירה אותו מבנה כמו job_ifa: date, time, home, away, score ("בית-חוץ"), link."""
    req = urllib.request.Request("https://www.one.co.il/api/league/1/all-rounds",
                                 headers={"User-Agent": BROWSER_UA, "Referer": ONE_LEAGUE})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.loads(r.read().decode("utf-8"))
    games = []
    for rnd, rows in (data.get("rounds") or {}).items():
        for g in rows:
            try:
                home = str(g["homeTeam"]["name"]).strip()
                away = str(g["awayTeam"]["name"]).strip()
                dt = datetime.fromisoformat(str(g["date"])[:19])
            except (KeyError, TypeError, ValueError):
                continue
            hs, as_ = g["homeTeam"].get("score"), g["awayTeam"].get("score")
            done = bool(g.get("isStarted")) and not g.get("isLive") and isinstance(hs, int) and isinstance(as_, int) \
                and hs >= 0 and as_ >= 0
            if not home or not away or len(home) > 40 or len(away) > 40:
                continue
            games.append({"date": dt.date().isoformat(), "time": dt.strftime("%H:%M"), "home": home, "away": away,
                          "round": str(rnd)[:20], "score": f"{hs}-{as_}" if done else "", "link": ONE_LEAGUE})
    if len(games) < 20:
        raise ValueError("ONE: מעט מדי משחקים — ייתכן שמבנה הנתונים השתנה")
    games.sort(key=lambda g: (g["date"], g["time"]))
    return games


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


# ---- AI: 2 חדשות ביום + כלים/דמואים חינמיים ----
# בלי בינה פרטית (החלטת בעל האתר). בחירה לפי כללים קבועים ושקופים.

AI_MODEL_LAUNCH = re.compile(r"\b(introducing|launch(es|ing)?|releas(e|es|ing)|now available|new model|"
                             r"GPT-?\d|Gemini \d|Claude|Opus|Sonnet|Haiku|Sora|Veo \d|Imagen \d|Llama \d|o\d\b)", re.I)
AI_FLUFF = re.compile(r"\b(customer stor|case stud|webinar|how to|guide|tips|helping|business value|advertising|"
                      r"grant|fellowship|event|podcast|hiring|careers)", re.I)
AI_HE = re.compile(r"בינה מלאכותית|\bAI\b|OpenAI|אנת'?רופיק|Anthropic|Gemini|ג'מיני|ChatGPT|צ'אטGPT|Claude|קלוד|"
                   r"מודל שפה|DeepMind|דיפמיינד|LLM", re.I)


def read_openai_news():
    """OpenAI מסמנים כל פוסט בקטגוריה. סיפורי לקוחות מגיעים בלי קטגוריה או תחת Startup/Applied AI —
    לכן מקבלים רק Product / Research / Company / Safety (נבדק 16/09/2026 על 25 פוסטים)."""
    root = ET.fromstring(fetch("https://openai.com/news/rss.xml"))
    allowed = {"Product", "Research", "Company", "Safety"}
    out = []
    for item in root.iter("item"):
        cats = {(c.text or "").strip() for c in item.findall("category")}
        if not (cats & allowed):
            continue
        link = (item.findtext("link") or "").strip()
        title = re.sub(r"\s+", " ", (item.findtext("title") or "").strip())
        try:
            host = urllib.parse.urlparse(link).hostname or ""
            date = parsedate_to_datetime((item.findtext("pubDate") or "").strip()).astimezone(timezone.utc)
        except Exception:
            continue
        if not link.startswith("https://") or not host.endswith("openai.com") or not title:
            continue
        out.append({"title": title, "link": link, "date": date.isoformat(timespec="seconds")})
    return out


def read_anthropic_news():
    """לאנתרופיק אין RSS. קוראים את עמוד החדשות: קישור, תאריך, קטגוריה, כותרת."""
    html = fetch_html("https://www.anthropic.com/news")
    out, seen = [], set()
    for m in re.finditer(r'href="(/news/[a-z0-9\-]+)"[^>]*>(.*?)</a>', html, re.S):
        link = "https://www.anthropic.com" + m.group(1)
        if link in seen:
            continue
        parts = [p for p in (strip_tags(x) for x in re.split(r"<[^>]+>", m.group(2))) if p]
        date = next((p for p in parts if re.fullmatch(r"[A-Z][a-z]{2} \d{1,2}, \d{4}", p)), None)
        cats = {"Announcements", "Product", "Policy", "Research", "Societal Impacts", "Economic Research", "Case Study"}
        title = next((p for p in parts if p != date and p not in cats and len(p) > 12), None)
        if not (date and title):
            continue
        seen.add(link)
        d = datetime.strptime(date, "%b %d, %Y").replace(hour=12, tzinfo=timezone.utc)
        out.append({"title": title, "link": link, "date": d.isoformat(timespec="seconds")})
    if not out:
        raise ValueError("מבנה עמוד החדשות של Anthropic השתנה")
    return out


def job_ai(cache):
    sources = [
        ("Anthropic", "en", read_anthropic_news, True),
        ("Google DeepMind", "en", lambda: read_rss("https://deepmind.google/blog/rss.xml", "deepmind.google"), True),
        ("OpenAI", "en", read_openai_news, True),
        ("Google", "en", lambda: read_rss("https://blog.google/technology/ai/rss/", "blog.google"), True),
        ("גיקטיים", "he", lambda: read_rss("https://www.geektime.co.il/feed/", "geektime.co.il"), False),
    ]
    now = datetime.now(timezone.utc)
    cands, failed = [], []
    for name, lang, fn, is_lab in sources:
        try:
            items = fn()
        except Exception as e:
            failed.append(name)
            print(f"  ai source {name} failed: {e}", file=sys.stderr)
            continue
        for i in items[:40]:
            age_h = (now - datetime.fromisoformat(i["date"])).total_seconds() / 3600
            if age_h < -2 or age_h > 72:
                continue
            t = i["title"]
            if lang == "he" and not AI_HE.search(t):
                continue                                   # גיקטיים — רק כתבות AI
            if AI_FLUFF.search(t):
                continue
            # הכרזה על מודל/מוצר — הכי חשוב. אחריה: חדשות תעשייה בעברית (נוגעות לישראל).
            # פוסט כללי של חברה ("AI for Societal Impact") — הכי נמוך.
            launch = bool(AI_MODEL_LAUNCH.search(t))
            score = (4 if launch else 0) + (1.5 if lang == "he" else 1.0) - age_h / 72
            cands.append({"score": round(score, 2), "source": name, "lang": lang, **i})
    if len(failed) == len(sources):
        raise ValueError("כל מקורות ה-AI נכשלו")

    # מקסימום 2 ביום (לפי המפרט), ממקורות שונים
    cands.sort(key=lambda c: c["score"], reverse=True)
    picked, used = [], set()
    for c in cands:
        if c["source"] in used:
            continue
        picked.append(c); used.add(c["source"])
        if len(picked) == 2:
            break
    news = []
    for c in picked:
        item = {"source": c["source"], "link": c["link"], "date": c["date"], "launch": bool(AI_MODEL_LAUNCH.search(c["title"]))}
        if c["lang"] == "en":
            he, by = translate(c["title"], cache)
            item.update({"title_en": c["title"], "title_he": he, "translated_by": by})
        else:
            item["title"] = c["title"]
        news.append(item)

    # כלים/דמואים חינמיים — Hugging Face Spaces במגמה
    tools = []
    try:
        data = json.loads(fetch("https://huggingface.co/api/spaces?sort=trendingScore&direction=-1&limit=60"
                                "&expand[]=cardData&expand[]=likes&expand[]=runtime"))
        bad = re.compile(r"nsfw|uncensored|porn|nude|naked|lewd|hentai|erotic|18\+|sexy|undress|deepnude|"
                         r"jailbreak|abliterat|deepfake|face.?swap|watermark", re.I)   # הסרת סימני מים = עקיפת זכויות יוצרים
        seen_titles = set()
        for s in data:
            cd = s.get("cardData") or {}
            title = str(cd.get("title") or s["id"].split("/")[-1])[:80]
            desc = str(cd.get("short_description") or "")[:140]
            text = " ".join([s["id"], title, desc, " ".join(s.get("tags") or [])])
            if bad.search(text) or (s.get("runtime") or {}).get("stage") != "RUNNING":
                continue                                   # לא מתאים / לא עובד כרגע
            if not desc or (s.get("likes") or 0) < 40:
                continue                                   # בלי תיאור או בלי אמון מינימלי
            key = re.sub(r"[^a-z0-9]", "", title.lower())[:24]
            dkey = re.sub(r"[^a-z0-9]", "", desc.lower())[:40]
            if key in seen_titles or dkey in seen_titles:
                continue                                   # עותקים של אותו דמו (שם או תיאור זהים)
            seen_titles.update([key, dkey])
            he, by = translate(desc, cache)
            tools.append({"title": title, "desc_en": desc, "desc_he": he, "likes": s.get("likes"),
                          "link": "https://huggingface.co/spaces/" + s["id"]})
            if len(tools) >= 10:
                break
    except Exception as e:
        print(f"  HF spaces failed: {e}", file=sys.stderr)

    return {"news": news, "candidates": len(cands), "failed_sources": failed, "tools": tools}


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


# 14 קבוצות ליגת העל 2026/27 (מתפריט הקבוצות באתר ההתאחדות, 16/09/2026).
# גיבוי: אתר ההתאחדות חוסם את השרתים של GitHub (נבדק: 403), ולוח השידורים צריך את הרשימה.
# לעדכן בתחילת כל עונה (עולות/יורדות).
LEAGUE_TEAMS_FALLBACK = ['בית"ר י-ם', 'בני סכנין', 'הפועל ב"ש', 'הפועל חיפה', 'הפועל י-ם', 'הפועל פ"ת',
                         'הפועל ק"ש', 'הפועל ר"ג', 'הפועל ת"א', 'מכבי חיפה', 'מכבי נתניה', 'מכבי פ"ת',
                         'מכבי ת"א', 'עירוני דורות טבריה']


def build_ligat_haal(ifa_games, tv_rows, ifa_fresh=True):
    teams = sorted({g["home"] for g in ifa_games} | {g["away"] for g in ifa_games})
    if len(teams) < 14:
        teams = sorted(set(teams) | set(LEAGUE_TEAMS_FALLBACK))
    keys = league_keys(teams)
    upcoming = {}
    one_sided = []   # קבוצת ליגת העל מול קבוצה שאינה מהליגה — אולי משחק אירופי (או נוער/גביע).
                     # האתר מצמיד ערוץ רק אם ESPN מאשר משחק אירופי באותו תאריך לאותה קבוצה.
    for r in tv_rows or []:
        if r.get("sport") != "כדורגל" or " - " not in r["title"]:
            continue
        h, a = [x.strip() for x in r["title"].split(" - ", 1)]
        th, ta = match_team(h, keys), match_team(a, keys)
        if bool(th) != bool(ta):
            one_sided.append({"date": r["date"], "time": r["time"], "channel": r["channel"],
                              "israeli_team": th or ta, "title": r["title"]})
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

    # תוצאות: המחזור האחרון ששוחק. עם ONE — לפי שם המחזור; בלי שם — 3 התאריכים האחרונים.
    played = [g for g in ifa_games if g.get("score")]
    if played and played[-1].get("round"):
        last_round = max(played, key=lambda g: (g["date"], g["time"]))["round"]
        results = [g for g in played if g.get("round") == last_round]
    else:
        last_dates = sorted({g["date"] for g in played})[-3:]
        results = [g for g in played if g["date"] in last_dates]
    # לא מציגים תוצאות ישנות כאילו הן עדכניות: אם המקור לא נקרא ב-4 הימים האחרונים — בלי תוצאות
    results = results if ifa_fresh else []
    return {"teams": teams, "upcoming": sorted(upcoming.values(), key=lambda u: (u["date"], u["time"])),
            "results": results, "results_available": ifa_fresh, "one_sided_tv": one_sided}


# ------------------------------------------------------------------ ישראלים בחו"ל — כותרות (לגרסה הציבורית)

# שמות משפחה נפוצים מדי — אצלם דורשים שם מלא, אחרת "כהן" יתפוס כל כתבה
COMMON_SURNAMES = {"כהן", "לוי", "מזרחי", "פרץ", "ביטון", "אברהם", "דהן", "אזולאי", "אוחיון", "חדד", "גבאי",
                   "עמר", "בן", "אלון", "דוד", "שמעון", "יוסף", "חיים", "משה", "אדרי", "סעדה"}
HE = "א-ת"


def load_athletes():
    """קורא את data/athletes.js (בלי להריץ JavaScript): שם, ענף, קבוצה, סטטוס."""
    t = open(os.path.join(ROOT, "data", "athletes.js"), encoding="utf-8").read()
    out = []
    for row in re.findall(r"\{[^{}]*?name:\s*'[^']*'[^{}]*?\}", t):
        def f(key):
            m = re.search(key + r":\s*'((?:[^'\\]|\\.)*)'", row)
            return m.group(1).replace("\\'", "'") if m else ""
        if f("status") in ("abroad", "manual"):
            out.append({"name": f("name"), "sport": f("sport"), "club": f("club")})
    return out


def name_patterns(players):
    last_count = {}
    for p in players:
        last = p["name"].split()[-1]
        last_count[last] = last_count.get(last, 0) + 1
    pats = []
    for p in players:
        parts = p["name"].split()
        alts = [re.escape(p["name"])]
        last = parts[-1]
        if len(parts) > 1 and len(last) >= 3 and last_count[last] == 1 and last not in COMMON_SURNAMES:
            alts.append(re.escape(last))
        # מותרות אותיות שימוש לפני השם ("וגלוך", "לאבדיה"), אבל לא אות עברית נוספת אחריו
        pats.append((p, re.compile(rf"(?<![{HE}])[והבלמשכ]?(?:{'|'.join(alts)})(?![{HE}])")))
    return pats


# קבוצות ישראליות באירופה (גרסה ציבורית): כותרת שמזכירה מפעל אירופי + קבוצה מליגת העל
EUROPE_RX = re.compile(r"ליגה האירופית|ליגת האלופות|קונפרנס|יורופ|צ'מפיונס|אירופה|אירופי")


def club_patterns(teams):
    """לכל קבוצה: השם המקוצר ("מכבי ת\"א") והשם המלא ("מכבי תל אביב")."""
    out = []
    for t in teams:
        full = t.replace('בית"ר', "ביתר")
        for a, b in ABBR:
            full = full.replace(a, b)
        alts = {re.escape(t), re.escape(full), re.escape(t.replace('"', "״"))}
        out.append((t, re.compile(rf"(?<![{HE}])[והבלמש]?(?:{'|'.join(sorted(alts))})(?![{HE}])")))
    return out


def job_israelis_abroad():
    """כותרות על השחקנים שבמעקב — מוואלה (ישראלים ב-NBA, כדורגל עולמי, כדורגל ישראלי) ו-ONE.
    כותרת + קישור בלבד. רק שחקנים בסטטוס abroad/manual (לא מי שחזר לארץ)."""
    players = load_athletes()
    pats = name_patterns(players)
    club_pats = club_patterns(LEAGUE_TEAMS_FALLBACK)
    feeds = [("וואלה", "https://rss.walla.co.il/feed/13444", "walla.co.il"),
             ("וואלה", "https://rss.walla.co.il/feed/316", "walla.co.il"),
             ("וואלה", "https://rss.walla.co.il/feed/156", "walla.co.il"),
             ("ONE", "https://www.one.co.il/rss", "one.co.il")]
    since = datetime.now(timezone.utc) - timedelta(days=7)
    items, europe, seen, ok = [], [], set(), 0
    for source, url, host in feeds:
        try:
            rows = read_rss(url, host)
            ok += 1
        except Exception as e:
            print(f"  abroad {url} failed: {e}", file=sys.stderr)
            continue
        for r in rows:
            key = re.sub(r"\W+", "", r["title"])
            if r["link"] in seen or key in seen or datetime.fromisoformat(r["date"]) < since:
                continue
            clubs = [c for c, rx in club_pats if rx.search(r["title"])] if EUROPE_RX.search(r["title"]) else []
            if clubs or (EUROPE_RX.search(r["title"]) and re.search(r"(?<![א-ת])[הו]?ישראליו?ת(?![א-ת])", r["title"])):
                europe.append(dict(r, source=source, clubs=clubs[:2]))
            who = [p["name"] for p, rx in pats if rx.search(r["title"])]
            if not who:
                continue
            seen.update({r["link"], key})
            items.append(dict(r, source=source, players=who[:4]))
    if not ok:
        raise ValueError("כל הפידים נכשלו")
    items.sort(key=lambda i: i["date"], reverse=True)
    europe.sort(key=lambda i: i["date"], reverse=True)
    return {"items": items[:15], "players": players, "europe": europe[:8]}


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
    run_section(state, "ifa", job_one_league)   # השם "ifa" נשמר לתאימות; המקור עכשיו ONE
    run_section(state, "tv", job_tv)
    # ליגת העל = לוח ההתאחדות + לוח השידורים. גם אם אחד נכשל עכשיו — משתמשים בנתון הקודם שלו.
    ifa_state = state.get("ifa") or {}
    ifa_fresh = False
    if ifa_state.get("fetched_at"):
        try:
            ifa_fresh = datetime.now(timezone.utc) - datetime.fromisoformat(ifa_state["fetched_at"]) < timedelta(days=4)
        except ValueError:
            pass
    run_section(state, "ligat_haal", lambda: build_ligat_haal(
        ifa_state.get("data") or [], (state.get("tv") or {}).get("data") or [], ifa_fresh))
    run_section(state, "abroad", job_israelis_abroad)
    run_section(state, "ai", lambda: job_ai(cache))
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

    failed = [k for k in ("boi", "globes", "ifa", "tv", "abroad", "ai", "animals", "av_en") if not state[k]["ok"]]
    print("done" + (f" — failed: {failed}" if failed else ""))


if __name__ == "__main__":
    main()
