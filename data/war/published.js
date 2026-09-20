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
  "draft": "drafts/iran/2026-09-20T1420__iran-202609201420.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-20T14:20:56+00:00",
   "window": {
    "from": "2026-09-19T14:20:56+00:00",
    "to": "2026-09-20T14:20:56+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202609201420"
   },
   "summary": "העימות הישיר והעקיף בין ארצות הברית ובעלות בריתה לבין איראן ושלוחותיה מתאפיין ברמת דריכות גבוהה במיוחד, באיומים צבאיים הדדיים ובחסימה נמשכת של מצר הורמוז. בתוך כך, השלוחה החותית בתימן העמיקה את תקיפותיה לעבר עומק שטח ערב הסעודית בפגיעה בבירה ריאד, בזמן שבוושינגטון נמנעים ממעורבות צבאית ישירה להגנת הממלכה. במקביל, טהרן מציבה תנאים מדיניים נוקשים הכוללים הסרת עיצומים ומצור ימי תמורת פתיחת נתיבי השיט, תוך אזהרה מפגיעה בבסיסים אזוריים אם תחודש האש נגדה.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "סגירת המצר נמשכת מצד טהרן לצד הגבלות שיט ופגיעה בייצוא נפט"
    },
    {
     "name": "חזית תימן - ערב הסעודית",
     "status": "הסלמה חריפה עקב שיגור טילים וכטבמים לעבר ריאד ללא התערבות אמריקנית ישירה"
    },
    {
     "name": "הזירה הישירה בין איראן לארצות הברית וישראל",
     "status": "רמת כוננות מוגברת, איומים בהנחתת מכות הרסניות והפעלת לחץ כלכלי וסיכולי"
    }
   ],
   "events": [
    {
     "id": "IRAN-09201420-01",
     "title": "איומים חריפים והצגת חלופות לפעולה מצד נשיא ארצות הברית כלפי איראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ הצהיר כי הוא שוקל את צעדיו וכי עשויים להתרחש מהלכים משמעותיים בקרוב, כאשר בין האפשרויות שהציג נכללות פגיעה הרסנית במדינה, המשך קריסה כלכלית תחת לחץ או הגעה להסדר.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T14:00:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T14:00:17+00:00",
     "last_update_at": "2026-09-20T14:13:13+00:00",
     "what_is_not_verified": "ההחלטה המעשית שתיבחר ולוח הזמנים למימושה",
     "is_new_in_window": true,
     "reports": [
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
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09201420-02",
     "title": "אזהרות איראניות מפני תקיפה ופגיעה בבסיסים אמריקניים ובמדינות האזור",
     "summary": "מפקדת חאתם אל אנביאא וגורמי פיקוד צבאיים באיראן התרו כנגד כל יוזמה התקפית של ארצות הברית ובעלות בריתה, והזהירו כי תגובתם תכלול פגיעות ישירות וממושכות בבסיסים ובאינטרסים אמריקניים, לצד שלילת איפוק מול מדינות שישתפו פעולה.",
     "axis": "איראן - ארצות הברית ומדינות האזור",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T11:10:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-20T11:10:26+00:00",
     "last_update_at": "2026-09-20T14:10:41+00:00",
     "what_is_not_verified": "אמיתות המידע המודיעיני האיראני לגבי מתקפה אמריקנית מתואמת שהוחלטה באירופה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_d95a72cdc1effb25",
       "url": "https://en.irna.ir/news/86269254/Iran-warns-US-regional-states-of-painful-attacks-if-they-act",
       "published_at": "2026-09-20T14:10:41+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_d95a72cdc1effb25",
       "url": "https://www.al-monitor.com/originals/2026/09/iran-warns-against-new-escalation-us-and-allies",
       "published_at": "2026-09-20T13:46:29+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_d95a72cdc1effb25",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21458869",
       "published_at": "2026-09-20T11:51:30+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_d95a72cdc1effb25",
       "url": "https://t.me/abualiexpress/130544",
       "published_at": "2026-09-20T11:10:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09201420-03",
     "title": "התניית פתיחת מצר הורמוז וחידוש המשא ומתן בקבלת שבעה תנאים",
     "summary": "יושב ראש הפרלמנט האיראני ובכירים במדינה הבהירו כי מצר הורמוז יישאר סגור וכי שיחות מול וושינגטון מותנות במילוי שבעה תנאים שהועברו באמצעות מתווכים, ובראשם הסרת המצור הימי על הנמלים וביטול עיצומי הנפט.",
     "axis": "מצר הורמוז ומשא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T18:30:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T18:30:00+00:00",
     "last_update_at": "2026-09-20T11:21:06+00:00",
     "what_is_not_verified": "כלל פרטי שבעת התנאים המלאים והנכונות האמריקנית לדון בהם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/20/what-are-irans-new-conditions-to-end-its-war-with-the-us?traffic_source=rss",
       "published_at": "2026-09-20T11:21:06+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ghalibaf-iran-must-fight-and-negotiate-war-us-drags",
       "published_at": "2026-09-20T08:49:34+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-hormuz-will-not-reopen-until-us-honours-june-agreement",
       "published_at": "2026-09-20T08:15:06+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkxvjvnyzg",
       "published_at": "2026-09-19T21:29:00+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609192233",
       "published_at": "2026-09-19T18:30:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09201420-04",
     "title": "מתקפת טילים וכטבמים חותית לעבר ריאד",
     "summary": "כוחות החותים מתימן שיגרו טילים בליסטיים וכלי טיס בלתי מאוישים אל עבר אתרים בבירת ערב הסעודית, תקיפה שהביאה לפריצת שריפה בסמוך לנמל התעופה ולהפעלת התרעות ראשונות מסוגן בעיר.",
     "axis": "החותים - ערב הסעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T06:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T00:21:04+00:00",
     "last_update_at": "2026-09-20T12:30:25+00:00",
     "what_is_not_verified": "היקף הפגיעה המדויק באתרים שהוגדרו רגישים והנזק המלא בנמל התעופה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/us-warns-rapid-escalation-mideast-war",
       "published_at": "2026-09-20T12:30:25+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/us-and-saudi-arabia-lack-plan-houthi-strikes-expose-riyadhs-vulnerability",
       "published_at": "2026-09-20T12:09:31+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/yemen-s-houthis-strike-saudi-capital-riyadh-for-the-first-time",
       "published_at": "2026-09-20T09:38:42+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/19/saudi-arabia-riyadh-airport",
       "published_at": "2026-09-20T00:21:04+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "IRAN-09201420-05",
     "title": "סיכול תאי חבלה הפועלים בחסות זרה באיראן",
     "summary": "הרשויות באיראן דיווחו על חיסול ומעצר של חברי שלוש חוליות חבלה שפעלו בשלושה מחוזות שונים במדינה במטרה להתנקש באישים ולפגוע בתשתיות קריטיות.",
     "axis": "פנים איראן - ביטחון וסיכול",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T12:22:56+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T12:22:56+00:00",
     "last_update_at": "2026-09-20T12:22:56+00:00",
     "what_is_not_verified": "מידת השיוך הישיר של החוליות לגורמי מודיעין אמריקניים או ישראליים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_6bebab0c30d2fb4b",
       "url": "https://en.irna.ir/news/86269194/Iran-dismantles-three-terrorist-operational-cells",
       "published_at": "2026-09-20T12:22:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09201420-06",
     "title": "העלאת רמת הדריכות וצעדי גיוס המוניים באיראן",
     "summary": "הכוחות המזוינים באיראן העלו את רמת הכוננות לרמה עליונה במקביל להרחבת מסע גיוס עממי והגנה אזרחית לנוכח החשש מעימות רחב היקף מול ארצות הברית.",
     "axis": "איראן - מוכנות צבאית",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T23:07:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T23:07:49+00:00",
     "last_update_at": "2026-09-20T13:47:26+00:00",
     "what_is_not_verified": "הדיווחים על הוצאת קוד מאה לכוחות הביטחון המבוססים על ערוצים לא רשמיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/economy/2026/9/20/whats-behind-iranian-authorities-push-for-a-mass-mobilisation-campaign?traffic_source=rss",
       "published_at": "2026-09-20T13:47:26+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609206316",
       "published_at": "2026-09-20T01:56:20+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47849",
       "published_at": "2026-09-19T23:20:43+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47845",
       "published_at": "2026-09-19T23:07:49+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת איראן בדבר החלטה אמריקנית מאומתת לתקוף שנרקמה בפגישה באירופה עם מדינות האזור",
    "מידת הנזק המדויק שנגרם מסביב לנמל התעופה בריאד כתוצאה ממתקפת החותים",
    "דיווחים על מתן פקודת כוננות צבאית פנימית בשם קוד מאה באיראן",
    "הערכות פרשניות לגבי תקיפה אפשרית באתר הר המכוש באיראן"
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
     "actor": "איראן",
     "declared": [
      "שמירה על סגירת מצר הורמוז עד לביטול המצור על הנמלים והסרת עיצומי הנפט",
      "תקיפה חסרת ריסון של מטרות ובסיסים אמריקניים ושותפיהם באזור במקרה של תקיפה",
      "הצבת שבעה תנאים ברורים לפתיחת משא ומתן להסדרת העימות"
     ],
     "inferred": [
      "מינוף הלחץ הכלכלי העולמי ועליית מחירי האנרגיה כדי לכפות ויתורים על וושינגטון",
      "הפעלת לחץ עקיף על המפרץ באמצעות תקיפות השלוחה החותית בסעודיה כדי לערער את הקואליציה האזורית"
     ],
     "forecast": [
      "המשך החזקת מצר הורמוז כקלף מיקוח מרכזי תוך שמירה על רמת כוננות מרבית",
      "הימנעות ממתקפה יזומה כוללת אלא אם כן תותקף ישירות בידי כוחות ארצות הברית"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "בחינת אפשרויות הכוללות השמדה צבאית נרחבת, לחץ כלכלי מתמשך או חתירה להסכם",
      "אזהרה מפני התלקחות רחבה ומהירה במזרח התיכון"
     ],
     "inferred": [
      "שאיפה לכפות הסדר בתנאים נוחים בלי להיגרר לפעולה קרקעית או למחויבות הגנתית רחבה לסעודיה",
      "שימוש בהרתעה מילולית לצד מצור ימי ועיצומים להחלשת השלטון בטהרן"
     ],
     "forecast": [
      "המשך הימנעות מהתערבות צבאית ישירה בתימן לטובת ריאד בטווח הזמן המיידי",
      "הגברת הלחץ הכלכלי והמשך הצבת איום צבאי מפורש לשיבוש כוונותיה של איראן"
     ]
    },
    {
     "actor": "השלוחה החותית בתימן",
     "declared": [
      "תקיפת אתרים רגישים בעומק ערב הסעודית ובעיר הבירה באמצעות טילים וכטבמים"
     ],
     "inferred": [
      "הפגנת עליונות צבאית ואילוץ ערב הסעודית לוותר במערכה המקומית",
      "סיוע לאינטרס האיראני בהפעלת לחץ רב-זירתי על בעלות בריתה של ארצות הברית"
     ],
     "forecast": [
      "המשך תקיפות ארוכות טווח לעבר תשתיות במפרץ כדי להמחיש את פגיעות הממלכה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/economy/2026/9/20/whats-behind-iranian-authorities-push-for-a-mass-mobilisation-campaign?traffic_source=rss",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/us-warns-rapid-escalation-mideast-war",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/yemen-s-houthis-strike-saudi-capital-riyadh-for-the-first-time",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/19/saudi-arabia-riyadh-airport",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609206316",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86269194/Iran-dismantles-three-terrorist-operational-cells",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21458869",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369231",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/us-and-saudi-arabia-lack-plan-houthi-strikes-expose-riyadhs-vulnerability",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130544",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47845",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkxvjvnyzg",
     "accessed_at": "2026-09-20T14:20:56+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-19T23:40:28+00:00",
  "changes": {
   "IRAN-09201420-01": {
    "kind": "new"
   },
   "IRAN-09201420-02": {
    "kind": "new"
   },
   "IRAN-09201420-03": {
    "kind": "new"
   },
   "IRAN-09201420-04": {
    "kind": "possible",
    "prev": "יירוט טיל בליסטי מעל ריאד",
    "score": 0.633
   },
   "IRAN-09201420-05": {
    "kind": "new"
   },
   "IRAN-09201420-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "העלאת כוננות באיראן לקוד 100",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-19T1052__ukraine-202609191052.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-19T10:52:54+00:00",
   "window": {
    "from": "2026-09-18T10:52:54+00:00",
    "to": "2026-09-19T10:52:54+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202609191052"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בחילופי מהלומות אוויריות נרחבים בכטבמים וטילים, לצד התנגשויות קרקעיות עזות במוקדים מוגדרים במזרח המדינה דוגמת גזרת לימאן. המערב מגביר את הלחץ הכלכלי באמצעות סנקציות חדשות, אך אספקת מערכות ההגנה האווירית מארצות הברית נתקלת בקשיי ייצור ובמחסור במלאים. במקביל, רוסיה מקדמת צעדי סיפוח פוליטיים בשטחים שכבשה ומעוררת חשש באירופה מהתרחבות האיומים הביטחוניים.",
   "fronts": [
    {
     "name": "גזרת לימאן (דונבאס)",
     "status": "מתקפת נגד אוקראינית בניסיון להדוף כוחות רוסיים, תוך צבירת כוחות הדדית להמשך הקרבות"
    },
    {
     "name": "עורף אוקראינה (סומי, חרקוב, קייב, אודסה, זפורוז'יה)",
     "status": "מתקפות אוויריות רוסיות שוטפות באמצעות כטבמים ופצצות מונחות נגד תשתיות ומבני מגורים"
    },
    {
     "name": "עורף רוסיה והשטחים שבשליטתה (דונצק, לוהנסק, דגסטן ומחוזות מערביים)",
     "status": "מטחי כטבמים אוקראיניים לעבר מטרות בעומק רוסיה ופגיעות במערכות תשתית וחשמל מקומיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09191052-01",
     "title": "נשיא ארצות הברית חתם על חוק סנקציות נרחב נגד רוסיה",
     "summary": "נחתם חוק המטיל סנקציות ומכסים כבדים על רוסיה, על הנהגתה, על מגזרי האנרגיה והביטחון שלה, ועל מדינות הרוכשות ממנה נפט וגז.",
     "axis": "מדיני וכלכלי בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T22:10:44+00:00",
     "last_update_at": "2026-09-19T10:28:57+00:00",
     "what_is_not_verified": "היקף ההשפעה המעשית ולוחות הזמנים ליישום המכסים וההגבלות בפועל אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130479",
       "published_at": "2026-09-19T10:28:57+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/09/19/trump-signs-late-senator-lindsey-graham-s-sanctions-from-hell-law-against-russia",
       "published_at": "2026-09-18T22:33:39+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/sep/18/trump-signs-russia-sanctions-bill",
       "published_at": "2026-09-18T22:10:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09191052-02",
     "title": "אישור אמריקני לעסקת נשק והגנה אווירית עבור אוקראינה",
     "summary": "הממשל האמריקני אישר אפשרות למכירת חבילת אמצעי לחימה ומערכות מכם והגנה אווירית לאוקראינה בהיקף של כ-2.7 מיליארד דולר.",
     "axis": "סיוע צבאי ורכש",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T07:28:53+00:00",
     "last_update_at": "2026-09-19T09:27:46+00:00",
     "what_is_not_verified": "מועד האספקה המדויק וזמינות המלאים בפועל אינם מובטחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-approves-possible-2-7-billion-sale-to-support-ukraines-air-defense/",
       "published_at": "2026-09-19T09:27:46+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1368870",
       "published_at": "2026-09-19T07:28:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09191052-03",
     "title": "מתקפת כטבמים ופצצות על יעדים ומבנים באוקראינה",
     "summary": "רוסיה שיגרה עשרות כטבמים וחימושים שפגעו במבני מגורים, קניון ותשתיות אזרחיות, תוך גרימת נפגעים במספר מחוזות.",
     "axis": "מתקפות אוויריות בעומק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T12:03:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T12:03:23+00:00",
     "last_update_at": "2026-09-19T09:05:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בכלל האזורים הנתקפים אינו סופי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4165727-five-killed-15-injured-in-russian-attacks-in-kharkiv-region-over-past-day.html",
       "published_at": "2026-09-19T09:05:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054204/",
       "published_at": "2026-09-19T08:41:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4165709-russian-forces-launch-massive-overnight-attack-on-odesa-region.html",
       "published_at": "2026-09-19T08:12:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-attacks-kill-11-injure-over-64-in-ukraine-over-past-day/",
       "published_at": "2026-09-19T07:55:20+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/09/19/zelensky-urges-u-s-lawmakers-to-pass-graham-s-sanctions-bill-after-russian-guided-bomb-hit-apartment-building-in-northeastern-ukraine-killing-two-city-council-employees",
       "published_at": "2026-09-18T22:19:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/sep/18/fire-zaporizhzhia-mall-ukraine-russian-attack-video",
       "published_at": "2026-09-18T12:03:23+00:00"
      }
     ],
     "places": [
      {
       "name": "סומי, אוקראינה",
       "lat": 50.912,
       "lon": 34.8028
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "זפורוז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-04",
     "title": "תקיפות כטבמים אוקראיניות לעבר שטח רוסיה ומערכות חשמל באזורים שבשליטתה",
     "summary": "הגנה אווירית רוסית יירטה מאות כלי טיס בלתי מאוישים במספר מחוזות ובדגסטן, לצד שיבושי חשמל באזורי לוהנסק ודונצק בעקבות פגיעה.",
     "axis": "חזית העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T03:46:01+00:00",
     "last_update_at": "2026-09-19T07:35:40+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת בשטח בכל המחוזות המוזכרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_b5a600ce7427e955",
       "url": "https://tass.com/society/2190033",
       "published_at": "2026-09-19T07:35:40+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_b5a600ce7427e955",
       "url": "https://tass.com/defense/2190027",
       "published_at": "2026-09-19T06:41:49+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b5a600ce7427e955",
       "url": "https://t.me/alexmehacarmel/47825",
       "published_at": "2026-09-19T03:46:01+00:00"
      }
     ],
     "places": [
      {
       "name": "מחצ'קלה, רוסיה",
       "lat": 42.983,
       "lon": 47.5049
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-05",
     "title": "מתקפת נגד אוקראינית באזור לימאן בדונבאס",
     "summary": "כוחות אוקראינים מנהלים מתקפה באזור לימאן במטרה להדוף את הכוחות הרוסיים, כאשר שני הצדדים מרכזים כוחות לקראת המשך הקרבות.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T18:10:03+00:00",
     "last_update_at": "2026-09-18T18:10:03+00:00",
     "what_is_not_verified": "אין אימות עצמאי לכך שהכוחות הרוסיים אכן נהדפו אל מעבר לנהר ז'רבץ השחור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/09/18/ukraine-s-operation-vivaldi-pushed-russian-forces-back-around-lyman-in-the-donbas-now-both-armies-are-massing-troops-for-the-next-battles-farther-south",
       "published_at": "2026-09-18T18:10:03+00:00"
      }
     ],
     "places": [
      {
       "name": "לימאן, אוקראינה",
       "lat": 48.9801,
       "lon": 37.8168
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-06",
     "title": "קיום הצבעה לפרלמנט הרוסי בשטחים כבושים באוקראינה",
     "summary": "רוסיה מארגנת הצבעה בבחירות לפרלמנט בחלקים הכבושים של מחוז חרסון ובאזורים נוספים, תוך שימוש בתפאורות היסטוריות וחלוקת תמריצים.",
     "axis": "שליטה אזרחית וסיפוח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T18:51:57+00:00",
     "last_update_at": "2026-09-19T09:43:00+00:00",
     "what_is_not_verified": "היקף ההשתתפות האמיתי ואמינות נתוני ההצבעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054211/",
       "published_at": "2026-09-19T09:43:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1pfnxjfze",
       "published_at": "2026-09-18T18:51:57+00:00"
      }
     ],
     "places": [
      {
       "name": "גניצ'סק, אוקראינה",
       "lat": 46.1662,
       "lon": 34.8089
      },
      {
       "name": "קלנצ'ק, אוקראינה",
       "lat": 46.2572,
       "lon": 33.2844
      },
      {
       "name": "נובוטרויצקה, אוקראינה",
       "lat": 47.7167,
       "lon": 37.5817
      }
     ]
    },
    {
     "id": "UKRAINE-09191052-07",
     "title": "דוח האומות המאוחדות על אלימות מינית במהלך המלחמה",
     "summary": "משרד זכויות האדם של האו\"ם פרסם דוח שתיעד למעלה מאלף מקרי אלימות מינית נגד אזרחים ושבויים, כאשר מרביתם המכרעת יוחסו לכוחות הרוסיים.",
     "axis": "הפרות דיני לחימה ומשפט בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T12:00:00+00:00",
     "last_update_at": "2026-09-19T03:33:13+00:00",
     "what_is_not_verified": "בארגון מעריכים כי המספרים המתועדים אינם משקפים את מלוא היקף התופעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_d51065519338b59e",
       "url": "https://kyivindependent.com/abhorrent-acts-russian-forces-committed-widespread-sexual-violence-in-ukraine-since-full-scale-invasion-un-reports/",
       "published_at": "2026-09-19T03:33:13+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_d51065519338b59e",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21452362",
       "published_at": "2026-09-18T20:18:25+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_d51065519338b59e",
       "url": "https://news.un.org/feed/view/en/story/2026/09/1168374",
       "published_at": "2026-09-18T12:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09191052-08",
     "title": "מחסור בחימוש ועיכובים באספקת מערכות הגנה אווירית מארצות הברית",
     "summary": "שגריר ארצות הברית בנאט\"ו וגורמים רשמיים מזהירים מעיכובים באספקת מיירטי פטריוט וטילים בשל מגבלות ייצור ודלדול מאגרים אמריקניים.",
     "axis": "אספקה ביטחונית ושרשרת ייצור",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T08:10:00+00:00",
     "last_update_at": "2026-09-19T09:07:00+00:00",
     "what_is_not_verified": "משך העיכובים המדויק לכל מדינה ומדינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054206/",
       "published_at": "2026-09-19T09:07:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054202/",
       "published_at": "2026-09-19T08:10:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת אוקראינה לגבי הדיפת הכוחות הרוסיים אל מעבר לנהר ז'רבץ השחור בגזרת לימאן אינה מאומתת.",
    "ההיקף הכולל של נפגעי הכוחות הלוחמים בשני הצדדים מבוסס על הצהרות חד-צדדיות בלבד ואינו מאומת.",
    "מידת ההשפעה של חוק הסנקציות האמריקני החדש והפעלת סמכות המכסים בפועל אינן ודאיות.",
    "דיווחים על פגיעה במערכת נשק ספציפית מדגם מסוים שהוסבה לירי קרקע-קרקע אינם מגובים באימות רשמי.",
    "ממדי מקרי האלימות המינית הכוללים מעבר למקרים שתועדו בדוח האו\"ם אינם ידועים בוודאות."
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
      "הדיפת הכוחות הרוסיים משטחה ופגיעה במערכי האויב",
      "השגת מערכות הגנה אווירית מתקדמות ומיירטים להגנה לקראת החורף",
      "פיתוח יכולות עצמאיות לתקיפה והרתעה ארוכת טווח"
     ],
     "inferred": [
      "ערעור העורף הרוסי ושיבוש מערכות האנרגיה באזורי השליטה הרוסיים",
      "רתימת המערב להחמרת הסנקציות על רוסיה והגברת הסיוע הצבאי"
     ],
     "forecast": [
      "המשך מאמץ מתקפות הכטבמים לעומק רוסיה לצד לחימת בלימה והתקפות נגד מקומיות במזרח"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "סיפוח והשתלטות פוליטית על השטחים הכבושים באמצעות הליכי בחירות",
      "יירוט תקיפות אוקראיניות ופגיעה במטרות צבאיות ותשתיתיות באוקראינה"
     ],
     "inferred": [
      "שחיקת כוח האדם ומערכי ההגנה האווירית של אוקראינה באמצעות מתקפות כטבמים וטילים המוניות",
      "ביסוס קווי שליטה במזרח אוקראינה והרתעת מדינות נאט\"ו מהעמקת המעורבות"
     ],
     "forecast": [
      "המשך לחץ התקפי בעומק אוקראינה וחיזוק האחיזה המנהלית בשטחים שנכבשו"
     ]
    },
    {
     "actor": "ארצות הברית ומדינות המערב",
     "declared": [
      "הטלת סנקציות כלכליות נוקשות על רוסיה ועל רוכשי האנרגיה ממנה",
      "המשך התמיכה ביכולות ההגנה האווירית והטכנולוגית של אוקראינה"
     ],
     "inferred": [
      "הגנה על מאגרי הנשק העצמיים לנוכח מחסור ביכולות ייצור מיירטים וטילים",
      "הרתעת גורמים בינלאומיים משיתוף פעולה מסחרי וצבאי עם מוסקבה"
     ],
     "forecast": [
      "החרפת האכיפה הכלכלית לצד קושי גובר לעמוד בקצב אספקת מערכות חימוש מתקדמות לאוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/sep/18/fire-zaporizhzhia-mall-ukraine-russian-attack-video",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21452362",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/abhorrent-acts-russian-forces-committed-widespread-sexual-violence-in-ukraine-since-full-scale-invasion-un-reports/",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1368870",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/09/18/ukraine-s-operation-vivaldi-pushed-russian-forces-back-around-lyman-in-the-donbas-now-both-armies-are-massing-troops-for-the-next-battles-farther-south",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/19/8054202/",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2190027",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130479",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47825",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4165709-russian-forces-launch-massive-overnight-attack-on-odesa-region.html",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/09/1168374",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1pfnxjfze",
     "accessed_at": "2026-09-19T10:52:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-18T12:00:57+00:00",
  "changes": {
   "UKRAINE-09191052-01": {
    "kind": "new"
   },
   "UKRAINE-09191052-02": {
    "kind": "new"
   },
   "UKRAINE-09191052-03": {
    "kind": "new"
   },
   "UKRAINE-09191052-04": {
    "kind": "new"
   },
   "UKRAINE-09191052-05": {
    "kind": "possible",
    "prev": "מתקפת רחפנים אוקראינית נרחבת על מחוז רוסטוב ומרחב מוסקבה",
    "score": 0.467
   },
   "UKRAINE-09191052-06": {
    "kind": "new"
   },
   "UKRAINE-09191052-07": {
    "kind": "new"
   },
   "UKRAINE-09191052-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-20T1429__north-202609201429.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-20T14:29:09+00:00",
   "window": {
    "from": "2026-09-19T14:29:09+00:00",
    "to": "2026-09-20T14:29:09+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609201429"
   },
   "summary": "הגזרה הצפונית רוויה בעימותים צבאיים הכוללים תקיפות ארטילריות ואוויריות ישראליות בדרום לבנון ובאזור הגבול בסוריה, לצד פעילות של חיזבאללה והיערכות בינלאומית לקראת נסיגת כוח יוניפי\"ל. ישראל פועלת צבאית נגד תשתיות צבאיות בדרום לבנון ובסוריה, בעוד שגורמים לבנוניים רשמיים ודתיים מביעים התנגדות להפיכת דרום המדינה לזירת מיקוח ודורשים פתרונות דיפלומטיים שיבטיחו את ריבונותה.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה - תקיפות ארטילריות, אוויריות ופעילות הנדסית של צה\"ל לצד עימותים עם חיזבאללה"
    },
    {
     "name": "חזית סוריה",
     "status": "פעילה - תקיפות נקודתיות של צה\"ל על תשתיות צבאיות בגבול"
    }
   ],
   "events": [
    {
     "id": "NORTH-09201429-01",
     "title": "ירי ארטילרי ישראלי ופעולות הנדסיות בדרום לבנון",
     "summary": "התקפות ארטילריות, פיצוצים וירי מכונות ירייה בוצעו במספר מוקדים בדרום לבנון על ידי צבא ישראל.",
     "axis": "ישראל-לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T08:33:11+00:00",
     "last_update_at": "2026-09-20T13:06:57+00:00",
     "what_is_not_verified": "היקף הנזק המדויק והנפגעים בכל מוקד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129247/",
       "published_at": "2026-09-20T13:06:57+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129152/",
       "published_at": "2026-09-20T08:33:11+00:00"
      }
     ],
     "places": [
      {
       "name": "יוחמור א-שקיף, לבנון",
       "lat": 33.3124,
       "lon": 35.5177
      },
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "כפר תבניתי, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-09201429-02",
     "title": "תקיפות אוויריות בנבטיה",
     "summary": "שני מטוסי קרב ישראליים תקפו את העיר נבטיה, ותקיפה נוספת מכוונת לעבר צוות אמבולנס שהגיע לטפל באירוע.",
     "axis": "ישראל-לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T04:29:24+00:00",
     "last_update_at": "2026-09-20T04:29:24+00:00",
     "what_is_not_verified": "זהות הנפגעים המלאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-strikes-target-lebanons-nabatieh-ambulance-team",
       "published_at": "2026-09-20T04:29:24+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      }
     ]
    },
    {
     "id": "NORTH-09201429-03",
     "title": "פיצוץ מוצב של צבא אסד בהר החרמון",
     "summary": "צה\"ל פוצץ …",
     "axis": "ישראל-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T11:53:17+00:00",
     "last_update_at": "2026-09-20T11:53:17+00:00",
     "what_is_not_verified": "פרטים מלאים על מצב המוצב קודם לפיצוץ",
     "is_new_in_window": true,
     "reports": [
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
     "id": "NORTH-09201429-04",
     "title": "פציעת שני לוחמים ממוקש בנחל סלוקי",
     "summary": "שני לוחמים נפצעו באורח קל עד בינוני מפגיעת מטען סמוך לנחל סלוקי בנבטיה.",
     "axis": "ישראל-לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-19T14:15:26+00:00",
     "last_update_at": "2026-09-19T14:29:09+00:00",
     "what_is_not_verified": "לא מאומתים פרטים נוספים על נסיבות הנחת המטען",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94376",
       "published_at": "2026-09-19T14:15:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09201429-05",
     "title": "קבלת משלוח תחמושת אמריקאי בצבא לבנון",
     "summary": "הצבא הלבนוני הודיע על קבלת 70 מכולות של תחמושת מסוגים שונים בנמל ביירות במסגרת תוכנית הסיוע הצבאי של ארצות הברית.",
     "axis": "ישראל-לבנון וחיזבאללה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-20T04:48:53+00:00",
     "last_update_at": "2026-09-20T04:48:53+00:00",
     "what_is_not_verified": "לוחות הזמנים המלאים של הפצת התחמושת ליחידות השונות",
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
    },
    {
     "id": "NORTH-09201429-06",
     "title": "הצהרת יוניפי\"ל על נסיגה מתוכננת",
     "summary": "מפקד כוח היוניפי\"ל בדרום לבנון הצהיר על חשיבות המעבר החלק של המשימה לכוחות צבא לבנון ולסוכנויות האו\"ם לקראת סיום המנדט ונסיגת הכוח בסוף השנה.",
     "axis": "ישראל-לבנון וחיזבאללה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-19T14:46:32+00:00",
     "last_update_at": "2026-09-19T17:34:53+00:00",
     "what_is_not_verified": "היכולת המעשית של צבא לבנון לקחת לידיו את כל המוצבים הנמצאים כיום בשליטה ישראלית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "tk_7a817cbec364e8fb",
       "url": "https://www.newarab.com/news/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
       "published_at": "2026-09-19T17:34:53+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "tk_7a817cbec364e8fb",
       "url": "https://www.al-monitor.com/originals/2026/09/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
       "published_at": "2026-09-19T14:46:32+00:00"
      }
     ],
     "places": [
      {
       "name": "מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    }
   ],
   "not_verified": [
    "המטרות המדויקות של ישראל בבקשת ציוד צבאי נוסף מארצות הברית כפיצוי",
    "היכולת המלאה של צבא לבנון למלא את ריק הביטחון לאחר נסיגת יוניפי\"ל בסוף השנה",
    "פרטים מלאים על מצב העצורים הזרים בסוריה במסגרת חילופי השלטון והמשפטים המתנהלים"
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
      "מניעת התבססות עוינת בגבול הצפון",
      "הגנה על יישובי הצפון ורמת הגולן"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי בלבנון ובסוריה",
      "מניעת כוח חלופי עוין שימלא את מקומו של יוניפי\"ל בצורה שתסכן את ביטחון ישראל"
     ],
     "forecast": [
      "המשך התקיפות הנקודתיות והפעילות ההנדסית בגבולות סוריה ולבנון",
      "דרישה להסדרים ביטחוניים קשיחים שימנעו התעצמות חיזבאללה בדרום לבנון"
     ]
    },
    {
     "actor": "חיזבאללה וגורמים רשמיים בלבנון",
     "declared": [
      "התנגדות לשימוש בדרום לבנון כקלף מיקוח",
      "דרישה להגנה על ריבונות לבנון ואדמתה"
     ],
     "inferred": [
      "הישענות על צבא לבנון ועל סיוע חוץ כדי לשמור על מעמדם מול הפעילות הישראלית",
      "ניסיון למנוע וואקום שלטוני מוחלט בדרום עם נסיגת כוחות האו\"ם"
     ],
     "forecast": [
      "המשך הלחימה וההתנגדות לנוכחות הישראלית בדרום לבנון",
      "מאבק דיפלומטי ומדיני למציאת מנגנון שיחליף את יוניפי\"ל מבלי לפגוע בריבונות לבנון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129152/",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/958692/lebanese-army-receives-70-containers-of-ammunition-under-us-aid-progra/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958692",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-strikes-target-lebanons-nabatieh-ambulance-team",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/un-peacekeeping-chief-lebanon-says-smooth-transition-critical-pull-out",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130550",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94376",
     "accessed_at": "2026-09-20T14:29:09+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-20T01:39:10+00:00",
  "changes": {
   "NORTH-09201429-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפות אוויריות והפגזות צה\"ל במספר כפרים בדרום לבנון",
    "score": 0.817
   },
   "NORTH-09201429-02": {
    "kind": "new"
   },
   "NORTH-09201429-03": {
    "kind": "new"
   },
   "NORTH-09201429-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פציעת חיילי צה\"ל בפיצוץ מטען בדרום לבנון ותקיפת תגובה בנבטיה",
    "score": 1.0
   },
   "NORTH-09201429-05": {
    "kind": "new"
   },
   "NORTH-09201429-06": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "היערכות יוניפי\"ל לנסיגה ומחלוקת על המנגנון החלופי בדרום לבנון",
    "score": 1.0
   }
  }
 }
};
