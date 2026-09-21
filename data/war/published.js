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
  "draft": "drafts/iran/2026-09-21T1634__iran-202609211634.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-21T16:34:17+00:00",
   "window": {
    "from": "2026-09-20T16:34:17+00:00",
    "to": "2026-09-21T16:34:17+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609211634"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך כאשר ארה\"ב מפעילה לחץ כלכלי וסנקציות חדשות, ומאיימת לנקוט צעדים נוספים, בעוד איראן ושלוחותיה מאיימות להרחיב את המערכה וממשיכות לשלוט בצמתים אסטרטגיים ימיים. מדינות האזור כמו קטאר ואיחוד האמירויות קוראות למסגרת ביטחונית אזורית חדשה הכוללת את איראן כדי למנוע הידרדרות נוספת.",
   "fronts": [
    {
     "name": "החזית הימית (הורמוז)",
     "status": "פעילה ומתוחה עם פגיעה בכלי שיט וירידה משמעותית בתנועה"
    },
    {
     "name": "החזית הדיפלומטית והכלכלית",
     "status": "החרפת סנקציות מצד ארה\"ב וניסיונות גישור אזוריים"
    }
   ],
   "events": [
    {
     "id": "IRAN-09211634-01",
     "title": "ביטול תקיפה אמריקנית בתימן ברגע האחרון",
     "summary": "הנשיא האמריקני הורה לפנטגון להצטרף למערכה נגד החות'ים וביטל את התקיפה ברגע האחרון בשל חשש מהסלמה מול איראן.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:13:06+00:00",
     "last_update_at": "2026-09-21T16:13:06+00:00",
     "what_is_not_verified": "הפרטים מבוססים על דברי בכירים אמריקנים ולא על הודעה רשמית של הפנטגון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1zkvhckmx",
       "published_at": "2026-09-21T16:13:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09211634-02",
     "title": "פגיעה במכלית נפט במצר הורמוז",
     "summary": "מכלית גפ\"ס נפגעה משברים של קלע לא מוכר במצר הורמוז, והמשיכה בדרכה כשכל אנשי הצוות בטוחים.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T14:03:15+00:00",
     "last_update_at": "2026-09-21T15:38:46+00:00",
     "what_is_not_verified": "זהות הקלע הלא מוכר ודפוס הפגיעה המלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_47258434404b4fc2",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lpg-tanker-hit-debris-unknown-projectile-hormuz",
       "published_at": "2026-09-21T15:38:46+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_47258434404b4fc2",
       "url": "https://www.france24.com/en/middle-east/20260921-projectile-hits-tanker-as-it-enters-the-strait-of-hormuz",
       "published_at": "2026-09-21T14:03:15+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-09211634-03",
     "title": "ארה\"ב מאיימת לנתק חברות תעופה איראניות ממערכת הדולר",
     "summary": "מזכיר האוצר האמריקני הזהיר מפני ניתוק משדות תעופה וחברות המספקות שירותים לחברות תעופה איראניות ברחבי העולם.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T11:44:58+00:00",
     "last_update_at": "2026-09-21T15:18:12+00:00",
     "what_is_not_verified": "היactual implementation והיקף האכיפה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_d23e9ec365e0dcb5",
       "url": "https://www.aljazeera.com/economy/2026/9/21/us-threatens-to-ground-iranian-airlines-worldwide-from-wednesday?traffic_source=rss",
       "published_at": "2026-09-21T15:18:12+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_d23e9ec365e0dcb5",
       "url": "https://www.iranintl.com/en/202609218925",
       "published_at": "2026-09-21T11:44:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09211634-04",
     "title": "שיחת טלפון בין טראמפ לנשיא תימן",
     "summary": "נשיא ארה\"ב שוחח עם נשיא תימן שביקש תמיכה צבאית נגד החות'ים, אך מקורות ציינו כי טראמפ לא נתן התחייבות צבאית ישירה.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T14:46:29+00:00",
     "last_update_at": "2026-09-21T14:46:29+00:00",
     "what_is_not_verified": "תכנו המלא של השיחה והתחייבויות עתידיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_four_sources_familiar_with_the_matter",
       "url": "https://www.al-monitor.com/originals/2026/09/trump-call-yemen-president-did-not-pledge-military-support-against-houthis-say",
       "published_at": "2026-09-21T14:46:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09211634-05",
     "title": "סגירת מרכז שפה צרפתי בטהראן",
     "summary": "שלטונות איראן סגרו מרכז תרבות צרפתי המקושר לשגרירות, מה שהוביל להחלטת צרפת לזמן את שגריר איראן.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T06:46:27+00:00",
     "last_update_at": "2026-09-21T06:46:27+00:00",
     "what_is_not_verified": "הסיבות הרשמיות והמלאות לסגירה מצד איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_2c187cec5274fa22",
       "url": "https://www.al-monitor.com/originals/2026/09/france-vows-response-after-iran-closes-language-centre-tehran",
       "published_at": "2026-09-21T06:46:27+00:00"
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
     "id": "IRAN-09211634-06",
     "title": "פגישתשרי הפנים של איראן ופקיסטן בטהראן",
     "summary": "שר הפנים של פקיסטן נפגש בטהראן עם שר הפנים של איראן לקידום קשרים דו-צדדיים והסכמים קודמים.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T12:15:36+00:00",
     "last_update_at": "2026-09-21T14:33:04+00:00",
     "what_is_not_verified": "אינו מפורט מעבר לקיומה של הפגישה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_2d3e85e9652f03cd",
       "url": "https://en.irna.ir/news/86270373/Iran-Pakistan-interior-ministers-meet-in-Tehran-to-advance-bilateral",
       "published_at": "2026-09-21T14:33:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_fd213899a4726183",
       "url": "https://en.irna.ir/news/86270274/Pakistani-interior-minister-in-Tehran-for-talks-with-Iranian",
       "published_at": "2026-09-21T12:15:36+00:00"
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
    "האם ארה\"ב אכן תפתח מחדש בקרוב במערכת הפצצות נגד איראן",
    "תוכניותיו המדויקות של הנשיא טראמפ לגבי הפעולה הצבאית האפשרית",
    "זהות הגורם ששיגר את הקלע לעבר המכלית במצר הורמוז"
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
     "value": 3.0115,
     "unit": "ILS",
     "change_pct": -0.86,
     "source_id": "src_ecb",
     "as_of": "2026-09-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארה\"ב",
     "declared": [
      "עצירת הפעילות האיראנית המזיקה והפעלת לחץ כלכלי (מבצע 'אאוטקאסט כלכלי')",
      "מניעת שימוש בחברות תעופה איראניות בינלאומיות"
     ],
     "inferred": [
      "שאיפה ללחוץ על הכלכלה האיראנית עד קצה כדי להביא לשינוי התנהגות או קריסה",
      "הימנעות זמנית מפתיחת חזיתות נוספות מחשש להסלמה רחבה מדי"
     ],
     "forecast": [
      "החמרת הסנקציות והגבלות התעופה נגד גופים איראניים",
      "שמירה על כוננות צבאית גבוהה במפרץ ובבסיסים האזוריים"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "מוכנות למלחמה ממושכת מול ארה\"ב",
      "תגובה נחרצת לכל תוקפנות ואזהרה כלפי מדינות המארחות נכסים אמריקניים"
     ],
     "inferred": [
      "ניצול מנופים אזוריים (כגון מצר הורמוז ושלוחות) כדי לגבות מחיר מיריביה",
      "הסתגלות למצוקה כלכלית קשה בעקבות הפגיעה במגזר האנרגיה והתמ\"ג"
     ],
     "forecast": [
      "המשך איום ושיבוש של נתיבי השיט במפרץ",
      "חיזוק קשרים דיפלומטיים חלופיים עם שכנות כמו פקיסטן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/economy/2026/9/21/us-threatens-to-ground-iranian-airlines-worldwide-from-wednesday?traffic_source=rss",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/france-vows-response-after-iran-closes-language-centre-tehran",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260921-projectile-hits-tanker-as-it-enters-the-strait-of-hormuz",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609218925",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86270274/Pakistani-interior-minister-in-Tehran-for-talks-with-Iranian",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lpg-tanker-hit-debris-unknown-projectile-hormuz",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1zkvhckmx",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T02:40:30+00:00",
  "changes": {
   "IRAN-09211634-01": {
    "kind": "new"
   },
   "IRAN-09211634-02": {
    "kind": "possible",
    "prev": "צבא איראן יירט כטב\"ם ביון אמריקאי במצר הורמוז",
    "score": 0.467
   },
   "IRAN-09211634-03": {
    "kind": "new"
   },
   "IRAN-09211634-04": {
    "kind": "new"
   },
   "IRAN-09211634-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "סגירת המרכז הצרפתי ללימוד שפות בטהרן וזימון השגריר",
    "score": 1.0
   },
   "IRAN-09211634-06": {
    "kind": "possible",
    "prev": "נסיעת שר החוץ של איראן לכינוס האו\"ם בניו יורק",
    "score": 0.633
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
  "draft": "drafts/north/2026-09-21T1641__north-202609211641.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-21T16:41:55+00:00",
   "window": {
    "from": "2026-09-20T16:41:55+00:00",
    "to": "2026-09-21T16:41:55+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609211641"
   },
   "summary": "בגזרה הצפונית, ישראל ממשיכה בפעילות צבאית הכוללת תקיפות והפגזות בדרום לבנון ובדרום סוריה (במחוזות דרעא וקוניטרה). במקביל, מתרחשים פיצוצים במתקנים צבאיים בסוריה, ולבנון מקיימת מגעים דיפלומטיים עם קטאר וארצות הברית לחיזוק צבא לבנון ויציבות האזור.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעיל - תקיפות ישראליות ופעילות צבאית לצד מגעים מדיניים"
    },
    {
     "name": "חזית סוריה",
     "status": "פעיל - תקיפות ישראליות בדרום המדינה ופיצוצים במחסני תחמושת צבאיים"
    }
   ],
   "events": [
    {
     "id": "NORTH-09211641-01",
     "title": "תקיפות באל-עייס בדרום אטרף",
     "summary": "סדרה של פיצוצים ארעה במחסן תחמושת של צבא סוריה באזור אל-עייס. ארבעה בני אדם נפצעו והכוחות סגרו את הדרכים המובילות לאתר.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T07:00:28+00:00",
     "last_update_at": "2026-09-21T15:16:03+00:00",
     "what_is_not_verified": "סיבת הפיצוצים אינה מאומתת והרשויות לא סיפקו הסבר מיידי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/21/poor-storage-or-sabotage-series-of-explosions-in-syria-raises-fears?traffic_source=rss",
       "published_at": "2026-09-21T15:16:03+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/recap-iran-says-it-prepared-prolonged-war",
       "published_at": "2026-09-21T14:00:05+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/09/explosions-rock-aleppo-no-fatalities-reported/",
       "published_at": "2026-09-21T10:50:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/syrian-ammunition-depot-explodes-fourth-such-blast-month",
       "published_at": "2026-09-21T10:46:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-shake-military-site-aleppo-least-four-injured",
       "published_at": "2026-09-21T10:42:15+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syrian-ammunition-depot-explodes-fourth-such-blast-month",
       "published_at": "2026-09-21T07:05:01+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/958845/syrian-ammunition-depot-explodes-in-fourth-such-blast-this-month/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958845",
       "published_at": "2026-09-21T07:00:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09211641-02",
     "title": "תקיפות ופעילות צבאית ישראלית בדרום לבנון",
     "summary": "הפצצות ותקיפות ארטילריה של צבא ישראל בוצעו במספר מוקדים בדרום לבנון ובכלל זה במרכבה, נבטיה אל-פוקא, זוכטאר א-שרקיה ואזורים נוספים.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T10:09:48+00:00",
     "last_update_at": "2026-09-21T14:23:54+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכל אתר ואתר לא פורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129447/",
       "published_at": "2026-09-21T14:23:54+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/scorched-earth-how-israel-remaking-south-lebanon",
       "published_at": "2026-09-21T13:49:22+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-artillery-fire-hit-several-areas-in-southern-lebanon/4063210",
       "published_at": "2026-09-21T10:26:57+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-launch-overnight-air-raids-across-southern-lebanon",
       "published_at": "2026-09-21T10:09:48+00:00"
      }
     ],
     "places": [
      {
       "name": "מרכבה, לבנון",
       "lat": 33.2314,
       "lon": 35.5177
      },
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      }
     ]
    },
    {
     "id": "NORTH-09211641-03",
     "title": "תקיפות ופלישות צבא ישראל בדרום סוריה",
     "summary": "כוחות צבא ישראל ביצעו הפגזות ארטילריה וירי מקלעים לעבר שטחים בדרום סוריה, כולל באזור דרעא וקוניטרה, וכן פשיטה לאזור רסם אל-חלבי.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T08:36:20+00:00",
     "last_update_at": "2026-09-21T14:00:22+00:00",
     "what_is_not_verified": "האם היו נפגעים נוספים מעבר לפגיעה בעזים ובאדמות חקלאיות לא דווח באופן מלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/09/israel-escalates-attacks-in-daraa-and-quneitra/",
       "published_at": "2026-09-21T14:00:22+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129432/",
       "published_at": "2026-09-21T13:37:57+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israel-shells-areas-in-syria-s-daraa-countryside-with-artillery-machine-gun-fire/4063066",
       "published_at": "2026-09-21T08:36:20+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-09211641-04",
     "title": "הסכם שיתוף פעולה בין סוריה לאוקראינה בתחום פינוי מוקשים",
     "summary": "סוריה ואוקראינה חתמו על הסכם שיתוף פעולה בנושא פינוי מוקשים הומניטרי והתמודדות עם שרידי מלחמה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T12:23:19+00:00",
     "last_update_at": "2026-09-21T12:23:19+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים לביצוע המבצעי של ההסכם טרם פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_dd03e2a59413dcdc",
       "url": "https://english.enabbaladi.net/archives/2026/09/syria-ukraine-cooperate-on-humanitarian-demining/",
       "published_at": "2026-09-21T12:23:19+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הסיבה המדויקת לסדרת הפיצוצים במחסני התחמושת בסוריה",
    "כוונותיה העתידיות של ישראל בנוגע להרחבת הפעילות הקרקעית או השליטה ברכסים בדרום לבנון"
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
     "value": 3.0115,
     "unit": "ILS",
     "change_pct": -0.86,
     "source_id": "src_ecb",
     "as_of": "2026-09-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות ופעילות של חיזבאללה בדרום לבנון",
      "אכיפת ריבונות והגנה על גבולות המדינה"
     ],
     "inferred": [
      "המשך אסטרטגיית 'אדמה חרוכה' והשמדת תשתיות צבאיות בדרום לבנון ובדרום סוריה"
     ],
     "forecast": [
      "המשך התקיפות עד להשגת הסדר או שינוי מציאות ביטחונית בשטח"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "חיזוק סמכות המדינה והבטחת שחבר כלי הנשק יישארו בלעדית בידי המדינה",
      "תמיכה בהמשך הסיוע לצבא לבנון ובנוכחות בינלאומית בדרום המדינה"
     ],
     "inferred": [
      "ניסיון לבלום את ההשלכות ההרסניות של הלחימה באמצעות דיפלומטיה אזורית ובינלאומית"
     ],
     "forecast": [
      "המשך פנייה לגורמים בינלאומיים וערביים לסיוע בשיקום ובמניעת וואקום ביטחוני"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "שיקום הצבא והתמודדות עם שרידי מלחמה ומוקשים באמצעות שיתופי פעולה בינלאומיים"
     ],
     "inferred": [
      "ניסיון להתמודד עם אובדן שליטה או תקלות במחסני אמל\"ח על רקע הפיצוצים החוזרים ונשנים"
     ],
     "forecast": [
      "המשך מאמצי פינוי מוקשים ושיקום תשתיות אזרחיות וצבאיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/21/poor-storage-or-sabotage-series-of-explosions-in-syria-raises-fears?traffic_source=rss",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129432/",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/syrian-ammunition-depot-explodes-fourth-such-blast-month",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-shells-areas-in-syria-s-daraa-countryside-with-artillery-machine-gun-fire/4063066",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/syria-ukraine-cooperate-on-humanitarian-demining/",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/958845/syrian-ammunition-depot-explodes-in-fourth-such-blast-this-month/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958845",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-launch-overnight-air-raids-across-southern-lebanon",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/scorched-earth-how-israel-remaking-south-lebanon",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T02:49:06+00:00",
  "changes": {
   "NORTH-09211641-01": {
    "kind": "new"
   },
   "NORTH-09211641-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ירי ארטילרי ופעילות צבאית דרום לבנון",
    "score": 0.65
   },
   "NORTH-09211641-03": {
    "kind": "possible",
    "prev": "פיצוץ מוצב צבאי בדרום סוריה ובחרמון",
    "score": 0.467
   },
   "NORTH-09211641-04": {
    "kind": "new"
   }
  }
 }
};
