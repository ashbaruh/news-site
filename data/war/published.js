/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-22T0521__yemen-202610220521.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-22T05:21:09+00:00",
   "window": {
    "from": "2026-10-21T05:21:09+00:00",
    "to": "2026-10-22T05:21:09+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610220521"
   },
   "summary": "הזירה בתימן ומול סעודיה מאופיינת בהסלמה משמעותית, הכוללת תקיפות כטב\"מים וטילים של החות'ים לעבר תשתיות קריטיות ושדות תעופה בסעודיה, לצד לחימה פנימית עצימה בתימן סביב העיר טאעז. בתגובה לאיומים, ארה\"ב הורה על פינוי כוח אדם דיפלומטי לא חיוני מסעודיה, ומצרים הבהירה את מעורבותה ההגנתית. במקביל, מעצמות וגורמים אזוריים פועלים להבטחת חופש השיט והאנרגיה מול פעילות החות'ים.",
   "fronts": [
    {
     "name": "חזית סעודיה-החות'ים",
     "status": "פעילה ומוסלמת"
    },
    {
     "name": "חזית פנים תימן (טאעז)",
     "status": "לחימה עצימה ומצור"
    },
    {
     "name": "זירת הים האדום ובאב אל-מנדב",
     "status": "מתוחה עם שיבושי שיט"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10220521-01",
     "title": "הרוגים ופצועים בהפגזות חותיות בטאעז",
     "summary": "הפגזות של החות'ים במחוז טאעז גרמו למותם של אזרחים ולפציעת אחרים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T03:55:04+00:00",
     "last_update_at": "2026-10-22T03:55:04+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומצባቸው הרפואי אינם מאומתים מלבד ההודעה הרשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_af80530c188c9fdd",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-civilians-killed-houthi-attacks-yemens-taiz",
       "published_at": "2026-10-22T03:55:04+00:00"
      }
     ],
     "places": [
      {
       "name": "טאעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10220521-02",
     "title": "הצהרה משותפת של סין וג'יבוטי על חופש השיט",
     "summary": "סין וג'יבוטי פרסמו הצהרה המדגישה שכל המדינות צריכות ליהנות מחופש שיט בים האדום ובמצר באב אל-מנדב.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T00:46:26+00:00",
     "last_update_at": "2026-10-22T00:46:26+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_bff05893d92c038f",
       "url": "https://www.al-monitor.com/originals/2026/10/china-djibouti-say-all-countries-should-enjoy-freedom-navigation-red-sea",
       "published_at": "2026-10-22T00:46:26+00:00"
      }
     ],
     "places": [
      {
       "name": "בייג'ינג, סין",
       "lat": 39.9057,
       "lon": 116.3913
      },
      {
       "name": "מצר באב אל-מנדב",
       "lat": 12.5744,
       "lon": 43.3128
      }
     ]
    },
    {
     "id": "YEMEN-10220521-03",
     "title": "הוראת פינוי לדיפלומטים אמריקנים בסעודיה",
     "summary": "מחלקת המדינה של ארה\"ב הורה לעובדי שגרירות שאינם חיוניים ולבני משפחותיהם לעזוב את סעודיה עקב התקפות חותיות.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T20:33:08+00:00",
     "last_update_at": "2026-10-22T00:26:50+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בשגרירות אינו מאומת לחלוטין מחוץ להודעות הרשמיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_054ba14e4a02193b",
       "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
       "published_at": "2026-10-22T00:26:50+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_054ba14e4a02193b",
       "url": "https://www.aljazeera.com/news/2026/10/21/us-orders-departure-of-personnel-from-saudi-arabia-citing-houthi-threat?traffic_source=rss",
       "published_at": "2026-10-21T23:13:35+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_054ba14e4a02193b",
       "url": "https://www.al-monitor.com/originals/2026/10/washington-orders-us-embassy-staff-families-leave-saudi-arabia",
       "published_at": "2026-10-21T21:30:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_054ba14e4a02193b",
       "url": "https://www.newarab.com/news/us-orders-some-diplomats-leave-saudi-amid-houthi-attacks",
       "published_at": "2026-10-21T21:26:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_1fb38203158ce5df",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-state-department-says-departure-orders-embassy-staff-saudi-arabia",
       "published_at": "2026-10-21T20:33:08+00:00"
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
     "id": "YEMEN-10220521-04",
     "title": "ירוט כטב\"מים במחוז המזרחי בסעודיה",
     "summary": "ההגנה האווירית של הקואליציה בהובלת סעודיה יירטה והשמידה ארבעה רחפנים במחוז המזרחי.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T22:38:35+00:00",
     "last_update_at": "2026-10-21T22:38:35+00:00",
     "what_is_not_verified": "מקור שיגור הרחפנים המדויק לא צוין באופן פרטני מעבר לייחוס הכללי לחות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5c1f470d6fa3c971",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-four-drones-intercepted-and-destroyed-eastern",
       "published_at": "2026-10-21T22:38:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10220521-05",
     "title": "ביקור הנשיא הצרפתי מקרון בסעודיה",
     "summary": "נשיא צרפת עמנואל מקרון הגיע לביקור סולידריות בריאד ונפגש עם מנהיגים סעודיים להבטחת אספקת סולר ושיתוף פעולה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T15:43:49+00:00",
     "last_update_at": "2026-10-21T15:54:08+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/french-president-macron-lands-in-saudi-arabia-on-surprise-solidarity-visit",
       "published_at": "2026-10-21T15:54:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-commits-addition-france-diesel-supplies-macron-visit",
       "published_at": "2026-10-21T15:43:49+00:00"
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
     "id": "YEMEN-10220521-06",
     "title": "פגיעה בשדה תפילה ונמל תעופה אזרחי בסעודיה",
     "summary": "מתקפות כטב\"מים וטילים פגעו בנמל תעופה אזרחי בדמאם ובשדה נפט, וגרמו לנפגעים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T19:46:27+00:00",
     "last_update_at": "2026-10-21T19:46:27+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק נמסר מדיווחים ראשוניים שטרם אומתו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-orders-diplomats-depart-saudi-arabia-amid-houthi-strikes",
       "published_at": "2026-10-21T19:46:27+00:00"
      }
     ],
     "places": [
      {
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    }
   ],
   "not_verified": [
    "טענות החות'ים כי סעודיה סיפקה סיוע צבאי לישראל",
    "מספר הנפגעים המדויק בכל זירות התקיפה בסעודיה ובתימן"
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
      "פגיעה בתשתיות קריטיות בסעודיה ובנמלי תעופה",
      "המשך פעילות נגד כוחות ממשלת תימן והקואליציה"
     ],
     "inferred": [
      "שיבוש אספקת האנרגיה והכלכלה האזורית",
      "הרחבת יכולות הייצור המקומי של אמצעי לחימה מתקדמים בעזרת רשתות רכש"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה של שדות תעופה ותשתיות נפט בסעודיה",
      "הגברת הלחץ על טאעז בניסיון להכניע את מעוזי הממשלה"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הגנה על שטחה, גבולותיה ותשתיותיה האזרחיות",
      "יירוט איומים אוויריים באמצעות מערכות ההגנה"
     ],
     "inferred": [
      "גיוס תמיכה בינלאומית ומצרים כדי לבלום את האיומים",
      "שמירה על רציפות תפקודית בנמלי התעופה והכלכלה למרות המתקפות"
     ],
     "forecast": [
      "המשך שיתוף פעולה ביטחוני הדוק עם בעלות ברית כמו צרפת ומצרים",
      "הגנה אקטיבית נגד מתקפות כטב\"מים וטילים"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הבטחת בטחון ואבטחת אנשי הסגל הדיפלומטי בסעודיה ובמפרץ",
      "גינוי התקיפות של החות'ים נגד תשתיות אזרחיות"
     ],
     "inferred": [
      "חשש מהסלמה רחבה יותר מול איראן ושלוחיה באזור",
      "שמירה על חופש השיט והכלכלה העולמית"
     ],
     "forecast": [
      "השארת הגבלות הדיפלומטים בתוקף עד להתרת המתח",
      "המשך מעקב מודיעיני וצבאי אחר פעילות החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/21/us-orders-departure-of-personnel-from-saudi-arabia-citing-houthi-threat?traffic_source=rss",
     "accessed_at": "2026-10-22T05:21:09+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-orders-diplomats-depart-saudi-arabia-amid-houthi-strikes",
     "accessed_at": "2026-10-22T05:21:09+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/french-president-macron-lands-in-saudi-arabia-on-surprise-solidarity-visit",
     "accessed_at": "2026-10-22T05:21:09+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
     "accessed_at": "2026-10-22T05:21:09+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-four-drones-intercepted-and-destroyed-eastern",
     "accessed_at": "2026-10-22T05:21:09+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-commits-addition-france-diesel-supplies-macron-visit",
     "accessed_at": "2026-10-22T05:21:09+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-21T15:56:20+00:00",
  "changes": {
   "YEMEN-10220521-01": {
    "kind": "new"
   },
   "YEMEN-10220521-02": {
    "kind": "new"
   },
   "YEMEN-10220521-03": {
    "kind": "new"
   },
   "YEMEN-10220521-04": {
    "kind": "new"
   },
   "YEMEN-10220521-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ביקור נשיא צרפת בסעודיה",
    "score": 1.0
   },
   "YEMEN-10220521-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-22T0516__iran-202610220516.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-22T05:16:57+00:00",
   "window": {
    "from": "2026-10-21T05:16:57+00:00",
    "to": "2026-10-22T05:16:57+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610220516"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מחריף במרחב הימי של המפרץ הפרסי ומצר הורמוז, שם נרשמות פגיעות בכלי שיט לצד תקיפות נקודתיות של משגרים. בישראל ובארצות הברית מקדמים היערכות מבצעית הכוללת אימוני טיסה ארוכי טווח ותוכניות לפגיעה במתקני גרעין ואנרגיה, בעוד טהרן מאיימת להרחיב את הפגיעה בבסיסים אזוריים ובמתקני נפט. במקביל, וושינגטון מפנה חלק מאנשיה מנציגויות במפרץ ומטילה סנקציות חדשות על מערכי התובלה הימית של איראן.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "הסלמה צבאית הכוללת מיקוש, ירי טילים, פגיעות בכלי שיט מסחריים ותקיפות אמריקניות"
    },
    {
     "name": "ישראל מול איראן",
     "status": "כוננות גבוהה ותרגול גיחות אוויריות ישראליות בקרבת הגבול האיראני לצד איומי תקיפה הדדיים"
    },
    {
     "name": "ארצות הברית מול איראן",
     "status": "הפעלת לחץ כלכלי באמצעות סנקציות, הכנת תוכניות מבצעיות ופינוי נציגויות מחשש להסלמה"
    },
    {
     "name": "חזית הצפון (שלוחת חיזבאללה בלבנון)",
     "status": "דריכות ישראלית מפני הצטרפות הארגון למערכה ברקע מאמצי שיקום יכולותיו בביירות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10220516-01",
     "title": "פגיעה בכלי שיט במפרץ הפרסי ובמצר הורמוז",
     "summary": "חיל הים של משמרות המהפכה הודיע על פגיעה בארבעה כלי שיט שהעבירו נפט בצפון המפרץ הפרסי ושלושה כלי שיט נוספים שעלו על מוקשים מערבית למצר הורמוז.",
     "axis": "איראן - המפרץ הפרסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T00:12:13+00:00",
     "last_update_at": "2026-10-22T05:08:04+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח האיראני על היקף הפגיעות בכלי השיט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-navy-says-seven-vessels-hit-over-past-day",
       "published_at": "2026-10-22T05:08:04+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/wfj5nzl9p",
       "published_at": "2026-10-22T00:12:13+00:00"
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
     "id": "IRAN-10220516-02",
     "title": "תקיפה אמריקנית של משגר טילים באי סיריק באיראן",
     "summary": "כוחות ארצות הברית ביצעו תקיפה נגד משגר טילים המוצב באי סיריק שבאיראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T23:51:09+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T23:51:09+00:00",
     "last_update_at": "2026-10-21T23:51:09+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים אינם ידועים מעבר לדיווח הראשוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48806",
       "published_at": "2026-10-21T23:51:09+00:00"
      }
     ],
     "places": [
      {
       "name": "סיריק, איראן",
       "lat": 26.5177,
       "lon": 57.1018
      }
     ]
    },
    {
     "id": "IRAN-10220516-03",
     "title": "שיגור טילים בליסטיים מסיריק לכיוון מצר הורמוז",
     "summary": "נמסר על שיגור של טילים בליסטיים מצד איראן מהאי סיריק אל עבר מימי מצר הורמוז.",
     "axis": "איראן - מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T21:19:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T21:19:10+00:00",
     "last_update_at": "2026-10-21T21:19:10+00:00",
     "what_is_not_verified": "האם הטילים פגעו במטרות כלשהן או יורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48800",
       "published_at": "2026-10-21T21:19:10+00:00"
      }
     ],
     "places": [
      {
       "name": "סיריק, איראן",
       "lat": 26.5177,
       "lon": 57.1018
      }
     ]
    },
    {
     "id": "IRAN-10220516-04",
     "title": "תרגול טיסות מבצעיות של חיל האוויר הישראלי בסמוך לאיראן",
     "summary": "עשרות מטוסי קרב ומטוסי תדלוק ישראליים טסו למרחק של כאלף ושלוש מאות קילומטרים לכיוון גבול איראן במסגרת היערכות לאפשרות תקיפה והרתעה.",
     "axis": "ישראל - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T21:28:18+00:00",
     "last_update_at": "2026-10-22T04:20:30+00:00",
     "what_is_not_verified": "מידת התיאום עם ארצות הברית והאם הכוונה הייתה לגרור ירי תגובה איראני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21682429",
       "published_at": "2026-10-22T04:20:30+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1pex9u3me",
       "published_at": "2026-10-21T21:28:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-05",
     "title": "פינוי דיפלומטים אמריקנים מסעודיה וממדינות המפרץ",
     "summary": "מחלקת המדינה האמריקנית הורתה לחלק מאנשי הנציגות ולבני משפחותיהם לעזוב את סעודיה בעקבות ריבוי תקיפות החות'ים וחשש מהסלמה בעימות עם איראן.",
     "axis": "ארה\"ב - המפרץ / איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T19:25:43+00:00",
     "last_update_at": "2026-10-22T00:26:50+00:00",
     "what_is_not_verified": "היקף הפינוי ביתר מדינות האזור מעבר לסעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
       "published_at": "2026-10-22T00:26:50+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/21/us-orders-departure-of-personnel-from-saudi-arabia-citing-houthi-threat?traffic_source=rss",
       "published_at": "2026-10-21T23:13:35+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/washington-orders-us-embassy-staff-families-leave-saudi-arabia",
       "published_at": "2026-10-21T21:30:32+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94737",
       "published_at": "2026-10-21T19:25:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-06",
     "title": "הטלת סנקציות אמריקניות על סיוע למערך הספנות האיראני",
     "summary": "משרד האוצר האמריקני הטיל סנקציות על משרד עורכי דין הפועל מיוון ופנמה בגין הגשת סיוע משפטי לרשתות ספנות איראניות, ופתח בבדיקת בנק יווני.",
     "axis": "ארה\"ב - איראן (סנקציות)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T17:46:29+00:00",
     "last_update_at": "2026-10-21T17:46:29+00:00",
     "what_is_not_verified": "זהות הבנק היווני הנחקר במסגרת הבדיקה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-sanctions-greece-panama-based-law-firm-over-aid-iranian-shipping",
       "published_at": "2026-10-21T17:46:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-07",
     "title": "הפחתת נוכחות כוחות אמריקניים בבסיסים במזרח התיכון",
     "summary": "צבא ארצות הברית ביצע הפחתה שקטה בנוכחות החיילים הפרוסים בבסיסים שונים ברחבי המזרח התיכון.",
     "axis": "ארה\"ב - המזרח התיכון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T21:28:18+00:00",
     "last_update_at": "2026-10-21T21:28:18+00:00",
     "what_is_not_verified": "מספר החיילים המדויק ומיקומי הבסיסים שמהם פונו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_nbc",
       "url": "https://www.ynet.co.il/news/article/r1pex9u3me",
       "published_at": "2026-10-21T21:28:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-08",
     "title": "התכנסות לדיונים ישראליים-אמריקניים על תקיפת יעדים באיראן",
     "summary": "בכירים מישראל ומארצות הברית דנו באפשרות של מהלומה מרוכזת באיראן שתכוון למתקני גרעין, תשתיות נפט וטילים, לצד הגברת אימונים משותפים.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T19:36:16+00:00",
     "last_update_at": "2026-10-22T01:31:58+00:00",
     "what_is_not_verified": "האם הנשיא טראמפ יאשר את התוכניות המבצעיות האמורות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21682285",
       "published_at": "2026-10-22T01:31:58+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/wfj5nzl9p",
       "published_at": "2026-10-22T00:12:13+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132330",
       "published_at": "2026-10-21T19:36:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-09",
     "title": "פניית איראן לאו\"ם בגין איומי תקיפה",
     "summary": "שגריר איראן באו\"ם שיגר מכתב למזכ\"ל ולמועצת הביטחון בדרישה לגנות איומי תקיפה ישראליים ואמריקניים ושימוש אפשרי בפצצת MOAB נגד תשתיות המדינה.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T02:47:08+00:00",
     "last_update_at": "2026-10-22T02:47:08+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-calls-un-slam-us-naval-blockade-hormuz-strait",
       "published_at": "2026-10-22T02:47:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-10",
     "title": "הצהרות נתניהו נגד חידוש תוכנית הגרעין האיראנית",
     "summary": "ראש ממשלת ישראל הצהיר בטקס צבאי כי איראן מחדשת את מאמציה להשגת נשק גרעיני בהובלת מוג'תבא חמינאי וכי יש לפעול להפלת המשטר.",
     "axis": "ישראל - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T13:16:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T13:16:14+00:00",
     "last_update_at": "2026-10-21T14:52:54+00:00",
     "what_is_not_verified": "מצב ההתקדמות הממשי של תוכנית הגרעין בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132316",
       "published_at": "2026-10-21T14:52:54+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958333",
       "published_at": "2026-10-21T13:16:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10220516-11",
     "title": "שיקום תשתיות חיזבאללה בביירות והיערכות בצה\"ל",
     "summary": "גורם ביטחוני ישראלי מסר כי חיזבאללה פועל לשיקום יכולות שנפגעו באזור ביירות, וכי צה\"ל נערך לאפשרות של הסלמה מול הארגון במידה וייפתחו חילופי אש מול איראן.",
     "axis": "ישראל - חיזבאללה (שלוחת איראן)",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T11:55:48+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T11:55:48+00:00",
     "last_update_at": "2026-10-21T11:55:48+00:00",
     "what_is_not_verified": "היקף השיקום המדויק של היכולות הצבאיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958309",
       "published_at": "2026-10-21T11:55:48+00:00"
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
    "טענת משמרות המהפכה על מספר כלי השיט שנפגעו וטבעו או בערו במצר הורמוז",
    "אישור רשמי של הנשיא טראמפ לתוכניות תקיפה מקיפות באיראן לאחר בחירות האמצע",
    "היקף הפינוי של צוותים אמריקניים מאיחוד האמירויות, ירדן, קטאר ובחריין מעבר לסעודיה",
    "רמת היעילות של פצצות MOAB כנגד מתקני גרעין תת קרקעיים באיראן",
    "מידת ההתקדמות המעשית של תוכנית הגרעין האיראנית תחת מוג'תבא חמינאי"
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
     "actor": "איראן",
     "declared": [
      "הגנה על הריבונות והפעלת זכות להגנה עצמית מפני תוקפנות",
      "שליטה במעבר הימי במצר הורמוז ומניעת הברחות נפט לא חוקיות",
      "הרחבת התגובה הצבאית לעבר בסיסים אמריקניים ומתקני נפט אזוריים אם התקיפות יימשכו"
     ],
     "inferred": [
      "שיבוש נתיבי השיט כדי להפעיל לחץ כלכלי עולמי באמצעות מחירי האנרגיה",
      "יצירת הרתעה מול מהלומה אמריקנית-ישראלית באמצעות איום על יעדים בסעודיה"
     ],
     "forecast": [
      "המשך פגיעה ממוקדת בכלי שיט במצר הורמוז ושיגורי טילים לעבר נתיבי ים",
      "פנייה מוגברת לערוצים דיפלומטיים בינלאומיים לצד העלאת כוננות בבסיסי הטילים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת השגת נשק גרעיני בידי המשטר האיראני",
      "הסרת האיום האיראני כולל שאיפה להפלת המשטר בטהרן"
     ],
     "inferred": [
      "הכשרת התנאים המבצעיים והמודיעיניים למתקפת פתע ארוכת טווח",
      "גרירת איראן לתגובה שתכשיר לגיטימציה לפעולה צבאית משותפת עם ארצות הברית"
     ],
     "forecast": [
      "המשך טיסות אימון מבצעיות בטווחים ארוכים והגברת הכוננות בגבול הצפון",
      "תיאום מוגבר של מטרות תקיפה אסטרטגיות מול מערכת הביטחון האמריקנית"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הגנה על אנשי הנציגויות הדיפלומטיות והכוחות במזרח התיכון",
      "שמירה על חופש השיט במעברים הבינלאומיים ואכיפת סנקציות על איראן"
     ],
     "inferred": [
      "צמצום חשיפת כוחות אמריקניים לפגיעה ישירה באמצעות דילול נוכחות בבסיסים",
      "הכנת חלופות תקיפה בעצימות גבוהה ככלי מיקוח להחזרת טהרן למשא ומתן"
     ],
     "forecast": [
      "העמקת הסנקציות הכלכליות על גורמי ספנות וסחר המסייעים לאיראן",
      "הימנעות ממתקפה רחבה עד לאחר בחירות האמצע בארצות הברית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/21/us-orders-departure-of-personnel-from-saudi-arabia-citing-houthi-threat?traffic_source=rss",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-sanctions-greece-panama-based-law-firm-over-aid-iranian-shipping",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/22/us-diplomats-told-to-leave-saudi-arabia-amid-houthi-attacks",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21682285",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-calls-un-slam-us-naval-blockade-hormuz-strait",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132316",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48800",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94737",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958309",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/wfj5nzl9p",
     "accessed_at": "2026-10-22T05:16:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-21T15:34:26+00:00",
  "changes": {
   "IRAN-10220516-01": {
    "kind": "new"
   },
   "IRAN-10220516-02": {
    "kind": "new"
   },
   "IRAN-10220516-03": {
    "kind": "new"
   },
   "IRAN-10220516-04": {
    "kind": "new"
   },
   "IRAN-10220516-05": {
    "kind": "new"
   },
   "IRAN-10220516-06": {
    "kind": "possible",
    "prev": "צו גירוש בקנדה לאזרח איראני בגין מעורבות בהתחמקות מסנקציות",
    "score": 0.467
   },
   "IRAN-10220516-07": {
    "kind": "new"
   },
   "IRAN-10220516-08": {
    "kind": "new"
   },
   "IRAN-10220516-09": {
    "kind": "possible",
    "prev": "נאומי בכירים בישראל על איומי איראן והמשטר",
    "score": 0.467
   },
   "IRAN-10220516-10": {
    "kind": "new"
   },
   "IRAN-10220516-11": {
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
  "draft": "drafts/north/2026-10-22T0521__north-202610220521.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-22T05:21:53+00:00",
   "window": {
    "from": "2026-10-21T05:21:53+00:00",
    "to": "2026-10-22T05:21:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610220521"
   },
   "summary": "הגזרה הצפונית מאופיינת בפעילות צבאית ישראלית מתמשכת בדרום לבנון ובדרום סוריה, הכוללת תקיפות, הריסות ופעילות קרקעית נקודתית. במקביל, בצד הלבนוני מתנהלים דיונים מדיניים פנימיים ובינלאומיים סביב ריבונות המדינה ופירוק חיזבאללה, בעוד צבא לבנון פועל לחשוף תשתיות תת-קרקעיות של הארגון באזור ביירות.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה (תקיפות אוויריות, הריסות, חשיפת מנהרות, ופעילות צבאית סביב הגבול)"
    },
    {
     "name": "חזית סוריה",
     "status": "פעילה (פריסות כוחות, פשיטות, ותנועת כלי טיס בגבולות)"
    }
   ],
   "events": [
    {
     "id": "NORTH-10220521-01",
     "title": "הריגת אדם בעל מוגבלויות בדרום סוריה",
     "summary": "כוחות צבא ישראל הרגו אדם בעל מוגבלויות במהלך פשיטה על כפר במחוז דרעא, במסגרתה פרסו צלפים וירו ללא הבחנה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-22T01:30:14+00:00",
     "last_update_at": "2026-10-22T04:19:55+00:00",
     "what_is_not_verified": "טענות על ירי ללא הבחנה ופרטי הפשיטה המדויקים מחוץ לדיווח המקומי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_state_media",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-troops-shoot-dead-man-disabilities-syrias-daraa",
       "published_at": "2026-10-22T04:19:55+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_state_media",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-military-incursion-reported-syrias-daraa",
       "published_at": "2026-10-22T01:52:18+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_state_media",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-deploy-snipers-on-rooftops-open-fire-in-southern-syria/4096589",
       "published_at": "2026-10-22T01:30:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10220521-02",
     "title": "תקיפות והריסות נרחבות בדרום לבנון",
     "summary": "ישראל ביצעה סדרת תקיפות אוויריות ופיצוצי הריסה נרחבים במספר אזורים בדרום לבנון, לצד טיסת כטב\"מים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T22:30:49+00:00",
     "last_update_at": "2026-10-21T22:30:49+00:00",
     "what_is_not_verified": "היקף הנזקים המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_national_news_agency",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-launches-air-strikes-demolitions-across-southern-lebanon",
       "published_at": "2026-10-21T22:30:49+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "צור, לבנון",
       "lat": 33.2721,
       "lon": 35.1964
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10220521-03",
     "title": "חשיפת מנהרה של חיזבאללה במזרח ביירות",
     "summary": "צבא לבנון חשף מנהרה באזור רויסאת אל-ג'דידה במזרח ביירות המשויכת לחיזבאללה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T11:55:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T11:55:48+00:00",
     "last_update_at": "2026-10-21T11:55:48+00:00",
     "what_is_not_verified": "היקף השימוש הנוכחי במנהרה ותשתיות נוספות בביירות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958309",
       "published_at": "2026-10-21T11:55:48+00:00"
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
     "id": "NORTH-10220521-04",
     "title": "הצבעת חיילי צה\"ל בקלפיות בגזרות השונות",
     "summary": "חיילי צה\"ל ומפקדים החלו להצביע בקלפיות בכלל הגזרות, כולל לבנון וסוריה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-21T06:38:54+00:00",
     "last_update_at": "2026-10-21T13:58:00+00:00",
     "what_is_not_verified": "תוצאות ההצבעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_israeli_analysts",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/964057/war-or-elections-israels-leadership-divided-over-timing-of-iran-strike/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964057",
       "published_at": "2026-10-21T13:58:00+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_israeli_analysts",
       "url": "https://t.me/idf_telegram/25420",
       "published_at": "2026-10-21T06:38:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10220521-05",
     "title": "טיסת מטוסי קרב ישראליים מעל סוריה ועיראק",
     "summary": "נרשמה תנועה ערבית של מטוסי קרב בשמי הגבול בין סוריה לעיראק, ודווח על תרגיל ישראלי הכולל טיסת מטוסים לכיוון מזרח.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T05:17:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-21T05:17:16+00:00",
     "last_update_at": "2026-10-21T05:53:54+00:00",
     "what_is_not_verified": "יעדי הטיסה והאם מדובר בתרגיל בלבד.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94723",
       "published_at": "2026-10-21T05:53:54+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132271",
       "published_at": "2026-10-21T05:17:16+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "{'string': 'טענות על היקף שיקום התשתיות של חיזבאללה בביירות והיערכות לתקיפת העורף הישראלי.'}",
    "{'string': 'פרטי תוכנית התקיפה הישראלית נגד איראן והמעורבות האמריקאית בהפסקה או דחייה שלה.'}"
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
      "שמירה על מוכנות צבאית מול הגזרות השונות",
      "מניעת התבססות עוינת"
     ],
     "inferred": [
      "פגיעה בתשתיות טרור והחלשת יכולות חיזבאללה בלבנון ובסוריה",
      "הפעלת לחץ צבאי למניעת התאוששות האויב בזירות השונות"
     ],
     "forecast": [
      "המשך פעילות צבאית נקודתית וממוקדת בגבולות לבנון וסוריה בהתאם להתפתחויות הפוליטיות והביטחוניות"
     ]
    },
    {
     "actor": "לבנון (ממשל / צבא לבנון)",
     "declared": [
      "הגנה על ריבונות אלדולה ושמירת החלטות המלחמה והשלום בידי מוסדות המדינה",
      "קריאה להפסקת הכיבוש והלחצים בדרום לבנון"
     ],
     "inferred": [
      "ניסיון מוגבל להפגין עשייה מול תשתיות חיזבאללה כדי לרצות גורמים בינלאומיים",
      "הימנעות מהסלמה רחבה מול ישראל"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים לגיוס תמיכה בינלאומית לצבא לבנון לאחר תקופת הבחירות בישראל"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שיקום יכולות ותשתיות שנפגעו והעתקתן למרחבים אזרחיים ובפרט לביירות",
      "שימור יכולת תגובה למקרה של הסלמה רחבה"
     ],
     "forecast": [
      "המשך התחפרות ושיקום חשאי של תשתיות צבאיות תחת מעטפת אזרחית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-deploy-snipers-on-rooftops-open-fire-in-southern-syria/4096589",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/964057/war-or-elections-israels-leadership-divided-over-timing-of-iran-strike/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964057",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-launches-air-strikes-demolitions-across-southern-lebanon",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132271",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25420",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94723",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958309",
     "accessed_at": "2026-10-22T05:21:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T23:44:32+00:00",
  "changes": {
   "NORTH-10220521-01": {
    "kind": "new"
   },
   "NORTH-10220521-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10220521-03": {
    "kind": "possible",
    "prev": "פתיחה מחדש של מרכז בריאות של חיזבאללה בחסות שר הבריאות הלבנוני",
    "score": 0.633
   },
   "NORTH-10220521-04": {
    "kind": "new"
   },
   "NORTH-10220521-05": {
    "kind": "new"
   }
  }
 }
};
