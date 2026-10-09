/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-09T2340__yemen-202610092340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-09T23:40:31+00:00",
   "window": {
    "from": "2026-10-08T23:40:31+00:00",
    "to": "2026-10-09T23:40:31+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610092340"
   },
   "summary": "העימות בתימן הידרדר מחדש למלחמה בהיקף מלא בין התנועה החות'ית לבין ממשלת תימן הנתמכת בידי סעודיה והקואליציה. החות'ים הרחיבו את פגיעותיהם העמוקות בעורף הסעודי ושיבשו את התעופה האזרחית, בעוד הקואליציה מנחיתה גלי תקיפות אוויריות נרחבים ומתנהלים קרבות קשים על מצר באב אל-מנדב ובחזיתות היבשתיות.",
   "fronts": [
    {
     "name": "חזית מצר באב אל-מנדב וחוף הים האדום",
     "status": "קרבות עזים בעקבות ניסיון כוחות הממשלה והקואליציה להשיב שליטה באזור מידי החות'ים"
    },
    {
     "name": "חזית העורף הסעודי (תעופה ונמלי תעופה)",
     "status": "הסלמה בתקיפות טילים וכטבמים חות'יים לעבר ריאד, יעדים בדרום סעודיה וביטולי טיסות"
    },
    {
     "name": "חזית צנעא",
     "status": "גל תקיפות אוויריות של הקואליציה על יעדים צבאיים ונמל התעופה הבינלאומי"
    },
    {
     "name": "החזיתות היבשתיות בתימן (תעז, מארב וא-דאלע)",
     "status": "מתקפות נגד יבשתיות ותקיפות רחפנים של צבא תימן תחת מבצע 'שחר תימן'"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10092340-01",
     "title": "מתקפות טילים וכטבמים חותיים על שדות תעופה בסעודיה ופגיעה בריאד",
     "summary": "כוחות החות'ים שיגרו טילי שיוט וטילים בליסטיים לעבר נמל התעופה הבינלאומי המלך ח'אלד בריאד ויעדים נוספים בסעודיה. במתקפה נהרגו שלושה אזרחים סעודים ונפגע מטוס אזרחי על הקרקע, מה שהוביל לביטולי טיסות בינלאומיות ולהוצאת אזהרות תעופה.",
     "axis": "סעודיה-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T06:46:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T06:46:34+00:00",
     "last_update_at": "2026-10-09T22:35:42+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למתקנים הצבאיים הנטענים בח'מיס מושיט ובנג'ראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-qatar-kuwait-condemn-houthi-attacks-saudi-airports",
       "published_at": "2026-10-09T22:35:42+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-says-three-killed-airport-yemen-war-expands",
       "published_at": "2026-10-09T19:59:02+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/flight-cancelled-saudi-capital-riyadh-over-houthi-attacks",
       "published_at": "2026-10-09T17:59:25+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/riyadhs-skies-remain-unsettled-after-deadly-houthi-strikes",
       "published_at": "2026-10-09T14:01:51+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmz7xe37g5wro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-09T13:50:25+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131627",
       "published_at": "2026-10-09T11:37:14+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/skbsjqijml",
       "published_at": "2026-10-09T09:17:32+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131617",
       "published_at": "2026-10-09T08:36:05+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131609",
       "published_at": "2026-10-09T06:46:34+00:00"
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
      },
      {
       "name": "נג'ראן, סעודיה",
       "lat": 17.544,
       "lon": 44.2247
      }
     ]
    },
    {
     "id": "YEMEN-10092340-02",
     "title": "תקיפות אוויריות של הקואליציה על צנעא ונמל התעופה שלה",
     "summary": "מטוסי הקואליציה בהובלת סעודיה תקפו יעדים בבירה צנעא, ובכלל זה את נמל התעופה בעיר ומבנה תעשייתי. על פי מקורות חות'יים, בהפצצות נהרגו שני בני אדם ופרצו מספר שריפות.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T19:26:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T19:26:59+00:00",
     "last_update_at": "2026-10-09T19:59:02+00:00",
     "what_is_not_verified": "מספר הנפגעים והאופי המדויק של המבנים שנפגעו בצנעא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-says-three-killed-airport-yemen-war-expands",
       "published_at": "2026-10-09T19:59:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-killed-saudi-strike-sanaa-airport-houthi-media-says",
       "published_at": "2026-10-09T19:26:59+00:00"
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
     "id": "YEMEN-10092340-03",
     "title": "מתקפה נרחבת של הקואליציה נגד מטרות צבאיות חות'יות",
     "summary": "הקואליציה בהובלת סעודיה הכריזה על השמדת 136 יעדים צבאיים של החות'ים וסיוע אווירי רצוף לכוחות הממשלה, לצד תקיפת שלושה כני שיגור טילים.",
     "axis": "סעודיה-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T08:35:15+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T08:35:15+00:00",
     "last_update_at": "2026-10-09T21:19:43+00:00",
     "what_is_not_verified": "אימות עצמאי של השמדת כל 136 המטרות וכני השיגור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2804498458c780f1",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-launches-wide-ranging-operation-against",
       "published_at": "2026-10-09T21:19:43+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_2804498458c780f1",
       "url": "https://www.sabanew.net/viewstory/153738",
       "published_at": "2026-10-09T21:14:04+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_4036050815a9ab66",
       "url": "https://www.sabanew.net/viewstory/153714",
       "published_at": "2026-10-09T08:35:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10092340-04",
     "title": "קרבות על השליטה במצר באב אל-מנדב",
     "summary": "כוחות ממשלת תימן בגיבוי אווירי סעודי פתחו במבצע להשבת השליטה במצר באב אל-מנדב מידי החות'ים. קיים פער בין הודעת השגריר הסעודי על שחרור האזור לבין דיווחי לוחמים בשטח והחות'ים על קרבות עזים ובלימת המתקפה.",
     "axis": "הים האדום ובאב אל-מנדב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T15:09:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T15:09:07+00:00",
     "last_update_at": "2026-10-09T16:32:34+00:00",
     "what_is_not_verified": "מי מחזיק בפועל בשליטה במצר באב אל-מנדב ברגע זה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-forces-launch-operation-retake-bab-al-mandab",
       "published_at": "2026-10-09T16:32:34+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-envoy-says-allied-yemeni-forces-capture-bab-el-mandeb-strait-houthis-what",
       "published_at": "2026-10-09T15:09:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10092340-05",
     "title": "לחימה קרקעית ותקיפות רחפנים במחוזות תעז, א-דאלע ומארב",
     "summary": "צבא ממשלת תימן וכוחות מקומיים מנהלים מבצע המכונה 'שחר תימן', הכולל תקיפות רחפנים מדויקות נגד עמדות, כלי רכב ומצבורי כוחות חות'יים במחוזות תעז, א-דאלע ומארב.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T11:06:18+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T11:06:18+00:00",
     "last_update_at": "2026-10-09T19:30:16+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל בקרב הפעילים החות'יים בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_e670cc6b9094172e",
       "url": "https://www.sabanew.net/viewstory/153737",
       "published_at": "2026-10-09T19:30:16+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_bbb814b00f6c41c0",
       "url": "https://www.sabanew.net/viewstory/153730",
       "published_at": "2026-10-09T16:45:21+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_d62ad504a5fe8609",
       "url": "https://www.sabanew.net/viewstory/153726",
       "published_at": "2026-10-09T13:57:58+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_e670cc6b9094172e",
       "url": "https://t.me/alexmehacarmel/48379",
       "published_at": "2026-10-09T11:06:18+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "מארב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    },
    {
     "id": "YEMEN-10092340-06",
     "title": "פניית סעודיה וממשלת תימן למועצת הביטחון בעקבות החרפת המלחמה",
     "summary": "נציגי סעודיה וממשלת תימן המוכרת דרשו ממועצת הביטחון של האו\"ם לנקוט צעדים מעשיים נגד החות'ים על רקע פגיעה באזרחים, איום על נתיבי השיט והחרפת המלחמה הכוללת.",
     "axis": "סעודיה-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T12:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T12:00:00+00:00",
     "last_update_at": "2026-10-09T20:56:01+00:00",
     "what_is_not_verified": "היקף ההיענות הבינלאומית לדרישות שהוצגו במועצה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/9/un-envoy-warns-yemen-has-returned-to-full-scale-war-urges-dialogue?traffic_source=rss",
       "published_at": "2026-10-09T20:56:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-yemeni-government-urge-un-action-against-houthis",
       "published_at": "2026-10-09T20:31:16+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168559",
       "published_at": "2026-10-09T12:00:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת שגריר סעודיה כי מצר באב אל-מנדב שוחרר במלואו מידי החות'ים, העומדת בסתירה לדיווחים מהשטח",
    "מספר הנפגעים וההרוגים המדויק בתקיפות האוויריות של הקואליציה בתוך תימן ובצנעא",
    "היקף ההרס המדויק שנגרם ל-136 המטרות ולשלושת כני השיגור לפי הודעות הקואליציה",
    "הטענה לפגיעות ישירות של טילים בליסטיים בבסיס ח'מיס מושיט ובנמל התעופה בנג'ראן"
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
      "הטלת מצור אווירי על סעודיה עד להפסקת התוקפנות והמצור על תימן",
      "התניית טיסות הומניטריות לריאד באישור מוקדם ממנגנון התיאום בצנעא"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומדיני כבד על ריאד באמצעות שיבוש התעופה והנמלים",
      "שימור השליטה ברצועת החוף של הים האדום ובנתיבי השיט הבינלאומיים"
     ],
     "forecast": [
      "המשך שיגור טילים וכטבמים לעומק סעודיה תוך ניסיון להרתיע חברות תעופה זרות",
      "התבצרות לאורך החוף ובאב אל-מנדב לבלימת מתקפות הנגד של כוחות הממשלה"
     ]
    },
    {
     "actor": "סעודיה והקואליציה הערבית",
     "declared": [
      "מניעת הפיכת שטח תימן לפלטפורמת איומים על ביטחון הממלכה וחופש השיט",
      "מתן גיבוי אווירי רצוף לכוחות ממשלת תימן לסיום השליטה החות'ית"
     ],
     "inferred": [
      "החזרת כושר ההרתעה והגנה על עורף הממלכה מפני פגיעה כלכלית ותעופתית",
      "שלילת השליטה של החות'ים על צוואר הבקבוק הימי בבאב אל-מנדב"
     ],
     "forecast": [
      "הגברת קצב ההפצצות האוויריות על מחסני טילים, כטבמים ומתקנים בצנעא ובמעוזי החות'ים",
      "העמקת המאמצים המדיניים במועצת הביטחון לבידוד החות'ים ועצירת אספקת אמצעי לחימה"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "סיום שלטון החות'ים והשבת מוסדות המדינה במסגרת מבצע 'שחר תימן'",
      "דרישה ממועצת הביטחון לעצור מימון, נשק וטכנולוגיה המועברים לחות'ים"
     ],
     "inferred": [
      "ניצול המטרייה האווירית הסעודית לכיבוש מחדש של שטחים חיוניים בחוף ובפנים המדינה",
      "הסטת מוקד הלחימה מהגנה למתקפה מקיפה שתשנה את מאזן הכוחות היבשתי"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות יבשתיים באזור באב אל-מנדב ובמחוזות תעז ומארב",
      "החרפת העימות הצבאי מול כוחות החות'ים תוך לחימה קרקעית ממושכת"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/9/un-envoy-warns-yemen-has-returned-to-full-scale-war-urges-dialogue?traffic_source=rss",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-envoy-says-allied-yemeni-forces-capture-bab-el-mandeb-strait-houthis-what",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmz7xe37g5wro?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-yemeni-government-urge-un-action-against-houthis",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-forces-launch-operation-retake-bab-al-mandab",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153726",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131609",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48379",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168559",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skbsjqijml",
     "accessed_at": "2026-10-09T23:40:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T06:37:20+00:00",
  "changes": {
   "YEMEN-10092340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות החות'ים על יעדים בסעודיה ובשדות תעופה",
    "score": 0.817
   },
   "YEMEN-10092340-02": {
    "kind": "new"
   },
   "YEMEN-10092340-03": {
    "kind": "new"
   },
   "YEMEN-10092340-04": {
    "kind": "new"
   },
   "YEMEN-10092340-05": {
    "kind": "new"
   },
   "YEMEN-10092340-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-09T1710__iran-202610091710.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-09T17:10:07+00:00",
   "window": {
    "from": "2026-10-08T17:10:07+00:00",
    "to": "2026-10-09T17:10:07+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "iran-202610091710"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בלוחמה ימית במצר הורמוז, לצד מתיחות צבאית מוגברת ועצירת תקיפות ישירות עד לאחר בחירות האמצע בארה\"ב. משמרות המהפכה מאיימים לפגוע בנתיבי שיט אזוריים ולהטיל הגבלות ימיות, בעוד ארה\"ב שומרת על מצור כלכלי ואוכפת מניעת ייצוא נפט איראני. במקביל נמשך הלחץ על רשתות המימון של שלוחות איראן כדוגמת חזבאללה, והתמודדות מול פעולות ביון ומעקבים בזירה הבינלאומית.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "הסלמה ימית, איומי משמרות המהפכה ופגיעה במכליות"
    },
    {
     "name": "הזירה האווירית והאסטרטגית מול ארה\"ב",
     "status": "דחיית תקיפות אמריקניות ישירות לצד המשך מצור כלכלי והיערכות הפנטגון"
    },
    {
     "name": "ישראל מול ציר איראן",
     "status": "מתיחות לאחר חיסול ההנהגה האיראנית ומאבק באיומי ריגול"
    },
    {
     "name": "חזית המימון והסנקציות (לבנון/חזבאללה)",
     "status": "פגיעה בערוצי העברות הכספים מטהראן תחת פיקוח הדוק"
    }
   ],
   "events": [
    {
     "id": "IRAN-10091710-01",
     "title": "הצהרת נשיא ארה\"ב על דחיית תקיפה אפשרית באיראן והמשך המצור הימי",
     "summary": "נשיא ארצות הברית הצהיר על שיחות עם איראן, הבהיר כי לא תבוצע תקיפה צבאית נגדה לפני בחירות האמצע בנובמבר, והדגיש את המשך הפיקוח והמצור על ייצוא הנפט שלה דרך מצר הורמוז.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T16:28:37+00:00",
     "last_update_at": "2026-10-09T15:45:48+00:00",
     "what_is_not_verified": "תוכן השיחות הפרודוקטיביות לכאורה והיקף חביות הנפט המדויק שעבר",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131639",
       "published_at": "2026-10-09T15:45:48+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94556",
       "published_at": "2026-10-08T16:55:18+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48364",
       "published_at": "2026-10-08T16:33:59+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131587",
       "published_at": "2026-10-08T16:28:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10091710-02",
     "title": "אזהרות ותקיפת כלי שיט בידי חיל הים של משמרות המהפכה במצר הורמוז",
     "summary": "הזרוע הימית של משמרות המהפכה פרסמה התראות לכלי שיט החורגים מנתיבי התנועה מדרום למצר הורמוז, האשימה את צבא ארה\"ב בהסלמה ימית, ודווח על תקיפת מכליות ושריפת אחת מהן.",
     "axis": "המפרץ הפרסי ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T13:00:06+00:00",
     "last_update_at": "2026-10-09T15:59:30+00:00",
     "what_is_not_verified": "פרטי הפגיעה המדויקים בשתי הספינות וזהות המכלית שעלתה באש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_132a209b8c6b5a0e",
       "url": "https://en.irna.ir/news/86287769/IRGC-warns-vessels-against-violating-designated-routes-in-Strait",
       "published_at": "2026-10-09T15:59:30+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_d8741b675224879e",
       "url": "https://en.irna.ir/news/86287702/Aggressive-US-military-bears-responsibility-for-regional-maritime",
       "published_at": "2026-10-09T14:39:06+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_132a209b8c6b5a0e",
       "url": "https://t.me/alexmehacarmel/48391",
       "published_at": "2026-10-09T14:15:06+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_132a209b8c6b5a0e",
       "url": "https://t.me/lelotsenzura/94566",
       "published_at": "2026-10-09T13:00:06+00:00"
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
     "id": "IRAN-10091710-03",
     "title": "גינוי איראני לעמדת צרפת בנושא הרתעה גרעינית",
     "summary": "דובר משרד החוץ של איראן מתח ביקורת על נשיא צרפת, וטען לקיומם של מוסר כפול ביחס לתפיסת ההרתעה הגרעינית כערובה לביטחון צרפתי לעומת הגדרתה כאיום כשמדובר באיראן.",
     "axis": "הגרעין האיראני מול המערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T15:55:18+00:00",
     "last_update_at": "2026-10-09T15:55:18+00:00",
     "what_is_not_verified": "לא מאומת תוכנו המלא של הנאום הצרפתי שצוטט בביקורת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_ef1b4ea29d666ceb",
       "url": "https://en.irna.ir/news/86287738/Iran-slams-French-president-s-double-standard-on-nuclear-deterrence",
       "published_at": "2026-10-09T15:55:18+00:00"
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
     "id": "IRAN-10091710-04",
     "title": "בחינה משפטית בפורטוגל לשימוש ארה\"ב בבסיס צבאי בהקשר העימות מול איראן",
     "summary": "ראש ממשלת פורטוגל הגן על חוקיות השימוש של צבא ארה\"ב בבסיס האווירי לאז'ש לצורכי המלחמה באיראן, בעקבות חקירה שנפתחה לבקשת האופוזיציה והגבלות שהטילו מדינות באירופה.",
     "axis": "ארה\"ב-אירופה-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T15:46:26+00:00",
     "last_update_at": "2026-10-09T15:46:26+00:00",
     "what_is_not_verified": "פרטי הפעילות המבצעית שבוצעה מהבסיס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/portugal-pm-cautions-judiciary-not-get-political-over-us-use-air-base",
       "published_at": "2026-10-09T15:46:26+00:00"
      }
     ],
     "places": [
      {
       "name": "ליסבון, פורטוגל",
       "lat": 38.7078,
       "lon": -9.1366
      }
     ]
    },
    {
     "id": "IRAN-10091710-05",
     "title": "הכנת תוכניות תקיפה בפנטגון ודיונים על החרפת הלחימה באיראן",
     "summary": "גורמי ביטחון בארה\"ב גיבשו תוכניות לחידוש מערכה צבאית אינטנסיבית נגד יעדי טילים, כטב\"מים, מפקדות ומתקני אנרגיה באיראן, כאשר בדרג המדיני מתקבלות החלטות זהירות יותר.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T06:33:01+00:00",
     "last_update_at": "2026-10-09T06:33:01+00:00",
     "what_is_not_verified": "תוכנן המלא של תוכניות הפנטגון מעבר לדיווחים עיתונאיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131604",
       "published_at": "2026-10-09T06:33:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10091710-06",
     "title": "מחלוקת פוליטית בישראל סביב השלכות חיסול המנהיג העליון עלי ח'אמנאי",
     "summary": "מנהיג האופוזיציה יאיר גולן טען כי הריגתו של עלי ח'אמנאי פגעה באינטרסים הישראליים, הובילה לעליית דרג הנהגה קיצוני יותר בראשות בנו מוג'תבא, ולא השיגה את מיטוט המשטר.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T12:51:36+00:00",
     "last_update_at": "2026-10-09T13:27:39+00:00",
     "what_is_not_verified": "פרטי הדיונים המדיניים וההבטחות שניתנו לממשל האמריקני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yair-golan-says-killing-khamenei-was-mistake-israel",
       "published_at": "2026-10-09T13:27:39+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/politics/article/21588808",
       "published_at": "2026-10-09T13:12:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/hysibv8sgl",
       "published_at": "2026-10-09T12:51:36+00:00"
      }
     ],
     "places": [
      {
       "name": "ראשון לציון, ישראל",
       "lat": 31.9636,
       "lon": 34.8101
      }
     ]
    },
    {
     "id": "IRAN-10091710-07",
     "title": "בחינת צירי מימון איראניים לארגון חזבאללה תחת לחץ הסנקציות",
     "summary": "הסנקציות של ארצות הברית מגבילות את ערוצי ההעברה של איראן לחזבאללה, אך נטען כי כספים ממשיכים לזרום דרך חלפנים, אגודות סיוע וצינורות עוקפים בעקבות שיבוש נתיבים בעיראק ובדובאי.",
     "axis": "סנקציות ומימון שלוחות",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:45:08+00:00",
     "last_update_at": "2026-10-09T16:45:08+00:00",
     "what_is_not_verified": "העברת 200 מיליון דולר בספטמבר אשר הוכחשה על ידי מחלקת המדינה האמריקנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/hezbollahs-financial-lifeline-extends-beyond-irans-cash-transfers/",
       "published_at": "2026-10-09T16:45:08+00:00"
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
     "id": "IRAN-10091710-08",
     "title": "העמדה לדין בלונדון על ריגול עבור איראן נגד יעדים ישראליים ויהודיים",
     "summary": "בבית משפט בבריטניה הוגשו כתבי אישום נגד גברים המואשמים בביצוע מעקבים עבור איראן אחר שגרירות ישראל, בית כנסת ואתרים נוספים, אשר כפרו באשמה.",
     "axis": "ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T10:54:48+00:00",
     "last_update_at": "2026-10-09T10:54:48+00:00",
     "what_is_not_verified": "אשמתם של הנאשמים והיקף הקשר הישיר למנגנוני הביטחון באיראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610091841",
       "published_at": "2026-10-09T10:54:48+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    }
   ],
   "not_verified": [
    "טענת העברת 200 מיליון דולר מאיראן לחזבאללה בספטמבר, שהוכחשה בידי מחלקת המדינה האמריקנית",
    "דיווח על תקיפת שתי ספינות במצר הורמוז תוך שעה ממקורות לא רשמיים",
    "קיומן של שיחות ישירות מפורטות בין הממשל האמריקני להנהגת איראן והישגיהן"
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
     "actor": "ארצות הברית",
     "declared": [
      "הימנעות מתקיפה צבאית באיראן לפני בחירות האמצע בנובמבר",
      "השארת המצור הכלכלי והימי על איראן במלוא עוצמתו",
      "מניעה מוחלטת של השגת נשק גרעיני בידי איראן"
     ],
     "inferred": [
      "רצון למנוע זינוק במחירי הנפט והסתבכות צבאית לקראת מערכת הבחירות",
      "הכנת חלופות מבצעיות לתקיפה ממוקדת של מאגרי טילים וכטב\"מים למקרה של כישלון המגעים"
     ],
     "forecast": [
      "המשך אכיפה קפדנית של המצור הימי ללא פתיחת מערכה נרחבת בטווח הזמן המיידי"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הטלת מגבלות תנועה ורדיפת כלי שיט החורגים מהנחיות השייט באזור המפרץ",
      "הטלת האחריות להסלמה הימית על הפעילות הצבאית של ארה\"ב",
      "דחיית הטענות המערביות נגד תוכנית ההרתעה שלה"
     ],
     "inferred": [
      "שימוש בשיבוש נתיבי הנפט במצר הורמוז כמנוף לחץ נגד המצור הכלכלי",
      "שימור ערוצי מימון עקיפים עבור חזבאללה למרות הסנקציות"
     ],
     "forecast": [
      "המשך חיכוך יזום ופעולות נקודתיות נגד מכליות שיט ללא גלישה למלחמה כוללת"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הצבת יעד אסטרטגי למיטוט המשטר באיראן (לפי ביקורת האופוזיציה)"
     ],
     "inferred": [
      "המשך סיכול רשתות ביון ופגיעה בשרשרת הפיקוד של איראן ושלוחותיה",
      "חשש מהקצנת המדיניות של ההנהגה החדשה בטהראן"
     ],
     "forecast": [
      "היערכות לתגובות מצד הציר האיראני תוך המשך מאמצי סיכול ממוקדים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/portugal-pm-cautions-judiciary-not-get-political-over-us-use-air-base",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/hezbollahs-financial-lifeline-extends-beyond-irans-cash-transfers/",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610091841",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86287738/Iran-slams-French-president-s-double-standard-on-nuclear-deterrence",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/politics/article/21588808",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yair-golan-says-killing-khamenei-was-mistake-israel",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131604",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48391",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94566",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/elections2026/article/hysibv8sgl",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T02:40:28+00:00",
  "changes": {
   "IRAN-10091710-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "הצהרת טראמפ על אי-תקיפה לפני הבחירות",
    "score": 1.0
   },
   "IRAN-10091710-02": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "פיצוצים במצר הורמוז",
    "score": 0.817
   },
   "IRAN-10091710-03": {
    "kind": "new"
   },
   "IRAN-10091710-04": {
    "kind": "new"
   },
   "IRAN-10091710-05": {
    "kind": "new"
   },
   "IRAN-10091710-06": {
    "kind": "new"
   },
   "IRAN-10091710-07": {
    "kind": "new"
   },
   "IRAN-10091710-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-09T1717__ukraine-202610091717.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-09T17:17:29+00:00",
   "window": {
    "from": "2026-10-08T17:17:29+00:00",
    "to": "2026-10-09T17:17:29+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610091717"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת, כאשר רוסיה ממשיכה בתקיפות נרחבות נגד תשתיות אנרגיה וריכוזי אוכלוסייה באוקראינה, ומנגד אוקראינה מבצעת תקיפות רחפנים ושיבושים בשטחי רוסיה. במישור הדיפלומטי והבינלאומי, מתקיימים דיונים על הסכמים עתידיים והפסקות אש חלקיות סביב מתקני אנרגיה, לצד מאבק מתמשך בסנקציות ובפעילות מודיעינית ברחבי אירופה.",
   "fronts": [
    {
     "name": "חזית המזרח (דניפרופטרובסק / קראמטורסק)",
     "status": "פעיל וקונבנציונלי"
    },
    {
     "name": "מרחב האוויר והעורף של רוסיה",
     "status": "תחת תקיפות כטב\"מים ושיבושים"
    },
    {
     "name": "חזית האנרגיה והתשתיות של אוקראינה",
     "status": "תחת מתקפה רוסית והפסקות חשמל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10091717-01",
     "title": "תקיפות אוקראיניות ושיבושים ברוסיה",
     "summary": "תושבים במוסקבה ובסנקט פטרבורג נתקלו בקשיים בהזמנת מוניות יאנדקס עקב תקיפות על מרכזי המידע של החברה, ובנוסף דווח על תקיפות רחפנים ובלונים באזורים שונים ברוסיה.",
     "axis": "תקיפות והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T16:30:44+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:30:44+00:00",
     "last_update_at": "2026-10-09T17:16:24+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למרכזי המידע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/48397",
       "published_at": "2026-10-09T17:16:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://kyivindependent.com/russian-airports-closed-amid-alleged-ukrainian-balloon-and-drone-raid/",
       "published_at": "2026-10-09T16:30:44+00:00"
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
     "id": "UKRAINE-10091717-02",
     "title": "מתקפות רוסיות במחוז דניפרופטרובסק",
     "summary": "כוחות רוסיים ביצעו עשרות מתקפות באמצעות כטב\"מים, ארטילריה וטילים במחוז דניפרופטרובסק, מה שהוביל להרוג אחד ולנזק לתשתיות ולעסקים.",
     "axis": "חזית המזרח והדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T16:08:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:08:00+00:00",
     "last_update_at": "2026-10-09T16:08:00+00:00",
     "what_is_not_verified": "פרטים מלאים על כלל היעדים שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_86a507712832d3da",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/09/8057257/",
       "published_at": "2026-10-09T16:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניקופול, אוקראינה",
       "lat": 47.5692,
       "lon": 34.3917
      },
      {
       "name": "קריבי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      }
     ]
    },
    {
     "id": "UKRAINE-10091717-03",
     "title": "מעצר אנשי תקשורת במונטנגרו ובאסטריה",
     "summary": "מונטנגרו גירשה את ראש רשת ריבאר ואזרחים רוסים נוספים מטעמי ביטחון, ובמקביל נעצרו באוסטריה עיתונאים ואנשים החשודים בריגול.",
     "axis": "עורף ודיפלומטיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T15:13:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T15:13:55+00:00",
     "last_update_at": "2026-10-09T16:20:13+00:00",
     "what_is_not_verified": "האם העצורים באוסטריה אכן עסקו בריגול בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48396",
       "published_at": "2026-10-09T16:20:13+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48394",
       "published_at": "2026-10-09T15:13:55+00:00"
      }
     ],
     "places": [
      {
       "name": "ריסאן, מונטנגרו",
       "lat": 42.515,
       "lon": 18.6956
      },
      {
       "name": "ווינה, אוסטריה",
       "lat": 48.2084,
       "lon": 16.3725
      }
     ]
    },
    {
     "id": "UKRAINE-10091717-04",
     "title": "משברים בתשתיות האנרגיה באוקראינה",
     "summary": "נשיא אוקראינה אישר כי קיימים נרחבים בתשתיות האנרגיה שהובילו להפסקות חשמל מתוכננות, בעוד שקיימים דיווחים על דרישה רוסית להקלות בסנקציות בתמורה להפסקת תקיפות אנרגיה.",
     "axis": "תשתיות ואנרגיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T14:01:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T14:01:00+00:00",
     "last_update_at": "2026-10-09T15:30:36+00:00",
     "what_is_not_verified": "תשובת ארצות הברית ואוקראינה לדרישות הרוסיות המדויקות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_14554cdf30574573",
       "url": "https://meduza.io/en/news/2026/10/09/the-kyiv-independent-russia-wants-sanctions-lifted-in-exchange-for-halting-strikes-on-ukrainian-energy-infrastructure",
       "published_at": "2026-10-09T15:30:36+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_14554cdf30574573",
       "url": "https://tass.com/economy/2199949",
       "published_at": "2026-10-09T15:06:56+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_dec2bc5302cbacd8",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/09/8057240/",
       "published_at": "2026-10-09T14:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    }
   ],
   "not_verified": [
    "הפרטים המדויקים מאחורי החשדות נגד העיתונאים באוסטריה",
    "תנאי העסקה המלאים שמוצעים במסגרת מתווה האנרגיה",
    "היקף הנזק המלא במרכזי המידע של יאנדקס ברוסיה"
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
     "actor": "אוקראינה",
     "declared": [
      "השגת מימון נוסף למערכות הגנה אווירית",
      "הרחבת הגישה למערכות לוויין לטובת פגיעה במשגרי טילים רוסיים",
      "הגנה על תשתיות האנרגיה הלאומיות"
     ],
     "inferred": [
      "ניסיון להפעיל לחץ על בעלות ברית מערביות להגברת הסנקציות על רוסיה",
      "שמירה על רציפות תפקודית של משק האנרגיה למרות הנזקים"
     ],
     "forecast": [
      "המשך דרישה לסיוע צבאי מתקדם למרות חוסר הרצון המסוים מצד וושינגטון",
      "היערכות להתמודדות עם חורף קשה תחת מחסור בחשמל"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "העלאת גיל השירות הצבאי לנשים וחיזוק כוח האדם במסגרות צבאיות",
      "המשך פגיעה בתשתיות האנרגיה של אוקראינה"
     ],
     "inferred": [
      "ניסיון למנף את התקיפות על תשתיות כדי להשיג הקלות בסנקציות הבינלאומיות",
      "הרחבת גיוס כוח אדם ושימוש במשאבים מקומיים לתמיכה במלחמה"
     ],
     "forecast": [
      "המשך לחץ צבאי באזורי החזית ובמתקפות אוויריות על עורף אוקראינה",
      "ניסיונות עקיפים להסרת מגבלות כלכליות באמצעות לחץ אנרגטי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-airports-closed-amid-alleged-ukrainian-balloon-and-drone-raid/",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/09/the-kyiv-independent-russia-wants-sanctions-lifted-in-exchange-for-halting-strikes-on-ukrainian-energy-infrastructure",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/09/8057240/",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/economy/2199949",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48394",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-08T23:45:41+00:00",
  "changes": {
   "UKRAINE-10091717-01": {
    "kind": "new"
   },
   "UKRAINE-10091717-02": {
    "kind": "new"
   },
   "UKRAINE-10091717-03": {
    "kind": "new"
   },
   "UKRAINE-10091717-04": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-09T2342__north-202610092342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-09T23:42:12+00:00",
   "window": {
    "from": "2026-10-08T23:42:12+00:00",
    "to": "2026-10-09T23:42:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610092342"
   },
   "summary": "בגזרה הצפונית נרשמת פעילות צבאית ישראלית מתמשכת הכוללת תקיפות ממוקדות נגד פעילים הפועלים בחסות איראן בגבול לבנון-סוריה, לצד תקיפות מהאוויר ומהיבשה בדרום לבנון חרף קיומן של הבנות הפסקת אש. במקביל, בצד הלבנוני מתחדדים תנאים מדיניים ובינלאומיים הדורשים את פירוק נשק חיזבאללה כתנאי לשיקום, בעוד בסוריה מתקיימים מאמצים לייצוב פנימי לצד מגעים דיפלומטיים ותביעות ביטחוניות בגבולותיה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "חילופי אש ותקיפות ישראליות מהאוויר והיבשה חרף הבנות הפסקת האש, לצד פעילות מבצעית של צה\"ל"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "מתיחות וסיכולים אוויריים נגד התבססות גורמים הפועלים בהכוונת איראן"
    },
    {
     "name": "פנים סוריה",
     "status": "פעילות ביטחונית נגד תאי טרור של דאעש לצד מאמצי שיקום אזרחי ושימור מורשת"
    },
    {
     "name": "מעורבות טורקיה בסוריה",
     "status": "המשך הליכים משפטיים ופעילות נגד גורמים שתקפו כוחות צבא טורקיים המוצבים בסוריה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10092342-01",
     "title": "תקיפה ישראלית נגד פעיל סורי בגבול סוריה-לבנון",
     "summary": "כלי טיס ישראלי תקף כלי רכב שבו שהה פעיל סורי שלטענת ישראל פעל בהכוונת איראן ותכנן תקיפות בדרום סוריה. גורמי בריאות בלבנון דיווחו על שישה פצועים כתוצאה מהתקיפה.",
     "axis": "גבול סוריה-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T13:58:24+00:00",
     "last_update_at": "2026-10-09T20:03:52+00:00",
     "what_is_not_verified": "קיימת סתירה בנוגע לפגיעה ולתוצאותיה: דיווח אחד טען כי הטיל החטיא ולא היו נפגעים, בעוד גורמי בריאות בלבנון דיווחו על שישה פצועים; בנוסף לא אומת האם היעד חוסל בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_nna",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-drone-strike-wounds-six-northeast-lebanon-near-syrian-border",
       "published_at": "2026-10-09T20:03:52+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_nna",
       "url": "https://www.ynet.co.il/news/article/rys6hsisgl",
       "published_at": "2026-10-09T18:37:29+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_nna",
       "url": "https://t.me/abualiexpress/131643",
       "published_at": "2026-10-09T18:12:58+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_nna",
       "url": "https://www.maariv.co.il/breaking-news/article-1375391",
       "published_at": "2026-10-09T18:11:15+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_nna",
       "url": "https://t.me/idf_telegram/25325",
       "published_at": "2026-10-09T18:04:55+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_nna",
       "url": "https://english.almanar.com.lb/article/136502/",
       "published_at": "2026-10-09T17:26:46+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_nna",
       "url": "https://english.almanar.com.lb/article/136487/",
       "published_at": "2026-10-09T17:15:11+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_nna",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-drone-strike-injures-6-in-eastern-lebanon-as-attacks-continue-despite-framework-deal/4083655",
       "published_at": "2026-10-09T13:58:24+00:00"
      }
     ],
     "places": [
      {
       "name": "הרמל, לבנון",
       "lat": 34.4205,
       "lon": 36.4214
      }
     ]
    },
    {
     "id": "NORTH-10092342-02",
     "title": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
     "summary": "כלי טיס ישראליים ביצעו תקיפות אוויריות במספר מוקדים בדרום לבנון, לצד ירי ארטילרי ופעילות הנדסית של כוח צבאי שכללה עקירת עצים סמוך לעמדת צבא לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T13:58:24+00:00",
     "last_update_at": "2026-10-09T17:15:11+00:00",
     "what_is_not_verified": "מידת הנזק והיקף הנפגעים בתקיפות בדרום לבנון אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_501adbb36fe1a512",
       "url": "https://english.almanar.com.lb/article/136487/",
       "published_at": "2026-10-09T17:15:11+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_b0eb7be3fae8734f",
       "url": "https://english.almanar.com.lb/article/136437/",
       "published_at": "2026-10-09T14:52:45+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_501adbb36fe1a512",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-drone-strike-injures-6-in-eastern-lebanon-as-attacks-continue-despite-framework-deal/4083655",
       "published_at": "2026-10-09T13:58:24+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.165,
       "lon": 35.3916
      }
     ]
    },
    {
     "id": "NORTH-10092342-03",
     "title": "מות קצין צה\"ל בתאונה מבצעית בדרום לבנון",
     "summary": "קצין צה\"ל מגדוד הנדסה נהרג כתוצאה מהתהפכות רכב מסוג האמר בעת פעילות מבצעית בגזרת נהר הליטני בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T10:12:53+00:00",
     "last_update_at": "2026-10-09T13:08:48+00:00",
     "what_is_not_verified": "הנסיבות המדויקות שהובילו להתהפכות כלי הרכב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sy00pb8iigl",
       "published_at": "2026-10-09T13:08:48+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/local/article/21587822",
       "published_at": "2026-10-09T10:12:53+00:00"
      }
     ],
     "places": [
      {
       "name": "נהר הליטני, לבנון",
       "lat": 33.552,
       "lon": 35.6924
      }
     ]
    },
    {
     "id": "NORTH-10092342-04",
     "title": "סיכול חוליית דאעש בחומס שבסוריה",
     "summary": "כוחות הביטחון של סוריה פירקו חוליה המזוהה עם ארגון דאעש בעיר חומס ועצרו שני חשודים שתכננו פיגועים נגד מקומות פולחן, סיורים ותשתיות רכבת.",
     "axis": "פנים סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T17:04:22+00:00",
     "last_update_at": "2026-10-09T17:04:22+00:00",
     "what_is_not_verified": "לא נמסרו פרטים עצמאיים מאמתים מעבר לדיווח הרשמי של כוחות הביטחון הסוריים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-security-forces-dismantle-isis-linked-cell-in-homs-arrest-2-suspects-report/4083892",
       "published_at": "2026-10-09T17:04:22+00:00"
      }
     ],
     "places": [
      {
       "name": "חומס, סוריה",
       "lat": 34.7333,
       "lon": 36.7167
      }
     ]
    },
    {
     "id": "NORTH-10092342-05",
     "title": "פתיחתו מחדש של המסגד האומיי בחלב לאחר שיקום",
     "summary": "המסגד הגדול בחלב העתיקה נפתח מחדש למתפללים לאחר שנים של עבודות שיקום ממושכות של המבנה והמינרט שנהרסו במהלך הקרבות במלחמת האזרחים.",
     "axis": "פנים סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T11:09:50+00:00",
     "last_update_at": "2026-10-09T14:26:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_27405bbaed4eec58",
       "url": "https://www.al-monitor.com/originals/2026/10/syria-reopens-aleppos-1300-year-old-great-umayyad-mosque-after-13-years",
       "published_at": "2026-10-09T14:26:07+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_27405bbaed4eec58",
       "url": "https://english.enabbaladi.net/archives/2026/10/aleppos-great-mosque-reopens-after-14-years/",
       "published_at": "2026-10-09T11:09:50+00:00"
      }
     ],
     "places": [
      {
       "name": "חלב, סוריה",
       "lat": 36.1992,
       "lon": 37.1637
      }
     ]
    },
    {
     "id": "NORTH-10092342-06",
     "title": "פגישת שר החוץ הסורי ושליח ארה\"ב באיסטנבול",
     "summary": "שר החוץ הסורי נועד באיסטנבול עם השליח האמריקני לדיון ביחסים הדדיים, התפתחויות אזוריות וסוגיות משותפות, במלון בבעלות איש עסקים שנפגש בעבר עם נשיא סוריה.",
     "axis": "הזירה הדיפלומטית בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T16:51:34+00:00",
     "last_update_at": "2026-10-09T16:51:34+00:00",
     "what_is_not_verified": "פרטי השיחות המלאים מעבר להודעה הכללית של משרד החוץ הסורי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/who-owns-the-istanbul-hotel-hosting-al-shaibani-and-barrack/",
       "published_at": "2026-10-09T16:51:34+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "NORTH-10092342-07",
     "title": "הארכת מעצר בטורקיה לחשודים בתקיפת שיירות צבאיות בסוריה",
     "summary": "בית משפט בטורקיה הורה להשאיר במעצר שני אחים המואשמים בביצוע מתקפות נגד בסיסים ושיירות של צבא טורקיה הפועלים בשטח סוריה.",
     "axis": "מעורבות טורקיה בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T08:46:11+00:00",
     "last_update_at": "2026-10-09T08:46:11+00:00",
     "what_is_not_verified": "פרטי האירועים שבהם מואשמים השניים וזהותם המלאה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/war-on-terror/turkish-court-keeps-2-suspects-jailed-over-military-convoy-attacks",
       "published_at": "2026-10-09T08:46:11+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10092342-08",
     "title": "התניית סיוע אמריקאי לשיקום לבנון בפירוק חיזבאללה",
     "summary": "דובר מחלקת המדינה של ארה\"ב הודיע כי סיוע במיליארדי דולרים לשיקום דרום לבנון יותנה בפירוק חיזבאללה מנשקו והפסקת שיבוש מאמצי הממשלה הלבנונית.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T14:08:20+00:00",
     "last_update_at": "2026-10-09T14:08:20+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_8c2609c611d5cb0a",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962043/us-on-hezbollah-funding-and-lebanons-reconstruction-what-did-tommy-pig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962043",
       "published_at": "2026-10-09T14:08:20+00:00"
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
    "גורלו של הפעיל הסורי יוסף עלי אלחסון והאם חוסל בתקיפה בחוש א-סייד עלי",
    "מספר הנפגעים המדויק בתקיפת כלי הרכב בגבול לבנון-סוריה עקב דיווחים סותרים",
    "הדיווח הלא מאומת על ניסיון הברחת חומרי נפץ בידי פעילי חיזבאללה",
    "הטענות בדבר הסדר שהות של הגנרל הסורי לשעבר בסאם אל-חסן בלבנון בחסות גורמים אמריקאיים ולבנוניים",
    "טענות הנוגעות למעורבות ישירה של חיזבאללה בפיצוץ נמל ביירות"
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
      "הסרת איומים מיידיים בכל הגזרות",
      "שמירה על מחויבות להסכם בין ישראל ללבנון"
     ],
     "inferred": [
      "מניעת התבססות איראנית וסיכול צירי העברת אמל\"ח ורחפנים בגבול סוריה-לבנון",
      "שימור חופש פעולה מבצעי בלבנון ובסוריה למרות הבנות הפסקת האש"
     ],
     "forecast": [
      "המשך סיכולים ממוקדים בגבול סוריה-לבנון תוך סיכון להגברת המתיחות מול לבנון"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "התניית כספי שיקום לדרום לבנון בפירוק חיזבאללה מנשקו",
      "בלימת צירי מימון איראניים לארגוני פרוקסי"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומדיני על לבנון לצמצום השפעת חיזבאללה",
      "קידום ערוצי הידברות ישירים או עקיפים עם ההנהגה בסוריה להשגת מידע מודיעיני"
     ],
     "forecast": [
      "המשך בלימת תקציבי סיוע לממשלת לבנון כל עוד חיזבאללה מחזיק בנשקו"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "השבת ריבונות המדינה הבלעדית על החלטות מלחמה ושלום",
      "סיום הכיבוש הישראלי של שטחים לבנוניים והפסקת התקיפות",
      "החזרת התושבים העקורים ושיקום הכפרים בדרום"
     ],
     "inferred": [
      "ניסיון לאזן בין דרישות המערב לפירוק חמושים לבין הימנעות מעימות פנימי רחב"
     ],
     "forecast": [
      "המשך קושי במימוש ריבונות מלאה בדרום לבנון נוכח הימצאות כוחות צה\"ל וחיזבאללה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "שיקום אתרי מורשת ותשתיות שנפגעו במלחמה",
      "מאבק בתאי טרור של דאעש ברחבי המדינה",
      "קידום היחסים הבילטרליים והסרת סנקציות בינלאומיות"
     ],
     "inferred": [
      "הידוק השליטה הביטחונית במרכזי הערים וצמצום פעילות חתרנית פנימית",
      "חיפוש לגיטימציה בינלאומית באמצעות מגעים דיפלומטיים עקיפים עם ארה\"ב"
     ],
     "forecast": [
      "המשך פעולות סיכול פנימיות נגד תאי טרור במקביל למגעים מדיניים הדרגתיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/136437/",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/syria-reopens-aleppos-1300-year-old-great-umayyad-mosque-after-13-years",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syrian-security-forces-dismantle-isis-linked-cell-in-homs-arrest-2-suspects-report/4083892",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/war-on-terror/turkish-court-keeps-2-suspects-jailed-over-military-convoy-attacks",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/who-owns-the-istanbul-hotel-hosting-al-shaibani-and-barrack/",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/local/article/21587822",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962043/us-on-hezbollah-funding-and-lebanons-reconstruction-what-did-tommy-pig/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962043",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1375391",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-drone-strike-wounds-six-northeast-lebanon-near-syrian-border",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131643",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25325",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sy00pb8iigl",
     "accessed_at": "2026-10-09T23:42:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T06:41:38+00:00",
  "changes": {
   "NORTH-10092342-01": {
    "kind": "new"
   },
   "NORTH-10092342-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "ירי ארטילרי והפצצות של צה\"ל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10092342-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "התהפכות רכב צבאי ונפילת קצין צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10092342-04": {
    "kind": "new"
   },
   "NORTH-10092342-05": {
    "kind": "new"
   },
   "NORTH-10092342-06": {
    "kind": "new"
   },
   "NORTH-10092342-07": {
    "kind": "possible",
    "prev": "פגישת שרי חוץ ומודיעין של טורקיה וסוריה באנקרה",
    "score": 0.467
   },
   "NORTH-10092342-08": {
    "kind": "new"
   }
  }
 }
};
