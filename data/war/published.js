/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-02T2040__yemen-202611022040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-02T20:40:22+00:00",
   "window": {
    "from": "2026-11-01T20:40:22+00:00",
    "to": "2026-11-02T20:40:22+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611022040"
   },
   "summary": "הלחימה בתימן הסלימה משמעותית בעקבות קריסת הפסקת האש, כאשר כוחות החות'ים מנהלים מתקפה רחבה ומתקרבים לכדי שמונים קילומטרים ממעוז הממשלה בעדן לצד הטלת מצור על תעז. במקביל, החות'ים חידשו את הפשיטות הקרקעיות ושיגורי הכטב\"מים אל תוך שטח סעודיה, ומנגד הקואליציה בהובלת סעודיה מגיבה בתקיפות אוויריות נרחבות על נמלים ותשתיות נפט בחודיידה. צבא ממשלת תימן מתגבר את מוכנותו הביטחונית ומצהיר על כוונה לבלום את המערך הרקטי והבליסטי של החות'ים.",
   "fronts": [
    {
     "name": "ציר עדן-תעז (דרום תימן)",
     "status": "מתקפה קרקעית של החות'ים, התקדמות לצירים מרכזיים והידוק המצור על תעז מול כוחות הממשלה"
    },
    {
     "name": "גבול תימן-סעודיה",
     "status": "חידוש פשיטות קרקעיות חות'יות על מוצבי משמר הגבול ותקיפת כלי רכב"
    },
    {
     "name": "עורף סעודיה (ריאד, ג'יזאן, דמאם)",
     "status": "שיגורי כטב\"מים חות'יים לעבר נמלי תעופה ויירוטים בסמוך לבירה, לצד איומים על מתקני נפט"
    },
    {
     "name": "חוף הים האדום (חודיידה, ראס עיסא)",
     "status": "תקיפות אוויריות של הקואליציה הסעודית נגד נמלים, מכליות ותשתיות אנרגיה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11022040-01",
     "title": "התקדמות כוחות החות'ים למרחק כשמונים קילומטרים מעדן והידוק המצור על תעז",
     "summary": "החות'ים השתלטו על מחוז הררי בנתיב לעדן ונלחמים על צירי גישה מרכזיים, תוך איום על דרכי הגישה לתעז הנמצאת תחת מצור.",
     "axis": "דרום תימן / עדן ותעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T15:47:06+00:00",
     "last_update_at": "2026-11-02T16:40:18+00:00",
     "what_is_not_verified": "המרחק המדויק מקווי החזית לעדן והשליטה המלאה בצירים לא אומתו באופן עצמאי מעבר לעדויות מקורות צבאיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21762621",
       "published_at": "2026-11-02T16:40:18+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/yemens-houthis-advance-within-80-km-aden-sources-say",
       "published_at": "2026-11-02T15:47:06+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11022040-02",
     "title": "פשיטות קרקעיות של החות'ים על מוצבים צבאיים בגבול סעודיה",
     "summary": "החות'ים ביצעו פשיטות מעבר לגבול לעבר מוצבים בדרום-מערב סעודיה ותקפו כלי רכב, תוך תפיסת אמצעי לחימה של משמר הגבול הסעודי.",
     "axis": "גבול תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T17:30:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T17:30:01+00:00",
     "last_update_at": "2026-11-02T18:50:04+00:00",
     "what_is_not_verified": "סעודיה לא אישרה רשמית את הפשיטות, תפיסת הנשק או הפגיעה בכלי הרכב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/houthis-launched-cross-border-raids-saudi-arabian-military-posts-sources-say",
       "published_at": "2026-11-02T18:50:04+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49229",
       "published_at": "2026-11-02T17:30:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11022040-03",
     "title": "שיגורי כטב\"מים של החות'ים לעבר יעדים בסעודיה",
     "summary": "החות'ים טענו לתקיפת נמלי התעופה בג'יזאן ובדמאם, ובמקביל יורטו כלי טיס בלתי מאוישים באזור ריאד לצד איומים לפגוע במתקני חברת ארמקו.",
     "axis": "סעודיה-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T16:40:18+00:00",
     "last_update_at": "2026-11-02T17:17:53+00:00",
     "what_is_not_verified": "מידת הפגיעה הממשית בנמלי התעופה בג'יזאן ובדמאם אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-says-intensive-negotiations-us-avert-war",
       "published_at": "2026-11-02T17:17:53+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21762621",
       "published_at": "2026-11-02T16:40:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'יזאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      },
      {
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11022040-04",
     "title": "תקיפות אוויריות של הקואליציה בהובלת סעודיה בנמל חודיידה ובאתרי נפט",
     "summary": "הקואליציה תקפה יעדים בנמל חודיידה, נמל ראס עיסא ומתקן נפט במחוז באג'יל, ופגעה ברציף, באונייה מסחרית ובמבנה אוניברסיטאי.",
     "axis": "מערב תימן / הים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T12:15:21+00:00",
     "last_update_at": "2026-11-02T12:15:21+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומידת הפגיעה באזרחים לעומת מטרות צבאיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/three-killed-houthis-strike-yemen-health-clinic-report",
       "published_at": "2026-11-02T12:15:21+00:00"
      }
     ],
     "places": [
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "באג'יל, תימן",
       "lat": 15.0756,
       "lon": 43.1735
      }
     ]
    },
    {
     "id": "YEMEN-11022040-05",
     "title": "פגיעת טיל חות'י במרפאה בדרום תימן",
     "summary": "תקיפת טיל שיוחסה לחות'ים פגעה במרפאה בעיירת החוף ראס אל-ערה במחוז לחג' וגרמה להרוגים ולפצועים.",
     "axis": "דרום תימן / לחג'",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T12:15:21+00:00",
     "last_update_at": "2026-11-02T12:15:21+00:00",
     "what_is_not_verified": "מספר הנפגעים הסופי טרם אומת מעבר לנתונים הראשוניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/three-killed-houthis-strike-yemen-health-clinic-report",
       "published_at": "2026-11-02T12:15:21+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס אל-ערה, תימן",
       "lat": 12.6084,
       "lon": 43.9158
      }
     ]
    },
    {
     "id": "YEMEN-11022040-06",
     "title": "נפילת טיל כושל של החות'ים באזור תעז",
     "summary": "טיל ששיגורו נכשל נפל דרומית לתעז וגרם לפגיעה במספר רב של אזרחים, בהם ילדים.",
     "axis": "דרום תימן / תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T19:24:40+00:00",
     "last_update_at": "2026-11-02T19:24:40+00:00",
     "what_is_not_verified": "הפרטים המבצעיים המדויקים על סוג הטיל ומקום השיגור לא אומתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_612dbb577630ab13",
       "url": "https://www.sabanew.net/viewstory/155076",
       "published_at": "2026-11-02T19:24:40+00:00"
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
     "id": "YEMEN-11022040-07",
     "title": "הודעת צבא תימן על צעדים לנטרול יכולות הטילים של החות'ים",
     "summary": "הכוחות המזוינים של ממשלת תימן הודיעו כי ינקטו צעדים מבצעיים מרתיעים וקפדניים כדי לנטרל את המערך הבליסטי של החות'ים.",
     "axis": "תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T19:35:50+00:00",
     "last_update_at": "2026-11-02T19:35:50+00:00",
     "what_is_not_verified": "היקף התוכנית המבצעית ומועד מימושה בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6b8efe02b21dd3b7",
       "url": "https://www.sabanew.net/viewstory/155080",
       "published_at": "2026-11-02T19:35:50+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות החות'ים לפגיעות ישירות בנמלי התעופה בג'יזאן ובדמאם",
    "מספר הנפגעים המדויק בתקיפות על מתקני הנפט בנמל ראס עיסא ובמחוז באג'יל",
    "ההיקף המדויק של הנשק שנלקח לכאורה ממוצבי הגבול הסעודיים",
    "הדיווחים על פגיעה במבנה הפקולטה לרפואה באוניברסיטת חודיידה",
    "שיעור השליטה המבצעית של החות'ים ברכסים ההרריים המובילים לעדן"
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "תקיפת מתקנים צבאיים ונמלי תעופה בסעודיה",
      "איום בפגיעה במתקני חברת הנפט ארמקו"
     ],
     "inferred": [
      "כיבוש שטחים והפלת הממשלה המוכרת באמצעות איום ישיר על עדן",
      "הפעלת לחץ כלכלי וצבאי על סעודיה להפסקת התערבותה באמצעות תקיפות בעומק הממלכה"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות לעבר צירי אספקה קריטיים בדרום תימן",
      "הסלמת שיגורי כטב\"מים וטילים לעבר מטרות תשתית אנרגיה בסעודיה"
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה בהובלת סעודיה",
     "declared": [
      "נקיטת פעולות צבאיות מרתיעות להשמדת וניטרול היכולות הבליסטיות של החות'ים",
      "תקיפות מדויקות לפגיעה במשאבים חיוניים המשמשים את המיליציה בנמלי הים האדום"
     ],
     "inferred": [
      "הגנה על מרחב עדן ומניעת נפילת בירת הממשלה הזמנית",
      "הגבלת יכולת החות'ים לייבא אמצעי לחימה דרך נמלי הים האדום",
      "בלימת חדירות קרקעיות לגבול הדרומי של סעודיה"
     ],
     "forecast": [
      "החרפת התקיפות האוויריות על תשתיות לוגיסטיות ונמלים שבשליטת החות'ים",
      "תגבור מערכי ההגנה סביב עדן וסביב מתקני אנרגיה בסעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/yemens-houthis-advance-within-80-km-aden-sources-say",
     "accessed_at": "2026-11-02T20:40:22+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21762621",
     "accessed_at": "2026-11-02T20:40:22+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/houthis-launched-cross-border-raids-saudi-arabian-military-posts-sources-say",
     "accessed_at": "2026-11-02T20:40:22+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/three-killed-houthis-strike-yemen-health-clinic-report",
     "accessed_at": "2026-11-02T20:40:22+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155080",
     "accessed_at": "2026-11-02T20:40:22+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49229",
     "accessed_at": "2026-11-02T20:40:22+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T00:42:32+00:00",
  "changes": {
   "YEMEN-11022040-01": {
    "kind": "possible",
    "prev": "טענת החות'ים לעשרות תקיפות סעודיות ביממה אחת",
    "score": 0.633
   },
   "YEMEN-11022040-02": {
    "kind": "new"
   },
   "YEMEN-11022040-03": {
    "kind": "possible",
    "prev": "איומים חוזרים של החות'ים נגד מתקני נפט והתעופה בסעודיה",
    "score": 0.467
   },
   "YEMEN-11022040-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות אוויריות נגד נמל ראס עיסא ורשת תקשורת בסעדה",
    "score": 1.0
   },
   "YEMEN-11022040-05": {
    "kind": "new"
   },
   "YEMEN-11022040-06": {
    "kind": "possible",
    "prev": "פשיטות חות'יות על בתי אנשי ציבור במחוז תעז",
    "score": 0.633
   },
   "YEMEN-11022040-07": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "טענת צבא תימן לפגיעה במאות פעילי חות'ים",
    "score": 0.65
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-02T2029__iran-202611022029.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-02T20:29:48+00:00",
   "window": {
    "from": "2026-11-01T20:29:48+00:00",
    "to": "2026-11-02T20:29:48+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611022029"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל עומד בפני צומת הכרעה סביב בחירות האמצע בארצות הברית, תוך דריכות ביטחונית גבוהה לאפשרות של מתקפת פתע או חידוש המערכה הצבאית. במקביל לאיומים הדדיים ולהיערכות מדינות המפרץ לפגיעה בתשתיותיהן, מתנהלים מגעים עקיפים ויוזמה איראנית לפתיחה מהירה של מצר הורמוז בתמורה לוויתורים. הצדדים נעים בין איתותים על מוכנות להסדר מדיני לבין אזהרות על הסלמה רחבה וחסרת גבולות.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "מצור ימי מתמשך עם הצעה איראנית לפתיחה תוך יומיים ואזהרות ממדינות המפרץ מפני פגיעה בתשתיות"
    },
    {
     "name": "הזירה האווירית והאסטרטגית מול איראן",
     "status": "דריכות שיא לקראת הכרעה אמריקנית וישראלית לגבי תקיפה צבאית נרחבת לאחר בחירות האמצע"
    },
    {
     "name": "שלוחות איראן (חזבאללה)",
     "status": "המשך תמיכה כספית ישירה מטהראן לשיקום נזקי המלחמה ברובע הדאחיה בביירות"
    }
   ],
   "events": [
    {
     "id": "IRAN-11022029-01",
     "title": "הצעה איראנית לפתיחת מצר הורמוז וחידוש שיחות תוך יומיים",
     "summary": "טהראן הציגה מתווה מזורז לפתיחת מצר הורמוז הנצור וחידוש המשא ומתן עם ארצות הברית בתוך יומיים, בתנאי שדרישותיה ייענו.",
     "axis": "איראן - ארה\"ב ומצר הורמוז",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T13:59:21+00:00",
     "last_update_at": "2026-11-02T18:49:26+00:00",
     "what_is_not_verified": "התנאים המדויקים שהציבה איראן והסכמת ארצות הברית לקבלם אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/2/iran-pushing-accelerated-plan-for-ceasefire-talks-with-us?traffic_source=rss",
       "published_at": "2026-11-02T18:49:26+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-engages-us-in-intensive-negotiations-to-avert-fresh-war-outbreak",
       "published_at": "2026-11-02T17:42:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/video/20261102-iran-offers-deal-on-hormuz-strait-netanyahu-wants-to-finish-the-job",
       "published_at": "2026-11-02T17:04:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-gives-2-day-window-hormuz-deal-us-mulls-strikes-what-know",
       "published_at": "2026-11-02T16:18:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-ready-reopen-hormuz-two-days-if-us-agrees-demands",
       "published_at": "2026-11-02T13:59:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11022029-02",
     "title": "אזהרת מדינות המפרץ לאיראן מפני פגיעה בתשתיות",
     "summary": "מדינות המפרץ העבירו אזהרה לטהראן כי פגיעה בתשתיותיהן במקרה של הסלמה תוביל לתגובה צבאית חריפה, במשותף או בנפרד.",
     "axis": "איראן - מדינות המפרץ",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T16:33:20+00:00",
     "last_update_at": "2026-11-02T20:00:07+00:00",
     "what_is_not_verified": "זהות המדינות המדויקות שהעבירו את האזהרה ואופן התגובה המתוכנן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94928",
       "published_at": "2026-11-02T20:00:07+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21763638",
       "published_at": "2026-11-02T19:14:42+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjv8squtmx",
       "published_at": "2026-11-02T16:33:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11022029-03",
     "title": "מחלוקת ודריכות לקראת אפשרות של תקיפה נגד איראן",
     "summary": "במערכת הביטחון בישראל ובארצות הברית נרשמת היערכות לאפשרות של חידוש הלחימה, לצד דיווחים סותרים לגבי לחץ ישראלי לפעולה צבאית מיד לאחר בחירות האמצע.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T03:42:26+00:00",
     "last_update_at": "2026-11-02T19:14:42+00:00",
     "what_is_not_verified": "קיומו של לחץ מצד ראש ממשלת ישראל על הנשיא האמריקני הוכחש רשמית בידי שגריר ישראל באו\"ם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21763638",
       "published_at": "2026-11-02T19:14:42+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjy9gi8tfg",
       "published_at": "2026-11-02T19:04:17+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611029410",
       "published_at": "2026-11-02T18:39:50+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383959733",
       "published_at": "2026-11-02T03:42:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11022029-04",
     "title": "התבטאויות טראמפ בנוגע לאיראן בעצרות בחירות",
     "summary": "הנשיא טראמפ השמיע מסרים כפולים שנעו בין מוכנות להסכם לבין איומים להנחית מכה קשה, וציין כי איראן ביקשה לחדול מפגיעה במנהיגיה.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T01:17:14+00:00",
     "last_update_at": "2026-11-02T19:56:18+00:00",
     "what_is_not_verified": "אמיתות הטענה שאיראן פנתה בבקשה רשמית לעצור פגיעה במנהיגיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133002",
       "published_at": "2026-11-02T19:56:18+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133001",
       "published_at": "2026-11-02T19:49:34+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1384159",
       "published_at": "2026-11-02T19:38:55+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94924",
       "published_at": "2026-11-02T01:17:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11022029-05",
     "title": "הענקת סמכויות לממשלת איראן לניהול מגעים מדיניים",
     "summary": "נשיא איראן מסעוד פזשכיאן הודיע כי המנהיג העליון העניק לממשלה סמכויות מוגדרות לניהול שיחות על מנת לפתור סוגיות בדיאלוג.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T14:20:06+00:00",
     "last_update_at": "2026-11-02T16:33:20+00:00",
     "what_is_not_verified": "היקף הסמכויות שהוענקו וגבולות הוויתורים האיראניים המותרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rjv8squtmx",
       "published_at": "2026-11-02T16:33:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-supreme-leader-gave-government-certain-authorities-over-talks",
       "published_at": "2026-11-02T14:20:06+00:00"
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
     "id": "IRAN-11022029-06",
     "title": "התייעצות ביטחונית בין בכיר איראני לנשיא רוסיה",
     "summary": "מזכיר המועצה העליונה לביטחון לאומי באיראן, מוחסן רזאי, שוחח בטלפון עם נשיא רוסיה ולדימיר פוטין על המלחמה מול ארצות הברית וישראל והתיאום האסטרטגי.",
     "axis": "איראן - רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T15:02:59+00:00",
     "last_update_at": "2026-11-02T15:33:04+00:00",
     "what_is_not_verified": "פרטי הסיכומים המעשיים והסיוע הרוסי אם סוכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_69d1a8d72f9941ee",
       "url": "https://en.irna.ir/news/86310474/Iran-Russia-reaffirm-commitment-to-strategic-cooperation",
       "published_at": "2026-11-02T15:33:04+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_69d1a8d72f9941ee",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-security-chief-discusses-us-israel-war-russian-president-state",
       "published_at": "2026-11-02T15:02:59+00:00"
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
     "id": "IRAN-11022029-07",
     "title": "תגבור אבטחה סביב בית טראמפ בעקבות מידע על כוונת התנקשות איראנית",
     "summary": "הוצבו מערכות הגנה נגד כטב\"מים סביב מעונו של טראמפ בפלורידה בעקבות התרעה מודיעינית על ניסיון איראני לפגוע בו כנקמה על מות חמינאי.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T17:46:13+00:00",
     "last_update_at": "2026-11-02T17:46:13+00:00",
     "what_is_not_verified": "מידת ההתקדמות של המזימה והמעורבות הישירה של הפיקוד בטהראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21763010",
       "published_at": "2026-11-02T17:46:13+00:00"
      }
     ],
     "places": [
      {
       "name": "פלורידה, ארצות הברית",
       "lat": 18.3756,
       "lon": -66.5602
      }
     ]
    },
    {
     "id": "IRAN-11022029-08",
     "title": "אימון טילים של משמרות המהפכה באיראן",
     "summary": "טיל נצפה בשמי חמדאן במסגרת תרגיל צבאי שביצעו משמרות המהפכה.",
     "axis": "איראן פנימי וביטחוני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T16:58:54+00:00",
     "last_update_at": "2026-11-02T16:58:54+00:00",
     "what_is_not_verified": "דגם הטיל ומטרות התרגיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49227",
       "published_at": "2026-11-02T16:58:54+00:00"
      }
     ],
     "places": [
      {
       "name": "חמדאן, איראן",
       "lat": 34.7993,
       "lon": 48.5152
      }
     ]
    },
    {
     "id": "IRAN-11022029-09",
     "title": "חלוקת כספים של חזבאללה בביירות במימון איראני",
     "summary": "בכיר חזבאללה הודיע על מענקי סיוע כספי לתושבים שבתיהם נהרסו ברובע הדאחיה, על רקע דיווח בדבר העברת 200 מיליון דולר מאיראן.",
     "axis": "איראן - חזבאללה מול ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T15:39:59+00:00",
     "last_update_at": "2026-11-02T15:39:59+00:00",
     "what_is_not_verified": "ההעברה בפועל של 200 מיליון הדולר מטהראן לארגון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132992",
       "published_at": "2026-11-02T15:39:59+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11022029-10",
     "title": "אזהרה איראנית מפני התארכות המלחמה והרחבתה",
     "summary": "גורמים באיראן הזהירו כי עימות צבאי חדש עם ארצות הברית עלול להימשך זמן רב יותר מהסבב הקודם ולכלול תגובה ללא מגבלות גיאוגרפיות.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T00:23:23+00:00",
     "last_update_at": "2026-11-02T00:23:23+00:00",
     "what_is_not_verified": "היכולת האיראנית המעשית להרחיב את הלחימה מעבר לזירה המקומית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict",
       "published_at": "2026-11-02T00:23:23+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה לפיה ראש ממשלת ישראל לוחץ על טראמפ לפתוח במתקפה נגד איראן, שהוכחשה על ידי שגריר ישראל באו\"ם",
    "פרטי ניסיון ההתנקשות האיראני בטראמפ שהוביל להצבת אמצעי הגנה בפלורידה",
    "נכונותה המעשית של ארצות הברית לקבל את תנאי איראן להסרת המצור במצר הורמוז תוך יומיים",
    "דיווחים על כוונה ישראלית להנחית מכת פתיחה נגד איראן במבצע המדמה את מתקפת הביפרים",
    "טענת טראמפ כי איראן פנתה רשמית בבקשה להפסיק את חיסול בכיריה"
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הסרת המצור הימי במצר הורמוז וחידוש המשא ומתן תוך יומיים אם ימולאו דרישותיה",
      "אי-כניעה לתוקפנות צבאית ותגובה חסרת גבולות גיאוגרפיים במקרה של מתקפה מחודשת",
      "פתרון סוגיות המחלוקת באמצעות דיאלוג תחת סמכויות שהוענקו מהמנהיג העליון"
     ],
     "inferred": [
      "מניעת מתקפה אמריקנית-ישראלית נוספת לפני או בסמוך לבחירות בארצות הברית",
      "הפחתת הלחץ הכלכלי הבינלאומי באמצעות מנוף פתיחת נתיבי הנפט במפרץ",
      "שימור רשת השלוחות והמשך מימון פעילות חזבאללה בלבנון"
     ],
     "forecast": [
      "המשך איתותים דיפלומטיים מהירים לצד שמירה על מוכנות לירי טילים",
      "הפעלת לחץ עקיף על שוק האנרגיה במידה והשיחות ייקלעו למבוי סתום"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "השארת כל האפשרויות פתוחות, כולל תקיפה חזקה נגד מטרות באיראן לצד פתיחות להסכם",
      "הפסקת החיסולים אם טהראן תחדל מהתנהלותה התוקפנית"
     ],
     "inferred": [
      "דחיית החלטות צבאיות דרמטיות עד לסיום יום הבחירות לקונגרס",
      "הורדת מחירי הנפט והסרת המצור במצר הורמוז כדי להקל על הלחץ הכלכלי",
      "חיזוק ההרתעה מפני מתקפת פתע איראנית על יעדים ונציגויות במזרח התיכון"
     ],
     "forecast": [
      "קבלת הכרעה בסוגיית התקיפה או הפנייה למשא ומתן רשמי מיד לאחר הבחירות",
      "הגברת האבטחה וההגנה סביב אישים אמריקאים ונכסים אזוריים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הכחשה רשמית באו\"ם של הפעלת לחץ על הממשל האמריקני לפתוח במתקפה צבאית",
      "הבעת עמדה של סיום המלאכה מול איומי המשטר האיראני"
     ],
     "inferred": [
      "שאיפה לניצול חלון ההזדמנויות לאחר הבחירות בארצות הברית לפגיעה בתוכנית הגרעין האיראנית",
      "תיאום ביטחוני צמוד עם צבא ארצות הברית מחשש למתקפה איראנית ישירה או באמצעות שלוחות",
      "שמירה על עמימות מבצעית לגבי תוכניות תקיפה עתידיות"
     ],
     "forecast": [
      "שמירה על רמת כוננות ודריכות גבוהה במערכי ההגנה והמודיעין",
      "המשך תיאום מבצעי עם הפיקוד האמריקני לבחינת תרחישי תגובה"
     ]
    },
    {
     "actor": "מדינות המפרץ",
     "declared": [
      "אזהרה נחרצת לפיה כל פגיעה בתשתיותיהן תגרור תגובה צבאית קשה יחד או בנפרד"
     ],
     "inferred": [
      "חשש מהפיכת שטחן לשדה קרב משני בין איראן לקואליציה האמריקנית-ישראלית",
      "הפעלת לחץ דיפלומטי על כלל הצדדים למניעת הידרדרות אזורית שתפגע בכלכלת הנפט"
     ],
     "forecast": [
      "המשך היערכות ביטחונית עצמאית והגברת התיאום מול ארצות הברית",
      "ניסיונות גישור שקטים להרגעת המתיחות הימית במצר הורמוז"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/2/iran-pushing-accelerated-plan-for-ceasefire-talks-with-us?traffic_source=rss",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/iran-gives-2-day-window-hormuz-deal-us-mulls-strikes-what-know",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611029410",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86310474/Iran-Russia-reaffirm-commitment-to-strategic-cooperation",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21763010",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1384159",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-security-chief-discusses-us-israel-war-russian-president-state",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132992",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49227",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94924",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383959733",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rjv8squtmx",
     "accessed_at": "2026-11-02T20:29:48+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T00:40:35+00:00",
  "changes": {
   "IRAN-11022029-01": {
    "kind": "possible",
    "prev": "מגעים עקיפים בדוחה להפסקת הלחימה ופתיחת מצרי הורמוז",
    "score": 0.467
   },
   "IRAN-11022029-02": {
    "kind": "new"
   },
   "IRAN-11022029-03": {
    "kind": "possible",
    "prev": "הצהרות טראמפ על תקיפה צפויה ואפשרות לסיום הלחימה",
    "score": 0.467
   },
   "IRAN-11022029-04": {
    "kind": "possible",
    "prev": "שיחה בין טראמפ לנתניהו בעניין איראן",
    "score": 0.467
   },
   "IRAN-11022029-05": {
    "kind": "new"
   },
   "IRAN-11022029-06": {
    "kind": "new"
   },
   "IRAN-11022029-07": {
    "kind": "new"
   },
   "IRAN-11022029-08": {
    "kind": "new"
   },
   "IRAN-11022029-09": {
    "kind": "new"
   },
   "IRAN-11022029-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "אזהרות איראניות מפני לחימה ממושכת ותגובה ללא גבולות",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-02T2034__ukraine-202611022034.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-02T20:34:06+00:00",
   "window": {
    "from": "2026-11-01T20:34:06+00:00",
    "to": "2026-11-02T20:34:06+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611022034"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בחידוש האש בדרום לאחר קריסת הפוגה מקומית, לצד תקיפות אוויריות קטלניות על מטרות אזרחיות וסיוע בעומק השטח האוקראיני. במקביל נרשמת הסלמה בלוחמת הסייבר והתרעות שווא הדדיות, בשעה שבאוקראינה מוקמת מערכת שיבוש אלקטרונית ומנגד מתמודד הצבא עם חיכוכים פנימיים סביב אכיפת גיוס.",
   "fronts": [
    {
     "name": "חזית הדרום - זפורוז'יה",
     "status": "תקיפות אוויריות כבדות של רוסיה, פגיעה קטלנית בריכוז סיוע אזרחי בקומישובאחה"
    },
    {
     "name": "חזית הדרום - חרסון",
     "status": "סיום הפסקת האש המקומית באולשקי וחידוש חילופי האש והתקיפות בעיר חרסון"
    },
    {
     "name": "חזית המזרח - לוגנסק",
     "status": "פגיעות בתחבורה ובצירים בעומק השטח המוחזק בידי רוסיה"
    },
    {
     "name": "עורף אוקראינה",
     "status": "מתקפות כטב\"מים וטילים, לצד מאמצי הגנה אלקטרונית ומתח פנימי סביב מוקדי כליאת עריקים"
    },
    {
     "name": "עורף רוסיה",
     "status": "היערכות לפגיעות בתשתיות מידע, הליכים משפטיים נגד שבויים ושינויי שכר בכוחות הצבא"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11022034-01",
     "title": "תקיפה רוסית קטלנית על מרכז סיוע הומניטרי בבית ספר בקומישובאחה",
     "summary": "מטוסים רוסיים הטילו פצצות אוויריות על מבנה בית ספר ששימש לחלוקת סיוע הומניטרי בקומישובאחה שבמחוז זפורוז'יה. בהמשך הוטלו פצצות נוספות על המקלט שבו הסתתרו אזרחים, ודווח על בין שמונה עשר לעשרים ושישה הרוגים, פצועים ועשרות נעדרים.",
     "axis": "חזית הדרום - זפורוז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T17:18:00+00:00",
     "last_update_at": "2026-11-02T20:23:12+00:00",
     "what_is_not_verified": "מספר ההרוגים הסופי נע בין שמונה עשר לעשרים ושישה לפי גרסאות שונות, ומספר הנעדרים אינו סופי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cjy56dndlyz0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-02T20:23:12+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4180664-zaporizhzhia-region-declares-day-of-mourning-for-victims-of-komyshuvakha-attack.html",
       "published_at": "2026-11-02T19:21:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-bomb-strikes-kill-24-at-humanitarian-aid-center-in-zaporizhzhia-oblast/",
       "published_at": "2026-11-02T19:00:41+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180656-death-toll-from-russian-strike-on-school-in-komyshuvakha-rises-to-24.html",
       "published_at": "2026-11-02T18:42:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/exceptionally-horrific-strike-russian-bombs-strike-school-used-as-humanitarian-aid-center-in-zaporizhzhia-oblast-killing-24/",
       "published_at": "2026-11-02T18:32:26+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/02/zelensky-says-russian-airstrikes-on-school-used-for-humanitarian-aid-in-ukraine-s-zaporizhzhia-region-killed-at-least-18-people",
       "published_at": "2026-11-02T17:49:51+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49230",
       "published_at": "2026-11-02T17:42:28+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060924/",
       "published_at": "2026-11-02T17:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קומישובאחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11022034-02",
     "title": "סיום הפסקת האש המקומית וחידוש הלחימה באזור חרסון ואולשקי",
     "summary": "הפסקת אש מקומית בת שישה ימים באזור אולשקי וחרסון הגיעה לסיומה, ולאחריה חודשה האש כאשר כטב\"ם רוסי פגע בבית חולים בעיר חרסון. במקביל נמסר על מאות תושבים שפונו מאולשקי בסיוע סוכנויות בינלאומיות.",
     "axis": "חזית הדרום - חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T00:34:41+00:00",
     "last_update_at": "2026-11-02T19:03:17+00:00",
     "what_is_not_verified": "מספרם המדויק של התושבים שנותרו באולשקי והיקף המפונים המלא נותרו חסויים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_559fedb876c57845",
       "url": "https://kyivindependent.com/some-oleshky-residents-remain-seeking-evacuation-others-still-on-the-road-to-ukraine-lubinets-says/",
       "published_at": "2026-11-02T19:03:17+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_559fedb876c57845",
       "url": "https://www.bbc.co.uk/news/articles/ckg5jlyp66jzo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-02T17:33:19+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_559fedb876c57845",
       "url": "https://kyivindependent.com/kremlin-rules-out-further-humanitarian-operations-like-oleshky-evacuation-for-now/",
       "published_at": "2026-11-02T16:58:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_559fedb876c57845",
       "url": "https://www.theguardian.com/world/live/2026/nov/02/ukraine-russia-emergency-warning-systems-hack-zelenskyy-streeting-eu-latest-news-updates",
       "published_at": "2026-11-02T16:17:14+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_559fedb876c57845",
       "url": "https://news.un.org/feed/view/en/story/2026/11/1168722",
       "published_at": "2026-11-02T12:00:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_559fedb876c57845",
       "url": "https://www.theguardian.com/world/2026/nov/02/ukraine-war-briefing-kyiv-says-air-raid-warning-app-likely-hacked-after-users-receive-false-alerts",
       "published_at": "2026-11-02T00:34:41+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      },
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-11022034-03",
     "title": "מתקפת כטב\"מים וטילים רוסית נרחבת ויירוטים באוקראינה",
     "summary": "חיל האוויר האוקראיני הודיע כי רוסיה שיגרה מאה שבעים ואחד כלי טיס בלתי מאוישים ועשרה טילים או חימושים מדויקים. מערכות ההגנה האווירית יירטו או שיבשו מאה שלושים ותשעה כטב\"מים ושמונה חימושים מדויקים.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T13:25:44+00:00",
     "last_update_at": "2026-11-02T17:57:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_086f8e9a73ce3ae7",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060929/",
       "published_at": "2026-11-02T17:57:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_086f8e9a73ce3ae7",
       "url": "https://t.me/alexmehacarmel/49221",
       "published_at": "2026-11-02T13:25:44+00:00"
      }
     ],
     "places": [
      {
       "name": "ויניצה, אוקראינה",
       "lat": 49.232,
       "lon": 28.468
      }
     ]
    },
    {
     "id": "UKRAINE-11022034-04",
     "title": "מתקפת סייבר והתרעות שווא על מתקפה גרעינית באפליקציות חירום",
     "summary": "אפליקציות התרעה רשמיות באוקראינה נפרצו והפיצו התרעות שווא על סכנת קרינה גרעינית, נשק כימי וקרבות רחוב בקייב. שעות ספורות לאחר מכן דיווח גם המשרד למצבי חירום ברוסיה על מתקפת סייבר נרחבת על יישומון ההתרעות שלו.",
     "axis": "לוחמת סייבר",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T00:34:41+00:00",
     "last_update_at": "2026-11-02T14:35:01+00:00",
     "what_is_not_verified": "זהות התוקפים או הגורם האחראי לפריצה בשני הצדדים לא אומתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c51kdy1ew7zvo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-02T14:35:01+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/02/hackers-fake-nuclear-chemical-threat-alert-kyiv-ukraine-emergency-app",
       "published_at": "2026-11-02T11:11:28+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/02/ukraine-war-briefing-kyiv-says-air-raid-warning-app-likely-hacked-after-users-receive-false-alerts",
       "published_at": "2026-11-02T00:34:41+00:00"
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
     "id": "UKRAINE-11022034-05",
     "title": "עימותים וסערה סביב כליאת חיילים ומגויסים סמוך לקייב",
     "summary": "הפגנות ועימותים פרצו סביב מבנה מגורים בפרברי קייב שבו הוחזקו עשרות מגויסים וחיילים שנחשדו בעזיבת יחידותיהם ללא היתר. מפקד המשמר הלאומי אישר כי המקום משמש להחזקת חיילים, בעוד ברשתות נטען לאלימות קשה ולמניעת גישה רפואית.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T18:23:54+00:00",
     "last_update_at": "2026-11-02T20:31:05+00:00",
     "what_is_not_verified": "טענות ברשתות החברתיות על עינויים, פצועים והרוגים במרתף טרם אומתו באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2212117",
       "published_at": "2026-11-02T20:31:05+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2212109",
       "published_at": "2026-11-02T19:51:04+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49235",
       "published_at": "2026-11-02T19:39:06+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/confrontation-involving-national-guard-soldiers-unfolds-near-kyiv-police-deny-hostage-reports/",
       "published_at": "2026-11-02T18:56:31+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2212087",
       "published_at": "2026-11-02T18:23:54+00:00"
      }
     ],
     "places": [
      {
       "name": "פטרופבלובסקיה בורשצ'אגובקה, אוקראינה",
       "lat": 50.4372,
       "lon": 30.346
      }
     ]
    },
    {
     "id": "UKRAINE-11022034-06",
     "title": "הקמת מעטפת לוחמה אלקטרונית להגנת קייב מפני כטב\"מים",
     "summary": "יועץ טכנולוגיות ההגנה לנשיא אוקראינה הודיע על השלמת הקמת כיפה אלקטרונית מעל שמי קייב, שמטרתה לשבש את תקשורת הרדיו שבה משתמשים כטב\"מי תקיפה רוסיים.",
     "axis": "עורף אוקראינה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T17:24:00+00:00",
     "last_update_at": "2026-11-02T17:24:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_3fbc6cfbb6d87f9b",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060925/",
       "published_at": "2026-11-02T17:24:00+00:00"
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
     "id": "UKRAINE-11022034-07",
     "title": "צו של נשיא רוסיה המחייב הקצאת שטחי חוות שרתים למדינה",
     "summary": "נשיא רוסיה חתם על צו המחייב מפעילי מרכזי נתונים פרטיים להקצות עשרה אחוזים מהקיבולת לצורכי המדינה, ואיפשר שימוש במתקנים מחוץ למדינה באישור שירות הביטחון הפדרלי, בעקבות פגיעות כטב\"מים במרכזי מידע.",
     "axis": "עורף רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T14:44:54+00:00",
     "last_update_at": "2026-11-02T16:27:35+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/02/putin-orders-private-data-center-owners-to-reserve-10-of-capacity-for-the-state",
       "published_at": "2026-11-02T16:27:35+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49224",
       "published_at": "2026-11-02T14:44:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11022034-08",
     "title": "פגיעה באוטובוס נוסעים באזור לוגנסק",
     "summary": "אדם אחד נהרג ושמונה נפצעו בפגיעה באוטובוס נוסעים שנסע בציר שבין לוגנסק לזימוגוריה בשטח שבשליטה רוסית.",
     "axis": "חזית המזרח - לוגנסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T20:10:16+00:00",
     "last_update_at": "2026-11-02T20:10:16+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2212113",
       "published_at": "2026-11-02T20:10:16+00:00"
      }
     ],
     "places": [
      {
       "name": "לוגנסק, אוקראינה",
       "lat": 48.5717,
       "lon": 39.2973
      }
     ]
    },
    {
     "id": "UKRAINE-11022034-09",
     "title": "מותו של שבוי מלחמה אוקראיני במהלך משפט ברוסיה",
     "summary": "חייל ושבוי מלחמה אוקראיני, רוסלן רומנוב, שהועמד לדין ברוסיה בסעיפי טרור בבית דין צבאי ברוסטוב על הדון, מת בעת שהותו במעצר.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T17:11:46+00:00",
     "last_update_at": "2026-11-02T17:11:46+00:00",
     "what_is_not_verified": "נסיבות המוות המדויקות, היחידה שבה שירת ומועד נפילתו בשבי אינם ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/02/ukrainian-pow-ruslan-romanov-dies-in-russia-while-facing-trial-on-three-terrorism-charges",
       "published_at": "2026-11-02T17:11:46+00:00"
      }
     ],
     "places": [
      {
       "name": "רוסטוב על הדון, רוסיה",
       "lat": 47.261,
       "lon": 39.7249
      }
     ]
    },
    {
     "id": "UKRAINE-11022034-10",
     "title": "כוחות הביטחון של פולין נערכים לחבלות בגבול מחוז קלינינגרד",
     "summary": "משטרת פולין וכוחות הביטחון הקימו מפקדת מבצעים מיוחדת ועיבו כוחות סמוך לגבול עם מובלעת קלינינגרד הרוסית, בעקבות התרעות מודיעיניות על כוונות לבצע פעולות חבלה וחדירות חמושות.",
     "axis": "מדינות שכנות - פולין",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T18:10:00+00:00",
     "last_update_at": "2026-11-02T18:10:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060934/",
       "published_at": "2026-11-02T18:10:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר ההרוגים והנעדרים המדויק בתקיפה האווירית בקומישובאחה",
    "טענות על עינויים ופגיעות בגוף במתקן המעצר המאולתר של המשמר הלאומי ליד קייב",
    "זהות הגורמים האחראים לפריצת הסייבר ליישומוני ההתרעה באוקראינה וברוסיה",
    "מספר האזרחים המדויק שנותרו בעיירה אולשקי לאחר תום מבצע הפינוי"
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
     "value": 1.1216,
     "unit": "USD",
     "change_pct": 0.39,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על מרכזי אוכלוסייה ותשתיות קריטיות מפני מתקפות משולבות",
      "השגת לחץ בינלאומי וסנקציות על הכנסות הנפט והגז של רוסיה לסיום המלחמה",
      "הרחבת הפסקות אש הומניטריות לצורך חילוץ אזרחים באזורי לחימה נוספים"
     ],
     "inferred": [
      "ייצוב המשמעת הצבאית ומניעת נשירה ועריקות בקרב כוחות המילואים והמגויסים",
      "הפחתת התלות בהגנה אווירית קונבנציונלית באמצעות מערכות חסימה אלקטרוניות עירוניות"
     ],
     "forecast": [
      "המשך פגיעות ממוקדות בתשתיות מחשוב ואנרגיה בתוך רוסיה",
      "החרפת האכיפה והמתח הציבורי סביב גיוס כפוי ועריקות בעורף"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "שלילת האפשרות להסדרי פינוי הומניטריים נוספים במתכונת אולשקי בעת הנוכחית",
      "הבטחת פעילותם ורציפותם של משאבי המידע הממשלתיים מפני פעולות עוינות"
     ],
     "inferred": [
      "שחיקת המורל האזרחי ופגיעה בשרשראות האספקה והסיוע בעומק אוקראינה",
      "הכנת מתקפה רחבה נגד תשתיות האנרגיה לקראת החורף תוך ניצול עומס פוליטי במערב"
     ],
     "forecast": [
      "הגברת קצב התקיפות המשולבות של כטב\"מים וטילים לעבר רשת החשמל והלוגיסטיקה האוקראינית",
      "העמקת פעולות הלוחמה ההיברידית ושיבושי סייבר במדינות אירופה השכנות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c51kdy1ew7zvo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/02/ukraine-war-briefing-kyiv-says-air-raid-warning-app-likely-hacked-after-users-receive-false-alerts",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/confrontation-involving-national-guard-soldiers-unfolds-near-kyiv-police-deny-hostage-reports/",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/02/ukrainian-pow-ruslan-romanov-dies-in-russia-while-facing-trial-on-three-terrorism-charges",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060934/",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2212113",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49224",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4180656-death-toll-from-russian-strike-on-school-in-komyshuvakha-rises-to-24.html",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/11/1168722",
     "accessed_at": "2026-11-02T20:34:06+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T06:44:06+00:00",
  "changes": {
   "UKRAINE-11022034-01": {
    "kind": "new"
   },
   "UKRAINE-11022034-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "סיום הפסקת האש ההומניטרית באולשקי ופינוי אזרחים",
    "score": 1.0
   },
   "UKRAINE-11022034-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים רוסית נרחבת על אוקראינה ויירוט רובם",
    "score": 0.65
   },
   "UKRAINE-11022034-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפות סייבר הדדיות על יישומוני ההתרעות באוקראינה וברוסיה",
    "score": 1.0
   },
   "UKRAINE-11022034-05": {
    "kind": "new"
   },
   "UKRAINE-11022034-06": {
    "kind": "new"
   },
   "UKRAINE-11022034-07": {
    "kind": "new"
   },
   "UKRAINE-11022034-08": {
    "kind": "new"
   },
   "UKRAINE-11022034-09": {
    "kind": "new"
   },
   "UKRAINE-11022034-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-02T2042__north-202611022042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-02T20:42:00+00:00",
   "window": {
    "from": "2026-11-01T20:42:00+00:00",
    "to": "2026-11-02T20:42:00+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611022042"
   },
   "summary": "הלחימה בדרום לבנון נמשכת בעוצמה תוך תקיפות אוויריות וירי ארטילרי של צה\"ל אשר מסבים פגיעה נרחבת למבנים ולענף החקלאות באזור הגבול. חזבאללה מנסה לחזק את עמידתו האזרחית באמצעות הבטחת מענקי כספים שמקורם באיראן לשיקום ההרס ברובע הדאחיה. במקביל, סוריה פועלת להסדרת ביטחונה הפנימי והאזורי באמצעות מגעים עם לבנון וירדן ובחינת השתלבות בברית הגנה משותפת הכוללת את טורקיה.",
   "fronts": [
    {
     "name": "דרום לבנון - גבול ישראל",
     "status": "חילופי אש ותקיפות ישראליות ממוקדות נגד מבנים ויעדים חקלאיים לצד ירי ארטילרי"
    },
    {
     "name": "הדאחיה וביירות",
     "status": "מאמצי שיקום וייצוב תמיכה אזרחית של חזבאללה באמצעות מענקים כספיים"
    },
    {
     "name": "דרום סוריה - גבול ירדן",
     "status": "מתיחות עקב תקיפות אוויריות ירדניות לצד מאמץ לכינון מנגנון תיאום גבולות משותף"
    },
    {
     "name": "הציר המדיני סוריה - טורקיה - מדינות האזור",
     "status": "בחינה סורית של הצטרפות להסכם הגנה משותף עם טורקיה, סעודיה ופקיסטן"
    }
   ],
   "events": [
    {
     "id": "NORTH-11022042-01",
     "title": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
     "summary": "כוחות ישראליים ביצעו תקיפות אוויריות והפגזות ארטילריות לעבר מבנים, שטחים פתוחים ותשתיות במספר נפות בדרום לבנון, כולל תקיפת מבנה בעיתא אל-ג'בל לאחר נוהל הקש בגג וירי לעבר פאתי מפידון.",
     "axis": "לבנון - ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T08:55:32+00:00",
     "last_update_at": "2026-11-02T17:17:53+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק בכלל האזורים שהותקפו, וכן אמיתות הדיווח על ביצוע הקש בגג בעיתא אל-ג'בל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_0c6e3a91de782026",
       "url": "https://t.me/abualiexpress/132989",
       "published_at": "2026-11-02T14:26:21+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_0c6e3a91de782026",
       "url": "https://english.almanar.com.lb/article/145832/",
       "published_at": "2026-11-02T11:34:54+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_0c6e3a91de782026",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-reports-israeli-artillery-shelling-gunfire-in-south-despite-us-deal/4108495",
       "published_at": "2026-11-02T08:55:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_0c6e3a91de782026",
       "url": "https://www.newarab.com/news/iran-says-intensive-negotiations-us-avert-war",
       "published_at": "2026-11-02T17:17:53+00:00"
      }
     ],
     "places": [
      {
       "name": "עיתא אל-ג'בל, לבנון",
       "lat": 33.1745,
       "lon": 35.4094
      }
     ]
    },
    {
     "id": "NORTH-11022042-02",
     "title": "הרס נרחב למגזר החקלאי בדרום לבנון כתוצאה מהלחימה",
     "summary": "שר החקלאות הלבנוני מסר כי הלחימה הובילה לפגיעה ישירה בכ-22.5 אחוזים מהשטחים החקלאיים במדינה ובמגזרי גידול בעלי חיים וכוורנות. חקלאים מקומיים דיווחו על השמדת מטעים ומתחמים חקלאיים בהפצצות ישראליות.",
     "axis": "לבנון - ישראל",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T09:59:09+00:00",
     "last_update_at": "2026-11-02T14:38:57+00:00",
     "what_is_not_verified": "נתוני האחוזים המדויקים של הנזק החקלאי וטענות על שימוש בחומרים מסוימים כגון זרחן לבן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_242577bf6ff3ced8",
       "url": "https://www.aa.com.tr/en/middle-east/interview-israeli-war-damaged-225-of-lebanon-s-agricultural-land-minister/4108577",
       "published_at": "2026-11-02T09:59:09+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_19f377eaaeee78b9",
       "url": "https://www.newarab.com/news/dreams-destroyed-lebanese-chef-mourns-orchard-hit-israel",
       "published_at": "2026-11-02T14:38:57+00:00"
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
     "id": "NORTH-11022042-03",
     "title": "הכרזת חזבאללה על חלוקת מענקי סיוע כספי לתושבי הדאחיה",
     "summary": "בכיר חזבאללה עלי דעמוש הכריז על חלוקה מתוכננת של מענקים כספיים בסך 14 אלף דולר למשפחות שבתיהן נהרסו במלחמה ברובע הדאחיה בביירות, על רקע דיווחים על העברת כספים מאיראן.",
     "axis": "לבנון - פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T15:39:59+00:00",
     "last_update_at": "2026-11-02T15:39:59+00:00",
     "what_is_not_verified": "קבלת סכום של 200 מיליון דולר מאיראן בפועל והיכולת לבצע את חלוקת הכספים לכלל המשפחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132992",
       "published_at": "2026-11-02T15:39:59+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11022042-04",
     "title": "סוריה בוחנת הצטרפות להסכם ההגנה המשולש של טורקיה, סעודיה ופקיסטן",
     "summary": "שר החוץ הסורי הצהיר בוועידת ביטחון בבחריין כי דמשק מקיימת דיונים להערכת אפשרות הצטרפותה להסכם ההגנה ההדדי שנחתם בין אנקרה, ריאד ואיסלאמאבאד, כחלק מחיזוק ההרתעה והיציבות האזורית.",
     "axis": "סוריה - טורקיה - אזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T11:42:34+00:00",
     "last_update_at": "2026-11-02T11:42:34+00:00",
     "what_is_not_verified": "מידת ההיתכנות המעשית של צירוף סוריה לברית והאם מדובר אך ורק בקלף מיקוח מול ישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/why-syria-considering-joining-saudi-turkey-pakistan-defence-pact",
       "published_at": "2026-11-02T11:42:34+00:00"
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
     "id": "NORTH-11022042-05",
     "title": "משלחת ממשלתית לבנונית קיימה שיחות בדמשק על השבת פליטים",
     "summary": "שר החוץ של סוריה קיבל בדמשק משלחת לבנונית רשמית בראשות סגן ראש ממשלת לבנון במטרה לדון בהיבטים מנהליים, חברתיים וחינוכיים הנוגעים להחזרת פליטים סורים.",
     "axis": "סוריה - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T12:50:48+00:00",
     "last_update_at": "2026-11-02T12:50:48+00:00",
     "what_is_not_verified": "ההסכמות המעשיות שהושגו במפגש ולוחות הזמנים ליישום המהלך.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-foreign-minister-receives-lebanese-delegation-for-talks-on-refugee-returns/4108809",
       "published_at": "2026-11-02T12:50:48+00:00"
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
     "id": "NORTH-11022042-06",
     "title": "מתיחות ותיאום ביטחוני בין סוריה לירדן לאחר תקיפות אוויריות בדרעא",
     "summary": "חיל האוויר הירדני ביצע תקיפות בדרום סוריה שהביאו להרג אזרחים, מה שגרר גינוי מדמשק וסגירה זמנית של מעבר הגבול נסיב. משרד החוץ הסורי הודיע על כוונה להקים ועדה משותפת לשמירה על היחסים ואבטחת הגבול.",
     "axis": "סוריה - ירדן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T13:38:35+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T13:38:35+00:00",
     "last_update_at": "2026-11-02T13:38:35+00:00",
     "what_is_not_verified": "קיומו של תיאום מוקדם בין עמאן לדמשק לפני ביצוע התקיפות האוויריות, דבר שדמשק הכחישה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/after-airstrikes-whats-next-syria-jordan-relations",
       "published_at": "2026-11-02T13:38:35+00:00"
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
     "id": "NORTH-11022042-07",
     "title": "מינוי יועצת דרוזית בדמשק לקידום ביסוס השלטון בדרום סוריה",
     "summary": "הממשל בדמשק מינה את מזנא אלאטרש, בת העדה הדרוזית ממחוז סווידא, לשמש כיועצת לענייני שלום במטרה לסייע למשטר לבסס את מרותו באזור הדרום.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T16:17:35+00:00",
     "last_update_at": "2026-11-02T16:17:35+00:00",
     "what_is_not_verified": "מידת ההשפעה הממשית שתהיה למינוי על היציבות והשליטה בשטח במחוז סווידא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/meet-muzna-al-atrash-syrias-new-druze-adviser-peace-affairs",
       "published_at": "2026-11-02T16:17:35+00:00"
      }
     ],
     "places": [
      {
       "name": "סווידא, סוריה",
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
     "id": "NORTH-11022042-08",
     "title": "שריפה ופיצוץ במחסן זיקוקים באזור הר הלבנון",
     "summary": "דליקה ופיצוץ עז התרחשו במחסן זיקוקין די-נור באזור ג'ורה אלבלוט שממזרח לביירות, ועשן סמיך היתמר באזור בעת שצוותי הכיבוי פעלו להשתלטות על האש.",
     "axis": "לבנון - פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T08:55:52+00:00",
     "last_update_at": "2026-11-02T14:51:25+00:00",
     "what_is_not_verified": "הסיבה המדויקת לפרוץ הדליקה במחסן, והאם היו במקום נפגעים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965972/smoke-seen-over-jouret-el-ballout-caused-by-warehouse-fire-involving-f/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965972",
       "published_at": "2026-11-02T08:55:52+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132990",
       "published_at": "2026-11-02T14:51:25+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49223",
       "published_at": "2026-11-02T14:42:03+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ורה אלבלוט, לבנון",
       "lat": 33.8945,
       "lon": 35.6294
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על שימוש ישראלי בחימוש זרחן לבן בשטחים חקלאיים בדרום לבנון.",
    "הערכת שר החקלאות הלבנוני לפיה 22.5 אחוזים מהאדמות החקלאיות במדינה ניזוקו במלחמה.",
    "היקף הכספים שהועברו מאיראן לחזבאללה, כולל הדיווח על סכום של 200 מיליון דולר.",
    "היתכנותה המעשית של הצטרפות סוריה לברית ההגנה של מכה לצד טורקיה.",
    "מידת התיאום המודיעיני או המבצעי בין ירדן לסוריה קודם לתקיפות בדרעא."
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חזבאללה",
     "declared": [
      "חלוקת מענקי סיוע כספי לתושבי הדאחיה שבתיהם נהרסו לצורך מימון שכר דירה ושיקום."
     ],
     "inferred": [
      "שימור בסיס התמיכה העממי והעדתי בלבנון לאור ההרס הכבד שנגרם במערכה.",
      "המשך הישענות מוחלטת על מימון איראני ישיר לשם שיקום יכולותיו ומעמדו הפוליטי."
     ],
     "forecast": [
      "הגברת מאמצי השיקום האזרחי במקביל לניסיונות לשמר נוכחות צבאית במרחב הדרום."
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "בחינת כניסה לברית הגנה אזורית עם סעודיה, טורקיה ופקיסטן לחיזוק היציבות וההרתעה.",
      "הקמת ועדה משולבת עם ירדן למניעת הפרות גבולות ושימור היחסים הדו-צדדיים.",
      "הידוק התיאום עם ממשלת לבנון להסדרת סוגיית החזרת הפליטים."
     ],
     "inferred": [
      "שימוש בהצהרות על בריתות צבאיות כמנוף לחץ דיפלומטי מול ישראל.",
      "ביסוס מחדש של הריבונות והסמכות השלטונית במחוזות הדרום."
     ],
     "forecast": [
      "המשך מגעים דיפלומטיים זהירים עם מדינות ערב וטורקיה ללא התחייבות צבאית מיידית."
     ]
    },
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "המשך גביית מחיר מתשתיות חזבאללה ופגיעה באתרי פעילות בדרום לבנון.",
      "מניעת התבססות מחדש של תשתיות צבאיות סמוך לקו הגבול הצפוני."
     ],
     "forecast": [
      "המשך תקיפות ממוקדות מהאוויר ושימוש באש ארטילרית לשמירה על חופש פעולה בגזרה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/145832/",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/meet-muzna-al-atrash-syrias-new-druze-adviser-peace-affairs",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syrian-foreign-minister-receives-lebanese-delegation-for-talks-on-refugee-returns/4108809",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965972/smoke-seen-over-jouret-el-ballout-caused-by-warehouse-fire-involving-f/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965972",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/why-syria-considering-joining-saudi-turkey-pakistan-defence-pact",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/after-airstrikes-whats-next-syria-jordan-relations",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132990",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49223",
     "accessed_at": "2026-11-02T20:42:00+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T00:44:47+00:00",
  "changes": {
   "NORTH-11022042-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "סלילת צירים על ידי צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11022042-02": {
    "kind": "possible",
    "prev": "תקיפת מטוסי קרב בדרום לבנון בעת מסיבת עיתונאים",
    "score": 0.467
   },
   "NORTH-11022042-03": {
    "kind": "new"
   },
   "NORTH-11022042-04": {
    "kind": "new"
   },
   "NORTH-11022042-05": {
    "kind": "new"
   },
   "NORTH-11022042-06": {
    "kind": "new"
   },
   "NORTH-11022042-07": {
    "kind": "new"
   },
   "NORTH-11022042-08": {
    "kind": "new"
   }
  }
 }
};
