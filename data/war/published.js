/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-05T0626__yemen-202610050626.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-05T06:26:42+00:00",
   "window": {
    "from": "2026-10-04T06:26:42+00:00",
    "to": "2026-10-05T06:26:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610050626"
   },
   "summary": "הלחימה בתימן הסלימה משמעותית עם פתיחת מבצע צבאי נרחב מצד ממשלת תימן הנתמכת על ידי סעודיה נגד החות'ים, במקביל להתקדמות קרקעית של החות'ים וניתוק צירי אספקה מרכזיים באזור תעז. כמו כן, נרשמו תקיפות הדדיות בין החות'ים לבין מטרות בשטח סעודיה ופעילות ימית חשודה בדרום תימן.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (תעז וצעדה)",
     "status": "פעיל והסלמה חריפה"
    },
    {
     "name": "הזירה מול סעודיה",
     "status": "תקיפות הדדיות"
    },
    {
     "name": "הזירה הימית (מפרץ עדן ובאב אל-מנדב)",
     "status": "פעיל עם אירועים חריגים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10050626-01",
     "title": "הכרזת הממשלה התימנית על מבצע צבאי נרחב",
     "summary": "הנהגת ממשלת תימן הוציאה הודעה רשמית על פתיחת מבצע צבאי רחב היקף שמטרתו להשתלט מחדש על כלל השטחים הנמצאים בשליטת החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T12:46:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T12:46:33+00:00",
     "last_update_at": "2026-10-05T06:20:41+00:00",
     "what_is_not_verified": "היקף הצלחת המבצע בפועל בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c84f70e7a3e5fff9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-over-1120-attacks-against-houthi",
       "published_at": "2026-10-05T06:20:41+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_c7fc39076d5a6301",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/5/yemen-govt-forces-commence-major-combat-operation-against-houthis?traffic_source=rss",
       "published_at": "2026-10-05T03:11:03+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_e92ddaf0bdc05219",
       "url": "https://www.theguardian.com/world/2026/oct/05/saudi-backed-yemen-government-military-drive-retake-houthi-territory",
       "published_at": "2026-10-05T00:38:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_5e345afcfeb88677",
       "url": "https://www.al-monitor.com/originals/2026/10/yemeni-government-launches-offensive-seize-all-areas-iran-backed-houthis",
       "published_at": "2026-10-04T12:46:33+00:00"
      }
     ],
     "places": [
      {
       "name": "צעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10050626-02",
     "title": "התקדמות החות'ים וניתוק ציר אספקה לתעז",
     "summary": "כוחות חות'ים השתלטו על אזורים במרחב תעז וניתקו את ציר האספקה המרכזי המחבר בינה לבין עדן.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:52:50+00:00",
     "last_update_at": "2026-10-04T19:34:17+00:00",
     "what_is_not_verified": "ההשלכות המלאות על עמידות העיר עדן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131344",
       "published_at": "2026-10-04T19:34:17+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-presidency-announces-offensive-retake-houthi-territory",
       "published_at": "2026-10-04T14:22:09+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-cut-vital-aden-taiz-road-yemen",
       "published_at": "2026-10-04T08:52:50+00:00"
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
     "id": "YEMEN-10050626-03",
     "title": "תקיפות אוויריות בצנעא ודיווחים על פגיעה במתקן בסעודיה",
     "summary": "התקיימו תקיפות אוויריות בעיר צנעא שיוחסו לסעודיה, ובמקביל דווח על תקיפה לעבר מתקני נפט באזור ריאד שבה לקחו אחריות החות'ים, אולם הקואליציה בראשות סעודיה הכחישה את הדיווחים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:21:37+00:00",
     "last_update_at": "2026-10-04T23:31:00+00:00",
     "what_is_not_verified": "האם התקיפה בריאד אכן פגעה במתקן אראמכו כפי שטוענים החות'ים, או שמדובר בטענות מטעות לדברי הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-saudi-air-strike-hits-foam-factory-yemens-sanaa",
       "published_at": "2026-10-04T23:31:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94484",
       "published_at": "2026-10-04T17:14:58+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-claims-attack-saudi-capital-misleading",
       "published_at": "2026-10-04T10:09:39+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/yemen-s-houthis-claim-attacks-on-aramco-facilities-in-riyadh",
       "published_at": "2026-10-04T08:21:37+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10050626-04",
     "title": "פיצוצים ליד מכלית דלק בדרום תימן",
     "summary": "סוכנות סחר ימבריטית דיווחה כי צוות של מכלית דלק הבחין במספר פיצוצים בסביבתו במפרץ עדן מדרום לנמל מוכה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T19:45:31+00:00",
     "last_update_at": "2026-10-04T19:45:31+00:00",
     "what_is_not_verified": "זהות הגורם האחראי לפיצוצים ומקורם המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_1e747119db5e4db3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-reported-near-tanker-southern-yemen-ukmto",
       "published_at": "2026-10-04T19:45:31+00:00"
      }
     ],
     "places": [
      {
       "name": "מוכה, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      },
      {
       "name": "מפרץ עדן",
       "lat": 12.6147,
       "lon": 47.5063
      }
     ]
    }
   ],
   "not_verified": [
    "היקף הנפגעים והנזקים האמיתי כתוצאה מהתקיפות ההדדיות בין החות'ים לסעודיה",
    "האחריות המדויקת לפיצוצים ליד המכלית במפרץ עדן",
    "התוצאות המעשיות של מתקפת הנגד הממשלתית בתימן"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ממשלת תימן והקואליציה בהובלת סעודיה",
     "declared": [
      "השתלטות מחדש על כלל השטחים המוחזקים בידי החות'ים",
      "החזרת שליטת המדינה לאורך כל שטח הרפובליקה"
     ],
     "inferred": [
      "בלמו או מנסים לבלם את ההתקדמות החות'ית המאיימת על ערים מרכזיות כמו עדן ותעז",
      "השבת תשתיות ושמירה על נתיבי שיט בינלאומיים"
     ],
     "forecast": [
      "המשך הלחימה הקרקעית והאווירית בטווח הקצר",
      "ניסיונות של סעודיה לספק גיבוי אווירי ולוגיסטי לממשלה התימנית"
     ]
    },
    {
     "actor": "החות'ים",
     "declared": [
      "המשך ההתנגדות לתוקפנות והגנה על האזורים שבשליטתם",
      "תגובה בעוצמה על כל פעולה צבאית נגדם"
     ],
     "inferred": [
      "הרחבת השליטה הקרקעית ויצירת לחץ צבאי על ערי הפיתוח והבירה הזמנית עדן",
      "שימור יכולת פגיעה בעומק סעודיה ובנתיבי השיט"
     ],
     "forecast": [
      "המשך ניסיונות כיתור והתקדמות באזור תעז",
      "הגברת שימוש בכטב\"מים ורקטות במקרה של מתקפה נגדם"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/5/yemen-govt-forces-commence-major-combat-operation-against-houthis?traffic_source=rss",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemeni-government-launches-offensive-seize-all-areas-iran-backed-houthis",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/yemen-s-houthis-claim-attacks-on-aramco-facilities-in-riyadh",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/saudi-backed-yemen-government-military-drive-retake-houthi-territory",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-reported-near-tanker-southern-yemen-ukmto",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthi-claims-attack-saudi-capital-misleading",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131344",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94484",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-04T15:42:33+00:00",
  "changes": {
   "YEMEN-10050626-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "הכרזת ממשלת תימן על מבצע צבאי נרחב להשבת השליטה בשטחי החות'ים",
    "score": 0.65
   },
   "YEMEN-10050626-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התקדמות חות'ית וחסימת ציר האספקה המרכזי בין תעז לעדן",
    "score": 1.0
   },
   "YEMEN-10050626-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "גל תקיפות אוויריות נרחב של סעודיה וממשלת תימן בצנעא ובמחוזות נוספים",
    "score": 1.0
   },
   "YEMEN-10050626-04": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-04T1529__iran-202610041529.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-04T15:29:08+00:00",
   "window": {
    "from": "2026-10-03T15:29:08+00:00",
    "to": "2026-10-04T15:29:08+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610041529"
   },
   "summary": "הזירה מאופיינת במתיחות רבה סביב שליטת ארה\"ב במצר הורמוז, לצד סנקציות כלכליות חמורות המפעילות לחץ כבד על הכלכלה והמטבע באיראן. איראן ממשיכה לדרוש תנאים לפתיחת המצר ומאיימת בשדרוג טווח טיליה נגד בסיסים אמריקניים, בעוד ארה\"ב וישראל ממשיכות לשמור את כל האפשרויות פתוחות ולבחון את צעדיהן הבאים.",
   "fronts": [
    {
     "name": "המפרץ והורמוז",
     "status": "פעיל ומתוח"
    },
    {
     "name": "הזירה הדיפלומטית-כלכלית",
     "status": "בסנקציות ועימות כלכלי"
    }
   ],
   "events": [
    {
     "id": "IRAN-10041529-01",
     "title": "תקיפת מכלית במצר הורמוז",
     "summary": "מכלית נפגעה על ידי קליע לא מזוהה במצר הורמוז ונגרם נזק לחדר המכונות שלה, ללא נפגעים בקרב הצוות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T09:07:28+00:00",
     "last_update_at": "2026-10-04T09:07:28+00:00",
     "what_is_not_verified": "זהות אלגורם או אמצעי הלחימה שפגע במכלית אינם ידועים בוודאות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2c26db0ba0effb3c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tanker-hit-unknown-projectile-strait-hormuz-ukmto-says",
       "published_at": "2026-10-04T09:07:28+00:00"
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
     "id": "IRAN-10041529-02",
     "title": "עמדות איראניות בנוגע לסגירת מצר הורמוז והצעת 7 הימים",
     "summary": "בכירים באיראן ציינו כי הם בוחנים את תגובת ארצות הברית להצעתם בת שבעת הימים לפתיחת מצר הורמוז, אך הדגישו כי המצר יישאר סגור עד שוושינגטון תעמוד בשבעה תנאים.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:55:24+00:00",
     "last_update_at": "2026-10-04T14:52:46+00:00",
     "what_is_not_verified": "פרטי התגובה האמריקאית המדויקים ותוקף ההצעה אינם מאומתים מעבר לדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_irna",
       "url": "https://en.irna.ir/news/86283103/US-response-to-Iran-s-7-day-proposal-being-reviewed-Deputy-FM",
       "published_at": "2026-10-04T14:52:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_irna",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-reponse-hormuz-proposal-currently-under-review-tehran",
       "published_at": "2026-10-04T13:49:52+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_irna",
       "url": "https://www.iranintl.com/en/202610047470",
       "published_at": "2026-10-04T13:22:34+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_irna",
       "url": "https://www.aljazeera.com/news/2026/10/4/iran-says-strait-of-hormuz-to-remain-closed-until-us-meets-conditions?traffic_source=rss",
       "published_at": "2026-10-04T11:11:30+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_irna",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-hormuz-strait-remain-closed-until-us-meets-seven-conditions",
       "published_at": "2026-10-04T08:55:24+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10041529-03",
     "title": "הצהרת איראן על שדרוג טווח הטילים",
     "summary": "דובר צבא איראן הכריז על כוונת ארצו להגדיל את טווח הטילים הבליסטיים כדי לפגוע בבסיסים אמריקניים מרוחקים.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T11:12:20+00:00",
     "last_update_at": "2026-10-04T11:15:09+00:00",
     "what_is_not_verified": "האם הטילים אכן שודרגו בפועל מעבר להצהרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_israel_hayom",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21548568",
       "published_at": "2026-10-04T11:15:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_israel_hayom",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-increase-range-its-missiles-army-spokesperson-tells-fars",
       "published_at": "2026-10-04T11:12:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10041529-04",
     "title": "פסיקת מאסר לתושב באר שבע בגין מגע עם סוכן איראני",
     "summary": "תושב באר שבע נידון לשלוש שנות מאסר לאחר שהורשע במגע עם סוכן איראני והציע לו מידע תמורת תשלום.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T07:45:22+00:00",
     "last_update_at": "2026-10-04T07:45:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_c1560725396e6260",
       "url": "https://www.ynet.co.il/news/article/b1sdfkjofe",
       "published_at": "2026-10-04T07:45:22+00:00"
      }
     ],
     "places": [
      {
       "name": "באר שבע, ישראל",
       "lat": 31.2457,
       "lon": 34.7925
      },
      {
       "name": "דימונה, ישראל",
       "lat": 31.0687,
       "lon": 35.0366
      }
     ]
    }
   ],
   "not_verified": [
    "פרטי תגובת ארצות הברית המלאה להצעת שבעת הימים של איראן.",
    "היactual יכולות של איראן לפגוע במטרות מרוחקות בטווחים של מעל 1,000 קילומטרים."
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "סגירת מצר הורמוז עד לקיום תנאים מסוימים",
      "הרחבת טווח הטילים הבליסטיים"
     ],
     "inferred": [
      "הפחתת הלחץ הכלכלי באמצעות לחץ על נתיבי השיט",
      "הרתעת כוחות ארה\"ב במרחב"
     ],
     "forecast": [
      "המשך מאבק כלכלי וצבאי מוגבל נגד נוכחות זרה במפרץ",
      "שמירה על סירוב לפתרונות צבאיים מוכתבים"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "מניעת נשק גרעיני מאיראן",
      "הבטחת זרימת נפט חופשית דרך מצר הורמוז"
     ],
     "inferred": [
      "הגברת הלחץ הכלכלי והפיננסי על טהרן",
      "היערכות צבאית מתמשכת כאופציה לתגובה"
     ],
     "forecast": [
      "שמירה על פריסת כוחות מוגברת באזור",
      "המשך הלחץ הכלכלי על איראן לצד פתיחת פתח למוסדות תיווך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/4/iran-says-strait-of-hormuz-to-remain-closed-until-us-meets-conditions?traffic_source=rss",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610047470",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86283103/US-response-to-Iran-s-7-day-proposal-being-reviewed-Deputy-FM",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21548568",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-increase-range-its-missiles-army-spokesperson-tells-fars",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1sdfkjofe",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-03T23:40:33+00:00",
  "changes": {
   "IRAN-10041529-01": {
    "kind": "new"
   },
   "IRAN-10041529-02": {
    "kind": "possible",
    "prev": "העברת מטען נפט גולמי דרך מצר הורמוז על ידי עיראק",
    "score": 0.467
   },
   "IRAN-10041529-03": {
    "kind": "possible",
    "prev": "הצהרת נשיא איראן על היערכות כלכלית מול סנקציות",
    "score": 0.467
   },
   "IRAN-10041529-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-04T1541__ukraine-202610041541.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-04T15:41:12+00:00",
   "window": {
    "from": "2026-10-03T15:41:12+00:00",
    "to": "2026-10-04T15:41:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610041541"
   },
   "summary": "צבא רוסיה מרחיב את מתקפותיו האוויריות על תשתיות תחבורה ותקשורת בקייב, בדגש על פגיעה מתמשכת בגשרים מרכזיים מעל נהר הדנייפר באמצעות כטב\"מים מהירים. במקביל, כוחות אוקראינה מעמיקים את הפגיעה בעומק השטח הרוסי ותוקפים בסיסי חיל אוויר ומתקני אנרגיה. בזירה המדינית נמשכת ההתבססות של קייב על סיוע אירופי מוגבר בעוד נבחנת אפשרות לשיחות טכניות משולשות לקראת החורף.",
   "fronts": [
    {
     "name": "העורף האוקראיני ומרחב קייב",
     "status": "תקיפות אוויריות מוגברות של רוסיה על גשרים, מרכזי נתונים ותשתיות אזרחיות לצד עיבוי מערכות יירוט"
    },
    {
     "name": "החזית המזרחית (דונבאס)",
     "status": "מתקפת נגד אוקראינית תחת השם ויוואלדי שהביאה לשחרור של כ-140 קמ\"ר"
    },
    {
     "name": "עומק רוסיה ומתקנים אסטרטגיים",
     "status": "תקיפות כטב\"מים אוקראיניות נגד מטוסי קרב בבסיסי חיל אוויר ופגיעות בתשתיות בדרום רוסיה ובקרים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10041541-01",
     "title": "תקיפת כטב\"מים אוקראינית על בסיס טיסה באדיגיה",
     "summary": "כטב\"מים של יחידת אלפא בשירות הביטחון של אוקראינה פגעו במטוסי קרב מסוג סוחוי-35 וסוחוי-34 בבסיס חאנסקאיה שברפובליקת אדיגיה ברוסיה, במרחק של כ-500 קילומטרים.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T13:17:00+00:00",
     "last_update_at": "2026-10-04T15:13:46+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למטוסים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_93f7211839d8696e",
       "url": "https://kyivindependent.com/russian-su-35-su-34-fighter-jets-hit-by-drones-at-airfield-in-adygea-sbu-says/",
       "published_at": "2026-10-04T15:13:46+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_93f7211839d8696e",
       "url": "https://www.ukrinform.net/rubric-ato/4170953-ukrainian-drones-hit-two-russian-fighter-jets-at-air-base-in-adygea.html",
       "published_at": "2026-10-04T14:43:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_93f7211839d8696e",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056419/",
       "published_at": "2026-10-04T13:17:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס חאנסקאיה, אדיגיה, רוסיה",
       "lat": 44.6783,
       "lon": 40.0317
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-02",
     "title": "פגיעות כטב\"מים בגשר הצפוני בקייב",
     "summary": "רוסיה תקפה את הגשר הצפוני מעל נהר הדנייפר בקייב באמצעות כטב\"מים, מה שהוביל לפציעת שני בני אדם ולשיבושי תנועה כבדים.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T09:14:04+00:00",
     "last_update_at": "2026-10-04T14:53:11+00:00",
     "what_is_not_verified": "האם מדובר בטיל שיוט או בכטב\"ם סילוני כפי שנטען בחלק מהדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48245",
       "published_at": "2026-10-04T14:53:11+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/04/friedrich-merz-german-chancellor-ukraine-kyiv-russia-strikes-war-zelenskyy-putin-europe-latest-news-updates",
       "published_at": "2026-10-04T14:35:31+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170930-two-people-injured-in-russian-strike-on-northern-bridge-in-kyiv.html",
       "published_at": "2026-10-04T12:24:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckreyjzzzywqo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-04T12:09:04+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/04/russia-strikes-kyiv-bridge-german-chancellor-merz-visits-ukraine",
       "published_at": "2026-10-04T11:53:09+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131320",
       "published_at": "2026-10-04T11:49:15+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21548548",
       "published_at": "2026-10-04T11:29:21+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/byasbjyszg",
       "published_at": "2026-10-04T10:30:41+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-targets-kyiv-bridges-for-fourth-consecutive-day-hits-northern-bridge/",
       "published_at": "2026-10-04T09:14:04+00:00"
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
     "id": "UKRAINE-10041541-03",
     "title": "התרסקות כלי טיס בלתי מאויש במחוז אובולון בקייב",
     "summary": "כלי טיס בלתי מאויש רוסי הנושא חימוש שלא התפוצץ התרסק ברובע אובולון שבקייב, וצוותי חירום הוזעקו לזירה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T15:08:00+00:00",
     "last_update_at": "2026-10-04T15:08:00+00:00",
     "what_is_not_verified": "נסיבות ההתרסקות והיקף הנזק סביב הנפילה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056436/",
       "published_at": "2026-10-04T15:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "רובע אובולונסקי, קייב, אוקראינה",
       "lat": 50.5306,
       "lon": 30.4384
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-04",
     "title": "ביקור קנצלר גרמניה בקייב והכרזה על חבילת סיוע",
     "summary": "קנצלר גרמניה פרידריך מרץ הגיע לביקור רשמי בקייב והודיע יחד עם זלנסקי על חבילת סיוע ביטחוני בשווי 1.46 מיליארד דולר ועל הסכם לשיתוף פעולה ביירוט כטב\"מים.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T06:58:11+00:00",
     "last_update_at": "2026-10-04T15:00:00+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק להגעת כטב\"מי היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170960-germany-working-to-accelerate-ukraines-accession-to-eu-merz.html",
       "published_at": "2026-10-04T15:00:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/04/friedrich-merz-german-chancellor-ukraine-kyiv-russia-strikes-war-zelenskyy-putin-europe-latest-news-updates",
       "published_at": "2026-10-04T14:35:31+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170952-zelensky-merz-meet-rescuers-who-cleared-aftermath-of-russian-strike-on-science-academy-in-kyiv.html",
       "published_at": "2026-10-04T14:22:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170948-ukraine-germany-sign-agreement-on-cooperation-in-countering-uavs.html",
       "published_at": "2026-10-04T14:02:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/germany-announces-1-46-billion-in-aid-for-ukraine-including-interceptor-drones/",
       "published_at": "2026-10-04T13:18:47+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/german-chancellor-merz-arrives-in-kyiv-pledges-further-support-for-ukraine/",
       "published_at": "2026-10-04T06:58:11+00:00"
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
     "id": "UKRAINE-10041541-05",
     "title": "שריפות בתחנות כוח סולאריות בחצי האי קרים",
     "summary": "שריפה פרצה בתחנת כוח סולארית בניקולייבקה שבמחוז סימפרופול בחצי האי קרים הכבוש, לפי פרסומים ברשתות החברתיות.",
     "axis": "קרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T15:26:00+00:00",
     "last_update_at": "2026-10-04T15:26:00+00:00",
     "what_is_not_verified": "סיבת פרוץ השריפות ומידת הפגיעה בתחנה השנייה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170977-fires-break-out-at-two-solar-power-plants-in-occupied-crimea-social-media.html",
       "published_at": "2026-10-04T15:26:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז סימפרופול, קרים",
       "lat": 44.9402,
       "lon": 34.1198
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-06",
     "title": "אספקת סיוע הומניטרי באמצעות רחפנים לעיר אולשקי",
     "summary": "הצבא האוקראיני ביצע מבצע שני להטסת סיוע הומניטרי באמצעות רחפנים לתושבי העיר הכבושה אולשקי הסובלים ממחסור במזון, מים ותרופות.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T14:41:31+00:00",
     "last_update_at": "2026-10-04T14:41:31+00:00",
     "what_is_not_verified": "כמות הציוד שהועברה בפועל במבצע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/news-from-occupied-ukraine-military-delivers-aid-by-drone-to-occupied-oleshky-in-second-operation/",
       "published_at": "2026-10-04T14:41:31+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-07",
     "title": "הסכמת אוקראינה למפגש טכני משולש באיחוד האמירויות",
     "summary": "הנשיא זלנסקי הודיע כי אוקראינה הביעה נכונות להשתתף במפגש טכני משולש עם ארצות הברית ורוסיה שתוכנן להתקיים באיחוד האמירויות עד סוף חודש אוקטובר.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T13:39:00+00:00",
     "last_update_at": "2026-10-04T13:45:00+00:00",
     "what_is_not_verified": "האם רוסיה הסכימה לקחת חלק במפגש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170947-ukraine-agrees-to-trilateral-technical-meeting-in-uae-ball-is-now-in-russias-court-zelensky.html",
       "published_at": "2026-10-04T13:45:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056421/",
       "published_at": "2026-10-04T13:39:00+00:00"
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
     "id": "UKRAINE-10041541-08",
     "title": "הצבת עמדות יירוט כטב\"מים באזור קייב",
     "summary": "נשיא אוקראינה מסר כי מעל שתים-עשרה עמדות יירוט מיוחדות להתמודדות עם כטב\"מי סילון הוצבו בקייב, ושמונה נוספות יוצבו ברחבי המחוז.",
     "axis": "קייב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T13:28:00+00:00",
     "last_update_at": "2026-10-04T13:28:00+00:00",
     "what_is_not_verified": "מועד הפריסה המלא של העמדות הנוספות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170944-zelensky-more-than-12-turrets-to-counter-jetpowered-drones-installed-in-kyiv.html",
       "published_at": "2026-10-04T13:28:00+00:00"
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
     "id": "UKRAINE-10041541-09",
     "title": "איום רוסי בפגיעה בלווייני סטארלינק",
     "summary": "דמיטרי מדבדב איים כי ניסיון לפגוע במערך הלוויינים הרוסי רסבט יוביל לתגובה נגד לווייני סטארלינק וללוחמת חלל כוללת.",
     "axis": "רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T12:42:00+00:00",
     "last_update_at": "2026-10-04T12:42:00+00:00",
     "what_is_not_verified": "היכולת המעשית והאמצעים שבהם רוסיה מתכוונת לפגוע בלוויינים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_772f8be306c420f1",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056413/",
       "published_at": "2026-10-04T12:42:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "סוג החימוש שפגע בגשר הצפוני בקייב – טיל שיוט מדגם S8000 או כטב\"ם סילוני",
    "טענת אוקראינה לפיה בידיה מסמכי מודיעין על דוקטרינה רוסית לתקיפת אזרחים בלבד כדי לרוקן ערים",
    "תוכניות פינוי של שגרירויות מערביות מקייב בעקבות התקיפות",
    "סיבת השריפות בתחנות הכוח הסולאריות בחצי האי קרים"
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
     "value": 1.1225,
     "unit": "USD",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "להגביר תקיפות נגד בתי זיקוק רוסיים כדי לפגוע במימון המלחמה",
      "לקדם הצטרפות מואצת לאיחוד האירופי ולהשיג הסכמי יירוט כטב\"מים עם גרמניה",
      "להשתתף במפגש טכני משולש באיחוד האמירויות לבחינת הפסקת תקיפות הדדית על אנרגיה"
     ],
     "inferred": [
      "החלשת יכולות חיל האוויר הרוסי באמצעות פגיעה במטוסים מתקדמים בעומק הבסיסים",
      "הגנה דחופה על נתיבי התחבורה והתקשורת בבירה קייב לקראת עונת החורף"
     ],
     "forecast": [
      "המשך מיקוד התקיפות בנכסי נפט ותעופה בעומק רוסיה לצד פריסת עמדות הגנה אווירית נוספות סביב קייב"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "תקיפת מתקני תעשייה ביטחונית ותשתיות נלוות בתגובה לפעולות אוקראינה",
      "איום בהשמדת לווייני סטארלינק אם יוטלו סנקציות או ייחסם מערך רסבט"
     ],
     "inferred": [
      "שיבוש התנועה והתקשורת בקייב כדי להפעיל לחץ פסיכולוגי ואזרחי על הנהגת המדינה",
      "שליטה מלאה במחוז דונבאס כתנאי מוקדם לכל משא ומתן עתידי"
     ],
     "forecast": [
      "המשך שימוש נרחב בכטב\"מי סילון לפגיעה בגשרים, מתקני אנרגיה ומרכזי נתונים באוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckreyjzzzywqo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/04/friedrich-merz-german-chancellor-ukraine-kyiv-russia-strikes-war-zelenskyy-putin-europe-latest-news-updates",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21548548",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/news-from-occupied-ukraine-military-delivers-aid-by-drone-to-occupied-oleshky-in-second-operation/",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056413/",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131320",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48245",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4170944-zelensky-more-than-12-turrets-to-counter-jetpowered-drones-installed-in-kyiv.html",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/byasbjyszg",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-04T02:51:47+00:00",
  "changes": {
   "UKRAINE-10041541-01": {
    "kind": "new"
   },
   "UKRAINE-10041541-02": {
    "kind": "new"
   },
   "UKRAINE-10041541-03": {
    "kind": "new"
   },
   "UKRAINE-10041541-04": {
    "kind": "new"
   },
   "UKRAINE-10041541-05": {
    "kind": "new"
   },
   "UKRAINE-10041541-06": {
    "kind": "new"
   },
   "UKRAINE-10041541-07": {
    "kind": "new"
   },
   "UKRAINE-10041541-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות כטב\"מים רוסיים על גשרי נהר הדניפרו בקייב",
    "score": 0.817
   },
   "UKRAINE-10041541-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-05T0628__north-202610050628.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-05T06:28:06+00:00",
   "window": {
    "from": "2026-10-04T06:28:06+00:00",
    "to": "2026-10-05T06:28:06+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610050628"
   },
   "summary": "הזירה הצפונית מתאפיינת בלחימה מתמשכת בדרום לבנון הכוללת תקיפות צה\"ל והפגזות לצד פעילות שוטפת של צבא ההגנה לישראל במרחב האבטחה בדרום סוריה. במקביל, ממשלת לבנון מנסה לקדם מחדש את נוכחות המדינה בדרום ובמקביל מנהלת דיפלומטיה אזורית, בעוד חיזבאללה ממשיך לשמור על נוכחות אזרחית וצבאיות. בצד הסורי נמשכות מחאות פנימיות וביקורת על פעילות הבנייה והחישוף של ישראל באזור קוניטרה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם תקיפות אוויריות, ארטילריה ותאונות מבצעיות"
    },
    {
     "name": "החזית הסורית",
     "status": "פעילה עם מבצעים נקודתיים ופעילות במרחב האבטחה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10050628-01",
     "title": "תקיפות והפגזות ארטילריות בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות אוויריות והפגזות ארטילריות במספר מרחבים בדרום לבנון.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T14:46:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T14:46:07+00:00",
     "last_update_at": "2026-10-05T05:43:06+00:00",
     "what_is_not_verified": "מיקום מדויק של פגיעת חלק מן הפגזים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_307f16f631bcab00",
       "url": "https://english.almanar.com.lb/article/134412/",
       "published_at": "2026-10-05T05:43:06+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_9861edbb906c2983",
       "url": "https://english.almanar.com.lb/article/134362/",
       "published_at": "2026-10-04T21:38:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_307f16f631bcab00",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-strikes-and-detonations-hit-several-towns-southern-lebanon",
       "published_at": "2026-10-04T19:13:41+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_ce6132a07e5a6c14",
       "url": "https://english.almanar.com.lb/article/134227/",
       "published_at": "2026-10-04T14:46:07+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      },
      {
       "name": "מג'דל זון, לבנון",
       "lat": 33.1503,
       "lon": 35.226
      },
      {
       "name": "מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10050628-02",
     "title": "חיסול חשוד בדרום סוריה",
     "summary": "כוחות צה\"ל ירו וחיסלו חשוד שניסה לחדור למוצב במרחב האבטחה בדרום סוריה.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T19:41:26+00:00",
     "last_update_at": "2026-10-04T23:43:43+00:00",
     "what_is_not_verified": "זהותו המדויקת של ההרוג והמניע המדויק לפי מקורות שאינם רשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-troops-kill-man-southern-syria",
       "published_at": "2026-10-04T23:43:43+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-kills-man-in-southern-syria/4077933",
       "published_at": "2026-10-04T22:53:22+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://www.israelhayom.co.il/news/defense/article/21553297",
       "published_at": "2026-10-04T21:46:53+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_1f1217573992128f",
       "url": "https://www.walla.co.il/news/military/383956275",
       "published_at": "2026-10-04T21:36:12+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://t.me/idf_telegram/25278",
       "published_at": "2026-10-04T21:26:38+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://t.me/lelotsenzura/94486",
       "published_at": "2026-10-04T21:26:27+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://www.maariv.co.il/breaking-news/article-1373652",
       "published_at": "2026-10-04T21:26:18+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://www.ynet.co.il/news/article/rywrrvlsfe",
       "published_at": "2026-10-04T21:18:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5a420dfbae79c8b1",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-shells-syrias-quneitra-while-qatar-and-jordan-condemn-its",
       "published_at": "2026-10-04T19:41:26+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חמידייה, סוריה",
       "lat": 35.6562,
       "lon": 36.3884
      }
     ]
    },
    {
     "id": "NORTH-10050628-03",
     "title": "פציעת חיילי צה\"ל בתאונה מבצעית בדרום לבנון",
     "summary": "לוחם צה\"ל נפצע קשה וקצין נפצע בינוני כתוצאה מתאונה מבצעית במהלך פעילות בדרום לבנון.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T05:17:14+00:00",
     "last_update_at": "2026-10-04T06:28:06+00:00",
     "what_is_not_verified": "הנסיבות הטכניות המדויקות של התאונה המבצעית.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131297",
       "published_at": "2026-10-04T05:17:14+00:00"
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
     "id": "NORTH-10050628-04",
     "title": "כנס צופים של חיזבאללה בדאחיה",
     "summary": "התקיים כינוס צופים המזוהה עם חיזבאללה לציון שנה שנייה למותם של חסן נאסראללה והאשם ספי א-דין.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T15:50:41+00:00",
     "last_update_at": "2026-10-04T21:22:15+00:00",
     "what_is_not_verified": "מספר המשתתפים המדויק אינו מאומת ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_554776f72ffe3926",
       "url": "https://english.almanar.com.lb/article/134237/",
       "published_at": "2026-10-04T21:22:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_104d184e789368de",
       "url": "https://english.almanar.com.lb/article/134252/",
       "published_at": "2026-10-04T19:23:03+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_554776f72ffe3926",
       "url": "https://t.me/abualiexpress/131332",
       "published_at": "2026-10-04T15:50:41+00:00"
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
    "טענות על היערכות לפלישה רחבת היקף של כוחות מסוריה ללבנון",
    "כניסת טייסים ואנשי צוות אוויר זרים מיעדים אסורים לישראל",
    "מספר המשתתפים המדויק בכנס הצופים של חיזבאללה"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת כל איום על אזרחי מדינת ישראל וכוחות צה\"ל במרחב האבטחה בסוריה"
     ],
     "inferred": [
      "מניעת התבססות עוינת בגבול הצפון ובסוריה",
      "שמירה על חופש פעולה מבצעי בלבנון ובסוריה"
     ],
     "forecast": [
      "המשך התקיפות הנקודתיות והפעילות ההגנתית לאורך הגבולות"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "דרישה לנסיגה מלאה של ישראל והפסקת התקיפות",
      "חיזוק סמכות המדינה בדרום ושיקום האזור"
     ],
     "inferred": [
      "ניסיון לאזן בין דרישות הריבונות הממשלתית לבין הנוכחות והלחץ של חיזבאללה"
     ],
     "forecast": [
      "המשך המאמצים המדיניים להשגת הפסקת אש יציבה יותר"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך ההגנה על האדמה והתנגדות לפעילות ישראל בדרום לבנון"
     ],
     "inferred": [
      "שימור הלגיטימציה הציבורית באמצעות אירועים המוניים ופעילות אזרחית"
     ],
     "forecast": [
      "שימור יכולות צבאיות מוגבלות לצד הפגנת נוכחות אזרחית ערה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/134252/",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-kills-man-in-southern-syria/4077933",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21553297",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1373652",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-shells-syrias-quneitra-while-qatar-and-jordan-condemn-its",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131332",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25278",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94486",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956275",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rywrrvlsfe",
     "accessed_at": "2026-10-05T06:28:06+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-04T15:53:47+00:00",
  "changes": {
   "NORTH-10050628-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפות והרס בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10050628-02": {
    "kind": "new"
   },
   "NORTH-10050628-03": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "תאונות מבצעיות ופציעת חיילים בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10050628-04": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "כנס צופי חזבאללה בדאחיה",
    "score": 1.0
   }
  }
 }
};
