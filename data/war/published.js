/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-19T2346__yemen-202609192346.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-19T23:46:36+00:00",
   "window": {
    "from": "2026-09-18T23:46:36+00:00",
    "to": "2026-09-19T23:46:36+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609192346"
   },
   "summary": "הלחימה בזירת תימן והחות'ים מחריפה סביב מתקפות טילים וכטב\"מים של המורדים החות'ים לעבר מטרות ותשתיות אזרחיות ונפט בסעודיה, כולל בריאד ובינבוע, לצד התנגשות צבאית קרקעית מתמשכת בדרום תימן. סעודיה מגיבה באמצעות מערכות הגנה אווירית ופונה לבעלות ברית אזוריות ובינלאומיות לסיוע, בעוד איראן ממשיכה להשפיע על המערכה באמצעות תמיכה בחות'ים ושמירה על לחץ ימי.",
   "fronts": [
    {
     "name": "חזית סעודיה - תימן",
     "status": "פעיל עם תקיפות אוויריות ושיגורי טילים לעבר עומק סעודיה"
    },
    {
     "name": "חזית דרום תימן",
     "status": "פעיל עם עימותים קרקעיים בין כוחות הממשלה לחות'ים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09192346-01",
     "title": "יירוט טיל בליסטי מעל ריאד ותקיפות לעבר ערים נוספות",
     "summary": "כוחות הקואליציה בראשות סעודיה הודיו שיירו טיל בליסטי ששוגר לעבר ריאד, וסיכלו ניסיונות תקיפה באזורים נוספים כולל ינבוע, טאא'ף, ביש ופרסאן.",
     "axis": "סעודיה והקואליציה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T19:37:52+00:00",
     "last_update_at": "2026-09-19T22:23:27+00:00",
     "what_is_not_verified": "היקף הנזק המלא והאשמת החות'ים בפגיעה במכה ובאתרים נוספים שנויים במחלוקת או ללא אישור מלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21457074",
       "published_at": "2026-09-19T22:23:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-confirms-yemens-houthi-rebels-tried-attack-its-capital-ballistic-missile",
       "published_at": "2026-09-19T22:04:36+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/19/saudi-led-coalition-says-defences-intercept-houthi-missile-fired-at-riyadh?traffic_source=rss",
       "published_at": "2026-09-19T22:03:05+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-missiles-riyadh-and-other-cities-intercepted-saudi-coalition-says",
       "published_at": "2026-09-19T20:52:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/houthis-claim-strikes-riyadh-yanbu-while-saudi-coalition-says-attacks-thwarted",
       "published_at": "2026-09-19T20:28:26+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/152621",
       "published_at": "2026-09-19T19:45:18+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1369062",
       "published_at": "2026-09-19T19:37:52+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-09192346-02",
     "title": "טענת החות'ים לתקיפת אתרים בריאד ובינבוע",
     "summary": "החות'ים לקחו אחריות על שיגור טילים וכטב\"מים לעבר יעדים בריאד ומתקני עראמקו בינבוע בתגובה לתקיפות בסנעא.",
     "axis": "החות'ים מול סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T17:23:00+00:00",
     "last_update_at": "2026-09-19T22:04:36+00:00",
     "what_is_not_verified": "טענות החות'ים על גרימת שריפות ענק ונזק משמעותי במטרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-confirms-yemens-houthi-rebels-tried-attack-its-capital-ballistic-missile",
       "published_at": "2026-09-19T22:04:36+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1369045",
       "published_at": "2026-09-19T19:05:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attacks-riyadh-aramco-facilities-yanbu",
       "published_at": "2026-09-19T17:23:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-09192346-03",
     "title": "קרבות עזים בדרום תימן והרוגים",
     "summary": "דווח על עשרות הרוגים בקרבות בין כוחות הממשלה לחות'ים בדרום תימן ועל עקירת תושבים.",
     "axis": "כוחות ממשלת תימן מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T08:57:59+00:00",
     "last_update_at": "2026-09-19T16:16:40+00:00",
     "what_is_not_verified": "מספר נפגעים מדויק בכל אזורי העימות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/desk-news/article/21455157",
       "published_at": "2026-09-19T16:16:40+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/black-smoke-seen-near-riyadh-amid-air-raid-alerts-in-saudi-arabia",
       "published_at": "2026-09-19T15:16:03+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/more-than-112-000-displaced-in-yemen-as-houthis-seize-more-ground",
       "published_at": "2026-09-19T08:57:59+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף הנזק המדויק במאגרי הדלק ובמתקני עראמקו בריאד ובינבוע",
    "הטענה שאיראן מונעת באופן בלעדי מהחות'ים הגעה להפסקת אש",
    "פרטים מלאים על ההצעה הסורית לסייע או לדחות סיוע לסעודיה"
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
     "value": 3.0377,
     "unit": "ILS",
     "change_pct": 0.15,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת אתרים רגישים ומתקני נפט בסעודיה בתגובה לתקיפות",
      "אכיפת מצור ימי"
     ],
     "inferred": [
      "הפעלת לחץ על סעודיה ועל הכלכלה העולמית",
      "הרחבת שליטה שטחית בתימן"
     ],
     "forecast": [
      "המשך שיגורים לעבר עומק סעודיה כל עוד העימות נמשך"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הגנה על שטחה, ריבונותה ותשתיותיה האזרחיות והאנרגטיות",
      "בלימת התקיפות החות'יות"
     ],
     "inferred": [
      "חיפוש תמיכה צבאית וטכנית מבעלות ברית כמו טורקיה ופקיסטן",
      "חשש מהיגררות מלאה למלחמה אזורית רחבה"
     ],
     "forecast": [
      "הידוק שיתופי פעולה הגנתיים ופנייה לכלים דיפלומטיים או צבאיים נוספים"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "דרישה לתנאים להחזרה להסכמים קודמים"
     ],
     "inferred": [
      "שימוש בחות'ים כזרוע לחץ אזורית להשגת יעדים מול ארה\"ב וסעודיה",
      "תמיכה במצור הימי"
     ],
     "forecast": [
      "שמירה על רף מתח גבוה בזירה באמצעות בעלות בריתה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/19/saudi-led-coalition-says-defences-intercept-houthi-missile-fired-at-riyadh?traffic_source=rss",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/more-than-112-000-displaced-in-yemen-as-houthis-seize-more-ground",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/desk-news/article/21455157",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369045",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attacks-riyadh-aramco-facilities-yanbu",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-confirms-yemens-houthi-rebels-tried-attack-its-capital-ballistic-missile",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/152621",
     "accessed_at": "2026-09-19T23:46:36+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-19T10:54:26+00:00",
  "changes": {
   "YEMEN-09192346-01": {
    "kind": "possible",
    "prev": "תקיפות והתרעות אוויריות בסעודיה",
    "score": 0.633
   },
   "YEMEN-09192346-02": {
    "kind": "new"
   },
   "YEMEN-09192346-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התקדמות החות'ים בתימן ועקירת תושבים",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-19T2340__iran-202609192340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-19T23:40:28+00:00",
   "window": {
    "from": "2026-09-18T23:40:28+00:00",
    "to": "2026-09-19T23:40:28+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609192340"
   },
   "summary": "בזירת העימות מתנהלת מתיחות צבאית ודיפלומטית רב-ממדית, שבה איראן מציבה שבעה תנאי כניעה לחידוש השיחות ובינתיים שומרת על כוננות עליונה ודוחה את טענות ארה\"ב לגבי השליטה במצר הורמוז. במקביל, שלוחת החות'ים בתימן ממשיכה במתקפות טילים וכטב\"מים לעבר ערב הסעודית למרות יירוטים מצד הקואליציה, בעוד ארה\"ב מטילה סנקציות חדשות ומזהירה מפני הסלמה אזורית פתאומית.",
   "fronts": [
    {
     "name": "איראן מול ארה\"ב וישראל",
     "status": "פעיל, כולל עימותים עקיפים, איומי סנקציות, שיחות מתווכות ותנאים להפסקת אש"
    },
    {
     "name": "ציר איראן והשלוחות מול סעודיה ומדינות המפרץ",
     "status": "פעיל מאד, כולל שיגורי טילים בליסטיים מצד החות'ים לעבר סעודיה ומצור ימי"
    }
   ],
   "events": [
    {
     "id": "IRAN-09192340-01",
     "title": "יירוט טיל בליסטי מעל ריאד",
     "summary": "הקואליציה הסעודית הודיעה על יירוט והשמדה של טיל בליסטי ששוגר לעבר ריאד, וכן סיכול ניסיונות תקיפה נוספים בערים נוספות בנמל ויעדים אזרחיים.",
     "axis": "ציר איראן והשלוחות מול סעודיה ומדינות המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T11:30:18+00:00",
     "last_update_at": "2026-09-19T22:23:27+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינו מפורט במלואו מעבר לדיווחים על שריפה במתקן דחוס ליד נמל התעופה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_17d0d96de904fa2c",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21457074",
       "published_at": "2026-09-19T22:23:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_17d0d96de904fa2c",
       "url": "https://www.middleeasteye.net/news/houthis-claim-strikes-riyadh-yanbu-while-saudi-coalition-says-attacks-thwarted",
       "published_at": "2026-09-19T20:28:26+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_17d0d96de904fa2c",
       "url": "https://www.france24.com/en/black-smoke-seen-near-riyadh-amid-air-raid-alerts-in-saudi-arabia",
       "published_at": "2026-09-19T15:16:03+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_17d0d96de904fa2c",
       "url": "https://www.al-monitor.com/originals/2026/09/saudi-led-coalition-says-houthis-fired-ballistic-missile-riyadh",
       "published_at": "2026-09-19T11:30:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ינבוע, ערב הסעודית",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "IRAN-09192340-02",
     "title": "העלאת כוננות באיראן לקוד 100",
     "summary": "הונפק מצב התראה גבוה המכונה קוד 100 לכל הכוחות המזוינים של איראן, כולל משמרות המהפכה, הארטש ופרג'ה.",
     "axis": "ציר איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T23:07:49+00:00",
     "last_update_at": "2026-09-19T23:20:43+00:00",
     "what_is_not_verified": "מקור הדיווח מבוסס על ערוצים זרים ואינו מאומת בהודעה רשמית של משמרות המהפכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47849",
       "published_at": "2026-09-19T23:20:43+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47845",
       "published_at": "2026-09-19T23:07:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09192340-03",
     "title": "חתימת ארה\"ב על חוק סנקציות חדש נגד איראן ורוסיה",
     "summary": "נשיא ארה\"ב חתם על חוק המטיל סנקציות חדשות על איראן ורוסיה, וכן מאריך את הסנקציות על מגזרי האנרגיה והנשק של איראן בחמש שנים.",
     "axis": "ציר איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T10:28:57+00:00",
     "last_update_at": "2026-09-19T10:28:57+00:00",
     "what_is_not_verified": "האם הנשיא ישתמש בסמכותו לדחות או לבטל את יישום הצעדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130479",
       "published_at": "2026-09-19T10:28:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09192340-04",
     "title": "הוצאה להורג באיראן של נאשם בריגול לישראל",
     "summary": "איראן הוציאה להורג אדם שהואשם בהעברת מידע על אתרי טילים באספהאן למוסד הישראלי.",
     "axis": "ציר איראן מול ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T06:31:42+00:00",
     "last_update_at": "2026-09-19T06:31:42+00:00",
     "what_is_not_verified": "ארגוני זכויות אדם טוענים שההודאות נסחטו תחת עינויים במעצר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609191625",
       "published_at": "2026-09-19T06:31:42+00:00"
      }
     ],
     "places": [
      {
       "name": "אספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    }
   ],
   "not_verified": [
    "אמינות הדיווחים הזרים על הנפקת 'קוד 100' לכוחות המזוינים של איראן",
    "האופן המדויק שבו איראן מצליחה לעקוף את המצור הימי האמריקני ולהגדיל את הכנסותיה מהנפט",
    "האם פתוות המנהיג העליון נגד נשק גרעיני תשתנה בפועל בעתיד"
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
     "value": 3.0377,
     "unit": "ILS",
     "change_pct": 0.15,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הצבת שבעה תנאים מוקדמים לחידוש כל משא ומתן עם ארה\"ב",
      "דרישה להפסקת המלחמה בכל החזיתות והסרת המצור הימי והסנקציות",
      "דחיית הטענות האמריקניות על שליטה במצר הורמוז ואישור כללים חדשים לכבלי תקשורת"
     ],
     "inferred": [
      "ניסיון להפעיל לחץ באמצעות שלוחיה (החות'ים) כדי לפגוע בכלכלה הסעודית וביציבות האזורית",
      "הסתייעות בערוצים דיפלומטיים (כמו קטר, טורקיה וסין) כמתווכים מול ארה\"ב",
      "שמירת אופציה להמשך תוכנית הגרעין או פרישה מהאמנה למניעת הפצת נשק גרעיני כתגובה ללחץ"
     ],
     "forecast": [
      "המשך הלוחמה הפסיכולוגית וההתנגדות ללחץ הכלכלי באמצעות עקיפת סנקציות",
      "היערכות צבאית מוגברת לתגובה אפשרית מצד ארה\"ב או ישראל"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "הטלת סנקציות כלכליות נוקשות וחדשות על איראן ורוסיה",
      "שמירה על חופש השייט והאבטחה במצר הורמוז באמצעות פיקוח צבאי",
      "בלימת ההשפעה האיראנית ונטרול יכולותיה הצבאיות"
     ],
     "inferred": [
      "החלשת המשטר האיראני מבחינה כלכלית ופוליטית באמצעות מצור ימי וסנקציות",
      "הבעת אי-יציבות וחוסר אמון במגעים מול טהרן לצד השארת פתח למו\"מ מותנה"
     ],
     "forecast": [
      "החמרת האכיפה נגד גורמים מממנים ו\"צי הצללים\" של מכליות נפט",
      "היערכות לאפשרות של הסלמה פתאומית מצד איראן או שלוחיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/saudi-led-coalition-says-houthis-fired-ballistic-missile-riyadh",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/black-smoke-seen-near-riyadh-amid-air-raid-alerts-in-saudi-arabia",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609191625",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21457074",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/houthis-claim-strikes-riyadh-yanbu-while-saudi-coalition-says-attacks-thwarted",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130479",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47845",
     "accessed_at": "2026-09-19T23:40:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-19T10:41:33+00:00",
  "changes": {
   "IRAN-09192340-01": {
    "kind": "new"
   },
   "IRAN-09192340-02": {
    "kind": "new"
   },
   "IRAN-09192340-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "חתימת חוק סנקציות בארה\"ב",
    "score": 1.0
   },
   "IRAN-09192340-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הוצאה להורג באיראן בגין ריגול",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-19T1052__ukraine-202609191052.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-19T10:52:54+00:00",
   "window": {
    "from": "2026-09-18T10:52:54+00:00",
    "to": "2026-09-19T10:52:54+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202609191052"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בחילופי מהלומות אוויריות נרחבים בכטבמים וטילים, לצד התנגשויות קרקעיות עזות במוקדים מוגדרים במזרח המדינה דוגמת גזרת לימאן. המערב מגביר את הלחץ הכלכלי באמצעות סנקציות חדשות, אך אספקת מערכות ההגנה האווירית מארצות הברית נתקלת בקשיי ייצור ובמחסור במלאים. במקביל, רוסיה מקדמת צעדי סיפוח פוליטיים בשטחים שכבשה ומעוררת חשש באירופה מהתרחבות האיומים הביטחוניים.",
   "fronts": [
    {
     "name": "גזרת לימאן (דונבאס)",
     "status": "מתקפת נגד אוקראינית בניסיון להדוף כוחות רוסיים, תוך צבירת כוחות הדדית להמשך הקרבות"
    },
    {
     "name": "עורף אוקראינה (סומי, חרקוב, קייב, אודסה, זפורוז'יה)",
     "status": "מתקפות אוויריות רוסיות שוטפות באמצעות כטבמים ופצצות מונחות נגד תשתיות ומבני מגורים"
    },
    {
     "name": "עורף רוסיה והשטחים שבשליטתה (דונצק, לוהנסק, דגסטן ומחוזות מערביים)",
     "status": "מטחי כטבמים אוקראיניים לעבר מטרות בעומק רוסיה ופגיעות במערכות תשתית וחשמל מקומיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09191052-01",
     "title": "נשיא ארצות הברית חתם על חוק סנקציות נרחב נגד רוסיה",
     "summary": "נחתם חוק המטיל סנקציות ומכסים כבדים על רוסיה, על הנהגתה, על מגזרי האנרגיה והביטחון שלה, ועל מדינות הרוכשות ממנה נפט וגז.",
     "axis": "מדיני וכלכלי בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T22:10:44+00:00",
     "last_update_at": "2026-09-19T10:28:57+00:00",
     "what_is_not_verified": "היקף ההשפעה המעשית ולוחות הזמנים ליישום המכסים וההגבלות בפועל אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130479",
       "published_at": "2026-09-19T10:28:57+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/09/19/trump-signs-late-senator-lindsey-graham-s-sanctions-from-hell-law-against-russia",
       "published_at": "2026-09-18T22:33:39+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/sep/18/trump-signs-russia-sanctions-bill",
       "published_at": "2026-09-18T22:10:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09191052-02",
     "title": "אישור אמריקני לעסקת נשק והגנה אווירית עבור אוקראינה",
     "summary": "הממשל האמריקני אישר אפשרות למכירת חבילת אמצעי לחימה ומערכות מכם והגנה אווירית לאוקראינה בהיקף של כ-2.7 מיליארד דולר.",
     "axis": "סיוע צבאי ורכש",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T07:28:53+00:00",
     "last_update_at": "2026-09-19T09:27:46+00:00",
     "what_is_not_verified": "מועד האספקה המדויק וזמינות המלאים בפועל אינם מובטחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-approves-possible-2-7-billion-sale-to-support-ukraines-air-defense/",
       "published_at": "2026-09-19T09:27:46+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1368870",
       "published_at": "2026-09-19T07:28:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09191052-03",
     "title": "מתקפת כטבמים ופצצות על יעדים ומבנים באוקראינה",
     "summary": "רוסיה שיגרה עשרות כטבמים וחימושים שפגעו במבני מגורים, קניון ותשתיות אזרחיות, תוך גרימת נפגעים במספר מחוזות.",
     "axis": "מתקפות אוויריות בעומק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T12:03:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T12:03:23+00:00",
     "last_update_at": "2026-09-19T09:05:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בכלל האזורים הנתקפים אינו סופי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4165727-five-killed-15-injured-in-russian-attacks-in-kharkiv-region-over-past-day.html",
       "published_at": "2026-09-19T09:05:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054204/",
       "published_at": "2026-09-19T08:41:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4165709-russian-forces-launch-massive-overnight-attack-on-odesa-region.html",
       "published_at": "2026-09-19T08:12:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-attacks-kill-11-injure-over-64-in-ukraine-over-past-day/",
       "published_at": "2026-09-19T07:55:20+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/09/19/zelensky-urges-u-s-lawmakers-to-pass-graham-s-sanctions-bill-after-russian-guided-bomb-hit-apartment-building-in-northeastern-ukraine-killing-two-city-council-employees",
       "published_at": "2026-09-18T22:19:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/sep/18/fire-zaporizhzhia-mall-ukraine-russian-attack-video",
       "published_at": "2026-09-18T12:03:23+00:00"
      }
     ],
     "places": [
      {
       "name": "סומי, אוקראינה",
       "lat": 50.912,
       "lon": 34.8028
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "זפורוז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-04",
     "title": "תקיפות כטבמים אוקראיניות לעבר שטח רוסיה ומערכות חשמל באזורים שבשליטתה",
     "summary": "הגנה אווירית רוסית יירטה מאות כלי טיס בלתי מאוישים במספר מחוזות ובדגסטן, לצד שיבושי חשמל באזורי לוהנסק ודונצק בעקבות פגיעה.",
     "axis": "חזית העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T03:46:01+00:00",
     "last_update_at": "2026-09-19T07:35:40+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת בשטח בכל המחוזות המוזכרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_b5a600ce7427e955",
       "url": "https://tass.com/society/2190033",
       "published_at": "2026-09-19T07:35:40+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_b5a600ce7427e955",
       "url": "https://tass.com/defense/2190027",
       "published_at": "2026-09-19T06:41:49+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b5a600ce7427e955",
       "url": "https://t.me/alexmehacarmel/47825",
       "published_at": "2026-09-19T03:46:01+00:00"
      }
     ],
     "places": [
      {
       "name": "מחצ'קלה, רוסיה",
       "lat": 42.983,
       "lon": 47.5049
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-05",
     "title": "מתקפת נגד אוקראינית באזור לימאן בדונבאס",
     "summary": "כוחות אוקראינים מנהלים מתקפה באזור לימאן במטרה להדוף את הכוחות הרוסיים, כאשר שני הצדדים מרכזים כוחות לקראת המשך הקרבות.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T18:10:03+00:00",
     "last_update_at": "2026-09-18T18:10:03+00:00",
     "what_is_not_verified": "אין אימות עצמאי לכך שהכוחות הרוסיים אכן נהדפו אל מעבר לנהר ז'רבץ השחור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/09/18/ukraine-s-operation-vivaldi-pushed-russian-forces-back-around-lyman-in-the-donbas-now-both-armies-are-massing-troops-for-the-next-battles-farther-south",
       "published_at": "2026-09-18T18:10:03+00:00"
      }
     ],
     "places": [
      {
       "name": "לימאן, אוקראינה",
       "lat": 48.9801,
       "lon": 37.8168
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-06",
     "title": "קיום הצבעה לפרלמנט הרוסי בשטחים כבושים באוקראינה",
     "summary": "רוסיה מארגנת הצבעה בבחירות לפרלמנט בחלקים הכבושים של מחוז חרסון ובאזורים נוספים, תוך שימוש בתפאורות היסטוריות וחלוקת תמריצים.",
     "axis": "שליטה אזרחית וסיפוח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T18:51:57+00:00",
     "last_update_at": "2026-09-19T09:43:00+00:00",
     "what_is_not_verified": "היקף ההשתתפות האמיתי ואמינות נתוני ההצבעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054211/",
       "published_at": "2026-09-19T09:43:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1pfnxjfze",
       "published_at": "2026-09-18T18:51:57+00:00"
      }
     ],
     "places": [
      {
       "name": "גניצ'סק, אוקראינה",
       "lat": 46.1662,
       "lon": 34.8089
      },
      {
       "name": "קלנצ'ק, אוקראינה",
       "lat": 46.2572,
       "lon": 33.2844
      },
      {
       "name": "נובוטרויצקה, אוקראינה",
       "lat": 47.7167,
       "lon": 37.5817
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-07",
     "title": "דוח האומות המאוחדות על אלימות מינית במהלך המלחמה",
     "summary": "משרד זכויות האדם של האו\"ם פרסם דוח שתיעד למעלה מאלף מקרי אלימות מינית נגד אזרחים ושבויים, כאשר מרביתם המכרעת יוחסו לכוחות הרוסיים.",
     "axis": "הפרות דיני לחימה ומשפט בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T12:00:00+00:00",
     "last_update_at": "2026-09-19T03:33:13+00:00",
     "what_is_not_verified": "בארגון מעריכים כי המספרים המתועדים אינם משקפים את מלוא היקף התופעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_d51065519338b59e",
       "url": "https://kyivindependent.com/abhorrent-acts-russian-forces-committed-widespread-sexual-violence-in-ukraine-since-full-scale-invasion-un-reports/",
       "published_at": "2026-09-19T03:33:13+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_d51065519338b59e",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21452362",
       "published_at": "2026-09-18T20:18:25+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_d51065519338b59e",
       "url": "https://news.un.org/feed/view/en/story/2026/09/1168374",
       "published_at": "2026-09-18T12:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09191052-08",
     "title": "מחסור בחימוש ועיכובים באספקת מערכות הגנה אווירית מארצות הברית",
     "summary": "שגריר ארצות הברית בנאט\"ו וגורמים רשמיים מזהירים מעיכובים באספקת מיירטי פטריוט וטילים בשל מגבלות ייצור ודלדול מאגרים אמריקניים.",
     "axis": "אספקה ביטחונית ושרשרת ייצור",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T08:10:00+00:00",
     "last_update_at": "2026-09-19T09:07:00+00:00",
     "what_is_not_verified": "משך העיכובים המדויק לכל מדינה ומדינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054206/",
       "published_at": "2026-09-19T09:07:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054202/",
       "published_at": "2026-09-19T08:10:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת אוקראינה לגבי הדיפת הכוחות הרוסיים אל מעבר לנהר ז'רבץ השחור בגזרת לימאן אינה מאומתת.",
    "ההיקף הכולל של נפגעי הכוחות הלוחמים בשני הצדדים מבוסס על הצהרות חד-צדדיות בלבד ואינו מאומת.",
    "מידת ההשפעה של חוק הסנקציות האמריקני החדש והפעלת סמכות המכסים בפועל אינן ודאיות.",
    "דיווחים על פגיעה במערכת נשק ספציפית מדגם מסוים שהוסבה לירי קרקע-קרקע אינם מגובים באימות רשמי.",
    "ממדי מקרי האלימות המינית הכוללים מעבר למקרים שתועדו בדוח האו\"ם אינם ידועים בוודאות."
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
     "value": 1.146,
     "unit": "USD",
     "change_pct": -0.18,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הדיפת הכוחות הרוסיים משטחה ופגיעה במערכי האויב",
      "השגת מערכות הגנה אווירית מתקדמות ומיירטים להגנה לקראת החורף",
      "פיתוח יכולות עצמאיות לתקיפה והרתעה ארוכת טווח"
     ],
     "inferred": [
      "ערעור העורף הרוסי ושיבוש מערכות האנרגיה באזורי השליטה הרוסיים",
      "רתימת המערב להחמרת הסנקציות על רוסיה והגברת הסיוע הצבאי"
     ],
     "forecast": [
      "המשך מאמץ מתקפות הכטבמים לעומק רוסיה לצד לחימת בלימה והתקפות נגד מקומיות במזרח"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "סיפוח והשתלטות פוליטית על השטחים הכבושים באמצעות הליכי בחירות",
      "יירוט תקיפות אוקראיניות ופגיעה במטרות צבאיות ותשתיתיות באוקראינה"
     ],
     "inferred": [
      "שחיקת כוח האדם ומערכי ההגנה האווירית של אוקראינה באמצעות מתקפות כטבמים וטילים המוניות",
      "ביסוס קווי שליטה במזרח אוקראינה והרתעת מדינות נאט\"ו מהעמקת המעורבות"
     ],
     "forecast": [
      "המשך לחץ התקפי בעומק אוקראינה וחיזוק האחיזה המנהלית בשטחים שנכבשו"
     ]
    },
    {
     "actor": "ארצות הברית ומדינות המערב",
     "declared": [
      "הטלת סנקציות כלכליות נוקשות על רוסיה ועל רוכשי האנרגיה ממנה",
      "המשך התמיכה ביכולות ההגנה האווירית והטכנולוגית של אוקראינה"
     ],
     "inferred": [
      "הגנה על מאגרי הנשק העצמיים לנוכח מחסור ביכולות ייצור מיירטים וטילים",
      "הרתעת גורמים בינלאומיים משיתוף פעולה מסחרי וצבאי עם מוסקבה"
     ],
     "forecast": [
      "החרפת האכיפה הכלכלית לצד קושי גובר לעמוד בקצב אספקת מערכות חימוש מתקדמות לאוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/sep/18/fire-zaporizhzhia-mall-ukraine-russian-attack-video",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21452362",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/abhorrent-acts-russian-forces-committed-widespread-sexual-violence-in-ukraine-since-full-scale-invasion-un-reports/",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1368870",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/09/18/ukraine-s-operation-vivaldi-pushed-russian-forces-back-around-lyman-in-the-donbas-now-both-armies-are-massing-troops-for-the-next-battles-farther-south",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054202/",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2190027",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130479",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47825",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4165709-russian-forces-launch-massive-overnight-attack-on-odesa-region.html",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/09/1168374",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1pfnxjfze",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-18T12:00:57+00:00",
  "changes": {
   "UKRAINE-09191052-01": {
    "kind": "new"
   },
   "UKRAINE-09191052-02": {
    "kind": "new"
   },
   "UKRAINE-09191052-03": {
    "kind": "new"
   },
   "UKRAINE-09191052-04": {
    "kind": "new"
   },
   "UKRAINE-09191052-05": {
    "kind": "possible",
    "prev": "מתקפת רחפנים אוקראינית נרחבת על מחוז רוסטוב ומרחב מוסקבה",
    "score": 0.467
   },
   "UKRAINE-09191052-06": {
    "kind": "new"
   },
   "UKRAINE-09191052-07": {
    "kind": "new"
   },
   "UKRAINE-09191052-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-19T1105__north-202609191105.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-19T11:05:55+00:00",
   "window": {
    "from": "2026-09-18T11:05:55+00:00",
    "to": "2026-09-19T11:05:55+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202609191105"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות צבאית ישראלית מתמשכת בדרום לבנון הכוללת תקיפות אוויריות, ירי ארטילרי, חיכוך מול צבא לבנון והריסות מבנים. במקביל, בסוריה מתגבשים הסדרי ביטחון חדשים מול רוסיה בלטקיה וגוברים המתחים הפנימיים על רקע רשתות חבלה חוצות-גבולות. כמו כן, נרשמים גילויי עוינות מצד התעשייה הביטחונית הטורקית כלפי מערכות לחימה ישראליות.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות מבצעית ישראלית עצימה הכוללת הפגזות, תקיפות אוויר, פעולות הריסה ומתיחות מול צבא לבנון"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "חשיפת רשתות גיוס והברחה לאימון פעילים והפעלת רחפנים בין המדינות"
    },
    {
     "name": "צפון-מערב סוריה (לטקיה)",
     "status": "הסדרת מעמד המתקנים הרוסיים והפיכתם למרכזי הדרכה משותפים עם הממשל הסורי"
    }
   ],
   "events": [
    {
     "id": "NORTH-09191105-01",
     "title": "תקיפות והפגזות ישראליות ברחבי דרום לבנון",
     "summary": "כוחות ישראליים ביצעו סדרת תקיפות אוויריות והפגזות ארטילריות על מספר יעדים בדרום לבנון, כולל פעולות הריסה והצתות מבנים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T08:44:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T08:44:55+00:00",
     "last_update_at": "2026-09-19T10:09:13+00:00",
     "what_is_not_verified": "אין אימות ישראלי רשמי לגבי כלל המוקדים שנפגעו וההריסות שבוצעו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/128932/",
       "published_at": "2026-09-19T10:09:13+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/128897/",
       "published_at": "2026-09-19T09:48:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130475",
       "published_at": "2026-09-19T09:32:23+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/128877/",
       "published_at": "2026-09-19T09:18:30+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/128867/",
       "published_at": "2026-09-19T08:44:55+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-09191105-02",
     "title": "עימות והשלכת רימוני הלם בין כוחות צה\"ל לצבא לבנון בדיר מימאס",
     "summary": "טנקים של צה\"ל התקדמו לעבר עמדת תצפית של צבא לבנון, השליכו רימוני הלם בקרבתה ויצרו דריכות צבאית בטרם עזבו.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T19:51:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T19:51:55+00:00",
     "last_update_at": "2026-09-19T04:19:15+00:00",
     "what_is_not_verified": "לא נמסרה תגובה ישראלית רשמית על השלכת רימוני ההלם ונסיבות האירוע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_b68ee99bc71adbcf",
       "url": "https://www.aa.com.tr/en/middle-east/lebanese-army-israeli-forces-on-alert-after-incident-in-southern-lebanon/4061685",
       "published_at": "2026-09-19T04:19:15+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_b68ee99bc71adbcf",
       "url": "https://www.newarab.com/news/israeli-lebanese-armies-face-south-lebanon-village",
       "published_at": "2026-09-18T19:51:55+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      }
     ]
    },
    {
     "id": "NORTH-09191105-03",
     "title": "טענות לבנוניות על הצתת בית החולים הממשלתי במיס אל-ג'בל בידי ישראל",
     "summary": "משרד הבריאות הלבנוני וכלי תקשורת טענו כי כוחות ישראליים הציתו והחריבו כליל את בית החולים הממשלתי במיס אל-ג'בל.",
     "axis": "ישראל - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T15:15:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T15:15:06+00:00",
     "last_update_at": "2026-09-19T04:37:45+00:00",
     "what_is_not_verified": "אין אימות או תגובה מצד צה\"ל לגבי השימוש במבנה והצתתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_d6643617bbb041ca",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-carry-out-demolitions-lebanon-set-fire-hospital",
       "published_at": "2026-09-19T04:37:45+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_d6643617bbb041ca",
       "url": "https://t.me/abualiexpress/130451",
       "published_at": "2026-09-18T16:15:16+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_d6643617bbb041ca",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958513/health-ministry-condemns-israeli-army-over-burning-of-meiss-el-jabal-g/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958513",
       "published_at": "2026-09-18T15:15:06+00:00"
      }
     ],
     "places": [
      {
       "name": "מיס אל-ג'בל, לבנון",
       "lat": 33.17,
       "lon": 35.5242
      }
     ]
    },
    {
     "id": "NORTH-09191105-04",
     "title": "הגשת כתבי אישום בלבנון נגד רשת להכשרת נאמני משטר אסד",
     "summary": "בית דין צבאי בלבנון הגיש כתבי אישום נגד חמישה בני אדם, בהם פעילי חיזבאללה וקצין סורי, בחשד להפעלת רשת ביטחונית ואימון שימוש ברחפנים לקראת פעולות חבלה בסוריה.",
     "axis": "לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T14:10:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T14:10:00+00:00",
     "last_update_at": "2026-09-18T14:20:57+00:00",
     "what_is_not_verified": "היקף הפעילות המעשי והמעורבות הישירה של חיזבאללה כארגון מתבססים על חשדות והליכי חקירה בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/lebanon-charges-5-alleged-hezbollah-operation-train-assad-loyalists",
       "published_at": "2026-09-18T14:20:57+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/958477/from-assad-era-kidnappings-to-alleged-terror-plot-lebanon-uncovers-cro/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958477",
       "published_at": "2026-09-18T14:10:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "טריפולי, לבנון",
       "lat": 34.4374,
       "lon": 35.8349
      }
     ]
    },
    {
     "id": "NORTH-09191105-05",
     "title": "ביקורת סורית-רוסית על יישום ההסכם להפיכת מתקנים בלטקיה למרכזי אימונים",
     "summary": "שר החוץ הסורי סקר בנמל התעופה הבינלאומי בלטקיה את יישום המזכר מול רוסיה בנוגע להפיכת מתקנים רוסיים במדינה למרכזי אימונים משותפים.",
     "axis": "סוריה - רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T17:52:22+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T17:52:22+00:00",
     "last_update_at": "2026-09-19T01:10:33+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים והיקף האימונים המשותפים לא פורטו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-russia-review-implementation-of-memorandum-on-russian-presence-in-latakia/4061664",
       "published_at": "2026-09-19T01:10:33+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/syrias-shibani-visits-latakia-airport-review-russia-deal-progress-what-know",
       "published_at": "2026-09-18T17:52:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09191105-06",
     "title": "חברת רחפנים טורקית הציגה טנק מרכבה ישראלי כמטרה לתקיפה",
     "summary": "חברה טורקית העוסקת בפיתוח רחפנים פרסמה סרטון תדמית המציג רחפן חמוש תוקף טנק ישראלי מסוג מרכבה, על רקע שיתופי פעולה עסקיים עם חברה ביטחונית אמריקאית.",
     "axis": "ישראל - טורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T07:59:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T07:59:43+00:00",
     "last_update_at": "2026-09-19T10:05:27+00:00",
     "what_is_not_verified": "לא ידוע האם כוונות החברה מייצגות מדיניות רשמית של ממשלת טורקיה או היערכות מבצעית להצבת האמל\"ח בסוריה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hy8hwasymx",
       "published_at": "2026-09-19T10:05:27+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130460",
       "published_at": "2026-09-19T07:59:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות משרד הבריאות הלבנוני על הצתה מכוונת והחרבת בית החולים במיס אל-ג'בל בידי צה\"ל",
    "מספר התקיפות המדויק והפגיעות בתשתיות בנבטיה אל-פוקא ובכפרים נוספים בדרום לבנון",
    "האפשרות שרחפני החברה הטורקית יוצבו בפועל בזירה הסורית מול כוחות ישראליים"
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
     "value": 3.0377,
     "unit": "ILS",
     "change_pct": 0.15,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת איומים ביטחוניים מצד חיזבאללה ושמירה על חופש פעולה באזורי החיץ",
      "אי-נסיגה מאזורי החיץ בדרום לבנון ובסוריה כל עוד נשקפת סכנה"
     ],
     "inferred": [
      "הפעלת לחץ פיזי מתמיד על קו הגבול הלבנוני למניעת התבססות מחדש של תשתיות צבאיות",
      "הרתעת צבא לבנון מניסיונות הגבלת התנועה של צה\"ל בשטח"
     ],
     "forecast": [
      "המשך פעולות הסיכול, התקיפות הממוקדות וההריסות בדרום לבנון",
      "שימור המתיחות המבצעית מול עמדות צבא לבנון בקו המגע"
     ]
    },
    {
     "actor": "לבנון (צבא וממשל)",
     "declared": [
      "פריסת כוחות צבא לבנון בדרום המדינה במסגרת הסכם המסגרת",
      "הוקעת הפרות הריבונות והפגיעה בתשתיות רפואיות ואזרחיות על ידי ישראל"
     ],
     "inferred": [
      "שאיפה למנוע הסלמה ישירה וחיכוך פנימי על רקע פירוק מנגנוני חיזבאללה",
      "בלימת התבססות רשתות עוינות הפועלות במרחב הסורי מתוך שטח המדינה"
     ],
     "forecast": [
      "המשך ביסוס עמדות תצפית בדרום לבנון תוך הימנעות מעימות יזום עם ישראל",
      "הגברת פעולות האכיפה נגד חוליות טרור והברחות בגבול סוריה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "יישום ההסכמים עם רוסיה להפעלת מרכזי אימונים משותפים בלטקיה",
      "ביטול מנגנוני שיפוט חריגים מתקופת שלטון אסד"
     ],
     "inferred": [
      "שיקום השליטה המרכזית והלגיטימציה השלטונית במחוזות השונים",
      "שמירה על משענת ביטחונית רוסית למניעת ערעור היציבות"
     ],
     "forecast": [
      "המשך הידוק שיתוף הפעולה הצבאי-אימוני עם כוחות רוסיים במערב המדינה",
      "התמודדות מתמשכת עם כיסי התנגדות, קשיי משילות ואיומי תאי טרור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/128867/",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/syrias-shibani-visits-latakia-airport-review-russia-deal-progress-what-know",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-russia-review-implementation-of-memorandum-on-russian-presence-in-latakia/4061664",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/958477/from-assad-era-kidnappings-to-alleged-terror-plot-lebanon-uncovers-cro/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958477",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-carry-out-demolitions-lebanon-set-fire-hospital",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/israeli-lebanese-armies-face-south-lebanon-village",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130460",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hy8hwasymx",
     "accessed_at": "2026-09-19T11:05:55+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-18T12:12:43+00:00",
  "changes": {
   "NORTH-09191105-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "ירי ארטילרי ותקיפות בדרום לבנון",
    "score": 1.0
   },
   "NORTH-09191105-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "התקדמות כוחות ישראל באזור דיר מימאס ונסיגת צבא לבנון",
    "score": 1.0
   },
   "NORTH-09191105-03": {
    "kind": "new"
   },
   "NORTH-09191105-04": {
    "kind": "new"
   },
   "NORTH-09191105-05": {
    "kind": "new"
   },
   "NORTH-09191105-06": {
    "kind": "new"
   }
  }
 }
};
