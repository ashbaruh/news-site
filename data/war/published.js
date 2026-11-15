/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-15T0709__yemen-202611150709.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-15T07:09:28+00:00",
   "window": {
    "from": "2026-11-14T07:09:28+00:00",
    "to": "2026-11-15T07:09:28+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611150709"
   },
   "summary": "הזירה מאופיינת בהסלמה הדדית שכוללת שיגור מוגבר של טילים בליסטיים וכלי טיס בלתי מאוישים מצד החות'ים לעבר מטרות בסעודיה, במקביל למערכות הגנה אווירית שמופעלות ליירוטם. במקביל נמשכים עימותים עזים בתוך תימן עצמה, במיוחד במחוזות מאריב, אל-ג'וף ותעז, תוך דיווחים על תקיפות אוויריות נרחבות ונפגעים בקרב אזרחים ולוחמים כאחד. המתיחות משפיעה ישירות על יציבות האזור, על נתיבי הסחר הימיים ועל השיקולים המדיניים והביטחוניים של ארצות הברית ומדינות המפרץ.",
   "fronts": [
    {
     "name": "סעודיה - תימן",
     "status": "פעילה - שיגורי טילים וכלי טיס בלתי מאוישים חות'יים לעבר ריאד והמחוז המזרחי, לצד יירוטים של הקואליציה"
    },
    {
     "name": "מאריב ואל-ג'וף",
     "status": "פעילה - התגברות הקרבות הקרקעיים, עקירה המונית של תושבים וטענות להפלת כלי טיס"
    },
    {
     "name": "תעז",
     "status": "פעילה - הפגזות וירי צלפים לאורך קווי העימות ופגיעה באזרחים"
    },
    {
     "name": "נתיבי השיט בים האדום ומצר באב אל-מנדב",
     "status": "מתוחה - השפעה ואיום על מעבר כלי שיט כחלק ממאזן הכוחות האזורי"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11150709-01",
     "title": "יירוט טילים בליסטיים וכלי טיס בלתי מאוישים ששוגרו מסוג חות'י לעבר סעודיה",
     "summary": "הקואליציה בראשות סעודיה הודיעה על יירוט שני טילים בליסטיים ששוגרו לכיוון ריאד וכן מספר כלי טיס בלתי מאוישים באזור המחוז המזרחי ובדרום הממלכה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T13:44:46+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T13:44:46+00:00",
     "last_update_at": "2026-11-15T03:46:26+00:00",
     "what_is_not_verified": "אין אימות עצמאי לשיעור הפגיעות והיירוטים המדויק מעבר להודעות הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-led-coalition-intercepts-missiles-towards-riyadh-drones-eastern-province",
       "published_at": "2026-11-15T03:46:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-intercepts-third-drone-houthis-claim-downing",
       "published_at": "2026-11-15T03:20:34+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/bahrains-ministry-interior-issues-hazard-alert-urges-citizens-stay-calm",
       "published_at": "2026-11-15T02:07:28+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-houthi-ballistic-missiles-shot-down-over-riyadh-coalition-spokesman",
       "published_at": "2026-11-15T01:49:17+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/coalition-forces-intercept-another-drone-over-saudi-arabias-eastern",
       "published_at": "2026-11-15T01:02:42+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-drone-shot-down-over-saudi-arabias-eastern-region",
       "published_at": "2026-11-15T00:36:10+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155776",
       "published_at": "2026-11-14T13:44:46+00:00"
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
     "id": "YEMEN-11150709-02",
     "title": "טענת החות'ים להפלת כלי טיס של סעודיה במחוז אל-ג'וף",
     "summary": "דובר הזרוע הצבאית של החות'ים טען כי כוחותיהם הפילו כלי טיס בלתי מאויש חמוש למשימות סיור של סעודיה בשמי מחוז אל-ג'וף.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T03:20:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T03:20:34+00:00",
     "last_update_at": "2026-11-15T03:20:34+00:00",
     "what_is_not_verified": "הפלת המטוס לא אומתה על ידי מקור רשמי סעודי או תיעוד חזותי מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-intercepts-third-drone-houthis-claim-downing",
       "published_at": "2026-11-15T03:20:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11150709-03",
     "title": "הסלמת הקרבות במאריב ובאל-ג'וף ועקירת מאות אלפי תושבים",
     "summary": "נרשמה החרפה בלחימה במחוזות מאריב ואל-ג'וף בתימן, לצד דיווח של סוכנות האו\"ם על עקירת מעל שלוש מאות וארבעים אלף בני אדם מאז אוגוסט.",
     "axis": "פנים תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T02:59:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T02:59:06+00:00",
     "last_update_at": "2026-11-15T02:59:06+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק ומיקומי הקרבות הספציפיים בחזיתות אלה אינם מפורטים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/15/saudi-led-coalition-intercepts-two-missiles-two-drones-in-riyadh?traffic_source=rss",
       "published_at": "2026-11-15T02:59:06+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    },
    {
     "id": "YEMEN-11150709-04",
     "title": "פגיעות באזרחים מירי צלפים, הפגזות ומוקשים בתעז ובאל-ג'וף",
     "summary": "אזרחים, בהם נשים וילדים, נפצעו מפיצוץ מוקש במחוז אל-ג'וף ומירי צלפים והפגזות של מיליציות החות'ים באזור תעז.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T12:50:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T12:50:34+00:00",
     "last_update_at": "2026-11-15T03:40:41+00:00",
     "what_is_not_verified": "אין אימות בלתי תלוי של גורמים רפואיים ניטרליים בשטח לדיווחים הממשלתיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155793",
       "published_at": "2026-11-15T03:40:41+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155789",
       "published_at": "2026-11-14T23:04:33+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155772",
       "published_at": "2026-11-14T12:50:34+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "ח'ב וא-שעף, תימן",
       "lat": 16.9087,
       "lon": 45.3491
      }
     ]
    },
    {
     "id": "YEMEN-11150709-05",
     "title": "דיווח צבא תימן על מאות תקיפות ואבדות בקרב החות'ים",
     "summary": "הכוחות המזוינים של תימן מסרו כי ביצעו מאות גיחות ותקיפות שבהן נהרגו ונפצעו מאות מפקדים ולוחמים של החות'ים.",
     "axis": "פנים תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T14:54:20+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T14:54:20+00:00",
     "last_update_at": "2026-11-14T14:54:20+00:00",
     "what_is_not_verified": "מספר הנפגעים וההיקף של מאות הגיחות לא אומתו על ידי מקורות עצמאיים או על ידי החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155783",
       "published_at": "2026-11-14T14:54:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11150709-06",
     "title": "התניית תקיפות ארצות הברית בהימנעות מפעולות חות'יות",
     "summary": "גורמים בכירים מסרו כי נשיא ארצות הברית שוקל להשהות פעולות צבאיות מול איראן במידה שלא יתרחשו פעולות התגרות חדשות מצדה או מצד החות'ים בתימן.",
     "axis": "ארצות הברית - תימן - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T11:46:28+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T11:46:28+00:00",
     "last_update_at": "2026-11-15T03:04:00+00:00",
     "what_is_not_verified": "ההצהרה נמסרה מפי מקורות עלומי שם ללא הודעה פומבית רשמית של הבית הלבן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/report-trump-may-not-attack-iran-long-it-doesnt-provoke-us",
       "published_at": "2026-11-15T03:04:00+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-says-may-hold-iran-attacks-barring-new-provocations-0",
       "published_at": "2026-11-15T01:24:18+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/trump-tells-advisers-he-may-hold-iran-attacks-barring-new-provocations-sources",
       "published_at": "2026-11-14T11:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    }
   ],
   "not_verified": [
    "טענת החות'ים בדבר הפלת מטוס סיור חמוש סעודי במחוז אל-ג'וף",
    "מספרי הנפגעים המדויקים והיקף 723 התקיפות שיוחסו לצבא תימן",
    "מידת הנזק המדויקת שנגרמה כתוצאה משיגורי הטילים והכטב\"מים האחרונים לעבר סעודיה",
    "הדיווחים מפי מקורות בעילום שם בדבר תנאי הנשיא טראמפ להשהיית תקיפות"
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "המשך תקיפת מטרות בסעודיה, בהן תשתיות נפט, נמלי תעופה ומתקנים צבאיים",
      "דרישה לפיצויים כספיים בהיקף של מיליארדי דולרים"
     ],
     "inferred": [
      "הפעלת לחץ ישיר על סעודיה להפסקת הלחימה והשגת ויתורים מדיניים וכלכליים",
      "ביסוס כוח ההרתעה והשליטה בשטחים נרחבים בתימן"
     ],
     "forecast": [
      "המשך שיגורים של טילים וכטב\"מים לעבר יעדים בעומק סעודיה",
      "הגברת הלחץ הצבאי במוקדי החיכוך היבשתיים בתימן כמו מאריב"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט כלל האיומים האוויריים",
      "תמיכה בכוחות ממשלת תימן הלגיטימית מול החות'ים"
     ],
     "inferred": [
      "מניעת פגיעה בתשתיות אנרגיה חיוניות ובמרכזים כלכליים",
      "בלימת התרחבות מלחמה כוללת והימנעות מהסלמה רחבה מול איראן"
     ],
     "forecast": [
      "המשך הפעלת מערכי ההגנה האווירית וביצוע תקיפות ממוקדות בתימן",
      "מאמצים דיפלומטיים מול ארצות הברית לשמירה על יציבות אזורית"
     ]
    },
    {
     "actor": "ממשלת תימן",
     "declared": [
      "המשך פעולות התקיפה והמערכה הצבאית נגד פעילי וראשי החות'ים"
     ],
     "inferred": [
      "השבת השליטה על אזורים חיוניים ומניעת נפילת מאריב לידי החות'ים"
     ],
     "forecast": [
      "המשך הלוחמה הקרקעית וההפגזות במוקדי הקרבות במאריב, אל-ג'וף ותעז"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/15/saudi-led-coalition-intercepts-two-missiles-two-drones-in-riyadh?traffic_source=rss",
     "accessed_at": "2026-11-15T07:09:28+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/trump-tells-advisers-he-may-hold-iran-attacks-barring-new-provocations-sources",
     "accessed_at": "2026-11-15T07:09:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/report-trump-may-not-attack-iran-long-it-doesnt-provoke-us",
     "accessed_at": "2026-11-15T07:09:28+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/trump-says-may-hold-iran-attacks-barring-new-provocations-0",
     "accessed_at": "2026-11-15T07:09:28+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155783",
     "accessed_at": "2026-11-15T07:09:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T00:45:29+00:00",
  "changes": {
   "YEMEN-11150709-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "החות'ים טוענים שביצעו תקיפות של כטב\"מים וטילים נגד יעדים בסעודיה ובתוך תימן",
    "score": 0.817
   },
   "YEMEN-11150709-02": {
    "kind": "new"
   },
   "YEMEN-11150709-03": {
    "kind": "new"
   },
   "YEMEN-11150709-04": {
    "kind": "new"
   },
   "YEMEN-11150709-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "צבא תימן מדווח על תקיפת מאות מטרות חות'יות ומאות נפגעים",
    "score": 0.65
   },
   "YEMEN-11150709-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-15T0040__iran-202611150040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-15T00:40:22+00:00",
   "window": {
    "from": "2026-11-14T00:40:22+00:00",
    "to": "2026-11-15T00:40:22+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611150040"
   },
   "summary": "המתיחות בין איראן לבין ארה\"ב וישראל מתעצמת במוקדים ימיים וסביב סוגיית הגרעין. במצר הורמוז נפגעו מיכליות נפט ואיראן הודיעה על יירוט כטב\"ם אמריקני, לצד איומים איראניים בפגיעה בבסיסי ארה\"ב. במקביל, בישראל נערכים לפעולה אפשרית מול התחדשות תוכנית הגרעין האיראנית על רקע היעדר פיקוח בינלאומי, בעוד בארה\"ב מתלבטים האם לתקוף או לפנות לנתיב דיפלומטי בפסגות בינלאומיות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "הסלמה ימית הכוללת פגיעה במיכליות נפט, איומי מוקשים ויירוט כטב\"ם אמריקני"
    },
    {
     "name": "חזית הגרעין האיראני",
     "status": "חשש מאיבוד פיקוח סבא\"א על מתקן העשרה באיספהאן והיערכות ישראלית לפעולה"
    },
    {
     "name": "החזית המדינית והמודיעינית מול ארה\"ב",
     "status": "התרעות על כוונות פגיעה בבכירים אמריקנים וחילוקי דעות פוליטיים בוושינגטון סביב המשך הלחימה"
    },
    {
     "name": "חזית מדינות המפרץ",
     "status": "דרישה רשמית לפיצויים כספיים מאיראן על אלפי שיגורי טילים וכטב\"מים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11150040-01",
     "title": "פגיעה במיכליות נפט במצר הורמוז",
     "summary": "חיל הים של משמרות המהפכה טוען כי מספר מיכליות נפט נפגעו ממוקשים ימיים ועלו באש במצר הורמוז עקב שייט בנתיבים אסורים.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T12:27:12+00:00",
     "last_update_at": "2026-11-14T23:46:29+00:00",
     "what_is_not_verified": "האם מדובר במוקשים ימיים כפי שטוענת איראן או בתקיפות ישירות ומבצע תודעה, ומספרן המדויק של המיכליות שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/irans-navy-says-three-tankers-fire-after-hitting-mines-hormuz",
       "published_at": "2026-11-14T23:46:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-says-two-oil-tankers-hit-mines-strait-hormuz",
       "published_at": "2026-11-14T22:20:55+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388393",
       "published_at": "2026-11-14T22:00:53+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hktw00kl0zl",
       "published_at": "2026-11-14T16:13:25+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/oil-tanker-fire-strait-hormuz-iran-navy",
       "published_at": "2026-11-14T12:27:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-02",
     "title": "יירוט כלי טיס בלתי מאויש אמריקני מעל האי קשם",
     "summary": "משמרות המהפכה באיראן הודיעו כי יירטו והפילו כטב\"ם אמריקני מסוג פרדטור מעל האי קשם באמצעות מערכת הגנה אווירית מתקדמת.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T12:33:51+00:00",
     "last_update_at": "2026-11-14T12:33:51+00:00",
     "what_is_not_verified": "אין אימות או אישור רשמי מצד צבא ארה\"ב על הפלת הכטב\"ם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-said-it-intercepted-us-mq-1-predator-drone-over-qeshm-island",
       "published_at": "2026-11-14T12:33:51+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      }
     ]
    },
    {
     "id": "IRAN-11150040-03",
     "title": "העברת מודיעין ישראלי לארה\"ב על כוונות פגיעה בבכירי הבית הלבן",
     "summary": "המוסד העביר לסוכנות הביון המרכזית בארה\"ב מידע מודיעיני אודות תוכנית איראנית לפגוע בנשיא טראמפ ובבכירי ממשלו, מה שהוביל להגברת אבטחה סביבם.",
     "axis": "ישראל-איראן-ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T18:03:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T18:03:33+00:00",
     "last_update_at": "2026-11-14T18:03:33+00:00",
     "what_is_not_verified": "דיווח המבוסס על גורמים בכירים ללא הצגת מסמכים או אישור פומבי רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21850141",
       "published_at": "2026-11-14T18:03:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-04",
     "title": "חשש סבא\"א ממתקן העשרה איראני באיספהאן",
     "summary": "סבא\"א מביעה דאגה בדו\"ח חשאי בנוגע למתקן העשרה באיספהאן שמיקומו המדויק ומצבו אינם ידועים לה, ואינה יכולה לקבוע שלא הוסט ממנו חומר גרעיני.",
     "axis": "גרעין איראני",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T16:13:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T16:13:25+00:00",
     "last_update_at": "2026-11-14T17:12:55+00:00",
     "what_is_not_verified": "מיקומו המדויק ומצבו של המתקן ומצב האורניום המועשר שבו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21850341",
       "published_at": "2026-11-14T17:12:55+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hktw00kl0zl",
       "published_at": "2026-11-14T16:13:25+00:00"
      }
     ],
     "places": [
      {
       "name": "איספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    },
    {
     "id": "IRAN-11150040-05",
     "title": "איום טלוויזיוני באיראן בטיל מותאם נגד בסיסים באירופה",
     "summary": "הטלוויזיה הממלכתית של איראן שידרה אזהרה לפיה גרסאות מותאמות של הטיל ח'רמשהר יוכלו לפגוע בבסיסים צבאיים של ארה\"ב באירופה, וציינה במפורש בסיס בבריטניה.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T19:04:34+00:00",
     "last_update_at": "2026-11-14T19:46:06+00:00",
     "what_is_not_verified": "היכולת המבצעית בפועל של הטיל המותאם להגיע ליעדים אלה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133648",
       "published_at": "2026-11-14T19:46:06+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611141458",
       "published_at": "2026-11-14T19:04:34+00:00"
      }
     ],
     "places": [
      {
       "name": "רפא\"ף פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-11150040-06",
     "title": "דרישת מדינות המפרץ לפיצויים מאיראן במועצת הביטחון",
     "summary": "מועצת שיתוף הפעולה של מדינות המפרץ פנתה למועצת הביטחון בדרישה לחייב את איראן לשלם פיצויים על נזקי אלפי טילים וכטב\"מים ששוגרו מאז פברואר, ולהכלילן בכל מו\"מ.",
     "axis": "איראן-מדינות המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T14:34:56+00:00",
     "last_update_at": "2026-11-14T14:34:56+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49577",
       "published_at": "2026-11-14T14:34:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-07",
     "title": "הכחשת משמרות המהפכה לתקיפות סייבר בצרפת והאשמת ישראל",
     "summary": "דובר משמרות המהפכה דחה את האשמות צרפת לגבי חבלה במערכות קירור במרכולים, וטען כי מדובר בפרובוקציה ישראלית שנועדה להשחיר את איראן באירופה.",
     "axis": "איראן-אירופה-ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T20:08:15+00:00",
     "last_update_at": "2026-11-14T20:39:02+00:00",
     "what_is_not_verified": "זהות מבצעי מתקפת הסייבר בצרפת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_fcb05e069e954cce",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-denies-role-french-supermarket-cyberattacks",
       "published_at": "2026-11-14T20:39:02+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_fcb05e069e954cce",
       "url": "https://en.irna.ir/news/86321812/General-Mohebbi-Rdiculous-claim-of-attack-on-cooling-systems",
       "published_at": "2026-11-14T20:08:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-08",
     "title": "הדחת מפקדי ספינות מלחמה של צבא ארה\"ב בזירת איראן",
     "summary": "הצי האמריקני הדיח מפקדים בכירים, בהם מפקדת משחתת שפעלה לתמיכה במבצעים מול איראן ומפקדי צוללת תקיפה גרעינית, בעילה של אובדן אמון ותאונות.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T16:34:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:34:57+00:00",
     "last_update_at": "2026-11-14T16:34:57+00:00",
     "what_is_not_verified": "הקשר הישיר המלא בין ההדחות לבין הפעילות המבצעית מול איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/loss-confidence-us-navy-fires-commanders-warships-deployed-against-iran",
       "published_at": "2026-11-14T16:34:57+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר המיכליות המדויק שנפגעו במצר הורמוז והאם מדובר במוקשים ימיים או בפגיעות ישירות",
    "טענת איראן בדבר יירוט מוצלח של כטב\"ם אמריקני מעל האי קשם",
    "מיקומו המדויק ומצבו של מתקן העשרת האורניום האיראני באיספהאן",
    "מידת המוכנות של טילי ח'רמשהר לפגוע בבסיסים באירופה ובבריטניה",
    "כוונות ממשיות ומעשיות של איראן להתנקש בנשיא טראמפ ובבכירי ממשלו"
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הרתעת כלי שיט ממעבר בנתיבים לא מורשים במצר הורמוז",
      "יירוט כלי טיס זרים החודרים לתחומה ומניעת משימות סיור",
      "הכחשת מעורבות בחבלות סייבר באירופה וייחוסן לישראל"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי עולמי באמצעות פגיעה בחופש השיט במצר הורמוז",
      "קידום תוכנית הגרעין והרחקת פיקוח בינלאומי תוך יצירת מרחב עמימות"
     ],
     "forecast": [
      "המשך הגבלות ופגיעות ממוקדות בשיט במצר הורמוז להעלאת מחירי האנרגיה",
      "האצת השיח הפנימי והמעשי לקראת פריצת דרך בתוכנית הגרעין"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעה מוחלטת מאיראן להגיע לנשק גרעיני",
      "הסרת האיום הקיומי הנשקף מחידוש פרויקט הגרעין"
     ],
     "inferred": [
      "הכשרת הקרקע המדינית והצבאית לתקיפה עצמאית באיראן ללא תלות בארה\"ב",
      "הפעלת לחץ מודיעיני ופוליטי על הממשל האמריקני שלא להגיע להסדר עם טהרן"
     ],
     "forecast": [
      "המשך עדכון בנק המטרות והגברת הכוננות לפעולה צבאית באיראן",
      "העמקת התיאום המודיעיני עם בעלות ברית מערביות נגד כוונות תקיפה איראניות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "תגבור מערכות הגנה לישראל והגנה על כוחות אמריקניים במרחב",
      "בחינת אפשרות להימנע מתקיפות באיראן אם לא יהיו פרובוקציות חדשות"
     ],
     "inferred": [
      "ניסיון להכיל את העימות מול איראן כדי להתמקד בפסגות בינלאומיות וביחסים מול סין ורוסיה",
      "מאבק פוליטי פנימי בין חתירה לסיום המלחמה לבין הפעלת לחץ מקסימלי"
     ],
     "forecast": [
      "המשך הימנעות מתקיפה יזומה רחבה באיראן כל עוד לא ייחצו קווים אדומים ישירים",
      "העלאת סוגיית איראן והפיקוח על הגרעין במסגרת מגעים דיפלומטיים מול המעצמות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/irans-navy-says-three-tankers-fire-after-hitting-mines-hormuz",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611141458",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86321812/General-Mohebbi-Rdiculous-claim-of-attack-on-cooling-systems",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21850341",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388393",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/loss-confidence-us-navy-fires-commanders-warships-deployed-against-iran",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133648",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49577",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hktw00kl0zl",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T06:56:57+00:00",
  "changes": {
   "IRAN-11150040-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת מוקשים במכליות נפט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-11150040-02": {
    "kind": "new"
   },
   "IRAN-11150040-03": {
    "kind": "new"
   },
   "IRAN-11150040-04": {
    "kind": "possible",
    "prev": "התרעת סבא\"א בנוגע לאתר גרעין בלתי מפוקח באספהאן",
    "score": 0.633
   },
   "IRAN-11150040-05": {
    "kind": "new"
   },
   "IRAN-11150040-06": {
    "kind": "new"
   },
   "IRAN-11150040-07": {
    "kind": "new"
   },
   "IRAN-11150040-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-15T0705__ukraine-202611150705.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-15T07:05:39+00:00",
   "window": {
    "from": "2026-11-14T07:05:39+00:00",
    "to": "2026-11-15T07:05:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611150705"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות חילופי מהלומות ארוכות טווח, הכוללים פגיעות אוקראיניות בתשתיות אנרגיה ותעשייה כימית ברוסיה לצד מתקפות רוסיות על מתקני נמל וחשמל באוקראינה. במקביל למגעים דיפלומטיים לקידום ערוצי שיח בין מוסקבה למערב והעלאת רעיונות להסדר טריטוריאלי מול חברות בנאט\"ו, גובר החשש בקייב ממהלכים בינלאומיים ללא שיתופה. בזירה הצבאית נמשכים מאמצי ההצטיידות וההתמודדות עם מגבלות טכנולוגיות על מערכות כטב\"מים לאורך קו העימות.",
   "fronts": [
    {
     "name": "חזית עומק רוסיה (טטרסטן ורוסטוב)",
     "status": "פגיעות כטב\"מים בתשתיות פטרוכימיות ובתחנות משנה של חשמל המשרתות את הרכבת"
    },
    {
     "name": "חזית הדרום והים השחור (אודסה, צ'רנומורסק וחופי רומניה)",
     "status": "תקיפות על נמלים ותשתיות ימיות, ופגיעות כטב\"מים בספינות מסחר"
    },
    {
     "name": "חזית המזרח (דונבאס)",
     "status": "חילופי אש והפגזות הדדיות, ברקע דיונים מדיניים על עתיד השליטה בחבל"
    },
    {
     "name": "חזית זפוריז'יה",
     "status": "תקיפות אוויריות ופגיעות במבני מגורים ובתשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11150705-01",
     "title": "תקיפות רוסיות בצ'רנומורסק ועל אוניית משא בים",
     "summary": "כוחות רוסיים תקפו את הנהלת הנמל ותחנת כוח משנית בצ'רנומורסק, וכן פגעו בספינת משא שהובילה ציוד צבאי ודו-שימושי לנמל אודסה.",
     "axis": "חזית הדרום / הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T06:47:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T06:47:01+00:00",
     "last_update_at": "2026-11-15T06:47:01+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח על פגיעה באוניית המשא או באופי הציוד שהובילה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2218275",
       "published_at": "2026-11-15T06:47:01+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'רנומורסק, אוקראינה",
       "lat": 46.3242,
       "lon": 30.6523
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-11150705-02",
     "title": "מתקפת כטב\"מים על טגנרוג ברוסיה",
     "summary": "מתקפת כטב\"מים אוקראינית פגעה בשתי תחנות משנה של חשמל בעיר טגנרוג שבמחוז רוסטוב. כתוצאה מכך אדם אחד נהרג, ארבעה נפצעו, וקווי חשמל של הרכבת נותקו.",
     "axis": "עומק רוסיה / מחוז רוסטוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T01:55:00+00:00",
     "last_update_at": "2026-11-15T06:03:15+00:00",
     "what_is_not_verified": "פרטי הפגיעה והנפגעים נשענים על הודעות המושל המקומי וערוצי טלגרם ללא אימות עצמאי נוסף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2218253",
       "published_at": "2026-11-15T06:03:15+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/drone-attack-kills-1-injures-4-in-russias-rostov-oblast-governor-says/",
       "published_at": "2026-11-15T05:55:31+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062911/",
       "published_at": "2026-11-15T05:51:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49594",
       "published_at": "2026-11-15T01:56:13+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062910/",
       "published_at": "2026-11-15T01:55:00+00:00"
      }
     ],
     "places": [
      {
       "name": "טגנרוג, רוסיה",
       "lat": 47.2155,
       "lon": 38.9284
      }
     ]
    },
    {
     "id": "UKRAINE-11150705-03",
     "title": "פגיעת כטב\"ם במפעל פטרוכימי בניז'נקמסק בטטרסטן",
     "summary": "מתקפת כטב\"מים גרמה לשרפה נרחבת במפעל הפטרוכימי ניז'נקמסקנפטכים בעיר ניז'נקמסק שברפובליקת טטרסטן.",
     "axis": "עומק רוסיה / טטרסטן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T02:52:48+00:00",
     "last_update_at": "2026-11-15T05:51:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במפעל אינו מאומת ממקורות רשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_exilenova_supernova_falcon_insight_map_a",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062911/",
       "published_at": "2026-11-15T05:51:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_exilenova_supernova_falcon_insight_map_a",
       "url": "https://kyivindependent.com/fire-reported-at-industrial-facility-in-russias-tatarstan-amid-drone-attack/",
       "published_at": "2026-11-15T03:23:36+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_exilenova_supernova_falcon_insight_map_a",
       "url": "https://t.me/alexmehacarmel/49595",
       "published_at": "2026-11-15T02:52:48+00:00"
      }
     ],
     "places": [
      {
       "name": "ניז'נקמסק, רוסיה",
       "lat": 55.6413,
       "lon": 51.816
      }
     ]
    },
    {
     "id": "UKRAINE-11150705-04",
     "title": "תקיפות רוסיות על זפוריז'יה",
     "summary": "הכוחות הרוסיים ביצעו שמונה תקיפות על העיר זפוריז'יה, גרמו לפציעתם של חמישה בני אדם ולשרפה בבניין מגורים.",
     "axis": "חזית זפוריז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T05:38:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T05:38:00+00:00",
     "last_update_at": "2026-11-15T05:38:00+00:00",
     "what_is_not_verified": "אין פירוט על סוג החימוש ששימש בתקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4184768-russians-strike-zaporizhzhia-eight-times-injuring-five-people-including-an-elderly-woman.html",
       "published_at": "2026-11-15T05:38:00+00:00"
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
     "id": "UKRAINE-11150705-05",
     "title": "הערכת אבדות הצבא הרוסי לפי המטה הכללי האוקראיני",
     "summary": "המטה הכללי של צבא אוקראינה דיווח כי רוסיה איבדה 2,230 חיילים ביממה האחרונה, וסך אבדותיה מאז תחילת הפלישה עומד על כ-1,622,860 חיילים.",
     "axis": "חזית כוללת",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T04:40:00+00:00",
     "last_update_at": "2026-11-15T06:17:00+00:00",
     "what_is_not_verified": "נתוני הנפגעים מבוססים על צד אחד בלבד ואינם מאומתים על ידי צד שלישי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184778-russian-army-loses-another-2230-soldiers-in-war-against-ukraine-over-past-day.html",
       "published_at": "2026-11-15T06:17:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062912/",
       "published_at": "2026-11-15T04:40:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11150705-06",
     "title": "הצעת ארה\"ב לנסיגה מדונבאס תמורת הצטרפות לנאט\"ו",
     "summary": "נשיא אוקראינה ולדימיר זלנסקי מסר כי גורמים אמריקנים העלו לראשונה את האפשרות שאוקראינה תיסוג מחלקי דונבאס שאינם בשליטת רוסיה בתמורה לחברות בנאט\"ו; זלנסקי דחה ויתור אך ציין כי יביא זאת למשאל עם תחת ערבויות ביטחוניות ומימון.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T22:37:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T22:37:25+00:00",
     "last_update_at": "2026-11-15T03:38:18+00:00",
     "what_is_not_verified": "ממשלת ארה\"ב לא אישרה רשמית את פרטי ההצעה כפי שהוצגו על ידי זלנסקי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/15/ukraine-war-briefing-us-proposes-kyiv-cede-land-to-russia-for-nato-membership-zelenskyy-says",
       "published_at": "2026-11-15T03:38:18+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cwvg2l312ylqo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-14T22:37:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11150705-07",
     "title": "דיונים על ערוצי שיח בין אירופה לרוסיה",
     "summary": "השליח קושנר מסר כי הממשל האמריקני מתמקד בקידום שיח ישיר בין מוסקבה לשותפים אירופיים, וכי רעיונות חדשים נבחנים כעת לקראת שיחות משולשות.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T20:54:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T20:54:56+00:00",
     "last_update_at": "2026-11-14T22:01:53+00:00",
     "what_is_not_verified": "תוכן הרעיונות החדשים אינו מפורט בטקסט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2218233",
       "published_at": "2026-11-14T22:01:53+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-now-focused-on-facilitating-direct-engagement-between-russia-europe-kushner-says-after-ukraine-peace-talks/",
       "published_at": "2026-11-14T21:58:47+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2218231",
       "published_at": "2026-11-14T20:54:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11150705-08",
     "title": "שיחות להחלפת שבויים רחבת היקף בין אוקראינה לרוסיה",
     "summary": "נציב זכויות האדם האוקראיני ונציבת זכויות האדם הרוסית דנו במנגנונים להחלפת שבויים בהיקף של לפחות 1,000 איש.",
     "axis": "דיפלומטיה ומשא ומתן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T01:39:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T01:39:00+00:00",
     "last_update_at": "2026-11-15T01:39:00+00:00",
     "what_is_not_verified": "מועד ומיקום ביצוע ההחלפה לא נקבעו או פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184745-lubinets-russian-ombudswoman-discuss-mechanism-for-largescale-prisoner-exchange.html",
       "published_at": "2026-11-15T01:39:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11150705-09",
     "title": "היערכות לפסגה משולשת בסין בשולי מפגש APEC",
     "summary": "הקרמלין אישר כי מתקיימת היערכות לפסגה משולשת בין טראמפ, שי ופוטין בשנג'ן; מנהיגים אירופיים וזלנסקי הביעו חשש מוויתורים על חשבון אוקראינה, בעוד גורמים ציינו כי סוגיית אוקראינה אינה מתוכננת להיות נושא מרכזי בפסגה המשולשת.",
     "axis": "דיפלומטיה בין-לאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T07:00:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T07:00:40+00:00",
     "last_update_at": "2026-11-15T06:22:32+00:00",
     "what_is_not_verified": "קיומה של פגישה דו-צדדית נפרדת בין טראמפ לפוטין טרם אושר רשמית.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/australia-news/2026/nov/15/anthony-albanese-welcomes-trump-xi-putin-summit-even-as-european-leaders-express-reservations",
       "published_at": "2026-11-15T06:22:32+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49582",
       "published_at": "2026-11-14T16:34:29+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133635",
       "published_at": "2026-11-14T16:29:04+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/14/yalta-trump-xi-putin-china-apec",
       "published_at": "2026-11-14T07:00:40+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    },
    {
     "id": "UKRAINE-11150705-10",
     "title": "שיחה בין שרי ההגנה של אוקראינה וקנדה על סיוע צבאי",
     "summary": "שר ההגנה האוקראיני חמארה שוחח עם מקבילו הקנדי מקגינטי על מימון טילי PAC-3 עבור מערכות פטריוט ועל אספקת תחמושת 20 מ\"מ עבור מטוסי קרב מסוג F-16.",
     "axis": "סיוע צבאי וקואליציית רמשטיין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:42:00+00:00",
     "last_update_at": "2026-11-14T18:42:00+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים למשלוח התחמושת לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/14/8062893/",
       "published_at": "2026-11-14T18:42:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11150705-11",
     "title": "טענות אוקראינה להגבלות על מערכת סטארשילד",
     "summary": "נשיא אוקראינה האשים את חברת SpaceX בהטלת הגבלות מהירות פוליטיות על מערכת הלוויינים סטארשילד, המגבילות כטב\"מים צבאיים למהירות מרבית של 161 קמ\"ש ופוגעות בפעילות לאורך החזית.",
     "axis": "טכנולוגיה ולוחמה צבאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T11:05:33+00:00",
     "last_update_at": "2026-11-14T11:05:33+00:00",
     "what_is_not_verified": "חברת SpaceX לא הגיבה רשמית לטענות בדבר המניע הפוליטי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/14/spacex-not-honest-slowing-starshield-elon-musk-volodymyr-zelenskyy",
       "published_at": "2026-11-14T11:05:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11150705-12",
     "title": "דיווח על פגיעה בספינות סוחר ליד חופי רומניה",
     "summary": "שר ההגנה הרומני אישר כי שלוש ספינות מסחריות נפגעו מכטב\"מים סמוך לחופי הים השחור של רומניה במהלך יומיים, וכי נפתחה חקירה בנושא.",
     "axis": "חזית הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T00:19:21+00:00",
     "last_update_at": "2026-11-15T00:19:21+00:00",
     "what_is_not_verified": "זהות המשגרים של הכטב\"מים טרם נקבעה רשמית בחקירה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/three-commercial-ships-struck-by-drones-near-romanias-black-sea-coast-over-two-days/",
       "published_at": "2026-11-15T00:19:21+00:00"
      }
     ],
     "places": [
      {
       "name": "קונסטנצה, רומניה",
       "lat": 44.1767,
       "lon": 28.6508
      }
     ]
    },
    {
     "id": "UKRAINE-11150705-13",
     "title": "הפגזות אוקראיניות על שטחי דונצק",
     "summary": "מקורות רוסיים דיווחו כי כוחות אוקראיניים הפגיזו 32 פעמים יעדים באזור דונצק, תקיפות שהביאו למותו של אזרח אחד ולפציעת ארבעה.",
     "axis": "חזית המזרח / דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T23:27:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T23:27:40+00:00",
     "last_update_at": "2026-11-14T23:27:40+00:00",
     "what_is_not_verified": "אין אימות עצמאי לנתוני ההפגזות והנפגעים שנמסרו על ידי הרשויות הפרו-רוסיות בדונצק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2218237",
       "published_at": "2026-11-14T23:27:40+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת אוקראינה למספר אבדות כוחות רוסיה העומד על יותר מ-1.6 מיליון חיילים.",
    "הדיווח הרוסי על השמדת אוניית משא הנושאת אספקה צבאית בדרכה לאודסה.",
    "ההצעה האמריקנית הנטענת לנסיגת אוקראינה מחלקי דונבאס בתמורה לחברות בנאט\"ו.",
    "הטענה כי הגבלת מהירות התקשורת בסטארשילד נובעת ממניעים פוליטיים של חברת SpaceX.",
    "הדיווח הבריטי על שדרוג טילי איסקנדר לטובת פגיעה מכוונת בגשרים בקייב."
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
     "value": 1.1052,
     "unit": "USD",
     "change_pct": -0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "שלילת ויתורים טריטוריאליים ללא משאל עם וערבויות ביטחון מקיפות",
      "השגת חברות מלאה בברית נאט\"ו ומימון שיקום המדינה",
      "הרחבת הצי האווירי של מטוסי F-16 והסרת מגבלות טכנולוגיות על כטב\"מים"
     ],
     "inferred": [
      "פגיעה בתשתיות הכלכלה והתעשייה הביטחונית בעומק שטח רוסיה כדי להעלות את מחיר המלחמה",
      "מניעת הגעה להסכמות דיפלומטיות בין מעצמות מעל ראשה של קייב"
     ],
     "forecast": [
      "המשך הסתמכות על תקיפות ארוכות טווח באמצעות ייצור מקומי של כטב\"מים",
      "התעקשות על כריכת כל הסדר מדיני בהתחייבויות ביטחוניות מערביות קשיחות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת הסכם כולל על ארכיטקטורת הביטחון באירופה לפני סיום הלחימה",
      "פגיעה ביעדים צבאיים ובתשתיות אספקה המשרתות את צבא אוקראינה"
     ],
     "inferred": [
      "ניתוק רשת החשמל והאנרגיה של אוקראינה לקראת החורף",
      "ניצול מגעים רב-צדדיים עם ארה\"ב וסין לקיבוע שליטתה בשטחים שנכבשו"
     ],
     "forecast": [
      "המשך לחץ צבאי באזור דונבאס לצד שיגור טילים לעבר תשתיות קריטיות באוקראינה",
      "הפעלת מנופי לחץ מדיניים לפתיחת ערוץ הידברות ישיר מול מדינות אירופה"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "קידום מעורבות ישירה בין מוסקבה לשותפים באירופה וגיבוש רעיונות חדשים לפתרון הסכסוך",
      "בחינת מנגנונים מעשיים למניעת עימותים עתידיים"
     ],
     "inferred": [
      "בחינת פשרות טריטוריאליות כדי להביא לסיום מהיר של המלחמה",
      "הפרדת סוגיית אוקראינה ממגעים אסטרטגיים רחבים יותר מול סין"
     ],
     "forecast": [
      "הגברת הלחץ על קייב ועל בנות הברית האירופיות להגדיר קווים גמישים יותר למשא ומתן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwvg2l312ylqo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/14/spacex-not-honest-slowing-starshield-elon-musk-volodymyr-zelenskyy",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/three-commercial-ships-struck-by-drones-near-romanias-black-sea-coast-over-two-days/",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/14/8062893/",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2218237",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133635",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49582",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4184745-lubinets-russian-ombudswoman-discuss-mechanism-for-largescale-prisoner-exchange.html",
     "accessed_at": "2026-11-15T07:05:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T16:42:29+00:00",
  "changes": {
   "UKRAINE-11150705-01": {
    "kind": "new"
   },
   "UKRAINE-11150705-02": {
    "kind": "new"
   },
   "UKRAINE-11150705-03": {
    "kind": "new"
   },
   "UKRAINE-11150705-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הרוגים ופצועים בתקיפות באזור זפוריז'יה",
    "score": 0.817
   },
   "UKRAINE-11150705-05": {
    "kind": "new"
   },
   "UKRAINE-11150705-06": {
    "kind": "new"
   },
   "UKRAINE-11150705-07": {
    "kind": "new"
   },
   "UKRAINE-11150705-08": {
    "kind": "new"
   },
   "UKRAINE-11150705-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פסגה משולשת מתוכננת בין רוסיה, סין וארצות הברית",
    "score": 1.0
   },
   "UKRAINE-11150705-10": {
    "kind": "new"
   },
   "UKRAINE-11150705-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הגבלות על מערכת סטארשילד באוקראינה",
    "score": 1.0
   },
   "UKRAINE-11150705-12": {
    "kind": "possible",
    "prev": "תקיפת ספינת מששא מול חופי רומניה",
    "score": 0.467
   },
   "UKRAINE-11150705-13": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-15T0049__north-202611150049.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-15T00:49:07+00:00",
   "window": {
    "from": "2026-11-14T00:49:07+00:00",
    "to": "2026-11-15T00:49:07+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611150049"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית ואיסופית של ישראל בדרום לבנון ובדרום סוריה, הכוללת תקיפות מהאוויר ועבודות הנדסיות במרחב הגבול. במקביל, השלטונות בדמשק ובביירות מתמודדים עם אתגרי פנים מורכבים הכוללים פיגועי תופת, הברחות נשק ומשבר פליטים. ברמה האזורית, טורקיה מחזקת בריתות ביטחוניות בעלות זיקה לסוריה, בעוד גורמים בישראל מתנים הסדרים עתידיים בהרחקת כוחותיה מהזירה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "חיכוך צבאי מתמשך הכולל תקיפות אוויריות ואיסוף מודיעיני ישראלי מול לחצים להסדרת מנדט יוניפי\"ל ויישום החלטה 1701"
    },
    {
     "name": "דמשק ודרום סוריה",
     "status": "חוסר יציבות פנימי ופיגועי תופת לצד פעילות קרקעית הנדסית של ישראל בגבול דרעא"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "מאמצי אכיפה של צבא לבנון נגד מחסני נשק בפרברי ביירות ברקע משבר כלכלי ואתגרי פליטים"
    },
    {
     "name": "מעורבות טורקיה בזירה הצפונית",
     "status": "העמקת תיאום והסכמי הגנה אזוריים הנוגעים לסוריה מול דרישות ישראליות לסילוק כוחותיה מהמרחב הסורי"
    }
   ],
   "events": [
    {
     "id": "NORTH-11150049-01",
     "title": "פיצוץ מכונית תופת בפרבר של דמשק",
     "summary": "מטען שהוטמן במכונית התפוצץ בעיר ג'רמאנא שבפרברי דמשק, וגרם למותם של אב ובתו ולפציעת אדם נוסף, בעוד כוחות הביטחון פתחו בחקירה.",
     "axis": "דמשק ודרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:51:01+00:00",
     "last_update_at": "2026-11-14T22:43:12+00:00",
     "what_is_not_verified": "זהות המבצעים המדויקת לא אומתה, אם כי בעבר יוחסו פיגועים דומים לתאי המדינה האסלאמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/14/explosion-near-syrias-capital-kills-father-and-child?traffic_source=rss",
       "published_at": "2026-11-14T22:43:12+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/car-bomb-near-syria-capital-kills-two-people-including-child",
       "published_at": "2026-11-14T21:14:41+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/14/deadly-car-bomb-blast-kills-two-near-syrias-capital?traffic_source=rss",
       "published_at": "2026-11-14T19:46:36+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/2-killed-including-girl-in-car-blast-in-syria-s-rural-damascus/4125396",
       "published_at": "2026-11-14T18:51:01+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'רמאנא, סוריה",
       "lat": 33.4864,
       "lon": 36.3483
      }
     ]
    },
    {
     "id": "NORTH-11150049-02",
     "title": "תקיפה אווירית ישראלית בדרום לבנון",
     "summary": "כלי טיס של חיל האוויר הישראלי ביצע תקיפה בפאתי הכפר קנטרה לכיוון ואדי אל-חג'יר שבדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:28:21+00:00",
     "last_update_at": "2026-11-14T16:28:21+00:00",
     "what_is_not_verified": "היקף הנפגעים או הנזק המדויק בתקיפה לא פורט בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_86b7b6be3b90edf4",
       "url": "https://english.almanar.com.lb/article/150897/",
       "published_at": "2026-11-14T16:28:21+00:00"
      }
     ],
     "places": [
      {
       "name": "קנטרה, לבנון",
       "lat": 33.2735,
       "lon": 35.4591
      }
     ]
    },
    {
     "id": "NORTH-11150049-03",
     "title": "פשיטת צבא לבנון על מחסן אמצעי לחימה בפרבר הדרומי של ביירות",
     "summary": "כוחות צבא לבנון ערכו מבצע ביטחוני מיוחד באזור ע'בירי, פשטו על מחסן אמצעי לחימה, החרימו כמות גדולה של נשק ותחמושת ועצרו חשוד אחד לחקירה.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:17:37+00:00",
     "last_update_at": "2026-11-14T16:17:37+00:00",
     "what_is_not_verified": "ההודעה הרשמית של צבא לבנון לא ציינה לאיזה ארגון השתייכו אמצעי הלחימה שנתפסו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6fc8f5206f6fae30",
       "url": "https://www.newarab.com/news/lebanese-army-says-seized-arms-depot-southern-beirut-suburb",
       "published_at": "2026-11-14T16:17:37+00:00"
      }
     ],
     "places": [
      {
       "name": "ע'בירי, לבנון",
       "lat": 33.8598,
       "lon": 35.5057
      }
     ]
    },
    {
     "id": "NORTH-11150049-04",
     "title": "שריפה כילתה מחנה פליטים סורים בבקעת הלבנון",
     "summary": "דליקה שפרצה במחנה פליטים סורים בבר אליאס החריבה עשרות אוהלים והותירה כחמש מאות בני אדם ללא קורת גג, ללא נפגעים בנפש.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T12:34:16+00:00",
     "last_update_at": "2026-11-14T23:12:18+00:00",
     "what_is_not_verified": "הגורם לפרוץ השריפה במחנה לא צוין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/fire-destroys-syrian-refugee-camp-in-lebanon-leaving-nearly-500-homeless/4125459",
       "published_at": "2026-11-14T23:12:18+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967994/fire-breaks-out-at-syrian-refugee-camp-in-bar-elias-video/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967994",
       "published_at": "2026-11-14T12:34:16+00:00"
      }
     ],
     "places": [
      {
       "name": "בר אליאס, לבנון",
       "lat": 33.7744,
       "lon": 35.9044
      }
     ]
    },
    {
     "id": "NORTH-11150049-05",
     "title": "עבודות הנדסיות של צה\"ל לסלילת דרך בדרום סוריה",
     "summary": "יחידות הנדסה של צה\"ל החלו בעבודות לפינוי שטח ולהקמת דרך חדשה באזור ואדי סיחאן בסמוך לכפר עבידין במערב מחוז דרעא.",
     "axis": "דמשק ודרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T12:59:12+00:00",
     "last_update_at": "2026-11-14T12:59:12+00:00",
     "what_is_not_verified": "המידע נסמך על מקור רוסי בלבד וטרם התקבל אישור רשמי מגורמים ישראליים או סוריים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49576",
       "published_at": "2026-11-14T12:59:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11150049-06",
     "title": "הפעלת טייסת כטב\"מים ייעודית של השב\"כ בדרום לבנון",
     "summary": "טייסת כלי טיס בלתי מאוישים שהוקמה בשירות הביטחון הכללי פועלת באופן מבצעי עצמאי בדרום לבנון, לצד פעילותה ברצועת עזה וביהודה ושומרון.",
     "axis": "דרום לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T17:45:43+00:00",
     "last_update_at": "2026-11-14T17:45:43+00:00",
     "what_is_not_verified": "היקף הפעילות המדויק וסוגי הכלים המופעלים בזירה הלבנונית נותרו חסויים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21850469",
       "published_at": "2026-11-14T17:45:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11150049-07",
     "title": "טורקיה וקטאר חתמו על הסכם הגנה הדדית עם התייחסות לסוריה",
     "summary": "באיסטנבול נחתם הסכם הגנה משותף בין טורקיה לקטאר הכולל התחייבות לסיוע הדדי במקרה של תקיפה חיצונית ועמדות מתואמות בנושאי ביטחון אזורי וסוריה.",
     "axis": "מעורבות טורקיה בזירה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T06:55:03+00:00",
     "last_update_at": "2026-11-14T15:28:52+00:00",
     "what_is_not_verified": "פרטי התיאום המבצעי המדויקים בסוריה לא פורטו בהצהרה המשותפת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95030",
       "published_at": "2026-11-14T15:28:52+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/politics/turkiye-qatar-reaffirm-defense-ties-call-for-diplomacy-on-iran/4124881",
       "published_at": "2026-11-14T06:55:03+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "NORTH-11150049-08",
     "title": "הצהרת נשיא לבנון בנוגע להחלטה 1701 ומנדט יוניפי\"ל",
     "summary": "נשיא לבנון הדגיש בפני סגנית מזכ\"ל האו\"ם כי חידוש מנדט כוח יוניפי\"ל הוא עדיפות עליונה, וכי החלטה 1701 חייבת להישאר הבסיס החוקי לכל הסדר ביטחוני בדרום המדינה.",
     "axis": "דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T08:16:26+00:00",
     "last_update_at": "2026-11-14T08:16:26+00:00",
     "what_is_not_verified": "טרם סוכם מנגנון חלופי רשמי למניעת ואקום ביטחוני במידה והמנדט ישתנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967967/aoun-unifils-mandate-must-be-renewed-with-resolution-1701-remaining-th/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967967",
       "published_at": "2026-11-14T08:16:26+00:00"
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
     "id": "NORTH-11150049-09",
     "title": "דיווח על מגעים להסדר ביטחוני ישראלי מול סוריה בדרישה לסילוק כוחות זרים",
     "summary": "פורסם כי בישראל נבחנת אפשרות להסכם ביטחוני מול דמשק שיכלול אזור מפורז בדרום סוריה וחזרה להסכם 1974 למעט מוצב החרמון, לצד דרישה לפינוי כוחות טורקיים ורוסיים מהמדינה.",
     "axis": "דמשק ודרום סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T04:07:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T04:07:41+00:00",
     "last_update_at": "2026-11-14T04:07:41+00:00",
     "what_is_not_verified": "המגעים מול גורמים אמריקניים נסמכים על הדלפה בעיתונות הלבנונית ולא אומתו רשמית בירושלים או בדמשק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49572",
       "published_at": "2026-11-14T04:07:41+00:00"
      }
     ],
     "places": [
      {
       "name": "הר החרמון, סוריה",
       "lat": 33.4169,
       "lon": 35.8564
      }
     ]
    }
   ],
   "not_verified": [
    "זהות האחראים לפיצוץ מכונית התופת בג'רמאנא שבסוריה טרם נקבעה באופן רשמי.",
    "הדיווח הרוסי על אודות סלילת ציר חדש בידי כוחות הנדסה של צה\"ל באזור דרעא בסוריה לא אושר בידי ישראל.",
    "ההשתייכות הארגונית של מחסן הנשק והתחמושת שנתפס בפרבר הדרומי של ביירות לא צוינה בהודעת צבא לבנון.",
    "הדיווחים על יוזמה ישראלית להסכם ביטחוני מול דמשק והתנייתו בנסיגת כוחות טורקיה נשענים על מקורות תקשורתיים בלבד."
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "סיכול התעצמות ואיומי טרור בקרבת הגבולות הצפוניים.",
      "שמירה על חופש פעולה ביטחוני עצמאי של גופי המודיעין וצה\"ל."
     ],
     "inferred": [
      "יצירת מרחב אבטחה מפורז מנשק כבד בדרום סוריה תוך שימור נקודות תצפית שולטות בחרמון.",
      "בלימת ההשפעה והנוכחות הצבאית של טורקיה ורוסיה בסוריה."
     ],
     "forecast": [
      "המשך פעילות איסוף באמצעות כטב\"מים ותקיפות מדויקות נגד התארגנויות חשודות בדרום לבנון."
     ]
    },
    {
     "actor": "לבנון (הממשל וצבא לבנון)",
     "declared": [
      "הבטחת הארכת המנדט של כוח יוניפי\"ל ושימור החלטה 1701 כבסיס לכל הסדר ביטחוני.",
      "הכפפת אמצעי הלחימה במדינה לסמכות בלעדית של מוסדות המדינה."
     ],
     "inferred": [
      "ריסון השפעתו הצבאית והעצמאית של חזבאללה ללא גרימת מלחמת אזרחים פנימית.",
      "הפחתת הסיכון לעימות ישיר עם ישראל במטרה לקדם שיקום כלכלי."
     ],
     "forecast": [
      "המשך פשיטות נקודתיות של הצבא על מצבורי תחמושת לצד הימנעות מעימות חזיתי כולל."
     ]
    },
    {
     "actor": "סוריה (שלטון המעבר)",
     "declared": [
      "חקירת אירועי הטרור, השבת היציבות הביטחונית ועידוד כניסת אזרחים זרים ותיירות.",
      "הפעלת כוחות ביטחון פנים להגנה על ריכוזי אוכלוסייה."
     ],
     "inferred": [
      "בלימת התעוררות תאי המדינה האסלאמית לאחר חילופי השלטון בדמשק.",
      "מניעת חיכוך צבאי ישיר עם ישראל במרחב הגבול הדרומי."
     ],
     "forecast": [
      "המשך התמודדות מורכבת עם פיגועי חבלה בפרברי הבירה ומאמץ לייצב את מעברי הגבול."
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "חיזוק קשרי ההגנה והסחר עם קטאר וגיבוש עמדות משותפות בנושאי ביטחון אזורי וסוריה.",
      "התנגדות לפגיעה באוכלוסייה אזרחית במרחב המזרח התיכון."
     ],
     "inferred": [
      "שמירה על אחיזה ומעמד השפעה מכריע בסוריה למרות לחצים מדיניים לנסיגת כוחותיה.",
      "ביצור מעמדה ככוח אזורי מוביל באמצעות בריתות הגנה הדדיות."
     ],
     "forecast": [
      "סירוב לסגת מהשטחים שבשליטתה בסוריה ללא ערבויות ביטחוניות לאינטרסים שלה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/14/deadly-car-bomb-blast-kills-two-near-syrias-capital?traffic_source=rss",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/150897/",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/politics/turkiye-qatar-reaffirm-defense-ties-call-for-diplomacy-on-iran/4124881",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21850469",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/967967/aoun-unifils-mandate-must-be-renewed-with-resolution-1701-remaining-th/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967967",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanese-army-says-seized-arms-depot-southern-beirut-suburb",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49572",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95030",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T07:02:45+00:00",
  "changes": {
   "NORTH-11150049-01": {
    "kind": "new"
   },
   "NORTH-11150049-02": {
    "kind": "new"
   },
   "NORTH-11150049-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תפיסת מחסן אמצעי לחימה בפרברי ביירות",
    "score": 0.65
   },
   "NORTH-11150049-04": {
    "kind": "new"
   },
   "NORTH-11150049-05": {
    "kind": "possible",
    "prev": "העברת נפט עיראקי דרך שטח סוריה",
    "score": 0.467
   },
   "NORTH-11150049-06": {
    "kind": "possible",
    "prev": "ירי ארטילרי ישראלי לעבר עיירות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11150049-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חתימת הסכם הגנה הדדי בין טורקיה לקטר",
    "score": 1.0
   },
   "NORTH-11150049-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מגעים דיפלומטיים להחלפת כוח יוניפי\"ל בדרום לבנון",
    "score": 0.817
   },
   "NORTH-11150049-09": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "דיווח על מתווה ביטחוני בין ישראל לדמשק ביוזמת איזנקוט",
    "score": 1.0
   }
  }
 }
};
