/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-07T0633__yemen-202611070633.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-07T06:33:07+00:00",
   "window": {
    "from": "2026-11-06T06:33:07+00:00",
    "to": "2026-11-07T06:33:07+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611070633"
   },
   "summary": "העימות בין החות'ים לבין ערב הסעודית והממשלה התימנית ממשיך להסלים, ומתבטא בשיגורי טילים לעבר יעדים בעומק השטח הסעודי ובקרבות פנימיים עזים במוקדים כמו תעז. ערב הסעודית פועלת לחיזוק יכולותיה באמצעות ייעוץ והדרכה מצד כוחות חיצוניים כדוגמת סוריה, לצד שיתופי פעולה אזוריים. במקביל, בנתיבי השיט בים האדום ובבאב אל-מנדב נרשמה רגיעה נקודתית מתקיפות, בעוד הלחץ האמריקני והאזהרות הביטחוניות באזור נותרים ברמה גבוהה.",
   "fronts": [
    {
     "name": "ציר תימן - ערב הסעודית",
     "status": "הסלמה הכוללת שיגורי טילים חות'יים לעבר ערים ויירוטים של הקואליציה הסעודית, לצד היערכות צבאית סעודית מוגברת."
    },
    {
     "name": "מחוז תעז ופנים תימן",
     "status": "לחימה מתמשכת, מצור מתהדק והפגזות הדדיות הגובות קורבנות אזרחיים ומחמירות את המשבר ההומניטרי."
    },
    {
     "name": "הים האדום ומצר באב אל-מנדב",
     "status": "הפוגה זמנית ללא תקיפות מדווחות על כלי שיט מסחריים במהלך השבוע שנסקר."
    }
   ],
   "events": [
    {
     "id": "YEMEN-11070633-01",
     "title": "יירוט טיל שיוט חות'י ששוגר לעבר אזור ריאד",
     "summary": "כוחות הקואליציה בהובלת ערב הסעודית יירטו והשמידו טיל שיוט ששיגרו החות'ים לעבר מרחב ריאד.",
     "axis": "ערב הסעודית - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T05:44:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T05:44:29+00:00",
     "last_update_at": "2026-11-07T05:44:29+00:00",
     "what_is_not_verified": "לא הוצגו תיעודים עצמאיים המאמתים את מיקום היירוט או את סוג הטיל המדויק מעבר להודעת הדובר הסעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-forces-destroy-houthi-missile-over-riyadh-region",
       "published_at": "2026-11-07T05:44:29+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11070633-02",
     "title": "פגיעה קטלנית בשוק אל-חדארה במחוז תעז",
     "summary": "אירוע פגיעה בשוק אל-חדארה באזור אל-וואזעיה גבה נפגעים רבים, כאשר ממשלת תימן מאשימה את החות'ים בהפגזת המקום, בעוד כלי תקשורת חות'יים טוענים כי מדובר בהפצצה סעודית שהביאה לעשרות הרוגים ופצועים.",
     "axis": "פנים תימן / תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T13:35:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T13:35:24+00:00",
     "last_update_at": "2026-11-06T19:53:10+00:00",
     "what_is_not_verified": "זהות הגורם המבצע (ירי חות'י או תקיפה אווירית סעודית) ומספר הנפגעים המדויק אינם מוסכמים בין הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155338",
       "published_at": "2026-11-06T19:53:10+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155334",
       "published_at": "2026-11-06T17:14:24+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155319",
       "published_at": "2026-11-06T15:54:53+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133190",
       "published_at": "2026-11-06T13:35:24+00:00"
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
     "id": "YEMEN-11070633-03",
     "title": "דיווח על סיוע צבאי סורי לכוחות הסעודיים והתימניים מול החות'ים",
     "summary": "גורמים צבאיים ואמריקניים דיווחו על הגעת עשרות אנשי צבא מסוריה לערב הסעודית במטרה לספק ייעוץ והכשרה ליחידות סעודיות ותימניות במסגרת התמודדותן עם האיום החות'י.",
     "axis": "ערב הסעודית - סוריה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T16:46:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T16:46:34+00:00",
     "last_update_at": "2026-11-06T20:37:40+00:00",
     "what_is_not_verified": "דיפלומט סורי טען כי דיווחים על פריסה צבאית הם מוקדמים, בעוד מקורות אחרים אישרו הגעת כוח אדם לאימון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-aids-saudi-arabia-military-advice-and-training",
       "published_at": "2026-11-06T20:37:40+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21795743",
       "published_at": "2026-11-06T19:05:03+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133199",
       "published_at": "2026-11-06T17:52:01+00:00"
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
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11070633-04",
     "title": "אזהרת ביטחון אמריקנית בעקבות התגברות האיום החות'י",
     "summary": "מחלקת המדינה של ארצות הברית ונציגויותיה פרסמו אזהרות ביטחון לאזרחיהן במזרח התיכון בשל סכנה מוגברת לתקיפות מצד החות'ים ומאמצים איראניים לפגוע בנציגים רשמיים.",
     "axis": "אזור המזרח התיכון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T22:04:13+00:00",
     "last_update_at": "2026-11-07T03:10:33+00:00",
     "what_is_not_verified": "לא פורטו מטרות ספציפיות או עיתוי מוגדר לאיומים המיוחסים לחות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-urges-citizens-across-middle-east-exercise-heightened-caution",
       "published_at": "2026-11-07T03:10:33+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hyhzpaitmg",
       "published_at": "2026-11-06T22:04:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11070633-05",
     "title": "החמרת המצור והמצוקה הרפואית בעיר תעז",
     "summary": "הגבלות התנועה והמצור שמוטלים על העיר תעז מובילים למחסור חמור בחמצן ובדלק להפעלת אינקובטורים בבתי החולים, ומסכנים את חייהם של פגים ותינוקות.",
     "axis": "פנים תימן / תעז",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T16:48:12+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T16:48:12+00:00",
     "last_update_at": "2026-11-06T16:48:12+00:00",
     "what_is_not_verified": "אין נתון רשמי כולל ומאומת לגבי מספר מקרי המוות המדויק של תינוקות כתוצאה מהמחסור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-blockade-threatens-lives-newborns-yemens-taiz",
       "published_at": "2026-11-06T16:48:12+00:00"
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
     "id": "YEMEN-11070633-06",
     "title": "מות עובד או\"ם במתקן מעצר חות'י בצנעא",
     "summary": "עובד תימני של נציבות זכויות האדם של האו\"ם מת במתקן כליאה של החות'ים בצנעא לאחר שהוחזק במעצר במשך למעלה משנתיים, על רקע המשך מעצרם של עשרות עובדי סיוע נוספים.",
     "axis": "פנים תימן / צנעא",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T12:22:46+00:00",
     "last_update_at": "2026-11-06T12:22:46+00:00",
     "what_is_not_verified": "סיבת המוות הרשמית והנסיבות הרפואיות של מותו במתקן המעצר לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/un-faces-criticism-after-yemeni-employee-dies-houthi-custody",
       "published_at": "2026-11-06T12:22:46+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11070633-07",
     "title": "היעדר תקיפות נגד כלי שיט בים האדום ובבאב אל-מנדב",
     "summary": "במהלך שבוע המעקב לא נרשמו תקיפות על תנועת השיט המסחרי בים האדום ובמצר באב אל-מנדב, בניגוד לרצף תקיפות שהתרחש במצר הורמוז ובמפרץ.",
     "axis": "הים האדום ומצר באב אל-מנדב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T02:25:09+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T02:25:09+00:00",
     "last_update_at": "2026-11-07T02:25:09+00:00",
     "what_is_not_verified": "אין מידע בטקסט לגבי הסיבה להפוגה בתקיפות בנתיב זה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-says-11-ships-attacked-week-4-nov-hormuz-arabian-gulf",
       "published_at": "2026-11-07T02:25:09+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "אחריות הצדדים לפגיעה בשוק אל-חדארה בתעז: הממשלה התימנית מייחסת את הפגיעה לחות'ים, ואילו מקורות חות'יים טוענים לתקיפה אווירית סעודית.",
    "היקף הפריסה הצבאית הסורית בערב הסעודית: מקורות ביטחוניים דיווחו על עשרות אנשי צבא שהגיעו, בעוד נציג דיפלומטי סורי כינה את הטענות על פריסה צבאית כמוקדמות.",
    "טענות ממשלת תימן בדבר ניסיון חות'י לתקוף את העיר אל-מדינה בסעודיה אינן מפורטות במקורות נוספים בטקסט."
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
     "actor": "התנועה החות'ית",
     "declared": [
      "המשך המאבק המזוין והפעלת לחץ צבאי על ערב הסעודית וממשלת תימן."
     ],
     "inferred": [
      "הרתעת ערב הסעודית מפני המשך התערבות בלחימה בתימן באמצעות שיגורים לעומק שטחה.",
      "הידוק השליטה הקרקעית בתוך תימן ודיכוי התנגדות מקומית ופעילות ארגונים בינלאומיים בצנעא."
     ],
     "forecast": [
      "המשך ניסיונות הפגיעה ביעדים סעודיים לצד שימור האחיזה המבצעית במוקדי החיכוך בתימן."
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "הגנה על שטח הממלכה, סיכול איומי תקיפה אוויריים ושיתוף מומחיות ביטחונית במסגרת הסכמים רשמיים."
     ],
     "inferred": [
      "שיפור מיומנות הכוחות הקרקעיים והיחידות התימניות בעזרת ניסיון קרבי סורי בלחימה נגד מיליציות.",
      "יצירת מערך הגנה ובריתות אזוריות לבלימת התפשטות ההשפעה החות'ית והאיראנית."
     ],
     "forecast": [
      "המשך הידוק שיתופי הפעולה הביטחוניים והסתמכות מוגברת על מערכות יירוט טילים."
     ]
    },
    {
     "actor": "ממשלת תימן וכוחותיה",
     "declared": [
      "מיגור האיום החות'י, השבת מוסדות המדינה והסרת המצור מעל העיר תעז."
     ],
     "inferred": [
      "גיוס תמיכה בינלאומית באמצעות הדגשת פגיעות החות'ים באזרחים ובאנשי סיוע.",
      "הישענות על הכשרה ותמיכה חיצונית לשיפור היכולות המבצעיות בחזיתות."
     ],
     "forecast": [
      "המשך עימותים עצימים באזורי החיכוך המרכזיים כגון תעז וד'מאר ללא הכרעה מהירה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-aids-saudi-arabia-military-advice-and-training-amid-houthi-attacks-sources",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21795743",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-says-11-ships-attacked-week-4-nov-hormuz-arabian-gulf",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/un-faces-criticism-after-yemeni-employee-dies-houthi-custody",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155319",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133199",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyhzpaitmg",
     "accessed_at": "2026-11-07T06:33:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T18:08:59+00:00",
  "changes": {
   "YEMEN-11070633-01": {
    "kind": "new"
   },
   "YEMEN-11070633-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה בשוק בתעז והאשמות הדדיות",
    "score": 1.0
   },
   "YEMEN-11070633-03": {
    "kind": "possible",
    "prev": "משלוח יועצים צבאיים מסוריה לסעודיה",
    "score": 0.4
   },
   "YEMEN-11070633-04": {
    "kind": "new"
   },
   "YEMEN-11070633-05": {
    "kind": "possible",
    "prev": "השתלטות כוחות ממשלת תימן על אזורים בתעז",
    "score": 0.633
   },
   "YEMEN-11070633-06": {
    "kind": "new"
   },
   "YEMEN-11070633-07": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-07T0629__iran-202611070629.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-07T06:29:53+00:00",
   "window": {
    "from": "2026-11-06T06:29:53+00:00",
    "to": "2026-11-07T06:29:53+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611070629"
   },
   "summary": "העימות הצבאי והמדיני בין ארצות הברית וישראל לבין איראן נמשך, כאשר הצבא האמריקני ביצע תקיפות מוגבלות במצר הורמוז וטהראן מצידה מאיימת להגיב ללא מגבלות גאוגרפיות. לצד פעולות הלחימה וההיערכות לפגיעות במתקני גרעין, מתנהלים מאמצי תיווך אינטנסיביים בהובלת קטאר במטרה למנוע הידרדרות אזורית נוספת.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פעילות צבאית פעילה, תקיפות אמריקניות מוגבלות וחסימת נתיבי שיט בידי איראן"
    },
    {
     "name": "חזית המודיעין ותוכנית הגרעין",
     "status": "לחץ אמריקני להשגת מידע, היערכות איראנית לתקיפת מתקנים ועבודות בינוי"
    },
    {
     "name": "הערוץ הדיפלומטי והתיווך",
     "status": "מגעים מתמשכים בתיווך קטארי תוך חילוקי דעות עמוקים בין הצדדים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11070629-01",
     "title": "תקיפות אמריקניות באי קשם באיראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ דיווח על תקיפות מוגבלות שביצע הצבא האמריקני נגד מערכת הגנה אווירית באי קשם במצר הורמוז, בעוד באיראן דווח על שני פיצוצים באזור סוזה באי.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T03:07:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T03:07:01+00:00",
     "last_update_at": "2026-11-07T03:53:01+00:00",
     "what_is_not_verified": "היקף הנזק והפגיעה במערכת ההגנה האווירית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/7/trump-confirms-new-us-strikes-on-irans-qeshm-island?traffic_source=rss",
       "published_at": "2026-11-07T03:53:01+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/07/us-carries-out-another-round-of-minor-strikes-on-iran-trump-says",
       "published_at": "2026-11-07T03:07:01+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      },
      {
       "name": "סוזה, איראן",
       "lat": 26.7776,
       "lon": 56.0631
      },
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-11070629-02",
     "title": "הצעת פרס כספי אמריקני עבור מידע על תוכנית הגרעין האיראנית",
     "summary": "מחלקת המדינה האמריקנית ופיקוד המרכז של ארה\"ב הציעו פרס של עד עשרים מיליון דולר וסיוע במעבר מדינה עבור מידע על מתקנים, ציוד ואנשי מפתח בתוכנית הגרעין של איראן.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T02:30:21+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T02:30:21+00:00",
     "last_update_at": "2026-11-07T05:30:20+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-says-forces-stronger-beginning-war",
       "published_at": "2026-11-07T05:30:20+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1385747",
       "published_at": "2026-11-07T03:47:26+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-offers-20-mn-reward-info-irans-nuclear-program-centcom",
       "published_at": "2026-11-07T02:30:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11070629-03",
     "title": "הטלת סנקציות כלכליות של ארה\"ב על חברות חלפנות כספים מקנדה",
     "summary": "משרד האוצר של ארצות הברית הטיל עיצומים על שמונה חברות להמרת כספים מקנדה עקב סיוע לגופים איראניים הנתונים בסנקציות והעברת כספים הקשורים לסחר בסמים.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T04:50:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T04:50:46+00:00",
     "last_update_at": "2026-11-07T04:50:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/economy/2026/11/7/us-treasury-sanctions-eight-canadian-money-exchange-firms-over-iran-ties?traffic_source=rss",
       "published_at": "2026-11-07T04:50:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11070629-04",
     "title": "הערכות מצב ודריכות מוגברת בצבא איראן",
     "summary": "דובר צבא איראן טען כי כוחות הצבא חזקים ומוכנים יותר מבעבר, שמצר הורמוז יישאר חסום עד להיענות לדרישות טהראן, וכי לא תתאפשר שיקומם של בסיסים אמריקניים שנפגעו באזור.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T04:07:43+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T04:07:43+00:00",
     "last_update_at": "2026-11-07T05:32:18+00:00",
     "what_is_not_verified": "הטענה בדבר השמדת למעלה מ-228 מתקנים בבסיסי ארה\"ב והיעדר יכולת מבצעית שלהם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-will-not-allow-us-rebuild-bases-region-army-spokesman-says",
       "published_at": "2026-11-07T05:32:18+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-says-forces-stronger-beginning-war",
       "published_at": "2026-11-07T05:30:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-forces-higher-alert-stronger-war-spokesman-says",
       "published_at": "2026-11-07T04:07:43+00:00"
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
     "id": "IRAN-11070629-05",
     "title": "היערכות איראנית לאפשרות של פגיעה גרעינית וחלוקת טבליות יוד",
     "summary": "באיראן חולקו טבליות יוד לאזרחים המתגוררים סמוך למתקני גרעין והופצו הנחיות לצוותי רפואה מחשש לתקיפה אמריקנית נגד מתקנים תת-קרקעיים.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T15:54:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T15:54:06+00:00",
     "last_update_at": "2026-11-06T22:06:46+00:00",
     "what_is_not_verified": "מידת האיום הממשי בתקיפה גרעינית אמריקנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49350",
       "published_at": "2026-11-06T22:06:46+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49349",
       "published_at": "2026-11-06T21:14:42+00:00"
      },
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
     "places": [
      {
       "name": "נתנז, איראן",
       "lat": 33.5071,
       "lon": 51.9136
      }
     ]
    },
    {
     "id": "IRAN-11070629-06",
     "title": "עבודות בנייה ושיקום באתרים צבאיים באיראן",
     "summary": "ניתוח תצלומי לוויין הצביע על פעולות בינוי וחפירות חדשות סמוך לבסיסי טילים ושיקום מתקנים צבאיים שניזוקו בתקיפות קודמות.",
     "axis": "ישראל-ארה\"ב-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T07:33:41+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T07:33:41+00:00",
     "last_update_at": "2026-11-07T02:25:16+00:00",
     "what_is_not_verified": "ייעודם המדויק של המבנים הנבנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611062898",
       "published_at": "2026-11-07T02:25:16+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckjrwx1r2d5ro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-06T07:33:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11070629-07",
     "title": "ביקור בכיר איראני במוסקבה ובקשת מערכות הגנה אווירית",
     "summary": "הבכיר האיראני מוחסן רזאי הגיע למוסקבה ונפגש עם נשיא רוסיה ולדימיר פוטין, כשהוא מוסר איגרת ממנהיג איראן הכוללת בקשה לרכישת מערכות הגנה מסוג אס-400.",
     "axis": "איראן - רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T16:05:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T16:05:01+00:00",
     "last_update_at": "2026-11-06T17:15:56+00:00",
     "what_is_not_verified": "האם מוסקבה נעתרה לבקשה לאספקת המערכות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611067881",
       "published_at": "2026-11-06T17:15:56+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/syl0011uiaml",
       "published_at": "2026-11-06T16:08:08+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133196",
       "published_at": "2026-11-06T16:05:01+00:00"
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
     "id": "IRAN-11070629-08",
     "title": "אזהרת ביטחון אמריקנית לנציגויות ולתושבים באזור",
     "summary": "מחלקת המדינה האמריקנית פרסמה אזהרה לאזרחיה ולנציגויותיה במזרח התיכון לנקוט ערנות מוגברת בעקבות איומים מצד איראן לפגוע בבכירים אמריקנים ופעילות החות'ים.",
     "axis": "ארצות הברית - איראן ושלוחותיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T22:04:13+00:00",
     "last_update_at": "2026-11-07T03:10:33+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_f00090cce7ab8eab",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-urges-citizens-across-middle-east-exercise-heightened-caution",
       "published_at": "2026-11-07T03:10:33+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_f00090cce7ab8eab",
       "url": "https://www.ynet.co.il/news/article/hyhzpaitmg",
       "published_at": "2026-11-06T22:04:13+00:00"
      }
     ],
     "places": [
      {
       "name": "ירושלים, ישראל",
       "lat": 31.7788,
       "lon": 35.2258
      }
     ]
    },
    {
     "id": "IRAN-11070629-09",
     "title": "המשך מאמצי התיווך הקטאריים בין ארה\"ב לאיראן",
     "summary": "ראש ממשלת קטאר מסר כי מאמצי התיווך נמשכים למרות קשיים, בעוד גורמים שונים מדווחים על מגעים בהובלת סגן הנשיא האמריקני לצד הכחשות ודחיות מצד גורמים באיראן.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T12:05:53+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T12:05:53+00:00",
     "last_update_at": "2026-11-07T04:46:27+00:00",
     "what_is_not_verified": "רמת ההתקדמות הממשית בשיחות והסיכוי להסכם מלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/qatar-says-its-mediation-efforts-between-us-and-iran-continue-prevent-escalation",
       "published_at": "2026-11-07T04:46:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/crisis-cannot-be-left-unresolved-qatar-pm-says-mediation-efforts",
       "published_at": "2026-11-07T03:34:35+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21796317",
       "published_at": "2026-11-07T02:07:27+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21796194",
       "published_at": "2026-11-06T23:56:12+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133200",
       "published_at": "2026-11-06T19:17:54+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94964",
       "published_at": "2026-11-06T12:05:53+00:00"
      }
     ],
     "places": [
      {
       "name": "אוקספורד, בריטניה",
       "lat": 51.752,
       "lon": -1.2578
      }
     ]
    }
   ],
   "not_verified": [
    "טענת איראן בדבר פגיעה והשבתה של יותר מ-228 אתרים ומתקנים בבסיסי ארה\"ב באזור",
    "הדיווח לפיו ארה\"ב מתכוונת לבצע תקיפה גרעינית נגד מתקני גרעין איראניים",
    "מידת ההתקדמות הממשית בשיחות להסכם מדיני בין ארה\"ב לאיראן",
    "טענות על כוונה איראנית להשתמש בנשק כימי",
    "אספקה בפועל של מערכות הגנה מדגם אס-400 מרוסיה לאיראן"
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
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני בידי איראן",
      "הגעה להסדר ולהפחתת ההסלמה במזרח התיכון",
      "איסוף מידע על מתקני הגרעין ואנשי המפתח באיראן"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וכלכלי מדוד כדי לאלץ את טהראן לחתום על הסכם",
      "הרתעת שלוחותיה של איראן מפגיעה ביעדים אמריקניים",
      "שימור חופש הפעולה הצבאי באזור המפרץ"
     ],
     "forecast": [
      "המשך אכיפת הסנקציות לצד תקיפות נקודתיות של מערכי הגנה אם תהיה תוקפנות נוספת",
      "שמירה על ערוצי תיווך פתוחים מול איראן תוך כוננות לתקיפות נרחבות יותר"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הותרת מצר הורמוז סגור עד להיענות ארצות הברית לדרישותיה",
      "איסור מוחלט על שיקום בסיסי צבא אמריקניים באזור",
      "תגובה צבאית מידית, יעילה וחסרת מגבלות גאוגרפיות לכל תקיפה"
     ],
     "inferred": [
      "חיזוק מערך ההגנה האווירית באמצעות סיוע רוסי להגנה על מתקנים אסטרטגיים",
      "שיקום תשתיות הטילים והגרעין שנפגעו",
      "שימוש בחסימת נתיבי השיט כמנוף לחץ על הכלכלה העולמית"
     ],
     "forecast": [
      "המשך עיבוי ההגנה סביב מתקני הגרעין והטילים",
      "דחיית הצעות להסכם ביניים ללא ויתורים מוחשיים מוושינגטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/economy/2026/11/7/us-treasury-sanctions-eight-canadian-money-exchange-firms-over-iran-ties?traffic_source=rss",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/qatar-says-its-mediation-efforts-between-us-and-iran-continue-prevent-escalation",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckjrwx1r2d5ro?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/07/us-carries-out-another-round-of-minor-strikes-on-iran-trump-says",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611067881",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21796194",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1385747",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/crisis-cannot-be-left-unresolved-qatar-pm-says-mediation-efforts",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133200",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49349",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94964",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyhzpaitmg",
     "accessed_at": "2026-11-07T06:29:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T17:39:56+00:00",
  "changes": {
   "IRAN-11070629-01": {
    "kind": "possible",
    "prev": "יירוט רחפן אמריקאי מעל האי קשם",
    "score": 0.633
   },
   "IRAN-11070629-02": {
    "kind": "new"
   },
   "IRAN-11070629-03": {
    "kind": "new"
   },
   "IRAN-11070629-04": {
    "kind": "new"
   },
   "IRAN-11070629-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חלוקת טבליות יוד באיראן סביב מתקני גרעין",
    "score": 1.0
   },
   "IRAN-11070629-06": {
    "kind": "new"
   },
   "IRAN-11070629-07": {
    "kind": "possible",
    "prev": "פגישת מזכיר המועצה העליונה לביטחון לאומי של איראן עם נשיא רוסיה",
    "score": 0.4
   },
   "IRAN-11070629-08": {
    "kind": "new"
   },
   "IRAN-11070629-09": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-07T0630__ukraine-202611070630.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-07T06:30:53+00:00",
   "window": {
    "from": "2026-11-06T06:30:53+00:00",
    "to": "2026-11-07T06:30:53+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611070630"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעוצמה גבוהה עם מהלומות הדדיות לעומק העורף, כאשר רוסיה מפעילה כטב\"מים וטילים בליסטיים נגד תשתיות אנרגיה וגשרים בקייב, ואילו אוקראינה פוגעת במתקני דלק ותעשייה ברוסיה. במקביל לתנועות טקטיות של כוחות רוסיים במחוז דונצק, מתנהלת פעילות דיפלומטית ענפה בארצות הברית ואיחוד האמירויות לקידום שיחות משא ומתן תלת-צדדיות. בזירה המדינית נמשכים מאמצי גיוס התקציבים והסיוע המערבי לצד שימור סנקציות והגבלות על מוסקבה.",
   "fronts": [
    {
     "name": "העורף האוקראיני (קייב וז'יטומיר)",
     "status": "ספיגת מתקפות טילים וכטב\"מים רוסיות מסיביות על יעדי אנרגיה ותחבורה"
    },
    {
     "name": "העורף הרוסי (סרטוב, אוריול, רוסטוב)",
     "status": "תקיפות כטב\"מים וטילים אוקראיניות נגד בתי זיקוק ומפעלי תעשייה"
    },
    {
     "name": "חזית מחוז דונצק",
     "status": "התקדמות קרקעית של כוחות רוסיים ליד סביטלה וואסיליבקה"
    },
    {
     "name": "חזית מחוז חרקוב",
     "status": "לחימה בעצימות מקומית ומלכוד מוקשים סמוך לגבול"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11070630-01",
     "title": "מתקפה בליסטית ורחפנים רוסית נרחבת על קייב ותשתיות אנרגיה",
     "summary": "רוסיה שיגרה מתקפת טילים ורחפנים שפגעה במתקני אנרגיה, בגשר פיבניצ'ני ובמבני מגורים בקייב ובמחוז ז'יטומיר, וגרמה לפציעת חמישה בני אדם ולשיבושים קשים באספקת החשמל, החימום והמים.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T22:04:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T22:04:00+00:00",
     "last_update_at": "2026-11-07T06:28:36+00:00",
     "what_is_not_verified": "היקף הפגיעה המדויק בגשר פיבניצ'ני והטענה בדבר שיגור עשרות טילים בליסטיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2214177",
       "published_at": "2026-11-07T06:28:36+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4182323-injury-toll-in-russian-ballistic-attack-on-kyiv-rises-to-five.html",
       "published_at": "2026-11-07T05:56:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061681/",
       "published_at": "2026-11-07T05:48:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061667/",
       "published_at": "2026-11-07T05:36:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061680/",
       "published_at": "2026-11-07T05:24:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4182310-russian-ballistic-attack-injures-three-in-kyiv-including-child.html",
       "published_at": "2026-11-07T04:22:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49358",
       "published_at": "2026-11-07T02:40:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-ballistic-missiles-slam-kyiv-after-zelensky-warns-of-mass-attack/",
       "published_at": "2026-11-06T22:04:00+00:00"
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
     "id": "UKRAINE-11070630-02",
     "title": "תקיפות כטב\"מים וטילים אוקראיניות בעומק שטח רוסיה",
     "summary": "אוקראינה ביצעה תקיפות משולבות נגד יעדים במספר מחוזות ברוסיה, בהם פגיעה בבית זיקוק בסרטוב ופגיעה במפעל פרוטון באוריול שהובילה לדליקה גדולה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T22:53:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T22:53:00+00:00",
     "last_update_at": "2026-11-07T03:01:27+00:00",
     "what_is_not_verified": "סוג הטיל המדויק שפגע במפעל באוריול ומידת הנזק הסופית במתקנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-strikes-saratov-oil-refinery-in-mass-attack-on-several-regions-reports-say/",
       "published_at": "2026-11-07T03:01:27+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49355",
       "published_at": "2026-11-07T01:29:36+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49352",
       "published_at": "2026-11-07T00:02:39+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061663/",
       "published_at": "2026-11-06T22:53:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סרטוב, רוסיה",
       "lat": 51.53,
       "lon": 46.0347
      },
      {
       "name": "אוריול, רוסיה",
       "lat": 52.9709,
       "lon": 36.0642
      },
      {
       "name": "רוסטוב, רוסיה",
       "lat": 47.2223,
       "lon": 39.7199
      }
     ]
    },
    {
     "id": "UKRAINE-11070630-03",
     "title": "התקדמות כוחות רוסיים במחוז דונצק",
     "summary": "אנליסטים צבאיים אוקראינים דיווחו על התקדמות של כוחות הצבא הרוסי בסמוך לכפרים סביטלה וואסיליבקה במחוז דונצק.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T04:38:00+00:00",
     "last_update_at": "2026-11-07T04:38:00+00:00",
     "what_is_not_verified": "אישור רשמי של משרדי ההגנה על שינויי קווי השליטה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_deepstate",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061672/",
       "published_at": "2026-11-07T04:38:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סביטלה, מחוז דונצק, אוקראינה",
       "lat": 48.4047,
       "lon": 37.117
      },
      {
       "name": "ואסיליבקה, מחוז דונצק, אוקראינה",
       "lat": 48.1717,
       "lon": 37.8597
      }
     ]
    },
    {
     "id": "UKRAINE-11070630-04",
     "title": "מגעים דיפלומטיים והכנות למשא ומתן תלת-צדדי באבו דאבי",
     "summary": "נשיא ארצות הברית דונלד טראמפ דיווח על שיחות לסיום המלחמה, במקביל לאישור כי משלחת אוקראינית בראשות שר ההגנה תשתתף בשיחות תלת-צדדיות עם רוסיה וארצות הברית באיחוד האמירויות.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T20:15:22+00:00",
     "last_update_at": "2026-11-07T04:47:00+00:00",
     "what_is_not_verified": "זהות הגורמים עמם שוחח טראמפ ותוכן ההסכם המיועד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4182311-herbst-putin-wants-peace-talks-not-peace.html",
       "published_at": "2026-11-07T04:47:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061671/",
       "published_at": "2026-11-07T03:31:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2214151",
       "published_at": "2026-11-07T02:22:44+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/umerov-to-lead-ukraine-delegation-in-abu-dhabi-peace-talks-despite-media-confusion-top-official-confirms/",
       "published_at": "2026-11-06T20:15:22+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11070630-05",
     "title": "מפגש בבית הלבן בעקבות מבצע פינוי הומניטרי בעיר אולשקי",
     "summary": "הגברת הראשונה של ארה\"ב אירחה נציגים רשמיים מרוסיה ומאוקראינה בעקבות הסכם הפסקת אש מקומי שאיפשר פינוי אזרחים מהעיר הכבושה אולשקי, והעבירה מכתבים למנהיגי שתי המדינות.",
     "axis": "דיפלומטיה וערוצים הומניטריים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T07:56:19+00:00",
     "last_update_at": "2026-11-06T21:07:45+00:00",
     "what_is_not_verified": "מספר המפונים המדויק מאולשקי (קיים פער בין הצהרת מלניה טראמפ לדיווח הנציגים)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/07/melania-trump-receives-ukraine-s-order-of-princess-olha-at-white-house-meeting-on-oleshky-evacuation",
       "published_at": "2026-11-06T21:07:45+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c9p8g085mz07o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-06T07:56:19+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      },
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "UKRAINE-11070630-06",
     "title": "מגעים לקראת פסגה משולשת בין ארצות הברית, רוסיה וסין",
     "summary": "דוברת משרד החוץ של סין אישרה כי מתקיימים מגעים בנוגע לאפשרות של פגישה משולשת בין נשיא סין, נשיא ארה\"ב ונשיא רוסיה בשולי ועידת אפק בשנג'ן.",
     "axis": "דיפלומטיה בין-לאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T03:12:08+00:00",
     "last_update_at": "2026-11-07T03:12:08+00:00",
     "what_is_not_verified": "האם המפגש יתממש ומידת הנכונות האמריקנית לדון בנושא האוקראיני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_1c94c612cec9f1be",
       "url": "https://www.theguardian.com/world/2026/nov/07/ukraine-war-briefing-beijing-confirms-historic-xi-trump-putin-meeting-under-discussion",
       "published_at": "2026-11-07T03:12:08+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    },
    {
     "id": "UKRAINE-11070630-07",
     "title": "מבצע חילוץ ברחפן של חייל אוקראיני פצוע באזור חרקוב",
     "summary": "לוחם אוקראיני חולץ במבצע מורכב באמצעות רחפן לאחר ששהה שמונה ימים כשהוא פצוע ממוקש סמוך לקו הגבול באזור מחוז חרקוב.",
     "axis": "חזית הצפון-מזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T05:00:02+00:00",
     "last_update_at": "2026-11-07T05:00:02+00:00",
     "what_is_not_verified": "מועד החילוץ המדויק מהשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_e267d24c03d6ab34",
       "url": "https://www.theguardian.com/world/ng-interactive/2026/nov/07/how-injured-ukrainian-soldier-rescued-by-drone",
       "published_at": "2026-11-07T05:00:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11070630-08",
     "title": "הגבלות כניסה חדשות בפינלנד נגד ספורטאים ואזרחים מרוסיה",
     "summary": "ממשלת פינלנד מקדמת צעדים להחמרת איסור הכניסה לאזרחים וספורטאים רוסים לקראת אירועי ספורט בינלאומיים במדינה.",
     "axis": "סנקציות ומדיניות בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T20:20:04+00:00",
     "last_update_at": "2026-11-06T20:20:04+00:00",
     "what_is_not_verified": "המועד המדויק לכניסת האיסור לתוקף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/06/finland-moves-to-restrict-entry-for-russian-athletes-before-helsinki-nhl-games",
       "published_at": "2026-11-06T20:20:04+00:00"
      }
     ],
     "places": [
      {
       "name": "הלסינקי, פינלנד",
       "lat": 60.1666,
       "lon": 24.9435
      }
     ]
    }
   ],
   "not_verified": [
    "מספר האזרחים המדויק שפונו מהעיר אולשקי (פערים בין הצהרת הבית הלבן לדיווח נציגי הצדדים)",
    "מספר הטילים הבליסטיים המדויק ששוגרו לעבר קייב",
    "סוג הטיל שפגע במפעל פרוטון באוריול (השערה לגבי פלמינגו)",
    "נתוני הנפגעים והאבדות של צבא רוסיה המפורסמים על ידי קייב"
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
     "actor": "אוקראינה",
     "declared": [
      "הגנה על מרכזי האוכלוסייה ותשתיות האנרגיה באמצעות דרישה לסוללות פטריוט נוספות",
      "השגת סיוע צבאי ותקציבי מערבי בהיקף עשרות מיליארדי דולרים לשנים הקרובות",
      "שליחת משלחת רשמית בראשות שר ההגנה לשיחות תלת-צדדיות באבו דאבי"
     ],
     "inferred": [
      "שיבוש שרשראות האספקה והתעשייה הצבאית הרוסית באמצעות פגיעה בעומק שטחה",
      "שימור עמדת מיקוח לקראת מגעים אפשריים להפסקת אש בחסות הממשל האמריקני החדש"
     ],
     "forecast": [
      "המשך התמקדות ביירוט מתקפות עומק על משק החשמל לקראת עונת החורף",
      "ניסיון להבטיח התחייבויות סיוע אמריקאיות ואירופיות בטרם ייכפו ויתורים טריטוריאליים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה במתקני אנרגיה המזינים את הצבא האוקראיני",
      "נכונות לקיים מגעים דיפלומטיים ותיאום פגישות עם מנהיגי ארה\"ב וסין"
     ],
     "inferred": [
      "הפעלת לחץ כבד על האוכלוסייה והכלכלה באוקראינה דרך שיתוק מערכות החשמל והמים",
      "המשך כרסום הדרגתי בשטחי דונצק במטרה להציג הישגים טריטוריאליים מוצקים לפני משא ומתן"
     ],
     "forecast": [
      "המשך מתקפות ממוקדות על גשרים ומתקני אנרגיה לאורך נהר הדניפרו",
      "ניצול המשא ומתן באבו דאבי להפחתת הסיוע המערבי לקייב ולביסוס הלגיטימציה של הישגיה בשטח"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c9p8g085mz07o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/ng-interactive/2026/nov/07/how-injured-ukrainian-soldier-rescued-by-drone",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/umerov-to-lead-ukraine-delegation-in-abu-dhabi-peace-talks-despite-media-confusion-top-official-confirms/",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/06/finland-moves-to-restrict-entry-for-russian-athletes-before-helsinki-nhl-games",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061671/",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2214151",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49352",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4182311-herbst-putin-wants-peace-talks-not-peace.html",
     "accessed_at": "2026-11-07T06:30:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T18:06:13+00:00",
  "changes": {
   "UKRAINE-11070630-01": {
    "kind": "possible",
    "prev": "תקיפת כטב\"ם במחוז קייב",
    "score": 0.633
   },
   "UKRAINE-11070630-02": {
    "kind": "new"
   },
   "UKRAINE-11070630-03": {
    "kind": "new"
   },
   "UKRAINE-11070630-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגישה ומשא ומתן צפוי באבו דאבי",
    "score": 1.0
   },
   "UKRAINE-11070630-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מפגש בבית הלבן סביב הפסקת אש מקומית באולשקי",
    "score": 1.0
   },
   "UKRAINE-11070630-06": {
    "kind": "new"
   },
   "UKRAINE-11070630-07": {
    "kind": "new"
   },
   "UKRAINE-11070630-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-07T0912__north-202611070912.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-07T09:12:05+00:00",
   "window": {
    "from": "2026-11-06T09:12:05+00:00",
    "to": "2026-11-07T09:12:05+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611070912"
   },
   "summary": "הגזרה הצפונית מתאפיינת בחילופי אש ארטילריים ופעולות נקודתיות של ישראל בדרום לבנון ובדרום סוריה, תוך אזהרות הדדיות מפני הידרדרות ללחימה מחודשת. מפקד צבא לבנון תובע את פינוי כוחות צה\"ל ורשויות המדינה מנסות לחזק תשתיות חירום ולבלום הברחות תחמושת, בעוד ממשלת סוריה מכחישה תוכניות לפינוי מוסדותיה מחשש לתמרון קרקעי. במקביל, המתיחות הפנימית בסוריה נמשכת עם עימותים אלימים סביב זכויות הכורדים בצפון-מזרח המדינה.",
   "fronts": [
    {
     "name": "חזית דרום לבנון",
     "status": "חילופי אש ארטילריים, פיצוצים ותקריות ירי מצד ישראל, מול היערכות צבאית ותשתיות חירום לבנוניות"
    },
    {
     "name": "חזית דרום סוריה (קוניטרה)",
     "status": "תקריות ירי ארטילרי ישראלי וחשש מהתרחבות התמרון היבשתי"
    },
    {
     "name": "צפון-מזרח סוריה (אל-חסכה)",
     "status": "מתיחות אתנית ועימותים אלימים בהפגנות כורדיות"
    }
   ],
   "events": [
    {
     "id": "NORTH-11070912-01",
     "title": "תקיפות ארטילריה, ירי מקלעים ופיצוצים של צה\"ל בדרום לבנון",
     "summary": "כתב ערוץ אל-מנאר דיווח על תקיפות ארטילריה לעבר נבטיה אל-פוקא, פאתי חאריס, חדאת'א, ואדי א-סלוקי, פאתי ברעשית, אל-מנצורי וואדי זיבקין. בנוסף דווח על פגיעה ישירה בבית בפאתי עיתא אל-ג'בל, ירי מקלעים לעבר מיס אל-ג'בל ופאתי שבעא, ופיצוץ בעיירה אל-קנטרה.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T07:40:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T07:40:30+00:00",
     "last_update_at": "2026-11-07T07:40:30+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח כתב אל-מנאר על היקף הנזקים והירי המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_239153b45ae70e60",
       "url": "https://english.almanar.com.lb/article/147747/",
       "published_at": "2026-11-07T07:40:30+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      },
      {
       "name": "מיס אל-ג'בל, לבנון",
       "lat": 33.17,
       "lon": 35.5242
      },
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-11070912-02",
     "title": "ירי ארטילרי ישראלי בין יעטר לבית ליף",
     "summary": "ארטילריה ישראלית תקפה באזור שבין יעטר לבית ליף בדרום לבנון, על פי דיווח כתב מקומי.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T20:25:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T20:25:37+00:00",
     "last_update_at": "2026-11-06T20:25:37+00:00",
     "what_is_not_verified": "היקף הפגיעה והנזק אינם מפורטים ולא אומתו ממקור עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_22cf41178c3c1281",
       "url": "https://english.almanar.com.lb/article/147717/",
       "published_at": "2026-11-06T20:25:37+00:00"
      }
     ],
     "places": [
      {
       "name": "יעטר, לבנון",
       "lat": 33.1555,
       "lon": 35.3317
      }
     ]
    },
    {
     "id": "NORTH-11070912-03",
     "title": "הצהרת מפקד צבא לבנון על נסיגה ישראלית ושמירת היציבות",
     "summary": "מפקד צבא לבנון, הגנרל רודולף הייכל, דרש נסיגה ישראלית מלאה משטחי לבנון הכבושים והצהיר כי נוכחות ישראל היא האיום המרכזי למדינה, תוך הדגשת מחויבות הצבא לאחדות הלאומית ויישום החלטות הממשלה.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T13:50:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T13:50:43+00:00",
     "last_update_at": "2026-11-06T19:56:48+00:00",
     "what_is_not_verified": "מידת יישום סמכות הצבא בפועל בדרום לבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/147682/",
       "published_at": "2026-11-06T19:56:48+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966701/army-chief-haykal-calls-for-israeli-withdrawal-vows-to-preserve-lebano/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966701",
       "published_at": "2026-11-06T13:50:43+00:00"
      }
     ],
     "places": [
      {
       "name": "יארזה, לבנון",
       "lat": 33.8309,
       "lon": 35.5551
      }
     ]
    },
    {
     "id": "NORTH-11070912-04",
     "title": "ירי ארטילרי ישראלי לעבר קרקע חקלאית בקוניטרה",
     "summary": "פגז ארטילרי ישראלי פגע בשטח חקלאי בסמוך לכפר עין זיוואן בדרום סוריה, כחלק מפעילות צבאית במחוז קוניטרה.",
     "axis": "ישראל-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T13:11:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T13:11:12+00:00",
     "last_update_at": "2026-11-06T13:11:12+00:00",
     "what_is_not_verified": "פרטי הפגיעה והנפגעים אינם מאומתים מעבר לדיווח בסוכנות הידיעות הטורקית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-shells-agricultural-land-in-southern-syria-s-quneitra/4114313",
       "published_at": "2026-11-06T13:11:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11070912-05",
     "title": "מעצר חברי חיזבאללה וחקירת משלוח חומרי נפץ בלבנון",
     "summary": "שופטת חוקרת צבאית בלבנון הוציאה צווי מעצר נגד שני פעילי חיזבאללה שהובילו משלוח חומרי נפץ שנתפס בדהר אל-בידר. השניים טענו שקיבלו את החומרים בבעלבכ והיו אמורים למסור אותם בפרבר הדרומי של ביירות.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T14:55:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T14:55:00+00:00",
     "last_update_at": "2026-11-06T14:55:00+00:00",
     "what_is_not_verified": "יעד השימוש הסופי בחומרי הנפץ ומעורבות גורמים בכירים יותר טרם הובהרו בחקירה.",
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
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      },
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11070912-06",
     "title": "הכחשת ממשלת סוריה בדבר העברת משרדים ממשלתיים מדמשק",
     "summary": "גורמי ממשל סוריים הכחישו דיווחים בתקשורת הטורקית לפיהם המשטר מתכונן להעביר משרדים ומוסדות מדינה מדמשק לחלב, חמאת, א-רקה ודיר א-זור עקב חשש מתקיפה קרקעית ישראלית נרחבת.",
     "axis": "ישראל-סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T11:44:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T11:44:12+00:00",
     "last_update_at": "2026-11-06T11:44:12+00:00",
     "what_is_not_verified": "קיומה של תוכנית מגירה להעברת משרדים או היות הדיווח לוחמה פסיכולוגית מטורקיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_t_rkiye_gazetesi",
       "url": "https://www.newarab.com/news/syria-denies-plans-relocate-ministries-over-israeli-threats",
       "published_at": "2026-11-06T11:44:12+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "חמאת, סוריה",
       "lat": 35.1343,
       "lon": 36.7496
      },
      {
       "name": "חלב, סוריה",
       "lat": 36.1992,
       "lon": 37.1637
      }
     ]
    },
    {
     "id": "NORTH-11070912-07",
     "title": "הערכות ישראליות לחידוש לחימה אפשרי בחזית לבנון",
     "summary": "דיווחים בתקשורת הישראלית מצביעים על כך שצה\"ל נערך לאפשרות של חידוש הלחימה בזירה הלבנונית ברקע המתיחות מול איראן.",
     "axis": "ישראל-לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T19:47:14+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T19:47:14+00:00",
     "last_update_at": "2026-11-06T19:47:14+00:00",
     "what_is_not_verified": "תוכניות המבצעים המדויקות של צה\"ל לא אומתו על ידי גורם רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-preparing-for-possible-resumption-of-war-in-lebanon-amid-iran-tensions-report/4114716",
       "published_at": "2026-11-06T19:47:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11070912-08",
     "title": "הכרזת קונסול לבנון במישיגן כאישיות בלתי רצויה בארה\"ב",
     "summary": "מחלקת המדינה של ארצות הברית הכריזה על קונסול לבנון במישיגן כאישיות בלתי רצויה בעקבות פוסטים ברשתות חברתיות שבהם שיבח לכאורה את פיגוע חיזבאללה נגד הנחתים האמריקאים בביירות בשנת 1983.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T04:50:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T04:50:31+00:00",
     "last_update_at": "2026-11-07T04:50:31+00:00",
     "what_is_not_verified": "תגובת הקונסול הלבנוני להאשמות המיוחסות לו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966745/hiba-nasr-us-declares-lebanese-consul-in-michigan-persona-non-grata-ov/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966745",
       "published_at": "2026-11-07T04:50:31+00:00"
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
     "id": "NORTH-11070912-09",
     "title": "אזהרת מסע וערנות מוגברת של ארה\"ב בין היתר בלבנון ובישראל",
     "summary": "מחלקת המדינה האמריקאית פרסמה התרעת ביטחון לאזרחיה במספר מדינות במזרח התיכון, כולל ישראל ולבנון, וקראה לנקוט ערנות מוגברת מחשש לתקיפות ואיומים ביטחוניים.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T03:10:33+00:00",
     "last_update_at": "2026-11-07T03:10:33+00:00",
     "what_is_not_verified": "קיומן של התרעות ספציפיות על יעדים בלבנון או בישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-urges-citizens-across-middle-east-exercise-heightened-caution",
       "published_at": "2026-11-07T03:10:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11070912-10",
     "title": "הפעלת שירותי אינטרנט לווייני בלבנון מחשש להסלמה",
     "summary": "ממשלת לבנון החלה בהפעלת שירותי אינטרנט לווייני באמצעות סטארלינק לחברות ומוסדות כדי להבטיח רציפות תקשורת במצבי חירום ופגיעה אפשרית בתשתיות במקרה של מלחמה מול ישראל.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T17:07:57+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T17:07:57+00:00",
     "last_update_at": "2026-11-06T17:07:57+00:00",
     "what_is_not_verified": "מידת הפריסה הרחבה בפועל של השירות במוסדות השונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/can-starlink-keep-lebanon-connected-event-another-war",
       "published_at": "2026-11-06T17:07:57+00:00"
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
     "id": "NORTH-11070912-11",
     "title": "אזהרה מפני משבר תזונה ופגיעה בקרקעות חקלאיות בדרום לבנון",
     "summary": "ארגון הצלת הילדים הזהיר כי תקיפות ישראליות פגעו בכרבע מהקרקעות החקלאיות בלבנון, והובילו להחרפת חוסר הביטחון התזונתי ולעלייה ברמות תת-התזונה בקרב ילדים.",
     "axis": "ישראל-לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T17:43:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-06T17:43:01+00:00",
     "last_update_at": "2026-11-06T17:43:01+00:00",
     "what_is_not_verified": "האומדן המדויק של אחוז הקרקעות החקלאיות שניזוקו ישירות מהתקיפות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_ipc",
       "url": "https://www.newarab.com/news/israeli-attacks-threaten-food-security-children-lebanon",
       "published_at": "2026-11-06T17:43:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11070912-12",
     "title": "התקפה נגד סטודנטים כורדים בעיר אל-חסכה בצפון-מזרח סוריה",
     "summary": "גברים רעולי פנים תקפו באבנים, מקלות וחפצים חדים סטודנטים כורדים שהפגינו מחוץ לבניין המחוז באל-חסכה בדרישה להמשך לימודים בשפת אימם, ופצעו מספר מפגינים וצלם טלוויזיה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T17:27:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-06T17:27:33+00:00",
     "last_update_at": "2026-11-06T17:27:33+00:00",
     "what_is_not_verified": "זהותם המדויקת של התוקפים ושאלת אחריות כוחות הביטחון המקומיים שלא מנעו את התקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/news/kurdish-students-attacked-language-rights-protest-syria",
       "published_at": "2026-11-06T17:27:33+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות עיתון טורקי בדבר תוכנית סורית רשמית להעתקת משרדי ממשלה והבנק המרכזי מדמשק לערי פנים",
    "היקף הנפגעים וההרס המדויק של תקיפות צה\"ל המדווחות בכפרי דרום לבנון",
    "פרטי החקירה והיעד המבצעי הסופי של משלוח חומרי הנפץ שנתפס בלבנון",
    "שיעור השטחים החקלאיים שניזוקו לחלוטין בדרום לבנון"
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
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "מניעת התבססות והתחמשות מחדש של חיזבאללה בדרום לבנון",
      "הרתעת גורמים עוינים בסוריה באמצעות תקיפות אזהרה בקוניטרה והיערכות לאפשרות של חידוש הלחימה"
     ],
     "forecast": [
      "המשך סיכולים ממוקדים ותקיפות נקודתיות למניעת הפרות, לצד כוננות לפעולה רחבה אם תגבר המתיחות מול איראן"
     ]
    },
    {
     "actor": "צבא וממשלת לבנון",
     "declared": [
      "דרישה בלתי מתפשרת לנסיגת כוחות צה\"ל מהשטחים הכבושים בדרום לבנון",
      "שמירה על האחדות הלאומית, היציבות הפנימית והבטחת רציפות התקשורת בחירום"
     ],
     "inferred": [
      "ניסיון להפגין ריבונות ולאכוף פיקוח על משלוחי נשק לא מורשים בתוך המדינה"
     ],
     "forecast": [
      "המשך חקירות פנימיות למניעת הברחות חיזבאללה והסתמכות מוגברת על פתרונות תקשורת חלופיים"
     ]
    },
    {
     "actor": "משטר סוריה",
     "declared": [
      "התמקדות בביטחון פנים, הגנת הגבולות ובנייה מחדש",
      "הכחשת כוונות להעתקת משרדי ממשלה מדמשק"
     ],
     "inferred": [
      "צמצום פרופיל ואי-רצון להיגרר לעימות ישיר נרחב מול ישראל"
     ],
     "forecast": [
      "המשך בלימת יוזמות הסלמה צבאיות מול ישראל ושימור מוסדות השלטון בבירה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/147682/",
     "accessed_at": "2026-11-07T09:12:05+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-preparing-for-possible-resumption-of-war-in-lebanon-amid-iran-tensions-report/4114716",
     "accessed_at": "2026-11-07T09:12:05+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/966745/hiba-nasr-us-declares-lebanese-consul-in-michigan-persona-non-grata-ov/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966745",
     "accessed_at": "2026-11-07T09:12:05+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-urges-citizens-across-middle-east-exercise-heightened-caution",
     "accessed_at": "2026-11-07T09:12:05+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/kurdish-students-attacked-language-rights-protest-syria",
     "accessed_at": "2026-11-07T09:12:05+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-06T18:10:13+00:00",
  "changes": {
   "NORTH-11070912-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11070912-02": {
    "kind": "new"
   },
   "NORTH-11070912-03": {
    "kind": "new"
   },
   "NORTH-11070912-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפה ושריפת אדמות קרובה לקוניטרה בסוריה",
    "score": 1.0
   },
   "NORTH-11070912-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מעצר והגשת כתבי אישום נגד פעילי חיזבאללה בגין משלוח חומרי נפץ",
    "score": 1.0
   },
   "NORTH-11070912-06": {
    "kind": "new"
   },
   "NORTH-11070912-07": {
    "kind": "new"
   },
   "NORTH-11070912-08": {
    "kind": "new"
   },
   "NORTH-11070912-09": {
    "kind": "new"
   },
   "NORTH-11070912-10": {
    "kind": "new"
   },
   "NORTH-11070912-11": {
    "kind": "new"
   },
   "NORTH-11070912-12": {
    "kind": "new"
   }
  }
 }
};
