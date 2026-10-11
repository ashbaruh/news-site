/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-11T0621__yemen-202610110621.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-11T06:21:37+00:00",
   "window": {
    "from": "2026-10-10T06:21:37+00:00",
    "to": "2026-10-11T06:21:37+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610110621"
   },
   "summary": "העימות בין החות'ים לקואליציה הערבית ולממשלת תימן הסלים משמעותית עם פגיעה קטלנית בריאד לצד קרבות קרקעיים נרחבים. נרשמה פגיעה ישירה של טיל בנמל התעופה הבינלאומי בבירת סעודיה שגרמה לנפגעים רבים ולהשבתת טיסות, בעוד הקואליציה הגיבה בגל תקיפות אוויריות בתימן. במקביל, כוחות ממשלת תימן מנהלים מתקפת נגד בניסיון להשיב שליטה באזור מצר באב אל-מנדב מול החות'ים שהדקו גם את המצור על תעז.",
   "fronts": [
    {
     "name": "חזית תימן - סעודיה (עומק סעודיה)",
     "status": "הסלמה חריפה בעקבות פגיעת טיל בנמל התעופה בריאד, יירוטים באל-חרג' ותקיפות תגובה של הקואליציה בתימן"
    },
    {
     "name": "חזית באב אל-מנדב ודרום-מערב תימן",
     "status": "קרבות עזים במסגרת מתקפת נגד ממשלתית לכיבוש מחדש של המרחב הימי ושימוש חות'י ברחפני FPV"
    },
    {
     "name": "חזית תעז",
     "status": "הידוק מצור חות'י המאיים על פעילות שירותי הרפואה בעיר"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10110621-01",
     "title": "פגיעת טיל בנמל התעופה הבינלאומי בריאד",
     "summary": "פגיעה קטלנית של טיל בנמל התעופה הבינלאומי המלך ח'אלד בריאד גרמה למותם של לפחות 12 בני אדם ולפציעתם של יותר מ-300 נוספים, לצד נזק לטרמינל והשבתת פעילות טיסות.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T15:46:32+00:00",
     "last_update_at": "2026-10-11T06:04:22+00:00",
     "what_is_not_verified": "קבלת אחריות רשמית של החות'ים על השיגור הספציפי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/kuwaits-jazeera-airways-says-riyadh-flights-affected-temporary",
       "published_at": "2026-10-11T06:04:22+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594839",
       "published_at": "2026-10-11T05:55:36+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/attack-riyadh-airport-leaves-12-dead-more-300-injured",
       "published_at": "2026-10-11T00:35:35+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
       "published_at": "2026-10-10T23:37:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/multiple-wounded-suspected-houthi-attack-riyadh-airport",
       "published_at": "2026-10-10T16:28:27+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-strike-saudi-airport-kills-12-worst-attack-kingdom-decade",
       "published_at": "2026-10-10T15:46:32+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי המלך ח'אלד, ריאד, סעודיה",
       "lat": 24.9586,
       "lon": 46.711
      }
     ]
    },
    {
     "id": "YEMEN-10110621-02",
     "title": "מתקפת נגד ותקיפות תגובה של הקואליציה בהובלת סעודיה בתימן",
     "summary": "הקואליציה בהובלת סעודיה תקפה מטרות של החות'ים בתימן, כולל דיווח על תקיפת 136 יעדים צבאיים בתגובה לירי לעבר סעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T08:27:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T08:27:25+00:00",
     "last_update_at": "2026-10-11T05:55:36+00:00",
     "what_is_not_verified": "פירוט המטרות המדויק ומספר הנפגעים בצד החות'י",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594839",
       "published_at": "2026-10-11T05:55:36+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/riyadh-airport-sees-evacuations-yemeni-govt-advances-houthis",
       "published_at": "2026-10-10T08:27:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10110621-03",
     "title": "התקדמות כוחות ממשלת תימן וקרבות באזור מצר באב אל-מנדב",
     "summary": "כוחות ממשלת תימן הנתמכים בידי סעודיה פתחו במתקפת נגד ודיווחו על התקדמות סביב מצר באב אל-מנדב, תוך קרבות עזים שגבו לפחות 63 הרוגים משני הצדדים ביממה.",
     "axis": "פנים-תימני (ממשלת תימן מול החות'ים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T08:27:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T08:27:25+00:00",
     "last_update_at": "2026-10-10T13:45:14+00:00",
     "what_is_not_verified": "שליטה מלאה במעבר הימי והאי מיון (פריים), וטענות הצדדים על הדיפת הכוחות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
       "published_at": "2026-10-10T13:45:14+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-say-advancing-against-houthis-around-bab-al-mandeb",
       "published_at": "2026-10-10T11:40:28+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/riyadh-airport-sees-evacuations-yemeni-govt-advances-houthis",
       "published_at": "2026-10-10T08:27:25+00:00"
      }
     ],
     "places": [
      {
       "name": "האי מיון, תימן",
       "lat": 12.6518,
       "lon": 43.4278
      }
     ]
    },
    {
     "id": "YEMEN-10110621-04",
     "title": "תקיפות רחפני נפץ של החות'ים בדרום-מערב תימן",
     "summary": "החות'ים פרסמו תיעוד של שימוש ברחפני נפץ מתאבדים מסוג שוואז לפגיעה בכלי רכב ובעמדות של כוחות הקואליציה הפרו-סעודית בחזיתות כהבוב ואל-ואזעיה.",
     "axis": "פנים-תימני",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T20:29:13+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T20:29:13+00:00",
     "last_update_at": "2026-10-10T20:29:13+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק ממתקפות הרחפנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48432",
       "published_at": "2026-10-10T20:29:13+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ואזעיה, תימן",
       "lat": 13.174,
       "lon": 43.7298
      }
     ]
    },
    {
     "id": "YEMEN-10110621-05",
     "title": "החרפת המצור על תעז וסכנת קריסה במערכת הבריאות",
     "summary": "ממשלת תימן מדווחת כי הידוק המצור החות'י על העיר תעז מוביל למחסור חמור בדלק ובתרופות ולסכנת השבתה של בתי החולים.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T03:41:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T03:41:58+00:00",
     "last_update_at": "2026-10-11T03:41:58+00:00",
     "what_is_not_verified": "מצב בתי החולים בפועל בשטח ללא בדיקה בלתי תלויה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/11/taiz-hospitals-near-collapse-as-houthis-tighten-siege-yemen-government?traffic_source=rss",
       "published_at": "2026-10-11T03:41:58+00:00"
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
     "id": "YEMEN-10110621-06",
     "title": "יירוט טיל בליסטי באזור אל-חרג' בסעודיה",
     "summary": "הקואליציה להחזרת הלגיטימיות בתימן הודיעה על יירוט והשמדת טיל בליסטי ששוגר על ידי החות'ים לעבר מחוז אל-חרג'.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T22:51:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T22:51:53+00:00",
     "last_update_at": "2026-10-10T22:51:53+00:00",
     "what_is_not_verified": "נזק אפשרי מרסיסי היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_f9c1858e33f1cecd",
       "url": "https://www.sabanew.net/viewstory/153767",
       "published_at": "2026-10-10T22:51:53+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חרג', סעודיה",
       "lat": 23.8304,
       "lon": 47.684
      }
     ]
    }
   ],
   "not_verified": [
    "קבלת אחריות מפורשת של החות'ים על פגיעת הטיל בריאד",
    "השליטה המלאה על נתיב השיט בבאב אל-מנדב והאי מיון",
    "מספר הנפגעים המדויק ממתקפת הרחפנים בכהבוב ובאל-ואזעיה",
    "היקף הנזק והנפגעים בתקיפות הקואליציה על 136 היעדים בתימן"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "תגובה תקיפה ובלתי מתפשרת להפצצת נמל התעופה בריאד",
      "הגנה על הריבונות והביטחון של הממלכה ויירוט איומים בליסטיים"
     ],
     "inferred": [
      "החזרת ההרתעה מול מערכי הטילים והכוחות החות'יים",
      "שמירה על יציבות שגרת הכלכלה, התעופה והכנסים הבינלאומיים במדינה",
      "דחיקת החות'ים מאזורי החוף וממצרי באב אל-מנדב בעזרת כוחות מקומיים"
     ],
     "forecast": [
      "העמקת תקיפות התגובה האוויריות בתימן בשיתוף אפשרי עם כוחות ארצות הברית",
      "הגברת מאמצי ההגנה האווירית סביב מתקנים אסטרטגיים בממלכה"
     ]
    },
    {
     "actor": "החות'ים",
     "declared": [
      "בלימת התקדמות כוחות הממשלה והקואליציה מכיוון לחג' לעבר באב אל-מנדב"
     ],
     "inferred": [
      "שיבוש התעופה והפגנת יכולת פגיעה בעומק סעודיה להפעלת לחץ כלכלי ומדיני",
      "שימור האחיזה המבצעית בקו החוף המערבי ובמצר באב אל-מנדב",
      "הכרעת כוחות יריבים באמצעות שילוב כטב\"מים מדויקים ורחפני נפץ"
     ],
     "forecast": [
      "המשך ניסיונות שיגור טילים וכטב\"מים לעבר יעדי תשתית סעודיים",
      "התבצרות בעמדות שליטה סמוך למצר באב אל-מנדב והתנגדות למתקפת הנגד"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "מתקפת נגד לכיבוש מחדש של השטחים שנכבשו במערב המדינה וסביב באב אל-מנדב",
      "סולידריות מלאה עם סעודיה ומחויבות לסיום הטרור החות'י"
     ],
     "inferred": [
      "שבירת המצור החות'י באזור תעז",
      "ניצול הסיוע האווירי הסעודי להחזרת שטחים בעלי חשיבות ימית אסטרטגית"
     ],
     "forecast": [
      "המשך לחימה קרקעית עצימה בדרום-מערב המדינה על מוקדי שליטה ימיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/11/taiz-hospitals-near-collapse-as-houthis-tighten-siege-yemen-government?traffic_source=rss",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/houthi-strike-saudi-airport-kills-12-worst-attack-kingdom-decade",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594839",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/attack-riyadh-airport-leaves-12-dead-more-300-injured",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/riyadh-airport-sees-evacuations-yemeni-govt-advances-houthis",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153767",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48432",
     "accessed_at": "2026-10-11T06:21:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-10T15:56:49+00:00",
  "changes": {
   "YEMEN-10110621-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות טילים של החות'ים על נמל התעופה הבינלאומי בריאד",
    "score": 1.0
   },
   "YEMEN-10110621-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות נרחבות של הקואליציה בצנעא ובאזורים שבשליטת החות'ים",
    "score": 1.0
   },
   "YEMEN-10110621-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מתקפת נגד של כוחות ממשלת תימן באזור מצר באב אל-מנדב",
    "score": 1.0
   },
   "YEMEN-10110621-04": {
    "kind": "new"
   },
   "YEMEN-10110621-05": {
    "kind": "new"
   },
   "YEMEN-10110621-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-10T2340__iran-202610102340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-10T23:40:27+00:00",
   "window": {
    "from": "2026-10-09T23:40:27+00:00",
    "to": "2026-10-10T23:40:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610102340"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין בלחץ כלכלי כבד ובשיבוש מכליות נפט במצר הורמוז לצד פעילות צבאית גוברת של החות'ים נגד יעדים בסעודיה. במקביל לאיומי מלחמה הדדיים ולשיקום תשתיות צבאיות באיראן, מתקיימים ערוצי תיווך רוסיים לבחינת הסדרים, בעוד ישראל וארה\"ב שוקלות את תזמון מהלכיהן הצבאיים לאור שיקולים פוליטיים פנימיים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פגיעות בכלי שיט, פיצוץ מיכלית ממוקש ימי ושיבוש תנועת סחר האנרגיה העולמית."
    },
    {
     "name": "החזית הכלכלית והסנקציות",
     "status": "הידוק המצור הכלכלי על הכנסות הנפט ונתיבי היבשה של איראן."
    },
    {
     "name": "ציר החות'ים וסעודיה",
     "status": "מתקפות טילים קטלניות על שדה התעופה בריאד לצד שקילת מעורבות צבאית אמריקאית."
    },
    {
     "name": "חזית הגרעין והטילים באיראן",
     "status": "פעולות שיקום מתקנים שנפגעו מתקיפות ישראליות ודיון פנימי על מדיניות העמימות הגרעינית."
    }
   ],
   "events": [
    {
     "id": "IRAN-10102340-01",
     "title": "מתקפת טילים על נמל התעופה הבינלאומי בריאד",
     "summary": "החות'ים שיגרו טילים לעבר נמל התעופה הבינלאומי בריאד שבסעודיה, וכתוצאה מכך נגרמו עשרות נפגעים והושבתו הפעילויות במקום.",
     "axis": "שלוחות איראן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T13:45:14+00:00",
     "last_update_at": "2026-10-10T23:37:27+00:00",
     "what_is_not_verified": "מספר ההרוגים והפצועים המדויק (נע בין 2 הרוגים ל-12 הרוגים ומעל 300 פצועים)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
       "published_at": "2026-10-10T23:37:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261010-riyadh-airport-suspends-operations-after-attack-leaves-multiple-people-wounded",
       "published_at": "2026-10-10T18:03:32+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-attack-saudi-airport-kills-12-over-300-wounded-authorities-say",
       "published_at": "2026-10-10T15:46:32+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
       "published_at": "2026-10-10T13:45:14+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי המלך ח'אלד, ריאד, ערב הסעודית",
       "lat": 24.9586,
       "lon": 46.711
      }
     ]
    },
    {
     "id": "IRAN-10102340-02",
     "title": "פיצוץ מוקש ימי במיכלית נפט במצר הורמוז",
     "summary": "מיכלית נפט גולמי נפגעה ממוקש ימי והתלקחה במצר הורמוז; משמרות המהפכה טוענים כי כלי השיט סטה לנתיב בלתי מורשה וכיבה מערכות זיהוי.",
     "axis": "איראן - מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T17:19:07+00:00",
     "last_update_at": "2026-10-10T21:45:24+00:00",
     "what_is_not_verified": "זהות המיכלית והגורם שהניח את המוקש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_31a96301d52ebe99",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-oil-supertanker-hit-mine-strait-hormuz",
       "published_at": "2026-10-10T21:45:24+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_31a96301d52ebe99",
       "url": "https://en.irna.ir/news/86288817/IRGC-Offending-supertanker-is-burning-in-Strait-of-Hormuz",
       "published_at": "2026-10-10T17:19:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-03",
     "title": "הצגת תוכנית סנקציות כלכליות אמריקאיות נגד איראן",
     "summary": "שר האוצר של ארה\"ב הציג תוכנית לשלילת הכנסות מנפט, חסימת גישה למערכות פיננסיות וסגירת נתיבי סחר יבשתיים דרך טורקיה במטרה לחנוק את כלכלת איראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T23:23:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T23:23:00+00:00",
     "last_update_at": "2026-10-10T23:23:00+00:00",
     "what_is_not_verified": "אופן יישום הסנקציות על נתיבי הסחר היבשתיים בטורקיה ומידת השפעתן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610091055",
       "published_at": "2026-10-10T23:23:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-04",
     "title": "העברת מסר מאיראן לארה\"ב בנושא הסדר עימות",
     "summary": "נשיא רוסיה שוחח טלפונית עם נשיא ארה\"ב והעביר לו את עמדת טהראן בנוגע לאפשרות להגיע להסכם לסיום העימות.",
     "axis": "ארה\"ב - איראן - רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T21:41:53+00:00",
     "last_update_at": "2026-10-10T12:30:21+00:00",
     "what_is_not_verified": "תוכן העמדה האיראנית ותגובתו של נשיא ארה\"ב להצעה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/putin-told-trump-about-irans-position-peace-deal-kremlin",
       "published_at": "2026-10-10T12:30:21+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48415",
       "published_at": "2026-10-10T11:42:53+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48405",
       "published_at": "2026-10-09T21:41:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-05",
     "title": "מגעים בין ארה\"ב לישראל על תקיפה באיראן",
     "summary": "גורמים בארה\"ב ביקשו מישראל לתקוף לבדה באיראן, אך המהלך נבלם וירד מהפרק לאחר שהרמטכ\"ל התריע מפני דחיית מועד הבחירות בישראל.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T12:55:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T12:55:57+00:00",
     "last_update_at": "2026-10-10T17:38:08+00:00",
     "what_is_not_verified": "האם אכן הועברה דרישה אמריקאית רשמית לפעולה ישראלית עצמאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956963",
       "published_at": "2026-10-10T17:38:08+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956914",
       "published_at": "2026-10-10T12:55:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10102340-06",
     "title": "פעולות שיקום באתר מחקר גרעיני וטילים באיראן",
     "summary": "מכוני מחקר ודיווחים מצביעים על עבודות בנייה ושיקום במתחם איראני שנפגע בעבר מתקיפה ישראלית וקשור למחקר נשק גרעיני, לצד דיווחים על שיקום ייצור טילים בסיוע רוסי.",
     "axis": "איראן - ישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T12:53:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T12:53:25+00:00",
     "last_update_at": "2026-10-10T16:38:12+00:00",
     "what_is_not_verified": "היקף השיקום המדויק ורמת החזרה לכשירות מבצעית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610109658",
       "published_at": "2026-10-10T16:38:12+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/article/21591742",
       "published_at": "2026-10-10T15:46:13+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1h2zswsge",
       "published_at": "2026-10-10T12:53:25+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "המספר המדויק של הנפגעים וההרוגים במתקפה בנמל התעופה בריאד.",
    "הטענה של איראן כי המיכלית שנפגעה שטה בנתיב לא מורשה וכיבתה מערכות זיהוי.",
    "טענות על דרישה ישירה מארה\"ב שישראל תתקוף באיראן באופן עצמאי.",
    "מידת ההתקדמות בשיקום מפעלי הטילים ומתקני הגרעין שנפגעו באיראן.",
    "ההערכה כי הכנסות הנפט של איראן יתאפסו לחלוטין עד אמצע חודש דצמבר."
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "הפעלת לחץ כלכלי לחניקת כלכלת איראן ואיפוס הכנסות הנפט שלה.",
      "דרישה מאיראן להיענות לכלל הדרישות האמריקאיות כתנאי למניעת פגיעה בקיומה."
     ],
     "inferred": [
      "הימנעות מהסלמה צבאית נרחבת לפני בחירות האמצע בארה\"ב.",
      "בחינת אפשרות להצטרפות לתקיפות נגד החות'ים לצד סעודיה."
     ],
     "forecast": [
      "המשך אכיפה קפדנית של סנקציות תוך דחיית תקיפות יזומות עד לאחר ההצבעה בקלפיות."
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "אי-כניעה לאיומים צבאיים וללחצים כלכליים של ארה\"ב.",
      "אכיפת כללי ביטחון מחמירים ואיסור חריגה מנתיבי שיט במצר הורמוז."
     ],
     "inferred": [
      "שיקום יכולות הטילים ואתרי מחקר שנפגעו בסיוע גורמים זרים כדי לשמר כושר הרתעה.",
      "שימוש ברוסיה כמתווכת להעברת עמדות לטראמפ לשם בחינת הסדר מדיני מקל."
     ],
     "forecast": [
      "המשך הטרדת נתיבי השיט במפרץ ובחינה מחדש של מדיניות העמימות בנושא הגרעין."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הימנעות מפעולה יזומה באיראן כל עוד טהראן אינה נוקטת צעדים חריגים."
     ],
     "inferred": [
      "העדפת דחיית מלחמה גלויה באיראן כדי לא לשבש את קיום הבחירות לכנסת.",
      "התנגדות לביצוע תקיפה עצמאית ללא תיאום או שילוב כוחות אמריקאיים."
     ],
     "forecast": [
      "שמירה על כוננות ודחיית מבצעים צבאיים נרחבים עד למועד שלאחר הבחירות בישראל."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/putin-told-trump-about-irans-position-peace-deal-kremlin",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261010-yemen-says-forces-made-advances-against-houthis-around-key-waterway",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610109658",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86288817/IRGC-Offending-supertanker-is-burning-in-Strait-of-Hormuz",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/article/21591742",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-oil-supertanker-hit-mine-strait-hormuz",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48405",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956914",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1h2zswsge",
     "accessed_at": "2026-10-10T23:40:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-10T06:19:31+00:00",
  "changes": {
   "IRAN-10102340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים וטילים של החות'ים על נמל התעופה בריאד",
    "score": 0.65
   },
   "IRAN-10102340-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "אכיפת סגר ימי אמריקני והפניית כלי שיט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-10102340-03": {
    "kind": "new"
   },
   "IRAN-10102340-04": {
    "kind": "new"
   },
   "IRAN-10102340-05": {
    "kind": "new"
   },
   "IRAN-10102340-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-10T2341__ukraine-202610102341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-10T23:41:20+00:00",
   "window": {
    "from": "2026-10-09T23:41:20+00:00",
    "to": "2026-10-10T23:41:20+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610102341"
   },
   "summary": "צבא רוסיה מגביר את תקיפותיו האוויריות על תשתיות וריכוזי אוכלוסייה בערי אוקראינה, בעוד אוקראינה ממשיכה לפגוע במתקני אנרגיה בתוך רוסיה ובשיירות אספקה בחזית. ברקע הלחימה התגלע שבר מדיני חריף בעקבות סיכום בין נשיא ארצות הברית לרוסיה על הקלת סנקציות לצורך ייצוא סולר, מהלך שעורר התנגדות חריפה מצד קייב ומדינות אירופה.",
   "fronts": [
    {
     "name": "חזית זפוריז'יה",
     "status": "תקיפות כבדות של פצצות דאייה רוסיות על מבנים אזרחיים בעיר עם נפגעים רבים."
    },
    {
     "name": "חזית קופיאנסק ולוהנסק",
     "status": "פגיעה רוסית בגשר נהר אוסקול לשיבוש לוגיסטיקה, לצד השמדת שיירה צבאית רוסית בידי צנחנים אוקראינים בסוואטובה."
    },
    {
     "name": "העורף והתשתיות באוקראינה (קייב, אודסה, דניפרופטרובסק)",
     "status": "תקיפות מתמשכות באמצעות כטב\"מים וטילים הגורמות לשיבושי חשמל ומים ולנזק למבנים."
    },
    {
     "name": "עומק שטח רוסיה",
     "status": "מתקפות אוקראיניות על בתי זיקוק ומסופי נפט בסמרה וברוסטוב."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10102341-01",
     "title": "תקיפה אווירית רוסית קטלנית בזפוריז'יה",
     "summary": "פצצות דאייה רוסיות פגעו בבניין מגורים רב-קומות וגרמו למותם של לפחות עשרים בני אדם ולפציעת עשרות נוספים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T18:52:00+00:00",
     "last_update_at": "2026-10-10T20:51:12+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו אחיד בין המקורות השונים (נע בין שמונה עשרה לשלושים ושניים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.bbc.co.uk/news/articles/cwvgdpv642g5o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-10T20:51:12+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.ukrinform.net/rubric-ato/4173122-russian-guided-bomb-attack-on-zaporizhzhia-kills-20-injures-32.html",
       "published_at": "2026-10-10T19:30:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.ynet.co.il/news/article/s1winlusgg",
       "published_at": "2026-10-10T18:54:40+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e18f7155f15995e2",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057385/",
       "published_at": "2026-10-10T18:52:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-02",
     "title": "הסכם סולר בין ארצות הברית לרוסיה והקלת עיצומים",
     "summary": "נשיא ארצות הברית סיכם עם מקבילו הרוסי על אספקת כמויות גדולות של סולר לשוק הבינלאומי, תוך מתן היתר להקלת עיצומים אמריקאיים.",
     "axis": "מדיני ועיצומים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T00:02:06+00:00",
     "last_update_at": "2026-10-10T20:42:55+00:00",
     "what_is_not_verified": "היקף הייצוא המיידי המדויק וההשלכות על השוק הפנימי ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-russia-strikes-war-trump-diesel-deal-zelenskyy",
       "published_at": "2026-10-10T20:42:55+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/will-only-lead-to-more-slaughter-bipartisan-backlash-erupts-in-us-over-trump-russia-diesel-deal/",
       "published_at": "2026-10-10T20:41:26+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-partially-lifts-ban-on-diesel-exports-after-trump-putin-deal/",
       "published_at": "2026-10-10T19:26:41+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/10/trump-calls-on-ukraine-to-replace-zelensky",
       "published_at": "2026-10-10T17:32:36+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057392/",
       "published_at": "2026-10-10T17:13:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/10/we-re-being-used-as-a-front-zelensky-says-of-trump-s-diesel-deal-with-putin",
       "published_at": "2026-10-10T00:02:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10102341-03",
     "title": "תקיפות כטב\"מים וטילים על קייב",
     "summary": "שברי יירוט של טילים וכלי טיס בלתי מאוישים נפלו על מבני מגורים, גן ילדים ועסקים באזורים שונים בבירה וגרמו לפציעות.",
     "axis": "חזית המרכז / העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T16:30:00+00:00",
     "last_update_at": "2026-10-10T18:54:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_f6cf19ab1ab44775",
       "url": "https://www.ynet.co.il/news/article/s1winlusgg",
       "published_at": "2026-10-10T18:54:40+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_f6cf19ab1ab44775",
       "url": "https://www.theguardian.com/global/video/2026/oct/10/man-narrowly-escapes-drone-strike-on-playground-in-kyiv-video",
       "published_at": "2026-10-10T17:06:19+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f6cf19ab1ab44775",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057366/",
       "published_at": "2026-10-10T16:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "סביאטופטריבסקה, אוקראינה",
       "lat": 50.3852,
       "lon": 30.3228
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-04",
     "title": "פגיעות במבנים באודסה",
     "summary": "תקיפה רוסית על עיר הנמל פגעה בבניין משרדים ובמבנה מגורים, ללא דיווח ראשוני על נפגעים בנפש.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T16:36:00+00:00",
     "last_update_at": "2026-10-10T19:52:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המלא בעקבות הפגיעה במבנה המגורים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_f441892686aff55a",
       "url": "https://www.ukrinform.net/rubric-ato/4173123-odesa-under-russian-attack-residential-building-damaged-lysak.html",
       "published_at": "2026-10-10T19:52:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f441892686aff55a",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057389/",
       "published_at": "2026-10-10T16:36:00+00:00"
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
     "id": "UKRAINE-10102341-05",
     "title": "השמדת שיירה צבאית רוסית בסוואטובה",
     "summary": "כוחות צנחנים של צבא אוקראינה תקפו והשמידו שיירה של חיילים רוסים במחוז לוהנסק.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T20:54:00+00:00",
     "last_update_at": "2026-10-10T20:54:00+00:00",
     "what_is_not_verified": "מספר הנפגעים והיקף הציוד שהושמד בשיירה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173131-ukrainian-paratroopers-destroy-russian-convoy-in-svatove.html",
       "published_at": "2026-10-10T20:54:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סוואטובה, אוקראינה",
       "lat": 49.4177,
       "lon": 38.1457
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-06",
     "title": "תקיפות אוקראיניות על מתקני אנרגיה בתוך רוסיה",
     "summary": "אוקראינה המשיכה לפגוע בתשתיות נפט וסולר בשטח רוסיה, כולל תחנת שאיבה בסמרה ואתרים באזור רוסטוב.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T07:18:34+00:00",
     "last_update_at": "2026-10-10T13:53:42+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת ליכולת הזיקוק הכוללת של רוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21591307",
       "published_at": "2026-10-10T13:53:42+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkttvlpjzl",
       "published_at": "2026-10-10T07:18:34+00:00"
      }
     ],
     "places": [
      {
       "name": "סמרה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      },
      {
       "name": "רוסטוב, רוסיה",
       "lat": 47.2223,
       "lon": 39.7199
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-07",
     "title": "תקיפת כטב\"ם במחוז דניפרופטרובסק",
     "summary": "ילד בן אחת עשרה נהרג וחמישה בני אדם נפצעו בתקיפת כלי טיס בלתי מאויש רוסי באזור דניפרופטרובסק.",
     "axis": "חזית המרכז והמזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T22:51:10+00:00",
     "last_update_at": "2026-10-10T22:51:10+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/11-year-old-boy-killed-five-injured-by-russian-drone-attack-in-dnipropetrovsk-oblast/",
       "published_at": "2026-10-10T22:51:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10102341-08",
     "title": "הריסת גשר על נהר אוסקול",
     "summary": "הצבא הרוסי השמיד מעבר גשר על נהר אוסקול באזור קופיאנסק במטרה לשבש את השרשרת הלוגיסטית של הצבא האוקראיני.",
     "axis": "גזרת קופיאנסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T23:14:46+00:00",
     "last_update_at": "2026-10-10T23:14:46+00:00",
     "what_is_not_verified": "מידת ההשפעה המבצעית בפועל על מהלך הקרבות באזור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2200399",
       "published_at": "2026-10-10T23:14:46+00:00"
      }
     ],
     "places": [
      {
       "name": "קופיאנסק, אוקראינה",
       "lat": 49.7133,
       "lon": 37.6142
      }
     ]
    },
    {
     "id": "UKRAINE-10102341-09",
     "title": "סירוב אירופי להעברת טילי פטריוט",
     "summary": "ספרד ויוון דחו בקשות למסור לאוקראינה טילי יירוט מסוג פטריוט שתוקפם מתקרב לסיומו.",
     "axis": "סיוע צבאי בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T22:30:00+00:00",
     "last_update_at": "2026-10-10T22:30:00+00:00",
     "what_is_not_verified": "כמות הטילים המדויקת שבידי המדינות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4172936-spain-and-greece-refuse-to-give-ukraine-patriot-missiles-nearing-expiration.html",
       "published_at": "2026-10-10T22:30:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10102341-10",
     "title": "גזרי דין ללוחמים שפעלו בשירות רוסיה",
     "summary": "בית משפט אוקראיני גזר חמש עשרה שנות מאסר על תשעה אזרחים שהורשעו בלחימה לצד הכוחות הרוסיים במחוז דונצק.",
     "axis": "משפט ופנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T21:36:00+00:00",
     "last_update_at": "2026-10-10T21:36:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-crime/4172915-nine-traitors-who-fought-for-russia-sentenced-to-15-years-in-prison-each.html",
       "published_at": "2026-10-10T21:36:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז דונצק, אוקראינה",
       "lat": 48.0265,
       "lon": 37.7916
      }
     ]
    }
   ],
   "not_verified": [
    "טענת ערוצים רוסיים לפיה ראש עיריית דנייפר עזב את אוקראינה עקב חקירות שחיתות.",
    "הטענה כי כחמישים אחוז מכושר הזיקוק ברוסיה הושבת בעקבות הפגיעות האוקראיניות.",
    "מספר הפצועים המדויק בתקיפה על זפוריז'יה בשל סתירות בין המקורות השונים."
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
     "value": 1.1206,
     "unit": "USD",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הפעולות הצבאיות עד להשגת כלל היעדים ושלילת שיחות שלום בעת הנוכחית.",
      "חידוש הזרמת סולר לשווקים הבינלאומיים והקלת מגבלות הייצוא העצמיות."
     ],
     "inferred": [
      "ניצול ההסכמות הכלכליות עם ארצות הברית להכנסת כספים למימון המאמץ המלחמתי.",
      "שבירת כושר העמידה האוקראיני דרך פגיעה מסיבית במערכות אנרגיה עירוניות."
     ],
     "forecast": [
      "המשך לחץ אווירי על ערי מפתח לקראת עונת החורף.",
      "מאמצים לקבע את השליטה באזורים שנכבשו תוך הרחבת פגיעות לוגיסטיות בציר קופיאנסק."
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "התנגדות מוחלטת להקלת העיצומים על רוסיה והגדרתה כמימון ישיר של המלחמה.",
      "המשך הגנה על תשתיות לאומיות ופגיעה בריכוזי כוחות האויב."
     ],
     "inferred": [
      "המשך פגיעה מכוונת בבתי זיקוק רוסיים כדי ללחוץ על הכלכלה הרוסית חרף דרישות וושינגטון.",
      "התמודדות עם משבר דיפלומטי חמור מול הממשל האמריקאי."
     ],
     "forecast": [
      "המשך תקיפות ממוקדות בעומק רוסיה חרף הלחץ החיצוני לחדול מכך.",
      "הישענות מוגברת על האיחוד האירופי לאספקת מערכות הגנה וסנקציות חדשות."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הורדת מחירי הדלק והסולר בשוק המקומי והעולמי לקראת בחירות האמצע.",
      "קריאה להפסקת התקיפות האוקראיניות על מתקני נפט והחלפת ההנהגה בקייב לצורך הגעה להסכם."
     ],
     "inferred": [
      "הפעלת מנופי לחץ כבדים על אוקראינה כדי לכפות משא ומתן עם מוסקבה.",
      "העדפת אינטרסים כלכליים ופוליטיים פנימיים על פני המשך התיאום ההדוק עם קייב."
     ],
     "forecast": [
      "העמקת המתיחות מול ההנהגה האוקראינית ומול חלק מבעלות הברית באירופה.",
      "התגברות המחלוקת הפנים-אמריקאית בקונגרס סביב הקלות העיצומים לרוסיה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwvgdpv642g5o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/global/video/2026/oct/10/man-narrowly-escapes-drone-strike-on-playground-in-kyiv-video",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21591307",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/11-year-old-boy-killed-five-injured-by-russian-drone-attack-in-dnipropetrovsk-oblast/",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/10/we-re-being-used-as-a-front-zelensky-says-of-trump-s-diesel-deal-with-putin",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057389/",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2200399",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-crime/4172915-nine-traitors-who-fought-for-russia-sentenced-to-15-years-in-prison-each.html",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bkttvlpjzl",
     "accessed_at": "2026-10-10T23:41:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-10T06:20:34+00:00",
  "changes": {
   "UKRAINE-10102341-01": {
    "kind": "possible",
    "prev": "תקיפת פצצות דואות על בניין מגורים בזפוריז'יה",
    "score": 0.633
   },
   "UKRAINE-10102341-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הסכם אספקת סולר מרוסיה והקלת סנקציות אמריקאיות",
    "score": 1.0
   },
   "UKRAINE-10102341-03": {
    "kind": "possible",
    "prev": "נפילת שברי כטב\"ם באזור קייב",
    "score": 0.633
   },
   "UKRAINE-10102341-04": {
    "kind": "new"
   },
   "UKRAINE-10102341-05": {
    "kind": "new"
   },
   "UKRAINE-10102341-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות כטב\"מים אוקראיניים על יעדי אנרגיה ומבנים במחוז רוסטוב",
    "score": 0.817
   },
   "UKRAINE-10102341-07": {
    "kind": "new"
   },
   "UKRAINE-10102341-08": {
    "kind": "new"
   },
   "UKRAINE-10102341-09": {
    "kind": "new"
   },
   "UKRAINE-10102341-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-11T0622__north-202610110622.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-11T06:22:44+00:00",
   "window": {
    "from": "2026-10-10T06:22:44+00:00",
    "to": "2026-10-11T06:22:44+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610110622"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית עצימה לצד מתיחות אווירית שוטפת מול לבנון. כוחות צה\"ל מבצעים תקיפות, הפגזות ושיגורי יירוט בדרום לבנון, לצד סריקות נרחבות בגליל המערבי בעקבות חדירות אוויריות בלתי מזוהות. במקביל, רשויות הביטחון בלבנון פועלות לסיכול חומרי נפץ של גורמי חיזבאללה, ובציר הדיפלומטי-צבאי נרשם שיח ישיר בין מפקדי הצבאות של טורקיה וסוריה.",
   "fronts": [
    {
     "name": "גבול ישראל-לבנון ודרום לבנון",
     "status": "לחימה פעילה, תקיפות אוויריות, שיגורי יירוט ודריכות בעקבות חדירות כלי טיס"
    },
    {
     "name": "פנים לבנון מול חיזבאללה",
     "status": "פעילות אכיפה של מנגנוני הביטחון וסיכול אמצעי לחימה של הארגון"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "הברחות מתמשכות של בני אדם דרך נתיבים הרריים עוקפים"
    },
    {
     "name": "ציר טורקיה-סוריה",
     "status": "ערוצי תקשורת פתוחים ברמת הפיקוד הצבאי הבכיר"
    }
   ],
   "events": [
    {
     "id": "NORTH-10110622-01",
     "title": "זיהוי עצם אווירי בלתי מזוהה שחצה מלבנון וסריקות בגליל המערבי",
     "summary": "התרעות הופעלו באזור ערב אל-עראמשה עקב חדירת עצם אווירי לא מזוהה מלבנון לשטח ישראל. כוחות ביטחון ופיקוד הצפון פתחו בסריקות מהקרקע ומהאוויר באזור ובסביבתו, ובהמשך הוסר החשש ללא איתור ממצאים חריגים.",
     "axis": "גבול ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T17:05:22+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T17:05:22+00:00",
     "last_update_at": "2026-10-11T06:01:37+00:00",
     "what_is_not_verified": "סוג העצם המדויק ומיקומו הסופי טרם נקבעו בוודאות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21594921",
       "published_at": "2026-10-11T06:01:37+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1ptysdime",
       "published_at": "2026-10-11T05:42:43+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957000",
       "published_at": "2026-10-11T04:54:05+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25331",
       "published_at": "2026-10-10T20:41:34+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hy4hkwdomx",
       "published_at": "2026-10-10T19:02:25+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94578",
       "published_at": "2026-10-10T17:14:16+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956956",
       "published_at": "2026-10-10T17:05:22+00:00"
      }
     ],
     "places": [
      {
       "name": "ערב אל-עראמשה, ישראל",
       "lat": 33.0886,
       "lon": 35.2265
      },
      {
       "name": "שלומי, ישראל",
       "lat": 33.0761,
       "lon": 35.1486
      },
      {
       "name": "נהריה, ישראל",
       "lat": 33.0066,
       "lon": 35.0984
      }
     ]
    },
    {
     "id": "NORTH-10110622-02",
     "title": "שיגור מיירט לעבר מטרה אווירית חשודה בדרום לבנון",
     "summary": "מיירט צה\"לי שוגר לעבר מטרה אווירית חשודה שזוהתה באזור פעילות כוחות הצבא בדרום לבנון, ללא הפעלת התרעות בעורף.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T14:50:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T14:50:18+00:00",
     "last_update_at": "2026-10-10T14:51:36+00:00",
     "what_is_not_verified": "תוצאות היירוט נותרו בבדיקה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131674",
       "published_at": "2026-10-10T14:51:36+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25326",
       "published_at": "2026-10-10T14:50:18+00:00"
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
     "id": "NORTH-10110622-03",
     "title": "תקיפות אוויריות והפגזות של צה\"ל בדרום לבנון",
     "summary": "דווח על תקיפה אווירית ישראלית באל-מנצורי ועל ירי ארטילרי בין מיפדון לזווטר א-שרקיה במחוז א-נבטיה, לצד הטלת פצצות תאורה מעל מרחב מרג' עיון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T23:05:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T23:05:37+00:00",
     "last_update_at": "2026-10-11T06:17:35+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בתקיפות אלו לא צוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_d3b50d7212cde3e0",
       "url": "https://english.almanar.com.lb/article/136782/",
       "published_at": "2026-10-11T06:17:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_d3b50d7212cde3e0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-death-toll-israeli-military-attacks-2-march-rises-4386",
       "published_at": "2026-10-10T23:05:37+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "א-נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "מרג' עיון, לבנון",
       "lat": 33.3593,
       "lon": 35.5902
      }
     ]
    },
    {
     "id": "NORTH-10110622-04",
     "title": "תפיסת חומרי נפץ ומעצר חשודים המקושרים לחיזבאללה בלבנון",
     "summary": "מנגנוני הביטחון בלבנון תפסו כלי רכב עמוס בכחצי טון חומרי נפץ ועצרו שני חשודים המזוהים עם חיזבאללה, בהם בנו של בכיר בארגון.",
     "axis": "פנים לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T05:23:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T05:23:01+00:00",
     "last_update_at": "2026-10-11T05:23:01+00:00",
     "what_is_not_verified": "זהות המתכננים ומטרת השינוע המלאה עדיין בחקירה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594695",
       "published_at": "2026-10-11T05:23:01+00:00"
      }
     ],
     "places": [
      {
       "name": "לבנון",
       "lat": 40.3757,
       "lon": -76.4626
      }
     ]
    },
    {
     "id": "NORTH-10110622-05",
     "title": "שיחה בין מפקדי הצבאות של טורקיה וסוריה",
     "summary": "רמטכ\"ל צבא טורקיה שוחח בטלפון עם מקבילו הסורי בנוגע לקשרים הדדיים ולסוגיות אזוריות.",
     "axis": "טורקיה-סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T16:17:26+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T16:17:26+00:00",
     "last_update_at": "2026-10-10T16:17:26+00:00",
     "what_is_not_verified": "פרטי השיחה המלאים וההסכמות שהושגו לא פורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/turkiye/turkish-syrian-military-chiefs-discuss-bilateral-ties-regional-issues/4084623",
       "published_at": "2026-10-10T16:17:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10110622-06",
     "title": "חשיפת נתיבי הברחת בני אדם בגבול סוריה-לבנון",
     "summary": "נחשפו מסלולי תנועה עוקפים שבאמצעותם מוברחים אזרחים סורים לתוך שטח לבנון תוך עקיפת מחסומי צבא לבנון בצפון המדינה.",
     "axis": "גבול סוריה-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T14:05:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T14:05:00+00:00",
     "last_update_at": "2026-10-10T14:05:00+00:00",
     "what_is_not_verified": "היקף המוברחים היומי הכולל והרשתות המפעילות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_2e6f8bda27564370",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962123/inside-lebanons-human-smuggling-routes-along-the-syrian-border/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962123",
       "published_at": "2026-10-10T14:05:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר עמאר, לבנון",
       "lat": 34.462,
       "lon": 35.8994
      },
      {
       "name": "תרבול, לבנון",
       "lat": 33.8131,
       "lon": 35.9903
      }
     ]
    },
    {
     "id": "NORTH-10110622-07",
     "title": "שחיקה מבצעית ותאונות של כוחות ישראליים בגזרת הליטני",
     "summary": "התהפכות רכב צבאי באזור נהר הליטני גרמה למותו של קצין ולפציעת חיילים, על רקע אזהרות במערכת הביטחון הישראלית משחיקה ומפגיעה בעירנות הכוחות הפרוסים בגזרה.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T15:35:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T15:35:12+00:00",
     "last_update_at": "2026-10-10T15:35:12+00:00",
     "what_is_not_verified": "הגדרת רמת השחיקה המדויקת של כלל הכוחות מבוססת על הערכות גורמים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/fatigue-carelessness-causing-casualties-among-israeli-forces",
       "published_at": "2026-10-10T15:35:12+00:00"
      }
     ],
     "places": [
      {
       "name": "נהר הליטני, לבנון",
       "lat": 33.552,
       "lon": 35.6924
      }
     ]
    },
    {
     "id": "NORTH-10110622-08",
     "title": "פרסום מניין נפגעים מצטבר מתקיפות צה\"ל בלבנון",
     "summary": "משרד הבריאות הציבורית בלבנון עדכן את נתוני הנפגעים ודיווח על אלפי הרוגים ופצועים כתוצאה מתקיפות ישראליות בתקופות המעקב השונות.",
     "axis": "לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T23:05:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T23:05:37+00:00",
     "last_update_at": "2026-10-10T23:05:37+00:00",
     "what_is_not_verified": "חלוקת הנפגעים בין אזרחים לפעילי ארגונים חמושים אינה מצוינת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-death-toll-israeli-military-attacks-2-march-rises-4386",
       "published_at": "2026-10-10T23:05:37+00:00"
      }
     ],
     "places": [
      {
       "name": "לבנון",
       "lat": 40.3757,
       "lon": -76.4626
      }
     ]
    }
   ],
   "not_verified": [
    "סוגו וגורלו המדויק של העצם האווירי שחצה לאזור ערב אל-עראמשה",
    "תוצאת היירוט שבוצע לעבר המטרה האווירית בדרום לבנון",
    "היעד והמתכננים של משלוח חצי טון חומרי הנפץ שנתפס בלבנון",
    "חלוקת הנפגעים בלבנון בין פעילים חמושים לבלתי מעורבים"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "שלילת פעילות עוינת והגנה על יישובי קו העימות",
      "פגיעה במטרות אויב ויירוט כלי טיס חשודים במרחב הפעולה בלבנון"
     ],
     "inferred": [
      "החזקת קו הגנה קדמי תוך צמצום חשיפת הכוחות לשחיקה ותאונות",
      "מניעת חדירות אוויריות לאיסוף או לתקיפה בגליל"
     ],
     "forecast": [
      "המשך פעילות סריקה ויירוט נקודתית מול איומי אוויר בלתי מזוהים",
      "שמירה על לחץ מבצעי באש לעבר יעדים בדרום לבנון"
     ]
    },
    {
     "actor": "ממשלת לבנון ומנגנוני הביטחון",
     "declared": [
      "מיצוי חקירת הברחות הנשק הבלתי חוקי ומאבק נחוש בתופעה",
      "שמירה על תקני ביטחון תעופתי וחיזוק האכיפה"
     ],
     "inferred": [
      "הפגנת ריבונות מול הקהילה הבינלאומית תוך הימנעות מעימות חזיתי כולל עם חיזבאללה",
      "בלימת הסתננות בלתי מבוקרת מגבול סוריה"
     ],
     "forecast": [
      "המשך מעצרים וסיכולים מוגבלים של התארגנויות חמושות",
      "הגברת הפיקוח בנקודות תורפה בגבול הצפוני והמזרחי"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הידוק הקשרים הבילטרליים והתיאום הביטחוני האזורי מול סוריה"
     ],
     "inferred": [
      "השגת השפעה ויציבות בצפון סוריה באמצעות מגעים עם ההנהגה הצבאית בדמשק"
     ],
     "forecast": [
      "המשך ערוצי הידברות ישירים בין הפיקודים הצבאיים בסוריה ובטורקיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/136782/",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/turkiye/turkish-syrian-military-chiefs-discuss-bilateral-ties-regional-issues/4084623",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594695",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962123/inside-lebanons-human-smuggling-routes-along-the-syrian-border/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962123",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-death-toll-israeli-military-attacks-2-march-rises-4386",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/fatigue-carelessness-causing-casualties-among-israeli-forces",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131674",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25326",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94578",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956956",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hy4hkwdomx",
     "accessed_at": "2026-10-11T06:22:44+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-10T15:57:51+00:00",
  "changes": {
   "NORTH-10110622-01": {
    "kind": "new"
   },
   "NORTH-10110622-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירט לעבר מטרה אווירית חשודה בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10110622-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות והפגזות צה\"ל במספר יעדים בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10110622-04": {
    "kind": "possible",
    "prev": "סיכול משלוח חומרי נפץ בדרכו מבעלבכ לרובע הדאחייה",
    "score": 0.467
   },
   "NORTH-10110622-05": {
    "kind": "new"
   },
   "NORTH-10110622-06": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "סיכול מחבל סורי בהכוונת איראן בגבול לבנון-סוריה",
    "score": 0.65
   },
   "NORTH-10110622-07": {
    "kind": "possible",
    "prev": "התהפכות רכב צבאי בדרום לבנון ונפילת קצין צה\"ל",
    "score": 0.4
   },
   "NORTH-10110622-08": {
    "kind": "new"
   }
  }
 }
};
