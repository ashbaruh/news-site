/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-20T1425__yemen-202609201425.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-20T14:25:13+00:00",
   "window": {
    "from": "2026-09-19T14:25:13+00:00",
    "to": "2026-09-20T14:25:13+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202609201425"
   },
   "summary": "העימות בין החות'ים לסעודיה הוחרף משמעותית עם שיגור טילי שיוט, טילים בליסטיים וכטב\"מים לעבר ריאד וערי מפתח נוספות בממלכה. במקביל, כוחות החות'ים מנהלים מתקפה קרקעית וימית בתימן, במסגרתה השתלטו על שטחים במזרח המדינה, על רצועת החוף ועל אי אסטרטגי בים האדום מול כוחות הממשלה הנתמכים בידי ריאד. מנגד, ארצות הברית נמנעת מהתערבות צבאית ישירה חרף בקשות סעודיות, בעוד טורקיה מאותתת על נכונות להעניק סיוע הגנתי לריאד.",
   "fronts": [
    {
     "name": "חזית תימן - ערב הסעודית",
     "status": "הסלמה חריפה הכוללת ירי טילים וכטב\"מים לעבר ריאד, ינבוע וערים נוספות"
    },
    {
     "name": "חזית פנים-תימן",
     "status": "מתקפת בזק קרקעית של החות'ים מזרחה והשתלטות על שטחים מידי כוחות הממשלה"
    },
    {
     "name": "חזית הים האדום ובאב אל-מנדב",
     "status": "אחיזה חות'ית ברצועת החוף ובאי אסטרטגי, תוך איום על נתיבי שיט ומצור ימי שהוכרז ביולי"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09201425-01",
     "title": "מתקפת טילים וכטב\"מים חות'ית לעבר ריאד ואתרים בסעודיה",
     "summary": "החות'ים שיגרו טילים בליסטיים, טילי שיוט וכטב\"מים לעבר ריאד, ינבוע, ביש, טאיף ופראסאן. הקואליציה הסעודית הודיעה על יירוט טיל בליסטי מעל ריאד וסיכול תקיפות נוספות, בעוד עשן ואש נצפו באזור נמל התעופה בבירה.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T12:52:05+00:00",
     "last_update_at": "2026-09-20T14:07:42+00:00",
     "what_is_not_verified": "האם מאגר דלק ספציפי או שדה התעופה בריאד נפגעו ישירות, או שמדובר בנפילת שברי יירוט ועשן בסמוך.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/qatar-condemns-houthi-attacks-riyadh-and-civilian-infrastructure-yemen",
       "published_at": "2026-09-20T14:07:42+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.middleeasteye.net/news/us-and-saudi-arabia-lack-plan-houthi-strikes-expose-riyadhs-vulnerability",
       "published_at": "2026-09-20T12:09:31+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.france24.com/en/yemen-s-houthis-strike-saudi-capital-riyadh-for-the-first-time",
       "published_at": "2026-09-20T09:38:42+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.theguardian.com/world/2026/sep/19/saudi-arabia-riyadh-airport",
       "published_at": "2026-09-20T00:21:04+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.bbc.co.uk/news/articles/cwly5d9v7r43o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-19T23:49:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.newarab.com/news/saudi-arabia-confirms-yemens-houthi-rebels-tried-attack-its-capital-ballistic-missile",
       "published_at": "2026-09-19T22:04:36+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.sabanew.net/viewstory/152621",
       "published_at": "2026-09-19T19:45:18+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://www.france24.com/en/middle-east/20260919-smoke-flames-seen-near-riyadh-airport-major-flight-disruptions-reported",
       "published_at": "2026-09-19T12:53:19+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_eecc6721a186025c",
       "url": "https://t.me/alexmehacarmel/47829",
       "published_at": "2026-09-19T12:52:05+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      },
      {
       "name": "טאיף, סעודיה",
       "lat": 21.2703,
       "lon": 40.4158
      }
     ]
    },
    {
     "id": "YEMEN-09201425-02",
     "title": "התקדמות קרקעית של החות'ים במזרח תימן והשתלטות על שטחים ואי בים האדום",
     "summary": "החות'ים פתחו במתקפת בזק שבה השתלטו על שטחים נרחבים בתימן, התקדמו מזרחה מול כוחות הממשלה הנתמכים בידי סעודיה, והשתלטו על אי בעל חשיבות אסטרטגית בים האדום ועל אזורי חוף.",
     "axis": "פנים תימן / הים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T15:16:03+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T15:16:03+00:00",
     "last_update_at": "2026-09-20T12:24:19+00:00",
     "what_is_not_verified": "שמו המדויק של האי שנתפס בים האדום ומספר הנפגעים המדויק בכלל הקרבות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthi-attacks-and-no-western-support-what-are-saudi-arabia-s-options",
       "published_at": "2026-09-20T12:24:19+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/why-doesn-t-the-us-intervene-to-defend-saudi-arabia-against-the-houthis",
       "published_at": "2026-09-20T12:20:38+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/us-and-saudi-arabia-lack-plan-houthi-strikes-expose-riyadhs-vulnerability",
       "published_at": "2026-09-20T12:09:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/cia-chief-meets-egypts-sisi-cairo-amid-ongoing-regional-wars",
       "published_at": "2026-09-20T11:44:11+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/yemen-s-houthis-strike-saudi-capital-riyadh-for-the-first-time",
       "published_at": "2026-09-20T09:38:42+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/black-smoke-seen-near-riyadh-amid-air-raid-alerts-in-saudi-arabia",
       "published_at": "2026-09-19T15:16:03+00:00"
      }
     ],
     "places": [
      {
       "name": "הים האדום, תימן",
       "lat": 12.783,
       "lon": 45.0315
      },
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      }
     ]
    },
    {
     "id": "YEMEN-09201425-03",
     "title": "ארצות הברית מפרסמת התרעות ביטחוניות נרחבות במזרח התיכון",
     "summary": "מחלקת המדינה ושגרירויות ארה\"ב פרסמו שורת אזהרות מסע והתרעות ביטחוניות לאזרחים במספר מדינות באזור מחשש להסלמה מהירה בעקבות חידוש הלחימה והמתקפות בין החות'ים לסעודיה.",
     "axis": "הזירה האזורית / ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T05:12:44+00:00",
     "last_update_at": "2026-09-20T12:30:25+00:00",
     "what_is_not_verified": "האם קיצור שהותו של הנשיא טראמפ בקמפ דיוויד נבע ישירות מההסלמה הזו או מתנאי מזג אוויר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/us-warns-rapid-escalation-mideast-war",
       "published_at": "2026-09-20T12:30:25+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/cia-chief-meets-egypts-sisi-cairo-amid-ongoing-regional-wars",
       "published_at": "2026-09-20T11:44:11+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hjq46gpygg",
       "published_at": "2026-09-20T06:46:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-cuts-short-weekend-camp-david-returns-white-house",
       "published_at": "2026-09-20T05:22:39+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130511",
       "published_at": "2026-09-20T05:12:44+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "YEMEN-09201425-04",
     "title": "טורקיה מביעה נכונות לספק מענה לצרכים צבאיים של סעודיה",
     "summary": "שר החוץ הטורקי הקאן פידאן הצהיר כי ארצו מוכנה לסייע בריסון האיומים ולהיענות לצרכים ביטחוניים וטכניים של ריאד על רקע מתקפות החות'ים, במסגרת הסכם הגנה משותף שכולל גם את פקיסטן.",
     "axis": "סעודיה - טורקיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T19:46:32+00:00",
     "last_update_at": "2026-09-20T10:23:33+00:00",
     "what_is_not_verified": "האם הועברו בקשות רשמיות ספציפיות מצד סעודיה לאספקת נשק או התערבות צבאית טורקית בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/20/turkish-fm-says-ready-to-meet-saudi-defence-needs-what-does-that-mean?traffic_source=rss",
       "published_at": "2026-09-20T10:23:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/turkey-says-it-could-help-meet-saudi-military-needs-under-defence-pact",
       "published_at": "2026-09-19T20:46:58+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/turkey-says-it-could-help-meet-saudi-military-needs-under-defence-pact",
       "published_at": "2026-09-19T19:46:32+00:00"
      }
     ],
     "places": [
      {
       "name": "אנקרה, טורקיה",
       "lat": 39.9208,
       "lon": 32.854
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-09201425-05",
     "title": "קטר וממשלת תימן מגנות את תקיפות החות'ים על סעודיה",
     "summary": "משרד החוץ של קטר וממשלת תימן פרסמו גינויים תקיפים לשיגורי הטילים לעבר ריאד וערים נוספות בסעודיה, והגדירו אותם כהפרה בוטה של הריבונות הסעודית ושל המשפט הבינלאומי תוך הבעת תמיכה בריאד.",
     "axis": "דיפלומטי / תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T22:57:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T22:57:29+00:00",
     "last_update_at": "2026-09-20T14:07:42+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_8a52cb8737eb3268",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/qatar-condemns-houthi-attacks-riyadh-and-civilian-infrastructure-yemen",
       "published_at": "2026-09-20T14:07:42+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7a42df684671d3a3",
       "url": "https://www.sabanew.net/viewstory/152622",
       "published_at": "2026-09-19T22:57:29+00:00"
      }
     ],
     "places": [
      {
       "name": "דוחה, קטר",
       "lat": 25.2856,
       "lon": 51.5264
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-09201425-06",
     "title": "הצהרת איום של חבר הלשכה הפוליטית של החות'ים",
     "summary": "בכיר החות'ים חאזם אל-אסד התייחס לתקיפה בריאד, טען כי סעודיה מחמירה את מעשיה נגד העם התימני, ואיים כי הבאות יהיו גדולות יותר.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T14:21:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T14:21:41+00:00",
     "last_update_at": "2026-09-19T14:25:13+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47831",
       "published_at": "2026-09-19T14:21:41+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    }
   ],
   "not_verified": [
    "מידת הנזק המדויקת בשדה התעופה הבינלאומי בריאד והאם מאגר דלק ספציפי הושמד.",
    "הסיבה המדויקת והרשמית לחזרתו המוקדמת של הנשיא טראמפ מקמפ דיוויד לבית הלבן.",
    "טענת החות'ים בדבר שריפות ענק במתקני חברת ארמקו בעיר ינבוע.",
    "שמו ומיקומו המדויק של האי האסטרטגי בים האדום שעליו השתלטו החות'ים לפי דיווחי סי-אן-אן."
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
     "value": 3.0377,
     "unit": "ILS",
     "change_pct": 0.15,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת החות'ים (אנצאר אללה)",
     "declared": [
      "פגיעה באתרים רגישים ובמתקני אנרגיה בסעודיה בתגובה למצור ולתוקפנות נגד העם התימני.",
      "אכיפת מצור ימי נגד סעודיה שהוכרז בחודש יולי."
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי על סעודיה כדי לכפות עליה ויתורים ולהרתיעה מהתערבות בתימן.",
      "ביסוס שליטה מוחלטת בנתיבי השיט בבאב אל-מנדב ובים האדום כקלף מיקוח אזורי."
     ],
     "forecast": [
      "המשך ניסיונות שיגור של טילים וכטב\"מים לעומק שטח סעודיה.",
      "הגברת האיומים על תנועת כלי שיט בים האדום וניסיונות להרחיב את השליטה בחופי תימן."
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "הגנה על ריבונות הממלכה, ביטחונה ונכסיה האזרחיים והכלכליים.",
      "סיכול מתקפות טילים וכטב\"מים ויירוטם."
     ],
     "inferred": [
      "בלימת ההתקדמות של החות'ים בתימן ומניעת קריסת כוחות הממשלה הנתמכים על ידה.",
      "גיוס תמיכה צבאית וטכנולוגית מבעלות ברית דוגמת ארה\"ב וטורקיה ללא היגררות למערכה יבשתית רחבה."
     ],
     "forecast": [
      "הוצאה לפועל של תקיפות תגובה משמעותיות נגד מטרות חות'יות בתימן.",
      "הידוק שיתוף הפעולה הביטחוני עם טורקיה במסגרת ההסכם המשולש עקב היעדר מעורבות אמריקאית ישירה."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "אזהרה מפני הסלמה מהירה באזור והגנה על אזרחים אמריקאים באמצעות התרעות מסע.",
      "חיזוק יכולות ההרתעה הסעודיות באמצעות עסקאות נשק ואספקת מודיעין."
     ],
     "inferred": [
      "הימנעות ממעורבות צבאית ישירה מחודשת ומתקיפות בתימן חרף הפצרות מצד ריאד.",
      "שמירה על נתיבי השיט הבינלאומיים ומחירי הנפט ללא כניסה לעימות כולל."
     ],
     "forecast": [
      "המשך אספקת מודיעין וסיוע באמצעי הגנה לסעודיה לצד הימנעות מפעולה התקפית יזומה בתימן."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/20/turkish-fm-says-ready-to-meet-saudi-defence-needs-what-does-that-mean?traffic_source=rss",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/turkey-says-it-could-help-meet-saudi-military-needs-under-defence-pact",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwly5d9v7r43o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/black-smoke-seen-near-riyadh-amid-air-raid-alerts-in-saudi-arabia",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/19/saudi-arabia-riyadh-airport",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/qatar-condemns-houthi-attacks-riyadh-and-civilian-infrastructure-yemen",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/turkey-says-it-could-help-meet-saudi-military-needs-under-defence-pact",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/152622",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130511",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47831",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hjq46gpygg",
     "accessed_at": "2026-09-20T14:25:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-19T23:46:36+00:00",
  "changes": {
   "YEMEN-09201425-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "טענת החות'ים לתקיפת אתרים בריאד ובינבוע",
    "score": 1.0
   },
   "YEMEN-09201425-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "קרבות עזים בדרום תימן והרוגים",
    "score": 1.0
   },
   "YEMEN-09201425-03": {
    "kind": "new"
   },
   "YEMEN-09201425-04": {
    "kind": "new"
   },
   "YEMEN-09201425-05": {
    "kind": "new"
   },
   "YEMEN-09201425-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-21T0240__iran-202609210240.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-21T02:40:30+00:00",
   "window": {
    "from": "2026-09-20T02:40:30+00:00",
    "to": "2026-09-21T02:40:30+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202609210240"
   },
   "summary": "המתיחות הצבאית בין ארצות הברית וישראל לבין איראן מחריפה ומלווה באיומים הדדיים על הרחבת התקיפות ופגיעה באינטרסים אזוריים. במקביל לתקריות ביטחוניות כגון יירוט כטב\"ם ביון וצמצום תנועת הספנות במצר הורמוז, קטר מנסה לקדם מאמצי תיווך לחידוש המשא ומתן. בזירה הדיפלומטית נרשמת היערכות לקראת עצרת האו\"ם בניו יורק לצד חיכוך דיפלומטי בין איראן לצרפת.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "מתיחות ביטחונית גבוהה, צמצום תנועת שיט ויירוט כטב\"ם ביון אמריקאי"
    },
    {
     "name": "הזירה המדינית והבין-לאומית",
     "status": "מאמצי תיווך קטריים מול איומים אמריקאיים ופעילות בעצרת האו\"ם"
    },
    {
     "name": "החזית הכלכלית והפנימית באיראן",
     "status": "לחץ סנקציות כבד, מחסור בחומרי גלם ופגיעה בתוכניות הזנה"
    }
   ],
   "events": [
    {
     "id": "IRAN-09210240-01",
     "title": "ירידה חדה בתנועת כלי שיט במצר הורמוז",
     "summary": "במהלך סוף השבוע חצו תריסר כלי שיט בלבד את מצר הורמוז, לעומת שלושים וחמישה כלי שיט בסוף השבוע שקדם לו.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T02:19:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T02:19:06+00:00",
     "last_update_at": "2026-09-21T02:19:06+00:00",
     "what_is_not_verified": "הסיבה המדויקת לירידה בתנועת כלי השיט אינה מפורטת בטקסט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/dozen-vessels-transit-hormuz-strait-over-weekend",
       "published_at": "2026-09-21T02:19:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09210240-02",
     "title": "צבא איראן יירט כטב\"ם ביון אמריקאי במצר הורמוז",
     "summary": "צבא איראן יירט כלי טיס בלתי מאויש מסוג אורביטר מעל מצר הורמוז, לפי הודעה רשמית של טהרן.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T18:16:20+00:00",
     "last_update_at": "2026-09-20T18:16:20+00:00",
     "what_is_not_verified": "אין אימות עצמאי או תגובה אמריקאית להפלת כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_92530b1b583c8d27",
       "url": "https://en.irna.ir/news/86269431/Iranian-Army-downs-advanced-US-spy-drone-over-Strait-of-Hormuz",
       "published_at": "2026-09-20T18:16:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09210240-03",
     "title": "אזהרות הדדיות בין ארצות הברית לאיראן על תקיפות",
     "summary": "הנשיא טראמפ הצהיר כי הוא שוקל תקיפה, השמדה או סנקציות כלכליות נגד איראן, בעוד מפקדת ח'אתם אל-אנביאא וגורמי ביטחון איראניים הזהירו מתקיפה ללא מגבלות על בסיסים ואינטרסים אמריקאיים.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T11:08:51+00:00",
     "last_update_at": "2026-09-21T00:00:47+00:00",
     "what_is_not_verified": "האם אכן קיימת תוכנית תקיפה אמריקאית מאושרת כפי שטוענת איראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/9/21/iran-war-live-tehran-warns-us-against-new-strikes-fighting-rages-in-yemen?traffic_source=rss",
       "published_at": "2026-09-21T00:00:47+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609207151",
       "published_at": "2026-09-20T19:11:17+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/20/middle-east-braces-for-more-violence-as-iran-claims-us-is-planning-to-renew-bombing-campaign",
       "published_at": "2026-09-20T18:56:45+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94383",
       "published_at": "2026-09-20T15:26:02+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1369231",
       "published_at": "2026-09-20T14:13:13+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130559",
       "published_at": "2026-09-20T14:00:17+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/iran-and-us-trade-threats-after-houthi-attacks-escalate-regional-conflict",
       "published_at": "2026-09-20T13:46:29+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21458869",
       "published_at": "2026-09-20T11:51:30+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609201491",
       "published_at": "2026-09-20T11:12:51+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130544",
       "published_at": "2026-09-20T11:10:26+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1369209",
       "published_at": "2026-09-20T11:08:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09210240-04",
     "title": "התראות ביטחון של ארה\"ב וקיצור שהות טראמפ בקמפ דייוויד",
     "summary": "ארצות הברית פרסמה התראות ביטחון באחת עשרה מדינות במזרח התיכון, והנשיא טראמפ חזר במפתיע מקמפ דייוויד לבית הלבן.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T05:23:41+00:00",
     "last_update_at": "2026-09-20T18:56:45+00:00",
     "what_is_not_verified": "הסיבה הרשמית לקיצור השהות של טראמפ בקמפ דייוויד לא פורסמה רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/20/middle-east-braces-for-more-violence-as-iran-claims-us-is-planning-to-renew-bombing-campaign",
       "published_at": "2026-09-20T18:56:45+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/us-warns-rapid-escalation-middle-east-war",
       "published_at": "2026-09-20T12:30:25+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130524",
       "published_at": "2026-09-20T07:35:17+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130512",
       "published_at": "2026-09-20T05:23:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09210240-05",
     "title": "קטר פועלת לחידוש המשא ומתן בין ארה\"ב לאיראן",
     "summary": "משרד החוץ וראש ממשלת קטר מנהלים מגעים ומסעות דילוגים במטרה לחדש את שיחות המשא ומתן בין וושינגטון לטהרן ולהגיע למסגרת ביטחון אזורית.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T19:36:12+00:00",
     "last_update_at": "2026-09-20T21:00:15+00:00",
     "what_is_not_verified": "הסכמת הצדדים להיכנס למשא ומתן ישיר אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_785936cb6fb8976c",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/20/qatar-pm-urges-gulf-security-framework-with-iran?traffic_source=rss",
       "published_at": "2026-09-20T21:00:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_785936cb6fb8976c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/qatar-pushes-revival-us-iran-talks-warns-against-cycles-escalation",
       "published_at": "2026-09-20T20:18:08+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_785936cb6fb8976c",
       "url": "https://www.aljazeera.com/news/2026/9/20/qatari-pm-warns-against-cycles-of-escalation-in-the-middle-east?traffic_source=rss",
       "published_at": "2026-09-20T20:13:18+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_785936cb6fb8976c",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/20/qatar-says-it-is-working-to-revive-iran-us-talks?traffic_source=rss",
       "published_at": "2026-09-20T19:36:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09210240-06",
     "title": "סגירת המרכז הצרפתי ללימוד שפות בטהרן וזימון השגריר",
     "summary": "הרשויות באיראן סגרו מרכז תרבות ושפות צרפתי בטענה לעבירות דיפלומטיות, ובתגובה צרפת הודיעה כי תזמן את שגריר איראן ותנקוט צעדים.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T13:46:00+00:00",
     "last_update_at": "2026-09-20T22:06:22+00:00",
     "what_is_not_verified": "מהות ההפרות הדיפלומטיות המדויקות שיוחסו למרכז אינה מפורטת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_2cff6203d372e3d5",
       "url": "https://www.aljazeera.com/news/2026/9/20/france-to-summon-iran-envoy-after-language-centre-closure-in-tehran?traffic_source=rss",
       "published_at": "2026-09-20T22:06:22+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2cff6203d372e3d5",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/france-take-measures-after-iran-closes-its-cultural-centre-tehran",
       "published_at": "2026-09-20T20:23:13+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_2cff6203d372e3d5",
       "url": "https://www.france24.com/en/middle-east/20260920-iran-closes-french-language-centre-in-tehran-for-illegal-acts",
       "published_at": "2026-09-20T13:46:00+00:00"
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
     "id": "IRAN-09210240-07",
     "title": "נסיעת שר החוץ של איראן לכינוס האו\"ם בניו יורק",
     "summary": "שר החוץ האיראני עבאס עראקצ'י יצא מטהרן לניו יורק על מנת להשתתף במושב ה-81 של העצרת הכללית של האו\"ם.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T18:47:28+00:00",
     "last_update_at": "2026-09-20T18:47:28+00:00",
     "what_is_not_verified": "לא צוין האם מתוכננות פגישות ישירות עם גורמים אמריקאיים באו\"ם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_607376934cc5544a",
       "url": "https://en.irna.ir/news/86269449/FM-Araghchi-departs-Tehran-for-New-York",
       "published_at": "2026-09-20T18:47:28+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "IRAN-09210240-08",
     "title": "שר המלחמה האמריקאי פתח במסע לגיוס תמיכה ציבורית במלחמה באיראן",
     "summary": "שר המלחמה של ארצות הברית פיט הגסת' השיק סבב ביקורים בבסיסי הדרכה צבאיים כדי להגביר את התמיכה במלחמה באיראן, על רקע שפל בתמיכה הציבורית בו.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T01:45:43+00:00",
     "last_update_at": "2026-09-21T01:45:43+00:00",
     "what_is_not_verified": "מידת ההשפעה של המסע על עמדות הציבור אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hegseth-kicks-send-me-tour-attempt-gaining-support-war-iran",
       "published_at": "2026-09-21T01:45:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה האיראנית לפיה ארה\"ב גיבשה החלטה לתקוף בפגישה באירופה וקיבלה אור ירוק ממדינות באזור",
    "הסיבה המדויקת לקיצור שהותו של נשיא ארה\"ב בקמפ דייוויד",
    "הדיווח האיראני על יירוט כטב\"ם הביון האמריקאי במצר הורמוז",
    "האשמות איראן בנוגע לפעילות בלתי חוקית של מרכז התרבות הצרפתי"
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
     "value": 3.0377,
     "unit": "ILS",
     "change_pct": 0.15,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "הצבת ברירה לאיראן בין קריסה כלכלית או פגיעה בהנהגתה לבין הגעה להסכם",
      "שמירה על הדלת פתוחה למשא ומתן והרחבת הסכמי אברהם"
     ],
     "inferred": [
      "הפעלת לחץ צבאי ופסיכולוגי מרבי להרתעת טהרן ופגיעה ביכולותיה",
      "בלימת תקיפות מצד כוחות הנתמכים על ידי איראן באזור"
     ],
     "forecast": [
      "המשך אזהרות ביטחוניות לצד הכנות לאפשרות של מהלומה צבאית מוגבלת אם ייכשלו המגעים"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "תגובה קשה וללא מגבלות כנגד כל מוקדי הכוח והאינטרסים האמריקאיים במקרה של תקיפה",
      "שילוב בין לחימה לבין נכונות לניהול משא ומתן מדיני"
     ],
     "inferred": [
      "שימוש במנופי לחץ במצר הורמוז ובבסיסי ארה\"ב במזרח התיכון כדי למנוע מתקפה",
      "הפחתת הלחץ הכלכלי הפנימי באמצעות השגת הסדר או הקלות"
     ],
     "forecast": [
      "המשך הצהרות לוחמניות לצד ניצול עצרת האו\"ם והתיווך הקטרי לגישוש מדיני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/20/france-to-summon-iran-envoy-after-language-centre-closure-in-tehran?traffic_source=rss",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/us-warns-rapid-escalation-middle-east-war",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260920-iran-closes-french-language-centre-in-tehran-for-illegal-acts",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/20/middle-east-braces-for-more-violence-as-iran-claims-us-is-planning-to-renew-bombing-campaign",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609201491",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86269449/FM-Araghchi-departs-Tehran-for-New-York",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21458869",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369209",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hegseth-kicks-send-me-tour-attempt-gaining-support-war-iran",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130512",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94383",
     "accessed_at": "2026-09-21T02:40:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-20T14:20:56+00:00",
  "changes": {
   "IRAN-09210240-01": {
    "kind": "new"
   },
   "IRAN-09210240-02": {
    "kind": "new"
   },
   "IRAN-09210240-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אזהרות איראניות מפני תקיפה ופגיעה בבסיסים אמריקניים ובמדינות האזור",
    "score": 1.0
   },
   "IRAN-09210240-04": {
    "kind": "new"
   },
   "IRAN-09210240-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התניית פתיחת מצר הורמוז וחידוש המשא ומתן בקבלת שבעה תנאים",
    "score": 0.65
   },
   "IRAN-09210240-06": {
    "kind": "new"
   },
   "IRAN-09210240-07": {
    "kind": "new"
   },
   "IRAN-09210240-08": {
    "kind": "possible",
    "prev": "העלאת רמת הדריכות וצעדי גיוס המוניים באיראן",
    "score": 0.467
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-20T2340__ukraine-202609202340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-20T23:40:40+00:00",
   "window": {
    "from": "2026-09-19T23:40:40+00:00",
    "to": "2026-09-20T23:40:40+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609202340"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במתכונת של תקיפות אוויר נרחבות, כאשר אוקראינה ביצעה מתקפת כטב\"מים וטילים רחבת היקף על מוסקבה ומתקני אנרגיה, ובתגובה רוסיה ממשיכה להפציץ את אזור קייב. במקביל, נמשכים קרבות בחזית דונייצק ומהלכים דיפלומטיים הכוללים הטלת סנקציות חדשות על ידי ארצות הברית.",
   "fronts": [
    {
     "name": "חזית קייב ומחוז קייב",
     "status": "פעילה עם תקיפות כטב\"מים ופגיעות בתשתיות"
    },
    {
     "name": "חזית מוסקבה ורוסיה",
     "status": "תחת מתקפות אוויריות אוקראיניות רחבות היקף"
    },
    {
     "name": "חזית דונייצק",
     "status": "פעילה עם התקדמות ומבצעים הנדסיים של הכוחות האוקראיניים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09202340-01",
     "title": "Russian parliamentary election results",
     "summary": "Putin's ruling party is set to claim victory in parliamentary elections deemed predetermined by independent election monitors.",
     "axis": "domestic politics",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T23:04:03+00:00",
     "last_update_at": "2026-09-20T23:04:03+00:00",
     "what_is_not_verified": "האם התוצאות משקפות בחירות הוגנות אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_independent_election_monitors",
       "url": "https://kyivindependent.com/putins-ruling-party-set-to-claim-victory-in-russian-parliamentary-election-in-results-deemed-predetermined/",
       "published_at": "2026-09-20T23:04:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09202340-02",
     "title": "Ukrainian attacks on DPR",
     "summary": "The Ukrainian army attacked the DPR multiple times in the past day, resulting in civilian casualties and property damage.",
     "axis": "frontline",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T21:51:04+00:00",
     "last_update_at": "2026-09-20T21:51:04+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_russian_official_reports",
       "url": "https://tass.com/defense/2190351",
       "published_at": "2026-09-20T21:51:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09202340-03",
     "title": "Fires in Kyiv region from drone strikes",
     "summary": "Russian drone strikes caused fires and damage in multiple districts of the Kyiv region.",
     "axis": "aerial attacks",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T15:23:00+00:00",
     "last_update_at": "2026-09-20T20:38:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_regional_authorities",
       "url": "https://www.ukrinform.net/rubric-ato/4166116-fires-break-out-in-three-districts-of-kyiv-region.html",
       "published_at": "2026-09-20T20:38:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_regional_authorities",
       "url": "https://kyivindependent.com/russian-drone-attack-damages-warehouses-businesses-across-kyiv-oblast/",
       "published_at": "2026-09-20T17:43:43+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_regional_authorities",
       "url": "https://www.ukrinform.net/rubric-ato/4166080-fires-extinguished-in-kyiv-regions-fastiv-district-following-russian-shelling.html",
       "published_at": "2026-09-20T17:39:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_regional_authorities",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/20/8054348/",
       "published_at": "2026-09-20T15:23:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09202340-04",
     "title": "Ukrainian strikes on Moscow and surrounding regions",
     "summary": "Ukraine launched a massive drone and missile attack targeting Moscow and its oil refinery, causing fires and casualties.",
     "axis": "strategic strikes",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T02:43:23+00:00",
     "last_update_at": "2026-09-20T19:12:37+00:00",
     "what_is_not_verified": "מספר כלי הטיס המדויק שיורטו שנוי במחלוקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://kyivindependent.com/ukraine-war-latest-zelensky-approves-new-long-range-operations-in-response-to-russian-strikes/",
       "published_at": "2026-09-20T19:12:37+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://tass.com/defense/2190331",
       "published_at": "2026-09-20T17:59:25+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/20/8054358/",
       "published_at": "2026-09-20T17:11:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://www.theguardian.com/world/2026/sep/20/hundreds-of-drones-target-moscow-on-last-day-of-voting-in-russias-parliamentary-election",
       "published_at": "2026-09-20T14:44:17+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://www.theguardian.com/world/video/2026/sep/20/drone-attacks-damage-major-moscow-refinery-video",
       "published_at": "2026-09-20T14:30:53+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://t.me/alexmehacarmel/47877",
       "published_at": "2026-09-20T13:11:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://t.me/alexmehacarmel/47873",
       "published_at": "2026-09-20T11:48:01+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://www.bbc.co.uk/news/articles/c34gdjk1ne8yo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-20T10:45:39+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://meduza.io/en/feature/2026/09/20/on-the-third-day-of-russia-s-parliamentary-elections-moscow-came-under-what-its-mayor-called-the-largest-ukrainian-drone-attack-on-the-capital-officials-reported-two-deaths",
       "published_at": "2026-09-20T08:12:19+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://t.me/abualiexpress/130525",
       "published_at": "2026-09-20T07:59:01+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21457832",
       "published_at": "2026-09-20T07:38:44+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://t.me/alexmehacarmel/47863",
       "published_at": "2026-09-20T02:46:38+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_ukrainian_sources",
       "url": "https://t.me/alexmehacarmel/47856",
       "published_at": "2026-09-20T02:43:23+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-09202340-05",
     "title": "Ukrainian offensive in Donetsk Oblast",
     "summary": "Ukraine's 3rd Army Corps deployed air-dropped kamikaze UGVs during the Vivaldi offensive operation, liberating villages.",
     "axis": "frontline",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T13:55:00+00:00",
     "last_update_at": "2026-09-20T13:55:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_3rd_army_corps",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/20/8054335/",
       "published_at": "2026-09-20T13:55:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09202340-06",
     "title": "US sanctions on Russia",
     "summary": "US President Donald Trump signed the new 'sanctions from hell' law against Russia, authorizing expanded tariffs and prohibitions.",
     "axis": "sanctions",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T00:56:46+00:00",
     "last_update_at": "2026-09-20T00:56:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_white_house_statement",
       "url": "https://meduza.io/en/feature/2026/09/20/trump-signs-washington-s-long-awaited-sanctions-from-hell-law-against-russia-it-gives-him-30-days-to-act-and-broad-authority-to-suspend-the-restrictions",
       "published_at": "2026-09-20T00:56:46+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    }
   ],
   "not_verified": [
    "מספר כלי הטיס המדויק ששוגרו ויורטו בתקיפה על מוסקבה",
    "היקף הנזק המדויק בבתי הזיקוק במוסקבה",
    "מספר הנפגעים המדויק בכל זירות התקיפה"
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
     "value": 1.146,
     "unit": "USD",
     "change_pct": -0.18,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "ביצוע פעולות ארוכות טווח בתגובה לתקיפות רוסיות",
      "הגנה על שטחי המדינה ושחרור שטחים במסגרת מבצעים כמו ויוואלדי"
     ],
     "inferred": [
      "פגיעה בתשתיות אסטרטגיות וכלכליות בתוך רוסיה כדי לשבש את עורף האויב ולהשפיע על הלחימה"
     ],
     "forecast": [
      "המשך שימוש ברחפנים ובאמצעים מתקדמים לתקיפת עומק ברוסיה",
      "חיפוש תמיכה בינלאומית וחיזוק הסיוע הכלכלי והצבאי"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הפעילות הצבאית המיוחדת",
      "קיום בחירות פרלמנטריות והשתלטות על שטחים אוקראיניים"
     ],
     "inferred": [
      "הגברת התקיפות על מטרות צבאיות ואזרחיות בקייב בתגובה למתקפות על מוסקבה"
     ],
     "forecast": [
      "החרפת התקיפות האוויריות על תשתיות באוקראינה לקראת חודשי החורף",
      "המשך ניסיונות לחץ צבאי לאורך החזיתות היבשתיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c34gdjk1ne8yo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/sep/20/drone-attacks-damage-major-moscow-refinery-video",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21457832",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-zelensky-approves-new-long-range-operations-in-response-to-russian-strikes/",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/09/20/trump-signs-washington-s-long-awaited-sanctions-from-hell-law-against-russia-it-gives-him-30-days-to-act-and-broad-authority-to-suspend-the-restrictions",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/20/8054335/",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2190331",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130525",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47856",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4166080-fires-extinguished-in-kyiv-regions-fastiv-district-following-russian-shelling.html",
     "accessed_at": "2026-09-20T23:40:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-19T10:52:54+00:00",
  "changes": {
   "UKRAINE-09202340-01": {
    "kind": "new"
   },
   "UKRAINE-09202340-02": {
    "kind": "new"
   },
   "UKRAINE-09202340-03": {
    "kind": "new"
   },
   "UKRAINE-09202340-04": {
    "kind": "new"
   },
   "UKRAINE-09202340-05": {
    "kind": "new"
   },
   "UKRAINE-09202340-06": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-21T0249__north-202609210249.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-21T02:49:06+00:00",
   "window": {
    "from": "2026-09-20T02:49:06+00:00",
    "to": "2026-09-21T02:49:06+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609210249"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית עצימה הכוללת תקיפות והשמדת תשתיות צבאיות בסוריה לצד חילופי אש ותקיפות ארטילריות בדרום לבנון. במקביל, ישראל נערכת לאפשרות של עיחול רחב היקף מול איראן ושלוחותיה בזירות השונות, בעוד שארגונים לבנוניים וגורמי דת מדגישים את ריבונות דרום לבנון ואת דבקותם בהתנגדות.",
   "fronts": [
    {
     "name": "החזית הסורית",
     "status": "פעילה עם תקיפות ופיצוצים באתרים צבאיים"
    },
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם הפגזות ארטילריות והיערכות הדדית"
    }
   ],
   "events": [
    {
     "id": "NORTH-09210249-01",
     "title": "פיצוצים חזקים באזור אל-עיס בחלב",
     "summary": "דווח על פיצוצים עזים באתר צבאי בסוריה באזור אל-עיס סמוך לחלב, שהביאו לפצועים ולחסימת דרכים על ידי כוחות הביטחון.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T22:54:45+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T22:54:45+00:00",
     "last_update_at": "2026-09-21T01:30:46+00:00",
     "what_is_not_verified": "סיבת הפיצוצים המדויקת אינה מאומתת באופן סופי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/21/powerful-explosions-at-syrian-army-site-near-aleppo-injures-at-least-four?traffic_source=rss",
       "published_at": "2026-09-21T01:30:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-syrias-aleppo-result-injuries-civil-defence-says",
       "published_at": "2026-09-21T00:19:57+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/blasts-rock-town-syrias-aleppo",
       "published_at": "2026-09-20T23:32:01+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/powerful-explosions-reported-in-syrias-aleppo-countryside-state-media/4062834",
       "published_at": "2026-09-20T22:54:45+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-עיס, סוריה",
       "lat": 35.7975,
       "lon": 35.8554
      },
      {
       "name": "חלב, סוריה",
       "lat": 36.1992,
       "lon": 37.1637
      }
     ]
    },
    {
     "id": "NORTH-09210249-02",
     "title": "ירי ארטילרי ופעילות צבאית דרום לבנון",
     "summary": "כוחות צה\"ל הפגיזו בארטילריה ובחימוש מרחבים שונים בדרום לבנון, וכן דווח על התקדמות טנקים וחסימת צירים.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T08:33:11+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T08:33:11+00:00",
     "last_update_at": "2026-09-20T21:16:37+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים בצד הלבנוני אינו מפורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_70e45a8d9fec80d8",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-shells-southern-lebanon-setting-fields-ablaze-with-phosphorus-munitions/4062820",
       "published_at": "2026-09-20T21:16:37+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_70e45a8d9fec80d8",
       "url": "https://english.almanar.com.lb/article/129247/",
       "published_at": "2026-09-20T13:06:57+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_70e45a8d9fec80d8",
       "url": "https://english.almanar.com.lb/article/129152/",
       "published_at": "2026-09-20T08:33:11+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      },
      {
       "name": "יוחמור אל-שקיף, לבנון",
       "lat": 33.3124,
       "lon": 35.5177
      }
     ]
    },
    {
     "id": "NORTH-09210249-03",
     "title": "פיצוץ מוצב צבאי בדרום סוריה ובחרמון",
     "summary": "כוחות צה\"ל פוצצו מוצב של צבא סוריה באזור מבצר ג'נדל על הר החרמון ובדרום-מערב סוריה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T11:53:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T11:53:17+00:00",
     "last_update_at": "2026-09-20T15:01:29+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף ההרס טרם אומתו באופן רשמי מצד ישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-blow-up-former-regime-military-sites-in-southwestern-syria-shell-quneitra-countryside/4062645",
       "published_at": "2026-09-20T15:01:29+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130550",
       "published_at": "2026-09-20T11:53:17+00:00"
      }
     ],
     "places": [
      {
       "name": "הר החרמון, סוריה",
       "lat": 33.4169,
       "lon": 35.8564
      }
     ]
    },
    {
     "id": "NORTH-09210249-04",
     "title": "קבלת משלוח תחמושת לצבא לבנון",
     "summary": "הצבא הלבנוני קיבל מכולות תחמושת בנמל ביירות במסגרת תוכנית סיוע צבאי אמריקאי.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T04:48:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T04:48:53+00:00",
     "last_update_at": "2026-09-20T04:48:53+00:00",
     "what_is_not_verified": "לא צוין פירוט מדויק של סוגי התחמושת המלאים מעבר להגדרתם הכללית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb73e82a943450c5",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958692/lebanese-army-receives-70-containers-of-ammunition-under-us-aid-progra/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958692",
       "published_at": "2026-09-20T04:48:53+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל ביירות, לבנון",
       "lat": 33.9008,
       "lon": 35.5022
      }
     ]
    }
   ],
   "not_verified": [
    "{'string': 'סיבת הפיצוצים המדויקת באל-עיס שבחלב טרם נקבעה בוודאות.'}",
    "{'string': 'האם חזבאללה אכן מתכוון לחזור לכללי העימות הקודמים לפי הערכות מודיעין.'}"
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
     "value": 3.0377,
     "unit": "ILS",
     "change_pct": 0.15,
     "source_id": "src_ecb",
     "as_of": "2026-09-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "היערכות למעבר ממגננה להתקפה בחזיתות השונות כולל לבנון וסוריה",
      "פגיעה בתשתיות צבאיות של צבא סוריה"
     ],
     "inferred": [
      "מניעת התבססות עוינת בגבולות הצפון",
      "מוכנות לעימות רב-זירתי כולל מול איראן"
     ],
     "forecast": [
      "המשך פעילות צבאית נקודתית בסוריה ובלבנון",
      "כוננות גבוהה מפני התפתחויות מול ציר האסלאם הרדיקלי"
     ]
    },
    {
     "actor": "חזבאללה וגורמים לבנוניים",
     "declared": [
      "הגנה על האדמה הלבנונית ושמירה על בחירת ההתנגדות",
      "דרישה למדינה שתגן על אזרחיה ותספק שיקום ויציבות"
     ],
     "inferred": [
      "שימור יכולות הלחימה מול ישראל למרות הלחץ הצבאי"
     ],
     "forecast": [
      "המשך עמידה על זכויות לבנון והיצמדות לעמדות ההתנגדות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/21/powerful-explosions-at-syrian-army-site-near-aleppo-injures-at-least-four?traffic_source=rss",
     "accessed_at": "2026-09-21T02:49:06+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129152/",
     "accessed_at": "2026-09-21T02:49:06+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-blow-up-former-regime-military-sites-in-southwestern-syria-shell-quneitra-countryside/4062645",
     "accessed_at": "2026-09-21T02:49:06+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/958692/lebanese-army-receives-70-containers-of-ammunition-under-us-aid-progra/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958692",
     "accessed_at": "2026-09-21T02:49:06+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/blasts-rock-town-syrias-aleppo",
     "accessed_at": "2026-09-21T02:49:06+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130550",
     "accessed_at": "2026-09-21T02:49:06+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-20T14:29:09+00:00",
  "changes": {
   "NORTH-09210249-01": {
    "kind": "new"
   },
   "NORTH-09210249-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ירי ארטילרי ישראלי ופעולות הנדסיות בדרום לבנון",
    "score": 1.0
   },
   "NORTH-09210249-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פיצוץ מוצב של צבא אסד בהר החרמון",
    "score": 1.0
   },
   "NORTH-09210249-04": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "קבלת משלוח תחמושת אמריקאי בצבא לבנון",
    "score": 1.0
   }
  }
 }
};
