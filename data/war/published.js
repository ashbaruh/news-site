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
  "draft": "drafts/iran/2026-11-26T0040__iran-202611260040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-26T00:40:34+00:00",
   "window": {
    "from": "2026-11-25T00:40:34+00:00",
    "to": "2026-11-26T00:40:34+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611260040"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בהסלמה צבאית רב-זירתית הכוללת מצור ימי במצר הורמוז וחילופי מהלומות כבדים בין החות'ים לקואליציה בהובלת סעודיה. במקביל, המיליציות הפרו-איראניות בעיראק מתבצרות מחדש לקראת חידוש הלחימה, וטהראן מאיצה בניית מתקן תת-קרקעי מבוצר בסמוך לאתרי הגרעין המרכזיים שלה. הצדדים מחזיקים בעמדות נוקשות סביב המצור הכלכלי וההסכמים העתידיים לקראת שינויים פוליטיים ומדיניים צפויים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "מתיחות סביב מצור ימי, תקריות פגיעה במכליות ואיומים הדדיים"
    },
    {
     "name": "חצי האי ערב והמפרץ (שלוחות איראן מול סעודיה)",
     "status": "חילופי אש נרחבים הכוללים שיגור טילים וכטב\"מים לעבר מתקני נפט ונמלים סעודיים ותקיפות קואליציה"
    },
    {
     "name": "עיראק",
     "status": "היערכות צבאית של המיליציות הפרו-איראניות וסירוב לפירוק נשק"
    },
    {
     "name": "החזית הישירה איראן מול ישראל וארה\"ב",
     "status": "בניית מתקנים מבוצרים באיראן, דריכות ביטחונית גבוהה ואיומים בהתקפות נגד"
    }
   ],
   "events": [
    {
     "id": "IRAN-11260040-01",
     "title": "היערכות גדודי חזבאללה בעיראק לעימות צבאי מחודש",
     "summary": "המיליציה הפרו-איראנית העבירה ציוד צבאי והקימה עמדות חדשות במערב עיראק כהיערכות לאפשרות של עימות בין ארצות הברית לאיראן, תוך שמירה על מעוזיה בניגוד להוראת הממשלה.",
     "axis": "עיראק מול ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:22:53+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T00:22:53+00:00",
     "last_update_at": "2026-11-26T00:22:53+00:00",
     "what_is_not_verified": "היקף הציוד והמיקומים המדויקים מבוססים על דיווחי תקשורת ומכוני מחקר ולא אומתו רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611265119",
       "published_at": "2026-11-26T00:22:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-02",
     "title": "תקיפות ויירוטי טילים ורחפנים בסעודיה ובתימן",
     "summary": "פיצוצים נשמעו בריאד ויירוטים בוצעו מעל העיר, במקביל לתקיפה על נמלי ג'דה וג'זאן ותקיפת בית הזיקוק בראס תנורה על ידי החות'ים, כאשר הקואליציה פגעה בחודיידה ובצנעא.",
     "axis": "שלוחות איראן (חות'ים) מול סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T16:59:05+00:00",
     "last_update_at": "2026-11-26T00:00:00+00:00",
     "what_is_not_verified": "מידת הנזק בפועל בנמלים ובמתקני הנפט שנויה במחלוקת בין טענות החות'ים לדיווח הסעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/26/iran-war-live-explosion-rocks-sanaa-missiles-intercepted-over-riyadh?traffic_source=rss",
       "published_at": "2026-11-26T00:00:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/houthis-say-hit-two-saudi-ports-response-coalition-strikes",
       "published_at": "2026-11-25T22:30:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/loud-booms-rock-riyadh-houthis-attack-saudi-ports",
       "published_at": "2026-11-25T21:42:56+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepts-houthi-drone-near-jeddah-islamic",
       "published_at": "2026-11-25T20:07:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/yemen-houthis-claim-saudi-arabia-ras-tanura-attack-retaliation-deadly-strikes",
       "published_at": "2026-11-25T16:59:05+00:00"
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
     "id": "IRAN-11260040-03",
     "title": "איומי איראן על רקע המצור הימי האמריקני",
     "summary": "איראן החריפה את אזהרותיה כלפי ארצות הברית, ישראל ומדינות המפרץ, איימה בהפעלת יכולות צבאיות חדשות ודרשה פיצויים על סיוע לתקיפות נגדה.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:08:50+00:00",
     "last_update_at": "2026-11-25T19:08:50+00:00",
     "what_is_not_verified": "מהות היכולות הצבאיות החדשות שבהן איימה טהראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611254651",
       "published_at": "2026-11-25T19:08:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-04",
     "title": "חשיפת הקמת מתקן תת-קרקעי מבוצר באיראן",
     "summary": "תצלומי לוויין חשפו מתחם תת-קרקעי הנבנה בתוך הר באזור שבין נתנז לאיספהאן בקצב מואץ, המוערך כבעל ייעוד צבאי או גרעיני.",
     "axis": "גרעין וביטחון באיראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T17:55:08+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T17:55:08+00:00",
     "last_update_at": "2026-11-25T18:58:46+00:00",
     "what_is_not_verified": "ייעודו המדויק של המתקן (האם הוא מיועד לנשק גרעיני או למערכות טילים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21933606",
       "published_at": "2026-11-25T18:58:46+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkcfuq4yql",
       "published_at": "2026-11-25T17:55:08+00:00"
      }
     ],
     "places": [
      {
       "name": "נתנז, איראן",
       "lat": 33.5071,
       "lon": 51.9136
      },
      {
       "name": "איספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    },
    {
     "id": "IRAN-11260040-05",
     "title": "איום של בכיר בפרלמנט האיראני נגד ארה\"ב",
     "summary": "סגן יושב ראש ועדת הביטחון הלאומי בפרלמנט של איראן איים בפגיעה בבית הלבן במקרה של תקיפה נגד הר המכוש.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T17:58:56+00:00",
     "last_update_at": "2026-11-25T17:58:56+00:00",
     "what_is_not_verified": "היכולת המעשית של טהראן לממש את האיום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134234",
       "published_at": "2026-11-25T17:58:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-06",
     "title": "תקרית ימית ופגיעה במכליות באזור מצר הורמוז",
     "summary": "חיל הים האיראני דיווח שמכלית עלתה על מוקש ימי ממזרח למצר הורמוז ועלתה באש, בעוד דיווחים אחרים ייחסו פגיעה במכלית איראנית לתקיפה באזור המצר.",
     "axis": "המצור הימי ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T16:16:00+00:00",
     "last_update_at": "2026-11-25T16:31:04+00:00",
     "what_is_not_verified": "האם כלי השיט נפגע ממוקש כטענת איראן או מתקיפה צבאית יזומה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_7593e40b89e8ac23",
       "url": "https://t.me/lelotsenzura/95140",
       "published_at": "2026-11-25T16:31:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_7593e40b89e8ac23",
       "url": "https://en.irna.ir/news/86332672/Violating-tanker-catches-fire-after-striking-mine-east-of-Hormuz",
       "published_at": "2026-11-25T16:16:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-07",
     "title": "הצהרת נשיא ארה\"ב על מטרות המערכה והמצור על איראן",
     "summary": "הנשיא טראמפ הצהיר כי מטרתו המרכזית היא מניעת נשק גרעיני מאיראן באמצעות המשך המצור הכלכלי, וציין כי המימון לפעולה מובטח עד ינואר.",
     "axis": "ארה\"ב מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T08:28:54+00:00",
     "last_update_at": "2026-11-25T08:28:54+00:00",
     "what_is_not_verified": "משך תוקף המימון האמריקני לפעילות המבצעית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134199",
       "published_at": "2026-11-25T08:28:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-08",
     "title": "שינוי מבני במנגנון המודיעין האיראני",
     "summary": "המנהיג העליון של איראן מקדם שינוי מבני במשרד המודיעין להגברת כפיפותו הישירה ולחיזוק הפיקוח הפנימי לאחר סיכול בכירים ופגיעות מודיעיניות.",
     "axis": "מודיעין וביטחון פנים באיראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T02:51:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T02:51:00+00:00",
     "last_update_at": "2026-11-25T02:51:00+00:00",
     "what_is_not_verified": "זהות המועמד הסופי שייבחר לעמוד בראש המשרד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_fdd",
       "url": "https://www.fdd.org/analysis/iran-moves-to-restructure-intelligence-ministry-as-5-contenders-emerge-to-lead-it/",
       "published_at": "2026-11-25T02:51:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "ייעודו המדויק של המתקן התת-קרקעי החדש בין איספהאן לנתנז (צבאי קונבנציונלי או גרעיני)",
    "הסיבה המדויקת לפגיעה במכלית במצר הורמוז - פיצוץ מוקש ימי או תקיפת כטב\"ם/פעולה יזומה",
    "מידת הנזק המדויקת בבתי הזיקוק בראס תנורה ובנמלים בסעודיה בעקבות תקיפות החות'ים",
    "דיווחים על הסכם סודי בין מנהיגי ארה\"ב, רוסיה וסין בנוגע לאיראן"
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
     "value": 3.3789,
     "unit": "ILS",
     "change_pct": 1.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן ושלוחותיה",
     "declared": [
      "תגובה ותקיפת יעדים סעודיים ונמלים בים האדום בתגובה לתקיפות נגד תימן",
      "דרישת פיצויים ממדינות האזור המאפשרות תקיפות נגד איראן",
      "התנגדות מלאה לפירוק נשק של המיליציות והשלוחות בעיראק ובלבנון"
     ],
     "inferred": [
      "שמירה על מרחב תמרון גרעיני וצבאי באמצעות העברת תשתיות לעומק תת-קרקעי מבוצר",
      "הפעלת לחץ כלכלי ואנרגטי על מדינות המפרץ כדי לפגוע בלכידות הקואליציה האמריקנית"
     ],
     "forecast": [
      "המשך ביצור מתקני הגרעין והטילים למניעת פגיעה מתקיפות אוויריות אפשריות",
      "החרפת התקיפות באמצעות מיליציות ככל שיימשך המצור הכלכלי והימי"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני בידי המשטר האיראני",
      "המשך הטלת מצור על איראן כדי לאלץ אותה לחתום על הסכם גרעין"
     ],
     "inferred": [
      "הימנעות מקריאה ישירה להפלת המשטר תוך התמקדות בבלימת היכולות הגרעיניות והכלכליות",
      "שימור התיאום הביטחוני וההגנתי עם מדינות המפרץ ובראשן סעודיה"
     ],
     "forecast": [
      "המשך אכיפת המצור הכלכלי והימי לפחות עד תחילת השנה האזרחית החדשה",
      "הגברת הלחץ הדיפלומטי והצבאי למניעת התקדמות של טהראן במתקנים החדשים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "המשך פעולות לסיכול התעצמות והברחות אמצעי לחימה של שלוחות איראן באזור"
     ],
     "inferred": [
      "שאיפה לפגיעה מהותית ביציבות המשטר האיראני ובתוכנית הגרעין שלו",
      "היערכות לפעולה צבאית נרחבת משותפת או עצמאית נגד מתקני הגרעין באיראן"
     ],
     "forecast": [
      "שמירה על רמת כוננות גבוהה מפני תקיפות תגובה איראניות",
      "המשך סיכול מטרות שלוחות איראן לאורך הגבולות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/26/iran-war-live-explosion-rocks-sanaa-missiles-intercepted-over-riyadh?traffic_source=rss",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/houthis-say-hit-two-saudi-ports-response-coalition-strikes",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/iran-moves-to-restructure-intelligence-ministry-as-5-contenders-emerge-to-lead-it/",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611254651",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86332672/Violating-tanker-catches-fire-after-striking-mine-east-of-Hormuz",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21933606",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/yemen-houthis-claim-saudi-arabia-ras-tanura-attack-retaliation-deadly-strikes",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134199",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95140",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkcfuq4yql",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T00:40:20+00:00",
  "changes": {
   "IRAN-11260040-01": {
    "kind": "new"
   },
   "IRAN-11260040-02": {
    "kind": "new"
   },
   "IRAN-11260040-03": {
    "kind": "new"
   },
   "IRAN-11260040-04": {
    "kind": "new"
   },
   "IRAN-11260040-05": {
    "kind": "new"
   },
   "IRAN-11260040-06": {
    "kind": "new"
   },
   "IRAN-11260040-07": {
    "kind": "new"
   },
   "IRAN-11260040-08": {
    "kind": "new"
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
  "draft": "drafts/north/2026-11-26T0043__north-202611260043.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-26T00:43:13+00:00",
   "window": {
    "from": "2026-11-25T00:43:13+00:00",
    "to": "2026-11-26T00:43:13+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611260043"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחץ פנימי וחיצוני גובר על חזבאללה בלבנון, לצד הידוק הברית המדינית-ביטחונית בין המשטר החדש בסוריה לבין טורקיה אל מול ישראל. במקביל, ישראל ממשיכה בפעילות סיכול הברחות נשק מסוריה ובפשיטות נקודתיות בדרום סוריה, בעוד סוריה סובלת מחוסר יציבות פנימי ומתקיפות של ארגון דאעש. בתוך לבנון מחריף העימות בין השלטונות לחזבאללה על רקע מעצר פעילי הארגון ודרישות לפירוקו מנשקו.",
   "fronts": [
    {
     "name": "דרום לבנון וגבול ישראל-לבנון",
     "status": "מתיחות צבאית, המשך סיכול הברחות אמל\"ח והיערכות לסיום מנדט יוניפי\"ל"
    },
    {
     "name": "פנים לבנון (ממשל מול חזבאללה)",
     "status": "חיכוך פוליטי ומשפטי סביב מעצר חוליות חמושות ודרישות לפירוק נשק הארגון"
    },
    {
     "name": "דרום סוריה וגבול ישראל-סוריה",
     "status": "פשיטות קרקעיות ישראליות מוגבלות וחשש מעימות אזורי סביב חימוש קבוצות מקומיות"
    },
    {
     "name": "צפון ומזרח סוריה",
     "status": "התקפות טרור של דאעש וסיכוני מוקשים נגד כוחות הביטחון ואזרחים"
    },
    {
     "name": "ציר אנקרה-דמשק",
     "status": "התקרבות אסטרטגית והקמת ועדה עליונה משותפת מול מהלכי ישראל"
    }
   ],
   "events": [
    {
     "id": "NORTH-11260043-01",
     "title": "מתקפת דאעש על מפקדת ביטחון בחסכה",
     "summary": "פיגוע שכלל אופנוע תופת וארבעה מחבלים, אשר שניים מהם פוצצו את עצמם, גרם למותם של שני אנשי כוחות ביטחון פנים ולפציעת חמישה נוספים בסמוך למפקדה בשכונת אל-מושירפה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T20:40:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T20:40:27+00:00",
     "last_update_at": "2026-11-25T23:46:48+00:00",
     "what_is_not_verified": "זהות המפקדה המדויקת והאם היו נפגעים נוספים מקרב התוקפים מלבד שני המתאבדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21934723",
       "published_at": "2026-11-25T23:46:48+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/isis-attack-on-military-headquarters-kills-2-in-northeastern-syria-official-says/4138076",
       "published_at": "2026-11-25T20:47:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/155167/",
       "published_at": "2026-11-25T20:40:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11260043-02",
     "title": "הרוגים בהתפוצצות מוקש בצפון סוריה",
     "summary": "שלושה בני אדם, בהם נער ושני גברים בשנות השישים לחייהם, נהרגו ושניים נוספים נפצעו כתוצאה מפיצוץ מוקש באזור כפרי.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T19:30:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:30:38+00:00",
     "last_update_at": "2026-11-25T19:30:38+00:00",
     "what_is_not_verified": "זהות מניחי המוקש והנסיבות המדויקות של הפיצוץ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/3-killed-including-teenage-boy-2-injured-in-landmine-explosion-in-northern-syria/4137955",
       "published_at": "2026-11-25T19:30:38+00:00"
      }
     ],
     "places": [
      {
       "name": "א-רקה, סוריה",
       "lat": 35.9497,
       "lon": 39.0089
      }
     ]
    },
    {
     "id": "NORTH-11260043-03",
     "title": "פשיטה של צה\"ל ושחרור אזרח באזור קוניטרה",
     "summary": "כוח צבאי ישראלי שכלל עשרה כלי רכב פשט על עיירה וכפר סמוך, ביצע חיפושים בבתים, עיכב אזרח לחקירה ושחרר אותו למחרת בבוקר.",
     "axis": "ישראל-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T18:30:59+00:00",
     "last_update_at": "2026-11-25T18:30:59+00:00",
     "what_is_not_verified": "סיבת העיכוב והמקום המדויק שבו הוחזק האזרח טרם שחרורו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/israel-releases-syrian-man-detained-during-quneitra-incursion/",
       "published_at": "2026-11-25T18:30:59+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ובאתא אל-חשב, סוריה",
       "lat": 33.2258,
       "lon": 35.8341
      },
      {
       "name": "עין אל-בידא, סוריה",
       "lat": 35.7704,
       "lon": 36.1549
      }
     ]
    },
    {
     "id": "NORTH-11260043-04",
     "title": "הידוק שיתוף הפעולה בין סוריה לטורקיה והאשמות נגד ישראל",
     "summary": "גורמי ביטחון בישראל עוקבים אחר התקרבות אסטרטגית והקמת ועדה עליונה משותפת בין הנשיאים ארדואן וא-שרע, בעוד שר החוץ הטורקי מאשים את ישראל בחימוש גורמים דרוזים ובהכנת תקיפה בדרום סוריה.",
     "axis": "סוריה-טורקיה-ישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T19:21:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T19:21:26+00:00",
     "last_update_at": "2026-11-25T19:21:26+00:00",
     "what_is_not_verified": "האם אכן מועבר נשק ישראלי לקבוצות דרוזיות בדרום סוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963155",
       "published_at": "2026-11-25T19:21:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11260043-05",
     "title": "מעצר חוליית חזבאללה בצפון לבנון ואיומי הנהגת הארגון",
     "summary": "שופט בלבנון הוציא צווי מעצר נגד חמישה פעילי חזבאללה שנתפסו עם מפות ומסמכים בחשד להקמת חוליה חמושה, והורה לחקור שלושה נוספים; מנהיג הארגון נעים קאסם דרש את שחרורם והזהיר מפני פגיעה בשלום האזרחי.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T17:52:29+00:00",
     "last_update_at": "2026-11-25T21:12:43+00:00",
     "what_is_not_verified": "היקף התוכניות המבצעיות של החוליה שנעצרה בצפון לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_424d8b22b343bf60",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-demands-release-five-detained-members",
       "published_at": "2026-11-25T21:12:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_424d8b22b343bf60",
       "url": "https://www.newarab.com/news/lebanon-judge-issues-warrants-detained-hezbollah-members",
       "published_at": "2026-11-25T20:40:58+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_424d8b22b343bf60",
       "url": "https://english.almanar.com.lb/article/155132/",
       "published_at": "2026-11-25T18:30:58+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_7579e57c679cc511",
       "url": "https://english.almanar.com.lb/article/155122/",
       "published_at": "2026-11-25T17:52:29+00:00"
      }
     ],
     "places": [
      {
       "name": "בתרון, לבנון",
       "lat": 34.2549,
       "lon": 35.6589
      },
      {
       "name": "בשארי, לבנון",
       "lat": 34.2507,
       "lon": 36.01
      }
     ]
    },
    {
     "id": "NORTH-11260043-06",
     "title": "הצהרת שר הביטחון על סיכול הברחות נשק והרס תשתיות בדרום לבנון",
     "summary": "שר הביטחון הישראלי הצהיר כי חיל האוויר סיכל ניסיונות להברחת אמצעי לחימה מסוריה ללבנון, כולל תקיפה בנבי שית, וציין כי צה\"ל השמיד כ-23,000 מבנים ותשתיות טרור בעשרות כפרים בדרום לבנון.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T09:46:32+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T09:46:32+00:00",
     "last_update_at": "2026-11-25T09:46:32+00:00",
     "what_is_not_verified": "האימות העצמאי של מספר המבנים המדויק שנהרסו בדרום לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963018",
       "published_at": "2026-11-25T09:46:32+00:00"
      }
     ],
     "places": [
      {
       "name": "נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      }
     ]
    },
    {
     "id": "NORTH-11260043-07",
     "title": "שיחות דיפלומטיות בביירות על עתיד הביטחון בדרום לבנון",
     "summary": "שר החוץ הלבנוני דן עם שגרירי רוסיה וסין בהיערכות למניעת ואקום ביטחוני בדרום המדינה לקראת סיום מנדט יוניפי\"ל וביציאת הכוחות הבינלאומיים.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T10:35:42+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T10:35:42+00:00",
     "last_update_at": "2026-11-25T10:35:42+00:00",
     "what_is_not_verified": "המתווה המדויק שיחליף את כוחות יוניפי\"ל בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/969638/fm-rajji-discusses-post-unifil-security-and-bilateral-ties-with-foreig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969638",
       "published_at": "2026-11-25T10:35:42+00:00"
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
     "id": "NORTH-11260043-08",
     "title": "חקיקה חדשה בסוריה המאפשרת עתירות נגד החלטות ממשל",
     "summary": "נשיא סוריה אחמד א-שרע חתם על חוק המבטל הוראות שמנעו ביקורת שיפוטית על החלטות הרשות המבצעת והממשל, לאחר אישור הפרלמנט.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:00:57+00:00",
     "last_update_at": "2026-11-25T19:00:57+00:00",
     "what_is_not_verified": "מידת היישום המעשי של החוק במערכת המשפט הסורית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/al-sharaa-lifts-bar-on-court-challenges-to-government-decisions/",
       "published_at": "2026-11-25T19:00:57+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    }
   ],
   "not_verified": [
    "טענת שר החוץ הטורקי כי ישראל מחמשת קבוצות דרוזיות בדרום סוריה ומכינה פעולה צבאית",
    "מספר המבנים ותשתיות הטרור המדויק שהושמדו בכפרי דרום לבנון לפי הצהרת שר הביטחון הישראלי",
    "פרטי התשתית והיעדים של חוליית חזבאללה שנעצרה בצפון לבנון עם מפות ומסמכים",
    "מידת ההתערבות הצבאית שטורקיה או סוריה ינקטו אם תתרחש פעולה ישראלית בדרום סוריה"
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
     "value": 3.3789,
     "unit": "ILS",
     "change_pct": 1.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת הברחות אמצעי לחימה מסוריה לידי חזבאללה בלבנון",
      "פגיעה בתשתיות הטרור וסיכול התעצמות מחודשת בדרום לבנון"
     ],
     "inferred": [
      "יצירת חיץ ביטחוני ומעקב הדוק אחר ההתקרבות בין דמשק לאנקרה",
      "שימור חופש פעולה מבצעי בתוך שטח סוריה ולבנון"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ממוקדות בנתיבי הברחה ובגבול סוריה-לבנון",
      "הגברת החיכוך המדיני מול טורקיה על רקע הפעילות בדרום סוריה"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "הגנה על קיום הארגון ושמירה על נשקו למרות הלחצים",
      "דרישה לשחרור מיידי של פעיליו העצורים בידי רשויות לבנון"
     ],
     "inferred": [
      "שיקום מערכי ההברחה וההתארגנות בצפון לבנון לאחר הפגיעות שספג",
      "הרתעת הממשל הלבנוני מנקיטת צעדים ממשיים לפירוקו מנשק"
     ],
     "forecast": [
      "החרפת העימות המילולי והפוליטי מול נשיאות לבנון ומערכת המשפט",
      "ניסיונות מתמשכים לייבא אמל\"ח דרך נתיבים חלופיים מסוריה"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "אזהרה מפני פעולה צבאית ישראלית בדרום סוריה ומניעת עימות אזורי",
      "הידוק שיתוף הפעולה הביטחוני והמדיני עם סוריה באמצעות ועדה עליונה משותפת"
     ],
     "inferred": [
      "הגבלת חופש הפעולה וההשפעה הישראלית בסוריה",
      "ביסוס מעמדה של אנקרה כגורם המשפיע והמגן המרכזי של המשטר הסורי החדש"
     ],
     "forecast": [
      "העמקת התיאום הביטחוני עם סוריה לקראת בלימת מהלכים ישראליים",
      "המשך קו דיפלומטי תוקפני כלפי ישראל בזירה הבינלאומית"
     ]
    },
    {
     "actor": "סוריה (משטר א-שרע)",
     "declared": [
      "ביסוס שלטון החוק ופתיחת החלטות ממשל לביקורת שיפוטית",
      "התנגדות לפשיטות צבאיות ישראליות והפרת הריבונות"
     ],
     "inferred": [
      "הישענות על תמיכת טורקיה כדי לבסס שליטה מול אתגרי פנים ואיומי חוץ",
      "התמודדות עם חוסר היציבות והטרור הגובר מצד דאעש במזרח המדינה"
     ],
     "forecast": [
      "המשך מאמצים לייצוב השלטון הפנימי תוך הימנעות מעימות צבאי ישיר עם צה\"ל",
      "הגברת שיתוף הפעולה הצבאי והמודיעיני עם טורקיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/155122/",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/3-killed-including-teenage-boy-2-injured-in-landmine-explosion-in-northern-syria/4137955",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/al-sharaa-lifts-bar-on-court-challenges-to-government-decisions/",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21934723",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/969638/fm-rajji-discusses-post-unifil-security-and-bilateral-ties-with-foreig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969638",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-demands-release-five-detained-members",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-judge-issues-warrants-detained-hezbollah-members",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383963018",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T00:42:12+00:00",
  "changes": {
   "NORTH-11260043-01": {
    "kind": "new"
   },
   "NORTH-11260043-02": {
    "kind": "new"
   },
   "NORTH-11260043-03": {
    "kind": "new"
   },
   "NORTH-11260043-04": {
    "kind": "new"
   },
   "NORTH-11260043-05": {
    "kind": "new"
   },
   "NORTH-11260043-06": {
    "kind": "possible",
    "prev": "פיצוץ רחפן ישראלי סמוך לטכנאים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11260043-07": {
    "kind": "possible",
    "prev": "תקיפות צה\"ל בכפרים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11260043-08": {
    "kind": "new"
   }
  }
 }
};
