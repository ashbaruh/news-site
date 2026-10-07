/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-07T0252__yemen-202610070252.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-07T02:52:30+00:00",
   "window": {
    "from": "2026-10-06T02:52:30+00:00",
    "to": "2026-10-07T02:52:30+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610070252"
   },
   "summary": "הלחימה בתימן מתנהלת בין החות'ים לבין הכוחות הממשלתיים הנתמכים בידי סעודיה, לצד התקפות חוזרות ונשנות של החות'ים לעבר שדות תעופה ויעדים בתוך סעודיה. במקביל למתקפות נגד באזורי החוף וסביב מצר באב אל-מנדב, הרחיבו סעודיה, טורקיה ופקיסטן את שיתוף הפעולה הביטחוני ביניהן לבלימת איומים אזוריים.",
   "fronts": [
    {
     "name": "חזית הים האדום ומצר באב אל-מנדב",
     "status": "פעילה עם מתקפות נגד והתקדמות כוחות ממשלתיים"
    },
    {
     "name": "חזית תעז",
     "status": "לחימה קרקעית עצימה והפצצות"
    },
    {
     "name": "הזרועות האוויריות לשטח סעודיה",
     "status": "ירוטי טילים וכטב\"מים סעודיים מול שיגורים חות'יים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10070252-01",
     "title": "ירי טילים לעבר נמל התעופה בעדן",
     "summary": "שגור טילים לעבר נמל התעופה הבינלאומי בעדן ללא נפגעים",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T01:24:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T01:24:50+00:00",
     "last_update_at": "2026-10-07T02:46:40+00:00",
     "what_is_not_verified": "האחריות המדויקת של הירי והנזק אינם מאומתים באופן עצמאי לחלוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_f1000aae2574b5be",
       "url": "https://www.france24.com/en/middle-east/20261007-middle-east-live-houthis-target-airport-in-yemen-as-israel-marks-october-7-anniversary",
       "published_at": "2026-10-07T02:46:40+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_f1000aae2574b5be",
       "url": "https://www.sabanew.net/viewstory/153601",
       "published_at": "2026-10-07T02:13:40+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_f1000aae2574b5be",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/7/two-houthi-missiles-target-yemens-aden-international-airport?traffic_source=rss",
       "published_at": "2026-10-07T01:59:15+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_f1000aae2574b5be",
       "url": "https://www.al-monitor.com/originals/2026/10/houthis-launch-missiles-yemens-aden-airport-fighting-intensifies",
       "published_at": "2026-10-07T01:46:28+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_f1000aae2574b5be",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/aden-official-says-houthi-missiles-targeted-yemens-aden-airport",
       "published_at": "2026-10-07T01:24:50+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי בעדן, תימן",
       "lat": 12.8295,
       "lon": 45.0316
      }
     ]
    },
    {
     "id": "YEMEN-10070252-02",
     "title": "ירוט טיל בליסטי צפונית לריאד",
     "summary": "הקואליציה בהובלת סעודיה יירטה והשמידה טיל בליסטי ששוגר לעבר צפון ריאד",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T02:08:13+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T02:08:13+00:00",
     "last_update_at": "2026-10-07T02:31:11+00:00",
     "what_is_not_verified": "פרטים מלאים על נזק קרקעי אינם מפורטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_a48e03e582b8cc91",
       "url": "https://www.sabanew.net/viewstory/153602",
       "published_at": "2026-10-07T02:31:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a48e03e582b8cc91",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepted-houthi-missile-north-riyadh",
       "published_at": "2026-10-07T02:08:13+00:00"
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
     "id": "YEMEN-10070252-03",
     "title": "פגיעה באזרחים בעיר תעז",
     "summary": "פגזי ארטילריה פגעו בשכונות מגורים במרכז העיר תעז וגרמו לפצועים בקרב אזרחים",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T02:09:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T02:09:14+00:00",
     "last_update_at": "2026-10-07T02:09:14+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת ממקור חיצוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3cae58526e03561c",
       "url": "https://www.sabanew.net/viewstory/153600",
       "published_at": "2026-10-07T02:09:14+00:00"
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
     "id": "YEMEN-10070252-04",
     "title": "תקיפות אוויריות במחוזות אִיב ותעז",
     "summary": "מטוסי סעודיה הפציצו אזורים במחוזות אִיב ותעז",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:25:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T00:25:08+00:00",
     "last_update_at": "2026-10-07T00:25:08+00:00",
     "what_is_not_verified": "היקף הנזק המדויק אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_houthi_associated_media",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/strikes-reported-yemens-ibb-taiz",
       "published_at": "2026-10-07T00:25:08+00:00"
      }
     ],
     "places": [
      {
       "name": "אִיב, תימן",
       "lat": 13.9702,
       "lon": 44.1779
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10070252-05",
     "title": "יירוט טיל בליסטי בחמיס מושייט",
     "summary": "הקואליציה בהובלת סעודיה יירטה טיל בליסטי ששוגר לעבר העיר חמיס מושייט",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T16:07:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T16:07:45+00:00",
     "last_update_at": "2026-10-06T22:04:05+00:00",
     "what_is_not_verified": "מקור השיגור המדויק מעבר לדיווחים הכלליים על צנעא, סעדה ועמראן אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_03c8ce45f49b06ae",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepted-houthi-ballistic-missile",
       "published_at": "2026-10-06T22:04:05+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_03c8ce45f49b06ae",
       "url": "https://www.sabanew.net/viewstory/153579",
       "published_at": "2026-10-06T16:07:45+00:00"
      }
     ],
     "places": [
      {
       "name": "חמיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    }
   ],
   "not_verified": [
    "טענות הצדדים על שליטה מוחלטת בכל שטח כבוש או משוחרר",
    "מספר הנפגעים המדויק בתקיפות השונות בתימן ובסעודיה",
    "היקף התמיכה המעשית המדויקת של טורקיה ופקיסטן במסגרת ברית מכה"
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
     "value": 3.048,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-10-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "שליטה באזורים אסטרטגיים בתימן",
      "תקיפת יעדים ויעדי תעופה בסעודיה"
     ],
     "inferred": [
      "ערעור יציבות הממשלה המוכרת ופגיעה באינטרסים סעודיים",
      "שימור אחיזה בנתיבי הים האדום"
     ],
     "forecast": [
      "המשך שיגורים לעבר סעודיה ותשתיות בתימן",
      "התמודדות עם מתקפות הנגד של הקואליציה"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה והממשלה המוכרת בתימן",
     "declared": [
      "החזרת מוסדות המדינה וסיום ההפיכה של החות'ים",
      "הגנה על שטחי סעודיה ונתיבי השיט הבינלאומיים"
     ],
     "inferred": [
      "דחיקת החות'ים מאזורים חיוניים כמו מצר באב אל-מנדב",
      "הידוק שיתוף הפעולה האזורי במסגרת ברית מכה"
     ],
     "forecast": [
      "הגברת הפעילות ההתקפית בשטח תימן",
      "הפעלת מנגנוני הגנה משותפים עם בעלות ברית חדשות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/7/two-houthi-missiles-target-yemens-aden-international-airport?traffic_source=rss",
     "accessed_at": "2026-10-07T02:52:30+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/houthis-launch-missiles-yemens-aden-airport-fighting-intensifies",
     "accessed_at": "2026-10-07T02:52:30+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261007-middle-east-live-houthis-target-airport-in-yemen-as-israel-marks-october-7-anniversary",
     "accessed_at": "2026-10-07T02:52:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepted-houthi-ballistic-missile",
     "accessed_at": "2026-10-07T02:52:30+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153579",
     "accessed_at": "2026-10-07T02:52:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-06T12:27:07+00:00",
  "changes": {
   "YEMEN-10070252-01": {
    "kind": "new"
   },
   "YEMEN-10070252-02": {
    "kind": "new"
   },
   "YEMEN-10070252-03": {
    "kind": "new"
   },
   "YEMEN-10070252-04": {
    "kind": "new"
   },
   "YEMEN-10070252-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-07T1731__iran-202610071731.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-07T17:31:50+00:00",
   "window": {
    "from": "2026-10-06T17:31:50+00:00",
    "to": "2026-10-07T17:31:50+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610071731"
   },
   "summary": "העימות בין איראן לבין ישראל וארה\"ב נמשך במישור הכלכלי, הימי והגרעיני, כאשר איראן מטילה לחץ על נתיבי השיט במפרץ ובמצר הורמוז וממשיכה לממן את שלוחותיה האזוריים כמו חיזבאללה. במקביל, ארה\"ב וישראל דורשות מאיראן הגבלות משמעותיות בתוכנית הגרעין ותחת חנק סנקציות מנסות למנוע ממנה מקורות מימון, בעוד גורמים באזור מחפשים נתיבי אנרגיה חלופיים.",
   "fronts": [
    {
     "name": "החזית הימית במפרץ ובמצר הורמוז",
     "status": "פעילה ומתוחה עקב תקיפות על מכליות ושליטה איראנית נטענת"
    },
    {
     "name": "חזית הכלכלה והסנקציות",
     "status": "פעילה עם מאמצי חנק אמריקאי מול ייצוא הנפט והמטבע האיראני"
    },
    {
     "name": "חזית השלוחים (לבנון)",
     "status": "פעילה, כוללת העברות כספים לשיקום וסיוע לעקורים"
    },
    {
     "name": "חזית הגרעין",
     "status": "דרישות מערביות להפחתת העשרה מול סירוב איראני"
    }
   ],
   "events": [
    {
     "id": "IRAN-10071731-01",
     "title": "תקיפות מכליות במצר הורמוז",
     "summary": "מקורות ביטחון ימיים מדווחים על עלייה במספר התקיפות, ניסיונות התקיפה וההטרדות נגד מכליות העוברות במצר הורמוז.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:46:33+00:00",
     "last_update_at": "2026-10-07T16:49:05+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לכל כלי השיט אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_joint_maritime_information_center",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/attacks-tankers-hormuz-hit-highest-any-week-start-iran-war",
       "published_at": "2026-10-07T16:49:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_joint_maritime_information_center",
       "url": "https://www.al-monitor.com/originals/2026/10/attacks-tankers-hormuz-hit-highest-any-week-start-iran-war-sources-say",
       "published_at": "2026-10-07T14:46:33+00:00"
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
     "id": "IRAN-10071731-02",
     "title": "העברת כספים מאיראן לחיזבאללה",
     "summary": "איראן העבירה סכום של 200 מיליון דולר לחיזבאללה כדי לסייע לפליטי ולעקורי המלחמה עם ישראל.",
     "axis": "איראן מול ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T15:37:36+00:00",
     "last_update_at": "2026-10-07T16:26:23+00:00",
     "what_is_not_verified": "זהותם המדויקת של כל המתווכים ודרכי הפעולה המלאות לעקוף סנקציות אינן מאומתות במלואן.",
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
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/lebanons-hezbollah-gets-200-million-iran-help-displaced-sources-say",
       "published_at": "2026-10-07T15:46:34+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21575425",
       "published_at": "2026-10-07T15:37:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10071731-03",
     "title": "דרישה אמריקאית לצמצום העשרת אורניום",
     "summary": "סגן נשיא ארה\"ב דרש מאיראן צמצום משמעותי ביכולות העשרת האורניום שלה כתנאי לסיום העימות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:04:34+00:00",
     "last_update_at": "2026-10-07T16:46:28+00:00",
     "what_is_not_verified": "האם מדובר בנסיגה מהדרישה הקודמת לאפס העשרה אינו ברור לגמרי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/explainer-status-irans-uranium-enrichment-programme",
       "published_at": "2026-10-07T16:46:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-enrichment-stance-unclear-vance-urges-meaningful-iran-cuts",
       "published_at": "2026-10-07T14:32:12+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/jd-vance-iran-needs-meaningful-reduction-enrichment-end-war",
       "published_at": "2026-10-07T14:04:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10071731-04",
     "title": "סגירת מצר הורמוז לפי הצהרת משמרות המהפכה",
     "summary": "יועץ למפקד משמרות המהפכה הצהיר כי מצר הורמוז סגור ושכוחות האיראניים שולטים בו לחלוטין עד למילוי דרישותיהם.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T16:11:23+00:00",
     "last_update_at": "2026-10-07T16:11:23+00:00",
     "what_is_not_verified": "מידת השליטה המעשית במצר אל מול תנועת האוניות בפועל אינה מאומתת ממקור עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86286279/Strait-of-Hormuz-will-stay-closed-until-Iran-s-demands-are-met",
       "published_at": "2026-10-07T16:11:23+00:00"
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
     "id": "IRAN-10071731-05",
     "title": "נסיגת ספינות מלחמה זרות מהמפרץ",
     "summary": "בכיר במשמרות המהפכה טען כי ספינות מלחמה זרות נסוגו למרחק של למעלה מאלף קילומטרים מחופי איראן.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T10:55:36+00:00",
     "last_update_at": "2026-10-07T10:55:36+00:00",
     "what_is_not_verified": "הטענה על נסיגת כלל הציים הזרים למרחק של אלף קילומטרים אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/irans-revolutionary-guards-say-foreign-warships-have-retreated-gulf",
       "published_at": "2026-10-07T10:55:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10071731-06",
     "title": "יוזמה עיראקית לייצוא נפט דרך סוריה לעקיפת הורמוז",
     "summary": "עיראק ביקשה מסוריה סיוע בשינוע נפט גולמי במשאיות לחוף הים התיכון כדי לעקוף את מצר הורמוז.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:04:34+00:00",
     "last_update_at": "2026-10-07T16:15:30+00:00",
     "what_is_not_verified": "היקף היצוא המעשי שיועבר בדרך זו בשלב הראשון אינו מאומת לחלוטין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131527",
       "published_at": "2026-10-07T16:15:30+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48329",
       "published_at": "2026-10-07T14:04:34+00:00"
      }
     ],
     "places": [
      {
       "name": "בניאס, סוריה",
       "lat": 35.1851,
       "lon": 35.9478
      }
     ]
    }
   ],
   "not_verified": [
    "היקף נזק מדויק לכל כלי השיט שהותקפו במצר הורמוז",
    "המרחק המדויק שבו נמצאים כל כלי הטיס והשיט הזרים מחופי איראן",
    "לוחות הזמנים והכמויות המדויקות של שינוע הנפט העיראקי דרך סוריה",
    "מידת ההצלחה של תוכנית הבנק המרכזי באיראן לייצוב המטבע באמצעות דולרים מזומנים"
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
      "המשך שליטה במצר הורמוז עד למילוי דרישותיה",
      "תמיכה בשלוחים באזור ובאוכלוסייה המזדהה עמם"
     ],
     "inferred": [
      "שימור יכולות גרעיניות כקלף מיקוח",
      "עקיפת סנקציות כלכליות באמצעות רשתות מתווכים ונתיבים חלופיים"
     ],
     "forecast": [
      "המשך הפעלת לחץ ימי דרך משמרות המהפכה",
      "התמודדות עם לחץ כלכלי חריף על המטבע המקומי"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "דרישה להפחתה משמעותית ביכולות ההעשרה הגרעינית של איראן",
      "פגיעה במקורות המימון של טהרן לטובת פירוק ארגוני טרור וטילים"
     ],
     "inferred": [
      "שמירת חופש השיט במפרץ ובמצר הורמוז",
      "בלימת ההשפעה האיראנית המרחבית באמצעות סנקציות ולחץ צבאי"
     ],
     "forecast": [
      "המשך הלחץ הדיפלומטי והכלכלי לצד נוכחות צבאית במפרץ",
      "מאבק מתמשך נגד הברחות כספים ותשתיות של שלוחות איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-enrichment-stance-unclear-vance-urges-meaningful-iran-cuts",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86286279/Strait-of-Hormuz-will-stay-closed-until-Iran-s-demands-are-met",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21575425",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/irans-revolutionary-guards-say-foreign-warships-have-retreated-gulf",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131527",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48329",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1j11nkvsmg",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T02:40:34+00:00",
  "changes": {
   "IRAN-10071731-01": {
    "kind": "new"
   },
   "IRAN-10071731-02": {
    "kind": "new"
   },
   "IRAN-10071731-03": {
    "kind": "new"
   },
   "IRAN-10071731-04": {
    "kind": "new"
   },
   "IRAN-10071731-05": {
    "kind": "new"
   },
   "IRAN-10071731-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-07T0259__ukraine-202610070259.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-07T02:59:20+00:00",
   "window": {
    "from": "2026-10-06T02:59:20+00:00",
    "to": "2026-10-07T02:59:20+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610070259"
   },
   "summary": "הלחימה מתאפיינת בהסלמה משמעותית של מהלומות אוויריות וימיות הדדיות, כאשר רוסיה מנחיתה תקיפות טילים וכטב\"מים מסיביות על קייב וערי אוקראינה, במקביל למבצעי עומק אוקראיניים נגד מכליות נפט ומתקני זיקוק ברוסיה. זירת הים השחור מתרחבת לעבר נתיבי סחר ומים כלכליים של מדינות זרות, תוך פגיעה בספינות סוחר ועצירת כיסויים ביטוחיים לשיט. ביבשה ובמערכי ההגנה נרשמת שחיקה במערכות אוקראיניות אל מול שימוש הולך וגובר ברובוטים קרקעיים ובכטב\"מים מתקדמים.",
   "fronts": [
    {
     "name": "זירת הים השחור",
     "status": "הסלמה בתקיפות כלי שיט בלתי מאוישים על ספינות סוחר ומיכליות נפט מול חופי סוצ'י ובולגריה"
    },
    {
     "name": "חזית האוויר והעורף האוקראיני",
     "status": "מתקפות טילים וכטב\"מים כבדות מצד רוסיה על קייב ותשתיות עירוניות, לצד שחיקת מטוסי היירוט"
    },
    {
     "name": "חזית העורף ותשתיות האנרגיה ברוסיה",
     "status": "תקיפות כטב\"ם אוקראיניות מתמשכות נגד בתי זיקוק ומאגרי דלק במספר מחוזות"
    },
    {
     "name": "חזית דונצק והמזרח",
     "status": "לוחמת רובוטים וכטב\"מים במסגרת מבצע ויוואלדי סמוך לאנדרייבקה ובאחמוט"
    },
    {
     "name": "חזית הדרום (זפוריז'יה וחרסון)",
     "status": "הפגזות ופגיעות כטב\"מים במחסנים, בגשרים וביישובי מגורים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10070259-01",
     "title": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב",
     "summary": "רוסיה שיגרה מתקפת טילים וכטב\"מים רחבה לעבר הבירה האוקראינית, ופיצוצים עזים נשמעו ברחבי העיר. תושבים תפסו מחסה בתחנות הרכבת התחתית, ומרכז נתונים מקומי הושבת עקב פגיעה.",
     "axis": "חזית האוויר והעורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T21:35:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T21:35:00+00:00",
     "last_update_at": "2026-10-07T01:22:44+00:00",
     "what_is_not_verified": "מספר הטילים והכטב\"מים המדויק ששוגרו ופגעו, וכן היקף הנפגעים והנזק המלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_dcf5f275847203b1",
       "url": "https://www.theguardian.com/world/2026/oct/07/ukraine-war-briefing-zelenskyy-blames-russia-for-attack-on-bulgarian-vessels-in-black-sea-as-investigation-launched",
       "published_at": "2026-10-07T01:22:44+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_dcf5f275847203b1",
       "url": "https://kyivindependent.com/russia-slams-kyiv-in-mass-missile-drone-attack-on-putins-74th-birthday/",
       "published_at": "2026-10-07T00:25:09+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_dcf5f275847203b1",
       "url": "https://t.me/alexmehacarmel/48319",
       "published_at": "2026-10-07T00:22:56+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_dcf5f275847203b1",
       "url": "https://t.me/alexmehacarmel/48318",
       "published_at": "2026-10-06T22:16:19+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_dcf5f275847203b1",
       "url": "https://www.ukrinform.net/rubric-ato/4171493-omega-telecom-data-center-in-kyiv-to-cease-operations-after-russian-attack.html",
       "published_at": "2026-10-06T21:35:00+00:00"
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
     "id": "UKRAINE-10070259-02",
     "title": "תקיפת כטב\"מים ימיים על מיכלית נפט סמוך לסוצ'י",
     "summary": "מיכלית נפט בעלת דגל ליבריה המקושרת לצי הצללים הרוסי עלתה באש מול חופי סוצ'י לאחר תקיפת כלי שיט בלתי מאוישים, מה שהוביל לסגירת חופים ולעשן כבד מעל האזור.",
     "axis": "זירת הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T17:10:28+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T17:10:28+00:00",
     "last_update_at": "2026-10-07T01:22:44+00:00",
     "what_is_not_verified": "זהות המבצעים המאומתת באופן עצמאי, מעבר להודעת משרד התחבורה הרוסי וערוצי רשת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/07/ukraine-war-briefing-zelenskyy-blames-russia-for-attack-on-bulgarian-vessels-in-black-sea-as-investigation-launched",
       "published_at": "2026-10-07T01:22:44+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/06/oil-tanker-burns-off-coast-of-sochi-blanketing-the-city-in-black-smoke",
       "published_at": "2026-10-06T18:20:55+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/shadow-fleet-tanker-reportedly-ablaze-near-russian-port-city-sochi/",
       "published_at": "2026-10-06T17:36:35+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131472",
       "published_at": "2026-10-06T17:10:28+00:00"
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
     "id": "UKRAINE-10070259-03",
     "title": "תקיפת ספינות סוחר במים הכלכליים של בולגריה",
     "summary": "שני כלי שיט מסחריים נפגעו מכטב\"מים באזור הכלכלי הבלעדי של בולגריה בים השחור, ואחת הספינות טבעה תוך היעדרות אנשי צוותה.",
     "axis": "זירת הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T11:53:21+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T11:53:21+00:00",
     "last_update_at": "2026-10-07T01:22:44+00:00",
     "what_is_not_verified": "זהות הצד ששיגר את הכטב\"מים, כאשר אוקראינה מאשימה את רוסיה ובולגריה בודקת ואינה מאשרת רשמית את מקורם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_6393f392fd946e0d",
       "url": "https://www.theguardian.com/world/2026/oct/07/ukraine-war-briefing-zelenskyy-blames-russia-for-attack-on-bulgarian-vessels-in-black-sea-as-investigation-launched",
       "published_at": "2026-10-07T01:22:44+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_6393f392fd946e0d",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056783/",
       "published_at": "2026-10-06T18:11:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_6393f392fd946e0d",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056782/",
       "published_at": "2026-10-06T18:06:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_6393f392fd946e0d",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-strikes-civilian-vessels-in-black-sea-off-bulgarias-coast/",
       "published_at": "2026-10-06T17:59:51+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_6393f392fd946e0d",
       "url": "https://www.ynet.co.il/news/article/b13ldymome",
       "published_at": "2026-10-06T16:02:52+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_6393f392fd946e0d",
       "url": "https://www.bbc.co.uk/news/articles/c8ly0v5r602eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-06T11:53:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10070259-04",
     "title": "השבתת בית הזיקוק בוולגוגרד בעקבות פגיעת כטב\"מים",
     "summary": "מתקן זיקוק הנפט בוולגוגרד השבית לחלוטין את עיבוד הנפט הגולמי בעקבות תקיפת כטב\"מים שגרמה לשריפה נרחבת בשטח המפעל.",
     "axis": "תשתיות אנרגיה בעורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T19:48:51+00:00",
     "last_update_at": "2026-10-06T19:48:51+00:00",
     "what_is_not_verified": "אישור רשמי מלא של חברת לוקאויל לגבי גודל הנזק, שכן המושל ציין רק פגיעה בתשתית תעשייתית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/06/another-russian-refinery-goes-offline-volgograd-plant-shuts-down-completely-after-ukrainian-drone-attack-reuters-reports",
       "published_at": "2026-10-06T19:48:51+00:00"
      }
     ],
     "places": [
      {
       "name": "וולגוגרד, רוסיה",
       "lat": 48.7082,
       "lon": 44.5153
      }
     ]
    },
    {
     "id": "UKRAINE-10070259-05",
     "title": "פגיעות רוסיות במבנים ותשתיות בזפוריז'יה ובחרסון",
     "summary": "תקיפה רוסית על מחסן בעיר זפוריז'יה גרמה להרג אדם ולפציעת אחרים, בעוד תקיפת כטב\"ם בכפר פרבדינה שבמחוז חרסון פצעה שלושה אזרחים ובהם ילד.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T18:44:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T18:44:00+00:00",
     "last_update_at": "2026-10-06T20:52:00+00:00",
     "what_is_not_verified": "סוג החימושים המדויק ששימש לפגיעה במחסן בזפוריז'יה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_dfff7f1a395aad16",
       "url": "https://www.ukrinform.net/rubric-ato/4171733-russian-drone-attack-in-kherson-region-leaves-three-people-injured-including-one-child.html",
       "published_at": "2026-10-06T20:52:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_dfff7f1a395aad16",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056784/",
       "published_at": "2026-10-06T18:44:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      },
      {
       "name": "פרבדינה, אוקראינה",
       "lat": 46.7355,
       "lon": 32.2041
      }
     ]
    },
    {
     "id": "UKRAINE-10070259-06",
     "title": "הפעלת רובוטים קרקעיים ורחפנים בפעילות העמוקה של חטיבה 3",
     "summary": "יחידת הרובוטים הקרקעיים של חטיבת הסער ה-3 האוקראינית ביצעה מעל מאה מבצעים מאחורי הקווים הרוסיים באמצעות שיגור רובוטים מרחפנים כבדים במסגרת מבצע ויוואלדי.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T02:30:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T02:30:00+00:00",
     "last_update_at": "2026-10-07T02:30:00+00:00",
     "what_is_not_verified": "היקף האבידות הרוסיות הנטען (5,000 נפגעים) והשטח ששוחרר לפי משרד הנשיא האוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_nc13_3",
       "url": "https://www.pravda.com.ua/eng/articles/2026/10/07/8056769/",
       "published_at": "2026-10-07T02:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אנדרייבקה, אוקראינה",
       "lat": 47.4626,
       "lon": 37.6529
      }
     ]
    },
    {
     "id": "UKRAINE-10070259-07",
     "title": "הגבלת גישה לרצועת החוף במחוז אודסה",
     "summary": "רשויות אוקראינה הטילו הגבלות על גישת אזרחים לחופי הים באודסה ובסביבתה עקב שיקולים ביטחוניים עם תום עונת הרחצה.",
     "axis": "זירת הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T23:39:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T23:39:00+00:00",
     "last_update_at": "2026-10-06T23:39:00+00:00",
     "what_is_not_verified": "אופי האיומים הביטחוניים הספציפיים שהובילו להחלטה המיידית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171503-access-to-coastline-restricted-in-odesa-region.html",
       "published_at": "2026-10-06T23:39:00+00:00"
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
     "id": "UKRAINE-10070259-08",
     "title": "הקמת חברת בת ביטחונית ליטאית באוקראינה",
     "summary": "יצרנית הרחפנים מליטא פתחה מיזם משותף באוקראינה לצורך ייצור כטב\"מים, פריסתם והכשרת מפעילים בשיתוף ישיר עם צבא אוקראינה.",
     "axis": "סיוע צבאי ותעשיות ביטחוניות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T17:42:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T17:42:00+00:00",
     "last_update_at": "2026-10-06T17:42:00+00:00",
     "what_is_not_verified": "היקף הייצור המתוכנן ומועדי אספקה ראשונים לחזית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f698b6e9f1e75463",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056777/",
       "published_at": "2026-10-06T17:42:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10070259-09",
     "title": "פוליסה וכיסוי ביטוחי בוטלו לספינות הפוקדות נמלים באוקראינה",
     "summary": "חברות ביטוח ימי הפסיקו לכסות סיכונים הקשורים לפקידת נמלי אוקראינה לנוכח עליית האיומים הצבאיים בים השחור ותקיפות הדדיות על כלי שיט.",
     "axis": "זירת הים השחור",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T18:54:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T18:54:51+00:00",
     "last_update_at": "2026-10-06T18:54:51+00:00",
     "what_is_not_verified": "רשימת חברות הביטוח המדויקת שסירבו להעניק כיסוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_ambrey",
       "url": "https://tass.com/world/2198453",
       "published_at": "2026-10-06T18:54:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10070259-10",
     "title": "שחיקה מואצת של מטוסי ה-F-16 של חיל האוויר האוקראיני",
     "summary": "חיל האוויר האוקראיני מתריע כי שימוש אינטנסיבי במטוסי קרב מסוג F-16 לצורך יירוט כטב\"מי סילון רוסיים מקצר במהירות את אורך חיי השירות של המטוסים ומחייב סיוע בינלאומי נוסף.",
     "axis": "חזית האוויר והעורף האוקראיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:32:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T00:32:00+00:00",
     "last_update_at": "2026-10-07T00:32:00+00:00",
     "what_is_not_verified": "מספר המטוסים שאינם כשירים כרגע ושיעור השחיקה בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171608-air-force-intensive-use-is-rapidly-shortening-f16-service-life.html",
       "published_at": "2026-10-07T00:32:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מקור הכטב\"מים שפגעו בספינות המסחר במים הכלכליים של בולגריה (אוקראינה מאשימה את רוסיה, בולגריה בודקת).",
    "מספר האבידות של כוחות רוסיה במבצע ויוואלדי (נטען למעל 5,000 על ידי משרד הנשיא האוקראיני).",
    "היקף הנפגעים והנזקים הכולל כתוצאה מהמתקפה הרוסית על קייב בליל 6-7 באוקטובר.",
    "דיווחים על שריפה במאגר דלק במחוז מוסקבה ומות שני בני אדם.",
    "השמדת צוותי כטב\"ם אוקראיניים בעיירה אליושקי."
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
     "value": 1.1269,
     "unit": "USD",
     "change_pct": 0.58,
     "source_id": "src_ecb",
     "as_of": "2026-10-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "להגן על שמי המדינה ולדרוש אמצעי הגנה מתקדמים מבעלות הברית באירופה ובארצות הברית",
      "לתאם תגובה מול בולגריה ושותפות אזוריות נגד תוקפנות רוסית במרחב הים השחור"
     ],
     "inferred": [
      "פגיעה בכלכלת האנרגיה ובצי הצללים של רוסיה כדי לצמצם את הכנסותיה ומקורות הדלק של צבאה",
      "הטמעת טכנולוגיות כטב\"מים ורובוטים קרקעיים לצמצום אובדן חיי חיילים בחזית"
     ],
     "forecast": [
      "המשך פגיעה ממוקדת במכליות נפט ובבתי זיקוק ברוסיה, בד בבד עם בקשות דחופות לחלקי חילוף ומטוסים נוספים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך יירוט מתקפות כטב\"ם נרחבות מעל שטח הפדרציה הרוסית וחצי האי קרים",
      "הגברת הלחץ על אוקראינה לקראת כפיית תנאי שלום"
     ],
     "inferred": [
      "שיבוש נתיבי השיט האזרחיים והמסחריים של אוקראינה בים השחור כדי להביא לבידודה הכלכלי",
      "שחיקת מערך ההגנה האווירית ותשתיות האנרגיה והתקשורת של קייב באמצעות מטחי טילים מרוכזים"
     ],
     "forecast": [
      "המשך תקיפות מסיביות בעומק אוקראינה והרחבת האיומים הימיים לכיוון מערב הים השחור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c8ly0v5r602eo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/07/ukraine-war-briefing-zelenskyy-blames-russia-for-attack-on-bulgarian-vessels-in-black-sea-as-investigation-launched",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-russia-strikes-civilian-vessels-in-black-sea-off-bulgarias-coast/",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/06/another-russian-refinery-goes-offline-volgograd-plant-shuts-down-completely-after-ukrainian-drone-attack-reuters-reports",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056777/",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2198453",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131472",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48318",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4171608-air-force-intensive-use-is-rapidly-shortening-f16-service-life.html",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b13ldymome",
     "accessed_at": "2026-10-07T02:59:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-06T12:26:06+00:00",
  "changes": {
   "UKRAINE-10070259-01": {
    "kind": "new"
   },
   "UKRAINE-10070259-02": {
    "kind": "new"
   },
   "UKRAINE-10070259-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ספינות סוחר הותקפו בים השחור, גם מול בולגריה",
    "score": 0.65
   },
   "UKRAINE-10070259-04": {
    "kind": "new"
   },
   "UKRAINE-10070259-05": {
    "kind": "new"
   },
   "UKRAINE-10070259-06": {
    "kind": "new"
   },
   "UKRAINE-10070259-07": {
    "kind": "new"
   },
   "UKRAINE-10070259-08": {
    "kind": "new"
   },
   "UKRAINE-10070259-09": {
    "kind": "new"
   },
   "UKRAINE-10070259-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-07T0623__north-202610070623.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-07T06:23:15+00:00",
   "window": {
    "from": "2026-10-06T06:23:15+00:00",
    "to": "2026-10-07T06:23:15+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610070623"
   },
   "summary": "הגזרה הצפונית מתאפיינת במתיחות צבאית נמשכת סביב גבול לבנון, הכוללת פעילות אווירית ותקיפות ארטילריות מוגבלות. במקביל, מתנהלים דיונים פוליטיים ואסטרטגיים לגבי עתיד הגבולות, לצד דיווחים ומגעים עקיפים בין סוריה וגורמים אזוריים סביב נוכחות חיזבאללה והסדרת גבולות.",
   "fronts": [
    {
     "name": "החזית הצפונית (לבנון וסוריה)",
     "status": "פעילה עם אירועי אש נקודתיים ומתיחות"
    }
   ],
   "events": [
    {
     "id": "NORTH-10070623-01",
     "title": "ירי ארטילרי עוין לעבר אל-מנסורי בדרום לבנון",
     "summary": "כתב אל-מנאר דיווח על ירי ארטילרי עוין שכוון לעבר אל-מנסורי שבדרום לבנון.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T06:09:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T06:09:55+00:00",
     "last_update_at": "2026-10-07T06:09:55+00:00",
     "what_is_not_verified": "זהות היורים והנזק אינם מפורטים מעבר לדיווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_d3633d6b51099ad9",
       "url": "https://english.almanar.com.lb/article/135202/",
       "published_at": "2026-10-07T06:09:55+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10070623-02",
     "title": "טיסות מטוסי קרב ישראליים בגובה רב בדרום לבנון",
     "summary": "כתב אל-מנאר דיווח על מטוסי קרב ישראליים הסורקים את שמי דרום לבנון בגובה נמוך.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T18:16:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T18:16:25+00:00",
     "last_update_at": "2026-10-06T18:16:25+00:00",
     "what_is_not_verified": "מטרות הטיסות הספציפיות אינן מפורטות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f86e7647a73224cb",
       "url": "https://english.almanar.com.lb/article/135117/",
       "published_at": "2026-10-06T18:16:25+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 39.371,
       "lon": -84.2128
      }
     ]
    },
    {
     "id": "NORTH-10070623-03",
     "title": "פגישות סודיות בין ממשלת סוריה וחיזבאללה בטורקיה",
     "summary": "דווח על פגישות סודיות בטורקיה בין ממשלת סוריה וחיזבאללה במטרה להפיג מתחים, למרות הכחשות מצד ממשלת סוריה וטורקיה.",
     "axis": "סוריה וטורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T16:55:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T16:55:34+00:00",
     "last_update_at": "2026-10-06T16:55:34+00:00",
     "what_is_not_verified": "עצם קיום הפגישות וההסכמות הוכחשו על ידי ממשלת סוריה ודוברות הנשיאות בטורקיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/syrias-new-rulers-and-hezbollah-unlikely-detente",
       "published_at": "2026-10-06T16:55:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10070623-04",
     "title": "כניסת אנשי צוות אוויר ממדינות עוינות לישראל",
     "summary": "בדיון בוועדת החוץ והביטחון נחשף כי מתחילת השנה נכנסו לישראל למעלה מ-1,200 אנשי צוות אוויר ממדינות ללא יחסים דיפלומטיים, ובהן סוריה ולבנון.",
     "axis": "ישראל",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T13:37:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T13:37:06+00:00",
     "last_update_at": "2026-10-06T15:54:01+00:00",
     "what_is_not_verified": "הפרטים המלאים וההשלכות המדויקות על הביטחון נבדקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956516",
       "published_at": "2026-10-06T15:54:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48304",
       "published_at": "2026-10-06T14:05:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131460",
       "published_at": "2026-10-06T13:54:55+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94519",
       "published_at": "2026-10-06T13:37:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10070623-05",
     "title": "צירוף נמלי ביירות וטריפולי למועדון נמלי המסדרון הכלכלי",
     "summary": "נמלי ביירות וטריפולי בלבנון צורפו למועדון נמלי המסדרון הכלכלי בהודו-המזרח התיכון-אירופה במסגרת חתימה בניו דלהי.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T12:38:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T12:38:14+00:00",
     "last_update_at": "2026-10-06T13:50:00+00:00",
     "what_is_not_verified": "מידת ההצלחה והיישוב המעשי של שיתוף הפעולה טרם הוכחו בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/961511/imec-ports-club-brings-lebanons-beirut-and-tripoli-ports-into-wider-tr/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961511",
       "published_at": "2026-10-06T13:50:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/961515/aoun-says-beirut-and-tripoli-ports-joining-imec-ports-club-is-key-step/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961515",
       "published_at": "2026-10-06T12:38:14+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "טריפולי, לבנון",
       "lat": 34.4374,
       "lon": 35.8349
      },
      {
       "name": "ניו דלהי, הודו",
       "lat": 28.6139,
       "lon": 77.209
      }
     ]
    },
    {
     "id": "NORTH-10070623-06",
     "title": "הצהרת שר האוצר היראל סמוטריץ' על סיפוח בשטחי לבנון",
     "summary": "שר האוצר הישראלי בצלאל סמוטריץ' קרא להרחיב באופן קבוע את ריבונות ישראל על שטחים המוחזקים בידי כוחות צה\"ל בלבנון וברצועת עזה.",
     "axis": "ישראל ולבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T23:37:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T23:37:54+00:00",
     "last_update_at": "2026-10-06T23:37:54+00:00",
     "what_is_not_verified": "מדובר בהצהרה פוליטית ולא בהחלטה ממשלתית רשמית מבצעית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/smotrich-calls-further-annexations-gaza-and-lebanon",
       "published_at": "2026-10-06T23:37:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ירושלים",
       "lat": 31.7788,
       "lon": 35.2258
      }
     ]
    }
   ],
   "not_verified": [
    "קיומם של מפגשים סודיים בין ממשלת סוריה לחיזבאללה בטורקיה",
    "ההסכמות הנטענות בין סוריה לחיזבאללה לעצירת הברחות ופירוק תאים",
    "בדיקת כניסת אנשי צוות אוויר מאיראן לישראל"
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
     "value": 3.048,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-10-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות עוינת בגבולות הצפון",
      "הגנת גבולות המדינה והיערכות מול זירות הלחימה השונות"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי בלבנון ובסוריה",
      "בחינת אפשרויות להרחבת שליטה ביטחונית בשטחים סמוכים לגבול"
     ],
     "forecast": [
      "המשך פעילות צבאית עצימה במרחב הגבול הצפוני",
      "החמרת נהלי הפיקוח והביטחון במעברי האוויר והגבולות"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "שימור יכולות הלחימה ומוכנות מול ישראל כחלק מציר ההתנגדות"
     ],
     "inferred": [
      "ניסיון לשמור על עמימות ונסיגה מהסלמה כוללת מול סוריה ולבנון במקביל",
      "היערכות להתמודדות עם לחצים אזוריים ומקומיים"
     ],
     "forecast": [
      "המשך פעילות חשאית ושימור תשתיות באזורי הגבול",
      "תגובות נקודתיות לפעילות צה\"ל בלבנון"
     ]
    },
    {
     "actor": "ממשלת סוריה החדשה",
     "declared": [
      "חיזוק הקשרים האזוריים ושמירה על הביטחון והיציבות במדינה"
     ],
     "inferred": [
      "רצון להתרחק מעימות ישיר עם ישראל וצמצום ההשפעה של חיזבאללה בתוך השטח הסורי",
      "חיפוש שותפויות כלכליות ובינלאומיות לשיקום המדינה"
     ],
     "forecast": [
      "המשך מאמצים למנוע הברחות ופעילות חמושה זרה בשטחה",
      "הידוק קשרים דיפלומטיים עם מדינות ערב והעולם"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/135117/",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/961515/aoun-says-beirut-and-tripoli-ports-joining-imec-ports-club-is-key-step/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961515",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/smotrich-calls-further-annexations-gaza-and-lebanon",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/syrias-new-rulers-and-hezbollah-unlikely-detente",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131460",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48304",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94519",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956516",
     "accessed_at": "2026-10-07T06:23:15+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-06T12:25:04+00:00",
  "changes": {
   "NORTH-10070623-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דיווח בלבנון: ירי מקלעים ישראלי בפאתי אל-מנסורי",
    "score": 0.817
   },
   "NORTH-10070623-02": {
    "kind": "possible",
    "prev": "ממשלת לבנון מקדמת הרחבת נוכחות המדינה בדרום",
    "score": 0.467
   },
   "NORTH-10070623-03": {
    "kind": "new"
   },
   "NORTH-10070623-04": {
    "kind": "new"
   },
   "NORTH-10070623-05": {
    "kind": "new"
   },
   "NORTH-10070623-06": {
    "kind": "new"
   }
  }
 }
};
