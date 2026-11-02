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
  "draft": "drafts/ukraine/2026-11-01T1654__ukraine-202611011654.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-01T16:54:25+00:00",
   "window": {
    "from": "2026-10-31T16:54:25+00:00",
    "to": "2026-11-01T16:54:25+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611011654"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעוצמה גבוהה, כאשר רוסיה מפעילה כטב\"מים נגד יעדי אנרגיה ומבנים אזרחיים בעורף האוקראיני, לצד תקיפת כלי שיט בים השחור. במקביל, כוחות אוקראינה מבצעים תקיפות עומק נגד מתקני זיקוק ותעשייה ביטחונית ברוסיה, ומשלבים כלים בלתי מאוישים יבשתיים ואוויריים בחזית. ברקע התקיפות ההדדיות התבצעה הפוגה מקומית חריגה לצורך חילוץ הומניטרי מהעיר אולשקי, בעוד המגעים והעמדות להסדר מדיני רחב נותרים מסויגים ורחוקים מפתרון.",
   "fronts": [
    {
     "name": "גזרת לימאן",
     "status": "קרבות פעילים הכוללים שימוש בכרב\"מים ורחפנים"
    },
    {
     "name": "מחוז חרסון (אולשקי)",
     "status": "הפוגה מקומית שהתקיימה לצורך מבצע הומניטרי ופינוי אוכלוסייה"
    },
    {
     "name": "הים השחור ומרחב אודסה",
     "status": "פגיעות בכלי שיט באמצעות כטב\"מים"
    },
    {
     "name": "עורף אוקראינה",
     "status": "מתקפות כטב\"מים רוסיות מסיביות על מתקני אנרגיה ומטרות אזרחיות"
    },
    {
     "name": "עורף רוסיה",
     "status": "תקיפות אוקראיניות ממוקדות נגד בתי זיקוק ומפעלי נשק"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11011654-01",
     "title": "תקיפת כטב\"מים רוסית במחוז ויניצה",
     "summary": "מתקפה רוסית באמצעות כטב\"ם פגעה במעונות סטודנטים באזור קוזיאטין במחוז ויניצה, וגרמה למותן של נערה ואישה ולפציעת ארבעה בני אדם.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T16:25:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T16:25:00+00:00",
     "last_update_at": "2026-11-01T16:25:00+00:00",
     "what_is_not_verified": "בתחילה דווח על גבר שנהרג במקום, אך המידע תוקן בהמשך לנערה בת 13.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060746/",
       "published_at": "2026-11-01T16:25:00+00:00"
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
     "id": "UKRAINE-11011654-02",
     "title": "פגיעת כטב\"מים בצ'רנוביץ",
     "summary": "מתקפת כטב\"מים רוסית פגעה בבניין משרדים בעיר צ'רנוביץ ופצעה אדם מבוגר מרסיסים, בעוד כטב\"ם נוסף יורט בסמוך.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T14:08:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T14:08:00+00:00",
     "last_update_at": "2026-11-01T14:08:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060740/",
       "published_at": "2026-11-01T14:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'רנוביץ, אוקראינה",
       "lat": 48.2865,
       "lon": 25.9377
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-03",
     "title": "פגיעות רוסיות בתשתיות אנרגיה באוקראינה",
     "summary": "תקיפות רוסיות פגעו בתשתיות אנרגיה בארבעה מחוזות באוקראינה, פצעו עובדי חברת חשמל והביאו לניתוק מאות אלפים מאספקת החשמל.",
     "axis": "תשתיות אנרגיה באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T11:42:47+00:00",
     "last_update_at": "2026-11-01T11:44:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_dtek",
       "url": "https://kyivindependent.com/russian-attacks-kill-1-injure-47-over-past-day-leaving-hundreds-of-thousands-without-electricity/",
       "published_at": "2026-11-01T11:44:46+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_dtek",
       "url": "https://tass.com/emergencies/2211529",
       "published_at": "2026-11-01T11:42:47+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11011654-04",
     "title": "תקיפה אוקראינית על מפעל כימי ומערכות הגנה אווירית ברוסיה",
     "summary": "כוחות אוקראינה פגעו במפעל הכימי בקמנסק שבמחוז רוסטוב המייצר דלק לרקטות, וכן במערכת פנציר-אס2 וברכב פיקוד של מערכת אס-400.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T11:27:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T11:27:00+00:00",
     "last_update_at": "2026-11-01T14:07:08+00:00",
     "what_is_not_verified": "היקף הנזק המדויק מבוסס על הערכת הנשיא האוקראיני בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-confirms-attack-on-russian-rocket-fuel-factory-missile-launcher-system/",
       "published_at": "2026-11-01T14:07:08+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180240-zelensky-reports-strikes-on-russian-defense-industry-plant-air-defense-assets-worth-70-million.html",
       "published_at": "2026-11-01T11:27:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11011654-05",
     "title": "תקיפה בבית הזיקוק בקסטובו ברוסיה",
     "summary": "שריפה פרצה בבית זיקוק בעיר קסטובו במחוז ניז'ני נובגורוד בעקבות תקיפת כטב\"מים אוקראינית בלילה.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T02:54:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T02:54:16+00:00",
     "last_update_at": "2026-11-01T03:25:48+00:00",
     "what_is_not_verified": "מידת הנזק התפעולי הנוכחי שנגרם למתקן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-oil-refinery-in-kstovo-ablaze-after-reported-overnight-drone-strike/",
       "published_at": "2026-11-01T03:25:48+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49181",
       "published_at": "2026-11-01T02:54:16+00:00"
      }
     ],
     "places": [
      {
       "name": "קסטובו, מחוז ניז'ני נובגורוד, רוסיה",
       "lat": 56.1496,
       "lon": 44.198
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-06",
     "title": "השלמת פינוי אזרחים ובעלי חיים מאולשקי",
     "summary": "הושלם מבצע הומניטרי לפינוי תושבים וחיות מחמד מהעיירה הכבושה אולשקי במחוז חרסון דרך בלארוס, בחסות הפסקת אש זמנית.",
     "axis": "מחוז חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T16:55:47+00:00",
     "last_update_at": "2026-11-01T14:20:00+00:00",
     "what_is_not_verified": "משך תוקפה המדויק של הפסקת האש המקומית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060742/",
       "published_at": "2026-11-01T14:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060737/",
       "published_at": "2026-11-01T13:47:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://t.me/alexmehacarmel/49171",
       "published_at": "2026-10-31T21:10:21+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.theguardian.com/world/2026/oct/31/oleshky-evacuees-reunite-with-families-after-truce-allows-crossing-into-ukraine",
       "published_at": "2026-10-31T19:17:22+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.bbc.co.uk/news/videos/cmy83w0jwznpo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-31T16:55:47+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, מחוז חרסון, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-07",
     "title": "קרב כרב\"מים בגזרת לימאן",
     "summary": "מפעילי רחפנים רוסים בלמו מתקפה של כלים רובוטיים קרקעיים (כרב\"מים) של צבא אוקראינה, והשמידו עשרות מהם לפי הטענה.",
     "axis": "גזרת לימאן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T15:21:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T15:21:15+00:00",
     "last_update_at": "2026-11-01T15:21:15+00:00",
     "what_is_not_verified": "לא מאומת האם כל 28 הכלים הושמדו באותה המתקפה בדיוק כפי שנטען.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49197",
       "published_at": "2026-11-01T15:21:15+00:00"
      }
     ],
     "places": [
      {
       "name": "לימאן, אוקראינה",
       "lat": 48.9801,
       "lon": 37.8168
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-08",
     "title": "תקיפת כלי שיט מול חופי אודסה",
     "summary": "משרד ההגנה הרוסי טען כי כוחותיו תקפו באמצעות כטב\"ם ספינה שהובילה מטענים עבור הצבא האוקראיני סמוך לאודסה.",
     "axis": "הים השחור / אודסה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T14:52:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T14:52:25+00:00",
     "last_update_at": "2026-11-01T14:52:25+00:00",
     "what_is_not_verified": "הפגיעה בכלי השיט ואופי המטען לא אומתו על ידי מקורות עצמאיים או אוקראיניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2211547",
       "published_at": "2026-11-01T14:52:25+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-09",
     "title": "יוזמות להגבלת אשרות כניסה לספורטאים מרוסיה ובלארוס",
     "summary": "פינלנד ושוודיה מקדמות חקיקה והנחיות באיחוד האירופי למניעת כניסת ספורטאים מרוסיה ומבלארוס לתחרויות בינלאומיות בתחומן.",
     "axis": "הזירה המדינית / סנקציות בינלאומיות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T14:34:00+00:00",
     "last_update_at": "2026-11-01T16:03:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060752/",
       "published_at": "2026-11-01T16:03:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/foreign-minister-sybiha-calls-for-russian-athlete-travel-ban-as-moscows-ice-hockey-return-risks-forcing-ukraine-out/",
       "published_at": "2026-11-01T15:50:02+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060700/",
       "published_at": "2026-11-01T14:34:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פא Falun, שוודיה",
       "lat": 60.607,
       "lon": 15.6323
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-10",
     "title": "עמדות הקרמלין לגבי פורמט השיחות עם אוקראינה",
     "summary": "בכירי הקרמלין הצהירו כי שיחות המשא ומתן צריכות להתחיל במבנה משולש, טענו שפוטין אינו מסרב לפגוש את זלנסקי במוסקבה, ודרשו מאירופה לשנות את גישתה.",
     "axis": "הזירה המדינית / משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T10:15:11+00:00",
     "last_update_at": "2026-11-01T10:53:08+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211521",
       "published_at": "2026-11-01T10:53:08+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211519",
       "published_at": "2026-11-01T10:49:38+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211517",
       "published_at": "2026-11-01T10:15:11+00:00"
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
     "id": "UKRAINE-11011654-11",
     "title": "התרעת שגרירות ארצות הברית על איום ביטחוני במוסקבה",
     "summary": "שגרירות ארצות הברית פרסמה אזהרה מפני מתקפת טרור במוזיאון צאריצינו במוסקבה, והשירות הפדרלי הרוסי אישר כי קיבל את ההתרעה ונוקט צעדים.",
     "axis": "ביטחון פנים ברוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T16:43:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T16:43:32+00:00",
     "last_update_at": "2026-10-31T16:54:25+00:00",
     "what_is_not_verified": "טיב האיום המדויק וזהות הגורמים העומדים מאחוריו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_fsb",
       "url": "https://meduza.io/en/news/2026/10/31/u-s-embassy-warns-of-mass-casualty-threat-at-moscow-s-tsaritsyno-museum-fsb-confirms-receiving-the-warning",
       "published_at": "2026-10-31T16:43:32+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    }
   ],
   "not_verified": [
    "טענת משרד ההגנה הרוסי על פגיעה בכלי שיט צבאי באזור אודסה",
    "מספר הנפגעים והאבידות המדויק שכל צד מייחס ליריבו באוקטובר 2026",
    "ההיקף הכספי המדויק של הנזק שנגרם למערכות ההגנה האווירית הרוסיות",
    "מהימנות הדיווח על השמדת 28 כרב\"מים אוקראיניים בהתקפה יחידה בלימאן",
    "מהות האיום הביטחוני במוזיאון צאריצינו במוסקבה"
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
      "הגברת הלחץ הבינלאומי להשגת שלום באמצעות החלטות תקיפות ואותות נחרצים לרוסיה",
      "הטלת חרם ואיסור כניסה על ספורטאים מרוסיה ומבלארוס לאירופה"
     ],
     "inferred": [
      "פגיעה ביכולות התעשייה הצבאית והאנרגיה הרוסית לצמצום כושר הלחימה של האויב",
      "הרחבת השימוש במערכים בלתי מאוישים מגוונים לפיצוי על מגבלות כוח אדם"
     ],
     "forecast": [
      "המשך מאמצי תקיפת מטרות עומק כלכליות ותעשייתיות בשטח רוסיה",
      "פעילות דיפלומטית ענפה למניעת שיקום מעמדה הבינלאומי של מוסקבה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "ניהול שיחות בנושא אוקראינה תחילה בפורמט משולש",
      "דרישה מאירופה לזנוח את המטרה להביס את רוסיה כתנאי למשא ומתן"
     ],
     "inferred": [
      "הכרעת כושר העמידה האוקראיני לקראת החורף באמצעות שחיקת רשת החשמל והאנרגיה",
      "המשך כיבוש טריטוריאלי במזרח מעבר לגבולות חבל דונבאס"
     ],
     "forecast": [
      "התגברות התקיפות האוויריות על תשתיות חיוניות באוקראינה",
      "הצבת תנאי פתיחה נוקשים בכל ערוץ משא ומתן אפשרי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/videos/cmy83w0jwznpo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/31/oleshky-evacuees-reunite-with-families-after-truce-allows-crossing-into-ukraine",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/foreign-minister-sybiha-calls-for-russian-athlete-travel-ban-as-moscows-ice-hockey-return-risks-forcing-ukraine-out/",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/31/u-s-embassy-warns-of-mass-casualty-threat-at-moscow-s-tsaritsyno-museum-fsb-confirms-receiving-the-warning",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060700/",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2211517",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49197",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4180240-zelensky-reports-strikes-on-russian-defense-industry-plant-air-defense-assets-worth-70-million.html",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-31T06:12:28+00:00",
  "changes": {
   "UKRAINE-11011654-01": {
    "kind": "possible",
    "prev": "מתקפת כטב\"מים רוסית על חרקוב",
    "score": 0.467
   },
   "UKRAINE-11011654-02": {
    "kind": "new"
   },
   "UKRAINE-11011654-03": {
    "kind": "new"
   },
   "UKRAINE-11011654-04": {
    "kind": "new"
   },
   "UKRAINE-11011654-05": {
    "kind": "possible",
    "prev": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק",
    "score": 0.467
   },
   "UKRAINE-11011654-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מבצע הומניטרי ופינוי אזרחים מהעיר אולשקי הכבושה",
    "score": 1.0
   },
   "UKRAINE-11011654-07": {
    "kind": "new"
   },
   "UKRAINE-11011654-08": {
    "kind": "possible",
    "prev": "פגיעה באוניית משא מדרום לאודסה",
    "score": 0.633
   },
   "UKRAINE-11011654-09": {
    "kind": "new"
   },
   "UKRAINE-11011654-10": {
    "kind": "new"
   },
   "UKRAINE-11011654-11": {
    "kind": "possible",
    "prev": "סגירת מערכת העיתון נובאיה גזטה במוסקבה",
    "score": 0.633
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
