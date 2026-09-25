/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-25T1553__yemen-202609251553.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-25T15:53:48+00:00",
   "window": {
    "from": "2026-09-24T15:53:48+00:00",
    "to": "2026-09-25T15:53:48+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609251553"
   },
   "summary": "הלחימה בתימן ובמרחב הים האדום מתאפיינת בהסלמה בהתקפות החות'ים נגד תשתיות ואזורים בסעודיה, לצד התקדמות קרקעית באזור חוף הים האדום. במקביל, הקהילה הבינלאומית וגורמים אזוריים פועלים לבלום את האיומים על נתיבי השיט, כאשר מעצמות כמו צרפת מתגייסות להגנה על מתקני אנרגיה סעודיים ומדינות האזור מקדמות שיתופי פעולה צבאיים.",
   "fronts": [
    {
     "name": "זירת תימן הפנימית וחוף הים האדום",
     "status": "פעיל והסלמה בלחימה קרקעית"
    },
    {
     "name": "זירת תימן-סעודיה (מתקפות טילים וכטב\"מים)",
     "status": "פעיל מאוד"
    },
    {
     "name": "הזירה הימית (הים האדום ומצר באב אל-מנדב)",
     "status": "מתיחות ואיומים על ספנות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09251553-01",
     "title": "גינוי מועצת הביטחון של האו\"ם להתקפות החות'ים על סעודיה",
     "summary": "מועצת הביטחון של האו\"ם גינתה בחריפות את ההתקפות המתמשכות של החות'ים נגד סעודיה, כולל פגיעה בתשתיות אזרחיות ואנרגיה.",
     "axis": "הזירה האזורית והבינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T23:52:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T23:52:57+00:00",
     "last_update_at": "2026-09-25T15:45:45+00:00",
     "what_is_not_verified": "פרטים נוספים מעבר להצהרת האו\"ם אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_dbca68f0a066107f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-security-council-condemns-houthi-attacks-saudi-arabia",
       "published_at": "2026-09-25T15:45:45+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_dbca68f0a066107f",
       "url": "https://www.sabanew.net/viewstory/152976",
       "published_at": "2026-09-25T15:41:35+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_dbca68f0a066107f",
       "url": "https://www.newarab.com/news/saudi-host-emergency-yemen-talks-iran-submits-new-peace-plan",
       "published_at": "2026-09-25T14:35:57+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_dbca68f0a066107f",
       "url": "https://www.al-monitor.com/originals/2026/09/un-security-council-condemns-houthi-attacks-saudi-arabia",
       "published_at": "2026-09-25T14:30:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_63c28083cebadb2e",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-security-council-condemns-houthi-attacks-saudi",
       "published_at": "2026-09-25T14:09:13+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_dbca68f0a066107f",
       "url": "https://www.france24.com/en/middle-east/20260924-live-iran-s-president-says-us-must-choose-whether-to-end-war",
       "published_at": "2026-09-24T23:52:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09251553-02",
     "title": "יירוט טילי בליסטיים של החות'ים על ידי סעודיה",
     "summary": "סעודיה ירטה מספר טילים בליסטיים ששיגרו החות'ים לעבר אזורים שונים בהם טאיף וינבוע.",
     "axis": "זירת תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T23:34:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T23:34:29+00:00",
     "last_update_at": "2026-09-25T02:54:27+00:00",
     "what_is_not_verified": "היקף הנזק המלא אינו מפורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_eba45329ccb51a5b",
       "url": "https://www.theguardian.com/world/2026/sep/25/saudi-arabia-intercepts-houthi-missiles-oil-prices-climbs",
       "published_at": "2026-09-25T02:54:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_44f91c57d108c0cf",
       "url": "https://www.france24.com/en/middle-east/20260924-saudi-houthi-attacks-france-oil-port",
       "published_at": "2026-09-24T23:34:29+00:00"
      }
     ],
     "places": [
      {
       "name": "טאיף, סעודיה",
       "lat": 21.2703,
       "lon": 40.4158
      },
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-09251553-03",
     "title": "צרפת תשלח משאבים צבאיים להגנת מתקן הנפט בינבוע",
     "summary": "נשיא צרפת עמנואל מקרון הודיע על שליחת כוחות, מערכות מכ\"ם והגנה אווירית כדי להגן על מסוף הנפט בינבוע בסעודיה.",
     "axis": "זירת תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T23:33:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T23:33:46+00:00",
     "last_update_at": "2026-09-25T14:04:20+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק לפריסת הכוחות אינו מפורט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_cbabc4b107d826ab",
       "url": "https://www.france24.com/en/macron-says-military-resources-to-be-sent-to-saudi-arabia",
       "published_at": "2026-09-25T14:04:20+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_cbabc4b107d826ab",
       "url": "https://t.me/abualiexpress/130780",
       "published_at": "2026-09-25T08:26:52+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_cbabc4b107d826ab",
       "url": "https://www.france24.com/en/middle-east/20260924-saudi-houthi-attacks-france-oil-port",
       "published_at": "2026-09-24T23:34:29+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_cf9c4e065429541d",
       "url": "https://www.newarab.com/news/france-send-military-protect-saudi-arabia-macron-says",
       "published_at": "2026-09-24T23:33:46+00:00"
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
     "id": "YEMEN-09251553-04",
     "title": "החמרה בתת-תזונה בקרב ילדים בתימן עקב הלחימה",
     "summary": "יוצאיף וסוכנויות סיוע של האו\"ם דיווחו על עלייה חדה במקרי תת-תזונה חמורה בקרב ילדים בתימן עקב שיבושים במערכת הבריאות והלחימה המחודשת.",
     "axis": "זירת הפנים בתימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T10:46:28+00:00",
     "last_update_at": "2026-09-25T14:10:51+00:00",
     "what_is_not_verified": "נתונים מלאים לכלל האזורים בתימן אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_b356ff92069de0ef",
       "url": "https://www.aljazeera.com/news/2026/9/25/yemen-fighting-displaces-71000-children-worsens-malnutrition-unicef?traffic_source=rss",
       "published_at": "2026-09-25T14:10:51+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_5ef533950ea4a30a",
       "url": "https://news.un.org/feed/view/en/story/2026/09/1168436",
       "published_at": "2026-09-25T12:00:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_7683f109720a5414",
       "url": "https://www.al-monitor.com/originals/2026/09/child-malnutrition-rises-yemen-fighting-intensifies-says-unicef",
       "published_at": "2026-09-25T10:46:28+00:00"
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
     "id": "YEMEN-09251553-05",
     "title": "הבטחת החות'ים שלא לתקוף ספינות אמריקאיות ואירופאיות",
     "summary": "נציגי החות'ים הבטיחו לאיחוד האירופי ולארה\"ב שלא יתקפו ספינות של מדינות אלו בים האדום וכי פעילותם מכוונת נגד סעודיה.",
     "axis": "הזירה הימית (ים אדום ובאב אל-מנדב)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T14:24:27+00:00",
     "last_update_at": "2026-09-25T14:24:27+00:00",
     "what_is_not_verified": "ההתחייבות בפועל והיציבות שלה לא אומתו באופן רשמי על ידי ארה\"ב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47996",
       "published_at": "2026-09-25T14:24:27+00:00"
      }
     ],
     "places": [
      {
       "name": "הים האדום",
       "lat": 20.2966,
       "lon": 38.5343
      }
     ]
    }
   ],
   "not_verified": [
    "טענות החות'ים בדבר הימנעות מתקיפת ספינות זרות מסוימות",
    "מספר הנפגעים המדויק בכל צד כתוצאה מהעימותים האחרונים בתימן",
    "היקף הנזק המדויק שנגרם למתקני האנרגיה בסעודיה"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "פגיעה במטרות בסעודיה",
      "המשך ההתנגדות"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי על סעודיה באמצעות פגיעה בתשתיות אנרגיה",
      "הרחבת השליטה באזורים לאורך חוף הים האדום ובאב אל-מנדב"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר יעדים בסעודיה",
      "ניסיונות לתחום את העימות הימי כדי למנוע תגובה רחבה מצד מעצמות זרות"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על גבולות הממלכה ותשתיות האנרגיה",
      "קריאה להכרעת החות'ים"
     ],
     "inferred": [
      "חיזוק שיתוף הפעולה הצבאי והביטחוני עם בעלות ברית (טורקיה, פקיסטן, צרפת) לבלימת האיומים"
     ],
     "forecast": [
      "פריסת אמצעי הגנה אווירית זרים נוספים באתרים אסטרטגיים",
      "הידוק שיתופי הפעולה במסגרת בריתות הגנה חדשות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/25/yemen-fighting-displaces-71000-children-worsens-malnutrition-unicef?traffic_source=rss",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/child-malnutrition-rises-yemen-fighting-intensifies-says-unicef",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260924-saudi-houthi-attacks-france-oil-port",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/25/saudi-arabia-intercepts-houthi-missiles-oil-prices-climbs",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-security-council-condemns-houthi-attacks-saudi",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/france-send-military-protect-saudi-arabia-macron-says",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/152976",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130780",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47996",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/09/1168436",
     "accessed_at": "2026-09-25T15:53:48+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-25T02:40:29+00:00",
  "changes": {
   "YEMEN-09251553-01": {
    "kind": "new"
   },
   "YEMEN-09251553-02": {
    "kind": "new"
   },
   "YEMEN-09251553-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "יירוט טילים בליסטיים ויציאת כוחות צרפת להגנת ינבוע",
    "score": 1.0
   },
   "YEMEN-09251553-04": {
    "kind": "new"
   },
   "YEMEN-09251553-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-25T1531__iran-202609251531.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-25T15:31:22+00:00",
   "window": {
    "from": "2026-09-24T15:31:22+00:00",
    "to": "2026-09-25T15:31:22+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609251531"
   },
   "summary": "העימות נמשך במישור הכלכלי, האווירי והימי, כאשר ארה\"ב וישראל ממשיכות להפעיל לחץ באמצעות סנקציות שמביאות להשעיית טיסות איראניות באזור ולפגיעה קשה בכלכלת איראן. מנגד, איראן מאיימת על התעופה האזורית ומציעה פתיחה מותנית של מצר הורמוז, בעוד שלוחותיה (החות'ים) ממשיכות בירי טילים לעבר סעודיה.",
   "fronts": [
    {
     "name": "החזית הימית ומצר הורמוז",
     "status": "פעיל ומתוח"
    },
    {
     "name": "חזית הטרור והשלוחות האזוריצות (חות'ים ומילציות)",
     "status": "פעיל"
    },
    {
     "name": "חזית הסנקציות והתעופה האזרחית",
     "status": "הסלים"
    }
   ],
   "events": [
    {
     "id": "IRAN-09251531-01",
     "title": "השעיית טיסות איראניות בשדות תעופה בעיראק ובמדינות נוספות",
     "summary": "מספר שדות תעופה בעיראק (בגדד, נג'ף, ארביל וסולימאניה) וכן גאורגיה ואזרביג'אן הפסיקו את הטיסות של חברות תעופה איראניות בעקבות סנקציות אמריקאיות",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-25T07:17:48+00:00",
     "last_update_at": "2026-09-25T11:33:10+00:00",
     "what_is_not_verified": "היקף ההשפעה המלא על כלל ציי המטוסים בעולם אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_state_media_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraqs-erbil-and-sulaimaniya-airports-suspend-iranian-flights",
       "published_at": "2026-09-25T11:33:10+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_state_media_reuters",
       "url": "https://www.ynet.co.il/news/article/rkhu1cxcfl",
       "published_at": "2026-09-25T11:07:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_state_media_reuters",
       "url": "https://t.me/abualiexpress/130776",
       "published_at": "2026-09-25T07:17:48+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      },
      {
       "name": "ארביל, עיראק",
       "lat": 36.1912,
       "lon": 44.0094
      },
      {
       "name": "סולימאניה, עיראק",
       "lat": 35.5571,
       "lon": 45.4426
      }
     ]
    },
    {
     "id": "IRAN-09251531-02",
     "title": "יירוט טילי בליסטיקה של החות'ים סעודיה",
     "summary": "הקואליציה בהובלת סעודיה יירטה שישה טילים בליסטיים שנורו על ידי החות'ים לעבר טאיף ואזור ינבוע",
     "axis": "איראן והשלוחות מול סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T02:54:27+00:00",
     "last_update_at": "2026-09-25T02:54:27+00:00",
     "what_is_not_verified": "הנזק המדויק בכל אתרי הפגיעה אינו מאומת לחלוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.theguardian.com/world/2026/sep/25/saudi-arabia-intercepts-houthi-missiles-oil-prices-climbs",
       "published_at": "2026-09-25T02:54:27+00:00"
      }
     ],
     "places": [
      {
       "name": "טאיף, סעודיה",
       "lat": 21.2703,
       "lon": 40.4158
      },
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "IRAN-09251531-03",
     "title": "הצעת איראן לפתיחת מצר הורמוז תמורת הסרת סנקציות",
     "summary": "איראן העבירה הצעה לפיה תפתח את מצר הורמוז בתוך שישה ימים ותחל בשיחות גרעין, בתמורה להסרת סנקציות על ייצוא נפט, סיום המלחמה ושחרור נכסים קפואים",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T21:57:34+00:00",
     "last_update_at": "2026-09-24T21:57:34+00:00",
     "what_is_not_verified": "תגובתה הרשמית המלאה של ארה\"ב להצעה ספציפית זו אינה מאומתת לחלוטין בטקסטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_the_guardian",
       "url": "https://www.theguardian.com/world/2026/sep/24/ed-miliband-meets-iran-foreign-minister-us-ultimatum-strait-hormuz",
       "published_at": "2026-09-24T21:57:34+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "תגובת ארה\"ב המדויקת להצעה האחרונה של איראן לגבי פתיחת מצר הורמוז",
    "מיקומם המדויק של 440 קילוגרם אורניום מועשר באיראן",
    "השלכות ההסכמים הביטחוניים החדשים בין טורקיה, סעודיה ופקיסטן על הציר האיראני"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להגן על עצמה מפני תקיפות",
      "לדרוש הסרת סנקציות על ייצוא נפט ושחרור נכסים קפואים בתמורה לפתיחת מצר הורמוז"
     ],
     "inferred": [
      "לנסות לעקוף את המצור הימי והאווירי דרך מעברים יבשתיים",
      "להפעיל לחץ על מדינות האזור באמצעות פגיעה בתעופה ובנתיבי סחר כדי שישפיעו על ארה\"ב"
     ],
     "forecast": [
      "המשך ניסיונות סחיטה אזוריים סביב חופש הטיסה והשיט",
      "החרפת מצוקה כלכלית פנימית עקב קריסת הייצוא"
     ]
    },
    {
     "actor": "ארצות הברית וישראל",
     "declared": [
      "למנוע סיוע צבאי ומודיעיני לאיראן מצד מעצמות כמו סין",
      "לנתק את איראן ממערכת התעופה והפיננסים הבינלאומית באמצעות סנקציות"
     ],
     "inferred": [
      "להפעיל לחץ מקסימלי דרך מצור כלכלי ואווירי כדי למוטט את הכלכלה האיראנית",
      "לדרוש פירוק של מיליציות פרו-איראניות בעיראק ובמקומות נוספים"
     ],
     "forecast": [
      "החמרת הסנקציות על חברות תעופה וגורמים המסייעים לאיראן",
      "המשך האבטחה והליווי של מעבר סחורות ונפט במצר הורמוז"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/24/ed-miliband-meets-iran-foreign-minister-us-ultimatum-strait-hormuz",
     "accessed_at": "2026-09-25T15:31:22+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraqs-erbil-and-sulaimaniya-airports-suspend-iranian-flights",
     "accessed_at": "2026-09-25T15:31:22+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130776",
     "accessed_at": "2026-09-25T15:31:22+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkhu1cxcfl",
     "accessed_at": "2026-09-25T15:31:22+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-24T23:40:37+00:00",
  "changes": {
   "IRAN-09251531-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "טורקיה ואיחוד האמירויות השעו טיסות של חברות תעופה איראניות",
    "score": 0.65
   },
   "IRAN-09251531-02": {
    "kind": "new"
   },
   "IRAN-09251531-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "איראן הציעה תנאים לפתיחת מצר הורמוז וחידוש שיחות הגרעין",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-25T1542__ukraine-202609251542.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-25T15:42:53+00:00",
   "window": {
    "from": "2026-09-24T15:42:53+00:00",
    "to": "2026-09-25T15:42:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609251542"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתאת מתקפות אוויריות אינטנסיביות, הכוללות שימוש נרחב בכטב\"מים ופצצות מונחות מצד רוסיה על תשתיות ומטרות אזרחיות באוקראינה, לצד מתקפות נגד אוקראיניות על מתקני אנרגיה בתוך שטחי רוסיה. במקביל, נמשכים המאמצים הדיפלומטיים והסיוע הביטחוני הבינלאומי לאוקראינה, הכולל תמיכה כספית רחבה ודיונים על רישיונות ייצור נשק.",
   "fronts": [
    {
     "name": "חזית קייב והמרכז",
     "status": "פעילה ותחת תקיפות כטב\"מים"
    },
    {
     "name": "חזית הדרום (אודסה, חרסון ורוסטוב)",
     "status": "פעילה עם תקיפות הדדיות על תשתיות אנרגיה"
    },
    {
     "name": "חזית הצפון-מזרח (סומי וחרקוב)",
     "status": "פעילה עם הפגזות ותקיפות אוויריות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09251542-01",
     "title": "תקיפות כטב\"מים רוסיות בקייב",
     "summary": "תקיפות כטב\"מים של כוחות רוסיה פגעו במספר מבנים וגרמו לנפגעים בנפש ובגוף, כולל מותם של אזרחים ובהם נער ישראלי.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T11:21:47+00:00",
     "last_update_at": "2026-09-25T15:02:21+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק מדווח באופן משתנה על ידי מקורות שונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_25aa8c10366175ce",
       "url": "https://meduza.io/en/news/2026/09/25/russian-strike-on-kyiv-office-building-kills-at-least-four",
       "published_at": "2026-09-25T15:02:21+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_25aa8c10366175ce",
       "url": "https://www.ukrinform.net/rubric-ato/4168047-injury-toll-in-russian-drone-attacks-on-kyiv-rises-to-39-five-killed.html",
       "published_at": "2026-09-25T14:50:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_25aa8c10366175ce",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/25/8055061/",
       "published_at": "2026-09-25T14:47:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_50c0370b6be41cd7",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/25/8055058/",
       "published_at": "2026-09-25T14:30:00+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_25aa8c10366175ce",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21488681",
       "published_at": "2026-09-25T11:44:38+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_25aa8c10366175ce",
       "url": "https://www.ynet.co.il/news/article/rk6vvaxczg",
       "published_at": "2026-09-25T11:21:47+00:00"
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
     "id": "UKRAINE-09251542-02",
     "title": "מתקפת כטב\"מים אוקראינית על מתקני אנרגיה ברוסיה",
     "summary": "כטב\"מים אוקראינים תקפו בתי זיקוק ותשתיות אנרגיה ברוסיה, בין היתר ברוסטוב ופרם, וגרמו לשריפות ולעצירת פעילות.",
     "axis": "מתקפות נגד",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T01:47:56+00:00",
     "last_update_at": "2026-09-25T11:51:28+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לכלל המתקנים שהותקפו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_1ce188b3d0c14ea9",
       "url": "https://meduza.io/en/news/2026/09/25/after-ukraine-s-overnight-attack-novoshakhtinsk-oil-refinery-one-of-southern-russia-s-biggest-fuel-suppliers-halts-operations",
       "published_at": "2026-09-25T11:51:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_1ce188b3d0c14ea9",
       "url": "https://t.me/abualiexpress/130791",
       "published_at": "2026-09-25T11:34:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_1ce188b3d0c14ea9",
       "url": "https://t.me/alexmehacarmel/47984",
       "published_at": "2026-09-25T01:47:56+00:00"
      }
     ],
     "places": [
      {
       "name": "נובושאכטינסק, רוסיה",
       "lat": 47.7963,
       "lon": 39.8936
      },
      {
       "name": "פרם, רוסיה",
       "lat": 58.0109,
       "lon": 56.2319
      }
     ]
    },
    {
     "id": "UKRAINE-09251542-03",
     "title": "פגיעה בעובדי אנרגיה באזור אודסה",
     "summary": "פגיעת כטב\"ם רוסי בכלי רכב של עובדי תשתיות אנרגיה באזור אודסה הביאה למות אדם ולפציעת אחר.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T15:10:00+00:00",
     "last_update_at": "2026-09-25T15:10:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_178565e653cfe71b",
       "url": "https://www.ukrinform.net/rubric-ato/4168056-russian-drone-strike-on-energy-workers-vehicle-in-odesa-region-kills-one-injures-another.html",
       "published_at": "2026-09-25T15:10:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09251542-04",
     "title": "תקיפת פצצות דואה סומי",
     "summary": "פצצות אוויריות מונחות רוסיות פגעו בשתי זירות שונות בעיר סומי וגרמו לפצועים ולנזק למבנים.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T14:08:00+00:00",
     "last_update_at": "2026-09-25T14:08:00+00:00",
     "what_is_not_verified": "ההשלכות המלאות של התקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ed0eda1844c122de",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/25/8055050/",
       "published_at": "2026-09-25T14:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סומי, אוקראינה",
       "lat": 50.912,
       "lon": 34.8028
      }
     ]
    },
    {
     "id": "UKRAINE-09251542-05",
     "title": "אישור סיוע ביטחוני אירופי",
     "summary": "מדינות האיחוד האירופי הסכימו על הקצאת 6.6 מיליארד אירו במסגרת מתקן השלום האירופי לתמיכה בהגנת אוקראינה.",
     "axis": "סיוע צבאי וכלכלי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T14:30:00+00:00",
     "last_update_at": "2026-09-25T14:30:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_55af61c1471b351e",
       "url": "https://www.ukrinform.net/rubric-polytics/4168041-eu-agrees-on-66-billion-for-ukraines-defense.html",
       "published_at": "2026-09-25T14:30:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הילדים המדויק שרוסיה העבירה בכוח או מחזיקה בשטחים הכבושים",
    "ההערכות המדויקות של מודיעין דנמרק לגבי אפשרות לתקיפת נאט\"ו",
    "פרטי תוכניות הפעולה העתידיות של SpaceX לגבי כיסוי Starlink"
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
     "value": 1.1403,
     "unit": "USD",
     "change_pct": 0.32,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת רישיונות לייצור טילי פטריוט",
      "הרחבת כיסוי האינטרנט של Starlink מעל שטח רוסיה לפגיעה במשגרי טילים",
      "הגנה על תעשיית הפלדה וגיוס תמיכה בינלאומית"
     ],
     "inferred": [
      "פגיעה בתשתיות האנרגיה והכלכלה בתוך רוסיה כדי לשבש את מאמצי המלחמה",
      "שימור רציפות תפקודית תחת מתקפות אוויריות קשות"
     ],
     "forecast": [
      "פנייה לגורמים בינלאומיים להגדלת הסיוע האווירי לקראת חודשי החורף",
      "המשך ניסיונות לסיכול העברות ילדים אוקראינים והשבתם"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "החלשת המשטר בקייב ומניעת תלות מוחלטת בסיוע המערבי"
     ],
     "inferred": [
      "העמקת הפגיעה בתשתיות האנרגיה, התעשייה והמרחב האזרחי באוקראינה לקראת החורף",
      "שיבוש הפעילות הכלכלית באוקראינה והעמקת משבר התקציב שלה"
     ],
     "forecast": [
      "המשך תקיפות משולבות של כטב\"מים וטילים על ערים מרכזיות באוקראינה",
      "הגברת הלחץ הצבאי במוקדי עימות שונים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21488681",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/25/after-ukraine-s-overnight-attack-novoshakhtinsk-oil-refinery-one-of-southern-russia-s-biggest-fuel-suppliers-halts-operations",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/25/8055050/",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130791",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47984",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4168041-eu-agrees-on-66-billion-for-ukraines-defense.html",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rk6vvaxczg",
     "accessed_at": "2026-09-25T15:42:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-24T23:50:56+00:00",
  "changes": {
   "UKRAINE-09251542-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "תקיפות רוסיות על מרכזי נתונים בקייב",
    "score": 1.0
   },
   "UKRAINE-09251542-02": {
    "kind": "new"
   },
   "UKRAINE-09251542-03": {
    "kind": "new"
   },
   "UKRAINE-09251542-04": {
    "kind": "new"
   },
   "UKRAINE-09251542-05": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-25T1601__north-202609251601.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-25T16:01:49+00:00",
   "window": {
    "from": "2026-09-24T16:01:49+00:00",
    "to": "2026-09-25T16:01:49+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609251601"
   },
   "summary": "בזירה הצפונית נמשכת פעילות צבאית הכוללת פעילות כוחות צה\"ל בדרום לבנון ואירועים בגבול סוריה, לצד מגעים מדיניים והצהרות של בכירים מלבנון ומאזורים שכנים בנוגע להסדרים עתידיים והפסקת אש אפשרית. במקביל מתנהלים חילופי האשמות בין ישראל לטורקיה וגורמים אזוריים נוספים.",
   "fronts": [
    {
     "name": "גבול ישראל-לבנון",
     "status": "פעיל"
    },
    {
     "name": "גבול ישראל-סוריה",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "NORTH-09251601-01",
     "title": "דיווחים על מעצר סוהיל אלחסן",
     "summary": "דיווחים בלבנון על מעצרו של סוהיל אלחסן, מפקד כוחות הנמרים הסורי.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T15:59:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T15:59:19+00:00",
     "last_update_at": "2026-09-25T15:59:19+00:00",
     "what_is_not_verified": "נכונות המעצר אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47999",
       "published_at": "2026-09-25T15:59:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09251601-02",
     "title": "פתיחת טיסות הלילה בשדות התעופה בסוריה",
     "summary": "ישראל הסירה בשקט את החסימה על הפעלת ציוד ניווט המאפשר טיסות לילה ומזג אוויר קשים בשדות התעופה של דמשק וחלב בסוריה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T12:27:09+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T12:27:09+00:00",
     "last_update_at": "2026-09-25T12:27:09+00:00",
     "what_is_not_verified": "הפרטים נמסרו על ידי גורמים אזוריים בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/israel-quietly-lifts-block-night-flights-syrias-airports",
       "published_at": "2026-09-25T12:27:09+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה הבינלאומי של דמשק, סוריה",
       "lat": 33.4102,
       "lon": 36.5241
      }
     ]
    },
    {
     "id": "NORTH-09251601-03",
     "title": "סיור צבאי ישראלי בדרום סוריה",
     "summary": "סיור ישראלי נכנס לדרום סוריה באזור ואדי אל-רוקאד ופתח בירי.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T10:48:28+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T10:48:28+00:00",
     "last_update_at": "2026-09-25T10:48:28+00:00",
     "what_is_not_verified": "הפרטים מבוססים על דיווח של התקשורת הממלכתית בסוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-patrol-enters-southern-syria-opens-fire-state-media/4069126",
       "published_at": "2026-09-25T10:48:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09251601-04",
     "title": "שיגור מיירט לעבר מטרה בדרום לבנון",
     "summary": "שוגר מיירט לעבר מטרה אווירית חשודה שזוהתה במרחב שבו פועלים כוחות צה\"ל בדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-25T11:12:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-25T11:12:31+00:00",
     "last_update_at": "2026-09-25T11:34:22+00:00",
     "what_is_not_verified": "הפרטים היו בבדיקה בזמן הדיווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25223",
       "published_at": "2026-09-25T11:34:22+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130789",
       "published_at": "2026-09-25T11:12:31+00:00"
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
    "מעצרו של סוהיל אלחסן בלבנון",
    "פרטי המטרה האווירית החשודה בדרום לבנון"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "לבנון",
     "declared": [
      "סיום המלחמה ושמירה על הפסקת אש",
      "נסיגת ישראל מכל שטחי לבנון לגבולות המוכרים בהתאם להסכם שביתת הנשק מ-1949 ולחלטה 1701",
      "מניעת ריק (ואקום) במקרה של נסיגת כוחות יוניפי\"ל"
     ],
     "inferred": [
      "שאיפה לשמור על ריבונות המדינה מבלי להפוך לזירת עימות של צדדים אחרים"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים מול האו\"ם להשגת נסיגה ישראלית"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "שחרור האדמה, הגנה על העם וחזרה לכפרים בדרום לבנון",
      "נכונות לפתרון מדיני אך דחיית כניעה או מסירת נשק"
     ],
     "inferred": [
      "המשך הלחימה ההגנתית ושמירה על נוכחות צבאית ופוליטית בלבנון"
     ],
     "forecast": [
      "המשך התנגדות מזוינת כל עוד נמשכת הנוכחות הישראלית"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על יישובי הצפון ופעילות נגד תשתיות חיזבאללה"
     ],
     "inferred": [
      "שמירת חופש פעולה צבאי בגבול סוריה ולבנון"
     ],
     "forecast": [
      "המשך פעילות מבצעית ממוקדת בגבולות הצפון בהתאם לצורך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-patrol-enters-southern-syria-opens-fire-state-media/4069126",
     "accessed_at": "2026-09-25T16:01:49+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/israel-quietly-lifts-block-night-flights-syrias-airports",
     "accessed_at": "2026-09-25T16:01:49+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130789",
     "accessed_at": "2026-09-25T16:01:49+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47999",
     "accessed_at": "2026-09-25T16:01:49+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25223",
     "accessed_at": "2026-09-25T16:01:49+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-24T23:58:01+00:00",
  "changes": {
   "NORTH-09251601-01": {
    "kind": "new"
   },
   "NORTH-09251601-02": {
    "kind": "new"
   },
   "NORTH-09251601-03": {
    "kind": "new"
   },
   "NORTH-09251601-04": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "צמצום כוחות צה\"ל בדרום לבנון",
    "score": 0.817
   }
  }
 }
};
