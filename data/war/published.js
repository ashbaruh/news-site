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
  "draft": "drafts/iran/2026-10-07T0240__iran-202610070240.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-07T02:40:34+00:00",
   "window": {
    "from": "2026-10-06T02:40:34+00:00",
    "to": "2026-10-07T02:40:34+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610070240"
   },
   "summary": "העימות המתמשך בין איראן לבין ארה\"ב וישראל נמשך בשטח, במקביל למגעים דיפלומטיים תקועים וחילופי איומים והצהרות חריפות. ארה\"ב דורשת צמצום משמעותי ביכולות העשרת האורניום של טהרן כדי לסיים את העימות, בעוד שבאיראן נמשכת הפעילות לשיקום מתקנים שנפגעו והידוק הפיקוח הפנימי. בגזרת השלוחים, נרשמת פעילות מוגברת של החות'ים בתימן והתמודדות של עיראק עם נוכחות המיליציות הפרו-איראניות לאחר נסיגת ארה\"ב.",
   "fronts": [
    {
     "name": "החזית האיראנית-אמריקאית ישירה",
     "status": "פעיל עם מתיחות צבאית וכלכלית"
    },
    {
     "name": "חזית איראן-ישראל והגרעין",
     "status": "פעיל הכולל מאמצי שיקום מתקנים ותקיפות קודמות"
    },
    {
     "name": "זירת השלוחים והמפרץ",
     "status": "פעיל (עיראק, תימן ופעילות נגד יעדים ישראליים/מערביים בחו\"ל)"
    }
   ],
   "events": [
    {
     "id": "IRAN-10070240-01",
     "title": "פגיעה באתרים פטרוכימיים ופרמצבטיים באיראן",
     "summary": "נציג איראן בארגון למניעת הפצת נשק כימי טוען כי מתקפות של ארצות הברית פגעו במאות אתרים פטרוכימיים ופרמצבטיים במדינה.",
     "axis": "ציר איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:53:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T00:53:57+00:00",
     "last_update_at": "2026-10-07T00:53:57+00:00",
     "what_is_not_verified": "היקף הנזק המדויק והאחריות של ארה\"ב אינם מאומתים ממקור ראשון או בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-more-100-petrochemical-and-pharmaceutical-sites-damaged-us",
       "published_at": "2026-10-07T00:53:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10070240-02",
     "title": "שיקום מתחם גרעיני באיראן",
     "summary": "צילומי לוויין ודו\"ח של מכון מחקר אמריקאי מצביעים על פעילות של פינוי פסולת ותיקון נזקים במתחם הגרעיני במין-זדאא'י שהותקף בעבר.",
     "axis": "ציר איראן-ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T19:45:10+00:00",
     "last_update_at": "2026-10-06T21:29:48+00:00",
     "what_is_not_verified": "המטרה המדויקת של הפעילות באתר אינה מאומתת רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_3cbb59659ac9ef96",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21568679",
       "published_at": "2026-10-06T21:29:48+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_516e3add6ace969a",
       "url": "https://www.al-monitor.com/originals/2026/10/satellite-images-could-indicate-return-activity-iranian-compound-report",
       "published_at": "2026-10-06T20:11:52+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_7ce7ed6ba4cfce08",
       "url": "https://www.ynet.co.il/news/article/rjwuf6gjgl",
       "published_at": "2026-10-06T19:45:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10070240-03",
     "title": "העמדה לדין של אזרחים איראנים בלונדון",
     "summary": "שלושה אזרחים איראנים עומדים למשפט בלונדון בחשד לריגול ותכנון מתקפה אלימה נגד עיתונאים וגורמים נוספים.",
     "axis": "ציר איראן-המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T20:53:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T20:53:17+00:00",
     "last_update_at": "2026-10-06T20:53:17+00:00",
     "what_is_not_verified": "אשמתם של הנאשמים טרם הוכחה בבית המשפט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48316",
       "published_at": "2026-10-06T20:53:17+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "IRAN-10070240-04",
     "title": "התנהלות סביב המיליציות והשחתת דגל ארה\"ב בעיראק",
     "summary": "לאחר נסיגת הכוחות האמריקאיים מעיראק, תועדו חברי מיליציות השיעיות דורכים על דגל ארה\"ב, מה שעורר גינויים ומעצרים מצד הרשויות בעיראק.",
     "axis": "ציר איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T20:10:49+00:00",
     "last_update_at": "2026-10-06T20:24:14+00:00",
     "what_is_not_verified": "מידת השליטה המלאה של ממשלת עיראק על פירוק המיליציות מנשקן עד מועד היעד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_dfd20bea4caa24d6",
       "url": "https://www.fdd.org/analysis/2026/10/06/us-flag-trampling-militia-disarmament-dispute-mark-iraqs-post-us-withdrawal-era/",
       "published_at": "2026-10-06T20:24:14+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "fh_dfd20bea4caa24d6",
       "url": "https://www.longwarjournal.org/archives/2026/10/us-flag-trampling-militia-disarmament-dispute-mark-iraqs-post-us-withdrawal-era.php",
       "published_at": "2026-10-06T20:10:49+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    }
   ],
   "not_verified": [
    "טענות איראן על פגיעה מדויקת ביותר מ-100 אתרים פטרוכימיים ופרמצבטיים על ידי ארה\"ב",
    "ההערכות המדויקות לגבי זהות הגורמים המנהלים בפועל את מערכת קבלת ההחלטות בטהרן",
    "האם איראן בודקת כניסת אנשי צוות אוויר ממדינות שאין לה קשרים דיפלומטיים איתן"
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
     "actor": "איראן",
     "declared": [
      "המשך שיתוף פעולה ודיאלוג עם השכנים באזור",
      "הצגת חוסן כלכלי ויכולת לספק מטבע חוץ בשוק"
     ],
     "inferred": [
      "שיקום תשתיות הגרעין והנשק שנפגעו בתקיפות",
      "שימור רשת השלוחים האזוריים להפעלת לחץ על ארה\"ב וישראל"
     ],
     "forecast": [
      "המשך המתיחות מול המערב והתחמקות מדרישות להגבלת תוכנית הגרעין",
      "הדגשת הישרדות המשטר למרות הלחץ הכלכלי והצבאי"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "דרישה מאיראן לבצע הפחתה משמעותית ביכולת ההעשרה הגרעינית לסיום העימות",
      "הגנה על תשתיות הבחירות ומניעת התערבות זרה"
     ],
     "inferred": [
      "המשך לחץ צבאי וכלכלי הדוק במטרה לערער את המשטר בטהרן",
      "פיקוח על נסיגת כוחות ומניעת התבססות מיליציות באזור (כגון בעיראק)"
     ],
     "forecast": [
      "שמירה על סנקציות כלכליות נוקשות כלפי איראן",
      "המשך תמיכה בבעלות ברית אזוריות מול שלוחיה של איראן"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "אזהרות חמורות מפני ניסיונות פיגוע של איראן ושלוחיה נגד יעדים ישראליים ויהודיים בחו\"ל לקראת יום השנה ל-7 באוקטובר"
     ],
     "inferred": [
      "מעקב מודיעיני הדוק אחר מאמצי השיקום של אתרי הגרעין באיראן",
      "היערכות ביטחונית גבוהה מפני מתקפות טרור או תגמול מצד ציר ההתנגדות"
     ],
     "forecast": [
      "הגברת ערנות ואבטחת נציגויות וישראלים בחו\"ל",
      "שמירת חופש פעולה מול התבססות איראנית ושלוחיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/satellite-images-could-indicate-return-activity-iranian-compound-report",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/2026/10/06/us-flag-trampling-militia-disarmament-dispute-mark-iraqs-post-us-withdrawal-era/",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21568679",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/us-flag-trampling-militia-disarmament-dispute-mark-iraqs-post-us-withdrawal-era.php",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-more-100-petrochemical-and-pharmaceutical-sites-damaged-us",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48316",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rjwuf6gjgl",
     "accessed_at": "2026-10-07T02:40:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-06T12:09:36+00:00",
  "changes": {
   "IRAN-10070240-01": {
    "kind": "new"
   },
   "IRAN-10070240-02": {
    "kind": "new"
   },
   "IRAN-10070240-03": {
    "kind": "new"
   },
   "IRAN-10070240-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-06T1226__ukraine-202610061226.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-06T12:26:06+00:00",
   "window": {
    "from": "2026-10-05T12:26:06+00:00",
    "to": "2026-10-06T12:26:06+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "ukraine-202610061226"
   },
   "summary": "רוסיה ואוקראינה ממשיכות להחליף תקיפות על העורף ועל התשתיות. רוסיה פוגעת בערים, בגשרים ובספנות, ואוקראינה תוקפת מתקני דלק עמוק ברוסיה, כולל ליד מוסקבה. הים השחור הופך לזירה מסוכנת לספנות אזרחית, והתקיפות כבר הגיעו לאזור הכלכלי של בולגריה, מדינה בנאט\"ו. במדינות השכנות לרוסיה הדאגה גוברת, וליטא החלה לבחון ביטול האיסור על נשק גרעיני.",
   "fronts": [
    {
     "name": "תקיפות בעורף האוקראיני",
     "status": "13 הרוגים ביממה; חרקוב הכי מותקפת."
    },
    {
     "name": "תקיפות בעומק רוסיה",
     "status": "מחסן הדלק הגדול במחוז מוסקבה עלה באש."
    },
    {
     "name": "חזית דרום וגשרים",
     "status": "גשר בזפוריז'יה נסגר; נזק לגשר צ'ונהר לקרים."
    },
    {
     "name": "הים השחור",
     "status": "שלוש ספינות נפגעו ביום אחד, אחת טבעה מול בולגריה."
    },
    {
     "name": "נאט\"ו ואירופה",
     "status": "ליטא בוחנת הסרת האיסור על נשק גרעיני."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10061226-01",
     "title": "13 הרוגים ו-104 פצועים בתקיפות רוסיות ביממה",
     "summary": "תקיפות רוסיות ביממה האחרונה הרגו 13 בני אדם ופצעו 104 ברחבי אוקראינה. הכי קשה היה במחוז חרקוב, עם 7 הרוגים ועשרות פצועים. בקריבי ריה נפגע בית חולים, ובקרמטורסק רחפן פגע באמבולנס ובבניין מגורים.",
     "axis": "תקיפות בעורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:22:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:22:00+00:00",
     "last_update_at": "2026-10-06T09:03:24+00:00",
     "what_is_not_verified": "המספרים נמסרו על ידי רשויות אוקראיניות וייתכנו עדכונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-strikes-kill-13-injure-104-across-ukraine-damage-kryvyi-rih-hospital/",
       "published_at": "2026-10-06T09:03:24+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171478-russian-attacks-in-kharkiv-region-leave-seven-killed-80-injured-over-past-day.html",
       "published_at": "2026-10-06T08:35:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171431-russian-strike-hits-highrise-building-and-ambulance-in-kramatorsk-killing-one-woman-and-injuring-four-people.html",
       "published_at": "2026-10-06T07:22:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "קריבי ריה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "קרמטורסק",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-02",
     "title": "מתקפת רחפנים אוקראינית על מחוז מוסקבה: מחסן הדלק הגדול באזור עלה באש",
     "summary": "מתקפת רחפנים אוקראינית רחבה על מוסקבה וסביבתה הציתה את מתקן הנפט הגדול במחוז, ליד קונסטנטינובו. לפי הדיווחים נהרגו שניים.",
     "axis": "תקיפות בעומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T00:00:00+00:00",
     "last_update_at": "2026-10-06T07:08:08+00:00",
     "what_is_not_verified": "היקף הנזק למתקן לא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/06/massive-ukrainian-drone-attack-on-moscow-and-surrounding-region-kills-two-sets-region-s-largest-oil-depot-ablaze",
       "published_at": "2026-10-06T07:08:08+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drones-reportedly-attack-moscow-oblast-in-mass-attack-near-russias-capital/",
       "published_at": "2026-10-06T00:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-03",
     "title": "גשרים על הדנייפר ובצ'ונהר נפגעו",
     "summary": "רחפן רוסי פגע בגשר בזפוריז'יה, חמישה נפצעו והגשר נסגר לתנועה. במקביל, תצלומי לוויין מראים נזק כבד לגשר צ'ונהר שמחבר את קרים למחוז חרסון.",
     "axis": "חזית דרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T04:26:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T04:26:24+00:00",
     "last_update_at": "2026-10-06T08:18:00+00:00",
     "what_is_not_verified": "מי פגע בגשר צ'ונהר ומתי בדיוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/06/russia-strikes-bridge-over-dnipro-river-in-ukraine-s-zaporizhzhia-injuring-five-including-red-cross-workers",
       "published_at": "2026-10-06T07:20:08+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-drone-strikes-zaporizhzhia-bridge-in-overnight-attack/",
       "published_at": "2026-10-06T04:26:24+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4171471-new-attacks-cause-extensive-damage-to-chonhar-bridge-satellite-imagery.html",
       "published_at": "2026-10-06T08:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-04",
     "title": "ספינות סוחר הותקפו בים השחור, גם מול בולגריה",
     "summary": "רחפן רוסי פגע בספינה בדגל איי מרשל מול אוקראינה, אחד נהרג ושבעה נפצעו. כ-112 ק\"מ מחופי בולגריה ספינה אחת טבעה ואחרת עלתה באש, אחרי פגיעת רחפנים שמקורם לא נקבע. יום קודם טבעה ספינת תבואה בבעלות טורקית.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T15:17:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T15:17:23+00:00",
     "last_update_at": "2026-10-06T11:47:00+00:00",
     "what_is_not_verified": "מקור הרחפנים מול בולגריה וגורל צוות הספינה שטבעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/drones-strike-merchant-vessels-in-black-sea-off-bulgaria-and-ukraine-killing-at-least-one/",
       "published_at": "2026-10-06T11:47:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cr0j0w3p8453o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-05T15:17:23+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10061226-05",
     "title": "ליטא פתחה בהליך להסרת האיסור על נשק גרעיני",
     "summary": "הפרלמנט הליטאי עשה צעד ראשון לשינוי חוקתי שיסיר את האיסור על נשק גרעיני במדינה, על רקע האיום הרוסי.",
     "axis": "נאט\"ו ואירופה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:57:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:57:00+00:00",
     "last_update_at": "2026-10-06T08:57:00+00:00",
     "what_is_not_verified": "ההליך בתחילתו ולא ברור אם יושלם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/lithuania-takes-1st-step-to-lift-nuclear-weapons-ban-amid-russian-threat/",
       "published_at": "2026-10-06T08:57:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10061226-06",
     "title": "דרום קוריאה: ההתנצלות של אוקראינה בפרשת השבויים לא מספיקה",
     "summary": "שר החוץ של דרום קוריאה אמר שההתנצלות של קייב על הדלפת מידע בנוגע לשבויים צפון קוריאנים לא מספיקה, וסיאול שוקלת להחזיר את שגרירה.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:26:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:26:00+00:00",
     "last_update_at": "2026-10-06T08:26:00+00:00",
     "what_is_not_verified": "לא הוחלט אם השגריר יוחזר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056667/",
       "published_at": "2026-10-06T08:26:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10061226-07",
     "title": "סקר: רוב האוקראינים פתוחים למשא ומתן, בלי ויתור מראש על שטחים",
     "summary": "סקר שפורסם באוקראינה מראה שרוב הציבור פתוח למשא ומתן עם רוסיה, אבל לא מסכים מראש לוויתורים טריטוריאליים.",
     "axis": "דיפלומטיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T08:12:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T08:12:00+00:00",
     "last_update_at": "2026-10-06T08:12:00+00:00",
     "what_is_not_verified": "המתודולוגיה המלאה של הסקר לא פורטה בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056661/",
       "published_at": "2026-10-06T08:12:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מקור הרחפנים שפגעו בספינות מול בולגריה.",
    "היקף הנזק למתקן הדלק ליד מוסקבה.",
    "מי פגע בגשר צ'ונהר.",
    "מספרי הנפגעים, שעשויים להשתנות."
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
     "value": 1.1204,
     "unit": "USD",
     "change_pct": -0.19,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המבצע הצבאי"
     ],
     "inferred": [
      "לשחוק את העורף האוקראיני ואת נתיבי היצוא בים השחור",
      "לבחון את תגובת נאט\"ו מתחת לסף מלחמה"
     ],
     "forecast": [
      "המשך תקיפות על נמלים וספנות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "פגיעה ביכולת המלחמה הרוסית"
     ],
     "inferred": [
      "לפגוע בהכנסות ובאספקת הדלק של רוסיה",
      "לנתק את קרים דרך פגיעה בגשרים"
     ],
     "forecast": [
      "המשך תקיפות רחפנים על מתקני אנרגיה ברוסיה"
     ]
    },
    {
     "actor": "מדינות נאט\"ו",
     "declared": [
      "הגנה על שטחן"
     ],
     "inferred": [
      "הרתעה מול רוסיה"
     ],
     "forecast": [
      "דיון על הגנה ימית אחרי הפגיעה מול בולגריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr0j0w3p8453o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/lithuania-takes-1st-step-to-lift-nuclear-weapons-ban-amid-russian-threat/",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/06/russia-strikes-bridge-over-dnipro-river-in-ukraine-s-zaporizhzhia-injuring-five-including-red-cross-workers",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056661/",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4171471-new-attacks-cause-extensive-damage-to-chonhar-bridge-satellite-imagery.html",
     "accessed_at": "2026-10-06T12:26:06+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-06T09:23:21+00:00",
  "changes": {
   "UKRAINE-10061226-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות רוסיות על מתקנים ותשתיות באוקראינה",
    "score": 1.0
   },
   "UKRAINE-10061226-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים אוקראינית על מוסקבה ומחוזות ברוסיה",
    "score": 1.0
   },
   "UKRAINE-10061226-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה בגשרים ובעורקי תחבורה מרכזיים",
    "score": 1.0
   },
   "UKRAINE-10061226-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה ימית בים השחור ופגיעה באוניית תבואה",
    "score": 1.0
   },
   "UKRAINE-10061226-05": {
    "kind": "new"
   },
   "UKRAINE-10061226-06": {
    "kind": "possible",
    "prev": "חילופי האשמות דיפלומטיות סביב העברת שבויים קוריאניים",
    "score": 0.4
   },
   "UKRAINE-10061226-07": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "משא ומתן ומדדי דעת קהל באוקראינה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-06T1225__north-202610061225.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-06T12:25:04+00:00",
   "window": {
    "from": "2026-10-05T12:25:04+00:00",
    "to": "2026-10-06T12:25:04+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "north-202610061225"
   },
   "summary": "הגזרה הצפונית שקטה יחסית היום: אין דיווח על תקיפות ישראליות בלבנון או ירי של חיזבאללה, מלבד ירי מקלעים בפאתי אל-מנסורי. המוקד הוא דרום סוריה, שם צה\"ל ממשיך לפעול במרחב האבטחה ולעבוד על קו \"סופה 53\", ודמשק ומדינות ערב מגנות. בלבנון הממשלה מנסה להרחיב את נוכחות הצבא בדרום, וחיזבאללה מצהיר שפירוקו נכשל.",
   "fronts": [
    {
     "name": "דרום סוריה וקוניטרה",
     "status": "פעילות קרקעית ישראלית יומיומית, מעצרים ועבודות הנדסה; גינויים סוריים וערביים."
    },
    {
     "name": "דרום לבנון",
     "status": "שקט יחסי; ירי מקלעים נקודתי באל-מנסורי."
    },
    {
     "name": "לבנון פנים",
     "status": "הממשלה מקדמת פריסת צבא בדרום ותרגול עם המערב; חיזבאללה מתנגד לפירוק."
    },
    {
     "name": "רמת הגולן",
     "status": "אירוע פציעה בשטח חקלאי, נסיבות לא ברורות."
    }
   ],
   "events": [
    {
     "id": "NORTH-10061225-01",
     "title": "צה\"ל עצר שני חשודים שהתקרבו למוצב בדרום סוריה",
     "summary": "לפי צה\"ל, כוחות זיהו שני חשודים על אופנוע שהתקרבו למוצב בדרום סוריה, ביצעו נוהל מעצר חשוד שכלל ירי, אחד החשודים נפצע ושניהם נעצרו. בנוסף, חטיבת כרמלי איתרה ונטרלה מטעני נ\"ט ומוקשים ישנים.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T13:18:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T13:18:52+00:00",
     "last_update_at": "2026-10-05T13:54:26+00:00",
     "what_is_not_verified": "זהות החשודים ומטרתם לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25292",
       "published_at": "2026-10-05T13:42:59+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25291",
       "published_at": "2026-10-05T13:18:52+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956358",
       "published_at": "2026-10-05T13:54:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-02",
     "title": "כוחות ישראליים נכנסו שוב לדרום קוניטרה",
     "summary": "כוחות וטנקים ישראליים נכנסו לאזור תל אל-דוריאת שליד הכפר אל-מועלקה בדרום קוניטרה. משרד החוץ הסורי גינה את הפעולות ודרש נסיגה.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T05:19:46+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T05:19:46+00:00",
     "last_update_at": "2026-10-06T06:46:23+00:00",
     "what_is_not_verified": "משך השהייה ומטרת הפעולה לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-raid-in-syria-s-quneitra/4079190",
       "published_at": "2026-10-06T06:46:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-condemns-israeli-attacks-demands-withdrawal-territory",
       "published_at": "2026-10-06T05:19:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-03",
     "title": "סוריה, ירדן וקטאר גינו את עבודות קו \"סופה 53\"",
     "summary": "סוריה, ירדן וקטאר גינו את חידוש העבודות ההנדסיות של ישראל לאורך קו \"סופה 53\", וטענו שמדובר בהפרה של הסכם הפרדת הכוחות מ-1974.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T16:51:27+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T16:51:27+00:00",
     "last_update_at": "2026-10-06T05:19:46+00:00",
     "what_is_not_verified": "היקף העבודות בשטח לא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
       "published_at": "2026-10-05T16:51:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-condemns-israeli-attacks-demands-withdrawal-territory",
       "published_at": "2026-10-06T05:19:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-04",
     "title": "דיווח בלבנון: ירי מקלעים ישראלי בפאתי אל-מנסורי",
     "summary": "סוכנות הידיעות הלבנונית הרשמית דיווחה על ירי מקלעים של צבא ישראל בפאתי הכפר אל-מנסורי בדרום לבנון. לא דווח על נפגעים.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T05:04:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T05:04:00+00:00",
     "last_update_at": "2026-10-06T05:04:00+00:00",
     "what_is_not_verified": "צה\"ל לא הגיב; הסיבה לירי ונפגעים לא ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/latest-news/961483/",
       "published_at": "2026-10-06T05:04:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10061225-05",
     "title": "ח\"כ חיזבאללה: הניסיון לפרק את הארגון נכשל",
     "summary": "חבר הפרלמנט חוסיין אל-חאג' חסן מחיזבאללה אמר שהמהלך לסיום \"ההתנגדות\" ופירוק חיזבאללה לא השיג את מטרותיו.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T05:11:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T05:11:00+00:00",
     "last_update_at": "2026-10-06T05:11:00+00:00",
     "what_is_not_verified": "הצהרה פוליטית; לא ברור מה מצב הנשק של הארגון בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon/961470/",
       "published_at": "2026-10-06T05:11:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-06",
     "title": "ממשלת לבנון מקדמת הרחבת נוכחות המדינה בדרום",
     "summary": "אחרי שיחותיו בוושינגטון, ראש הממשלה סלאם מקדם תוכנית להרחבת נוכחות הצבא והמדינה בדרום לבנון. שר הפנים הדגיש את הנושא בפגישה עם הנשיא עון.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T14:03:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T14:03:00+00:00",
     "last_update_at": "2026-10-06T04:08:00+00:00",
     "what_is_not_verified": "לוחות זמנים ותקציב לתוכנית לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/961324/after-washington-talks-salam-turns-to-three-key-files-at-home/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961324",
       "published_at": "2026-10-05T14:03:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon/961468/",
       "published_at": "2026-10-06T04:08:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-07",
     "title": "צבא לבנון פתח בתרגיל משותף עם בריטניה",
     "summary": "צבא לבנון פתח בתרגיל \"פגסוס סידר 2026\" עם כוחות בריטיים, בהשתתפות נציגים מארה\"ב ומצרפת.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T21:38:21+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T21:38:21+00:00",
     "last_update_at": "2026-10-05T21:38:21+00:00",
     "what_is_not_verified": "היקף הכוחות לא פורסם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-hold-joint-drills-britain",
       "published_at": "2026-10-05T21:38:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-08",
     "title": "נערה נפצעה באורח בינוני באירוע בשטח חקלאי ברמת הגולן",
     "summary": "נערה נפצעה באורח בינוני באירוע בשטח חקלאי ברמת הגולן.",
     "axis": "רמת הגולן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T07:37:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T07:37:19+00:00",
     "last_update_at": "2026-10-06T07:37:19+00:00",
     "what_is_not_verified": "נסיבות האירוע לא פורסמו; לא ידוע אם הוא ביטחוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1374157",
       "published_at": "2026-10-06T07:37:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10061225-09",
     "title": "קריאה של השר לשעבר איוב קרא להשתלט על א-סווידא",
     "summary": "השר לשעבר איוב קרא קרא בפומבי לדרוזים להשתלט על העיר א-סווידא שבדרום סוריה.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T23:48:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T23:48:35+00:00",
     "last_update_at": "2026-10-05T23:48:35+00:00",
     "what_is_not_verified": "אין סימן לכך שזו עמדה רשמית של ממשלת ישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-israeli-druze-politician-calls-seizing-syrias-sweida",
       "published_at": "2026-10-05T23:48:35+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10061225-10",
     "title": "שלושה פיצוצים בתשתיות גז בסוריה בתוך שישה שבועות",
     "summary": "לפי מרכז עלמא, היו שלושה פיצוצים בצנרת גז בסוריה בתוך כשישה שבועות: בחסכה, בדיר א-זור ובצינור לתחנת הכוח תשרין ליד דמשק.",
     "axis": "סוריה פנים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T09:07:47+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T09:07:47+00:00",
     "last_update_at": "2026-10-05T12:25:04+00:00",
     "what_is_not_verified": "מי עומד מאחורי הפיצוצים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/three-blasts-in-six-weeks-syrias-energy-infrastructure-faces-a-security-test/",
       "published_at": "2026-10-05T09:07:47+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נסיבות פציעת הנערה ברמת הגולן.",
    "מטרת הכניסה לדרום קוניטרה ומשכה.",
    "נפגעים מהירי באל-מנסורי.",
    "האחראים לפיצוצי הגז בסוריה."
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת חדירות למוצבים בדרום סוריה",
      "ניטרול אמצעי לחימה באזור"
     ],
     "inferred": [
      "ביסוס קו הגנה קבוע לאורך \"סופה 53\"",
      "לחץ על חיזבאללה בלי להסלים"
     ],
     "forecast": [
      "המשך פעילות קרקעית בקוניטרה והחרפת המחאה הדיפלומטית הסורית"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "חיזוק נוכחות המדינה והצבא בדרום"
     ],
     "inferred": [
      "לשמור על ערוץ השיחות עם וושינגטון",
      "לצמצם עילה לתקיפות ישראליות"
     ],
     "forecast": [
      "פריסה הדרגתית ואיטית בגלל התנגדות חיזבאללה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "התנגדות לפירוק הנשק"
     ],
     "inferred": [
      "לשקם יכולות בלי לפתוח באש"
     ],
     "forecast": [
      "המשך מתיחות פוליטית בתוך לבנון ולא הסלמה מיידית מול ישראל"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "דרישה לנסיגה ישראלית ולכיבוד הסכם 1974"
     ],
     "inferred": [
      "גיוס תמיכה ערבית ובינלאומית נגד ישראל"
     ],
     "forecast": [
      "פנייה נוספת לאו\"ם, בלי עימות צבאי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/three-blasts-in-six-weeks-syrias-energy-infrastructure-faces-a-security-test/",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-raid-in-syria-s-quneitra/4079190",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon/961468/",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1374157",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-israeli-druze-politician-calls-seizing-syrias-sweida",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-hold-joint-drills-britain",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25291",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956358",
     "accessed_at": "2026-10-06T12:25:04+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-06T09:48:02+00:00",
  "changes": {
   "NORTH-10061225-01": {
    "kind": "new"
   },
   "NORTH-10061225-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקריות ביטחוניות ופעילות צה\"ל במרחב האבטחה בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10061225-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "גינויים נגד פעולות ישראל ועבודות הנדסיות בקו סופה 53 בסוריה",
    "score": 1.0
   },
   "NORTH-10061225-04": {
    "kind": "new"
   },
   "NORTH-10061225-05": {
    "kind": "new"
   },
   "NORTH-10061225-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מהלכים לחיזוק נוכחות שלטון לבנון בדרום המדינה ושיח מול חיזבאללה",
    "score": 1.0
   },
   "NORTH-10061225-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פתיחת תרגיל צבאי משותף של צבא לבנון ובריטניה",
    "score": 1.0
   },
   "NORTH-10061225-08": {
    "kind": "new"
   },
   "NORTH-10061225-09": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "קריאה של פוליטיקאי ישראלי להשתלטות על א-סווידא",
    "score": 1.0
   },
   "NORTH-10061225-10": {
    "kind": "same",
    "from": "initial",
    "to": "assessment",
    "prev": "פגיעות ופיצוצים חוזרים בתשתיות הגז והאנרגיה בסוריה",
    "score": 1.0
   }
  }
 }
};
