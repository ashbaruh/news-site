/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-25T2017__yemen-202611252017.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-25T20:17:20+00:00",
   "window": {
    "from": "2026-11-24T20:17:20+00:00",
    "to": "2026-11-25T20:17:20+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611252017"
   },
   "summary": "כוחות חות'יים מתקדמים לעבר אזורים סמוך לעיר עדן ומדביקים לחץ כבד על ממשלת תימן המוכרת, תוך כדי שהם משגרים כטב\"מים וטילים לעבר מתקני תשתיות ונמלים בסעודיה. במקביל, הקואליציה בהובלת סעודיה וכוחות הממשלה התימנית מגיבים בתקיפות אוויריות נרחבות בנמל חודידה ובאתרים נוספים בשליטת החות'ים.",
   "fronts": [
    {
     "name": "ציר תימן-סעודיה",
     "status": "פעיל הכולל תקיפות כטב\"מים וטילים של החות'ים לעבר מתקנים בסעודיה ותקיפות נגד של הקואליציה בתימן"
    },
    {
     "name": "החזית הפנימית בתימן (סביב עדן ותיז)",
     "status": "פעיל ודרוך עקב התקדמות החות'ים לעבר העיר עדן והמצור על תיז"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11252017-01",
     "title": "יירוט כטב\"ם סמוך לנמל ג'דה",
     "summary": "הקואליציה בהובלת סעודיה דיווחה כי יירו והשמידו כטב\"ם ששוגר על ידי החות'ים סמוך לנמל ג'דה.",
     "axis": "הזירה בתימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:44:59+00:00",
     "last_update_at": "2026-11-25T20:07:13+00:00",
     "what_is_not_verified": "נזק מדויק מעבר לנפילות שברי יירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_60e36c12aef3e838",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepts-houthi-drone-near-jeddah-islamic",
       "published_at": "2026-11-25T20:07:13+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_60e36c12aef3e838",
       "url": "https://www.maariv.co.il/breaking-news/article-1392317",
       "published_at": "2026-11-25T19:59:16+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7f473c5efc602399",
       "url": "https://www.sabanew.net/viewstory/156477",
       "published_at": "2026-11-25T19:44:59+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל ג'דה האיסלאמי, סעודיה",
       "lat": 21.4692,
       "lon": 39.168
      }
     ]
    },
    {
     "id": "YEMEN-11252017-02",
     "title": "מתקפת כטב\"מים וטילים על בית הזיקוק בראס תנורה",
     "summary": "החות'ים לקחו אחריות על תקיפת בית הזיקוק בראס תנורה בסעודיה, וציינו כי היא בוצעה בתגובה לתקיפות נגדם.",
     "axis": "הזירה בתימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T09:49:11+00:00",
     "last_update_at": "2026-11-25T17:32:16+00:00",
     "what_is_not_verified": "היקף הנזק המלא במתקן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-attacked-saudi-arabias-largest-oil-refinery-retaliation",
       "published_at": "2026-11-25T17:32:16+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-led-coalition-strikes-hodeidah-houthis-threaten-ports",
       "published_at": "2026-11-25T09:49:11+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס תנורה, סעודיה",
       "lat": 26.7074,
       "lon": 50.0674
      }
     ]
    },
    {
     "id": "YEMEN-11252017-03",
     "title": "נפילת קליבר בנמל ג'אזאן",
     "summary": "הקואליציה בהובלת סעודיה דיווחה כי קליבר ששוגר על ידי החות'ים פגע בנמל ג'אזאן וגרם לנזק קל.",
     "axis": "הזירה בתימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T17:00:03+00:00",
     "last_update_at": "2026-11-25T17:00:10+00:00",
     "what_is_not_verified": "סוג הקליבר המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4d9e3970f6f55b6e",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-fired-projectile-hits-saudi-arabias-jazan-port-coalition-says",
       "published_at": "2026-11-25T17:00:10+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_b059c411026b3f7c",
       "url": "https://www.sabanew.net/viewstory/156461",
       "published_at": "2026-11-25T17:00:03+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל ג'אזאן, סעודיה",
       "lat": 16.8907,
       "lon": 42.5374
      }
     ]
    },
    {
     "id": "YEMEN-11252017-04",
     "title": "תקיפות הקואליציה בנמל חודידה ובאזורים נוספים",
     "summary": "הקואליציה בהובלת סעודיה פתחה בתקיפות אוויריות נגד נמל חודידה ומחוזות נוספים בתימן בתגובה למתקפות החות'יות.",
     "axis": "הזירה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T02:28:29+00:00",
     "last_update_at": "2026-11-25T09:49:11+00:00",
     "what_is_not_verified": "מספר הנפגעים והנזקים המדויקים באזורים שהותקפו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-led-coalition-strikes-hodeidah-houthis-threaten-ports",
       "published_at": "2026-11-25T09:49:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49904",
       "published_at": "2026-11-25T02:28:29+00:00"
      }
     ],
     "places": [
      {
       "name": "חודידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11252017-05",
     "title": "דיווח כוחות ממשלת תימן על מאות תקיפות נגד החות'ים",
     "summary": "דובר צבא ממשלת תימן מסר כי הכוחות ביצעו מאות תקיפות שונות נגד עמדות החות'ים בשעות האחרונות.",
     "axis": "הזירה בתימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T17:24:51+00:00",
     "last_update_at": "2026-11-25T19:36:32+00:00",
     "what_is_not_verified": "אמתת הנתונים המספריים המדויקים של האבדות בצד החות'י",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_359708a40e76a395",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-report-more-650-strikes-houthis",
       "published_at": "2026-11-25T19:36:32+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_359708a40e76a395",
       "url": "https://www.sabanew.net/viewstory/156465",
       "published_at": "2026-11-25T17:24:51+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "{'string': 'מספר הנפגעים המדויק כתוצאה מהתקיפות ההדדיות בתימן ובסעודיה אינו מאומת במלואו.'}",
    "{'string': 'היקף הנזק המלא בבתי הזיקוק בראס תנורה אינו מאומת ממקור נייטרלי.'}"
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
     "value": 3.3789,
     "unit": "ILS",
     "change_pct": 1.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "להגיב על תקיפות הקואליציה והפגיעה באזרחים בתימן",
      "לפגוע במתקנים אסטרטגיים ונמלים בסעודיה"
     ],
     "inferred": [
      "להפעיל לחץ צבאי ואסטרטגי על הממשלה התימנית המוכרת ובעלות בריתה",
      "להתקדם ולכתר את אזור עדן"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה לעבר עומק סעודיה והמרחב הימי",
      "הגברת הלחץ הקרקעי בסביבת עדן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "להגן על התשתיות האזרחיות והכלכליות של סעודיה",
      "לבלום את התקדמות החות'ים ולשמור על מוקדי השלטון"
     ],
     "inferred": [
      "לפגוע ביכולות הצבאיות של החות'ים באמצעות תקיפות אוויריות בנמלים כמו חודידה",
      "למצוא מערכות הגנה נוספות ליירוט איומים אוויריים"
     ],
     "forecast": [
      "המשך התקיפות האוויריות על יעדים חות'יים בתימן",
      "חיפוש תגבורת הגנתית מבעלות ברית בינלאומיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1392317",
     "accessed_at": "2026-11-25T20:17:20+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-report-more-650-strikes-houthis",
     "accessed_at": "2026-11-25T20:17:20+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-led-coalition-strikes-hodeidah-houthis-threaten-ports",
     "accessed_at": "2026-11-25T20:17:20+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156465",
     "accessed_at": "2026-11-25T20:17:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49904",
     "accessed_at": "2026-11-25T20:17:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T00:41:35+00:00",
  "changes": {
   "YEMEN-11252017-01": {
    "kind": "new"
   },
   "YEMEN-11252017-02": {
    "kind": "new"
   },
   "YEMEN-11252017-03": {
    "kind": "new"
   },
   "YEMEN-11252017-04": {
    "kind": "possible",
    "prev": "דרישת פינוי נמל אל-חודיידה",
    "score": 0.633
   },
   "YEMEN-11252017-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "דיווח על תקיפות נגד החות'ים מאת כוחות ממשלת תימן",
    "score": 0.65
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-26T0040__iran-202611260040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-26T00:40:34+00:00",
   "window": {
    "from": "2026-11-25T00:40:34+00:00",
    "to": "2026-11-26T00:40:34+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611260040"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בהסלמה צבאית רב-זירתית הכוללת מצור ימי במצר הורמוז וחילופי מהלומות כבדים בין החות'ים לקואליציה בהובלת סעודיה. במקביל, המיליציות הפרו-איראניות בעיראק מתבצרות מחדש לקראת חידוש הלחימה, וטהראן מאיצה בניית מתקן תת-קרקעי מבוצר בסמוך לאתרי הגרעין המרכזיים שלה. הצדדים מחזיקים בעמדות נוקשות סביב המצור הכלכלי וההסכמים העתידיים לקראת שינויים פוליטיים ומדיניים צפויים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "מתיחות סביב מצור ימי, תקריות פגיעה במכליות ואיומים הדדיים"
    },
    {
     "name": "חצי האי ערב והמפרץ (שלוחות איראן מול סעודיה)",
     "status": "חילופי אש נרחבים הכוללים שיגור טילים וכטב\"מים לעבר מתקני נפט ונמלים סעודיים ותקיפות קואליציה"
    },
    {
     "name": "עיראק",
     "status": "היערכות צבאית של המיליציות הפרו-איראניות וסירוב לפירוק נשק"
    },
    {
     "name": "החזית הישירה איראן מול ישראל וארה\"ב",
     "status": "בניית מתקנים מבוצרים באיראן, דריכות ביטחונית גבוהה ואיומים בהתקפות נגד"
    }
   ],
   "events": [
    {
     "id": "IRAN-11260040-01",
     "title": "היערכות גדודי חזבאללה בעיראק לעימות צבאי מחודש",
     "summary": "המיליציה הפרו-איראנית העבירה ציוד צבאי והקימה עמדות חדשות במערב עיראק כהיערכות לאפשרות של עימות בין ארצות הברית לאיראן, תוך שמירה על מעוזיה בניגוד להוראת הממשלה.",
     "axis": "עיראק מול ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:22:53+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T00:22:53+00:00",
     "last_update_at": "2026-11-26T00:22:53+00:00",
     "what_is_not_verified": "היקף הציוד והמיקומים המדויקים מבוססים על דיווחי תקשורת ומכוני מחקר ולא אומתו רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611265119",
       "published_at": "2026-11-26T00:22:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-02",
     "title": "תקיפות ויירוטי טילים ורחפנים בסעודיה ובתימן",
     "summary": "פיצוצים נשמעו בריאד ויירוטים בוצעו מעל העיר, במקביל לתקיפה על נמלי ג'דה וג'זאן ותקיפת בית הזיקוק בראס תנורה על ידי החות'ים, כאשר הקואליציה פגעה בחודיידה ובצנעא.",
     "axis": "שלוחות איראן (חות'ים) מול סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T16:59:05+00:00",
     "last_update_at": "2026-11-26T00:00:00+00:00",
     "what_is_not_verified": "מידת הנזק בפועל בנמלים ובמתקני הנפט שנויה במחלוקת בין טענות החות'ים לדיווח הסעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/26/iran-war-live-explosion-rocks-sanaa-missiles-intercepted-over-riyadh?traffic_source=rss",
       "published_at": "2026-11-26T00:00:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/houthis-say-hit-two-saudi-ports-response-coalition-strikes",
       "published_at": "2026-11-25T22:30:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/loud-booms-rock-riyadh-houthis-attack-saudi-ports",
       "published_at": "2026-11-25T21:42:56+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepts-houthi-drone-near-jeddah-islamic",
       "published_at": "2026-11-25T20:07:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/yemen-houthis-claim-saudi-arabia-ras-tanura-attack-retaliation-deadly-strikes",
       "published_at": "2026-11-25T16:59:05+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'דה, סעודיה",
       "lat": 21.5504,
       "lon": 39.1742
      },
      {
       "name": "ג'זאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      }
     ]
    },
    {
     "id": "IRAN-11260040-03",
     "title": "איומי איראן על רקע המצור הימי האמריקני",
     "summary": "איראן החריפה את אזהרותיה כלפי ארצות הברית, ישראל ומדינות המפרץ, איימה בהפעלת יכולות צבאיות חדשות ודרשה פיצויים על סיוע לתקיפות נגדה.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:08:50+00:00",
     "last_update_at": "2026-11-25T19:08:50+00:00",
     "what_is_not_verified": "מהות היכולות הצבאיות החדשות שבהן איימה טהראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611254651",
       "published_at": "2026-11-25T19:08:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-04",
     "title": "חשיפת הקמת מתקן תת-קרקעי מבוצר באיראן",
     "summary": "תצלומי לוויין חשפו מתחם תת-קרקעי הנבנה בתוך הר באזור שבין נתנז לאיספהאן בקצב מואץ, המוערך כבעל ייעוד צבאי או גרעיני.",
     "axis": "גרעין וביטחון באיראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T17:55:08+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T17:55:08+00:00",
     "last_update_at": "2026-11-25T18:58:46+00:00",
     "what_is_not_verified": "ייעודו המדויק של המתקן (האם הוא מיועד לנשק גרעיני או למערכות טילים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21933606",
       "published_at": "2026-11-25T18:58:46+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkcfuq4yql",
       "published_at": "2026-11-25T17:55:08+00:00"
      }
     ],
     "places": [
      {
       "name": "נתנז, איראן",
       "lat": 33.5071,
       "lon": 51.9136
      },
      {
       "name": "איספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    },
    {
     "id": "IRAN-11260040-05",
     "title": "איום של בכיר בפרלמנט האיראני נגד ארה\"ב",
     "summary": "סגן יושב ראש ועדת הביטחון הלאומי בפרלמנט של איראן איים בפגיעה בבית הלבן במקרה של תקיפה נגד הר המכוש.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T17:58:56+00:00",
     "last_update_at": "2026-11-25T17:58:56+00:00",
     "what_is_not_verified": "היכולת המעשית של טהראן לממש את האיום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134234",
       "published_at": "2026-11-25T17:58:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-06",
     "title": "תקרית ימית ופגיעה במכליות באזור מצר הורמוז",
     "summary": "חיל הים האיראני דיווח שמכלית עלתה על מוקש ימי ממזרח למצר הורמוז ועלתה באש, בעוד דיווחים אחרים ייחסו פגיעה במכלית איראנית לתקיפה באזור המצר.",
     "axis": "המצור הימי ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T16:16:00+00:00",
     "last_update_at": "2026-11-25T16:31:04+00:00",
     "what_is_not_verified": "האם כלי השיט נפגע ממוקש כטענת איראן או מתקיפה צבאית יזומה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_7593e40b89e8ac23",
       "url": "https://t.me/lelotsenzura/95140",
       "published_at": "2026-11-25T16:31:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_7593e40b89e8ac23",
       "url": "https://en.irna.ir/news/86332672/Violating-tanker-catches-fire-after-striking-mine-east-of-Hormuz",
       "published_at": "2026-11-25T16:16:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-07",
     "title": "הצהרת נשיא ארה\"ב על מטרות המערכה והמצור על איראן",
     "summary": "הנשיא טראמפ הצהיר כי מטרתו המרכזית היא מניעת נשק גרעיני מאיראן באמצעות המשך המצור הכלכלי, וציין כי המימון לפעולה מובטח עד ינואר.",
     "axis": "ארה\"ב מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T08:28:54+00:00",
     "last_update_at": "2026-11-25T08:28:54+00:00",
     "what_is_not_verified": "משך תוקף המימון האמריקני לפעילות המבצעית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134199",
       "published_at": "2026-11-25T08:28:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11260040-08",
     "title": "שינוי מבני במנגנון המודיעין האיראני",
     "summary": "המנהיג העליון של איראן מקדם שינוי מבני במשרד המודיעין להגברת כפיפותו הישירה ולחיזוק הפיקוח הפנימי לאחר סיכול בכירים ופגיעות מודיעיניות.",
     "axis": "מודיעין וביטחון פנים באיראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T02:51:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T02:51:00+00:00",
     "last_update_at": "2026-11-25T02:51:00+00:00",
     "what_is_not_verified": "זהות המועמד הסופי שייבחר לעמוד בראש המשרד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_fdd",
       "url": "https://www.fdd.org/analysis/iran-moves-to-restructure-intelligence-ministry-as-5-contenders-emerge-to-lead-it/",
       "published_at": "2026-11-25T02:51:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "ייעודו המדויק של המתקן התת-קרקעי החדש בין איספהאן לנתנז (צבאי קונבנציונלי או גרעיני)",
    "הסיבה המדויקת לפגיעה במכלית במצר הורמוז - פיצוץ מוקש ימי או תקיפת כטב\"ם/פעולה יזומה",
    "מידת הנזק המדויקת בבתי הזיקוק בראס תנורה ובנמלים בסעודיה בעקבות תקיפות החות'ים",
    "דיווחים על הסכם סודי בין מנהיגי ארה\"ב, רוסיה וסין בנוגע לאיראן"
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
     "value": 3.3789,
     "unit": "ILS",
     "change_pct": 1.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן ושלוחותיה",
     "declared": [
      "תגובה ותקיפת יעדים סעודיים ונמלים בים האדום בתגובה לתקיפות נגד תימן",
      "דרישת פיצויים ממדינות האזור המאפשרות תקיפות נגד איראן",
      "התנגדות מלאה לפירוק נשק של המיליציות והשלוחות בעיראק ובלבנון"
     ],
     "inferred": [
      "שמירה על מרחב תמרון גרעיני וצבאי באמצעות העברת תשתיות לעומק תת-קרקעי מבוצר",
      "הפעלת לחץ כלכלי ואנרגטי על מדינות המפרץ כדי לפגוע בלכידות הקואליציה האמריקנית"
     ],
     "forecast": [
      "המשך ביצור מתקני הגרעין והטילים למניעת פגיעה מתקיפות אוויריות אפשריות",
      "החרפת התקיפות באמצעות מיליציות ככל שיימשך המצור הכלכלי והימי"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני בידי המשטר האיראני",
      "המשך הטלת מצור על איראן כדי לאלץ אותה לחתום על הסכם גרעין"
     ],
     "inferred": [
      "הימנעות מקריאה ישירה להפלת המשטר תוך התמקדות בבלימת היכולות הגרעיניות והכלכליות",
      "שימור התיאום הביטחוני וההגנתי עם מדינות המפרץ ובראשן סעודיה"
     ],
     "forecast": [
      "המשך אכיפת המצור הכלכלי והימי לפחות עד תחילת השנה האזרחית החדשה",
      "הגברת הלחץ הדיפלומטי והצבאי למניעת התקדמות של טהראן במתקנים החדשים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "המשך פעולות לסיכול התעצמות והברחות אמצעי לחימה של שלוחות איראן באזור"
     ],
     "inferred": [
      "שאיפה לפגיעה מהותית ביציבות המשטר האיראני ובתוכנית הגרעין שלו",
      "היערכות לפעולה צבאית נרחבת משותפת או עצמאית נגד מתקני הגרעין באיראן"
     ],
     "forecast": [
      "שמירה על רמת כוננות גבוהה מפני תקיפות תגובה איראניות",
      "המשך סיכול מטרות שלוחות איראן לאורך הגבולות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/26/iran-war-live-explosion-rocks-sanaa-missiles-intercepted-over-riyadh?traffic_source=rss",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/houthis-say-hit-two-saudi-ports-response-coalition-strikes",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/iran-moves-to-restructure-intelligence-ministry-as-5-contenders-emerge-to-lead-it/",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611254651",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86332672/Violating-tanker-catches-fire-after-striking-mine-east-of-Hormuz",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21933606",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/yemen-houthis-claim-saudi-arabia-ras-tanura-attack-retaliation-deadly-strikes",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134199",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95140",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkcfuq4yql",
     "accessed_at": "2026-11-26T00:40:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T00:40:20+00:00",
  "changes": {
   "IRAN-11260040-01": {
    "kind": "new"
   },
   "IRAN-11260040-02": {
    "kind": "new"
   },
   "IRAN-11260040-03": {
    "kind": "new"
   },
   "IRAN-11260040-04": {
    "kind": "new"
   },
   "IRAN-11260040-05": {
    "kind": "new"
   },
   "IRAN-11260040-06": {
    "kind": "new"
   },
   "IRAN-11260040-07": {
    "kind": "new"
   },
   "IRAN-11260040-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-25T0040__ukraine-202611250040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-25T00:40:57+00:00",
   "window": {
    "from": "2026-11-24T00:40:57+00:00",
    "to": "2026-11-25T00:40:57+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611250040"
   },
   "summary": "המלחמה בין רוסיה ואוקראינה נמשכת תוך שילוב של תקיפות אוויריות וימיות ממוקדות מצד אוקראינה נגד תשתיות ויעדים רוסיים, לצד הפצצות בלתי פוסקות של כוחות רוסיה על מרכזים אזרחיים ואנרגיה באוקראינה. במקביל, מתנהל מאבק דיפלומטי והסברתי רחב הכולל הפעלת לוחמה פסיכולוגית, לחץ סנקציות עתידי ומאמצי גיוס סיוע בינלאומי.",
   "fronts": [
    {
     "name": "חזית האוויר והאנרגיה באוקראינה",
     "status": "פעיל מאוד עם תקיפות הדדיות על תשתיות אנרגיה ועורף אזרחי"
    },
    {
     "name": "החזית הימית (כולל הים התיכון/לוב)",
     "status": "פעיל עם פעילות מל\"טים ימיים אוקראיניים נגד נכסים רוסיים מרוחקים"
    },
    {
     "name": "הזירה הדיפלומטית והבינלאומית",
     "status": "פעיל סביב דיונים על הצטרפות לאיחוד האירופי, סיוע צבאי וסנקציות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11250040-01",
     "title": "תקיפות רוסיות באזור אודסה",
     "summary": "כוחות רוסיים תקפו את מחוז אודסה וגרמו להרג של שני בני אדם, כולל קטין, ולפציעת בני אדם נוספים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T19:52:00+00:00",
     "last_update_at": "2026-11-24T23:08:00+00:00",
     "what_is_not_verified": "פרטים מדויקים על כלל ההיקף של הנזק שטרם אומתו ממקורות בלתי תלויים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_c7ce6817f7456d90",
       "url": "https://kyivindependent.com/russian-attacks-kill-2-in-odesa-oblast-including-child-injure-more-in-kyiv/",
       "published_at": "2026-11-24T23:08:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_c7ce6817f7456d90",
       "url": "https://www.ukrinform.net/rubric-ato/4188254-russian-strikes-on-odesa-region-kill-two-including-17yearold-boy-injure-three.html",
       "published_at": "2026-11-24T20:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_c7ce6817f7456d90",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064502/",
       "published_at": "2026-11-24T19:52:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11250040-02",
     "title": "פגיעה בקייב מרסיסי מל\"ט",
     "summary": "רסיסי מל\"ט רוסי נפלו על בניין מגורים רב-קומות בקייב וגרמו לשריפה ולפצועים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T21:57:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T21:57:00+00:00",
     "last_update_at": "2026-11-24T23:08:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא בבניין הדירות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russian-attacks-kill-2-in-odesa-oblast-including-child-injure-more-in-kyiv/",
       "published_at": "2026-11-24T23:08:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_kyiv_independent",
       "url": "https://www.ukrinform.net/rubric-ato/4188265-debris-from-russian-drone-causes-fire-in-16story-residential-building-in-kyiv.html",
       "published_at": "2026-11-24T21:57:00+00:00"
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
     "id": "UKRAINE-11250040-03",
     "title": "מעצר חשוד בריגול בקרמטורסק",
     "summary": "שירות הביטחון של אוקראינה עצר איש צבא לשעבר שערק וסייע לכוחות רוסיה להכוונת תקיפות בקרמטורסק.",
     "axis": "חזית פנים וביטחון שוטף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T22:42:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T22:42:00+00:00",
     "last_update_at": "2026-11-24T22:42:00+00:00",
     "what_is_not_verified": "הודאת החשוד בבית המשפט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_3b4596444aa4021d",
       "url": "https://www.ukrinform.net/rubric-crime/4187892-ssu-arrests-suspected-russian-agent-posing-as-volunteer-to-direct-strikes-on-kramatorsk.html",
       "published_at": "2026-11-24T22:42:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קרמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-11250040-04",
     "title": "תקיפות רחפנים בחרקוב",
     "summary": "רחפנים רוסיים פגעו בערים מרפה ולוזובה במחוז חרקוב וגרמו לפציעת מספר בני אדם.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T21:17:00+00:00",
     "last_update_at": "2026-11-24T21:17:00+00:00",
     "what_is_not_verified": "חומרת מצבם הרפואי המלא של כלל הפצועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4188257-russian-drones-strike-merefa-lozova-in-kharkiv-region-six-injured.html",
       "published_at": "2026-11-24T21:17:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מרפה, אוקראינה",
       "lat": 49.8183,
       "lon": 36.0629
      },
      {
       "name": "לוזובה, אוקראינה",
       "lat": 48.8842,
       "lon": 36.316
      }
     ]
    },
    {
     "id": "UKRAINE-11250040-05",
     "title": "הריגת אזרח בתקיפת רחפן בסומי",
     "summary": "רחפן רוסי פגע ברכב אזרחי בעיר סומי והרג אדם אחד.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T18:42:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T18:42:00+00:00",
     "last_update_at": "2026-11-24T18:42:00+00:00",
     "what_is_not_verified": "פרטים נוספים על נסיבות ההפעלה של הרחפן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_96abd9f5056dd9c3",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064493/",
       "published_at": "2026-11-24T18:42:00+00:00"
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
     "id": "UKRAINE-11250040-06",
     "title": "פגיעה ברכב חיל הים הרוסי בלוב",
     "summary": "אוקראינה ביצעה תקיפת מל\"טים ימיים נגד כלי שיט רוסיים בנמל בנופזי בלוב.",
     "axis": "זירות ימיות ומרוחקות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T01:08:35+00:00",
     "last_update_at": "2026-11-24T16:24:49+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לכלי השיט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian_ukraine_confirmation",
       "url": "https://www.theguardian.com/world/live/2026/nov/24/russia-ukraine-poland-drone-patriots-latest-news-updates",
       "published_at": "2026-11-24T16:24:49+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian_ukraine_confirmation",
       "url": "https://www.theguardian.com/commentisfree/2026/nov/24/ukraine-russia-war-escalating-global-europe-trump",
       "published_at": "2026-11-24T08:00:10+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian_ukraine_confirmation",
       "url": "https://www.theguardian.com/world/2026/nov/24/ukraine-war-briefing-kyiv-strike-on-russian-ships-in-benghazi-condemned-by-un-backed-libya-government",
       "published_at": "2026-11-24T01:08:35+00:00"
      }
     ],
     "places": [
      {
       "name": "בנופזי, לוב",
       "lat": 32.12,
       "lon": 20.0812
      }
     ]
    },
    {
     "id": "UKRAINE-11250040-07",
     "title": "פגישה בין זלנסקי לראש ממשלת הונגריה באוז'ורהוד",
     "summary": "נשיא אוקראינה נפגש עם ראש ממשלת הונגריה באוז'ורהוד לדיון בנושאי אנרגיה, מסחר ותמיכה הומניטרית.",
     "axis": "דיפלומטיה וסיוע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T19:01:00+00:00",
     "last_update_at": "2026-11-24T21:37:00+00:00",
     "what_is_not_verified": "יישום בפועל של ההבנות שהושגו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_befe5b91e4753b64",
       "url": "https://www.ukrinform.net/rubric-polytics/4188264-zelensky-presents-magyar-with-1942-newspapers-mentioning-his-greatgrandfather-who-worked-in-mukachevo.html",
       "published_at": "2026-11-24T21:37:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_befe5b91e4753b64",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064497/",
       "published_at": "2026-11-24T19:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אוז'ורהוד, אוקראינה",
       "lat": 48.6224,
       "lon": 22.3023
      }
     ]
    },
    {
     "id": "UKRAINE-11250040-08",
     "title": "מעצר מושל מורמנסק אנדריי צ'יביס במוסקבה",
     "summary": "רשויות האכיפה ברוסיה עצרו את מושל מורמנסק בחשד למעילה והונאה.",
     "axis": "חזית פנים וביטחון שוטף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T17:39:48+00:00",
     "last_update_at": "2026-11-24T17:39:48+00:00",
     "what_is_not_verified": "תוצאות ההליך המשפטי נגדו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_meduza_report",
       "url": "https://meduza.io/en/feature/2026/11/24/andrey-chibis-spent-seven-years-consolidating-power-in-russia-s-arctic-murmansk-region-now-the-kremlin-loyalist-is-in-police-custody-on-charges-of-funneling-public-money-abroad",
       "published_at": "2026-11-24T17:39:48+00:00"
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
    "מספר אבדות מדויק של חיילי רוסיה המבוסס על נתוני הדלפות רשמיות",
    "טענות רוסיות על פעילות חבלה מצד אוקראינה או נאט\"ו באירופה",
    "ההיקף המלא של תוכניות רוסיה למתקפות סייבר ופגיעה בחברות זרות"
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
     "value": 1.0963,
     "unit": "USD",
     "change_pct": 0.22,
     "source_id": "src_ecb",
     "as_of": "2026-11-24T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "עצירת הפלישה הרוסית ושחרור כל השטחים",
      "המשך קבלת סיוע צבאי וכלכלי מהמערב וקידום חברות באיחוד האירופי"
     ],
     "inferred": [
      "פגיעה בתשתיות עורף ואנרגיה רוסיות כדי לאלץ את רוסיה לשאת ולתת",
      "הרחבת מנופי הלחץ הבינלאומיים והימיים גם מחוץ לגבולות אוקראינה"
     ],
     "forecast": [
      "דרישה להגברת הסנקציות אם ארצות הברית לא תצליח להביא להסכם שלום לשביעות רצונם",
      "המשך תקיפות נגד נכסים צבאיים וימיים רוסיים גם בזירות מרוחקות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המבצע הצבאי והשגת מטרות ההשתלטות",
      "מניעת תמיכה מערבית באוקראינה וסיכול מתקפות על מתקני אנרגיה רוסיים"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והפיזיות של אוקראינה באמצעות מתקפות שיטתיות על האנרגיה",
      "הסתרת היקף האבדות הכבד בקרב חייליה מפני דעת הקהל בבית"
     ],
     "forecast": [
      "המשך הלחץ על העורף האוקראיני באמצעות תקיפות אוויריות במהלך החורף",
      "הגברת פעילות ההיברידית והמודיעינית מול מדינות המערב המסייעות לאוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/24/ukraine-war-briefing-kyiv-strike-on-russian-ships-in-benghazi-condemned-by-un-backed-libya-government",
     "accessed_at": "2026-11-25T00:40:57+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-attacks-kill-2-in-odesa-oblast-including-child-injure-more-in-kyiv/",
     "accessed_at": "2026-11-25T00:40:57+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/11/24/andrey-chibis-spent-seven-years-consolidating-power-in-russia-s-arctic-murmansk-region-now-the-kremlin-loyalist-is-in-police-custody-on-charges-of-funneling-public-money-abroad",
     "accessed_at": "2026-11-25T00:40:57+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064497/",
     "accessed_at": "2026-11-25T00:40:57+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4188264-zelensky-presents-magyar-with-1942-newspapers-mentioning-his-greatgrandfather-who-worked-in-mukachevo.html",
     "accessed_at": "2026-11-25T00:40:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-24T11:40:30+00:00",
  "changes": {
   "UKRAINE-11250040-01": {
    "kind": "new"
   },
   "UKRAINE-11250040-02": {
    "kind": "new"
   },
   "UKRAINE-11250040-03": {
    "kind": "new"
   },
   "UKRAINE-11250040-04": {
    "kind": "new"
   },
   "UKRAINE-11250040-05": {
    "kind": "new"
   },
   "UKRAINE-11250040-06": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפת כטב\"ם אוקראיני על ספינה רוסית בלוב",
    "score": 1.0
   },
   "UKRAINE-11250040-07": {
    "kind": "new"
   },
   "UKRAINE-11250040-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-26T0043__north-202611260043.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-26T00:43:13+00:00",
   "window": {
    "from": "2026-11-25T00:43:13+00:00",
    "to": "2026-11-26T00:43:13+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611260043"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחץ פנימי וחיצוני גובר על חזבאללה בלבנון, לצד הידוק הברית המדינית-ביטחונית בין המשטר החדש בסוריה לבין טורקיה אל מול ישראל. במקביל, ישראל ממשיכה בפעילות סיכול הברחות נשק מסוריה ובפשיטות נקודתיות בדרום סוריה, בעוד סוריה סובלת מחוסר יציבות פנימי ומתקיפות של ארגון דאעש. בתוך לבנון מחריף העימות בין השלטונות לחזבאללה על רקע מעצר פעילי הארגון ודרישות לפירוקו מנשקו.",
   "fronts": [
    {
     "name": "דרום לבנון וגבול ישראל-לבנון",
     "status": "מתיחות צבאית, המשך סיכול הברחות אמל\"ח והיערכות לסיום מנדט יוניפי\"ל"
    },
    {
     "name": "פנים לבנון (ממשל מול חזבאללה)",
     "status": "חיכוך פוליטי ומשפטי סביב מעצר חוליות חמושות ודרישות לפירוק נשק הארגון"
    },
    {
     "name": "דרום סוריה וגבול ישראל-סוריה",
     "status": "פשיטות קרקעיות ישראליות מוגבלות וחשש מעימות אזורי סביב חימוש קבוצות מקומיות"
    },
    {
     "name": "צפון ומזרח סוריה",
     "status": "התקפות טרור של דאעש וסיכוני מוקשים נגד כוחות הביטחון ואזרחים"
    },
    {
     "name": "ציר אנקרה-דמשק",
     "status": "התקרבות אסטרטגית והקמת ועדה עליונה משותפת מול מהלכי ישראל"
    }
   ],
   "events": [
    {
     "id": "NORTH-11260043-01",
     "title": "מתקפת דאעש על מפקדת ביטחון בחסכה",
     "summary": "פיגוע שכלל אופנוע תופת וארבעה מחבלים, אשר שניים מהם פוצצו את עצמם, גרם למותם של שני אנשי כוחות ביטחון פנים ולפציעת חמישה נוספים בסמוך למפקדה בשכונת אל-מושירפה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T20:40:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T20:40:27+00:00",
     "last_update_at": "2026-11-25T23:46:48+00:00",
     "what_is_not_verified": "זהות המפקדה המדויקת והאם היו נפגעים נוספים מקרב התוקפים מלבד שני המתאבדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21934723",
       "published_at": "2026-11-25T23:46:48+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/isis-attack-on-military-headquarters-kills-2-in-northeastern-syria-official-says/4138076",
       "published_at": "2026-11-25T20:47:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/155167/",
       "published_at": "2026-11-25T20:40:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11260043-02",
     "title": "הרוגים בהתפוצצות מוקש בצפון סוריה",
     "summary": "שלושה בני אדם, בהם נער ושני גברים בשנות השישים לחייהם, נהרגו ושניים נוספים נפצעו כתוצאה מפיצוץ מוקש באזור כפרי.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T19:30:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:30:38+00:00",
     "last_update_at": "2026-11-25T19:30:38+00:00",
     "what_is_not_verified": "זהות מניחי המוקש והנסיבות המדויקות של הפיצוץ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/3-killed-including-teenage-boy-2-injured-in-landmine-explosion-in-northern-syria/4137955",
       "published_at": "2026-11-25T19:30:38+00:00"
      }
     ],
     "places": [
      {
       "name": "א-רקה, סוריה",
       "lat": 35.9497,
       "lon": 39.0089
      }
     ]
    },
    {
     "id": "NORTH-11260043-03",
     "title": "פשיטה של צה\"ל ושחרור אזרח באזור קוניטרה",
     "summary": "כוח צבאי ישראלי שכלל עשרה כלי רכב פשט על עיירה וכפר סמוך, ביצע חיפושים בבתים, עיכב אזרח לחקירה ושחרר אותו למחרת בבוקר.",
     "axis": "ישראל-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T18:30:59+00:00",
     "last_update_at": "2026-11-25T18:30:59+00:00",
     "what_is_not_verified": "סיבת העיכוב והמקום המדויק שבו הוחזק האזרח טרם שחרורו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/israel-releases-syrian-man-detained-during-quneitra-incursion/",
       "published_at": "2026-11-25T18:30:59+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ובאתא אל-חשב, סוריה",
       "lat": 33.2258,
       "lon": 35.8341
      },
      {
       "name": "עין אל-בידא, סוריה",
       "lat": 35.7704,
       "lon": 36.1549
      }
     ]
    },
    {
     "id": "NORTH-11260043-04",
     "title": "הידוק שיתוף הפעולה בין סוריה לטורקיה והאשמות נגד ישראל",
     "summary": "גורמי ביטחון בישראל עוקבים אחר התקרבות אסטרטגית והקמת ועדה עליונה משותפת בין הנשיאים ארדואן וא-שרע, בעוד שר החוץ הטורקי מאשים את ישראל בחימוש גורמים דרוזים ובהכנת תקיפה בדרום סוריה.",
     "axis": "סוריה-טורקיה-ישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T19:21:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T19:21:26+00:00",
     "last_update_at": "2026-11-25T19:21:26+00:00",
     "what_is_not_verified": "האם אכן מועבר נשק ישראלי לקבוצות דרוזיות בדרום סוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963155",
       "published_at": "2026-11-25T19:21:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11260043-05",
     "title": "מעצר חוליית חזבאללה בצפון לבנון ואיומי הנהגת הארגון",
     "summary": "שופט בלבנון הוציא צווי מעצר נגד חמישה פעילי חזבאללה שנתפסו עם מפות ומסמכים בחשד להקמת חוליה חמושה, והורה לחקור שלושה נוספים; מנהיג הארגון נעים קאסם דרש את שחרורם והזהיר מפני פגיעה בשלום האזרחי.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T17:52:29+00:00",
     "last_update_at": "2026-11-25T21:12:43+00:00",
     "what_is_not_verified": "היקף התוכניות המבצעיות של החוליה שנעצרה בצפון לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_424d8b22b343bf60",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-demands-release-five-detained-members",
       "published_at": "2026-11-25T21:12:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_424d8b22b343bf60",
       "url": "https://www.newarab.com/news/lebanon-judge-issues-warrants-detained-hezbollah-members",
       "published_at": "2026-11-25T20:40:58+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_424d8b22b343bf60",
       "url": "https://english.almanar.com.lb/article/155132/",
       "published_at": "2026-11-25T18:30:58+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_7579e57c679cc511",
       "url": "https://english.almanar.com.lb/article/155122/",
       "published_at": "2026-11-25T17:52:29+00:00"
      }
     ],
     "places": [
      {
       "name": "בתרון, לבנון",
       "lat": 34.2549,
       "lon": 35.6589
      },
      {
       "name": "בשארי, לבנון",
       "lat": 34.2507,
       "lon": 36.01
      }
     ]
    },
    {
     "id": "NORTH-11260043-06",
     "title": "הצהרת שר הביטחון על סיכול הברחות נשק והרס תשתיות בדרום לבנון",
     "summary": "שר הביטחון הישראלי הצהיר כי חיל האוויר סיכל ניסיונות להברחת אמצעי לחימה מסוריה ללבנון, כולל תקיפה בנבי שית, וציין כי צה\"ל השמיד כ-23,000 מבנים ותשתיות טרור בעשרות כפרים בדרום לבנון.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T09:46:32+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-25T09:46:32+00:00",
     "last_update_at": "2026-11-25T09:46:32+00:00",
     "what_is_not_verified": "האימות העצמאי של מספר המבנים המדויק שנהרסו בדרום לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963018",
       "published_at": "2026-11-25T09:46:32+00:00"
      }
     ],
     "places": [
      {
       "name": "נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      }
     ]
    },
    {
     "id": "NORTH-11260043-07",
     "title": "שיחות דיפלומטיות בביירות על עתיד הביטחון בדרום לבנון",
     "summary": "שר החוץ הלבנוני דן עם שגרירי רוסיה וסין בהיערכות למניעת ואקום ביטחוני בדרום המדינה לקראת סיום מנדט יוניפי\"ל וביציאת הכוחות הבינלאומיים.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T10:35:42+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T10:35:42+00:00",
     "last_update_at": "2026-11-25T10:35:42+00:00",
     "what_is_not_verified": "המתווה המדויק שיחליף את כוחות יוניפי\"ל בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/969638/fm-rajji-discusses-post-unifil-security-and-bilateral-ties-with-foreig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969638",
       "published_at": "2026-11-25T10:35:42+00:00"
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
     "id": "NORTH-11260043-08",
     "title": "חקיקה חדשה בסוריה המאפשרת עתירות נגד החלטות ממשל",
     "summary": "נשיא סוריה אחמד א-שרע חתם על חוק המבטל הוראות שמנעו ביקורת שיפוטית על החלטות הרשות המבצעת והממשל, לאחר אישור הפרלמנט.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-25T19:00:57+00:00",
     "last_update_at": "2026-11-25T19:00:57+00:00",
     "what_is_not_verified": "מידת היישום המעשי של החוק במערכת המשפט הסורית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/al-sharaa-lifts-bar-on-court-challenges-to-government-decisions/",
       "published_at": "2026-11-25T19:00:57+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    }
   ],
   "not_verified": [
    "טענת שר החוץ הטורקי כי ישראל מחמשת קבוצות דרוזיות בדרום סוריה ומכינה פעולה צבאית",
    "מספר המבנים ותשתיות הטרור המדויק שהושמדו בכפרי דרום לבנון לפי הצהרת שר הביטחון הישראלי",
    "פרטי התשתית והיעדים של חוליית חזבאללה שנעצרה בצפון לבנון עם מפות ומסמכים",
    "מידת ההתערבות הצבאית שטורקיה או סוריה ינקטו אם תתרחש פעולה ישראלית בדרום סוריה"
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
     "value": 3.3789,
     "unit": "ILS",
     "change_pct": 1.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת הברחות אמצעי לחימה מסוריה לידי חזבאללה בלבנון",
      "פגיעה בתשתיות הטרור וסיכול התעצמות מחודשת בדרום לבנון"
     ],
     "inferred": [
      "יצירת חיץ ביטחוני ומעקב הדוק אחר ההתקרבות בין דמשק לאנקרה",
      "שימור חופש פעולה מבצעי בתוך שטח סוריה ולבנון"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ממוקדות בנתיבי הברחה ובגבול סוריה-לבנון",
      "הגברת החיכוך המדיני מול טורקיה על רקע הפעילות בדרום סוריה"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "הגנה על קיום הארגון ושמירה על נשקו למרות הלחצים",
      "דרישה לשחרור מיידי של פעיליו העצורים בידי רשויות לבנון"
     ],
     "inferred": [
      "שיקום מערכי ההברחה וההתארגנות בצפון לבנון לאחר הפגיעות שספג",
      "הרתעת הממשל הלבנוני מנקיטת צעדים ממשיים לפירוקו מנשק"
     ],
     "forecast": [
      "החרפת העימות המילולי והפוליטי מול נשיאות לבנון ומערכת המשפט",
      "ניסיונות מתמשכים לייבא אמל\"ח דרך נתיבים חלופיים מסוריה"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "אזהרה מפני פעולה צבאית ישראלית בדרום סוריה ומניעת עימות אזורי",
      "הידוק שיתוף הפעולה הביטחוני והמדיני עם סוריה באמצעות ועדה עליונה משותפת"
     ],
     "inferred": [
      "הגבלת חופש הפעולה וההשפעה הישראלית בסוריה",
      "ביסוס מעמדה של אנקרה כגורם המשפיע והמגן המרכזי של המשטר הסורי החדש"
     ],
     "forecast": [
      "העמקת התיאום הביטחוני עם סוריה לקראת בלימת מהלכים ישראליים",
      "המשך קו דיפלומטי תוקפני כלפי ישראל בזירה הבינלאומית"
     ]
    },
    {
     "actor": "סוריה (משטר א-שרע)",
     "declared": [
      "ביסוס שלטון החוק ופתיחת החלטות ממשל לביקורת שיפוטית",
      "התנגדות לפשיטות צבאיות ישראליות והפרת הריבונות"
     ],
     "inferred": [
      "הישענות על תמיכת טורקיה כדי לבסס שליטה מול אתגרי פנים ואיומי חוץ",
      "התמודדות עם חוסר היציבות והטרור הגובר מצד דאעש במזרח המדינה"
     ],
     "forecast": [
      "המשך מאמצים לייצוב השלטון הפנימי תוך הימנעות מעימות צבאי ישיר עם צה\"ל",
      "הגברת שיתוף הפעולה הצבאי והמודיעיני עם טורקיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/155122/",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/3-killed-including-teenage-boy-2-injured-in-landmine-explosion-in-northern-syria/4137955",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/al-sharaa-lifts-bar-on-court-challenges-to-government-decisions/",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21934723",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/969638/fm-rajji-discusses-post-unifil-security-and-bilateral-ties-with-foreig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969638",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-demands-release-five-detained-members",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-judge-issues-warrants-detained-hezbollah-members",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383963018",
     "accessed_at": "2026-11-26T00:43:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-25T00:42:12+00:00",
  "changes": {
   "NORTH-11260043-01": {
    "kind": "new"
   },
   "NORTH-11260043-02": {
    "kind": "new"
   },
   "NORTH-11260043-03": {
    "kind": "new"
   },
   "NORTH-11260043-04": {
    "kind": "new"
   },
   "NORTH-11260043-05": {
    "kind": "new"
   },
   "NORTH-11260043-06": {
    "kind": "possible",
    "prev": "פיצוץ רחפן ישראלי סמוך לטכנאים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11260043-07": {
    "kind": "possible",
    "prev": "תקיפות צה\"ל בכפרים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11260043-08": {
    "kind": "new"
   }
  }
 }
};
