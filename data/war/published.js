/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-29T2342__yemen-202609292342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-29T23:42:40+00:00",
   "window": {
    "from": "2026-09-28T23:42:40+00:00",
    "to": "2026-09-29T23:42:40+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609292342"
   },
   "summary": "בלחימה בתימן מתנהלים עימותים קרקעיים ואוויריים אינטנסיביים בין ממשלת תימן לבין החות'ים המגובים באיראן במחוזות כמו תעז ולאחג'. במקביל, סעודיה ואיחוד האמירויות מקיימות מגעים פוליטיים כדי לגבש שיתוף פעולה מול הלחץ הצבאי שמפעילים החות'ים בגבולות ובמפרץ.",
   "fronts": [
    {
     "name": "ממשלת תימן מול החות'ים",
     "status": "לחימה עצימה וחילופי תקיפות"
    },
    {
     "name": "הזירה הימית ומצר באב אל-מנדב",
     "status": "מאמצי התבססות חות'יים והשפעה על נתיבי השיט"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09292342-01",
     "title": "פגישת מנהיגים בריאד",
     "summary": "סגן נשיא איחוד האמורות ערך ביקור בריאד ונפגש עם יורש העצר הסעודי ושר ההגנה",
     "axis": "סעודיה-איחוד האמירויות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T20:39:08+00:00",
     "last_update_at": "2026-09-29T21:14:18+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_saudi_press_agency",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-turns-uae-white-horse-it-gears-battle-yemens-houthis",
       "published_at": "2026-09-29T21:14:18+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_saudi_press_agency",
       "url": "https://www.al-monitor.com/originals/2026/09/uae-vice-president-visits-saudi-arabia-first-visit-rift",
       "published_at": "2026-09-29T20:46:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_saudi_press_agency",
       "url": "https://www.newarab.com/news/uae-vice-president-visits-saudi-arabia-first-visit-rift",
       "published_at": "2026-09-29T20:39:08+00:00"
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
     "id": "YEMEN-09292342-02",
     "title": "תקיפות כוחות ממשלת תימן",
     "summary": "דובר הכוחות המזוינים של תימן דיווח על ביצוע מאות תקיפות מדויקות נגד עמדות חות'יות ביממה האחרונה",
     "axis": "ממשלת תימן מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T20:05:32+00:00",
     "last_update_at": "2026-09-29T21:10:45+00:00",
     "what_is_not_verified": "מספר התקיפות המדויק ותוצאותיהן מבוססים על הצהרת הדובר בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_6b719bc3e97c3f6b",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-say-they-conducted-414-strikes-houthis-last-24",
       "published_at": "2026-09-29T21:10:45+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_2b8c1e342e2ca0a4",
       "url": "https://www.sabanew.net/viewstory/153211",
       "published_at": "2026-09-29T20:05:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09292342-03",
     "title": "תקיפות באל-וזאיעה",
     "summary": "כוחות ממשלת תימן ביצעו תקיפות באזור אל-וזאיעה במחוז תעז",
     "axis": "ממשלת תימן מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T19:53:38+00:00",
     "last_update_at": "2026-09-29T19:53:38+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים אינם מאומתים ממקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9d78eb9c42f56c93",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-strikes-houthi-positions-yemens-al",
       "published_at": "2026-09-29T19:53:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09292342-04",
     "title": "אזהרת צבא תימן לאזרחים",
     "summary": "צבא תימן הזהיר אזרחים להתרחק ממפקדות ומאתרים המשמשים את החות'ים לפעילות צבאית",
     "axis": "ממשלת תימן מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T16:08:14+00:00",
     "last_update_at": "2026-09-29T18:42:18+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_fca2721fd4c14f78",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-government-forces-warn-all-sites-used-houthis-legitimate-targets",
       "published_at": "2026-09-29T18:42:18+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_5c5dda70e841583c",
       "url": "https://www.sabanew.net/viewstory/153199",
       "published_at": "2026-09-29T16:08:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09292342-05",
     "title": "קריאה לגיוס צבאי בתימן",
     "summary": "ראש מועצת ההנהגה הנשיאותית קרא לכוחות המזוהים עם הממשלה להגביר את המוכנות ולהתגייס",
     "axis": "ממשלת תימן מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T16:35:44+00:00",
     "last_update_at": "2026-09-29T16:35:44+00:00",
     "what_is_not_verified": "האם הקריאה מתורגמת בפועל למערכה בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_maysaa_shuja_al_deen",
       "url": "https://www.newarab.com/news/yemen-mobilisation-call-signals-escalation-backed-saudis",
       "published_at": "2026-09-29T16:35:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09292342-06",
     "title": "הפגזה חות'ית על תעז",
     "summary": "נמסר על הרוג ופצועים כתוצאה מפגזים חות'ים על כפרים בג'בל ג'ראד ממערב לתעז",
     "axis": "ממשלת תימן מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T14:39:09+00:00",
     "last_update_at": "2026-09-29T14:39:09+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת ממקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_saba_aden",
       "url": "https://www.sabanew.net/viewstory/153184",
       "published_at": "2026-09-29T14:39:09+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים והנזק המדויק בתקיפות שדווחו על ידי כוחות ממשלת תימן",
    "היקף הגיוס והיישום בפועל של קריאת הממשלה למוביליזציה צבאית"
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
     "value": 3.0561,
     "unit": "ILS",
     "change_pct": -0.24,
     "source_id": "src_ecb",
     "as_of": "2026-09-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [],
     "inferred": [
      "ביסוס השליטה באזורים האסטרטגיים סביב באב אל-מנדב והחוף המערבי",
      "הפעלת לחץ צבאי וימי על סעודיה והשחקנים האזוריים"
     ],
     "forecast": [
      "המשך ניסיונות ההתבססות ברמות שמעל באב אל-מנדב",
      "המשך מתקפות כטב\"מים וטילים לעבר סעודיה"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [],
     "inferred": [
      "יצירת חזית אחידה יחד עם איחוד האמירויות לבלימת המתקפה החות'ית",
      "הגנה על מסדרונות ייצוא הנפט בים האדום"
     ],
     "forecast": [
      "התקרבות דיפלומטית מחודשת עם איחוד האמירויות",
      "הגברת התמיכה בממשלה המוכרת בתימן"
     ]
    },
    {
     "actor": "ממשלת תימן",
     "declared": [
      "קריאה להגברת המוכנות והמוביליזציה הצבאית נגד החות'ים"
     ],
     "inferred": [
      "בלימת ההתקדמות החות'ית במחוזות המערביים והדרומיים"
     ],
     "forecast": [
      "המשך ביצוע תקיפות ממוקדמות וסימון אתרים חות'יים כיעדים לגיטימיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/uae-vice-president-visits-saudi-arabia-first-visit-rift",
     "accessed_at": "2026-09-29T23:42:40+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-government-forces-warn-all-sites-used-houthis-legitimate-targets",
     "accessed_at": "2026-09-29T23:42:40+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-mobilisation-call-signals-escalation-backed-saudis",
     "accessed_at": "2026-09-29T23:42:40+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153184",
     "accessed_at": "2026-09-29T23:42:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-28T18:19:11+00:00",
  "changes": {
   "YEMEN-09292342-01": {
    "kind": "possible",
    "prev": "יירוט כטב\"מים וטילים בליסטיים סעודי לעבר אזור ריאד וח'מיס מושייט",
    "score": 0.633
   },
   "YEMEN-09292342-02": {
    "kind": "new"
   },
   "YEMEN-09292342-03": {
    "kind": "new"
   },
   "YEMEN-09292342-04": {
    "kind": "possible",
    "prev": "הסלמה מחודשת בלחימה בתימן ופגיעה בחיי האזרחים",
    "score": 0.467
   },
   "YEMEN-09292342-05": {
    "kind": "possible",
    "prev": "הכרזה על גיוס כללי נגד החות'ים בתימן",
    "score": 0.467
   },
   "YEMEN-09292342-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-01T0525__iran-202610010525.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-01T05:25:59+00:00",
   "window": {
    "from": "2026-09-30T05:25:59+00:00",
    "to": "2026-10-01T05:25:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610010525"
   },
   "summary": "העימות בין איראן לבין ישראל וארה\"ב מתנהל במספר חזיתות הכוללות אירועי תעופה חשודים, האשמות הדדיות על פעולות טרור וסיכולים, לצד לחץ כלכלי וסגר ימי שמפעילה ארצות הברית. במקביל, כוחות ארה\"ב השלימו את נסיגתם מעיראק, דבר שעורר חגיגות בקרב מיליציות פרו-איראניות, בעוד המגעים הדיפלומטיים והגרעיניים נתונים במבוי סתום ומלווים באיומים צבאיים.",
   "fronts": [
    {
     "name": "ישראל - איראן ושלוחותיה",
     "status": "פעיל ומתוח"
    },
    {
     "name": "ארה\"ב - איראן",
     "status": "פעיל הכולל לחץ ימי ודיפלומטי"
    },
    {
     "name": "בריטניה - איראן",
     "status": "מתוח בעקבות אירועים ביטחוניים"
    }
   ],
   "events": [
    {
     "id": "IRAN-10010525-01",
     "title": "ניסיון תקיפה וטיסה חשודה בדרך לישראל",
     "summary": "אירוע חריג בטיסה שיועדה לתל אביב ובו נטען לניסיון פגיעה במטוס, כאשר מתנהלת חקירה בנושא",
     "axis": "ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T22:58:10+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-30T22:58:10+00:00",
     "last_update_at": "2026-10-01T04:55:41+00:00",
     "what_is_not_verified": "האם איראן עמדה מאחורי ניסיון הפגיעה במטוס ומה היו פרטי התקרית המדויקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/01/netanyahu-flydubai-halts-all-flights-to-israel",
       "published_at": "2026-10-01T04:55:41+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sk4mypcczx",
       "published_at": "2026-10-01T04:00:10+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/netanyahu-says-israel-will-get-root-co-pilot-foiled-bid-crash-flydubai-flight",
       "published_at": "2026-10-01T03:46:33+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/netanyahu-says-too-early-tell-who-behind-attempt-crashing-israel-bound",
       "published_at": "2026-10-01T02:55:29+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21527219",
       "published_at": "2026-09-30T23:46:19+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21527168",
       "published_at": "2026-09-30T22:58:10+00:00"
      }
     ],
     "places": [
      {
       "name": "תל אביב, ישראל",
       "lat": 32.0853,
       "lon": 34.7818
      }
     ]
    },
    {
     "id": "IRAN-10010525-02",
     "title": "הצהרת בריטניה על מעורבות איראנית לכאורה ליד בסיס חיל האוויר",
     "summary": "ראש ממשלת בריטניה הצהיר כי יש אינדיקציות חזקות למעורבות איראנית באירוע ביטחוני ליד בסיס פיירפורד",
     "axis": "ארה\"ב ובריטניה-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-30T05:38:01+00:00",
     "last_update_at": "2026-10-01T02:30:45+00:00",
     "what_is_not_verified": "האחריות המדויקת של איראן לאירוע והאם החשודים שחררו בערבות כראוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/1/uk-says-iran-may-be-linked-to-alleged-airbase-plot-drawing-angry-denial?traffic_source=rss",
       "published_at": "2026-10-01T02:30:45+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sjvni7s5fx",
       "published_at": "2026-10-01T01:42:31+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/uk-pm-says-strong-indications-iran-involved-airbase-incident",
       "published_at": "2026-09-30T22:30:26+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cjwyz59k5y75o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-30T21:26:59+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609308223",
       "published_at": "2026-09-30T19:31:12+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48134",
       "published_at": "2026-09-30T16:43:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131049",
       "published_at": "2026-09-30T05:38:01+00:00"
      }
     ],
     "places": [
      {
       "name": "פיירפורד, בריטניה",
       "lat": 51.7108,
       "lon": -1.782
      }
     ]
    },
    {
     "id": "IRAN-10010525-03",
     "title": "סיום נסיגת הכוחות האמריקאיים מעיראק",
     "summary": "הפנטגון הוציא לפועל את השלמת הנסיגה הרשמית של כוחות ארצות הברית מעיראק, ומיליציות חגגו זאת",
     "axis": "ארה\"ב-עיראק ומיליציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T13:59:02+00:00",
     "last_update_at": "2026-09-30T18:40:36+00:00",
     "what_is_not_verified": "ההשלכות הביטחוניות המדויקות על התחזקות דאעש והמיליציות באזור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_701d4df228a87ee9",
       "url": "https://www.theguardian.com/us-news/2026/sep/30/pentagon-formal-withdrawal-troops-iraq",
       "published_at": "2026-09-30T18:40:36+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_5a9c051240df96d2",
       "url": "https://www.fdd.org/analysis/2026/09/30/us-forces-complete-departure-from-iraq-as-anti-islamic-state-mission-in-iraq-ends/",
       "published_at": "2026-09-30T16:39:17+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "fh_701d4df228a87ee9",
       "url": "https://www.longwarjournal.org/archives/2026/09/us-forces-complete-departure-from-iraq-as-anti-islamic-state-mission-in-iraq-ends.php",
       "published_at": "2026-09-30T16:33:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_701d4df228a87ee9",
       "url": "https://t.me/abualiexpress/131097",
       "published_at": "2026-09-30T13:59:02+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      },
      {
       "name": "ארביל, עיראק",
       "lat": 36.1912,
       "lon": 44.0094
      }
     ]
    },
    {
     "id": "IRAN-10010525-04",
     "title": "אכיפת הסגר הימי של פיקוד המרכז האמריקאי על נמלי איראן",
     "summary": "פיקוד המרכז האמריקאי הודיע על הפניית כלי שיט מסחריים כדי לאכוף את הסגר הימי על איראן",
     "axis": "ארה\"ב-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-30T22:20:23+00:00",
     "last_update_at": "2026-09-30T22:20:23+00:00",
     "what_is_not_verified": "היקף ההשפעה המדויק על הכלכלה האיראנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_ea570342c2121045",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-centcom-says-it-redirected-125-vessels-enforce-iran-blockade",
       "published_at": "2026-09-30T22:20:23+00:00"
      }
     ],
     "places": [
      {
       "name": "הים הערבי",
       "lat": 20.0,
       "lon": 65.0
      }
     ]
    },
    {
     "id": "IRAN-10010525-05",
     "title": "תפיסת מטוס איראני בטורקיה בגין חובות",
     "summary": "רשויות טורקיה עצרו מטוס של חברת תעופה איראנית בנמל תעופה בעקבות חוב כספי",
     "axis": "איראן-טורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-30T15:58:29+00:00",
     "last_update_at": "2026-09-30T15:58:29+00:00",
     "what_is_not_verified": "הקשר המדויק של התפיסה לסנקציות האמריקאיות החדשות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/turkey-seizes-irans-caspian-airlines-jet-over-34m-debt",
       "published_at": "2026-09-30T15:58:29+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "IRAN-10010525-06",
     "title": "סיכול מזימת חבלה של חזבאללה בסוריה",
     "summary": "כוחות הביטחון בסוריה דיווחו על סיכול תא שפעל מטעם חזבאללה ותכנן מתקפות רקטיות באזור דרום סוריה",
     "axis": "ישראל-סוריה-חזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T19:09:58+00:00",
     "last_update_at": "2026-09-30T19:09:58+00:00",
     "what_is_not_verified": "האם היעד הספציפי היה כוחות ישראל או שטח ישראל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_1f64e743588fca1b",
       "url": "https://www.fdd.org/analysis/2026/09/30/syria-says-it-thwarted-hezbollah-plot-israel-likely-target/",
       "published_at": "2026-09-30T19:09:58+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "IRAN-10010525-07",
     "title": "מחלוקת דיפלומטית סביב משלחת איראן לאו\"ם בארה\"ב",
     "summary": "חילופי גרסאות בין ארה\"ב לאיראן בנוגע לדרישה או ליציאה של המשלחת האיראנית מניו יורק לאחר מבוי סתום בשיחות",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T01:42:31+00:00",
     "last_update_at": "2026-10-01T04:29:46+00:00",
     "what_is_not_verified": "האם ניתנה פקודת גירוש רשמית על ידי מזכיר המדינה האמריקאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_ede755261841c563",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-un-mission-dismisses-us-expulsion-claim-baseless-and-worthless",
       "published_at": "2026-10-01T04:29:46+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_ede755261841c563",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21527431",
       "published_at": "2026-10-01T03:32:24+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_ede755261841c563",
       "url": "https://www.maariv.co.il/breaking-news/article-1372406",
       "published_at": "2026-10-01T03:10:54+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_ede755261841c563",
       "url": "https://www.ynet.co.il/news/article/sjvni7s5fx",
       "published_at": "2026-10-01T01:42:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      },
      {
       "name": "דוחא, קטר",
       "lat": 25.2856,
       "lon": 51.5264
      }
     ]
    }
   ],
   "not_verified": [
    "הקשר הישיר של ממשלת איראן לאירועי טיסת פליי דובאי ולתקרית בבסיס פיירפורד בבריטניה",
    "הפרטים המדויקים סביב עזיבת המשלחת האיראנית מארה\"ב והאם גורשה בפועל",
    "טענות סוכנות פארס לפיהן ישראל תכננה פעולת דגל כוזב באמצעות המוסד"
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
     "value": 3.0736,
     "unit": "ILS",
     "change_pct": 0.57,
     "source_id": "src_ecb",
     "as_of": "2026-09-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "המשך פיתוח מרחב סייבר ותקשורת עצמאי",
      "הגנה על נכסיה התרבותיים והתנגדות ללחץ זר"
     ],
     "inferred": [
      "שימור השפעה אזורית באמצעות מיליציות ושלוחות",
      "היערכות לעימות ממושך ומלחמה רחבת היקף מול ארה\"ב וישראל"
     ],
     "forecast": [
      "החמרת המתיחות סביב נתיבי השיט והתעופה",
      "המשך ניסיונות עקיפים לפגוע ביעדים מערביים וישראליים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "חקר לעומק של אירועי הטרור והתעופה המכוונים נגדה",
      "מניעת ביסוס תשובות טרור של שלוחות איראן בגבולותיה"
     ],
     "inferred": [
      "הידוק שיתוף פעולה מודיעיני וביטחוני אזורי מול איומי איראן",
      "מעקב קפדני אחר ניסיונות הסחה ופעולות טרור של ציר ההתנגדות"
     ],
     "forecast": [
      "השתתפות בחקירות בינלאומיות של אירועי התעופה",
      "המשך פעילות סיכול נגד תשתיות שלוח איראניות"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "אכיפת סגר ימי מלא על נמלי איראן",
      "השלמת נסיגה צבאית מעיראק תוך שמירת מוכנות אזורית"
     ],
     "inferred": [
      "הפעלת לחץ מקסימלי כלכלי ודיפלומטי על טהרן",
      "שמירת אופציה לתגובה צבאית חריפה במקרה של הסלמה"
     ],
     "forecast": [
      "המשך אכיפת סנקציות חמורות בתחומי התעופה והסחר",
      "תגובה אפשרית לפרובוקציות איראניות במפרץ או באירופה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/1/uk-says-iran-may-be-linked-to-alleged-airbase-plot-drawing-angry-denial?traffic_source=rss",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/turkey-seizes-irans-caspian-airlines-jet-over-34m-debt",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cjwyz59k5y75o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/2026/09/30/syria-says-it-thwarted-hezbollah-plot-israel-likely-target/",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/sep/30/pentagon-formal-withdrawal-troops-iraq",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609308223",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21527431",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/09/us-forces-complete-departure-from-iraq-as-anti-islamic-state-mission-in-iraq-ends.php",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1372406",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-un-mission-dismisses-us-expulsion-claim-baseless-and-worthless",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131097",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48134",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sjvni7s5fx",
     "accessed_at": "2026-10-01T05:25:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-29T23:40:44+00:00",
  "changes": {
   "IRAN-10010525-01": {
    "kind": "new"
   },
   "IRAN-10010525-02": {
    "kind": "new"
   },
   "IRAN-10010525-03": {
    "kind": "new"
   },
   "IRAN-10010525-04": {
    "kind": "new"
   },
   "IRAN-10010525-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "עיקול מטוס איראני באיסטנבול",
    "score": 0.817
   },
   "IRAN-10010525-06": {
    "kind": "new"
   },
   "IRAN-10010525-07": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-30T2340__ukraine-202609302340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-30T23:40:39+00:00",
   "window": {
    "from": "2026-09-29T23:40:39+00:00",
    "to": "2026-09-30T23:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609302340"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות הפצצות אוויריות כבדות של רוסיה על תשתיות אנרגיה, אזורים עירוניים ואתרים כלכליים באוקראינה, לצד פעילות הגנה ותקיפה נגדית של אוקראינה במזרח ובדרום. במקביל, מתנהלת מערכה דיפלומטית וכלכלית סביב סנקציות, הגבלות על אמנים, ואיומים מצד רוסיה כלפי נאט\"ו.",
   "fronts": [
    {
     "name": "חזית מזרח דונבאס",
     "status": "פעיל"
    },
    {
     "name": "חזית האוויר והתשתיות בקייב",
     "status": "פעיל"
    },
    {
     "name": "חזית דרום זפוריז'יה",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09302340-01",
     "title": "תקיפת מטוס אוקראיני בדונבאס",
     "summary": "מטוס תקיפה אוקראיני ביצע גיחה בגובה נמוך והטיל תחמושת מדויקת מדגם AASM HAMMER על מטרה רוסית במזרח דונבאס",
     "axis": "חזית האוויר והקרקע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T23:37:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T23:37:46+00:00",
     "last_update_at": "2026-09-30T23:37:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48151",
       "published_at": "2026-09-30T23:37:46+00:00"
      }
     ],
     "places": [
      {
       "name": "דונבאס, אוקראינה",
       "lat": 47.9864,
       "lon": 37.2746
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-02",
     "title": "פציעת איש חילוץ בקייב",
     "summary": "איש חילוץ נפצע במתקפה רוסית שנייה על קייב",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T22:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T22:33:00+00:00",
     "last_update_at": "2026-09-30T22:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4169575-recordholding-rescue-worker-injured-in-second-russian-shelling-attack-in-kyiv.html",
       "published_at": "2026-09-30T22:33:00+00:00"
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
     "id": "UKRAINE-09302340-03",
     "title": "פגיעה באזרחים ונזק במחוז קייב",
     "summary": "מתקפה רוסית פגעה בחמישה מחוזות בקייב והובילה לפציעת אישה ונזק למבנים",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T18:27:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T18:27:00+00:00",
     "last_update_at": "2026-09-30T20:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4169795-russian-attack-in-kyiv-regions-boryspil-district-injures-woman.html",
       "published_at": "2026-09-30T20:27:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055875/",
       "published_at": "2026-09-30T18:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בוריספיל, אוקראינה",
       "lat": 50.3512,
       "lon": 30.9508
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-04",
     "title": "שימוש ברחפן חיתוך פלגה על ידי רוסיה",
     "summary": "רוסיה השתמשה לראשונה ברחפן המצויד בראש קרב המיועד לחיתוך עמודי חשמל",
     "axis": "חזית התשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T16:25:07+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T16:25:07+00:00",
     "last_update_at": "2026-09-30T18:19:35+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-uses-drone-with-warhead-designed-to-cut-power-pylons-for-1st-time-zelensky-adviser-says/",
       "published_at": "2026-09-30T18:19:35+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-strikes-ukrainian-power-pylon-with-steel-cutting-drone-for-1st-time-zelenskys-adviser-says/",
       "published_at": "2026-09-30T16:25:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09302340-05",
     "title": "דחיית ערעור חברת נכסים רוסית בצ'כיה",
     "summary": "בית משפט מנהלי עליון בצ'כיה דחה ערעור של חברת ניהול נכסים רוסית על הקפאת 61 נכסים",
     "axis": "חזית הסנקציות והנכסים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T17:25:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T17:25:00+00:00",
     "last_update_at": "2026-09-30T17:25:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055866/",
       "published_at": "2026-09-30T17:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פראג, צ'כיה",
       "lat": 50.0875,
       "lon": 14.4213
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-06",
     "title": "פינוי נפגעים באמצעות רובוט קרקעי בזפוריז'יה",
     "summary": "כוחות אוקראיניים פינו ארבעה חיילים פצועים מקו החזית באמצעות רכב קרקעי בלתי מאויש",
     "axis": "חזית דרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T16:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T16:41:00+00:00",
     "last_update_at": "2026-09-30T16:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055856/",
       "published_at": "2026-09-30T16:41:00+00:00"
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
     "id": "UKRAINE-09302340-07",
     "title": "תקיפת פצצות אוויריות בסומי",
     "summary": "תקיפה רוסית באמצעות פצצות אוויריות מונחות פגעה בסומי ופצעה שישה בני אדם",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T16:28:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T16:28:00+00:00",
     "last_update_at": "2026-09-30T16:28:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055854/",
       "published_at": "2026-09-30T16:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סומי, אוקראינה",
       "lat": 50.912,
       "lon": 34.8028
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-08",
     "title": "נפילת כטב\"ם במחוז רובנו",
     "summary": "כטב\"ם רוסי נחת במחוז רובנו באוקראינה מבלי להתפוצץ",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T11:28:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T11:28:36+00:00",
     "last_update_at": "2026-09-30T11:28:36+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48122",
       "published_at": "2026-09-30T11:28:36+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות הקרמלין לפיהן רוסיה מקפידה בקפדנות על כל התקנים ההומניטריים כלפי עצורים אוקראיניים",
    "דיווחים על היערכות נאט\"ו לבלוקאדה ימית ואווירית של מחוז קלינינגרד",
    "הערכות לפיהן ולדימיר פוטין הורה אישית על תקיפות אתרים אזרחיים כדי לזרוע פחד"
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
     "value": 1.1355,
     "unit": "USD",
     "change_pct": 0.0,
     "source_id": "src_ecb",
     "as_of": "2026-09-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה במפעלים ובמפעלים לייצור נשק באירופה המספקים נשק לקייב כמטרות צבאיות לגיטימיות"
     ],
     "inferred": [
      "שחיקת הכלכלה האוקראינית והרסת תשתית האנרגיה כדי לשתק את העורף לקראת החורף",
      "יצירת הרתעה מול נאט\"ו באמצעות איומים גרעיניים סביב קלינינגרד"
     ],
     "forecast": [
      "המשך מתקפות אוויריות אינטנסיביות על מרכזי אוכלוסייה ותשתיות חיוניות באוקראינה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על המדינה והשבת ילדים אוקראינים שפונו או נלקחו"
     ],
     "inferred": [
      "שימור רציפות תפקודית של הכלכלה למרות נזקי התקיפות והתראות האזעקה הממושכות",
      "פיתוח והטמעה של אמצעים טכנולוגיים מתקדמים כמו רובוטים קרקעיים וחימוש מדויק"
     ],
     "forecast": [
      "פנייה מתמשכת לבעלי ברית מערביים בדרישה לסיוע כלכלי וצבאי לייצוב שוק האנרגיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russia-strikes-ukrainian-power-pylon-with-steel-cutting-drone-for-1st-time-zelenskys-adviser-says/",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055854/",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48122",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4169795-russian-attack-in-kyiv-regions-boryspil-district-injures-woman.html",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-29T16:37:24+00:00",
  "changes": {
   "UKRAINE-09302340-01": {
    "kind": "new"
   },
   "UKRAINE-09302340-02": {
    "kind": "possible",
    "prev": "פגיעת כטב\"מים וטילים בבניין האקדמיה למדעים בקייב",
    "score": 0.633
   },
   "UKRAINE-09302340-03": {
    "kind": "new"
   },
   "UKRAINE-09302340-04": {
    "kind": "new"
   },
   "UKRAINE-09302340-05": {
    "kind": "new"
   },
   "UKRAINE-09302340-06": {
    "kind": "new"
   },
   "UKRAINE-09302340-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פגיעת פצצות דואה בבית ספר ובאזור מגורים בסומי",
    "score": 0.817
   },
   "UKRAINE-09302340-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-30T1650__north-202609301650.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-30T16:50:58+00:00",
   "window": {
    "from": "2026-09-29T16:50:58+00:00",
    "to": "2026-09-30T16:50:58+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609301650"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות צבאית נמשכת הכוללת תקיפות וחשיפת תשתיות טרור בסוריה ובלבנון, לצד שינויי פריסת כוחות של ישראל ועימותים מתמשכים סביב דרישות לפירוז חיזבאללה. במקביל, מתקיימים מגעים דיפלומטיים והצהרות פוליטיות בין ממשלות סוריה ולבנון, תוך מעורבות של גורמים אזוריים ובינלאומיים.",
   "fronts": [
    {
     "name": "חזית לבנון-ישראל",
     "status": "פעילה (תקיפות, חילופי אש, פריסת כוחות ומשא ומתן דיפלומטי)"
    },
    {
     "name": "חזית סוריה-ישראל",
     "status": "פעילה (חשיפת חוליות טרור וסיכול שיגורים בדרום סוריה)"
    }
   ],
   "events": [
    {
     "id": "NORTH-09301650-01",
     "title": "עצירת חוליית חיזבאללה באזור אגן הירמוך",
     "summary": "כוחות הביטחון הפנימי בסוריה עצרו חוליה המזוהה עם חיזבאללה באגן הירמוך, אשר עבדה על הקמת תשתיות לשיגור רקטות לעבר ישראל.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T21:09:53+00:00",
     "last_update_at": "2026-09-30T15:55:47+00:00",
     "what_is_not_verified": "זהותם המדויקת והרקע של העצורים טרם נחשפו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "fh_0071760f12350f4b",
       "url": "https://israel-alma.org/syrian-security-forces-intercept-a-hezbollah-cell-in-the-yarmouk-basin-september-29-2026/",
       "published_at": "2026-09-30T15:55:47+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_0071760f12350f4b",
       "url": "https://www.aa.com.tr/en/middle-east/syria-dismantles-hezbollah-linked-cell-in-southern-daraa-province/4073183",
       "published_at": "2026-09-29T23:27:53+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_0071760f12350f4b",
       "url": "https://www.newarab.com/news/syria-says-arrested-hezbollah-affiliated-cell-planning-attacks",
       "published_at": "2026-09-29T21:09:53+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-09301650-02",
     "title": "תקיפות ארטילריה ופיצוצים בדרום-מזרח לבנון",
     "summary": "דווח על תקיפות ארטילריה ישראליות בעיירה אל-חיאם ושמיעת פיצוץ בחואלה בדרום-מזרח לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T15:25:26+00:00",
     "last_update_at": "2026-09-30T15:25:26+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים הישירים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-media-reports-israeli-strikes-southeast-country",
       "published_at": "2026-09-30T15:25:26+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חיאם, לבנון",
       "lat": 33.3103,
       "lon": 35.6054
      },
      {
       "name": "חואלה, לבנון",
       "lat": 33.2102,
       "lon": 35.5187
      }
     ]
    },
    {
     "id": "NORTH-09301650-03",
     "title": "פציעת חייל לבנוני ואזרחים מפגיעת עצם חשוד או תקיפה בדרום לבנון",
     "summary": "ארבעה בני אדם, בהם חייל צבא לבנון ואזרחים, נפצעו בדרום לבנון כתוצאה מפיצוץ של עצם חשוד או תקיפה על רכב צבאי.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T04:27:43+00:00",
     "last_update_at": "2026-09-30T07:30:41+00:00",
     "what_is_not_verified": "פרטים מלאים על נסיבות הפיצוץ המדויקות מעבר להודעת הצבא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_7f7883c894d68ee2",
       "url": "https://www.aa.com.tr/en/middle-east/4-including-lebanese-soldier-injured-in-southern-lebanon-blast/4073353",
       "published_at": "2026-09-30T07:30:41+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_7f7883c894d68ee2",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960426/israeli-strike-on-army-vehicle-in-nabatieh-al-fawqa-seriously-wounds-l/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960426",
       "published_at": "2026-09-30T04:27:43+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      }
     ]
    },
    {
     "id": "NORTH-09301650-04",
     "title": "סיום פריסת חטיבת גולני בדרום לבנון לאחר שבעה חודשים",
     "summary": "כוחות צק\"ח גולני סיימו תקופת פעילות של שבעה חודשים בדרום לבנון ויצאו לרענון, תוך השמדת אמצעי לחימה ותשתיות טרור.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T06:00:25+00:00",
     "last_update_at": "2026-09-30T12:02:16+00:00",
     "what_is_not_verified": "לא צוין מי הכוח המדויק שיחליף אותם בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25252",
       "published_at": "2026-09-30T06:00:25+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/new-lebanon-israel-talks-set-20-oct-golani-brigade-leaves",
       "published_at": "2026-09-30T12:02:16+00:00"
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
     "id": "NORTH-09301650-05",
     "title": "דיונים משותפים בין סוריה ולבנון על נתיבי תיירות",
     "summary": "שרים מסוריה ומלבנון קיימו דיונים בנושא נתיבי תיירות משותפים והקלה על נהלי כניסת מבקרים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T14:55:17+00:00",
     "last_update_at": "2026-09-30T14:55:17+00:00",
     "what_is_not_verified": "החלטות מעשיות סופיות ולוחות זמנים מדויקים לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-lebanon-discuss-joint-tourism-routes-extending-to-jordan/4073961",
       "published_at": "2026-09-30T14:55:17+00:00"
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
    "זהותם המדויקת והרקע של העצורים בחוליית חיזבאללה באגן הירמוך.",
    "הפרטים המדויקים מתוך הצעות התיווך האמריקאיות והאיראניות שטרם פורסמו במלואן."
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
     "value": 3.0736,
     "unit": "ILS",
     "change_pct": 0.57,
     "source_id": "src_ecb",
     "as_of": "2026-09-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות תשתיות טרור בגבולות הצפון",
      "תגובה לעוינות מצד חיזבאללה וגורמים איראניים"
     ],
     "inferred": [
      "שמירת חופש פעולה מבצעי בדרום לבנון ובדרום סוריה",
      "הפעלת לחץ צבאי וביטחוני להרחקת איומים"
     ],
     "forecast": [
      "המשך פעילות צבאית ממוקדת נגד תשתיות טרור בגבולות",
      "היערכות להסלמה אפשרית בהתאם לתוצאות השיחות והבחירות"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך ההתנגדות ושמירה על עצמאות נשק הארגון",
      "דחיית דרישות הפירוז מנשק"
     ],
     "inferred": [
      "שיקום יכולות וניסיון להקים תשתיות חלופיות בדרום סוריה ובלבנון",
      "השתלבות במערך האזורי של ציר ההתנגדות מול ישראל"
     ],
     "forecast": [
      "המשך סירוב לדרישות המסירה של אמצעי הלחימה למדינה",
      "ניסיונות חוזרים להקמת תאי טרור בגבולות"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "שאיפה ליציבות וריבונות בלעדית על נשק במדינה",
      "קידום פתרונות דיפלומטיים מול ישראל"
     ],
     "inferred": [
      "ניסיונות להיעזר בלחץ בינלאומי ואמריקאי להשגת נסיגה ישראלית",
      "התמודדות קשה עם השפעת חיזבאללה הפנימית"
     ],
     "forecast": [
      "המשך מגעים דיפלומטיים צפויים בחודש אוקטובר",
      "מאבק פנימי מתמשך סביב סוגיית פירוז המיליציות"
     ]
    },
    {
     "actor": "ממשלת סוריה",
     "declared": [
      "שמירה על הביטחון והיציבות הפנימית",
      "דרישה לנסיגה ישראלית משטחים שנכבשו לאחר דצמבר 2024"
     ],
     "inferred": [
      "מניעת פעילות עצמאית של גורמים כמו חיזבאללה על אדמתה כדי לא להיגרר לעימות",
      "חיזוק קשרים דיפלומטיים וכלכליים עם אירופה ושכנותיה"
     ],
     "forecast": [
      "המשך פעולות אכיפה נגד תאי טרור זרים בתוך שטחה",
      "ניסיונות להרחיב שיתופי פעולה אזוריים ובינלאומיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/syrian-security-forces-intercept-a-hezbollah-cell-in-the-yarmouk-basin-september-29-2026/",
     "accessed_at": "2026-09-30T16:50:58+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-lebanon-discuss-joint-tourism-routes-extending-to-jordan/4073961",
     "accessed_at": "2026-09-30T16:50:58+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960426/israeli-strike-on-army-vehicle-in-nabatieh-al-fawqa-seriously-wounds-l/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960426",
     "accessed_at": "2026-09-30T16:50:58+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-media-reports-israeli-strikes-southeast-country",
     "accessed_at": "2026-09-30T16:50:58+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/new-lebanon-israel-talks-set-20-oct-golani-brigade-leaves",
     "accessed_at": "2026-09-30T16:50:58+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25252",
     "accessed_at": "2026-09-30T16:50:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-29T23:43:32+00:00",
  "changes": {
   "NORTH-09301650-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מעצר חוליית חיזבאללה באגן הירמוך",
    "score": 1.0
   },
   "NORTH-09301650-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פשיטות ותקיפות אוויריות ישראליות בדרום לבנון",
    "score": 0.65
   },
   "NORTH-09301650-03": {
    "kind": "new"
   },
   "NORTH-09301650-04": {
    "kind": "possible",
    "prev": "תקיפות והרס בכפר אל-מנצורי ובאזורים נוספים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-09301650-05": {
    "kind": "new"
   }
  }
 }
};
