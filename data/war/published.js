/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-05T0723__yemen-202611050723.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-05T07:23:53+00:00",
   "window": {
    "from": "2026-11-04T07:23:53+00:00",
    "to": "2026-11-05T07:23:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611050723"
   },
   "summary": "בזירת תימן והחות'ים נמשכת הלחימה הקרקעית והאווירית הכוללת תקיפות טילים וכטב\"מים של החות'ים נגד סעודיה ומחנות צבא של הממשלה בתימן, לצד מצור והתנגשויות סביב העיר תאיז ותקיפות נגד של הקואליציה. סעודיה פועלת להידוק שיתופי פעולה אזוריים והגנה, בעוד החות'ים מציבים תנאים נוקשים לסיום הלחימה הכוללים פיצויים והכרה בשלטונם.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (אל-ג'וף, תאיז, אל-דאלאע)",
     "status": "פעילה עם עימותים קרקעיים, מתקפות טילים ומצור על תאיז"
    },
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעילה עם מתקפות טילים וכטב\"מים של החות'ים לעבר הממלכה ומאמצי הגנה סעודיים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11050723-01",
     "title": "פניית סעודיות לחות'ים ודרישת פיצויים",
     "summary": "ערב הסעודית פנתה לחות'ים לבירור תנאי סיום הלחימה, ובתגובה דרשו החות'ים פיצויים והכרה רשמית בהם כשלטון בתימן.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T06:53:26+00:00",
     "last_update_at": "2026-11-05T06:53:26+00:00",
     "what_is_not_verified": "פרטי הפנייה המדויקים ותגובת סעודיה עליה אינם מאומתים מעבר לדיווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94957",
       "published_at": "2026-11-05T06:53:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11050723-02",
     "title": "תקיפות הקואליציה בראשות סעודיה בתימן",
     "summary": "תקיפות של הקואליציה בראשות סעודיה ברחבי תימן הרגו לכאורה כ-20 בני אדם.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T02:00:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T02:00:08+00:00",
     "last_update_at": "2026-11-05T02:00:08+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת מעבר לדיווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-hits-yemen-reportedly-kill-20-people-over-past-day",
       "published_at": "2026-11-05T02:00:08+00:00"
      }
     ],
     "places": [
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "תאיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11050723-03",
     "title": "חתימת הסכם הגנה בין סעודיה לסוריה",
     "summary": "סעודיה וסוריה חתמו על הסכם שיתוף פעולה בין משרדי ההגנה שלהן על רקע התקפות החות'ים נגד סעודיה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T20:46:39+00:00",
     "last_update_at": "2026-11-05T00:22:20+00:00",
     "what_is_not_verified": "פרטי ההסכם המדויקים אינם ידועים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_spa",
       "url": "https://www.newarab.com/news/saudi-syrian-defence-ministries-sign-cooperation-agreement",
       "published_at": "2026-11-05T00:22:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_spa",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-syrian-defence-ministries-sign-cooperation-agreement",
       "published_at": "2026-11-04T21:32:47+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_spa",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-syrian-defence-ministries-sign-cooperation-agreement-spa-reports",
       "published_at": "2026-11-04T20:46:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11050723-04",
     "title": "מתקפת טילים של החות'ים בתאיז והתקדמות כוחות הממשלה",
     "summary": "מתקפת טילים ביישוב בתאיז הרגה בני משפחה אחת, בזמן שכוחות הממשלה דיווחו על השגת הישגים טריטוריאליים באל-ג'וף ובלמו התקפות בתאיז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T23:36:39+00:00",
     "last_update_at": "2026-11-04T23:36:39+00:00",
     "what_is_not_verified": "מספר הנפגעים וההישגים בשטח נמסרו מטעם צדדים מעורבים ולא אומתו ממקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-attack-kills-four-people-yemeni-government-forces-make-gains-al",
       "published_at": "2026-11-04T23:36:39+00:00"
      }
     ],
     "places": [
      {
       "name": "הייפאן, תימן",
       "lat": 13.3179,
       "lon": 44.2722
      },
      {
       "name": "תאיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11050723-05",
     "title": "השמדת רכב לוגיסטי של החות'ים",
     "summary": "הושמד רכב לוגיסטי של החות'ים באמצעות טיל נגד טנקים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T22:01:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T22:01:08+00:00",
     "last_update_at": "2026-11-04T22:01:08+00:00",
     "what_is_not_verified": "מקום האירוע המדויק אינו מפורט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49301",
       "published_at": "2026-11-04T22:01:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11050723-06",
     "title": "משלוח סיוע רפואי של הצלב האדום לעיר תאיז",
     "summary": "הצלב האדום הביא משלוח ציוד רפואי לעיר תאיז המצורפת בידי החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-04T17:52:51+00:00",
     "last_update_at": "2026-11-04T17:52:51+00:00",
     "what_is_not_verified": "היקף הצורך המלא ומצב האוכלוסייה המדויק מבוסס על הערכות ארגונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_ab1baf7625f5107b",
       "url": "https://www.newarab.com/news/icrc-says-delivered-first-medical-aid-yemens-besieged-taiz",
       "published_at": "2026-11-04T17:52:51+00:00"
      }
     ],
     "places": [
      {
       "name": "תאיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11050723-07",
     "title": "מתקפת טילים של החות'ים על מחנה אימונים באל-דאלאע",
     "summary": "מתקפת טילים של החות'ים פגעה במחנה אימונים צבאי ליד קטבא שבמחוז אל-דאלאע, וגרמה לעשרות הרוגים ופצועים בקרב חיילים חדשים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T12:55:33+00:00",
     "last_update_at": "2026-11-04T12:55:33+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת ממקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-missile-attack-kills-dozens-military-camp-yemen",
       "published_at": "2026-11-04T12:55:33+00:00"
      }
     ],
     "places": [
      {
       "name": "קטבא, תימן",
       "lat": 13.8796,
       "lon": 43.2359
      }
     ]
    }
   ],
   "not_verified": [
    "דרישת הפיצויים של החות'ים בסך 51 מיליארד דולר ותנאי סיום הלחימה",
    "מספר הנפגעים המדויק בתקיפות הקואליציה ובתקיפות החות'ים במחנות הצבא",
    "היקף הסיוע הביטחוני המדויק שסוריה עשויה לספק לסעודיה במסגרת ההסכמים"
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
     "value": 3.1633,
     "unit": "ILS",
     "change_pct": 0.2,
     "source_id": "src_ecb",
     "as_of": "2026-11-04T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "דרישה לפיצויים בגובה 51 מיליארד דולר על נזקי המלחמה",
      "הכרה רשמית בהם כשלטון הלגיטימי של תימן כולה"
     ],
     "inferred": [
      "ביסוס שליטה צבאית ומדינית בתימן תוך הפעלת לחץ על סעודיה ומחנה הממשלה",
      "שימור יכולות שיגור טילים וכטב\"מים למטרות אזוריות"
     ],
     "forecast": [
      "המשך התקיפות לעבר יעדים בסעודיה ובתוך תימן כל עוד לא יושגו דרישותיהם",
      "שמירת המצור סביב ערים כמו תאיז כקלף מיקוח"
     ]
    },
    {
     "actor": "ערב הסעודית",
     "declared": [
      "חיפוש תנאים להפסקת הלחימה והמתקפות נגד הממלכה",
      "יצירת שיתופי פעולה ביטחוניים אזוריים להגנה והתמודדות עם איומים"
     ],
     "inferred": [
      "רצון לייצר הרתעה ולבלום את האיום החות'י באמצעות בריתות חדשות וסיוע חיצוני",
      "ניסיון לבחון אפשרויות להסדר מדיני או הפוגה מול החות'ים"
     ],
     "forecast": [
      "הידוק הקשרים הביטחוניים עם שותפות אזוריות דוגמת סוריה",
      "המשך תמיכה בממשלת תימן הרשמית ובפעולות הקואליציה לצד מגעים עקיפים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-syrian-defence-ministries-sign-cooperation-agreement-spa-reports",
     "accessed_at": "2026-11-05T07:23:53+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-attack-kills-four-people-yemeni-government-forces-make-gains-al",
     "accessed_at": "2026-11-05T07:23:53+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthi-missile-attack-kills-dozens-military-camp-yemen",
     "accessed_at": "2026-11-05T07:23:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49301",
     "accessed_at": "2026-11-05T07:23:53+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94957",
     "accessed_at": "2026-11-05T07:23:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T01:12:30+00:00",
  "changes": {
   "YEMEN-11050723-01": {
    "kind": "new"
   },
   "YEMEN-11050723-02": {
    "kind": "new"
   },
   "YEMEN-11050723-03": {
    "kind": "new"
   },
   "YEMEN-11050723-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התקדמות כוחות החות'ים לעבר עדן וניתוק כבישים",
    "score": 0.65
   },
   "YEMEN-11050723-05": {
    "kind": "new"
   },
   "YEMEN-11050723-06": {
    "kind": "new"
   },
   "YEMEN-11050723-07": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-05T0718__iran-202611050718.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-05T07:18:19+00:00",
   "window": {
    "from": "2026-11-04T07:18:19+00:00",
    "to": "2026-11-05T07:18:19+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611050718"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתנהל במקביל לזעזועים פוליטיים פנימיים בארה\"ב לאחר הפסד המפלגה הרפובליקנית בבחירות האמצע, המיוחס במידה רבה למחיר הכלכלי של המלחמה. בזירה הימית נרשמו תקריות באזור מצר הורמוז שכללו שריפת כלי שיט, בעוד שדרום קוריאה נערכת להרחיב את נוכחותה באזור לבקשת וושינגטון.",
   "fronts": [
    {
     "name": "ציר איראן-ארה\"ב-ישראל",
     "status": "פעיל ומתוח בעקבות השלכות פוליטיות בארה\"ב ותקריות במפרץ"
    },
    {
     "name": "מרחב מצר הורמוז והמפרץ",
     "status": "פעיל עם אירועים ימיים וסיכוני ניווט"
    }
   ],
   "events": [
    {
     "id": "IRAN-11050718-01",
     "title": "שריפת מכליות נפט וגוררת במצר הורמוז",
     "summary": "משמרות המהפכה של איראן הודיעו כי שתי מכליות נפט וספינת גוררת עלו באש במצר הורמוז לאחר שניסו לעבור בנתיב לא מורשה, וכי יחידת לוחמה אלקטרונית תפסה שני רחפנים.",
     "axis": "ציר איראן-מפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T08:43:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T08:43:31+00:00",
     "last_update_at": "2026-11-05T05:41:22+00:00",
     "what_is_not_verified": "הטענות על נסיבות הפגיעה והשימוש בנתיב לא מורשה מבוססות על הודעת משמרות המהפכה בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_07c4b5f7a0d7f334",
       "url": "https://en.irna.ir/news/86313001/IRGC-Two-oil-tankers-tugboat-catch-fire-in-Strait-of-Hormuz",
       "published_at": "2026-11-05T05:41:22+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_648bf0d134180874",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-says-two-tankers-tugboat-were-ablaze-hormuz-strait",
       "published_at": "2026-11-05T04:58:18+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_07c4b5f7a0d7f334",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/5/iran-war-live-trump-admits-war-caused-election-loss-but-had-to-do-it?traffic_source=rss",
       "published_at": "2026-11-05T00:00:00+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_07c4b5f7a0d7f334",
       "url": "https://www.france24.com/en/middle-east/20261104-four-oil-tankers-destroyed-in-hormuz-after-hitting-mines-tehran-says",
       "published_at": "2026-11-04T08:43:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11050718-02",
     "title": "שריפת שלט ענק בטהראן",
     "summary": "שלט ענק המציג את נשיא ארה\"ב דונלד טראמפ, סגנו ג'יי די ואנס וראש ממשלת ישראל בנימין נתניהו הועלה באש בעצרת בטהראן.",
     "axis": "ציר איראן-ישראל-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T23:34:47+00:00",
     "last_update_at": "2026-11-04T23:34:47+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_tehran_rally_reports",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/4/giant-banner-of-trump-vance-and-netanyahu-burnt-at-tehran-rally?traffic_source=rss",
       "published_at": "2026-11-04T23:34:47+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-11050718-03",
     "title": "חשיפת שלט הסתה בכיכר אנקלאב בטהראן",
     "summary": "באיראן נחשף שלט חוצות ענק בכיכר אנקלאב בטהראן הנושא את הכיתוב \"אנו נהרוג את טראמפ\".",
     "axis": "ציר איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-04T14:07:17+00:00",
     "last_update_at": "2026-11-04T14:07:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_tehran_billboard_unveiling",
       "url": "https://www.theguardian.com/us-news/2026/nov/04/joy-iran-trump-defeat-us-midterm-elections-war",
       "published_at": "2026-11-04T14:07:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11050718-04",
     "title": "הרחבת פעילות הימית של דרום קוריאה בקרבת מצר הורמוז",
     "summary": "משרד ההגנה של דרום קוריאה הודיע על תוכנית להרחיב את פעילות יחידת אנטי-הפיראט צ'ונגהאה למיים קרובים יותר למצר הורמוז בהתאם לדרישת ארה\"ב.",
     "axis": "ציר ארה\"ב-אסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-05T02:46:30+00:00",
     "last_update_at": "2026-11-05T04:22:49+00:00",
     "what_is_not_verified": "אישור הפרלמנט והקבינט טרם התקבל סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_52f6387001e80a03",
       "url": "https://www.theguardian.com/world/2026/nov/05/south-korea-to-expand-anti-piracy-unit-strait-of-hormuz",
       "published_at": "2026-11-05T04:22:49+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_52f6387001e80a03",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/report-south-koreas-anti-piracy-unit-expand-operations-closer-hormuz",
       "published_at": "2026-11-05T04:15:24+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_6fe54b27bec6a1fb",
       "url": "https://www.al-monitor.com/originals/2026/11/south-korea-expand-anti-piracy-unit-operations-closer-strait-hormuz",
       "published_at": "2026-11-05T02:46:30+00:00"
      }
     ],
     "places": [
      {
       "name": "דוקם, עומאן",
       "lat": 19.623,
       "lon": 57.634
      }
     ]
    }
   ],
   "not_verified": [
    "ההערכות בוושינגטון על כוונתו הוודאית של טראמפ לחדש את התקיפות נגד איראן.",
    "הטענה האיראנית בדבר פגיעת מכליות הנפט במוקשים ימיים בנתיבים בלתי מורשים."
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
     "value": 3.1633,
     "unit": "ILS",
     "change_pct": 0.2,
     "source_id": "src_ecb",
     "as_of": "2026-11-04T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "התנגדות לתוקפנות ארה\"ב וישראל",
      "אזהרות מפני מעבר בנתיבים לא מורשים במפרץ"
     ],
     "inferred": [
      "שאיפה למצות את ההפסדים הפוליטיים של ממשל טראמפ כדי להחליש את הלחץ הבינלאומי",
      "הרתיעה באמצעות איומים ימיים ואזוריים"
     ],
     "forecast": [
      "המשך לוחמה פסיכולוגית והפגנות נגד ארה\"ב וישראל",
      "שימור המוכנות לעימות ימי במפרץ"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "בחינת צעדים נוספים מול איראן למרות תוצאות הבחירות"
     ],
     "inferred": [
      "התלבטות פנימית עמוקה בעקבות הפסד הבחירות והמחיר הכלכלי של הלחימה",
      "לחץ על בעלות ברית לסייע מבחינה ימית במפרץ"
     ],
     "forecast": [
      "אפשרות להגבלת פעולות צבאיות רחבות בשל לחץ הקונגרס החדש",
      "המשך שמירה על נתיבי השיייט בדרכים שונות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/4/giant-banner-of-trump-vance-and-netanyahu-burnt-at-tehran-rally?traffic_source=rss",
     "accessed_at": "2026-11-05T07:18:19+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/south-korea-expand-anti-piracy-unit-operations-closer-strait-hormuz",
     "accessed_at": "2026-11-05T07:18:19+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261104-four-oil-tankers-destroyed-in-hormuz-after-hitting-mines-tehran-says",
     "accessed_at": "2026-11-05T07:18:19+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/05/south-korea-to-expand-anti-piracy-unit-strait-of-hormuz",
     "accessed_at": "2026-11-05T07:18:19+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86313001/IRGC-Two-oil-tankers-tugboat-catch-fire-in-Strait-of-Hormuz",
     "accessed_at": "2026-11-05T07:18:19+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/report-south-koreas-anti-piracy-unit-expand-operations-closer-hormuz",
     "accessed_at": "2026-11-05T07:18:19+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T18:13:08+00:00",
  "changes": {
   "IRAN-11050718-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "פגיעה בארבע מכליות נפט במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11050718-02": {
    "kind": "new"
   },
   "IRAN-11050718-03": {
    "kind": "new"
   },
   "IRAN-11050718-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-05T0721__ukraine-202611050721.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-05T07:21:05+00:00",
   "window": {
    "from": "2026-11-04T07:21:05+00:00",
    "to": "2026-11-05T07:21:05+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611050721"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת ביתאת מתקפות אוויריות נרחבות של כטב\"מים וטילים מצד רוסיה מחד, ותקיפות נגד תשתיות עומק ברוסיה מאידך. במקביל, מתקיימים מגעים דיפלומטיים ותיאומים בינלאומיים שונים סביב יוזמות תיווך אפשריות.",
   "fronts": [
    {
     "name": "החזית האווירית ותשתיות האנרגיה",
     "status": "פעילה מאוד עם תקיפות הדדיות על תשתיות"
    },
    {
     "name": "חזית הדרום (חרסון וזפוריז'יה)",
     "status": "פעילה עם פגיעות באזרחים ובמתקנים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11050721-01",
     "title": "תקיפה לוגיסטית באזור קייב",
     "summary": "כוחות רוסיים תקפו תשתיות לוגיסטיות באזור קייב, מה שגרם לפציעת אדם אחד ולשריפה.",
     "axis": "תקיפות אוויריות ולוגיסטיקה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T21:53:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T21:53:57+00:00",
     "last_update_at": "2026-11-05T06:38:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא מעבר לדיווחים הראשוניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4181596-russian-army-attacks-logistics-infrastructure-in-bucha-one-injured.html",
       "published_at": "2026-11-05T06:38:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_ukrinform",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/05/8061332/",
       "published_at": "2026-11-05T05:27:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_ukrinform",
       "url": "https://kyivindependent.com/russian-drone-attacks-injure-4-in-dnipropetrovsk-and-kyiv-oblasts-spark-fires-at-infrastructure-facilities/",
       "published_at": "2026-11-05T04:58:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ukrinform",
       "url": "https://t.me/alexmehacarmel/49299",
       "published_at": "2026-11-04T21:53:57+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז בוצ'ה, אוקראינה",
       "lat": 50.5449,
       "lon": 29.8987
      }
     ]
    },
    {
     "id": "UKRAINE-11050721-02",
     "title": "יירוט כטב\"מים וטילים",
     "summary": "כוחות ההגנה האווירית של אוקראינה ירטו או שיבשו מספר רב של כטב\"מים וטילים ששגרו כוחות רוסיים.",
     "axis": "הגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-05T06:09:00+00:00",
     "last_update_at": "2026-11-05T06:54:00+00:00",
     "what_is_not_verified": "תוצאות פגיעה של כלל החלקים שלא יורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4181598-adf-neutralises-105-russian-drones-since-yesterday-evening.html",
       "published_at": "2026-11-05T06:54:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_ukrinform",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/05/8061335/",
       "published_at": "2026-11-05T06:09:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11050721-03",
     "title": "פגיעה במתקנים בריאזאן",
     "summary": "מתקנים בריאזאן שברוסיה הותקפו וספגו פגיעות, כולל דיווחים על פגיעה בבית זיקוק ובמחסן.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-05T00:19:16+00:00",
     "last_update_at": "2026-11-05T02:31:34+00:00",
     "what_is_not_verified": "הנזק המדויק לבית הזיקוק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/49305",
       "published_at": "2026-11-05T02:31:34+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://kyivindependent.com/russian-oil-refinery-in-ryazan-reportedly-targeted-in-drone-attack/",
       "published_at": "2026-11-05T02:05:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/49304",
       "published_at": "2026-11-05T01:11:39+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/49303",
       "published_at": "2026-11-05T00:19:16+00:00"
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
     "id": "UKRAINE-11050721-04",
     "title": "נפגעים בתקיפות בחרסון ובקמישוואחה",
     "summary": "תקיפות רוסיות על קהילות באזור חרסון ובקמישוואחה גרמו להרוגים ולפצועים רבים באוכלוסייה האזרחית.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T16:09:19+00:00",
     "last_update_at": "2026-11-05T05:11:00+00:00",
     "what_is_not_verified": "מספר הנעדרים המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_kherson_city_military_administration",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/05/8061331/",
       "published_at": "2026-11-05T05:11:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kherson_city_military_administration",
       "url": "https://kyivindependent.com/ukraine-war-latest-kyiv-suffers-worst-water-outage-of-full-scale-war-after-mass-russian-assault/",
       "published_at": "2026-11-04T21:21:54+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kherson_city_military_administration",
       "url": "https://t.me/alexmehacarmel/49298",
       "published_at": "2026-11-04T20:01:39+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_kherson_city_military_administration",
       "url": "https://www.theguardian.com/world/live/2026/nov/04/eu-ukraine-russia-france-germany-us-nato-europe-latest-news",
       "published_at": "2026-11-04T16:09:19+00:00"
      }
     ],
     "places": [
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      },
      {
       "name": "קמישוואחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11050721-05",
     "title": "השעיית עיצומים בשוויץ",
     "summary": "שוויץ יישרה קו עם האיภาพ האיחוד האירופי והסירה עיצומים מעל אישים מסוימים.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T21:00:00+00:00",
     "last_update_at": "2026-11-04T21:00:00+00:00",
     "what_is_not_verified": "השפעת ההחלטה על מאמצי הסנקציות הרחבים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_tass",
       "url": "https://tass.com/world/2213007",
       "published_at": "2026-11-04T21:00:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר אבדות מדויק של הצבא הרוסי כפי שמדווח המטה הכללי האוקראיני",
    "היקף הנזק המדויק בבית הזיקוק בריאזאן"
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
     "value": 1.1267,
     "unit": "USD",
     "change_pct": 0.79,
     "source_id": "src_ecb",
     "as_of": "2026-11-04T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הגנה על האינטרסים ופגיעה בתשתיות צבאיות-לוגיסטיות של אוקראינה"
     ],
     "inferred": [
      "שחיקת התשתיות הקריטיות של אוקראינה והורדת מוראל",
      "המשך לחץ צבאי להשגת תנאים נוחים להסדר עתידי"
     ],
     "forecast": [
      "המשך מתקפות אוויריות על ערי אוקראינה ותשתיות האנרגיה שלה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על המדינה, קבלת סיוע בינלאומי מוגבר והרחקת הכוחות הרוסיים",
      "שאיפה להגברת הלחץ הבינלאומי על רוסיה לסיום המלחמה"
     ],
     "inferred": [
      "פגיעה ביכולות הכלכליות והאנרגטיות של רוסיה באמצעות תקיפות עומק",
      "חיזוק קשרים עם גורמים בממשל האמריקאי והאירופי"
     ],
     "forecast": [
      "המשך פעילות הגנה אווירית ותקיפות נגד מטרות בתוך שטח רוסיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/nov/04/eu-ukraine-russia-france-germany-us-nato-europe-latest-news",
     "accessed_at": "2026-11-05T07:21:05+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-kyiv-suffers-worst-water-outage-of-full-scale-war-after-mass-russian-assault/",
     "accessed_at": "2026-11-05T07:21:05+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/05/8061331/",
     "accessed_at": "2026-11-05T07:21:05+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2213007",
     "accessed_at": "2026-11-05T07:21:05+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49298",
     "accessed_at": "2026-11-05T07:21:05+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4181598-adf-neutralises-105-russian-drones-since-yesterday-evening.html",
     "accessed_at": "2026-11-05T07:21:05+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T18:22:27+00:00",
  "changes": {
   "UKRAINE-11050721-01": {
    "kind": "new"
   },
   "UKRAINE-11050721-02": {
    "kind": "new"
   },
   "UKRAINE-11050721-03": {
    "kind": "new"
   },
   "UKRAINE-11050721-04": {
    "kind": "possible",
    "prev": "תקיפת מבנה חינוך וסיוע בקמישובחה",
    "score": 0.4
   },
   "UKRAINE-11050721-05": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-05T0725__north-202611050725.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-05T07:25:14+00:00",
   "window": {
    "from": "2026-11-04T07:25:14+00:00",
    "to": "2026-11-05T07:25:14+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611050725"
   },
   "summary": "בגזרה הצפונית נמשכות תקריות נקודתיות הכוללות תקיפות כטב\"ם וירי ארטילרי ישראלי בדרום לבנון לצד פעילות של חיזבאללה באזורים שפונו. במקביל, ממשלת לבנון מנסה לבלום היגררות למלחמה נוספת על רקע לחצים והערכות לגבי התפתחות אזורית, וסוריה ממשיכה לחזק את קשריה האזוריים והביטחוניים.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעיל חלקית עם תקיפות נקודתיות של צה\"ל ופעילות חזרה של חיזבאללה לכפרים"
    }
   ],
   "events": [
    {
     "id": "NORTH-11050725-01",
     "title": "תקיפת כטב\"ם ישראלי בקבריח'א",
     "summary": "כטב\"ם ישראלי תקף אופנוע במרחב קבריח'א שבדרום לבנון, מה שהביא להריגת אדם אחד ולפציעת אחר.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T11:34:05+00:00",
     "last_update_at": "2026-11-04T15:49:08+00:00",
     "what_is_not_verified": "זהותם המלאה של הנפגעים מעבר לדיווחים המקומיים אינה מאומתת ממקור רשמי ישראלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133087",
       "published_at": "2026-11-04T15:49:08+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25544",
       "published_at": "2026-11-04T15:48:09+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133083",
       "published_at": "2026-11-04T14:48:56+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/1-killed-another-wounded-in-fresh-israeli-strike-on-southern-lebanon/4111534",
       "published_at": "2026-11-04T12:40:53+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966393/israeli-strike-on-motorcycle-in-south-lebanon-kills-one-injures-anothe/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966393",
       "published_at": "2026-11-04T11:34:05+00:00"
      }
     ],
     "places": [
      {
       "name": "קבריח'א, לבנון",
       "lat": 33.2524,
       "lon": 35.4663
      }
     ]
    },
    {
     "id": "NORTH-11050725-02",
     "title": "ירי ארטילרי ואוויר בסביבת כפרים בדרום לבנון",
     "summary": "ארטילריה ישראלית הפגיזה את האזור שבין חאריס לחאדאתא, ותקיפה אווירית נוספת מכוונת לעבר העיירה טלווסה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T22:33:23+00:00",
     "last_update_at": "2026-11-04T22:34:12+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146997/",
       "published_at": "2026-11-04T22:34:12+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146987/",
       "published_at": "2026-11-04T22:33:23+00:00"
      }
     ],
     "places": [
      {
       "name": "חאריס, לבנון",
       "lat": 33.1768,
       "lon": 35.3799
      },
      {
       "name": "חאדאתא, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      },
      {
       "name": "טלווסה, לבנון",
       "lat": 33.2284,
       "lon": 35.4885
      }
     ]
    },
    {
     "id": "NORTH-11050725-03",
     "title": "הערכת מצב של הרמטכ\"ל בפיקוד הצפון",
     "summary": "הרמטכ\"ל קיין הערכת מצב בפיקוד הצפון והצהיר כי צה\"ל לא יאפשר לחיזבאללה לבסס תשתיות טרור במרחב.",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T16:15:22+00:00",
     "last_update_at": "2026-11-04T16:15:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25545",
       "published_at": "2026-11-04T16:15:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11050725-04",
     "title": "אזהרת ראש ממשלת לבנון לחיזבאללה",
     "summary": "ראש ממשלת לבנון נוואף סלאם הזהיר את חיזבאללה מפני גרירת המדינה למלחמה חדשה והפיכתה לזירת עימותים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T13:55:10+00:00",
     "last_update_at": "2026-11-04T13:55:10+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49282",
       "published_at": "2026-11-04T13:55:10+00:00"
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
    "ההערכות הישראליות על תיאום מלא בין חיזבאללה לאיראן",
    "ההנחיות הנטענות מצד שגרירות איראן בביירות לבכירים בחיזבאללה לנקוט אמצעי זהירות"
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
     "value": 3.1633,
     "unit": "ILS",
     "change_pct": 0.2,
     "source_id": "src_ecb",
     "as_of": "2026-11-04T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת ביסוס תשתיות טרור של חיזבאללה במרחב",
      "תגובה מיידית ועוצמתית לכל ניסיון התבססות או איום על יישובי הצפון"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי בדרום לבנון למרות הקשיים בשליטת צבא לבנון",
      "היערכות לאפשרות של הסלמה רחבה מול ציר המיליציות והאיראנים"
     ],
     "forecast": [
      "המשך תקיפות ממוקדמות נגד חשודים וגורמים עוינים החורגים ממרחב ההגנה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "חזרה הדרגתית לפעילות ולכפרים בדרום לבנון",
      "שימור יכולות והיערכות לתרחישי עימות אפשריים"
     ],
     "forecast": [
      "המשך נוכחות בשטח במקביל למתיחות מול פעילות צה\"ל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/146987/",
     "accessed_at": "2026-11-05T07:25:14+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/1-killed-another-wounded-in-fresh-israeli-strike-on-southern-lebanon/4111534",
     "accessed_at": "2026-11-05T07:25:14+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/966393/israeli-strike-on-motorcycle-in-south-lebanon-kills-one-injures-anothe/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966393",
     "accessed_at": "2026-11-05T07:25:14+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133083",
     "accessed_at": "2026-11-05T07:25:14+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49282",
     "accessed_at": "2026-11-05T07:25:14+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25545",
     "accessed_at": "2026-11-05T07:25:14+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T18:25:34+00:00",
  "changes": {
   "NORTH-11050725-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפת כטב\"ם בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11050725-02": {
    "kind": "new"
   },
   "NORTH-11050725-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "הערכת מצב בפיקוד הצפון והתבטאות הרמטכ\"ל",
    "score": 1.0
   },
   "NORTH-11050725-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "אזהרת ראש ממשלת לבנון נגד גרירת המדינה למלחמה",
    "score": 1.0
   }
  }
 }
};
