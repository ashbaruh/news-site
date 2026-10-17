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
  "draft": "drafts/ukraine/2026-10-17T1354__ukraine-202610171354.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-17T13:54:20+00:00",
   "window": {
    "from": "2026-10-16T13:54:20+00:00",
    "to": "2026-10-17T13:54:20+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610171354"
   },
   "summary": "רוסיה מגבירה את התקיפות על תשתיות האנרגיה באוקראינה בניסיון להשבית את מערכות החשמל והמים בערים הגדולות לקראת החורף, לצד המשך הלחימה הקרקעית במזרח ובדרום. מנגד, אוקראינה מבצעת פשיטות כטבמים נרחבות נגד יעדים צבאיים, מתקני ייצור ונמלי תעופה בעומק שטח רוסיה. במקביל, נרשמת מתיחות משמעותית עקב הגבלות תפעוליות על מערך הלוויינים סטארלינק והחלטת הממשל בארצות הברית להשהות חלק מהסנקציות על מוסקבה.",
   "fronts": [
    {
     "name": "חזית דונייצק ודוברופיליה",
     "status": "לחימה פעילה וטענות סותרות על כיבוש יישובים"
    },
    {
     "name": "חזית זפוריז'יה (הוליאיפולה)",
     "status": "היתקלויות מקומיות ודיווחים על פשעי מלחמה נגד שבויים"
    },
    {
     "name": "חזית חרסון ונהר הדנייפרו",
     "status": "חילופי אש ארטילריים ופעילות כטבמים הדדית לאורך הנהר"
    },
    {
     "name": "עומק שטח רוסיה",
     "status": "תקיפות כטבמים אוקראיניות מרובות נגד בסיסים, מפעלים ותעופה אזרחית"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10171354-01",
     "title": "אוקראינה פגעה במפעל כטבמים ובמחסן תחמושת ברוסיה",
     "summary": "המטה הכללי של צבא אוקראינה אישר כי כוחות המגן תקפו את מפעל הפיתוח והייצור של כטבמים רובואביה במחוז רוסטוב ומחסן אספקה של חטיבת טילים במחוז בריאנסק.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:40:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:40:00+00:00",
     "last_update_at": "2026-10-17T12:40:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק באתרים שהותקפו לא צוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175442-ukraines-defense-forces-strike-russian-drone-facility-missile-brigade-supply-depot.html",
       "published_at": "2026-10-17T12:40:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10171354-02",
     "title": "השבתת טיסות במוסקבה ובסנקט פטרבורג בעקבות תקיפת רחפנים",
     "summary": "נמלי התעופה במוסקבה ובסנקט פטרבורג השביתו ועיכבו מאות טיסות עקב איום כטבמים אוקראיניים, כאשר ראש עיריית מוסקבה טען כי 140 רחפנים יורטו.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T18:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:46:00+00:00",
     "last_update_at": "2026-10-17T12:46:00+00:00",
     "what_is_not_verified": "מספר הכטבמים שיורטו בפועל נמסר מפי ראש עיריית מוסקבה בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058508/",
       "published_at": "2026-10-17T12:46:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-03",
     "title": "דיווח על הוצאה להורג של שבויים אוקראינים במחוז זפוריז'יה",
     "summary": "גורם צבאי אוקראיני דיווח כי חיילים רוסים מחטיבת חיל רגלים ממוכן הוציאו להורג שני שבויי מלחמה אוקראינים פצועים ולא חמושים בחזית הוליאיפולה.",
     "axis": "זפוריז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:04:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:04:00+00:00",
     "last_update_at": "2026-10-17T12:04:00+00:00",
     "what_is_not_verified": "זהות ההרוגים ומספרם המדויק מסתמכים על יירוט קשר רדיו אוקראיני בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058504/",
       "published_at": "2026-10-17T12:04:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10171354-04",
     "title": "הגבלות מהירות על רשת סטארלינק באוקראינה",
     "summary": "מהירות הגישה לרשת סטארלינק באוקראינה הוגבלה, דבר שמקשה על הכוחות האוקראיניים ליירט כטבמים מסוג שאהד בעלי מנוע סילון ולנהל מבצעים בשטח, בעוד גורמים בארהב מכחישים מעורבות ישירה במתן ההוראה.",
     "axis": "הזירה האווירית והטכנולוגית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T18:01:19+00:00",
     "last_update_at": "2026-10-17T13:18:00+00:00",
     "what_is_not_verified": "זהות הגורם שנתן את ההוראה להטלת המגבלות והאם אילון מאסק או הממשל האמריקאי עומדים מאחוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175451-ukraine-loses-ability-to-use-starlink-to-shoot-down-jetpowered-shaheds-zelensky.html",
       "published_at": "2026-10-17T13:18:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/planned-operation-zelensky-confirms-ukraines-starlink-access-not-fully-restored/",
       "published_at": "2026-10-17T11:55:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48619",
       "published_at": "2026-10-16T19:37:37+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckz65g34wyd8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T19:33:48+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/16/trump-denies-ordering-restrictions-on-ukraine-s-military-starlink-service-and-says-he-doesn-t-think-elon-musk-did-either",
       "published_at": "2026-10-16T18:45:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/16/ukraine-military-starlink-access-starshield-volodymyr-zelenskyy",
       "published_at": "2026-10-16T18:01:19+00:00"
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
     "id": "UKRAINE-10171354-05",
     "title": "השהיית סנקציות אמריקאיות על רוסיה והתנגדות אוקראינית",
     "summary": "נשיא ארצות הברית דונלד טראמפ חתם על צו המשהה שורה של סנקציות כלכליות על רוסיה משיקולי ביטחון לאומי, מהלך שגרר ביקורת חריפה מצד נשיא אוקראינה ושר ההגנה האיטלקי.",
     "axis": "מדיני וסנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T23:54:35+00:00",
     "last_update_at": "2026-10-17T13:28:41+00:00",
     "what_is_not_verified": "לא מאומת האם הממשל האמריקאי יסיר סנקציות נוספות בעתיד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/volodymyr-zelenskyy-donald-trump-lift-sanctions-russia-intensify-war-ukraine",
       "published_at": "2026-10-17T13:28:41+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/putin-feels-joy-zelensky-calls-trumps-waiving-of-key-russia-sanctions-wrong/",
       "published_at": "2026-10-17T12:14:26+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-17T11:56:06+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/17/trump-puts-new-russia-sanctions-passed-by-congress-on-hold-amid-deepening-row-with-ukraine",
       "published_at": "2026-10-17T02:53:38+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c64g18ljjd8do?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T23:54:35+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-06",
     "title": "רוסיה מתכננת מתקפות לפגיעה בתשתיות האנרגיה לקראת החורף",
     "summary": "מסמכים ודיווחים מצביעים על תוכנית רוסית לתקוף תחנות כוח ואספקת חשמל, חום ומים בערים מרכזיות באוקראינה כדי להביא לכניעתה טרם עונת החורף.",
     "axis": "הזירה האווירית והעורף האוקראיני",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T12:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:00:00+00:00",
     "last_update_at": "2026-10-17T13:28:41+00:00",
     "what_is_not_verified": "היקף החימושים המדויק שרוסיה תפעיל בפועל וסיכויי הצלחת התוכנית",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/volodymyr-zelenskyy-donald-trump-lift-sanctions-russia-intensify-war-ukraine",
       "published_at": "2026-10-17T13:28:41+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/16/russia-plans-winter-strikes-to-cut-off-electricity-heat-and-water-in-kyiv-kharkiv-and-odesa-to-force-ukraine-s-surrender-nyt-reports",
       "published_at": "2026-10-16T18:16:05+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168614",
       "published_at": "2026-10-16T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-07",
     "title": "חבילת סיוע שוודית לרשת האנרגיה האוקראינית",
     "summary": "שוודיה הכריזה על חבילת תמיכה כספית בסך חמש מאות מיליון קרונות המיועדת בעיקר לתיקונים דחופים ברשתות החשמל ומערכות החימום באוקראינה.",
     "axis": "סיוע בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:21:00+00:00",
     "last_update_at": "2026-10-17T12:21:00+00:00",
     "what_is_not_verified": "מועד הגעת הציוד בפועל ליעדו באוקראינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058505/",
       "published_at": "2026-10-17T12:21:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סטוקהולם, שוודיה",
       "lat": 59.3251,
       "lon": 18.0711
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-08",
     "title": "הכחשת כיבוש יישובים במחוז דונייצק",
     "summary": "כוחות המשמר הלאומי האוקראיני אזוב הכחישו את טענות הצד הרוסי בדבר השתלטות על היישובים זולוטי קולודיאז', נובוטרויצקה ופטריבקה.",
     "axis": "דונבאס",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T11:58:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T11:58:00+00:00",
     "last_update_at": "2026-10-17T11:58:00+00:00",
     "what_is_not_verified": "המצב הקרקעי המדויק באותם יישובים שנוי במחלוקת בין הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175428-azov-regiment-denies-russian-claims-of-capturing-three-settlements-near-dobropillia.html",
       "published_at": "2026-10-17T11:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דוברופיליה, מחוז דונייצק, אוקראינה",
       "lat": 48.4683,
       "lon": 37.0903
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-09",
     "title": "מעצר שוטרי גבול אוקראינים בשטח מולדובה",
     "summary": "שני אנשי משמר הגבול של אוקראינה נעצרו על ידי משטרת הגבולות של מולדובה לאחר שחצו את נהר הדנייסטר בעת מרדף אחר אזרח שנמלט מאוקראינה.",
     "axis": "גבול אוקראינה-מולדובה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T11:19:05+00:00",
     "last_update_at": "2026-10-17T11:19:05+00:00",
     "what_is_not_verified": "נסיבות ההגעה לגדה המולדובית שנויות במחלוקת בין טענת חצייה יזומה לטענת תקלה במנוע וגרירה בידי אזרחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48625",
       "published_at": "2026-10-17T11:19:05+00:00"
      }
     ],
     "places": [
      {
       "name": "הולושניצה, מולדובה",
       "lat": 48.2517,
       "lon": 28.1786
      }
     ]
    }
   ],
   "not_verified": [
    "טענת רוסיה על כיבוש היישובים זולוטי קולודיאז', נובוטרויצקה ופטריבקה",
    "הטענה כי סרטון שבויים אוקראינים בדונייצק מבוים על ידי חיילים רוסים",
    "מעורבות ישירה של הבית הלבן או אילון מאסק במתן ההוראה להגבלת מהירות סטארלינק",
    "כוונת רוסיה להציב מערכות טילים בליסטיים בשטח בלארוס",
    "מספר הכטבמים המדויק שיורט מעל שמי מוסקבה"
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
     "actor": "רוסיה",
     "declared": [
      "יצירת אזור ביטחון לאורך הגבול שאינו פתוח למשא ומתן"
     ],
     "inferred": [
      "השמדת רשת האנרגיה והחום של אוקראינה כדי לכפות עליה כניעה בחורף",
      "החלשת הלחץ הכלכלי באמצעות הפשרת נכסים והסרת סנקציות דרך מדינות שותפות"
     ],
     "forecast": [
      "המשך מיקוד התקיפות האוויריות בתחנות כוח ומערכות מים בערים מרכזיות",
      "העמקת הלחץ הצבאי בדונבאס תוך שימוש בכטבמים וחימושים מדויקים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת טילי פטריוט נוספים מאירופה ופיתוח תוכניות הגנה מפני טילים",
      "הגנה על הריבונות והמשך פעולות התקפיות בעומק שטח האויב"
     ],
     "inferred": [
      "שימור תמיכת בעלות הברית באירופה לנוכח צמצום הסיוע והסרת סנקציות מצד ארהב",
      "פגיעה בשרשראות האספקה והייצור של מערך הכטבמים והטילים הרוסי"
     ],
     "forecast": [
      "מאמצים דחופים לשיקום תשתיות החשמל והשגת מענה חלופי להגבלות התקשורת",
      "החרפת המחאה והלחץ הפנימי בערים עקב קשיי אספקת האנרגיה בחורף"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c64g18ljjd8do?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/17/volodymyr-zelenskyy-donald-trump-lift-sanctions-russia-intensify-war-ukraine",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/putin-feels-joy-zelensky-calls-trumps-waiving-of-key-russia-sanctions-wrong/",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/16/russia-plans-winter-strikes-to-cut-off-electricity-heat-and-water-in-kyiv-kharkiv-and-odesa-to-force-ukraine-s-surrender-nyt-reports",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058505/",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48625",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4175428-azov-regiment-denies-russian-claims-of-capturing-three-settlements-near-dobropillia.html",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168614",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-16T23:40:33+00:00",
  "changes": {
   "UKRAINE-10171354-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "רוסיה שיגרה מאות כטב\"מים וטילים לעבר אוקראינה",
    "score": 0.65
   },
   "UKRAINE-10171354-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הגבלות תעופה בנמלי תעופה במוסקבה בעקבות מתקפות",
    "score": 0.817
   },
   "UKRAINE-10171354-03": {
    "kind": "new"
   },
   "UKRAINE-10171354-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת ודיווחים על הגבלת שירותי סטארלינק וסטארשילד לכוחות אוקראינה",
    "score": 1.0
   },
   "UKRAINE-10171354-05": {
    "kind": "new"
   },
   "UKRAINE-10171354-06": {
    "kind": "possible",
    "prev": "פגיעה במבני מגורים בחרקוב כתוצאה מתקיפה רוסית",
    "score": 0.633
   },
   "UKRAINE-10171354-07": {
    "kind": "new"
   },
   "UKRAINE-10171354-08": {
    "kind": "new"
   },
   "UKRAINE-10171354-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-17T1355__north-202610171355.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-17T13:55:24+00:00",
   "window": {
    "from": "2026-10-16T13:55:24+00:00",
    "to": "2026-10-17T13:55:24+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610171355"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהמשך פעילות צבאית ישראלית מקומית הכוללת אש ארטילרית, גיחות רחפנים ושיגורי יירוט בדרום לבנון, לצד תנועת כוחות קרקעיים מוגבלת בדרום סוריה. במקביל, רשויות המדינה בלבנון מגבירות את האכיפה והלחץ המשפטי והמוסדי נגד תשתיות חזבאללה והשפעת איראן, בעוד ארצות הברית דוחפת לשינויי חקיקה ביחס לקשרים עם ישראל. בציר המדיני והכלכלי, גורמים בינלאומיים וערביים, בהם צרפת וקטר, מקדמים פרויקטים של תשתיות והסדרים ביטחוניים עתידיים להחלפת כוחות יוניפי\"ל.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות אש ישראלית יומיומית הכוללת ירי ארטילרי, תקיפות רחפנים ושיגור מיירטים מול נוכחות כוחות בשטח"
    },
    {
     "name": "דרום סוריה",
     "status": "תנועת רכבי סיור צבאיים של צה\"ל במחוז דרעא, איסוף אווירי ומתיחות סביב דרישות לפיקוח האו\"ם במחוז קוניטרה"
    },
    {
     "name": "פנים לבנון והמערכת הפוליטית",
     "status": "החרפת החיכוך בין מנגנוני הביטחון והמשפט הלבנוניים לבין חזבאללה בעקבות תפיסת אמצעי לחימה וסגירת ערוצי מימון איראניים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10171355-01",
     "title": "חדירת כלי רכב צבאיים ישראליים לאזור דרעא בדרום סוריה",
     "summary": "שני כלי רכב צבאיים של ישראל נכנסו למרחב ואדי אל-רוקאד במערב מחוז דרעא, במקביל לפעילות של כלי טיס בלתי מאויש לאיסוף מודיעין.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:50:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:50:32+00:00",
     "last_update_at": "2026-10-17T12:50:32+00:00",
     "what_is_not_verified": "לא פורסמו פרטים נוספים או אימות רשמי על יעד הפעילות ומשכה מעבר לדיווח בסוכנות הידיעות.",
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
       "name": "ואדי אל-רוקאד, סוריה",
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
     "id": "NORTH-10171355-02",
     "title": "תקיפות והפגזות של צה\"ל בדרום לבנון",
     "summary": "הפגזות ארטילריות, ירי טנקים ואש מקלעים בוצעו לעבר עיירות ושטחים פתוחים בדרום לבנון, בהם חדאת'א, אל-מנצורי, עיתא אל-ג'בל ועמק אל-חג'יר, לצד פיצוץ סמוך למוסד דתי ותנועת רק\"ם.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T09:00:45+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T09:00:45+00:00",
     "last_update_at": "2026-10-17T09:00:45+00:00",
     "what_is_not_verified": "אין אימות עצמאי לכלל המיקומים ולנזקים שנגרמו כתוצאה מהאש המדווחת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a6a60e0ebed53d4d",
       "url": "https://english.almanar.com.lb/article/139207/",
       "published_at": "2026-10-17T09:00:45+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      },
      {
       "name": "עיתא אל-ג'בל, לבנון",
       "lat": 33.1745,
       "lon": 35.4094
      },
      {
       "name": "תולין, לבנון",
       "lat": 33.2544,
       "lon": 35.4399
      }
     ]
    },
    {
     "id": "NORTH-10171355-03",
     "title": "הטלת פצצות מרחפן ישראלי על מבנה במיפדון",
     "summary": "רחפן ישראלי הטיל פצצות על מבנה בכפר מיפדון שבנפת א-נבטיה בדרום לבנון; הפצצה הראשונה לא התפוצצה והשנייה התפוצצה, וצבא לבנון פעל לנטרול הנפל.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T14:01:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T14:01:54+00:00",
     "last_update_at": "2026-10-16T14:23:17+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים במבנה שהותקף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48605",
       "published_at": "2026-10-16T14:23:17+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132025",
       "published_at": "2026-10-16T14:01:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מיפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      }
     ]
    },
    {
     "id": "NORTH-10171355-04",
     "title": "שיגור מיירטים לעבר מטרת שווא בדרום לבנון",
     "summary": "שני מיירטים שוגרו לעבר מטרה שהתבררה כמטרת שווא במרחב שבו פועלים כוחות צה\"ל בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T16:33:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:33:01+00:00",
     "last_update_at": "2026-10-16T16:59:04+00:00",
     "what_is_not_verified": "מהות האות שהביא לזיהוי הראשוני כמטרה חשודה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132031",
       "published_at": "2026-10-16T16:59:04+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25392",
       "published_at": "2026-10-16T16:57:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132030",
       "published_at": "2026-10-16T16:34:57+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25391",
       "published_at": "2026-10-16T16:33:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10171355-05",
     "title": "הוצאת צווי מעצר בלבנון לבכירים בחזבאללה בעקבות תפיסת משאית נפץ",
     "summary": "התובע הכללי בלבנון הוציא צווי מעצר לבכירים בחזבאללה, בהם ראש ועדת הקישור חסין עבדאללה ועוזרו, לאחר שנתפסה משאית ובה שמונה מאות קילוגרמים של חומרי נפץ בדרכה מבעלבכ לדאחיה בביירות.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T08:17:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:17:22+00:00",
     "last_update_at": "2026-10-17T08:17:22+00:00",
     "what_is_not_verified": "החשד כי חומר הנפץ יועד לביצוע התנקשויות בתוך לבנון טרם אומת בהליך שיפוטי.",
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
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10171355-06",
     "title": "עימות וחילוקי דעות בין חזבאללה לגורמי ביטחון באזור גלרי סמעאן",
     "summary": "חמושים מטעם חזבאללה כיתרו סיור של מחלקת החקירות הפליליות של לבנון, ונסוגו עם הגעת צבא לבנון; חזבאללה הכחיש כל קשר למחסן שנבדק וטען כי הפעולה נעשתה בניגוד למנגנון התיאום.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T12:01:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T12:01:33+00:00",
     "last_update_at": "2026-10-16T13:55:24+00:00",
     "what_is_not_verified": "תוכן המחסן והגורמים המדויקים המחזיקים בו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb3f0d25ec960f0a",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963227/hezbollah-clarifies-gallery-semaan-incident-denies-links-to-warehouse/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963227",
       "published_at": "2026-10-16T13:45:12+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb3f0d25ec960f0a",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963212/lebanese-army-intervenes-after-armed-hezbollah-members-surround-crimin/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963212",
       "published_at": "2026-10-16T12:01:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10171355-07",
     "title": "שלילת רישיון הפעילות של בנק סאדראת האיראני בלבנון",
     "summary": "נגיד הבנק המרכזי של לבנון הודיע על שלילת רישיונו של בנק סאדראת האיראני כדי להגן על המערכת הבנקאית במדינה מפני סנקציות מצד ארצות הברית.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T17:07:13+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:07:13+00:00",
     "last_update_at": "2026-10-16T17:07:13+00:00",
     "what_is_not_verified": "אין מחלוקת על שלילת הרישיון; הערכות לגבי היעדר השפעה כלכלית מתבססות על ניתוח מומחה בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/avoiding-sanctions-lebanon-revokes-bank-saderat-irans-license",
       "published_at": "2026-10-16T17:07:13+00:00"
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
     "id": "NORTH-10171355-08",
     "title": "לחץ אמריקאי לביטול חוק החרם על ישראל בלבנון",
     "summary": "שר החוץ האמריקאי העלה בשיחה עם נשיא לבנון דרישה לבטל או לשנות את חוק החרם על ישראל מ-1955 ולקדם ערוץ תקשורת צבאי ישיר בין המדינות, בעקבות תלונה משפטית נגד שגרירת לבנון בוושינגטון.",
     "axis": "לבנון - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T14:15:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T14:15:00+00:00",
     "last_update_at": "2026-10-16T16:26:02+00:00",
     "what_is_not_verified": "האם התקיימה בפועל פנייה ישירה בין שגרירת לבנון לשגריר ישראל, שכן נשיא לבנון הכחיש זאת והתיק נסגר מחוסר ראיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-pressures-lebanon-scrap-israel-boycott-laws",
       "published_at": "2026-10-16T16:26:02+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963199/lebanons-1955-israel-boycott-law-why-is-the-us-raising-it-now/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963199",
       "published_at": "2026-10-16T14:15:00+00:00"
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
     "id": "NORTH-10171355-09",
     "title": "קידום מיזם אנרגיה וחשמל קטארי ללבנון דרך סוריה",
     "summary": "לבנון וקטר סיכמו על הכנת מזכר הבנות לפרויקט אספקת חשמל וגז טבעי מתוצרת חברת יו-סי-סי הקטארית דרך שטח סוריה, לצד בחינת חיבור עתידי של קווי נפט.",
     "axis": "לבנון - קטר - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T12:53:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:53:30+00:00",
     "last_update_at": "2026-10-17T11:37:09+00:00",
     "what_is_not_verified": "לוחות הזמנים ליישום והיכולת להזרים חשמל וגז בפועל דרך שטח סוריה ללא מכשולים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21643674",
       "published_at": "2026-10-17T11:37:09+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/qatar-seeks-to-activate-joint-energy-projects-with-lebanon-urges-israeli-withdrawal/4091562",
       "published_at": "2026-10-16T21:35:48+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/qatar-announces-project-develop-lebanons-electricity-sector",
       "published_at": "2026-10-16T14:59:16+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/qatar-pm-beirut-lebanon-seeks-economic-relief-what-know",
       "published_at": "2026-10-16T14:03:57+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963219/sources-to-lbci-lebanon-qatar-move-forward-with-electricity-project-to/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963219",
       "published_at": "2026-10-16T12:53:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "דיר עמאר, לבנון",
       "lat": 34.462,
       "lon": 35.8994
      }
     ]
    },
    {
     "id": "NORTH-10171355-10",
     "title": "האשמות סוריות נגד ישראל בנושא הדרוזים בא-סווידאא",
     "summary": "גורם בממשלת סוריה דחה את הצהרות ראש ממשלת ישראל על שיחה עם נשיא סוריה בעת אירועי יולי 2025, והאשים את ישראל בניצול הדרוזים לצורכי תעמולת בחירות ובחימוש מליציה מקומית ליצירת תסיסה.",
     "axis": "סוריה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T17:04:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:04:39+00:00",
     "last_update_at": "2026-10-17T10:56:50+00:00",
     "what_is_not_verified": "דמשק לא אישרה ולא הכחישה את עצם קיום השיחה הטלפונית בין נתניהו לא-שרע, וטענות חימוש המליציה לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132059",
       "published_at": "2026-10-17T10:56:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132058",
       "published_at": "2026-10-17T10:32:55+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-rejects-israeli-politicisation-suweidas-druze",
       "published_at": "2026-10-16T17:04:39+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-10171355-11",
     "title": "פניית מושל קוניטרה לכוח האו\"ם לתיעוד הפרות ישראליות",
     "summary": "מושל קוניטרה בסוריה קרא לכוח המשקיפים של האו\"ם לתעד הפרות של ישראל בגזרה על מנת להגן על האוכלוסייה המקומית.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:16:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:16:41+00:00",
     "last_update_at": "2026-10-17T12:16:41+00:00",
     "what_is_not_verified": "תגובת כוח האו\"ם או היקף ההפרות המוצהרות.",
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
     "id": "NORTH-10171355-12",
     "title": "ביקור שרי החוץ וההגנה של צרפת בביירות",
     "summary": "שרי החוץ וההגנה של צרפת הגיעו ללבנון לדיונים עם הנשיא ומפקד הצבא על הנוכחות הבינלאומית בדרום המדינה לאחר תום מנדט יוניפי\"ל ויישום הסכם המסגרת עם ישראל.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T08:10:52+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:10:52+00:00",
     "last_update_at": "2026-10-17T08:10:52+00:00",
     "what_is_not_verified": "פרטי הסיכומים שיושגו במהלך השיחות עם ההנהגה הלבנונית.",
     "is_new_in_window": true,
     "reports": [
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
     "id": "NORTH-10171355-13",
     "title": "ממצאים המעכבים חידוש טיסות ישירות מארצות הברית לביירות",
     "summary": "דוח של סוכנות התעופה האזרחית הבינלאומית של האו\"ם הצביע על ליקויים בנמל התעופה הבינלאומי בביירות והיעדר אישור תקף, דבר המעכב את המהלך האמריקאי לחידוש טיסות ישירות.",
     "axis": "לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T14:30:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T14:30:34+00:00",
     "last_update_at": "2026-10-16T21:48:05+00:00",
     "what_is_not_verified": "משך העיכוב עד להשלמת דרישות הבטיחות על ידי הרשויות בלבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
       "published_at": "2026-10-16T21:48:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
       "published_at": "2026-10-16T16:46:29+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963236/trump-move-to-restart-direct-us-flights-with-lebanon-hits-roadblock-re/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963236",
       "published_at": "2026-10-16T14:30:34+00:00"
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
    "טענת ראש ממשלת ישראל על שיחה טלפונית חריפה עם נשיא סוריה ביולי 2025 שהביאה להפסקת הטבח בא-סווידאא לא אושרה בדמשק",
    "טענות ממשלת סוריה כי ישראל חימשה מליציה מקומית כדי לחולל אי-שקט בדרום המדינה",
    "החשד כי משאית חומרי הנפץ שנתפסה בלבנון יועדה לפעולות התנקשות פוליטיות",
    "הטענה כי שגרירת לבנון בוושינגטון קיימה מגע ישיר עם שגריר ישראל"
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
     "actor": "ישראל",
     "declared": [
      "מניעת טבח באוכלוסייה הדרוזית בדרום סוריה ופגיעה בתשתיות צבאיות בסוריה בעת איום",
      "יירוט מטרות אוויריות חשודות לשמירה על שלום כוחותיה הפועלים בדרום לבנון"
     ],
     "inferred": [
      "שימור חופש פעולה מבצעי ואיסופי ברצועת הגבול בדרום לבנון ובדרום סוריה",
      "קידום נורמליזציה ותקשורת צבאית ישירה עם לבנון תוך שימוש במנופי לחץ אמריקאיים"
     ],
     "forecast": [
      "המשך פעילות אכיפה נקודתית ואש ארטילרית לסיכול התבססות חמושים בסמוך לגבול הצפון",
      "הגברת החיכוך המדיני מול סוריה בנוגע לשליטה ולמעורבות במחוזות הדרומיים"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "הכחשת מעורבות בפעילות של מחסנים ומתקנים אזרחיים בביירות ודרישה להקפדה על מנגנוני התיאום הביטחוניים"
     ],
     "inferred": [
      "ניסיון לשמר את מלאי אמצעי הלחימה וחומרי הנפץ בלבנון חרף הגברת הפיקוח של מנגנוני הביטחון",
      "התנגדות עזה לנורמליזציה ולכל שינוי בחוקי החרם הלבנוניים כלפי ישראל"
     ],
     "forecast": [
      "המשך חיכוך סמוי וגלוי עם מערכת המשפט והצבא בלבנון סביב ניסיונות פירוק נכסי הארגון"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "חקירת הברחות חומרי הנפץ, אכיפת החוק על ידי כוחות הביטחון והגנה על המערכת הבנקאית מסנקציות זרות",
      "הסדרת נוכחות בינלאומית חלופית ליוניפי\"ל בדרום המדינה ושיקום תשתיות החשמל בסיוע קטר"
     ],
     "inferred": [
      "שאיפה לצמצם את האחיזה והעצמאות הביטחונית של חזבאללה בביירות ובדרום המדינה",
      "איזון בין דרישות ארצות הברית לרפורמות ביטחוניות ומדיניות לבין שמירה על יציבות פנימית"
     ],
     "forecast": [
      "החרפת המתח הפוליטי הפנימי בעקבות צעדים משפטיים וכלכליים נגד מוקדי כוח של חזבאללה"
     ]
    },
    {
     "actor": "ממשלת סוריה",
     "declared": [
      "שמירה על מעמדם של הדרוזים בא-סווידאא כחלק בלתי נפרד מסוריה ודחיית כל התערבות ישראלית",
      "קריאה לגורמי האו\"ם לתעד הפרות צבאיות ישראליות במחוז קוניטרה"
     ],
     "inferred": [
      "בלימת הניסיונות הישראליים ליצור אזור השפעה או בריתות עדתיות בדרום המדינה",
      "הסתייעות במיזמי אנרגיה אזוריים עם קטר ולבנון לחיזוק מעמדה כנתיב מעבר חיוני"
     ],
     "forecast": [
      "המשך תלונות דיפלומטיות ודרישה לערבויות בינלאומיות לנוכח כניסות ישראליות לאזור החיץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/139207/",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-s-quneitra-governor-urges-un-force-to-document-israeli-violations/4091954",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21643674",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963236/trump-move-to-restart-direct-us-flights-with-lebanon-hits-roadblock-re/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963236",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132058",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48605",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25391",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-16T23:41:39+00:00",
  "changes": {
   "NORTH-10171355-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פעילות כוחות צה\"ל במחוז דרעא בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10171355-02": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "פעילות צבאית ותקיפות צה\"ל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10171355-03": {
    "kind": "new"
   },
   "NORTH-10171355-04": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירטים לעבר מטרת שווא בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10171355-05": {
    "kind": "new"
   },
   "NORTH-10171355-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "עימות בעקבות פשיטת כוחות ביטחון לבנוניים באזור הדאחייה בביירות",
    "score": 1.0
   },
   "NORTH-10171355-07": {
    "kind": "new"
   },
   "NORTH-10171355-08": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "שלילת רישיון הבנק האיראני סאדראת בלבנון בעקבות לחץ אמריקאי",
    "score": 1.0
   },
   "NORTH-10171355-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ביקור ראש ממשלת קטר בביירות וקידום מיזמי אנרגיה בין קטר, לבנון וסוריה",
    "score": 1.0
   },
   "NORTH-10171355-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חילופי האשמות בין ישראל לממשלת סוריה בנוגע לעדה הדרוזית בא-סווידאא",
    "score": 1.0
   },
   "NORTH-10171355-11": {
    "kind": "new"
   },
   "NORTH-10171355-12": {
    "kind": "new"
   },
   "NORTH-10171355-13": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "דרישה אמריקאית לביטול חוק החרם על ישראל וקשיים בחידוש הטיסות הישירות",
    "score": 1.0
   }
  }
 }
};
