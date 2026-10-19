/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-19T0242__yemen-202610190242.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-19T02:42:27+00:00",
   "window": {
    "from": "2026-10-18T02:42:27+00:00",
    "to": "2026-10-19T02:42:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610190242"
   },
   "summary": "הלחימה בזירה התימנית החריפה וכוללת חילופי מהלומות כבדים בין כוחות הקואליציה הסעודית והממשלה המוכרת לבין תנועת החות'ים. החות'ים ממשיכים לשגר טילים וכלי טיס לעבר ריאד, נג'ראן ומרכזי אנרגיה ותעופה בסעודיה, לצד הפגזות במוקדי חיכוך פנימיים דוגמת מארב ותעז. בתגובה להסלמה, מדינות ערביות ובהן מצרים ואיחוד האמירויות מקדמות תיאום צבאי ומדיני להגנת הממלכה הסעודית.",
   "fronts": [
    {
     "name": "גבול סעודיה-תימן ועומק שטח סעודיה",
     "status": "הסלמה בתקיפות חוצות גבול של החות'ים באמצעות טילים ורחפנים לצד הפצצות של הקואליציה"
    },
    {
     "name": "מחוז מארב",
     "status": "לחימה פעילה ושיגור מטחי טילים בליסטיים לעבר העיר"
    },
    {
     "name": "מחוז תעז",
     "status": "עימותים מתמשכים ופגיעה באזרחים ובתשתיות תחבורה"
    },
    {
     "name": "חופי ים סוף וצפון תימן",
     "status": "שליטה חות'ית ברצועת החוף לצד תקיפות אוויריות מרוכזות בצנעא, חודיידה וצעדה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10190242-01",
     "title": "פגיעת שיגור חות'י באזור מגורים בנג'ראן",
     "summary": "קליע ששוגר על ידי החות'ים פגע בשכונת מגורים בעיר נג'ראן שבדרום ערב הסעודית, גרם לפציעת שישה אזרחים ולנזק לשלושה בתים ושלושה כלי רכב.",
     "axis": "ערב הסעודית - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T16:35:20+00:00",
     "last_update_at": "2026-10-18T16:35:20+00:00",
     "what_is_not_verified": "סוג החימוש שפגע בשכונה אינו מפורט במדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-strike-injures-six-southern-saudi-arabia",
       "published_at": "2026-10-18T16:35:20+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ראן, ערב הסעודית",
       "lat": 17.544,
       "lon": 44.2247
      }
     ]
    },
    {
     "id": "YEMEN-10190242-02",
     "title": "תקיפה אווירית במחוז צעדה בצפון תימן",
     "summary": "פגיעה מהאוויר בבית מגורים במחוז צעדה שבשליטת החות'ים הביאה למותם של לפחות תשעה בני אדם, בהם נשים וילדים, ולפציעתם של שישה עשר נוספים.",
     "axis": "פנים תימן / הקואליציה בראשות סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T08:16:11+00:00",
     "last_update_at": "2026-10-18T18:38:46+00:00",
     "what_is_not_verified": "זהות המטוסים התוקפים מיוחסת לסעודיה ללא אישור רשמי מטעמה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypts-top-security-body-agrees-help-saudi-arabia-defend-itself-against-houthi-attacks",
       "published_at": "2026-10-18T18:38:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-urges-us-accept-proposal-reopen-strait-hormuz",
       "published_at": "2026-10-18T08:16:11+00:00"
      }
     ],
     "places": [
      {
       "name": "צעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-10190242-03",
     "title": "שיגור טילים חות'יים לעבר העיר מארב",
     "summary": "החות'ים שיגרו שמונה טילים בליסטיים לעבר העיר מארב במרכז תימן, במקביל לפעילות התקפית של כוחות הממשלה המוכרת ובעלי בריתם באזור.",
     "axis": "פנים תימן (מארב)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T16:47:51+00:00",
     "last_update_at": "2026-10-18T16:53:05+00:00",
     "what_is_not_verified": "היקף הנפגעים או הנזק המדויק מנפילת הטילים במארב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-target-yemens-marib-missiles",
       "published_at": "2026-10-18T16:53:05+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154222",
       "published_at": "2026-10-18T16:47:51+00:00"
      }
     ],
     "places": [
      {
       "name": "מארב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    },
    {
     "id": "YEMEN-10190242-04",
     "title": "פגיעה באוכלוסייה ובתשתיות במחוז תעז",
     "summary": "דיווח על מותן של שתי נשים ופציעת תשעה אזרחים בתעז כתוצאה מפעילות החות'ים, לצד פגיעה במעבר מים בכביש המרכזי חיג'ת אל-עבד שפגעה בתנועת אזרחים.",
     "axis": "פנים תימן (תעז)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T16:19:12+00:00",
     "last_update_at": "2026-10-18T19:25:21+00:00",
     "what_is_not_verified": "נסיבות הפגיעה המדויקות במעבר הניקוז בכביש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154231",
       "published_at": "2026-10-18T19:25:21+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154228",
       "published_at": "2026-10-18T18:10:21+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154217",
       "published_at": "2026-10-18T16:19:12+00:00"
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
     "id": "YEMEN-10190242-05",
     "title": "מגעים להענקת סיוע צבאי מצרי להגנת סעודיה",
     "summary": "מועצת ההגנה הלאומית של מצרים אישרה להעניק לסעודיה כל תמיכה נדרשת להגנתה נוכח מתקפות החות'ים, בעוד הפרלמנט בקהיר דחה את ההצבעה הרשמית להמשך דיונים.",
     "axis": "מצרים - ערב הסעודית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T11:02:28+00:00",
     "last_update_at": "2026-10-18T18:39:32+00:00",
     "what_is_not_verified": "המתווה המעשי וההרכב של כוחות או ציוד מצרי אפשרי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/egyptian-saudi-foreign-ministers-discuss-regional-de-escalation",
       "published_at": "2026-10-18T18:39:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypts-top-security-body-agrees-help-saudi-arabia-defend-itself-against-houthi-attacks",
       "published_at": "2026-10-18T18:38:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypt-parliament-delays-vote-military-support-saudi-arabia",
       "published_at": "2026-10-18T17:48:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/egypt-says-ready-back-saudi-arabia-war-against-iran-allied-houthis",
       "published_at": "2026-10-18T14:46:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypt-says-ready-give-saudi-arabia-necessary-support",
       "published_at": "2026-10-18T11:09:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132117",
       "published_at": "2026-10-18T11:02:28+00:00"
      }
     ],
     "places": [
      {
       "name": "קהיר, מצרים",
       "lat": 30.0444,
       "lon": 31.2357
      },
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10190242-06",
     "title": "שיחות ביטחוניות בדרג בכיר בין ערב הסעודית לאיחוד האמירויות",
     "summary": "שר ההגנה הסעודי נפגש באבו דאבי עם נשיא איחוד האמירויות וסגנו לדיון בהתפתחויות האזוריות ובחיזוק שיתוף הפעולה הביטחוני, על רקע ההסלמה מול תימן.",
     "axis": "המפרץ (סעודיה - איחוד האמירויות)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T16:11:01+00:00",
     "last_update_at": "2026-10-18T18:38:46+00:00",
     "what_is_not_verified": "פרטי הסיכומים המבצעיים בין המדינות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypts-top-security-body-agrees-help-saudi-arabia-defend-itself-against-houthi-attacks",
       "published_at": "2026-10-18T18:38:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132140",
       "published_at": "2026-10-18T17:15:46+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-vice-president-discusses-regional-developments-saudi-minister-abu",
       "published_at": "2026-10-18T16:11:01+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "YEMEN-10190242-07",
     "title": "שיתוף פעולה מודיעיני ישראלי לסיוע בהגנת סעודיה",
     "summary": "גורמי ביטחון ישראליים מספקים לסעודיה מודיעין להתרעה, בניית מטרות וגיבוש תמונת מצב ביחס לפעילות החות'ים וקשריהם עם איראן.",
     "axis": "ישראל - סעודיה - תימן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T05:22:49+00:00",
     "last_update_at": "2026-10-18T05:22:49+00:00",
     "what_is_not_verified": "אישור רשמי של צה\"ל או גורמים סעודיים על שיתוף הפעולה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957784",
       "published_at": "2026-10-18T05:22:49+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת דובר החות'ים בדבר ביצוע 110 תקיפות סעודיות בתוך יממה ומותם של מעל 30 בני אדם",
    "טענת צבא תימן המוכר על פגיעה וחיסול של מאות לוחמים חות'ים במבצעים ממוקדים",
    "מספר הנפגעים הכולל בתקיפה האווירית בצעדה (דיווחים משתנים בין 9 הרוגים ל-16 פצועים)",
    "היקף וטיב הסיוע המודיעיני הישראלי שנמסר לסעודיה"
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
     "value": 3.0945,
     "unit": "ILS",
     "change_pct": -0.25,
     "source_id": "src_ecb",
     "as_of": "2026-10-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת אנצאר אללה (החות'ים)",
     "declared": [
      "המשך פגיעה במטרות בתוך ערב הסעודית, כולל נמלי תעופה ומתקני נפט"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומבצעי על סעודיה כדי לבלום את הלחץ הצבאי בתימן",
      "ביסוס השליטה ברצועת החוף המערבית של תימן ובמוקדי כוח פנימיים"
     ],
     "forecast": [
      "המשך שיגור טילים וכלי טיס בלתי מאוישים לעבר ערי סעודיה",
      "הגברת הניסיונות להכריע את המערכה במחוז מארב"
     ]
    },
    {
     "actor": "ערב הסעודית",
     "declared": [
      "הגנה על ביטחון הממלכה, ריבונותה ומתקניה האסטרטגיים מפני טרור"
     ],
     "inferred": [
      "גיבוש קואליציה ערבית רחבה הכוללת את מצרים ואיחוד האמירויות לחלוקת נטל ההגנה",
      "שחיקת היכולות הרקטיות והצבאיות של החות'ים באמצעות תקיפות מהאוויר"
     ],
     "forecast": [
      "הידוק שיתוף הפעולה המודיעיני והצבאי עם גורמים אזוריים ובינלאומיים",
      "המשך מתקפות אוויריות נרחבות במוקדי שליטה חות'יים בתימן"
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "נכונות להענקת כל תמיכה נדרשת להגנה על ביטחונה ויציבותה של סעודיה",
      "התמקדות בהגנה בלבד ללא שאיפה לתקוף או להתעמת ישירות"
     ],
     "inferred": [
      "הבטחת היציבות במרחב ים סוף ושמירה על האינטרסים הכלכליים והביטחוניים המשותפים עם מדינות המפרץ"
     ],
     "forecast": [
      "אישור פרלמנטרי לשליחת כוחות או סיוע לוגיסטי והגנתי מוגדר לסעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/egypt-says-ready-back-saudi-arabia-war-against-iran-allied-houthis",
     "accessed_at": "2026-10-19T02:42:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-vice-president-discusses-regional-developments-saudi-minister-abu",
     "accessed_at": "2026-10-19T02:42:27+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/egypts-top-security-body-agrees-help-saudi-arabia-defend-itself-against-houthi-attacks",
     "accessed_at": "2026-10-19T02:42:27+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154217",
     "accessed_at": "2026-10-19T02:42:27+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132140",
     "accessed_at": "2026-10-19T02:42:27+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957784",
     "accessed_at": "2026-10-19T02:42:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T14:09:33+00:00",
  "changes": {
   "YEMEN-10190242-01": {
    "kind": "new"
   },
   "YEMEN-10190242-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התרסקות או הפלת מסוק צבאי סעודי סמוך לגבול תימן",
    "score": 1.0
   },
   "YEMEN-10190242-03": {
    "kind": "new"
   },
   "YEMEN-10190242-04": {
    "kind": "new"
   },
   "YEMEN-10190242-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "יוזמה מצרית לאישור התערבות צבאית להגנת סעודיה",
    "score": 1.0
   },
   "YEMEN-10190242-06": {
    "kind": "possible",
    "prev": "דיווח על חידוש התיאום בין סעודיה לאיחוד האמירויות בתימן",
    "score": 0.467
   },
   "YEMEN-10190242-07": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "דיווח על שיתוף פעולה מודיעיני ישראלי עם סעודיה נגד החות'ים",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-19T0240__iran-202610190240.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-19T02:40:39+00:00",
   "window": {
    "from": "2026-10-18T02:40:39+00:00",
    "to": "2026-10-19T02:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610190240"
   },
   "summary": "העימות הצבאי והמדיני בין ישראל וארצות הברית לבין איראן מחריף ברקע קיפאון במשא ומתן העקיף ולחימה פעילה בנתיבי השיט. טהראן מפעילה לחץ ימי באמצעות מיקוש וסגירת מצר הורמוז ומאיימת בשינוי דוקטרינת הגרעין, לצד מינוי שר הגנה חדש והיערכות לסבב תקיפות נוסף. מנגד, מנהיגי ארה\"ב וישראל מאיימים בהכרעה צבאית ישירה ובהפלת השלטון האיראני, תוך חיזוק שיתוף הפעולה המודיעיני האזורי לבלימת השלוחות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמרחב הימי במפרץ",
     "status": "מתיחות שיא, מיקוש ופגיעה במכליות נפט, עימות סביב סגירת המצר ומצור על נמלים"
    },
    {
     "name": "הזירה הצבאית הישירה (ישראל-ארה\"ב מול איראן)",
     "status": "כוננות הדדית למכת מנע ותקיפות חוזרות, איומים בהפלת המשטר ותגובה נרחבת"
    },
    {
     "name": "הציר המדיני והגרעיני",
     "status": "משא ומתן תקוע על תנאי הפסקת האש ופתיחת המצר, אזהרות משינוי מדיניות הגרעין האיראנית"
    },
    {
     "name": "החזית האזורית ומול השלוחות",
     "status": "סיוע ישראלי מודיעיני לסעודיה מול החות'ים, איומים איראניים על מדינות המפרץ בשל שיתוף פעולה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10190240-01",
     "title": "פיצוץ ופגיעת מוקש במכלית נפט במצר הורמוז",
     "summary": "מכלית נפט עלתה באש והתפוצצה בדרום מצר הורמוז לאחר שפגעה במוקש ימי. זרוע הים של משמרות המהפכה טענה כי כלי השיט פעל בניגוד להנחיות וכיבה את מערכות הזיהוי והניווט שלו.",
     "axis": "איראן - ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T20:46:26+00:00",
     "last_update_at": "2026-10-18T21:30:59+00:00",
     "what_is_not_verified": "לא פורסמה זהות המכלית או אימות עצמאי לטענה שהיא כיבתה מכשירי ניווט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-navy-says-oil-tanker-hits-mine-catches-fire-strait-hormuz",
       "published_at": "2026-10-18T21:30:59+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1378687",
       "published_at": "2026-10-18T20:46:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10190240-02",
     "title": "הצעת טהראן לפתיחת מצר הורמוז והמשך המגעים הדיפלומטיים",
     "summary": "שר החוץ האיראני עבאס עראקצ'י הודיע כי הצעת ארצו לפתוח מחדש את מצר הורמוז בתוך מספר ימים תמורת קבלת תנאיה על ידי וושינגטון נותרה בעינה, בעוד המשא ומתן העקיף תקוע והמצור והסנקציות נמשכים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T10:46:25+00:00",
     "last_update_at": "2026-10-19T02:33:06+00:00",
     "what_is_not_verified": "התוכן המלא של שבעת התנאים שהציבה טהראן ותגובת וושינגטון המדויקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-araghchi-says-us-iran-negotiations-are-not-over",
       "published_at": "2026-10-19T02:33:06+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610180983",
       "published_at": "2026-10-18T13:21:17+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-urges-us-accept-proposal-reopen-strait-hormuz",
       "published_at": "2026-10-18T10:46:25+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "IRAN-10190240-03",
     "title": "הסלמת איומים הדדיים בתקיפות צבאיות בין ארה\"ב וישראל לאיראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ וראש ממשלת ישראל בנימין נתניהו איימו בפעולה צבאית להכרעת המערכה והפלת המשטר, בעוד מפקדים ודיפלומטים איראנים איימו בתגובה קשה ובשינוי מדיניות הגרעין.",
     "axis": "ישראל וארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T17:12:26+00:00",
     "last_update_at": "2026-10-19T01:31:23+00:00",
     "what_is_not_verified": "המועד והאופי של תקיפות אפשריות או אם מדובר בלוחמה פסיכולוגית סביב הבחירות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_30d9f672814b6858",
       "url": "https://www.iranintl.com/en/202610194621",
       "published_at": "2026-10-19T01:31:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_30d9f672814b6858",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-netanyahu-pushing-renewed-war-iran",
       "published_at": "2026-10-18T22:11:35+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_ee727b49273b2412",
       "url": "https://en.irna.ir/news/86296512/Iran-counting-down-for-next-enemy-miscalculation-Armed-Forces",
       "published_at": "2026-10-18T19:42:07+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_30d9f672814b6858",
       "url": "https://www.iranintl.com/en/202610182359",
       "published_at": "2026-10-18T17:12:26+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "ירושלים, ישראל",
       "lat": 31.7788,
       "lon": 35.2258
      },
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-10190240-04",
     "title": "הצגת תפיסת הביטחון הישראלית והיערכות לפעולת מנע",
     "summary": "ראש הממשלה בנימין נתניהו הציג תדריך ביטחוני שבו טען כי ישראל הסירה את סכנת ההשמדה הגרעינית המיידית מצד איראן, והצהיר על נכונות לבצע מכת מנע באיראן גם באופן עצמאי ללא תמיכת ארצות הברית.",
     "axis": "ישראל - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T14:54:05+00:00",
     "last_update_at": "2026-10-18T15:03:59+00:00",
     "what_is_not_verified": "מידת ההתקדמות המדויקת של תוכנית הגרעין האיראנית והיקף הפגיעה בה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957932",
       "published_at": "2026-10-18T15:03:59+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957939",
       "published_at": "2026-10-18T15:03:35+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21652560",
       "published_at": "2026-10-18T14:54:05+00:00"
      }
     ],
     "places": [
      {
       "name": "ירושלים, ישראל",
       "lat": 31.7788,
       "lon": 35.2258
      }
     ]
    },
    {
     "id": "IRAN-10190240-05",
     "title": "מינוי שר הגנה קבוע באיראן ואיומים בשיקום המערך הצבאי",
     "summary": "הפרלמנט בטהראן אישר את מינויו של מהרדאד אחלאקי לשר ההגנה. השר הנכנס התחייב לשקם את תעשיות הטילים והביטחון שנפגעו בתקיפות קודמות, לחזק את שלוחות איראן, ואיים על נשיא ארצות הברית בתגובה קטלנית.",
     "axis": "איראן - ישראל וארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T08:27:56+00:00",
     "last_update_at": "2026-10-18T12:44:09+00:00",
     "what_is_not_verified": "רמת המוכנות של מטוס הקרב הכבד עליו הכריז שר ההגנה האיראני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rk9zgef3me",
       "published_at": "2026-10-18T12:44:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-parliament-approves-mehrdad-akhlaqi-minister-defence",
       "published_at": "2026-10-18T09:46:26+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132112",
       "published_at": "2026-10-18T08:27:56+00:00"
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
     "id": "IRAN-10190240-06",
     "title": "אזהרת טהראן למדינות האזור מפני שיתוף פעולה טכנולוגי וצבאי",
     "summary": "יושב ראש הפרלמנט האיראני מוחמד באקר קאליבאף איים על ממשלות באזור המפרץ שלא לספק משאבים או תשתיות לחברות בינה מלאכותית ונתונים המסייעות לפעולות צבאיות נגד איראן, והבטיח צעדי אכיפה תקיפים.",
     "axis": "איראן - המפרץ וארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:46:01+00:00",
     "last_update_at": "2026-10-18T18:53:13+00:00",
     "what_is_not_verified": "זהות החברות הספציפיות שאליהן התייחס הדובר או צעדי האכיפה המתוכננים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_1d543cc025c0b36e",
       "url": "https://en.irna.ir/news/86296491/Ghalibaf-warns-regional-states-against-assisting-AI-firms-linked",
       "published_at": "2026-10-18T18:53:13+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_1d543cc025c0b36e",
       "url": "https://www.iranintl.com/en/202610181490",
       "published_at": "2026-10-18T18:31:04+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_1d543cc025c0b36e",
       "url": "https://t.me/alexmehacarmel/48682",
       "published_at": "2026-10-18T17:46:01+00:00"
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
     "id": "IRAN-10190240-07",
     "title": "שיתוף פעולה מודיעיני ישראלי במערכה הימית ומול השלוחות",
     "summary": "גורמי מודיעין וחיל הים של ישראל סייעו לצבא ארצות הברית באיתור תשתיות וכלי שיט איראניים במצר הורמוז, וכן מעבירים מידע מודיעיני לסעודיה לצורך יירוט מטרות של החות'ים הנתמכים בידי טהראן.",
     "axis": "ישראל וארה\"ב - איראן ושלוחותיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T05:22:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T05:22:49+00:00",
     "last_update_at": "2026-10-18T05:22:49+00:00",
     "what_is_not_verified": "היקף הסיוע המבצעי המדויק בפועל מעבר לשיתוף מודיעין והתרעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957784",
       "published_at": "2026-10-18T05:22:49+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נסיבות הפיצוץ המדויקות במכלית הנפט במצר הורמוז והגורם שהניח את המוקש",
    "מידת ההתקדמות של איראן לעבר נשק גרעיני בעקבות הפגיעה בתשתיותיה",
    "ההיתכנות של פתיחת מצר הורמוז בתוך שבוע בהתאם להצעת טהראן",
    "מידת המוכנות של ישראל לצאת לתקיפת מנע עצמאית באיראן ללא גיבוי אמריקני",
    "פיתוחו של מטוס הקרב הכבד מתוצרת התעשייה הצבאית האיראנית"
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
     "actor": "איראן",
     "declared": [
      "להביא להסרת הסנקציות והמצור הימי על נמלי המדינה כתנאי לפתיחת מצר הורמוז",
      "להגיב בעוצמה מכרעת לכל פעולה צבאית אמריקנית או ישראלית",
      "לשקם את מנגנוני הייצור הצבאי והטילים ולהמשיך לתמוך בשלוחותיה"
     ],
     "inferred": [
      "שימוש בשיבוש נתיבי הנפט ובמחירי האנרגיה כמנוף לחץ על המערב לקראת חידוש שיחות",
      "הרתעת מדינות המפרץ ממתן סיוע מבצעי או טכנולוגי לתקיפות נגדה",
      "משיכת זמן לצורך התעצמות צבאית ושיקום נכסים שנפגעו"
     ],
     "forecast": [
      "המשך פעולות חבלה והטרדה נקודתיות של מכליות סביב מצר הורמוז לשמירה על מחירי נפט גבוהים",
      "האצת תוכנית הגרעין כאמצעי מיקוח אחרון במקרה של כישלון הדיפלומטיה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת השגת נשק גרעיני בידי איראן בכל תנאי, כולל במכת מנע עצמאית",
      "פירוק טבעת החנק של הציר האיראני ומיגור שלוחותיו באזור",
      "הפלת המשטר בטהראן והסרת האיום הצבאי"
     ],
     "inferred": [
      "ניצול הגיבוי והתיאום עם הממשל האמריקני להנחתת מכה קשה על יכולות הפיקוד והייצור של איראן",
      "העמקת הברית המודיעינית והמבצעית עם מדינות ערב המתונות לבלימת טהראן",
      "שימוש בהישגים הביטחוניים ובמתיחות הצבאית לצרכים פוליטיים פנימיים לקראת הבחירות"
     ],
     "forecast": [
      "המשך הכנות קונקרטיות לפעולה צבאית נגד מתקנים באיראן אם השיחות יקרסו סופית",
      "הגברת שיתוף המודיעין עם בנות ברית אזוריות לפגיעה בשלוחות האיראניות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת נשק גרעיני מאיראן והשלמת המלאכה הצבאית במידת הצורך",
      "הבטחת חופש השיט הבינלאומי במצר הורמוז והסרת החסימה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי מרבי כדי לאלץ את טהראן להתפשר במשא ומתן ללא מלחמה אזורית כוללת",
      "בלימת הזינוק במחירי הנפט העולמיים כדי למנוע השפעות כלכליות ופוליטיות שליליות"
     ],
     "forecast": [
      "בחינת אפשרות לתקיפות ממוקדות נגד מתקנים ימיים או נכסי משמרות המהפכה אם יימשכו הפגיעות במצר הורמוז",
      "המשך ערוצי הידברות עקיפים להשגת הסדרה חלקית בנוגע לשיט במפרץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/irans-parliament-approves-mehrdad-akhlaqi-minister-defence",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610181490",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86296491/Ghalibaf-warns-regional-states-against-assisting-AI-firms-linked",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21652560",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1378687",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-netanyahu-pushing-renewed-war-iran",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132112",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48682",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957784",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rk9zgef3me",
     "accessed_at": "2026-10-19T02:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T14:08:28+00:00",
  "changes": {
   "IRAN-10190240-01": {
    "kind": "possible",
    "prev": "עמדת ממשל ארה\"ב בנוגע לתוכנית הגרעין האיראנית ומצר הורמוז",
    "score": 0.467
   },
   "IRAN-10190240-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצעת איראן להסדר פתיחת מצר הורמוז ומגעים דיפלומטיים מול ארה\"ב",
    "score": 1.0
   },
   "IRAN-10190240-03": {
    "kind": "new"
   },
   "IRAN-10190240-04": {
    "kind": "new"
   },
   "IRAN-10190240-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרות ואיומים מצד שר ההגנה האיראני הנכנס כלפי ארה\"ב וישראל",
    "score": 1.0
   },
   "IRAN-10190240-06": {
    "kind": "new"
   },
   "IRAN-10190240-07": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "שיתוף פעולה מודיעיני של צה\"ל לאיתור תשתיות איראניות",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-18T2340__ukraine-202610182340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-18T23:40:43+00:00",
   "window": {
    "from": "2026-10-17T23:40:43+00:00",
    "to": "2026-10-18T23:40:43+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610182340"
   },
   "summary": "העימות הצבאי בין רוסיה לאוקראינה ממשיך בעוצמה גבוהה עם חילופי מהלומות טילים וכטב\"מים על ערי אוקראינה ועל מתקני תשתית בעומק שטח רוסיה. בקו המגע נרשמת לחימה עזה בעשרות מוקדים במזרח, תוך טענות אוקראיניות לבלימת התקדמות רוסית ולשמירה על שטחים ששוחררו. במקביל חלה החרפה פומבית ביחסים בין קייב לממשל האמריקני החדש עקב הקפאת סנקציות על מוסקבה ומחלוקות על השימוש ברשתות תקשורת לווייניות.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "לחימה עזה ביותר ומתקפות חוזרות ונשנות של הכוחות הרוסיים"
    },
    {
     "name": "גזרת דוברופיליה ומחוז דונצק",
     "status": "קרבות הגנה ובלימת חדירות רוסיות תחת שליטה אוקראינית"
    },
    {
     "name": "גזרת זפוריז'יה",
     "status": "היערכות הגנתית אוקראינית מול כוחות רוסיים המצויים כעשרים קילומטרים מהעיר"
    },
    {
     "name": "חזית חרסון (בריסלב)",
     "status": "הפגזות רוסיות רצופות ופינוי אוכלוסייה אזרחית"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10182340-01",
     "title": "הנשיא טראמפ השעה סנקציות נגד רוסיה ומתח ביקורת על הנהגת אוקראינה",
     "summary": "נשיא ארצות הברית דונלד טראמפ חתם על צו המשהה חבילת סנקציות כלכליות נרחבות על רוסיה למשך שישים יום לצורך בחינת השפעתן, והאשים את הנשיא זלנסקי בחוסר רצון לסיים את המלחמה ובעמידה בדרכו של משא ומתן לשלום.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T01:07:13+00:00",
     "last_update_at": "2026-10-18T23:29:53+00:00",
     "what_is_not_verified": "האם הטענה של אוקראינה לגבי כוונת הממשל האמריקני להביא לכניעתה מבוססת במציאות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/19/ukraine-war-briefing-trump-accuses-zelenskyy-of-not-wanting-to-end-war-as-feud-rumbles-on",
       "published_at": "2026-10-18T23:29:53+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/other/article/21655157",
       "published_at": "2026-10-18T21:49:51+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203873",
       "published_at": "2026-10-18T21:43:12+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-treasury-secretary-downplays-russia-sanctions-waiver-warns-zelensky-to-be-careful/",
       "published_at": "2026-10-18T21:09:30+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/i-want-this-war-end-trump-defends-pro-russian-policies-in-scathing-diatribe-against-zelensky-2/",
       "published_at": "2026-10-18T21:03:32+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203867",
       "published_at": "2026-10-18T21:02:41+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-18T01:10:25+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/18/ukraine-war-briefing-trumps-sanctions-waiver-is-a-60-day-pause-to-analyse-economic-impact-says-rubio",
       "published_at": "2026-10-18T01:07:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-02",
     "title": "מתקפת כטב\"מים אוקראינית על מתקני נפט ותשתיות בסנקט פטרבורג",
     "summary": "כוחות הביטחון של אוקראינה שיגרו כטב\"מים מדגם FP-1 לעבר יעדי תשתית נפט ודיגיטל בעיר סנקט פטרבורג ברוסיה, כולל מסוף נפט, מאגר דלקים ומרכז נתונים, וגרמו לדליקות.",
     "axis": "תקיפות בעומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T10:36:22+00:00",
     "last_update_at": "2026-10-18T18:45:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במתקנים בסנקט פטרבורג.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175714-ukraines-fp1-drones-hit-oil-and-digital-infrastructure-in-st-petersburg.html",
       "published_at": "2026-10-18T18:45:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48666",
       "published_at": "2026-10-18T10:36:22+00:00"
      }
     ],
     "places": [
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10182340-03",
     "title": "מחלוקת על הגבלת שירותי סטארלינק וחשד לחבלה רוסית בתשתיות התקשורת בליטא",
     "summary": "נשיא אוקראינה טען כי ארצות הברית האטה במכוון את קצב התקשורת של מערכת סטארלינק, בעוד בכירים אמריקנים הכחישו זאת בתוקף; במקביל נמסר מליטא על ניסיון הצתה באתר שבו מוצבות אנטנות של הרשת המשרתות את אוקראינה, פעולה שיוחסה לגורמי חבלה רוסיים.",
     "axis": "תשתיות וטכנולוגיה צבאית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T15:53:00+00:00",
     "last_update_at": "2026-10-18T23:29:53+00:00",
     "what_is_not_verified": "הגורם האחראי להגבלת מהירות סטארלינק והזהות המדויקת של מבצעי ניסיון ההצתה בליטא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/19/ukraine-war-briefing-trump-accuses-zelenskyy-of-not-wanting-to-end-war-as-feud-rumbles-on",
       "published_at": "2026-10-18T23:29:53+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48679",
       "published_at": "2026-10-18T16:44:54+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/18/killed-injured-russia-ukraine-strikes-power-infrastructure",
       "published_at": "2026-10-18T16:37:52+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058641/",
       "published_at": "2026-10-18T16:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058639/",
       "published_at": "2026-10-18T15:53:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-04",
     "title": "פגיעות טילים בליסטיים רוסיים בבירה קייב",
     "summary": "טילים בליסטיים מתוצרת רוסיה פגעו בקייב בסמיכות מיידית להפעלת התרעות הצופרים, כאשר גורם אוקראיני רשמי ציין כי האזהרה הגיעה רק לאחר הפגיעה עצמה.",
     "axis": "תקיפות על ערי אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T20:20:34+00:00",
     "last_update_at": "2026-10-18T20:20:34+00:00",
     "what_is_not_verified": "מספר הנפגעים ומיקום הפגיעות המדויק בקייב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-ballistic-missiles-slam-kyiv-right-as-air-raid-alarms-sound/",
       "published_at": "2026-10-18T20:20:34+00:00"
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
     "id": "UKRAINE-10182340-05",
     "title": "קרבות עזים בקו המגע ולחימה מוגברת בגזרת פוקרובסק",
     "summary": "לאורך החזית התחוללו 173 התנגשויות קרביות ביום אחד, כאשר מוקד הלחימה העיקרי נרשם בגזרת פוקרובסק שבה בוצעו עשרות ניסיונות תקיפה רוסיים.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T20:53:00+00:00",
     "last_update_at": "2026-10-18T20:53:00+00:00",
     "what_is_not_verified": "מספר ההתקפות המדויק בכל תת-גזרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175727-war-update-173-clashes-on-front-line-fiercest-fighting-in-pokrovsk-sector.html",
       "published_at": "2026-10-18T20:53:00+00:00"
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
     "id": "UKRAINE-10182340-06",
     "title": "הפלת עשרות כטב\"מים אוקראיניים בשמי מחוזות רוסיה",
     "summary": "מערכות ההגנה האווירית של רוסיה יירטו והשמידו 41 כלי טיס בלתי מאוישים אוקראיניים מעל המחוזות בלגורוד, בריאנסק, קורסק, אוריול ופסקוב.",
     "axis": "הגנה אווירית ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:39:25+00:00",
     "last_update_at": "2026-10-18T17:39:25+00:00",
     "what_is_not_verified": "מידת הנזק שנגרם בשטח כתוצאה משברי היירוטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2203837",
       "published_at": "2026-10-18T17:39:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-07",
     "title": "פינוי אזרחים מהעיר בריסלב תחת הפגזות רוסיות",
     "summary": "כוחות צבא אוקראינה פינו 15 אזרחים מהעיר בריסלב שבמחוז חרסון, הנתונה להפגזות ארטילריות רוסיות רצופות.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T22:25:00+00:00",
     "last_update_at": "2026-10-18T22:25:00+00:00",
     "what_is_not_verified": "מספר התושבים הנותרים בעיר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175631-fifteen-people-evacuated-from-beryslav-in-kherson-region.html",
       "published_at": "2026-10-18T22:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסלב, אוקראינה",
       "lat": 46.8358,
       "lon": 33.4167
      }
     ]
    },
    {
     "id": "UKRAINE-10182340-08",
     "title": "שיחות דיפלומטיות בין זלנסקי לנציגי ממשל טראמפ",
     "summary": "הנשיא זלנסקי קיים שיחה טלפונית עם נציגיו של טראמפ, סטיב ויטקוף וג'ארד קושנר, שבה דנו בתוצאות המפגשים בפלורידה ובצעדים הבאים להמשך המגעים הדיפלומטיים.",
     "axis": "משא ומתן ומגעים דיפלומטיים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T14:58:00+00:00",
     "last_update_at": "2026-10-18T17:58:00+00:00",
     "what_is_not_verified": "תוכן ההבנות והפרטים המדויקים שעלו בשיחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4175703-zelensky-discusses-next-steps-in-diplomacy-with-trumps-representatives.html",
       "published_at": "2026-10-18T17:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058636/",
       "published_at": "2026-10-18T14:58:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-09",
     "title": "זלנסקי מציב תנאי של הפסקת אש לקיום בחירות לנשיאות",
     "summary": "נשיא אוקראינה הודיע כי יתמודד בבחירות אם ייערכו בזמן המלחמה, וציין כי קיומן מותנה בהפסקת אש כוללת למשך שישים יום לפחות מצד רוסיה לצורך היערכות ביטחונית ותחיקתית.",
     "axis": "מדיניות פנים וממשל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T18:13:00+00:00",
     "last_update_at": "2026-10-18T18:13:00+00:00",
     "what_is_not_verified": "נכונות הצד הרוסי להסכים להפסקת אש בת שישים יום לצורך בחירות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_nbc",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058650/",
       "published_at": "2026-10-18T18:13:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-10",
     "title": "חדירת כלי טיס והתפוצצותו בשמי ליטא",
     "summary": "חפץ מעופף החשוד ככטב\"ם חדר למרחב האווירי של ליטא והתפוצץ, דבר שהביא להקפצת מטוסי קרב של נאט\"ו, כניסת תושבים למקלטים ופגיעה ברכב אזרחי.",
     "axis": "תקריות אזוריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:59:20+00:00",
     "last_update_at": "2026-10-18T17:59:20+00:00",
     "what_is_not_verified": "שיוכו המדויק וזהות משגרי כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/nato-jets-scramble-as-drone-explodes-in-lithuanian-airspace/",
       "published_at": "2026-10-18T17:59:20+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת רוסיה על כיבוש דוברופיליה והתקרבות למרחק 5 ק\"מ מזפוריז'יה",
    "טענות על קיצוץ באספקת טילי יירוט אמריקניים לאוקראינה",
    "האשמות לגבי מעורבות הממשל האמריקני בהגבלת מהירות סטארלינק",
    "הטענה כי גורמי ביון רוסיים עומדים מאחורי ניסיון ההצתה בליטא",
    "השמועות בדבר החרמת רכוש אזרחי על ידי הצבא האוקראיני בקרמטורסק",
    "דיווחים על שיתוף פעולה בין סוכנים רוסים ואיראנים בהובלת מהומות באירופה",
    "מידת הפגיעה המדויקת בצוות הספינה שהותקפה בים השחור"
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
     "actor": "אוקראינה",
     "declared": [
      "חיזוק מערך ההגנה האווירית והמשך שחרור שטחים כבושים",
      "קיום בחירות רק תחת תנאי הפסקת אש של 60 יום והבטחת זכות הצבעה לחיילים",
      "מניעת סטייה אמריקנית לטובת מוסקבה ושימור הסיוע הבינלאומי"
     ],
     "inferred": [
      "פגיעה ממוקדת בתשתיות הכלכליות והאנרגטיות בעומק רוסיה כדי להפעיל לחץ נגדי",
      "הפחתת התלות בהחלטות טכנולוגיות וצבאיות אמריקניות שאינן יציבות"
     ],
     "forecast": [
      "המשך מאמצים לגיוס תמיכה ישירה ממדינות אירופה להשלמת פערי חימוש",
      "החרפת העימות הדיפלומטי מול ארצות הברית אם יוגברו הלחצים לוויתורים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הלחימה והשגת יעדי המערכה בקו המגע",
      "סירוב להפסקת אש ממושכת בת 60 יום עבור בחירות באוקראינה",
      "הסדרת ייצוא מוצרי נפט ונפט מול ארצות הברית ללא התערבות קייב"
     ],
     "inferred": [
      "ניצול המתיחות בין וושינגטון לקייב כדי לשבור את מערך הסנקציות הבינלאומי",
      "המשך שחיקת תשתיות האנרגיה האוקראיניות לקראת החורף"
     ],
     "forecast": [
      "המשך פעולות חבלה עקיפות ומתקפות על נתיבי אספקה ותקשורת לוויינית",
      "הגברת מאמצי ההתקפה במזרח אוקראינה לקראת מיצוי הישגים קרקעיים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "סיום המלחמה באמצעות משא ומתן והשבת רוסיה לשולחן הדיונים",
      "השהיית סנקציות למשך שישים יום לבחינת ההשפעה על הכלכלה העולמית והמקומית",
      "הכחשת מעורבות רשמית בהגבלת פעילות רשת סטארלינק"
     ],
     "inferred": [
      "הפעלת מנופי לחץ כבדים על אוקראינה כדי לאלץ אותה להתפשר במגעים מול רוסיה",
      "מתן תמריצים כלכליים למוסקבה כדי לפתותה להגיע להסכם"
     ],
     "forecast": [
      "המשך צמצום והתניה של הסיוע הביטחוני והמודיעיני לאוקראינה",
      "הגברת המגעים הנפרדים מול מוסקבה בסוגיות אנרגיה ומסחר"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/18/killed-injured-russia-ukraine-strikes-power-infrastructure",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/other/article/21655157",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/nato-jets-scramble-as-drone-explodes-in-lithuanian-airspace/",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058650/",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2203837",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48679",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4175703-zelensky-discusses-next-steps-in-diplomacy-with-trumps-representatives.html",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T02:40:32+00:00",
  "changes": {
   "UKRAINE-10182340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הקפאת סנקציות אמריקאיות על רוסיה והגבלת תקשורת לווינית",
    "score": 1.0
   },
   "UKRAINE-10182340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטבמים אוקראינית על סנקט פטרבורג",
    "score": 1.0
   },
   "UKRAINE-10182340-03": {
    "kind": "new"
   },
   "UKRAINE-10182340-04": {
    "kind": "new"
   },
   "UKRAINE-10182340-05": {
    "kind": "new"
   },
   "UKRAINE-10182340-06": {
    "kind": "new"
   },
   "UKRAINE-10182340-07": {
    "kind": "new"
   },
   "UKRAINE-10182340-08": {
    "kind": "new"
   },
   "UKRAINE-10182340-09": {
    "kind": "new"
   },
   "UKRAINE-10182340-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-18T2343__north-202610182343.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-18T23:43:58+00:00",
   "window": {
    "from": "2026-10-17T23:43:58+00:00",
    "to": "2026-10-18T23:43:58+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610182343"
   },
   "summary": "המתיחות בגזרה הצפונית נמשכת כאשר צה\"ל מרכז כוחות ומעלה כוננות בגבול לבנון וברמת הגולן לנוכח חשש מעימות צבאי, לצד המשך פעילות באש בדרום לבנון. במקביל בלבנון מנסה השלטון המרכזי להרחיב את סמכותו הביטחונית, בעוד הדיונים המדיניים מתמקדים בעתיד פריסת כוחות יוניפי\"ל ובדרישות ההדדיות ליישום החלטה 1701. בסוריה ממשיך הממשל החדש בצעדים לביסוס שליטתו הכלכלית והמוסדית לאחר הפלת המשטר הקודם.",
   "fronts": [
    {
     "name": "גבול ישראל-לבנון",
     "status": "כוננות שיא, תגבור אוגדות ישראליות והפגזות ארטילריות מקומיות בדרום לבנון"
    },
    {
     "name": "חזית רמת הגולן וסוריה",
     "status": "העלאת כוננות ישראלית ודיווחים על פשיטות צה\"ל לצד התייצבות מוסדות הממשל הסורי החדש"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "תגבור כוחות ביטחון בביירות, תפיסת אמצעי לחימה וניסיונות של הממשלה להגביל גורמים חמושים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10182343-01",
     "title": "היערכות ותגבור כוחות צה\"ל בגבול הצפון",
     "summary": "הצבא הישראלי תגבר את כוחותיו ופרס את אוגדות 36 ו-91 וכן את חטיבת גולני בגבול לבנון וברמת הגולן, והעלה את רמת הכוננות בעקבות חשש מהסלמה לקראת הבחירות ודיווחים על העלאת כוננות אצל חזבאללה.",
     "axis": "גבול ישראל-לבנון ורמת הגולן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T13:07:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T13:07:19+00:00",
     "last_update_at": "2026-10-18T14:01:00+00:00",
     "what_is_not_verified": "הטענה כי איראן אישרה לחזבאללה להעלות כוננות או מנסה לפגוע בבחירות בישראל אינה נתמכת במודיעין קונקרטי לפי גורמי ביטחון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963482/israel-reinforces-lebanon-border-as-tensions-rise-over-hezbollah-disar/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963482",
       "published_at": "2026-10-18T14:01:00+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israeli-army-raises-alert-level-ahead-election",
       "published_at": "2026-10-18T13:07:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10182343-02",
     "title": "ירי ארטילרי לעבר עיירה בדרום לבנון",
     "summary": "צבא ישראל ביצע ירי פגזים ארטילריים שפגע בעיירה חדאת'א הממוקמת באזור בינת ג'בייל בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T15:15:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T15:15:45+00:00",
     "last_update_at": "2026-10-18T15:15:45+00:00",
     "what_is_not_verified": "היקף הנזקים או הנפגעים בירי לא צוין בדיווח שמסתמך על תקשורת לבנונית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-army-attacks-town-southern-lebanon",
       "published_at": "2026-10-18T15:15:45+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.165,
       "lon": 35.3916
      },
      {
       "name": "בינת ג'בייל, לבנון",
       "lat": 33.1195,
       "lon": 35.4328
      }
     ]
    },
    {
     "id": "NORTH-10182343-03",
     "title": "פינוי לוחמות איסוף קרבי ממוצב בגבול לבנון",
     "summary": "צוות לוחמות מאיסוף קרבי שהתמקם בפעילות במוצב צבאי ברכס רמים נדרש להתפנות בעקבות הוראה של רב החטיבה בטענה לפגיעה בכללי השירות המשותף.",
     "axis": "גבול ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T16:42:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T16:42:49+00:00",
     "last_update_at": "2026-10-18T16:42:49+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_decb72e052b4c816",
       "url": "https://www.israelhayom.co.il/news/defense/article/21653898",
       "published_at": "2026-10-18T16:42:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10182343-04",
     "title": "פעולות ממשלת לבנון לחיזוק סמכות המדינה ומניעת נשק לא חוקי",
     "summary": "ראש ממשלת לבנון בירך על תגבור כוחות הביטחון בביירות רבתי, הדגיש כי החלטות של מלחמה ושלום שייכות אך ורק למדינה, וקרא למיצוי הדין בעקבות תפיסת משלוח חומרי נפץ בדהר אל-בידר.",
     "axis": "פנים לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T13:28:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T13:28:18+00:00",
     "last_update_at": "2026-10-18T13:28:18+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_3188ef683070d237",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963496/pm-salam-calls-for-stronger-state-authority-stresses-war-and-peace-dec/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963496",
       "published_at": "2026-10-18T13:28:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    },
    {
     "id": "NORTH-10182343-05",
     "title": "פגישת יו\"ר הפרלמנט הלבנוני עם משלחת צרפתית בנושא החלטה 1701 ויוניפי\"ל",
     "summary": "נביה ברי נפגש עם שר החוץ הצרפתי ומשלחתו בביירות, הביע מחויבות להמשך שהות כוחות יוניפי\"ל וקרא ללחץ בין-לאומי ליישום החלטה 1701 בידי ישראל.",
     "axis": "לבנון-ישראל בזירה המדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T08:59:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T08:59:27+00:00",
     "last_update_at": "2026-10-18T08:59:27+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963460/speaker-berri-calls-for-unifil-to-remain-in-lebanon-urges-internationa/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963460",
       "published_at": "2026-10-18T08:59:27+00:00"
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
     "id": "NORTH-10182343-06",
     "title": "מינוי יו\"ר לקרן העושר הריבונית של סוריה",
     "summary": "נשיא סוריה אחמד א-שרע מינה את עומר אל-חלבי ליושב ראש קרן ההשקעות והנכסים הריבונית של המדינה כחלק ממאמצי שיקום הכלכלה וגיוס הון זר.",
     "axis": "סוריה - ממשל וכלכלה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T14:28:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T14:28:59+00:00",
     "last_update_at": "2026-10-18T14:28:59+00:00",
     "what_is_not_verified": "זהות המנהל הקודם שכונה אבו מרים האוסטרלי נמסרה מגורמים אנונימיים ולא אושרה רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_5e9ef2c34a68ddfa",
       "url": "https://www.newarab.com/news/syria-names-omar-al-halabi-chairman-sovereign-wealth-fund",
       "published_at": "2026-10-18T14:28:59+00:00"
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
    "קיומו של מודיעין ממשי המאשר כי איראן תנסה לשבש את הבחירות בישראל",
    "הטענה כי איראן הורתה לחזבאללה להעלות כוננות ולהיערך לעימות מיידי",
    "פרטי הניהול המוקדם של קרן העושר הסורית על ידי גורם המכונה אבו מרים האוסטרלי"
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
      "הסרת טבעת החנק של הציר האיראני ומניעת סכנה גרעינית",
      "אי-התפשרות על תנאי הסכם המסגרת ופירוק חזבאללה מנשקו"
     ],
     "inferred": [
      "ביסוס אזור חיץ או אזור ביטחון קבוע בדרום לבנון",
      "הרחקת איומים צבאיים ומניעת הפתעה לקראת מועד הבחירות בישראל"
     ],
     "forecast": [
      "המשך שמירה על פריסת כוחות מתוגברת בגבול הצפוני",
      "סירוב לוותר במשא ומתן הצבאי הצפוי בטמפה מול לבנון"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "השבת הבלעדיות על החלטות מלחמה ושלום לידי המדינה ומוסדותיה",
      "השארת כוחות יוניפי\"ל וחיוב ישראל ליישום החלטה 1701 והפסקת התקיפות"
     ],
     "inferred": [
      "בלימת השפעתו הצבאית העצמאית של חזבאללה במרחב האזרחי",
      "שימוש בלחץ בין-לאומי אמריקני וצרפתי כדי להביא לנסיגת כוחות צה\"ל"
     ],
     "forecast": [
      "המשך הגברת נוכחות כוחות הביטחון בביירות ובמעברי הפנים",
      "הצגת תביעות מחמירות להפסקת אש בשיחות הביטחוניות בארצות הברית"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות צבאיות תחת לחץ ישראלי ובין-לאומי לפירוק נשק",
      "תיאום רמת הכוננות מול הציר האיראני בהתאם להתפתחויות הפוליטיות בישראל"
     ],
     "forecast": [
      "המשך התנגדות לניסיונות הממשל הלבנוני והקהילה הבין-לאומית לפרקו מנשקו"
     ]
    },
    {
     "actor": "הממשל החדש בסוריה",
     "declared": [
      "משיכת הון זר ושיקום המשק באמצעות ניהול מרכזי של נכסי המדינה"
     ],
     "inferred": [
      "ייצוב המשטר החדש של אחמד א-שרע וניתוק מנכסי מקורבי משטר אסד"
     ],
     "forecast": [
      "המשך מאמצים להשגת לגיטימציה אזורית ובינלאומית לצד ניסיון למנוע חיכוך ישיר מול ישראל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21653898",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963460/speaker-berri-calls-for-unifil-to-remain-in-lebanon-urges-internationa/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963460",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-army-attacks-town-southern-lebanon",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-names-omar-al-halabi-chairman-sovereign-wealth-fund",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T02:41:40+00:00",
  "changes": {
   "NORTH-10182343-01": {
    "kind": "new"
   },
   "NORTH-10182343-02": {
    "kind": "possible",
    "prev": "פעילות צבאית ותקיפות ישראליות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10182343-03": {
    "kind": "new"
   },
   "NORTH-10182343-04": {
    "kind": "new"
   },
   "NORTH-10182343-05": {
    "kind": "new"
   },
   "NORTH-10182343-06": {
    "kind": "new"
   }
  }
 }
};
