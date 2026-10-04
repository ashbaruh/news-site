/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-03T0552__yemen-202610030552.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-03T05:52:32+00:00",
   "window": {
    "from": "2026-10-02T05:52:32+00:00",
    "to": "2026-10-03T05:52:32+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610030552"
   },
   "summary": "הלחימה בתימן מתրכזת כיום בעיקר במחוז טאיז ובאזורי החוף סביב מצר באב אל-מנדב והים האדום, שם מתנהלים עימותים עזים בין כוחות הממשלה התימנית הנתמכים בידי סעודיה לבין המיליציה החות'ית. החות'ים הרחיבו את אחיזתם במרחב הימי והיבשתי, מה שמעורר תגובות נגד צבאיות והיערכות אזורית ובינלאומית רחבה בהובלת סעודיה וגורמים מערביים לאבטחת נתיבי השיט, לצד החמרה חמורה במשבר ההומניטרי והתזונתי במדינה.",
   "fronts": [
    {
     "name": "חזית טאיז",
     "status": "פעילה"
    },
    {
     "name": "הזירה הימית (ים אדום ובאב אל-מנדב)",
     "status": "פעילה"
    },
    {
     "name": "גבול סעודיה-תימן",
     "status": "פעילה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10030552-01",
     "title": "פעולות צבא תימן נגד החות'ים בטאיז",
     "summary": "כוחות צבא תימן דיווחו על ביצוע עשרות עד מאות תקיפות ופעולות נגד יעדים, התארגנויות ותגבורות של החות'ים במחוז טאיז.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T18:28:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T18:28:36+00:00",
     "last_update_at": "2026-10-03T04:27:23+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בקרב החות'ים אינו מאומת ממקור בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_e92676a9135b1882",
       "url": "https://www.maariv.co.il/breaking-news/article-1373065",
       "published_at": "2026-10-03T04:27:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_e92676a9135b1882",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-forces-claim-71-attacks-houthi-targets-taiz",
       "published_at": "2026-10-03T03:23:29+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_e92676a9135b1882",
       "url": "https://www.sabanew.net/viewstory/153397",
       "published_at": "2026-10-03T01:44:48+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_e92676a9135b1882",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/3/iran-war-live-fighting-intensifies-in-yemen-hundreds-killed-or-injured?traffic_source=rss",
       "published_at": "2026-10-03T00:00:00+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_344176f63cf9237d",
       "url": "https://www.sabanew.net/viewstory/153392",
       "published_at": "2026-10-02T18:28:36+00:00"
      }
     ],
     "places": [
      {
       "name": "טאיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10030552-02",
     "title": "יירוט טילים וכטב\"מים באזור סעודיה",
     "summary": "כוחות הברית תועדו מיירטת ומדמינה טילים בליסטיים וכטב\"מים שהושקו לעבר אזורים בסעודיה, כולל חמיס משיט.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T17:54:15+00:00",
     "last_update_at": "2026-10-02T17:54:15+00:00",
     "what_is_not_verified": "היקף הנזק המלא מן השיגורים אינו מאומת לחלוטין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_a4529db846f2c9de",
       "url": "https://www.sabanew.net/viewstory/153390",
       "published_at": "2026-10-02T17:54:15+00:00"
      }
     ],
     "places": [
      {
       "name": "חמיס משיט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10030552-03",
     "title": "תקיפות החות'ים בעדן",
     "summary": "החות'ים תקפו באמצעות כטב\"מים את העיר עדן בתימן.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T05:58:01+00:00",
     "last_update_at": "2026-10-02T05:58:01+00:00",
     "what_is_not_verified": "תוצאות הפגיעה המדויקות של הכטב\"מים אינן מפורטות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48195",
       "published_at": "2026-10-02T05:58:01+00:00"
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
     "id": "YEMEN-10030552-04",
     "title": "מעצר והאשמת מהנדס בארה\"ב בסיוע לחות'ים",
     "summary": "רשויות אכיפת החוק בארצות הברית עצרו והאשימו מהנדס במתן תמיכה וסיוע חומרי לארגון החות'ים.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T14:49:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T14:49:45+00:00",
     "last_update_at": "2026-10-02T18:25:39+00:00",
     "what_is_not_verified": "הטענות המלאות בכתב האישום טרם הוכחו בבית משפט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21539631",
       "published_at": "2026-10-02T18:25:39+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/10/us-charges-engineer-with-supporting-houthis-louisiana-brothers-and-florida-man-with-financing-hamas.php",
       "published_at": "2026-10-02T14:49:45+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בקרב הלוחמים בשטח טאיז",
    "לוח הזמנים המדויק והתוכניות המלאות של המבצע הצבאי הסעודי המתוכנן נגד החות'ים",
    "היקף הסיוע האיראני הישיר המדויק שניתן לחות'ים בשטח בזמן אמת"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "התנגדות לכוחות הממשלה והקואליציה בתימן",
      "פעולה נגד מה שהם מכנים תקיפות סעודיות"
     ],
     "inferred": [
      "השתלטות על מרחבים חיוניים בטאיז ובחופים כדי לבסס שליטה בים האדום ובבאב אל-מנדב",
      "הפעלת לחץ כלכלי וגיאופוליטי אזורי באמצעות פגיעה בנתיבי שיט"
     ],
     "forecast": [
      "המשך ניסיונות הרחבת השליטה הקרקעית והימית בתימן",
      "התמודדות עם תקיפות נגד מצד כוחות הממשלה והקואליציה"
     ]
    },
    {
     "actor": "סעודיה והממשלה התימנית",
     "declared": [
      "הגנה על שטחי סעודיה ומוקדיה מפני שיגורי החות'ים",
      "תמיכה בממשלה המוכרת בינלאומית של תימן"
     ],
     "inferred": [
      "תכנון פעולה צבאית נרחבת לשבירת השליטה החות'ית בנתיבי השיט בים האדום",
      "בניית בריתות אזוריות לעצירת התפשטות האיום החות'י"
     ],
     "forecast": [
      "פציעה או יציאה למבצע צבאי משולב בתימן ובאזור החוף",
      "חיזוק שיתוף הפעולה הבינלאומי והאזורי לאבטחת נתיבי התנועה הימית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/3/iran-war-live-fighting-intensifies-in-yemen-hundreds-killed-or-injured?traffic_source=rss",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21539631",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/us-charges-engineer-with-supporting-houthis-louisiana-brothers-and-florida-man-with-financing-hamas.php",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1373065",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-forces-claim-71-attacks-houthi-targets-taiz",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153390",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48195",
     "accessed_at": "2026-10-03T05:52:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-02T16:30:27+00:00",
  "changes": {
   "YEMEN-10030552-01": {
    "kind": "new"
   },
   "YEMEN-10030552-02": {
    "kind": "new"
   },
   "YEMEN-10030552-03": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "יירוט כטב\"מים וטילים סמוך לעדן ובחמיס משית",
    "score": 1.0
   },
   "YEMEN-10030552-04": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-03T2340__iran-202610032340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-03T23:40:33+00:00",
   "window": {
    "from": "2026-10-02T23:40:33+00:00",
    "to": "2026-10-03T23:40:33+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610032340"
   },
   "summary": "העימות מול איראן מתאפיין בהגברת הלחץ הכלכלי והצבאי מצד ארצות הברית וישראל, הכולל פריסת כוחות אמריקאיים ודיונים אסטרטגיים ברמה גבוהה, לצד החמרת משבר המטבע באיראן. במקביל, טהראן מגיבה ברטוריקה מאיימת כלפי מדינות המפרץ ומברכת על נסיגת כוחות זרים מעיראק, בעוד המתיחות האזורית נמשכת.",
   "fronts": [
    {
     "name": "החזית האמריקאית-ישראלית מול איראן",
     "status": "הסלמה ופעילות צבאית ודיפלומטית מוגברת"
    },
    {
     "name": "החזית האיראנית מול מדינות המפרץ",
     "status": "מתיחות ואיומים מדיניים"
    },
    {
     "name": "החזית הכלכלית",
     "status": "החמרת סנקציות, מצור ימי וירידת ערך המטבע האיראני"
    }
   ],
   "events": [
    {
     "id": "IRAN-10032340-01",
     "title": "התכנסות צוות הביטחון הלאומי של טראמפ בקמפ דייוויד",
     "summary": "נשיא ארצות הברית דונלד טראמפ וצוות הביטחון הלאומי הבכיר שלו התכנסו בפגישה בלתי מתוכננת בקמפ דייוויד, במקביל לתנועת נושאת מטוסים ואלפי חיילים אמריקאיים למזרח התיכון.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T16:32:17+00:00",
     "last_update_at": "2026-10-03T21:04:29+00:00",
     "what_is_not_verified": "טיב ההחלטות שהתקבלו בפגישה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_iran_international",
       "url": "https://www.iranintl.com/en/202610039569",
       "published_at": "2026-10-03T21:04:29+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_iran_international",
       "url": "https://t.me/lelotsenzura/94467",
       "published_at": "2026-10-03T16:32:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10032340-02",
     "title": "גירוש דיפלומטים איראניים מארה\"ב",
     "summary": "ארצות הברית גירשה שני חברים מהמשלחת האיראנית לעצרת הכללית של האו\"ם לאחר שהתעלמו מהדרישה לעזוב את המדינה.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T22:40:05+00:00",
     "last_update_at": "2026-10-03T22:40:05+00:00",
     "what_is_not_verified": "זהותם המלאה של המגורשים מעבר לכך שהיו חברי משלחת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_us_state_department_official",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/state-department-says-iranian-un-delegation-duo-expelled-us",
       "published_at": "2026-10-03T22:40:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10032340-03",
     "title": "העברת מטען נפט גולמי דרך מצר הורמוז על ידי עיראק",
     "summary": "חברת מכליות הנפט של עיראק ביצעה הפעלה של העברת שני מיליון חביות נפט גולמי דרך מצר הורמוז באמצעות מכלית ענק.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T19:49:13+00:00",
     "last_update_at": "2026-10-03T19:49:13+00:00",
     "what_is_not_verified": "האם התנועה נתקלה בהפרעה מצד כוחות איראניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_iraq_s_oil_tankers_company_director_gene",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iraq-says-it-transported-two-million-barrels-crude-through-strait-hormuz",
       "published_at": "2026-10-03T19:49:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10032340-04",
     "title": "הודעת משרד החוץ האיראני על צאת הכוחות האמריקאיים מעיראק",
     "summary": "משרד החוץ של איראן פרסם הודעת ברכה לעם ולממשלת עיראק על יציאת הכוחות האמריקאיים והזרים ממדינה זו.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T21:57:26+00:00",
     "last_update_at": "2026-10-03T22:45:17+00:00",
     "what_is_not_verified": "ההשלכות המלאות של הנסיגה על ביטחון האזור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5e59971f937cf9a7",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-welcomes-exit-us-forces-iraq-calls-washington-be-held-accountable",
       "published_at": "2026-10-03T22:45:17+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_5ebd3e811582c79f",
       "url": "https://en.irna.ir/news/86282237/Iranian-Foreign-Ministry-issues-statement-on-withdrawal-of-US",
       "published_at": "2026-10-03T21:57:26+00:00"
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
     "id": "IRAN-10032340-05",
     "title": "הצהרת נשיא איראן על היערכות כלכלית מול סנקציות",
     "summary": "נשיא איראן מסר כי הממשלה אימצה מערך חדש לניהול תנאי הסנקציות והמצור הימי, במטרה להתמודד עם ניסיונות הפגיעה הכלכלית.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-03T21:01:42+00:00",
     "last_update_at": "2026-10-03T21:01:42+00:00",
     "what_is_not_verified": "הצלחת האמצעים החדשים לבלום את קריסת הכלכלה והמטבע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_8813d2f86e0cf5dd",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-pezeshkian-says-new-measures-place-amid-stricter-sanctions",
       "published_at": "2026-10-03T21:01:42+00:00"
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
     "id": "IRAN-10032340-06",
     "title": "אזהרת בכיר איראני כלפי איחוד האמירויות",
     "summary": "יועץ בכיר למנהיג העליון של איראן הזהיר את איחוד האמירויות מפני עימות עם איראן ומפני ערעור הריבונות על האיים במפרץ הפרסי.",
     "axis": "איראן מול המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T16:00:01+00:00",
     "last_update_at": "2026-10-03T16:53:03+00:00",
     "what_is_not_verified": "התגובה הרשמית של איחוד האמירויות לאזהרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_470ec0e5853f9553",
       "url": "https://en.irna.ir/news/86282122/Velayati-warns-UAE-Half-century-old-state-better-off-not-challenging",
       "published_at": "2026-10-03T16:53:03+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_470ec0e5853f9553",
       "url": "https://www.iranintl.com/en/202610038850",
       "published_at": "2026-10-03T16:00:01+00:00"
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
     "id": "IRAN-10032340-07",
     "title": "הצהרות דונלד טראמפ על מצבה של איראן ותוכנית הגרעין",
     "summary": "נשיא ארצות הברית טען כי איראן מוחלשת וכי היא ויתרה על תוכניותיה לפתח נשק גרעיני, והוסיף כי עומדת בפניו החלטה אם לנהוג בדרך הקלה או הקשה.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-03T21:33:05+00:00",
     "last_update_at": "2026-10-03T22:52:23+00:00",
     "what_is_not_verified": "אמיתות הטענה לפיה איראן ויתרה לחלוטין על שאיפות גרעיניות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/48236",
       "published_at": "2026-10-03T22:52:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-iran-decimated",
       "published_at": "2026-10-03T21:53:46+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://www.maariv.co.il/breaking-news/article-1373256",
       "published_at": "2026-10-03T21:33:05+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "ההחלטה הסופית שצפוי נשיא ארה\"ב טראמפ לקבל לגבי איראן",
    "היקף הנזק המדויק שנגרם לכלכלה האיראנית כתוצאה מהמצור הימי",
    "קיומו או היעדרו של קשר ישיר בין גורמים באיראן לכל ניסיונות הפיגוע באירופה ובאזור"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "גינוי הסנקציות והמצור הימי",
      "דרישה לאחריות מצד ארה\"ב על פעולותיה בעיראק",
      "הזהרת מדינות המפרץ מפני התעמתות עם ריבונותה"
     ],
     "inferred": [
      "שמירה על השפעה אזורית למרות הלחץ הכלכלי והצבאי",
      "ניסיון להציג חזית איתנה מול קריסת המטבע והסנקציות",
      "המשך תמיכה בשלוחים באזור"
     ],
     "forecast": [
      "המרת פעילות לדרכי פעולה עקיפות עקב הלחץ",
      "הגברת האיומים המילוליים כלפי שכנותיה במפרץ",
      "ניסיון לאתר פרצות במצור הכלכלי"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "מניעת נשק גרעיני מאיראן",
      "הפשטת יכולותיה הכלכליות והצבאיות של איראן",
      "הגנה על נתיבי השיט והאינטרסים במפרץ"
     ],
     "inferred": [
      "הכנה לאפשרות של פעולה צבאית נרחבת",
      "הדוק הפיקוח והלחץ הדיפלומטי והכלכלי על טהראן",
      "בניית בריתות אזוריות מול ההשפעה האיראנית"
     ],
     "forecast": [
      "המשך תגבור כוחות צבאיים באזור המפרץ",
      "הדגשת האופציה הצבאית במידה ואיראן לא תיסוג ממדיניותה",
      "הדוק האכיפה של הסנקציות הכלכליות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610038850",
     "accessed_at": "2026-10-03T23:40:33+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86282122/Velayati-warns-UAE-Half-century-old-state-better-off-not-challenging",
     "accessed_at": "2026-10-03T23:40:33+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1373256",
     "accessed_at": "2026-10-03T23:40:33+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-iran-decimated",
     "accessed_at": "2026-10-03T23:40:33+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48236",
     "accessed_at": "2026-10-03T23:40:33+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94467",
     "accessed_at": "2026-10-03T23:40:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-03T05:40:43+00:00",
  "changes": {
   "IRAN-10032340-01": {
    "kind": "possible",
    "prev": "פגישת בכירים אמריקאים בקמפ דייוויד לדיון במלחמה מול איראן",
    "score": 0.467
   },
   "IRAN-10032340-02": {
    "kind": "new"
   },
   "IRAN-10032340-03": {
    "kind": "new"
   },
   "IRAN-10032340-04": {
    "kind": "new"
   },
   "IRAN-10032340-05": {
    "kind": "new"
   },
   "IRAN-10032340-06": {
    "kind": "new"
   },
   "IRAN-10032340-07": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-02T0606__ukraine-202610020606.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-02T06:06:04+00:00",
   "window": {
    "from": "2026-10-01T06:06:04+00:00",
    "to": "2026-10-02T06:06:04+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610020606"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהסלמה בתקיפות הדדיות בעומק העורף, כאשר כוחות רוסיים מכוונים אל תשתיות תחבורה ואזורי מגורים בקייב באמצעות נחילי כטב\"מים, בעוד אוקראינה ממשיכה לפגוע בבתי זיקוק ובמתקני תעשייה בתוך שטח רוסיה. במקביל, המתיחות מול מדינות המערב מחריפה בעקבות איומים גלויים של ההנהגה הרוסית בשימוש בכלל מאגרי הנשק שלה נגד נאט\"ו. מאמצי ההגנה האווירית האוקראינית מיירטים חלק ניכר מן האיומים, אך הפגיעה בתשתיות קריטיות ממשיכה להכביד על שני הצדדים.",
   "fronts": [
    {
     "name": "עורף אוקראינה וקייב",
     "status": "מתקפות מתמשכות של כטב\"מים וטילים רוסיים על גשרים, תשתיות אנרגיה ומבני מגורים"
    },
    {
     "name": "עורף רוסיה (מתקני נפט ואנרגיה)",
     "status": "פגיעות כטב\"מים אוקראיניים בבתי זיקוק, מפעלים כימיים ומאגרי דלק"
    },
    {
     "name": "הזירה המדינית והאסטרטגית מול נאט\"ו והאיחוד האירופי",
     "status": "החרפת איומים גרעיניים והצהרות על מוכנות לעימות רחב היקף"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10020606-01",
     "title": "מתקפת כטב\"מים וטילים רוסית על קייב ופגיעה בגשרים ובבנייני מגורים",
     "summary": "כוחות רוסיים תקפו את קייב בכטב\"מים, פגעו שוב בגשר הדרומי וגרמו נזק למבנה מגורים בן 25 קומות במחוז דרניצקי. בעקבות כך נסגרו גשרים ושונו נתיבי תחבורה.",
     "axis": "מתקפות אוויריות על עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T14:31:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T14:31:03+00:00",
     "last_update_at": "2026-10-02T05:04:11+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק וממדי הנזק המלאים לתשתיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-strike-kills-1-injures-2-in-kyiv-as-southern-bridge-hit-again-overnight/",
       "published_at": "2026-10-02T05:04:11+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170242-russian-attack-in-kyivs-darnytskyi-district-leaves-25story-residential-building-damaged.html",
       "published_at": "2026-10-02T04:59:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056065/",
       "published_at": "2026-10-02T04:17:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056063/",
       "published_at": "2026-10-02T03:22:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1372797",
       "published_at": "2026-10-02T02:53:55+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmn8e8344v5qo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-01T14:31:03+00:00"
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
     "id": "UKRAINE-10020606-02",
     "title": "יירוט נרחב של כטב\"מים רוסיים על ידי ההגנה האווירית האוקראינית",
     "summary": "חיל האוויר האוקראיני דיווח על שיגור של 108 כטב\"מים על ידי רוסיה, כאשר 88 מהם יורטו או שובשו באמצעות לוחמה אלקטרונית ונשק נ\"מ.",
     "axis": "לוחמה אווירית והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T18:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T05:15:00+00:00",
     "last_update_at": "2026-10-02T05:15:00+00:00",
     "what_is_not_verified": "היקף הפגיעות המדויק ב-11 המוקדים שצוינו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056077/",
       "published_at": "2026-10-02T05:15:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריאנסק, רוסיה",
       "lat": 53.2789,
       "lon": 34.3659
      },
      {
       "name": "פרימורסקו-אחטרסק, רוסיה",
       "lat": 46.0491,
       "lon": 38.1712
      }
     ]
    },
    {
     "id": "UKRAINE-10020606-03",
     "title": "תקיפות כטב\"מים אוקראיניות על מתקני נפט ותעשייה ברוסיה",
     "summary": "פיצוצים ושריפות נרשמו באזור בית הזיקוק ומפעל כימי בוולגוגרד, לצד דיווחים על פגיעה במתקני נפט באזור סמארה ובמטרות נוספות.",
     "axis": "פגיעה בתשתיות אנרגיה בעורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T12:09:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T12:09:34+00:00",
     "last_update_at": "2026-10-02T04:38:00+00:00",
     "what_is_not_verified": "היקף הנזק הממשי למתקני התעשייה ומהות המוקדים שעלו באש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056068/",
       "published_at": "2026-10-02T04:38:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-reportedly-strike-oil-facilities-in-russias-volgograd-samara-regions/",
       "published_at": "2026-10-02T04:33:17+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48190",
       "published_at": "2026-10-02T02:55:28+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/01/ukraine-russian-oil-refinery-strikes-defying-trump-fuel-price-warnings",
       "published_at": "2026-10-01T12:09:34+00:00"
      }
     ],
     "places": [
      {
       "name": "וולגוגרד, רוסיה",
       "lat": 48.7082,
       "lon": 44.5153
      },
      {
       "name": "סמארה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    },
    {
     "id": "UKRAINE-10020606-04",
     "title": "פוטין מאיים בשימוש בכל אמצעי הלחימה שברשות רוסיה",
     "summary": "נשיא רוסיה הצהיר כי ארצו תגיב בכל הנשק שברשותה במקרה של תקיפה מצד נאט\"ו, ודחה אפשרות להפסקת פגיעה בספינות תמורת הפסקת תקיפת בתי הזיקוק.",
     "axis": "העימות המדיני-אסטרטגי מול המערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T16:38:32+00:00",
     "last_update_at": "2026-10-01T23:46:17+00:00",
     "what_is_not_verified": "נכונות הטענות בדבר הסכמות קודמות להפסקת פגיעה במתקני אנרגיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/putin-vows-russia-will-respond-with-all-weapons-at-our-disposal-if-attacked-by-nato/",
       "published_at": "2026-10-01T23:46:17+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/01/by-putin-s-own-estimate-ukrainian-strikes-on-russian-refineries-have-cost-russia-1-of-gdp-but-he-says-stopping-them-isn-t-worth-halting-attacks-on-ukrainian-vessels",
       "published_at": "2026-10-01T19:42:03+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/01/europe-latest-news-updates-russia-strikes-ukraine-nato",
       "published_at": "2026-10-01T16:38:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10020606-05",
     "title": "הערכות אוקראיניות על אבדות הצבא הרוסי",
     "summary": "המטה הכללי של צבא אוקראינה דיווח כי צבא רוסיה איבד 1,520 חיילים ביממה האחרונה, לצד עשרות מערכות ארטילריה וכלים משוריינים.",
     "axis": "שחיקת כוחות בחזית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T03:49:00+00:00",
     "last_update_at": "2026-10-02T05:17:00+00:00",
     "what_is_not_verified": "אימות עצמאי של נתוני הנפגעים והאבדות הרוסיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170247-russian-army-loses-1520-troops-in-war-against-ukraine-over-past-day.html",
       "published_at": "2026-10-02T05:17:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056064/",
       "published_at": "2026-10-02T03:49:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות רוסיות על עייפות הציבור האוקראיני מהשלטון הנוכחי",
    "מספר האבדות המדויק של כוחות הצבא הרוסי",
    "הדיווחים של בלומברג על דחיית בקשת סיוע של 27 מיליארד אירו מצד האיחוד האירופי",
    "מידת המעורבות של גורמים זרים בפריצות לבתיהם של חברי פרלמנט בפינלנד",
    "נכונות הדיווח בדבר הסכמה לעצירת תקיפות הדדיות על מתקני אנרגיה"
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
     "value": 1.1298,
     "unit": "USD",
     "change_pct": -0.5,
     "source_id": "src_ecb",
     "as_of": "2026-10-01T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "תגובה בכל אמצעי הלחימה העומדים לרשותה במקרה של תקיפה מצד נאט\"ו",
      "המשך פגיעה במטרות כלכליות וספינות אוקראיניות בתגובה לתקיפת בתי הזיקוק"
     ],
     "inferred": [
      "שיבוש התחבורה והתשתיות האזרחיות בקייב לשם הפעלת לחץ פסיכולוגי ומוראלי",
      "הרחקת נאט\"ו ממעורבות ישירה באמצעות הרתעה ואיומים בשימוש בנשק לא קונבנציונלי"
     ],
     "forecast": [
      "המשך התקיפות האוויריות על תשתיות מפתח אוקראיניות לקראת תקופות קור",
      "החרפת הרטוריקה התקיפה מול מדינות הגבול של נאט\"ו"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "המשך הפגיעה בבתי זיקוק ובמתקנים כלכליים של רוסיה",
      "הטלת סנקציות נוספות על אוליגרכים רוסים"
     ],
     "inferred": [
      "שחיקת היכולת הכלכלית של רוסיה לממן את המלחמה ופגיעה באספקת הדלק הצבאית",
      "הפגנת עצמאות מבצעית חרף לחצים בין-לאומיים לצמצום הפגיעה במתקני אנרגיה"
     ],
     "forecast": [
      "הגברת מאמצי השיגור של כטב\"מים ארוכי טווח אל תוך מחוזות עמוקים ברוסיה",
      "המשך לחץ לקבלת מערכות הגנה אווירית נוספות משותפותיה באירופה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmn8e8344v5qo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/01/europe-latest-news-updates-russia-strikes-ukraine-nato",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/putin-vows-russia-will-respond-with-all-weapons-at-our-disposal-if-attacked-by-nato/",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1372797",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/01/by-putin-s-own-estimate-ukrainian-strikes-on-russian-refineries-have-cost-russia-1-of-gdp-but-he-says-stopping-them-isn-t-worth-halting-attacks-on-ukrainian-vessels",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056064/",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48190",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4170247-russian-army-loses-1520-troops-in-war-against-ukraine-over-past-day.html",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-30T23:40:39+00:00",
  "changes": {
   "UKRAINE-10020606-01": {
    "kind": "possible",
    "prev": "פציעת איש חילוץ בקייב",
    "score": 0.633
   },
   "UKRAINE-10020606-02": {
    "kind": "new"
   },
   "UKRAINE-10020606-03": {
    "kind": "new"
   },
   "UKRAINE-10020606-04": {
    "kind": "possible",
    "prev": "שימוש ברחפן חיתוך פלגה על ידי רוסיה",
    "score": 0.467
   },
   "UKRAINE-10020606-05": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-02T1646__north-202610021646.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-02T16:46:03+00:00",
   "window": {
    "from": "2026-10-01T16:46:03+00:00",
    "to": "2026-10-02T16:46:03+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610021646"
   },
   "summary": "הגזרה הצפונית מתאפיינת במתיחות ביטחונית מתמשכת בדרום לבנון ובדרום סוריה מול כוחות צה\"ל, לצד מאמצים דיפלומטיים לבנוניים לגיבוש מנגנון נסיגה ופיקוח. בסוריה נמשכת אי-יציבות פנימית עם התנקשויות ומפגני כוח חמושים בדמשק ובדרום המדינה, במקביל להידוק שיתוף הפעולה האזרחי מצד טורקיה. שלטונות לבנון פועלים מול ארצות הברית והמוסדות הבינלאומיים לשיקום אזורי ההרס ולביסוס סמכות המדינה בדרום.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות צבאית ישראלית נקודתית לצד חיכוך סביב תנועת תושבים ומאמצי שיקום של הממשלה"
    },
    {
     "name": "דרום סוריה (דרעא וסווידא)",
     "status": "תקריות ירי, מתיחות ביטחונית מקומית ופשיטות של צה\"ל"
    },
    {
     "name": "דמשק והמרכז הסורי",
     "status": "נוכחות כלי טיס ישראליים, פעילות ארגונים חמושים והתרחבות השפעה טורקית"
    }
   ],
   "events": [
    {
     "id": "NORTH-10021646-01",
     "title": "דיווח על כלי טיס בלתי מאוישים ישראליים בשמי דמשק",
     "summary": "מקורות בסוריה דיווחו על הימצאותם של חמישה כלי טיס ישראליים ללא טייס מדגם הרמס מעל הבירה דמשק.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T16:07:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T16:07:58+00:00",
     "last_update_at": "2026-10-02T16:07:58+00:00",
     "what_is_not_verified": "לא נמסר אישור רשמי של צה\"ל או גורם ישראלי אחר אודות גיחות כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48210",
       "published_at": "2026-10-02T16:07:58+00:00"
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
     "id": "NORTH-10021646-02",
     "title": "פשיטה צבאית ישראלית ומעצר תושבים בדרום סוריה",
     "summary": "כוחות ישראליים ביצעו פשיטה לתוך כפר בדרום סוריה ועצרו שני תושבים מקומיים, לצד טענה סורית על מאות פשיטות ישראליות מאז סוף שנת 2024.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T11:59:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T11:59:46+00:00",
     "last_update_at": "2026-10-02T11:59:46+00:00",
     "what_is_not_verified": "שמות הכפר, העצורים והיקף הפשיטות המדויק אינם מאומתים במלואם מעבר להצהרת הצד הסורי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-detain-2-syrians-during-incursion-into-southern-syrian-village/4076107",
       "published_at": "2026-10-02T11:59:46+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סוריה",
       "lat": 35.9664,
       "lon": 40.8012
      }
     ]
    },
    {
     "id": "NORTH-10021646-03",
     "title": "פעילות צבאית ישראלית וירי בדרום לבנון",
     "summary": "טנק של צה\"ל ביצע ירי פגזים לעבר העיירה ביוט א-סיאד, ובמקביל דווח על פעולת הריסה שביצעו כוחות ישראליים בעיירה בית ליף בדרום המדינה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T10:53:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T10:53:00+00:00",
     "last_update_at": "2026-10-02T11:35:00+00:00",
     "what_is_not_verified": "אין פירוט על נפגעים או על היקף ההרס המדויק במבנים שנהרסו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_1d22afaf1e6de9b0",
       "url": "https://english.almanar.com.lb/article/133547/",
       "published_at": "2026-10-02T11:35:00+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_2503b9bbfa8e4a89",
       "url": "https://english.almanar.com.lb/article/133522/",
       "published_at": "2026-10-02T10:53:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בית ליף, לבנון",
       "lat": 33.1321,
       "lon": 35.334
      }
     ]
    },
    {
     "id": "NORTH-10021646-04",
     "title": "כניסת אזרחים לכפר נבטיה אל-פוקא חרף אזהרות צה\"ל",
     "summary": "ראש עיריית נבטיה אל-פוקא נכנס יחד עם תושבים מקומיים לשטח הכפר למרות אזהרות ישראליות, תוך ניצול היעדר תקיפות אוויריות בזמן ביקור ראש ממשלת לבנון בעיר.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T09:30:47+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T09:30:47+00:00",
     "last_update_at": "2026-10-02T09:30:47+00:00",
     "what_is_not_verified": "לא פורסמו פרטים רשמיים על משך השהייה של התושבים או על תגובה ישירה בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131199",
       "published_at": "2026-10-02T09:30:47+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      }
     ]
    },
    {
     "id": "NORTH-10021646-05",
     "title": "ביקור ראש ממשלת לבנון בדרום המדינה ודרישה להסדר נסיגה",
     "summary": "ראש הממשלה נואף סלאם סייר באזור נבטיה, הניח אבן פינה למטה הגנה אזרחית, הציג מכרזים לשיקום תשתיות, ובמקביל קידם שיחות מול ארצות הברית בנוגע לקביעת לוח זמנים לנסיגה ישראלית ומנגנון פיקוח הדדי.",
     "axis": "לבנון - זירה פנימית ובינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T04:09:10+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T04:09:10+00:00",
     "last_update_at": "2026-10-02T12:44:12+00:00",
     "what_is_not_verified": "טרם סוכמו זהות הגוף המפקח והתנאים הסופיים להסכם מול קרן המטבע והבנק העולמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960931/aoun-salam-discuss-washington-talks-nabatieh-visit-and-cabinet-measure/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960931",
       "published_at": "2026-10-02T12:44:12+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960913/salam-seeks-withdrawal-timeline-and-new-un-force-as-rubio-tackles-veri/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960913",
       "published_at": "2026-10-02T11:16:53+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-s-prime-minister-calls-for-full-israeli-withdrawal-one-army/4075905",
       "published_at": "2026-10-02T09:16:42+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-pm-says-scale-war-recovery-beyond-states-capacity",
       "published_at": "2026-10-02T09:15:04+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960825/pm-salam-visits-nabatieh-let-us-all-rally-under-the-banner-of-our-stat/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960825",
       "published_at": "2026-10-02T04:09:10+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10021646-06",
     "title": "פתיחת מוסד חינוך טורקי בבירת סוריה",
     "summary": "טורקיה הודיעה על פתיחת בית ספר על שמו של ארדואן בדמשק, בעל קיבולת של כאלף תלמידים, כחלק מהרחבת שיתוף הפעולה בין אנקרה לדמשק.",
     "axis": "טורקיה - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T12:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T12:33:00+00:00",
     "last_update_at": "2026-10-02T12:33:00+00:00",
     "what_is_not_verified": "לא פורטו ההסכמים הרחבים המלאים שגובשו בין משרדי החינוך של שתי המדינות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/turkish-school-named-after-erdogan-to-open-in-syrias-damascus/news",
       "published_at": "2026-10-02T12:33:00+00:00"
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
     "id": "NORTH-10021646-07",
     "title": "תקריות ירי ופגיעה בקצין צבא בדרום סוריה",
     "summary": "חמושים לא מזוהים ירו ופצעו קשה קצין במשרד ההגנה הסורי בעיר א-סנמין שבמחוז דרעא, ובמקביל חמושים פתחו באש לעבר עמדות ביטחון ובתים באזור מזרעה במחוז סווידא.",
     "axis": "סוריה - זירה פנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T17:46:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T17:46:41+00:00",
     "last_update_at": "2026-10-02T13:45:33+00:00",
     "what_is_not_verified": "זהות המבצעים באזור סווידא לא אומתה, ומעורבותו של מפקד מקומי בא-סנמין נותרה בגדר האשמות מקומיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_9acd1d6db00421ca",
       "url": "https://www.aa.com.tr/en/middle-east/gunmen-open-fire-on-security-posts-homes-in-southern-syria/4076245",
       "published_at": "2026-10-02T13:45:33+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_9acd1d6db00421ca",
       "url": "https://english.enabbaladi.net/archives/2026/10/gunmen-target-syrian-army-officer-in-daraa/",
       "published_at": "2026-10-01T17:46:41+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סנמין, סוריה",
       "lat": 33.0732,
       "lon": 36.1834
      },
      {
       "name": "סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10021646-08",
     "title": "מצעד חמושים אסלאמיסטים בשכונת אל-מידאן בדמשק",
     "summary": "חמושים סונים במדים צבאיים קיימו תהלוכת מפגן כוח ברחובות שכונת אל-מידאן בדמשק תוך נשיאת סרטי שהאדה ודגלים שונים.",
     "axis": "סוריה - זירה פנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T20:42:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T20:42:23+00:00",
     "last_update_at": "2026-10-01T20:42:23+00:00",
     "what_is_not_verified": "השיוך הארגוני הרשמי של החמושים ומידת השפעתם על גורמי השלטון המרכזי בעיר אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48183",
       "published_at": "2026-10-01T20:42:23+00:00"
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
    "מספר הפשיטות הישראליות הכולל בסוריה מאז סוף 2024",
    "זהות מבצעי הירי במחוז סווידא ומבצעי ההתנקשות בא-סנמין",
    "אישור ישראלי בדבר גיחות כלי הטיס מעל דמשק",
    "פרטי מנגנון הפיקוח וההסדרים הסופיים עם קרן המטבע בלבנון"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "השגת נסיגה ישראלית מלאה מדרום לבנון וקביעת לוח זמנים מוגדר",
      "פריסת סמכות המדינה וצבא יחיד על כלל שטח המדינה",
      "גיוס סיוע כספי בינלאומי לשיקום אזורי הדרום ההרוסים"
     ],
     "inferred": [
      "מניעת חידוש העימות הצבאי הכולל תוך דחיקת חופש הפעולה של חיזבאללה",
      "חיזוק הלגיטימציה של מוסדות המדינה מול הציבור המקומי"
     ],
     "forecast": [
      "המשך הסתמכות על תיווך אמריקאי לקביעת מנגנוני פיקוח על הגבול",
      "התקדמות איטית בשיקום האזרחי בשל תלות בהסכמי מימון בינלאומיים"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הרחבת שיתוף הפעולה האזרחי והחינוכי עם המשטר בדמשק"
     ],
     "inferred": [
      "ביסוס השפעה רכה ומעמד מדיני בתוך הבירה הסורית"
     ],
     "forecast": [
      "המשך פיתוח מיזמים אזרחיים ודיפלומטיים בסוריה לצורך העמקת האחיזה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על יישובי הצפון ומניעת התבססות איומים מעבר לגבול"
     ],
     "inferred": [
      "שימור חופש פעולה מודיעיני ומבצעי בשמי סוריה ובדרום לבנון",
      "אכיפת הגבלות תנועה ופירוק תשתיות חשודות במרחב הגבול"
     ],
     "forecast": [
      "המשך פעולות מנע נקודתיות וסיכולים במידה ותזוהה התקרבות לגבול"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/133522/",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/gunmen-open-fire-on-security-posts-homes-in-southern-syria/4076245",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/turkish-school-named-after-erdogan-to-open-in-syrias-damascus/news",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/gunmen-target-syrian-army-officer-in-daraa/",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960825/pm-salam-visits-nabatieh-let-us-all-rally-under-the-banner-of-our-stat/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960825",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-pm-says-scale-war-recovery-beyond-states-capacity",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131199",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48183",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-01T23:57:59+00:00",
  "changes": {
   "NORTH-10021646-01": {
    "kind": "new"
   },
   "NORTH-10021646-02": {
    "kind": "new"
   },
   "NORTH-10021646-03": {
    "kind": "new"
   },
   "NORTH-10021646-04": {
    "kind": "new"
   },
   "NORTH-10021646-05": {
    "kind": "new"
   },
   "NORTH-10021646-06": {
    "kind": "new"
   },
   "NORTH-10021646-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפה ופציעת קצין בצבא סוריה",
    "score": 1.0
   },
   "NORTH-10021646-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מפגן כוח של חמושים בדמשק",
    "score": 1.0
   }
  }
 }
};
