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
  "draft": "drafts/ukraine/2026-10-16T2340__ukraine-202610162340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-16T23:40:33+00:00",
   "window": {
    "from": "2026-10-15T23:40:33+00:00",
    "to": "2026-10-16T23:40:33+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610162340"
   },
   "summary": "רוסיה מנהלת מערכה אווירית מוגברת נגד מערך האנרגיה ותשתיות אזרחיות באוקראינה, במטרה לשבש את התפקוד העורפי לקראת עונת החורף. במקביל, כוחות אוקראינה מפעילים תקיפות עומק נגד מתקני תעשייה ובתי זיקוק בשטח רוסיה ומבצעים התקפות נגד מקומיות בחזית המזרחית. הזירה מושפעת ממתיחות סביב אספקת מערכות הגנה אווירית ושיבושים ביכולות התקשורת הלוויינית של צבא אוקראינה.",
   "fronts": [
    {
     "name": "דונבאס",
     "status": "כוחות אוקראינה פועלים בהתקפות נגד ומחזירים שטחים במסגרת מבצע ייעודי"
    },
    {
     "name": "העורף האוקראיני",
     "status": "תחת גלי תקיפות רוסיות אינטנסיביות של כטב\"מים וטילים נגד מתקני אנרגיה ומבנים אזרחיים"
    },
    {
     "name": "עורף רוסיה",
     "status": "יעד לתקיפות כטב\"מים אוקראיניות על בתי זיקוק ומתקני תעשייה שהביאו להגבלות תעופה"
    },
    {
     "name": "ציר האספקה לחצי האי קרים",
     "status": "מותקף באמצעות כלי טיס בלתי מאוישים אוקראיניים נגד מטרות לוגיסטיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10162340-01",
     "title": "הגבלות תעופה בנמלי תעופה במוסקבה בעקבות מתקפות",
     "summary": "סוכנות התחבורה האווירית הפדרלית של רוסיה הטילה מגבלות בשלושה מארבעת נמלי התעופה המרכזיים באזור מוסקבה, ומשרד התחבורה הכריז על ניטור מיוחד על רקע תקיפות אוקראיניות על בתי זיקוק.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T22:45:41+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T22:45:41+00:00",
     "last_update_at": "2026-10-16T22:45:41+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לבתי הזיקוק ומשך המגבלות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/moscow-closes-sky-multiple-nights-in-row-as-ukraine-resumes-refinery-strikes/",
       "published_at": "2026-10-16T22:45:41+00:00"
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
     "id": "UKRAINE-10162340-02",
     "title": "רוסיה שיגרה מאות כטב\"מים וטילים לעבר אוקראינה",
     "summary": "חיל האוויר האוקראיני דיווח כי רוסיה שיגרה מאות כלי טיס בלתי מאוישים ומספר טילי שיוט, ומערכות ההגנה יירטו או שיבשו את מרביתם.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:54:00+00:00",
     "last_update_at": "2026-10-16T16:54:00+00:00",
     "what_is_not_verified": "מספר הפגיעות המדויק ומידת הנזק של הכלים שלא יורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a87886ae53908330",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058422/",
       "published_at": "2026-10-16T16:54:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-03",
     "title": "הפסקות חשמל נרחבות עקב פגיעות בתשתיות אנרגיה במערב אוקראינה",
     "summary": "חברת החשמל הממלכתית של אוקראינה דיווחה על שיבושים קשים באספקת החשמל במחוזות ריבנה ווהלין, כולל בערים ריבנה ולוצק, בעקבות תקיפות כטב\"מים רוסיים.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T16:47:00+00:00",
     "last_update_at": "2026-10-16T16:47:00+00:00",
     "what_is_not_verified": "משך הזמן הנדרש להשלמת התיקונים המלאים ברשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_5ffacfc42eadc3d4",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058419/",
       "published_at": "2026-10-16T16:47:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ריבנה, אוקראינה",
       "lat": 50.6196,
       "lon": 26.2513
      },
      {
       "name": "לוצק, אוקראינה",
       "lat": 50.7451,
       "lon": 25.3201
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-04",
     "title": "פגיעה במבני מגורים בחרקוב כתוצאה מתקיפה רוסית",
     "summary": "תקיפה רוסית גרמה נזק לבנייני מגורים וניפוץ חלונות רבים ברובע סלובידסקי בעיר חרקוב.",
     "axis": "מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T20:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T20:30:00+00:00",
     "last_update_at": "2026-10-16T20:30:00+00:00",
     "what_is_not_verified": "מידע על נפגעים בנפש באירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175294-russian-attack-damages-homes-in-kharkiv-over-100-windows-shattered.html",
       "published_at": "2026-10-16T20:30:00+00:00"
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
     "id": "UKRAINE-10162340-05",
     "title": "טענות רוסיות על פגיעה נרחבת ביעדים אסטרטגיים ולוגיסטיים",
     "summary": "ראש המטה הכללי של צבא רוסיה ולרי גרסימוב טען כי כוחותיו השמידו עשרות מרכזים לוגיסטיים, מאות מתקני נמל וכלי שיט שהובילו אספקה צבאית לאוקראינה.",
     "axis": "כלל הזירה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T21:00:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T21:00:23+00:00",
     "last_update_at": "2026-10-16T21:00:23+00:00",
     "what_is_not_verified": "אימות עצמאי למספרי המטרות והנזקים שהציג גרסימוב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2203371",
       "published_at": "2026-10-16T21:00:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-06",
     "title": "מחלוקת ודיווחים על הגבלת שירותי סטארלינק וסטארשילד לכוחות אוקראינה",
     "summary": "באוקראינה מדווחים על שיבושים וקשיים ברשת התקשורת הלוויינית בשדה הקרב, בעוד גורמים בארצות הברית, כולל הנשיא טראמפ, מכחישים כי הורו על הגבלת המערכת.",
     "axis": "תקשורת וסיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T18:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T18:00:00+00:00",
     "last_update_at": "2026-10-16T22:19:01+00:00",
     "what_is_not_verified": "האם ניתנה הוראה מכוונת להאטת הרשת ומי הגורם שאחראי לכך בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203387",
       "published_at": "2026-10-16T22:19:01+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175297-ukraine-awaiting-pentagon-and-spacex-confirmation-that-starshield-fully-restored-senik-says.html",
       "published_at": "2026-10-16T20:55:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48619",
       "published_at": "2026-10-16T19:37:37+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckz65g34wyd8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T19:33:48+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/16/trump-denies-ordering-restrictions-on-ukraine-s-military-starlink-service-and-says-he-doesn-t-think-elon-musk-did-either",
       "published_at": "2026-10-16T18:45:19+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/musk-asked-trump-to-restrict-ukraines-starlink-service-telegraph-reports/",
       "published_at": "2026-10-16T18:19:45+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/16/ukraine-military-starlink-access-starshield-volodymyr-zelenskyy",
       "published_at": "2026-10-16T18:01:19+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058430/",
       "published_at": "2026-10-16T18:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-07",
     "title": "שוודיה ובלגיה מקדמות חבילות סיוע צבאי ואנרגטי לאוקראינה",
     "summary": "ממשלת בלגיה התחייבה לספק מטוסי קרב במהלך השנה, ושוודיה הודיעה על חבילת מימון לשיקום ותמיכה ברשת האנרגיה לקראת עונת החורף.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:43:00+00:00",
     "last_update_at": "2026-10-16T19:20:00+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים להגעת מטוסי הקרב בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-defense/4175282-belgium-to-deliver-10-f16-fighter-jets-to-ukraine-this-year-de-wever-says.html",
       "published_at": "2026-10-16T19:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058418/",
       "published_at": "2026-10-16T16:43:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-08",
     "title": "התקפת כטב\"ם על מתקן תעשייתי במחוז סורגוט ברוסיה",
     "summary": "מושל מחוז סורגוט ברוסיה דיווח על שרפה שפרצה במתקן תעשייתי מקומי בעקבות פגיעת כלי טיס בלתי מאויש.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T18:28:32+00:00",
     "last_update_at": "2026-10-16T18:28:32+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים במתקן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-drone-attack-sparks-fire-at-industrial-facility-in-russias-surgut-district/",
       "published_at": "2026-10-16T18:28:32+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז סורגוט, רוסיה",
       "lat": 61.2419,
       "lon": 73.3953
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-09",
     "title": "מעצר בגרמניה בחשד להצתת תחנת לוויין של סטארלינק בפולין",
     "summary": "שני אזרחים טורקים נעצרו בגרמניה בחשד למעורבות בהצתת תחנת תקשורת לוויינית קרקעית של סטארלינק בפולין בספטמבר, כאשר נבדק חשד להפעלתם בידי גופי ביון רוסיים.",
     "axis": "ביטחון באירופה ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T19:19:50+00:00",
     "last_update_at": "2026-10-16T19:19:50+00:00",
     "what_is_not_verified": "הוכחה ודאית לקשר ישיר בין העצורים לבין המודיעין הרוסי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/16/russian-intelligence-may-have-hired-a-turkish-crime-gang-to-set-fire-to-a-starlink-ground-station-in-poland-spiegel-reports",
       "published_at": "2026-10-16T19:19:50+00:00"
      }
     ],
     "places": [
      {
       "name": "וולה קרובובסקה, פולין",
       "lat": 51.8627,
       "lon": 20.9187
      },
      {
       "name": "נירטינגן, גרמניה",
       "lat": 48.6266,
       "lon": 9.3365
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-10",
     "title": "התקדמות אוקראינית במסגרת מבצע בדונבאס",
     "summary": "כוחות אוקראיניים הצליחו להחזיר לשליטתם שטחים באזור דונבאס במסגרת מבצע צבאי המכונה ויוואלדי, תוך שימוש בתקשורת לוויינית.",
     "axis": "דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T16:00:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T16:00:30+00:00",
     "last_update_at": "2026-10-16T16:00:30+00:00",
     "what_is_not_verified": "גבולות השטח המדויקים שנכבשו מחדש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_3f0c36560af318cd",
       "url": "https://www.bbc.co.uk/news/articles/cvx284w16z1po?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T16:00:30+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות הצדדים בדבר מעורבות ישירה של הממשל האמריקני או אילון מאסק בהגבלת רשת סטארלינק באוקראינה",
    "מספרי היעדים האסטרטגיים שהושמדו לפי דיווחי המטה הכללי הרוסי",
    "מצב מלאי טילי היירוט של מערכות הפטריוט באוקראינה והאם אזלו לחלוטין",
    "מעורבות ישירה של המודיעין הרוסי בהצתת תחנת סטארלינק בפולין",
    "תוכנית רוסית מודלפת להשבתת מערכות החשמל, המים והחימום בערים מרכזיות באוקראינה"
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
     "value": 1.1253,
     "unit": "USD",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה ביעדים צבאיים, לוגיסטיים ומתקני תשתית התומכים בצבא אוקראינה",
      "האשמת מוסדות בינלאומיים בסיוע למלחמה שמנהל המערב נגדה"
     ],
     "inferred": [
      "הפעלת לחץ כבד על האוכלוסייה האזרחית באמצעות קריסת מערכי החימום והחשמל לקראת החורף",
      "פגיעה ברציפות הלחימה האוקראינית על ידי שלילת יכולות שליטה ותקשורת"
     ],
     "forecast": [
      "המשך מיקוד התקיפות האוויריות בתחנות כוח ומערכות חלוקת אנרגיה באוקראינה",
      "החרפת אמצעי הפיקוח וההגבלות הביטחוניות בתחומי רוסיה מול איומי כטב\"מים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה עצמית ודרישה לסיוע בינלאומי דחוף של מערכות הגנה אווירית ומימון",
      "השבת שטחים כבושים ופגיעה בלוגיסטיקה ובמערכי האנרגיה של הצבא הרוסי"
     ],
     "inferred": [
      "ניסיון להכריח את רוסיה להקצות משאבי הגנה לעורפה באמצעות תקיפת מתקני נפט ודלק",
      "חיפוש חלופות צבאיות וטכנולוגיות לעקיפת מגבלות לוגיסטיות ותקשורתיות בחזית"
     ],
     "forecast": [
      "הגברת הלחץ הדיפלומטי על מדינות אירופה לקבלת מטוסי קרב ואמצעי נ\"מ",
      "המשך מבצעים התקפיים ממוקדים בחזית המזרחית ונגד שיירות אספקה רוסיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cvx284w16z1po?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/16/ukraine-military-starlink-access-starshield-volodymyr-zelenskyy",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-drone-attack-sparks-fire-at-industrial-facility-in-russias-surgut-district/",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/16/russian-intelligence-may-have-hired-a-turkish-crime-gang-to-set-fire-to-a-starlink-ground-station-in-poland-spiegel-reports",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058418/",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2203387",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48619",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-defense/4175282-belgium-to-deliver-10-f16-fighter-jets-to-ukraine-this-year-de-wever-says.html",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T23:42:04+00:00",
  "changes": {
   "UKRAINE-10162340-01": {
    "kind": "new"
   },
   "UKRAINE-10162340-02": {
    "kind": "new"
   },
   "UKRAINE-10162340-03": {
    "kind": "new"
   },
   "UKRAINE-10162340-04": {
    "kind": "possible",
    "prev": "תוכנית רוסית לשיתוק תשתיות החשמל, המים והחימום בערים מרכזיות",
    "score": 0.633
   },
   "UKRAINE-10162340-05": {
    "kind": "new"
   },
   "UKRAINE-10162340-06": {
    "kind": "new"
   },
   "UKRAINE-10162340-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אספקת חבילות סיוע צבאי וטילים מבריטניה ומפולין לאוקראינה",
    "score": 0.65
   },
   "UKRAINE-10162340-08": {
    "kind": "possible",
    "prev": "מתקפת כלי טיס בלתי מאוישים על מחוז מוסקבה",
    "score": 0.467
   },
   "UKRAINE-10162340-09": {
    "kind": "new"
   },
   "UKRAINE-10162340-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-16T2341__north-202610162341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-16T23:41:39+00:00",
   "window": {
    "from": "2026-10-15T23:41:39+00:00",
    "to": "2026-10-16T23:41:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610162341"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית קרקעית ואווירית של צה\"ל בדרום לבנון ובדרום סוריה, תוך הריסות מבנים וסריקות מבצעיות. במישור המדיני-פנימי בלבנון מופעל לחץ אמריקאי לפירוק חיזבאללה מנשקו ולשינוי החקיקה העוינת לישראל, לצד חיכוך מקומי בין פעילי חיזבאללה למנגנוני הביטחון של המדינה. במקביל, קטר מקדמת מיזמי אנרגיה ללבנון דרך שטח סוריה, ודמשק מאשימה את ישראל בניסיונות לערער את היציבות הפנימית במחוזות הדרומיים.",
   "fronts": [
    {
     "name": "חזית דרום לבנון",
     "status": "פעילות מבצעית הכוללת תקיפות אוויריות, סריקות וירי ארטילרי של צה\"ל לצד שיגורי מיירטים"
    },
    {
     "name": "חזית פנים לבנון (ביירות והדאחייה)",
     "status": "חיכוך בין מנגנוני הביטחון של לבנון לפעילי חיזבאללה, לצד מהלכים לצמצום השפעה איראנית"
    },
    {
     "name": "חזית דרום סוריה (דרעא וא-סווידאא)",
     "status": "פעילות קרקעית מוגבלת של כוחות ישראליים בדרעא ועימות הצהרתי חריף בין ירושלים לדמשק"
    },
    {
     "name": "גבול הצפון (העורף הישראלי)",
     "status": "דריכות ביטחונית ומאבק של ראשי הרשויות המקומיות על תקציבי שיקום ומיגון"
    }
   ],
   "events": [
    {
     "id": "NORTH-10162341-01",
     "title": "פעילות צבאית ותקיפות צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו ירי ארטילרי, תקיפות אוויריות, סריקות והריסות מבנים, וכן תועדה התקדמות כלי רכב צבאיים לעבר פאתי כפר שובא. בנוסף דווח על תקיפת רחפן חמוש שהטיל פצצות על מבנה בכפר מיפדון שבמחוז א-נבטיה, החרמת רכב אזרחי בזווטר, וירי ארטילרי לעבר חדאת'א ועייתא אל-ג'בל.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:59:43+00:00",
     "last_update_at": "2026-10-16T15:13:54+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בפעילויות השונות לא צוין במדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://english.almanar.com.lb/article/139062/",
       "published_at": "2026-10-16T15:13:54+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-launches-airstrikes-artillery-shelling-demolitions-in-southern-lebanon/4091177",
       "published_at": "2026-10-16T14:29:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://t.me/alexmehacarmel/48605",
       "published_at": "2026-10-16T14:23:17+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_580f17ced374fdc8",
       "url": "https://english.almanar.com.lb/article/139037/",
       "published_at": "2026-10-16T14:19:18+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://t.me/abualiexpress/132025",
       "published_at": "2026-10-16T14:01:54+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_076b8c45e2bc1e65",
       "url": "https://english.almanar.com.lb/article/139012/",
       "published_at": "2026-10-16T12:59:43+00:00"
      }
     ],
     "places": [
      {
       "name": "מיפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      },
      {
       "name": "כפר שובא, לבנון",
       "lat": 33.3277,
       "lon": 35.6927
      },
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      }
     ]
    },
    {
     "id": "NORTH-10162341-02",
     "title": "שיגור מיירטים לעבר מטרת שווא בדרום לבנון",
     "summary": "מערך ההגנה האווירית של צה\"ל שיגר מיירטים לעבר מטרה אווירית שזוהתה באזור פעילות הכוחות בדרום לבנון, ובהמשך התברר כי מדובר במטרת שווא. בהתאם למדיניות לא הופעלו התרעות בעורף.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T16:33:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:33:01+00:00",
     "last_update_at": "2026-10-16T16:59:04+00:00",
     "what_is_not_verified": "סוג המיירט המדויק ומאפייני הזיהוי השגוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132031",
       "published_at": "2026-10-16T16:59:04+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25392",
       "published_at": "2026-10-16T16:57:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132030",
       "published_at": "2026-10-16T16:34:57+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25391",
       "published_at": "2026-10-16T16:33:01+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-10162341-03",
     "title": "עימות בעקבות פשיטת כוחות ביטחון לבנוניים באזור הדאחייה בביירות",
     "summary": "פשיטה של כוחות החקירות הפליליות ברובע הדאחייה על מחסן הובילה למתיחות מול חמושים המזוהים עם חיזבאללה אשר הקיפו את הכוח, עד להתערבות צבא לבנון. חיזבאללה פרסם הבהרה שלפיה הפשיטה נעשתה בלא תיאום מוקדם המקובל עקב רגישות ביטחונית ואיומי ישראל, אך הפעילות הושלמה על פי צו משפטי ואין לארגון קשר למחסן.",
     "axis": "פנים לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T12:01:33+00:00",
     "last_update_at": "2026-10-16T19:25:39+00:00",
     "what_is_not_verified": "זהות המחסנאים המדויקת ותכולת המחסן שנבדק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_b7023bc8db5a8e52",
       "url": "https://english.almanar.com.lb/article/139092/",
       "published_at": "2026-10-16T19:25:39+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b7023bc8db5a8e52",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963227/hezbollah-clarifies-gallery-semaan-incident-denies-links-to-warehouse/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963227",
       "published_at": "2026-10-16T13:45:12+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b7023bc8db5a8e52",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963212/lebanese-army-intervenes-after-armed-hezbollah-members-surround-crimin/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963212",
       "published_at": "2026-10-16T12:01:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10162341-04",
     "title": "פעילות כוחות צה\"ל במחוז דרעא בדרום סוריה",
     "summary": "עשרה כלי רכב צבאיים של צה\"ל התקדמו לעבר אזור סכר במערב מחוז דרעא שבדרום סוריה. במקום נשמעו קולות ירי ובוצעו סריקות בבתים, בליווי גיחות מטוסי קרב באוויר.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T06:14:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T06:14:34+00:00",
     "last_update_at": "2026-10-16T06:14:34+00:00",
     "what_is_not_verified": "האם היו נפגעים או מעצרים בפעילות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/10-israeli-military-vehicles-advance-near-dam-in-southern-syria/4090511",
       "published_at": "2026-10-16T06:14:34+00:00"
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
     "id": "NORTH-10162341-05",
     "title": "חילופי האשמות בין ישראל לממשלת סוריה בנוגע לעדה הדרוזית בא-סווידאא",
     "summary": "ממשלת סוריה גינתה את דברי ראש ממשלת ישראל שטען כי התערב ומנע טבח בדרוזים ביולי 2025 באמצעות תקיפת משרד הביטחון ומתחם ארמון הנשיאות בדמשק ושיחה עם נשיא סוריה. דמשק טענה מנגד כי ישראל חימשה מיליציה לא חוקית כדי לערער את היציבות ולגרור את סוריה למלחמה. במקביל פורסמה בישראל הודעת תמיכה בנתניהו מצד מנהיג העדה הדרוזית.",
     "axis": "ישראל - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T08:33:25+00:00",
     "last_update_at": "2026-10-16T20:20:44+00:00",
     "what_is_not_verified": "עצם קיומה ותוכנה של שיחת הטלפון בין נתניהו לנשיא סוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132040",
       "published_at": "2026-10-16T20:20:44+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-rejects-israeli-politicisation-suweidas-druze",
       "published_at": "2026-10-16T17:04:39+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21639453",
       "published_at": "2026-10-16T08:33:25+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-10162341-06",
     "title": "ביקור ראש ממשלת קטר בביירות וקידום מיזמי אנרגיה בין קטר, לבנון וסוריה",
     "summary": "ראש ממשלת קטר נפגש בביירות עם נשיא לבנון ז'וזף עון ודן עמו בסיוע לייצוב המדינה, קידום פרויקטי חשמל ואספקת גז דרך סוריה בהיקף של עד שלושת אלפים מגה-וואט, לצד דרישה לנסיגת כוחות ישראל משטחי דרום לבנון ומסירתם לצבא לבנון. שר החוץ הלבנוני הביע רצון בכוח בינלאומי שיחליף את יוניפי\"ל.",
     "axis": "לבנון - סוריה - אזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:53:30+00:00",
     "last_update_at": "2026-10-16T21:35:48+00:00",
     "what_is_not_verified": "מועד החתימה הסופי על הסכם החשמל ואישורו בממשלת לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/qatar-seeks-to-activate-joint-energy-projects-with-lebanon-urges-israeli-withdrawal/4091562",
       "published_at": "2026-10-16T21:35:48+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139102/",
       "published_at": "2026-10-16T19:32:44+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/qatar-pm-beirut-lebanon-seeks-economic-relief-what-know",
       "published_at": "2026-10-16T14:03:57+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963219/sources-to-lbci-lebanon-qatar-move-forward-with-electricity-project-to/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963219",
       "published_at": "2026-10-16T12:53:30+00:00"
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
     "id": "NORTH-10162341-07",
     "title": "שלילת רישיון הבנק האיראני סאדראת בלבנון בעקבות לחץ אמריקאי",
     "summary": "הבנק המרכזי של לבנון ביטל את רישיונו של הבנק האיראני סאדראת שפעל במדינה, במטרה למנוע הטלת סנקציות כלכליות של ארצות הברית על המערכת הבנקאית הלבנונית, חרף הרגישות הפוליטית מול חיזבאללה.",
     "axis": "פנים לבנון - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:07:13+00:00",
     "last_update_at": "2026-10-16T17:07:13+00:00",
     "what_is_not_verified": "מידת ההשפעה של שלילת הרישיון על העברות כספים לחיזבאללה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/avoiding-sanctions-lebanon-revokes-bank-saderat-irans-license",
       "published_at": "2026-10-16T17:07:13+00:00"
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
     "id": "NORTH-10162341-08",
     "title": "דרישה אמריקאית לביטול חוק החרם על ישראל וקשיים בחידוש הטיסות הישירות",
     "summary": "מזכיר המדינה האמריקאי העלה בשיחה עם נשיא לבנון דרישה לבטל את חוק החרם על ישראל משנת 1955 כדי לקדם שלום, במקביל למאמצים לפירוק חיזבאללה מנשקו. במקביל, יוזמת נשיא ארצות הברית לחידוש טיסות ישירות לביירות נתקלת בקשיים בעקבות ממצאי סוכנות התעופה של האו\"ם לגבי ליקויים בטיחותיים בנמל התעופה הבינלאומי.",
     "axis": "לבנון - ארצות הברית - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T14:15:00+00:00",
     "last_update_at": "2026-10-16T21:48:05+00:00",
     "what_is_not_verified": "האם ממשלת לבנון תנקוט צעדים מעשיים לשינוי חוק החרם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
       "published_at": "2026-10-16T21:48:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
       "published_at": "2026-10-16T16:46:29+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963236/trump-move-to-restart-direct-us-flights-with-lebanon-hits-roadblock-re/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963236",
       "published_at": "2026-10-16T14:30:34+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963199/lebanons-1955-israel-boycott-law-why-is-the-us-raising-it-now/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963199",
       "published_at": "2026-10-16T14:15:00+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי רפיק אל-חרירי, ביירות, לבנון",
       "lat": 33.8185,
       "lon": 35.4909
      }
     ]
    },
    {
     "id": "NORTH-10162341-09",
     "title": "מחאת ראשי רשויות בצפון ישראל נגד קיצוץ תקציבי שיקום",
     "summary": "יושב ראש פורום קו העימות וראשי רשויות בגבול הצפון שלחו מכתב בהול לראש הממשלה בדרישה להחריג את תקציבי השיקום והביטחון של יישובי הגבול מהקיצוץ הממשלתי הרוחבי המתוכנן.",
     "axis": "ישראל - עורף צפוני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T14:59:43+00:00",
     "last_update_at": "2026-10-16T16:43:13+00:00",
     "what_is_not_verified": "האם הממשלה תיעתר לדרישה ותחריג את התקציבים בהצבעה הקרובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957728",
       "published_at": "2026-10-16T16:43:13+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1ck002j3fx",
       "published_at": "2026-10-16T14:59:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת נתניהו על שיחת טלפון ישירה בינו לבין נשיא סוריה אחמד א-שרע",
    "טענת סוריה כי ישראל חימשה מיליציה בלתי חוקית בא-סווידאא במטרה לגרור אותה למלחמה",
    "הדיווחים ברשתות החברתיות על ירידה בתמיכה הציבורית בחיזבאללה בקרב הקהילה השיעית בצור",
    "ההערכות בדבר עיכוב ודאי של טיסות ישירות מארצות הברית לביירות"
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
     "value": 3.0945,
     "unit": "ILS",
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות איומים ופגיעה בריכוזי אוכלוסייה של העדה הדרוזית בדרום סוריה",
      "הגנה על מרחב הפעולה של כוחות צה\"ל בדרום לבנון"
     ],
     "inferred": [
      "הפעלת לחץ צבאי רציף בדרום לבנון ובדרום סוריה לשיבוש התארגנות מחדש של חיזבאללה ושלוחים איראניים",
      "יצירת מנופי השפעה פוליטיים וצבאיים באזורי הגבול של סוריה"
     ],
     "forecast": [
      "המשך פשיטות נקודתיות וירי ארטילרי מעבר לגבול לשמירה על חופש פעולה",
      "החרפת המתיחות המילולית מול המשטר בדמשק"
     ]
    },
    {
     "actor": "לבנון (ממשל וצבא)",
     "declared": [
      "דרישה לנסיגת כוחות ישראל משטחי הדרום והעברתם לשליטת צבא לבנון",
      "קידום מיזמי אנרגיה עם קטר וחידוש טיסות בינלאומיות ישירות לשיקום הכלכלה",
      "החלפת כוח יוניפי\"ל בכוח בינלאומי אחר עם סיום המנדט"
     ],
     "inferred": [
      "ניסיון לאזן בין לחץ אמריקאי לנטרול חיזבאללה לבין שמירה על יציבות פנים-לבנונית ומניעת מלחמת אזרחים",
      "הגנה על מערכת הבנקאות המקומית מפני סנקציות בינלאומיות"
     ],
     "forecast": [
      "העמקת התלות הכלכלית בקטר לפתרון משבר האנרגיה באמצעות צינורות מסוריה",
      "המשך חיכוכים מקומיים במוקדי שליטת חיזבאללה בעת אכיפת חוק"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "שמירה על נהלי תיאום ביטחוני בדאחייה עקב איומי ביטחון ישראליים",
      "הכחשת מעורבות באחסון בלתי חוקי של סחורות ומחויבות לבריאות הציבור"
     ],
     "inferred": [
      "שימור מעמדו הצבאי והאזרחי בלבנון חרף ניסיונות אמריקאיים וממשלתיים לפגוע בהשפעתו",
      "הגנה על צירי פעילות ואספקה תחת מעטה של הסכמי ביטחון פנימיים"
     ],
     "forecast": [
      "התנגדות תקיפה לכל מהלך לפירוק נשקו או לשינוי חוקי החרם על ישראל",
      "ניסיון לבלום שחיקה נוספת במעמדו הציבורי בקרב הקהילה השיעית"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "הגנה על אחדות המרקם הלאומי ודחיית התערבות ישראל בענייני העדה הדרוזית בא-סווידאא",
      "האשמת ישראל בניסיון לערער את השלום האזרחי ולגרור את המדינה למלחמה אזורית"
     ],
     "inferred": [
      "בלימת השפעה ישראלית באזורי הגבול הדרומיים סמוך לדרעא וא-סווידאא",
      "השגת רווח כלכלי ומעמדי באמצעות שינוע חשמל וגז מקטר ללבנון דרך שטח סוריה"
     ],
     "forecast": [
      "המשך גינויים חריפים לתנועות צה\"ל בדרום המדינה תוך הימנעות מעימות צבאי כולל",
      "שיתוף פעולה עם יוזמות תשתית אזוריות לחיזוק הלגיטימציה של השלטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/139102/",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/qatar-seeks-to-activate-joint-energy-projects-with-lebanon-urges-israeli-withdrawal/4091562",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21639453",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963199/lebanons-1955-israel-boycott-law-why-is-the-us-raising-it-now/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963199",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132040",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48605",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25391",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957728",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1ck002j3fx",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T23:44:33+00:00",
  "changes": {
   "NORTH-10162341-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "דיווח על תקיפות ישראליות בעיירות בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10162341-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירט צה\"ל לעבר מטרת שווא בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10162341-03": {
    "kind": "new"
   },
   "NORTH-10162341-04": {
    "kind": "new"
   },
   "NORTH-10162341-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרות ראש ממשלת ישראל על בלימת פגיעה בדרוזים בדרום סוריה",
    "score": 0.817
   },
   "NORTH-10162341-06": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ביקור רשמי של ראש ממשלת קטאר בלבנון",
    "score": 1.0
   },
   "NORTH-10162341-07": {
    "kind": "possible",
    "prev": "לחץ אמריקני על נשיא לבנון בעניין מטעני הנפץ ודרישה לבלימת תקיפות ישראל",
    "score": 0.633
   },
   "NORTH-10162341-08": {
    "kind": "new"
   },
   "NORTH-10162341-09": {
    "kind": "new"
   }
  }
 }
};
