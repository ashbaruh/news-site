/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-09T2113__yemen-202611092113.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-09T21:13:29+00:00",
   "window": {
    "from": "2026-11-08T21:13:29+00:00",
    "to": "2026-11-09T21:13:29+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611092113"
   },
   "summary": "הלחימה בזירה התימנית מסלימה באופן חד עם חידוש חילופי המהלומות הישירים בין תנועת החות'ים לבין סעודיה וכוחות הממשלה התימנית. במקביל לתקיפות עומק הדדיות של טילים לעבר יעדים בסעודיה ותקיפות אוויריות בריכוזי שלטון ותשתיות טילים בתימן, נרשמת הסלמה בקרבות הקרקעיים ובאיומים על נתיבי השיט בים האדום. הממשלה התימנית נאלצת לפעול תחת אילוצי ביטחון חמורים בעדן בעוד סעודיה בוחנת חיזוק מערכיה מול האיום המתגבר.",
   "fronts": [
    {
     "name": "חזית סעודיה - חות'ים",
     "status": "הסלמה הכוללת ירי טילים לעבר ריאד ותשתיות נפט מול תקיפות אוויריות סעודיות נרחבות בתימן"
    },
    {
     "name": "חזית פנים-תימנית (ממשלה מוכרת נגד חות'ים)",
     "status": "קרבות עזים במוקדי חיכוך, תקיפות טילים על מוסדות שלטון בעדן ומצור מתמשך על תעז"
    },
    {
     "name": "נתיבי השיט בים האדום",
     "status": "איום מתמשך על ספינות מסחר וקריאות בינלאומיות להגברת אמצעי המיגון"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11092113-01",
     "title": "מתקפת טילים חות'ית לעבר ריאד ופגיעה במבנה חברת ארמקו",
     "summary": "סעודיה יירטה טילים ששוגרו על ידי החות'ים לעבר הבירה ואזורים נוספים, כאשר שברי יירוט או פגיעה ישירה גרמו נזק למבנה של חברת ארמקו במרכז הפיננסי של ריאד.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T21:37:36+00:00",
     "last_update_at": "2026-11-09T10:41:55+00:00",
     "what_is_not_verified": "קיימת סתירה מסוימת בדיווחים האם הנזק נגרם משברי יירוט בלבד או מפגיעה ישירה של טיל במבנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.france24.com/en/video/20261109-saudi-arabia-intercepts-houthi-missiles-as-riyadh-s-aramco-building-damaged",
       "published_at": "2026-11-09T10:41:55+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.bbc.co.uk/news/articles/c6ly3mjx958eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-08T21:37:36+00:00"
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
     "id": "YEMEN-11092113-02",
     "title": "תקיפות הקואליציה בהובלת סעודיה נגד מתקני טילים של החות'ים",
     "summary": "הקואליציה בהובלת סעודיה הודיעה כי השמידה מפעל לייצור והרכבת רכיבי טילים בליסטיים, מפעל כימי להפקת דלק טילים ומעבדת אלקטרוניקה של החות'ים.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T15:22:14+00:00",
     "last_update_at": "2026-11-09T19:00:46+00:00",
     "what_is_not_verified": "מיקומם המדויק של המתקנים שהותקפו לא צוין בהודעת הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_7e24f19e7b6ddb46",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-destroyed-houthi-missile-facilities",
       "published_at": "2026-11-09T19:00:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_7e24f19e7b6ddb46",
       "url": "https://www.newarab.com/news/trump-meet-qatar-pm-no-imminent-deal-end-iran-war",
       "published_at": "2026-11-09T15:22:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11092113-03",
     "title": "תקיפות אוויריות במחוז צנעא ונפגעים רבים",
     "summary": "גורמי תקשורת המזוהים עם החות'ים דיווחו על לפחות ארבעים הרוגים ועשרות פצועים, בעיקר נשים וילדים, בתקיפות אוויריות סעודיות בנפת בני חושיש במחוז צנעא, לצד תקיפות בצפון המדינה.",
     "axis": "הלחימה הפנימית בתימן / סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T11:10:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T11:10:04+00:00",
     "last_update_at": "2026-11-09T11:10:04+00:00",
     "what_is_not_verified": "מספרי הנפגעים והטענה לפגיעה בצוותי הצלה נמסרו על ידי גורמי תעמולה חות'יים בלבד ולא אומתו עצמאית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-airstrikes-kill-40-yemen-mostly-women-and-children",
       "published_at": "2026-11-09T11:10:04+00:00"
      }
     ],
     "places": [
      {
       "name": "בני חושיש, תימן",
       "lat": 15.4547,
       "lon": 44.3782
      },
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-11092113-04",
     "title": "שיבוש פעילות ממשלת תימן בעדן עקב ירי טילים חות'י",
     "summary": "ממשלת תימן המוכרת בינלאומית השעתה את ישיבות הממשלה המלאות בעיר עדן בעקבות מתקפות טילים בליסטיים מצד החות'ים על מוסדות שלטון ומתחם ארמון הנשיאות.",
     "axis": "הלחימה הפנימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T11:10:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T11:10:04+00:00",
     "last_update_at": "2026-11-09T11:10:04+00:00",
     "what_is_not_verified": "היקף אמצעי האבטחה החלופיים שננקטו אינו מפורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-airstrikes-kill-40-yemen-mostly-women-and-children",
       "published_at": "2026-11-09T11:10:04+00:00"
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
     "id": "YEMEN-11092113-05",
     "title": "התקדמות כוחות הממשלה בלחימה והתגברות תקיפות גבול חות'יות",
     "summary": "כוחות ממשלת תימן דיווחו על התקדמות בחזיתות מרכזיות, במקביל להתחדשות ועלייה בתקיפות חוצות גבול מצד החות'ים ועימותים כבדים.",
     "axis": "הלחימה הפנימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T18:37:03+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T18:37:03+00:00",
     "last_update_at": "2026-11-09T18:37:03+00:00",
     "what_is_not_verified": "ההישגים הטריטוריאליים והיקף ההתקדמות מבוססים על טענות כוחות הממשלה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/9/yemen-government-forces-claim-new-advances-as-houthi-border-attacks-resume?traffic_source=rss",
       "published_at": "2026-11-09T18:37:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11092113-06",
     "title": "הכחשה סורית בדבר שליחת כוחות להילחם נגד החות'ים עבור סעודיה",
     "summary": "משרד החוץ של סוריה הכחיש בתוקף דיווחים לפיהם דמשק שולחת או מתכננת לשלוח כוחות ולוחמים לסעודיה או לתימן בתמורה לסיוע כלכלי והלוואות.",
     "axis": "סעודיה - תימן / מעורבות אזורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T12:01:52+00:00",
     "last_update_at": "2026-11-09T19:29:07+00:00",
     "what_is_not_verified": "קיימת סתירה חזיתית בין דיווחי מקורות מודיעין ופקידים הטוענים לפריסת יועצים ותוכנית לשליחת כוחות סוריים, לבין ההכחשה הרשמית של דמשק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_bcab6507a065cf1f",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-sending-troops-fight-houthis-return-saudi-loans",
       "published_at": "2026-11-09T19:29:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_bcab6507a065cf1f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-denies-it-has-forces-fighting-yemen",
       "published_at": "2026-11-09T13:28:36+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bcab6507a065cf1f",
       "url": "https://www.newarab.com/news/saudi-arabia-turns-syrian-help-fighting-houthis-grows",
       "published_at": "2026-11-09T12:01:52+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11092113-07",
     "title": "אזהרת ארגון הימאות הבינלאומי מפגיעה בספנות בים האדום",
     "summary": "ארגון הימאות הבינלאומי קרא להגברת ההגנה על כלי שיט מסחריים וצוותיהם על רקע המשך המתקפות הימיות באזור הים האדום והמזרח התיכון.",
     "axis": "הים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T18:06:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T18:06:22+00:00",
     "last_update_at": "2026-11-09T18:06:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_gcaptain",
       "source_root_id": "fh_8d09b753976f301b",
       "url": "https://gcaptain.com/imo-warns-of-mounting-human-toll-as-attacks-on-commercial-shipping-continue/",
       "published_at": "2026-11-09T18:06:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11092113-08",
     "title": "עצרת סולידריות במארב בדרישה להסרת המצור החות'י מעל תעז",
     "summary": "במחוז מארב התקיימה עצרת סולידריות שקראה לקהילה הבינלאומית לנקוט צעדים דחופים להסרת המצור שהחות'ים מטילים על העיר תעז.",
     "axis": "הלחימה הפנימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T15:42:36+00:00",
     "last_update_at": "2026-11-09T15:42:36+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155496",
       "published_at": "2026-11-09T15:42:36+00:00"
      }
     ],
     "places": [
      {
       "name": "מארב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על הגעת כוחות מיוחדים או יועצים צבאיים מסוריה לסעודיה להשתתפות בלחימה, שהוכחשו רשמית בידי דמשק",
    "מספרי ההרוגים והפצועים בתקיפות האוויריות בנפת בני חושיש ובסעדה שפורסמו על ידי כלי תקשורת חות'יים",
    "הדיווחים של כוחות ממשלת תימן על היקף ההתקדמות הטריטוריאלית בחזיתות השונות",
    "היקף הנזק המדויק שנגרם למתקני ייצור הטילים והדלק של החות'ים בתקיפות הקואליציה"
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
     "value": 3.1707,
     "unit": "ILS",
     "change_pct": -0.88,
     "source_id": "src_ecb",
     "as_of": "2026-11-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית (אנצאר אללה)",
     "declared": [
      "המשך פגיעה ביעדים בעומק סעודיה וערעור פעילות הממשלה התימנית הנתמכת בידיה",
      "תקיפת ספינות מסחר במסגרת המאבק האזורי"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי על ריאד כדי להרתיעה מהמשך המערכה",
      "שימור עליונות צבאית בתימן באמצעות המשך ייצור עצמי של טילים"
     ],
     "forecast": [
      "המשך שיגורי כטב\"מים וטילים לעבר תשתיות אנרגיה וערים בסעודיה לצד ניסיונות לפגוע בנמלים וסמלי שלטון בדרום תימן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "השמדת מערכי הייצור וההרכבה של טילים בליסטיים חות'יים",
      "הגנה על מרחב הגבול והסרת איומים ביטחוניים מעל ריאד ותשתיות חיוניות"
     ],
     "inferred": [
      "בלימת ההתעצמות הצבאית של החות'ים ופגיעה ישירה בשרשרת האספקה והייצור של אמצעי הלחימה",
      "חיפוש אחר סיוע צבאי חיצוני ועיבוי כוחות קרקעיים בגבול הדרומי של הממלכה"
     ],
     "forecast": [
      "הגברת קצב הסיכולים האוויריים של יעדי טילים במקביל לתגבור מערכי ההגנה האווירית סביב נכסים אסטרטגיים בסעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/9/yemen-government-forces-claim-new-advances-as-houthi-border-attacks-resume?traffic_source=rss",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-sending-troops-fight-houthis-return-saudi-loans",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c6ly3mjx958eo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/video/20261109-saudi-arabia-intercepts-houthi-missiles-as-riyadh-s-aramco-building-damaged",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/imo-warns-of-mounting-human-toll-as-attacks-on-commercial-shipping-continue/",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-denies-it-has-forces-fighting-yemen",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-turns-syrian-help-fighting-houthis-grows",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155496",
     "accessed_at": "2026-11-09T21:13:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-09T07:12:02+00:00",
  "changes": {
   "YEMEN-11092113-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה במגדל חברת אראמקו במרכז הפיננסי בריאד כתוצאה ממתקפת טילים חות'ית",
    "score": 1.0
   },
   "YEMEN-11092113-02": {
    "kind": "possible",
    "prev": "השמדת כן שיגור טילים בליסטיים בצנעא על ידי הקואליציה",
    "score": 0.467
   },
   "YEMEN-11092113-03": {
    "kind": "new"
   },
   "YEMEN-11092113-04": {
    "kind": "new"
   },
   "YEMEN-11092113-05": {
    "kind": "new"
   },
   "YEMEN-11092113-06": {
    "kind": "possible",
    "prev": "מבצע שחר תימן: מתקפה נרחבת של כוחות ממשלת תימן נגד עמדות החות'ים",
    "score": 0.467
   },
   "YEMEN-11092113-07": {
    "kind": "new"
   },
   "YEMEN-11092113-08": {
    "kind": "possible",
    "prev": "פציעת תשעה אזרחים בהפגזה חות'ית בתעז",
    "score": 0.633
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-09T2101__iran-202611092101.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-09T21:01:35+00:00",
   "window": {
    "from": "2026-11-08T21:01:35+00:00",
    "to": "2026-11-09T21:01:35+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611092101"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין במתיחות צבאית גבוהה לצד ניסיונות תיווך אזוריים של מדינות המפרץ. וושינגטון מאיימת בחידוש התקיפות הצבאיות חרף מגעים לפתרון מדיני, בעוד צה\"ל נערך לאפשרות של מתקפת פתע איראנית. במקביל נרשמת החרפה בעימות החשאי בזירות הסייבר, התעמולה והפעלת השלוחות במרחב.",
   "fronts": [
    {
     "name": "החזית הישירה: ארצות הברית - איראן",
     "status": "איומים צבאיים הדדיים במקביל למגעים דיפלומטיים סביב מצר הורמוז והגרעין"
    },
    {
     "name": "החזית הישראלית: ישראל - איראן",
     "status": "דריכות צבאית למתקפה, פעילות מניעה מול חדירת תעמולה ומהלכי מודיעין אזוריים"
    },
    {
     "name": "חזית המפרץ ומצר הורמוז",
     "status": "חשש מאי-ודאות ממושכת, לחץ דיפלומטי של קטאר וסעודיה ומצור ימי אמריקני"
    },
    {
     "name": "החזית העיראקית",
     "status": "אזהרות ממשלתיות מפני הצטרפות מיליציות פרו-איראניות ועימות בשטח המדינה"
    },
    {
     "name": "חזית הסייבר הבינלאומית",
     "status": "האשמות אירופיות על חבלה במערכות קירור אזרחיות לצד איומי סייבר בישראל"
    }
   ],
   "events": [
    {
     "id": "IRAN-11092101-01",
     "title": "נשיא ארצות הברית מצהיר על מוכנות לתקיפות צבאיות מול איראן לצד רצון מתווכות בהסדר",
     "summary": "דונלד טראמפ מסר כי קטאר וסעודיה מעוניינות בהסדר שלום בעימות עם איראן, אך ארצות הברית ערוכה לחדש תקיפות צבאיות בכל עת במידת הצורך.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T20:28:23+00:00",
     "last_update_at": "2026-11-09T20:46:30+00:00",
     "what_is_not_verified": "ההיתכנות המעשית של חידוש התקיפות ולוחות הזמנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/trump-tells-reuters-qatar-saudi-arabia-want-peaceful-iran-deal-us-ready-strikes",
       "published_at": "2026-11-09T20:46:30+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-us-ready-strike-iran-if-necessary-reuters-reports",
       "published_at": "2026-11-09T20:32:47+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21817327",
       "published_at": "2026-11-09T20:28:23+00:00"
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
     "id": "IRAN-11092101-02",
     "title": "פגישת נשיא ארצות הברית וראש ממשלת קטאר על המשא ומתן עם איראן",
     "summary": "ראש ממשלת קטאר נפגש עם נשיא ארצות הברית לשיחה שנמשכה ארבעים וחמש דקות והתמקדה במגעים ובניסיונות להביא לסיום המלחמה מול איראן.",
     "axis": "ארצות הברית - קטאר - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T18:30:45+00:00",
     "last_update_at": "2026-11-09T18:48:00+00:00",
     "what_is_not_verified": "תוכן השיחות המדויק ומעמד ההבנות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/9/qatar-pm-meets-with-trump-for-talks-on-ending-war-on-iran?traffic_source=rss",
       "published_at": "2026-11-09T18:48:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-qatari-prime-minister-discuss-iran-negotiations-45-minute",
       "published_at": "2026-11-09T18:30:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11092101-03",
     "title": "הצגת מתווה למשא ומתן בין ארצות הברית לאיראן סביב פיקוח גרעיני והסרת מצור",
     "summary": "מתווכים מקדמים מתווה הכולל פתיחה של מצר הורמוז, החזרת פיקוח גרעיני והגבלת העשרה תמורת הסרה חלקית של מצור והפשרת נכסים בהיקף מיליארדי דולרים.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T19:37:01+00:00",
     "last_update_at": "2026-11-09T20:28:23+00:00",
     "what_is_not_verified": "פרטי המתווה הסופיים והסכמת הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21817327",
       "published_at": "2026-11-09T20:28:23+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383960710",
       "published_at": "2026-11-09T19:37:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11092101-04",
     "title": "משלחת ביטחונית רוסית בכירה נחתה בישראל והמשיכה לאיחוד האמירויות",
     "summary": "משלחת בראשות ראש המודיעין הצבאי הרוסי הגיעה בטיסה צבאית לישראל ונפגשה עם בכירי מערכת הביטחון על רקע המתיחות עם איראן, בטרם המריאה לאבו דאבי.",
     "axis": "ישראל - רוסיה - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T20:09:38+00:00",
     "last_update_at": "2026-11-09T20:09:38+00:00",
     "what_is_not_verified": "תוכן הפגישות ומטרת הביקור הרשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49443",
       "published_at": "2026-11-09T20:09:38+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה בן גוריון, ישראל",
       "lat": 32.0027,
       "lon": 34.8809
      },
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "IRAN-11092101-05",
     "title": "צרפת מאשימה רשמית את משמרות המהפכה במתקפות סייבר נגד רשתות קירור",
     "summary": "משרד החוץ והתביעה בצרפת הודיעו כי גורמי סייבר ממשמרות המהפכה האיראניים שיבשו מקררים במאות חנויות, זימנו את השגריר ופעלו להוצאת צווי מעצר וסנקציות אירופיות.",
     "axis": "איראן - צרפת",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T16:00:54+00:00",
     "last_update_at": "2026-11-09T20:20:08+00:00",
     "what_is_not_verified": "זהות המבצעים בפועל מעבר להאשמות התביעה ומשרד החוץ הצרפתי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmg474vk6dyqo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-09T20:20:08+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/09/france-blames-irans-revolutionary-guards-for-cyber-attacks-on-supermarket-fridges",
       "published_at": "2026-11-09T17:54:40+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/france-says-iran-behind-unprecedented-cyberattacks-fridges",
       "published_at": "2026-11-09T17:30:33+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-ambassador-summoned-over-alleged-cyberattacks-french-supermarket",
       "published_at": "2026-11-09T17:10:06+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611097252",
       "published_at": "2026-11-09T16:55:37+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133362",
       "published_at": "2026-11-09T16:48:51+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sy011bokcge",
       "published_at": "2026-11-09T16:39:10+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/9/france-accuses-iran-of-cyberattack-on-european-fridges?traffic_source=rss",
       "published_at": "2026-11-09T16:33:33+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1386715",
       "published_at": "2026-11-09T16:16:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21815328",
       "published_at": "2026-11-09T16:00:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11092101-06",
     "title": "משלחת איראן בווינה מגנה את ראש הסוכנות הבינלאומית לאנרגיה אטומית",
     "summary": "נציגות איראן טענה לאכיפה בררנית של רפאל גרוסי לאחר שנמנע מגינוי הפצצות על מתקני גרעין איראניים בטענה כי הדבר מחוץ למנדט שלו.",
     "axis": "איראן - הסוכנות הבינלאומית לאנרגיה אטומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T20:49:14+00:00",
     "last_update_at": "2026-11-09T20:49:14+00:00",
     "what_is_not_verified": "היקף הפגיעה במתקנים והחלטות הסוכנות הבינלאומית לאנרגיה אטומית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_011c4eef096ebbc4",
       "url": "https://en.irna.ir/news/86317340/Iran-criticizes-Grossi-s-double-standard-in-condemning-attack",
       "published_at": "2026-11-09T20:49:14+00:00"
      }
     ],
     "places": [
      {
       "name": "וינה, אוסטריה",
       "lat": 48.2084,
       "lon": 16.3725
      }
     ]
    },
    {
     "id": "IRAN-11092101-07",
     "title": "הפצת עלוני איומים של קבוצת האקרים איראנית בתל אביב",
     "summary": "שירות הביטחון הכללי ומשטרת ישראל פתחו בחקירה עקב מציאת כרוזים בתיבות דואר בצפון תל אביב מטעם קבוצת ההאקרים חנדלה המאיימים בפגיעה באזרחים אם תחודש הלחימה.",
     "axis": "איראן - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T14:04:21+00:00",
     "last_update_at": "2026-11-09T14:04:21+00:00",
     "what_is_not_verified": "זהות מפיצי העלונים ומידת הקשר הישיר למשטר האיראני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/byu02rkrge",
       "published_at": "2026-11-09T14:04:21+00:00"
      }
     ],
     "places": [
      {
       "name": "תל אביב, ישראל",
       "lat": 32.0853,
       "lon": 34.7818
      }
     ]
    },
    {
     "id": "IRAN-11092101-08",
     "title": "חילוקי דעות ומתיחות פוליטית בוושינגטון סביב ניהול המלחמה באיראן",
     "summary": "הוגשה הצעת הדחה נגד שר המלחמה האמריקאי פיט הגסת בעקבות ניהול המלחמה מול איראן, בעוד הנשיא דונלד טראמפ והשר עצמו מגבים את המהלכים הצבאיים.",
     "axis": "ארצות הברית - פוליטיקה פנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T19:15:33+00:00",
     "last_update_at": "2026-11-09T19:51:19+00:00",
     "what_is_not_verified": "תוצאות ההצבעה הצפויה בבית הנבחרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21816806",
       "published_at": "2026-11-09T19:51:19+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133372",
       "published_at": "2026-11-09T19:15:33+00:00"
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
     "id": "IRAN-11092101-09",
     "title": "דיווח בעיראק על תרחישי מלחמה אמריקניים ואזהרה מפני מעורבות מיליציות",
     "summary": "ראש ממשלת עיראק דן עם גורמים פוליטיים בתוכניות מלחמה אמריקניות הכוללות תרחישי פלישה דרך עיראק, והזהיר כי הממשלה תעצור פעילי מיליציות שיתערבו בלחימה.",
     "axis": "ארצות הברית - עיראק - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T23:13:08+00:00",
     "last_update_at": "2026-11-08T23:13:08+00:00",
     "what_is_not_verified": "אמיתות תוכניות המלחמה המוצגות בעיתון אל-מדא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49424",
       "published_at": "2026-11-08T23:13:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11092101-10",
     "title": "מזכיר המדינה האמריקאי מותח ביקורת חריפה על דרישות איראן במשא ומתן",
     "summary": "מרקו רוביו טען כי דרישותיה של איראן במשא ומתן בלתי מתקבלות על הדעת ושערורייתיות, וציין כי השיחות אינן מתקדמות ואינן נושאות פרי.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T22:12:24+00:00",
     "last_update_at": "2026-11-08T22:29:22+00:00",
     "what_is_not_verified": "האם המשא ומתן הסתיים לחלוטין או נמשך בערוצים חשאיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49423",
       "published_at": "2026-11-08T22:29:22+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94985",
       "published_at": "2026-11-08T22:12:24+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "קיומן ותוכנן של תוכניות פלישה אמריקניות דרך עיראק",
    "התקיימות פגישה עתידית בקטאר בין ואנס לרזאאי בשבוע הבא",
    "תוכן השיחות של ראש המודיעין הצבאי הרוסי בישראל ובאבו דאבי",
    "מעורבות ישירה של משמרות המהפכה בחלוקת כרוזים בתל אביב"
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
     "value": 3.1707,
     "unit": "ILS",
     "change_pct": -0.88,
     "source_id": "src_ecb",
     "as_of": "2026-11-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת נשק גרעיני מאיראן ומוכנות לחידוש תקיפות צבאיות בכל עת",
      "פתיחת מצר הורמוז והשבת הפיקוח הבינלאומי על מתקני הגרעין"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי כבד כדי לאלץ את טהרן להסדר בתנאים נוחים",
      "צמצום הסכנה להסלמה אזורית כוללת לאחר תוצאות בחירות האמצע"
     ],
     "forecast": [
      "המשך שימוש באיומי תקיפה לצד ערוצי הידברות בתיווך קטארי ומפרצי",
      "החרפת הצעדים נגד נתיבי אספקה ורשתות השפעה איראניות"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "מתן מענה צבאי מיידי, תקיף ובעוצמה חסרת תקדים לכל רמת איום",
      "גינוי פעולות הסוכנות הבינלאומית לאנרגיה אטומית כחד-צדדיות"
     ],
     "inferred": [
      "השגת שחרור נכסים מוקפאים והסרת המצור הכלכלי והימי",
      "הרתעת ארצות הברית וישראל באמצעות לוחמת סייבר והפעלת זירות משניות"
     ],
     "forecast": [
      "שמירה על כוננות התקפית גבוהה לצד ניהול מגעים עקיפים",
      "המשך פעילות חשאית ושימוש בשלוחות אזוריות בעיראק ובסביבתה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מוכנות ודריכות גבוהה במערכת הביטחון לכל אפשרות של מתקפת פתע"
     ],
     "inferred": [
      "מניעת הישגים מדיניים או כלכליים מאיראן שאינם כוללים בלימה גרעינית מלאה",
      "תיאום הדוק עם גורמים בינלאומיים למניעת התבססות איומים בגבולותיה"
     ],
     "forecast": [
      "המשך היערכות ביטחונית מסוכלת מול איומי שלוחות וסייבר",
      "שימור חופש הפעולה הצבאי והמודיעיני מול הציר האיראני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/9/france-accuses-iran-of-cyberattack-on-european-fridges?traffic_source=rss",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/france-says-iran-behind-unprecedented-cyberattacks-fridges",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmg474vk6dyqo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/09/france-blames-irans-revolutionary-guards-for-cyber-attacks-on-supermarket-fridges",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611097252",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86317340/Iran-criticizes-Grossi-s-double-standard-in-condemning-attack",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21816806",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1386715",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-ambassador-summoned-over-alleged-cyberattacks-french-supermarket",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133372",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49423",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94985",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383960710",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/byu02rkrge",
     "accessed_at": "2026-11-09T21:01:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-09T07:05:57+00:00",
  "changes": {
   "IRAN-11092101-01": {
    "kind": "new"
   },
   "IRAN-11092101-02": {
    "kind": "new"
   },
   "IRAN-11092101-03": {
    "kind": "new"
   },
   "IRAN-11092101-04": {
    "kind": "new"
   },
   "IRAN-11092101-05": {
    "kind": "new"
   },
   "IRAN-11092101-06": {
    "kind": "new"
   },
   "IRAN-11092101-07": {
    "kind": "new"
   },
   "IRAN-11092101-08": {
    "kind": "new"
   },
   "IRAN-11092101-09": {
    "kind": "new"
   },
   "IRAN-11092101-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התבטאויות רוביו וגורמים בארה\"ב על קיפאון במשא ומתן",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-09T2107__ukraine-202611092107.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-09T21:07:34+00:00",
   "window": {
    "from": "2026-11-08T21:07:34+00:00",
    "to": "2026-11-09T21:07:34+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611092107"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בתקיפות רוסיות נמשכות על תשתיות האנרגיה האוקראיניות ובפגיעות כטב\"מים, מולן מגיבה אוקראינה בתקיפות עומק על בסיסי מזל\"טים ומפעלי ייצור צבאיים ברוסיה ובשטחים הכבושים. במקביל נערכים הצדדים לחידוש המשא ומתן המדיני בסבב שיחות משולש באבו דאבי בתיווך אמריקאי, לצד מחלוקות באיחוד האירופי סביב המשך מימון הסיוע לקייב.",
   "fronts": [
    {
     "name": "מחוז זפוריז'יה (ברדיאנסק)",
     "status": "פגיעות עומק של צבא אוקראינה נגד מתקני יחידות הרחפנים של צבא רוסיה"
    },
    {
     "name": "עורף התשתיות באוקראינה (דניפרו, קמיאנסקה, קייב)",
     "status": "פגיעות רוסיות קשות ברשת החשמל ושיבושי אספקה רחבים"
    },
    {
     "name": "מחוזות חרקוב וחרסון",
     "status": "תקיפות כטב\"מים רוסיים נגד מטרות וכלי רכב"
    },
    {
     "name": "עומק רוסיה (מחוז לנינגרד)",
     "status": "תקיפה אוקראינית נגד מתקן ביטחוני לייצור רכיבי טילים בליסטיים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11092107-01",
     "title": "תקיפה אוקראינית על בסיס רחפנים רוסי בברדיאנסק הכבושה",
     "summary": "כוחות אוקראיניים ביצעו מתקפה משולבת באמצעות כטב\"מים על בסיס יחידת הרחפנים הרוסית 'רוביקון' בעיר ברדיאנסק שבמחוז זפוריז'יה, כ-107 ק\"מ מעבר לקו החזית.",
     "axis": "זפוריז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T17:29:00+00:00",
     "last_update_at": "2026-11-09T20:24:20+00:00",
     "what_is_not_verified": "היקף הנפגעים והאבדות בקרב המפעילים הרוסים בבסיס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-strike-elite-russian-rubicon-drone-unit-in-occupied-territory/",
       "published_at": "2026-11-09T20:24:20+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062021/",
       "published_at": "2026-11-09T17:29:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ברדיאנסק, אוקראינה",
       "lat": 46.7557,
       "lon": 36.7888
      }
     ]
    },
    {
     "id": "UKRAINE-11092107-02",
     "title": "היערכות לשיחות משולשות באבו דאבי בהשתתפות ארה\"ב, רוסיה ואוקראינה",
     "summary": "משלחות מרוסיה, אוקראינה וארה\"ב מגיעות לאיחוד האמירויות לשיחות סגורות בנושאי ערבויות ביטחון, חילופי שבויים והפחתת הסלמה, במקביל למגעים עם נציגים אירופים.",
     "axis": "משא ומתן דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T01:44:46+00:00",
     "last_update_at": "2026-11-09T20:07:08+00:00",
     "what_is_not_verified": "מידת מעורבותם בפועל של נציגי אירופה ונאט\"ו בתוך הדיונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2215057",
       "published_at": "2026-11-09T20:07:08+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49442",
       "published_at": "2026-11-09T20:03:34+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4183080-budanov-humanitarian-issues-to-be-major-focus-of-abu-dhabi-talks.html",
       "published_at": "2026-11-09T18:40:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062026/",
       "published_at": "2026-11-09T18:02:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4183060-kushner-and-witkoff-to-meet-european-representatives-ahead-of-abu-dhabi-talks.html",
       "published_at": "2026-11-09T17:40:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062017/",
       "published_at": "2026-11-09T16:58:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/09/ukraine-war-briefing-post-war-security-guarantees-a-key-focus-in-upcoming-abu-dhabi-talks-says-rubio",
       "published_at": "2026-11-09T01:44:46+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11092107-03",
     "title": "פגיעות ברשת החשמל והאנרגיה במחוז דניפרופטרובסק ובקייב",
     "summary": "תקיפות רוסיות על מתקני אנרגיה הובילו לשיבושים נרחבים באספקת החשמל בערים דניפרו, קמיאנסקה וקייב, וצוותים פועלים לתיקון הנזקים.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T12:00:00+00:00",
     "last_update_at": "2026-11-09T20:37:00+00:00",
     "what_is_not_verified": "משך הזמן המדויק שיידרש להשבת זרם החשמל במלואו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_77602bd7b34a1863",
       "url": "https://www.ukrinform.net/rubric-ato/4183116-electricity-situation-remains-particularly-difficult-in-kyiv-and-dnipro-shmyhal.html",
       "published_at": "2026-11-09T20:37:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_77602bd7b34a1863",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062040/",
       "published_at": "2026-11-09T19:34:00+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_77602bd7b34a1863",
       "url": "https://news.un.org/feed/view/en/story/2026/11/1168761",
       "published_at": "2026-11-09T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      },
      {
       "name": "קמיאנסקה, אוקראינה",
       "lat": 48.5168,
       "lon": 34.6069
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-11092107-04",
     "title": "פגיעות כטב\"מים רוסיים בכלי רכב אזרחיים בחרסון ובחרקוב",
     "summary": "כטב\"מים רוסיים פגעו בשני כלי רכב, האחד במחוז חרסון שבו נפצעו שלושה בני אדם, והשני ברובע קייבסקי בעיר חרקוב שבו נפצע אדם אחד.",
     "axis": "חרסון וחרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T17:48:00+00:00",
     "last_update_at": "2026-11-09T19:59:00+00:00",
     "what_is_not_verified": "מצבם הרפואי המדויק של הפצועים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4183102-russian-drone-strikes-car-in-kherson-region-injuring-three-people.html",
       "published_at": "2026-11-09T19:59:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062024/",
       "published_at": "2026-11-09T17:48:00+00:00"
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
     "id": "UKRAINE-11092107-05",
     "title": "הארכת משימת האימונים של האיחוד האירופי לחיילים אוקראינים",
     "summary": "מועצת האיחוד האירופי החליטה להאריך את מנדט משימת הסיוע הצבאי בשנתיים נוספות עם תקציב של כ-300 מיליון אירו והקמת נציגות ישירה באוקראינה.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T18:05:00+00:00",
     "last_update_at": "2026-11-09T18:05:00+00:00",
     "what_is_not_verified": "מועד הפתיחה המדויק של הנציגות החדשה בתוך אוקראינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062027/",
       "published_at": "2026-11-09T18:05:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11092107-06",
     "title": "גרמניה מאיימת לבלום את תקציב האיחוד האירופי בשל סיוע לאוקראינה",
     "summary": "קנצלר גרמניה פרידריך מרץ הודיע כי יבלום את אישור תקציב האיחוד לשנים 2028–2034 אלא אם הונגריה, סלובקיה, בולגריה וצ'כיה יתחייבו להמשך מימון אוקראינה.",
     "axis": "סיוע בינלאומי וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T18:00:00+00:00",
     "last_update_at": "2026-11-09T19:44:01+00:00",
     "what_is_not_verified": "האם המדינות המסתייגות ישנו את עמדתן בעקבות האיום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/09/german-chancellor-merz-threatens-to-block-eu-budget-unless-four-holdouts-hungary-slovakia-bulgaria-and-the-czech-republic-commit-to-funding-ukraine",
       "published_at": "2026-11-09T19:44:01+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4183064-merz-threatens-to-block-eu-budget-unless-agreement-is-reached-on-ukraine-funding-ft.html",
       "published_at": "2026-11-09T18:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11092107-07",
     "title": "הרחבת הסנקציות הקנדיות על גופים ואנשים ברוסיה",
     "summary": "קנדה הרחיבה את העיצומים נגד רוסיה והטילה הגבלות על 38 גופים ו-24 אישים המעורבים בפיתוח טכנולוגיית טילים בליסטיים ובפעילות סייבר.",
     "axis": "סנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T14:17:54+00:00",
     "last_update_at": "2026-11-09T14:17:54+00:00",
     "what_is_not_verified": "רשימת הגופים והאישים המלאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/nov/09/polands-krakow-attack-ukraine-russia-france-germany-europe-latest-news",
       "published_at": "2026-11-09T14:17:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11092107-08",
     "title": "תקיפה אוקראינית על מפעל לייצור דלק טילים במחוז לנינגרד",
     "summary": "כוחות אוקראיניים פגעו במפעל מורוזוב במחוז לנינגרד ברוסיה, המייצר מנועי דלק מוצק עבור טילי איסקנדר-אם.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T17:29:00+00:00",
     "last_update_at": "2026-11-09T18:34:24+00:00",
     "what_is_not_verified": "היקף הנזק המדויק שנגרם לפס הייצור במפעל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-suffers-record-daily-losses-for-2nd-time-in-a-month/",
       "published_at": "2026-11-09T18:34:24+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062021/",
       "published_at": "2026-11-09T17:29:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על שימוש בסרטוני בינה מלאכותית שהוצגו לפוטין כדי לזייף הישגים צבאיים בשטח",
    "נתוני ההדלפה לפיהם נהרגו יותר מ-400 אלף חיילים רוסים מאז תחילת הפלישה",
    "טענות שגריר רוסיה באו\"ם בדבר קיומה של רשת בתי כלא תת-קרקעיים אוקראיניים לשבויי מלחמה",
    "האשמות שרת החוץ של לטביה בדבר ביצוע רצח עם על ידי רוסיה"
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
     "value": 1.1193,
     "unit": "USD",
     "change_pct": 0.25,
     "source_id": "src_ecb",
     "as_of": "2026-11-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת ערבויות ביטחוניות ממשיות ומחייבות למניעת תוקפנות עתידית",
      "קידום ומימוש עסקאות חילופי שבויים",
      "הבטחת סיוע פיננסי וצבאי ארוך טווח ממדינות המערב והאיחוד האירופי"
     ],
     "inferred": [
      "פגיעה ביכולות המערך האווירי והרחפנים של רוסיה הרחק מקווי המגע",
      "שימור רציפות אספקת האנרגיה בעורף אל מול לחץ צבאי רוסי כבד"
     ],
     "forecast": [
      "המשך התמקדות בשיחות אבו דאבי בערוץ ההומניטרי וחילופי שבויים ללא פריצת דרך מדינית מהירה",
      "המשך תקיפות ממוקדות בעומק השטח הרוסי על יעדי תעשייה ביטחונית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "עמידה על יעדי המבצע הצבאי המקוריים ותנאי השלום שהציבה ללא שינוי",
      "דרישה שחיזוק ביטחון אוקראינה לא יבוא על חשבון ביטחונה של רוסיה",
      "התנגדות לצירוף נציגים אירופים לשולחן השיחות המרכזי"
     ],
     "inferred": [
      "הפעלת לחץ שחיקה ממושך על האוכלוסייה והכלכלה האוקראינית דרך הרס מתקני אנרגיה",
      "שאיפה לכפות הסדר הכולל שינויי גבולות לטובתה"
     ],
     "forecast": [
      "המשך מתקפות אוויריות ממוקדות לעבר מתקני תשתית אוקראיניים לקראת החורף",
      "התבצרות בעמדות המשא ומתן במטרה למנוע ערבויות ביטחון מערביות לקייב"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "תיווך בין מוסקבה לקייב להשגת הסכם שלום וגיבוש ארכיטקטורת ביטחון",
      "קריאה להפסקת תקיפות הדדיות ופעולות תגמול"
     ],
     "inferred": [
      "רצון להביא לסיום מהיר של המלחמה, ייתכן תוך פשרות טריטוריאליות מצד אוקראינה",
      "שילוב מבוקר של בעלות הברית מאירופה בתהליך לאחר השיחות המשולשות"
     ],
     "forecast": [
      "המשך הובלת ערוץ המשא ומתן באבו דאבי תוך הפעלת לחץ על שני הצדדים להימנע מהסלמה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/nov/09/polands-krakow-attack-ukraine-russia-france-germany-europe-latest-news",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-russia-suffers-record-daily-losses-for-2nd-time-in-a-month/",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/09/german-chancellor-merz-threatens-to-block-eu-budget-unless-four-holdouts-hungary-slovakia-bulgaria-and-the-czech-republic-commit-to-funding-ukraine",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/09/8062021/",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2215057",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49442",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4183064-merz-threatens-to-block-eu-budget-unless-agreement-is-reached-on-ukraine-funding-ft.html",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/11/1168761",
     "accessed_at": "2026-11-09T21:07:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-09T00:40:33+00:00",
  "changes": {
   "UKRAINE-11092107-01": {
    "kind": "new"
   },
   "UKRAINE-11092107-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "היערכות למשא ומתן דיפלומטי באבו דאבי",
    "score": 1.0
   },
   "UKRAINE-11092107-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפות רוסיות על תשתיות אנרגיה וחשמל באוקראינה",
    "score": 0.817
   },
   "UKRAINE-11092107-04": {
    "kind": "possible",
    "prev": "פגיעה בעמדות פיקוד ושליטה על כטב\"מים רוסיים",
    "score": 0.467
   },
   "UKRAINE-11092107-05": {
    "kind": "new"
   },
   "UKRAINE-11092107-06": {
    "kind": "new"
   },
   "UKRAINE-11092107-07": {
    "kind": "new"
   },
   "UKRAINE-11092107-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-09T2117__north-202611092117.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-09T21:17:12+00:00",
   "window": {
    "from": "2026-11-08T21:17:12+00:00",
    "to": "2026-11-09T21:17:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611092117"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות צבאית ישראלית מתמשכת בדרום לבנון ובגבול סוריה, הכוללת הפגזות, תקיפות מהאוויר ופעולות חיכוך מקומיות. במקביל, סוריה פועלת לשיקום מעמדה האזורי והכלכלי באמצעות פתיחה מחודשת של מעברי גבול עם לבנון, הידוק הקשרים עם ירדן וקידום הבנות ביטחוניות מול סעודיה וטורקיה. במישור האזרחי המקומי נרשמים תיאומים מוגבלים לצורכי חקלאות באזורי החיכוך בדרום לבנון.",
   "fronts": [
    {
     "name": "דרום לבנון וישראל",
     "status": "לחימה בעצימות מוגבלת, תקיפות ישראליות יומיומיות לצד תיאומים נקודתיים לחקלאים"
    },
    {
     "name": "דרום סוריה וישראל",
     "status": "חיכוך בגבול הכולל ירי צה\"ל לעבר מטרות ואנשי תקשורת באזור קוניטרה"
    },
    {
     "name": "גבול לבנון - סוריה",
     "status": "הסדרה ופתיחה מחדש של מעברי גבול אזרחיים ומסחריים לאחר הרס ממושך"
    },
    {
     "name": "הציר הסורי - אזורי (ירדן, סעודיה, טורקיה)",
     "status": "התקרבות מדינית, חתימה על הסכמי סחר ומגעים להסכמי הגנה אזוריים"
    }
   ],
   "events": [
    {
     "id": "NORTH-11092117-01",
     "title": "המשך תקיפות ופעילות כוחות צה\"ל ברחבי דרום לבנון",
     "summary": "הצבא הישראלי ביצע שורת הפגזות ארטילריות, תקיפות מהאוויר, ירי מקלעים כבד, פיצוצים יזומים והריסת מבנים במספר כפרים ואזורים בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T07:50:09+00:00",
     "last_update_at": "2026-11-09T17:59:55+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומספר הנפגעים מפעולות אלו אינם מצוינים בפרסומים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a5e7ff28c18ff8c7",
       "url": "https://english.almanar.com.lb/article/148507/",
       "published_at": "2026-11-09T17:59:55+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f36905f59c1eb3a5",
       "url": "https://english.almanar.com.lb/article/148457/",
       "published_at": "2026-11-09T16:12:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a5e7ff28c18ff8c7",
       "url": "https://english.almanar.com.lb/article/148432/",
       "published_at": "2026-11-09T16:04:25+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a5eb566a7e2ccc72",
       "url": "https://english.almanar.com.lb/article/148422/",
       "published_at": "2026-11-09T15:01:22+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_a5e7ff28c18ff8c7",
       "url": "https://t.me/abualiexpress/133329",
       "published_at": "2026-11-09T07:50:09+00:00"
      }
     ],
     "places": [
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.35,
       "lon": 35.5111
      },
      {
       "name": "אל-חיאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      }
     ]
    },
    {
     "id": "NORTH-11092117-02",
     "title": "ירי של כוחות צבא ישראליים לעבר עיתונאים בדרום סוריה",
     "summary": "כוחות צה\"ל פתחו באש לעבר צוותי תקשורת שסיקרו באזור הכפר בריקה במחוז קוניטרה, וכתוצאה מכך נפצעו שני אזרחים סורים.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T14:06:42+00:00",
     "last_update_at": "2026-11-09T18:28:42+00:00",
     "what_is_not_verified": "זהות הפצועים המדויקת ומצבם הרפואי אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/2-syrians-wounded-by-israeli-army-fire-in-southern-syria/4117869",
       "published_at": "2026-11-09T18:28:42+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/-israeli-forces-open-fire-on-journalists-in-southern-syria/4117454",
       "published_at": "2026-11-09T14:06:42+00:00"
      }
     ],
     "places": [
      {
       "name": "בריקה, סוריה",
       "lat": 33.0348,
       "lon": 35.8977
      }
     ]
    },
    {
     "id": "NORTH-11092117-03",
     "title": "תיאום מסיק זיתים בקו הצהוב בדרום לבנון",
     "summary": "תושבי כפר שובא הורשו להיכנס לשטח הכפר המצוי בעומק הקו הצהוב כדי למסוק זיתים, לאחר ביצוע תיאום מול ישראל.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T08:34:19+00:00",
     "last_update_at": "2026-11-09T08:34:19+00:00",
     "what_is_not_verified": "אופן ביצוע התיאום והגורם המתווך המדויק אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133334",
       "published_at": "2026-11-09T08:34:19+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר שובא, לבנון",
       "lat": 33.3277,
       "lon": 35.6927
      }
     ]
    },
    {
     "id": "NORTH-11092117-04",
     "title": "פתיחה מחדש של מעבר הגבול עבודיה-דבוסיה בין לבנון לסוריה",
     "summary": "מעבר הגבול המרכזי בין לבנון לסוריה נפתח מחדש לתנועת נוסעים ומסחר לאחר שהיה סגור כמעט שנתיים בעקבות תקיפות ישראליות שגרמו להרס במקום.",
     "axis": "סוריה - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T15:02:00+00:00",
     "last_update_at": "2026-11-09T15:02:00+00:00",
     "what_is_not_verified": "אין פרטים על היקף התנועה המסחרית שנרשמה בפועל ביום הפתיחה הראשון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_6f8125479ec7bf07",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/967128/lebanon-syria-border-crossing-reopens-after-israeli-strikes-as-both-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967128",
       "published_at": "2026-11-09T15:02:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11092117-05",
     "title": "ביקור שר החוץ הירדני בדמשק וחתימה על הסכמי שיתוף פעולה",
     "summary": "שרי החוץ של סוריה וירדן נפגשו בדמשק וחתמו על אחד עשר הסכמי שיתוף פעולה כלכליים ותשתיתיים, תוך הסדרת פיצויים בעקבות תקיפות אוויריות ירדניות במחוז דרעא בחודש הקודם.",
     "axis": "סוריה - ירדן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T08:20:54+00:00",
     "last_update_at": "2026-11-09T17:18:32+00:00",
     "what_is_not_verified": "גובה הפיצויים הכספיים שיועברו למשפחות הנפגעים אינו מפורט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-jordan-focus-economic-ties-amid-fallout-october-attacks",
       "published_at": "2026-11-09T17:18:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/jordan-fm-signs-cooperation-deals-syria-after-deadly-strikes",
       "published_at": "2026-11-09T12:06:02+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/967114/syria-jordan-seek-to-mend-ties-after-deadly-airstrikes-sign-cooperatio/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967114",
       "published_at": "2026-11-09T11:02:48+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-jordan-sign-11-cooperation-documents-including-rail-link-deal/4116576",
       "published_at": "2026-11-09T08:20:54+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-11092117-06",
     "title": "מגעים להצטרפות סוריה להסכם הגנה משותף והסכם צבאי עם סעודיה",
     "summary": "נמסר כי דמשק נערכת להצטרף להסכם ההגנה של מכה יחד עם טורקיה, סעודיה ופקיסטן, לצד אישור סורי רשמי על חתימת הסכם שיתוף פעולה צבאי עם ריאד והכחשת כוונה לשלוח חיילים לתימן.",
     "axis": "סוריה - טורקיה - מדינות ערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T10:09:57+00:00",
     "last_update_at": "2026-11-09T19:29:07+00:00",
     "what_is_not_verified": "האם התקבלה החלטה סופית להצטרף להסכם מכה נותר שנוי במחלוקת בין מקורות שונים, ודמשק טרם פרסמה הודעה רשמית בעניין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-sending-troops-fight-houthis-return-saudi-loans",
       "published_at": "2026-11-09T19:29:07+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/148492/",
       "published_at": "2026-11-09T16:37:54+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-denies-it-has-forces-fighting-yemen",
       "published_at": "2026-11-09T13:28:36+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-denies-sending-troops-to-yemen-says-military-deal-with-saudi-arabia-excludes-deployment/4117347",
       "published_at": "2026-11-09T13:06:02+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49428",
       "published_at": "2026-11-09T11:46:09+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/967103/syrian-fm-says-country-has-no-troops-in-yemen-wont-send-any/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967103",
       "published_at": "2026-11-09T10:09:57+00:00"
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
     "id": "NORTH-11092117-07",
     "title": "ביקור צפוי של שגריר ארצות הברית באו\"ם בלבנון",
     "summary": "שגריר ארצות הברית באו\"ם מייק וולץ צפוי להגיע לביקור רשמי בלבנון במהלך השבוע הבא.",
     "axis": "לבנון - ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T14:20:21+00:00",
     "last_update_at": "2026-11-09T14:20:21+00:00",
     "what_is_not_verified": "המועד המדויק ולוח הפגישות הרשמי אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967155/us-ambassador-to-un-mike-waltz-to-visit-lebanon-next-week-lbci-sources/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967155",
       "published_at": "2026-11-09T14:20:21+00:00"
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
    "ההחלטה הסופית של דמשק בנוגע להצטרפות להסכם ההגנה המשותף של מכה",
    "טענות על פריסת חיילים סורים בתימן ובסעודיה לצורך לחימה בחות'ים",
    "מספר הנפגעים והיקף הנזק המדויק מתקיפות צה\"ל בדרום לבנון",
    "זהותם המלאה של הפצועים מירי צה\"ל לעבר עיתונאים במחוז קוניטרה"
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
     "value": 3.1707,
     "unit": "ILS",
     "change_pct": -0.88,
     "source_id": "src_ecb",
     "as_of": "2026-11-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "סוריה",
     "declared": [
      "שיקום יכולות הצבא והמוסדות האזרחיים באמצעות מומחיות סעודית",
      "הרחבת קשרי המסחר והתשתיות עם ירדן ולבנון",
      "הכחשת כל כוונה לשלוח כוחות צבאיים לתימן"
     ],
     "inferred": [
      "שבירת הבידוד המדיני והידוק הבריתות עם הציר הסוני בהובלת סעודיה וטורקיה",
      "השגת מקורות מימון והשקעות זרות לשיקום המדינה לאחר שנות עימות"
     ],
     "forecast": [
      "המשך מיסוד ההסכמים הכלכליים עם שכנותיה והעמקת התיאום הביטחוני האזורי"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "שימור חופש הפעולה הצבאי ופגיעה בתשתיות עוינות בדרום לבנון ובדרום סוריה",
      "מניעת התבססות גורמים חמושים בסמוך לקו הגבול והגנה על מרחב החיץ"
     ],
     "forecast": [
      "המשך פעילות הסיכול וההפגזות לצד אישור נקודתי לפעילות אזרחית מתואמת"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "חידוש התנועה והמסחר דרך מעברי הגבול עם סוריה",
      "קידום רפורמות פיננסיות מול קרן המטבע הבינלאומית"
     ],
     "inferred": [
      "ניסיון להקל על המשבר הכלכלי הפנימי באמצעות פתיחת עורקי סחר אזוריים"
     ],
     "forecast": [
      "פתיחת מעברי גבול נוספים עם סוריה בחודשים הקרובים, לרבות מעבר אל-ערידה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/148492/",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-sending-troops-fight-houthis-return-saudi-loans",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-denies-sending-troops-to-yemen-says-military-deal-with-saudi-arabia-excludes-deployment/4117347",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/967155/us-ambassador-to-un-mike-waltz-to-visit-lebanon-next-week-lbci-sources/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967155",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-denies-it-has-forces-fighting-yemen",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/jordan-fm-signs-cooperation-deals-syria-after-deadly-strikes",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133334",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49428",
     "accessed_at": "2026-11-09T21:17:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-09T00:43:35+00:00",
  "changes": {
   "NORTH-11092117-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "תקיפות אוויריות והפגזות ארטילריות של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11092117-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פשיטה של כוחות ישראליים על בית ספר ובתים בדרום סוריה",
    "score": 0.65
   },
   "NORTH-11092117-03": {
    "kind": "possible",
    "prev": "גיבוש יוזמה מדינית צרפתית להסדר ביטחוני בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11092117-04": {
    "kind": "new"
   },
   "NORTH-11092117-05": {
    "kind": "new"
   },
   "NORTH-11092117-06": {
    "kind": "new"
   },
   "NORTH-11092117-07": {
    "kind": "new"
   }
  }
 }
};
