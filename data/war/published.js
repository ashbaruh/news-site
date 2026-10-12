/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-12T2005__yemen-202610122005.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-12T20:05:07+00:00",
   "window": {
    "from": "2026-10-11T20:05:07+00:00",
    "to": "2026-10-12T20:05:07+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610122005"
   },
   "summary": "עימות צבאי עז מתנהל בין החות'ים לבין סעודיה והממשלה התימנית, כאשר החות'ים הגבירו את מתקפות הטילים והכטב\"מים לעבר יעדים אסטרטגיים בעומק הממלכה. השיגורים החוזרים ונשנים על שדה התעופה בריאד גרמו לאבדות בנפש והשביתו את התעופה האווירית בבירה, בעוד סעודיה מגיבה במבצע הפצצות נרחב בתימן. ברקע ההסלמה, גובר המתח הבינלאומי סביב התערבות צבאית זרה ואיומים מצד החות'ים לפגוע באינטרסים אמריקאיים.",
   "fronts": [
    {
     "name": "ציר תימן - סעודיה",
     "status": "הסלמה חריפה בירי טילים וכטב\"מים לעבר ריאד ותקיפות אוויריות סעודיות בתימן"
    },
    {
     "name": "חזית הפנים בתימן (הממשלה המוכרת נגד החות'ים)",
     "status": "לחימה פעילה, ירי ארטילרי באזורי מגורים וסיכולי פעולות במחוזות שונים"
    },
    {
     "name": "הזירה הימית בים האדום",
     "status": "שיבוש מתמשך של נתיבי הסחר והשפעה בינלאומית מצד החות'ים מאז 2023"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10122005-01",
     "title": "מתקפות טילים וכטב\"מים על שדה התעופה בריאד ובסיס ח'מיס מושיט",
     "summary": "החות'ים שיגרו טיל בליסטי לעבר נמל התעופה הבינלאומי המלך ח'אלד בריאד וכטב\"ם לעבר בסיס חיל האוויר בח'מיס מושיט בסעודיה. הקואליציה הודיעה על יירוט טיל בליסטי, בעוד דיווחים הצביעו על עשרות נפגעים ושיבוש טיסות נרחב.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T22:45:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T22:45:58+00:00",
     "last_update_at": "2026-10-12T19:29:28+00:00",
     "what_is_not_verified": "מידת הדיוק של הפגיעות והאם הטיל יורט במלואו כפי שטענה הקואליציה או שפגע ישירות כפי שטענו החות'ים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-hit-riyadh-airport-and-khamis-mushait-air-base",
       "published_at": "2026-10-12T19:29:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131809",
       "published_at": "2026-10-12T19:26:57+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthis-are-thriving-and-surviving-by-creating-war-yemen-ambassador-says",
       "published_at": "2026-10-12T19:08:05+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153875",
       "published_at": "2026-10-12T18:26:45+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/houthi-strikes-shatter-saudi-arabia-riyadh-aura-calm",
       "published_at": "2026-10-12T16:26:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131798",
       "published_at": "2026-10-12T16:25:24+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-arabia-extends-riyadh-aiport-suspension-vows-deadly-response-to-houthis-strikes",
       "published_at": "2026-10-12T16:21:57+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-mbs-shuttling-between-bunker-palaces-amid-houthi-attacks",
       "published_at": "2026-10-12T16:09:26+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/12/saudi-arabia-suspends-flights-latest-deadly-houthi-attack-airport",
       "published_at": "2026-10-12T15:42:37+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-arabia-faces-new-missile-and-drone-fire-after-major-attacks-airports",
       "published_at": "2026-10-12T13:46:31+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/oct/12/cctv-riyadh-airport-footage-deadly-airstrike-saudi-arabia-video",
       "published_at": "2026-10-12T09:11:20+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131755",
       "published_at": "2026-10-12T05:34:51+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T22:45:58+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ח'מיס מושיט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10122005-02",
     "title": "השבתת נמל התעופה בריאד וביטולי טיסות בינלאומיות",
     "summary": "רשויות סעודיה השביתו את נמל התעופה הבינלאומי המלך ח'אלד בריאד עד ה-17 באוקטובר בעקבות פגיעות הטילים והאיומים, וחברות תעופה זרות ביטלו טיסות למדינה.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T11:26:34+00:00",
     "last_update_at": "2026-10-12T16:25:24+00:00",
     "what_is_not_verified": "משך ההשבתה המדויק בחברות השונות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131798",
       "published_at": "2026-10-12T16:25:24+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/12/saudi-arabia-suspends-flights-latest-deadly-houthi-attack-airport",
       "published_at": "2026-10-12T15:42:37+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sjpzbdcoml",
       "published_at": "2026-10-12T13:58:22+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/which-airlines-have-cancelled-saudi-flights-amid-houthi-attacks",
       "published_at": "2026-10-12T11:26:34+00:00"
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
     "id": "YEMEN-10122005-03",
     "title": "תקיפות אוויריות נרחבות של סעודיה בתימן",
     "summary": "חיל האוויר הסעודי ביצע עשרות תקיפות אוויריות במחוזות שונים בתימן, בהם צנעא, תעז, סעדה, מארב, לחג', אל-בידא ואיב, שלטענת החות'ים פגעו במטרות אזרחיות.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T17:36:07+00:00",
     "last_update_at": "2026-10-12T17:36:07+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ופגיעה באזרחים בלבד כפי שטען דובר החות'ים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-airstrikes-yemen-killed-and-wounded-civilians-including-women-and",
       "published_at": "2026-10-12T17:36:07+00:00"
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
      },
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-10122005-04",
     "title": "הפגזה חות'ית על שכונות מגורים בתעז",
     "summary": "חמישה אזרחים, ביניהם שלושה ילדים, נפצעו כתוצאה מהפגזה שביצעו המיליציות החות'יות לעבר שכונות מגורים בעיר תעז.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T18:33:03+00:00",
     "last_update_at": "2026-10-12T18:33:03+00:00",
     "what_is_not_verified": "זהות הנפגעים המדויקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153877",
       "published_at": "2026-10-12T18:33:03+00:00"
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
     "id": "YEMEN-10122005-05",
     "title": "סיכול תוכניות חות'יות בעדן, לחג' ואבין",
     "summary": "מנגנוני הביטחון של הממשלה המוכרת בתימן סיכלו תוכניות של החות'ים במחוזות עדן, לחג' ואבין.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T17:34:01+00:00",
     "last_update_at": "2026-10-12T17:34:01+00:00",
     "what_is_not_verified": "אופי התוכניות שסוכלו והיקפן המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153870",
       "published_at": "2026-10-12T17:34:01+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-10122005-06",
     "title": "אזהרת בכיר חות'י מפני מעורבות אמריקאית ישירה",
     "summary": "בכיר בלשכה המדינית של החות'ים איים בתגובה מהירה וכואבת נגד ארצות הברית והאינטרסים שלה במקרה של התערבות בלחימה בתימן, והזהיר עובדים להתרחק ממתקני נפט ושדות תעופה בסעודיה.",
     "axis": "תימן - ארה\"ב / סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T14:30:22+00:00",
     "last_update_at": "2026-10-12T19:42:01+00:00",
     "what_is_not_verified": "האם סעודיה אכן פנתה רשמית לסיוע אמריקאי כפי שנטען בדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthi-official-warns-of-swift-painful-response-if-us-enters-yemen-war",
       "published_at": "2026-10-12T19:42:01+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-official-warns-swift-painful-response-if-us-enters",
       "published_at": "2026-10-12T14:42:39+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-official-warns-swift-painful-response-if-us-enters-yemen-war",
       "published_at": "2026-10-12T14:30:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10122005-07",
     "title": "דחיית סיוע ישראלי בסוגיית תימן על ידי סעודיה",
     "summary": "סעודיה דחתה הצעה ישראלית לסייע בלחימה בתימן חרף מאמצים מצד ראש ממשלת ישראל לקדם זאת בתיווך אמריקאי.",
     "axis": "ישראל - סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T17:59:20+00:00",
     "last_update_at": "2026-10-12T17:59:20+00:00",
     "what_is_not_verified": "אמיתות ההצעה הישראלית והשיחות החשאיות שצוטטו ממקור דיפלומטי עלום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-rejects-israeli-help-yemen-israeli-media-reports",
       "published_at": "2026-10-12T17:59:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10122005-08",
     "title": "הסכם ההגנה המשותף בין טורקיה, פקיסטן וסעודיה",
     "summary": "נשיא טורקיה הודיע כי יגיש לאישור הפרלמנט את הסכם ההגנה המשותף שנחתם עם פקיסטן וסעודיה, וגינה בחריפות את מתקפות החות'ים על סעודיה.",
     "axis": "סעודיה - תימן (בריתות בינלאומיות)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T12:46:37+00:00",
     "last_update_at": "2026-10-12T16:46:30+00:00",
     "what_is_not_verified": "היקף פריסת הכוחות ואופי המשימות הצבאיות בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/turkey-send-mecca-agreement-parliament-soon-erdogan-says",
       "published_at": "2026-10-12T16:46:30+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/can-turkey-and-pakistan-defend-saudi-arabia-houthis",
       "published_at": "2026-10-12T12:46:37+00:00"
      }
     ],
     "places": [
      {
       "name": "אנקרה, טורקיה",
       "lat": 39.9208,
       "lon": 32.854
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "מספר ההרוגים המדויק במתקפה בריאד בשבת (מקורות שונים ציינו 12, 13 או 18)",
    "דיווח על ירידת מלאי המיירטים של סעודיה והשפעתו על יכולת ההגנה",
    "טענת מקורות עיתונאיים בדבר תנועותיו של יורש העצר הסעודי בין מקלטים",
    "ההצעה הישראלית לסייע לסעודיה בלחימה בתימן",
    "בקשת סיוע רשמית של סעודיה מארצות הברית להתערבות ישירה"
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
     "value": 3.0695,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "תקיפת שדות תעופה ומתקני נפט בסעודיה בתגובה לתקיפותיה ולתמיכתה בממשלת תימן",
      "הרתעת ארצות הברית מהתערבות צבאית ישירה בתימן",
      "הרחקת חברות תעופה ועובדים ממתקנים סעודיים המוגדרים כיעדים לגיטימיים"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומורלי כבד על סעודיה באמצעות פגיעה בעורף ובנתיבי התעופה",
      "ביסוס מעמדם כגורם כוח אזורי שאינו ניתן להכנעה"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים אל עומק סעודיה והרחבת האיומים על יעדי תשתית נוספים",
      "הסלמת העימות במקרה של מעורבות צבאית זרה"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הנחתת תגובה חמורה ומשמעותית נגד מתקפות החות'ים",
      "יירוט איומים והגנה על המרחב האווירי והערים בממלכה"
     ],
     "inferred": [
      "בלימת הפגיעה בדימוי הביטחוני וביציבות הכלכלית והתיירותית של המדינה",
      "הסתמכות על בריתות אזוריות כמו הסכם מכה לצורך הגנה משותפת תוך הימנעות ממעורבות ישראלית גלויה"
     ],
     "forecast": [
      "הגברת תקיפות חיל האוויר נגד מטרות חות'יות בתימן במקביל לניסיונות ייצוב ההגנה האווירית",
      "האצת אשרור הסכמי הגנה עם שותפות כמו טורקיה ופקיסטן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/turkey-send-mecca-agreement-parliament-soon-erdogan-says",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/houthi-official-warns-of-swift-painful-response-if-us-enters-yemen-war",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/12/saudi-arabia-suspends-flights-latest-deadly-houthi-attack-airport",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-rejects-israeli-help-yemen-israeli-media-reports",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/can-turkey-and-pakistan-defend-saudi-arabia-houthis",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153870",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131798",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sjpzbdcoml",
     "accessed_at": "2026-10-12T20:05:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T23:44:41+00:00",
  "changes": {
   "YEMEN-10122005-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה קטלנית של טיל חות'י בנמל התעופה הבינלאומי המלך ח'אלד בריאד",
    "score": 0.817
   },
   "YEMEN-10122005-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפה חוזרת על נמל התעופה בריאד ופגיעה בטרמינל נוסעים",
    "score": 1.0
   },
   "YEMEN-10122005-03": {
    "kind": "possible",
    "prev": "דיווחים על תקיפות תגובה של הקואליציה בצנעא",
    "score": 0.633
   },
   "YEMEN-10122005-04": {
    "kind": "new"
   },
   "YEMEN-10122005-05": {
    "kind": "new"
   },
   "YEMEN-10122005-06": {
    "kind": "possible",
    "prev": "אזהרת החות'ים לחברות תעופה מפני שימוש במרחב האווירי הסעודי",
    "score": 0.467
   },
   "YEMEN-10122005-07": {
    "kind": "new"
   },
   "YEMEN-10122005-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-12T1958__iran-202610121958.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-12T19:58:47+00:00",
   "window": {
    "from": "2026-10-11T19:58:47+00:00",
    "to": "2026-10-12T19:58:47+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610121958"
   },
   "summary": "העימות בין איראן ושלוחותיה לבין ארצות הברית, בעלות בריתה וישראל מתרחב וכולל מתיחות ביטחונית ודיפלומטית סביב בסיסים בממלכה המאוחדת, פגיעות בשיט במצרי הורמוז והסלמה חריפה של החות'ים נגד יעדים בסעודיה. המערב מטיל סנקציות ומאשים ישירות את משמרות המהפכה בתכנון חבלות, בעוד טהראן דוחה את הטענות. במקביל, השלוחה החות'ית מאיימת על מעורבות אמריקנית ישירה וממשיכה לשבש את הביטחון האזורי במפרץ.",
   "fronts": [
    {
     "name": "הזירה הבריטית והבינלאומית מול איראן",
     "status": "מתיחות דיפלומטית חריפה בעקבות האשמות בטרור והטלת סנקציות"
    },
    {
     "name": "מצרי הורמוז והנתיבים הימיים",
     "status": "פגיעות בשיט מסחרי ושיבוש תנועת המכליות"
    },
    {
     "name": "חזית החות'ים מול סעודיה והמערב",
     "status": "הסלמה בתקיפות טילים וכטב\"מים ואיומים בתגובה מול ארה\"ב"
    }
   ],
   "events": [
    {
     "id": "IRAN-10121958-01",
     "title": "בריטניה מאשימה את משמרות המהפכה במזימה נגד בסיס פיירפורד",
     "summary": "גורמי ממשל בבריטניה טוענים כי משמרות המהפכה האיראניים הכווינו ככל הנראה תוכנית לפגוע בבסיס חיל האוויר המלכותי פיירפורד, המשמש מפציצים אמריקניים. במקביל הוטלו סנקציות על שני אזרחים איראנים ושגריר איראן זומן לשיחה.",
     "axis": "איראן - ארה\"ב/בריטניה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T15:46:28+00:00",
     "last_update_at": "2026-10-12T19:33:00+00:00",
     "what_is_not_verified": "מידת המעורבות הישירה של איראן במזימה אינה מאומתת ועומדת במוקד מחלוקת והכחשות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://en.irna.ir/news/86291010/Iran-condemns-UK-s-baseless-claims-over-Fairford-air-base-incident",
       "published_at": "2026-10-12T19:33:00+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.aljazeera.com/news/2026/10/12/uk-blames-iran-for-airbase-plot-sanctions-two-iranian-nationals?traffic_source=rss",
       "published_at": "2026-10-12T18:51:18+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/12/uk-pm-says-raf-base-incidents-likely-coordinated-by-iran?traffic_source=rss",
       "published_at": "2026-10-12T18:24:42+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://t.me/alexmehacarmel/48478",
       "published_at": "2026-10-12T17:35:37+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.al-monitor.com/originals/2026/10/british-airbase-plot-almost-certainly-directed-iran-guards-uk-pm",
       "published_at": "2026-10-12T17:30:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-ambassador-uk-denies-role-fairford-attack-plot-iranian-state-media",
       "published_at": "2026-10-12T16:49:55+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.iranintl.com/en/202610124072",
       "published_at": "2026-10-12T16:28:57+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21609761",
       "published_at": "2026-10-12T16:22:34+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.ynet.co.il/news/article/sy67lt5szl",
       "published_at": "2026-10-12T16:06:04+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.al-monitor.com/originals/2026/10/uk-pm-burnham-says-irans-irgc-likely-behind-raf-fairford-incident",
       "published_at": "2026-10-12T15:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס חיל האוויר פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      },
      {
       "name": "בסיס חיל האוויר מולסוורת', בריטניה",
       "lat": 52.3854,
       "lon": -0.4192
      }
     ]
    },
    {
     "id": "IRAN-10121958-02",
     "title": "איראן מכחישה מעורבות בתקרית בבסיס פיירפורד ומביעה נכונות לסייע בחקירה",
     "summary": "משרד החוץ האיראני ושגריר איראן בלונדון דחו בחריפות את ההאשמות הבריטיות, כינו אותן חסרות בסיס והביעו נכונות להשתתף בחקירת האירוע.",
     "axis": "איראן - בריטניה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T16:49:55+00:00",
     "last_update_at": "2026-10-12T19:33:00+00:00",
     "what_is_not_verified": "הנכונות האיראנית המעשית לשיתוף פעולה בחקירה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://en.irna.ir/news/86291010/Iran-condemns-UK-s-baseless-claims-over-Fairford-air-base-incident",
       "published_at": "2026-10-12T19:33:00+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.aljazeera.com/news/2026/10/12/uk-blames-iran-for-airbase-plot-sanctions-two-iranian-nationals?traffic_source=rss",
       "published_at": "2026-10-12T18:51:18+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://t.me/alexmehacarmel/48478",
       "published_at": "2026-10-12T17:35:37+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_be9299935316ad67",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-ambassador-uk-denies-role-fairford-attack-plot-iranian-state-media",
       "published_at": "2026-10-12T16:49:55+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "IRAN-10121958-03",
     "title": "פגיעה במכלית נפט במצרי הורמוז",
     "summary": "מכלית מוצרי נפט נפגעה מעצם לא מזוהה בעת ששטה במצרי הורמוז סמוך לחופי עומאן, והעלתה עשן שחור.",
     "axis": "מצרי הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T15:19:23+00:00",
     "last_update_at": "2026-10-12T18:48:56+00:00",
     "what_is_not_verified": "זהות הגורם ששיגר את הקליע או הכטב\"מ וסוג החימוש המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_ukmto",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tanker-hit-strait-hormuz-ukmto-says",
       "published_at": "2026-10-12T18:48:56+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_ukmto",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/12/oil-tanker-reportedly-attacked-in-strait-of-hormuz-region?traffic_source=rss",
       "published_at": "2026-10-12T15:19:23+00:00"
      }
     ],
     "places": [
      {
       "name": "מצרי הורמוז, עומאן",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-10121958-04",
     "title": "מתקפות טילים וכטב\"מים של החות'ים לעבר יעדים בסעודיה",
     "summary": "החות'ים בתימן שיגרו טילים בליסטיים וכטב\"מים שפגעו בנמל התעופה הבינלאומי בריאד ובבסיס חיל אוויר בח'מיס מושייט, אירועים שגרמו להרוגים ולפצועים רבים ולהשבתת נמל התעופה.",
     "axis": "החות'ים - סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T22:28:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T22:28:50+00:00",
     "last_update_at": "2026-10-12T19:29:28+00:00",
     "what_is_not_verified": "מספרי הנפגעים המדויקים משתנים בין המקורות השונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-hit-riyadh-airport-and-khamis-mushait-air-base",
       "published_at": "2026-10-12T19:29:28+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthis-are-thriving-and-surviving-by-creating-war-yemen-ambassador-says",
       "published_at": "2026-10-12T19:08:05+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/houthi-strikes-shatter-saudi-arabia-riyadh-aura-calm",
       "published_at": "2026-10-12T16:26:01+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-arabia-riyadh-airport-struck-again-by-yemen-s-houthis",
       "published_at": "2026-10-12T09:21:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/oct/12/cctv-riyadh-airport-footage-deadly-airstrike-saudi-arabia-video",
       "published_at": "2026-10-12T09:11:20+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261012-live-saudi-arabia-extends-suspension-of-operations-at-riyadh-airport-after-deadly-houthi-attacks",
       "published_at": "2026-10-12T08:41:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/commentisfree/2026/oct/12/gulf-new-era-instability-alliances-houthi-rebels-saudi-arabia",
       "published_at": "2026-10-12T06:00:49+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T22:45:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport",
       "published_at": "2026-10-11T22:28:50+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ח'מיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "IRAN-10121958-05",
     "title": "אזהרת החות'ים לארצות הברית מפני התערבות במערכה בתימן",
     "summary": "נציג מטעם החות'ים איים בתגובה מהירה וכואבת אם ארצות הברית תתערב ישירות בלחימה בתימן, על רקע בקשות סיוע שסעודיה הפנתה לוושינגטון.",
     "axis": "החות'ים - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T14:30:22+00:00",
     "last_update_at": "2026-10-12T14:30:22+00:00",
     "what_is_not_verified": "קיומה של בקשה רשמית מסעודיה לוושינגטון להתערבות צבאית ישירה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-official-warns-swift-painful-response-if-us-enters-yemen-war",
       "published_at": "2026-10-12T14:30:22+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "IRAN-10121958-06",
     "title": "דיווח על העברת מסרים ישראליים ללבנון בעניין הצטרפות חזבאללה למערכה מול איראן",
     "summary": "על פי פרסום בעיתון לבנוני, ישראל העבירה אזהרה ללבנון שלפיה אם חזבאללה יצטרף לעימות במקרה של מלחמה מול איראן, יוטל מצור מוחלט על המדינה ויחל מבצע צבאי נרחב.",
     "axis": "ישראל - חזבאללה/לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T06:48:43+00:00",
     "last_update_at": "2026-10-12T06:48:43+00:00",
     "what_is_not_verified": "עצם העברת המסר ואמינות הדיווח בעיתון הלבנוני אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94607",
       "published_at": "2026-10-12T06:48:43+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    }
   ],
   "not_verified": [
    "המעורבות הישירה של משמרות המהפכה במזימה בבסיסי האוויר בבריטניה",
    "זהות הגורם שפגע במכלית הנפט במצרי הורמוז וסוג החימוש ששימש לתקיפה",
    "דיווח העיתון הלבנוני בדבר אזהרות ומסרי איום מישראל ללבנון",
    "מספר הנפגעים המדויק בכל אחת מתקיפות החות'ים בנמל התעופה בריאד"
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
     "value": 3.0695,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הכחשת מעורבות בפעילות חבלנית בבריטניה והבעת נכונות להשתתף בחקירה",
      "הטלת אחריות על אויבי המדינה על פגיעה בסביבה ובתשתיות"
     ],
     "inferred": [
      "הפעלת לחץ עקיף על ארה\"ב ובעלות בריתה תוך הרחקת אחריות רשמית",
      "הרתעת כוחות זרים משימוש בבסיסים לתקיפת שטח איראן"
     ],
     "forecast": [
      "המשך הכחשת פעולות חשאיות במקביל להחרפת המשבר הדיפלומטי מול אירופה"
     ]
    },
    {
     "actor": "בריטניה, ארה\"ב ובעלות בריתן",
     "declared": [
      "חשיפת רשתות טרור איראניות, הטלת סנקציות ומניעת פעילות עוינת בשטחן",
      "אזהרת טהראן מפעולות עוינות והגנה על מתקנים צבאיים"
     ],
     "inferred": [
      "הצרת צעדיהם של משמרות המהפכה ובידוד דיפלומטי של טהראן",
      "הרתעת גורמים המופעלים בידי איראן מלפגוע בבסיסים המשמשים את צבא ארה\"ב"
     ],
     "forecast": [
      "הגברת הפיקוח הביטחוני והרחבת הסנקציות על גורמים המזוהים עם משמרות המהפכה"
     ]
    },
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת נמלי תעופה ובסיסים בסעודיה בתגובה לתקיפות קודמות ולתמיכה בכוחות תימניים",
      "אזהרת חברות תעופה בין-לאומיות ואיום בתגובה כואבת אם ארה\"ב תתערב צבאית"
     ],
     "inferred": [
      "ערעור היציבות הכלכלית והביטחונית בסעודיה לשם השגת ויתורים",
      "הפגנת כוח אזורית ושמירה על מעמד כגורם מאיים במרחב הים האדום והמפרץ"
     ],
     "forecast": [
      "המשך ניסיונות פגיעה ביעדים אסטרטגיים במפרץ במקביל להחרפת הרטוריקה נגד וושינגטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/12/oil-tanker-reportedly-attacked-in-strait-of-hormuz-region?traffic_source=rss",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/houthi-official-warns-swift-painful-response-if-us-enters-yemen-war",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261012-live-saudi-arabia-extends-suspension-of-operations-at-riyadh-airport-after-deadly-houthi-attacks",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610124072",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86291010/Iran-condemns-UK-s-baseless-claims-over-Fairford-air-base-incident",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21609761",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/houthi-strikes-shatter-saudi-arabia-riyadh-aura-calm",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48478",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94607",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sy67lt5szl",
     "accessed_at": "2026-10-12T19:58:47+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T23:40:57+00:00",
  "changes": {
   "IRAN-10121958-01": {
    "kind": "possible",
    "prev": "תרגיל צבאי של משמרות המהפכה באיראן ושיגורי ניסוי של טילים",
    "score": 0.467
   },
   "IRAN-10121958-02": {
    "kind": "new"
   },
   "IRAN-10121958-03": {
    "kind": "new"
   },
   "IRAN-10121958-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפות טילים וכטב\"מים של החות'ים על נמל התעופה הבינלאומי בריאד",
    "score": 1.0
   },
   "IRAN-10121958-05": {
    "kind": "possible",
    "prev": "מגעים בין ארה\"ב לצה\"ל לבחינת פעולה ישראלית נגד החות'ים בתימן",
    "score": 0.467
   },
   "IRAN-10121958-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-12T2000__ukraine-202610122000.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-12T20:00:03+00:00",
   "window": {
    "from": "2026-10-11T20:00:03+00:00",
    "to": "2026-10-12T20:00:03+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610122000"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במקביל לתקיפות הדדיות בעומק השטח, כאשר כוחות רוסיים מבצעים מתקפות כטב\"מים וטילים על מבני מגורים ותשתיות אזרחיות בקייב, בחרקוב ובאזורים נוספים, לצד פגיעות אוקראיניות במרכזי נתונים ברוסיה. במקביל למאמצים דיפלומטיים אמריקאיים לייצר הפסקת אש בתחום האנרגיה, הצדדים מדווחים על המשך הפגיעות ההדדיות וחוסר עמידה בסיכומים. ברמה המדינית ניכרת מחלוקת בין ארצות הברית לבעלות בריתה באירופה סביב הסכמי אנרגיה מול מוסקבה והחרפת הסנקציות.",
   "fronts": [
    {
     "name": "עורף אוקראינה (קייב, ויניצה, ז'יטומיר)",
     "status": "תחת מתקפות כטב\"מים וטילים על יעדי מגורים, תחבורה ותעשייה"
    },
    {
     "name": "צפון-מזרח אוקראינה (חרקוב)",
     "status": "פגיעות כטב\"מים במבני מגורים ונפגעים אזרחיים"
    },
    {
     "name": "עורף רוסיה",
     "status": "יירוטי כטב\"מים נרחבים ותקיפות ממוקדות נגד מרכזי מידע ומחשוב"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10122000-01",
     "title": "פגיעת כטב\"ם רוסי בבניין מגורים בקייב",
     "summary": "כטב\"ם רוסי פגע בבניין מגורים רב-קומות במחוז דרניצקי שבקייב, גרם למותם של שני בני אדם ולפציעתם של אחרים.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T17:54:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T17:54:00+00:00",
     "last_update_at": "2026-10-12T18:19:00+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו אחיד בדיווחים השונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/12/8057686/",
       "published_at": "2026-10-12T18:19:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-drones-strike-kyiv-morning-and-evening-kill-woman-injure-14/",
       "published_at": "2026-10-12T18:07:54+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173708-russian-drone-strikes-highrise-apartment-building-in-kyivs-darnytskyi-district.html",
       "published_at": "2026-10-12T17:54:00+00:00"
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
     "id": "UKRAINE-10122000-02",
     "title": "פיצוצים במרכז קייב בעקבות מתקפת טילים",
     "summary": "פיצוצים עזים נשמעו במרכז קייב לפני שהופעלו התרעות על תקיפה אווירית בעיר.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T19:23:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T19:23:05+00:00",
     "last_update_at": "2026-10-12T19:23:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_7375874ce11ac2eb",
       "url": "https://kyivindependent.com/explosions-heard-in-kyiv-before-air-raid-alert-issued/",
       "published_at": "2026-10-12T19:23:05+00:00"
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
     "id": "UKRAINE-10122000-03",
     "title": "פגיעת כטב\"ם במבנה מגורים בחרקוב",
     "summary": "פגיעת כלי טיס בלתי מאויש בבניין מגורים רב-קומות בחרקוב הביאה לפציעתם של 23 תושבים, בהם ילדים.",
     "axis": "חזית מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T17:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T17:41:00+00:00",
     "last_update_at": "2026-10-12T17:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173707-injury-toll-after-russian-strike-on-kharkiv-apartment-building-rises-to-23.html",
       "published_at": "2026-10-12T17:41:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10122000-04",
     "title": "תקיפה רוסית על תשתית תחבורה במחוז ז'יטומיר",
     "summary": "כוחות רוסיים תקפו מתקן של תשתית תחבורה במחוז קורוסטן שבאזור ז'יטומיר.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T18:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T18:33:00+00:00",
     "last_update_at": "2026-10-12T18:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173718-russians-attack-transport-infrastructure-facility-in-zhytomyr-region.html",
       "published_at": "2026-10-12T18:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קורוסטן, אוקראינה",
       "lat": 50.9491,
       "lon": 28.6418
      }
     ]
    },
    {
     "id": "UKRAINE-10122000-05",
     "title": "תקיפה רוסית נגד מפעל ממתקים בוויניצה",
     "summary": "מפעל הממתקים רושן בוויניצה נפגע בתקיפה רוסית, והחברה הצהירה כי מדובר באתר אזרחי שאינו מייצר ציוד צבאי.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T17:37:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T17:37:04+00:00",
     "last_update_at": "2026-10-12T18:07:54+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-drones-strike-kyiv-morning-and-evening-kill-woman-injure-14/",
       "published_at": "2026-10-12T18:07:54+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-strikes-roshen-confectionery-factory-in-vinnytsia/",
       "published_at": "2026-10-12T17:37:04+00:00"
      }
     ],
     "places": [
      {
       "name": "ויניצה, אוקראינה",
       "lat": 49.232,
       "lon": 28.468
      }
     ]
    },
    {
     "id": "UKRAINE-10122000-06",
     "title": "יירוט כטב\"מים אוקראיניים מעל שטח רוסיה",
     "summary": "מערכות ההגנה האווירית של רוסיה יירטו מעל 30 כלי טיס בלתי מאוישים אוקראיניים בארבעה מחוזות שונים.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T18:15:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T18:15:08+00:00",
     "last_update_at": "2026-10-12T18:15:08+00:00",
     "what_is_not_verified": "פירוט המחוזות המדויקים שבהם בוצעו היירוטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2201097",
       "published_at": "2026-10-12T18:15:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10122000-07",
     "title": "תקיפות אוקראיניות על מרכזי נתונים ברוסיה",
     "summary": "אוקראינה פגעה באמצעות כטב\"מים בשלושה מרכזי נתונים של חברת יאנדקס, מה שגרם להשבתת שירותים ולפגיעה ברשתות בוטים.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T11:34:09+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T11:34:09+00:00",
     "last_update_at": "2026-10-12T19:23:18+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומיקומם הפיזי המדויק של כל המתקנים שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/12/son-of-a-russian-federal-security-service-general-helps-run-a-company-selling-mobile-data-centers-amid-ukrainian-drone-strikes-bbc-reports",
       "published_at": "2026-10-12T19:23:18+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/12/lithuanian-prime-minister-says-more-ukrainian-strikes-on-russian-data-centers-could-help-safeguard-european-elections-from-interference",
       "published_at": "2026-10-12T19:02:52+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48468",
       "published_at": "2026-10-12T11:34:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10122000-08",
     "title": "מחלוקת וטענות להפרת הפסקת האש האנרגטית",
     "summary": "הנהגת אוקראינה מסרה כי רוסיה אינה מקיימת את הפסקת האש בתחום האנרגיה שעליה הכריז נשיא ארה\"ב דונלד טראמפ, וממשיכה לתקוף תשתיות.",
     "axis": "משא ומתן ומדיניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T08:33:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T08:33:54+00:00",
     "last_update_at": "2026-10-12T18:20:00+00:00",
     "what_is_not_verified": "האם רוסיה הסכימה באופן רשמי למתווה הפסקת האש האנרגטית מלכתחילה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173713-zelensky-russia-not-complying-with-energy-ceasefire-as-of-now.html",
       "published_at": "2026-10-12T18:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/12/8057688/",
       "published_at": "2026-10-12T17:08:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/12/ukraine-russia-trump-energy-ceasefire-nato-zelenskyy-nobel-latest-news-updates",
       "published_at": "2026-10-12T16:31:54+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173694-zelensky-ukraine-attacks-no-energy-facilities-last-night-while-russia-struck-petrol-stations-and-energy-infrastructure.html",
       "published_at": "2026-10-12T16:21:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48465",
       "published_at": "2026-10-12T11:13:52+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131767",
       "published_at": "2026-10-12T08:33:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10122000-09",
     "title": "התקדמות אוקראינה בתהליך ההצטרפות לאיחוד האירופי",
     "summary": "מדינות האיחוד האירופי הגיעו להסכמה על פתיחת אשכולות משא ומתן 2 ו-3 מול אוקראינה לאחר שאושרו תיקוני חקיקה בנושא חינוך.",
     "axis": "משא ומתן ומדיניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T16:19:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T16:19:00+00:00",
     "last_update_at": "2026-10-12T16:19:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
       "published_at": "2026-10-12T16:19:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10122000-10",
     "title": "התנגדות גרמניה לעסקת הסולר האמריקאית עם רוסיה",
     "summary": "קנצלר גרמניה פרידריך מרץ הודיע כי ארצו והאיחוד האירופי לא ירכשו סולר מרוסיה בעקבות מהלכי ארה\"ב, וקרא להחמרת הסנקציות על מוסקבה.",
     "axis": "סנקציות וסיוע בין-לאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T19:14:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T19:14:29+00:00",
     "last_update_at": "2026-10-12T19:14:29+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/12/german-chancellor-friedrich-merz-says-germany-and-the-eu-won-t-follow-trump-s-lead-on-russian-diesel-calls-for-tougher-sanctions-against-moscow",
       "published_at": "2026-10-12T19:14:29+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "{'description': 'הסכמתה הרשמית של רוסיה להפסקת אש אנרגטית שיזם טראמפ'}",
    "{'description': 'המספר הכולל של נפגעים בתקיפות בקייב עקב פערים בין הדיווחים הראשוניים'}",
    "{'description': 'היקף הנזק הפיזי והתפקודי המדויק לשלושת מרכזי הנתונים של חברת יאנדקס'}"
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
     "value": 1.1181,
     "unit": "USD",
     "change_pct": -0.22,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הסכמה להפסקת אש הדדית במגזר האנרגיה אם רוסיה תנצור את האש",
      "התקדמות בהליך ההצטרפות לאיחוד האירופי"
     ],
     "inferred": [
      "פגיעה ביכולות הטכנולוגיות והסייבר של רוסיה באמצעות תקיפת חוות שרתים",
      "שימור הלחץ והסנקציות הבין-לאומיות נגד מוסקבה ללא פשרות כלכליות של המערב"
     ],
     "forecast": [
      "המשך גביית מחיר על ידי תקיפות גומלין במקרה של פגיעה מתמשכת ברשת החשמל לקראת החורף"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "מוכנות לנצור אש ביום הבחירות באוקראינה אם אלו יתקיימו"
     ],
     "inferred": [
      "המשך שחיקת מערכות האנרגיה והמורל האזרחי באוקראינה למרות יוזמות תיווך",
      "ניסיון להבקיע את משטר הסנקציות באמצעות עסקאות אנרגיה מול ארצות הברית"
     ],
     "forecast": [
      "המשך מתקפות אוויריות נרחבות לקראת תקופת החורף לשם הפעלת מנופי לחץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/12/ukraine-russia-trump-energy-ceasefire-nato-zelenskyy-nobel-latest-news-updates",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russia-strikes-roshen-confectionery-factory-in-vinnytsia/",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/12/german-chancellor-friedrich-merz-says-germany-and-the-eu-won-t-follow-trump-s-lead-on-russian-diesel-calls-for-tougher-sanctions-against-moscow",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2201097",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131767",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48465",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4173694-zelensky-ukraine-attacks-no-energy-facilities-last-night-while-russia-struck-petrol-stations-and-energy-infrastructure.html",
     "accessed_at": "2026-10-12T20:00:03+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T23:42:39+00:00",
  "changes": {
   "UKRAINE-10122000-01": {
    "kind": "new"
   },
   "UKRAINE-10122000-02": {
    "kind": "new"
   },
   "UKRAINE-10122000-03": {
    "kind": "possible",
    "prev": "פגיעה רוסית במתקן אנרגיה בחרקוב",
    "score": 0.633
   },
   "UKRAINE-10122000-04": {
    "kind": "new"
   },
   "UKRAINE-10122000-05": {
    "kind": "new"
   },
   "UKRAINE-10122000-06": {
    "kind": "new"
   },
   "UKRAINE-10122000-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות כטב\"מים אוקראיניות על מרכז נתונים ומטרות ברוסיה",
    "score": 0.65
   },
   "UKRAINE-10122000-08": {
    "kind": "possible",
    "prev": "הצהרת ארצות הברית על הפסקת אש אנרגטית ותגובות הצדדים",
    "score": 0.467
   },
   "UKRAINE-10122000-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "העברת סיוע צבאי מאסטוניה והאיחוד האירופי לאוקראינה",
    "score": 0.65
   },
   "UKRAINE-10122000-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-12T2006__north-202610122006.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-12T20:06:15+00:00",
   "window": {
    "from": "2026-10-11T20:06:15+00:00",
    "to": "2026-10-12T20:06:15+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610122006"
   },
   "summary": "בגבול הצפון מתקיימת מתיחות ביטחונית גבוהה סביב שרידי תחמושת ונפלי רקטות מצרר של חזבאללה הגובים נפגעים בנפש, לצד פעילות צבאית ישראלית להשמדת תוואים תת-קרקעיים בדרום לבנון ופעילות קרקעית באזור קוניטרה בסוריה. בתוך לבנון נמשך לחץ סביב פעילות הברחות אמצעי לחימה של חזבאללה ועימותים סביב אכיפת החוק מול מנגנוני הביטחון. בסוריה נרשמת תסיסה מקומית סביב מאבקי שליטה בין גורמים מקומיים לכוחות הביטחון באזור חסכה.",
   "fronts": [
    {
     "name": "גבול ישראל - לבנון",
     "status": "מתיחות מתמשכת, פיצוצי נפלים ופעילות צבאית מוגבלת משני הצדדים"
    },
    {
     "name": "דרום סוריה (קוניטרה / פרברי דמשק)",
     "status": "פעילות קרקעית נקודתית של צה\"ל לסיכול בינוי והשמדת תשתיות"
    },
    {
     "name": "פנים לבנון (בקאע וביירות)",
     "status": "חקירות וחיכוך סביב העברות חומרי נפץ ותשתיות לוגיסטיות של חזבאללה"
    },
    {
     "name": "צפון-מזרח סוריה (חסכה)",
     "status": "חיכוך פנימי ומתיחות ביטחונית סביב פעילות גורמים המזוהים עם הכוחות הסוריים הדמוקרטיים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10122006-01",
     "title": "פיצוץ נפל תחמושת מצרר של חזבאללה בגבול הצפון",
     "summary": "נער נהרג ועשרות נפצעו כתוצאה מהתפוצצות נפל רקטה עם פצצת מצרר של חזבאללה במהלך טיול תלמידים באזור רכס רמים ומצפה פאר.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T12:16:49+00:00",
     "last_update_at": "2026-10-12T19:46:17+00:00",
     "what_is_not_verified": "קיימות גרסאות שונות לגבי מספר הפצועים המדויק, גיל ההרוג והמיקום המדויק שנמסר בדיווחים הראשוניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sjalatqoge",
       "published_at": "2026-10-12T19:46:17+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957203",
       "published_at": "2026-10-12T19:13:08+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/likely-unexploded-ordnance-kills-teenager-northern-israel",
       "published_at": "2026-10-12T17:46:29+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1tp85come",
       "published_at": "2026-10-12T17:39:18+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21609044",
       "published_at": "2026-10-12T15:07:51+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1376409",
       "published_at": "2026-10-12T14:43:02+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25347",
       "published_at": "2026-10-12T14:42:28+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957182",
       "published_at": "2026-10-12T14:20:34+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131777",
       "published_at": "2026-10-12T12:16:49+00:00"
      }
     ],
     "places": [
      {
       "name": "יפתח",
       "lat": 33.1286,
       "lon": 35.5519
      },
      {
       "name": "מנרה",
       "lat": 33.1959,
       "lon": 35.5446
      }
     ]
    },
    {
     "id": "NORTH-10122006-02",
     "title": "השמדת תשתית תת-קרקעית של חזבאללה בדרום לבנון",
     "summary": "כוחות חטיבה שבע ויהל\"ם איתרו והשמידו תוואי תת-קרקעי במרחב הביטחוני בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T12:12:46+00:00",
     "last_update_at": "2026-10-12T12:12:46+00:00",
     "what_is_not_verified": "המיקום המדויק של התוואי התת-קרקעי לא צוין בהודעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25345",
       "published_at": "2026-10-12T12:12:46+00:00"
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
     "id": "NORTH-10122006-03",
     "title": "ירי ארטילרי ישראלי בדרום לבנון",
     "summary": "ארטילריה ישראלית ביצעה ירי לעבר האזור שבין העיירות חדאת'א ועותא אל-ג'בל בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T18:24:57+00:00",
     "last_update_at": "2026-10-12T18:24:57+00:00",
     "what_is_not_verified": "לא דווח על נפגעים או נזק כתוצאה מהירי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_754edcc917b27718",
       "url": "https://english.almanar.com.lb/article/137497/",
       "published_at": "2026-10-12T18:24:57+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א",
       "lat": 33.1561,
       "lon": 35.3912
      }
     ]
    },
    {
     "id": "NORTH-10122006-04",
     "title": "סיכול משלוח חומרי נפץ של חזבאללה בלבנון",
     "summary": "כוחות הביטחון של לבנון תפסו במחסום דהר אל-בידר רכב שהוביל מאות קילוגרמים של חומרי נפץ מאזור בעלבכ לכיוון הדאחיה בביירות, ועצרו שני חשודים.",
     "axis": "לבנון (פנים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T11:49:06+00:00",
     "last_update_at": "2026-10-12T14:00:00+00:00",
     "what_is_not_verified": "משקל חומר הנפץ המדויק, הרכבו ויעדו הסופי המבצעי אינם מאומתים באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962491/from-baalbek-to-beiruts-southern-suburbs-lebanon-probes-explosives-shi/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962491",
       "published_at": "2026-10-12T14:00:00+00:00"
      },
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/the-explosives-shipment-to-dahiyeh-a-hezbollah-operational-failure-a-deliberate-test-or-a-threatening-message-to-the-lebanese-government/",
       "published_at": "2026-10-12T11:49:06+00:00"
      }
     ],
     "places": [
      {
       "name": "בעלבכ",
       "lat": 34.0097,
       "lon": 36.2117
      },
      {
       "name": "דהר אל-בידר",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    },
    {
     "id": "NORTH-10122006-05",
     "title": "פעילות צה\"ל באזור קוניטרה ופרברי דמשק",
     "summary": "כוחות צה\"ל נכנסו למרחב הכפרי של קוניטרה, עצרו עבודות בינוי, ופוצצו מבנה נטוש במרחב הכפרי המערבי של דמשק.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T15:21:01+00:00",
     "last_update_at": "2026-10-12T15:21:01+00:00",
     "what_is_not_verified": "זהות הגורמים שביצעו את עבודות הבינוי או מהות המבנה שפוצץ לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-enters-syria-s-quneitra-countryside-blocks-construction-work/4086328",
       "published_at": "2026-10-12T15:21:01+00:00"
      }
     ],
     "places": [
      {
       "name": "פרברי דמשק",
       "lat": 33.5593,
       "lon": 36.1618
      }
     ]
    },
    {
     "id": "NORTH-10122006-06",
     "title": "מתיחות ביטחונית ומעצר בחסכה בצפון-מזרח סוריה",
     "summary": "חמושים המזוהים עם תנועת הנוער המהפכנית הקשורה לכוחות הסוריים הדמוקרטיים חטפו אזרח בעיר חסכה לאחר שהשתתף בהפגנות למען ריבונות המדינה הסורית, מה שהוביל להתחמשות תושבים ולהקמת מחסומים.",
     "axis": "סוריה (פנים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T18:12:00+00:00",
     "last_update_at": "2026-10-12T18:12:00+00:00",
     "what_is_not_verified": "מידת השליטה והמעורבות של הנהגת הכוחות הסוריים הדמוקרטיים באירועי החטיפה והאלימות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/al-hasakah-sdf-linked-groups-activity-raises-security-fears/",
       "published_at": "2026-10-12T18:12:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10122006-07",
     "title": "השעיית שביתת רעב של אסירים בבתי כלא בלבנון",
     "summary": "מאות אסירים בבתי כלא בלבנון, בהם עצורים סורים, השעו שביתת רעב וסירוב לתרופות בעקבות פסיקת המועצה החוקתית בנוגע לחוק החנינה הכללית.",
     "axis": "לבנון (פנים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T18:38:59+00:00",
     "last_update_at": "2026-10-12T18:38:59+00:00",
     "what_is_not_verified": "זהות כלל האסירים ומספרם הכולל המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/roumieh-prisoners-suspend-hunger-and-medication-strike/",
       "published_at": "2026-10-12T18:38:59+00:00"
      }
     ],
     "places": [
      {
       "name": "רומיה",
       "lat": 33.882,
       "lon": 35.6146
      }
     ]
    },
    {
     "id": "NORTH-10122006-08",
     "title": "העברת אזהרה ישראלית ללבנון בעניין הצטרפות למערכה",
     "summary": "על פי דיווח, ישראל העבירה מסרים המזהירים כי אם חזבאללה יצטרף למערכה במקרה של עימות מול איראן, ישראל תפתח במבצע נרחב ותטיל מצור כולל על לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T06:48:43+00:00",
     "last_update_at": "2026-10-12T06:48:43+00:00",
     "what_is_not_verified": "עצם העברת המסר לא אושרה על ידי גורם רשמי ישראלי או לבנוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94607",
       "published_at": "2026-10-12T06:48:43+00:00"
      }
     ],
     "places": [
      {
       "name": "לבנון",
       "lat": 40.3757,
       "lon": -76.4626
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק באסון הנפל ברכס רמים (דיווחים שנעים בין עשרה לעשרים וארבעה פצועים).",
    "משקל חומרי הנפץ המדויק שנתפס בדהר אל-בידר (משתנה בין 250 ל-800 קילוגרם) והרכב החומרים.",
    "הדיווח הלבנוני על אזהרה ישראלית מפני מצור כולל על לבנון במקרה של תקיפה איראנית.",
    "נתוני הנפגעים הכוללים בלבנון, שכן קיימים פערים של אלפי נפגעים בין דיווחי משרד הבריאות הלבנוני השונים."
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
     "value": 3.0695,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "המשך פעילות מבצעית וסיכולית לאיתור והשמדת תשתיות תת-קרקע ונפלים במרחב הגבול.",
      "היערכות לתרגילים רחבי היקף בגליל מחשש לחידוש לחימה."
     ],
     "inferred": [
      "הרתעת חזבאללה וממשלת לבנון מהתערבות במקרה של עימות צבאי ישיר מול איראן.",
      "מניעת התבססות תשתיות צבאיות ועבודות הנדסיות במרחב הגבול עם סוריה."
     ],
     "forecast": [
      "פעילות סריקה וטיהור מואצת של שטחים פתוחים מנפלים בצפון הארץ.",
      "המשך תקיפות ממוקדות בתגובה לאיומים מיידיים בדרום לבנון ובדרום סוריה."
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [],
     "inferred": [
      "שיקום וחידוש מלאי חומרי הנפץ והאמצעים הלוגיסטיים ברובע הדאחיה ובדרום המדינה.",
      "שימור יכולות לפעולה עתידית מול כוחות צה\"ל במרחב דרום לבנון."
     ],
     "forecast": [
      "המשך הפעלת ערוצי אספקה פנימיים בחשאי תוך ניסיון לחמוק מביקורת גופי הביטחון הלבנוניים."
     ]
    },
    {
     "actor": "ממשלת לבנון ומנגנוני הביטחון שלה",
     "declared": [
      "הרחבת חקירת תפיסת חומרי הנפץ וזיהוי כלל המעורבים ברשת ההובלה."
     ],
     "inferred": [
      "ניסיון להפגין שליטה בריבונית ולמנוע הידרדרות לעימות צבאי אזורי כולל בשטח המדינה."
     ],
     "forecast": [
      "המשך חיכוך מתון מול חזבאללה בענייני מעקבים לוגיסטיים ללא כניסה לעימות חזיתי."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/the-explosives-shipment-to-dahiyeh-a-hezbollah-operational-failure-a-deliberate-test-or-a-threatening-message-to-the-lebanese-government/",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/137497/",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/likely-unexploded-ordnance-kills-teenager-northern-israel",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-enters-syria-s-quneitra-countryside-blocks-construction-work/4086328",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/roumieh-prisoners-suspend-hunger-and-medication-strike/",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21609044",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962491/from-baalbek-to-beiruts-southern-suburbs-lebanon-probes-explosives-shi/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962491",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1376409",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131777",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25345",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94607",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957182",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1tp85come",
     "accessed_at": "2026-10-12T20:06:15+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T23:45:40+00:00",
  "changes": {
   "NORTH-10122006-01": {
    "kind": "new"
   },
   "NORTH-10122006-02": {
    "kind": "possible",
    "prev": "מגעים לקראת סיום פעילות יוניפי\"ל בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10122006-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הרוגים מירי ומשרידי אמל\"ח בדרום לבנון במהלך מסיק זיתים",
    "score": 0.65
   },
   "NORTH-10122006-04": {
    "kind": "new"
   },
   "NORTH-10122006-05": {
    "kind": "new"
   },
   "NORTH-10122006-06": {
    "kind": "new"
   },
   "NORTH-10122006-07": {
    "kind": "new"
   },
   "NORTH-10122006-08": {
    "kind": "new"
   }
  }
 }
};
