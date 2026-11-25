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
  "draft": "drafts/iran/2026-11-25T0040__iran-202611250040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-25T00:40:20+00:00",
   "window": {
    "from": "2026-11-24T00:40:20+00:00",
    "to": "2026-11-25T00:40:20+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611250040"
   },
   "summary": "העימות בין איראן לבין ישראל וארצות הברית נמשך על רקע לחץ כלכלי חריף, הכולל צניחה חדה של המטבע האיראני והחמרת סנקציות אמריקאיות. במקביל, ישראל וארה\"ב מתריעות מפני כוונות איראניות לפתח נשק כימי ולפגוע בבסיסים ובאישים אמריקאיים, בעוד איראן ממשיכה באיומים על בסיסי ארה\"ב באזור ובאירופה וזרועותיה פועלות במרחב.",
   "fronts": [
    {
     "name": "החזית האיראנית-ישראלית-אמריקאית הישירה",
     "status": "פעיל עם איומים הדדיים, אזהרות על פיתוח כימי וגרעיני, והיערכות לתקיפות"
    },
    {
     "name": "חזית המפרץ והספנות",
     "status": "מתיחות ואיומים על תשתיות ומסחר ימי, לצד התאוששות חלקית של ייצוא נפט"
    },
    {
     "name": "החזית הלבנונית",
     "status": "פעילות היערכות ופינוי מפקדות של משמרות המהפכה"
    }
   ],
   "events": [
    {
     "id": "IRAN-11250040-01",
     "title": "אזהרת ביטחון של שגרירות ארה\"ב בבחריין",
     "summary": "שגרירות ארצות הברית בבחריין פרסמה אזהרת ביטחון בעקבות איומים ותקיפות איראניות נגד יעדים אמריקניים במדינה ובכווית.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T23:44:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T23:44:16+00:00",
     "last_update_at": "2026-11-24T23:44:16+00:00",
     "what_is_not_verified": "פרטים מדויקים על מלוא היקף הנזק בכל אתר ואתר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21926227",
       "published_at": "2026-11-24T23:44:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11250040-02",
     "title": "הפלת ערך המטבע האיראני לשפל",
     "summary": "שער הריאל האיראני צנח בשוק החופשי לשפל היסטורי חדש של כ-2.83 מיליון ריאל לדולר אמריקאי אחד, על רקע הלחץ האמריקאי והמשבר הכלכלי.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-24T10:38:25+00:00",
     "last_update_at": "2026-11-24T11:27:01+00:00",
     "what_is_not_verified": "ההשפעה המדויקת לטווח הקצר על מהלכי המשטר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134160",
       "published_at": "2026-11-24T11:27:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49872",
       "published_at": "2026-11-24T10:38:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11250040-03",
     "title": "פיתוח נשק כימי ותוכניות תקיפה לפי שר הביטחון הישראלי",
     "summary": "שר הביטחון ישראל כ\"ץ הצהיר כי איראן מפתחת נשק כימי כשובר שוויון וסימנה את הנשיא טראמפ כמטרה, לצד אינדיקציות לחידוש פרויקט הגרעין.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T16:57:05+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-24T16:57:05+00:00",
     "last_update_at": "2026-11-24T17:03:34+00:00",
     "what_is_not_verified": "האם איראן אכן השלימה את פיתוח היכולות הכמיות והגרעיניות בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95130",
       "published_at": "2026-11-24T17:03:34+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkqtbfqy7l",
       "published_at": "2026-11-24T16:59:27+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383962941",
       "published_at": "2026-11-24T16:57:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11250040-04",
     "title": "הרשעת וואווי בארה\"ב בהפרת סנקציות",
     "summary": "חבר מושבעים בניו יורק הרשיע את חברת הטכנולוגיה הסינית וואווי בעשרת סעיפי האישום הקשורים להסתרה של עסקים באיראן והפרת סנקציות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T22:46:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T22:46:32+00:00",
     "last_update_at": "2026-11-25T00:20:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21926255",
       "published_at": "2026-11-25T00:20:26+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/chinas-huawei-convicted-sprawling-us-criminal-trial-over-iran-business",
       "published_at": "2026-11-24T22:46:32+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "IRAN-11250040-05",
     "title": "פינוי מפקדות משמרות המהפכה בדאחיה",
     "summary": "… בביירות מחשש לתקיפה ישראלית.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T12:00:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-24T12:00:34+00:00",
     "last_update_at": "2026-11-24T12:00:34+00:00",
     "what_is_not_verified": "היקף הפינוי המדויק ומידת ההצלחה שלו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95127",
       "published_at": "2026-11-24T12:00:34+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על קידום תוכניות לתקיפה כימית וחידוש פרויקט הגרעין מצד איראן",
    "דיונים פנימיים בממשל טראמפ לגבי חיסול בכירים בהנהגה האיראנית",
    "תוכניות איראניות לפגוע בנשיא לשעבר או הנשיא המכהן טראמפ ובבסיסים באירופה"
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
     "value": 3.3401,
     "unit": "ILS",
     "change_pct": -0.29,
     "source_id": "src_ecb",
     "as_of": "2026-11-24T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להמשיך לפתח יכולות טילים צבאיים לפי צורך",
      "להבהיר שכל בסיס אמריקאי באזור נמצא בטווח פגיעה"
     ],
     "inferred": [
      "לנסות לשרוד את הלחץ הכלכלי ומצוקת מטבע החוץ",
      "להפעיל שלוחות ולתכנן מענה הרתעתי מול ארה\"ב וישראל"
     ],
     "forecast": [
      "המשך הסתמכות על יכולות בלסטיות ולוחמה אסימטרית",
      "הידוק שיתוף פעולה או ארגון מחדש של מנגנוני הביטחון"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "למנוע מאיראן להשיג נשק כימי ויכולות שוברי שוויון",
      "להיערך לאפשרות של פעולה צבאית עצמאית או משולבת מול איראן"
     ],
     "inferred": [
      "לנסות לגייס את ארה\"ב למהלך התקפי משולב נגד תשתיות איראניות",
      "להפחית תלות במטוסי קרב אמריקאיים באמצעות פיתוח אמצעי לחימה חלופיים"
     ],
     "forecast": [
      "המשך איסוף מודיעין והיערכות מול התבססות איראנית ושלוחותיה",
      "מתן דגש על פיתוח חימוש מדויק וכטב\"מים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "אכיפת סנקציות כלכליות ומצור למניעת מימון איראני",
      "הגנה על מתקנים ונציגים אמריקאיים במזרח התיכון"
     ],
     "inferred": [
      "הגברת הלחץ הכלכלי דרך חסימת רשתות בנקאות צללים ומאבק בחברות מפרות סנקציות",
      "בחינת צעדים מדיניים וצבאיים בלי להיגרר למלחמה כוללת מהירה"
     ],
     "forecast": [
      "המשך אכיפת חוקי סנקציות קפדניים",
      "שמירה על כוננות גבוהה בבסיסים האזוריים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/chinas-huawei-convicted-sprawling-us-criminal-trial-over-iran-business",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21926255",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134160",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49872",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95127",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383962941",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkqtbfqy7l",
     "accessed_at": "2026-11-25T00:40:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-23T00:40:53+00:00",
  "changes": {
   "IRAN-11250040-01": {
    "kind": "new"
   },
   "IRAN-11250040-02": {
    "kind": "new"
   },
   "IRAN-11250040-03": {
    "kind": "new"
   },
   "IRAN-11250040-04": {
    "kind": "new"
   },
   "IRAN-11250040-05": {
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
  "draft": "drafts/north/2026-11-25T0042__north-202611250042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-25T00:42:12+00:00",
   "window": {
    "from": "2026-11-24T00:42:12+00:00",
    "to": "2026-11-25T00:42:12+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611250042"
   },
   "summary": "הזירה הצפונית מתאפיינת בהמשך העימות המוגבל בין ישראל לחיזבאללה בלבנון הכולל תקיפות אוטונומיות ורחפנים, לצד פעילות של צה\"ל לאורך הגבול. במקביל, נמשכים המאמצים המדיניים הבינלאומיים ללחוץ על פירוק חיזבאללה מנשקו, בעוד גורמים באיראן וחיזבאללה נערכים להסלמה אפשרית הכוללת פינוי בסיסים בביירות.",
   "fronts": [
    {
     "name": "החזית הישראלית-לבנונית",
     "status": "פעיל"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "פעיל בהקשרי הברחות"
    }
   ],
   "events": [
    {
     "id": "NORTH-11250042-01",
     "title": "פיצוץ רחפן ישראלי סמוך לטכנאים בדרום לבנון",
     "summary": "הכוחות הישראליים פצצו רחפן ליד טכנאים שביצעו עבודות תחזוקה חשמליות בקבריח'א ובמייפדון שבדרום לבנון.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T18:00:49+00:00",
     "last_update_at": "2026-11-24T18:00:49+00:00",
     "what_is_not_verified": "האם מדובר בסיכול ממוקד או תקלה טכנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_d8ef470949da3031",
       "url": "https://english.almanar.com.lb/article/154652/",
       "published_at": "2026-11-24T18:00:49+00:00"
      }
     ],
     "places": [
      {
       "name": "קבריח'א, לבנון",
       "lat": 33.2524,
       "lon": 35.4663
      },
      {
       "name": "מייפדון, לבנון",
       "lat": 33.3485,
       "lon": 35.4772
      }
     ]
    },
    {
     "id": "NORTH-11250042-02",
     "title": "תקיפות צה\"ל בכפרים בדרום לבנון",
     "summary": "צה\"ל ביצע תקיפות במספר כפרים בדרום לבנון בהם קבריח'א, תולין וכפר תבנית.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T08:44:02+00:00",
     "last_update_at": "2026-11-24T08:44:02+00:00",
     "what_is_not_verified": "היקף הנזק המלא והמטרות הספציפיות שהותקפו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134148",
       "published_at": "2026-11-24T08:44:02+00:00"
      }
     ],
     "places": [
      {
       "name": "קבריח'א, לבנון",
       "lat": 33.2524,
       "lon": 35.4663
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-11250042-03",
     "title": "פינוי מפקדות משמרות המהפכה בדאחיה",
     "summary": "משמרות המהפכה של איראן החלו לפנות את מפקדותיהן ברובע הדאחיה בביירות ובסביבתו מחשש לתקיפה ישראלית.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-24T12:00:34+00:00",
     "last_update_at": "2026-11-24T12:00:34+00:00",
     "what_is_not_verified": "היקף הפינוי בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95127",
       "published_at": "2026-11-24T12:00:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11250042-04",
     "title": "אימון מפקדי חטיבה 7 לאחר חודשים בלבנון",
     "summary": "למעלה מ-100 מפקדים בחטיבה 7 של צה\"ל קיימו סדרת אימונים המבוססת על קרבותיהם בלבנון.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T18:15:42+00:00",
     "last_update_at": "2026-11-24T18:15:42+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק להמשך הפעילות המבצעית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25684",
       "published_at": "2026-11-24T18:15:42+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11250042-05",
     "title": "חשיפת פעולת הברחת חומרי נפץ בגבול לבנון-סוריה",
     "summary": "הצבא הלבanוני חשף פעילות הברחה של 264 קילוגרם חומרי נפץ מאזור סוריה ללבנון באזור משארי אל-קאע.",
     "axis": "לבנון וחיזבאללה - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T14:55:00+00:00",
     "last_update_at": "2026-11-24T14:55:00+00:00",
     "what_is_not_verified": "היעד הסופי של משלוח חומרי הנפץ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_ad963416fb2cb714",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/969470/lebanese-army-uncovers-details-of-264-kg-explosives-smuggling-operatio/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969470",
       "published_at": "2026-11-24T14:55:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11250042-06",
     "title": "איסור פעילות עמותת אל-אירושאד בברלין הקשורה לחיזבאללה",
     "summary": "הרשויות בברלין אסרו את פעילות עמותת אל-אירושאד וארגונים נוספים המקושרים אליה, עקב מתן תמיכה כספית וארגונית לחיזבאללה והפצת האידיאולוגיה שלו בגרמניה.",
     "axis": "לבנון וחיזבאללה - אירופה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T13:31:24+00:00",
     "last_update_at": "2026-11-24T13:31:24+00:00",
     "what_is_not_verified": "היקף הנכסים הכספיים המדויק שנתפסו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_alma",
       "url": "https://israel-alma.org/the-el-irschad-association-in-berlin-and-hezbollahs-civilian-activities-outside-lebanon/",
       "published_at": "2026-11-24T13:31:24+00:00"
      }
     ],
     "places": [
      {
       "name": "ברלין, גרמניה",
       "lat": 52.5174,
       "lon": 13.3951
      }
     ]
    }
   ],
   "not_verified": [
    "האם משמרות המהפכה פינו לחלוטין את כלל מפקדותיהם מדאחיה",
    "היעד המדויק של משלוח חומרי הנפץ שנתפס בגבול סוריה-לבנון"
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
     "value": 3.3401,
     "unit": "ILS",
     "change_pct": -0.29,
     "source_id": "src_ecb",
     "as_of": "2026-11-24T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות חיזבאללה",
      "החזקת רצועות ביטחון"
     ],
     "inferred": [
      "שחיקת יכולות צבאיות של חיזבאללה באמצעות תקיפות נקודתיות"
     ],
     "forecast": [
      "המשך פעילות צבאיה ממוקדת בלבנון",
      "היערכות להסלמה רחבה מול איראן ושלוחיה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך תמיכה בציר ההתנגדות",
      "הנצחת מורשת מנהיגיו"
     ],
     "inferred": [
      "שימור יכולות צבאיות למרות מכות קשות וניסיונות סיכול הברחות"
     ],
     "forecast": [
      "המשך פעילות חשאית והיערכות לתקיפות נגד"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/the-el-irschad-association-in-berlin-and-hezbollahs-civilian-activities-outside-lebanon/",
     "accessed_at": "2026-11-25T00:42:12+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/154652/",
     "accessed_at": "2026-11-25T00:42:12+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/969470/lebanese-army-uncovers-details-of-264-kg-explosives-smuggling-operatio/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969470",
     "accessed_at": "2026-11-25T00:42:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134148",
     "accessed_at": "2026-11-25T00:42:12+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25684",
     "accessed_at": "2026-11-25T00:42:12+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95127",
     "accessed_at": "2026-11-25T00:42:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-23T22:19:52+00:00",
  "changes": {
   "NORTH-11250042-01": {
    "kind": "new"
   },
   "NORTH-11250042-02": {
    "kind": "new"
   },
   "NORTH-11250042-03": {
    "kind": "new"
   },
   "NORTH-11250042-04": {
    "kind": "new"
   },
   "NORTH-11250042-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "סיכול הברחת חלקי חומרי נפץ בגבול לבנון-סוריה",
    "score": 0.65
   },
   "NORTH-11250042-06": {
    "kind": "new"
   }
  }
 }
};
