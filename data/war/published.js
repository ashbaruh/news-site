/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-21T1556__yemen-202610211556.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-21T15:56:20+00:00",
   "window": {
    "from": "2026-10-20T15:56:20+00:00",
    "to": "2026-10-21T15:56:20+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610211556"
   },
   "summary": "הלחימה בתימן ובמרחב הימי סביבה מתאפיינת בהסלמה מצד החות'ים הכוללת תקיפות נגד יעדים בסעודיה ובאזורים שבשליטת ממשלת תימן, לצד מעורבות בינלאומית הand/or הגנתית של מדינות מערביות כמו בריטניה וצרפת. במקביל, מתנהלים דיונים דיפלומטיים והצעות תיווך מצד איראן שלא נענו, לצד התלבטויות במצרים לגבי מתן סיוע צבאי לסעודיה.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית",
     "status": "פעילה עם קרבות קרקעיים ותקיפות אוויריות וטילים"
    },
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעילה עם תקיפות חות'יות ומאמצי הגנה של הקואליציה ומדינות מערביות"
    },
    {
     "name": "הזירה הימית (ים סוף ובאב אל-מנדב)",
     "status": "מתוחה עם איומים על נתיבי ספנות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10211556-01",
     "title": "ביקור נשיא צרפת בסעודיה",
     "summary": "נשיא צרפת הגיע לביקור בריהאד כדי להפגין סולידריות עם סעודיה אל מול התקפות החות'ים ולקדם אספקת אנרגיה.",
     "axis": "ציר סעודיה-המערב מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T14:30:22+00:00",
     "last_update_at": "2026-10-21T15:54:08+00:00",
     "what_is_not_verified": "ההבטחות המדויקות על אספקת האנרגיה אינן מפורטות מעבר לטענות הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_2af090f26c4a31da",
       "url": "https://www.france24.com/en/french-president-macron-lands-in-saudi-arabia-on-surprise-solidarity-visit",
       "published_at": "2026-10-21T15:54:08+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2af090f26c4a31da",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/frances-macron-arrives-saudi-arabia-unscheduled-visit-during-gulf-tour",
       "published_at": "2026-10-21T15:49:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_2af090f26c4a31da",
       "url": "https://www.newarab.com/news/saudi-commits-addition-france-diesel-supplies-macron-visit",
       "published_at": "2026-10-21T15:43:49+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_2af090f26c4a31da",
       "url": "https://www.al-monitor.com/originals/2026/10/frances-macron-lands-riyadh-surprise-solidarity-visit",
       "published_at": "2026-10-21T14:30:22+00:00"
      }
     ],
     "places": [
      {
       "name": "ריהאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10211556-02",
     "title": "תקיפות ועימותים בתימן סביב נמלי תעופה ובסיסים",
     "summary": "התקפות טילים ועימותים באזורים שונים בתימן, כולל פגיעה במחנה בדר בעדן ובנמל התעופה באל-מוכלא.",
     "axis": "הזירה הפנימית בתימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T14:09:42+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T14:09:42+00:00",
     "last_update_at": "2026-10-21T15:19:58+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת וזהות הנפגעים המלאה אינן מאומתות ממקור בלתי תלוי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-says-houthis-attacked-al-mukalla-airport",
       "published_at": "2026-10-21T15:19:58+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/yemen-houthis-strikes-saudi-led-coalition-targets-kingdom-killed-fishermen",
       "published_at": "2026-10-21T11:12:17+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/missile-targets-aden-airport-houthis-claim-strike-coalition-site",
       "published_at": "2026-10-21T09:00:47+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cv0ld6lrr2zeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-20T14:09:42+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "אל מוכלא, תימן",
       "lat": 14.5425,
       "lon": 49.1231
      }
     ]
    },
    {
     "id": "YEMEN-10211556-03",
     "title": "דיון בפרלמנט המצרי על סיוע צבאי לסעודיה",
     "summary": "הפרלמנט במצרים דחה הצבעה על אישור תמיכה צבאית לסעודיה במסגרת הלחימה מול החות'ים.",
     "axis": "ציר ערבי-אזורי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T21:18:48+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T21:18:48+00:00",
     "last_update_at": "2026-10-21T15:46:27+00:00",
     "what_is_not_verified": "תוצאות ההצבעה העתידיות אינן ידועות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/egypts-sisi-says-saudi-defence-role-would-not-include-attack-yemen",
       "published_at": "2026-10-21T15:46:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/egypt-mulls-joining-saudi-arabia-in-war-against-houthis",
       "published_at": "2026-10-21T11:02:21+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/tv-shows/a-propos/20261020-egypt-involvement-in-yemen-may-actually-weaken-egypt-s-regional-role-expert-says",
       "published_at": "2026-10-20T21:18:48+00:00"
      }
     ],
     "places": [
      {
       "name": "קהיר, מצרים",
       "lat": 30.0444,
       "lon": 31.2357
      }
     ]
    },
    {
     "id": "YEMEN-10211556-04",
     "title": "משבר הומניטרי ולחימה בעיר תעז",
     "summary": "החמרה במצב ההומניטרי בעיר תעז עקב מצור של כוחות חות'ים וקרבות סביב תשתיות המים והמזון.",
     "axis": "הזירה הפנימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T11:46:30+00:00",
     "last_update_at": "2026-10-21T14:24:02+00:00",
     "what_is_not_verified": "המספר המדויק של הנפגעים והיקף הנזק המלא אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/21/besieged-yemeni-city-taiz-houthis-humanitarian-crisis-aid-workers",
       "published_at": "2026-10-21T14:24:02+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/water-rationing-rubbish-pile-raise-disease-fears-yemens-besieged-taiz",
       "published_at": "2026-10-21T11:46:30+00:00"
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
    "הטענות ההדדיות על שיגור כטב\"מים לעיר אל-מדינה והכחשמתן על ידי החות'ים",
    "ההיקף המדויק של רכיבי טילים המיוצרים מקומית בתימן בהסתמך על מסמכי רכש",
    "התוצאה הסופית של דיוני הפרלמנט במצרים לגבי תמיכה צבאית בסעודיה"
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
     "value": 3.0912,
     "unit": "ILS",
     "change_pct": -0.53,
     "source_id": "src_ecb",
     "as_of": "2026-10-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תמיכה בפלסטינים ותקיפת יעדים המזוהים עם ישראל וסעודיה",
      "הפעלת לחץ כלכלי דרך מצור ומניעת פעילות בנמלים יריבים"
     ],
     "inferred": [
      "שאיפה לבסס יכולת ייצור עצמית של אמצעי לחימה מתקדמים בתימן",
      "הרחבת ההשפעה הצבאית והפוליטית בתוך שטחי תימן"
     ],
     "forecast": [
      "המשך ניסיונות התקפה על תשתיות ומטרות בסעודיה ובמרחב הימי",
      "העמקת הלחימה הקרקעית באזורי חיכוך פנימיים כמו תעז"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על טריטוריית הממלכה, מתקניה ואזרחיה מפני תקיפות טילים וכטב\"מים",
      "שמירה על יציבות אזורית ושיתוף פעולה עם בעלות ברית להגנה"
     ],
     "inferred": [
      "חיפוש גיבוי צבאי בינלאומי ואזורי (כגון מצרים וצרפת) כדי לבלום את האיום החות'י",
      "ניסיון לבלום את פיתוח ויכולות הרכש של אמצעי הלחימה החות'יים"
     ],
     "forecast": [
      "המשך פעילות הגנה אקטיבית וחיזוק שיתופי הפעולה הביטחוניים עם מעצמות זרות",
      "המשך התקיפות נגד מעוזי החות'ים במסגרת הלחימה בתימן"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הצעת תיווך בין סעודיה לחות'ים",
      "הצהרות על נכונות להגנה עצמית והמשך פיתוח יכולות צבאיות"
     ],
     "inferred": [
      "שמירה על השפעה עקיפה באמצעות בעלות בריתה באזור לצורך הפעלת לחץ על יריבותיה",
      "ניסיון להציג עצמה כגורם מתווך תוך הפרכת קשר ישיר למבצעים מסוימים"
     ],
     "forecast": [
      "המשך מתן תמיכה לחיזוק יכולות החות'ים במקביל לניהול מגעים דיפלומטיים עקיפים",
      "שימור המתיחות האזורית כקלף מיקוח מול ארצות הברית וישראל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/water-rationing-rubbish-pile-raise-disease-fears-yemens-besieged-taiz",
     "accessed_at": "2026-10-21T15:56:20+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cv0ld6lrr2zeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-21T15:56:20+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/tv-shows/a-propos/20261020-egypt-involvement-in-yemen-may-actually-weaken-egypt-s-regional-role-expert-says",
     "accessed_at": "2026-10-21T15:56:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/21/besieged-yemeni-city-taiz-houthis-humanitarian-crisis-aid-workers",
     "accessed_at": "2026-10-21T15:56:20+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/missile-targets-aden-airport-houthis-claim-strike-coalition-site",
     "accessed_at": "2026-10-21T15:56:20+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-commits-addition-france-diesel-supplies-macron-visit",
     "accessed_at": "2026-10-21T15:56:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T23:43:23+00:00",
  "changes": {
   "YEMEN-10211556-01": {
    "kind": "new"
   },
   "YEMEN-10211556-02": {
    "kind": "possible",
    "prev": "תקיפה קטלנית של החות'ים על מחנה אימונים של כוחות הביטחון במחוז שבווה",
    "score": 0.4
   },
   "YEMEN-10211556-03": {
    "kind": "new"
   },
   "YEMEN-10211556-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הידוק המצור החות'י והפגזות על העיר תעז",
    "score": 0.817
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-21T1534__iran-202610211534.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-21T15:34:26+00:00",
   "window": {
    "from": "2026-10-20T15:34:26+00:00",
    "to": "2026-10-21T15:34:26+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610211534"
   },
   "summary": "העימות בזירה מתנהל סביב לחץ אמריקאי-ישראלי מוגבר על איראן הכולל איומי תקיפה וסנקציות, לצד מאמצי תיווך רוסיים ופעילות דיפלומטית במפרץ. במקביל, נמשכים חיכוכים באזור המפרץ ובעיראק אל מול שלוחים וגורמים המזוהים עם טהרן, בעוד ישראל נערכת לאפשרות של הסלמה רחבה.",
   "fronts": [
    {
     "name": "החזית הישראלית-איראנית",
     "status": "פעיל ומתוח עם איומי תקיפה הדדיים"
    },
    {
     "name": "חזית המפרץ והספנות",
     "status": "פעילות מעקב ותקיפות באזור מצרי הורמוז"
    },
    {
     "name": "החזית הדיפלומטית והגרעינית",
     "status": "מאמצי תיווך ומגעים סביב תוכנית הגרעין והסנקציות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10211534-01",
     "title": "עצירת נוסעים וכלי רכב במעבר הגבול שיב בין עיראק לאיראן",
     "summary": "עיראק הורתה על סגירת מעבר הגבול שיב המוביל לאיראן ועצירת תנועת נוסעים וכלי רכב.",
     "axis": "ציר איראן-עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T08:49:01+00:00",
     "last_update_at": "2026-10-21T08:49:01+00:00",
     "what_is_not_verified": "הסיבה המדויקת והיקף הסגירה המלא של מעברי גבול נוספים אינם מאומתים במלואם באופן רשמי ציבורי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraq-orders-sheeb-crossing-closure-more-shutdowns-loom",
       "published_at": "2026-10-21T08:49:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10211534-02",
     "title": "צו גירוש בקנדה לאזרח איראני בגין מעורבות בהתחמקות מסנקציות",
     "summary": "מועצת ההגירה והפליטים של קנדה הורה על גירוש אזרח איראני מטורונטו עקב מעורבות ברשת פלילית שעקפה סנקציות בינלאומיות נגד איראן.",
     "axis": "ציר איראן-מערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T15:17:38+00:00",
     "last_update_at": "2026-10-21T15:17:38+00:00",
     "what_is_not_verified": "פרטי הפעילות המלאים של הרשת הפלילית אינם מפורטים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_global_news",
       "url": "https://www.iranintl.com/en/202610217514",
       "published_at": "2026-10-21T15:17:38+00:00"
      }
     ],
     "places": [
      {
       "name": "טורונטו, קנדה",
       "lat": 43.6535,
       "lon": -79.3839
      }
     ]
    },
    {
     "id": "IRAN-10211534-03",
     "title": "פגישת ולדימיר פוטין וסטיב ויטקוף בסנט פטרבורג",
     "summary": "נשיא רוסיה ולדימיר פוטין נפגש עם שליחו המיוחד של טראמפ, סטיב ויטקוף, ודן עמו בסוגיית איראן ובהצעות רוסיות.",
     "axis": "ציר רוסיה-ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T10:37:06+00:00",
     "last_update_at": "2026-10-21T14:38:06+00:00",
     "what_is_not_verified": "תכנם המלא של ההסכמות וההצעות שהוצגו אינו מאומת במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_iran_international",
       "url": "https://www.iranintl.com/en/202610210918",
       "published_at": "2026-10-21T14:38:06+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_iran_international",
       "url": "https://t.me/alexmehacarmel/48770",
       "published_at": "2026-10-21T10:37:06+00:00"
      }
     ],
     "places": [
      {
       "name": "סנט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "IRAN-10211534-04",
     "title": "נאומי בכירים בישראל על איומי איראן והמשטר",
     "summary": "ראש הממשלה בנימין נתניהו ושר הביטחון ישראל כ\"ץ הצהירו כי איראן מנסה לחדש את תוכנית הגרעין וכי ישראל ערוכה להכות בה אם תותקף.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T13:16:14+00:00",
     "last_update_at": "2026-10-21T14:55:59+00:00",
     "what_is_not_verified": "אמיתות הטענות על חידוש מדויק של פיתוח נשק גרעיני מצד איראן ומועדי תקיפה אפשריים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_64ce6d7bf8f5446c",
       "url": "https://www.ynet.co.il/news/article/ryru6si3gg",
       "published_at": "2026-10-21T14:55:59+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_64ce6d7bf8f5446c",
       "url": "https://t.me/abualiexpress/132316",
       "published_at": "2026-10-21T14:52:54+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_af09b7b532a37274",
       "url": "https://www.maariv.co.il/breaking-news/article-1379799",
       "published_at": "2026-10-21T14:51:06+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_14fff8ba0bfc2832",
       "url": "https://www.maariv.co.il/breaking-news/article-1379790",
       "published_at": "2026-10-21T14:21:51+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_1347119151be998a",
       "url": "https://www.israelhayom.co.il/news/defense/article/21678698",
       "published_at": "2026-10-21T14:15:42+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_64ce6d7bf8f5446c",
       "url": "https://t.me/abualiexpress/132312",
       "published_at": "2026-10-21T14:12:46+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_2fee6cce0342b571",
       "url": "https://www.walla.co.il/news/military/383958333",
       "published_at": "2026-10-21T13:16:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10211534-05",
     "title": "ביקור נשיא צרפת עמנואל מקרון בריאד",
     "summary": "נשיא צרפת עמנואל מקרון הגיע לביקור סולידריות בריאד על רקע איומי החות'ים באזור.",
     "axis": "צרפת-סעודיה-המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T15:52:47+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T15:52:47+00:00",
     "last_update_at": "2026-10-21T14:30:22+00:00",
     "what_is_not_verified": "היקף ההסכמות המסחריות והביטחוניות המלאות שהושגו בביקור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_al_monitor",
       "url": "https://www.al-monitor.com/originals/2026/10/frances-macron-lands-riyadh-surprise-solidarity-visit",
       "published_at": "2026-10-21T14:30:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_al_monitor",
       "url": "https://www.france24.com/en/video/20261020-france-s-decades-long-ties-with-gulf-states-built-on-economic-development-oil-defense-agreements-1",
       "published_at": "2026-10-20T15:52:47+00:00"
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
     "id": "IRAN-10211534-06",
     "title": "מניעת כניסת טייס זר עם זיקה לאיראן לישראל",
     "summary": "משרד התחבורה ומשרד התפוצות הודיעו לחברת תעופה זרה על איסור הגעתו של טייס החשוד בזיקה לאיראן לישראל.",
     "axis": "ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T12:03:47+00:00",
     "last_update_at": "2026-10-21T12:03:47+00:00",
     "what_is_not_verified": "היקף הקשר המדויק של איש הצוות לגורמים איראניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958344",
       "published_at": "2026-10-21T12:03:47+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "לוח זמנים מדויק לתקיפה אפשרית באיראן מצד ישראל או ארה\"ב",
    "קיומו של הסכם רשמי בין עיראק לאיראן לגירוש קבוצות אופוזיציה כורדיות",
    "פרטי המגעים החסויים בין שליחו של טראמפ לרוסיה"
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
     "value": 3.0912,
     "unit": "ILS",
     "change_pct": -0.53,
     "source_id": "src_ecb",
     "as_of": "2026-10-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הפלת המשטר באיראן",
      "הסרת איום הגרעין האיראני",
      "סיכול ניסיונות טרור נגד ישראל"
     ],
     "inferred": [
      "יצירת הרתעה מול התבססות איראנית ושלוחיה",
      "גיוס תמיכה בינלאומית ומקומית במהלך בחירות"
     ],
     "forecast": [
      "הגברת הכוננות הביטחונית והמשך הקמפיין נגד תוכנית הגרעין",
      "היערכות לאפשרות של עימות ישיר אם איראן תתקוף"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הזהרת ארה\"ב וישראל מפני תוקפנות צבאית",
      "האשמת ארה\"ב ביצירת אי-יציבות אזורית"
     ],
     "inferred": [
      "ניסיון לעקוף סנקציות באמצעות צדדים שלישיים וצי קלפים",
      "המשך פיתוח יכולות אזוריות וגרעיניות תחת לחץ"
     ],
     "forecast": [
      "המשך מתיחות דיפלומטית ועימותים באמצעות שלוחים במפרץ",
      "ניסיונות הימנעות מקריסה כלכלית מוחלטת לצד שמירה על קו נוקשה מול וושינגטון"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת נשק גרעיני מאיראן ואכיפת סנקציות"
     ],
     "inferred": [
      "הפעלת לחץ מקסימלי בשיתוף בריתות אזוריות",
      "בחינת אפשרויות לתקיפה או לריסון פעילות צבאית באזור"
     ],
     "forecast": [
      "המשך תיאום עם בעלות ברית במפרץ ובאירופה סביב הסנקציות והגרעין",
      "בחינת יוזמות דיפלומטיות לצד שמירת אופציה צבאית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/frances-macron-lands-riyadh-surprise-solidarity-visit",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/video/20261020-france-s-decades-long-ties-with-gulf-states-built-on-economic-development-oil-defense-agreements-1",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610210918",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21678698",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1379790",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraq-orders-sheeb-crossing-closure-more-shutdowns-loom",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132312",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48770",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958344",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/ryru6si3gg",
     "accessed_at": "2026-10-21T15:34:26+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T23:40:36+00:00",
  "changes": {
   "IRAN-10211534-01": {
    "kind": "new"
   },
   "IRAN-10211534-02": {
    "kind": "new"
   },
   "IRAN-10211534-03": {
    "kind": "new"
   },
   "IRAN-10211534-04": {
    "kind": "new"
   },
   "IRAN-10211534-05": {
    "kind": "new"
   },
   "IRAN-10211534-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-21T1545__ukraine-202610211545.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-21T15:45:24+00:00",
   "window": {
    "from": "2026-10-20T15:45:24+00:00",
    "to": "2026-10-21T15:45:24+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610211545"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת לצד מאמצים דיפלומטיים אינטנסיביים של ארצות הברית ומדינות אירופה לקדם הסדר או הקפאת מצב, הכוללים מגעים בין נציגים אמריקאים לרוסים ודיונים על מימון וסיוע צבאי לאוקראינה. במקביל, נמשכות תקיפות התשתית והאוויריות של רוסיה באוקראינה לצד שגרת הפעילות וההתרחשויות הצבאיות בשטח.",
   "fronts": [
    {
     "name": "החזית האוקראינית-רוסית",
     "status": "פעיל"
    },
    {
     "name": "החזית הדיפלומטית הבין-לאומית",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10211545-01",
     "title": "התרסקות מטוס קרב רוסי",
     "summary": "מטוס קרב רוסי מדגם אס-יו-30 התרסק במהלך טיסת אימון במחוז קלינינגרד, אנשי הצוות נפלטו ופונו לקבלת טיפול רפואי.",
     "axis": "חזית פנימית / רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T14:12:04+00:00",
     "last_update_at": "2026-10-21T15:28:55+00:00",
     "what_is_not_verified": "הטענות המדויקות על מיקום ההתרסקות המדויק בין הכפרים ונוכחות צילומים מזירות שונות אינן מאומתות ישירות מחוץ לדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_e442e53ca9334c51",
       "url": "https://meduza.io/en/news/2026/10/21/su-30-fighter-jet-crashes-in-russia",
       "published_at": "2026-10-21T15:28:55+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_64926407adf6199a",
       "url": "https://kyivindependent.com/russian-su-30-fighter-jet-crashes-in-kaliningrad-oblast-during-training-exercises-moscow-says/",
       "published_at": "2026-10-21T14:12:04+00:00"
      }
     ],
     "places": [
      {
       "name": "Chernyakhovsk, Russia",
       "lat": 54.6355,
       "lon": 21.81
      }
     ]
    },
    {
     "id": "UKRAINE-10211545-02",
     "title": "פגיעה במתקן קמעונאי באוקראינה",
     "summary": "כוחות רוסיים תקפו מתקן של רשת המרכולים מטרו במחוז ריבנה באוקראינה.",
     "axis": "הזירה האוקראינית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T13:34:00+00:00",
     "last_update_at": "2026-10-21T13:34:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא וההשלכות של התקיפה טרם אומתו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a4d6e37274a118f4",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/21/8059083/",
       "published_at": "2026-10-21T13:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10211545-03",
     "title": "שחרור אסיר אמריקאי מרוסיה",
     "summary": "ולדימיר פוטין הורה על שחרורו של האזרח האמריקאי סטיבן האברד שהוחזק בכלא ברוסיה, במסגרת מגעים עם שליחו של נשיא ארצות הברית.",
     "axis": "דיפלומטיה בין-לאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T13:58:00+00:00",
     "last_update_at": "2026-10-21T15:24:58+00:00",
     "what_is_not_verified": "התנאים המדויקים מאחורי הקלעים לשחרור וההבנות הדיפלומטיות אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/21/putin-witkoff-russia-ukraine-trump-stephen-hubbard-release",
       "published_at": "2026-10-21T15:24:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/21/us-russia-ukraine-putin-witkoff-zelenskyy-france-italy-protests-europe-latest-news-updates",
       "published_at": "2026-10-21T15:23:04+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/21/who-is-stephen-hubbard-the-american-putin-just-freed",
       "published_at": "2026-10-21T15:12:57+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/21/8059089/",
       "published_at": "2026-10-21T13:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "St Petersburg, Russia",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10211545-04",
     "title": "פגישת סטיב ויטקוף ווולדימיר פוטין בסנט פטרסבורג",
     "summary": "שליחו המיוחד של נשיא ארה\"ב סטיב ויטקוף נועד עם נשיא רוסיה ולדימיר פוטין במשך כשלוש שעות בסנט פטרסבורג כדי לדון בדרכים לסיום המלחמה ובאפשרות לחידוש שיחות משולשות.",
     "axis": "דיפלומטיה בין-לאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T13:04:00+00:00",
     "last_update_at": "2026-10-21T14:36:05+00:00",
     "what_is_not_verified": "תוכנן המלל המדויק של המסמכים וההצעות שהוצגו צדדים שלישיים אינו מאומת ממקור ראשון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/21/kremlin-says-it-s-ready-to-resume-trilateral-talks-but-sees-little-useful-in-new-proposals-from-ukraine-and-the-eu",
       "published_at": "2026-10-21T14:36:05+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/21/putin-and-u-s-envoy-witkoff-hold-talks-in-st-petersburg-as-washington-pushes-a-new-plan-to-end-the-war-in-ukraine",
       "published_at": "2026-10-21T14:20:38+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/21/8059089/",
       "published_at": "2026-10-21T13:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/21/8059081/",
       "published_at": "2026-10-21T13:04:00+00:00"
      }
     ],
     "places": [
      {
       "name": "St Petersburg, Russia",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    }
   ],
   "not_verified": [
    "ההערכות לפיהן רוסיה ואוקראינה יגיעו להסכם הקפאה מחייב בחודש הבא אינן מאומתות.",
    "הפרטים המדויקים לגבי תוכן ההצעות האירופאיות והאוקראיניות שהוצגו לרוסיה לא אומתו במלואם."
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
     "value": 1.1234,
     "unit": "USD",
     "change_pct": 0.17,
     "source_id": "src_ecb",
     "as_of": "2026-10-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "מוכנות לחדש שיחות משולשות בנושא מערכות ביטחון לאחר הסכסוך."
     ],
     "inferred": [
      "שאיפה להשיג הכרה בינלאומית בהישגיה בשטח ובנטרול תשתיות צבאיות ואנרגיה באוקראינה."
     ],
     "forecast": [
      "המשך לחץ צבאי ותשתיות על אוקראינה לצד ניהול משא ומתן דיפלומטי מותנה."
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "דרישה לנוכחות מלאה של אוקראינה בכל שולחן משא ומתן הנוגע לעתידה וקיום דרישות ביטחוניות."
     ],
     "inferred": [
      "הסתמכות על סיוע מערבי ואירופאי ממושך לשם שימור יכולת העמידה והלחימה."
     ],
     "forecast": [
      "המשך גיוס משאבים פיננסיים וצבאיים מהשותפות באירופה ובעולם למען ייצור והתחמשות."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "חתירה להנעת מגעים מדיניים וקידום אפשרויות להפסקת לחימה או הסדר."
     ],
     "inferred": [
      "רצון להגיע להבנות עוקפות משברים מול מוסקבה תוך ניהול דיאלוג ישיר."
     ],
     "forecast": [
      "המשך מעורבות דיפלומטית גבוהה באמצעות שליחים מיוחדים לקידום פסגות ושיחות."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/21/us-russia-ukraine-putin-witkoff-zelenskyy-france-italy-protests-europe-latest-news-updates",
     "accessed_at": "2026-10-21T15:45:24+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-su-30-fighter-jet-crashes-in-kaliningrad-oblast-during-training-exercises-moscow-says/",
     "accessed_at": "2026-10-21T15:45:24+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/21/putin-and-u-s-envoy-witkoff-hold-talks-in-st-petersburg-as-washington-pushes-a-new-plan-to-end-the-war-in-ukraine",
     "accessed_at": "2026-10-21T15:45:24+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/21/8059081/",
     "accessed_at": "2026-10-21T15:45:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T23:42:05+00:00",
  "changes": {
   "UKRAINE-10211545-01": {
    "kind": "new"
   },
   "UKRAINE-10211545-02": {
    "kind": "new"
   },
   "UKRAINE-10211545-03": {
    "kind": "new"
   },
   "UKRAINE-10211545-04": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-20T2344__north-202610202344.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-20T23:44:32+00:00",
   "window": {
    "from": "2026-10-19T23:44:32+00:00",
    "to": "2026-10-20T23:44:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610202344"
   },
   "summary": "הלחימה והפעילות המבצעית של צה\"ל בדרום לבנון נמשכות באמצעות תקיפות מהאוויר, אש ארטילרית והשמדת תשתיות, במקביל לשיחות צבאיות עקיפות בארצות הברית בין ישראל ללבנון על יישום הסכם המסגרת. בזירה הפנים-לבנונית מתגברים החיכוכים בין רשויות המדינה לחיזבאללה בעקבות הברחות נשק, בעוד הארגון מוסיף לשקם את מוסדותיו. בסוריה נרשמת מתיחות ביטחונית על רקע תקיפות רחפנים בא-סווידא, נוכחות צבאית טורקית ממושכת בצפון וטענות לא מאומתות על פעילות ישראלית בדרום המדינה.",
   "fronts": [
    {
     "name": "דרום לבנון וישראל",
     "status": "פעילות מבצעית פעילה הכוללת תקיפות צה\"ל מהאוויר, אש ארטילרית והשמדת תשתיות, לצד מגעים צבאיים-טכניים בארה\"ב ליישום הסדרי ביטחון ונסיגה."
    },
    {
     "name": "הזירה הפנים-לבנונית מול חיזבאללה",
     "status": "מתיחות סביב אכיפת החוק ותפיסות אמצעי לחימה של הארגון, לצד חזרת מוסדות אזרחיים של חיזבאללה לפעילות בחסות שרים בממשלה."
    },
    {
     "name": "דרום סוריה",
     "status": "חוסר יציבות ביטחוני הכולל תקיפות רחפנים על עמדות ביטחון פנים בא-סווידא, לצד טענות לא מאומתות בדבר היערכות ישראלית באזור ג'בל א-ערב."
    },
    {
     "name": "צפון סוריה וטורקיה",
     "status": "המשך אחיזה צבאית של טורקיה בשטח סוריה בהתאם להצהרות רשמיות של אנקרה על השארת הכוחות עד הבטחת גבולותיה."
    }
   ],
   "events": [
    {
     "id": "NORTH-10202344-01",
     "title": "התקפות רחפנים נגד עמדות ביטחון סוריות במחוז א-סווידא",
     "summary": "קבוצות חמושות תקפו באמצעות כלי טיס בלתי מאוישים ממולכדים עמדות של כוחות ביטחון הפנים באזור הכפרי המערבי של מחוז א-סווידא בדרום סוריה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T23:01:52+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T23:01:52+00:00",
     "last_update_at": "2026-10-20T23:01:52+00:00",
     "what_is_not_verified": "זהות הקבוצות החמושות שביצעו את התקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/armed-groups-target-syrian-security-posts-in-suwayda-with-explosive-laden-drones/4095191",
       "published_at": "2026-10-20T23:01:52+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10202344-02",
     "title": "שיחות צבאיות-טכניות בין ישראל ללבנון בפלורידה",
     "summary": "משלחות צבאיות מישראל ומלבנון קיימו שיחות בפיקוד המרכז של צבא ארצות הברית בטמפה, בתיווך אמריקני. השיחות התמקדו ביישום הסכם המסגרת ובנסיגת כוחות מאזורי פיילוט.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T13:50:00+00:00",
     "last_update_at": "2026-10-20T20:56:07+00:00",
     "what_is_not_verified": "מידת ההתקדמות בשיחות ומועד השגת הסכמות מעשיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-israel-military-technical-talks-in-florida-conclude-first-day-to-resume-wednesday/4095149",
       "published_at": "2026-10-20T20:56:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israel-seeks-cast-lebanon-army-failing-ahead-us-talks",
       "published_at": "2026-10-20T15:51:04+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958223",
       "published_at": "2026-10-20T14:31:40+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963902/will-lebanon-israel-talks-in-florida-contain-tensions-before-israels-e/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963902",
       "published_at": "2026-10-20T13:50:00+00:00"
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
     "id": "NORTH-10202344-03",
     "title": "האשמות ישראליות כלפי צבא לבנון בנוגע לחיזבאללה",
     "summary": "צבא ישראל האשים גורמים בצבא לבנון בשיתוף פעולה עם חיזבאללה, סיכול אכיפת הסדרי הביטחון ואי-פירוק אתר צבאי בכפרא. צבא לבנון דחה את הטענות והגדירן כשקריות.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T13:50:00+00:00",
     "last_update_at": "2026-10-20T15:51:04+00:00",
     "what_is_not_verified": "הטענות בדבר תיאום של קצינים לבנונים עם חיזבאללה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/news/israel-seeks-cast-lebanon-army-failing-ahead-us-talks",
       "published_at": "2026-10-20T15:51:04+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963902/will-lebanon-israel-talks-in-florida-contain-tensions-before-israels-e/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963902",
       "published_at": "2026-10-20T13:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "כפרא, לבנון",
       "lat": 33.1805,
       "lon": 35.354
      }
     ]
    },
    {
     "id": "NORTH-10202344-04",
     "title": "צווי חקירה בלבנון לבכירים בחיזבאללה בפרשת חומרי הנפץ",
     "summary": "שופט בלבנון הורה לזמן לחקירה שני בכירים בארגון חיזבאללה בעקבות תפיסת משאית שנשאה כחצי טון חומרי נפץ במחסום דהר אל-בידר. חיזבאללה הודה שהמטען שייך לו ודרש את השבתו.",
     "axis": "לבנון הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T10:41:15+00:00",
     "last_update_at": "2026-10-20T15:27:15+00:00",
     "what_is_not_verified": "האם הוצאו צווי מעצר בפועל נגד הבכירים, נוכח הכחשות של גורמים בחיזבאללה ומקורות שיפוטיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_afp",
       "url": "https://www.newarab.com/news/lebanon-judge-question-hezbollah-officials-over-explosives",
       "published_at": "2026-10-20T15:27:15+00:00"
      },
      {
       "source_id": "src_alma",
       "source_root_id": "or_afp",
       "url": "https://israel-alma.org/hezbollah-demands-its-explosives-back-a-test-of-lebanese-sovereignty/",
       "published_at": "2026-10-20T10:41:15+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    },
    {
     "id": "NORTH-10202344-05",
     "title": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
     "summary": "מטוסי קרב ישראליים ביצעו תקיפות בסביבת העיירות כפר תבנית, א-נבטיה אל-פוקא ואל-קנטרה. בנוסף בוצע ירי ארטילרי ישראלי לעבר פאתי בית יהון בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T13:03:25+00:00",
     "last_update_at": "2026-10-20T17:38:15+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בתקיפות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_aa485f06ffa57e19",
       "url": "https://english.almanar.com.lb/article/140612/",
       "published_at": "2026-10-20T17:38:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_c61aade92a0951ad",
       "url": "https://english.almanar.com.lb/article/140522/",
       "published_at": "2026-10-20T13:03:25+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "א-נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      },
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-10202344-06",
     "title": "השמדת תשתיות טרור של חיזבאללה בידי אוגדה 91",
     "summary": "כוחות צה\"ל מאוגדה 91 השמידו מעל 540 תשתיות טרור במסגרת פעילות במרחב הביטחוני בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T09:18:40+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T09:18:40+00:00",
     "last_update_at": "2026-10-20T09:18:40+00:00",
     "what_is_not_verified": "מיקומים מדויקים ומאפייני כלל התשתיות שהושמדו מעבר להודעת הצבא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25412",
       "published_at": "2026-10-20T09:18:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-07",
     "title": "הודעת טורקיה על המשך הצבת כוחותיה בסוריה",
     "summary": "שר ההגנה הטורקי ישר גולר הודיע כי ארצו תמשיך להחזיק את כוחות הצבא שלה בשטח סוריה (ובעיראק) עד להשגת ביטחון מלא בגבולות ובאזור.",
     "axis": "טורקיה-סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T09:50:50+00:00",
     "last_update_at": "2026-10-20T13:47:01+00:00",
     "what_is_not_verified": "לוח הזמנים או התנאים הקונקרטיים להערכת השגת הביטחון המלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_afp",
       "url": "https://t.me/abualiexpress/132251",
       "published_at": "2026-10-20T13:47:01+00:00"
      },
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_afp",
       "url": "https://www.dailysabah.com/politics/war-on-terror/turkiye-says-troops-will-stay-in-syria-iraq-until-borders-are-secured",
       "published_at": "2026-10-20T13:21:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_afp",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/963876/turkey-troops-to-stay-in-syria-iraq-until-border-security-ensured-defe/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963876",
       "published_at": "2026-10-20T09:50:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-08",
     "title": "הצהרת שר הביטחון הישראלי על מוכנות לתמרון בלבנון",
     "summary": "שר הביטחון ישראל כ\"ץ הצהיר כי ישראל ערוכה לבצע תמרון צבאי בלבנון אם חיזבאללה יצטרף למתקפה איראנית על ישראל.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T14:07:36+00:00",
     "last_update_at": "2026-10-20T14:07:36+00:00",
     "what_is_not_verified": "רמת הכוננות המעשית של הכוחות להפעלת תוכניות תמרון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94717",
       "published_at": "2026-10-20T14:07:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-09",
     "title": "דיווחים על העברת ציוד צבאי ישראלי להר הדרוזים בסוריה",
     "summary": "מקורות סוריים ורוסיים טענו כי מסוקי צה\"ל העבירו כמויות של ציוד צבאי, אמצעי לחימה ומכ\"מים לפסגת ג'בל א-ערב בא-סווידא, תוך חשש בדמשק מפעולה לפני הבחירות בישראל.",
     "axis": "ישראל-סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T14:56:32+00:00",
     "last_update_at": "2026-10-20T14:56:32+00:00",
     "what_is_not_verified": "עצם קיום העברות הציוד, הקמת הבסיס בפסגת ההר, והכוונות המיוחסות לפעולה צבאית לפני הבחירות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48745",
       "published_at": "2026-10-20T14:56:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-10",
     "title": "פתיחה מחדש של מרכז בריאות של חיזבאללה בחסות שר הבריאות הלבנוני",
     "summary": "מרכז הבריאות דאר אל-חוורא בדאחייה של ביירות, השייך לארגון הבריאות האסלאמי של חיזבאללה, חזר לפעול לאחר שיקום מנזקי המלחמה במעמד שר הבריאות של לבנון.",
     "axis": "לבנון הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T10:47:46+00:00",
     "last_update_at": "2026-10-20T10:47:46+00:00",
     "what_is_not_verified": "מידת ההשפעה המעשית של החסות הממשלתית על הגבלת פעילות חיזבאללה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/under-the-health-ministers-patronage-hezbollah-rebuilds-its-state-within-a-state/",
       "published_at": "2026-10-20T10:47:46+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10202344-11",
     "title": "יוניפי\"ל ממשיך בפעילותו בשטח בלבנון",
     "summary": "כוח האו\"ם הזמני בלבנון הודיע כי הוא ממשיך בפעילות המבצעית בשטח, בעוד מועצת הביטחון של האו\"ם בוחנת חלופות לתקופה שלאחר סיום המנדט המתוכנן לסוף דצמבר.",
     "axis": "דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T10:48:35+00:00",
     "last_update_at": "2026-10-20T15:54:46+00:00",
     "what_is_not_verified": "המתווה המדויק שיוסכם במועצת הביטחון של האו\"ם לאחר תום המנדט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/un-force-says-operations-continue-in-lebanon-as-security-council-weighs-post-mission-options/4094898",
       "published_at": "2026-10-20T15:54:46+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963888/unifil-mission-continues-operations-as-security-council-considers-post/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963888",
       "published_at": "2026-10-20T10:48:35+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על העברת ציוד צבאי ומערכות מכ\"ם על ידי מסוקים ישראליים לפסגת ג'בל א-ערב בסוריה",
    "החשש בדמשק מפעולה צבאית ישראלית קרובה שנועדה להשפיע על הבחירות בישראל",
    "זהות הגורמים העומדים מאחורי תקיפות הרחפנים הממולכדים נגד עמדות הביטחון בא-סווידא",
    "הוצאת צווי מעצר בפועל על ידי התביעה בלבנון נגד בכירי חיזבאללה חוסיין עבדאללה ועלי איוב",
    "הטענות הישראליות בדבר שיתוף פעולה ישיר ותיאום בין קצינים בצבא לבנון לחיזבאללה בכפרא"
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
     "value": 3.1077,
     "unit": "ILS",
     "change_pct": -0.02,
     "source_id": "src_ecb",
     "as_of": "2026-10-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "פירוק תשתיות צבאיות של חיזבאללה במרחב הביטחוני בדרום לבנון",
      "דרישה מצבא לבנון לאכוף הסדרי ביטחון ולמנוע הימצאות אמצעי לחימה של חיזבאללה בדרום",
      "מוכנות לתמרון קרקעי בלבנון בתרחיש של הצטרפות חיזבאללה למתקפה איראנית"
     ],
     "inferred": [
      "הפעלת לחץ מדיני וצבאי על הממשל בלבנון כדי להרחיק את חיזבאללה מהגבול לפני יישום נסיגות",
      "ביסוס חופש פעולה מודיעיני ומבצעי בדרום סוריה לסיכול איומים בגבול"
     ],
     "forecast": [
      "המשך הפעילות לטיהור תשתיות סמוכות גבול בדרום לבנון במקביל לגרירת רגליים במו\"מ הצבאי בפלורידה עד הבחירות בישראל"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "דרישה לנסיגה ישראלית מלאה מדרום לבנון וסיום התקיפות היומיומיות",
      "הקמת מנגנון פיקוח ליישום הסדרי הביטחון באזורי הפיילוט המוגדרים",
      "אכיפת החוק המדינתי על העברת אמצעי לחימה והחרמת משלוחים בלתי מורשים"
     ],
     "inferred": [
      "שמירה על ערוץ המשא ומתן עם ישראל בחסות ארה\"ב כדי למנוע הידרדרות למלחמה רחבה",
      "ניסיון לתמרן בין דרישות הקהילה הבינלאומית לבין הימנעות מעימות פנים-לבנוני אלים וישיר מול חיזבאללה"
     ],
     "forecast": [
      "המשך השתתפות במפגשים בטמפה ללא פריצת דרך משמעותית, לצד חיכוך הדרגתי מוגבל מול מנגנוני ההברחה של חיזבאללה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "החזקת אמצעי לחימה לצורך שימוש נגד כוחות ישראל בדרום לבנון",
      "דרישה משלטונות לבנון להחזיר חומרי נפץ שהוחרמו ולשחרר את פעיליו העצורים"
     ],
     "inferred": [
      "שימור יכולות ההתחמשות וההברחה בתוך שטח לבנון על אף הלחץ הממשלתי",
      "שיקום המערכים האזרחיים והרפואיים בביירות וסביבתה לביסוס הלגיטימציה בקרב בסיס התמיכה שלו"
     ],
     "forecast": [
      "ניסיונות חוזרים להעברת נשק לדרום תוך הפעלת לחץ פוליטי על מערכת המשפט והביטחון בלבנון לקבור את החקירות"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "המשך החזקת כוחות צבאיים בשטח סוריה ועיראק עד להבטחה מלאה של ביטחון הגבולות והאזור"
     ],
     "inferred": [
      "מניעת התבססות של ישויות עוינות לאנקרה לאורך הגבול ושמירה על מנופי השפעה פוליטיים וצבאיים בסוריה"
     ],
     "forecast": [
      "המשך הפריסה הצבאית בצפון סוריה ללא כוונה לסגת בעתיד הנראה לעין כל עוד לא הושג הסדר התואם את דרישותיה הביטחוניות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/under-the-health-ministers-patronage-hezbollah-rebuilds-its-state-within-a-state/",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/140522/",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/un-force-says-operations-continue-in-lebanon-as-security-council-weighs-post-mission-options/4094898",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/war-on-terror/turkiye-says-troops-will-stay-in-syria-iraq-until-borders-are-secured",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963888/unifil-mission-continues-operations-as-security-council-considers-post/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963888",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-judge-question-hezbollah-officials-over-explosives",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132251",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48745",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25412",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94717",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958223",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T07:58:20+00:00",
  "changes": {
   "NORTH-10202344-01": {
    "kind": "new"
   },
   "NORTH-10202344-02": {
    "kind": "possible",
    "prev": "אזהרות בינלאומיות ללבנון מהתערבות בעימות בין ישראל לאיראן",
    "score": 0.467
   },
   "NORTH-10202344-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "האשמות ישראליות כלפי צבא לבנון על אי-פירוק אתר חיזבאללה",
    "score": 0.65
   },
   "NORTH-10202344-04": {
    "kind": "new"
   },
   "NORTH-10202344-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות והפגזות צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10202344-06": {
    "kind": "new"
   },
   "NORTH-10202344-07": {
    "kind": "new"
   },
   "NORTH-10202344-08": {
    "kind": "new"
   },
   "NORTH-10202344-09": {
    "kind": "possible",
    "prev": "דיווח על פגישות ישראליות עם מנהיגים דרוזים מסויידאא והעברת נשק",
    "score": 0.467
   },
   "NORTH-10202344-10": {
    "kind": "new"
   },
   "NORTH-10202344-11": {
    "kind": "new"
   }
  }
 }
};
