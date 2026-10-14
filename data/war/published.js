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
  "draft": "drafts/north/2026-10-13T2346__north-202610132346.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-13T23:46:34+00:00",
   "window": {
    "from": "2026-10-12T23:46:34+00:00",
    "to": "2026-10-13T23:46:34+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610132346"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהתמודדות עם השלכות הלחימה, כאשר נפלי תחמושת ופצצות מצרר גובים קורבנות בקרב אזרחים בדרום לבנון ובצפון ישראל. מנגנוני הביטחון בלבנון פועלים לסיכול הברחות של מאות קילוגרמים של חומרי נפץ סמוך לגבול סוריה, בעוד חיזבאללה מנסה לחזק את השפעתו הפנימית באמצעות מענקי דיור למפונים. בזירה המדינית, סוריה וטורקיה דורשות מישראל לכבד את הסכם הפרדת הכוחות משנת 1974, על רקע התרעות מפני גורמי ג'יהאד בדרום סוריה וטענות סוריות על מעורבות ישראלית בא-סווידא.",
   "fronts": [
    {
     "name": "דרום לבנון וגבול ישראל",
     "status": "רגיעה יחסית המלווה בסיכוני נפלי תחמושת ופצצות מצרר הפוגעים באזרחים משני עברי הגבול"
    },
    {
     "name": "גבול לבנון-סוריה והפנים הלבנוני",
     "status": "מאמצי אכיפה של צבא לבנון לסיכול הברחות חומרי נפץ המיוחסים לחיזבאללה"
    },
    {
     "name": "דרום סוריה ורמת הגולן",
     "status": "מתיחות סביב פעילות צה\"ל, התרעות על איומי ג'יהאד עולמי והאשמות סוריות נגד ישראל"
    },
    {
     "name": "מרכז סוריה",
     "status": "המשך תקריות ירי ופגיעה באנשי אבטחה על ידי חמושים בלתי מזוהים במחוז חמאה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10132346-01",
     "title": "התפוצצות נפל פצצת מצרר ברכס רמים שבגליל",
     "summary": "נפל של פצצת מצרר מתקופת הלחימה עם חיזבאללה התפוצץ ברכס רמים וגרם למותו של נער ולפציעתם של עשרים וארבעה נוספים במהלך פעילות לימודית, מה שהוביל להשבתת טיולים באזור.",
     "axis": "גבול ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T04:46:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T04:46:32+00:00",
     "last_update_at": "2026-10-13T13:55:00+00:00",
     "what_is_not_verified": "זהות הגורם שאישר את יציאת התלמידים לאזור שנחשב מסוכן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962675/a-wars-leftovers-cluster-munitions-threaten-northern-israel/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962675",
       "published_at": "2026-10-13T13:55:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjm8rqojfx",
       "published_at": "2026-10-13T13:50:34+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957221",
       "published_at": "2026-10-13T04:46:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10132346-02",
     "title": "נפגעים מפיצוץ נפלי תחמושת ישראלית בדרום לבנון",
     "summary": "שני בני אדם נהרגו בפיצוץ תחמושת שלא התפוצצה בעת שעבדו במטעי זיתים בעיירות פרון ועין אבל בדרום לבנון, מה שהוביל את הרשויות המקומיות להזהיר תושבים מפני כניסה לשטחים חקלאיים.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T15:31:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T15:31:40+00:00",
     "last_update_at": "2026-10-13T15:31:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/unexploded-israeli-ordnance-threatens-lebanons-olive-harvest",
       "published_at": "2026-10-13T15:31:40+00:00"
      }
     ],
     "places": [
      {
       "name": "פרון, לבנון",
       "lat": 33.2968,
       "lon": 35.4265
      },
      {
       "name": "עין אבל, לבנון",
       "lat": 33.1075,
       "lon": 35.4015
      }
     ]
    },
    {
     "id": "NORTH-10132346-03",
     "title": "סיכול הברחות חומרי נפץ בלבנון ובגבול סוריה",
     "summary": "כוחות הביטחון בלבנון עצרו משלוחי חומרי נפץ מסוג סי ארבע ותי אן תי במחסום דהר אל-בידר ובאזור אל-קצר סמוך לגבול סוריה, אשר יועדו לפי החשד לחיזבאללה.",
     "axis": "לבנון וגבול סוריה-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T13:50:00+00:00",
     "last_update_at": "2026-10-13T14:52:11+00:00",
     "what_is_not_verified": "הטענה לפיה חומרי הנפץ יועדו להתנקשות בבכיר פוליטי לבנוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bj4zqisoze",
       "published_at": "2026-10-13T14:52:11+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962656/four-explosive-shipments-seized-in-lebanon-this-month-were-more-shipme/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962656",
       "published_at": "2026-10-13T13:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      },
      {
       "name": "אל-קצר, לבנון",
       "lat": 33.6423,
       "lon": 35.479
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10132346-04",
     "title": "הכרזת חיזבאללה על סיוע כספי למפונים ולנפגעי מלחמה",
     "summary": "הנהגת חיזבאללה הציגה תוכנית מענקים כספיים לתושבים שבתיהם נהרסו או שנאלצו להתפנות מבתיהם בביירות ובדרום לבנון, בגובה של עד ארבעה עשר אלף דולר למשק בית.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T14:02:00+00:00",
     "last_update_at": "2026-10-13T15:59:43+00:00",
     "what_is_not_verified": "מקורות המימון המדויקים של התוכנית והתקציב הכולל שלה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/hezbollah-announces-aid-displaced-lebanon-despite-pressures",
       "published_at": "2026-10-13T15:59:43+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962659/up-to-14000-in-housing-aid-hezbollah-outlines-payments-for-war-hit-fam/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962659",
       "published_at": "2026-10-13T14:02:00+00:00"
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
     "id": "NORTH-10132346-05",
     "title": "דיונים דיפלומטיים על מנגנון הפיקוח להסכם המשולש בלבנון",
     "summary": "שגריר לבנון בוושינגטון קיים פגישה במחלקת המדינה האמריקנית בנוגע למנגנון האימות של ההסכם המשולש, לקראת מפגש צבאי המתוכנן בפלורידה.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T14:02:06+00:00",
     "last_update_at": "2026-10-13T14:02:06+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/962712/lebanons-ambassador-to-washington-discusses-verification-mechanism-at/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962712",
       "published_at": "2026-10-13T14:02:06+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "NORTH-10132346-06",
     "title": "התקפת חמושים על כוחות אבטחה במזרח מחוז חמאה",
     "summary": "שלושה אנשי אבטחת דרכים סורים נהרגו במארב שביצעו חמושים אלמונים נגד סיור באזור הכפרי המזרחי של מחוז חמאה.",
     "axis": "מרכז סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T19:11:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T19:11:44+00:00",
     "last_update_at": "2026-10-13T19:11:44+00:00",
     "what_is_not_verified": "זהות התוקפים והארגון שאליו הם משתייכים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/3-road-security-personnel-killed-in-attack-in-central-syria/4087790",
       "published_at": "2026-10-13T19:11:44+00:00"
      }
     ],
     "places": [
      {
       "name": "חמאה, סוריה",
       "lat": 35.1343,
       "lon": 36.7496
      }
     ]
    },
    {
     "id": "NORTH-10132346-07",
     "title": "סוריה מאשימה את ישראל בליבוי אי-סדר בא-סווידא",
     "summary": "שר החוץ של סוריה האשים את ישראל במימון ובחימוש קבוצות חמושות במחוז א-סווידא כדי לזרוע כאוס, וקרא לחזרה להסכם הפרדת הכוחות משנת 1974.",
     "axis": "דרום סוריה וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T17:12:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T17:12:31+00:00",
     "last_update_at": "2026-10-13T17:12:31+00:00",
     "what_is_not_verified": "אמיתות הטענות בדבר תמיכה ישראלית צבאית או כספית במיליציות בא-סווידא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-accuses-israel-of-arming-funding-militias-in-suwayda-to-sow-chaos-/4087693",
       "published_at": "2026-10-13T17:12:31+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10132346-08",
     "title": "טורקיה קוראת באו\"ם להפסקת התקיפות הישראליות בסוריה",
     "summary": "נציג טורקיה באו\"ם דרש מישראל לעצור את הפעולות הצבאיות בסוריה ולציית באופן מלא להסכם הפרדת הכוחות מ-1974.",
     "axis": "טורקיה, סוריה וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T08:38:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:38:00+00:00",
     "last_update_at": "2026-10-13T08:38:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/diplomacy/turkiyes-un-envoy-calls-on-israel-to-stop-reckless-attacks-in-syria",
       "published_at": "2026-10-13T08:38:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10132346-09",
     "title": "התרעה מפני איומי ג'יהאד עולמי נגד צה\"ל בדרום סוריה",
     "summary": "ערוץ המזוהה עם ארגון אל-קאעדה פרסם סרטון הקורא להיערך לקרב נגד כוחות צה\"ל באזור קוניטרה ורמת הגולן, תוך שימוש בתמונות מפעילות צבאית באזור תל כרום.",
     "axis": "דרום סוריה וישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T11:53:39+00:00",
     "last_update_at": "2026-10-13T11:53:39+00:00",
     "what_is_not_verified": "מידת היכולת המבצעית הממשית של אותם גורמים להוציא פיגועים לפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/not-only-iran-hezbollah-and-palestinian-organizations-the-global-jihad-threat-to-idf-forces-and-israel-from-southern-syria-and-the-motivation-to-target-them/",
       "published_at": "2026-10-13T11:53:39+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה לפיה חומרי הנפץ שנתפסו בלבנון נועדו לביצוע התנקשות בבכיר פוליטי מקומי",
    "ההאשמה של שר החוץ הסורי כי ישראל מחמשת ומממנת מיליציות בא-סווידא",
    "זהות התוקפים שביצעו את המארב נגד אנשי אבטחת הדרכים באזור חמאה",
    "מקור המימון הכספי שממנו מחלק חיזבאללה את מענקי הדיור לנפגעי המלחמה"
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
     "value": 3.0751,
     "unit": "ILS",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "הענקת תמיכה כספית לתושבים שבתיהם נהרסו או שנאלצו לעזוב את מקום מגוריהם"
     ],
     "inferred": [
      "שיקום הלגיטימציה הציבורית בקרב האוכלוסייה הלבנונית והעברת אמצעי לחימה חרף מגבלות האכיפה"
     ],
     "forecast": [
      "המשך ניסיונות לייצב את המערך האזרחי במקביל לשימור יכולותיו מול לחצי הפיקוח של צבא לבנון"
     ]
    },
    {
     "actor": "המשטר הסורי",
     "declared": [
      "דרישה לנסיגה ישראלית מפעולותיה ולחזרה מלאה להסכם הפרדת הכוחות מ-1974"
     ],
     "inferred": [
      "בלימת השפעה ישראלית באזור הדרום והחזרת השליטה הביטחונית למחוזות המרוחקים"
     ],
     "forecast": [
      "המשך שימוש בלחץ דיפלומטי בינלאומי תוך התמודדות מתמשכת עם תקריות אלימות במרכז ובדרום המדינה"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "קריאה לישראל לחדול מהפרות ריבונות בסוריה ולציית להסכמי שביתת הנשק"
     ],
     "inferred": [
      "הגבלת חופש הפעולה הצבאי של ישראל במרחב הסורי והגנה על האינטרסים האזוריים של אנקרה"
     ],
     "forecast": [
      "המשך העלאת דרישות מדיניות בזירה הבינלאומית ובאו\"ם נגד תקיפות ישראליות בסוריה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על מרחב הגבול מפני איומים ונטרול שאריות לחימה המסכנות אזרחים"
     ],
     "inferred": [
      "סיכול התבססות של גורמי טרור בדרום סוריה ומניעת התחמשות מחודשת של חיזבאללה"
     ],
     "forecast": [
      "המשך פעילות הנדסית לאיסוף תחמושת בצפון לצד פיקוח הדוק ומבצעי מול ניסיונות התארגנות מעבר לגבול"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/not-only-iran-hezbollah-and-palestinian-organizations-the-global-jihad-threat-to-idf-forces-and-israel-from-southern-syria-and-the-motivation-to-target-them/",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-accuses-israel-of-arming-funding-militias-in-suwayda-to-sow-chaos-/4087693",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/diplomacy/turkiyes-un-envoy-calls-on-israel-to-stop-reckless-attacks-in-syria",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/962712/lebanons-ambassador-to-washington-discusses-verification-mechanism-at/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962712",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/hezbollah-announces-aid-displaced-lebanon-despite-pressures",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957221",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bj4zqisoze",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T10:40:28+00:00",
  "changes": {
   "NORTH-10132346-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "פיצוץ נפל פצצת מצרר ברכס רמים",
    "score": 1.0
   },
   "NORTH-10132346-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות אוויריות של ישראל בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10132346-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "סיכול משלוח חומרי נפץ במחסום דהר אל-בידר בלבנון",
    "score": 1.0
   },
   "NORTH-10132346-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הכרזת חיזבאללה על סיוע כספי לשיקום דיור",
    "score": 0.65
   },
   "NORTH-10132346-05": {
    "kind": "new"
   },
   "NORTH-10132346-06": {
    "kind": "new"
   },
   "NORTH-10132346-07": {
    "kind": "new"
   },
   "NORTH-10132346-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "קריאת טורקיה באו\"ם להפסקת התקיפות הישראליות בסוריה",
    "score": 1.0
   },
   "NORTH-10132346-09": {
    "kind": "possible",
    "prev": "פשיטות ומעצרים של כוחות ישראליים בדרום סוריה",
    "score": 0.467
   }
  }
 }
};
