/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-26T0040__yemen-202610260040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-26T00:40:18+00:00",
   "window": {
    "from": "2026-10-25T00:40:18+00:00",
    "to": "2026-10-26T00:40:18+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610260040"
   },
   "summary": "הלחימה בין החות'ים לבין סעודיה וממשלת תימן התחדשה בעצימות גבוהה לאחר קריסת הפסקת האש שנמשכה שנים. החות'ים מנהלים מתקפות טילים וכטבמים נרחבות לעבר עומק סעודיה, ובפרט נגד נמל התעופה הבינלאומי בריאד ויעדים בדרום הממלכה, לצד תקיפות פנים-תימניות בתעז ובעדן. במקביל, כוחות ממשלת תימן והקואליציה פועלים ליירוט השיגורים ולפגיעה במערכי החות'ים, כאשר ההסלמה גורמת לשיבוש התעופה, ביטול אירועים בינלאומיים ופינוי דיפלומטים זרים.",
   "fronts": [
    {
     "name": "חזית תימן - סעודיה (ריאד ודרום הממלכה)",
     "status": "הסלמה חריפה הכוללת שיגורי מטחי טילים בליסטיים וכטבמים לעבר נמל התעופה בריאד, ח'מיס מושייט ואזורים נוספים, לצד יירוטים של הקואליציה."
    },
    {
     "name": "חזית פנים תימן (תעז, עדן ושבווה)",
     "status": "לחימה פעילה הכוללת מצור והפגזות על תעז, שיגור טילים לעבר עדן ופעילות סיכול של צבא תימן בשבווה ובמוקדים נוספים."
    }
   ],
   "events": [
    {
     "id": "YEMEN-10260040-01",
     "title": "מתקפת טילים וכטבמים של החות'ים לעבר נמל התעופה בריאד ויעדים בדרום סעודיה",
     "summary": "החות'ים שיגרו מטחי טילים בליסטיים וכטבמים לעבר נמל התעופה הבינלאומי בריאד ולעבר יעדים בדרום סעודיה שעות לאחר שחודשו בו טיסות. הקואליציה הודיעה על יירוט לפחות עשרה טילים בליסטיים וכטבם, בעוד דובר החות'ים הכריז כי נמל התעופה מהווה מטרה צבאית והזהיר חברות תעופה מהגעה אליו.",
     "axis": "סעודיה - תימן (החות'ים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T00:46:40+00:00",
     "last_update_at": "2026-10-25T19:21:01+00:00",
     "what_is_not_verified": "החות'ים טענו כי המתקפה השיגה את מטרתה ופגעה בנמל התעופה, בעוד הקואליציה דיווחה על יירוטים נרחבים; בנוסף, יש פער בדיווחים על מספר הנפגעים במתקפה הקודמת בתחילת החודש (13 לעומת 17 הרוגים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-attacked-riyadh-airport-hours-after-flights-resume",
       "published_at": "2026-10-25T19:21:01+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/houthis-say-attacked-riyadh-airport-hours-after-flights-resume",
       "published_at": "2026-10-25T15:30:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-fire-missiles-saudi-arabia-riyadh-airport-reopens",
       "published_at": "2026-10-25T12:44:47+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-downs-10-houthi-missiles-riyadh-airport-reopens",
       "published_at": "2026-10-25T09:27:31+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/riyadh-airport-resumes-flights-following-houthi-attacks",
       "published_at": "2026-10-25T03:30:34+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudis-say-riyadh-airport-partly-reopens-despite-renewed-houthi-threats",
       "published_at": "2026-10-25T00:46:40+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ח'מיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10260040-02",
     "title": "ממשלת תימן גינתה תקיפות חות'יות לעבר מכה ואל-מדינה",
     "summary": "משרד החוץ של ממשלת תימן המוכרת גינה שיגור של שני טילים בליסטיים לעבר אזורי מכה ואל-מדינה, וכן גינה פגיעה באזרחים וברכוש בערים ח'מיס מושייט ואחד רפידה בסעודיה.",
     "axis": "ממשלת תימן - החות'ים / סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T19:20:22+00:00",
     "last_update_at": "2026-10-25T22:38:05+00:00",
     "what_is_not_verified": "אין אימות עצמאי לשיגור בפועל של טילים ספציפית לעבר מכה ואל-מדינה מלבד הודעת הגינוי של משרד החוץ התימני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5415275c831bea2a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-condemns-attacks-mecca-and-medina",
       "published_at": "2026-10-25T22:38:05+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0f874d239b480058",
       "url": "https://www.sabanew.net/viewstory/154621",
       "published_at": "2026-10-25T19:20:22+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      },
      {
       "name": "אל-מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      },
      {
       "name": "אחד רפידה, סעודיה",
       "lat": 18.1814,
       "lon": 42.8414
      }
     ]
    },
    {
     "id": "YEMEN-10260040-03",
     "title": "נפילת שני טילים חות'יים בסמוך למחנות עקורים בעדן",
     "summary": "שר ההסברה בממשלת תימן הודיע כי שני טילים ששיגרו החות'ים נפלו בקרבת מחנות עקורים בעיר עדן, והגדיר זאת כאיום חמור על חיי אזרחים.",
     "axis": "דרום תימן (עדן)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T22:19:15+00:00",
     "last_update_at": "2026-10-25T22:19:15+00:00",
     "what_is_not_verified": "פרטי הנזק או הנפגעים המדויקים כתוצאה מנפילת הטילים בעדן לא צוינו מעבר לכותרת ההודעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_8f6118b0b5769a07",
       "url": "https://www.sabanew.net/viewstory/154625",
       "published_at": "2026-10-25T22:19:15+00:00"
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
     "id": "YEMEN-10260040-04",
     "title": "פגיעות באזרחים במחוז תעז וקריאה של האפיפיור להסרת המצור",
     "summary": "הפגזות וירי של החות'ים גרמו לפציעת שני אזרחים באזור הכפרי של תעז ולהרג ילד בכפרי אלאקרוד בדרום המחוז. במקביל, האפיפיור לאו קרא לסיום האלימות בתימן והדגיש את המצור על תעז כאסון הומניטרי הגורם למחסור חמור במזון, במים ובתרופות, קריאה שממשלת תימן אימצה ובירכה עליה.",
     "axis": "פנים תימן (תעז)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T13:46:36+00:00",
     "last_update_at": "2026-10-25T22:38:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5415275c831bea2a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-condemns-attacks-mecca-and-medina",
       "published_at": "2026-10-25T22:38:05+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_b6926f8486324714",
       "url": "https://www.sabanew.net/viewstory/154620",
       "published_at": "2026-10-25T18:11:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_5415275c831bea2a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pope-calls-end-conflict-yemen",
       "published_at": "2026-10-25T15:44:17+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0d2f0e557255d324",
       "url": "https://www.sabanew.net/viewstory/154608",
       "published_at": "2026-10-25T14:32:23+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_5415275c831bea2a",
       "url": "https://www.al-monitor.com/originals/2026/10/pope-leo-calls-yemen-violence-end-address-two-weeks-after-surgery",
       "published_at": "2026-10-25T13:46:36+00:00"
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
     "id": "YEMEN-10260040-05",
     "title": "פעולות צבאיות ותפיסת אמצעי לחימה וחוליית חות'ים במחוז שבווה",
     "summary": "מושל מחוז שבווה הודיע על לכידת חוליית טרור חות'ית ותפיסת משלוח נשק וחומרי נפץ. במקביל, צבא תימן דיווח על ביצוע מאות פעולות תקיפה שבהן נוטרלו 218 חמושים חות'ים והושמדו או הושבתו עשרות כלי רכב וציוד צבאי.",
     "axis": "פנים תימן (שבווה וחזיתות הלחימה)",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T13:50:05+00:00",
     "last_update_at": "2026-10-25T17:16:30+00:00",
     "what_is_not_verified": "הנתונים על 753 פעולות ו-218 נפגעים מבוססים על הודעת צד אחד בלבד ולא אומתו על ידי מקורות בלתי תלויים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_a867f33c57922204",
       "url": "https://www.sabanew.net/viewstory/154617",
       "published_at": "2026-10-25T17:16:30+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6f7153edfcfea7ab",
       "url": "https://www.sabanew.net/viewstory/154603",
       "published_at": "2026-10-25T13:50:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10260040-06",
     "title": "השפעות ביטחוניות בינלאומיות של ההסלמה מול החות'ים",
     "summary": "מחלקת המדינה האמריקאית פינתה אנשי צוות מריאד ועדכנה אזהרות מסע ל-13 מדינות באזור בעקבות החשש מתקיפות חות'יות. בנוסף, מרוץ ראלי דקאר לשנת 2027 הועבר מסעודיה לאזור אחר בשל שיקולי ביטחון, לצד דחייה וביטול של אירועי ספורט בינלאומיים נוספים בממלכה.",
     "axis": "הזירה הבינלאומית והאזורית מול סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T13:33:53+00:00",
     "last_update_at": "2026-10-25T18:42:12+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjev9hs2zg",
       "published_at": "2026-10-25T18:42:12+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/dakar-rally-2027-will-not-be-held-saudi-arabia",
       "published_at": "2026-10-25T17:33:24+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-updates-travel-warnings-13-middle-eastern-countries",
       "published_at": "2026-10-25T13:33:53+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "טענת החות'ים כי המתקפה על נמל התעופה בריאד פגעה במטרתה, מול דיווחי הקואליציה על יירוט מלא של הטילים.",
    "הדיווחים של ממשלת תימן על שיגור טילים חות'יים ספציפית לעבר המקומות הקדושים במכה ובאל-מדינה.",
    "המספר המדויק של הנפגעים במתקפה הקודמת בנמל התעופה בריאד (דיווחים סותרים על 13 או 17 הרוגים).",
    "היקף הנפגעים והנזק מנפילת שני הטילים בסמוך למחנות העקורים בעדן.",
    "היקף הנפגעים החות'ים והאבדות בציוד שפרסם צבא תימן (218 פעילים ו-78 כלי רכב)."
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית (אנצאר אללה)",
     "declared": [
      "הפיכת נמל התעופה הבינלאומי בריאד למטרה צבאית בלתי בטוחה לשימוש.",
      "אזהרת חברות תעופה בין-לאומיות ומקומיות משימוש בנמלי תעופה בסעודיה."
     ],
     "inferred": [
      "שיבוש התנועה האווירית והכלכלה בסעודיה כדי ללחוץ על הקואליציה להפסיק את הפעולות נגדם.",
      "ביסוס הרתעה אזורית מול סעודיה וארצות הברית לאחר קריסת הפסקת האש."
     ],
     "forecast": [
      "המשך ניסיונות הפגיעה בתשתיות תעופה, תחבורה ונפט בעומק סעודיה בטווח הקרוב."
     ]
    },
    {
     "actor": "סעודיה והקואליציה הערבית",
     "declared": [
      "הגנה על שטח הממלכה ויירוט האיומים הבליסטיים וכלי הטיס של החות'ים.",
      "השבת הפעילות השגרתית בנמל התעופה בריאד."
     ],
     "inferred": [
      "מניעת פגיעה תדמיתית וכלכלית קשה והגנה על אירועים ומיזמים בינלאומיים בממלכה.",
      "הכלת האיום החות'י באמצעות מערכות הגנה אווירית ללא כניסה מחדש ללחימה קרקעית רחבה."
     ],
     "forecast": [
      "המשך עיבוי מערכי ההגנה האווירית סביב מתקנים אסטרטגיים וצמצום טיסות בעת התרעות."
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "קריאה לפעולה בינלאומית לסיום המצור של החות'ים על תעז והגנה על אזרחים.",
      "גינוי תקיפות החות'ים נגד ערים ומקומות קדושים בסעודיה."
     ],
     "inferred": [
      "גיוס לחץ דיפלומטי ובינלאומי נגד שלטון החות'ים כדי לקבל לגיטימציה וסיוע חיצוני.",
      "בלימת התפשטות החות'ים בדרום המדינה (עדן ושבווה) ודחיקתם בתעז."
     ],
     "forecast": [
      "הגברת הפעולות הצבאיות המקומיות לסיכול חוליות ואמצעי לחימה של החות'ים בחזיתות הפנימיות."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/pope-leo-calls-yemen-violence-end-address-two-weeks-after-surgery",
     "accessed_at": "2026-10-26T00:40:18+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pope-calls-end-conflict-yemen",
     "accessed_at": "2026-10-26T00:40:18+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/us-updates-travel-warnings-13-middle-eastern-countries",
     "accessed_at": "2026-10-26T00:40:18+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154603",
     "accessed_at": "2026-10-26T00:40:18+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjev9hs2zg",
     "accessed_at": "2026-10-26T00:40:18+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T03:40:27+00:00",
  "changes": {
   "YEMEN-10260040-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חידוש הטיסות בנמל התעופה הבינלאומי בריאד והתרעה חות'ית חוזרת",
    "score": 1.0
   },
   "YEMEN-10260040-02": {
    "kind": "new"
   },
   "YEMEN-10260040-03": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "מתקפות טילים על יעדים בעיר עדן",
    "score": 0.817
   },
   "YEMEN-10260040-04": {
    "kind": "possible",
    "prev": "התחדשות קרבות ועימותים בדרום-מערב תימן ובמחוז תעז",
    "score": 0.633
   },
   "YEMEN-10260040-05": {
    "kind": "new"
   },
   "YEMEN-10260040-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-25T1432__iran-202610251432.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-25T14:32:55+00:00",
   "window": {
    "from": "2026-10-24T14:32:55+00:00",
    "to": "2026-10-25T14:32:55+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610251432"
   },
   "summary": "העימות האזורי מתאפיין במתיחות גבוהה סביב תוכנית הגרעין האיראנית ואיומי תקיפה הדדיים בין ארה\"ב וישראל לבין טהרן, לצד המשך פעילות החות'ים נגד סעודיה ותקיפות נגד יעדים כרדיים בעיראק. במקביל, ישראל מתמודדת עם מערכת בחירות פנים-ישראלית שבה סוגיית איראן עומדת במרכז השיח, וכן עם עימות מתמשך ברצועת עזה הכולל סיכול מימון איראני לטרור.",
   "fronts": [
    {
     "name": "החזית האיראנית-ישראלית-אמריקאית",
     "status": "פעיל ומתוח"
    },
    {
     "name": "חזית המפרץ ותימן (החות'ים)",
     "status": "פעיל"
    },
    {
     "name": "החזית העיראקית והכורדית",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-10251432-01",
     "title": "תקיפה במל\"ט מתאבד על מחנה האופוזיציה הכրדית באיראן בעיראק",
     "summary": "כוחות האבטחה והתקשורת דיווחו על תקיפת מל\"ט מתאבד נגד מחנה אופוזיציה כרדי איראני בצפון-מזרח ארביל.",
     "axis": "איראן מול שלוחותיה והכוחות באזור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T05:20:56+00:00",
     "last_update_at": "2026-10-25T06:45:18+00:00",
     "what_is_not_verified": "זהות המפעילים המדויקת מלבד דיווחים על פעילות משמרות המהפכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_mehr_news_agency_and_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tehran-strikes-iranian-kurdish-base-iraq-drones-report-says",
       "published_at": "2026-10-25T06:45:18+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_mehr_news_agency_and_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-651",
       "published_at": "2026-10-25T06:33:05+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_mehr_news_agency_and_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosive-laden-drone-attacks-kurdish-opposition-camp",
       "published_at": "2026-10-25T05:20:56+00:00"
      }
     ],
     "places": [
      {
       "name": "ארביל, עיראק",
       "lat": 36.1912,
       "lon": 44.0094
      },
      {
       "name": "באליסאן, עיראק",
       "lat": 36.3965,
       "lon": 44.5485
      }
     ]
    },
    {
     "id": "IRAN-10251432-02",
     "title": "יירוט טילי בליסטיים ומל\"טים מעל ריאד ודרום סעודיה",
     "summary": "הקואליציה בהובלת סעודיה דיווחה על יירוט והשמדת טילים ומל\"טים ששוגרו על ידי החות'ים מתימן לעבר ריאד ואזורים דרומיים.",
     "axis": "החות'ים מול סעודיה והקואליציה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T00:46:40+00:00",
     "last_update_at": "2026-10-25T11:07:28+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף הנזק או הפגיעות בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.iranintl.com/en/202610253322",
       "published_at": "2026-10-25T11:07:28+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-651",
       "published_at": "2026-10-25T06:33:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-says-riyadh-airport-partly-reopens-despite-renewed-houthi-threats",
       "published_at": "2026-10-25T00:46:40+00:00"
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
     "id": "IRAN-10251432-03",
     "title": "אולטימטום מצד מחוז מייסאן בעיראק סביב סגירת מעבר הגבול עם איראן",
     "summary": "יושב ראש מועצת מחוז מייסאן הציב אולטימטום לממשלת עיראק לפתוח את מעבר אל-שיב, והזהיר מפני התנתקות ואי-ציות אזרחי.",
     "axis": "עיראק פנים וקשריה עם איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T13:47:26+00:00",
     "last_update_at": "2026-10-25T13:47:26+00:00",
     "what_is_not_verified": "תגובת הממשלה המרכזית בבגדאד לאולטימטום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48919",
       "published_at": "2026-10-25T13:47:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-04",
     "title": "כתם נפט בחופי איחוד האמירויות",
     "summary": "כתם נפט ממכלית נצפה בחופי איחוד האמירויות, מה שהוביל את הרשויות לסגור חופים באום אל-קיוין.",
     "axis": "המפרץ ומיצרי הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T12:05:16+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T12:05:16+00:00",
     "last_update_at": "2026-10-25T12:05:16+00:00",
     "what_is_not_verified": "מקור הדליפה המדויק והגורם האחראי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/25/oil-slick-from-tanker-in-hormuz-strait-washes-up-on-uae-beaches?traffic_source=rss",
       "published_at": "2026-10-25T12:05:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-05",
     "title": "דיווח על תוכניות תקיפה חדשות של פנטגון ו-CENTCOM נגד איראן",
     "summary": "גורמים דיווחו כי הפנטגון הכין תוכניות תקיפה חדשות נגד איראן להפעלה אפשרית לאחר בחירות אמצע הכהונה.",
     "axis": "ארה\"ב וישראל מול איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T11:39:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T11:39:41+00:00",
     "last_update_at": "2026-10-25T11:39:41+00:00",
     "what_is_not_verified": "האם הנשיא טראמפ יאשר את התוכניות בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/25/centcom-reportedly-has-plans-for-iran-strikes-will-trump-approve-them?traffic_source=rss",
       "published_at": "2026-10-25T11:39:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-06",
     "title": "אזהרת בכירים איראנים מפני פגיעה בדיפלומטים אמריקאים",
     "summary": "בכירים איראנים, בהם בכיר במשמרות המהפכה, מסרו כי חיסול בכירים איראנים הופך אנשי ממשל ודיפלומטים אמריקאים למטרות לגיטימיות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T08:20:39+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T08:20:39+00:00",
     "last_update_at": "2026-10-25T08:20:39+00:00",
     "what_is_not_verified": "האם קיימת פעילות מבצעית בפועל להוצאת איומים אלו לפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94792",
       "published_at": "2026-10-25T08:20:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-07",
     "title": "חיסול פעילי חמאס והג'יהאד האיסלאמי בעזה וסיכול מימון מאיראן וטורקיה",
     "summary": "צה\"ל ושב\"כ הודיעו על חיסול מחבלים שעסקו בהעברת מיליוני שקלים ממשטר איראן ומטורקיה לזרוע הצבאית של חמאס, וכן על השמדת מחסן אמל\"ח.",
     "axis": "ישראל מול חמאס והשלוחות האיראניות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T08:35:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T08:35:30+00:00",
     "last_update_at": "2026-10-25T09:09:34+00:00",
     "what_is_not_verified": "לא מאומת מלבד הודעת דובר צה\"ל ושב\"כ.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/by0bghi3fg",
       "published_at": "2026-10-25T09:09:34+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958784",
       "published_at": "2026-10-25T08:49:39+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132524",
       "published_at": "2026-10-25T08:43:30+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25461",
       "published_at": "2026-10-25T08:35:30+00:00"
      }
     ],
     "places": [
      {
       "name": "עיר עזה, עזה",
       "lat": 31.5117,
       "lon": 34.4821
      },
      {
       "name": "נוציראת, עזה",
       "lat": 31.4554,
       "lon": 34.401
      }
     ]
    }
   ],
   "not_verified": [
    "קיומן של תוכניות מבצעיות סופיות של ארה\"ב לתקיפה מיידית באיראן.",
    "היקף הנזק המדויק מכתם הנפט בחופי איחוד האמירויות.",
    "האם הממשלה המרכזית בעיראק תגיב לדרישות מחוז מייסאן בנוגע למעבר הגבול."
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על ריבונות אלדולה וכוננות עליונה",
      "דרישה לפינוי סנקציות"
     ],
     "inferred": [
      "המשך פיתוח יכולות צבאיות וגרעיניות",
      "הפעלת שלוחות אזוריות כדי להפעיל לחץ על ארה\"ב וישראל"
     ],
     "forecast": [
      "המשך איומים על אנשי ממשל אמריקאים ודיפלומטים",
      "שימור יכולת מיקוח סביב מיצר הורמוז"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת איום קיומי ואיום גרעיני מאיראן",
      "סיכול תשתיות הטרור והמימון של חמאס והציר השיעי"
     ],
     "inferred": [
      "שמירת אופציה צבאית התקפית בשיתוף ארה\"ב",
      "ניצול חלון הזמנים הנוכחי להסרת איומים"
     ],
     "forecast": [
      "הגברת הלחץ המדיני והביטחוני בהתאם לתוצאות הבחירות",
      "המשך סיכולים ממוקדים נגד צירים פיננסיים של חמאס"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הגנה על בעלות ברית במפרץ ובזירה",
      "מניעת השגת נשק גרעיני בידי איראן"
     ],
     "inferred": [
      "הכנת חלופות צבאיות למקרה של כישלון דיפלומטי",
      "היערכות להגנה על אנשיה מפני פגיעה מצד שלוחות איראן"
     ],
     "forecast": [
      "המשך הפעלת לחץ כלכלי ודיפלומטי",
      "שקילת תגובות צבאיות בהתאם להתפתחויות בשטח ובחירות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/25/centcom-reportedly-has-plans-for-iran-strikes-will-trump-approve-them?traffic_source=rss",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-says-riyadh-airport-partly-reopens-despite-renewed-houthi-threats",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610253322",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-651",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132524",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48919",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25461",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94792",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958784",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/by0bghi3fg",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T00:40:43+00:00",
  "changes": {
   "IRAN-10251432-01": {
    "kind": "possible",
    "prev": "הצהרות טראמפ על אפשרות לתקיפה באיראן או השגת הסכם",
    "score": 0.467
   },
   "IRAN-10251432-02": {
    "kind": "possible",
    "prev": "אזהרות ואיומים של החות'ים נגד נמל התעופה בריאד",
    "score": 0.633
   },
   "IRAN-10251432-03": {
    "kind": "same",
    "from": "assessment",
    "to": "initial",
    "prev": "דיווחים על טיסות ותקיפות במרחב האווירי של עיראק לעבר איראן",
    "score": 0.65
   },
   "IRAN-10251432-04": {
    "kind": "new"
   },
   "IRAN-10251432-05": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "השלמת תוכניות תקיפה בצבא ארצות הברית נגד איראן",
    "score": 0.65
   },
   "IRAN-10251432-06": {
    "kind": "new"
   },
   "IRAN-10251432-07": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-26T0341__ukraine-202610260341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-26T03:41:54+00:00",
   "window": {
    "from": "2026-10-25T03:41:54+00:00",
    "to": "2026-10-26T03:41:54+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610260341"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות תקיפות אוויריות, רחפנים ופגיעה בתשתיות, לצד מאמצים דיפלומטיים לקיום שיחות שלום משולשות בהשתתפות אוקראינה, רוסיה וארצות הברית. אוקראינה מתמודדת עם אתגרי אספקה וקישוריות אינטרנט לווייני, בעוד רוסיה ממשיכה לתקוף מטרות אזרחיות וצבאיות בשטח אוקראינה ומדווחת על יירוטי רחפנים נרחבים.",
   "fronts": [
    {
     "name": "חזית חארקוב",
     "status": "פעילה"
    },
    {
     "name": "חזית דרום אוקראינה (חרסון וזפוריז'יה)",
     "status": "פעילה"
    },
    {
     "name": "המרחב האווירי ועומק הרוסי",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10260341-01",
     "title": "הקמת מסדרון נגד רחפנים בחארקוב",
     "summary": "הותקנו רשתות נגד רחפנים לאורך מקטע של כביש בחארקוב.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:32:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T00:32:00+00:00",
     "last_update_at": "2026-10-26T00:32:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_2f2fda3a3e3da816",
       "url": "https://www.ukrinform.net/rubric-defense/4177991-kharkiv-establishes-first-antidrone-corridor.html",
       "published_at": "2026-10-26T00:32:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חארקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10260341-02",
     "title": "פגיעה באוטובוס בחרסון מתקיפת רחפן",
     "summary": "תקיפת רחפן רוסית פגעה באוטובוס בחרסון וגרמה למות אדם ולפצועים.",
     "axis": "רוסיה-אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T14:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T14:30:00+00:00",
     "last_update_at": "2026-10-25T14:30:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_19f396c655b44930",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059643/",
       "published_at": "2026-10-25T14:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-10260341-03",
     "title": "יירוט רחפנים מעל אזורים ברוסיה",
     "summary": "משרד ההגנה הרוסי דיווח על יירוט מספר רב של רחפנים אוקראיניים מעל שטחי רוסיה.",
     "axis": "רוסיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T07:11:26+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T07:11:26+00:00",
     "last_update_at": "2026-10-25T07:11:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_830b194613d0ad22",
       "url": "https://tass.com/defense/2207429",
       "published_at": "2026-10-25T07:11:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10260341-04",
     "title": "החזרת פעילות מערכת סטארשילד למהירות רגילה",
     "summary": "נשיא אוקראינה אישר כי פעילות סטארשילד חזרה למהירותה הרגילה לאחר הגבלות קודמות.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T19:02:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T19:02:26+00:00",
     "last_update_at": "2026-10-26T01:27:47+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_volodymyr_zelenskyy_interview",
       "url": "https://www.theguardian.com/world/2026/oct/26/ukraine-war-briefing-trilateral-us-ukraine-russia-talks-restart-november",
       "published_at": "2026-10-26T01:27:47+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_volodymyr_zelenskyy_interview",
       "url": "https://kyivindependent.com/ukraine-war-latest-starshield-operations-restored-to-normal-speed-zelensky-confirms-as-elon-musk-claims-ukraine-violated-starlink-terms/",
       "published_at": "2026-10-25T19:02:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10260341-05",
     "title": "תקיפות והרוגים באזורים שונים באוקראינה",
     "summary": "תקיפות של כוחות רוסיים גרמו להרוגים ולפצועים באזורים שונים באוקראינה, כולל דניפרופטרובסק וסומי.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T02:37:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T02:37:44+00:00",
     "last_update_at": "2026-10-25T03:41:54+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_ukrainian_regional_governors",
       "url": "https://www.theguardian.com/world/2026/oct/25/ukraine-war-briefing-kyiv-targets-russian-occupied-crimea-as-uk-and-france-conduct-joint-military-exercise",
       "published_at": "2026-10-25T02:37:44+00:00"
      }
     ],
     "places": [
      {
       "name": "סינלניקובו, אוקראינה",
       "lat": 48.3269,
       "lon": 35.5247
      }
     ]
    }
   ],
   "not_verified": [
    "נסיבות מותו של הפעיל מיכאיל מאוואשי",
    "טענות רוסיה בדבר היקף הנזקים והשחיתות באוקראינה"
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
     "value": 1.1193,
     "unit": "USD",
     "change_pct": -0.11,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "סירוב לדון בהגבלת הכוחות המזוינים או בנייטרליות כפויה",
      "דרישה לעצירת התקיפות על תשתיות האנרגיה כתנאי להפסקת תקיפות על בתי זיקוק"
     ],
     "inferred": [
      "שמירה על תמיכה בינלאומית וחיזוק קשרים עם ארצות הברית ומדינות אירופה",
      "המשך הגנה על תשתיות חיוניות ואוכלוסייה אזרחית"
     ],
     "forecast": [
      "השתתפות בשיחות משולשות מתוכננות",
      "המשך הפעלת מערכות הגנה אלקטרוניות ואוויריות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הפעילות הצבאית והגנה מפני תקיפות רחפנים",
      "היערכות לשיחות משולשות אפשריות לאחר נובמבר"
     ],
     "inferred": [
      "ניסיון להפעיל לחץ על אוקראינה באמצעות פגיעה בתשתיות ואספקה",
      "ביסוס שליטה באזורים הכבושים והיערכות מול מדינות המערב"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ושימוש במערכות הגנה מתקדמות",
      "ניהול מגעים דיפלומטיים מותנים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/25/ukraine-war-briefing-kyiv-targets-russian-occupied-crimea-as-uk-and-france-conduct-joint-military-exercise",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-starshield-operations-restored-to-normal-speed-zelensky-confirms-as-elon-musk-claims-ukraine-violated-starlink-terms/",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059643/",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2207429",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-defense/4177991-kharkiv-establishes-first-antidrone-corridor.html",
     "accessed_at": "2026-10-26T03:41:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T14:44:21+00:00",
  "changes": {
   "UKRAINE-10260341-01": {
    "kind": "new"
   },
   "UKRAINE-10260341-02": {
    "kind": "new"
   },
   "UKRAINE-10260341-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מתקפת טילים ורחפנים באזורים שונים ברוסיה ובשטחי הכיבוש",
    "score": 1.0
   },
   "UKRAINE-10260341-04": {
    "kind": "new"
   },
   "UKRAINE-10260341-05": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "מתקפות רוסיות על מטרות באוקראינה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-26T0043__north-202610260043.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-26T00:43:21+00:00",
   "window": {
    "from": "2026-10-25T00:43:21+00:00",
    "to": "2026-10-26T00:43:21+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610260043"
   },
   "summary": "בגזרה הצפונית מתנהלות פעולות צבאיות ממוקדות בדרום לבנון הכוללות ירי מיירטים ותקיפות שגרתיות של צה\"ל, לצד חידוש עבודות הנדסיות והתבצרות מצד ישראל במרחב קוניטרה שבסוריה. מנגד, חיזבאללה וגורמים פוליטיים בלבנון ממשיכים להצהיר על מעמדם הבלתי ניתן לערעור בכל הסדר עתידי, בעוד גורמים באזור עוקבים אחר המתיחות הביטחונית הממשיכה לאפיין את הגבולות.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעיל"
    },
    {
     "name": "החזית הסורית",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "NORTH-10260043-01",
     "title": "שיגור מיירט לעבר מטרה אווירית בדרום לבנון",
     "summary": "כוחות צה\"ל בדרום לבנון זיהו מטרה אווירית חשודה ושיגרו לעברה מיירט.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T18:32:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T18:32:25+00:00",
     "last_update_at": "2026-10-25T18:32:26+00:00",
     "what_is_not_verified": "האם המטרה יורטה בהצלחה ומה טיבה המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1381238",
       "published_at": "2026-10-25T18:32:26+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25477",
       "published_at": "2026-10-25T18:32:25+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-10260043-02",
     "title": "תקיפות והפצצות של צה\"ל במספר מוקדים בדרום לבנון",
     "summary": "הצבא הישראלי המשיך בתקיפות אוויריות, הפצצות ארטילריות ופיצוצים מבוקרים בכפרים ובאזורים שונים בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T11:29:05+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T11:29:05+00:00",
     "last_update_at": "2026-10-25T11:29:05+00:00",
     "what_is_not_verified": "דיווחים על נפגעים ונזק מדויק אינם זמינים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/142547/",
       "published_at": "2026-10-25T11:29:05+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "ואדי אל-חוג'ייר",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-10260043-03",
     "title": "כניסת כוחות ישראליים למרחב קוניטרה בסוריה",
     "summary": "כוחות ישראליים נכנסו למחוז קוניטרה הדרום-מערבי בסוריה לחידוש עבודות חפירה ובניית סוללות עפר במסגרת פרויקט סופה 53.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T17:55:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T17:55:49+00:00",
     "last_update_at": "2026-10-25T17:55:49+00:00",
     "what_is_not_verified": "ההשפעה המדויקת של הרחבת הסוללה על שטחי החקלאות והתושבים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israeli-forces-advance-syrias-quneitra-daraa-officer-killed",
       "published_at": "2026-10-25T17:55:49+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף הנזק והנפגעים המדויק כתוצאה מהתקיפות בדרום לבנון אינו מאומת.",
    "ההשלכות המלאות של הקמת סוללות העפר והרחבת הפעילות הקרקעית בקוניטרה אינן מאומתות לגבי גורל האדמות החקלאיות.",
    "הטענות המדויקות אודות התארגנות צבאית התוקפת או מדמה פשיטות משטח סוריה לגולן אינן מאומתות ממקור רשמי ישראלי."
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת איומים ופגיעה במטרות חשודות בגזרה הצפונית",
      "פעילות הנדסית לביצור הגבולות (כגון פרויקט סופה 53 בקוניטרה)"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי בדרום לבנון ובמרחב הגבול הסורי",
      "מניעת התבססות עוינת סמוך לגבולות המדינה"
     ],
     "forecast": [
      "המשך חיכוך צבאי מתמשך בדרום לבנון",
      "שימור אמצעי הגנה ופעילות הנדסית בגבול סוריה"
     ]
    },
    {
     "actor": "חיזבאללה ולבנון (גורמים פוליטיים)",
     "declared": [
      "הבטחת מקומו של הארגון בכל הסדר עתידי כאמצעי הגנה",
      "דרישה לנסיגה מלאה ושחרור אסירים"
     ],
     "inferred": [
      "ניסיון לשמר את ההשפעה הפוליטית והצבאית במדינה למרות הלחצים",
      "התנגדות לכל הסדר מדיני עתידי שאינו כולל את תנאי ההתנגדות"
     ],
     "forecast": [
      "המשך הצהרות לוחמניות כנגד ישראל",
      "התנגדות לכל ניסיון לפירוק נשק או לשינוי המציאות הביטחונית ללא תנאיהם"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/142547/",
     "accessed_at": "2026-10-26T00:43:21+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1381238",
     "accessed_at": "2026-10-26T00:43:21+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/israeli-forces-advance-syrias-quneitra-daraa-officer-killed",
     "accessed_at": "2026-10-26T00:43:21+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25477",
     "accessed_at": "2026-10-26T00:43:21+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T03:42:23+00:00",
  "changes": {
   "NORTH-10260043-01": {
    "kind": "possible",
    "prev": "דיווח על הקמת מנחת מסוקים ישראלי בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10260043-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות ארטילריה וירי מהאוויר של צה\"ל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10260043-03": {
    "kind": "possible",
    "prev": "איומים מסוריה כלפי ישראל סביב שטחי הגולן, קוניטרה ודרעא",
    "score": 0.467
   }
  }
 }
};
