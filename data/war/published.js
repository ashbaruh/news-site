/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-27T1940__yemen-202611271940.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-27T19:40:29+00:00",
   "window": {
    "from": "2026-11-26T19:40:29+00:00",
    "to": "2026-11-27T19:40:29+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611271940"
   },
   "summary": "הלחימה בתימן ובאזור המפרץ נמשכת ביתר שאת, כאשר החות'ים מבצעים תקיפות נגד תשתיות אנרגיה וערים בסעודיה, והקואליציה בהובלת סעודיה משיבה בתקיפות אוויריות נרחבות בשטחים שבשליטת החות'ים. במקביל, חברות 'ברית מכה' (סעודיה, פקיסטן וטורקיה) מהדקות את שיתוף הפעולה הצבאי וההגנתי ביניהן לנוכח האיומים הללו.",
   "fronts": [
    {
     "name": "חזית תימן וסעודיה",
     "status": "פעילה"
    },
    {
     "name": "הים האדום ומצר באב אל-מנדב",
     "status": "פעילה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11271940-01",
     "title": "פגישת ברית הסכמת מכה באיסלאמבאד",
     "summary": "נציגי פקיסטן, סעודיה וטורקיה נפגשו באיסלאמבאד כדי לדון בהסכם ההגנה המשותף שלהם, וגינו את התקיפות החות'יות נגד סעודיה תוך הבטחה להגן על ביטחון הממלכה.",
     "axis": "סעודיה והקואליציה מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T08:58:04+00:00",
     "last_update_at": "2026-11-27T17:41:24+00:00",
     "what_is_not_verified": "ההצהרות אינן מאומתות מעבר לכתוב במסמכים הרשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_7f12c76a6228a3ec",
       "url": "https://www.aljazeera.com/news/2026/11/27/mecca-pact-allies-condemn-heinous-houthi-attacks-on-saudi-arabia?traffic_source=rss",
       "published_at": "2026-11-27T17:41:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_7f12c76a6228a3ec",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/mecca-pact-members-meet-islamabad-condemn-houthi-attacks-saudi-arabia",
       "published_at": "2026-11-27T17:29:50+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_7f12c76a6228a3ec",
       "url": "https://www.newarab.com/news/erdogan-completes-turkeys-ratification-mecca-pact",
       "published_at": "2026-11-27T08:58:04+00:00"
      }
     ],
     "places": [
      {
       "name": "איסלאמבאד, פקיסטן",
       "lat": 33.6938,
       "lon": 73.0652
      }
     ]
    },
    {
     "id": "YEMEN-11271940-02",
     "title": "תקיפה על מתקן זיקוק נפט בסעודיה",
     "summary": "כוחות חות'ים תקפו מתקן זיקוק נפט באזור ג'זאן שבסעודיה, מה שגרם להשבתה זמנית של המתקן ולנפגעים.",
     "axis": "סעודיה והקואליציה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:29:58+00:00",
     "last_update_at": "2026-11-27T16:49:23+00:00",
     "what_is_not_verified": "פרטי הנזק המלאים אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/kuwait-summons-iran-ambassador-saudi-arabia-strikes-sanaa",
       "published_at": "2026-11-27T16:49:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
       "published_at": "2026-11-27T16:46:57+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
       "published_at": "2026-11-27T07:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'זאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      }
     ]
    },
    {
     "id": "YEMEN-11271940-03",
     "title": "תקיפות אוויריות של סעודיה בתימן",
     "summary": "חיל האוויר הסעודי והקואליציה תקפו את צנעא, מחוז סעדה, ומבנה מגורים באל-טורבה שבמחוז תעז, בתגובה להתקפות החות'יות.",
     "axis": "סעודיה והקואליציה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:29:58+00:00",
     "last_update_at": "2026-11-27T16:49:23+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת ממקור ראשון סעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/kuwait-summons-iran-ambassador-saudi-arabia-strikes-sanaa",
       "published_at": "2026-11-27T16:49:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
       "published_at": "2026-11-27T16:46:57+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
       "published_at": "2026-11-27T07:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11271940-04",
     "title": "יירוט כלי טיס בלתי מאויש מעל ריאד",
     "summary": "הקואליציה בהובלת סעודיה דיווחה על יירוט והשמדה של כלי טיס בלתי מאויש ששוגר לעבר אזור ריאד או האזור הדרומי.",
     "axis": "סעודיה והקואליציה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T21:52:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T21:52:05+00:00",
     "last_update_at": "2026-11-27T16:46:57+00:00",
     "what_is_not_verified": "לא מאומת מי עמד מאחורי השיגור באופן בלתי תלוי מעבר להודעת הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_d13fb558324231bd",
       "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
       "published_at": "2026-11-27T16:46:57+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_d13fb558324231bd",
       "url": "https://www.sabanew.net/viewstory/156613",
       "published_at": "2026-11-27T13:14:04+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_54d52b323c7c5577",
       "url": "https://www.sabanew.net/viewstory/156583",
       "published_at": "2026-11-26T21:52:05+00:00"
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
    "מספר הנפגעים המדויק בתקיפות הסעודיות בתעז",
    "היקף הנזק המלא במתקן הזיקוק בג'זאן"
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
     "value": 3.3094,
     "unit": "ILS",
     "change_pct": -0.54,
     "source_id": "src_ecb",
     "as_of": "2026-11-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "פגיעה במטרות כלכליות ואסטרטגיות בסעודיה"
     ],
     "inferred": [
      "הרחבת השליטה באזורים בתימן והפעלת לחץ על הממשלה המוכרת וסעודיה"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים וטילים לעבר סעודיה ומטרות ימיות"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על הביטחון, הריבונות והשלמות הטריטוריאלית של הממלכה",
      "תמיכה בממשלת תימן המוכרת"
     ],
     "inferred": [
      "בלימת ההתקדמות החות'ית ופגיעה ביכולותיהם הצבאיות והאוויריות"
     ],
     "forecast": [
      "הידוק שיתופי פעולה אזוריים והגנה משותפת במסגרת בריתות הגנה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/27/mecca-pact-allies-condemn-heinous-houthi-attacks-on-saudi-arabia?traffic_source=rss",
     "accessed_at": "2026-11-27T19:40:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/mecca-pact-members-meet-islamabad-condemn-houthi-attacks-saudi-arabia",
     "accessed_at": "2026-11-27T19:40:29+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
     "accessed_at": "2026-11-27T19:40:29+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156583",
     "accessed_at": "2026-11-27T19:40:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T09:06:53+00:00",
  "changes": {
   "YEMEN-11271940-01": {
    "kind": "new"
   },
   "YEMEN-11271940-02": {
    "kind": "possible",
    "prev": "מתקפות חות'יות על נמלים ומתקני אנרגיה בסעודיה",
    "score": 0.633
   },
   "YEMEN-11271940-03": {
    "kind": "possible",
    "prev": "תקיפות נגדיות של הקואליציה בתימן",
    "score": 0.467
   },
   "YEMEN-11271940-04": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-27T0859__iran-202611270859.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-27T08:59:23+00:00",
   "window": {
    "from": "2026-11-26T08:59:23+00:00",
    "to": "2026-11-27T08:59:23+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611270859"
   },
   "summary": "המתיחות האזורית בין איראן לבין ישראל וארצות הברית נמשכת על רקע לחץ כלכלי כבד וסנקציות המוטלות על טהאן, לצד איומים הדדיים באפשרות של תקיפה צבאית נרחבת על מתקני גרעין ותשתיות. במקביל, נרשמים אירועים ביטחוניים בגזרות השונות, הכוללים תקרית אווירית מול אי חנגאם, מתקפת כטב\"מים בכווית שגרמה לנפגעים זרים ואוזכרה בהקשר אזורי, והיערכות צבאית מוגברת הכוללת תקיפות מנע של צה\"ל בלבנון והידוק בריתות הגנה אזוריות.",
   "fronts": [
    {
     "name": "ציר איראן - ארה\"ב",
     "status": "פעיל ומתוח עם איומים הדדיים ותקיפות מנועות"
    },
    {
     "name": "ציר ישראל - איראן ושלוחותיה",
     "status": "הסלמה פוטנציאלית עם פעילות מונעת בלבנון"
    },
    {
     "name": "זירת המפרץ",
     "status": "מתיחות בעקבות תקריות כטב\"מים ופעילות ימית"
    }
   ],
   "events": [
    {
     "id": "IRAN-11270859-01",
     "title": "ירי אזהרה של משמרות המהפכה מול אי חנגאם",
     "summary": "מערכת הגנה אווירית של משמרות המהפכה ביצעה ירי אזהרה בדרום מזרח אי חנגאם ואילצה מטוס קרב אמריקאי מסוג אף-16 לסגת.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T07:11:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:11:46+00:00",
     "last_update_at": "2026-11-27T08:07:38+00:00",
     "what_is_not_verified": "הטענה שמתקפת האזהרה אכן אילצה מטוס אמריקאי לסגת מבוססת על הודעת משמרות המהפכה בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-682",
       "published_at": "2026-11-27T08:07:38+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-it-forced-us-fighter-jet-retreat-hengam-island",
       "published_at": "2026-11-27T07:11:46+00:00"
      }
     ],
     "places": [
      {
       "name": "אי חנגאם, איראן",
       "lat": 26.6485,
       "lon": 55.8831
      }
     ]
    },
    {
     "id": "IRAN-11270859-02",
     "title": "תקיפת כטב\"ם בכווית והריגת טכנאים איטלקים",
     "summary": "מתקפת כטב\"ם פגעה במתקן בכווית וגרמה למותם של שני טכנאים איטלקים מחברת ריינמטאל. ממשלת איראן הכחישה קשר לתקיפה והציעה חקירה משותפת, בעוד שגורמים שונים האשימו את איראן.",
     "axis": "איראן מול המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T15:22:33+00:00",
     "last_update_at": "2026-11-27T08:07:38+00:00",
     "what_is_not_verified": "זהות אלגורם האחראי לתקיפה והטענה האיראנית שמדובר בפעילות חשודה או מבצע דגל כוזב אינן מאומתות ממקור בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-682",
       "published_at": "2026-11-27T08:07:38+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86333718/Iran-s-Italy-embassy-warns-against-efforts-to-draw-Europe-into",
       "published_at": "2026-11-27T06:39:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86333676/Iran-ready-for-joint-probe-into-Kuwait-attack-Araghchi",
       "published_at": "2026-11-27T05:41:39+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/several-countries-slam-suspected-iranian-attack-kuwait",
       "published_at": "2026-11-27T02:26:09+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611267797",
       "published_at": "2026-11-26T22:00:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c39w9y5dx4k5o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-26T21:17:53+00:00"
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
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iranian-drone-attack-kuwait-leaves-two-italians-dead",
       "published_at": "2026-11-26T15:22:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11270859-03",
     "title": "השלמת אשרור הסכם ההגנה של מכה",
     "summary": "טורקיה השלימה את תהליך האשרור של הסכם ההגנה המשותף של מכה יחד עם פקיסטן וערב הסעודית, על רקע המתיחות מול איראן.",
     "axis": "איראן מול מדינות האזור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T05:46:29+00:00",
     "last_update_at": "2026-11-27T07:16:30+00:00",
     "what_is_not_verified": "מהימנות האפקטיביות המעשית של ההסכם להגנה משותפת אינה מאומתת בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_3995594f910c17f6",
       "url": "https://www.aljazeera.com/news-analysis/2026/11/27/can-the-mecca-pact-turn-its-collective-defence-promise-into-real-support?traffic_source=rss",
       "published_at": "2026-11-27T07:16:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3995594f910c17f6",
       "url": "https://www.al-monitor.com/originals/2026/11/erdogan-completes-turkeys-ratification-mecca-defence-pact",
       "published_at": "2026-11-27T05:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "אסלאמאבאד, פקיסטן",
       "lat": 33.6938,
       "lon": 73.0652
      },
      {
       "name": "מכה, ערב הסעודית",
       "lat": 21.4208,
       "lon": 39.8269
      }
     ]
    },
    {
     "id": "IRAN-11270859-04",
     "title": "תקיפת משגרים של כוח רדואן בדרום לבנון",
     "summary": "צה\"ל תקף עשרות רקטות ומשגרים של כוח רדואן בעומק דרום לבנון על רקע הערכות המודיעין לגבי מעורבות אפשרית של חיזבאללה.",
     "axis": "ישראל מול שלוחקות איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T19:37:05+00:00",
     "last_update_at": "2026-11-26T19:37:05+00:00",
     "what_is_not_verified": "היקף הנזק המלא והאם חיזבאללה יבחר להצטרף באופן מלא לעימות נותרו בגדר הערכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "fh_f413d436125d4e23",
       "url": "https://www.walla.co.il/news/military/383963336",
       "published_at": "2026-11-26T19:37:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11270859-05",
     "title": "שיגור 150 טילים אמריקאיים לבלימת תקיפות במצר",
     "summary": "נשיא ארה\"ב חשף כי צבא ארצות הברית שיגר 150 טילים במצר כדי לבלום תקיפות נגד הכוחות.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T23:41:42+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T23:41:42+00:00",
     "last_update_at": "2026-11-26T23:41:42+00:00",
     "what_is_not_verified": "מספר הטילים המדויק ופרטי היירוטים מבוססים על הצהרת נשיא ארה\"ב בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21944448",
       "published_at": "2026-11-26T23:41:42+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "{'string': 'הטענה האיראנית כי תקיפת הכטב\"ם בכווית בוצעה במסגרת פעילות \\'דגל כוזב\\' על ידי ישראל וארה\"ב אינה מאומתת.'}",
    "{'string': 'הדיווחים על התקדמות איראנית ממשית בתחום הנשק הכימי אינם מאומתים במלואם.'}",
    "{'string': 'טענת משמרות המהפכה על אילוצם של מטוסי קרב אמריקאיים לסגת באמצעות ירי אזהרה.'}"
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
      "שמירה על מוכנות צבאית גבוהה להגן על גבולות המדינה",
      "הכחשה גורפת של מעורבות בתקיפות בכווית ונכונות לחקירה משותפת",
      "התנגדות לנוכחות צבא זרה באזור המפרץ"
     ],
     "inferred": [
      "ניסיון להתמודד עם משבר כלכלי חריף, צניחת מטבע ומחסור חמור במזון ובאנרגיה",
      "הסתמכות על שלוחות ולוחמה אסימטרית להרחקת האיום",
      "המשך פיתוח התשתיות הגרעיניות בחשאי"
     ],
     "forecast": [
      "המשך המצוקה הכלכלית עקב הסנקציות והמצור הימי",
      "הגברת החשש מעימות צבאי ישיר שיפגע בתשתיות קריטיות",
      "העמקת הקשרים עם שותפות עוקפות סנקציות כמו רוסיה"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני בידי איראן בכל מחיר",
      "הגנה על ישראל ועל בעלות הברית במזרח התיכון",
      "מתן אפשרות אחרונה להסכם מדיני לצד חיזוק הנוכחות הצבאית באזור"
     ],
     "inferred": [
      "הפעלת לחץ מקסימלי הכולל מצור ימי וכלכלי להחלשת המשטר בטהראן",
      "הכנה מבצעית לתקיפת יעדים אסטרטגיים ואתרים גרעיניים במקרה של כישלון הדיפלומטיה"
     ],
     "forecast": [
      "תגבור נוסף של כוחות צבא ונושאות מטוסים באזור",
      "המשך תקיפות הגנתיות לבלימת איומים מצד איראן ושלוחותיה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הערכות מבצעית רב-חזיתית מול איומים מאיראן ומלבנון",
      "מניעת התבססות איומים קיומיים, לרבות במישור הכימי והגרעיני"
     ],
     "inferred": [
      "ויכוח פנימי בין דרגים ביטחוניים שונים על הצורך בפעולה עצמאית ללא תיאום מלא עם ארה\"ב",
      "הכנה לאפשרות של הסלמה כוללת הכוללת פגיעה בתשתיות איראניות"
     ],
     "forecast": [
      "המשך פעילות מנע מול שלוחות איראן (כדוגמת חיזבאללה)",
      "היערכות לתגובה אפשרית במקרה של פריצת עימות ישיר בין איראן לארה\"ב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news-analysis/2026/11/27/can-the-mecca-pact-turn-its-collective-defence-promise-into-real-support?traffic_source=rss",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/erdogan-completes-turkeys-ratification-mecca-defence-pact",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c39w9y5dx4k5o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611267797",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86333676/Iran-ready-for-joint-probe-into-Kuwait-attack-Araghchi",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21944448",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/several-countries-slam-suspected-iranian-attack-kuwait",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134289",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383963336",
     "accessed_at": "2026-11-27T08:59:23+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T19:47:32+00:00",
  "changes": {
   "IRAN-11270859-01": {
    "kind": "new"
   },
   "IRAN-11270859-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפת כטב\"מים בכוויית והריגת שני טכנאים",
    "score": 1.0
   },
   "IRAN-11270859-03": {
    "kind": "new"
   },
   "IRAN-11270859-04": {
    "kind": "new"
   },
   "IRAN-11270859-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-27T1937__ukraine-202611271937.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-27T19:37:41+00:00",
   "window": {
    "from": "2026-11-26T19:37:41+00:00",
    "to": "2026-11-27T19:37:41+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611271937"
   },
   "summary": "הלחימה באוקראינה נמשכת לאורך החזיתות השונות תוך כדי חילופי תקיפות אוויריות ופגיעות בתשתיות ובמאגרי דלק, במקביל למגעים דיפלומטיים ומאמצים בינלאומיים לגיוס סיוע כלכלי וצבאי רחב לקייב לקראת שנת 2027. צדדים שונים באירופה דנים במימון נוסף ובבניית בריתות תעשייתיות צבאיות, בעוד שמועלים קשיים בירוקרטיים ולוגיסטיים בהקמת מתקני ייצור.",
   "fronts": [
    {
     "name": "חזית המזרח והצפון-מזרח (חארקוב ודונבאס)",
     "status": "פעיל עם תקיפות והתנגשויות קרקעיות"
    },
    {
     "name": "החזית הדרומית ומחוז זפוריז'יה",
     "status": "פעיל עם פעולות פינוי ותקיפות נגד תשתיות צבאיות"
    },
    {
     "name": "העורק הרוסי (עומק רוסיה ומחוזות סמוכים)",
     "status": "תחת מתקפות כטב\"מים וטילים אוקראיניים ארוכי טווח"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11271937-01",
     "title": "תקיפה אוקראינית במתקן דלק ברוסיה",
     "summary": "הצבא האוקראיני דיווח על פגיעה במתקן לייצור דלק טילי ומחסן דלק ברוסיה.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T18:36:27+00:00",
     "last_update_at": "2026-11-27T18:36:27+00:00",
     "what_is_not_verified": "היקף הנזק המדויק אינו מאומת ממקור עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ukraine-hits-missile-fuel-production-facility-in-russias-tula-oblast-military-says/",
       "published_at": "2026-11-27T18:36:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11271937-02",
     "title": "פגיעה במערכת הגנה אווירית ומחסנים בשטחים כבושים",
     "summary": "כוחות ההגנה של אוקראינה תקפו מערכת טילים מדגם בוק-אם-3 ועמדות פיקוד ומחסנים בשטחים כבושים.",
     "axis": "חזית הלחימה הקרקעית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T18:22:00+00:00",
     "last_update_at": "2026-11-27T18:22:00+00:00",
     "what_is_not_verified": "טענות ההצלחה והתוצאות בשטח מבוססות על דיווח צבאי אוקראיני בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189398-ukrainian-forces-strike-russias-latest-bukm3-air-defense-system-in-occupied-territory.html",
       "published_at": "2026-11-27T18:22:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11271937-03",
     "title": "חילופי אזרחים בין רוסיה לאוקראינה",
     "summary": "התקיימו חילופי אזרחים שבהם הוחזרו אזרחים לאוקראינה ולרוסיה דרך מעבר גבול בבלארוס.",
     "axis": "הומניטרי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T12:50:12+00:00",
     "last_update_at": "2026-11-27T12:50:12+00:00",
     "what_is_not_verified": "זהות כלל המעורבים ופרטים מלאים על המשתתפים לא צוינו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_belta",
       "url": "https://t.me/alexmehacarmel/49960",
       "published_at": "2026-11-27T12:50:12+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז גומל, בלארוס",
       "lat": 52.4029,
       "lon": 30.9648
      }
     ]
    },
    {
     "id": "UKRAINE-11271937-04",
     "title": "פינוי אזרחית ובעלי חיים מבלאבינה",
     "summary": "כוחות משטרה ומתנדבים פינו תושבת ומספר בעלי חיים ממשלול לחימה באזור זפוריז'יה.",
     "axis": "הומניטרי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T18:18:00+00:00",
     "last_update_at": "2026-11-27T18:18:00+00:00",
     "what_is_not_verified": "לא צוינו פרטים מלאים על מצבם הבריאותי המדויק של כל בעלי החיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_30fb99eed1265b70",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/27/8065039/",
       "published_at": "2026-11-27T18:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בלאבינה, אוקראינה",
       "lat": 47.7433,
       "lon": 35.2191
      },
      {
       "name": "מחוז זפוריז'יה, אוקראינה",
       "lat": 46.4609,
       "lon": 34.8643
      }
     ]
    },
    {
     "id": "UKRAINE-11271937-05",
     "title": "מתקפה רוסית על פיסוצ'ין במחוז חרקוב",
     "summary": "מתקפה פגעה באזור פיסוצ'ין וגרמה לפצועים רבים, בהם ילדים.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T17:16:00+00:00",
     "last_update_at": "2026-11-27T17:45:00+00:00",
     "what_is_not_verified": "סוג הנשק המדויק ששימש בתקיפה לא צוין באופן רשמי מוחלט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189394-russian-attack-on-pisochyn-in-kharkiv-region-leaves-eight-injured-including-three-children.html",
       "published_at": "2026-11-27T17:45:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/27/8065024/",
       "published_at": "2026-11-27T17:16:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פיסוצ'ין, אוקראינה",
       "lat": 49.9548,
       "lon": 36.1039
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על השעיה מוחלטת או זמנית של שיתוף פעולה צבאי ואספקת טילים מצד צפון קוריאה לרוסיה מבוססות על מקורות מודיעין אוקראיניים בלבד ללא אישור רשמי מצד מוסקבה או פיונגיאנג.",
    "ההצהרות בדבר תיאום מראש או היעדר תיאום סביב תקיפת כלי שיט בנמל בן גאזי בלִיביה נתונות במחלוקת בין אוקראינה לאיטליה.",
    "הטענות על עצירת פרויקט הקמת מפעל התחמושת של ריינמטאל באוקראינה בשל חסמים בירוקרטיים טרם זכו לאישור סופי רשמי של החברה."
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
     "value": 1.0957,
     "unit": "USD",
     "change_pct": -0.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "שמירה על אחדות אירופית וקבלת סיוע מאקרו-פיננסי וצבאי נרחב לשנת 2027",
      "הרחבת הבריתות התעשייתיות בתחום הרחפנים והכלים הבלתי מאוישים"
     ],
     "inferred": [
      "שימור יכולת התקיפה בעומק שטח רוסיה למרות מגבלות טכנולוגיות",
      "גיוס משאבים בינלאומיים להתמודדות עם החורף הקרב ומערכות האנרגיה הפגועות"
     ],
     "forecast": [
      "הגשת בקשות נוספות להרחבת שיתופי פעולה ביטחוניים באירופה",
      "המשך מאמצים לסיכול התקדמות רוסית בחזית ופגיעה בלוגיסטיקה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "יצירת מסדרון ביטחוני בין שטחה לבין נאט\"ו",
      "הגדלת תקציב הביטחון והתאמת המאמץ המלחמתי"
     ],
     "inferred": [
      "המשך לחץ צבאי ופגיעה בתשתיות קריטיות באוקראינה להשגת הכרעה או שחיקה",
      "מניעת הפצת מידע וצילומים על נזקי תקיפות בשטחה באמצעות החמרת צעדים משפטיים"
     ],
     "forecast": [
      "הגברת התקיפות האוויריות המסיביות בתקופת החורף",
      "המשך מאמצים דיפלומטיים לשימור בריתות אזוריות חלופיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-ukraine-hits-missile-fuel-production-facility-in-russias-tula-oblast-military-says/",
     "accessed_at": "2026-11-27T19:37:41+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/27/8065024/",
     "accessed_at": "2026-11-27T19:37:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49960",
     "accessed_at": "2026-11-27T19:37:41+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4189394-russian-attack-on-pisochyn-in-kharkiv-region-leaves-eight-injured-including-three-children.html",
     "accessed_at": "2026-11-27T19:37:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-27T00:40:36+00:00",
  "changes": {
   "UKRAINE-11271937-01": {
    "kind": "new"
   },
   "UKRAINE-11271937-02": {
    "kind": "new"
   },
   "UKRAINE-11271937-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מגעים לקראת חילופי שבויים נוספים בין אוקראינה לרוסיה",
    "score": 0.65
   },
   "UKRAINE-11271937-04": {
    "kind": "new"
   },
   "UKRAINE-11271937-05": {
    "kind": "possible",
    "prev": "התקפה רוסית על העיר זפוריז'יה גרמה לנפגעים",
    "score": 0.467
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-27T0915__north-202611270915.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-27T09:15:40+00:00",
   "window": {
    "from": "2026-11-26T09:15:40+00:00",
    "to": "2026-11-27T09:15:40+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202611270915"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהמשך חילופי מהלכים צבאיים ממוקדים בין צה\"ל לחזבאללה, הכוללים פגיעה במשגרי רקטות בעין א-תינה ותקיפות בדרום לבנון לצד טיסות איסוף מעל ביירות. במקביל, מאמצי תיווך מערביים לעיצוב הסדר חדש מול חזבאללה ויוניפי\"ל נתקלים בסירוב של ארגון הטרור. בסוריה, הממשל החדש פועל לשיקום מעברי הגבול ולשילוב מיליציות זרות בצבא הסדיר, תהליך שמלווה בחיכוך פנימי ובחזרת פליטים מטורקיה.",
   "fronts": [
    {
     "name": "דרום לבנון ובקעת הלבנון (ישראל מול חזבאללה)",
     "status": "תקיפות אוויריות של צה\"ל להסרת איומי שיגור והריסת מתחמים, לצד כוננות של חזבאללה."
    },
    {
     "name": "ביירות והדאחייה",
     "status": "פעילות מתמשכת של כלי טיס ישראליים בלתי מאוישים לאיסוף מודיעין."
    },
    {
     "name": "צפון סוריה ומעברי הגבול עם טורקיה",
     "status": "תנועת שיבה של אזרחים סורים ועבודות תשתית לשיקום ושדרוג המעברים."
    },
    {
     "name": "הזירה הפנים-סורית",
     "status": "מאמצי מיסוד הצבא החדש מול התנגדות מיליציות מוסלמיות זרות."
    }
   ],
   "events": [
    {
     "id": "NORTH-11270915-01",
     "title": "תקיפת צה\"ל נגד משגרי רקטות של חזבאללה בעין א-תינה",
     "summary": "חיל האוויר של צה\"ל תקף עשרות קני שיגור ורקטות במחנה אימונים של יחידת רדואן באזור עין א-תינה, כאשר בצה\"ל צוין כי הפעולה נועדה להסיר איום של ירי.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T19:18:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T19:18:38+00:00",
     "last_update_at": "2026-11-27T07:53:01+00:00",
     "what_is_not_verified": "האם התקיפה בוצעה בעומק הבקאע או באזור דרום לבנון לפי הגדרות גאוגרפיות שונות המופיעות בדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134316",
       "published_at": "2026-11-27T07:53:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134312",
       "published_at": "2026-11-27T07:43:01+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963336",
       "published_at": "2026-11-26T19:37:05+00:00"
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
      }
     ],
     "places": [
      {
       "name": "עין א-תינה, לבנון",
       "lat": 33.5021,
       "lon": 35.6423
      }
     ]
    },
    {
     "id": "NORTH-11270915-02",
     "title": "תקיפות אוויריות ישראליות ופעילות הריסה בדרום לבנון",
     "summary": "כתב אל-מנאר דיווח על תקיפות מהאוויר של צה\"ל בכפר תבנית ובפאתי זוטר א-שרקיה, וכן על פעולת הריסה ישראלית בכפר אל-קנטרה.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T07:29:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:29:58+00:00",
     "last_update_at": "2026-11-27T08:10:10+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר לדיווחי כתב אל-מנאר מהשטח לגבי מידת הנזק ואופי פעולת ההריסה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_bb3b9b376ce930ce",
       "url": "https://english.almanar.com.lb/article/155732/",
       "published_at": "2026-11-27T08:10:10+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_4c44584365ad3bc7",
       "url": "https://english.almanar.com.lb/article/155717/",
       "published_at": "2026-11-27T08:02:39+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bb3b9b376ce930ce",
       "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
       "published_at": "2026-11-27T07:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-11270915-03",
     "title": "פעילות כלי טיס בלתי מאוישים מעל הדאחייה בביירות",
     "summary": "כתב אל-מנאר דיווח על פעילות של כלי טיס ישראליים בלתי מאוישים מעל הפרברים הדרומיים של ביירות.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T08:46:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-27T08:46:34+00:00",
     "last_update_at": "2026-11-27T08:46:34+00:00",
     "what_is_not_verified": "היקף הטיסות ומטרתן המדויקת אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_2cfc3179bebf85b4",
       "url": "https://english.almanar.com.lb/article/155757/",
       "published_at": "2026-11-27T08:46:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-04",
     "title": "חשיפת מוצב מבוצר של חזבאללה שנבנה בשטח ישראל במרגלות החרמון",
     "summary": "צוות ynet ביקר במתחם שהקים חזבאללה כמתחם אוהלים לפני אוקטובר 2023 במרגלות החרמון, ודיווח כי המקום הוסווה כארעי אך בפועל כלל מוצב קבע מבוצר שהופצץ בתחילת המלחמה.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T09:00:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T09:00:55+00:00",
     "last_update_at": "2026-11-27T09:00:55+00:00",
     "what_is_not_verified": "פרטי המבנה המבצעי המלאים לפני השמדתו מהאוויר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_7a395e74409be5b0",
       "url": "https://www.ynet.co.il/news/article/bjpj7w4j7l",
       "published_at": "2026-11-27T09:00:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-05",
     "title": "מגעים דיפלומטיים סביב יוניפי\"ל ונוסח הסכם מסגרת בלבנון",
     "summary": "לפי עיתון לבנוני, ממשל ארצות הברית מקדם השארת פונקציות מסוימות של יוניפי\"ל כמו פינוי מוקשים, בעוד צרפת מנסה לגבש החלטת או\"ם המשלבת את החלטה 1701 והסכם המסגרת, מהלך שנדחה בידי חזבאללה.",
     "axis": "דיפלומטיה סביב לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T06:15:15+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-27T06:15:15+00:00",
     "last_update_at": "2026-11-27T06:15:15+00:00",
     "what_is_not_verified": "הדיווח נסמך כולו על מקור עיתונאי יחיד באל-אח'באר ללא אישור רשמי של צרפת או ארצות הברית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21944795",
       "published_at": "2026-11-27T06:15:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-06",
     "title": "התנגדות ופילוג בקרב מיליציות זרות לשילוב בצבא סוריה",
     "summary": "התארגנות של לוחמים אוזבקים בסוריה האשימה את שירותי המודיעין של ממשלת המעבר ברדיפה ובמעצרים, על רקע סירוב של חלק מהפלגים להשתלב בצבא הסורי ולהתקרב למערב.",
     "axis": "הזירה הפנים-סורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T19:37:16+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T19:37:16+00:00",
     "last_update_at": "2026-11-26T19:37:16+00:00",
     "what_is_not_verified": "מספר הלוחמים הזרים המדויק ומספר הנעדרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49947",
       "published_at": "2026-11-26T19:37:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-07",
     "title": "שיקום ושדרוג מעברי גבול בינלאומיים ברחבי סוריה",
     "summary": "רשות המעברים והמכס בסוריה מקדמת פרויקטי שיקום והרחבה במעברי הגבול היבשתיים עם שכנותיה, בהם מעבר אל-ערידה מול לבנון ומעברים בגבולות טורקיה, ירדן ועיראק.",
     "axis": "סוריה ומעברי הגבול",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T15:00:08+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T15:00:08+00:00",
     "last_update_at": "2026-11-26T15:00:08+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים להשלמת העבודות ופתיחת המעברים מחדש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/what-are-syrias-priorities-for-upgrading-border-crossings/",
       "published_at": "2026-11-26T15:00:08+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-הווא, סוריה",
       "lat": 36.2285,
       "lon": 36.7107
      }
     ]
    },
    {
     "id": "NORTH-11270915-08",
     "title": "המשך שיבת אזרחים סורים מטורקיה דרך מעבר קיליס",
     "summary": "תנועת חזרה מרצון של סורים מטורקיה למולדתם נמשכת דרך מעבר הגבול בקיליס בעקבות נפילת משטר אסד בדצמבר 2024.",
     "axis": "טורקיה-סוריה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T08:52:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T08:52:00+00:00",
     "last_update_at": "2026-11-26T09:15:40+00:00",
     "what_is_not_verified": "מספר החוזרים המדויק בתקופה הנוכחית.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/more-syrians-return-home-from-turkiye-through-kilis-border/news",
       "published_at": "2026-11-26T08:52:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות מומחה טורקי כי ישראל סייעה לכוחות אוקראיניים לפגוע בספינות בלוב כדי לשבש את יוזמת המולדת הכחולה הימית.",
    "הערכות לגבי כוונת חזבאללה האם יצטרף לעימות רחב בין ארה\"ב וישראל לבין איראן.",
    "טענות העיתון אל-אח'באר על פרטי ההצעה הצרפתית ושימור פונקציות יוניפי\"ל על ידי הממשל האמריקני.",
    "היקף הלוחמים הזרים המדויק בסוריה וטענות על מעצרים ורדיפות של פעילי מיליציה אוזבקים בידי המודיעין הסורי."
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
      "מניעת פגיעה באזרחי המדינה ובכוחות צה\"ל והסרת איומים מיידיים.",
      "שמירה על מחויבות להסכם הפסקת האש תוך סיכול התחמשות ושיגור."
     ],
     "inferred": [
      "הרתעת חזבאללה מהתערבות במערכה אזורית רחבה יותר נגד איראן באמצעות שלילת יכולות רקטיות.",
      "ביסוס עליונות מודיעינית ואווירית בשמי לבנון כולל אזור ביירות."
     ],
     "forecast": [
      "המשך סיכול ממוקד של משגרים ואמצעי לחימה של כוח רדואן בכל מרחב שבו יאותרו איומים מיידיים."
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "דחיית הצעות לשינוי הסדרי הביטחון הבינלאומיים והתנגדות להסכם המסגרת מול ישראל."
     ],
     "inferred": [
      "שימור יכולות שיגור ומוכנות מבצעית להפעלה במקרה של התלקחות אזורית.",
      "הסוואת תשתיות צבאיות תחת מעטה אזרחי או ארעי."
     ],
     "forecast": [
      "הימנעות מתגובה רחבה בעת הזו לצד ניסיונות התעצמות מחדש במוקדים מרוחקים יותר מקו הגבול."
     ]
    },
    {
     "actor": "הממשל החדש בסוריה",
     "declared": [
      "שיקום מעברי הגבול הבינלאומיים לחיזוק הריבונות והכלכלה המקומית."
     ],
     "inferred": [
      "מיסוד הכוחות הצבאיים תחת פיקוד מרכזי ודחיקת פלגים חמושים קיצוניים שמסרבים לסור למרותו.",
      "חיזוק קשרים מסחריים והסדרת גבולות מול מדינות שכנות כטורקיה ולבנון."
     ],
     "forecast": [
      "התגברות החיכוך הפנימי מול מיליציות זרות המסרבות להתפרק או להצטרף לצבא הרשמי."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/155757/",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/more-syrians-return-home-from-turkiye-through-kilis-border/news",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/what-are-syrias-priorities-for-upgrading-border-crossings/",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21944795",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134312",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49947",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25702",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95145",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383963336",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjpj7w4j7l",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T20:03:59+00:00",
  "changes": {
   "NORTH-11270915-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפת מחנה אימונים ואמצעי לחימה של חיזבאללה בדרום לבנון ובבקעת הלבנון",
    "score": 1.0
   },
   "NORTH-11270915-02": {
    "kind": "new"
   },
   "NORTH-11270915-03": {
    "kind": "new"
   },
   "NORTH-11270915-04": {
    "kind": "new"
   },
   "NORTH-11270915-05": {
    "kind": "new"
   },
   "NORTH-11270915-06": {
    "kind": "new"
   },
   "NORTH-11270915-07": {
    "kind": "new"
   },
   "NORTH-11270915-08": {
    "kind": "new"
   }
  }
 }
};
