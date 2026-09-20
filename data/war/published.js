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
  "draft": "drafts/north/2026-09-20T0139__north-202609200139.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-20T01:39:10+00:00",
   "window": {
    "from": "2026-09-19T01:39:10+00:00",
    "to": "2026-09-20T01:39:10+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202609200139"
   },
   "summary": "בגזרה הצפונית נמשכת הלחימה בדרום לבנון, הכוללת פיצוץ מטענים נגד חיילי צה\"ל, תקיפות אוויריות בנבטיה והריסת מבנים בכפרי הגבול לצד אי-ודאות סביב נסיגת כוח יוניפי\"ל. בסוריה נרשמת דריכות ביטחונית בעקבות פיצוץ קטלני בבסיס צבאי בדיר א-זור, הפעלת נ\"מ במזרח המדינה ורדיפה משפטית וביטחונית של בכירי המשטר הקודם ופעילי טרור. טורקיה מצידה מגבירה את מעורבותה המדינית באזור תוך מתיחת ביקורת חריפה על הפעולות הישראליות בסוריה ובלבנון.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "חילופי אש ותקיפות תגובה של צה\"ל באזור נבטיה וכפרי הגבול בעקבות פגיעת מטען בכוחות"
    },
    {
     "name": "סוריה",
     "status": "אירועים ביטחוניים ממוקדים, פיצוצים במתקנים צבאיים ומעצרים של אנשי המשטר הקודם"
    },
    {
     "name": "הזירה המדינית הטורקית לגבי הצפון",
     "status": "ביקורת והצהרות עוינות של בכירים טורקים נגד הפעילות הצבאית של ישראל"
    }
   ],
   "events": [
    {
     "id": "NORTH-09200139-01",
     "title": "פציעת חיילי צה\"ל בפיצוץ מטען בדרום לבנון ותקיפת תגובה בנבטיה",
     "summary": "שני חיילי צה\"ל נפצעו קל עד בינוני מפיצוץ מטען סמוך לנחל סלוקי או בדרום לבנון, ובתגובה ביצעו מטוסי קרב תקיפה בנבטיה אלפוקא שכללה פגיעה בצוות אמבולנס.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T11:54:48+00:00",
     "last_update_at": "2026-09-19T18:06:52+00:00",
     "what_is_not_verified": "מידת הפציעה המדויקת של החיילים והנסיבות סביב הפעלת המטען בידי חזבאללה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/19/israel-targets-paramedics-in-southern-lebanon?traffic_source=rss",
       "published_at": "2026-09-19T18:06:52+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130500",
       "published_at": "2026-09-19T17:09:01+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94376",
       "published_at": "2026-09-19T14:15:26+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/new-israeli-airstrikes-hit-southern-lebanon-despite-us-deal/4061923",
       "published_at": "2026-09-19T11:54:48+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      }
     ]
    },
    {
     "id": "NORTH-09200139-02",
     "title": "תקיפות אוויריות והפגזות צה\"ל במספר כפרים בדרום לבנון",
     "summary": "צה\"ל ביצע תקיפות מהאוויר והפגזות ארטילריות לעבר בני חיאן, חאריס, חדאת'א, זוטר א-שרקיה וואדי זיבקין, לצד הריסת בתים במאיס אל-ג'בל, תלוסה ואל-מנצורי.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T14:01:35+00:00",
     "last_update_at": "2026-09-19T16:13:24+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומספר הנפגעים בהריסות המבנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3529aa91772819fa",
       "url": "https://english.almanar.com.lb/article/129077/",
       "published_at": "2026-09-19T16:13:24+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_3529aa91772819fa",
       "url": "https://t.me/abualiexpress/130497",
       "published_at": "2026-09-19T15:39:05+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_70df1f78f2fde7bc",
       "url": "https://english.almanar.com.lb/article/129067/",
       "published_at": "2026-09-19T15:12:29+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_da2d1f19538d1550",
       "url": "https://english.almanar.com.lb/article/129052/",
       "published_at": "2026-09-19T15:06:45+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_ec2e9f118a0f5bf1",
       "url": "https://english.almanar.com.lb/article/129042/",
       "published_at": "2026-09-19T14:01:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-09200139-03",
     "title": "הפעלת מערכות נ\"מ בבסיס צבאי ליד אל-חסכה בסוריה",
     "summary": "הופעלו מערכות הגנה אווירית בבסיס צבאי הממוקם בסמוך לעיר אל-חסכה שבצפון-מזרח סוריה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T23:55:40+00:00",
     "last_update_at": "2026-09-19T23:55:40+00:00",
     "what_is_not_verified": "סיבת הירי, זהות הכוחות המפעילים וזהות המטרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47852",
       "published_at": "2026-09-19T23:55:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09200139-04",
     "title": "מעצר גנרל ממשטר אסד לשעבר על ידי כוחות הביטחון הסוריים",
     "summary": "כוחות הביטחון בסוריה עצרו את אחמד מוחמד איסמעיל, מפקד בכיר לשעבר במשמר הרפובליקה, בעקבות חלקו במתקפות צבאיות על חלב, דרעא וע'וטה המזרחית במהלך מלחמת האזרחים.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T22:26:50+00:00",
     "last_update_at": "2026-09-20T00:09:39+00:00",
     "what_is_not_verified": "פרטי המעצר המדויקים ומיקומו הנוכחי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/former-syrian-general-who-led-attacks-rebels-during-civil-war-arrested",
       "published_at": "2026-09-20T00:09:39+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-says-arrested-assad-era-general-who-led-attacks-rebels",
       "published_at": "2026-09-19T22:26:50+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "ע'וטה המזרחית, סוריה",
       "lat": 33.4878,
       "lon": 36.3496
      }
     ]
    },
    {
     "id": "NORTH-09200139-05",
     "title": "פיצוץ באתר צבאי בדיר א-זור בסוריה וגרימת נפגעים",
     "summary": "פיצוץ שאירע באתר צבאי בעיירה עיאש שבמחוז דיר א-זור במזרח סוריה גרם למותם של אחד עשר חיילים.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T08:36:10+00:00",
     "last_update_at": "2026-09-19T14:55:18+00:00",
     "what_is_not_verified": "הסיבה לפיצוץ ונסיבות התרחשותו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/19/syria-says-blast-at-military-site-in-deir-az-zor-killed-11?traffic_source=rss",
       "published_at": "2026-09-19T14:55:18+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-says-11-soldiers-killed-in-friday-s-blast-at-army-site-in-deir-ez-zor/4062063",
       "published_at": "2026-09-19T14:30:13+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/958614/blast-at-syrian-military-site-kills-11-defence-ministry/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958614",
       "published_at": "2026-09-19T08:36:10+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      },
      {
       "name": "עיאש, סוריה",
       "lat": 35.6738,
       "lon": 36.0252
      }
     ]
    },
    {
     "id": "NORTH-09200139-06",
     "title": "מעצר מפקד חוליית דאעש במחוז דרעא",
     "summary": "כוחות ביטחון הפנים של סוריה עצרו את וליד אל-פלאח, ראש חוליה של ארגון דאעש, בחשד למעורבות בהריגת שלושה אנשי ביטחון.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T06:29:36+00:00",
     "last_update_at": "2026-09-19T06:29:36+00:00",
     "what_is_not_verified": "מועד ומיקום המעצר המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-arrests-ringleader-of-isis-terrorist-cell-involved-in-killing-3-security-personnel/4061706",
       "published_at": "2026-09-19T06:29:36+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-09200139-07",
     "title": "היערכות יוניפי\"ל לנסיגה ומחלוקת על המנגנון החלופי בדרום לבנון",
     "summary": "מפקד כוח יוניפי\"ל הדגיש את חשיבות העברת הסמכויות לצבא לבנון לקראת הנסיגה בסוף השנה, בעוד ישראל מסתייגת מכוח בינלאומי חדש ולבנון פועלת למנוע חלל ביטחוני.",
     "axis": "לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T12:20:57+00:00",
     "last_update_at": "2026-09-19T17:34:53+00:00",
     "what_is_not_verified": "זהות המדינות שישתתפו במנגנון הפיקוח העתידי בדרום לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
       "published_at": "2026-09-19T17:34:53+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
       "published_at": "2026-09-19T14:46:32+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/958610/who-will-fill-the-gap-after-unifil-lebanon-and-israel-remain-divided/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958610",
       "published_at": "2026-09-19T14:00:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958631/un-peacekeeping-chief-in-lebanon-says-smooth-transition-is-critical-be/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958631",
       "published_at": "2026-09-19T12:20:57+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-09200139-08",
     "title": "האשמות נשיא הפרלמנט הטורקי כלפי ישראל לגבי סוריה ולבנון",
     "summary": "יושב ראש הפרלמנט הטורקי האשים את ישראל בניסיונות לפלג את האזור ולבצע תקיפות בין היתר בסוריה ובלבנון, והצהיר כי טורקיה פועלת לאחד את האזור.",
     "axis": "טורקיה ומעורבות אזורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T01:21:44+00:00",
     "last_update_at": "2026-09-20T01:21:44+00:00",
     "what_is_not_verified": "אין אימות עצמאי לטענות הפוליטיות שהועלו בדברים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkish-foreign-minister-says-israel-should-not-chase-empty-dreams",
       "published_at": "2026-09-20T01:21:44+00:00"
      }
     ],
     "places": [
      {
       "name": "קרשהיר, טורקיה",
       "lat": 39.3303,
       "lon": 34.1266
      }
     ]
    }
   ],
   "not_verified": [
    "סיבת הפיצוץ המדויקת באתר הצבאי בדיר א-זור",
    "הגורמים המעורבים בירי הנ\"מ ליד חסכה",
    "מידת האחריות הישירה של חזבאללה להפעלת המטען בנחל סלוקי",
    "המנגנון הבינלאומי שיחליף את יוניפי\"ל בסיום שנת 2026",
    "דיווח על סירוב נשיא סוריה לבקשת הגנה סעודית"
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
      "תגובה לפגיעה בחיילי צה\"ל באמצעות תקיפת יעדים בדרום לבנון"
     ],
     "inferred": [
      "התנגדות לנוכחות כוח בינלאומי חדש בדרום לבנון והעדפת מגע ישיר מול צבא לבנון",
      "שימור היתרון הצבאי והאיכותי ופגיעה בתשתיות עוינות סמוך לגבול"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות ופעולות חישוף והריסה בדרום לבנון כמענה לכל פעילות חבלנית"
     ]
    },
    {
     "actor": "לבנון (ממשל וצבא)",
     "declared": [
      "מניעת חלל ביטחוני בדרום לבנון ודרישה לפיקוח אמריקאי ובינלאומי"
     ],
     "inferred": [
      "חשש מהפיכת דרום המדינה למוקד עימות ישיר ללא הגנה ופיקוח בינלאומיים"
     ],
     "forecast": [
      "המשך מגעים דיפלומטיים עם וושינגטון בניסיון לגבש מנגנון בינלאומי לפני עזיבת יוניפי\"ל"
     ]
    },
    {
     "actor": "סוריה (השלטון הנוכחי)",
     "declared": [
      "העמדה לדין של פעילי ובכירי המשטר הקודם שנחשדו בפשעים בזמן מלחמת האזרחים",
      "לחימה בשרידי תאי הטרור של דאעש"
     ],
     "inferred": [
      "ביסוס משילות פנימית והרחקת גורמים המזוהים עם שלטונו של בשאר אל-אסד"
     ],
     "forecast": [
      "המשך מעצרים של קצינים לשעבר לצד ניסיונות להשתלט על תקריות ביטחוניות בבסיסים מרוחקים"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "איחוד עמי האזור ומניעת פילוגו בידי ישראל"
     ],
     "inferred": [
      "הגברת ההשפעה המדינית והגיאו-פוליטית בסוריה ובלבנון על חשבון פעילות ישראלית"
     ],
     "forecast": [
      "המשך ביקורת פומבית חריפה נגד צעדי ישראל במדינות הגובלות בה מצפון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/19/syria-says-blast-at-military-site-in-deir-az-zor-killed-11?traffic_source=rss",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129042/",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-arrests-ringleader-of-isis-terrorist-cell-involved-in-killing-3-security-personnel/4061706",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/958631/un-peacekeeping-chief-in-lebanon-says-smooth-transition-is-critical-be/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958631",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkish-foreign-minister-says-israel-should-not-chase-empty-dreams",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130497",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47852",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94376",
     "accessed_at": "2026-09-20T01:39:10+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-19T11:05:55+00:00",
  "changes": {
   "NORTH-09200139-01": {
    "kind": "new"
   },
   "NORTH-09200139-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפות והפגזות ישראליות ברחבי דרום לבנון",
    "score": 1.0
   },
   "NORTH-09200139-03": {
    "kind": "new"
   },
   "NORTH-09200139-04": {
    "kind": "possible",
    "prev": "הגשת כתבי אישום בלבנון נגד רשת להכשרת נאמני משטר אסד",
    "score": 0.467
   },
   "NORTH-09200139-05": {
    "kind": "possible",
    "prev": "עימות והשלכת רימוני הלם בין כוחות צה\"ל לצבא לבנון בדיר מימאס",
    "score": 0.633
   },
   "NORTH-09200139-06": {
    "kind": "new"
   },
   "NORTH-09200139-07": {
    "kind": "new"
   },
   "NORTH-09200139-08": {
    "kind": "new"
   }
  }
 }
};
