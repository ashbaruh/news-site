/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-06T1808__yemen-202611061808.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-06T18:08:59+00:00",
   "window": {
    "from": "2026-11-05T18:08:59+00:00",
    "to": "2026-11-06T18:08:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611061808"
   },
   "summary": "הלחימה בתימן נמשכת בין החות'ים לבין הממשלה המוכרת הנתמכת בידי קואליציה בהובלת סעודיה, לצד חיכוך צבאי ישיר הכולל שיגור טילים לעבר שטח סעודיה ותקיפות הדדיות במחוז תעז. במקביל, סעודיה מרחיבה את שיתופי הפעולה הצבאיים שלה למול האיום, בין היתר באמצעות קבלת ייעוץ צבאי מסוריה ואישור הסכמי הגנה אזוריים.",
   "fronts": [
    {
     "name": "זירת תימן הפנימית",
     "status": "פעיל עם עימותים קרקעיים ותקיפות באזור תעז"
    },
    {
     "name": "ציר תימן-סעודיה",
     "status": "פעיל עם שיגורי טילים לעבר סעודיה והתארגנות הגנתית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11061808-01",
     "title": "תקיפה בשוק בתעז והאשמות הדדיות",
     "summary": "חילופי האשמות בין החות'ים לממשלת תימן בנוגע לתקיפה בשוק במחוז תעז שגרמה לנפגעים רבים, כאשר החות'ים מאשימים את סעודיה והממשלה מאשימה את החות'ים בירי טילים.",
     "axis": "זירת תימן הפנימית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T11:25:47+00:00",
     "last_update_at": "2026-11-06T17:28:39+00:00",
     "what_is_not_verified": "זהות אלגאנב האחראי לפגיעה בשוק וסוג החימוש המדויק אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-and-yemeni-government-blame-each-other-taiz-market-attack-killed",
       "published_at": "2026-11-06T17:28:39+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133190",
       "published_at": "2026-11-06T13:35:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/more-30-killed-or-wounded-air-strikes-yemen-market-houthis-say",
       "published_at": "2026-11-06T11:25:47+00:00"
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
     "id": "YEMEN-11061808-02",
     "title": "השתלטות כוחות ממשלת תימן על אזורים בתעז",
     "summary": "כוחות הממשלה המוכרת בתימן דיווחו כי כבשו מחדש כפרים ומחוזות שונים בתעז.",
     "axis": "זירת תימן הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T13:04:14+00:00",
     "last_update_at": "2026-11-06T17:28:39+00:00",
     "what_is_not_verified": "היקף ההישגים בשטח ונתוני הנפגעים של הצד השני אינם מאומתים ממקור בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-and-yemeni-government-blame-each-other-taiz-market-attack-killed",
       "published_at": "2026-11-06T17:28:39+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-forces-recapture-villages-and-districts-taiz-government-says",
       "published_at": "2026-11-06T13:04:14+00:00"
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
     "id": "YEMEN-11061808-03",
     "title": "יירוט טילים בליסטיים מעל סעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדה של שני טילים בליסטיים ששוגרו על ידי המיליציות החות'יות לעבר סעודיה.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T07:47:30+00:00",
     "last_update_at": "2026-11-06T07:47:30+00:00",
     "what_is_not_verified": "אין פירוט על מיקום נפילת הרסיסים או נזק אפשרי מעבר להודעת היירוט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_56409fc2cfbdbd97",
       "url": "https://www.sabanew.net/viewstory/155305",
       "published_at": "2026-11-06T07:47:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11061808-04",
     "title": "משלוח יועצים צבאיים מסוריה לסעודיה",
     "summary": "גורמים צבאיים ואמריקאיים דיווחו כי סוריה שלחה עשרות אנשי צוות ומומחים צבאיים לסעודיה לצורך ייעוץ והכשרה על רקע ההתקפות החות'יות.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T16:46:34+00:00",
     "last_update_at": "2026-11-06T17:52:01+00:00",
     "what_is_not_verified": "ההיקף המדויק ותנאי ההסכם המלאים בין המדינות לא פורסמו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133199",
       "published_at": "2026-11-06T17:52:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-sends-military-advisers-saudi-arabia-amid-houthi-attacks-sources",
       "published_at": "2026-11-06T16:55:48+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-aids-saudi-arabia-military-advice-and-training-amid-houthi-attacks-sources",
       "published_at": "2026-11-06T16:46:34+00:00"
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
    "דרישות החות'ים לפיצויים של 51 מיליארד דולר והכרת סעודיה בלגיטימיות שלהם מוכחשות בידי גורמים המקורבים לחות'ים.",
    "היקף הפריסה המדויק של היועצים הסורים בסעודיה."
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
     "value": 3.199,
     "unit": "ILS",
     "change_pct": 0.86,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "עצירת תקיפות הקואליציה",
      "הטלת מצור והפעלת לחץ באזור תעז"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וכלכלי על ממשלת תימן וסעודיה",
      "ביסוס שליטה במרחבים קריטיים סמוך למצר באב אל-מנדב"
     ],
     "forecast": [
      "המשך שיגורים לעבר יעדים בסעודיה ובפנים תימן",
      "החמרת המצב ההומניטרי באזורים נצורים"
     ]
    },
    {
     "actor": "ממשלת תימן וסעודיה",
     "declared": [
      "מיגור האיום החות'י",
      "השבת השלטון והדחת ההפיכה"
     ],
     "inferred": [
      "בניית מעטפת הגנה אזורית וגיוס תמיכה מבעלות ברית נגד החות'ים",
      "ניסיון לבלום את התקדמות החות'ים באזורים חיוניים"
     ],
     "forecast": [
      "הגברת הפעילות ההתקפלית המקומית בתעז ובמחוזות נוספים",
      "חיזוק שיתופי הפעולה הביטחוניים עם שותפות אזוריות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-aids-saudi-arabia-military-advice-and-training-amid-houthi-attacks-sources",
     "accessed_at": "2026-11-06T18:08:59+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-sends-military-advisers-saudi-arabia-amid-houthi-attacks-sources",
     "accessed_at": "2026-11-06T18:08:59+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155305",
     "accessed_at": "2026-11-06T18:08:59+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133199",
     "accessed_at": "2026-11-06T18:08:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T00:52:16+00:00",
  "changes": {
   "YEMEN-11061808-01": {
    "kind": "possible",
    "prev": "עצרת מחאה בניו יורק נגד המצור על תעז ותקיפות החות'ים",
    "score": 0.633
   },
   "YEMEN-11061808-02": {
    "kind": "possible",
    "prev": "הסלמה ולחימה במחוזות מאריב, תעז, לחג' ואבין",
    "score": 0.633
   },
   "YEMEN-11061808-03": {
    "kind": "possible",
    "prev": "יירוט טיל בליסטי לעבר העיר מדינה בסעודיה",
    "score": 0.467
   },
   "YEMEN-11061808-04": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "חתימת הסכם שיתוף פעולה ביטחוני בין סעודיה לסוריה",
    "score": 0.817
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-06T1739__iran-202611061739.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-06T17:39:56+00:00",
   "window": {
    "from": "2026-11-05T17:39:56+00:00",
    "to": "2026-11-06T17:39:56+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611061739"
   },
   "summary": "הזירה מתאפיינת במתיחות צבאית גבוהה לצד מאמצים דיפלומטיים קדחתניים לקראת אפשרות של חידוש הלחימה והתקיפות מצד ארה\"ב וישראל. איראן מחזקת את היערכותה הפנימית והגנתית, מבצעת פניות לרוסיה ומפעילה לחץ אזורי, בעוד שבארה\"ב ובאירופה גוברים הדיונים על עתיד המערכה והאפשרות להסכם פוטנציאלי.",
   "fronts": [
    {
     "name": "הזירה הישראלית-אמריקאית מול איראן ושלוחותיה",
     "status": "פעיל ומתוח"
    },
    {
     "name": "הזירה הדיפלומטית-אזורית סביב מתקני הגרעין והסנקציות",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-11061739-01",
     "title": "חלוקת טבליות יוד באיראן סביב מתקני גרעין",
     "summary": "רשויות הבריאות באיראן החלו לחלק טבליות יוד לתושבים הגרים בסמוך למתקני גרעין כהיערכות לשעת מלחמה.",
     "axis": "איראן מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T15:54:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T15:54:06+00:00",
     "last_update_at": "2026-11-06T17:36:52+00:00",
     "what_is_not_verified": "היקף החלוקה המדויק ומידת האיום המיייש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133198",
       "published_at": "2026-11-06T17:36:52+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21795203",
       "published_at": "2026-11-06T15:54:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11061739-02",
     "title": "פגישת מזכיר המועצה העליונה לביטחון לאומי של איראן עם נשיא רוסיה",
     "summary": "מוחסן רזאי נפגש במוסקבה עם נשיא רוסיה והעביר לו איגרת ומכתב ממנהיג איראן הדורש בין היתר מערכות הגנה אווירית.",
     "axis": "איראן מול רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T19:53:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T19:53:57+00:00",
     "last_update_at": "2026-11-06T17:15:56+00:00",
     "what_is_not_verified": "תוכן התשובה הרוסית לבקשה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_the_telegraph",
       "url": "https://www.iranintl.com/en/202611067881",
       "published_at": "2026-11-06T17:15:56+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_the_telegraph",
       "url": "https://www.ynet.co.il/news/article/syl0011uiaml",
       "published_at": "2026-11-06T16:08:08+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_the_telegraph",
       "url": "https://t.me/abualiexpress/133196",
       "published_at": "2026-11-06T16:05:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_the_telegraph",
       "url": "https://t.me/alexmehacarmel/49339",
       "published_at": "2026-11-06T16:01:26+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_the_telegraph",
       "url": "https://t.me/alexmehacarmel/49323",
       "published_at": "2026-11-05T19:53:57+00:00"
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
     "id": "IRAN-11061739-03",
     "title": "יירוט רחפן אמריקאי מעל האי קשם",
     "summary": "משמרות המהפכה טענו שיירטו רחפן אמריקאי מעל האי קשם.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T14:34:57+00:00",
     "last_update_at": "2026-11-06T14:34:57+00:00",
     "what_is_not_verified": "אמינות הדיווח על היירוט עצמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1385664",
       "published_at": "2026-11-06T14:34:57+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      }
     ]
    },
    {
     "id": "IRAN-11061739-04",
     "title": "ספינות הקשורות לאיראן מתעכבות מעל כבלי תקשורת במפרץ",
     "summary": "ספינות ומכליות הקשורות לאיראן תועדו שייטות במסלולים חריגים מעל כבלי תקשורת תת-ימיים במפרץ עומאן.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T07:36:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T07:36:30+00:00",
     "last_update_at": "2026-11-06T13:08:14+00:00",
     "what_is_not_verified": "האם מתבצעת הנחת מוקשים בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_financial_times",
       "url": "https://www.iranintl.com/en/202611067103",
       "published_at": "2026-11-06T13:08:14+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_financial_times",
       "url": "https://www.ynet.co.il/news/article/skhjaxitgx",
       "published_at": "2026-11-06T07:36:30+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ עומאן",
       "lat": 24.2138,
       "lon": 58.9846
      }
     ]
    }
   ],
   "not_verified": [
    "דרישת איראן לקיים העברת שליטה במצר הורמוז לידיה במסגרת תנאי שלום",
    "קיומה בפועל של מערכת קרקעית ניידת רוסית בשם איזדלייה 347 בשירות איראן",
    "ההיתכנות המדויקת של פריצת דרך מדינית בין ארה\"ב לאיראן"
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
     "value": 3.199,
     "unit": "ILS",
     "change_pct": 0.86,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "דחיית התוקפנות של ארה\"ב וישראל",
      "הפסקת הלחימה בכל החזיתות כתנאי להסכם שלום"
     ],
     "inferred": [
      "שיקום מערך ההגנה האווירית והגרעין",
      "יצירת מנופי לחץ במפרץ ודרכי תקשורת דיפלומטיות עם מעצמות"
     ],
     "forecast": [
      "המשך היערכות פנימית לעימות אפשרי",
      "חיזוק קשרים צבאיים עם רוסיה"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "בחינת אפשרויות לפעולה צבאית נוספת מול איראן",
      "מניעת התקדמות גרעינית איראנית"
     ],
     "inferred": [
      "בדיקת נכונות מצד טהרן להסכם בתנאים נוחים",
      "ניהול לחץ כלכלי וצבאי למניעת התבססות איראנית"
     ],
     "forecast": [
      "הכרעה קרובה לגבי חידוש תקיפות או מיצוי ערוצי משא ומתן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611067103",
     "accessed_at": "2026-11-06T17:39:56+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21795203",
     "accessed_at": "2026-11-06T17:39:56+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1385664",
     "accessed_at": "2026-11-06T17:39:56+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133196",
     "accessed_at": "2026-11-06T17:39:56+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49323",
     "accessed_at": "2026-11-06T17:39:56+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skhjaxitgx",
     "accessed_at": "2026-11-06T17:39:56+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T00:40:37+00:00",
  "changes": {
   "IRAN-11061739-01": {
    "kind": "new"
   },
   "IRAN-11061739-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגישת מזכיר המועצה העליונה לביטחון לאומי של איראן עם נשיא רוסיה",
    "score": 1.0
   },
   "IRAN-11061739-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "יירוט כטב\"מי סיור מעל אי קשם",
    "score": 1.0
   },
   "IRAN-11061739-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-06T1806__ukraine-202611061806.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-06T18:06:13+00:00",
   "window": {
    "from": "2026-11-05T18:06:13+00:00",
    "to": "2026-11-06T18:06:13+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611061806"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת בשילוב תקיפות אוויריות נרחבות על תשתיות האנרגיה באוקראינה ולחימה קרקעית, לצד מאמצים דיפלומטיים גוברים וגישושים לקראת מגעים אפשריים בהשתתפות מעורבות בינלאומית. צדדים שלישיים, בהם ארצות הברית, מדווחים על יוזמות להסכמים רחבים, בעוד אוקראינה מתמודדת עם נזקים כבדים לכלכלה ולתשתיות.",
   "fronts": [
    {
     "name": "חזית זפוריז'יה",
     "status": "פעילה עם קרבות מקומיים וטענות הדדיות על שליטה ביישובים"
    },
    {
     "name": "העורף האוקראיני ותשתיות האנרגיה",
     "status": "תחת התקפות כטב\"מים וטילים בלתי פוסקות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11061806-01",
     "title": "השתתפות בודאנוב במשלחת באבו דאבי",
     "summary": "היועץ הנשיאותי הבהיר שקירילו בודאנוב יצטרף למשלחת האוקראינית באבו דאבי אך לא יעמוד בראשותה, בניגוד לדיווחים קודמים.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T17:59:00+00:00",
     "last_update_at": "2026-11-06T17:59:00+00:00",
     "what_is_not_verified": "האם חלים שינויים נוספים בהרכב המשלחת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_1187cc8bcd6bbaee",
       "url": "https://www.ukrinform.net/rubric-polytics/4182234-budanov-to-join-ukrainian-delegation-in-abu-dhabi-but-not-lead-it-presidential-adviser.html",
       "published_at": "2026-11-06T17:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות הערביות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11061806-02",
     "title": "פעילות רחפנים קרקעיים באוקראינה",
     "summary": "כוחות ההגנה האוקראיניים ביצעו למעלה מ-30 אלף משימות באמצעות רחפנים קרקעיים במהלך חודש אוקטובר לצורכי לוגיסטיקה ופינוי.",
     "axis": "חזית יבשתית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T15:56:00+00:00",
     "last_update_at": "2026-11-06T17:32:42+00:00",
     "what_is_not_verified": "הנתונים אינם מאומתים ממקור בלתי תלוי מעבר להודעת משרד ההגנה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_0f68b712e4de2ba6",
       "url": "https://kyivindependent.com/ukraines-ground-drones-complete-over-30-000-missions-in-record-month-for-robot-warfare/",
       "published_at": "2026-11-06T17:32:42+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_0f68b712e4de2ba6",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/06/8061610/",
       "published_at": "2026-11-06T15:56:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11061806-03",
     "title": "המצב במאלה טוקמאצ'קה",
     "summary": "הצבא האוקראיני מדווח כי היישוב מאלה טוקמאצ'קה נותר בשליטת כוחות ההגנה האוקראיניים, למרות טענות רוסיות על כיבושו.",
     "axis": "חזית זפוריז'יה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T17:30:00+00:00",
     "last_update_at": "2026-11-06T17:30:00+00:00",
     "what_is_not_verified": "שליטה בפועל בשטח המחלוקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_19874a2ef7cd96b8",
       "url": "https://www.ukrinform.net/rubric-ato/4182196-mala-tokmachka-remains-under-ukrainian-control-military.html",
       "published_at": "2026-11-06T17:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מאלה טוקמאצ'קה, אוקראינה",
       "lat": 47.5327,
       "lon": 35.8968
      }
     ]
    },
    {
     "id": "UKRAINE-11061806-04",
     "title": "תקיפת כטב\"ם במחוז קייב",
     "summary": "אדם בן 22 נפצע כתוצאה מתקיפת כטב\"ם רוסי שפעה על מתחם מחסנים ובית במחוז קייב.",
     "axis": "תקיפות אוויריות ועורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T17:10:00+00:00",
     "last_update_at": "2026-11-06T17:10:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למבנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_53f9777a5e916356",
       "url": "https://www.ukrinform.net/rubric-ato/4182192-russian-drone-attack-damages-warehouse-complex-house-in-kyiv-region-injures-man.html",
       "published_at": "2026-11-06T17:10:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז קייב, אוקראינה",
       "lat": 50.4731,
       "lon": 30.4674
      }
     ]
    },
    {
     "id": "UKRAINE-11061806-05",
     "title": "הכרזת רכוש כמנוּטש בשטחים הכבושים",
     "summary": "הרשויות הרוסיות הכריזו על אלפי נכסים פרטיים ומסחריים בשטחי זפוריז'יה הכבושים כמנוטשים, בהם מאות בתי מלון, תוך דרישת אזרחות רוסית לאישור הבעלות.",
     "axis": "השטחים הכבושים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T16:50:03+00:00",
     "last_update_at": "2026-11-06T16:50:03+00:00",
     "what_is_not_verified": "היקף מלא של הנכסים שהועברו בפועל לידי המדינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/06/russia-has-declared-hundreds-of-hotels-in-occupied-ukraine-ownerless-dozens-have-been-taken-over-but-one-ukrainian-hotelier-is-fighting-back",
       "published_at": "2026-11-06T16:50:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11061806-06",
     "title": "פגישה ומשא ומתן צפוי באבו דאבי",
     "summary": "ראש לשכת הנשיא באוקראינה ציין כי השיחות המתוכננות באבו דאבי אינן סופיות אלא נועדו לבחון נכונות לסיום המלחמה.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T16:41:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T16:41:00+00:00",
     "last_update_at": "2026-11-06T16:56:00+00:00",
     "what_is_not_verified": "תוצאות השיחות העתידיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_962f332a67ed7ddb",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/06/8061618/",
       "published_at": "2026-11-06T16:56:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_962f332a67ed7ddb",
       "url": "https://www.ukrinform.net/rubric-polytics/4182215-budanov-to-lead-ukrainian-delegation-at-talks-in-abu-dhabi.html",
       "published_at": "2026-11-06T16:41:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות הערביות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11061806-07",
     "title": "נזקים לתשתיות האנרגיה באוקראינה",
     "summary": "נשיא אוקראינה הודיע שמתקפות רוסיות פגעו בכל תחנות הכוח באוקראינה, וקרא לסיוע בינלאומי מהיר בציוד חשמל.",
     "axis": "תקיפות אוויריות ועורף",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T02:11:25+00:00",
     "last_update_at": "2026-11-06T10:04:19+00:00",
     "what_is_not_verified": "היקף ההרס המדויק בכל אתר ואתר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_f11699b111ff03bb",
       "url": "https://meduza.io/en/news/2026/11/06/zelensky-says-russian-strikes-have-damaged-every-power-plant-in-ukraine",
       "published_at": "2026-11-06T10:04:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_f11699b111ff03bb",
       "url": "https://www.theguardian.com/world/2026/nov/06/ukraine-war-briefing-zelenskyy-says-russia-has-damaged-every-power-plant-as-he-seeks-latin-american-help",
       "published_at": "2026-11-06T02:11:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11061806-08",
     "title": "מפגש בבית הלבן סביב הפסקת אש מקומית באולשקי",
     "summary": "נציגים רוסים ואוקראינים השתתפו באירוע בבית הלבן שבו הודו למלניה טראמפ על תיווך הפסקת אש בעיר אולשקי.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T18:35:22+00:00",
     "last_update_at": "2026-11-06T07:56:19+00:00",
     "what_is_not_verified": "טיב המעורבות המדויקת של הגורמים בהפסקת האש המקומית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c9p8g085mz07o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-06T07:56:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/05/russian-and-ukrainian-officials-thank-melania-trump-for-brokering-ceasefire-video",
       "published_at": "2026-11-05T21:04:53+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/nov/05/melania-trump-white-house-visit-ukraine-russia",
       "published_at": "2026-11-05T20:52:27+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/video/2026/nov/05/putin-envoy-thanks-melania-trump-for-brokering-ceasefire-video",
       "published_at": "2026-11-05T18:35:22+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    }
   ],
   "not_verified": [
    "{'string': 'פרטי הדרישות המדויקות של פוטין במסגרת עסקאות עתידיות לפי גורמים לא רשמיים'}",
    "{'string': 'ההיתכנות והתוצאות של פגישות המשא ומתן המתוכננות באבו דאבי'}"
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
     "value": 1.1165,
     "unit": "USD",
     "change_pct": -0.53,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "דרישה לוויתורים טריטוריאליים בחלקים הלא-כבושים של חבל דונבאס כתנאי להפסקת אש"
     ],
     "inferred": [
      "שחיקת התשתיות האזרחיות והאנרגטיות של אוקראינה כדי לכפות עליה כניעה או פשרות קשות",
      "השתלטות משפטית וכלכלית על נכסים בשטחים הכבושים"
     ],
     "forecast": [
      "המשך מתקפות חורף מאסיביות על מערכות האנרגיה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "שמירה על השליטה בשטחים הקיימים והחזרת ילדים שפונו בכוח"
     ],
     "inferred": [
      "הסתמכות גוברת על טכנולוגיות בלתי מאוישות ללוגיסטיקה ופינוי תחת אש",
      "חיפוש דחוף אחר ציוד שיקום לתשתיות האנרגיה ההרוסות"
     ],
     "forecast": [
      "השתתפות בזהירות במגעים דיפלומטיים לצד המשך המאמץ הצבאי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c9p8g085mz07o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-06T18:06:13+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/video/2026/nov/05/putin-envoy-thanks-melania-trump-for-brokering-ceasefire-video",
     "accessed_at": "2026-11-06T18:06:13+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraines-ground-drones-complete-over-30-000-missions-in-record-month-for-robot-warfare/",
     "accessed_at": "2026-11-06T18:06:13+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/06/zelensky-says-russian-strikes-have-damaged-every-power-plant-in-ukraine",
     "accessed_at": "2026-11-06T18:06:13+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/06/8061618/",
     "accessed_at": "2026-11-06T18:06:13+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4182215-budanov-to-lead-ukrainian-delegation-at-talks-in-abu-dhabi.html",
     "accessed_at": "2026-11-06T18:06:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T00:51:38+00:00",
  "changes": {
   "UKRAINE-11061806-01": {
    "kind": "new"
   },
   "UKRAINE-11061806-02": {
    "kind": "new"
   },
   "UKRAINE-11061806-03": {
    "kind": "new"
   },
   "UKRAINE-11061806-04": {
    "kind": "possible",
    "prev": "פגיעה במתקן ייצור במחוז קייב",
    "score": 0.467
   },
   "UKRAINE-11061806-05": {
    "kind": "new"
   },
   "UKRAINE-11061806-06": {
    "kind": "new"
   },
   "UKRAINE-11061806-07": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מתקפות רוסיות על תשתיות אנרגיה באוקראינה",
    "score": 0.65
   },
   "UKRAINE-11061806-08": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מפגש משלחות בבית הלבן",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-06T1810__north-202611061810.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-06T18:10:13+00:00",
   "window": {
    "from": "2026-11-05T18:10:13+00:00",
    "to": "2026-11-06T18:10:13+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611061810"
   },
   "summary": "בגזרה הצפונית מתנהלים עיחידים צבאיים עקיפים וישירים, הכוללים תקיפות ארטילריות ואוויריות מצד ישראל בדרום לבנון ובדרום סוריה, לצד פעילות מתמשכת של חיזבאללה ועלייה במתיחות בגבולות. ממשלת לבנון והצבא מנסים לשמור על יציבות פנים-מדינתית ולהתמודד עם אתגרים ביטחוניים והומניטריים, תוך אזהרות מצד גורמים בחיזבאללה מפני הסלמה אזורית רחבה יותר מול ישראל.",
   "fronts": [
    {
     "name": "גבול ישראל-לבנון",
     "status": "פעיל ומתוח עם תקיפות והתנגשויות נקודתיות"
    },
    {
     "name": "דרום סוריה (קוניטרה)",
     "status": "מוקד לחיכוך ותקיפות ארטילריות מוגבלות"
    }
   ],
   "events": [
    {
     "id": "NORTH-11061810-01",
     "title": "תקיפות צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל תקפו בימים האחרונים מספר מטרות ואזורים בדרום לבנון, כולל אזור אל-סלוקי, ברעשית וכפר תבנית.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T18:13:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-05T18:13:19+00:00",
     "last_update_at": "2026-11-05T18:13:19+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינם מפורטים במלואם במקורות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133156",
       "published_at": "2026-11-05T18:13:19+00:00"
      }
     ],
     "places": [
      {
       "name": "בינת ג'ביל, לבנון",
       "lat": 33.1195,
       "lon": 35.4328
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-11061810-02",
     "title": "תקיפה ושריפת אדמות קרובה לקוניטרה בסוריה",
     "summary": "כוחות צבא ישראל ביצעו ירי ארטילרי לעבר שטחים חקלאיים בדרום סוריה, בסמוך לכפר עין זיואן ואל-סמדאניה אל-שרקייה.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T11:36:53+00:00",
     "last_update_at": "2026-11-06T13:11:12+00:00",
     "what_is_not_verified": "האם היו נפגעים בגוף כתוצאה מהירי הארטילרי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-shells-agricultural-land-in-southern-syria-s-quneitra/4114313",
       "published_at": "2026-11-06T13:11:12+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-strike-targets-syria-and-lebanon-simultaneously",
       "published_at": "2026-11-06T11:36:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11061810-03",
     "title": "עצירת אזרח וכניסת כוח זר בכפר קילה",
     "summary": "כוח צבאי ישראלי שהתקדם מכפר קילה לעבר דיר מימאס מנע מאזרחים להיכנס לעיירה וחטף אזרח למקום לא ידוע.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T12:41:33+00:00",
     "last_update_at": "2026-11-06T12:41:33+00:00",
     "what_is_not_verified": "זהותו המדויקת של האזרח החטוף ומצבו הנוכחי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/147587/",
       "published_at": "2026-11-06T12:41:33+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר קילה, לבנון",
       "lat": 33.2827,
       "lon": 35.5588
      },
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      }
     ]
    },
    {
     "id": "NORTH-11061810-04",
     "title": "מעצר והגשת כתבי אישום נגד פעילי חיזבאללה בגין משלוח חומרי נפץ",
     "summary": "הרשויות בלבנון הגישו כתבי אישום ומעצר נגד שני חברי חיזבאללה על מעורבות בהעברת משלוח חומרי נפץ שנוטרו בדאהר אל-ביידאר.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T14:55:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T14:55:00+00:00",
     "last_update_at": "2026-11-06T14:55:00+00:00",
     "what_is_not_verified": "היעד הסופי המדויק של משלוח חומרי הנפץ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/966668/from-baalbek-to-beirut-the-trail-of-the-explosives-shipment-under-inve/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966668",
       "published_at": "2026-11-06T14:55:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דאהר אל-ביידאר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      },
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      }
     ]
    }
   ],
   "not_verified": [
    "מטרתו המדויקת של משלוח חומרי הנפץ שנתפס בלבנון",
    "היקף הנפגעים המלא בתקיפות צה\"ל בדרום לבנון ובסוריה"
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
     "value": 3.199,
     "unit": "ILS",
     "change_pct": 0.86,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "דחיית ההתערבות האמריקאית והמערבית בענייני לבנון",
      "המשך התנגדות למדיניות העוינת של ארה\"ב וישראל באזור"
     ],
     "inferred": [
      "יצירת לחץ על ישראל דרך הגברת החיכוך בגבול כדי להוות הרתעה מפני עימות רחב עם איראן"
     ],
     "forecast": [
      "שמירה על מוכנות לעימות רחב אם יתפתח משבר צבאי כולל מול איראן"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים ביטחוניים בגבול הצפון ושמירה על חופש פעולה מבצעי"
     ],
     "inferred": [
      "סיכול תשתיות טרור והעברת מסרים תקיפים נגד התבססות עוינת בלבנון ובסוריה"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות ככל שהחיכוך בגבול יימשך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/147587/",
     "accessed_at": "2026-11-06T18:10:13+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-shells-agricultural-land-in-southern-syria-s-quneitra/4114313",
     "accessed_at": "2026-11-06T18:10:13+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/966668/from-baalbek-to-beirut-the-trail-of-the-explosives-shipment-under-inve/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966668",
     "accessed_at": "2026-11-06T18:10:13+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-strike-targets-syria-and-lebanon-simultaneously",
     "accessed_at": "2026-11-06T18:10:13+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133156",
     "accessed_at": "2026-11-06T18:10:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T00:58:04+00:00",
  "changes": {
   "NORTH-11061810-01": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "תקיפות והפגזות בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11061810-02": {
    "kind": "possible",
    "prev": "פשיטה ישראלית באזור קוניטרה בסוריה",
    "score": 0.467
   },
   "NORTH-11061810-03": {
    "kind": "new"
   },
   "NORTH-11061810-04": {
    "kind": "new"
   }
  }
 }
};
