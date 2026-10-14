/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-14T1552__yemen-202610141552.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-14T15:52:21+00:00",
   "window": {
    "from": "2026-10-13T15:52:21+00:00",
    "to": "2026-10-14T15:52:21+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610141552"
   },
   "summary": "הלחימה בזירת תימן מתאפיינת בהסלמה חריפה בין החות'ים לבין סעודיה והקואליציה שבהנהגתה. החות'ים מבצעים תקיפות נרחבות באמצעות טילים וכטב\"מים לעבר תשתיות אנרגיה ונמלי תעופה בסעודיה (כגון מתקני ארמקו וריאד), בעוד סעודיה מגיבה בתקיפות אוויריות נגד יעדים בתימן, לצד לחימה פנימית עצימה סביב העיר תעז והחמרת המשבר ההומניטרי.",
   "fronts": [
    {
     "name": "חזית סעודיה-תימן (אווירית וטילים)",
     "status": "פעילה ומתלקחת"
    },
    {
     "name": "החזית הפנימית בתימן (תעז ואזורי עימות)",
     "status": "פעילה עם החמרה הומניטרית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10141552-01",
     "title": "תקיפת מתקני ארמקו ומטרות נוספות בסעודיה",
     "summary": "החות'ים תקפו מבנים ומתקנים של חברת הנפט ארמקו בד'הראן ובדמאם, וכן שיגרו טילים לעבר ריאד ויעדים נוספים, מה שהוביל להתלקחות שריפות ולשיבושים.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T21:46:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T21:46:04+00:00",
     "last_update_at": "2026-10-14T15:30:24+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים המדויקים בכלל האתרים אינו מאומת לחלוטין מעבר להודעות הרשמיות והדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_be119e9e72308b3a",
       "url": "https://www.al-monitor.com/originals/2026/10/houthis-say-targeted-saudi-oil-giant-aramco-vow-more-attacks",
       "published_at": "2026-10-14T15:30:24+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_be119e9e72308b3a",
       "url": "https://www.bbc.co.uk/news/articles/crx2d60y1py3o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-14T12:26:13+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_be119e9e72308b3a",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-aramco-headquarters-suffered-extensive-damage-houthi-attack-sources-say",
       "published_at": "2026-10-14T11:46:26+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_be119e9e72308b3a",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-vow-more-attacks-saudi-airports-oil-facilities-after-aramco-hq-hit",
       "published_at": "2026-10-14T10:46:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_3a08bef1473313e9",
       "url": "https://www.middleeasteye.net/news/yemen-houthis-vow-continue-targeting-saudi-aramco-facilities",
       "published_at": "2026-10-14T10:42:37+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2ceafdc1e40a26d6",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-offer-remote-option-fii-conference-after-attacks-reuters",
       "published_at": "2026-10-14T09:07:32+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_be119e9e72308b3a",
       "url": "https://t.me/abualiexpress/131894",
       "published_at": "2026-10-14T08:51:14+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_be119e9e72308b3a",
       "url": "https://t.me/alexmehacarmel/48525",
       "published_at": "2026-10-13T21:46:04+00:00"
      }
     ],
     "places": [
      {
       "name": "ד'הראן, סעודיה",
       "lat": 26.2967,
       "lon": 50.1202
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    },
    {
     "id": "YEMEN-10141552-02",
     "title": "תקיפות הקואליציה בראשות סעודיה בצנעא",
     "summary": "הקואליציה בראשות סעודיה תקפה מתקני נפט ותשתיות באזור צנעא בתגובה למתקפות החות'ים.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T14:53:39+00:00",
     "last_update_at": "2026-10-14T15:10:08+00:00",
     "what_is_not_verified": "הנזק המדויק לכלל התשתיות לא פורט במלואו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_cc29e142beea6c46",
       "url": "https://www.newarab.com/news/saudi-arabia-trades-strikes-yemen-threatens-houthis",
       "published_at": "2026-10-14T15:10:08+00:00"
      },
      {
       "source_id": "src_gcaptain",
       "source_root_id": "fh_cc29e142beea6c46",
       "url": "https://gcaptain.com/saudi-arabia-strikes-houthi-targets-as-red-sea-war-escalates/",
       "published_at": "2026-10-13T18:48:46+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_cc29e142beea6c46",
       "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
       "published_at": "2026-10-13T17:26:08+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_cc29e142beea6c46",
       "url": "https://www.france24.com/en/middle-east/20261013-oil-facility-near-yemen-capital-sanaa-hit-by-saudi-arabia-houthis-say",
       "published_at": "2026-10-13T14:53:39+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-10141552-03",
     "title": "התקדמות החות'ים לעבר העיר תעז",
     "summary": "החות'ים התקדמו לעבר העיר תעז והשתלטו על כניסות ומוקדים סביבה, תוך יצירת מצור והחמרת המשבר ההומניטרי.",
     "axis": "הזירה הפנימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T09:46:04+00:00",
     "last_update_at": "2026-10-14T12:37:04+00:00",
     "what_is_not_verified": "שליטה מלאה בכל שכונות העיר אינה מוגדרת במלואה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_343d04cbef70eb03",
       "url": "https://www.newarab.com/news/chinese-company-helping-houthis-improve-missile-capabilities",
       "published_at": "2026-10-14T12:37:04+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_343d04cbef70eb03",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168591",
       "published_at": "2026-10-14T12:00:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_bb6e3be2791ef089",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-hospitals-overwhelmed-surge-war-casualties-red-cross-warns",
       "published_at": "2026-10-14T09:46:04+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה לפיה חיילים חות'ים נלחמים בשורות צבא רוסיה",
    "הפרטים אודות מעורבות חברה סינית באספקת רכיבי טילים לחות'ים המופיעים בדיווח עקיף"
   ],
   "map": {
    "confidence": "low",
    "is_assessment": true,
    "note": "הערכה אנליטית מבוססת דיווחים — לא קו שליטה מאומת בשטח.",
    "layers": []
   },
   "economy": [
    {
     "indicator": "דולר/שקל",
     "value": 3.0766,
     "unit": "ILS",
     "change_pct": 0.05,
     "source_id": "src_ecb",
     "as_of": "2026-10-14T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "המשך פגיעה במתקני אנרגיה ושדות תעופה בסעודיה כתגובה על תקיפות ממלכתיות",
      "הרחבת יכולות הלחימה העצמאיות"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומדיני על סעודיה",
      "ניצול מתיחות אזורית רחבה להעצמת מעמדם"
     ],
     "forecast": [
      "המשך שיגורים לעבר עומק סעודיה",
      "העמקת הלחימה בקרקע בתוך תימן"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על מתקנים חיוניים ואזרחים",
      "בלימת התקפות החות'ים ונטרול איומים"
     ],
     "inferred": [
      "שמירה על יציבות משק הנרגיה והכלכלה מפני שיבושים",
      "גביית מחיר צבאי מהחות'ים על מתקפותיהם"
     ],
     "forecast": [
      "המשך תקיפות נגד תשתיות חות'יות בתימן",
      "התאמת אירועים וכינוסים (כמו כנס השקעות) למצב הביטחוני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-vow-more-attacks-saudi-airports-oil-facilities-after-aramco-hq-hit",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/crx2d60y1py3o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261013-oil-facility-near-yemen-capital-sanaa-hit-by-saudi-arabia-houthis-say",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/saudi-arabia-strikes-houthi-targets-as-red-sea-war-escalates/",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-hospitals-overwhelmed-surge-war-casualties-red-cross-warns",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/chinese-company-helping-houthis-improve-missile-capabilities",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131894",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48525",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168591",
     "accessed_at": "2026-10-14T15:52:21+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T23:44:51+00:00",
  "changes": {
   "YEMEN-10141552-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פגיעה במתחם משרדי ארמקו בד'הראן",
    "score": 1.0
   },
   "YEMEN-10141552-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות הקואליציה על מאגרי דלק ואזהרות פינוי בצנעא",
    "score": 1.0
   },
   "YEMEN-10141552-03": {
    "kind": "possible",
    "prev": "מצור חות'י והחמרת המצב ההומניטרי בתעז",
    "score": 0.633
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-14T1526__iran-202610141526.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-14T15:26:23+00:00",
   "window": {
    "from": "2026-10-13T15:26:23+00:00",
    "to": "2026-10-14T15:26:23+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610141526"
   },
   "summary": "העימות האזורי נמשך במוקדים שונים הכוללים תקיפות ימיות במצר הורמוז, הסלמה בין סעודיה לחות'ים המגובים בידי איראן, וחילופי איומים בין ישראל לחיזבאללה ולטאיריאן. במקביל, נשמרת מתיחות סביב שאלת פעילות צבאית אפשרית של ארה\"ב וישראל אל מול מתקני הגרעין באיראן והאפשרות לתגובות נוספות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פעיל - תקיפות ספינות ומתיחות ימית"
    },
    {
     "name": "תימן-סעודיה",
     "status": "פעיל - תקיפות הדדיות בין סעודיה לחות'ים"
    },
    {
     "name": "לבנון-ישראל",
     "status": "מתוח - איומי עימות והיערכות צבאית"
    },
    {
     "name": "עיראק",
     "status": "פעיל - תקיפות איראניות נגד קבוצות אופוזיציה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10141526-01",
     "title": "פגיעה בספינות מכולות במצר הורמוז",
     "summary": "שתי ספינות מכולות רשומות בסינגפור נפגעו מירי או פגיעת קליעים בעת הפלגה במצר הורמוז, כאשר אחת מהן טבעה לאחר שעלתה באש והשנייה ניזוקה.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T19:32:15+00:00",
     "last_update_at": "2026-10-14T13:46:34+00:00",
     "what_is_not_verified": "זהות היורים המדויקת אינה מוגדרת בוודאות מוחלטת בכל דיווח מעבר להאשמות כלפי איראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_maritime_and_port_authority_of_singapore",
       "url": "https://www.al-monitor.com/originals/2026/10/two-singapore-registered-vessels-struck-strait-hormuz-one-sinks",
       "published_at": "2026-10-14T13:46:34+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_maritime_and_port_authority_of_singapore",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/container-ship-struck-unknown-projectile-strait-hormuz-ukmto-says",
       "published_at": "2026-10-14T11:53:03+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_maritime_and_port_authority_of_singapore",
       "url": "https://t.me/lelotsenzura/94639",
       "published_at": "2026-10-14T09:33:16+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_maritime_and_port_authority_of_singapore",
       "url": "https://t.me/lelotsenzura/94635",
       "published_at": "2026-10-13T19:32:15+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-10141526-02",
     "title": "תקיפות והסלמה בין סעודיה לחות'ים",
     "summary": "התקפות טילים וכטב\"מים של החות'ים פגעו במתקנים סעודיים ובאזור ריאד, ובתגובה פתחה סעודיה בתקיפות על מחסני נפט בסנעא שבתימן.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T14:53:39+00:00",
     "last_update_at": "2026-10-14T07:16:04+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים המדויקים בכל אתר.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rj3hadnszx",
       "published_at": "2026-10-14T07:16:04+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-recap-174",
       "published_at": "2026-10-14T06:03:46+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261014-live-saudi-arabia-reports-aramco-building-hit-and-four-wounded-in-houthi-missile-attacks",
       "published_at": "2026-10-14T03:39:11+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
       "published_at": "2026-10-13T17:26:08+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261013-oil-facility-near-yemen-capital-sanaa-hit-by-saudi-arabia-houthis-say",
       "published_at": "2026-10-13T14:53:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "סנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "דהראן, סעודיה",
       "lat": 26.2967,
       "lon": 50.1202
      }
     ]
    },
    {
     "id": "IRAN-10141526-03",
     "title": "תקיפות כטב\"מים איראניים בצפון עיראק",
     "summary": "כוחות איראניים תקפו באמצעות כטב\"מים קבוצות אופוזיציה כורדיות איראניות בצפון עיראק.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T15:14:23+00:00",
     "last_update_at": "2026-10-14T14:47:00+00:00",
     "what_is_not_verified": "פרטים מלאים על מספר הנפגעים והנזק המדויק במחנות.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_fdd_report",
       "url": "https://www.fdd.org/analysis/iraq-after-the-us-military-withdrawal-militia-disarmament-will-decide-the-outcome/",
       "published_at": "2026-10-14T14:47:00+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_fdd_report",
       "url": "https://www.longwarjournal.org/archives/2026/10/iran-targets-kurdish-opposition-groups-with-new-round-of-drone-attacks.php",
       "published_at": "2026-10-13T15:14:23+00:00"
      }
     ],
     "places": [
      {
       "name": "קויא, עיראק",
       "lat": 36.0842,
       "lon": 44.6339
      }
     ]
    },
    {
     "id": "IRAN-10141526-04",
     "title": "איומי בכירי ביטחון ישראלים כלפי חיזבאללה ולבנון",
     "summary": "שר הביטחון הישראלי ישראל כ\"ץ הציב אזהרה לפיה תקיפה של חיזבאללה לצד איראן תגרור תמרון קרקעי, עקירת מיליון שיעים והרס בדרום לבנון ובדאחייה.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T10:41:53+00:00",
     "last_update_at": "2026-10-14T11:04:17+00:00",
     "what_is_not_verified": "האם התקיפה האיראנית המאוימת תתרחש בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_c15a3257e7639362",
       "url": "https://www.israelhayom.co.il/news/defense/article/21623330",
       "published_at": "2026-10-14T11:04:17+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_c15a3257e7639362",
       "url": "https://t.me/abualiexpress/131900",
       "published_at": "2026-10-14T10:41:53+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 39.371,
       "lon": -84.2128
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "IRAN-10141526-05",
     "title": "חשיפת מטען חומר נפס במשית לבנונית",
     "summary": "כוחות הביטחון בלבנון עצרו משאית ובה חצי טון חומרי נפץ צבאיים במעבר דהר אל-ביידאר בלבנון, שלפי הערכות נועדו לחיסולים פוליטיים.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T13:29:17+00:00",
     "last_update_at": "2026-10-14T13:29:17+00:00",
     "what_is_not_verified": "היעד המדויק של המטען והקשר הישיר לפקודות איראניות ספציפיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_fdd_report",
       "url": "https://www.fdd.org/analysis/lebanons-false-claims-of-disarming-hezbollah/",
       "published_at": "2026-10-14T13:29:17+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-ביידאר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    }
   ],
   "not_verified": [
    "הטענות על דיונים סודיים בין נתניהו וטראמפ על תקיפה באיראן טרם הבחירות",
    "ההערכות המדויקות על מועד מתקפה איראנית או אמריקנית רחבה"
   ],
   "map": {
    "confidence": "medium",
    "is_assessment": true,
    "note": "הערכה אנליטית מבוססת דיווחים — לא קו שליטה מאומת בשטח.",
    "layers": []
   },
   "economy": [
    {
     "indicator": "דולר/שקל",
     "value": 3.0766,
     "unit": "ILS",
     "change_pct": 0.05,
     "source_id": "src_ecb",
     "as_of": "2026-10-14T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "תגובה מוחצת על כל פעילות עויינת",
      "המשך הגנה על האינטרסים שלה למרות הסנקציות"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וימי באמצעות פגיעה בספינות במפרץ ושימוש בשלוחות",
      "הרתעת ארה\"ב וישראל מפני תקיפות נוספות"
     ],
     "forecast": [
      "הגברת פעילות השלוחות בתימן ובלבנון בהתאם להתפתחויות",
      "שמירה על לחץ ימי סביב מצר הורמוז לקראת מועדי בחירות"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הרתעת איראן ושלוחותיה מפני תקיפות נוספות",
      "גביית מחיר כבד מחיזבאללה אם יצטרף למערכה"
     ],
     "inferred": [
      "היערכות לתגובה צבאית אפשרית במקרה של מתקפה מצד איראן",
      "שקילת עיתויים מבצעיים מול זירות הלחימה השונות"
     ],
     "forecast": [
      "שמירת כוננות גבוהה לאורך הגבולות ובמרחב הימי",
      "המשך תיאור מצב המוכנות מול איומי שלוח"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "בידוד כלכלי של איראן והחמרת סנקציות בתחום התעופה והאנרגיה"
     ],
     "inferred": [
      "תמיכה בשותפות אזוריות מול תקיפות החות'ים והשלוחות",
      "בחינת תגובות אסטרטגיות למניעת התחמשות גרעינית"
     ],
     "forecast": [
      "המשך נוכחות צבאית ואכיפת לחץ כלכלי במסגרת מבצעים אזוריים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/two-singapore-registered-vessels-struck-strait-hormuz-one-sinks",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/lebanons-false-claims-of-disarming-hezbollah/",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261013-oil-facility-near-yemen-capital-sanaa-hit-by-saudi-arabia-houthis-say",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21623330",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/iran-targets-kurdish-opposition-groups-with-new-round-of-drone-attacks.php",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-recap-174",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131900",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94635",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rj3hadnszx",
     "accessed_at": "2026-10-14T15:26:23+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T23:40:42+00:00",
  "changes": {
   "IRAN-10141526-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הסלמת תקיפות ופגיעה בכלי שיט במצרי הורמוז",
    "score": 1.0
   },
   "IRAN-10141526-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיגור טילים של החות'ים לעבר יעדים בסעודיה ותקיפות נגד",
    "score": 1.0
   },
   "IRAN-10141526-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפות כטבמים איראניות נגד כוחות כורדיים בצפון עיראק",
    "score": 1.0
   },
   "IRAN-10141526-04": {
    "kind": "new"
   },
   "IRAN-10141526-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-14T1537__ukraine-202610141537.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-14T15:37:17+00:00",
   "window": {
    "from": "2026-10-13T15:37:17+00:00",
    "to": "2026-10-14T15:37:17+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610141537"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת כאשר רוסיה מגבירה את התקיפות האוויריות על תשתיות אנרגיה, מחסנים ויעדים אזרחיים ברחבי אוקראינה, במקביל ללחץ צבאי בגזרת זפוריז'יה. מנגד, אוקראינה מרחיבה את פגיעותיה בעומק רוסיה נגד מרכזי נתונים ומתקנים קריטיים, תוך התמודדות עם שיבושים באספקה טכנולוגית והגבלות על מערכות תקשורת לוויניות.",
   "fronts": [
    {
     "name": "חזזרת זפוריז'יה (חוליאיפול ואוריחיב)",
     "status": "מתקפה ותגבור כוחות רוסיים בניסיון להתקדם לעיר זפוריז'יה"
    },
    {
     "name": "עומק רוסיה",
     "status": "תקיפות כטב\"מים אוקראיניים על מרכזי נתונים ותשתיות"
    },
    {
     "name": "עומק אוקראינה",
     "status": "תקיפות טילים וכטב\"מים רוסיים נרחבות על תשתיות אנרגיה ואתרים אזרחיים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10141537-01",
     "title": "תקיפת כטב\"מים אוקראינית על מרכז נתונים של סברבנק בבלאקובו",
     "summary": "כטב\"מים אוקראיניים תקפו את מרכז הנתונים של סברבנק בעיר באלאקובו, וגרמו להרוג ולנזק למבני מגורים, בעוד גורמים רשמיים אישרו את התקיפה ומסרו כי המערכות פועלות כסדרם.",
     "axis": "תקיפות והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T09:54:52+00:00",
     "last_update_at": "2026-10-14T12:42:35+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48536",
       "published_at": "2026-10-14T12:42:35+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/14/users-start-reporting-outages-in-sberbank-services-after-ukrainian-drone-attack-on-company-s-data-center",
       "published_at": "2026-10-14T10:46:38+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/14/ukraine-strikes-a-sberbank-data-center-in-russia-meanwhile-kyiv-isn-t-getting-crucial-missile-warnings-from-the-u-s-and-spacex-is-restricting-starlink",
       "published_at": "2026-10-14T09:54:52+00:00"
      }
     ],
     "places": [
      {
       "name": "באלאקובו, רוסיה",
       "lat": 52.0181,
       "lon": 47.8191
      }
     ]
    },
    {
     "id": "UKRAINE-10141537-02",
     "title": "תקיפה רוסית במחסן בלוצק",
     "summary": "כטב\"מים רוסיים תקפו מחסן סיטונאי בעיר לוצק, מה שהוביל למותם של שישה בני אדם ולפציעתם של עשרה עד שנים עשר איש נוספים.",
     "axis": "תקיפות והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T14:42:31+00:00",
     "last_update_at": "2026-10-14T14:42:31+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/14/six-killed-in-russian-strike-on-warehouse-in-ukraine-s-lutsk",
       "published_at": "2026-10-14T14:42:31+00:00"
      }
     ],
     "places": [
      {
       "name": "לוצק, אוקראינה",
       "lat": 50.7451,
       "lon": 25.3201
      }
     ]
    },
    {
     "id": "UKRAINE-10141537-03",
     "title": "תקיפת כטב\"מים רוסית בזפוריז'יה",
     "summary": "כטב\"מים רוסיים תקפו את זפוריז'יה, גרמו לפציעתם של שלושה בני אדם, להרס בניין מגורים דו-קומתי ולנזק לבתים נוספים.",
     "axis": "תקיפות והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T14:06:00+00:00",
     "last_update_at": "2026-10-14T14:06:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_8ca66279ade9dcb9",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058014/",
       "published_at": "2026-10-14T14:06:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10141537-04",
     "title": "הגבלות על מהירות מסופי סטארלינק באוקראינה",
     "summary": "חברת ספייס אקס הטילה מגבלות מהירות על מסופי סטארלינק ניידים ועל החבילה הצבאית שלהם באוקראינה, מה ששיבש פעילות מבצעית ומשימות קרביות.",
     "axis": "סיוע צבאי וטכנולוגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T11:31:36+00:00",
     "last_update_at": "2026-10-14T14:17:59+00:00",
     "what_is_not_verified": "הקשר הישיר והמוצהר בין המגבלות למדיניות הפוליטית אינו מאומת רשמית על ידי החברה עצמה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/14/ukraine-soldiers-combat-access-starlink-satellite-internet-restricted",
       "published_at": "2026-10-14T14:17:59+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4174375-ukraines-mod-in-contact-with-us-spacex-nato-partners-over-starshield-restrictions-source.html",
       "published_at": "2026-10-14T12:39:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48533",
       "published_at": "2026-10-14T11:31:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10141537-05",
     "title": "השלמת פעולות חילוץ והצלה בחארקוב",
     "summary": "הסתיימו פעולות החילוץ באתר פגיעת טיל רוסי בבניין מגורים בן ארבע קומות במחוז חולודנוהירסקי בחארקוב, שבהן נהרגו ארבעה בני אדם ונפצעו 41.",
     "axis": "תקיפות והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T13:40:00+00:00",
     "last_update_at": "2026-10-14T13:40:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_d47334ebf9515a23",
       "url": "https://www.ukrinform.net/rubric-ato/4174409-four-killed-41-injured-as-rescue-operations-conclude-at-site-of-russian-missile-strike-in-kharkiv.html",
       "published_at": "2026-10-14T13:40:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חארקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10141537-06",
     "title": "פתיחת משפט נגד אזרח אוקראיני בגרמניה בפרשת צינורות נורד סטרים",
     "summary": "החל בגרמניה משפטו של האזרח האוקראיני סרגיי קוזנצוב הנאשם במעורבות בפיצוץ צינורות הגז נורד סטרים.",
     "axis": "חזיתות, תקיפות ומאבק משפטי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T13:41:51+00:00",
     "last_update_at": "2026-10-14T13:56:20+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_837a499044091381",
       "url": "https://tass.com/world/2202063",
       "published_at": "2026-10-14T13:56:20+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_837a499044091381",
       "url": "https://www.bbc.co.uk/news/articles/cw99zpmnxzmjo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-14T13:41:51+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "{'string': 'ההנחה שחברת SpaceX הגבילה את מהירות מסופי סטארלינק בהוראה ישירה של ממשל טראמפ או כצעד ענישה פוליטי'}",
    "{'string': 'טענות אוקראיניות לפיהן ארצות הברית מונעת במכוון התרעות על שיגורי טילים בליסטיים כדי לסייע לרוסיה'}",
    "{'string': \"הערכות מודיעיניות על יחס כוחות של 1 ל-7 לטובת רוסיה באזורים מסוימים בזפוריז'יה\"}"
   ],
   "map": {
    "confidence": "high",
    "is_assessment": true,
    "note": "הערכה אנליטית מבוססת דיווחים — לא קו שליטה מאומת בשטח.",
    "layers": []
   },
   "economy": [
    {
     "indicator": "אירו/דולר",
     "value": 1.1195,
     "unit": "USD",
     "change_pct": 0.06,
     "source_id": "src_ecb",
     "as_of": "2026-10-14T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שטחי המדינה ותשתיותיה",
      "פיתוח פרויקט הגנה אווירית פרטי ויכולות ייצור מקומיות"
     ],
     "inferred": [
      "פגיעה במרכזי נתונים ותשתיות קריטיות בתוך רוסיה כדי השיג הרתעה ולשבש את הכלכלה הרוסית",
      "שמירה על רציפות תפקודית של הכוחות הלוחמים למרות הגבלות טכנולוגיות"
     ],
     "forecast": [
      "המשך ניסיונות לפגוע במטרות אסטרטגיות בשטח רוסיה באמצעות כטב\"מים",
      "הגברת התלות בייצור מקומי של אמצעי הגנה אווירית עקב קשיי אספקה ממערב"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השמדת אתרי אחסון וייצור של כטב\"מים אוקראיניים",
      "התקדמות במחוז זפוריז'יה לעבר הגדה השמאלית והעיר זפוריז'יה"
     ],
     "inferred": [
      "גרימת קריסה של תשתיות האנרגיה והכלכלה באוקראינה באמצעות מתקפות בלתי פוסקות",
      "הסתת קשב של צבא אוקראינה מחזיתות אחרות באמצעות לחץ מוגבר בגזרת זפוריז'יה"
     ],
     "forecast": [
      "המשך הלחץ המסיבי על התשתיות האזרחיות והאנרגטיות באוקראינה לקראת חודשי החורף",
      "ריכוז מאמצים טקטיים לשיפור עמדות במחוז זפוריז'יה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cw99zpmnxzmjo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/14/ukraine-soldiers-combat-access-starlink-satellite-internet-restricted",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/14/six-killed-in-russian-strike-on-warehouse-in-ukraine-s-lutsk",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058014/",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2202063",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48533",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4174409-four-killed-41-injured-as-rescue-operations-conclude-at-site-of-russian-missile-strike-in-kharkiv.html",
     "accessed_at": "2026-10-14T15:37:17+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T23:43:50+00:00",
  "changes": {
   "UKRAINE-10141537-01": {
    "kind": "new"
   },
   "UKRAINE-10141537-02": {
    "kind": "new"
   },
   "UKRAINE-10141537-03": {
    "kind": "new"
   },
   "UKRAINE-10141537-04": {
    "kind": "new"
   },
   "UKRAINE-10141537-05": {
    "kind": "new"
   },
   "UKRAINE-10141537-06": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-14T2340__north-202610142340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-14T23:40:41+00:00",
   "window": {
    "from": "2026-10-13T23:40:41+00:00",
    "to": "2026-10-14T23:40:41+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610142340"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות צבאית מתמשכת הכוללת תקיפות וירי ארטילרי ישראלי בדרום לבנון ובדרום מערב סוריה, לצד פעילות כוחות קרקעיים לאיתור תשתיות חיזבאללה. במקביל, ישראל משמיעה איומים להרחבת אזור הביטחון עד נבטיה והליטני אם תחול הסלמה עם איראן ושותפיה. במישור המדיני, הממשל בלבנון פועל למנוע את נסיגת כוחות יוניפי\"ל על רקע חשש מוואקום ביטחוני, בעוד טורקיה מאשימה את ישראל בשיבוש ההתאוששות בסוריה.",
   "fronts": [
    {
     "name": "חזית דרום לבנון",
     "status": "פעילות התקפית מוגבלת, ירי ארטילרי, תקיפות מהאוויר וסריקות מבצעיות לצד נוכחות ברצועת הביטחון"
    },
    {
     "name": "חזית דרום מערב סוריה (קוניטרה)",
     "status": "חילופי אש ופגיעות ארטילריות ממוקדות באזורי תלים"
    },
    {
     "name": "הזירה המדינית בלבנון מול האו\"ם",
     "status": "מגעים דחופים למניעת נסיגת כוחות יוניפי\"ל בסוף השנה"
    },
    {
     "name": "הציר הדיפלומטי טורקיה-סוריה",
     "status": "מתיחות הצהרתית וגינויים טורקיים נגד פעולות ישראליות"
    }
   ],
   "events": [
    {
     "id": "NORTH-10142340-01",
     "title": "איתור מטען ועמדת שהייה בפאתי כפר שובא",
     "summary": "כוחות חטיבה 810 השלימו פעילות מבצעית שבה אותרו מטען מוכן ועמדת שהייה של ארגון חיזבאללה בפאתי הכפר.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T06:24:22+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T06:24:22+00:00",
     "last_update_at": "2026-10-14T06:24:22+00:00",
     "what_is_not_verified": "היקף אמצעי הלחימה המלא שאותר במתחם מעבר למצוין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25363",
       "published_at": "2026-10-14T06:24:22+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר שובא, לבנון",
       "lat": 33.3277,
       "lon": 35.6927
      }
     ]
    },
    {
     "id": "NORTH-10142340-02",
     "title": "תקיפות והפגזות ישראליות במספר מוקדים בדרום לבנון",
     "summary": "בוצעה תקיפה אווירית בחאדאת'א שהובילה לפציעת שני בני אדם, לצד ירי ארטילרי באזור ואדי זיבקין ופאתי מיפדון, הטלת פצצה מרחפן סמוך לזיבקין וירי במחוז בינת ג'בייל.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T16:35:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T16:35:49+00:00",
     "last_update_at": "2026-10-14T23:12:10+00:00",
     "what_is_not_verified": "זהות הנפגעים המדויקת והיקף הנזק המלא בכל המוקדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_90033b7f656c6fc5",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrike-injures-2-including-child-in-southern-lebanon-state-media/4089149",
       "published_at": "2026-10-14T23:12:10+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_90033b7f656c6fc5",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/14/israeli-quadcopter-drone-drops-bomb-in-lebanon?traffic_source=rss",
       "published_at": "2026-10-14T20:47:46+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_90033b7f656c6fc5",
       "url": "https://english.almanar.com.lb/article/138247/",
       "published_at": "2026-10-14T16:35:49+00:00"
      }
     ],
     "places": [
      {
       "name": "חאדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      },
      {
       "name": "זיבקין, לבנון",
       "lat": 33.1644,
       "lon": 35.2665
      },
      {
       "name": "מיפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      }
     ]
    },
    {
     "id": "NORTH-10142340-03",
     "title": "ירי ארטילרי לעבר מטרות באזור קוניטרה בסוריה",
     "summary": "שלושה פגזים ארטילריים ששוגרו על ידי כוחות ישראליים פגעו בסביבת תל כרום שבדרום מערב סוריה.",
     "axis": "דרום מערב סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T14:52:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T14:52:30+00:00",
     "last_update_at": "2026-10-14T14:52:30+00:00",
     "what_is_not_verified": "מידת הנזק או נפגעים כתוצאה מהפגיעות בתל כרום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-shell-area-in-southwestern-syria-s-quneitra/4088736",
       "published_at": "2026-10-14T14:52:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10142340-04",
     "title": "איומי שר הביטחון הישראלי בהרחבת השליטה בלבנון",
     "summary": "במהלך סיור ברצועת הביטחון בדרום לבנון איים השר בהשתלטות על שטחים נוספים באזורי נבטיה והליטני ובפינוי הדאחייה בביירות אם חיזבאללה יצטרף למתקפה איראנית.",
     "axis": "דרום לבנון - ביירות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T14:00:00+00:00",
     "last_update_at": "2026-10-14T20:05:32+00:00",
     "what_is_not_verified": "מידת המוכנות המבצעית המיידית למימוש התוכניות הקרקעיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/138327/",
       "published_at": "2026-10-14T20:05:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israels-katz-threatens-seize-more-land-lebanon",
       "published_at": "2026-10-14T17:04:20+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962842/lebanon-iran-and-the-houthis-israels-election-campaign-heats-up/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962842",
       "published_at": "2026-10-14T14:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-10142340-05",
     "title": "מגעים להארכת מנדט יוניפי\"ל בדרום לבנון",
     "summary": "נשיא לבנון ג'וזף עון נועד עם תת-מזכ\"ל האו\"ם לפעולות שלום והזהיר כי נסיגת הכוח הבינלאומי תיצור ואקום ביטחוני מסוכן לנוכח התקיפות הישראליות.",
     "axis": "דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T10:01:10+00:00",
     "last_update_at": "2026-10-14T19:24:47+00:00",
     "what_is_not_verified": "האם מועצת הביטחון של האו\"ם תיעתר לבקשה ותשנה את מועד סיום המנדט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/un-considering-options-to-maintain-presence-in-lebanon-after-peacekeeping-mandate-ends/4089007",
       "published_at": "2026-10-14T19:24:47+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/un-says-wants-lebanon-stability-end-unifil-mandate-looms",
       "published_at": "2026-10-14T19:11:41+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/un-peacekeeping-chief-says-talks-future-lebanon-mission-must-begin-soon",
       "published_at": "2026-10-14T18:46:27+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/962831/aoun-urges-un-to-maintain-unifils-mission-in-lebanon-amid-israeli-occu/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962831",
       "published_at": "2026-10-14T10:01:10+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10142340-06",
     "title": "גינוי טורקי לפעולות ישראל הפוגעות בשיקום סוריה",
     "summary": "טורקיה מתחה ביקורת חריפה על ישראל בטענה שהיא מנסה לשבש את תהליך ההתאוששות והשיקום של סוריה ומסלימה את המתיחות האזורית.",
     "axis": "סוריה - טורקיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T17:07:00+00:00",
     "last_update_at": "2026-10-14T17:07:00+00:00",
     "what_is_not_verified": "צעדים מעשיים שבכוונת אנקרה לנקוט מעבר להצהרה הדיפלומטית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/diplomacy/turkiye-criticizes-israel-for-targeting-al-aqsa-undermining-syria",
       "published_at": "2026-10-14T17:07:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10142340-07",
     "title": "אימון ומעבר גדודי תותחנים למשימה מבצעית בלבנון",
     "summary": "גדודי תותחנים של חטיבה 282 ביצעו אימון תרחישי לחימה ברמת הגולן, ובתום התרגיל עברו לביצוע משימה מבצעית בגזרת לבנון.",
     "axis": "רמת הגולן - דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T16:00:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T16:00:03+00:00",
     "last_update_at": "2026-10-14T16:00:03+00:00",
     "what_is_not_verified": "המיקום המדויק שבו הוצבו הגדודים והמשימה המבצעית הספציפית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25370",
       "published_at": "2026-10-14T16:00:03+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הנפגעים הכולל והיקף הנזק המדויק כתוצאה מהתקיפות בבינת ג'בייל, חאדאת'א וקוניטרה",
    "מידת ההיתכנות והעיתוי של הרחבת הפעולה הקרקעית הישראלית לעבר נבטיה והליטני",
    "ההחלטה הסופית של מועצת הביטחון של האו\"ם לגבי הארכת מנדט יוניפי\"ל מעבר לסוף שנת 2026"
   ],
   "map": {
    "confidence": "medium",
    "is_assessment": true,
    "note": "הערכה אנליטית מבוססת דיווחים — לא קו שליטה מאומת בשטח.",
    "layers": []
   },
   "economy": [
    {
     "indicator": "דולר/שקל",
     "value": 3.0766,
     "unit": "ILS",
     "change_pct": 0.05,
     "source_id": "src_ecb",
     "as_of": "2026-10-14T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "השמדת תשתיות הטרור של חיזבאללה בדרום לבנון",
      "הרחבת אזור הביטחון הקבוע עד נבטיה והליטני ופינוי הדאחייה במקרה של הצטרפות חיזבאללה למתקפה נגד ישראל"
     ],
     "inferred": [
      "יצירת הרתעה מול חיזבאללה ואיראן באמצעות העלאת רף האיומים והפגנת מוכנות כוחות קרקעיים",
      "שימור חופש פעולה התקפי ואבטחת הגבול הצפוני לפני הבחירות"
     ],
     "forecast": [
      "המשך פשיטות נקודתיות וירי ארטילרי לסיכול התבססות חיזבאללה במרחב הגבול",
      "הימנעות ממתקפת מנע רחבה לפני הבחירות בישראל אלא אם כן תותקף"
     ]
    },
    {
     "actor": "לבנון (ההנהגה הממלכתית)",
     "declared": [
      "דרישה להארכת מנדט יוניפי\"ל מעבר לשנת 2026 למניעת ואקום ביטחוני",
      "הפסקת התקיפות והכיבוש הישראלי של עיירות וכפרים בדרום לבנון"
     ],
     "inferred": [
      "שמירה על נוכחות בינלאומית שתשמש חיץ ותמנע הרחבה נוספת של האחיזה הישראלית",
      "מניעת השתלטות של חיזבאללה על משאבי וכספי השיקום במדינה"
     ],
     "forecast": [
      "המשך לחץ דיפלומטי על מועצת הביטחון לקבלת הארכה זמנית לכוח יוניפי\"ל",
      "ניסיון לתמרן מול הלחצים האיראניים והמתח הפנימי בין המחנות השונים"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "התנגדות לניסיונות ישראליים לשבש את תהליך השיקום וההתאוששות בסוריה"
     ],
     "inferred": [
      "שאיפה לייצב את המרחב הסורי בהתאם לאינטרסים של אנקרה ולבלום השפעה צבאית ישראלית במדינה"
     ],
     "forecast": [
      "המשך גינויים דיפלומטיים והצהרתיים נגד פעולות ישראליות בסוריה ללא התערבות צבאית ישירה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/14/israeli-quadcopter-drone-drops-bomb-in-lebanon?traffic_source=rss",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/138327/",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/un-peacekeeping-chief-says-talks-future-lebanon-mission-must-begin-soon",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/un-considering-options-to-maintain-presence-in-lebanon-after-peacekeeping-mandate-ends/4089007",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/diplomacy/turkiye-criticizes-israel-for-targeting-al-aqsa-undermining-syria",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/962831/aoun-urges-un-to-maintain-unifils-mission-in-lebanon-amid-israeli-occu/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962831",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/un-says-wants-lebanon-stability-end-unifil-mandate-looms",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25370",
     "accessed_at": "2026-10-14T23:40:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T23:46:34+00:00",
  "changes": {
   "NORTH-10142340-01": {
    "kind": "new"
   },
   "NORTH-10142340-02": {
    "kind": "possible",
    "prev": "טורקיה קוראת באו\"ם להפסקת התקיפות הישראליות בסוריה",
    "score": 0.467
   },
   "NORTH-10142340-03": {
    "kind": "new"
   },
   "NORTH-10142340-04": {
    "kind": "new"
   },
   "NORTH-10142340-05": {
    "kind": "possible",
    "prev": "נפגעים מפיצוץ נפלי תחמושת ישראלית בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10142340-06": {
    "kind": "possible",
    "prev": "סוריה מאשימה את ישראל בליבוי אי-סדר בא-סווידא",
    "score": 0.467
   },
   "NORTH-10142340-07": {
    "kind": "new"
   }
  }
 }
};
