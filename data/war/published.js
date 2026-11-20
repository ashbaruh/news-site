/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-20T0809__yemen-202611200809.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-20T08:09:08+00:00",
   "window": {
    "from": "2026-11-19T08:09:08+00:00",
    "to": "2026-11-20T08:09:08+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611200809"
   },
   "summary": "הלחימה בין תנועת החות'ים בתימן לבין סעודיה והקואליציה המערבית החריפה באופן ניכר, לאחר חידוש מלחמת האזרחים בתימן ביולי האחרון. החות'ים מגבירים את שיגורי הטילים והכטב\"מים לעבר יעדים כלכליים ואסטרטגיים בעומק סעודיה, כולל פגיעה במגדלים ברובע הפיננסי של ריאד. במקביל, הקואליציה מפעילה יירוטים נרחבים ומבצעת תקיפות אוויריות בצנעא, בעוד בזירה הפנימית בתימן מתחוללים קרבות קשים במרחב תעז.",
   "fronts": [
    {
     "name": "חזית סעודיה - חות'ים",
     "status": "הסלמה בתקיפות טילים וכטב\"מים לעבר ריאד ודרום סעודיה לצד יירוטים של הקואליציה ותקיפות בצנעא"
    },
    {
     "name": "חזית פנים תימן (תעז וצנעא)",
     "status": "קרבות קרקעיים ממושכים ומצור על תעז, לצד תקיפות אוויריות של הקואליציה בבירה צנעא"
    },
    {
     "name": "זירת ים סוף וסודאן",
     "status": "ניסיונות חות'יים ואיראניים להרחיב נוכחות ולבסס קשרים עם פלגים בסודאן לאורך חופי ים סוף"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11200809-01",
     "title": "פגיעה במגדל קרן ההשקעות הציבורית בריאד בתקיפה חות'ית",
     "summary": "טיל ששיגרו החות'ים פגע בגורד שחקים במרכז הפיננסי על שם המלך עבדאללה בריאד, שבו שוכנת קרן ההשקעות הציבורית הסעודית. התקיפה גרמה לנזק למספר קומות במבנה ולחלונות מנופצים, ללא דיווח על נפגעים בנפש.",
     "axis": "סעודיה-חות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T07:58:16+00:00",
     "last_update_at": "2026-11-20T02:32:50+00:00",
     "what_is_not_verified": "האם הפגיעה בוצעה ישירות על ידי טיל בליסטי או שברי יירוט",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-hit-saudi-arabias-sovereign-wealth-fund-skyscraper-0",
       "published_at": "2026-11-20T02:32:50+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-escalate-war-missile-hits-riyadhs-tallest-building",
       "published_at": "2026-11-19T22:44:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133916",
       "published_at": "2026-11-19T16:50:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-not-rushing-iran-decision-houthis-strike-riyadh-tower",
       "published_at": "2026-11-19T16:24:29+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261119-skyscraper-in-riyadh-damaged-as-saudi-arabia-reports-surge-in-new-houthi-attacks",
       "published_at": "2026-11-19T07:58:16+00:00"
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
     "id": "YEMEN-11200809-02",
     "title": "יירוט כטב\"מים וטילים חות'יים על ידי הקואליציה בהובלת סעודיה",
     "summary": "הקואליציה הצבאית בהובלת סעודיה הודיעה על יירוט והשמדה של טילים בליסטיים וכלי טיס בלתי מאוישים ששוגרו על ידי החות'ים מתימן לעבר ריאד ואזורים בדרום הממלכה.",
     "axis": "סעודיה-חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T23:58:40+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T23:58:40+00:00",
     "last_update_at": "2026-11-20T07:36:09+00:00",
     "what_is_not_verified": "המספר המדויק של הטילים והכטב\"מים ששוגרו ומיקומי היירוט המדויקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-675",
       "published_at": "2026-11-20T07:36:09+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-says-no-rush-iran-houthis-ups-attacks-saudi-arabia",
       "published_at": "2026-11-20T07:32:40+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-claims-downing-houthi-drones-launched-towards-riyadh",
       "published_at": "2026-11-20T07:14:30+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156110",
       "published_at": "2026-11-20T04:15:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-claims-destruction-houthi-missile",
       "published_at": "2026-11-20T03:08:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepted-two-drones-south",
       "published_at": "2026-11-20T02:28:09+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-houthis-escalate-attacks-on-saudi-capital?traffic_source=rss",
       "published_at": "2026-11-19T23:58:40+00:00"
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
     "id": "YEMEN-11200809-03",
     "title": "הודעת החות'ים על תקיפת יעדים כלכליים וצבאיים בסעודיה",
     "summary": "דובר הזרוע הצבאית של החות'ים הודיע על ביצוע תקיפות נגד המרכז הפיננסי ונמל התעופה הבינלאומי בריאד, מתקן פטרוכימי בג'ובייל ובסיס חיל אוויר בח'מיס מושייט.",
     "axis": "סעודיה-חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T22:03:01+00:00",
     "last_update_at": "2026-11-19T22:44:02+00:00",
     "what_is_not_verified": "מידת הנזק בפועל או פגיעה באתרים נוספים פרט למגדל בריאד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-escalate-war-missile-hits-riyadhs-tallest-building",
       "published_at": "2026-11-19T22:44:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-confirm-targeting-financial-centre-saudi-capital",
       "published_at": "2026-11-19T22:03:01+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'ובייל, סעודיה",
       "lat": 27.0007,
       "lon": 49.6532
      },
      {
       "name": "ח'מיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-11200809-04",
     "title": "הסלמת הקרבות בתוך תימן ותקיפות אוויריות בצנעא",
     "summary": "עימותים עזים ניטשים סביב העיר תעז הנצורה, לצד דיווחים של כלי תקשורת חות'יים על גל תקיפות אוויריות חדש של הקואליציה בבירה צנעא.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T07:27:11+00:00",
     "last_update_at": "2026-11-20T00:13:21+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק בתקיפות בצנעא ובקרבות סביב תעז",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cx7v2d8q879eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-20T00:13:21+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-not-rushing-iran-decision-houthis-strike-riyadh-tower",
       "published_at": "2026-11-19T16:24:29+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/china-us-and-russia-meet-tensions-soar-middle-east",
       "published_at": "2026-11-19T07:27:11+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11200809-05",
     "title": "פגישה ביטחונית אמריקנית-סעודית בריאד בעקבות ההסלמה",
     "summary": "מפקד פיקוד המרכז של צבא ארצות הברית נועד בריאד עם יורש העצר הסעודי מוחמד בן סלמאן ברקע התגברות המתקפות החות'יות.",
     "axis": "ארה\"ב-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T07:27:11+00:00",
     "last_update_at": "2026-11-19T16:24:29+00:00",
     "what_is_not_verified": "פרטי הסיכומים או התוכניות המבצעיות שנדונו בפגישה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-not-rushing-iran-decision-houthis-strike-riyadh-tower",
       "published_at": "2026-11-19T16:24:29+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/china-us-and-russia-meet-tensions-soar-middle-east",
       "published_at": "2026-11-19T07:27:11+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "סרטוני הווידאו שהציגו פגיעת טיל ישירה במגדל בריאד טרם אומתו עצמאית",
    "מידת הפגיעה המדויקת בבסיס בח'מיס מושייט, במתקן בג'ובייל ובנמל התעופה בריאד אינה מאומתת",
    "מספר הכטב\"מים והטילים המדויק שיורטו מעל דרום סעודיה אינו אחיד בין ההודעות"
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "פגיעה במוקדים פיננסיים, נמלי תעופה ומתקנים ביטחוניים ותעשייתיים בסעודיה"
     ],
     "inferred": [
      "ערעור תחושת הביטחון הכלכלי של סעודיה ופגיעה במיזמי הפיתוח וחזון 2030",
      "יצירת מנופי לחץ על הקואליציה לעצירת הפעולות הצבאיות בתימן",
      "הרחבת נתיבי אספקה וקשרים אזוריים דרך חופי ים סוף בסודאן"
     ],
     "forecast": [
      "המשך ניסיונות שיגור לעבר ריאד ומוקדי תשתית סעודיים",
      "החרפת הלחץ הצבאי והמצור באזורי הקרבות הפנימיים כמו תעז"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט כלל האיומים הבליסטיים והכטב\"מים החות'יים",
      "תמיכה בממשלה המוכרת בתימן והגדרת ביטחון סעודיה כבלתי נפרד מביטחון האזור"
     ],
     "inferred": [
      "מניעת נזק תדמיתי וכלכלי כבד למרכזים הפיננסיים בריאד",
      "הידוק התיאום הצבאי וההגנתי עם פיקוד המרכז האמריקני להכלת האיום"
     ],
     "forecast": [
      "הגברת תקיפות התגובה האוויריות נגד יעדי שלטון ושיגור של החות'ים בצנעא ובמוקדים נוספים",
      "עיבוי מערכי ההגנה האווירית סביב מוקדי שלטון ותשתיות אסטרטגיות בממלכה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-houthis-escalate-attacks-on-saudi-capital?traffic_source=rss",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cx7v2d8q879eo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261119-skyscraper-in-riyadh-damaged-as-saudi-arabia-reports-surge-in-new-houthi-attacks",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-confirm-targeting-financial-centre-saudi-capital",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/china-us-and-russia-meet-tensions-soar-middle-east",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156110",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133916",
     "accessed_at": "2026-11-20T08:09:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T19:15:35+00:00",
  "changes": {
   "YEMEN-11200809-01": {
    "kind": "new"
   },
   "YEMEN-11200809-02": {
    "kind": "possible",
    "prev": "החלפת מפקד כוחות הקואליציה בתימן והיערכות סעודית למערכה ממושכת",
    "score": 0.633
   },
   "YEMEN-11200809-03": {
    "kind": "possible",
    "prev": "גינויים רשמיים של סעודיה וממשלת תימן למתקפה בריאד",
    "score": 0.633
   },
   "YEMEN-11200809-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "קרבות עזים בתעז ותקיפות אוויריות סעודיות בצנעא",
    "score": 1.0
   },
   "YEMEN-11200809-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת טיל של החות'ים במגדל קרן ההשקעות בריאד ויירוט שיגורים נוספים",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-20T0741__iran-202611200741.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-20T07:41:40+00:00",
   "window": {
    "from": "2026-11-19T07:41:40+00:00",
    "to": "2026-11-20T07:41:40+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611200741"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין בהסלמה צבאית וכלכלית סביב המצור הימי במפרץ, פגיעה במכליות נפט במצר הורמוז וחילופי מהלומות עקיפים. במקביל נרשמות תקיפות טילים של החות'ים לעבר מרכז העסקים בריאד לצד פגיעות נרחבות במתקנים צבאיים אמריקאיים באזור. בישראל ובארה\"ב נבחנת האפשרות לחידוש המערכה הישירה מול טהראן, בעוד איראן מתמודדת עם לחץ כלכלי חריף ומאיימת בהרחבת הפגיעה בתשתיות אנרגיה אזוריות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "מתיחות שיא בעקבות פגיעות מוקשים במכליות נפט והטלת מצור ימי"
    },
    {
     "name": "חזית שלוחות איראן (תימן - סעודיה)",
     "status": "ירי טילים וכטב\"מים של החות'ים לעבר מתקנים ומוקדים כלכליים בריאד"
    },
    {
     "name": "בסיסי צבא ארה\"ב במזרח התיכון",
     "status": "ספיגת מעל 115 תקיפות מצד איראן ושלוחותיה שגרמו נזק כבד למתקנים"
    },
    {
     "name": "החזית הישירה בין ישראל וארה\"ב לאיראן",
     "status": "דיונים על חידוש תקיפות צבאיות והאשמות הדדיות בנוגע לנשק בלתי קונבנציונלי"
    },
    {
     "name": "הזירה הפנים-עיראקית מול המיליציות",
     "status": "הסכם להרגעת המתיחות וכניסת כוחות ממשל למעוזי גדודי חזבאללה"
    }
   ],
   "events": [
    {
     "id": "IRAN-11200741-01",
     "title": "פגיעות מוקשים במכליות נפט במצר הורמוז",
     "summary": "הצבא האיראני מסר כי שתי מכליות נפט עלו באש לאחר שנפגעו ממוקשים ימיים בעת שנעו באזור מוגבל ממזרח למצר הורמוז.",
     "axis": "העימות הימי במפרץ ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T20:39:06+00:00",
     "last_update_at": "2026-11-20T05:03:47+00:00",
     "what_is_not_verified": "הנסיבות המדויקות של הפגיעות והגורם שהניח את המוקשים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-army-says-two-oil-tankers-ablaze-after-hitting-naval-mines",
       "published_at": "2026-11-20T05:03:47+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86327133/Violating-supertanker-catches-fire-in-Strait-of-Hormuz-Iran-s",
       "published_at": "2026-11-19T20:39:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11200741-02",
     "title": "תקיפות איראניות ופגיעה במתקנים צבאיים של ארה\"ב",
     "summary": "מעל מאה וחמש עשרה תקיפות שיוחסו לאיראן או לשלוחותיה פגעו בעשרים ושישה בסיסים ומתקני תשתית של ארה\"ב ברחבי המזרח התיכון וגרמו נזקים של מיליארדי דולרים.",
     "axis": "חזית איראן - צבא ארה\"ב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T05:47:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T05:47:25+00:00",
     "last_update_at": "2026-11-20T07:36:09+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ורשימת האתרים המלאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-675",
       "published_at": "2026-11-20T07:36:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/report-26-us-sites-across-middle-east-damaged-iranian-attacks",
       "published_at": "2026-11-20T05:47:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11200741-03",
     "title": "הערכת עלות הלחימה האמריקאית מול איראן",
     "summary": "נציג הפנטגון מסר למחוקקים כי עלות המלחמה עבור ארה\"ב מול איראן מוערכת בכ-48.3 מיליארד דולר, לא כולל תיקון מתקנים שניזוקו מאז פברואר.",
     "axis": "ארה\"ב מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T03:21:37+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T03:21:37+00:00",
     "last_update_at": "2026-11-20T07:36:09+00:00",
     "what_is_not_verified": "עלויות התיקונים המדויקות של המתקנים שניזוקו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-675",
       "published_at": "2026-11-20T07:36:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pentagon-official-says-us-war-iran-cost-483b",
       "published_at": "2026-11-20T03:21:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11200741-04",
     "title": "הצהרת שגריר ישראל בארה\"ב על תקיפה באיראן",
     "summary": "שגריר ישראל בארה\"ב הצהיר כי ההחלטה על חידוש התקיפות באיראן תתקבל על ידי הנשיא טראמפ וישראל תתמוך בה, וציין כי כוחות ארה\"ב ישובו לבתיהם כשאיראן תובס.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T23:52:13+00:00",
     "last_update_at": "2026-11-20T07:36:09+00:00",
     "what_is_not_verified": "קיומה של החלטה מעשית לפתוח במתקפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_newsmax",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-675",
       "published_at": "2026-11-20T07:36:09+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_newsmax",
       "url": "https://en.irna.ir/news/86327245/FM-Araghchi-mocks-Israeli-envoy-over-anti-Iran-remarks",
       "published_at": "2026-11-20T07:07:48+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_newsmax",
       "url": "https://www.ynet.co.il/news/article/bjywewa0gg",
       "published_at": "2026-11-20T06:30:45+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_newsmax",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21895028",
       "published_at": "2026-11-19T23:52:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11200741-05",
     "title": "הכחשה איראנית לטענות לפיתוח נשק כימי וביולוגי",
     "summary": "דובר משרד החוץ האיראני דחה את הטענות האמריקאיות על סימנים לפיתוח נשק כימי וביולוגי בידי טהראן והגדיר אותן כדברי שקר.",
     "axis": "ארה\"ב מול איראן (נשק בלתי קונבנציונלי)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T06:57:45+00:00",
     "last_update_at": "2026-11-19T20:59:35+00:00",
     "what_is_not_verified": "אמיתות המידע המודיעיני הנטען ביחס לפיתוח נשק כימי באיראן",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_52fda428cc24aa8c",
       "url": "https://en.irna.ir/news/86327143/Baqaei-US-claim-regarding-Iran-s-development-of-chemical-and",
       "published_at": "2026-11-19T20:59:35+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_52fda428cc24aa8c",
       "url": "https://www.fdd.org/analysis/iran-may-use-chemical-weapons-why-is-washington-starving-the-opcw/",
       "published_at": "2026-11-19T17:29:09+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_52fda428cc24aa8c",
       "url": "https://t.me/lelotsenzura/95072",
       "published_at": "2026-11-19T06:57:45+00:00"
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
     "id": "IRAN-11200741-06",
     "title": "הסנאט האמריקאי דחה הגבלת סמכויות מלחמה מול איראן",
     "summary": "הסנאט של ארה\"ב דחה ברוב של 51 מול 48 הצעת החלטה שביקשה לחייב את הנשיא טראמפ לעצור את הפעולות הצבאיות נגד איראן.",
     "axis": "מדיניות ארה\"ב מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T20:47:02+00:00",
     "last_update_at": "2026-11-19T20:47:02+00:00",
     "what_is_not_verified": "נוסח ההחלטה המלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133933",
       "published_at": "2026-11-19T20:47:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11200741-07",
     "title": "שיגור טילים של החות'ים לעבר מרכז ריאד",
     "summary": "מתקפת טילים של החות'ים פגעה במגדל הגבוה ביותר בריאד והסבה נזק למטה קרן העושר הסעודית, במקביל ליירוטים שביצעה הקואליציה.",
     "axis": "שלוחות איראן מול סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T19:33:08+00:00",
     "last_update_at": "2026-11-20T07:36:09+00:00",
     "what_is_not_verified": "מספר הטילים המדויק שנורה והנזק הכולל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-675",
       "published_at": "2026-11-20T07:36:09+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-houthis-escalate-attacks-on-saudi-capital?traffic_source=rss",
       "published_at": "2026-11-19T23:58:40+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611190933",
       "published_at": "2026-11-19T19:33:08+00:00"
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
     "id": "IRAN-11200741-08",
     "title": "הסכם בעיראק בין השלטונות לגדודי חזבאללה",
     "summary": "שלטונות עיראק הגיעו להסכם עם המיליציה הפרו-איראנית גדודי חזבאללה לכניסת כוחות הממשלה לאזור מעוזה מדרום לבגדאד במטרה למנוע עימות.",
     "axis": "המיליציות הפרו-איראניות בעיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T18:05:05+00:00",
     "last_update_at": "2026-11-20T03:36:17+00:00",
     "what_is_not_verified": "מימוש ההסכם בפועל ביום שישי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611205946",
       "published_at": "2026-11-20T03:36:17+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/whats-behind-iraqs-standoff-kataib-hezbollah-militia",
       "published_at": "2026-11-19T20:03:28+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49747",
       "published_at": "2026-11-19T18:05:05+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'רף אל-סחר, עיראק",
       "lat": 32.8733,
       "lon": 44.2191
      },
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "IRAN-11200741-09",
     "title": "איומי משמרות המהפכה כלפי ערוץ איראן אינטרנשיונל",
     "summary": "דובר משמרות המהפכה חסין מוחבי הצהיר כי ערוץ הטלוויזיה איראן אינטרנשיונל נכלל ברשימת המטרות הצבאיות של הכוחות המזוינים של איראן.",
     "axis": "איראן והזירה הבינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T01:37:38+00:00",
     "last_update_at": "2026-11-20T01:37:38+00:00",
     "what_is_not_verified": "אופן מימוש האיום הצבאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611201108",
       "published_at": "2026-11-20T01:37:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11200741-10",
     "title": "היערכות איראנית לשבירת המצור הימי באמצעות מיכליות",
     "summary": "לפי פרסומים ברשתות, איראן הציבה מכליות נפט בתחנות עגינה באי ח'ארג' לשם מילוי וייצוא לסין למרות המצור הימי, תוך איום בתקיפת יעדי אנרגיה במפרץ אם יותקפו.",
     "axis": "העימות הימי והסנקציות במפרץ",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T21:13:39+00:00",
     "last_update_at": "2026-11-19T21:13:39+00:00",
     "what_is_not_verified": "יציאת המכליות בפועל והיקפן המאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49753",
       "published_at": "2026-11-19T21:13:39+00:00"
      }
     ],
     "places": [
      {
       "name": "האי ח'ארג', איראן",
       "lat": 29.2406,
       "lon": 50.3117
      }
     ]
    }
   ],
   "not_verified": [
    "טענות המודיעין בדבר פיתוח נשק כימי או ביולוגי על ידי איראן",
    "מספר מכליות הנפט המדויק המוכן להפלגה באי ח'ארג' לשבירת המצור",
    "היקף הנזק המלא והעלויות המדויקות לתיקון בסיסי ארה\"ב שניזוקו מאז פברואר",
    "קיומה של תוכנית מוסכמת למערכה משותפת בת ארבעה עד שבעה ימים בין ארה\"ב לישראל"
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להביס את התוקפנות האמריקאית ולדחות את טענות המערב בדבר נשק כימי וגרעיני",
      "לפגוע בכל גוף עוין כולל כלי תקשורת הפועלים נגדה כגון איראן אינטרנשיונל",
      "להגיב צבאית נגד מתקני אנרגיה במפרץ ובסיסים אמריקאיים אם יותקף ייצוא הנפט שלה"
     ],
     "inferred": [
      "שבירת המצור הימי והכלכלי האמריקאי בכל מחיר כדי למנוע קריסה פנימית",
      "ביסוס הרתעה באמצעות מיליציות אזוריות ופגיעה בחופש השיט במצר הורמוז"
     ],
     "forecast": [
      "המשך מיקוש ימי הטרדתי במצר הורמוז וניסיונות הברחת נפט תוך נטילת סיכון לעימות ישיר",
      "הגברת הלחץ על מדינות המפרץ באמצעות שלוחותיה כדי לאלץ אותן לדרוש מארה\"ב ריסון"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "בלימת תוכניות הגרעין והאיומים הבלתי קונבנציונליים של המשטר האיראני",
      "המשך הפעולות הצבאיות והטלת סנקציות ומצור ימי להחלשת טהראן"
     ],
     "inferred": [
      "הימנעות משקיעה במלחמה ארוכה שעלויותיה הכלכליות ממשיכות לזנק",
      "הגנה על בעלות בריתה באזור לצד שמירה על חופש התנועה הימי"
     ],
     "forecast": [
      "המשך מדיניות הלחץ הצבאי והמצור תוך בחינת תקיפות נקודתיות בהתאם לאישור הנשיא",
      "עימות פוליטי גובר בוושינגטון סביב אישור תקציבי המלחמה וסמכויות הנשיא"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "תמיכה מלאה בכל החלטה של ארה\"ב לתקוף את איראן והכרעת המשטר",
      "מיגור האיום של ציר השלוחות כולל החות'ים, חמאס וחזבאללה דרך פגיעה בראש הציר"
     ],
     "inferred": [
      "מניעת הגעה של מתקני הצבא והגרעין של איראן לחסינות תת-קרקעית",
      "רתימת ארה\"ב וקואליציה אזורית למבצע משותף קצר ואינטנסיבי"
     ],
     "forecast": [
      "הגברת הלחץ המודיעיני והמדיני על ממשל טראמפ לפעול בהקדם לפני סגירת חלון ההזדמנויות",
      "היערכות צבאית מוגברת לספיגת תגובת תגמול איראנית במקרה של תקיפה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-houthis-escalate-attacks-on-saudi-capital?traffic_source=rss",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/whats-behind-iraqs-standoff-kataib-hezbollah-militia",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/iran-may-use-chemical-weapons-why-is-washington-starving-the-opcw/",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611201108",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86327143/Baqaei-US-claim-regarding-Iran-s-development-of-chemical-and",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21895028",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-675",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133933",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49753",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95072",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjywewa0gg",
     "accessed_at": "2026-11-20T07:41:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T19:08:12+00:00",
  "changes": {
   "IRAN-11200741-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "דיווחים על פגיעת מוקשים במכליות נפט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-11200741-02": {
    "kind": "new"
   },
   "IRAN-11200741-03": {
    "kind": "new"
   },
   "IRAN-11200741-04": {
    "kind": "new"
   },
   "IRAN-11200741-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "טראמפ טוען כי איראן בוחנת פיתוח נשק כימי וביולוגי",
    "score": 1.0
   },
   "IRAN-11200741-06": {
    "kind": "new"
   },
   "IRAN-11200741-07": {
    "kind": "new"
   },
   "IRAN-11200741-08": {
    "kind": "new"
   },
   "IRAN-11200741-09": {
    "kind": "new"
   },
   "IRAN-11200741-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-20T0753__ukraine-202611200753.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-20T07:53:39+00:00",
   "window": {
    "from": "2026-11-19T07:53:39+00:00",
    "to": "2026-11-20T07:53:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611200753"
   },
   "summary": "המערכה מתאפיינת בהסלמה אווירית משמעותית מצד רוסיה נגד יעדי תשתית, גשרים בבירה קייב ורשתות אנרגיה במערב ובמרכז אוקראינה, במקביל לתקיפות עומק של כטב\"מים אוקראיניים נגד מפעלים כימיים ברוסיה. הלחימה הקרקעית נמשכת באינטנסיביות רבה בקווי המגע, בעיקר בגזרת פוקרובסק, בעוד הצדדים מציגים עמדות קשיחות ביחס להפסקות אש ומשא ומתן מדיני. הזירה הבינלאומית מלווה במתחים ביטחוניים סביב המרחב האווירי של מדינות שכנות ודיונים סביב סוגיות סחר וסנקציות אנרגיה.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "לחימה בעצימות גבוהה ביותר עם מאות היתקלויות קרביות ביממה"
    },
    {
     "name": "מרחב קייב והדנייפרו",
     "status": "מתקפות טילים וכטב\"מים כבדות נגד גשרים ותשתיות מים וחשמל"
    },
    {
     "name": "מערב אוקראינה (לבוב)",
     "status": "פגיעות טילים וכטב\"מים בתחנות רכבת, מתקני אנרגיה והפסקות חשמל"
    },
    {
     "name": "העורף הרוסי (סמולנסק)",
     "status": "תקיפות כטב\"מים אוקראיניות נגד מתקני תעשייה ביטחונית וכימית"
    },
    {
     "name": "מרחב חצי האי קרים",
     "status": "מתיחות שיא עקב תקיפות חוזרות ונזק כבד לגשר קרץ'"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11200753-01",
     "title": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב ופגיעה בגשרים",
     "summary": "רוסיה שיגרה מתקפת טילים בליסטיים וכטב\"מים על קייב שפגעה במתקני תשתית ובגשרים שעל נהר הדנייפרו, בהם גשר פודילסקו-ווסקרסנסקי שבו הופסקה התנועה, וכן גשרי דרניצקי ופיבדני.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T23:29:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T23:29:29+00:00",
     "last_update_at": "2026-11-20T07:02:22+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומספר הגשרים שהותקפו (דיווחים שונים מציינים 3 או 4 גשרים, ובין 3 ל-5 הרוגים)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/20/russian-missile-and-drone-attack-on-kyiv-kills-three-and-damages-three-dnipro-bridges-mayor-says",
       "published_at": "2026-11-20T07:02:22+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186645-three-killed-15-injured-in-russian-attack-on-kyiv.html",
       "published_at": "2026-11-20T06:00:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186643-kyivs-podilskyi-and-darnytskyi-bridges-damaged-in-russian-ballistic-attack-mayor.html",
       "published_at": "2026-11-20T05:39:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49762",
       "published_at": "2026-11-20T01:58:07+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49761",
       "published_at": "2026-11-20T01:35:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49760",
       "published_at": "2026-11-20T00:19:28+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-launches-mass-missile-attack-against-ukraine-after-putin-vows-revenge/",
       "published_at": "2026-11-19T23:41:36+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49758",
       "published_at": "2026-11-19T23:29:29+00:00"
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
     "id": "UKRAINE-11200753-02",
     "title": "תקיפות רוסיות במחוז לבוב ופגיעה בתחנת רכבת ובתשתיות אנרגיה",
     "summary": "שני בני אדם נהרגו ונפצעו נוספים בעקבות תקיפה רוסית בתחנת הרכבת סקניליב, וכן נגרם נזק למתקן אנרגיה במחוז לבוב שהוביל להפסקות חשמל.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T06:12:00+00:00",
     "last_update_at": "2026-11-20T07:07:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק מעבר לדיווחים הראשוניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063746/",
       "published_at": "2026-11-20T07:07:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063738/",
       "published_at": "2026-11-20T06:12:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לבוב, אוקראינה",
       "lat": 49.842,
       "lon": 24.0316
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-03",
     "title": "תקיפת כטב\"מים אוקראינית על מפעל דשנים וחומרי נפץ ברוסיה",
     "summary": "כטב\"מים אוקראיניים תקפו מפעל כימי בעיר דורוגובוז' במחוז סמולנסק ברוסיה, המייצר דשנים ומרכיבים לחומרי נפץ, וגרמו להתלקחות שרפה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T02:59:39+00:00",
     "last_update_at": "2026-11-20T06:56:24+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למתקני המפעל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/20/ukrainian-drones-hit-russian-fertilizer-plant-that-also-makes-components-for-explosives",
       "published_at": "2026-11-20T06:56:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drones-reportedly-strike-russian-chemical-plant/",
       "published_at": "2026-11-20T02:59:39+00:00"
      }
     ],
     "places": [
      {
       "name": "דורוגובוז', רוסיה",
       "lat": 54.9148,
       "lon": 33.2989
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-04",
     "title": "פגיעות רוסיות במחוז דניפרופטרובסק",
     "summary": "תקיפות ליליות של צבא רוסיה גרמו לפציעת חמישה בני אדם, לשרפות במבני מגורים בעיר ז'ובטי וודי, ולפגיעות במתקני תשתית ובתחנת דלק בקריבי ריה.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T06:39:00+00:00",
     "last_update_at": "2026-11-20T06:39:00+00:00",
     "what_is_not_verified": "לא מאומת האם ישנם נפגעים נוספים תחת ההריסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063741/",
       "published_at": "2026-11-20T06:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קריבי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "ז'ובטי וודי, אוקראינה",
       "lat": 48.3465,
       "lon": 33.5028
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-05",
     "title": "פגיעת כטב\"ם רוסי בבית חולים בחרקוב",
     "summary": "כטב\"ם רוסי פגע במתקן רפואי בעיר חרקוב וגרם לפציעתם של ארבעה בני אדם.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T04:25:00+00:00",
     "last_update_at": "2026-11-20T04:25:00+00:00",
     "what_is_not_verified": "מצב הפצועים ומידת הנזק למבנה בית החולים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186633-russian-drone-hits-hospital-in-kharkiv-four-people-injured.html",
       "published_at": "2026-11-20T04:25:00+00:00"
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
     "id": "UKRAINE-11200753-06",
     "title": "חשד להפרת המרחב האווירי של פולין במהלך מתקפה על אוקראינה",
     "summary": "צבא פולין פתח בחקירה בעקבות חשד לעצמים בלתי מזוהים שחדרו למרחב האווירי הפולני בזמן מתקפה רוסית נרחבת על אוקראינה, והופעלו התרעות במחוזות הגבול.",
     "axis": "המרחב האווירי האזורי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T06:39:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T06:39:00+00:00",
     "last_update_at": "2026-11-20T06:39:00+00:00",
     "what_is_not_verified": "האם אכן הייתה חדירה בפועל של עצמים לשטח פולין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063740/",
       "published_at": "2026-11-20T06:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ז'שוב, פולין",
       "lat": 50.0375,
       "lon": 22.0047
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-07",
     "title": "קרבות עזים בקווי החזית בדגש על גזרת פוקרובסק",
     "summary": "נרשמו 278 היתקלויות קרביות לאורך קו החזית ביממה אחת, כאשר העימותים הרבים ביותר התרחשו בגזרת פוקרובסק.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T07:33:00+00:00",
     "last_update_at": "2026-11-20T07:33:00+00:00",
     "what_is_not_verified": "שינויים טריטוריאליים ספציפיים בעקבות העימותים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186670-war-update-278-clashes-on-front-line-over-past-day-pokrovsk-sector-hottest.html",
       "published_at": "2026-11-20T07:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פוקרובסק, אוקראינה",
       "lat": 48.2771,
       "lon": 37.1772
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-08",
     "title": "הצעת חוק רוסית לפטור מחובות למתגייסים למלחמה",
     "summary": "ממשלת רוסיה הגישה לדומה הצעת חוק המאפשרת לאזרחים בהליכי פשיטת רגל להתגייס לצבא ולשמור על נכסים בשווי של עד 10 מיליון רובל על חשבון הנושים.",
     "axis": "מדיניות הפנים והגיוס ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T07:35:43+00:00",
     "last_update_at": "2026-11-20T07:35:43+00:00",
     "what_is_not_verified": "מועד אישור החוק הסופי וכניסתו לתוקף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/cards/russia-wants-people-in-bankruptcy-to-sign-up-to-fight-in-ukraine-under-a-new-bill-recruits-could-keep-their-property-and-creditors-would-take-the-loss",
       "published_at": "2026-11-20T07:35:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11200753-09",
     "title": "אזהרת פוטין לתגובה על תקיפת גשר קרים וסירוב למו\"מ",
     "summary": "נשיא רוסיה הצהיר כי ארצו תגיב באופן מכאיב על תקיפת מעבר הרכב ומסילת הרכבת בגשר קרים, והודיע על סירוב למשא ומתן עם קייב.",
     "axis": "משא ומתן ומדיניות ביטחון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T19:07:36+00:00",
     "last_update_at": "2026-11-19T20:19:11+00:00",
     "what_is_not_verified": "אופי ומועד התגובה הצבאית המדויקת עליה איים פוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21894437",
       "published_at": "2026-11-19T20:19:11+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/putin-vows-painful-response-to-ukraine-bombing-of-kerch-bridge",
       "published_at": "2026-11-19T19:07:36+00:00"
      }
     ],
     "places": [
      {
       "name": "קרץ', קרים",
       "lat": 45.3563,
       "lon": 36.4671
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-10",
     "title": "הגעת מכליות סולר רוסי לברזיל במקום לארה\"ב",
     "summary": "ארבע מכליות שהובילו סולר רוסי במסגרת הבנות בין ארצות הברית לרוסיה הגיעו לברזיל מבלי לעגון בנמלים אמריקאיים.",
     "axis": "סנקציות ואנרגיה בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T07:36:57+00:00",
     "last_update_at": "2026-11-20T07:36:57+00:00",
     "what_is_not_verified": "הסיבה המדויקת לשינוי יעד המכליות לברזיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_the_maritime_executive",
       "url": "https://meduza.io/en/news/2026/11/20/russian-diesel-tankers-sent-to-the-u-s-under-trump-putin-deal-arrive-in-brazil",
       "published_at": "2026-11-20T07:36:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11200753-11",
     "title": "קריאת מנהיגי אירופה להפסקת אש אנרגטית בחורף",
     "summary": "מנהיגי גרמניה, צרפת, בריטניה ואוקראינה קראו לרוסיה להסכים להפסקת אש בחורף על תשתיות אנרגיה ולאפשר ייצוא מזון בטוח בים השחור.",
     "axis": "יוזמות מדיניות והפסקת אש",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T21:05:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T21:05:00+00:00",
     "last_update_at": "2026-11-19T21:05:00+00:00",
     "what_is_not_verified": "עמדת רוסיה בפועל ביחס להצעה הספציפית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/coalition-of-the-willing-calls-on-russia-to-accept-winter-energy-truce/",
       "published_at": "2026-11-19T21:05:00+00:00"
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
    "טענת קושנר כי רוסיה חשה בנוח עם ערבויות הגנה דמויות נאט\"ו לאוקראינה",
    "מספר הנפגעים המדויק ומספר הגשרים שנפגעו בקייב (דיווחים על 3 או 4 גשרים, ובין 3 ל-5 הרוגים)",
    "דיווחים על חדירת עצמים בלתי מזוהים למרחב האווירי של פולין",
    "הערכות לגבי כמות אבדות כוח האדם הכוללת של צבא רוסיה"
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
     "value": 1.0992,
     "unit": "USD",
     "change_pct": 0.22,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "תגובה מכאיבה ופגיעה קשה בעקבות הפגיעה בגשר קרים",
      "סירוב לקיים משא ומתן עם הנהגת אוקראינה לאחר הפגיעה בגשר",
      "דרישה מסבא\"א לציין בבירור את האחראי לתקיפות על תחנת הכוח הגרעינית בזפוריז'יה"
     ],
     "inferred": [
      "פגיעה ברציפות התחבורתית והתשתיתית של אוקראינה על ידי הרס גשרים מרכזיים",
      "הגברת הלחץ על האוכלוסייה באמצעות פגיעה במערכות חשמל ומים לקראת החורף",
      "שימוש בתמריצים כלכליים לגיוס חיילים חדשים להתמודדות עם מצוקת כוח אדם"
     ],
     "forecast": [
      "המשך מיקוד התקיפות האוויריות בגשרי נהר הדנייפרו ובתשתיות אנרגיה",
      "החרפת התגובות הצבאיות בתגובה לכל פגיעה נוספת בנכסים אסטרטגיים בחצי האי קרים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "דרישה ממעצמות העולם לעצור כל מסחר עם רוסיה כדי לסיים את המלחמה",
      "קריאה יחד עם בעלות ברית אירופיות להפסקת אש אנרגטית בחורף ולנתיבי מזון בטוחים בים השחור"
     ],
     "inferred": [
      "פגיעה בשרשראות האספקה של צבא רוסיה באמצעות תקיפת תעשיית חומרי הנפץ והדשנים",
      "שיבוש צירי תנועה רוסיים מרכזיים בחצי האי קרים לערעור העורף הלוגיסטי",
      "הגנה מרבית על תשתיות חיוניות בבירה ובמערב המדינה מול תקיפות בליסטיות"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה בעומק שטח רוסיה נגד מפעלי תעשייה ביטחונית ואנרגיה",
      "מאמץ מוגבר לייצב את אספקת החשמל והתנועה בערים הגדולות תחת גלי תקיפה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/19/putin-vows-painful-response-to-ukraine-bombing-of-kerch-bridge",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21894437",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/coalition-of-the-willing-calls-on-russia-to-accept-winter-energy-truce/",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/20/russian-diesel-tankers-sent-to-the-u-s-under-trump-putin-deal-arrive-in-brazil",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063740/",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49758",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4186670-war-update-278-clashes-on-front-line-over-past-day-pokrovsk-sector-hottest.html",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T19:09:54+00:00",
  "changes": {
   "UKRAINE-11200753-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים רוסית על קייב ופגיעה בסביבת שגרירויות זרות",
    "score": 1.0
   },
   "UKRAINE-11200753-02": {
    "kind": "new"
   },
   "UKRAINE-11200753-03": {
    "kind": "new"
   },
   "UKRAINE-11200753-04": {
    "kind": "new"
   },
   "UKRAINE-11200753-05": {
    "kind": "new"
   },
   "UKRAINE-11200753-06": {
    "kind": "possible",
    "prev": "מעצר אזרח רוסי בארצות הברית בחשד לריגול נגד חברת ביטחון המסייעת לאוקראינה",
    "score": 0.467
   },
   "UKRAINE-11200753-07": {
    "kind": "new"
   },
   "UKRAINE-11200753-08": {
    "kind": "new"
   },
   "UKRAINE-11200753-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרת פוטין על תגובה כואבת והשעיית יוזמות להפסקת אש",
    "score": 1.0
   },
   "UKRAINE-11200753-10": {
    "kind": "new"
   },
   "UKRAINE-11200753-11": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-20T0813__north-202611200813.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-20T08:13:44+00:00",
   "window": {
    "from": "2026-11-19T08:13:44+00:00",
    "to": "2026-11-20T08:13:44+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611200813"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית ישראלית עצימה הכוללת הפצצות בבקאע וסיכול העברות נשק מגבול סוריה, לצד הפגזות ותקיפות בדרום לבנון ותנועת כוחות קרקעיים לעבר קוניטרה. במקביל, הממשל הסורי החדש מרחיב את אכיפת הסדר הפנימי ומעמיד לדין בכירים לשעבר, בעוד טורקיה מחזקת את השפעתה המדינית והביטחונית בסוריה ובלבנון.",
   "fronts": [
    {
     "name": "דרום לבנון והבקאע מול ישראל",
     "status": "לחימה בעצימות מתמשכת, תקיפות אוויריות והפגזות ישראליות נגד מטרות חיזבאללה ותשתיות הברחה"
    },
    {
     "name": "גבול ישראל - סוריה (רמת הגולן וקוניטרה)",
     "status": "מתיחות ופעילות כוחות קרקעיים ישראליים מעבר לקו במרחב הכפרי"
    },
    {
     "name": "השפעת טורקיה בלבנון ובסוריה",
     "status": "התרחבות מעורבות דיפלומטית, הסכמי שיתוף פעולה צבאי ותמיכה בהרחבת ריבונות הממשל בסוריה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11200813-01",
     "title": "תקיפות אוויריות של צה\"ל בכפר תבנית בדרום לבנון",
     "summary": "מטוסי קרב ישראליים תקפו יעדים בכפר תבנית שבדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T08:02:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T08:02:56+00:00",
     "last_update_at": "2026-11-20T08:02:56+00:00",
     "what_is_not_verified": "אין אימות עצמאי לזהות המטרות או לנזק שנגרם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133938",
       "published_at": "2026-11-20T08:02:56+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-11200813-02",
     "title": "ירי ארטילרי ואש מקלעים ישראלית בדרום לבנון",
     "summary": "הפגזות ארטילריות כוונו למספר אזורים בדרום לבנון כולל ואדי אל-סלוקי, ואדי אל-חג'יר, ואדי זיבקין, פאתי תולין, אל-מנסורי ומיפדון, לצד ירי מקלעים לעבר אל-קנטרה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T07:40:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T07:40:32+00:00",
     "last_update_at": "2026-11-20T07:40:32+00:00",
     "what_is_not_verified": "היקף הפגיעות והנפגעים המדויק אינו ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/152992/",
       "published_at": "2026-11-20T07:40:32+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-11200813-03",
     "title": "תקיפת חיל האוויר הישראלי במרחב ג'נתא בבקאע",
     "summary": "חיל האוויר הישראלי תקף אתר ששימש בעבר לייצור טילים ואחסון אמל\"ח של חיזבאללה בג'נתא כדי למנוע את שיקומו לאחר הגעת מחבלים לאתר.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T15:03:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T15:03:34+00:00",
     "last_update_at": "2026-11-19T20:03:38+00:00",
     "what_is_not_verified": "אין אימות בלתי תלוי לגבי אופי המבנה שהותקף והאם הכיל אמל\"ח פעיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-hit-eastern-lebanon-target-homes-buildings-in-south/4131515",
       "published_at": "2026-11-19T20:03:38+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133922",
       "published_at": "2026-11-19T18:00:39+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25660",
       "published_at": "2026-11-19T17:59:48+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968784/israeli-army-claims-it-struck-former-hezbollah-missile-facility-in-leb/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968784",
       "published_at": "2026-11-19T15:03:34+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      },
      {
       "name": "א-נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      }
     ]
    },
    {
     "id": "NORTH-11200813-04",
     "title": "תקיפת משלוח אמל\"ח שהועבר מסוריה ללבנון",
     "summary": "חיל האוויר הישראלי תקף משלוח של אמצעי לחימה במרחב ג'נתא בגבול סוריה-לבנון, שיועד עבור ארגון חיזבאללה.",
     "axis": "סוריה - לבנון - ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T17:30:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:30:18+00:00",
     "last_update_at": "2026-11-19T17:30:18+00:00",
     "what_is_not_verified": "פרטי המשלוח המדויקים ותוצאות הסיכול לא אומתו עצמאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133919",
       "published_at": "2026-11-19T17:30:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      }
     ]
    },
    {
     "id": "NORTH-11200813-05",
     "title": "התקדמות כוחות ישראליים לעיירה אל-רפיד בקוניטרה",
     "summary": "כוחות ישראליים הכוללים תשעה כלי רכב צבאיים התקדמו לעבר העיירה אל-רפיד באזור הכפרי של קוניטרה בסוריה.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T22:08:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T22:08:30+00:00",
     "last_update_at": "2026-11-19T22:08:30+00:00",
     "what_is_not_verified": "הדיווח נסמך על מקורות סוריים בלבד ללא אישור ישראלי או גורם רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/152942/",
       "published_at": "2026-11-19T22:08:30+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-רפיד, סוריה",
       "lat": 32.9559,
       "lon": 35.9009
      }
     ]
    },
    {
     "id": "NORTH-11200813-06",
     "title": "הצהרת צבא לבנון ליום העצמאות על ריבונות ונשק המדינה",
     "summary": "צבא לבנון הדגיש את מחויבותו להשבת הריבונות על כלל שטח המדינה והשארת הנשק בשליטת המדינה בלבד, לצד המשך פריסתו בדרום המדינה חרף פעולות ישראל.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T14:11:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T14:11:31+00:00",
     "last_update_at": "2026-11-19T14:11:31+00:00",
     "what_is_not_verified": "מידת היכולת של צבא לבנון לאכוף פירוק נשק של ארגונים במדינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968780/lebanese-army-on-independence-day-restoring-sovereignty-and-placing-we/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968780",
       "published_at": "2026-11-19T14:11:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ירזה, לבנון",
       "lat": 33.8309,
       "lon": 35.5551
      }
     ]
    },
    {
     "id": "NORTH-11200813-07",
     "title": "ביקור בילאל ארדואן בלבנון והידוק הקשרים עם טורקיה",
     "summary": "בילאל ארדואן ביקר בביירות ובטריפולי ונפגש עם בכירים בהנהגה הלבנונית, במקביל לאישור הסכם שיתוף פעולה צבאי בין לבנון לטורקיה בשווי מאה מיליון לירות טורקיות.",
     "axis": "טורקיה - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T19:36:30+00:00",
     "last_update_at": "2026-11-19T19:36:30+00:00",
     "what_is_not_verified": "המניעים הפוליטיים המלאים והמשמעות המבצעית של ההסכם הצבאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/analysis/how-bilal-erdogans-visit-signals-turkeys-long-game-lebanon",
       "published_at": "2026-11-19T19:36:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "טריפולי, לבנון",
       "lat": 34.4374,
       "lon": 35.8349
      }
     ]
    },
    {
     "id": "NORTH-11200813-08",
     "title": "מעצר גנרל לשעבר ממשטר אסד בסוריה",
     "summary": "כוחות הביטחון של השלטונות החדשים בסוריה עצרו את רואד עלי זידאן, קצין לשעבר במשטר אסד, באשמת תכנון מארב באלעוטייבה בשנת 2014 שבו נהרגו 175 חמושים אסלאמיסטים.",
     "axis": "סוריה - פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T21:41:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T21:41:17+00:00",
     "last_update_at": "2026-11-19T22:59:02+00:00",
     "what_is_not_verified": "פרטי החקירה והראיות המדויקות נגד העצור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syrian-authorities-arrest-ex-general-over-2014-massacre",
       "published_at": "2026-11-19T22:59:02+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-arrests-former-regime-officer-accused-of-orchestrating-2014-massacre-near-damascus/4131609",
       "published_at": "2026-11-19T21:41:17+00:00"
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
     "id": "NORTH-11200813-09",
     "title": "טורקיה מביעה תמיכה באיחוד סוריה ובשילוב ה-YPG",
     "summary": "שר החוץ הטורקי הקאן פידאן הצהיר כי אנקרה תומכת במאמצי הממשלה הסורית להרחבת הריבונות והשלמת שילובו של ארגון ה-YPG.",
     "axis": "טורקיה - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T09:52:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T09:52:00+00:00",
     "last_update_at": "2026-11-19T09:52:00+00:00",
     "what_is_not_verified": "פרטי מתווה השילוב של הלוחמים הכורדים במוסדות סוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/ankara-backs-stable-unified-syria-ypg-integration-fm-fidan/news",
       "published_at": "2026-11-19T09:52:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נכונות הדיווח ממקורות סוריים אודות כניסת תשעה כלי רכב צבאיים של צה\"ל לאל-רפיד בקוניטרה",
    "האם האתר שהותקף בג'נתא הכיל אמל\"ח פעיל בזמן התקיפה מעבר לתשתיות כניסה",
    "מידת ההתקדמות המעשית בשילוב כוחות YPG בתוך המנגנונים הסוריים בהתאם להצהרת טורקיה"
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת שיקום יכולות חיזבאללה והסרת איומים על אזרחי ישראל וכוחותיה",
      "סיכול העברות ומשלוחי אמצעי לחימה מסוריה ללבנון"
     ],
     "inferred": [
      "ביסוס אחיזה ונוכחות בשטחי חיץ ('הקו הצהוב') בלבנון ובסוריה",
      "פגיעה מונעת ומתמשכת במערכי ייצור והתעצמות ללא תלות בהסדרה מדינית"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות בבקאע ובגבול סוריה במידה ויזוהו נסיונות שיקום והברחה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "מיקוד בהישרדות, שיקום תשתיות וארגון מחדש במימון חיצוני תוך הימנעות מהסלמה יזומה מיידית",
      "חידוש ערוצי הברחת אמל\"ח מגבול סוריה לתשתיות הייצור בבקאע"
     ],
     "forecast": [
      "המשך ניסיונות התבססות מחדש במתקנים ישנים תחת לחץ צבאי ישראלי רציף"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "תמיכה בסוריה יציבה ומאוחדת והחלת ריבונות המדינה על כלל השטח",
      "שילוב ארגון ה-YPG במסגרת המדינה הסורית"
     ],
     "inferred": [
      "תקיעת יתד והעמקת ההשפעה הצבאית והמוסדית בלבנון בעקבות השינויים במפה האזורית",
      "דחיקת שחקנים אזוריים מתחרים ויצירת תלות ביטחונית וכלכלית באנקרה"
     ],
     "forecast": [
      "המשך קידום מגעים ביטחוניים ופרויקטים אזרחיים בלבנון ובסוריה"
     ]
    },
    {
     "actor": "השלטון החדש בסוריה",
     "declared": [
      "מיצוי הדין עם בכירים לשעבר במשטר אסד המואשמים בביצוע פשעים ומעשי טבח",
      "החזרת עקורים באמצעות שיקום תשתיות, פתיחת צירים ופינוי הריסות"
     ],
     "inferred": [
      "חיזוק הלגיטימציה השלטונית הפנימית על ידי העמדה לדין של אנשי המשטר הקודם",
      "ביסוס הריבונות והסמכות המרכזית בתיאום מדיני עם טורקיה"
     ],
     "forecast": [
      "מעצרים ומשפטים נוספים של אנשי ביטחון לשעבר לצד פעולות שיקום הדרגתיות בערים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/152942/",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-arrests-former-regime-officer-accused-of-orchestrating-2014-massacre-near-damascus/4131609",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/ankara-backs-stable-unified-syria-ypg-integration-fm-fidan/news",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968780/lebanese-army-on-independence-day-restoring-sovereignty-and-placing-we/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968780",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syrian-authorities-arrest-ex-general-over-2014-massacre",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133919",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25660",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T19:19:38+00:00",
  "changes": {
   "NORTH-11200813-01": {
    "kind": "new"
   },
   "NORTH-11200813-02": {
    "kind": "new"
   },
   "NORTH-11200813-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפת צה\"ל נגד אתר לייצור ואחסון אמצעי לחימה של חזבאללה בג'נתא",
    "score": 1.0
   },
   "NORTH-11200813-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת צה\"ל לסיכול משלוח אמצעי לחימה מסוריה ללבנון",
    "score": 1.0
   },
   "NORTH-11200813-05": {
    "kind": "new"
   },
   "NORTH-11200813-06": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הצהרת צבא לבנון על עדיפות פירוז הנשק וביסוס הריבונות",
    "score": 1.0
   },
   "NORTH-11200813-07": {
    "kind": "new"
   },
   "NORTH-11200813-08": {
    "kind": "possible",
    "prev": "מינויים כלכליים חדשים של נשיא סוריה",
    "score": 0.633
   },
   "NORTH-11200813-09": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הצהרת שר החוץ הטורקי על תמיכה באחדות סוריה ושילוב כוחות כורדיים",
    "score": 1.0
   }
  }
 }
};
