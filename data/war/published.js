/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-28T1819__yemen-202609281819.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-28T18:19:11+00:00",
   "window": {
    "from": "2026-09-27T18:19:11+00:00",
    "to": "2026-09-28T18:19:11+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609281819"
   },
   "summary": "הלחימה בתימן מתחדשת בעוצמה בין החות'ים לבין כוחות ממשלת תימן הנתמכים בידי סעודיה, לצד התקפות חוצות גבולות לעבר שטחי סעודיה כולל שימוש בכטב\"מים. במקביל, מעורבות בינלאומית ואזורית גוברת סביב ניסיונות התמודדות עם האיומים הימיים והאוויריים של החות'ים.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית",
     "status": "פעילה עם החמרה בלחימה"
    },
    {
     "name": "החזית מול סעודיה",
     "status": "הסלמה בתקיפות אוויריות ויירוטים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09281819-01",
     "title": "הכרזה על גיוס כללי נגד החות'ים בתימן",
     "summary": "שלטונות תימן הלגיטימיים הכריזו על גיוס כללי לצורך לחימה נגד החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T16:22:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T16:22:45+00:00",
     "last_update_at": "2026-09-28T16:22:45+00:00",
     "what_is_not_verified": "היקף הביצוע וההשפעה המעשית של הגיוס אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48069",
       "published_at": "2026-09-28T16:22:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09281819-02",
     "title": "פגישת שר החוץ של סעודיה עם בכירים בארה\"ב על רקע הלחימה בתימן",
     "summary": "שר החוץ של סעודיה נפגש עם שר החוץ האמריקאי במסגרת ההתחזקות בלחימה מול החות'ים בתימן.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T15:42:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T15:42:15+00:00",
     "last_update_at": "2026-09-28T15:42:15+00:00",
     "what_is_not_verified": "לא מאומתים פרטים מלאים מתוך תוכן הפגישה הסגורה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_al_monitor",
       "url": "https://www.al-monitor.com/originals/2026/09/rubio-meets-saudi-fm-fight-against-yemens-houthis-intensifies",
       "published_at": "2026-09-28T15:42:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09281819-03",
     "title": "יירוט כטב\"מים וטילים בליסטיים סעודי לעבר אזור ריאד וח'מיס מושייט",
     "summary": "הקואליציה בהובלת סעודיה יירטה והשמידה כטב\"מים ששיגרו החות'ים לעבר מרחב ריאד וטילים בליסטיים לעבר ח'מיס מושייט.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T15:17:05+00:00",
     "last_update_at": "2026-09-28T15:17:05+00:00",
     "what_is_not_verified": "סיבת המעבר הזמני ללמידה מרחוק בבתי ספר בריאד טרם אומתה באופן רשמי מצד משרד החינוך.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/why-did-riyadh-schools-abruptly-switch-online-classes",
       "published_at": "2026-09-28T15:17:05+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ח'מיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-09281819-04",
     "title": "ממצאים ראשוניים של חקירה עיראקית על תקיפת צינור הנפט בסעודיה",
     "summary": "חקירה בעיראק מעלה כי משמרות המהפכה של איראן והחות'ים בתימן עמדו מאחורי שיגור כטב\"מים חמושים לעבר צינור הנפט המזרחי-מערבי בסעודיה מתחומי עיראק.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T11:52:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T11:52:30+00:00",
     "last_update_at": "2026-09-28T11:52:30+00:00",
     "what_is_not_verified": "הממצאים טרם הוגשו רשמית ובדיקתם נמצאת בשלבים סופיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/exclusive-irgc-houthis-behind-saudi-pipeline-attack-iraq",
       "published_at": "2026-09-28T11:52:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09281819-05",
     "title": "הסלמה מחודשת בלחימה בתימן ופגיעה בחיי האזרחים",
     "summary": "הלחימה המחודשת בין החות'ים לכוחות התימניים הנתמכים בידי סעודיה מתקרבת לכפרים ומחוזות, ומשבשת את שגרת החיים והלימודים של ילדים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T07:07:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T07:07:26+00:00",
     "last_update_at": "2026-09-28T07:07:26+00:00",
     "what_is_not_verified": "היקף הנזק המלא בכלל המחוזות בתימן אינו מפורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_972cbeebdf6e59c9",
       "url": "https://www.theguardian.com/world/2026/sep/28/yemen-fighting-houthis-families-flee-displacement",
       "published_at": "2026-09-28T07:07:26+00:00"
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
     "id": "YEMEN-09281819-06",
     "title": "הצעה של חמאס לשמש כמתווכת בזירה בתימן",
     "summary": "יו\"ר הלשכה המדינית של חמאס, ח'ליל אלחיה, הצהיר כי ארגונו הציע את עצמו כמתווך בין הצדדים הניצים בתימן.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T19:49:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T19:49:08+00:00",
     "last_update_at": "2026-09-27T19:49:08+00:00",
     "what_is_not_verified": "האם הצדדים בתימן שוקלים או מקבלים את ההצעה לא צוין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130914",
       "published_at": "2026-09-27T19:49:08+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "סיבת המעבר הזמני ללימודים מרחוק בבתי ספר בריאד והחזרתם למסגרת פרונטלית",
    "ההשלכות והתוצאות הסופיות של חקירת אירוע תקיפת צינור הנפט מעיראק"
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
     "value": 3.0633,
     "unit": "ILS",
     "change_pct": 0.97,
     "source_id": "src_ecb",
     "as_of": "2026-09-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [],
     "inferred": [
      "הרחבת הלחץ הצבאי על סעודיה באמצעות תקיפות כטב\"מים וטילים",
      "שימור אחיזה בשטחים בתימן מול הכוחות הממשלתיים"
     ],
     "forecast": [
      "המשך שיגורים לעבר יעדים בסעודיה ובאזור"
     ]
    },
    {
     "actor": "סעודיה וממשלת תימן",
     "declared": [
      "בלימת ההתקדמות והתקיפות של החות'ים"
     ],
     "inferred": [
      "חיזוק שיתוף הפעולה האזורי והבינלאומי לבלום את הפעילות החות'ית",
      "גיוס כוחות פנימיים למערכה מול החות'ים"
     ],
     "forecast": [
      "הידוק שיתוף הפעולה הביטחוני בין סעודיה למדינות האזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/rubio-meets-saudi-fm-fight-against-yemens-houthis-intensifies",
     "accessed_at": "2026-09-28T18:19:11+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/28/yemen-fighting-houthis-families-flee-displacement",
     "accessed_at": "2026-09-28T18:19:11+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/exclusive-irgc-houthis-behind-saudi-pipeline-attack-iraq",
     "accessed_at": "2026-09-28T18:19:11+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130914",
     "accessed_at": "2026-09-28T18:19:11+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48069",
     "accessed_at": "2026-09-28T18:19:11+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-27T23:40:31+00:00",
  "changes": {
   "YEMEN-09281819-01": {
    "kind": "new"
   },
   "YEMEN-09281819-02": {
    "kind": "new"
   },
   "YEMEN-09281819-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "יירוט כלי טיס בלתי מאוישים מעל שטח סעודיה והשבתת מוסדות חינוך בריאד",
    "score": 0.817
   },
   "YEMEN-09281819-04": {
    "kind": "new"
   },
   "YEMEN-09281819-05": {
    "kind": "possible",
    "prev": "הסלמת פעולות צבא תימן והתקפות אוויריות נגד החות'ים בתעז",
    "score": 0.633
   },
   "YEMEN-09281819-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הצעת תיווך מטעם חמאס ליישוב הסכסוך בתימן",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-28T1815__iran-202609281815.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-28T18:15:18+00:00",
   "window": {
    "from": "2026-09-27T18:15:18+00:00",
    "to": "2026-09-28T18:15:18+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609281815"
   },
   "summary": "העימות המשולש נמשך במספר חזיתות הכוללות לחץ כלכלי וסנקציות על איראן, שיבושים בנתיבי השיט במצר הורמוז, ופעילות מנוגדת של שלוחויות ופרוקסי באזור. איראן מתמודדת עם שפל חסר תקדים במטבע המקומי שלה לצד לחצים צבאיים ומדיניים מצד ארצות הברית וישראל, בעוד מגעים דיפלומטיים עקיפים וגישושים להסכמים מתנהלים במקביל לאיומי תקיפה.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פעיל ומתוח עם שיבושי שייט ותקיפות"
    },
    {
     "name": "החזית הכלכלית והסנקציות",
     "status": "החמרה בערך המטבע האיראני והגברת אכיפת סנקציות קריפטו"
    },
    {
     "name": "החזית הדיפלומטית והמדינית",
     "status": "מגעים עקיפים בין וושינגטון לטהרן באמצעות מתווכים בניו יורק"
    }
   ],
   "events": [
    {
     "id": "IRAN-09281815-01",
     "title": "תפיסת כלי שיט ומעצרים במצר הורמוז",
     "summary": "איראן תפסה שני כלי שיט קלים ועצרה חמישה עשר אנשים בטענה שהפרו תקנות",
     "axis": "המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T18:05:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T18:05:40+00:00",
     "last_update_at": "2026-09-28T18:05:40+00:00",
     "what_is_not_verified": "לא ידועות בדיוק האזרחיות של העצורים וזמן ביצוע הפעולה המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5dee32b6f6db89c0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-seizes-two-light-vessels-arrests-50-people-violating-regulations",
       "published_at": "2026-09-28T18:05:40+00:00"
      }
     ],
     "places": [
      {
       "name": "אי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      },
      {
       "name": "מינאב, איראן",
       "lat": 27.1506,
       "lon": 57.0753
      },
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-09281815-02",
     "title": "חידוש טיסות בין עיראק לאיראן",
     "summary": "חברת התעופה העיראקית חידשה את הטיסות בין נג'ף לשדות תעופה באיראן לאחר הפסקה קצרה",
     "axis": "עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T14:42:52+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T14:42:52+00:00",
     "last_update_at": "2026-09-28T17:54:03+00:00",
     "what_is_not_verified": "האם ההפסקה נבעה ישירות מהסנקציות של ארצות הברית או מהוראה מקומית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4445b3c8119dbd1a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraqi-airways-resumes-flights-between-najaf-and-iranian-airports-state",
       "published_at": "2026-09-28T17:54:03+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_5b649bd3cb07c1c7",
       "url": "https://en.irna.ir/news/86277438/Iraq-to-resume-Iran-flights-from-Najaf-airport-within-24-hours",
       "published_at": "2026-09-28T14:42:52+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ף, עיראק",
       "lat": 32.001,
       "lon": 44.33
      }
     ]
    },
    {
     "id": "IRAN-09281815-03",
     "title": "חקירת חשד לפיגוע בבסיס חיל האוויר הבריטי",
     "summary": "משטרת בריטניה עצרה ושחררה בערבות חמישה חשודים במסגרת חקירת איום פוטנציאלי על בסיס המשמש את ארצות הברית, כאשר נבדק חשד למעורבות מדינה זרה או שליחים",
     "axis": "אירופה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T12:55:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T12:55:34+00:00",
     "last_update_at": "2026-09-28T17:52:24+00:00",
     "what_is_not_verified": "האם איראן הייתה מעורבת במזימה, והאם המטענים שאותרו היו שמישים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/28/questions-remain-over-irans-link-to-alleged-raf-fairford-bomb-plot",
       "published_at": "2026-09-28T17:52:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uk-police-say-releasing-bail-five-men-held-over-airbase-incident",
       "published_at": "2026-09-28T16:46:56+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjo2bjucgg",
       "published_at": "2026-09-28T15:07:59+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21506710",
       "published_at": "2026-09-28T12:55:34+00:00"
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
     "id": "IRAN-09281815-04",
     "title": "פרסום דוח סנאט על שימוש במטבע קריפטו למימון איראן וחיזבאללה",
     "summary": "דוח של הסנאט האמריקאי חשף כי מטבע הדיגיטלי תטר משמש עורק פיננסי מרכזי לאיראן ולמימון ארגונים פרוקסי בהם חיזבאללה",
     "axis": "כלכלי/סנקציות",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T14:57:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T14:57:33+00:00",
     "last_update_at": "2026-09-28T17:46:30+00:00",
     "what_is_not_verified": "היקף העסקאות המדויק שבוצע דרך ארנקים אלו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/tether-usdt-aids-iran-funding-senate-report-says",
       "published_at": "2026-09-28T17:46:30+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bje4rgd9ml",
       "published_at": "2026-09-28T14:57:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09281815-05",
     "title": "פציעת חיילי מארינס אמריקאים בתקיפה במצר הורמוז",
     "summary": "שמונה אנשי סגל של חיל הנחתים האמריקאי נפצעו כתוצאה מפגיעת טיל שיוט איראני בכלי שיט במצר הורמוז מוקדם יותר החודש",
     "axis": "המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T05:44:58+00:00",
     "last_update_at": "2026-09-28T05:44:58+00:00",
     "what_is_not_verified": "זהות כלי השיט המדויקת שספגה את הפגיעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130921",
       "published_at": "2026-09-28T05:44:58+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    }
   ],
   "not_verified": [
    "מעורבות אפשרית של איראן בניסיון הפיגוע לכאורה בבסיס פיירפורד בבריטניה",
    "פרטי הפגיעה המדויקים בספינה האמריקאית במצר הורמוז שדווחו ברשת אן-בי-סי",
    "ההצעה האיראנית המדויקת להפוגה בת שבעה ימים ודחייתה על ידי ארצות הברית"
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
     "value": 3.0633,
     "unit": "ILS",
     "change_pct": 0.97,
     "source_id": "src_ecb",
     "as_of": "2026-09-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "מוכנות לשיחות או למלחמה אפוקליפטית",
      "הדגשת תפקידה של ההתנגדות כגורם הרתעתי"
     ],
     "inferred": [
      "עקיפת סנקציות באמצעות מטבעות קריפטו ונתיבי סחר חלופיים",
      "שימוש בשלוחים להפעלת לחץ על ארצות הברית וישראל"
     ],
     "forecast": [
      "המשך ניסיונות לשבש את תנועת האנרגיה במצר הורמוז כל עוד הלחץ הכלכלי נמשך",
      "חיפוש ערוצי עקיפה נוספים למערכת הפיננסית המערבית"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הפעלת לחץ מקסימלי וסנקציות כלכליות על טהרן",
      "שמירה על חופש השיט והגנה על כוחותיה במפרץ"
     ],
     "inferred": [
      "בחינת אפשרות לתקיפות צבאיות נוספות במקביל לניהול מגעים עקיפים",
      "חסימת עורקי מימון של איראן ושלוחיה דרך מערכות פיננסיות וקריפטו"
     ],
     "forecast": [
      "החמרת הפיקוח על עסקאות קריפטו המשרתות את איראן וארגוני הטרור",
      "המשך הפעלת נוכחות צבאית מוגברת באזורי חיכוך ימיים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "בלימת השפעתה האזורית של איראן ושלחיה",
      "סיכול תשתיות טרור ומימון המופנות נגדה"
     ],
     "inferred": [
      "שיתוף פעולה מודיעיני הדוק עם ארצות הברית וגורמים מערביים למעקב אחר רשתות מימון איראניות",
      "היערכות צבאית מתמשכת לאפשרות של עימות ישיר רחב"
     ],
     "forecast": [
      "המשך פעילות חשאית וגלויה נגד נתיבי האספקה והכספים של ציר ההתנגדות",
      "הגברת התיאום המדיני מול ממשל ארצות הברית בנושא הסנקציות על איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/tether-usdt-aids-iran-funding-senate-report-says",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/28/questions-remain-over-irans-link-to-alleged-raf-fairford-bomb-plot",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86277438/Iraq-to-resume-Iran-flights-from-Najaf-airport-within-24-hours",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21506710",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uk-police-say-releasing-bail-five-men-held-over-airbase-incident",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130921",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bje4rgd9ml",
     "accessed_at": "2026-09-28T18:15:18+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-28T05:47:10+00:00",
  "changes": {
   "IRAN-09281815-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "לכידת צוללת אוטונומית אמריקאית במצר הורמוז",
    "score": 0.817
   },
   "IRAN-09281815-02": {
    "kind": "new"
   },
   "IRAN-09281815-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מעצר חשודים בטרור ליד בסיס חיל האוויר הבריטי-אמריקאי פיירפורד",
    "score": 1.0
   },
   "IRAN-09281815-04": {
    "kind": "new"
   },
   "IRAN-09281815-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת כלי שיט במצר הורמוז",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-28T0857__ukraine-202609280857.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-28T08:57:09+00:00",
   "window": {
    "from": "2026-09-27T08:57:09+00:00",
    "to": "2026-09-28T08:57:09+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609280857"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעצימות גבוהה, הכוללת מתקפות אוויריות הדדיות נרחבות של רחפנים וטילים על תשתיות אנרגיה ועורף אזרחי, לצד התקדמות אוקראינית קרקעית במחוז דונצק במסגרת מבצע ויואלדי. בעוד אוקראינה מדווחת על שחרור יישובים ושימוש ברובוטים קרקעיים, רוסיה ממשיכה בלחץ כבד בגזרות המזרחיות ומבצעת תקיפות המכוונות למתקנים אזרחיים ותשתיות.",
   "fronts": [
    {
     "name": "חזית הדונבאס והמזרח",
     "status": "פעיל מאוד עם מתקפות נגד והתקדמות אוקראינית (מבצע ויואלדי) לצד לחץ רוסי כבד בגזרות קוסטנטיניבקה ופוקרובסק."
    },
    {
     "name": "חזית הדרום ומחוז חרסון",
     "status": "יציב עם פעילות מבצעית ואספקה מיוחדת ברחפנים לאזורים תחת כיבוש."
    },
    {
     "name": "מתקפות אוויריות ועורפיות",
     "status": "פעילות עצימה של תקיפות רחפנים וטילים הדדיות על תשתיות עורף, מתקני נפט ובנייני מגורים."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09280857-01",
     "title": "תקיפות רחפנים במחוז וורונז'",
     "summary": "מתקפת רחפנים במחוז וורונז' פגעה בשלושה מתקני תבנית אזרחיים ופצעה ארבעה בני אדם, בהם שלושה ילדים.",
     "axis": "מתקפות אוויריות ועורפיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T08:22:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T08:22:40+00:00",
     "last_update_at": "2026-09-28T08:22:40+00:00",
     "what_is_not_verified": "לא מאומת מי עמד מאחורי השיגור בדיוק מעבר לטענה הכללית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_tass",
       "url": "https://tass.com/politics/2193769",
       "published_at": "2026-09-28T08:22:40+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז וורונז', רוסיה",
       "lat": 44.9251,
       "lon": 40.9834
      }
     ]
    },
    {
     "id": "UKRAINE-09280857-02",
     "title": "שימוש ברחפנים קרקעיים חמושים במבצע ויואלדי",
     "summary": "יחידת מערכות קרקעיות לא מאוישות של גדוד הסער השלישי השתמשה ברחפנים קרקעיים חמושים במשגרי רימונים לתקיפת עמדות רוסיות.",
     "axis": "חזית הדונבאס והמזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T08:01:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T08:01:00+00:00",
     "last_update_at": "2026-09-28T08:01:00+00:00",
     "what_is_not_verified": "הטענה שאיש לא השתמש בטקסט כזה בהיסטוריה הצבאית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_d9e5ee3310e6af3f",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055342/",
       "published_at": "2026-09-28T08:01:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09280857-03",
     "title": "שחרור יישובים ונפילת שבויים במסגרת מבצע ויואלדי",
     "summary": "הצבא האוקראיני דיווח על שחרור יישובים נוספים במחוז דונצק במסגרת השלב השלישי של מבצע ויואלדי, לצד נפילת מאות חיילים רוסים בשבי.",
     "axis": "חזית הדונבאס והמזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T07:35:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T07:35:00+00:00",
     "last_update_at": "2026-09-28T07:49:00+00:00",
     "what_is_not_verified": "מספרי האבדות של הצד הרוסי אינם מאומתים ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_aa6fb488267b304d",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055338/",
       "published_at": "2026-09-28T07:49:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_bde4b898fe067225",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055336/",
       "published_at": "2026-09-28T07:35:00+00:00"
      }
     ],
     "places": [
      {
       "name": "נובה, אוקראינה",
       "lat": 50.0334,
       "lon": 32.6109
      },
      {
       "name": "רידקודוב, אוקראינה",
       "lat": 49.1817,
       "lon": 37.8043
      },
      {
       "name": "קטריניבקה, אוקראינה",
       "lat": 47.8756,
       "lon": 37.3456
      }
     ]
    },
    {
     "id": "UKRAINE-09280857-04",
     "title": "פגיעות טילים ורחפנים בערים אוקראיניות ובהן חרקוב, קייב ואודסה",
     "summary": "תקיפות רוסיות פגעו בבניין מגורים ברובע סלטיבסקי בחרקוב ובמוקדים נוספים בקייב ובאודסה, וגרמו לפצועים רבים בהם ילדים.",
     "axis": "מתקפות אוויריות ועורפיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T07:28:52+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T07:28:52+00:00",
     "last_update_at": "2026-09-28T07:28:52+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכלל האזורים טרם סוכם סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_meduza",
       "url": "https://meduza.io/en/news/2026/09/28/russian-strike-on-apartment-building-in-kharkiv-ukraine-injures-25-people-including-nine-children-regional-governor-says",
       "published_at": "2026-09-28T07:28:52+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-09280857-05",
     "title": "פתיחת תיק פלילי נגד פעילה אנטי-מלחמתית בלונדון מטעם ה-פ.ס.ב",
     "summary": "שירות הביטחון הפדרלי של רוסיה פתח בחקירה פלילית נגד קסניה מקסימובה בגין פעילות בארגון טרור וגיוס כספים לאוקראינה.",
     "axis": "סנקציות ומדיניות פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T07:26:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T07:26:00+00:00",
     "last_update_at": "2026-09-28T07:26:00+00:00",
     "what_is_not_verified": "אמיתות הטענות המדויקות של ה-פ.ס.ב על אופי העברת הכספים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_meduza",
       "url": "https://meduza.io/en/news/2026/09/28/russia-opens-criminal-case-against-anti-war-organizer-former-model-and-london-councilor-ksenia-maksimova",
       "published_at": "2026-09-28T07:26:00+00:00"
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
     "id": "UKRAINE-09280857-06",
     "title": "השעיית ביקורות עסקיות ברוסיה לאתרים שנפגעו מרחפנים",
     "summary": "הממשלה הרוסית הטילה מורטוריום על ביקורות עסקיות במפעלים ובמתחמים שנפגעו ממתקפות רחפנים אוקראיניות עד לשנת 2027.",
     "axis": "סנקציות ומדיניות פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T07:18:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T07:18:28+00:00",
     "last_update_at": "2026-09-28T07:18:28+00:00",
     "what_is_not_verified": "היקף הנזק הכלכלי המדויק למחסנים ולבתי הזיקוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_meduza",
       "url": "https://meduza.io/en/news/2026/09/28/russia-suspends-planned-inspections-for-one-year-at-businesses-hit-by-ukrainian-drone-attacks",
       "published_at": "2026-09-28T07:18:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09280857-07",
     "title": "תקיפות רחפנים במחוז צ'רניגוב ובז'יטומיר",
     "summary": "כוחות רוסיים תקפו מתחם עסקי ותשתיות קריטיות באמצעות רחפנים במחוז צ'רניגוב ובמחוז ז'יטומיר.",
     "axis": "מתקפות אוויריות ועורפיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T07:12:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T07:12:00+00:00",
     "last_update_at": "2026-09-28T07:12:00+00:00",
     "what_is_not_verified": "מצבן המלא של כלל התשתיות שנפגעו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_viacheslav_chaus_ukrainska_pravda",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055334/",
       "published_at": "2026-09-28T07:12:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סמניבקה, אוקראינה",
       "lat": 52.1785,
       "lon": 32.5776
      },
      {
       "name": "נובוהורוד-סיברסקי, אוקראינה",
       "lat": 52.0043,
       "lon": 33.278
      }
     ]
    },
    {
     "id": "UKRAINE-09280857-08",
     "title": "חילופי דברים בין טראמפ לזלנסקי בנושא בתי הזיקוק ברוסיה",
     "summary": "נשיא ארצות הברית דונלד טראמפ טען כי ביקש מזלנסקי להאט את קצב התקיפות על בתי הזיקוק ברוסיה וכי האחרון הסכים לכך, בעוד מקורות אוקראיניים הכחישו בעבר ניסיון לכפות הפסקת תקיפות כאלו.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T06:54:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T06:54:00+00:00",
     "last_update_at": "2026-09-28T06:54:00+00:00",
     "what_is_not_verified": "האם אכן סוכם בפועל על עצירת תקיפות בתי הזיקוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_fox_news_donald_trump",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055332/",
       "published_at": "2026-09-28T06:54:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09280857-09",
     "title": "יירוט המוני של רחפנים אוקראיניים מעל רוסיה",
     "summary": "מערכות ההגנה האווירית של רוסיה יירטו מאות רחפנים אוקראיניים שהושקו לעבר מספר מחוזות בשטח הרוסי.",
     "axis": "מתקפות אוויריות ועורפיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T06:24:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T06:24:06+00:00",
     "last_update_at": "2026-09-28T06:24:06+00:00",
     "what_is_not_verified": "מספר הרחפנים המדויק שהצליח לפגוע ביעדיו לעומת אלו שיורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_russian_ministry_of_defense",
       "url": "https://tass.com/politics/2193735",
       "published_at": "2026-09-28T06:24:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09280857-10",
     "title": "שימוש באזרחים כמגן אנושי במחוז חרקוב",
     "summary": "כוחות אוקראיניים תיעדו כוחות רוסים בורחים המשתמשים באזרחים ובילדים כמגן אנושי ומאלצים אותם לעבור דרך צינור גז לעבר שטח רוסיה.",
     "axis": "חזית הדונבאס והמזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T06:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T06:00:00+00:00",
     "last_update_at": "2026-09-28T06:00:00+00:00",
     "what_is_not_verified": "מספר האזרחים המדויק שהועבר בצורה זו לאורך כל תוואי הצינור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_bf0fbca05c9bc66c",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055313/",
       "published_at": "2026-09-28T06:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קופיאנסק, אוקראינה",
       "lat": 49.7133,
       "lon": 37.6142
      },
      {
       "name": "הולוביבקה, אוקראינה",
       "lat": 48.6414,
       "lon": 38.6479
      }
     ]
    },
    {
     "id": "UKRAINE-09280857-11",
     "title": "תקיפות נרחבות במחוז קייב והרוגים אזרחיים",
     "summary": "תקיפות רחפנים רוסיות במחוז קייב גרמו למותם של שלושה בני אדם, בהם אזרח אזרביג'אני, ולפציעתם של שמונה נוספים, תוך פגיעה במחסנים ובמבנים אזרחיים.",
     "axis": "מתקפות אוויריות ועורפיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T05:58:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T05:58:00+00:00",
     "last_update_at": "2026-09-28T05:58:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא בכל המחוזות הנפגעים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_tymur_tkachenko_volodymyr_zelenskyy",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055314/",
       "published_at": "2026-09-28T05:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ברווארי, אוקראינה",
       "lat": 50.5111,
       "lon": 30.79
      },
      {
       "name": "בוצ'ה, אוקראינה",
       "lat": 50.5503,
       "lon": 30.2107
      }
     ]
    },
    {
     "id": "UKRAINE-09280857-12",
     "title": "תיעוד עימותים יבשתיים מרובים בגזרות השונות",
     "summary": "מטה הכללי של אוקראינה דיווח על מאות עימותים קרקעיים ביממה האחרונה, כאשר המוקדים המרכזיים היו בגזרות קוסטנטיניבקה ופוקרובסק.",
     "axis": "חזית הדונבאס והמזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T05:21:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T05:21:00+00:00",
     "last_update_at": "2026-09-28T05:21:00+00:00",
     "what_is_not_verified": "הערכות האבדות המדויקות של הצדדים בכל גזרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_06a8a7e15867423a",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055311/",
       "published_at": "2026-09-28T05:21:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09280857-13",
     "title": "תקיפת מחסן נפט במחוז קרסנודר",
     "summary": "דווח על שריפה במחסן נפט במחוז קרסנודר שברוסיה בעקבות מתקפת רחפנים.",
     "axis": "מתקפות אוויריות ועורפיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T01:41:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T01:41:05+00:00",
     "last_update_at": "2026-09-28T01:44:54+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקן האחסון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/fire-reported-at-oil-depot-in-russias-krasnodar-krai-amid-drone-attack/",
       "published_at": "2026-09-28T01:44:54+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/48052",
       "published_at": "2026-09-28T01:41:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09280857-14",
     "title": "העברת אספקת מזון ברחפנים לתושבי אולשקי הנמצאת תחת כיבוש",
     "summary": "כוחות אוקראיניים הפעילו רחפנים כדי להעביר כארבע טונות של מזון לתושבים הנותרים באולשקי שבמחוז חרסון הנמצאת תחת כיבוש רוסי.",
     "axis": "חזית הדרום ומחוז חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T11:00:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T11:00:04+00:00",
     "last_update_at": "2026-09-27T13:23:00+00:00",
     "what_is_not_verified": "אחוז המזון המוחרם בידי הכוחות הרוסיים לעומת זה שמגיע לתושבים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/48036",
       "published_at": "2026-09-27T13:23:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://www.theguardian.com/world/2026/sep/27/hell-on-earth-last-residents-eat-weeds-to-survive-in-russian-occupied-oleshky",
       "published_at": "2026-09-27T11:00:04+00:00"
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
    "טענות הצדדים בנוגע למספר האבדות המדויק של החיילים והאזרחים.",
    "ההסכמה הנטענת בין דונלד טראמפ לוולודימיר זלנסקי על האטת תקיפות בתי הזיקוק ברוסיה.",
    "טענות רוסיה בנוגע לפעילות טרור גרעיני מצד אוקראינה."
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
     "value": 1.1403,
     "unit": "USD",
     "change_pct": 0.32,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "שחרור השטחים הכבושים במסגרת מבצעים כמו ויואלדי",
      "הגנה על תשתיות קריטיות והבטחת הכנות לחורף"
     ],
     "inferred": [
      "פגיעה בכלכלה ובתשתיות האנרגיה של רוסיה באמצעות תקיפות רחפנים ארוכות טווח",
      "שימוש בטכנולוגיות מתקדמות וכלים בלתי מאוישים לחיסכון בכוח אדם"
     ],
     "forecast": [
      "המשך מאמצי התקפה בגזרת דונצק",
      "הגברת הלחץ הבינלאומי להטלת סנקציות נוספות על רוסיה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך השגת יעדי המבצע הצבאי והדפת כוחות אוקראיניים",
      "בלימת הסיוע המערבי והצגת פעילות אוקראינית כטרור"
     ],
     "inferred": [
      "שחיקת היכולות הצבאיות והכלכליות של אוקראינה באמצעות מתקפות אוויריות בלתי פוסקות על העורף",
      "הקלת הנטל הרגולטורי על עסקים שנפגעו ממתקפות כדי לשמור על יציבות פנים-מדינתית"
     ],
     "forecast": [
      "המשך מתקפות הטרור האוויריות והרחפנים על ערי אוקראינה",
      "ניסיונות בלימה והתנגדות להתקדמות האוקראינית במזרח"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/27/hell-on-earth-last-residents-eat-weeds-to-survive-in-russian-occupied-oleshky",
     "accessed_at": "2026-09-28T08:57:09+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/fire-reported-at-oil-depot-in-russias-krasnodar-krai-amid-drone-attack/",
     "accessed_at": "2026-09-28T08:57:09+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/28/russia-suspends-planned-inspections-for-one-year-at-businesses-hit-by-ukrainian-drone-attacks",
     "accessed_at": "2026-09-28T08:57:09+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055311/",
     "accessed_at": "2026-09-28T08:57:09+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2193735",
     "accessed_at": "2026-09-28T08:57:09+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48036",
     "accessed_at": "2026-09-28T08:57:09+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-27T15:31:14+00:00",
  "changes": {
   "UKRAINE-09280857-01": {
    "kind": "new"
   },
   "UKRAINE-09280857-02": {
    "kind": "new"
   },
   "UKRAINE-09280857-03": {
    "kind": "new"
   },
   "UKRAINE-09280857-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעות כטב\"מים במבנים אדמיניסטרטיביים ובמרכז תקשורת בקייב",
    "score": 0.817
   },
   "UKRAINE-09280857-05": {
    "kind": "new"
   },
   "UKRAINE-09280857-06": {
    "kind": "new"
   },
   "UKRAINE-09280857-07": {
    "kind": "new"
   },
   "UKRAINE-09280857-08": {
    "kind": "new"
   },
   "UKRAINE-09280857-09": {
    "kind": "new"
   },
   "UKRAINE-09280857-10": {
    "kind": "new"
   },
   "UKRAINE-09280857-11": {
    "kind": "new"
   },
   "UKRAINE-09280857-12": {
    "kind": "new"
   },
   "UKRAINE-09280857-13": {
    "kind": "new"
   },
   "UKRAINE-09280857-14": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מבצע הטסת מזון ברחפנים לאולשקי הכבושה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-28T1821__north-202609281821.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-28T18:21:41+00:00",
   "window": {
    "from": "2026-09-27T18:21:41+00:00",
    "to": "2026-09-28T18:21:41+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609281821"
   },
   "summary": "בזרה הצפונית נמשכות התנגשויות נקודתיות ופעילות צבאית של צה\"ל בדרום לבנון הכוללת השמדת תשתיות והתבססות במרחב הביטחוני, לצד מאמצים דיפלומטיים של ממשלת לבנון מול ארצות הברית להשגת נסיגה ישראלית מלאה. במקביל, בסוריה מתבצעות פעולות ביטחון פנים נגד תאי טרור לצד שינויים מנהלתיים ותקציביים של משרד האוצר הסורי.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעיל חלקית עם תקיפות צה\"ל, פיצוצים מבוקרים בדרום לבנון ומגעים דיפלומטיים"
    },
    {
     "name": "החזית הסורית",
     "status": "פעילות ביטחון פנים נגד תאי טרור וצעדי התאוששות כלכלית ומנהלית"
    }
   ],
   "events": [
    {
     "id": "NORTH-09281821-01",
     "title": "פגישת ראש ממשלת לבנון עם מזכיר המדינה האמריקאי",
     "summary": "ראש ממשלת לבנון נפגש בוושינגטון עם מזכיר המדינה של ארצות הברית וקרא להפעלת מסגרת תלת-צדדית, קביעת לוח זמנים לנסיגה ישראלית מלאה ומנגנון פיקוח אמין.",
     "axis": "לבנון-ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T12:38:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T12:38:04+00:00",
     "last_update_at": "2026-09-28T18:13:46+00:00",
     "what_is_not_verified": "הפרטים לגבי יישום בפועל של לוח הזמנים והמנגנון אינם מאומתים שכן מדובר בהצהרות ודרישות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_src_anadolu",
       "url": "https://www.aa.com.tr/en/middle-east/lebanese-premier-urges-implementation-of-trilateral-framework-to-ensure-israeli-withdrawal/4071966",
       "published_at": "2026-09-28T18:13:46+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_src_anadolu",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960192/rubio-reaffirms-us-support-for-lebanon-as-salam-calls-for-clear-timeli/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960192",
       "published_at": "2026-09-28T13:05:05+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_src_anadolu",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960188/rubio-salam-meeting-highly-positive-discuss-roadmap-for-israeli-withdr/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960188",
       "published_at": "2026-09-28T12:38:04+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "NORTH-09281821-02",
     "title": "ירי מיירט לעבר מטרה אווירית בדרום לבנון",
     "summary": "צה\"ל דיווח על שיגור מיירט לעבר מטרה אווירית חשודה במרחב הפעילות של כוחותיו בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "לבנון-ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T17:39:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T17:39:44+00:00",
     "last_update_at": "2026-09-28T18:06:20+00:00",
     "what_is_not_verified": "הפרטים המלאים על זיהוי המטרה נמצאים בבדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130978",
       "published_at": "2026-09-28T18:06:20+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25243",
       "published_at": "2026-09-28T17:39:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09281821-03",
     "title": "פיצוצים מבוקרים ותקיפות של צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות, פיצוצים מבוקרים והשמדת תשתיות טרור רבות בכפר אל-מנצורי ובאזורים נוספים בדרום לבנון.",
     "axis": "לבנון-ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T13:26:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T13:26:35+00:00",
     "last_update_at": "2026-09-28T16:11:45+00:00",
     "what_is_not_verified": "חלק מהדיווחים מבוססים על גופי תקשורת לבנוניים ועל טענות צבאיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_al_nna_and_afp",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-army-set-large-explosion-south-report-says",
       "published_at": "2026-09-28T16:11:45+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_al_nna_and_afp",
       "url": "https://t.me/idf_telegram/25242",
       "published_at": "2026-09-28T15:31:01+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_al_nna_and_afp",
       "url": "https://english.almanar.com.lb/article/131592/",
       "published_at": "2026-09-28T15:07:36+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_al_nna_and_afp",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-carries-out-massive-explosion-in-southern-lebanon-report/4071813",
       "published_at": "2026-09-28T15:05:55+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_al_nna_and_afp",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960197/israeli-army-claims-it-destroyed-over-600-infrastructure-sites-in-sout/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960197",
       "published_at": "2026-09-28T13:26:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "צור, לבנון",
       "lat": 33.2721,
       "lon": 35.1964
      }
     ]
    },
    {
     "id": "NORTH-09281821-04",
     "title": "חשיפת רשת דאעש במספר מחוזות בסוריה",
     "summary": "השלטונות בסוריה הודיעו על פירוק רשת של ארגון המדינה אלאסלאמיה שפעלה בארבעה מחוזות וכללה מעצר של בכירים וחברי חוליה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T16:54:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T16:54:35+00:00",
     "last_update_at": "2026-09-28T16:54:35+00:00",
     "what_is_not_verified": "הטענות של הרשויות הסוריות לא אומתו באופן עצמאי וזהות העצורים לא פורסמה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_syrian_interior_ministry_announcement",
       "url": "https://www.newarab.com/news/syria-says-network-dismantled-across-four-provinces",
       "published_at": "2026-09-28T16:54:35+00:00"
      }
     ],
     "places": [
      {
       "name": "רקה, סוריה",
       "lat": 35.9497,
       "lon": 39.0089
      },
      {
       "name": "חלב, סוריה",
       "lat": 36.1992,
       "lon": 37.1637
      },
      {
       "name": "חומס, סוריה",
       "lat": 34.7333,
       "lon": 36.7167
      }
     ]
    }
   ],
   "not_verified": [
    "הפרטים המדויקים סביב המטרה האוירית החשודה בדרום לבנון",
    "זהות העצורים במבצע נגד דאעש בסוריה והמועד המדויק של הפעולות המיוחסות להם",
    "אמינות הטענות על שימוש במטבעות קריפטו למימון חיזבאללה דרך איראן"
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
     "value": 3.0633,
     "unit": "ILS",
     "change_pct": 0.97,
     "source_id": "src_ecb",
     "as_of": "2026-09-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על ביטחון התושבים והכוחות",
      "השמדת תשתיות טרור בדרום לבנון"
     ],
     "inferred": [
      "מניעת התבססות מחדש של חיזבאללה בסמוך לגבול",
      "הרחקת איומים במרחב הגבול הצפוני"
     ],
     "forecast": [
      "המשך פעולות ממוקדות נגד תשתיות טרור בלבנון בהתאם לצורך",
      "היערכות ממושכת במרחבים המבצעיים בגבול לבנון"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "השגת נסיגה ישראלית מלאה משטח לבנון",
      "החזרת השליטה הבלעדית של המדינה על הנשק"
     ],
     "inferred": [
      "ניסיון לרתום את ארצות הברית ללחץ דיפלומטי על ישראל",
      "חיזוק המוסדות הממשלתיים מול גורמי כוח מקומיים"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים בוושינגטון ובזירה הבינלאומית",
      "לחץ פנימי גובר בנוגע לפירוק נשק ושיקום תשתיות"
     ]
    },
    {
     "actor": "איראן וחיזבאללה",
     "declared": [
      "המשך ההתנגדות לכישול האויב והגנה על ציר ההתנגדות",
      "שימור מורשת המנהיגים המחוסלים והמשך דרכם"
     ],
     "inferred": [
      "ניסיון לשקם את יכולות הארגון למרות המכות הקשות שפגעו בהנהגה",
      "הסתמכות על ערוצי מימון אלטרנטיביים לעקוף את הסנקציות"
     ],
     "forecast": [
      "שימור רטוריקה לוחמנית וקיום אירועי זיכרון להפגנת נוכחות",
      "ניסיונות התארגנות מחדש בדרגים השונים תחת הנהגה חדשה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "ייצוב המצב הביטחוני פנימי ופירוק רשתות טרור",
      "ארגון מחדש של ההוצאה הציבורית ושיקום תשתיות אזרחיות"
     ],
     "inferred": [
      "ריסוק תאים פעילים של ארגונים קיצוניים מחוץ למעוזיהם המסורתיים",
      "התמודדות עם משברים כלכליים חריפים והשפעות הפליטים החוזרים"
     ],
     "forecast": [
      "המשך פעולות מבצעיות של מנגנוני הביטחון במחוזות השונים",
      "התמודדות מתמשכת עם אתגרים תקציביים ושיקום תחבורה אווירית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/131592/",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-carries-out-massive-explosion-in-southern-lebanon-report/4071813",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960197/israeli-army-claims-it-destroyed-over-600-infrastructure-sites-in-sout/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960197",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-army-set-large-explosion-south-report-says",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-says-network-dismantled-across-four-provinces",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130978",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25242",
     "accessed_at": "2026-09-28T18:21:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-27T23:42:01+00:00",
  "changes": {
   "NORTH-09281821-01": {
    "kind": "new"
   },
   "NORTH-09281821-02": {
    "kind": "possible",
    "prev": "קריאת שר האוצר הישראלי לסיפוח שטחים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-09281821-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפות חיל האוויר הישראלי בדרום לבנון בתגובה לשיגור רחפן",
    "score": 0.65
   },
   "NORTH-09281821-04": {
    "kind": "possible",
    "prev": "הסרת ההתנגדות הישראלית להפעלת מערכות ניווט בשדות תעופה בסוריה",
    "score": 0.633
   }
  }
 }
};
