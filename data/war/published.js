/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-17T2345__yemen-202610172345.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-17T23:45:25+00:00",
   "window": {
    "from": "2026-10-16T23:45:25+00:00",
    "to": "2026-10-17T23:45:25+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610172345"
   },
   "summary": "הלחימה בזירה התימנית מסלימה במקביל בכמה מישורים, כאשר החות'ים מגבירים את שיגורי הטילים והכטב\"מים לעבר שטח סעודיה ולעבר מטרות ממשלתיות בעדן. מנגד, צבא ממשלת תימן והקואליציה בראשות סעודיה מפעילים לחץ קרקעי ותקיפות אוויריות נרחבות במחוזות שונים. ההתקדמות החות'ית הביאה לחידוש התיאום הצבאי והכספי בין סעודיה לאיחוד האמירויות, לצד יוזמה מצרית לאישור התערבות להגנת סעודיה.",
   "fronts": [
    {
     "name": "חזית סעודיה – חות'ים",
     "status": "הסלמה בשיגורי טילים וכטב\"מים לעבר יעדים צבאיים, תעופתיים ותשתיות נפט, לצד יירוטים והפעלת התרעות בריאד ובדרום הממלכה"
    },
    {
     "name": "חזית פנים-תימן (תעז, עדן, אל-ג'וף ומחוזות נוספים)",
     "status": "לחימה קרקעית עזה, מתקפות טילים על נמלי תעופה ותקיפות אוויריות נרחבות של הקואליציה והצבא הממשלתי"
    },
    {
     "name": "הזירה הימית (הים האדום ומפרץ עדן)",
     "status": "מתיחות ביטחונית ושיבוש נתיבי השיט, כולל יירוט טילי שיוט מעל הים האדום וירי חמושים לעבר מכלית גז מדרום לאל-מוכלא"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10172345-01",
     "title": "יירוט טילים וכטב\"מים שנורו מתימן לעבר ערב הסעודית והים האדום",
     "summary": "הקואליציה בראשות סעודיה יירטה שני טילים בליסטיים ששוגרו לכיוון ח'מיס מושייט, כטב\"מים באזורי ריאד, המזרח והדרום, טיל בליסטי לעבר ינבוע ושני טילי שיוט מעל הים האדום. בעקבות השיגורים הופעלו התרעות בריאד, באבהא, בח'מיס מושייט ובג'אזאן.",
     "axis": "סעודיה – חות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T22:29:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T22:29:00+00:00",
     "last_update_at": "2026-10-17T23:12:26+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומידת הפגיעה הישירה של רסיסים או מטרות על הקרקע",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154174",
       "published_at": "2026-10-17T23:12:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-two-missiles-launched-towards-khamis-mushait",
       "published_at": "2026-10-17T23:10:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/riyadh-residents-receive-hostile-aerial-threat-alert",
       "published_at": "2026-10-17T21:53:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-strikes-yemen-kill-12-houthis-say",
       "published_at": "2026-10-17T16:15:55+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-reports-incoming-fire-egypt-weighs-sending-help",
       "published_at": "2026-10-17T08:21:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/missiles-hit-aden-airport-saudi-coalition-intercepts-missile",
       "published_at": "2026-10-16T22:29:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ח'מיס מושייט, ערב הסעודית",
       "lat": 18.3,
       "lon": 42.7333
      },
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ינבוע, ערב הסעודית",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-10172345-02",
     "title": "מתקפת טילים של החות'ים על נמל התעופה הבינלאומי בעדן",
     "summary": "שני טילים פגעו בשטח נמל התעופה הבינלאומי בעדן בעת שמטוס נוסעים התכונן להמראה. החות'ים קיבלו אחריות על השיגור וטענו כי כיוונו למחסן אמצעי לחימה ולמפקדה צבאית.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T22:29:00+00:00",
     "last_update_at": "2026-10-17T06:00:32+00:00",
     "what_is_not_verified": "לא אומת האם נפגעו מחסן נשק או מפקדה צבאית כפי שטענו החות'ים, ורשויות הביטחון בעדן דיווחו שלא היו נפגעים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261017-yemen-s-houthis-claim-responsibility-for-fresh-missile-strike-on-aden-airport",
       "published_at": "2026-10-17T06:00:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/missiles-hit-aden-airport-saudi-coalition-intercepts-missile",
       "published_at": "2026-10-16T22:29:00+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-10172345-03",
     "title": "הסלמה צבאית בלחימה הקרקעית והאווירית ברחבי תימן",
     "summary": "כוחות ממשלת תימן דיווחו על ביצוע מאות תקיפות נגד החות'ים, פגיעה במחסנים ובמפקדות באל-ג'וף ובלימת מתקפה מדרום לתעז. במקביל נמסר על תקיפות אוויריות נרחבות של הקואליציה במחוזות צנעא, תעז, ד'מאר, איב, לחג', צעדה ועמראן, לצד הפגזות חות'יות על שכונות מגורים בתעז.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T14:53:59+00:00",
     "last_update_at": "2026-10-17T21:12:44+00:00",
     "what_is_not_verified": "מספרי הנפגעים המדויקים, הטענה על שימוש בפצצות מצרר ושיעור האבדות הנטען של 800 לוחמים ו-190 כלים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154173",
       "published_at": "2026-10-17T21:12:44+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-heavy-houthi-losses-day-strikes",
       "published_at": "2026-10-17T17:53:55+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-strikes-yemen-kill-12-houthis-say",
       "published_at": "2026-10-17T16:15:55+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154153",
       "published_at": "2026-10-17T14:53:59+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "ד'מאר, תימן",
       "lat": 14.543,
       "lon": 44.4001
      }
     ]
    },
    {
     "id": "YEMEN-10172345-04",
     "title": "ירי לעבר מכלית גז במרחב הימי מדרום-מזרח לאל-מוכלא",
     "summary": "סירת מנוע קטנה ועליה שבעה חמושים התקרבה למכלית גז במרחק 140 מיילים ימיים מדרום-מזרח לנמל אל-מוכלא וביצעה לעברה ירי. צוות המכלית ירה ירי אזהרה והסירה שינתה את נתיבה.",
     "axis": "הזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T14:37:43+00:00",
     "last_update_at": "2026-10-17T14:37:43+00:00",
     "what_is_not_verified": "זהות החמושים והשתייכותם הארגונית אינן מאומתות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/gunmen-fire-tanker-yemens-coast-southeast-al-mukalla",
       "published_at": "2026-10-17T14:37:43+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מוכלא, תימן",
       "lat": 14.5425,
       "lon": 49.1231
      }
     ]
    },
    {
     "id": "YEMEN-10172345-05",
     "title": "מצרים מקדמת אישור פרלמנטרי להתערבות צבאית להגנת סעודיה",
     "summary": "נשיא מצרים פנה לפרלמנט המצרי בבקשה לכנס ישיבת חירום כדי להעניק לו סמכות לפעול להגנת סעודיה ומדינות המפרץ אם תתבקש לעשות כן, על רקע התגברות המתקפות מתימן.",
     "axis": "הקואליציה האזורית מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T09:46:56+00:00",
     "last_update_at": "2026-10-17T16:49:07+00:00",
     "what_is_not_verified": "היקף, טיב ואופי ההתערבות הצבאית המצרית הפוטנציאלית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/17/10-17-egypt-saudi-houths-clip?traffic_source=rss",
       "published_at": "2026-10-17T16:49:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/egyptian-parliament-hold-emergency-session-sisi-seeks-approval-defend",
       "published_at": "2026-10-17T15:38:29+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/egypts-sisi-seeks-parliaments-backing-help-defend-saudi-arabia-if-asked",
       "published_at": "2026-10-17T14:46:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/sisi-urges-parliament-approve-military-help-saudi-arabia",
       "published_at": "2026-10-17T14:34:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132055",
       "published_at": "2026-10-17T09:46:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10172345-06",
     "title": "הסכם בין איחוד האמירויות לסעודיה לחידוש מימון כוחות נגד החות'ים",
     "summary": "איחוד האמירויות הסכימה לחדש את מימון הכוחות הנלחמים בחות'ים בדרום תימן, ובתמורה התחייבה סעודיה לספק לאותם כוחות חיפוי אווירי, מתוך מטרה לבלום את התקדמות החות'ים ולצמצם את המחלוקות בין המדינות.",
     "axis": "הקואליציה האזורית מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T11:57:15+00:00",
     "last_update_at": "2026-10-17T17:13:02+00:00",
     "what_is_not_verified": "זהות הכוחות הספציפיים שיקבלו את המימון ומועדי יישום ההסכם בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48638",
       "published_at": "2026-10-17T17:13:02+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/uae-yemen-conflict-agreement-saudi-arabia-houthi-gains",
       "published_at": "2026-10-17T11:57:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10172345-07",
     "title": "טענה חות'ית להפלת מסוק קרב סעודי",
     "summary": "פורסמה טענה שלפיה כוחות החות'ים הפילו מסוק קרב מדגם אפאצ'י השייך לצבא סעודיה.",
     "axis": "סעודיה – חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T20:34:00+00:00",
     "last_update_at": "2026-10-17T20:34:00+00:00",
     "what_is_not_verified": "עצם ההפלה, מיקום האירוע וגורל הצוות לא אושרו בידי מקור רשמי סעודי או צד שלישי בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48649",
       "published_at": "2026-10-17T20:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10172345-08",
     "title": "דיווחים על שריפות במתקני נפט במזרח סעודיה עקב תקיפה מתימן",
     "summary": "הופצו דיווחים ותיעודים על שריפות שפרצו במתקני נפט במחוז המזרחי בסעודיה בעקבות תקיפה שיוחסה לכוחות החות'ים.",
     "axis": "סעודיה – חות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T01:20:43+00:00",
     "last_update_at": "2026-10-17T01:20:43+00:00",
     "what_is_not_verified": "היקף הנזק, קיום נפגעים ואימות רשמי של פגיעה ישירה במתקני הנפט באזור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48622",
       "published_at": "2026-10-17T01:20:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים על הפלת מסוק קרב סעודי מדגם אפאצ'י",
    "דיווחים על שריפות במתקני נפט במחוז המזרחי בסעודיה והיקף הנזק בהם",
    "טענת צבא תימן על נטרול שמונה מאות לוחמים חות'ים והשבתת מאה ותשעים כלי רכב ביממה אחת",
    "טענות החות'ים על שימוש סעודי בפצצות מצרר בד'מאר",
    "אופי וממדי הסיוע הצבאי הישראלי שנזכר בהתבטאויות פוליטיות",
    "זהות שבעת החמושים שתקפו את מכלית הגז סמוך לאל-מוכלא"
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
     "value": 3.0945,
     "unit": "ILS",
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת החות'ים (אנצאר אללה)",
     "declared": [
      "פגיעה במטרות צבאיות, מפקדות ומחסני נשק של הממשלה בעדן",
      "תגובה לתקיפות האוויריות של הקואליציה הסעודית"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וביטחוני כבד על סעודיה דרך תקיפת תשתיות נפט, שדות תעופה ומרכזים עירוניים",
      "שיבוש התנועה הימית והרחבת השליטה הקרקעית ברחבי תימן על חשבון כוחות הממשלה"
     ],
     "forecast": [
      "המשך ניסיונות ירי טילים וכטב\"מים לטווחים ארוכים לעבר מתקנים אסטרטגיים במפרץ ובים האדום",
      "החרפת העימות מול הכוחות הנתמכים בידי סעודיה ואיחוד האמירויות בדרום תימן"
     ]
    },
    {
     "actor": "סעודיה והקואליציה הערבית",
     "declared": [
      "הגנה על שטח הממלכה, יירוט איומי טילים וכטב\"מים ופגיעה בריכוזי כוח של החות'ים",
      "הסרת האיום מעל נתיבי השיט והיציבות האזורית"
     ],
     "inferred": [
      "מניעת פגיעה בייצוא הנפט ובמרכזים הכלכליים, ובלימת ההתקדמות הקרקעית של החות'ים",
      "איחוי הקרע המדיני והצבאי עם איחוד האמירויות וגיוס תמיכה מצרית לגיבוי המערכה"
     ],
     "forecast": [
      "הגברת התקיפות האוויריות בתימן בשילוב מתן חיפוי אווירי הדוק יותר לכוחות הקרקע המקומיים",
      "הידוק שיתוף הפעולה ההגנתי עם מצרים ושותפות אזוריות נוספות להגנה אווירית וימית"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "הגדרת החות'ים כארגון טרור בזירה האזורית והבין-לאומית",
      "בלימת מתקפות החות'ים והשמדת תשתיותיהם הצבאיות"
     ],
     "inferred": [
      "השגת מימון וחיפוי צבאי מחודש ממדינות המפרץ לייצוב קווי ההגנה בדרום ובמרכז",
      "מניעת גיוס כוח אדם מקומי על ידי המיליציה החות'ית"
     ],
     "forecast": [
      "ניסיון לייצב את נמלי התעופה והתשתיות בדרום תחת תקיפות חוזרות",
      "המשך פעילות דיפלומטית לבידוד החות'ים בארגונים מוסלמיים ובינלאומיים"
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "נכונות לנקוט בכל האמצעים הנדרשים להגנת ביטחונה ויציבותה של סעודיה אם תתבקש",
      "פעולה במסגרת הגנתית בלבד ללא כוונה לתקוף או לפתוח במלחמה יזומה"
     ],
     "inferred": [
      "הגנה על האינטרסים הכלכליים הקשורים לחופש השיט בים האדום ולתעלת סואץ",
      "חיזוק הברית האסטרטגית עם סעודיה ומדינות המפרץ מול איומים אזוריים"
     ],
     "forecast": [
      "אישור הפרלמנט בקהיר למתן מנדט התערבות מותנה לנשיא",
      "פריסת אמצעי הגנה או כוחות מוגבלים בתיאום ישיר עם ריאד במקרה של החרפת האיום"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/17/10-17-egypt-saudi-houths-clip?traffic_source=rss",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/egypts-sisi-seeks-parliaments-backing-help-defend-saudi-arabia-if-asked",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261017-yemen-s-houthis-claim-responsibility-for-fresh-missile-strike-on-aden-airport",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/17/uae-yemen-conflict-agreement-saudi-arabia-houthi-gains",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/egyptian-parliament-hold-emergency-session-sisi-seeks-approval-defend",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/sisi-urges-parliament-approve-military-help-saudi-arabia",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154153",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132055",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48622",
     "accessed_at": "2026-10-17T23:45:25+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T04:56:32+00:00",
  "changes": {
   "YEMEN-10172345-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפת טילים על נמל התעופה הבינלאומי בעדן",
    "score": 1.0
   },
   "YEMEN-10172345-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "יירוט טילים וכטב\"מים ששוגרו לעבר יעדים בסעודיה ובים האדום",
    "score": 1.0
   },
   "YEMEN-10172345-03": {
    "kind": "new"
   },
   "YEMEN-10172345-04": {
    "kind": "new"
   },
   "YEMEN-10172345-05": {
    "kind": "new"
   },
   "YEMEN-10172345-06": {
    "kind": "possible",
    "prev": "התבטאויות נשיא ארה\"ב בנוגע לסיוע ישראלי לסעודיה במאבק בחות'ים",
    "score": 0.467
   },
   "YEMEN-10172345-07": {
    "kind": "new"
   },
   "YEMEN-10172345-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דיווחים על שריפות במתקני נפט במזרח סעודיה",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-17T2340__iran-202610172340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-17T23:40:35+00:00",
   "window": {
    "from": "2026-10-16T23:40:35+00:00",
    "to": "2026-10-17T23:40:35+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610172340"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתמקד בשיבוש נתיבי השיט במצר הורמוז לצד פגיעה ברשתות המימון והחימוש של שלוחותיה באזור. במקביל לתקיפות ימיות ומתיחות ביטחונית סביב תשתיות אנרגיה במפרץ, ארה\"ב וישראל מקדמות פריסה צבאית ומצור כלכלי על איראן. מנגד, טהראן ממשיכה לקדם את המערך הגרעיני שלה ומצהירה על נכונות למשא ומתן אך ורק בתנאים של כבוד הדדי וערבויות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "הסלמה ימית הכוללת פגיעה במכליות נפט באמצעות מוקשים וניסיונות אבטחה של צבא ארה\"ב."
    },
    {
     "name": "המערכה הכלכלית והפיננסית",
     "status": "הגברת לחץ הסנקציות האמריקני וסגירת ערוצים פיננסיים של שלוחות איראן בלבנון."
    },
    {
     "name": "החזית הדיפלומטית והגרעינית",
     "status": "המשך פיתוח מוסדות תעשיית הגרעין האיראנית ומחלוקת סביב חידוש שיחות המשא ומתן עם וושינגטון."
    }
   ],
   "events": [
    {
     "id": "IRAN-10172340-01",
     "title": "פיצוץ מכלית נפט שנייה במיצרי הורמוז כתוצאה ממוקש ימי",
     "summary": "חיל הים של משמרות המהפכה הודיע על פיצוץ שאירע במכלית ענק שנייה לאחר שפגעה במוקש ימי במצר הורמוז, בעוד הטלוויזיה האיראנית הציגה תיעוד של המקרה.",
     "axis": "איראן - ארה\"ב/שיט בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T13:41:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T13:41:49+00:00",
     "last_update_at": "2026-10-17T20:02:22+00:00",
     "what_is_not_verified": "לא פורסם אימות עצמאי מעבר להודעת משמרות המהפכה ולשידורי הטלוויזיה האיראנית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/17/iranian-tv-airs-video-said-to-show-tanker-explosion-in-hormuz?traffic_source=rss",
       "published_at": "2026-10-17T20:02:22+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86295178/Second-supertanker-explodes-after-hitting-mine-in-Strait-of-Hormuz",
       "published_at": "2026-10-17T13:41:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10172340-02",
     "title": "פיקוד המרכז של ארה\"ב טוען שרוב ניסיונות הפגיעה בשיט בהורמוז סוכלו",
     "summary": "דובר פיקוד המרכז של צבא ארצות הברית הצהיר כי כמעט כל כלי השיט עוברים במצר הורמוז ללא פגיעה ובליווי אמריקני, וכי ניסיונות משמרות המהפכה לסגור את המצר נכשלים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T18:38:04+00:00",
     "last_update_at": "2026-10-17T18:38:04+00:00",
     "what_is_not_verified": "אין אימות עצמאי לנתון של 97 אחוזי הצלחה במעבר כלי שיט תחת הגנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-attacks-hormuz-shipping-unsuccessful-centcom-says-0",
       "published_at": "2026-10-17T18:38:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10172340-03",
     "title": "שלילת רישיון פעילות לבנק איראני בלבנון בעקבות לחץ אמריקני",
     "summary": "שלטונות לבנון ביטלו את רישיון הפעילות של בנק סאדראת האיראני בעקבות לחץ מארצות הברית למניעת מימון חזבאללה.",
     "axis": "ארה\"ב - לבנון - שלוחות איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T15:48:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T15:48:36+00:00",
     "last_update_at": "2026-10-17T15:48:36+00:00",
     "what_is_not_verified": "לא ברור אם סניפי הבנק נסגרו בפועל או שהחלו הליכי פירוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lwj",
       "source_root_id": "or_fdd",
       "url": "https://www.longwarjournal.org/archives/2026/10/lebanon-revokes-iranian-banks-license-amid-us-pressure-over-hezbollah-financing.php",
       "published_at": "2026-10-17T15:48:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10172340-04",
     "title": "הערכות מודיעין על סיוע איראני לחות'ים בתקיפות במפרץ",
     "summary": "מקורות מודיעין מצביעים על כך שאיראן מעבירה לחות'ים בתימן מודיעין מטרות שמאפשר להם להוציא לפועל תקיפות מדויקות נגד יעדים בסעודיה ובמפרץ.",
     "axis": "שלוחות איראן - מדינות המפרץ",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T08:52:24+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:52:24+00:00",
     "last_update_at": "2026-10-17T15:37:16+00:00",
     "what_is_not_verified": "הטענות מבוססות על תדרוכי מודיעין שמסרו מקורות בעילום שם לוול סטריט ג'ורנל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/article/21644535",
       "published_at": "2026-10-17T15:37:16+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610178912",
       "published_at": "2026-10-17T08:52:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10172340-05",
     "title": "היערכות צבאית אמריקנית וישראלית והפעלת לחץ כלכלי על איראן",
     "summary": "נושאת מטוסים אמריקנית וכוחות קרב הוצבו באזור על רקע הערכות בישראל ובארה\"ב כי משטר הסנקציות והמצור הכלכלי מקרבים את טהראן לנקודת שבר פנימית.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T05:42:16+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T05:42:16+00:00",
     "last_update_at": "2026-10-17T08:43:08+00:00",
     "what_is_not_verified": "מידת השפעתו המדויקת של המצור על יציבות המשטר האיראני ומועד נקודת השבר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/yokra14927532",
       "published_at": "2026-10-17T08:43:08+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957682",
       "published_at": "2026-10-17T05:42:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10172340-06",
     "title": "איראן חונכת מוסד תקנים לתעשייה הגרעינית ודוחה לחצים",
     "summary": "ראש הארגון לאנרגיה אטומית של איראן חנך בית ספר מיוחד לתקנים גרעיניים, בעוד שר החוץ האיראני הודיע כי המדינה לא תוותר על זכויותיה תחת לחץ אך מוכנה לדיאלוג עם ערבויות.",
     "axis": "איראן - המערב (גרעין ודיפלומטיה)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:03:32+00:00",
     "last_update_at": "2026-10-17T13:00:54+00:00",
     "what_is_not_verified": "פרטי הדרישות האיראניות לקבלת ערבויות בדיאלוג המדיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_2af408fbb450f1ae",
       "url": "https://en.irna.ir/news/86295149/Iran-rejects-pressure-remains-open-to-dialogue-Araghchi",
       "published_at": "2026-10-17T13:00:54+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_57cde19d7dff5895",
       "url": "https://en.irna.ir/news/86295060/Iran-opens-3rd-Specialized-School-of-Standards-in-Nuclear-Industry",
       "published_at": "2026-10-17T12:03:32+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "סגירתם בפועל של סניפי בנק סאדראת או פתיחת הליכי פירוק בלבנון.",
    "היקף הפגיעה המדויק ורמת ההצלחה של מוקשי חיל הים של משמרות המהפכה במצר הורמוז.",
    "טענת פיקוד המרכז האמריקני כי תשעים ושבעה אחוזים מכלי השיט עוברים במצר הורמוז ללא פגע.",
    "מידת ההיתכנות של התפרצות מחאות בתוך איראן עקב המצור הכלכלי בחודשים הקרובים."
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
     "value": 3.0945,
     "unit": "ILS",
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על זכויות ריבוניות ודחיית כל כניעה ללחצים חיצוניים.",
      "המשך קידום היכולות והתקנים של תעשיית הגרעין המקומית."
     ],
     "inferred": [
      "הפעלת מנופי לחץ כלכליים על הכלכלה העולמית באמצעות שיבוש מכליות נפט במצר הורמוז.",
      "שימור רשתות המימון והתמיכה המודיעינית לשלוחותיה בתימן ובלבנון כדי לאיים על יעדי אויב."
     ],
     "forecast": [
      "המשך תקריות ימיות נקודתיות במצר הורמוז תוך שמירה על ערוץ פתוח אפשרי למשא ומתן."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "שמירה על חופש השיט הבינלאומי במצר הורמוז ומניעת סגירתו בידי משמרות המהפכה.",
      "סיכול רשתות המימון המועברות לחזבאללה דרך מערכת הבנקאות."
     ],
     "inferred": [
      "שימוש במצור כלכלי מתמשך במטרה להוביל לקריסה פנימית או לוויתורים מצד המשטר האיראני.",
      "הימנעות מכניסה למערכה קרקעית רחבה מחשש לעליית מחירי הדלק ואבדות בקרב חיילים."
     ],
     "forecast": [
      "המשך ליווי צבאי של כלי שיט במפרץ והגברת הסנקציות הפיננסיות מול מוסדות איראניים."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "הישענות על המנוף הכלכלי והצבאי האמריקני להחלשת יציבות השלטון בטהראן.",
      "היערכות צבאית למענה תקיף מול איומים ותגובות אפשריות מצידה של איראן."
     ],
     "forecast": [
      "תיאום ביטחוני הדוק עם הכוחות האמריקניים המוצבים באזור מול התפתחויות בחזית מול איראן."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/17/iranian-tv-airs-video-said-to-show-tanker-explosion-in-hormuz?traffic_source=rss",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610178912",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86295060/Iran-opens-3rd-Specialized-School-of-Standards-in-Nuclear-Industry",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/article/21644535",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/lebanon-revokes-iranian-banks-license-amid-us-pressure-over-hezbollah-financing.php",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-attacks-hormuz-shipping-unsuccessful-centcom-says-0",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957682",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/yokra14927532",
     "accessed_at": "2026-10-17T23:40:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T04:55:27+00:00",
  "changes": {
   "IRAN-10172340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הטלת סגר ימי אמריקני במצר הורמוז ופגיעה בייצוא הנפט האיראני",
    "score": 0.65
   },
   "IRAN-10172340-02": {
    "kind": "new"
   },
   "IRAN-10172340-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "שלילת רישיון הפעילות של בנק סאדראת האיראני בלבנון",
    "score": 0.65
   },
   "IRAN-10172340-04": {
    "kind": "new"
   },
   "IRAN-10172340-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "היערכות צבאית אמריקנית לאפשרות של תקיפת מתקני גרעין תת-קרקעיים באיראן",
    "score": 0.65
   },
   "IRAN-10172340-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-18T0240__ukraine-202610180240.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-18T02:40:32+00:00",
   "window": {
    "from": "2026-10-17T02:40:32+00:00",
    "to": "2026-10-18T02:40:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610180240"
   },
   "summary": "העימות הצבאי בין רוסיה לאוקראינה מאופיין בהמשך תקיפות הדדיות בעומק השטח, הכוללות שיגורי כטבמים אוקראיניים לעבר יעדי תשתית ותעשייה בערים רוסיות ופגיעות רוסיות נרחבות ברשתות אנרגיה, מפעלים ומרכזי אוכלוסייה אוקראיניים. במקביל ללחימה לאורך קווי המגע בדרום ובמזרח, נרשמת מתיחות מדינית גוברת לנוכח החלטת הממשל האמריקאי להשהות זמנית חלק מהסנקציות הכלכליות שהוטלו על מוסקבה והקשחת העמדות של רוסיה לגבי אזורי חיץ. בזירה הבין-לאומית מדינות אירופה נערכות לתרחישי פריסת כוחות עתידיים, בעוד חילוקי דעות והגבלות על אספקת מערכות הגנה ממשיכים ללוות את הסיוע לקייב.",
   "fronts": [
    {
     "name": "החזית הדרומית (חרסון וזפורוזיה)",
     "status": "הפגזות ותקיפות כטבמים מתמשכות מעבר לנהר הדנייפרו, ומתיחות סביב אתר הגרעין באנרגודאר"
    },
    {
     "name": "חזית המזרח (דונבאס ולוהנסק)",
     "status": "לחימה פעילה, הפצצות אוויריות על ערים ופגיעות אוקראיניות בתשתיות חשמל באזורי הכיבוש"
    },
    {
     "name": "עומק רוסיה",
     "status": "ספיגת תקיפות כטבמים אוקראיניות נגד אתרי אנרגיה, מפעלים ביטחוניים ויעדים עירוניים"
    },
    {
     "name": "מרחב צפון ומערב אוקראינה",
     "status": "תקיפות רוסיות על מפעלי תעשייה ותשתיות, לצד חשש מהתרחבות איומים מכיוון בלארוס"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10180240-01",
     "title": "מתקפת כטבמים אוקראינית על סנקט פטרבורג",
     "summary": "כלי טיס בלתי מאוישים ששוגרו מאוקראינה פגעו במתקני תשתית, מסופי דלק וגשר באזור סנקט פטרבורג, לצד הפעלת מערכות הגנה אווירית שנצפו בעיר.",
     "axis": "סנקט פטרבורג, רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T01:34:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T01:34:01+00:00",
     "last_update_at": "2026-10-18T01:59:30+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לתשתיות האנרגיה והגשר אינו מאומת ממקורות רשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48659",
       "published_at": "2026-10-18T01:59:30+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/flames-explosions-reported-amid-large-ukrainian-drone-attack-on-st-petersburg/",
       "published_at": "2026-10-18T01:34:01+00:00"
      }
     ],
     "places": [
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-02",
     "title": "פעילות כטבמים ליד תחנת הכוח הגרעינית בזפורוזיה",
     "summary": "בקרבת תחנת הכוח הגרעינית והעיר אנרגודאר נמשכת פעילות כלי טיס מאוישים מרחוק, כאשר הנהלת האתר מדווחת על מצב מתוח אך מבוקר.",
     "axis": "מחוז זפורוזיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T01:53:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T01:53:28+00:00",
     "last_update_at": "2026-10-18T01:53:28+00:00",
     "what_is_not_verified": "מידת הסכנה המיידית למתקני התחנה אינה מאומתת מעבר להצהרת הדוברת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_e22c4b5db8a5c244",
       "url": "https://tass.com/economy/2203639",
       "published_at": "2026-10-18T01:53:28+00:00"
      }
     ],
     "places": [
      {
       "name": "אנרגודאר, אוקראינה",
       "lat": 47.4901,
       "lon": 34.6603
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-03",
     "title": "הקפאת סנקציות אמריקאיות על רוסיה והגבלת תקשורת לווינית",
     "summary": "נשיא ארצות הברית השהה לחודשיים עיצומים כלכליים ומכסים שאושרו בקונגרס נגד מוסקבה לצורך בחינה כלכלית, בעוד שר החוץ ציין כי נמנעת כרגע מאוקראינה גישה למערכת התקשורת הצבאית סטארשילד.",
     "axis": "מדיני וכלכלי בין-לאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T02:53:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T02:53:38+00:00",
     "last_update_at": "2026-10-18T01:10:25+00:00",
     "what_is_not_verified": "הסיבה המדויקת להגבלת מערך סטארשילד וההשפעה הישירה על שדה הקרב אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-18T01:10:25+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/18/ukraine-war-briefing-trumps-sanctions-waiver-is-a-60-day-pause-to-analyse-economic-impact-says-rubio",
       "published_at": "2026-10-18T01:07:13+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203629",
       "published_at": "2026-10-18T00:27:35+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/17/trump-puts-new-russia-sanctions-passed-by-congress-on-hold-amid-deepening-row-with-ukraine",
       "published_at": "2026-10-17T02:53:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-04",
     "title": "טענה להשמדת כוח אוקראיני בדוברופוליה",
     "summary": "גורמי מודיעין צבאיים של רוסיה טענו כי כוחותיהם פגעו וחיסלו יחידה צבאית אוקראינית גדולה באזור דוברופוליה.",
     "axis": "דונבאס",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:35:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T00:35:40+00:00",
     "last_update_at": "2026-10-18T00:35:40+00:00",
     "what_is_not_verified": "מספר הנפגעים והיקף הכוח האוקראיני שהושמד לא אומתו על ידי גורם עצמאי או אוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_110",
       "url": "https://tass.com/defense/2203631",
       "published_at": "2026-10-18T00:35:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-05",
     "title": "השבתת מפעל רכיבי רכב בלוצק לאחר מתקפה רוסית",
     "summary": "מפעל לייצור מערכות כבלים לרכב בבעלות זרה השבית את פעילותו בעקבות תקיפת כטבמים רוסית שפגעה במתקן.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T14:30:00+00:00",
     "last_update_at": "2026-10-18T00:32:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_29342df317114d97",
       "url": "https://kyivindependent.com/kromberg-and-schubert-electrical-wiring-plant-in-lutsk-halts-operations-following-russian-attack/",
       "published_at": "2026-10-18T00:32:40+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_29342df317114d97",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058520/",
       "published_at": "2026-10-17T14:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לוצק, אוקראינה",
       "lat": 50.7451,
       "lon": 25.3201
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-06",
     "title": "יירוט כטבמים חודרים במרחב האווירי של רומניה",
     "summary": "מטוסי קרב רומניים הפילו שני כלי טיס מונעי סילון מסדרת גרן שחדרו למרחב האווירי של המדינה.",
     "axis": "הגבול הרומני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T22:16:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T22:16:37+00:00",
     "last_update_at": "2026-10-17T22:16:37+00:00",
     "what_is_not_verified": "שיוכם הלאומי המדויק של המפעילים לא נמסר בהודעה הרשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_613c2ed6e63b3780",
       "url": "https://kyivindependent.com/romanian-f-16s-down-two-jet-powered-drones-after-airspace-incursion/",
       "published_at": "2026-10-17T22:16:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-07",
     "title": "תקיפת טילים על חרקוב",
     "summary": "פגיעת טיל רוסי בעיר חרקוב גרמה לפציעתם של שלושה בני אדם ולנזק באזור הפגיעה.",
     "axis": "צפון-מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T20:37:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T20:37:00+00:00",
     "last_update_at": "2026-10-17T20:37:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175520-russian-missile-strike-on-kharkiv-injures-three-people.html",
       "published_at": "2026-10-17T20:37:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-08",
     "title": "פגיעה במפעל כטבמים במחוז רוסטוב",
     "summary": "כוחות אוקראיניים פגעו במתקן תעשייתי ברוסיה המייצר כלי טיס בלתי מאוישים לסיור ולתקיפה.",
     "axis": "רוסטוב, רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T18:27:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T18:27:19+00:00",
     "last_update_at": "2026-10-17T18:27:19+00:00",
     "what_is_not_verified": "רמת הפגיעה ביכולות הייצור בפועל לא אומתה ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-hits-russian-drone-manufacturing-plant-in-rostov-oblast/",
       "published_at": "2026-10-17T18:27:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-09",
     "title": "הפסקות חשמל נרחבות במחוז לוהנסק בעקבות תקיפה",
     "summary": "תקיפה אוקראינית על רשת החשמל גרמה להשבתת זרם בעשרות רשויות מקומיות ובחלקים מהעיר לוהנסק, ומבני ציבור חוברו לגנרטורים.",
     "axis": "לוהנסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T16:11:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T16:11:00+00:00",
     "last_update_at": "2026-10-17T18:00:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2203573",
       "published_at": "2026-10-17T18:00:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058530/",
       "published_at": "2026-10-17T16:11:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לוהנסק, אוקראינה",
       "lat": 48.5717,
       "lon": 39.2973
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-10",
     "title": "השמדת מערכת שיגור רקטות רוסית במחוז חרסון",
     "summary": "יחידה מיוחדת של המשמר הלאומי האוקראיני איתרה והשמידה כלי שיגור רקטות מדגם סמרץ ורכב טעינה נלווה באמצעות כטבמים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T15:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T15:41:00+00:00",
     "last_update_at": "2026-10-17T15:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e1ab6cc74120d6b5",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058526/",
       "published_at": "2026-10-17T15:41:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-11",
     "title": "הפגזות והפצצות כבדות בחרסון ובסביבתה",
     "summary": "תקיפות אוויריות והפגזות ארטילריות רוסיות על העיר חרסון וסביבתה הביאו להרג אדם אחד ולפציעת עשרות תושבים ואנשי צוות רפואי, לצד נזק למבני מגורים ומוסדות רפואה.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T15:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T15:33:00+00:00",
     "last_update_at": "2026-10-17T15:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a91929cf03612b38",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058525/",
       "published_at": "2026-10-17T15:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-12",
     "title": "הפצצה אווירית קטלנית על מבנה מגורים בסלוביאנסק",
     "summary": "פצצה אווירית כבדה שהוטלה על אזור מגורים בעיר סלוביאנסק גרמה להרס מבנים, לפציעת אזרחים ולמותו של איש צוותי ההצלה האוקראיניים שפעל במקום.",
     "axis": "דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T14:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T14:41:00+00:00",
     "last_update_at": "2026-10-17T14:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f57d1312b9fe74f6",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058522/",
       "published_at": "2026-10-17T14:41:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-13",
     "title": "הכרזה רוסית על אזור ביטחון לא נתון למשא ומתן",
     "summary": "נשיא רוסיה הודיע על יצירת אזור ביטחון בתוך גבולות אוקראינה לאורך מאות קילומטרים והדגיש כי שטח זה יוחרג מכל שיחות עתידיות.",
     "axis": "הזירה המדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T01:15:21+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T01:15:21+00:00",
     "last_update_at": "2026-10-17T02:40:32+00:00",
     "what_is_not_verified": "המיקום המדויק ומידת השליטה הקרקעית ברצועה המוצהרת אינם מאומתים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/ukraine-war-briefing-russia-building-non-negotiable-security-zone-inside-ukrainian-border-putin-declares",
       "published_at": "2026-10-17T01:15:21+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת קצין רוסי בדבר השמדת יחידה אוקראינית של אלפיים חיילים בדוברופוליה",
    "הדיווחים על פגיעה ממשית במתקני דלק וגשר בסנקט פטרבורג",
    "הטענה לגבי הוצאה להורג של שבויי מלחמה אוקראינים במחוז זפורוזיה בהוראת מפקד חטיבה",
    "הטענה בערוץ רוסי כי סרטון שבויי מלחמה בדונייצק בוים על ידי חיילים רוסים"
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
     "value": 1.1253,
     "unit": "USD",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על תשתיות המדינה וגיוס תמיכה בין-לאומית להמשך הלחץ הכלכלי על מוסקבה",
      "שימור השליטה המערבית בנכסים פיננסיים רוסיים מוקפאים והבטחת מסדרונות מעבר לייצוא חקלאי"
     ],
     "inferred": [
      "שיבוש תעשיית הנשק ושרשראות האספקה בעומק שטח רוסיה באמצעות כטבמים לצורך איזון יתרון האש הרוסי",
      "מניעת התקרבות בין ארצות הברית להנהגה הרוסית"
     ],
     "forecast": [
      "המשך התמקדות בתקיפות איכותיות נגד תעשיית הביטחון והאנרגיה הרוסית, תוך הידוק שיתוף הפעולה עם מדינות אירופה נוכח אי-הוודאות מוושינגטון"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הקמת רצועת ביטחון מבוצרת בשטח אוקראינה שלא תהיה נתונה למשא ומתן להסדרה",
      "הגנה על שטח המדינה והדיפת כוחות אוקראיניים מאזורי המזרח"
     ],
     "inferred": [
      "פגיעה שיטתית במערך האנרגיה והתעשייה של אוקראינה לפני החורף כדי לשחוק את יכולת העמידה האזרחית והצבאית",
      "ניצול הסדקים במדיניות הסנקציות האמריקאית להקלת הלחץ הכלכלי"
     ],
     "forecast": [
      "החרפת התקיפות על תחנות כוח ותשתיות אזרחיות אוקראיניות וביסוס קווי שליטה באזורי החיץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/17/ukraine-war-briefing-russia-building-non-negotiable-security-zone-inside-ukrainian-border-putin-declares",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-hits-russian-drone-manufacturing-plant-in-rostov-oblast/",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058522/",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2203573",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48659",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4175520-russian-missile-strike-on-kharkiv-injures-three-people.html",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T13:54:20+00:00",
  "changes": {
   "UKRAINE-10180240-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "השבתת טיסות במוסקבה ובסנקט פטרבורג בעקבות תקיפת רחפנים",
    "score": 0.817
   },
   "UKRAINE-10180240-02": {
    "kind": "new"
   },
   "UKRAINE-10180240-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "השהיית סנקציות אמריקאיות על רוסיה והתנגדות אוקראינית",
    "score": 1.0
   },
   "UKRAINE-10180240-04": {
    "kind": "new"
   },
   "UKRAINE-10180240-05": {
    "kind": "new"
   },
   "UKRAINE-10180240-06": {
    "kind": "new"
   },
   "UKRAINE-10180240-07": {
    "kind": "new"
   },
   "UKRAINE-10180240-08": {
    "kind": "possible",
    "prev": "אוקראינה פגעה במפעל כטבמים ובמחסן תחמושת ברוסיה",
    "score": 0.467
   },
   "UKRAINE-10180240-09": {
    "kind": "new"
   },
   "UKRAINE-10180240-10": {
    "kind": "new"
   },
   "UKRAINE-10180240-11": {
    "kind": "new"
   },
   "UKRAINE-10180240-12": {
    "kind": "new"
   },
   "UKRAINE-10180240-13": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-18T0241__north-202610180241.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-18T02:41:40+00:00",
   "window": {
    "from": "2026-10-17T02:41:40+00:00",
    "to": "2026-10-18T02:41:40+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610180241"
   },
   "summary": "הגזרה מתאפיינת בפעילות צבאית נמשכת של ישראל בדרום לבנון ובדרום סוריה לצד היערכות לשיחות משולשות בארצות הברית לבלימת ההסלמה. במקביל, השלטונות בלבנון פועלים משפטית נגד גורמים בחזבאללה על רקע הברחת חומרי נפץ ופועלים במישור הדיפלומטי מול צרפת להארכת מנדט יוניפי\"ל. המתיחות נשמרת מול דרישות ישראל לפירוק חזבאללה מנשקו ויציאה מדרום לבנון.",
   "fronts": [
    {
     "name": "דרום לבנון וישראל",
     "status": "עימות צבאי פעיל הכולל הפגזות לצד מגעים מדיניים לקראת שיחות משולשות"
    },
    {
     "name": "דרום סוריה וישראל",
     "status": "פעילות צבאית ישראלית קרקעית ואווירית מוגבלת וקריאות סוריות להתערבות האו\"ם"
    },
    {
     "name": "הזירה הפנים-לבנונית מול חזבאללה",
     "status": "מתח ביטחוני ומשפטי בעקבות תפיסת חומרי נפץ וצווי מעצר לבכירי הארגון"
    }
   ],
   "events": [
    {
     "id": "NORTH-10180241-01",
     "title": "הכרזה על שיחות משולשות בין לבנון, ישראל וארצות הברית בפלורידה",
     "summary": "משלחת צבאית מלבנון צפויה להשתתף במפגש משולש בטמפה שבפלורידה כדי לדרוש את עצירת התקיפות וההסלמה הישראלית ולקדם יישום של הסכם המסגרת.",
     "axis": "לבנון - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T19:13:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T19:13:53+00:00",
     "last_update_at": "2026-10-17T22:44:52+00:00",
     "what_is_not_verified": "נכונות הצד הישראלי להיענות לדרישות לבנון ועמדת ארצות הברית בנוגע לתנאי ההסכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21646881",
       "published_at": "2026-10-17T22:44:52+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/lebanon-says-military-delegation-will-press-halt-israeli-attacks-us-talks",
       "published_at": "2026-10-17T20:46:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
       "published_at": "2026-10-17T19:48:34+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-to-take-part-in-us-backed-trilateral-talks-with-israel-on-oct-20-president-says/4092254",
       "published_at": "2026-10-17T19:13:53+00:00"
      }
     ],
     "places": [
      {
       "name": "טמפה, ארצות הברית",
       "lat": 27.945,
       "lon": -82.4583
      }
     ]
    },
    {
     "id": "NORTH-10180241-02",
     "title": "פעילות צבאית ותקיפות ישראליות בדרום לבנון",
     "summary": "פיצוץ משמעותי בוצע באזור זוטר א-שרקיה בנבטיה לאחר ירי ארטילרי לסירוגין, ובמקביל צבא לבנון נטרל שתי פצצות שלא התפוצצו בעיירות כפרא ותולין.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T19:48:34+00:00",
     "last_update_at": "2026-10-17T19:48:34+00:00",
     "what_is_not_verified": "היקף הנזק או הנפגעים כתוצאה מהפיצוץ ומהירי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
       "published_at": "2026-10-17T19:48:34+00:00"
      }
     ],
     "places": [
      {
       "name": "כפרא, לבנון",
       "lat": 33.1805,
       "lon": 35.354
      }
     ]
    },
    {
     "id": "NORTH-10180241-03",
     "title": "תנועת כוחות ישראליים במרחב הכפרי המערבי של דרעא בסוריה",
     "summary": "שני כלי רכב צבאיים של ישראל נכנסו לאזור ואדי א-רקאד בדרום סוריה בליווי פעילות של כטב\"מי סיור.",
     "axis": "דרום סוריה - ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:50:32+00:00",
     "last_update_at": "2026-10-17T12:50:32+00:00",
     "what_is_not_verified": "מטרת הפעילות או משך השהות של הכלים בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-enter-western-daraa-countryside-in-southern-syria/4091982",
       "published_at": "2026-10-17T12:50:32+00:00"
      }
     ],
     "places": [
      {
       "name": "ואדי א-רקאד, סוריה",
       "lat": 32.8011,
       "lon": 35.8268
      },
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-10180241-04",
     "title": "קריאת מושל קוניטרה לתיעוד הפרות ישראליות בידי כוח האו\"ם",
     "summary": "מושל מחוז קוניטרה בסוריה פנה לכוחות האו\"ם בדרישה לתעד הפרות של ישראל כדי לסייע בהגנה על התושבים המקומיים.",
     "axis": "דרום סוריה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:16:41+00:00",
     "last_update_at": "2026-10-17T12:16:41+00:00",
     "what_is_not_verified": "מענה או תגובה רשמית של כוחות האו\"ם לקריאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-s-quneitra-governor-urges-un-force-to-document-israeli-violations/4091954",
       "published_at": "2026-10-17T12:16:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10180241-05",
     "title": "הוצאת צווי מעצר בלבנון נגד בכירי חזבאללה בפרשת משאית חומרי הנפץ",
     "summary": "התובע הכללי בלבנון הוציא צווי מעצר לשני בכירים בחזבאללה, חסין עבדאללה ועלי איוב, בעקבות תפיסת משאית עם חומרי נפץ שהייתה בדרכה מבעלבכ לדאחיה.",
     "axis": "לבנון פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:17:22+00:00",
     "last_update_at": "2026-10-17T08:17:22+00:00",
     "what_is_not_verified": "יעדי הפיגועים המדויקים שתוכננו באמצעות חומרי הנפץ וזהות מעורבים נוספים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132046",
       "published_at": "2026-10-17T08:17:22+00:00"
      }
     ],
     "places": [
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      }
     ]
    },
    {
     "id": "NORTH-10180241-06",
     "title": "שיחות בכירי ממשל צרפת בביירות על נוכחות בינלאומית והסכם המסגרת",
     "summary": "שרי החוץ וההגנה של צרפת הגיעו ללבנון לדיונים עם הנשיא ומפקד הצבא בנוגע להסדרי הנוכחות הבינלאומית בדרום המדינה, הארכת מנדט יוניפי\"ל ויישום הסכם המסגרת.",
     "axis": "לבנון - צרפת",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:10:52+00:00",
     "last_update_at": "2026-10-17T19:48:34+00:00",
     "what_is_not_verified": "הסכמת כלל המדינות החברות באו\"ם להארכת מנדט יוניפי\"ל עד שנת 2027",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
       "published_at": "2026-10-17T19:48:34+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963310/french-foreign-and-defense-ministers-arrive-in-lebanon-for-talks-on-se/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963310",
       "published_at": "2026-10-17T08:10:52+00:00"
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
     "id": "NORTH-10180241-07",
     "title": "פגישת שרי החוץ של איראן ולבנון בבגדאד",
     "summary": "שר החוץ האיראני עראקצ'י נועד עם מקבילו הלבנוני רג'י והדגיש את תמיכת ארצו בריבונות לבנון ובביטחונה מול פעולות ישראל.",
     "axis": "לבנון - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T14:19:11+00:00",
     "last_update_at": "2026-10-17T16:36:59+00:00",
     "what_is_not_verified": "פרטי הסיוע המעשי שאיראן מתכוונת להעניק ללבנון מעבר להצהרות תמיכה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139382/",
       "published_at": "2026-10-17T16:36:59+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139372/",
       "published_at": "2026-10-17T16:35:44+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139297/",
       "published_at": "2026-10-17T14:19:11+00:00"
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
    "טענות עיתון אלאח'באר על ייעוד חומרי הנפץ לביצוע חיסולים בתוך לבנון",
    "מידת ההסכמה הישראלית לעמוד בהסכם המסגרת מחודש יוני",
    "ההיתכנות המעשית של הארכת מנדט כוח יוניפי\"ל עד 2027 ללא וטו באו\"ם"
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
     "value": 3.0945,
     "unit": "ILS",
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "לבנון (ממשל ונשיאות)",
     "declared": [
      "הבאת משלחת צבאית לשיחות בארצות הברית כדי לבלום את ההסלמה והתקיפות הישראליות",
      "הארכת מנדט כוח יוניפי\"ל בדרום המדינה עד לסוף שנת 2027",
      "יישום תוצאות התואמות להסכם המסגרת שנחתם בתיווך ארצות הברית"
     ],
     "inferred": [
      "מניעת עימות ישיר בין צבא לבנון לכוחות צה\"ל באמצעות נוכחות כוח בינלאומי חוצץ",
      "צמצום חופש הפעולה הצבאי והמבצעי העצמאי של חזבאללה בשטח המדינה"
     ],
     "forecast": [
      "המשך הדרישה לפיקוח בינלאומי הדוק בדרום המדינה כדי למנוע ריק ביטחוני",
      "התגברות החיכוך הפוליטי והביטחוני הפנימי סביב פעילות חזבאללה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התעקשות על פירוק חזבאללה מנשקו ויציאתו מאזור דרום לבנון"
     ],
     "inferred": [
      "המשך הפעלת לחץ צבאי באש ובתנועות קרקעיות בדרום לבנון ובדרום סוריה לאבטחת הגבול",
      "החזקת רצועת ביטחון ומניעת התבססות של גורמים עוינים סמוך לגבול"
     ],
     "forecast": [
      "התמדה בהתקפות נקודתיות בדרום לבנון גם במקביל לקיום שיחות מדיניות"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "תמיכה בריבונות לבנון, בשלמות שטחה ובביטחונה הלאומי מול ישראל"
     ],
     "inferred": [
      "שימור ההשפעה המדינית והביטחונית בלבנון באמצעות גיבוי רשמי לממשלה ולקשריה האזוריים"
     ],
     "forecast": [
      "המשך ניסיונות דיפלומטיים לבלום לחצים בינלאומיים המופעלים על בעלי בריתה בלבנון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/139297/",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/lebanon-says-military-delegation-will-press-halt-israeli-attacks-us-talks",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-s-quneitra-governor-urges-un-force-to-document-israeli-violations/4091954",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21646881",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963310/french-foreign-and-defense-ministers-arrive-in-lebanon-for-talks-on-se/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963310",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132046",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T13:55:24+00:00",
  "changes": {
   "NORTH-10180241-01": {
    "kind": "possible",
    "prev": "ממצאים המעכבים חידוש טיסות ישירות מארצות הברית לביירות",
    "score": 0.467
   },
   "NORTH-10180241-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות והפגזות של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10180241-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "חדירת כלי רכב צבאיים ישראליים לאזור דרעא בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10180241-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פניית מושל קוניטרה לכוח האו\"ם לתיעוד הפרות ישראליות",
    "score": 1.0
   },
   "NORTH-10180241-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הוצאת צווי מעצר בלבנון לבכירים בחזבאללה בעקבות תפיסת משאית נפץ",
    "score": 1.0
   },
   "NORTH-10180241-06": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ביקור שרי החוץ וההגנה של צרפת בביירות",
    "score": 1.0
   },
   "NORTH-10180241-07": {
    "kind": "new"
   }
  }
 }
};
