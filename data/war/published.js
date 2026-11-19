/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-19T1915__yemen-202611191915.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-19T19:15:35+00:00",
   "window": {
    "from": "2026-11-18T19:15:35+00:00",
    "to": "2026-11-19T19:15:35+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611191915"
   },
   "summary": "העימות בתימן מסלים עם התקדמות קרקעית של כוחות החות'ים לעבר מחוז לאחג' והאיום המתגבר על העיר עדן, לצד המשך קרבות קשים במרחב תעז. במקביל, החות'ים מעמיקים את הפגיעה בעומק סעודיה באמצעות ירי טילים ופגיעה ישירה במרכז העסקים בריאד, כמו גם טענות לפגיעה בתשתיות נפט. סעודיה מצידה שינתה את שרשרת הפיקוד על המערכה ונערכת להמשך הלחימה אל תוך שנת 2027 במטרה לבלום את ההישגים של יריביה.",
   "fronts": [
    {
     "name": "סעודיה - תימן (עומק סעודיה)",
     "status": "הסלמה בתקיפות טילים וכטב\"מים של החות'ים נגד מטרות כלכליות בריאד ותשתיות נפט, לצד תקיפות אוויריות סעודיות בצנעא"
    },
    {
     "name": "דרום תימן (לאחג' - עדן)",
     "status": "לחץ חות'י גובר והתקדמות לעבר לאחג' במקביל לנסיגת כוחות הדרום מעמדות שליטה סמוך למצר באב אל-מנדב"
    },
    {
     "name": "תעז",
     "status": "קרבות עזים ולחימה מתמשכת סביב העיר הנצורה במקביל למשבר הומניטרי חריף"
    },
    {
     "name": "מרחב ים סוף וסודאן",
     "status": "מאמצים להרחבת השפעה וחיפוש נתיבי אספקה חלופיים באמצעות התבססות מול חופי סודאן"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11191915-01",
     "title": "פגיעת טיל של החות'ים במגדל קרן ההשקעות בריאד ויירוט שיגורים נוספים",
     "summary": "טיל ששוגר על ידי החות'ים פגע בגורד השחקים שבו שוכנת קרן העושר הריבונית של סעודיה בריאד וגרם נזק למספר קומות, בעוד שכוחות ההגנה האזרחית יירטו שיגורים נוספים.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T07:27:11+00:00",
     "last_update_at": "2026-11-19T18:10:58+00:00",
     "what_is_not_verified": "קיימת אי-התאמה בין המקורות לגבי מספר הקומות שניזוקו (חמש מול שבע עד שמונה), וסרטוני הפגיעה לא אומתו באופן עצמאי בחלק מהדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-hit-saudi-arabias-sovereign-wealth-fund-skyscraper",
       "published_at": "2026-11-19T18:10:58+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133916",
       "published_at": "2026-11-19T16:50:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/riyadh-tower-damaged-houthi-missile-attack",
       "published_at": "2026-11-19T16:24:29+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sjwhr00hczx",
       "published_at": "2026-11-19T14:08:48+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/riyadhs-tallest-skyscraper-hit-houthi-strike-saudi-wealth-fund-hq",
       "published_at": "2026-11-19T12:46:37+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261119-skyscraper-in-riyadh-damaged-as-saudi-arabia-reports-surge-in-new-houthi-attacks",
       "published_at": "2026-11-19T07:58:16+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/china-us-and-russia-meet-tensions-soar-middle-east",
       "published_at": "2026-11-19T07:27:11+00:00"
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
     "id": "YEMEN-11191915-02",
     "title": "גינויים רשמיים של סעודיה וממשלת תימן למתקפה בריאד",
     "summary": "משרד החוץ הסעודי וממשלת תימן פרסמו גינויים חריפים לתקיפת המרכז הפיננסי בריאד בידי החות'ים, והדגישו כי לא יסבלו תוקפנות וכי ביטחון שתי המדינות שלוב זה בזה.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T16:20:30+00:00",
     "last_update_at": "2026-11-19T18:12:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3fb7b70ac87ea4cf",
       "url": "https://www.sabanew.net/viewstory/156100",
       "published_at": "2026-11-19T18:12:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_3fb7b70ac87ea4cf",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-condemns-houthi-attacks-riyadh",
       "published_at": "2026-11-19T16:20:30+00:00"
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
     "id": "YEMEN-11191915-03",
     "title": "התקדמות החות'ים לעבר עדן ונסיגת כוחות הדרום בחוף המערבי",
     "summary": "הכוחות החות'יים התקדמו לעבר עמדות במחוז לאחג' במרחק של כשישים קילומטרים מעדן, במקביל לנסיגת כוחות דרום תימן מאזור מצר באב אל-מנדב ושדה התעופה בד'ובאב לצורך היערכות מחדש.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T17:20:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T17:20:36+00:00",
     "last_update_at": "2026-11-18T19:15:35+00:00",
     "what_is_not_verified": "היקף השליטה המדויק של החות'ים בעמדות בלאחג' והאם הנסיגה היא מהלך טקטי יזום או נסיגה תחת לחץ צבאי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/centcom-chief-israel-following-us-iran-strikes-gulf",
       "published_at": "2026-11-18T18:12:55+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-appoints-new-yemen-commander-amid-setbacks",
       "published_at": "2026-11-18T17:20:36+00:00"
      }
     ],
     "places": [
      {
       "name": "לאחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      }
     ]
    },
    {
     "id": "YEMEN-11191915-04",
     "title": "קרבות עזים בתעז ותקיפות אוויריות סעודיות בצנעא",
     "summary": "קרבות כבדים התרחשו מסביב לעיר הנצורה תעז, לצד דיווחים על תקיפות אוויריות של הקואליציה בראשות סעודיה בבירה צנעא והחמרת משבר המים בתעז.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T07:27:11+00:00",
     "last_update_at": "2026-11-19T16:59:38+00:00",
     "what_is_not_verified": "תוצאות התקיפות האוויריות בצנעא וזהות היעדים המדויקים שהותקפו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/19/yemens-besieged-city-of-taiz-faces-a-deepening-water-crisis?traffic_source=rss",
       "published_at": "2026-11-19T16:59:38+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/riyadh-tower-damaged-houthi-missile-attack",
       "published_at": "2026-11-19T16:24:29+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/china-us-and-russia-meet-tensions-soar-middle-east",
       "published_at": "2026-11-19T07:27:11+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11191915-05",
     "title": "טענת החות'ים לתקיפת תחנות שאיבה בצינור הנפט הסעודי",
     "summary": "החות'ים טענו כי ביצעו מתקפות באמצעות כלי טיס בלתי מאוישים נגד תחנות שאיבה המשרתות את צינור הנפט מזרח-מערב בסעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T18:12:55+00:00",
     "last_update_at": "2026-11-18T19:15:35+00:00",
     "what_is_not_verified": "אין אימות סעודי או עצמאי לעצם הפגיעה או להיקף הנזק בתחנות השאיבה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/centcom-chief-israel-following-us-iran-strikes-gulf",
       "published_at": "2026-11-18T18:12:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11191915-06",
     "title": "החלפת מפקד כוחות הקואליציה בתימן והיערכות סעודית למערכה ממושכת",
     "summary": "סעודיה מינתה את רמטכ\"ל צבאה לפקד על כוחות הקואליציה בתימן במטרה לייעל את הפיקוד מול נסיגות בשטח, ובמקביל נערכת להמשך הלחימה עד לשנת 2027.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T17:20:36+00:00",
     "last_update_at": "2026-11-19T00:44:42+00:00",
     "what_is_not_verified": "ההערכות על כוונת סעודיה להמשיך בלחימה עד שנת 2027 נמסרו בעילום שם ולא אושרו רשמית על ידי משרד החוץ הסעודי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudis-preparing-yemen-campaign-last-well-2027",
       "published_at": "2026-11-19T00:44:42+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-appoints-new-yemen-commander-amid-setbacks",
       "published_at": "2026-11-18T17:20:36+00:00"
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
     "id": "YEMEN-11191915-07",
     "title": "ניסיונות של החות'ים ואיראן לבסס אחיזה בחוף ים סוף בסודאן",
     "summary": "החות'ים ואיראן פועלים להרחבת נוכחותם ולבניית קשרים עם פלגים בצבא סודאן במטרה להשיג נתיבי אספקה חלופיים לאורך חופי ים סוף.",
     "axis": "הים האדום",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T13:11:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T13:11:04+00:00",
     "last_update_at": "2026-11-19T13:11:04+00:00",
     "what_is_not_verified": "רמת הקשר המעשי בשטח בין החות'ים לקבוצות בתוך צבא סודאן אינה מאומתת מעבר להערכות מודיעיניות ופוליטיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/port-sudan-red-sea-hub-caught-between-two-conflicts",
       "published_at": "2026-11-19T13:11:04+00:00"
      }
     ],
     "places": [
      {
       "name": "פורט סודאן, סודאן",
       "lat": 19.6192,
       "lon": 37.2117
      }
     ]
    },
    {
     "id": "YEMEN-11191915-08",
     "title": "פנייה של ממשלת תימן למועצת הביטחון בנוגע להסלמה החות'ית",
     "summary": "ממשלת תימן שיגרה איגרת לאו\"ם ולמועצת הביטחון במחאה על המשך ההסלמה הצבאית של החות'ים במחוזות עדן, לאחג' ותעז, וקיימה שיחות מדיניות בנושא עם עומאן.",
     "axis": "פנים-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T13:50:49+00:00",
     "last_update_at": "2026-11-19T16:44:12+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_2a460cd87af4de49",
       "url": "https://www.sabanew.net/viewstory/156090",
       "published_at": "2026-11-19T16:44:12+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6eb81516cf030ff8",
       "url": "https://www.sabanew.net/viewstory/156079",
       "published_at": "2026-11-19T13:50:49+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הקומות המדויק שנפגע בגורד השחקים בריאד (נמסרו גרסאות שונות של חמש מול שבע עד שמונה קומות).",
    "מידת הנזק והאימות העצמאי לתקיפת תחנות השאיבה בצינור הנפט הסעודי שנטענה על ידי החות'ים.",
    "ההערכות הדיפלומטיות הלא-רשמיות בדבר משך הלחימה המתוכנן של סעודיה עד שנת 2027.",
    "מידת הקשר המעשי ושיתוף הפעולה בין החות'ים לפלגים בצבא סודאן בפורט סודאן."
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה ביעדים כלכליים ותשתיות אזרחיות ונפט בסעודיה בתגובה למלחמה",
      "המשך הפעילות הצבאית בחזיתות תימן והתקדמות לעבר עדן"
     ],
     "inferred": [
      "ערעור תדמית היציבות והביטחון הכלכלי של סעודיה כמגנט השקעות בינלאומי",
      "הפעלת לחץ צבאי לכיבוש מוקדי כוח בדרום תימן והשגת יתרון לפני משא ומתן אפשרי",
      "הרחבת מרחב התמרון הלוגיסטי באמצעות אחיזה בחופי ים סוף גם מחוץ לגבולות תימן"
     ],
     "forecast": [
      "המשך שיגורי טילים וכלי טיס בלתי מאוישים לעבר יעדים כלכליים בסעודיה",
      "החרפת הלחץ הצבאי על מבואות העיר עדן וסביבות מצר באב אל-מנדב"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "אי-הבלגה על כל פגיעה בשטח הממלכה, בנכסיה ובתשתיותיה",
      "הגנה על מרחב הבירה והמשך הפעילות הצבאית של כוחות הקואליציה בתימן"
     ],
     "inferred": [
      "ייעול וריכוז השליטה המבצעית תחת פיקוד הרמטכ\"ל לבלימת נסיגות הכוחות המקומיים",
      "השגת הישגים טריטוריאליים בשטח עבור בעלי בריתם בתימן בטרם פתיחה במגעים דיפלומטיים",
      "ניסיון להשיג סיוע התקפי אמריקאי כדי להכריע את המערכה הצבאית"
     ],
     "forecast": [
      "הגברת תקיפות האוויר נגד יעדי שלטון ותשתית של החות'ים בצנעא ובחזיתות הלחימה",
      "התמשכות המערכה הצבאית בתימן למשך חודשים ארוכים נוספים"
     ]
    },
    {
     "actor": "ממשלת תימן וכוחות הדרום",
     "declared": [
      "היערכות מחדש לחיזוק ההגנה על הבירה הזמנית עדן והסרת המצור מעל תעז",
      "פנייה לקהילה הבינלאומית ולאו\"ם לבלימת ההסלמה של המיליציות החות'יות"
     ],
     "inferred": [
      "ניסיון לבלום את קריסת הקווים בלאחג' ולמנוע כיתור או ניתוק של עדן",
      "תלות מוחלטת בגיבוי צבאי ואווירי מסעודיה כדי למנוע הידרדרות נוספת"
     ],
     "forecast": [
      "התבצרות במרחב עדן וריכוז כוחות בלימה מול מאמצי ההתקדמות של החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/19/yemens-besieged-city-of-taiz-faces-a-deepening-water-crisis?traffic_source=rss",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/riyadhs-tallest-skyscraper-hit-houthi-strike-saudi-wealth-fund-hq",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261119-skyscraper-in-riyadh-damaged-as-saudi-arabia-reports-surge-in-new-houthi-attacks",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-condemns-houthi-attacks-riyadh",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/port-sudan-red-sea-hub-caught-between-two-conflicts",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156079",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133916",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sjwhr00hczx",
     "accessed_at": "2026-11-19T19:15:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T00:47:43+00:00",
  "changes": {
   "YEMEN-11191915-01": {
    "kind": "possible",
    "prev": "יירוט טילים וכטב\"מים מעל שמי סעודיה",
    "score": 0.633
   },
   "YEMEN-11191915-02": {
    "kind": "possible",
    "prev": "פניית סעודיה לספקים בינלאומיים והצטיידות צבאית",
    "score": 0.633
   },
   "YEMEN-11191915-03": {
    "kind": "new"
   },
   "YEMEN-11191915-04": {
    "kind": "new"
   },
   "YEMEN-11191915-05": {
    "kind": "new"
   },
   "YEMEN-11191915-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התקדמות החות'ים ושינויים פיקודיים בצד הסעודי והממשלתי בתימן",
    "score": 1.0
   },
   "YEMEN-11191915-07": {
    "kind": "new"
   },
   "YEMEN-11191915-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-19T1908__iran-202611191908.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-19T19:08:12+00:00",
   "window": {
    "from": "2026-11-18T19:08:12+00:00",
    "to": "2026-11-19T19:08:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611191908"
   },
   "summary": "המתיחות בין איראן לקואליציה בהובלת ארצות הברית וישראל עומדת בפני צומת החלטה, כאשר ישראל לוחצת למכת מנע נרחבת בעוד וושינגטון שוקלת את צעדיה לקראת השנה הבאה. במקביל לסנקציות ולסגר ימי המכבידים על הכלכלה האיראנית, טהרן בוחנת חידוש של ייצוא הנפט ומשמרות המהפכה מדווחים על פגיעה במכליות במצר הורמוז. במישור הלא-קונבנציונלי גוברים הדיווחים ההדדיים והאזהרות בנוגע לפיתוח יכולות כימיות וביולוגיות בידי איראן.",
   "fronts": [
    {
     "name": "הזירה הימית במפרץ הפרסי ומצר הורמוז",
     "status": "חיכוך סביב הסגר האמריקני ומיקוש נתיבי שיט"
    },
    {
     "name": "הציר המדיני-צבאי וושינגטון-ירושלים-טהראן",
     "status": "דיונים על חידוש תקיפות צבאיות אל מול איומי נשק לא קונבנציונלי"
    },
    {
     "name": "הזירה הכלכלית",
     "status": "החמרת סנקציות, מצוקת אספקה באיראן וניסיונות ייצוא נפט"
    }
   ],
   "events": [
    {
     "id": "IRAN-11191908-01",
     "title": "נשיא ארצות הברית דוחה החלטה לגבי המערכה מול איראן לשנה הבאה",
     "summary": "דונלד טראמפ הצהיר כי אינו ממהר לקבל החלטות על מהלכיו הבאים מול איראן וממתין לתחילת השנה האזרחית החדשה, בעוד בישראל מפעילים לחץ לקבלת אישור לתקיפה.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T12:46:37+00:00",
     "last_update_at": "2026-11-19T18:48:57+00:00",
     "what_is_not_verified": "ההחלטה הסופית של הממשל האמריקני ומועד הפעולה המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-he-not-rushing-decision-iran",
       "published_at": "2026-11-19T18:48:57+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hkeqfqncfg",
       "published_at": "2026-11-19T18:07:34+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/trump-says-us-will-see-what-happens-conflict-iran-after-january-1",
       "published_at": "2026-11-19T12:46:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11191908-02",
     "title": "דיווחים על פגיעת מוקשים במכליות נפט במצר הורמוז",
     "summary": "חיל הים של משמרות המהפכה הודיע כי שתי מכליות שהובילו יחד מעל ארבעה מיליון חביות נפט נפגעו ממוקשים ימיים במצר הורמוז.",
     "axis": "איראן - המפרץ הפרסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T12:30:59+00:00",
     "last_update_at": "2026-11-19T15:48:47+00:00",
     "what_is_not_verified": "אימות עצמאי של פיצוץ המוקשים והיקף הנזק למכליות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/irans-irgc-says-tankers-4m-barrels-oil-hit-hormuz-mines-what-know",
       "published_at": "2026-11-19T15:48:47+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21890623",
       "published_at": "2026-11-19T12:30:59+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11191908-03",
     "title": "טראמפ טוען כי איראן בוחנת פיתוח נשק כימי וביולוגי",
     "summary": "נשיא ארצות הברית ציין בראיון כי ישנן אינדיקציות לכך שאיראן פונה לפיתוח נשק כימי וביולוגי לאחר שנחסם נתיב הגרעין שלה, ואיים בתגובה חריפה אם תפעל בנשק זה.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T06:31:01+00:00",
     "last_update_at": "2026-11-19T17:29:09+00:00",
     "what_is_not_verified": "מידת ההתקדמות של איראן בפיתוח נשק כימי וכוונת השימוש בו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95072",
       "published_at": "2026-11-19T06:57:45+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133885",
       "published_at": "2026-11-19T06:31:01+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/iran-may-use-chemical-weapons-why-is-washington-starving-the-opcw/",
       "published_at": "2026-11-19T17:29:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11191908-04",
     "title": "הטענת נפט גולמי במפרץ הפרסי לקראת חידוש יצוא איראני",
     "summary": "מכלית החלה בהטענת נפט איראני במפרץ חרף הסגר הימי שהטילה ארצות הברית, תוך בחינת חידוש הייצוא המסחרי לראשונה מזה מספר חודשים.",
     "axis": "איראן - ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T18:21:00+00:00",
     "last_update_at": "2026-11-19T18:21:00+00:00",
     "what_is_not_verified": "האם המכלית תצליח לשבור את הסגר הימי בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611192862",
       "published_at": "2026-11-19T18:21:00+00:00"
      }
     ],
     "places": [
      {
       "name": "המפרץ הפרסי",
       "lat": 36.3237,
       "lon": 50.012
      }
     ]
    },
    {
     "id": "IRAN-11191908-05",
     "title": "עלויות המערכה הצבאית של ארצות הברית נגד איראן נחשפות",
     "summary": "סגן החשב בפנטגון מסר למחוקקים כי הוצאות המלחמה של ארצות הברית מול איראן, שהחלה בפברואר במשותף עם ישראל, חצו את רף 48 מיליארד הדולרים.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T17:09:53+00:00",
     "last_update_at": "2026-11-19T17:09:53+00:00",
     "what_is_not_verified": "פירוט התקציבים המדויק לכל שלבי המערכה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-war-costs-surpass-48b-us-pentagon-official-says",
       "published_at": "2026-11-19T17:09:53+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מידת הממשות של פיתוח נשק כימי או ביולוגי בידי איראן",
    "אימות עצמאי לדיווח על שתי מכליות שנפגעו ממוקשים במצר הורמוז",
    "כוונות הממשל האמריקני לגבי יציאה למבצע צבאי נוסף בראשית 2027"
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "בלימת הנתיב של איראן לנשק גרעיני",
      "תגובה חריפה והשמדה אם יופעל נשק כימי או ביולוגי נגד שטח ארצות הברית",
      "המתנה לתחילת השנה לפני קבלת החלטות חדשות"
     ],
     "inferred": [
      "הימנעות מהסלמה מיידית ומכניסה להרפתקה צבאית יקרה לפני התבהרות פוליטית",
      "המשך הפעלת לחץ כלכלי וסגר ימי לחניקת המשטר"
     ],
     "forecast": [
      "המשך אכיפת המצור הימי תוך דחיית תקיפות רחבות לפחות עד לתחילת 2027"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התרעה על שיקום מערכי הטילים והכטב\"מים ופיתוח כימי וביולוגי באיראן",
      "דרישה לפעול צבאית ולסיים את המערכה ללא כוחות קרקעיים"
     ],
     "inferred": [
      "שאיפה לרתום את ארצות הברית וקואליציה אזורית לתקיפה מקדימה נרחבת בתשתיות איראניות",
      "חשש מהתארגנות מחודשת של מערכי ההתקפה האיראניים"
     ],
     "forecast": [
      "המשך מאמצי השכנוע המודיעיניים והמדיניים מול הממשל בוושינגטון לקבלת גיבוי צבאי"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "גינוי הסנקציות והמוסר הכפול של המערב",
      "הודעה על הימצאות טילים בטווחים של עד 4,500 קילומטרים",
      "טענות לפגיעה בכלי שיט המפרים את המרחב במצר הורמוז"
     ],
     "inferred": [
      "שבירת הסגר הימי על מנת להכניס כספים למשק הנתון במחנק כבד",
      "יצירת מאזן הרתעה חדש באמצעות איומים ביכולות בלתי קונבנציונליות ופגיעה בנתיבי הנפט"
     ],
     "forecast": [
      "המשך ניסיונות הברחת נפט וחיכוך נקודתי במימי המפרץ כדי לאלץ הקלה בלחץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/irans-irgc-says-tankers-4m-barrels-oil-hit-hormuz-mines-what-know",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/iran-may-use-chemical-weapons-why-is-washington-starving-the-opcw/",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611192862",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21890623",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-war-costs-surpass-48b-us-pentagon-official-says",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133885",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95072",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hkeqfqncfg",
     "accessed_at": "2026-11-19T19:08:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T00:40:30+00:00",
  "changes": {
   "IRAN-11191908-01": {
    "kind": "new"
   },
   "IRAN-11191908-02": {
    "kind": "new"
   },
   "IRAN-11191908-03": {
    "kind": "new"
   },
   "IRAN-11191908-04": {
    "kind": "new"
   },
   "IRAN-11191908-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-19T1909__ukraine-202611191909.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-19T19:09:54+00:00",
   "window": {
    "from": "2026-11-18T19:09:54+00:00",
    "to": "2026-11-19T19:09:54+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611191909"
   },
   "summary": "העימות הצבאי בין אוקראינה לרוסיה החריף בעקבות סדרת תקיפות אוקראיניות שגרמו נזק כבד לגשר קרים ומתקפות נגד של כטב\"מים רוסיים על קייב וזפוריז'יה. בזירה המדינית מסתמנת מתיחות בין ארצות הברית לבעלות בריתה באירופה סביב המשך מימון הסיוע, בעוד מנהיגי אירופה ואוקראינה דורשים שילוב במשא ומתן עתידי לצד ערבויות ביטחוניות מוצקות. רוסיה מקשיחה את עמדותיה בתגובה לפגיעות בתשתיותיה האסטרטגיות ומשעה דיונים על הפסקות אש מקומיות.",
   "fronts": [
    {
     "name": "מצר קרץ' וחצי האי קרים",
     "status": "הסלמה בעקבות פגיעות חוזרות במקטעי הכביש והרכבת של הגשר"
    },
    {
     "name": "מרחב קייב והעורף",
     "status": "מתקפות כטב\"מים רוסיות מול פריסת אמצעי הגנה אווירית חדשים"
    },
    {
     "name": "מחוז זפוריז'יה",
     "status": "תקיפות רחפנים ופגיעות באזרחים"
    },
    {
     "name": "מחוז דונצק (שילובקה)",
     "status": "לחימה מקומית והכחשת טענות רוסיות על כיבוש יישובים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11191909-01",
     "title": "תקיפות אוקראיניות חוזרות ונזק לגשר קרים",
     "summary": "אוקראינה ביצעה סדרת תקיפות נגד גשר קרים, כולל שיגור טילי רוטה ופגיעה שלישית בתוך שבוע, שהובילו לקריסת מקטע כביש ולשיבוש תנועת הרכבות.",
     "axis": "חצי האי קרים ומצר קרץ'",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T10:03:42+00:00",
     "last_update_at": "2026-11-19T19:07:36+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למסילת הרכבת ומשך הזמן שיידרש לתיקון הגשר במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/putin-vows-painful-response-to-ukraine-bombing-of-kerch-bridge",
       "published_at": "2026-11-19T19:07:36+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/satellite-images-show-a-collapsed-span-of-the-crimean-bridge-after-ukraine-s-third-strike-in-a-week",
       "published_at": "2026-11-19T18:11:41+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/19/ukraine-struck-the-crimean-bridge-with-missiles-made-by-a-dutch-company-two-days-later-a-russian-drone-crashed-near-the-dutch-embassy-in-kyiv",
       "published_at": "2026-11-19T17:53:39+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/kerch-bridge-crimea-russia-attacked-again-ukraine",
       "published_at": "2026-11-19T10:03:42+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר קרץ', קרים",
       "lat": 45.281,
       "lon": 36.5492
      }
     ]
    },
    {
     "id": "UKRAINE-11191909-02",
     "title": "הצהרת פוטין על תגובה כואבת והשעיית יוזמות להפסקת אש",
     "summary": "ולדימיר פוטין הצהיר כי תגובת רוסיה לפגיעה בגשר קרים תהיה קשה, וטען כי נסוג מכוונה להסכים להפסקות אש מקומיות בעקבות האירוע.",
     "axis": "הזירה המדינית-ביטחונית הרוסית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:23:44+00:00",
     "last_update_at": "2026-11-19T19:07:43+00:00",
     "what_is_not_verified": "האם אכן נשקלו הפסקות אש מקומיות במועצת הביטחון הרוסית טרם התקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/trump-tells-european-leaders-that-putin-wants-to-end-the-war-in-ukraine-but-putin-says-moscow-won-t-negotiate-with-kyiv-after-crimean-bridge-strikes",
       "published_at": "2026-11-19T19:07:43+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/putin-vows-painful-response-to-ukraine-bombing-of-kerch-bridge",
       "published_at": "2026-11-19T19:07:36+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/we-will-not-negotiate-putin-addresses-ukraines-strikes-on-crimean-bridge/",
       "published_at": "2026-11-19T17:23:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11191909-03",
     "title": "פסגה משולשת בסין ושיחות קואליציית המדינות בברלין",
     "summary": "במקביל לפסגה של מנהיגי ארצות הברית, רוסיה וסין שפרסמה הצהרה כללית ללא אזכור אוקראינה, התכנסו בברלין מנהיגי אירופה, זלנסקי ושליחי הממשל האמריקני לדון בערבויות ביטחון ובמשא ומתן עתידי.",
     "axis": "הזירה המדינית הבינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:13:23+00:00",
     "last_update_at": "2026-11-19T19:07:43+00:00",
     "what_is_not_verified": "מידת ההסכמה האמיתית של רוסיה למנגנון ערבויות הדומה לסעיף חמש של נאט\"ו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/trump-tells-european-leaders-that-putin-wants-to-end-the-war-in-ukraine-but-putin-says-moscow-won-t-negotiate-with-kyiv-after-crimean-bridge-strikes",
       "published_at": "2026-11-19T19:07:43+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/19/8063695/",
       "published_at": "2026-11-19T18:17:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/19/8063690/",
       "published_at": "2026-11-19T18:02:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/19/8063685/",
       "published_at": "2026-11-19T17:23:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/china-russia-us-agree-peace-statement-no-mention-ukraine-iran-wars",
       "published_at": "2026-11-19T17:13:23+00:00"
      }
     ],
     "places": [
      {
       "name": "ברלין, גרמניה",
       "lat": 52.5174,
       "lon": 13.3951
      },
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    },
    {
     "id": "UKRAINE-11191909-04",
     "title": "מתקפת כטב\"מים רוסית על קייב ופגיעה בסביבת שגרירויות זרות",
     "summary": "כטב\"ם רוסי שיורט או התרסק בקייב פגע במבנה מאחורי שגרירות הולנד וגרם נזק לשגרירות אוסטריה, באירוע שנצפה מקרוב גם על ידי שגרירת האיחוד האירופי.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:10:00+00:00",
     "last_update_at": "2026-11-19T17:53:39+00:00",
     "what_is_not_verified": "האם המבנים הדיפלומטיים היו יעד מכוון בתקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_3dd009bbd5e83c1b",
       "url": "https://meduza.io/en/feature/2026/11/19/ukraine-struck-the-crimean-bridge-with-missiles-made-by-a-dutch-company-two-days-later-a-russian-drone-crashed-near-the-dutch-embassy-in-kyiv",
       "published_at": "2026-11-19T17:53:39+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_3dd009bbd5e83c1b",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/19/8063681/",
       "published_at": "2026-11-19T17:10:00+00:00"
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
     "id": "UKRAINE-11191909-05",
     "title": "הרוג אזרחי מפגיעת רחפן קרב במחוז זפוריז'יה",
     "summary": "אדם נהרג כתוצאה מפגיעת רחפן תקיפה רוסי ביישוב קושוהום שבמחוז זפוריז'יה.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T18:44:00+00:00",
     "last_update_at": "2026-11-19T18:44:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_8c92848093feb630",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/19/8063697/",
       "published_at": "2026-11-19T18:44:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11191909-06",
     "title": "מעצר אזרח רוסי בארצות הברית בחשד לריגול נגד חברת ביטחון המסייעת לאוקראינה",
     "summary": "רשויות החוק בארצות הברית עצרו אזרח רוסי שנכנס למדינה והפעיל מעקב אחר עובדי חברת פלנטיר, המספקת מערכות ניתוח נתונים לאוקראינה ולפנטגון.",
     "axis": "לוחמת מודיעין וסייבר בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T23:28:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T23:28:03+00:00",
     "last_update_at": "2026-11-19T18:54:07+00:00",
     "what_is_not_verified": "היקף החומר המודיעיני שהספיק החשוד להעביר למפעיליו ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/19/u-s-charges-25-year-old-russian-with-spying-on-palantir-employees-he-photographed-their-laptops-in-a-coffee-shop-and-tracked-their-movements",
       "published_at": "2026-11-19T18:54:07+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq20xg80ly47o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-18T23:28:03+00:00"
      }
     ],
     "places": [
      {
       "name": "פאלו אלטו, קליפורניה, ארצות הברית",
       "lat": 37.4443,
       "lon": -122.1598
      }
     ]
    },
    {
     "id": "UKRAINE-11191909-07",
     "title": "הצבת מערכת לייזר ניסיונית להגנה אווירית בקייב",
     "summary": "חברה ביטחונית פרסה מערכת יירוט לייזר ניסיונית בשם בליסק במסגרת מערך ההגנה האווירית של קייב נגד כטב\"מים.",
     "axis": "העורף האוקראיני",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T17:55:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T17:55:51+00:00",
     "last_update_at": "2026-11-19T17:55:51+00:00",
     "what_is_not_verified": "רמת היעילות המבצעית של המערכת ביירוטים בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-deploys-experimental-laser-air-defense-system-in-kyiv/",
       "published_at": "2026-11-19T17:55:51+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    }
   ],
   "not_verified": [
    "טענת רוסיה על כיבוש היישוב שילובקה במחוז דונצק, שהוכחשה בידי צבא אוקראינה.",
    "הדיווחים שלפיהם רוסיה אכן הסכימה למתווה ערבויות ביטחון המבוסס על סעיף חמש.",
    "הערכות מקורות ביטחוניים רוסיים על כוונת אוקראינה לתקוף גשרים במוסקבה וברוסטוב.",
    "היקף הנזק המדויק והזמן הדרוש לשיקום גשר קרים."
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
     "value": 1.0992,
     "unit": "USD",
     "change_pct": 0.22,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "שילוב נציגות אירופית מלאה בכל פורמט של שיחות שלום",
      "השגת ערבויות ביטחון מוצקות ושימור הריבונות הטריטוריאלית"
     ],
     "inferred": [
      "שיבוש צירי אספקה לוגיסטיים חיוניים של הצבא הרוסי בקרים",
      "מניעת הגעה להסדרים הנכפים עליה במשא ומתן בין המעצמות ללא מעורבותה"
     ],
     "forecast": [
      "המשך ניסיונות לפגוע בעומק תשתיות התחבורה והאנרגיה הרוסיות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "תגובה מכאיבה על הפגיעה בגשר קרים",
      "סירוב לקדם הפסקות אש או משא ומתן בעקבות התקיפות על הגשר"
     ],
     "inferred": [
      "הפעלת לחץ צבאי מוגבר על תשתיות ומטרות דיפלומטיות בקייב",
      "ניסיון להגיע להבנות ישירות מול ארצות הברית תוך עקיפת קייב ואירופה"
     ],
     "forecast": [
      "החרפת גלי התקיפה באמצעות כטב\"מים וטילים לעבר מטרות בעורף האוקראיני"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "חתירה לסיום מהיר של המלחמה כדי לעצור את הרג בני האדם",
      "קידום תוכנית שגשוג וביטחון לאוקראינה לאחר המלחמה"
     ],
     "inferred": [
      "צמצום ההוצאה הכספית והסיוע הצבאי הישיר לאוקראינה",
      "הפעלת לחץ על מדינות אירופה לקחת על עצמן את עיקר המימון"
     ],
     "forecast": [
      "המשך דחיפה למשא ומתן להפסקת אש תוך התניית ערבויות באינטרס אמריקני"
     ]
    },
    {
     "actor": "מדינות אירופה",
     "declared": [
      "שמירה על ריבונות אוקראינה כחלק מביטחון אירופה",
      "דרישה למשא ומתן מרובע בהשתתפות אירופה, אוקראינה, ארצות הברית ורוסיה"
     ],
     "inferred": [
      "חשש מהסכם אמריקני-רוסי שיפגע במבנה הביטחון האירופי",
      "בחינת אפשרות להקלה מדורגת בעיצומים בתמורה להתקדמות בהסדר"
     ],
     "forecast": [
      "התגברות המאמצים הדיפלומטיים לביסוס מקומן סביב שולחן המשא ומתן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq20xg80ly47o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-19T19:09:54+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/19/china-russia-us-agree-peace-statement-no-mention-ukraine-iran-wars",
     "accessed_at": "2026-11-19T19:09:54+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-deploys-experimental-laser-air-defense-system-in-kyiv/",
     "accessed_at": "2026-11-19T19:09:54+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/11/19/u-s-charges-25-year-old-russian-with-spying-on-palantir-employees-he-photographed-their-laptops-in-a-coffee-shop-and-tracked-their-movements",
     "accessed_at": "2026-11-19T19:09:54+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/19/8063697/",
     "accessed_at": "2026-11-19T19:09:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T03:40:32+00:00",
  "changes": {
   "UKRAINE-11191909-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפה חוזרת על גשר קרים ופגיעה בחלק המסילתי",
    "score": 1.0
   },
   "UKRAINE-11191909-02": {
    "kind": "new"
   },
   "UKRAINE-11191909-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פסגה משולשת בעיר שנג'ן בהשתתפות מנהיגי ארה\"ב, סין ורוסיה",
    "score": 1.0
   },
   "UKRAINE-11191909-04": {
    "kind": "possible",
    "prev": "פגיעה נרחבת בבתי זיקוק לנפט ברוסיה בעקבות תקיפות כטב\"מים אוקראיניים",
    "score": 0.467
   },
   "UKRAINE-11191909-05": {
    "kind": "new"
   },
   "UKRAINE-11191909-06": {
    "kind": "new"
   },
   "UKRAINE-11191909-07": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-19T1919__north-202611191919.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-19T19:19:38+00:00",
   "window": {
    "from": "2026-11-18T19:19:38+00:00",
    "to": "2026-11-19T19:19:38+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611191919"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות סיכול ישראלית נגד ניסיונות חזבאללה לשקם אתרי ייצור ואחסון אמל\"ח בבקעת הלבנון ולסכל הברחות נשק מסוריה. בלבנון ניכרת מתיחות סביב יישום הסכם המסגרת והקריאות להחלת בלעדיות נשק בידי הצבא. במקביל, בסוריה מקדם הממשל בראשות אחמד א-שרע שיקום תשתיות ומינויים כלכליים, לצד שיתוף פעולה תשתיתי עם טורקיה בגבול וחששות בקרב המיעוט הנוצרי מאירועי אלימות.",
   "fronts": [
    {
     "name": "גבול ישראל-לבנון ובקעת הלבנון",
     "status": "צה\"ל מבצע תקיפות ממוקדות בבקאע ובדרום לבנון למניעת שיקום אתרי אמצעי לחימה וסיכול הברחות, תוך הצהרה על מחויבות להפסקת אש, בעוד חזבאללה וגורמים בלבנון מוחים על פגיעה בריבונות"
    },
    {
     "name": "גבול סוריה-לבנון",
     "status": "מאמצים ישראליים לסכל הברחות נשק מסוריה ללבנון באמצעות תקיפות אוויריות במרחב ג'נתא"
    },
    {
     "name": "גבול טורקיה-סוריה",
     "status": "טורקיה מקדמת הסדרים תשתיתיים ומבצעת פינוי מוקשים לאורך מסילת הרכבת הבין-מדינתית לחידוש הסחר והתחבורה"
    },
    {
     "name": "פנים סוריה (חומס והמרכז)",
     "status": "ממשל חדש בראשות אחמד א-שרע מקדם פרויקטי שיקום תשתיות באל-קוסייר, במקביל למתיחות עדתית ופגיעות באוכלוסייה הנוצרית"
    }
   ],
   "events": [
    {
     "id": "NORTH-11191919-01",
     "title": "תקיפת צה\"ל נגד אתר לייצור ואחסון אמצעי לחימה של חזבאללה בג'נתא",
     "summary": "חיל האוויר הישראלי ביצע תקיפות אוויריות באזור ג'נתא שבבקאע נגד אתר ששימש בעבר לייצור ולאחסון אמצעי לחימה של חזבאללה, זאת לאחר שזוהו פעילי הארגון מגיעים למקום כדי לשקמו.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T15:03:34+00:00",
     "last_update_at": "2026-11-19T18:00:39+00:00",
     "what_is_not_verified": "מספר התקיפות המדויק (מקורות לבנוניים טוענים לשש תקיפות) ומצב הפגיעה המלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25660",
       "published_at": "2026-11-19T17:59:48+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133922",
       "published_at": "2026-11-19T18:00:39+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1390357",
       "published_at": "2026-11-19T17:59:44+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968784/israeli-army-claims-it-struck-former-hezbollah-missile-facility-in-leb/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968784",
       "published_at": "2026-11-19T15:03:34+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      }
     ]
    },
    {
     "id": "NORTH-11191919-02",
     "title": "תקיפות חיל האוויר הישראלי בא-נבי שית ובטלוסה",
     "summary": "כלי טיס ישראליים ביצעו תקיפות באזור א-שערא בפאתי א-נבי שית ברכס הרי מזרח לבנון, וכן תקיפה באזור טלוסה בדרום לבנון.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:31:16+00:00",
     "last_update_at": "2026-11-19T17:46:46+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בתקיפות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_9431358af6b688de",
       "url": "https://english.almanar.com.lb/article/152862/",
       "published_at": "2026-11-19T17:46:46+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_0683fd3fe311d9f7",
       "url": "https://english.almanar.com.lb/article/152842/",
       "published_at": "2026-11-19T17:31:16+00:00"
      }
     ],
     "places": [
      {
       "name": "טלוסה, לבנון",
       "lat": 33.2295,
       "lon": 35.489
      }
     ]
    },
    {
     "id": "NORTH-11191919-03",
     "title": "תקיפת צה\"ל לסיכול משלוח אמצעי לחימה מסוריה ללבנון",
     "summary": "חיל האוויר הישראלי תקף משלוח אמצעי לחימה במרחב ג'נתא בגבול לבנון וסוריה שנועד לארגון חזבאללה.",
     "axis": "סוריה-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T17:30:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:30:18+00:00",
     "last_update_at": "2026-11-19T18:00:39+00:00",
     "what_is_not_verified": "סוג אמצעי הלחימה המדויק ורמת ההשמדה של המשאית או המשלוח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133919",
       "published_at": "2026-11-19T17:30:18+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133922",
       "published_at": "2026-11-19T18:00:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      }
     ]
    },
    {
     "id": "NORTH-11191919-04",
     "title": "טורקיה החלה במבצע לפינוי מוקשים לאורך מסילת הרכבת בגבול סוריה",
     "summary": "המרכז הלאומי לפינוי מוקשים של משרד ההגנה הטורקי החל בעבודות לפינוי מוקשים לאורך מסילת רכבת בגבול עם סוריה, במטרה לשקם את התוואי וחיבור הרשת לחלב.",
     "axis": "טורקיה-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T18:01:00+00:00",
     "last_update_at": "2026-11-19T18:01:00+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים לסיום השיקום של המסילה לעבר חלב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/turkey-starts-demining-railway-line-along-border-syria",
       "published_at": "2026-11-19T18:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "איסלאחייה, טורקיה",
       "lat": 37.0307,
       "lon": 36.6369
      }
     ]
    },
    {
     "id": "NORTH-11191919-05",
     "title": "פרויקט פינוי הריסות ופתיחת צירים באל-קוסייר שבמחוז חומס",
     "summary": "רשויות מחוז חומס החלו במיזם לפינוי הריסות ופתיחת צירים בעשרות אתרים באזור אל-קוסייר וסביבתה כדי לאפשר חזרת עקורים.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T15:53:37+00:00",
     "last_update_at": "2026-11-19T15:53:37+00:00",
     "what_is_not_verified": "מועד הסיום המלא של הפרויקט ועמידה ביעדי התקציב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_b3a7bdef3ee30076",
       "url": "https://english.enabbaladi.net/archives/2026/11/syrias-homs-governorate-begins-clearing-rubble-at-75-sites/",
       "published_at": "2026-11-19T15:53:37+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-קוסייר, סוריה",
       "lat": 34.5107,
       "lon": 36.5769
      },
      {
       "name": "חומס, סוריה",
       "lat": 34.7333,
       "lon": 36.7167
      }
     ]
    },
    {
     "id": "NORTH-11191919-06",
     "title": "הצהרת שר החוץ הטורקי על תמיכה באחדות סוריה ושילוב כוחות כורדיים",
     "summary": "שר החוץ של טורקיה חקאן פידאן הצהיר על תמיכת אנקרה במאמצי הממשל הסורי להחיל סמכות מדינתית ברחבי סוריה ולשלב את כוחות הארגון הכורדי.",
     "axis": "טורקיה-סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T09:52:00+00:00",
     "last_update_at": "2026-11-19T09:52:00+00:00",
     "what_is_not_verified": "תגובת הממשל הסורי או הארגונים הכורדיים להצהרה זו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/ankara-backs-stable-unified-syria-ypg-integration-fm-fidan/news",
       "published_at": "2026-11-19T09:52:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11191919-07",
     "title": "הצהרת צבא לבנון על עדיפות פירוז הנשק וביסוס הריבונות",
     "summary": "צבא לבנון פרסם איגרת לקראת יום העצמאות שבה הדגיש כי החזרת הריבונות והבלעדיות על החזקת נשק בידי המדינה נותרו בעדיפות עליונה, לצד המשך פריסתו בדרום המדינה.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T14:11:31+00:00",
     "last_update_at": "2026-11-19T14:11:31+00:00",
     "what_is_not_verified": "יכולת האכיפה המעשית של צבא לבנון ביחס לנשק חזבאללה בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968780/lebanese-army-on-independence-day-restoring-sovereignty-and-placing-we/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968780",
       "published_at": "2026-11-19T14:11:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ירזה, לבנון",
       "lat": 33.8309,
       "lon": 35.5551
      }
     ]
    },
    {
     "id": "NORTH-11191919-08",
     "title": "גינוי מנהיגי כנסיות בסוריה למעשי אלימות וחטיפות נגד נוצרים",
     "summary": "ראשי כנסיות בסוריה פרסמו הודעה משותפת שבה גינו תקיפות וחטיפות נגד נוצרים, כולל תקיפת ארכיבישוף בחומס וחטיפת אזרח בא-סוקילבייה, והאשימו את הרשויות באוזלת יד.",
     "axis": "סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T18:04:29+00:00",
     "last_update_at": "2026-11-19T18:04:29+00:00",
     "what_is_not_verified": "זהות התוקפים והחוטפים במקרים שצוינו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-church-leaders-condemn-attacks-against-christians",
       "published_at": "2026-11-19T18:04:29+00:00"
      }
     ],
     "places": [
      {
       "name": "חומס, סוריה",
       "lat": 34.7333,
       "lon": 36.7167
      }
     ]
    },
    {
     "id": "NORTH-11191919-09",
     "title": "מינויים כלכליים חדשים של נשיא סוריה",
     "summary": "נשיא סוריה אחמד א-שרע מינה את אחמד רוואד רמדאן לשר הכלכלה וסחר החוץ, ואת מוחמד נידאל א-שעאר ליועץ נשיאותי לענייני כלכלה ופיננסים.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T15:10:33+00:00",
     "last_update_at": "2026-11-19T15:10:33+00:00",
     "what_is_not_verified": "האם שר הכלכלה החדש ניתק את כל קשריו עם חברות עסקיות בטורקיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/syria-names-ramadan-economy-minister-al-shaar-adviser/",
       "published_at": "2026-11-19T15:10:33+00:00"
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
    "מספר התקיפות המדויק שבוצעו במרחב ג'נתא וא-נבי שית (מקורות לבנוניים טוענים לשש תקיפות, אל-מנאר לארבע)",
    "זהות הגורמים החמושים שביצעו תקיפות וחטיפות נגד נוצרים במחוזות חומס וחמאת בסוריה",
    "מידת ההתקדמות של צבא לבנון בהחלת פיקוח בלעדי על אמצעי הלחימה בדרום המדינה"
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת שיקום יכולות חזבאללה וסיכול איומים על אזרחי ישראל וכוחות צה\"ל",
      "מחויבות להסכם הפסקת האש תוך אכיפת מניעת הפרות"
     ],
     "inferred": [
      "מניעת התבססות מחדש של תשתיות צבאיות ארוכות טווח של חזבאללה בעומק לבנון"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות בבקאע ובגבול סוריה בכל זיהוי של פעילות שיקום או ניסיונות הברחה"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "גינוי תקיפות ישראל ודרישה מממשלת לבנון להגיב על הפרות הריבונות"
     ],
     "inferred": [
      "מיקוד בהישרדות, שיקום מלאי הרקטות והאמל\"ח והברחת נשק מסוריה במימון חיצוני"
     ],
     "forecast": [
      "המשך ניסיונות שיקום חשאיים של אתרים חיוניים והימנעות זמנית מפתיחה בעימות רחב"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "תמיכה באחדות סוריה והחלת ריבונות המדינה",
      "חיבור מסילות ברזל ופיתוח קשרי תחבורה ומסחר בין טורקיה לסוריה"
     ],
     "inferred": [
      "נטרול האוטונומיה הכורדית באמצעות שילוב כוחות כורדיים במנגנוני המדינה הסורית"
     ],
     "forecast": [
      "העמקת המעורבות הכלכלית בצפון סוריה והשלמת פרויקט מסילת הרכבת לאזור חלב"
     ]
    },
    {
     "actor": "צבא וממשלת לבנון",
     "declared": [
      "השבת הריבונות המלאה על כלל שטח המדינה והחזקת נשק בלעדית בידי המדינה",
      "המשך פריסת כוחות הצבא בדרום לבנון"
     ],
     "inferred": [
      "ניסיון לתמרן בין דרישות בינלאומיות לפירוז הדרום לבין החשש ממלחמת אזרחים פנימית"
     ],
     "forecast": [
      "המשך פריסה הדרגתית בדרום תוך הימנעות מעימות מזוין ישיר מול חזבאללה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/152842/",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/ankara-backs-stable-unified-syria-ypg-integration-fm-fidan/news",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/syria-names-ramadan-economy-minister-al-shaar-adviser/",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968780/lebanese-army-on-independence-day-restoring-sovereignty-and-placing-we/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968780",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1390357",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-church-leaders-condemn-attacks-against-christians",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133922",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25660",
     "accessed_at": "2026-11-19T19:19:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T00:48:28+00:00",
  "changes": {
   "NORTH-11191919-01": {
    "kind": "new"
   },
   "NORTH-11191919-02": {
    "kind": "new"
   },
   "NORTH-11191919-03": {
    "kind": "new"
   },
   "NORTH-11191919-04": {
    "kind": "new"
   },
   "NORTH-11191919-05": {
    "kind": "new"
   },
   "NORTH-11191919-06": {
    "kind": "possible",
    "prev": "הצהרת שר החוץ הסורי על הסכם ההפרדה",
    "score": 0.467
   },
   "NORTH-11191919-07": {
    "kind": "new"
   },
   "NORTH-11191919-08": {
    "kind": "possible",
    "prev": "גינוי קטארי על פעולות ישראל בסוריה",
    "score": 0.467
   },
   "NORTH-11191919-09": {
    "kind": "new"
   }
  }
 }
};
