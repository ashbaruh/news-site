/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-19T1721__yemen-202610191721.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-19T17:21:42+00:00",
   "window": {
    "from": "2026-10-18T17:21:42+00:00",
    "to": "2026-10-19T17:21:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610191721"
   },
   "summary": "הלחימה בתימן ובמרחב הסובב אותה מסלימה סביב עימותים מחודשים בין הממשלה התימנית והקואליציה בראשות סעודיה לבין המורדים החות'ים, המבצעים מתקפות טילים וכטב\"מים גם לעבר יעדים בסעודיה. במקביל, סעודיה פועלת לגייס תמיכה צבאית ולשקם את הבריתות האזוריות שלה עם מצרים ואיחוד האמירויות כדי להתמודד עם האיום החות'י בים האדום ובמפרץ.",
   "fronts": [
    {
     "name": "הזירה התימנית הפנימית",
     "status": "פעיל ומסלים"
    },
    {
     "name": "ציר תימן-סעודיה",
     "status": "פעיל וכולל תקיפות מתבלות"
    },
    {
     "name": "מרחב הים האדום ומצר באב אל-מנדב",
     "status": "במתח גבוה ואיומים ימיים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10191721-01",
     "title": "מתקפת טילים בליסטיים על מחנה אימונים בשבואה",
     "summary": "מתקפת טילים בליסטיים על מחנה אימונים של כוחות הממשלה בתימן שהביאה לעשרות הרוגים ופצועים.",
     "axis": "הזירה התימנית הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:24:15+00:00",
     "last_update_at": "2026-10-19T17:15:23+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת לחלוטין ויש סתירות בין דיווחים שונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_un_recognised_government_local_authoriti",
       "url": "https://www.theguardian.com/world/2026/oct/19/houthi-attack-yemen-al-alam-camp-biggest-single-loss-of-life-civil-war",
       "published_at": "2026-10-19T17:15:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_un_recognised_government_local_authoriti",
       "url": "https://www.newarab.com/news/yemen-forces-advance-taiz-iran-blames-us-hormuz-crisis",
       "published_at": "2026-10-19T15:57:56+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_un_recognised_government_local_authoriti",
       "url": "https://www.al-monitor.com/originals/2026/10/houthi-attack-kills-53-yemen-government-training-camp-officials-say",
       "published_at": "2026-10-19T13:46:32+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_un_recognised_government_local_authoriti",
       "url": "https://www.aljazeera.com/news/2026/10/19/at-least-18-killed-in-houthi-attack-on-military-camp-in-yemens-shabwa?traffic_source=rss",
       "published_at": "2026-10-19T12:51:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_un_recognised_government_local_authoriti",
       "url": "https://www.newarab.com/news/dozens-killed-houthi-attack-yemeni-govt-military-camp",
       "published_at": "2026-10-19T12:24:15+00:00"
      }
     ],
     "places": [
      {
       "name": "עטאק, תימן",
       "lat": 14.5729,
       "lon": 46.8319
      }
     ]
    },
    {
     "id": "YEMEN-10191721-02",
     "title": "הצהרת החות'ים על תקיפת אתרים בסעודיה",
     "summary": "דובר צבאי של החות'ים הצהיר שהארגון תקף מתקנים בסעודיה בהם שדות תעופה, מתקני אנרגיה ובסיסים צבאיים.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T16:55:10+00:00",
     "last_update_at": "2026-10-19T16:55:10+00:00",
     "what_is_not_verified": "האם התקיפות אכן פגעו בכל המטרות כמפורט בהצהרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_yahya_saree",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-targeted-saudi-airports-energy-and-military-sites",
       "published_at": "2026-10-19T16:55:10+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      },
      {
       "name": "אבהא, סעודיה",
       "lat": 18.2164,
       "lon": 42.5044
      },
      {
       "name": "ח'מיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10191721-03",
     "title": "תקיפות אוויריות בדרום תעז",
     "summary": "כוחות ממשלת תימן והקואליציה תקפו עמדות וכלי רכב של החות'ים מדרום לתעז.",
     "axis": "הזירה התימנית הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T12:24:15+00:00",
     "last_update_at": "2026-10-19T15:57:56+00:00",
     "what_is_not_verified": "היקף הנזק המלא בצד החות'י.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_yemeni_government_forces",
       "url": "https://www.newarab.com/news/yemen-forces-advance-taiz-iran-blames-us-hormuz-crisis",
       "published_at": "2026-10-19T15:57:56+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_yemeni_government_forces",
       "url": "https://www.newarab.com/news/dozens-killed-houthi-attack-yemeni-govt-military-camp",
       "published_at": "2026-10-19T12:24:15+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "נפת אל-מיסראך, תימן",
       "lat": 13.4518,
       "lon": 44.0349
      }
     ]
    },
    {
     "id": "YEMEN-10191721-04",
     "title": "דחיית הצבעה בפרלמנט המצרי על שליחת כוחות לסעודיה",
     "summary": "הפרלמנט במצרים דחה את ההצבעה על אישור פריסת כוחות צבא לסיוע לסעודיה מול איומי החות'ים.",
     "axis": "מצרים-סעודיה-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T17:48:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T17:48:30+00:00",
     "last_update_at": "2026-10-19T14:56:08+00:00",
     "what_is_not_verified": "תוצאות ההצבעה הסופיות שטרם התקיימו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_a0d8aa62c50d4b22",
       "url": "https://www.newarab.com/news/egypt-postpones-sisis-saudi-troop-deployment-vote-next-week",
       "published_at": "2026-10-19T14:56:08+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_a0d8aa62c50d4b22",
       "url": "https://www.al-monitor.com/originals/2026/10/whats-behind-egypts-move-towards-possible-military-involvement-saudi-yemen",
       "published_at": "2026-10-19T13:46:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_a0d8aa62c50d4b22",
       "url": "https://www.newarab.com/news/egypt-parliament-delays-vote-military-support-saudi-arabia",
       "published_at": "2026-10-18T17:48:30+00:00"
      }
     ],
     "places": [
      {
       "name": "קהיר, מצרים",
       "lat": 30.0444,
       "lon": 31.2357
      }
     ]
    },
    {
     "id": "YEMEN-10191721-05",
     "title": "ביקור שר ההגנה הסעודי באיחוד האמירויות",
     "summary": "שר ההגנה הסעודי ביקר באיחוד האמירויות ונועד עם השליט במטרה לחזק שיתוף פעולה על רקע ההסלמה מול החות'ים.",
     "axis": "סעודיה-איחוד האמירויות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:15:46+00:00",
     "last_update_at": "2026-10-18T18:38:46+00:00",
     "what_is_not_verified": "ההסכמות המדויקות שהושגו בפגישה סגורה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_wam_news_agency",
       "url": "https://www.newarab.com/news/egypts-top-security-body-agrees-help-saudi-arabia-defend-itself-against-houthi-attacks",
       "published_at": "2026-10-18T18:38:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_wam_news_agency",
       "url": "https://t.me/abualiexpress/132140",
       "published_at": "2026-10-18T17:15:46+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק במחנה אל-עלאם בשבואה",
    "היקף הנזק האמיתי במתקני האנרגיה שהותקפו לכאורה בסעודיה",
    "פרטי ההסכמות האפשריות לשיתוף פעולה מחודש בין איחוד האמירויות לכוחות בדרום תימן"
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
     "value": 3.1082,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנסאר אל-אלה)",
     "declared": [
      "תקיפת אתרים צבאיים, ממשלתיים ותשתיות אנרגיה בסעודיה ובתימן",
      "מניעת סיוע זר לכוחות הממשלה והקואליציה באמצעות איומים פומביים"
     ],
     "inferred": [
      "ערעור היציבות הכלכלית והביטחונית של סעודיה",
      "ביסוס שליטה בנתיבי המים באזור מצר באב אל-מנדב"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר סעודיה ויעדים בתימן",
      "איומים ישירים על כוחות זרים שיבחרו לסייע לקואליציה"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הגנה על ביטחון הממלכה, מתקני האנרגיה ושדות התעופה שלה",
      "קבלת סיוע לוגיסטי והגנתי מבעלות ברית אזוריות"
     ],
     "inferred": [
      "שאיפה להרחיב את הלגיטימציה האזורית והבינלאומית למאבק בחות'ים",
      "ניסיון לאחות קרעים קודמים עם איחוד האמירויות ומצרים"
     ],
     "forecast": [
      "דחיית אירועים כלכליים מרכזיים עקב המצב הביטחוני",
      "הידוק שיתופי הפעולה הצבאיים עם מצרים וגורמים נוספים"
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "בחינת אפשרות למתן סיוע הגנתי ולוגיסטי לסעודיה לבקשתה",
      "הדגשת הצורך בפתרונות דיפלומטיים ותיווך"
     ],
     "inferred": [
      "זהירות מפני הסתבכות במלחמה ממושכת ויקרה בתימן",
      "דאגה להשפעת הלחימה על הביטחון הימי ותעלת סואץ"
     ],
     "forecast": [
      "דיונים מורכבים בפרלמנט וקבלת החלטות זהירות לגבי פריסת כוחות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/19/at-least-18-killed-in-houthi-attack-on-military-camp-in-yemens-shabwa?traffic_source=rss",
     "accessed_at": "2026-10-19T17:21:42+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/whats-behind-egypts-move-towards-possible-military-involvement-saudi-yemen",
     "accessed_at": "2026-10-19T17:21:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/19/houthi-attack-yemen-al-alam-camp-biggest-single-loss-of-life-civil-war",
     "accessed_at": "2026-10-19T17:21:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-targeted-saudi-airports-energy-and-military-sites",
     "accessed_at": "2026-10-19T17:21:42+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/egypts-top-security-body-agrees-help-saudi-arabia-defend-itself-against-houthi-attacks",
     "accessed_at": "2026-10-19T17:21:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132140",
     "accessed_at": "2026-10-19T17:21:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T02:42:27+00:00",
  "changes": {
   "YEMEN-10191721-01": {
    "kind": "new"
   },
   "YEMEN-10191721-02": {
    "kind": "new"
   },
   "YEMEN-10191721-03": {
    "kind": "possible",
    "prev": "פגיעה באוכלוסייה ובתשתיות במחוז תעז",
    "score": 0.633
   },
   "YEMEN-10191721-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מגעים להענקת סיוע צבאי מצרי להגנת סעודיה",
    "score": 1.0
   },
   "YEMEN-10191721-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיחות ביטחוניות בדרג בכיר בין ערב הסעודית לאיחוד האמירויות",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-19T1708__iran-202610191708.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-19T17:08:39+00:00",
   "window": {
    "from": "2026-10-18T17:08:39+00:00",
    "to": "2026-10-19T17:08:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610191708"
   },
   "summary": "העימות הצבאי בין איראן לבין ארצות הברית וישראל מחריף על רקע חילופי איומים ישירים במכות צבאיות נוספות והשלכות גלובליות על מחירי האנרגיה. במקביל, מצר הורמוז משמש מוקד חיכוך בוער בעקבות שורת תקיפות איראניות על אוניות סוחר, לצד מאמצים דיפלומטיים רוסיים ומגעים אזוריים להרגעת המצב. בחזית הצפונית, ארצות הברית ומדינות נוספות מפעילות לחץ כבד על לבנון וחיזבאללה כדי למנוע הצטרפות פעילה ללחימה מול ישראל.",
   "fronts": [
    {
     "name": "מצר הורמוז ונתיבי השיט במפרץ",
     "status": "פעילה עם פגיעות חוזרות באוניות מכולה על ידי כטבמים, מוקשים וירי רקטי"
    },
    {
     "name": "הזירה הישירה בין ישראל וארצות הברית לאיראן",
     "status": "מתיחות שיא עם איומים הדדיים בהנחתת מהלומות צבאיות נוספות"
    },
    {
     "name": "חזית לבנון וחיזבאללה",
     "status": "מתוחה תחת אזהרות בינלאומיות חמורות מפני התערבות וגילוי מנהרות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10191708-01",
     "title": "תקיפות איראניות על אוניות מכולה במצר הורמוז",
     "summary": "לפחות חמש עשרה אוניות מכולה הותקפו באמצעות כטבמים ומוקשים בעשרת הימים האחרונים במצר הורמוז, כולל ירי רקטת מטול מסירה קטנה לעבר כלי שיט במרחק שבעים וחמישה מיילים מצפון-מזרח לג'ובייל.",
     "axis": "מצר הורמוז והמפרץ הפרסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T14:48:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T14:48:56+00:00",
     "last_update_at": "2026-10-19T14:48:56+00:00",
     "what_is_not_verified": "שמועות לפיהן הספינות הובילו סחורות יקרות ערך אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/19/strait-of-hormuz-spilt-cargo-iran-attacks-container-ships",
       "published_at": "2026-10-19T14:48:56+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ובייל, ערב הסעודית",
       "lat": 27.0007,
       "lon": 49.6532
      }
     ]
    },
    {
     "id": "IRAN-10191708-02",
     "title": "שיחות שר החוץ הרוסי בטהראן על המלחמה וביטחון אזורי",
     "summary": "שר החוץ הרוסי סרגיי לברוב קיים שיחות בטהראן עם נשיא איראן ושר החוץ האיראני על רקע המלחמה של ארצות הברית וישראל, כאשר מדינות המפרץ לוחצות לעצירת התקיפות ופתיחת מצר הורמוז.",
     "axis": "איראן מול ארצות הברית וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:08:57+00:00",
     "last_update_at": "2026-10-19T17:04:11+00:00",
     "what_is_not_verified": "הדיווח שלברוב הביא עמו הצעה להעביר את האורניום המועשר לרוסיה אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_232a5afb348dfeab",
       "url": "https://en.irna.ir/news/86297527/President-Pezeshkian-meets-Russian-FM-in-Tehran",
       "published_at": "2026-10-19T17:04:11+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_ff8bf0f9e16a255b",
       "url": "https://en.irna.ir/news/86297436/FM-Araghchi-describes-talks-with-Russian-counterpart-as-productive",
       "published_at": "2026-10-19T15:26:55+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_232a5afb348dfeab",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/19/russias-lavrov-discusses-us-war-and-regional-security-in-tehran-visit?traffic_source=rss",
       "published_at": "2026-10-19T15:15:02+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_232a5afb348dfeab",
       "url": "https://www.aljazeera.com/news/2026/10/19/russias-lavrov-to-discuss-us-war-and-regional-security-during-tehran-visit?traffic_source=rss",
       "published_at": "2026-10-19T13:22:58+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_232a5afb348dfeab",
       "url": "https://t.me/alexmehacarmel/48701",
       "published_at": "2026-10-19T12:08:57+00:00"
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
     "id": "IRAN-10191708-03",
     "title": "האשמות איראן כלפי ארצות הברית במצר הורמוז וקריאה להסדר ביטחון אזורי",
     "summary": "שר החוץ האיראני עבאס עראקצ'י הטיל על ארצות הברית את האחריות למתיחות ולחוסר הביטחון במצר הורמוז, וקרא למדינות האזור להגיע להסדר ביטחוני פנימי ללא נוכחות כוחות זרים.",
     "axis": "מצר הורמוז והמפרץ הפרסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T14:46:29+00:00",
     "last_update_at": "2026-10-19T14:46:29+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-araqchi-blames-us-strait-hormuz-tensions-calls-diplomacy",
       "published_at": "2026-10-19T14:46:29+00:00"
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
     "id": "IRAN-10191708-04",
     "title": "התרעות הדדיות בין ישראל, ארצות הברית ואיראן להסלמת התקיפות",
     "summary": "מנהיגי ארצות הברית וישראל החריפו את איומיהם לחידוש התקיפות באיראן, בעוד טהראן ומשמרות המהפכה מזהירים מפני תגובה קשה שתפגע באנרגיה העולמית ותסבך את וושינגטון.",
     "axis": "איראן מול ארצות הברית וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T01:31:23+00:00",
     "last_update_at": "2026-10-19T13:49:29+00:00",
     "what_is_not_verified": "ההערכה האיראנית שארצות הברית תפעל צבאית באופן מוגבל כדי להשיג הישג בחירות אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610193317",
       "published_at": "2026-10-19T13:49:29+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94705",
       "published_at": "2026-10-19T12:44:48+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610194621",
       "published_at": "2026-10-19T01:31:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10191708-05",
     "title": "אזהרות של נציגויות ארצות הברית במזרח התיכון",
     "summary": "שגרירויות ארצות הברית באחת עשרה מדינות באזור המזרח התיכון פרסמו אזהרות לאזרחיהן עקב איומים מצד איראן והחות'ים.",
     "axis": "איראן וגרורותיה מול ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T05:30:46+00:00",
     "last_update_at": "2026-10-19T05:30:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132151",
       "published_at": "2026-10-19T05:30:46+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      },
      {
       "name": "עמאן, ירדן",
       "lat": 31.9516,
       "lon": 35.924
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "IRAN-10191708-06",
     "title": "אזהרת ארצות הברית וגורמים מערביים ללבנון מפני התערבות בעימות מול ישראל",
     "summary": "הועברו מסרים אמריקאיים ומערביים לראשי השלטון בלבנון המזהירים מפני התערבות בלחימה או הצטרפות של חיזבאללה לעימות בין ישראל לאיראן, תוך איום בתגובה ישראלית נרחבת וקשה.",
     "axis": "לבנון וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:14:19+00:00",
     "last_update_at": "2026-10-19T08:57:00+00:00",
     "what_is_not_verified": "פרטי המסרים המדויקים נמסרו מפי גורם בודד בעיתון המקורב לחיזבאללה ואינם מאומתים רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958026",
       "published_at": "2026-10-19T08:57:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94698",
       "published_at": "2026-10-19T08:14:19+00:00"
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
     "id": "IRAN-10191708-07",
     "title": "חשיפת מנהרה ליד ביירות על רקע מתיחות סביב חיזבאללה",
     "summary": "מנהרה אותרה בסמוך לביירות בתקופה של מתיחות גבוהה בין הרשויות בלבנון לחיזבאללה, בעקבות תפיסת משלוחי נשק שיועדו לארגון הנתמך בידי איראן.",
     "axis": "לבנון וחיזבאללה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T13:39:00+00:00",
     "last_update_at": "2026-10-19T13:39:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/lebanon-uncovers-new-tunnel-amid-tensions-hezbollah-what-know",
       "published_at": "2026-10-19T13:39:00+00:00"
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
     "id": "IRAN-10191708-08",
     "title": "גינוי סיני לתקיפות של ארצות הברית וישראל והתנגדות לסנקציות",
     "summary": "בפגישה עם סגן נשיא איראן גינה ראש ממשלת סין את הלחימה הנכפית בידי ארצות הברית וישראל נגד איראן, והביע התנגדות לסנקציות אמריקאיות חד-צדדיות ותמיכה בזכויותיה של טהראן.",
     "axis": "איראן מול ארצות הברית וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T16:20:53+00:00",
     "last_update_at": "2026-10-19T16:20:53+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_e116ce3aec97ec8f",
       "url": "https://en.irna.ir/news/86297507/China-condemns-US-Israeli-attacks-on-Iran-opposes-unilateral",
       "published_at": "2026-10-19T16:20:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10191708-09",
     "title": "הנחיה באיראן לבחינת המוכנות ההגנתית בעקבות המלחמות האחרונות",
     "summary": "ראש המטה של הכוחות המזוינים באיראן קרא לבחון מחדש את המוכנות הביטחונית ולשפר יכולות טכנולוגיות, מודיעיניות והיברידיות על בסיס הלקחים שהופקו מאירועי המלחמה האחרונים.",
     "axis": "איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T16:30:01+00:00",
     "last_update_at": "2026-10-19T16:30:01+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_49a26a1b5134f570",
       "url": "https://en.irna.ir/news/86297486/Armed-Forces-chief-calls-for-review-of-defense-preparedness-in",
       "published_at": "2026-10-19T16:30:01+00:00"
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
     "id": "IRAN-10191708-10",
     "title": "איום איראני בסנקציות סביב מיזמי בינה מלאכותית במפרץ",
     "summary": "יושב ראש הפרלמנט האיראני קרא לממשלות ולגופים באזור שלא לשתף פעולה או להעביר משאבים לחברות טכנולוגיה המסייעות לפגיעה ולפלישות, ואיים בצעדי אכיפה.",
     "axis": "המפרץ הפרסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:46:01+00:00",
     "last_update_at": "2026-10-18T17:46:01+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48682",
       "published_at": "2026-10-18T17:46:01+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הדיווח לפיו שר החוץ הרוסי לברוב הגיע לטהראן עם הצעה להעברת האורניום המועשר לרוסיה.",
    "הטענה של נשיא אלבניה בדבר עשרות אלפי פרופילים מזויפים שיוחסו לאיראן ולרוסיה סביב המחאה בארצו.",
    "השמועות בדבר סחורות יקרות ערך שהובילו האוניות שנפגעו במצר הורמוז.",
    "תוכן המסרים המדויק שהועבר להנהגת לבנון בנוגע להסרת כל המגבלות בתגובה הישראלית."
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
     "value": 3.1082,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להגיב בעוצמה לכל תקיפה מחודשת ולגרום למשבר אנרגיה עולמי.",
      "לכונן הסדר ביטחון אזורי ללא נוכחות כוחות זרים במפרץ.",
      "להתנגד לסנקציות החד-צדדיות ולשמור על זכויותיה."
     ],
     "inferred": [
      "לשבש את תנועת השיט במצר הורמוז כדי לייצר מנוף לחץ כלכלי על המערב.",
      "להעמיק את התיאום הדיפלומטי והכלכלי עם רוסיה וסין."
     ],
     "forecast": [
      "המשך פעולות הטרדה ופגיעה באוניות סוחר בנתיבי השיט.",
      "היערכות צבאית פנימית למניעת תקיפות פתע נוספות."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "אזהרת אזרחים במזרח התיכון מפני איומים צבאיים של איראן ושלוחותיה.",
      "הרתעת גורמים בלבנון וחיזבאללה מפני פתיחת חזית נוספת."
     ],
     "inferred": [
      "שימור לחץ צבאי וסנקציות על טהראן תוך מניעת גלישת המלחמה לכלל האזור.",
      "הפעלת הרתעה להגנה על בעלות בריתה ועל נתיבי השיט."
     ],
     "forecast": [
      "שמירה על כוננות צבאית גבוהה בנציגויות ובבסיסים במזרח התיכון.",
      "בחינת תקיפות מוגבלות במקרה של המשך פגיעה בשיט או בנכסים אמריקאיים."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התנגדות עקבית לשיתוף הפעולה בין מוסקבה לטהראן ולרשתות השפעה עוינות.",
      "התרעה ברורה מפני מעורבות של חיזבאללה ולבנון בלחימה."
     ],
     "inferred": [
      "נכונות לפעול צבאית בעוצמה רבה מול איראן ומול שלוחותיה אם תותקף.",
      "סיכול התבססות שלוחות איראן והעברות נשק בסמוך לגבולותיה."
     ],
     "forecast": [
      "שמירה על מוכנות לתקיפות תגמול רחבות באיראן ובמרחב הצפוני.",
      "המשך תיאום אסטרטגי הדוק מול הממשל האמריקאי."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/19/russias-lavrov-to-discuss-us-war-and-regional-security-during-tehran-visit?traffic_source=rss",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/lebanon-uncovers-new-tunnel-amid-tensions-hezbollah-what-know",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/19/strait-of-hormuz-spilt-cargo-iran-attacks-container-ships",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610194621",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86297486/Armed-Forces-chief-calls-for-review-of-defense-preparedness-in",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132151",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48682",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94698",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958026",
     "accessed_at": "2026-10-19T17:08:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T02:40:39+00:00",
  "changes": {
   "IRAN-10191708-01": {
    "kind": "possible",
    "prev": "פיצוץ ופגיעת מוקש במכלית נפט במצר הורמוז",
    "score": 0.467
   },
   "IRAN-10191708-02": {
    "kind": "possible",
    "prev": "אזהרת טהראן למדינות האזור מפני שיתוף פעולה טכנולוגי וצבאי",
    "score": 0.633
   },
   "IRAN-10191708-03": {
    "kind": "possible",
    "prev": "הצעת טהראן לפתיחת מצר הורמוז והמשך המגעים הדיפלומטיים",
    "score": 0.467
   },
   "IRAN-10191708-04": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "הסלמת איומים הדדיים בתקיפות צבאיות בין ארה\"ב וישראל לאיראן",
    "score": 1.0
   },
   "IRAN-10191708-05": {
    "kind": "new"
   },
   "IRAN-10191708-06": {
    "kind": "new"
   },
   "IRAN-10191708-07": {
    "kind": "new"
   },
   "IRAN-10191708-08": {
    "kind": "new"
   },
   "IRAN-10191708-09": {
    "kind": "possible",
    "prev": "מינוי שר הגנה קבוע באיראן ואיומים בשיקום המערך הצבאי",
    "score": 0.633
   },
   "IRAN-10191708-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-19T1710__ukraine-202610191710.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-19T17:10:19+00:00",
   "window": {
    "from": "2026-10-18T17:10:19+00:00",
    "to": "2026-10-19T17:10:19+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610191710"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת דרך תקיפות אוויריות הדדיות על תשתיות אנרגיה ומרכזי נתונים, לצד חיכוך דיפלומטי חריף בין קייב לוושינגטון סביב אספקת מודיעין וחימוש. במקביל, מתנהלים מאמצים הומניטריים מוגבלים לחילוץ אזרחים וילדים משטחים כבושים תחת אש.",
   "fronts": [
    {
     "name": "חזית חרקוב",
     "status": "פעילה עם תקיפות אוויריות על אזורים אזרחיים"
    },
    {
     "name": "החזית בדרום אוקראינה וחצי האי קרים",
     "status": "פעילה עם לחימת רחפנים ופעילות ימית"
    },
    {
     "name": "מרחב הסייבר והחלל",
     "status": "פעיל עם עימותים טכנולוגיים ולווייניים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10191710-01",
     "title": "תקיפת כטב\"ם רוסי באזור חרקוב",
     "summary": "פגיעה של כטב\"ם רוסי בפארק במחוז חרקוב גרמה למותם של ילדים, תינוק ונשים, ולפצועים רבים.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T15:59:00+00:00",
     "last_update_at": "2026-10-19T16:49:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק משתנה בדיווחים השונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4176041-three-children-among-six-killed-in-russian-strike-on-kharkiv-region-park.html",
       "published_at": "2026-10-19T16:49:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_ukrinform",
       "url": "https://kyivindependent.com/russian-drone-strike-on-park-in-kharkiv-oblast-kills-children-and-infant/",
       "published_at": "2026-10-19T16:38:40+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4176024-russian-drone-strike-on-park-in-kharkiv-region-kills-two-women-and-infant-injures-15-people.html",
       "published_at": "2026-10-19T15:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "נובה וודולאחה, אוקראינה",
       "lat": 49.7181,
       "lon": 35.8602
      }
     ]
    },
    {
     "id": "UKRAINE-10191710-02",
     "title": "פינוי אווירי ראשון של חייל פצוע באמצעות רחפן",
     "summary": "הצבא האוקראיני ביצע פינוי ראשון מסוגו של חייל פצוע מקו החזית באמצעות רחפן כבד משודרג.",
     "axis": "חזית הקרקע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T11:30:08+00:00",
     "last_update_at": "2026-10-19T16:30:00+00:00",
     "what_is_not_verified": "האם הטכנולוגיה תיושם בהיקף נרחב באופן מיידי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_8072f8b1295dcd23",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058793/",
       "published_at": "2026-10-19T16:30:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_8072f8b1295dcd23",
       "url": "https://www.ynet.co.il/news/article/b1t0q9q3ze",
       "published_at": "2026-10-19T16:24:58+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_8072f8b1295dcd23",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21660704",
       "published_at": "2026-10-19T13:56:25+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_8072f8b1295dcd23",
       "url": "https://t.me/alexmehacarmel/48700",
       "published_at": "2026-10-19T11:30:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10191710-03",
     "title": "התקרבות מסוכנת בין לווין צבאי רוסי ללווין פיני-אמריקאי",
     "summary": "הלווין הצבאי הרוסי קוסמוס 2612 התקרב באופן חריג ללווין הקישוריות המשרת את אוקראינה.",
     "axis": "חלל וטכנולוגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T15:57:24+00:00",
     "last_update_at": "2026-10-19T15:57:24+00:00",
     "what_is_not_verified": "מטרתן המדויקת של תמרוני הלווין והאם מדובר בשיבוש אקטיבי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_leolabs",
       "url": "https://meduza.io/en/news/2026/10/19/russian-military-satellite-comes-dangerously-close-to-a-radar-satellite-operated-by-a-finnish-u-s-company-that-supplies-satellite-imagery-to-ukraine",
       "published_at": "2026-10-19T15:57:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10191710-04",
     "title": "פסיקת בית משפט רוסי נגד הבלוגרית טטיאנה מונטיאן",
     "summary": "בית משפט בדונייצק המבוקר על ידי רוסיה גזר 18 חודשי מאסר על הבלוגרית טטיאנה מונטיאן בגין קריאות לקיצוניות.",
     "axis": "העורף הרוסי והשטחים הכבושים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T15:47:33+00:00",
     "last_update_at": "2026-10-19T15:47:33+00:00",
     "what_is_not_verified": "אינו מאומת מעבר לטענות הרשמיות של התביעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_mediazona",
       "url": "https://meduza.io/en/news/2026/10/19/she-wrote-for-rt-and-supported-the-invasion-now-a-russian-court-has-sentenced-blogger-tetyana-montian-to-18-months-for-a-remark-about-taking-out-pro-government-loyalists",
       "published_at": "2026-10-19T15:47:33+00:00"
      }
     ],
     "places": [
      {
       "name": "דונייצק, אוקראינה",
       "lat": 48.0159,
       "lon": 37.8013
      }
     ]
    },
    {
     "id": "UKRAINE-10191710-05",
     "title": "מגעים לפינוי תושבים מאולשקי",
     "summary": "נציגי אוקראינה מנהלים מגעים עם הצד הרוסי במטרה לפנות תושבים מהעיירה הכבושה אולשקי אל השטח שבא שליטת אוקראינה.",
     "axis": "החזית ההומניטרית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T15:40:17+00:00",
     "last_update_at": "2026-10-19T15:40:17+00:00",
     "what_is_not_verified": "סיכויי ההצלחה של המגעים והיקף האישור הרוסי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_dmytro_lubinets",
       "url": "https://meduza.io/en/news/2026/10/19/civilians-trapped-in-russian-occupied-oleshky-have-no-safe-way-out-ukraine-says-it-s-negotiating-with-moscow-to-bring-them-directly-to-ukrainian-controlled-territory",
       "published_at": "2026-10-19T15:40:17+00:00"
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
     "id": "UKRAINE-10191710-06",
     "title": "החזרת ילדים מהשטחים הכבושים לאוקראינה",
     "summary": "עשרות ילדים ובני נוער הוחזרו השבוע מהשטחים הכבושים לשטח בפיקוח אוקראיני במסגרת יוזמת החזרה.",
     "axis": "החזית ההומניטרית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T15:11:00+00:00",
     "last_update_at": "2026-10-19T15:11:00+00:00",
     "what_is_not_verified": "פרטי הלחצים המדויקים שהופעלו עליהם בבתי הספר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_bring_kids_back_ua",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058776/",
       "published_at": "2026-10-19T15:11:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10191710-07",
     "title": "חריגת כטב\"ם אוקראיני לשמי ליטא",
     "summary": "כטב\"ם אוקראיני חדר לשמי ליטא עקב שיבושי לוחמה אלקטרונית רוסית, ואוקראינה התנצלה על כך.",
     "axis": "תקיפות אוויריות וגבולות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T23:29:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T23:29:53+00:00",
     "last_update_at": "2026-10-19T14:53:11+00:00",
     "what_is_not_verified": "הנזק המדויק שנגרם עקב ההתרסקות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_mindaugas_sinkevicius",
       "url": "https://tass.com/world/2204249",
       "published_at": "2026-10-19T14:53:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_mindaugas_sinkevicius",
       "url": "https://t.me/alexmehacarmel/48703",
       "published_at": "2026-10-19T13:55:35+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_mindaugas_sinkevicius",
       "url": "https://www.theguardian.com/world/2026/oct/19/ukraine-war-briefing-trump-accuses-zelenskyy-of-not-wanting-to-end-war-as-feud-rumbles-on",
       "published_at": "2026-10-18T23:29:53+00:00"
      }
     ],
     "places": [
      {
       "name": "וילנה, ליטא",
       "lat": 54.687,
       "lon": 25.2829
      }
     ]
    }
   ],
   "not_verified": [
    "האשמות הדדיות בנוגע להגבלת מערכות Starlink ומסירת אזהרות מודיעין",
    "מספר הנפגעים המדויק בכל תקיפה המדווחת על ידי גורמים שונים"
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
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "שחרור כל השטחים הכבושים",
      "קבלת סיוע צבאי ומודיעיני בלתי מוגבל מהמערב",
      "הצטרפות לאיחוד האירופי"
     ],
     "inferred": [
      "פגיעה בתשתיות קריטיות בתוך רוסיה כדי להקשות על המאמץ המלחמתי",
      "שימור הלגיטימציה הבינלאומית למצוקתה ההומניטרית"
     ],
     "forecast": [
      "המשך הלחץ על בעלות הברית להסרת הגבלות על אמצעי לחימה",
      "ניסיון להאיץ את תהליכי ההצטרפות לאיחוד האירופי"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "החלשת התשתית הצבאית והכלכלית של אוקראינה",
      "מניעת הרחיבה של נאט\"ו והשפעה מערבית באזור"
     ],
     "inferred": [
      "ניצול עייפות המערב כדי לכפות הסדר מדיני בתנאים רוסיים",
      "שיבוש יכולות מודיעין וטכנולוגיה המשרתות את אוקראינה בחלל ובקרקע"
     ],
     "forecast": [
      "המשך מתקפות אוויריות על תשתיות אנרגיה אוקראיניות לקראת החורף",
      "הגברת המאמצים לשיבוש מערכות תקשורת וניווט של אוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/19/ukraine-war-briefing-trump-accuses-zelenskyy-of-not-wanting-to-end-war-as-feud-rumbles-on",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21660704",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-drone-strike-on-park-in-kharkiv-oblast-kills-children-and-infant/",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/19/civilians-trapped-in-russian-occupied-oleshky-have-no-safe-way-out-ukraine-says-it-s-negotiating-with-moscow-to-bring-them-directly-to-ukrainian-controlled-territory",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058776/",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2204249",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48703",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4176024-russian-drone-strike-on-park-in-kharkiv-region-kills-two-women-and-infant-injures-15-people.html",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1t0q9q3ze",
     "accessed_at": "2026-10-19T17:10:19+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T23:40:43+00:00",
  "changes": {
   "UKRAINE-10191710-01": {
    "kind": "new"
   },
   "UKRAINE-10191710-02": {
    "kind": "new"
   },
   "UKRAINE-10191710-03": {
    "kind": "new"
   },
   "UKRAINE-10191710-04": {
    "kind": "new"
   },
   "UKRAINE-10191710-05": {
    "kind": "new"
   },
   "UKRAINE-10191710-06": {
    "kind": "new"
   },
   "UKRAINE-10191710-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת על הגבלת שירותי סטארלינק וחשד לחבלה רוסית בתשתיות התקשורת בליטא",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-19T1732__north-202610191732.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-19T17:32:43+00:00",
   "window": {
    "from": "2026-10-18T17:32:43+00:00",
    "to": "2026-10-19T17:32:43+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610191732"
   },
   "summary": "הגזרה הדרומית בלבנון ממשיכה לבעור על רקע פעילות צבאית קרקעית, תקיפות אוויריות והפגזות ישראליות מול איומי חיזבאללה ונוכחותו בשטח. בתוך לבנון מתחדד המתח הפנימי סביב נשק הארגון ותשתיותיו לצד לחצים בינלאומיים כבדים להימנע מהצטרפות להסלמה רחבה יותר מול איראן. במקביל במזרח סוריה נרשמת פעילות עוינת נקודתית של חמושים נגד חיילי המשטר סמוך לגבול עיראק.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה בעצימות מוגבלת, תקיפות ישראליות יומיומיות והפרות הדדיות של הבנות הפסקת האש"
    },
    {
     "name": "פנים לבנון (ביירות והמתן)",
     "status": "מתיחות פוליטית וביטחונית סביב התחמשות חיזבאללה, מנהרות ומאמצי אכיפה של צבא לבנון"
    },
    {
     "name": "מזרח סוריה (דיר א-זור)",
     "status": "תקריות ירי נקודתיות ופעולות גרילה של חמושים נגד כוחות הצבא הסורי"
    }
   ],
   "events": [
    {
     "id": "NORTH-10191732-01",
     "title": "תקיפות ארטילריה והפצצות של צבא ישראל בדרום לבנון",
     "summary": "חיל האוויר הישראלי וסוללות תותחים ביצעו תקיפות לעבר מספר כפרים ועמקים, בהם טלוסה, חדת'א, ואדי אל-חג'יר, ואדי אל-סלוקי ובשרין.",
     "axis": "חזית דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T14:30:59+00:00",
     "last_update_at": "2026-10-19T16:58:18+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומטרות התקיפה הספציפיות לא פורטו בדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_806e03ef05af75d0",
       "url": "https://english.almanar.com.lb/article/140242/",
       "published_at": "2026-10-19T16:58:18+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_806e03ef05af75d0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-strikes-southern-lebanon-local-sources-report",
       "published_at": "2026-10-19T16:19:52+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_7e5009f792655e52",
       "url": "https://english.almanar.com.lb/article/140222/",
       "published_at": "2026-10-19T15:04:38+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_806e03ef05af75d0",
       "url": "https://english.almanar.com.lb/article/140172/",
       "published_at": "2026-10-19T14:30:59+00:00"
      }
     ],
     "places": [
      {
       "name": "טלוסה, לבנון",
       "lat": 33.2295,
       "lon": 35.489
      },
      {
       "name": "חדת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      },
      {
       "name": "ואדי אל-חג'יר, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-10191732-02",
     "title": "פעילות קרקעית, ירי מקלעים ופיצוצים של כוחות ישראליים בגבול דרום לבנון",
     "summary": "כוח רגלים וטנקים ישראליים פעלו באזור כפר שובא, לצד ירי מקלעים כבדים לעבר זוטר המזרחית ואל-חיאם, ירי נור תאורה וביצוע פיצוץ סמוך לארנון.",
     "axis": "חזית דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T08:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T14:30:59+00:00",
     "last_update_at": "2026-10-19T14:30:59+00:00",
     "what_is_not_verified": "לא התקבל אישור רשמי מצד צה\"ל לגבי מהות הפיצוץ והיקף תנועת הטנקים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/140172/",
       "published_at": "2026-10-19T14:30:59+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר שובא, לבנון",
       "lat": 33.3277,
       "lon": 35.6927
      },
      {
       "name": "אל-חיאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      },
      {
       "name": "ארנון, לבנון",
       "lat": 33.334,
       "lon": 35.5273
      }
     ]
    },
    {
     "id": "NORTH-10191732-03",
     "title": "חשיפת מנהרה באזור אל-פנאר ומעצר חשוד בחפירתה",
     "summary": "כוחות הביטחון של צבא לבנון חשפו מנהרה באורך של כשלושה עשר מטרים במחוז מתן, ללא אמצעי לחימה בתוכה, ועצרו אדם שטען כי חפר אותה בחיפוש אחר זהב.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:31:31+00:00",
     "last_update_at": "2026-10-19T16:34:50+00:00",
     "what_is_not_verified": "המניע האמיתי של החפירה וטענת החשוד כי חיפש זהב נתונים בחקירה ואינם מאומתים סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-tunnel-found-near-beirut-sparks-fresh-hezbollah-tension",
       "published_at": "2026-10-19T16:34:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132178",
       "published_at": "2026-10-19T11:36:57+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963636/lebanese-army-arrests-man-over-tunnel-allegedly-dug-in-search-of-gold/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963636",
       "published_at": "2026-10-19T10:42:17+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963604/lebanese-army-finds-13-meter-tunnel-in-fanar-no-military-equipment-fou/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963604",
       "published_at": "2026-10-19T08:31:31+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-פנאר, לבנון",
       "lat": 33.8788,
       "lon": 35.575
      }
     ]
    },
    {
     "id": "NORTH-10191732-04",
     "title": "הנחיות נשיא לבנון להגברת פריסת הביטחון והחרמת נשק בלתי חוקי",
     "summary": "נשיא לבנון ג'וזף עון הנחה להגביר את נוכחות מנגנוני הביטחון בעיירות הדרום שאינן תחת כיבוש, לפעול להחרמת כלי נשק ולמנוע את הצגתם בפומבי.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T09:44:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T09:44:39+00:00",
     "last_update_at": "2026-10-19T09:44:39+00:00",
     "what_is_not_verified": "מידת היישום המעשי של איסוף הנשק בדרום לא אומתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963622/president-aoun-calls-for-tighter-security-weapons-confiscation-and-inc/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963622",
       "published_at": "2026-10-19T09:44:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10191732-05",
     "title": "העברת אזהרות אמריקניות וערביות לממשלת לבנון מפני התערבות במלחמה",
     "summary": "הועברו מסרים דיפלומטיים לראשי השלטון בביירות המזהירים מפני הצטרפות חיזבאללה לעימות בין ישראל לאיראן ומאיימים בתגובה צבאית חריפה.",
     "axis": "הזירה המדינית-אזורית",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:14:19+00:00",
     "last_update_at": "2026-10-19T08:57:00+00:00",
     "what_is_not_verified": "תוכן המברקים והשיחות הרשמיות לא פורסם ישירות על ידי המדינות המשגרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958026",
       "published_at": "2026-10-19T08:57:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94698",
       "published_at": "2026-10-19T08:14:19+00:00"
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
     "id": "NORTH-10191732-06",
     "title": "הריגת חייל צבא סוריה במארב חמושים באל-באע'וז",
     "summary": "חייל סורי נהרג כתוצאה מירי של חמושים לא מזוהים באזור אל-באע'וז סמוך לגבול עם עיראק.",
     "axis": "חזית מזרח סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T12:53:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:53:04+00:00",
     "last_update_at": "2026-10-19T12:53:04+00:00",
     "what_is_not_verified": "זהות החמושים והשתייכותם הארגונית אינן ידועות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-soldier-killed-in-attack-by-unidentified-gunmen-in-eastern-deir-ez-zor/4093531",
       "published_at": "2026-10-19T12:53:04+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-באע'וז, סוריה",
       "lat": 34.4646,
       "lon": 40.9451
      },
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    },
    {
     "id": "NORTH-10191732-07",
     "title": "מות קצין צה\"ל בהתהפכות רכב מבצעי בדרום לבנון",
     "summary": "סרן אליאב צפלמוס נהרג כתוצאה מהתהפכות רכב האמר שבו נסע במהלך פעילות בלבנון, ובני משפחתו טוענים למחדל בגין נסיעה ללא ליווי כנדרש.",
     "axis": "חזית דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T14:47:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T14:47:44+00:00",
     "last_update_at": "2026-10-19T14:47:44+00:00",
     "what_is_not_verified": "ממצאי תחקיר התאונה הצבאי הרשמי לא הוצגו בטקסט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_48d3b2971f9c4709",
       "url": "https://www.ynet.co.il/news/article/hyti6oqnzx",
       "published_at": "2026-10-19T14:47:44+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "ייעוד המנהרה שנחשפה בפנאר וטענת החשוד כי חיפש בה זהב",
    "זהות החמושים שירו למוות בחייל הסורי באל-באע'וז",
    "מידת ההרס המלאה של 60 כפרים ו-23 אלף בתים בדרום לבנון כפי שנטען בריאיון פוליטי"
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
     "value": 3.1082,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התחמשות חיזבאללה וסיכול איומים מלבנון",
      "יצירת אזור ביטחון ומניעת חזרת תושבים וכוחות חמושים לקו הגבול"
     ],
     "inferred": [
      "הפעלת לחץ צבאי רציף בדרום לבנון כדי למנוע היערכות מחודשת של חיזבאללה",
      "הרחבת השליטה הקרקעית לאזורים עמוקים יותר במידה והארגון יצטרף למערכה איראנית"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות ופעילות ביטחון שוטף לאורך קו הגבול הלבנוני"
     ]
    },
    {
     "actor": "לבנון (השלטון המרכזי)",
     "declared": [
      "מחויבות לפתרון דיפלומטי והפסקת ההפרות הצבאיות הישראליות",
      "הידוק האכיפה הביטחונית והחרמת אמצעי לחימה בלתי חוקיים בדרום המדינה"
     ],
     "inferred": [
      "שאיפה למנוע גרירת המדינה למלחמה אזורית כוללת שתחריב את הכלכלה והתשתיות",
      "ניסיון לאזן בין הדרישות הבינלאומיות לפירוק חיזבאללה לבין שמירה על יציבות הפנים"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים ותגבור זהיר של כוחות ביטחון פנים באזורים כפריים"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות צבאיות והברחות נשק למרות ההסדרים והלחצים",
      "הימנעות מפירוק מוחלט של מערכיו תוך שמירה על משוואת תגובה מול פעולות ישראל"
     ],
     "forecast": [
      "שמירה על פרופיל מבצעי מבוקר תוך תלות בהתפתחויות בעימות הישראלי-איראני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/140172/",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syrian-soldier-killed-in-attack-by-unidentified-gunmen-in-eastern-deir-ez-zor/4093531",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963622/president-aoun-calls-for-tighter-security-weapons-confiscation-and-inc/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963622",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-strikes-southern-lebanon-local-sources-report",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-tunnel-found-near-beirut-sparks-fresh-hezbollah-tension",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132178",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94698",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958026",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyti6oqnzx",
     "accessed_at": "2026-10-19T17:32:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T23:43:58+00:00",
  "changes": {
   "NORTH-10191732-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "ירי ארטילרי לעבר עיירה בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10191732-02": {
    "kind": "possible",
    "prev": "פינוי לוחמות איסוף קרבי ממוצב בגבול לבנון",
    "score": 0.467
   },
   "NORTH-10191732-03": {
    "kind": "new"
   },
   "NORTH-10191732-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פעולות ממשלת לבנון לחיזוק סמכות המדינה ומניעת נשק לא חוקי",
    "score": 0.65
   },
   "NORTH-10191732-05": {
    "kind": "new"
   },
   "NORTH-10191732-06": {
    "kind": "new"
   },
   "NORTH-10191732-07": {
    "kind": "new"
   }
  }
 }
};
