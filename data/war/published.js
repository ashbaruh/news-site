/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-08T1752__yemen-202610081752.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-08T17:52:09+00:00",
   "window": {
    "from": "2026-10-07T17:52:09+00:00",
    "to": "2026-10-08T17:52:09+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610081752"
   },
   "summary": "הלחימה בתימן ובמרחב הסעודי מתאפיינת בהסלמה משמעותית, כאשר המורדים החות'ים מרחיבים את תקיפותיהם האוויריות באמצעות טילים וכלי טיס בלתי מאוישים לעבר שדות תעופה מרכזיים בסעודיה ובריאד הבירה, וגורמים לשיבושי תעופה בינלאומיים ולפגיעה בתשתיות ובכלי טיס. במקביל, כוחות ממשלת תימן הנתמכים בידי סעודיה מנהלים מתקפת נגד קרקעית באזור תעז ובחופים אסטרטגיים, בעוד שסעודיה פועלת לגייס תמיכה אזורית והגנתית מבעלות ברית כמו טורקיה ופקיסטן במסגרת הסכמי הגנה משותפים.",
   "fronts": [
    {
     "name": "חזית תימן פנים (תעז ועדן)",
     "status": "פעילה ומתחדשת"
    },
    {
     "name": "חזית סעודיה-תימן (תקיפות אוויריות על סעודיה)",
     "status": "הסלמה חריפה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10081752-01",
     "title": "השתלטות החות'ים באזורים סביב תעז ופגיעה באספקה",
     "summary": "החות'ים השתלטו על אזורים מדרום לעיר תעז, ניתקו אותה מדרכי האספקה המרכזיות וגרמו למחסור במזון, מים וגז לתושבים.",
     "axis": "זירת תימן פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T17:30:34+00:00",
     "last_update_at": "2026-10-08T17:30:34+00:00",
     "what_is_not_verified": "היקף מדויק של הנזק הכלכלי ומספר התושבים המדויק שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-besieged-taiz-locals-despair-lack-food-water-and-gas",
       "published_at": "2026-10-08T17:30:34+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-10081752-02",
     "title": "תקיפות חות'יות נגד שדות תעופה בסעודיה ופגיעה במטוסים",
     "summary": "החות'ים תקפו באמצעות טילים בליסטיים וכלי טיס את שדות התעופה ריאד, אבהא וניג'ראן, וגרמו לנזק כבד למטוסים ולתשתיות אזרחיות.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T03:02:35+00:00",
     "last_update_at": "2026-10-08T16:46:32+00:00",
     "what_is_not_verified": "מספר המטוסים המדויק שנפגעו באופן קטסטרופלי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/lufthansa-indian-airlines-suspend-flights-riyadh-after-houthi-attacks",
       "published_at": "2026-10-08T16:46:32+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/least-one-plane-severely-damaged-houthis-claim-third-riyadh-airport",
       "published_at": "2026-10-08T16:30:27+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48362",
       "published_at": "2026-10-08T15:51:59+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lufthansa-air-india-suspend-flights-riyadh-airport-after-houthi-attacks",
       "published_at": "2026-10-08T15:42:03+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bk1tjgroge",
       "published_at": "2026-10-08T15:33:57+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-no-iran-attack-midterms-houthi-strikes-saudi",
       "published_at": "2026-10-08T14:48:37+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/8/saudi-led-coalition-says-it-intercepts-three-houthi-ballistic-missiles?traffic_source=rss",
       "published_at": "2026-10-08T14:43:19+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153681",
       "published_at": "2026-10-08T13:04:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-warn-staff-leave-saudi-oil-sites",
       "published_at": "2026-10-08T12:38:11+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cwn8d5rx22rdo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-08T03:32:35+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261008-saudi-arabia-strikes-deadly-houthi-attacks-airports",
       "published_at": "2026-10-08T03:02:35+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אבהא, סעודיה",
       "lat": 18.2164,
       "lon": 42.5044
      },
      {
       "name": "חמיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10081752-03",
     "title": "יירוט טילים בליסטיים על ידי הקואליציה הסעודית",
     "summary": "הקואליציה בהובלת סעודיה דיווחה על יירוט והשמדת שלושה טילים בליסטיים ששוגרו לעבר הבירה ריאד ואזורים נוספים.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T13:04:15+00:00",
     "last_update_at": "2026-10-08T14:43:19+00:00",
     "what_is_not_verified": "המספר המדויק של הטילים שלא יורטו במלואם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_c660bb7219cdbcf7",
       "url": "https://www.aljazeera.com/news/2026/10/8/saudi-led-coalition-says-it-intercepts-three-houthi-ballistic-missiles?traffic_source=rss",
       "published_at": "2026-10-08T14:43:19+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://www.sabanew.net/viewstory/153681",
       "published_at": "2026-10-08T13:04:15+00:00"
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
     "id": "YEMEN-10081752-04",
     "title": "תקיפת שדה התעופה בעדן בידי החות'ים",
     "summary": "כוחות חות'יים ירו טילים וחומרי נפץ לעבר נמל התעופה המרכזי בעדן רגע לפני נחיתת מטוס הנוסעים מקהיר, מה שהוביל להסיט את הטיסה לג'דה.",
     "axis": "זירת תימן פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T19:45:47+00:00",
     "last_update_at": "2026-10-07T19:45:47+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לתשתיות נמל התעופה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/07/houthi-forces-slow-advance-south-west-yemen-taiz-aden-airport",
       "published_at": "2026-10-07T19:45:47+00:00"
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
     "id": "YEMEN-10081752-05",
     "title": "התקדמות כוחות ממשלת תימן הנתמכים בידי סעודיה במערב תעז",
     "summary": "כוחות ממשלת תימן הנתמכים בידי סעודיה דיווחו על התקדמות ברכסי ההרים במערב תעז כחלק ממבצע שחר תימן.",
     "axis": "זירת תימן פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T06:16:53+00:00",
     "last_update_at": "2026-10-08T14:48:37+00:00",
     "what_is_not_verified": "הצלחתם המלאה של השטחים שנכבשו מחדש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-no-iran-attack-midterms-houthi-strikes-saudi",
       "published_at": "2026-10-08T14:48:37+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-advances-gaza-marks-three-years-genocide",
       "published_at": "2026-10-08T06:16:53+00:00"
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
     "id": "YEMEN-10081752-06",
     "title": "ביטול טיסות בינלאומיות לריאד בעקבות האיומים החות'יים",
     "summary": "חברות תעופה בהן לופטהנזה וחברות הודיות הודיעו על השעיית טיסותיהן לריאד עקב האיומים החות'יים על נמל התעופה של הבירה הסעודית.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T15:33:57+00:00",
     "last_update_at": "2026-10-08T16:46:32+00:00",
     "what_is_not_verified": "משך ההשעיה המלא מעבר לתאריכים שנקבעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_94defbf73519bde2",
       "url": "https://www.al-monitor.com/originals/2026/10/lufthansa-indian-airlines-suspend-flights-riyadh-after-houthi-attacks",
       "published_at": "2026-10-08T16:46:32+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_349756eaa38e3186",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lufthansa-air-india-suspend-flights-riyadh-airport-after-houthi-attacks",
       "published_at": "2026-10-08T15:42:03+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_94defbf73519bde2",
       "url": "https://www.ynet.co.il/news/article/bk1tjgroge",
       "published_at": "2026-10-08T15:33:57+00:00"
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
     "id": "YEMEN-10081752-07",
     "title": "הצהרת טורקיה כי הגנתה על סעודיה במסגרת ברית מכה היא הגנתית בלבד",
     "summary": "שר החוץ הטורקי האקאן פידאן הבהיר כי הסכם ההגנה המשותף עם סעודיה ופקיסטן (ברית מכה) הוא הגנתי בלבד ושלילת השתתפות במתקפות התקפיות על תימן.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T13:07:34+00:00",
     "last_update_at": "2026-10-08T15:31:09+00:00",
     "what_is_not_verified": "היקף פריסת הכוחות בפועל בתוך סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_cba61cae3044a0f9",
       "url": "https://www.middleeasteye.net/news/turkey-rules-out-launching-attacks-yemen-saudi-arabia",
       "published_at": "2026-10-08T15:31:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_9fb967f71b2845f8",
       "url": "https://www.al-monitor.com/originals/2026/10/turkeys-foreign-minister-says-ankara-weighing-saudi-defence-support-rules-out",
       "published_at": "2026-10-08T13:46:32+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_8971e6be6970ff79",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-assesses-defensive-support-saudi-arabia-amid-houthi-attacks",
       "published_at": "2026-10-08T13:07:34+00:00"
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
    },
    {
     "id": "YEMEN-10081752-08",
     "title": "הכחשת משרד ההגנה הסורי על שליחת כוחות לתימן",
     "summary": "משרד ההגנה של סוריה הכחיש שקיים מהלך של שליחת כוחות צבא סורים לתימן להשתתפות בלחימה לצד הקואליציה הסעודית.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T13:05:06+00:00",
     "last_update_at": "2026-10-08T13:05:06+00:00",
     "what_is_not_verified": "האם התקיימו דיונים חשאיים קודמים בין מנהיגי סוריה וסעודיה בנושא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_e9acf4f2486fc727",
       "url": "https://www.newarab.com/news/syria-denies-troops-will-be-sent-yemen",
       "published_at": "2026-10-08T13:05:06+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
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
    "הטענה לפיה מטוסי קרב פקיסטניים השתתפו בפעולות תקיפה בתימן",
    "הדיווחים על היקף הנזק המדויק והרס של שלושה מטוסים בנמל התעופה של ריאד",
    "האם התקיימה עסקת שליחת כוחות סורים לתימן בעקבות פגישת מנהיגי סוריה וסעודיה"
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
     "value": 3.0773,
     "unit": "ILS",
     "change_pct": 0.31,
     "source_id": "src_ecb",
     "as_of": "2026-10-08T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "תקיפת מתקנים אסטרטגיים ושדות תעופה בבירת סעודיה ריאד ובערים נוספות",
      "יצירת מצור אווירי על סעודיה והרחקת חברות תעופה ומפעילי אנרגיה"
     ],
     "inferred": [
      "הפעלת לחץ כבד על סעודיה ועל הקואליציה כדי להקשות על תפקודן הכלכלי והמדיני",
      "בלימת התקדמות כוחות הממשלה התימנית בקרקע באמצעות הסחת דעת אסטרטגית"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר יעדים אזרחיים ותשתיות בסעודיה",
      "ניסיונות להדק את המצור על ערים מרכזיות בתימן כגון תעז"
     ]
    },
    {
     "actor": "סעודיה והקואליציה בהובלתה",
     "declared": [
      "יירוט מתקפות טילים מצד החות'ים והגנה על המרחב האווירי והבירה ריאד",
      "תמיכה בממשלת תימן הרשמית לשחרור שטחים והחזרת השליטה במדינה"
     ],
     "inferred": [
      "חיפוש מעטפת הגנה אזורית עמוקה יותר מול האיומים החות'יים הבלתי פוסקים",
      "ניסיון לבלום את התעוזה החות'ית באמצעות שילוב כוחות קבצה מקומיים וכוחות חיצוניים דפנסיביים"
     ],
     "forecast": [
      "הגברת שיתופי הפעולה הביטחוניים במסגרת ברית מכה עם טורקיה ופקיסטן",
      "המשך פעולות תגמול קרקעיות ואוויריות בתימן"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הגבלת המעורבות הצבאית בסעודיה למטרות הגנה בלבד במסגרת ברית מכה",
      "אי-השתתפות בפעולות התקפיות או שימוש בשטחי סעודיה לתקיפת תימן"
     ],
     "inferred": [
      "רצון להפגין סולידריות אזורית עם סעודיה מבלי להיגרר למלחמה ישירה ויקרה בתימן",
      "שמירה על גמישות דיפלומטית המונעת הסתבכות צבאית ממושכת"
     ],
     "forecast": [
      "פריסת מערכות הגנה אווירית וצוותים טכניים בסעודיה",
      "אישור הסכם ההגנה בפרלמנט הטורקי ללא הרחבת המנדט למתקפות התקפיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/8/saudi-led-coalition-says-it-intercepts-three-houthi-ballistic-missiles?traffic_source=rss",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/turkeys-foreign-minister-says-ankara-weighing-saudi-defence-support-rules-out",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwn8d5rx22rdo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261008-saudi-arabia-strikes-deadly-houthi-attacks-airports",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/07/houthi-forces-slow-advance-south-west-yemen-taiz-aden-airport",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-assesses-defensive-support-saudi-arabia-amid-houthi-attacks",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-denies-troops-will-be-sent-yemen",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153681",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48362",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bk1tjgroge",
     "accessed_at": "2026-10-08T17:52:09+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T23:41:43+00:00",
  "changes": {
   "YEMEN-10081752-01": {
    "kind": "new"
   },
   "YEMEN-10081752-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים ורחפנים על נמלי תעופה בסעודיה",
    "score": 0.817
   },
   "YEMEN-10081752-03": {
    "kind": "new"
   },
   "YEMEN-10081752-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פגיעה בנמל התעופה בעדן",
    "score": 1.0
   },
   "YEMEN-10081752-05": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפות הקואליציה בראשות סעודיה ומבצעי ממשלת תימן",
    "score": 0.65
   },
   "YEMEN-10081752-06": {
    "kind": "new"
   },
   "YEMEN-10081752-07": {
    "kind": "new"
   },
   "YEMEN-10081752-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-08T0635__iran-202610080635.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-08T06:35:12+00:00",
   "window": {
    "from": "2026-10-07T06:35:12+00:00",
    "to": "2026-10-08T06:35:12+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610080635"
   },
   "summary": "הזירה מתאפיינה במתיחות גבוהה בין איראן לבין ארה\"ב וישראל, הכוללת דיווחים על היערכות אפשרית לחידוש הלחימה וחילופי האשמות סביב השליטה במצרי הורמוז והסנקציות הכלכליות. במקביל, נמשכים שיבושים בנתיבי השיט והאנרגיה האזוריים לצד מגעים דיפלומטיים עקיפים וניסיונות גישור.",
   "fronts": [
    {
     "name": "חזית איראן - ארה\"ב וישראל",
     "status": "פעיל / מתיחות לקראת עימח"
    },
    {
     "name": "חזית המפרץ ומצר הורמוז",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-10080635-01",
     "title": "פגיעה במכלית נפט מול חופי קטאר ועליות בהתקפות במצרי הורמוז",
     "summary": "סוכנות ימית דיווחה על פגיעה במכלית במספר קליעים מול חופי קטאר ועל עלייה בהתקפות על כלי שיט במצר הורמוז.",
     "axis": "ציר איראן-ארה\"ב-ישראל והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T02:48:25+00:00",
     "last_update_at": "2026-10-08T02:48:25+00:00",
     "what_is_not_verified": "פרטים מלאים על זהות התוקפים ונזקים מדויקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_ukmto",
       "url": "https://www.aljazeera.com/news/2026/10/8/tanker-hit-by-multiple-projectiles-off-north-coast-of-qatar-ukmto-says?traffic_source=rss",
       "published_at": "2026-10-08T02:48:25+00:00"
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
     "id": "IRAN-10080635-02",
     "title": "חידוש טיסות בינלאומיות בנמל התעופה הבינלאומי חומייני בטהראן",
     "summary": "טיסות בינלאומיות חודשו בנמל התעופה בטהראן לאחר השעיה ממושכת בזמן מלחמה, עם נחיתת טיסה מא עיראק.",
     "axis": "ציר איראן-ארה\"ב-ישראל והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T04:54:26+00:00",
     "last_update_at": "2026-10-08T04:54:26+00:00",
     "what_is_not_verified": "לא מאומת מצב מלא של כלל חברות התעופה הזרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_1e357306d1933f20",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-resumes-flights-imam-khomeini-international-airport",
       "published_at": "2026-10-08T04:54:26+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי אימאם חומייני, איראן",
       "lat": 35.4165,
       "lon": 51.1448
      }
     ]
    },
    {
     "id": "IRAN-10080635-03",
     "title": "העברת כספים מאיראן לחיזבאללה",
     "summary": "איראן העבירה סכום כספי לחיזבאללה בלבנון לסיוע לפליטי מלחמה, תוך גביית עמלות על ידי מתווכים.",
     "axis": "ציר איראן-ישראל",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T15:48:42+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T15:48:42+00:00",
     "last_update_at": "2026-10-07T16:26:23+00:00",
     "what_is_not_verified": "לא מאומתים כל ערוצי ההעברה המדויקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1j11nkvsmg",
       "published_at": "2026-10-07T16:26:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131526",
       "published_at": "2026-10-07T15:48:42+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "ה",
    "ח",
    "ל",
    "ט",
    "ה",
    "ס",
    "ו",
    "פ",
    "י",
    "ת",
    "ש",
    "ל",
    "ה",
    "נ",
    "ש",
    "י",
    "א",
    "ט",
    "ר",
    "א",
    "מ",
    "פ",
    "ל",
    "צ",
    "א",
    "ת",
    "ל",
    "ת",
    "ק",
    "י",
    "פ",
    "ה",
    "מ"
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
     "value": 3.0679,
     "unit": "ILS",
     "change_pct": 0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה עצמית נחרצת",
      "הצבת תנאים ברורים לסיום העימות והחזרת הביטחון למפרץ"
     ],
     "inferred": [
      "ניסיון לעקוף סנקציות כלכליות ותחבורתיות",
      "המשך תמיכה בשלוחים אזוריים למרות הלחץ הכלכלי"
     ],
     "forecast": [
      "המשך מאמצי הישרדות כלכלית ותמרון דיפלומטי באמצעות מתווכים",
      "שמירה על נוכחות והשפעה במצרי הורמוז ובמרחב הימי"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת נשק גרעיני מאיראן",
      "שליטה ובטוחת תנועה במצרי הורמוז"
     ],
     "inferred": [
      "הפעלת לחץ מקסימלי באמצעות איומי מלחמה וסנקציות להשגת כניעה או תנאים נוחים",
      "בחינת אפשרויות תקיפה נוספות מול התנגדות איראנית"
     ],
     "forecast": [
      "שמירת הכוננות הצבאית הגבוהה באזור",
      "המשך אכיפת סנקציות כלכליות קשות על משק האנרגיה והתחבורה האיראני"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול איומים איראניים ושלוחיהם",
      "שמירה על מוכנות ביטחונית גבוהה"
     ],
     "inferred": [
      "תיאום הדוק עם ארה\"ב לקראת פעולות אפשריות נגד תשתיות ליבה באיראן",
      "מעקב שוטף אחר פעילות חזבאללה וגורמים פרו-איראניים"
     ],
     "forecast": [
      "היערכות להסלמה אפשרית מול איראן ושלוחיה",
      "המשך פעילות מודיעינית ומבצעית במרחב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/8/tanker-hit-by-multiple-projectiles-off-north-coast-of-qatar-ukmto-says?traffic_source=rss",
     "accessed_at": "2026-10-08T06:35:12+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-resumes-flights-imam-khomeini-international-airport",
     "accessed_at": "2026-10-08T06:35:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131526",
     "accessed_at": "2026-10-08T06:35:12+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1j11nkvsmg",
     "accessed_at": "2026-10-08T06:35:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T17:31:50+00:00",
  "changes": {
   "IRAN-10080635-01": {
    "kind": "possible",
    "prev": "סגירת מצר הורמוז לפי הצהרת משמרות המהפכה",
    "score": 0.633
   },
   "IRAN-10080635-02": {
    "kind": "new"
   },
   "IRAN-10080635-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "העברת כספים מאיראן לחיזבאללה",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-07T2340__ukraine-202610072340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-07T23:40:27+00:00",
   "window": {
    "from": "2026-10-06T23:40:27+00:00",
    "to": "2026-10-07T23:40:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610072340"
   },
   "summary": "הצבא הרוסי מנהל גל תקיפות אוויריות נרחב המשלב טילים ועשרות כטב\"מים נגד שורת מטרות אזרחיות, מבני מגורים ומתקני אנרגיה בערים אוקראיניות, תוך גרימת עשרות הרוגים ושיבושי אספקת חשמל. במקביל, כוחות אוקראינה מגיבים בתקיפות לעומק שטח רוסיה, מיירטים כטב\"מים באמצעים ימיים, ומפעילים לחץ ארטילרי ואווירי באזורי דונבאס וחרסון. במערכת הבינלאומית מעמיק האיחוד האירופי את משטר הסנקציות על תעשיית הביטחון של מוסקבה, חרף יוזמות פוליטיות מקומיות בגרמניה לקרוא לעצירת הסיוע הצבאי.",
   "fronts": [
    {
     "name": "מחוז צ'רניהיב (פרילוקי)",
     "status": "פגיעות טילים קטלניות במבני מגורים ואובדן חיי אדם כבד"
    },
    {
     "name": "מחוז קייב והבירה קייב",
     "status": "תקיפות כטב\"מים וטילים, נזק למפעלי תעשייה ותשתיות, והפסקות חשמל יזומות"
    },
    {
     "name": "מחוז חרסון",
     "status": "תקיפות הדדיות, פגיעות כטב\"מים באזרחים ופגיעה בתשתיות רפואיות בשטחים הכבושים"
    },
    {
     "name": "עומק שטח רוסיה (ריאזאן וסמארה)",
     "status": "תקיפות אוקראיניות נגד מפעלי תעשייה ומתקני נפט"
    },
    {
     "name": "הים השחור",
     "status": "שימוש בכלים ימיים בלתי מאוישים ליירוט איומים אוויריים ושיבוש תנועת שיט"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10072340-01",
     "title": "מתקפת טילים רוסית קטלנית על בניין מגורים בפרילוקי",
     "summary": "פגיעת טיל בבניין מגורים רב-קומתי בעיר פרילוקי שבמחוז צ'רניהיב גבתה את חייהם של לפחות 20 בני אדם, בהם חמישה ילדים, וגרמה לפציעתם של עשרות נוספים ולפעולות חילוץ נרחבות.",
     "axis": "צפון אוקראינה / מחוז צ'רניהיב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:05:39+00:00",
     "last_update_at": "2026-10-07T20:29:00+00:00",
     "what_is_not_verified": "מספר ההרוגים המדויק מדווח במספר גרסאות שנעות בין 9 ל-20 קורבנות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.ukrinform.net/rubric-defense/4172109-emergency-and-rescue-operations-are-ongoing-in-pryluky-and-obukhiv-following-russian-strikes.html",
       "published_at": "2026-10-07T20:29:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://kyivindependent.com/amid-the-rubble-of-a-ukrainian-apartment-building-locals-have-one-wish-for-putins-birthday/",
       "published_at": "2026-10-07T19:30:35+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056915/",
       "published_at": "2026-10-07T18:55:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.bbc.co.uk/news/articles/ckr5ym098vdeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-07T18:12:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.theguardian.com/world/2026/oct/07/ukraine-accuses-russia-of-bombing-apartment-block-as-birthday-gift-for-putin",
       "published_at": "2026-10-07T16:22:44+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.theguardian.com/world/video/2026/oct/07/explosion-in-kyiv-as-russian-missiles-strike-across-ukraine-video",
       "published_at": "2026-10-07T15:44:36+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.ynet.co.il/news/article/skvgya7jme",
       "published_at": "2026-10-07T14:05:39+00:00"
      }
     ],
     "places": [
      {
       "name": "פרילוקי, אוקראינה",
       "lat": 50.5951,
       "lon": 32.3867
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-02",
     "title": "פגיעות כטב\"מים וטילים בתשתיות ובבנייני מגורים באזור קייב",
     "summary": "תקיפות אוויריות פגעו בבניין מגורים בן 12 קומות ברובע דסניאנסקי שבקייב, במפעל תרופות בעיר, וכן במחסן ובמרכז לוגיסטי במחוז קייב, מה שהוביל להפסקות חשמל יזומות ולפציעות בקרב אזרחים.",
     "axis": "מחוז קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T17:18:00+00:00",
     "last_update_at": "2026-10-07T22:00:49+00:00",
     "what_is_not_verified": "היקף הנזק במפעל התרופות טרם פורסם במלואו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-hits-another-kyiv-apartment-building-injuring-4/",
       "published_at": "2026-10-07T22:00:49+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172114-drone-attack-sparks-fire-at-highrise-building-in-kyivs-desnianskyi-district.html",
       "published_at": "2026-10-07T20:57:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056942/",
       "published_at": "2026-10-07T17:54:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056940/",
       "published_at": "2026-10-07T17:44:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056935/",
       "published_at": "2026-10-07T17:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "בוצ'ה, אוקראינה",
       "lat": 50.5503,
       "lon": 30.2107
      },
      {
       "name": "פסטוב, אוקראינה",
       "lat": 50.0799,
       "lon": 29.9163
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-03",
     "title": "פגיעה אוקראינית במפעל ייצור מכונות בריאזאן שברוסיה",
     "summary": "כוחות אוקראיניים פגעו במפעל אסטרטגי המייצר מכונות בעיר ריאזאן בשטח הפדרציה הרוסית.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T23:26:27+00:00",
     "last_update_at": "2026-10-07T23:26:27+00:00",
     "what_is_not_verified": "מידת הנזק ואמצעי הלחימה ששימשו לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48347",
       "published_at": "2026-10-07T23:26:27+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאזאן, רוסיה",
       "lat": 54.6296,
       "lon": 39.7425
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-04",
     "title": "תקיפת כטב\"ם אוקראיני על רכב במחוז חרסון",
     "summary": "תקיפה של כלי טיס בלתי מאויש אוקראיני פגעה ברכב נוסעים סמוך לריקובו שבנפת גניצ'סק, והביאה למותם של אב ל-13 ובתו בת ה-15.",
     "axis": "מחוז חרסון הכבוש",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T16:43:53+00:00",
     "last_update_at": "2026-10-07T17:59:45+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2198981",
       "published_at": "2026-10-07T17:59:45+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2198957",
       "published_at": "2026-10-07T16:43:53+00:00"
      }
     ],
     "places": [
      {
       "name": "ריקובו, אוקראינה",
       "lat": 46.3318,
       "lon": 34.749
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-05",
     "title": "יירוט כטב\"ם שאהד באמצעות כשב\"ם חיל הים האוקראיני",
     "summary": "חיל הים האוקראיני השמיד כלי טיס בלתי מאויש מסוג שאהד תוך שימוש בכלי שיט בלתי מאויש מדגם סרגן 3000 החמוש בעמדת ירי.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T17:26:00+00:00",
     "last_update_at": "2026-10-07T17:26:00+00:00",
     "what_is_not_verified": "המיקום המדויק שבו הופל הכטב\"ם בים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ca26c67cf5004781",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056937/",
       "published_at": "2026-10-07T17:26:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-06",
     "title": "הסכמת שגרירי האיחוד האירופי להרחבת משטר הסנקציות על רוסיה",
     "summary": "שגרירי מדינות האיחוד האירופי הגיעו להסכמה לכלול למעלה מ-1,500 אישים וגופים נוספים, רבים מהם מתעשיית הביטחון הרוסית, ברשימת הסנקציות נגד מוסקבה.",
     "axis": "הזירה המדינית / סנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T16:18:20+00:00",
     "last_update_at": "2026-10-07T16:18:20+00:00",
     "what_is_not_verified": "אישור רשמי של שרי החוץ הצפוי בהמשך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_euronews",
       "url": "https://meduza.io/en/news/2026/10/07/eu-ambassadors-agree-to-largest-ever-expansion-of-russia-sanctions-list-targeting-more-than-1-500-people-and-organizations",
       "published_at": "2026-10-07T16:18:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-07",
     "title": "יוזמת מפלגות ימין ושמאל בגרמניה לעצירת הסיוע לאוקראינה והסרת הסנקציות",
     "summary": "מפלגות אלטרנטיבה לגרמניה והברית של שרה ואגנקנכט, המחזיקות ברוב בפרלמנט של סקסוניה-אנהלט, מקדמות הצעת החלטה הקוראת להפסקת הסיוע הצבאי לקייב ולהסרת העיצומים מעל רוסיה.",
     "axis": "הזירה המדינית הבינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T18:05:00+00:00",
     "last_update_at": "2026-10-07T21:06:08+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/08/germany-s-far-right-afd-and-left-wing-populist-bsw-party-now-hold-a-majority-in-an-eastern-state-parliament-their-first-joint-proposal-end-aid-to-ukraine-and-restore-ties-with-russia",
       "published_at": "2026-10-07T21:06:08+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056945/",
       "published_at": "2026-10-07T18:05:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-08",
     "title": "הרוגים ופצועים במתקפות אוקראיניות על שטח דונצק",
     "summary": "רשויות הרפובליקה העממית של דונצק דיווחו על שלושה תושבים שנהרגו ושמונה שנפצעו כתוצאה מתקיפות אוקראיניות שפגעו במבני מגורים, תשתיות וכלי רכב.",
     "axis": "חזית דונבאס",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T20:58:26+00:00",
     "last_update_at": "2026-10-07T20:58:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2199019",
       "published_at": "2026-10-07T20:58:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-09",
     "title": "הצבת כוחות ליטאים בגבול מובלעת קלינינגרד",
     "summary": "ליטא החליטה לפרוס כוחות לאורך גבולה עם מובלעת קלינינגרד הרוסית כצעד מניעתי בעקבות תקרית בלטביה וחשש מהכרזה רוסית על גיוס.",
     "axis": "הגבול הבלטי-רוסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T22:56:37+00:00",
     "last_update_at": "2026-10-07T22:56:37+00:00",
     "what_is_not_verified": "טיב האותות המעידים על כוונת גיוס ברוסיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/lithuania-to-deploy-troops-along-border-with-russias-kaliningrad-after-latvia-incident/",
       "published_at": "2026-10-07T22:56:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-10",
     "title": "הלאמה וניהול זמני של נכסי חברות זרות ברוסיה",
     "summary": "רשת קמעונאות גרמנית פנתה מיוזמתה לממשל הרוסי בבקשה להכניס את נכסיה לניהול זמני, בהמשך לצווים נשיאותיים קודמים שהעבירו חברות זרות רבות לשליטת מנהלים מקומיים.",
     "axis": "כלכלת מלחמה רוסית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T17:13:38+00:00",
     "last_update_at": "2026-10-07T19:38:36+00:00",
     "what_is_not_verified": "זהות המקור הצרפתי שצוטט לגבי מניעי הפנייה של החברה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/07/le-monde-german-retailer-metro-asks-kremlin-to-place-its-russian-assets-under-temporary-management",
       "published_at": "2026-10-07T19:38:36+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/07/former-german-chancellor-gerhard-schroder-visits-moscow-and-meets-globus-employees-after-becoming-head-of-the-hypermarket-chain-s-supervisory-board",
       "published_at": "2026-10-07T17:13:38+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    }
   ],
   "not_verified": [
    "{'item': 'מניין ההרוגים הכולל באוקראינה באותו יום נמסר בנתונים משתנים (21, 24, 26 או 28 הרוגים).'}",
    "{'item': 'מספר הקורבנות הספציפי במבנה המגורים בפרילוקי נע בדיווחים בין 9 ל-20 הרוגים.'}",
    "{'item': 'אמינות סרטון רחפן FPV שהוגדר כסרטון מבויים על ידי מומחה רשת.'}",
    "{'item': 'קיומם ומשמעותם של איתותים מודיעיניים על כוונה להכריז על גיוס ברוסיה.'}"
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
     "value": 1.1177,
     "unit": "USD",
     "change_pct": -0.82,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "מניעת הרחבת פעילות נאט\"ו והחלשת המשטר בקייב",
      "הפעלת אמצעי ניהול זמני על חברות מערביות כמענה לסנקציות"
     ],
     "inferred": [
      "פגיעה רחבה בעורף האזרחי וברשת החשמל לקראת החורף לצורך שבירת רוח הלחימה האוקראינית",
      "הרחקת הצי והכלים האוקראיניים מנתיבי שיט בים השחור ובים אזוב"
     ],
     "forecast": [
      "המשך מתקפות טילים וכטב\"מים מסיביות על מרכזי אוכלוסייה ותשתיות אסטרטגיות",
      "החרפת הצעדים הכלכליים נגד יתרת החברות המערביות הפועלות ברוסיה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על המרחב האווירי וחופי המדינה ומיצוי הדין בגין פגיעה בריבונות וגזל נכסי תרבות",
      "המשך הגנה על שלמות השטח הלאומי והרחקת הכיבוש"
     ],
     "inferred": [
      "שיבוש שרשראות הייצור והאספקה הצבאיות של מוסקבה באמצעות פגיעה בעומק רוסיה",
      "מינוף תקיפות העורף הקטלניות להגברת הסיוע הצבאי והמימוני מאירופה"
     ],
     "forecast": [
      "המשך שימוש גובר בכשב\"מים חמושים ופיתוח יכולות יירוט ימיות ואוויריות",
      "החרפת המצוקה באספקת החשמל והאנרגיה כתוצאה מההרס בתשתיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckr5ym098vdeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/oct/07/explosion-in-kyiv-as-russian-missiles-strike-across-ukraine-video",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/lithuania-to-deploy-troops-along-border-with-russias-kaliningrad-after-latvia-incident/",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/07/former-german-chancellor-gerhard-schroder-visits-moscow-and-meets-globus-employees-after-becoming-head-of-the-hypermarket-chain-s-supervisory-board",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056945/",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2199019",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48347",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4172114-drone-attack-sparks-fire-at-highrise-building-in-kyivs-desnianskyi-district.html",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skvgya7jme",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T02:59:20+00:00",
  "changes": {
   "UKRAINE-10072340-01": {
    "kind": "new"
   },
   "UKRAINE-10072340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב",
    "score": 1.0
   },
   "UKRAINE-10072340-03": {
    "kind": "new"
   },
   "UKRAINE-10072340-04": {
    "kind": "new"
   },
   "UKRAINE-10072340-05": {
    "kind": "possible",
    "prev": "שחיקה מואצת של מטוסי ה-F-16 של חיל האוויר האוקראיני",
    "score": 0.467
   },
   "UKRAINE-10072340-06": {
    "kind": "new"
   },
   "UKRAINE-10072340-07": {
    "kind": "new"
   },
   "UKRAINE-10072340-08": {
    "kind": "new"
   },
   "UKRAINE-10072340-09": {
    "kind": "new"
   },
   "UKRAINE-10072340-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-07T2357__north-202610072357.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-07T23:57:53+00:00",
   "window": {
    "from": "2026-10-06T23:57:53+00:00",
    "to": "2026-10-07T23:57:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610072357"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחימה מתמשכת בדרום לבנון הכוללת תקיפות והפגזות ישראליות מול פעילות חיזבאללה, לצד אירועי ירי לעבר מוצבי האו\"ם. במקביל, בסוריה נרשמות התפתחויות פנימיות הכוללות הבעת תמיכה בישראל בקרב תושבים בדרום המדינה, לצד ניסיונות אכיפת סדר של צבא לבנון בגבול סוריה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם תקיפות אוויריות, ארטילריה ואירועי גבול"
    },
    {
     "name": "החזית הסורית-לבנונית",
     "status": "גבול המדינות עם פעילות אכיפת חוק ועימותי הברחה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10072357-01",
     "title": "ירי לעבר מוצב גבול של כוח האו\"ם בדרום לבנון",
     "summary": "כוח האו\"ם הזמני בלבנון דיווח כי ירי נשק קל בוצע לעבר מוצב גבול, ללא נפגעים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T19:20:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T19:20:48+00:00",
     "last_update_at": "2026-10-07T23:33:29+00:00",
     "what_is_not_verified": "זהות היורים אינה מפורטת בטקסט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_32a77cb4db92d562",
       "url": "https://www.aljazeera.com/news/2026/10/7/un-peacekeeping-force-in-lebanon-says-shots-fired-at-israeli-border-post?traffic_source=rss",
       "published_at": "2026-10-07T23:33:29+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_32a77cb4db92d562",
       "url": "https://www.aa.com.tr/en/middle-east/un-interim-force-says-gunfire-hit-its-position-in-southern-lebanon/4081444",
       "published_at": "2026-10-07T19:20:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10072357-02",
     "title": "תקיפות והפגזות ישראליות במספר מוקדים בדרום לבנון",
     "summary": "נרשמו תקיפות אוויריות, הפגזות ארטילריה, פעולות הריסה ותנועת רכבים צבאיים במספר עיירות ואזורים בדרום לבנון בהם וואדי אל-סלוקי, אל-מנצורי, נבטיה אל-פוקא, חדאיתה וכונין.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T18:13:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T18:13:22+00:00",
     "last_update_at": "2026-10-07T20:21:41+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינם מפורטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135707/",
       "published_at": "2026-10-07T20:21:41+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135697/",
       "published_at": "2026-10-07T19:16:30+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135687/",
       "published_at": "2026-10-07T19:07:52+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135662/",
       "published_at": "2026-10-07T18:13:22+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "כונין, לבנון",
       "lat": 33.1496,
       "lon": 35.4467
      }
     ]
    },
    {
     "id": "NORTH-10072357-03",
     "title": "שיגור מיירט לעבר מטרת שווא בדרום לבנון",
     "summary": "דובר צה\"ל דיווח כי שוגר מיירט לעבר מטרת שווא שזוהתה במרחב הפעילות של כוחות צה\"ל בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T18:20:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T18:20:19+00:00",
     "last_update_at": "2026-10-07T18:20:19+00:00",
     "what_is_not_verified": "טיב מטרת השווא אינו מפורט מעבר לכך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25312",
       "published_at": "2026-10-07T18:20:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10072357-04",
     "title": "הפגנת תמיכה בישראל בא-סווידאא'",
     "summary": "עשרות תושבים השתתפו בשיירת רכבים ובעצרת תמיכה בישראל בכיכר אל-קרמה בא-סווידאא' שבדרום סוריה, לרגל יום השנה לאירועי שבעה באוקטובר.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T12:19:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T12:19:29+00:00",
     "last_update_at": "2026-10-07T19:43:15+00:00",
     "what_is_not_verified": "לא מאומת היקף התמיכה הציבורית הכולל במחוז מעבר למשתתפים באירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/suwayda-rally-shows-solidarity-with-israel-on-october-7-anniversary/",
       "published_at": "2026-10-07T19:43:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131523",
       "published_at": "2026-10-07T14:58:06+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48327",
       "published_at": "2026-10-07T12:19:29+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא', סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10072357-05",
     "title": "עימותים בין צבא לבנון למבריחים בגבול סוריה",
     "summary": "מקור צבאי דיווח כי התרחשו עימותים באזור ההררי של ערסאל בין צבא לבנון לבין חוליית מבריחים שניסתה לבצע פעולת הברחה מסוריה ללבנון, ללא נפגעים ובסיומם נעצר חשוד אחד.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T10:11:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T10:11:17+00:00",
     "last_update_at": "2026-10-07T10:11:17+00:00",
     "what_is_not_verified": "זהותם המדויקת של המבריחים אינה מפורטת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/961662/lebanese-army-clashes-with-smugglers-along-syria-border-lbci-source/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961662",
       "published_at": "2026-10-07T10:11:17+00:00"
      }
     ],
     "places": [
      {
       "name": "ערסאל, לבנון",
       "lat": 34.1473,
       "lon": 36.4591
      }
     ]
    }
   ],
   "not_verified": [
    "זהות הגורם שביצע את הירי לעבר מוצב האו\"ם בגבול ישראל-לבנון",
    "היקף התמיכה הציבורית הרחב בא-סווידאא' בעצרת התמיכה בישראל"
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
     "value": 3.0679,
     "unit": "ILS",
     "change_pct": 0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "פגיעה בתשתיות צבאיות ובמרחבי הפעילות של חיזבאללה בדרום לבנון",
      "שמירה על ביטחון הגבול הצפוני והרחקת איומים"
     ],
     "forecast": [
      "המשך התקיפות והפעילות המבצעית בדרום לבנון כל עוד נמשך האיום"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות לחימה והיערכות מול הפעילות הצבאית של ישראל בדרום לבנון"
     ],
     "forecast": [
      "המשך פעילות הטרדה והתגוננות מול כוחות צה\"ל בגזרה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/7/un-peacekeeping-force-in-lebanon-says-shots-fired-at-israeli-border-post?traffic_source=rss",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/135662/",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/un-interim-force-says-gunfire-hit-its-position-in-southern-lebanon/4081444",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/suwayda-rally-shows-solidarity-with-israel-on-october-7-anniversary/",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/961662/lebanese-army-clashes-with-smugglers-along-syria-border-lbci-source/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961662",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131523",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48327",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25312",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T06:23:15+00:00",
  "changes": {
   "NORTH-10072357-01": {
    "kind": "new"
   },
   "NORTH-10072357-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ירי ארטילרי עוין לעבר אל-מנסורי בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10072357-03": {
    "kind": "possible",
    "prev": "טיסות מטוסי קרב ישראליים בגובה רב בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10072357-04": {
    "kind": "new"
   },
   "NORTH-10072357-05": {
    "kind": "new"
   }
  }
 }
};
