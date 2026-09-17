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
    return re.compile(r"\b(?:" + "|".join(re.escape(w) for w in words) + ")", re.I) if words else None


def read_feed(source_id, url, words, since):
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
        try:
            date = parsedate_to_datetime((item.findtext("pubDate") or "").strip()).astimezone(timezone.utc)
        except Exception:
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


def collect(arena, hours=26, log=print):
    since = datetime.now(timezone.utc) - timedelta(hours=hours)
    per_source, seen_urls, seen_titles = {}, set(), set()
    for source_id, url, words in FEEDS[arena]:
        try:
            got = read_feed(source_id, url, words, since)
        except Exception as e:
            log(f"  ✗ {source_id:<16} נכשל: {str(e)[:120]}")
            continue
        kept = []
        for it in sorted(got, key=lambda x: x["published_at"], reverse=True):
            tkey = re.sub(r"\W+", "", it["title"].lower())
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
