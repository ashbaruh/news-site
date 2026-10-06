/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-06T0935__yemen-202610060935.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-06T09:35:54+00:00",
   "window": {
    "from": "2026-10-05T09:35:54+00:00",
    "to": "2026-10-06T09:35:54+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610060935"
   },
   "summary": "הלחימה בתימן ובמרחב הים האדום נמצאת בהסלמה משמעותית, כאשר כוחות ממשלת תימן הנתמכים בידי סעודיה מנהלים מתקפת נגד רחבת היקף באזור באב אל-מנדב ונמל אל-מוחה מול המיליציה החות'ית. במקביל, החות'ים ממשיכים בשיגור טילים וכטב\"מים לעבר שדות תעופה ויעדים בשטח סעודיה, מה שגרם לממלכה להדק את שיתוף הפעולה הביטחוני עם בנות בריתה במסגרת ברית מכה.",
   "fronts": [
    {
     "name": "חזית הים האדום ובאב אל-מנדב",
     "status": "פעילה ומתקפת נגד של הקואליציה"
    },
    {
     "name": "חזית הפנים בתימן (כולל תעז וצנעא)",
     "status": "לחימה עצימה ותקיפות אוויריות"
    },
    {
     "name": "חזית האוויר מול סעודיה",
     "status": "תקיפות שיגור חות'יות לעבר יעדים בסעודיה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10060935-01",
     "title": "מתקפה על שדה התעופה בריאד ומתקנים בסעודיה",
     "summary": "החות'ים טענו כי שיגרו טילים וכטב\"מים לעבר שדה התעופה בריאד ומתקנים נוספים, ותושבים דיווחו על פיצוצים בצפון העיר.",
     "axis": "הזירה הימית והאווירית מול סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T08:12:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T08:12:54+00:00",
     "last_update_at": "2026-10-06T09:30:16+00:00",
     "what_is_not_verified": "אישור רשמי מצד ממשלת סעודיה על עצם הפגיעה, ואימות עצמאי של תוצאות התקיפה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-claim-attack-riyadh-airport-deny-losing-territory",
       "published_at": "2026-10-06T09:30:16+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-targeted-saudi-arabias-abha-international-airport",
       "published_at": "2026-10-06T09:28:18+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosion-heard-north-saudi-capital-riyadh-residents-afp",
       "published_at": "2026-10-06T09:07:11+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131435",
       "published_at": "2026-10-06T05:41:13+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-claim-striking-riyadh-airport-other-saudi-sites",
       "published_at": "2026-10-05T23:36:19+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261005-yemen-military-announces-broad-range-of-strikes-against-houthis-in-bid-to-retake-lost-territory",
       "published_at": "2026-10-05T08:12:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אבהא, סעודיה",
       "lat": 18.2164,
       "lon": 42.5044
      }
     ]
    },
    {
     "id": "YEMEN-10060935-02",
     "title": "השתלטות כוחות ממשלת תימן על באב אל-מנדב ואל-מוחה",
     "summary": "כוחות ממשלת תימן הנתמכים בידי סעודיה פתחו במתקפת נגד וכבשו מחדש שטחים סביב מצר באב אל-מנדב ועיר הנמל אל-מוחה, בעוד החות'ים מכחישים זאת.",
     "axis": "זירת הפנים בתימן והים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T16:04:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T16:04:23+00:00",
     "last_update_at": "2026-10-06T09:30:16+00:00",
     "what_is_not_verified": "האם כל השטחים נכבשו במלואם, עקב טענות סותרות והכחשות מצד החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-claim-attack-riyadh-airport-deny-losing-territory",
       "published_at": "2026-10-06T09:30:16+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/6/yemen-war-whats-the-latest-on-the-battlefield?traffic_source=rss",
       "published_at": "2026-10-06T08:27:51+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw8rzd6lp0xpo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-06T07:43:07+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjsh00zzsgg",
       "published_at": "2026-10-06T07:30:19+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-forces-advance-against-houthis-hormuz-deadlocked",
       "published_at": "2026-10-06T06:32:35+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/05/saudi-forces-recapture-key-areas-strait-houthis-yemen",
       "published_at": "2026-10-05T19:44:01+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
       "published_at": "2026-10-05T19:17:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemen-military-announces-retaking-mokha-houthis-amid-red-sea-offensive",
       "published_at": "2026-10-05T17:49:09+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48278",
       "published_at": "2026-10-05T17:25:37+00:00"
      },
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/saudi-backed-forces-claim-control-of-bab-el-mandeb-strait/",
       "published_at": "2026-10-05T16:04:23+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      },
      {
       "name": "אל-מוחה, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    },
    {
     "id": "YEMEN-10060935-03",
     "title": "היעלמות מסוק של הצי האמריקאי מעל הים האדום",
     "summary": "מסוק של הצי האמריקאי מסוג סיקורסקי הכריז חירום ונעלם מנתוני המעקב הפומביים בזמן שטיפס או טס באזור סעודיה בים האדום.",
     "axis": "הזירה הימית והאווירית בים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T21:20:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T06:16:31+00:00",
     "last_update_at": "2026-10-06T07:03:43+00:00",
     "what_is_not_verified": "סיבת היעלמות המסוק המדויקת ומצבו הסופי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-635",
       "published_at": "2026-10-06T07:03:43+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-navy-helicopter-disappears-after-declaring-emergency-over-red-sea",
       "published_at": "2026-10-06T06:16:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-10060935-04",
     "title": "תקיפות אוויריות נרחבות של הקואליציה בראשות סעודיה בתימן",
     "summary": "הקואליציה בהובלת סעודיה דיווחה על ביצוע תקיפות אוויריות נרחבות הכוללות מאה מטוסי קרב ופגיעה במטרות בבאב אל-מנדב, חודידה, צנעא וצערה.",
     "axis": "זירת הפנים בתימן והים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T15:21:54+00:00",
     "last_update_at": "2026-10-05T23:36:19+00:00",
     "what_is_not_verified": "היקף הנזק המדויק שנגרם לכלל המטרות שהותקפו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bccca5999d3ef189",
       "url": "https://www.newarab.com/news/yemens-houthis-claim-striking-riyadh-airport-other-saudi-sites",
       "published_at": "2026-10-05T23:36:19+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7f09a1e5c9d970ad",
       "url": "https://www.sabanew.net/viewstory/153538",
       "published_at": "2026-10-05T23:08:02+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_50d86aecb72ed7ad",
       "url": "https://www.sabanew.net/viewstory/153535",
       "published_at": "2026-10-05T20:17:54+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_eb5fe16931176031",
       "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
       "published_at": "2026-10-05T15:21:54+00:00"
      }
     ],
     "places": [
      {
       "name": "חודידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-10060935-05",
     "title": "כינוס ברית מכה והחלטת פקיסטן וטורקיה להעמיד כוחות",
     "summary": "סעודיה, פקיסטן וטורקיה קיימו פגישה בריאד והחלו ביישום מנגנון ההגנה של ברית מכה, הכולל העמדת כוחות ויכולות צבאיות להגנת הממלכה.",
     "axis": "הזירה הימית והאווירית מול סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T17:49:09+00:00",
     "last_update_at": "2026-10-06T06:32:35+00:00",
     "what_is_not_verified": "מועד הפריסה בפועל של הכוחות בשטח סעודיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-forces-advance-against-houthis-hormuz-deadlocked",
       "published_at": "2026-10-06T06:32:35+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/6/10-6-yemen-war-update-sv?traffic_source=rss",
       "published_at": "2026-10-06T01:39:54+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131422",
       "published_at": "2026-10-05T19:01:28+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48280",
       "published_at": "2026-10-05T18:25:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemen-military-announces-retaking-mokha-houthis-amid-red-sea-offensive",
       "published_at": "2026-10-05T17:49:09+00:00"
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
     "id": "YEMEN-10060935-06",
     "title": "שימוש ברחפני FPV ותיעוד תקיפות בתימן",
     "summary": "החות'ים פרסמו תיעוד מבצעי המציג שימוש ברחפני FPV מסוג שוואז נגד כוחות הקואליציה וטנדרים חמושים במספר חזיתות.",
     "axis": "זירת הפנים בתימן והים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T19:35:48+00:00",
     "last_update_at": "2026-10-05T19:35:48+00:00",
     "what_is_not_verified": "ההשפעה המבצעית המדויקת של השימוש ברחפנים אלו על תוצאות הקרבות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48283",
       "published_at": "2026-10-05T19:35:48+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "אישור רשמי מצד ממשלת סעודיה על פגיעת טילים בשטחה במסגרת התקיפות האחרונות",
    "גורלו ומצבו המדויק של מסוק הצי האמריקאי שהכריז חירום ונעלם",
    "ההיקף המלא של השליטה בשטחים סביב מצר באב אל-מנדב עקב דיווחים סותרים"
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "עצירת פעילות חברות תעופה זרות במרחב האווירי של סעודיה",
      "המשך פגיעה ביעדים אסטרטגיים בתוך סעודיה"
     ],
     "inferred": [
      "שימור השליטה בנתיבי הציד והאזורים האסטרטגיים בים האדום",
      "מניעת השגת שליטה מחדש של הממשלה התימנית והקואליציה באזורי החוף"
     ],
     "forecast": [
      "המשך שיגורים לעבר יעדים בסעודיה ובאזור הים האדום",
      "ניסיון לייצב קווי הגנה קרקעיים באזורים הרריים מול מתקפת הנגד"
     ]
    },
    {
     "actor": "סעודיה וממשלת תימן",
     "declared": [
      "כיבוש מחדש של כלל השטחים שנפלו לידי החות'ים לאחרונה",
      "הבטחת האבטחה והשליטה בנתיבי השיט בים האדום ובבאב אל-מנדב"
     ],
     "inferred": [
      "בניית חזית אזורית רחבה יחד עם פקיסטן וטורקיה לבלימת האיום החות'י",
      "החלשת היכולות הצבאיות והתשתיות של החות'ים באמצעות עוצמה אווירית וקרקעית"
     ],
     "forecast": [
      "הגברת הפעילות ההתקפית במישור הקרקעי והאווירי בתימן",
      "יישום מבצעי של מנגנוני ההגנה של ברית מכה בתוך שטח סעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/6/10-6-yemen-war-update-sv?traffic_source=rss",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemen-military-announces-retaking-mokha-houthis-amid-red-sea-offensive",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cw8rzd6lp0xpo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/saudi-backed-forces-claim-control-of-bab-el-mandeb-strait/",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-navy-helicopter-disappears-after-declaring-emergency-over-red-sea",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-forces-advance-against-houthis-hormuz-deadlocked",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153535",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131422",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48283",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjsh00zzsgg",
     "accessed_at": "2026-10-06T09:35:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-05T06:26:42+00:00",
  "changes": {
   "YEMEN-10060935-01": {
    "kind": "new"
   },
   "YEMEN-10060935-02": {
    "kind": "new"
   },
   "YEMEN-10060935-03": {
    "kind": "new"
   },
   "YEMEN-10060935-04": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפות אוויריות בצנעא ודיווחים על פגיעה במתקן בסעודיה",
    "score": 1.0
   },
   "YEMEN-10060935-05": {
    "kind": "new"
   },
   "YEMEN-10060935-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-05T2340__iran-202610052340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-05T23:40:42+00:00",
   "window": {
    "from": "2026-10-04T23:40:42+00:00",
    "to": "2026-10-05T23:40:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610052340"
   },
   "summary": "העימות בין איראן מחד לבין ישראל וארה\"ב מאידך מתאפיין בהמשך לחץ כלכלי וסנקציות חריפות מצד וושינגטון המדרדרות את הכלכלה האיראנית, לצד אירועים ימיים במצר הורמוז והתרחבות החשדות לזירות חוץ כמו אירופה. במקביל, הזירות האזוריות רוחשות פעילות צבאית עצימה הכוללת מתקפות נגד בתימן וגיבוש בריתות הגנה חדשות במפרץ.",
   "fronts": [
    {
     "name": "הזירה הימית (הורמוז והים האדום)",
     "status": "פעיל ומתוח"
    },
    {
     "name": "הזירה הדיפלומטית-כלכלית (סנקציות ושיחות)",
     "status": "מוקפא עם הסלמה"
    },
    {
     "name": "זירת המפרץ ותימן (סעודיה מול שלוחחות איראן)",
     "status": "הסלמה צבאית"
    },
    {
     "name": "זירת אירופה (איומים על בסיסים אמריקאיים)",
     "status": "התעוררות איומים"
    }
   ],
   "events": [
    {
     "id": "IRAN-10052340-01",
     "title": "פגיעה במכלית שלישית ליד מצר הורמוז",
     "summary": "מכלית שלישית בתוך יומיים נפגעה בסמוך למצר הורמוז, על רקע ניסיונות לחץ כלכלי וסנקציות אמריקאיות.",
     "axis": "הזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T22:08:27+00:00",
     "last_update_at": "2026-10-05T22:08:27+00:00",
     "what_is_not_verified": "זהות אלגורם האחראי לפגיעה במכלית אינה מפורטת במלואה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610050957",
       "published_at": "2026-10-05T22:08:27+00:00"
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
     "id": "IRAN-10052340-02",
     "title": "ארה\"ב מפנה מפציצים מבסיס בבריטניה מחשש לאיום",
     "summary": "ארצות הברית פינתה מפציצי B-1 מבסיס האוויר פיירפורד בבריטניה בחזרה לארה\"ב, עקב חשיפת חשודים הקשורים לאיראן שפעלו בקרבת הבסיס.",
     "axis": "זירת אירופה והעורף האמריקאי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T05:50:01+00:00",
     "last_update_at": "2026-10-05T15:45:46+00:00",
     "what_is_not_verified": "הקשר הישיר והמוכח של ממשלת איראן לחוליה שנחשפה בבריטניה אינו מאומת לחלוטין מעבר לחשדות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/news/audio/2026/oct/05/why-did-us-withdraw-bombers-from-raf-fairford-the-latest",
       "published_at": "2026-10-05T15:45:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131361",
       "published_at": "2026-10-05T05:50:01+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-10052340-03",
     "title": "תקיפות ומתקפה נגד של הקואליציה בתימן מול החות'ים",
     "summary": "כוחות ממשלת תימן הנתמכים בסעודיה ובאמצעות קואליציה אווירית פתחו במתקפה נגד החות'ים וכבשו מחדש שטחים באזור מצרי באב אל-מנדב.",
     "axis": "זירת תימן והים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T15:21:54+00:00",
     "last_update_at": "2026-10-05T19:44:01+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף הנפגעים המדויק בכל זירות הלחימה בתימן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/05/saudi-forces-recapture-key-areas-strait-houthis-yemen",
       "published_at": "2026-10-05T19:44:01+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
       "published_at": "2026-10-05T19:17:05+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
       "published_at": "2026-10-05T15:21:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר באב אל-מנדב, תימן",
       "lat": 12.6671,
       "lon": 43.4565
      }
     ]
    },
    {
     "id": "IRAN-10052340-04",
     "title": "הפעלת מנגנון ברית מכה בין סעודיה, פקיסטן וטורקיה",
     "summary": "סעודיה, פקיסטן וטורקיה הכריזו על הפעלה מיידית של הסכם ההגנה הקולקטיבית (ברית מכה) והיערכות להצבת כוחות בממלכה בעקבות התקיפות האחרונות.",
     "axis": "המפרץ והקואליציות האזוריות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T18:25:54+00:00",
     "last_update_at": "2026-10-05T20:43:27+00:00",
     "what_is_not_verified": "ההשפעה המבצעית המדויקת בשטח של פריסת הכוחות טרם הוכחה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/saudi-arabia-turkey-and-pakistan-activate-mecca-pact-amid-war-houthis",
       "published_at": "2026-10-05T20:43:27+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48280",
       "published_at": "2026-10-05T18:25:54+00:00"
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
    "האחריות הישירה של איראן לניסיון הפגיעה בטיסת פליי דובאי נתונה במחלוקת והצהרות פוליטיות בלבד.",
    "היקף שיתוף הפעולה המדויק של מדינות אירופה עם הצדדים הלוחמים מעבר לטענות פקידי איראן.",
    "התוצאות המבצעיות של פריסת כוחות ברית מכה בסעודיה."
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הדגשת חוסר המשמעות של קיום שיחות עם ארצות הברית במצב הנוכחי",
      "דרישה שגורמים אירופיים יישאו באחריות על סיוע לתוקפים"
     ],
     "inferred": [
      "הפעלת לחץ ימי דרך פגיעה במכליות כדי לערער את שוק האנרגיה העולמי",
      "הכנת העורף האזרחי והנשים לעימות ממושך דרך אימונים והתארגנויות הגנה עירונית"
     ],
     "forecast": [
      "החמרת הבידוד הכלכלי עקב קריסת המטבע המקומי והכנסות הנפט",
      "המשך הסתמכות על שלוחות אזוריות לתקיפות נגד אינטרסים של יריבותיה"
     ]
    },
    {
     "actor": "ארצות הברית וישראל",
     "declared": [
      "הטלת סנקציות כלכליות נוקשות על בנקים וגופים הסוחרים עם איראן",
      "הזהרה מפני מתן גישה או סיוע לעסקים ולמוסדות פיננסיים הקשורים לטהרן"
     ],
     "inferred": [
      "הידוק הפיקוח המודיעיני ומניעת התבססות איראנית במרחבים שונים",
      "נקיטת משנה זהירות ואבטחה מוגברת על בסיסים ונכסים אסטרטגיים מפני חבלות"
     ],
     "forecast": [
      "הגברת הלחץ הכלכלי עד קצה מנופי ההשפעה",
      "המשך פעילות סיכול ומעקב אחר פעילות איראנית חוצת גבולות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610050957",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/saudi-arabia-turkey-and-pakistan-activate-mecca-pact-amid-war-houthis",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131361",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48280",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-05T09:35:06+00:00",
  "changes": {
   "IRAN-10052340-01": {
    "kind": "new"
   },
   "IRAN-10052340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פינוי מפציצי B-1 מבסיס בבריטניה בעקבות חשש מאיום איראני",
    "score": 1.0
   },
   "IRAN-10052340-03": {
    "kind": "new"
   },
   "IRAN-10052340-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-06T0923__ukraine-202610060923.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-06T09:23:21+00:00",
   "window": {
    "from": "2026-10-05T09:23:21+00:00",
    "to": "2026-10-06T09:23:21+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610060923"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעצימות גבוהה, הכוללת תקיפות אוויריות והדדיות נרחבות על תשתיות אנרגיה, גשרים וריכוזי אוכלוסייה בעומק שתי המדינות. במקביל, מתנהלים קרבות קשים בחזיתות היבשתיות המרכזיות כמו פוקרובסק וקונסטנטינובקה. בזירה הדיפלומטית והכלכלית, נרשמות מתיחויות סביב אספקת דלק וסנקציות, לצד אינדיקציות ציבוריות על נכונות מסוימת למשא ומתן מצד הציבור האוקראיני.",
   "fronts": [
    {
     "name": "חזית פוקרובסק",
     "status": "פעיל מאוד עם עימותים בלתי פוסקים"
    },
    {
     "name": "חזית קונסטנטינובקה",
     "status": "פעיל עם התקפות רוסיות חוזרות"
    },
    {
     "name": "מרחב קורסק",
     "status": "פעיל עם תקיפות אוויריות וקרקעיות"
    },
    {
     "name": "זירת הים השחור",
     "status": "פעיל הכולל תקיפות על כלי שיט ותשתיות ימיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10060923-01",
     "title": "תקיפות רוסיות על מתקנים ותשתיות באוקראינה",
     "summary": "כוחות רוסיים ביצעו תקיפות רבות ברחבי אוקראינה, שגרמו לנפגעים בנפש ולנזקים במבנים, כולל בתי חולים, גשרים ומוסדות חינוך.",
     "axis": "תקיפות אוויריות וקרקעיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T06:03:00+00:00",
     "last_update_at": "2026-10-06T09:03:24+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בכל זירה משנית אינו מאומת ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_e6ea061c11ef13ad",
       "url": "https://kyivindependent.com/russian-strikes-kill-13-injure-104-across-ukraine-damage-kryvyi-rih-hospital/",
       "published_at": "2026-10-06T09:03:24+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_e6ea061c11ef13ad",
       "url": "https://www.ukrinform.net/rubric-ato/4171478-russian-attacks-in-kharkiv-region-leave-seven-killed-80-injured-over-past-day.html",
       "published_at": "2026-10-06T08:35:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_e6ea061c11ef13ad",
       "url": "https://meduza.io/en/news/2026/10/06/russia-strikes-bridge-over-dnipro-river-in-ukraine-s-zaporizhzhia-injuring-five-including-red-cross-workers",
       "published_at": "2026-10-06T07:20:08+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e6ea061c11ef13ad",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056649/",
       "published_at": "2026-10-06T06:03:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קריבי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "חרקיב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "קרמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-10060923-02",
     "title": "מתקפת כטב\"מים אוקראינית על מוסקבה ומחוזות ברוסיה",
     "summary": "מתקפת כטב\"מים נרחבת שיוחסה לאוקראינה כוונה לעבר אזור מוסקבה ופגעה במתקנים שונים, וכן דווח על פגיעה בתשתיות אנרגיה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T00:14:26+00:00",
     "last_update_at": "2026-10-06T07:08:08+00:00",
     "what_is_not_verified": "היקף הנזק המלא בבתי הזיקוק ונתוני היירוט הרשמיים אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_governor_andrei_vorobyov_moscow_mayor_se",
       "url": "https://meduza.io/en/news/2026/10/06/massive-ukrainian-drone-attack-on-moscow-and-surrounding-region-kills-two-sets-region-s-largest-oil-depot-ablaze",
       "published_at": "2026-10-06T07:08:08+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_governor_andrei_vorobyov_moscow_mayor_se",
       "url": "https://t.me/abualiexpress/131437",
       "published_at": "2026-10-06T05:53:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_governor_andrei_vorobyov_moscow_mayor_se",
       "url": "https://t.me/alexmehacarmel/48290",
       "published_at": "2026-10-06T00:14:26+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-10060923-03",
     "title": "פגיעה בגשרים ובעורקי תחבורה מרכזיים",
     "summary": "דווח על נזקים לגשרים המרכזיים החוצים את נהר דנייפרו, וכן לגשר צ'ונחר המחבר בין חצי האי קרים לאזור חרסון.",
     "axis": "תשתיות תחבורה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T04:26:24+00:00",
     "last_update_at": "2026-10-06T08:18:00+00:00",
     "what_is_not_verified": "ההשפעה המלאה על תנועת כלי הרכב והשיקום אינה מאומתת ממקור בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_5fe64e52e2ddf0bc",
       "url": "https://www.ukrinform.net/rubric-ato/4171471-new-attacks-cause-extensive-damage-to-chonhar-bridge-satellite-imagery.html",
       "published_at": "2026-10-06T08:18:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_5fe64e52e2ddf0bc",
       "url": "https://meduza.io/en/news/2026/10/06/russia-strikes-bridge-over-dnipro-river-in-ukraine-s-zaporizhzhia-injuring-five-including-red-cross-workers",
       "published_at": "2026-10-06T07:20:08+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5fe64e52e2ddf0bc",
       "url": "https://kyivindependent.com/russian-drone-strikes-zaporizhzhia-bridge-in-overnight-attack/",
       "published_at": "2026-10-06T04:26:24+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-10060923-04",
     "title": "חילופי האשמות דיפלומטיות סביב העברת שבויים קוריאניים",
     "summary": "שר החוץ של דרום קוריאה הביע חוסר שביעות רצון מההתנצלות של אוקראינה בנוגע להדלפת מידע על העברת שני שבויי מלחמה צפון קוריאניים.",
     "axis": "הזירה הדיפלומטית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:26:00+00:00",
     "last_update_at": "2026-10-06T08:26:00+00:00",
     "what_is_not_verified": "טיב הצעדים העתידיים שתנקוט דרום קוריאה אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_cho_hyun_yonhap",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056667/",
       "published_at": "2026-10-06T08:26:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10060923-05",
     "title": "תקיפה ימית בים השחור ופגיעה באוניית תבואה",
     "summary": "אוניית תבואה בבעלות טורקית נפגעה בים השחור, מה שהוביל לטביעתה, למותו של הקברניט ולחילוץ אנשי צוות נוספים.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T12:44:28+00:00",
     "last_update_at": "2026-10-05T15:17:23+00:00",
     "what_is_not_verified": "זהות אלגורם התוקף המדויק מדווחת חלקית בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://www.bbc.co.uk/news/articles/cr0j0w3p8453o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-05T15:17:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_volodymyr_zelenskyy",
       "url": "https://t.me/abualiexpress/131385",
       "published_at": "2026-10-05T12:44:28+00:00"
      }
     ],
     "places": [
      {
       "name": "הים השחור",
       "lat": 43.8728,
       "lon": 33.9938
      }
     ]
    },
    {
     "id": "UKRAINE-10060923-06",
     "title": "משפט בגידה ברוסיה בשל תשלומי מס לאוקראינה",
     "summary": "רשויות הביטחון ברוסיה עצרו איש עסקים באשמת בגידה במולדת בטענה ששילם חובות מס רשמיים לתקציב המדינה באוקראינה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T19:32:12+00:00",
     "last_update_at": "2026-10-05T19:32:12+00:00",
     "what_is_not_verified": "טענות ההגנה בדבר חוסר הברירה של הנאשם בתשלומי המס אינן מתקפות משפטית לפי בתי המשפט ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_mediazona",
       "url": "https://meduza.io/en/news/2026/10/05/russia-has-brought-its-first-known-treason-case-based-on-tax-payments-to-ukraine",
       "published_at": "2026-10-05T19:32:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10060923-07",
     "title": "אישור נשיאותי לפרישת יוניקרדיט מפעילות ברוסיה",
     "summary": "נשיא רוסיה חתם על צו המאפשר לקבוצת הבנקאות האיטלקית יוניקרדיט לבצע רה-ארגון ולמכור את החזקותיה בבנק הבת הרוסי.",
     "axis": "הזירה הכלכלית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T18:22:10+00:00",
     "last_update_at": "2026-10-05T18:22:10+00:00",
     "what_is_not_verified": "זהות המשקיע הפרטי מאיחוד האמירויות שירכוש את הנכסים לא נחשפה רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/05/putin-authorizes-italian-banking-group-unicredit-to-spin-off-part-of-its-russian-bank-and-sell-the-remaining-business",
       "published_at": "2026-10-05T18:22:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10060923-08",
     "title": "משא ומתן ומדדי דעת קהל באוקראינה",
     "summary": "סקר שנערך באוקראינה מצביע על כך שרוב אזרחי המדינה פתוחים לאפשרות של קיום משא ומתן עם רוסיה לסיום המלחמה, ללא הסכמה מוקדמת לויתורי שטחים.",
     "axis": "הזירה הציבורית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-06T08:12:00+00:00",
     "last_update_at": "2026-10-06T08:12:00+00:00",
     "what_is_not_verified": "הפרשנות המדויקת של רצון הציבור בנוגע לפשרות טריטוריאליות נתונה לפרשנות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_bcd7bb18ac054a3f",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056661/",
       "published_at": "2026-10-06T08:12:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בצד הרוסי והאוקראיני אינו מאומת.",
    "זהותו המלאה של המשקיע הרוכש את נכסי בנק יוניקרדיט ברוסיה.",
    "היקף הנזק המדויק בבתי הזיקוק במוסקבה ובמתקני האנרגיה."
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
     "value": 1.1204,
     "unit": "USD",
     "change_pct": -0.19,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה ביכולות הצבאיות של אוקראינה",
      "המשך הגנה על האינטרסים הכלכליים והביטחוניים של המדינה מול הסנקציות"
     ],
     "inferred": [
      "החלשת התשתיות האזרחיות והתחבורתיות של אוקראינה כדי לשחוק את עמידתה",
      "המשך לחץ צבאי בחזיתות המזרחיות לשם כיבוש שטחים נוספים"
     ],
     "forecast": [
      "הגברת התקיפות על עורקי תחבורה מרכזיים וגשרים באוקראינה",
      "החמרת הצעדים המשפטיים והביטחוניים נגד גורמים הנחשדים בסיוע לאוקראינה בעורף הרוסי"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונות המדינה והדפת הכוחות הרוסיים",
      "המשך המאבק המזיין בתוך השטחים הכבושים ופגיעה בלוגיסטיקה הרוסית"
     ],
     "inferred": [
      "פגיעה בעורף הכלכלי והאנרגתי של רוסיה באמצעות מתקפות כטב\"מים ארוכי טווח",
      "שמירה על לגיטימציה בינלאומית וקבלת סיוע צבאי וכלכלי חיצוני"
     ],
     "forecast": [
      "המשך שימוש בטקטיקות של תקיפות כטב\"מים בעומק רוסיה",
      "ניסיונות לשקם תשתיות תחבורה שנפגעו תוך כדי ניהול מגעים דיפלומטיים זהירים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr0j0w3p8453o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-drone-strikes-zaporizhzhia-bridge-in-overnight-attack/",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/05/putin-authorizes-italian-banking-group-unicredit-to-spin-off-part-of-its-russian-bank-and-sell-the-remaining-business",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/06/8056661/",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131385",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48290",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4171471-new-attacks-cause-extensive-damage-to-chonhar-bridge-satellite-imagery.html",
     "accessed_at": "2026-10-06T09:23:21+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-05T19:27:55+00:00",
  "changes": {
   "UKRAINE-10060923-01": {
    "kind": "new"
   },
   "UKRAINE-10060923-02": {
    "kind": "new"
   },
   "UKRAINE-10060923-03": {
    "kind": "new"
   },
   "UKRAINE-10060923-04": {
    "kind": "new"
   },
   "UKRAINE-10060923-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעה בספינת תבואה בים השחור",
    "score": 1.0
   },
   "UKRAINE-10060923-06": {
    "kind": "new"
   },
   "UKRAINE-10060923-07": {
    "kind": "new"
   },
   "UKRAINE-10060923-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-06T0948__north-202610060948.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-06T09:48:02+00:00",
   "window": {
    "from": "2026-10-05T09:48:02+00:00",
    "to": "2026-10-06T09:48:02+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610060948"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות מבצעית אינטנסיבית של צה\"ל במרחב האבטחה בדרום סוריה, הכוללת סיכול חדירות, מעצר חשודים וטיהור אמצעי לחימה. במקביל, בסוריה נרשמות פגיעות חוזרות בתשתיות הגז לצד מאמצי שיקום כלכלי, וסוריה מגנה את פעילות ישראל באו\"ם. בלבנון הממשלה פועלת להרחבת שליטת הצבא בדרום בסיוע תרגילים בינלאומיים, בעוד חיזבאללה משמר תשתיות ומנסה לשקם יכולות.",
   "fronts": [
    {
     "name": "דרום סוריה (מרחב האבטחה וקוניטרה)",
     "status": "חיכוך מבצעי פעיל, חדירות חשודים וטיהור אמל\"ח על ידי צה\"ל לצד מחאה דיפלומטית סורית"
    },
    {
     "name": "דרום לבנון וגבול ישראל-לבנון",
     "status": "היערכות לשהייה ישראלית ממושכת מול ניסיונות שיקום יכולות של חיזבאללה ומאמצי פריסה של צבא לבנון"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "מתיחות ואתגרי אבטחה סביב הברחות בני אדם וחשש מחדירת גורמים עוינים"
    },
    {
     "name": "פנים סוריה (תשתיות ושיקום)",
     "status": "פגיעות חבלה סדרתיות בקווי אנרגיה במקביל לחתימת הסכמי השקעה זרים בבנייה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10060948-01",
     "title": "תקריות ביטחוניות ופעילות צה\"ל במרחב האבטחה בדרום סוריה",
     "summary": "כוחות צה\"ל זיהו שני חשודים רכובים על אופנוע שהתקרבו למוצב בדרום סוריה וביצעו נוהל מעצר חשוד שכלל ירי, פציעת אחד מהם ומעצר שניהם. בנוסף, חטיבת כרמלי איתרה מטעני נ\"ט ומוקשים משטריים ישנים, ודווח על פעילות טנקים וחיילים באזור קוניטרה ותקרית ירי קודמת שבה נהרג אדם.",
     "axis": "דרום סוריה - צה\"ל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T13:18:52+00:00",
     "last_update_at": "2026-10-06T06:46:23+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק ופרטי זהותם של החשודים באירועים השונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25292",
       "published_at": "2026-10-05T13:42:59+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25291",
       "published_at": "2026-10-05T13:18:52+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383956358",
       "published_at": "2026-10-05T13:54:26+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94498",
       "published_at": "2026-10-05T13:41:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131423",
       "published_at": "2026-10-05T19:16:40+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-raid-in-syria-s-quneitra/4079190",
       "published_at": "2026-10-06T06:46:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-condemns-israeli-attacks-demands-withdrawal-territory",
       "published_at": "2026-10-06T05:19:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10060948-02",
     "title": "גינויים נגד פעולות ישראל ועבודות הנדסיות בקו סופה 53 בסוריה",
     "summary": "משרד החוץ הסורי, לצד ירדן וקטאר, גינו את המשך החדירות הישראליות ואת השלמת העבודות על קו סופה 53, בטענה להפרת הסכם הפרדת הכוחות מ-1974.",
     "axis": "סוריה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T16:51:27+00:00",
     "last_update_at": "2026-10-06T05:19:46+00:00",
     "what_is_not_verified": "מידת ההתקדמות הפיזית של העבודות הישראליות על הקו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
       "published_at": "2026-10-05T16:51:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-condemns-israeli-attacks-demands-withdrawal-territory",
       "published_at": "2026-10-06T05:19:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10060948-03",
     "title": "פגיעות ופיצוצים חוזרים בתשתיות הגז והאנרגיה בסוריה",
     "summary": "שלושה פיצוצים התרחשו בתוך כשישה שבועות בצינורות גז בסוריה, בהם מתקן ג'בסה בחסכה, קו הגז בדיר א-זור וצינור אספקה לתחנת הכוח תשרין ליד דמשק.",
     "axis": "פנים סוריה - תשתיות אנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T09:07:47+00:00",
     "last_update_at": "2026-10-05T09:48:02+00:00",
     "what_is_not_verified": "זהות הגורמים המבצעים והאם הפיצוץ ליד דמשק נבע מחבלה או מתקלה טכנית",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/three-blasts-in-six-weeks-syrias-energy-infrastructure-faces-a-security-test/",
       "published_at": "2026-10-05T09:07:47+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-10060948-04",
     "title": "פתיחת תרגיל צבאי משותף של צבא לבנון ובריטניה",
     "summary": "צבא לבנון פתח בתרגיל משותף בשם פגסוס סידר 2026 עם כוחות צבא בריטניה, בהשתתפות נציגים מארצות הברית, צרפת ומדינות נוספות, במטרה לשפר יכולות לחימה וסיור.",
     "axis": "לבנון - סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T21:38:21+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T21:38:21+00:00",
     "last_update_at": "2026-10-05T21:38:21+00:00",
     "what_is_not_verified": "היקף הכוחות המשתתפים בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-hold-joint-drills-britain",
       "published_at": "2026-10-05T21:38:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10060948-05",
     "title": "מהלכים לחיזוק נוכחות שלטון לבנון בדרום המדינה ושיח מול חיזבאללה",
     "summary": "ראש ממשלת לבנון מקדם תוכנית לחיזוק נוכחות המדינה והצבא בדרום לבנון ולשיפור השירותים הציבוריים, לצד פתיחת ערוצי הדברות עם חיזבאללה בעקבות שיחותיו בארצות הברית.",
     "axis": "ממשלת לבנון - חיזבאללה - דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T13:58:00+00:00",
     "last_update_at": "2026-10-05T14:03:00+00:00",
     "what_is_not_verified": "תוכן המגעים הספציפי והסכמות ישירות עם חיזבאללה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/961324/after-washington-talks-salam-turns-to-three-key-files-at-home/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961324",
       "published_at": "2026-10-05T14:03:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/961310/three-years-after-october-7-attack-israel-steps-up-threats-against-ira/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961310",
       "published_at": "2026-10-05T13:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "א-נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10060948-06",
     "title": "הברחות בני אדם בגבול לבנון-סוריה",
     "summary": "שלטונות לבנון מתמודדים עם תופעת הברחות ומסתננים דרך הגבול עם סוריה באמצעות סירות ורכבי שטח, על רקע חשש מחדירת גורמים עוינים.",
     "axis": "גבול לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-06T08:36:47+00:00",
     "last_update_at": "2026-10-06T08:36:47+00:00",
     "what_is_not_verified": "מספר המסתננים המדויק וזהות רשתות ההברחה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1ilf7gozl",
       "published_at": "2026-10-06T08:36:47+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10060948-07",
     "title": "חתימת הסכם פיתוח ונדל\"ן בין סוריה לחברה מאיחוד האמירויות",
     "summary": "ממשלת סוריה חתמה על הסכם מסגרת עם חברת איגל הילס מאיחוד האמירויות להקמת מיזמי מגורים ותיירות גדולים באזור דמשק ועיר החוף לטקיה.",
     "axis": "סוריה - שיקום וכלכלה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T22:53:41+00:00",
     "last_update_at": "2026-10-05T22:53:41+00:00",
     "what_is_not_verified": "העלות הכוללת ומועדי הסיום של הפרויקטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/emirati-firm-plans-mega-property-development-projects-syria",
       "published_at": "2026-10-05T22:53:41+00:00"
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
     "id": "NORTH-10060948-08",
     "title": "קריאה של פוליטיקאי ישראלי להשתלטות על א-סווידא",
     "summary": "השר לשעבר איוב קרא התבטא בפומבי וקרא לעדה הדרוזית לפעול להשתלטות על העיר א-סווידא שבדרום סוריה.",
     "axis": "ישראל - דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T23:48:35+00:00",
     "last_update_at": "2026-10-05T23:48:35+00:00",
     "what_is_not_verified": "קיומה של תוכנית מעשית או גיבוי ממלכתי לדברים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-israeli-druze-politician-calls-seizing-syrias-sweida",
       "published_at": "2026-10-05T23:48:35+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    }
   ],
   "not_verified": [
    "הסיבה המדויקת לפיצוץ בצינור הגז המוביל לתחנת הכוח תשרין (חבלה או כשל טכני)",
    "זהות המבצעים של הפגיעות בצינורות הגז ברחבי סוריה",
    "העלות והתאריכים להשלמת פרויקטי הנדל\"ן של חברת איגל הילס בסוריה",
    "ההיקף המדויק של הנפגעים והחשודים בכלל התקריות הנקודתיות בדרום סוריה"
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת כל איום על אזרחי ישראל וכוחות צה\"ל במרחב האבטחה בדרום סוריה",
      "טיהור המרחב הביטחוני מאמצעי לחימה ישנים"
     ],
     "inferred": [
      "מניעת התבססות של גורמים עוינים סמוך לגבול ברמת הגולן",
      "שימור חופש פעולה ונוכחות צבאית ממושכת בדרום לבנון למניעת התעצמות חיזבאללה"
     ],
     "forecast": [
      "המשך פעילות סיכול ומעצרים נקודתיים לאורך קו הגבול והאבטחה בסוריה ובלבנון"
     ]
    },
    {
     "actor": "סוריה (השלטון החדש)",
     "declared": [
      "דרישה להפסקת התקיפות ולנסיגה ישראלית מלאה מכל השטחים הכבושים",
      "מימוש ריבונות מלאה על כל שטח המדינה ושיקום תשתיות הדיור והתעופה"
     ],
     "inferred": [
      "גיוס תמיכה דיפלומטית ערבית ובינלאומית לבלימת פעילות ישראל",
      "משיכת השקעות ממדינות המפרץ למימון שיקום המדינה לאחר המלחמה"
     ],
     "forecast": [
      "המשך הגשת תלונות במוסדות האו\"ם במקביל לקידום פרויקטי בנייה ותשתיות זרים"
     ]
    },
    {
     "actor": "ממשלת לבנון וצבאה",
     "declared": [
      "חיזוק נוכחות המדינה וצבא לבנון בדרום המדינה ברמה הצבאית והאזרחית",
      "הגברת התיאום ואימון היחידות באמצעות תרגילים צבאיים עם מדינות זרות"
     ],
     "inferred": [
      "הפחתת הדומיננטיות העצמאית של חיזבאללה בדרום תוך שמירה על יציבות פנימית",
      "הסתמכות גוברת על מימון ואימון ממדינות המערב"
     ],
     "forecast": [
      "הרחבת התיאום הביטחוני הבינלאומי לצד ניסיונות זהירים להגיע להבנות עם חיזבאללה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/three-blasts-in-six-weeks-syrias-energy-infrastructure-faces-a-security-test/",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-raid-in-syria-s-quneitra/4079190",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/961310/three-years-after-october-7-attack-israel-steps-up-threats-against-ira/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961310",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-israeli-druze-politician-calls-seizing-syrias-sweida",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/emirati-firm-plans-mega-property-development-projects-syria",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131423",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25291",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94498",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956358",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1ilf7gozl",
     "accessed_at": "2026-10-06T09:48:02+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-05T19:33:35+00:00",
  "changes": {
   "NORTH-10060948-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "איתור אמצעי לחימה בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10060948-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "גינויים סוריים וערביים לפעילות ישראלית בשטח סוריה",
    "score": 1.0
   },
   "NORTH-10060948-03": {
    "kind": "new"
   },
   "NORTH-10060948-04": {
    "kind": "new"
   },
   "NORTH-10060948-05": {
    "kind": "possible",
    "prev": "ירי ארטילרי ישראלי בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10060948-06": {
    "kind": "new"
   },
   "NORTH-10060948-07": {
    "kind": "new"
   },
   "NORTH-10060948-08": {
    "kind": "new"
   }
  }
 }
};
