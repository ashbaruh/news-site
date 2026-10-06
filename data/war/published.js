/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-06T1227__yemen-202610061227.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-06T12:27:07+00:00",
   "window": {
    "from": "2026-10-05T12:27:07+00:00",
    "to": "2026-10-06T12:27:07+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "yemen-202610061227"
   },
   "summary": "המלחמה בתימן הגיעה לשלב מכריע סביב מצר באב אל-מנדב: הכוחות הנתמכים בידי סעודיה טוענים שכבשו מחדש את מוחא ועמדות ליד המצר, והחות'ים מכחישים. במקביל החות'ים מרחיבים את התקיפות לעומק סעודיה, והקואליציה מגיבה בתקיפות אוויריות על צנעא וחודיידה. הסכסוך הופך אזורי: טורקיה ופקיסטן פורסות כוחות בסעודיה, וארה\"ב מספקת מודיעין.",
   "fronts": [
    {
     "name": "החוף המערבי ובאב אל-מנדב",
     "status": "מתקפת נגד של כוחות הממשלה; השליטה במוחא שנויה במחלוקת."
    },
    {
     "name": "תקיפות על סעודיה",
     "status": "שדות תעופה בדרום הממלכה נפגעו; טענות לתקיפה בריאד לא אושרו."
    },
    {
     "name": "תקיפות אוויריות בצפון תימן",
     "status": "גל תקיפות של הקואליציה על צנעא, חודיידה וצעדה."
    },
    {
     "name": "הים האדום",
     "status": "מסוק אמריקאי נעלם; הספנות במצר בסיכון."
    },
    {
     "name": "הומניטרי",
     "status": "כמעט אלף הרוגים ו-184 אלף עקורים מאז חידוש הלחימה."
    }
   ],
   "events": [
    {
     "id": "YEMEN-10061227-01",
     "title": "צבא ממשלת תימן הודיע שכבש מחדש את מוחא ואזורים ליד באב אל-מנדב",
     "summary": "הכוחות הנתמכים בידי סעודיה הודיעו שהשתלטו על עיר הנמל מוחא, על ד'ובאב ועל עמדות סביב מצר באב אל-מנדב, וגם על שלושה הרים באזור חיפאן. החות'ים מכחישים ומכנים זאת \"גבורה מפוברקת\".",
     "axis": "החוף המערבי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T17:49:09+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T17:49:09+00:00",
     "last_update_at": "2026-10-06T09:30:16+00:00",
     "what_is_not_verified": "אין אימות עצמאי לשליטה בשטח; החות'ים מקיפים את מוחא משלושה כיוונים לפי מומחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemen-military-announces-retaking-mokha-houthis-amid-red-sea-offensive",
       "published_at": "2026-10-05T17:49:09+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
       "published_at": "2026-10-05T19:17:05+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/05/saudi-forces-recapture-key-areas-strait-houthis-yemen",
       "published_at": "2026-10-05T19:44:01+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/6/yemen-war-whats-the-latest-on-the-battlefield",
       "published_at": "2026-10-06T08:27:51+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-claim-attack-riyadh-airport-deny-losing-territory",
       "published_at": "2026-10-06T09:30:16+00:00"
      }
     ],
     "places": [
      {
       "name": "מוחא",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    },
    {
     "id": "YEMEN-10061227-02",
     "title": "שדות התעופה בג'יזאן ובנג'ראן הותקפו, שלושה פצועים קל",
     "summary": "סעודיה אישרה שהשדות בג'יזאן ובנג'ראן הותקפו ושלושה בני אדם נפצעו קל. החות'ים טוענים שתקפו גם את שדה התעופה בריאד, את אבהא, את חמיס מושייט ואת בית הזיקוק בראביע. תושבים דיווחו על פיצוץ בצפון ריאד.",
     "axis": "תקיפות על סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:27:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:27:51+00:00",
     "last_update_at": "2026-10-06T09:39:00+00:00",
     "what_is_not_verified": "סעודיה לא אישרה פגיעה בריאד, באבהא או בראביע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/6/yemen-war-whats-the-latest-on-the-battlefield",
       "published_at": "2026-10-06T08:27:51+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-claim-attack-riyadh-airport-deny-losing-territory",
       "published_at": "2026-10-06T09:30:16+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosion-heard-north-saudi-capital-riyadh-residents-afp",
       "published_at": "2026-10-06T09:07:11+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/liveblog/202610033293",
       "published_at": "2026-10-06T09:39:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10061227-03",
     "title": "הקואליציה בהובלת סעודיה תקפה בצנעא, בחודיידה ובצעדה",
     "summary": "הקואליציה דיווחה על גל תקיפות אוויריות רחב נגד מטרות של החות'ים, בהן מחסני נשק וסירות נפץ בחודיידה ומתקנים בצנעא ובצעדה.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T15:21:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T15:21:54+00:00",
     "last_update_at": "2026-10-06T11:35:00+00:00",
     "what_is_not_verified": "מספר הנפגעים והנזק לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7f09a1e5c9d970ad",
       "url": "https://www.sabanew.net/viewstory/153538",
       "published_at": "2026-10-05T23:08:02+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_7f09a1e5c9d970ad",
       "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
       "published_at": "2026-10-05T15:21:54+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_7f09a1e5c9d970ad",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/6/iran-war-live-yemen-forces-reclaim-strategic-port-city-mocha-from-houthis",
       "published_at": "2026-10-06T11:35:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "חודיידה",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-10061227-04",
     "title": "טורקיה ופקיסטן שולחות כוחות לסעודיה במסגרת ברית מכה",
     "summary": "סעודיה, טורקיה ופקיסטן החלו ליישם את מנגנון ההגנה של ברית מכה, וטורקיה ופקיסטן פורסות כוחות בממלכה. ארה\"ב מספקת מודיעין, ונשיאת הנציבות האירופית גינתה את תקיפות החות'ים.",
     "axis": "בריתות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T06:32:35+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T06:32:35+00:00",
     "last_update_at": "2026-10-06T09:39:00+00:00",
     "what_is_not_verified": "היקף הכוחות ומועד הגעתם לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-forces-advance-against-houthis-hormuz-deadlocked",
       "published_at": "2026-10-06T06:32:35+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/6/yemen-war-whats-the-latest-on-the-battlefield",
       "published_at": "2026-10-06T08:27:51+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/liveblog/202610033293",
       "published_at": "2026-10-06T09:39:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10061227-05",
     "title": "מסוק של הצי האמריקאי נעלם מעל הים האדום",
     "summary": "מסוק סיקורסקי של הצי האמריקאי הכריז על מצב חירום ונעלם מנתוני המעקב הפומביים מעל הים האדום.",
     "axis": "הים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T06:16:31+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T06:16:31+00:00",
     "last_update_at": "2026-10-06T06:16:31+00:00",
     "what_is_not_verified": "גורל הצוות והסיבה לתקלה לא ידועים; אין סימן לפגיעה של החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-navy-helicopter-disappears-after-declaring-emergency-over-red-sea",
       "published_at": "2026-10-06T06:16:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10061227-06",
     "title": "ארגון הבריאות העולמי: 959 הרוגים ו-184 אלף עקורים",
     "summary": "לפי נתוני ארגון הבריאות העולמי, מאז חידוש הלחימה נהרגו 959 בני אדם, יותר מ-4,200 נפצעו ויותר מ-184 אלף עקורים.",
     "axis": "הומניטרי",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:27:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:27:51+00:00",
     "last_update_at": "2026-10-06T08:27:51+00:00",
     "what_is_not_verified": "הנתונים חלקיים בגלל הקושי לאסוף מידע בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/6/yemen-war-whats-the-latest-on-the-battlefield",
       "published_at": "2026-10-06T08:27:51+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "השליטה בפועל במוחא ובד'ובאב.",
    "תקיפת שדה התעופה בריאד ובית הזיקוק בראביע.",
    "גורל צוות המסוק האמריקאי.",
    "היקף הכוחות הטורקיים והפקיסטניים."
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "להמשיך לתקוף את סעודיה",
      "להחזיק בשטחים סביב באב אל-מנדב"
     ],
     "inferred": [
      "להעלות לסעודיה את מחיר המלחמה",
      "לשמור על השליטה במצר כקלף לחץ אזורי לצד איראן"
     ],
     "forecast": [
      "המשך שיגורים לעומק סעודיה וניסיון לכתר את מוחא"
     ]
    },
    {
     "actor": "סעודיה וממשלת תימן",
     "declared": [
      "החזרת השטחים שאבדו",
      "הגנה על הממלכה"
     ],
     "inferred": [
      "להרחיק את החות'ים מהמצר ומנתיב הנפט לינבוע"
     ],
     "forecast": [
      "המשך תקיפות אוויריות וניסיון להתקדם לד'ובאב"
     ]
    },
    {
     "actor": "טורקיה ופקיסטן",
     "declared": [
      "יישום ברית מכה"
     ],
     "inferred": [
      "חיזוק מעמד אזורי בלי להיכנס ללחימה ישירה"
     ],
     "forecast": [
      "פריסה בעיקר הגנתית בתוך סעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/6/yemen-war-whats-the-latest-on-the-battlefield",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-claim-attack-riyadh-airport-deny-losing-territory",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/liveblog/202610033293",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-navy-helicopter-disappears-after-declaring-emergency-over-red-sea",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-forces-advance-against-houthis-hormuz-deadlocked",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153538",
     "accessed_at": "2026-10-06T12:27:07+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-06T09:35:54+00:00",
  "changes": {
   "YEMEN-10061227-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "השתלטות כוחות ממשלת תימן על באב אל-מנדב ואל-מוחה",
    "score": 1.0
   },
   "YEMEN-10061227-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפה על שדה התעופה בריאד ומתקנים בסעודיה",
    "score": 1.0
   },
   "YEMEN-10061227-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפות אוויריות נרחבות של הקואליציה בראשות סעודיה בתימן",
    "score": 1.0
   },
   "YEMEN-10061227-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "כינוס ברית מכה והחלטת פקיסטן וטורקיה להעמיד כוחות",
    "score": 1.0
   },
   "YEMEN-10061227-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "היעלמות מסוק של הצי האמריקאי מעל הים האדום",
    "score": 1.0
   },
   "YEMEN-10061227-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-06T1209__iran-202610061209.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-06T12:09:36+00:00",
   "window": {
    "from": "2026-10-05T12:09:36+00:00",
    "to": "2026-10-06T12:09:36+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "iran-202610061209"
   },
   "summary": "ביממה האחרונה לא דווח על חילופי אש ישירים בין איראן לבין ישראל או ארה\"ב. המאבק עבר לזירות עקיפות: החות'ים ממשיכים לתקוף בסעודיה, ריאד מזרימה נפט בצינור שעוקף את הורמוז, ובטהרן מקדמים בפרלמנט פרישה מה-NPT ומחפשים דרכים לעקוף סנקציות דרך רוסיה. במקביל פקיסטן ממשיכה לתווך, ובפנים המשטר מחמיר מול המחאות.",
   "fronts": [
    {
     "name": "גרעין",
     "status": "הצעות לפרישה מהירה מה-NPT הוגשו בפרלמנט; עדיין לא הוחלט."
    },
    {
     "name": "הורמוז ונפט",
     "status": "סעודיה מגדילה הזרמה בצינור מזרח-מערב לינבוע, נתיב עוקף להורמוז."
    },
    {
     "name": "שלוחות מול המפרץ",
     "status": "החות'ים תוקפים שדות תעופה בדרום סעודיה; הקואליציה מגיבה בצנעא."
    },
    {
     "name": "דיפלומטיה וסנקציות",
     "status": "פקיסטן מתווכת; ארה\"ב ובעלות בריתה מגנות; רשת נפט של המשמרות עברה לרוסיה לפי תחקיר."
    },
    {
     "name": "פנים",
     "status": "גזרי דין מוות למפגינים והחמרה באכיפה."
    }
   ],
   "events": [
    {
     "id": "IRAN-10061209-01",
     "title": "ארה\"ב ותשע מדינות ביבשת אמריקה גינו את איראן",
     "summary": "ארצות הברית ותשע מדינות נוספות ביבשת אמריקה פרסמו הצהרה משותפת שמגנה את מה שהגדירו פעולות טרור והשפעה זדונית של איראן.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:11:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:11:03+00:00",
     "last_update_at": "2026-10-06T07:11:03+00:00",
     "what_is_not_verified": "לא פורסמו צעדים מעשיים בעקבות ההצהרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-and-several-allies-say-iran-committed-terrorist-actions",
       "published_at": "2026-10-06T07:11:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10061209-02",
     "title": "הצעות חוק לפרישה מהירה מה-NPT הוגשו בפרלמנט האיראני",
     "summary": "חבר פרלמנט איראני מסר שהוגשו שתי הצעות במסלול מהיר לפרישה מהאמנה למניעת הפצת נשק גרעיני, וחבר פרלמנט אחר טען שבציבור גוברת הדרישה לנשק גרעיני.",
     "axis": "גרעין",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T09:09:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T09:09:00+00:00",
     "last_update_at": "2026-10-06T09:09:00+00:00",
     "what_is_not_verified": "לא ידוע אם ההצעות יעלו להצבעה ומה עמדת המנהיגות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/liveblog/202610033293",
       "published_at": "2026-10-06T09:09:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10061209-03",
     "title": "פקיסטן תדרכה את מזכ\"ל האו\"ם על התיווך בין ארה\"ב לאיראן",
     "summary": "סגן ראש ממשלת פקיסטן עדכן את גוטרש על תפקיד איסלאמאבאד כמתווכת בין וושינגטון לטהרן.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:34:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:34:00+00:00",
     "last_update_at": "2026-10-06T08:34:00+00:00",
     "what_is_not_verified": "מצב המגעים בפועל לא פורסם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/liveblog/202610033293",
       "published_at": "2026-10-06T08:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10061209-04",
     "title": "תחקיר: רשת מכירת נפט של משמרות המהפכה הועברה לרוסיה",
     "summary": "לפי תחקיר של איראן אינטרנשיונל, מפקד בכיר במשמרות המהפכה ובנו סייעו לשמר רשת מכירת נפט של מודיעין המשמרות ולהעביר את הכספים שלה מאיחוד האמירויות לבנק רוסי, כדי לעקוף את הסנקציות.",
     "axis": "סנקציות ונפט",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T03:41:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T03:41:00+00:00",
     "last_update_at": "2026-10-06T03:41:00+00:00",
     "what_is_not_verified": "הנתונים מבוססים על תחקיר של כלי תקשורת אחד ולא אומתו באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610060772",
       "published_at": "2026-10-06T03:41:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10061209-05",
     "title": "צינור מזרח-מערב הסעודי הזרים 5.8 מיליון חביות לינבוע",
     "summary": "שר האנרגיה הסעודי מסר שעד בוקר יום שלישי הוזרמו 5.8 מיליון חביות לנמל ינבוע בים האדום, נתיב שעוקף את מצר הורמוז.",
     "axis": "הורמוז ונפט",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T09:14:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T09:14:00+00:00",
     "last_update_at": "2026-10-06T09:14:00+00:00",
     "what_is_not_verified": "הנתון סעודי ולא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/liveblog/202610033293",
       "published_at": "2026-10-06T09:14:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "IRAN-10061209-06",
     "title": "שדות תעופה בדרום סעודיה הותקפו, החות'ים תקפו גם את אבהא לטענתם",
     "summary": "שדות התעופה בג'יזאן ובנג'ראן הותקפו ונגרמו נזק ופציעות, והקואליציה בהובלת סעודיה תקפה בצנעא. החות'ים, בעלי בריתה של איראן, טענו גם לשיגור טיל לאבהא.",
     "axis": "שלוחות מול המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T11:35:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T11:35:00+00:00",
     "last_update_at": "2026-10-06T11:35:00+00:00",
     "what_is_not_verified": "סעודיה לא אישרה פגיעה באבהא; מספר הפצועים לא פורסם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/6/iran-war-live-yemen-forces-reclaim-strategic-port-city-mocha-from-houthis",
       "published_at": "2026-10-06T11:35:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אבהא",
       "lat": 18.2164,
       "lon": 42.5044
      }
     ]
    },
    {
     "id": "IRAN-10061209-07",
     "title": "שר החוץ האיראני נפגש עם מתאם האו\"ם ללבנון",
     "summary": "עראקצ'י אירח בטהרן את מתאם האו\"ם המיוחד ללבנון, ז'אן ארנו.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T09:19:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T09:19:00+00:00",
     "last_update_at": "2026-10-06T09:19:00+00:00",
     "what_is_not_verified": "תוכן הפגישה לא פורסם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/liveblog/202610033293",
       "published_at": "2026-10-06T09:19:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10061209-08",
     "title": "גזר דין מוות למפגין בבוג'נורד",
     "summary": "בית משפט מהפכני גזר דין מוות על תושב בוג'נורד בן 38 בגלל תמיכה במחאות של ינואר.",
     "axis": "פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:36:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:36:39+00:00",
     "last_update_at": "2026-10-06T07:36:39+00:00",
     "what_is_not_verified": "פרטי המשפט לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610064931",
       "published_at": "2026-10-06T07:36:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10061209-09",
     "title": "איש דת קיצוני שוחרר בערבות",
     "summary": "הרשויות שחררו בערבות את איש הדת מוחמד באקר ח'ראזי אחרי כחודש במעצר.",
     "axis": "פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:55:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:55:39+00:00",
     "last_update_at": "2026-10-06T07:55:39+00:00",
     "what_is_not_verified": "סיבת המעצר והשחרור לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610069977",
       "published_at": "2026-10-06T07:55:39+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הפצועים בתקיפות על שדות התעופה בסעודיה.",
    "פגיעה בשדה התעופה באבהא — טענת החות'ים בלבד.",
    "היקף רשת הנפט של משמרות המהפכה — תחקיר עיתונאי אחד.",
    "מצב המגעים בתיווך פקיסטן."
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "לא לנהל מגעים עם ארה\"ב בתנאים הנוכחיים",
      "לבחון פרישה מהאמנה למניעת הפצת נשק גרעיני"
     ],
     "inferred": [
      "להפעיל לחץ על המפרץ דרך החות'ים במקום עימות ישיר",
      "לשמור על הכנסות נפט למרות הסנקציות דרך רוסיה"
     ],
     "forecast": [
      "איום ה-NPT ישמש קלף מיקוח ולא בהכרח יבוצע בקרוב",
      "תקיפות השלוחות על סעודיה צפויות להימשך"
     ]
    },
    {
     "actor": "ארה\"ב ובעלות בריתה",
     "declared": [
      "גינוי פעולות איראן",
      "מניעת נשק גרעיני מאיראן"
     ],
     "inferred": [
      "בידוד דיפלומטי של טהרן",
      "השארת ערוץ התיווך הפקיסטני פתוח"
     ],
     "forecast": [
      "הידוק סנקציות על ערוצי הכספים דרך רוסיה"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "המשך יצוא נפט דרך הים האדום"
     ],
     "inferred": [
      "להפחית תלות בהורמוז",
      "להחזיר את החות'ים לאחור דרך הכוחות בתימן"
     ],
     "forecast": [
      "הגדלה נוספת בהזרמה בצינור לינבוע"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/6/iran-war-live-yemen-forces-reclaim-strategic-port-city-mocha-from-houthis",
     "accessed_at": "2026-10-06T12:09:36+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610069977",
     "accessed_at": "2026-10-06T12:09:36+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-and-several-allies-say-iran-committed-terrorist-actions",
     "accessed_at": "2026-10-06T12:09:36+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-05T23:40:42+00:00",
  "changes": {
   "IRAN-10061209-01": {
    "kind": "new"
   },
   "IRAN-10061209-02": {
    "kind": "new"
   },
   "IRAN-10061209-03": {
    "kind": "new"
   },
   "IRAN-10061209-04": {
    "kind": "new"
   },
   "IRAN-10061209-05": {
    "kind": "new"
   },
   "IRAN-10061209-06": {
    "kind": "new"
   },
   "IRAN-10061209-07": {
    "kind": "new"
   },
   "IRAN-10061209-08": {
    "kind": "new"
   },
   "IRAN-10061209-09": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-06T1226__ukraine-202610061226.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-06T12:26:06+00:00",
   "window": {
    "from": "2026-10-05T12:26:06+00:00",
    "to": "2026-10-06T12:26:06+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "ukraine-202610061226"
   },
   "summary": "רוסיה ואוקראינה ממשיכות להחליף תקיפות על העורף ועל התשתיות. רוסיה פוגעת בערים, בגשרים ובספנות, ואוקראינה תוקפת מתקני דלק עמוק ברוסיה, כולל ליד מוסקבה. הים השחור הופך לזירה מסוכנת לספנות אזרחית, והתקיפות כבר הגיעו לאזור הכלכלי של בולגריה, מדינה בנאט\"ו. במדינות השכנות לרוסיה הדאגה גוברת, וליטא החלה לבחון ביטול האיסור על נשק גרעיני.",
   "fronts": [
    {
     "name": "תקיפות בעורף האוקראיני",
     "status": "13 הרוגים ביממה; חרקוב הכי מותקפת."
    },
    {
     "name": "תקיפות בעומק רוסיה",
     "status": "מחסן הדלק הגדול במחוז מוסקבה עלה באש."
    },
    {
     "name": "חזית דרום וגשרים",
     "status": "גשר בזפוריז'יה נסגר; נזק לגשר צ'ונהר לקרים."
    },
    {
     "name": "הים השחור",
     "status": "שלוש ספינות נפגעו ביום אחד, אחת טבעה מול בולגריה."
    },
    {
     "name": "נאט\"ו ואירופה",
     "status": "ליטא בוחנת הסרת האיסור על נשק גרעיני."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10061226-01",
     "title": "13 הרוגים ו-104 פצועים בתקיפות רוסיות ביממה",
     "summary": "תקיפות רוסיות ביממה האחרונה הרגו 13 בני אדם ופצעו 104 ברחבי אוקראינה. הכי קשה היה במחוז חרקוב, עם 7 הרוגים ועשרות פצועים. בקריבי ריה נפגע בית חולים, ובקרמטורסק רחפן פגע באמבולנס ובבניין מגורים.",
     "axis": "תקיפות בעורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:22:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:22:00+00:00",
     "last_update_at": "2026-10-06T09:03:24+00:00",
     "what_is_not_verified": "המספרים נמסרו על ידי רשויות אוקראיניות וייתכנו עדכונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-strikes-kill-13-injure-104-across-ukraine-damage-kryvyi-rih-hospital/",
       "published_at": "2026-10-06T09:03:24+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171478-russian-attacks-in-kharkiv-region-leave-seven-killed-80-injured-over-past-day.html",
       "published_at": "2026-10-06T08:35:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171431-russian-strike-hits-highrise-building-and-ambulance-in-kramatorsk-killing-one-woman-and-injuring-four-people.html",
       "published_at": "2026-10-06T07:22:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "קריבי ריה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "קרמטורסק",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-02",
     "title": "מתקפת רחפנים אוקראינית על מחוז מוסקבה: מחסן הדלק הגדול באזור עלה באש",
     "summary": "מתקפת רחפנים אוקראינית רחבה על מוסקבה וסביבתה הציתה את מתקן הנפט הגדול במחוז, ליד קונסטנטינובו. לפי הדיווחים נהרגו שניים.",
     "axis": "תקיפות בעומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T00:00:00+00:00",
     "last_update_at": "2026-10-06T07:08:08+00:00",
     "what_is_not_verified": "היקף הנזק למתקן לא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/06/massive-ukrainian-drone-attack-on-moscow-and-surrounding-region-kills-two-sets-region-s-largest-oil-depot-ablaze",
       "published_at": "2026-10-06T07:08:08+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drones-reportedly-attack-moscow-oblast-in-mass-attack-near-russias-capital/",
       "published_at": "2026-10-06T00:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-03",
     "title": "גשרים על הדנייפר ובצ'ונהר נפגעו",
     "summary": "רחפן רוסי פגע בגשר בזפוריז'יה, חמישה נפצעו והגשר נסגר לתנועה. במקביל, תצלומי לוויין מראים נזק כבד לגשר צ'ונהר שמחבר את קרים למחוז חרסון.",
     "axis": "חזית דרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T04:26:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T04:26:24+00:00",
     "last_update_at": "2026-10-06T08:18:00+00:00",
     "what_is_not_verified": "מי פגע בגשר צ'ונהר ומתי בדיוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/06/russia-strikes-bridge-over-dnipro-river-in-ukraine-s-zaporizhzhia-injuring-five-including-red-cross-workers",
       "published_at": "2026-10-06T07:20:08+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-drone-strikes-zaporizhzhia-bridge-in-overnight-attack/",
       "published_at": "2026-10-06T04:26:24+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171471-new-attacks-cause-extensive-damage-to-chonhar-bridge-satellite-imagery.html",
       "published_at": "2026-10-06T08:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-04",
     "title": "ספינות סוחר הותקפו בים השחור, גם מול בולגריה",
     "summary": "רחפן רוסי פגע בספינה בדגל איי מרשל מול אוקראינה, אחד נהרג ושבעה נפצעו. כ-112 ק\"מ מחופי בולגריה ספינה אחת טבעה ואחרת עלתה באש, אחרי פגיעת רחפנים שמקורם לא נקבע. יום קודם טבעה ספינת תבואה בבעלות טורקית.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T15:17:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T15:17:23+00:00",
     "last_update_at": "2026-10-06T11:47:00+00:00",
     "what_is_not_verified": "מקור הרחפנים מול בולגריה וגורל צוות הספינה שטבעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/drones-strike-merchant-vessels-in-black-sea-off-bulgaria-and-ukraine-killing-at-least-one/",
       "published_at": "2026-10-06T11:47:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cr0j0w3p8453o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-05T15:17:23+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-05",
     "title": "ליטא פתחה בהליך להסרת האיסור על נשק גרעיני",
     "summary": "הפרלמנט הליטאי עשה צעד ראשון לשינוי חוקתי שיסיר את האיסור על נשק גרעיני במדינה, על רקע האיום הרוסי.",
     "axis": "נאט\"ו ואירופה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:57:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:57:00+00:00",
     "last_update_at": "2026-10-06T08:57:00+00:00",
     "what_is_not_verified": "ההליך בתחילתו ולא ברור אם יושלם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/lithuania-takes-1st-step-to-lift-nuclear-weapons-ban-amid-russian-threat/",
       "published_at": "2026-10-06T08:57:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10061226-06",
     "title": "דרום קוריאה: ההתנצלות של אוקראינה בפרשת השבויים לא מספיקה",
     "summary": "שר החוץ של דרום קוריאה אמר שההתנצלות של קייב על הדלפת מידע בנוגע לשבויים צפון קוריאנים לא מספיקה, וסיאול שוקלת להחזיר את שגרירה.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:26:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:26:00+00:00",
     "last_update_at": "2026-10-06T08:26:00+00:00",
     "what_is_not_verified": "לא הוחלט אם השגריר יוחזר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056667/",
       "published_at": "2026-10-06T08:26:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10061226-07",
     "title": "סקר: רוב האוקראינים פתוחים למשא ומתן, בלי ויתור מראש על שטחים",
     "summary": "סקר שפורסם באוקראינה מראה שרוב הציבור פתוח למשא ומתן עם רוסיה, אבל לא מסכים מראש לוויתורים טריטוריאליים.",
     "axis": "דיפלומטיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:12:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T08:12:00+00:00",
     "last_update_at": "2026-10-06T08:12:00+00:00",
     "what_is_not_verified": "המתודולוגיה המלאה של הסקר לא פורטה בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056661/",
       "published_at": "2026-10-06T08:12:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מקור הרחפנים שפגעו בספינות מול בולגריה.",
    "היקף הנזק למתקן הדלק ליד מוסקבה.",
    "מי פגע בגשר צ'ונהר.",
    "מספרי הנפגעים, שעשויים להשתנות."
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
     "value": 1.1204,
     "unit": "USD",
     "change_pct": -0.19,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המבצע הצבאי"
     ],
     "inferred": [
      "לשחוק את העורף האוקראיני ואת נתיבי היצוא בים השחור",
      "לבחון את תגובת נאט\"ו מתחת לסף מלחמה"
     ],
     "forecast": [
      "המשך תקיפות על נמלים וספנות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "פגיעה ביכולת המלחמה הרוסית"
     ],
     "inferred": [
      "לפגוע בהכנסות ובאספקת הדלק של רוסיה",
      "לנתק את קרים דרך פגיעה בגשרים"
     ],
     "forecast": [
      "המשך תקיפות רחפנים על מתקני אנרגיה ברוסיה"
     ]
    },
    {
     "actor": "מדינות נאט\"ו",
     "declared": [
      "הגנה על שטחן"
     ],
     "inferred": [
      "הרתעה מול רוסיה"
     ],
     "forecast": [
      "דיון על הגנה ימית אחרי הפגיעה מול בולגריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr0j0w3p8453o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/lithuania-takes-1st-step-to-lift-nuclear-weapons-ban-amid-russian-threat/",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/06/russia-strikes-bridge-over-dnipro-river-in-ukraine-s-zaporizhzhia-injuring-five-including-red-cross-workers",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056661/",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4171471-new-attacks-cause-extensive-damage-to-chonhar-bridge-satellite-imagery.html",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-06T09:23:21+00:00",
  "changes": {
   "UKRAINE-10061226-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות רוסיות על מתקנים ותשתיות באוקראינה",
    "score": 1.0
   },
   "UKRAINE-10061226-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים אוקראינית על מוסקבה ומחוזות ברוסיה",
    "score": 1.0
   },
   "UKRAINE-10061226-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה בגשרים ובעורקי תחבורה מרכזיים",
    "score": 1.0
   },
   "UKRAINE-10061226-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה ימית בים השחור ופגיעה באוניית תבואה",
    "score": 1.0
   },
   "UKRAINE-10061226-05": {
    "kind": "new"
   },
   "UKRAINE-10061226-06": {
    "kind": "possible",
    "prev": "חילופי האשמות דיפלומטיות סביב העברת שבויים קוריאניים",
    "score": 0.4
   },
   "UKRAINE-10061226-07": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "משא ומתן ומדדי דעת קהל באוקראינה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-06T1225__north-202610061225.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-06T12:25:04+00:00",
   "window": {
    "from": "2026-10-05T12:25:04+00:00",
    "to": "2026-10-06T12:25:04+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "north-202610061225"
   },
   "summary": "הגזרה הצפונית שקטה יחסית היום: אין דיווח על תקיפות ישראליות בלבנון או ירי של חיזבאללה, מלבד ירי מקלעים בפאתי אל-מנסורי. המוקד הוא דרום סוריה, שם צה\"ל ממשיך לפעול במרחב האבטחה ולעבוד על קו \"סופה 53\", ודמשק ומדינות ערב מגנות. בלבנון הממשלה מנסה להרחיב את נוכחות הצבא בדרום, וחיזבאללה מצהיר שפירוקו נכשל.",
   "fronts": [
    {
     "name": "דרום סוריה וקוניטרה",
     "status": "פעילות קרקעית ישראלית יומיומית, מעצרים ועבודות הנדסה; גינויים סוריים וערביים."
    },
    {
     "name": "דרום לבנון",
     "status": "שקט יחסי; ירי מקלעים נקודתי באל-מנסורי."
    },
    {
     "name": "לבנון פנים",
     "status": "הממשלה מקדמת פריסת צבא בדרום ותרגול עם המערב; חיזבאללה מתנגד לפירוק."
    },
    {
     "name": "רמת הגולן",
     "status": "אירוע פציעה בשטח חקלאי, נסיבות לא ברורות."
    }
   ],
   "events": [
    {
     "id": "NORTH-10061225-01",
     "title": "צה\"ל עצר שני חשודים שהתקרבו למוצב בדרום סוריה",
     "summary": "לפי צה\"ל, כוחות זיהו שני חשודים על אופנוע שהתקרבו למוצב בדרום סוריה, ביצעו נוהל מעצר חשוד שכלל ירי, אחד החשודים נפצע ושניהם נעצרו. בנוסף, חטיבת כרמלי איתרה ונטרלה מטעני נ\"ט ומוקשים ישנים.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T13:18:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T13:18:52+00:00",
     "last_update_at": "2026-10-05T13:54:26+00:00",
     "what_is_not_verified": "זהות החשודים ומטרתם לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25292",
       "published_at": "2026-10-05T13:42:59+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25291",
       "published_at": "2026-10-05T13:18:52+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956358",
       "published_at": "2026-10-05T13:54:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-02",
     "title": "כוחות ישראליים נכנסו שוב לדרום קוניטרה",
     "summary": "כוחות וטנקים ישראליים נכנסו לאזור תל אל-דוריאת שליד הכפר אל-מועלקה בדרום קוניטרה. משרד החוץ הסורי גינה את הפעולות ודרש נסיגה.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T05:19:46+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T05:19:46+00:00",
     "last_update_at": "2026-10-06T06:46:23+00:00",
     "what_is_not_verified": "משך השהייה ומטרת הפעולה לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-raid-in-syria-s-quneitra/4079190",
       "published_at": "2026-10-06T06:46:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-condemns-israeli-attacks-demands-withdrawal-territory",
       "published_at": "2026-10-06T05:19:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-03",
     "title": "סוריה, ירדן וקטאר גינו את עבודות קו \"סופה 53\"",
     "summary": "סוריה, ירדן וקטאר גינו את חידוש העבודות ההנדסיות של ישראל לאורך קו \"סופה 53\", וטענו שמדובר בהפרה של הסכם הפרדת הכוחות מ-1974.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T16:51:27+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T16:51:27+00:00",
     "last_update_at": "2026-10-06T05:19:46+00:00",
     "what_is_not_verified": "היקף העבודות בשטח לא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
       "published_at": "2026-10-05T16:51:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-condemns-israeli-attacks-demands-withdrawal-territory",
       "published_at": "2026-10-06T05:19:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-04",
     "title": "דיווח בלבנון: ירי מקלעים ישראלי בפאתי אל-מנסורי",
     "summary": "סוכנות הידיעות הלבנונית הרשמית דיווחה על ירי מקלעים של צבא ישראל בפאתי הכפר אל-מנסורי בדרום לבנון. לא דווח על נפגעים.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T05:04:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T05:04:00+00:00",
     "last_update_at": "2026-10-06T05:04:00+00:00",
     "what_is_not_verified": "צה\"ל לא הגיב; הסיבה לירי ונפגעים לא ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/latest-news/961483/",
       "published_at": "2026-10-06T05:04:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10061225-05",
     "title": "ח\"כ חיזבאללה: הניסיון לפרק את הארגון נכשל",
     "summary": "חבר הפרלמנט חוסיין אל-חאג' חסן מחיזבאללה אמר שהמהלך לסיום \"ההתנגדות\" ופירוק חיזבאללה לא השיג את מטרותיו.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T05:11:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T05:11:00+00:00",
     "last_update_at": "2026-10-06T05:11:00+00:00",
     "what_is_not_verified": "הצהרה פוליטית; לא ברור מה מצב הנשק של הארגון בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon/961470/",
       "published_at": "2026-10-06T05:11:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-06",
     "title": "ממשלת לבנון מקדמת הרחבת נוכחות המדינה בדרום",
     "summary": "אחרי שיחותיו בוושינגטון, ראש הממשלה סלאם מקדם תוכנית להרחבת נוכחות הצבא והמדינה בדרום לבנון. שר הפנים הדגיש את הנושא בפגישה עם הנשיא עון.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T14:03:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T14:03:00+00:00",
     "last_update_at": "2026-10-06T04:08:00+00:00",
     "what_is_not_verified": "לוחות זמנים ותקציב לתוכנית לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/961324/after-washington-talks-salam-turns-to-three-key-files-at-home/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961324",
       "published_at": "2026-10-05T14:03:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon/961468/",
       "published_at": "2026-10-06T04:08:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-07",
     "title": "צבא לבנון פתח בתרגיל משותף עם בריטניה",
     "summary": "צבא לבנון פתח בתרגיל \"פגסוס סידר 2026\" עם כוחות בריטיים, בהשתתפות נציגים מארה\"ב ומצרפת.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T21:38:21+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T21:38:21+00:00",
     "last_update_at": "2026-10-05T21:38:21+00:00",
     "what_is_not_verified": "היקף הכוחות לא פורסם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-hold-joint-drills-britain",
       "published_at": "2026-10-05T21:38:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-08",
     "title": "נערה נפצעה באורח בינוני באירוע בשטח חקלאי ברמת הגולן",
     "summary": "נערה נפצעה באורח בינוני באירוע בשטח חקלאי ברמת הגולן.",
     "axis": "רמת הגולן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:37:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:37:19+00:00",
     "last_update_at": "2026-10-06T07:37:19+00:00",
     "what_is_not_verified": "נסיבות האירוע לא פורסמו; לא ידוע אם הוא ביטחוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1374157",
       "published_at": "2026-10-06T07:37:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-09",
     "title": "קריאה של השר לשעבר איוב קרא להשתלט על א-סווידא",
     "summary": "השר לשעבר איוב קרא קרא בפומבי לדרוזים להשתלט על העיר א-סווידא שבדרום סוריה.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T23:48:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T23:48:35+00:00",
     "last_update_at": "2026-10-05T23:48:35+00:00",
     "what_is_not_verified": "אין סימן לכך שזו עמדה רשמית של ממשלת ישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-israeli-druze-politician-calls-seizing-syrias-sweida",
       "published_at": "2026-10-05T23:48:35+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10061225-10",
     "title": "שלושה פיצוצים בתשתיות גז בסוריה בתוך שישה שבועות",
     "summary": "לפי מרכז עלמא, היו שלושה פיצוצים בצנרת גז בסוריה בתוך כשישה שבועות: בחסכה, בדיר א-זור ובצינור לתחנת הכוח תשרין ליד דמשק.",
     "axis": "סוריה פנים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T09:07:47+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T09:07:47+00:00",
     "last_update_at": "2026-10-05T12:25:04+00:00",
     "what_is_not_verified": "מי עומד מאחורי הפיצוצים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/three-blasts-in-six-weeks-syrias-energy-infrastructure-faces-a-security-test/",
       "published_at": "2026-10-05T09:07:47+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נסיבות פציעת הנערה ברמת הגולן.",
    "מטרת הכניסה לדרום קוניטרה ומשכה.",
    "נפגעים מהירי באל-מנסורי.",
    "האחראים לפיצוצי הגז בסוריה."
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת חדירות למוצבים בדרום סוריה",
      "ניטרול אמצעי לחימה באזור"
     ],
     "inferred": [
      "ביסוס קו הגנה קבוע לאורך \"סופה 53\"",
      "לחץ על חיזבאללה בלי להסלים"
     ],
     "forecast": [
      "המשך פעילות קרקעית בקוניטרה והחרפת המחאה הדיפלומטית הסורית"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "חיזוק נוכחות המדינה והצבא בדרום"
     ],
     "inferred": [
      "לשמור על ערוץ השיחות עם וושינגטון",
      "לצמצם עילה לתקיפות ישראליות"
     ],
     "forecast": [
      "פריסה הדרגתית ואיטית בגלל התנגדות חיזבאללה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "התנגדות לפירוק הנשק"
     ],
     "inferred": [
      "לשקם יכולות בלי לפתוח באש"
     ],
     "forecast": [
      "המשך מתיחות פוליטית בתוך לבנון ולא הסלמה מיידית מול ישראל"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "דרישה לנסיגה ישראלית ולכיבוד הסכם 1974"
     ],
     "inferred": [
      "גיוס תמיכה ערבית ובינלאומית נגד ישראל"
     ],
     "forecast": [
      "פנייה נוספת לאו\"ם, בלי עימות צבאי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/three-blasts-in-six-weeks-syrias-energy-infrastructure-faces-a-security-test/",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-raid-in-syria-s-quneitra/4079190",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon/961468/",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1374157",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-israeli-druze-politician-calls-seizing-syrias-sweida",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-hold-joint-drills-britain",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25291",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956358",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-06T09:48:02+00:00",
  "changes": {
   "NORTH-10061225-01": {
    "kind": "new"
   },
   "NORTH-10061225-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקריות ביטחוניות ופעילות צה\"ל במרחב האבטחה בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10061225-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "גינויים נגד פעולות ישראל ועבודות הנדסיות בקו סופה 53 בסוריה",
    "score": 1.0
   },
   "NORTH-10061225-04": {
    "kind": "new"
   },
   "NORTH-10061225-05": {
    "kind": "new"
   },
   "NORTH-10061225-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מהלכים לחיזוק נוכחות שלטון לבנון בדרום המדינה ושיח מול חיזבאללה",
    "score": 1.0
   },
   "NORTH-10061225-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פתיחת תרגיל צבאי משותף של צבא לבנון ובריטניה",
    "score": 1.0
   },
   "NORTH-10061225-08": {
    "kind": "new"
   },
   "NORTH-10061225-09": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "קריאה של פוליטיקאי ישראלי להשתלטות על א-סווידא",
    "score": 1.0
   },
   "NORTH-10061225-10": {
    "kind": "same",
    "from": "initial",
    "to": "assessment",
    "prev": "פגיעות ופיצוצים חוזרים בתשתיות הגז והאנרגיה בסוריה",
    "score": 1.0
   }
  }
 }
};
