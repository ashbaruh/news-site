"""
war_feeds.py — אילו פידים נאספים לכל זירה בניתוח היומי.
=========================================================
כל שורה: (source_id, כתובת RSS, מילות סינון או None).
  None       → כל הכתבות בפיד רלוונטיות (פיד ייעודי לזירה)
  [מילים]    → רק כתבות שהכותרת/התקציר מכילים אחת מהמילים (פיד כללי)
כל source_id חייב להיות רשום ב-data/sources.js עם רישיון ומשפחת מקורות.

נבדק שהפידים עונים (17/09/2026), גם מהענן של GitHub (.github/workflows/feeds-probe.yml).
נוספו 17/09: תקשורת ישראלית (ynet, מעריב, ישראל היום), אל-ג'זירה, IRNA, סבא (ממשלת תימן), Al-Monitor,
Crisis Group, France 24, אנדולו, Sky News — כדי שבכל זירה יישמעו כל הצדדים. חסר: קול החות'ים (אתריהם חוסמים). הוצאו: Jerusalem Post (פיד תקוע מ-2025), Times of Israel (חוסם את שרתי GitHub — 403), Tasnim (לא נגיש מהענן). פיד שנכשל ביום מסוים — פשוט מדולג, הניתוח ממשיך עם השאר.
"""

IRAN = ["iran", "tehran", "irgc", "khamenei", "hormuz", "natanz", "fordow", "isfahan", "pezeshkian", "araghchi"]
UKRAINE = ["ukrain", "kyiv", "kiev", "zelensk", "donbas", "donetsk", "kharkiv", "zaporizh", "crimea", "kursk",
           "odesa", "luhansk", "kherson"]
YEMEN = ["yemen", "houthi", "sanaa", "hodeidah", "red sea", "bab el-mandeb", "bab al-mandab", "aden", "ansar allah"]
NORTH = ["hezbollah", "lebanon", "lebanese", "beirut", "litani", "unifil", "syria", "damascus", "golan",
         "aleppo", "idlib", "sweida", "latakia", "al-sharaa", "turkey", "turkish", "erdogan", "kurd", "sdf"]

# מילים בעברית — לערוצי הטלגרם הישראליים (תופסות גם עם תחיליות: "בלבנון", "והחות'ים")
IRAN_HE = ["איראן", "איראני", "טהרן", "משמרות המהפכה", "חמינאי", "הורמוז"]
UKRAINE_HE = ["אוקראינ", "קייב", "זלנסקי", "פוטין", "הקרמלין", "דונבאס", "חרקוב"]
YEMEN_HE = ["תימן", "חות'י", "חותי", "צנעא", "חודיידה", "ים סוף", "באב אל-מנדב"]
NORTH_HE = ["חיזבאללה", "לבנון", "ביירות", "ליטני", "סוריה", "סורי", "דמשק", "טורקיה", "ארדואן",
            "רמת הגולן", "יוניפי\"ל", "א-שרע", "כורדי",
            # יישובי גבול — ערוץ צה"ל כותב "התרעות במלכיה" בלי המילה "לבנון" (21/09/2026)
            "גבול הצפון", "קו העימות", "הגליל העליון", "קריית שמונה", "מטולה", "מלכיה", "שלומי"]

# ערבית — לסוכנות סבא (תימן), שמפרסמת גם חדשות פנים שלא קשורות למלחמה
YEMEN_AR = ["الحوثي", "حوثي", "صنعاء", "الحديدة", "البحر الأحمر", "باب المندب", "الميليشيا", "مليشيا", "إيران"]

# ערוצי טלגרם שבעל האתר עוקב אחריהם (17/09/2026). @diunim הוא קבוצת דיונים — אין לה תצוגה ציבורית.
TELEGRAM = [("src_tg_abualiexpress", "https://t.me/s/abualiexpress"),
            ("src_tg_geostrategy", "https://t.me/s/GeoStrategyIL"),
            ("src_tg_carmel", "https://t.me/s/alexmehacarmel"),
            ("src_tg_lelotsenzura", "https://t.me/s/lelotsenzura"),
            # צה"ל — הערוץ הרשמי בעברית (נוסף 21/09/2026, בקשת בעל האתר: "מה הצבא מבצע").
            # דובר רשמי = צד מעוניין: לבד לא יהפוך אירוע ל"מאומת" (אותה משפחה כמו src_idf_spox).
            ("src_tg_idf", "https://t.me/s/idf_telegram")]


# תקשורת ישראלית בעברית — כל הזירות, לפי מילים בעברית
def israeli(words):
    return [("src_ynet", "https://www.ynet.co.il/Integration/StoryRss2.xml", words),
            ("src_maariv", "https://www.maariv.co.il/Rss/RssFeedsMivzakiChadashot", words),
            ("src_israelhayom", "https://www.israelhayom.co.il/rss.xml", words),
            # וואלה "צבא וביטחון" — פעולות צה"ל (נוסף 21/09/2026)
            ("src_walla", "https://rss.walla.co.il/feed/2689", words)]


