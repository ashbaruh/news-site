/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-15T0507__yemen-202610150507.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-15T05:07:59+00:00",
   "window": {
    "from": "2026-10-14T05:07:59+00:00",
    "to": "2026-10-15T05:07:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610150507"
   },
   "summary": "הזירה בתימן וסעודיה מתאפיינת בהסלמה צבאית חריפה, הכוללת מתקפות כטב\"מים וטילים של החות'ים לעבר מתקני נפט ושדות תעופה בשטח סעודיה (כולל פגיעה במטה אראמכו בדהאראן ובריאד), לצד תקיפות נגד של הקואליציה בהובלת סעודיה בתימן. במקביל, מתנהלת לחימה קרקעית עצימה בתוך תימן סביב העיר תעז ובמחוזות הדרום, המלווה באזהרות של גורמים בינלאומיים מפני אסון הומניטרי חמור.",
   "fronts": [
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעיל והסלמה חריפה"
    },
    {
     "name": "החזית הפנימית בתימן (תעז והדרום)",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10150507-01",
     "title": "יירוט כטב\"ם מעל המחוז המזרחי בסעודיה",
     "summary": "הקואליציה בהובלת סעודיה יירטה והשמידה כטב\"ם חודר במרחב האווירי של סעודיה.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T01:48:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T01:48:44+00:00",
     "last_update_at": "2026-10-15T01:48:44+00:00",
     "what_is_not_verified": "לא צוינו פרטים לא מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_fca2422cf4fffa0c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-intercepts-drone-over-saudi-airspace-spokesman-says",
       "published_at": "2026-10-15T01:48:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10150507-02",
     "title": "טענת החות'ים על פגיעה במטוס סעודי",
     "summary": "החות'ים טענו שפגעו במטוס קרב סעודי מסוג טייפון באמצעות טיל אוויר-אוויר במרחב האווירי של תימן.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T22:54:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T22:54:25+00:00",
     "last_update_at": "2026-10-15T01:48:44+00:00",
     "what_is_not_verified": "השלטונות הסעודיים ומקורות עצמאיים לא אישרו את דבר המתקפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-intercepts-drone-over-saudi-airspace-spokesman-says",
       "published_at": "2026-10-15T01:48:44+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-saudi-military-aircraft-struck-directly-over-yemen",
       "published_at": "2026-10-14T23:07:57+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48565",
       "published_at": "2026-10-14T22:54:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10150507-03",
     "title": "הנחיות חירום לשגרירות ארצות הברית בסעודיה",
     "summary": "שגרירות ארצות הברית בסעודיה דרשה מציבור העובדים שלה לקבל אישור מיוחד לשימוש בשדות תעופה בממלכה בעקבות מתקפות הטילים והכטב\"מים האחרונות.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T01:05:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T01:05:25+00:00",
     "last_update_at": "2026-10-15T01:05:25+00:00",
     "what_is_not_verified": "לא צוינו פרטים לא מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_ced3d13331e15661",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-employees-need-special-authorisation-use-saudi-airports",
       "published_at": "2026-10-15T01:05:25+00:00"
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
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    },
    {
     "id": "YEMEN-10150507-04",
     "title": "קריאת האיחוד האירופי להסרת המצור מעל תעז",
     "summary": "האיחוד האירופי קרא לכוחות החות'ים להסיר את המצור מעל העיר תעז כדי לאפשר הכנסת סיוע הומניטרי.",
     "axis": "הלחימה בתימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T19:58:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T19:58:55+00:00",
     "last_update_at": "2026-10-14T22:55:05+00:00",
     "what_is_not_verified": "לא צוינו פרטים לא מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4aab342bb9b750bb",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/eu-calls-houthis-lift-siege-yemens-taiz",
       "published_at": "2026-10-14T22:55:05+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ef042f1b96523595",
       "url": "https://www.sabanew.net/viewstory/154013",
       "published_at": "2026-10-14T19:58:55+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10150507-05",
     "title": "עימותים ונפגעים באזור תעז לפי הצבא בתימן",
     "summary": "צבא תימן דיווח על הרוגים ופצועים בקרב כוחות החות'ים במהלך עימותים במחוז תעז.",
     "axis": "הלחימה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T21:58:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T21:58:01+00:00",
     "last_update_at": "2026-10-14T21:58:01+00:00",
     "what_is_not_verified": "הנתונים על מספר הנפגעים לא אומתו בידי מקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_77af19a7e8c03a61",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-army-says-200-houthis-killed-wounded-clashes-taiz",
       "published_at": "2026-10-14T21:58:01+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10150507-06",
     "title": "פגיעה במטה חברת אראמכו בסעודיה",
     "summary": "החות'ים תקפו את מטה חברת הנפט אראמכו בדמאם/דהראן, ורשויות סעודיה אישרו כי התפתחה שריפה מוגבלת במקום.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T08:51:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T08:51:14+00:00",
     "last_update_at": "2026-10-14T18:23:53+00:00",
     "what_is_not_verified": "היקף הנזק המלא מעבר למה שדווח לא אומת באופן עצמאי מלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-targeted-saudi-oil-giant-aramco-vow-more-attacks",
       "published_at": "2026-10-14T18:23:53+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/crx2d60y1py3o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-14T12:26:13+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131894",
       "published_at": "2026-10-14T08:51:14+00:00"
      }
     ],
     "places": [
      {
       "name": "דהראן, סעודיה",
       "lat": 26.2967,
       "lon": 50.1202
      }
     ]
    },
    {
     "id": "YEMEN-10150507-07",
     "title": "קריאה לגיוס כללי בדרום תימן נגד החות'ים",
     "summary": "מנהיג בדלני בדרום תימן קרא לתושבים לבצע גיוס כללי כדי לעצור את התקדמות החות'ים.",
     "axis": "הלחימה בתימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T16:41:38+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T16:41:38+00:00",
     "last_update_at": "2026-10-14T16:41:38+00:00",
     "what_is_not_verified": "לא צוינו פרטים לא מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-separatist-leader-calls-mobilisation-against-houthis",
       "published_at": "2026-10-14T16:41:38+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-10150507-08",
     "title": "גינוי הרשות הפלסטינית למתקפות החות'ים",
     "summary": "הרשות הפלסטינית גינתה את מתקפות החות'ים על שדה התעופה בריאד והביעה סולידריות עם סעודיה.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T11:01:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T11:01:58+00:00",
     "last_update_at": "2026-10-14T11:01:58+00:00",
     "what_is_not_verified": "לא צוינו פרטים לא מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-saudi-tensions-rise-palestinians-question-irans-goals",
       "published_at": "2026-10-14T11:01:58+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "טענת החות'ים כי פגעו ישירות במטוס קרב סעודי מסוג טייפון מעל צעדה",
    "היקף הנזק המדויק במטה חברת אראמכו מעבר לשריפה המוגבלת שדווחה",
    "מספרי הנפגעים המדויקים בקרבות בתעז"
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
      "המשך התקיפות על שדות תעופה ומתקני אנרגיה בסעודיה"
     ],
     "inferred": [
      "הפעלת לחץ פוליטי וצבאי להשגת הכרה בלגיטימיות של שלטונם",
      "הרחבת השליטה הטריטוריאלית בתימן ופגיעה בתשתיות סעודיות"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר יעדים בסעודיה",
      "ניסיונות להדק את המצור על ערים מרכזיות כמו תעז"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על מתקנים חיוניים ואזרחיים בממלכה",
      "יירוט איומים אוויריים בשמי סעודיה"
     ],
     "inferred": [
      "תגובה צבאית באמצעות תקיפות אוויריות בתימן כדי לבלום את מתקפות החות'ים",
      "התמודדות עם קריסת אסטרטגיית ההכלה שהונהגה בשנים האחרונות"
     ],
     "forecast": [
      "המשך התקיפות האוויריות נגד מעוזי החות'ים בצנעא ובאזורים נוספים",
      "הגברת אמצעי האבטחה סביב מתקני תשתית קריטיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/crx2d60y1py3o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-15T05:07:59+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-army-says-200-houthis-killed-wounded-clashes-taiz",
     "accessed_at": "2026-10-15T05:07:59+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-saudi-tensions-rise-palestinians-question-irans-goals",
     "accessed_at": "2026-10-15T05:07:59+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154013",
     "accessed_at": "2026-10-15T05:07:59+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131894",
     "accessed_at": "2026-10-15T05:07:59+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48565",
     "accessed_at": "2026-10-15T05:07:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-14T15:52:21+00:00",
  "changes": {
   "YEMEN-10150507-01": {
    "kind": "new"
   },
   "YEMEN-10150507-02": {
    "kind": "new"
   },
   "YEMEN-10150507-03": {
    "kind": "new"
   },
   "YEMEN-10150507-04": {
    "kind": "new"
   },
   "YEMEN-10150507-05": {
    "kind": "possible",
    "prev": "התקדמות החות'ים לעבר העיר תעז",
    "score": 0.633
   },
   "YEMEN-10150507-06": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפת מתקני ארמקו ומטרות נוספות בסעודיה",
    "score": 1.0
   },
   "YEMEN-10150507-07": {
    "kind": "new"
   },
   "YEMEN-10150507-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-15T0505__iran-202610150505.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-15T05:05:44+00:00",
   "window": {
    "from": "2026-10-14T05:05:44+00:00",
    "to": "2026-10-15T05:05:44+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610150505"
   },
   "summary": "העימות הצבאי והכלכלי בין איראן לבין ארה\"ב מחריף על רקע מצור ימי אמריקאי וסנקציות, לצד תוכניות תקיפה הכוללות שימוש בחימוש כבד נגד אתרי גרעין ותשתיות. בתגובה, איראן מגבירה את הפגיעה בכלי שיט מסחריים במצר הורמוז ומשלבת פעולות לוחמת מידע ורשת. במקביל, שני הצדדים מחליפים איומים בהמשך הלחימה עד להשגת ויתורים הדדיים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "הסלמה ימית הכוללת פגיעה בספינות סוחר, הטבעת כלי שיט ופעילות סיור הדדית מול הכוחות האמריקאיים"
    },
    {
     "name": "החזית הכלכלית והסנקציות",
     "status": "אכיפת מצור על נמלים והטלת עיצומים פיננסיים לצד צמצום ייצוא הנפט האיראני"
    },
    {
     "name": "מערכת התודעה והסייבר",
     "status": "מבצעי השפעה מבוססי בינה מלאכותית ורשתות חשבונות מזויפים המכוונים לשיח הפוליטי בארה\"ב"
    }
   ],
   "events": [
    {
     "id": "IRAN-10150505-01",
     "title": "תוכניות תקיפה אמריקאיות הכוללות שימוש בפצצה כבדה נגד אתרי גרעין ואנרגיה באיראן",
     "summary": "הצבא האמריקאי גיבש תוכניות מבצעיות הכוללות אפשרות לשימוש בפצצת ענק מסוג GBU-43/B נגד תשתיות אנרגיה ואתרי גרעין באיראן, בכפוף להוראת הנשיא.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T04:15:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T04:15:35+00:00",
     "last_update_at": "2026-10-15T04:46:27+00:00",
     "what_is_not_verified": "האם התוכניות יאושרו לפועל ומה מידת היעילות המבצעית נגד היעדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_cnn",
       "url": "https://www.al-monitor.com/originals/2026/10/us-military-weighs-use-mother-all-bombs-potential-future-strikes-iran-cnn-says",
       "published_at": "2026-10-15T04:46:27+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_cnn",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21629608",
       "published_at": "2026-10-15T04:44:37+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_cnn",
       "url": "https://www.ynet.co.il/news/article/hksqbr6igg",
       "published_at": "2026-10-15T04:15:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10150505-02",
     "title": "השמדת כלי שיט איראני שעסק במעקב על ידי צבא ארה\"ב",
     "summary": "כוחות ארה\"ב השמידו סירה השייכת למשמרות המהפכה במרחב הימי לאחר שעקבה אחר ספינות אמריקאיות, כאשר אנשי צוותה נטשו אותה טרם התקיפה.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T20:06:51+00:00",
     "last_update_at": "2026-10-15T02:37:14+00:00",
     "what_is_not_verified": "קיים חוסר התאמה במיקום המדויק בין מצר הורמוז למפרץ עומאן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48568",
       "published_at": "2026-10-15T02:37:14+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/14/us-destroys-dhow-suspected-of-iranian-command-and-control?traffic_source=rss",
       "published_at": "2026-10-14T23:58:13+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94656",
       "published_at": "2026-10-14T20:06:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10150505-03",
     "title": "השבתת אלפי חשבונות המיוחסים למבצעי השפעה זרים ברשת החברתית",
     "summary": "הנהלת פלטפורמת X הודיעה על חסימת יותר מ-13 אלף חשבונות שהיו מעורבים בפעילות השפעה פוליטית המקושרת בין היתר לאיראן לקראת הבחירות בארה\"ב.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T02:14:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T02:14:04+00:00",
     "last_update_at": "2026-10-15T02:14:04+00:00",
     "what_is_not_verified": "החלוקה המדויקת של כמות החשבונות שמשויכים ספציפית לאיראן מתוך הסך הכולל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/x-suspends-13000-accounts-linked-iran-china-and-russia-targeting-us",
       "published_at": "2026-10-15T02:14:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10150505-04",
     "title": "פגיעה והטבעת ספינות סוחר במרחב מצר הורמוז",
     "summary": "שני כלי שיט מסחריים, כולל אוניית מכולות, טבעו במצר הורמוז לאחר שנפגעו משיגורים ומטענים במסגרת תקיפות איראניות נגד נתיבי שיט.",
     "axis": "איראן-נתיבי שיט",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T15:34:19+00:00",
     "last_update_at": "2026-10-15T00:00:00+00:00",
     "what_is_not_verified": "סוג החימוש המדויק שפגע בכל אחת מהספינות (טיל, כטב\"ם או מוקש)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/15/iran-war-live-tehran-vows-to-fight-until-us-yields-as-ships-sink-in-hormuz?traffic_source=rss",
       "published_at": "2026-10-15T00:00:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131926",
       "published_at": "2026-10-14T19:31:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/two-ships-sink-near-hormuz-after-being-hit-projectiles-amid-surge-attacks",
       "published_at": "2026-10-14T17:46:37+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/14/container-ship-sinks-strait-of-hormuz-surge-iranian-attacks-iran-us-midterm-elections",
       "published_at": "2026-10-14T17:05:42+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94652",
       "published_at": "2026-10-14T16:58:38+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/crkg7q97z078o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-14T15:34:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10150505-05",
     "title": "קנס כספי נרחב על מוסד פיננסי אמריקאי עקב הפרת סנקציות",
     "summary": "משרד האוצר של ארה\"ב הטיל עיצום כספי על בנק אוף אמריקה בעקבות כשלים מתמשכים בדיווח על עסקאות חשודות והעברת תשלומים בניגוד למשטר העיצומים מול איראן ומדינות נוספות.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T19:15:43+00:00",
     "last_update_at": "2026-10-14T19:15:43+00:00",
     "what_is_not_verified": "הסכום המדויק של כספים שהועברו ספציפית לטובת גורמים איראניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/bank-of-america-hit-with-historic-1-2-billion-fine-for-illicit-finance-failures/",
       "published_at": "2026-10-14T19:15:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10150505-06",
     "title": "הפעלת רשת כותבים וזהויות פיקטיביות מבוססות בינה מלאכותית מטעם איראן",
     "summary": "נחשפה פעילות איראנית שעשתה שימוש בבינה מלאכותית ליצירת דמויות עיתונאים מערביים בדויים ופרסום עשרות מאמרים בכלי תקשורת מקוונים נגד ארה\"ב וישראל.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T14:30:43+00:00",
     "last_update_at": "2026-10-14T14:30:43+00:00",
     "what_is_not_verified": "זהות המפעילים המדויקת בתוך מנגנוני המשטר האיראני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_openai",
       "url": "https://www.fdd.org/analysis/bogus-bylines-ai-lets-one-iran-origin-operation-run-the-full-influence-playbook/",
       "published_at": "2026-10-14T14:30:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת נשיא ארה\"ב בדבר השמדת כלל מערכי ההגנה האווירית, הצי והמכ\"ם של איראן",
    "ההתחייבות הנטענת של נשיא ארה\"ב שלא לפגוע בהנהגה האיראנית הנוכחית",
    "מידת ההיתכנות וההשפעה המבצעית של הטלת פצצת GBU-43/B על מתקן המכוש",
    "היקף התקיפות האוויריות המתוכננות ומשך הזמן המדויק שלהן"
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
      "להמשיך בלחימה עד שארצות הברית תיענה לדרישותיה ותשנה את התנהלותה",
      "להגיב לתקיפות, למצור הימי על הנמלים ולהחרפת הסנקציות הכלכליות"
     ],
     "inferred": [
      "לשבש את תנועת הנפט העולמית במצר הורמוז כדי ליצור לחץ כלכלי ופוליטי בינלאומי",
      "לשמר יכולות גרעיניות והרתעה צבאית מול איומי הפצצה אמריקאיים"
     ],
     "forecast": [
      "המשך פגיעה מכוונת בספינות סוחר ואוניות משא במפרץ",
      "שילוב מתמשך של תעמולה ולוחמת מידע לקראת מועדי בחירות בארה\"ב"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "לסיים את המלחמה בהקדם ולהביא להורדת מחירי הדלק בעולם",
      "שליטה מלאה במרחב השיט במצר הורמוז ומניעת התבססות איומים"
     ],
     "inferred": [
      "חיסול מוקדי הפיקוד, מערכי ההגנה ותשתיות האנרגיה והגרעין של איראן",
      "כפיית תנאי סיום נוחים ושיקום הרתעה אזורית בטרם בחירות האמצע"
     ],
     "forecast": [
      "הוצאה לפועל של מכות אש כבדות נגד יעדים אסטרטגיים אם יינתן אישור הפיקוד הבכיר",
      "הגברת האכיפה נגד מערכות פיננסיות וסחר עוקף עיצומים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/15/iran-war-live-tehran-vows-to-fight-until-us-yields-as-ships-sink-in-hormuz?traffic_source=rss",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/two-ships-sink-near-hormuz-after-being-hit-projectiles-amid-surge-attacks",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/crkg7q97z078o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/bogus-bylines-ai-lets-one-iran-origin-operation-run-the-full-influence-playbook/",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/14/container-ship-sinks-strait-of-hormuz-surge-iranian-attacks-iran-us-midterm-elections",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21629608",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/x-suspends-13000-accounts-linked-iran-china-and-russia-targeting-us",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131926",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48568",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94652",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hksqbr6igg",
     "accessed_at": "2026-10-15T05:05:44+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-14T15:26:23+00:00",
  "changes": {
   "IRAN-10150505-01": {
    "kind": "new"
   },
   "IRAN-10150505-02": {
    "kind": "new"
   },
   "IRAN-10150505-03": {
    "kind": "new"
   },
   "IRAN-10150505-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה בספינות מכולות במצר הורמוז",
    "score": 0.65
   },
   "IRAN-10150505-05": {
    "kind": "new"
   },
   "IRAN-10150505-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-15T0506__ukraine-202610150506.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-15T05:06:41+00:00",
   "window": {
    "from": "2026-10-14T05:06:41+00:00",
    "to": "2026-10-15T05:06:41+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "ukraine-202610150506"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בלחץ אווירי רוסי כבד על מתקני אנרגיה, תשתיות תחבורה ומבני מגורים בעורף האוקראיני, לצד תקיפות נגד אוקראיניות לעבר מתקנים צבאיים ומכליות נפט ברוסיה ובים השחור. במישור הקרקעי נרשמת פעילות מבצעית בגזרת לימאן שבדונצק לצד לחימה ופעולות בעורף הכוחות במחוז חרקוב. במקביל נרשמת טלטלה ביחסים הדיפלומטיים והמבצעיים של אוקראינה עם ארצות הברית נוכח עסקת סולר בין וושינגטון למוסקבה והגבלות שימוש ברשת התקשורת סטארלינק.",
   "fronts": [
    {
     "name": "גזרת לימאן (מחוז דונצק)",
     "status": "כוחות אוקראינים מדווחים על התקדמות ושחרור שטחים במסגרת פעילות התקפית"
    },
    {
     "name": "העורף והתשתיות באוקראינה",
     "status": "תקיפות אוויריות רוסיות חוזרות ונשנות נגד מטרות תעשייה, אנרגיה ומגורים במחוזות טרנופול, דניפרופטרובסק, קירובוהראד, אודסה וקייב"
    },
    {
     "name": "הים השחור",
     "status": "פעילות כטב\"מים ימיים ותקיפות הדדיות על מכליות דלק ונפט סמוך לחופי רוסיה ותעלת סולינה"
    },
    {
     "name": "גזרת אוריחיב (זפוריז'יה)",
     "status": "טענות מומחים רוסים על שחיקת הכוחות האוקראיניים באזור"
    },
    {
     "name": "מחוז חרקוב",
     "status": "תקריות ירי בעורף הכוחות ומעצר חייל רוסי"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10150506-01",
     "title": "הגבלות והשבה חלקית של מהירות רשת סטארלינק עבור צבא אוקראינה",
     "summary": "הוטלו מגבלות מהירות על מסופי מערכת התקשורת הלוויינית סטארלינק וסטארשילד באוקראינה, שפגעו בהפעלת כטב\"מים. בהמשך נמסר על שחזור הפעילות במהירות של עד מאה ושישים קילומטרים בשעה.",
     "axis": "עורף וטכנולוגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T18:00:00+00:00",
     "last_update_at": "2026-10-15T04:43:04+00:00",
     "what_is_not_verified": "הגורם הישיר המדויק להטלת המגבלה ומניעיו, והאם המהירות הוגבלה בתחילה ל-70 קמ\"ש או ל-161 קמ\"ש בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/15/starshield-starlink-ukraine-restriction-explained",
       "published_at": "2026-10-15T04:43:04+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/14/starshield-systems-are-owned-and-controlled-by-the-u-s-government-musk-responds-to-ukraine-s-complaints-about-restrictions-on-the-military-version-of-starlink",
       "published_at": "2026-10-14T20:34:10+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131923",
       "published_at": "2026-10-14T18:13:01+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058054/",
       "published_at": "2026-10-14T18:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10150506-02",
     "title": "פגיעת כטב\"ם רוסי במפעל ייצור בצ'ורטקיב",
     "summary": "מתקפת כטב\"ם פגעה במתקן ייצור במחוז טרנופול וגרמה לפציעתם של חמישה בני אדם.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T04:16:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T04:16:00+00:00",
     "last_update_at": "2026-10-15T04:16:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקן הייצור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4174550-drone-attack-damages-business-in-ternopil-region-five-people-injured.html",
       "published_at": "2026-10-15T04:16:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'ורטקיב, אוקראינה",
       "lat": 49.0161,
       "lon": 25.7925
      }
     ]
    },
    {
     "id": "UKRAINE-10150506-03",
     "title": "תקיפות במחוז דניפרופטרובסק ודליקות מגורים בפבלוהראד",
     "summary": "הפגזות ותקיפות במחוז דניפרופטרובסק גרמו למותם של שני בני אדם, ומספר בתים פרטיים עלו באש בפבלוהראד.",
     "axis": "מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T03:48:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T03:48:43+00:00",
     "last_update_at": "2026-10-15T03:48:43+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בפבלוהראד טרם הוערך סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-attacks-on-dnipropetrovsk-oblast-kill-2-spark-residential-fires/",
       "published_at": "2026-10-15T03:48:43+00:00"
      }
     ],
     "places": [
      {
       "name": "פבלוהראד, אוקראינה",
       "lat": 48.5317,
       "lon": 35.8704
      }
     ]
    },
    {
     "id": "UKRAINE-10150506-04",
     "title": "מתקפת טילים אוקראינית על בסיס אוויר בוריסוגלבסק",
     "summary": "טילים אוקראיניים שוגרו לעבר שדה התעופה הצבאי בוריסוגלבסק שבמחוז וורונז'.",
     "axis": "שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T01:25:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T01:25:46+00:00",
     "last_update_at": "2026-10-15T01:25:46+00:00",
     "what_is_not_verified": "היקף הנזק שנגרם בשדה התעופה הצבאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48567",
       "published_at": "2026-10-15T01:25:46+00:00"
      }
     ],
     "places": [
      {
       "name": "בוריסוגלבסק, רוסיה",
       "lat": 51.368,
       "lon": 42.0752
      }
     ]
    },
    {
     "id": "UKRAINE-10150506-05",
     "title": "תקיפת יעדי תחבורה ותעשייה בקרופיבניצקי",
     "summary": "מתקפה רוסית אינטנסיבית כוונה אל מוקדי לוגיסטיקה, תחבורה ותעשייה בקרופיבניצקי והביאה למותם של שלושה בני אדם ולפציעת שישה.",
     "axis": "מרכז אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T23:09:14+00:00",
     "last_update_at": "2026-10-14T23:09:14+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/intense-russian-assault-on-kropyvnytskyi-kills-3-injures-6/",
       "published_at": "2026-10-14T23:09:14+00:00"
      }
     ],
     "places": [
      {
       "name": "קרופיבניצקי, אוקראינה",
       "lat": 48.5106,
       "lon": 32.2656
      }
     ]
    },
    {
     "id": "UKRAINE-10150506-06",
     "title": "הערכות לזיהום נפט בים השחור בעקבות פגיעה במכלית סמוך לסוצ'י",
     "summary": "בעקבות תקיפת כטב\"מים ימיים על מכלית נפט סמוך לסוצ'י, ארגון גרינפיס דיווח על כתם נפט נרחב, בעוד השלטונות ברוסיה הכחישו זיהום אך הטילו הגבלות רחצה והכריזו על כוננות.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T21:00:12+00:00",
     "last_update_at": "2026-10-14T21:00:12+00:00",
     "what_is_not_verified": "האם אכן נגרם זיהום סביבתי של ממש והאם המכלית נשאה נפט גולמי או הפליגה ריקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/15/greenpeace-reports-another-huge-oil-slick-in-the-black-sea-following-an-attack-on-a-tanker-off-sochi-s-coastline-russia-denies-any-pollution-but-has-declared-a-h-alert",
       "published_at": "2026-10-14T21:00:12+00:00"
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
     "id": "UKRAINE-10150506-07",
     "title": "פגיעה בבניין מגורים באודסה",
     "summary": "תקיפה רוסית פגעה בבניין רב-קומות באודסה והסבה נזק לחזית, לדירה ולחלונות ללא דיווח על נפגעים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T20:48:00+00:00",
     "last_update_at": "2026-10-14T20:48:00+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a52f68c53c1145b2",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058064/",
       "published_at": "2026-10-14T20:48:00+00:00"
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
     "id": "UKRAINE-10150506-08",
     "title": "תקרית ירי ומעצר חייל רוסי במחוז חרקוב",
     "summary": "חמישה חיילים מהחטיבה הממוכנת ה-72 של אוקראינה נורו למוות בכפר קוטוזיבקה. שירות הביטחון האוקראיני עצר חייל רוסי בן שלושים ושש מסנקט פטרבורג בחשד לביצוע המעשה.",
     "axis": "צפון-מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T19:50:36+00:00",
     "last_update_at": "2026-10-14T20:39:37+00:00",
     "what_is_not_verified": "המניע לירי, האם החשוד נמלט משבי, והאם נהרג גם אזרח מקומי במהלך המנוסה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/14/ukraine-detains-russian-soldier-after-five-ukrainian-troops-shot-dead-in-kharkiv-region",
       "published_at": "2026-10-14T20:39:37+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48562",
       "published_at": "2026-10-14T19:50:36+00:00"
      }
     ],
     "places": [
      {
       "name": "קוטוזיבקה, אוקראינה",
       "lat": 47.3299,
       "lon": 30.9476
      }
     ]
    },
    {
     "id": "UKRAINE-10150506-09",
     "title": "דיווח על תקיפת מכלית דלק בפתח תעלת סולינה",
     "summary": "כטב\"מים רוסיים תקפו על פי דיווח מכלית דלק שהובילה אספקה לאוקראינה בתוך מימיה הטריטוריאליים של רומניה.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T20:23:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T20:23:10+00:00",
     "last_update_at": "2026-10-14T20:23:10+00:00",
     "what_is_not_verified": "התרחשות התקיפה במים הטריטוריאליים הרומניים ומצב המכלית נשענים על דיווחים ראשוניים בלבד ואינם מאומתים רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48563",
       "published_at": "2026-10-14T20:23:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10150506-10",
     "title": "התקדמות אוקראינית בגזרת לימאן במחוז דונצק",
     "summary": "הקורפוס השלישי של צבא אוקראינה הודיע על שחרור מאה ואחד קילומטרים רבועים נוספים במסגרת מבצע צבאי בגזרת לימאן.",
     "axis": "חזית דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T17:51:27+00:00",
     "last_update_at": "2026-10-14T17:51:27+00:00",
     "what_is_not_verified": "אימות עצמאי מעבר להודעת הקורפוס האוקראיני על היקף השטח ששוחרר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-operation-vivaldi-liberates-another-101-square-kilometers-in-donetsk-oblast/",
       "published_at": "2026-10-14T17:51:27+00:00"
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
     "id": "UKRAINE-10150506-11",
     "title": "הקצאת סיוע כספי וצבאי מצד בריטניה והאיחוד האירופי לאוקראינה",
     "summary": "בריטניה התחייבה להעביר שבעה עשר מיליון ליש\"ט לשיקום נזקי תחנת הכוח בצ'רנוביל, והנציבות האירופית הקצתה שני מיליארד ושמונה מאות ושישים מיליון אירו לרכש כטב\"מים, טילים והגנה אווירית.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T18:32:00+00:00",
     "last_update_at": "2026-10-15T02:56:37+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2202261",
       "published_at": "2026-10-15T02:56:37+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/15/ukraine-war-briefing-uk-pledges-17m-to-repair-chornobyl-attack-damage-amid-fears-of-slipping-us-support",
       "published_at": "2026-10-15T01:03:29+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058055/",
       "published_at": "2026-10-14T18:32:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'רנוביל, אוקראינה",
       "lat": 51.2705,
       "lon": 30.2196
      }
     ]
    },
    {
     "id": "UKRAINE-10150506-12",
     "title": "מתיחות מדינית חריפה בין קייב לוושינגטון בעקבות עסקת הסולר ומגבלות תקשורת",
     "summary": "זלנסקי ביקר בחריפות את הממשל האמריקני בעקבות הסכם אספקת סולר עם רוסיה, הפסקת התרעות מודיעיניות והגבלות על רשת סטארלינק, וטען כי מדובר בבחירת צד ובגידה.",
     "axis": "דיפלומטיה ומדיניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-14T17:33:08+00:00",
     "last_update_at": "2026-10-15T04:38:00+00:00",
     "what_is_not_verified": "טענות הדדיות בדבר הפסקת שיתוף המודיעין האמריקני, אותה הכחיש טראמפ.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4174551-zelensky-on-usrussia-diesel-deal-we-lose-strong-partner.html",
       "published_at": "2026-10-15T04:38:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/14/volodymyr-zelenskyy-feels-betrayed-by-donald-trump-over-starlink-access",
       "published_at": "2026-10-14T23:00:08+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058058/",
       "published_at": "2026-10-14T19:25:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058057/",
       "published_at": "2026-10-14T19:07:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjafqeaifx",
       "published_at": "2026-10-14T17:33:08+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת מומחה צבאי רוסי כי הכוח האוקראיני באוריחיב הושמד כמעט לחלוטין",
    "דיווח על תקיפת כטב\"ם רוסי נגד מכלית דלק במים הטריטוריאליים של רומניה",
    "הטענה כי ארצות הברית השעתה לחלוטין העברת מודיעין והתרעות מפני טילים לאוקראינה (הוכחש בידי טראמפ)",
    "היקף הזיהום הסביבתי המדויק מול חופי סוצ'י וטענות סותרות על מטענה של המכלית",
    "השמדת לוגיסטיקה רוסית בדרך לחצי האי קרים",
    "טענות על הריגת דייג אזרחי בידי החייל הרוסי שנעצר בחרקוב"
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
      "המשך הגנה על המדינה והתנגדות לקבלת תנאיו של פוטין לסיום המלחמה",
      "הסרת כלל מגבלות המהירות על מסופי מערכת סטארשילד",
      "קידום ההצטרפות לאיחוד האירופי ושימור תמיכת בעלות הברית באירופה"
     ],
     "inferred": [
      "ניסיון לפצות על אובדן גיבוי אמריקני פוטנציאלי באמצעות הידוק הקשרים הביטחוניים עם בריטניה והאיחוד האירופי",
      "פגיעה בעורק הלוגיסטי והתעופתי של רוסיה באמצעות תקיפות עומק של טילים וכטב\"מים"
     ],
     "forecast": [
      "המשך מאמצים לגיוס אמצעי הגנה אווירית אירופיים נוכח שחיקת היכולות המבוססות על טכנולוגיה ומודיעין מארצות הברית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הצדקת המלחמה כצעד מגן וקיום פעילות פרלמנטרית ופוליטית בשטחים שסופחו"
     ],
     "inferred": [
      "שבירת כושר העמידה של אוקראינה באמצעות פגיעה שיטתית ברשתות החשמל והתשתיות לקראת החורף",
      "החלשת התמיכה המערבית באוקראינה דרך הסכמי סחר ואנרגיה עקיפים עם ארצות הברית"
     ],
     "forecast": [
      "החרפת התקיפות האוויריות על מוקדי אנרגיה בקייב ובערי המפתח כדי ללחוץ על ההנהגה להיכנע"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "קריאה להחלפת ההנהגה באוקראינה בדמות מנהיג שיגיע להסכם לסיום המלחמה",
      "הכחשה רשמית של טענות על השעיית שיתוף המודיעין עם אוקראינה"
     ],
     "inferred": [
      "הפעלת לחץ מוחשי על אוקראינה לעצור תקיפות על מתקני נפט רוסיים באמצעות בקרת שירותי תקשורת לוויינית",
      "שאיפה להביא להפסקת אש מהירה דרך הסדרים כלכליים ומסחריים עם רוסיה"
     ],
     "forecast": [
      "המשך שחיקת הערבויות והסיוע הישיר מקייב, תוך החרפת החיכוך המדיני בין ההנהגות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/14/volodymyr-zelenskyy-feels-betrayed-by-donald-trump-over-starlink-access",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-operation-vivaldi-liberates-another-101-square-kilometers-in-donetsk-oblast/",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/14/ukraine-detains-russian-soldier-after-five-ukrainian-troops-shot-dead-in-kharkiv-region",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/14/8058057/",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2202261",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131923",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48563",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4174551-zelensky-on-usrussia-diesel-deal-we-lose-strong-partner.html",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rjafqeaifx",
     "accessed_at": "2026-10-15T05:06:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-14T15:37:17+00:00",
  "changes": {
   "UKRAINE-10150506-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הגבלות על מהירות מסופי סטארלינק באוקראינה",
    "score": 0.65
   },
   "UKRAINE-10150506-02": {
    "kind": "new"
   },
   "UKRAINE-10150506-03": {
    "kind": "new"
   },
   "UKRAINE-10150506-04": {
    "kind": "new"
   },
   "UKRAINE-10150506-05": {
    "kind": "new"
   },
   "UKRAINE-10150506-06": {
    "kind": "new"
   },
   "UKRAINE-10150506-07": {
    "kind": "new"
   },
   "UKRAINE-10150506-08": {
    "kind": "new"
   },
   "UKRAINE-10150506-09": {
    "kind": "new"
   },
   "UKRAINE-10150506-10": {
    "kind": "new"
   },
   "UKRAINE-10150506-11": {
    "kind": "new"
   },
   "UKRAINE-10150506-12": {
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
