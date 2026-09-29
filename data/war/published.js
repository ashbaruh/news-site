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
  "draft": "drafts/iran/2026-09-29T0900__iran-202609290900.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-29T09:00:14+00:00",
   "window": {
    "from": "2026-09-28T09:00:14+00:00",
    "to": "2026-09-29T09:00:14+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609290900"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך בממדים דיפלומטיים, כלכליים וצבאיים, כאשר איראן מתמודדת עם קריסה חדה במטבע המקומי ומאבק על פתיחת מצרי הורמוז בתמורה להסרת סנקציות. במקביל, מתקיימים מגעים עקיפים דרך מתווכים ומפגשים אזוריים בין ישראל למדינות המפרץ לבחירת מענה משותף לאיומי איראן ושלוחותיה, לצד הכחשות אמריקאיות לגבי מתן הנחות בסנקציות.",
   "fronts": [
    {
     "name": "החזית הדיפלומטית והגרעינית",
     "status": "פעיל ומתוח"
    },
    {
     "name": "חזית המפרץ ומצרי הורמוז",
     "status": "פעיל תחת לחץ כלכלי וצבאי"
    },
    {
     "name": "החזית הכלכלית",
     "status": "החמרה עקב קריסת המטבע והסנקציות"
    }
   ],
   "events": [
    {
     "id": "IRAN-09290900-01",
     "title": "מעצר חשודים סמוך לבסיס חיל אוויר בבריטניה",
     "summary": "משטרת בריטניה עצרה חמישה חשודים בעבירות נפץ וטרור סמוך לבסיס חיל האוויר של בריטניה שמשמש כוחות אמריקניים, ומזכיר המדינה האמריקני אמר כי באירוע מעורב גורם זר.",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T21:36:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T21:36:40+00:00",
     "last_update_at": "2026-09-29T08:46:30+00:00",
     "what_is_not_verified": "הקשר הישיר של איראן לאירוע אינו מאומת במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_reuters",
       "url": "https://www.al-monitor.com/originals/2026/09/rubio-says-uk-airbase-incident-involved-foreign-state",
       "published_at": "2026-09-29T08:46:30+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_reuters",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21509592",
       "published_at": "2026-09-29T01:41:45+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_reuters",
       "url": "https://www.theguardian.com/world/2026/sep/28/questions-remain-over-irans-link-to-alleged-raf-fairford-bomb-plot",
       "published_at": "2026-09-28T21:36:40+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס חיל האוויר פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-09290900-02",
     "title": "קריסת שער המטבע האיראני",
     "summary": "שער המטבע האיראני רשם ירידה חדה ונסחר סביב שער של 2.44 מיליון ריאל לדולר אמריקאי אחד.",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T10:23:50+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T10:23:50+00:00",
     "last_update_at": "2026-09-29T07:59:01+00:00",
     "what_is_not_verified": "לא מאומתים כלל הגורמים המדויקים שהאיצו את הקריסה הבוקר מעבר למצב הכלכלי הכללי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131004",
       "published_at": "2026-09-29T07:59:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130954",
       "published_at": "2026-09-28T10:32:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48057",
       "published_at": "2026-09-28T10:23:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09290900-03",
     "title": "פגישת בכירים באיחוד הארויות בנושא איראן והחות'ים",
     "summary": "ראש ממשלת ישראל נסע לאיחוד האמירויות ונפגש עם הנשיא, בהשתתפות נציגים ממדינות נוספות, לדיון שכלל את איראן ואת האיום החות'י.",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T19:28:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T19:28:59+00:00",
     "last_update_at": "2026-09-29T06:50:17+00:00",
     "what_is_not_verified": "זהותן המלאה של כל המדינות המשתתפות הנוספות לא צוינה במלואה במקורות הראשוניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-630",
       "published_at": "2026-09-29T06:50:17+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21509128",
       "published_at": "2026-09-28T19:28:59+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09290900-04",
     "title": "הכחשת נשיא ארה\"ב בדבר מתן הקלה בסנקציות לאיראן",
     "summary": "נשיא ארה\"ב דונלד טראמפ הכחיש דיווחים לפיהם הציע לאיראן הקלה בסנקציות ושחרור כספים קפואים בתמורה לויתורים בתחום הגרעין.",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T03:46:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-29T03:46:31+00:00",
     "last_update_at": "2026-09-29T06:50:17+00:00",
     "what_is_not_verified": "האם אכן מתקיימים ערוצי משא ומתן חשאיים נוספים סביב הסנקציות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_533d5f1ef40e130c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-630",
       "published_at": "2026-09-29T06:50:17+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_43bd64faebbcc38c",
       "url": "https://www.al-monitor.com/originals/2026/09/trump-denies-offering-iran-sanctions-relief-tehran-says-ready-talks",
       "published_at": "2026-09-29T06:46:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_5ac57b7526987229",
       "url": "https://www.al-monitor.com/originals/2026/09/trump-denies-offering-iran-sanctions-relief-nuclear-concessions",
       "published_at": "2026-09-29T03:46:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09290900-05",
     "title": "נסיגת כוחות ארה\"ב מעיראק",
     "summary": "כוחות ארצות הברית עומדים לסיים את נסיגתם מהבסיסים האחרונים בעיראק.",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T06:46:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T06:46:28+00:00",
     "last_update_at": "2026-09-29T06:46:28+00:00",
     "what_is_not_verified": "היקף ההשפעה המדויק שיישאר לגורמים פרו-איראניים בבסיסים לאחר הפינוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_reuters",
       "url": "https://www.al-monitor.com/originals/2026/09/us-forces-exit-iraq-after-two-decades-leaving-opening-iran",
       "published_at": "2026-09-29T06:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    }
   ],
   "not_verified": [
    "קיומו או תוכנו המדויק של הסכם מתגבש בין ארה\"ב לאיראן באמצעות מתווכים",
    "מעורבות ישירה ומוძחת של מדינה זרה באירוע הבטחוני בבסיס פיירפורד בבריטניה",
    "האם הצעות כלשהן להקלות בסנקציות אכן הוצעו מאחורי הקלעים באורח חשאי"
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
      "הסרת הסנקציות מעל מגזר הנפט",
      "הפסקת אש אזורית והפסקת הסגר הימי האמריקני בתמורה לפתיחת מצרי הורמוז",
      "עשיית צדק והעמדה לדין של פושעי מלחמה אמריקנים וישראלים"
     ],
     "inferred": [
      "שמירה על תוכנית הגרעין והשפעה אזורית למרות המשבר הכלכלי החמור",
      "ניצול מנופים אזוריים להקלת הלחץ הכלכלי מבית"
     ],
     "forecast": [
      "המשך המאבק הכלכלי והסלמה אפשרית לאחר תקופת הבחירות בארצות הברית",
      "התעקשות על תנאים נוקשים לפתיחת מעברים ימיים"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "שמירה על הביטחון האזורי ובלימת ההשפעה האיראנית",
      "התנגדות למתן הקלות סנקציות ללא צעדים קונקרטיים בתחום הגרעין"
     ],
     "inferred": [
      "שאיפה למנוע מאיראן השגת נשק גרעיני שיאפשר לה לסחוט את העולם",
      "גיבוי שיתופי הפעולה הביטחוניים במפרץ"
     ],
     "forecast": [
      "המשך מדיניות הלחץ המקסימלי והטלת סנקציות על גופים וחברות המפרות אותן"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול התוכניות האיראניות ושלוחותיה באזור",
      "יצירת חזית אזורית משותפת עם מדינות המפרץ ומצרים מול האיום האיראני והחות'י"
     ],
     "inferred": [
      "הדגשת הסכנה שבהשגת נשק גרעיני בידי איראן בזירות הבינלאומיות",
      "חיזוק קשרים דיפלומטיים חשאיים ופומביים לבלימת ציר הטרור האיראני"
     ],
     "forecast": [
      "הידוק התיאום המדיני-ביטחוני עם הממשל האמריקני ומדינות האזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/us-forces-exit-iraq-after-two-decades-leaving-opening-iran",
     "accessed_at": "2026-09-29T09:00:14+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/28/questions-remain-over-irans-link-to-alleged-raf-fairford-bomb-plot",
     "accessed_at": "2026-09-29T09:00:14+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/geopolitics/article/21509128",
     "accessed_at": "2026-09-29T09:00:14+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-630",
     "accessed_at": "2026-09-29T09:00:14+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130954",
     "accessed_at": "2026-09-29T09:00:14+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48057",
     "accessed_at": "2026-09-29T09:00:14+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-28T18:15:18+00:00",
  "changes": {
   "IRAN-09290900-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חקירת חשד לפיגוע בבסיס חיל האוויר הבריטי",
    "score": 1.0
   },
   "IRAN-09290900-02": {
    "kind": "new"
   },
   "IRAN-09290900-03": {
    "kind": "new"
   },
   "IRAN-09290900-04": {
    "kind": "new"
   },
   "IRAN-09290900-05": {
    "kind": "new"
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
  "draft": "drafts/north/2026-09-29T0927__north-202609290927.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-29T09:27:12+00:00",
   "window": {
    "from": "2026-09-28T09:27:12+00:00",
    "to": "2026-09-29T09:27:12+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609290927"
   },
   "summary": "הזירה הצפונית מתאפיינת בפעילות צבאית מתמשכת של צה\"ל בדרום לבנון הכוללת תקיפות, פירוק תשתיות תת-קרקעיות וחילופי אש, לצד פשיטות ומעצרים המתרחשים באזור קוניטרה ודרעא שבדרום סוריה. במקביל, ממשלת לבנון מקיימת דיונים כלכליים ומדיניים עם גורמים בינלאומיים בוושינגטון סביב דרישות לפירוק רשתות פיננסיות ושיקום המדינה, בעוד שסוריה מתמודדת פנימית עם משברים כלכליים, שיקום תשתיות אנרגיה ופעילות ביטחונית נגד תאי טרור.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה עם תקיפות צה\"ל, פעילות כוחות קרקעיים ועימותים נקודתיים"
    },
    {
     "name": "חזית סוריה",
     "status": "פעילה עם פשיטות ומעצרים של צה\"ל בגולן ובדרום המדינה, ואירועי טרור ותשתיות פנימיים"
    }
   ],
   "events": [
    {
     "id": "NORTH-09290927-01",
     "title": "תקיפות והפגזות באלמנצורי ודרום לבנון",
     "summary": "כוחות צה\"ל ביצעו פיצוצי מבנים ותקיפות במשך שבועות, כולל ירי פצצות תאורה והפגזות בכפר אלמנצורי ופאתי מייס אל-ג'בל.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T19:40:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T19:40:49+00:00",
     "last_update_at": "2026-09-29T08:56:41+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131007",
       "published_at": "2026-09-29T08:56:41+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/132252/",
       "published_at": "2026-09-29T08:41:30+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130984",
       "published_at": "2026-09-28T19:40:49+00:00"
      }
     ],
     "places": [
      {
       "name": "אלמנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-09290927-02",
     "title": "פשיטה ומעצר בקוניטרה ובכפר זוביידה",
     "summary": "כוחות ישראליים עצרו גבר סורי והתקדמו לעבר כפר זוביידה בצפון קוניטרה במהלך פלישה.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T08:27:59+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T08:27:59+00:00",
     "last_update_at": "2026-09-29T08:27:59+00:00",
     "what_is_not_verified": "הפרטים מדווחים על ידי תקשורת סורית ולא אומתו ממקור ראשון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-detain-syrian-man-during-incursion-in-northern-quneitra/4072325",
       "published_at": "2026-09-29T08:27:59+00:00"
      }
     ],
     "places": [
      {
       "name": "זוביידה, סוריה",
       "lat": 36.1017,
       "lon": 37.6663
      }
     ]
    },
    {
     "id": "NORTH-09290927-03",
     "title": "פשיטות והקמת מחסום בדרום סוריה",
     "summary": "כוחות ישראליים ביצעו פשיטות בדרעא המערבית והקימו מחסום בקוניטרה.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-29T04:10:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-29T04:10:29+00:00",
     "last_update_at": "2026-09-29T04:10:29+00:00",
     "what_is_not_verified": "מבוסס על דיווחי תקשורת סורית ללא אישור רשמי נוסף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-raid-homes-set-up-checkpoint-in-southern-syria/4072117",
       "published_at": "2026-09-29T04:10:29+00:00"
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
     "id": "NORTH-09290927-04",
     "title": "פיצוץ צינור גז בדיר א-זור",
     "summary": "פיצוץ בצינור גז שיבש את אספקת האנרגיה לתחנות כוח במזרח סוריה, וצוותי כיבוי פעלו לבידוד הקטע.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T18:41:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T18:41:44+00:00",
     "last_update_at": "2026-09-29T03:40:04+00:00",
     "what_is_not_verified": "סיבת הפיצוץ המדויקת אינה מפורטת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_500282b92d56a89f",
       "url": "https://www.aa.com.tr/en/middle-east/gas-pipeline-blaze-disrupts-supplies-to-power-stations-in-eastern-syria/4072113",
       "published_at": "2026-09-29T03:40:04+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_500282b92d56a89f",
       "url": "https://t.me/abualiexpress/130981",
       "published_at": "2026-09-28T18:41:44+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    },
    {
     "id": "NORTH-09290927-05",
     "title": "ניטרול שני חשודים בדרום לבנון",
     "summary": "כוחות צה\"ל זיהו שני חשודים שנכנסו למרחב הביטחוני בדרום לבנון והתקרבו לכוחות, פתחו באש ונטרלו אותם.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T19:20:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T19:20:50+00:00",
     "last_update_at": "2026-09-28T19:40:49+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130984",
       "published_at": "2026-09-28T19:40:49+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25245",
       "published_at": "2026-09-28T19:20:50+00:00"
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
     "id": "NORTH-09290927-06",
     "title": "שיגור מיירט לעבר מטרה אווירית בדרום לבנון",
     "summary": "טיל מיירט שוגר לעבר מטרה אווירית חשודה שזוהתה במרחב הפעילות של כוחות צה\"ל בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T17:39:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T17:39:44+00:00",
     "last_update_at": "2026-09-28T18:06:20+00:00",
     "what_is_not_verified": "הפרטים המלאים על המטרה נמצאים בבדיקה",
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
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-09290927-07",
     "title": "פירוק רשת של ארגון המדינה האסלאמית בסוריה",
     "summary": "רשויות הביטחון בסוריה הודיעו כי פירקו רשת טרור של ארגון המדינה האסלאמית שפעלה בארבעה מחוזות ועצרו תשעה חשודים.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T16:54:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T16:54:35+00:00",
     "last_update_at": "2026-09-28T16:54:35+00:00",
     "what_is_not_verified": "הטענות לא אומתו באופן עצמאי וזהות העצורים לא פורסמה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
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
    },
    {
     "id": "NORTH-09290927-08",
     "title": "השלמת מבצע השמדת תשתיות באל-מנצורי",
     "summary": "כוחות חטיבה 55 השלימו פעילות באזור אל-מנצורי בדרום לבנון, במסגרתה הושמדו למעלה מ-600 תשתיות טרור ומספר תוואים תת-קרקעיים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T13:26:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T13:26:35+00:00",
     "last_update_at": "2026-09-28T15:31:01+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_70d5fce9f0dce013",
       "url": "https://t.me/idf_telegram/25242",
       "published_at": "2026-09-28T15:31:01+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_70d5fce9f0dce013",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960197/israeli-army-claims-it-destroyed-over-600-infrastructure-sites-in-sout/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960197",
       "published_at": "2026-09-28T13:26:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    }
   ],
   "not_verified": [
    "טענות השלטונות בסוריה על פירוק רשת המדינה האסלאמית ומספר העצורים המדויק",
    "דיווחים על פשיטות ומעצרים בקוניטרה ובדרעא מצד מקורות מקומיים בלבד",
    "ההערכות והדיווחים על היקף הנזק והפעילות באזורים מסוימים בדרום לבנון מעבר להודעות הרשמיות"
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
      "מניעת היערכות מחודשת של חיזבאללה בדרום לבנון",
      "חיסול תשתיות טרור והסרת איומים על אזרחים וכוחות צה\"ל"
     ],
     "inferred": [
      "יצירת מרחב ביטחוני מתפקד ומניעת התבססות עוינת סמוך לגבול הצפון",
      "הפעלת לחץ מתמשך על תשתיות צבאיות בדרום לבנון ובמרחבי הגבול"
     ],
     "forecast": [
      "המשך פעולות חיסול תשתיות וסיכול איומים ממוקדים בגבול לבנון ובסוריה",
      "שימור דריכות גבוהה והמשך פעילות הנדסית וטכנולוגית (כגון כלים בלתי מאוישים) בשטח"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "קידום רפורמות כלכליות ושיקום תשתיות המדינה בסיוע הבנק העולמי וגורמים בינלאומיים",
      "התמודדות עם לחצים כלכליים ודרישות לשמירת יציבות המערכת הבנקאית"
     ],
     "inferred": [
      "ניסיון לאזן בין הדרישות הבינלאומיות (הפסקת פעילות רשתות מימון של חיזבאללה ואיראן) לבין המציאות הפוליטית הפנימית המורכבת",
      "שאיפה לקבלת סיוע חיצוני שיסייע בשיקום אזורי ההרס"
     ],
     "forecast": [
      "המשך לחץ אמריקאי ומערבי על ממשלת לבנון לנקוט צעדים נגד רשתות פיננסיות",
      "המשך מאבקים פנימיים סביב דרישות כלכליות, מחאות עובדים ומעמדו של חיזבאללה"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הגנה על הביטחון והאינטרסים הלאומיים של איראן מפני תוקפנות",
      "המשך תמיכה ב\"ציר ההתנגדות\" ובבעלי בריתה באזור"
     ],
     "inferred": [
      "ניסיון להשתמש באיומים על תשתיות אנרגיה ומצריים אזוריים כמנוף לחץ נגד ארצות הברית וישראל",
      "שימור רשתות ההשפעה והמימון האזוריות למרות הלחץ הדיפלומטי והכלכלי המערבי"
     ],
     "forecast": [
      "המשך שיחות עקיפות בתיווך בינלאומי לצד שמירה על קו לוחמני בהצהרות פומביות",
      "הגברת החיכוך המדיני סביב סוגיות גרעין וסנקציות"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "בניית מדיניות חוץ חדשה המבוססת על כבוד הדדי ושמירה על ריבונות לאומית",
      "שיקום תשתיות אזרחיות, שדות תעופה ומערכות כלכליות"
     ],
     "inferred": [
      "רצון להתרחק מהשפעות שליליות של מעורבות זרה קודמת תוך התמודדות עם אתגרים ביטחוניים פנימיים (כמו תאי טרור)",
      "התמודדות עם קשיים תקציביים חמורים וגירעון פיסקאלי משמעותי"
     ],
     "forecast": [
      "המשך מאמצים לייצוב הפנים ושיקום מבני שלטון ותשתיות תחבורה ואנרגיה",
      "המשך התמודדות עם חוסר יציבות בגבולות ובדרום המדינה מול פעילות צבאית זרה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/132252/",
     "accessed_at": "2026-09-29T09:27:12+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/gas-pipeline-blaze-disrupts-supplies-to-power-stations-in-eastern-syria/4072113",
     "accessed_at": "2026-09-29T09:27:12+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960197/israeli-army-claims-it-destroyed-over-600-infrastructure-sites-in-sout/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960197",
     "accessed_at": "2026-09-29T09:27:12+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-says-network-dismantled-across-four-provinces",
     "accessed_at": "2026-09-29T09:27:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130978",
     "accessed_at": "2026-09-29T09:27:12+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25242",
     "accessed_at": "2026-09-29T09:27:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-28T18:21:41+00:00",
  "changes": {
   "NORTH-09290927-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "פיצוצים מבוקרים ותקיפות של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-09290927-02": {
    "kind": "new"
   },
   "NORTH-09290927-03": {
    "kind": "new"
   },
   "NORTH-09290927-04": {
    "kind": "new"
   },
   "NORTH-09290927-05": {
    "kind": "new"
   },
   "NORTH-09290927-06": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "ירי מיירט לעבר מטרה אווירית בדרום לבנון",
    "score": 1.0
   },
   "NORTH-09290927-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "חשיפת רשת דאעש במספר מחוזות בסוריה",
    "score": 1.0
   },
   "NORTH-09290927-08": {
    "kind": "new"
   }
  }
 }
};
