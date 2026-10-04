/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-04T1542__yemen-202610041542.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-04T15:42:33+00:00",
   "window": {
    "from": "2026-10-03T15:42:33+00:00",
    "to": "2026-10-04T15:42:33+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "yemen-202610041542"
   },
   "summary": "הלחימה בתימן החריפה עם הכרזת ממשלת תימן על מתקפת נגד כוללת להשבת השטחים שנכבשו, לצד סיוע אווירי של סעודיה. במקביל, כוחות החות'ים המשיכו להתקדם בשטח, ניתקו את ציר האספקה הראשי בין תעז לעדן והטילו מצור על העיר תעז. במקביל נמשכים חילופי מהלומות כבדים בין החות'ים לסעודיה הכוללים תקיפות על מתקני נפט בריאד והפצצות אוויריות נרחבות בצנעא.",
   "fronts": [
    {
     "name": "חזית מחוז תעז ודרום-מערב תימן",
     "status": "התקדמות חות'ית וחסימת ציר תעז-עדן אל מול הכרזת מתקפת נגד ממשלתית"
    },
    {
     "name": "חזית תימן - ערב הסעודית",
     "status": "הסלמה בתקיפות הדדיות על ערי הבירה ריאד וצנעא ופגיעה במתקני אנרגיה"
    },
    {
     "name": "מרחב ים סוף ומצר באב אל-מנדב",
     "status": "שליטה חות'ית מוגברת לאורך החוף לאחר כיבוש שטחים נרחבים לאחרונה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10041542-01",
     "title": "הכרזת ממשלת תימן על מבצע צבאי נרחב להשבת השליטה בשטחי החות'ים",
     "summary": "יושב ראש מועצת ההנהגה הנשיאותית של תימן, רשאד אל-עלימי, הודיע על פתיחת מבצע צבאי כולל של כוחות הממשלה בסיוע אווירי סעודי במטרה להשיב את השליטה בכלל שטחי המדינה מידי החות'ים.",
     "axis": "פנים-תימני / ממשלת תימן מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T12:15:04+00:00",
     "last_update_at": "2026-10-04T14:22:09+00:00",
     "what_is_not_verified": "היקף הכוחות המשתתפים בפועל והיכולת לממש את המבצע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-presidency-announces-offensive-retake-houthi-territory",
       "published_at": "2026-10-04T14:22:09+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1ry66yifx",
       "published_at": "2026-10-04T13:52:18+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261004-yemen-leader-announces-counter-offensive-as-houthis-cut-off-supply-route-besieged-city-taiz",
       "published_at": "2026-10-04T12:59:17+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/4/yemens-leader-announces-military-operation-to-retake-houthi-held-territory?traffic_source=rss",
       "published_at": "2026-10-04T12:48:50+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemen-leader-announces-major-military-operations-against-iran-backed-houthis",
       "published_at": "2026-10-04T12:46:33+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94476",
       "published_at": "2026-10-04T12:42:50+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-launch-military-campaign-reclaim-houthi-controlled",
       "published_at": "2026-10-04T12:15:04+00:00"
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
     "id": "YEMEN-10041542-02",
     "title": "התקדמות חות'ית וחסימת ציר האספקה המרכזי בין תעז לעדן",
     "summary": "כוחות החות'ים השתלטו על אזור א-סאפיה וניתקו את ציר התנועה הראשי המחבר בין העיר תעז לבירה הזמנית עדן, מה שהביא להטלת מצור מבצעי על תעז.",
     "axis": "חזית מחוז תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:52:50+00:00",
     "last_update_at": "2026-10-04T14:22:09+00:00",
     "what_is_not_verified": "מידת הידוק המצור וההשפעה המיידית על כושר העמידה של עדן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-presidency-announces-offensive-retake-houthi-territory",
       "published_at": "2026-10-04T14:22:09+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1ry66yifx",
       "published_at": "2026-10-04T13:52:18+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/4/why-is-fighting-intensifying-in-yemens-taiz-governorate?traffic_source=rss",
       "published_at": "2026-10-04T13:31:15+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261004-yemen-leader-announces-counter-offensive-as-houthis-cut-off-supply-route-besieged-city-taiz",
       "published_at": "2026-10-04T12:59:17+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131322",
       "published_at": "2026-10-04T12:35:45+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-cut-vital-supply-road-yemens-taiz",
       "published_at": "2026-10-04T11:14:24+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-cut-vital-aden-taiz-road-yemen",
       "published_at": "2026-10-04T08:52:50+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-10041542-03",
     "title": "תקיפות חות'יות בטילים וכטב\"מים על מתקני נפט של אראמקו בסעודיה",
     "summary": "החות'ים שיגרו טילים בליסטיים וכלי טיס בלתי מאוישים לעבר מתקני חברת אראמקו בריאד ובח'ורייס. כתב סוכנות הידיעות הצרפתית דיווח על שריפה ועשן במתקן נפט מדרום לריאד, בעוד הקואליציה הסעודית טענה כי הטענות החות'יות מטעות.",
     "axis": "העימות בין החות'ים לסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T14:31:30+00:00",
     "last_update_at": "2026-10-04T13:56:27+00:00",
     "what_is_not_verified": "מידת הנזק המדויק באתרים וחלק מהפגיעות הנטענות על ידי החות'ים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_d356d127a956eb6d",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attacks-aramco-sites-saudi-arabia",
       "published_at": "2026-10-04T13:56:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_d356d127a956eb6d",
       "url": "https://www.newarab.com/news/houthi-claims-attack-saudi-capital-misleading",
       "published_at": "2026-10-04T10:09:39+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_d356d127a956eb6d",
       "url": "https://www.france24.com/en/yemen-s-houthis-claim-attacks-on-aramco-facilities-in-riyadh",
       "published_at": "2026-10-04T08:21:37+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_d356d127a956eb6d",
       "url": "https://t.me/abualiexpress/131312",
       "published_at": "2026-10-04T07:54:13+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.newarab.com/news/flames-smoke-seen-aramco-facility-south-saudi-capital",
       "published_at": "2026-10-03T15:12:27+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_d356d127a956eb6d",
       "url": "https://t.me/abualiexpress/131268",
       "published_at": "2026-10-03T14:33:51+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_d356d127a956eb6d",
       "url": "https://www.france24.com/en/middle-east/20261003-houthis-blame-saudi-air-strikes-loud-blasts-rock-yemen-capital-sanaa",
       "published_at": "2026-10-03T14:31:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ח'ורייס, ערב הסעודית",
       "lat": 25.2677,
       "lon": 48.1771
      }
     ]
    },
    {
     "id": "YEMEN-10041542-04",
     "title": "גל תקיפות אוויריות נרחב של סעודיה וממשלת תימן בצנעא ובמחוזות נוספים",
     "summary": "מטוסי הקואליציה בראשות סעודיה וכוחות הממשלה ביצעו עשרות תקיפות אוויריות על מטרות חות'יות בבירה צנעא ובמחוזות אל-ג'וף, תעז, עמראן, חג'ה וסעדה, בתגובה לשיגורים לעבר שטח הממלכה.",
     "axis": "העימות בין החות'ים לסעודיה וממשלת תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-03T14:31:30+00:00",
     "last_update_at": "2026-10-04T13:56:27+00:00",
     "what_is_not_verified": "המספר המדויק של התקיפות (נטען בין עשרות ל-50)",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attacks-aramco-sites-saudi-arabia",
       "published_at": "2026-10-04T13:56:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.newarab.com/news/houthi-claims-attack-saudi-capital-misleading",
       "published_at": "2026-10-04T10:09:39+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.france24.com/en/yemen-s-houthis-claim-attacks-on-aramco-facilities-in-riyadh",
       "published_at": "2026-10-04T08:21:37+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://t.me/abualiexpress/131312",
       "published_at": "2026-10-04T07:54:13+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.al-monitor.com/originals/2026/10/yemen-government-forces-say-struck-houthi-targets",
       "published_at": "2026-10-03T15:30:24+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.newarab.com/news/flames-smoke-seen-aramco-facility-south-saudi-capital",
       "published_at": "2026-10-03T15:12:27+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://t.me/abualiexpress/131268",
       "published_at": "2026-10-03T14:33:51+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_6de79581bf0b1260",
       "url": "https://www.france24.com/en/middle-east/20261003-houthis-blame-saudi-air-strikes-loud-blasts-rock-yemen-capital-sanaa",
       "published_at": "2026-10-03T14:31:30+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-10041542-05",
     "title": "כינוס הקבינט המדיני-ביטחוני בישראל לדיון בזירה החות'ית",
     "summary": "הקבינט המדיני-ביטחוני בישראל התכנס לדיון מיוחד שהוקדש להתפתחויות בזירה החות'ית בתימן.",
     "axis": "ישראל מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T12:01:23+00:00",
     "last_update_at": "2026-10-04T12:01:23+00:00",
     "what_is_not_verified": "תוכן ההחלטות שהתקבלו בדיון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1373469",
       "published_at": "2026-10-04T12:01:23+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים לפגיעות מדויקות ושריפות בכלל מתקני אראמקו בריאד ובח'ורייס לעומת הכחשת הקואליציה",
    "היקף הכוחות הממשלתיים והסעודיים הצפויים להשתתף במבצע (דיווחים על עד 100,000 חיילים)",
    "מספר התקיפות האוויריות המדויק שביצעה סעודיה בצנעא ובמחוזות השונים"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ממשלת תימן והקואליציה בראשות סעודיה",
     "declared": [
      "השבת כלל שטחי המדינה ושחרורם מידי המיליציה החות'ית",
      "הרחבת סמכות מוסדות המדינה על פני כל השטח הלאומי של תימן"
     ],
     "inferred": [
      "בלימת ההתקדמות החות'ית לעבר עדן ומניעת נפילת תעז",
      "הסרת האיום החות'י מעל מצר באב אל-מנדב ונתיבי השיט, וצמצום הפגיעה במתקני האנרגיה הסעודיים"
     ],
     "forecast": [
      "החרפת הקרבות הקרקעיים במחוז תעז ובאזור החוף, לצד הגברת התקיפות האוויריות על מוקדי שלטון חות'יים"
     ]
    },
    {
     "actor": "תנועת החות'ים (אנצאר אללה)",
     "declared": [
      "המשך תגובה בהסלמה כנגד התקיפות הסעודיות ופגיעה במתקני צבא ואנרגיה של הממלכה",
      "הטלת מצור ימי על ערב הסעודית"
     ],
     "inferred": [
      "השלמת כיתור וכיבוש העיר תעז וניתוקה המוחלט ממוקדי הכוח הממשלתיים בדרום",
      "ביסוס השליטה על קו החוף ומצרי באב אל-מנדב כמנוף לחץ אזורי ובינלאומי"
     ],
     "forecast": [
      "המשך ירי טילים וכטב\"מים לעבר מתקני נפט ותשתיות אסטרטגיות בסעודיה במקביל ללחץ צבאי מוגבר על תעז ועדן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/4/why-is-fighting-intensifying-in-yemens-taiz-governorate?traffic_source=rss",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemen-government-forces-say-struck-houthi-targets",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261003-houthis-blame-saudi-air-strikes-loud-blasts-rock-yemen-capital-sanaa",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1373469",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attacks-aramco-sites-saudi-arabia",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/flames-smoke-seen-aramco-facility-south-saudi-capital",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131268",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94476",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1ry66yifx",
     "accessed_at": "2026-10-04T15:42:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-03T05:52:32+00:00",
  "changes": {
   "YEMEN-10041542-01": {
    "kind": "possible",
    "prev": "פעולות צבא תימן נגד החות'ים בטאיז",
    "score": 0.467
   },
   "YEMEN-10041542-02": {
    "kind": "possible",
    "prev": "תקיפות החות'ים בעדן",
    "score": 0.633
   },
   "YEMEN-10041542-03": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "יירוט טילים וכטב\"מים באזור סעודיה",
    "score": 0.65
   },
   "YEMEN-10041542-04": {
    "kind": "new"
   },
   "YEMEN-10041542-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-04T1529__iran-202610041529.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-04T15:29:08+00:00",
   "window": {
    "from": "2026-10-03T15:29:08+00:00",
    "to": "2026-10-04T15:29:08+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610041529"
   },
   "summary": "הזירה מאופיינת במתיחות רבה סביב שליטת ארה\"ב במצר הורמוז, לצד סנקציות כלכליות חמורות המפעילות לחץ כבד על הכלכלה והמטבע באיראן. איראן ממשיכה לדרוש תנאים לפתיחת המצר ומאיימת בשדרוג טווח טיליה נגד בסיסים אמריקניים, בעוד ארה\"ב וישראל ממשיכות לשמור את כל האפשרויות פתוחות ולבחון את צעדיהן הבאים.",
   "fronts": [
    {
     "name": "המפרץ והורמוז",
     "status": "פעיל ומתוח"
    },
    {
     "name": "הזירה הדיפלומטית-כלכלית",
     "status": "בסנקציות ועימות כלכלי"
    }
   ],
   "events": [
    {
     "id": "IRAN-10041529-01",
     "title": "תקיפת מכלית במצר הורמוז",
     "summary": "מכלית נפגעה על ידי קליע לא מזוהה במצר הורמוז ונגרם נזק לחדר המכונות שלה, ללא נפגעים בקרב הצוות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T09:07:28+00:00",
     "last_update_at": "2026-10-04T09:07:28+00:00",
     "what_is_not_verified": "זהות אלגורם או אמצעי הלחימה שפגע במכלית אינם ידועים בוודאות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2c26db0ba0effb3c",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tanker-hit-unknown-projectile-strait-hormuz-ukmto-says",
       "published_at": "2026-10-04T09:07:28+00:00"
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
     "id": "IRAN-10041529-02",
     "title": "עמדות איראניות בנוגע לסגירת מצר הורמוז והצעת 7 הימים",
     "summary": "בכירים באיראן ציינו כי הם בוחנים את תגובת ארצות הברית להצעתם בת שבעת הימים לפתיחת מצר הורמוז, אך הדגישו כי המצר יישאר סגור עד שוושינגטון תעמוד בשבעה תנאים.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:55:24+00:00",
     "last_update_at": "2026-10-04T14:52:46+00:00",
     "what_is_not_verified": "פרטי התגובה האמריקאית המדויקים ותוקף ההצעה אינם מאומתים מעבר לדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_irna",
       "url": "https://en.irna.ir/news/86283103/US-response-to-Iran-s-7-day-proposal-being-reviewed-Deputy-FM",
       "published_at": "2026-10-04T14:52:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_irna",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-reponse-hormuz-proposal-currently-under-review-tehran",
       "published_at": "2026-10-04T13:49:52+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_irna",
       "url": "https://www.iranintl.com/en/202610047470",
       "published_at": "2026-10-04T13:22:34+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_irna",
       "url": "https://www.aljazeera.com/news/2026/10/4/iran-says-strait-of-hormuz-to-remain-closed-until-us-meets-conditions?traffic_source=rss",
       "published_at": "2026-10-04T11:11:30+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_irna",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-hormuz-strait-remain-closed-until-us-meets-seven-conditions",
       "published_at": "2026-10-04T08:55:24+00:00"
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
     "id": "IRAN-10041529-03",
     "title": "הצהרת איראן על שדרוג טווח הטילים",
     "summary": "דובר צבא איראן הכריז על כוונת ארצו להגדיל את טווח הטילים הבליסטיים כדי לפגוע בבסיסים אמריקניים מרוחקים.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T11:12:20+00:00",
     "last_update_at": "2026-10-04T11:15:09+00:00",
     "what_is_not_verified": "האם הטילים אכן שודרגו בפועל מעבר להצהרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_israel_hayom",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21548568",
       "published_at": "2026-10-04T11:15:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_israel_hayom",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-increase-range-its-missiles-army-spokesperson-tells-fars",
       "published_at": "2026-10-04T11:12:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10041529-04",
     "title": "פסיקת מאסר לתושב באר שבע בגין מגע עם סוכן איראני",
     "summary": "תושב באר שבע נידון לשלוש שנות מאסר לאחר שהורשע במגע עם סוכן איראני והציע לו מידע תמורת תשלום.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T07:45:22+00:00",
     "last_update_at": "2026-10-04T07:45:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_c1560725396e6260",
       "url": "https://www.ynet.co.il/news/article/b1sdfkjofe",
       "published_at": "2026-10-04T07:45:22+00:00"
      }
     ],
     "places": [
      {
       "name": "באר שבע, ישראל",
       "lat": 31.2457,
       "lon": 34.7925
      },
      {
       "name": "דימונה, ישראל",
       "lat": 31.0687,
       "lon": 35.0366
      }
     ]
    }
   ],
   "not_verified": [
    "פרטי תגובת ארצות הברית המלאה להצעת שבעת הימים של איראן.",
    "היactual יכולות של איראן לפגוע במטרות מרוחקות בטווחים של מעל 1,000 קילומטרים."
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "סגירת מצר הורמוז עד לקיום תנאים מסוימים",
      "הרחבת טווח הטילים הבליסטיים"
     ],
     "inferred": [
      "הפחתת הלחץ הכלכלי באמצעות לחץ על נתיבי השיט",
      "הרתעת כוחות ארה\"ב במרחב"
     ],
     "forecast": [
      "המשך מאבק כלכלי וצבאי מוגבל נגד נוכחות זרה במפרץ",
      "שמירה על סירוב לפתרונות צבאיים מוכתבים"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "מניעת נשק גרעיני מאיראן",
      "הבטחת זרימת נפט חופשית דרך מצר הורמוז"
     ],
     "inferred": [
      "הגברת הלחץ הכלכלי והפיננסי על טהרן",
      "היערכות צבאית מתמשכת כאופציה לתגובה"
     ],
     "forecast": [
      "שמירה על פריסת כוחות מוגברת באזור",
      "המשך הלחץ הכלכלי על איראן לצד פתיחת פתח למוסדות תיווך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/4/iran-says-strait-of-hormuz-to-remain-closed-until-us-meets-conditions?traffic_source=rss",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610047470",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86283103/US-response-to-Iran-s-7-day-proposal-being-reviewed-Deputy-FM",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21548568",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-increase-range-its-missiles-army-spokesperson-tells-fars",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1sdfkjofe",
     "accessed_at": "2026-10-04T15:29:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-03T23:40:33+00:00",
  "changes": {
   "IRAN-10041529-01": {
    "kind": "new"
   },
   "IRAN-10041529-02": {
    "kind": "possible",
    "prev": "העברת מטען נפט גולמי דרך מצר הורמוז על ידי עיראק",
    "score": 0.467
   },
   "IRAN-10041529-03": {
    "kind": "possible",
    "prev": "הצהרת נשיא איראן על היערכות כלכלית מול סנקציות",
    "score": 0.467
   },
   "IRAN-10041529-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-04T1541__ukraine-202610041541.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-04T15:41:12+00:00",
   "window": {
    "from": "2026-10-03T15:41:12+00:00",
    "to": "2026-10-04T15:41:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610041541"
   },
   "summary": "צבא רוסיה מרחיב את מתקפותיו האוויריות על תשתיות תחבורה ותקשורת בקייב, בדגש על פגיעה מתמשכת בגשרים מרכזיים מעל נהר הדנייפר באמצעות כטב\"מים מהירים. במקביל, כוחות אוקראינה מעמיקים את הפגיעה בעומק השטח הרוסי ותוקפים בסיסי חיל אוויר ומתקני אנרגיה. בזירה המדינית נמשכת ההתבססות של קייב על סיוע אירופי מוגבר בעוד נבחנת אפשרות לשיחות טכניות משולשות לקראת החורף.",
   "fronts": [
    {
     "name": "העורף האוקראיני ומרחב קייב",
     "status": "תקיפות אוויריות מוגברות של רוסיה על גשרים, מרכזי נתונים ותשתיות אזרחיות לצד עיבוי מערכות יירוט"
    },
    {
     "name": "החזית המזרחית (דונבאס)",
     "status": "מתקפת נגד אוקראינית תחת השם ויוואלדי שהביאה לשחרור של כ-140 קמ\"ר"
    },
    {
     "name": "עומק רוסיה ומתקנים אסטרטגיים",
     "status": "תקיפות כטב\"מים אוקראיניות נגד מטוסי קרב בבסיסי חיל אוויר ופגיעות בתשתיות בדרום רוסיה ובקרים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10041541-01",
     "title": "תקיפת כטב\"מים אוקראינית על בסיס טיסה באדיגיה",
     "summary": "כטב\"מים של יחידת אלפא בשירות הביטחון של אוקראינה פגעו במטוסי קרב מסוג סוחוי-35 וסוחוי-34 בבסיס חאנסקאיה שברפובליקת אדיגיה ברוסיה, במרחק של כ-500 קילומטרים.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T13:17:00+00:00",
     "last_update_at": "2026-10-04T15:13:46+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למטוסים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_93f7211839d8696e",
       "url": "https://kyivindependent.com/russian-su-35-su-34-fighter-jets-hit-by-drones-at-airfield-in-adygea-sbu-says/",
       "published_at": "2026-10-04T15:13:46+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_93f7211839d8696e",
       "url": "https://www.ukrinform.net/rubric-ato/4170953-ukrainian-drones-hit-two-russian-fighter-jets-at-air-base-in-adygea.html",
       "published_at": "2026-10-04T14:43:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_93f7211839d8696e",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056419/",
       "published_at": "2026-10-04T13:17:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס חאנסקאיה, אדיגיה, רוסיה",
       "lat": 44.6783,
       "lon": 40.0317
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-02",
     "title": "פגיעות כטב\"מים בגשר הצפוני בקייב",
     "summary": "רוסיה תקפה את הגשר הצפוני מעל נהר הדנייפר בקייב באמצעות כטב\"מים, מה שהוביל לפציעת שני בני אדם ולשיבושי תנועה כבדים.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T09:14:04+00:00",
     "last_update_at": "2026-10-04T14:53:11+00:00",
     "what_is_not_verified": "האם מדובר בטיל שיוט או בכטב\"ם סילוני כפי שנטען בחלק מהדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48245",
       "published_at": "2026-10-04T14:53:11+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/04/friedrich-merz-german-chancellor-ukraine-kyiv-russia-strikes-war-zelenskyy-putin-europe-latest-news-updates",
       "published_at": "2026-10-04T14:35:31+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170930-two-people-injured-in-russian-strike-on-northern-bridge-in-kyiv.html",
       "published_at": "2026-10-04T12:24:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckreyjzzzywqo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-04T12:09:04+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/04/russia-strikes-kyiv-bridge-german-chancellor-merz-visits-ukraine",
       "published_at": "2026-10-04T11:53:09+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131320",
       "published_at": "2026-10-04T11:49:15+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21548548",
       "published_at": "2026-10-04T11:29:21+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/byasbjyszg",
       "published_at": "2026-10-04T10:30:41+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-targets-kyiv-bridges-for-fourth-consecutive-day-hits-northern-bridge/",
       "published_at": "2026-10-04T09:14:04+00:00"
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
     "id": "UKRAINE-10041541-03",
     "title": "התרסקות כלי טיס בלתי מאויש במחוז אובולון בקייב",
     "summary": "כלי טיס בלתי מאויש רוסי הנושא חימוש שלא התפוצץ התרסק ברובע אובולון שבקייב, וצוותי חירום הוזעקו לזירה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T15:08:00+00:00",
     "last_update_at": "2026-10-04T15:08:00+00:00",
     "what_is_not_verified": "נסיבות ההתרסקות והיקף הנזק סביב הנפילה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056436/",
       "published_at": "2026-10-04T15:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "רובע אובולונסקי, קייב, אוקראינה",
       "lat": 50.5306,
       "lon": 30.4384
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-04",
     "title": "ביקור קנצלר גרמניה בקייב והכרזה על חבילת סיוע",
     "summary": "קנצלר גרמניה פרידריך מרץ הגיע לביקור רשמי בקייב והודיע יחד עם זלנסקי על חבילת סיוע ביטחוני בשווי 1.46 מיליארד דולר ועל הסכם לשיתוף פעולה ביירוט כטב\"מים.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T06:58:11+00:00",
     "last_update_at": "2026-10-04T15:00:00+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק להגעת כטב\"מי היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170960-germany-working-to-accelerate-ukraines-accession-to-eu-merz.html",
       "published_at": "2026-10-04T15:00:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/04/friedrich-merz-german-chancellor-ukraine-kyiv-russia-strikes-war-zelenskyy-putin-europe-latest-news-updates",
       "published_at": "2026-10-04T14:35:31+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170952-zelensky-merz-meet-rescuers-who-cleared-aftermath-of-russian-strike-on-science-academy-in-kyiv.html",
       "published_at": "2026-10-04T14:22:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170948-ukraine-germany-sign-agreement-on-cooperation-in-countering-uavs.html",
       "published_at": "2026-10-04T14:02:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/germany-announces-1-46-billion-in-aid-for-ukraine-including-interceptor-drones/",
       "published_at": "2026-10-04T13:18:47+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/german-chancellor-merz-arrives-in-kyiv-pledges-further-support-for-ukraine/",
       "published_at": "2026-10-04T06:58:11+00:00"
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
     "id": "UKRAINE-10041541-05",
     "title": "שריפות בתחנות כוח סולאריות בחצי האי קרים",
     "summary": "שריפה פרצה בתחנת כוח סולארית בניקולייבקה שבמחוז סימפרופול בחצי האי קרים הכבוש, לפי פרסומים ברשתות החברתיות.",
     "axis": "קרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T15:26:00+00:00",
     "last_update_at": "2026-10-04T15:26:00+00:00",
     "what_is_not_verified": "סיבת פרוץ השריפות ומידת הפגיעה בתחנה השנייה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170977-fires-break-out-at-two-solar-power-plants-in-occupied-crimea-social-media.html",
       "published_at": "2026-10-04T15:26:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז סימפרופול, קרים",
       "lat": 44.9402,
       "lon": 34.1198
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-06",
     "title": "אספקת סיוע הומניטרי באמצעות רחפנים לעיר אולשקי",
     "summary": "הצבא האוקראיני ביצע מבצע שני להטסת סיוע הומניטרי באמצעות רחפנים לתושבי העיר הכבושה אולשקי הסובלים ממחסור במזון, מים ותרופות.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T14:41:31+00:00",
     "last_update_at": "2026-10-04T14:41:31+00:00",
     "what_is_not_verified": "כמות הציוד שהועברה בפועל במבצע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/news-from-occupied-ukraine-military-delivers-aid-by-drone-to-occupied-oleshky-in-second-operation/",
       "published_at": "2026-10-04T14:41:31+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-10041541-07",
     "title": "הסכמת אוקראינה למפגש טכני משולש באיחוד האמירויות",
     "summary": "הנשיא זלנסקי הודיע כי אוקראינה הביעה נכונות להשתתף במפגש טכני משולש עם ארצות הברית ורוסיה שתוכנן להתקיים באיחוד האמירויות עד סוף חודש אוקטובר.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T13:39:00+00:00",
     "last_update_at": "2026-10-04T13:45:00+00:00",
     "what_is_not_verified": "האם רוסיה הסכימה לקחת חלק במפגש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4170947-ukraine-agrees-to-trilateral-technical-meeting-in-uae-ball-is-now-in-russias-court-zelensky.html",
       "published_at": "2026-10-04T13:45:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056421/",
       "published_at": "2026-10-04T13:39:00+00:00"
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
     "id": "UKRAINE-10041541-08",
     "title": "הצבת עמדות יירוט כטב\"מים באזור קייב",
     "summary": "נשיא אוקראינה מסר כי מעל שתים-עשרה עמדות יירוט מיוחדות להתמודדות עם כטב\"מי סילון הוצבו בקייב, ושמונה נוספות יוצבו ברחבי המחוז.",
     "axis": "קייב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T13:28:00+00:00",
     "last_update_at": "2026-10-04T13:28:00+00:00",
     "what_is_not_verified": "מועד הפריסה המלא של העמדות הנוספות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170944-zelensky-more-than-12-turrets-to-counter-jetpowered-drones-installed-in-kyiv.html",
       "published_at": "2026-10-04T13:28:00+00:00"
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
     "id": "UKRAINE-10041541-09",
     "title": "איום רוסי בפגיעה בלווייני סטארלינק",
     "summary": "דמיטרי מדבדב איים כי ניסיון לפגוע במערך הלוויינים הרוסי רסבט יוביל לתגובה נגד לווייני סטארלינק וללוחמת חלל כוללת.",
     "axis": "רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T12:42:00+00:00",
     "last_update_at": "2026-10-04T12:42:00+00:00",
     "what_is_not_verified": "היכולת המעשית והאמצעים שבהם רוסיה מתכוונת לפגוע בלוויינים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_772f8be306c420f1",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056413/",
       "published_at": "2026-10-04T12:42:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "סוג החימוש שפגע בגשר הצפוני בקייב – טיל שיוט מדגם S8000 או כטב\"ם סילוני",
    "טענת אוקראינה לפיה בידיה מסמכי מודיעין על דוקטרינה רוסית לתקיפת אזרחים בלבד כדי לרוקן ערים",
    "תוכניות פינוי של שגרירויות מערביות מקייב בעקבות התקיפות",
    "סיבת השריפות בתחנות הכוח הסולאריות בחצי האי קרים"
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
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "להגביר תקיפות נגד בתי זיקוק רוסיים כדי לפגוע במימון המלחמה",
      "לקדם הצטרפות מואצת לאיחוד האירופי ולהשיג הסכמי יירוט כטב\"מים עם גרמניה",
      "להשתתף במפגש טכני משולש באיחוד האמירויות לבחינת הפסקת תקיפות הדדית על אנרגיה"
     ],
     "inferred": [
      "החלשת יכולות חיל האוויר הרוסי באמצעות פגיעה במטוסים מתקדמים בעומק הבסיסים",
      "הגנה דחופה על נתיבי התחבורה והתקשורת בבירה קייב לקראת עונת החורף"
     ],
     "forecast": [
      "המשך מיקוד התקיפות בנכסי נפט ותעופה בעומק רוסיה לצד פריסת עמדות הגנה אווירית נוספות סביב קייב"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "תקיפת מתקני תעשייה ביטחונית ותשתיות נלוות בתגובה לפעולות אוקראינה",
      "איום בהשמדת לווייני סטארלינק אם יוטלו סנקציות או ייחסם מערך רסבט"
     ],
     "inferred": [
      "שיבוש התנועה והתקשורת בקייב כדי להפעיל לחץ פסיכולוגי ואזרחי על הנהגת המדינה",
      "שליטה מלאה במחוז דונבאס כתנאי מוקדם לכל משא ומתן עתידי"
     ],
     "forecast": [
      "המשך שימוש נרחב בכטב\"מי סילון לפגיעה בגשרים, מתקני אנרגיה ומרכזי נתונים באוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckreyjzzzywqo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/04/friedrich-merz-german-chancellor-ukraine-kyiv-russia-strikes-war-zelenskyy-putin-europe-latest-news-updates",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21548548",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/news-from-occupied-ukraine-military-delivers-aid-by-drone-to-occupied-oleshky-in-second-operation/",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/04/8056413/",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131320",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48245",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4170944-zelensky-more-than-12-turrets-to-counter-jetpowered-drones-installed-in-kyiv.html",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/byasbjyszg",
     "accessed_at": "2026-10-04T15:41:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-04T02:51:47+00:00",
  "changes": {
   "UKRAINE-10041541-01": {
    "kind": "new"
   },
   "UKRAINE-10041541-02": {
    "kind": "new"
   },
   "UKRAINE-10041541-03": {
    "kind": "new"
   },
   "UKRAINE-10041541-04": {
    "kind": "new"
   },
   "UKRAINE-10041541-05": {
    "kind": "new"
   },
   "UKRAINE-10041541-06": {
    "kind": "new"
   },
   "UKRAINE-10041541-07": {
    "kind": "new"
   },
   "UKRAINE-10041541-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות כטב\"מים רוסיים על גשרי נהר הדניפרו בקייב",
    "score": 0.817
   },
   "UKRAINE-10041541-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-04T1553__north-202610041553.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-04T15:53:47+00:00",
   "window": {
    "from": "2026-10-03T15:53:47+00:00",
    "to": "2026-10-04T15:53:47+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610041553"
   },
   "summary": "בזירה הצפונית נמשכות תקריות אש ותקיפות בין ישראל לכוחות בדרום לבנון, לצד פעילות הנדסית ונוכחות מוגברת של צה\"ל מעבר לקו הגבול. בסוריה מתרחשות הפרות והפגזות מצד ישראל לצד שיבושים מערכתיים בתשתיות האנרגיה המקומיות.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעיל חלקית עם הפגזות ותקיפות אוויריות לצד היערכות צבאית"
    },
    {
     "name": "החזית הסורית",
     "status": "פעיל עם תקיפות והפרות ישראליות בשטח סוריה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10041553-01",
     "title": "כנס צופי חזבאללה בדאחיה",
     "summary": "נערך כנס הצופים השנתי של חזבאללה בהשתתפות 17 אלף צופים בדאחיה של ביירות",
     "axis": "לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T15:50:41+00:00",
     "last_update_at": "2026-10-04T15:50:41+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131332",
       "published_at": "2026-10-04T15:50:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10041553-02",
     "title": "פגיעה בתשתיות אנרגיה בסוריה",
     "summary": "פיצוץ בצינור גז טבעי הוביל להשבתה זמנית של תחנות כוח, לצד מתקפות נוספות על קווי גז ופגיעה באנשי צוות",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T15:16:10+00:00",
     "last_update_at": "2026-10-04T15:16:10+00:00",
     "what_is_not_verified": "הזהות המדויקת של האחראים למתקפות ומשמעותן המדויקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_243bb50cab1e491e",
       "url": "https://english.enabbaladi.net/archives/2026/10/regional-signals-and-calculated-escalation-what-is-behind-attacks-on-syrias-energy-infrastructure/",
       "published_at": "2026-10-04T15:16:10+00:00"
      }
     ],
     "places": [
      {
       "name": "הגוטה המזרחית, סוריה",
       "lat": 33.4878,
       "lon": 36.3496
      },
      {
       "name": "מציאף, סוריה",
       "lat": 35.0646,
       "lon": 36.3408
      }
     ]
    },
    {
     "id": "NORTH-10041553-03",
     "title": "תקיפות והרס בדרום לבנון",
     "summary": "כוחות צבא הכיבוש הישראלי הפגיזו אזורים שונים, ביצעו פעולות הריסה ופוצצו בית ספר בדרום לבנון",
     "axis": "לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T19:28:05+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-03T19:28:05+00:00",
     "last_update_at": "2026-10-04T14:46:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_ce6132a07e5a6c14",
       "url": "https://english.almanar.com.lb/article/134227/",
       "published_at": "2026-10-04T14:46:07+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_5473bfab219d45e5",
       "url": "https://english.almanar.com.lb/article/134142/",
       "published_at": "2026-10-04T11:50:50+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_8d3fd4e5194af7cb",
       "url": "https://english.almanar.com.lb/article/134127/",
       "published_at": "2026-10-04T11:33:36+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_ce6132a07e5a6c14",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-blows-up-school-shells-towns-in-southern-lebanon-despite-ceasefire-report/4077288",
       "published_at": "2026-10-03T19:28:05+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10041553-04",
     "title": "ירי ארטילרי סמוך לרכב צבא לבנון",
     "summary": "אש ארטילרית פגעה בסביבת רכב של צבא לבנון שחנה בכביש מהיר",
     "axis": "לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T12:47:17+00:00",
     "last_update_at": "2026-10-04T12:47:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_4e30543ddd4bd13b",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/961160/artillery-shells-hit-near-lebanese-army-vehicle-in-kfar-roummane/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961160",
       "published_at": "2026-10-04T12:47:17+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר רוממאן, לבנון",
       "lat": 33.399,
       "lon": 35.5169
      }
     ]
    },
    {
     "id": "NORTH-10041553-05",
     "title": "תאונות מבצעיות ופציעת חיילים בדרום לבנון",
     "summary": "לוחמים וקצינים של צה\"ל נפצעו באורח קשה, בינוני וקל כתוצאה מתאונות מבצעיות ופיצוץ רימון במהלך פעילות בדרום לבנון",
     "axis": "לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T16:05:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T16:05:17+00:00",
     "last_update_at": "2026-10-04T05:17:14+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_a1630874a36a593d",
       "url": "https://t.me/abualiexpress/131297",
       "published_at": "2026-10-04T05:17:14+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_a1630874a36a593d",
       "url": "https://www.walla.co.il/news/military/383956179",
       "published_at": "2026-10-04T03:15:38+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_f7e6a07e3024671d",
       "url": "https://www.ynet.co.il/news/article/s1pwbcr5ze",
       "published_at": "2026-10-04T03:01:48+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_a1630874a36a593d",
       "url": "https://t.me/idf_telegram/25270",
       "published_at": "2026-10-04T03:00:46+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_a1630874a36a593d",
       "url": "https://t.me/lelotsenzura/94466",
       "published_at": "2026-10-03T16:05:17+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על הכנות לפלישה רחבת היקף ללבנון בידי גורמים סוריים",
    "ההערכות המדויקות לגבי זהות השולחים או המניעים מאחורי ניסיונות הפגיעה האוויריים"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "דרישה לנוכחות מדינתית אפקטיבית בדרום לבנון לפני דיון במונופול הנשק",
      "נכונות לדיון אסטרטגי רק לאחר נסיגה ישראלית מלאה"
     ],
     "inferred": [
      "שימור יכולות הלחימה וההשפעה האזרחית-פוליטית בדרום לבנון",
      "יצירת חזית אזרחית ותודעתית נגד צעדי ממשלת לבנון"
     ],
     "forecast": [
      "המשך מאבק פוליטי פנימי מול הממשלה בלבנון",
      "התבססות מחודשת באזורים ההרס"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "המשך הגנה על גבול הצפון והעמקת קווי ההגנה",
      "תגובה על כל איום או הפרה בגבולות"
     ],
     "inferred": [
      "מניעת התעצמות מחודשת של חזבאללה באזורי החיץ בדרום לבנון",
      "שמירת חופש פעולה מבצעי מול תשתיות טרור"
     ],
     "forecast": [
      "המשך נוכחות מבצעית עמוקה בשטחי דרום לבנון",
      "תגובות צבאיות נקודתיות על אירועים חריגים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/134127/",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-blows-up-school-shells-towns-in-southern-lebanon-despite-ceasefire-report/4077288",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/regional-signals-and-calculated-escalation-what-is-behind-attacks-on-syrias-energy-infrastructure/",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/961160/artillery-shells-hit-near-lebanese-army-vehicle-in-kfar-roummane/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-961160",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131297",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25270",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94466",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956179",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1pwbcr5ze",
     "accessed_at": "2026-10-04T15:53:47+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-02T16:46:03+00:00",
  "changes": {
   "NORTH-10041553-01": {
    "kind": "new"
   },
   "NORTH-10041553-02": {
    "kind": "new"
   },
   "NORTH-10041553-03": {
    "kind": "possible",
    "prev": "פשיטה צבאית ישראלית ומעצר תושבים בדרום סוריה",
    "score": 0.633
   },
   "NORTH-10041553-04": {
    "kind": "possible",
    "prev": "תקריות ירי ופגיעה בקצין צבא בדרום סוריה",
    "score": 0.467
   },
   "NORTH-10041553-05": {
    "kind": "possible",
    "prev": "ביקור ראש ממשלת לבנון בדרום המדינה ודרישה להסדר נסיגה",
    "score": 0.467
   }
  }
 }
};
