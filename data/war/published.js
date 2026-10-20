/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-20T0754__yemen-202610200754.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-20T07:54:29+00:00",
   "window": {
    "from": "2026-10-19T07:54:29+00:00",
    "to": "2026-10-20T07:54:29+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610200754"
   },
   "summary": "הלחימה בזירה התימנית מסלימה בעוצמה רבה עם חידוש הקרבות בין כוחות הממשלה והקואליציה לבין החות'ים, במקביל לירי חוצה גבולות נרחב לעבר סעודיה. החות'ים פגעו קשות במחנה אימונים של כוחות הביטחון במחוז שבווה והובילו לשיבושים אסטרטגיים בריאד, בעוד הקואליציה תוקפת מטרות ומחסני נשק בתעיז ובסעדה ומסכלת הברחות ימיות. במקביל נרשמת התלבטות מדינית במצרים סביב שליחת כוחות הגנה אווירית לעזרת סעודיה, ודיווחים על אפשרות לחידוש מעורבות של איחוד האמירויות בדרום המדינה.",
   "fronts": [
    {
     "name": "שבווה ודרום תימן",
     "status": "הסלמה קטלנית בעקבות פגיעת טילים במחנה אל-עלם ופגיעה נרחבת במגויסים"
    },
    {
     "name": "מחוז תעיז",
     "status": "קרבות קרקעיים ותקיפות אוויריות ממוקדות של הקואליציה נגד ריכוזי כוחות ומחסני אמל\"ח חות'יים"
    },
    {
     "name": "עומק סעודיה",
     "status": "ירי רקטי, טילי שיוט וכטב\"מים מתימן אשר גרם לסגירת נמל התעופה בריאד ולביטול אירועים ממלכתיים"
    },
    {
     "name": "חופי תימן והים האדום",
     "status": "איומי תקיפה מתמשכים על תנועת שיט, אזהרות קואליציה ויירוט הברחות נשק ימיות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10200754-01",
     "title": "תקיפת טילים בליסטיים של החות'ים על מחנה אימונים במחוז שבווה",
     "summary": "החות'ים שיגרו שלושה טילים בליסטיים לעבר מחנה אל-עלם במחוז שבווה שבדרום תימן, ששימש כמרכז אימונים למגויסים חדשים של כוחות הביטחון של הממשלה המוכרת. בהתקפה נהרגו מעל 50 אנשים ונפצעו יותר מ-200.",
     "axis": "תימן פנימי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T10:59:18+00:00",
     "last_update_at": "2026-10-20T06:20:12+00:00",
     "what_is_not_verified": "מספר ההרוגים המדויק נע בין מעל 30 ליותר מ-50 לפי מקורות שונים, והחות'ים לא מסרו תגובה רשמית לגבי נטילת אחריות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_0e01802f4f81e2bd",
       "url": "https://www.newarab.com/news/diplomatic-visits-attempt-hold-all-out-us-iran-war",
       "published_at": "2026-10-20T06:20:12+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0e01802f4f81e2bd",
       "url": "https://www.sabanew.net/viewstory/154291",
       "published_at": "2026-10-19T19:23:10+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_9914133618e25cab",
       "url": "https://www.sabanew.net/viewstory/154289",
       "published_at": "2026-10-19T19:18:59+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ff8c0e1dd981f1a6",
       "url": "https://www.sabanew.net/viewstory/154284",
       "published_at": "2026-10-19T17:32:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_0e01802f4f81e2bd",
       "url": "https://www.theguardian.com/world/2026/oct/19/houthi-attack-yemen-al-alam-camp-biggest-single-loss-of-life-civil-war",
       "published_at": "2026-10-19T17:15:23+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_0e01802f4f81e2bd",
       "url": "https://www.bbc.co.uk/news/articles/cv0ld6lrr2zeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-19T16:20:51+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_0e01802f4f81e2bd",
       "url": "https://www.newarab.com/news/yemen-forces-advance-taiz-iran-blames-us-hormuz-crisis",
       "published_at": "2026-10-19T15:57:56+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_0e01802f4f81e2bd",
       "url": "https://www.newarab.com/news/dozens-killed-houthi-attack-yemeni-govt-military-camp",
       "published_at": "2026-10-19T12:24:15+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_22c07c4ba9750f5e",
       "url": "https://www.sabanew.net/viewstory/154250",
       "published_at": "2026-10-19T10:59:18+00:00"
      }
     ],
     "places": [
      {
       "name": "עתק, מחוז שבווה, תימן",
       "lat": 14.5729,
       "lon": 46.8319
      }
     ]
    },
    {
     "id": "YEMEN-10200754-02",
     "title": "תקיפות אוויריות של כוחות הקואליציה והממשלה במחוז תעיז",
     "summary": "מטוסי קרב של כוחות הקואליציה בגיבוי סעודיה ביצעו שלוש תקיפות אוויריות נגד יעדים חות'יים במחוז תעיז, בהם פעילי הארגון באזור נג'ד קאסם ומחסן אמל\"ח בג'בל חבשי. לפי הכוחות נהרגו עשרות חות'ים.",
     "axis": "תימן פנימי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:24:15+00:00",
     "last_update_at": "2026-10-19T20:25:26+00:00",
     "what_is_not_verified": "מספר ההרוגים החות'ים (נטען 129 הרוגים ב-48 שעות) לא אומת על ידי מקורות בלתי תלויים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-backed-yemeni-forces-say-they-targeted-houthi-reinforcements-taiz",
       "published_at": "2026-10-19T20:25:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-forces-advance-taiz-iran-blames-us-hormuz-crisis",
       "published_at": "2026-10-19T15:57:56+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/dozens-killed-houthi-attack-yemeni-govt-military-camp",
       "published_at": "2026-10-19T12:24:15+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז תעיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "ג'בל חבשי, מחוז תעיז, תימן",
       "lat": 13.465,
       "lon": 43.881
      }
     ]
    },
    {
     "id": "YEMEN-10200754-03",
     "title": "תקיפות אוויריות באזור בני מעאד' שבמחוז סעדה",
     "summary": "כוחות תימניים ביצעו ארבע תקיפות מן האוויר על אזור בני מעאד' בצפון מחוז סעדה שבתימן.",
     "axis": "תימן פנימי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T06:41:27+00:00",
     "last_update_at": "2026-10-20T06:41:27+00:00",
     "what_is_not_verified": "זהות הכוחות התוקפים והיקף הנפגעים או הנזקים אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-forces-launch-air-strikes-bani-moath-saada",
       "published_at": "2026-10-20T06:41:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10200754-04",
     "title": "אזהרת הקואליציה בהובלת סעודיה מפני הברחות אמל\"ח ימיות של החות'ים וסיכול משלוח",
     "summary": "מפקדת הכוחות המשותפים של הקואליציה בהובלת סעודיה הזהירה מפני הברחת טילים ואמצעי לחימה באמצעות סירות לאורך חופי תימן, וקראה לבעלי סירות להימנע משיתוף פעולה. במקביל נמסר על יירוט והשמדת משלוח נשק מוברח בים.",
     "axis": "הים האדום וחופי תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T19:02:28+00:00",
     "last_update_at": "2026-10-20T07:02:46+00:00",
     "what_is_not_verified": "פרטי הספינה או המשלוח שיורט והושמד לא פורטו באופן רשמי מעבר לציטוט מקור בקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_182cd09ec4fc4e75",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-646",
       "published_at": "2026-10-20T07:02:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_182cd09ec4fc4e75",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-yemen-warns-houthis-against-smuggling-arms-through",
       "published_at": "2026-10-20T01:11:20+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_182cd09ec4fc4e75",
       "url": "https://www.sabanew.net/viewstory/154288",
       "published_at": "2026-10-19T19:02:28+00:00"
      }
     ],
     "places": [
      {
       "name": "חופי תימן",
       "lat": 12.7549,
       "lon": 44.8908
      }
     ]
    },
    {
     "id": "YEMEN-10200754-05",
     "title": "הצהרת החות'ים על שש תקיפות נגד יעדים בסעודיה וסגירת נמל התעופה בריאד",
     "summary": "דובר כוחות החות'ים הצהיר על ביצוע שש פעולות צבאיות נגד אתרים בסעודיה בטווח של 48 שעות, תוך שימוש בטילים בליסטיים, טילי שיוט וכטב\"מים. במקביל נמסר על סגירה ממושכת של נמל התעופה בריאד וביטול ועידת ההשקעות הבינלאומית דבוס במדבר עקב התקיפות.",
     "axis": "סעודיה-חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T11:00:55+00:00",
     "last_update_at": "2026-10-20T01:05:31+00:00",
     "what_is_not_verified": "פגיעות מדויקות או נזקים קונקרטיים מכל שש התקיפות הנטענות של החות'ים לא אומתו מצד גורמים סעודיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/20/saudi-arabia-cancels-2026-davos-in-the-desert-amid-houthi-attacks?traffic_source=rss",
       "published_at": "2026-10-20T01:05:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-claim-six-attacks-targets-saudi-arabia",
       "published_at": "2026-10-20T00:00:41+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-airport-closure-disrupts-life-kingdoms-capital",
       "published_at": "2026-10-19T17:30:24+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/commentisfree/2026/oct/19/saudi-arabia-trump-relationship",
       "published_at": "2026-10-19T11:00:55+00:00"
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
     "id": "YEMEN-10200754-06",
     "title": "מעבר נדיר של מכלית גז קטארית בים האדום תחת איום תקיפות",
     "summary": "מכלית נושאת גז טבעי נוזלי מקטאר עשתה דרכה צפונה דרך הים האדום בדרכה לאירופה, מעבר הנחשב לחריג באזור הנתון לאיומי תקיפות מצד החות'ים.",
     "axis": "הים האדום ומצר באב אל-מנדב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T10:50:00+00:00",
     "last_update_at": "2026-10-19T10:50:00+00:00",
     "what_is_not_verified": "לא דווח על תקרית תקיפה ישירה נגד המכלית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/qatar-lng-cargo-makes-rare-red-sea-journey-to-get-gas-to-europe/",
       "published_at": "2026-10-19T10:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "הים האדום",
       "lat": 20.2966,
       "lon": 38.5343
      }
     ]
    },
    {
     "id": "YEMEN-10200754-07",
     "title": "דחיית הצבעת הפרלמנט המצרי על סיוע צבאי לסעודיה מול החות'ים",
     "summary": "הפרלמנט המצרי דחה ל-26 באוקטובר את ההצבעה על אישור פריסת כוחות הגנה אווירית וסיוע לוגיסטי בסעודיה לבקשת הנשיא א-סיסי, לצורך התמודדות עם מתקפות הטילים והכטב\"מים מתימן.",
     "axis": "הקואליציה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T13:46:32+00:00",
     "last_update_at": "2026-10-19T14:56:08+00:00",
     "what_is_not_verified": "האם הפרלמנט המצרי יאשר את הבקשה בהצבעה העתידית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypt-postpones-sisis-saudi-troop-deployment-vote-next-week",
       "published_at": "2026-10-19T14:56:08+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/whats-behind-egypts-move-towards-possible-military-involvement-saudi-yemen",
       "published_at": "2026-10-19T13:46:32+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר ההרוגים המדויק בתקיפה בשבווה (נע בין מעל 30 ליותר מ-50).",
    "טענת צבא תימן על הריגת 129 לוחמים חות'ים במחוז תעיז.",
    "ההיקף והתוצאות של שש התקיפות שהחות'ים טענו שביצעו בתוך סעודיה.",
    "חזרתה המעשית של איחוד האמירויות להתערבות או מימון ישיר בתימן."
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
     "value": 3.1082,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית (אנצאר אללה)",
     "declared": [
      "המשך ביצוע פעולות צבאיות מול סעודיה באמצעות טילים וכטב\"מים"
     ],
     "inferred": [
      "פגיעה ביציבות הפנימית של ממשלת תימן על ידי תקיפת בסיסי אימונים וגיוס כוחות חדשים",
      "הפעלת לחץ כלכלי ותדמיתי כבד על ריאד באמצעות שיבוש התעופה ועיכוב אירועים בינלאומיים"
     ],
     "forecast": [
      "המשך שיגורים לעבר יעדים בעומק סעודיה והחרפת מאמצי התקיפה לאורך מוקדי הלחימה הקרקעיים בתימן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "מניעת הברחת אמצעי לחימה דרך הים לחות'ים והזהרת גורמים ימיים משיתוף פעולה",
      "תגובה נחרצת כנגד מבצעי המתקפה על מחנה האימונים בשבווה",
      "קידום הכרה בינלאומית בחות'ים כארגון טרור"
     ],
     "inferred": [
      "גיוס תמיכה צבאית חיצונית (כגון הגנה אווירית מצרית) ליירוט איומים בליסטיים וכטב\"מים",
      "בלימת התקדמות החות'ים בתעיז ובשבווה ושחיקת מאגרי הנשק והתחמושת שלהם"
     ],
     "forecast": [
      "הגברת מאמצי הפיקוח והסיכול הימיים מול חופי תימן לצד העמקת התקיפות האוויריות על מטרות חות'יות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/20/saudi-arabia-cancels-2026-davos-in-the-desert-amid-houthi-attacks?traffic_source=rss",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/whats-behind-egypts-move-towards-possible-military-involvement-saudi-yemen",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cv0ld6lrr2zeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/qatar-lng-cargo-makes-rare-red-sea-journey-to-get-gas-to-europe/",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/commentisfree/2026/oct/19/saudi-arabia-trump-relationship",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-claim-six-attacks-targets-saudi-arabia",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/egypt-postpones-sisis-saudi-troop-deployment-vote-next-week",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154288",
     "accessed_at": "2026-10-20T07:54:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T17:21:42+00:00",
  "changes": {
   "YEMEN-10200754-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מתקפת טילים בליסטיים על מחנה אימונים בשבואה",
    "score": 1.0
   },
   "YEMEN-10200754-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות בדרום תעז",
    "score": 1.0
   },
   "YEMEN-10200754-03": {
    "kind": "new"
   },
   "YEMEN-10200754-04": {
    "kind": "new"
   },
   "YEMEN-10200754-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הצהרת החות'ים על תקיפת אתרים בסעודיה",
    "score": 0.65
   },
   "YEMEN-10200754-06": {
    "kind": "new"
   },
   "YEMEN-10200754-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "דחיית הצבעה בפרלמנט המצרי על שליחת כוחות לסעודיה",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-20T0511__iran-202610200511.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-20T05:11:52+00:00",
   "window": {
    "from": "2026-10-19T05:11:52+00:00",
    "to": "2026-10-20T05:11:52+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610200511"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל נכנס לחודשו השביעי ומתאפיין בהסלמה ימית חמורה במצר הורמוז, הכוללת פגיעה בספינות מסחר והפלת כטבם אמריקני. במקביל, בכירים בירושלים ובוושינגטון מקיימים התייעצויות ביטחוניות דחופות סביב האפשרות לחידוש מתקפות צבאיות רחבות היקף באיראן. טהרן מנגד מגבירה את פריסת מערכות ההגנה, מהדקת מגעים עם רוסיה ומאיימת לשבש את משק האנרגיה ותשתיות התקשורת העולמיות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "הסלמה פעילה ופגיעה שיטתית בנתיבי השיט המסחריים והפלת כלי טיס"
    },
    {
     "name": "הזירה הצבאית הישירה בין ישראל וארה\"ב לאיראן",
     "status": "כוננות שיא והיערכות לאפשרות של חידוש גלי תקיפות"
    },
    {
     "name": "החזית הדיפלומטית והאזורית (לבנון והמפרץ)",
     "status": "העברת מסרי הרתעה לביירות ומגעים מפרציים ורוסיים למניעת התרחבות הלחימה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10200511-01",
     "title": "יירוט כלי טיס בלתי מאויש אמריקני במצר הורמוז",
     "summary": "משמרות המהפכה הודיעו כי יירטו והשמידו כלי טיס מאויש מרחוק של ארצות הברית מסוג אמ קיו 9 מעל מצר הורמוז באמצעות מערכת הגנה אווירית מתקדמת.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T03:33:01+00:00",
     "last_update_at": "2026-10-20T03:33:01+00:00",
     "what_is_not_verified": "אין אישור או תגובה רשמית מצד ארצות הברית להפלת כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-it-downed-us-mq-9-drone-over-hormuz-strait",
       "published_at": "2026-10-20T03:33:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10200511-02",
     "title": "פגיעה בכלי שיט במצר הורמוז ובמימי המפרץ",
     "summary": "ספינות מסחר ומכולות הותקפו באמצעות כטבמים, מוקשים וירי רקטי במצר הורמוז ומצפון מזרח לג'ובייל, עם דיווחים על טביעת כלי שיט ופגיעה באחרים.",
     "axis": "איראן - השיט הבינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T14:48:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T14:48:56+00:00",
     "last_update_at": "2026-10-19T18:26:13+00:00",
     "what_is_not_verified": "מספר כלי השיט המדויק שנפגעו והיקף הנזק המלא אינם מאומתים ונתונים במחלוקת בין המקורות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94714",
       "published_at": "2026-10-19T18:26:13+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/19/strait-of-hormuz-spilt-cargo-iran-attacks-container-ships",
       "published_at": "2026-10-19T14:48:56+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ובייל, ערב הסעודית",
       "lat": 27.0007,
       "lon": 49.6532
      }
     ]
    },
    {
     "id": "IRAN-10200511-03",
     "title": "פגישה חשאית בין שר ההגנה האמריקני לראש ממשלת ישראל",
     "summary": "שר ההגנה של ארצות הברית קיים ביקור בלתי מוכרז בישראל ונפגש בבסיס עובדה עם ראש הממשלה כדי לדון באפשרות לחידוש פעולות צבאיות מול איראן.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T22:42:01+00:00",
     "last_update_at": "2026-10-19T23:11:41+00:00",
     "what_is_not_verified": "תוכן השיחות המדויק וההחלטות שהתקבלו בפגישה לא נמסרו רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21663679",
       "published_at": "2026-10-19T23:11:41+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hk5naze3fe",
       "published_at": "2026-10-19T22:47:35+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94716",
       "published_at": "2026-10-19T22:42:01+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס עובדה, ישראל",
       "lat": 29.9391,
       "lon": 34.9385
      }
     ]
    },
    {
     "id": "IRAN-10200511-04",
     "title": "אזהרות אמריקניות וערביות ללבנון מהתערבות בלחימה",
     "summary": "הועברו מסרי אזהרה להנהגה בביירות מצד ארצות הברית ומדינות נוספות, המזהירים מתגובה ישראלית נרחבת אם חיזבאללה יצטרף לעימות בין ישראל לאיראן.",
     "axis": "ישראל - לבנון - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:14:19+00:00",
     "last_update_at": "2026-10-19T08:57:00+00:00",
     "what_is_not_verified": "אמיתות האזהרות מבוססת על מקור ממשלתי לבנוני שצוטט בעיתון המקורב לחיזבאללה בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958026",
       "published_at": "2026-10-19T08:57:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94698",
       "published_at": "2026-10-19T08:14:19+00:00"
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
     "id": "IRAN-10200511-05",
     "title": "אזהרות ביטחוניות של נציגויות ארצות הברית במזרח התיכון",
     "summary": "מחלקת המדינה ונציגויות דיפלומטיות של ארצות הברית באזור פרסמו התרעות לאזרחים אמריקנים מפני איומים אפשריים לפגיעה באינטרסים מצד איראן וגורמים התומכים בה.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T05:30:46+00:00",
     "last_update_at": "2026-10-19T21:15:09+00:00",
     "what_is_not_verified": "מידת המיידיות של האיומים המיוחסים לאיראן או לבעלות בריתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-government-linked-jet-lands-tehran-regional-tensions-rise",
       "published_at": "2026-10-19T21:15:09+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132151",
       "published_at": "2026-10-19T05:30:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10200511-06",
     "title": "איומים איראניים על תשתיות תקשורת ואנרגיה במצר הורמוז",
     "summary": "בכירים ומשמרות המהפכה באיראן איימו בפגיעה בכבלי תקשורת העוברים במצר הורמוז ובמרכזי מידע, לצד אזהרות על גרימת משבר אנרגיה עולמי במקרה של תקיפה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:44:48+00:00",
     "last_update_at": "2026-10-20T04:44:29+00:00",
     "what_is_not_verified": "קיומה של תוכנית מבצעית ממשית לפגיעה בכבלים התת ימיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21663932",
       "published_at": "2026-10-20T04:44:29+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48718",
       "published_at": "2026-10-19T19:19:01+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94705",
       "published_at": "2026-10-19T12:44:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10200511-07",
     "title": "נחיתת מטוס תובלה מבלארוס בתבריז",
     "summary": "מטוס מטען שהגיע מבלארוס נחת בנמל התעופה של תבריז, על רקע עיסוקה של בלארוס בייצור מערכות מכ\"ם והגנה אווירית.",
     "axis": "איראן - סיוע צבאי זר",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T22:06:23+00:00",
     "last_update_at": "2026-10-19T22:06:23+00:00",
     "what_is_not_verified": "מהות המטען שהובל במטוס אינה ידועה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48725",
       "published_at": "2026-10-19T22:06:23+00:00"
      }
     ],
     "places": [
      {
       "name": "תבריז, איראן",
       "lat": 38.0739,
       "lon": 46.2979
      }
     ]
    },
    {
     "id": "IRAN-10200511-08",
     "title": "שינוע מערכת הגנה אווירית בטהרן",
     "summary": "מערכת הגנה אווירית מדגם ח'ורדאד נצפתה במהלך העברה ברחבי טהרן.",
     "axis": "איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T03:20:43+00:00",
     "last_update_at": "2026-10-20T03:20:43+00:00",
     "what_is_not_verified": "היעד המבצעי של שינוע המערכת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48729",
       "published_at": "2026-10-20T03:20:43+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10200511-09",
     "title": "שיחות שר החוץ הרוסי בטהרן",
     "summary": "שר החוץ של רוסיה קיים שיחות בטהרן עם מקבילו האיראני ועם מזכיר המועצה העליונה לביטחון לאומי, והדגיש את המשך שיתוף הפעולה בין המדינות.",
     "axis": "איראן - רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T14:46:29+00:00",
     "last_update_at": "2026-10-19T21:24:17+00:00",
     "what_is_not_verified": "מידת התמיכה הצבאית המעשית שרוסיה מוכנה לספק לאיראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_f3acca35cbb3115d",
       "url": "https://en.irna.ir/news/86297637/Major-General-Rezaei-stresses-Iran-s-determination-to-strengthen",
       "published_at": "2026-10-19T21:24:17+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_f3acca35cbb3115d",
       "url": "https://www.iranintl.com/en/202610197573",
       "published_at": "2026-10-19T21:18:36+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_f3acca35cbb3115d",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-araqchi-blames-us-strait-hormuz-tensions-calls-diplomacy",
       "published_at": "2026-10-19T14:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10200511-10",
     "title": "נחיתת מטוס ממשלתי מאיחוד האמירויות בטהרן",
     "summary": "מטוס השייך לחברת צ'רטר ממשלתית של איחוד האמירויות נחת בטהרן בפעם השנייה תוך ימים ספורים, על רקע החשש מהסלמת העימות האזורי.",
     "axis": "איראן - מדינות המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T21:15:09+00:00",
     "last_update_at": "2026-10-19T21:15:09+00:00",
     "what_is_not_verified": "זהות הנוסעים ומטרת השיחות של הגורמים מאיחוד האמירויות בטהרן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-government-linked-jet-lands-tehran-regional-tensions-rise",
       "published_at": "2026-10-19T21:15:09+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "טענת איראן בדבר הפלת כלי טיס בלתי מאויש אמריקני מסוג MQ-9 מעל מצר הורמוז.",
    "הדיווח בוושינגטון פוסט על תוכנית איראנית מכוונת להשפיע על בחירות האמצע בארצות הברית דרך מחירי האנרגיה.",
    "מספר כלי השיט המדויק שנפגעו במצר הורמוז (פערים בין 12 ל-15 ספינות וטענות בריטיות למספר גבוה יותר).",
    "תוכן המטען של מטוס התובלה שהגיע מבלארוס לנמל התעופה בתבריז.",
    "הדיווח הלבנוני על מסרי אזהרה תקיפים שהעבירה ארצות הברית ישירות לנשיא ולראש ממשלת לבנון."
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
     "value": 3.1082,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על המרחב האווירי והימי ופתרון סוגיות האזור בדיפלומטיה ללא נוכחות כוחות זרים.",
      "חיזוק שיתוף הפעולה האסטרטגי עם מוסקבה."
     ],
     "inferred": [
      "הפעלת לחץ כלכלי עולמי באמצעות פגיעה בנתיבי האנרגיה במצר הורמוז כדי להרתיע את ארצות הברית מהמשך תקיפות.",
      "העלאת מחירי הדלק ככלי להשפעה פוליטית בתוך ארצות הברית."
     ],
     "forecast": [
      "המשך פעולות הטרדה ימיות ושיבוש תנועת ספינות במצר הורמוז.",
      "תגובה צבאית נרחבת לעבר אינטרסים אמריקניים וישראליים אם תחודש המתקפה."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "המשך פגיעה כלכלית וצבאית באיראן תוך הגנה על האינטרסים ועל כוחות הברית.",
      "דרישה מבעלות הברית לשאת בנטל העימות מול איראן."
     ],
     "inferred": [
      "בחינת אפשרות לחידוש מתקפות צבאיות בשיתוף פעולה עם ישראל כדי לפגוע ביכולות טהרן.",
      "הרתעת חיזבאללה וגורמים פרו-איראניים מפתיחת חזיתות מקבילות."
     ],
     "forecast": [
      "תגבור האבטחה והנוכחות הימית סביב נתיבי השיט במפרץ הפרסי.",
      "הוצאה לפועל של פעולה צבאית ממוקדת או נרחבת נגד יעדים איראניים."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "העברת אזהרה חריפה לאיראן כי תספוג מכות קשות יותר אם תנסה לפעול.",
      "שימור התיאום ההדוק והברית האסטרטגית מול הממשל האמריקני."
     ],
     "inferred": [
      "חתירה למבצע צבאי משותף עם ארצות הברית נגד תשתיות איראניות בעיתוי הנוכחי.",
      "מניעת כניסת חיזבאללה למערכה באמצעות איומים בהרס נרחב בלבנון."
     ],
     "forecast": [
      "האצת המוכנות המבצעית בחיל האוויר לפעולה התקפית.",
      "המשך תיאום ביטחוני הדוק עם הפנטגון לקראת חידוש אפשרי של העימות."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/irans-araqchi-blames-us-strait-hormuz-tensions-calls-diplomacy",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/19/strait-of-hormuz-spilt-cargo-iran-attacks-container-ships",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610197573",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86297637/Major-General-Rezaei-stresses-Iran-s-determination-to-strengthen",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21663932",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-government-linked-jet-lands-tehran-regional-tensions-rise",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132151",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48729",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94705",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958026",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hk5naze3fe",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T17:08:39+00:00",
  "changes": {
   "IRAN-10200511-01": {
    "kind": "new"
   },
   "IRAN-10200511-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפות איראניות על אוניות מכולה במצר הורמוז",
    "score": 1.0
   },
   "IRAN-10200511-03": {
    "kind": "new"
   },
   "IRAN-10200511-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אזהרת ארצות הברית וגורמים מערביים ללבנון מפני התערבות בעימות מול ישראל",
    "score": 1.0
   },
   "IRAN-10200511-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "אזהרות של נציגויות ארצות הברית במזרח התיכון",
    "score": 1.0
   },
   "IRAN-10200511-06": {
    "kind": "possible",
    "prev": "האשמות איראן כלפי ארצות הברית במצר הורמוז וקריאה להסדר ביטחון אזורי",
    "score": 0.467
   },
   "IRAN-10200511-07": {
    "kind": "new"
   },
   "IRAN-10200511-08": {
    "kind": "new"
   },
   "IRAN-10200511-09": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "שיחות שר החוץ הרוסי בטהראן על המלחמה וביטחון אזורי",
    "score": 1.0
   },
   "IRAN-10200511-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-20T0515__ukraine-202610200515.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-20T05:15:06+00:00",
   "window": {
    "from": "2026-10-19T05:15:06+00:00",
    "to": "2026-10-20T05:15:06+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610200515"
   },
   "summary": "הלחימה באוקראינה נמשכת תוך תקיפות אוויריות והפצצות הדדיות במרחבים שונים, ובמקביל מתגלעים עימותים מדיניים חריפים בין הנהגת אוקראינה לממשל האמריקאי בנוגע לעיכוב אספקת חימוש וחלוקת מידע מודיעיני. במקביל, גורמים בינלאומיים שונים מקדמים מגעים דיפלומטיים עוקפים, בעוד הצדדים בשטח נערכים להמשך העימות הצבאי.",
   "fronts": [
    {
     "name": "חזית קייב ומחוזות מרכזיים",
     "status": "פעילה עם תקיפות אוויריות ופגיעה בתשתיות"
    },
    {
     "name": "חזית חרקיב והציר הצפוני",
     "status": "פעילה הכוללת לחימה יבשתית ותקיפות כטב\"מים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10200515-01",
     "title": "תקיפה רוסית במחוז אוקוחיב שבקייב",
     "summary": "מתקפה רוסית פגעה במבנה ייצור ואחסון במחוז אובוחיובי שבקייב, וגרמה להרוגים ופצועים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T18:28:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T18:28:00+00:00",
     "last_update_at": "2026-10-20T04:54:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומצבם אינם מאומתים מעבר לדיווחים הרשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_f8c26223aa8c771b",
       "url": "https://www.ukrinform.net/rubric-ato/4176102-death-toll-from-strike-on-kyiv-region-enterprise-rises-to-three-six-injured.html",
       "published_at": "2026-10-20T04:54:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f8c26223aa8c771b",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/20/8058839/",
       "published_at": "2026-10-20T04:29:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_6e7a5ec733d27711",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058817/",
       "published_at": "2026-10-19T18:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אובוחיובי, אוקראינה",
       "lat": 50.1102,
       "lon": 30.627
      }
     ]
    },
    {
     "id": "UKRAINE-10200515-02",
     "title": "תקיפת כטב\"ם בפארק בעיר נובה וודולה",
     "summary": "כטב\"ם רוסי פגע בפארק מרכזי ביישוב חרקיב וגרם לנפגעים בנפש ובפצועים רבים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T18:03:14+00:00",
     "last_update_at": "2026-10-19T18:03:14+00:00",
     "what_is_not_verified": "זהות כל הנפגעים והנזק המלא אינם מאומתים ממקור חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/19/russian-drone-strike-on-ukrainian-park-kills-six-including-two-children",
       "published_at": "2026-10-19T18:03:14+00:00"
      }
     ],
     "places": [
      {
       "name": "נובה וודולה, אוקראינה",
       "lat": 49.7181,
       "lon": 35.8602
      }
     ]
    },
    {
     "id": "UKRAINE-10200515-03",
     "title": "פינוי חייל פצוע באמצעות רחפן ענק",
     "summary": "המרכז הרפואי הצבאי בחרקיב דיווח על טיפול בחייל שעבר קטיעה ופונה משדה הקרב באמצעות רחפן ענק.",
     "axis": "חזית יבשתית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T04:39:00+00:00",
     "last_update_at": "2026-10-20T04:39:00+00:00",
     "what_is_not_verified": "פרטי הפעולה המדויקים אינם מאומתים ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_4c63f45d5053419f",
       "url": "https://www.ukrinform.net/rubric-ato/4176101-unique-evacuation-kharkiv-military-hospital-tells-how-wounded-soldier-was-rescued-by-heavylift-drone.html",
       "published_at": "2026-10-20T04:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקיב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "קופיאנסק, אוקראינה",
       "lat": 49.7133,
       "lon": 37.6142
      }
     ]
    },
    {
     "id": "UKRAINE-10200515-04",
     "title": "התקרבות בין לוויין צבאי רוסי ללוויין ריגול",
     "summary": "גופי מעקב חלל דיווחו כי לוויין צבאי רוסי התקרב בצורה חריגה ללוויין חישה מרחוק שמופעל על ידי חברה פינית-אמריקאית ומספק שירות לאוקראינה.",
     "axis": "טכנולוגיה ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T15:57:24+00:00",
     "last_update_at": "2026-10-19T15:57:24+00:00",
     "what_is_not_verified": "המטרה המדויקת של תמרוני הלוויין אינה מאומתת רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/19/russian-military-satellite-comes-dangerously-close-to-a-radar-satellite-operated-by-a-finnish-u-s-company-that-supplies-satellite-imagery-to-ukraine",
       "published_at": "2026-10-19T15:57:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10200515-05",
     "title": "התנצלות אוקראינה בפני ליטא על סטיית כטב\"מים",
     "summary": "משרד החוץ האוקראיני התנצל בפני ליטא לאחר שפעילות לוחמה אלקטרונית רוסית הסיטה כטב\"מים אוקראיניים לשמי ליטא בדרכם לסנקט פטרבורג.",
     "axis": "תקיפות והפצצות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T13:55:35+00:00",
     "last_update_at": "2026-10-19T13:55:35+00:00",
     "what_is_not_verified": "היקף הנזק או המסלול המדויק בליטא אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48703",
       "published_at": "2026-10-19T13:55:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10200515-06",
     "title": "מגעים דיפלומטיים ותכנון פסגות אפשריות",
     "summary": "נציגים אמריקאים מתכננים שיחות בנורווגיה ואפשרות לפגישה עם הנהגת רוסיה וסין, במקביל למתיחות גוברת בין קייב לוושינגטון סביב אספקת חימוש ומודיעין.",
     "axis": "משא ומתן מדיני",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T00:44:45+00:00",
     "last_update_at": "2026-10-20T04:46:47+00:00",
     "what_is_not_verified": "האם הפסגות המשולשות יצאו לפועל ומה תוכנן בהן בדיוק אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_09db930271110216",
       "url": "https://kyivindependent.com/witkoff-plans-ukraine-peace-talks-in-norway-putin-meeting-in-russia/",
       "published_at": "2026-10-20T04:46:47+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_09db930271110216",
       "url": "https://www.ukrinform.net/rubric-polytics/4176098-trump-ready-to-discuss-ending-ukraine-war-with-putin-xi.html",
       "published_at": "2026-10-20T04:08:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_09db930271110216",
       "url": "https://www.ukrinform.net/rubric-polytics/4176096-witkoff-kushner-to-travel-to-norway-for-talks-on-peace-in-ukraine-reuters.html",
       "published_at": "2026-10-20T03:25:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_09db930271110216",
       "url": "https://www.theguardian.com/world/2026/oct/20/ukraine-war-briefing-zelenskyy-claims-us-deliberately-delaying-interceptor-missile-deliveries-to-kyiv",
       "published_at": "2026-10-20T00:44:45+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסלו, נורווגיה",
       "lat": 59.9133,
       "lon": 10.739
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על מזימה מכוונת של ארה\"ב לעכב טילים כדי לכפות כניעה",
    "קיומן המדויק של תכניות חלופיות אירופאיות להקפאת הקו ללא הסכמת אוקראינה",
    "היקף השימוש המדויק של המערכות האלקטרוניות בשיבוש לוויינים ומסלולי כטב\"מים"
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
     "value": 1.1225,
     "unit": "USD",
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "קבלת סיוע צבאי מובטח וטילים מיירטים",
      "הגנה על תשתיות ומניעת כניעה מדינית"
     ],
     "inferred": [
      "שמירה על תמיכה מערבית פעילה למרות חילוקי הדעות עם וושינגטון",
      "המשך פגיעה במטרות בתוך שטחי רוסיה ובנכסיה"
     ],
     "forecast": [
      "החמרת החיכוך הדיפלומטי עם הממשל האמריקאי",
      "הגברת התלות ביוזמות עצמאיות מול מדינות אירופה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הפעילות הצבאית עד להשגת היעדים"
     ],
     "inferred": [
      "ניצול משברים פוליטיים במערב להחלשת התמיכה באוקראינה",
      "תקיפת תשתיות קריטיות להפחתת יכולת העמידה של אוקראינה"
     ],
     "forecast": [
      "המשך הפצצות אוויריות ממוקדות על מרכזים אוקראיניים",
      "ניסיון לקדם פורומים בינלאומיים ללא נוכחות אוקראינית ישירה"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "קידום פתרון דיפלומטי לסיום המלחמה"
     ],
     "inferred": [
      "צמצום מעורבות או האטת קצב משלוחי החימוש מתוך שיקולים פנימיים וכלכליים",
      "הפעלת לחץ על הנהגת אוקראינה להתגמש במשא ומתן"
     ],
     "forecast": [
      "המשך המתיחות הפומבית סביב העברת חלקי חילוף ומיירטים",
      "ניסיונות תיווך מול שחקנים נוספים בזירה הבינלאומית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/20/ukraine-war-briefing-zelenskyy-claims-us-deliberately-delaying-interceptor-missile-deliveries-to-kyiv",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/witkoff-plans-ukraine-peace-talks-in-norway-putin-meeting-in-russia/",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/19/russian-military-satellite-comes-dangerously-close-to-a-radar-satellite-operated-by-a-finnish-u-s-company-that-supplies-satellite-imagery-to-ukraine",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058817/",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48703",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4176096-witkoff-kushner-to-travel-to-norway-for-talks-on-peace-in-ukraine-reuters.html",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T17:10:19+00:00",
  "changes": {
   "UKRAINE-10200515-01": {
    "kind": "new"
   },
   "UKRAINE-10200515-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת כטב\"ם רוסי באזור חרקוב",
    "score": 0.817
   },
   "UKRAINE-10200515-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פינוי אווירי ראשון של חייל פצוע באמצעות רחפן",
    "score": 0.65
   },
   "UKRAINE-10200515-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התקרבות מסוכנת בין לווין צבאי רוסי ללווין פיני-אמריקאי",
    "score": 1.0
   },
   "UKRAINE-10200515-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "חריגת כטב\"ם אוקראיני לשמי ליטא",
    "score": 1.0
   },
   "UKRAINE-10200515-06": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-20T0758__north-202610200758.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-20T07:58:20+00:00",
   "window": {
    "from": "2026-10-19T07:58:20+00:00",
    "to": "2026-10-20T07:58:20+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610200758"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות קרקעית ואווירית ישראלית שוטפת בדרום סוריה ובדרום לבנון, לצד חיכוך ביטחוני מול תשתיות חמושות. במקביל נרשמות אזהרות דיפלומטיות חריפות לממשל הלבנוני לבל יאפשר הצטרפות לעימות אזורי, בעוד נשיאות לבנון מנסה לקדם שליטה ביטחונית ופירוק נשק בלתי חוקי. בסוריה מבוצעות פשיטות ישראליות בקונייטרה לצד פעילות של ירדן וגורמים חמושים נוספים במזרח ובדרום המדינה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה, סיכול תשתיות ותקיפות אוויריות וארטילריות של צה\"ל לצד פעילות כוחות קרקעיים"
    },
    {
     "name": "דרום סוריה (קונייטרה וא-סווידאא)",
     "status": "חדירות ופשיטות קרקעיות של צה\"ל, קשרים מול גורמים דרוזים ותקיפות סיכול ירדניות"
    },
    {
     "name": "מזרח סוריה וציר הגבול עם עיראק",
     "status": "פעילות אווירית ערה ותקריות ירי של גורמים חמושים בלתי מזוהים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10200758-01",
     "title": "גיחות מטוסי קרב ישראליים בסוריה ובעיראק",
     "summary": "מטוסי קרב ישראליים נצפו בדרום ובמזרח סוריה וכן מעל מחוז אל-מות'נא בדרום עיראק ובגבול סוריה-עיראק.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T19:55:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T19:55:33+00:00",
     "last_update_at": "2026-10-20T07:02:46+00:00",
     "what_is_not_verified": "הדיווח נסמך על מקורות מקומיים בלבד ללא אימות רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-646",
       "published_at": "2026-10-20T07:02:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-fighter-jets-spotted-over-syria-iraq-local-sources-say",
       "published_at": "2026-10-19T21:46:41+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94715",
       "published_at": "2026-10-19T19:55:33+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מות'נא, עיראק",
       "lat": 33.3242,
       "lon": 44.4573
      }
     ]
    },
    {
     "id": "NORTH-10200758-02",
     "title": "תקיפות והפגזות צה\"ל בדרום לבנון",
     "summary": "כוחות ישראליים ביצעו תקיפות אוויריות, הפגזות ארטילריות, תקיפת כטב\"ם ופיצוצים במספר מוקדים בדרום לבנון, כולל בעיירה תלוסה.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T16:58:18+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T16:58:18+00:00",
     "last_update_at": "2026-10-20T06:20:12+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_806e03ef05af75d0",
       "url": "https://www.newarab.com/news/diplomatic-visits-attempt-hold-all-out-us-iran-war",
       "published_at": "2026-10-20T06:20:12+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_806e03ef05af75d0",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-and-artillery-shelling-target-southern-lebanon/4094006",
       "published_at": "2026-10-20T01:21:45+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_806e03ef05af75d0",
       "url": "https://english.almanar.com.lb/article/140242/",
       "published_at": "2026-10-19T16:58:18+00:00"
      }
     ],
     "places": [
      {
       "name": "תלוסה, לבנון",
       "lat": 33.2295,
       "lon": 35.489
      }
     ]
    },
    {
     "id": "NORTH-10200758-03",
     "title": "שחרור אזרח סורי שנעצר על ידי צה\"ל בקונייטרה",
     "summary": "צבא ישראל שחרר אזרח סורי שנעצר יום קודם לכן במהלך חדירה למחוז קונייטרה שכללה הקמת מחסום זמני בכיכר אל-עלם.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T05:39:15+00:00",
     "last_update_at": "2026-10-20T05:39:15+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syrian-civilian-detained-israeli-army-released",
       "published_at": "2026-10-20T05:39:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10200758-04",
     "title": "האשמות ישראליות כלפי צבא לבנון על אי-פירוק אתר חיזבאללה",
     "summary": "צה\"ל האשים את צבא לבנון באי-פירוק מתקן צבאי של חיזבאללה באזור כפרא, ששימש לאחסון והעברת אמל\"ח למרות דיווחים קודמים שהנושא טופל.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T04:17:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T04:17:58+00:00",
     "last_update_at": "2026-10-20T04:17:58+00:00",
     "what_is_not_verified": "טענות צה\"ל לא אומתו באופן עצמאי על ידי מנגנון הפיקוח האמריקאי או צבא לבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963780/israeli-military-accuses-lebanese-army-of-failing-to-dismantle-hezboll/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963780",
       "published_at": "2026-10-20T04:17:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10200758-05",
     "title": "פשיטה של כוחות צה\"ל על כפר טרנג'ה בדרום סוריה",
     "summary": "כוחות קרקעיים ישראליים נכנסו לכפר טרנג'ה שבמחוז קונייטרה וביצעו פשיטה על בית, בליווי ירי פצצות תאורה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T02:45:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T02:45:31+00:00",
     "last_update_at": "2026-10-20T02:45:31+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-raid-home-during-incursion-into-southern-syria/4094015",
       "published_at": "2026-10-20T02:45:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10200758-06",
     "title": "דיווח על פגישות ישראליות עם מנהיגים דרוזים מסויידאא והעברת נשק",
     "summary": "מנהיגים דרוזים מא-סווידאא נפגשו ברמת הגולן עם קציני צה\"ל לאחר הגעת משלוח סיוע צבאי ישראלי לפלגים החמושים במחוז.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:31:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T00:31:19+00:00",
     "last_update_at": "2026-10-20T00:31:19+00:00",
     "what_is_not_verified": "עצם העברת הנשק והפגישה נסמכים על מקורות בלבד ללא אישור רשמי ישראלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21663779",
       "published_at": "2026-10-20T00:31:19+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10200758-07",
     "title": "תקיפה ירדנית נגד רשת הברחת סמים בא-סווידאא",
     "summary": "כלי טיס ירדני תקף כלי רכב של רשת הברחת סמים דרוזית בדרום סוריה, באזור הנתון לשליטת המועצה הדרוזית.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T20:52:37+00:00",
     "last_update_at": "2026-10-19T20:52:37+00:00",
     "what_is_not_verified": "מבוסס על ערוץ המזוהה עם המשטר הסורי ללא תגובה ירדנית רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48723",
       "published_at": "2026-10-19T20:52:37+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10200758-08",
     "title": "חשיפת מנהרה באזור פנאר בלבנון ומעצר חשוד",
     "summary": "כוחות צבא לבנון חקרו מנהרה באורך 13 מטרים שהתגלתה באזור פנאר-זעיתריה ועצרו אזרח שטען כי חפר אותה בחיפוש אחר זהב; נשללה הימצאות ציוד צבאי במקום.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:31:31+00:00",
     "last_update_at": "2026-10-19T16:34:50+00:00",
     "what_is_not_verified": "מטרתה האמיתית של המנהרה והאם קיים קשר לגורמים צבאיים או חיזבאללה טרם אומתו סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-tunnel-found-near-beirut-sparks-fresh-hezbollah-tension",
       "published_at": "2026-10-19T16:34:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132178",
       "published_at": "2026-10-19T11:36:57+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963636/lebanese-army-arrests-man-over-tunnel-allegedly-dug-in-search-of-gold/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963636",
       "published_at": "2026-10-19T10:42:17+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963604/lebanese-army-finds-13-meter-tunnel-in-fanar-no-military-equipment-fou/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963604",
       "published_at": "2026-10-19T08:31:31+00:00"
      }
     ],
     "places": [
      {
       "name": "פנאר, לבנון",
       "lat": 33.8788,
       "lon": 35.575
      }
     ]
    },
    {
     "id": "NORTH-10200758-09",
     "title": "הריגת חייל סורי בדיר א-זור",
     "summary": "חייל בצבא סוריה נהרג מירי של חמושים בלתי מזוהים באזור אל-באע'וז סמוך לגבול עיראק.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:53:04+00:00",
     "last_update_at": "2026-10-19T12:53:04+00:00",
     "what_is_not_verified": "זהות החמושים שביצעו את הירי אינה ידועה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-soldier-killed-in-attack-by-unidentified-gunmen-in-eastern-deir-ez-zor/4093531",
       "published_at": "2026-10-19T12:53:04+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-באע'וז, סוריה",
       "lat": 34.4646,
       "lon": 40.9451
      },
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    },
    {
     "id": "NORTH-10200758-10",
     "title": "אזהרות בינלאומיות ללבנון מהתערבות בעימות בין ישראל לאיראן",
     "summary": "ארצות הברית וגורמים מערביים וערביים העבירו מסרי אזהרה לבכירי הממשל בלבנון מתגובה ישראלית חריפה אם חיזבאללה יצטרף ללחימה מול ישראל.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:14:19+00:00",
     "last_update_at": "2026-10-19T08:57:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958026",
       "published_at": "2026-10-19T08:57:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94698",
       "published_at": "2026-10-19T08:14:19+00:00"
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
     "id": "NORTH-10200758-11",
     "title": "פעילות כוחות צה\"ל במיס אל-ג'בל",
     "summary": "כוחות מגדוד 9204 של צה\"ל תועדו בפעילות מבצעית בתוך מיס אל-ג'בל בדרום לבנון.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T08:19:49+00:00",
     "last_update_at": "2026-10-19T08:19:49+00:00",
     "what_is_not_verified": "היקף הפעילות והמטרות לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94699",
       "published_at": "2026-10-19T08:19:49+00:00"
      }
     ],
     "places": [
      {
       "name": "מיס אל-ג'בל, לבנון",
       "lat": 33.17,
       "lon": 35.5242
      }
     ]
    },
    {
     "id": "NORTH-10200758-12",
     "title": "הצהרות נשיא לבנון בנוגע להפרות ההסכם וההסדרה הדיפלומטית",
     "summary": "נשיא לבנון ג'וזף עון הצהיר כי ישראל מפרה באופן יומיומי את הסכם המסגרת בדרום המדינה, וקרא להגברת פריסת מנגנוני הביטחון הלבנוניים ולהחרמת נשק לא מורשה.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T06:27:19+00:00",
     "last_update_at": "2026-10-19T11:32:27+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israel-violating-us-mediated-framework-agreement-lebanese-president-says/4093398",
       "published_at": "2026-10-19T11:32:27+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963622/president-aoun-calls-for-tighter-security-weapons-confiscation-and-inc/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963622",
       "published_at": "2026-10-19T09:44:39+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963580/president-aoun-meets-arab-league-secretary-general-says-lebanon-commit/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963580",
       "published_at": "2026-10-19T06:27:19+00:00"
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
    "הטענה על אספקת אמצעי לחימה מישראל לפלגים חמושים בא-סווידאא",
    "הטענה כי המנהרה בפנאר שימשה את חיזבאללה לפעילות ביטחונית",
    "זהות היורים שהרגו את החייל הסורי באל-באע'וז"
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
     "value": 3.1082,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "פירוק תשתיות חיזבאללה ומניעת התחמשותו מדרום לליטני בהתאם להבנות"
     ],
     "inferred": [
      "מניעת פתיחת חזית נוספת מלבנון במקרה של עימות ישיר עם איראן",
      "יצירת אזור חיץ והשפעה בדרום סוריה דרך פשיטות וקשרים עם גורמים מקומיים"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות בדרום לבנון ובדרום סוריה לאכיפת ההבנות ולמניעת התבססות איומים"
     ]
    },
    {
     "actor": "לבנון (הממשל והנשיאות)",
     "declared": [
      "מחויבות לפתרון דיפלומטי והימנעות ממלחמה כוללת",
      "אכיפת החוק, החרמת אמצעי לחימה והגברת נוכחות מנגנוני הביטחון בדרום"
     ],
     "inferred": [
      "שמירה על ריבונות המדינה ומניעת קריסה כלכלית וביטחונית עקב מעורבות במלחמה אזורית"
     ],
     "forecast": [
      "הגברת הפיקוח והמעצרים של גורמי פשיעה ואמל\"ח לא מאושר בניסיון להפחית עילות לתקיפה ישראלית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/140242/",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-violating-us-mediated-framework-agreement-lebanese-president-says/4093398",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21663779",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963580/president-aoun-meets-arab-league-secretary-general-says-lebanon-commit/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963580",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syrian-civilian-detained-israeli-army-released",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-tunnel-found-near-beirut-sparks-fresh-hezbollah-tension",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132178",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48723",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94699",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958026",
     "accessed_at": "2026-10-20T07:58:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T17:32:43+00:00",
  "changes": {
   "NORTH-10200758-01": {
    "kind": "new"
   },
   "NORTH-10200758-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפות ארטילריה והפצצות של צבא ישראל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10200758-03": {
    "kind": "new"
   },
   "NORTH-10200758-04": {
    "kind": "new"
   },
   "NORTH-10200758-05": {
    "kind": "possible",
    "prev": "מות קצין צה\"ל בהתהפכות רכב מבצעי בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10200758-06": {
    "kind": "new"
   },
   "NORTH-10200758-07": {
    "kind": "new"
   },
   "NORTH-10200758-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חשיפת מנהרה באזור אל-פנאר ומעצר חשוד בחפירתה",
    "score": 1.0
   },
   "NORTH-10200758-09": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הריגת חייל צבא סוריה במארב חמושים באל-באע'וז",
    "score": 1.0
   },
   "NORTH-10200758-10": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "העברת אזהרות אמריקניות וערביות לממשלת לבנון מפני התערבות במלחמה",
    "score": 1.0
   },
   "NORTH-10200758-11": {
    "kind": "possible",
    "prev": "פעילות קרקעית, ירי מקלעים ופיצוצים של כוחות ישראליים בגבול דרום לבנון",
    "score": 0.467
   },
   "NORTH-10200758-12": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הנחיות נשיא לבנון להגברת פריסת הביטחון והחרמת נשק בלתי חוקי",
    "score": 1.0
   }
  }
 }
};
