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
  "draft": "drafts/iran/2026-10-23T1525__iran-202610231525.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-23T15:25:37+00:00",
   "window": {
    "from": "2026-10-22T15:25:37+00:00",
    "to": "2026-10-23T15:25:37+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610231525"
   },
   "summary": "העימות הצבאי והכלכלי בין ארצות הברית וישראל לבין איראן מחריף תחת מצור ימי אמריקאי ממושך ואיומים הדדיים בחידוש תקיפות נרחבות. וושינגטון וירושלים נערכות לאפשרות של מהלומות צבאיות נוספות על תשתיות גרעין וטילים, בעוד טהרן מאיימת לפגוע במתקני אנרגיה וטכנולוגיה ברחבי המפרץ ופועלת לשיקום אתריה שנפגעו. במקביל, פעילות החות'ים בים האדום ושיבושי השיט במצרי הורמוז ובאב אל-מנדב גורמים לעלייה חדה במחירי הנפט ומניעים מאמצי תיווך בינלאומיים.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "מתיחות ביטחונית גבוהה, מצור ימי אמריקאי על נמלים ואיומים איראניים בפגיעה בנתיבי שיט ובתשתיות אזוריות"
    },
    {
     "name": "עימות צבאי-אסטרטגי (ארה\"ב וישראל מול איראן)",
     "status": "חילופי איומים בהסלמה, היערכות לתקיפת אתרי גרעין וטילים לצד כוננות ספיגה והתגוננות באיראן"
    },
    {
     "name": "הים האדום ובאב אל-מנדב (שלוחות איראן)",
     "status": "תקיפות פעילי חות'ים נגד יעדים סעודיים ואיומים על צירי סחר ימיים"
    },
    {
     "name": "הזירה המדינית והאנרגטית הבינלאומית",
     "status": "עליית מחירי הנפט בעולם מעל 115 דולר ומגעים דיפלומטיים בריכוז טורקיה, רוסיה ופקיסטן"
    }
   ],
   "events": [
    {
     "id": "IRAN-10231525-01",
     "title": "הנשיא טראמפ מצהיר על כוונה לסיים את המלחמה ומאיים בהמשך תקיפות נגד איראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ הצהיר כי ניתן לסיים את המלחמה מול איראן במהירות או להמתין לדעיכתה, וציין כי ייתכן שארצות הברית תמשיך להכות באיראן, מה שיוביל לירידת מחירי הדלק.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T20:31:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T20:31:06+00:00",
     "last_update_at": "2026-10-23T15:04:33+00:00",
     "what_is_not_verified": "האופן והמועד המדויקים שבהם המלחמה תסתיים או יחודשו התקיפות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380513",
       "published_at": "2026-10-23T15:04:33+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132381",
       "published_at": "2026-10-23T06:45:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132373",
       "published_at": "2026-10-22T20:31:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10231525-02",
     "title": "אזהרות איראניות מפני תקיפות תגמול במפרץ ועמידה במצב חירום",
     "summary": "בכירים בטהרן, בהם מוחסן רזאי, הודיעו כי תקיפה ישראלית-אמריקנית חדשה תיענה במתקפות ללא קווים אדומים נגד מתקני נפט, מרכזי נתונים ובינה מלאכותית וכבלים תת-ימיים במדינות המפרץ, בעוד מפקד כוחות היבשה קרא למוכנות עקב ניסיונות לפגוע בלכידות הצבא.",
     "axis": "איראן-מדינות המפרץ/ישראל/ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T15:03:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T15:03:00+00:00",
     "last_update_at": "2026-10-23T13:27:04+00:00",
     "what_is_not_verified": "מידת היישום המעשי של פגיעה בתשתיות אזרחיות במדינות המפרץ בעת תקיפה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_54212169dce761f0",
       "url": "https://www.theguardian.com/business/2026/oct/23/oil-five-month-high-fears-us-renews-strikes-iran",
       "published_at": "2026-10-23T13:27:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_54212169dce761f0",
       "url": "https://en.irna.ir/news/86301057/Enemy-seeks-to-disrupt-armed-forces-cohesion-Iranian-commander",
       "published_at": "2026-10-23T13:21:52+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_54212169dce761f0",
       "url": "https://www.theguardian.com/world/2026/oct/22/iran-threatens-seven-gulf-countries-us-israel-renew-attacks",
       "published_at": "2026-10-22T15:03:00+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10231525-03",
     "title": "היערכות ודיונים לקראת גל תקיפות אמריקאי-ישראלי אפשרי לאחר הבחירות",
     "summary": "דיווחים מצביעים על כך שממשל טראמפ וישראל שוקלים חידוש מתקפות צבאיות מקיפות נגד מאגרי טילים, מתקני תשתית ואתרי גרעין באיראן, לרבות אפשרות שימוש בפצצה כבדה נגד מתחם תת-קרקעי בהר המכוש.",
     "axis": "ארה\"ב/ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T15:34:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T15:34:34+00:00",
     "last_update_at": "2026-10-23T11:32:09+00:00",
     "what_is_not_verified": "האם אכן תתקבל החלטה על תקיפה לאחר בחירות האמצע או הבחירות בישראל, והיקף המטרות המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610234921",
       "published_at": "2026-10-23T11:32:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/how-netanyahu-could-attack-iran-force-israel-unity-government-after-elections",
       "published_at": "2026-10-23T10:36:51+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/nyt-reports-plans-for-fresh-strikes-on-iran-after-the-us-midterm-elections",
       "published_at": "2026-10-23T08:40:09+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21691337",
       "published_at": "2026-10-23T03:52:26+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/iran-pushes-hard-on-its-nuclear-rebuild-daring-trump-to-strike-again/",
       "published_at": "2026-10-23T00:43:00+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/video/20261022-reports-show-us-and-israel-plan-new-strikes-on-iran",
       "published_at": "2026-10-22T15:34:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10231525-04",
     "title": "מצור ימי אמריקאי על נמלי איראן ושיבוש ייצוא הנפט",
     "summary": "ארצות הברית ממשיכה להטיל מצור על נמלי איראן שהגיע ל-100 ימים ומנע ייצוא נפט בסך מיליארדי דולרים, מה שגרר צניחה במשלוחי נפט שהוגדרו כמלזיים שהועברו לסין.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T18:48:35+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T18:48:35+00:00",
     "last_update_at": "2026-10-23T11:32:09+00:00",
     "what_is_not_verified": "הערכת היקף הנזק הכספי הכולל למשק האיראני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610234921",
       "published_at": "2026-10-23T11:32:09+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610222999",
       "published_at": "2026-10-23T06:58:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132372",
       "published_at": "2026-10-22T18:48:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10231525-05",
     "title": "עליית מחירי הנפט בעולם על רקע המתיחות והאיומים במצר הורמוז",
     "summary": "מחיר חבית נפט מסוג ברנט עלה מעל 115 דולר לחבית עקב חששות מהסלמה בעימות הצבאי, חידוש תקיפות אמריקאיות ואיומים להפרעות בנתיבי השיט במצר הורמוז.",
     "axis": "איראן-מפרץ הורמוז/שוק האנרגיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T16:10:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T16:10:36+00:00",
     "last_update_at": "2026-10-23T13:27:04+00:00",
     "what_is_not_verified": "טענות הדדיות בדבר בימוי מתקפות והנחת מוקשים ימיים במצר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_3271d01f4095b676",
       "url": "https://www.theguardian.com/business/2026/oct/23/oil-five-month-high-fears-us-renews-strikes-iran",
       "published_at": "2026-10-23T13:27:04+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_3271d01f4095b676",
       "url": "https://t.me/lelotsenzura/94744",
       "published_at": "2026-10-22T16:10:36+00:00"
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
     "id": "IRAN-10231525-06",
     "title": "האצת שיקום מתקני הגרעין האיראניים והפצת הנחיות התגוננות",
     "summary": "תצלומי לוויין חשפו עבודות שיקום מהירות במתקני ייצור וגרעין באיראן שנפגעו בעבר, במקביל לפרסום הנחיות אזרחיות באיראן להתגוננות מפני תקיפות באתרי גרעין וקריאות באו\"ם נגד התנהלות סבא\"א.",
     "axis": "איראן-גרעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T17:38:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T17:38:36+00:00",
     "last_update_at": "2026-10-23T12:11:17+00:00",
     "what_is_not_verified": "סטטוס הפעילות המבצעית בתוך המתקנים התת-קרקעיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_9f7e790cb8c21517",
       "url": "https://en.irna.ir/news/86301031/Iran-demands-end-to-selective-IAEA-statute-implementation",
       "published_at": "2026-10-23T12:11:17+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_9f7e790cb8c21517",
       "url": "https://www.fdd.org/analysis/iran-pushes-hard-on-its-nuclear-rebuild-daring-trump-to-strike-again/",
       "published_at": "2026-10-23T00:43:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_9f7e790cb8c21517",
       "url": "https://t.me/alexmehacarmel/48833",
       "published_at": "2026-10-22T17:38:36+00:00"
      }
     ],
     "places": [
      {
       "name": "נתנז, איראן",
       "lat": 33.5071,
       "lon": 51.9136
      },
      {
       "name": "וינה, אוסטריה",
       "lat": 48.2084,
       "lon": 16.3725
      }
     ]
    },
    {
     "id": "IRAN-10231525-07",
     "title": "התרחבות איומי החות'ים בים האדום ופגיעה באינטרסים סעודיים",
     "summary": "פעולות תקיפה של החות'ים בתימן על תשתיות נפט סעודיות ושליטתם במצר באב אל-מנדב מגבירות את הלחץ האזורי, לצד דיווחים על תקיפות אוויריות סעודיות בצנעא והרחבת מפעל טילים סעודי להרתעה מול איראן.",
     "axis": "שלוחות איראן (חות'ים)-ערב הסעודית/נתיבי שיט",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T10:46:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T10:46:29+00:00",
     "last_update_at": "2026-10-23T12:10:20+00:00",
     "what_is_not_verified": "מידת התיאום והשליטה הישירה של טהרן במהלכי החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-bab-al-mandab-and-saudi-arabia-tehrans-strategic-calculus-balance",
       "published_at": "2026-10-23T12:10:20+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86301006/Saudi-airstrikes-target-Yemen-s-capital-Sanaa",
       "published_at": "2026-10-23T11:34:22+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-saudi-missile-plant-expansion-may-produce-more-powerful-missiles-study",
       "published_at": "2026-10-23T10:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "מוח'א, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    },
    {
     "id": "IRAN-10231525-08",
     "title": "מגעים דיפלומטיים ותיווך בינלאומי סביב מצר הורמוז והמשבר",
     "summary": "שרים ממדינות אירופה והמזרח התיכון נועדו באיסטנבול לדיון במצב מצר הורמוז, בעוד רוסיה ופקיסטן מנסות לקדם ערוצי הידברות וריסון בין ארצות הברית, איראן ומדינות המפרץ.",
     "axis": "דיפלומטיה אזורית ובינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T14:41:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T14:41:19+00:00",
     "last_update_at": "2026-10-23T14:45:25+00:00",
     "what_is_not_verified": "נכונות הצדדים הלוחמים להתפשר על בסיס היוזמות השונות.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://en.irna.ir/news/86301122/Pakistan-says-in-close-contact-with-Iran-US-urges-restraint",
       "published_at": "2026-10-23T14:45:25+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://www.al-monitor.com/originals/2026/10/european-mideast-foreign-ministers-hold-talks-istanbul",
       "published_at": "2026-10-23T12:30:28+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://www.fdd.org/analysis/washington-should-resist-russias-gulf-mediation-bid/",
       "published_at": "2026-10-22T14:41:19+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      },
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      }
     ]
    }
   ],
   "not_verified": [
    "קיומה ומועדה המדויק של תוכנית תקיפה אמריקאית-ישראלית לאחר בחירות האמצע או הבחירות בישראל",
    "ההיתכנות המבצעית של הטלת פצצה כבדה מסוג MOAB על מתחם הר המכוש",
    "טענות הנשיא טראמפ כי איראן מביימת תקיפות ומניחה מוקשים ימיים במצר הורמוז",
    "היקף הנזק הכלכלי הבלעדי של המצור הימי הנאמד ב-25 מיליארד דולר",
    "ההערכות לפיהן תקיפה צבאית תביא להפלת המשטר בטהרן או לכפיית ממשלת אחדות בישראל"
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להגיב ללא קווים אדומים נגד מתקני אנרגיה, תקשורת וטכנולוגיה במדינות המפרץ במקרה של תקיפה",
      "לדרוש את הפסקת האכיפה המפלה והפוליטית לטענתה של סבא\"א",
      "לשמור על לכידות הכוחות המזוינים והמוכנות של העורף"
     ],
     "inferred": [
      "לשקם במהירות את רכיבי תוכנית הגרעין והטילים שנפגעו באתרים תת-קרקעיים",
      "להפעיל לחץ על מחירי הנפט העולמיים כדי לאלץ את ארצות הברית לסגת מהמצור ומהמלחמה",
      "לנתק את הקשרים הביטחוניים בין וושינגטון למדינות המפרץ"
     ],
     "forecast": [
      "האצת ביצור מתקני הגרעין בהר המכוש תוך המשך איומים על חופש השיט במצר הורמוז",
      "החרפת פעולות התגמול באמצעות תקיפות א-סימטריות או דרך שלוחות במקרה של תקיפה אמריקאית"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "לסיים את העימות מול איראן ולהביא להורדה מהירה של מחירי הדלק",
      "להמשיך במצור הימי על הנמלים האיראניים ככל שיידרש",
      "למנוע מאיראן השגת נשק גרעיני בעקבות הסכנה בשימוש בו"
     ],
     "inferred": [
      "מיטוט היכולת הכלכלית של איראן באמצעות חנק ייצוא הנפט",
      "יצירת הרתעה צבאית ישירה שתמנע את התחדשות תוכנית הנשק הגרעיני",
      "בחינת תקיפות צבאיות ממוקדות לאחר סיום מערכת הבחירות הפנימית"
     ],
     "forecast": [
      "המשך אכיפת המצור הימי במפרץ הפרסי",
      "הוצאה לפועל של גל תקיפות מוגבל או נרחב נגד מתקני טילים וגרעין אם ייכשלו המגעים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומי טרור מיידיים ופעולה נגד שלוחות הנתמכות בידי משמרות המהפכה"
     ],
     "inferred": [
      "מניעת שיקום תשתיות הגרעין והטילים של איראן באמצעים צבאיים",
      "תיאום הדוק עם ארצות הברית למהלומה צבאית משותפת נגד מתקנים מבוצרים באיראן",
      "רתימת המצב הביטחוני והמערכה לצרכים פוליטיים פנימיים לאחר הבחירות"
     ],
     "forecast": [
      "המשך היערכות ואימונים לקראת תקיפות באיראן בשיתוף פעולה עם צבא ארצות הברית",
      "הגברת מאמצי הסיכול נגד מוקדי ייצור אמל\"ח איראניים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/european-mideast-foreign-ministers-hold-talks-istanbul",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/washington-should-resist-russias-gulf-mediation-bid/",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/video/20261022-reports-show-us-and-israel-plan-new-strikes-on-iran",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/business/2026/oct/23/oil-five-month-high-fears-us-renews-strikes-iran",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610222999",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86301122/Pakistan-says-in-close-contact-with-Iran-US-urges-restraint",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21691337",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380513",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-bab-al-mandab-and-saudi-arabia-tehrans-strategic-calculus-balance",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132372",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48833",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94744",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T23:40:42+00:00",
  "changes": {
   "IRAN-10231525-01": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "דיווחים והערכות בנוגע לתוכניות לתקיפה ישראלית-אמריקאית באיראן",
    "score": 1.0
   },
   "IRAN-10231525-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "איומים איראניים לתקוף יעדי נפט, תקשורת וטכנולוגיה במדינות המפרץ",
    "score": 1.0
   },
   "IRAN-10231525-03": {
    "kind": "new"
   },
   "IRAN-10231525-04": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פיקוד מרכז האמריקאי מציין 100 ימי מצור ימי על איראן",
    "score": 1.0
   },
   "IRAN-10231525-05": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "טענות איראניות על פגיעה במכליות במצר הורמוז והכחשה אמריקאית",
    "score": 1.0
   },
   "IRAN-10231525-06": {
    "kind": "new"
   },
   "IRAN-10231525-07": {
    "kind": "new"
   },
   "IRAN-10231525-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-23T1528__ukraine-202610231528.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-23T15:28:58+00:00",
   "window": {
    "from": "2026-10-22T15:28:58+00:00",
    "to": "2026-10-23T15:28:58+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610231528"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בחילופי מהלומות כבדים בעומק השטחים, לרבות תקיפות כטב\"מים וטילים על מוסקבה, אוריול, חרקיב, צ'רניהיב ודניפרו. במקביל להסלמה הצבאית ולפגיעות בנתיבי השיט, סוכם על מתווה מקומי ראשוני להפסקת אש הומניטרית בעיר אולשקי שבמחוז חרסון ובוצעה עסקת חילופי שבויים. עם זאת, המאמצים המדיניים להסדר כולל נתקלים במחלוקות טריטוריאליות חריפות סביב מעמד השטחים הכבושים בדונבאס.",
   "fronts": [
    {
     "name": "אולשקי (מחוז חרסון)",
     "status": "הסכמה על הפסקת אש מקומית זמנית לצורך פינוי וסיוע הומניטרי החל מ-29 באוקטובר"
    },
    {
     "name": "צפון אוקראינה (סומי וצ'רניהיב)",
     "status": "פעילות גוברת של חוליות חבלה וסיור רוסיות לצד תקיפות על יעדים אזרחיים"
    },
    {
     "name": "הים השחור ואזור החוף",
     "status": "איומים על השיט האזרחי ותקיפות כטב\"מים סמוך לגבולות רומניה ומולדובה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10231528-01",
     "title": "הסכמה על הפסקת אש מקומית באולשקי בתיווך מלניה טראמפ",
     "summary": "הבית הלבן הודיע כי רוסיה ואוקראינה הגיעו להסכמה על הפסקת אש מקומית בעיר הכבושה אולשקי במחוז חרסון, החל מ-29 באוקטובר 2026, במטרה לאפשר סיוע ופינוי אזרחים.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T13:38:06+00:00",
     "last_update_at": "2026-10-23T15:27:23+00:00",
     "what_is_not_verified": "מידת היישום בפועל של הפסקת האש החל מהמועד שנקבע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380521",
       "published_at": "2026-10-23T15:27:23+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2207035",
       "published_at": "2026-10-23T15:15:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/23/starlink-ukraine-musk-trump-russia-black-sea-strikes-france-milan-europe-protests-latest-news-updates",
       "published_at": "2026-10-23T15:12:14+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4177544-melania-trump-announces-localized-ceasefire-between-russia-and-ukraine-for-oleshky.html",
       "published_at": "2026-10-23T14:59:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/23/ukraine-troops-report-ongoing-problems-with-starlink-satellite-network",
       "published_at": "2026-10-23T14:57:50+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059447/",
       "published_at": "2026-10-23T14:51:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48860",
       "published_at": "2026-10-23T14:06:33+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/23/russia-ukraine-agree-to-ceasefire-to-evacuate-oleshky-residents",
       "published_at": "2026-10-23T13:58:22+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059437/",
       "published_at": "2026-10-23T13:41:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380494",
       "published_at": "2026-10-23T13:40:01+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/breaking-russia-ukraine-agree-to-oleshky-ceasefire-mediated-by-melania-trump-white-house-says/",
       "published_at": "2026-10-23T13:38:06+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-02",
     "title": "פגיעת טילי שיוט אוקראיניים במפעל בעיר אוריול",
     "summary": "דווח על פגיעת טילי שיוט אוקראיניים מדגם פלמינגו במפעל פרוטון בעיר אוריול שבשטח רוסיה.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T15:03:56+00:00",
     "last_update_at": "2026-10-23T15:08:59+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ואימות רשמי של דגם הטיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48863",
       "published_at": "2026-10-23T15:08:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48862",
       "published_at": "2026-10-23T15:03:56+00:00"
      }
     ],
     "places": [
      {
       "name": "אוריול, רוסיה",
       "lat": 52.9709,
       "lon": 36.0642
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-03",
     "title": "מתקפת כטב\"מים אוקראינית על אזור מוסקבה והשבתת נמלי תעופה",
     "summary": "כטב\"מים אוקראיניים שוגרו לעבר אזור מוסקבה, יורטו ליד נמלי התעופה וגרמו להשבתת הפעילות והגבלות תעופה בארבעה נמלי תעופה מרכזיים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T12:57:18+00:00",
     "last_update_at": "2026-10-23T14:56:03+00:00",
     "what_is_not_verified": "מספר הכטב\"מים המדויק שפגע או יורט בכל נמל תעופה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48861",
       "published_at": "2026-10-23T14:56:03+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drone-attack-triggers-shut-down-of-moscow-airports-drone-debris-reported-on-tarmac/",
       "published_at": "2026-10-23T14:28:19+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/23/all-four-moscow-airports-shut-down-one-declares-air-raid-alert-and-begins-evacuating-passengers",
       "published_at": "2026-10-23T12:57:18+00:00"
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
     "id": "UKRAINE-10231528-04",
     "title": "תקיפה רוסית על יעדים אזרחיים בצ'רניהיב",
     "summary": "תקיפה רוסית בשעות היום פגעה בשני בתי עסק פרטיים בעיר צ'רניהיב, והביאה להרג של אדם אחד ולפציעתם של לפחות 25 בני אדם נוספים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:48:30+00:00",
     "last_update_at": "2026-10-23T14:48:30+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-daytime-attack-on-chernihiv-civilian-businesses-kills-1-injures-at-least-25/",
       "published_at": "2026-10-23T14:48:30+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'רניהיב, אוקראינה",
       "lat": 51.4941,
       "lon": 31.2943
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-05",
     "title": "עסקת חילופי שבויים הדדית בין רוסיה לאוקראינה",
     "summary": "משרד ההגנה הרוסי דיווח על עסקת חילופי שבויים שבה הוחזרו 270 אנשי צבא רוסים בתמורה ל-270 שבויים אוקראינים.",
     "axis": "משא ומתן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:09:39+00:00",
     "last_update_at": "2026-10-23T14:09:39+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2206993",
       "published_at": "2026-10-23T14:09:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10231528-06",
     "title": "תקיפות רוסיות על רובע אוסנוביאנסקי בחרקיב",
     "summary": "כוחות רוסיים תקפו את רובע אוסנוביאנסקי בחרקיב באמצעות כטב\"מים, גרמו לפציעת שני ילדים ולנזק למבני מגורים, מכוניות ומבנה קרקס.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T10:55:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:10:00+00:00",
     "last_update_at": "2026-10-23T14:10:00+00:00",
     "what_is_not_verified": "דגם הכטב\"מים המדויק (זוהו ראשונית כגראן-3 ושאהד רקטי)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059442/",
       "published_at": "2026-10-23T14:10:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקיב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-07",
     "title": "תקיפת כטב\"ם רוסי והטבעת ספינת משא אזרחית מול חופי רומניה",
     "summary": "ספינת משא אזרחית טבעה בים השחור מול חופי רומניה בעקבות פגיעת כטב\"ם רוסי, אדם אחד נהרג ושלושה אנשי צוות נעדרים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T13:48:45+00:00",
     "last_update_at": "2026-10-23T13:48:45+00:00",
     "what_is_not_verified": "גורל שלושת אנשי הצוות הנעדרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/civilian-cargo-ship-sinks-off-coast-of-romania-after-russian-drone-strike-authorities-say/",
       "published_at": "2026-10-23T13:48:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10231528-08",
     "title": "תקיפות רוסיות חוזרות ונשנות על תשתיות בעיר דניפרו",
     "summary": "פגיעות רוסיות בתשתיות קריטיות ומבני מגורים בעיר דניפרו גרמו להרג של אדם אחד ולפציעת חמישה נוספים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T13:25:00+00:00",
     "last_update_at": "2026-10-23T13:25:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059430/",
       "published_at": "2026-10-23T13:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-09",
     "title": "התרסקות שברי כטב\"ם בשטח מולדובה",
     "summary": "שברי כטב\"ם אותרו בסמוך למבנה מגורים בכפר קישטלניצה שבמולדובה, בעקבות חדירת כלי טיס למרחב האווירי במהלך תקיפות על אוקראינה.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:20:00+00:00",
     "last_update_at": "2026-10-23T14:20:00+00:00",
     "what_is_not_verified": "זהות משגר הכטב\"ם המדויקת ששבריו אותרו במולדובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059443/",
       "published_at": "2026-10-23T14:20:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קישטלניצה, מולדובה",
       "lat": 47.5684,
       "lon": 28.6598
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-10",
     "title": "הגברת פעילות חוליות סיור וחבלה רוסיות בסומי ובצ'רניהיב",
     "summary": "כוחות הביטחון של אוקראינה זיהו חדירות של חוליות חבלה וסיור רוסיות במטרה לאסוף מודיעין על עמדות הגנה ולהניח מוקשים.",
     "axis": "חזיתות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T13:00:00+00:00",
     "last_update_at": "2026-10-23T13:00:00+00:00",
     "what_is_not_verified": "היקף החוליות הפועלות בשטח ומיקומיהן המדויקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177491-russian-sabotage-and-reconnaissance-groups-step-up-activity-in-sumy-and-chernihiv-regions-sbgs.html",
       "published_at": "2026-10-23T13:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10231528-11",
     "title": "מגבלות מתמשכות על רשת סטארלינק עבור צבא אוקראינה",
     "summary": "גורמים באוקראינה מדווחים כי רשת סטארלינק ומערכת סטארשילד ממשיכות להיתקל במגבלות טכניות, הפוגעות בהפעלת כטב\"מים ומערכות הגנה אווירית.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T02:16:26+00:00",
     "last_update_at": "2026-10-23T11:01:08+00:00",
     "what_is_not_verified": "הגורם האחראי הישיר להמשך המגבלות והאטת הרשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-23T11:01:08+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/23/trump-musk-zelenskyy-who-is-blaming-who-in-ukraine-starlink-row",
       "published_at": "2026-10-23T02:16:26+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מתווה תוכנית השלום האמריקאית הכוללת אזור מפורז בדונבאס וויתור על חברות בנאט\"ו",
    "שקילת הקלות סנקציות נוספות על רוסיה על ידי ממשל טראמפ",
    "הפעלת רשת בוטים רוסית המשתמשת בזיופי עמוק נגד מועמדים בארצות הברית",
    "טענות על תופעות דתיות חריגות הקשורות לתמונת לוחם גדוד אספניולה שנהרג",
    "מעורבות ישירה של גורמי מודיעין רוסיים בריגול בגרמניה"
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
     "value": 1.1193,
     "unit": "USD",
     "change_pct": -0.11,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הפסקת אש וערבויות ביטחון כתנאי ראשוני לשלום צודק",
      "סירוב מוחלט לוויתור על שטחים ריבוניים לטובת רוסיה"
     ],
     "inferred": [
      "הפעלת לחץ ישיר על העורף הרוסי באמצעות פגיעה בנמלי תעופה ובמפעלים צבאיים",
      "הבטחת מסדרונות הומניטריים להצלת אוכלוסייה מנותקת"
     ],
     "forecast": [
      "המשך דרישה לערבויות בינלאומיות נוקשות טרם כניסה לשיחות שלום מהותיות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הכרה בשטחים הכבושים כשטח רוסי היסטורי ולא כוויתור טריטוריאלי",
      "הסכמה עקרונית לחידוש מגעים תלת-צדדיים לדיון בסוגיות ביטחון סופיות"
     ],
     "inferred": [
      "שחיקת התשתיות האזרחיות והתעשייתיות של אוקראינה באמצעות גלי תקיפות מתמשכים",
      "ניצול הקלות סנקציות כלכליות ויוזמות מקומיות להפחתת הלחץ המדיני"
     ],
     "forecast": [
      "המשך הלחימה תוך הצבת תנאי כניעה טריטוריאליים נוקשים בכל משא ומתן עתידי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/23/trump-musk-zelenskyy-who-is-blaming-who-in-ukraine-starlink-row",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/civilian-cargo-ship-sinks-off-coast-of-romania-after-russian-drone-strike-authorities-say/",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380494",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/23/all-four-moscow-airports-shut-down-one-declares-air-raid-alert-and-begins-evacuating-passengers",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059443/",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2206993",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48861",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4177491-russian-sabotage-and-reconnaissance-groups-step-up-activity-in-sumy-and-chernihiv-regions-sbgs.html",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T23:42:59+00:00",
  "changes": {
   "UKRAINE-10231528-01": {
    "kind": "new"
   },
   "UKRAINE-10231528-02": {
    "kind": "possible",
    "prev": "פגיעת כטב\"ם אוקראיני בעגורן בעיר ליפצק ברוסיה",
    "score": 0.467
   },
   "UKRAINE-10231528-03": {
    "kind": "new"
   },
   "UKRAINE-10231528-04": {
    "kind": "new"
   },
   "UKRAINE-10231528-05": {
    "kind": "new"
   },
   "UKRAINE-10231528-06": {
    "kind": "new"
   },
   "UKRAINE-10231528-07": {
    "kind": "new"
   },
   "UKRAINE-10231528-08": {
    "kind": "new"
   },
   "UKRAINE-10231528-09": {
    "kind": "new"
   },
   "UKRAINE-10231528-10": {
    "kind": "new"
   },
   "UKRAINE-10231528-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת ודיווחים סותרים סביב הגבלות התקשורת הלוויינית של סטארלינק",
    "score": 1.0
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
