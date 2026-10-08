/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-07T2341__yemen-202610072341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-07T23:41:43+00:00",
   "window": {
    "from": "2026-10-06T23:41:43+00:00",
    "to": "2026-10-07T23:41:43+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610072341"
   },
   "summary": "הלחימה בתימן ובמרחב הסובב אותה הסלימה משמעותית, כאשר החות'ים תוקפים באמצעות טילים וכטב\"מים יעדים אזרחיים וצבאיים בסעודיה ובנמל התעופה בעדן, בעוד הקואליציה בראשות סעודיה וכוחות הממשלה התימנית מנהלים מבצעי תקיפה וקרקע רחבים נגד מעוזי החות'ים בחוף הים האדום ובאזור מצר באב אל-מנדב. במקביל, נשקל שיתוף פעולה אזורי רחב יותר הכולל מעורבות של מדינות נוספות כגון פקיסטן וסוריה לצד סעודיה.",
   "fronts": [
    {
     "name": "חזית סעודיה-החות'ים",
     "status": "פעילה ואינטנסיבית"
    },
    {
     "name": "החזית הימית (הים האדום ובאב אל-מנדב)",
     "status": "פעילה עם ניסיונות שליטה בנתיבי השיט"
    },
    {
     "name": "החזית הפנים-תימנית",
     "status": "פעילה עם מתקפות קרקעיות ואוויריות נרחבות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10072341-01",
     "title": "מתקפת טילים ורחפנים על נמלי תעופה בסעודיה",
     "summary": "החות'ים תקפו באמצעות טילים בליסטיים ורחפנים את נמלי התעופה אבהא והמלך ח'אלד בריאד, וכן בסיסים צבאיים נוספים. בתקיפות נהרגו שלושה אזרחים ונפצעו עשרות.",
     "axis": "הזירה החות'ית-סעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T08:22:01+00:00",
     "last_update_at": "2026-10-07T22:07:54+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לכלל המתקנים הצבאיים הנתקפים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/least-three-killed-and-dozens-injured-houthis-strike-saudi-airports",
       "published_at": "2026-10-07T22:07:54+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-says-three-dead-airports-after-houthis-claim-attacks",
       "published_at": "2026-10-07T18:54:42+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131533",
       "published_at": "2026-10-07T18:17:01+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-claim-new-attacks-saudi-arabia-yemens-aden-airport",
       "published_at": "2026-10-07T08:22:01+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי אבהא, סעודיה",
       "lat": 18.2417,
       "lon": 42.6538
      },
      {
       "name": "נמל התעופה הבינלאומי המלך ח'אלד, סעודיה",
       "lat": 24.9586,
       "lon": 46.711
      }
     ]
    },
    {
     "id": "YEMEN-10072341-02",
     "title": "פגיעה בנמל התעופה בעדן",
     "summary": "כוחות חות'ים שיגרו קליע וחומר נפגע לעבר שדה התעופה בעדן סמוך לנחיתת מטוס מקהיר, מה שהוביל להסיט את הטיסה לג'דה.",
     "axis": "הזירה הפנים-תימנית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T19:45:47+00:00",
     "last_update_at": "2026-10-07T19:45:47+00:00",
     "what_is_not_verified": "לא מאומת מידע מפורט על נפגעים נוספים מעבר לפגיעה בתשתיות ובטיסות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/07/houthi-forces-slow-advance-south-west-yemen-taiz-aden-airport",
       "published_at": "2026-10-07T19:45:47+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה עדן, תימן",
       "lat": 12.8295,
       "lon": 45.0316
      }
     ]
    },
    {
     "id": "YEMEN-10072341-03",
     "title": "תקיפות הקואליציה בראשות סעודיה ומבצעי ממשלת תימן",
     "summary": "הקואליציה בראשות סעודיה השמידה עשרות מטרות צבאיות של החות'ים ברחבי תימן, וכוחות הממשלה התימנית דיווחו על נטרול אלפי לוחמים חות'ים במבצע צבאי.",
     "axis": "הזירה הפנים-תימנית והסעודית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T21:48:29+00:00",
     "last_update_at": "2026-10-07T22:31:13+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בקרב כוחות החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_925891574119500b",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-say-1860-houthi-fighters-neutralised",
       "published_at": "2026-10-07T22:31:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_0a6da0bd0d6c86a3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-destroyed-82-houthi-military-targets-across",
       "published_at": "2026-10-07T21:48:29+00:00"
      }
     ],
     "places": [
      {
       "name": "צעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    }
   ],
   "not_verified": [
    "טענות החות'ים על כך שסעודיה מאפשרת לישראל להשתמש בבסיסים צבאיים בשטחה לאיסוף מודיעין.",
    "הדיווחים על כך שסוריה שוקלת שליחת כוחות צבא בפועל לסעודיה במסגרת הלחימה."
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
     "value": 3.0679,
     "unit": "ILS",
     "change_pct": 0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "פגיעה בתשתיות ובהתנהלות של סעודיה והקואליציה",
      "תמיכה בפלסטינים ובחזיתות האזוריות נגד ישראל"
     ],
     "inferred": [
      "יצירת לחץ על סעודיה ופגיעה בכלכלתה ובסחר הימי",
      "הרחבת השליטה באזורים אסטרטגיים בתימן ובחופי הים האדום"
     ],
     "forecast": [
      "המשך שיגורי טילים וכטב\"מים לעבר יעדים בסעודיה",
      "התבצרות במעוזים בתימן למרות מתקפות הקואליציה"
     ]
    },
    {
     "actor": "סעודיה והקואליציה בהובלתה",
     "declared": [
      "הגנה על ביטחון הממלכה, אזרחיה ותשתיותיה",
      "בלימת התקדמות החות'ים והשבת השליטה בשטחים בתימן ובבאב אל-מנדב"
     ],
     "inferred": [
      "הידוק שיתופי הפעולה הביטחוניים והאזוריים (כגון ברית מכה)",
      "החלשת היכולות הצבאיות והאסטרטגיות של החות'ים בתימן"
     ],
     "forecast": [
      "המשך המבצעים הצבאיים הקרקעיים והאוויריים בתימן",
      "חיזוק מערכות ההגנה האווירית והרחבת הבריתות האזוריות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/07/houthi-forces-slow-advance-south-west-yemen-taiz-aden-airport",
     "accessed_at": "2026-10-07T23:41:43+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-destroyed-82-houthi-military-targets-across",
     "accessed_at": "2026-10-07T23:41:43+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthis-claim-new-attacks-saudi-arabia-yemens-aden-airport",
     "accessed_at": "2026-10-07T23:41:43+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131533",
     "accessed_at": "2026-10-07T23:41:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T02:52:30+00:00",
  "changes": {
   "YEMEN-10072341-01": {
    "kind": "new"
   },
   "YEMEN-10072341-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "ירי טילים לעבר נמל התעופה בעדן",
    "score": 1.0
   },
   "YEMEN-10072341-03": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-07T1731__iran-202610071731.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-07T17:31:50+00:00",
   "window": {
    "from": "2026-10-06T17:31:50+00:00",
    "to": "2026-10-07T17:31:50+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610071731"
   },
   "summary": "העימות בין איראן לבין ישראל וארה\"ב נמשך במישור הכלכלי, הימי והגרעיני, כאשר איראן מטילה לחץ על נתיבי השיט במפרץ ובמצר הורמוז וממשיכה לממן את שלוחותיה האזוריים כמו חיזבאללה. במקביל, ארה\"ב וישראל דורשות מאיראן הגבלות משמעותיות בתוכנית הגרעין ותחת חנק סנקציות מנסות למנוע ממנה מקורות מימון, בעוד גורמים באזור מחפשים נתיבי אנרגיה חלופיים.",
   "fronts": [
    {
     "name": "החזית הימית במפרץ ובמצר הורמוז",
     "status": "פעילה ומתוחה עקב תקיפות על מכליות ושליטה איראנית נטענת"
    },
    {
     "name": "חזית הכלכלה והסנקציות",
     "status": "פעילה עם מאמצי חנק אמריקאי מול ייצוא הנפט והמטבע האיראני"
    },
    {
     "name": "חזית השלוחים (לבנון)",
     "status": "פעילה, כוללת העברות כספים לשיקום וסיוע לעקורים"
    },
    {
     "name": "חזית הגרעין",
     "status": "דרישות מערביות להפחתת העשרה מול סירוב איראני"
    }
   ],
   "events": [
    {
     "id": "IRAN-10071731-01",
     "title": "תקיפות מכליות במצר הורמוז",
     "summary": "מקורות ביטחון ימיים מדווחים על עלייה במספר התקיפות, ניסיונות התקיפה וההטרדות נגד מכליות העוברות במצר הורמוז.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:46:33+00:00",
     "last_update_at": "2026-10-07T16:49:05+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לכל כלי השיט אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_joint_maritime_information_center",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/attacks-tankers-hormuz-hit-highest-any-week-start-iran-war",
       "published_at": "2026-10-07T16:49:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_joint_maritime_information_center",
       "url": "https://www.al-monitor.com/originals/2026/10/attacks-tankers-hormuz-hit-highest-any-week-start-iran-war-sources-say",
       "published_at": "2026-10-07T14:46:33+00:00"
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
     "id": "IRAN-10071731-02",
     "title": "העברת כספים מאיראן לחיזבאללה",
     "summary": "איראן העבירה סכום של 200 מיליון דולר לחיזבאללה כדי לסייע לפליטי ולעקורי המלחמה עם ישראל.",
     "axis": "איראן מול ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T15:37:36+00:00",
     "last_update_at": "2026-10-07T16:26:23+00:00",
     "what_is_not_verified": "זהותם המדויקת של כל המתווכים ודרכי הפעולה המלאות לעקוף סנקציות אינן מאומתות במלואן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1j11nkvsmg",
       "published_at": "2026-10-07T16:26:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131526",
       "published_at": "2026-10-07T15:48:42+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/lebanons-hezbollah-gets-200-million-iran-help-displaced-sources-say",
       "published_at": "2026-10-07T15:46:34+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21575425",
       "published_at": "2026-10-07T15:37:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10071731-03",
     "title": "דרישה אמריקאית לצמצום העשרת אורניום",
     "summary": "סגן נשיא ארה\"ב דרש מאיראן צמצום משמעותי ביכולות העשרת האורניום שלה כתנאי לסיום העימות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:04:34+00:00",
     "last_update_at": "2026-10-07T16:46:28+00:00",
     "what_is_not_verified": "האם מדובר בנסיגה מהדרישה הקודמת לאפס העשרה אינו ברור לגמרי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/explainer-status-irans-uranium-enrichment-programme",
       "published_at": "2026-10-07T16:46:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-enrichment-stance-unclear-vance-urges-meaningful-iran-cuts",
       "published_at": "2026-10-07T14:32:12+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/jd-vance-iran-needs-meaningful-reduction-enrichment-end-war",
       "published_at": "2026-10-07T14:04:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10071731-04",
     "title": "סגירת מצר הורמוז לפי הצהרת משמרות המהפכה",
     "summary": "יועץ למפקד משמרות המהפכה הצהיר כי מצר הורמוז סגור ושכוחות האיראניים שולטים בו לחלוטין עד למילוי דרישותיהם.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T16:11:23+00:00",
     "last_update_at": "2026-10-07T16:11:23+00:00",
     "what_is_not_verified": "מידת השליטה המעשית במצר אל מול תנועת האוניות בפועל אינה מאומתת ממקור עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86286279/Strait-of-Hormuz-will-stay-closed-until-Iran-s-demands-are-met",
       "published_at": "2026-10-07T16:11:23+00:00"
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
     "id": "IRAN-10071731-05",
     "title": "נסיגת ספינות מלחמה זרות מהמפרץ",
     "summary": "בכיר במשמרות המהפכה טען כי ספינות מלחמה זרות נסוגו למרחק של למעלה מאלף קילומטרים מחופי איראן.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T10:55:36+00:00",
     "last_update_at": "2026-10-07T10:55:36+00:00",
     "what_is_not_verified": "הטענה על נסיגת כלל הציים הזרים למרחק של אלף קילומטרים אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/irans-revolutionary-guards-say-foreign-warships-have-retreated-gulf",
       "published_at": "2026-10-07T10:55:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10071731-06",
     "title": "יוזמה עיראקית לייצוא נפט דרך סוריה לעקיפת הורמוז",
     "summary": "עיראק ביקשה מסוריה סיוע בשינוע נפט גולמי במשאיות לחוף הים התיכון כדי לעקוף את מצר הורמוז.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:04:34+00:00",
     "last_update_at": "2026-10-07T16:15:30+00:00",
     "what_is_not_verified": "היקף היצוא המעשי שיועבר בדרך זו בשלב הראשון אינו מאומת לחלוטין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131527",
       "published_at": "2026-10-07T16:15:30+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48329",
       "published_at": "2026-10-07T14:04:34+00:00"
      }
     ],
     "places": [
      {
       "name": "בניאס, סוריה",
       "lat": 35.1851,
       "lon": 35.9478
      }
     ]
    }
   ],
   "not_verified": [
    "היקף נזק מדויק לכל כלי השיט שהותקפו במצר הורמוז",
    "המרחק המדויק שבו נמצאים כל כלי הטיס והשיט הזרים מחופי איראן",
    "לוחות הזמנים והכמויות המדויקות של שינוע הנפט העיראקי דרך סוריה",
    "מידת ההצלחה של תוכנית הבנק המרכזי באיראן לייצוב המטבע באמצעות דולרים מזומנים"
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
     "value": 3.0679,
     "unit": "ILS",
     "change_pct": 0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "המשך שליטה במצר הורמוז עד למילוי דרישותיה",
      "תמיכה בשלוחים באזור ובאוכלוסייה המזדהה עמם"
     ],
     "inferred": [
      "שימור יכולות גרעיניות כקלף מיקוח",
      "עקיפת סנקציות כלכליות באמצעות רשתות מתווכים ונתיבים חלופיים"
     ],
     "forecast": [
      "המשך הפעלת לחץ ימי דרך משמרות המהפכה",
      "התמודדות עם לחץ כלכלי חריף על המטבע המקומי"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "דרישה להפחתה משמעותית ביכולות ההעשרה הגרעינית של איראן",
      "פגיעה במקורות המימון של טהרן לטובת פירוק ארגוני טרור וטילים"
     ],
     "inferred": [
      "שמירת חופש השיט במפרץ ובמצר הורמוז",
      "בלימת ההשפעה האיראנית המרחבית באמצעות סנקציות ולחץ צבאי"
     ],
     "forecast": [
      "המשך הלחץ הדיפלומטי והכלכלי לצד נוכחות צבאית במפרץ",
      "מאבק מתמשך נגד הברחות כספים ותשתיות של שלוחות איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-enrichment-stance-unclear-vance-urges-meaningful-iran-cuts",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86286279/Strait-of-Hormuz-will-stay-closed-until-Iran-s-demands-are-met",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21575425",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/irans-revolutionary-guards-say-foreign-warships-have-retreated-gulf",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131527",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48329",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1j11nkvsmg",
     "accessed_at": "2026-10-07T17:31:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T02:40:34+00:00",
  "changes": {
   "IRAN-10071731-01": {
    "kind": "new"
   },
   "IRAN-10071731-02": {
    "kind": "new"
   },
   "IRAN-10071731-03": {
    "kind": "new"
   },
   "IRAN-10071731-04": {
    "kind": "new"
   },
   "IRAN-10071731-05": {
    "kind": "new"
   },
   "IRAN-10071731-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-07T2340__ukraine-202610072340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-07T23:40:27+00:00",
   "window": {
    "from": "2026-10-06T23:40:27+00:00",
    "to": "2026-10-07T23:40:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610072340"
   },
   "summary": "הצבא הרוסי מנהל גל תקיפות אוויריות נרחב המשלב טילים ועשרות כטב\"מים נגד שורת מטרות אזרחיות, מבני מגורים ומתקני אנרגיה בערים אוקראיניות, תוך גרימת עשרות הרוגים ושיבושי אספקת חשמל. במקביל, כוחות אוקראינה מגיבים בתקיפות לעומק שטח רוסיה, מיירטים כטב\"מים באמצעים ימיים, ומפעילים לחץ ארטילרי ואווירי באזורי דונבאס וחרסון. במערכת הבינלאומית מעמיק האיחוד האירופי את משטר הסנקציות על תעשיית הביטחון של מוסקבה, חרף יוזמות פוליטיות מקומיות בגרמניה לקרוא לעצירת הסיוע הצבאי.",
   "fronts": [
    {
     "name": "מחוז צ'רניהיב (פרילוקי)",
     "status": "פגיעות טילים קטלניות במבני מגורים ואובדן חיי אדם כבד"
    },
    {
     "name": "מחוז קייב והבירה קייב",
     "status": "תקיפות כטב\"מים וטילים, נזק למפעלי תעשייה ותשתיות, והפסקות חשמל יזומות"
    },
    {
     "name": "מחוז חרסון",
     "status": "תקיפות הדדיות, פגיעות כטב\"מים באזרחים ופגיעה בתשתיות רפואיות בשטחים הכבושים"
    },
    {
     "name": "עומק שטח רוסיה (ריאזאן וסמארה)",
     "status": "תקיפות אוקראיניות נגד מפעלי תעשייה ומתקני נפט"
    },
    {
     "name": "הים השחור",
     "status": "שימוש בכלים ימיים בלתי מאוישים ליירוט איומים אוויריים ושיבוש תנועת שיט"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10072340-01",
     "title": "מתקפת טילים רוסית קטלנית על בניין מגורים בפרילוקי",
     "summary": "פגיעת טיל בבניין מגורים רב-קומתי בעיר פרילוקי שבמחוז צ'רניהיב גבתה את חייהם של לפחות 20 בני אדם, בהם חמישה ילדים, וגרמה לפציעתם של עשרות נוספים ולפעולות חילוץ נרחבות.",
     "axis": "צפון אוקראינה / מחוז צ'רניהיב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T14:05:39+00:00",
     "last_update_at": "2026-10-07T20:29:00+00:00",
     "what_is_not_verified": "מספר ההרוגים המדויק מדווח במספר גרסאות שנעות בין 9 ל-20 קורבנות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.ukrinform.net/rubric-defense/4172109-emergency-and-rescue-operations-are-ongoing-in-pryluky-and-obukhiv-following-russian-strikes.html",
       "published_at": "2026-10-07T20:29:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://kyivindependent.com/amid-the-rubble-of-a-ukrainian-apartment-building-locals-have-one-wish-for-putins-birthday/",
       "published_at": "2026-10-07T19:30:35+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056915/",
       "published_at": "2026-10-07T18:55:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.bbc.co.uk/news/articles/ckr5ym098vdeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-07T18:12:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.theguardian.com/world/2026/oct/07/ukraine-accuses-russia-of-bombing-apartment-block-as-birthday-gift-for-putin",
       "published_at": "2026-10-07T16:22:44+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.theguardian.com/world/video/2026/oct/07/explosion-in-kyiv-as-russian-missiles-strike-across-ukraine-video",
       "published_at": "2026-10-07T15:44:36+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_b3bd2747cfa1c0e0",
       "url": "https://www.ynet.co.il/news/article/skvgya7jme",
       "published_at": "2026-10-07T14:05:39+00:00"
      }
     ],
     "places": [
      {
       "name": "פרילוקי, אוקראינה",
       "lat": 50.5951,
       "lon": 32.3867
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-02",
     "title": "פגיעות כטב\"מים וטילים בתשתיות ובבנייני מגורים באזור קייב",
     "summary": "תקיפות אוויריות פגעו בבניין מגורים בן 12 קומות ברובע דסניאנסקי שבקייב, במפעל תרופות בעיר, וכן במחסן ובמרכז לוגיסטי במחוז קייב, מה שהוביל להפסקות חשמל יזומות ולפציעות בקרב אזרחים.",
     "axis": "מחוז קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T17:18:00+00:00",
     "last_update_at": "2026-10-07T22:00:49+00:00",
     "what_is_not_verified": "היקף הנזק במפעל התרופות טרם פורסם במלואו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-hits-another-kyiv-apartment-building-injuring-4/",
       "published_at": "2026-10-07T22:00:49+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172114-drone-attack-sparks-fire-at-highrise-building-in-kyivs-desnianskyi-district.html",
       "published_at": "2026-10-07T20:57:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056942/",
       "published_at": "2026-10-07T17:54:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056940/",
       "published_at": "2026-10-07T17:44:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056935/",
       "published_at": "2026-10-07T17:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "בוצ'ה, אוקראינה",
       "lat": 50.5503,
       "lon": 30.2107
      },
      {
       "name": "פסטוב, אוקראינה",
       "lat": 50.0799,
       "lon": 29.9163
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-03",
     "title": "פגיעה אוקראינית במפעל ייצור מכונות בריאזאן שברוסיה",
     "summary": "כוחות אוקראיניים פגעו במפעל אסטרטגי המייצר מכונות בעיר ריאזאן בשטח הפדרציה הרוסית.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T23:26:27+00:00",
     "last_update_at": "2026-10-07T23:26:27+00:00",
     "what_is_not_verified": "מידת הנזק ואמצעי הלחימה ששימשו לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48347",
       "published_at": "2026-10-07T23:26:27+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאזאן, רוסיה",
       "lat": 54.6296,
       "lon": 39.7425
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-04",
     "title": "תקיפת כטב\"ם אוקראיני על רכב במחוז חרסון",
     "summary": "תקיפה של כלי טיס בלתי מאויש אוקראיני פגעה ברכב נוסעים סמוך לריקובו שבנפת גניצ'סק, והביאה למותם של אב ל-13 ובתו בת ה-15.",
     "axis": "מחוז חרסון הכבוש",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T16:43:53+00:00",
     "last_update_at": "2026-10-07T17:59:45+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2198981",
       "published_at": "2026-10-07T17:59:45+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2198957",
       "published_at": "2026-10-07T16:43:53+00:00"
      }
     ],
     "places": [
      {
       "name": "ריקובו, אוקראינה",
       "lat": 46.3318,
       "lon": 34.749
      }
     ]
    },
    {
     "id": "UKRAINE-10072340-05",
     "title": "יירוט כטב\"ם שאהד באמצעות כשב\"ם חיל הים האוקראיני",
     "summary": "חיל הים האוקראיני השמיד כלי טיס בלתי מאויש מסוג שאהד תוך שימוש בכלי שיט בלתי מאויש מדגם סרגן 3000 החמוש בעמדת ירי.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T17:26:00+00:00",
     "last_update_at": "2026-10-07T17:26:00+00:00",
     "what_is_not_verified": "המיקום המדויק שבו הופל הכטב\"ם בים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ca26c67cf5004781",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056937/",
       "published_at": "2026-10-07T17:26:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-06",
     "title": "הסכמת שגרירי האיחוד האירופי להרחבת משטר הסנקציות על רוסיה",
     "summary": "שגרירי מדינות האיחוד האירופי הגיעו להסכמה לכלול למעלה מ-1,500 אישים וגופים נוספים, רבים מהם מתעשיית הביטחון הרוסית, ברשימת הסנקציות נגד מוסקבה.",
     "axis": "הזירה המדינית / סנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T16:18:20+00:00",
     "last_update_at": "2026-10-07T16:18:20+00:00",
     "what_is_not_verified": "אישור רשמי של שרי החוץ הצפוי בהמשך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_euronews",
       "url": "https://meduza.io/en/news/2026/10/07/eu-ambassadors-agree-to-largest-ever-expansion-of-russia-sanctions-list-targeting-more-than-1-500-people-and-organizations",
       "published_at": "2026-10-07T16:18:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-07",
     "title": "יוזמת מפלגות ימין ושמאל בגרמניה לעצירת הסיוע לאוקראינה והסרת הסנקציות",
     "summary": "מפלגות אלטרנטיבה לגרמניה והברית של שרה ואגנקנכט, המחזיקות ברוב בפרלמנט של סקסוניה-אנהלט, מקדמות הצעת החלטה הקוראת להפסקת הסיוע הצבאי לקייב ולהסרת העיצומים מעל רוסיה.",
     "axis": "הזירה המדינית הבינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T18:05:00+00:00",
     "last_update_at": "2026-10-07T21:06:08+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/08/germany-s-far-right-afd-and-left-wing-populist-bsw-party-now-hold-a-majority-in-an-eastern-state-parliament-their-first-joint-proposal-end-aid-to-ukraine-and-restore-ties-with-russia",
       "published_at": "2026-10-07T21:06:08+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056945/",
       "published_at": "2026-10-07T18:05:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-08",
     "title": "הרוגים ופצועים במתקפות אוקראיניות על שטח דונצק",
     "summary": "רשויות הרפובליקה העממית של דונצק דיווחו על שלושה תושבים שנהרגו ושמונה שנפצעו כתוצאה מתקיפות אוקראיניות שפגעו במבני מגורים, תשתיות וכלי רכב.",
     "axis": "חזית דונבאס",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T20:58:26+00:00",
     "last_update_at": "2026-10-07T20:58:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2199019",
       "published_at": "2026-10-07T20:58:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-09",
     "title": "הצבת כוחות ליטאים בגבול מובלעת קלינינגרד",
     "summary": "ליטא החליטה לפרוס כוחות לאורך גבולה עם מובלעת קלינינגרד הרוסית כצעד מניעתי בעקבות תקרית בלטביה וחשש מהכרזה רוסית על גיוס.",
     "axis": "הגבול הבלטי-רוסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T22:56:37+00:00",
     "last_update_at": "2026-10-07T22:56:37+00:00",
     "what_is_not_verified": "טיב האותות המעידים על כוונת גיוס ברוסיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/lithuania-to-deploy-troops-along-border-with-russias-kaliningrad-after-latvia-incident/",
       "published_at": "2026-10-07T22:56:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10072340-10",
     "title": "הלאמה וניהול זמני של נכסי חברות זרות ברוסיה",
     "summary": "רשת קמעונאות גרמנית פנתה מיוזמתה לממשל הרוסי בבקשה להכניס את נכסיה לניהול זמני, בהמשך לצווים נשיאותיים קודמים שהעבירו חברות זרות רבות לשליטת מנהלים מקומיים.",
     "axis": "כלכלת מלחמה רוסית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T17:13:38+00:00",
     "last_update_at": "2026-10-07T19:38:36+00:00",
     "what_is_not_verified": "זהות המקור הצרפתי שצוטט לגבי מניעי הפנייה של החברה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/07/le-monde-german-retailer-metro-asks-kremlin-to-place-its-russian-assets-under-temporary-management",
       "published_at": "2026-10-07T19:38:36+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/07/former-german-chancellor-gerhard-schroder-visits-moscow-and-meets-globus-employees-after-becoming-head-of-the-hypermarket-chain-s-supervisory-board",
       "published_at": "2026-10-07T17:13:38+00:00"
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
    "{'item': 'מניין ההרוגים הכולל באוקראינה באותו יום נמסר בנתונים משתנים (21, 24, 26 או 28 הרוגים).'}",
    "{'item': 'מספר הקורבנות הספציפי במבנה המגורים בפרילוקי נע בדיווחים בין 9 ל-20 הרוגים.'}",
    "{'item': 'אמינות סרטון רחפן FPV שהוגדר כסרטון מבויים על ידי מומחה רשת.'}",
    "{'item': 'קיומם ומשמעותם של איתותים מודיעיניים על כוונה להכריז על גיוס ברוסיה.'}"
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
     "value": 1.1177,
     "unit": "USD",
     "change_pct": -0.82,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "מניעת הרחבת פעילות נאט\"ו והחלשת המשטר בקייב",
      "הפעלת אמצעי ניהול זמני על חברות מערביות כמענה לסנקציות"
     ],
     "inferred": [
      "פגיעה רחבה בעורף האזרחי וברשת החשמל לקראת החורף לצורך שבירת רוח הלחימה האוקראינית",
      "הרחקת הצי והכלים האוקראיניים מנתיבי שיט בים השחור ובים אזוב"
     ],
     "forecast": [
      "המשך מתקפות טילים וכטב\"מים מסיביות על מרכזי אוכלוסייה ותשתיות אסטרטגיות",
      "החרפת הצעדים הכלכליים נגד יתרת החברות המערביות הפועלות ברוסיה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על המרחב האווירי וחופי המדינה ומיצוי הדין בגין פגיעה בריבונות וגזל נכסי תרבות",
      "המשך הגנה על שלמות השטח הלאומי והרחקת הכיבוש"
     ],
     "inferred": [
      "שיבוש שרשראות הייצור והאספקה הצבאיות של מוסקבה באמצעות פגיעה בעומק רוסיה",
      "מינוף תקיפות העורף הקטלניות להגברת הסיוע הצבאי והמימוני מאירופה"
     ],
     "forecast": [
      "המשך שימוש גובר בכשב\"מים חמושים ופיתוח יכולות יירוט ימיות ואוויריות",
      "החרפת המצוקה באספקת החשמל והאנרגיה כתוצאה מההרס בתשתיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckr5ym098vdeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/oct/07/explosion-in-kyiv-as-russian-missiles-strike-across-ukraine-video",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/lithuania-to-deploy-troops-along-border-with-russias-kaliningrad-after-latvia-incident/",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/07/former-german-chancellor-gerhard-schroder-visits-moscow-and-meets-globus-employees-after-becoming-head-of-the-hypermarket-chain-s-supervisory-board",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/07/8056945/",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2199019",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48347",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4172114-drone-attack-sparks-fire-at-highrise-building-in-kyivs-desnianskyi-district.html",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skvgya7jme",
     "accessed_at": "2026-10-07T23:40:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T02:59:20+00:00",
  "changes": {
   "UKRAINE-10072340-01": {
    "kind": "new"
   },
   "UKRAINE-10072340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב",
    "score": 1.0
   },
   "UKRAINE-10072340-03": {
    "kind": "new"
   },
   "UKRAINE-10072340-04": {
    "kind": "new"
   },
   "UKRAINE-10072340-05": {
    "kind": "possible",
    "prev": "שחיקה מואצת של מטוסי ה-F-16 של חיל האוויר האוקראיני",
    "score": 0.467
   },
   "UKRAINE-10072340-06": {
    "kind": "new"
   },
   "UKRAINE-10072340-07": {
    "kind": "new"
   },
   "UKRAINE-10072340-08": {
    "kind": "new"
   },
   "UKRAINE-10072340-09": {
    "kind": "new"
   },
   "UKRAINE-10072340-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-07T2357__north-202610072357.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-07T23:57:53+00:00",
   "window": {
    "from": "2026-10-06T23:57:53+00:00",
    "to": "2026-10-07T23:57:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610072357"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחימה מתמשכת בדרום לבנון הכוללת תקיפות והפגזות ישראליות מול פעילות חיזבאללה, לצד אירועי ירי לעבר מוצבי האו\"ם. במקביל, בסוריה נרשמות התפתחויות פנימיות הכוללות הבעת תמיכה בישראל בקרב תושבים בדרום המדינה, לצד ניסיונות אכיפת סדר של צבא לבנון בגבול סוריה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם תקיפות אוויריות, ארטילריה ואירועי גבול"
    },
    {
     "name": "החזית הסורית-לבנונית",
     "status": "גבול המדינות עם פעילות אכיפת חוק ועימותי הברחה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10072357-01",
     "title": "ירי לעבר מוצב גבול של כוח האו\"ם בדרום לבנון",
     "summary": "כוח האו\"ם הזמני בלבנון דיווח כי ירי נשק קל בוצע לעבר מוצב גבול, ללא נפגעים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T19:20:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T19:20:48+00:00",
     "last_update_at": "2026-10-07T23:33:29+00:00",
     "what_is_not_verified": "זהות היורים אינה מפורטת בטקסט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_32a77cb4db92d562",
       "url": "https://www.aljazeera.com/news/2026/10/7/un-peacekeeping-force-in-lebanon-says-shots-fired-at-israeli-border-post?traffic_source=rss",
       "published_at": "2026-10-07T23:33:29+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_32a77cb4db92d562",
       "url": "https://www.aa.com.tr/en/middle-east/un-interim-force-says-gunfire-hit-its-position-in-southern-lebanon/4081444",
       "published_at": "2026-10-07T19:20:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10072357-02",
     "title": "תקיפות והפגזות ישראליות במספר מוקדים בדרום לבנון",
     "summary": "נרשמו תקיפות אוויריות, הפגזות ארטילריה, פעולות הריסה ותנועת רכבים צבאיים במספר עיירות ואזורים בדרום לבנון בהם וואדי אל-סלוקי, אל-מנצורי, נבטיה אל-פוקא, חדאיתה וכונין.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T18:13:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-07T18:13:22+00:00",
     "last_update_at": "2026-10-07T20:21:41+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינם מפורטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135707/",
       "published_at": "2026-10-07T20:21:41+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135697/",
       "published_at": "2026-10-07T19:16:30+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135687/",
       "published_at": "2026-10-07T19:07:52+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/135662/",
       "published_at": "2026-10-07T18:13:22+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "כונין, לבנון",
       "lat": 33.1496,
       "lon": 35.4467
      }
     ]
    },
    {
     "id": "NORTH-10072357-03",
     "title": "שיגור מיירט לעבר מטרת שווא בדרום לבנון",
     "summary": "דובר צה\"ל דיווח כי שוגר מיירט לעבר מטרת שווא שזוהתה במרחב הפעילות של כוחות צה\"ל בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T18:20:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T18:20:19+00:00",
     "last_update_at": "2026-10-07T18:20:19+00:00",
     "what_is_not_verified": "טיב מטרת השווא אינו מפורט מעבר לכך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25312",
       "published_at": "2026-10-07T18:20:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10072357-04",
     "title": "הפגנת תמיכה בישראל בא-סווידאא'",
     "summary": "עשרות תושבים השתתפו בשיירת רכבים ובעצרת תמיכה בישראל בכיכר אל-קרמה בא-סווידאא' שבדרום סוריה, לרגל יום השנה לאירועי שבעה באוקטובר.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T12:19:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T12:19:29+00:00",
     "last_update_at": "2026-10-07T19:43:15+00:00",
     "what_is_not_verified": "לא מאומת היקף התמיכה הציבורית הכולל במחוז מעבר למשתתפים באירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/suwayda-rally-shows-solidarity-with-israel-on-october-7-anniversary/",
       "published_at": "2026-10-07T19:43:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131523",
       "published_at": "2026-10-07T14:58:06+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48327",
       "published_at": "2026-10-07T12:19:29+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא', סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10072357-05",
     "title": "עימותים בין צבא לבנון למבריחים בגבול סוריה",
     "summary": "מקור צבאי דיווח כי התרחשו עימותים באזור ההררי של ערסאל בין צבא לבנון לבין חוליית מבריחים שניסתה לבצע פעולת הברחה מסוריה ללבנון, ללא נפגעים ובסיומם נעצר חשוד אחד.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-07T10:11:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-07T10:11:17+00:00",
     "last_update_at": "2026-10-07T10:11:17+00:00",
     "what_is_not_verified": "זהותם המדויקת של המבריחים אינה מפורטת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/961662/lebanese-army-clashes-with-smugglers-along-syria-border-lbci-source/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961662",
       "published_at": "2026-10-07T10:11:17+00:00"
      }
     ],
     "places": [
      {
       "name": "ערסאל, לבנון",
       "lat": 34.1473,
       "lon": 36.4591
      }
     ]
    }
   ],
   "not_verified": [
    "זהות הגורם שביצע את הירי לעבר מוצב האו\"ם בגבול ישראל-לבנון",
    "היקף התמיכה הציבורית הרחב בא-סווידאא' בעצרת התמיכה בישראל"
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
     "value": 3.0679,
     "unit": "ILS",
     "change_pct": 0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-07T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "פגיעה בתשתיות צבאיות ובמרחבי הפעילות של חיזבאללה בדרום לבנון",
      "שמירה על ביטחון הגבול הצפוני והרחקת איומים"
     ],
     "forecast": [
      "המשך התקיפות והפעילות המבצעית בדרום לבנון כל עוד נמשך האיום"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות לחימה והיערכות מול הפעילות הצבאית של ישראל בדרום לבנון"
     ],
     "forecast": [
      "המשך פעילות הטרדה והתגוננות מול כוחות צה\"ל בגזרה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/7/un-peacekeeping-force-in-lebanon-says-shots-fired-at-israeli-border-post?traffic_source=rss",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/135662/",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/un-interim-force-says-gunfire-hit-its-position-in-southern-lebanon/4081444",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/suwayda-rally-shows-solidarity-with-israel-on-october-7-anniversary/",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/961662/lebanese-army-clashes-with-smugglers-along-syria-border-lbci-source/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961662",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131523",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48327",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25312",
     "accessed_at": "2026-10-07T23:57:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T06:23:15+00:00",
  "changes": {
   "NORTH-10072357-01": {
    "kind": "new"
   },
   "NORTH-10072357-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ירי ארטילרי עוין לעבר אל-מנסורי בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10072357-03": {
    "kind": "possible",
    "prev": "טיסות מטוסי קרב ישראליים בגובה רב בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10072357-04": {
    "kind": "new"
   },
   "NORTH-10072357-05": {
    "kind": "new"
   }
  }
 }
};
