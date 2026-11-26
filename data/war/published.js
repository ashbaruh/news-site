/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-26T0906__yemen-202611260906.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-26T09:06:53+00:00",
   "window": {
    "from": "2026-11-25T09:06:53+00:00",
    "to": "2026-11-26T09:06:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611260906"
   },
   "summary": "החות'ים ממשיכים להרחיב את התקיפות שלהם לעבר תשתיות אסטרטגיות ונמלים בסעודיה, כולל ריאד, ג'דה, ג'זאן ומתקן הנפט בראס תנורה, בתגובה לתקיפות נגדיות של הקואליציה בראשות סעודיה על נמל חודיידה בתימן. במקביל, במסגרת מלחמת האזרחים בתימן, החות'ים מתקדמים ומפעילים לחץ קרקעי משמעותי סביב אזורים מרכזיים כמו תיז, מאריב ואל-ג'וף, תוך איום מתמשך על אזור עדן.",
   "fronts": [
    {
     "name": "חזית סעודיה - תימן",
     "status": "פעילה (תקיפות טילים וכטב\"מים חות'יות לעבר סעודיה ותקיפות אוויריות סעודיות בתימן)"
    },
    {
     "name": "חזית הפנים בתימן",
     "status": "פעילה (התקדמות קרקעית של החות'ים מול ממשלת תימן במחוזות שונים כמו תיז, מאריב ואל-ג'וף)"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11260906-01",
     "title": "פגז חות'י בתיז פגע באזרחים",
     "summary": "ירי פגזים של החות'ים בדרום-מזרח תיז הרג אישה ופצע שבעה אחרים, כולל ילד.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T05:25:44+00:00",
     "last_update_at": "2026-11-26T07:44:49+00:00",
     "what_is_not_verified": "ההאשמות כלפי החות'ים באחריות לירי לא אומתו בידי גורם נייטרלי עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_61376012381b15b6",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-681",
       "published_at": "2026-11-26T07:44:49+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_61376012381b15b6",
       "url": "https://www.sabanew.net/viewstory/156495",
       "published_at": "2026-11-26T05:50:28+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_61376012381b15b6",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-shelling-reportedly-kills-woman-yemens-taiz",
       "published_at": "2026-11-26T05:25:44+00:00"
      }
     ],
     "places": [
      {
       "name": "תיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11260906-02",
     "title": "מתקפות חות'יות על נמלים ומתקני אנרגיה בסעודיה",
     "summary": "החות'ים תקפו את נמלי הים האדום ג'דה וג'זאן, ואת מתקן הזיקוק בראס תנורה. הקואליציה בראשות סעודיה דיווחה על יירוט כטב\"מים וטילים והודתה בנזק קל בנמל ג'זאן.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T09:49:11+00:00",
     "last_update_at": "2026-11-26T02:04:30+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במתקנים והדיווחים על פגיעות מוצלחות נוספות לא אומתו באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_d95dd5be1ac0858a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/loud-explosions-rock-riyadh-houthis-attack-saudi-ports",
       "published_at": "2026-11-26T02:04:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_d95dd5be1ac0858a",
       "url": "https://www.al-monitor.com/originals/2026/11/saudis-down-missiles-targeting-capital-after-yemen-port-strikes",
       "published_at": "2026-11-25T22:30:27+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_d95dd5be1ac0858a",
       "url": "https://www.sabanew.net/viewstory/156481",
       "published_at": "2026-11-25T21:29:47+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_b6ac68799d46d921",
       "url": "https://www.sabanew.net/viewstory/156479",
       "published_at": "2026-11-25T21:14:25+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_d95dd5be1ac0858a",
       "url": "https://www.maariv.co.il/breaking-news/article-1392317",
       "published_at": "2026-11-25T19:59:16+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7f473c5efc602399",
       "url": "https://www.sabanew.net/viewstory/156477",
       "published_at": "2026-11-25T19:44:59+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_d95dd5be1ac0858a",
       "url": "https://www.newarab.com/news/saudi-led-coalition-strikes-hodeidah-houthis-threaten-ports",
       "published_at": "2026-11-25T09:49:11+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'דה, סעודיה",
       "lat": 21.5504,
       "lon": 39.1742
      },
      {
       "name": "ג'זאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      }
     ]
    },
    {
     "id": "YEMEN-11260906-03",
     "title": "תקיפות נגדיות של הקואליציה בתימן",
     "summary": "הקואליציה בהובלת סעודיה תקפה את נמל חודיידה בתימן וכן מטרות במחוזות סעדה ועמראן.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T07:42:27+00:00",
     "last_update_at": "2026-11-25T09:49:11+00:00",
     "what_is_not_verified": "התוצאות המלאות של התקיפות והנזק שנגרם לא אומתו ממקור עצמאי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-led-coalition-strikes-hodeidah-houthis-threaten-ports",
       "published_at": "2026-11-25T09:49:11+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/diplomacy-or-war-tensions-simmer-us-mulls-next-steps-iran",
       "published_at": "2026-11-25T07:42:27+00:00"
      }
     ],
     "places": [
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11260906-04",
     "title": "פעילות מבצעית של הכוחות המזוינים נגד החות'ים",
     "summary": "הכוחות המזוינים של ממשלת תימן דיווחו על ביצוע מאות פעולות סיכול נגד עמדות ותשתיות של החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T17:24:51+00:00",
     "last_update_at": "2026-11-25T17:24:51+00:00",
     "what_is_not_verified": "נתוני הפעולות וממדיהן מבוססים על דיווח רשמי בלבד ללא אימות חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_359708a40e76a395",
       "url": "https://www.sabanew.net/viewstory/156465",
       "published_at": "2026-11-25T17:24:51+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף הנזק המדויק במתקני האנרגיה והזיקוק בסעודיה לאחר התקיפות",
    "מספר הנפגעים המדויק בצד הסעודי והתימני כתוצאה מחילופי האש"
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
     "value": 3.3789,
     "unit": "ILS",
     "change_pct": 1.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "להגיב על תקיפות הקואליציה בנמל חודיידה",
      "לפגוע בנמלים ובתשתיות של סעודיה"
     ],
     "inferred": [
      "לערער את יציבות המשק ומתקני האנרגיה בסעודיה",
      "להרחיב את השליטה הקרקעית בתוך תימן ואזורי המפתח"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים וטילים לעבר יעדים בסעודיה",
      "הגברת הלחץ הקרקעי לעבר עדן ואזורים נוספים בתימן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה",
     "declared": [
      "להגיב בעוצמה על מתקפות החות'ים נגד אזרחים ותשתיות אזרחיות",
      "ליירט איומים אוויריים המכוונים לשטחי הממלכה"
     ],
     "inferred": [
      "לבלום את ההתקדמות הקרקעית של החות'ים בתוך תימן",
      "להגן על תשתיות האנרגיה הקריטיות של הממלכה"
     ],
     "forecast": [
      "המשך התקיפות האוויריות נגד מעוזי החות'ים בתימן, כולל חודיידה",
      "ניסיונות לחיזוק שיתוף הפעולה ההגנתי והאווירי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudis-down-missiles-targeting-capital-after-yemen-port-strikes",
     "accessed_at": "2026-11-26T09:06:53+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1392317",
     "accessed_at": "2026-11-26T09:06:53+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/loud-explosions-rock-riyadh-houthis-attack-saudi-ports",
     "accessed_at": "2026-11-26T09:06:53+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/diplomacy-or-war-tensions-simmer-us-mulls-next-steps-iran",
     "accessed_at": "2026-11-26T09:06:53+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156465",
     "accessed_at": "2026-11-26T09:06:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T20:17:20+00:00",
  "changes": {
   "YEMEN-11260906-01": {
    "kind": "new"
   },
   "YEMEN-11260906-02": {
    "kind": "possible",
    "prev": "מתקפת כטב\"מים וטילים על בית הזיקוק בראס תנורה",
    "score": 0.4
   },
   "YEMEN-11260906-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות הקואליציה בנמל חודידה ובאזורים נוספים",
    "score": 1.0
   },
   "YEMEN-11260906-04": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "דיווח כוחות ממשלת תימן על מאות תקיפות נגד החות'ים",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-26T1947__iran-202611261947.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-26T19:47:32+00:00",
   "window": {
    "from": "2026-11-25T19:47:32+00:00",
    "to": "2026-11-26T19:47:32+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611261947"
   },
   "summary": "הזירה מאופיינת במתיחות רבה סביב תקיפות במפרץ הכוללות פגיעה במכליות נפט במיצר הורמוז ואירוע כטב\"מים בכוויית שאיראן מכחישה את מעורבותה בו. במקביל נמשכים המאמצים הדיפלומטיים והגרעיניים לצד פעילות מעקב מערבית אחר אתרי הגרעין של איראן והברחות נשק לשלוחותיה.",
   "fronts": [
    {
     "name": "חזית המפרץ והספנות",
     "status": "פעיל ומתוח"
    },
    {
     "name": "חזית הגרעין והעימות המדיני",
     "status": "הסלמה בבנייה ובאיומים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11261947-01",
     "title": "תקיפת כטב\"מים בכוויית והריגת שני טכנאים",
     "summary": "כוויית ואיטליה דיווחו על תקיפת כטב\"מים שפגעה במתקן בכוויית וגרמה להריגת שני טכנאים איטלקים ולפציעת אזרחים. איראן הכחישה קשר לתקיפה.",
     "axis": "איראן מול המפרץ וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T14:09:40+00:00",
     "last_update_at": "2026-11-26T18:15:56+00:00",
     "what_is_not_verified": "האחריות של איראן לתקיפה בכוויית נתונה במחלוקת ובדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-iran-not-behind-drone-attack-killed-two-kuwait",
       "published_at": "2026-11-26T18:15:56+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134290",
       "published_at": "2026-11-26T17:04:35+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134289",
       "published_at": "2026-11-26T16:45:29+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86333502/Iran-denies-Kuwaiti-claims-of-attack-by-Iranian-forces",
       "published_at": "2026-11-26T16:43:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-denies-responsibility-attack-kuwait-killed-two-italians",
       "published_at": "2026-11-26T16:40:26+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/26/two-italians-killed-after-iranian-drones-strike-facility-says-kuwait?traffic_source=rss",
       "published_at": "2026-11-26T16:32:31+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/26/two-dead-after-iranian-drone-attack-on-kuwait?traffic_source=rss",
       "published_at": "2026-11-26T15:55:15+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iranian-drone-attack-kuwait-leaves-two-italians-dead",
       "published_at": "2026-11-26T15:22:33+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/meloni-expresses-deepest-sorrow-deaths-italian-nationals-kuwait",
       "published_at": "2026-11-26T14:47:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/kuwait-says-two-killed-intercepted-iranian-drone-shrapnel",
       "published_at": "2026-11-26T14:36:18+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjtx9hskml",
       "published_at": "2026-11-26T14:10:44+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21941133",
       "published_at": "2026-11-26T14:09:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11261947-02",
     "title": "פיצוצי מכליות נפט ממכשירי נפגעים במפרץ הורמוז",
     "summary": "משמרות המהפכה של איראן דיווחו על פיצוצי מכליות נפט לאחר שפגעו במוקשים ימיים בנתיבים אסורים במיצר הורמוז.",
     "axis": "איראן מול המפרץ וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T11:55:31+00:00",
     "last_update_at": "2026-11-26T12:21:49+00:00",
     "what_is_not_verified": "הנסיבות המדויקות של פגיעת המכליות במוקשים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86333327/Two-more-offending-oil-tankers-hit-naval-mines-in-Strait-of-Hormuz",
       "published_at": "2026-11-26T12:21:49+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-revolutionary-guards-say-two-oil-tankers-hit-sea-mines-near-omans",
       "published_at": "2026-11-26T11:55:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ח'סאב, עומאן",
       "lat": 26.1841,
       "lon": 56.247
      }
     ]
    },
    {
     "id": "IRAN-11261947-03",
     "title": "עצירת מעברי גבול בעיראק מול סוריה ואיראן",
     "summary": "כוחות הגבול של עיראק סגרו שני מעברי גבול המנוהלים בידי ממשלת האוטונומיה בכורדיסטאן עם סוריה ואיראן, בהתאם לפסיקת בית משפט.",
     "axis": "איראן מול עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T17:36:31+00:00",
     "last_update_at": "2026-11-26T17:36:31+00:00",
     "what_is_not_verified": "השפעת הסגירה המלאה על תנועת הסחר וההברחות האזוריות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraq-closes-two-border-crossings-kurdistan-region-syria-and-iran",
       "published_at": "2026-11-26T17:36:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11261947-04",
     "title": "תפיסת נשק איראני המיועד ללבנון בסוריה",
     "summary": "הכוחות סוריים תפסו אמצעי לחימה של משמרות המהפכה האיראניים שהיו בדרכם ללבנון, לפי דיווח פיקוד המרכז של ארה\"ב.",
     "axis": "איראן מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T08:38:45+00:00",
     "last_update_at": "2026-11-26T08:38:45+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף אמצעי הלחימה שנתפסו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611260647",
       "published_at": "2026-11-26T08:38:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11261947-05",
     "title": "מעצר עיראקים בגרמניה בחשד לתכנון פיגועים",
     "summary": "משטרת גרמניה עצרה שני אזרחים עיראקים בחשד לחברות בקבוצה פרו-איראנית שתכננה לתקוף בתי כנסת.",
     "axis": "איראן מול אירופה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T12:24:40+00:00",
     "last_update_at": "2026-11-26T12:24:40+00:00",
     "what_is_not_verified": "הקשר הישיר והמוכח להנחיות מדרג גבוה באיראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_c9fb54d4490fa79d",
       "url": "https://www.iranintl.com/en/202611263377",
       "published_at": "2026-11-26T12:24:40+00:00"
      }
     ],
     "places": [
      {
       "name": "קלן, גרמניה",
       "lat": 50.9384,
       "lon": 6.96
      }
     ]
    },
    {
     "id": "IRAN-11261947-06",
     "title": "תצלומי לוויין על בנייה תת-קרקעי באיראן",
     "summary": "תצלומי לוויין חדשים תיעדו בנייה מהירה במתחם תת-קרקעי מבוצר בין אתרי גרעין באיראן.",
     "axis": "איראן מול המערב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T10:28:05+00:00",
     "last_update_at": "2026-11-26T14:06:18+00:00",
     "what_is_not_verified": "הייעוד המדויק של המתחם התת-קרקעי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_aca4489455b5138a",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-vows-advance-nuclear-program-west-presses-inspections",
       "published_at": "2026-11-26T14:06:18+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_aca4489455b5138a",
       "url": "https://www.iranintl.com/en/202611269924",
       "published_at": "2026-11-26T10:28:05+00:00"
      }
     ],
     "places": [
      {
       "name": "נתנז, איראן",
       "lat": 33.5071,
       "lon": 51.9136
      },
      {
       "name": "אספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    }
   ],
   "not_verified": [
    "מעורבות ישירה של איראן במתקפת הכטב\"מים בכוויית",
    "הייעוד המדויק של המתחם התת-קרקעי החדש באיראן"
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
     "value": 3.3273,
     "unit": "ILS",
     "change_pct": -1.53,
     "source_id": "src_ecb",
     "as_of": "2026-11-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "קידום תוכנית הגרעין",
      "הכחשת מעורבות בתקיפות אזוריות"
     ],
     "inferred": [
      "המשך הפעלת לחץ באמצעות שלוחות ונתיבי יצוא נפט",
      "הרחבת תשתית תת-קרקעית מוגנת"
     ],
     "forecast": [
      "הגברת החיכוך הימי במפרץ",
      "המשך פיתוח מתקני הגרעין תחת הסוואה"
     ]
    },
    {
     "actor": "ישראל וארה\"ב",
     "declared": [
      "מניעת התעצמות צבאית של איראן ושלוחותיה",
      "בלימת הברחות אמצעי לחימה"
     ],
     "inferred": [
      "הכנה אפשרית למהלך צבאי נגד מתקנים באיראן",
      "הדגשת האיומים האיראניים באזור"
     ],
     "forecast": [
      "המשך סיכול הברחות נשק יבשתיות וימיות",
      "הגברת הלחץ הדיפלומטי והמודיעיני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/26/two-dead-after-iranian-drone-attack-on-kuwait?traffic_source=rss",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/iran-vows-advance-nuclear-program-west-presses-inspections",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611269924",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86333327/Two-more-offending-oil-tankers-hit-naval-mines-in-Strait-of-Hormuz",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21941133",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraq-closes-two-border-crossings-kurdistan-region-syria-and-iran",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134289",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjtx9hskml",
     "accessed_at": "2026-11-26T19:47:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T00:40:34+00:00",
  "changes": {
   "IRAN-11261947-01": {
    "kind": "new"
   },
   "IRAN-11261947-02": {
    "kind": "new"
   },
   "IRAN-11261947-03": {
    "kind": "new"
   },
   "IRAN-11261947-04": {
    "kind": "new"
   },
   "IRAN-11261947-05": {
    "kind": "new"
   },
   "IRAN-11261947-06": {
    "kind": "same",
    "from": "assessment",
    "to": "verified",
    "prev": "חשיפת הקמת מתקן תת-קרקעי מבוצר באיראן",
    "score": 0.817
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-26T0850__ukraine-202611260850.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-26T08:50:17+00:00",
   "window": {
    "from": "2026-11-25T08:50:17+00:00",
    "to": "2026-11-26T08:50:17+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611260850"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעצימות גבוהה תוך חילופי תקיפות אוויריות נרחבות ועצירת התקדמות משמעותית במשא ומתן מדיני. אוקראינה מתמודדת עם לחץ כבד בחזית הקרקעית ותקיפות על תשתיות ואזורי מגורים, אך במקביל ממשיכה לבצע תקיפות כטב\"מים וטילים לעבר בסיסים ומפעלים בתוך שטחי רוסיה, ומקבלת סיוע כלכלי וצבאי ממדינות המערב.",
   "fronts": [
    {
     "name": "חזית המזרח (גזרת פוקרובסק)",
     "status": "פעיל ביותר ומרכז הלחימה הקרקעית"
    },
    {
     "name": "תשתיות אנרגיה ועורף אוקראיני",
     "status": "תחת מתקפות כטב\"מים וטילים בלתי פוסקות"
    },
    {
     "name": "מרחב התעופה והבסיסים בעומק רוסיה",
     "status": "מוקד לתקיפות כטב\"מים אוקראיניים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11260850-01",
     "title": "תקיפת כטב\"מים באזור המעשייה בנבינומוסק",
     "summary": "שני בני אדם ביקשו טיפול רפואי בעקבות תקיפת כטב\"מים באזור התעשייה בנבינומוסק",
     "axis": "תקיפות אוויריות בעומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T08:30:41+00:00",
     "last_update_at": "2026-11-26T08:30:41+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף הנזק אינם מאומתים מלבד הפצועים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_tass",
       "url": "https://tass.com/emergencies/2225101",
       "published_at": "2026-11-26T08:30:41+00:00"
      }
     ],
     "places": [
      {
       "name": "נבינומוסק, רוסיה",
       "lat": 44.6246,
       "lon": 41.9476
      }
     ]
    },
    {
     "id": "UKRAINE-11260850-02",
     "title": "יירוט כטב\"ם מונע סילון באמצעות לייזר אוקראיני",
     "summary": "מערכת הגנה אווירית אוקראינית מבוססת לייזר בשם בליסק ייירטה כטב\"ם רוסי בעל מנוע סילון",
     "axis": "הגנה אווירית וטכנולוגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T08:29:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T08:29:53+00:00",
     "last_update_at": "2026-11-26T08:29:53+00:00",
     "what_is_not_verified": "היעילות המבצעית הרחבה של המערכת, שכן היא נמצאת בשלב ניסויים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134257",
       "published_at": "2026-11-26T08:29:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11260850-03",
     "title": "פגיעה במפעל התעשייה הביטחונית בקייב",
     "summary": "משרד ההגנה הרוסי דיווח על פגיעה במפעל התעשייתי חימוולוקנו בקייב שייצר רכיבי ראשי קרב לכטב\"מים",
     "axis": "תקיפות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T08:27:22+00:00",
     "last_update_at": "2026-11-26T08:27:22+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במפעל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2225093",
       "published_at": "2026-11-26T08:27:22+00:00"
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
     "id": "UKRAINE-11260850-04",
     "title": "עימותים בגזרת הקו החזית",
     "summary": "תועדו 167 עימותים צבאיים לאורך קו החזית ביממה האחרונה, כאשר גזרת פוקרובסק ממשיכה להיות המוקד הלוהט ביותר",
     "axis": "קו החזית הקרקעי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T08:17:00+00:00",
     "last_update_at": "2026-11-26T08:17:00+00:00",
     "what_is_not_verified": "המספר המדויק של נפגעים בכל עימות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_d47a1b2205f6cee7",
       "url": "https://www.ukrinform.net/rubric-ato/4188741-167-clashes-reported-along-front-line-in-past-24-hours-with-pokrovsk-sector-remaining-hottest-spot.html",
       "published_at": "2026-11-26T08:17:00+00:00"
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
     "id": "UKRAINE-11260850-05",
     "title": "סיכול פיגוע נגד איש ביטחון רוסי בסוצ'י",
     "summary": "השירות הפדרלי של רוסיה דיווח על סיכול מזימת טרור נגד אזרח רוסי בסוצ'י",
     "axis": "סיכול טרור ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T07:29:11+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T07:29:11+00:00",
     "last_update_at": "2026-11-26T07:29:11+00:00",
     "what_is_not_verified": "פרטי המזימה המלאים והזהות המדויקת של המעורבים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_c11ce179c41bd18e",
       "url": "https://tass.com/society/2225065",
       "published_at": "2026-11-26T07:29:11+00:00"
      }
     ],
     "places": [
      {
       "name": "סוצ'י, רוסיה",
       "lat": 43.5855,
       "lon": 39.7231
      }
     ]
    },
    {
     "id": "UKRAINE-11260850-06",
     "title": "השגת מימון בריטי להקמת חוות רוחות באוקראינה",
     "summary": "בריטניה מתחייבת להשקיע מיליונים בהקמת חוות רוחות באוקראינה לחיזוק מערכת האנרגיה",
     "axis": "סיוע כלכלי ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T05:00:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T05:00:46+00:00",
     "last_update_at": "2026-11-26T07:27:00+00:00",
     "what_is_not_verified": "המיקום המדויק של חוות הרוחות מטעמי ביטחון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_european_pravda",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/26/8064733/",
       "published_at": "2026-11-26T07:27:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_european_pravda",
       "url": "https://www.theguardian.com/business/2026/nov/26/uk-to-invest-95m-in-ukraine-windfarm-war-hit-energy-system",
       "published_at": "2026-11-26T05:00:46+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-11260850-07",
     "title": "פגיעת כטב\"ם בבניין מגורים בחארקוב",
     "summary": "שני בני אדם נהרגו כתוצאה מפגיעת כטב\"ם רוסי בבניין מגורים רב קומות במחוז נובוסוורסקי בחארקוב",
     "axis": "תקיפות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T07:27:00+00:00",
     "last_update_at": "2026-11-26T07:27:00+00:00",
     "what_is_not_verified": "מספר הפצועים המלא מעבר להרוגים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_6bec521d447c7dda",
       "url": "https://www.ukrinform.net/rubric-ato/4188730-drone-strike-on-highrise-building-in-kharkiv-kills-two-people.html",
       "published_at": "2026-11-26T07:27:00+00:00"
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
     "id": "UKRAINE-11260850-08",
     "title": "תקיפת בסיס התעופה סבאסלייקה",
     "summary": "כוחות אוקראינה תקפו את בסיס התעופה סבאסלייקה במחוז ניז'ני נובגורוד ופגעו במספר מטוסי קרב",
     "axis": "תקיפות אוויריות בעומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T12:08:29+00:00",
     "last_update_at": "2026-11-25T14:46:41+00:00",
     "what_is_not_verified": "מצבם המדויק של המטוסים שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_bbc",
       "url": "https://www.bbc.co.uk/news/articles/ck9q8xp5r5pgo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-25T14:46:41+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_bbc",
       "url": "https://t.me/alexmehacarmel/49911",
       "published_at": "2026-11-25T12:08:29+00:00"
      }
     ],
     "places": [
      {
       "name": "סבאסלייקה, רוסיה",
       "lat": 55.4552,
       "lon": 42.3116
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על היקף האבידות המדויק של הצדדים",
    "טענות סותרות סביב ניסיון התקיפה לכאורה על מעון פוטין בוולדאי",
    "ההיתכנות המבצעית והמשפטית של יירוט טילי רוסיה על ידי נאט\"ו משטח פולין"
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
     "value": 1.0935,
     "unit": "USD",
     "change_pct": -0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "השגת יעדי המבצע הצבאי והחלשת התעשייה הצבאית האוקראינית"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והצבאיות של אוקראינה באמצעות מתקפות בלתי פוסקות על תשתיות",
      "הורדת המוטיבציה של המערב להמשיך ולתמוך באוקראינה"
     ],
     "forecast": [
      "המשך לחץ צבאי בחפירות ובמוקדי החזית המרכזיים עד להשגת הישגים טריטוריאליים נוספים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונות המדינה ושחרור שטחים כבושים",
      "קבלת מערכות הגנה מתקדמות וסיוע כלכלי לשיקום תשתיות"
     ],
     "inferred": [
      "העברת הלחימה לעומק השטח הרוסי באמצעות כטב\"מים ופגיעה במתקנים צבאיים ותעשייתיים",
      "בניית יכולות הגנה אוויריות עצמאיות חדשניות"
     ],
     "forecast": [
      "המשך פיתוח אמצעי לחימה טכנולוגיים וחיזוק התשתיות האנרגטיות בעזרת שותפות בינלאומיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ck9q8xp5r5pgo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/business/2026/nov/26/uk-to-invest-95m-in-ukraine-windfarm-war-hit-energy-system",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/26/8064733/",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/society/2225065",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134257",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49911",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4188730-drone-strike-on-highrise-building-in-kharkiv-kills-two-people.html",
     "accessed_at": "2026-11-26T08:50:17+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T00:40:57+00:00",
  "changes": {
   "UKRAINE-11260850-01": {
    "kind": "new"
   },
   "UKRAINE-11260850-02": {
    "kind": "new"
   },
   "UKRAINE-11260850-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעה בקייב מרסיסי מל\"ט",
    "score": 0.817
   },
   "UKRAINE-11260850-04": {
    "kind": "new"
   },
   "UKRAINE-11260850-05": {
    "kind": "new"
   },
   "UKRAINE-11260850-06": {
    "kind": "new"
   },
   "UKRAINE-11260850-07": {
    "kind": "new"
   },
   "UKRAINE-11260850-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-26T2003__north-202611262003.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-26T20:03:59+00:00",
   "window": {
    "from": "2026-11-25T20:03:59+00:00",
    "to": "2026-11-26T20:03:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611262003"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחימה נקודתית ופשיטות של צה\"ל בלבנון ובסוריה לצד מתיחות גוברת סביב מעורבות טורקית ואיומים אזוריים. בזמן שצה\"ל תוקף תשתיות ואמצעי לחימה של חיזבאללה בדרום לבנון ובבקעת הלבנון במסגרת הסכם הפסקת האש, במקביל מתנהל מעקב ישראלי מודאג אחר שיתוף הפעולה בין סוריה לטורקיה. בנוסף, נרשמות פעילויות קרקעיות והפרות ריבונות הדדיות בין ישראל לכוחות בסוריה.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה (תקיפות אוויריות של צה\"ל נגד תשתיות חיזבאללה)"
    },
    {
     "name": "חזית סוריה",
     "status": "מתוחה (פשיטות קרקעיות ישראליות בקוניטרה ושיתוף פעולה מתהדק בין סוריה לטורקיה)"
    },
    {
     "name": "הציר האזורי (ישראל-טורקיה)",
     "status": "הסלמה מדינית והאשמות הדדיות בנוגע לדרום סוריה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11262003-01",
     "title": "תקיפת מחנה אימונים ואמצעי לחימה של חיזבאללה בדרום לבנון ובבקעת הלבנון",
     "summary": "צה\"ל תקף עשרות רקטות וקני שיגור במחנה אימונים של כוח רדואן וכן אמצעי לחימה של חיזבאללה באזורים שונים בדרום לבנון ובבקעת הלבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T12:49:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T12:49:41+00:00",
     "last_update_at": "2026-11-26T19:38:18+00:00",
     "what_is_not_verified": "לא מאומת האם התקיפות גרמו לנפגעים בנפש או מה היקף הנזק המדויק מעבר להשמדת המשגרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134300",
       "published_at": "2026-11-26T19:38:18+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963336",
       "published_at": "2026-11-26T19:37:05+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1392679",
       "published_at": "2026-11-26T19:31:36+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25702",
       "published_at": "2026-11-26T19:24:53+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95145",
       "published_at": "2026-11-26T19:18:38+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134270",
       "published_at": "2026-11-26T12:49:41+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      }
     ]
    },
    {
     "id": "NORTH-11262003-02",
     "title": "מעצר ושחרור אזרחי סורי בג'ובת אל-חשאב",
     "summary": "כוח צבאי ישראלי ביצע פלישה לכפר ג'ובת אל-חשאב שבמרחב קוניטרה, ערך חיפושים בבתים, עצר אזרח סורי צעיר ושחרר אותו למחרת בבוקר.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T18:30:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T18:30:59+00:00",
     "last_update_at": "2026-11-25T20:03:59+00:00",
     "what_is_not_verified": "הטענות על חטיפת אזרחים והימצאותם במקומות לא ידועים כתוצאה מפעולות דומות אחרות.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_b94ecf62073bef44",
       "url": "https://english.enabbaladi.net/archives/2026/11/israel-releases-syrian-man-detained-during-quneitra-incursion/",
       "published_at": "2026-11-25T18:30:59+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ובת אל-חשאב, סוריה",
       "lat": 33.2258,
       "lon": 35.8341
      }
     ]
    },
    {
     "id": "NORTH-11262003-03",
     "title": "האשמות טורקיות כלפי ישראל בנוגע לדרום סוריה",
     "summary": "שר החוץ הטורקי האשים את ישראל בחימוש קבוצות דרוזיות בדרום סוריה ובהכנת תרחיש לפעולות צבאיות שעלולות להוביל לעימות אזורי.",
     "axis": "ישראל - טורקיה - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T19:21:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T19:21:26+00:00",
     "last_update_at": "2026-11-25T20:03:59+00:00",
     "what_is_not_verified": "נכונות האשמותיו של שר החוץ הטורקי על חימוש קבוצות דרוזיות ותוכניות צבאיות ישראליות.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963155",
       "published_at": "2026-11-25T19:21:26+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סוריה",
       "lat": 35.9664,
       "lon": 40.8012
      }
     ]
    }
   ],
   "not_verified": [
    "הערכות מערכת הביטחון לגבי השאלה האם חיזבאללה יצטרף לעימות ישיר בין איראן לארצות הברית וישראל",
    "טענות טורקיות על מעורבות ישראלית בחימוש קבוצות דרוזיות בדרום סוריה",
    "היקף וזהות הלוחמים הזרים בסוריה והשתלבותם במבנים הצבאיים החדשים"
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
     "value": 3.3273,
     "unit": "ILS",
     "change_pct": -1.53,
     "source_id": "src_ecb",
     "as_of": "2026-11-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים והשמדת רקטות וקני שיגור של חיזבאללה",
      "מחויבות להסכם הפסקת האש לצד מניעת פגיעה באזרחי מדינת ישראל"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי בלבנון ובסוריה",
      "מעקב ובלמום צעדים אסטרטגיים של טורקיה וגורמים עוינים בסוריה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדמות נגד תשתיות טרור בלבנון בעת זיהוי איומים",
      "הגברת המעקב המודיעיני אחר ציר סוריה-טורקיה",
      "תגובה צבאית נקודתית לכל ניסיון הפרה של ריבונות בגבול סוריה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות לחימה ומוכנות מבצעית בעורף לבנון למרות הפסקת האש",
      "הכנה לאפשרות של עימות כולל במקרה של התפרצות מערכה בין איראן לישראל"
     ],
     "forecast": [
      "המשך שיקום כוחות ואימונים של יחידות כוח רדואן בסתר",
      "שמירה על עמימות בנוגע להצטרפות למערכה אזורית רחבה"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "חיזוק שיתוף הפעולה האסטרטגי והקמת ועדה עליונה משותפת עם ממשלת סוריה"
     ],
     "inferred": [
      "ניסיון לאגף את ישראל מבחינה אסטרטגית באמצעות השפעה בסוריה",
      "ביסוס מעורבות אזורית מול צעדים ישראליים בגבולות סוריה"
     ],
     "forecast": [
      "העמקת התיאום המדיני והביטחוני עם משטר המעבר בסוריה",
      "המשך מתיחות דיפלומטית ואזהרות פומביות כלפי ישראל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/israel-releases-syrian-man-detained-during-quneitra-incursion/",
     "accessed_at": "2026-11-26T20:03:59+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1392679",
     "accessed_at": "2026-11-26T20:03:59+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134270",
     "accessed_at": "2026-11-26T20:03:59+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25702",
     "accessed_at": "2026-11-26T20:03:59+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95145",
     "accessed_at": "2026-11-26T20:03:59+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383963155",
     "accessed_at": "2026-11-26T20:03:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T00:43:13+00:00",
  "changes": {
   "NORTH-11262003-01": {
    "kind": "possible",
    "prev": "שיחות דיפלומטיות בביירות על עתיד הביטחון בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11262003-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פשיטה של צה\"ל ושחרור אזרח באזור קוניטרה",
    "score": 1.0
   },
   "NORTH-11262003-03": {
    "kind": "same",
    "from": "assessment",
    "to": "initial",
    "prev": "הידוק שיתוף הפעולה בין סוריה לטורקיה והאשמות נגד ישראל",
    "score": 1.0
   }
  }
 }
};
