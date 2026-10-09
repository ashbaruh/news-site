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
  "draft": "drafts/iran/2026-10-09T0240__iran-202610090240.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-09T02:40:28+00:00",
   "window": {
    "from": "2026-10-08T02:40:28+00:00",
    "to": "2026-10-09T02:40:28+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610090240"
   },
   "summary": "הזירה מאופיינת במתיחות צבאית וכלכלית בין איראן ושלחותיה לבין ארה\"ב וישראל, לצד לחץ כלכלי כבד הכולל סנקציות חדשות על צי הצללים האיראני. ארה\"ב מאותתת על דחיית פעולות צבאיות נרחבות עד לאחר בחירות האמצע בנובמבר ומקיימת ערוצי שיח, בעוד איראן ממשיכה להפעיל את שלוחותיה במפרץ ובלבנון ומהדקת קשרים דיפלומטיים עם רוסיה.",
   "fronts": [
    {
     "name": "החזית הימית ומפרץ הורמוז",
     "status": "פעילה עם אירועי תקיפה ומאבק על נתיבי אנרגיה"
    },
    {
     "name": "חזית שלוחות איראן (תימן)",
     "status": "פעילה הכוללת ירי טילים לעבר סעודיה"
    },
    {
     "name": "החזית הדיפלומטית והכלכלית",
     "status": "החמרת סנקציות אמריקניות ושיחות בהשתתפות רוסיה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10090240-01",
     "title": "תקיפה בנמל התעופה בריאד",
     "summary": "החותים הודיעו כי תקפו באמצעות טיל בליסטי את נמל התעופה בבירת סעודיה, וסעודיה אישרה הרוגים ופיצוצים",
     "axis": "ציר איראן-שלוחות מול סעודיה וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T03:02:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T03:02:35+00:00",
     "last_update_at": "2026-10-09T02:28:58+00:00",
     "what_is_not_verified": "טענת החות'ים על פגיעה במטוס ונזק כבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
       "published_at": "2026-10-09T02:28:58+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261008-diplomats-school-pupils-take-shelter-in-saudi-capital-as-yemen-s-houthis-step-up-attacks",
       "published_at": "2026-10-08T09:20:46+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261008-saudi-arabia-strikes-deadly-houthi-attacks-airports",
       "published_at": "2026-10-08T03:02:35+00:00"
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
     "id": "IRAN-10090240-02",
     "title": "חזרתה של נושאת המטוסים לינקולן",
     "summary": "נושאת המטוסים האמריקנית אברהם לינקולן חזרה לבסיסה לאחר פריסה ממושכת במסגרת העימות עם איראן",
     "axis": "ארה\"ב מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T22:54:48+00:00",
     "last_update_at": "2026-10-09T00:39:20+00:00",
     "what_is_not_verified": "פרטים מדויקים על מצב הלחימה הימית בתוך הפריסה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/9/uss-lincoln-returns-to-us-after-long-deployment-supporting-war-on-iran?traffic_source=rss",
       "published_at": "2026-10-09T00:39:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uss-abraham-lincoln-returns-san-diego-after-deployment-during-war-iran",
       "published_at": "2026-10-08T23:53:56+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21586184",
       "published_at": "2026-10-08T22:54:48+00:00"
      }
     ],
     "places": [
      {
       "name": "סן דייגו, ארה\"ב",
       "lat": 32.7157,
       "lon": -117.1638
      }
     ]
    },
    {
     "id": "IRAN-10090240-03",
     "title": "פיצוצים במצר הורמוז",
     "summary": "כלי תקשורת איראניים דיווחו על פיצוצים עזים בדרום מצר הורמוז, בהסתמך על מקורות צבאיים",
     "axis": "ארה\"ב וישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-09T00:00:21+00:00",
     "last_update_at": "2026-10-09T00:00:21+00:00",
     "what_is_not_verified": "מקור הפיצוצים ונזק מדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/9/iran-war-live-iranian-media-reports-massive-explosions-in-hormuz-strait?traffic_source=rss",
       "published_at": "2026-10-09T00:00:21+00:00"
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
     "id": "IRAN-10090240-04",
     "title": "הטלת סנקציות חדשות על צי הצללים האיראני",
     "summary": "משרד האוצר האמריקני הכריז על עיצומים נגד גופים, רשתות ו-17 כלי שיט המעורבים בהעברת נפט איראני",
     "axis": "ארה\"ב מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T17:25:00+00:00",
     "last_update_at": "2026-10-08T18:30:26+00:00",
     "what_is_not_verified": "ההשפעה המדויקת של הסנקציות על הכלכלה האיראנית בטווח הקצר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_67cc0653659b5cf0",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21584897",
       "published_at": "2026-10-08T18:30:26+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_d931a7cffaca6d9f",
       "url": "https://www.al-monitor.com/originals/2026/10/us-imposes-fresh-sanctions-irans-shadow-fleet",
       "published_at": "2026-10-08T17:46:31+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_f97a730bba4e3cb7",
       "url": "https://www.iranintl.com/en/202610085342",
       "published_at": "2026-10-08T17:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-10090240-05",
     "title": "פגישה בין נשיאי רוסיה ואיראן בטורקמניסטן",
     "summary": "נשיא איראן ונשיא רוסיה נפגשו בטורקמניסטן לקראת פסגה אזורית, ורוסיה הבטיחה לסייע בסיום המלחמה",
     "axis": "איראן ורוסיה מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T18:37:59+00:00",
     "last_update_at": "2026-10-08T22:30:37+00:00",
     "what_is_not_verified": "תוצאות מעשיות של ההבטחה הרוסית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_7d641ff7432c0463",
       "url": "https://www.aljazeera.com/news/2026/10/8/putin-pledges-russias-support-to-end-us-led-war-on-iran?traffic_source=rss",
       "published_at": "2026-10-08T22:30:37+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_7d641ff7432c0463",
       "url": "https://www.al-monitor.com/originals/2026/10/putin-offers-help-iran-end-middle-east-war-ahead-cis-summit",
       "published_at": "2026-10-08T20:30:24+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_7d641ff7432c0463",
       "url": "https://en.irna.ir/news/86287262/Pezeshkian-meets-Putin-in-Turkmenistan",
       "published_at": "2026-10-08T18:37:59+00:00"
      }
     ],
     "places": [
      {
       "name": "אבאזה, טורקמניסטן",
       "lat": 39.9658,
       "lon": 52.8645
      }
     ]
    },
    {
     "id": "IRAN-10090240-06",
     "title": "הצהרת טראמפ על אי-תקיפה לפני הבחירות",
     "summary": "נשיא ארצות הברית דונלד טראמפ הודיע כי ארה\"ב לא תתקוף את איראן טרם בחירות האמצע בנובמבר, וציין כי מתנהלות שיחות",
     "axis": "ארה\"ב מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T16:23:18+00:00",
     "last_update_at": "2026-10-08T21:57:10+00:00",
     "what_is_not_verified": "טיב השיחות המוזכרות והאם אכן תתבצע מתקפה לאחריהן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_ed0bbad8a32cadfb",
       "url": "https://www.iranintl.com/en/202610086381",
       "published_at": "2026-10-08T21:57:10+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_a09ad7f6bd6741f9",
       "url": "https://www.al-monitor.com/originals/2026/10/trump-rules-out-new-iran-attack-us-midterm-elections",
       "published_at": "2026-10-08T21:30:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_91e7a02870461d59",
       "url": "https://www.middleeasteye.net/news/trump-rules-out-new-attack-iran-until-after-midterms-oil-prices-spike",
       "published_at": "2026-10-08T20:40:54+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_ed0bbad8a32cadfb",
       "url": "https://t.me/alexmehacarmel/48364",
       "published_at": "2026-10-08T16:33:59+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_ed0bbad8a32cadfb",
       "url": "https://t.me/abualiexpress/131587",
       "published_at": "2026-10-08T16:28:37+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_be2af3b7670f08ae",
       "url": "https://www.maariv.co.il/breaking-news/article-1375124",
       "published_at": "2026-10-08T16:23:18+00:00"
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
    "טענות החות'ים על פגיעה במטוס ונזק בריאד",
    "קיומן של שיחות פוריות אמיתיות בין ארה\"ב לאיראן לפי טראמפ",
    "תוכניות הפנטגון המדויקות לתקיפה שנדחו",
    "מעורבות איראנית ישירה במזימת טרור נגד בסיס בריטי"
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
     "actor": "איראן",
     "declared": [
      "שמירה על אבטחת המפרץ ומצר הורמוז כקו אדום",
      "התנגדות לנוכחות זרה באזור"
     ],
     "inferred": [
      "המשך הפעלת לחץ באמצעות שלוחות אזוריות",
      "עקפה את הסנקציות באמצעות צי צללים ויצוא אנרגיה עוקף"
     ],
     "forecast": [
      "המשך תיאום מדיני וצבאי עם רוסיה",
      "היערכות לעימות ממושך לאחר תום הבחירות בארה\"ב"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת נשק גרעיני מאיראן",
      "הימנעות מתקיפה באיראן לפני בחירות האמצע בנובמבר"
     ],
     "inferred": [
      "החמרת הלחץ הכלכלי באמצעות סנקציות כדי לייבש את מימון משמרות המהפכה",
      "שמירת אופציה צבאית להמשך"
     ],
     "forecast": [
      "חידוש התוכניות הצבאיות לאחר בחירות האמצע",
      "המשך אבטחת נתיבי השיט במפרץ"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות איראנית ושלוחותיה",
      "התרעה מפני השלכות ביטחוניות ופוליטיות של עימות חזיתי נוסף"
     ],
     "inferred": [
      "שמירה על כוננות גבוהה מול אפשרות הסלמה אזורית",
      "תיאום הדוק עם הממשל בארה\"ב"
     ],
     "forecast": [
      "המשך היערכות מבצעית של חיל האוויר והמודיעין",
      "מעקב אחר מגעים דיפלומטיים בין ארה\"ב לאיראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/8/putin-pledges-russias-support-to-end-us-led-war-on-iran?traffic_source=rss",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/trump-rules-out-new-iran-attack-us-midterm-elections",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261008-saudi-arabia-strikes-deadly-houthi-attacks-airports",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/09/riyadh-airport-flights-suspended-houthis-claim-attack",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610086381",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86287262/Pezeshkian-meets-Putin-in-Turkmenistan",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21584897",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1375124",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/trump-rules-out-new-attack-iran-until-after-midterms-oil-prices-spike",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131587",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48364",
     "accessed_at": "2026-10-09T02:40:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-08T06:35:12+00:00",
  "changes": {
   "IRAN-10090240-01": {
    "kind": "possible",
    "prev": "חידוש טיסות בינלאומיות בנמל התעופה הבינלאומי חומייני בטהראן",
    "score": 0.467
   },
   "IRAN-10090240-02": {
    "kind": "new"
   },
   "IRAN-10090240-03": {
    "kind": "possible",
    "prev": "פגיעה במכלית נפט מול חופי קטאר ועליות בהתקפות במצרי הורמוז",
    "score": 0.633
   },
   "IRAN-10090240-04": {
    "kind": "new"
   },
   "IRAN-10090240-05": {
    "kind": "new"
   },
   "IRAN-10090240-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-08T2345__ukraine-202610082345.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-08T23:45:41+00:00",
   "window": {
    "from": "2026-10-07T23:45:41+00:00",
    "to": "2026-10-08T23:45:41+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610082345"
   },
   "summary": "הלחימה באוקראינה נמשכת ביתר שאת, כאשר רוסיה מגבירה את התקיפות האוויריות על תשתיות אזרחיות, מרכזי נתונים ואזורים עירוניים כמו קייב, פרילוקי וקראמטורסק, מה שמאלץ רשויות להמליץ על היערכות לחורף קשה. במקביל, אוקראינה מגיבה בתקיפות נגד מתקנים דיגיטליים בשטח רוסיה, ממשיכה לקבל סיוע הומניטרי וצבאי מבעלות בריתה המערביות, ומנהלת מגעים דיפלומטיים עם שליחי ארצות הברית בנוגע לאפשרויות הסעה והפסקת אש סקטוריאלית.",
   "fronts": [
    {
     "name": "החזית המזרחית (דונצק / קראמטורסק)",
     "status": "פעילה ואינטנסיבית עם הפצצות אוויריות"
    },
    {
     "name": "חזית העורף והתשתיות (קייב ופרילוקי)",
     "status": "נתונה למתקפות טילים וכטב\"מים חוזרות ונשנות"
    },
    {
     "name": "החזית הדיגיטלית והעורף הרוסי (ריאזאן / בלגורוד)",
     "status": "תחת מתקפות כטב\"מים אוקראיניות ממוקדות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10082345-01",
     "title": "מתקפת טילים ורחפנים רוסית בקראמטורסק ובפרילוקי",
     "summary": "מתקפות אוויריות של רוסיה פגעו באוטובוסים ובבניין מגורים, וגרמו לעשראת הרוגים ופצועים",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T02:02:33+00:00",
     "last_update_at": "2026-10-08T23:42:44+00:00",
     "what_is_not_verified": "מספר נפגעים מדויק סופי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/09/ukraine-war-briefing-zelenskyy-criticises-us-calls-for-more-starlink-access-amid-deadly-russian-assault",
       "published_at": "2026-10-08T23:42:44+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/08/russia-called-its-strikes-on-ukrainian-data-centers-a-forced-digital-detox-zelensky-says-kyiv-has-answered-by-hitting-a-data-center-belonging-to-russian-tech-giant-yandex",
       "published_at": "2026-10-08T20:51:37+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/08/russian-missile-strike-on-apartment-building-in-pryluky-northern-ukraine-kills-22-people-including-five-children",
       "published_at": "2026-10-08T18:24:27+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c875pwq134l3o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-08T16:31:29+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/08/russian-attack-buses-ukraine-frontline-kramatorsk",
       "published_at": "2026-10-08T14:00:05+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/08/ukraine-war-briefing-zelenskyy-condemns-vile-attacks-from-russia-that-killed-20-in-one-apartment",
       "published_at": "2026-10-08T02:02:33+00:00"
      }
     ],
     "places": [
      {
       "name": "קראמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      },
      {
       "name": "פרילוקי, אוקראינה",
       "lat": 50.5951,
       "lon": 32.3867
      }
     ]
    },
    {
     "id": "UKRAINE-10082345-02",
     "title": "תקיפת כטב\"ם אוקראיני על מרכז מידע בריאזאן",
     "summary": "כוחות אוקראיניים תקפו באמצעות רחפן מרכז נתונים של יאנדקס ברוסיה, דבר שגרם לשריפה ולהשבתת מערכות",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T02:54:28+00:00",
     "last_update_at": "2026-10-08T20:51:37+00:00",
     "what_is_not_verified": "היקף הנזק המלא לציוד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_rbc",
       "url": "https://meduza.io/en/news/2026/10/08/russia-called-its-strikes-on-ukrainian-data-centers-a-forced-digital-detox-zelensky-says-kyiv-has-answered-by-hitting-a-data-center-belonging-to-russian-tech-giant-yandex",
       "published_at": "2026-10-08T20:51:37+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_rbc",
       "url": "https://www.ukrinform.net/rubric-ato/4172513-zelensky-strike-on-yandex-data-center-was-a-mirror-response-to-russias-actions.html",
       "published_at": "2026-10-08T19:43:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_rbc",
       "url": "https://kyivindependent.com/we-always-respond-in-kind-zelensky-addresses-ukrainian-attacks-on-russian-data-center/",
       "published_at": "2026-10-08T19:15:07+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_rbc",
       "url": "https://t.me/alexmehacarmel/48352",
       "published_at": "2026-10-08T02:54:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10082345-03",
     "title": "מעצר איש צבא אוקראיני שמסר מידע לרוסיה",
     "summary": "שירות הביטחון של אוקראינה עצר איש צבא שערק ומסר מיקומים של יחידות צבא אוקראיניות למודיעין הרוסי",
     "axis": "חזית פנים וריגול",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T22:28:00+00:00",
     "last_update_at": "2026-10-08T22:28:00+00:00",
     "what_is_not_verified": "זהות המפעילים המלאה ברוסיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_sbu",
       "url": "https://www.ukrinform.net/rubric-crime/4172315-serviceman-recruited-by-russia-while-awol-detained-for-directing-strikes-on-ukrainian-forces.html",
       "published_at": "2026-10-08T22:28:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10082345-04",
     "title": "סיוע צבאי והבטחת תמיכה חורפית מבריטניה",
     "summary": "בריטניה הכריזה על חבילת סיוע בסך 54 מיליון ליש\"ט לחיזוק עמידותה האנרגטית וההומניטרית של אוקראינה לקראת החורף",
     "axis": "סיוע צבאי וכלכלי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T18:05:00+00:00",
     "last_update_at": "2026-10-08T20:21:00+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק למימוש כלל הסכומים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-economy/4172516-uk-to-provide-gbp-54m-in-winter-support-to-ukraine.html",
       "published_at": "2026-10-08T20:21:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/08/8057121/",
       "published_at": "2026-10-08T18:05:00+00:00"
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
     "id": "UKRAINE-10082345-05",
     "title": "פגישות משלחת אוקראינה עם שליחי ארה\"ב",
     "summary": "נציגים אוקראינים צפויים לקיים פגישות עם שליחי נשיא ארה\"ב כדי לדון ברעיונות להסדר והפסקת אש סקטוריאלית",
     "axis": "משא ומתן דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T18:33:00+00:00",
     "last_update_at": "2026-10-08T22:57:01+00:00",
     "what_is_not_verified": "תוצאות המפגשים והיתכנות ההסכמות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2199605",
       "published_at": "2026-10-08T22:57:01+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2199585",
       "published_at": "2026-10-08T20:32:01+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-sends-delegation-to-meet-trump-envoys-as-he-hints-at-secret-us-russia-economic-talks/",
       "published_at": "2026-10-08T18:37:08+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/08/8057127/",
       "published_at": "2026-10-08T18:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מיאמי, ארצות הברית",
       "lat": 25.7742,
       "lon": -80.1936
      }
     ]
    },
    {
     "id": "UKRAINE-10082345-06",
     "title": "משבר דיפלומטי בין דרום קוריאה לאוקראינה עקב העברת שבויים",
     "summary": "דרום קוריאה החזירה את שגרירה מאוקראינה להתייעצויות בעקבות חשיפת העברתם של שני חיילים צפון-קוריאנים שנשבו",
     "axis": "דיפלומטיה עולמית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T15:03:07+00:00",
     "last_update_at": "2026-10-08T16:23:09+00:00",
     "what_is_not_verified": "האם הוסכם בעבר על סודיות מוחלטת בנושא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckwy48rrz95vo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-08T16:23:09+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48361",
       "published_at": "2026-10-08T15:03:07+00:00"
      }
     ],
     "places": [
      {
       "name": "סיאול, דרום קוריאה",
       "lat": 37.5667,
       "lon": 126.9783
      },
      {
       "name": "קורסק, רוסיה",
       "lat": 51.727,
       "lon": 36.1922
      }
     ]
    },
    {
     "id": "UKRAINE-10082345-07",
     "title": "הרחבת הכשרת מפעילים צעירים לרחפנים ברוסיה",
     "summary": "רוסיה מקדמת הכנסת תקן ותוכנית לימודים להפעלת רחפנים במוסדות חינוך בכ-70 מחוזות במדינה",
     "axis": "הכנה צבאית ועורף",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-08T17:35:15+00:00",
     "last_update_at": "2026-10-08T17:35:15+00:00",
     "what_is_not_verified": "ההיקף המעשה המלא של יישום התוכנית בבתי הספר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48367",
       "published_at": "2026-10-08T17:35:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10082345-08",
     "title": "הכשרת טייסים אוקראינים על מטוסי רפאל בצרפת",
     "summary": "שרת ההגנה של צרפת הודיעה כי הכשרת טייסים אוקראינים להטסת מטוסי קרב מסוג רפאל תחל בצרפת בחודש נובמבר",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-08T17:41:00+00:00",
     "last_update_at": "2026-10-08T17:41:00+00:00",
     "what_is_not_verified": "תאריך המסירה המדויק של המטוסים עצמם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/08/8057117/",
       "published_at": "2026-10-08T17:41:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על היקף הנזק המדויק במרכז הנתונים ביאנדקס בריאזאן",
    "האם הושגה התחייבות רשמית קודמת לסודיות בין סאול לקייב סביב העברת השבויים הצפון-קוריאנים",
    "ההיתכנות והסיכויים להשגת פריצת דרך דיפלומטית אמריקאית-רוסית-אוקראינית לפני בחירות הביניים בקונגרס"
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
     "value": 1.1186,
     "unit": "USD",
     "change_pct": 0.08,
     "source_id": "src_ecb",
     "as_of": "2026-10-08T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "השתלטות על מלוא השטח של מחוז דונצק"
     ],
     "inferred": [
      "שחיקת התשתיות הקריטיות ואספקת החשמל והמים באוקראינה כדי שתושבים יעזבו וישברו את עמידות העורף",
      "פגיעה ביכולות הדיגיטליות והלוגיסטיות של אוקראינה"
     ],
     "forecast": [
      "המשך לחץ אווירי והפצצות ממוקד לקראת החורף",
      "הרחבת תוכניות ההכשרה הצבאיות לדור הצעיר ברוסיה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שמי המדינה, קבלת גישה מורחבת לשירותי סטאלינק לפגיעה במרגמות וטילים בלסטיים",
      "דחיית כל הסדר מדיני המבוסס על מסירת שטחים ריבוניים"
     ],
     "inferred": [
      "יצירת הרתעה באמצעות תגובות מראה על תשתיות ומרכזי נתונים בשטח רוסיה",
      "הגברת הלחץ הבינלאומי והדרישה להחמרת סנקציות על רוסיה בעזרת מעורבות אירופית ואמריקאית"
     ],
     "forecast": [
      "המשך שיתופי פעולה צבאיים עם אירופה וארה\"ב כולל הכשרת טייסים",
      "התמודדות קשה עם משברי אנרגיה ומים צפויים בחורף"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckwy48rrz95vo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/08/ukraine-war-briefing-zelenskyy-condemns-vile-attacks-from-russia-that-killed-20-in-one-apartment",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/zelensky-sends-delegation-to-meet-trump-envoys-as-he-hints-at-secret-us-russia-economic-talks/",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/08/russia-called-its-strikes-on-ukrainian-data-centers-a-forced-digital-detox-zelensky-says-kyiv-has-answered-by-hitting-a-data-center-belonging-to-russian-tech-giant-yandex",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/08/8057117/",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2199585",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48367",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-economy/4172516-uk-to-provide-gbp-54m-in-winter-support-to-ukraine.html",
     "accessed_at": "2026-10-08T23:45:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-07T23:40:27+00:00",
  "changes": {
   "UKRAINE-10082345-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים רוסית קטלנית על בניין מגורים בפרילוקי",
    "score": 1.0
   },
   "UKRAINE-10082345-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפת כטב\"ם אוקראיני על רכב במחוז חרסון",
    "score": 0.65
   },
   "UKRAINE-10082345-03": {
    "kind": "new"
   },
   "UKRAINE-10082345-04": {
    "kind": "new"
   },
   "UKRAINE-10082345-05": {
    "kind": "new"
   },
   "UKRAINE-10082345-06": {
    "kind": "new"
   },
   "UKRAINE-10082345-07": {
    "kind": "possible",
    "prev": "הסכמת שגרירי האיחוד האירופי להרחבת משטר הסנקציות על רוסיה",
    "score": 0.467
   },
   "UKRAINE-10082345-08": {
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
