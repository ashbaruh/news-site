/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-13T2344__yemen-202610132344.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-13T23:44:51+00:00",
   "window": {
    "from": "2026-10-12T23:44:51+00:00",
    "to": "2026-10-13T23:44:51+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "yemen-202610132344"
   },
   "summary": "הלחימה בין הקואליציה בהובלת ערב הסעודית לבין החות'ים הסלימה לחילופי מהלומות עמוקים על תשתיות אנרגיה ונמלי תעופה. הקואליציה תקפה מתקני דלק בצנעא תחת התרעות פינוי, והחות'ים הגיבו בשיגורי טילים לעבר מטרות כלכליות ושלטוניות בריאד, אל-ח'רג' ומתחמי ארמקו בד'הראן ובדמאם. במקביל נמשכים הקרבות הפנימיים בתימן, בייחוד סביב המצור על העיר תעז וקריאות גיוס בדרום.",
   "fronts": [
    {
     "name": "ציר סעודיה - צנעא",
     "status": "הסלמה חריפה וחילופי מהלומות טילים והפצצות אוויריות על תשתיות דלק ונפט"
    },
    {
     "name": "חזית פנים-תימנית (תעז ודרום תימן)",
     "status": "מצור מתמשך על כוחות ממשלת תימן בתעז וקריאות גיוס של מועצת המעבר הדרומית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10132344-01",
     "title": "תקיפות הקואליציה על מאגרי דלק ואזהרות פינוי בצנעא",
     "summary": "הקואליציה בהובלת ערב הסעודית הוציאה אזהרת פינוי ראשונה למתחם חברת הנפט ותחנת הדלק אל-סבאחה במבואות צנעא, ולאחר מכן תקפה את האתר.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T13:13:54+00:00",
     "last_update_at": "2026-10-13T22:29:55+00:00",
     "what_is_not_verified": "הקואליציה טרם אישרה רשמית את ביצוע התקיפה עצמה על פי חלק מהדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/crx2d60y1py3o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-13T22:29:55+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-hit-multiple-explosions-after-strikes-yemeni-oil-facility",
       "published_at": "2026-10-13T20:39:06+00:00"
      },
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/saudi-arabia-strikes-houthi-targets-as-red-sea-war-escalates/",
       "published_at": "2026-10-13T18:48:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-warn-fresh-attacks-saudi-arabia-after-sanaa-strike",
       "published_at": "2026-10-13T17:43:57+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
       "published_at": "2026-10-13T17:26:08+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/by3r11aijzl",
       "published_at": "2026-10-13T15:38:17+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261013-oil-facility-near-yemen-capital-sanaa-hit-by-saudi-arabia-houthis-say",
       "published_at": "2026-10-13T14:53:39+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131841",
       "published_at": "2026-10-13T14:02:27+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94631",
       "published_at": "2026-10-13T13:56:42+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21616241",
       "published_at": "2026-10-13T13:13:54+00:00"
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
     "id": "YEMEN-10132344-02",
     "title": "פגיעה במתחם משרדי ארמקו בד'הראן",
     "summary": "משרד האנרגיה הסעודי הודיע כי מבנה מנהלי של חברת ארמקו בד'הראן הותקף ופרצה בו שריפה מקומית ללא נפגעים, והעובדים התבקשו לעבוד מרחוק.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T17:26:08+00:00",
     "last_update_at": "2026-10-13T21:46:04+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר להודעת משרד האנרגיה הסעודי ורויטרס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48525",
       "published_at": "2026-10-13T21:46:04+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-aramco-administrative-building-attacked-limited-fire-reported",
       "published_at": "2026-10-13T18:46:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
       "published_at": "2026-10-13T17:26:08+00:00"
      }
     ],
     "places": [
      {
       "name": "ד'הראן, ערב הסעודית",
       "lat": 26.2967,
       "lon": 50.1202
      }
     ]
    },
    {
     "id": "YEMEN-10132344-03",
     "title": "שיגורים ויירוטים מעל ריאד, אל-ח'רג' ודמאם",
     "summary": "הקואליציה יירטה טילי שיוט וטילים בליסטיים שכוונו לריאד, מחוז אל-ח'רג' ואזור המזרח, כאשר רסיסים פצעו ארבעה בני אדם וגרמו נזק למבנים בריאד.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T18:34:12+00:00",
     "last_update_at": "2026-10-13T23:02:35+00:00",
     "what_is_not_verified": "שיוך מדויק של כל שברי הטילים שנפלו למערכות היירוט הספציפיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_24427ac5811d6a3e",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-missile-intercepted-al-kharj",
       "published_at": "2026-10-13T23:02:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_24427ac5811d6a3e",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-says-four-imjured-debris-intercepted-missiles-over-riyadh",
       "published_at": "2026-10-13T22:31:12+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_24427ac5811d6a3e",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-hit-multiple-explosions-after-strikes-yemeni-oil-facility",
       "published_at": "2026-10-13T20:39:06+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_24427ac5811d6a3e",
       "url": "https://www.sabanew.net/viewstory/153963",
       "published_at": "2026-10-13T19:03:09+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_24427ac5811d6a3e",
       "url": "https://t.me/alexmehacarmel/48519",
       "published_at": "2026-10-13T18:34:12+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אל-ח'רג', ערב הסעודית",
       "lat": 23.8304,
       "lon": 47.684
      },
      {
       "name": "דמאם, ערב הסעודית",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    },
    {
     "id": "YEMEN-10132344-04",
     "title": "אזהרות הדדיות ואיומי תגמול של החות'ים",
     "summary": "החות'ים הכריזו כי יתקפו את נמל התעופה הבינלאומי בריאד, בית הזיקוק ומתקני ארמקו, ודרשו לפנותם בעקבות מתקפות הקואליציה.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T11:16:38+00:00",
     "last_update_at": "2026-10-13T17:43:57+00:00",
     "what_is_not_verified": "היקף היכולת לממש את כל האיומים המוצהרים בו-זמנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-warn-fresh-attacks-saudi-arabia-after-sanaa-strike",
       "published_at": "2026-10-13T17:43:57+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94633",
       "published_at": "2026-10-13T14:22:44+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131842",
       "published_at": "2026-10-13T14:22:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21616241",
       "published_at": "2026-10-13T13:13:54+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94626",
       "published_at": "2026-10-13T11:16:38+00:00"
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
     "id": "YEMEN-10132344-05",
     "title": "מצור חות'י והחמרת המצב ההומניטרי בתעז",
     "summary": "החות'ים מכתרים כוחות ממשלתיים בתעז, חוסמים נתיבי אספקה ומזון, ומשרד הגז המקומי גינה מניעת כניסת גז בישול.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T17:28:43+00:00",
     "last_update_at": "2026-10-13T21:04:44+00:00",
     "what_is_not_verified": "רמת המחסור המדויקת באספקה בקרב כלל חלקי העיר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_cd917c54990d2185",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/13/food-shortages-in-yemens-taiz-as-houthi-siege-hits-supplies?traffic_source=rss",
       "published_at": "2026-10-13T21:04:44+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_cd917c54990d2185",
       "url": "https://www.sabanew.net/viewstory/153956",
       "published_at": "2026-10-13T17:28:43+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10132344-06",
     "title": "קריאת מועצת המעבר הדרומית לגיוס נגד החות'ים",
     "summary": "מנהיג מועצת המעבר הדרומית, עידרוס א-זוביידי, קרא לגיוס תושבי הדרום למאבק למען אוטונומיה אזורית ונגד החות'ים.",
     "axis": "פנים תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T20:42:56+00:00",
     "last_update_at": "2026-10-13T20:42:56+00:00",
     "what_is_not_verified": "מידת ההיענות בפועל לקריאת הגיוס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/southern-yemeni-leader-calls-mobilization-against-houthis-war-escalates",
       "published_at": "2026-10-13T20:42:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10132344-07",
     "title": "שיבוש התעופה האזרחית לסעודיה והנחיות שגרירויות",
     "summary": "חברות תעופה זרות השביתו או האריכו ביטולי טיסות לריאד עד אמצע אוקטובר עקב פגיעות קודמות בנמל התעופה, ושגרירות צרפת פרסמה אזהרת הימנעות מנמלי תעופה סעודיים.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T09:19:23+00:00",
     "last_update_at": "2026-10-13T13:51:23+00:00",
     "what_is_not_verified": "רשימת כלל חברות התעופה הבינלאומיות שהשעו טיסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261013-french-embassy-in-riyadh-tells-citizens-to-avoid-saudi-airports-targeted-by-houthis",
       "published_at": "2026-10-13T13:51:23+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/airlines-suspend-flights-to-riyadh-amid-security-fears",
       "published_at": "2026-10-13T09:19:23+00:00"
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
     "id": "YEMEN-10132344-08",
     "title": "טענה לסירוב סעודי להשתתפות ישראלית בלחימה",
     "summary": "עיתון הארץ דיווח כי ראש ממשלת ישראל ביקש להצטרף לפעילות הצבאית נגד החות'ים, אך יורש העצר הסעודי סירב מחשש לתגובה ציבורית פנימית.",
     "axis": "תימן - ישראל - סעודיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T16:21:10+00:00",
     "last_update_at": "2026-10-13T16:21:10+00:00",
     "what_is_not_verified": "ההצעה הישראלית והסירוב הסעודי לא אושרו רשמית בידי אף אחד מהממשלים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-refuses-israeli-request-join-yemen-war",
       "published_at": "2026-10-13T16:21:10+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "דיווח על בקשת ראש ממשלת ישראל להצטרף ללחימה וסירוב סעודי לכך",
    "הטענה של נשיא ארצות הברית שטראמפ כי החות'ים פועלים להעלות מחירי נפט לקראת הבחירות",
    "מספר הנפגעים והנזקים הכולל בתקיפות בעיר דמאם שלא פורטו במדויק",
    "אימות רשמי של הקואליציה הסעודית לביצוע התקיפה באל-סבאחה"
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
     "value": 3.0751,
     "unit": "ILS",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "נטרול מקורות האספקה של החות'ים ומתקני האנרגיה המשמשים אותם",
      "הגנה על המרחב האווירי, האזרחים והתשתיות הלאומיות בממלכה"
     ],
     "inferred": [
      "הרתעת החות'ים מפגיעה נוספת בנמלי תעופה ובמתקני ייצוא נפט אסטרטגיים",
      "הימנעות ממעורבות צבאית גלויה של גורמים זרים שעלולה לפגוע בלגיטימציה הפנימית"
     ],
     "forecast": [
      "המשך סיכול מטרות תשתית שלטוניות בצנעא תוך שימוש באזהרות פינוי"
     ]
    },
    {
     "actor": "תנועת החות'ים",
     "declared": [
      "תגמול על תקיפות הקואליציה בצנעא באמצעות פגיעה במתקני ארמקו ובנמלי תעופה סעודיים",
      "אזהרת ארצות הברית מפני התערבות צבאית ישירה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ישיר על ריאד דרך שיבוש התעופה ומגזר האנרגיה",
      "חיזוק עמדות שליטה קרקעיות במרכז ובדרום תימן תוך ניצול ההסלמה"
     ],
     "forecast": [
      "המשך ניסיונות שיגור של טילי שיוט ורחפנים לעבר ריכוזי תעשייה בריאד ובמזרח סעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/13/food-shortages-in-yemens-taiz-as-houthi-siege-hits-supplies?traffic_source=rss",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/southern-yemeni-leader-calls-mobilization-against-houthis-war-escalates",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/crx2d60y1py3o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/airlines-suspend-flights-to-riyadh-amid-security-fears",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/saudi-arabia-strikes-houthi-targets-as-red-sea-war-escalates/",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21616241",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-hit-multiple-explosions-after-strikes-yemeni-oil-facility",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-refuses-israeli-request-join-yemen-war",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153956",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131842",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48519",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94626",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/by3r11aijzl",
     "accessed_at": "2026-10-13T23:44:51+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T09:59:16+00:00",
  "changes": {
   "YEMEN-10132344-01": {
    "kind": "new"
   },
   "YEMEN-10132344-02": {
    "kind": "new"
   },
   "YEMEN-10132344-03": {
    "kind": "new"
   },
   "YEMEN-10132344-04": {
    "kind": "new"
   },
   "YEMEN-10132344-05": {
    "kind": "possible",
    "prev": "הפגזות ותקיפות של החות'ים בעיר תעז ופגיעה בבית חולים",
    "score": 0.633
   },
   "YEMEN-10132344-06": {
    "kind": "new"
   },
   "YEMEN-10132344-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפות טילים וכטב\"מים של החות'ים על נמל התעופה הבינלאומי בריאד ושיבוש התעופה",
    "score": 1.0
   },
   "YEMEN-10132344-08": {
    "kind": "possible",
    "prev": "הצעת תיווך איראנית בין סעודיה לחות'ים וטענה לסירוב להפסקת אש",
    "score": 0.467
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-13T2340__iran-202610132340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-13T23:40:42+00:00",
   "window": {
    "from": "2026-10-12T23:40:42+00:00",
    "to": "2026-10-13T23:40:42+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610132340"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתרחב וכולל מצור ימי ופגיעה מוגברת בשיט במצרי הורמוז, לצד חילופי מהלומות כבדים בין החות'ים בתימן לבין סעודיה. במקביל נרשמות תקיפות של טהראן נגד מתנגדים בעיראק, אזהרות צבאיות הדדיות, ומאמצים מערביים לפגוע ברשתות עקיפת הסנקציות הכלכליות.",
   "fronts": [
    {
     "name": "מצרי הורמוז והמפרץ הפרסי",
     "status": "הסלמה חריפה בתקיפות על כלי שיט, ירידה במשלוחי הנפט ומצור ימי הדדי"
    },
    {
     "name": "סעודיה - תימן (שלוחות איראן)",
     "status": "הסלמה צבאית הכוללת שיגור טילים לעבר ערי סעודיה ותקיפות סעודיות על יעדי נפט בתימן"
    },
    {
     "name": "צפון עיראק",
     "status": "תקיפות כטבמים איראניות חוזרות ונשנות נגד גורמי אופוזיציה כורדיים לאחר עזיבת כוחות ארצות הברית"
    },
    {
     "name": "הזירה המדינית-כלכלית מול המערב",
     "status": "החרפת הסנקציות על הברחות כספים, מתיחות דיפלומטית עם בריטניה ואזהרות מפני תקיפות נוספות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10132340-01",
     "title": "הסלמת תקיפות ופגיעה בכלי שיט במצרי הורמוז",
     "summary": "נרשם גל תקיפות מוגבר באמצעות טילים וכטבמים נגד ספינות באזור מצרי הורמוז, כולל פגיעות במכלית ובספינת מכולות.",
     "axis": "מצרי הורמוז והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T16:23:44+00:00",
     "last_update_at": "2026-10-13T23:39:08+00:00",
     "what_is_not_verified": "מקור הירי המדויק על שתי הספינות ומידת הנזק והנפגעים המלאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_caa5ef2da3b364c9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/attacks-hormuz-shipping-wartime-high-report-says",
       "published_at": "2026-10-13T23:39:08+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_caa5ef2da3b364c9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-ships-hit-projectiles-hormuz-strait-maritime-agency-says",
       "published_at": "2026-10-13T20:06:07+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_caa5ef2da3b364c9",
       "url": "https://t.me/lelotsenzura/94635",
       "published_at": "2026-10-13T19:32:15+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_caa5ef2da3b364c9",
       "url": "https://en.irna.ir/news/86291981/Iranian-Navy-identifies-oil-tanker-that-caught-fire-in-Strait",
       "published_at": "2026-10-13T16:23:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10132340-02",
     "title": "שיגור טילים של החות'ים לעבר יעדים בסעודיה ותקיפות נגד",
     "summary": "החות'ים שיגרו טילים לעבר יעדים בריאד ובדהראן בסעודיה, רסיסי יירוט פצעו אזרחים, ובמקביל סעודיה תקפה מחסני נפט סמוך לצנעא.",
     "axis": "סעודיה - תימן / שלוחות איראן במפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T13:51:23+00:00",
     "last_update_at": "2026-10-13T22:31:12+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במתקני הנפט בתימן ופרטי יירוט הטילים מעל דהראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-says-four-imjured-debris-intercepted-missiles-over-riyadh",
       "published_at": "2026-10-13T22:31:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
       "published_at": "2026-10-13T17:26:08+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261013-oil-facility-near-yemen-capital-sanaa-hit-by-saudi-arabia-houthis-say",
       "published_at": "2026-10-13T14:53:39+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261013-french-embassy-in-riyadh-tells-citizens-to-avoid-saudi-airports-targeted-by-houthis",
       "published_at": "2026-10-13T13:51:23+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "דהראן, סעודיה",
       "lat": 26.2967,
       "lon": 50.1202
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "IRAN-10132340-03",
     "title": "מתקפות כטבמים איראניות נגד כוחות כורדיים בצפון עיראק",
     "summary": "איראן שיגרה כטבמים נגד מחנות של האופוזיציה הכורדית-איראנית באזור כויה שבחבל כורדיסטן בעיראק.",
     "axis": "עיראק - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T15:14:23+00:00",
     "last_update_at": "2026-10-13T15:19:47+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק במחנות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/iran-targets-kurdish-opposition-groups-in-iraq-with-new-round-of-drone-attacks/",
       "published_at": "2026-10-13T15:19:47+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/10/iran-targets-kurdish-opposition-groups-with-new-round-of-drone-attacks.php",
       "published_at": "2026-10-13T15:14:23+00:00"
      }
     ],
     "places": [
      {
       "name": "כויה, עיראק",
       "lat": 36.0842,
       "lon": 44.6339
      },
      {
       "name": "ארביל, עיראק",
       "lat": 36.1912,
       "lon": 44.0094
      }
     ]
    },
    {
     "id": "IRAN-10132340-04",
     "title": "התבטאות טראמפ בנוגע לסיוע מרוסיה וסין ולפעילות החות'ים",
     "summary": "הנשיא טראמפ טען כי אינו מאמין שרוסיה וסין מסייעות לאיראן, והאשים את החות'ים בניסיון מכוון לייקר את מחירי הנפט בהוראת טהראן לקראת הבחירות בארצות הברית.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T05:38:01+00:00",
     "last_update_at": "2026-10-13T21:13:27+00:00",
     "what_is_not_verified": "מידת הסיוע בפועל של סין ורוסיה לאיראן לאור הערכות מודיעין אמריקאיות סותרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-he-does-not-believe-china-and-russia-help-iran-contradicting",
       "published_at": "2026-10-13T21:13:27+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131862",
       "published_at": "2026-10-13T18:13:01+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/trump-says-houthis-trying-drive-oil-prices-ahead-us-midterm-elections",
       "published_at": "2026-10-13T16:46:32+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48515",
       "published_at": "2026-10-13T16:42:06+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131814",
       "published_at": "2026-10-13T05:38:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10132340-05",
     "title": "זימון שגריר בריטניה בטהראן בעקבות חשד לפעילות נגד בסיס פיירפורד",
     "summary": "משרד החוץ של איראן זימן את שגריר בריטניה ומחה על האשמות הקושרות את טהראן לתוכנית פעולה נגד בסיס חיל האוויר פיירפורד ששימש מפציצים אמריקאיים לתקיפה באיראן.",
     "axis": "איראן - המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T17:57:00+00:00",
     "last_update_at": "2026-10-13T17:57:00+00:00",
     "what_is_not_verified": "ראיות ממשיות למעורבות ישירה של איראן באירוע בבסיס הבריטי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-summons-british-ambassador-over-fairford-airbase-incident-foreign",
       "published_at": "2026-10-13T17:57:00+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "פיירפורד, בריטניה",
       "lat": 51.7108,
       "lon": -1.782
      }
     ]
    },
    {
     "id": "IRAN-10132340-06",
     "title": "הטלת סנקציות בבריטניה וארצות הברית על רשת עקיפה פיננסית",
     "summary": "בריטניה וארצות הברית הטילו מגבלות וסנקציות על עשרות גופים הקשורים לרשת פיננסית רוסית המסייעת לעקיפת סנקציות של מוסקבה וטהראן.",
     "axis": "סנקציות וכלכלה בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T20:12:43+00:00",
     "last_update_at": "2026-10-13T20:12:43+00:00",
     "what_is_not_verified": "היקף הכספים המדויק שנותב עבור איראן דרך הרשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/russias-leading-sanctions-evasion-tool-is-a-new-kind-of-illicit-finance-threat/",
       "published_at": "2026-10-13T20:12:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10132340-07",
     "title": "העברת כספים מאיראן לחזבאללה למימון עקורים",
     "summary": "איראן העבירה סכום של 200 מיליון דולר לידי ארגון חזבאללה לצורך חלוקת מענקים לאוכלוסייה עקורה בעקבות העימות עם ישראל.",
     "axis": "ישראל - איראן / חזבאללה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T12:03:17+00:00",
     "last_update_at": "2026-10-13T12:03:17+00:00",
     "what_is_not_verified": "העברת הכספים בפועל וזהות הגורמים שקיבלו את התשלום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131834",
       "published_at": "2026-10-13T12:03:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10132340-08",
     "title": "מינוי מפקד ושינוי שם יחידת החיסולים בכוח קודס",
     "summary": "כוח קודס של משמרות המהפכה מינה מפקד חדש ושינה את שמה של יחידת המבצעים בחוץ לארץ ליחידה 600 לאחר חשיפת מבנה היחידה.",
     "axis": "איראן - פעילות בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T21:03:35+00:00",
     "last_update_at": "2026-10-13T21:03:35+00:00",
     "what_is_not_verified": "שמו וזהותו של המפקד החדש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610131837",
       "published_at": "2026-10-13T21:03:35+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים לפיה סעודיה ביקשה הפסקת אש דרך איראן",
    "מידת המעורבות והסיוע המודיעיני והצבאי בפועל של סין ורוסיה לטהראן",
    "האשמות בריטניה בדבר תיאום מזימה מתוך איראן נגד בסיס פיירפורד",
    "הדיווח לפיו ראש ממשלת ישראל שוחח עם נשיא ארצות הברית על יציאה למערכה צבאית נוספת"
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
     "value": 3.0751,
     "unit": "ILS",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הפעלת מלוא היכולות להדיפת כל תוקפנות נגד המדינה",
      "שליטה במעבר במצרי הורמוז ומניעת תנועה ללא אישור מטעמה",
      "דחיית כל קשר לפעולות חבלה נגד בסיסים בבריטניה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי בינלאומי באמצעות פגיעה בנתיבי שיט ונפט לקראת הכרעות פוליטיות בארצות הברית",
      "הרחבת הלחץ באזור באמצעות שלוחות בתימן ובלבנון כדי להרתיע את ארצות הברית וישראל מהמשך תקיפות"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות במצרי הורמוז תוך החרפת האיומים להגיב מעבר לגבולות האזור במקרה של תקיפה אמריקאית נוספת"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "שליטה בנתיבי המים במצרי הורמוז והטלת סגר ימי על נמלים באיראן",
      "אזהרת החות'ים מפני פגיעה בסעודיה ומניעת ייקור מכוון של מחירי הנפט"
     ],
     "inferred": [
      "בלימת השפעת הלחימה על מחירי האנרגיה העולמיים והכלכלה הפנימית לקראת בחירות",
      "הידוק הסנקציות וניתוק נתיבי המימון והסיוע הזר של טהראן"
     ],
     "forecast": [
      "הגברת האכיפה נגד רשתות הברחה פיננסיות ושימור נוכחות צבאית להרתעת פעולות נוספות של שלוחות איראן"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "בחינת אפשרות לחידוש התקיפות הישירות נגד איראן תוך תיאום עם הממשל האמריקאי",
      "פגיעה בציר ההתעצמות והמימון של חזבאללה ושלוחות איראניות נוספות"
     ],
     "forecast": [
      "המשך היערכות צבאית למערכה ישירה אפשרית בהתאם להתפתחויות מול טהראן ואישור מוושינגטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/trump-says-houthis-trying-drive-oil-prices-ahead-us-midterm-elections",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/russias-leading-sanctions-evasion-tool-is-a-new-kind-of-illicit-finance-threat/",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261013-french-embassy-in-riyadh-tells-citizens-to-avoid-saudi-airports-targeted-by-houthis",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/13/saudi-arabia-strikes-strategic-oil-depots-near-yemen-capital",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610131837",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86291981/Iranian-Navy-identifies-oil-tanker-that-caught-fire-in-Strait",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/iran-targets-kurdish-opposition-groups-with-new-round-of-drone-attacks.php",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-summons-british-ambassador-over-fairford-airbase-incident-foreign",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131834",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48515",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94635",
     "accessed_at": "2026-10-13T23:40:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T09:43:16+00:00",
  "changes": {
   "IRAN-10132340-01": {
    "kind": "new"
   },
   "IRAN-10132340-02": {
    "kind": "new"
   },
   "IRAN-10132340-03": {
    "kind": "new"
   },
   "IRAN-10132340-04": {
    "kind": "new"
   },
   "IRAN-10132340-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "זימון שגריר איראן בלונדון בעקבות תקרית בבסיס פיירפורד",
    "score": 1.0
   },
   "IRAN-10132340-06": {
    "kind": "new"
   },
   "IRAN-10132340-07": {
    "kind": "new"
   },
   "IRAN-10132340-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-13T2343__ukraine-202610132343.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-13T23:43:50+00:00",
   "window": {
    "from": "2026-10-12T23:43:50+00:00",
    "to": "2026-10-13T23:43:50+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "ukraine-202610132343"
   },
   "summary": "העימות הצבאי בין רוסיה לאוקראינה מתאפיין בהמשך תקיפות הדדיות על תשתיות אנרגיה ועורף עירוני, לצד פעילות בקווי החזית במזרח. במקביל למגעים מדיניים ויוזמות בינלאומיות להסדרת הפסקת אש באנרגיה, קייב סופגת פגיעות בליסטיות ללא התרעה מודיעינית מוקדמת מבעלות בריתה. המתיחות הדיפלומטית נמשכת סביב תנאי המשא ומתן והמשך התמיכה המערבית.",
   "fronts": [
    {
     "name": "ציר קייב והעורף האוקראיני",
     "status": "תקיפות בליסטיות רוסיות על מתקני אנרגיה ומבנים עירוניים ללא התרעה מוקדמת"
    },
    {
     "name": "ציר מחוז חרקוב (וליקי בורלוק)",
     "status": "כוננות אוקראינית לאפשרות של ניסיונות התקדמות רוסיים לאורך הגבול"
    },
    {
     "name": "ציר מחוז קורסק",
     "status": "פעילות פינוי מוקשים ושיקום תשתיות בהשתתפות גורמים צבאיים קוריאניים לפי טענת רוסיה"
    },
    {
     "name": "ציר דונבאס (דונייצק)",
     "status": "תקיפות ארטילריות ופגיעות בתשתיות אזרחיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10132343-01",
     "title": "מתקפת טילים רוסית על תחנת כוח ומבני מגורים בקייב",
     "summary": "רוסיה שיגרה טילים בליסטיים לעבר קייב ופגעה בתחנת כוח תרמית ומבנה מגורים, ללא קבלת התרעה מוקדמת מבעלות בריתה של אוקראינה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T14:52:20+00:00",
     "last_update_at": "2026-10-13T22:05:41+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומידת הנזק הסופי לתחנת הכוח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1376930",
       "published_at": "2026-10-13T22:05:41+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/13/allies-did-not-warn-kyiv-of-russian-ballistic-missile-strikes-says-zelenskyy",
       "published_at": "2026-10-13T21:54:12+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48523",
       "published_at": "2026-10-13T20:56:23+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48522",
       "published_at": "2026-10-13T20:34:08+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057882/",
       "published_at": "2026-10-13T20:27:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/kyiv-residential-building-struck-by-russia-as-ukraine-says-intelligence-sharing-from-partners-interrupted/",
       "published_at": "2026-10-13T20:13:25+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-missiles-slam-central-kyiv-before-air-raid-alert-sounds/",
       "published_at": "2026-10-13T17:58:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48513",
       "published_at": "2026-10-13T14:52:20+00:00"
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
     "id": "UKRAINE-10132343-02",
     "title": "תקיפות כטבמים וטילים במחוז חמלניצקי",
     "summary": "תקיפות רוסיות גרמו לשריפות בבתי עסק במחוז חמלניצקי, כאשר מערכות ההגנה האווירית הופעלו ליירוט.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T20:42:00+00:00",
     "last_update_at": "2026-10-13T20:42:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא בבתי העסק שנפגעו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057872/",
       "published_at": "2026-10-13T20:42:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חמלניצקי, אוקראינה",
       "lat": 49.4196,
       "lon": 26.9794
      },
      {
       "name": "שפטיבקה, אוקראינה",
       "lat": 50.1809,
       "lon": 27.0652
      }
     ]
    },
    {
     "id": "UKRAINE-10132343-03",
     "title": "מתקפות אוקראיניות על מרכזי נתונים ברוסיה",
     "summary": "כטבמים אוקראיניים פגעו בשלושה מרכזי נתונים של חברת יאנדקס ברוסיה, וגרמו לשיבושי שירותים נרחבים.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T17:31:46+00:00",
     "last_update_at": "2026-10-13T21:50:17+00:00",
     "what_is_not_verified": "ההשפעה הממשית על מבצעי השפעה ברשתות החברתיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/14/alice-is-still-chugging-along-though-she-s-showing-clear-signs-of-a-personality-breakdown-meduza-readers-describe-how-attacks-on-yandex-data-centers-are-changing-their-work-and-daily-lives",
       "published_at": "2026-10-13T21:50:17+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/no-ukraines-strikes-on-yandex-data-centers-didnt-cripple-russian-influence-ops/",
       "published_at": "2026-10-13T17:31:46+00:00"
      }
     ],
     "places": [
      {
       "name": "סאסובו, רוסיה",
       "lat": 54.3448,
       "lon": 41.9215
      },
      {
       "name": "קלוגה, רוסיה",
       "lat": 54.5101,
       "lon": 36.2598
      },
      {
       "name": "ולדימיר, רוסיה",
       "lat": 56.1289,
       "lon": 40.4075
      }
     ]
    },
    {
     "id": "UKRAINE-10132343-04",
     "title": "הערכה לגבי כוונות התקדמות רוסיות במחוז חרקוב",
     "summary": "דובר צבאי אוקראיני העריך כי כוחות רוסיים עשויים לפעול להרחבת אזור השליטה לאורך הגבול במחוז חרקוב.",
     "axis": "חזית חרקוב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T22:33:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T22:33:00+00:00",
     "last_update_at": "2026-10-13T22:33:00+00:00",
     "what_is_not_verified": "האם הכוחות הרוסיים אכן יפתחו במתקפה לעבר אנישצ'ינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173945-spox-trehubov-russian-forces-may-seek-to-expand-control-zone-along-kharkiv-region-border.html",
       "published_at": "2026-10-13T22:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אנישצ'ינה, אוקראינה",
       "lat": 50.2109,
       "lon": 37.5197
      },
      {
       "name": "וליקי בורלוק, אוקראינה",
       "lat": 50.0597,
       "lon": 37.3855
      }
     ]
    },
    {
     "id": "UKRAINE-10132343-05",
     "title": "מגעים דיפלומטיים סביב יוזמות להפסקת אש באנרגיה",
     "summary": "התנהלו דיונים בין ארצות הברית, אירופה ואוקראינה על מתווה לסיום הלחימה והפסקת פגיעות באנרגיה, לצד חילופי האשמות בנוגע להפרת ההבנות.",
     "axis": "מדיני ובינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T12:39:02+00:00",
     "last_update_at": "2026-10-13T22:31:55+00:00",
     "what_is_not_verified": "פרטי המתווה הסופיים וההסכמה הרוסית לתנאים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/14/the-washington-post-u-s-and-europe-are-developing-a-new-plan-to-end-the-russia-ukraine-war-offering-incentives-and-security-arrangements-in-exchange-for-a-ceasefire-along-the-current-front-line",
       "published_at": "2026-10-13T22:31:55+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057882/",
       "published_at": "2026-10-13T20:27:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4174112-zelensky-on-us-talks-ukraine-is-ready-to-meet-in-coming-days.html",
       "published_at": "2026-10-13T19:33:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/trump-refuses-to-accuse-russia-of-breaking-energy-ceasefire-says-ukraine-hit-sites-the-day-before/",
       "published_at": "2026-10-13T17:58:36+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057863/",
       "published_at": "2026-10-13T17:16:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1s7kisjzg",
       "published_at": "2026-10-13T12:39:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10132343-06",
     "title": "התקדמות בשיחות ההצטרפות של אוקראינה לאיחוד האירופי",
     "summary": "מועצת האיחוד האירופי פתחה שני אשכולות משא ומתן נוספים בהליך ההצטרפות של אוקראינה, בעקבות שינויי חקיקה בקייב.",
     "axis": "מדיני ובינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T16:41:18+00:00",
     "last_update_at": "2026-10-13T19:01:00+00:00",
     "what_is_not_verified": "עמידה מלאה בכל דרישות הרפורמה בעתיד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4174110-zelensky-announces-good-decisions-in-support-of-ukraine-expected-this-week.html",
       "published_at": "2026-10-13T19:01:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057865/",
       "published_at": "2026-10-13T17:32:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-advances-eu-membership-bid-with-4-of-6-integration-to-do-lists-unlocked/",
       "published_at": "2026-10-13T16:41:18+00:00"
      }
     ],
     "places": [
      {
       "name": "לוקסמבורג",
       "lat": 49.6113,
       "lon": 6.1298
      }
     ]
    },
    {
     "id": "UKRAINE-10132343-07",
     "title": "תקיפות באזור דונייצק וטענות על סיוע קוריאני ברוסיה",
     "summary": "גורמים רשמיים ברוסיה דיווחו על פגיעות בשטחי חבל דונייצק, וסגן שר ההגנה הרוסי ציין שיתוף פעולה עם צבא קוריאה באזור קורסק.",
     "axis": "דונבאס וקורסק",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T21:08:07+00:00",
     "last_update_at": "2026-10-13T23:19:29+00:00",
     "what_is_not_verified": "היקף הפעילות המדויק של הכוחות הקוריאניים במחוז קורסק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_e8f8e409e3548898",
       "url": "https://tass.com/defense/2201657",
       "published_at": "2026-10-13T23:19:29+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_e8f8e409e3548898",
       "url": "https://tass.com/defense/2201643",
       "published_at": "2026-10-13T21:08:07+00:00"
      }
     ],
     "places": [
      {
       "name": "קורסק, רוסיה",
       "lat": 51.727,
       "lon": 36.1922
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על הפסקה מוחלטת או המשך העברת המודיעין האמריקאי לקייב לפני שיגורי הטילים",
    "מידת ההשפעה של הפגיעות במרכזי יאנדקס על מבצעי השפעה ברשתות החברתיות",
    "היקף הפעילות הצבאית של חיילים מצפון קוריאה במחוז קורסק",
    "פרטי היוזמה האמריקאית-אירופית להסדר מדיני והקפאת קו המגע"
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
     "value": 1.1188,
     "unit": "USD",
     "change_pct": 0.06,
     "source_id": "src_ecb",
     "as_of": "2026-10-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונות המדינה ועצמאות העם האוקראיני",
      "קידום ההצטרפות לאיחוד האירופי ופתיחת אשכולות משא ומתן",
      "דרישה למיצוי הדין הבינלאומי עם רוסיה והשבת ילדים שנלקחו"
     ],
     "inferred": [
      "שימור רציפות הסיוע המודיעיני והביטחוני מצד המערב",
      "הפעלת לחץ כלכלי ותשתיתי על רוסיה באמצעות פגיעה במרכזי נתונים ומתקני אנרגיה"
     ],
     "forecast": [
      "המשך דרישה לערבויות ביטחוניות מערביות במקביל להתמודדות עם נזקי החורף באנרגיה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "קיום דיון במועצת הביטחון של האו\"ם בנושא הפרת זכויות אדם באוקראינה",
      "התנגדות להסכמים ללא מנגנוני פיקוח ברורים בטענה שקייב מפרה התחייבויות",
      "שחרור מחוז קורסק ושיקום התשתיות"
     ],
     "inferred": [
      "שחיקת מערך האנרגיה האוקראיני כדי להפעיל לחץ על מקבלי ההחלטות בקייב",
      "הרחבת מרחב השליטה לאורך הגבול באזור חרקוב למניעת איומים על שטחה"
     ],
     "forecast": [
      "המשך שימוש בירי טילים בליסטיים לעבר מרכזים אסטרטגיים במקביל למגעים עקיפים"
     ]
    },
    {
     "actor": "ארצות הברית ובעלות הברית המערביות",
     "declared": [
      "תמיכה ממושכת באוקראינה וחיזוק מעמדה המדיני",
      "קידום הפסקת אש בתחום האנרגיה",
      "המשך אספקת מידע מודיעיני על פי הצהרת הנשיא טראמפ"
     ],
     "inferred": [
      "ניסיון להביא את הצדדים לשולחן המשא ומתן באמצעות תמריצים כלכליים",
      "הימנעות מהסלמה רחבה תוך גיבוש מתווה להקפאת קו המגע"
     ],
     "forecast": [
      "הגברת המאמצים הדיפלומטיים לקידום מסגרת לסיום הלחימה תוך הצבת דרישות לערבויות הדדיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/13/allies-did-not-warn-kyiv-of-russian-ballistic-missile-strikes-says-zelenskyy",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-advances-eu-membership-bid-with-4-of-6-integration-to-do-lists-unlocked/",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1376930",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/14/the-washington-post-u-s-and-europe-are-developing-a-new-plan-to-end-the-russia-ukraine-war-offering-incentives-and-security-arrangements-in-exchange-for-a-ceasefire-along-the-current-front-line",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057865/",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2201643",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48513",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4174110-zelensky-announces-good-decisions-in-support-of-ukraine-expected-this-week.html",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1s7kisjzg",
     "accessed_at": "2026-10-13T23:43:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T09:54:34+00:00",
  "changes": {
   "UKRAINE-10132343-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "נפילת שברי כטב\"ם על בית מגורים בקייב",
    "score": 0.817
   },
   "UKRAINE-10132343-02": {
    "kind": "possible",
    "prev": "שיבוש פעילות שרתי יאנדקס בעקבות תקיפות כטב\"מים אוקראיניים",
    "score": 0.467
   },
   "UKRAINE-10132343-03": {
    "kind": "new"
   },
   "UKRAINE-10132343-04": {
    "kind": "new"
   },
   "UKRAINE-10132343-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת סביב יוזמת הפסקת האש במתקני אנרגיה ועסקת הדיזל",
    "score": 0.65
   },
   "UKRAINE-10132343-06": {
    "kind": "new"
   },
   "UKRAINE-10132343-07": {
    "kind": "possible",
    "prev": "תקיפות אוקראיניות על מתקנים צבאיים ולוגיסטיים בעומק רוסיה ובשטחים הכבושים",
    "score": 0.467
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-13T2346__north-202610132346.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-13T23:46:34+00:00",
   "window": {
    "from": "2026-10-12T23:46:34+00:00",
    "to": "2026-10-13T23:46:34+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610132346"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהתמודדות עם השלכות הלחימה, כאשר נפלי תחמושת ופצצות מצרר גובים קורבנות בקרב אזרחים בדרום לבנון ובצפון ישראל. מנגנוני הביטחון בלבנון פועלים לסיכול הברחות של מאות קילוגרמים של חומרי נפץ סמוך לגבול סוריה, בעוד חיזבאללה מנסה לחזק את השפעתו הפנימית באמצעות מענקי דיור למפונים. בזירה המדינית, סוריה וטורקיה דורשות מישראל לכבד את הסכם הפרדת הכוחות משנת 1974, על רקע התרעות מפני גורמי ג'יהאד בדרום סוריה וטענות סוריות על מעורבות ישראלית בא-סווידא.",
   "fronts": [
    {
     "name": "דרום לבנון וגבול ישראל",
     "status": "רגיעה יחסית המלווה בסיכוני נפלי תחמושת ופצצות מצרר הפוגעים באזרחים משני עברי הגבול"
    },
    {
     "name": "גבול לבנון-סוריה והפנים הלבנוני",
     "status": "מאמצי אכיפה של צבא לבנון לסיכול הברחות חומרי נפץ המיוחסים לחיזבאללה"
    },
    {
     "name": "דרום סוריה ורמת הגולן",
     "status": "מתיחות סביב פעילות צה\"ל, התרעות על איומי ג'יהאד עולמי והאשמות סוריות נגד ישראל"
    },
    {
     "name": "מרכז סוריה",
     "status": "המשך תקריות ירי ופגיעה באנשי אבטחה על ידי חמושים בלתי מזוהים במחוז חמאה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10132346-01",
     "title": "התפוצצות נפל פצצת מצרר ברכס רמים שבגליל",
     "summary": "נפל של פצצת מצרר מתקופת הלחימה עם חיזבאללה התפוצץ ברכס רמים וגרם למותו של נער ולפציעתם של עשרים וארבעה נוספים במהלך פעילות לימודית, מה שהוביל להשבתת טיולים באזור.",
     "axis": "גבול ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T04:46:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T04:46:32+00:00",
     "last_update_at": "2026-10-13T13:55:00+00:00",
     "what_is_not_verified": "זהות הגורם שאישר את יציאת התלמידים לאזור שנחשב מסוכן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962675/a-wars-leftovers-cluster-munitions-threaten-northern-israel/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962675",
       "published_at": "2026-10-13T13:55:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjm8rqojfx",
       "published_at": "2026-10-13T13:50:34+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957221",
       "published_at": "2026-10-13T04:46:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10132346-02",
     "title": "נפגעים מפיצוץ נפלי תחמושת ישראלית בדרום לבנון",
     "summary": "שני בני אדם נהרגו בפיצוץ תחמושת שלא התפוצצה בעת שעבדו במטעי זיתים בעיירות פרון ועין אבל בדרום לבנון, מה שהוביל את הרשויות המקומיות להזהיר תושבים מפני כניסה לשטחים חקלאיים.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T15:31:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T15:31:40+00:00",
     "last_update_at": "2026-10-13T15:31:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/unexploded-israeli-ordnance-threatens-lebanons-olive-harvest",
       "published_at": "2026-10-13T15:31:40+00:00"
      }
     ],
     "places": [
      {
       "name": "פרון, לבנון",
       "lat": 33.2968,
       "lon": 35.4265
      },
      {
       "name": "עין אבל, לבנון",
       "lat": 33.1075,
       "lon": 35.4015
      }
     ]
    },
    {
     "id": "NORTH-10132346-03",
     "title": "סיכול הברחות חומרי נפץ בלבנון ובגבול סוריה",
     "summary": "כוחות הביטחון בלבנון עצרו משלוחי חומרי נפץ מסוג סי ארבע ותי אן תי במחסום דהר אל-בידר ובאזור אל-קצר סמוך לגבול סוריה, אשר יועדו לפי החשד לחיזבאללה.",
     "axis": "לבנון וגבול סוריה-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T13:50:00+00:00",
     "last_update_at": "2026-10-13T14:52:11+00:00",
     "what_is_not_verified": "הטענה לפיה חומרי הנפץ יועדו להתנקשות בבכיר פוליטי לבנוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bj4zqisoze",
       "published_at": "2026-10-13T14:52:11+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962656/four-explosive-shipments-seized-in-lebanon-this-month-were-more-shipme/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962656",
       "published_at": "2026-10-13T13:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      },
      {
       "name": "אל-קצר, לבנון",
       "lat": 33.6423,
       "lon": 35.479
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10132346-04",
     "title": "הכרזת חיזבאללה על סיוע כספי למפונים ולנפגעי מלחמה",
     "summary": "הנהגת חיזבאללה הציגה תוכנית מענקים כספיים לתושבים שבתיהם נהרסו או שנאלצו להתפנות מבתיהם בביירות ובדרום לבנון, בגובה של עד ארבעה עשר אלף דולר למשק בית.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T14:02:00+00:00",
     "last_update_at": "2026-10-13T15:59:43+00:00",
     "what_is_not_verified": "מקורות המימון המדויקים של התוכנית והתקציב הכולל שלה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/hezbollah-announces-aid-displaced-lebanon-despite-pressures",
       "published_at": "2026-10-13T15:59:43+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962659/up-to-14000-in-housing-aid-hezbollah-outlines-payments-for-war-hit-fam/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962659",
       "published_at": "2026-10-13T14:02:00+00:00"
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
     "id": "NORTH-10132346-05",
     "title": "דיונים דיפלומטיים על מנגנון הפיקוח להסכם המשולש בלבנון",
     "summary": "שגריר לבנון בוושינגטון קיים פגישה במחלקת המדינה האמריקנית בנוגע למנגנון האימות של ההסכם המשולש, לקראת מפגש צבאי המתוכנן בפלורידה.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T14:02:06+00:00",
     "last_update_at": "2026-10-13T14:02:06+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/962712/lebanons-ambassador-to-washington-discusses-verification-mechanism-at/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962712",
       "published_at": "2026-10-13T14:02:06+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "NORTH-10132346-06",
     "title": "התקפת חמושים על כוחות אבטחה במזרח מחוז חמאה",
     "summary": "שלושה אנשי אבטחת דרכים סורים נהרגו במארב שביצעו חמושים אלמונים נגד סיור באזור הכפרי המזרחי של מחוז חמאה.",
     "axis": "מרכז סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T19:11:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T19:11:44+00:00",
     "last_update_at": "2026-10-13T19:11:44+00:00",
     "what_is_not_verified": "זהות התוקפים והארגון שאליו הם משתייכים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/3-road-security-personnel-killed-in-attack-in-central-syria/4087790",
       "published_at": "2026-10-13T19:11:44+00:00"
      }
     ],
     "places": [
      {
       "name": "חמאה, סוריה",
       "lat": 35.1343,
       "lon": 36.7496
      }
     ]
    },
    {
     "id": "NORTH-10132346-07",
     "title": "סוריה מאשימה את ישראל בליבוי אי-סדר בא-סווידא",
     "summary": "שר החוץ של סוריה האשים את ישראל במימון ובחימוש קבוצות חמושות במחוז א-סווידא כדי לזרוע כאוס, וקרא לחזרה להסכם הפרדת הכוחות משנת 1974.",
     "axis": "דרום סוריה וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T17:12:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T17:12:31+00:00",
     "last_update_at": "2026-10-13T17:12:31+00:00",
     "what_is_not_verified": "אמיתות הטענות בדבר תמיכה ישראלית צבאית או כספית במיליציות בא-סווידא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-accuses-israel-of-arming-funding-militias-in-suwayda-to-sow-chaos-/4087693",
       "published_at": "2026-10-13T17:12:31+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10132346-08",
     "title": "טורקיה קוראת באו\"ם להפסקת התקיפות הישראליות בסוריה",
     "summary": "נציג טורקיה באו\"ם דרש מישראל לעצור את הפעולות הצבאיות בסוריה ולציית באופן מלא להסכם הפרדת הכוחות מ-1974.",
     "axis": "טורקיה, סוריה וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T08:38:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:38:00+00:00",
     "last_update_at": "2026-10-13T08:38:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/diplomacy/turkiyes-un-envoy-calls-on-israel-to-stop-reckless-attacks-in-syria",
       "published_at": "2026-10-13T08:38:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10132346-09",
     "title": "התרעה מפני איומי ג'יהאד עולמי נגד צה\"ל בדרום סוריה",
     "summary": "ערוץ המזוהה עם ארגון אל-קאעדה פרסם סרטון הקורא להיערך לקרב נגד כוחות צה\"ל באזור קוניטרה ורמת הגולן, תוך שימוש בתמונות מפעילות צבאית באזור תל כרום.",
     "axis": "דרום סוריה וישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T11:53:39+00:00",
     "last_update_at": "2026-10-13T11:53:39+00:00",
     "what_is_not_verified": "מידת היכולת המבצעית הממשית של אותם גורמים להוציא פיגועים לפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/not-only-iran-hezbollah-and-palestinian-organizations-the-global-jihad-threat-to-idf-forces-and-israel-from-southern-syria-and-the-motivation-to-target-them/",
       "published_at": "2026-10-13T11:53:39+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה לפיה חומרי הנפץ שנתפסו בלבנון נועדו לביצוע התנקשות בבכיר פוליטי מקומי",
    "ההאשמה של שר החוץ הסורי כי ישראל מחמשת ומממנת מיליציות בא-סווידא",
    "זהות התוקפים שביצעו את המארב נגד אנשי אבטחת הדרכים באזור חמאה",
    "מקור המימון הכספי שממנו מחלק חיזבאללה את מענקי הדיור לנפגעי המלחמה"
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
     "value": 3.0751,
     "unit": "ILS",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "הענקת תמיכה כספית לתושבים שבתיהם נהרסו או שנאלצו לעזוב את מקום מגוריהם"
     ],
     "inferred": [
      "שיקום הלגיטימציה הציבורית בקרב האוכלוסייה הלבנונית והעברת אמצעי לחימה חרף מגבלות האכיפה"
     ],
     "forecast": [
      "המשך ניסיונות לייצב את המערך האזרחי במקביל לשימור יכולותיו מול לחצי הפיקוח של צבא לבנון"
     ]
    },
    {
     "actor": "המשטר הסורי",
     "declared": [
      "דרישה לנסיגה ישראלית מפעולותיה ולחזרה מלאה להסכם הפרדת הכוחות מ-1974"
     ],
     "inferred": [
      "בלימת השפעה ישראלית באזור הדרום והחזרת השליטה הביטחונית למחוזות המרוחקים"
     ],
     "forecast": [
      "המשך שימוש בלחץ דיפלומטי בינלאומי תוך התמודדות מתמשכת עם תקריות אלימות במרכז ובדרום המדינה"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "קריאה לישראל לחדול מהפרות ריבונות בסוריה ולציית להסכמי שביתת הנשק"
     ],
     "inferred": [
      "הגבלת חופש הפעולה הצבאי של ישראל במרחב הסורי והגנה על האינטרסים האזוריים של אנקרה"
     ],
     "forecast": [
      "המשך העלאת דרישות מדיניות בזירה הבינלאומית ובאו\"ם נגד תקיפות ישראליות בסוריה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על מרחב הגבול מפני איומים ונטרול שאריות לחימה המסכנות אזרחים"
     ],
     "inferred": [
      "סיכול התבססות של גורמי טרור בדרום סוריה ומניעת התחמשות מחודשת של חיזבאללה"
     ],
     "forecast": [
      "המשך פעילות הנדסית לאיסוף תחמושת בצפון לצד פיקוח הדוק ומבצעי מול ניסיונות התארגנות מעבר לגבול"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/not-only-iran-hezbollah-and-palestinian-organizations-the-global-jihad-threat-to-idf-forces-and-israel-from-southern-syria-and-the-motivation-to-target-them/",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-accuses-israel-of-arming-funding-militias-in-suwayda-to-sow-chaos-/4087693",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/diplomacy/turkiyes-un-envoy-calls-on-israel-to-stop-reckless-attacks-in-syria",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/962712/lebanons-ambassador-to-washington-discusses-verification-mechanism-at/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962712",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/hezbollah-announces-aid-displaced-lebanon-despite-pressures",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957221",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bj4zqisoze",
     "accessed_at": "2026-10-13T23:46:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-13T10:40:28+00:00",
  "changes": {
   "NORTH-10132346-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "פיצוץ נפל פצצת מצרר ברכס רמים",
    "score": 1.0
   },
   "NORTH-10132346-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות אוויריות של ישראל בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10132346-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "סיכול משלוח חומרי נפץ במחסום דהר אל-בידר בלבנון",
    "score": 1.0
   },
   "NORTH-10132346-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הכרזת חיזבאללה על סיוע כספי לשיקום דיור",
    "score": 0.65
   },
   "NORTH-10132346-05": {
    "kind": "new"
   },
   "NORTH-10132346-06": {
    "kind": "new"
   },
   "NORTH-10132346-07": {
    "kind": "new"
   },
   "NORTH-10132346-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "קריאת טורקיה באו\"ם להפסקת התקיפות הישראליות בסוריה",
    "score": 1.0
   },
   "NORTH-10132346-09": {
    "kind": "possible",
    "prev": "פשיטות ומעצרים של כוחות ישראליים בדרום סוריה",
    "score": 0.467
   }
  }
 }
};
