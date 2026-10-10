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
  "draft": "drafts/iran/2026-10-10T2340__iran-202610102340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-10T23:40:27+00:00",
   "window": {
    "from": "2026-10-09T23:40:27+00:00",
    "to": "2026-10-10T23:40:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610102340"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין בלחץ כלכלי כבד ובשיבוש מכליות נפט במצר הורמוז לצד פעילות צבאית גוברת של החות'ים נגד יעדים בסעודיה. במקביל לאיומי מלחמה הדדיים ולשיקום תשתיות צבאיות באיראן, מתקיימים ערוצי תיווך רוסיים לבחינת הסדרים, בעוד ישראל וארה\"ב שוקלות את תזמון מהלכיהן הצבאיים לאור שיקולים פוליטיים פנימיים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פגיעות בכלי שיט, פיצוץ מיכלית ממוקש ימי ושיבוש תנועת סחר האנרגיה העולמית."
    },
    {
     "name": "החזית הכלכלית והסנקציות",
     "status": "הידוק המצור הכלכלי על הכנסות הנפט ונתיבי היבשה של איראן."
    },
    {
     "name": "ציר החות'ים וסעודיה",
     "status": "מתקפות טילים קטלניות על שדה התעופה בריאד לצד שקילת מעורבות צבאית אמריקאית."
    },
    {
     "name": "חזית הגרעין והטילים באיראן",
     "status": "פעולות שיקום מתקנים שנפגעו מתקיפות ישראליות ודיון פנימי על מדיניות העמימות הגרעינית."
    }
   ],
   "events": [
    {
     "id": "IRAN-10102340-01",
     "title": "מתקפת טילים על נמל התעופה הבינלאומי בריאד",
     "summary": "החות'ים שיגרו טילים לעבר נמל התעופה הבינלאומי בריאד שבסעודיה, וכתוצאה מכך נגרמו עשרות נפגעים והושבתו הפעילויות במקום.",
     "axis": "שלוחות איראן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T13:45:14+00:00",
     "last_update_at": "2026-10-10T23:37:27+00:00",
     "what_is_not_verified": "מספר ההרוגים והפצועים המדויק (נע בין 2 הרוגים ל-12 הרוגים ומעל 300 פצועים)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
       "published_at": "2026-10-10T23:37:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261010-riyadh-airport-suspends-operations-after-attack-leaves-multiple-people-wounded",
       "published_at": "2026-10-10T18:03:32+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-attack-saudi-airport-kills-12-over-300-wounded-authorities-say",
       "published_at": "2026-10-10T15:46:32+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
       "published_at": "2026-10-10T13:45:14+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי המלך ח'אלד, ריאד, ערב הסעודית",
       "lat": 24.9586,
       "lon": 46.711
      }
     ]
    },
    {
     "id": "IRAN-10102340-02",
     "title": "פיצוץ מוקש ימי במיכלית נפט במצר הורמוז",
     "summary": "מיכלית נפט גולמי נפגעה ממוקש ימי והתלקחה במצר הורמוז; משמרות המהפכה טוענים כי כלי השיט סטה לנתיב בלתי מורשה וכיבה מערכות זיהוי.",
     "axis": "איראן - מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T17:19:07+00:00",
     "last_update_at": "2026-10-10T21:45:24+00:00",
     "what_is_not_verified": "זהות המיכלית והגורם שהניח את המוקש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_31a96301d52ebe99",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-oil-supertanker-hit-mine-strait-hormuz",
       "published_at": "2026-10-10T21:45:24+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_31a96301d52ebe99",
       "url": "https://en.irna.ir/news/86288817/IRGC-Offending-supertanker-is-burning-in-Strait-of-Hormuz",
       "published_at": "2026-10-10T17:19:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-03",
     "title": "הצגת תוכנית סנקציות כלכליות אמריקאיות נגד איראן",
     "summary": "שר האוצר של ארה\"ב הציג תוכנית לשלילת הכנסות מנפט, חסימת גישה למערכות פיננסיות וסגירת נתיבי סחר יבשתיים דרך טורקיה במטרה לחנוק את כלכלת איראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T23:23:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T23:23:00+00:00",
     "last_update_at": "2026-10-10T23:23:00+00:00",
     "what_is_not_verified": "אופן יישום הסנקציות על נתיבי הסחר היבשתיים בטורקיה ומידת השפעתן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610091055",
       "published_at": "2026-10-10T23:23:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-04",
     "title": "העברת מסר מאיראן לארה\"ב בנושא הסדר עימות",
     "summary": "נשיא רוסיה שוחח טלפונית עם נשיא ארה\"ב והעביר לו את עמדת טהראן בנוגע לאפשרות להגיע להסכם לסיום העימות.",
     "axis": "ארה\"ב - איראן - רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T21:41:53+00:00",
     "last_update_at": "2026-10-10T12:30:21+00:00",
     "what_is_not_verified": "תוכן העמדה האיראנית ותגובתו של נשיא ארה\"ב להצעה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/putin-told-trump-about-irans-position-peace-deal-kremlin",
       "published_at": "2026-10-10T12:30:21+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48415",
       "published_at": "2026-10-10T11:42:53+00:00"
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
     "id": "IRAN-10102340-05",
     "title": "מגעים בין ארה\"ב לישראל על תקיפה באיראן",
     "summary": "גורמים בארה\"ב ביקשו מישראל לתקוף לבדה באיראן, אך המהלך נבלם וירד מהפרק לאחר שהרמטכ\"ל התריע מפני דחיית מועד הבחירות בישראל.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T12:55:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T12:55:57+00:00",
     "last_update_at": "2026-10-10T17:38:08+00:00",
     "what_is_not_verified": "האם אכן הועברה דרישה אמריקאית רשמית לפעולה ישראלית עצמאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956963",
       "published_at": "2026-10-10T17:38:08+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956914",
       "published_at": "2026-10-10T12:55:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-06",
     "title": "פעולות שיקום באתר מחקר גרעיני וטילים באיראן",
     "summary": "מכוני מחקר ודיווחים מצביעים על עבודות בנייה ושיקום במתחם איראני שנפגע בעבר מתקיפה ישראלית וקשור למחקר נשק גרעיני, לצד דיווחים על שיקום ייצור טילים בסיוע רוסי.",
     "axis": "איראן - ישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T12:53:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T12:53:25+00:00",
     "last_update_at": "2026-10-10T16:38:12+00:00",
     "what_is_not_verified": "היקף השיקום המדויק ורמת החזרה לכשירות מבצעית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610109658",
       "published_at": "2026-10-10T16:38:12+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/article/21591742",
       "published_at": "2026-10-10T15:46:13+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1h2zswsge",
       "published_at": "2026-10-10T12:53:25+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "המספר המדויק של הנפגעים וההרוגים במתקפה בנמל התעופה בריאד.",
    "הטענה של איראן כי המיכלית שנפגעה שטה בנתיב לא מורשה וכיבתה מערכות זיהוי.",
    "טענות על דרישה ישירה מארה\"ב שישראל תתקוף באיראן באופן עצמאי.",
    "מידת ההתקדמות בשיקום מפעלי הטילים ומתקני הגרעין שנפגעו באיראן.",
    "ההערכה כי הכנסות הנפט של איראן יתאפסו לחלוטין עד אמצע חודש דצמבר."
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
      "הפעלת לחץ כלכלי לחניקת כלכלת איראן ואיפוס הכנסות הנפט שלה.",
      "דרישה מאיראן להיענות לכלל הדרישות האמריקאיות כתנאי למניעת פגיעה בקיומה."
     ],
     "inferred": [
      "הימנעות מהסלמה צבאית נרחבת לפני בחירות האמצע בארה\"ב.",
      "בחינת אפשרות להצטרפות לתקיפות נגד החות'ים לצד סעודיה."
     ],
     "forecast": [
      "המשך אכיפה קפדנית של סנקציות תוך דחיית תקיפות יזומות עד לאחר ההצבעה בקלפיות."
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "אי-כניעה לאיומים צבאיים וללחצים כלכליים של ארה\"ב.",
      "אכיפת כללי ביטחון מחמירים ואיסור חריגה מנתיבי שיט במצר הורמוז."
     ],
     "inferred": [
      "שיקום יכולות הטילים ואתרי מחקר שנפגעו בסיוע גורמים זרים כדי לשמר כושר הרתעה.",
      "שימוש ברוסיה כמתווכת להעברת עמדות לטראמפ לשם בחינת הסדר מדיני מקל."
     ],
     "forecast": [
      "המשך הטרדת נתיבי השיט במפרץ ובחינה מחדש של מדיניות העמימות בנושא הגרעין."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הימנעות מפעולה יזומה באיראן כל עוד טהראן אינה נוקטת צעדים חריגים."
     ],
     "inferred": [
      "העדפת דחיית מלחמה גלויה באיראן כדי לא לשבש את קיום הבחירות לכנסת.",
      "התנגדות לביצוע תקיפה עצמאית ללא תיאום או שילוב כוחות אמריקאיים."
     ],
     "forecast": [
      "שמירה על כוננות ודחיית מבצעים צבאיים נרחבים עד למועד שלאחר הבחירות בישראל."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/putin-told-trump-about-irans-position-peace-deal-kremlin",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610109658",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86288817/IRGC-Offending-supertanker-is-burning-in-Strait-of-Hormuz",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/article/21591742",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-oil-supertanker-hit-mine-strait-hormuz",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48405",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956914",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1h2zswsge",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-10T06:19:31+00:00",
  "changes": {
   "IRAN-10102340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים וטילים של החות'ים על נמל התעופה בריאד",
    "score": 0.65
   },
   "IRAN-10102340-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "אכיפת סגר ימי אמריקני והפניית כלי שיט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-10102340-03": {
    "kind": "new"
   },
   "IRAN-10102340-04": {
    "kind": "new"
   },
   "IRAN-10102340-05": {
    "kind": "new"
   },
   "IRAN-10102340-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-10T2341__ukraine-202610102341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-10T23:41:20+00:00",
   "window": {
    "from": "2026-10-09T23:41:20+00:00",
    "to": "2026-10-10T23:41:20+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610102341"
   },
   "summary": "צבא רוסיה מגביר את תקיפותיו האוויריות על תשתיות וריכוזי אוכלוסייה בערי אוקראינה, בעוד אוקראינה ממשיכה לפגוע במתקני אנרגיה בתוך רוסיה ובשיירות אספקה בחזית. ברקע הלחימה התגלע שבר מדיני חריף בעקבות סיכום בין נשיא ארצות הברית לרוסיה על הקלת סנקציות לצורך ייצוא סולר, מהלך שעורר התנגדות חריפה מצד קייב ומדינות אירופה.",
   "fronts": [
    {
     "name": "חזית זפוריז'יה",
     "status": "תקיפות כבדות של פצצות דאייה רוסיות על מבנים אזרחיים בעיר עם נפגעים רבים."
    },
    {
     "name": "חזית קופיאנסק ולוהנסק",
     "status": "פגיעה רוסית בגשר נהר אוסקול לשיבוש לוגיסטיקה, לצד השמדת שיירה צבאית רוסית בידי צנחנים אוקראינים בסוואטובה."
    },
    {
     "name": "העורף והתשתיות באוקראינה (קייב, אודסה, דניפרופטרובסק)",
     "status": "תקיפות מתמשכות באמצעות כטב\"מים וטילים הגורמות לשיבושי חשמל ומים ולנזק למבנים."
    },
    {
     "name": "עומק שטח רוסיה",
     "status": "מתקפות אוקראיניות על בתי זיקוק ומסופי נפט בסמרה וברוסטוב."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10102341-01",
     "title": "תקיפה אווירית רוסית קטלנית בזפוריז'יה",
     "summary": "פצצות דאייה רוסיות פגעו בבניין מגורים רב-קומות וגרמו למותם של לפחות עשרים בני אדם ולפציעת עשרות נוספים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T18:52:00+00:00",
     "last_update_at": "2026-10-10T20:51:12+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו אחיד בין המקורות השונים (נע בין שמונה עשרה לשלושים ושניים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.bbc.co.uk/news/articles/cwvgdpv642g5o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-10T20:51:12+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.ukrinform.net/rubric-ato/4173122-russian-guided-bomb-attack-on-zaporizhzhia-kills-20-injures-32.html",
       "published_at": "2026-10-10T19:30:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.ynet.co.il/news/article/s1winlusgg",
       "published_at": "2026-10-10T18:54:40+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057385/",
       "published_at": "2026-10-10T18:52:00+00:00"
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
     "id": "UKRAINE-10102341-02",
     "title": "הסכם סולר בין ארצות הברית לרוסיה והקלת עיצומים",
     "summary": "נשיא ארצות הברית סיכם עם מקבילו הרוסי על אספקת כמויות גדולות של סולר לשוק הבינלאומי, תוך מתן היתר להקלת עיצומים אמריקאיים.",
     "axis": "מדיני ועיצומים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T00:02:06+00:00",
     "last_update_at": "2026-10-10T20:42:55+00:00",
     "what_is_not_verified": "היקף הייצוא המיידי המדויק וההשלכות על השוק הפנימי ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-russia-strikes-war-trump-diesel-deal-zelenskyy",
       "published_at": "2026-10-10T20:42:55+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/will-only-lead-to-more-slaughter-bipartisan-backlash-erupts-in-us-over-trump-russia-diesel-deal/",
       "published_at": "2026-10-10T20:41:26+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-partially-lifts-ban-on-diesel-exports-after-trump-putin-deal/",
       "published_at": "2026-10-10T19:26:41+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/10/trump-calls-on-ukraine-to-replace-zelensky",
       "published_at": "2026-10-10T17:32:36+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057392/",
       "published_at": "2026-10-10T17:13:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/10/we-re-being-used-as-a-front-zelensky-says-of-trump-s-diesel-deal-with-putin",
       "published_at": "2026-10-10T00:02:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10102341-03",
     "title": "תקיפות כטב\"מים וטילים על קייב",
     "summary": "שברי יירוט של טילים וכלי טיס בלתי מאוישים נפלו על מבני מגורים, גן ילדים ועסקים באזורים שונים בבירה וגרמו לפציעות.",
     "axis": "חזית המרכז / העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T16:30:00+00:00",
     "last_update_at": "2026-10-10T18:54:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_f6cf19ab1ab44775",
       "url": "https://www.ynet.co.il/news/article/s1winlusgg",
       "published_at": "2026-10-10T18:54:40+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_f6cf19ab1ab44775",
       "url": "https://www.theguardian.com/global/video/2026/oct/10/man-narrowly-escapes-drone-strike-on-playground-in-kyiv-video",
       "published_at": "2026-10-10T17:06:19+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f6cf19ab1ab44775",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057366/",
       "published_at": "2026-10-10T16:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "סביאטופטריבסקה, אוקראינה",
       "lat": 50.3852,
       "lon": 30.3228
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-04",
     "title": "פגיעות במבנים באודסה",
     "summary": "תקיפה רוסית על עיר הנמל פגעה בבניין משרדים ובמבנה מגורים, ללא דיווח ראשוני על נפגעים בנפש.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T16:36:00+00:00",
     "last_update_at": "2026-10-10T19:52:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המלא בעקבות הפגיעה במבנה המגורים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_f441892686aff55a",
       "url": "https://www.ukrinform.net/rubric-ato/4173123-odesa-under-russian-attack-residential-building-damaged-lysak.html",
       "published_at": "2026-10-10T19:52:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f441892686aff55a",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057389/",
       "published_at": "2026-10-10T16:36:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-05",
     "title": "השמדת שיירה צבאית רוסית בסוואטובה",
     "summary": "כוחות צנחנים של צבא אוקראינה תקפו והשמידו שיירה של חיילים רוסים במחוז לוהנסק.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T20:54:00+00:00",
     "last_update_at": "2026-10-10T20:54:00+00:00",
     "what_is_not_verified": "מספר הנפגעים והיקף הציוד שהושמד בשיירה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173131-ukrainian-paratroopers-destroy-russian-convoy-in-svatove.html",
       "published_at": "2026-10-10T20:54:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סוואטובה, אוקראינה",
       "lat": 49.4177,
       "lon": 38.1457
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-06",
     "title": "תקיפות אוקראיניות על מתקני אנרגיה בתוך רוסיה",
     "summary": "אוקראינה המשיכה לפגוע בתשתיות נפט וסולר בשטח רוסיה, כולל תחנת שאיבה בסמרה ואתרים באזור רוסטוב.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T07:18:34+00:00",
     "last_update_at": "2026-10-10T13:53:42+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת ליכולת הזיקוק הכוללת של רוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21591307",
       "published_at": "2026-10-10T13:53:42+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkttvlpjzl",
       "published_at": "2026-10-10T07:18:34+00:00"
      }
     ],
     "places": [
      {
       "name": "סמרה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      },
      {
       "name": "רוסטוב, רוסיה",
       "lat": 47.2223,
       "lon": 39.7199
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-07",
     "title": "תקיפת כטב\"ם במחוז דניפרופטרובסק",
     "summary": "ילד בן אחת עשרה נהרג וחמישה בני אדם נפצעו בתקיפת כלי טיס בלתי מאויש רוסי באזור דניפרופטרובסק.",
     "axis": "חזית המרכז והמזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T22:51:10+00:00",
     "last_update_at": "2026-10-10T22:51:10+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/11-year-old-boy-killed-five-injured-by-russian-drone-attack-in-dnipropetrovsk-oblast/",
       "published_at": "2026-10-10T22:51:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10102341-08",
     "title": "הריסת גשר על נהר אוסקול",
     "summary": "הצבא הרוסי השמיד מעבר גשר על נהר אוסקול באזור קופיאנסק במטרה לשבש את השרשרת הלוגיסטית של הצבא האוקראיני.",
     "axis": "גזרת קופיאנסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T23:14:46+00:00",
     "last_update_at": "2026-10-10T23:14:46+00:00",
     "what_is_not_verified": "מידת ההשפעה המבצעית בפועל על מהלך הקרבות באזור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2200399",
       "published_at": "2026-10-10T23:14:46+00:00"
      }
     ],
     "places": [
      {
       "name": "קופיאנסק, אוקראינה",
       "lat": 49.7133,
       "lon": 37.6142
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-09",
     "title": "סירוב אירופי להעברת טילי פטריוט",
     "summary": "ספרד ויוון דחו בקשות למסור לאוקראינה טילי יירוט מסוג פטריוט שתוקפם מתקרב לסיומו.",
     "axis": "סיוע צבאי בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T22:30:00+00:00",
     "last_update_at": "2026-10-10T22:30:00+00:00",
     "what_is_not_verified": "כמות הטילים המדויקת שבידי המדינות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4172936-spain-and-greece-refuse-to-give-ukraine-patriot-missiles-nearing-expiration.html",
       "published_at": "2026-10-10T22:30:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10102341-10",
     "title": "גזרי דין ללוחמים שפעלו בשירות רוסיה",
     "summary": "בית משפט אוקראיני גזר חמש עשרה שנות מאסר על תשעה אזרחים שהורשעו בלחימה לצד הכוחות הרוסיים במחוז דונצק.",
     "axis": "משפט ופנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T21:36:00+00:00",
     "last_update_at": "2026-10-10T21:36:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-crime/4172915-nine-traitors-who-fought-for-russia-sentenced-to-15-years-in-prison-each.html",
       "published_at": "2026-10-10T21:36:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז דונצק, אוקראינה",
       "lat": 48.0265,
       "lon": 37.7916
      }
     ]
    }
   ],
   "not_verified": [
    "טענת ערוצים רוסיים לפיה ראש עיריית דנייפר עזב את אוקראינה עקב חקירות שחיתות.",
    "הטענה כי כחמישים אחוז מכושר הזיקוק ברוסיה הושבת בעקבות הפגיעות האוקראיניות.",
    "מספר הפצועים המדויק בתקיפה על זפוריז'יה בשל סתירות בין המקורות השונים."
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
      "המשך הפעולות הצבאיות עד להשגת כלל היעדים ושלילת שיחות שלום בעת הנוכחית.",
      "חידוש הזרמת סולר לשווקים הבינלאומיים והקלת מגבלות הייצוא העצמיות."
     ],
     "inferred": [
      "ניצול ההסכמות הכלכליות עם ארצות הברית להכנסת כספים למימון המאמץ המלחמתי.",
      "שבירת כושר העמידה האוקראיני דרך פגיעה מסיבית במערכות אנרגיה עירוניות."
     ],
     "forecast": [
      "המשך לחץ אווירי על ערי מפתח לקראת עונת החורף.",
      "מאמצים לקבע את השליטה באזורים שנכבשו תוך הרחבת פגיעות לוגיסטיות בציר קופיאנסק."
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "התנגדות מוחלטת להקלת העיצומים על רוסיה והגדרתה כמימון ישיר של המלחמה.",
      "המשך הגנה על תשתיות לאומיות ופגיעה בריכוזי כוחות האויב."
     ],
     "inferred": [
      "המשך פגיעה מכוונת בבתי זיקוק רוסיים כדי ללחוץ על הכלכלה הרוסית חרף דרישות וושינגטון.",
      "התמודדות עם משבר דיפלומטי חמור מול הממשל האמריקאי."
     ],
     "forecast": [
      "המשך תקיפות ממוקדות בעומק רוסיה חרף הלחץ החיצוני לחדול מכך.",
      "הישענות מוגברת על האיחוד האירופי לאספקת מערכות הגנה וסנקציות חדשות."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הורדת מחירי הדלק והסולר בשוק המקומי והעולמי לקראת בחירות האמצע.",
      "קריאה להפסקת התקיפות האוקראיניות על מתקני נפט והחלפת ההנהגה בקייב לצורך הגעה להסכם."
     ],
     "inferred": [
      "הפעלת מנופי לחץ כבדים על אוקראינה כדי לכפות משא ומתן עם מוסקבה.",
      "העדפת אינטרסים כלכליים ופוליטיים פנימיים על פני המשך התיאום ההדוק עם קייב."
     ],
     "forecast": [
      "העמקת המתיחות מול ההנהגה האוקראינית ומול חלק מבעלות הברית באירופה.",
      "התגברות המחלוקת הפנים-אמריקאית בקונגרס סביב הקלות העיצומים לרוסיה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwvgdpv642g5o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/global/video/2026/oct/10/man-narrowly-escapes-drone-strike-on-playground-in-kyiv-video",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21591307",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/11-year-old-boy-killed-five-injured-by-russian-drone-attack-in-dnipropetrovsk-oblast/",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/10/we-re-being-used-as-a-front-zelensky-says-of-trump-s-diesel-deal-with-putin",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057389/",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2200399",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-crime/4172915-nine-traitors-who-fought-for-russia-sentenced-to-15-years-in-prison-each.html",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bkttvlpjzl",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-10T06:20:34+00:00",
  "changes": {
   "UKRAINE-10102341-01": {
    "kind": "possible",
    "prev": "תקיפת פצצות דואות על בניין מגורים בזפוריז'יה",
    "score": 0.633
   },
   "UKRAINE-10102341-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הסכם אספקת סולר מרוסיה והקלת סנקציות אמריקאיות",
    "score": 1.0
   },
   "UKRAINE-10102341-03": {
    "kind": "possible",
    "prev": "נפילת שברי כטב\"ם באזור קייב",
    "score": 0.633
   },
   "UKRAINE-10102341-04": {
    "kind": "new"
   },
   "UKRAINE-10102341-05": {
    "kind": "new"
   },
   "UKRAINE-10102341-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות כטב\"מים אוקראיניים על יעדי אנרגיה ומבנים במחוז רוסטוב",
    "score": 0.817
   },
   "UKRAINE-10102341-07": {
    "kind": "new"
   },
   "UKRAINE-10102341-08": {
    "kind": "new"
   },
   "UKRAINE-10102341-09": {
    "kind": "new"
   },
   "UKRAINE-10102341-10": {
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
