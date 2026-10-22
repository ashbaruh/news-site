/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-22T2345__yemen-202610222345.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-22T23:45:34+00:00",
   "window": {
    "from": "2026-10-21T23:45:34+00:00",
    "to": "2026-10-22T23:45:34+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610222345"
   },
   "summary": "הלחימה בין החות'ים לקואליציה בהובלת סעודיה הסלימה לכדי מתקפות נרחבות ועמוקות לעבר נמלי תעופה ומתקני נפט סעודיים, אשר הובילו לפינוי מטה חברת ארמקו ולפגיעות בנפש. בתוך תימן מתחדשים הקרבות סביב צירי באב אל-מנדב ותעז, תוך החמרת המשבר ההומניטרי והרפואי. במקביל, גורמים אזוריים כמו מצרים ואיראן בוחנים את גבולות מעורבותם, לצד טענות על סיוע מודיעיני ישראלי לריאד.",
   "fronts": [
    {
     "name": "חזית סעודיה - תימן",
     "status": "הסלמה חריפה בשיגורי טילים, כטב\"מים ופגיעה במתקנים אסטרטגיים ונמלי תעופה"
    },
    {
     "name": "ציר באב אל-מנדב ודרום הים האדום",
     "status": "הטלת מצור ימי חות'י ופעילות קרקעית לאורך החוף"
    },
    {
     "name": "פנים תימן (תעז)",
     "status": "חילופי אש, הפגזות ומשבר תברואתי ורפואי חריף"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10222345-01",
     "title": "יירוט שני כטב\"מים שנורו לכיוון דרום סעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדה של שני כלי טיס בלתי מאוישים ששיגרו החות'ים לעבר האזור הדרומי.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T22:38:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T22:38:05+00:00",
     "last_update_at": "2026-10-22T22:38:05+00:00",
     "what_is_not_verified": "אין אימות עצמאי להודעת הקואליציה לגבי היירוט המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_a34d35e809393362",
       "url": "https://www.sabanew.net/viewstory/154476",
       "published_at": "2026-10-22T22:38:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10222345-02",
     "title": "יירוט טיל בליסטי ששוגר לעבר נג'ראן",
     "summary": "כוחות הקואליציה יירטו והשמידו טיל בליסטי ששוגר על ידי החות'ים לעבר מרחב נג'ראן בסעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T20:03:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T20:03:38+00:00",
     "last_update_at": "2026-10-22T20:03:38+00:00",
     "what_is_not_verified": "אין פרטים מאומתים מחוץ להודעת הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_9f2c0890de17ec04",
       "url": "https://www.sabanew.net/viewstory/154473",
       "published_at": "2026-10-22T20:03:38+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ראן, סעודיה",
       "lat": 17.544,
       "lon": 44.2247
      }
     ]
    },
    {
     "id": "YEMEN-10222345-03",
     "title": "הרוגים ופצועים במתקפה חות'ית על נמל התעופה בדמאם",
     "summary": "מתקפה לילית של החות'ים על נמל התעופה בדמאם שבמזרח סעודיה גרמה למותם של שני בני אדם ולפציעת שמונה נוספים.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T07:59:49+00:00",
     "last_update_at": "2026-10-22T13:46:33+00:00",
     "what_is_not_verified": "היקף הנזק המדויק שנמצא בבדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cqwy71ww156ro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-22T13:46:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/two-dead-eastern-saudi-airport-attack-aviation-authority",
       "published_at": "2026-10-22T07:59:49+00:00"
      }
     ],
     "places": [
      {
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    },
    {
     "id": "YEMEN-10222345-04",
     "title": "פינוי מטה חברת ארמקו בדהראן עקב התגברות המתקפות",
     "summary": "חברת הנפט הסעודית ארמקו הורתה לעובדיה לפנות את מטה החברה בדהראן ולעבור לעבודה מרחוק בעקבות התרעות ומתקפות חות'יות חוזרות.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T12:40:47+00:00",
     "last_update_at": "2026-10-22T15:35:58+00:00",
     "what_is_not_verified": "סיבת האזעקה במטה ומידת הנזק המדויקת שנגרמה במתקפות קודמות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-aramco-tells-staff-evacuate-dhahran-clashes-yemens-houthis",
       "published_at": "2026-10-22T15:35:58+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-aramco-evacuates-hq-first-time-yemen-war-resumed",
       "published_at": "2026-10-22T14:55:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-aramco-tells-staff-evacuate-dhahran-clashes-yemens-houthis-continue",
       "published_at": "2026-10-22T12:46:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/aramco-evacuates-staff-saudi-arabia-braces-potential-houthi-escalation-what-know",
       "published_at": "2026-10-22T12:40:47+00:00"
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
     "id": "YEMEN-10222345-05",
     "title": "ארצות הברית מורה לחלק מהדיפלומטים לעזוב את סעודיה",
     "summary": "מחלקת המדינה האמריקנית הורתה לדיפלומטים ולבני משפחות של עובדי ממשל לעזוב את סעודיה עקב הסלמת שיגורי הטילים והכטב\"מים של החות'ים.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T01:07:34+00:00",
     "last_update_at": "2026-10-22T13:05:30+00:00",
     "what_is_not_verified": "מספרם המדויק של אנשי הסגל שעזבו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
       "published_at": "2026-10-22T13:05:30+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c6x2vpk93770o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-22T01:07:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10222345-06",
     "title": "הפרלמנט המצרי דוחה הצבעה על סיוע צבאי לסעודיה",
     "summary": "הפרלמנט בקהיר דחה ל-26 באוקטובר הצבעה על אישור סיוע צבאי להגנה על סעודיה מול התקפות החות'ים, במקביל למגעים דיפלומטיים בריאד.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T09:00:13+00:00",
     "last_update_at": "2026-10-22T21:14:12+00:00",
     "what_is_not_verified": "האופי המדויק של התמיכה הצבאית הנבחנת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/egypt-calls-yemen-talks-parliament-weighs-military-support-saudi-arabia",
       "published_at": "2026-10-22T21:14:12+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/egypt-calls-yemen-talks-parliament-weighs-military-support-saudi-arabia",
       "published_at": "2026-10-22T18:46:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypt-delays-vote-military-support-saudis-yemen-war",
       "published_at": "2026-10-22T10:51:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/egypt-weighs-yemen-intervention-ghosts-1960s-war-loom",
       "published_at": "2026-10-22T09:00:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10222345-07",
     "title": "פגיעות באזרחים מהפגזות וצליפה של החות'ים בתעז",
     "summary": "חמישה אזרחים ובהם שני ילדים נפגעו מירי צלפים ומהפגזות של החות'ים, לצד פגיעה במסגד ובבית ספר במרחב ג'בל סבר בדרום תעז.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T14:10:50+00:00",
     "last_update_at": "2026-10-22T16:03:53+00:00",
     "what_is_not_verified": "חומרת הפציעות של כלל הנפגעים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_d2283383767d87b4",
       "url": "https://www.sabanew.net/viewstory/154464",
       "published_at": "2026-10-22T16:03:53+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_66aaa1dcd82d7cfe",
       "url": "https://www.sabanew.net/viewstory/154452",
       "published_at": "2026-10-22T14:10:50+00:00"
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
     "id": "YEMEN-10222345-08",
     "title": "טענה חות'ית לתקיפת משרד ההגנה הסעודי",
     "summary": "החות'ים טענו כי שיגרו מתקפה לעבר מטה משרד ההגנה הסעודי בבירה ריאד.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T12:29:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T12:29:10+00:00",
     "last_update_at": "2026-10-22T12:29:10+00:00",
     "what_is_not_verified": "עצם הפגיעה או השיגור בפועל לעבר משרד ההגנה לא אומתו על ידי מקור רשמי סעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48821",
       "published_at": "2026-10-22T12:29:10+00:00"
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
     "id": "YEMEN-10222345-09",
     "title": "טענות על סיוע מודיעיני ישראלי לסעודיה במאבק בחות'ים",
     "summary": "גורם ביטחוני אישר כי קהילת המודיעין הישראלית מסייעת לצבא הסעודי בבניית בנק מטרות נגד החות'ים בתיווך אמריקני, לצד דיווחים סותרים על דחיית הסיוע בידי ריאד.",
     "axis": "ישראל - סעודיה - חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T09:00:13+00:00",
     "last_update_at": "2026-10-22T16:49:59+00:00",
     "what_is_not_verified": "האם סעודיה קיבלה את הסיוע המודיעיני או דחתה אותו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48830",
       "published_at": "2026-10-22T16:49:59+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958503",
       "published_at": "2026-10-22T12:16:54+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/egypt-weighs-yemen-intervention-ghosts-1960s-war-loom",
       "published_at": "2026-10-22T09:00:13+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים על תקיפת משרד ההגנה הסעודי בריאד לא אומתה.",
    "הדיווחים על קבלת או דחיית סיוע מודיעיני מישראל על ידי סעודיה סותרים ולא אומתו.",
    "היקף הנזק המדויק במטה ארמקו בדהראן ובנמל התעופה בדמאם נותר שנוי במחלוקת או בבדיקה.",
    "אופי וממדי ההתערבות הצבאית המצרית הפוטנציאלית אינם מאומתים."
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
     "value": 3.1079,
     "unit": "ILS",
     "change_pct": 0.54,
     "source_id": "src_ecb",
     "as_of": "2026-10-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "הטלת מצור ימי בים האדום ופגיעה באינטרסים סעודיים.",
      "הצבת אפשרות לפלישה קרקעית לשטח סעודיה."
     ],
     "inferred": [
      "הפעלת לחץ כלכלי כבד על סעודיה כדי לכפות ויתורים במלחמת האזרחים ובשליטה בחוף הים האדום."
     ],
     "forecast": [
      "המשך שיגורים לעבר תשתיות אנרגיה ותעופה אזרחיות במפרץ."
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט האיומים האוויריים של החות'ים.",
      "סיום האיום החות'י והמשך תמיכה בממשלת תימן המוכרת."
     ],
     "inferred": [
      "שמירה על רציפות ייצוא הנפט והרגעת השווקים הפיננסיים והדיפלומטיים."
     ],
     "forecast": [
      "הגברת פעולות הסיכול האוויריות וגיוס תמיכה אזורית ממצרים ומבעלות ברית."
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "מיצוי כל הזדמנות לפתרון דיפלומטי של מלחמת תימן.",
      "בחינת סיוע להגנת סעודיה והסחר הימי."
     ],
     "inferred": [
      "חשש מהישאבות לעימות צבאי ישיר המעורר זיכרונות היסטוריים שליליים והתנגדות איראנית."
     ],
     "forecast": [
      "הגבלת המעורבות, אם תאושר, למשימות הגנה ימית ויירוט בלבד."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/egypt-calls-yemen-talks-parliament-weighs-military-support-saudi-arabia",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c6x2vpk93770o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/egypt-calls-yemen-talks-parliament-weighs-military-support-saudi-arabia",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/egypt-weighs-yemen-intervention-ghosts-1960s-war-loom",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154452",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48830",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958503",
     "accessed_at": "2026-10-22T23:45:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T05:21:09+00:00",
  "changes": {
   "YEMEN-10222345-01": {
    "kind": "possible",
    "prev": "ירוט כטב\"מים במחוז המזרחי בסעודיה",
    "score": 0.467
   },
   "YEMEN-10222345-02": {
    "kind": "new"
   },
   "YEMEN-10222345-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעה בשדה תפילה ונמל תעופה אזרחי בסעודיה",
    "score": 0.817
   },
   "YEMEN-10222345-04": {
    "kind": "new"
   },
   "YEMEN-10222345-05": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "הוראת פינוי לדיפלומטים אמריקנים בסעודיה",
    "score": 1.0
   },
   "YEMEN-10222345-06": {
    "kind": "new"
   },
   "YEMEN-10222345-07": {
    "kind": "new"
   },
   "YEMEN-10222345-08": {
    "kind": "new"
   },
   "YEMEN-10222345-09": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-22T2340__iran-202610222340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-22T23:40:42+00:00",
   "window": {
    "from": "2026-10-21T23:40:42+00:00",
    "to": "2026-10-22T23:40:42+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610222340"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין בהחרפת המצור הימי והלחץ הכלכלי על טהרן לצד הכנות ודיווחים על חידוש תקיפות צבאיות רחבות. איראן מאיימת לפגוע בתשתיות נפט, תקשורת וטכנולוגיה ברחבי המפרץ אם תותקף, ומתעמתת סביב חופש השיט במצר הורמוז. במקביל, שלוחותיה בתימן מגבירות את הפגיעה בסעודיה, מה שמביא לפינוי חלקי של צוותים אמריקאיים ולשיתוף פעולה מודיעיני ישראלי-סעודי בתיווך וושינגטון.",
   "fronts": [
    {
     "name": "המצור הימי ומצר הורמוז",
     "status": "ארה\"ב מציינת 100 ימי מצור ימי חונק על איראן, בעוד איראן טוענת לפגיעות בכלי שיט במימי המצר ומשמיעה איומים על נתיבי הסחר"
    },
    {
     "name": "הזירה האווירית וההיערכות לתקיפות באיראן",
     "status": "כוננות מוגברת, אימוני מטוסי קרב בישראל ודיווחים על בחינת מתקפה משותפת של ארה\"ב וישראל נגד מתקני גרעין, טילים וכטב\"מים"
    },
    {
     "name": "חזית המפרץ ושלוחות איראן (החות'ים)",
     "status": "תקיפות חות'יות מתמשכות נגד שדות תעופה ותשתיות בסעודיה, פינוי סגל דיפלומטי אמריקאי וסיוע מודיעיני ישראלי לריאד"
    },
    {
     "name": "החזית הכלכלית",
     "status": "קריסה נוספת בשער הריאל האיראני, אובדן הכנסות נפט המוערך במיליארדי דולרים והתרחבות חסימות הסחר מנתיבי הים לגבולות היבשה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10222340-01",
     "title": "פיקוד מרכז האמריקאי מציין 100 ימי מצור ימי על איראן",
     "summary": "פיקוד מרכז של צבא ארה\"ב הודיע כי המצור הימי שהוא מפעיל מנע מאיראן לייצא נפט גולמי בשווי של לפחות עשרים וחמישה מיליארד דולר וחסם סחר ימי למעט סיוע הומניטרי.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T18:48:35+00:00",
     "last_update_at": "2026-10-22T19:56:20+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a3bd39532ee3a129",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-military-says-iran-naval-blockade-reaches-100-days",
       "published_at": "2026-10-22T19:56:20+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_a3bd39532ee3a129",
       "url": "https://t.me/abualiexpress/132372",
       "published_at": "2026-10-22T18:48:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10222340-02",
     "title": "טענות איראניות על פגיעה במכליות במצר הורמוז והכחשה אמריקאית",
     "summary": "משמרות המהפכה וגורמים באיראן טוענים כי שבע ספינות ומכליות נפגעו במצר הורמוז, בעוד שנשיא ארה\"ב וממשלו דוחים זאת וטוענים שמדובר בבימוי מתקפות והפצת שקרים שנועדו להעלות את מחירי הנפט.",
     "axis": "איראן - מפרץ / ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T16:10:36+00:00",
     "last_update_at": "2026-10-22T17:58:04+00:00",
     "what_is_not_verified": "לא מאומת האם אכן נפגעו שבע ספינות או מכליות במצר הורמוז כפי שטענה איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/22/iran-says-seven-ships-hit-in-hormuz-strait-warns-us-of-wider-response?traffic_source=rss",
       "published_at": "2026-10-22T17:58:04+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/byene3d3fl",
       "published_at": "2026-10-22T16:21:27+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94744",
       "published_at": "2026-10-22T16:10:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10222340-03",
     "title": "איומים איראניים לתקוף יעדי נפט, תקשורת וטכנולוגיה במדינות המפרץ",
     "summary": "בכירים בביטחון הלאומי באיראן איימו כי במקרה של מתקפה אמריקאית-ישראלית מחודשת, איראן תפעל ללא קווים אדומים ותפגע במתקני נפט, כבלים תת-ימיים, מרכזי נתונים ומתקני בינה מלאכותית בשבע מדינות במפרץ.",
     "axis": "איראן - ישראל / ארה\"ב / המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T15:03:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T15:03:00+00:00",
     "last_update_at": "2026-10-22T19:24:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21690594",
       "published_at": "2026-10-22T19:24:22+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/22/iran-threatens-seven-gulf-countries-us-israel-renew-attacks",
       "published_at": "2026-10-22T15:03:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10222340-04",
     "title": "הוראת פינוי לדיפלומטים אמריקאים ובני משפחותיהם מסעודיה ומדינות נוספות",
     "summary": "מחלקת המדינה האמריקאית הורתה לחלק מהדיפלומטים ולבני משפחות עובדי ממשל לעזוב את סעודיה ומדינות נוספות באזור עקב התקפות החות'ים על שדות תעופה ותשתיות, וחשש מחידוש המלחמה עם איראן.",
     "axis": "ארה\"ב - שלוחות איראן / המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T10:43:19+00:00",
     "last_update_at": "2026-10-22T13:05:30+00:00",
     "what_is_not_verified": "רשימת כל המדינות שמהן הושלם הפינוי בפועל מעבר להודעת מחלקת המדינה על סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
       "published_at": "2026-10-22T13:05:30+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94740",
       "published_at": "2026-10-22T10:43:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10222340-05",
     "title": "דיווחים והערכות בנוגע לתוכניות לתקיפה ישראלית-אמריקאית באיראן",
     "summary": "פרסומים והתבטאויות מצביעים על אפשרות של מתקפות חדשות על יעדי אנרגיה, כטב\"מים וטילים באיראן לאחר בחירות האמצע בארה\"ב, לצד הגברת אימונים של חיל האוויר הישראלי וויכוחים פוליטיים-משפטיים בישראל.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T07:21:44+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T07:21:44+00:00",
     "last_update_at": "2026-10-22T22:16:13+00:00",
     "what_is_not_verified": "קיומה של החלטה סופית או מועד מדויק למתקפה ישראלית או אמריקאית באיראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380327",
       "published_at": "2026-10-22T22:16:13+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380314",
       "published_at": "2026-10-22T20:39:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132373",
       "published_at": "2026-10-22T20:31:06+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/new-iran-strikes-after-midterms/",
       "published_at": "2026-10-22T20:19:45+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/byene3d3fl",
       "published_at": "2026-10-22T16:21:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/video/20261022-reports-show-us-and-israel-plan-new-strikes-on-iran",
       "published_at": "2026-10-22T15:34:34+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/sjudjuv3me",
       "published_at": "2026-10-22T15:29:17+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/tv-shows/press-review/20261022-are-fresh-us-israeli-strikes-on-iran-in-the-pipeline",
       "published_at": "2026-10-22T11:32:22+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958450",
       "published_at": "2026-10-22T07:21:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10222340-06",
     "title": "צה\"ל ושב\"כ חיסלו בכיר בוועדות ההתנגדות העממית המקושר למשמרות המהפכה",
     "summary": "כוחות הביטחון של ישראל תקפו מהאוויר בח'אן יונס וחיסלו את ראש ארגון הטרור ועדות ההתנגדות העממית במרחב, הפועל בשיתוף פעולה ובקשר עם חמאס, חיזבאללה ומשמרות המהפכה האיראניים.",
     "axis": "ישראל - שלוחות איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T17:32:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T17:32:54+00:00",
     "last_update_at": "2026-10-22T17:36:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380262",
       "published_at": "2026-10-22T17:36:40+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25438",
       "published_at": "2026-10-22T17:32:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ח'אן יונס",
       "lat": 31.3995,
       "lon": 34.3032
      }
     ]
    },
    {
     "id": "IRAN-10222340-07",
     "title": "סיוע מודיעיני ישראלי לסעודיה נגד החות'ים בתיווך ארה\"ב",
     "summary": "גורם ביטחוני אישר כי קהילת המודיעין הישראלית מסייעת לצבא הסעודי בהתמודדות מול מתקפות החות'ים הנתמכים על ידי איראן, תוך תיווך אמריקאי ובניית בנק מטרות.",
     "axis": "ישראל - שלוחות איראן / המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T12:16:54+00:00",
     "last_update_at": "2026-10-22T12:16:54+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958503",
       "published_at": "2026-10-22T12:16:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10222340-08",
     "title": "החמרת הלחץ הכלכלי על איראן: צניחת המטבע ושיבושים בנתיבי יבשה",
     "summary": "המטבע האיראני הגיע לשפל של 2.73 מיליון ריאל לדולר, במקביל לסגירת גבולות ושיבושי מעבר יבשתיים מול פקיסטן, עיראק וטורקיה, המעמיקים את פגיעת המצור הימי והמגבלות האוויריות.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T08:36:22+00:00",
     "last_update_at": "2026-10-22T21:11:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610228890",
       "published_at": "2026-10-22T21:11:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132344",
       "published_at": "2026-10-22T08:36:22+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת משמרות המהפכה בדבר פגיעה בשבע מכליות וספינות במצר הורמוז",
    "הדיווחים על סיכום עקרוני ומועד מדויק למתקפה ישראלית-אמריקאית נרחבת באיראן",
    "היקף הפינוי הדיפלומטי המלא של ארה\"ב מכלל מדינות המפרץ מלבד סעודיה"
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
     "value": 3.1079,
     "unit": "ILS",
     "change_pct": 0.54,
     "source_id": "src_ecb",
     "as_of": "2026-10-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להגיב ללא כל קווים אדומים נגד מתקני נפט, בינה מלאכותית ותשתיות קריטיות במדינות המפרץ אם תותקף",
      "להסיר את ההגבלות שהטילה על עצמה ולא להבחין בין ישראל לארה\"ב במקרה של עימות"
     ],
     "inferred": [
      "לייצר לחץ על שוק הנפט העולמי כדי להשפיע על הממשל האמריקאי לקראת הבחירות",
      "לשבור את טבעת החנק הכלכלית והמצור הימי הפוגעים בהכנסות המדינה"
     ],
     "forecast": [
      "המשך איומים והטרדות שיט במצר הורמוז תוך שימוש בשלוחותיה באזור לגביית מחיר מבעלות בריתה של ארה\"ב",
      "הימנעות ממתקפה רחבה יזומה עד להתבהרות כוונות התקיפה של ארה\"ב וישראל"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "אכיפת מצור ימי לצמצום הכנסות הנפט של איראן ופגיעה במימון משמרות המהפכה ושלוחותיהן",
      "שמירה על ביטחון הדיפלומטים ועובדי הממשל באזור המפרץ מפני מתקפות החות'ים"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והצבאיות של טהרן ללא כניסה מיידית למלחמה אזורית כוללת לפני בחירות האמצע",
      "שמירה על מרחב תמרון ואפשרות להנחתת מכה צבאית רחבה בהמשך"
     ],
     "forecast": [
      "המשך הידוק המצור הימי והסנקציות הכלכליות",
      "בחינת פעולה צבאית מוגבלת או נרחבת נגד יעדים איראניים לאחר שוך הלחצים הפוליטיים מבית"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול איומים ממוקדים ופגיעה בפעילי טרור המקושרים למשמרות המהפכה",
      "סיוע מודיעיני לסעודיה נגד החות'ים מתוך אינטרס ביטחוני אזורי"
     ],
     "inferred": [
      "הכנת חיל האוויר לאפשרות תקיפה של מתקני הגרעין ותעשיות הטילים באיראן",
      "חיזוק הברית הביטחונית עם המדינות הסוניות במפרץ מול הציר האיראני"
     ],
     "forecast": [
      "המשך העלאת כוננות ואימונים מוגברים לקראת הכרעה מדינית על פעולה באיראן",
      "העמקת שיתוף הפעולה המודיעיני וההגנתי עם מדינות המפרץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/22/iran-says-seven-ships-hit-in-hormuz-strait-warns-us-of-wider-response?traffic_source=rss",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/in_the_news/new-iran-strikes-after-midterms/",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/tv-shows/press-review/20261022-are-fresh-us-israeli-strikes-on-iran-in-the-pipeline",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610228890",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21690594",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380262",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-military-says-iran-naval-blockade-reaches-100-days",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132344",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25438",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94740",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958503",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/elections2026/article/sjudjuv3me",
     "accessed_at": "2026-10-22T23:40:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T05:16:57+00:00",
  "changes": {
   "IRAN-10222340-01": {
    "kind": "new"
   },
   "IRAN-10222340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה בכלי שיט במפרץ הפרסי ובמצר הורמוז",
    "score": 0.65
   },
   "IRAN-10222340-03": {
    "kind": "new"
   },
   "IRAN-10222340-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פינוי דיפלומטים אמריקנים מסעודיה וממדינות המפרץ",
    "score": 1.0
   },
   "IRAN-10222340-05": {
    "kind": "possible",
    "prev": "פניית איראן לאו\"ם בגין איומי תקיפה",
    "score": 0.467
   },
   "IRAN-10222340-06": {
    "kind": "new"
   },
   "IRAN-10222340-07": {
    "kind": "new"
   },
   "IRAN-10222340-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-22T2342__ukraine-202610222342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-22T23:42:59+00:00",
   "window": {
    "from": "2026-10-21T23:42:59+00:00",
    "to": "2026-10-22T23:42:59+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610222342"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בתקיפות הדדיות בעורף ובחזית, לצד פעילות דיפלומטית אמריקנית לקידום שיחות משולשות. כוחות רוסיה ביצעו מתקפת טילים כבדה על קייב ופגעו בתשתיות אזרחיות ואנרגטיות, בעוד אוקראינה פועלת נגד סוללות נ\"מ רוסיות, מאגרי תחמושת ובתי זיקוק. במקביל נרשמת מחלוקת לגבי יעילותן ומעמדן של הגבלות התקשורת הלוויינית המערבית המשרתת את הצבא האוקראיני.",
   "fronts": [
    {
     "name": "גזרת קייב",
     "status": "מתקפות טילים בליסטיים רוסיות על מבני מגורים ותשתיות אנרגיה"
    },
    {
     "name": "גזרת קופיאנסק",
     "status": "פשיטות אוקראיניות קרקעיות בעורף הקווים הרוסיים"
    },
    {
     "name": "גזרת הוליאיפולה",
     "status": "פגיעה אוקראינית במערכות הגנה אווירית רוסיות באמצעות כטב\"מים"
    },
    {
     "name": "דרום אוקראינה",
     "status": "פעילות כטב\"מים רוסית הנמשכת ללא שינוי ניכר בהיקפה"
    },
    {
     "name": "עורף רוסיה",
     "status": "תקיפות כטב\"מים אוקראיניות לעבר מתקני נפט ותשתיות עירוניות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10222342-01",
     "title": "מתקפת טילים רוסית על קייב",
     "summary": "רוסיה שיגרה גלי טילים ומטחי טילים בליסטיים לעבר הבירה האוקראינית, וכתוצאה מכך נהרגו לפחות שני בני אדם ונפצעו עשרים ושניים. הפגיעות כללו גשר מעל נהר הדנייפר, מבני מגורים, מרפאה ותשתיות אנרגיה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T15:46:56+00:00",
     "last_update_at": "2026-10-22T20:58:00+00:00",
     "what_is_not_verified": "אין אימות עצמאי לגבי מספר הנפגעים המדויק או היקף הנזק לתשתיות האנרגיה מעבר להצהרות המקומיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/22/russia-missile-attack-kyiv-hours-after-agreeing-to-talks-ukraine",
       "published_at": "2026-10-22T15:46:56+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/videos/c9146p1vx888o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-22T17:49:13+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4177283-ukrainian-swedish-defense-ministers-discuss-aftermath-of-russian-attacks-air-defense-needs.html",
       "published_at": "2026-10-22T20:58:00+00:00"
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
     "id": "UKRAINE-10222342-02",
     "title": "פשיטה אוקראינית בעורף הרוסי סמוך לקופיאנסק",
     "summary": "כוחות אוקראיניים חדרו לעורף הקווים הרוסיים באמצעות תנועה בצינורות גז לאורך כחמישה עשר קילומטרים במסגרת מבצע מיוחד.",
     "axis": "קופיאנסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T18:03:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T18:03:30+00:00",
     "last_update_at": "2026-10-22T18:03:30+00:00",
     "what_is_not_verified": "היקף ההצלחה והתוצאות הטקטיות של המבצע לא אומתו על ידי מקורות רוסיים או גורם עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ukrainian-troops-infiltrate-russian-rear-near-kupiansk-through-15-kilometers-of-gas-pipelines/",
       "published_at": "2026-10-22T18:03:30+00:00"
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
     "id": "UKRAINE-10222342-03",
     "title": "תקיפת מערכות הגנה אווירית רוסיות בגזרת הוליאיפולה",
     "summary": "מפעילי כלי טיס בלתי מאוישים של צבא היבשה האוקראיני פגעו במערכת טילי קרקע אוויר מסוג בוק ובמערכת נ\"מ נוספת שפעלו נגד מטוסים אוקראיניים.",
     "axis": "הוליאיפולה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T22:25:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T22:25:00+00:00",
     "last_update_at": "2026-10-22T22:25:00+00:00",
     "what_is_not_verified": "דגם מערכת הנ\"מ השנייה שנפגעה ומידת הנזק המדויקת אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177075-ukrainian-forces-hit-two-russian-air-defense-systems-targeting-ukrainian-aircraft-in-huliaipole-sector.html",
       "published_at": "2026-10-22T22:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "הוליאיפולה, אוקראינה",
       "lat": 47.6655,
       "lon": 36.2657
      }
     ]
    },
    {
     "id": "UKRAINE-10222342-04",
     "title": "פגיעת כטב\"ם אוקראיני בעגורן בעיר ליפצק ברוסיה",
     "summary": "כלי טיס בלתי מאויש מתאבד מתוצרת אוקראינה פגע בעגורן בנייה במהלך טיסתו והתרסק באזור מגורים בעיר ליפצק.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T21:18:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T21:18:04+00:00",
     "last_update_at": "2026-10-22T21:18:04+00:00",
     "what_is_not_verified": "מידת הנזק שנגרמה על הקרקע והיעד המקורי של כלי הטיס אינם ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48841",
       "published_at": "2026-10-22T21:18:04+00:00"
      }
     ],
     "places": [
      {
       "name": "ליפצק, רוסיה",
       "lat": 52.6051,
       "lon": 39.5964
      }
     ]
    },
    {
     "id": "UKRAINE-10222342-05",
     "title": "מגעים מדיניים והצעות למשא ומתן להסדר לחימה",
     "summary": "השליח האמריקני סטיב ויטקוף קיים שיחות באוסלו עם נשיא אוקראינה ובסנקט פטרבורג עם נשיא רוסיה, כאשר הועלתה אפשרות לחידוש שיחות משולשות ולהסדרי ביטחון קבועים.",
     "axis": "משא ומתן בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T17:47:00+00:00",
     "last_update_at": "2026-10-22T22:41:21+00:00",
     "what_is_not_verified": "לא מאומת האם יתקיים מפגש מנהיגים בפסגת הכלכלות הגדולות בפלורידה או האם הצדדים יגיעו להסכמות על הפסקת אש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_1cbd3e65e32874b2",
       "url": "https://tass.com/politics/2206565",
       "published_at": "2026-10-22T22:41:21+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_6d39ea17e351fb5d",
       "url": "https://www.ukrinform.net/rubric-polytics/4177277-zelensky-to-attend-g20-summit-in-florida-for-talks-with-trump-and-putin-if-invited.html",
       "published_at": "2026-10-22T20:22:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_1cbd3e65e32874b2",
       "url": "https://meduza.io/en/feature/2026/10/22/wtf-steve-u-s-lawmakers-outraged-after-witkoff-calls-putin-a-humanitarian-leaving-trump-and-vance-to-defend-their-envoy",
       "published_at": "2026-10-22T19:58:44+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_1cbd3e65e32874b2",
       "url": "https://meduza.io/en/news/2026/10/22/putin-cites-unspecified-genetic-research-to-claim-russians-and-ukrainians-are-one-people",
       "published_at": "2026-10-22T19:41:50+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_1cbd3e65e32874b2",
       "url": "https://meduza.io/en/feature/2026/10/22/why-kyiv-is-skeptical-of-trump-s-renewed-peace-negotiations-with-russia-and-ukraine",
       "published_at": "2026-10-22T19:38:56+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_bb718a0648ef2390",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/22/8059301/",
       "published_at": "2026-10-22T18:12:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_6555238653cb4751",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/22/8059295/",
       "published_at": "2026-10-22T17:47:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      },
      {
       "name": "אוסלו, נורווגיה",
       "lat": 59.9133,
       "lon": 10.739
      }
     ]
    },
    {
     "id": "UKRAINE-10222342-06",
     "title": "הסכם סיוע אזרחי ושיתוף פעולה לווייני בין פינלנד לאוקראינה",
     "summary": "פינלנד הודיעה על חבילת סיוע הכוללת עשרה קטרים לרכבת, תמיכה כספית במגזר האנרגיה וסיוע הומניטרי, לצד חתימה על מסמכים להרחבת השימוש ביכולות לווייניות עצמאיות.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T17:57:00+00:00",
     "last_update_at": "2026-10-22T23:29:32+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק להעברת הקטרים ויישום מערך הלוויינים אינם מפורטים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_09f49876aa41ef3d",
       "url": "https://kyivindependent.com/amid-starlink-crisis-finnish-tech-giants-announce-plan-to-help-ukraine-build-its-own-sovereign-satellite-system/",
       "published_at": "2026-10-22T23:29:32+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_09f49876aa41ef3d",
       "url": "https://www.ukrinform.net/rubric-polytics/4177281-finland-to-provide-ukraine-with-ten-locomotives-additional-winter-aid-pm.html",
       "published_at": "2026-10-22T20:39:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_09f49876aa41ef3d",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/22/8059302/",
       "published_at": "2026-10-22T18:29:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_94f3c52ef16d6637",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/22/8059299/",
       "published_at": "2026-10-22T17:57:00+00:00"
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
     "id": "UKRAINE-10222342-07",
     "title": "מחלוקת ודיווחים סותרים סביב הגבלות התקשורת הלוויינית של סטארלינק",
     "summary": "נשיא ארצות הברית טען כי הוסרו ההגבלות על שירותי התקשורת הלוויינית באוקראינה, בעוד גורמים רשמיים בקייב טענו כי מגבלת המהירות נותרה על כנה והמצב לא השתנה.",
     "axis": "טכנולוגיה וסיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T18:30:23+00:00",
     "last_update_at": "2026-10-22T21:42:39+00:00",
     "what_is_not_verified": "לא מאומת האם מגבלת המהירות אכן הוסרה במלואה בשטח או שהיא עדיין פוגעת בפעילות הכטב\"מים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-22T21:42:39+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2206599",
       "published_at": "2026-10-22T21:07:07+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/kyiv-denies-reports-that-trump-musk-have-restored-starlink-speeds-in-ukraine/",
       "published_at": "2026-10-22T19:17:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/22/trump-called-elon-musk-to-ask-him-to-lift-restrictions-on-ukraine-s-military-grade-starlink-service-wsj-reports",
       "published_at": "2026-10-22T18:39:08+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48836",
       "published_at": "2026-10-22T18:30:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10222342-08",
     "title": "חשש בחברת רוסנפט מהמשך הפגיעה בבתי זיקוק",
     "summary": "גורמים בחברת הנפט הרוסית הביעו בשיחות סגורות דאגה מכך שהתקיפות האוקראיניות החוזרות ונשנות על מתקני הזיקוק עלולות להסב נזק כבד ובלתי הפיך לפעילות החברה.",
     "axis": "עורף רוסיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T21:04:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T21:04:30+00:00",
     "last_update_at": "2026-10-22T21:04:30+00:00",
     "what_is_not_verified": "הערכות הנזק הכספי והתפעולי הפנימיות של החברה מבוססות על הדלפות בעילום שם ולא אומתו רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/rosneft-admits-losses-from-ukraines-refinery-strikes-becoming-unsustainable-bloomberg-reports/",
       "published_at": "2026-10-22T21:04:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10222342-09",
     "title": "השמדת מצבור רקטות רוסי באמצעות רחפן אוקראיני",
     "summary": "רחפן של צבא אוקראינה פגע במצבור תחמושת רוסי של רקטות גראד והשמיד אותו.",
     "axis": "קו המגע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T16:22:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T16:22:44+00:00",
     "last_update_at": "2026-10-22T16:22:44+00:00",
     "what_is_not_verified": "המיקום המדויק של המצבור והיקף התחמושת שהושמדה אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48829",
       "published_at": "2026-10-22T16:22:44+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת ארצות הברית כי הוסרו לחלוטין כל מגבלות המהירות בשירותי סטארלינק באוקראינה",
    "קיומם של מחקרים גנטיים המוכיחים כי הרוסים והאוקראינים הם עם אחד כפי שטען פוטין",
    "הערכות על נזק בלתי הפיך לחברת רוסנפט כתוצאה מפגיעות בבתי הזיקוק",
    "קיום ודאי של פגישה משולשת בין מנהיגי רוסיה, ארצות הברית ואוקראינה בפלורידה",
    "נתוני משרד ההגנה האוקראיני בנוגע להפלת מעל ארבע מאות אלף כטב\"מים רוסיים מתחילת השנה"
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
     "value": 1.1205,
     "unit": "USD",
     "change_pct": -0.26,
     "source_id": "src_ecb",
     "as_of": "2026-10-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "הגעה להסכמי ביטחון קבועים וסופיים ולא להפסקת אש זמנית",
      "ראיית השטחים הנתונים במחלוקת כחלק מרוסיה ההיסטורית"
     ],
     "inferred": [
      "הפעלת לחץ צבאי כבד על תשתיות האנרגיה בקייב לקראת החורף כדי לשבור את כושר העמידה",
      "ניסיון להכתיב תנאי משא ומתן מעמדת כוח צבאית"
     ],
     "forecast": [
      "המשך פגיעה ממוקדת במערכות חשמל ואנרגיה באוקראינה",
      "נכונות להשתתף בשיחות במידה ותובטח הכרה בהישגיה הטריטוריאליים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת ערבויות ביטחון בינלאומיות מוצקות לסיום המלחמה",
      "השתתפות במפגש פסגה משולש במידה ותימסר הזמנה רשמית",
      "בניית מערך לווייני עצמאי שאינו תלוי בחברות זרות"
     ],
     "inferred": [
      "המשך שחיקת מקורות ההכנסה הרוסיים באמצעות תקיפת בתי זיקוק ונכסי אנרגיה",
      "שימור רצף תקשורת ומערכות כטב\"מים חרף מגבלות טכנולוגיות"
     ],
     "forecast": [
      "הגברת הלחץ הדיפלומטי על מדינות המערב לקבלת מערכות נ\"מ נוספות",
      "המשך מאמצים לפגוע בעורף הרוסי באמצעות כלי טיס בלתי מאוישים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "שאיפה לסיום הלחימה וקידום שיחות ישירות בין הצדדים",
      "הסרת מגבלות תקשורת עבור הצבא האוקראיני"
     ],
     "inferred": [
      "הפעלת לחץ על קייב לצמצום תקיפות על בתי זיקוק רוסיים כדי למנוע זעזועים כלכליים",
      "בחינת מתווה לסיום המלחמה או הקפאתה בקו המגע הקיים"
     ],
     "forecast": [
      "המשך תיווך דיפלומטי לקראת מפגש פסגה בינלאומי",
      "ניסיונות לגבש הבנות עבודה מול מוסקבה וקייב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/22/russia-missile-attack-kyiv-hours-after-agreeing-to-talks-ukraine",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/rosneft-admits-losses-from-ukraines-refinery-strikes-becoming-unsustainable-bloomberg-reports/",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/22/trump-called-elon-musk-to-ask-him-to-lift-restrictions-on-ukraine-s-military-grade-starlink-service-wsj-reports",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/22/8059299/",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2206599",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48829",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4177281-finland-to-provide-ukraine-with-ten-locomotives-additional-winter-aid-pm.html",
     "accessed_at": "2026-10-22T23:42:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-21T15:45:24+00:00",
  "changes": {
   "UKRAINE-10222342-01": {
    "kind": "new"
   },
   "UKRAINE-10222342-02": {
    "kind": "new"
   },
   "UKRAINE-10222342-03": {
    "kind": "new"
   },
   "UKRAINE-10222342-04": {
    "kind": "new"
   },
   "UKRAINE-10222342-05": {
    "kind": "new"
   },
   "UKRAINE-10222342-06": {
    "kind": "new"
   },
   "UKRAINE-10222342-07": {
    "kind": "new"
   },
   "UKRAINE-10222342-08": {
    "kind": "new"
   },
   "UKRAINE-10222342-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-22T2352__north-202610222352.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-22T23:52:33+00:00",
   "window": {
    "from": "2026-10-21T23:52:33+00:00",
    "to": "2026-10-22T23:52:33+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610222352"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות צבאית שוטפת של ישראל בדרום לבנון ובדרום סוריה הכוללת תקיפות, פיצוצים יזומים ופעילות קרקעית נקודתית, במקביל למגעים ביטחוניים ללא הכרעה מול לבנון. בתוך לבנון מתחדדת המחלוקת הפוליטית הפנימית סביב סוגיית החזקת הנשק הבלתי מורשה, בעוד השלטון הסורי החדש מרכז מאמצים בהעמדה לדין של בכירי משטר אסד. טורקיה שומרת על מתיחות גאו-פוליטית ברקע העימותים האזוריים והסכמיה הימיים בים התיכון.",
   "fronts": [
    {
     "name": "חזית דרום לבנון",
     "status": "לחימה בעצימות נמוכה, תקיפות אוויריות, ירי ארטילרי ופיצוצים יזומים לצד שיחות צבאיות ללא התקדמות"
    },
    {
     "name": "חזית דרום סוריה",
     "status": "פשיטות צבאיות ישראליות נקודתיות, ירי והפעלת צלפים במחוזות דרעא וקוניטרה"
    },
    {
     "name": "הזירה הפוליטית-ביטחונית הפנים-לבנונית",
     "status": "משבר בממשלה ודרישה להגבלת הנשק לצבא ולמנגנוני הביטחון בעקבות הברחות חומרי נפץ"
    },
    {
     "name": "הזירה הפנים-סורית (שלטון המעבר)",
     "status": "רדיפה משפטית וצווי מעצר בינלאומיים נגד ראשי המשטר המודח"
    },
    {
     "name": "ציר טורקיה - מזרח הים התיכון",
     "status": "מתיחות מדינית סביב הסכמי גבולות ימיים מול קפריסין, יוון וישראל"
    }
   ],
   "events": [
    {
     "id": "NORTH-10222352-01",
     "title": "תקיפות והפגזות צה\"ל בדרום לבנון ופעילות בכפרים",
     "summary": "כוחות ישראליים ביצעו תקיפות אוויריות, ירי ארטילרי ופיצוצים יזומים במספר מוקדים בדרום לבנון, כולל כניסת כוח רגלי וטנקים לפאתי עיירה.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T09:33:49+00:00",
     "last_update_at": "2026-10-22T21:38:05+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזקים המדויק אינו מפורט במקורות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_1d45196b8f65cbd3",
       "url": "https://www.maariv.co.il/breaking-news/article-1380323",
       "published_at": "2026-10-22T21:38:05+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_1d45196b8f65cbd3",
       "url": "https://english.almanar.com.lb/article/141532/",
       "published_at": "2026-10-22T17:57:10+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_049433f4d9f12a0d",
       "url": "https://english.almanar.com.lb/article/141522/",
       "published_at": "2026-10-22T17:02:53+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_1d45196b8f65cbd3",
       "url": "https://t.me/abualiexpress/132365",
       "published_at": "2026-10-22T15:47:36+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_492cdb41ebd4a196",
       "url": "https://english.almanar.com.lb/article/141482/",
       "published_at": "2026-10-22T15:29:38+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_1d45196b8f65cbd3",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-artillery-shelling-hit-southern-lebanon-as-military-force-advances-into-town/4096936",
       "published_at": "2026-10-22T09:33:49+00:00"
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
     "id": "NORTH-10222352-02",
     "title": "תקרית ירי למוות של אזרח סורי בעל מוגבלות בידי צה\"ל",
     "summary": "אזרח סורי בעל מוגבלות נורה למוות בידי כוחות צה\"ל במהלך כניסה לכפר במחוז דרעא שבדרום סוריה, אירוע שעורר גינויים והפגנות.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T16:43:50+00:00",
     "last_update_at": "2026-10-22T20:29:31+00:00",
     "what_is_not_verified": "נסיבות הירי המדויקות שנויות במחלוקת בין טענת צה\"ל על נוהל מעצר חשוד לטענות הסוריות על ירי צלפים לעבר אזרח לא חמוש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-kill-man-disability-southern-syria-authorities-say",
       "published_at": "2026-10-22T20:29:31+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/un-condemns-killing-of-syrian-civilian-with-disability-by-israeli-forces-in-southern-syria/4097829",
       "published_at": "2026-10-22T20:13:03+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hyfusqp3zl",
       "published_at": "2026-10-22T16:43:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10222352-03",
     "title": "פיצוץ מבנה נטוש וירי לעבר שטחים חקלאיים בדרום סוריה",
     "summary": "כוחות צה\"ל פוצצו בית נטוש ופתחו באש לעבר קרקעות חקלאיות באזור הכפרי של קוניטרה.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T15:52:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T15:52:58+00:00",
     "last_update_at": "2026-10-22T15:52:58+00:00",
     "what_is_not_verified": "לא נמסרו פרטים לגבי פגיעות בנפש או סיבת הפיצוץ המדויקת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-blow-up-abandoned-house-open-fire-on-farmland-in-southern-syria/4097608",
       "published_at": "2026-10-22T15:52:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10222352-04",
     "title": "מבוי סתום בשיחות צבאיות בין לבנון לישראל בארצות הברית",
     "summary": "יומיים של שיחות צבאיות במפקדת פיקוד המרכז של צבא ארצות הברית בטמפה הסתיימו ללא פריצת דרך בשל מחלוקות סביב מנגנון הפיקוח והמשך הפעילות הישראלית.",
     "axis": "לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T14:16:41+00:00",
     "last_update_at": "2026-10-22T19:18:07+00:00",
     "what_is_not_verified": "האם ייקבעו פגישות המשך ישירות או שיחות בלעדיות עם צבא ארה\"ב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21690463",
       "published_at": "2026-10-22T19:18:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-israel-talks-us-end-without-breakthrough",
       "published_at": "2026-10-22T14:16:41+00:00"
      }
     ],
     "places": [
      {
       "name": "טמפה, ארצות הברית",
       "lat": 27.945,
       "lon": -82.4583
      }
     ]
    },
    {
     "id": "NORTH-10222352-05",
     "title": "הטלת סנקציה ישראלית על חברת אנרגיה בגין אספקת דלק לחיזבאללה",
     "summary": "ישראל הטילה סנקציות על חברה הרשומה בבריטניה ונמצאת בבעלות לבנונית, בעקבות אספקת דלק בהיקף נרחב לחברה שבבעלות חיזבאללה.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T14:43:14+00:00",
     "last_update_at": "2026-10-22T14:43:14+00:00",
     "what_is_not_verified": "תגובת החברה המואשמת או ממשלת בריטניה לא פורטה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21688326",
       "published_at": "2026-10-22T14:43:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10222352-06",
     "title": "משבר בממשלת לבנון סביב פרשת הובלת חומרי הנפץ",
     "summary": "שרי מפלגת הכוחות הלבנוניים נטשו ישיבת ממשלה במחאה על דחיית ההחלטה להעביר את תיק משאית חומרי הנפץ בדהר אל-בידר למועצה המשפטית, בעוד ראש הממשלה ונשיא לבנון קוראים לבלעדיות הנשק בידי המדינה.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T12:00:15+00:00",
     "last_update_at": "2026-10-22T16:30:34+00:00",
     "what_is_not_verified": "זהות הגורמים המדויקים שהובילו את חומרי הנפץ מעבר להצהרות כלליות על כך שהגורם המעורב זיהה את עצמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_fb5de90096a8cf62",
       "url": "https://english.almanar.com.lb/article/141502/",
       "published_at": "2026-10-22T16:30:34+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_fb5de90096a8cf62",
       "url": "https://www.aa.com.tr/en/middle-east/lebanese-president-warns-regional-tensions-could-spiral-into-wider-escalation/4097665",
       "published_at": "2026-10-22T16:29:44+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_91b0f0db07f7c75f",
       "url": "https://english.almanar.com.lb/article/141477/",
       "published_at": "2026-10-22T16:10:09+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb5de90096a8cf62",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/964269/lebanese-forces-ministers-walk-out-of-cabinet-over-failure-to-refer-ex/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964269",
       "published_at": "2026-10-22T13:28:38+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb5de90096a8cf62",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/964255/salam-warns-unauthorized-weapons-storage-and-transport-threaten-public/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964255",
       "published_at": "2026-10-22T12:43:05+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb5de90096a8cf62",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/964241/lebanons-president-calls-for-restraint-amid-regional-tensions-reaffirm/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964241",
       "published_at": "2026-10-22T12:00:15+00:00"
      }
     ],
     "places": [
      {
       "name": "ארמון בעבדא, לבנון",
       "lat": 33.8419,
       "lon": 35.5393
      },
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      }
     ]
    },
    {
     "id": "NORTH-10222352-07",
     "title": "צעדים משפטיים של הרשויות החדשות בסוריה נגד בכירי המשטר הקודם",
     "summary": "הרשויות המשפטיות בסוריה העבירו צווי מעצר לאינטרפול נגד בשאר אל-אסד ואחיו מאהר, ועצרו קצין בדרגת תת-אלוף ומעורבים נוספים בחשד לביצוע פשעים נגד אזרחים.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T15:00:42+00:00",
     "last_update_at": "2026-10-22T16:33:26+00:00",
     "what_is_not_verified": "מידת שיתוף הפעולה הבינלאומי של האינטרפול בפועל לגבי הצווים שהועברו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-sends-arrest-warrants-bashar-maher-assad-interpol",
       "published_at": "2026-10-22T16:33:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-arrests-assad-era-brigadier-general-over-civilian-attacks",
       "published_at": "2026-10-22T15:00:42+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "חמאת, סוריה",
       "lat": 35.1343,
       "lon": 36.7496
      }
     ]
    }
   ],
   "not_verified": [
    "נסיבות הריגתו של האזרח הסורי בעל המוגבלות בכפר ג'מלה שנויות במחלוקת בין צה\"ל למקורות סוריים",
    "ההשתייכות הארגונית הרשמית של מפעילי משאית חומרי הנפץ בדהר אל-בידר לא אומתה בטקסט",
    "מידת ההתקדמות בשיחות בין צבא ארה\"ב למשלחות ישראל ולבנון לאחר סיום סבב השיחות בטמפה"
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
     "value": 3.1079,
     "unit": "ILS",
     "change_pct": 0.54,
     "source_id": "src_ecb",
     "as_of": "2026-10-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "חיסול איומים ביטחוניים סמוך לגבול בסוריה ובלבנון",
      "פגיעה בתשתיות לוגיסטיות ואספקת דלק של חיזבאללה"
     ],
     "inferred": [
      "מניעת התבססות מחודשת של חיזבאללה מדרום לליטני",
      "יצירת לחץ צבאי וכלכלי מתמשך על ציר ההתנגדות בלבנון וסוריה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות ופיצוצי מבנים באזורי הגבול",
      "החרפת הלחץ הדיפלומטי והכלכלי על ערוצי האספקה של חיזבאללה"
     ]
    },
    {
     "actor": "לבנון (הממשלה הרשמית)",
     "declared": [
      "בלעדיות נשק והחלטות מלחמה ושלום בידי המדינה וכוחות הביטחון המורשים בלבד",
      "דרישה לפיקוח בינלאומי והדדיות ביישום ההסכמים מול ישראל"
     ],
     "inferred": [
      "חשש מהיגררות לעימות כולל ושאיפה להכיל את פעילות חיזבאללה",
      "שמירה על יציבות השלטון והכלכלה מפני קריסה פנימית נוספת"
     ],
     "forecast": [
      "המשך מתחים פוליטיים וחרמות שרים על רקע חקירות נשק בלתי חוקי",
      "התבצרות בעמדה הדורשת פיקוח צד שלישי בשיחות מול ישראל וארה\"ב"
     ]
    },
    {
     "actor": "סוריה (השלטון החדש)",
     "declared": [
      "גינוי הפגיעה בריבונות המדינה ובאזרחיה מצד צה\"ל ודרישה לאכיפת הדין הבינלאומי",
      "העמדה לדין וענישת בכירי המשטר הקודם של אסד בגין פשעים נגד אזרחים"
     ],
     "inferred": [
      "ביסוס לגיטימציה שלטונית פנימית ובינלאומית דרך רדיפת סמלי השלטון המודח",
      "ניסיון למנוע עימות צבאי ישיר מול ישראל בעת תקופת המעבר"
     ],
     "forecast": [
      "המשך הוצאת צווי מעצר והליכים משפטיים נגד אנשי צבא וביטחון לשעבר",
      "המשך תלונות דיפלומטיות נגד פעילות צה\"ל בדרום המדינה ללא תגובה צבאית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/141477/",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/lebanese-president-warns-regional-tensions-could-spiral-into-wider-escalation/4097665",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21688326",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/964241/lebanons-president-calls-for-restraint-amid-regional-tensions-reaffirm/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964241",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380323",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-kill-man-disability-southern-syria-authorities-say",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-arrests-assad-era-brigadier-general-over-civilian-attacks",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132365",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyfusqp3zl",
     "accessed_at": "2026-10-22T23:52:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T05:21:53+00:00",
  "changes": {
   "NORTH-10222352-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "תקיפות והריסות נרחבות בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10222352-02": {
    "kind": "new"
   },
   "NORTH-10222352-03": {
    "kind": "possible",
    "prev": "הריגת אדם בעל מוגבלויות בדרום סוריה",
    "score": 0.467
   },
   "NORTH-10222352-04": {
    "kind": "new"
   },
   "NORTH-10222352-05": {
    "kind": "new"
   },
   "NORTH-10222352-06": {
    "kind": "new"
   },
   "NORTH-10222352-07": {
    "kind": "new"
   }
  }
 }
};
