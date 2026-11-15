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
  "draft": "drafts/iran/2026-11-15T1722__iran-202611151722.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-15T17:22:41+00:00",
   "window": {
    "from": "2026-11-14T17:22:41+00:00",
    "to": "2026-11-15T17:22:41+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611151722"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתרחב לתקיפות ישירות במפרץ, לצד איומים על חופש השיט והאצת תוכנית הגרעין. טהראן שיגרה כטב\"מים לעבר בסיס אמריקאי בבחריין והפעילה מיקוש ימי במצר הורמוז, בעוד שלוחיה החות'ים מגבירים את הלחץ בים סוף ובסעודיה. במקביל, ישראל מגבירה את התיאום המודיעיני עם הממשל האמריקאי ונערכת להסלמה רב-זירתית נוכח התקדמות הפעילות הגרעינית האיראנית.",
   "fronts": [
    {
     "name": "מפרץ בחריין",
     "status": "חידוש תקיפות כטב\"מים איראניות לעבר מתקנים אמריקאיים ויירוטים של צבא בחריין"
    },
    {
     "name": "מצר הורמוז",
     "status": "חסימה ואכיפה איראנית אלימה הכוללת פיצוץ מכליות באמצעות מוקשים ימיים"
    },
    {
     "name": "הזירה התימנית והים האדום",
     "status": "התקדמות החות'ים באזור באב אל-מנדב וירי רקטי וכטב\"מים לעבר יעדים בסעודיה"
    },
    {
     "name": "הציר המודיעיני-מדיני (ישראל-ארה\"ב-איראן)",
     "status": "היערכות ביטחונית ותיאום מודיעיני מול האצת תוכניות הגרעין והטילים בטהראן"
    }
   ],
   "events": [
    {
     "id": "IRAN-11151722-01",
     "title": "מתקפת כטב\"מים איראנית לעבר מתקן מכ\"ם ובסיס אמריקאי בבחריין ויירוטם",
     "summary": "משמרות המהפכה האיראניים שיגרו כטב\"מים לעבר מתקן מכ\"ם של ההגנה האווירית האמריקאית בבסיס בבחריין. מערכות ההגנה של בחריין יירטו את כלי הטיס, ומדינות באזור כדוגמת סעודיה, מצרים, ירדן וקטר גינו את המתקפה.",
     "axis": "איראן מול ארה\"ב ומדינות המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T08:11:35+00:00",
     "last_update_at": "2026-11-15T16:46:30+00:00",
     "what_is_not_verified": "מידת הפגיעה המדויקת במכ\"ם והנזק שנגרם בשטח לא אומתו באופן עצמאי מעבר לטענות הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
       "published_at": "2026-11-15T16:46:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/nov/15/middle-east-crisis-live-iran-bahrain-strikes-gulf-donald-trump-us-israel-yemen-houthis",
       "published_at": "2026-11-15T15:59:04+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/iran-claims-drone-attack-on-us-military-base-in-bahrain",
       "published_at": "2026-11-15T15:29:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/bahrain-says-air-defences-destroyed-several-iranian-drones-attacking-us-base",
       "published_at": "2026-11-15T13:55:32+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133679",
       "published_at": "2026-11-15T13:40:04+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/15/bahrain-accuses-iran-of-attacking-its-territory-to-settle-score-with-us?traffic_source=rss",
       "published_at": "2026-11-15T12:36:19+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/iran-targets-us-military-radar-in-bahrain-in-retaliatory-drone-strikes?traffic_source=rss",
       "published_at": "2026-11-15T12:15:51+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-joins-condemnation-iranian-attacks-bahrain",
       "published_at": "2026-11-15T11:46:46+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261115-iran-claims-attack-on-us-military-airbase-in-bahrain",
       "published_at": "2026-11-15T09:57:35+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961449",
       "published_at": "2026-11-15T08:11:35+00:00"
      }
     ],
     "places": [
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      },
      {
       "name": "א-רפאע, בחריין",
       "lat": 26.1315,
       "lon": 50.5503
      }
     ]
    },
    {
     "id": "IRAN-11151722-02",
     "title": "פיצוץ וטביעת מכליות נפט ממוקשים ימיים במצר הורמוז",
     "summary": "הצי ומשמרות המהפכה של איראן טענו כי מכליות נפט עלו באש וטבעו לאחר שפגעו במוקשים ימיים בעת שניסו לחצות נתיב אסור בדרום מצר הורמוז, והזהירו כלי שיט נוספים שלא להפר את ההנחיות.",
     "axis": "חופש השיט ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T23:46:29+00:00",
     "last_update_at": "2026-11-15T15:30:14+00:00",
     "what_is_not_verified": "זהות המכליות שטבעו או ניזוקו ומספרן המדויק (שתיים או שלוש) לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-oil-tankers-ablaze-after-striking-naval-mines-strait-hormuz",
       "published_at": "2026-11-15T15:30:14+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkpkuvwrzg",
       "published_at": "2026-11-15T13:58:32+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/irans-navy-says-three-tankers-fire-after-hitting-mines-hormuz",
       "published_at": "2026-11-14T23:46:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-03",
     "title": "הסלמה מול החות'ים בתימן ונסיגת כוחות הנתמכים בידי סעודיה",
     "summary": "כוחות ממשלת תימן הנתמכים בידי סעודיה נסוגו מאזור מצר באב אל-מנדב לכיוון עדן, בעוד הקואליציה בראשות סעודיה יירטה שני טילים בליסטיים וכטב\"מים ששיגרו החות'ים לעבר ריאד והמחוז המזרחי.",
     "axis": "תימן והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T03:46:26+00:00",
     "last_update_at": "2026-11-15T16:46:30+00:00",
     "what_is_not_verified": "היקף הנזק המלא והשליטה המוחלטת בנתיבי השיט בים סוף לא אומתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
       "published_at": "2026-11-15T16:46:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/yemeni-government-force-retreats-strait-major-setback-war-against-houthis",
       "published_at": "2026-11-15T08:46:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-led-coalition-intercepts-missiles-towards-riyadh-drones-eastern-province",
       "published_at": "2026-11-15T03:46:26+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר באב אל-מנדב, תימן",
       "lat": 12.6671,
       "lon": 43.4565
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "IRAN-11151722-04",
     "title": "שיחות של ראש המוסד בארה\"ב ועדכון הקבינט בישראל בנושא איראן",
     "summary": "ראש המוסד שב מביקור בארצות הברית שבו שיתף מידע מודיעיני עם בכירים אמריקאים וראש הסי-אי-איי, והגיע לתדרך את שרי הקבינט המדיני-ביטחוני ואת ראש הממשלה בנוגע לאיראן.",
     "axis": "תיאום ישראל-ארה\"ב מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:55:01+00:00",
     "last_update_at": "2026-11-15T16:24:02+00:00",
     "what_is_not_verified": "תוכן המידע המודיעיני שהועבר ופרטי הדיונים הסגורים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388736",
       "published_at": "2026-11-15T16:24:02+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21857285",
       "published_at": "2026-11-15T16:16:43+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sy9qslprfg",
       "published_at": "2026-11-15T15:55:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-05",
     "title": "התרעת ראש ממשלת ישראל מפני חידוש תוכנית הגרעין האיראנית",
     "summary": "ראש הממשלה נתניהו הצהיר כי איראן פועלת לחדש את תוכנית הגרעין שלה, העשרת האורניום ופיתוח הנשק, וקרא להקמת ממשלת אחדות לאומית כדי להסיר איום קיומי זה.",
     "axis": "הגרעין האיראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T17:45:01+00:00",
     "last_update_at": "2026-11-14T18:27:05+00:00",
     "what_is_not_verified": "הסטטוס המדויק של חידוש העשרת האורניום המואצת באיראן לא אומת מעבר להצהרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49585",
       "published_at": "2026-11-14T18:27:05+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133641",
       "published_at": "2026-11-14T17:45:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-06",
     "title": "איראן מפתחת מערכת היתוך גרעיני ראשונה מייצור מקומי",
     "summary": "ראש הארגון לאנרגיה אטומית של איראן הודיע כי המדינה נערכת להפעיל מערכת היתוך גרעיני ראשונה שפותחה כולה באופן מקומי.",
     "axis": "הגרעין האיראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:38:50+00:00",
     "last_update_at": "2026-11-15T15:38:50+00:00",
     "what_is_not_verified": "היכולת המבצעית והטכנולוגית הממשית של מערכת ההיתוך המוצהרת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86322711/Iran-to-launch-first-fully-indigenous-nuclear-fusion-system",
       "published_at": "2026-11-15T15:38:50+00:00"
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
     "id": "IRAN-11151722-07",
     "title": "הערכות מודיעין אמריקאיות על מלאי הטילים של איראן",
     "summary": "הערכות מודיעין בארצות הברית מצביעות על כך שאיראן מחזיקה כ-2,500 טילים וממשיכה לשקם את מחסניה באמצעות רכיבים שנאגרו מראש, למרות פגיעות קודמות במתקני ייצור.",
     "axis": "מערך הטילים של איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T08:32:48+00:00",
     "last_update_at": "2026-11-15T08:32:48+00:00",
     "what_is_not_verified": "המספר המדויק של הטילים התקינים ויכולת הייצור בפועל לא אומתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95034",
       "published_at": "2026-11-15T08:32:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-08",
     "title": "האשמת איראן את ישראל בניסיון יצירת 'דגל כוזב' בסייבר מול צרפת",
     "summary": "דובר משמרות המהפכה דחה טענות של צרפת על תקיפת סייבר איראנית נגד מערכות קירור במרכולים, וטען כי מדובר במבצע 'דגל כוזב' ישראלי שנועד להסית מדינות באירופה נגד טהראן.",
     "axis": "סייבר ולוחמה חשאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T11:50:59+00:00",
     "last_update_at": "2026-11-15T11:50:59+00:00",
     "what_is_not_verified": "זהות מבצעי מתקפת הסייבר על המרכולים בצרפת לא אומתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-blames-israel-cyber-attack-supermarket-fridges",
       "published_at": "2026-11-15T11:50:59+00:00"
      }
     ],
     "places": [
      {
       "name": "פריז, צרפת",
       "lat": 48.8535,
       "lon": 2.3484
      }
     ]
    },
    {
     "id": "IRAN-11151722-09",
     "title": "פרסום על חטיפת וחיסול קצינים איראנים בידי המוסד בעבר",
     "summary": "תחקיר עיתונאי חשף כי ישראל חטפה בעבר שני גנרלים איראנים בטורקיה ובסוריה לצורך חקירה בניסיון לאתר מידע על רון ארד, כאשר אחד מהם חוסל וגופתו הושלכה לים והשני שוחרר בדרום אפריקה.",
     "axis": "מבצעים חשאיים ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T11:45:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T11:45:24+00:00",
     "last_update_at": "2026-11-15T12:03:05+00:00",
     "what_is_not_verified": "פרטי המבצעים ההיסטוריים, מקום מותם או נסיבות שחרורם מבוססים על הדלפות ומקורות עבר ולא על הודעה ישראלית רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49598",
       "published_at": "2026-11-15T12:03:05+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95037",
       "published_at": "2026-11-15T12:01:33+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
       "published_at": "2026-11-15T11:45:24+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "IRAN-11151722-10",
     "title": "תרגול היערכות צה\"ל לתרחישי הסלמה ושיבוש קשר מול איראן ושלוחותיה",
     "summary": "אגף התקשוב בצה\"ל ביצע תרגיל בפיקוד הצפון ובפיקוד הדרום המדמה אובדן קשר ושיבוש מערכות במסגרת היערכות להסלמה מול איראן והצטרפות שלוחותיה לתקיפת העורף הישראלי.",
     "axis": "היערכות צבאית ישראלית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T07:07:25+00:00",
     "last_update_at": "2026-11-15T07:07:25+00:00",
     "what_is_not_verified": "מועד התממשות תרחישי ההסלמה וההיקף של מעורבות השלוחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961437",
       "published_at": "2026-11-15T07:07:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-11",
     "title": "טענה איראנית לשינוי ראש קרב בטיל ח'ורמשהר לטווח בסיסים אמריקאיים באירופה",
     "summary": "הטלוויזיה הממלכתית באיראן דיווחה כי שינוי משקלו של ראש הקרב בטיל הבליסטי ח'ורמשהר יאפשר לפגוע בבסיסים של צבא ארצות הברית המוצבים באירופה.",
     "axis": "מערך הטילים של איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T19:46:06+00:00",
     "last_update_at": "2026-11-14T19:46:06+00:00",
     "what_is_not_verified": "ההיתכנות הטכנולוגית המבצעית והטווח האמיתי של הטיל לאחר שינוי המשקל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133648",
       "published_at": "2026-11-14T19:46:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-12",
     "title": "ביקורת רוסית על הלחץ המערבי בסבא\"א סביב הגרעין האיראני",
     "summary": "רוסיה מתחה ביקורת על מדינות המערב וטענה כי הן מנצלות את מנגנוני הפיקוח של הסוכנות הבינלאומית לאנרגיה אטומית להפעלת לחץ פוליטי על טהראן, דבר הפוגע בניטרליות הסוכנות.",
     "axis": "המישור המדיני-בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T16:42:26+00:00",
     "last_update_at": "2026-11-15T16:42:26+00:00",
     "what_is_not_verified": "ההשפעה הממשית של עמדת רוסיה על דיוני מועצת הנגידים של סבא\"א.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86322767/Russia-says-Western-pressure-on-Iran-undermines-IAEA-impartiality",
       "published_at": "2026-11-15T16:42:26+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר מכליות הנפט שטבעו או נפגעו בפועל במצר הורמוז וזהותן",
    "מידת הפגיעה הממשית במתקן המכ\"ם האמריקאי בבסיס בבחריין",
    "רמת ההתקדמות המבצעית של פרויקט ההיתוך הגרעיני המוצהר באיראן",
    "מספר הטילים המבצעיים המדויק שנותר בידי איראן וקצב הייצור הנוכחי",
    "מעורבות איראנית ישירה במתקפת הסייבר על מערכות קירור בצרפת",
    "ההערכות והפרטים המודיעיניים ההיסטוריים שנחשפו לגבי נסיבות מותם או היעלמותם של רון ארד והקצינים האיראנים"
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
      "תקיפת יעדים של מדינות המשתפות פעולה צבאית עם ארה\"ב כמענה לגיטימי",
      "אכיפת איסור מעבר בנתיבים מוגדרים במצר הורמוז",
      "פיתוח יכולות טכנולוגיות גרעיניות עצמאיות"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וכלכלי ישיר על וושינגטון ובעלות בריתה במפרץ באמצעות שיבוש נתיבי סחר",
      "הרחבת טווח האיום הטילאי כדי להרתיע את המערב מפעולה ישירה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות באמצעות כטב\"מים ושמירה על הגבלות השיט במצר הורמוז",
      "המשך קידום אלמנטים בתוכנית הגרעין ושיקום מערכי הטילים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול תוכנית הגרעין האיראנית ומניעת השגת נשק להשמדה המונית",
      "הקמת ממשלת אחדות לאומית לצורך התמודדות עם האיומים הביטחוניים"
     ],
     "inferred": [
      "חיזוק התיאום המבצעי והמודיעיני עם ארצות הברית לקראת אפשרות של פעולה צבאית",
      "הכנת המערכות הצבאיות והתקשוביות לתרחיש של מלחמה אזורית בכמה חזיתות"
     ],
     "forecast": [
      "הגברת שיתוף המודיעין עם גורמי ביטחון אמריקאיים",
      "המשך אימונים ותרגולים של כוחות צה\"ל לתרחישי הסלמה ישירים"
     ]
    },
    {
     "actor": "ארצות הברית ומדינות המפרץ",
     "declared": [
      "גינוי תקיפות איראן כהפרה של החוק הבינלאומי ועקרונות השכנות הטובה",
      "הפעלת מערכות הגנה אוויריות להגנה על המרחב הריבוני והבסיסים"
     ],
     "inferred": [
      "שמירה על נוכחות צבאית במפרץ תוך ניסיון למנוע פגיעה בתשתיות אסטרטגיות ובנתיבי אנרגיה",
      "בלימת ההתפשטות של השלוחות האיראניות בתימן ובאזור באב אל-מנדב"
     ],
     "forecast": [
      "חיזוק מערכי ההגנה האווירית בבחריין ובסעודיה",
      "המשך יירוט איומים בליסטיים וכטב\"מים בתימן ובמפרץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/iran-targets-us-military-radar-in-bahrain-in-retaliatory-drone-strikes?traffic_source=rss",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-led-coalition-intercepts-missiles-towards-riyadh-drones-eastern-province",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261115-iran-claims-attack-on-us-military-airbase-in-bahrain",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/nov/15/middle-east-crisis-live-iran-bahrain-strikes-gulf-donald-trump-us-israel-yemen-houthis",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86322767/Russia-says-Western-pressure-on-Iran-undermines-IAEA-impartiality",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388736",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-blames-israel-cyber-attack-supermarket-fridges",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133648",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49598",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95037",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383961437",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sy9qslprfg",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T00:40:22+00:00",
  "changes": {
   "IRAN-11151722-01": {
    "kind": "new"
   },
   "IRAN-11151722-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה במיכליות נפט במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11151722-03": {
    "kind": "new"
   },
   "IRAN-11151722-04": {
    "kind": "possible",
    "prev": "הדחת מפקדי ספינות מלחמה של צבא ארה\"ב בזירת איראן",
    "score": 0.467
   },
   "IRAN-11151722-05": {
    "kind": "new"
   },
   "IRAN-11151722-06": {
    "kind": "new"
   },
   "IRAN-11151722-07": {
    "kind": "new"
   },
   "IRAN-11151722-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הכחשת משמרות המהפכה לתקיפות סייבר בצרפת והאשמת ישראל",
    "score": 0.65
   },
   "IRAN-11151722-09": {
    "kind": "new"
   },
   "IRAN-11151722-10": {
    "kind": "new"
   },
   "IRAN-11151722-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "איום טלוויזיוני באיראן בטיל מותאם נגד בסיסים באירופה",
    "score": 1.0
   },
   "IRAN-11151722-12": {
    "kind": "possible",
    "prev": "חשש סבא\"א ממתקן העשרה איראני באיספהאן",
    "score": 0.467
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
  "draft": "drafts/north/2026-11-15T1725__north-202611151725.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-15T17:25:38+00:00",
   "window": {
    "from": "2026-11-14T17:25:38+00:00",
    "to": "2026-11-15T17:25:38+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611151725"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית קרקעית ואווירית אינטנסיבית של כוחות צה\"ל בדרום לבנון להשמדת תשתיות תת-קרקעיות של חיזבאללה, לצד תקיפות ארטילריות ואוויריות נרחבות. במקביל נרשמת דריכות מדינית בביירות סביב תום מנדט כוח יוניפי\"ל וביקורים דיפלומטיים מערביים וערביים. בסוריה נמשכת אי-היציבות הביטחונית המתבטאת בפיגועי מטענים בפרברי הבירה לצד ניסיונות של השלטון להרחיב תיאום כלכלי ואזורי.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות מבצעית שוטפת של צה\"ל להשמדת תשתיות חיזבאללה, תקיפות באש והפגזות יומיומיות"
    },
    {
     "name": "הזירה הפנימית בסוריה",
     "status": "פיגועי טרור ומטעני חבלה באזור דמשק לצד מאמצי שיקום ותיאום גבולות מול ירדן"
    },
    {
     "name": "הזירה הפוליטית-מדינית בלבנון",
     "status": "מגעים דיפלומטיים סביב מנדט יוניפי\"ל והסדרים עתידיים בהשתתפות נציגי ארה\"ב וסעודיה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11151725-01",
     "title": "השמדת תוואי תת-קרקעי של חיזבאללה במג'דל זון בדרום לבנון",
     "summary": "כוחות חטיבה 300 בפיקוד אוגדה 91 ובשיתוף יהל\"ם השמידו תוואי תת-קרקעי באורך של כ-35 מטרים ובו שני חדרי שהייה בכפר מג'דל זון להסרת איומים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T15:05:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:05:46+00:00",
     "last_update_at": "2026-11-15T15:17:23+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21856851",
       "published_at": "2026-11-15T15:17:23+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388711",
       "published_at": "2026-11-15T15:13:13+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25610",
       "published_at": "2026-11-15T15:05:46+00:00"
      }
     ],
     "places": [
      {
       "name": "מג'דל זון, לבנון",
       "lat": 33.1503,
       "lon": 35.226
      }
     ]
    },
    {
     "id": "NORTH-11151725-02",
     "title": "תקיפות אוויריות, ארטילריה ופיצוצים יזומים של צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות אוויריות, ירי ארטילרי ופיצוצים יזומים במספר כפרים ואזורים בדרום לבנון, בהם כפרתבנית, אלקנטרה, אל-ח'יאם, ואדי אל-חג'יר וחדאת'א, לצד טיסות מטוסי קרב בגובה נמוך מעל ביירות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T08:57:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T08:57:58+00:00",
     "last_update_at": "2026-11-15T12:26:22+00:00",
     "what_is_not_verified": "פירוט היקף הנפגעים או הנזקים כתוצאה מהתקיפות לא צוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151167/",
       "published_at": "2026-11-15T12:26:22+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151127/",
       "published_at": "2026-11-15T10:41:34+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151087/",
       "published_at": "2026-11-15T09:18:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133668",
       "published_at": "2026-11-15T09:00:50+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151077/",
       "published_at": "2026-11-15T08:57:58+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ח'יאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11151725-03",
     "title": "פיצוץ מכונית תופת בפרבר דמשק",
     "summary": "מטען שהוטמן במכונית התפוצץ בעיר ג'רמאנא בפרברי דמשק, והביא למותם של שני בני אדם, בהם ילדה, ולפציעתו של אדם נוסף.",
     "axis": "הזירה הפנימית בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:51:01+00:00",
     "last_update_at": "2026-11-15T07:52:17+00:00",
     "what_is_not_verified": "זהות הגורם המבצע אינה ודאית, כוחות הביטחון פתחו בחקירה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-670",
       "published_at": "2026-11-15T07:52:17+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/car-bomb-damascus-suburb-kills-two-including-child",
       "published_at": "2026-11-15T03:45:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/car-bomb-near-syria-capital-kills-two-people-including-child",
       "published_at": "2026-11-14T21:14:41+00:00"
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
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11151725-04",
     "title": "שריפה במחנה פליטים סורים בבקעת הלבנון",
     "summary": "דליקה כילתה לחלוטין מחנה פליטים סורים באזור בר אליאס שבמזרח בקעת הלבנון, השמידה 59 אוהלים והותירה כ-500 בני אדם מחוסרי בית, ללא נפגעים בנפש.",
     "axis": "לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T23:12:18+00:00",
     "last_update_at": "2026-11-15T14:55:40+00:00",
     "what_is_not_verified": "הסיבה לפרוץ הדליקה במחנה לא צוינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/flames-engulf-syrian-refugee-camp-in-eastern-lebanon?traffic_source=rss",
       "published_at": "2026-11-15T14:55:40+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/fire-destroys-syrian-refugee-camp-in-lebanon-leaving-nearly-500-homeless/4125459",
       "published_at": "2026-11-14T23:12:18+00:00"
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
     "id": "NORTH-11151725-05",
     "title": "ביטול הגבלות הכניסה לאזרחי ארה\"ב ובריטניה בסוריה",
     "summary": "הרשויות בסוריה ביטלו את הדרישה שהוטלה זמן קצר קודם לכן לקבלת אישור כניסה מראש עבור אזרחי ארצות הברית ובריטניה, והחזירו את האפשרות לקבלת אשרה עם ההגעה.",
     "axis": "הזירה הפנימית בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:14:17+00:00",
     "last_update_at": "2026-11-14T18:14:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49584",
       "published_at": "2026-11-14T18:14:17+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11151725-06",
     "title": "חשיפת תחקיר על פעולות מודיעין של ישראל בסוריה, טורקיה ולבנון בתיק רון ארד",
     "summary": "תחקיר עיתונאי בארה\"ב חשף כי ישראל חטפה בעבר בכירים איראנים מדמשק ומאיסטנבול כדי להשיג מידע על רון ארד, וכי ההערכות הנוכחיות גורסות שארד מת בלבנון בשנת 1988 ונקבר באזור נבי שית.",
     "axis": "ישראל - לבנון - סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T11:16:16+00:00",
     "last_update_at": "2026-11-15T12:03:05+00:00",
     "what_is_not_verified": "אמיתות הטענות לגבי גורל הנווט ומעשי החטיפה וההריגה מבוססת על תחקיר עיתונאי וגורמים עלומים ולא אומתה רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49598",
       "published_at": "2026-11-15T12:03:05+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95037",
       "published_at": "2026-11-15T12:01:33+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
       "published_at": "2026-11-15T11:45:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/h1uvp3hrzg",
       "published_at": "2026-11-15T11:16:16+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      },
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "NORTH-11151725-07",
     "title": "חתימת הסכמי שיתוף פעולה בין סוריה לירדן בדמשק",
     "summary": "ממשלות סוריה וירדן חתמו בדמשק על 11 הסכמים ותזכירי הבנות בתחומי תחבורה, מעברי גבול, תעופה ומזון במסגרת מועצת התיאום העליונה, זמן קצר לאחר תקיפות ירדניות בדרום סוריה.",
     "axis": "הזירה הפנימית בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T17:20:22+00:00",
     "last_update_at": "2026-11-15T17:20:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/syria-and-jordan-from-civilian-airstrike-crisis-to-higher-coordination-council/",
       "published_at": "2026-11-15T17:20:22+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11151725-08",
     "title": "פגישת נשיא לבנון עם יועץ שר החוץ הסעודי בבעבדא",
     "summary": "נשיא לבנון ז'וזף עון נועד בארמון בעבדא עם הנסיך יזיד בן פרחאן, יועצו של שר החוץ הסעודי, לדיון בהתפתחויות האחרונות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T13:20:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T13:20:35+00:00",
     "last_update_at": "2026-11-15T13:20:35+00:00",
     "what_is_not_verified": "תוכן השיחות המדויק מעבר לדיון בהתפתחויות לא פורט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968098/president-aoun-meets-saudi-foreign-ministers-adviser-in-baabda/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968098",
       "published_at": "2026-11-15T13:20:35+00:00"
      }
     ],
     "places": [
      {
       "name": "בעבדא, לבנון",
       "lat": 33.8336,
       "lon": 35.5446
      }
     ]
    },
    {
     "id": "NORTH-11151725-09",
     "title": "הגעת שגריר ארה\"ב באו\"ם מייק וולץ ללבנון",
     "summary": "שגריר ארצות הברית באו\"ם מייק וולץ נחת בלבנון במסגרת ביקור רשמי במדינה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T09:00:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T09:00:07+00:00",
     "last_update_at": "2026-11-15T09:00:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968069/us-ambassador-to-the-united-nations-mike-waltz-arrives-in-lebanon/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968069",
       "published_at": "2026-11-15T09:00:07+00:00"
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
     "id": "NORTH-11151725-10",
     "title": "תרגיל הקמת בית חולים שדה נייד בחטיבת כרמלי",
     "summary": "חטיבת המילואים כרמלי קיימה אימון הקמה ראשון של בית חולים שדה נייד עם חדר ניתוח, לאחר פעילות מבצעית בעזה, בלבנון ובסוריה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T17:02:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T17:02:14+00:00",
     "last_update_at": "2026-11-15T17:02:14+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25612",
       "published_at": "2026-11-15T17:02:14+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הממצאים והטענות בנוגע לנסיבות מותו או מקום קבורתו של רון ארד בלבנון מבוססים על תחקיר תקשורתי ולא אומתו רשמית",
    "מידת השיוך של מחסן הנשק שנתפס ברובע הדאחייה על ידי צבא לבנון לארגון חיזבאללה",
    "זהות האחראים לפיצוץ מכונית התופת בג'רמאנא שבפרברי דמשק",
    "סיבת השריפה שפרצה במחנה הפליטים בבר אליאס"
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
      "הסרת איומים במרחב הביטחוני בדרום לבנון",
      "מניעת פגיעה של חיזבאללה באזרחי ישראל ובכוחות צה\"ל",
      "מחויבות להסכם הפסקת האש"
     ],
     "inferred": [
      "השמדה שיטתית של תשתיות צבאיות תת-קרקעיות של חיזבאללה סמוך לגבול",
      "הפעלת לחץ צבאי רציף בדרום לבנון למניעת התבססות מחודשת של חיזבאללה"
     ],
     "forecast": [
      "צה\"ל ימשיך בפעולות חשיפה והשמדה ממוקדות של מנהרות ומחסני נשק בדרום לבנון",
      "תימשך הכוננות הלוגיסטית והרפואית של יחידות צה\"ל לאפשרות של הסלמה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "זכות ההתנגדות להגן על המדינה ולפעול לשחרור אדמות כבושות בכל האמצעים",
      "קריאה להידברות פנים-לבנונית על בסיס הסכם הטאיף והחוקה",
      "היעדר התנגדות לקיום משא ומתן עקיף עם ישראל"
     ],
     "inferred": [
      "שימור הלגיטימציה של הנשק והמערך הצבאי בזירה הפוליטית בלבנון",
      "הסוואת תשתיות צבאיות במרחבים אזרחיים ובקרבת עמדות יוניפי\"ל"
     ],
     "forecast": [
      "המשך ניסיונות להיאחז פוליטית וצבאית במרחב תוך הדיפת קריאות לפירוק מנשק",
      "נכונות למהלכים דיפלומטיים עקיפים להבטחת אינטרסים מול ישראל"
     ]
    },
    {
     "actor": "סוריה (הממשל החדש)",
     "declared": [
      "הקמת מרשם נפגעים לאומי כחלק ממהלכי צדק מעברי והכרה בזכויות קורבנות",
      "הידוק שיתוף הפעולה הכלכלי, התחבורתי והביטחוני עם ירדן"
     ],
     "inferred": [
      "חיזוק המשילות הפנימית והתמודדות עם תאי טרור של המדינה האסלאמית",
      "עידוד כניסת תיירים ופתיחות בינלאומית באמצעות הקלת נהלי כניסה"
     ],
     "forecast": [
      "המשך מאמצים לשיקום מוסדות המדינה והכלכלה מול אתגרי טרור בלתי פוסקים",
      "העמקת תיאום הגבולות עם מדינות שכנות כדי למנוע חיכוכים צבאיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/flames-engulf-syrian-refugee-camp-in-eastern-lebanon?traffic_source=rss",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/151077/",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/fire-destroys-syrian-refugee-camp-in-lebanon-leaving-nearly-500-homeless/4125459",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/syria-and-jordan-from-civilian-airstrike-crisis-to-higher-coordination-council/",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968069/us-ambassador-to-the-united-nations-mike-waltz-arrives-in-lebanon/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968069",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388711",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/car-bomb-damascus-suburb-kills-two-including-child",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/car-bomb-near-syria-capital-kills-two-people-including-child",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133668",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49598",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25612",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95037",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/h1uvp3hrzg",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T00:49:07+00:00",
  "changes": {
   "NORTH-11151725-01": {
    "kind": "possible",
    "prev": "הפעלת טייסת כטב\"מים ייעודית של השב\"כ בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11151725-02": {
    "kind": "possible",
    "prev": "הצהרת נשיא לבנון בנוגע להחלטה 1701 ומנדט יוניפי\"ל",
    "score": 0.633
   },
   "NORTH-11151725-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פיצוץ מכונית תופת בפרבר של דמשק",
    "score": 1.0
   },
   "NORTH-11151725-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שריפה כילתה מחנה פליטים סורים בבקעת הלבנון",
    "score": 1.0
   },
   "NORTH-11151725-05": {
    "kind": "new"
   },
   "NORTH-11151725-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "טורקיה וקטאר חתמו על הסכם הגנה הדדית עם התייחסות לסוריה",
    "score": 0.817
   },
   "NORTH-11151725-07": {
    "kind": "new"
   },
   "NORTH-11151725-08": {
    "kind": "new"
   },
   "NORTH-11151725-09": {
    "kind": "new"
   },
   "NORTH-11151725-10": {
    "kind": "new"
   }
  }
 }
};
