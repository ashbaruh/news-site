/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-26T0532__yemen-202609260532.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-26T05:32:59+00:00",
   "window": {
    "from": "2026-09-25T05:32:59+00:00",
    "to": "2026-09-26T05:32:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609260532"
   },
   "summary": "הלחימה בזירת תימן והחות'ים מתאפיינת בהסלמה הכוללת שיגורי טילים וכטב\"מים מצד החות'ים לעבר סעודיה, לצד התקדמות קרקעית של כוחות ממשלת תימן באזור טאעז. במקביל, סעודיה ומדינות אזוריות ובינלאומיות מהדקות את שיתוף הפעולה הצבאי וההגנתי, כולל פריסת אמצעים צרפתיים וקיומן של פסגות חירום ביטחוניות.",
   "fronts": [
    {
     "name": "החזית הפנימית בתימן",
     "status": "פעילה"
    },
    {
     "name": "חזית סעודיה-תימן",
     "status": "פעילה והסלמה"
    },
    {
     "name": "הזירה הימית (ים האדום ובאב אל-מנדב)",
     "status": "פעילה תחת מגבלות הצהרתיות של החות'ים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09260532-01",
     "title": "יירוט כטב\"מים וטילים בליסטיים לעבר סעודיה",
     "summary": "כוחות הקואליציה בסעודיה יירו והשמידו טילים בליסטיים וכטב\"מים ששוגרו על ידי החות'ים לעבר הממלכה.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-26T03:18:55+00:00",
     "last_update_at": "2026-09-26T05:11:04+00:00",
     "what_is_not_verified": "היקף הנזק המלא מעבר לדיווחים על היירוט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_c6ddf06a9136dd0c",
       "url": "https://www.maariv.co.il/breaking-news/article-1370847",
       "published_at": "2026-09-26T05:11:04+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c6ddf06a9136dd0c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-coalition-forces-claim-houthi-missile-targeting-khamis-mushait",
       "published_at": "2026-09-26T03:18:55+00:00"
      }
     ],
     "places": [
      {
       "name": "חמיס מושאיט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-09260532-02",
     "title": "התקדמות כוחות ממשלת תימן בטאעז",
     "summary": "כוחות ממשלת תימן דיווחו על השגת התקדמות בדרום מחוז טאעז, כולל שליטה על הר בזל המאפשר שליטה על קווי האספקה של החות'ים.",
     "axis": "תימן הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T16:36:18+00:00",
     "last_update_at": "2026-09-26T05:02:14+00:00",
     "what_is_not_verified": "השליטה המלאה בכל האזורים שהוכרזו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9b3918a88e7c07a3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/report-yemens-government-forces-regain-control-over-taiz-areas",
       "published_at": "2026-09-26T05:02:14+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_9b3918a88e7c07a3",
       "url": "https://www.sabanew.net/viewstory/152981",
       "published_at": "2026-09-25T16:36:18+00:00"
      }
     ],
     "places": [
      {
       "name": "טאעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-09260532-03",
     "title": "פניית נשיא תימן לגיוס והצעת חנינה",
     "summary": "נשיא תימן קרא לאזרחים להתגייס לשורות הצבא והציע חנינה כללית לעורקים ולמורדים החות'ים.",
     "axis": "תימן הפנימית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T17:56:45+00:00",
     "last_update_at": "2026-09-26T04:06:49+00:00",
     "what_is_not_verified": "מידת היענות הציבור והמורדים לקריאה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/26/yemens-government-offers-amnesty-to-houthi-defectors?traffic_source=rss",
       "published_at": "2026-09-26T04:06:49+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/26/yemeni-leader-urges-public-to-enlist-offers-amnesty-to-houthi-defectors?traffic_source=rss",
       "published_at": "2026-09-26T03:10:43+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20260925-yemen-president-calls-on-his-people-to-mobilise-against-iran-backed-houthis",
       "published_at": "2026-09-25T20:41:29+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130804",
       "published_at": "2026-09-25T17:56:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09260532-04",
     "title": "פגישת ראשי צבאות סעודיה, פקיסטן וטורקיה",
     "summary": "התקיימה פגישה בריאד של ראשי הצבאות במסגרת הברית הצבאית לחיזוק תיאום צבאי ומודיעיני עקב התקיפות החות'יות.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T09:58:37+00:00",
     "last_update_at": "2026-09-25T20:46:37+00:00",
     "what_is_not_verified": "החלטות מבצעיות סודיות שהתקבלו בפגישה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_65da733452833654",
       "url": "https://www.al-monitor.com/originals/2026/09/pakistani-saudi-turkish-chiefs-discuss-closer-military-ties",
       "published_at": "2026-09-25T20:46:37+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_20c8b1631c3cc0ee",
       "url": "https://www.newarab.com/news/saudi-turkey-pakistan-military-chiefs-discuss-houthi-attacks",
       "published_at": "2026-09-25T09:58:37+00:00"
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
     "id": "YEMEN-09260532-05",
     "title": "הבטחות החות'ים לאירופה ולארה\"ב בנוגע לספינות",
     "summary": "נציגי החות'ים העבירו הודעה לפיה אין כוונה לפגוע בספינות אירופיות או אמריקאיות בים האדום וכי פעילותם מכוונת נגד סעודיה וממשלת תימן בלבד.",
     "axis": "הים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T14:24:27+00:00",
     "last_update_at": "2026-09-25T19:58:09+00:00",
     "what_is_not_verified": "האם ההתחייבויות יכובדו בפועל לאורך זמן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-told-eu-they-have-no-intention-attack-european-ships-report",
       "published_at": "2026-09-25T19:58:09+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47996",
       "published_at": "2026-09-25T14:24:27+00:00"
      }
     ],
     "places": [
      {
       "name": "הים האדום",
       "lat": 20.2966,
       "lon": 38.5343
      }
     ]
    },
    {
     "id": "YEMEN-09260532-06",
     "title": "הכרזת צרפת על פריסת אמצעים הגנתיים בסעודיה",
     "summary": "נשיא צרפת הודיע על שליחת משאבים צבאיים ומערכות הגנה אווירית להגנה על מתקן הנפט בינבוע בסעודיה מפני איומי החות'ים.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T08:26:52+00:00",
     "last_update_at": "2026-09-25T14:04:20+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק להגעת הכוחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_cbabc4b107d826ab",
       "url": "https://www.france24.com/en/macron-says-military-resources-to-be-sent-to-saudi-arabia",
       "published_at": "2026-09-25T14:04:20+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_cbabc4b107d826ab",
       "url": "https://t.me/abualiexpress/130780",
       "published_at": "2026-09-25T08:26:52+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    }
   ],
   "not_verified": [
    "היקף ההשפעה המלא של הבטחות החות'ים למנוע פגיעה בספינות זרות",
    "התוצאות המבצעיות המדויקות של פגישת ראשי הצבאות בריאד"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "להפעיל לחץ על סעודיה וממשלת תימן",
      "לטעון כי הפעילות הימית מכוונת נגד סעודיה ולא נגד השיט הבינלאומי הכללי"
     ],
     "inferred": [
      "בידוד סעודיה באמצעות הימנעות מעימות ישיר עם מעצמות כמו ארה\"ב ואירופה",
      "הרחבת השליטה הטריטוריאלית בתימן"
     ],
     "forecast": [
      "המשך שיגורים לעבר סעודיה במקביל לניסיונות לתחום את העימות הימי"
     ]
    },
    {
     "actor": "סעודיה וממשלת תימן",
     "declared": [
      "תבוסה מוחלטת של המיליציה החות'ית",
      "שיקום ממשלת תימן המוכרת",
      "הגנה על התשתיות האזרחיות והכלכליות של הממלכה"
     ],
     "inferred": [
      "בניית קואליציה צבאית והגנתית רחבה (כולל טורקיה ופקיסטן, וסיוע מבריטניה ומצרפת) כדי לבלום את החות'ים"
     ],
     "forecast": [
      "הגברת הפעילות הצבאית המשולבת ופריסת אמצעי הגנה אוויריים נוספים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/26/yemeni-leader-urges-public-to-enlist-offers-amnesty-to-houthi-defectors?traffic_source=rss",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/pakistani-saudi-turkish-chiefs-discuss-closer-military-ties",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/macron-says-military-resources-to-be-sent-to-saudi-arabia",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1370847",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-told-eu-they-have-no-intention-attack-european-ships-report",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-turkey-pakistan-military-chiefs-discuss-houthi-attacks",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/152981",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130780",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47996",
     "accessed_at": "2026-09-26T05:32:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-25T15:53:48+00:00",
  "changes": {
   "YEMEN-09260532-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "יירוט טילי בליסטיים של החות'ים על ידי סעודיה",
    "score": 0.65
   },
   "YEMEN-09260532-02": {
    "kind": "new"
   },
   "YEMEN-09260532-03": {
    "kind": "new"
   },
   "YEMEN-09260532-04": {
    "kind": "new"
   },
   "YEMEN-09260532-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הבטחת החות'ים שלא לתקוף ספינות אמריקאיות ואירופאיות",
    "score": 1.0
   },
   "YEMEN-09260532-06": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "צרפת תשלח משאבים צבאיים להגנת מתקן הנפט בינבוע",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-26T0523__iran-202609260523.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-26T05:23:08+00:00",
   "window": {
    "from": "2026-09-25T05:23:08+00:00",
    "to": "2026-09-26T05:23:08+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609260523"
   },
   "summary": "הזירה מתאפיינת במגעים דיפלומטיים עקיפים ועימות מתמשך סביב סוגיות הגרעין, חופש השיט במצר הורמוז והסנקציות הכלכליות. איראן הציעה הצעה להפוגה ופתיחת נתיבי השיט, בעוד בארה\"ב נבחנת האפשרות לדחות הכרעות לכשלאחר בחירות האמצע ולחדש את הלחץ והתקיפות. במקביל, מתקיימות הגבלות תעופה אזוריות וחילופי איומים בין איראן לבין מדינות המפרץ.",
   "fronts": [
    {
     "name": "ציר איראן-ארה\"ב",
     "status": "פעיל עם מגעים עקיפים"
    },
    {
     "name": "ציר איראן והמפרץ",
     "status": "מתיחות וצעדים כלכליים-תעופתיים"
    }
   ],
   "events": [
    {
     "id": "IRAN-09260523-01",
     "title": "פגישת שרי חוץ של איראן ועומאן",
     "summary": "שר חוץ עומאן ושר החוץ של איראן דנו בניו יורק על סוגיות ניווט במצרי הורמוז ומאמצים דיפלומטיים להפגת המתיחות האזורית.",
     "axis": "ציר איראן-עומאן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-26T04:13:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-26T04:13:50+00:00",
     "last_update_at": "2026-09-26T04:13:50+00:00",
     "what_is_not_verified": "האם השיחות יבשילו להסכמות מעשיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5cdc8025ab7f7333",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/oman-and-iran-discuss-hormuz-navigation-regional-tensions-unga",
       "published_at": "2026-09-26T04:13:50+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      },
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-09260523-02",
     "title": "הצעת איראן לפתוח את מצר הורמוז",
     "summary": "איראן הציעה לארצות הברית תוכנית בת שבעה ימים לפתיחת מצר הורמוז וסיום הלחימה בתמורה לתנאים מסוימים והסרת סנקציות.",
     "axis": "ציר איראן-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T21:30:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T21:30:28+00:00",
     "last_update_at": "2026-09-26T04:28:58+00:00",
     "what_is_not_verified": "טיב התגובה הרשמית של ארה\"ב והאם ההצעה תתקבל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/26/iran-pitches-us-a-seven-day-end-to-the-war-at-unga?traffic_source=rss",
       "published_at": "2026-09-26T04:28:58+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/iran-awaits-us-move-after-wsj-report-says-trump-rejects-peace-plan",
       "published_at": "2026-09-26T02:46:30+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20260926-trump-reportedly-rejects-iran-s-7-day-plan-to-reopen-strait-of-hormuz",
       "published_at": "2026-09-26T02:06:07+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/iran-proposes-plan-reopen-hormuz-within-seven-days-minister",
       "published_at": "2026-09-25T21:30:28+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      },
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-09260523-03",
     "title": "אמירת נשיא איראן על פקחי האו\"ם",
     "summary": "נשיא איראן מסר ארצה כי מדינתו תאפשר לפקחי הגרעין של האו\"ם לשוב למדינה במסגרת הסכמים עתידיים.",
     "axis": "ציר איראן-או\"ם",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-26T03:36:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-26T03:36:50+00:00",
     "last_update_at": "2026-09-26T03:36:50+00:00",
     "what_is_not_verified": "האם הפקחים יורשו להיכנס בפועל ללא מגבלות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_cbs_news",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-says-iran-will-allow-un-nuclear-inspectors-return",
       "published_at": "2026-09-26T03:36:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09260523-04",
     "title": "השעיית טיסות לאיראן והגבלות תעופה",
     "summary": "עיראק ואיחוד האמירויות השעו טיסות של חברות תעופה איראניות עקב סנקציות אמריקאיות, ובכיר איראני הגיב באיומים על התעופה האזורית.",
     "axis": "ציר איראן והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T11:07:57+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T11:07:57+00:00",
     "last_update_at": "2026-09-25T13:51:55+00:00",
     "what_is_not_verified": "טווח ההשפעה המלא של האיומים האיראניים על מדינות האזור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130798",
       "published_at": "2026-09-25T13:51:55+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130792",
       "published_at": "2026-09-25T11:58:42+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkhu1cxcfl",
       "published_at": "2026-09-25T11:07:57+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ף, עיראק",
       "lat": 32.001,
       "lon": 44.33
      },
      {
       "name": "ארביל, עיראק",
       "lat": 36.1912,
       "lon": 44.0094
      },
      {
       "name": "סולימאניה, עיראק",
       "lat": 35.5571,
       "lon": 45.4426
      }
     ]
    },
    {
     "id": "IRAN-09260523-05",
     "title": "פגישת שרי החוץ של איראן וסעודיה",
     "summary": "שר החוץ של איראן נועד עם מקבילו הסעודי בשולי עצרת האו\"ם בניו יורק.",
     "axis": "ציר איראן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T20:29:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T20:29:30+00:00",
     "last_update_at": "2026-09-25T20:29:30+00:00",
     "what_is_not_verified": "תוכנם המלא של ההסכמות שהושגו בפגישה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_4f817e48cdd200d0",
       "url": "https://en.irna.ir/news/86274377/Foreign-Ministers-of-Iran-and-Saudi-Arabia-meet-in-New-York",
       "published_at": "2026-09-25T20:29:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    }
   ],
   "not_verified": [
    "דחיית ההצעה האיראנית בידי הנשיא טראמפ באופן סופי",
    "לוחות הזמנים המדויקים לחידוש התקיפות",
    "היקף התמיכה המלאה של אירופה בפעולות צבאיות"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "מניעת נשק גרעיני אינה אסורה דתית אך פיתוח נשק גרעיני הוא חראם",
      "פתיחת מצר הורמוז תמורת הסרת סנקציות"
     ],
     "inferred": [
      "שאיפה להקל את הלחץ הכלכלי באמצעות פשרות טקטיות",
      "ניסיון לבלום פעולות צבאיות נגדה דרך איומים אזוריים"
     ],
     "forecast": [
      "המשך ניסיונות תיווך דרך צדדים שלישיים",
      "החמרת הצעדים סביב תשתיות אזוריות אם הסנקציות יימשכו"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת השגת נשק גרעיני בידי איראן",
      "המשך הפעלת לחץ כלכלי"
     ],
     "inferred": [
      "המתנה לבחירות האמצע בטרם קבלת החלטות צבאיות דרמטיות",
      "דרישה לתמורות רחבות יותר מאשר הפוגה קצרה"
     ],
     "forecast": [
      "אפשרות לחידוש התקיפות בהתאם לשיקולים פוליטיים פנימיים",
      "המשך הסנקציות על חברות תעופה וגופים איראניים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/9/26/iran-pitches-us-a-seven-day-end-to-the-war-at-unga?traffic_source=rss",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/iran-proposes-plan-reopen-hormuz-within-seven-days-minister",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260926-trump-reportedly-rejects-iran-s-7-day-plan-to-reopen-strait-of-hormuz",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86274377/Foreign-Ministers-of-Iran-and-Saudi-Arabia-meet-in-New-York",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-says-iran-will-allow-un-nuclear-inspectors-return",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130792",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkhu1cxcfl",
     "accessed_at": "2026-09-26T05:23:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-25T15:31:22+00:00",
  "changes": {
   "IRAN-09260523-01": {
    "kind": "new"
   },
   "IRAN-09260523-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הצעת איראן לפתיחת מצר הורמוז תמורת הסרת סנקציות",
    "score": 0.65
   },
   "IRAN-09260523-03": {
    "kind": "new"
   },
   "IRAN-09260523-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "השעיית טיסות איראניות בשדות תעופה בעיראק ובמדינות נוספות",
    "score": 1.0
   },
   "IRAN-09260523-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-26T0531__ukraine-202609260531.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-26T05:31:09+00:00",
   "window": {
    "from": "2026-09-25T05:31:09+00:00",
    "to": "2026-09-26T05:31:09+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609260531"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת בלחימה עצימה הכוללת מתקפות כטב\"מים נרחבות של רוסיה לעבר ערי אוקראינה ופגיעה בתשתיות אזרחיות ודיגיטליות, לצד תקיפות נגד אוקראיניות המכוונות אל בתי זיקוק ומתקני אנרגיה בתוך שטח רוסיה. במקביל, מתנהלים קרבות קשים בחזית המזרחית, במיוחד בגזרת לימאן ודונייצק, בזמן שזירת המגע הדיפלומטי והבינלאומי עוסקת בסנקציות, בוויכוחים על השתתפות רוסית בכינוסים בינלאומיים ובסיוע צבאי מערבי לאוקראינה.",
   "fronts": [
    {
     "name": "חזית קייב ומרכז אוקראינה",
     "status": "פעילה (תקיפות כטב\"מים ונזק לתשתיות)"
    },
    {
     "name": "חזית המזרח (דונייצק / לימאן / ז'רבץ)",
     "status": "פעילה ולחץ התקפי אוקראיני"
    },
    {
     "name": "עומק רוסיה (קרסנודאר ופרם)",
     "status": "תחת מתקפות כטב\"מים על בתי זיקוק"
    },
    {
     "name": "המרחב האווירי (מפרץ פינלנד)",
     "status": "דריכות ויירוטים משותפים של שוודיה ופינלנד"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09260531-01",
     "title": "תקיפות כטב\"מים רוסיות בקייב",
     "summary": "כטב\"מים רוסיים פגעו במספר מוקדים בקייב, גרמו לפצועים, להרוגים ולנזק למבני מגורים, משרדים ומרכזי נתונים ותקשורת.",
     "axis": "מתקפות אוויריות ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T11:21:47+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T11:21:47+00:00",
     "last_update_at": "2026-09-26T05:18:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק וההיקף המלא של הנזק לתשתיות הדיגיטליות טרם אושרו סופית מכלל הגורמים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.ukrinform.net/rubric-ato/4168195-russian-drone-hits-between-apartment-building-and-store-in-kyivs-solomianskyi-district-injuries-reported.html",
       "published_at": "2026-09-26T05:18:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.ukrinform.net/rubric-ato/4168193-adf-neutralizes-134-russian-drones-used-to-attack-ukraine.html",
       "published_at": "2026-09-26T04:59:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/26/8055119/",
       "published_at": "2026-09-26T04:55:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_0ee66bd23856d09f",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/26/8055123/",
       "published_at": "2026-09-26T04:33:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.theguardian.com/world/2026/sep/26/russia-strikes-ukraine-digital-economy-attacks-isps-datacentres",
       "published_at": "2026-09-26T04:00:25+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.ukrinform.net/rubric-ato/4168181-office-building-catches-fire-in-kyiv-following-drone-attack.html",
       "published_at": "2026-09-26T03:59:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.bbc.co.uk/news/articles/c84gkwgk7d06o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-25T20:47:49+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-attacks-on-kyiv-kill-7-including-14-year-old-boy/",
       "published_at": "2026-09-25T17:51:58+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21488961",
       "published_at": "2026-09-25T14:01:31+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21488681",
       "published_at": "2026-09-25T11:44:38+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_5f1ee00dd4a4a2f4",
       "url": "https://www.ynet.co.il/news/article/rk6vvaxczg",
       "published_at": "2026-09-25T11:21:47+00:00"
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
     "id": "UKRAINE-09260531-02",
     "title": "תקיפת מתקני אנרגיה ברוסיה",
     "summary": "כטב\"מים אוקראיניים תקפו את בית הזיקוק בילסקי בקרסנודאר ואת בית הזיקוק בפרם, וגרמו לשריפות ולעצירת פעילות.",
     "axis": "תקיפת תשתיות אנרגיה בעומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T11:34:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T11:34:01+00:00",
     "last_update_at": "2026-09-26T01:06:20+00:00",
     "what_is_not_verified": "אישור רשמי מטעם שלטונות רוסיה על מלוא היקף הנזק בבתי הזיקוק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/drone-attack-reportedly-hits-russias-ilsky-oil-refinery-sparks-fire/",
       "published_at": "2026-09-26T01:06:20+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_kyiv_independent",
       "url": "https://tass.com/politics/2193179",
       "published_at": "2026-09-26T00:50:01+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_kyiv_independent",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/26/8055117/",
       "published_at": "2026-09-26T00:33:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_kyiv_independent",
       "url": "https://meduza.io/en/news/2026/09/25/reuters-russia-s-seventh-largest-refinery-halts-operations-after-a-ukrainian-drone-attack",
       "published_at": "2026-09-25T19:56:32+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/abualiexpress/130791",
       "published_at": "2026-09-25T11:34:01+00:00"
      }
     ],
     "places": [
      {
       "name": "פרם, רוסיה",
       "lat": 58.0109,
       "lon": 56.2319
      }
     ]
    },
    {
     "id": "UKRAINE-09260531-03",
     "title": "התקדמות ולחימה בגזרת לימאן",
     "summary": "הכוחות האוקראיניים הגבירו את הפעילות ההתקפית בגזרת לימאן וז'רבץ, ניסו לדחוק את הכוחות הרוסיים ולהתבסס באזורים סמוכים.",
     "axis": "חזית המזרח (דונייצק)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T18:17:32+00:00",
     "last_update_at": "2026-09-25T18:58:40+00:00",
     "what_is_not_verified": "היקף השליטה המדויק באזורים האפורים וביישובים השונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ribar_channel",
       "url": "https://t.me/alexmehacarmel/48005",
       "published_at": "2026-09-25T18:58:40+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ribar_channel",
       "url": "https://t.me/alexmehacarmel/48004",
       "published_at": "2026-09-25T18:17:32+00:00"
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
     "id": "UKRAINE-09260531-04",
     "title": "קריאת סנאטורים אמריקאים לביטול הזמנת פוטין ל-G20",
     "summary": "קבוצת סנאטורים דו-מפלגתית בארצות הברית קראה לנשיא דונלד טראמפ לחזור בו מההזמנה שהוענקה לוולדימיר פוטין להשתתף בפסגת ה-G20 במיאמי.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T20:47:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T20:47:15+00:00",
     "last_update_at": "2026-09-26T04:52:53+00:00",
     "what_is_not_verified": "האם פוטין יחליט להגיע לבסוף לפסגה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/us-senators-push-trump-to-rescind-putins-invitation-to-g20-summit/",
       "published_at": "2026-09-26T04:52:53+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_kyiv_independent",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/26/8055118/",
       "published_at": "2026-09-26T01:05:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_kyiv_independent",
       "url": "https://meduza.io/en/news/2026/09/25/bipartisan-group-of-14-u-s-senators-urges-trump-to-withdraw-putin-s-g20-invitation",
       "published_at": "2026-09-25T20:47:15+00:00"
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
     "id": "UKRAINE-09260531-05",
     "title": "אישור סיוע צבאי נוסף מארצות הברית",
     "summary": "ארצות הברית אישרה והודיעה על הזמנת ציוד צבאי נוסף בשווי עשרות מיליוני דולרים עבור אוקראינה.",
     "axis": "סיוע צבאי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-26T04:18:00+00:00",
     "last_update_at": "2026-09-26T04:18:00+00:00",
     "what_is_not_verified": "רשימת הציוד המלאה והמועד המדויק של הגעתו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-polytics/4168182-us-approves-more-than-90m-in-additional-military-aid-for-ukraine.html",
       "published_at": "2026-09-26T04:18:00+00:00"
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
     "id": "UKRAINE-09260531-06",
     "title": "הסרת סנקציות מאיש העסקים פרידמן ואוסמנוב והארכת המגבלות",
     "summary": "האיחוד האירופי הסיר את הסנקציות מעל שני מיליארדרים רוסים והאריך את שאר רשימת הסנקציות בשלוש שנים.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T20:12:51+00:00",
     "last_update_at": "2026-09-25T20:12:51+00:00",
     "what_is_not_verified": "לא ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_bcf4d11a076a8b70",
       "url": "https://meduza.io/en/cards/the-eu-lifted-sanctions-on-russian-billionaires-alisher-usmanov-and-mikhail-fridman-but-extended-restrictions-on-more-than-3-000-others-for-three-years-here-s-how-that-deal-works",
       "published_at": "2026-09-25T20:12:51+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    },
    {
     "id": "UKRAINE-09260531-07",
     "title": "ירוט משותף של מטוסים רוסים על ידי פינלנד ושוודיה",
     "summary": "פינלנד ושוודיה ביצעו לראשונה משימת יירוט משותפת של מטוסים רוסיים מעל מפרץ פינלנד.",
     "axis": "מרחב אווירי ואירופה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-26T02:40:33+00:00",
     "last_update_at": "2026-09-26T02:40:33+00:00",
     "what_is_not_verified": "לא ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/finland-sweden-launch-first-joint-intercept-of-russian-jets-over-gulf-of-finland/",
       "published_at": "2026-09-26T02:40:33+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ פינלנד",
       "lat": 59.8737,
       "lon": 26.323
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על מעורבות מנהיגים אירופאים בתוכניות שחיתות באוקראינה",
    "טענות גורמים רוסים כי המערב מכשיר גורמים באוקראינה לייצר פצצות מצעצועי ילדים",
    "דיווחים על כך שטראמפ קרא לזלנסקי לנסוע למוסקבה לפגישה עם פוטין",
    "ההערכות הרוסיות לגבי ההפסדים האוקראיניים והיכולת לפצות עליהם"
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
     "value": 1.1403,
     "unit": "USD",
     "change_pct": 0.32,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "להגיב על פרובוקציות ומתקפות אוקראיניות לפי אינטרסים רוסיים",
      "לפעול בהתאם לצרכים צבאיים וללא כוונה לתקוף את אירופה"
     ],
     "inferred": [
      "שחיקת הכלכלה והתשתיות הדיגיטליות של אוקראינה לקראת החורף",
      "פגיעה ביכולות הזיקוק והאספקה של הצבא האוקראיני והעמקת השליטה במזרח אוקראינה"
     ],
     "forecast": [
      "המשך מתקפות אוויריות על תשתיות חיוניות ואנרגיה באוקראינה",
      "המשך לחץ קרקעי בגזרות המזרחיות דוגמת לימאן"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "בחינת תנאים לחזרה אפשרית למשא ומתן בתנאים מסוימים",
      "הגנה על האוכלוסייה והתשתיות מפני תקיפות אוויריות"
     ],
     "inferred": [
      "פגוע במתקני אנרגיה ותעשייה צבאית בעומק רוסיה כדי לשבש את שרשרת האספקה שלה",
      "בלימת ההתקדמות הרוסית במזרח וביצוע התקפות נגד מקומיות בגזרת לימאן"
     ],
     "forecast": [
      "המשך שימוש בזהות כטב\"מים ארוכי טווח לתקיפת מטרות אסטרטגיות ברוסיה",
      "פנייה מתמשכת למדינות המערב לקבלת חיזוק הגנה אווירית וסיוע צבאי"
     ]
    },
    {
     "actor": "ארצות הברית והמערב",
     "declared": [
      "המשך תמיכה צבאית ומתן ציוד לאוקראינה",
      "שמירת לחץ כלכלי באמצעות סנקציות מורחבות על רוסיה"
     ],
     "inferred": [
      "התלבטות באשר לשילוב או בידוד דיפלומטי של רוסיה במסגרות כמו ה-G20",
      "האצת תהליכי חימוש והיערכות עצמית של אירופה עד שנת 2030"
     ],
     "forecast": [
      "העברת משלוחי סיוע נוספים לאוקראינה לפי לוחות זמנים מוגדרים",
      "עימות דיפלומטי מתמשך בנוגע להסרת סנקציות נקודתיות והזמנת מנהיגים רוסים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c84gkwgk7d06o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/26/russia-strikes-ukraine-digital-economy-attacks-isps-datacentres",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21488681",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/finland-sweden-launch-first-joint-intercept-of-russian-jets-over-gulf-of-finland/",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/cards/the-eu-lifted-sanctions-on-russian-billionaires-alisher-usmanov-and-mikhail-fridman-but-extended-restrictions-on-more-than-3-000-others-for-three-years-here-s-how-that-deal-works",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/26/8055118/",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2193179",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130791",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48004",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4168182-us-approves-more-than-90m-in-additional-military-aid-for-ukraine.html",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rk6vvaxczg",
     "accessed_at": "2026-09-26T05:31:09+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-25T15:42:53+00:00",
  "changes": {
   "UKRAINE-09260531-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפות כטב\"מים רוסיות בקייב",
    "score": 1.0
   },
   "UKRAINE-09260531-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים אוקראינית על מתקני אנרגיה ברוסיה",
    "score": 1.0
   },
   "UKRAINE-09260531-03": {
    "kind": "new"
   },
   "UKRAINE-09260531-04": {
    "kind": "new"
   },
   "UKRAINE-09260531-05": {
    "kind": "possible",
    "prev": "אישור סיוע ביטחוני אירופי",
    "score": 0.467
   },
   "UKRAINE-09260531-06": {
    "kind": "new"
   },
   "UKRAINE-09260531-07": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-26T0534__north-202609260534.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-26T05:34:04+00:00",
   "window": {
    "from": "2026-09-25T05:34:04+00:00",
    "to": "2026-09-26T05:34:04+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609260534"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחימה מתמשכת בין ישראל לחיזבאללה בלבנון, הכוללת תקיפות ארטילריות ואוויריות לצד היערכות מחודשת של צה\"ל והצהרות על שלבי לחימה חדשים. במקביל, מתנהלים מגעים מדיניים והצעות הפוגה בינלאומיות, בעוד שבזירת סוריה ניכרת רגיעה מסוימת סביב הפעלת מערכות הניווט האווירי.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה עם תקיפות הדדיות והיערכות קרקעית"
    },
    {
     "name": "חזית סוריה",
     "status": "יציבה יחסית עם התאמות בתשתיות התעופה"
    }
   ],
   "events": [
    {
     "id": "NORTH-09260534-01",
     "title": "תקיפות והפגזות בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות, הפגזות ארטילריות וירי פוספור בדרום לבנון במספר אזורים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T17:46:04+00:00",
     "last_update_at": "2026-09-26T02:56:06+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכל אתר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_anadolu_agency",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-use-phosphorus-shells-in-southern-lebanon-attacks/4069836",
       "published_at": "2026-09-26T02:56:06+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_anadolu_agency",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-carries-out-more-attacks-southern-lebanon",
       "published_at": "2026-09-25T22:34:09+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_anadolu_agency",
       "url": "https://english.almanar.com.lb/article/130742/",
       "published_at": "2026-09-25T17:46:04+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "צור",
       "lat": 33.2721,
       "lon": 35.1964
      }
     ]
    },
    {
     "id": "NORTH-09260534-02",
     "title": "זיהוי שווא ושיגור מיירט בדרום לבנון",
     "summary": "דובר צה\"ל דיווח על שיגור מיירט לעבר מטרה חשודה בדרום לבנון, ובתחקור ראשוני התברר כמדובר בזיהוי שווא.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T11:34:22+00:00",
     "last_update_at": "2026-09-25T19:56:14+00:00",
     "what_is_not_verified": "פרטי התחקור המלאים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_859ee34c29521bb1",
       "url": "https://www.maariv.co.il/breaking-news/article-1370804",
       "published_at": "2026-09-25T19:56:14+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_859ee34c29521bb1",
       "url": "https://t.me/idf_telegram/25225",
       "published_at": "2026-09-25T19:50:10+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_859ee34c29521bb1",
       "url": "https://t.me/idf_telegram/25223",
       "published_at": "2026-09-25T11:34:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09260534-03",
     "title": "הפעלת מערכות ניווט אווירי בסוריה",
     "summary": "השלמת כיול ובדיקות אוויריות למערכות ניווט חדשות בנמלי התעופה בדמשק ובחלב, לאחר הסרת מניעות ישראליות.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T20:21:02+00:00",
     "last_update_at": "2026-09-25T20:21:02+00:00",
     "what_is_not_verified": "ההסכמות המדויקות מול ישראל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_enab_baladi_middle_east_eye",
       "url": "https://english.enabbaladi.net/archives/2026/09/israel-backs-off-targeting-syrias-air-navigation-systems/",
       "published_at": "2026-09-25T20:21:02+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי דמשק",
       "lat": 33.4102,
       "lon": 36.5241
      },
      {
       "name": "נמל התעופה הבינלאומי חלב",
       "lat": 36.181,
       "lon": 37.2243
      }
     ]
    }
   ],
   "not_verified": [
    "דיווחים בלבנון על מעצרו של סוהיל אלחסן, מפקד כוחות הנמרים הסורי",
    "הפרטים המדויקים על הסרת ההתנגדות היראלית למערכות הניווט בסוריה"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "פגיעה בתשתיות חיזבאללה",
      "יצירת עומק הגנתי בדרום לבנון"
     ],
     "inferred": [
      "מניעת התבססות מחודשת של חזיתות תמיכה באזור הגבול",
      "המשך לחץ צבאי לאכיפת הסדרים"
     ],
     "forecast": [
      "המשך מבצעים נקודתיים בדרום לבנון",
      "שימור מוכנות לעימות רחב יותר בצפון ובמזרח"
     ]
    },
    {
     "actor": "חיזבאללה ולבנון",
     "declared": [
      "שמירת יכולת ההגנה והתנגדות לכיבוש",
      "יישום החלטות בינלאומיות כגון 1701 ונסיגה ישראלית מלאה"
     ],
     "inferred": [
      "היערכות מחדש של אמצעי לחימה באזורים צפוניים יותר בלבנון",
      "השתלבות בדיפלומטיה אזורית למניעת קריסה מלאה"
     ],
     "forecast": [
      "המשך מאבק מדיני וצבאי משולב",
      "ניסיון למנוע וואקום במידה ויאוצתו הסדרי כוחות האו\"ם"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/130742/",
     "accessed_at": "2026-09-26T05:34:04+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-use-phosphorus-shells-in-southern-lebanon-attacks/4069836",
     "accessed_at": "2026-09-26T05:34:04+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/israel-backs-off-targeting-syrias-air-navigation-systems/",
     "accessed_at": "2026-09-26T05:34:04+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1370804",
     "accessed_at": "2026-09-26T05:34:04+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-carries-out-more-attacks-southern-lebanon",
     "accessed_at": "2026-09-26T05:34:04+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25223",
     "accessed_at": "2026-09-26T05:34:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-25T16:01:49+00:00",
  "changes": {
   "NORTH-09260534-01": {
    "kind": "new"
   },
   "NORTH-09260534-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירט לעבר מטרה בדרום לבנון",
    "score": 1.0
   },
   "NORTH-09260534-03": {
    "kind": "possible",
    "prev": "פתיחת טיסות הלילה בשדות התעופה בסוריה",
    "score": 0.633
   }
  }
 }
};
