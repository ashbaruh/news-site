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
  "draft": "drafts/iran/2026-11-03T0959__iran-202611030959.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-03T09:59:47+00:00",
   "window": {
    "from": "2026-11-02T09:59:47+00:00",
    "to": "2026-11-03T09:59:47+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611030959"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך על רקע תקיפות אמריקאיות מוגבלות באיראן ומאמצים דיפלומטיים עקיפים שנמשכים סביב סוגיות הגרעין והשליטה במצר הורמוז. במקביל, בכירים באיראן משמיעים איומים להרחיב את טווח הלחימה למדינות אירופה ולארה\"ב, בעוד שוק האנרגיה והכלכלה העולמית מושגים קשות מהמתיחות הממושכת במפרץ.",
   "fronts": [
    {
     "name": "חזית איראן - ארה\"ב",
     "status": "פעיל עם תקיפות מוגבלות וחילופי איומים"
    },
    {
     "name": "חזית מצר הורמוז והכלכלה הימית",
     "status": "חסום או מנוטרל חלקית תחת איומים הדדיים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11030959-01",
     "title": "תקיפות אמריקאיות באי קשם ובבנדר לנגה",
     "summary": "צבא ארה\"ב ביצע תקיפות מוגבלות והגנתיות באיראן בתגובה לירי לעבר נכסים וכלי טיס אמריקאיים.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T02:23:43+00:00",
     "last_update_at": "2026-11-03T08:14:14+00:00",
     "what_is_not_verified": "היקף הנזק המדויק וזהות הנכסים שנפגעו באופן מלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-659",
       "published_at": "2026-11-03T08:14:14+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/03/us-strikes-irans-qeshm-island",
       "published_at": "2026-11-03T08:13:46+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-carries-out-defensive-strikes-irans-qeshm-island-officials-say",
       "published_at": "2026-11-03T05:46:31+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cx240mrm3g8vo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-03T03:39:08+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21764581",
       "published_at": "2026-11-03T02:23:43+00:00"
      }
     ],
     "places": [
      {
       "name": "אי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      },
      {
       "name": "בנדר לנגה, איראן",
       "lat": 26.5621,
       "lon": 54.8838
      }
     ]
    },
    {
     "id": "IRAN-11030959-02",
     "title": "איומים איראניים על הרחבת המלחמה לאירופה וארה\"ב",
     "summary": "גורמים צבאיים ופרלמנטריים באיראן איימו כי עימות עתידי יתרחב מעבר למזרח התיכון ויכלול תקיפות על מתקנים אמריקאיים ואירופיים.",
     "axis": "איראן מול ארה\"ב ואירופה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T08:14:14+00:00",
     "last_update_at": "2026-11-03T09:56:49+00:00",
     "what_is_not_verified": "האם איראן אכן מחזיקה ביכולות מבצעיות מדויקות לפגוע באירופה ובארה\"ב באמצעות טילים בין-יבשתיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611036564",
       "published_at": "2026-11-03T09:56:49+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133016",
       "published_at": "2026-11-03T09:28:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-659",
       "published_at": "2026-11-03T08:14:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11030959-03",
     "title": "הצעת איראן לתנאים לפתיחת מצר הורמוז",
     "summary": "איראן הציעה תוכנית עבודה לפתיחת מצר הורמוז ולחידוש שיחות הגרעין בתמורה להיענות לדרישותיה.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T17:04:54+00:00",
     "last_update_at": "2026-11-03T07:47:09+00:00",
     "what_is_not_verified": "האם ארה\"ב או בעלות בריתה יסכימו לתנאים שהציגה טהרן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133013",
       "published_at": "2026-11-03T07:47:09+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-engages-us-in-intensive-negotiations-to-avert-fresh-war-outbreak",
       "published_at": "2026-11-02T17:42:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/video/20261102-iran-offers-deal-on-hormuz-strait-netanyahu-wants-to-finish-the-job",
       "published_at": "2026-11-02T17:04:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11030959-04",
     "title": "אימון צבאי של משמרות המהפכה בחמדאן",
     "summary": "נצפו טילים בשמי העיר חמדאן באיראן במסגרת אימון של משמרות המהפכה.",
     "axis": "איראן פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T16:58:54+00:00",
     "last_update_at": "2026-11-02T16:58:54+00:00",
     "what_is_not_verified": "לא מאומת האם מדובר באימון שגרתי בלבד או בהיערכות מיוחדת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49227",
       "published_at": "2026-11-02T16:58:54+00:00"
      }
     ],
     "places": [
      {
       "name": "חמדאן, איראן",
       "lat": 34.9726,
       "lon": 48.6564
      }
     ]
    }
   ],
   "not_verified": [
    "ה",
    "ט",
    "ע",
    "נ",
    "ה",
    "ש",
    "ל",
    "ח",
    "ב",
    "ר",
    "ה",
    "פ",
    "ר",
    "ל",
    "מ",
    "נ",
    "ט",
    "ה",
    "א",
    "י",
    "ר",
    "א",
    "נ",
    "י",
    "ל",
    "פ",
    "י",
    "ה",
    "א",
    "י",
    "ר",
    "א",
    "ן"
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על המדינה מפני תקיפות זרות",
      "דרישה להיענות לתנאיה כתנאי לפתיחת מצר הורמוז",
      "איום בהרחבת זירת הלחימה לאירופה ולארה\"ב"
     ],
     "inferred": [
      "שאיפה להסרת סנקציות ולבלום את הדרישות המערביות במו\"מ",
      "ניסיון להפעיל לחץ כלכלי על המערב באמצעות שיבוש נתיבי האנרגיה"
     ],
     "forecast": [
      "המשך שימוש באיומי טילים ובהסלמה ימית כדי לשפר עמדות מיקוח",
      "החרפת הרטוריקה נגד אירופה וארה\"ב"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הגנה על נכסים וכלים צבאיים באזור מפני תקיפות איראניות",
      "מניעת התבססות גרעינית צבאית איראנית"
     ],
     "inferred": [
      "שמירה על הרתעה באמצעות תקיפות נקודתיות מוגבלות מבלי להיגרר למלחמה כוללת לפני בחירות האמצע",
      "הפעלת לחץ מרבי על טהרן לצורך הגעה להסכם נוח"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות וממוקדות אם יימשכו האיומים או הירי לעבר כוחותיה",
      "המתנה לתוצאות הפוליטיות הפנימיות בארה\"ב לשם גיבוש מדיניות המשך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/us-carries-out-defensive-strikes-irans-qeshm-island-officials-say",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cx240mrm3g8vo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/video/20261102-iran-offers-deal-on-hormuz-strait-netanyahu-wants-to-finish-the-job",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/03/us-strikes-irans-qeshm-island",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611036564",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21764581",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-659",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133013",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49227",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T20:29:48+00:00",
  "changes": {
   "IRAN-11030959-01": {
    "kind": "new"
   },
   "IRAN-11030959-02": {
    "kind": "new"
   },
   "IRAN-11030959-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצעה איראנית לפתיחת מצר הורמוז וחידוש שיחות תוך יומיים",
    "score": 1.0
   },
   "IRAN-11030959-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "אימון טילים של משמרות המהפכה באיראן",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-04T0111__ukraine-202611040111.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-04T01:11:13+00:00",
   "window": {
    "from": "2026-11-03T01:11:13+00:00",
    "to": "2026-11-04T01:11:13+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611040111"
   },
   "summary": "רוסיה ממשיכה בגל תקיפות חסר תקדים הכולל מאות כטב\"מים וטילים על תשתיות האנרגיה ואזורים אזרחיים באוקראינה, בעוד אוקראינה מתמודדת עם הפסקות חשמל ומים נרחבות והרס בתשתיות חיוניות. במקביל, נמשכים הקבועים בקו החזית ופעילות דיפלומטית וביטחונית מצד מדינות אירופה והקהילה הבינלאומית.",
   "fronts": [
    {
     "name": "חזית המזרח (קושיבחה / זפוריז'יה)",
     "status": "פעיל מאוד עם תקיפות אוויריות קשות"
    },
    {
     "name": "חזית קוסטנטיניבקה-פוקרובסק",
     "status": "פעיל עם מאות היתקלויות יומיות"
    },
    {
     "name": "העורף האוקראיני (רשת החשמל והאנרגיה)",
     "status": "תחת מתקפה נרחבת והשבתות חירום"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11040111-01",
     "title": "תקיפה רוסית על מרכז סיוע הומניטרי",
     "summary": "כוחות רוסיים תקפו מבנה בית ספר שהוסב למרכז חלוקת סיוע הומניטרי, דבר שהוביל להרוגים רבים ולעשרות לכודים תחת ההריסות.",
     "axis": "תקיפות אוויריות ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T08:53:04+00:00",
     "last_update_at": "2026-11-04T01:08:17+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק והאנשים שעדיין קבורים מתחת להריסות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
       "published_at": "2026-11-04T01:08:17+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.ynet.co.il/news/article/rj7bh9wtzg",
       "published_at": "2026-11-03T18:36:21+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8061103/",
       "published_at": "2026-11-03T18:04:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.bbc.co.uk/news/articles/cjy56dndlyz0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-03T13:26:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.theguardian.com/world/2026/nov/03/russia-bombs-ukrainian-aid-centre-komyshuvakha",
       "published_at": "2026-11-03T12:25:07+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.theguardian.com/world/video/2026/nov/03/rubble-deadly-strike-ukrainian-aid-centre-video",
       "published_at": "2026-11-03T08:53:04+00:00"
      }
     ],
     "places": [
      {
       "name": "קומישובחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11040111-02",
     "title": "מתקפה נרחבת על תשתיות האנרגיה באוקראינה",
     "summary": "רוסיה שיגרה מאות טילים וכטב\"מים לעבר תשתיות האנרגיה של אוקראינה, ופגעה בתחנות כוח ומתחמים חיוניים ברחבי המדינה.",
     "axis": "תקיפות אוויריות ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T18:28:02+00:00",
     "last_update_at": "2026-11-04T01:08:17+00:00",
     "what_is_not_verified": "היקף הנזק המלא בכל תחנות הכוח והמשנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_volodymyr_zelenskyy_and_dtek",
       "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
       "published_at": "2026-11-04T01:08:17+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_volodymyr_zelenskyy_and_dtek",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8061119/",
       "published_at": "2026-11-03T19:21:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_volodymyr_zelenskyy_and_dtek",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8061116/",
       "published_at": "2026-11-03T18:47:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_volodymyr_zelenskyy_and_dtek",
       "url": "https://meduza.io/en/news/2026/11/03/russian-strikes-trigger-emergency-power-outages-in-several-ukrainian-regions-cutting-water-supply-across-kyiv",
       "published_at": "2026-11-03T18:28:02+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "ריבנה, אוקראינה",
       "lat": 50.6196,
       "lon": 26.2513
      }
     ]
    },
    {
     "id": "UKRAINE-11040111-03",
     "title": "פגיעת רצף כטב\"מים במרכז לוגיסטי בדרום רוסיה",
     "summary": "מרכז לוגיסטי של חברת הקמעונאות אוזון נפגע מכטב\"ם בדרום רוסיה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T00:42:38+00:00",
     "last_update_at": "2026-11-04T00:42:38+00:00",
     "what_is_not_verified": "זהות המשגר והיקף הנזק המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_6f54db7331e37087",
       "url": "https://kyivindependent.com/drone-strikes-warehouse-in-southern-russia-online-retailer-ozon-claims/",
       "published_at": "2026-11-04T00:42:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11040111-04",
     "title": "פרובוקציה מנועה בגבול קלינינגרד",
     "summary": "שלטונות פולין דיווחו כי סיכלו ניסיון פרובוקציה בגבול עם מחוז קלינינגרד הרוסי לאחר שאיתרו אנשים חשודים עם פנסים.",
     "axis": "גבול אירופה-רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T19:42:11+00:00",
     "last_update_at": "2026-11-03T19:42:11+00:00",
     "what_is_not_verified": "הכוונות המדויקות של האנשים שאותרו בגבול.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_42090d2746951317",
       "url": "https://meduza.io/en/news/2026/11/03/prime-minister-donald-tusk-says-poland-prevented-a-possible-provocation-on-the-border-with-russia-s-kaliningrad-exclave-after-spotting-people-with-flashlights",
       "published_at": "2026-11-03T19:42:11+00:00"
      }
     ],
     "places": [
      {
       "name": "ספופול, פולין",
       "lat": 54.2679,
       "lon": 21.0144
      }
     ]
    },
    {
     "id": "UKRAINE-11040111-05",
     "title": "מעצר חשודים בתיק הצתת תחנת סטארלינק בפולין",
     "summary": "התביעה בגרמניה עצרה חשוד טורקי נוסף הקשור לחקירת הצתת תחנת סטארלינק פולנית שהתרחשה בספטמבר.",
     "axis": "אירועים בעורף האירופי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-04T01:08:17+00:00",
     "last_update_at": "2026-11-04T01:08:17+00:00",
     "what_is_not_verified": "הקשר הישיר של הממשל הרוסי למעשה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_german_prosecutors",
       "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
       "published_at": "2026-11-04T01:08:17+00:00"
      }
     ],
     "places": [
      {
       "name": "רויטלינגן, גרמניה",
       "lat": 48.492,
       "lon": 9.2114
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על היקף הנפגעים המדויק מתחת להריסות בקושיבחה",
    "מספר הטילים והכטב\"מים המדויק שנותר פעיל בשמי אוקראינה",
    "כיווני הפעולה המדויקים של הפרובוקציות המתוכננות בגבול פולין-קלינינגרד"
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
     "value": 1.1179,
     "unit": "USD",
     "change_pct": -0.33,
     "source_id": "src_ecb",
     "as_of": "2026-11-03T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "השמדת תשתיות צבאיות ותשתיות תומכות"
     ],
     "inferred": [
      "שבירת העמידות האזרחית והכלכלית של אוקראינה לקראת החורף באמצעות פגיעה במערכות החשמל, המים והחימום",
      "יצירת לחץ על ההנהגה האוקראינית טרם חידוש שיחות השלום"
     ],
     "forecast": [
      "המשך גלי תקיפה מסיביים על מתקני אנרגיה ותשתיות חיוניות באוקראינה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונות המדינה והתנגדות לתוקפנות הרוסית",
      "השגת תמיכה בינלאומית והגנה אווירית מוגברת"
     ],
     "inferred": [
      "ניסיון לייצב את מערכות החשמל והמים הקורסות בערים המרכזיות",
      "גיוס לחץ דיפלומטי בינלאומי להטלת סנקציות נוספות על רוסיה"
     ],
     "forecast": [
      "היערכות לתנאי חורף קשים עקב הרס מערכות האנרגיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cjy56dndlyz0o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-04T01:11:13+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/04/ukraine-war-briefing-dozens-trapped-komyshuvakha-russian-strikes",
     "accessed_at": "2026-11-04T01:11:13+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/drone-strikes-warehouse-in-southern-russia-online-retailer-ozon-claims/",
     "accessed_at": "2026-11-04T01:11:13+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/03/prime-minister-donald-tusk-says-poland-prevented-a-possible-provocation-on-the-border-with-russia-s-kaliningrad-exclave-after-spotting-people-with-flashlights",
     "accessed_at": "2026-11-04T01:11:13+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8061116/",
     "accessed_at": "2026-11-04T01:11:13+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rj7bh9wtzg",
     "accessed_at": "2026-11-04T01:11:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-03T10:11:20+00:00",
  "changes": {
   "UKRAINE-11040111-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה רוסית על מרכז סיוע הומניטרי בקמישובוחה",
    "score": 1.0
   },
   "UKRAINE-11040111-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות רוסיות על תשתית האנרגיה באוקראינה",
    "score": 0.817
   },
   "UKRAINE-11040111-03": {
    "kind": "new"
   },
   "UKRAINE-11040111-04": {
    "kind": "new"
   },
   "UKRAINE-11040111-05": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-04T0114__north-202611040114.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-04T01:14:10+00:00",
   "window": {
    "from": "2026-11-03T01:14:10+00:00",
    "to": "2026-11-04T01:14:10+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611040114"
   },
   "summary": "הזירה הצפונית מאופיינת בפעילות צבאית נמשכת הכוללת תקיפות ארטילריות ואוויריות של צה\"ל בדרום לבנון, לצד טענות סוריות על סיכול פעילות חבלנית של חיזבאללה בתוך שטח סוריה שהוכחושות על ידי הארגון. במקביל, ישראל נערכת לאפשרות של עימות רחב יותר ומבצעת התאמות פריסה בגזרה הצפונית.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם תקיפות יומיות וחילופי מהלומות"
    },
    {
     "name": "החזית הסורית",
     "status": "מתיחות ביטחונית וטענות הדדיות על פעילות חתרנית"
    }
   ],
   "events": [
    {
     "id": "NORTH-11040114-01",
     "title": "ירי ארטילרי ישראלי באל-מנסורי",
     "summary": "כוחות הארטיליה של ישראל תקפו את העיירה אל-מנסורי שבדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T19:23:56+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T19:23:56+00:00",
     "last_update_at": "2026-11-03T19:23:56+00:00",
     "what_is_not_verified": "היקף הנזק המלא או נפגעים אינו מפורט מעבר לדיווח על עצם הירי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146487/",
       "published_at": "2026-11-03T19:23:56+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-11040114-02",
     "title": "פתיחת חקירה משפטית בצרפת בגין פשעי מלחמה",
     "summary": "בית המשפט בפריז מינה שני שופטים חוקרים בעקבות תלונה על פשעי מלחמה שהגיש אזרח צרפתי-לבנוני על תקיפה ישראלית בביירות בשנת 2024 שבה נהרגו הוריו.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T06:03:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T06:03:07+00:00",
     "last_update_at": "2026-11-03T18:40:36+00:00",
     "what_is_not_verified": "תוצאות החקירה המשפטית בצרפת טרם התבררו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_afp",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/french-judges-probe-war-crimes-complaint-against-israeli-army-lebanon",
       "published_at": "2026-11-03T18:40:36+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_afp",
       "url": "https://www.newarab.com/news/french-judges-probe-complaint-israeli-war-crimes-lebanon",
       "published_at": "2026-11-03T17:05:13+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_afp",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966145/french-judges-probe-war-crimes-complaint-against-israeli-army-in-leban/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966145",
       "published_at": "2026-11-03T06:03:07+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "פריז, צרפת",
       "lat": 48.8535,
       "lon": 2.3484
      }
     ]
    },
    {
     "id": "NORTH-11040114-03",
     "title": "סיכול לכאורה של תוכנית תקיפה נגד בית הזיקוק בחומס",
     "summary": "השלטונות בסוריה דיווחו כי עצרו חוליה הקשורה לחיזבאללה שתכננה לתקוף את בית הזיקוק לנפט בחומס.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T10:40:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T10:40:08+00:00",
     "last_update_at": "2026-11-03T18:38:10+00:00",
     "what_is_not_verified": "מספר העצורים המדויק וזהותם המדויקת אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-says-it-foiled-hezbollah-plot-attack-homs-oil-refinery",
       "published_at": "2026-11-03T18:38:10+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/966215/syria-says-it-foiled-hezbollah-plot-to-attack-homs-oil-refinery/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966215",
       "published_at": "2026-11-03T10:40:08+00:00"
      }
     ],
     "places": [
      {
       "name": "חומס, סוריה",
       "lat": 34.7333,
       "lon": 36.7167
      }
     ]
    },
    {
     "id": "NORTH-11040114-04",
     "title": "תקיפות אוויריות וארטילריות בנפת בינת ג'ביל",
     "summary": "כוחות ישראליים תקפו בארטילריה את פאתי העיירה עייתא אל-ג'יבל ופתחו בירי מקלעים לעבר הכניסה לקונין.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T16:00:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T16:00:48+00:00",
     "last_update_at": "2026-11-03T18:24:03+00:00",
     "what_is_not_verified": "פרטים מדויקים על נפגעים או נזק חומרי נוסף אינם ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strikes-hit-lebanons-bint-jbeil-district",
       "published_at": "2026-11-03T18:24:03+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146407/",
       "published_at": "2026-11-03T16:00:48+00:00"
      }
     ],
     "places": [
      {
       "name": "בינת ג'ביל, לבנון",
       "lat": 33.1195,
       "lon": 35.4328
      },
      {
       "name": "קונין, לבנון",
       "lat": 33.1479,
       "lon": 35.4314
      }
     ]
    },
    {
     "id": "NORTH-11040114-05",
     "title": "סיכום פעילות צק\"ח 7 בדרום לבנון",
     "summary": "צוות קרב חטיבתי 7 של צה\"ל השלים שמונה חודשי פעילות בדרום לבנון, הכוללים השמדת תשתיות וחיסול מחבלים.",
     "axis": "הזירה הצפונית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T10:02:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T10:02:16+00:00",
     "last_update_at": "2026-11-03T15:12:14+00:00",
     "what_is_not_verified": "הנתונים המדויקים על מספר החיסולים והתשתיות מבוססים על הודעות צבאיות ואינם ניתנים לאימות עצמאי מלא בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25537",
       "published_at": "2026-11-03T15:12:14+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25536",
       "published_at": "2026-11-03T10:02:16+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 39.371,
       "lon": -84.2128
      }
     ]
    },
    {
     "id": "NORTH-11040114-06",
     "title": "ירי ארטילרי באזור שבין מייפדון וזווטאר א-שרקייה",
     "summary": "כוחות הארטילריה של ישראל תקפו את האזור שבין מייפדון לזווטאר א-שרקייה בדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T12:52:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T12:52:31+00:00",
     "last_update_at": "2026-11-03T12:52:31+00:00",
     "what_is_not_verified": "היקף הנזק המדויק אינו מפורט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/146382/",
       "published_at": "2026-11-03T12:52:31+00:00"
      }
     ],
     "places": [
      {
       "name": "מייפדון, לבנון",
       "lat": 33.3485,
       "lon": 35.4772
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה הסורית לפיה חיזבאללה תכנן לתקוף את בית הזיקוק בחומס",
    "הערכות גורמי ביטחון ישראליים לגבי תקיפה קרבה באיראן והשלכותיה על הזירה הצפונית"
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
     "value": 3.157,
     "unit": "ILS",
     "change_pct": 0.56,
     "source_id": "src_ecb",
     "as_of": "2026-11-03T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "התמקדות בעימות מול האויב הישראלי",
      "הכחשת מעורבות בפעילות ביטחונית בשטח סוריה"
     ],
     "inferred": [
      "שימור יכולות צבאיות בדרום לבנון",
      "שמירה על השפעה אזורית למרות לחצים כלכליים ומדיניים"
     ],
     "forecast": [
      "המשך שמירה על רף עימות מבוקר מול ישראל",
      "דחיית דרישות לפירוק מנשק או צמצום פעילות"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים מצידו של חיזבאללה בגבול הצפון",
      "פגיעה בתשתיות טרור והרחקת כוחות עוינים מהגבול"
     ],
     "inferred": [
      "היערכות לאפשרות של הסלמה כוללת במספר זירות",
      "שמירה על חופש פעולה מבצעי בלבנון ובסוריה"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות נגד יעדי טרור",
      "שמירת כוננות גבוהה בפיתוח תשתיות הגנה והתקפה בצפון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/146382/",
     "accessed_at": "2026-11-04T01:14:10+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/966215/syria-says-it-foiled-hezbollah-plot-to-attack-homs-oil-refinery/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966215",
     "accessed_at": "2026-11-04T01:14:10+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strikes-hit-lebanons-bint-jbeil-district",
     "accessed_at": "2026-11-04T01:14:10+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-says-it-foiled-hezbollah-plot-attack-homs-oil-refinery",
     "accessed_at": "2026-11-04T01:14:10+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25536",
     "accessed_at": "2026-11-04T01:14:10+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-03T10:14:40+00:00",
  "changes": {
   "NORTH-11040114-01": {
    "kind": "new"
   },
   "NORTH-11040114-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "חקירת פשעי מלחמה בצרפת על תקיפה בלבנון",
    "score": 1.0
   },
   "NORTH-11040114-03": {
    "kind": "new"
   },
   "NORTH-11040114-04": {
    "kind": "new"
   },
   "NORTH-11040114-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "פעילות צק\"ח 7 בלבנון",
    "score": 1.0
   },
   "NORTH-11040114-06": {
    "kind": "new"
   }
  }
 }
};
