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
  "draft": "drafts/ukraine/2026-09-28T2340__ukraine-202609282340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-28T23:40:40+00:00",
   "window": {
    "from": "2026-09-27T23:40:40+00:00",
    "to": "2026-09-28T23:40:40+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609282340"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת, כאשר רוסיה ממשיכה בגל תקיפות נרחב של כטב\"מים וטילים לעבר תשתיות אזרחיות, מבני ממשל ומדע בקייב ובאזורים נוספים, בעוד אוקראינה מדווחת על הצלחות מקומיות ועל פעולות תגמול בעומק רוסיה. במקביל, שתי המדינות נוקטות בצעדים להרחבת בניין הכוח הצבאי שלהן, וקולות בינלאומיים ממשיכים לקרוא לדיפלומטיה ולהפסקת האש.",
   "fronts": [
    {
     "name": "קייב והמרכז",
     "status": "פעיל מאוד תחת תקיפות אוויריות"
    },
    {
     "name": "הגבול המערבי (אוקראינה-פולין)",
     "status": "פעיל עם זליגת איומים אוויריים"
    },
    {
     "name": "חזית הדונבאס",
     "status": "פעיל עם עימותים וחילופי שטחים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09282340-01",
     "title": "מתקפת טילים וכטב\"מים על קייב וערי אוקראינה",
     "summary": "מתקפות נרחבות של כטב\"מים וטילים פגעו במספר מבנים בעיר קייב, בהם האקדמיה הלאומית למדעים, מרכז רפואי, ומחסנים, וגרמו לנפגעים בגוף.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T15:16:50+00:00",
     "last_update_at": "2026-09-28T22:26:55+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומספר הנפגעים הכולל אינם מאומתים ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48078",
       "published_at": "2026-09-28T22:26:55+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bycmsv00qfx",
       "published_at": "2026-09-28T21:38:44+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055496/",
       "published_at": "2026-09-28T19:38:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-strikes-downtown-kyiv-kills-one-injures-21-damages-national-academy-of-sciences/",
       "published_at": "2026-09-28T17:49:22+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055488/",
       "published_at": "2026-09-28T17:13:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/28/russia-strike-on-kyiv-science-academy-drone-ukraine",
       "published_at": "2026-09-28T15:16:50+00:00"
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
     "id": "UKRAINE-09282340-02",
     "title": "צו נשיאותי רוסי להגדלת מצבת כוחות הצבא",
     "summary": "נשיא רוסיה ולדימיר פוטין חתם על צו המגדיל את המספר הרשמי של אנשי הצבא בכוחות המזוינים של רוסיה.",
     "axis": "גיוס ובניין כוח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T18:23:00+00:00",
     "last_update_at": "2026-09-28T18:48:12+00:00",
     "what_is_not_verified": "אין פרטים לא מאומתים בנוגע לצו עצמו שפורסם רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_89958f58c3680e1b",
       "url": "https://meduza.io/en/news/2026/09/28/putin-orders-fourth-expansion-of-russia-s-armed-forces-this-year",
       "published_at": "2026-09-28T18:48:12+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_89958f58c3680e1b",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055494/",
       "published_at": "2026-09-28T18:23:00+00:00"
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
     "id": "UKRAINE-09282340-03",
     "title": "אזהרת זלנסקי מפני גיוס נוסף ושילוב חיילים צפון-קוריאנים",
     "summary": "נשיא אוקראינה אזהיר כי רוסיה החלה בגל גיוס נוסף ובהיערכות לקליטת אלפי חיילים צפון-קוריאנים בשטחה.",
     "axis": "גיוס ובניין כוח",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T18:42:00+00:00",
     "last_update_at": "2026-09-28T20:20:59+00:00",
     "what_is_not_verified": "מספר החיילים המדויק שגויס או צפוי להגיע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-beginning-additional-mobilization-of-troops-north-korean-recruitment-zelensky-warns/",
       "published_at": "2026-09-28T20:20:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48074",
       "published_at": "2026-09-28T18:47:11+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055498/",
       "published_at": "2026-09-28T18:42:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09282340-04",
     "title": "השתלטות הקרמלין על נכסי חברת מרקט רוסית",
     "summary": "הקרמלין השתלט על נכסיה של רשת הקמעונאות הגרמנית מטרו הפועלת בשטח רוסיה.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T22:56:25+00:00",
     "last_update_at": "2026-09-28T22:56:25+00:00",
     "what_is_not_verified": "לא צוינו פרטים לא מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/kremlin-seizes-control-of-german-retailer-metro-ags-russian-properties/",
       "published_at": "2026-09-28T22:56:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09282340-05",
     "title": "צו רוסי לאיסור פרסום נתוני ייצוא דלק ואנרגיה",
     "summary": "נשיא רוסיה חתם על צו המונע פרסום נתונים אודות מגזר האנרגיה והדלק כדי להקשות על אכיפת סנקציות מערביות.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-28T20:57:18+00:00",
     "last_update_at": "2026-09-28T20:57:18+00:00",
     "what_is_not_verified": "ההשפעה המדויקת של הצו על המעקב המערבי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/09/28/putin-bans-online-publication-of-fuel-export-and-oil-refinery-processing-data-in-a-bid-to-make-western-sanctions-harder-to-enforce",
       "published_at": "2026-09-28T20:57:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09282340-06",
     "title": "קריאת האפיפיור למשא ומתן וויתורים הדדיים",
     "summary": "האפיפיור קרא לרוסיה ואוקראינה לשבת לשולחן המשא ומתן ולקבל ויתורים כדי להגיע לשלום.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T15:07:54+00:00",
     "last_update_at": "2026-09-28T23:23:07+00:00",
     "what_is_not_verified": "לא רלוונטי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2194247",
       "published_at": "2026-09-28T23:23:07+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/promoting-peace-is-an-active-work-pope-leo-urges-concessions-between-russia-ukraine/",
       "published_at": "2026-09-28T19:18:48+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/sep/28/pope-urges-concessions-for-peace-europe-video",
       "published_at": "2026-09-28T15:07:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מץ, צרפת",
       "lat": 49.1197,
       "lon": 6.1764
      }
     ]
    },
    {
     "id": "UKRAINE-09282340-07",
     "title": "פגיעה במעבר הגבול יגודין סמוך לפולין",
     "summary": "כטב\"ם רוסי מונע סילוני פגע באזור מעבר הגבול יגודין וגרם נזק למבנה הטרמינל.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T15:56:36+00:00",
     "last_update_at": "2026-09-28T16:58:00+00:00",
     "what_is_not_verified": "לא דווח על נפגעים, אך עוצמת ההדף גרמה לנזק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055483/",
       "published_at": "2026-09-28T16:58:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/sep/28/europe-ukraine-defence-ministers-pope-leo-france-visit-latest-news-updates",
       "published_at": "2026-09-28T15:56:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09282340-08",
     "title": "פגיעה במחסני רשת שיווק במחוז קייב",
     "summary": "מתקפה רוסית פגעה במחסנים של רשת המרכולים א.ט.ב במחוז קייב ויצרה שריפה עם עלייה קלה בריכוז האמוניה באזור.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T17:32:00+00:00",
     "last_update_at": "2026-09-28T17:32:00+00:00",
     "what_is_not_verified": "מידת הסכנה האפשרית מעבר לאזור המיידי של השריפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055489/",
       "published_at": "2026-09-28T17:32:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ברובארי, אוקראינה",
       "lat": 50.5111,
       "lon": 30.79
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בתקיפות על קייב וערי אוקראינה",
    "מספר החיילים הצפון-קוריאנים המדויקים שייפרסו בפועל ברוסיה",
    "היקף הנזק המדויק למתקני האנרגיה ברוסיה עקב תקיפות אוקראיניות"
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
     "value": 1.1378,
     "unit": "USD",
     "change_pct": -0.22,
     "source_id": "src_ecb",
     "as_of": "2026-09-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "הגנה על האינטרסים של רוסיה מפני פעולות עוינות של המערב",
      "הרחבת הסד\"כ של הכוחות המזוינים"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והתשתיות של אוקראינה באמצעות מתקפות עצימות",
      "הסתרת נתוני אנרגיה כדי לחמוק מהשפעת סנקציות"
     ],
     "forecast": [
      "המשך הגדלת תקציבי הביטחון והגיוס לקראת שנת 2027",
      "המשך מתקפות אוויריות על ערים מרכזיות באוקראינה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "שחרור כל השטחים הכבושים והגנה על האוכלוסייה",
      "דרישה לאכיפת סנקציות נוקשות נגד רוסיה"
     ],
     "inferred": [
      "פגיעה בתשתיות האנרגיה והכלכלה של רוסיה כדי לשבש את מאמצי המלחמה שלה",
      "גיוס תמיכה בינלאומית וציוד מתקדם מבעלי ברית"
     ],
     "forecast": [
      "המשך תקיפות כטב\"מים בעומק השטח הרוסי נגד מתקני נפט ואנרגיה",
      "מאבק דיפלומטי לגיוס סיוע צבאי נוסף"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/sep/28/europe-ukraine-defence-ministers-pope-leo-france-visit-latest-news-updates",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/promoting-peace-is-an-active-work-pope-leo-urges-concessions-between-russia-ukraine/",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/28/putin-bans-online-publication-of-fuel-export-and-oil-refinery-processing-data-in-a-bid-to-make-western-sanctions-harder-to-enforce",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/28/8055489/",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2194247",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48074",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bycmsv00qfx",
     "accessed_at": "2026-09-28T23:40:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-28T08:57:09+00:00",
  "changes": {
   "UKRAINE-09282340-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעות טילים ורחפנים בערים אוקראיניות ובהן חרקוב, קייב ואודסה",
    "score": 0.817
   },
   "UKRAINE-09282340-02": {
    "kind": "new"
   },
   "UKRAINE-09282340-03": {
    "kind": "new"
   },
   "UKRAINE-09282340-04": {
    "kind": "new"
   },
   "UKRAINE-09282340-05": {
    "kind": "new"
   },
   "UKRAINE-09282340-06": {
    "kind": "new"
   },
   "UKRAINE-09282340-07": {
    "kind": "new"
   },
   "UKRAINE-09282340-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות נרחבות במחוז קייב והרוגים אזרחיים",
    "score": 0.817
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
