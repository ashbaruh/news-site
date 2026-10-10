/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-10T1556__yemen-202610101556.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-10T15:56:49+00:00",
   "window": {
    "from": "2026-10-09T15:56:49+00:00",
    "to": "2026-10-10T15:56:49+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610101556"
   },
   "summary": "הלחימה בין ממשלת תימן והקואליציה לבין החות'ים הסלימה לעימות רחב היקף הכולל קרבות קרקעיים ואוויריים. כוחות הממשלה פתחו במתקפה לכיבוש חופי ים סוף ומצר באב אל-מנדב בסיוע הפצצות של הקואליציה, בעוד החות'ים מרחיבים את ירי הטילים לעבר נמל התעופה של ריאד. הפגיעות והאיומים על נתיבי התעופה בסעודיה הובילו לביטולי טיסות בינלאומיות ולהגברת הכוננות באזור.",
   "fronts": [
    {
     "name": "מצר באב אל-מנדב ומישור החוף המערבי בתימן",
     "status": "קרבות עזים במסגרת מתקפת נגד של כוחות הממשלה הנתמכים בסיוע אווירי סעודי מול מערכי החות'ים"
    },
    {
     "name": "עומק שטח סעודיה (נמל התעופה בריאד)",
     "status": "תחת איום מתמיד של שיגורי טילים בליסטיים מצד החות'ים הגורמים לשיבושי טיסות ונפגעים"
    },
    {
     "name": "צנעא וצפון תימן",
     "status": "גל תקיפות אוויריות נרחב של מטוסי הקואליציה נגד מטרות צבאיות ותשתיות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10101556-01",
     "title": "תקיפות טילים של החות'ים על נמל התעופה הבינלאומי בריאד",
     "summary": "טילים ששיגרו החות'ים פגעו בנמל התעופה הבינלאומי בריאד, גרמו לנפגעים, בהם פצועים והרוגים, והובילו לפינוי נוסעים ולשיבושים בתנועת המטוסים.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T15:39:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T15:39:23+00:00",
     "last_update_at": "2026-10-10T15:54:12+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק, מידת הנזק לתשתיות השדה ואימות רשמי מלא של כלל התקיפות מטעם הרשויות בסעודיה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
       "published_at": "2026-10-10T15:54:12+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/kuwait-airways-cancels-flights-and-riyadh-embassies-warn-citizens-stay",
       "published_at": "2026-10-10T15:39:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131675",
       "published_at": "2026-10-10T15:31:02+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw33x4y8k82no?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-10T15:05:55+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21592133",
       "published_at": "2026-10-10T14:51:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131673",
       "published_at": "2026-10-10T14:47:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/major-saudi-conferences-proceed-despite-deadly-airport-attack",
       "published_at": "2026-10-10T14:39:14+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
       "published_at": "2026-10-10T13:45:14+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/sanaa-airport-hit-four-air-strikes-large-blast-heard-riyadh-airport",
       "published_at": "2026-10-10T13:19:13+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/riyadh-airport-sees-evacuations-yemeni-govt-advances-houthis",
       "published_at": "2026-10-10T08:27:25+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-says-three-killed-airport-yemen-war-expands",
       "published_at": "2026-10-09T19:59:02+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/flight-cancelled-saudi-capital-riyadh-over-houthi-attacks",
       "published_at": "2026-10-09T17:59:25+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131638",
       "published_at": "2026-10-09T15:39:23+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10101556-02",
     "title": "מתקפת נגד של כוחות ממשלת תימן באזור מצר באב אל-מנדב",
     "summary": "כוחות הממשלה המוכרת בתימן, בגיבוי אווירי סעודי, פתחו במבצע צבאי לכיבוש מחדש של שטחים לאורך החוף ומצר באב אל-מנדב מידי החות'ים.",
     "axis": "פנים-תימן / ים סוף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T16:32:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:32:34+00:00",
     "last_update_at": "2026-10-10T15:54:12+00:00",
     "what_is_not_verified": "שליטה מלאה במצר או באי מיון, וכן טענות סותרות לגבי בלימת המתקפה בידי החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_a400121de4eb22f2",
       "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
       "published_at": "2026-10-10T15:54:12+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_a400121de4eb22f2",
       "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
       "published_at": "2026-10-10T13:45:14+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_a400121de4eb22f2",
       "url": "https://www.newarab.com/news/yemen-govt-say-advancing-against-houthis-around-bab-al-mandeb",
       "published_at": "2026-10-10T11:40:28+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_a400121de4eb22f2",
       "url": "https://www.sabanew.net/viewstory/153749",
       "published_at": "2026-10-10T11:08:08+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_1f00f04371e8a6ca",
       "url": "https://www.sabanew.net/viewstory/153748",
       "published_at": "2026-10-10T09:28:30+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ea51d8bdb5867e80",
       "url": "https://www.sabanew.net/viewstory/153746",
       "published_at": "2026-10-10T09:25:29+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_a400121de4eb22f2",
       "url": "https://www.newarab.com/news/riyadh-airport-sees-evacuations-yemeni-govt-advances-houthis",
       "published_at": "2026-10-10T08:27:25+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_a400121de4eb22f2",
       "url": "https://www.newarab.com/news/yemen-govt-forces-launch-operation-retake-bab-al-mandab",
       "published_at": "2026-10-09T16:32:34+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      },
      {
       "name": "האי מיון, תימן",
       "lat": 12.6518,
       "lon": 43.4278
      },
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-10101556-03",
     "title": "תקיפות אוויריות נרחבות של הקואליציה בצנעא ובאזורים שבשליטת החות'ים",
     "summary": "מטוסי קרב ביצעו תקיפות על יעדים שונים, בהם נמל התעופה הבינלאומי של צנעא, מתקני תקשורת בעיר אל-מוחאבשה ועשרות מטרות צבאיות נוספות.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T19:59:02+00:00",
     "last_update_at": "2026-10-10T13:19:13+00:00",
     "what_is_not_verified": "מספר האבדות המדויק ורשימת האתרים המלאה שנפגעה מעבר להצהרות הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2804498458c780f1",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/sanaa-airport-hit-four-air-strikes-large-blast-heard-riyadh-airport",
       "published_at": "2026-10-10T13:19:13+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_2804498458c780f1",
       "url": "https://www.newarab.com/news/riyadh-airport-sees-evacuations-yemeni-govt-advances-houthis",
       "published_at": "2026-10-10T08:27:25+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_2804498458c780f1",
       "url": "https://www.sabanew.net/viewstory/153738",
       "published_at": "2026-10-09T21:14:04+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_2804498458c780f1",
       "url": "https://www.newarab.com/news/saudi-arabia-says-three-killed-airport-yemen-war-expands",
       "published_at": "2026-10-09T19:59:02+00:00"
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
     "id": "YEMEN-10101556-04",
     "title": "הגשת תלונה לאו\"ם בעקבות פגיעה בנמל התעופה בעדן",
     "summary": "ממשלת תימן שיגרה איגרת רשמית לאומות המאוחדות ולמועצת הביטחון בעניין תקיפת נמל התעופה הבינלאומי בעדן על ידי החות'ים.",
     "axis": "פנים-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T09:26:54+00:00",
     "last_update_at": "2026-10-10T09:26:54+00:00",
     "what_is_not_verified": "פרטי הפגיעה והנזקים המדויקים בנמל התעופה בעדן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_000f39892bad82ac",
       "url": "https://www.sabanew.net/viewstory/153747",
       "published_at": "2026-10-10T09:26:54+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    }
   ],
   "not_verified": [
    "טענת שגריר סעודיה כי מצר באב אל-מנדב שוחרר לחלוטין",
    "מספר הנפגעים וההרוגים הכולל בשדה התעופה בריאד",
    "הדיווחים על פגיעה ישירה והשבתה מלאה של המסלולים בנמל התעופה בריאד",
    "הטענה החות'ית על הדיפת כלל הכוחות המתקדמים מכיוון לחג'"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת יעדים בסעודיה בתגובה למבצעי הקואליציה והגבלת התנועה האווירית לריאד"
     ],
     "inferred": [
      "שימור השליטה בקו החוף ושיבוש התעופה האזרחית בסעודיה כדי ללחוץ לעצירת המתקפה"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר בירות וערי המפרץ במקביל למגננה לאורך החוף"
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה בהובלת סעודיה",
     "declared": [
      "שחרור מצר באב אל-מנדב והשבת השליטה בכל רחבי תימן עד צנעא"
     ],
     "inferred": [
      "מניעת שליטה עוינת במעברי השיט הבינלאומיים בים סוף והרחקת איום הטילים ממרכזי האוכלוסייה בסעודיה"
     ],
     "forecast": [
      "הגברת הלחץ הצבאי היבשתי באזור החוף לצד המשך תקיפות מטרות תשתית של החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cw33x4y8k82no?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21592133",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/sanaa-airport-hit-four-air-strikes-large-blast-heard-riyadh-airport",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-says-three-killed-airport-yemen-war-expands",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153747",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131638",
     "accessed_at": "2026-10-10T15:56:49+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T23:40:31+00:00",
  "changes": {
   "YEMEN-10101556-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות של הקואליציה על צנעא ונמל התעופה שלה",
    "score": 1.0
   },
   "YEMEN-10101556-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "קרבות על השליטה במצר באב אל-מנדב",
    "score": 1.0
   },
   "YEMEN-10101556-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מתקפה נרחבת של הקואליציה נגד מטרות צבאיות חות'יות",
    "score": 1.0
   },
   "YEMEN-10101556-04": {
    "kind": "possible",
    "prev": "מתקפות טילים וכטבמים חותיים על שדות תעופה בסעודיה ופגיעה בריאד",
    "score": 0.467
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-10T0619__iran-202610100619.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-10T06:19:31+00:00",
   "window": {
    "from": "2026-10-09T06:19:31+00:00",
    "to": "2026-10-10T06:19:31+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610100619"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בהסלמה צבאית וכלכלית סביב חופש השיט והסגר הימי במצר הורמוז. ארצות הברית מעמיקה את אכיפת הסנקציות ונערכת לאפשרויות תקיפה נוספות, בעוד גורמים איראניים ושלוחותיהם מגיבים בפעולות ימיות, תקיפות נגד יעדים בסעודיה ופעילות בגבול סוריה-לבנון. במקביל, טהראן מנסה לעקוף את המצור הכלכלי באמצעות הידוק קשרים יבשתיים וימיים עם מדינות מרכז אסיה ומשמיעה רטוריקה תקיפה נגד תכתיבים אמריקניים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "סגר ימי אמריקני פעיל עם הסטת אוניות, לצד תקיפות של משמרות המהפכה על כלי שיט"
    },
    {
     "name": "חצי האי ערב / תימן וסעודיה",
     "status": "תקיפות רקטות וכטב\"מים של החות'ים נגד נמלי תעופה בסעודיה"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "סיכולים ממוקדים ותקיפות אוויריות ישראליות נגד מפקדי טרור המופעלים בידי איראן"
    },
    {
     "name": "המערכה הכלכלית והבינלאומית",
     "status": "הרחבת סנקציות אמריקניות על תעופה וסחר, במקביל לניסיונות איראניים לפתוח נתיבי סחר חלופיים"
    }
   ],
   "events": [
    {
     "id": "IRAN-10100619-01",
     "title": "אכיפת סגר ימי אמריקני והפניית כלי שיט במצר הורמוז",
     "summary": "פיקוד המרכז של צבא ארצות הברית דיווח כי כוחותיו הפנו 133 כלי שיט מסחריים במצר הורמוז במסגרת אכיפת סגר ימי שהוגדר על ידו כברזל נגד איראן.",
     "axis": "ארה\"ב - איראן / מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T05:11:26+00:00",
     "last_update_at": "2026-10-10T05:11:26+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר להודעת צבא ארצות הברית בנוגע להיקף כלי השיט שהופנו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/centcom-says-133-vessels-redirected-hormuz-it-enforces-iran-blockade",
       "published_at": "2026-10-10T05:11:26+00:00"
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
     "id": "IRAN-10100619-02",
     "title": "מתקפת כטב\"מים וטילים של החות'ים על נמל התעופה בריאד",
     "summary": "החות'ים בתימן ביצעו תקיפה נגד נמל התעופה בבירת סעודיה ריאד, שהביאה למותם של שלושה אזרחים סעודים ולפציעת נוספים, מה שהוביל להרחבת אזהרות הטיסה של רשות התעופה האירופית.",
     "axis": "החות'ים - סעודיה / שלוחות איראן במפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T09:47:10+00:00",
     "last_update_at": "2026-10-09T14:46:31+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/eu-aviation-body-widens-saudi-airspace-warning-after-houthi-strikes",
       "published_at": "2026-10-09T14:46:31+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmz7xe37g5wro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-09T13:50:25+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
       "published_at": "2026-10-09T09:47:10+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "IRAN-10100619-03",
     "title": "תקיפה אווירית ישראלית נגד פעיל טרור סורי בגבול סוריה-לבנון",
     "summary": "כוחות חיל האוויר הישראלי ביצעו תקיפה באזור חוש א-סייד עלי נגד מחבל סורי שפעל בהכוונת איראן והיה מעורב בשיגורי רחפנים ורקטות לעבר כוחות צה\"ל.",
     "axis": "ישראל - שלוחות איראן בסוריה ולבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:04:55+00:00",
     "last_update_at": "2026-10-09T18:37:29+00:00",
     "what_is_not_verified": "תוצאות התקיפה ומצב היעד יוסף עלי אלחסון אינם מאומתים שכן צה\"ל לא אישר אם הוא חוסל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rys6hsisgl",
       "published_at": "2026-10-09T18:37:29+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25325",
       "published_at": "2026-10-09T18:04:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10100619-04",
     "title": "תקיפת כלי שיט במצר הורמוז בידי הצי של משמרות המהפכה",
     "summary": "הצי של משמרות המהפכה האיראניים תקף שתי ספינות במצר הורמוז, כאשר אחת מהן עלתה באש.",
     "axis": "איראן - מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T13:00:06+00:00",
     "last_update_at": "2026-10-09T13:00:06+00:00",
     "what_is_not_verified": "שמות הספינות, זהותן והיקף הנזק המדויק אינם מאומתים ממקורות רשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94566",
       "published_at": "2026-10-09T13:00:06+00:00"
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
     "id": "IRAN-10100619-05",
     "title": "התרחבות הסנקציות הכלכליות של ארצות הברית נגד קווי האספקה האיראניים",
     "summary": "שר האוצר האמריקני הודיע על הרחבת העיצומים הכלכליים כנגד איראן במטרה לחסום נתיבי סחר יבשתיים, שימוש במטבעות מבוזרים ותעופה וספנות שנותרו פעילים.",
     "axis": "ארה\"ב - איראן / סנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T21:00:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T21:00:06+00:00",
     "last_update_at": "2026-10-10T02:11:19+00:00",
     "what_is_not_verified": "היקף ההחרגות שניתנו בפועל לטיסות איראניות בעיראק אינו ברור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610106673",
       "published_at": "2026-10-10T02:11:19+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/iranian-airlines-expand-trips-to-iraq-despite-u-s-sanctions/",
       "published_at": "2026-10-09T21:00:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10100619-06",
     "title": "הסכם אספקת דלקים בין ארצות הברית לרוסיה על רקע המתיחות במצר הורמוז",
     "summary": "נשיא ארצות הברית דונלד טראמפ הודיע כי סיכם עם נשיא רוסיה ולדימיר פוטין על הזרמת מיליוני טונות של סולר לשוק העולמי כדי להוריד מחירים, לצד הדגשה שאיראן לא תשיג נשק גרעיני.",
     "axis": "ארה\"ב - רוסיה / אנרגיה וגרעין איראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:52:03+00:00",
     "last_update_at": "2026-10-09T18:52:03+00:00",
     "what_is_not_verified": "פרטי מימוש עסקת הסולר בבתי הזיקוק ברוסיה אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131645",
       "published_at": "2026-10-09T18:52:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10100619-07",
     "title": "הצעת פזשכיאן לחיבור אזורי ודחיית משא ומתן תחת כפייה",
     "summary": "נשיא איראן מסעוד פזשכיאן גינה בפסגה בטורקמניסטן את תקיפות ארצות הברית וישראל, הציע מסדרון סחר אזורי דרך נמלי איראן והבהיר כי ארצו לא תנהל משא ומתן תחת כוח.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T05:43:02+00:00",
     "last_update_at": "2026-10-10T05:43:02+00:00",
     "what_is_not_verified": "לא אומתו תגובות שאר המדינות החברות להצעת הגוש החדש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-pitches-cis-iran-bloc-turkmenistan-summit",
       "published_at": "2026-10-10T05:43:02+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'אהבהאר, איראן",
       "lat": 25.2935,
       "lon": 60.6469
      }
     ]
    },
    {
     "id": "IRAN-10100619-08",
     "title": "התרעת ביטחון אמריקנית בבריטניה מפני כוונה איראנית לפגוע במפציצים",
     "summary": "מפציצים אמריקניים מסוג בי-1 פונו במהירות מבסיס חיל האוויר המלכותי פיירפורד בבריטניה בעקבות אזהרות מפני מזימה איראנית אפשרית לפגוע בהם.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T18:28:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:28:40+00:00",
     "last_update_at": "2026-10-09T18:28:40+00:00",
     "what_is_not_verified": "פרטי המזימה האיראנית החשודה ורמת אמינותה לא אומתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_france24",
       "url": "https://www.france24.com/en/tv-shows/the-world-this-week/20261009-france-protests-israel-s-politically-charged-remembrance-ethopia-ukraine",
       "published_at": "2026-10-09T18:28:40+00:00"
      }
     ],
     "places": [
      {
       "name": "פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על חיסולו של יוסף עלי אלחסון בתקיפה בלבנון",
    "היקף ההחרגה האמריקנית המדויק לטיסות איראניות לנמל התעופה בנג'ף",
    "פרטי הדיווח על פגיעה בשתי ספינות במצר הורמוז ושריפת אחת מהן",
    "דיווחים על התחייבות אמריקנית שלא לתקוף באיראן לפני בחירות האמצע",
    "מידת ההתקדמות הממשית בתוכניות המבצעיות של הפנטגון לתקיפה בת שלושה ימים"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני בידי איראן",
      "אכיפת סגר ימי מוחלט במצר הורמוז",
      "חסימת כלל עורקי הנשימה הכלכליים, התעופתיים והימיים של איראן"
     ],
     "inferred": [
      "הפעלת לחץ מרבי כדי לאלץ את טהראן להגיע להסכם בתנאים אמריקניים",
      "הימנעות מהסתבכות במלחמה כוללת לפני מועד בחירות האמצע"
     ],
     "forecast": [
      "המשך פעולות אכיפה ימיות קפדניות במצר הורמוז",
      "החרפת האכיפה הכלכלית נגד מדינות המאפשרות טיסות ומסחר איראני"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "סירוב לנהל משא ומתן תחת לחץ או כפייה צבאית",
      "דרישה ליחס מכבד מצד הממשל האמריקני",
      "הפיכת נמלי המדינה לציר סחר ימי מרכזי עבור מדינות מרכז אסיה"
     ],
     "inferred": [
      "ניסיון להרתיע את כוחות ארצות הברית באמצעות שיבוש תנועת ספינות והפעלת שלוחות",
      "שבירת הבידוד הכלכלי באמצעות בריתות אזוריות עם מדינות אסיה"
     ],
     "forecast": [
      "המשך הטרדות ימיות ופעילות בלתי ישירה באמצעות שלוחות באזור",
      "האצת יוזמות דיפלומטיות וכלכליות מול מדינות האזור ורוסיה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול איומים ממוקדים ופגיעה בפעילי טרור הפועלים בהכוונת איראן",
      "שמירה על מחויבות להסכמים תוך נטרול איומים מעבר לגבול"
     ],
     "inferred": [
      "מניעת התבססות של מערכי רחפנים ורקטות של שלוחות איראן סמוך לגבולותיה",
      "המשך גביית מחיר ישיר מרשתות הטרור האיראניות בסוריה ובלבנון"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות נגד מטרות ופעילים איראניים בזירה הצפונית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/eu-aviation-body-widens-saudi-airspace-warning-after-houthi-strikes",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmz7xe37g5wro?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/iranian-airlines-expand-trips-to-iraq-despite-u-s-sanctions/",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/tv-shows/the-world-this-week/20261009-france-protests-israel-s-politically-charged-remembrance-ethopia-ukraine",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610106673",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-pitches-cis-iran-bloc-turkmenistan-summit",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131645",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25325",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94566",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rys6hsisgl",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T17:10:07+00:00",
  "changes": {
   "IRAN-10100619-01": {
    "kind": "new"
   },
   "IRAN-10100619-02": {
    "kind": "new"
   },
   "IRAN-10100619-03": {
    "kind": "new"
   },
   "IRAN-10100619-04": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "אזהרות ותקיפת כלי שיט בידי חיל הים של משמרות המהפכה במצר הורמוז",
    "score": 1.0
   },
   "IRAN-10100619-05": {
    "kind": "possible",
    "prev": "בחינת צירי מימון איראניים לארגון חזבאללה תחת לחץ הסנקציות",
    "score": 0.467
   },
   "IRAN-10100619-06": {
    "kind": "new"
   },
   "IRAN-10100619-07": {
    "kind": "new"
   },
   "IRAN-10100619-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-10T0620__ukraine-202610100620.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-10T06:20:34+00:00",
   "window": {
    "from": "2026-10-09T06:20:34+00:00",
    "to": "2026-10-10T06:20:34+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "ukraine-202610100620"
   },
   "summary": "הלחימה בין צבא רוסיה לצבא אוקראינה נמשכת בעצימות גבוהה לאורך קו החזית, לצד חילופי מהלומות עמוקים שכוללים תקיפות פצצות דואות רוסיות על מבנים אזרחיים ומבצעי כטב\"מים אוקראיניים נגד תשתיות נפט ושרתים ברוסיה. במישור הבינלאומי חלה תפנית משמעותית עם הסכמת ארצות הברית לרכוש סולר מרוסיה ולהקל בעיצומים, מהלך שעורר זעם חריף בקייב והוביל למבוי סתום בשיחות התיווך שהסתיימו טרם זמנן. רוסיה ממשיכה לטעון כי היוזמה המבצעית בידיה ומסרבת לחידוש המשא ומתן, בעוד אוקראינה נערכת לפגיעות ממושכות בתשתיות האנרגיה שלה לקראת החורף.",
   "fronts": [
    {
     "name": "ציר פוקרובסק",
     "status": "לחימה עצימה וריכוז התקפות רוסיות גבוה"
    },
    {
     "name": "חזית זפוריז'יה",
     "status": "תקיפות אוויריות רוסיות באמצעות פצצות דואות לעבר ריכוזי אוכלוסייה"
    },
    {
     "name": "עורף רוסיה (רוסטוב, קלוגה, ריאזאן)",
     "status": "פגיעות כטב\"מים אוקראיניים בבתי זיקוק, מסופי נפט ומרכזי נתונים"
    },
    {
     "name": "עורף אוקראינה (קייב)",
     "status": "איומי כטב\"מים ופגיעות שברי יירוט במבנים וכלי רכב"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10100620-01",
     "title": "הסכם אספקת סולר מרוסיה והקלת סנקציות אמריקאיות",
     "summary": "נשיא ארצות הברית הכריז על הסכם לאספקת מיליוני טונות סולר מרוסיה לשוק האמריקאי והעולמי לאחר שיחה עם נשיא רוסיה, ומשרד האוצר האמריקאי הנפיק רישיון זמני המאפשר עסקאות אלו.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T18:52:03+00:00",
     "last_update_at": "2026-10-10T06:16:51+00:00",
     "what_is_not_verified": "כמות הדלק המדויקת שתוכל רוסיה לספק בפועל בהתאם למצב בתי הזיקוק שלה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1375456",
       "published_at": "2026-10-10T06:16:51+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/australia-news/2026/oct/10/australia-fuel-chris-bowen-trump-us-russia-diesel-deal-putin",
       "published_at": "2026-10-10T05:01:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-war-briefing-trumps-russian-diesel-deal-derided-as-weak-and-a-betrayal-of-ukraine-and-us-national-security",
       "published_at": "2026-10-10T01:31:13+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48409",
       "published_at": "2026-10-10T01:12:06+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
       "published_at": "2026-10-10T00:29:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/10/we-re-being-used-as-a-front-zelensky-says-of-trump-s-diesel-deal-with-putin",
       "published_at": "2026-10-10T00:02:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590296",
       "published_at": "2026-10-09T23:56:31+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/09/trump-putin-russian-diesel-ukraine",
       "published_at": "2026-10-09T23:39:31+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkioihiizg",
       "published_at": "2026-10-09T21:20:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590071",
       "published_at": "2026-10-09T19:58:50+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/09/trump-says-he-reached-a-deal-with-putin-to-supply-russian-diesel-to-u-s-and-global-markets-breaking-with-years-of-american-sanctions-policy",
       "published_at": "2026-10-09T19:32:27+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/trump-says-russia-agreed-to-supply-millions-of-tons-of-diesel-to-us-global-markets/",
       "published_at": "2026-10-09T18:53:55+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131645",
       "published_at": "2026-10-09T18:52:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10100620-02",
     "title": "ביקורת חריפה של אוקראינה על עסקת הדלק האמריקאית-רוסית",
     "summary": "נשיא אוקראינה מתח ביקורת תקיפה על החלטת ארצות הברית להקל בסנקציות על סולר רוסי, וטען כי המשלחת האוקראינית לשיחות שימשה ככיסוי בלבד לעסקה שנעשתה מאחורי גבה.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T19:32:27+00:00",
     "last_update_at": "2026-10-10T01:31:13+00:00",
     "what_is_not_verified": "האם המשלחת האוקראינית אכן לא קיבלה כל רמז מוקדם על המגעים לפני ההודעה הרשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-war-briefing-trumps-russian-diesel-deal-derided-as-weak-and-a-betrayal-of-ukraine-and-us-national-security",
       "published_at": "2026-10-10T01:31:13+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
       "published_at": "2026-10-10T00:29:00+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590296",
       "published_at": "2026-10-09T23:56:31+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/09/trump-putin-russian-diesel-ukraine",
       "published_at": "2026-10-09T23:39:31+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057299/",
       "published_at": "2026-10-09T23:32:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/09/trump-says-he-reached-a-deal-with-putin-to-supply-russian-diesel-to-u-s-and-global-markets-breaking-with-years-of-american-sanctions-policy",
       "published_at": "2026-10-09T19:32:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10100620-03",
     "title": "סיום מוקדם של שיחות בין נציגי ארה\"ב, אוקראינה ואירופה במיאמי",
     "summary": "מפגש משלחות מארצות הברית, אוקראינה ומדינות אירופה שנועד לבחון דרכים להפחתת הסלמה ולסיום המלחמה הסתיים מוקדם מן הצפוי.",
     "axis": "משא ומתן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T01:31:13+00:00",
     "last_update_at": "2026-10-10T03:00:00+00:00",
     "what_is_not_verified": "פרטי ההצעות החדשות של השליחים האמריקאים שהוצגו במהלך השיחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057305/",
       "published_at": "2026-10-10T03:00:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2200205",
       "published_at": "2026-10-10T02:12:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-ukrainian-european-officials-discuss-ending-russias-war-at-miami-meeting/",
       "published_at": "2026-10-10T01:50:28+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-war-briefing-trumps-russian-diesel-deal-derided-as-weak-and-a-betrayal-of-ukraine-and-us-national-security",
       "published_at": "2026-10-10T01:31:13+00:00"
      }
     ],
     "places": [
      {
       "name": "מיאמי, ארצות הברית",
       "lat": 25.7742,
       "lon": -80.1936
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-04",
     "title": "שיחת טלפון ממושכת בין נשיאי רוסיה וארצות הברית",
     "summary": "הקרמלין דיווח על שיחה בין ולדימיר פוטין לדונלד טראמפ שבה נדון המשך המערכה, ורוסיה הבהירה כי יעדיה נותרו ללא שינוי וכי היא דוחה שיחות שלום בעת הנוכחית.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T21:41:53+00:00",
     "last_update_at": "2026-10-10T03:29:33+00:00",
     "what_is_not_verified": "האם הצדדים דנו במוכנות להסדר מדיני או שמא נדחתה אפשרות זו לחלוטין, בשל דיווחים סותרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2200209",
       "published_at": "2026-10-10T03:29:33+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057298/",
       "published_at": "2026-10-09T22:15:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48405",
       "published_at": "2026-10-09T21:41:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10100620-05",
     "title": "תקיפת פצצות דואות על בניין מגורים בזפוריז'יה",
     "summary": "פצצות אוויריות מונחות פגעו במבנה מגורים רב-קומות בעיר זפוריז'יה, גרמו להרוגים ולפצועים, בהם ילדים, ולנזק כבד.",
     "axis": "החזית הדרומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T04:41:00+00:00",
     "last_update_at": "2026-10-10T05:59:00+00:00",
     "what_is_not_verified": "מספר הנפגעים הסופי המדויק ומספר הלכודים תחת ההריסות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172894-glide-bomb-strike-on-zaporizhzhia-death-toll-rises-to-four-11-injured.html",
       "published_at": "2026-10-10T05:59:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-guided-bombs-hit-zaporizhzhia-apartment-building-killing-4-injuring-4/",
       "published_at": "2026-10-10T04:55:22+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172880-russia-attacks-zaporizhzhia-with-glide-bombs-at-least-two-killed-others-injured.html",
       "published_at": "2026-10-10T04:41:00+00:00"
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
     "id": "UKRAINE-10100620-06",
     "title": "המשך קרבות עצימים לאורך קו המגע",
     "summary": "כוחות ההגנה של אוקראינה ניהלו 218 היתקלויות קרביות מול הכוחות הרוסיים ביממה אחת, כאשר המוקד המרכזי של ההתקפות נרשם בציר פוקרובסק.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T05:39:00+00:00",
     "last_update_at": "2026-10-10T05:39:00+00:00",
     "what_is_not_verified": "לא מאומת מעבר להודעת כוחות ההגנה של אוקראינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172891-war-update-218-combat-engagements-on-front-line-in-over-past-day-most-on-pokrovsk-axis.html",
       "published_at": "2026-10-10T05:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פוקרובסק, אוקראינה",
       "lat": 48.2771,
       "lon": 37.1772
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-07",
     "title": "תקיפות כטב\"מים אוקראיניים על יעדי אנרגיה ומבנים במחוז רוסטוב",
     "summary": "כטב\"מים פגעו במתקני נפט ובתי זיקוק במחוז רוסטוב ברוסיה, וגרמו לשריפה במסוף נפט ולפגיעה במבנה מגורים ברוסטוב על הדון.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T00:15:47+00:00",
     "last_update_at": "2026-10-10T03:59:57+00:00",
     "what_is_not_verified": "מה בדיוק פגע בבניין המגורים ברוסטוב על הדון על רקע פעילות ההגנה האווירית הרוסית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48410",
       "published_at": "2026-10-10T03:59:57+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/major-fire-reported-at-oil-terminal-linked-to-russias-novoshakhtinsk-refinery-after-suspected-drone-strike/",
       "published_at": "2026-10-10T03:22:53+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
       "published_at": "2026-10-10T00:29:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48406",
       "published_at": "2026-10-10T00:15:47+00:00"
      }
     ],
     "places": [
      {
       "name": "נובושאחטינסק, רוסיה",
       "lat": 47.7963,
       "lon": 39.8936
      },
      {
       "name": "רוסטוב על הדון, רוסיה",
       "lat": 47.261,
       "lon": 39.7249
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-08",
     "title": "מתקפות כטב\"מים אוקראיניות על מרכזי נתונים ברוסיה",
     "summary": "מרכזי נתונים של חברת הטכנולוגיה יאנדקס במחוזות קלוגה וריאזאן הותקפו באמצעות כטב\"מים יומיים ברציפות, דבר שהביא להשבתת מערכות ולשיבושים בשירותים דיגיטליים נרחבים.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T17:14:44+00:00",
     "last_update_at": "2026-10-09T18:14:02+00:00",
     "what_is_not_verified": "היקף הנזק התשתיתי המלא מעבר להודעות החברה והמושל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/09/ukraine-strikes-russian-tech-giant-yandex-s-data-centers-for-a-second-straight-day-as-new-peace-talks-involving-ukraine-the-u-s-and-europe-get-underway-in-miami",
       "published_at": "2026-10-09T18:14:02+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c68xzqqn4ekro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-09T17:14:44+00:00"
      }
     ],
     "places": [
      {
       "name": "קלוגה, רוסיה",
       "lat": 54.5101,
       "lon": 36.2598
      },
      {
       "name": "סאסובו, רוסיה",
       "lat": 54.3448,
       "lon": 41.9215
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-09",
     "title": "שיבושים בטיסות ממשל במוסקבה בעקבות איום כטב\"מים",
     "summary": "מטוסי טייסת מיוחדת המשמשת את הנהגת רוסיה נאלצו להסתובב באוויר או לשנות נתיב בעקבות הגבלות תעופה שהוטלו בנמלי התעופה במוסקבה עקב התרעות כטב\"מים.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:56:00+00:00",
     "last_update_at": "2026-10-09T18:56:00+00:00",
     "what_is_not_verified": "באיזה מטוס בדיוק שהה הנשיא פוטין בעת שובו מטורקמניסטן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_flightradar24",
       "url": "https://meduza.io/en/news/2026/10/09/ukrainian-drone-alert-disrupts-russian-government-flights-returning-from-putin-s-turkmenistan-trip",
       "published_at": "2026-10-09T18:56:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-10",
     "title": "נפילת שברי כטב\"ם באזור קייב",
     "summary": "שברי כטב\"ם נפלו בסמוך למרכז עסקים במחוז דניפרובסקי בקייב וגרמו להצתת כלי רכב, לצד דיווחים על בריחת אזרחים מפגיעות כטב\"מים.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T11:55:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T11:55:29+00:00",
     "last_update_at": "2026-10-10T04:17:00+00:00",
     "what_is_not_verified": "לא מאומת האם השברים היו כתוצאה מיירוט או מפגיעה ישירה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172879-drone-debris-falls-near-business-center-in-kyiv-car-catches-fire.html",
       "published_at": "2026-10-10T04:17:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131629",
       "published_at": "2026-10-09T11:55:29+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-11",
     "title": "מעצר בלוגר צבאי רוסי במונטנגרו",
     "summary": "מייסד ערוץ הטלגרם הצבאי ריבר, מיכאיל זווינצ'וק, נעצר עם אשתו ואזרחים רוסים נוספים בעיירה ריסאן בחשד להפצת השפעה רוסית וניסיונות לערעור היציבות.",
     "axis": "בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T16:10:25+00:00",
     "last_update_at": "2026-10-09T16:10:25+00:00",
     "what_is_not_verified": "לא מאומת טיב הקשרים המיוחסים לו לשירותי המודיעין הרוסיים מעבר לטענות הרשויות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/09/russian-military-blogger-mikhail-zvinchuk-rybar-arrested-montenegro",
       "published_at": "2026-10-09T16:10:25+00:00"
      }
     ],
     "places": [
      {
       "name": "ריסאן, מונטנגרו",
       "lat": 42.515,
       "lon": 18.6956
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-12",
     "title": "החזרת שגריר קוריאה הדרומית מאוקראינה",
     "summary": "משרד החוץ של קוריאה הדרומית הודיע על החלטה להחזיר את שגריר המדינה מאוקראינה, והשגריר עזב את המדינה.",
     "axis": "דיפלומטיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T04:46:17+00:00",
     "last_update_at": "2026-10-10T04:46:17+00:00",
     "what_is_not_verified": "הסיבה המדויקת להחלטת ממשלת קוריאה הדרומית על החזרת השגריר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2200213",
       "published_at": "2026-10-10T04:46:17+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "באיזה מטוס שהה פוטין בעת הטלת מגבלות התעופה במוסקבה",
    "מה פגע בבניין המגורים ברוסטוב על הדון (כטב\"ם או מיירט)",
    "מספר הלכודים המדויק תחת ההריסות בזפוריז'יה",
    "הסיבה הרשמית להחזרת שגריר קוריאה הדרומית מקייב",
    "האם רוסיה מוכנה להסדר מדיני או דוחה שיחות לחלוטין (קיימות טענות סותרות ברוסיה)",
    "היקף הנזק וההשבתה המדויק במתקני האנרגיה ברוסטוב",
    "האם המשלחת האוקראינית לא ידעה כלל על השיחות בין טראמפ לפוטין קודם לפרסומן"
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
     "value": 1.1206,
     "unit": "USD",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הלחימה עד להשגת כל המטרות של המבצע הצבאי",
      "אספקת נפט ומוצרי דלק לשוק האמריקאי והעולמי",
      "תגובה לפגיעות אוקראיניות בתשתיות ובחירות"
     ],
     "inferred": [
      "הבקעת הסנקציות הבינלאומיות ושיקום היצוא האנרגטי באמצעות ערוצים ישירים עם ארצות הברית",
      "המשך שחיקת התשתיות והאוכלוסייה באוקראינה לקראת עונת החורף"
     ],
     "forecast": [
      "המשך הפעלת לחץ צבאי לאורך החזית המזרחית ודחיית כל יוזמה להפסקת אש בתנאים הנוכחיים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "המשך תקיפת בתי זיקוק ותשתיות אנרגיה בעומק רוסיה",
      "התנגדות מוחלטת להקלת סנקציות אנרגטיות ללא הפסקת אש תשתיתית",
      "המשך השתלבות באיחוד האירופי"
     ],
     "inferred": [
      "שימור הלחץ הכלכלי על רוסיה גם ללא גיבוי אמריקאי מלא",
      "הצגת ההסכמים בין ארצות הברית לרוסיה כבגידה באינטרסים המשותפים במטרה לגייס תמיכה בינלאומית חלופית"
     ],
     "forecast": [
      "החרפת התקיפות באמצעות כלי טיס בלתי מאוישים על עורף רוסיה והתבצרות בעמדות מדיניות נוקשות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הורדה מהירה של מחירי הסולר והדלק לאזרחים ולשוק העולמי",
      "קידום פתרון מהיר לסיום המלחמה לפני החורף",
      "בחינת הסדרי ביטחון עתידיים באירופה"
     ],
     "inferred": [
      "הקלת לחצי שוק האנרגיה הפנימיים על רקע עימותים בזירות אחרות ובחירות קרבות",
      "דחיקת אוקראינה להסכמות מדיניות על ידי פתיחת ערוץ ישיר מול מוסקבה"
     ],
     "forecast": [
      "הגברת המתיחות הדיפלומטית מול קייב ובעלות הברית באירופה סביב סוגיית הסנקציות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c68xzqqn4ekro?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/09/russian-military-blogger-mikhail-zvinchuk-rybar-arrested-montenegro",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590296",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/major-fire-reported-at-oil-terminal-linked-to-russias-novoshakhtinsk-refinery-after-suspected-drone-strike/",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1375456",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/09/ukrainian-drone-alert-disrupts-russian-government-flights-returning-from-putin-s-turkmenistan-trip",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2200213",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131629",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48406",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4172879-drone-debris-falls-near-business-center-in-kyiv-car-catches-fire.html",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bkioihiizg",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T17:17:29+00:00",
  "changes": {
   "UKRAINE-10100620-01": {
    "kind": "new"
   },
   "UKRAINE-10100620-02": {
    "kind": "new"
   },
   "UKRAINE-10100620-03": {
    "kind": "new"
   },
   "UKRAINE-10100620-04": {
    "kind": "new"
   },
   "UKRAINE-10100620-05": {
    "kind": "new"
   },
   "UKRAINE-10100620-06": {
    "kind": "new"
   },
   "UKRAINE-10100620-07": {
    "kind": "new"
   },
   "UKRAINE-10100620-08": {
    "kind": "new"
   },
   "UKRAINE-10100620-09": {
    "kind": "possible",
    "prev": "תקיפות אוקראיניות ושיבושים ברוסיה",
    "score": 0.633
   },
   "UKRAINE-10100620-10": {
    "kind": "new"
   },
   "UKRAINE-10100620-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מעצר אנשי תקשורת במונטנגרו ובאסטריה",
    "score": 0.817
   },
   "UKRAINE-10100620-12": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-10T1557__north-202610101557.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-10T15:57:51+00:00",
   "window": {
    "from": "2026-10-09T15:57:51+00:00",
    "to": "2026-10-10T15:57:51+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610101557"
   },
   "summary": "בגזרה הצפונית נמשכת לחימה בעצימות מבוקרת, הכוללת תקיפות אוויריות וארטילריות של צה\"ל בדרום לבנון לצד שיגור מיירטים לעבר מטרות חשודות. בגבול לבנון-סוריה פועל צה\"ל לסיכול התארגנויות טרור הפועלות בהכוונה איראנית. במקביל מתנהלים מהלכים מדיניים להסדרת התעופה האזרחית בלבנון והתניית שיקום הדרום בפירוק חיזבאללה מנשקו.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות מבצעית הכוללת תקיפות אוויריות, ירי ארטילרי, שיגורי מיירטים ותקריות בטיחות של כוחות פרוסים"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "סיכולים אוויריים ישראליים נגד פעילים המכוונים על ידי איראן וסיכול הברחות אמצעי לחימה"
    },
    {
     "name": "הזירה המדינית-כלכלית בלבנון ובסוריה",
     "status": "מגעים דיפלומטיים מול ארצות הברית להסרת מגבלות טיסה ולשיקום, לצד התניות לפירוק חיזבאללה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10101557-01",
     "title": "שיגור מיירט לעבר מטרה אווירית חשודה בדרום לבנון",
     "summary": "מיירט שוגר לעבר מטרה אווירית חשודה שזוהתה במרחב פעילות כוחות צה\"ל בדרום לבנון. לא הופעלו התרעות על פי מדיניות ותוצאות היירוט נבדקות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T14:50:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T14:50:18+00:00",
     "last_update_at": "2026-10-10T14:54:56+00:00",
     "what_is_not_verified": "תוצאות היירוט טרם אומתו ונמצאות בבדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1375555",
       "published_at": "2026-10-10T14:54:56+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131674",
       "published_at": "2026-10-10T14:51:36+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25326",
       "published_at": "2026-10-10T14:50:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10101557-02",
     "title": "תקיפות אוויריות והפגזות צה\"ל במספר יעדים בדרום לבנון",
     "summary": "כלי טיס וארטילריה של צה\"ל תקפו מספר מוקדים בדרום לבנון, בהם טלוסה שבמחוז מרג'עיון, ואדי אל-חוג'יר, אזור נבטיה אל-פוקא, כפר תבנית, ואזורים סביב חדאת'א, ברעשית ואל-מנצורי.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T06:16:15+00:00",
     "last_update_at": "2026-10-10T14:57:18+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק בעיירה טלוסה ובמוקדים הנוספים אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-strike-southern-lebanons-marjayoun-district",
       "published_at": "2026-10-10T14:57:18+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/eight-palestinians-killed-israeli-attacks-gaza-during-anniversary-us",
       "published_at": "2026-10-10T12:55:35+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-continues-strikes-in-southern-lebanon-in-violation-of-framework-deal/4084382",
       "published_at": "2026-10-10T11:06:56+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/136577/",
       "published_at": "2026-10-10T07:22:33+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/136567/",
       "published_at": "2026-10-10T06:16:15+00:00"
      }
     ],
     "places": [
      {
       "name": "מרג'עיון, לבנון",
       "lat": 33.3593,
       "lon": 35.5902
      },
      {
       "name": "ואדי אל-חוג'יר, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-10101557-03",
     "title": "סיכול מחבל סורי בהכוונת איראן בגבול לבנון-סוריה",
     "summary": "צה\"ל תקף מהאוויר באזור גבול לבנון-סוריה את יוסף עלי אלחסון, מחבל שקידם מתווי טרור שכללו רחפני נפץ ורקטות בדרום סוריה בהכוונת איראן. משרד הבריאות הלבנוני דיווח על פציעת שישה אנשים בתקיפה ליד חוש א-סיד עלי.",
     "axis": "ישראל - סוריה / לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T17:26:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T17:26:46+00:00",
     "last_update_at": "2026-10-09T18:12:58+00:00",
     "what_is_not_verified": "קיימת סתירה בין דיווח רשתות לבנוניות שהטיל החטיא את הרכב ללא נפגעים לבין הודעת משרד הבריאות הלבנוני על שישה פצועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131643",
       "published_at": "2026-10-09T18:12:58+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25325",
       "published_at": "2026-10-09T18:04:55+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/136502/",
       "published_at": "2026-10-09T17:26:46+00:00"
      }
     ],
     "places": [
      {
       "name": "נפת הרמל, לבנון",
       "lat": 34.3896,
       "lon": 36.3035
      }
     ]
    },
    {
     "id": "NORTH-10101557-04",
     "title": "סיכול משלוח חומרי נפץ בדרכו מבעלבכ לרובע הדאחייה",
     "summary": "חומרי חבלה נתפסו בלבנון בטרם הגעתם לדאחייה בביירות. … ממרחב בעלבכ לבירה.",
     "axis": "לבנון (פנים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T14:36:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T14:36:37+00:00",
     "last_update_at": "2026-10-10T14:36:37+00:00",
     "what_is_not_verified": "זהות הבכיר שחיכה למשלוח ברובע הדאחייה אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21591975",
       "published_at": "2026-10-10T14:36:37+00:00"
      }
     ],
     "places": [
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      }
     ]
    },
    {
     "id": "NORTH-10101557-05",
     "title": "התהפכות רכב צבאי בדרום לבנון ונפילת קצין צה\"ל",
     "summary": "קצין הנדסה מצה\"ל נהרג ושלושה חיילים נוספים נפצעו כתוצאה מהתהפכות רכב צבאי מסוג האמר במרחב נהר הליטני בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T15:10:37+00:00",
     "last_update_at": "2026-10-10T15:35:12+00:00",
     "what_is_not_verified": "לא פורטו שמות הפצועים ונסיבות התאונה המדויקות מעבר להגדרתן כאירוע בטיחותי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/fatigue-carelessness-causing-casualties-among-israeli-forces",
       "published_at": "2026-10-10T15:35:12+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/local/article/21592180",
       "published_at": "2026-10-10T15:10:37+00:00"
      }
     ],
     "places": [
      {
       "name": "נהר הליטני, לבנון",
       "lat": 33.552,
       "lon": 35.6924
      }
     ]
    },
    {
     "id": "NORTH-10101557-06",
     "title": "ארצות הברית מסירה הגבלות טיסה ישירות ללבנון",
     "summary": "נשיא ארצות הברית דונלד טראמפ חתם על צו המבטל הגבלות תעופה ישירות ללבנון שהיו בתוקף מאז 1985. נשיא לבנון ג'וזף עון בירך על ההחלטה והדגיש את ביטחון נמל התעופה הבינלאומי בביירות.",
     "axis": "לבנון - ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T06:18:33+00:00",
     "last_update_at": "2026-10-10T15:44:48+00:00",
     "what_is_not_verified": "מועד חידוש הטיסות בפועל טרם צוין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-ends-decades-old-restrictions-direct-us-lebanon-flights",
       "published_at": "2026-10-10T15:44:48+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-welcomes-us-decision-to-lift-air-travel-restrictions/4084254",
       "published_at": "2026-10-10T08:17:59+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/962093/aoun-welcomes-trumps-decision-to-lift-restrictions-on-air-travel-with/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962093",
       "published_at": "2026-10-10T06:18:33+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי רפיק חרירי, ביירות, לבנון",
       "lat": 33.8185,
       "lon": 35.4909
      }
     ]
    },
    {
     "id": "NORTH-10101557-07",
     "title": "הצהרת ארצות הברית על התניית שיקום דרום לבנון בפירוק חיזבאללה מנשקו",
     "summary": "דובר מחלקת המדינה האמריקנית הודיע כי סיוע במיליארדי דולרים לשיקום דרום לבנון יותנה בפירוק חיזבאללה מנשקו והפסקת הפרעתו לממשלת לבנון, וטען כי כספים איראניים אינם מועברים לארגון דרך ביירות, עיראק או טורקיה.",
     "axis": "ארצות הברית - לבנון / חיזבאללה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T14:08:20+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T14:08:20+00:00",
     "last_update_at": "2026-10-09T15:57:51+00:00",
     "what_is_not_verified": "היקף הסכומים המדויק שנבחן מול מדינות המפרץ ואירופה אינו מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_8c2609c611d5cb0a",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962043/us-on-hezbollah-funding-and-lebanons-reconstruction-what-did-tommy-pig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962043",
       "published_at": "2026-10-09T14:08:20+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל ביירות, לבנון",
       "lat": 33.9008,
       "lon": 35.5022
      }
     ]
    },
    {
     "id": "NORTH-10101557-08",
     "title": "פגישת שר החוץ הסורי עם השליח האמריקני באיסטנבול",
     "summary": "שר החוץ הסורי אסעד א-שיבאני נפגש באיסטנבול עם השליח האמריקני תומאס באראק לדיון ביחסים בילטרליים, בהתפתחויות אזוריות ובהתאוששות כלכלית.",
     "axis": "סוריה - ארצות הברית / טורקיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T16:51:34+00:00",
     "last_update_at": "2026-10-09T16:51:34+00:00",
     "what_is_not_verified": "פרטי הסיכומים הכלכליים בין הצדדים לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/who-owns-the-istanbul-hotel-hosting-al-shaibani-and-barrack/",
       "published_at": "2026-10-09T16:51:34+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    }
   ],
   "not_verified": [
    "תוצאות היירוט שביצע צה\"ל בדרום לבנון",
    "מספר הנפגעים המדויק בתקיפה באזור חוש א-סיד עלי בנפת הרמל (דיווח על החטאה ללא נפגעים מול דיווח על שישה פצועים)",
    "זהות הבכיר בדאחייה שלו יועד משלוח חומרי הנפץ שנתפס",
    "הדיווחים שלפיהם הגנרל הסורי לשעבר בסאם אל-חסן שוהה בלבנון בחסות הסדר אמריקני-לבנוני"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים מיידיים בכל גזרה",
      "מחויבות להסכם בין ישראל ללבנון"
     ],
     "inferred": [
      "מניעת התבססות של תשתיות טרור בהכוונה איראנית בגבולות סוריה ולבנון",
      "שמירה על חופש פעולה אווירי והגנה על כוחות פרוסים בדרום לבנון"
     ],
     "forecast": [
      "המשך סיכולים ממוקדים ותקיפות באזורי הגבול למניעת התעצמות והעברת אמצעי לחימה"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הסרת ההגבלות על תעופה ישירה ללבנון עקב עמידה בתקני בטיחות",
      "התניית סיוע במיליארדי דולרים לשיקום דרום לבנון בפירוק חיזבאללה מנשקו"
     ],
     "inferred": [
      "חיזוק מוסדות המדינה הלבנונית על חשבון השפעתו הצבאית והכלכלית של חיזבאללה",
      "קידום דיאלוג מדיני עם הממשל הסורי באיסטנבול להסדרים אזוריים"
     ],
     "forecast": [
      "הפעלת לחץ כלכלי ודיפלומטי גובר על לבנון ליישום פירוק חיזבאללה כתנאי להזרמת כספי שיקום"
     ]
    },
    {
     "actor": "לבנון (הנשיאות והממשלה)",
     "declared": [
      "מחויבות לתקני בטיחות בינלאומיים בתעופה ובנמל התעופה בביירות",
      "שמירה על ריבונות המדינה והסכמי הפסקת האש"
     ],
     "inferred": [
      "שאיפה לשיקום כלכלי ולהידוק היחסים עם ארצות הברית ומדינות המפרץ",
      "בלימת הברחות אמצעי חבלה ומניעת הידרדרות ללחימה רחבה נוספת"
     ],
     "forecast": [
      "המשך ניסיונות תמרון בין הלחץ הבינלאומי לפירוק חיזבאללה לבין המציאות הפוליטית והביטחונית הפנימית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/136502/",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/lebanon-welcomes-us-decision-to-lift-air-travel-restrictions/4084254",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/who-owns-the-istanbul-hotel-hosting-al-shaibani-and-barrack/",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/local/article/21592180",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962043/us-on-hezbollah-funding-and-lebanons-reconstruction-what-did-tommy-pig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962043",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1375555",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/eight-palestinians-killed-israeli-attacks-gaza-during-anniversary-us",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/trump-ends-decades-old-restrictions-direct-us-lebanon-flights",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131643",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25325",
     "accessed_at": "2026-10-10T15:57:51+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T23:42:12+00:00",
  "changes": {
   "NORTH-10101557-01": {
    "kind": "new"
   },
   "NORTH-10101557-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10101557-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפה ישראלית נגד פעיל סורי בגבול סוריה-לבנון",
    "score": 1.0
   },
   "NORTH-10101557-04": {
    "kind": "new"
   },
   "NORTH-10101557-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מות קצין צה\"ל בתאונה מבצעית בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10101557-06": {
    "kind": "new"
   },
   "NORTH-10101557-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התניית סיוע אמריקאי לשיקום לבנון בפירוק חיזבאללה",
    "score": 1.0
   },
   "NORTH-10101557-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פגישת שר החוץ הסורי ושליח ארה\"ב באיסטנבול",
    "score": 1.0
   }
  }
 }
};
