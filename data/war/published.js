/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-02T0042__yemen-202611020042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-02T00:42:32+00:00",
   "window": {
    "from": "2026-11-01T00:42:32+00:00",
    "to": "2026-11-02T00:42:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611020042"
   },
   "summary": "הלחימה בזירה התימנית מסלימה במקביל בין החות'ים לבין הקואליציה בראשות סעודיה וכוחות ממשלת תימן. חילופי המהלומות כוללים תקיפות אוויריות נרחבות של הקואליציה ויירוט שיגורים חות'יים, לצד חידוש איומים מפורשים מצד החות'ים על יעדי תעופה ונפט בסעודיה. התגברות הקרבות הקרקעיים במערב המדינה ופעולות דיכוי במחוז תעז גורמות למשבר הומניטרי חריף ולעקירת מאות אלפי תושבים.",
   "fronts": [
    {
     "name": "חזית תימן - ערב הסעודית",
     "status": "הסלמה בתקיפות אוויריות, שיגורי כטב\"מים וטילים מצד החות'ים, ואיומים על מתקני נפט ותעופה"
    },
    {
     "name": "חזית מערב תימן (אל-חודיידה ותעז)",
     "status": "קרבות קרקעיים עזים, פשיטות על בתים ועקירה המונית של מאות אלפי אזרחים"
    },
    {
     "name": "הזירה המדינית והבינלאומית מול החות'ים",
     "status": "לחץ דיפלומטי גובר בעקבות מות עובד או\"ם בשבי ומגעים בין ממשלת תימן לבריטניה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11020042-01",
     "title": "תקיפות אוויריות נגד נמל ראס עיסא ורשת תקשורת בסעדה",
     "summary": "כלי תקשורת המזוהים עם החות'ים דיווחו על תקיפות אוויריות שפגעו ברשת תקשורת מדרום-מזרח לעיר סעדה, וכן על שתי תקיפות שיוחסו לסעודיה נגד נמל ראס עיסא שבמחוז אל-חודיידה.",
     "axis": "סעודיה - חות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T18:36:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T18:36:29+00:00",
     "last_update_at": "2026-11-01T19:05:32+00:00",
     "what_is_not_verified": "אין אימות עצמאי או אישור רשמי מצד סעודיה על ביצוע התקיפות הללו או על הפגיעה המדויקת ביעדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/air-strike-hits-communication-network-northern-yemen-houthi-affiliated",
       "published_at": "2026-11-01T19:05:32+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-media-says-saudi-strikes-target-yemens-hodeidah-port",
       "published_at": "2026-11-01T18:36:29+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס עיסא, תימן",
       "lat": 15.1885,
       "lon": 42.6625
      },
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "אל-חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11020042-02",
     "title": "טענת החות'ים לעשרות תקיפות סעודיות ביממה אחת",
     "summary": "הדובר הצבאי של החות'ים הצהיר כי מטוסי קרב סעודיים ושיגורי טילים ביצעו שבעים וחמש תקיפות נגד מטרות בשמונה מחוזות בתימן תוך עשרים וארבע שעות, וגרמו לנפגעים בקרב אזרחים.",
     "axis": "סעודיה - חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T17:46:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T17:46:48+00:00",
     "last_update_at": "2026-11-01T17:46:48+00:00",
     "what_is_not_verified": "מספר התקיפות, סוגי המטוסים, בסיסי ההמראה וטענת הפגיעה באזרחים נשענים על הודעת החות'ים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132950",
       "published_at": "2026-11-01T17:46:48+00:00"
      }
     ],
     "places": [
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "אל-חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11020042-03",
     "title": "יירוט כטב\"ם וטיל בליסטי ששוגרו לעבר סעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדה של כלי טיס בלתי מאויש ושל טיל בליסטי ששוגרו על ידי המיליציה החות'ית לעבר שטח ערב הסעודית.",
     "axis": "סעודיה - חות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T16:01:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T16:01:49+00:00",
     "last_update_at": "2026-11-01T16:01:49+00:00",
     "what_is_not_verified": "היקף הנזק, סוגי החימוש המדויקים ומיקום היירוט המדויק לא פורטו בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154987",
       "published_at": "2026-11-01T16:01:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11020042-04",
     "title": "איומים חוזרים של החות'ים נגד מתקני נפט והתעופה בסעודיה",
     "summary": "גורם צבאי חות'י איים כי מתקני חברת ארמקו נמצאים בטווח האש שלהם, והזהיר חברות תעופה בין-לאומיות מפני טיסה במרחב האווירי הסעודי, למעט באזורי מכה ומדינה.",
     "axis": "סעודיה - חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T16:28:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T16:28:04+00:00",
     "last_update_at": "2026-11-01T16:28:04+00:00",
     "what_is_not_verified": "זהות הגורם הצבאי החות'י נותרה בעילום שם, ורמת המוכנות המעשית למימוש האיומים לא אומתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-repeat-threats-against-saudi-oil-giant-aviation",
       "published_at": "2026-11-01T16:28:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11020042-05",
     "title": "דרישת ממשלת תימן לחקירה בעקבות מות עובד או\"ם בשבי החות'ים",
     "summary": "שרת החוץ של תימן דרשה למצות את הדין עם החות'ים על מותו של עובד זכויות האדם של האו\"ם לאחר שהוחזק במעצר מעל לשנתיים מאז חטיפתו ביוני 2024.",
     "axis": "ממשלת תימן - חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T23:06:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T23:06:30+00:00",
     "last_update_at": "2026-11-01T23:06:30+00:00",
     "what_is_not_verified": "נסיבות המוות המדויקות במתקן הכליאה ומצבם הרפואי של עצורים נוספים לא נבדקו בידי גורם עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a3fbd454e7703a50",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-foreign-minister-demands-accountability-un-workers-death-houthi",
       "published_at": "2026-11-01T23:06:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11020042-06",
     "title": "עקירת מאות אלפי תושבים במערב תימן בשל החרפת הלחימה",
     "summary": "האו\"ם מסר כי יותר משלוש מאות אלף בני אדם נמלטו מבתיהם במערב תימן עקב הסלמת הקרבות בין החות'ים לכוחות הממשלה הנתמכים בידי סעודיה.",
     "axis": "ממשלת תימן - חות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T09:19:44+00:00",
     "last_update_at": "2026-11-01T09:19:44+00:00",
     "what_is_not_verified": "האזורים המדויקים שבהם התרכזה העקירה ונתוני האבדות בקרבות הללו לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iranian-negotiators-doha-continue-truce-talks",
       "published_at": "2026-11-01T09:19:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11020042-07",
     "title": "פשיטות חות'יות על בתי אנשי ציבור במחוז תעז",
     "summary": "מקורות רשמיים בממשלת תימן דיווחו כי מיליציות החות'ים פרצו לבתיהם של אישים ממשלתיים ופוליטיים והשתלטו עליהם באזורים הכפריים של תעז, לצד דיווח על עשרות הפרות באזור.",
     "axis": "ממשלת תימן - חות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T15:42:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T15:42:58+00:00",
     "last_update_at": "2026-11-01T17:03:17+00:00",
     "what_is_not_verified": "זהות בעלי הבתים ומספר המבנים המדויק שנכבשו אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154999",
       "published_at": "2026-11-01T17:03:17+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154986",
       "published_at": "2026-11-01T15:42:58+00:00"
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
     "id": "YEMEN-11020042-08",
     "title": "טענת צבא תימן לפגיעה במאות פעילי חות'ים",
     "summary": "צבא תימן טוען כי ביצע מעל אלף ומאתיים פעולות סיכול שבהן נוטרלו מאות חות'ים והושמדו עשרות כלי רכב וציוד כבד.",
     "axis": "ממשלת תימן - חות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T16:11:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T16:11:28+00:00",
     "last_update_at": "2026-11-01T16:11:28+00:00",
     "what_is_not_verified": "אין גורם עצמאי המאמת את מספרי הנפגעים והאמצעים שהושמדו לפי הודעת הצבא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154988",
       "published_at": "2026-11-01T16:11:28+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים ל-75 תקיפות סעודיות בתוך 24 שעות ולסך של 3,830 תקיפות מתחילת ההסלמה",
    "מספר הנפגעים מקרב החות'ים (כ-500) וכמות הציוד שהושמד לפי צבא תימן",
    "נסיבות מותו של עובד האו\"ם במתקן המעצר החות'י",
    "היקף הנפגעים האזרחיים בעקבות התקיפות האוויריות המדווחות בתימן"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה במתקני חברת ארמקו ושיבוש התעופה מעל שטח ערב הסעודית",
      "תגובה על תקיפות הקואליציה הסעודית והמשך הלחימה האזורית"
     ],
     "inferred": [
      "הפעלת מנופי לחץ כלכליים על סעודיה כדי להביא להפסקת תקיפותיה בתימן",
      "חיזוק השליטה הפנימית במחוזות המפתח באמצעות דיכוי יריבים פוליטיים"
     ],
     "forecast": [
      "המשך ניסיונות שיגור של טילים בליסטיים וכטב\"מים לעבר יעדים בשטח סעודיה",
      "המשך החיכוך המוגבר במוקדי הקרבות במערב תימן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "סיכול היכולות הצבאיות של החות'ים והגנה על שטח סעודיה מפני איומי טילים וכטב\"מים",
      "הטלת אחריות על החות'ים בשל פגיעה בעובדי או\"ם ושחרור חטופים"
     ],
     "inferred": [
      "שחיקת היכולות הלוגיסטיות והצבאיות של החות'ים בנמלים ובצירי תקשורת",
      "גיוס תמיכה בין-לאומית, בפרט מבריטניה, לבידוד שלטון החות'ים"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ממוקדות בנמלים ובמוקדי שליטה של החות'ים",
      "הגברת מאמצי ההגנה האווירית בגבול הסעודי למניעת פגיעה בריכוזי אוכלוסייה ובנפט"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-foreign-minister-demands-accountability-un-workers-death-houthi",
     "accessed_at": "2026-11-02T00:42:32+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/iranian-negotiators-doha-continue-truce-talks",
     "accessed_at": "2026-11-02T00:42:32+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154988",
     "accessed_at": "2026-11-02T00:42:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132950",
     "accessed_at": "2026-11-02T00:42:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-01T06:50:01+00:00",
  "changes": {
   "YEMEN-11020042-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפות אוויריות על מתקן נפט באל-חודיידה",
    "score": 0.817
   },
   "YEMEN-11020042-02": {
    "kind": "new"
   },
   "YEMEN-11020042-03": {
    "kind": "new"
   },
   "YEMEN-11020042-04": {
    "kind": "possible",
    "prev": "ירוט רחפנים מעל אזורים בסעודיה והכחשת החות'ים",
    "score": 0.467
   },
   "YEMEN-11020042-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מותו של עובד האו\"ם במעצר החות'ים",
    "score": 0.65
   },
   "YEMEN-11020042-06": {
    "kind": "new"
   },
   "YEMEN-11020042-07": {
    "kind": "new"
   },
   "YEMEN-11020042-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-02T0040__iran-202611020040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-02T00:40:35+00:00",
   "window": {
    "from": "2026-11-01T00:40:35+00:00",
    "to": "2026-11-02T00:40:35+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611020040"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל עומד בפני צומת קריטי לקראת בחירות האמצע בארה\"ב, המלווה במתיחות צבאית גוברת במצרי הורמוז עקב פגיעה במכליות נפט והטלת מגבלות תנועה איראניות. במקביל לאיומים הדדיים בחידוש התקיפות ובהרחבת היקף התגובה, מתנהל משא ומתן עקיף בקטאר בניסיון לגבש הסדר שימנע הסלמה רחבה. ישראל מתאמת מהלכים מול הממשל האמריקני ולוחצת לפעולה צבאית, בעוד טהרן מסרבת לדון בתוכנית הגרעין ומאיימת בלחימה מתמשכת.",
   "fronts": [
    {
     "name": "המערכה הימית במצרי הורמוז",
     "status": "הסלמה בעקבות פגיעות מוקשים במכליות והגבלות שיט איראניות"
    },
    {
     "name": "החזית הישירה בין ארה\"ב וישראל לאיראן",
     "status": "דריכות לקראת אפשרות לחידוש תקיפות ואיומים בהסלמה נרחבת"
    },
    {
     "name": "הערוץ הדיפלומטי בדוחה",
     "status": "שיחות עקיפות אינטנסיביות בהשתתפות קטאר ללא פריצת דרך"
    },
    {
     "name": "החזית הצפונית בישראל מול חזבאללה",
     "status": "חשש מחידוש הלחימה על רקע הבטחות להימנע מהצטרפות"
    }
   ],
   "events": [
    {
     "id": "IRAN-11020040-01",
     "title": "פיצוץ שתי מכליות נפט במצרי הורמוז",
     "summary": "זרוע הים של משמרות המהפכה הודיעה כי שתי מכליות נפט עלו על מוקשים, התפוצצו ועלו באש בעת שנעו בנתיב לא מורשה במצרי הורמוז.",
     "axis": "העימות הימי במפרץ ומצרי הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T20:18:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T20:18:23+00:00",
     "last_update_at": "2026-11-02T00:00:00+00:00",
     "what_is_not_verified": "אין אימות עצמאי לנסיבות הפיצוץ ולפגיעת המוקשים מעבר לטענת משמרות המהפכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/2/iran-war-live-tankers-hit-in-hormuz-trump-again-says-conflict-to-end-soon?traffic_source=rss",
       "published_at": "2026-11-02T00:00:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-navy-says-two-tankers-exploded-after-hitting-mines-hormuz",
       "published_at": "2026-11-01T20:18:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11020040-02",
     "title": "שיחה בין טראמפ לנתניהו בעניין איראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ שוחח עם ראש ממשלת ישראל בנימין נתניהו, ובמרכז הדיון עמדה סוגיית איראן והאפשרויות הצבאיות מולה.",
     "axis": "ציר ארה\"ב וישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T23:08:40+00:00",
     "last_update_at": "2026-11-01T21:20:02+00:00",
     "what_is_not_verified": "קיימות מחלוקות בדיווחים האם נתניהו לוחץ לתקוף מיד לאחר בחירות האמצע או שוושינגטון מקדמת הסכם.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-he-had-good-talk-netanyahu",
       "published_at": "2026-11-01T21:20:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132960",
       "published_at": "2026-11-01T20:53:46+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21756301",
       "published_at": "2026-11-01T20:51:31+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1383728",
       "published_at": "2026-11-01T20:43:06+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611015366",
       "published_at": "2026-11-01T18:25:28+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21754293",
       "published_at": "2026-11-01T16:41:56+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49178",
       "published_at": "2026-10-31T23:08:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11020040-03",
     "title": "מגעים עקיפים בדוחה להפסקת הלחימה ופתיחת מצרי הורמוז",
     "summary": "נציגים איראנים קיימו יום שלישי של שיחות עקיפות בדוחה בתיווך קטאר במטרה להגיע לעסקה לשחרור נכסים ולהסרת המגבלות במצר.",
     "axis": "המגעים המדיניים בין ארה\"ב לאיראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T12:46:28+00:00",
     "last_update_at": "2026-11-02T00:23:23+00:00",
     "what_is_not_verified": "לא אומת האם המגעים יובילו להסכם ומה מידת ההסכמה של הצדדים לתנאים השונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict",
       "published_at": "2026-11-02T00:23:23+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21755644",
       "published_at": "2026-11-01T19:37:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/01/negotiators-braced-for-worst-over-us-iran-talks-to-reopen-strait-of-hormuz",
       "published_at": "2026-11-01T17:49:28+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611011139",
       "published_at": "2026-11-01T14:15:41+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-qatari-mediators-hold-third-day-talks-end-us-iran-war",
       "published_at": "2026-11-01T12:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "דוחה, קטאר",
       "lat": 25.2856,
       "lon": 51.5264
      }
     ]
    },
    {
     "id": "IRAN-11020040-04",
     "title": "הצהרות טראמפ על תקיפה צפויה ואפשרות לסיום הלחימה",
     "summary": "דונלד טראמפ איים בחידוש התקיפות באיראן, טען כי המלחמה תסתיים בקרוב באמצעות הסכם או פעולה כוחנית, והוסיף כי ישנם יעדים נוספים לפגיעה.",
     "axis": "העימות הישיר בין ארה\"ב לאיראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T12:46:28+00:00",
     "last_update_at": "2026-11-02T00:37:07+00:00",
     "what_is_not_verified": "לא מאומת האם ארה\"ב אכן תפתח בתקיפה או תבחר להמשיך בנתיב המשא ומתן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-us-some-point-will-need-give-iran-hammer",
       "published_at": "2026-11-02T00:37:07+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict",
       "published_at": "2026-11-02T00:23:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-iran-war-will-end-very-soon-one-way-or-other",
       "published_at": "2026-11-01T22:47:37+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-warns-new-war-could-last-longer-after-trump-threatens-strikes",
       "published_at": "2026-11-01T22:30:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-warns-new-war-could-last-longer-after-trump-threatens-strikes",
       "published_at": "2026-11-01T19:41:16+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-qatari-mediators-hold-third-day-talks-end-us-iran-war",
       "published_at": "2026-11-01T12:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "איווה, ארצות הברית",
       "lat": 41.684,
       "lon": -92.0612
      }
     ]
    },
    {
     "id": "IRAN-11020040-05",
     "title": "אזהרות איראניות מפני לחימה ממושכת ותגובה ללא גבולות",
     "summary": "דובר הצבא ויועץ מנהיג איראן הבהירו כי מלחמה מחודשת תימשך זמן רב, וכי הדוקטרינה החדשה קובעת שהתגובה האיראנית לא תוגבל גאוגרפית.",
     "axis": "ההרתעה וההסלמה מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T14:59:01+00:00",
     "last_update_at": "2026-11-02T00:23:23+00:00",
     "what_is_not_verified": "לא ברור מה היכולת המעשית של איראן להרחיב את טווח העימות מעבר למרחב האזורי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_3d7f60edac664fbc",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict",
       "published_at": "2026-11-02T00:23:23+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3d7f60edac664fbc",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-warns-new-war-could-last-longer-after-trump-threatens-strikes",
       "published_at": "2026-11-01T22:30:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_3d7f60edac664fbc",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-warns-new-war-could-last-longer-after-trump-threatens-strikes",
       "published_at": "2026-11-01T19:41:16+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_3d7f60edac664fbc",
       "url": "https://en.irna.ir/news/86309609/Iran-s-defense-doctrine-no-longer-bound-by-geography-of-a-threat",
       "published_at": "2026-11-01T19:33:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_3d7f60edac664fbc",
       "url": "https://t.me/abualiexpress/132944",
       "published_at": "2026-11-01T15:15:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_3d7f60edac664fbc",
       "url": "https://t.me/abualiexpress/132942",
       "published_at": "2026-11-01T14:59:01+00:00"
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
     "id": "IRAN-11020040-06",
     "title": "הטלת סנקציות הדדיות של איראן על גורמי ביטחון בריטיים",
     "summary": "משרד החוץ של איראן הכריז על חיל הים וחיל האוויר הבריטיים כארגוני טרור ועל שירות המודיעין כגורם עוין, בשל תמיכתם בארה\"ב ובישראל.",
     "axis": "העימות הדיפלומטי והבינלאומי סביב איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T06:36:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T06:36:01+00:00",
     "last_update_at": "2026-11-01T06:36:01+00:00",
     "what_is_not_verified": "לא מאומת האם יש להצהרה השלכות מעשיות מעבר למחאה הצהרתית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132910",
       "published_at": "2026-11-01T06:36:01+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מידת המעורבות הישירה של משמרות המהפכה במיקוש המכליות במצרי הורמוז",
    "ההחלטה הסופית של הממשל האמריקני לגבי מועד תקיפה צבאית מחודשת",
    "נכונות איראן להתפשר על תוכנית הגרעין בתמורה לשחרור נכסים"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "חיסול מטרות צבאיות שנותרו באיראן במידת הצורך",
      "חתירה להסכם מהיר לסיום המלחמה ולהסרת המצור במצרי הורמוז"
     ],
     "inferred": [
      "מניעת זעזועים כלכליים ומחירי דלק גבוהים עד לבחירות האמצע",
      "שימור חופש הפעולה הצבאי ללא כניסה לעימות מתמשך"
     ],
     "forecast": [
      "המשך מיצוי המגעים המדיניים עד לאחר הבחירות בארה\"ב",
      "תקיפה ממוקדת של יעדים איראניים אם ייכשלו השיחות בדוחה"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "סירוב מוחלט למשא ומתן על תוכנית הגרעין",
      "תגובה צבאית ללא גבולות גאוגרפיים בכל מקרה של תקיפה מחודשת"
     ],
     "inferred": [
      "הפעלת מנוף לחץ על הכלכלה העולמית דרך חסימת נתיבי השיט במפרץ",
      "השגת שחרור של כספים מוקפאים בתמורה להרגעת המצב הימי"
     ],
     "forecast": [
      "המשך שיבוש התנועה במצרי הורמוז לצורכי מיקוח",
      "הימנעות מיוזמת עימות כולל אך הסלמת תגובות נקודתיות"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הגדרת איראן כעדיפות ביטחונית ראשונה במעלה"
     ],
     "inferred": [
      "הפעלת לחץ על ארה\"ב לפתוח במתקפה נרחבת על יעדי משטר וגרעין",
      "שאיפה להכרעה מהירה של האיום ללא הסדרי ביניים חלקיים"
     ],
     "forecast": [
      "המשך תיאום הדוק מול הממשל האמריקני לאחר הבחירות",
      "הכנות להשתלבות בפעולה צבאית אם יינתן אור ירוק מוושינגטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/2/iran-war-live-tankers-hit-in-hormuz-trump-again-says-conflict-to-end-soon?traffic_source=rss",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/iran-warns-new-war-could-last-longer-after-trump-threatens-strikes",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261102-iran-warns-renewed-war-with-us-could-outlast-previous-conflict",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/01/negotiators-braced-for-worst-over-us-iran-talks-to-reopen-strait-of-hormuz",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611011139",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86309609/Iran-s-defense-doctrine-no-longer-bound-by-geography-of-a-threat",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/geopolitics/article/21755644",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1383728",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-warns-new-war-could-last-longer-after-trump-threatens-strikes",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132910",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49178",
     "accessed_at": "2026-11-02T00:40:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-01T11:40:30+00:00",
  "changes": {
   "IRAN-11020040-01": {
    "kind": "new"
   },
   "IRAN-11020040-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיחת טראמפ ונתניהו והתייחסות לאתרי הגרעין של איראן",
    "score": 1.0
   },
   "IRAN-11020040-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרת תנאים לפתיחת מצר הורמוז על ידי שר החוץ של איראן",
    "score": 0.817
   },
   "IRAN-11020040-04": {
    "kind": "new"
   },
   "IRAN-11020040-05": {
    "kind": "possible",
    "prev": "איומי תגובה מצד הנהגת איראן ובכירי הממשל לכל תקיפה מחודשת",
    "score": 0.633
   },
   "IRAN-11020040-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הכרזת משרד החוץ האיראני על גופים צבאיים ומודיעיניים בריטיים כארגוני טרור וארגונים עוינים",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-02T0644__ukraine-202611020644.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-02T06:44:06+00:00",
   "window": {
    "from": "2026-11-01T06:44:06+00:00",
    "to": "2026-11-02T06:44:06+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611020644"
   },
   "summary": "הלחימה בין צבא רוסיה לצבא אוקראינה נמשכת בחילופי תקיפות אוויריות נרחבות של כטב\"מים לעבר יעדי תשתית, לצד פעולות מקומיות בקווי המגע. הפסקת אש הומניטרית בת שישה ימים בעיר אולשקי הגיעה לסיומה לאחר פינוי תושבים, בעוד המרחב הקיברנטי חווה מתקפות פריצה על מערכות התרעת האוכלוסייה. במקביל למאמצים צבאיים נרשמים גישושים דיפלומטיים סביב מגעים אפשריים בתיווך בינלאומי לקראת חידוש שיחות.",
   "fronts": [
    {
     "name": "חזית חרסון (אולשקי והדניפרו)",
     "status": "סיום הפוגה הומניטרית זמנית, חזרה לדריכות צבאית ודיווחים על ביצור עמדות"
    },
    {
     "name": "חזית הצפון / מחוז סומי",
     "status": "תקיפות נקודתיות של כטב\"מים רוסיים נגד כלי רכב וציוד אוקראיני"
    },
    {
     "name": "מרחב העורף והאנרגיה (רוסיה ואוקראינה)",
     "status": "תקיפות הדדיות אינטנסיביות של נחילי כטב\"מים לעבר מתקני נפט, אנרגיה ומבנים אזרחיים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11020644-01",
     "title": "מתקפת כטב\"מים רוסית נרחבת על אוקראינה ויירוט רובם",
     "summary": "כוחות רוסיים שיגרו 193 כלי טיס בלתי מאוישים מסוגים שונים לעבר אוקראינה. מערכות ההגנה האווירית של אוקראינה יירטו או שיבשו 154 מהם, בעוד שנרשמו פגיעות ב-26 אתרים ונפילות שברי יירוט במספר מוקדים.",
     "axis": "רוסיה - אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T18:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T05:56:00+00:00",
     "last_update_at": "2026-11-02T06:10:00+00:00",
     "what_is_not_verified": "אין אימות עצמאי להיקף היירוטים המדויק או לכמות הנזק בכל 26 מוקדי הפגיעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060800/",
       "published_at": "2026-11-02T06:10:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180368-air-defenses-down-154-out-of-193-drones-used-by-russia-to-attack-ukraine-since-evening.html",
       "published_at": "2026-11-02T05:56:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אוריול, רוסיה",
       "lat": 52.9709,
       "lon": 36.0642
      },
      {
       "name": "קורסק, רוסיה",
       "lat": 51.727,
       "lon": 36.1922
      },
      {
       "name": "בריאנסק, רוסיה",
       "lat": 53.2789,
       "lon": 34.3659
      }
     ]
    },
    {
     "id": "UKRAINE-11020644-02",
     "title": "פגיעת כטב\"ם רוסי במעונות סטודנטים במחוז ויניצה",
     "summary": "כטב\"ם רוסי פגע בסמוך למעונות מוסד לימודי בקהילת קוזיאטין שבמחוז ויניצה, וגרם למותם של נערה בת 13 ואישה, ולפציעת ארבעה בני אדם נוספים בהם ילדים.",
     "axis": "מחוז ויניצה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T19:02:26+00:00",
     "last_update_at": "2026-11-02T03:23:00+00:00",
     "what_is_not_verified": "בדיווחים הראשוניים נמסר על גבר שנהרג, פרט שתוקן בהמשך לנערה בת 13",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060746/",
       "published_at": "2026-11-02T03:23:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-drone-strike-near-school-dormitory-kills-13-year-old-in-vinnytsia-oblast-injures-more-children/",
       "published_at": "2026-11-01T19:02:26+00:00"
      }
     ],
     "places": [
      {
       "name": "קוזיאטין, אוקראינה",
       "lat": 49.7196,
       "lon": 28.8354
      }
     ]
    },
    {
     "id": "UKRAINE-11020644-03",
     "title": "סיום הפסקת האש ההומניטרית באולשקי ופינוי אזרחים",
     "summary": "הפסקת האש המקומית שנמשכה שישה ימים בעיר הכבושה אולשקי שבאזור חרסון הגיעה לסיומה. במסגרת המבצע פונו אזרחים לשטחים בשליטת אוקראינה, בעוד שצבא אוקראינה טוען כי רוסיה ניצלה את ההפוגה לביצור עמדותיה.",
     "axis": "מחוז חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T17:24:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T17:24:31+00:00",
     "last_update_at": "2026-11-02T06:37:00+00:00",
     "what_is_not_verified": "הטענה שרוסיה ניצלה את ההפוגה לביצור עמדות נמסרה מצד אחד בלבד ולא אומתה באופן בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180373-russia-used-humanitarian-pause-in-oleshky-to-fortify-its-positions-general-staff.html",
       "published_at": "2026-11-02T06:37:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2211629",
       "published_at": "2026-11-02T04:44:38+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4180361-lubinets-announces-end-of-ceasefire-in-oleshky.html",
       "published_at": "2026-11-02T04:25:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/02/ukraine-war-briefing-kyiv-says-air-raid-warning-app-likely-hacked-after-users-receive-false-alerts",
       "published_at": "2026-11-02T00:34:41+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-evacuate-civilians-around-kherson-oblast-during-oleshky-ceasefire/",
       "published_at": "2026-11-01T23:38:34+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060780/",
       "published_at": "2026-11-01T21:42:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2211569",
       "published_at": "2026-11-01T17:49:23+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/tears-and-joy-as-oleshky-residents-reunite-with-relatives-in-ukraine/",
       "published_at": "2026-11-01T17:24:31+00:00"
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
     "id": "UKRAINE-11020644-04",
     "title": "מתקפות סייבר הדדיות על יישומוני ההתרעות באוקראינה וברוסיה",
     "summary": "האפליקציה הרשמית להתרעות אוויריות באוקראינה נפרצה והציגה התרעות שווא על מתקפה גרעינית, שימוש בנשק כימי ושיגור טילי אורשניק. בהמשך דיווח המשרד למצבי חירום של רוסיה על מתקפת סייבר שפגעה ביישומון ההתרעות שלו.",
     "axis": "סייבר ועורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T21:29:01+00:00",
     "last_update_at": "2026-11-02T06:39:36+00:00",
     "what_is_not_verified": "זהות התוקפים במדויק ורמת הנזק התשתיתי ליישומים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1383812",
       "published_at": "2026-11-02T06:39:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/02/ukraine-war-briefing-kyiv-says-air-raid-warning-app-likely-hacked-after-users-receive-false-alerts",
       "published_at": "2026-11-02T00:34:41+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49209",
       "published_at": "2026-11-02T00:34:02+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21756681",
       "published_at": "2026-11-01T23:10:02+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49206",
       "published_at": "2026-11-01T22:56:38+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraines-air-raid-alert-system-hacked-air-force-says-as-false-nuclear-chemical-warnings-sound/",
       "published_at": "2026-11-01T21:29:01+00:00"
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
     "id": "UKRAINE-11020644-05",
     "title": "תקיפות כטב\"מים אוקראיניות על מתקני נפט בעומק רוסיה",
     "summary": "כטב\"מים אוקראיניים ארוכי טווח פגעו לפי דיווחים במתקני אנרגיה ובתי זיקוק לנפט ברוסיה, בהם בית הזיקוק בקסטובו שבמחוז ניז'ני נובגורוד ותחנת שאיבה וזיקוק בסמארה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T16:59:37+00:00",
     "last_update_at": "2026-11-02T05:18:36+00:00",
     "what_is_not_verified": "היקף הנזק הממשי במתקני הנפט ברוסיה טרם אומת באופן עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-reportedly-strike-oil-facility-in-russias-samara-oblast-in-overnight-attack/",
       "published_at": "2026-11-02T05:18:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/01/ukraine-defies-trump-resumes-attacks-russian-oil",
       "published_at": "2026-11-01T17:20:18+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-oil-refinery-in-kstovo-ablaze-after-reported-overnight-drone-strike/",
       "published_at": "2026-11-01T16:59:37+00:00"
      }
     ],
     "places": [
      {
       "name": "קסטובו, רוסיה",
       "lat": 56.1496,
       "lon": 44.198
      },
      {
       "name": "פרוסבט, רוסיה",
       "lat": 55.5691,
       "lon": 65.0768
      }
     ]
    },
    {
     "id": "UKRAINE-11020644-06",
     "title": "יירוט עשרות כטב\"מים אוקראיניים בשמי מחוזות רוסיה",
     "summary": "מערכות ההגנה האווירית של רוסיה יירטו והשמידו 47 כטב\"מים אוקראיניים מעל שורת מחוזות ברחבי המדינה, כולל מחוזות מוסקבה, קורסק, בלגורוד ורוסטוב.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T17:57:29+00:00",
     "last_update_at": "2026-11-01T17:57:29+00:00",
     "what_is_not_verified": "כמות היירוטים המדויקת מתבססת על הודעת משרד ההגנה הרוסי בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2211577",
       "published_at": "2026-11-01T17:57:29+00:00"
      }
     ],
     "places": [
      {
       "name": "בלגורוד, רוסיה",
       "lat": 50.5956,
       "lon": 36.5873
      },
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-11020644-07",
     "title": "הצהרת זלנסקי על נכונות לפסגה מדינית משולשת בטורקיה",
     "summary": "נשיא אוקראינה וולודימיר זלנסקי הודיע על נכונותו להיפגש באיסטנבול עם מנהיגי רוסיה וארה\"ב בתיווך טורקי לדיון בסיום המלחמה, והדגיש כי אוקראינה לא תוותר על שטחיה הכבושים.",
     "axis": "משא ומתן ומדיניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T16:57:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T16:57:32+00:00",
     "last_update_at": "2026-11-01T19:28:00+00:00",
     "what_is_not_verified": "הסכמת הצד הרוסי או האמריקאי לקיום הפגישה באיסטנבול",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_cnn_turk",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060768/",
       "published_at": "2026-11-01T19:28:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_cnn_turk",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060767/",
       "published_at": "2026-11-01T19:09:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_cnn_turk",
       "url": "https://t.me/alexmehacarmel/49199",
       "published_at": "2026-11-01T16:57:32+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "UKRAINE-11020644-08",
     "title": "תקיפת רכב קרבי משוריין אוקראיני במחוז סומי",
     "summary": "צוות כטב\"מים של כוח המשימה הצפוני של צבא רוסיה תקף רכב משוריין מדגם קוזאק של צבא אוקראינה בשטח מחוז סומי.",
     "axis": "מחוז סומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T03:05:00+00:00",
     "last_update_at": "2026-11-02T03:05:00+00:00",
     "what_is_not_verified": "מידת הנזק הסופי לרכב המשוריין והנפגעים באירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211617",
       "published_at": "2026-11-02T03:05:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז סומי, אוקראינה",
       "lat": 50.7371,
       "lon": 35.4534
      }
     ]
    }
   ],
   "not_verified": [
    "הדיווחים על תקיפת מתקני הנפט הרוסיים בסמארה ובקסטובו מתבססים על ערוצי מעקב ותקשורת מקומית ואינם מאומתים רשמית",
    "נתוני האבדות ההדדיים שפורסמו על ידי שני הצדדים (2,500 רוסים ביממה, 8,300 אוקראינים בשבוע) לא ניתנים לאימות עצמאי",
    "ההאשמה האוקראינית כי רוסיה ניצלה את ההפוגה באולשקי להתבצרות לא אומתה ממקורות ניטרליים",
    "הפרטים סביב מגעים אפשריים להסכם גז אמריקאי-אירופי דרך אוקראינה מבוססים על דיווח עיתונאי בלבד"
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
     "value": 1.1172,
     "unit": "USD",
     "change_pct": 0.38,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "שמירה על שלמותה הטריטוריאלית ואי-הכרה בשטחים הכבושים כולל חצי האי קרים",
      "נכונות לפגישת פסגה משולשת באיסטנבול והגעה להפסקת אש מקיפה ומנוטרת"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומורלי על רוסיה באמצעות פגיעה שיטתית במתקני זיקוק והפקת נפט",
      "הרתעת הציבור וההנהגה ברוסיה באמצעות תגובות סייבר ואמצעים לא קונבנציונליים להפצת בהלה"
     ],
     "forecast": [
      "אוקראינה תמשיך לנסות לפגוע בתשתיות אנרגיה רוסיות חרף לחצים פוליטיים בינלאומיים",
      "קייב תמשיך ללחוץ לקבלת הזמנה ומעמד רשמי במפגשי פסגה בינלאומיים כמו ה-G20"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הלחימה לשחיקת הכוחות האוקראיניים ופגיעה בריכוזי כוחות ותשתיות",
      "קיום מחויבויות הומניטריות נקודתיות כפי שהוגדרו בהסכם הזמני באולשקי"
     ],
     "inferred": [
      "המשך שחיקת מערך ההגנה האווירית של אוקראינה באמצעות מתקפות כטב\"מים המוניות",
      "ניצול הפוגות הומניטריות לצורך שיפור עמדות הגנה והתבצרות בשטחים שבשליטתה"
     ],
     "forecast": [
      "הגברת התקיפות האוויריות על יעדי שלטון ותשתית לקראת החורף",
      "דחיית הצעות למפגשי פסגה ישירים שאינם עולים בקנה אחד עם תנאיה המוקדמים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/01/ukraine-defies-trump-resumes-attacks-russian-oil",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21756681",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-russian-oil-refinery-in-kstovo-ablaze-after-reported-overnight-drone-strike/",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1383812",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060767/",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2211617",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49199",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-society/4180361-lubinets-announces-end-of-ceasefire-in-oleshky.html",
     "accessed_at": "2026-11-02T06:44:06+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-01T16:54:25+00:00",
  "changes": {
   "UKRAINE-11020644-01": {
    "kind": "new"
   },
   "UKRAINE-11020644-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפת כטב\"מים רוסית במחוז ויניצה",
    "score": 0.817
   },
   "UKRAINE-11020644-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "השלמת פינוי אזרחים ובעלי חיים מאולשקי",
    "score": 1.0
   },
   "UKRAINE-11020644-04": {
    "kind": "new"
   },
   "UKRAINE-11020644-05": {
    "kind": "possible",
    "prev": "תקיפה בבית הזיקוק בקסטובו ברוסיה",
    "score": 0.633
   },
   "UKRAINE-11020644-06": {
    "kind": "new"
   },
   "UKRAINE-11020644-07": {
    "kind": "new"
   },
   "UKRAINE-11020644-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-02T0044__north-202611020044.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-02T00:44:47+00:00",
   "window": {
    "from": "2026-11-01T00:44:47+00:00",
    "to": "2026-11-02T00:44:47+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611020044"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות קרקעית ואווירית ישראלית מתמשכת בדרום לבנון לאיתור אמצעי לחימה ותקיפת יעדים. במקביל מתקיימת דריכות גוברת מפני הצטרפות של חיזבאללה לסבב לחימה נוסף על רקע מתיחות אזורית, לצד אי-אמון פנימי בלבנון בנוגע לכוונות הארגון. צה\"ל ממשיך להחזיק כוחות באזור הגבול ומכין תוכניות אופרטיביות לזירות לבנון וסוריה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות קרקעית מתמשכת, תקיפות אוויריות ישראליות וסלילת צירים"
    },
    {
     "name": "הזירה הפנים-לבנונית מול ישראל",
     "status": "חשש מהסלמה מחודשת וחוסר אמון בהצהרות חיזבאללה שלא לפתוח במלחמה"
    },
    {
     "name": "חזית סוריה",
     "status": "מוכנות צבאית של צה\"ל לפעולה ללא דיווח על תקריות אש ישירות בטקסט"
    }
   ],
   "events": [
    {
     "id": "NORTH-11020044-01",
     "title": "השחתת בית תפילה של יוצאי צד\"ל",
     "summary": "אלמונים פרצו למבנה תפילה של יוצאי צבא דרום לבנון, ניפצו סמלי דת וקרעו תמונות שהובאו מלבנון. המשטרה פתחה בחקירה.",
     "axis": "ישראל - לבנון (עורף)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T18:53:20+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T18:53:20+00:00",
     "last_update_at": "2026-11-02T00:26:49+00:00",
     "what_is_not_verified": "זהות המבצעים והמניע למעשה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1poelbame",
       "published_at": "2026-11-02T00:26:49+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/local/article/21755467",
       "published_at": "2026-11-01T18:53:20+00:00"
      }
     ],
     "places": [
      {
       "name": "נהריה, ישראל",
       "lat": 33.0066,
       "lon": 35.0984
      }
     ]
    },
    {
     "id": "NORTH-11020044-02",
     "title": "איתור אמצעי לחימה וסממני חיזבאללה בבית אזרחי בדרום לבנון",
     "summary": "כוחות חטיבה 769 מאוגדה 91 איתרו בתוך מבנה מגורים אמל\"ח וחדר ילדים עם סמלים המשויכים לארגון חיזבאללה.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T15:08:12+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T15:08:12+00:00",
     "last_update_at": "2026-11-01T15:19:21+00:00",
     "what_is_not_verified": "פירוט מדויק של היקף אמצעי הלחימה שנמצאו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25523",
       "published_at": "2026-11-01T15:19:21+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383959691",
       "published_at": "2026-11-01T15:08:12+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ח'יאם, לבנון",
       "lat": 33.3103,
       "lon": 35.6054
      }
     ]
    },
    {
     "id": "NORTH-11020044-03",
     "title": "תקיפת מטוסי קרב בדרום לבנון בעת מסיבת עיתונאים",
     "summary": "מטוסי קרב תקפו יעדים בכפר אלקציר, דבר שהוביל לקטיעת מסיבת עיתונאים שערכה שרת הרווחה הלבנונית בכפר הסמוך פרון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T11:29:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T11:29:24+00:00",
     "last_update_at": "2026-11-01T11:29:24+00:00",
     "what_is_not_verified": "היעד המדויק שהותקף ונפגעים בתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132932",
       "published_at": "2026-11-01T11:29:24+00:00"
      }
     ],
     "places": [
      {
       "name": "אלקציר, לבנון",
       "lat": 34.6058,
       "lon": 36.2389
      },
      {
       "name": "פרון, לבנון",
       "lat": 33.2968,
       "lon": 35.4265
      }
     ]
    },
    {
     "id": "NORTH-11020044-04",
     "title": "היערכות צבאית ישראלית לאפשרות של הסלמה מול לבנון וסוריה",
     "summary": "גורמי ביטחון מצביעים על תוכניות צבאיות מול לבנון וסוריה, הכוללות הפעלת כוחות יבשה וים והתמקדות במספר מוקדים מרכזיים אם חיזבאללה יצטרף לעימות אזורי.",
     "axis": "ישראל - לבנון וסוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T15:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T15:00:00+00:00",
     "last_update_at": "2026-11-01T15:00:00+00:00",
     "what_is_not_verified": "היקף התוכנית המבצעית ומועד הפעלתה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/965857/israel-faces-political-deadlock-amid-regional-war-preparations-with-le/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965857",
       "published_at": "2026-11-01T15:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "צידון, לבנון",
       "lat": 33.5642,
       "lon": 35.3753
      },
      {
       "name": "צור, לבנון",
       "lat": 33.2721,
       "lon": 35.1964
      }
     ]
    },
    {
     "id": "NORTH-11020044-05",
     "title": "סלילת צירים על ידי צה\"ל בדרום לבנון",
     "summary": "לפי דיווח מלבנון, צה\"ל סולל דרכים חדשות בין עמדות צבאיות באזורים הרריים במקביל לפעולות הריסה.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T03:54:39+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T03:54:39+00:00",
     "last_update_at": "2026-11-01T03:54:39+00:00",
     "what_is_not_verified": "אימות עצמאי לדיווח סוכנות הידיעות הלבנונית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-builds-new-roads-linking-military-posts-in-southern-lebanon/4107704",
       "published_at": "2026-11-01T03:54:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11020044-06",
     "title": "חשש בלבנון מסבב מלחמה שלישי והבטחות חיזבאללה",
     "summary": "בלבנון מביעים חוסר אמון בהבטחות חיזבאללה שלא להצטרף לעימות חדש, על רקע התנהלות העבר בסבב הלחימה הקודם.",
     "axis": "לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T07:35:44+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T07:35:44+00:00",
     "last_update_at": "2026-11-01T07:35:44+00:00",
     "what_is_not_verified": "עמדת חיזבאללה הרשמית והמחויבות להבטחות שניתנו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383959626",
       "published_at": "2026-11-01T07:35:44+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מניעי וזהות משחיתי בית התפילה של יוצאי צד\"ל בנהריה",
    "דיווח סוכנות הידיעות הלבנונית על היקף סלילת הדרכים וההריסות בדרום לבנון",
    "מידת המוכנות של חיזבאללה לעמוד בהתחייבות שלא להצטרף לעימות אזורי חדש"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים על מדינת ישראל ופעילות במרחב האבטחה בדרום לבנון"
     ],
     "inferred": [
      "היערכות לפגיעה נרחבת בחיזבאללה באמצעות כוחות יבשה וים אם תיפתח חזית נוספת",
      "הפחתת עומס המילואים לאורך זמן בכפוף למצב הביטחוני"
     ],
     "forecast": [
      "המשך פעולות ממוקדות לאיתור תשתיות צבאיות בדרום לבנון תוך שמירה על כוננות גבוהה להתרחבות הלחימה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "הבטחה שלא להצטרף לסבב עימות חדש"
     ],
     "inferred": [
      "שימור יכולת התגובה והתחמשות מוסווית במרחב האזרחי בדרום לבנון",
      "המתנה להתפתחויות אזוריות טרם קבלת החלטה על פתיחת אש"
     ],
     "forecast": [
      "סבירות גבוהה להפרת הבטחות והצטרפות לעימות במקרה של תקיפה רחבה נגד בעלי בריתו באזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-builds-new-roads-linking-military-posts-in-southern-lebanon/4107704",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/local/article/21755467",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/965857/israel-faces-political-deadlock-amid-regional-war-preparations-with-le/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965857",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132932",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25523",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383959626",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1poelbame",
     "accessed_at": "2026-11-02T00:44:47+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-01T06:55:10+00:00",
  "changes": {
   "NORTH-11020044-01": {
    "kind": "new"
   },
   "NORTH-11020044-02": {
    "kind": "new"
   },
   "NORTH-11020044-03": {
    "kind": "new"
   },
   "NORTH-11020044-04": {
    "kind": "new"
   },
   "NORTH-11020044-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פעילות צבאית והרס בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11020044-06": {
    "kind": "new"
   }
  }
 }
};
