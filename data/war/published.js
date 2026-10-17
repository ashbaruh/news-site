/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-17T0456__yemen-202610170456.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-17T04:56:32+00:00",
   "window": {
    "from": "2026-10-16T04:56:32+00:00",
    "to": "2026-10-17T04:56:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610170456"
   },
   "summary": "הלחימה בין הכוחות החות'יים לבין כוחות ממשלת תימן והקואליציה בהובלת סעודיה התחדשה במלוא עוזה עם סיום הפסקת האש. החות'ים מהדקים את המצור סביב תעז ומבצעים תקיפות טילים וכטב\"מים על יעדים של ממשלת תימן בעדן ועל תשתיות אנרגיה ושדות תעופה בסעודיה. במקביל, הקואליציה וצבא תימן מבצעים מתקפות נגד, יירוטים אוויריים ותקיפות על משגרי טילים ומוקדי הברחה.",
   "fronts": [
    {
     "name": "ציר תעז",
     "status": "לחימה עצימה, הידוק מצור חות'י והתקפות נגד ותקיפות אוויריות של הממשלה והקואליציה"
    },
    {
     "name": "ציר עדן",
     "status": "תקיפות טילים לעבר נמל התעופה הבינלאומי ומתקנים שלטוניים"
    },
    {
     "name": "ציר ערב הסעודית והים האדום",
     "status": "שיגור טילים וכטב\"מים לעבר יעדי נפט וערים בסעודיה, לצד פעילות יירוט ואזהרות שיט"
    },
    {
     "name": "ציר צעדה וחודיידה",
     "status": "תקיפות אוויריות נגד משגרים והכרזת כוונות לסיכול הברחות נשק ימיות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10170456-01",
     "title": "תקיפת טילים על נמל התעופה הבינלאומי בעדן",
     "summary": "שני טילים נחתו בשטח נמל התעופה הבינלאומי בעדן בעת שמטוס נוסעים התכונן להמראה. הרשויות המקומיות האשימו את החות'ים בשיגור, כאשר שר התחבורה ומושל עדן סיירו במקום לאחר התקרית.",
     "axis": "דרום תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T19:58:10+00:00",
     "last_update_at": "2026-10-17T04:34:32+00:00",
     "what_is_not_verified": "החות'ים לא קיבלו אחריות רשמית לירי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ea0346e3b12d8e85",
       "url": "https://www.sabanew.net/viewstory/154138",
       "published_at": "2026-10-17T04:34:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_ea0346e3b12d8e85",
       "url": "https://www.newarab.com/news/missiles-hit-aden-airport-saudi-coalition-intercepts-missile",
       "published_at": "2026-10-16T22:29:00+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_ea0346e3b12d8e85",
       "url": "https://www.aljazeera.com/news/2026/10/16/yemens-government-says-houthis-fired-two-missiles-at-aden-airport?traffic_source=rss",
       "published_at": "2026-10-16T21:56:07+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0a58b27f6956dd46",
       "url": "https://www.sabanew.net/viewstory/154127",
       "published_at": "2026-10-16T20:17:30+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_cc2a0145bd470915",
       "url": "https://www.sabanew.net/viewstory/154126",
       "published_at": "2026-10-16T19:58:10+00:00"
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
     "id": "YEMEN-10170456-02",
     "title": "הפגזות וירי צלפים עם נפגעים אזרחיים בתעז",
     "summary": "אזרחית נהרגה וחמישה אזרחים נוספים נפצעו מפגיעות ירי צלפים והפגזות של הכוחות החות'יים באזור תעז.",
     "axis": "מחוז תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T04:04:07+00:00",
     "last_update_at": "2026-10-17T04:04:07+00:00",
     "what_is_not_verified": "היקף הנפגעים והאחריות הישירה לא אומתו באופן בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0b39321feb74cdb3",
       "url": "https://www.sabanew.net/viewstory/154133",
       "published_at": "2026-10-17T04:04:07+00:00"
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
     "id": "YEMEN-10170456-03",
     "title": "דיווחים על שריפות במתקני נפט במזרח סעודיה",
     "summary": "תיעודים ברשתות הציגו דלקות במתקני אנרגיה באזור המזרחי של סעודיה בעקבות תקיפה שיוחסה לחות'ים.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T01:20:43+00:00",
     "last_update_at": "2026-10-17T01:20:43+00:00",
     "what_is_not_verified": "היקף הנזק ונפגעים לא נמסרו ולא אומתו, כמו גם ביצוע התקיפה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48622",
       "published_at": "2026-10-17T01:20:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10170456-04",
     "title": "עימותים, תקיפות אוויריות והשמדת משגרי טילים בתעז ובצעדה",
     "summary": "כוחות ממשלת תימן והקואליציה הודיעו על פגיעה במאות לוחמים חות'ים, ביצוע תקיפות אוויריות בתעז והשמדת שני משגרי טילים בליסטיים במחוז צעדה.",
     "axis": "צפון ודרום-מערב תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T20:56:08+00:00",
     "last_update_at": "2026-10-17T01:10:11+00:00",
     "what_is_not_verified": "מספרי הנפגעים בצד החות'י נמסרו על ידי צד אחד בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_32d2936b757c3cf3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-forces-saudi-led-coalition-say-378-houthis-killed-two-missile",
       "published_at": "2026-10-17T01:10:11+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_32d2936b757c3cf3",
       "url": "https://www.sabanew.net/viewstory/154129",
       "published_at": "2026-10-16T20:56:08+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "צעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-10170456-05",
     "title": "לכידת חוליית הפעלת כטב\"מים של החות'ים",
     "summary": "חטיבת השריון ה-35 של צבא תימן הודיעה על מעצר צוות חות'י שאחראי על הפעלה ובקרה של כלי טיס בלתי מאוישים בחזית דרום-מזרח תעז.",
     "axis": "מחוז תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T23:35:48+00:00",
     "last_update_at": "2026-10-16T23:35:48+00:00",
     "what_is_not_verified": "אין אימות עצמאי ללכידת החוליה מעבר להודעת היחידה הצבאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-government-forces-claim-houthi-drone-operating-team-captured",
       "published_at": "2026-10-16T23:35:48+00:00"
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
     "id": "YEMEN-10170456-06",
     "title": "יירוט טילים וכטב\"מים ששוגרו לעבר יעדים בסעודיה ובים האדום",
     "summary": "הקואליציה בהובלת סעודיה הודיעה על יירוט טיל בליסטי שכוון לעבר ינבוע, שני טילי שיוט מעל הים האדום ושלושה כטב\"מים באזורי ריאד והדרום.",
     "axis": "הים האדום וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T14:17:01+00:00",
     "last_update_at": "2026-10-16T22:29:00+00:00",
     "what_is_not_verified": "זהות המשגרים לא צוינה בהודעה הרשמית של הקואליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_dc95e520f5eda615",
       "url": "https://www.newarab.com/news/missiles-hit-aden-airport-saudi-coalition-intercepts-missile",
       "published_at": "2026-10-16T22:29:00+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_dc95e520f5eda615",
       "url": "https://www.sabanew.net/viewstory/154110",
       "published_at": "2026-10-16T14:17:01+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, ערב הסעודית",
       "lat": 24.089,
       "lon": 38.0687
      },
      {
       "name": "הים האדום",
       "lat": 20.2966,
       "lon": 38.5343
      }
     ]
    },
    {
     "id": "YEMEN-10170456-07",
     "title": "הכרזת הקואליציה על כוונה לפעול נגד הברחות נשק בים",
     "summary": "דובר הקואליציה הודיע כי הכוחות יפעלו נגד מבצעי הברחת אמצעי לחימה דרך הים עבור החות'ים במחוז חודיידה.",
     "axis": "חוף הים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T22:26:51+00:00",
     "last_update_at": "2026-10-16T22:26:51+00:00",
     "what_is_not_verified": "פרטי הפעילות המבצעית לא פורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-will-target-houthi-arms-smuggling-operations",
       "published_at": "2026-10-16T22:26:51+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-10170456-08",
     "title": "אזהרת מסע בריטית גורפת לערב הסעודית",
     "summary": "משרד החוץ הבריטי המליץ לאזרחיו להימנע מכל נסיעה שאינה חיונית לכל רחבי ערב הסעודית, עקב איומים מוגברים על תשתיות אנרגיה, שדות תעופה והשיט בים האדום.",
     "axis": "הגנה אזורית וסעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T23:21:40+00:00",
     "last_update_at": "2026-10-16T23:21:40+00:00",
     "what_is_not_verified": "לא צוין בטקסט מי הגורם הספציפי שמהווה את מקור האיום באזהרה הבריטית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_fcdo",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uk-advises-against-all-essential-travel-saudi-arabia",
       "published_at": "2026-10-16T23:21:40+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10170456-09",
     "title": "התבטאויות נשיא ארה\"ב בנוגע לסיוע ישראלי לסעודיה במאבק בחות'ים",
     "summary": "נשיא ארצות הברית דונלד טראמפ אמר כי ישראל סייעה לסעודיה מול החות'ים וכי הוא סבור שסעודיה תקבל סיוע נוסף שהוצע לה.",
     "axis": "מדיני-בינלאומי מול הזירה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:28:11+00:00",
     "last_update_at": "2026-10-16T18:16:48+00:00",
     "what_is_not_verified": "פרטי הסיוע הישראלי בפועל והסכמת סעודיה לקבלתו אינם מאומתים רשמית על ידי סעודיה וישראל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21641754",
       "published_at": "2026-10-16T18:16:48+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132032",
       "published_at": "2026-10-16T17:41:59+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/ryzrlje3mg",
       "published_at": "2026-10-16T17:41:05+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48613",
       "published_at": "2026-10-16T17:28:11+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מידת הנזק והנפגעים בשריפות במתקני הנפט במחוז א-שרקייה בסעודיה",
    "קבלת אחריות רשמית של החות'ים על תקיפות הטילים בנמל התעופה בעדן",
    "נתוני הנפגעים החות'ים (מאות הרוגים/מנוטרלים) שנמסרו על ידי ממשלת תימן",
    "היקף ואופי הסיוע הישראלי לסעודיה מעבר להצהרות נשיא ארה\"ב ודיווחים עיתונאיים"
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
     "actor": "התנועה החות'ית",
     "declared": [
      "לא צוינו יעדים מוצהרים ישירים של החות'ים בטקסט"
     ],
     "inferred": [
      "הכרעת המערכה בעיר תעז והרחבת השליטה בדרום-מערב תימן ובנתיבי הגישה לבאב אל-מנדב",
      "שיבוש פעילות ממשלת תימן בעדן באמצעות ירי טילים לעבר מוקדי תחבורה וממשל",
      "הפעלת לחץ כלכלי וצבאי על סעודיה באמצעות תקיפת מתקני אנרגיה ונמלים"
     ],
     "forecast": [
      "המשך הניסיונות לפרוץ לתעז ולשגר אמצעי לחימה מרחוק לעבר יעדים בסעודיה ובדרום תימן"
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה בהובלת סעודיה",
     "declared": [
      "המשך עמידה איתנה ומאבק מול פגיעה באזרחים ומתקנים אזרחיים",
      "פגיעה במבצעי הברחת נשק ימיות של החות'ים לחודיידה",
      "השמדת מערכי השיגור והטילים הבליסטיים של החות'ים"
     ],
     "inferred": [
      "הסרת המצור מעל העיר תעז ובלימת התקדמות החות'ים לעבר באב אל-מנדב ועדן",
      "הגנה על מתקני נפט ותשתיות אסטרטגיות בממלכה מפני פגיעה כלכלית"
     ],
     "forecast": [
      "הגברת הפעילות האווירית והימית לסיכול הברחות נשק ומשגרים, לצד העמקת שיתוף פעולה מודיעיני והגנתי חיצוני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/16/yemens-government-says-houthis-fired-two-missiles-at-aden-airport?traffic_source=rss",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21641754",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uk-advises-against-all-essential-travel-saudi-arabia",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/missiles-hit-aden-airport-saudi-coalition-intercepts-missile",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154110",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132032",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48613",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/ryzrlje3mg",
     "accessed_at": "2026-10-17T04:56:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T23:43:15+00:00",
  "changes": {
   "YEMEN-10170456-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מתקפת טילים וכטב\"מים חות'ית על ארמון הנשיאות אל-מעאשיק בעדן",
    "score": 0.817
   },
   "YEMEN-10170456-02": {
    "kind": "new"
   },
   "YEMEN-10170456-03": {
    "kind": "new"
   },
   "YEMEN-10170456-04": {
    "kind": "possible",
    "prev": "החרפת המצור והקרבות סביב העיר תעז",
    "score": 0.633
   },
   "YEMEN-10170456-05": {
    "kind": "new"
   },
   "YEMEN-10170456-06": {
    "kind": "possible",
    "prev": "ירי 16 טילים בליסטיים לעבר שכונות מגורים במאריב",
    "score": 0.467
   },
   "YEMEN-10170456-07": {
    "kind": "new"
   },
   "YEMEN-10170456-08": {
    "kind": "new"
   },
   "YEMEN-10170456-09": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-17T0455__iran-202610170455.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-17T04:55:27+00:00",
   "window": {
    "from": "2026-10-16T04:55:27+00:00",
    "to": "2026-10-17T04:55:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610170455"
   },
   "summary": "המערכה בין איראן לבין ארה\"ב וישראל מתמקדת בלחץ כלכלי וצבאי כבד בנתיבי השיט של מצר הורמוז, לצד סיכול רשתות פיננסיות ופעולות טרור בחו\"ל. ארצות הברית מפעילה סגר ימי שהוביל לחסימת ייצוא נפט איראני בהיקף נרחב, בעוד במרחב הימי נרשמות פגיעות במכליות ממוקשים וצניחה בתנועת הספינות. במקביל, וושינגטון בוחנת אפשרויות תקיפה של אתרי גרעין מבוצרים אך בודקת גם הקלות ממוקדות בצי המכליות כדי לבלום את התייקרות מחירי הדלק בעולם.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "עימות ימי פעיל הכולל סגר צבאי אמריקני, פגיעות מוקשים במכליות וירידה משמעותית בתנועת המסחר"
    },
    {
     "name": "הזירה המדינית והכלכלית הבינלאומית",
     "status": "מאבק סביב שלילת צינורות מימון ורשתות בנקאיות איראניות בלבנון, לצד איומי תקיפה באתרי גרעין ודיונים על משטר הסנקציות"
    },
    {
     "name": "מערך המבצעים החשאיים באירופה",
     "status": "סיכול חוליות התנקשות המופעלות בידי גורמי פשיעה בשליחות טהראן נגד מטרות מערביות וישראליות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10170455-01",
     "title": "פגיעת מוקש ימי במכלית נפט במצר הורמוז",
     "summary": "מכלית שנשאה מעל שני מיליון חביות נפט עלתה על מוקש ימי ועלתה באש לאחר שניסתה לחצות באזור אסור במצר הורמוז.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T00:00:00+00:00",
     "last_update_at": "2026-10-17T04:23:06+00:00",
     "what_is_not_verified": "זהות המכלית ומצבה המדויק מעבר להודעת הצד האיראני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1378030",
       "published_at": "2026-10-17T04:23:06+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-tanker-passing-hormuz-through-prohibited-route-hits-mine",
       "published_at": "2026-10-17T02:13:25+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/17/draft-2?traffic_source=rss",
       "published_at": "2026-10-17T00:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      },
      {
       "name": "ים עומאן",
       "lat": 24.2138,
       "lon": 58.9846
      }
     ]
    },
    {
     "id": "IRAN-10170455-02",
     "title": "הטלת סגר ימי אמריקני במצר הורמוז ופגיעה בייצוא הנפט האיראני",
     "summary": "הפיקוד המרכזי של ארה\"ב והנשיאות האמריקנית הודיעו על סגר ימי שמנע מאיראן לייצא נפט בשווי עשרות מיליארדי דולרים, לצד הקפאת נכסים דיגיטליים וסיוע במעבר מכליות של בנות ברית.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T20:43:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T20:43:00+00:00",
     "last_update_at": "2026-10-17T02:45:42+00:00",
     "what_is_not_verified": "נתוני המעבר המדויקים וההיקף הכספי המלא של החסימה אינם מאומתים באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_beda52f7215ff602",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-us-navy-carrying-out-effective-blockade-iran",
       "published_at": "2026-10-17T02:45:42+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_beda52f7215ff602",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hormuz-controlled-us-and-allies-not-iran-centcom-chief",
       "published_at": "2026-10-16T20:43:00+00:00"
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
     "id": "IRAN-10170455-03",
     "title": "דיווח על תקיפת כלי שיט במרחב מצר הורמוז וירידה בהיקף התנועה הימית",
     "summary": "גורמי מעקב ימי בריטיים דיווחו על תקיפת שנים-עשר כלי שיט באזור המצר ומפרץ עומאן בתוך שבוע, לצד צניחה חדה בשיעור של שבעים אחוזים בהיקפי התנועה ביחס לתקופה שלפני המלחמה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T05:00:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T05:00:17+00:00",
     "last_update_at": "2026-10-17T03:12:09+00:00",
     "what_is_not_verified": "היקף התקיפות המדויק ורמת הנזק בחלק מכלי השיט אינם ניתנים לאימות עקב הימנעות מדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9cae9a77ed79e53a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-says-most-vessels-dont-report-hormuz-attacks-traffic-70-below-pre",
       "published_at": "2026-10-17T03:12:09+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_9cae9a77ed79e53a",
       "url": "https://www.bbc.co.uk/news/articles/cmde8dpg8g0no?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T05:00:17+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      },
      {
       "name": "מפרץ עומאן",
       "lat": 24.2138,
       "lon": 58.9846
      }
     ]
    },
    {
     "id": "IRAN-10170455-04",
     "title": "מאסר ממושך בבריטניה לנער שגויס בידי רשת המקושרת לאיראן לצורך התנקשות",
     "summary": "בית משפט בבריטניה גזר עשרים שנות מאסר על אזרח נורבגי בן תשע-עשרה, אשר גויס דרך רשת פשיעה שוודית המופעלת על ידי המשטר בטהראן כדי לבצע חיסול בממלכה.",
     "axis": "איראן - המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T11:00:37+00:00",
     "last_update_at": "2026-10-17T03:41:49+00:00",
     "what_is_not_verified": "זהות היעד המדויק של ההתנקשות בבריטניה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21642472",
       "published_at": "2026-10-17T03:41:49+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/norwegian-teen-jailed-20-years-uk-murder-plot-after-being-recruited-online",
       "published_at": "2026-10-16T13:46:27+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610168133",
       "published_at": "2026-10-16T11:00:37+00:00"
      }
     ],
     "places": [
      {
       "name": "האדרספילד, בריטניה",
       "lat": 53.6467,
       "lon": -1.7822
      },
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "IRAN-10170455-05",
     "title": "האשמות נשיא איראן בנוגע לפגיעה סביבתית כתוצאה מפעולות צבאיות",
     "summary": "במהלך כינוס בינלאומי בירבאן, נשיא איראן גינה את המערכה האמריקנית-ישראלית וטען כי הפגיעה בתשתיות ובמערכות האקולוגיות באזור מהווה פשע סביבתי רחב היקף.",
     "axis": "איראן - ישראל וארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T15:19:32+00:00",
     "last_update_at": "2026-10-17T04:49:36+00:00",
     "what_is_not_verified": "היקף הפגיעה הסביבתית המדויק באתרי התעשייה והאנרגיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/pezeshkian-calls-environmental-destruction-caused-regional-wars-ecocide",
       "published_at": "2026-10-17T04:49:36+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86294324/Pezeshkian-Environmental-destruction-endangers-future-of-human",
       "published_at": "2026-10-16T16:32:21+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86294297/President-Pezeshkian-arrives-in-Tehran",
       "published_at": "2026-10-16T15:19:32+00:00"
      }
     ],
     "places": [
      {
       "name": "ירבאן, ארמניה",
       "lat": 40.1777,
       "lon": 44.5126
      }
     ]
    },
    {
     "id": "IRAN-10170455-06",
     "title": "בחינת הקלות בסנקציות על צי מכליות הצללים של איראן ורוסיה בארה\"ב",
     "summary": "גורמי ממשל בארצות הברית דנים באפשרות להסיר מגבלות מחלק מצי הצללים של איראן ורוסיה על מנת למתן את העלייה החדה במחירי הדלק והתובלה הימית לקראת הבחירות.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T20:54:53+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T20:54:53+00:00",
     "last_update_at": "2026-10-16T20:54:53+00:00",
     "what_is_not_verified": "האם יאושר מתווה ההקלות ומה יהיה היקפו הסופי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-weighs-lifting-sanctions-irans-shadow-fleet-address-surging-costs",
       "published_at": "2026-10-16T20:54:53+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "IRAN-10170455-07",
     "title": "היערכות צבאית אמריקנית לאפשרות של תקיפת מתקני גרעין תת-קרקעיים באיראן",
     "summary": "הנשיא האמריקני שלל הצבת כוחות קרקעיים באיראן אך הותיר על הפרק אפשרות לשימוש בחימוש כבד מסוג אם כל הפצצות נגד אתרי גרעין ותשתיות, בהם אתר הר המכוש.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T06:44:53+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T06:44:53+00:00",
     "last_update_at": "2026-10-16T13:54:40+00:00",
     "what_is_not_verified": "מידת היעילות של פצצת MOAB מול מתקנים תת-קרקעיים מבוצרים ומועד הביצוע האפשרי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/trump-rules-out-us-troops-iran-leaves-pickaxe-mountain-strike-table",
       "published_at": "2026-10-16T13:54:40+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131998",
       "published_at": "2026-10-16T06:44:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10170455-08",
     "title": "שלילת רישיון הפעילות של בנק סאדראת האיראני בלבנון",
     "summary": "הבנק המרכזי בביירות ביטל את רישיון הפעילות של בנק סאדראת האיראני בעקבות דרישה אמריקנית לפגוע בצינורות המימון של חזבאללה.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:02:36+00:00",
     "last_update_at": "2026-10-16T17:02:36+00:00",
     "what_is_not_verified": "ההשפעה המעשית של שלילת הרישיון על המשך פעילות רשת הכספים של חזבאללה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/lebanon-revokes-bank-saderats-license-but-hezbollahs-financial-network-remains/",
       "published_at": "2026-10-16T17:02:36+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    }
   ],
   "not_verified": [
    "ההיקף הכספי המדויק של הנפט שנבלם בידי כוחות ארה\"ב במצר הורמוז",
    "מספר התקיפות המדויק של כלי שיט במצר הורמוז עקב סירוב ספינות לדווח",
    "מידת היעילות של פצצת אם כל הפצצות מול מתקני גרעין תת-קרקעיים בהר המכוש",
    "זהות היעד להתנקשות של הרשת האיראנית בבריטניה"
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
      "הגדרת פעולות ארה\"ב וישראל כפשעים הפוגעים בסביבה ובמשאבי האזור",
      "הרתעת כלי שיט ממעבר בנתיבים לא מורשים במצר הורמוז",
      "דחיית האשמות מערביות בדבר מעורבות בפעילות עוינת בחו\"ל"
     ],
     "inferred": [
      "הפעלת לחץ על נתיבי השיט הגלובליים כדי להעלות את עלויות המלחמה עבור המערב",
      "שימוש ברשתות פשיעה זרות להוצאת פיגועים נגד יעדים ישראליים ומערביים",
      "המשך הגנה על תשתיות הגרעין המבוצרות"
     ],
     "forecast": [
      "המשך מיקוש ימי ושיבוש תנועת המכליות במפרץ ובמצר הורמוז",
      "העמקת המאמצים להברחת נפט ועקיפת מנגנוני הפיקוח הפיננסיים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעה מוחלטת מאיראן להשיג נשק גרעיני",
      "הטלת סגר ימי יעיל ושליטה במצר הורמוז יחד עם שותפות אזוריות",
      "שלילת הצבת חיילים אמריקנים על אדמת איראן"
     ],
     "inferred": [
      "חניקת הכלכלה האיראנית באמצעות פגיעה מוחלטת בייצוא הנפט והקפאת נכסים",
      "בחינת איזון בין לחץ על טהראן לבין מניעת משבר אנרגיה עולמי לפני בחירות",
      "איתות על כוונה להשמיד מתקני גרעין באמצעות חימוש מיוחד"
     ],
     "forecast": [
      "המשך אכיפת המצור הימי לצד בחינת הקלות נקודתיות על מכליות נפט",
      "הגברת הלחץ הבינלאומי לפירוק ערוצי המימון של שלוחות איראן באזור"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "קריאה להפלת המשטר בטהראן והצגת עמדה תקיפה בפורומים בינלאומיים"
     ],
     "inferred": [
      "המשך שיתוף פעולה מודיעיני ומבצעי עם ארה\"ב לפגיעה ביכולות איראן וגרורותיה",
      "סיכול תשתיות של חזבאללה ורשתות טרור איראניות בזירה הבינלאומית"
     ],
     "forecast": [
      "המשך תיאום צבאי הדוק עם ארה\"ב לקראת פעולות מנע אפשריות נגד אתרי הגרעין"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/17/draft-2?traffic_source=rss",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/trump-rules-out-us-troops-iran-leaves-pickaxe-mountain-strike-table",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmde8dpg8g0no?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/lebanon-revokes-bank-saderats-license-but-hezbollahs-financial-network-remains/",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610168133",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86294297/President-Pezeshkian-arrives-in-Tehran",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21642472",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1378030",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-weighs-lifting-sanctions-irans-shadow-fleet-address-surging-costs",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131998",
     "accessed_at": "2026-10-17T04:55:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T23:40:28+00:00",
  "changes": {
   "IRAN-10170455-01": {
    "kind": "new"
   },
   "IRAN-10170455-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "עימות גרסאות וחיכוך ימי מתמשך במצר הורמוז",
    "score": 1.0
   },
   "IRAN-10170455-03": {
    "kind": "new"
   },
   "IRAN-10170455-04": {
    "kind": "new"
   },
   "IRAN-10170455-05": {
    "kind": "new"
   },
   "IRAN-10170455-06": {
    "kind": "new"
   },
   "IRAN-10170455-07": {
    "kind": "possible",
    "prev": "היערכות אמריקאית לשימוש בחימוש כבד נגד אתרים באיראן",
    "score": 0.467
   },
   "IRAN-10170455-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-17T1354__ukraine-202610171354.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-17T13:54:20+00:00",
   "window": {
    "from": "2026-10-16T13:54:20+00:00",
    "to": "2026-10-17T13:54:20+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610171354"
   },
   "summary": "רוסיה מגבירה את התקיפות על תשתיות האנרגיה באוקראינה בניסיון להשבית את מערכות החשמל והמים בערים הגדולות לקראת החורף, לצד המשך הלחימה הקרקעית במזרח ובדרום. מנגד, אוקראינה מבצעת פשיטות כטבמים נרחבות נגד יעדים צבאיים, מתקני ייצור ונמלי תעופה בעומק שטח רוסיה. במקביל, נרשמת מתיחות משמעותית עקב הגבלות תפעוליות על מערך הלוויינים סטארלינק והחלטת הממשל בארצות הברית להשהות חלק מהסנקציות על מוסקבה.",
   "fronts": [
    {
     "name": "חזית דונייצק ודוברופיליה",
     "status": "לחימה פעילה וטענות סותרות על כיבוש יישובים"
    },
    {
     "name": "חזית זפוריז'יה (הוליאיפולה)",
     "status": "היתקלויות מקומיות ודיווחים על פשעי מלחמה נגד שבויים"
    },
    {
     "name": "חזית חרסון ונהר הדנייפרו",
     "status": "חילופי אש ארטילריים ופעילות כטבמים הדדית לאורך הנהר"
    },
    {
     "name": "עומק שטח רוסיה",
     "status": "תקיפות כטבמים אוקראיניות מרובות נגד בסיסים, מפעלים ותעופה אזרחית"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10171354-01",
     "title": "אוקראינה פגעה במפעל כטבמים ובמחסן תחמושת ברוסיה",
     "summary": "המטה הכללי של צבא אוקראינה אישר כי כוחות המגן תקפו את מפעל הפיתוח והייצור של כטבמים רובואביה במחוז רוסטוב ומחסן אספקה של חטיבת טילים במחוז בריאנסק.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:40:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:40:00+00:00",
     "last_update_at": "2026-10-17T12:40:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק באתרים שהותקפו לא צוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175442-ukraines-defense-forces-strike-russian-drone-facility-missile-brigade-supply-depot.html",
       "published_at": "2026-10-17T12:40:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10171354-02",
     "title": "השבתת טיסות במוסקבה ובסנקט פטרבורג בעקבות תקיפת רחפנים",
     "summary": "נמלי התעופה במוסקבה ובסנקט פטרבורג השביתו ועיכבו מאות טיסות עקב איום כטבמים אוקראיניים, כאשר ראש עיריית מוסקבה טען כי 140 רחפנים יורטו.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T18:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:46:00+00:00",
     "last_update_at": "2026-10-17T12:46:00+00:00",
     "what_is_not_verified": "מספר הכטבמים שיורטו בפועל נמסר מפי ראש עיריית מוסקבה בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058508/",
       "published_at": "2026-10-17T12:46:00+00:00"
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
     "id": "UKRAINE-10171354-03",
     "title": "דיווח על הוצאה להורג של שבויים אוקראינים במחוז זפוריז'יה",
     "summary": "גורם צבאי אוקראיני דיווח כי חיילים רוסים מחטיבת חיל רגלים ממוכן הוציאו להורג שני שבויי מלחמה אוקראינים פצועים ולא חמושים בחזית הוליאיפולה.",
     "axis": "זפוריז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:04:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:04:00+00:00",
     "last_update_at": "2026-10-17T12:04:00+00:00",
     "what_is_not_verified": "זהות ההרוגים ומספרם המדויק מסתמכים על יירוט קשר רדיו אוקראיני בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058504/",
       "published_at": "2026-10-17T12:04:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10171354-04",
     "title": "הגבלות מהירות על רשת סטארלינק באוקראינה",
     "summary": "מהירות הגישה לרשת סטארלינק באוקראינה הוגבלה, דבר שמקשה על הכוחות האוקראיניים ליירט כטבמים מסוג שאהד בעלי מנוע סילון ולנהל מבצעים בשטח, בעוד גורמים בארהב מכחישים מעורבות ישירה במתן ההוראה.",
     "axis": "הזירה האווירית והטכנולוגית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T18:01:19+00:00",
     "last_update_at": "2026-10-17T13:18:00+00:00",
     "what_is_not_verified": "זהות הגורם שנתן את ההוראה להטלת המגבלות והאם אילון מאסק או הממשל האמריקאי עומדים מאחוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175451-ukraine-loses-ability-to-use-starlink-to-shoot-down-jetpowered-shaheds-zelensky.html",
       "published_at": "2026-10-17T13:18:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/planned-operation-zelensky-confirms-ukraines-starlink-access-not-fully-restored/",
       "published_at": "2026-10-17T11:55:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48619",
       "published_at": "2026-10-16T19:37:37+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckz65g34wyd8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T19:33:48+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/16/trump-denies-ordering-restrictions-on-ukraine-s-military-starlink-service-and-says-he-doesn-t-think-elon-musk-did-either",
       "published_at": "2026-10-16T18:45:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/16/ukraine-military-starlink-access-starshield-volodymyr-zelenskyy",
       "published_at": "2026-10-16T18:01:19+00:00"
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
     "id": "UKRAINE-10171354-05",
     "title": "השהיית סנקציות אמריקאיות על רוסיה והתנגדות אוקראינית",
     "summary": "נשיא ארצות הברית דונלד טראמפ חתם על צו המשהה שורה של סנקציות כלכליות על רוסיה משיקולי ביטחון לאומי, מהלך שגרר ביקורת חריפה מצד נשיא אוקראינה ושר ההגנה האיטלקי.",
     "axis": "מדיני וסנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T23:54:35+00:00",
     "last_update_at": "2026-10-17T13:28:41+00:00",
     "what_is_not_verified": "לא מאומת האם הממשל האמריקאי יסיר סנקציות נוספות בעתיד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/volodymyr-zelenskyy-donald-trump-lift-sanctions-russia-intensify-war-ukraine",
       "published_at": "2026-10-17T13:28:41+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/putin-feels-joy-zelensky-calls-trumps-waiving-of-key-russia-sanctions-wrong/",
       "published_at": "2026-10-17T12:14:26+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-17T11:56:06+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/17/trump-puts-new-russia-sanctions-passed-by-congress-on-hold-amid-deepening-row-with-ukraine",
       "published_at": "2026-10-17T02:53:38+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c64g18ljjd8do?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T23:54:35+00:00"
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
     "id": "UKRAINE-10171354-06",
     "title": "רוסיה מתכננת מתקפות לפגיעה בתשתיות האנרגיה לקראת החורף",
     "summary": "מסמכים ודיווחים מצביעים על תוכנית רוסית לתקוף תחנות כוח ואספקת חשמל, חום ומים בערים מרכזיות באוקראינה כדי להביא לכניעתה טרם עונת החורף.",
     "axis": "הזירה האווירית והעורף האוקראיני",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T12:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:00:00+00:00",
     "last_update_at": "2026-10-17T13:28:41+00:00",
     "what_is_not_verified": "היקף החימושים המדויק שרוסיה תפעיל בפועל וסיכויי הצלחת התוכנית",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/volodymyr-zelenskyy-donald-trump-lift-sanctions-russia-intensify-war-ukraine",
       "published_at": "2026-10-17T13:28:41+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/16/russia-plans-winter-strikes-to-cut-off-electricity-heat-and-water-in-kyiv-kharkiv-and-odesa-to-force-ukraine-s-surrender-nyt-reports",
       "published_at": "2026-10-16T18:16:05+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168614",
       "published_at": "2026-10-16T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-07",
     "title": "חבילת סיוע שוודית לרשת האנרגיה האוקראינית",
     "summary": "שוודיה הכריזה על חבילת תמיכה כספית בסך חמש מאות מיליון קרונות המיועדת בעיקר לתיקונים דחופים ברשתות החשמל ומערכות החימום באוקראינה.",
     "axis": "סיוע בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:21:00+00:00",
     "last_update_at": "2026-10-17T12:21:00+00:00",
     "what_is_not_verified": "מועד הגעת הציוד בפועל ליעדו באוקראינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058505/",
       "published_at": "2026-10-17T12:21:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סטוקהולם, שוודיה",
       "lat": 59.3251,
       "lon": 18.0711
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-08",
     "title": "הכחשת כיבוש יישובים במחוז דונייצק",
     "summary": "כוחות המשמר הלאומי האוקראיני אזוב הכחישו את טענות הצד הרוסי בדבר השתלטות על היישובים זולוטי קולודיאז', נובוטרויצקה ופטריבקה.",
     "axis": "דונבאס",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T11:58:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T11:58:00+00:00",
     "last_update_at": "2026-10-17T11:58:00+00:00",
     "what_is_not_verified": "המצב הקרקעי המדויק באותם יישובים שנוי במחלוקת בין הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175428-azov-regiment-denies-russian-claims-of-capturing-three-settlements-near-dobropillia.html",
       "published_at": "2026-10-17T11:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דוברופיליה, מחוז דונייצק, אוקראינה",
       "lat": 48.4683,
       "lon": 37.0903
      }
     ]
    },
    {
     "id": "UKRAINE-10171354-09",
     "title": "מעצר שוטרי גבול אוקראינים בשטח מולדובה",
     "summary": "שני אנשי משמר הגבול של אוקראינה נעצרו על ידי משטרת הגבולות של מולדובה לאחר שחצו את נהר הדנייסטר בעת מרדף אחר אזרח שנמלט מאוקראינה.",
     "axis": "גבול אוקראינה-מולדובה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T11:19:05+00:00",
     "last_update_at": "2026-10-17T11:19:05+00:00",
     "what_is_not_verified": "נסיבות ההגעה לגדה המולדובית שנויות במחלוקת בין טענת חצייה יזומה לטענת תקלה במנוע וגרירה בידי אזרחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48625",
       "published_at": "2026-10-17T11:19:05+00:00"
      }
     ],
     "places": [
      {
       "name": "הולושניצה, מולדובה",
       "lat": 48.2517,
       "lon": 28.1786
      }
     ]
    }
   ],
   "not_verified": [
    "טענת רוסיה על כיבוש היישובים זולוטי קולודיאז', נובוטרויצקה ופטריבקה",
    "הטענה כי סרטון שבויים אוקראינים בדונייצק מבוים על ידי חיילים רוסים",
    "מעורבות ישירה של הבית הלבן או אילון מאסק במתן ההוראה להגבלת מהירות סטארלינק",
    "כוונת רוסיה להציב מערכות טילים בליסטיים בשטח בלארוס",
    "מספר הכטבמים המדויק שיורט מעל שמי מוסקבה"
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
     "actor": "רוסיה",
     "declared": [
      "יצירת אזור ביטחון לאורך הגבול שאינו פתוח למשא ומתן"
     ],
     "inferred": [
      "השמדת רשת האנרגיה והחום של אוקראינה כדי לכפות עליה כניעה בחורף",
      "החלשת הלחץ הכלכלי באמצעות הפשרת נכסים והסרת סנקציות דרך מדינות שותפות"
     ],
     "forecast": [
      "המשך מיקוד התקיפות האוויריות בתחנות כוח ומערכות מים בערים מרכזיות",
      "העמקת הלחץ הצבאי בדונבאס תוך שימוש בכטבמים וחימושים מדויקים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת טילי פטריוט נוספים מאירופה ופיתוח תוכניות הגנה מפני טילים",
      "הגנה על הריבונות והמשך פעולות התקפיות בעומק שטח האויב"
     ],
     "inferred": [
      "שימור תמיכת בעלות הברית באירופה לנוכח צמצום הסיוע והסרת סנקציות מצד ארהב",
      "פגיעה בשרשראות האספקה והייצור של מערך הכטבמים והטילים הרוסי"
     ],
     "forecast": [
      "מאמצים דחופים לשיקום תשתיות החשמל והשגת מענה חלופי להגבלות התקשורת",
      "החרפת המחאה והלחץ הפנימי בערים עקב קשיי אספקת האנרגיה בחורף"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c64g18ljjd8do?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/17/volodymyr-zelenskyy-donald-trump-lift-sanctions-russia-intensify-war-ukraine",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/putin-feels-joy-zelensky-calls-trumps-waiving-of-key-russia-sanctions-wrong/",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/16/russia-plans-winter-strikes-to-cut-off-electricity-heat-and-water-in-kyiv-kharkiv-and-odesa-to-force-ukraine-s-surrender-nyt-reports",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058505/",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48625",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4175428-azov-regiment-denies-russian-claims-of-capturing-three-settlements-near-dobropillia.html",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168614",
     "accessed_at": "2026-10-17T13:54:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-16T23:40:33+00:00",
  "changes": {
   "UKRAINE-10171354-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "רוסיה שיגרה מאות כטב\"מים וטילים לעבר אוקראינה",
    "score": 0.65
   },
   "UKRAINE-10171354-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הגבלות תעופה בנמלי תעופה במוסקבה בעקבות מתקפות",
    "score": 0.817
   },
   "UKRAINE-10171354-03": {
    "kind": "new"
   },
   "UKRAINE-10171354-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת ודיווחים על הגבלת שירותי סטארלינק וסטארשילד לכוחות אוקראינה",
    "score": 1.0
   },
   "UKRAINE-10171354-05": {
    "kind": "new"
   },
   "UKRAINE-10171354-06": {
    "kind": "possible",
    "prev": "פגיעה במבני מגורים בחרקוב כתוצאה מתקיפה רוסית",
    "score": 0.633
   },
   "UKRAINE-10171354-07": {
    "kind": "new"
   },
   "UKRAINE-10171354-08": {
    "kind": "new"
   },
   "UKRAINE-10171354-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-17T1355__north-202610171355.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-17T13:55:24+00:00",
   "window": {
    "from": "2026-10-16T13:55:24+00:00",
    "to": "2026-10-17T13:55:24+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610171355"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהמשך פעילות צבאית ישראלית מקומית הכוללת אש ארטילרית, גיחות רחפנים ושיגורי יירוט בדרום לבנון, לצד תנועת כוחות קרקעיים מוגבלת בדרום סוריה. במקביל, רשויות המדינה בלבנון מגבירות את האכיפה והלחץ המשפטי והמוסדי נגד תשתיות חזבאללה והשפעת איראן, בעוד ארצות הברית דוחפת לשינויי חקיקה ביחס לקשרים עם ישראל. בציר המדיני והכלכלי, גורמים בינלאומיים וערביים, בהם צרפת וקטר, מקדמים פרויקטים של תשתיות והסדרים ביטחוניים עתידיים להחלפת כוחות יוניפי\"ל.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות אש ישראלית יומיומית הכוללת ירי ארטילרי, תקיפות רחפנים ושיגור מיירטים מול נוכחות כוחות בשטח"
    },
    {
     "name": "דרום סוריה",
     "status": "תנועת רכבי סיור צבאיים של צה\"ל במחוז דרעא, איסוף אווירי ומתיחות סביב דרישות לפיקוח האו\"ם במחוז קוניטרה"
    },
    {
     "name": "פנים לבנון והמערכת הפוליטית",
     "status": "החרפת החיכוך בין מנגנוני הביטחון והמשפט הלבנוניים לבין חזבאללה בעקבות תפיסת אמצעי לחימה וסגירת ערוצי מימון איראניים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10171355-01",
     "title": "חדירת כלי רכב צבאיים ישראליים לאזור דרעא בדרום סוריה",
     "summary": "שני כלי רכב צבאיים של ישראל נכנסו למרחב ואדי אל-רוקאד במערב מחוז דרעא, במקביל לפעילות של כלי טיס בלתי מאויש לאיסוף מודיעין.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:50:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:50:32+00:00",
     "last_update_at": "2026-10-17T12:50:32+00:00",
     "what_is_not_verified": "לא פורסמו פרטים נוספים או אימות רשמי על יעד הפעילות ומשכה מעבר לדיווח בסוכנות הידיעות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-enter-western-daraa-countryside-in-southern-syria/4091982",
       "published_at": "2026-10-17T12:50:32+00:00"
      }
     ],
     "places": [
      {
       "name": "ואדי אל-רוקאד, סוריה",
       "lat": 32.8011,
       "lon": 35.8268
      },
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-10171355-02",
     "title": "תקיפות והפגזות של צה\"ל בדרום לבנון",
     "summary": "הפגזות ארטילריות, ירי טנקים ואש מקלעים בוצעו לעבר עיירות ושטחים פתוחים בדרום לבנון, בהם חדאת'א, אל-מנצורי, עיתא אל-ג'בל ועמק אל-חג'יר, לצד פיצוץ סמוך למוסד דתי ותנועת רק\"ם.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T09:00:45+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T09:00:45+00:00",
     "last_update_at": "2026-10-17T09:00:45+00:00",
     "what_is_not_verified": "אין אימות עצמאי לכלל המיקומים ולנזקים שנגרמו כתוצאה מהאש המדווחת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a6a60e0ebed53d4d",
       "url": "https://english.almanar.com.lb/article/139207/",
       "published_at": "2026-10-17T09:00:45+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      },
      {
       "name": "עיתא אל-ג'בל, לבנון",
       "lat": 33.1745,
       "lon": 35.4094
      },
      {
       "name": "תולין, לבנון",
       "lat": 33.2544,
       "lon": 35.4399
      }
     ]
    },
    {
     "id": "NORTH-10171355-03",
     "title": "הטלת פצצות מרחפן ישראלי על מבנה במיפדון",
     "summary": "רחפן ישראלי הטיל פצצות על מבנה בכפר מיפדון שבנפת א-נבטיה בדרום לבנון; הפצצה הראשונה לא התפוצצה והשנייה התפוצצה, וצבא לבנון פעל לנטרול הנפל.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T14:01:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T14:01:54+00:00",
     "last_update_at": "2026-10-16T14:23:17+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים במבנה שהותקף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48605",
       "published_at": "2026-10-16T14:23:17+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132025",
       "published_at": "2026-10-16T14:01:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מיפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      }
     ]
    },
    {
     "id": "NORTH-10171355-04",
     "title": "שיגור מיירטים לעבר מטרת שווא בדרום לבנון",
     "summary": "שני מיירטים שוגרו לעבר מטרה שהתבררה כמטרת שווא במרחב שבו פועלים כוחות צה\"ל בדרום לבנון, ללא הפעלת התרעות.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T16:33:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:33:01+00:00",
     "last_update_at": "2026-10-16T16:59:04+00:00",
     "what_is_not_verified": "מהות האות שהביא לזיהוי הראשוני כמטרה חשודה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132031",
       "published_at": "2026-10-16T16:59:04+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25392",
       "published_at": "2026-10-16T16:57:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132030",
       "published_at": "2026-10-16T16:34:57+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25391",
       "published_at": "2026-10-16T16:33:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10171355-05",
     "title": "הוצאת צווי מעצר בלבנון לבכירים בחזבאללה בעקבות תפיסת משאית נפץ",
     "summary": "התובע הכללי בלבנון הוציא צווי מעצר לבכירים בחזבאללה, בהם ראש ועדת הקישור חסין עבדאללה ועוזרו, לאחר שנתפסה משאית ובה שמונה מאות קילוגרמים של חומרי נפץ בדרכה מבעלבכ לדאחיה בביירות.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T08:17:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:17:22+00:00",
     "last_update_at": "2026-10-17T08:17:22+00:00",
     "what_is_not_verified": "החשד כי חומר הנפץ יועד לביצוע התנקשויות בתוך לבנון טרם אומת בהליך שיפוטי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132046",
       "published_at": "2026-10-17T08:17:22+00:00"
      }
     ],
     "places": [
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10171355-06",
     "title": "עימות וחילוקי דעות בין חזבאללה לגורמי ביטחון באזור גלרי סמעאן",
     "summary": "חמושים מטעם חזבאללה כיתרו סיור של מחלקת החקירות הפליליות של לבנון, ונסוגו עם הגעת צבא לבנון; חזבאללה הכחיש כל קשר למחסן שנבדק וטען כי הפעולה נעשתה בניגוד למנגנון התיאום.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T12:01:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T12:01:33+00:00",
     "last_update_at": "2026-10-16T13:55:24+00:00",
     "what_is_not_verified": "תוכן המחסן והגורמים המדויקים המחזיקים בו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb3f0d25ec960f0a",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963227/hezbollah-clarifies-gallery-semaan-incident-denies-links-to-warehouse/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963227",
       "published_at": "2026-10-16T13:45:12+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_fb3f0d25ec960f0a",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963212/lebanese-army-intervenes-after-armed-hezbollah-members-surround-crimin/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963212",
       "published_at": "2026-10-16T12:01:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10171355-07",
     "title": "שלילת רישיון הפעילות של בנק סאדראת האיראני בלבנון",
     "summary": "נגיד הבנק המרכזי של לבנון הודיע על שלילת רישיונו של בנק סאדראת האיראני כדי להגן על המערכת הבנקאית במדינה מפני סנקציות מצד ארצות הברית.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T17:07:13+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:07:13+00:00",
     "last_update_at": "2026-10-16T17:07:13+00:00",
     "what_is_not_verified": "אין מחלוקת על שלילת הרישיון; הערכות לגבי היעדר השפעה כלכלית מתבססות על ניתוח מומחה בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/avoiding-sanctions-lebanon-revokes-bank-saderat-irans-license",
       "published_at": "2026-10-16T17:07:13+00:00"
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
     "id": "NORTH-10171355-08",
     "title": "לחץ אמריקאי לביטול חוק החרם על ישראל בלבנון",
     "summary": "שר החוץ האמריקאי העלה בשיחה עם נשיא לבנון דרישה לבטל או לשנות את חוק החרם על ישראל מ-1955 ולקדם ערוץ תקשורת צבאי ישיר בין המדינות, בעקבות תלונה משפטית נגד שגרירת לבנון בוושינגטון.",
     "axis": "לבנון - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T14:15:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T14:15:00+00:00",
     "last_update_at": "2026-10-16T16:26:02+00:00",
     "what_is_not_verified": "האם התקיימה בפועל פנייה ישירה בין שגרירת לבנון לשגריר ישראל, שכן נשיא לבנון הכחיש זאת והתיק נסגר מחוסר ראיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-pressures-lebanon-scrap-israel-boycott-laws",
       "published_at": "2026-10-16T16:26:02+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963199/lebanons-1955-israel-boycott-law-why-is-the-us-raising-it-now/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963199",
       "published_at": "2026-10-16T14:15:00+00:00"
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
     "id": "NORTH-10171355-09",
     "title": "קידום מיזם אנרגיה וחשמל קטארי ללבנון דרך סוריה",
     "summary": "לבנון וקטר סיכמו על הכנת מזכר הבנות לפרויקט אספקת חשמל וגז טבעי מתוצרת חברת יו-סי-סי הקטארית דרך שטח סוריה, לצד בחינת חיבור עתידי של קווי נפט.",
     "axis": "לבנון - קטר - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T12:53:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:53:30+00:00",
     "last_update_at": "2026-10-17T11:37:09+00:00",
     "what_is_not_verified": "לוחות הזמנים ליישום והיכולת להזרים חשמל וגז בפועל דרך שטח סוריה ללא מכשולים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21643674",
       "published_at": "2026-10-17T11:37:09+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/qatar-seeks-to-activate-joint-energy-projects-with-lebanon-urges-israeli-withdrawal/4091562",
       "published_at": "2026-10-16T21:35:48+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/qatar-announces-project-develop-lebanons-electricity-sector",
       "published_at": "2026-10-16T14:59:16+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/qatar-pm-beirut-lebanon-seeks-economic-relief-what-know",
       "published_at": "2026-10-16T14:03:57+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963219/sources-to-lbci-lebanon-qatar-move-forward-with-electricity-project-to/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963219",
       "published_at": "2026-10-16T12:53:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "דיר עמאר, לבנון",
       "lat": 34.462,
       "lon": 35.8994
      }
     ]
    },
    {
     "id": "NORTH-10171355-10",
     "title": "האשמות סוריות נגד ישראל בנושא הדרוזים בא-סווידאא",
     "summary": "גורם בממשלת סוריה דחה את הצהרות ראש ממשלת ישראל על שיחה עם נשיא סוריה בעת אירועי יולי 2025, והאשים את ישראל בניצול הדרוזים לצורכי תעמולת בחירות ובחימוש מליציה מקומית ליצירת תסיסה.",
     "axis": "סוריה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T17:04:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:04:39+00:00",
     "last_update_at": "2026-10-17T10:56:50+00:00",
     "what_is_not_verified": "דמשק לא אישרה ולא הכחישה את עצם קיום השיחה הטלפונית בין נתניהו לא-שרע, וטענות חימוש המליציה לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132059",
       "published_at": "2026-10-17T10:56:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132058",
       "published_at": "2026-10-17T10:32:55+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-rejects-israeli-politicisation-suweidas-druze",
       "published_at": "2026-10-16T17:04:39+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
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
     "id": "NORTH-10171355-11",
     "title": "פניית מושל קוניטרה לכוח האו\"ם לתיעוד הפרות ישראליות",
     "summary": "מושל קוניטרה בסוריה קרא לכוח המשקיפים של האו\"ם לתעד הפרות של ישראל בגזרה על מנת להגן על האוכלוסייה המקומית.",
     "axis": "דרום סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T12:16:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:16:41+00:00",
     "last_update_at": "2026-10-17T12:16:41+00:00",
     "what_is_not_verified": "תגובת כוח האו\"ם או היקף ההפרות המוצהרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-s-quneitra-governor-urges-un-force-to-document-israeli-violations/4091954",
       "published_at": "2026-10-17T12:16:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10171355-12",
     "title": "ביקור שרי החוץ וההגנה של צרפת בביירות",
     "summary": "שרי החוץ וההגנה של צרפת הגיעו ללבנון לדיונים עם הנשיא ומפקד הצבא על הנוכחות הבינלאומית בדרום המדינה לאחר תום מנדט יוניפי\"ל ויישום הסכם המסגרת עם ישראל.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T08:10:52+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:10:52+00:00",
     "last_update_at": "2026-10-17T08:10:52+00:00",
     "what_is_not_verified": "פרטי הסיכומים שיושגו במהלך השיחות עם ההנהגה הלבנונית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963310/french-foreign-and-defense-ministers-arrive-in-lebanon-for-talks-on-se/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963310",
       "published_at": "2026-10-17T08:10:52+00:00"
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
     "id": "NORTH-10171355-13",
     "title": "ממצאים המעכבים חידוש טיסות ישירות מארצות הברית לביירות",
     "summary": "דוח של סוכנות התעופה האזרחית הבינלאומית של האו\"ם הצביע על ליקויים בנמל התעופה הבינלאומי בביירות והיעדר אישור תקף, דבר המעכב את המהלך האמריקאי לחידוש טיסות ישירות.",
     "axis": "לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T14:30:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T14:30:34+00:00",
     "last_update_at": "2026-10-16T21:48:05+00:00",
     "what_is_not_verified": "משך העיכוב עד להשלמת דרישות הבטיחות על ידי הרשויות בלבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
       "published_at": "2026-10-16T21:48:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
       "published_at": "2026-10-16T16:46:29+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963236/trump-move-to-restart-direct-us-flights-with-lebanon-hits-roadblock-re/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963236",
       "published_at": "2026-10-16T14:30:34+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    }
   ],
   "not_verified": [
    "טענת ראש ממשלת ישראל על שיחה טלפונית חריפה עם נשיא סוריה ביולי 2025 שהביאה להפסקת הטבח בא-סווידאא לא אושרה בדמשק",
    "טענות ממשלת סוריה כי ישראל חימשה מליציה מקומית כדי לחולל אי-שקט בדרום המדינה",
    "החשד כי משאית חומרי הנפץ שנתפסה בלבנון יועדה לפעולות התנקשות פוליטיות",
    "הטענה כי שגרירת לבנון בוושינגטון קיימה מגע ישיר עם שגריר ישראל"
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
      "מניעת טבח באוכלוסייה הדרוזית בדרום סוריה ופגיעה בתשתיות צבאיות בסוריה בעת איום",
      "יירוט מטרות אוויריות חשודות לשמירה על שלום כוחותיה הפועלים בדרום לבנון"
     ],
     "inferred": [
      "שימור חופש פעולה מבצעי ואיסופי ברצועת הגבול בדרום לבנון ובדרום סוריה",
      "קידום נורמליזציה ותקשורת צבאית ישירה עם לבנון תוך שימוש במנופי לחץ אמריקאיים"
     ],
     "forecast": [
      "המשך פעילות אכיפה נקודתית ואש ארטילרית לסיכול התבססות חמושים בסמוך לגבול הצפון",
      "הגברת החיכוך המדיני מול סוריה בנוגע לשליטה ולמעורבות במחוזות הדרומיים"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "הכחשת מעורבות בפעילות של מחסנים ומתקנים אזרחיים בביירות ודרישה להקפדה על מנגנוני התיאום הביטחוניים"
     ],
     "inferred": [
      "ניסיון לשמר את מלאי אמצעי הלחימה וחומרי הנפץ בלבנון חרף הגברת הפיקוח של מנגנוני הביטחון",
      "התנגדות עזה לנורמליזציה ולכל שינוי בחוקי החרם הלבנוניים כלפי ישראל"
     ],
     "forecast": [
      "המשך חיכוך סמוי וגלוי עם מערכת המשפט והצבא בלבנון סביב ניסיונות פירוק נכסי הארגון"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "חקירת הברחות חומרי הנפץ, אכיפת החוק על ידי כוחות הביטחון והגנה על המערכת הבנקאית מסנקציות זרות",
      "הסדרת נוכחות בינלאומית חלופית ליוניפי\"ל בדרום המדינה ושיקום תשתיות החשמל בסיוע קטר"
     ],
     "inferred": [
      "שאיפה לצמצם את האחיזה והעצמאות הביטחונית של חזבאללה בביירות ובדרום המדינה",
      "איזון בין דרישות ארצות הברית לרפורמות ביטחוניות ומדיניות לבין שמירה על יציבות פנימית"
     ],
     "forecast": [
      "החרפת המתח הפוליטי הפנימי בעקבות צעדים משפטיים וכלכליים נגד מוקדי כוח של חזבאללה"
     ]
    },
    {
     "actor": "ממשלת סוריה",
     "declared": [
      "שמירה על מעמדם של הדרוזים בא-סווידאא כחלק בלתי נפרד מסוריה ודחיית כל התערבות ישראלית",
      "קריאה לגורמי האו\"ם לתעד הפרות צבאיות ישראליות במחוז קוניטרה"
     ],
     "inferred": [
      "בלימת הניסיונות הישראליים ליצור אזור השפעה או בריתות עדתיות בדרום המדינה",
      "הסתייעות במיזמי אנרגיה אזוריים עם קטר ולבנון לחיזוק מעמדה כנתיב מעבר חיוני"
     ],
     "forecast": [
      "המשך תלונות דיפלומטיות ודרישה לערבויות בינלאומיות לנוכח כניסות ישראליות לאזור החיץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/139207/",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-s-quneitra-governor-urges-un-force-to-document-israeli-violations/4091954",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21643674",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963236/trump-move-to-restart-direct-us-flights-with-lebanon-hits-roadblock-re/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963236",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132058",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48605",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25391",
     "accessed_at": "2026-10-17T13:55:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-16T23:41:39+00:00",
  "changes": {
   "NORTH-10171355-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פעילות כוחות צה\"ל במחוז דרעא בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10171355-02": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "פעילות צבאית ותקיפות צה\"ל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10171355-03": {
    "kind": "new"
   },
   "NORTH-10171355-04": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירטים לעבר מטרת שווא בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10171355-05": {
    "kind": "new"
   },
   "NORTH-10171355-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "עימות בעקבות פשיטת כוחות ביטחון לבנוניים באזור הדאחייה בביירות",
    "score": 1.0
   },
   "NORTH-10171355-07": {
    "kind": "new"
   },
   "NORTH-10171355-08": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "שלילת רישיון הבנק האיראני סאדראת בלבנון בעקבות לחץ אמריקאי",
    "score": 1.0
   },
   "NORTH-10171355-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ביקור ראש ממשלת קטר בביירות וקידום מיזמי אנרגיה בין קטר, לבנון וסוריה",
    "score": 1.0
   },
   "NORTH-10171355-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חילופי האשמות בין ישראל לממשלת סוריה בנוגע לעדה הדרוזית בא-סווידאא",
    "score": 1.0
   },
   "NORTH-10171355-11": {
    "kind": "new"
   },
   "NORTH-10171355-12": {
    "kind": "new"
   },
   "NORTH-10171355-13": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "דרישה אמריקאית לביטול חוק החרם על ישראל וקשיים בחידוש הטיסות הישירות",
    "score": 1.0
   }
  }
 }
};
