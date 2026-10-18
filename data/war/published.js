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
  "draft": "drafts/ukraine/2026-10-18T2340__ukraine-202610182340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-18T23:40:43+00:00",
   "window": {
    "from": "2026-10-17T23:40:43+00:00",
    "to": "2026-10-18T23:40:43+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610182340"
   },
   "summary": "העימות הצבאי בין רוסיה לאוקראינה ממשיך בעוצמה גבוהה עם חילופי מהלומות טילים וכטב\"מים על ערי אוקראינה ועל מתקני תשתית בעומק שטח רוסיה. בקו המגע נרשמת לחימה עזה בעשרות מוקדים במזרח, תוך טענות אוקראיניות לבלימת התקדמות רוסית ולשמירה על שטחים ששוחררו. במקביל חלה החרפה פומבית ביחסים בין קייב לממשל האמריקני החדש עקב הקפאת סנקציות על מוסקבה ומחלוקות על השימוש ברשתות תקשורת לווייניות.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "לחימה עזה ביותר ומתקפות חוזרות ונשנות של הכוחות הרוסיים"
    },
    {
     "name": "גזרת דוברופיליה ומחוז דונצק",
     "status": "קרבות הגנה ובלימת חדירות רוסיות תחת שליטה אוקראינית"
    },
    {
     "name": "גזרת זפוריז'יה",
     "status": "היערכות הגנתית אוקראינית מול כוחות רוסיים המצויים כעשרים קילומטרים מהעיר"
    },
    {
     "name": "חזית חרסון (בריסלב)",
     "status": "הפגזות רוסיות רצופות ופינוי אוכלוסייה אזרחית"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10182340-01",
     "title": "הנשיא טראמפ השעה סנקציות נגד רוסיה ומתח ביקורת על הנהגת אוקראינה",
     "summary": "נשיא ארצות הברית דונלד טראמפ חתם על צו המשהה חבילת סנקציות כלכליות נרחבות על רוסיה למשך שישים יום לצורך בחינת השפעתן, והאשים את הנשיא זלנסקי בחוסר רצון לסיים את המלחמה ובעמידה בדרכו של משא ומתן לשלום.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T01:07:13+00:00",
     "last_update_at": "2026-10-18T23:29:53+00:00",
     "what_is_not_verified": "האם הטענה של אוקראינה לגבי כוונת הממשל האמריקני להביא לכניעתה מבוססת במציאות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/19/ukraine-war-briefing-trump-accuses-zelenskyy-of-not-wanting-to-end-war-as-feud-rumbles-on",
       "published_at": "2026-10-18T23:29:53+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/other/article/21655157",
       "published_at": "2026-10-18T21:49:51+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203873",
       "published_at": "2026-10-18T21:43:12+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-treasury-secretary-downplays-russia-sanctions-waiver-warns-zelensky-to-be-careful/",
       "published_at": "2026-10-18T21:09:30+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/i-want-this-war-end-trump-defends-pro-russian-policies-in-scathing-diatribe-against-zelensky-2/",
       "published_at": "2026-10-18T21:03:32+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2203867",
       "published_at": "2026-10-18T21:02:41+00:00"
      },
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
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-02",
     "title": "מתקפת כטב\"מים אוקראינית על מתקני נפט ותשתיות בסנקט פטרבורג",
     "summary": "כוחות הביטחון של אוקראינה שיגרו כטב\"מים מדגם FP-1 לעבר יעדי תשתית נפט ודיגיטל בעיר סנקט פטרבורג ברוסיה, כולל מסוף נפט, מאגר דלקים ומרכז נתונים, וגרמו לדליקות.",
     "axis": "תקיפות בעומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T10:36:22+00:00",
     "last_update_at": "2026-10-18T18:45:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במתקנים בסנקט פטרבורג.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175714-ukraines-fp1-drones-hit-oil-and-digital-infrastructure-in-st-petersburg.html",
       "published_at": "2026-10-18T18:45:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48666",
       "published_at": "2026-10-18T10:36:22+00:00"
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
     "id": "UKRAINE-10182340-03",
     "title": "מחלוקת על הגבלת שירותי סטארלינק וחשד לחבלה רוסית בתשתיות התקשורת בליטא",
     "summary": "נשיא אוקראינה טען כי ארצות הברית האטה במכוון את קצב התקשורת של מערכת סטארלינק, בעוד בכירים אמריקנים הכחישו זאת בתוקף; במקביל נמסר מליטא על ניסיון הצתה באתר שבו מוצבות אנטנות של הרשת המשרתות את אוקראינה, פעולה שיוחסה לגורמי חבלה רוסיים.",
     "axis": "תשתיות וטכנולוגיה צבאית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T15:53:00+00:00",
     "last_update_at": "2026-10-18T23:29:53+00:00",
     "what_is_not_verified": "הגורם האחראי להגבלת מהירות סטארלינק והזהות המדויקת של מבצעי ניסיון ההצתה בליטא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/19/ukraine-war-briefing-trump-accuses-zelenskyy-of-not-wanting-to-end-war-as-feud-rumbles-on",
       "published_at": "2026-10-18T23:29:53+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48679",
       "published_at": "2026-10-18T16:44:54+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/18/killed-injured-russia-ukraine-strikes-power-infrastructure",
       "published_at": "2026-10-18T16:37:52+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058641/",
       "published_at": "2026-10-18T16:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058639/",
       "published_at": "2026-10-18T15:53:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-04",
     "title": "פגיעות טילים בליסטיים רוסיים בבירה קייב",
     "summary": "טילים בליסטיים מתוצרת רוסיה פגעו בקייב בסמיכות מיידית להפעלת התרעות הצופרים, כאשר גורם אוקראיני רשמי ציין כי האזהרה הגיעה רק לאחר הפגיעה עצמה.",
     "axis": "תקיפות על ערי אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T20:20:34+00:00",
     "last_update_at": "2026-10-18T20:20:34+00:00",
     "what_is_not_verified": "מספר הנפגעים ומיקום הפגיעות המדויק בקייב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-ballistic-missiles-slam-kyiv-right-as-air-raid-alarms-sound/",
       "published_at": "2026-10-18T20:20:34+00:00"
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
     "id": "UKRAINE-10182340-05",
     "title": "קרבות עזים בקו המגע ולחימה מוגברת בגזרת פוקרובסק",
     "summary": "לאורך החזית התחוללו 173 התנגשויות קרביות ביום אחד, כאשר מוקד הלחימה העיקרי נרשם בגזרת פוקרובסק שבה בוצעו עשרות ניסיונות תקיפה רוסיים.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T20:53:00+00:00",
     "last_update_at": "2026-10-18T20:53:00+00:00",
     "what_is_not_verified": "מספר ההתקפות המדויק בכל תת-גזרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175727-war-update-173-clashes-on-front-line-fiercest-fighting-in-pokrovsk-sector.html",
       "published_at": "2026-10-18T20:53:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פוקרובסק, אוקראינה",
       "lat": 48.2771,
       "lon": 37.1772
      }
     ]
    },
    {
     "id": "UKRAINE-10182340-06",
     "title": "הפלת עשרות כטב\"מים אוקראיניים בשמי מחוזות רוסיה",
     "summary": "מערכות ההגנה האווירית של רוסיה יירטו והשמידו 41 כלי טיס בלתי מאוישים אוקראיניים מעל המחוזות בלגורוד, בריאנסק, קורסק, אוריול ופסקוב.",
     "axis": "הגנה אווירית ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:39:25+00:00",
     "last_update_at": "2026-10-18T17:39:25+00:00",
     "what_is_not_verified": "מידת הנזק שנגרם בשטח כתוצאה משברי היירוטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2203837",
       "published_at": "2026-10-18T17:39:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-07",
     "title": "פינוי אזרחים מהעיר בריסלב תחת הפגזות רוסיות",
     "summary": "כוחות צבא אוקראינה פינו 15 אזרחים מהעיר בריסלב שבמחוז חרסון, הנתונה להפגזות ארטילריות רוסיות רצופות.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T22:25:00+00:00",
     "last_update_at": "2026-10-18T22:25:00+00:00",
     "what_is_not_verified": "מספר התושבים הנותרים בעיר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4175631-fifteen-people-evacuated-from-beryslav-in-kherson-region.html",
       "published_at": "2026-10-18T22:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסלב, אוקראינה",
       "lat": 46.8358,
       "lon": 33.4167
      }
     ]
    },
    {
     "id": "UKRAINE-10182340-08",
     "title": "שיחות דיפלומטיות בין זלנסקי לנציגי ממשל טראמפ",
     "summary": "הנשיא זלנסקי קיים שיחה טלפונית עם נציגיו של טראמפ, סטיב ויטקוף וג'ארד קושנר, שבה דנו בתוצאות המפגשים בפלורידה ובצעדים הבאים להמשך המגעים הדיפלומטיים.",
     "axis": "משא ומתן ומגעים דיפלומטיים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T14:58:00+00:00",
     "last_update_at": "2026-10-18T17:58:00+00:00",
     "what_is_not_verified": "תוכן ההבנות והפרטים המדויקים שעלו בשיחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4175703-zelensky-discusses-next-steps-in-diplomacy-with-trumps-representatives.html",
       "published_at": "2026-10-18T17:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058636/",
       "published_at": "2026-10-18T14:58:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-09",
     "title": "זלנסקי מציב תנאי של הפסקת אש לקיום בחירות לנשיאות",
     "summary": "נשיא אוקראינה הודיע כי יתמודד בבחירות אם ייערכו בזמן המלחמה, וציין כי קיומן מותנה בהפסקת אש כוללת למשך שישים יום לפחות מצד רוסיה לצורך היערכות ביטחונית ותחיקתית.",
     "axis": "מדיניות פנים וממשל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T18:13:00+00:00",
     "last_update_at": "2026-10-18T18:13:00+00:00",
     "what_is_not_verified": "נכונות הצד הרוסי להסכים להפסקת אש בת שישים יום לצורך בחירות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_nbc",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058650/",
       "published_at": "2026-10-18T18:13:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10182340-10",
     "title": "חדירת כלי טיס והתפוצצותו בשמי ליטא",
     "summary": "חפץ מעופף החשוד ככטב\"ם חדר למרחב האווירי של ליטא והתפוצץ, דבר שהביא להקפצת מטוסי קרב של נאט\"ו, כניסת תושבים למקלטים ופגיעה ברכב אזרחי.",
     "axis": "תקריות אזוריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T17:59:20+00:00",
     "last_update_at": "2026-10-18T17:59:20+00:00",
     "what_is_not_verified": "שיוכו המדויק וזהות משגרי כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/nato-jets-scramble-as-drone-explodes-in-lithuanian-airspace/",
       "published_at": "2026-10-18T17:59:20+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת רוסיה על כיבוש דוברופיליה והתקרבות למרחק 5 ק\"מ מזפוריז'יה",
    "טענות על קיצוץ באספקת טילי יירוט אמריקניים לאוקראינה",
    "האשמות לגבי מעורבות הממשל האמריקני בהגבלת מהירות סטארלינק",
    "הטענה כי גורמי ביון רוסיים עומדים מאחורי ניסיון ההצתה בליטא",
    "השמועות בדבר החרמת רכוש אזרחי על ידי הצבא האוקראיני בקרמטורסק",
    "דיווחים על שיתוף פעולה בין סוכנים רוסים ואיראנים בהובלת מהומות באירופה",
    "מידת הפגיעה המדויקת בצוות הספינה שהותקפה בים השחור"
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
      "חיזוק מערך ההגנה האווירית והמשך שחרור שטחים כבושים",
      "קיום בחירות רק תחת תנאי הפסקת אש של 60 יום והבטחת זכות הצבעה לחיילים",
      "מניעת סטייה אמריקנית לטובת מוסקבה ושימור הסיוע הבינלאומי"
     ],
     "inferred": [
      "פגיעה ממוקדת בתשתיות הכלכליות והאנרגטיות בעומק רוסיה כדי להפעיל לחץ נגדי",
      "הפחתת התלות בהחלטות טכנולוגיות וצבאיות אמריקניות שאינן יציבות"
     ],
     "forecast": [
      "המשך מאמצים לגיוס תמיכה ישירה ממדינות אירופה להשלמת פערי חימוש",
      "החרפת העימות הדיפלומטי מול ארצות הברית אם יוגברו הלחצים לוויתורים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הלחימה והשגת יעדי המערכה בקו המגע",
      "סירוב להפסקת אש ממושכת בת 60 יום עבור בחירות באוקראינה",
      "הסדרת ייצוא מוצרי נפט ונפט מול ארצות הברית ללא התערבות קייב"
     ],
     "inferred": [
      "ניצול המתיחות בין וושינגטון לקייב כדי לשבור את מערך הסנקציות הבינלאומי",
      "המשך שחיקת תשתיות האנרגיה האוקראיניות לקראת החורף"
     ],
     "forecast": [
      "המשך פעולות חבלה עקיפות ומתקפות על נתיבי אספקה ותקשורת לוויינית",
      "הגברת מאמצי ההתקפה במזרח אוקראינה לקראת מיצוי הישגים קרקעיים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "סיום המלחמה באמצעות משא ומתן והשבת רוסיה לשולחן הדיונים",
      "השהיית סנקציות למשך שישים יום לבחינת ההשפעה על הכלכלה העולמית והמקומית",
      "הכחשת מעורבות רשמית בהגבלת פעילות רשת סטארלינק"
     ],
     "inferred": [
      "הפעלת מנופי לחץ כבדים על אוקראינה כדי לאלץ אותה להתפשר במגעים מול רוסיה",
      "מתן תמריצים כלכליים למוסקבה כדי לפתותה להגיע להסכם"
     ],
     "forecast": [
      "המשך צמצום והתניה של הסיוע הביטחוני והמודיעיני לאוקראינה",
      "הגברת המגעים הנפרדים מול מוסקבה בסוגיות אנרגיה ומסחר"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cxr5yvzv7rp0o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/18/killed-injured-russia-ukraine-strikes-power-infrastructure",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/other/article/21655157",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/nato-jets-scramble-as-drone-explodes-in-lithuanian-airspace/",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/18/8058650/",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2203837",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48679",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4175703-zelensky-discusses-next-steps-in-diplomacy-with-trumps-representatives.html",
     "accessed_at": "2026-10-18T23:40:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T02:40:32+00:00",
  "changes": {
   "UKRAINE-10182340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הקפאת סנקציות אמריקאיות על רוסיה והגבלת תקשורת לווינית",
    "score": 1.0
   },
   "UKRAINE-10182340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטבמים אוקראינית על סנקט פטרבורג",
    "score": 1.0
   },
   "UKRAINE-10182340-03": {
    "kind": "new"
   },
   "UKRAINE-10182340-04": {
    "kind": "new"
   },
   "UKRAINE-10182340-05": {
    "kind": "new"
   },
   "UKRAINE-10182340-06": {
    "kind": "new"
   },
   "UKRAINE-10182340-07": {
    "kind": "new"
   },
   "UKRAINE-10182340-08": {
    "kind": "new"
   },
   "UKRAINE-10182340-09": {
    "kind": "new"
   },
   "UKRAINE-10182340-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-18T2343__north-202610182343.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-18T23:43:58+00:00",
   "window": {
    "from": "2026-10-17T23:43:58+00:00",
    "to": "2026-10-18T23:43:58+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610182343"
   },
   "summary": "המתיחות בגזרה הצפונית נמשכת כאשר צה\"ל מרכז כוחות ומעלה כוננות בגבול לבנון וברמת הגולן לנוכח חשש מעימות צבאי, לצד המשך פעילות באש בדרום לבנון. במקביל בלבנון מנסה השלטון המרכזי להרחיב את סמכותו הביטחונית, בעוד הדיונים המדיניים מתמקדים בעתיד פריסת כוחות יוניפי\"ל ובדרישות ההדדיות ליישום החלטה 1701. בסוריה ממשיך הממשל החדש בצעדים לביסוס שליטתו הכלכלית והמוסדית לאחר הפלת המשטר הקודם.",
   "fronts": [
    {
     "name": "גבול ישראל-לבנון",
     "status": "כוננות שיא, תגבור אוגדות ישראליות והפגזות ארטילריות מקומיות בדרום לבנון"
    },
    {
     "name": "חזית רמת הגולן וסוריה",
     "status": "העלאת כוננות ישראלית ודיווחים על פשיטות צה\"ל לצד התייצבות מוסדות הממשל הסורי החדש"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "תגבור כוחות ביטחון בביירות, תפיסת אמצעי לחימה וניסיונות של הממשלה להגביל גורמים חמושים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10182343-01",
     "title": "היערכות ותגבור כוחות צה\"ל בגבול הצפון",
     "summary": "הצבא הישראלי תגבר את כוחותיו ופרס את אוגדות 36 ו-91 וכן את חטיבת גולני בגבול לבנון וברמת הגולן, והעלה את רמת הכוננות בעקבות חשש מהסלמה לקראת הבחירות ודיווחים על העלאת כוננות אצל חזבאללה.",
     "axis": "גבול ישראל-לבנון ורמת הגולן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T13:07:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-18T13:07:19+00:00",
     "last_update_at": "2026-10-18T14:01:00+00:00",
     "what_is_not_verified": "הטענה כי איראן אישרה לחזבאללה להעלות כוננות או מנסה לפגוע בבחירות בישראל אינה נתמכת במודיעין קונקרטי לפי גורמי ביטחון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963482/israel-reinforces-lebanon-border-as-tensions-rise-over-hezbollah-disar/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963482",
       "published_at": "2026-10-18T14:01:00+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israeli-army-raises-alert-level-ahead-election",
       "published_at": "2026-10-18T13:07:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10182343-02",
     "title": "ירי ארטילרי לעבר עיירה בדרום לבנון",
     "summary": "צבא ישראל ביצע ירי פגזים ארטילריים שפגע בעיירה חדאת'א הממוקמת באזור בינת ג'בייל בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T15:15:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T15:15:45+00:00",
     "last_update_at": "2026-10-18T15:15:45+00:00",
     "what_is_not_verified": "היקף הנזקים או הנפגעים בירי לא צוין בדיווח שמסתמך על תקשורת לבנונית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-army-attacks-town-southern-lebanon",
       "published_at": "2026-10-18T15:15:45+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.165,
       "lon": 35.3916
      },
      {
       "name": "בינת ג'בייל, לבנון",
       "lat": 33.1195,
       "lon": 35.4328
      }
     ]
    },
    {
     "id": "NORTH-10182343-03",
     "title": "פינוי לוחמות איסוף קרבי ממוצב בגבול לבנון",
     "summary": "צוות לוחמות מאיסוף קרבי שהתמקם בפעילות במוצב צבאי ברכס רמים נדרש להתפנות בעקבות הוראה של רב החטיבה בטענה לפגיעה בכללי השירות המשותף.",
     "axis": "גבול ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T16:42:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T16:42:49+00:00",
     "last_update_at": "2026-10-18T16:42:49+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_decb72e052b4c816",
       "url": "https://www.israelhayom.co.il/news/defense/article/21653898",
       "published_at": "2026-10-18T16:42:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10182343-04",
     "title": "פעולות ממשלת לבנון לחיזוק סמכות המדינה ומניעת נשק לא חוקי",
     "summary": "ראש ממשלת לבנון בירך על תגבור כוחות הביטחון בביירות רבתי, הדגיש כי החלטות של מלחמה ושלום שייכות אך ורק למדינה, וקרא למיצוי הדין בעקבות תפיסת משלוח חומרי נפץ בדהר אל-בידר.",
     "axis": "פנים לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T13:28:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T13:28:18+00:00",
     "last_update_at": "2026-10-18T13:28:18+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_3188ef683070d237",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963496/pm-salam-calls-for-stronger-state-authority-stresses-war-and-peace-dec/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963496",
       "published_at": "2026-10-18T13:28:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    },
    {
     "id": "NORTH-10182343-05",
     "title": "פגישת יו\"ר הפרלמנט הלבנוני עם משלחת צרפתית בנושא החלטה 1701 ויוניפי\"ל",
     "summary": "נביה ברי נפגש עם שר החוץ הצרפתי ומשלחתו בביירות, הביע מחויבות להמשך שהות כוחות יוניפי\"ל וקרא ללחץ בין-לאומי ליישום החלטה 1701 בידי ישראל.",
     "axis": "לבנון-ישראל בזירה המדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T08:59:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T08:59:27+00:00",
     "last_update_at": "2026-10-18T08:59:27+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963460/speaker-berri-calls-for-unifil-to-remain-in-lebanon-urges-internationa/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963460",
       "published_at": "2026-10-18T08:59:27+00:00"
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
     "id": "NORTH-10182343-06",
     "title": "מינוי יו\"ר לקרן העושר הריבונית של סוריה",
     "summary": "נשיא סוריה אחמד א-שרע מינה את עומר אל-חלבי ליושב ראש קרן ההשקעות והנכסים הריבונית של המדינה כחלק ממאמצי שיקום הכלכלה וגיוס הון זר.",
     "axis": "סוריה - ממשל וכלכלה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-18T14:28:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-18T14:28:59+00:00",
     "last_update_at": "2026-10-18T14:28:59+00:00",
     "what_is_not_verified": "זהות המנהל הקודם שכונה אבו מרים האוסטרלי נמסרה מגורמים אנונימיים ולא אושרה רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_5e9ef2c34a68ddfa",
       "url": "https://www.newarab.com/news/syria-names-omar-al-halabi-chairman-sovereign-wealth-fund",
       "published_at": "2026-10-18T14:28:59+00:00"
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
    "קיומו של מודיעין ממשי המאשר כי איראן תנסה לשבש את הבחירות בישראל",
    "הטענה כי איראן הורתה לחזבאללה להעלות כוננות ולהיערך לעימות מיידי",
    "פרטי הניהול המוקדם של קרן העושר הסורית על ידי גורם המכונה אבו מרים האוסטרלי"
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
      "הסרת טבעת החנק של הציר האיראני ומניעת סכנה גרעינית",
      "אי-התפשרות על תנאי הסכם המסגרת ופירוק חזבאללה מנשקו"
     ],
     "inferred": [
      "ביסוס אזור חיץ או אזור ביטחון קבוע בדרום לבנון",
      "הרחקת איומים צבאיים ומניעת הפתעה לקראת מועד הבחירות בישראל"
     ],
     "forecast": [
      "המשך שמירה על פריסת כוחות מתוגברת בגבול הצפוני",
      "סירוב לוותר במשא ומתן הצבאי הצפוי בטמפה מול לבנון"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "השבת הבלעדיות על החלטות מלחמה ושלום לידי המדינה ומוסדותיה",
      "השארת כוחות יוניפי\"ל וחיוב ישראל ליישום החלטה 1701 והפסקת התקיפות"
     ],
     "inferred": [
      "בלימת השפעתו הצבאית העצמאית של חזבאללה במרחב האזרחי",
      "שימוש בלחץ בין-לאומי אמריקני וצרפתי כדי להביא לנסיגת כוחות צה\"ל"
     ],
     "forecast": [
      "המשך הגברת נוכחות כוחות הביטחון בביירות ובמעברי הפנים",
      "הצגת תביעות מחמירות להפסקת אש בשיחות הביטחוניות בארצות הברית"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות צבאיות תחת לחץ ישראלי ובין-לאומי לפירוק נשק",
      "תיאום רמת הכוננות מול הציר האיראני בהתאם להתפתחויות הפוליטיות בישראל"
     ],
     "forecast": [
      "המשך התנגדות לניסיונות הממשל הלבנוני והקהילה הבין-לאומית לפרקו מנשקו"
     ]
    },
    {
     "actor": "הממשל החדש בסוריה",
     "declared": [
      "משיכת הון זר ושיקום המשק באמצעות ניהול מרכזי של נכסי המדינה"
     ],
     "inferred": [
      "ייצוב המשטר החדש של אחמד א-שרע וניתוק מנכסי מקורבי משטר אסד"
     ],
     "forecast": [
      "המשך מאמצים להשגת לגיטימציה אזורית ובינלאומית לצד ניסיון למנוע חיכוך ישיר מול ישראל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21653898",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963460/speaker-berri-calls-for-unifil-to-remain-in-lebanon-urges-internationa/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963460",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-army-attacks-town-southern-lebanon",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-names-omar-al-halabi-chairman-sovereign-wealth-fund",
     "accessed_at": "2026-10-18T23:43:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-18T02:41:40+00:00",
  "changes": {
   "NORTH-10182343-01": {
    "kind": "new"
   },
   "NORTH-10182343-02": {
    "kind": "possible",
    "prev": "פעילות צבאית ותקיפות ישראליות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10182343-03": {
    "kind": "new"
   },
   "NORTH-10182343-04": {
    "kind": "new"
   },
   "NORTH-10182343-05": {
    "kind": "new"
   },
   "NORTH-10182343-06": {
    "kind": "new"
   }
  }
 }
};
