"""
war_feeds.py — אילו פידים נאספים לכל זירה בניתוח היומי.
=========================================================
כל שורה: (source_id, כתובת RSS, מילות סינון או None).
  None       → כל הכתבות בפיד רלוונטיות (פיד ייעודי לזירה)
  [מילים]    → רק כתבות שהכותרת/התקציר מכילים אחת מהמילים (פיד כללי)
כל source_id חייב להיות רשום ב-data/sources.js עם רישיון ומשפחת מקורות.

נבדק שהפידים עונים (17/09/2026). הוצאו: Jerusalem Post (פיד תקוע מ-2025), Times of Israel (חוסם את שרתי GitHub — 403), Tasnim (לא נגיש מהענן). פיד שנכשל ביום מסוים — פשוט מדולג, הניתוח ממשיך עם השאר.
"""

IRAN = ["iran", "tehran", "irgc", "khamenei", "hormuz", "natanz", "fordow", "isfahan", "pezeshkian", "araghchi"]
UKRAINE = ["ukrain", "kyiv", "kiev", "zelensk", "donbas", "donetsk", "kharkiv", "zaporizh", "crimea", "kursk",
           "odesa", "luhansk", "kherson"]
YEMEN = ["yemen", "houthi", "sanaa", "hodeidah", "red sea", "bab el-mandeb", "bab al-mandab", "aden", "ansar allah"]
NORTH = ["hezbollah", "lebanon", "lebanese", "beirut", "litani", "unifil", "syria", "damascus", "golan",
         "aleppo", "idlib", "sweida", "latakia", "al-sharaa", "turkey", "turkish", "erdogan", "kurd", "sdf"]

FEEDS = {
    "iran": [
        ("src_iranintl", "https://www.iranintl.com/en/feed", IRAN),
        ("src_guardian", "https://www.theguardian.com/world/middleeast/rss", IRAN),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml", IRAN),
        ("src_lwj", "https://www.longwarjournal.org/feed", IRAN),
        ("src_fdd", "https://www.fdd.org/feed/", IRAN),
        ("src_un_news", "https://news.un.org/feed/subscribe/en/news/all/rss.xml", IRAN),
    ],
    "ukraine": [
        ("src_kyivind", "https://kyivindependent.com/news-archive/rss/", None),
        ("src_ukrinform", "https://www.ukrinform.net/rss/block-lastnews", UKRAINE),
        ("src_pravda_ua", "https://www.pravda.com.ua/eng/rss/", UKRAINE),
        ("src_guardian", "https://www.theguardian.com/world/ukraine/rss", None),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/europe/rss.xml", UKRAINE),
        ("src_meduza", "https://meduza.io/rss/en/all", UKRAINE),
        ("src_tass", "https://tass.com/rss/v2.xml", UKRAINE),
        ("src_un_news", "https://news.un.org/feed/subscribe/en/news/all/rss.xml", UKRAINE),
    ],
    "yemen": [
        ("src_lwj", "https://www.longwarjournal.org/feed", YEMEN),
        ("src_gcaptain", "https://gcaptain.com/feed/", YEMEN),
        ("src_newarab", "https://www.newarab.com/rss", YEMEN),
        ("src_guardian", "https://www.theguardian.com/world/middleeast/rss", YEMEN),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml", YEMEN),
        ("src_un_news", "https://news.un.org/feed/subscribe/en/news/all/rss.xml", YEMEN),
    ],
    "north": [
        ("src_alma", "https://israel-alma.org/feed/", None),
        ("src_lbci", "https://www.lbcgroup.tv/Rss/News/en", NORTH),
        ("src_almanar", "https://english.almanar.com.lb/rss", NORTH),
        ("src_enabbaladi", "https://english.enabbaladi.net/feed/", None),
        ("src_dailysabah", "https://www.dailysabah.com/rss/politics", NORTH),
        ("src_newarab", "https://www.newarab.com/rss", NORTH),
        ("src_guardian", "https://www.theguardian.com/world/middleeast/rss", NORTH),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml", NORTH),
    ],
}
