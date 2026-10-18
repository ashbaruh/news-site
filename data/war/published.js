/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-18T1409__yemen-202610181409.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-18T14:09:33+00:00",
   "window": {
    "from": "2026-10-17T14:09:33+00:00",
    "to": "2026-10-18T14:09:33+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610181409"
   },
   "summary": "העימות בתימן וסביבה מחריף עם קריסת הפסקת האש, כאשר החות'ים מגבירים מתקפות לעבר יעדים אסטרטגיים בעומק סעודיה ולצד גבולה הדרומי, לצד חידוש קרבות קרקעיים מול כוחות הממשלה. בתגובה, סעודיה מקדמת שיתופי פעולה אזוריים ומודיעיניים, בין היתר מול מצרים וגורמים נוספים, במטרה לייצב את מערכי ההגנה. במקביל, נרשמים איומים וחיכוכי ירי בנתיבי השיט הסמוכים לחופי תימן.",
   "fronts": [
    {
     "name": "גבול סעודיה–תימן",
     "status": "הסלמה בעקבות אובדן מסוק סעודי וחילופי אש מתמשכים באזור נג'ראן"
    },
    {
     "name": "עומק סעודיה",
     "status": "כוננות ושיבוש שגרה בריאד עקב פגיעות קודמות בשדות תעופה ומתקני נפט"
    },
    {
     "name": "דרום תימן (לחג' ותעז)",
     "status": "חידוש קרבות יבשתיים עזים בין כוחות הממשלה לחות'ים המלווים בנפגעים"
    },
    {
     "name": "הזירה הימית לחופי תימן",
     "status": "תקריות ירי וניסיונות תקיפה של חמושים נגד כלי שיט מסחריים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10181409-01",
     "title": "התרסקות או הפלת מסוק צבאי סעודי סמוך לגבול תימן",
     "summary": "מסוק צבאי של הקואליציה הסעודית התרסק באזור נג'ראן ושני אנשי צוותו נהרגו. הקואליציה הודיעה כי ההתרסקות אירעה כתוצאה מכשל טכני, בעוד שדובר החות'ים טען כי כוחותיהם יירטו והפילו את המסוק.",
     "axis": "גבול סעודיה–תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T20:34:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T20:34:00+00:00",
     "last_update_at": "2026-10-18T13:21:28+00:00",
     "what_is_not_verified": "קיימת מחלוקת בין הצדדים באשר לסיבת ההתרסקות, האם מדובר בתקלה טכנית או ביירוט חות'י, וכן לגבי דגם המסוק המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/saudi-chopper-pilots-killed-riyadh-landmark-tower-closes-offices-amid-houthi-fighting",
       "published_at": "2026-10-18T13:21:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-landmark-closes-offices-chopper-pilots-killed-near-yemen",
       "published_at": "2026-10-18T10:30:19+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-urges-us-accept-proposal-reopen-strait-hormuz",
       "published_at": "2026-10-18T08:16:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48649",
       "published_at": "2026-10-17T20:34:00+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ראן, סעודיה",
       "lat": 17.544,
       "lon": 44.2247
      }
     ]
    },
    {
     "id": "YEMEN-10181409-02",
     "title": "הנחיה לעבודה מרחוק במגדל מרכז הממלכה בריאד בעקבות מתקפות",
     "summary": "הנהלת גורד השחקים מרכז הממלכה בריאד הורתה לעובדי המשרדים במבנה לעבור לעבודה מרחוק באופן מידי עד להודעה חדשה, ברקע מתקפות חוזרות של החות'ים לעבר יעדים בסעודיה.",
     "axis": "עומק סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T10:30:19+00:00",
     "last_update_at": "2026-10-18T13:21:28+00:00",
     "what_is_not_verified": "ההנהלה לא פירטה בהודעתה את הסיבה הישירה להחלטה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/saudi-chopper-pilots-killed-riyadh-landmark-tower-closes-offices-amid-houthi-fighting",
       "published_at": "2026-10-18T13:21:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-landmark-closes-offices-chopper-pilots-killed-near-yemen",
       "published_at": "2026-10-18T10:30:19+00:00"
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
     "id": "YEMEN-10181409-03",
     "title": "קרבות עזים ואבדות בין כוחות ממשלת תימן לחות'ים בדרום המדינה",
     "summary": "התחדשות חילופי אש ועימותים קרקעיים בין כוחות הממשלה לחות'ים בדרום תימן; שמונה מחיילי הממשלה נהרגו בקרב בחזית מחוז לחג', וכוחות הממשלה טענו להריגת חות'ים באזור תעז.",
     "axis": "דרום תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T02:17:36+00:00",
     "last_update_at": "2026-10-18T06:13:11+00:00",
     "what_is_not_verified": "מספר הנפגעים מקרב החות'ים מבוסס על טענת כוחות הממשלה בלבד ולא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
       "published_at": "2026-10-18T06:13:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/eight-yemeni-government-forces-killed-battle-houthis",
       "published_at": "2026-10-18T02:17:36+00:00"
      }
     ],
     "places": [
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10181409-04",
     "title": "תקרית ירי לעבר מכלית גז מול חופי אל-מוכלא",
     "summary": "חמושים בסירה קטנה ירו לעבר מכלית גז נוזלי ששטה מול חופי העיר אל-מוכלא בתימן. צוות האבטחה החמוש של המכלית השיב בירי אזהרה ואילץ את התוקפים לשנות כיוון.",
     "axis": "הזירה הימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T04:56:38+00:00",
     "last_update_at": "2026-10-18T06:13:11+00:00",
     "what_is_not_verified": "זהות התוקפים בסירה והשיוך הארגוני שלהם אינם ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
       "published_at": "2026-10-18T06:13:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tanker-attacked-people-skiff-yemen-ukmto-says",
       "published_at": "2026-10-18T04:56:38+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מוכלא, תימן",
       "lat": 14.5425,
       "lon": 49.1231
      }
     ]
    },
    {
     "id": "YEMEN-10181409-05",
     "title": "שחרור עצורים בידי החות'ים בפיקוח בין-לאומי",
     "summary": "הרשויות החות'יות שחררו קבוצה של מאה חמישים ותשעה בני אדם שהיו עצורים על רקע הלחימה בתימן, בליווי ובפיקוח של הוועד הבין-לאומי של הצלב האדום.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T04:08:09+00:00",
     "last_update_at": "2026-10-18T06:13:11+00:00",
     "what_is_not_verified": "מעמדם של העצורים והאם השחרור היה חד-צדדי במסגרת חנינה או כחלק מעסקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
       "published_at": "2026-10-18T06:13:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-release-159-people-under-amnesty-under-icrc-watch",
       "published_at": "2026-10-18T04:08:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10181409-06",
     "title": "יוזמה מצרית לאישור התערבות צבאית להגנת סעודיה",
     "summary": "נשיא מצרים פנה לפרלמנט בבקשה לכנס דיון דחוף כדי לאשר התערבות צבאית להגנה על סעודיה ומתקניה אם תתבקש לכך, לאור החרפת המתקפות מצד החות'ים.",
     "axis": "הקואליציה האזורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T14:34:00+00:00",
     "last_update_at": "2026-10-18T11:09:23+00:00",
     "what_is_not_verified": "היקף ואופי הסיוע הצבאי המצרי המעשי במידה שיאושר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypt-says-ready-give-saudi-arabia-necessary-support",
       "published_at": "2026-10-18T11:09:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132117",
       "published_at": "2026-10-18T11:02:28+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/egypts-sisi-seeks-parliaments-backing-help-defend-saudi-arabia-if-asked",
       "published_at": "2026-10-17T14:46:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/sisi-urges-parliament-approve-military-help-saudi-arabia",
       "published_at": "2026-10-17T14:34:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קהיר, מצרים",
       "lat": 30.0444,
       "lon": 31.2357
      }
     ]
    },
    {
     "id": "YEMEN-10181409-07",
     "title": "דיווח על שיתוף פעולה מודיעיני ישראלי עם סעודיה נגד החות'ים",
     "summary": "פורסם כי מערכת הביטחון הישראלית מספקת סיוע מודיעיני לסעודיה לצורך התרעה, גיבוש מטרות ובניית תמונת מצב ביחס לפעילות החות'ים וקשריהם עם איראן.",
     "axis": "ישראל–סעודיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T15:44:38+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T15:44:38+00:00",
     "last_update_at": "2026-10-18T05:22:49+00:00",
     "what_is_not_verified": "הפרטים וההיקף של שיתוף הפעולה לא אושרו רשמית בידי המדינות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957784",
       "published_at": "2026-10-18T05:22:49+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94682",
       "published_at": "2026-10-17T15:44:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10181409-08",
     "title": "דיווח על חידוש התיאום בין סעודיה לאיחוד האמירויות בתימן",
     "summary": "לפי דיווח, איחוד האמירויות הסכימה לחדש מימון כוחות מקומיים הנאמנים לממשלה בדרום תימן, בעוד סעודיה התחייבה להעניק להם חיפוי אווירי לבלימת התקדמות החות'ים.",
     "axis": "דרום תימן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T17:13:02+00:00",
     "last_update_at": "2026-10-17T17:13:02+00:00",
     "what_is_not_verified": "קיומו של ההסכם וההתחייבויות המבצעיות לא קיבלו אישור רשמי מריאד או מאבו דאבי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48638",
       "published_at": "2026-10-17T17:13:02+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "סיבת נפילת המסוק הצבאי בנג'ראן: האם יירוט בידי החות'ים או תקלה טכנית",
    "טענות כוחות הממשלה בדבר הריגת שנים עשר לוחמים חות'ים בתעז",
    "ההיקף המעשי והאופי המבצעי של הסיוע הצבאי המצרי המוצע לסעודיה",
    "דיווחים אודות הסכם רשמי בין סעודיה לאיחוד האמירויות לחלוקת מימון וחיפוי אווירי",
    "דיווחים בדבר סיוע מודיעיני ישראלי פעיל לסעודיה"
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
      "המשך פגיעה במטרות צבאיות ותשתיות בסעודיה ובאזורי הגבול"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומדיני על סעודיה דרך איום על ריאד ומתקני נפט",
      "הרחבת השליטה הקרקעית במחוזות דרום תימן על חשבון כוחות הממשלה"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים וטילים לעבר סעודיה לצד התנגשויות לאורך קווי העימות"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "שמירה על ביטחון הממלכה והגנה על שטחיה ואתריה"
     ],
     "inferred": [
      "בניית מעטפת הגנה ובריתות אזוריות עם מצרים ומדינות נוספות לבלימת האיום",
      "צמצום נזקים כלכליים ושיבושי תעופה על ידי יירוט ואיסוף מודיעיני מוגבר"
     ],
     "forecast": [
      "העמקת התיאום המודיעיני והצבאי עם שותפות אזוריות והגברת פעילות אווירית"
     ]
    },
    {
     "actor": "ממשלת תימן",
     "declared": [
      "קריאה למועצת הביטחון לגנות את ההסלמה החות'ית והגנה על שטחי הדרום"
     ],
     "inferred": [
      "ניסיון לגייס תמיכה בין-לאומית וסיוע מחודש ממדינות המפרץ לבלימת החות'ים"
     ],
     "forecast": [
      "המשך עימותים מקומיים מול החות'ים סביב צירי שליטה בלחג' ותעז"
     ]
    },
    {
     "actor": "מצרים",
     "declared": [
      "התייצבות לצד סעודיה ונכונות להעניק סיוע להגנת ביטחונה, שטחה ומקומותיה הקדושים"
     ],
     "inferred": [
      "הגנה על האינטרסים האסטרטגיים במרחב ים סוף ומניעת ערעור היציבות האזורית"
     ],
     "forecast": [
      "אישור מהלכי תמיכה הגנתיים בפרלמנט והימנעות ממעורבות התקפית ישירה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/egypts-sisi-seeks-parliaments-backing-help-defend-saudi-arabia-if-asked",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-release-159-people-under-amnesty-under-icrc-watch",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/sisi-urges-parliament-approve-military-help-saudi-arabia",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132117",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48638",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94682",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957784",
     "accessed_at": "2026-10-18T14:09:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T23:45:25+00:00",
  "changes": {
   "YEMEN-10181409-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "טענה חות'ית להפלת מסוק קרב סעודי",
    "score": 1.0
   },
   "YEMEN-10181409-02": {
    "kind": "new"
   },
   "YEMEN-10181409-03": {
    "kind": "possible",
    "prev": "הסלמה צבאית בלחימה הקרקעית והאווירית ברחבי תימן",
    "score": 0.633
   },
   "YEMEN-10181409-04": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ירי לעבר מכלית גז במרחב הימי מדרום-מזרח לאל-מוכלא",
    "score": 1.0
   },
   "YEMEN-10181409-05": {
    "kind": "new"
   },
   "YEMEN-10181409-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מצרים מקדמת אישור פרלמנטרי להתערבות צבאית להגנת סעודיה",
    "score": 1.0
   },
   "YEMEN-10181409-07": {
    "kind": "new"
   },
   "YEMEN-10181409-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "הסכם בין איחוד האמירויות לסעודיה לחידוש מימון כוחות נגד החות'ים",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-18T1408__iran-202610181408.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-18T14:08:28+00:00",
   "window": {
    "from": "2026-10-17T14:08:28+00:00",
    "to": "2026-10-18T14:08:28+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610181408"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין ברמת מתיחות גבוהה ובכוננות צבאית הדדית, על רקע חסימת מצר הורמוז והשפעותיה הכלכליות הגלובליות. המשטר בטהראן מינה שר הגנה חדש בעל רקע בתעשיית הטילים, תוך איומים בתגובה נרחבת לכל תקיפה וניסיונות להתנות את הסדרי השיט, בעוד וושינגטון דורשת מניעה מוחלטת של חידוש תוכנית הגרעין. במקביל נרשמת היערכות לפעולות מנע ישראליות ולחצים אזוריים לבלימת ההשפעה והמימון הצבאי של איראן לשלוחותיה.",
   "fronts": [
    {
     "name": "חזית מצר הורמוז והסחר הימי במפרץ",
     "status": "משבר פעיל וחסימת שיט המלווה בהצעות איראניות לפתיחה מותנית בת שבעה ימים ופגיעות בכלי שיט"
    },
    {
     "name": "חזית איראן - ארה\"ב וישראל",
     "status": "כוננות צבאית גבוהה לקראת סבב תקיפות נוסף, חילופי איומים והתבטאויות סביב עתיד פרויקט הגרעין"
    },
    {
     "name": "חזית שלוחות איראן בלבנון ובאזור",
     "status": "לחצים כלכליים ומדיניים לניתוק נתיבי המימון והחימוש מאיראן לחזבאללה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10181408-01",
     "title": "אישור מינויו של שר ההגנה האיראני החדש מהרדאד אח'לאקי",
     "summary": "הפרלמנט של איראן אישר ברוב קולות את מינויו של מהרדאד אח'לאקי קתאבצ'י לתפקיד שר ההגנה, במקומו של עזיז נסירזאדה שנהרג בפעולות לחימה מול ארה\"ב וישראל.",
     "axis": "איראן - ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T08:27:56+00:00",
     "last_update_at": "2026-10-18T13:29:33+00:00",
     "what_is_not_verified": "אין אימות עצמאי לכלל הטענות על הרקע המדויק ומערך הפיתוח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_0e7e75ede88aa02d",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21650733",
       "published_at": "2026-10-18T13:29:33+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_0e7e75ede88aa02d",
       "url": "https://www.aljazeera.com/news/2026/10/18/who-is-mehrdad-akhlagh-irans-new-tech-focused-defence-minister?traffic_source=rss",
       "published_at": "2026-10-18T12:00:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_0e7e75ede88aa02d",
       "url": "https://en.irna.ir/news/86296123/Pezeshkian-Parliament-s-approval-of-defense-minister-nominee",
       "published_at": "2026-10-18T11:05:30+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_0e7e75ede88aa02d",
       "url": "https://www.iranintl.com/en/202610188034",
       "published_at": "2026-10-18T09:54:31+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_0e7e75ede88aa02d",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-parliament-approves-mehrdad-akhlaqi-minister-defence",
       "published_at": "2026-10-18T09:46:26+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_7800730bb22b7f61",
       "url": "https://en.irna.ir/news/86295883/Pezeshkian-backs-defense-minister-nominee-says-expertise-can",
       "published_at": "2026-10-18T08:53:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_0e7e75ede88aa02d",
       "url": "https://t.me/abualiexpress/132112",
       "published_at": "2026-10-18T08:27:56+00:00"
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
     "id": "IRAN-10181408-02",
     "title": "הצהרות ואיומים מצד שר ההגנה האיראני הנכנס כלפי ארה\"ב וישראל",
     "summary": "שר ההגנה החדש של איראן הצהיר על כוונתו לשקם את התעשיות הצבאיות, לחזק את בעלות בריתה באזור ואיים בתגובה חריפה ומפתיעה על כל מהלך צבאי של ארה\"ב או נשיאה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T09:46:58+00:00",
     "last_update_at": "2026-10-18T12:46:22+00:00",
     "what_is_not_verified": "מידת המוכנות הצבאית המעשית של אמצעי הלחימה והמטוסים שהוזכרו אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_9ce97876ac0bcf89",
       "url": "https://t.me/abualiexpress/132125",
       "published_at": "2026-10-18T12:46:22+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_9ce97876ac0bcf89",
       "url": "https://www.ynet.co.il/news/article/rk9zgef3me",
       "published_at": "2026-10-18T12:44:09+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9ce97876ac0bcf89",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-new-defence-minister-issues-warning-us",
       "published_at": "2026-10-18T09:59:56+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_9ce97876ac0bcf89",
       "url": "https://en.irna.ir/news/86295995/Defense-minister-undermines-Trump-s-new-anti-Iran-threats",
       "published_at": "2026-10-18T09:46:58+00:00"
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
     "id": "IRAN-10181408-03",
     "title": "הצעת איראן להסדר פתיחת מצר הורמוז ומגעים דיפלומטיים מול ארה\"ב",
     "summary": "שר החוץ של איראן הצהיר על הצעה מטעמה לפתיחת מצר הורמוז בתוך שבעה ימים הכוללת שבעה תנאים, תוך העברת מסרים דרך קטאר וטענות על שיחות מוקדמות בתיווך עומאן ופקיסטן.",
     "axis": "מצר הורמוז והזירה הימית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T01:22:02+00:00",
     "last_update_at": "2026-10-18T13:21:17+00:00",
     "what_is_not_verified": "פרטי שבעת התנאים המדויקים ותגובת ארה\"ב המלאה אינם מאומתים בטקסט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610180983",
       "published_at": "2026-10-18T13:21:17+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-urges-us-accept-proposal-reopen-strait-hormuz",
       "published_at": "2026-10-18T10:46:25+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
       "published_at": "2026-10-18T06:13:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-iran-has-presented-concrete-hormuz-reopening-proposal",
       "published_at": "2026-10-18T01:22:02+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "IRAN-10181408-04",
     "title": "עמדת ממשל ארה\"ב בנוגע לתוכנית הגרעין האיראנית ומצר הורמוז",
     "summary": "סגן נשיא ארה\"ב הצהיר כי וושינגטון דורשת התחייבות ארוכת טווח הניתנת לאימות שאיראן לא תשקם את תוכנית הגרעין שלה, והטיל על איראן את האחריות לחסימת מצר הורמוז ולעליית מחירי הדלק.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T05:34:52+00:00",
     "last_update_at": "2026-10-18T06:13:11+00:00",
     "what_is_not_verified": "טענת סגן הנשיא כי תוכנית הגרעין הושמדה לחלוטין אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
       "published_at": "2026-10-18T06:13:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-seeks-verifiable-commitment-iran-wont-rebuild-nuclear-programme-vance",
       "published_at": "2026-10-18T05:34:52+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10181408-05",
     "title": "התרעות ומוכנות בצה\"ל לעימות ישיר נוסף מול איראן",
     "summary": "בצה\"ל נשמרת רמת כוננות גבוהה לנוכח הערכות על אפשרות לסיבוב לחימה נוסף מול איראן, לצד דיונים בצמרת המדינית והצבאית על מועד ואופי הפעולה.",
     "axis": "איראן - ישראל",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T05:34:50+00:00",
     "last_update_at": "2026-10-18T13:10:09+00:00",
     "what_is_not_verified": "לא אומתו הטענות על מועד המכה המקדימה ושיקולים פוליטיים סביבה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21651430",
       "published_at": "2026-10-18T13:10:09+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/yokra14929191",
       "published_at": "2026-10-18T05:34:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10181408-06",
     "title": "פגיעה בכלי שיט סמוך לחופי איחוד האמירויות",
     "summary": "סוכנות פעולות הסחר הימי של בריטניה דיווחה כי ספינת גרר נפגעה משני קליעים בלתי מזוהים מצפון-מזרח לח'ור פכאן סמוך לחופי איחוד האמירויות הערביות.",
     "axis": "מצר הורמוז והזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T06:13:11+00:00",
     "last_update_at": "2026-10-18T06:13:11+00:00",
     "what_is_not_verified": "זהות המשגרים ואופי הקליעים אינם מצוינים ומאומתים במקור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_ukmto",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
       "published_at": "2026-10-18T06:13:11+00:00"
      }
     ],
     "places": [
      {
       "name": "ח'ור פכאן, איחוד האמירויות",
       "lat": 25.3492,
       "lon": 56.3478
      }
     ]
    },
    {
     "id": "IRAN-10181408-07",
     "title": "צעדים בלבנון להגבלת מימון איראני לחזבאללה",
     "summary": "הרשויות בלבנון ביטלו את רישיון הפעילות של בנק סאדראת האיראני בעקבות לחץ אמריקאי לצמצום צירי המימון לחזבאללה, לצד קריאה פומבית של שר החוץ הלבנוני להפסקת חימוש הארגון.",
     "axis": "שלוחות איראן - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T15:48:36+00:00",
     "last_update_at": "2026-10-18T12:34:37+00:00",
     "what_is_not_verified": "האם סניפי הבנק נסגרו בפועל והאם החלו הליכי פירוק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21651066",
       "published_at": "2026-10-18T12:34:37+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/10/lebanon-revokes-iranian-banks-license-amid-us-pressure-over-hezbollah-financing.php",
       "published_at": "2026-10-17T15:48:36+00:00"
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
     "id": "IRAN-10181408-08",
     "title": "שיתוף פעולה מודיעיני של צה\"ל לאיתור תשתיות איראניות",
     "summary": "גורמי מודיעין וחיל הים של ישראל העניקו סיוע מודיעיני לצבא ארה\"ב לאיתור תשתיות איראניות וכלי שיט עוינים במרחב מצר הורמוז, וכן מודיעין על הקשרים ואמצעי הלחימה שמעבירה איראן לחות'ים.",
     "axis": "איראן - ישראל וארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T05:22:49+00:00",
     "last_update_at": "2026-10-18T05:22:49+00:00",
     "what_is_not_verified": "היקף שיתוף הפעולה והמבצעים שבוצעו בפועל בעקבותיו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383957784",
       "published_at": "2026-10-18T05:22:49+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת סגן נשיא ארה\"ב כי תוכנית הגרעין האיראנית הושמדה באופן מכריע",
    "הטענה לפיה ישראל מתכננת מתקפת מנע נגד איראן משיקולים פוליטיים פנימיים",
    "זהות הגורמים ששיגרו את שני הקליעים לעבר ספינת הגרר סמוך לח'ור פכאן",
    "האם סניפי בנק סאדראת בלבנון נסגרו בפועל לאחר שלילת הרישיון",
    "נתוני תפוקת הנפט של איראן וטענתה לאי-תלות מוחלטת ביבוא בנזין"
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
      "להביא לפתיחת מצר הורמוז בתנאי שיוסרו הלחצים הצבאיים והמצור האמריקאי",
      "לשקם את התעשיות הביטחוניות, לחזק את ההרתעה ולהגיב באופן נרחב לכל תקיפה"
     ],
     "inferred": [
      "מינוף סגירת נתיבי השיט כדי לאלץ את ארה\"ב להקל בסנקציות ובלחץ הכלכלי",
      "המשך ביסוס תוכנית הטילים ושמירת יכולת השפעה אזורית באמצעות שלוחות"
     ],
     "forecast": [
      "המשך שמירה על רמת איום גבוהה במפרץ תוך בחינת נכונות ארה\"ב למשא ומתן על תנאי השיט"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "השגת התחייבות ארוכת טווח הניתנת לאימות שאיראן לא תשקם את תוכנית הגרעין שלה",
      "שמירה על חופש השיט והגנה על זרימת האנרגיה במצר הורמוז"
     ],
     "inferred": [
      "בלימת התייקרות מוצרי האנרגיה והדלק לקראת מועדי בחירות פנימיים",
      "הפעלת לחץ כלכלי וצבאי לניתוק איראן מנתיבי מימון של ארגוני חסות"
     ],
     "forecast": [
      "המשך פריסת כוחות ימיים לאבטחת נתיבי השיט לצד ניסיונות לבלום התעצמות גרעינית וטילאית"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על כוננות גבוהה לסיכול איומים ישירים מצד איראן",
      "דרישה לפגיעה ישירה בתשתיות הגרעין והאנרגיה של איראן"
     ],
     "inferred": [
      "בחינת אפשרות למתקפת מנע נגד יעדים איראניים לפני החרפת העימות הישיר",
      "העמקת השותפויות המודיעיניות במרחב המפרץ ובלימת העברות אמצעי לחימה לשלוחות"
     ],
     "forecast": [
      "הישארות ברמת דריכות מבצעית גבוהה ומוכנות לחידוש חילופי מהלומות צבאיות מול איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/18/who-is-mehrdad-akhlagh-irans-new-tech-focused-defence-minister?traffic_source=rss",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/iran-urges-us-accept-proposal-reopen-strait-hormuz",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610180983",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86295995/Defense-minister-undermines-Trump-s-new-anti-Iran-threats",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21651066",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/lebanon-revokes-iranian-banks-license-amid-us-pressure-over-hezbollah-financing.php",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-644",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132125",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383957784",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/yokra14929191",
     "accessed_at": "2026-10-18T14:08:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T23:40:35+00:00",
  "changes": {
   "IRAN-10181408-01": {
    "kind": "new"
   },
   "IRAN-10181408-02": {
    "kind": "new"
   },
   "IRAN-10181408-03": {
    "kind": "new"
   },
   "IRAN-10181408-04": {
    "kind": "new"
   },
   "IRAN-10181408-05": {
    "kind": "new"
   },
   "IRAN-10181408-06": {
    "kind": "possible",
    "prev": "פיקוד המרכז של ארה\"ב טוען שרוב ניסיונות הפגיעה בשיט בהורמוז סוכלו",
    "score": 0.467
   },
   "IRAN-10181408-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "שלילת רישיון פעילות לבנק איראני בלבנון בעקבות לחץ אמריקני",
    "score": 1.0
   },
   "IRAN-10181408-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-18T0240__ukraine-202610180240.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-18T02:40:32+00:00",
   "window": {
    "from": "2026-10-17T02:40:32+00:00",
    "to": "2026-10-18T02:40:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610180240"
   },
   "summary": "העימות הצבאי בין רוסיה לאוקראינה מאופיין בהמשך תקיפות הדדיות בעומק השטח, הכוללות שיגורי כטבמים אוקראיניים לעבר יעדי תשתית ותעשייה בערים רוסיות ופגיעות רוסיות נרחבות ברשתות אנרגיה, מפעלים ומרכזי אוכלוסייה אוקראיניים. במקביל ללחימה לאורך קווי המגע בדרום ובמזרח, נרשמת מתיחות מדינית גוברת לנוכח החלטת הממשל האמריקאי להשהות זמנית חלק מהסנקציות הכלכליות שהוטלו על מוסקבה והקשחת העמדות של רוסיה לגבי אזורי חיץ. בזירה הבין-לאומית מדינות אירופה נערכות לתרחישי פריסת כוחות עתידיים, בעוד חילוקי דעות והגבלות על אספקת מערכות הגנה ממשיכים ללוות את הסיוע לקייב.",
   "fronts": [
    {
     "name": "החזית הדרומית (חרסון וזפורוזיה)",
     "status": "הפגזות ותקיפות כטבמים מתמשכות מעבר לנהר הדנייפרו, ומתיחות סביב אתר הגרעין באנרגודאר"
    },
    {
     "name": "חזית המזרח (דונבאס ולוהנסק)",
     "status": "לחימה פעילה, הפצצות אוויריות על ערים ופגיעות אוקראיניות בתשתיות חשמל באזורי הכיבוש"
    },
    {
     "name": "עומק רוסיה",
     "status": "ספיגת תקיפות כטבמים אוקראיניות נגד אתרי אנרגיה, מפעלים ביטחוניים ויעדים עירוניים"
    },
    {
     "name": "מרחב צפון ומערב אוקראינה",
     "status": "תקיפות רוסיות על מפעלי תעשייה ותשתיות, לצד חשש מהתרחבות איומים מכיוון בלארוס"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10180240-01",
     "title": "מתקפת כטבמים אוקראינית על סנקט פטרבורג",
     "summary": "כלי טיס בלתי מאוישים ששוגרו מאוקראינה פגעו במתקני תשתית, מסופי דלק וגשר באזור סנקט פטרבורג, לצד הפעלת מערכות הגנה אווירית שנצפו בעיר.",
     "axis": "סנקט פטרבורג, רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T01:34:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T01:34:01+00:00",
     "last_update_at": "2026-10-18T01:59:30+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לתשתיות האנרגיה והגשר אינו מאומת ממקורות רשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48659",
       "published_at": "2026-10-18T01:59:30+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/flames-explosions-reported-amid-large-ukrainian-drone-attack-on-st-petersburg/",
       "published_at": "2026-10-18T01:34:01+00:00"
      }
     ],
     "places": [
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-02",
     "title": "פעילות כטבמים ליד תחנת הכוח הגרעינית בזפורוזיה",
     "summary": "בקרבת תחנת הכוח הגרעינית והעיר אנרגודאר נמשכת פעילות כלי טיס מאוישים מרחוק, כאשר הנהלת האתר מדווחת על מצב מתוח אך מבוקר.",
     "axis": "מחוז זפורוזיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T01:53:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T01:53:28+00:00",
     "last_update_at": "2026-10-18T01:53:28+00:00",
     "what_is_not_verified": "מידת הסכנה המיידית למתקני התחנה אינה מאומתת מעבר להצהרת הדוברת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_e22c4b5db8a5c244",
       "url": "https://tass.com/economy/2203639",
       "published_at": "2026-10-18T01:53:28+00:00"
      }
     ],
     "places": [
      {
       "name": "אנרגודאר, אוקראינה",
       "lat": 47.4901,
       "lon": 34.6603
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-03",
     "title": "הקפאת סנקציות אמריקאיות על רוסיה והגבלת תקשורת לווינית",
     "summary": "נשיא ארצות הברית השהה לחודשיים עיצומים כלכליים ומכסים שאושרו בקונגרס נגד מוסקבה לצורך בחינה כלכלית, בעוד שר החוץ ציין כי נמנעת כרגע מאוקראינה גישה למערכת התקשורת הצבאית סטארשילד.",
     "axis": "מדיני וכלכלי בין-לאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T02:53:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T02:53:38+00:00",
     "last_update_at": "2026-10-18T01:10:25+00:00",
     "what_is_not_verified": "הסיבה המדויקת להגבלת מערך סטארשילד וההשפעה הישירה על שדה הקרב אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-18T01:10:25+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/18/ukraine-war-briefing-trumps-sanctions-waiver-is-a-60-day-pause-to-analyse-economic-impact-says-rubio",
       "published_at": "2026-10-18T01:07:13+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203629",
       "published_at": "2026-10-18T00:27:35+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/17/trump-puts-new-russia-sanctions-passed-by-congress-on-hold-amid-deepening-row-with-ukraine",
       "published_at": "2026-10-17T02:53:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-04",
     "title": "טענה להשמדת כוח אוקראיני בדוברופוליה",
     "summary": "גורמי מודיעין צבאיים של רוסיה טענו כי כוחותיהם פגעו וחיסלו יחידה צבאית אוקראינית גדולה באזור דוברופוליה.",
     "axis": "דונבאס",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:35:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T00:35:40+00:00",
     "last_update_at": "2026-10-18T00:35:40+00:00",
     "what_is_not_verified": "מספר הנפגעים והיקף הכוח האוקראיני שהושמד לא אומתו על ידי גורם עצמאי או אוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_110",
       "url": "https://tass.com/defense/2203631",
       "published_at": "2026-10-18T00:35:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-05",
     "title": "השבתת מפעל רכיבי רכב בלוצק לאחר מתקפה רוסית",
     "summary": "מפעל לייצור מערכות כבלים לרכב בבעלות זרה השבית את פעילותו בעקבות תקיפת כטבמים רוסית שפגעה במתקן.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T14:30:00+00:00",
     "last_update_at": "2026-10-18T00:32:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_29342df317114d97",
       "url": "https://kyivindependent.com/kromberg-and-schubert-electrical-wiring-plant-in-lutsk-halts-operations-following-russian-attack/",
       "published_at": "2026-10-18T00:32:40+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_29342df317114d97",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058520/",
       "published_at": "2026-10-17T14:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לוצק, אוקראינה",
       "lat": 50.7451,
       "lon": 25.3201
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-06",
     "title": "יירוט כטבמים חודרים במרחב האווירי של רומניה",
     "summary": "מטוסי קרב רומניים הפילו שני כלי טיס מונעי סילון מסדרת גרן שחדרו למרחב האווירי של המדינה.",
     "axis": "הגבול הרומני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T22:16:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T22:16:37+00:00",
     "last_update_at": "2026-10-17T22:16:37+00:00",
     "what_is_not_verified": "שיוכם הלאומי המדויק של המפעילים לא נמסר בהודעה הרשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_613c2ed6e63b3780",
       "url": "https://kyivindependent.com/romanian-f-16s-down-two-jet-powered-drones-after-airspace-incursion/",
       "published_at": "2026-10-17T22:16:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-07",
     "title": "תקיפת טילים על חרקוב",
     "summary": "פגיעת טיל רוסי בעיר חרקוב גרמה לפציעתם של שלושה בני אדם ולנזק באזור הפגיעה.",
     "axis": "צפון-מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T20:37:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T20:37:00+00:00",
     "last_update_at": "2026-10-17T20:37:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175520-russian-missile-strike-on-kharkiv-injures-three-people.html",
       "published_at": "2026-10-17T20:37:00+00:00"
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
     "id": "UKRAINE-10180240-08",
     "title": "פגיעה במפעל כטבמים במחוז רוסטוב",
     "summary": "כוחות אוקראיניים פגעו במתקן תעשייתי ברוסיה המייצר כלי טיס בלתי מאוישים לסיור ולתקיפה.",
     "axis": "רוסטוב, רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T18:27:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T18:27:19+00:00",
     "last_update_at": "2026-10-17T18:27:19+00:00",
     "what_is_not_verified": "רמת הפגיעה ביכולות הייצור בפועל לא אומתה ממקור ניטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-hits-russian-drone-manufacturing-plant-in-rostov-oblast/",
       "published_at": "2026-10-17T18:27:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-09",
     "title": "הפסקות חשמל נרחבות במחוז לוהנסק בעקבות תקיפה",
     "summary": "תקיפה אוקראינית על רשת החשמל גרמה להשבתת זרם בעשרות רשויות מקומיות ובחלקים מהעיר לוהנסק, ומבני ציבור חוברו לגנרטורים.",
     "axis": "לוהנסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T16:11:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T16:11:00+00:00",
     "last_update_at": "2026-10-17T18:00:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2203573",
       "published_at": "2026-10-17T18:00:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058530/",
       "published_at": "2026-10-17T16:11:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לוהנסק, אוקראינה",
       "lat": 48.5717,
       "lon": 39.2973
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-10",
     "title": "השמדת מערכת שיגור רקטות רוסית במחוז חרסון",
     "summary": "יחידה מיוחדת של המשמר הלאומי האוקראיני איתרה והשמידה כלי שיגור רקטות מדגם סמרץ ורכב טעינה נלווה באמצעות כטבמים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T15:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T15:41:00+00:00",
     "last_update_at": "2026-10-17T15:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e1ab6cc74120d6b5",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058526/",
       "published_at": "2026-10-17T15:41:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10180240-11",
     "title": "הפגזות והפצצות כבדות בחרסון ובסביבתה",
     "summary": "תקיפות אוויריות והפגזות ארטילריות רוסיות על העיר חרסון וסביבתה הביאו להרג אדם אחד ולפציעת עשרות תושבים ואנשי צוות רפואי, לצד נזק למבני מגורים ומוסדות רפואה.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T15:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T15:33:00+00:00",
     "last_update_at": "2026-10-17T15:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a91929cf03612b38",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058525/",
       "published_at": "2026-10-17T15:33:00+00:00"
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
     "id": "UKRAINE-10180240-12",
     "title": "הפצצה אווירית קטלנית על מבנה מגורים בסלוביאנסק",
     "summary": "פצצה אווירית כבדה שהוטלה על אזור מגורים בעיר סלוביאנסק גרמה להרס מבנים, לפציעת אזרחים ולמותו של איש צוותי ההצלה האוקראיניים שפעל במקום.",
     "axis": "דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T14:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T14:41:00+00:00",
     "last_update_at": "2026-10-17T14:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_f57d1312b9fe74f6",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058522/",
       "published_at": "2026-10-17T14:41:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-10180240-13",
     "title": "הכרזה רוסית על אזור ביטחון לא נתון למשא ומתן",
     "summary": "נשיא רוסיה הודיע על יצירת אזור ביטחון בתוך גבולות אוקראינה לאורך מאות קילומטרים והדגיש כי שטח זה יוחרג מכל שיחות עתידיות.",
     "axis": "הזירה המדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T01:15:21+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T01:15:21+00:00",
     "last_update_at": "2026-10-17T02:40:32+00:00",
     "what_is_not_verified": "המיקום המדויק ומידת השליטה הקרקעית ברצועה המוצהרת אינם מאומתים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/17/ukraine-war-briefing-russia-building-non-negotiable-security-zone-inside-ukrainian-border-putin-declares",
       "published_at": "2026-10-17T01:15:21+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת קצין רוסי בדבר השמדת יחידה אוקראינית של אלפיים חיילים בדוברופוליה",
    "הדיווחים על פגיעה ממשית במתקני דלק וגשר בסנקט פטרבורג",
    "הטענה לגבי הוצאה להורג של שבויי מלחמה אוקראינים במחוז זפורוזיה בהוראת מפקד חטיבה",
    "הטענה בערוץ רוסי כי סרטון שבויי מלחמה בדונייצק בוים על ידי חיילים רוסים"
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
     "actor": "אוקראינה",
     "declared": [
      "הגנה על תשתיות המדינה וגיוס תמיכה בין-לאומית להמשך הלחץ הכלכלי על מוסקבה",
      "שימור השליטה המערבית בנכסים פיננסיים רוסיים מוקפאים והבטחת מסדרונות מעבר לייצוא חקלאי"
     ],
     "inferred": [
      "שיבוש תעשיית הנשק ושרשראות האספקה בעומק שטח רוסיה באמצעות כטבמים לצורך איזון יתרון האש הרוסי",
      "מניעת התקרבות בין ארצות הברית להנהגה הרוסית"
     ],
     "forecast": [
      "המשך התמקדות בתקיפות איכותיות נגד תעשיית הביטחון והאנרגיה הרוסית, תוך הידוק שיתוף הפעולה עם מדינות אירופה נוכח אי-הוודאות מוושינגטון"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הקמת רצועת ביטחון מבוצרת בשטח אוקראינה שלא תהיה נתונה למשא ומתן להסדרה",
      "הגנה על שטח המדינה והדיפת כוחות אוקראיניים מאזורי המזרח"
     ],
     "inferred": [
      "פגיעה שיטתית במערך האנרגיה והתעשייה של אוקראינה לפני החורף כדי לשחוק את יכולת העמידה האזרחית והצבאית",
      "ניצול הסדקים במדיניות הסנקציות האמריקאית להקלת הלחץ הכלכלי"
     ],
     "forecast": [
      "החרפת התקיפות על תחנות כוח ותשתיות אזרחיות אוקראיניות וביסוס קווי שליטה באזורי החיץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/17/ukraine-war-briefing-russia-building-non-negotiable-security-zone-inside-ukrainian-border-putin-declares",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-hits-russian-drone-manufacturing-plant-in-rostov-oblast/",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/17/8058522/",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2203573",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48659",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4175520-russian-missile-strike-on-kharkiv-injures-three-people.html",
     "accessed_at": "2026-10-18T02:40:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T13:54:20+00:00",
  "changes": {
   "UKRAINE-10180240-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "השבתת טיסות במוסקבה ובסנקט פטרבורג בעקבות תקיפת רחפנים",
    "score": 0.817
   },
   "UKRAINE-10180240-02": {
    "kind": "new"
   },
   "UKRAINE-10180240-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "השהיית סנקציות אמריקאיות על רוסיה והתנגדות אוקראינית",
    "score": 1.0
   },
   "UKRAINE-10180240-04": {
    "kind": "new"
   },
   "UKRAINE-10180240-05": {
    "kind": "new"
   },
   "UKRAINE-10180240-06": {
    "kind": "new"
   },
   "UKRAINE-10180240-07": {
    "kind": "new"
   },
   "UKRAINE-10180240-08": {
    "kind": "possible",
    "prev": "אוקראינה פגעה במפעל כטבמים ובמחסן תחמושת ברוסיה",
    "score": 0.467
   },
   "UKRAINE-10180240-09": {
    "kind": "new"
   },
   "UKRAINE-10180240-10": {
    "kind": "new"
   },
   "UKRAINE-10180240-11": {
    "kind": "new"
   },
   "UKRAINE-10180240-12": {
    "kind": "new"
   },
   "UKRAINE-10180240-13": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-18T0241__north-202610180241.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-18T02:41:40+00:00",
   "window": {
    "from": "2026-10-17T02:41:40+00:00",
    "to": "2026-10-18T02:41:40+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610180241"
   },
   "summary": "הגזרה מתאפיינת בפעילות צבאית נמשכת של ישראל בדרום לבנון ובדרום סוריה לצד היערכות לשיחות משולשות בארצות הברית לבלימת ההסלמה. במקביל, השלטונות בלבנון פועלים משפטית נגד גורמים בחזבאללה על רקע הברחת חומרי נפץ ופועלים במישור הדיפלומטי מול צרפת להארכת מנדט יוניפי\"ל. המתיחות נשמרת מול דרישות ישראל לפירוק חזבאללה מנשקו ויציאה מדרום לבנון.",
   "fronts": [
    {
     "name": "דרום לבנון וישראל",
     "status": "עימות צבאי פעיל הכולל הפגזות לצד מגעים מדיניים לקראת שיחות משולשות"
    },
    {
     "name": "דרום סוריה וישראל",
     "status": "פעילות צבאית ישראלית קרקעית ואווירית מוגבלת וקריאות סוריות להתערבות האו\"ם"
    },
    {
     "name": "הזירה הפנים-לבנונית מול חזבאללה",
     "status": "מתח ביטחוני ומשפטי בעקבות תפיסת חומרי נפץ וצווי מעצר לבכירי הארגון"
    }
   ],
   "events": [
    {
     "id": "NORTH-10180241-01",
     "title": "הכרזה על שיחות משולשות בין לבנון, ישראל וארצות הברית בפלורידה",
     "summary": "משלחת צבאית מלבנון צפויה להשתתף במפגש משולש בטמפה שבפלורידה כדי לדרוש את עצירת התקיפות וההסלמה הישראלית ולקדם יישום של הסכם המסגרת.",
     "axis": "לבנון - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T19:13:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T19:13:53+00:00",
     "last_update_at": "2026-10-17T22:44:52+00:00",
     "what_is_not_verified": "נכונות הצד הישראלי להיענות לדרישות לבנון ועמדת ארצות הברית בנוגע לתנאי ההסכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21646881",
       "published_at": "2026-10-17T22:44:52+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/lebanon-says-military-delegation-will-press-halt-israeli-attacks-us-talks",
       "published_at": "2026-10-17T20:46:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
       "published_at": "2026-10-17T19:48:34+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-to-take-part-in-us-backed-trilateral-talks-with-israel-on-oct-20-president-says/4092254",
       "published_at": "2026-10-17T19:13:53+00:00"
      }
     ],
     "places": [
      {
       "name": "טמפה, ארצות הברית",
       "lat": 27.945,
       "lon": -82.4583
      }
     ]
    },
    {
     "id": "NORTH-10180241-02",
     "title": "פעילות צבאית ותקיפות ישראליות בדרום לבנון",
     "summary": "פיצוץ משמעותי בוצע באזור זוטר א-שרקיה בנבטיה לאחר ירי ארטילרי לסירוגין, ובמקביל צבא לבנון נטרל שתי פצצות שלא התפוצצו בעיירות כפרא ותולין.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T19:48:34+00:00",
     "last_update_at": "2026-10-17T19:48:34+00:00",
     "what_is_not_verified": "היקף הנזק או הנפגעים כתוצאה מהפיצוץ ומהירי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
       "published_at": "2026-10-17T19:48:34+00:00"
      }
     ],
     "places": [
      {
       "name": "כפרא, לבנון",
       "lat": 33.1805,
       "lon": 35.354
      }
     ]
    },
    {
     "id": "NORTH-10180241-03",
     "title": "תנועת כוחות ישראליים במרחב הכפרי המערבי של דרעא בסוריה",
     "summary": "שני כלי רכב צבאיים של ישראל נכנסו לאזור ואדי א-רקאד בדרום סוריה בליווי פעילות של כטב\"מי סיור.",
     "axis": "דרום סוריה - ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:50:32+00:00",
     "last_update_at": "2026-10-17T12:50:32+00:00",
     "what_is_not_verified": "מטרת הפעילות או משך השהות של הכלים בשטח",
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
       "name": "ואדי א-רקאד, סוריה",
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
     "id": "NORTH-10180241-04",
     "title": "קריאת מושל קוניטרה לתיעוד הפרות ישראליות בידי כוח האו\"ם",
     "summary": "מושל מחוז קוניטרה בסוריה פנה לכוחות האו\"ם בדרישה לתעד הפרות של ישראל כדי לסייע בהגנה על התושבים המקומיים.",
     "axis": "דרום סוריה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T12:16:41+00:00",
     "last_update_at": "2026-10-17T12:16:41+00:00",
     "what_is_not_verified": "מענה או תגובה רשמית של כוחות האו\"ם לקריאה",
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
     "id": "NORTH-10180241-05",
     "title": "הוצאת צווי מעצר בלבנון נגד בכירי חזבאללה בפרשת משאית חומרי הנפץ",
     "summary": "התובע הכללי בלבנון הוציא צווי מעצר לשני בכירים בחזבאללה, חסין עבדאללה ועלי איוב, בעקבות תפיסת משאית עם חומרי נפץ שהייתה בדרכה מבעלבכ לדאחיה.",
     "axis": "לבנון פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:17:22+00:00",
     "last_update_at": "2026-10-17T08:17:22+00:00",
     "what_is_not_verified": "יעדי הפיגועים המדויקים שתוכננו באמצעות חומרי הנפץ וזהות מעורבים נוספים",
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
      }
     ]
    },
    {
     "id": "NORTH-10180241-06",
     "title": "שיחות בכירי ממשל צרפת בביירות על נוכחות בינלאומית והסכם המסגרת",
     "summary": "שרי החוץ וההגנה של צרפת הגיעו ללבנון לדיונים עם הנשיא ומפקד הצבא בנוגע להסדרי הנוכחות הבינלאומית בדרום המדינה, הארכת מנדט יוניפי\"ל ויישום הסכם המסגרת.",
     "axis": "לבנון - צרפת",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-17T08:10:52+00:00",
     "last_update_at": "2026-10-17T19:48:34+00:00",
     "what_is_not_verified": "הסכמת כלל המדינות החברות באו\"ם להארכת מנדט יוניפי\"ל עד שנת 2027",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
       "published_at": "2026-10-17T19:48:34+00:00"
      },
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
     "id": "NORTH-10180241-07",
     "title": "פגישת שרי החוץ של איראן ולבנון בבגדאד",
     "summary": "שר החוץ האיראני עראקצ'י נועד עם מקבילו הלבנוני רג'י והדגיש את תמיכת ארצו בריבונות לבנון ובביטחונה מול פעולות ישראל.",
     "axis": "לבנון - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-17T14:19:11+00:00",
     "last_update_at": "2026-10-17T16:36:59+00:00",
     "what_is_not_verified": "פרטי הסיוע המעשי שאיראן מתכוונת להעניק ללבנון מעבר להצהרות תמיכה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139382/",
       "published_at": "2026-10-17T16:36:59+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139372/",
       "published_at": "2026-10-17T16:35:44+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/139297/",
       "published_at": "2026-10-17T14:19:11+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    }
   ],
   "not_verified": [
    "טענות עיתון אלאח'באר על ייעוד חומרי הנפץ לביצוע חיסולים בתוך לבנון",
    "מידת ההסכמה הישראלית לעמוד בהסכם המסגרת מחודש יוני",
    "ההיתכנות המעשית של הארכת מנדט כוח יוניפי\"ל עד 2027 ללא וטו באו\"ם"
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
     "actor": "לבנון (ממשל ונשיאות)",
     "declared": [
      "הבאת משלחת צבאית לשיחות בארצות הברית כדי לבלום את ההסלמה והתקיפות הישראליות",
      "הארכת מנדט כוח יוניפי\"ל בדרום המדינה עד לסוף שנת 2027",
      "יישום תוצאות התואמות להסכם המסגרת שנחתם בתיווך ארצות הברית"
     ],
     "inferred": [
      "מניעת עימות ישיר בין צבא לבנון לכוחות צה\"ל באמצעות נוכחות כוח בינלאומי חוצץ",
      "צמצום חופש הפעולה הצבאי והמבצעי העצמאי של חזבאללה בשטח המדינה"
     ],
     "forecast": [
      "המשך הדרישה לפיקוח בינלאומי הדוק בדרום המדינה כדי למנוע ריק ביטחוני",
      "התגברות החיכוך הפוליטי והביטחוני הפנימי סביב פעילות חזבאללה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התעקשות על פירוק חזבאללה מנשקו ויציאתו מאזור דרום לבנון"
     ],
     "inferred": [
      "המשך הפעלת לחץ צבאי באש ובתנועות קרקעיות בדרום לבנון ובדרום סוריה לאבטחת הגבול",
      "החזקת רצועת ביטחון ומניעת התבססות של גורמים עוינים סמוך לגבול"
     ],
     "forecast": [
      "התמדה בהתקפות נקודתיות בדרום לבנון גם במקביל לקיום שיחות מדיניות"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "תמיכה בריבונות לבנון, בשלמות שטחה ובביטחונה הלאומי מול ישראל"
     ],
     "inferred": [
      "שימור ההשפעה המדינית והביטחונית בלבנון באמצעות גיבוי רשמי לממשלה ולקשריה האזוריים"
     ],
     "forecast": [
      "המשך ניסיונות דיפלומטיים לבלום לחצים בינלאומיים המופעלים על בעלי בריתה בלבנון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/139297/",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/lebanon-says-military-delegation-will-press-halt-israeli-attacks-us-talks",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-s-quneitra-governor-urges-un-force-to-document-israeli-violations/4091954",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21646881",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963310/french-foreign-and-defense-ministers-arrive-in-lebanon-for-talks-on-se/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963310",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-join-trilateral-talks-israel-and-us-florida-next-week-aoun-says",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132046",
     "accessed_at": "2026-10-18T02:41:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-17T13:55:24+00:00",
  "changes": {
   "NORTH-10180241-01": {
    "kind": "possible",
    "prev": "ממצאים המעכבים חידוש טיסות ישירות מארצות הברית לביירות",
    "score": 0.467
   },
   "NORTH-10180241-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות והפגזות של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10180241-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "חדירת כלי רכב צבאיים ישראליים לאזור דרעא בדרום סוריה",
    "score": 1.0
   },
   "NORTH-10180241-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פניית מושל קוניטרה לכוח האו\"ם לתיעוד הפרות ישראליות",
    "score": 1.0
   },
   "NORTH-10180241-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הוצאת צווי מעצר בלבנון לבכירים בחזבאללה בעקבות תפיסת משאית נפץ",
    "score": 1.0
   },
   "NORTH-10180241-06": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "ביקור שרי החוץ וההגנה של צרפת בביירות",
    "score": 1.0
   },
   "NORTH-10180241-07": {
    "kind": "new"
   }
  }
 }
};
