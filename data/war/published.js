/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-15T2343__yemen-202610152343.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-15T23:43:15+00:00",
   "window": {
    "from": "2026-10-14T23:43:15+00:00",
    "to": "2026-10-15T23:43:15+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610152343"
   },
   "summary": "הלחימה בתימן החריפה עם התקדמות קרקעית של כוחות החות'ים לאורך חוף הים האדום והידוק המצור סביב תעז, לצד מתקפת טילים וכטב\"מים ישירה על סמלי השלטון ומרכזי הפיקוד בעדן. במקביל, העימות בין החות'ים לסעודיה עלה מדרגה בעקבות פגיעות בתשתיות אנרגיה ובנמלי תעופה בממלכה, שהובילו להשבתת תנועה אווירית, דחיית אירועים בינלאומיים והאשמות חריפות מצד ריאד על מעורבות ישירה של איראן. התקפות הנגד והסיוע האווירי של הקואליציה הסעודית לא הצליחו לבלום את ההישגים החות'יים בשטח, בעוד בישראל נרשמת דריכות גוברת לאפשרות של התרחבות השיגורים.",
   "fronts": [
    {
     "name": "חזית עדן ודרום תימן",
     "status": "מתקפות טילים וכטב\"מים נגד מתחם השלטון והקואליציה בארמון אל-מעאשיק"
    },
    {
     "name": "חזית תעז",
     "status": "קרבות עזים במספר צירים, התקדמות חות'ית ומצור מחמיר על העיר"
    },
    {
     "name": "חזית חוף הים האדום",
     "status": "שליטה חות'ית ברצועות שטח נרחבות וכישלון מתקפת נגד ממשלתית"
    },
    {
     "name": "חזית מאריב",
     "status": "ירי אינטנסיבי של טילים בליסטיים לעבר שכונות מגורים"
    },
    {
     "name": "חזית עומק סעודיה",
     "status": "תקיפות חות'יות נמשכות נגד נמלי תעופה ומתקני נפט, לצד פעולות יירוט סעודיות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10152343-01",
     "title": "מתקפת טילים וכטב\"מים חות'ית על ארמון הנשיאות אל-מעאשיק בעדן",
     "summary": "החות'ים תקפו באמצעות טילים בליסטיים וכטב\"מים את מתחם ארמון הנשיאות בעדן, שבו שוכנים מפקדות ממשלת תימן ומפקדת כוחות הקואליציה בראשות סעודיה. ראש ממשלת תימן ושריו לא נפגעו, אך נמסר על הרוגים ופצועים, בהם אנשי אבטחה וחיילים.",
     "axis": "תימן פנים / עדן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T14:33:16+00:00",
     "last_update_at": "2026-10-15T23:38:46+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומספר הטילים ששוגרו שנויים במחלוקת בדיווחים השונים (בין שניים לחמישה הרוגים, ובין חמישה לשמונה טילים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cm62y6lp73zdo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-15T23:38:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-launch-deadly-attack-yemen-presidential-palace",
       "published_at": "2026-10-15T20:51:32+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/15/houthi-missiles-strike-aden-yemen",
       "published_at": "2026-10-15T20:00:36+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261015-houthi-attack-on-palace-used-by-yemen-government-in-aden-kills-five",
       "published_at": "2026-10-15T19:57:48+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-command-centre-aden-hit-alleged-houthi-attack",
       "published_at": "2026-10-15T18:44:23+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthis-launch-deadly-attack-presidential-palace-yemens-aden",
       "published_at": "2026-10-15T18:30:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjqi19rsgg",
       "published_at": "2026-10-15T17:51:57+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthis-strike-yemeni-governments-presidential-palace-aden-what-know",
       "published_at": "2026-10-15T16:59:09+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/15/houthis-target-yemens-presidential-palace-in-aden-with-missiles?traffic_source=rss",
       "published_at": "2026-10-15T16:50:42+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94665",
       "published_at": "2026-10-15T15:26:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-says-pm-cabinet-safe-after-houthi-aden-attack",
       "published_at": "2026-10-15T15:13:25+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131966",
       "published_at": "2026-10-15T14:44:23+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48579",
       "published_at": "2026-10-15T14:33:16+00:00"
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
     "id": "YEMEN-10152343-02",
     "title": "טענת יירוט טיל באזור אל-מדינה והכחשה חות'ית",
     "summary": "הקואליציה בראשות סעודיה הודיעה כי יירטה טיל שכוון לעבר מרחב העיר אל-מדינה, בעוד שהחות'ים הכחישו מכל וכל כי ביצעו שיגור לעבר המקום.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T10:24:35+00:00",
     "last_update_at": "2026-10-15T15:13:25+00:00",
     "what_is_not_verified": "עצם שיגור הטיל לעבר אל-מדינה שנוי במחלוקת עקב הכחשת החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-says-pm-cabinet-safe-after-houthi-aden-attack",
       "published_at": "2026-10-15T15:13:25+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48571",
       "published_at": "2026-10-15T11:44:45+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261015-houthis-deny-targeting-holy-city-medina-after-saudi-arabia-says-intercepted-missile",
       "published_at": "2026-10-15T10:24:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "YEMEN-10152343-03",
     "title": "יירוט כטב\"ם חות'י בדרום סעודיה",
     "summary": "כוחות הקואליציה הודיעו על יירוט והשמדה של כלי טיס בלתי מאויש ששיגרו החות'ים לעבר האזור הדרומי של סעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T17:02:01+00:00",
     "last_update_at": "2026-10-15T17:02:01+00:00",
     "what_is_not_verified": "מיקום היירוט המדויק ומטרת הכטב\"ם לא פורטו מעבר להגדרה 'האזור הדרומי'.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ef4e8aeba8537bd3",
       "url": "https://www.sabanew.net/viewstory/154075",
       "published_at": "2026-10-15T17:02:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10152343-04",
     "title": "ירי 16 טילים בליסטיים לעבר שכונות מגורים במאריב",
     "summary": "החות'ים שיגרו 16 טילים בליסטיים לצד פגזים נוספים לעבר שכונות אזרחיות בעיר מאריב שבתימן.",
     "axis": "מאריב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T16:57:21+00:00",
     "last_update_at": "2026-10-15T16:57:21+00:00",
     "what_is_not_verified": "מידת הנזק ומספר הנפגעים במאריב לא צוינו במקור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_2e7a7e24a7034b88",
       "url": "https://www.sabanew.net/viewstory/154074",
       "published_at": "2026-10-15T16:57:21+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    },
    {
     "id": "YEMEN-10152343-05",
     "title": "טענת החות'ים על פגיעה במטוס קרב סעודי מסוג טייפון",
     "summary": "החות'ים טענו כי פגעו או הפילו מטוס קרב סעודי מסוג טייפון באמצעות טיל של מערך ההגנה האווירית שלהם.",
     "axis": "עימות חות'י - סעודי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-14T22:54:25+00:00",
     "last_update_at": "2026-10-15T14:15:25+00:00",
     "what_is_not_verified": "אין אימות עצמאי או אישור סעודי לפגיעה או להפלת המטוס.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131961",
       "published_at": "2026-10-15T14:15:25+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48565",
       "published_at": "2026-10-14T22:54:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10152343-06",
     "title": "החרפת המצור והקרבות סביב העיר תעז",
     "summary": "לחימה עזה מתחוללת בחזיתות שונות במרחב תעז לצד התקדמות חות'ית, דבר שמוביל למחסור חמור במזון, זינוק במחירי הדלק ומצוקה הומניטרית כבדה לתושבים הנצורים.",
     "axis": "תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T10:18:58+00:00",
     "last_update_at": "2026-10-15T15:13:25+00:00",
     "what_is_not_verified": "היקף האבדות המדויק בנפש בקרבות בתעז לא נמסר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-says-pm-cabinet-safe-after-houthi-aden-attack",
       "published_at": "2026-10-15T15:13:25+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/15/yemen-stockpile-supplies-houthis-advance-taiz",
       "published_at": "2026-10-15T10:18:58+00:00"
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
     "id": "YEMEN-10152343-07",
     "title": "דחיית ועידת פסגה ואירועים בינלאומיים בסעודיה עקב תקיפות נמלי התעופה",
     "summary": "האיחוד האירופי ומדינות המפרץ דחו פסגה משותפת שתוכננה בריאד, וכן נדחו אירועי ספורט גדולים בסעודיה, בעקבות המשך מתקפות החות'ים על נמלי תעופה ותשתיות בממלכה והשבתת נמל התעופה בריאד.",
     "axis": "סעודיה - בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T15:50:15+00:00",
     "last_update_at": "2026-10-15T20:31:42+00:00",
     "what_is_not_verified": "המועד החלופי לקיום הפסגה טרם נקבע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-arabia-postpones-major-sporting-events-amid-houthi-attacks",
       "published_at": "2026-10-15T20:31:42+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/eu-gulf-summit-saudi-arabia-postponed-after-houthi-attacks",
       "published_at": "2026-10-15T15:50:15+00:00"
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
     "id": "YEMEN-10152343-08",
     "title": "פרסום תיעוד פגיעת הטיל החות'י בנמל התעופה בריאד",
     "summary": "גורמים סעודיים פרסמו סרטון ממצלמות אבטחה המתעד את פגיעת הטיל מ-10 באוקטובר בנמל התעופה הבינלאומי, שהובילה למותם של אזרחים ולפציעת מאות, במטרה לגייס תמיכה בינלאומית.",
     "axis": "סעודיה - תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T14:23:39+00:00",
     "last_update_at": "2026-10-15T16:46:30+00:00",
     "what_is_not_verified": "במקורות שונים נרשם מספר הרוגים של 12 או 13 בני אדם באירוע זה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/analysis-how-are-yemens-houthis-attacking-saudi-arabia-so-effectively",
       "published_at": "2026-10-15T16:46:30+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/eu-gulf-summit-saudi-arabia-postponed-after-houthi-attacks",
       "published_at": "2026-10-15T15:50:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131962",
       "published_at": "2026-10-15T14:23:39+00:00"
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
     "id": "YEMEN-10152343-09",
     "title": "האשמות סעודיה כלפי איראן בהכוונת ההסלמה",
     "summary": "סגן שר החוץ הסעודי האשים את טהראן באימון, חימוש ועידוד החות'ים להסלים את המתקפות, וציין כי החות'ים סירבו להיפגש בעומאן לשיחות רגיעה.",
     "axis": "סעודיה - איראן - חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T17:43:46+00:00",
     "last_update_at": "2026-10-15T20:51:32+00:00",
     "what_is_not_verified": "אין תגובה איראנית ישירה להאשמות הסעודיות בטקסט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bf9ce16a142c874e",
       "url": "https://www.newarab.com/news/houthis-launch-deadly-attack-yemen-presidential-palace",
       "published_at": "2026-10-15T20:51:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bf9ce16a142c874e",
       "url": "https://www.newarab.com/news/saudi-arabia-accuses-iran-encouraging-houthis-latest-escalation",
       "published_at": "2026-10-15T17:43:46+00:00"
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
     "id": "YEMEN-10152343-10",
     "title": "העלאת כוננות בישראל לאפשרות תקיפה מצד החות'ים ובעלי בריתם",
     "summary": "מערכת הביטחון בישראל העלתה את רמת הכוננות לקראת הבחירות מחשש להסלמה או מתקפת פתע מצד איראן, חיזבאללה והחות'ים.",
     "axis": "ישראל - חות'ים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T16:37:32+00:00",
     "last_update_at": "2026-10-15T16:37:32+00:00",
     "what_is_not_verified": "לא מצוין מועד מדויק או מתווה קונקרטי של מתקפה מתוכננת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hjbecvrjgl",
       "published_at": "2026-10-15T16:37:32+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בארמון אל-מעאשיק בעדן (דיווחים שנעים בין 2 ל-5 הרוגים ובין 6 ל-16 פצועים)",
    "מספר הטילים שפגעו בארמון אל-מעאשיק (טענה ל-5 טילים לעומת טענה ל-8 טילים)",
    "טענת סעודיה על שיגור טיל חות'י לעבר מרחב אל-מדינה, שהוכחשה בידי החות'ים",
    "טענת החות'ים על פגיעה או הפלת מטוס קרב סעודי מסוג טייפון",
    "היקף הנזק המדויק במטה חברת ארמקו בדהראן עקב פער בין דיווח על שרפה מוגבלת לדיווח על נזק נרחב"
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
     "value": 3.1022,
     "unit": "ILS",
     "change_pct": 0.83,
     "source_id": "src_ecb",
     "as_of": "2026-10-15T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה במפקדות מבצעים וקצינים סעודים במתחם השלטון בעדן",
      "פגיעה במטרות ותשתיות בסעודיה כולל נמלי תעופה ומתקני אנרגיה"
     ],
     "inferred": [
      "מיטוט הלגיטימיות של הממשלה המוכרת בעדן וערעור המשילות שלה",
      "הפעלת לחץ כלכלי וביטחוני כבד על סעודיה כדי לאלץ אותה לסגת מהלחימה בתימן",
      "הרחבת השליטה הטריטוריאלית בתימן בחסות העימות האזורי הרחב"
     ],
     "forecast": [
      "המשך ניסיונות הפגיעה בבכירי ממשל ובמתקנים רגישים בעדן",
      "החרפת שיגורי הטילים והכטב\"מים לעבר יעדים אסטרטגיים בעומק סעודיה"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה עצמית ופירוק היכולות ההתקפיות של המיליציה החות'ית",
      "הפסקת הפגיעה בתשתיות אזרחיות ובנמלי תעופה בהתאם לחוק הבינלאומי"
     ],
     "inferred": [
      "מניעת קריסת ממשלת תימן הרשמית וייצוב קווי ההגנה",
      "הפעלת לחץ דיפלומטי בינלאומי על איראן כדי שתגביל את פעולות החות'ים",
      "הגנה על תדמית הממלכה כיעד בטוח להשקעות ותיירות בינלאומית"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ממוקדות בתימן להשמדת מאגרי שיגור",
      "הגברת מאמצי הלובי הבינלאומי להטלת סנקציות נוספות על טהראן"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "הגנה על הבירה הזמנית עדן והמשך פעילות מוסדות השלטון",
      "התנגדות לטרור החות'י נגד אזרחים בערים כמו תעז ומאריב"
     ],
     "inferred": [
      "שימור שרידותה הפוליטית והפיזית של ההנהגה מול לחץ צבאי כבד",
      "הישענות מלאה על סיוע והגנה צבאית מצד סעודיה"
     ],
     "forecast": [
      "נסיגה או צמצום פעילות ציבורית בעדן בעקבות הפרצות הביטחוניות",
      "המשך אובדן שטחים בחזיתות היבשתיות במידה שלא יחול שינוי בסיוע הקרקעי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/15/houthis-target-yemens-presidential-palace-in-aden-with-missiles?traffic_source=rss",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/analysis-how-are-yemens-houthis-attacking-saudi-arabia-so-effectively",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cm62y6lp73zdo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/saudi-arabia-postpones-major-sporting-events-amid-houthi-attacks",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/15/yemen-stockpile-supplies-houthis-advance-taiz",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-command-centre-aden-hit-alleged-houthi-attack",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-accuses-iran-encouraging-houthis-latest-escalation",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154074",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131962",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48565",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94665",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hjbecvrjgl",
     "accessed_at": "2026-10-15T23:43:15+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T05:07:59+00:00",
  "changes": {
   "YEMEN-10152343-01": {
    "kind": "new"
   },
   "YEMEN-10152343-02": {
    "kind": "new"
   },
   "YEMEN-10152343-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "יירוט כטב\"ם מעל המחוז המזרחי בסעודיה",
    "score": 0.65
   },
   "YEMEN-10152343-04": {
    "kind": "new"
   },
   "YEMEN-10152343-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "טענת החות'ים על פגיעה במטוס סעודי",
    "score": 1.0
   },
   "YEMEN-10152343-06": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "קריאת האיחוד האירופי להסרת המצור מעל תעז",
    "score": 0.817
   },
   "YEMEN-10152343-07": {
    "kind": "new"
   },
   "YEMEN-10152343-08": {
    "kind": "new"
   },
   "YEMEN-10152343-09": {
    "kind": "possible",
    "prev": "הנחיות חירום לשגרירות ארצות הברית בסעודיה",
    "score": 0.633
   },
   "YEMEN-10152343-10": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-15T2340__iran-202610152340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-15T23:40:28+00:00",
   "window": {
    "from": "2026-10-14T23:40:28+00:00",
    "to": "2026-10-15T23:40:28+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610152340"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין בהסלמה הדדית בנתיבי השיט של מצר הורמוז ובלוחמה כלכלית באמצעות סנקציות מוגברות של משרד האוצר האמריקאי. מנגד, ישראל וארה\"ב מקדמות היערכות מבצעית ואיומי תקיפה תוך כוננות מוגברת, בעוד איראן ושלוחותיה משמרות לחץ צבאי ופעולות תגמול במפרץ.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "חיכוך ימי מתמשך, מיקוש, פגיעה באוניות מסחר והצהרות שליטה סותרות"
    },
    {
     "name": "זירת הסנקציות והכלכלה",
     "status": "הידוק הגבלות מצד ארה\"ב על רשתות מימון וצדקה איראניות"
    },
    {
     "name": "החזית הישראלית-איראנית",
     "status": "כוננות שיא, חשש מחישוב מוטעה ואיסוף מודיעין טכנולוגי נגד כטב\"מים"
    },
    {
     "name": "חזית המפרץ והחות'ים",
     "status": "המשך ירי ותקיפות תשתית תוך האשמת איראן בהכוונת הפעילות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10152340-01",
     "title": "הטלת סנקציות כלכליות אמריקאיות על רשתות מימון איראניות",
     "summary": "משרד האוצר האמריקאי הודיע על סנקציות נגד שישה-עשר אישים ועשרה גופים פיננסיים הקשורים לאיראן בעיראק, איראן והונג קונג, תוך התמקדות בשימוש ברשתות צדקה דתיות.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T17:46:27+00:00",
     "last_update_at": "2026-10-15T21:31:24+00:00",
     "what_is_not_verified": "מידת הפגיעה המעשית ברשתות הכספים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_ef9cbff7065045e4",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/sanctions-continue-until-irans-coffers-empty-says-us-treasury",
       "published_at": "2026-10-15T21:31:24+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_ef9cbff7065045e4",
       "url": "https://www.iranintl.com/en/202610157665",
       "published_at": "2026-10-15T21:20:16+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_ef9cbff7065045e4",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21637409",
       "published_at": "2026-10-15T19:01:18+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_ef9cbff7065045e4",
       "url": "https://www.al-monitor.com/originals/2026/10/us-issues-fresh-iran-related-sanctions-treasury-website-shows",
       "published_at": "2026-10-15T17:46:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10152340-02",
     "title": "עימות גרסאות וחיכוך ימי מתמשך במצר הורמוז",
     "summary": "פיקוד המרכז של צבא ארה\"ב דחה טענות שליטה איראניות במצר הורמוז, בעוד מפקד צבא איראן טען לשליטה ופיקוח מלאים, במקביל לפגיעות בספינות מסחר וחילופי האשמות.",
     "axis": "ארה\"ב-איראן (מפרץ)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T13:50:26+00:00",
     "last_update_at": "2026-10-15T20:57:49+00:00",
     "what_is_not_verified": "האם ספינת המכולות נפגעה ממוקש או מטיל, ומי מחזיק בשליטה בפועל בנתיב הימי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-centcom-iranian-army-issue-contesting-claims-over-control-strait",
       "published_at": "2026-10-15T20:57:49+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjqi19rsgg",
       "published_at": "2026-10-15T17:51:57+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/2-vessels-struck-in-the-strait-of-hormuz-as-u-s-weighs-mother-of-all-bombs-against-iran/",
       "published_at": "2026-10-15T14:58:46+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/washingtons-counter-mine-wakeup-call/",
       "published_at": "2026-10-15T13:50:26+00:00"
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
     "id": "IRAN-10152340-03",
     "title": "היערכות אמריקאית לשימוש בחימוש כבד נגד אתרים באיראן",
     "summary": "הבית הלבן והפנטגון הכינו תוכניות מבצעיות לפגיעה באתרים צבאיים, גרעין ותשתיות באיראן באמצעות חימוש כבד, תוך העברת מסרי הרתעה.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T05:18:01+00:00",
     "last_update_at": "2026-10-15T20:37:43+00:00",
     "what_is_not_verified": "ההיתכנות המבצעית לפגיעה באתרים תת-קרקעיים ועיתוי הפעולה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_cbs_news",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/white-house-prepares-plans-use-weapon-dubbed-mother-all-bombs-iran",
       "published_at": "2026-10-15T20:37:43+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_cbs_news",
       "url": "https://www.walla.co.il/news/military/383957555",
       "published_at": "2026-10-15T16:55:14+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_cbs_news",
       "url": "https://t.me/lelotsenzura/94663",
       "published_at": "2026-10-15T11:44:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_cbs_news",
       "url": "https://t.me/abualiexpress/131933",
       "published_at": "2026-10-15T05:18:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10152340-04",
     "title": "העלאת דריכות בישראל מחשש לתגובה איראנית וטעויות בחישוב",
     "summary": "צה\"ל העלה כוננות מחשש להסלמה רחבה מול איראן ושלוחותיה לפני מועדי הבחירות, על רקע הצבת כוחות אמריקאיים באזור וחשש מפרשנות מוטעית של צעדי המגננה.",
     "axis": "ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T15:17:09+00:00",
     "last_update_at": "2026-10-15T21:00:00+00:00",
     "what_is_not_verified": "כוונות התקיפה המיידיות של ישראל או איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/yokra14927532",
       "published_at": "2026-10-15T21:00:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sk1xh50ize",
       "published_at": "2026-10-15T20:25:46+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hjbecvrjgl",
       "published_at": "2026-10-15T16:37:32+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21635840",
       "published_at": "2026-10-15T15:17:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10152340-05",
     "title": "הצהרת משמרות המהפכה על מוכנות צבאית והצגת חולשה אמריקאית",
     "summary": "סגן מפקד משמרות המהפכה טען כי כוחות איראן ערוכים בכלל הזירות והקים מערך הגנה חזק, בעוד עמדת ארה\"ב מעורערת.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T22:55:51+00:00",
     "last_update_at": "2026-10-15T22:55:51+00:00",
     "what_is_not_verified": "היקף ומוכנות מערך ההגנה האיראני בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-forces-ready-while-us-shaky-position",
       "published_at": "2026-10-15T22:55:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10152340-06",
     "title": "חשיפת נזקי תקיפות איראניות ופעולות שלוחותיה במדינות המפרץ",
     "summary": "נחשף כי מדינות המפרץ המעיטו בתיאור הנזק שנגרם לתשתיות נפט ואנרגיה כתוצאה מתקיפות ישירות של איראן ושלוחותיה בתגובה למהלכים צבאיים קודמים.",
     "axis": "איראן-מדינות המפרץ",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T20:33:41+00:00",
     "last_update_at": "2026-10-15T20:33:41+00:00",
     "what_is_not_verified": "היקף ההרס המדויק באתרי האנרגיה השונים במפרץ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/gulf-states-have-downplayed-damage-caused-iranian-strikes-report",
       "published_at": "2026-10-15T20:33:41+00:00"
      }
     ],
     "places": [
      {
       "name": "דהראן, ערב הסעודית",
       "lat": 26.2967,
       "lon": 50.1202
      },
      {
       "name": "פוג'יירה, איחוד האמירויות",
       "lat": 25.1245,
       "lon": 56.3355
      }
     ]
    },
    {
     "id": "IRAN-10152340-07",
     "title": "העברת רק\"ם איראני לעבר גבול עיראק",
     "summary": "צבא איראן העביר טנקים וכוחות שריון לעבר אזור הגבול עם עיראק בדרום-מערב המדינה.",
     "axis": "איראן-עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T18:48:42+00:00",
     "last_update_at": "2026-10-15T18:48:42+00:00",
     "what_is_not_verified": "מטרת העברת הכוחות והיקפם המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94671",
       "published_at": "2026-10-15T18:48:42+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10152340-08",
     "title": "התנערות חות'ית משיגור טיל לעבר אזור אל-מדינה והאשמת טהראן בהסלמה",
     "summary": "החות'ים הכחישו תקיפה לעבר ערב הסעודית לאחר שריאד הודיעה על יירוט טיל שכוון לעבר אל-מדינה והאשימה את איראן בליבוי העימות.",
     "axis": "איראן-שלוחות-המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T10:24:35+00:00",
     "last_update_at": "2026-10-15T10:24:35+00:00",
     "what_is_not_verified": "האם אכן שוגר טיל לעבר אזור אל-מדינה ומי שיגר אותו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261015-houthis-deny-targeting-holy-city-medina-after-saudi-arabia-says-intercepted-missile",
       "published_at": "2026-10-15T10:24:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מדינה, ערב הסעודית",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "IRAN-10152340-09",
     "title": "מחקר ביטחוני בישראל של אמצעי לחימה וכטב\"מים על בסיס ידע איראני",
     "summary": "ישראל קיבלה אמצעי לחימה שנלקחו מאוקראינה לצורך חקר טכנולוגיות וכטב\"מים המבוססים על ידע צבאי איראני, כדי להתמודד עם איומים אוויריים.",
     "axis": "ישראל-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T20:17:17+00:00",
     "last_update_at": "2026-10-15T20:17:17+00:00",
     "what_is_not_verified": "סוגי מערכות הנשק המדויקות שהועברו לבדיקה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48589",
       "published_at": "2026-10-15T20:17:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10152340-10",
     "title": "דרישה איראנית להדחת ישראל מארגון אזורי ומחאה דיפלומטית",
     "summary": "סגן שר החוץ האיראני קרא להרחיק את ישראל ממנגנון סיק\"א באשמת ערעור הביטחון באסיה, ומשלחות פרו-איראניות נטשו נאום נשיאותי ישראלי בבאקו.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T10:40:05+00:00",
     "last_update_at": "2026-10-15T16:29:30+00:00",
     "what_is_not_verified": "ההשפעה של צעדי המחאה על פעילות הארגון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_edc6a736c2939188",
       "url": "https://en.irna.ir/news/86293728/Iran-calls-for-Israeli-regime-s-expulsion-from-CICA",
       "published_at": "2026-10-15T16:29:30+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_edc6a736c2939188",
       "url": "https://t.me/abualiexpress/131951",
       "published_at": "2026-10-15T10:40:05+00:00"
      }
     ],
     "places": [
      {
       "name": "באקו, אזרבייג'ן",
       "lat": 40.3756,
       "lon": 49.8328
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה האיראנית שספינת המכולות נפגעה ממוקש ימי לעומת טענות גורמי תעשייה שנפגעה מטיל",
    "טענת איראן כי אף כלי שיט עוין לא נכנס למרחב מצר הורמוז ועומאן",
    "טענות על הריגת מאות חיילים אמריקאים בירדן שהוכחשו על ידי צבא ארה\"ב",
    "היקף הנזק הממשי שנגרם למתקני חברת ארמקו בדהראן",
    "שיגור הטיל החות'י שנטען כי יורט בסמוך לאל-מדינה והוכחש על ידם"
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
     "value": 3.1022,
     "unit": "ILS",
     "change_pct": 0.83,
     "source_id": "src_ecb",
     "as_of": "2026-10-15T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "המשך אכיפת סנקציות עד לריקון קופת המשטר האיראני",
      "הבטחת חופש השיט המסחרי במצר הורמוז יחד עם שותפות אזוריות"
     ],
     "inferred": [
      "הפעלת הרתעה והימנעות מעימות צבאי רחב או פגיעה במחירי הדלק לפני הבחירות",
      "שימוש במצור כלכלי ככלי העיקרי לערעור יציבות המשטר האיראני"
     ],
     "forecast": [
      "המשך פעילות סיכול והחרמת כספים לצד פריסת כוחות הרתעה ימיים ללא תקיפה ישירה מיידית"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "קיום מערך הגנה ערוך בכלל הגזרות לעימות עם כל איום",
      "שליטה מלאה ופיקוח במרחב הימי של מצר הורמוז ומפרץ עומאן"
     ],
     "inferred": [
      "העלאת מחירי הדלק והפעלת לחץ כלכלי-ביטחוני גלובלי באמצעות שיבוש השיט",
      "הרחבת הלחץ על בעלות בריתה של ארה\"ב במפרץ באמצעות שלוחות אזוריות"
     ],
     "forecast": [
      "המשך פעולות הטרדה ימיות אסימטריות והפעלת שלוחות תוך הימנעות ממלחמה כוללת"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "חקר ופיתוח מענה הגנתי טכנולוגי נגד איומי כטב\"מים וטכנולוגיות מתקדמות"
     ],
     "inferred": [
      "שמירה על מוכנות גבוהה מחשש לפעולת פתע או חישוב מוטעה של איראן ושלוחותיה",
      "העדפת הימנעות מיוזמה התקפית רחבה בעיתוי הנוכחי ללא יעד מוגדר ומכריע"
     ],
     "forecast": [
      "המשך שימור הדריכות המבצעית והתיאום המודיעיני והצבאי עם הכוחות האמריקאיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-issues-fresh-iran-related-sanctions-treasury-website-shows",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/washingtons-counter-mine-wakeup-call/",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261015-houthis-deny-targeting-holy-city-medina-after-saudi-arabia-says-intercepted-missile",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610157665",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86293728/Iran-calls-for-Israeli-regime-s-expulsion-from-CICA",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21635840",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/gulf-states-have-downplayed-damage-caused-iranian-strikes-report",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131951",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48589",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94671",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957555",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hjbecvrjgl",
     "accessed_at": "2026-10-15T23:40:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T05:05:44+00:00",
  "changes": {
   "IRAN-10152340-01": {
    "kind": "new"
   },
   "IRAN-10152340-02": {
    "kind": "possible",
    "prev": "פגיעה והטבעת ספינות סוחר במרחב מצר הורמוז",
    "score": 0.467
   },
   "IRAN-10152340-03": {
    "kind": "possible",
    "prev": "תוכניות תקיפה אמריקאיות הכוללות שימוש בפצצה כבדה נגד אתרי גרעין ואנרגיה באיראן",
    "score": 0.467
   },
   "IRAN-10152340-04": {
    "kind": "new"
   },
   "IRAN-10152340-05": {
    "kind": "new"
   },
   "IRAN-10152340-06": {
    "kind": "new"
   },
   "IRAN-10152340-07": {
    "kind": "new"
   },
   "IRAN-10152340-08": {
    "kind": "new"
   },
   "IRAN-10152340-09": {
    "kind": "new"
   },
   "IRAN-10152340-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-15T2342__ukraine-202610152342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-15T23:42:04+00:00",
   "window": {
    "from": "2026-10-14T23:42:04+00:00",
    "to": "2026-10-15T23:42:04+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610152342"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה מתאפיינת בהסלמה הדדית חריפה של מהלומות עומק נגד יעדי אנרגיה, תשתיות לאומיות ומרכזי נתונים. ניסיון התיווך להפסקת אש אנרגטית קרס לחלוטין, כאשר רוסיה מפעילה גלי תקיפה של כטב\"מים וטילים בליסטיים על ערים אוקראיניות, ומנגד אוקראינה מחדשת את הפגיעה בבתי זיקוק ובמתקני טכנולוגיה בתוך שטח רוסיה. במקביל, קייב מתמודדת עם הידלדלות חמורה של מלאי טילי היירוט ומפעילה לחץ דיפלומטי על בעלות בריתה המערביות לאספקת מערכות הגנה אווירית וטילי שיוט.",
   "fronts": [
    {
     "name": "חזית העורף והתשתיות האוקראיניות",
     "status": "מתקפות רוסיות אינטנסיביות של טילים וכטב\"מים גורמות להרס תחנות כוח ופגיעה באספקת חשמל ומים בקייב, בחרקוב ובאודסה."
    },
    {
     "name": "חזית עומק שטח רוסיה",
     "status": "אוקראינה מבצעת פגיעות חוזרות באמצעות רחפנים וטילים נגד בתי זיקוק לנפט, מרכזי נתונים ומחשבי-על בריאזאן, בקלוגה, בוולדימיר ובמחוז מוסקבה."
    },
    {
     "name": "זירת הים השחור",
     "status": "שימוש בכשב\"מים אוקראיניים נגד כלי שיט צבאיים ופגיעות כטב\"מים במכליות נפט מסחריות בקרבת חופי רומניה ובולגריה."
    },
    {
     "name": "זירת הקרב הטקטית ומלחמת הרחפנים",
     "status": "שימוש אינטנסיבי ברחפני נפץ מהירים ורחפני הטלה לאורך קווי המגע, המלווה בפגיעות הדדיות בצוותי המפעילים ובמצוקת כוח אדם."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10152342-01",
     "title": "מתקפת כלי טיס בלתי מאוישים על מחוז מוסקבה",
     "summary": "כלי טיס בלתי מאוישים ששוגרו מאוקראינה תקפו יעדים באזור מחוז מוסקבה שברוסיה.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T23:02:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T23:02:46+00:00",
     "last_update_at": "2026-10-15T23:02:46+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בתקיפה במחוז מוסקבה אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48593",
       "published_at": "2026-10-15T23:02:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10152342-02",
     "title": "מתקפות כטב\"מים רוסיים ופגיעה באספקת החשמל והמים בקייב",
     "summary": "מתקפות כלי טיס בלתי מאוישים שביצעה רוסיה פגעו במתקני אנרגיה במחוז קייב, גרמו לניתוקי חשמל באזורים בעיר ולירידת לחץ המים בגדה הימנית של נהר הדנייפרו.",
     "axis": "חזית האנרגיה / העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T20:23:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T20:23:14+00:00",
     "last_update_at": "2026-10-15T20:23:14+00:00",
     "what_is_not_verified": "משך הזמן שיידרש לתיקון הפגיעה באספקת המים והחשמל אינו ידוע במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_8849550f103a5e4b",
       "url": "https://kyivindependent.com/russian-drone-strikes-leave-portions-of-kyiv-without-power-fires-burning/",
       "published_at": "2026-10-15T20:23:14+00:00"
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
     "id": "UKRAINE-10152342-03",
     "title": "קריסת הפסקת האש בתחום האנרגיה וחידוש תקיפות הדדיות",
     "summary": "הפסקת האש בנושאי תשתיות אנרגיה קרסה לחלוטין לאחר מתקפות רוסיות על תחנות כוח בקייב ובחרקוב וחידוש תקיפות אוקראיניות נגד בתי זיקוק לנפט בריאזאן ובמקומות נוספים.",
     "axis": "חזית האנרגיה ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T15:01:10+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T15:01:10+00:00",
     "last_update_at": "2026-10-15T20:59:12+00:00",
     "what_is_not_verified": "קיומה הרשמי של הפסקת האש מלכתחילה לא אומת על ידי שני הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hya50jcjfx",
       "published_at": "2026-10-15T20:59:12+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/15/8058238/",
       "published_at": "2026-10-15T18:22:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/15/8058227/",
       "published_at": "2026-10-15T17:46:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cqwyrnwd9dw1o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-15T16:50:18+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/15/us-effort-to-get-russia-ukraine-energy-ceasefire-collapses",
       "published_at": "2026-10-15T15:01:10+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאזאן, רוסיה",
       "lat": 54.6296,
       "lon": 39.7425
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10152342-04",
     "title": "פגיעות ברחפנים במכליות סמוך לחופי רומניה בים השחור",
     "summary": "שני כלי שיט מסחריים נפגעו מכלי טיס בלתי מאוישים במים הטריטוריאליים של רומניה בים השחור, וכתוצאה מכך עלו באש ושבעה אנשי צוות הוגדרו כנעדרים.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T15:25:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T15:25:51+00:00",
     "last_update_at": "2026-10-15T17:31:30+00:00",
     "what_is_not_verified": "גורל שבעת הימאים הנעדרים ואישור רוסי רשמי על שיגור הכלים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/15/sailors-missing-drone-strike-tankers-romania-black-sea-coast",
       "published_at": "2026-10-15T17:31:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/15/ukraine-russia-war-starlink-zelenskyy-putin-elon-musk-trump-europe-latest-news",
       "published_at": "2026-10-15T15:25:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10152342-05",
     "title": "השבתת מחשבי-על של חברת יאנדקס בעקבות פגיעות כטב\"מים אוקראינים",
     "summary": "תקיפות רחפנים וכלי טיס בלתי מאוישים על חוות שרתים של חברת יאנדקס בריאזאן, בקלוגה ובוולדימיר גרמו להשבתת שלושת מחשבי-העל של החברה עקב נזקי עשן ושריפות.",
     "axis": "עומק רוסיה / תשתיות טכנולוגיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T18:08:02+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T18:08:02+00:00",
     "last_update_at": "2026-10-15T18:15:06+00:00",
     "what_is_not_verified": "מידת הנזק הסופית לרכיבים האלקטרוניים ומשך הזמן שיידרש לתיקונם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/15/ukrainian-strikes-on-yandex-s-data-centers-could-set-back-russia-s-ai-development-by-years-never-a-rival-to-the-u-s-or-china-in-ai-russia-may-now-fall-behind-kazakhstan-too",
       "published_at": "2026-10-15T18:08:02+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/15/they-started-it-we-re-responding-putin-warns-ukraine-over-strikes-on-energy-facilities-warehouses-and-data-centers",
       "published_at": "2026-10-15T18:15:06+00:00"
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
     "id": "UKRAINE-10152342-06",
     "title": "חשיפת בסיס רוסי חדש לשיגור כטב\"מי סילון",
     "summary": "ניתוח צילומי לוויין הצביע על הקמת בסיס רחב היקף תוך שישה שבועות על ידי הצבא הרוסי לצורך שיגור כלי טיס בלתי מאוישים מהירים המונעים בסילון.",
     "axis": "מערך כלי הטיס הבלתי מאוישים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T20:59:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T20:59:12+00:00",
     "last_update_at": "2026-10-15T20:59:12+00:00",
     "what_is_not_verified": "המיקום המדויק של הבסיס ומועד תחילת הפעלתו המבצעית המלאה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hya50jcjfx",
       "published_at": "2026-10-15T20:59:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10152342-07",
     "title": "אספקת חבילות סיוע צבאי וטילים מבריטניה ומפולין לאוקראינה",
     "summary": "בריטניה הסכימה להעביר לאוקראינה משלוח נוסף של טילי שיוט מסוג סטורם שאדו, ופולין העבירה חבילת סיוע הכוללת רכיבים לא פומביים ותחמושת בקוטר עשרים מילימטר להגנה על קייב.",
     "axis": "סיוע צבאי בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T18:16:00+00:00",
     "last_update_at": "2026-10-15T19:26:53+00:00",
     "what_is_not_verified": "פרטי הרכיבים המסווגים בחבילת הסיוע הפולנית והכמות המדויקת של טילי סטורם שאדו הבריטיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_133892683d9b0fcf",
       "url": "https://kyivindependent.com/uk-to-resupply-ukraine-with-more-storm-shadow-missiles-to-strike-russia-bloomberg-reports/",
       "published_at": "2026-10-15T19:26:53+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_133892683d9b0fcf",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/15/8058237/",
       "published_at": "2026-10-15T18:16:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      },
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    },
    {
     "id": "UKRAINE-10152342-08",
     "title": "מחסור חמור במיירטים למערכות פטריוט באוקראינה",
     "summary": "מקורות מדווחים כי מלאי הטילים המיירטים למערכות פטריוט שבידי אוקראינה אזל, דבר שהוביל לפגיעות ישירות של טילים בליסטיים רוסיים בתחנות כוח באזור קייב וחרקוב.",
     "axis": "הגנה אווירית",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T18:22:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T18:22:00+00:00",
     "last_update_at": "2026-10-15T18:22:00+00:00",
     "what_is_not_verified": "מידת המחסור המדויקת של כלל סוגי המיירטים במערך ההגנה האווירית האוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/15/8058238/",
       "published_at": "2026-10-15T18:22:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10152342-09",
     "title": "תוכנית רוסית לשיתוק תשתיות החשמל, המים והחימום בערים מרכזיות",
     "summary": "מסמך תקיפה רוסי שיורט מעיד על כוונה להשבית תוך חודש את מערכות האנרגיה והמים בערים קייב, חרקוב ואודסה באמצעות שימוש מרוכז בעשרות טילים בליסטיים ומאות כטב\"מים ופצצות מונחות.",
     "axis": "מערכה על התשתיות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T18:26:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T18:26:00+00:00",
     "last_update_at": "2026-10-15T18:26:00+00:00",
     "what_is_not_verified": "היכולת המעשית של רוסיה להוציא לפועל את מלוא התוכנית במסגרת הזמן שהוגדרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/15/8058232/",
       "published_at": "2026-10-15T18:26:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10152342-10",
     "title": "שימוש אוקראיני ראשון בטיל בליסטי מפיתוח עצמי",
     "summary": "גורמים באוקראינה דיווחו על הפעלה מבצעית ראשונה ומוצלחת של טיל בליסטי מייצור מקומי נגד יעדים בתוך שטח רוסיה, תוך חדירת מערכות ההגנה הרוסיות.",
     "axis": "עומק רוסיה / יכולות תקיפה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T20:03:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T20:03:00+00:00",
     "last_update_at": "2026-10-15T20:03:00+00:00",
     "what_is_not_verified": "אישור בלתי תלוי או תיעוד המאמת את פגיעת הטיל באתר המטרה ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-defense/4174888-ukraines-first-use-of-fp7-ballistic-missile-successful-military-expert-says.html",
       "published_at": "2026-10-15T20:03:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10152342-11",
     "title": "העברת אמצעי לחימה וטכנולוגיות רוסיות מאוקראינה לישראל לחקר",
     "summary": "ישראל אישרה קבלת דוגמאות של אמצעי לחימה רוסיים שנלקחו על ידי אוקראינה, במטרה לבחון טכנולוגיות כטב\"מים ולפתח נגדם אמצעי התגוננות ומערכות לייזר.",
     "axis": "שיתוף פעולה טכנולוגי וצבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T20:17:17+00:00",
     "last_update_at": "2026-10-15T20:17:17+00:00",
     "what_is_not_verified": "סוגי מערכות הנשק והדגמים המדויקים שנמסרו בפועל לבדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48589",
       "published_at": "2026-10-15T20:17:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10152342-12",
     "title": "הגבלות אירופיות אפשריות על אשרות תיירות לאזרחי רוסיה",
     "summary": "האיחוד האירופי וגרמניה דנים בהחמרת הפיקוח על אשרות כניסה לאזרחים רוסים באמצעות מתן אשרות מוגבלות טריטוריאלית בלבד במקום אשרות שנגן חופשיות.",
     "axis": "סנקציות ומדיניות הגירה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T19:40:21+00:00",
     "last_update_at": "2026-10-15T19:40:21+00:00",
     "what_is_not_verified": "האם ההצעה תאושר ותיושם לאור התנגדות מצד חלק ממדינות האיחוד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/cards/getting-a-schengen-visa-is-already-hard-for-russians-germany-reportedly-wants-to-limit-where-they-can-go-on-one",
       "published_at": "2026-10-15T19:40:21+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    }
   ],
   "not_verified": [
    "טענת שיגור ראשון ומוצלח של טיל בליסטי מפיתוח עצמי מאוקראינה לעבר מטרות ברוסיה",
    "הערכת המודיעין בדבר כוונת רוסיה להשבית את תשתיות האנרגיה בשלוש ערים אוקראיניות בתוך 30 יום",
    "הדיווח לפיו אזל כליל מלאי המיירטים למערכות פטריוט שבידי אוקראינה",
    "זהות משגרי הכטב\"מים שפגעו במכליות סמוך לחופי רומניה",
    "היקף הנזק המדויק שנגרם למחשבי-העל של יאנדקס ולבתי הזיקוק ברוסיה",
    "פרטי הסיוע הצבאי המסווג שהועבר מפולין לאוקראינה",
    "הדיווחים על הסכם אספקה נוסף של טילי סטורם שאדו מבריטניה שלא הוכרז רשמית"
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
     "value": 1.1208,
     "unit": "USD",
     "change_pct": 0.12,
     "source_id": "src_ecb",
     "as_of": "2026-10-15T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת מערכות יירוט טילים בליסטיים ותחמושת הגנה אווירית מבעלות בריתה",
      "חידוש הפגיעות במתקני אנרגיה ובתי זיקוק ברוסיה בתגובה להפצצות על קייב וערי אוקראינה",
      "קידום תהליך ההצטרפות לאיחוד האירופי וחיזוק שיתוף הפעולה הביטחוני עם מדינות אירופה"
     ],
     "inferred": [
      "ערעור הכלכלה הרוסית והפעלת לחץ ישיר על התעשייה הטכנולוגית והאנרגטית של מוסקבה כדי לבלום את מאמץ המלחמה",
      "שימור רציפות אספקת האמל\"ח המערבי תוך גישור על פערים ביטחוניים מול ארצות הברית והתמודדות עם מגבלות תקשורת לווינית"
     ],
     "forecast": [
      "המשך הגברת פיתוח וייצור אמצעי לחימה עצמאיים כמו טילים בליסטיים וכטב\"מים ארוכי טווח כדי לפצות על תנודות בסיוע החוץ",
      "התמקדות מוגברת בבקשות דחופות למערכות הגנה אווירית מפני מתקפות החורף הצפויות על רשת החשמל"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בתשתיות אסטרטגיות, מתקני אנרגיה ומרכזי נתונים באוקראינה בתגובה לפעולותיה",
      "שלילת האפשרות להפסקות אש זמניות שיאפשרו לאוקראינה לשקם את כוחותיה הצבאיים"
     ],
     "inferred": [
      "הכרעת כושר העמידה של העורף האוקראיני על ידי שיתוק מוחלט של מערכות החשמל, החימום והמים בערים הגדולות",
      "ניצול המחסור החריף במיירטים אוקראיניים להשגת עליונות אווירית ולפגיעה ביכולות הפיקוד והשליטה"
     ],
     "forecast": [
      "הרחבת השימוש בבסיסי שיגור ייעודיים לכטב\"מי סילון מהירים כדי לחדור את מערכי ההגנה הדלילים של אוקראינה",
      "החרפת התקיפות הממוקדות נגד נמלים ותשתיות סחר ימי בים השחור כדי להטיל מצור כלכלי מתמשך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cqwyrnwd9dw1o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/15/ukraine-russia-war-starlink-zelenskyy-putin-elon-musk-trump-europe-latest-news",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/uk-to-resupply-ukraine-with-more-storm-shadow-missiles-to-strike-russia-bloomberg-reports/",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/cards/getting-a-schengen-visa-is-already-hard-for-russians-germany-reportedly-wants-to-limit-where-they-can-go-on-one",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/15/8058232/",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48589",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-defense/4174888-ukraines-first-use-of-fp7-ballistic-missile-successful-military-expert-says.html",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hya50jcjfx",
     "accessed_at": "2026-10-15T23:42:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T05:06:41+00:00",
  "changes": {
   "UKRAINE-10152342-01": {
    "kind": "new"
   },
   "UKRAINE-10152342-02": {
    "kind": "new"
   },
   "UKRAINE-10152342-03": {
    "kind": "new"
   },
   "UKRAINE-10152342-04": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הערכות לזיהום נפט בים השחור בעקבות פגיעה במכלית סמוך לסוצ'י",
    "score": 0.65
   },
   "UKRAINE-10152342-05": {
    "kind": "new"
   },
   "UKRAINE-10152342-06": {
    "kind": "new"
   },
   "UKRAINE-10152342-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הקצאת סיוע כספי וצבאי מצד בריטניה והאיחוד האירופי לאוקראינה",
    "score": 0.65
   },
   "UKRAINE-10152342-08": {
    "kind": "new"
   },
   "UKRAINE-10152342-09": {
    "kind": "new"
   },
   "UKRAINE-10152342-10": {
    "kind": "new"
   },
   "UKRAINE-10152342-11": {
    "kind": "new"
   },
   "UKRAINE-10152342-12": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-15T2344__north-202610152344.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-15T23:44:33+00:00",
   "window": {
    "from": "2026-10-14T23:44:33+00:00",
    "to": "2026-10-15T23:44:33+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610152344"
   },
   "summary": "הגזרה הצפונית מתאפיינת במתיחות ביטחונית גבוהה סביב דרום לבנון וסביב התעצמות מחודשת של חזבאללה מול מאמצי אכיפה של השלטון בלבנון. בדרום לבנון נמשכים חיכוכי גבול ותקיפות נקודתיות של ישראל, לצד היערכות ישראלית לתגובה מאיראן ומחזבאללה. בסוריה פועל השלטון החדש של א-שרעא לביסוס משילות ולכידת גורמים ממשטר אסד לשעבר, תוך התנערות ממעורבות ישראלית בענייני הדרוזים בדרום המדינה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה בעצימות נמוכה, שיגור מיירטים ותקיפות נקודתיות של צה\"ל לצד נוכחות כוחות בשטח"
    },
    {
     "name": "פנים לבנון (ביירות והבקאע)",
     "status": "חיכוך פוליטי וביטחוני בין צבא ומשטרת לבנון לחזבאללה בעקבות תפיסת משלוחי נשק"
    },
    {
     "name": "דרום סוריה ודמשק",
     "status": "מתח סביב הגנת האוכלוסייה הדרוזית והצהרות על תקיפות ישראליות בעבר נגד יעדי שלטון"
    },
    {
     "name": "ציר טורקיה-סוריה-לבנון",
     "status": "מגעים מדיניים וביטחוניים ברקע הכחשות רשמיות למפגשי תיווך בין חזבאללה לשלטון הסורי"
    }
   ],
   "events": [
    {
     "id": "NORTH-10152344-01",
     "title": "תפיסת משלוח חומרי נפץ של חזבאללה בלבנון ודרישת הארגון להשבתם",
     "summary": "כוחות ביטחון הפנים של לבנון תפסו במחסום דהר אל-בידר כחצי טון חומרי נפץ שהוסעו ברכב מבקעת הלבנון לכיוון ביירות. חבר פרלמנט מטעם חזבאללה הודה שהמטען שייך לארגון ודרש את השבתו ואת שחרור העצורים בטענה שהציוד מיועד לפעילות נגד ישראל, בעוד ראש הממשלה הלבנוני הצהיר כי המדינה לא תשלים עם נשק בלתי חוקי.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T14:10:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T14:10:00+00:00",
     "last_update_at": "2026-10-15T23:40:16+00:00",
     "what_is_not_verified": "בכתבה אחת נטען שהחות'ים הודו בבעלות על המשלוח בסתירה להודאת חזבאללה; כמו כן מטרת השינוע והיעד הסופי אינם מוסכמים מעבר לטענות הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/seized-explosives-belong-resistance-against-israel-hezbollah-mp-says",
       "published_at": "2026-10-15T23:40:16+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hjjwvpcozx",
       "published_at": "2026-10-15T15:44:34+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48581",
       "published_at": "2026-10-15T15:37:29+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963015/rubios-call-to-aoun-raises-stakes-over-hezbollah-explosives-will-leban/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963015",
       "published_at": "2026-10-15T14:10:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10152344-02",
     "title": "לחץ אמריקני על נשיא לבנון בעניין מטעני הנפץ ודרישה לבלימת תקיפות ישראל",
     "summary": "שר החוץ של ארצות הברית דרש מנשיא לבנון בשיחת טלפון שלא להחזיר לחזבאללה את חומרי הנפץ שנתפסו ולמצות את הדין עם המעורבים. מנגד, נשיא לבנון דרש מארצות הברית ללחוץ על ישראל להפסיק את תקיפותיה ופעולות החישוף בדרום לבנון ולעמוד בהסכם המסגרת.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T14:05:23+00:00",
     "last_update_at": "2026-10-15T22:29:05+00:00",
     "what_is_not_verified": "פרטי השיחה המלאים נמסרו דרך מקורות רשמיים לבנוניים ותדרוך אנונימי בארצות הברית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a56c81a0239472b7",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/rubio-spoke-lebanese-president-confiscated-hezbollah-explosives-says",
       "published_at": "2026-10-15T22:29:05+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a56c81a0239472b7",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-president-asks-rubio-press-israel-halt-attacks-countrys-south",
       "published_at": "2026-10-15T21:48:22+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_a56c81a0239472b7",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963015/rubios-call-to-aoun-raises-stakes-over-hezbollah-explosives-will-leban/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963015",
       "published_at": "2026-10-15T14:10:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_a56c81a0239472b7",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963029/aoun-urges-rubio-to-pressure-israel-to-halt-attacks-in-southern-lebano/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963029",
       "published_at": "2026-10-15T14:05:23+00:00"
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
     "id": "NORTH-10152344-03",
     "title": "שיגור מיירט צה\"ל לעבר מטרת שווא בדרום לבנון",
     "summary": "מיירט שוגר לעבר מטרת שווא במרחב שבו פועלים כוחות צבא הגנה לישראל בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T21:33:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T21:33:27+00:00",
     "last_update_at": "2026-10-15T21:33:33+00:00",
     "what_is_not_verified": "מהות מטרת השווא לא פורטה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1377755",
       "published_at": "2026-10-15T21:33:33+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25384",
       "published_at": "2026-10-15T21:33:27+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון, לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-10152344-04",
     "title": "דיווח על תקיפות ישראליות בעיירות בדרום לבנון",
     "summary": "ערוץ אל-מנאר דיווח על תקיפות ופיצוצים שביצעו כוחות ישראליים בעיירות כפר תבנית ובית יהון בדרום המדינה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T17:08:20+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T17:08:20+00:00",
     "last_update_at": "2026-10-15T17:08:20+00:00",
     "what_is_not_verified": "אין אימות עצמאי או תגובה ישראלית על היקף התקיפות והנזק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_24adbfc7459539eb",
       "url": "https://english.almanar.com.lb/article/138682/",
       "published_at": "2026-10-15T17:08:20+00:00"
      }
     ],
     "places": [
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-10152344-05",
     "title": "לכידת מפקד מיליציה מתקופת אסד החשוד בטבח בניאס",
     "summary": "רשויות הביטחון בסוריה עצרו את עלי כיאלי, מפקד מיליציה הנאמן למשטר אסד לשעבר, בעת שניסה להימלט אל מעבר לגבול. החשוד מבוקש בסוריה על מעורבות בטבח אזרחים בבניאס ובבידא ב-2013, וכן מבוקש בטורקיה על אירועי עבר.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T16:39:53+00:00",
     "last_update_at": "2026-10-15T23:25:50+00:00",
     "what_is_not_verified": "לא צוין לאיזו מדינה ניסה החשוד להימלט בעת מעצרו, וקיימים פערים בין מקורות שונים לגבי מניין ההרוגים המדויק בטבח ההיסטורי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/main-suspect-massacre-syria-arrests-assad-era-paramilitary-leader",
       "published_at": "2026-10-15T23:25:50+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/syria-arrests-mihrac-ural-ex-assad-militia-head-also-wanted-turkey",
       "published_at": "2026-10-15T17:02:19+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-announces-arrest-assad-era-paramilitary-leader",
       "published_at": "2026-10-15T16:39:53+00:00"
      }
     ],
     "places": [
      {
       "name": "בניאס, סוריה",
       "lat": 35.1851,
       "lon": 35.9478
      },
      {
       "name": "טרטוס, סוריה",
       "lat": 34.8936,
       "lon": 35.8852
      }
     ]
    },
    {
     "id": "NORTH-10152344-06",
     "title": "הצהרות ראש ממשלת ישראל על בלימת פגיעה בדרוזים בדרום סוריה",
     "summary": "ראש ממשלת ישראל הצהיר כי תקף את משרד הביטחון ויעד במתחם הארמון בדמשק, ושוחח ישירות עם א-שרעא על מנת לעצור פגיעה באוכלוסייה הדרוזית בדרום סוריה.",
     "axis": "ישראל - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T13:29:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T13:29:36+00:00",
     "last_update_at": "2026-10-15T23:24:02+00:00",
     "what_is_not_verified": "מועד התקיפות והשיחה אינו מצוין, וגורמים סוריים רשמיים גינו ניסיונות פוליטיזציה של סוגיית הדרוזים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-says-it-rejects-politicizing-druze-community-for-israeli-elections/4090455",
       "published_at": "2026-10-15T23:24:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131984",
       "published_at": "2026-10-15T18:31:38+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48577",
       "published_at": "2026-10-15T13:29:36+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10152344-07",
     "title": "ביקור סגן שר החוץ של איראן בביירות",
     "summary": "סגן שר החוץ של איראן, סעיד ח'טיבזאדה, ביקר ברובע הדאחייה בביירות והניח זר על קברו של חסן נסראללה.",
     "axis": "לבנון - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T18:47:28+00:00",
     "last_update_at": "2026-10-15T18:47:28+00:00",
     "what_is_not_verified": "לא פורטו פגישות מדיניות נוספות שקיים הבכיר במהלך שהותו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_9351587faa935196",
       "url": "https://english.almanar.com.lb/article/138692/",
       "published_at": "2026-10-15T18:47:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10152344-08",
     "title": "ביקור רשמי של ראש ממשלת קטאר בלבנון",
     "summary": "ראש ממשלת קטאר ושר החוץ שלה נחת בביירות לביקור רשמי שכולל פגישות עם נשיא לבנון, יושב ראש הפרלמנט, ראש הממשלה ובכירים צבאיים ואזרחיים.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T20:01:01+00:00",
     "last_update_at": "2026-10-15T20:01:01+00:00",
     "what_is_not_verified": "תוכן השיחות המדיניות וסיכומי הפגישות טרם פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/138722/",
       "published_at": "2026-10-15T20:01:01+00:00"
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
     "id": "NORTH-10152344-09",
     "title": "היערכות בישראל לאפשרות של הסלמה מול איראן ושלוחותיה",
     "summary": "בישראל הוארך מצב החירום והוגברה המוכנות הביטחונית מחשש לתקיפה יזומה או טעות בחישוב מצד איראן, חזבאללה והחות'ים, לצד תיאום ביטחוני שוטף עם פיקוד המרכז האמריקני.",
     "axis": "ישראל - לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T14:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T14:00:00+00:00",
     "last_update_at": "2026-10-15T16:37:32+00:00",
     "what_is_not_verified": "הסבירות לתקיפה ומניעי קבלת ההחלטות הפוליטיים מבוססים על הערכות מקורות ביטחוניים בלתי מזוהים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hjbecvrjgl",
       "published_at": "2026-10-15T16:37:32+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962986/israel-braces-for-escalation-as-fears-of-an-iranian-attack-grow/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962986",
       "published_at": "2026-10-15T14:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10152344-10",
     "title": "הערכות לגבי שיקום גשרי הליטני ותנועת חזבאללה בדרום לבנון",
     "summary": "דוח מחקרי מצביע על כך שגשרים על נהר הליטני שנפגעו בתקיפות צה\"ל במרץ 2026 שוקמו בחלקם באמצעות מעברים חלופיים של גורמים מקומיים, דבר המאפשר לחזבאללה לשוב ולשנע פעילים ואמצעי לחימה למרחב שמדרום לנהר.",
     "axis": "ישראל - לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T11:55:45+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-15T11:55:45+00:00",
     "last_update_at": "2026-10-15T11:55:45+00:00",
     "what_is_not_verified": "היקף התנועה המדויק של אמצעי לחימה דרך המעברים החלופיים אינו מפורט בנתונים מדויקים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/the-litani-river-bridges-struck-in-march-2026-their-structural-and-security-status-and-how-hezbollah-is-exploiting-the-situation/",
       "published_at": "2026-10-15T11:55:45+00:00"
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
     "id": "NORTH-10152344-11",
     "title": "דיווחים והכחשות על תיווך טורקי בין ממשל א-שרעא לחזבאללה",
     "summary": "דיווחים על קיום פגישה ישירה בטורקיה בין נציגי ממשל א-שרעא בסוריה לנציגי חזבאללה להפחתת מתיחות הוכחשו באופן רשמי על ידי משרד ההסברה הסורי ומערך התקשורת הנשיאותי של טורקיה.",
     "axis": "סוריה - טורקיה - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T07:04:20+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-15T07:04:20+00:00",
     "last_update_at": "2026-10-15T07:04:20+00:00",
     "what_is_not_verified": "עצם קיום הפגישות נתון בסתירה מוחלטת בין דיווחים עיתונאיים המצטטים מקורות ביטחוניים לבין הכחשות רשמיות של ממשלות סוריה וטורקיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/ankara-as-a-mediator-between-damascus-hezbollah-and-beirut-reports-denials-and-open-questions/",
       "published_at": "2026-10-15T07:04:20+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "סתירה בדיווחים אם משלוח חומרי הנפץ שנתפס בדהר אל-בידר שייך לחזבאללה כהודאת פדלאללה או לחות'ים כפי שצוין באחד המקורות",
    "היעד המעשי של חומרי הנפץ שנתפסו ברכב - התנקשויות פוליטיות, שימוש פנימי או לחימה נגד כוחות צה\"ל",
    "עצם התרחשות הפגישה המתווכת על אדמת טורקיה בין נציגי ממשלת סוריה לחזבאללה, שהוכחשה רשמית על ידי אנקרה ודמשק",
    "אמיתות טענות ראש ממשלת ישראל בדבר תקיפת משרד הביטחון ומתחם הארמון בדמשק והשיחה שבלמה את הפגיעה בדרוזים",
    "טענות ערוצים המזוהים עם חזבאללה על הגעת משאיות עמוסות חומרי נפץ של צה\"ל לכפר זוטר א-שרקיה"
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
     "value": 3.1022,
     "unit": "ILS",
     "change_pct": 0.83,
     "source_id": "src_ecb",
     "as_of": "2026-10-15T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חזבאללה",
     "declared": [
      "המשך הצטיידות והפעלת אמצעי לחימה כדי להתעמת עם כוחות ישראל ולהגן על לבנון",
      "דרישה לשחרר את פעיליו ולהשיב את מטעני הנפץ שהוחרמו על ידי כוחות הביטחון הלבנוניים"
     ],
     "inferred": [
      "שיקום יכולות צבאיות מדרום לנהר הליטני תוך ניצול מעברים אזרחיים ופגיעה בריבונות ממשלת לבנון",
      "הרתעת השלטון המרכזי בביירות מאכיפת איסור הנשק הבלתי חוקי"
     ],
     "forecast": [
      "המשך ניסיונות הברחה של חומרי חבלה מסוריה לבקאע ולדרום לבנון תוך חיכוך הולך וגובר עם מנגנוני הביטחון של לבנון",
      "שמירה על כוננות לתקיפה אפשרית בתיאום עם איראן בעיתוי שייראה מתאים לארגון"
     ]
    },
    {
     "actor": "ממשלת לבנון ונשיאותה",
     "declared": [
      "אכיפת החוק ואי-גילוי סובלנות כלפי נשק בלתי חוקי והברחות",
      "הפעלת לחץ על ארצות הברית לעצירת התקיפות הישראליות בדרום המדינה ויישום הסכם המסגרת"
     ],
     "inferred": [
      "ניסיון לתמרן בין לחצים כבדים מוושינגטון לפעול נגד חזבאללה לבין החשש מפרוץ עימות פנים-לבנוני אלים",
      "שאיפה להבטיח את המשך משימת יוניפי\"ל כדי למנוע ואקום ביטחוני בדרום"
     ],
     "forecast": [
      "הימנעות מעימות חזיתי כולל עם חזבאללה חרף התעקשות משפטית על החרמת אמצעי הלחימה שנתפסו",
      "המשך פניות דיפלומטיות למדינות המערב ולמתווכות אזוריות כגון קטאר לבלימת צה\"ל"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול פעילות טרור בדרום לבנון והגנה על אזרחים ודרוזים בסוריה",
      "היערכות צבאית התקפית והגנתית למניעת מתקפות פתע מצד איראן ושלוחותיה"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי וחישוף שטחים בדרום לבנון למניעת התבססות חזבאללה בקרבת הגבול",
      "הפעלת מנופי לחץ צבאיים ישירים על השלטון בדמשק למניעת התקרבות לציר האיראני ולמניעת פגיעה במיעוטים"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות ואכיפה מוגברת באזור קו הגבול בדרום לבנון",
      "הישארות ברמת כוננות גבוהה והארכת צעדי חירום עד לחלוף תקופת הבחירות"
     ]
    },
    {
     "actor": "הממשל הסורי (א-שרעא)",
     "declared": [
      "דחיית כל ניסיון לניצול פוליטי של העדה הדרוזית בא-סווידא כחלק ממרקם המדינה",
      "מיצוי הדין עם פושעי מלחמה ופעילי מיליציות ממשטר אסד הישן ללא התיישנות"
     ],
     "inferred": [
      "ביסוס לגיטימציה שלטונית פנימית ובינלאומית באמצעות העמדה לדין של פושעי משטר העבר",
      "שמירה על ניטרליות יחסית וזהירות מעימות ישיר עם ישראל או חזבאללה בשטח לבנון"
     ],
     "forecast": [
      "המשך מעצרים של בכירים לשעבר הנאמנים למשטר אסד שניסו להימלט מהמדינה",
      "התנערות עקבית מיוזמות גלויות שיחברו את דמשק לחזבאללה על מנת למנוע תקיפות ישראליות בעומק סוריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/ankara-as-a-mediator-between-damascus-hezbollah-and-beirut-reports-denials-and-open-questions/",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/138722/",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/syria-arrests-mihrac-ural-ex-assad-militia-head-also-wanted-turkey",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-says-it-rejects-politicizing-druze-community-for-israeli-elections/4090455",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/962986/israel-braces-for-escalation-as-fears-of-an-iranian-attack-grow/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962986",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1377755",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/main-suspect-massacre-syria-arrests-assad-era-paramilitary-leader",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-announces-arrest-assad-era-paramilitary-leader",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131984",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48577",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25384",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hjbecvrjgl",
     "accessed_at": "2026-10-15T23:44:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-14T23:40:41+00:00",
  "changes": {
   "NORTH-10152344-01": {
    "kind": "new"
   },
   "NORTH-10152344-02": {
    "kind": "possible",
    "prev": "מגעים להארכת מנדט יוניפי\"ל בדרום לבנון",
    "score": 0.633
   },
   "NORTH-10152344-03": {
    "kind": "new"
   },
   "NORTH-10152344-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות והפגזות ישראליות במספר מוקדים בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10152344-05": {
    "kind": "new"
   },
   "NORTH-10152344-06": {
    "kind": "possible",
    "prev": "גינוי טורקי לפעולות ישראל הפוגעות בשיקום סוריה",
    "score": 0.467
   },
   "NORTH-10152344-07": {
    "kind": "new"
   },
   "NORTH-10152344-08": {
    "kind": "new"
   },
   "NORTH-10152344-09": {
    "kind": "new"
   },
   "NORTH-10152344-10": {
    "kind": "new"
   },
   "NORTH-10152344-11": {
    "kind": "new"
   }
  }
 }
};
