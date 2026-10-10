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
  "draft": "drafts/iran/2026-10-10T0619__iran-202610100619.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-10T06:19:31+00:00",
   "window": {
    "from": "2026-10-09T06:19:31+00:00",
    "to": "2026-10-10T06:19:31+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610100619"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בהסלמה צבאית וכלכלית סביב חופש השיט והסגר הימי במצר הורמוז. ארצות הברית מעמיקה את אכיפת הסנקציות ונערכת לאפשרויות תקיפה נוספות, בעוד גורמים איראניים ושלוחותיהם מגיבים בפעולות ימיות, תקיפות נגד יעדים בסעודיה ופעילות בגבול סוריה-לבנון. במקביל, טהראן מנסה לעקוף את המצור הכלכלי באמצעות הידוק קשרים יבשתיים וימיים עם מדינות מרכז אסיה ומשמיעה רטוריקה תקיפה נגד תכתיבים אמריקניים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "סגר ימי אמריקני פעיל עם הסטת אוניות, לצד תקיפות של משמרות המהפכה על כלי שיט"
    },
    {
     "name": "חצי האי ערב / תימן וסעודיה",
     "status": "תקיפות רקטות וכטב\"מים של החות'ים נגד נמלי תעופה בסעודיה"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "סיכולים ממוקדים ותקיפות אוויריות ישראליות נגד מפקדי טרור המופעלים בידי איראן"
    },
    {
     "name": "המערכה הכלכלית והבינלאומית",
     "status": "הרחבת סנקציות אמריקניות על תעופה וסחר, במקביל לניסיונות איראניים לפתוח נתיבי סחר חלופיים"
    }
   ],
   "events": [
    {
     "id": "IRAN-10100619-01",
     "title": "אכיפת סגר ימי אמריקני והפניית כלי שיט במצר הורמוז",
     "summary": "פיקוד המרכז של צבא ארצות הברית דיווח כי כוחותיו הפנו 133 כלי שיט מסחריים במצר הורמוז במסגרת אכיפת סגר ימי שהוגדר על ידו כברזל נגד איראן.",
     "axis": "ארה\"ב - איראן / מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T05:11:26+00:00",
     "last_update_at": "2026-10-10T05:11:26+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר להודעת צבא ארצות הברית בנוגע להיקף כלי השיט שהופנו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/centcom-says-133-vessels-redirected-hormuz-it-enforces-iran-blockade",
       "published_at": "2026-10-10T05:11:26+00:00"
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
     "id": "IRAN-10100619-02",
     "title": "מתקפת כטב\"מים וטילים של החות'ים על נמל התעופה בריאד",
     "summary": "החות'ים בתימן ביצעו תקיפה נגד נמל התעופה בבירת סעודיה ריאד, שהביאה למותם של שלושה אזרחים סעודים ולפציעת נוספים, מה שהוביל להרחבת אזהרות הטיסה של רשות התעופה האירופית.",
     "axis": "החות'ים - סעודיה / שלוחות איראן במפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T09:47:10+00:00",
     "last_update_at": "2026-10-09T14:46:31+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/eu-aviation-body-widens-saudi-airspace-warning-after-houthi-strikes",
       "published_at": "2026-10-09T14:46:31+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmz7xe37g5wro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-09T13:50:25+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
       "published_at": "2026-10-09T09:47:10+00:00"
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
     "id": "IRAN-10100619-03",
     "title": "תקיפה אווירית ישראלית נגד פעיל טרור סורי בגבול סוריה-לבנון",
     "summary": "כוחות חיל האוויר הישראלי ביצעו תקיפה באזור חוש א-סייד עלי נגד מחבל סורי שפעל בהכוונת איראן והיה מעורב בשיגורי רחפנים ורקטות לעבר כוחות צה\"ל.",
     "axis": "ישראל - שלוחות איראן בסוריה ולבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:04:55+00:00",
     "last_update_at": "2026-10-09T18:37:29+00:00",
     "what_is_not_verified": "תוצאות התקיפה ומצב היעד יוסף עלי אלחסון אינם מאומתים שכן צה\"ל לא אישר אם הוא חוסל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rys6hsisgl",
       "published_at": "2026-10-09T18:37:29+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25325",
       "published_at": "2026-10-09T18:04:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10100619-04",
     "title": "תקיפת כלי שיט במצר הורמוז בידי הצי של משמרות המהפכה",
     "summary": "הצי של משמרות המהפכה האיראניים תקף שתי ספינות במצר הורמוז, כאשר אחת מהן עלתה באש.",
     "axis": "איראן - מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T13:00:06+00:00",
     "last_update_at": "2026-10-09T13:00:06+00:00",
     "what_is_not_verified": "שמות הספינות, זהותן והיקף הנזק המדויק אינם מאומתים ממקורות רשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
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
     "id": "IRAN-10100619-05",
     "title": "התרחבות הסנקציות הכלכליות של ארצות הברית נגד קווי האספקה האיראניים",
     "summary": "שר האוצר האמריקני הודיע על הרחבת העיצומים הכלכליים כנגד איראן במטרה לחסום נתיבי סחר יבשתיים, שימוש במטבעות מבוזרים ותעופה וספנות שנותרו פעילים.",
     "axis": "ארה\"ב - איראן / סנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T21:00:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T21:00:06+00:00",
     "last_update_at": "2026-10-10T02:11:19+00:00",
     "what_is_not_verified": "היקף ההחרגות שניתנו בפועל לטיסות איראניות בעיראק אינו ברור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610106673",
       "published_at": "2026-10-10T02:11:19+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/iranian-airlines-expand-trips-to-iraq-despite-u-s-sanctions/",
       "published_at": "2026-10-09T21:00:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10100619-06",
     "title": "הסכם אספקת דלקים בין ארצות הברית לרוסיה על רקע המתיחות במצר הורמוז",
     "summary": "נשיא ארצות הברית דונלד טראמפ הודיע כי סיכם עם נשיא רוסיה ולדימיר פוטין על הזרמת מיליוני טונות של סולר לשוק העולמי כדי להוריד מחירים, לצד הדגשה שאיראן לא תשיג נשק גרעיני.",
     "axis": "ארה\"ב - רוסיה / אנרגיה וגרעין איראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:52:03+00:00",
     "last_update_at": "2026-10-09T18:52:03+00:00",
     "what_is_not_verified": "פרטי מימוש עסקת הסולר בבתי הזיקוק ברוסיה אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131645",
       "published_at": "2026-10-09T18:52:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10100619-07",
     "title": "הצעת פזשכיאן לחיבור אזורי ודחיית משא ומתן תחת כפייה",
     "summary": "נשיא איראן מסעוד פזשכיאן גינה בפסגה בטורקמניסטן את תקיפות ארצות הברית וישראל, הציע מסדרון סחר אזורי דרך נמלי איראן והבהיר כי ארצו לא תנהל משא ומתן תחת כוח.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T05:43:02+00:00",
     "last_update_at": "2026-10-10T05:43:02+00:00",
     "what_is_not_verified": "לא אומתו תגובות שאר המדינות החברות להצעת הגוש החדש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-pitches-cis-iran-bloc-turkmenistan-summit",
       "published_at": "2026-10-10T05:43:02+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'אהבהאר, איראן",
       "lat": 25.2935,
       "lon": 60.6469
      }
     ]
    },
    {
     "id": "IRAN-10100619-08",
     "title": "התרעת ביטחון אמריקנית בבריטניה מפני כוונה איראנית לפגוע במפציצים",
     "summary": "מפציצים אמריקניים מסוג בי-1 פונו במהירות מבסיס חיל האוויר המלכותי פיירפורד בבריטניה בעקבות אזהרות מפני מזימה איראנית אפשרית לפגוע בהם.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T18:28:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:28:40+00:00",
     "last_update_at": "2026-10-09T18:28:40+00:00",
     "what_is_not_verified": "פרטי המזימה האיראנית החשודה ורמת אמינותה לא אומתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_france24",
       "url": "https://www.france24.com/en/tv-shows/the-world-this-week/20261009-france-protests-israel-s-politically-charged-remembrance-ethopia-ukraine",
       "published_at": "2026-10-09T18:28:40+00:00"
      }
     ],
     "places": [
      {
       "name": "פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על חיסולו של יוסף עלי אלחסון בתקיפה בלבנון",
    "היקף ההחרגה האמריקנית המדויק לטיסות איראניות לנמל התעופה בנג'ף",
    "פרטי הדיווח על פגיעה בשתי ספינות במצר הורמוז ושריפת אחת מהן",
    "דיווחים על התחייבות אמריקנית שלא לתקוף באיראן לפני בחירות האמצע",
    "מידת ההתקדמות הממשית בתוכניות המבצעיות של הפנטגון לתקיפה בת שלושה ימים"
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
      "מניעת השגת נשק גרעיני בידי איראן",
      "אכיפת סגר ימי מוחלט במצר הורמוז",
      "חסימת כלל עורקי הנשימה הכלכליים, התעופתיים והימיים של איראן"
     ],
     "inferred": [
      "הפעלת לחץ מרבי כדי לאלץ את טהראן להגיע להסכם בתנאים אמריקניים",
      "הימנעות מהסתבכות במלחמה כוללת לפני מועד בחירות האמצע"
     ],
     "forecast": [
      "המשך פעולות אכיפה ימיות קפדניות במצר הורמוז",
      "החרפת האכיפה הכלכלית נגד מדינות המאפשרות טיסות ומסחר איראני"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "סירוב לנהל משא ומתן תחת לחץ או כפייה צבאית",
      "דרישה ליחס מכבד מצד הממשל האמריקני",
      "הפיכת נמלי המדינה לציר סחר ימי מרכזי עבור מדינות מרכז אסיה"
     ],
     "inferred": [
      "ניסיון להרתיע את כוחות ארצות הברית באמצעות שיבוש תנועת ספינות והפעלת שלוחות",
      "שבירת הבידוד הכלכלי באמצעות בריתות אזוריות עם מדינות אסיה"
     ],
     "forecast": [
      "המשך הטרדות ימיות ופעילות בלתי ישירה באמצעות שלוחות באזור",
      "האצת יוזמות דיפלומטיות וכלכליות מול מדינות האזור ורוסיה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול איומים ממוקדים ופגיעה בפעילי טרור הפועלים בהכוונת איראן",
      "שמירה על מחויבות להסכמים תוך נטרול איומים מעבר לגבול"
     ],
     "inferred": [
      "מניעת התבססות של מערכי רחפנים ורקטות של שלוחות איראן סמוך לגבולותיה",
      "המשך גביית מחיר ישיר מרשתות הטרור האיראניות בסוריה ובלבנון"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות נגד מטרות ופעילים איראניים בזירה הצפונית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/eu-aviation-body-widens-saudi-airspace-warning-after-houthi-strikes",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmz7xe37g5wro?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/iranian-airlines-expand-trips-to-iraq-despite-u-s-sanctions/",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/tv-shows/the-world-this-week/20261009-france-protests-israel-s-politically-charged-remembrance-ethopia-ukraine",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610106673",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-pitches-cis-iran-bloc-turkmenistan-summit",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131645",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25325",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94566",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rys6hsisgl",
     "accessed_at": "2026-10-10T06:19:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T17:10:07+00:00",
  "changes": {
   "IRAN-10100619-01": {
    "kind": "new"
   },
   "IRAN-10100619-02": {
    "kind": "new"
   },
   "IRAN-10100619-03": {
    "kind": "new"
   },
   "IRAN-10100619-04": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "אזהרות ותקיפת כלי שיט בידי חיל הים של משמרות המהפכה במצר הורמוז",
    "score": 1.0
   },
   "IRAN-10100619-05": {
    "kind": "possible",
    "prev": "בחינת צירי מימון איראניים לארגון חזבאללה תחת לחץ הסנקציות",
    "score": 0.467
   },
   "IRAN-10100619-06": {
    "kind": "new"
   },
   "IRAN-10100619-07": {
    "kind": "new"
   },
   "IRAN-10100619-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-10T0620__ukraine-202610100620.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-10T06:20:34+00:00",
   "window": {
    "from": "2026-10-09T06:20:34+00:00",
    "to": "2026-10-10T06:20:34+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "ukraine-202610100620"
   },
   "summary": "הלחימה בין צבא רוסיה לצבא אוקראינה נמשכת בעצימות גבוהה לאורך קו החזית, לצד חילופי מהלומות עמוקים שכוללים תקיפות פצצות דואות רוסיות על מבנים אזרחיים ומבצעי כטב\"מים אוקראיניים נגד תשתיות נפט ושרתים ברוסיה. במישור הבינלאומי חלה תפנית משמעותית עם הסכמת ארצות הברית לרכוש סולר מרוסיה ולהקל בעיצומים, מהלך שעורר זעם חריף בקייב והוביל למבוי סתום בשיחות התיווך שהסתיימו טרם זמנן. רוסיה ממשיכה לטעון כי היוזמה המבצעית בידיה ומסרבת לחידוש המשא ומתן, בעוד אוקראינה נערכת לפגיעות ממושכות בתשתיות האנרגיה שלה לקראת החורף.",
   "fronts": [
    {
     "name": "ציר פוקרובסק",
     "status": "לחימה עצימה וריכוז התקפות רוסיות גבוה"
    },
    {
     "name": "חזית זפוריז'יה",
     "status": "תקיפות אוויריות רוסיות באמצעות פצצות דואות לעבר ריכוזי אוכלוסייה"
    },
    {
     "name": "עורף רוסיה (רוסטוב, קלוגה, ריאזאן)",
     "status": "פגיעות כטב\"מים אוקראיניים בבתי זיקוק, מסופי נפט ומרכזי נתונים"
    },
    {
     "name": "עורף אוקראינה (קייב)",
     "status": "איומי כטב\"מים ופגיעות שברי יירוט במבנים וכלי רכב"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10100620-01",
     "title": "הסכם אספקת סולר מרוסיה והקלת סנקציות אמריקאיות",
     "summary": "נשיא ארצות הברית הכריז על הסכם לאספקת מיליוני טונות סולר מרוסיה לשוק האמריקאי והעולמי לאחר שיחה עם נשיא רוסיה, ומשרד האוצר האמריקאי הנפיק רישיון זמני המאפשר עסקאות אלו.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T18:52:03+00:00",
     "last_update_at": "2026-10-10T06:16:51+00:00",
     "what_is_not_verified": "כמות הדלק המדויקת שתוכל רוסיה לספק בפועל בהתאם למצב בתי הזיקוק שלה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1375456",
       "published_at": "2026-10-10T06:16:51+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/australia-news/2026/oct/10/australia-fuel-chris-bowen-trump-us-russia-diesel-deal-putin",
       "published_at": "2026-10-10T05:01:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-war-briefing-trumps-russian-diesel-deal-derided-as-weak-and-a-betrayal-of-ukraine-and-us-national-security",
       "published_at": "2026-10-10T01:31:13+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48409",
       "published_at": "2026-10-10T01:12:06+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
       "published_at": "2026-10-10T00:29:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/10/we-re-being-used-as-a-front-zelensky-says-of-trump-s-diesel-deal-with-putin",
       "published_at": "2026-10-10T00:02:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590296",
       "published_at": "2026-10-09T23:56:31+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/09/trump-putin-russian-diesel-ukraine",
       "published_at": "2026-10-09T23:39:31+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkioihiizg",
       "published_at": "2026-10-09T21:20:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590071",
       "published_at": "2026-10-09T19:58:50+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/09/trump-says-he-reached-a-deal-with-putin-to-supply-russian-diesel-to-u-s-and-global-markets-breaking-with-years-of-american-sanctions-policy",
       "published_at": "2026-10-09T19:32:27+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/trump-says-russia-agreed-to-supply-millions-of-tons-of-diesel-to-us-global-markets/",
       "published_at": "2026-10-09T18:53:55+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131645",
       "published_at": "2026-10-09T18:52:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10100620-02",
     "title": "ביקורת חריפה של אוקראינה על עסקת הדלק האמריקאית-רוסית",
     "summary": "נשיא אוקראינה מתח ביקורת תקיפה על החלטת ארצות הברית להקל בסנקציות על סולר רוסי, וטען כי המשלחת האוקראינית לשיחות שימשה ככיסוי בלבד לעסקה שנעשתה מאחורי גבה.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T19:32:27+00:00",
     "last_update_at": "2026-10-10T01:31:13+00:00",
     "what_is_not_verified": "האם המשלחת האוקראינית אכן לא קיבלה כל רמז מוקדם על המגעים לפני ההודעה הרשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-war-briefing-trumps-russian-diesel-deal-derided-as-weak-and-a-betrayal-of-ukraine-and-us-national-security",
       "published_at": "2026-10-10T01:31:13+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
       "published_at": "2026-10-10T00:29:00+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590296",
       "published_at": "2026-10-09T23:56:31+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/09/trump-putin-russian-diesel-ukraine",
       "published_at": "2026-10-09T23:39:31+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057299/",
       "published_at": "2026-10-09T23:32:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/09/trump-says-he-reached-a-deal-with-putin-to-supply-russian-diesel-to-u-s-and-global-markets-breaking-with-years-of-american-sanctions-policy",
       "published_at": "2026-10-09T19:32:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10100620-03",
     "title": "סיום מוקדם של שיחות בין נציגי ארה\"ב, אוקראינה ואירופה במיאמי",
     "summary": "מפגש משלחות מארצות הברית, אוקראינה ומדינות אירופה שנועד לבחון דרכים להפחתת הסלמה ולסיום המלחמה הסתיים מוקדם מן הצפוי.",
     "axis": "משא ומתן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T01:31:13+00:00",
     "last_update_at": "2026-10-10T03:00:00+00:00",
     "what_is_not_verified": "פרטי ההצעות החדשות של השליחים האמריקאים שהוצגו במהלך השיחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057305/",
       "published_at": "2026-10-10T03:00:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2200205",
       "published_at": "2026-10-10T02:12:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-ukrainian-european-officials-discuss-ending-russias-war-at-miami-meeting/",
       "published_at": "2026-10-10T01:50:28+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/ukraine-war-briefing-trumps-russian-diesel-deal-derided-as-weak-and-a-betrayal-of-ukraine-and-us-national-security",
       "published_at": "2026-10-10T01:31:13+00:00"
      }
     ],
     "places": [
      {
       "name": "מיאמי, ארצות הברית",
       "lat": 25.7742,
       "lon": -80.1936
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-04",
     "title": "שיחת טלפון ממושכת בין נשיאי רוסיה וארצות הברית",
     "summary": "הקרמלין דיווח על שיחה בין ולדימיר פוטין לדונלד טראמפ שבה נדון המשך המערכה, ורוסיה הבהירה כי יעדיה נותרו ללא שינוי וכי היא דוחה שיחות שלום בעת הנוכחית.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T21:41:53+00:00",
     "last_update_at": "2026-10-10T03:29:33+00:00",
     "what_is_not_verified": "האם הצדדים דנו במוכנות להסדר מדיני או שמא נדחתה אפשרות זו לחלוטין, בשל דיווחים סותרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2200209",
       "published_at": "2026-10-10T03:29:33+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057298/",
       "published_at": "2026-10-09T22:15:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48405",
       "published_at": "2026-10-09T21:41:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10100620-05",
     "title": "תקיפת פצצות דואות על בניין מגורים בזפוריז'יה",
     "summary": "פצצות אוויריות מונחות פגעו במבנה מגורים רב-קומות בעיר זפוריז'יה, גרמו להרוגים ולפצועים, בהם ילדים, ולנזק כבד.",
     "axis": "החזית הדרומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T04:41:00+00:00",
     "last_update_at": "2026-10-10T05:59:00+00:00",
     "what_is_not_verified": "מספר הנפגעים הסופי המדויק ומספר הלכודים תחת ההריסות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172894-glide-bomb-strike-on-zaporizhzhia-death-toll-rises-to-four-11-injured.html",
       "published_at": "2026-10-10T05:59:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-guided-bombs-hit-zaporizhzhia-apartment-building-killing-4-injuring-4/",
       "published_at": "2026-10-10T04:55:22+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172880-russia-attacks-zaporizhzhia-with-glide-bombs-at-least-two-killed-others-injured.html",
       "published_at": "2026-10-10T04:41:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-06",
     "title": "המשך קרבות עצימים לאורך קו המגע",
     "summary": "כוחות ההגנה של אוקראינה ניהלו 218 היתקלויות קרביות מול הכוחות הרוסיים ביממה אחת, כאשר המוקד המרכזי של ההתקפות נרשם בציר פוקרובסק.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T05:39:00+00:00",
     "last_update_at": "2026-10-10T05:39:00+00:00",
     "what_is_not_verified": "לא מאומת מעבר להודעת כוחות ההגנה של אוקראינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172891-war-update-218-combat-engagements-on-front-line-in-over-past-day-most-on-pokrovsk-axis.html",
       "published_at": "2026-10-10T05:39:00+00:00"
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
     "id": "UKRAINE-10100620-07",
     "title": "תקיפות כטב\"מים אוקראיניים על יעדי אנרגיה ומבנים במחוז רוסטוב",
     "summary": "כטב\"מים פגעו במתקני נפט ובתי זיקוק במחוז רוסטוב ברוסיה, וגרמו לשריפה במסוף נפט ולפגיעה במבנה מגורים ברוסטוב על הדון.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T00:15:47+00:00",
     "last_update_at": "2026-10-10T03:59:57+00:00",
     "what_is_not_verified": "מה בדיוק פגע בבניין המגורים ברוסטוב על הדון על רקע פעילות ההגנה האווירית הרוסית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48410",
       "published_at": "2026-10-10T03:59:57+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/major-fire-reported-at-oil-terminal-linked-to-russias-novoshakhtinsk-refinery-after-suspected-drone-strike/",
       "published_at": "2026-10-10T03:22:53+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
       "published_at": "2026-10-10T00:29:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48406",
       "published_at": "2026-10-10T00:15:47+00:00"
      }
     ],
     "places": [
      {
       "name": "נובושאחטינסק, רוסיה",
       "lat": 47.7963,
       "lon": 39.8936
      },
      {
       "name": "רוסטוב על הדון, רוסיה",
       "lat": 47.261,
       "lon": 39.7249
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-08",
     "title": "מתקפות כטב\"מים אוקראיניות על מרכזי נתונים ברוסיה",
     "summary": "מרכזי נתונים של חברת הטכנולוגיה יאנדקס במחוזות קלוגה וריאזאן הותקפו באמצעות כטב\"מים יומיים ברציפות, דבר שהביא להשבתת מערכות ולשיבושים בשירותים דיגיטליים נרחבים.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T17:14:44+00:00",
     "last_update_at": "2026-10-09T18:14:02+00:00",
     "what_is_not_verified": "היקף הנזק התשתיתי המלא מעבר להודעות החברה והמושל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/09/ukraine-strikes-russian-tech-giant-yandex-s-data-centers-for-a-second-straight-day-as-new-peace-talks-involving-ukraine-the-u-s-and-europe-get-underway-in-miami",
       "published_at": "2026-10-09T18:14:02+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c68xzqqn4ekro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-09T17:14:44+00:00"
      }
     ],
     "places": [
      {
       "name": "קלוגה, רוסיה",
       "lat": 54.5101,
       "lon": 36.2598
      },
      {
       "name": "סאסובו, רוסיה",
       "lat": 54.3448,
       "lon": 41.9215
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-09",
     "title": "שיבושים בטיסות ממשל במוסקבה בעקבות איום כטב\"מים",
     "summary": "מטוסי טייסת מיוחדת המשמשת את הנהגת רוסיה נאלצו להסתובב באוויר או לשנות נתיב בעקבות הגבלות תעופה שהוטלו בנמלי התעופה במוסקבה עקב התרעות כטב\"מים.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T18:56:00+00:00",
     "last_update_at": "2026-10-09T18:56:00+00:00",
     "what_is_not_verified": "באיזה מטוס בדיוק שהה הנשיא פוטין בעת שובו מטורקמניסטן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_flightradar24",
       "url": "https://meduza.io/en/news/2026/10/09/ukrainian-drone-alert-disrupts-russian-government-flights-returning-from-putin-s-turkmenistan-trip",
       "published_at": "2026-10-09T18:56:00+00:00"
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
     "id": "UKRAINE-10100620-10",
     "title": "נפילת שברי כטב\"ם באזור קייב",
     "summary": "שברי כטב\"ם נפלו בסמוך למרכז עסקים במחוז דניפרובסקי בקייב וגרמו להצתת כלי רכב, לצד דיווחים על בריחת אזרחים מפגיעות כטב\"מים.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T11:55:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T11:55:29+00:00",
     "last_update_at": "2026-10-10T04:17:00+00:00",
     "what_is_not_verified": "לא מאומת האם השברים היו כתוצאה מיירוט או מפגיעה ישירה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4172879-drone-debris-falls-near-business-center-in-kyiv-car-catches-fire.html",
       "published_at": "2026-10-10T04:17:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131629",
       "published_at": "2026-10-09T11:55:29+00:00"
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
     "id": "UKRAINE-10100620-11",
     "title": "מעצר בלוגר צבאי רוסי במונטנגרו",
     "summary": "מייסד ערוץ הטלגרם הצבאי ריבר, מיכאיל זווינצ'וק, נעצר עם אשתו ואזרחים רוסים נוספים בעיירה ריסאן בחשד להפצת השפעה רוסית וניסיונות לערעור היציבות.",
     "axis": "בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T16:10:25+00:00",
     "last_update_at": "2026-10-09T16:10:25+00:00",
     "what_is_not_verified": "לא מאומת טיב הקשרים המיוחסים לו לשירותי המודיעין הרוסיים מעבר לטענות הרשויות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/09/russian-military-blogger-mikhail-zvinchuk-rybar-arrested-montenegro",
       "published_at": "2026-10-09T16:10:25+00:00"
      }
     ],
     "places": [
      {
       "name": "ריסאן, מונטנגרו",
       "lat": 42.515,
       "lon": 18.6956
      }
     ]
    },
    {
     "id": "UKRAINE-10100620-12",
     "title": "החזרת שגריר קוריאה הדרומית מאוקראינה",
     "summary": "משרד החוץ של קוריאה הדרומית הודיע על החלטה להחזיר את שגריר המדינה מאוקראינה, והשגריר עזב את המדינה.",
     "axis": "דיפלומטיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-10T04:46:17+00:00",
     "last_update_at": "2026-10-10T04:46:17+00:00",
     "what_is_not_verified": "הסיבה המדויקת להחלטת ממשלת קוריאה הדרומית על החזרת השגריר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2200213",
       "published_at": "2026-10-10T04:46:17+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "באיזה מטוס שהה פוטין בעת הטלת מגבלות התעופה במוסקבה",
    "מה פגע בבניין המגורים ברוסטוב על הדון (כטב\"ם או מיירט)",
    "מספר הלכודים המדויק תחת ההריסות בזפוריז'יה",
    "הסיבה הרשמית להחזרת שגריר קוריאה הדרומית מקייב",
    "האם רוסיה מוכנה להסדר מדיני או דוחה שיחות לחלוטין (קיימות טענות סותרות ברוסיה)",
    "היקף הנזק וההשבתה המדויק במתקני האנרגיה ברוסטוב",
    "האם המשלחת האוקראינית לא ידעה כלל על השיחות בין טראמפ לפוטין קודם לפרסומן"
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
     "declared": [
      "המשך הלחימה עד להשגת כל המטרות של המבצע הצבאי",
      "אספקת נפט ומוצרי דלק לשוק האמריקאי והעולמי",
      "תגובה לפגיעות אוקראיניות בתשתיות ובחירות"
     ],
     "inferred": [
      "הבקעת הסנקציות הבינלאומיות ושיקום היצוא האנרגטי באמצעות ערוצים ישירים עם ארצות הברית",
      "המשך שחיקת התשתיות והאוכלוסייה באוקראינה לקראת עונת החורף"
     ],
     "forecast": [
      "המשך הפעלת לחץ צבאי לאורך החזית המזרחית ודחיית כל יוזמה להפסקת אש בתנאים הנוכחיים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "המשך תקיפת בתי זיקוק ותשתיות אנרגיה בעומק רוסיה",
      "התנגדות מוחלטת להקלת סנקציות אנרגטיות ללא הפסקת אש תשתיתית",
      "המשך השתלבות באיחוד האירופי"
     ],
     "inferred": [
      "שימור הלחץ הכלכלי על רוסיה גם ללא גיבוי אמריקאי מלא",
      "הצגת ההסכמים בין ארצות הברית לרוסיה כבגידה באינטרסים המשותפים במטרה לגייס תמיכה בינלאומית חלופית"
     ],
     "forecast": [
      "החרפת התקיפות באמצעות כלי טיס בלתי מאוישים על עורף רוסיה והתבצרות בעמדות מדיניות נוקשות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הורדה מהירה של מחירי הסולר והדלק לאזרחים ולשוק העולמי",
      "קידום פתרון מהיר לסיום המלחמה לפני החורף",
      "בחינת הסדרי ביטחון עתידיים באירופה"
     ],
     "inferred": [
      "הקלת לחצי שוק האנרגיה הפנימיים על רקע עימותים בזירות אחרות ובחירות קרבות",
      "דחיקת אוקראינה להסכמות מדיניות על ידי פתיחת ערוץ ישיר מול מוסקבה"
     ],
     "forecast": [
      "הגברת המתיחות הדיפלומטית מול קייב ובעלות הברית באירופה סביב סוגיית הסנקציות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c68xzqqn4ekro?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/09/russian-military-blogger-mikhail-zvinchuk-rybar-arrested-montenegro",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21590296",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/major-fire-reported-at-oil-terminal-linked-to-russias-novoshakhtinsk-refinery-after-suspected-drone-strike/",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1375456",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/09/ukrainian-drone-alert-disrupts-russian-government-flights-returning-from-putin-s-turkmenistan-trip",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/10/8057301/",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2200213",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131629",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48406",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4172879-drone-debris-falls-near-business-center-in-kyiv-car-catches-fire.html",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bkioihiizg",
     "accessed_at": "2026-10-10T06:20:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T17:17:29+00:00",
  "changes": {
   "UKRAINE-10100620-01": {
    "kind": "new"
   },
   "UKRAINE-10100620-02": {
    "kind": "new"
   },
   "UKRAINE-10100620-03": {
    "kind": "new"
   },
   "UKRAINE-10100620-04": {
    "kind": "new"
   },
   "UKRAINE-10100620-05": {
    "kind": "new"
   },
   "UKRAINE-10100620-06": {
    "kind": "new"
   },
   "UKRAINE-10100620-07": {
    "kind": "new"
   },
   "UKRAINE-10100620-08": {
    "kind": "new"
   },
   "UKRAINE-10100620-09": {
    "kind": "possible",
    "prev": "תקיפות אוקראיניות ושיבושים ברוסיה",
    "score": 0.633
   },
   "UKRAINE-10100620-10": {
    "kind": "new"
   },
   "UKRAINE-10100620-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מעצר אנשי תקשורת במונטנגרו ובאסטריה",
    "score": 0.817
   },
   "UKRAINE-10100620-12": {
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
