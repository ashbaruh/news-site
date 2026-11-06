/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-06T0052__yemen-202611060052.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-06T00:52:16+00:00",
   "window": {
    "from": "2026-11-05T00:52:16+00:00",
    "to": "2026-11-06T00:52:16+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611060052"
   },
   "summary": "הלחימה בתימן נמשכת בעצימות גבוהה, כאשר כוחות החות'ים מנהלים התקדמות קרקעית משמעותית במחוזות מאריב, תעז ובאזור הדרום לעבר עדן, וממשיכים בשיגורי טילים לעבר ערב הסעודית, כולל יירוט מעל העיר מדינה. מנגד, סעודיה ובעלות בריתה פועלות להידוק שיתופי הפעולה האזוריים והבינלאומיים, לרבות אישור הסכם הגנה משותף עם טורקיה וחתירה לבריתות הגנה רחבות יותר בניסיון לבלום את האיומים.",
   "fronts": [
    {
     "name": "חזית מאריב",
     "status": "פעילה והתקפתית מצד החות'ים"
    },
    {
     "name": "החזית הדרומית (תעז, לחג', אבין ועדן)",
     "status": "פעילה ותחת לחץ מתקדם של החות'ים"
    },
    {
     "name": "המרחב האווירי של סעודיה (מדינה וינבוע)",
     "status": "תחת איומי טילים וכטב'מים ופעילות יירוט"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11060052-01",
     "title": "פרלמנט טורקיה אישר את הסכם ההגנה של מכה",
     "summary": "הפרלמנט בטורקיה אישר את הסכם ההגנה המשותף יחד עם פקיסטן וערב הסעודית, מה שסולל את הדרך למשלוח תמיכה צבאית ופריסת אנשי צבא בסעודיה.",
     "axis": "ציר סעודיה-טורקיה-פקיסטן מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T22:09:29+00:00",
     "last_update_at": "2026-11-06T00:15:22+00:00",
     "what_is_not_verified": "היactual תאריך פריסת הכוחות בפועל טרם בוצע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_aljazeera",
       "url": "https://www.aljazeera.com/news/2026/11/6/turkiyes-parliament-ratifies-mecca-defence-agreement?traffic_source=rss",
       "published_at": "2026-11-06T00:15:22+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_aljazeera",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkeys-parliament-ratifies-mecca-defence-pact-clearing-way-military",
       "published_at": "2026-11-05T22:09:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11060052-02",
     "title": "עצרת מחאה בניו יורק נגד המצור על תעז ותקיפות החות'ים",
     "summary": "התקיימה עצרת מחאה מול מטה האומות המאוחדות בניו יורק בדרישה להסרת המצור מעל העיר תעז ותוך גינוי מתמשך של התקיפות החות'יות.",
     "axis": "ממשלת תימן והמתנגדים לחות'ים מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T22:48:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T22:48:40+00:00",
     "last_update_at": "2026-11-05T22:48:40+00:00",
     "what_is_not_verified": "מספר המשתתפים המדויק בעצרת המחאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_9f9b0e198dc26edf",
       "url": "https://www.sabanew.net/viewstory/155281",
       "published_at": "2026-11-05T22:48:40+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11060052-03",
     "title": "טענות לדרישות פיצויים והכרה של החות'ים מסעודיה",
     "summary": "פורסם כי החות'ים דרשו מסעודיה 51 מיליארד דולר והכרה בהם כשלטון הלגיטימי, טענות שהוכחשו על ידי גורם המקורב לחות'ים שטענו לדרישת סכומים גבוהים יותר על נזקי המלחמה עבור כלל העם התימני.",
     "axis": "משא ומתן סעודי-חות'י",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T06:53:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-05T06:53:26+00:00",
     "last_update_at": "2026-11-05T18:00:07+00:00",
     "what_is_not_verified": "אמיתות סכומי הדרישות המדויקים ותנאי הפשרה האמיתיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_wall_street_journal",
       "url": "https://www.newarab.com/news/houthis-sought-51bn-compensation-saudi-recognition-report",
       "published_at": "2026-11-05T18:00:07+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_wall_street_journal",
       "url": "https://t.me/alexmehacarmel/49311",
       "published_at": "2026-11-05T12:42:19+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_wall_street_journal",
       "url": "https://t.me/lelotsenzura/94957",
       "published_at": "2026-11-05T06:53:26+00:00"
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
     "id": "YEMEN-11060052-04",
     "title": "הסלמה ולחימה במחוזות מאריב, תעז, לחג' ואבין",
     "summary": "כוחות צנעא (החות'ים) פתחו במתקפה נרחבת באזור רע'וואן במחוז מאריב ובגזרות נוספות בדרום ובמזרח, תוך דיווחים על השמדת כוחות פרו-סעודיים והתקדמות לעבר עדן.",
     "axis": "החות'ים מול ממשלת תימן והקואליציה הסעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-05T11:29:14+00:00",
     "last_update_at": "2026-11-05T13:47:00+00:00",
     "what_is_not_verified": "היקף האבדות המדויק ומידת השמדת הגדודים בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian",
       "url": "https://www.theguardian.com/world/2026/nov/05/yemen-president-sacks-ministers-and-officers-houthis",
       "published_at": "2026-11-05T13:47:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_guardian",
       "url": "https://t.me/alexmehacarmel/49310",
       "published_at": "2026-11-05T11:29:14+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
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
     "id": "YEMEN-11060052-05",
     "title": "יירוט טיל בליסטי לעבר העיר מדינה בסעודיה",
     "summary": "דובר הקואליציה בהובלת סעודיה הודיע כי טיל בליסטי ששוגר לעבר העיר אל-מדינה יורט בהצלחה, זאת לאחר אזהרות סביב הנמל האסטרטגי ינבוע.",
     "axis": "החות'ים מול ערב הסעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T11:07:22+00:00",
     "last_update_at": "2026-11-05T11:07:22+00:00",
     "what_is_not_verified": "הנזקים או הנפגעים הפוטנציאליים מנפילת שברי היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_a91d7ddb886b0f90",
       "url": "https://www.france24.com/en/middle-east/20261105-houthi-missiles-fired-at-medina-intercepted-saudi-coalition-says",
       "published_at": "2026-11-05T11:07:22+00:00"
      }
     ],
     "places": [
      {
       "name": "מדינה, ערב הסעודית",
       "lat": 24.4712,
       "lon": 39.6111
      },
      {
       "name": "ינבוע, ערב הסעודית",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-11060052-06",
     "title": "חתימת הסכם שיתוף פעולה ביטחוני בין סעודיה לסוריה",
     "summary": "ערב הסעודית וסוריה חתמו על הסכם שיתוף פעולה בין משרדי ההגנה של שתי המדינות ברוסיה/ריאד על רקע התקיפות החות'יות נגד סעודיה.",
     "axis": "סעודיה ובעלות בריתה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T00:22:20+00:00",
     "last_update_at": "2026-11-05T00:52:16+00:00",
     "what_is_not_verified": "הפרטים המדויקים אודות יישום הסיוע הצבאי בפועל במסגרת ההסכם",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_spa",
       "url": "https://www.newarab.com/news/saudi-syrian-defence-ministries-sign-cooperation-agreement",
       "published_at": "2026-11-05T00:22:20+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "גובה דרישות הפיצויים המדויק של החות'ים מושג בהכחשה הדדית",
    "מספר הנפגעים והאדמות שנפלו בפועל בקרבות מאריב והדרום",
    "פרטי היישום המדויקים של הסכמי ההגנה של סעודיה עם טורקיה וסוריה"
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
     "value": 3.1716,
     "unit": "ILS",
     "change_pct": 0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (כוחות צנעא)",
     "declared": [
      "דורשים הכרה בהם כשלטון הלגיטימי בתימן",
      "דורשים פיצויים בגין נזקי המלחמה"
     ],
     "inferred": [
      "להרחיב את השליטה הקרקעית לעבר מחוזות מפתח כמו מאריב ועיר הנמל עדן",
      "להפעיל לחץ צבאי וכלכלי על סעודיה באמצעות שיגורי טילים וכטב'מים"
     ],
     "forecast": [
      "המשך לחץ צבאי על החזיתות בדרום ובמאריב",
      "התמדה בשיגורים לעבר עומק סעודיה עד להשגת הישגים מדיניים"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "בלימת ההתקפות של החות'ים על תשתיות וממלכת סעודיה",
      "חיזוק שיתופי הפעולה הביטחוניים עם מדינות אזוריות (טורקיה, סוריה, פקיסטן)"
     ],
     "inferred": [
      "ניסיון להגיע להסדר מדיני שיעצור את מתקפות החות'ים תוך מזעור נזקים",
      "תמיכה בכוחות הממשל התימני והכוחות הפרו-סעודיים בבלמים מול ההתקדמות החות'ית"
     ],
     "forecast": [
      "הרחבת פריסת סיוע צבאי זגנתי (כגון טורקי) בסעודיה",
      "המשך מאמצי התיווך והלחץ הדיפלומטי והצבאי במקביל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/6/turkiyes-parliament-ratifies-mecca-defence-agreement?traffic_source=rss",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261105-houthi-missiles-fired-at-medina-intercepted-saudi-coalition-says",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/05/yemen-president-sacks-ministers-and-officers-houthis",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkeys-parliament-ratifies-mecca-defence-pact-clearing-way-military",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-syrian-defence-ministries-sign-cooperation-agreement",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155281",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49310",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94957",
     "accessed_at": "2026-11-06T00:52:16+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-05T07:23:53+00:00",
  "changes": {
   "YEMEN-11060052-01": {
    "kind": "new"
   },
   "YEMEN-11060052-02": {
    "kind": "new"
   },
   "YEMEN-11060052-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פניית סעודיות לחות'ים ודרישת פיצויים",
    "score": 1.0
   },
   "YEMEN-11060052-04": {
    "kind": "new"
   },
   "YEMEN-11060052-05": {
    "kind": "new"
   },
   "YEMEN-11060052-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "חתימת הסכם הגנה בין סעודיה לסוריה",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-06T0040__iran-202611060040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-06T00:40:37+00:00",
   "window": {
    "from": "2026-11-05T00:40:37+00:00",
    "to": "2026-11-06T00:40:37+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611060040"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך על רקע תוצאות בחירות האמצע בארה\"ב, המעוררות ויכוח בוושינגטון ובטהראן על המשך הלחימה או מתווה מדיני. איראן מגבירה את המגעים הדיפלומטיים מול רוסיה ומדינות האזור ומציגה הצעות חדשות, mentre ארה\"ב משדרת נחישות להמשיך במערכה אך בוחנת גם ערוצים דיפלומטיים. במקביל נרשמות תקריות במצר הורמוז ופעילות צבאית ערה.",
   "fronts": [
    {
     "name": "החזית הישירה איראן-ארה\"ב",
     "status": "פעילה עם מגעים דיפלומטיים ברקע"
    },
    {
     "name": "החזית הצפונית (מול חיזבאללה)",
     "status": "מתיחות וחיכוך גובר לאורך הקו הצהוב"
    }
   ],
   "events": [
    {
     "id": "IRAN-11060040-01",
     "title": "פגיעת מכליות נפט במצר הורמוז",
     "summary": "כוחות איראניים דיווחו כי חמש מכליות נפט וסירת גוררת עלו באש במספר אירועים במצר הורמוז.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T18:47:10+00:00",
     "last_update_at": "2026-11-05T18:47:10+00:00",
     "what_is_not_verified": "הנסיבות המדויקות של הדליקות והגורם להן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack?traffic_source=rss",
       "published_at": "2026-11-05T18:47:10+00:00"
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
     "id": "IRAN-11060040-02",
     "title": "יירוט כטב\"מי סיור מעל אי קשם",
     "summary": "משמרות המהפכה של איראן הודיעו כי הפילו כטב\"מי סיור אמריקאיים חמישי ושישי מסוג אם-קיו-אם-170 מעל האי קשם.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T20:22:02+00:00",
     "last_update_at": "2026-11-05T20:22:02+00:00",
     "what_is_not_verified": "אימות אמריקאי לגבי הפלת הכלים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_4137ce43e638f853",
       "url": "https://en.irna.ir/news/86313659/Iran-downs-fifth-and-sixth-MQM-170-US-drones-over-Qeshm-Island",
       "published_at": "2026-11-05T20:22:02+00:00"
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
     "id": "IRAN-11060040-03",
     "title": "פגישת מזכיר המועצה העליונה לביטחון לאומי של איראן עם נשיא רוסיה",
     "summary": "מחסן רזאאי נפגש במוסקבה עם נשיא רוסיה והעביר לו איגרת מהמנהיג העליון של איראן, ודן עמו בהסדרי ביטחון ותנאים להסכם שלום.",
     "axis": "איראן - רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T15:36:22+00:00",
     "last_update_at": "2026-11-05T19:53:57+00:00",
     "what_is_not_verified": "תוכן מדויק ורשמי של כל שבעת הסעיפים שהוצגו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49323",
       "published_at": "2026-11-05T19:53:57+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/skgb6bqpge",
       "published_at": "2026-11-05T19:25:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133149",
       "published_at": "2026-11-05T15:36:22+00:00"
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
    "פיתוח ושירות של מערכת הקרקע הניידת 'איזדלייה 347' וטילי LMUR באיראן",
    "אספקה בפועל של 90 משגרי טילים מרוסיה לאיראן",
    "פרטי ההצעות המדויקים בתוכנית הגרעין שהועברו דרך מתווכים קטארים"
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
     "value": 3.1716,
     "unit": "ILS",
     "change_pct": 0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "דרישה להפסקת הלחימה בכל החזיתות כולל לבנון ועזה",
      "הפרשת נכסים איראניים והסרת סנקציות",
      "העברת השליטה במצר הורמוז לידי איראן והוצאת כוחות אמריקאיים"
     ],
     "inferred": [
      "ניצול חולשה פוליטית לכאורה של הממשל האמריקאי בעקבות בחירות האמצע להפגת לחץ",
      "הידוק שיתוף הפעולה הצבאי והמדיני עם רוסיה ומדינות האזור"
     ],
     "forecast": [
      "שמירה על אופציה של לחץ צבאי וימי במקביל לניהול משא ומתן דיפלומטי"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת השגת יכולת גרעינית על ידי איראן",
      "הגנה על בעלות ברית ונתיבי שיט במפרץ"
     ],
     "inferred": [
      "שמירה על מרחב פעולה מדיני למרות ביקורת קונגרסית ותוצאות בחירות האמצע",
      "בחינת אפשרויות תקיפה נוספות לצד ערוצי תיווך"
     ],
     "forecast": [
      "המשך לחץ צבאי וכלכלי בשילוב בדיקת פשרות אפשריות בנושא הגרעין"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות איראנית והסרת איומים בגבולותיה"
     ],
     "inferred": [
      "היערכות לאפשרות של הסלמה כוללת במידה שעימות ישיר יתפרץ מול טהראן, כולל חזית מול חיזבאללה"
     ],
     "forecast": [
      "מעקב דרוך אחרי התפתחויות בזירה המדינית והצבאית מול איראן ושלוחותיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack?traffic_source=rss",
     "accessed_at": "2026-11-06T00:40:37+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86313659/Iran-downs-fifth-and-sixth-MQM-170-US-drones-over-Qeshm-Island",
     "accessed_at": "2026-11-06T00:40:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133149",
     "accessed_at": "2026-11-06T00:40:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49323",
     "accessed_at": "2026-11-06T00:40:37+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skgb6bqpge",
     "accessed_at": "2026-11-06T00:40:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-05T07:18:19+00:00",
  "changes": {
   "IRAN-11060040-01": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "שריפת מכליות נפט וגוררת במצר הורמוז",
    "score": 0.65
   },
   "IRAN-11060040-02": {
    "kind": "new"
   },
   "IRAN-11060040-03": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-06T0051__ukraine-202611060051.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-06T00:51:38+00:00",
   "window": {
    "from": "2026-11-05T00:51:38+00:00",
    "to": "2026-11-06T00:51:38+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611060051"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בדגש על תקיפות רוסיות בלתי פוסקות נגד תשתיות האנרגיה והייצור באוקראינה, הגורמות לשיבושים קשים באספקת החשמל והמים. במקביל, נרשמת פעילות דיפלומטית ענפה הכוללת דיונים על הסדרי בטחון עתידיים, דרישות לסיוע כספי וצבאי נוסף מצד אוקראינה, ומפגשים מדיניים בארצות הברית.",
   "fronts": [
    {
     "name": "החזית האווירית והאנרגטית",
     "status": "פעילה ואינטנסיבית"
    },
    {
     "name": "חזית המדינית והדיפלומטית",
     "status": "פעילה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11060051-01",
     "title": "ספרד מעבירה סיוע צבאי לאוקראינה",
     "summary": "ספרד מתכוונת לספק לאוקראינה סיוע צבאי בשווי 490 מיליון דולר לחיזוק הגנה אווירית",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T22:21:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T22:21:17+00:00",
     "last_update_at": "2026-11-05T22:21:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/spain-to-provide-ukraine-490-million-in-military-aid-zelensky-says/",
       "published_at": "2026-11-05T22:21:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11060051-02",
     "title": "מתקפות רוסיות על תשתיות אנרגיה באוקראינה",
     "summary": "מתקפות רוסיות פגעו בתשתיות אנרגיה ותחנות כוח באוקראינה וגרמו לשיבושים באספקת המים והחשמל בקייב",
     "axis": "תקיפות והפגזות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T19:07:39+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-05T19:07:39+00:00",
     "last_update_at": "2026-11-05T21:20:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_799de924e62143b3",
       "url": "https://kyivindependent.com/ukraine-war-latest-kyiv-water-supply-disrupted-after-power-fluctuations-due-to-russian-attacks/",
       "published_at": "2026-11-05T19:07:39+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_0de7e9a10424d9d0",
       "url": "https://tass.com/world/2213571",
       "published_at": "2026-11-05T21:20:00+00:00"
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
     "id": "UKRAINE-11060051-03",
     "title": "פגיעה במתקן ייצור במחוז קייב",
     "summary": "כוחות רוסיים תקפו מתקן ייצור ומחסן במחוז קייב, שני בני אדם נפצעו",
     "axis": "תקיפות והפגזות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T17:53:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T17:53:00+00:00",
     "last_update_at": "2026-11-05T17:53:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_6c9d6f9f52cfecb5",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/05/8061467/",
       "published_at": "2026-11-05T17:53:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11060051-04",
     "title": "מפגש משלחות בבית הלבן",
     "summary": "נציגים מרוסיה ומאוקראינה השתתפו באירוע בבית הלבן והעניקו מתנות למלאניה טראמפ",
     "axis": "משא ומתן דיפלומטי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T13:09:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T13:09:12+00:00",
     "last_update_at": "2026-11-05T21:04:53+00:00",
     "what_is_not_verified": "טענות על תיווך הפסקת אש מקומית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_81d72e8e829a9795",
       "url": "https://www.theguardian.com/world/video/2026/nov/05/russian-and-ukrainian-officials-thank-melania-trump-for-brokering-ceasefire-video",
       "published_at": "2026-11-05T21:04:53+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_5568d64cad0bb4f5",
       "url": "https://www.theguardian.com/us-news/video/2026/nov/05/putin-envoy-thanks-melania-trump-for-brokering-ceasefire-video",
       "published_at": "2026-11-05T18:35:22+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_81d72e8e829a9795",
       "url": "https://t.me/alexmehacarmel/49320",
       "published_at": "2026-11-05T16:43:42+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_887b9f9c3299b856",
       "url": "https://www.bbc.co.uk/news/articles/cm87zvpzwq0no?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-05T13:09:12+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      },
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-11060051-05",
     "title": "מעצר חשודים בריגול ואספקת רכיבי נשק בפולין",
     "summary": "הרשויות בפולין עצרו שישה חשודים באספקת רכיבי נשק בלתי חוקית לרוסיה",
     "axis": "סנקציות ופעילות חשאית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T20:56:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T20:56:53+00:00",
     "last_update_at": "2026-11-05T20:56:53+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_9aeb2cb72d856270",
       "url": "https://meduza.io/en/news/2026/11/05/polish-authorities-detain-a-russian-woman-and-five-poles-on-suspicion-of-illegally-supplying-weapons-components-to-russia",
       "published_at": "2026-11-05T20:56:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11060051-06",
     "title": "מעצר קצין מודיעין קנדי באשמת העברת מידע לאוקראינה",
     "summary": "איש שירות קנדי צפוי למשפט צבאי באשמת מסירת מידע מבצעי לאוקראינה",
     "axis": "סיוע צבאי ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T21:13:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T21:13:04+00:00",
     "last_update_at": "2026-11-05T21:13:04+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_a990f900b71910b0",
       "url": "https://kyivindependent.com/canadian-service-member-to-face-court-martial-for-sharing-sensitive-information-with-ukraine/",
       "published_at": "2026-11-05T21:13:04+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על תיווך הפסקת אש מקומית באולשקי על ידי גורמים אמריקאיים",
    "פרטי הסכמים עתידיים בין ארצות הברית לרוסיה בנושא ביטחון אירופה",
    "תוכניות מדויקות של משא ומתן עתידי באבו דאבי"
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
     "value": 1.1224,
     "unit": "USD",
     "change_pct": -0.38,
     "source_id": "src_ecb",
     "as_of": "2026-11-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת סיוע צבאי וכלכלי נוסף מארצות הברית ומדינות אירופה",
      "חיזוק מערכות ההגנה האווירית ושיקום תשתיות האנרגיה הפגועות"
     ],
     "inferred": [
      "שמירת תמיכה דו-מפלגתית בארה\"ב למרות תוצאות הבחירות",
      "גיוס ציוד חלופי מהיר לשמירת רשת החשמל"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים להבטחת תקציבי סיוע לשנת 2027"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך פגיעה בתשתיות צבאיות ואנרגטיות של אוקראינה"
     ],
     "inferred": [
      "שחיקת היכולת הכלכלית והאנרגטית של אוקראינה כדי להקשות על המשך הלחימה",
      "יצירת ערוצי הידברות ישירים או עקיפים עם ממשל בארה\"ב לעיצוב הסדרים"
     ],
     "forecast": [
      "הגברת לחץ צבאי בתקופת החורף באמצעות מתקפות אוויריות מרוכזות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cm87zvpzwq0no?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/video/2026/nov/05/putin-envoy-thanks-melania-trump-for-brokering-ceasefire-video",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/canadian-service-member-to-face-court-martial-for-sharing-sensitive-information-with-ukraine/",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/05/polish-authorities-detain-a-russian-woman-and-five-poles-on-suspicion-of-illegally-supplying-weapons-components-to-russia",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/05/8061467/",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2213571",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49320",
     "accessed_at": "2026-11-06T00:51:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-05T07:21:05+00:00",
  "changes": {
   "UKRAINE-11060051-01": {
    "kind": "new"
   },
   "UKRAINE-11060051-02": {
    "kind": "new"
   },
   "UKRAINE-11060051-03": {
    "kind": "new"
   },
   "UKRAINE-11060051-04": {
    "kind": "new"
   },
   "UKRAINE-11060051-05": {
    "kind": "new"
   },
   "UKRAINE-11060051-06": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-06T0058__north-202611060058.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-06T00:58:04+00:00",
   "window": {
    "from": "2026-11-05T00:58:04+00:00",
    "to": "2026-11-06T00:58:04+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611060058"
   },
   "summary": "בזירה הצפונית נמשכות תקיפות צה\"ל בלבנון ובדרום סוריה, לצד פעילות מוגברת של חיזבאללה סביב הקו הצהוב והיערכות לאפשרות של הסלמה רחבה יותר. במקביל, ממשלת לבנון פועלת לעידוד יציבות כלכלית, שיקום הדרום והידוק שיתופי פעולה אזוריים.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה עם תקיפות אוויריות וארטילריות של צה\"ל וחיכוך גובר מצד חיזבאללה"
    },
    {
     "name": "חזית סוריה",
     "status": "פעילה עם פשיטות קרקעיות וירי ארטילרי נקודתי של צה\"ל בדרום המדינה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11060058-01",
     "title": "תקיפות והפגזות בדרום לבנון",
     "summary": "מטוסי קרב ישראליים תקפו מטרות במספר אזורים בדרום לבנון, וכן נורו פגזי ארטילריה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T18:13:19+00:00",
     "last_update_at": "2026-11-05T20:44:13+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a406e25e2f9d301f",
       "url": "https://english.almanar.com.lb/article/147372/",
       "published_at": "2026-11-05T20:44:13+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_8e94bfc14c0e87ff",
       "url": "https://english.almanar.com.lb/article/147362/",
       "published_at": "2026-11-05T20:36:55+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a406e25e2f9d301f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strikes-target-lebanons-nabatieh-tyre-districts",
       "published_at": "2026-11-05T20:08:04+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_a406e25e2f9d301f",
       "url": "https://t.me/abualiexpress/133156",
       "published_at": "2026-11-05T18:13:19+00:00"
      }
     ],
     "places": [
      {
       "name": "ברעשית, לבנון",
       "lat": 33.1785,
       "lon": 35.4372
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-11060058-02",
     "title": "פשיטה ישראלית באזור קוניטרה בסוריה",
     "summary": "כוחות הצבא הישראלי ביצעו פשיטה בכפר אל-חוריה שבמרחב קוניטרה בדרום סוריה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T16:07:48+00:00",
     "last_update_at": "2026-11-05T16:07:48+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-raids-southern-syria-s-quneitra-countryside/4113240",
       "published_at": "2026-11-05T16:07:48+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חוריה, סוריה",
       "lat": 36.2579,
       "lon": 38.8643
      }
     ]
    },
    {
     "id": "NORTH-11060058-03",
     "title": "נפילת פגזים בדרום סוריה",
     "summary": "שני פגזי ארטילריה ישראליים נפלו באזור כפרי מדרום-מערב לדמשק בסוריה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T17:51:14+00:00",
     "last_update_at": "2026-11-05T17:51:14+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-fires-2-artillery-shells-in-rural-area-southwest-of-damascus-/4113329",
       "published_at": "2026-11-05T17:51:14+00:00"
      }
     ],
     "places": [
      {
       "name": "בית ג'ן, סוריה",
       "lat": 33.3145,
       "lon": 35.8794
      }
     ]
    },
    {
     "id": "NORTH-11060058-04",
     "title": "תקרית ירי בגבול לבנון-סוריה",
     "summary": "כוח של צבא לבנון ירה לעבר רכב שעקף מחסום דרכים בנתיב הברחה בלתי חוקי בגבול סוריה-לבנון, דבר שהביא למותה של אישה סורית ולפציעתם של אחרים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T13:55:38+00:00",
     "last_update_at": "2026-11-05T13:55:38+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_eb473781bd18d3e5",
       "url": "https://english.almanar.com.lb/article/147242/",
       "published_at": "2026-11-05T13:55:38+00:00"
      }
     ],
     "places": [
      {
       "name": "עורסאל, לבנון",
       "lat": 34.1473,
       "lon": 36.4591
      }
     ]
    }
   ],
   "not_verified": [
    "הערכת מערכת הביטחון הישראלית בנוגע לכוונות המדויקות של חיזבאללה במקרה של עימות כולל מול איראן",
    "היקף הפעילות המדויק של כוחות זרים או טורקיים בסוריה ובלבנון מעבר למדווח"
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
     "value": 3.1716,
     "unit": "ILS",
     "change_pct": 0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על גבולות המדינה ותושבי הצפון"
     ],
     "inferred": [
      "יצירת הרתעה מול חיזבאללה והרחקתו מן הגבול",
      "פגיעה בתשתיות טרור וסיכול התבססות איראנית בגבולות סוריה ולבנון"
     ],
     "forecast": [
      "המשך התקיפות הנקודתיות למניעת התעצמות האויב",
      "היערכות לאפשרות של פתיחת חזית נוספת מצד חיזבאללה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "הגנה על לבנון והתנגדות לתוקפנות הישראלית"
     ],
     "inferred": [
      "הגברת החיכוך סביב הקו הצהוב כדי לייצר מנוף לחץ מטעם ציר ההתנגדות ואיראן",
      "שמירה על יכולות צבאיות והיערכות לעימות אפשרי"
     ],
     "forecast": [
      "שמירה על מוכנות להסלמה רחבה במקרה של עימות ישיר בין ישראל לאיראן"
     ]
    },
    {
     "actor": "לבנון (ממשל וצבא)",
     "declared": [
      "שמירה על ריבונות המדינה והימנעות מעימותים אזוריים",
      "אכיפת חוק ומניעת הברחות גבול"
     ],
     "inferred": [
      "ניסיון לייצב את הכלכלה ולקדם פרויקטים שיקומיים בעזרת גורמים בינלאומיים ואזוריים",
      "הגבלת פעילות גורמים חמושים לא-מדינתיים בשטח המדינה"
     ],
     "forecast": [
      "המשך המאמצים הדיפלומטיים והכלכליים לשיקום אזורים שנפגעו והבטחת יציבות פיננסית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/147242/",
     "accessed_at": "2026-11-06T00:58:04+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-fires-2-artillery-shells-in-rural-area-southwest-of-damascus-/4113329",
     "accessed_at": "2026-11-06T00:58:04+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strikes-target-lebanons-nabatieh-tyre-districts",
     "accessed_at": "2026-11-06T00:58:04+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133156",
     "accessed_at": "2026-11-06T00:58:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-05T07:25:14+00:00",
  "changes": {
   "NORTH-11060058-01": {
    "kind": "new"
   },
   "NORTH-11060058-02": {
    "kind": "new"
   },
   "NORTH-11060058-03": {
    "kind": "new"
   },
   "NORTH-11060058-04": {
    "kind": "possible",
    "prev": "ירי ארטילרי ואוויר בסביבת כפרים בדרום לבנון",
    "score": 0.467
   }
  }
 }
};
