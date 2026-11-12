/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-12T1859__yemen-202611121859.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-12T18:59:42+00:00",
   "window": {
    "from": "2026-11-11T18:59:42+00:00",
    "to": "2026-11-12T18:59:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611121859"
   },
   "summary": "הזירה בתימן כוללת המשך עימותים קרקעיים מול החות'ים לצד תקיפות בלתי פוסקות מצידם לעבר תשתיות נפט וערים בסעודיה. במקביל, סעודיה פועלת בזירה הדיפלומטית הבינלאומית להגדרת החות'ים כארגון טרור, בעוד הקואליציה ממשיכה ביירוט איומים אוויריים.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית",
     "status": "פעיל עם עימותים צבאיים וקרבות קרקעיים"
    },
    {
     "name": "החזית הסעודית-חות'ית",
     "status": "פעיל עם שיגורי טילים וכטב\"מים מתמשכים ויירוטים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11121859-01",
     "title": "תקיפת מתקני נפט בסעודיה על ידי החות'ים",
     "summary": "החות'ים טענו שתקפו את צינור הנפט המזרחי-מערבי ומתקן נפט בינבוע, ואילו הקואליציה בראשות סעודיה דיווחה על יירוט טילים וכטב\"מים לעבר יעדים במדינה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T17:35:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T17:35:54+00:00",
     "last_update_at": "2026-11-12T18:14:10+00:00",
     "what_is_not_verified": "האם התקיפות בפועל פגעו במתקני הנפט בסעודיה והאמת לגבי יעדי הטילים המוצהרים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-says-no-need-iran-deal-four-tankers-hit-hormuz",
       "published_at": "2026-11-12T18:14:10+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-attacked-pumping-station-saudi-arabias-east-west",
       "published_at": "2026-11-12T17:33:04+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-deny-targeting-mecca-amid-saudi-missile-interceptions",
       "published_at": "2026-11-12T13:06:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-downplays-iran-deal-prospects-israel-kills-10-gaza",
       "published_at": "2026-11-12T07:22:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/ghalibaf-says-iran-seeks-deal-after-rubio-downplays-war",
       "published_at": "2026-11-11T17:35:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11121859-02",
     "title": "לחימה ועימותים באזור מאריב ותעז",
     "summary": "התקיימו עימותים וקרבות שונים שכללו פעילות צבאית באזור מאריב וכן פגזים ופעולות באזור תעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T15:09:01+00:00",
     "last_update_at": "2026-11-12T15:55:10+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155701",
       "published_at": "2026-11-12T15:55:10+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49527",
       "published_at": "2026-11-12T15:38:44+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155696",
       "published_at": "2026-11-12T15:09:01+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11121859-03",
     "title": "לחץ דיפלומטי סעודי לסיווג החות'ים כארגון טרור",
     "summary": "סעודיה מפעילה לחץ על האיחוד האירופי להגדיר את תנועת החות'ים כארגון טרור, סוגיה שמעוררת חשש פאן-אירופי לגבי תהליך השלום העתידי.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T16:47:36+00:00",
     "last_update_at": "2026-11-12T16:47:36+00:00",
     "what_is_not_verified": "האם האיחוד האירופי ייענה לבקשת סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-puts-pressure-eu-label-yemens-houthis-terrorist-group",
       "published_at": "2026-11-12T16:47:36+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענות ההדדיות על פגיעה במתקני אנרגיה סעודיים כמו מתקן ינבוע או צינור הנפט",
    "האם החות'ים כוונו לאזור מכה או שברי טילים שנפלו שם הגיעו מיירוטים",
    "נתוני הנפגעים והתוצאות המדויקות של העימותים בתעז ובמאריב"
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
     "value": 3.2032,
     "unit": "ILS",
     "change_pct": 1.0,
     "source_id": "src_ecb",
     "as_of": "2026-11-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת תשתיות הנפט והמתקנים הצבאיים של סעודיה"
     ],
     "inferred": [
      "שיבוש הכלכלה וייצוא הנפט של סעודיה",
      "הפעלת לחץ אזורי באמצעות פגיעה בעומק סעודיה"
     ],
     "forecast": [
      "המשך שיגור איומים אוויריים לעבר סעודיה",
      "שמירה על נוכחות צבאית אקטיבית בחזיתות הפנימיות בתימן"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטחי הממלכה ויירוט איומים אוויריים",
      "דחיפה בינלאומית להגדרת החות'ים כארגון טרור"
     ],
     "inferred": [
      "בלימת הפעילות הצבאית של החות'ים והגנה על מתקני האנרגיה החיוניים"
     ],
     "forecast": [
      "המשך התקיפות האוויריות נגד מעוזי החות'ים",
      "הגברת המאמצים הדיפלומטיים לבידוד החות'ים בזירה העולמית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-puts-pressure-eu-label-yemens-houthis-terrorist-group",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-attacked-pumping-station-saudi-arabias-east-west",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/ghalibaf-says-iran-seeks-deal-after-rubio-downplays-war",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155696",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49527",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:50:52+00:00",
  "changes": {
   "YEMEN-11121859-01": {
    "kind": "possible",
    "prev": "שיגור טילי שיוט, טילים בליסטיים וכטב\"מים לעבר סעודיה ויירוטם",
    "score": 0.633
   },
   "YEMEN-11121859-02": {
    "kind": "possible",
    "prev": "דיון בהסלמה הצבאית ובמצור על תעז",
    "score": 0.633
   },
   "YEMEN-11121859-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דרישה תימנית להגדרת החות'ים כארגון טרור בליגה הערבית",
    "score": 0.65
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-12T0040__iran-202611120040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-12T00:40:37+00:00",
   "window": {
    "from": "2026-11-11T00:40:37+00:00",
    "to": "2026-11-12T00:40:37+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611120040"
   },
   "summary": "המתיחות בין ישראל וארצות הברית לבין איראן נמשכת ברקע מצור כלכלי-ימי ואיומים הדדיים בהסלמה צבאית. ישראל מגבירה מוכנות למתקפה אפשרית, בעוד בכירים בטהראן מאיימים בתקיפת בסיסים מערביים וסגירת מצר הורמוז אם תחודש הלחימה. במקביל מתקיימים גישושים והעברת תנאים למשא ומתן להפסקת העימות, לצד סנקציות ולחץ כלכלי מתמשך.",
   "fronts": [
    {
     "name": "חזית ישראל-איראן",
     "status": "כוננות והיערכות מוגברת לתקיפות צבאיות הדדיות"
    },
    {
     "name": "חזית ארה\"ב-איראן (מצר הורמוז והמפרץ)",
     "status": "אכיפת מצור ימי וסנקציות לצד מגעים מדיניים וחילופי איומים"
    },
    {
     "name": "חזית תוכנית הגרעין האיראנית",
     "status": "עמידה איראנית על שימור החומר המועשר וסירוב להוצאתו"
    }
   ],
   "events": [
    {
     "id": "IRAN-11120040-01",
     "title": "הנחיה לצה\"ל להגביר היערכות לאפשרות תקיפה באיראן",
     "summary": "הקבינט הביטחוני הורה לצבא להגביר את המוכנות לתקיפה אפשרית באיראן, בעוד טהראן מזהירה מתגובה נרחבת אם תותקף.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T21:48:29+00:00",
     "last_update_at": "2026-11-12T00:00:44+00:00",
     "what_is_not_verified": "אין אימות עצמאי להחלטת הקבינט שכן הדיווחים נשענים על דיווחים בתקשורת הישראלית ללא הודעה רשמית שצורפה במלואה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/12/iran-war-live-tehran-warns-of-wider-retaliation-israel-kills-in-gaza?traffic_source=rss",
       "published_at": "2026-11-12T00:00:44+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/netanyahu-orders-israeli-army-prepare-possible-attack-iran",
       "published_at": "2026-11-11T21:48:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-02",
     "title": "דובר משרד החוץ האיראני מאשים את ארצות הברית בהפצת מידע כוזב",
     "summary": "אסמאעיל בקאעי טען כי וושינגטון מנהלת קמפיין כוזב כדי להציג את עצמה כקורבן טרור, וייחס לה פעולות תוקפנות והתנקשות בבכירים ומדענים איראנים.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T23:24:17+00:00",
     "last_update_at": "2026-11-11T23:24:17+00:00",
     "what_is_not_verified": "האשמות איראן בנוגע לפעולות המיוחסות לארה\"ב ולישראל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_52a519fa935b5af3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-accuses-us-spreading-disinformation-about-iranian-terrorism",
       "published_at": "2026-11-11T23:24:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-03",
     "title": "אזהרת בכיר הביטחון האיראני מוחסן רזאי מפני תקיפת בסיסים מערביים",
     "summary": "מוחסן רזאי איים כי אם ארצות הברית תפתח במלחמה מחדש נגד איראן, כל בסיס צבאי שייקח חלק בתקיפה, מאסיה ועד אירופה, יהווה מטרה לתקיפות קטלניות.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T22:13:51+00:00",
     "last_update_at": "2026-11-11T22:35:57+00:00",
     "what_is_not_verified": "כוונות הפעולה המעשיות והיכולת לפגוע בבסיסים באירופה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c19bda78001159c0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-security-chief-warns-western-bases-will-be-targets-retaliation",
       "published_at": "2026-11-11T22:35:57+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_c19bda78001159c0",
       "url": "https://www.maariv.co.il/breaking-news/article-1387564",
       "published_at": "2026-11-11T22:13:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-04",
     "title": "דיווחים על בחינת שיחות ישירות בין ואנס לרזאי",
     "summary": "גורמים מדווחים כי טראמפ הסמיך את סגנו ואנס לנהל משא ומתן מול איראן, ונבחנת פגישה בדוחא עם מוחסן רזאי, על רקע מחלוקות ודרישות איראניות להסרת מצור.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T20:50:25+00:00",
     "last_update_at": "2026-11-11T22:54:49+00:00",
     "what_is_not_verified": "קיומה של פגישה מתוכננת לא אומת, ובפרט כאשר רזאי מכחיש כל משא ומתן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/symstlfcze",
       "published_at": "2026-11-11T22:54:49+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21834887",
       "published_at": "2026-11-11T20:50:25+00:00"
      }
     ],
     "places": [
      {
       "name": "דוחא, קטאר",
       "lat": 25.2856,
       "lon": 51.5264
      }
     ]
    },
    {
     "id": "IRAN-11120040-05",
     "title": "הצהרת יו\"ר הפרלמנט האיראני קאליבאף על תנאי המשא ומתן ומצר הורמוז",
     "summary": "מוחמד באקר קאליבאף ציין כי מצר הורמוז לא ישוב למצבו שלפני המלחמה, וכי טהראן הגישה לארה\"ב שבעה תנאים וממתינה לתשובתה הרשמית.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T20:36:48+00:00",
     "last_update_at": "2026-11-11T21:03:40+00:00",
     "what_is_not_verified": "תוכן שבעת התנאים המלאים והאם הועברו בערוץ רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/11/strait-of-hormuz-will-never-return-to-pre-war-status-ghalibaf?traffic_source=rss",
       "published_at": "2026-11-11T21:03:40+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86319535/Ghalibaf-Ball-in-US-court-Iran-determined-to-end-state-of-no",
       "published_at": "2026-11-11T20:36:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-06",
     "title": "פיקוד מרכז של צבא ארה\"ב מדווח על אכיפת המצור הימי על איראן",
     "summary": "לפי פיקוד מרכז האמריקאי, מאז יולי הוסטו 150 כלי שיט שניסו להפר את המצור על איראן, נמנע ייצוא נפט איראני בהיקף נרחב, ואולצו מעברים מאובטחים במצר הורמוז.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T19:20:44+00:00",
     "last_update_at": "2026-11-11T19:20:44+00:00",
     "what_is_not_verified": "נתוני יירוט הספינות והיקפי הנפט המדויקים מבוססים על הודעת הצבא האמריקני בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133505",
       "published_at": "2026-11-11T19:20:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-07",
     "title": "נשיא איראן דורש פיצויים בינלאומיים בגין נזקי תקיפות ארה\"ב וישראל",
     "summary": "בוועידת האקלים באנטליה דרש מסעוד פזשכיאן לקבוע מנגנון שיחייב פיצויים על נזקים סביבתיים שנגרמו בשל התקיפות האמריקניות והישראליות באיראן.",
     "axis": "ישראל-ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:28:14+00:00",
     "last_update_at": "2026-11-11T17:47:51+00:00",
     "what_is_not_verified": "היקף הנזק הסביבתי הנטען.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-tells-cop31-it-wants-compensation-environmental-damage-us-israeli-strikes",
       "published_at": "2026-11-11T17:47:51+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86319460/President-Pezeshkian-urges-global-accountability-over-environmental",
       "published_at": "2026-11-11T17:28:14+00:00"
      }
     ],
     "places": [
      {
       "name": "אנטליה, טורקיה",
       "lat": 36.8866,
       "lon": 30.703
      }
     ]
    },
    {
     "id": "IRAN-11120040-08",
     "title": "סירוב איראני להוצאת חומר מועשר משטחה",
     "summary": "… שהיא מסרבת להוציא חומר מועשר מתחומיה ושכל החומר יישאר בשליטתה.",
     "axis": "איראן-גרעין",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T15:59:55+00:00",
     "last_update_at": "2026-11-11T15:59:55+00:00",
     "what_is_not_verified": "לא פורסמה הודעה רשמית ישירה של המועצה העליונה בטקסט מעבר לציטוט בטלגרם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95014",
       "published_at": "2026-11-11T15:59:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-09",
     "title": "מעבר שר האוצר האמריקני לבסיס צבאי בשל איומים איראניים",
     "summary": "שר האוצר של ארה\"ב סקוט בסנט עבר להתגורר בבסיס צבאי עקב התרעות מודיעיניות על כוונות איראניות לפגוע בחייו.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T09:11:30+00:00",
     "last_update_at": "2026-11-11T15:06:01+00:00",
     "what_is_not_verified": "פרטי המזימה המודיעינית המדויקת להתנקשות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133488",
       "published_at": "2026-11-11T15:06:01+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/nov/11/us-treasury-chief-scott-bessent-moves-military-base-iran-threats",
       "published_at": "2026-11-11T09:11:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11120040-10",
     "title": "ביטול חוזה גז של חברה פולנית עם קטאר עקב התקיפות האיראניות",
     "summary": "חברת האנרגיה הפולנית ביטלה חוזה אספקת גז נוזלי ארוך טווח עם קטאר עקב שיבושים ביצוא שנגרמו מתקיפות איראניות במפרץ.",
     "axis": "מפרץ-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T14:28:46+00:00",
     "last_update_at": "2026-11-11T14:28:46+00:00",
     "what_is_not_verified": "מידת הפגיעה המדויקת בתשתיות הגז הקטאריות שהובילה לביטול.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49496",
       "published_at": "2026-11-11T14:28:46+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "בחינת פגישה ישירה בין ג'יי די ואנס למוחסן רזאי בדוחא",
    "טענות על שימוש בגורמים על-טבעיים לאיתור בכירים",
    "פרטי תוכניות ההתנקשות בשר האוצר האמריקני ובכירים נוספים",
    "היקף הנזק הסביבתי של תקיפות צבאיות באיראן"
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
     "value": 3.1716,
     "unit": "ILS",
     "change_pct": 0.17,
     "source_id": "src_ecb",
     "as_of": "2026-11-11T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הסרת המצור הכלכלי ושחרור נכסים כתנאי לשיחות",
      "סירוב להוצאת חומר גרעיני מועשר משטחה",
      "פגיעה בכל בסיס צבאי שישמש לתקיפה נגדה"
     ],
     "inferred": [
      "שימור יכולות הגרעין וההרתעה הצבאית",
      "מניעת חידוש מתקפה ישראלית-אמריקנית רחבה",
      "שיקום הכלכלה באמצעות פתיחת נתיבי מסחר"
     ],
     "forecast": [
      "המשך איומים על השיט במצר הורמוז לצד העברת דרישות להסדר",
      "התבצרות בעמדות בנושא הגרעין למרות לחצי הסנקציות"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "היערכות צבאית לאפשרות של תקיפה באיראן",
      "מניעת השגת נשק גרעיני בידי המשטר האיראני"
     ],
     "inferred": [
      "דחיפה לסיכול תוכנית הגרעין לפני הגעה להסדר דיפלומטי",
      "הפעלת לחץ מרבי על הממשל האמריקאי לתמיכה בפעולה צבאית"
     ],
     "forecast": [
      "המשך אימונים והיערכות מבצעית לקראת החלטות מדיניות",
      "התנגדות עזה להסכמים דיפלומטיים שאינם כוללים פירוק מלא"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "חניקת הכלכלה האיראנית באמצעות סנקציות ומצור ימי",
      "מניעת נשק גרעיני מאיראן לצד בחינת אפיקים דיפלומטיים"
     ],
     "inferred": [
      "השגת הסכם בתנאים אמריקניים תוך הימנעות מהרחבת המלחמה",
      "אבטחת נתיבי השיט והנפט במפרץ תוך בידוד טהראן"
     ],
     "forecast": [
      "המשך אכיפת המצור הימי והסנקציות הכלכליות",
      "בחינת ערוצי משא ומתן עקיפים או ישירים להסדרת המצב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/11/strait-of-hormuz-will-never-return-to-pre-war-status-ghalibaf?traffic_source=rss",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/iran-tells-cop31-it-wants-compensation-environmental-damage-us-israeli-strikes",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/nov/11/us-treasury-chief-scott-bessent-moves-military-base-iran-threats",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86319460/President-Pezeshkian-urges-global-accountability-over-environmental",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21834887",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1387564",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-security-chief-warns-western-bases-will-be-targets-retaliation",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133488",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49496",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95014",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/symstlfcze",
     "accessed_at": "2026-11-12T00:40:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-11T00:40:26+00:00",
  "changes": {
   "IRAN-11120040-01": {
    "kind": "new"
   },
   "IRAN-11120040-02": {
    "kind": "new"
   },
   "IRAN-11120040-03": {
    "kind": "new"
   },
   "IRAN-11120040-04": {
    "kind": "new"
   },
   "IRAN-11120040-05": {
    "kind": "new"
   },
   "IRAN-11120040-06": {
    "kind": "new"
   },
   "IRAN-11120040-07": {
    "kind": "new"
   },
   "IRAN-11120040-08": {
    "kind": "new"
   },
   "IRAN-11120040-09": {
    "kind": "new"
   },
   "IRAN-11120040-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-12T0044__ukraine-202611120044.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-12T00:44:50+00:00",
   "window": {
    "from": "2026-11-11T00:44:50+00:00",
    "to": "2026-11-12T00:44:50+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611120044"
   },
   "summary": "העימות בין אוקראינה לרוסיה ממשיך להתאפיין בלחימה בעצימות גבוהה ובמהלומות ארוכות טווח נגד תשתיות עורפיות של שני הצדדים. במקביל לתקיפות טילים וכטב\"מים על קייב, אודסה ומתקני נפט בעומק רוסיה, נערכו שיחות משולשות בהשתתפות ארצות הברית שהניבו הסכם על חילופי שבויים. עם זאת, המחלוקות הטריטוריאליות והמבוי הסתום בנושאי ביטחון כולל מותירים את השגת הפסקת האש ללא פריצת דרך.",
   "fronts": [
    {
     "name": "דונבאס",
     "status": "עמדות קשיחות בנוגע לשליטה ולדרישות נסיגה טריטוריאליות"
    },
    {
     "name": "זפורוז'יה ודרום אוקראינה",
     "status": "פעילות התקפית מלווה בלכידת לוחמים זרים ותקיפות מונחות"
    },
    {
     "name": "עורף רוסיה (סיביר ואזור סנקט פטרבורג)",
     "status": "מתקפות כטב\"מים אוקראיניות נרחבות נגד בתי זיקוק ונמלים"
    },
    {
     "name": "עורף אוקראינה (קייב ואודסה)",
     "status": "תקיפות מתמשכות בטילים בליסטיים ובכטב\"מים סילוניים על יעדים אזרחיים ותשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11120044-01",
     "title": "מתקפת כטב\"מים אוקראינית נרחבת על אומסק ובית הזיקוק בסיביר",
     "summary": "כוחות אוקראינה ביצעו תקיפה ממושכת באמצעות כטב\"מים לעבר העיר אומסק שבסיביר, כ-2,500 ק\"מ מגבול אוקראינה. דווח על שריפה בבית הזיקוק המקומי ועל פגיעה אפשרית בתחנת כוח, לצד ביטול אירועי תרבות והתרעות שנמשכו שעות.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T15:14:11+00:00",
     "last_update_at": "2026-11-11T22:41:46+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקני האנרגיה בבית הזיקוק ובתחנת הכוח טרם אומת רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russias-largest-oil-refinery-slammed-by-drones-in-8-hr-attack-2-500-km-from-ukraine/",
       "published_at": "2026-11-11T22:41:46+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_kyiv_independent",
       "url": "https://meduza.io/en/news/2026/11/11/russia-s-omsk-under-drone-alert-for-seven-hours-amid-ukrainian-attack-governor-urges-residents-to-stay-indoors",
       "published_at": "2026-11-11T18:08:49+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/49502",
       "published_at": "2026-11-11T16:49:20+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/49497",
       "published_at": "2026-11-11T15:14:11+00:00"
      }
     ],
     "places": [
      {
       "name": "אומסק, רוסיה",
       "lat": 54.9914,
       "lon": 73.3715
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-02",
     "title": "סיום שיחות אבו דאבי והסכמה על עסקת חילופי שבויים",
     "summary": "השיחות המשולשות בין רוסיה, אוקראינה וארצות הברית באבו דאבי ננעלו בהסכמה על עסקת חילופי שבויים נרחבת ודיון בערבויות ביטחוניות, אולם ללא פריצת דרך בסוגיית השטחים ובמערך הביטחון האירופי.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T12:28:23+00:00",
     "last_update_at": "2026-11-11T19:15:44+00:00",
     "what_is_not_verified": "מספר השבויים שישוחררו ומועד הביצוע המדויק לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://kyivindependent.com/ukraine-war-latest-large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/",
       "published_at": "2026-11-11T19:15:44+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.bbc.co.uk/news/articles/ck792we7zrz4o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-11T18:04:58+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062404/",
       "published_at": "2026-11-11T17:47:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-talks-in-abu-dhabi-bring-progress-on-prisoners-but-not-on-peace",
       "published_at": "2026-11-11T17:03:43+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://meduza.io/en/feature/2026/11/11/russia-ukraine-peace-talks-conclude-in-abu-dhabi-with-prisoner-exchange-agreement-but-no-breakthrough-on-territory",
       "published_at": "2026-11-11T13:10:29+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://meduza.io/en/news/2026/11/11/ukrainian-negotiator-says-peace-talks-with-russia-could-produce-a-deal-before-the-new-year",
       "published_at": "2026-11-11T12:28:23+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות הערביות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-03",
     "title": "תקיפת טילים בליסטיים רוסית על קייב",
     "summary": "צבא רוסיה שיגר טילים בליסטיים לעבר עיר הבירה קייב שעות ספורות לאחר סיום סבב השיחות באבו דאבי.",
     "axis": "מערכי עורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T23:27:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T23:27:06+00:00",
     "last_update_at": "2026-11-11T23:27:06+00:00",
     "what_is_not_verified": "פרטי המטרות המדויקות והנזקים בקייב טרם פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russia-attacks-kyiv-with-ballistic-missiles-hours-after-peace-talks-end/",
       "published_at": "2026-11-11T23:27:06+00:00"
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
     "id": "UKRAINE-11120044-04",
     "title": "פגיעת כטב\"ם סילוני רוסי בשוק בצ'ורנומורסק",
     "summary": "פגיעת כלי טיס מונחה בעל הנעת סילון בשוק מרכזי בצ'ורנומורסק שבמחוז אודסה גרמה למותם של ארבעה בני אדם ולפציעתם של לפחות תשעה נוספים, לצד פגיעה במבני מגורים וברכבים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:27:00+00:00",
     "last_update_at": "2026-11-11T17:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_78cb47b0dfd0bdb9",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062304/",
       "published_at": "2026-11-11T17:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'ורנומורסק, אוקראינה",
       "lat": 46.3013,
       "lon": 30.6549
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-05",
     "title": "הפלת מסוקים רוסיים באש כוחותיהם במחוז לנינגרד",
     "summary": "בלוגרים צבאיים רוסיים דיווחו על הפלת עד שלושה מסוקי קרב רוסיים באש כוחותיהם ומותם של שבעה אנשי צוות בעת ניסיון ליירט מתקפת כטב\"מים אוקראינית מעל אזור לנינגרד ואוסט-לוגה.",
     "axis": "צפון-מערב רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T12:45:08+00:00",
     "last_update_at": "2026-11-11T18:56:06+00:00",
     "what_is_not_verified": "האובדן המדויק של המסוקים ונסיבות מות הטייסים לא אושרו רשמית בידי הרשויות הרוסיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49508",
       "published_at": "2026-11-11T18:56:06+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/11/russian-pro-war-military-bloggers-report-pilots-killed-during-ukrainian-drone-attack-on-leningrad-region",
       "published_at": "2026-11-11T12:45:08+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסט-לוגה, רוסיה",
       "lat": 59.6592,
       "lon": 28.2695
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-06",
     "title": "הסכמת שגרירי האיחוד האירופי על חבילת סנקציות חדשה נגד רוסיה",
     "summary": "נציגי מדינות האיחוד האירופי אישרו עקרונית הטלת סנקציות על 145 ישויות ויחידים, כולל 50 בנקים רוסיים, חברות הקשורות לצי הצללים של הנפט וגורמים הפועלים בתחום הסייבר והלוחמה ההיברידית.",
     "axis": "הזירה הבינלאומית והכלכלית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:33:00+00:00",
     "last_update_at": "2026-11-11T17:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062400/",
       "published_at": "2026-11-11T17:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-07",
     "title": "לכידת שבוי מלחמה מאינדונזיה בשורות צבא רוסיה",
     "summary": "אוקראינה הודיעה על לכידתו של אזרח אינדונזי שלחם בשורות צבא רוסיה במחוז זפורוז'יה שבדרום המדינה, לאחר שיחידתו הותקפה על ידי כטב\"מים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T05:33:27+00:00",
     "last_update_at": "2026-11-11T19:03:34+00:00",
     "what_is_not_verified": "היקף הגיוס של אזרחים זרים נוספים מאינדונזיה וממדינות אחרות אינו מאומת מעבר לנתוני הפרויקט האוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_i_want_to_live",
       "url": "https://kyivindependent.com/ukraine-captures-first-indonesian-prisoner-of-war-as-russia-steps-up-foreign-recruitment/",
       "published_at": "2026-11-11T19:03:34+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_i_want_to_live",
       "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-indonesian-pow-prisoner-of-war-russia",
       "published_at": "2026-11-11T05:33:27+00:00"
      }
     ],
     "places": [
      {
       "name": "זפורוז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-08",
     "title": "מותו של שגריר רוסיה בארצות הברית",
     "summary": "משרד החוץ של רוסיה הודיע על מותו הפתאומי של השגריר בוושינגטון, אלכסנדר דרצ'ייב, בגיל 66.",
     "axis": "דיפלומטיה בין-מעצמתית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T16:39:57+00:00",
     "last_update_at": "2026-11-11T16:54:18+00:00",
     "what_is_not_verified": "סיבת ומנגנון המוות לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hyocvzgcme",
       "published_at": "2026-11-11T16:54:18+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21832201",
       "published_at": "2026-11-11T16:39:57+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-09",
     "title": "נסיעת שליחי ארצות הברית לפגישות במוסקבה ובדבלין",
     "summary": "השליחים סטיב ויטקוף וג'ארד קושנר מתכננים להיפגש במוסקבה עם ולדימיר פוטין ולאחר מכן בדבלין עם וולודימיר זלנסקי כדי לעדכן על תוצאות שיחות אבו דאבי.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T14:30:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T14:30:54+00:00",
     "last_update_at": "2026-11-11T17:56:29+00:00",
     "what_is_not_verified": "תוכן ההצעות שיוצגו בפגישות והסכמות עתידיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://kyivindependent.com/zelensky-arrives-in-dublin-for-european-political-community-summit-expects-a-debrief-from-witkoff-kushner/",
       "published_at": "2026-11-11T17:56:29+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062404/",
       "published_at": "2026-11-11T17:47:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062401/",
       "published_at": "2026-11-11T17:41:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://meduza.io/en/news/2026/11/11/they-re-bringing-something-kushner-and-witkoff-to-meet-putin-in-moscow-day-after-abu-dhabi-peace-talks",
       "published_at": "2026-11-11T14:30:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "דבלין, אירלנד",
       "lat": 53.3494,
       "lon": -6.2606
      }
     ]
    }
   ],
   "not_verified": [
    "טענות בלוגרים צבאיים על הפלת שלושה מסוקים רוסיים באש כוחותיהם ליד לנינגרד",
    "היקף הנזק המדויק לבית הזיקוק באומסק ולתחנת הכוח בעיר",
    "מספרם הכולל של אזרחים זרים שלוחמים או נהרגו בשירות צבא רוסיה",
    "נסיבות וסיבת המוות של השגריר הרוסי אלכסנדר דרצ'ייב",
    "טענת רוסיה בנוגע לקיומה של רשת בתי כלא ועינויים באוקראינה"
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
     "value": 1.1127,
     "unit": "USD",
     "change_pct": -0.78,
     "source_id": "src_ecb",
     "as_of": "2026-11-11T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת שחרור של שבויים במסגרת עסקאות חילופין",
      "התקדמות במסלול ההצטרפות לאיחוד האירופי וקבלת ערבויות ביטחון",
      "סירוב מוחלט לדרישות לנסיגה משטחי דונבאס"
     ],
     "inferred": [
      "פגיעה בתשתיות הזיקוק והאנרגיה של רוסיה כדי לייצר לחץ כלכלי ומבצעי",
      "רצון להגיע למסגרת הסדרה לפני סוף השנה תוך שימור תמיכת המערב"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים לעומק השטח הרוסי במקביל למגעים עם שליחי הממשל האמריקני"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת ניצחון והחזרת כל השטחים הנתבעים על ידה בטרם חתימה על הסכם שלום",
      "הגעה להבנות בעניין מערך הביטחון האירופי ודרישות ביטחוניות מול אוקראינה"
     ],
     "inferred": [
      "הפעלת לחץ צבאי כבד על תשתיות האנרגיה והמרכזים העירוניים באוקראינה לקראת המשך השיחות",
      "שימור ערוצי ההידברות הדיפלומטיים מול ארצות הברית כדי למקסם הישגים מדיניים"
     ],
     "forecast": [
      "המשך תקיפות הטילים על ערי אוקראינה תוך בחינת תנאי הפסקת אש בתחומי האנרגיה והים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ck792we7zrz4o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-indonesian-pow-prisoner-of-war-russia",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21832201",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/zelensky-arrives-in-dublin-for-european-political-community-summit-expects-a-debrief-from-witkoff-kushner/",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/11/they-re-bringing-something-kushner-and-witkoff-to-meet-putin-in-moscow-day-after-abu-dhabi-peace-talks",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062401/",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49508",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyocvzgcme",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-11T00:50:00+00:00",
  "changes": {
   "UKRAINE-11120044-01": {
    "kind": "new"
   },
   "UKRAINE-11120044-02": {
    "kind": "new"
   },
   "UKRAINE-11120044-03": {
    "kind": "new"
   },
   "UKRAINE-11120044-04": {
    "kind": "new"
   },
   "UKRAINE-11120044-05": {
    "kind": "new"
   },
   "UKRAINE-11120044-06": {
    "kind": "new"
   },
   "UKRAINE-11120044-07": {
    "kind": "new"
   },
   "UKRAINE-11120044-08": {
    "kind": "new"
   },
   "UKRAINE-11120044-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-12T0057__north-202611120057.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-12T00:57:53+00:00",
   "window": {
    "from": "2026-11-11T00:57:53+00:00",
    "to": "2026-11-12T00:57:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611120057"
   },
   "summary": "הגזרה הצפונית מתאפיינת במתיחות צבאית ומדינית נמשכת, שבה חיזבאללה דוחה כל כוונה להתפרק מנשקו תחת לחץ צבאי ודורש מהממשלה הלבנונית להסוות מגעים עם ישראל. במקביל, צה\"ל ממשיך בפעילות מבצעית בדרום לבנון ובדרום סוריה, בעוד ארגונים בינלאומיים מתריעים על החמרה במשבר ההומניטרי והתזונתי בלבנון.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה מבצעית ודיפלומטית"
    },
    {
     "name": "החזית הסורית",
     "status": "פעילות צבאית מקומית של צה\"ל"
    }
   ],
   "events": [
    {
     "id": "NORTH-11120057-01",
     "title": "תקיפות צה\"ל בדרום לבנון בזמן נאום מזכ\"ל חיזבאללה",
     "summary": "צה\"ל תקף בכפרים בדרום לבנון במקביל לנאומו של מזכ\"ל חיזבאללה נעים קאסם.",
     "axis": "חזית לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T17:58:28+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:58:28+00:00",
     "last_update_at": "2026-11-11T17:58:28+00:00",
     "what_is_not_verified": "פרטים מדויקים על תוצאות התקיפות וסוגי המטרות לא צוינו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133500",
       "published_at": "2026-11-11T17:58:28+00:00"
      }
     ],
     "places": [
      {
       "name": "אלמנצורי",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "חדאת'א",
       "lat": 33.1561,
       "lon": 35.3912
      }
     ]
    },
    {
     "id": "NORTH-11120057-02",
     "title": "חדירת כוחות צה\"ל והשחתת שטח בדרום סוריה",
     "summary": "כוחות צה\"ל נכנסו למחוז קוניטרה בסוריה, עצרו תושב והפעילו אמצעים שהציתו שטחים חקלאיים.",
     "axis": "חזית סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T09:24:07+00:00",
     "last_update_at": "2026-11-11T23:11:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא והסיבות המדויקות לפעולה מדווחים מצד גורמים סוריים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-abduct-villager-launch-fresh-incursion-into-southern-syria/4121542",
       "published_at": "2026-11-11T23:11:00+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-fresh-incursions-into-syrias-quneitra-set-farmland-ablaze/4119963",
       "published_at": "2026-11-11T09:24:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11120057-03",
     "title": "נאום מזכ\"ל חיזבאללה נעים קאסם",
     "summary": "מזכ\"ל חיזבאללה הצהיר כי הארגון לא יתפרק מנשקו תחת אש, קרא לממשלת לבנון לסגת מהסכם המסגרת, וטען כי תבוסת יריביו מהווה הזדמנות.",
     "axis": "חזית לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T18:19:44+00:00",
     "last_update_at": "2026-11-12T00:06:50+00:00",
     "what_is_not_verified": "מידת היישום בפועל של דרישותיו מהממשלה הלבנונית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/12/us-election-results-could-be-positive-for-lebanon-hezbollah-chief-says?traffic_source=rss",
       "published_at": "2026-11-12T00:06:50+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-says-trumps-midterm-defeat-opportunity",
       "published_at": "2026-11-11T22:12:39+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/149587/",
       "published_at": "2026-11-11T21:26:09+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21833418",
       "published_at": "2026-11-11T18:19:44+00:00"
      }
     ],
     "places": [
      {
       "name": "לבנון",
       "lat": 40.3757,
       "lon": -76.4626
      }
     ]
    },
    {
     "id": "NORTH-11120057-04",
     "title": "אזהרת האו\"ם מפני משבר ביטחון תזונתי חמור בלבנון",
     "summary": "גופי האו\"ם ומשרד החקלאות הלבנוני הזהירו כי למעלה ממיליון איש בלבנון מתמודדים עם חוסר ביטחון תזונתי חריף בעקבות העימותים הבלתי פוסקים.",
     "axis": "חזית לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T18:43:40+00:00",
     "last_update_at": "2026-11-11T18:57:49+00:00",
     "what_is_not_verified": "ההערכות העתידיות לגבי מספר הנפגעים המדויק מאמצע השנה הבאה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_4249f10c3044979f",
       "url": "https://www.newarab.com/news/more-one-million-lebanon-face-acute-food-insecurity",
       "published_at": "2026-11-11T18:57:49+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_f59456834babf420",
       "url": "https://www.aljazeera.com/news/2026/11/11/one-million-people-in-lebanon-facing-acute-food-insecurity-un-says?traffic_source=rss",
       "published_at": "2026-11-11T18:43:40+00:00"
      }
     ],
     "places": [
      {
       "name": "לבנון",
       "lat": 40.3757,
       "lon": -76.4626
      }
     ]
    },
    {
     "id": "NORTH-11120057-05",
     "title": "דיונים מדיניים בנפרד על תפקיד יוניפי\"ל ונוכחות ביטחונית בדרום לבנון",
     "summary": "גורמים ישראליים ואמריקאיים דנו בשינוי או מניעת המשך פעילות כוח יוניפי\"ל בדרום לבנון, לצד התנגדות ישראלית ליוזמות אירופיות להקמת כוח צבאי חדש באזור.",
     "axis": "חזית לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T14:50:00+00:00",
     "last_update_at": "2026-11-11T14:50:00+00:00",
     "what_is_not_verified": "האם יושגו הסכמות בינלאומיות בפועל לשינוי מנדט הכוח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/967471/israel-seeks-to-reshape-unifils-role-in-lebanon-as-tensions-with-iran/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967471",
       "published_at": "2026-11-11T14:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    }
   ],
   "not_verified": [
    "האשמות על מבצע השפעה רשתית זרה בבחירות בישראל שיוחסו לגורמים שונים.",
    "טענות על מעורבות פיננסית של גורמים זרים בקרב גופים פוליטיים או חברתיים."
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
     "value": 3.1716,
     "unit": "ILS",
     "change_pct": 0.17,
     "source_id": "src_ecb",
     "as_of": "2026-11-11T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "אי פירוק נשק הארגון כל עוד נמשכת הלחימה או הכיבוש",
      "הפסקת התוקפנות הישראלית ונסיגת צה\"ל כתנאי להבנות עתידיות"
     ],
     "inferred": [
      "שימור התשתיות האזרחיות והצבאיות של הארגון בתוך המדינה הלבנונית",
      "ניצול שינויים פוליטיים חיצוניים בארה\"ב לחיזוק הלגיטימציה של ההתנגדות"
     ],
     "forecast": [
      "המשך סירוב להסכמים מדיניים הכוללים ויתור על הנשק",
      "הגברת הלחץ הפוליטי על ממשלת לבנון לדחות תכניות פירוק"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות איומים בצפון והרחקת כוחות עוינים מהגבול"
     ],
     "inferred": [
      "שאיפה לשנות את המבנה והאכיפה הבינלאומית בדרום לבנון, כולל פעילות יוניפי\"ל",
      "שימור חופש הפעולה המבצעי בלבנון ובסוריה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות נגד תשתיות ופעילים בגבול הצפון",
      "המשך לחץ דיפלומטי על שותפות בינלאומיות לשינוי המצב הביטחוני בדרום לבנון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/11/one-million-people-in-lebanon-facing-acute-food-insecurity-un-says?traffic_source=rss",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/149587/",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-fresh-incursions-into-syrias-quneitra-set-farmland-ablaze/4119963",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21833418",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/967471/israel-seeks-to-reshape-unifils-role-in-lebanon-as-tensions-with-iran/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967471",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-says-trumps-midterm-defeat-opportunity",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/more-one-million-lebanon-face-acute-food-insecurity",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133500",
     "accessed_at": "2026-11-12T00:57:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-11T00:52:04+00:00",
  "changes": {
   "NORTH-11120057-01": {
    "kind": "new"
   },
   "NORTH-11120057-02": {
    "kind": "possible",
    "prev": "פעילות כוחות צבא ישראל במרחב קוניטרה בסוריה",
    "score": 0.467
   },
   "NORTH-11120057-03": {
    "kind": "new"
   },
   "NORTH-11120057-04": {
    "kind": "possible",
    "prev": "אזרח ישראלי חצה את הגבול ללבנון ונכנס לעמדת או\"ם",
    "score": 0.467
   },
   "NORTH-11120057-05": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "ירי לעבר סיור יוניפי\"ל בדרום לבנון",
    "score": 0.65
   }
  }
 }
};
