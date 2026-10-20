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
  "draft": "drafts/iran/2026-10-20T0511__iran-202610200511.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-20T05:11:52+00:00",
   "window": {
    "from": "2026-10-19T05:11:52+00:00",
    "to": "2026-10-20T05:11:52+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610200511"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל נכנס לחודשו השביעי ומתאפיין בהסלמה ימית חמורה במצר הורמוז, הכוללת פגיעה בספינות מסחר והפלת כטבם אמריקני. במקביל, בכירים בירושלים ובוושינגטון מקיימים התייעצויות ביטחוניות דחופות סביב האפשרות לחידוש מתקפות צבאיות רחבות היקף באיראן. טהרן מנגד מגבירה את פריסת מערכות ההגנה, מהדקת מגעים עם רוסיה ומאיימת לשבש את משק האנרגיה ותשתיות התקשורת העולמיות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "הסלמה פעילה ופגיעה שיטתית בנתיבי השיט המסחריים והפלת כלי טיס"
    },
    {
     "name": "הזירה הצבאית הישירה בין ישראל וארה\"ב לאיראן",
     "status": "כוננות שיא והיערכות לאפשרות של חידוש גלי תקיפות"
    },
    {
     "name": "החזית הדיפלומטית והאזורית (לבנון והמפרץ)",
     "status": "העברת מסרי הרתעה לביירות ומגעים מפרציים ורוסיים למניעת התרחבות הלחימה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10200511-01",
     "title": "יירוט כלי טיס בלתי מאויש אמריקני במצר הורמוז",
     "summary": "משמרות המהפכה הודיעו כי יירטו והשמידו כלי טיס מאויש מרחוק של ארצות הברית מסוג אמ קיו 9 מעל מצר הורמוז באמצעות מערכת הגנה אווירית מתקדמת.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T03:33:01+00:00",
     "last_update_at": "2026-10-20T03:33:01+00:00",
     "what_is_not_verified": "אין אישור או תגובה רשמית מצד ארצות הברית להפלת כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-it-downed-us-mq-9-drone-over-hormuz-strait",
       "published_at": "2026-10-20T03:33:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10200511-02",
     "title": "פגיעה בכלי שיט במצר הורמוז ובמימי המפרץ",
     "summary": "ספינות מסחר ומכולות הותקפו באמצעות כטבמים, מוקשים וירי רקטי במצר הורמוז ומצפון מזרח לג'ובייל, עם דיווחים על טביעת כלי שיט ופגיעה באחרים.",
     "axis": "איראן - השיט הבינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T14:48:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T14:48:56+00:00",
     "last_update_at": "2026-10-19T18:26:13+00:00",
     "what_is_not_verified": "מספר כלי השיט המדויק שנפגעו והיקף הנזק המלא אינם מאומתים ונתונים במחלוקת בין המקורות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94714",
       "published_at": "2026-10-19T18:26:13+00:00"
      },
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
     "id": "IRAN-10200511-03",
     "title": "פגישה חשאית בין שר ההגנה האמריקני לראש ממשלת ישראל",
     "summary": "שר ההגנה של ארצות הברית קיים ביקור בלתי מוכרז בישראל ונפגש בבסיס עובדה עם ראש הממשלה כדי לדון באפשרות לחידוש פעולות צבאיות מול איראן.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T22:42:01+00:00",
     "last_update_at": "2026-10-19T23:11:41+00:00",
     "what_is_not_verified": "תוכן השיחות המדויק וההחלטות שהתקבלו בפגישה לא נמסרו רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21663679",
       "published_at": "2026-10-19T23:11:41+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hk5naze3fe",
       "published_at": "2026-10-19T22:47:35+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94716",
       "published_at": "2026-10-19T22:42:01+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס עובדה, ישראל",
       "lat": 29.9391,
       "lon": 34.9385
      }
     ]
    },
    {
     "id": "IRAN-10200511-04",
     "title": "אזהרות אמריקניות וערביות ללבנון מהתערבות בלחימה",
     "summary": "הועברו מסרי אזהרה להנהגה בביירות מצד ארצות הברית ומדינות נוספות, המזהירים מתגובה ישראלית נרחבת אם חיזבאללה יצטרף לעימות בין ישראל לאיראן.",
     "axis": "ישראל - לבנון - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T08:14:19+00:00",
     "last_update_at": "2026-10-19T08:57:00+00:00",
     "what_is_not_verified": "אמיתות האזהרות מבוססת על מקור ממשלתי לבנוני שצוטט בעיתון המקורב לחיזבאללה בלבד.",
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
     "id": "IRAN-10200511-05",
     "title": "אזהרות ביטחוניות של נציגויות ארצות הברית במזרח התיכון",
     "summary": "מחלקת המדינה ונציגויות דיפלומטיות של ארצות הברית באזור פרסמו התרעות לאזרחים אמריקנים מפני איומים אפשריים לפגיעה באינטרסים מצד איראן וגורמים התומכים בה.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T05:30:46+00:00",
     "last_update_at": "2026-10-19T21:15:09+00:00",
     "what_is_not_verified": "מידת המיידיות של האיומים המיוחסים לאיראן או לבעלות בריתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-government-linked-jet-lands-tehran-regional-tensions-rise",
       "published_at": "2026-10-19T21:15:09+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132151",
       "published_at": "2026-10-19T05:30:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10200511-06",
     "title": "איומים איראניים על תשתיות תקשורת ואנרגיה במצר הורמוז",
     "summary": "בכירים ומשמרות המהפכה באיראן איימו בפגיעה בכבלי תקשורת העוברים במצר הורמוז ובמרכזי מידע, לצד אזהרות על גרימת משבר אנרגיה עולמי במקרה של תקיפה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T12:44:48+00:00",
     "last_update_at": "2026-10-20T04:44:29+00:00",
     "what_is_not_verified": "קיומה של תוכנית מבצעית ממשית לפגיעה בכבלים התת ימיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21663932",
       "published_at": "2026-10-20T04:44:29+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48718",
       "published_at": "2026-10-19T19:19:01+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94705",
       "published_at": "2026-10-19T12:44:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10200511-07",
     "title": "נחיתת מטוס תובלה מבלארוס בתבריז",
     "summary": "מטוס מטען שהגיע מבלארוס נחת בנמל התעופה של תבריז, על רקע עיסוקה של בלארוס בייצור מערכות מכ\"ם והגנה אווירית.",
     "axis": "איראן - סיוע צבאי זר",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T22:06:23+00:00",
     "last_update_at": "2026-10-19T22:06:23+00:00",
     "what_is_not_verified": "מהות המטען שהובל במטוס אינה ידועה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48725",
       "published_at": "2026-10-19T22:06:23+00:00"
      }
     ],
     "places": [
      {
       "name": "תבריז, איראן",
       "lat": 38.0739,
       "lon": 46.2979
      }
     ]
    },
    {
     "id": "IRAN-10200511-08",
     "title": "שינוע מערכת הגנה אווירית בטהרן",
     "summary": "מערכת הגנה אווירית מדגם ח'ורדאד נצפתה במהלך העברה ברחבי טהרן.",
     "axis": "איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T03:20:43+00:00",
     "last_update_at": "2026-10-20T03:20:43+00:00",
     "what_is_not_verified": "היעד המבצעי של שינוע המערכת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48729",
       "published_at": "2026-10-20T03:20:43+00:00"
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
     "id": "IRAN-10200511-09",
     "title": "שיחות שר החוץ הרוסי בטהרן",
     "summary": "שר החוץ של רוסיה קיים שיחות בטהרן עם מקבילו האיראני ועם מזכיר המועצה העליונה לביטחון לאומי, והדגיש את המשך שיתוף הפעולה בין המדינות.",
     "axis": "איראן - רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T14:46:29+00:00",
     "last_update_at": "2026-10-19T21:24:17+00:00",
     "what_is_not_verified": "מידת התמיכה הצבאית המעשית שרוסיה מוכנה לספק לאיראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_f3acca35cbb3115d",
       "url": "https://en.irna.ir/news/86297637/Major-General-Rezaei-stresses-Iran-s-determination-to-strengthen",
       "published_at": "2026-10-19T21:24:17+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_f3acca35cbb3115d",
       "url": "https://www.iranintl.com/en/202610197573",
       "published_at": "2026-10-19T21:18:36+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_f3acca35cbb3115d",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-araqchi-blames-us-strait-hormuz-tensions-calls-diplomacy",
       "published_at": "2026-10-19T14:46:29+00:00"
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
     "id": "IRAN-10200511-10",
     "title": "נחיתת מטוס ממשלתי מאיחוד האמירויות בטהרן",
     "summary": "מטוס השייך לחברת צ'רטר ממשלתית של איחוד האמירויות נחת בטהרן בפעם השנייה תוך ימים ספורים, על רקע החשש מהסלמת העימות האזורי.",
     "axis": "איראן - מדינות המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T21:15:09+00:00",
     "last_update_at": "2026-10-19T21:15:09+00:00",
     "what_is_not_verified": "זהות הנוסעים ומטרת השיחות של הגורמים מאיחוד האמירויות בטהרן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-government-linked-jet-lands-tehran-regional-tensions-rise",
       "published_at": "2026-10-19T21:15:09+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "טענת איראן בדבר הפלת כלי טיס בלתי מאויש אמריקני מסוג MQ-9 מעל מצר הורמוז.",
    "הדיווח בוושינגטון פוסט על תוכנית איראנית מכוונת להשפיע על בחירות האמצע בארצות הברית דרך מחירי האנרגיה.",
    "מספר כלי השיט המדויק שנפגעו במצר הורמוז (פערים בין 12 ל-15 ספינות וטענות בריטיות למספר גבוה יותר).",
    "תוכן המטען של מטוס התובלה שהגיע מבלארוס לנמל התעופה בתבריז.",
    "הדיווח הלבנוני על מסרי אזהרה תקיפים שהעבירה ארצות הברית ישירות לנשיא ולראש ממשלת לבנון."
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
      "הגנה על המרחב האווירי והימי ופתרון סוגיות האזור בדיפלומטיה ללא נוכחות כוחות זרים.",
      "חיזוק שיתוף הפעולה האסטרטגי עם מוסקבה."
     ],
     "inferred": [
      "הפעלת לחץ כלכלי עולמי באמצעות פגיעה בנתיבי האנרגיה במצר הורמוז כדי להרתיע את ארצות הברית מהמשך תקיפות.",
      "העלאת מחירי הדלק ככלי להשפעה פוליטית בתוך ארצות הברית."
     ],
     "forecast": [
      "המשך פעולות הטרדה ימיות ושיבוש תנועת ספינות במצר הורמוז.",
      "תגובה צבאית נרחבת לעבר אינטרסים אמריקניים וישראליים אם תחודש המתקפה."
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "המשך פגיעה כלכלית וצבאית באיראן תוך הגנה על האינטרסים ועל כוחות הברית.",
      "דרישה מבעלות הברית לשאת בנטל העימות מול איראן."
     ],
     "inferred": [
      "בחינת אפשרות לחידוש מתקפות צבאיות בשיתוף פעולה עם ישראל כדי לפגוע ביכולות טהרן.",
      "הרתעת חיזבאללה וגורמים פרו-איראניים מפתיחת חזיתות מקבילות."
     ],
     "forecast": [
      "תגבור האבטחה והנוכחות הימית סביב נתיבי השיט במפרץ הפרסי.",
      "הוצאה לפועל של פעולה צבאית ממוקדת או נרחבת נגד יעדים איראניים."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "העברת אזהרה חריפה לאיראן כי תספוג מכות קשות יותר אם תנסה לפעול.",
      "שימור התיאום ההדוק והברית האסטרטגית מול הממשל האמריקני."
     ],
     "inferred": [
      "חתירה למבצע צבאי משותף עם ארצות הברית נגד תשתיות איראניות בעיתוי הנוכחי.",
      "מניעת כניסת חיזבאללה למערכה באמצעות איומים בהרס נרחב בלבנון."
     ],
     "forecast": [
      "האצת המוכנות המבצעית בחיל האוויר לפעולה התקפית.",
      "המשך תיאום ביטחוני הדוק עם הפנטגון לקראת חידוש אפשרי של העימות."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/irans-araqchi-blames-us-strait-hormuz-tensions-calls-diplomacy",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/19/strait-of-hormuz-spilt-cargo-iran-attacks-container-ships",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610197573",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86297637/Major-General-Rezaei-stresses-Iran-s-determination-to-strengthen",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21663932",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-government-linked-jet-lands-tehran-regional-tensions-rise",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132151",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48729",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94705",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958026",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hk5naze3fe",
     "accessed_at": "2026-10-20T05:11:52+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T17:08:39+00:00",
  "changes": {
   "IRAN-10200511-01": {
    "kind": "new"
   },
   "IRAN-10200511-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפות איראניות על אוניות מכולה במצר הורמוז",
    "score": 1.0
   },
   "IRAN-10200511-03": {
    "kind": "new"
   },
   "IRAN-10200511-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אזהרת ארצות הברית וגורמים מערביים ללבנון מפני התערבות בעימות מול ישראל",
    "score": 1.0
   },
   "IRAN-10200511-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "אזהרות של נציגויות ארצות הברית במזרח התיכון",
    "score": 1.0
   },
   "IRAN-10200511-06": {
    "kind": "possible",
    "prev": "האשמות איראן כלפי ארצות הברית במצר הורמוז וקריאה להסדר ביטחון אזורי",
    "score": 0.467
   },
   "IRAN-10200511-07": {
    "kind": "new"
   },
   "IRAN-10200511-08": {
    "kind": "new"
   },
   "IRAN-10200511-09": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "שיחות שר החוץ הרוסי בטהראן על המלחמה וביטחון אזורי",
    "score": 1.0
   },
   "IRAN-10200511-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-20T0515__ukraine-202610200515.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-20T05:15:06+00:00",
   "window": {
    "from": "2026-10-19T05:15:06+00:00",
    "to": "2026-10-20T05:15:06+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610200515"
   },
   "summary": "הלחימה באוקראינה נמשכת תוך תקיפות אוויריות והפצצות הדדיות במרחבים שונים, ובמקביל מתגלעים עימותים מדיניים חריפים בין הנהגת אוקראינה לממשל האמריקאי בנוגע לעיכוב אספקת חימוש וחלוקת מידע מודיעיני. במקביל, גורמים בינלאומיים שונים מקדמים מגעים דיפלומטיים עוקפים, בעוד הצדדים בשטח נערכים להמשך העימות הצבאי.",
   "fronts": [
    {
     "name": "חזית קייב ומחוזות מרכזיים",
     "status": "פעילה עם תקיפות אוויריות ופגיעה בתשתיות"
    },
    {
     "name": "חזית חרקיב והציר הצפוני",
     "status": "פעילה הכוללת לחימה יבשתית ותקיפות כטב\"מים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10200515-01",
     "title": "תקיפה רוסית במחוז אוקוחיב שבקייב",
     "summary": "מתקפה רוסית פגעה במבנה ייצור ואחסון במחוז אובוחיובי שבקייב, וגרמה להרוגים ופצועים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T18:28:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T18:28:00+00:00",
     "last_update_at": "2026-10-20T04:54:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומצבם אינם מאומתים מעבר לדיווחים הרשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_f8c26223aa8c771b",
       "url": "https://www.ukrinform.net/rubric-ato/4176102-death-toll-from-strike-on-kyiv-region-enterprise-rises-to-three-six-injured.html",
       "published_at": "2026-10-20T04:54:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f8c26223aa8c771b",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/20/8058839/",
       "published_at": "2026-10-20T04:29:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_6e7a5ec733d27711",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058817/",
       "published_at": "2026-10-19T18:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אובוחיובי, אוקראינה",
       "lat": 50.1102,
       "lon": 30.627
      }
     ]
    },
    {
     "id": "UKRAINE-10200515-02",
     "title": "תקיפת כטב\"ם בפארק בעיר נובה וודולה",
     "summary": "כטב\"ם רוסי פגע בפארק מרכזי ביישוב חרקיב וגרם לנפגעים בנפש ובפצועים רבים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T18:03:14+00:00",
     "last_update_at": "2026-10-19T18:03:14+00:00",
     "what_is_not_verified": "זהות כל הנפגעים והנזק המלא אינם מאומתים ממקור חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/19/russian-drone-strike-on-ukrainian-park-kills-six-including-two-children",
       "published_at": "2026-10-19T18:03:14+00:00"
      }
     ],
     "places": [
      {
       "name": "נובה וודולה, אוקראינה",
       "lat": 49.7181,
       "lon": 35.8602
      }
     ]
    },
    {
     "id": "UKRAINE-10200515-03",
     "title": "פינוי חייל פצוע באמצעות רחפן ענק",
     "summary": "המרכז הרפואי הצבאי בחרקיב דיווח על טיפול בחייל שעבר קטיעה ופונה משדה הקרב באמצעות רחפן ענק.",
     "axis": "חזית יבשתית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T04:39:00+00:00",
     "last_update_at": "2026-10-20T04:39:00+00:00",
     "what_is_not_verified": "פרטי הפעולה המדויקים אינם מאומתים ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_4c63f45d5053419f",
       "url": "https://www.ukrinform.net/rubric-ato/4176101-unique-evacuation-kharkiv-military-hospital-tells-how-wounded-soldier-was-rescued-by-heavylift-drone.html",
       "published_at": "2026-10-20T04:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקיב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "קופיאנסק, אוקראינה",
       "lat": 49.7133,
       "lon": 37.6142
      }
     ]
    },
    {
     "id": "UKRAINE-10200515-04",
     "title": "התקרבות בין לוויין צבאי רוסי ללוויין ריגול",
     "summary": "גופי מעקב חלל דיווחו כי לוויין צבאי רוסי התקרב בצורה חריגה ללוויין חישה מרחוק שמופעל על ידי חברה פינית-אמריקאית ומספק שירות לאוקראינה.",
     "axis": "טכנולוגיה ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-19T15:57:24+00:00",
     "last_update_at": "2026-10-19T15:57:24+00:00",
     "what_is_not_verified": "המטרה המדויקת של תמרוני הלוויין אינה מאומתת רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/19/russian-military-satellite-comes-dangerously-close-to-a-radar-satellite-operated-by-a-finnish-u-s-company-that-supplies-satellite-imagery-to-ukraine",
       "published_at": "2026-10-19T15:57:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10200515-05",
     "title": "התנצלות אוקראינה בפני ליטא על סטיית כטב\"מים",
     "summary": "משרד החוץ האוקראיני התנצל בפני ליטא לאחר שפעילות לוחמה אלקטרונית רוסית הסיטה כטב\"מים אוקראיניים לשמי ליטא בדרכם לסנקט פטרבורג.",
     "axis": "תקיפות והפצצות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-19T13:55:35+00:00",
     "last_update_at": "2026-10-19T13:55:35+00:00",
     "what_is_not_verified": "היקף הנזק או המסלול המדויק בליטא אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48703",
       "published_at": "2026-10-19T13:55:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10200515-06",
     "title": "מגעים דיפלומטיים ותכנון פסגות אפשריות",
     "summary": "נציגים אמריקאים מתכננים שיחות בנורווגיה ואפשרות לפגישה עם הנהגת רוסיה וסין, במקביל למתיחות גוברת בין קייב לוושינגטון סביב אספקת חימוש ומודיעין.",
     "axis": "משא ומתן מדיני",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T00:44:45+00:00",
     "last_update_at": "2026-10-20T04:46:47+00:00",
     "what_is_not_verified": "האם הפסגות המשולשות יצאו לפועל ומה תוכנן בהן בדיוק אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_09db930271110216",
       "url": "https://kyivindependent.com/witkoff-plans-ukraine-peace-talks-in-norway-putin-meeting-in-russia/",
       "published_at": "2026-10-20T04:46:47+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_09db930271110216",
       "url": "https://www.ukrinform.net/rubric-polytics/4176098-trump-ready-to-discuss-ending-ukraine-war-with-putin-xi.html",
       "published_at": "2026-10-20T04:08:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_09db930271110216",
       "url": "https://www.ukrinform.net/rubric-polytics/4176096-witkoff-kushner-to-travel-to-norway-for-talks-on-peace-in-ukraine-reuters.html",
       "published_at": "2026-10-20T03:25:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_09db930271110216",
       "url": "https://www.theguardian.com/world/2026/oct/20/ukraine-war-briefing-zelenskyy-claims-us-deliberately-delaying-interceptor-missile-deliveries-to-kyiv",
       "published_at": "2026-10-20T00:44:45+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסלו, נורווגיה",
       "lat": 59.9133,
       "lon": 10.739
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על מזימה מכוונת של ארה\"ב לעכב טילים כדי לכפות כניעה",
    "קיומן המדויק של תכניות חלופיות אירופאיות להקפאת הקו ללא הסכמת אוקראינה",
    "היקף השימוש המדויק של המערכות האלקטרוניות בשיבוש לוויינים ומסלולי כטב\"מים"
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
      "קבלת סיוע צבאי מובטח וטילים מיירטים",
      "הגנה על תשתיות ומניעת כניעה מדינית"
     ],
     "inferred": [
      "שמירה על תמיכה מערבית פעילה למרות חילוקי הדעות עם וושינגטון",
      "המשך פגיעה במטרות בתוך שטחי רוסיה ובנכסיה"
     ],
     "forecast": [
      "החמרת החיכוך הדיפלומטי עם הממשל האמריקאי",
      "הגברת התלות ביוזמות עצמאיות מול מדינות אירופה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הפעילות הצבאית עד להשגת היעדים"
     ],
     "inferred": [
      "ניצול משברים פוליטיים במערב להחלשת התמיכה באוקראינה",
      "תקיפת תשתיות קריטיות להפחתת יכולת העמידה של אוקראינה"
     ],
     "forecast": [
      "המשך הפצצות אוויריות ממוקדות על מרכזים אוקראיניים",
      "ניסיון לקדם פורומים בינלאומיים ללא נוכחות אוקראינית ישירה"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "קידום פתרון דיפלומטי לסיום המלחמה"
     ],
     "inferred": [
      "צמצום מעורבות או האטת קצב משלוחי החימוש מתוך שיקולים פנימיים וכלכליים",
      "הפעלת לחץ על הנהגת אוקראינה להתגמש במשא ומתן"
     ],
     "forecast": [
      "המשך המתיחות הפומבית סביב העברת חלקי חילוף ומיירטים",
      "ניסיונות תיווך מול שחקנים נוספים בזירה הבינלאומית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/20/ukraine-war-briefing-zelenskyy-claims-us-deliberately-delaying-interceptor-missile-deliveries-to-kyiv",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/witkoff-plans-ukraine-peace-talks-in-norway-putin-meeting-in-russia/",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/19/russian-military-satellite-comes-dangerously-close-to-a-radar-satellite-operated-by-a-finnish-u-s-company-that-supplies-satellite-imagery-to-ukraine",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/19/8058817/",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48703",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4176096-witkoff-kushner-to-travel-to-norway-for-talks-on-peace-in-ukraine-reuters.html",
     "accessed_at": "2026-10-20T05:15:06+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-19T17:10:19+00:00",
  "changes": {
   "UKRAINE-10200515-01": {
    "kind": "new"
   },
   "UKRAINE-10200515-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת כטב\"ם רוסי באזור חרקוב",
    "score": 0.817
   },
   "UKRAINE-10200515-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פינוי אווירי ראשון של חייל פצוע באמצעות רחפן",
    "score": 0.65
   },
   "UKRAINE-10200515-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התקרבות מסוכנת בין לווין צבאי רוסי ללווין פיני-אמריקאי",
    "score": 1.0
   },
   "UKRAINE-10200515-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "חריגת כטב\"ם אוקראיני לשמי ליטא",
    "score": 1.0
   },
   "UKRAINE-10200515-06": {
    "kind": "new"
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
