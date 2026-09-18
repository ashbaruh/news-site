"""
collect_war.py — איסוף חומר גלם לזירה אחת מפידי RSS (קוד רגיל, בלי בינה).
==========================================================================
לוקח מכל כתבה רק: מקור, קישור, זמן פרסום, כותרת ותקציר ה-RSS (עד 1,800 תווים).
הבינה מקבלת את זה כחומר גלם, ומנסחת בעצמה. באתר מוצג רק קישור למקור.

כללים:
  - רק כתבות מ-X השעות האחרונות (ברירת מחדל 26)
  - קישור חייב להיות https ולהוביל לאתר של המקור עצמו
  - פיד כללי → רק כתבות שמכילות מילת סינון של הזירה
  - כפילויות (אותו קישור / אותה כותרת) נזרקות
  - איזון: לוקחים לסירוגין מכל מקור, כדי שמקור אחד "רועש" לא ימלא את כל 40 המקומות

הרצה ידנית לבדיקה:  python tools/collect_war.py iran
"""

import gzip
import html
import json
import os
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from war_feeds import FEEDS  # noqa: E402

UA = "Mozilla/5.0 news-site-bot"   # עם סוגריים The New Arab חוסם (נבדק)
MAX_ITEMS = 40
MAX_TEXT = 1800
MAX_PER_SOURCE = 12
CONTENT = "{http://purl.org/rss/1.0/modules/content/}encoded"
# מקורות שהקישורים שלהם יוצאים לדומיין אחר מזה של הפיד
EXTRA_HOSTS = {"src_bbc": ["bbc.co.uk", "bbc.com"]}


def base_domain(host):
    parts = (host or "").lower().split(".")
    if len(parts) >= 3 and parts[-2] in ("co", "com", "org", "net", "gov", "ac"):
        return ".".join(parts[-3:])
    return ".".join(parts[-2:])


def host_ok(link, source_id, feed_url):
    u = urllib.parse.urlparse(link)
    if u.scheme != "https" or not u.hostname:
        return False
    allowed = EXTRA_HOSTS.get(source_id, []) + [base_domain(urllib.parse.urlparse(feed_url).hostname)]
    h = u.hostname.lower()
    return any(h == a or h.endswith("." + a) for a in allowed)


def plain(s):
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", s or "", flags=re.S | re.I)
    s = html.unescape(re.sub(r"<[^>]+>", " ", s))
    return re.sub(r"\s+", " ", s).strip()


def keyword_re(words):
    # מילה באנגלית — מתחילת מילה. מילה בעברית — בכל מקום (כדי לתפוס "בלבנון", "והחות'ים")
    parts = [(re.escape(w) if re.search("[א-ת]", w) else r"\b" + re.escape(w)) for w in words or []]
    return re.compile("(?:" + "|".join(parts) + ")", re.I) if parts else None


def read_telegram(source_id, url, words, since):
    """ערוץ טלגרם ציבורי — דרך דף התצוגה הציבורי t.me/s/<ערוץ> (בלי חשבון ובלי מפתח)."""
    channel = url.rstrip("/").split("/")[-1]
    kw = keyword_re(words)
    out, before = [], None
    for _ in range(8):                                   # הדף מציג ~20 הודעות; גוללים אחורה עד 24 שעות (עד 8 דפים)
        page_url = url + (f"?before={before}" if before else "")
        req = urllib.request.Request(page_url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=30) as r:
            page = r.read().decode("utf-8", "replace")
        ids, oldest = [], None
        for chunk in page.split('data-post="')[1:]:
            post = chunk.split('"', 1)[0]
            if not re.fullmatch(re.escape(channel) + r"/\d+", post, re.I):
                continue
            ids.append(int(post.split("/")[1]))
            when = re.search(r'<time[^>]*datetime="([^"]+)"', chunk)
            try:
                date = datetime.fromisoformat(when.group(1)).astimezone(timezone.utc)
            except (AttributeError, ValueError):
                continue
            oldest = date if oldest is None or date < oldest else oldest
            body = re.search(r'class="tgme_widget_message_text[^"]*"[^>]*>(.*?)</div>', chunk, re.S)
            if not body:
                continue                                 # תמונה/סרטון בלי טקסט — אין מה לנתח
            text = plain(re.sub(r"<br\s*/?>", "\n", body.group(1)))
            if date < since or len(text) < 25 or (kw and not kw.search(text)):
                continue
            out.append({"source_id": source_id, "url": f"https://t.me/{post}",
                        "published_at": date.isoformat(timespec="seconds"),
                        "title": text[:120], "text": text[:MAX_TEXT]})
        if not ids or (oldest and oldest < since) or (before and min(ids) >= before):
            break
        before = min(ids)
    return out


