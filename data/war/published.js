/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-11T1002__yemen-claude-202610111002.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-11T10:02:37+00:00",
   "window": {
    "from": "2026-10-10T10:02:37+00:00",
    "to": "2026-10-11T10:02:37+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "yemen-claude-202610111002"
   },
   "summary": "תקיפת טיל של החות'ים על נמל התעופה המרכזי בריאד הרגה 12 בני אדם ופצעה יותר מ-300, והיא הקטלנית ביותר בסעודיה מאז 2015. סעודיה מאיימת בתגובה חריפה, ארה\"ב שוקלת להצטרף לתקיפות, והחות'ים מזהירים מפני שימוש בנמלי התעופה בממלכה. במקביל, כוחות הממשלה התימנית מתקדמים באזור באב אל-מנדב, והמצור החות'י על תעז מחריף את המשבר ההומניטרי.",
   "fronts": [
    {
     "name": "תקיפות החות'ים על סעודיה",
     "status": "נמל התעופה בריאד נפגע ונשאר סגור; החות'ים מאיימים בהמשך התקיפות."
    },
    {
     "name": "תגובה סעודית ואמריקאית",
     "status": "ריאד הבטיחה תגובה, ולפי דיווחים כבר תקפה מטרות בתימן; וושינגטון בוחנת הצטרפות."
    },
    {
     "name": "באב אל-מנדב",
     "status": "כוחות הממשלה התימנית מדווחים על התקדמות ועל אבדות כבדות לחות'ים, אך המצר טרם נתפס."
    },
    {
     "name": "תעז",
     "status": "המצור החות'י גורם למחסור בדלק ובתרופות, ובתי החולים בעיר קרובים לקריסה."
    }
   ],
   "events": [
    {
     "id": "YEMEN-10111002-01",
     "title": "12 הרוגים ויותר מ-300 פצועים בתקיפה על נמל התעופה בריאד",
     "summary": "טיל פגע בטרמינל הנוסעים בנמל התעופה המלך ח'אלד בבירת סעודיה. בין ההרוגים אזרחים מסעודיה, בנגלדש, ארה\"ב, מצרים, ירדן, סוריה, סודאן ופלסטין. זו התקיפה הקטלנית ביותר בממלכה מאז 2015.",
     "axis": "תקיפות החות'ים על סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T15:46:32+00:00",
     "last_update_at": "2026-10-11T08:41:30+00:00",
     "what_is_not_verified": "החות'ים לא הודו רשמית באחריות לפי חלק מהדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_2c13e9593dc6f977",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-strike-saudi-airport-kills-12-worst-attack-kingdom-decade",
       "published_at": "2026-10-10T15:46:32+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_2c13e9593dc6f977",
       "url": "https://www.bbc.co.uk/news/articles/cw33x4y8k82no?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T08:41:30+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_2c13e9593dc6f977",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/11/11-10-reported-latest-attack-on-riyadh-king-khalid-airport-houthis?traffic_source=rss",
       "published_at": "2026-10-11T01:02:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2c13e9593dc6f977",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/attack-riyadh-airport-leaves-12-dead-more-300-injured",
       "published_at": "2026-10-11T08:24:44+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_2c13e9593dc6f977",
       "url": "https://www.ynet.co.il/news/article/bknarcwiml",
       "published_at": "2026-10-10T21:53:15+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10111002-02",
     "title": "סעודיה מאיימת בתגובה החלטית; טראמפ שוקל להצטרף",
     "summary": "ריאד הבטיחה להגיב בכוח נגד החות'ים, ולפי דיווח בישראל כבר תקפה מטרות בתימן. הנשיא טראמפ אמר שארה\"ב עשויה להשתתף בתקיפות.",
     "axis": "תגובה סעודית ואמריקאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T01:59:02+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T01:59:02+00:00",
     "last_update_at": "2026-10-11T08:22:21+00:00",
     "what_is_not_verified": "היקף התקיפות הסעודיות ומטרותיהן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261011-riyadh-airport-strike-kills-12-saudi-arabia-threatens-decisive-response",
       "published_at": "2026-10-11T06:21:50+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/11/10-10-clip-trump-weighs-joining-saudi-strikes-on-houthis-us?traffic_source=rss",
       "published_at": "2026-10-11T01:59:02+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/riyadh-vows-response-airport-attack-us-weighs-involvement",
       "published_at": "2026-10-11T08:22:21+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594839",
       "published_at": "2026-10-11T05:55:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10111002-03",
     "title": "החות'ים מזהירים מפני שימוש בנמלי תעופה בסעודיה",
     "summary": "החות'ים חזרו על אזהרתם לחברות תעופה, לעובדים ולנוסעים, והבהירו שימשיכו לתקוף. סגירת נמל התעופה בריאד הוארכה, וחברת התעופה הכוויתית ג'זירה הודיעה על שיבושים.",
     "axis": "תקיפות החות'ים על סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T05:04:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T05:04:26+00:00",
     "last_update_at": "2026-10-11T08:22:44+00:00",
     "what_is_not_verified": "משך הסגירה לא פורסם רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-warn-against-using-saudi-airports-riyadh-closure-extended",
       "published_at": "2026-10-11T08:22:20+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/skdra3uoge",
       "published_at": "2026-10-11T08:22:44+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261011-live-saudi-arabia-vows-decisive-response-after-deadly-houthi-strike-on-riyadh-airport",
       "published_at": "2026-10-11T05:04:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/kuwaits-jazeera-airways-says-riyadh-flights-affected-temporary",
       "published_at": "2026-10-11T06:04:22+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10111002-04",
     "title": "הלימודים בסעודיה עברו ללמידה מרחוק",
     "summary": "בעקבות התקיפה הנחה משרד החינוך הסעודי לקיים את הלימודים בבתי הספר באופן מקוון.",
     "axis": "תקיפות החות'ים על סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T09:46:38+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T09:46:38+00:00",
     "last_update_at": "2026-10-11T09:46:38+00:00",
     "what_is_not_verified": "לא ידוע אם ההנחיה חלה על כל הממלכה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131719",
       "published_at": "2026-10-11T09:46:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10111002-05",
     "title": "גינוי בינלאומי לתקיפה בריאד",
     "summary": "מדינות רבות גינו את התקיפה, ופקיסטן חזרה על מחויבותה לריבונות ולביטחון של סעודיה.",
     "axis": "תגובה סעודית ואמריקאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T02:12:07+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T02:12:07+00:00",
     "last_update_at": "2026-10-11T04:07:09+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/11/world-condemns-deadly-houthi-attack-on-saudi-arabias-riyadh-airport?traffic_source=rss",
       "published_at": "2026-10-11T02:12:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pakistan-reaffirms-commitment-saudi-arabias-sovereignty-after-airport",
       "published_at": "2026-10-11T04:07:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10111002-06",
     "title": "כוחות הממשלה התימנית מתקדמים ליד באב אל-מנדב",
     "summary": "הצבא התימני הנתמך בידי סעודיה מסר שכוחותיו מתקדמים נגד החות'ים סביב המצר, אך עוד לא השתלטו עליו. לטענתו, 1,150 לוחמים חות'ים נהרגו ביממה.",
     "axis": "באב אל-מנדב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T11:40:28+00:00",
     "last_update_at": "2026-10-10T22:00:08+00:00",
     "what_is_not_verified": "מספר האבדות החות'יות לא אומת ונראה מוגזם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-say-advancing-against-houthis-around-bab-al-mandeb",
       "published_at": "2026-10-10T11:40:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131696",
       "published_at": "2026-10-10T22:00:08+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-מנדב",
       "lat": 12.5744,
       "lon": 43.3128
      }
     ]
    },
    {
     "id": "YEMEN-10111002-07",
     "title": "בתי החולים בתעז קרובים לקריסה בגלל המצור החות'י",
     "summary": "לפי הממשלה התימנית, הדלק, התרופות והציוד הרפואי בתעז אוזלים, וארגוני סיוע מזהירים מהחרפת משבר המזון במדינה.",
     "axis": "תעז",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T03:41:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T03:41:58+00:00",
     "last_update_at": "2026-10-11T06:34:05+00:00",
     "what_is_not_verified": "היקף המחסור מבוסס על נתוני הממשלה התימנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/11/taiz-hospitals-near-collapse-as-houthis-tighten-siege-yemen-government?traffic_source=rss",
       "published_at": "2026-10-11T03:41:58+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/escalating-fighting-in-yemen-worsens-food-security-crisis",
       "published_at": "2026-10-11T06:34:05+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    }
   ],
   "not_verified": [
    "מספר האבדות החות'יות שמפרסמים כוחות הממשלה",
    "היקף התקיפות הסעודיות בתגובה",
    "משך סגירת נמל התעופה בריאד"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "להמשיך לתקוף את סעודיה",
      "להרתיע חברות תעופה מלפעול בממלכה"
     ],
     "inferred": [
      "לבלום את המתקפה הקרקעית של הממשלה בתימן באמצעות לחץ על ריאד"
     ],
     "forecast": [
      "תקיפות נוספות על יעדים אזרחיים בסעודיה אפשריות"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "להגיב בתקיפות החלטיות נגד החות'ים"
     ],
     "inferred": [
      "לגייס מעורבות אמריקאית ישירה"
     ],
     "forecast": [
      "הסלמה בתקיפות האוויריות בתימן בימים הקרובים"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "לבחון הצטרפות לתקיפות נגד החות'ים"
     ],
     "inferred": [
      "לקשור את המערכה מול החות'ים ללחץ על איראן"
     ],
     "forecast": [
      "החלטה על מעורבות צבאית אפשרית בטווח הקרוב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/11/taiz-hospitals-near-collapse-as-houthis-tighten-siege-yemen-government?traffic_source=rss",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/houthi-strike-saudi-airport-kills-12-worst-attack-kingdom-decade",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cw33x4y8k82no?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/escalating-fighting-in-yemen-worsens-food-security-crisis",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21594839",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pakistan-reaffirms-commitment-saudi-arabias-sovereignty-after-airport",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-say-advancing-against-houthis-around-bab-al-mandeb",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131696",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skdra3uoge",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-11T06:21:37+00:00",
  "changes": {
   "YEMEN-10111002-01": {
    "kind": "new"
   },
   "YEMEN-10111002-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת נגד ותקיפות תגובה של הקואליציה בהובלת סעודיה בתימן",
    "score": 1.0
   },
   "YEMEN-10111002-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת טיל בנמל התעופה הבינלאומי בריאד",
    "score": 1.0
   },
   "YEMEN-10111002-04": {
    "kind": "new"
   },
   "YEMEN-10111002-05": {
    "kind": "new"
   },
   "YEMEN-10111002-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התקדמות כוחות ממשלת תימן וקרבות באזור מצר באב אל-מנדב",
    "score": 1.0
   },
   "YEMEN-10111002-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "החרפת המצור על תעז וסכנת קריסה במערכת הבריאות",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-11T1002__iran-claude-202610111002.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-11T10:02:37+00:00",
   "window": {
    "from": "2026-10-10T10:02:37+00:00",
    "to": "2026-10-11T10:02:37+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "iran-claude-202610111002"
   },
   "summary": "המצור הימי האמריקאי על איראן נמשך ומחריף: מטוס קרב השבית ספינת מטען במפרץ עומאן, ופיקוד המרכז מסר שמאז יולי הוסטו 135 כלי שיט והושבתו ארבעה. בוושינגטון שוקלים לחדש את התקיפות על איראן אחרי התקיפה הקטלנית של החות'ים בריאד, בעוד שבישראל מעריכים שלא תהיה תקיפה יזומה לפני הבחירות. טהראן מגיבה בעיקר בזירה הדיפלומטית והמשפטית, ומתמודדת עם לחץ כלכלי גובר על נתיבי הסחר שלה.",
   "fronts": [
    {
     "name": "המצור הימי",
     "status": "ארה\"ב אוכפת מצור על ספינות שיוצאות מאיראן או מגיעות אליה, כולל ירי לעבר ספינות שלא מצייתות; 19 מכליות איראניות תקועות מול סרי לנקה."
    },
    {
     "name": "איום בחידוש התקיפות",
     "status": "הממשל האמריקאי בוחן חידוש תקיפות על איראן לצד תקיפות על החות'ים; לפי דיווח בישראל, ארה\"ב לחצה על ישראל לתקוף לבדה והמהלך נבלם."
    },
    {
     "name": "לחץ כלכלי",
     "status": "עלויות ההובלה מטורקיה לאיראן זינקו פי חמישה בחודשיים, וטהראן מרחיבה צעדי פיקוח מחירים לכל המדינה."
    },
    {
     "name": "דיפלומטיה ומשפט",
     "status": "איראן מקדמת תביעות בעקבות התקיפה בבית הספר במינאב, ורוסיה העבירה לטראמפ את עמדת טהראן לגבי הסדר אפשרי."
    }
   ],
   "events": [
    {
     "id": "IRAN-10111002-01",
     "title": "מטוס קרב אמריקאי השבית ספינת מטען שניסתה לעקוף את המצור",
     "summary": "פיקוד המרכז האמריקאי הודיע שמטוס קרב פגע בירכתי ספינת מטען שהפליגה מנמל איראני במפרץ עומאן, אחרי שהצוות התעלם מאזהרות. לפי ההודעה מערכת ההנעה הושבתה והצוות לא נפגע. רשות הסחר הימי הבריטית בודקת את האירוע.",
     "axis": "המצור הימי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T01:46:41+00:00",
     "last_update_at": "2026-10-11T05:45:01+00:00",
     "what_is_not_verified": "מצב הצוות והנזק לספינה מבוססים על ההודעה האמריקאית בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-military-says-it-disabled-cargo-vessel-trying-run-iran-blockade",
       "published_at": "2026-10-11T01:46:41+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/11/us-forces-disable-ship-attempting-to-run-iran-blockade-in-gulf-of-oman?traffic_source=rss",
       "published_at": "2026-10-11T03:13:53+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-probes-gulf-oman-incident-after-centcom-strike",
       "published_at": "2026-10-11T03:47:27+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131703",
       "published_at": "2026-10-11T05:45:01+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1aqod00szx",
       "published_at": "2026-10-11T03:43:48+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ עומאן",
       "lat": 24.2138,
       "lon": 58.9846
      }
     ]
    },
    {
     "id": "IRAN-10111002-02",
     "title": "פיקוד המרכז: 135 ספינות הוסטו וארבע הושבתו מאז יולי",
     "summary": "לפי נתוני פיקוד המרכז האמריקאי, מאז שהמצור הימי על איראן חודש ב-14 ביולי הוסטו 135 כלי שיט מסחריים מנתיבם וארבעה הושבתו בכוח.",
     "axis": "המצור הימי",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T01:34:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T01:34:34+00:00",
     "last_update_at": "2026-10-11T01:34:34+00:00",
     "what_is_not_verified": "הנתונים מגיעים מהצבא האמריקאי ולא נבדקו באופן עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/centcom-says-four-ships-disabled-135-redirected-14-july",
       "published_at": "2026-10-11T01:34:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10111002-03",
     "title": "סרי לנקה לא תסייע ל-19 מכליות איראניות התקועות מול חופיה",
     "summary": "ממשלת סרי לנקה הבהירה שבשלב זה לא תעניק סיוע למכליות האיראניות שעוגנות מול חופיה, למרות דיווחים על מחסור במזון, מים ודלק על סיפונן.",
     "axis": "המצור הימי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T08:25:09+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T08:25:09+00:00",
     "last_update_at": "2026-10-11T08:25:09+00:00",
     "what_is_not_verified": "מצב הצוותים על המכליות לא אומת ממקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131715",
       "published_at": "2026-10-11T08:25:09+00:00"
      }
     ],
     "places": [
      {
       "name": "קולומבו",
       "lat": 6.9389,
       "lon": 79.8542
      }
     ]
    },
    {
     "id": "IRAN-10111002-04",
     "title": "ארה\"ב שוקלת לחדש תקיפות על איראן",
     "summary": "אחרי התקיפה הקטלנית על נמל התעופה בריאד, הנשיא טראמפ העלה אפשרות להצטרף לתקיפות נגד החות'ים וגם לחדש את התקיפות על איראן עצמה.",
     "axis": "איום בחידוש התקיפות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:13+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T00:00:13+00:00",
     "last_update_at": "2026-10-11T04:19:54+00:00",
     "what_is_not_verified": "לא התקבלה החלטה רשמית; מדובר באמירות ובדיונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610118579",
       "published_at": "2026-10-11T04:19:54+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/11/iran-war-live-12-killed-in-riyadh-us-weighs-joining-fight-against-houthis?traffic_source=rss",
       "published_at": "2026-10-11T00:00:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10111002-05",
     "title": "בכיר ישראלי: לא צפויה תקיפה יזומה באיראן לפני הבחירות",
     "summary": "גורם ישראלי בכיר העריך שישראל לא תפתח במהלך צבאי חדש נגד איראן לפני הבחירות, כל עוד טהראן לא תבצע צעד חריג.",
     "axis": "איום בחידוש התקיפות",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T17:38:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T17:38:08+00:00",
     "last_update_at": "2026-10-10T17:38:08+00:00",
     "what_is_not_verified": "הערכה של גורם עלום, לא הודעה רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956963",
       "published_at": "2026-10-10T17:38:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10111002-06",
     "title": "דיווח: ארה\"ב לחצה על ישראל לתקוף באיראן לבדה, והרמטכ\"ל בלם",
     "summary": "לפי דיווח בוואלה, בשיחות בין הצדדים בשבועיים האחרונים ביקשו האמריקאים שישראל תתקוף באיראן בלי שילוב כוחות אמריקאיים, והמהלך נעצר בהתנגדות הרמטכ\"ל.",
     "axis": "איום בחידוש התקיפות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T12:55:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T12:55:57+00:00",
     "last_update_at": "2026-10-10T12:55:57+00:00",
     "what_is_not_verified": "הדיווח מבוסס על מקורות עלומים ולא אושר רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956914",
       "published_at": "2026-10-10T12:55:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10111002-07",
     "title": "עלות ההובלה מטורקיה לאיראן זינקה פי חמישה",
     "summary": "לפי כלי תקשורת איראניים, מחיר הובלת סחורה מנמלי טורקיה לאיראן עלה לכ-8,000 דולר תוך פחות מחודשיים, על רקע לחץ אמריקאי על אנקרה לחסום את נתיבי הסחר היבשתיים.",
     "axis": "לחץ כלכלי",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T02:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T02:00:00+00:00",
     "last_update_at": "2026-10-11T02:00:00+00:00",
     "what_is_not_verified": "הנתון מבוסס על דיווחים בתקשורת האיראנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610114328",
       "published_at": "2026-10-11T02:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10111002-08",
     "title": "איראן מקדמת הליכים משפטיים בעקבות התקיפה במינאב",
     "summary": "סגן שר החוץ האיראני אמר שטהראן פועלת בערכאות בחו\"ל נגד האחראים לתקיפה על בית הספר במינאב, וסגנית הנשיא קראה לעולם לא לשכוח את האירוע.",
     "axis": "דיפלומטיה ומשפט",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T08:55:41+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T08:55:41+00:00",
     "last_update_at": "2026-10-11T09:24:02+00:00",
     "what_is_not_verified": "לא פורט באילו ערכאות ונגד מי יוגשו התביעות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_d2f9d42cd168f70d",
       "url": "https://en.irna.ir/news/86289241/Iran-pursuing-legal-action-over-Minab-school-attack-Deputy-FM",
       "published_at": "2026-10-11T08:55:41+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_96ac49bfd5fa4cf8",
       "url": "https://en.irna.ir/news/86289337/VP-World-must-not-forget-Minab-incident",
       "published_at": "2026-10-11T09:24:02+00:00"
      }
     ],
     "places": [
      {
       "name": "מינאב",
       "lat": 27.1506,
       "lon": 57.0753
      }
     ]
    },
    {
     "id": "IRAN-10111002-09",
     "title": "הקרמלין: פוטין העביר לטראמפ את עמדת איראן לגבי הסדר",
     "summary": "בשיחה בין שני הנשיאים מסר פוטין, בתיאום עם טהראן, את עמדתה בנוגע לאפשרות להגיע להסדר.",
     "axis": "דיפלומטיה ומשפט",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T11:42:53+00:00",
     "last_update_at": "2026-10-10T12:30:21+00:00",
     "what_is_not_verified": "תוכן העמדה האיראנית לא פורסם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/putin-told-trump-about-irans-position-peace-deal-kremlin",
       "published_at": "2026-10-10T12:30:21+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48415",
       "published_at": "2026-10-10T11:42:53+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הנזק המדויק לספינה שהושבתה במפרץ עומאן ומצב הצוות",
    "הדיווח שארה\"ב דרשה מישראל לתקוף את איראן לבדה מבוסס על מקורות עלומים",
    "תוכן העמדה האיראנית שהועברה דרך פוטין לא פורסם"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארה\"ב",
     "declared": [
      "לאכוף את המצור הימי על איראן",
      "לשקול הצטרפות לתקיפות נגד החות'ים"
     ],
     "inferred": [
      "להגביר לחץ כלכלי כדי לכפות הסדר בלי לחדש מלחמה מלאה"
     ],
     "forecast": [
      "השבתות נוספות של ספינות צפויות; חידוש תקיפות על איראן תלוי בהתפתחות מול החות'ים"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "לפעול משפטית נגד האחראים לתקיפה במינאב",
      "לשמור על אחדות לאומית מול הלחץ"
     ],
     "inferred": [
      "להימנע מהסלמה ישירה ולהישען על שלוחות ועל תיווך רוסי"
     ],
     "forecast": [
      "המשך מאמצים לעקוף את המצור דרך נתיבים יבשתיים, למרות העלות הגבוהה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "להימנע מפתיחת מהלך צבאי חדש נגד איראן לפני הבחירות, אלא אם תהיה פרובוקציה"
     ],
     "forecast": [
      "סבירות נמוכה לתקיפה ישראלית יזומה בשבועות הקרובים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/11/iran-war-live-12-killed-in-riyadh-us-weighs-joining-fight-against-houthis?traffic_source=rss",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/putin-told-trump-about-irans-position-peace-deal-kremlin",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610114328",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86289337/VP-World-must-not-forget-Minab-incident",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/centcom-says-four-ships-disabled-135-redirected-14-july",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131715",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48415",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956914",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1aqod00szx",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-10T23:40:27+00:00",
  "changes": {
   "IRAN-10111002-01": {
    "kind": "new"
   },
   "IRAN-10111002-02": {
    "kind": "new"
   },
   "IRAN-10111002-03": {
    "kind": "new"
   },
   "IRAN-10111002-04": {
    "kind": "new"
   },
   "IRAN-10111002-05": {
    "kind": "new"
   },
   "IRAN-10111002-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מגעים בין ארה\"ב לישראל על תקיפה באיראן",
    "score": 1.0
   },
   "IRAN-10111002-07": {
    "kind": "new"
   },
   "IRAN-10111002-08": {
    "kind": "new"
   },
   "IRAN-10111002-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "העברת מסר מאיראן לארה\"ב בנושא הסדר עימות",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-11T1002__ukraine-claude-202610111002.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-11T10:02:37+00:00",
   "window": {
    "from": "2026-10-10T10:02:37+00:00",
    "to": "2026-10-11T10:02:37+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "ukraine-claude-202610111002"
   },
   "summary": "רוסיה ממשיכה במתקפות כבדות על ערים אוקראיניות ועל תשתיות אנרגיה: הפצצה בזפוריז'יה הרגה לפחות 20 בני אדם, ובלילה שוגרו 116 רחפנים. אוקראינה ממשיכה לתקוף מתקני אנרגיה ונתונים ברוסיה. ברקע, עסקת הסולר בין טראמפ לפוטין והקריאה של טראמפ להחליף את זלנסקי יוצרות משבר חריף בין וושינגטון לקייב, וחברי קונגרס משתי המפלגות מתנגדים להקלת הסנקציות.",
   "fronts": [
    {
     "name": "החזית הקרקעית",
     "status": "221 היתקלויות ביממה, עם הלחימה הקשה ביותר באזור פוקרובסק והוליאיפולה; פינוי ילדים מורחב בקרמטורסק."
    },
    {
     "name": "מתקפות על העורף",
     "status": "הפצצות על זפוריז'יה, דניפרופטרובסק ומחוז קייב, עם הרוגים ופגיעה בתשתיות."
    },
    {
     "name": "תקיפות אוקראיניות ברוסיה",
     "status": "תקיפות על מרכזי נתונים, מתקני אנרגיה ויחידות לוגיסטיות; הרוג במחוז בריאנסק לפי המושל הרוסי."
    },
    {
     "name": "וושינגטון–קייב",
     "status": "עסקת הסולר עם רוסיה והקריאה להחלפת זלנסקי מעוררות התנגדות בקייב ובקונגרס."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10111002-01",
     "title": "לפחות 20 הרוגים בהפצצה רוסית על זפוריז'יה",
     "summary": "פצצות דאייה רוסיות פגעו בזפוריז'יה והרגו לפחות 20 בני אדם, בהם ילדים. זלנסקי קשר את המתקפה לעסקת הסולר שנחתמה בין ארה\"ב לרוסיה.",
     "axis": "מתקפות על העורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T20:51:12+00:00",
     "last_update_at": "2026-10-10T20:51:12+00:00",
     "what_is_not_verified": "מספר ההרוגים עשוי להשתנות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cwvgdpv642g5o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-10T20:51:12+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10111002-02",
     "title": "הרוגים ופצועים במתקפות ברחבי אוקראינה; מחסנים עלו באש ליד קייב",
     "summary": "ביממה האחרונה נהרגו לפחות שניים ונפצעו כ-25 ברחבי המדינה. במחוז קייב נפגעו 37 מבנים, ומחסנים של חברה תעשייתית עלו באש באזור בוצ'ה. במחוז דניפרופטרובסק נהרג ילד.",
     "axis": "מתקפות על העורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T22:51:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T22:51:10+00:00",
     "last_update_at": "2026-10-11T08:02:00+00:00",
     "what_is_not_verified": "מספרי הנפגעים מבוססים על הרשויות המקומיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-attacks-kill-at-least-2-injure-25-across-ukraine-as-moscow-targets-energy-infrastructure-around-kyiv/",
       "published_at": "2026-10-11T08:02:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173194-russian-attacks-in-kyiv-region-leave-four-people-injured-over-past-day-37-sites-damaged.html",
       "published_at": "2026-10-11T07:39:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057430/",
       "published_at": "2026-10-11T07:42:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/11-year-old-boy-killed-five-injured-by-russian-drone-attack-in-dnipropetrovsk-oblast/",
       "published_at": "2026-10-10T22:51:10+00:00"
      }
     ],
     "places": [
      {
       "name": "בוצ'ה",
       "lat": 50.5503,
       "lon": 30.2107
      }
     ]
    },
    {
     "id": "UKRAINE-10111002-03",
     "title": "94 מתוך 116 רחפנים יורטו בלילה",
     "summary": "חיל האוויר האוקראיני מסר שמערכות ההגנה הפילו או שיבשו 94 מתוך 116 רחפנים ששוגרו מאז ערב שבת.",
     "axis": "מתקפות על העורף",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T06:50:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T06:50:00+00:00",
     "last_update_at": "2026-10-11T06:50:00+00:00",
     "what_is_not_verified": "הנתונים של חיל האוויר האוקראיני לא נבדקו באופן עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173175-ukraines-air-defenses-down-94-of-116-russian-drones-launched-against-ukraine-overnight.html",
       "published_at": "2026-10-11T06:50:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10111002-04",
     "title": "רחפן רוסי פגע באמבולנס במחוז סומי",
     "summary": "נהג ופרמדיק נפצעו כשרחפן רוסי תקף רכב חירום רפואי במחוז סומי.",
     "axis": "מתקפות על העורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T08:59:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T08:59:00+00:00",
     "last_update_at": "2026-10-11T08:59:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173221-russian-drone-hits-ambulance-in-sumy-region-injuring-two-medical-workers.html",
       "published_at": "2026-10-11T08:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סומי",
       "lat": 50.912,
       "lon": 34.8028
      }
     ]
    },
    {
     "id": "UKRAINE-10111002-05",
     "title": "221 היתקלויות בחזית; הלחימה הקשה ביותר ליד פוקרובסק",
     "summary": "המטה הכללי האוקראיני דיווח על 221 קרבות ביממה, עם הלחימה העזה ביותר בכיווני פוקרובסק והוליאיפולה. בקרמטורסק הורחב האזור שממנו חובה לפנות ילדים.",
     "axis": "החזית הקרקעית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T06:10:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T06:10:00+00:00",
     "last_update_at": "2026-10-11T08:51:00+00:00",
     "what_is_not_verified": "הנתונים מבוססים על המטה הכללי האוקראיני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173168-war-update-221-clashes-on-front-line-over-past-day-fiercest-fighting-in-pokrovsk-and-huliaipole-sectors.html",
       "published_at": "2026-10-11T06:10:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057437/",
       "published_at": "2026-10-11T08:51:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פוקרובסק",
       "lat": 48.2771,
       "lon": 37.1772
      },
      {
       "name": "קרמטורסק",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-10111002-06",
     "title": "מרכז נתונים שלישי של יאנדקס הושבת אחרי תקיפת רחפנים",
     "summary": "מרכז הנתונים של החברה בעיר ולדימיר הפסיק לפעול אחרי תקיפה אוקראינית. יאנדקס עדכנה את תנאי השימוש שלה כך שתקיפות רחפנים וטילים נחשבות לכוח עליון.",
     "axis": "תקיפות אוקראיניות ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T02:10:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T02:10:39+00:00",
     "last_update_at": "2026-10-11T03:32:31+00:00",
     "what_is_not_verified": "היקף הנזק במרכז הנתונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/third-yandex-data-center-in-russia-shut-down-following-reported-drone-attack/",
       "published_at": "2026-10-11T03:32:31+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48438",
       "published_at": "2026-10-11T02:10:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ולדימיר",
       "lat": 56.1289,
       "lon": 40.4075
      }
     ]
    },
    {
     "id": "UKRAINE-10111002-07",
     "title": "אוקראינה: תקפנו יחידת תיקונים ומחסנים רוסיים",
     "summary": "כוחות ההגנה האוקראיניים מסרו שתקפו במהלך הלילה יחידת תיקונים צבאית, מחסני אספקה וריכוזי כוחות רוסיים. לפי מושל בריאנסק הרוסי, אזרח נהרג מתקיפת רחפן במחוז.",
     "axis": "תקיפות אוקראיניות ברוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T07:15:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T07:15:06+00:00",
     "last_update_at": "2026-10-11T08:38:00+00:00",
     "what_is_not_verified": "תוצאות התקיפות לא אומתו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173219-ukrainian-defense-forces-strike-russian-repair-unit-supply-depots-and-troop-concentration-areas.html",
       "published_at": "2026-10-11T08:38:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2200471",
       "published_at": "2026-10-11T07:15:06+00:00"
      }
     ],
     "places": [
      {
       "name": "בריאנסק",
       "lat": 53.2789,
       "lon": 34.3659
      }
     ]
    },
    {
     "id": "UKRAINE-10111002-08",
     "title": "טראמפ: אוקראינה צריכה מנהיג חדש",
     "summary": "יום אחרי שהכריז על עסקה לרכישת סולר רוסי, אמר טראמפ שזלנסקי לא עשה מספיק כדי לסיים את המלחמה ושאוקראינה צריכה נשיא אחר. שר החוץ האוקראיני השיב שלזלנסקי יש תמיכה ציבורית.",
     "axis": "וושינגטון–קייב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T17:32:36+00:00",
     "last_update_at": "2026-10-11T01:47:55+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-russia-strikes-war-trump-diesel-deal-zelenskyy",
       "published_at": "2026-10-10T20:42:55+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/10/trump-calls-on-ukraine-to-replace-zelensky",
       "published_at": "2026-10-10T17:32:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/11/ukraine-war-briefing-zelenskyy-support-people-trump-call-new-president",
       "published_at": "2026-10-11T01:47:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10111002-09",
     "title": "עסקת הסולר עם רוסיה: זלנסקי זועם, הקונגרס מתנגד",
     "summary": "טראמפ הודיע על רכישת סולר רוסי כדי להוריד את מחירי הדלק. זלנסקי כינה זאת השקעה בהמשך המלחמה, וחברי קונגרס משתי המפלגות הזכירו לנשיא את חוק הסנקציות של גרהם.",
     "axis": "וושינגטון–קייב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T10:09:46+00:00",
     "last_update_at": "2026-10-11T08:57:00+00:00",
     "what_is_not_verified": "פרטי העסקה המלאים לא פורסמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cm1dwgr666wno?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-10T14:24:14+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/09/trump-putin-russian-diesel-ukraine",
       "published_at": "2026-10-10T10:09:46+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057438/",
       "published_at": "2026-10-11T08:57:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נתוני האבדות הרוסיות שמפרסם המטה האוקראיני",
    "טענת רוסיה על כוונה אוקראינית להשתמש בנשק כימי",
    "תוצאות התקיפות האוקראיניות על יעדים צבאיים ברוסיה"
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
     "value": 1.1206,
     "unit": "USD",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [],
     "inferred": [
      "לשחוק את תשתיות האנרגיה של אוקראינה לקראת החורף",
      "לנצל את המתח בין וושינגטון לקייב"
     ],
     "forecast": [
      "המשך מתקפות רחפנים וטילים על ערים ותשתיות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "להמשיך לפגוע במתקני אנרגיה ברוסיה",
      "להגן על האוכלוסייה בקווי החזית"
     ],
     "inferred": [
      "להפעיל לחץ כלכלי על רוסיה כמשקל נגד לעסקת הסולר"
     ],
     "forecast": [
      "תקיפות נוספות על תשתיות ברוסיה"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "להוריד את מחירי הדלק",
      "לקדם הסכם לסיום המלחמה"
     ],
     "inferred": [
      "ללחוץ על קייב להתפשר"
     ],
     "forecast": [
      "התנגדות בקונגרס עלולה לעכב את הקלת הסנקציות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cm1dwgr666wno?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/oct/09/trump-putin-russian-diesel-ukraine",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/third-yandex-data-center-in-russia-shut-down-following-reported-drone-attack/",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/10/trump-calls-on-ukraine-to-replace-zelensky",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057438/",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2200471",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48438",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4173219-ukrainian-defense-forces-strike-russian-repair-unit-supply-depots-and-troop-concentration-areas.html",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-10T23:41:20+00:00",
  "changes": {
   "UKRAINE-10111002-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפה אווירית רוסית קטלנית בזפוריז'יה",
    "score": 1.0
   },
   "UKRAINE-10111002-02": {
    "kind": "possible",
    "prev": "תקיפת כטב\"ם במחוז דניפרופטרובסק",
    "score": 0.4
   },
   "UKRAINE-10111002-03": {
    "kind": "new"
   },
   "UKRAINE-10111002-04": {
    "kind": "new"
   },
   "UKRAINE-10111002-05": {
    "kind": "new"
   },
   "UKRAINE-10111002-06": {
    "kind": "new"
   },
   "UKRAINE-10111002-07": {
    "kind": "new"
   },
   "UKRAINE-10111002-08": {
    "kind": "new"
   },
   "UKRAINE-10111002-09": {
    "kind": "possible",
    "prev": "הסכם סולר בין ארצות הברית לרוסיה והקלת עיצומים",
    "score": 0.467
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-11T1002__north-claude-202610111002.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-11T10:02:37+00:00",
   "window": {
    "from": "2026-10-10T10:02:37+00:00",
    "to": "2026-10-11T10:02:37+00:00"
   },
   "model": {
    "name": "claude",
    "run_id": "north-claude-202610111002"
   },
   "summary": "בדרום לבנון נמשכות תקיפות אוויריות והפגזות ארטילריה ישראליות כמעט יומיות, לפי דיווחי חיזבאללה ותקשורת לבנונית, ומטוסי קרב נצפו בשמי ביירות והבקאע. בצד הישראלי, עצם אווירי בלתי מזוהה שחדר בגליל המערבי הוביל לסריקות שעדיין לא הסתיימו. במישור המדיני, ארה\"ב הסירה הגבלות ותיקות על טיסות ישירות ללבנון.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "תקיפות אוויריות בכפרים ליד הליטני, הפגזות ארטילריה והריסת מבנים באזור הגבול."
    },
    {
     "name": "גבול הגליל המערבי",
     "status": "סריקות צה\"ל אחרי זיהוי עצם אווירי בלתי מזוהה ליד ערב אל-עראמשה; טרם אותר."
    },
    {
     "name": "המישור המדיני",
     "status": "ארה\"ב ביטלה הגבלות על טיסות ישירות ללבנון; טורקיה וסוריה ממשיכות בתיאום צבאי."
    }
   ],
   "events": [
    {
     "id": "NORTH-10111002-01",
     "title": "תקיפות אוויריות בכפרים בדרום לבנון",
     "summary": "דיווחים מלבנון על תקיפות של חיל האוויר בטלוסה, בכפר תבנית ובאלמנצורי במהלך הבוקר.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T07:00:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T07:00:33+00:00",
     "last_update_at": "2026-10-11T09:40:32+00:00",
     "what_is_not_verified": "מטרות התקיפות והנפגעים לא פורסמו; צה\"ל לא התייחס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_90824b7839d390c3",
       "url": "https://english.almanar.com.lb/article/136807/",
       "published_at": "2026-10-11T07:00:33+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_90824b7839d390c3",
       "url": "https://t.me/abualiexpress/131709",
       "published_at": "2026-10-11T07:13:04+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_5fe7bd764782c060",
       "url": "https://english.almanar.com.lb/article/136862/",
       "published_at": "2026-10-11T09:40:32+00:00"
      }
     ],
     "places": [
      {
       "name": "טלוסה",
       "lat": 33.2295,
       "lon": 35.489
      },
      {
       "name": "כפר תבנית",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-10111002-02",
     "title": "הפגזות ארטילריה והריסת מבנים באזור הגבול",
     "summary": "לפי כתבי חיזבאללה, כוחות ישראליים ירו ארטילריה לעבר אלמנצורי וביצעו הריסה של מבנים בבית אלסיאד.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T08:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T08:00:00+00:00",
     "last_update_at": "2026-10-11T09:32:24+00:00",
     "what_is_not_verified": "המידע מגיע מכלי תקשורת של חיזבאללה בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_75afbb6305b577d4",
       "url": "https://english.almanar.com.lb/article/136867/",
       "published_at": "2026-10-11T09:32:24+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_0efdb6a8e7febf04",
       "url": "https://english.almanar.com.lb/article/136817/",
       "published_at": "2026-10-11T08:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אלמנצורי",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10111002-03",
     "title": "מטוסי קרב ישראליים בשמי ביירות והר הלבנון",
     "summary": "דיווחים בלבנון על טיסות בגובה נמוך של מטוסי קרב ישראליים מעל ביירות, הר הלבנון, הבקאע ודרום המדינה.",
     "axis": "פעילות אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T09:47:31+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T09:47:31+00:00",
     "last_update_at": "2026-10-11T09:52:05+00:00",
     "what_is_not_verified": "לא ידוע אם בוצעו תקיפות במהלך הטיסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_c80fb78c87daa3d1",
       "url": "https://english.almanar.com.lb/article/136882/",
       "published_at": "2026-10-11T09:52:05+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_c80fb78c87daa3d1",
       "url": "https://t.me/abualiexpress/131720",
       "published_at": "2026-10-11T09:47:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10111002-04",
     "title": "עצם אווירי בלתי מזוהה חדר בגליל המערבי",
     "summary": "דובר צה\"ל מסר שתצפיות זיהו עצם אווירי בלתי מזוהה במרחב הגבול ליד ערב אל-עראמשה. הסריקות נמשכו גם בבוקר, ובצבא לא שוללים מצנח ממונע או רחפן מסוג לא מוכר.",
     "axis": "גבול הגליל המערבי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T20:00:00+03:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T17:05:22+00:00",
     "last_update_at": "2026-10-11T05:42:43+00:00",
     "what_is_not_verified": "מה היה העצם ומאיפה הגיע — עדיין לא ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25331",
       "published_at": "2026-10-10T20:41:34+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957000",
       "published_at": "2026-10-11T04:54:05+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1ptysdime",
       "published_at": "2026-10-11T05:42:43+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956956",
       "published_at": "2026-10-10T17:05:22+00:00"
      }
     ],
     "places": [
      {
       "name": "ערב אל-עראמשה",
       "lat": 33.0886,
       "lon": 35.2265
      }
     ]
    },
    {
     "id": "NORTH-10111002-05",
     "title": "צה\"ל שיגר מיירט לעבר מטרה אווירית בדרום לבנון",
     "summary": "לפי דובר צה\"ל, מיירט שוגר לעבר מטרה אווירית חשודה באזור שבו פועלים כוחות צה\"ל בדרום לבנון; תוצאות היירוט נבדקו.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T14:50:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T14:50:18+00:00",
     "last_update_at": "2026-10-10T14:50:18+00:00",
     "what_is_not_verified": "תוצאות היירוט לא פורסמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25326",
       "published_at": "2026-10-10T14:50:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10111002-06",
     "title": "ארה\"ב ביטלה הגבלות ותיקות על טיסות ישירות ללבנון",
     "summary": "הנשיא טראמפ הסיר הגבלות שעמדו בתוקף עשרות שנים על טיסות בין ארה\"ב ללבנון, ונשיא לבנון ג'וזף עאון בירך על ההחלטה.",
     "axis": "המישור המדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T14:10:00+00:00",
     "last_update_at": "2026-10-10T15:44:48+00:00",
     "what_is_not_verified": "מועד חידוש הטיסות בפועל לא נקבע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_51f0e0485c27964e",
       "url": "https://www.newarab.com/news/trump-ends-decades-old-restrictions-direct-us-lebanon-flights",
       "published_at": "2026-10-10T15:44:48+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_51f0e0485c27964e",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962141/after-trumps-decision-when-will-direct-flights-between-lebanon-and-the/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962141",
       "published_at": "2026-10-10T14:10:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10111002-07",
     "title": "שיחה בין ראשי המטות של טורקיה וסוריה",
     "summary": "ראש המטה הכללי הטורקי שוחח עם עמיתו הסורי על הקשרים בין הצבאות ועל סוגיות אזוריות.",
     "axis": "המישור המדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T16:17:26+00:00",
     "last_update_at": "2026-10-10T16:17:26+00:00",
     "what_is_not_verified": "תוכן השיחה לא פורסם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/turkiye/turkish-syrian-military-chiefs-discuss-bilateral-ties-regional-issues/4084623",
       "published_at": "2026-10-10T16:17:26+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף הנזק והנפגעים בתקיפות בדרום לבנון",
    "זהות העצם האווירי שחדר לשטח ישראל ומקורו"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "למנוע חדירות לשטחה ולפעול נגד איומים בדרום לבנון"
     ],
     "inferred": [
      "לשחוק את יכולות חיזבאללה ליד הגבול בלי להגיע למלחמה מלאה"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות בדרום לבנון בימים הקרובים"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "לשמר את יכולותיו ולהימנע מתגובה רחבה"
     ],
     "forecast": [
      "סבירות נמוכה לתגובה משמעותית בטווח הקצר"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "לפתוח מחדש קווי תעופה ישירים עם לבנון"
     ],
     "inferred": [
      "לחזק את מוסדות המדינה הלבנונית מול חיזבאללה"
     ],
     "forecast": []
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/136882/",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/turkiye/turkish-syrian-military-chiefs-discuss-bilateral-ties-regional-issues/4084623",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962141/after-trumps-decision-when-will-direct-flights-between-lebanon-and-the/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962141",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/trump-ends-decades-old-restrictions-direct-us-lebanon-flights",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131720",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25326",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956956",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1ptysdime",
     "accessed_at": "2026-10-11T10:02:37+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-10-11T06:22:44+00:00",
  "changes": {
   "NORTH-10111002-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפות אוויריות והפגזות של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10111002-02": {
    "kind": "new"
   },
   "NORTH-10111002-03": {
    "kind": "new"
   },
   "NORTH-10111002-04": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "זיהוי עצם אווירי בלתי מזוהה שחצה מלבנון וסריקות בגליל המערבי",
    "score": 1.0
   },
   "NORTH-10111002-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירט לעבר מטרה אווירית חשודה בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10111002-06": {
    "kind": "new"
   },
   "NORTH-10111002-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "שיחה בין מפקדי הצבאות של טורקיה וסוריה",
    "score": 1.0
   }
  }
 }
};
