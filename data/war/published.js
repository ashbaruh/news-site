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
  "draft": "drafts/ukraine/2026-10-16T2340__ukraine-202610162340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-16T23:40:33+00:00",
   "window": {
    "from": "2026-10-15T23:40:33+00:00",
    "to": "2026-10-16T23:40:33+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610162340"
   },
   "summary": "רוסיה מנהלת מערכה אווירית מוגברת נגד מערך האנרגיה ותשתיות אזרחיות באוקראינה, במטרה לשבש את התפקוד העורפי לקראת עונת החורף. במקביל, כוחות אוקראינה מפעילים תקיפות עומק נגד מתקני תעשייה ובתי זיקוק בשטח רוסיה ומבצעים התקפות נגד מקומיות בחזית המזרחית. הזירה מושפעת ממתיחות סביב אספקת מערכות הגנה אווירית ושיבושים ביכולות התקשורת הלוויינית של צבא אוקראינה.",
   "fronts": [
    {
     "name": "דונבאס",
     "status": "כוחות אוקראינה פועלים בהתקפות נגד ומחזירים שטחים במסגרת מבצע ייעודי"
    },
    {
     "name": "העורף האוקראיני",
     "status": "תחת גלי תקיפות רוסיות אינטנסיביות של כטב\"מים וטילים נגד מתקני אנרגיה ומבנים אזרחיים"
    },
    {
     "name": "עורף רוסיה",
     "status": "יעד לתקיפות כטב\"מים אוקראיניות על בתי זיקוק ומתקני תעשייה שהביאו להגבלות תעופה"
    },
    {
     "name": "ציר האספקה לחצי האי קרים",
     "status": "מותקף באמצעות כלי טיס בלתי מאוישים אוקראיניים נגד מטרות לוגיסטיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10162340-01",
     "title": "הגבלות תעופה בנמלי תעופה במוסקבה בעקבות מתקפות",
     "summary": "סוכנות התחבורה האווירית הפדרלית של רוסיה הטילה מגבלות בשלושה מארבעת נמלי התעופה המרכזיים באזור מוסקבה, ומשרד התחבורה הכריז על ניטור מיוחד על רקע תקיפות אוקראיניות על בתי זיקוק.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T22:45:41+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T22:45:41+00:00",
     "last_update_at": "2026-10-16T22:45:41+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לבתי הזיקוק ומשך המגבלות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/moscow-closes-sky-multiple-nights-in-row-as-ukraine-resumes-refinery-strikes/",
       "published_at": "2026-10-16T22:45:41+00:00"
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
     "id": "UKRAINE-10162340-02",
     "title": "רוסיה שיגרה מאות כטב\"מים וטילים לעבר אוקראינה",
     "summary": "חיל האוויר האוקראיני דיווח כי רוסיה שיגרה מאות כלי טיס בלתי מאוישים ומספר טילי שיוט, ומערכות ההגנה יירטו או שיבשו את מרביתם.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:54:00+00:00",
     "last_update_at": "2026-10-16T16:54:00+00:00",
     "what_is_not_verified": "מספר הפגיעות המדויק ומידת הנזק של הכלים שלא יורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a87886ae53908330",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058422/",
       "published_at": "2026-10-16T16:54:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-03",
     "title": "הפסקות חשמל נרחבות עקב פגיעות בתשתיות אנרגיה במערב אוקראינה",
     "summary": "חברת החשמל הממלכתית של אוקראינה דיווחה על שיבושים קשים באספקת החשמל במחוזות ריבנה ווהלין, כולל בערים ריבנה ולוצק, בעקבות תקיפות כטב\"מים רוסיים.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T16:47:00+00:00",
     "last_update_at": "2026-10-16T16:47:00+00:00",
     "what_is_not_verified": "משך הזמן הנדרש להשלמת התיקונים המלאים ברשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_5ffacfc42eadc3d4",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058419/",
       "published_at": "2026-10-16T16:47:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ריבנה, אוקראינה",
       "lat": 50.6196,
       "lon": 26.2513
      },
      {
       "name": "לוצק, אוקראינה",
       "lat": 50.7451,
       "lon": 25.3201
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-04",
     "title": "פגיעה במבני מגורים בחרקוב כתוצאה מתקיפה רוסית",
     "summary": "תקיפה רוסית גרמה נזק לבנייני מגורים וניפוץ חלונות רבים ברובע סלובידסקי בעיר חרקוב.",
     "axis": "מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T20:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T20:30:00+00:00",
     "last_update_at": "2026-10-16T20:30:00+00:00",
     "what_is_not_verified": "מידע על נפגעים בנפש באירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175294-russian-attack-damages-homes-in-kharkiv-over-100-windows-shattered.html",
       "published_at": "2026-10-16T20:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-05",
     "title": "טענות רוסיות על פגיעה נרחבת ביעדים אסטרטגיים ולוגיסטיים",
     "summary": "ראש המטה הכללי של צבא רוסיה ולרי גרסימוב טען כי כוחותיו השמידו עשרות מרכזים לוגיסטיים, מאות מתקני נמל וכלי שיט שהובילו אספקה צבאית לאוקראינה.",
     "axis": "כלל הזירה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T21:00:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T21:00:23+00:00",
     "last_update_at": "2026-10-16T21:00:23+00:00",
     "what_is_not_verified": "אימות עצמאי למספרי המטרות והנזקים שהציג גרסימוב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2203371",
       "published_at": "2026-10-16T21:00:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-06",
     "title": "מחלוקת ודיווחים על הגבלת שירותי סטארלינק וסטארשילד לכוחות אוקראינה",
     "summary": "באוקראינה מדווחים על שיבושים וקשיים ברשת התקשורת הלוויינית בשדה הקרב, בעוד גורמים בארצות הברית, כולל הנשיא טראמפ, מכחישים כי הורו על הגבלת המערכת.",
     "axis": "תקשורת וסיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T18:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T18:00:00+00:00",
     "last_update_at": "2026-10-16T22:19:01+00:00",
     "what_is_not_verified": "האם ניתנה הוראה מכוונת להאטת הרשת ומי הגורם שאחראי לכך בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203387",
       "published_at": "2026-10-16T22:19:01+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175297-ukraine-awaiting-pentagon-and-spacex-confirmation-that-starshield-fully-restored-senik-says.html",
       "published_at": "2026-10-16T20:55:00+00:00"
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
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/musk-asked-trump-to-restrict-ukraines-starlink-service-telegraph-reports/",
       "published_at": "2026-10-16T18:19:45+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/16/ukraine-military-starlink-access-starshield-volodymyr-zelenskyy",
       "published_at": "2026-10-16T18:01:19+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058430/",
       "published_at": "2026-10-16T18:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-07",
     "title": "שוודיה ובלגיה מקדמות חבילות סיוע צבאי ואנרגטי לאוקראינה",
     "summary": "ממשלת בלגיה התחייבה לספק מטוסי קרב במהלך השנה, ושוודיה הודיעה על חבילת מימון לשיקום ותמיכה ברשת האנרגיה לקראת עונת החורף.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:43:00+00:00",
     "last_update_at": "2026-10-16T19:20:00+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים להגעת מטוסי הקרב בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-defense/4175282-belgium-to-deliver-10-f16-fighter-jets-to-ukraine-this-year-de-wever-says.html",
       "published_at": "2026-10-16T19:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058418/",
       "published_at": "2026-10-16T16:43:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10162340-08",
     "title": "התקפת כטב\"ם על מתקן תעשייתי במחוז סורגוט ברוסיה",
     "summary": "מושל מחוז סורגוט ברוסיה דיווח על שרפה שפרצה במתקן תעשייתי מקומי בעקבות פגיעת כלי טיס בלתי מאויש.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T18:28:32+00:00",
     "last_update_at": "2026-10-16T18:28:32+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים במתקן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-drone-attack-sparks-fire-at-industrial-facility-in-russias-surgut-district/",
       "published_at": "2026-10-16T18:28:32+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז סורגוט, רוסיה",
       "lat": 61.2419,
       "lon": 73.3953
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-09",
     "title": "מעצר בגרמניה בחשד להצתת תחנת לוויין של סטארלינק בפולין",
     "summary": "שני אזרחים טורקים נעצרו בגרמניה בחשד למעורבות בהצתת תחנת תקשורת לוויינית קרקעית של סטארלינק בפולין בספטמבר, כאשר נבדק חשד להפעלתם בידי גופי ביון רוסיים.",
     "axis": "ביטחון באירופה ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T19:19:50+00:00",
     "last_update_at": "2026-10-16T19:19:50+00:00",
     "what_is_not_verified": "הוכחה ודאית לקשר ישיר בין העצורים לבין המודיעין הרוסי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/16/russian-intelligence-may-have-hired-a-turkish-crime-gang-to-set-fire-to-a-starlink-ground-station-in-poland-spiegel-reports",
       "published_at": "2026-10-16T19:19:50+00:00"
      }
     ],
     "places": [
      {
       "name": "וולה קרובובסקה, פולין",
       "lat": 51.8627,
       "lon": 20.9187
      },
      {
       "name": "נירטינגן, גרמניה",
       "lat": 48.6266,
       "lon": 9.3365
      }
     ]
    },
    {
     "id": "UKRAINE-10162340-10",
     "title": "התקדמות אוקראינית במסגרת מבצע בדונבאס",
     "summary": "כוחות אוקראיניים הצליחו להחזיר לשליטתם שטחים באזור דונבאס במסגרת מבצע צבאי המכונה ויוואלדי, תוך שימוש בתקשורת לוויינית.",
     "axis": "דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T16:00:30+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T16:00:30+00:00",
     "last_update_at": "2026-10-16T16:00:30+00:00",
     "what_is_not_verified": "גבולות השטח המדויקים שנכבשו מחדש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_3f0c36560af318cd",
       "url": "https://www.bbc.co.uk/news/articles/cvx284w16z1po?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-16T16:00:30+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות הצדדים בדבר מעורבות ישירה של הממשל האמריקני או אילון מאסק בהגבלת רשת סטארלינק באוקראינה",
    "מספרי היעדים האסטרטגיים שהושמדו לפי דיווחי המטה הכללי הרוסי",
    "מצב מלאי טילי היירוט של מערכות הפטריוט באוקראינה והאם אזלו לחלוטין",
    "מעורבות ישירה של המודיעין הרוסי בהצתת תחנת סטארלינק בפולין",
    "תוכנית רוסית מודלפת להשבתת מערכות החשמל, המים והחימום בערים מרכזיות באוקראינה"
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
      "פגיעה ביעדים צבאיים, לוגיסטיים ומתקני תשתית התומכים בצבא אוקראינה",
      "האשמת מוסדות בינלאומיים בסיוע למלחמה שמנהל המערב נגדה"
     ],
     "inferred": [
      "הפעלת לחץ כבד על האוכלוסייה האזרחית באמצעות קריסת מערכי החימום והחשמל לקראת החורף",
      "פגיעה ברציפות הלחימה האוקראינית על ידי שלילת יכולות שליטה ותקשורת"
     ],
     "forecast": [
      "המשך מיקוד התקיפות האוויריות בתחנות כוח ומערכות חלוקת אנרגיה באוקראינה",
      "החרפת אמצעי הפיקוח וההגבלות הביטחוניות בתחומי רוסיה מול איומי כטב\"מים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה עצמית ודרישה לסיוע בינלאומי דחוף של מערכות הגנה אווירית ומימון",
      "השבת שטחים כבושים ופגיעה בלוגיסטיקה ובמערכי האנרגיה של הצבא הרוסי"
     ],
     "inferred": [
      "ניסיון להכריח את רוסיה להקצות משאבי הגנה לעורפה באמצעות תקיפת מתקני נפט ודלק",
      "חיפוש חלופות צבאיות וטכנולוגיות לעקיפת מגבלות לוגיסטיות ותקשורתיות בחזית"
     ],
     "forecast": [
      "הגברת הלחץ הדיפלומטי על מדינות אירופה לקבלת מטוסי קרב ואמצעי נ\"מ",
      "המשך מבצעים התקפיים ממוקדים בחזית המזרחית ונגד שיירות אספקה רוסיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cvx284w16z1po?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/16/ukraine-military-starlink-access-starshield-volodymyr-zelenskyy",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-drone-attack-sparks-fire-at-industrial-facility-in-russias-surgut-district/",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/16/russian-intelligence-may-have-hired-a-turkish-crime-gang-to-set-fire-to-a-starlink-ground-station-in-poland-spiegel-reports",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/16/8058418/",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2203387",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48619",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-defense/4175282-belgium-to-deliver-10-f16-fighter-jets-to-ukraine-this-year-de-wever-says.html",
     "accessed_at": "2026-10-16T23:40:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T23:42:04+00:00",
  "changes": {
   "UKRAINE-10162340-01": {
    "kind": "new"
   },
   "UKRAINE-10162340-02": {
    "kind": "new"
   },
   "UKRAINE-10162340-03": {
    "kind": "new"
   },
   "UKRAINE-10162340-04": {
    "kind": "possible",
    "prev": "תוכנית רוסית לשיתוק תשתיות החשמל, המים והחימום בערים מרכזיות",
    "score": 0.633
   },
   "UKRAINE-10162340-05": {
    "kind": "new"
   },
   "UKRAINE-10162340-06": {
    "kind": "new"
   },
   "UKRAINE-10162340-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אספקת חבילות סיוע צבאי וטילים מבריטניה ומפולין לאוקראינה",
    "score": 0.65
   },
   "UKRAINE-10162340-08": {
    "kind": "possible",
    "prev": "מתקפת כלי טיס בלתי מאוישים על מחוז מוסקבה",
    "score": 0.467
   },
   "UKRAINE-10162340-09": {
    "kind": "new"
   },
   "UKRAINE-10162340-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-16T2341__north-202610162341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-16T23:41:39+00:00",
   "window": {
    "from": "2026-10-15T23:41:39+00:00",
    "to": "2026-10-16T23:41:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610162341"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית קרקעית ואווירית של צה\"ל בדרום לבנון ובדרום סוריה, תוך הריסות מבנים וסריקות מבצעיות. במישור המדיני-פנימי בלבנון מופעל לחץ אמריקאי לפירוק חיזבאללה מנשקו ולשינוי החקיקה העוינת לישראל, לצד חיכוך מקומי בין פעילי חיזבאללה למנגנוני הביטחון של המדינה. במקביל, קטר מקדמת מיזמי אנרגיה ללבנון דרך שטח סוריה, ודמשק מאשימה את ישראל בניסיונות לערער את היציבות הפנימית במחוזות הדרומיים.",
   "fronts": [
    {
     "name": "חזית דרום לבנון",
     "status": "פעילות מבצעית הכוללת תקיפות אוויריות, סריקות וירי ארטילרי של צה\"ל לצד שיגורי מיירטים"
    },
    {
     "name": "חזית פנים לבנון (ביירות והדאחייה)",
     "status": "חיכוך בין מנגנוני הביטחון של לבנון לפעילי חיזבאללה, לצד מהלכים לצמצום השפעה איראנית"
    },
    {
     "name": "חזית דרום סוריה (דרעא וא-סווידאא)",
     "status": "פעילות קרקעית מוגבלת של כוחות ישראליים בדרעא ועימות הצהרתי חריף בין ירושלים לדמשק"
    },
    {
     "name": "גבול הצפון (העורף הישראלי)",
     "status": "דריכות ביטחונית ומאבק של ראשי הרשויות המקומיות על תקציבי שיקום ומיגון"
    }
   ],
   "events": [
    {
     "id": "NORTH-10162341-01",
     "title": "פעילות צבאית ותקיפות צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו ירי ארטילרי, תקיפות אוויריות, סריקות והריסות מבנים, וכן תועדה התקדמות כלי רכב צבאיים לעבר פאתי כפר שובא. בנוסף דווח על תקיפת רחפן חמוש שהטיל פצצות על מבנה בכפר מיפדון שבמחוז א-נבטיה, החרמת רכב אזרחי בזווטר, וירי ארטילרי לעבר חדאת'א ועייתא אל-ג'בל.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:59:43+00:00",
     "last_update_at": "2026-10-16T15:13:54+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בפעילויות השונות לא צוין במדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://english.almanar.com.lb/article/139062/",
       "published_at": "2026-10-16T15:13:54+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-launches-airstrikes-artillery-shelling-demolitions-in-southern-lebanon/4091177",
       "published_at": "2026-10-16T14:29:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://t.me/alexmehacarmel/48605",
       "published_at": "2026-10-16T14:23:17+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_580f17ced374fdc8",
       "url": "https://english.almanar.com.lb/article/139037/",
       "published_at": "2026-10-16T14:19:18+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_608fab478168bc3f",
       "url": "https://t.me/abualiexpress/132025",
       "published_at": "2026-10-16T14:01:54+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_076b8c45e2bc1e65",
       "url": "https://english.almanar.com.lb/article/139012/",
       "published_at": "2026-10-16T12:59:43+00:00"
      }
     ],
     "places": [
      {
       "name": "מיפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      },
      {
       "name": "כפר שובא, לבנון",
       "lat": 33.3277,
       "lon": 35.6927
      },
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      }
     ]
    },
    {
     "id": "NORTH-10162341-02",
     "title": "שיגור מיירטים לעבר מטרת שווא בדרום לבנון",
     "summary": "מערך ההגנה האווירית של צה\"ל שיגר מיירטים לעבר מטרה אווירית שזוהתה באזור פעילות הכוחות בדרום לבנון, ובהמשך התברר כי מדובר במטרת שווא. בהתאם למדיניות לא הופעלו התרעות בעורף.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T16:33:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T16:33:01+00:00",
     "last_update_at": "2026-10-16T16:59:04+00:00",
     "what_is_not_verified": "סוג המיירט המדויק ומאפייני הזיהוי השגוי",
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
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-10162341-03",
     "title": "עימות בעקבות פשיטת כוחות ביטחון לבנוניים באזור הדאחייה בביירות",
     "summary": "פשיטה של כוחות החקירות הפליליות ברובע הדאחייה על מחסן הובילה למתיחות מול חמושים המזוהים עם חיזבאללה אשר הקיפו את הכוח, עד להתערבות צבא לבנון. חיזבאללה פרסם הבהרה שלפיה הפשיטה נעשתה בלא תיאום מוקדם המקובל עקב רגישות ביטחונית ואיומי ישראל, אך הפעילות הושלמה על פי צו משפטי ואין לארגון קשר למחסן.",
     "axis": "פנים לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T12:01:33+00:00",
     "last_update_at": "2026-10-16T19:25:39+00:00",
     "what_is_not_verified": "זהות המחסנאים המדויקת ותכולת המחסן שנבדק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_b7023bc8db5a8e52",
       "url": "https://english.almanar.com.lb/article/139092/",
       "published_at": "2026-10-16T19:25:39+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b7023bc8db5a8e52",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963227/hezbollah-clarifies-gallery-semaan-incident-denies-links-to-warehouse/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963227",
       "published_at": "2026-10-16T13:45:12+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b7023bc8db5a8e52",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963212/lebanese-army-intervenes-after-armed-hezbollah-members-surround-crimin/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963212",
       "published_at": "2026-10-16T12:01:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10162341-04",
     "title": "פעילות כוחות צה\"ל במחוז דרעא בדרום סוריה",
     "summary": "עשרה כלי רכב צבאיים של צה\"ל התקדמו לעבר אזור סכר במערב מחוז דרעא שבדרום סוריה. במקום נשמעו קולות ירי ובוצעו סריקות בבתים, בליווי גיחות מטוסי קרב באוויר.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T06:14:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T06:14:34+00:00",
     "last_update_at": "2026-10-16T06:14:34+00:00",
     "what_is_not_verified": "האם היו נפגעים או מעצרים בפעילות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/10-israeli-military-vehicles-advance-near-dam-in-southern-syria/4090511",
       "published_at": "2026-10-16T06:14:34+00:00"
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
     "id": "NORTH-10162341-05",
     "title": "חילופי האשמות בין ישראל לממשלת סוריה בנוגע לעדה הדרוזית בא-סווידאא",
     "summary": "ממשלת סוריה גינתה את דברי ראש ממשלת ישראל שטען כי התערב ומנע טבח בדרוזים ביולי 2025 באמצעות תקיפת משרד הביטחון ומתחם ארמון הנשיאות בדמשק ושיחה עם נשיא סוריה. דמשק טענה מנגד כי ישראל חימשה מיליציה לא חוקית כדי לערער את היציבות ולגרור את סוריה למלחמה. במקביל פורסמה בישראל הודעת תמיכה בנתניהו מצד מנהיג העדה הדרוזית.",
     "axis": "ישראל - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T08:33:25+00:00",
     "last_update_at": "2026-10-16T20:20:44+00:00",
     "what_is_not_verified": "עצם קיומה ותוכנה של שיחת הטלפון בין נתניהו לנשיא סוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132040",
       "published_at": "2026-10-16T20:20:44+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-rejects-israeli-politicisation-suweidas-druze",
       "published_at": "2026-10-16T17:04:39+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21639453",
       "published_at": "2026-10-16T08:33:25+00:00"
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
     "id": "NORTH-10162341-06",
     "title": "ביקור ראש ממשלת קטר בביירות וקידום מיזמי אנרגיה בין קטר, לבנון וסוריה",
     "summary": "ראש ממשלת קטר נפגש בביירות עם נשיא לבנון ז'וזף עון ודן עמו בסיוע לייצוב המדינה, קידום פרויקטי חשמל ואספקת גז דרך סוריה בהיקף של עד שלושת אלפים מגה-וואט, לצד דרישה לנסיגת כוחות ישראל משטחי דרום לבנון ומסירתם לצבא לבנון. שר החוץ הלבנוני הביע רצון בכוח בינלאומי שיחליף את יוניפי\"ל.",
     "axis": "לבנון - סוריה - אזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T12:53:30+00:00",
     "last_update_at": "2026-10-16T21:35:48+00:00",
     "what_is_not_verified": "מועד החתימה הסופי על הסכם החשמל ואישורו בממשלת לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/qatar-seeks-to-activate-joint-energy-projects-with-lebanon-urges-israeli-withdrawal/4091562",
       "published_at": "2026-10-16T21:35:48+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139102/",
       "published_at": "2026-10-16T19:32:44+00:00"
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
      }
     ]
    },
    {
     "id": "NORTH-10162341-07",
     "title": "שלילת רישיון הבנק האיראני סאדראת בלבנון בעקבות לחץ אמריקאי",
     "summary": "הבנק המרכזי של לבנון ביטל את רישיונו של הבנק האיראני סאדראת שפעל במדינה, במטרה למנוע הטלת סנקציות כלכליות של ארצות הברית על המערכת הבנקאית הלבנונית, חרף הרגישות הפוליטית מול חיזבאללה.",
     "axis": "פנים לבנון - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T17:07:13+00:00",
     "last_update_at": "2026-10-16T17:07:13+00:00",
     "what_is_not_verified": "מידת ההשפעה של שלילת הרישיון על העברות כספים לחיזבאללה בפועל",
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
     "id": "NORTH-10162341-08",
     "title": "דרישה אמריקאית לביטול חוק החרם על ישראל וקשיים בחידוש הטיסות הישירות",
     "summary": "מזכיר המדינה האמריקאי העלה בשיחה עם נשיא לבנון דרישה לבטל את חוק החרם על ישראל משנת 1955 כדי לקדם שלום, במקביל למאמצים לפירוק חיזבאללה מנשקו. במקביל, יוזמת נשיא ארצות הברית לחידוש טיסות ישירות לביירות נתקלת בקשיים בעקבות ממצאי סוכנות התעופה של האו\"ם לגבי ליקויים בטיחותיים בנמל התעופה הבינלאומי.",
     "axis": "לבנון - ארצות הברית - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-16T14:15:00+00:00",
     "last_update_at": "2026-10-16T21:48:05+00:00",
     "what_is_not_verified": "האם ממשלת לבנון תנקוט צעדים מעשיים לשינוי חוק החרם",
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
       "name": "נמל התעופה הבינלאומי רפיק אל-חרירי, ביירות, לבנון",
       "lat": 33.8185,
       "lon": 35.4909
      }
     ]
    },
    {
     "id": "NORTH-10162341-09",
     "title": "מחאת ראשי רשויות בצפון ישראל נגד קיצוץ תקציבי שיקום",
     "summary": "יושב ראש פורום קו העימות וראשי רשויות בגבול הצפון שלחו מכתב בהול לראש הממשלה בדרישה להחריג את תקציבי השיקום והביטחון של יישובי הגבול מהקיצוץ הממשלתי הרוחבי המתוכנן.",
     "axis": "ישראל - עורף צפוני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-16T14:59:43+00:00",
     "last_update_at": "2026-10-16T16:43:13+00:00",
     "what_is_not_verified": "האם הממשלה תיעתר לדרישה ותחריג את התקציבים בהצבעה הקרובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957728",
       "published_at": "2026-10-16T16:43:13+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1ck002j3fx",
       "published_at": "2026-10-16T14:59:43+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת נתניהו על שיחת טלפון ישירה בינו לבין נשיא סוריה אחמד א-שרע",
    "טענת סוריה כי ישראל חימשה מיליציה בלתי חוקית בא-סווידאא במטרה לגרור אותה למלחמה",
    "הדיווחים ברשתות החברתיות על ירידה בתמיכה הציבורית בחיזבאללה בקרב הקהילה השיעית בצור",
    "ההערכות בדבר עיכוב ודאי של טיסות ישירות מארצות הברית לביירות"
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
      "מניעת התבססות איומים ופגיעה בריכוזי אוכלוסייה של העדה הדרוזית בדרום סוריה",
      "הגנה על מרחב הפעולה של כוחות צה\"ל בדרום לבנון"
     ],
     "inferred": [
      "הפעלת לחץ צבאי רציף בדרום לבנון ובדרום סוריה לשיבוש התארגנות מחדש של חיזבאללה ושלוחים איראניים",
      "יצירת מנופי השפעה פוליטיים וצבאיים באזורי הגבול של סוריה"
     ],
     "forecast": [
      "המשך פשיטות נקודתיות וירי ארטילרי מעבר לגבול לשמירה על חופש פעולה",
      "החרפת המתיחות המילולית מול המשטר בדמשק"
     ]
    },
    {
     "actor": "לבנון (ממשל וצבא)",
     "declared": [
      "דרישה לנסיגת כוחות ישראל משטחי הדרום והעברתם לשליטת צבא לבנון",
      "קידום מיזמי אנרגיה עם קטר וחידוש טיסות בינלאומיות ישירות לשיקום הכלכלה",
      "החלפת כוח יוניפי\"ל בכוח בינלאומי אחר עם סיום המנדט"
     ],
     "inferred": [
      "ניסיון לאזן בין לחץ אמריקאי לנטרול חיזבאללה לבין שמירה על יציבות פנים-לבנונית ומניעת מלחמת אזרחים",
      "הגנה על מערכת הבנקאות המקומית מפני סנקציות בינלאומיות"
     ],
     "forecast": [
      "העמקת התלות הכלכלית בקטר לפתרון משבר האנרגיה באמצעות צינורות מסוריה",
      "המשך חיכוכים מקומיים במוקדי שליטת חיזבאללה בעת אכיפת חוק"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "שמירה על נהלי תיאום ביטחוני בדאחייה עקב איומי ביטחון ישראליים",
      "הכחשת מעורבות באחסון בלתי חוקי של סחורות ומחויבות לבריאות הציבור"
     ],
     "inferred": [
      "שימור מעמדו הצבאי והאזרחי בלבנון חרף ניסיונות אמריקאיים וממשלתיים לפגוע בהשפעתו",
      "הגנה על צירי פעילות ואספקה תחת מעטה של הסכמי ביטחון פנימיים"
     ],
     "forecast": [
      "התנגדות תקיפה לכל מהלך לפירוק נשקו או לשינוי חוקי החרם על ישראל",
      "ניסיון לבלום שחיקה נוספת במעמדו הציבורי בקרב הקהילה השיעית"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "הגנה על אחדות המרקם הלאומי ודחיית התערבות ישראל בענייני העדה הדרוזית בא-סווידאא",
      "האשמת ישראל בניסיון לערער את השלום האזרחי ולגרור את המדינה למלחמה אזורית"
     ],
     "inferred": [
      "בלימת השפעה ישראלית באזורי הגבול הדרומיים סמוך לדרעא וא-סווידאא",
      "השגת רווח כלכלי ומעמדי באמצעות שינוע חשמל וגז מקטר ללבנון דרך שטח סוריה"
     ],
     "forecast": [
      "המשך גינויים חריפים לתנועות צה\"ל בדרום המדינה תוך הימנעות מעימות צבאי כולל",
      "שיתוף פעולה עם יוזמות תשתית אזוריות לחיזוק הלגיטימציה של השלטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/139102/",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/exclusive-trump-move-restart-direct-us-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/qatar-seeks-to-activate-joint-energy-projects-with-lebanon-urges-israeli-withdrawal/4091562",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21639453",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963199/lebanons-1955-israel-boycott-law-why-is-the-us-raising-it-now/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963199",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/us-move-restart-direct-flights-lebanon-hits-roadblock",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132040",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48605",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25391",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957728",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1ck002j3fx",
     "accessed_at": "2026-10-16T23:41:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-15T23:44:33+00:00",
  "changes": {
   "NORTH-10162341-01": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "דיווח על תקיפות ישראליות בעיירות בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10162341-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "שיגור מיירט צה\"ל לעבר מטרת שווא בדרום לבנון",
    "score": 1.0
   },
   "NORTH-10162341-03": {
    "kind": "new"
   },
   "NORTH-10162341-04": {
    "kind": "new"
   },
   "NORTH-10162341-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרות ראש ממשלת ישראל על בלימת פגיעה בדרוזים בדרום סוריה",
    "score": 0.817
   },
   "NORTH-10162341-06": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ביקור רשמי של ראש ממשלת קטאר בלבנון",
    "score": 1.0
   },
   "NORTH-10162341-07": {
    "kind": "possible",
    "prev": "לחץ אמריקני על נשיא לבנון בעניין מטעני הנפץ ודרישה לבלימת תקיפות ישראל",
    "score": 0.633
   },
   "NORTH-10162341-08": {
    "kind": "new"
   },
   "NORTH-10162341-09": {
    "kind": "new"
   }
  }
 }
};