def read_feed(source_id, url, words, since):
    if url.startswith("https://t.me/s/"):
        return read_telegram(source_id, url, words, since)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        raw = r.read()
    if raw.startswith(bytes([0x1f, 0x8b])):   # אל-מנאר שולח דחוס בלי להודיע
        raw = gzip.decompress(raw)
    root = ET.fromstring(raw)
    kw = keyword_re(words)
    out = []
    for item in root.iter("item"):
        title = plain(item.findtext("title"))
        link = (item.findtext("link") or "").strip()
        if link.startswith("http://"):
            link = "https://" + link[len("http://"):]      # סבא (עדן) מפרסם http — אותו אתר עובד ב-https (נבדק)
        pub = (item.findtext("pubDate") or "").strip()
        try:
            date = parsedate_to_datetime(pub).astimezone(timezone.utc)
        except Exception:
            try:                                           # Al-Monitor: 2026-09-17T07:30:40-0400
                date = datetime.strptime(pub, "%Y-%m-%dT%H:%M:%S%z").astimezone(timezone.utc)
            except ValueError:
                continue
        if date < since or date > datetime.now(timezone.utc) + timedelta(minutes=10):
            continue
        if not title or not host_ok(link, source_id, url):
            continue
        desc = plain(item.findtext(CONTENT) or item.findtext("description") or "")
        if kw and not kw.search(title + " " + desc):
            continue
        out.append({"source_id": source_id, "url": re.sub(r"[?#]utm_.*$", "", link),
                    "published_at": date.isoformat(timespec="seconds"),
                    "title": title[:300], "text": desc[:MAX_TEXT]})
    return out


def title_key(title):
    """כותרת מנורמלת להשוואה: בלי רווחים, סימנים והבדלי אותיות גדולות/קטנות."""
    return re.sub(r"\W+", "", (title or "").lower())


def collect(arena, hours=26, log=print):
    since = datetime.now(timezone.utc) - timedelta(hours=hours)
    # כפילויות: כתובת זהה → כפילות בכל מקרה. כותרת זהה → כפילות רק באותו מקור.
    # כותרת זהה ממקור אחר נשמרת (זו עוד עדות), והניתוח מצמיד לשתיהן מקור-שורש משותף
    # (כותרת זהה בשני אתרים = כמעט תמיד אותה ידיעה מועתקת) — כך היא לא נספרת כאימות נוסף.
    per_source, seen_urls = {}, set()
    for source_id, url, words in FEEDS[arena]:
        try:
            got = read_feed(source_id, url, words, since)
        except Exception as e:
            log(f"  ✗ {source_id:<16} נכשל: {str(e)[:120]}")
            continue
        kept, seen_titles = [], set()
        for it in sorted(got, key=lambda x: x["published_at"], reverse=True):
            tkey = title_key(it["title"])
            if it["url"] in seen_urls or tkey in seen_titles:
                continue
            seen_urls.add(it["url"])
            seen_titles.add(tkey)
            kept.append(it)
        per_source.setdefault(source_id, []).extend(kept)
        log(f"  ✓ {source_id:<16} {len(kept)} כתבות רלוונטיות")

    # איזון: לסירוגין מכל מקור (החדשות ביותר קודם), עד MAX_ITEMS
    queues = [sorted(v, key=lambda x: x["published_at"], reverse=True)[:MAX_PER_SOURCE] for v in per_source.values()]
    items = []
    while len(items) < MAX_ITEMS and any(queues):
        for q in queues:
            if q and len(items) < MAX_ITEMS:
                items.append(q.pop(0))
    return sorted(items, key=lambda x: x["published_at"], reverse=True)


if __name__ == "__main__":
    arena = sys.argv[1] if len(sys.argv) > 1 else "iran"
    res = collect(arena)
    print(f"\nסה\"כ {len(res)} כתבות לזירה {arena}")
    for it in res[:10]:
        print(f"  {it['published_at'][:16]}  {it['source_id']:<14} {it['title'][:90]}")
