/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-09T0637__yemen-202610090637.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-09T06:37:20+00:00",
   "window": {
    "from": "2026-10-08T06:37:20+00:00",
    "to": "2026-10-09T06:37:20+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610090637"
   },
   "summary": "הלחימה בתימן וסביבתה מתאפיינת בהסלמה משמעותית, כאשר החות'ים מגבירים את מתקפות הטילים והכטב\"מים לעבר שדות תעופה ותשתיות בסעודיה (כגון בריאד, נג'ראן וח'מיס מושיט), מה שמאלץ חברות תעופה זרות להשעות טיסות. במקביל, נמשכים העימותים הקרקעיים בתימן (בין היתר באזור טאיז) ומצוקה הומניטרית וכלכלית עמוקה, בעוד מעצמות אזוריות כמו סוריה וטורקיה דוחים מעורבים צבאית ישירה לצד סעודיה.",
   "fronts": [
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעילה ואינטנסיבית הכוללת תקיפות אוויריות וירי טילים של החות'ים לעבר מתקנים בסעודיה"
    },
    {
     "name": "הזירה הפנימית בתימן",
     "status": "פעילה עם קרבות קרקעיים ומצור סביב אזורים כמו טאיז לצד משבר הומניטרי"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10090637-01",
     "title": "תקיפות החות'ים על יעדים בסעודיה ובשדות תעופה",
     "summary": "החות'ים תקפו שדות תעופה ואתרים בסעודיה, כולל נמל התעופה המלך ח'אלד בריאד, נמל התעופה נג'ראן ובסיס ח'מיס מושיט, וגרמו לנפגעים ולנזק מטוסים ותשתיות.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T13:04:15+00:00",
     "last_update_at": "2026-10-09T05:35:08+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומספר הנפגעים המלא אינם מאומתים במלואם ממקור ראשון אחיד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pakistani-premier-condemns-houthi-attacks-saudi-arabia",
       "published_at": "2026-10-09T05:35:08+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
       "published_at": "2026-10-09T02:28:58+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-least-one-plane-severely-damaged-houthis-claim-third-riyadh",
       "published_at": "2026-10-08T23:30:40+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://www.newarab.com/news/saudi-nursery-hit-debris-houthis-target-riyadh-airport",
       "published_at": "2026-10-08T20:21:51+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://t.me/abualiexpress/131584",
       "published_at": "2026-10-08T16:06:52+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_1c8b4919a7f4ba25",
       "url": "https://www.sabanew.net/viewstory/153681",
       "published_at": "2026-10-08T13:04:15+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "נג'ראן, סעודיה",
       "lat": 17.544,
       "lon": 44.2247
      },
      {
       "name": "ח'מיס מושיט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10090637-02",
     "title": "השעיית טיסות בינלאומיות לריאד בעקבות התקיפות",
     "summary": "חברות תעופה שונות, בהן קבוצת לופטהנזה וחברות הודיות, השעו את טיסותיהן לריאד בעקבות האיומים והתקיפות של החות'ים.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T16:46:32+00:00",
     "last_update_at": "2026-10-08T16:46:32+00:00",
     "what_is_not_verified": "משך ההשעיה המדויק של כלל החברות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_94defbf73519bde2",
       "url": "https://www.al-monitor.com/originals/2026/10/lufthansa-indian-airlines-suspend-flights-riyadh-after-houthi-attacks",
       "published_at": "2026-10-08T16:46:32+00:00"
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
     "id": "YEMEN-10090637-03",
     "title": "התקדמות כוחות ממשלת תימן באזור טאיז",
     "summary": "כוחות ממשלת תימן הנתמכים בידי סעודיה דיווחו על התקדמות ברכס ההרים במערב טאיז במסגרת מבצע שחר תימן.",
     "axis": "הלחימה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T06:16:53+00:00",
     "last_update_at": "2026-10-08T14:48:37+00:00",
     "what_is_not_verified": "השגת השליטה המלאה בשטח אינה מאומתת ממקור בלתי תלוי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-no-iran-attack-midterms-houthi-strikes-saudi",
       "published_at": "2026-10-08T14:48:37+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-advances-gaza-marks-three-years-genocide",
       "published_at": "2026-10-08T06:16:53+00:00"
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
     "id": "YEMEN-10090637-04",
     "title": "הכחשת סוריה לגבי שליחת כוחות צבאיים לתימן",
     "summary": "משרד ההגנה והמידע בסוריה פרסמו הכחשה רשמית לדיווחים לפיהם דמשק שוקלת או מתכננת לשלוח כוחות צבא לסעודיה כדי להילחם בחות'ים.",
     "axis": "הלחימה בתימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T08:24:40+00:00",
     "last_update_at": "2026-10-08T13:05:06+00:00",
     "what_is_not_verified": "האם התקיימו דיונים מאחורי הקלעים בין מנהיגים בנושא זה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_e9acf4f2486fc727",
       "url": "https://www.newarab.com/news/syria-denies-troops-will-be-sent-yemen",
       "published_at": "2026-10-08T13:05:06+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_e9acf4f2486fc727",
       "url": "https://t.me/abualiexpress/131554",
       "published_at": "2026-10-08T08:24:40+00:00"
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
     "id": "YEMEN-10090637-05",
     "title": "הכחשת טורקיה על שליחת כוחות צבאיים לעימות עם החות'ים",
     "summary": "שר החוץ הטורקי הבהיר כי הסכם ההגנה עם סעודיה נועד להגנה בלבד, וכי טורקיה לא תשלח כוחות לשטח מדינה אחרת כדי לפתוח במתקפה.",
     "axis": "תימן והחות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T09:20:46+00:00",
     "last_update_at": "2026-10-08T11:25:55+00:00",
     "what_is_not_verified": "האם יתכנו שינויים עתידיים בעמדת טורקיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131564",
       "published_at": "2026-10-08T11:25:55+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261008-diplomats-school-pupils-take-shelter-in-saudi-capital-as-yemen-s-houthis-step-up-attacks",
       "published_at": "2026-10-08T09:20:46+00:00"
      }
     ],
     "places": [
      {
       "name": "אנקרה, טורקיה",
       "lat": 39.9208,
       "lon": 32.854
      }
     ]
    }
   ],
   "not_verified": [
    "היקף הנזק המדויק למטוסים ולמתקנים האזרחיים והצבאיים בריאד",
    "קיומם האפשרי של דיונים חשאיים על שילוב כוחות סוריים או פקיסטניים בלחימה בתימן",
    "מספר הנפגעים המדויק בתקיפות החות'יות האחרונות"
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
     "value": 3.0773,
     "unit": "ILS",
     "change_pct": 0.31,
     "source_id": "src_ecb",
     "as_of": "2026-10-08T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "לפגוע בתשתיות ובשדות תעופה בסעודיה",
      "לשבש את התנועה האווירית והכלכלית של הקואליציה בהובלת סעודיה"
     ],
     "inferred": [
      "להפעיל לחץ על סעודיה ובעלות בריתה להפסיק את הפעילות הצבאית נגדם בתימן",
      "להפגין יכולות פגיעה אסטרטגיות למרות הלחץ הצבאי"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר מטרות אזרחיות וצבאיות בסעודיה",
      "החמרת המצור והלחימה במוקדים פנימיים בתימן כמו טאיז"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "להגן על שטחי הממלכה, אזרחיה ותשתיות חיוניות מפני תקיפות",
      "לתמוך בממשלת תימן הרשמית ולשמור על שלמותה הטריטוריאלית"
     ],
     "inferred": [
      "חיפוש אחר סיוע צבאי חיצוני או שותפות הגנתיות חדשות לאור התמשכות האיומים",
      "ניסיון לבלום את התקדמות החות'ים בתוך תימן ומחוצה לה"
     ],
     "forecast": [
      "המשך יירוט איומים אוויריים לצד תיאום מדיני-ביטחוני אזורי",
      "התמודדות עם פגיעה כלכלית ותיירותית בעקבות השעיות הטיסות לבירה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/lufthansa-indian-airlines-suspend-flights-riyadh-after-houthi-attacks",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261008-diplomats-school-pupils-take-shelter-in-saudi-capital-as-yemen-s-houthis-step-up-attacks",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-least-one-plane-severely-damaged-houthis-claim-third-riyadh",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-denies-troops-will-be-sent-yemen",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153681",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131564",
     "accessed_at": "2026-10-09T06:37:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-08T17:52:09+00:00",
  "changes": {
   "YEMEN-10090637-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות חות'יות נגד שדות תעופה בסעודיה ופגיעה במטוסים",
    "score": 1.0
   },
   "YEMEN-10090637-02": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "ביטול טיסות בינלאומיות לריאד בעקבות האיומים החות'יים",
    "score": 1.0
   },
   "YEMEN-10090637-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התקדמות כוחות ממשלת תימן הנתמכים בידי סעודיה במערב תעז",
    "score": 1.0
   },
   "YEMEN-10090637-04": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הכחשת משרד ההגנה הסורי על שליחת כוחות לתימן",
    "score": 1.0
   },
   "YEMEN-10090637-05": {
    "kind": "possible",
    "prev": "הצהרת טורקיה כי הגנתה על סעודיה במסגרת ברית מכה היא הגנתית בלבד",
    "score": 0.633
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-09T1710__iran-202610091710.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-09T17:10:07+00:00",
   "window": {
    "from": "2026-10-08T17:10:07+00:00",
    "to": "2026-10-09T17:10:07+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "iran-202610091710"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בלוחמה ימית במצר הורמוז, לצד מתיחות צבאית מוגברת ועצירת תקיפות ישירות עד לאחר בחירות האמצע בארה\"ב. משמרות המהפכה מאיימים לפגוע בנתיבי שיט אזוריים ולהטיל הגבלות ימיות, בעוד ארה\"ב שומרת על מצור כלכלי ואוכפת מניעת ייצוא נפט איראני. במקביל נמשך הלחץ על רשתות המימון של שלוחות איראן כדוגמת חזבאללה, והתמודדות מול פעולות ביון ומעקבים בזירה הבינלאומית.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "הסלמה ימית, איומי משמרות המהפכה ופגיעה במכליות"
    },
    {
     "name": "הזירה האווירית והאסטרטגית מול ארה\"ב",
     "status": "דחיית תקיפות אמריקניות ישירות לצד המשך מצור כלכלי והיערכות הפנטגון"
    },
    {
     "name": "ישראל מול ציר איראן",
     "status": "מתיחות לאחר חיסול ההנהגה האיראנית ומאבק באיומי ריגול"
    },
    {
     "name": "חזית המימון והסנקציות (לבנון/חזבאללה)",
     "status": "פגיעה בערוצי העברות הכספים מטהראן תחת פיקוח הדוק"
    }
   ],
   "events": [
    {
     "id": "IRAN-10091710-01",
     "title": "הצהרת נשיא ארה\"ב על דחיית תקיפה אפשרית באיראן והמשך המצור הימי",
     "summary": "נשיא ארצות הברית הצהיר על שיחות עם איראן, הבהיר כי לא תבוצע תקיפה צבאית נגדה לפני בחירות האמצע בנובמבר, והדגיש את המשך הפיקוח והמצור על ייצוא הנפט שלה דרך מצר הורמוז.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T16:28:37+00:00",
     "last_update_at": "2026-10-09T15:45:48+00:00",
     "what_is_not_verified": "תוכן השיחות הפרודוקטיביות לכאורה והיקף חביות הנפט המדויק שעבר",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131639",
       "published_at": "2026-10-09T15:45:48+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94556",
       "published_at": "2026-10-08T16:55:18+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48364",
       "published_at": "2026-10-08T16:33:59+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131587",
       "published_at": "2026-10-08T16:28:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10091710-02",
     "title": "אזהרות ותקיפת כלי שיט בידי חיל הים של משמרות המהפכה במצר הורמוז",
     "summary": "הזרוע הימית של משמרות המהפכה פרסמה התראות לכלי שיט החורגים מנתיבי התנועה מדרום למצר הורמוז, האשימה את צבא ארה\"ב בהסלמה ימית, ודווח על תקיפת מכליות ושריפת אחת מהן.",
     "axis": "המפרץ הפרסי ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T13:00:06+00:00",
     "last_update_at": "2026-10-09T15:59:30+00:00",
     "what_is_not_verified": "פרטי הפגיעה המדויקים בשתי הספינות וזהות המכלית שעלתה באש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_132a209b8c6b5a0e",
       "url": "https://en.irna.ir/news/86287769/IRGC-warns-vessels-against-violating-designated-routes-in-Strait",
       "published_at": "2026-10-09T15:59:30+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_d8741b675224879e",
       "url": "https://en.irna.ir/news/86287702/Aggressive-US-military-bears-responsibility-for-regional-maritime",
       "published_at": "2026-10-09T14:39:06+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_132a209b8c6b5a0e",
       "url": "https://t.me/alexmehacarmel/48391",
       "published_at": "2026-10-09T14:15:06+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_132a209b8c6b5a0e",
       "url": "https://t.me/lelotsenzura/94566",
       "published_at": "2026-10-09T13:00:06+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-10091710-03",
     "title": "גינוי איראני לעמדת צרפת בנושא הרתעה גרעינית",
     "summary": "דובר משרד החוץ של איראן מתח ביקורת על נשיא צרפת, וטען לקיומם של מוסר כפול ביחס לתפיסת ההרתעה הגרעינית כערובה לביטחון צרפתי לעומת הגדרתה כאיום כשמדובר באיראן.",
     "axis": "הגרעין האיראני מול המערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T15:55:18+00:00",
     "last_update_at": "2026-10-09T15:55:18+00:00",
     "what_is_not_verified": "לא מאומת תוכנו המלא של הנאום הצרפתי שצוטט בביקורת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_ef1b4ea29d666ceb",
       "url": "https://en.irna.ir/news/86287738/Iran-slams-French-president-s-double-standard-on-nuclear-deterrence",
       "published_at": "2026-10-09T15:55:18+00:00"
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
     "id": "IRAN-10091710-04",
     "title": "בחינה משפטית בפורטוגל לשימוש ארה\"ב בבסיס צבאי בהקשר העימות מול איראן",
     "summary": "ראש ממשלת פורטוגל הגן על חוקיות השימוש של צבא ארה\"ב בבסיס האווירי לאז'ש לצורכי המלחמה באיראן, בעקבות חקירה שנפתחה לבקשת האופוזיציה והגבלות שהטילו מדינות באירופה.",
     "axis": "ארה\"ב-אירופה-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T15:46:26+00:00",
     "last_update_at": "2026-10-09T15:46:26+00:00",
     "what_is_not_verified": "פרטי הפעילות המבצעית שבוצעה מהבסיס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/portugal-pm-cautions-judiciary-not-get-political-over-us-use-air-base",
       "published_at": "2026-10-09T15:46:26+00:00"
      }
     ],
     "places": [
      {
       "name": "ליסבון, פורטוגל",
       "lat": 38.7078,
       "lon": -9.1366
      }
     ]
    },
    {
     "id": "IRAN-10091710-05",
     "title": "הכנת תוכניות תקיפה בפנטגון ודיונים על החרפת הלחימה באיראן",
     "summary": "גורמי ביטחון בארה\"ב גיבשו תוכניות לחידוש מערכה צבאית אינטנסיבית נגד יעדי טילים, כטב\"מים, מפקדות ומתקני אנרגיה באיראן, כאשר בדרג המדיני מתקבלות החלטות זהירות יותר.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T06:33:01+00:00",
     "last_update_at": "2026-10-09T06:33:01+00:00",
     "what_is_not_verified": "תוכנן המלא של תוכניות הפנטגון מעבר לדיווחים עיתונאיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131604",
       "published_at": "2026-10-09T06:33:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10091710-06",
     "title": "מחלוקת פוליטית בישראל סביב השלכות חיסול המנהיג העליון עלי ח'אמנאי",
     "summary": "מנהיג האופוזיציה יאיר גולן טען כי הריגתו של עלי ח'אמנאי פגעה באינטרסים הישראליים, הובילה לעליית דרג הנהגה קיצוני יותר בראשות בנו מוג'תבא, ולא השיגה את מיטוט המשטר.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T12:51:36+00:00",
     "last_update_at": "2026-10-09T13:27:39+00:00",
     "what_is_not_verified": "פרטי הדיונים המדיניים וההבטחות שניתנו לממשל האמריקני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yair-golan-says-killing-khamenei-was-mistake-israel",
       "published_at": "2026-10-09T13:27:39+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/politics/article/21588808",
       "published_at": "2026-10-09T13:12:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/hysibv8sgl",
       "published_at": "2026-10-09T12:51:36+00:00"
      }
     ],
     "places": [
      {
       "name": "ראשון לציון, ישראל",
       "lat": 31.9636,
       "lon": 34.8101
      }
     ]
    },
    {
     "id": "IRAN-10091710-07",
     "title": "בחינת צירי מימון איראניים לארגון חזבאללה תחת לחץ הסנקציות",
     "summary": "הסנקציות של ארצות הברית מגבילות את ערוצי ההעברה של איראן לחזבאללה, אך נטען כי כספים ממשיכים לזרום דרך חלפנים, אגודות סיוע וצינורות עוקפים בעקבות שיבוש נתיבים בעיראק ובדובאי.",
     "axis": "סנקציות ומימון שלוחות",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:45:08+00:00",
     "last_update_at": "2026-10-09T16:45:08+00:00",
     "what_is_not_verified": "העברת 200 מיליון דולר בספטמבר אשר הוכחשה על ידי מחלקת המדינה האמריקנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/hezbollahs-financial-lifeline-extends-beyond-irans-cash-transfers/",
       "published_at": "2026-10-09T16:45:08+00:00"
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
     "id": "IRAN-10091710-08",
     "title": "העמדה לדין בלונדון על ריגול עבור איראן נגד יעדים ישראליים ויהודיים",
     "summary": "בבית משפט בבריטניה הוגשו כתבי אישום נגד גברים המואשמים בביצוע מעקבים עבור איראן אחר שגרירות ישראל, בית כנסת ואתרים נוספים, אשר כפרו באשמה.",
     "axis": "ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T10:54:48+00:00",
     "last_update_at": "2026-10-09T10:54:48+00:00",
     "what_is_not_verified": "אשמתם של הנאשמים והיקף הקשר הישיר למנגנוני הביטחון באיראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610091841",
       "published_at": "2026-10-09T10:54:48+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    }
   ],
   "not_verified": [
    "טענת העברת 200 מיליון דולר מאיראן לחזבאללה בספטמבר, שהוכחשה בידי מחלקת המדינה האמריקנית",
    "דיווח על תקיפת שתי ספינות במצר הורמוז תוך שעה ממקורות לא רשמיים",
    "קיומן של שיחות ישירות מפורטות בין הממשל האמריקני להנהגת איראן והישגיהן"
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
     "value": 3.0573,
     "unit": "ILS",
     "change_pct": -0.65,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "הימנעות מתקיפה צבאית באיראן לפני בחירות האמצע בנובמבר",
      "השארת המצור הכלכלי והימי על איראן במלוא עוצמתו",
      "מניעה מוחלטת של השגת נשק גרעיני בידי איראן"
     ],
     "inferred": [
      "רצון למנוע זינוק במחירי הנפט והסתבכות צבאית לקראת מערכת הבחירות",
      "הכנת חלופות מבצעיות לתקיפה ממוקדת של מאגרי טילים וכטב\"מים למקרה של כישלון המגעים"
     ],
     "forecast": [
      "המשך אכיפה קפדנית של המצור הימי ללא פתיחת מערכה נרחבת בטווח הזמן המיידי"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הטלת מגבלות תנועה ורדיפת כלי שיט החורגים מהנחיות השייט באזור המפרץ",
      "הטלת האחריות להסלמה הימית על הפעילות הצבאית של ארה\"ב",
      "דחיית הטענות המערביות נגד תוכנית ההרתעה שלה"
     ],
     "inferred": [
      "שימוש בשיבוש נתיבי הנפט במצר הורמוז כמנוף לחץ נגד המצור הכלכלי",
      "שימור ערוצי מימון עקיפים עבור חזבאללה למרות הסנקציות"
     ],
     "forecast": [
      "המשך חיכוך יזום ופעולות נקודתיות נגד מכליות שיט ללא גלישה למלחמה כוללת"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הצבת יעד אסטרטגי למיטוט המשטר באיראן (לפי ביקורת האופוזיציה)"
     ],
     "inferred": [
      "המשך סיכול רשתות ביון ופגיעה בשרשרת הפיקוד של איראן ושלוחותיה",
      "חשש מהקצנת המדיניות של ההנהגה החדשה בטהראן"
     ],
     "forecast": [
      "היערכות לתגובות מצד הציר האיראני תוך המשך מאמצי סיכול ממוקדים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/portugal-pm-cautions-judiciary-not-get-political-over-us-use-air-base",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/hezbollahs-financial-lifeline-extends-beyond-irans-cash-transfers/",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610091841",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86287738/Iran-slams-French-president-s-double-standard-on-nuclear-deterrence",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/politics/article/21588808",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yair-golan-says-killing-khamenei-was-mistake-israel",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131604",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48391",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94566",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/elections2026/article/hysibv8sgl",
     "accessed_at": "2026-10-09T17:10:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-09T02:40:28+00:00",
  "changes": {
   "IRAN-10091710-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "הצהרת טראמפ על אי-תקיפה לפני הבחירות",
    "score": 1.0
   },
   "IRAN-10091710-02": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "פיצוצים במצר הורמוז",
    "score": 0.817
   },
   "IRAN-10091710-03": {
    "kind": "new"
   },
   "IRAN-10091710-04": {
    "kind": "new"
   },
   "IRAN-10091710-05": {
    "kind": "new"
   },
   "IRAN-10091710-06": {
    "kind": "new"
   },
   "IRAN-10091710-07": {
    "kind": "new"
   },
   "IRAN-10091710-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-09T1717__ukraine-202610091717.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-09T17:17:29+00:00",
   "window": {
    "from": "2026-10-08T17:17:29+00:00",
    "to": "2026-10-09T17:17:29+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610091717"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת, כאשר רוסיה ממשיכה בתקיפות נרחבות נגד תשתיות אנרגיה וריכוזי אוכלוסייה באוקראינה, ומנגד אוקראינה מבצעת תקיפות רחפנים ושיבושים בשטחי רוסיה. במישור הדיפלומטי והבינלאומי, מתקיימים דיונים על הסכמים עתידיים והפסקות אש חלקיות סביב מתקני אנרגיה, לצד מאבק מתמשך בסנקציות ובפעילות מודיעינית ברחבי אירופה.",
   "fronts": [
    {
     "name": "חזית המזרח (דניפרופטרובסק / קראמטורסק)",
     "status": "פעיל וקונבנציונלי"
    },
    {
     "name": "מרחב האוויר והעורף של רוסיה",
     "status": "תחת תקיפות כטב\"מים ושיבושים"
    },
    {
     "name": "חזית האנרגיה והתשתיות של אוקראינה",
     "status": "תחת מתקפה רוסית והפסקות חשמל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10091717-01",
     "title": "תקיפות אוקראיניות ושיבושים ברוסיה",
     "summary": "תושבים במוסקבה ובסנקט פטרבורג נתקלו בקשיים בהזמנת מוניות יאנדקס עקב תקיפות על מרכזי המידע של החברה, ובנוסף דווח על תקיפות רחפנים ובלונים באזורים שונים ברוסיה.",
     "axis": "תקיפות והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T16:30:44+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:30:44+00:00",
     "last_update_at": "2026-10-09T17:16:24+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למרכזי המידע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/48397",
       "published_at": "2026-10-09T17:16:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://kyivindependent.com/russian-airports-closed-amid-alleged-ukrainian-balloon-and-drone-raid/",
       "published_at": "2026-10-09T16:30:44+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10091717-02",
     "title": "מתקפות רוסיות במחוז דניפרופטרובסק",
     "summary": "כוחות רוסיים ביצעו עשרות מתקפות באמצעות כטב\"מים, ארטילריה וטילים במחוז דניפרופטרובסק, מה שהוביל להרוג אחד ולנזק לתשתיות ולעסקים.",
     "axis": "חזית המזרח והדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T16:08:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T16:08:00+00:00",
     "last_update_at": "2026-10-09T16:08:00+00:00",
     "what_is_not_verified": "פרטים מלאים על כלל היעדים שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_86a507712832d3da",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/09/8057257/",
       "published_at": "2026-10-09T16:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניקופול, אוקראינה",
       "lat": 47.5692,
       "lon": 34.3917
      },
      {
       "name": "קריבי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      }
     ]
    },
    {
     "id": "UKRAINE-10091717-03",
     "title": "מעצר אנשי תקשורת במונטנגרו ובאסטריה",
     "summary": "מונטנגרו גירשה את ראש רשת ריבאר ואזרחים רוסים נוספים מטעמי ביטחון, ובמקביל נעצרו באוסטריה עיתונאים ואנשים החשודים בריגול.",
     "axis": "עורף ודיפלומטיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T15:13:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T15:13:55+00:00",
     "last_update_at": "2026-10-09T16:20:13+00:00",
     "what_is_not_verified": "האם העצורים באוסטריה אכן עסקו בריגול בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48396",
       "published_at": "2026-10-09T16:20:13+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48394",
       "published_at": "2026-10-09T15:13:55+00:00"
      }
     ],
     "places": [
      {
       "name": "ריסאן, מונטנגרו",
       "lat": 42.515,
       "lon": 18.6956
      },
      {
       "name": "ווינה, אוסטריה",
       "lat": 48.2084,
       "lon": 16.3725
      }
     ]
    },
    {
     "id": "UKRAINE-10091717-04",
     "title": "משברים בתשתיות האנרגיה באוקראינה",
     "summary": "נשיא אוקראינה אישר כי קיימים נרחבים בתשתיות האנרגיה שהובילו להפסקות חשמל מתוכננות, בעוד שקיימים דיווחים על דרישה רוסית להקלות בסנקציות בתמורה להפסקת תקיפות אנרגיה.",
     "axis": "תשתיות ואנרגיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T14:01:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-09T14:01:00+00:00",
     "last_update_at": "2026-10-09T15:30:36+00:00",
     "what_is_not_verified": "תשובת ארצות הברית ואוקראינה לדרישות הרוסיות המדויקות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_14554cdf30574573",
       "url": "https://meduza.io/en/news/2026/10/09/the-kyiv-independent-russia-wants-sanctions-lifted-in-exchange-for-halting-strikes-on-ukrainian-energy-infrastructure",
       "published_at": "2026-10-09T15:30:36+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_14554cdf30574573",
       "url": "https://tass.com/economy/2199949",
       "published_at": "2026-10-09T15:06:56+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_dec2bc5302cbacd8",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/09/8057240/",
       "published_at": "2026-10-09T14:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    }
   ],
   "not_verified": [
    "הפרטים המדויקים מאחורי החשדות נגד העיתונאים באוסטריה",
    "תנאי העסקה המלאים שמוצעים במסגרת מתווה האנרגיה",
    "היקף הנזק המלא במרכזי המידע של יאנדקס ברוסיה"
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
     "value": 1.1206,
     "unit": "USD",
     "change_pct": 0.18,
     "source_id": "src_ecb",
     "as_of": "2026-10-09T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת מימון נוסף למערכות הגנה אווירית",
      "הרחבת הגישה למערכות לוויין לטובת פגיעה במשגרי טילים רוסיים",
      "הגנה על תשתיות האנרגיה הלאומיות"
     ],
     "inferred": [
      "ניסיון להפעיל לחץ על בעלות ברית מערביות להגברת הסנקציות על רוסיה",
      "שמירה על רציפות תפקודית של משק האנרגיה למרות הנזקים"
     ],
     "forecast": [
      "המשך דרישה לסיוע צבאי מתקדם למרות חוסר הרצון המסוים מצד וושינגטון",
      "היערכות להתמודדות עם חורף קשה תחת מחסור בחשמל"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "העלאת גיל השירות הצבאי לנשים וחיזוק כוח האדם במסגרות צבאיות",
      "המשך פגיעה בתשתיות האנרגיה של אוקראינה"
     ],
     "inferred": [
      "ניסיון למנף את התקיפות על תשתיות כדי להשיג הקלות בסנקציות הבינלאומיות",
      "הרחבת גיוס כוח אדם ושימוש במשאבים מקומיים לתמיכה במלחמה"
     ],
     "forecast": [
      "המשך לחץ צבאי באזורי החזית ובמתקפות אוויריות על עורף אוקראינה",
      "ניסיונות עקיפים להסרת מגבלות כלכליות באמצעות לחץ אנרגטי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-airports-closed-amid-alleged-ukrainian-balloon-and-drone-raid/",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/09/the-kyiv-independent-russia-wants-sanctions-lifted-in-exchange-for-halting-strikes-on-ukrainian-energy-infrastructure",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/09/8057240/",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/economy/2199949",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48394",
     "accessed_at": "2026-10-09T17:17:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-08T23:45:41+00:00",
  "changes": {
   "UKRAINE-10091717-01": {
    "kind": "new"
   },
   "UKRAINE-10091717-02": {
    "kind": "new"
   },
   "UKRAINE-10091717-03": {
    "kind": "new"
   },
   "UKRAINE-10091717-04": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-09T0641__north-202610090641.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-09T06:41:38+00:00",
   "window": {
    "from": "2026-10-08T06:41:38+00:00",
    "to": "2026-10-09T06:41:38+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610090641"
   },
   "summary": "הגזרה הצפונית של ישראל מאופיינת בשגרת הגנה מתוחה הכוללת תקריות בדרום לבנון ופעילות צבאית במרחב קוניטרה בדרום סוריה, לצד שחיקה בבטיחות הכוחות וחשש מהתארכות השהייה בקווי ההגנה. במקביל, מתנהלים מגעים דיפלומטיים בין טורקיה לסוריה בנושאי ביטחון ויציבות אזורית, וגורמים בינלאומיים דנים בעתיד המנדט של כוחות יוניפי\"ל ושיקום לבנון.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם תקריות אש, סיורים ופעילות הנדסית"
    },
    {
     "name": "החזית הסורית",
     "status": "מתוחה עם נוכחות ופעילות קרקעית במרחב הגבול"
    }
   ],
   "events": [
    {
     "id": "NORTH-10090641-01",
     "title": "ירי ארטילרי והפצצות של צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו ירי ארטילרי, פגזי זרחן ותקיפות אוויריות לעבר מספר מרחבים בדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T12:18:52+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T12:18:52+00:00",
     "last_update_at": "2026-10-09T06:10:15+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים בצד הלבנוני אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a220c2e8064752f8",
       "url": "https://english.almanar.com.lb/article/136182/",
       "published_at": "2026-10-09T06:10:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3e2ba8b9708eb479",
       "url": "https://english.almanar.com.lb/article/136087/",
       "published_at": "2026-10-08T15:56:58+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_a220c2e8064752f8",
       "url": "https://t.me/abualiexpress/131568",
       "published_at": "2026-10-08T12:18:52+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-10090641-02",
     "title": "התהפכות רכב צבאי ונפילת קצין צה\"ל בדרום לבנון",
     "summary": "קצין צה\"ל נהרג ושלושה חיילים נוספים נפצעו באורח קל בהתהפכות רכב צבאי במהלך פעילות מבצעית ברכס הליטאני.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T18:13:10+00:00",
     "last_update_at": "2026-10-08T18:59:17+00:00",
     "what_is_not_verified": "נסיבות טכניות מדויקות של התאונה אינן מפורטות מעבר לדיווח הרשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_83a98d7f67ae33ef",
       "url": "https://english.almanar.com.lb/article/136132/",
       "published_at": "2026-10-08T18:59:17+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_4937062bec5c9ae3",
       "url": "https://www.walla.co.il/news/military/383956794",
       "published_at": "2026-10-08T18:16:13+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_83a98d7f67ae33ef",
       "url": "https://t.me/abualiexpress/131593",
       "published_at": "2026-10-08T18:13:36+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_83a98d7f67ae33ef",
       "url": "https://t.me/lelotsenzura/94558",
       "published_at": "2026-10-08T18:13:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10090641-03",
     "title": "כניסת כוחות צה\"ל ופעילות קרקעית באזור קוניטרה",
     "summary": "כוחות צה\"ל ביצעו פעילות קרקעית שכללה חסימת צירים, הצבת אוהלים, ירי ואש לעבר רועי צאן ופציעת אדם באזור קוניטרה שבסוריה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T17:37:28+00:00",
     "last_update_at": "2026-10-08T17:37:28+00:00",
     "what_is_not_verified": "זהותם המדויקת של כל הנפגעים וההיקף המלא של הפעילות אינם מאומתים ממקור רשמי ישראלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_b2b48eaf5e609c90",
       "url": "https://english.enabbaladi.net/archives/2026/10/israeli-army-advances-into-quneitra-and-closes-roads/",
       "published_at": "2026-10-08T17:37:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10090641-04",
     "title": "פגישת שרי חוץ ומודיעין של טורקיה וסוריה באנקרה",
     "summary": "ראש ארגון הביון הטורקי ושר החוץ הטורקי נפגשו באנקרה עם שר החוץ הסורי לדיון בשיתוף פעולה ביטחוני ויציבות אזורית.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T19:07:17+00:00",
     "last_update_at": "2026-10-08T20:47:00+00:00",
     "what_is_not_verified": "סיכומי ההבנות המלאים והסכמים מעשיים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "fh_8cebd266c9176a47",
       "url": "https://www.dailysabah.com/politics/diplomacy/turkish-intelligence-chief-discusses-sdf-integration-with-syrian-fm",
       "published_at": "2026-10-08T20:47:00+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_47fdacbe00f583d6",
       "url": "https://www.aa.com.tr/en/middle-east/turkiyes-intelligence-chief-meets-syrian-foreign-minister-in-ankara/4082808",
       "published_at": "2026-10-08T20:41:44+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_dd675990dcdc18d3",
       "url": "https://www.aa.com.tr/en/turkiye/turkish-syrian-foreign-ministers-meet-in-ankara/4082732",
       "published_at": "2026-10-08T19:07:17+00:00"
      }
     ],
     "places": [
      {
       "name": "אנקרה",
       "lat": 39.9208,
       "lon": 32.854
      }
     ]
    }
   ],
   "not_verified": [
    "היקף ההעברה הכספית מאיראן לחיזבאללה בסך מעל 200 מיליון דולר",
    "קיומם של מגעים רשמיים לשליחת כוחות סורים לתימן",
    "פרטי ההסכמות האפשריות בין ממשלת סוריה לטורקיה בפגישה באנקרה"
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
     "value": 3.0773,
     "unit": "ILS",
     "change_pct": 0.31,
     "source_id": "src_ecb",
     "as_of": "2026-10-08T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "שמירה על שגרת הגנה וסיכול איומי אויב בגבול הצפון",
      "מניעת התבססות עוינת במרחב הגבול בלבנון ובסוריה"
     ],
     "forecast": [
      "המשך פעילות מבצעית ושחיקה פוטנציאלית בשגרת ההגנה",
      "תגובות נקודתיות על כל הפרה במרחב הגבול"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "תמיכה בלחימה למען עזה"
     ],
     "inferred": [
      "שיקום תשתיות ויכולות אזרחיות וצבאיות חרף הלחץ הצבאי והפוליטי",
      "שימור מעמדו כגורם הדומיננטי בזירה השיעית בלבנון"
     ],
     "forecast": [
      "ניסיונות להשתמש בסיוע כלכלי חיצוני לחיזוק בסיס התמיכה שלו",
      "המשך עימות שקט ומדוד מול ישראל ומדינת לבנון"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [],
     "inferred": [
      "חיזוק קשרים ביטחוניים ומדיניים עם שחקנים אזוריים כמו טורקיה",
      "שיקום תשתיות פנימיות והתמודדות עם אתגרים ביטחוניים מבית"
     ],
     "forecast": [
      "העמקת התיאום הביטחוני עם טורקיה",
      "המשך ניסיונות לייצב את השלטון החדש בדמשק"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/136132/",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/turkiye/turkish-syrian-foreign-ministers-meet-in-ankara/4082732",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/diplomacy/turkish-intelligence-chief-discusses-sdf-integration-with-syrian-fm",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/israeli-army-advances-into-quneitra-and-closes-roads/",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131593",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94558",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956794",
     "accessed_at": "2026-10-09T06:41:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T23:57:53+00:00",
  "changes": {
   "NORTH-10090641-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפות והפגזות ישראליות במספר מוקדים בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10090641-02": {
    "kind": "possible",
    "prev": "שיגור מיירט לעבר מטרת שווא בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10090641-03": {
    "kind": "new"
   },
   "NORTH-10090641-04": {
    "kind": "new"
   }
  }
 }
};