def telegram(words):
    return [(sid, url, words) for sid, url in TELEGRAM]


FEEDS = {
    "iran": [
        ("src_mee", "https://www.middleeasteye.net/rss", IRAN),
        ("src_iranintl", "https://www.iranintl.com/en/feed", IRAN),
        ("src_guardian", "https://www.theguardian.com/world/middleeast/rss", IRAN),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml", IRAN),
        ("src_lwj", "https://www.longwarjournal.org/feed", IRAN),
        ("src_fdd", "https://www.fdd.org/feed/", IRAN),
        ("src_un_news", "https://news.un.org/feed/subscribe/en/news/all/rss.xml", IRAN),
        ("src_irna", "https://en.irna.ir/rss", None),
        ("src_aljazeera", "https://www.aljazeera.com/xml/rss/all.xml", IRAN),
        ("src_almonitor", "https://www.al-monitor.com/rss", IRAN),
        ("src_crisisgroup", "https://www.crisisgroup.org/rss.xml", IRAN),
        ("src_france24", "https://www.france24.com/en/middle-east/rss", IRAN),
    ] + israeli(IRAN_HE) + telegram(IRAN + IRAN_HE),
    "ukraine": [
        ("src_kyivind", "https://kyivindependent.com/news-archive/rss/", None),
        ("src_ukrinform", "https://www.ukrinform.net/rss/block-lastnews", UKRAINE),
        ("src_pravda_ua", "https://www.pravda.com.ua/eng/rss/", UKRAINE),
        ("src_guardian", "https://www.theguardian.com/world/ukraine/rss", None),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/europe/rss.xml", UKRAINE),
        ("src_meduza", "https://meduza.io/rss/en/all", UKRAINE),
        ("src_tass", "https://tass.com/rss/v2.xml", UKRAINE),
        ("src_un_news", "https://news.un.org/feed/subscribe/en/news/all/rss.xml", UKRAINE),
        ("src_crisisgroup", "https://www.crisisgroup.org/rss.xml", UKRAINE),
        ("src_skynews", "https://feeds.skynews.com/feeds/rss/world.xml", UKRAINE),
    ] + israeli(UKRAINE_HE) + telegram(UKRAINE + UKRAINE_HE),
    "yemen": [
        ("src_mee", "https://www.middleeasteye.net/rss", YEMEN),
        ("src_lwj", "https://www.longwarjournal.org/feed", YEMEN),
        ("src_gcaptain", "https://gcaptain.com/feed/", YEMEN),
        ("src_newarab", "https://www.newarab.com/rss", YEMEN),
        ("src_guardian", "https://www.theguardian.com/world/middleeast/rss", YEMEN),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml", YEMEN),
        ("src_un_news", "https://news.un.org/feed/subscribe/en/news/all/rss.xml", YEMEN),
        ("src_saba_aden", "https://www.sabanew.net/rss.php", YEMEN_AR),
        ("src_aljazeera", "https://www.aljazeera.com/xml/rss/all.xml", YEMEN),
        ("src_almonitor", "https://www.al-monitor.com/rss", YEMEN),
        ("src_crisisgroup", "https://www.crisisgroup.org/rss.xml", YEMEN),
        ("src_france24", "https://www.france24.com/en/middle-east/rss", YEMEN),
    ] + israeli(YEMEN_HE) + telegram(YEMEN + YEMEN_HE),
    "north": [
        ("src_mee", "https://www.middleeasteye.net/rss", NORTH),
        ("src_alma", "https://israel-alma.org/feed/", None),
        ("src_lbci", "https://www.lbcgroup.tv/Rss/News/en", NORTH),
        ("src_almanar", "https://english.almanar.com.lb/rss", NORTH),
        ("src_enabbaladi", "https://english.enabbaladi.net/feed/", None),
        ("src_dailysabah", "https://www.dailysabah.com/rss/politics", NORTH),
        ("src_newarab", "https://www.newarab.com/rss", NORTH),
        ("src_guardian", "https://www.theguardian.com/world/middleeast/rss", NORTH),
        ("src_bbc", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml", NORTH),
        ("src_aljazeera", "https://www.aljazeera.com/xml/rss/all.xml", NORTH),
        ("src_almonitor", "https://www.al-monitor.com/rss", NORTH),
        ("src_anadolu", "https://www.aa.com.tr/en/rss/default?cat=middle-east", NORTH),
        ("src_france24", "https://www.france24.com/en/middle-east/rss", NORTH),
    ] + israeli(NORTH_HE) + telegram(NORTH + NORTH_HE),
}
