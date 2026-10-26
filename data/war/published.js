/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-26T1701__yemen-202610261701.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-26T17:01:16+00:00",
   "window": {
    "from": "2026-10-25T17:01:16+00:00",
    "to": "2026-10-26T17:01:16+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610261701"
   },
   "summary": "הלחימה בתימן נמשכת בין הממשלת המוכרת לבין החות'ים הנתמכים בידי איראן, הממשיכים לשגר טילים וכטב\"מים לעבר מתקנים ותשתיות בסעודיה. במקביל, סעודיה ומדינות אזוריות מקיימות מגעים דיפלומטיים דחופים בטהרן לצד היערכות ביטחונית מצרית להגנת הממלכה.",
   "fronts": [
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעילה (תקיפות חות'יות ויירוטים סעודיים)"
    },
    {
     "name": "חזית פנים תימן",
     "status": "פעילה (לחימה ומצור סביב תעז, פיצוצים בסנעא ובמוח'א)"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10261701-01",
     "title": "תקיפות החות'ים על יעדים בסעודיה",
     "summary": "החות'ים טענו שביצעו תקיפות נגד שדה התעופה בריאד ונגד תחנות שאיבת נפט, בעוד קואליציית המדינות בהובלת סעודיה דיווחה על יירוט טילים והשמדת משגרים בסנעא.",
     "axis": "ציר תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-26T04:46:30+00:00",
     "last_update_at": "2026-10-26T16:25:29+00:00",
     "what_is_not_verified": "טענות החות'ים על פגיעה מוצלחת בשדה התעופה ובתחנות הנפט לא אושרו רשמית בידי סעודיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48975",
       "published_at": "2026-10-26T16:25:29+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1j4syp2fx",
       "published_at": "2026-10-26T16:01:54+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/26/saudi-pakistani-turkish-delegation-iran-avert-flare-up-conflict-us",
       "published_at": "2026-10-26T14:03:06+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthis-say-they-attacked-saudi-oil-pumping-stations-riyadh-airport-fighting",
       "published_at": "2026-10-26T04:46:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "סנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "ג'דה, סעודיה",
       "lat": 21.5504,
       "lon": 39.1742
      }
     ]
    },
    {
     "id": "YEMEN-10261701-02",
     "title": "אישור הפרלמנט המצרי לתמיכה צבאית בסעודיה",
     "summary": "הפרלמנט במצרים אישר לנשיא עבד אל-פתח א-סיסי לספק תמיכה צבאית הגנתית לסעודיה בעקבות התקפות החות'ים.",
     "axis": "ציר מצרים-סעודיה-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T13:45:10+00:00",
     "last_update_at": "2026-10-26T16:30:23+00:00",
     "what_is_not_verified": "לא מאומת איזה סיוע צבאי מעשי יינתן בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_c6ad8f3960481a10",
       "url": "https://www.al-monitor.com/originals/2026/10/egypt-parliament-authorises-military-support-saudi-arabia",
       "published_at": "2026-10-26T16:30:23+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_c6ad8f3960481a10",
       "url": "https://www.aljazeera.com/news/2026/10/26/egyptian-parliament-authorises-military-aid-for-saudi-arabia?traffic_source=rss",
       "published_at": "2026-10-26T15:41:29+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_c6ad8f3960481a10",
       "url": "https://www.al-monitor.com/originals/2026/10/egypt-approves-military-support-saudi-arabia-after-houthi-attacks-escalate",
       "published_at": "2026-10-26T13:46:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_525c9641abce4d25",
       "url": "https://www.newarab.com/news/egypt-parliament-authorises-defensive-support-saudi-arabia",
       "published_at": "2026-10-26T13:45:10+00:00"
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
     "id": "YEMEN-10261701-03",
     "title": "פגישת ברית מכה בטהרן",
     "summary": "נציגים בכירים מסעודיה, טורקיה ופקיסטן נפגשו בטהרן עם בכירים איראנים לדיונים מדיניים וביטחוניים במטרה להביא להגעת הסדר ולהפחתת המתיחות האזורית.",
     "axis": "ציר אזורי (סעודיה-איראן-טורקיה-פקיסטן)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T06:43:01+00:00",
     "last_update_at": "2026-10-26T16:37:05+00:00",
     "what_is_not_verified": "האם התקבלה עסקה חשאית הכוללת העברת כספים לחות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/mecca-alliance-visits-tehran-push-end-israeli-us-war-and-build-regional-security",
       "published_at": "2026-10-26T16:37:05+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1j4syp2fx",
       "published_at": "2026-10-26T16:01:54+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21712024",
       "published_at": "2026-10-26T14:20:04+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-saudi-arabia-turkey-and-pakistan-agree-further-talks",
       "published_at": "2026-10-26T10:14:39+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132564",
       "published_at": "2026-10-26T06:43:01+00:00"
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
     "id": "YEMEN-10261701-04",
     "title": "משבר הומניטרי ופגיעה במגזר הבריאות בתעז",
     "summary": "מחסור חמור בדלק ובחמצן בבתי חולים בעיר תעז בתימן, עקב מצור והמשך הלחימה, הביא לצמצום חד בפעילות אינקובטורים לתינוקות.",
     "axis": "ציר פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-26T15:27:35+00:00",
     "last_update_at": "2026-10-26T15:46:34+00:00",
     "what_is_not_verified": "הנתונים המדויקים על כלל הנפגעים מחוץ לבתי החולים המוזכרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/no-fuel-keep-babies-warm-shortages-push-hospitals-yemens-taiz-brink",
       "published_at": "2026-10-26T15:46:34+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154671",
       "published_at": "2026-10-26T15:28:11+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154670",
       "published_at": "2026-10-26T15:27:35+00:00"
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
     "id": "YEMEN-10261701-05",
     "title": "פיצוצים בסנעא ובמוח'א",
     "summary": "תושבים דיווחו על פיצוצים עזים בסנעא ובאזור החוף במוח'א, שגרמו לנזק למבנים ולבית חולים.",
     "axis": "ציר פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T14:41:53+00:00",
     "last_update_at": "2026-10-26T14:41:53+00:00",
     "what_is_not_verified": "זהות הגורם המדויק שביצע את התקיפות בכל אתר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/blasts-hit-yemens-capital-and-red-sea-coast-residents-report",
       "published_at": "2026-10-26T14:41:53+00:00"
      }
     ],
     "places": [
      {
       "name": "סנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "מוח'א, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    }
   ],
   "not_verified": [
    "טענות דיפלומטיות על כך ששר ההגנה הסעודי הביא עמו מיליארד דולר במטוס צבאי כדי לקדם הפסקת אש עם החות'ים.",
    "דיווחים על מגעים להעברת כוח צבאי סורי מסעודיה לתימן.",
    "היקף הנזק המדויק שנגרם ממתקפות החות'ים על שדה התעופה בריאד ומתקני הנפט."
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
     "value": 3.0799,
     "unit": "ILS",
     "change_pct": -1.33,
     "source_id": "src_ecb",
     "as_of": "2026-10-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת תשתיות ונמלי תעופה בסעודיה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי על סעודיה ובנות בריתה",
      "חיזוק מעמדם האזורי באמצעות זיקה לאיראן"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר יעדים בסעודיה כל עוד לא יושג הסדר"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הגנה על שטחי הממלכה ותשתיותיה מפני מתקפות החות'ים",
      "קידום פתרונות דיפלומטיים והפחתת הסלמה אזורית"
     ],
     "inferred": [
      "ניסיון להגיע להבנות עם איראן כדי לרסן את החות'ים",
      "גיוס תמיכה צבאית אזורית (מצרים ומדינות ברית מכה)"
     ],
     "forecast": [
      "חיזוק מערכות ההגנה האווירית ושיתוף פעולה צבאי עם מצרים"
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "מתן סיוע צבאי הגנתי לסעודיה להגנה על גבולותיה ללא תקיפה בתימן"
     ],
     "inferred": [
      "שמירה על יציבות מרחב ים סוף ומצר באב אל-מנדב החיוניים לתעלת סואץ"
     ],
     "forecast": [
      "פריסת אמצעי הגנה לפי הצורך וקידום ערוצי דיפלומטיה"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "חיזוק שיתוף הפעולה הביטחוני והאזורי עם מדינות האזור"
     ],
     "inferred": [
      "תמיכה בשלוחיה (החות'ים) לצד שמירת חזות של תיווך ומניעת הסלמה כוללת"
     ],
     "forecast": [
      "המשך קיום מגעים דיפלומטיים במקביל להמשך התמיכה בציר ההתנגדות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/26/egyptian-parliament-authorises-military-aid-for-saudi-arabia?traffic_source=rss",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/no-fuel-keep-babies-warm-shortages-push-hospitals-yemens-taiz-brink",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/26/saudi-pakistani-turkish-delegation-iran-avert-flare-up-conflict-us",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21712024",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/blasts-hit-yemens-capital-and-red-sea-coast-residents-report",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/iran-saudi-arabia-turkey-and-pakistan-agree-further-talks",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154670",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132564",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48975",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1j4syp2fx",
     "accessed_at": "2026-10-26T17:01:16+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-26T00:40:18+00:00",
  "changes": {
   "YEMEN-10261701-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים וכטבמים של החות'ים לעבר נמל התעופה בריאד ויעדים בדרום סעודיה",
    "score": 1.0
   },
   "YEMEN-10261701-02": {
    "kind": "new"
   },
   "YEMEN-10261701-03": {
    "kind": "new"
   },
   "YEMEN-10261701-04": {
    "kind": "possible",
    "prev": "פגיעות באזרחים במחוז תעז וקריאה של האפיפיור להסרת המצור",
    "score": 0.633
   },
   "YEMEN-10261701-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-26T1657__iran-202610261657.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-26T16:57:05+00:00",
   "window": {
    "from": "2026-10-25T16:57:05+00:00",
    "to": "2026-10-26T16:57:05+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610261657"
   },
   "summary": "הזירה מאופיינת במתיחות גוברת סביב איום מתקפה מתחדשת מצד ישראל וארה\"ב נגד איראן, לצד מאמצים דיפלומטיים אזוריים של מדינות כמו סעודיה, טורקיה ופקיסטן לבלום הסלמה. במקביל, איראן ממשיכה לתמוך בשלוחותיה ובהן חיזבאללה המתחמש מחדש, בעוד גורמים בינלאומיים מזהירים מפני השלכות הרסניות במפרץ.",
   "fronts": [
    {
     "name": "החזית האיראנית-ישראלית-אמריקאית",
     "status": "מתיחות גבוהה לקראת עימות אפשרי והיערכות מבצעית"
    },
    {
     "name": "החזית הלבנונית",
     "status": "שיקום כוחות והתחמשות של חיזבאללה בגיבוי איראני"
    },
    {
     "name": "חזית המפרץ והים האדום",
     "status": "איומי תקיפה של שלוחות איראן על תשתיות ומעורבות אזורית להגנה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10261657-01",
     "title": "פגישת ברית מכה בטהרן",
     "summary": "נציגי סעודיה, טורקיה ופקיסטן קיימו פגישה בטהרן עם בכירי ביטחון איראניים כדי לדון בהפחתת המתיחות מול ישראל וארה\"ב ובפעילות האזורית.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T13:28:56+00:00",
     "last_update_at": "2026-10-26T16:37:05+00:00",
     "what_is_not_verified": "היקף ההסכמות המדויק או קיומה של עסקת כספים חשאית מול החות'ים אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9f9f9870ff3d2c3e",
       "url": "https://www.middleeasteye.net/news/mecca-alliance-visits-tehran-push-end-israeli-us-war-and-build-regional-security",
       "published_at": "2026-10-26T16:37:05+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_9f9f9870ff3d2c3e",
       "url": "https://en.irna.ir/news/86304211/Tehran-summit-press-statement-Talks-on-regional-peace-and-security",
       "published_at": "2026-10-26T16:34:02+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_9f9f9870ff3d2c3e",
       "url": "https://www.ynet.co.il/news/article/b1j4syp2fx",
       "published_at": "2026-10-26T16:01:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_9f9f9870ff3d2c3e",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-arabias-kbs-top-turkish-and-pakistani-officials-hold-rare-meeting-iran-what",
       "published_at": "2026-10-26T14:15:05+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_9f9f9870ff3d2c3e",
       "url": "https://t.me/abualiexpress/132585",
       "published_at": "2026-10-26T13:28:56+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "נמל התעופה מהרבאד, איראן",
       "lat": 35.6881,
       "lon": 51.3136
      }
     ]
    },
    {
     "id": "IRAN-10261657-02",
     "title": "דיווחים על הזרמת כספים איראניים לחיזבאללה",
     "summary": "מקורות ביטחוניים דיווחו כי איראן העבירה עשרות עד מאות מיליוני דולרים לחיזבאללה כדי לסייע לו בשיקום יכולותיו הצבאיות, הכטב\"מים ומערכי הפיקוד.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T14:55:14+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-26T14:55:14+00:00",
     "last_update_at": "2026-10-26T15:47:00+00:00",
     "what_is_not_verified": "סכומי הכסף המדויקים ומצב מלאי הנשק המעודכן אינם מאומתים באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_reuters",
       "url": "https://t.me/lelotsenzura/94810",
       "published_at": "2026-10-26T15:47:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_reuters",
       "url": "https://www.al-monitor.com/originals/2026/10/hezbollah-readies-new-regional-war-funds-iran-sources-say",
       "published_at": "2026-10-26T15:46:34+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_reuters",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21712635",
       "published_at": "2026-10-26T15:38:20+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_reuters",
       "url": "https://t.me/alexmehacarmel/48973",
       "published_at": "2026-10-26T15:02:46+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_reuters",
       "url": "https://www.ynet.co.il/news/article/bjv6vj63fg",
       "published_at": "2026-10-26T14:55:14+00:00"
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
     "id": "IRAN-10261657-03",
     "title": "אישור פרלמנטרי במצרים לתמיכה צבאית בסעודיה",
     "summary": "הפרלמנט המצרי הסמיך את הנשיא לנקוט אמצעים לסיוע לסעודיה לנוכח איומי החות'ים באזור מצר באב אל-מנדב.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T13:46:33+00:00",
     "last_update_at": "2026-10-26T16:01:54+00:00",
     "what_is_not_verified": "האם פריסת מערכות ההגנה בפועל בוצעה בשטח אינה מאומתת לחלוטין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_cf44d1d1d441d8f8",
       "url": "https://www.ynet.co.il/news/article/b1j4syp2fx",
       "published_at": "2026-10-26T16:01:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_cf44d1d1d441d8f8",
       "url": "https://www.al-monitor.com/originals/2026/10/egypt-approves-military-support-saudi-arabia-after-houthi-attacks-escalate",
       "published_at": "2026-10-26T13:46:33+00:00"
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
     "id": "IRAN-10261657-04",
     "title": "ניסויי טילים בליסטיים באיראן",
     "summary": "הופיעו דיווחים חוזרים על ניסויי טילים בליסטיים שביצעה איראן במספר מחוזות במהלך חודש אוקטובר.",
     "axis": "ציר איראן והשלוחות מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T14:20:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-26T14:20:51+00:00",
     "last_update_at": "2026-10-26T14:39:17+00:00",
     "what_is_not_verified": "היקף ההצלחה של הניסויים והאם מדובר בהכנה למתקפה מתואמת אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_telegram_channel",
       "url": "https://t.me/lelotsenzura/94809",
       "published_at": "2026-10-26T14:39:17+00:00"
      },
      {
       "source_id": "src_tg_geostrategy",
       "source_root_id": "or_telegram_channel",
       "url": "https://t.me/GeoStrategyIL/514",
       "published_at": "2026-10-26T14:20:51+00:00"
      }
     ],
     "places": [
      {
       "name": "יזד, איראן",
       "lat": 31.9052,
       "lon": 54.3701
      },
      {
       "name": "אספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      },
      {
       "name": "תבריז, איראן",
       "lat": 38.0739,
       "lon": 46.2979
      }
     ]
    }
   ],
   "not_verified": [
    "קיומה של עסקת מיליארד דולר בין סעודיה לחות'ים בתיווך איראני",
    "התרחשות מיידית של מתקפה אמריקאית-ישראלית בתוך 96 שעות",
    "חילוקי דעות פנימיים לכאורה בין הדרג המדיני בישראל לבין הרמטכ\"ל"
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
     "value": 3.0799,
     "unit": "ILS",
     "change_pct": -1.33,
     "source_id": "src_ecb",
     "as_of": "2026-10-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "תמיכה באחדות בין מדינות מוסלמיות מול איומים",
      "סירוב לדון בנושא הגרעין עד שדרישותיה ייענו"
     ],
     "inferred": [
      "שימור ושיקום יכולות שלוחיה האזוריים כמו חיזבאללה",
      "הרתעת ארה\"ב וישראל באמצעות ניסויי טילים ואיומי תגובה על תשתיות"
     ],
     "forecast": [
      "המשך חימוש השלוחות בלבנון ובאזורים נוספים",
      "החרפת העימות הכלכלי והמדיני סביב נתיבי השיט והאנרגיה"
     ]
    },
    {
     "actor": "ישראל וארה\"ב",
     "declared": [],
     "inferred": [
      "הכנה אפשרית לתקיפות נוספות נגד מתקנים ופעילות באיראן",
      "בלימת ההתחמשות המחודשת של שלוחות איראן בגבולותיה של ישראל"
     ],
     "forecast": [
      "המשך דריכות מבצעית גבוהה אל מול איומי תגובה איראניים",
      "היערכות לתגובה צבאית אפשרית במקרה של הסלמה"
     ]
    },
    {
     "actor": "סעודיה ומדינות האזור (ברית מכה)",
     "declared": [
      "קידום רגיעה, הפחתת מתיחות ותמיכה בתווך דיפלומטי",
      "חיזוק הביטחון האזורי ללא תלות מלאה בוושינגטון"
     ],
     "inferred": [
      "ניסיון לבלום פגיעה בתשתיות הכלכליות והאנרגטיות שלהן מצד שלוחות איראן",
      "יצירת מסגרת הגנה עצמאית מול איומים אזוריים"
     ],
     "forecast": [
      "המשך מגעים דיפלומטיים מול טהרן ומדינות נוספות להשגת הסכמים",
      "הרחבת שיתופי הפעולה הביטחוניים בין מדינות האזור להגנה מפני מיליציות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/egypt-approves-military-support-saudi-arabia-after-houthi-attacks-escalate",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86304211/Tehran-summit-press-statement-Talks-on-regional-peace-and-security",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21712635",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/mecca-alliance-visits-tehran-push-end-israeli-us-war-and-build-regional-security",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132585",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48973",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_tg_geostrategy",
     "url": "https://t.me/GeoStrategyIL/514",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94809",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1j4syp2fx",
     "accessed_at": "2026-10-26T16:57:05+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T14:32:55+00:00",
  "changes": {
   "IRAN-10261657-01": {
    "kind": "new"
   },
   "IRAN-10261657-02": {
    "kind": "new"
   },
   "IRAN-10261657-03": {
    "kind": "new"
   },
   "IRAN-10261657-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-26T0341__ukraine-202610260341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-26T03:41:54+00:00",
   "window": {
    "from": "2026-10-25T03:41:54+00:00",
    "to": "2026-10-26T03:41:54+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610260341"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות תקיפות אוויריות, רחפנים ופגיעה בתשתיות, לצד מאמצים דיפלומטיים לקיום שיחות שלום משולשות בהשתתפות אוקראינה, רוסיה וארצות הברית. אוקראינה מתמודדת עם אתגרי אספקה וקישוריות אינטרנט לווייני, בעוד רוסיה ממשיכה לתקוף מטרות אזרחיות וצבאיות בשטח אוקראינה ומדווחת על יירוטי רחפנים נרחבים.",
   "fronts": [
    {
     "name": "חזית חארקוב",
     "status": "פעילה"
    },
    {
     "name": "חזית דרום אוקראינה (חרסון וזפוריז'יה)",
     "status": "פעילה"
    },
    {
     "name": "המרחב האווירי ועומק הרוסי",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10260341-01",
     "title": "הקמת מסדרון נגד רחפנים בחארקוב",
     "summary": "הותקנו רשתות נגד רחפנים לאורך מקטע של כביש בחארקוב.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:32:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T00:32:00+00:00",
     "last_update_at": "2026-10-26T00:32:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_2f2fda3a3e3da816",
       "url": "https://www.ukrinform.net/rubric-defense/4177991-kharkiv-establishes-first-antidrone-corridor.html",
       "published_at": "2026-10-26T00:32:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חארקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10260341-02",
     "title": "פגיעה באוטובוס בחרסון מתקיפת רחפן",
     "summary": "תקיפת רחפן רוסית פגעה באוטובוס בחרסון וגרמה למות אדם ולפצועים.",
     "axis": "רוסיה-אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T14:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T14:30:00+00:00",
     "last_update_at": "2026-10-25T14:30:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_19f396c655b44930",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059643/",
       "published_at": "2026-10-25T14:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-10260341-03",
     "title": "יירוט רחפנים מעל אזורים ברוסיה",
     "summary": "משרד ההגנה הרוסי דיווח על יירוט מספר רב של רחפנים אוקראיניים מעל שטחי רוסיה.",
     "axis": "רוסיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T07:11:26+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T07:11:26+00:00",
     "last_update_at": "2026-10-25T07:11:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_830b194613d0ad22",
       "url": "https://tass.com/defense/2207429",
       "published_at": "2026-10-25T07:11:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10260341-04",
     "title": "החזרת פעילות מערכת סטארשילד למהירות רגילה",
     "summary": "נשיא אוקראינה אישר כי פעילות סטארשילד חזרה למהירותה הרגילה לאחר הגבלות קודמות.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T19:02:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T19:02:26+00:00",
     "last_update_at": "2026-10-26T01:27:47+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_volodymyr_zelenskyy_interview",
       "url": "https://www.theguardian.com/world/2026/oct/26/ukraine-war-briefing-trilateral-us-ukraine-russia-talks-restart-november",
       "published_at": "2026-10-26T01:27:47+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_volodymyr_zelenskyy_interview",
       "url": "https://kyivindependent.com/ukraine-war-latest-starshield-operations-restored-to-normal-speed-zelensky-confirms-as-elon-musk-claims-ukraine-violated-starlink-terms/",
       "published_at": "2026-10-25T19:02:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10260341-05",
     "title": "תקיפות והרוגים באזורים שונים באוקראינה",
     "summary": "תקיפות של כוחות רוסיים גרמו להרוגים ולפצועים באזורים שונים באוקראינה, כולל דניפרופטרובסק וסומי.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T02:37:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T02:37:44+00:00",
     "last_update_at": "2026-10-25T03:41:54+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_ukrainian_regional_governors",
       "url": "https://www.theguardian.com/world/2026/oct/25/ukraine-war-briefing-kyiv-targets-russian-occupied-crimea-as-uk-and-france-conduct-joint-military-exercise",
       "published_at": "2026-10-25T02:37:44+00:00"
      }
     ],
     "places": [
      {
       "name": "סינלניקובו, אוקראינה",
       "lat": 48.3269,
       "lon": 35.5247
      }
     ]
    }
   ],
   "not_verified": [
    "נסיבות מותו של הפעיל מיכאיל מאוואשי",
    "טענות רוסיה בדבר היקף הנזקים והשחיתות באוקראינה"
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
     "value": 1.1193,
     "unit": "USD",
     "change_pct": -0.11,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "סירוב לדון בהגבלת הכוחות המזוינים או בנייטרליות כפויה",
      "דרישה לעצירת התקיפות על תשתיות האנרגיה כתנאי להפסקת תקיפות על בתי זיקוק"
     ],
     "inferred": [
      "שמירה על תמיכה בינלאומית וחיזוק קשרים עם ארצות הברית ומדינות אירופה",
      "המשך הגנה על תשתיות חיוניות ואוכלוסייה אזרחית"
     ],
     "forecast": [
      "השתתפות בשיחות משולשות מתוכננות",
      "המשך הפעלת מערכות הגנה אלקטרוניות ואוויריות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הפעילות הצבאית והגנה מפני תקיפות רחפנים",
      "היערכות לשיחות משולשות אפשריות לאחר נובמבר"
     ],
     "inferred": [
      "ניסיון להפעיל לחץ על אוקראינה באמצעות פגיעה בתשתיות ואספקה",
      "ביסוס שליטה באזורים הכבושים והיערכות מול מדינות המערב"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ושימוש במערכות הגנה מתקדמות",
      "ניהול מגעים דיפלומטיים מותנים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/25/ukraine-war-briefing-kyiv-targets-russian-occupied-crimea-as-uk-and-france-conduct-joint-military-exercise",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-starshield-operations-restored-to-normal-speed-zelensky-confirms-as-elon-musk-claims-ukraine-violated-starlink-terms/",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059643/",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2207429",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-defense/4177991-kharkiv-establishes-first-antidrone-corridor.html",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T14:44:21+00:00",
  "changes": {
   "UKRAINE-10260341-01": {
    "kind": "new"
   },
   "UKRAINE-10260341-02": {
    "kind": "new"
   },
   "UKRAINE-10260341-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מתקפת טילים ורחפנים באזורים שונים ברוסיה ובשטחי הכיבוש",
    "score": 1.0
   },
   "UKRAINE-10260341-04": {
    "kind": "new"
   },
   "UKRAINE-10260341-05": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "מתקפות רוסיות על מטרות באוקראינה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-26T1705__north-202610261705.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-26T17:05:35+00:00",
   "window": {
    "from": "2026-10-25T17:05:35+00:00",
    "to": "2026-10-26T17:05:35+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610261705"
   },
   "summary": "הגזרה הצפונית מתאפיינת בדריכות רבה, כאשר חיזבאללה פועל לשקום יכולותיו הצבאיות והכספיות בגיבוי איראני לצד המשך פעילות צבאית מצד ישראל בדרום לבנון. במקביל, טורקיה מעמיקה את מעורבותה בסוריה בתחומי התשתית והחינוך, ומתקיימים מגעים דיפלומטיים אזוריים בטהרן במטרה למנוע הסלמה רחבה.",
   "fronts": [
    {
     "name": "גבול לבנון-ישראל",
     "status": "פעיל חלקית / הפוגה מתוחה"
    },
    {
     "name": "סוריה",
     "status": "יציבות מתוחה והתרחבות השפעה טורקית"
    }
   ],
   "events": [
    {
     "id": "NORTH-10261705-01",
     "title": "תקיפות והפגזות של צבא ישראל בדרום לבנון",
     "summary": "הכוחות הישראליים ביצעו ירי ארטילרי ותקיפות אוויריות במספר מרחבים בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T15:35:22+00:00",
     "last_update_at": "2026-10-26T15:35:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/143067/",
       "published_at": "2026-10-26T15:35:22+00:00"
      }
     ],
     "places": [
      {
       "name": "ברעשיִת, לבנון",
       "lat": 33.1785,
       "lon": 35.4372
      }
     ]
    },
    {
     "id": "NORTH-10261705-02",
     "title": "שיגור מיירט לעבר מטרה חשודה בדרום לבנון",
     "summary": "דובר צה\"ל דיווח כי שוגר מיירט לעבר מטרה אווירית חשודה באזור פעילות כוחות צה\"ל בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T18:32:25+00:00",
     "last_update_at": "2026-10-25T18:32:25+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25477",
       "published_at": "2026-10-25T18:32:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10261705-03",
     "title": "פתיחת בית ספר טורקי בידיש בדמשק",
     "summary": "נחנך בית ספר בין-לאומי טורקי על שם ארדואן באזור דמשק.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T10:37:17+00:00",
     "last_update_at": "2026-10-26T10:37:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/turkish-involvement-in-syrias-education-sector-a-new-school-in-damascus-named-after-erdogan/",
       "published_at": "2026-10-26T10:37:17+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-10261705-04",
     "title": "פגישת ברית מכה בטהרן",
     "summary": "נציגים מסעודיה, טורקיה ופקיסטן נפגשו בטהרן עם בכירים איראנים לדיונים על ביטחון אזורי.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T13:07:25+00:00",
     "last_update_at": "2026-10-26T16:37:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/mecca-alliance-visits-tehran-push-end-israeli-us-war-and-build-regional-security",
       "published_at": "2026-10-26T16:37:05+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/964829/iran-mecca-pact-countries-agree-to-continue-talks-after-first-meeting/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964829",
       "published_at": "2026-10-26T13:07:25+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "היקף מדויק של אמצעי הלחימה שחיזבאללה הצליח לחדש",
    "פרטים מלאים על תוכניות ההתחמשות האיראניות של חיזבאללה",
    "תוצאות מלאות של המגעים הדיפלומטיים בטהרן"
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
     "value": 3.0799,
     "unit": "ILS",
     "change_pct": -1.33,
     "source_id": "src_ecb",
     "as_of": "2026-10-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות עוינת",
      "הגנה על גבולה הצפוני"
     ],
     "inferred": [
      "שימור חופש פעולה מבצעי בלבנון ובסוריה",
      "סיכול מאמצי ההתחמשות מחדש של חיזבאללה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדמות נגד תשתיות טרור",
      "היערכות לאפשרות של חידוש הלחימה המלאה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך ההתנגדות לכיבוש הישראלי"
     ],
     "inferred": [
      "שיקום מערכי הפיקוד, השליטה ומלאי אמצעי הלחימה",
      "הכנה לעימות אזורי רחב בתמיכה איראנית"
     ],
     "forecast": [
      "המשך הזרמת כספים והתחמשות בסיוע איראן",
      "שמירה על כוננות להסלמה אזורית"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "חיזוק שיתוף הפעולה האזורי והיציבות",
      "הגנה על זכויות ימיות ויצירת קשרים מוסדיים"
     ],
     "inferred": [
      "הרחבת ההשפעה הכלכלית, התרבותית והחינוכית בסוריה",
      "ביסוס מעמדה כשחקנית מובילה במתווה דיפלומטי אזורי"
     ],
     "forecast": [
      "העמקת המעורבות בשיקום סוריה",
      "השתתפות נוספת בפורומים דיפלומטיים אזוריים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/turkish-involvement-in-syrias-education-sector-a-new-school-in-damascus-named-after-erdogan/",
     "accessed_at": "2026-10-26T17:05:35+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/143067/",
     "accessed_at": "2026-10-26T17:05:35+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/964829/iran-mecca-pact-countries-agree-to-continue-talks-after-first-meeting/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964829",
     "accessed_at": "2026-10-26T17:05:35+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/mecca-alliance-visits-tehran-push-end-israeli-us-war-and-build-regional-security",
     "accessed_at": "2026-10-26T17:05:35+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25477",
     "accessed_at": "2026-10-26T17:05:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-26T00:43:21+00:00",
  "changes": {
   "NORTH-10261705-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות והפצצות של צה\"ל במספר מוקדים בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10261705-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירט לעבר מטרה אווירית בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10261705-03": {
    "kind": "new"
   },
   "NORTH-10261705-04": {
    "kind": "new"
   }
  }
 }
};
