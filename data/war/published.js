/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-11T2344__yemen-202610112344.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-11T23:44:41+00:00",
   "window": {
    "from": "2026-10-10T23:44:41+00:00",
    "to": "2026-10-11T23:44:41+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610112344"
   },
   "summary": "העימות בין החות'ים לסעודיה הגיע להסלמה חריפה בעקבות פגיעות ישירות וקטלניות של טילים בנמלי תעופה אזרחיים בריאד ובדמאם. המשטר הסעודי בוחן תגובה צבאית רחבה בעוד החות'ים מאיימים להרחיב את הפגיעה בכל נמלי התעופה בממלכה. במקביל נרשמת דריכות בינלאומית ומאמצים דיפלומטיים מול איראן לריסון המערכה.",
   "fronts": [
    {
     "name": "ציר תימן - סעודיה (עומק הממלכה)",
     "status": "הסלמה חמורה עקב פגיעות חוזרות בנמלי תעופה בריאד ובדמאם והשבתת תנועה אווירית"
    },
    {
     "name": "ציר פנים-תימני מול הקואליציה",
     "status": "דיווחים על חידוש תקיפות אוויריות בצנעא לצד לחימה יבשתית נמשכת בין החות'ים לממשלה המוכרת"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10112344-01",
     "title": "פגיעה קטלנית של טיל חות'י בנמל התעופה הבינלאומי המלך ח'אלד בריאד",
     "summary": "מתקפת טילים של החות'ים פגעה בנמל התעופה הבינלאומי בריאד, גרמה למותם של תריסר עד שלושה עשר בני אדם ולפציעתם של מעל שלוש מאות נוספים, והובילה להשבתת פעילות הנמל.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T08:39:17+00:00",
     "last_update_at": "2026-10-11T22:39:30+00:00",
     "what_is_not_verified": "מספר ההרוגים המדויק (נע בין 12 ל-13 לפי מקורות שונים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/riyadh-airport-attack-kills-one-wounds-11-saudi-aviation-authority-says",
       "published_at": "2026-10-11T22:39:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport",
       "published_at": "2026-10-11T22:28:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131753",
       "published_at": "2026-10-11T20:18:17+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/fresh-attack-hits-riyadh-airport-houthis-warn-airlines-against-using-saudi-airspace",
       "published_at": "2026-10-11T18:52:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-extends-riyadh-airport-closure-after-deadly-strike",
       "published_at": "2026-10-11T11:43:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/deadly-attack-airport-saudi-arabias-capital-kills-12",
       "published_at": "2026-10-11T08:39:17+00:00"
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
     "id": "YEMEN-10112344-02",
     "title": "מתקפה חוזרת על נמל התעופה בריאד ופגיעה בטרמינל נוסעים",
     "summary": "קליע או טיל פגעו בטרמינל 4 בנמל התעופה הבינלאומי בריאד, גרמו להרוג אחד ולפציעת 11 בני אדם וכן לשריפה במקום; במקביל יורט טיל שיוט בסמוך לנמל.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T16:21:01+00:00",
     "last_update_at": "2026-10-11T23:20:46+00:00",
     "what_is_not_verified": "סוג החימוש שפגע במבנה (הוגדר כעצם לא מזוהה).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/11/pakistani-national-killed-second-houthi-strike-riyadh-airport?traffic_source=rss",
       "published_at": "2026-10-11T23:20:46+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T22:45:58+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/riyadh-airport-attack-kills-one-wounds-11-saudi-aviation-authority-says",
       "published_at": "2026-10-11T22:39:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport",
       "published_at": "2026-10-11T22:28:50+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/fresh-attack-hits-riyadh-airport-houthis-warn-airlines-against-using-saudi-airspace",
       "published_at": "2026-10-11T18:52:07+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131740",
       "published_at": "2026-10-11T16:21:01+00:00"
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
     "id": "YEMEN-10112344-03",
     "title": "תקיפת נמל התעופה הבינלאומי המלך פהד בדמאם",
     "summary": "החות'ים שיגרו תקיפה לעבר נמל התעופה בדמאם שבמזרח סעודיה, והרשויות הסעודיות אישרו את הפגיעה ובוחנות את היקף הנזק.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T19:04:08+00:00",
     "last_update_at": "2026-10-11T21:12:07+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת ונפגעים בתקיפה זו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21603489",
       "published_at": "2026-10-11T21:12:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-authority-confirms-houthi-attack-dammam-airport",
       "published_at": "2026-10-11T19:04:08+00:00"
      }
     ],
     "places": [
      {
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    },
    {
     "id": "YEMEN-10112344-04",
     "title": "אזהרת החות'ים לחברות תעופה מפני שימוש במרחב האווירי הסעודי",
     "summary": "דובר הזרוע הצבאית של החות'ים פרסם אזהרה לחברות תעופה ונוסעים להימנע משימוש בשדות תעופה ובמרחב האווירי בסעודיה, למעט במכה ובמדינה.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T11:43:08+00:00",
     "last_update_at": "2026-10-11T18:52:07+00:00",
     "what_is_not_verified": "רמת היכולת המעשית לסגור בפועל את כל המרחב האווירי הסעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/fresh-attack-hits-riyadh-airport-houthis-warn-airlines-against-using-saudi-airspace",
       "published_at": "2026-10-11T18:52:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-extends-riyadh-airport-closure-after-deadly-strike",
       "published_at": "2026-10-11T11:43:08+00:00"
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
     "id": "YEMEN-10112344-05",
     "title": "דיווחים על תקיפות תגובה של הקואליציה בצנעא",
     "summary": "דיווחים על גלי תקיפות אוויריות שביצעה הקואליציה בהובלת סעודיה באזור צנעא ונמל התעופה שלה.",
     "axis": "פנים תימן והקואליציה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T14:17:24+00:00",
     "last_update_at": "2026-10-11T21:12:07+00:00",
     "what_is_not_verified": "היקף הנזק, זהות היעדים ומספר הנפגעים בצנעא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21603489",
       "published_at": "2026-10-11T21:12:07+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/skdra3uoge",
       "published_at": "2026-10-11T14:17:24+00:00"
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
     "id": "YEMEN-10112344-06",
     "title": "גינוי משותף של מדינות האזור לתקיפות החות'ים",
     "summary": "סעודיה, מצרים, פקיסטן וטורקיה פרסמו הצהרה משותפת שבה דרשו עצירה מיידית של מתקפות הטילים והכטב\"מים נגד שטח הממלכה והטילו אחריות מלאה על החות'ים.",
     "axis": "מדיני ואזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T17:22:33+00:00",
     "last_update_at": "2026-10-11T19:47:42+00:00",
     "what_is_not_verified": "אילו צעדי נגד צבאיים או מדיניים יופעלו בפועל על ידי הקואליציה הזו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pakistan-saudi-arabia-egypt-and-turkey-demand-end-houthi-attacks",
       "published_at": "2026-10-11T19:47:42+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48455",
       "published_at": "2026-10-11T17:22:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10112344-07",
     "title": "שיחה בין שרי החוץ של סעודיה ואיראן על ההסלמה",
     "summary": "שרי החוץ של סעודיה ואיראן שוחחו במטרה לבחון דרכים להרגעת המתיחות האזורית, כאשר טהראן הציעה לסייע בהידברות מול תימן.",
     "axis": "מדיני ואזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T21:33:00+00:00",
     "last_update_at": "2026-10-11T21:46:27+00:00",
     "what_is_not_verified": "האם השיחה תניב מגעים ישירים להפסקת אש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-iranian-foreign-ministers-discuss-regional-tensions-state-news-agency-says",
       "published_at": "2026-10-11T21:46:27+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1376124",
       "published_at": "2026-10-11T21:33:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר ההרוגים המדויק במתקפה הראשונה בריאד (12 או 13)",
    "טיב החימוש הספציפי שפגע בטרמינל 4 בתקיפה השנייה",
    "היקף הנזקים והפגיעות בנמל התעופה בדמאם",
    "דיווחים על תקיפות תגובה של הקואליציה בצנעא ותוצאותיהן",
    "מעורבות או תקיפה ישראלית ואמריקנית אפשרית בתימן"
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
     "actor": "התנועה החות'ית (אנצאר אללה)",
     "declared": [
      "פגיעה בכל נמלי התעופה והמרחב האווירי בסעודיה למעט מכה ומדינה",
      "אזהרה לחברות תעופה ונוסעים מפני שהייה בשדות התעופה הסעודיים"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ותדמיתי כבד על ההנהגה הסעודית באמצעות שיבוש התעופה והתיירות",
      "הרתעת סעודיה מפעולה צבאית נרחבת בתימן או מעורבות במערכה האזורית הרחבה"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים וטילים לעבר מתקנים אזרחיים ותשתיות נפט בריאד ובמזרח הממלכה",
      "סיכון להסלמה אזורית ישירה אם יימשכו הפגיעות הקטלניות באזרחים"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "הגנה על ביטחון הממלכה ושלמותה הטריטוריאלית",
      "איום בתגובה נחרצת כנגד החות'ים בעקבות הפגיעה בנמלי התעופה"
     ],
     "inferred": [
      "שאיפה לשמר את תדמית היציבות הכלכלית ולמנוע בריחת חברות בינלאומיות",
      "ניסיון לגייס לגיטימציה בינלאומית וערבית לפעולות ענישה צבאיות"
     ],
     "forecast": [
      "החרפת גלי התקיפות האוויריות על מוקדי שלטון ושיגור של החות'ים בתימן",
      "הידוק מערכי ההגנה האווירית סביב מוקדי תחבורה ונפט מרכזיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/11/pakistani-national-killed-second-houthi-strike-riyadh-airport?traffic_source=rss",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-iranian-foreign-ministers-discuss-regional-tensions-state-news-agency-says",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21603489",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1376124",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pakistan-saudi-arabia-egypt-and-turkey-demand-end-houthi-attacks",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-extends-riyadh-airport-closure-after-deadly-strike",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131740",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48455",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skdra3uoge",
     "accessed_at": "2026-10-11T23:44:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T10:20:55+00:00",
  "changes": {
   "YEMEN-10112344-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "12 הרוגים ו-309 פצועים בתקיפה על נמל התעופה בריאד",
    "score": 1.0
   },
   "YEMEN-10112344-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "סגירת נמל התעופה בריאד הוארכה",
    "score": 1.0
   },
   "YEMEN-10112344-03": {
    "kind": "possible",
    "prev": "התקיפה השלישית השבוע על נמל התעופה בריאד",
    "score": 0.467
   },
   "YEMEN-10112344-04": {
    "kind": "new"
   },
   "YEMEN-10112344-05": {
    "kind": "possible",
    "prev": "סעודיה מאיימת בתגובה החלטית; דיווח על תקיפות בתימן",
    "score": 0.467
   },
   "YEMEN-10112344-06": {
    "kind": "possible",
    "prev": "החות'ים מפרסמים תיעוד של תקיפות רחפני FPV ליד באב אל-מנדב",
    "score": 0.467
   },
   "YEMEN-10112344-07": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-11T2340__iran-202610112340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-11T23:40:57+00:00",
   "window": {
    "from": "2026-10-10T23:40:57+00:00",
    "to": "2026-10-11T23:40:57+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610112340"
   },
   "summary": "העימות האזורי מחריף עם פגיעות טילים קטלניות של החות'ים בנמל התעופה בריאד, לצד אכיפת מצור ימי אמריקאי תקיף שכולל סיכול כלי שיט במפרץ עומאן ופגיעה בייצוא הנפט האיראני. מנגד, טהראן מסרבת לפתוח את מצר הורמוז ללא הסרת המצור והסנקציות, מאיימת בהרחבת הפגיעה לתשתיות תקשורת של ארה\"ב ובעלות בריתה במפרץ, ומבצעת שיגורי ניסוי של טילים. במקביל למתיחות הצבאית, מתקיימים גישושים דיפלומטיים זהירים בין סעודיה לאיראן ובחינה אמריקאית של מעורבות ישראלית בתקיפות בתימן.",
   "fronts": [
    {
     "name": "חזית המפרץ וסעודיה (החות'ים מול סעודיה)",
     "status": "הסלמה חריפה בעקבות תקיפות טילים חוזרות על נמל התעופה בריאד ושיבוש התעופה האזרחית"
    },
    {
     "name": "החזית הימית (מצר הורמוז ומפרץ עומאן)",
     "status": "מצור אמריקאי הדוק, תקיפת ספינת משא, פיצוץ מכלית על מוקש וחסימת מעבר שמובילה איראן"
    },
    {
     "name": "הציר הכלכלי והמדיני מול איראן",
     "status": "מבוי סתום במגעים על פתיחת המצר ודרישות אמריקאיות להגבלת העשרת האורניום, לצד פגיעה קשה בהכנסות הנפט האיראניות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10112340-01",
     "title": "מתקפות טילים וכטב\"מים של החות'ים על נמל התעופה הבינלאומי בריאד",
     "summary": "פגיעות של קליעים וטילים ששוגרו על ידי החות'ים מתימן לעבר נמל התעופה המלך ח'אלד בבירת סעודיה גרמו לנפגעים רבים ולסגירת המרחב האווירי, כולל מתקפה שגבתה הרוגים ומתקפה עוקבת למחרת.",
     "axis": "שלוחות איראן (החות'ים) מול סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T23:37:27+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-10T23:37:27+00:00",
     "last_update_at": "2026-10-11T22:45:58+00:00",
     "what_is_not_verified": "מספר ההרוגים המדויק במתקפה הראשונה שנוי במחלוקת (12 או 13 הרוגים), וסוג החימוש שפגע בטרמינל 4 הוגדר כקליע בלתי מזוהה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T22:45:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport",
       "published_at": "2026-10-11T22:28:50+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/fresh-attack-hits-riyadh-airport-houthis-warn-airlines-against-using-saudi-airspace",
       "published_at": "2026-10-11T18:52:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-responsibility-deadly-riyadh-airport-attack",
       "published_at": "2026-10-11T16:30:23+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-arabia-reports-injuries-new-attack-riyadh-airport-day-after-strike-kills-13",
       "published_at": "2026-10-11T10:46:28+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
       "published_at": "2026-10-10T23:37:27+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי המלך ח'אלד, ריאד, סעודיה",
       "lat": 24.9586,
       "lon": 46.711
      }
     ]
    },
    {
     "id": "IRAN-10112340-02",
     "title": "איראן דוחה את עמדת ארה\"ב לגבי פתיחת מצר הורמוז ומציבה תנאים לסיום העימות",
     "summary": "מזכיר המועצה העליונה לביטחון לאומי באיראן הודיע כי תגובת וושינגטון לשבעת התנאים של טהראן אינה מספקת, ודרש את הסרת המצור הימי האמריקאי והמגבלות על ייצוא הנפט לפני פתיחת מצר הורמוז וחזרה למשא ומתן.",
     "axis": "איראן מול ארצות הברית במצר הורמוז",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T16:55:00+00:00",
     "last_update_at": "2026-10-11T22:18:30+00:00",
     "what_is_not_verified": "פרטי התנאים המלאים והסעיפים הספציפיים שארה\"ב קיבלה או דחתה בתיווך קטאר אינם מפורטים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_31adb1f6f44e71e9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-us-response-falls-short-conditions-deal",
       "published_at": "2026-10-11T22:18:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_31adb1f6f44e71e9",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-says-us-response-its-proposal-reopen-hormuz-was-insufficient",
       "published_at": "2026-10-11T17:46:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_31adb1f6f44e71e9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-security-chief-calls-us-response-deal-conditions-inadequate",
       "published_at": "2026-10-11T17:14:13+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_31adb1f6f44e71e9",
       "url": "https://en.irna.ir/news/86289861/Security-chief-US-response-to-Iran-s-7-conditions-insufficient",
       "published_at": "2026-10-11T16:55:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-03",
     "title": "חיל הים של משמרות המהפכה מדווח על פיצוץ מכלית ענק במצר הורמוז",
     "summary": "הזרוע הימית של משמרות המהפכה הודיעה כי מכלית נפט גולמי עלתה על מוקש ימי ונפגעה מפיצוץ עז בעת שניסתה לצאת ממצר הורמוז בנתיב בלתי מורשה.",
     "axis": "המערכה הימית במצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T18:16:02+00:00",
     "last_update_at": "2026-10-11T18:16:02+00:00",
     "what_is_not_verified": "זהות המכלית, שיוכה הלאומי והיקף הנפגעים או הנזק המדויק אינם מאומתים מעבר להודעת משמרות המהפכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_b6a4d6fb31de85f4",
       "url": "https://en.irna.ir/news/86289902/Supertanker-explodes-after-hitting-mine-in-unauthorized-Hormuz",
       "published_at": "2026-10-11T18:16:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-04",
     "title": "צבא ארה\"ב השבית ספינת משא במפרץ עומאן בעקבות ניסיון להפרת המצור",
     "summary": "מטוס קרב אמריקאי תקף באמצעות חימוש מדויק את ירכתי ספינת המשא אושן מוליקה לאחר שיצאה מנמל איראני והתעלמה מאזהרות לאכוף את המצור הימי, והשבית את מערכת ההנעה שלה ללא פגיעה בצוות.",
     "axis": "ארה\"ב מול איראן בזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T01:46:41+00:00",
     "last_update_at": "2026-10-11T01:46:41+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח מלבד הודעת פיקוד המרכז של צבא ארה\"ב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_decf381d516a54e6",
       "url": "https://www.al-monitor.com/originals/2026/10/us-military-says-it-disabled-cargo-vessel-trying-run-iran-blockade",
       "published_at": "2026-10-11T01:46:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-05",
     "title": "איומים איראניים בפגיעה בתשתיות תקשורת, נתונים ונכסים אמריקאיים במפרץ",
     "summary": "בכירים במשטר האיראני, ובראשם מזכיר המועצה העליונה לביטחון לאומי, איימו כי אם תותקף המדינה שוב, איראן תפגע בכבלי תקשורת תת-ימיים, מרכזי נתונים, מתקני בינה מלאכותית ונכסים של ארה\"ב באיחוד האמירויות ובמצר הורמוז.",
     "axis": "איראן מול ארה\"ב ומדינות המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T15:23:03+00:00",
     "last_update_at": "2026-10-11T16:43:53+00:00",
     "what_is_not_verified": "רשימת המטרות והיכולת המבצעית המדויקת לפגיעה בכבלי התקשורת ומרכזי הנתונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94600",
       "published_at": "2026-10-11T16:43:53+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131741",
       "published_at": "2026-10-11T16:30:14+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86289769/Enemy-interests-across-the-region-will-be-struck-if-Iran-is-attacked",
       "published_at": "2026-10-11T15:23:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-06",
     "title": "האשמות איראניות על מבצעי הברחת נפט של ארה\"ב ואיחוד האמירויות ליד עומאן",
     "summary": "מוחסן רזאאי טען כי ממשל טראמפ מפעיל כלי שיט קטנים יחד עם צבא איחוד האמירויות ומפקד פיקוד המרכז האמריקאי להעברת נפט למכליות מחוץ למצר הורמוז, וטען כי כוחות איראניים תוקפים פעילות זו מדי לילה.",
     "axis": "המערכה הימית במצר הורמוז ומפרץ עומאן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T15:34:01+00:00",
     "last_update_at": "2026-10-11T16:57:53+00:00",
     "what_is_not_verified": "אין כל אימות לקיומו של מבצע הברחה אמריקאי-אמירתי או לתקיפות איראניות ליליות נגדו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-security-chief-accuses-trump-administration-oil-smuggling-near",
       "published_at": "2026-10-11T16:57:53+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-security-chief-accuses-trump-smuggling-oil-through-hormuz",
       "published_at": "2026-10-11T15:34:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-07",
     "title": "מגעים דיפלומטיים בין שרי החוץ של סעודיה ואיראן על רקע ההסלמה",
     "summary": "שרי החוץ של סעודיה ואיראן שוחחו באופן פומבי לראשונה מאז גל המתקפות החות'יות, ודנו במאמצים להפחתת המתיחות האזורית ובאפשרות של סיוע איראני לדיאלוג עם תימן.",
     "axis": "איראן מול סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T21:33:00+00:00",
     "last_update_at": "2026-10-11T21:46:27+00:00",
     "what_is_not_verified": "תוכן השיחה מעבר להודעות הקצרות של סוכנות הידיעות הסעודית והטלגרם של השר האיראני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-iranian-foreign-ministers-discuss-regional-tensions-state-news-agency-says",
       "published_at": "2026-10-11T21:46:27+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1376124",
       "published_at": "2026-10-11T21:33:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-08",
     "title": "השפעת הסנקציות והמצור הימי האמריקאי על ייצוא הנפט של איראן",
     "summary": "שר האוצר האמריקאי הצהיר כי תזרים המזומנים של איראן שלילי ושאין לה משלוחי נפט פעילים בים, בעוד 19 מיכליות איראניות תקועות מול חופי סרי לנקה מחשש לסנקציות.",
     "axis": "המערכה הכלכלית והמצור האמריקאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T08:25:09+00:00",
     "last_update_at": "2026-10-11T14:34:21+00:00",
     "what_is_not_verified": "הטענה המוחלטת כי אין לאיראן אף משלוח נפט בים אינה מאומתת ממקורות נוספים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131731",
       "published_at": "2026-10-11T14:34:21+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131727",
       "published_at": "2026-10-11T13:58:13+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131715",
       "published_at": "2026-10-11T08:25:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-09",
     "title": "מגעים בין ארה\"ב לצה\"ל לבחינת פעולה ישראלית נגד החות'ים בתימן",
     "summary": "גורמים אמריקאיים בחנו מול הרמטכ\"ל הישראלי אפשרות שצה\"ל יבצע תקיפות נגד החות'ים, כאשר הרמטכ\"ל הזהיר מפני הסלמה אפשרית שתשפיע על המערכת הפוליטית בישראל.",
     "axis": "ישראל וארה\"ב מול שלוחות איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T21:40:28+00:00",
     "last_update_at": "2026-10-11T21:40:28+00:00",
     "what_is_not_verified": "תוכן השיחה בין הצדדים וההחלטות המבצעיות שנגזרו ממנה לא אושרו רשמית בידי צה\"ל או הפנטגון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sykug00time",
       "published_at": "2026-10-11T21:40:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10112340-10",
     "title": "תרגיל צבאי של משמרות המהפכה באיראן ושיגורי ניסוי של טילים",
     "summary": "משמרות המהפכה קיימו תרגיל צבאי נרחב במספר ערים באיראן, אשר במסגרתו בוצעו שיגורי ניסוי של עשרות טילים.",
     "axis": "המוכנות הצבאית של איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T11:06:43+00:00",
     "last_update_at": "2026-10-11T11:06:43+00:00",
     "what_is_not_verified": "דגמי הטילים המדויקים, מיקומי השיגור המלאים והיקף התרגיל לא אומתו באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94591",
       "published_at": "2026-10-11T11:06:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר ההרוגים המדויק במתקפה הראשונה בריאד (דיווחים שנעים בין 12 ל-13 הרוגים).",
    "סוג הקליע או הטיל שפגע בטרמינל 4 בנמל התעופה ח'אלד ב-11 באוקטובר.",
    "הטענה האיראנית לפעילות הברחת נפט משותפת של ארה\"ב, פיקוד המרכז ואיחוד האמירויות לחופי עומאן.",
    "טענת איראן כי היא תוקפת כלי שיט מבריחים מדי לילה סמוך לעומאן.",
    "טענת שר האוצר של ארה\"ב כי לאיראן אין כעת אף משלוח נפט פעיל בים.",
    "זהות המכלית שעלתה על מוקש במצר הורמוז והיקף הנזק הממשי שנגרם לה.",
    "פרטי התנאים והמגעים החשאיים בין ארה\"ב לאיראן שהועברו בתיווך קטאר.",
    "קיומו ומטרותיו המדויקות של תרגיל הטילים של משמרות המהפכה ברחבי איראן."
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
     "actor": "איראן",
     "declared": [
      "הסרת המצור הימי של ארה\"ב וביטול המגבלות על ייצוא הנפט כתנאי לפתיחת מצר הורמוז",
      "נכונות לסייע בדיאלוג בין סעודיה לתימן להרגעת המתיחות",
      "איום בהשמדת מרכזי נתונים, מתקני בינה מלאכותית וכבלי תקשורת באזור אם תותקף"
     ],
     "inferred": [
      "מינוף הלחץ הצבאי של החות'ים על סעודיה וסגירת המצר כדי לשבור את הסנקציות הכלכליות",
      "הרתעת ארה\"ב ובעלות בריתה מהרחבת המערכה הישירה לשטח איראן"
     ],
     "forecast": [
      "המשך חסימת מצר הורמוז ושיבוש תנועת המכליות עד להשגת הקלות במצור הכלכלי",
      "הגברת האיומים והחיכוך מול נכסים אמריקאיים באיחוד האמירויות ובמפרץ"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "שמירה על המצור הימי והשבתת כלי שיט המפרים אותו במפרץ עומאן",
      "דרישה לצמצום משמעותי ביכולת העשרת האורניום של איראן כתנאי להסכם",
      "בחינת אפשרות להצטרפות לתקיפות נגד החות'ים וחידוש תקיפות באיראן"
     ],
     "inferred": [
      "חניקת מקורות ההכנסה מנפט של איראן כדי לכפות ויתורים מדיניים וגרעיניים",
      "מניעת הסלמה אזורית רחבה שתשפיע על מחירי האנרגיה לפני הבחירות בארה\"ב"
     ],
     "forecast": [
      "המשך אכיפה קשיחה של המצור הימי ופגיעה בספינות סוחר המפרות אותו",
      "אפשרות להוצאת תקיפות ממוקדות בתימן בשיתוף סעודיה או ישראל"
     ]
    },
    {
     "actor": "שלוחות איראן (החות'ים)",
     "declared": [
      "סגירת המרחב האווירי הסעודי ופגיעה בנמלי תעופה ובמתקני אנרגיה של אראמקו",
      "אזהרת חברות תעופה ועובדים מפני שהייה בנמלי תעופה סעודיים למעט מכה ומדינה"
     ],
     "inferred": [
      "הפעלת לחץ כבד על הממלכה הסעודית לניתוק מהקואליציה האמריקאית-ישראלית",
      "חיזוק מעמדם כזרוע התקפית מרכזית של הציר מול בעלות הברית של ארה\"ב"
     ],
     "forecast": [
      "המשך ירי טילים וכלי טיס בלתי מאוישים לעבר יעדים אזרחיים ותשתיות נפט במפרץ",
      "גרירת סעודיה וארה\"ב לתגובה צבאית רחבה יותר בשטח תימן"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "אישור הפגיעות בנמל התעופה הבינלאומי בריאד והבטחה להגיב על המתקפות",
      "קיום שיחות דיפלומטיות עם איראן לבחינת דרכים להורדת המתיחות"
     ],
     "inferred": [
      "שאיפה להגן על ביטחון התעופה והתשתיות האזרחיות ללא כניסה למלחמה אזורית כוללת",
      "בחינת חידוש פעולות צבאיות יזומות בתימן מול התגברות הלחץ הציבורי והאזורי"
     ],
     "forecast": [
      "שילוב בין מאמצי תיווך דיפלומטי מול טהראן לבין היערכות לפעולות תגמול צבאיות נגד החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-iranian-foreign-ministers-discuss-regional-tensions-state-news-agency-says",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr93znyk44e1o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/10/yemen-government-allied-forces-recapture-bab-al-mandab-strait-houthis-taiz",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86289769/Enemy-interests-across-the-region-will-be-struck-if-Iran-is-attacked",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1376124",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-security-chief-accuses-trump-smuggling-oil-through-hormuz",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131715",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94591",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sykug00time",
     "accessed_at": "2026-10-11T23:40:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T10:20:55+00:00",
  "changes": {
   "IRAN-10112340-01": {
    "kind": "new"
   },
   "IRAN-10112340-02": {
    "kind": "possible",
    "prev": "הקרמלין: פוטין העביר לטראמפ את עמדת טהראן לגבי הסדר",
    "score": 0.467
   },
   "IRAN-10112340-03": {
    "kind": "new"
   },
   "IRAN-10112340-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מטוס קרב אמריקאי השבית ספינת מטען שניסתה לעקוף את המצור",
    "score": 1.0
   },
   "IRAN-10112340-05": {
    "kind": "new"
   },
   "IRAN-10112340-06": {
    "kind": "new"
   },
   "IRAN-10112340-07": {
    "kind": "new"
   },
   "IRAN-10112340-08": {
    "kind": "possible",
    "prev": "סרי לנקה מסרבת לסייע ל-19 מכליות איראניות",
    "score": 0.4
   },
   "IRAN-10112340-09": {
    "kind": "new"
   },
   "IRAN-10112340-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-11T2342__ukraine-202610112342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-11T23:42:39+00:00",
   "window": {
    "from": "2026-10-10T23:42:39+00:00",
    "to": "2026-10-11T23:42:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610112342"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במלוא עוצמתה עם תקיפות הדדיות על ערי עורף ותשתיות אסטרטגיות. כוחות רוסיים המשיכו לפגוע במתקני אנרגיה ובמטרות עירוניות בחרקוב ובמערב אוקראינה, בעוד אוקראינה ביצעה תקיפות כטב\"מים לעבר יעדים טכנולוגיים וצבאיים בתוך שטח רוסיה. במקביל למאמצי תיווך אמריקניים להפסקת אש בתחום האנרגיה, הצדדים מציגים עמדות סותרות ואין אישור על הפסקה בפועל של האש.",
   "fronts": [
    {
     "name": "חזית חרקוב",
     "status": "תקיפות טילים ורחפנים רוסיות על מתקני אנרגיה ואזורים אזרחיים"
    },
    {
     "name": "מערב אוקראינה",
     "status": "פגיעות כטב\"מים רוסיים במבנים אזרחיים ותשתיות באיוונו-פרנקיבסק"
    },
    {
     "name": "העורף הרוסי",
     "status": "תקיפות כטב\"מים אוקראיניות על מרכזי נתונים ותשתיות במחוז מוסקבה ובלגורוד"
    },
    {
     "name": "חזית דונצק (DPR)",
     "status": "תקיפות ופגיעות במבני מגורים ותשתיות אזרחיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10112342-01",
     "title": "תקיפת טילים רוסית ליד חרקוב",
     "summary": "טיל רוסי פגע בפרברי חרקוב בסמוך למכולת ולמבני מגורים, וכתוצאה מכך נהרגו שלושה בני אדם ונפצעו בין 9 ל-25 אנשים.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T17:29:17+00:00",
     "last_update_at": "2026-10-11T23:32:31+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו אחיד בדיווחים ונע בין תשעה לעשרים וחמישה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_a79ffe739c3cf6ae",
       "url": "https://kyivindependent.com/3-killed-25-injured-in-russian-strike-near-kharkiv/",
       "published_at": "2026-10-11T23:32:31+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_a79ffe739c3cf6ae",
       "url": "https://www.ukrinform.net/rubric-ato/4173367-russian-missile-strike-on-kharkiv-suburbs-three-dead-injury-toll-rises-22.html",
       "published_at": "2026-10-11T20:57:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a79ffe739c3cf6ae",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057502/",
       "published_at": "2026-10-11T20:36:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_a79ffe739c3cf6ae",
       "url": "https://t.me/alexmehacarmel/48456",
       "published_at": "2026-10-11T17:29:17+00:00"
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
     "id": "UKRAINE-10112342-02",
     "title": "פגיעה רוסית במתקן אנרגיה בחרקוב",
     "summary": "כוחות רוסיים תקפו מתקן אנרגיה ותחנת כוח תרמית בחרקוב באמצעות טילים ורחפנים, ונזק נגרם לתשתיות החשמל.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T16:47:00+00:00",
     "last_update_at": "2026-10-11T21:07:02+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_7e4a837dc4f86382",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21603491",
       "published_at": "2026-10-11T21:07:02+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_7e4a837dc4f86382",
       "url": "https://www.ukrinform.net/rubric-ato/4173366-russian-forces-attack-energy-facility-in-kharkiv-suburbs.html",
       "published_at": "2026-10-11T20:41:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_7e4a837dc4f86382",
       "url": "https://www.ukrinform.net/rubric-polytics/4173361-zelensky-briefs-von-der-leyen-on-russian-strikes-on-energy-infrastructure-after-trumps-ceasefire-announcement.html",
       "published_at": "2026-10-11T19:48:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_7e4a837dc4f86382",
       "url": "https://kyivindependent.com/russia-struck-kharkivs-power-plant-shortly-after-trump-announced-energy-ceasefire/",
       "published_at": "2026-10-11T17:21:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_c4f187f9778acdcb",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057500/",
       "published_at": "2026-10-11T16:47:00+00:00"
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
     "id": "UKRAINE-10112342-03",
     "title": "מתקפת כטב\"מים רוסית באיוונו-פרנקיבסק",
     "summary": "מתקפת כטב\"מים רוסית פגעה במבנה בעיר איוונו-פרנקיבסק במערב אוקראינה וגרמה למותם של שלושה בני אדם ולפציעת נוספים.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T18:49:00+00:00",
     "last_update_at": "2026-10-11T20:40:00+00:00",
     "what_is_not_verified": "האם ההרוגים היו אנשי צבא כפי שדווח במקור אחד או אזרחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_2aecea5b09d56369",
       "url": "https://kyivindependent.com/russian-drone-strike-kills-3-service-members-in-ivano-frankivsk-wounds-3-others/",
       "published_at": "2026-10-11T20:40:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_2aecea5b09d56369",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057505/",
       "published_at": "2026-10-11T18:49:00+00:00"
      }
     ],
     "places": [
      {
       "name": "איוונו-פרנקיבסק, אוקראינה",
       "lat": 48.9225,
       "lon": 24.7103
      }
     ]
    },
    {
     "id": "UKRAINE-10112342-04",
     "title": "תקיפות כטב\"מים אוקראיניות על מרכז נתונים ומטרות ברוסיה",
     "summary": "אוקראינה שיגרה כטב\"מים לעבר מרכז נתונים של חברת יאנדקס ולעבר מחוז מוסקבה ומחוז בלגורוד, מה שגרם לשיבושים, נפגעים ונזק.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T14:38:10+00:00",
     "last_update_at": "2026-10-11T20:12:55+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2200595",
       "published_at": "2026-10-11T20:12:55+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48458",
       "published_at": "2026-10-11T18:43:52+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21600896",
       "published_at": "2026-10-11T14:49:33+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hykbrfkimx",
       "published_at": "2026-10-11T14:39:26+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw0k0g57mk3zo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T14:38:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10112342-05",
     "title": "הצהרת ארצות הברית על הפסקת אש אנרגטית ותגובות הצדדים",
     "summary": "הנשיא דונלד טראמפ הכריז על הסכמה להפסקת אש הדדית בתשתיות האנרגיה; אוקראינה הביעה נכונות בתנאי להדדיות אך דיווחה על תקיפות רוסיות מתמשכות, ואילו ברוסיה לא אישרו את ההסכמה.",
     "axis": "משא ומתן ומדיניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T14:24:40+00:00",
     "last_update_at": "2026-10-11T21:36:40+00:00",
     "what_is_not_verified": "קיומה של הסכמה רוסית רשמית להפסקת אש אנרגטית אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://www.bbc.co.uk/news/articles/c6pvg4jyz1m0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T21:36:40+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://www.bbc.co.uk/news/videos/cwvgde9vrdd9o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-11T20:55:02+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://www.theguardian.com/us-news/live/2026/oct/11/donald-trump-ukraine-russia-energy-ceasefire-diesel-latest-updates",
       "published_at": "2026-10-11T18:36:54+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://kyivindependent.com/to-keep-oil-prices-from-rising-russian-lawmaker-questions-trumps-energy-ceasefire-claim/",
       "published_at": "2026-10-11T18:35:42+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://t.me/alexmehacarmel/48457",
       "published_at": "2026-10-11T18:07:44+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://www.theguardian.com/world/2026/oct/11/zelenskyy-trump-ukraine-russia-energy-ceasefire",
       "published_at": "2026-10-11T17:21:39+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://t.me/alexmehacarmel/48454",
       "published_at": "2026-10-11T16:22:47+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_b1544f630f23bcbd",
       "url": "https://t.me/abualiexpress/131730",
       "published_at": "2026-10-11T14:24:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10112342-06",
     "title": "העברת סיוע צבאי מאסטוניה והאיחוד האירופי לאוקראינה",
     "summary": "מתנדבים אסטונים מסרו 13 כלי רכב לכוחות הביטחון של אוקראינה בז'יטומיר, ובמקביל הודיע האיחוד האירופי על העברת חבילת מימון צבאי בסך שלושה מיליארד אירו.",
     "axis": "סיוע בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T22:16:42+00:00",
     "last_update_at": "2026-10-11T22:32:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_20b3efddac3a248a",
       "url": "https://www.ukrinform.net/rubric-defense/4173161-estonian-volunteers-deliver-13-vehicles-to-ukraines-defense-forces-in-zhytomyr.html",
       "published_at": "2026-10-11T22:32:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_20b3efddac3a248a",
       "url": "https://kyivindependent.com/eu-to-provide-ukraine-with-3-billion-euro-tranche-of-military-funding-this-week/",
       "published_at": "2026-10-11T22:16:42+00:00"
      }
     ],
     "places": [
      {
       "name": "ז'יטומיר, אוקראינה",
       "lat": 50.2601,
       "lon": 28.6696
      }
     ]
    },
    {
     "id": "UKRAINE-10112342-07",
     "title": "אוקראינה הטילה סנקציות על יצרניות טילים רוסיות",
     "summary": "נשיא אוקראינה חתם על צווים המטילים סנקציות על גופים ויחידים הקשורים לייצור טילים בליסטיים ברוסיה.",
     "axis": "סנקציות ומדיניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T20:27:00+00:00",
     "last_update_at": "2026-10-11T20:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b4371bd58048cd80",
       "url": "https://www.ukrinform.net/rubric-polytics/4173363-ukraine-imposes-sanctions-on-russian-ballistic-missile-manufacturers.html",
       "published_at": "2026-10-11T20:27:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10112342-08",
     "title": "דיווח על פגיעה במשגרי טילים בליסטיים רוסיים",
     "summary": "שר ההגנה של אוקראינה הודיע כי כוחותיו פגעו בשמונה משגרי טילים בליסטיים של רוסיה במהלך החודשיים האחרונים, מהם שלושה הושמדו וחמישה ניזוקו.",
     "axis": "העימות הצבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T16:22:00+00:00",
     "last_update_at": "2026-10-11T16:22:00+00:00",
     "what_is_not_verified": "אין אימות עצמאי או רוסי לפגיעה במשגרי הטילים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_500d0dbb821a6f39",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057498/",
       "published_at": "2026-10-11T16:22:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "קיומה והסכמתה של רוסיה להפסקת אש אנרגטית עליה הכריז טראמפ",
    "הטענה לפגיעה והשמדה של שמונה משגרי טילים בליסטיים רוסיים",
    "מספר הפצועים הסופי בתקיפה ליד המכולת בחרקוב (בין 9 ל-25)",
    "הדיווחים על איומי ארצות הברית לעצור אספקת נשק או מודיעין לאוקראינה"
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
      "מוכנות לעצירת תקיפות על מתקני אנרגיה רוסיים בתנאי שרוסיה תפסיק לתקוף תשתיות אנרגיה אוקראיניות",
      "קיום בחירות בתנאי של הפסקת אש בת שישים יום",
      "החמרת הסנקציות על תעשיית הטילים הרוסית ושימוש בנכסים רוסיים מוקפאים"
     ],
     "inferred": [
      "שאיפה לשמר את אספקת האנרגיה והחשמל לקראת החורף",
      "המשך פגיעה בעומק הרוסי כדי להפעיל לחץ כלכלי וטכנולוגי על מוסקבה"
     ],
     "forecast": [
      "המשך פיתוח והפעלה של כטב\"מים ליירוט ולתקיפות ארוכות טווח",
      "הגברת הלחץ הדיפלומטי על מדינות אירופה להמשך סיוע צבאי וכלכלי עצמאי"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הכחשת ידיעה או הסכמה לגבי הפסקת אש אנרגטית על ידי גורמים בפרלמנט",
      "המשך הגנה על אזורי הגבול ומחוזות העימות"
     ],
     "inferred": [
      "רצון להשבית את מערכת החשמל והאנרגיה האוקראינית כדי לשבור את יכולת העמידה",
      "ניסיון למנוע פגיעה במחירי הנפט והסחר בדלקים מול שווקים זרים"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר מתקני ייצור חשמל בערים מרכזיות באוקראינה",
      "הימנעות מהתחייבות להפסקת אש כוללת ללא השגת תנאים מדיניים נוחים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הכרזה על כניסתה לתוקף של הפסקת אש מיידית בתחום האנרגיה בין שני הצדדים",
      "השגת עסקה לאספקת סולר מרוסיה להורדת מחירי הדלק"
     ],
     "inferred": [
      "שאיפה לייצב את מחירי האנרגיה העולמיים והמקומיים",
      "הפעלת לחץ על אוקראינה לחדול מתקיפת בתי זיקוק רוסיים"
     ],
     "forecast": [
      "המשך מחלוקות עם ההנהגה האוקראינית בנוגע למדיניות הסיוע והתקיפות בעומק רוסיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/videos/cwvgde9vrdd9o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/11/zelenskyy-trump-ukraine-russia-energy-ceasefire",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21600896",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/eu-to-provide-ukraine-with-3-billion-euro-tranche-of-military-funding-this-week/",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/11/8057498/",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2200595",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131730",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48454",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4173363-ukraine-imposes-sanctions-on-russian-ballistic-missile-manufacturers.html",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hykbrfkimx",
     "accessed_at": "2026-10-11T23:42:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T10:20:55+00:00",
  "changes": {
   "UKRAINE-10112342-01": {
    "kind": "new"
   },
   "UKRAINE-10112342-02": {
    "kind": "new"
   },
   "UKRAINE-10112342-03": {
    "kind": "new"
   },
   "UKRAINE-10112342-04": {
    "kind": "possible",
    "prev": "מרכז נתונים שלישי של יאנדקס הושבת",
    "score": 0.467
   },
   "UKRAINE-10112342-05": {
    "kind": "new"
   },
   "UKRAINE-10112342-06": {
    "kind": "possible",
    "prev": "האיחוד האירופי מכין הגבלות ויזה לרוסים",
    "score": 0.467
   },
   "UKRAINE-10112342-07": {
    "kind": "new"
   },
   "UKRAINE-10112342-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-11T2345__north-202610112345.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-11T23:45:40+00:00",
   "window": {
    "from": "2026-10-10T23:45:40+00:00",
    "to": "2026-10-11T23:45:40+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610112345"
   },
   "summary": "הגזרה הדרומית בלבנון נותרת מתוחה על רקע החזקת רצועת שטח בידי ישראל, ירי ארטילרי ואווירי ספורדי, ופגיעה באזרחים מקומיים על אף קיומו של הסכם מסגרת שנחתם ביוני. במקביל נרשמות התרעות אוויריות ופעילות יירוט ישראלית, לצד סירוב חיזבאללה להתפרק מנשקו וחשש דיפלומטי מסיום פעילות יוניפי\"ל ללא מנגנון פיקוח חלופי. בסוריה ממשיכה פעילות חשאית של חוליות בהכוונה איראנית המהוות מוקד תקיפה ישראלי, בעוד המדינה מתמודדת עם הברחות נשק וסמים בגבולותיה ומצוקה תקציבית.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה ספורדית, החזקת רצועת שטח ופגיעות בירי ונפלים תוך הפרת הסכמים"
    },
    {
     "name": "גבול ישראל - לבנון",
     "status": "כוננות ביטחונית גבוהה, יירוטים של איומים אוויריים וסריקות לחשד לחדירות"
    },
    {
     "name": "דרום סוריה ובקעת הלבנון",
     "status": "פעילות של חוליות בהכוונה איראנית וסיכולים ישראליים ממוקדים"
    },
    {
     "name": "גבולות סוריה הפנימיים (ירדן, עיראק ולבנון)",
     "status": "מבצעי סיכול הברחות סמים ורשתות פשיעה חוצות גבול"
    }
   ],
   "events": [
    {
     "id": "NORTH-10112345-01",
     "title": "הרוגים מירי ומשרידי אמל\"ח בדרום לבנון במהלך מסיק זיתים",
     "summary": "שני אזרחים נהרגו בדרום לבנון באזור בינת ג'בייל, האחד מירי ארטילרי או טנקים ישראלי בפאתי יאטר, והשני מהתפוצצות נפל תחמושת קודם בכפר פרון בעת מסיק זיתים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T15:35:29+00:00",
     "last_update_at": "2026-10-11T20:46:45+00:00",
     "what_is_not_verified": "קיימת סתירה לגבי סוג הירי (ארטילריה או טנק), ומידת מעורבות הנפגעים מוגדרת בחלקה כאזרחית ובחלקה כאיש צבא בדימוס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/11/two-killed-near-israeli-occupied-area-in-south-lebanon?traffic_source=rss",
       "published_at": "2026-10-11T20:46:45+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/two-killed-near-israeli-occupied-zone-south-lebanon",
       "published_at": "2026-10-11T19:57:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/two-killed-during-olive-harvest-south-lebanon",
       "published_at": "2026-10-11T15:35:29+00:00"
      }
     ],
     "places": [
      {
       "name": "יאטר, לבנון",
       "lat": 33.1555,
       "lon": 35.3317
      },
      {
       "name": "פרון, לבנון",
       "lat": 33.2968,
       "lon": 35.4265
      }
     ]
    },
    {
     "id": "NORTH-10112345-02",
     "title": "שיגור מיירט לעבר מטרה אווירית חשודה בדרום לבנון",
     "summary": "מערכת הגנה שיגרה מיירט אל עבר מטרה חשודה שזוהתה מעל אזור פעילות כוחות צה\"ל בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T16:39:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T16:39:08+00:00",
     "last_update_at": "2026-10-11T16:43:34+00:00",
     "what_is_not_verified": "תוצאות היירוט ומהות המטרה נותרו בבדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957090",
       "published_at": "2026-10-11T16:43:34+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94599",
       "published_at": "2026-10-11T16:40:38+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131742",
       "published_at": "2026-10-11T16:39:22+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25338",
       "published_at": "2026-10-11T16:39:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10112345-03",
     "title": "סריקות בגליל המערבי בעקבות חשד לחדירה אווירית מלבנון",
     "summary": "כוחות ביטחון ישראליים ערכו סריקות סמוך לגבול לבנון בעקבות אזעקות וזיהוי עצם אווירי לא מזוהה, כולל בדיקת אפשרות של חדירת מצנח ממונע.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T04:54:05+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T04:54:05+00:00",
     "last_update_at": "2026-10-11T15:59:11+00:00",
     "what_is_not_verified": "מהות האיום אינה ידועה, ולא אומת אם הכלי שב לשטח לבנון או חדר לישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21601241",
       "published_at": "2026-10-11T15:59:11+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957000",
       "published_at": "2026-10-11T04:54:05+00:00"
      }
     ],
     "places": [
      {
       "name": "ערב אל-עראמשה, ישראל",
       "lat": 33.0886,
       "lon": 35.2265
      }
     ]
    },
    {
     "id": "NORTH-10112345-04",
     "title": "פציעה קשה של חייל צה\"ל בתקרית מבצעית בגבול לבנון",
     "summary": "דיווח על פציעה קריטית של חייל ישראלי במהלך פעילות מבצעית בגבול עם לבנון ופינויו המוסק לבית חולים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T15:36:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T15:36:38+00:00",
     "last_update_at": "2026-10-11T15:36:38+00:00",
     "what_is_not_verified": "הפרטים נסמכים על כלי תקשורת ישראליים כפי שצוטטו ברשת אל-מנאר, ללא אישור רשמי ישיר בטקסט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/137002/",
       "published_at": "2026-10-11T15:36:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10112345-05",
     "title": "תקיפות אוויריות וארטילריות ישראליות בלבנון",
     "summary": "כלי טיס וארטילריה ישראליים ביצעו תקיפות במספר מוקדים בדרום לבנון, בהם כפר תבנית ואל-מנצורי, לצד נוכחות מטוסי קרב מעל ביירות והבקאע.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T09:47:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T09:47:31+00:00",
     "last_update_at": "2026-10-11T11:27:42+00:00",
     "what_is_not_verified": "הנזקים ומטרות התקיפה המדויקות לא פורטו מעבר לדיווחים כלליים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-renews-airstrikes-artillery-shelling-in-southern-lebanon-despite-us-deal/4085106",
       "published_at": "2026-10-11T11:27:42+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94586",
       "published_at": "2026-10-11T10:21:11+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131720",
       "published_at": "2026-10-11T09:47:31+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10112345-06",
     "title": "פגיעה בפעיל חוליות טרור סוריות-איראניות בגבול סוריה-לבנון",
     "summary": "צה\"ל תקף כלי רכב ובו פעיל טרור סורי הפועל בהכוונה איראנית ומקדם ירי תלול מסלול וכטב\"מים בדרום סוריה, בעת ששהה בצפון בקעת הלבנון סמוך לגבול.",
     "axis": "סוריה - ציר איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T10:33:27+00:00",
     "last_update_at": "2026-10-11T10:33:27+00:00",
     "what_is_not_verified": "תוצאות התקיפה אינן ברורות, וייתכן שהפעיל נפצע ולא נהרג; השתייכותו ליחידה ספציפית נשענת על הערכות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/iran-remains-active-in-southern-syria-local-networks-and-an-ongoing-threat-to-israel/",
       "published_at": "2026-10-11T10:33:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10112345-07",
     "title": "סיכולי הברחות סמים חוצי-גבולות בסוריה",
     "summary": "הרשויות בסוריה הודיעו על תפיסת משלוחי קפטגון ומתאמפטמין במעבר נסיב בדרום המדינה ובאזור דיר א-זור ואל-חסכה, אשר יועדו להברחה מאזור הגבול עם עיראק ולעבר ירדן ולבנון.",
     "axis": "סוריה - פנים וגבולות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T19:27:56+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T19:27:56+00:00",
     "last_update_at": "2026-10-11T19:27:56+00:00",
     "what_is_not_verified": "זהות חלק מחברי הרשתות נמסרה בראשי תיבות בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/syria-foils-drug-smuggling-on-iraq-and-jordan-borders/",
       "published_at": "2026-10-11T19:27:56+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    },
    {
     "id": "NORTH-10112345-08",
     "title": "משפחות סוריות דורשות שחרור עצורים המוחזקים בידי ישראל",
     "summary": "התארגנות ודרישה פומבית של משפחות בסוריה לשחרור קרוביהן הנמצאים במעצר בישראל.",
     "axis": "ישראל - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T20:24:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T20:24:19+00:00",
     "last_update_at": "2026-10-11T20:24:19+00:00",
     "what_is_not_verified": "זהות העצורים, מספרם ונסיבות החזקתם אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/11/syrian-families-demand-release-of-detainees-held-by-israel?traffic_source=rss",
       "published_at": "2026-10-11T20:24:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10112345-09",
     "title": "הצהרת שר הביטחון הישראלי נגד סיוע טורקי לחמאס",
     "summary": "שר הביטחון הישראלי מתח ביקורת על הנהגת טורקיה בגין אירוח פעילי חמאס וסיוע להם, והשמיע איומי סיכול כלפי הנהגת הארגון.",
     "axis": "טורקיה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T12:09:22+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-11T12:09:22+00:00",
     "last_update_at": "2026-10-11T12:09:22+00:00",
     "what_is_not_verified": "אין אימות נוסף או תגובה רשמית מצד טורקיה בטקסט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94594",
       "published_at": "2026-10-11T12:09:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10112345-10",
     "title": "מגעים לקראת סיום פעילות יוניפי\"ל בדרום לבנון",
     "summary": "בלבנון מביעים חשש מסיום מנדט יוניפי\"ל ללא כוח חלופי בשל התנגדות ישראלית ואמריקנית, לצד סירוב צבא לבנון למגעים צבאיים ישירים עם ישראל.",
     "axis": "ישראל - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T14:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-11T14:00:00+00:00",
     "last_update_at": "2026-10-11T14:00:00+00:00",
     "what_is_not_verified": "האופן שבו יפוקח הגבול ללא מנגנון בינלאומי אינו פתור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962271/pressure-mounts-in-the-south-lebanon-faces-unifil-exit-without-a-repla/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962271",
       "published_at": "2026-10-11T14:00:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "תוצאות הפגיעה ביוסף עלי אל-חסון ומידת פציעתו או מותו",
    "שיוכו הארגוני המדויק של אל-חסון ליחידה 840 של כוח קודס או לארגון המודיעין של משמרות המהפכה",
    "סוג הכלי שחדר מלבנון לאזור הגליל המערבי והאם שב לשטח לבנון",
    "תוצאות יירוט המטרה האווירית החשודה בדרום לבנון",
    "זהות העצורים הסורים המוחזקים בישראל ומספרם",
    "נסיבות התקרית בה נפצע קשה חייל צה\"ל בגבול לבנון"
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
      "מניעת התבססות איומים אוויריים וקרקעיים סמוך לגבול הצפוני",
      "הפסקת מנדט יוניפי\"ל וסירוב להכנסת כוח חלופי בינלאומי ללא הסדרים ישירים"
     ],
     "inferred": [
      "שימור רצועת חיץ של כ-10 קילומטרים בדרום לבנון לשם מניעת התקרבות חיזבאללה",
      "סיכול ממוקד של התארגנויות איראניות בציר סוריה-לבנון הפועלות באמצעות כטב\"מים ורקטות"
     ],
     "forecast": [
      "המשך סיכולים נקודתיים ופעולות הנדסיות במרחב המוחזק בדרום לבנון",
      "החרפת החיכוך עם צבא לבנון והתושבים המקומיים ככל שתהליך המסיק יימשך"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "סירוב להתפרק מנשקו במסגרת תוכניות הממשלה הלבנונית"
     ],
     "inferred": [
      "שימור יכולות הרקטות והכטב\"מים ושיקום תשתיות הפיקוד לאחר פגיעות קודמות",
      "הפעלת חוליות משניות בסוריה ובגבול לבנון להטרדת כוחות ישראליים במרחב"
     ],
     "forecast": [
      "התמדה בסירוב להתפרק מנשק מול הממשל בלבנון לצד פעילות תת-קרקעית ואימוץ מתווה לחימה א-סימטרי"
     ]
    },
    {
     "actor": "צבא וממשלת לבנון",
     "declared": [
      "הגדרת התקיפות הישראליות כהפרה בוטה של ההסכמים שנחתמו ביוני",
      "סירוב לקיים תקשורת צבאית ישירה מול צבא ישראל"
     ],
     "inferred": [
      "ניסיון למנוע קריסה מוחלטת של מנגנוני הפיקוח הבינלאומיים של האו\"ם",
      "הרחקת אזרחים מאזורי החיכוך כדי לצמצם נפגעים"
     ],
     "forecast": [
      "הישענות גוברת על לחץ דיפלומטי בינלאומי לקראת נסיגת כוחות יוניפי\"ל הצפויה"
     ]
    },
    {
     "actor": "איראן ורשתות חסות בסוריה",
     "declared": [],
     "inferred": [
      "שימור הציר הלוגיסטי והמבצעי בין סוריה לבקעת הלבנון חרף נפילת משטר אסד",
      "הפעלת פעילים מקומיים בסוריה לאיסוף ותקיפת כוחות ישראליים באמצעים תלולי מסלול"
     ],
     "forecast": [
      "המשך ניסיונות תיאום של חוליות מקומיות בסוריה תחת לחץ תקיפות מתמיד מצד ישראל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/11/syrian-families-demand-release-of-detainees-held-by-israel?traffic_source=rss",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/iran-remains-active-in-southern-syria-local-networks-and-an-ongoing-threat-to-israel/",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/137002/",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-renews-airstrikes-artillery-shelling-in-southern-lebanon-despite-us-deal/4085106",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/syria-foils-drug-smuggling-on-iraq-and-jordan-borders/",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21601241",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962271/pressure-mounts-in-the-south-lebanon-faces-unifil-exit-without-a-repla/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962271",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/two-killed-during-olive-harvest-south-lebanon",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131720",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25338",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94594",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957000",
     "accessed_at": "2026-10-11T23:45:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-11T10:20:55+00:00",
  "changes": {
   "NORTH-10112345-01": {
    "kind": "new"
   },
   "NORTH-10112345-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "מיירט שוגר לעבר מטרה אווירית בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10112345-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "עצם אווירי בלתי מזוהה חדר בגליל המערבי",
    "score": 1.0
   },
   "NORTH-10112345-04": {
    "kind": "new"
   },
   "NORTH-10112345-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מטוסי קרב בגובה נמוך מעל ביירות והר הלבנון",
    "score": 1.0
   },
   "NORTH-10112345-06": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "נתיבי הברחת אנשים פעילים בגבול לבנון-סוריה",
    "score": 0.65
   },
   "NORTH-10112345-07": {
    "kind": "new"
   },
   "NORTH-10112345-08": {
    "kind": "new"
   },
   "NORTH-10112345-09": {
    "kind": "new"
   },
   "NORTH-10112345-10": {
    "kind": "possible",
    "prev": "הסלמה בתקיפות בדרום לבנון: אלמנצורי, טלוסה וכפר תבנית",
    "score": 0.467
   }
  }
 }
};
