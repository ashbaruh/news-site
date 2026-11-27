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
  "draft": "drafts/ukraine/2026-11-27T0040__ukraine-202611270040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-27T00:40:36+00:00",
   "window": {
    "from": "2026-11-26T00:40:36+00:00",
    "to": "2026-11-27T00:40:36+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611270040"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהמשך חילופי מהלומות אוויריות, כאשר כוחות רוסיים תוקפים תשתיות ומטרות במחוזות דניפרופטרובסק וזפוריז'יה ונערכים למתקפה נרחבת, בעוד אוקראינה פוגעת במתקני דלק ובסיסים בעומק רוסיה. במקביל נרשמת מחלוקת באיחוד האירופי המעכבת אישור חבילת סיוע כספית משמעותית לקייב, לצד שיח מדיני מתגבר בוושינגטון לגבי תנאי פשרה עתידיים והפסקת אש סביב מתקנים רגישים.",
   "fronts": [
    {
     "name": "מחוז דניפרופטרובסק (קריבי ריה וניקופול)",
     "status": "מתקפות כטב\"מים רוסיות מסיביות נגד תשתיות חשמל, מים ומבנים אזרחיים"
    },
    {
     "name": "מחוז זפוריז'יה (והתחנה הגרעינית)",
     "status": "תקיפות צבאיות לצד מגעים בינלאומיים של סבא\"א להפסקת אש מקומית סביב התחנה"
    },
    {
     "name": "חזית דונבאס (דונצק ודרוז'קיבקה)",
     "status": "תקיפות הדדיות, פגיעות ברחפנים ושיבוש פינוי אזרחים עקב החמרה במצב הביטחוני"
    },
    {
     "name": "עומק רוסיה (מחוז וולגוגרד)",
     "status": "פגיעות אוקראיניות במתקני נפט ובשדה תעופה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11270040-01",
     "title": "פסגת האיחוד האירופי לא אישרה חבילת סיוע בסך 45 מיליארד אירו לאוקראינה",
     "summary": "פסגת מנהיגי האיחוד האירופי לא הצליחה לאשר הלוואה כספית בסך 45 מיליארד אירו לשנת 2027 בשל עמדתן של הונגריה, צ'כיה וסלובקיה, וההחלטה נדחתה לחודש דצמבר.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T17:51:17+00:00",
     "last_update_at": "2026-11-27T00:29:55+00:00",
     "what_is_not_verified": "טרם אושר סופית מתווה הפשרה ופיצול מרכיבי ההלוואה בין רכיב צבאי לתקציבי לקראת חודש דצמבר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2225609",
       "published_at": "2026-11-27T00:29:55+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/26/8064867/",
       "published_at": "2026-11-26T18:44:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/26/eu-leaders-braced-for-clashes-over-ukraine-aid-at-budget-talks",
       "published_at": "2026-11-26T17:51:17+00:00"
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
     "id": "UKRAINE-11270040-02",
     "title": "מגעים לקראת חילופי שבויים נוספים בין אוקראינה לרוסיה",
     "summary": "אוקראינה נערכת לביצוע עסקת חילופי שבויי מלחמה נוספת, כך על פי הודעת הנשיא זלנסקי.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T21:25:00+00:00",
     "last_update_at": "2026-11-26T21:25:00+00:00",
     "what_is_not_verified": "לא פורטו מועד העסקה ומספר השבויים הצפויים להשתחרר משני הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189070-zelensky-announces-preparations-for-next-prisoner-exchange.html",
       "published_at": "2026-11-26T21:25:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11270040-03",
     "title": "התרעה אוקראינית מפני מתקפה רוסית נרחבת על תשתיות האנרגיה",
     "summary": "הנשיא זלנסקי הזהיר כי רוסיה נערכת למתקפה אווירית רחבת היקף נוספת על תשתיות המדינה בימים הקרובים, וקרא לתושבים להישמע לאזעקות.",
     "axis": "עורף אוקראינה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T19:02:25+00:00",
     "last_update_at": "2026-11-26T20:39:45+00:00",
     "what_is_not_verified": "היקף המתקפה המדויק ועיתויה הספציפי אינם מאומתים מעבר להתרעות המודיעין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49948",
       "published_at": "2026-11-26T20:39:45+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189052-zelensky-warns-russia-is-preparing-new-largescale-attack.html",
       "published_at": "2026-11-26T20:02:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-north-korea-halts-military-aid-to-russia-ukrainian-intelligence-says/",
       "published_at": "2026-11-26T19:02:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11270040-04",
     "title": "תקיפות כטב\"מים רוסיים במחוז דניפרופטרובסק",
     "summary": "כוחות רוסיים ביצעו מעל 50 תקיפות באמצעות כטב\"מים בשני מחוזות משנה, אשר גרמו לפגיעה בתשתיות אזרחיות, מבני תעשייה, רשתות מים וחשמל.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T17:06:00+00:00",
     "last_update_at": "2026-11-26T17:06:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/26/8064855/",
       "published_at": "2026-11-26T17:06:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קריבי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "ניקופול, אוקראינה",
       "lat": 47.5692,
       "lon": 34.3917
      }
     ]
    },
    {
     "id": "UKRAINE-11270040-05",
     "title": "התקפה רוסית על העיר זפוריז'יה גרמה לנפגעים",
     "summary": "אדם אחד נהרג וארבעה נוספים נפצעו כתוצאה ממתקפה שביצעו כוחות רוסיים על העיר זפוריז'יה.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T17:59:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T17:59:00+00:00",
     "last_update_at": "2026-11-26T17:59:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189009-russian-attack-on-zaporizhzhia-kills-one-injures-four.html",
       "published_at": "2026-11-26T17:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-11270040-06",
     "title": "תקיפות כטב\"מים אוקראיניים על שטחי דונצק שבשליטת רוסיה",
     "summary": "רוסיה דיווחה כי ארבעה בני אדם נהרגו ושישה נפצעו כתוצאה ממתקפות רחפנים אוקראיניות, אשר גרמו נזק למבני מגורים ותשתיות.",
     "axis": "חזית דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T23:56:33+00:00",
     "last_update_at": "2026-11-26T23:56:33+00:00",
     "what_is_not_verified": "אין אימות עצמאי של גורמי צד שלישי להיקף הנפגעים והנזק שדווחו במחוז.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2225599",
       "published_at": "2026-11-26T23:56:33+00:00"
      }
     ],
     "places": [
      {
       "name": "דונצק, אוקראינה",
       "lat": 48.0159,
       "lon": 37.8013
      }
     ]
    },
    {
     "id": "UKRAINE-11270040-07",
     "title": "הסוכנות הבינלאומית לאנרגיה אטומית במגעים להפסקת אש סביב תחנת הכוח זפוריז'יה",
     "summary": "מנכ\"ל סבא\"א רפאל גרוסי מנהל מגעים מול רוסיה ואוקראינה בניסיון להשיג הפסקת אש באזור התחנה כדי לאפשר תיקון קווי חשמל חיוניים.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T22:19:35+00:00",
     "last_update_at": "2026-11-26T22:19:35+00:00",
     "what_is_not_verified": "לא נקבע אם הצדדים יסכימו להפוגה מקומית לביצוע התיקונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2225589",
       "published_at": "2026-11-26T22:19:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אנרהודר, אוקראינה",
       "lat": 47.4901,
       "lon": 34.6603
      }
     ]
    },
    {
     "id": "UKRAINE-11270040-08",
     "title": "יירוט מבצעי ראשון של כטב\"ם סילוני באמצעות מערכת לייזר אוקראינית",
     "summary": "גורמים אוקראיניים רשמיים דיווחו כי מערכת ההגנה בלייזר 'בליסק' יירטה בהצלחה כטב\"ם סילוני רוסי מסוג גראן בניסוי מבצעי.",
     "axis": "טכנולוגיה והגנה אווירית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T08:29:53+00:00",
     "last_update_at": "2026-11-26T08:29:53+00:00",
     "what_is_not_verified": "היירוט מבוסס על הצהרות גורמים רשמיים מקומיים ללא אימות טכני עצמאי בלתי תלוי.",
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
     "id": "UKRAINE-11270040-09",
     "title": "תקיפות אוקראיניות על מתקני נפט ושדה תעופה במחוז וולגוגרד ברוסיה",
     "summary": "המטה הכללי של אוקראינה אישר כי כוחותיו תקפו שני מתקני נפט ושדה תעופה במחוז וולגוגרד שבשטח הפדרציה הרוסית.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T19:02:25+00:00",
     "last_update_at": "2026-11-26T19:02:25+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת שנגרמה במתקנים אינה מפורטת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-north-korea-halts-military-aid-to-russia-ukrainian-intelligence-says/",
       "published_at": "2026-11-26T19:02:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11270040-10",
     "title": "מגעים דיפלומטיים והצהרות סביב תנאי סיום הלחימה וערבויות ביטחון",
     "summary": "הנשיא טראמפ דיווח על שיחותיו עם פוטין ופגישתו עם מזכ\"ל נאט\"ו לסיום המלחמה, בעוד במוסקבה מתנגדים למתן ערבויות ביטחוניות לאוקראינה במודל סעיף 5 של נאט\"ו.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T14:19:52+00:00",
     "last_update_at": "2026-11-27T00:23:28+00:00",
     "what_is_not_verified": "פרטי הפשרות וההצעות שהועלו בשיחות סגורות לגבי חילופי שטחים או ערבויות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2225607",
       "published_at": "2026-11-27T00:23:28+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49941",
       "published_at": "2026-11-26T18:15:25+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/26/russia-opposes-granting-ukraine-security-guarantees-modeled-on-nato-s-article-5-rbc-ukraine-reports",
       "published_at": "2026-11-26T17:00:52+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/26/8064852/",
       "published_at": "2026-11-26T16:39:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/26/trump-envoy-jared-kushner-calls-putin-a-historic-figure-and-a-grandmaster-of-politics-praises-his-deep-understanding-of-the-issues",
       "published_at": "2026-11-26T14:19:52+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת המודיעין האוקראיני על הפסקת הסיוע הצבאי מצפון קוריאה לרוסיה",
    "הטענה לפיה ישראל סייעה לכוחות אוקראיניים בלוב לתקוף ספינות רוסיות באמצעי לוחמה אלקטרונית (אין כל ראיה)",
    "דיווחים על הסכמה חשאית רוסית לכאורה למתן ערבויות בסגנון סעיף 5 של נאט\"ו לאוקראינה",
    "מספר האבדות הרוסיות המוערך במחקר הגרדיאן המבוסס על תעודות פטירה שהושגו בפריצה",
    "אומדן הנזק וההוצאות העודפות של כלכלת רוסיה בסך 190 מיליארד דולר"
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
     "value": 1.0975,
     "unit": "USD",
     "change_pct": 0.37,
     "source_id": "src_ecb",
     "as_of": "2026-11-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת חבילות נשק וסיוע להגנה על תשתיות קריטיות מפני כטב\"מים",
      "הצטרפות מלאה לברית נאט\"ו כערובה ביטחונית ראשית",
      "השבת כל שבויי המלחמה והילדים שנלקחו"
     ],
     "inferred": [
      "פגיעה ממוקדת במתקני נפט ובסיסי אוויר בעומק רוסיה לפגיעה במאמץ המלחמתי",
      "בניית יכולות הגנה עצמאיות מבוססות טכנולוגיה מקומית כדוגמת לייזר ורחפנים"
     ],
     "forecast": [
      "המשך לחץ אינטנסיבי על מדינות המערב לקבלת מימון ומערכות יירוט טרם החורף"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "התנגדות מוחלטת לקבלת אוקראינה לנאט\"ו או להענקת ערבויות ביטחון דמויות סעיף 5",
      "רצון להביא להסדר המסיים את העימות לפי תנאיה"
     ],
     "inferred": [
      "שיבוש ופגיעה מערכתית בתשתיות האנרגיה של אוקראינה כדי להתיש את כושר עמידתה",
      "המשך תקיפות ממוקדות באזורי החזית לקיבוע שליטה בשטחים במזרח"
     ],
     "forecast": [
      "הוצאה לפועל של מתקפה משולבת נוספת על רשת האנרגיה האוקראינית בטווח הקצר"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/26/eu-leaders-braced-for-clashes-over-ukraine-aid-at-budget-talks",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-north-korea-halts-military-aid-to-russia-ukrainian-intelligence-says/",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/26/trump-envoy-jared-kushner-calls-putin-a-historic-figure-and-a-grandmaster-of-politics-praises-his-deep-understanding-of-the-issues",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/26/8064852/",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2225607",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134257",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49941",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4189009-russian-attack-on-zaporizhzhia-kills-one-injures-four.html",
     "accessed_at": "2026-11-27T00:40:36+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T08:50:17+00:00",
  "changes": {
   "UKRAINE-11270040-01": {
    "kind": "new"
   },
   "UKRAINE-11270040-02": {
    "kind": "new"
   },
   "UKRAINE-11270040-03": {
    "kind": "new"
   },
   "UKRAINE-11270040-04": {
    "kind": "new"
   },
   "UKRAINE-11270040-05": {
    "kind": "new"
   },
   "UKRAINE-11270040-06": {
    "kind": "new"
   },
   "UKRAINE-11270040-07": {
    "kind": "new"
   },
   "UKRAINE-11270040-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "יירוט כטב\"ם מונע סילון באמצעות לייזר אוקראיני",
    "score": 1.0
   },
   "UKRAINE-11270040-09": {
    "kind": "new"
   },
   "UKRAINE-11270040-10": {
    "kind": "new"
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
