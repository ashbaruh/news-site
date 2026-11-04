/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-04T0112__yemen-202611040112.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-04T01:12:30+00:00",
   "window": {
    "from": "2026-11-03T01:12:30+00:00",
    "to": "2026-11-04T01:12:30+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611040112"
   },
   "summary": "בזירת תימן והחות'ים נמשכת הלחימה הקרקעית והאווירית בין הממשלה התימנית הנתמכת בידי סעודיה לבין תנועת החות'ים הנתמכת בידי איראן, תוך התקדמות של החות'ים לכיוון עדן והטלת מצור על תעז. במקביל, נמשכות התקיפות והאיומים מצד החות'ים על סעודיה והאזור, מה שמוביל לשיבושים באירועים בינלאומיים בממלכה ולדיונים בין סעודיה לארצות הברית על דרכי התגובה.",
   "fronts": [
    {
     "name": "חזית פנים תימן (עדן ותעז)",
     "status": "פעיל ומחמיר"
    },
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11040112-01",
     "title": "יירוט כטב\"ם באזור הדרומי של סעודיה",
     "summary": "כוחות הקופאל (הקואליציה) יירטו והשמידו כטב\"ם ששוגר על ידי המיליציה החותיה לעבר האזור הדרומי.",
     "axis": "סעודיה-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T20:26:18+00:00",
     "last_update_at": "2026-11-03T20:26:18+00:00",
     "what_is_not_verified": "זהות המפעילים המדויקת פרט להגדרת המיליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_acda81b98a07f4f0",
       "url": "https://www.sabanew.net/viewstory/155149",
       "published_at": "2026-11-03T20:26:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11040112-02",
     "title": "פגיעה בנשים בהריון ושירותי בריאות בעיר תעז",
     "summary": "לפי קרן האוכלוסייה של האו\"ם, עימותים והגבלות גישה בתעז הותירו אלפי נשים ללא טיפול רפואי והולו עלייה בהפלות.",
     "axis": "תימן פנים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T15:51:57+00:00",
     "last_update_at": "2026-11-03T19:29:44+00:00",
     "what_is_not_verified": "המספר המדויק של כלל הנפגעות וההפלות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_04766e0cb72e8f73",
       "url": "https://www.newarab.com/news/un-says-thousands-pregnant-women-risk-yemens-taiz",
       "published_at": "2026-11-03T19:29:44+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_bf78764efaf81d70",
       "url": "https://www.sabanew.net/viewstory/155139",
       "published_at": "2026-11-03T15:51:57+00:00"
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
     "id": "YEMEN-11040112-03",
     "title": "האשמות נגד איראן וחזבאללה על מעורבות ישירה בניהול מבצעי החות'ים",
     "summary": "שר הפנים התימני ובכירים בממשלת תימן הצהירו כי 21 מומחים ממשמר המהפכה ומחזבאללה מנהלים ותומכים בפעילות החות'ים.",
     "axis": "תימן-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T14:14:37+00:00",
     "last_update_at": "2026-11-03T19:09:09+00:00",
     "what_is_not_verified": "אמיתות המספרים והזהויות של המומחים הזרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_bd110ce8cdd34f9a",
       "url": "https://www.aljazeera.com/news/2026/11/3/yemen-govt-accuses-irgc-hezbollah-of-sending-21-experts-to-back-houthis?traffic_source=rss",
       "published_at": "2026-11-03T19:09:09+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_bd110ce8cdd34f9a",
       "url": "https://www.sabanew.net/viewstory/155133",
       "published_at": "2026-11-03T15:00:53+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_c0e6b8440ee51dc3",
       "url": "https://www.sabanew.net/viewstory/155130",
       "published_at": "2026-11-03T14:14:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11040112-04",
     "title": "דיון בין שר ההגנה הסעודי ומזכיר ההגנה האמריקאי על התקפות החות'ים",
     "summary": "הצדדים קיימו שיחת טלפון שבה דנו במאמצים להרגעת המתיחות במפרץ ובהתקפות החות'ים על סעודיה.",
     "axis": "סעודיה-ארצות הברית-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T16:30:32+00:00",
     "last_update_at": "2026-11-03T16:30:32+00:00",
     "what_is_not_verified": "פרטי הסיכומים המעשיים מהשיחה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9ec6c27df013a064",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-defence-minister-and-hegseth-discuss-latest-houthi-attacks",
       "published_at": "2026-11-03T16:30:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11040112-05",
     "title": "התקדמות כוחות החות'ים לעבר עדן וניתוק כבישים",
     "summary": "כוחות החות'ים התקדמו עד למרחק של כ-80 קילומטרים מעדן, השתלטו על אזור אל-מקטארירה וניתקו את ציר עדן-תעז.",
     "axis": "תימן פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T13:01:58+00:00",
     "last_update_at": "2026-11-03T13:01:58+00:00",
     "what_is_not_verified": "היקף השליטה המדויק בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49258",
       "published_at": "2026-11-03T13:01:58+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11040112-06",
     "title": "דחיית אליפות גביע אסיה בכדורגל בסעודיה",
     "summary": "ההתאחדות לכדורגל באסיה הודיעה על דחיית טורניר גביע אסיה שאמור היה להתקיים בסעודיה מינואר לדצמבר 2027 בשל נסיבות אזוריות.",
     "axis": "סעודיה-אזוריות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T09:58:46+00:00",
     "last_update_at": "2026-11-03T13:00:12+00:00",
     "what_is_not_verified": "המשקל המדויק של שיקולים ביטחוניים מול לוגיסטיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_8b2321e388731958",
       "url": "https://t.me/abualiexpress/133024",
       "published_at": "2026-11-03T13:00:12+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_8b2321e388731958",
       "url": "https://www.newarab.com/news/asian-cup-latest-event-saudi-arabia-be-postponed",
       "published_at": "2026-11-03T09:58:46+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספרם וזהותם המדויקים של 21 המומחים הזרים הנטענים על ידי ממשלת תימן",
    "ההשפעה המדויקת של המצב הביטחוני על כלל המתקנים הרפואיים בתעז",
    "האם דחיית גביע אסיה נובעת אך ורק מאיומי החות'ים"
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
     "value": 3.157,
     "unit": "ILS",
     "change_pct": 0.56,
     "source_id": "src_ecb",
     "as_of": "2026-11-03T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [],
     "inferred": [
      "הרחבת השליטה הטריטורialית בתימן על חשבון ממשלת תימן",
      "הפעלת לחץ על סעודיה באמצעות פגיעה בתשתיות ובאירועים בממלכה"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות צבאית לעבר יעדים מרכזיים כמו עדן",
      "המשך שיגור איומים ואמצעי לחימה לעבר סעודיה והמרחב הימי"
     ]
    },
    {
     "actor": "ממשלת תימן וסעודיה",
     "declared": [
      "בלימת התוקפנות של המיליציה החות'ית והגנה על אזרחים"
     ],
     "inferred": [
      "גיבוש שיתוף פעולה הדוק יותר עם ארצות הברית ובעלות ברית אזוריות",
      "ניסיון לשקם את הלגיטימציה ולבלום את הפגיעה בתשתיות ובכלכלה"
     ],
     "forecast": [
      "הגברת התיאום הביטחוני והצבאי בין סעודיה לארה\"ב",
      "המשך המאבק המזוין והדיפלומטי נגד מעורבות איראן וחזבאללה בתימן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/3/yemen-govt-accuses-irgc-hezbollah-of-sending-21-experts-to-back-houthis?traffic_source=rss",
     "accessed_at": "2026-11-04T01:12:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-defence-minister-and-hegseth-discuss-latest-houthi-attacks",
     "accessed_at": "2026-11-04T01:12:30+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/asian-cup-latest-event-saudi-arabia-be-postponed",
     "accessed_at": "2026-11-04T01:12:30+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155130",
     "accessed_at": "2026-11-04T01:12:30+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133024",
     "accessed_at": "2026-11-04T01:12:30+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49258",
     "accessed_at": "2026-11-04T01:12:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-03T10:12:59+00:00",
  "changes": {
   "YEMEN-11040112-01": {
    "kind": "new"
   },
   "YEMEN-11040112-02": {
    "kind": "same",
    "from": "initial",
    "to": "assessment",
    "prev": "פגיעה באזרחים כתוצאה מנפילת טילים דרומית לתעז",
    "score": 0.817
   },
   "YEMEN-11040112-03": {
    "kind": "new"
   },
   "YEMEN-11040112-04": {
    "kind": "possible",
    "prev": "תקיפה על רכב סעודי בידי החות'ים",
    "score": 0.467
   },
   "YEMEN-11040112-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התקדמות החות'ים לעבר עדן",
    "score": 1.0
   },
   "YEMEN-11040112-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "דחיית גביע אסיאה בכדורגל בסעודיה",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-04T1813__iran-202611041813.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-04T18:13:08+00:00",
   "window": {
    "from": "2026-11-03T18:13:08+00:00",
    "to": "2026-11-04T18:13:08+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611041813"
   },
   "summary": "הזירה מתאפיינת במתיחות צבאית ומדינית גבוהה בין איראן לבין ארה\"ב וישראל, המושפעת כעת ישירות מתוצאות בחירות האמצע בארה\"ב שבהן הפסידו הרפובליקנים. בעוד בכירי ממשל באמריקה ובראשם סגן הנשיא מתנערים מהמלחמה ומאשימים אותה בהפסד הפוליטי, הצד האיראני חוגג את מה שהוא מגדיר כתבוסה אסטרטגית של וושינגטון. במקביל, ישראל מקיימת דיונים ביטחוניים ומעבירה מידע מודיעיני על איומים כימיים מצד איראן, בעוד שורה של גורמים בלבנון ובעולם מזהירים מפני התלקחות אזורית רחבה.",
   "fronts": [
    {
     "name": "איראן מול ארה\"ב",
     "status": "פעיל ומתוח מאוד בעקבות תוצאות הבחירות בארה\"ב והעימותים במצר הורמוז"
    },
    {
     "name": "ישראל מול איראן ושלוחותיה",
     "status": "מתיחות גבוהה ופעילות מודיעינית וביטחונית קדחתנית"
    }
   ],
   "events": [
    {
     "id": "IRAN-11041813-01",
     "title": "הצהרות בכירי איראן בעקבות בחירות האמצע בארה\"ב",
     "summary": "בכירי ממשל באיראן, בהם מזכיר המועצה העליונה לביטחון לאומי ודובר משרד החוץ, טענו כי תוצאות הבחירות בארה\"ב מהוות תבוסה אסטרטגית ופוליטית לנשיא ארה\"ב ולמדיניותו מול איראן.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T12:25:50+00:00",
     "last_update_at": "2026-11-04T18:06:52+00:00",
     "what_is_not_verified": "האם התוצאות בארה\"ב אכן נובעות אך ורק מהעימות עם איראן כפי שטוענים באיראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_bd4f13f994050c94",
       "url": "https://t.me/abualiexpress/133101",
       "published_at": "2026-11-04T18:06:52+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_bd4f13f994050c94",
       "url": "https://en.irna.ir/news/86312862/Top-security-official-Anyone-who-confronts-Iran-will-have-to",
       "published_at": "2026-11-04T17:44:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_7c0586c1b1f7deb0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-inflicted-defeat-trump-security-chief-says-after-midterms",
       "published_at": "2026-11-04T17:21:31+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_bd4f13f994050c94",
       "url": "https://www.france24.com/en/video/20261104-us-midterms-iran-s-deputy-parliament-speaker-reacts-to-trump-s-elections-setback-1",
       "published_at": "2026-11-04T16:50:06+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_bd4f13f994050c94",
       "url": "https://t.me/abualiexpress/133076",
       "published_at": "2026-11-04T12:25:50+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-11041813-02",
     "title": "פגיעה בארבע מכליות נפט במצר הורמוז",
     "summary": "באיראן נטען כי ארבע מכליות נפט התפוצצו ועלו באש לאחר שפגעו במוקשים במצר הורמוז.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T08:43:31+00:00",
     "last_update_at": "2026-11-04T08:43:31+00:00",
     "what_is_not_verified": "נסיבות פיצוץ המכליות והגורם להנחת המוקשים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261104-four-oil-tankers-destroyed-in-hormuz-after-hitting-mines-tehran-says",
       "published_at": "2026-11-04T08:43:31+00:00"
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
     "id": "IRAN-11041813-03",
     "title": "דיון בטחוני מצומצם של ראש ממשלת ישראל",
     "summary": "ראש ממשלת ישראל צפוי לכנס דיון ביטחוני מצומצם בנושא איראן בהשתתפות בכירי מערכת הביטחון.",
     "axis": "ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-04T14:54:16+00:00",
     "last_update_at": "2026-11-04T14:54:16+00:00",
     "what_is_not_verified": "תוכנו המלא והחלטותיו של הדיון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94954",
       "published_at": "2026-11-04T14:54:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11041813-04",
     "title": "העברת מודיעין ישראלי לארה\"ב על נשק כימי",
     "summary": "… דבר שעורר חילוקי דעות בוושינגטון.",
     "axis": "ישראל וארה\"ב מול איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T18:03:35+00:00",
     "last_update_at": "2026-11-03T18:18:37+00:00",
     "what_is_not_verified": "מידת האמינות של המידע המודיעיני והאם הוא נועד לדחוף למלחמה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383960002",
       "published_at": "2026-11-03T18:18:37+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94945",
       "published_at": "2026-11-03T18:03:35+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה האיראנית לפיה מכליות נפט נפגעו ממוקשים במצר הורמוז",
    "הדיווחים על כך שאיראן שוקלת להשתמש בנשק כימי",
    "ההערכות בוושינגטון האם ממשל טראמפ יחדש מתקפות נרחבות נגד איראן למרות תוצאות הבחירות"
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
      "להנחיל תבוסה אסטרטגית ופוליטית לארה\"ב",
      "להבהיר שכל עימות עם איראן ייענה בתשלום מחיר כבד"
     ],
     "inferred": [
      "לנצל את חוסר היציבות הפוליטית בארה\"ב ובקונגרס כדי להפחית לחץ אמריקאי",
      "לשמור על תשתיות האנרגיה והצבא למרות הנזקים"
     ],
     "forecast": [
      "המשכת לוחמה פוליטית ותעמולתית נגד ארה\"ב וישראל",
      "הגברת האיומים הימיים באזור מצר הורמוז"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "להפעיל לחץ צבאי וכלכלי על איראן (לפי מדיניות קודמת ופעולות קודמות)"
     ],
     "inferred": [
      "להתמודד עם ביקורת פנימית קשה בקונגרס ובלשות מקבלי ההחלטות בעקבות השפעת המלחמה על הבחירות",
      "שקילת צעדים צבאיים נוספים מול הדילמה הפוליטית"
     ],
     "forecast": [
      "הגבלת חופש הפעולה של הממשל בנוגע למלחמה באיראן עקב שליטת הדמוקרטים בקונגרס",
      "התנגשויות תקציביות ופוליטיות בוושינגטון סביב מדיניות החוץ"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התמודדות עם האיום הגרעיני והביטחוני מצד איראן"
     ],
     "inferred": [
      "ניסיון לשכנע את ממשל טראמפ לשמור על רף לחץ גבוה ואף לחדש פעילות צבאית נרחבת נגד איראן",
      "הערכת מצב מחודשת בעקבות השינויים הפוליטיים בארה\"ב"
     ],
     "forecast": [
      "המשך היערכות פנימית ודיונים ביטחוניים מצומצמים מול האיום האיראני",
      "התמודדות עם לחץ דיפלומטי ומדיני גובר"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261104-four-oil-tankers-destroyed-in-hormuz-after-hitting-mines-tehran-says",
     "accessed_at": "2026-11-04T18:13:08+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86312862/Top-security-official-Anyone-who-confronts-Iran-will-have-to",
     "accessed_at": "2026-11-04T18:13:08+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-inflicted-defeat-trump-security-chief-says-after-midterms",
     "accessed_at": "2026-11-04T18:13:08+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133076",
     "accessed_at": "2026-11-04T18:13:08+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94945",
     "accessed_at": "2026-11-04T18:13:08+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383960002",
     "accessed_at": "2026-11-04T18:13:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T03:16:42+00:00",
  "changes": {
   "IRAN-11041813-01": {
    "kind": "possible",
    "prev": "שיבושי אינטרנט באיראן",
    "score": 0.633
   },
   "IRAN-11041813-02": {
    "kind": "new"
   },
   "IRAN-11041813-03": {
    "kind": "new"
   },
   "IRAN-11041813-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "העברת מידע מודיעיני מישראל לארה\"ב על איום כימי איראני",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-04T1822__ukraine-202611041822.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-04T18:22:27+00:00",
   "window": {
    "from": "2026-11-03T18:22:27+00:00",
    "to": "2026-11-04T18:22:27+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611041822"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה מתנהלת במקביל להמשך תקיפות אוויריות נרחבות של רוסיה על תשתיות אנרגיה ואזרחים באוקראינה, לצד פעילות צבאית ולחימה בחזית הדרומית והמזרחית. במקביל, מתקיימים מאמצים דיפלומטיים בינלאומיים שונים סביב יוזמות תיווך אפשריות ומגעים להסדרת סיוע וביטחון.",
   "fronts": [
    {
     "name": "חזית המזרח (דונצק / סלאביאנסק)",
     "status": "פעילה עם תקיפות והפצצות ממוקדות"
    },
    {
     "name": "חזית הדרום (זפוריז'יה / חרסון / קרים)",
     "status": "פעילה הכוללת תקיפות תשתיות, הפסקות חשמל ופעילות הומניטרית נקודתית"
    },
    {
     "name": "החזית האווירית והעורף האוקראיני",
     "status": "פעילה מאוד תחת גלי תקיפות טילים ורחפנים חוזרים ונשנים מצד רוסיה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11041822-01",
     "title": "תקיפת מבנה חינוך וסיוע בקמישובחה",
     "summary": "כוחות רוסיה תקפו מבנה ששימש כבית ספר ומרכז סיוע ביישוב קמישובחה, וגרמו לנפגעים רבים ולחשש לכודים תחת ההריסות.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T16:57:41+00:00",
     "last_update_at": "2026-11-04T16:09:19+00:00",
     "what_is_not_verified": "מספר הלכודים המדויק תחת ההריסות אינו ודאי לחלוטין.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/nov/04/eu-ukraine-russia-france-germany-us-nato-europe-latest-news",
       "published_at": "2026-11-04T16:09:19+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/death-toll-from-russian-attack-on-komyshuvakha-rises-to-37-as-search-operation-enters-3rd-day/",
       "published_at": "2026-11-04T12:07:27+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
       "published_at": "2026-11-04T01:08:17+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c65ynez5y599o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-03T16:57:41+00:00"
      }
     ],
     "places": [
      {
       "name": "קמישובחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11041822-02",
     "title": "מתקפת טילים ורחפנים נרחבת על תשתיות אנרגיה באוקראינה",
     "summary": "רוסיה ביצעה גל תקיפות נרחב באמצעות טילים ורחפנים שפגע בתשתיות אנרגיה במספר אזורים באוקראינה.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T01:08:17+00:00",
     "last_update_at": "2026-11-04T11:46:36+00:00",
     "what_is_not_verified": "היקף הנזק המלא לכל אתרי הייצור אינו מפורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-attacks-kill-6-injure-50-across-ukraine-over-past-day-as-energy-facilities-targeted-in-multiple-regions/",
       "published_at": "2026-11-04T11:46:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
       "published_at": "2026-11-04T01:08:17+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      },
      {
       "name": "ריבנה, אוקראינה",
       "lat": 50.6196,
       "lon": 26.2513
      }
     ]
    },
    {
     "id": "UKRAINE-11041822-03",
     "title": "הארכת חופשת הבית הספר בחצי האי קרים עקב שיבושי חשמל",
     "summary": "השלטונות הרוסיים בקרים הכבושה האריכו את חופשת הבית הספר בעקבות הפסקות חשמל ופגיעה בתשתיות כתוצאה מתקיפות אוקראיניות.",
     "axis": "העורף והשפעות מלחמה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-04T18:01:04+00:00",
     "last_update_at": "2026-11-04T18:01:04+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק לחידוש כלל האספקה אינו מאומת לחלוטין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_2896520d92db4f4a",
       "url": "https://meduza.io/en/news/2026/11/04/occupied-crimea-extends-school-break-as-ukrainian-strikes-leave-the-peninsula-without-power",
       "published_at": "2026-11-04T18:01:04+00:00"
      }
     ],
     "places": [
      {
       "name": "קרים",
       "lat": 45.2835,
       "lon": 34.2008
      }
     ]
    },
    {
     "id": "UKRAINE-11041822-04",
     "title": "השמדת מערכת הגנה אווירית רוסית מסוג בוק-אמ-3",
     "summary": "כוחות אוקראיניים פגעו באמצעות רחפן במערכת הגנה אווירית מתקדמת רוסית מסוג בוק-אמ-3 במהלך מבצע צבאי.",
     "axis": "לחימה בחזית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T16:47:00+00:00",
     "last_update_at": "2026-11-04T16:47:00+00:00",
     "what_is_not_verified": "לא מאומת האם המערכת יצאה מכלל שימוש לצמיתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_bd2c46e3d9819cdb",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/04/8061273/",
       "published_at": "2026-11-04T16:47:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11041822-05",
     "title": "פגיעה במבנה רפואי היסטורי בסלאביאנסק",
     "summary": "כוחות רוסיה תקפו מתקן רפואי ישן המשמש כמונצח אדריכלי במרכז סלאביאנסק.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T16:51:00+00:00",
     "last_update_at": "2026-11-04T16:51:00+00:00",
     "what_is_not_verified": "פרטי כלל הנזקים המשניים למבנים הסמוכים אינם מלאים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_0121c106e9874e1d",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/04/8061274/",
       "published_at": "2026-11-04T16:51:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלאביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-11041822-06",
     "title": "הפלתו של רחפן תעמולה רוסי מעל קייב",
     "summary": "רחפן שאהד רוסי שנשא חומרי תעמולה וקוד דיוג הופל על ידי כוחות אוקראיניים.",
     "axis": "לוחמה אלקטרונית ואווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T17:20:00+00:00",
     "last_update_at": "2026-11-04T17:20:00+00:00",
     "what_is_not_verified": "זהות כל היעדים שניסו להיחשף לקישור הדיוג אינה ידועה במלואה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_4e9c79d8ea66d4a0",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/04/8061278/",
       "published_at": "2026-11-04T17:20:00+00:00"
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
     "id": "UKRAINE-11041822-07",
     "title": "ביקור נשיא אוקראינה במדריד לדיוני הגנה",
     "summary": "נשיא אוקראינה וולודימיר זלנסקי הגיע למדריד לפגישות שעניינן חיזוק ההגנה האווירית ושיתוף פעולה ביטחוני עם ספרד.",
     "axis": "דיפלומטיה וסיוע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-04T16:46:00+00:00",
     "last_update_at": "2026-11-04T17:36:00+00:00",
     "what_is_not_verified": "התוצאות המעשיות המדויקות של ההסכמים טרם פורסמו במלואן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/04/8061280/",
       "published_at": "2026-11-04T17:36:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-lands-in-spain-to-discuss-air-defense/",
       "published_at": "2026-11-04T16:46:13+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4181489-zelensky-arrives-in-spain.html",
       "published_at": "2026-11-04T16:46:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מדריד, ספרד",
       "lat": 40.4168,
       "lon": -3.7035
      }
     ]
    }
   ],
   "not_verified": [
    "טענות ערוץ הטלוויזיה האיראני על כך שקייב, לבוב ואודסה הם יעדים פוטנציאליים לתקיפה איראנית במקרה של עימות עם ארה״ב.",
    "האם הנסיעה של הפמלייה הרוסית לפגישה בוושינגטון בראשות יאנה לנטרטובה תצא לפועל עניין קבלת הוזות בזמן.",
    "לוחות הזמנים וההיתכנות של מתווה האיחוד האירופי להצטרפות אוקראינה עד שנת 2027 או 2028."
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
     "actor": "אוקראינה",
     "declared": [
      "חיזוק מערכות ההגנה האווירית והגנה על האוכלוסייה",
      "הרחבת שיתוף הפעולה הביטחוני והתעשייתי עם בעלות ברית כמו ספרד",
      "התקדמות ברפורמות הנדרשות לשם השגת יעדי ההצטרפות לאיחוד האירופי"
     ],
     "inferred": [
      "שאיפה להשיג לחץ בינלאומי על רוסיה ולשמור על תמיכה צבאית וכלכלית מערבית",
      "פגיעה ביכולות הלוגיסטיות והצבאיות של רוסיה בשטחים הכבושים"
     ],
     "forecast": [
      "המשך מאמצים להשגת חלקי חילוף ומערכות נשק מתקדמות ממדינות אירופה",
      "התמודדות עם נזקי תקיפות האנרגיה באמצעות סיוע בינלאומי"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך פעילות צבאית להשגת יעדי המבצע באוקראינה",
      "הגנה על שטחים כבושים ושמירה על שליטה באזורי המפתח"
     ],
     "inferred": [
      "ניסיון לערער את עמידות העורף האוקראיני באמצעות פגיעה שיטתית בתשתיות אנרגיה ואזרחים",
      "שאיפה להקפאת העימות בתנאים נוחים שיאפשרו להחזיק בשטחים שנכבשו ולמנוע את התחזקות אוקראינה"
     ],
     "forecast": [
      "המשך מתקפות אוויריות תקופתיות על תשתיות חיוניות באוקראינה",
      "ניצול מנופים דיפלומטיים ותווי תיווך שונים כדי לשפר את עמדות המיקוח שלה מול המערב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c65ynez5y599o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-04T18:22:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
     "accessed_at": "2026-11-04T18:22:27+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/zelensky-lands-in-spain-to-discuss-air-defense/",
     "accessed_at": "2026-11-04T18:22:27+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/04/occupied-crimea-extends-school-break-as-ukrainian-strikes-leave-the-peninsula-without-power",
     "accessed_at": "2026-11-04T18:22:27+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/04/8061280/",
     "accessed_at": "2026-11-04T18:22:27+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4181489-zelensky-arrives-in-spain.html",
     "accessed_at": "2026-11-04T18:22:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T01:11:13+00:00",
  "changes": {
   "UKRAINE-11041822-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה רוסית על מרכז סיוע הומניטרי",
    "score": 1.0
   },
   "UKRAINE-11041822-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפה נרחבת על תשתיות האנרגיה באוקראינה",
    "score": 1.0
   },
   "UKRAINE-11041822-03": {
    "kind": "new"
   },
   "UKRAINE-11041822-04": {
    "kind": "new"
   },
   "UKRAINE-11041822-05": {
    "kind": "new"
   },
   "UKRAINE-11041822-06": {
    "kind": "new"
   },
   "UKRAINE-11041822-07": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-04T1825__north-202611041825.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-04T18:25:34+00:00",
   "window": {
    "from": "2026-11-03T18:25:34+00:00",
    "to": "2026-11-04T18:25:34+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611041825"
   },
   "summary": "בגזרה הצפונית נרשמת דריכות גבוהה לאחר שצה\"ל תקף חשודים שחגו סמוך לכוחות בדרום לבנון, פעולה שגרמה לחשש מהסלמה נוספת. במקביל, הדרג המדיני בלבנון מזהיר מפני פתיחת עימות נוסף, בעוד ישראל מבהירה כי לא תאפשר לחיזבאללה להתבסס מחדש.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם אירועי אש נקודתיים ודריכות מבצעית"
    }
   ],
   "events": [
    {
     "id": "NORTH-11041825-01",
     "title": "תקיפת כטב\"ם בדרום לבנון",
     "summary": "צה\"ל תקף באמצעות כטב\"ם אופנוע בדרום לבנון, ובתקיפה נפגעו או נהרגו אנשים בהם חובש",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T11:34:05+00:00",
     "last_update_at": "2026-11-04T15:49:08+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק וזהותם המלאה מעבר לדיווחים הראשוניים",
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
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146872/",
       "published_at": "2026-11-04T15:07:19+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133083",
       "published_at": "2026-11-04T14:48:56+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjzg8n006fe",
       "published_at": "2026-11-04T13:47:43+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21780154",
       "published_at": "2026-11-04T13:45:47+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146812/",
       "published_at": "2026-11-04T13:14:52+00:00"
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
     "id": "NORTH-11041825-02",
     "title": "הערכת מצב בפיקוד הצפון והתבטאות הרמטכ\"ל",
     "summary": "הרמטכ\"ל ערך הערכת מצב בפיקוד הצפון והזהיר כי צה\"ל לא יאפשר לחיזבאללה לבסס תשתיות טרור",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T16:15:22+00:00",
     "last_update_at": "2026-11-04T16:15:22+00:00",
     "what_is_not_verified": "לא מאומתות תוכניות מבצעיות עתידיות מעבר להצהרות",
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
     "id": "NORTH-11041825-03",
     "title": "אזהרת ראש ממשלת לבנון נגד גרירת המדינה למלחמה",
     "summary": "ראש ממשלת לבנון הזהיר את חיזבאללה מלהביא למלחמה חדשה ולהפוך את המדינה לזירת עימות חיצונית",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T05:05:40+00:00",
     "last_update_at": "2026-11-04T13:55:10+00:00",
     "what_is_not_verified": "תגובת חיזבאללה המעודכנת לדברים אינה מפורטת מעבר להנחיות החירום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49282",
       "published_at": "2026-11-04T13:55:10+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966328/pm-salam-warns-against-dragging-lebanon-into-new-regional-war-condemns/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966328",
       "published_at": "2026-11-04T05:05:40+00:00"
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
     "id": "NORTH-11041825-04",
     "title": "הנחיות חירום של שגרירות איראן בביירות לבכירי חיזבאללה",
     "summary": "התקבלו דיווחים לפיהם שגרירות איראן בביירות הנחתה את בכירי חיזבאללה ומשפחותיהם לנקוט אמצעי זהירות ומגורים חלופיים",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-04T11:11:11+00:00",
     "last_update_at": "2026-11-04T11:11:11+00:00",
     "what_is_not_verified": "הפרט מבוסס על מקור לבנוני אנונימי ואינו מאומת רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49279",
       "published_at": "2026-11-04T11:11:11+00:00"
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
    "הנחיות שגרירות איראן למשפחות ומפקדי חיזבאללה לנקוט אמצעי זהירות",
    "דיווחים על כוונות תקיפה אמריקאיות קרובות באיראן ובלבנון"
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
     "actor": "ישראל (צה\"ל)",
     "declared": [
      "אי-אפשרות לחיזבאללה לבסס תשתיות טרור במרחב",
      "תגובה מיידית ועוצמתית לכל ניסיון התבססות או איום על יישובי הצפון"
     ],
     "inferred": [
      "שבירת שגרת ההבלגה ושמירה על חופש פעולה מבצעי בדרום לבנון"
     ],
     "forecast": [
      "המשך סיכולים נקודתיים במקרה של זיהוי איומים או תצפיות בסביבת כוחות צה\"ל"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שמירה על נוכחות שטח ואיסוף מודיעין באמצעות תצפיות באזור הדרום למרות הסיכונים"
     ],
     "forecast": [
      "היערכות אפשרית תחת אמצעי זהירות מוגברים מחשש להסלמה רחבה יותר מצד ישראל או ארה\"ב"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "אזהרה מפני גרירת המדינה למלחמה חדשה הרפתקנית",
      "שמירה על ריבונות ובלעדיות החלטות המלחמה והשלום בידי המדינה"
     ],
     "inferred": [
      "חשש עמוק מהרס נוסף שיוטל על תושבי הדרום ומאובדן שליטה על הפעילות הצבאית בשטחה"
     ],
     "forecast": [
      "המשך קריאות דיפלומטיות ופנימיות למניעת עימותים נוספים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/146812/",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/1-killed-another-wounded-in-fresh-israeli-strike-on-southern-lebanon/4111534",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21780154",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/966328/pm-salam-warns-against-dragging-lebanon-into-new-regional-war-condemns/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966328",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133083",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49279",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25545",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rjzg8n006fe",
     "accessed_at": "2026-11-04T18:25:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-04T01:14:10+00:00",
  "changes": {
   "NORTH-11041825-01": {
    "kind": "possible",
    "prev": "סיכום פעילות צק\"ח 7 בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11041825-02": {
    "kind": "new"
   },
   "NORTH-11041825-03": {
    "kind": "new"
   },
   "NORTH-11041825-04": {
    "kind": "new"
   }
  }
 }
};
