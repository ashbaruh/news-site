/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-13T0959__yemen-202610130959.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-13T09:59:16+00:00",
   "window": {
    "from": "2026-10-12T09:59:16+00:00",
    "to": "2026-10-13T09:59:16+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610130959"
   },
   "summary": "העימות בין החות'ים לסעודיה החריף באופן דרמטי בעקבות תקיפות טילים קטלניות על נמל התעופה הבינלאומי בריאד, שהובילו להשבתת טיסות, נזק כלכלי כבד ואיומים סעודיים בתגובה חריפה. במקביל, נמשכת הלחימה הקרקעית בתוך תימן בדגש על העיר תעז והפלת כלי טיס בגבול, כאשר החות'ים מאיימים לפגוע במטרות אמריקאיות אם וושינגטון תתערב. הזירה הימית סביב באב אל-מנדב ממשיכה לשבש נתיבי סחר בינלאומיים ולפגוע בהכנסות מצרים, המובילה מגעים להגשת סיוע צבאי לממלכה.",
   "fronts": [
    {
     "name": "חזית תימן - סעודיה (עורף סעודי ויעדי תעופה)",
     "status": "הסלמה חריפה הכוללת פגיעות ישירות בריאד, נפגעים ושיבוש תעופתי נרחב"
    },
    {
     "name": "חזית פנים-תימנית (תעז וסעדה)",
     "status": "לחימה פעילה, הפגזות מוקדי שלטון ובתי חולים והפלת כטב\"מים"
    },
    {
     "name": "חזית מצר באב אל-מנדב והים האדום",
     "status": "שיבוש נתיבי שיט ופגיעה כלכלית בהכנסות תעלת סואץ"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10130959-01",
     "title": "מתקפות טילים וכטב\"מים של החות'ים על נמל התעופה הבינלאומי בריאד ושיבוש התעופה",
     "summary": "החות'ים שיגרו סדרת טילים שפגעו בנמל התעופה הבינלאומי בריאד, גרמו להרוגים ולפצועים רבים והובילו לסגירת הנמל ולהשעיית טיסות בינלאומיות לסעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T09:11:20+00:00",
     "last_update_at": "2026-10-13T09:19:23+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל המדויק מדווח באופן שונה בין המקורות (בין 13 ל-18 הרוגים), וכן דיווחים על שריפה נוספת שטרם אומתו רשמית.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/airlines-suspend-flights-to-riyadh-amid-security-fears",
       "published_at": "2026-10-13T09:19:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-640",
       "published_at": "2026-10-13T06:48:13+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cjly0zqq27e4o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-13T04:30:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-warning-system-stayed-silent-deadly-airport-attacks",
       "published_at": "2026-10-12T23:46:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131809",
       "published_at": "2026-10-12T19:26:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131798",
       "published_at": "2026-10-12T16:25:24+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-mbs-shuttling-between-bunker-palaces-amid-houthi-attacks",
       "published_at": "2026-10-12T16:09:26+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/12/saudi-arabia-suspends-flights-latest-deadly-houthi-attack-airport",
       "published_at": "2026-10-12T15:42:37+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/oct/12/cctv-riyadh-airport-footage-deadly-airstrike-saudi-arabia-video",
       "published_at": "2026-10-12T09:11:20+00:00"
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
     "id": "YEMEN-10130959-02",
     "title": "יירוט שני טילים בליסטיים ששוגרו לעבר ח'מיס מושיט",
     "summary": "הקואליציה יירטה והשמידה שני טילים בליסטיים ששיגרו החות'ים לעבר העיר ח'מיס מושיט בסעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T21:16:16+00:00",
     "last_update_at": "2026-10-12T21:16:16+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ee4a548f8fa52109",
       "url": "https://www.sabanew.net/viewstory/153880",
       "published_at": "2026-10-12T21:16:16+00:00"
      }
     ],
     "places": [
      {
       "name": "ח'מיס מושיט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10130959-03",
     "title": "הפלת כטב\"ם סיור חמוש סעודי במחוז סעדה",
     "summary": "דובר הכוחות החות'יים הודיע כי כוחותיהם הפילו כטב\"ם סיור ותקיפה סעודי בצפון תימן.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T04:43:11+00:00",
     "last_update_at": "2026-10-13T06:48:13+00:00",
     "what_is_not_verified": "ההפלה נסמכת על טענת דובר החות'ים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-640",
       "published_at": "2026-10-13T06:48:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-have-downed-saudi-drone-yemens-saada",
       "published_at": "2026-10-13T04:43:11+00:00"
      }
     ],
     "places": [
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-10130959-04",
     "title": "הפגזות ותקיפות של החות'ים בעיר תעז ופגיעה בבית חולים",
     "summary": "תקיפות והפגזות של החות'ים בעיר תעז פגעו באזרחים ובמבנה בית החולים א-ספווה והסבו נזק לנפש ולרכוש.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T02:54:55+00:00",
     "last_update_at": "2026-10-13T06:48:13+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_aac9655aa8d9ada8",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-640",
       "published_at": "2026-10-13T06:48:13+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_aac9655aa8d9ada8",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-attacks-reportedly-kill-least-five-yemens-taiz-hospital-hit",
       "published_at": "2026-10-13T05:14:32+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_aac9655aa8d9ada8",
       "url": "https://www.sabanew.net/viewstory/153884",
       "published_at": "2026-10-13T03:11:45+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3bbaee60c5e9adbc",
       "url": "https://www.sabanew.net/viewstory/153883",
       "published_at": "2026-10-13T03:03:00+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_cf0e7485c3b0f285",
       "url": "https://www.sabanew.net/viewstory/153882",
       "published_at": "2026-10-13T02:54:55+00:00"
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
     "id": "YEMEN-10130959-05",
     "title": "תקיפות אוויריות במחוזות חודיידה ועמראן בתימן",
     "summary": "ערוץ אל-מסירה המזוהה עם החות'ים דיווח על ארבע תקיפות מן האוויר נגד יעדים במחוזות חודיידה ועמראן.",
     "axis": "תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T06:48:13+00:00",
     "last_update_at": "2026-10-13T06:48:13+00:00",
     "what_is_not_verified": "זהות הגורם התוקף אינה מצוינת בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-640",
       "published_at": "2026-10-13T06:48:13+00:00"
      }
     ],
     "places": [
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "עמראן, תימן",
       "lat": 15.6628,
       "lon": 43.943
      }
     ]
    },
    {
     "id": "YEMEN-10130959-06",
     "title": "אזהרת בכיר חות'י מפני מעורבות אמריקאית ואיומים על מתקני נפט ותעופה סעודיים",
     "summary": "חבר הלשכה המדינית של החות'ים, מוחמד אל-בוח'יתי, הזהיר מתגובה קשה אם ארצות הברית תתערב בלחימה בתימן, וקרא להתרחק מנמלי תעופה ומתקני נפט סעודיים בהגדירו אותם כמטרות לגיטימיות.",
     "axis": "ארצות הברית - תימן / סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T14:42:39+00:00",
     "last_update_at": "2026-10-12T19:42:01+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthi-official-warns-of-swift-painful-response-if-us-enters-yemen-war",
       "published_at": "2026-10-12T19:42:01+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-official-warns-swift-painful-response-if-us-enters",
       "published_at": "2026-10-12T14:42:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10130959-07",
     "title": "הצעת תיווך איראנית בין סעודיה לחות'ים וטענה לסירוב להפסקת אש",
     "summary": "שר החוץ האיראני הציע לסעודיה לפעול להסדר מדיני ולתווך מול החות'ים, בעוד גורמים חות'יים טענו כי סירבו לבקשה סעודית להפסקת אש שהועברה דרך איראן.",
     "axis": "דיפלומטיה אזורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T23:51:24+00:00",
     "last_update_at": "2026-10-13T04:57:30+00:00",
     "what_is_not_verified": "טענת החות'ים לגבי בקשת הפסקת האש הסעודית לא אומתה על ידי גורם רשמי סעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-offers-mediate-saudi-houthi-conflict-escalates",
       "published_at": "2026-10-13T04:57:30+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48498",
       "published_at": "2026-10-12T23:51:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10130959-08",
     "title": "הצהרת מצרים על נכונות להענקת סיוע צבאי לסעודיה ופגיעה בתעלת סואץ",
     "summary": "שר החוץ המצרי הצהיר על נכונות מלאה להיענות לכל בקשת סיוע צבאי מסעודיה, וציין כי המצב במצר באב אל-מנדב פוגע בהכנסות תעלת סואץ.",
     "axis": "מצרים - סעודיה / ים סוף",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T07:40:48+00:00",
     "last_update_at": "2026-10-13T07:40:48+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131824",
       "published_at": "2026-10-13T07:40:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10130959-09",
     "title": "חשיפת מערכת יירוט ישראלית לטילים היפר-סוניים",
     "summary": "חברת רפאל הציגה בוושינגטון דגם של מערכת יירוט המיועדת להתמודד עם טילים היפר-סוניים, על רקע התרברבות איראנית וחות'ית בהחזקת נשק מסוג זה.",
     "axis": "ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T09:47:45+00:00",
     "last_update_at": "2026-10-13T09:47:45+00:00",
     "what_is_not_verified": "בישראל לא מאמתים האם יכולת הטילים ההיפר-סוניים אכן מצויה בידי החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/ryosmuosfl",
       "published_at": "2026-10-13T09:47:45+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    }
   ],
   "not_verified": [
    "מספר ההרוגים המדויק מפגיעות הטילים בריאד (דיווחים נעים בין 13 ל-18 הרוגים).",
    "טענת החות'ים על פנייה סעודית דרך איראן להפסקת אש לחודש.",
    "החזקת טילים היפר-סוניים מבצעיים בידי החות'ים.",
    "דיווחים על שריפה חדשה סמוך לנמל התעופה בריאד מעבר לפגיעות הידועות.",
    "דיווחים על תנועות יורש העצר הסעודי בין ארמונות ממוגנים."
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
     "value": 3.0695,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "הגדרת שדות תעופה ומתקני נפט סעודיים כמטרות לגיטימיות",
      "תגובה כואבת ומהירה נגד אינטרסים אמריקאיים אם ארצות הברית תתערב בלחימה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומורלי כבד על ההנהגה הסעודית להפסקת הלחימה",
      "ביסוס מעמד ככוח אזורי המאיים על נתיבי סחר ומרכזים אסטרטגיים"
     ],
     "forecast": [
      "המשך שיגורי טילים וכטב\"מים לעבר יעדי תשתית ותעופה בסעודיה",
      "החרפת האיומים על נתיבי שיט וסחר במקרה של מעורבות אמריקאית ישירה"
     ]
    },
    {
     "actor": "ערב הסעודית",
     "declared": [
      "מתן תגובה רצינית וחריפה לתקיפות החות'ים על שדות התעופה",
      "יירוט והשמדת איומים אוויריים לעבר ערי הממלכה"
     ],
     "inferred": [
      "ניסיון לייצב את ההגנה האווירית על רקע שחיקת מלאי המיירטים",
      "בחינת סיוע בינלאומי ואזורי (כולל מארצות הברית, מצרים וטורקיה) להתמודדות עם האיום"
     ],
     "forecast": [
      "אפשרות להגברת תקיפות התגובה האוויריות בתימן לצד בחינת נתיבים מדיניים"
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "נכונות מלאה להיענות לכל בקשת סיוע צבאי מסעודיה",
      "הצבעה על הפגיעה בהכנסות תעלת סואץ בשל המשבר בבאב אל-מנדב"
     ],
     "inferred": [
      "אינטרס עליון לייצב את נתיבי השיט בים סוף ולהגן על המקורות הכלכליים של תעלת סואץ"
     ],
     "forecast": [
      "הידוק התיאום הביטחוני והימי עם סעודיה להגנת נתיבי השיט"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-warning-system-stayed-silent-deadly-airport-attacks",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cjly0zqq27e4o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/houthi-official-warns-of-swift-painful-response-if-us-enters-yemen-war",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/oct/12/cctv-riyadh-airport-footage-deadly-airstrike-saudi-arabia-video",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-offers-mediate-saudi-houthi-conflict-escalates",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthi-official-warns-swift-painful-response-if-us-enters",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153882",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131824",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48498",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/ryosmuosfl",
     "accessed_at": "2026-10-13T09:59:16+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-12T20:05:07+00:00",
  "changes": {
   "YEMEN-10130959-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "השבתת נמל התעופה בריאד וביטולי טיסות בינלאומיות",
    "score": 1.0
   },
   "YEMEN-10130959-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מתקפות טילים וכטב\"מים על שדה התעופה בריאד ובסיס ח'מיס מושיט",
    "score": 1.0
   },
   "YEMEN-10130959-03": {
    "kind": "new"
   },
   "YEMEN-10130959-04": {
    "kind": "possible",
    "prev": "הפגזה חות'ית על שכונות מגורים בתעז",
    "score": 0.633
   },
   "YEMEN-10130959-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות אוויריות נרחבות של סעודיה בתימן",
    "score": 0.65
   },
   "YEMEN-10130959-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אזהרת בכיר חות'י מפני מעורבות אמריקאית ישירה",
    "score": 1.0
   },
   "YEMEN-10130959-07": {
    "kind": "new"
   },
   "YEMEN-10130959-08": {
    "kind": "possible",
    "prev": "דחיית סיוע ישראלי בסוגיית תימן על ידי סעודיה",
    "score": 0.467
   },
   "YEMEN-10130959-09": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-13T0943__iran-202610130943.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-13T09:43:16+00:00",
   "window": {
    "from": "2026-10-12T09:43:16+00:00",
    "to": "2026-10-13T09:43:16+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610130943"
   },
   "summary": "העימות באזור נמשך במספר חזיתות, הכוללות תקיפות של החות'ים בגיבוי איראן נגד מתקנים ותשתיות בסעודיה, לצד מתיחות גוברת בין איראן לבין ארה\"ב וישראל הכוללת האשמות בריטיות נגד משמרות המהפכה על מעורבות במזימות טרור. כל זאת מלווה באיומי איראן להרחבת הלחימה למדינות שכנות, פגיעה בכלכלה האזורי עקב שיבושי סחר ונפט, וחילופי אמירות פומביות בין מנהיגים.",
   "fronts": [
    {
     "name": "החזית הימית ומפרץ פרסי",
     "status": "פעילה עם איומים על כבלי תקשורת ואוניות מסחר"
    },
    {
     "name": "חזית סעודיה-תימן",
     "status": "הסלמה משמעותית ותקיפות אוויריות חוזרות על נמלי תעופה בסעודיה"
    },
    {
     "name": "חזית איראן מול ארה\"ב וישראל",
     "status": "מתיחות צבאית, איומים הדדיים ופעולות סיכול"
    }
   ],
   "events": [
    {
     "id": "IRAN-10130943-01",
     "title": "תקיפות נגד נמל התעופה הבינלאומי בקיאד ח'אליד בריאד",
     "summary": "סדרה של תקיפות קטלניות פגעה בנמל התעופה הבינלאומי בריאד וגרמה להרוגים ופצועים רבים, מה שהביא להשעיית טיסות ולסגירת מתקני נמל התעופה.",
     "axis": "ציר איראן-תימן מול סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T08:41:12+00:00",
     "last_update_at": "2026-10-12T23:46:28+00:00",
     "what_is_not_verified": "הזהות המדויקת של האמצעים ששימשו את החות'ים בכל אחת מהפגיעות לא פורטה באופן רשמי מלא מעבר לייחוס הכללי",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_611294d7d6503ff6",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-warning-system-stayed-silent-deadly-airport-attacks",
       "published_at": "2026-10-12T23:46:28+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_611294d7d6503ff6",
       "url": "https://www.france24.com/en/houthis-are-thriving-and-surviving-by-creating-war-yemen-ambassador-says",
       "published_at": "2026-10-12T19:08:05+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_611294d7d6503ff6",
       "url": "https://www.france24.com/en/saudi-arabia-riyadh-airport-struck-again-by-yemen-s-houthis",
       "published_at": "2026-10-12T09:21:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_44084f050ed61cb8",
       "url": "https://www.theguardian.com/world/video/2026/oct/12/cctv-riyadh-airport-footage-deadly-airstrike-saudi-arabia-video",
       "published_at": "2026-10-12T09:11:20+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_611294d7d6503ff6",
       "url": "https://www.france24.com/en/middle-east/20261012-live-saudi-arabia-extends-suspension-of-operations-at-riyadh-airport-after-deadly-houthi-attacks",
       "published_at": "2026-10-12T08:41:12+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי קיאד ח'אליד, ריאד, סעודיה",
       "lat": 24.9586,
       "lon": 46.711
      }
     ]
    },
    {
     "id": "IRAN-10130943-02",
     "title": "זימון שגריר איראן בלונדון בעקבות תקרית בבסיס פיירפורד",
     "summary": "בריטניה זימנה את שגריר איראן לאחר שראש ממשלת בריטניה הצהיר כי משמרות המהפכה האיראניים הכוונו ככל הנראה מזימה נגד בסיס חיל האוויר המלכותי פיירפורד.",
     "axis": "ציר איראן מול בריטניה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T15:46:28+00:00",
     "last_update_at": "2026-10-12T17:35:37+00:00",
     "what_is_not_verified": "איראן דחתה את ההאשמות וטענה כי אין לה קשר לתקרית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_irna",
       "url": "https://t.me/alexmehacarmel/48478",
       "published_at": "2026-10-12T17:35:37+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_irna",
       "url": "https://www.al-monitor.com/originals/2026/10/british-airbase-plot-almost-certainly-directed-iran-guards-uk-pm",
       "published_at": "2026-10-12T17:30:20+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_irna",
       "url": "https://www.al-monitor.com/originals/2026/10/uk-pm-burnham-says-irans-irgc-likely-behind-raf-fairford-incident",
       "published_at": "2026-10-12T15:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס חיל האוויר פיירפורד, אנגליה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-10130943-03",
     "title": "ביקור מנכ\"ל סוכנות הידיעות האיראנית לאמרד",
     "summary": "מנכ\"ל סוכנות הידיעות האיראנית ביקש באזורים שנפגעו בקמפיין ההפצצות באזור לאמרד.",
     "axis": "ציר איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:30:24+00:00",
     "last_update_at": "2026-10-13T08:30:24+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים המדויקים בתקיפות לא צוינו בפירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_91c8473bd82f0081",
       "url": "https://en.irna.ir/news/86291444/IRNA-chief-visits-sites-of-deadly-US-Israeli-airstrikes-on-Iran-s",
       "published_at": "2026-10-13T08:30:24+00:00"
      }
     ],
     "places": [
      {
       "name": "לאמרד, איראן",
       "lat": 27.3334,
       "lon": 53.1816
      }
     ]
    },
    {
     "id": "IRAN-10130943-04",
     "title": "הערכת קרן המטבע הבינלאומית על התכווצות הכלכלה בסעודיה ובאזור",
     "summary": "קרן המטבע הבינלאומית דיווחה כי סעודיה ומדינות נוספות באזור צפויות להתמודד עם התכווצות כלכלית עקב המלחמה ושיבושים במפרץ ובמיצר הורמוז.",
     "axis": "ציר אזורי כלכלי-מדיני",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T05:59:48+00:00",
     "last_update_at": "2026-10-13T09:30:23+00:00",
     "what_is_not_verified": "הנתונים הם תחזית כלכלית בלבד לשנה הנוכחי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_imf_world_economic_outlook_report",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-arabia-faces-economic-contraction-war-woes-mount",
       "published_at": "2026-10-13T09:30:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_imf_world_economic_outlook_report",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-640",
       "published_at": "2026-10-13T06:48:13+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_imf_world_economic_outlook_report",
       "url": "https://www.aljazeera.com/economy/2026/10/13/middle-east-and-central-asias-economy-to-shrink-in-2026-amid-war-imf-says?traffic_source=rss",
       "published_at": "2026-10-13T05:59:48+00:00"
      }
     ],
     "places": [
      {
       "name": "מיצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    }
   ],
   "not_verified": [
    "טענות החות'ים כי ערב הסעודית ביקשה דרך איראן הפסקת אש לחודש ושהם סירבו לכך",
    "הדיווחים שלפיהם איראן שוקלת פלישה קרקעית למדינות שכנות במקרה של תקיפה אמריקאית מחודשת",
    "טענות על מעורבות בפועל של רוסיה וסין בסיוע לאיראן שנדחו על ידי טראמפ"
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
     "value": 3.0695,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על האינטרסים של הרפובליקה האיסלאמית והיערכות לחידוש הלחימה",
      "קריאה לפתרונות פוליטיים ומניעת צעדים חד-צדדיים בכלכלה העולמית"
     ],
     "inferred": [
      "שמירה על רשת השלוחים באזור להפעלת לחץ על יריבותיה",
      "הרתיעה של ארה\"ב וישראל באמצעות איומים על תשתיות אזוריות וכבלי תקשורת"
     ],
     "forecast": [
      "המשך שימוש בשלוחים לתקיפת תשתיות במפרץ",
      "הגברת הלוחמה הפסיכולוגית והדיפלומטית מול מדינות המערב"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת השגת נשק גרעיני על ידי איראן",
      "בחינת אפשרויות תגובה נוספות באזור"
     ],
     "inferred": [
      "הגנה על בעלות הברית במפרץ ובחינת גבולות ההסלמה מול הנהגת טהרן",
      "ניסיון להעריך מחדש את יעילות תקיפת הנהגת איראן"
     ],
     "forecast": [
      "המשך תגבור כוחות במזרח התיכון",
      "שמירה על סנקציות ולחץ כלכלי ומדיני על טהרן"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "עצירת תכנית הגרעין האיראנית",
      "פגיעה בתכנית הטילים וניתוק הקשר בין איראן לחיזבאללה"
     ],
     "inferred": [
      "החלשת ציר ההתנגדות בראשות איראן בכל הזירות",
      "פעילות מתמשכת לסיכול תשתיות טרור ופח\"ע"
     ],
     "forecast": [
      "המשך היערכות מבצעית מול שלוחיה של איראן",
      "שמירה על חופש פעולה צבאי במרחב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/economy/2026/10/13/middle-east-and-central-asias-economy-to-shrink-in-2026-amid-war-imf-says?traffic_source=rss",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-arabia-faces-economic-contraction-war-woes-mount",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261012-live-saudi-arabia-extends-suspension-of-operations-at-riyadh-airport-after-deadly-houthi-attacks",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/oct/12/cctv-riyadh-airport-footage-deadly-airstrike-saudi-arabia-video",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86291444/IRNA-chief-visits-sites-of-deadly-US-Israeli-airstrikes-on-Iran-s",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-640",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48478",
     "accessed_at": "2026-10-13T09:43:16+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-12T19:58:47+00:00",
  "changes": {
   "IRAN-10130943-01": {
    "kind": "possible",
    "prev": "מתקפות טילים וכטב\"מים של החות'ים לעבר יעדים בסעודיה",
    "score": 0.4
   },
   "IRAN-10130943-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "איראן מכחישה מעורבות בתקרית בבסיס פיירפורד ומביעה נכונות לסייע בחקירה",
    "score": 1.0
   },
   "IRAN-10130943-03": {
    "kind": "new"
   },
   "IRAN-10130943-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-13T0954__ukraine-202610130954.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-13T09:54:34+00:00",
   "window": {
    "from": "2026-10-12T09:54:34+00:00",
    "to": "2026-10-13T09:54:34+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610130954"
   },
   "summary": "העימות הצבאי בין רוסיה לאוקראינה מתאפיין בהמשך לחימה עצימה בקווי המגע הקרקעיים לצד מתקפות אוויריות רוסיות רחבות היקף על ערים, מבני מגורים ותשתיות אזרחיות ברחבי אוקראינה. מנגד, הכוחות האוקראיניים יוזמים פעולות התקפיות בגזרה הדרומית ומשגרים כטב\"מים לעבר מתקנים צבאיים ומרכזי נתונים בעומק השטח הרוסי. במקביל, מאמצים דיפלומטיים אמריקאיים לקדם הפסקת אש בתחום האנרגיה ועסקאות דלק נתקלים בחוסר הסכמה, בעוד תקיפות ימיות בלתי מזוהות בים השחור מגבירות את המתיחות האזורית.",
   "fronts": [
    {
     "name": "גזרת וליקה נובוסילקה ונובופבליבקה (דרום)",
     "status": "פעולות התקפיות של כוחות מוצנחים אוקראיניים מול מגננה רוסית והתקדמות מקומית לא מוגדרת"
    },
    {
     "name": "מחוז חרקוב",
     "status": "הפגזות ותקיפות אוויריות רוסיות מתמשכות על תשתיות ומבני מגורים"
    },
    {
     "name": "אגן הים השחור",
     "status": "פגיעות כטב\"מים באוניות מסחר אזרחיות סמוך למים הטריטוריאליים של בולגריה"
    },
    {
     "name": "עומק השטח הרוסי (קורסק, בריאנסק, מחוזות מרכזיים)",
     "status": "תקיפות כטב\"מים אוקראיניות על מטרות צבאיות, מרכזי נתונים ומערכות לוגיסטיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10130954-01",
     "title": "מתקפה נרחבת של כטב\"מים וטילים רוסיים על שטח אוקראינה",
     "summary": "חיל האוויר האוקראיני דיווח על שיגור חמישה טילים בליסטיים, 108 כטב\"מים תוקפים, רחפני הטעיה ותשעה טילי שיוט במהלך הלילה, שגרמו לעשרה הרוגים ועשרות פצועים ברחבי המדינה.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T05:59:00+00:00",
     "last_update_at": "2026-10-13T09:27:31+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזקים הכולל לא אומת באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-attacks-kill-at-least-10-injure-74-across-ukraine-over-past-day-as-moscow-hits-homes-railway-infrastructure/",
       "published_at": "2026-10-13T09:27:31+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173801-adf-neutralizes-88-russian-drones-used-to-attack-ukraine-overnight.html",
       "published_at": "2026-10-13T05:59:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10130954-02",
     "title": "פגיעות קטלניות בתשתיות ובמבני מגורים בחרקוב",
     "summary": "תקיפות רוסיות על מבני מגורים ותשתיות תחבורה בחרקוב גבו את חייהם של לפחות ארבעה אזרחים והביאו לפציעתם של עשרות.",
     "axis": "צפון-מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T21:08:31+00:00",
     "last_update_at": "2026-10-13T08:41:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק מהתקיפות האחרונות טרם הוברר סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057761/",
       "published_at": "2026-10-13T08:41:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173828-russian-attacks-on-kharkiv-region-leave-four-killed-more-than-50-injured-over-past-day.html",
       "published_at": "2026-10-13T07:21:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48493",
       "published_at": "2026-10-12T21:08:31+00:00"
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
     "id": "UKRAINE-10130954-03",
     "title": "פגיעת כטב\"ם במוסד חינוכי בריבנה",
     "summary": "כטב\"ם פגע במבנה חינוכי במרכז העיר ריבנה, גרם לנזק כבד והביא לפציעתם של אזרחים.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:00:00+00:00",
     "last_update_at": "2026-10-13T08:00:00+00:00",
     "what_is_not_verified": "מספר הנפגעים ומצבם הרפואי אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057757/",
       "published_at": "2026-10-13T08:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ריבנה, אוקראינה",
       "lat": 50.6196,
       "lon": 26.2513
      }
     ]
    },
    {
     "id": "UKRAINE-10130954-04",
     "title": "נפילת שברי כטב\"ם על בית מגורים בקייב",
     "summary": "שרידי כטב\"ם שיורט נפלו על שטח בית מגורים פרטי ברובע דרניצקי שבבירה קייב וגרמו לפציעת אישה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T06:58:00+00:00",
     "last_update_at": "2026-10-13T06:58:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173812-drone-debris-falls-on-private-house-in-kyivs-darnytskyi-district-woman-injured.html",
       "published_at": "2026-10-13T06:58:00+00:00"
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
     "id": "UKRAINE-10130954-05",
     "title": "תקיפות אוקראיניות על מתקנים צבאיים ולוגיסטיים בעומק רוסיה ובשטחים הכבושים",
     "summary": "הצבא האוקראיני דיווח על פגיעה בבסיס תיקונים למערכות איסקנדר במחוז קורסק, בתחנת מכ\"ם במחוז בריאנסק, וכן במאגרי דלק ותחמושת בלוהנסק ובריכוזי כוחות בחזיתות שונות.",
     "axis": "עומק רוסיה וקו החזית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:52:00+00:00",
     "last_update_at": "2026-10-13T08:52:00+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למתקנים לא אומתה ממקורות עצמאיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057766/",
       "published_at": "2026-10-13T08:52:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10130954-06",
     "title": "שיבוש פעילות שרתי יאנדקס בעקבות תקיפות כטב\"מים אוקראיניים",
     "summary": "חברת יאנדקס הרוסית דיווחה על שיקום חלקי של שירותי התשלומים שלה בעקבות תקיפות כטב\"מים אוקראיניים שפגעו בשלושה מרכזי נתונים של החברה.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T07:28:47+00:00",
     "last_update_at": "2026-10-13T09:16:27+00:00",
     "what_is_not_verified": "הטענה בדבר צניחת תעמולה ברשתות החברתיות עקב הפגיעה אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_c7b87365a8af0f15",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21613390",
       "published_at": "2026-10-13T09:16:27+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_c7b87365a8af0f15",
       "url": "https://meduza.io/en/news/2026/10/13/yandex-pay-partially-resumes-operations-after-ukrainian-drone-strikes-on-data-centers",
       "published_at": "2026-10-13T07:28:47+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאזאן, רוסיה",
       "lat": 54.6296,
       "lon": 39.7425
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
     "id": "UKRAINE-10130954-07",
     "title": "סיכול ניסיון תקיפה בבסיס חיל האוויר הרוסי בוורונז'",
     "summary": "שירות הביטחון הפדרלי של רוסיה טען כי סיכל פעולת חבלה אוקראינית שתוכננה לפגוע באמצעות כטב\"מים בשדה התעופה הצבאי בלטימור.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T09:19:34+00:00",
     "last_update_at": "2026-10-13T09:19:34+00:00",
     "what_is_not_verified": "פרטי ניסיון הסיכול והיקפו לא אומתו מגורם חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_2748293c2646aec8",
       "url": "https://tass.com/society/2201279",
       "published_at": "2026-10-13T09:19:34+00:00"
      }
     ],
     "places": [
      {
       "name": "וורונז', רוסיה",
       "lat": 51.68,
       "lon": 39.1837
      }
     ]
    },
    {
     "id": "UKRAINE-10130954-08",
     "title": "תקיפת כטב\"מים על אוניות מסחר בים השחור סמוך לבולגריה",
     "summary": "שתי אוניות מסחר הותקפו באמצעות כטב\"מים במים הסמוכים לבולגריה, כאשר אחת מהן טבעה ומספר אנשי צוות נפצעו; אוקראינה ובולגריה האשימו את רוסיה בפגיעה בחופש השיט.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:19:06+00:00",
     "last_update_at": "2026-10-13T08:38:00+00:00",
     "what_is_not_verified": "זהות משגרי הכטב\"מים טרם הוכחה בראיות חד-משמעיות לפי ראש ממשלת בולגריה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057760/",
       "published_at": "2026-10-13T08:38:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/absolutely-unacceptable-commercial-vessel-hit-by-drones-near-bulgarias-black-sea-coast-says-prime-minister-radev/",
       "published_at": "2026-10-13T08:22:53+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/13/drones-attack-two-cargo-ships-off-bulgaria-s-coast-one-ukrainian-owned-sofia-plans-to-summon-russian-ambassador",
       "published_at": "2026-10-13T08:19:06+00:00"
      }
     ],
     "places": [
      {
       "name": "הים השחור, בולגריה",
       "lat": 42.7088,
       "lon": 27.7186
      }
     ]
    },
    {
     "id": "UKRAINE-10130954-09",
     "title": "לחימה קרקעית ופעולות התקפיות של אוקראינה בדרום",
     "summary": "דיווחים מצביעים על פעולות התקפיות של יחידות מוצנחות אוקראיניות בגזרת וליקה נובוסילקה מול כוחות רוסיים, לצד דיווח על מעל 200 התנגשויות קרביות לאורך החזית ביממה החולפת.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T23:15:34+00:00",
     "last_update_at": "2026-10-13T06:22:00+00:00",
     "what_is_not_verified": "היקף ההתקדמות המדויק של הכוחות האוקראיניים נותר לא ברור ולא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4173809-war-update-202-combat-engagements-on-front-line-over-past-day.html",
       "published_at": "2026-10-13T06:22:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48497",
       "published_at": "2026-10-12T23:15:34+00:00"
      }
     ],
     "places": [
      {
       "name": "וליקה נובוסילקה, אוקראינה",
       "lat": 47.8437,
       "lon": 36.8396
      }
     ]
    },
    {
     "id": "UKRAINE-10130954-10",
     "title": "מחלוקת סביב יוזמת הפסקת האש במתקני אנרגיה ועסקת הדיזל",
     "summary": "נשיא ארצות הברית טען לקיומו של הסכם להפסקת פגיעות באנרגיה, בעוד באוקראינה הכחישו סיכום מוקדם ודיווחו על המשך תקיפות רוסיות על מתקני חשמל; במקביל נמתחה ביקורת על עסקת אספקת סולר רוסי.",
     "axis": "דיפלומטיה בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T08:33:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-12T08:33:54+00:00",
     "last_update_at": "2026-10-13T07:48:24+00:00",
     "what_is_not_verified": "עצם קיומה של הסכמה רשמית בין הצדדים להפסקת אש אנרגטית אינו מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/13/reuters-witkoff-and-kushner-told-kyiv-that-a-diesel-deal-with-russia-would-help-bring-the-kremlin-back-to-the-negotiating-table",
       "published_at": "2026-10-13T07:48:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/trump-says-ukraine-russia-agree-to-energy-strike-ceasefire-because-i-said-they-agreed/",
       "published_at": "2026-10-13T03:16:54+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/13/ukraine-war-briefing-russian-diesel-exports-could-return-to-past-levels-after-trump-deal-moscow-claims",
       "published_at": "2026-10-13T02:22:53+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cvlyd4pdlwkxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-12T21:20:51+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/news/video/2026/oct/12/trump-rewards-putin-and-betrays-ukraine-with-russia-diesel-deal-the-latest",
       "published_at": "2026-10-12T17:14:59+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131767",
       "published_at": "2026-10-12T08:33:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10130954-11",
     "title": "תפיסת מכלית 'צי הצללים' הרוסי באוקיינוס ההודי",
     "summary": "הצי הצרפתי יירט באוקיינוס ההודי מכלית רוסית המשתייכת לצי הצללים, אשר שטה תחת דגל ברוא ונתונה לסנקציות בינלאומיות.",
     "axis": "הזירה הימית הבינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T01:27:05+00:00",
     "last_update_at": "2026-10-13T01:27:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/french-navy-intercepts-russian-shadow-fleet-tanker-in-indian-ocean/",
       "published_at": "2026-10-13T01:27:05+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף ההתקדמות הקרקעית המדויק של אוקראינה באזור וליקה נובוסילקה",
    "הדיווח לפיו ארצות הברית הפסיקה לחלוטין את העברת המידע המודיעיני לאוקראינה",
    "קיומה ותוקפה של הסכמה דו-צדדית רשמית על הפסקת אש במתקני אנרגיה",
    "זהות הגורם המבצע שעומד מאחורי תקיפות כלי השיט בים השחור סמוך לבולגריה",
    "מספר הנפגעים הכולל מתקיפות הכטב\"מים במחוז ריבנה",
    "טענות על השפעת תקיפת שרתי יאנדקס על היקף התעמולה ברשתות החברתיות"
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
     "value": 1.1181,
     "unit": "USD",
     "change_pct": -0.22,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "השגת יעדי המבצע הצבאי והשגת שליטה מלאה בשטחי דונבאס הנותרים",
      "חידוש יצוא הדלק והדיזל לשווקים הבינלאומיים והגעה להסדר כלכלי וביטחוני מול אירופה",
      "נכונות להפסקת אש זמנית אך ורק ביום הבחירות באוקראינה אם יוכרזו כאלה"
     ],
     "inferred": [
      "הפעלת לחץ מתמשך על העורף האוקראיני כדי לשחוק את כושר העמידה של האוכלוסייה לקראת החורף",
      "המשך שיבוש חופש השיט והייצוא הימי בים השחור"
     ],
     "forecast": [
      "המשך מיקוד המאמץ הצבאי לכיבוש יתרת חבל דונבאס תוך גרירת רגליים בנוגע להפסקת אש כוללת"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שלמות הטריטוריה ותגובה צבאית לפגיעות במערך האנרגיה הלאומי",
      "דרישה מהמערב להגביר את הסנקציות על רוסיה ולהבטיח את חופש השיט בים השחור",
      "התנגדות להסכמי נפט ודלק המעניקים לרוסיה הכנסות למימון המלחמה"
     ],
     "inferred": [
      "שחיקת הכלכלה והתשתיות הרוסיות באמצעות פגיעה במרכזי נתונים ובבסיסי לוגיסטיקה בעומק רוסיה",
      "ניסיון לבלום יוזמות מדיניות כפויות שאינן כוללות ערבויות ביטחוניות מלאות"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה אסימטריים בעומק רוסיה לצד מאבק להחזקת קווי ההגנה בחזית המזרחית והדרומית"
     ]
    },
    {
     "actor": "ארצות הברית (ממשל טראמפ והמתווכים)",
     "declared": [
      "כפיית הפסקת אש בתחום תשתיות האנרגיה בין שני הצדדים",
      "קידום עסקת אספקת סולר רוסי לשווקים הגלובליים להורדת מחירי האנרגיה והחזרת מוסקבה לשולחן המו\"מ"
     ],
     "inferred": [
      "הפעלת מנופי לחץ כלכליים ומדיניים על קייב כדי לבלום את הפגיעה בבתי זיקוק רוסיים",
      "ניסיון להציג הישגים דיפלומטיים מהירים גם ללא הסכמה מלאה ומעשית בשטח"
     ],
     "forecast": [
      "הגברת החיכוך המדיני מול אוקראינה ומול בעלות הברית באירופה סביב תנאי הפסקת האש"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cvlyd4pdlwkxo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/news/video/2026/oct/12/trump-rewards-putin-and-betrays-ukraine-with-russia-diesel-deal-the-latest",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21613390",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/french-navy-intercepts-russian-shadow-fleet-tanker-in-indian-ocean/",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/13/reuters-witkoff-and-kushner-told-kyiv-that-a-diesel-deal-with-russia-would-help-bring-the-kremlin-back-to-the-negotiating-table",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/13/8057760/",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/society/2201279",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131767",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48497",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4173809-war-update-202-combat-engagements-on-front-line-over-past-day.html",
     "accessed_at": "2026-10-13T09:54:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-12T20:00:03+00:00",
  "changes": {
   "UKRAINE-10130954-01": {
    "kind": "new"
   },
   "UKRAINE-10130954-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעת כטב\"ם במבנה מגורים בחרקוב",
    "score": 0.817
   },
   "UKRAINE-10130954-03": {
    "kind": "new"
   },
   "UKRAINE-10130954-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעת כטב\"ם רוסי בבניין מגורים בקייב",
    "score": 1.0
   },
   "UKRAINE-10130954-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות אוקראיניות על מרכזי נתונים ברוסיה",
    "score": 0.65
   },
   "UKRAINE-10130954-06": {
    "kind": "possible",
    "prev": "יירוט כטב\"מים אוקראיניים מעל שטח רוסיה",
    "score": 0.467
   },
   "UKRAINE-10130954-07": {
    "kind": "new"
   },
   "UKRAINE-10130954-08": {
    "kind": "new"
   },
   "UKRAINE-10130954-09": {
    "kind": "new"
   },
   "UKRAINE-10130954-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת וטענות להפרת הפסקת האש האנרגטית",
    "score": 1.0
   },
   "UKRAINE-10130954-11": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-13T1040__north-202610131040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-13T10:40:28+00:00",
   "window": {
    "from": "2026-10-12T10:40:28+00:00",
    "to": "2026-10-13T10:40:28+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610131040"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית ישראלית הכוללת תקיפות אוויריות והשמדת תשתיות תת-קרקעיות בדרום לבנון, לצד פשיטות קרקעיות נקודתיות בדרום סוריה. במקביל, בצפון ישראל ממשיכים מטעני נפלי מצרר מהלחימה לגבות מחיר בחיי אדם, בעוד בלבנון חיזבאללה מקדם תוכניות סיוע כספי לעקורים וממשלת לבנון מנסה לקדם פירוק מנשק בלתי מורשה. בסוריה מתנהלים מאמצי התייצבות מנהליים ומשפטיים תחת השלטון החדש, לצד גינויים דיפלומטיים מטורקיה נגד פעילות צה\"ל במדינה.",
   "fronts": [
    {
     "name": "גבול ישראל - לבנון",
     "status": "לחימה מוגבלת, תקיפות אוויריות ישראליות, השמדת תשתיות קרקעיות וסיכון מתמשך מנפלים."
    },
    {
     "name": "דרום סוריה",
     "status": "פשיטות ומעצרים ישראליים נקודתיים, ומתיחות מדינית מול טורקיה סביב הסכם הפרדת הכוחות."
    },
    {
     "name": "לבנון (פנים)",
     "status": "מתיחות סביב הברחות נשק, מאמצי שיקום של חיזבאללה ומאבק ממשלתי להגבלת הנשק לכוחות המדינה בלבד."
    },
    {
     "name": "סוריה (פנים)",
     "status": "התארגנות שלטונית חדשה, רפורמות כלכליות ומשפטי מעבר לבכירי המשטר הקודם."
    }
   ],
   "events": [
    {
     "id": "NORTH-10131040-01",
     "title": "פיצוץ נפל פצצת מצרר ברכס רמים",
     "summary": "נפל של פצצת מצרר ששיגר חיזבאללה בעבר התפוצץ במהלך טיול שנתי של תלמידים ברכס רמים סמוך למצפה פאר, וכתוצאה מכך נהרג תלמיד ונפצעו עשרות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T12:16:49+00:00",
     "last_update_at": "2026-10-13T04:46:32+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק נע בין 19 ל-24, וגיל ההרוג מופיע כ-14 או 15 במקורות שונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957221",
       "published_at": "2026-10-13T04:46:32+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bk5k007osgl",
       "published_at": "2026-10-13T03:43:00+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957203",
       "published_at": "2026-10-12T19:13:08+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/likely-unexploded-ordnance-kills-teenager-northern-israel",
       "published_at": "2026-10-12T17:46:29+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25347",
       "published_at": "2026-10-12T14:42:28+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957182",
       "published_at": "2026-10-12T14:20:34+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131777",
       "published_at": "2026-10-12T12:16:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10131040-02",
     "title": "תקיפות אוויריות של ישראל בדרום לבנון",
     "summary": "כתב ערוץ אל-מנאר דיווח על תקיפות מהאוויר שביצעה ישראל במספר מוקדים בדרום לבנון, בהם פרועון, כפר תבנית וואדי אל-חוג'יר.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T06:19:02+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T06:19:02+00:00",
     "last_update_at": "2026-10-13T09:33:36+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים אינו מצוין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_1967846c7844f382",
       "url": "https://english.almanar.com.lb/article/137722/",
       "published_at": "2026-10-13T09:33:36+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_1967846c7844f382",
       "url": "https://www.newarab.com/news/iran-us-deadlock-continue-focus-shifts-yemen-war",
       "published_at": "2026-10-13T06:19:02+00:00"
      }
     ],
     "places": [
      {
       "name": "פרוען, לבנון",
       "lat": 33.2968,
       "lon": 35.4265
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-10131040-03",
     "title": "השמדת תוואי תת-קרקעי על ידי כוחות צה\"ל בדרום לבנון",
     "summary": "כוחות חטיבה 7 ויהל\"ם איתרו והשמידו תוואי תת-קרקעי במרחב הביטחוני שבדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T12:12:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T12:12:46+00:00",
     "last_update_at": "2026-10-12T12:12:46+00:00",
     "what_is_not_verified": "המיקום המדויק של התוואי התת-קרקעי לא צוין מעבר להגדרה כללית של דרום לבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25345",
       "published_at": "2026-10-12T12:12:46+00:00"
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
     "id": "NORTH-10131040-04",
     "title": "חדירת עצם מרחף מלבנון לשמי צפון ישראל",
     "summary": "תחקיר של צה\"ל קבע כי עצם שנכנס לשמי צפון הארץ מלבנון היה בלון או התקן אוויר חם תמים שנסחף.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T06:37:11+00:00",
     "last_update_at": "2026-10-13T06:46:41+00:00",
     "what_is_not_verified": "זהות המשלח או מקור השיגור המדויק בלבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1376578",
       "published_at": "2026-10-13T06:46:41+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/byeagijomx",
       "published_at": "2026-10-13T06:37:11+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10131040-05",
     "title": "הכרזת חיזבאללה על סיוע כספי לשיקום דיור",
     "summary": "בכיר חיזבאללה שייח' עלי דעמוש הכריז על תוכנית סיוע לנפגעי המלחמות עם ישראל, במסגרתה יוענקו עד 14,000 דולר למשפחות שבתיהן נהרסו בביירות וסביבתה, ועד 12,000 דולר באזורים אחרים.",
     "axis": "לבנון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T07:36:31+00:00",
     "last_update_at": "2026-10-13T10:20:23+00:00",
     "what_is_not_verified": "הדיווח על קבלת 200 מיליון דולר מאיראן למימון התוכנית הוכחש על ידי ארה\"ב ואינו מאומת סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_97824b44ede9fab8",
       "url": "https://english.almanar.com.lb/article/137737/",
       "published_at": "2026-10-13T10:20:23+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_97824b44ede9fab8",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/962599/hezbollah-outlines-financial-aid-plan-for-lebanese-with-destroyed-home/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962599",
       "published_at": "2026-10-13T07:36:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10131040-06",
     "title": "סיכול משלוח חומרי נפץ במחסום דהר אל-בידר בלבנון",
     "summary": "כוחות ביטחון הפנים של לבנון עצרו רכב ובו מאות קילוגרמים של חומרי נפץ שהועברו מאזור בעלבכ לכיוון הדאחיה בביירות.",
     "axis": "לבנון פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-12T11:49:06+00:00",
     "last_update_at": "2026-10-12T11:49:06+00:00",
     "what_is_not_verified": "המשקל המדויק של החומרים, יעד השימוש הסופי, וזהותם המלאה של המעורבים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/the-explosives-shipment-to-dahiyeh-a-hezbollah-operational-failure-a-deliberate-test-or-a-threatening-message-to-the-lebanese-government/",
       "published_at": "2026-10-12T11:49:06+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      },
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      }
     ]
    },
    {
     "id": "NORTH-10131040-07",
     "title": "פשיטות ומעצרים של כוחות ישראליים בדרום סוריה",
     "summary": "כוחות ישראליים ביצעו פעילות מעצרים בדרום סוריה ולקחו אדם מאזור קוניטרה, לצד פעולות נוספות במרחב דרעא וסביבת דמשק.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T01:38:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T01:38:15+00:00",
     "last_update_at": "2026-10-13T01:38:15+00:00",
     "what_is_not_verified": "זהות העצור והנסיבות המדויקות של הפעילות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-abduct-man-in-southern-syria-amid-fresh-incursions/4086717",
       "published_at": "2026-10-13T01:38:15+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      },
      {
       "name": "ריף דמשק, סוריה",
       "lat": 33.5593,
       "lon": 36.1618
      }
     ]
    },
    {
     "id": "NORTH-10131040-08",
     "title": "קריאת טורקיה באו\"ם להפסקת התקיפות הישראליות בסוריה",
     "summary": "שגריר טורקיה באו\"ם קרא לישראל לחדול מפעולותיה בסוריה ולציית באופן מלא להסכם הפרדת הכוחות מ-1974.",
     "axis": "טורקיה - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-13T08:38:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T08:38:00+00:00",
     "last_update_at": "2026-10-13T08:38:00+00:00",
     "what_is_not_verified": "תגובת ישראל להצהרה הטורקית.",
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
     "id": "NORTH-10131040-09",
     "title": "הליכים משפטיים בבית דין לצדק מעברי בדמשק",
     "summary": "בית משפט פלילי בדמשק ערך 19 דיונים בעניינם של חשודים בביצוע פשעי מלחמה ופשעים נגד האנושות תחת משטרו של אסד.",
     "axis": "סוריה פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-13T07:35:03+00:00",
     "last_update_at": "2026-10-13T07:35:03+00:00",
     "what_is_not_verified": "זהות החשודים הספציפיים ופסיקות סופיות במשפטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-holds-19-hearings-war-crimes-suspects-damascus",
       "published_at": "2026-10-13T07:35:03+00:00"
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
     "id": "NORTH-10131040-10",
     "title": "שינוי תעריפי מכס והצטרפות לאמנה בינלאומית בסוריה",
     "summary": "נשיא סוריה אחמד א-שרע הוציא צו המעדכן תעריפי מכס לעידוד הייצור המקומי, ובמקביל הודיע משרד החוץ על הצטרפות המדינה לאמנה הבינלאומית להגנת תיירים.",
     "axis": "סוריה פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-13T09:49:55+00:00",
     "last_update_at": "2026-10-13T10:34:31+00:00",
     "what_is_not_verified": "השפעת הצעדים על הכלכלה בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/syrias-customs-authority-explains-tariff-amendment-decree/",
       "published_at": "2026-10-13T10:34:31+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/10/syria-joins-international-code-for-the-protection-of-tourists/",
       "published_at": "2026-10-13T09:49:55+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    }
   ],
   "not_verified": [
    "{'claim': 'הדיווח לפיו חיזבאללה קיבל 200 מיליון דולר מאיראן לסיוע כספי לאוכלוסייה'}",
    "{'claim': 'מספר הנפגעים וגילו המדויק של הנער שנהרג בפיצוץ הנפל ברכס רמים'}",
    "{'claim': 'יעד השימוש הסופי והמשקל המדויק של חומרי הנפץ שנתפסו במחסום דהר אל-בידר'}",
    "{'claim': 'זהות העצור והנסיבות המדויקות של הפעילות הצה\"לית באזור קוניטרה'}"
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
     "value": 3.0695,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "השמדת תשתיות טרור ותוואי תת-קרקע בדרום לבנון",
      "שמירה על חופש פעולה ביטחוני ומבצעי בעזה, בסוריה, בלבנון ובאיראן ללא התערבות משפטית"
     ],
     "inferred": [
      "מניעת התבססות מחדש של חיזבאללה וגורמים פרו-איראניים בסמוך לגבול הצפון",
      "סיכול התארגנות עוינת בדרום סוריה באמצעות פשיטות ומעצרים נקודתיים"
     ],
     "forecast": [
      "המשך פעולות ממוקדות להשמדת תשתיות ומשלוחי אמל\"ח לאורך הגבול ובמרחב הסורי"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "הענקת סיוע כספי ושיקום דיור למשפחות שבתיהן נהרסו בלחימה עם ישראל",
      "המשך מחויבות לדרך 'השהידים' והתייצבות לצד תומכי הארגון"
     ],
     "inferred": [
      "שימור הלגיטימציה והתמיכה הציבורית בבסיס כוחו בעדה השיעית בלבנון",
      "שיקום מערכי הלוגיסטיקה וחומרי הנפץ לקראת המשך עימות"
     ],
     "forecast": [
      "המשך חלוקת הכספים במקביל למאמצים חשאיים להעברת אמצעי לחימה לאזור ביירות והדרום"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "החזרת השליטה הבלעדית של המדינה על החלטות מלחמה ושלום",
      "הגבלת החזקת הנשק במדינה לכוחות הביטחון והצבא הלגיטימיים בלבד",
      "סיום התקיפות הישראליות ושחרור שטחים כבושים"
     ],
     "inferred": [
      "דחיקת השפעתו הצבאית של חיזבאללה ומניעת גרירת המדינה למלחמות אזוריות",
      "חיזוק קשרים דיפלומטיים עם מדינות ערב ורוסיה"
     ],
     "forecast": [
      "המשך חיכוך פנימי מול חיזבאללה סביב נושאי הברחות נשק ומשילות"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "קריאה לישראל להפסיק את התקיפות בסוריה ולכבד את הסכם הפרדת הכוחות מ-1974"
     ],
     "inferred": [
      "ביסוס מעמדה כגורם משפיע ומגן על יציבות סוריה והסדר האזורי",
      "צמצום חופש הפעולה הצבאי של ישראל במרחב הסורי"
     ],
     "forecast": [
      "המשך העלאת דרישות דיפלומטיות באו\"ם ובזירה הבינלאומית נגד פעולות ישראל בסוריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/the-explosives-shipment-to-dahiyeh-a-hezbollah-operational-failure-a-deliberate-test-or-a-threatening-message-to-the-lebanese-government/",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/137737/",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/likely-unexploded-ordnance-kills-teenager-northern-israel",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-abduct-man-in-southern-syria-amid-fresh-incursions/4086717",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/diplomacy/turkiyes-un-envoy-calls-on-israel-to-stop-reckless-attacks-in-syria",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/syria-joins-international-code-for-the-protection-of-tourists/",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/962599/hezbollah-outlines-financial-aid-plan-for-lebanese-with-destroyed-home/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-962599",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1376578",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-holds-19-hearings-war-crimes-suspects-damascus",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131777",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25345",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957182",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/byeagijomx",
     "accessed_at": "2026-10-13T10:40:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-12T20:06:15+00:00",
  "changes": {
   "NORTH-10131040-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "פיצוץ נפל תחמושת מצרר של חזבאללה בגבול הצפון",
    "score": 1.0
   },
   "NORTH-10131040-02": {
    "kind": "possible",
    "prev": "ירי ארטילרי ישראלי בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10131040-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "השמדת תשתית תת-קרקעית של חזבאללה בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10131040-04": {
    "kind": "new"
   },
   "NORTH-10131040-05": {
    "kind": "new"
   },
   "NORTH-10131040-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "סיכול משלוח חומרי נפץ של חזבאללה בלבנון",
    "score": 1.0
   },
   "NORTH-10131040-07": {
    "kind": "new"
   },
   "NORTH-10131040-08": {
    "kind": "new"
   },
   "NORTH-10131040-09": {
    "kind": "possible",
    "prev": "פעילות צה\"ל באזור קוניטרה ופרברי דמשק",
    "score": 0.633
   },
   "NORTH-10131040-10": {
    "kind": "new"
   }
  }
 }
};
