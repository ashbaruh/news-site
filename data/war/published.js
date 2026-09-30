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
  "draft": "drafts/iran/2026-09-29T2340__iran-202609292340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-29T23:40:44+00:00",
   "window": {
    "from": "2026-09-28T23:40:44+00:00",
    "to": "2026-09-29T23:40:44+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609292340"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך כאשר ארה\"ב מקדמת לחץ כלכלי וסנקציות, בעוד איראן מדווחת על שחיקת מעמדה במצר הורמוז וקוראת לתגובות מדיניות. במקביל, שחקניות אזוריות כמו סעודיה והאמירויות מהדקות שורוק עקב האיומים מצד שלוחאן של איראן בתימן, וקטאר מעורבת בחילופי האשמות דיפלומטיים עם ישראל.",
   "fronts": [
    {
     "name": "החזית הישראלית-אמריקאית מול איראן",
     "status": "פעיל - כולל לחץ כלכלי, סנקציות, ואיומי עימות צבאי"
    },
    {
     "name": "חזית המפרץ מול השלוחים האיראנים",
     "status": "פעיל - הידוק שיתוף פעולה אזורי מול פעילות החות'ים"
    }
   ],
   "events": [
    {
     "id": "IRAN-09292340-01",
     "title": "הטלת סנקציות כלכליות אמריקאיות",
     "summary": "ארה\"ב הטילה סנקציות חדשות על גופים ויחידים הקשורים לסיוע צבאי ורכש נשק עבור איראן, וממשיכה בפעילות כלכלית נגד תשתיות הטרור שלה.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T18:46:27+00:00",
     "last_update_at": "2026-09-29T22:06:41+00:00",
     "what_is_not_verified": "היקף ההשפעה המדויק של הסנקציות אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_f9109a5dc269a6c9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-treasury-secretary-says-economic-action-against-iran-continue",
       "published_at": "2026-09-29T22:06:41+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_f8a739cb3145bf74",
       "url": "https://www.aljazeera.com/news/2026/9/29/us-sanctions-10-entities-for-allegedly-supporting-irans-military?traffic_source=rss",
       "published_at": "2026-09-29T20:48:34+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_604e90c968886b12",
       "url": "https://www.al-monitor.com/originals/2026/09/us-imposes-sanctions-13-tied-iran-weapons-procurement",
       "published_at": "2026-09-29T18:46:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09292340-02",
     "title": "הצעת איראן בנוגע למצר הורמוז",
     "summary": "איראן מסרה כי היא ממתינה לתגובת ארה\"ב להצעה לפתיחת מצר הורמוז בתמורה לדרישות שונות.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T06:32:31+00:00",
     "last_update_at": "2026-09-29T12:28:10+00:00",
     "what_is_not_verified": "פרטי ההצעה המדויקים ותגובת ארה\"ב בפועל אינם מאומתים ממקור ראשון אמריקאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_iran",
       "url": "https://www.iranintl.com/en/202609290526",
       "published_at": "2026-09-29T12:28:10+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_iran",
       "url": "https://www.france24.com/en/middle-east/20260929-iran-says-expects-us-response-tuesday-plan-reopen-strait-of-hormuz",
       "published_at": "2026-09-29T06:32:31+00:00"
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
     "id": "IRAN-09292340-03",
     "title": "עיקול מטוס איראני באיסטנבול",
     "summary": "מטוס בואינג 737 של חברת תעופה איראנית עוקל בנמל התעופה באיסטנבול בשל חוב כספי לחברת שירותים טורקית.",
     "axis": "איראן מול טורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T11:28:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T11:28:40+00:00",
     "last_update_at": "2026-09-29T11:28:40+00:00",
     "what_is_not_verified": "פרטי החוב המדויקים אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/48085",
       "published_at": "2026-09-29T11:28:40+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה באיסטנבול, טורקיה",
       "lat": 41.2749,
       "lon": 28.7323
      }
     ]
    },
    {
     "id": "IRAN-09292340-04",
     "title": "פסיקת בית משפט באיראן בפרשת סולימאני",
     "summary": "מערכת המשפט באיראן חייבה את ממשלת ארה\"ב לשלם 48 מיליארד דולר בהליך משפטי הקשור לחיסול קאסם סולימאני.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T11:26:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T11:26:12+00:00",
     "last_update_at": "2026-09-29T11:26:12+00:00",
     "what_is_not_verified": "יכולת האכיפה של הפסיקה אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_iranian_judiciary_representative_kazemi",
       "url": "https://t.me/alexmehacarmel/48084",
       "published_at": "2026-09-29T11:26:12+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "IRAN-09292340-05",
     "title": "פגישת בכירים מסעודים ואמירתים",
     "summary": "סגן נשיא איחוד האמירויות ביקר בסעודיה ונפגש עם יורש העצר הסעודי על רקע האיומים האזוריים והחורתים מתימן.",
     "axis": "המפרץ מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T20:25:53+00:00",
     "last_update_at": "2026-09-29T20:46:26+00:00",
     "what_is_not_verified": "ההסכמות המדויקות בין הצדדים אינן מאומתות במלואן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_989d80038769485a",
       "url": "https://www.al-monitor.com/originals/2026/09/uae-vice-president-visits-saudi-arabia-first-visit-rift",
       "published_at": "2026-09-29T20:46:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_6164956ff8e5504a",
       "url": "https://www.middleeasteye.net/news/saudi-arabia-turns-uae-white-horse-it-gears-battle-yemens-houthis",
       "published_at": "2026-09-29T20:25:53+00:00"
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
    "ההיתכנות והפרטים המדויקים של הצעת איראן לפתיחת מצר הורמוז ותגובת ארה\"ב עליה",
    "ההשפעה המעשית של פסיקת בית המשפט באיראן נגד ארה\"ב בפרשת סולימאני",
    "קיומו או אופיו המדויק של 'מזימת פיצוץ' איראנית נגד בסיס צבאי בריטי-אמריקאי"
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
     "value": 3.0561,
     "unit": "ILS",
     "change_pct": -0.24,
     "source_id": "src_ecb",
     "as_of": "2026-09-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "דרישה להסרת הסנקציות על מגזר הנפט",
      "דרישה לסיום הסגר הימי האמריקאי",
      "דרישה להפסקת אש אזורית בתמורה לפתיחת מצר הורמוז"
     ],
     "inferred": [
      "ניסיון להפחית את הלחץ הכלכלי באמצעות הצעות דיפלומטיות",
      "ניסיון לערער את הלגיטימציה של פעילות ארה\"ב וישראל באזור"
     ],
     "forecast": [
      "המשך מאבק כלכלי תחת לחץ הסנקציות",
      "התאמת אמצעי הלחימה לפי שינוי אופי העימות"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "המשך הפעילות הכלכלית במסגרת מבצע 'אוקיינוס כלכלי' להחלשת המשטר האיראני",
      "שיבוש המנגנונים הפיננסיים של משמרות המהפכה"
     ],
     "inferred": [
      "הפעלת לחץ מסיבי במטרה לאלץ את איראן לשאת ולתת או להביא לקריסת המערכת הכלכלית שלה"
     ],
     "forecast": [
      "המשך אכיפת סנקציות ומצור כלכלי עד להשגת יעדי הפירוק של תוכניות איראן"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות איראנית ושלוחותיה באזור"
     ],
     "inferred": [
      "חיזוק הבריתות האזוריות (כגון הסכמי אברהם והידוק קשרים עם מדינות המפרץ) מול הציר האיראני"
     ],
     "forecast": [
      "המשך שיתוף פעולה אסטרטגי ומדיני במרחב המפרץ נגד איומי איראן ושלוחותיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/29/us-sanctions-10-entities-for-allegedly-supporting-irans-military?traffic_source=rss",
     "accessed_at": "2026-09-29T23:40:44+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/uae-vice-president-visits-saudi-arabia-first-visit-rift",
     "accessed_at": "2026-09-29T23:40:44+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260929-iran-says-expects-us-response-tuesday-plan-reopen-strait-of-hormuz",
     "accessed_at": "2026-09-29T23:40:44+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609290526",
     "accessed_at": "2026-09-29T23:40:44+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/saudi-arabia-turns-uae-white-horse-it-gears-battle-yemens-houthis",
     "accessed_at": "2026-09-29T23:40:44+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48084",
     "accessed_at": "2026-09-29T23:40:44+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-29T09:00:14+00:00",
  "changes": {
   "IRAN-09292340-01": {
    "kind": "new"
   },
   "IRAN-09292340-02": {
    "kind": "new"
   },
   "IRAN-09292340-03": {
    "kind": "new"
   },
   "IRAN-09292340-04": {
    "kind": "new"
   },
   "IRAN-09292340-05": {
    "kind": "possible",
    "prev": "פגישת בכירים באיחוד הארויות בנושא איראן והחות'ים",
    "score": 0.467
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-29T1637__ukraine-202609291637.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-29T16:37:24+00:00",
   "window": {
    "from": "2026-09-28T16:37:24+00:00",
    "to": "2026-09-29T16:37:24+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609291637"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתאת תקיפות אוויריות אינטנסיביות של כטב\"מים וטילים מצד רוסיה על תשתיות ואזורי מגורים בקייב, סומי וחרקיב, לצד פעולות חבלה נגד מרכזי נתונים ותשתיות אנרגיה. במקביל, אוקראינה ממשיכה לקבל סיוע צבאי ממדינות המערב, הכולל הבטחות לאספקת מטוסי קרב, בעוד רוסיה מרחיבה את צבאה ומטילה הגבלות כלכליות נוספות.",
   "fronts": [
    {
     "name": "חזית קייב וסביבתה",
     "status": "פעיל - תקיפות כטב\"מים וטילים יומיומיות"
    },
    {
     "name": "חזית מזרח אוקראינה (חרקיב וסומי)",
     "status": "פעיל - הפצצות אוויריות ופגיעה בתשתיות"
    },
    {
     "name": "חזית קורסק",
     "status": "פעיל - נוכחות צבאית זרה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09291637-01",
     "title": "פגיעת כטב\"מים וטילים בבניין האקדמיה למדעים בקייב",
     "summary": "כטב\"ם פגע בבניין האקדמיה למדעים בקייב וגרם לשריפה ולהרוגים",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T17:04:14+00:00",
     "last_update_at": "2026-09-29T06:34:14+00:00",
     "what_is_not_verified": "המספר המדויק של הנפגעים הכולל אינו מאומת לחלוטין מחוץ לדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_37c3ce93e4a7c734",
       "url": "https://www.theguardian.com/world/2026/sep/28/russia-strike-on-kyiv-science-academy-drone-ukraine",
       "published_at": "2026-09-29T06:34:14+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_37c3ce93e4a7c734",
       "url": "https://www.bbc.co.uk/news/videos/cqj9xkdyrvgzo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-28T17:04:14+00:00"
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
     "id": "UKRAINE-09291637-02",
     "title": "פגיעת פצצות דואה בבית ספר ובאזור מגורים בסומי",
     "summary": "כוחות רוסים תקפו את סומי באמצעות פצצות אוויריות מונחות, פגעו בבית ספר בזמן שילדים היו במקלט ובאזור מגורים, וגרמו להרוגים ופצועים",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T14:28:00+00:00",
     "last_update_at": "2026-09-29T14:28:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא וההשלכות ארוכות הטווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_oleh_hryhorov_sumy_oblast_military_admin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/29/8055643/",
       "published_at": "2026-09-29T14:28:00+00:00"
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
     "id": "UKRAINE-09291637-03",
     "title": "פגיעה במתקן אנרגיה והפסקת חשמל בעיר דרחאצ'י",
     "summary": "תקיפה רוסית על מתקן תשתית אנרגיה ניתקה לחלוטין את החשמל בעיר דרחאצ'י וביישובי הסביבה",
     "axis": "תשתיות אנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T16:07:00+00:00",
     "last_update_at": "2026-09-29T16:07:00+00:00",
     "what_is_not_verified": "משך זמן התיקון המדויק של מערכת החשמל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_viacheslav_zadorenko_head_of_derhachi_ci",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/29/8055659/",
       "published_at": "2026-09-29T16:07:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דרחאצ'י, אוקראינה",
       "lat": 50.1071,
       "lon": 36.1206
      }
     ]
    },
    {
     "id": "UKRAINE-09291637-04",
     "title": "העברת שלושה מטוסי אף-6 עשר מאת בלגיה לאוקראינה",
     "summary": "נשיא אוקראינה הודיע שבלגיה תעביר שלושה מטוסי קרב מסוג אף-16 לאוקראינה עד סוף שנת 2026",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T14:58:00+00:00",
     "last_update_at": "2026-09-29T15:31:33+00:00",
     "what_is_not_verified": "מועד המסירה המדויק בתוך סוף השנה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://kyivindependent.com/belgium-to-transfer-3-f-16-fighter-jets-to-ukraine-by-end-of-2026-zelensky-says/",
       "published_at": "2026-09-29T15:31:33+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.ukrinform.net/rubric-ato/4169259-zelensky-belgium-will-deliver-three-f16-fighter-jets-to-ukraine-by-end-of-year.html",
       "published_at": "2026-09-29T14:58:00+00:00"
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
     "id": "UKRAINE-09291637-05",
     "title": "האשמת רוסיה בהצתת מתקן של יצרנית רובוטיקה צבאית באסטוניה",
     "summary": "רשויות אסטוניה קבעו כי שירותי הביטחון הרוסיים הזמינו פעולת חבלה והצתה של מבנה חברת רובוטיקה בטאלין",
     "axis": "לוחמה אלקטרונית וחבלה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-08-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T11:07:13+00:00",
     "last_update_at": "2026-09-29T15:03:15+00:00",
     "what_is_not_verified": "זהותם המלאה של כל מפעילי החבלה בשטח מעבר לשלושת העצורים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_kristen_michal_estonian_pm",
       "url": "https://www.theguardian.com/world/live/2026/sep/29/ukraine-russia-war-odesa-overnight-lithuania-mark-rutte-europe-latest-news-updates",
       "published_at": "2026-09-29T15:03:15+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_kristen_michal_estonian_pm",
       "url": "https://www.theguardian.com/world/2026/sep/29/estonia-blames-russia-arson-attack-drone-maker-ukraine",
       "published_at": "2026-09-29T14:20:39+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kristen_michal_estonian_pm",
       "url": "https://t.me/alexmehacarmel/48083",
       "published_at": "2026-09-29T11:07:13+00:00"
      }
     ],
     "places": [
      {
       "name": "טאלין, אסטוניה",
       "lat": 59.4372,
       "lon": 24.7573
      }
     ]
    },
    {
     "id": "UKRAINE-09291637-06",
     "title": "צו נשיאותי ברוסיה להגבלת הוצאת מזומן ברובלים",
     "summary": "נשיא רוסיה חתם על צו שמטיל תקרה של מיליון רובל על הוצאת מזומן למדינות שכנות",
     "axis": "סנקציות וכלכלה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T14:40:48+00:00",
     "last_update_at": "2026-09-29T14:40:48+00:00",
     "what_is_not_verified": "ההשפעה המדויקת על כלל עסקאות הגבול",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48092",
       "published_at": "2026-09-29T14:40:48+00:00"
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
     "id": "UKRAINE-09291637-07",
     "title": "תפיסה בכוח של מסוף ימי באזור אודסה",
     "summary": "קבוצת אנשים לא ידועה השתלטה בכוח על המסוף הימי בוריבאז' ליד אודסה",
     "axis": "תשתיות כלכליות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T14:49:12+00:00",
     "last_update_at": "2026-09-29T14:49:12+00:00",
     "what_is_not_verified": "זהותם המדויקת ושיוכם של השולטים במסוף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_odessa_region_report",
       "url": "https://tass.com/society/2194633",
       "published_at": "2026-09-29T14:49:12+00:00"
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
     "id": "UKRAINE-09291637-08",
     "title": "צו פוטין להרחבת צבא רוסיה ונוכחות כוחות צפון קוריאניים",
     "summary": "פוטין הורה בצו להגדיל את כוח האדם הפעיל בצבא ל-1.55 מיליון חייל, בעוד אוקראינה מדווחת על אלפי חיילים צפון קוריאניים בשטח רוסיה",
     "axis": "גיוס וכוחות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T00:43:01+00:00",
     "last_update_at": "2026-09-29T00:43:01+00:00",
     "what_is_not_verified": "לוח הזמנים וההיקף המדויק של פריסת הכוחות הנוספים מקוריאה הצפונית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_vladimir_putin_presidential_decree_volod",
       "url": "https://www.theguardian.com/world/2026/sep/29/ukraine-war-briefing-putin-orders-army-expansion-as-zelenskyy-claims-more-north-korean-troops-to-be-deployed-for-moscow",
       "published_at": "2026-09-29T00:43:01+00:00"
      }
     ],
     "places": [
      {
       "name": "קורסק, רוסיה",
       "lat": 51.727,
       "lon": 36.1922
      }
     ]
    }
   ],
   "not_verified": [
    "ההערכות המדויקות על מחירי הדגמים החדשים של הכטב\"מים הסילוניים ותקציבי ההגנה הנדרשים נגדם",
    "היקף הנזק המלא בכל מרכזי הנתונים שהותקפו באוקראינה",
    "האם ארצות הברית תצטרף לפרויקט מפעלי הדשנים בבלארוס"
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
     "change_pct": -0.2,
     "source_id": "src_ecb",
     "as_of": "2026-09-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בתשתיות ובמרכזי נתונים המעבירים מודיעין לאוקראינה",
      "הרחבת צבא רוסיה למיליון וחצי חיילים פעילים"
     ],
     "inferred": [
      "שחיקת מערך ההגנה האווירית של אוקראינה באמצעות כטב\"מים סילוניים",
      "ערעור יציבות משק האנרגיה האוקראיני לקראת החורף"
     ],
     "forecast": [
      "המשך התקיפות על תשתיות קריטיות באוקראינה",
      "החמרת הפיקוח על הכלכלה וסגירת נתוני אנרגיה מפני סנקציות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת סיוע צבאי וישיר לייצור הגנתי ממדינות אירופה",
      "דרישה לרפורמות פנימיות בתמורה למימון מהאיחוד האירופי"
     ],
     "inferred": [
      "ניסיון לבלום את מתקפות הטילים והכטב\"מים באמצעות חיזוק ההגנה השכבתית",
      "גיוס תמיכה בינלאומית והצגת מעורבות כוחות צפון קוריאניים לצידה של רוסיה"
     ],
     "forecast": [
      "קליטת ציוד ואמצעי הגנה אווירית חדשים ממדינות המערב",
      "המשך מאמצי יירוט מול האיומים האוויריים המתקדמים של רוסיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/videos/cqj9xkdyrvgzo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/29/ukraine-war-briefing-putin-orders-army-expansion-as-zelenskyy-claims-more-north-korean-troops-to-be-deployed-for-moscow",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/belgium-to-transfer-3-f-16-fighter-jets-to-ukraine-by-end-of-2026-zelensky-says/",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/29/8055659/",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/society/2194633",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48092",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4169259-zelensky-belgium-will-deliver-three-f16-fighter-jets-to-ukraine-by-end-of-year.html",
     "accessed_at": "2026-09-29T16:37:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-28T23:40:40+00:00",
  "changes": {
   "UKRAINE-09291637-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים וכטב\"מים על קייב וערי אוקראינה",
    "score": 1.0
   },
   "UKRAINE-09291637-02": {
    "kind": "new"
   },
   "UKRAINE-09291637-03": {
    "kind": "new"
   },
   "UKRAINE-09291637-04": {
    "kind": "new"
   },
   "UKRAINE-09291637-05": {
    "kind": "new"
   },
   "UKRAINE-09291637-06": {
    "kind": "possible",
    "prev": "צו נשיאותי רוסי להגדלת מצבת כוחות הצבא",
    "score": 0.633
   },
   "UKRAINE-09291637-07": {
    "kind": "new"
   },
   "UKRAINE-09291637-08": {
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
