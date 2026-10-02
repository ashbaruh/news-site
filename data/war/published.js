/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-02T0235__yemen-202610020235.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-02T02:35:03+00:00",
   "window": {
    "from": "2026-10-01T02:35:03+00:00",
    "to": "2026-10-02T02:35:03+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610020235"
   },
   "summary": "הזירה בתימן ובמרחב הסובב אותה מאופיינת בהסלמה צבאית רחבת היקף, הכוללת תקיפות אוויריות הדדיות, ניסיונות תקיפה של החות'ים לעבר שטחי סעודיה, וריכוז כוחות חות'יים באזור הגבול. במקביל, הממשלה התימנית והקואליציה בהובלת סעודיה מעצימות את התקיפות נגד תשתיות וריכוזי חות'ים, תוך חשש כבד מהתרחבות העימות לים האדום ולאיומים על תשתיות אנרגיה אזוריות.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (צנעא, תעז, סעדה)",
     "status": "פעיל והסלמה מתמשכת"
    },
    {
     "name": "חזית גבול תימן-סעודיה",
     "status": "התחמשות והכנות לעימות גבול"
    },
    {
     "name": "מרחב הים האדום ומצר באב אל-מנדב",
     "status": "מתיחות אסטרטגית ואיומים על נתיבי שיט ואנרגיה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10020235-01",
     "title": "מתקפת כטב\"ם על תחנת כוח במדינה",
     "summary": "הקואליציה בראשות סעודיה האשימה את החות'ים בביצוע מתקפת כטב\"ם על תחנת חלוקת חשמל בעיר מדינה, שהביאה לפגיעה בשנאי אך לא השפיעה על כלל רשת החשמל.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T16:23:09+00:00",
     "last_update_at": "2026-10-02T02:30:24+00:00",
     "what_is_not_verified": "אחריות החות'ים וטענת הקואליציה לגבי עצם ביצוע המתקפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-coalition-accuses-houthis-drone-attack-medina",
       "published_at": "2026-10-02T02:30:24+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48178",
       "published_at": "2026-10-01T18:22:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-claims-houthis-targeted-power-station-medina",
       "published_at": "2026-10-01T16:44:45+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153338",
       "published_at": "2026-10-01T16:23:09+00:00"
      }
     ],
     "places": [
      {
       "name": "מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "YEMEN-10020235-02",
     "title": "יירוט טילים בתוך סעודיה",
     "summary": "הגנה אווירית של הקואליציה בראשות סעודיה יירטה והשמידה טיל בליסטי ששוגר לעבר חמיס מושאיט.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T02:10:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T02:10:50+00:00",
     "last_update_at": "2026-10-02T02:10:50+00:00",
     "what_is_not_verified": "הטענה על שיגור הטיל על ידי החות'ים ומסלולו המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-intercepted-houthi-missile",
       "published_at": "2026-10-02T02:10:50+00:00"
      }
     ],
     "places": [
      {
       "name": "חמיס מושאיט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-10020235-03",
     "title": "מעצר עובד משרד האנרגיה האמריקאי באשמת סיוע לחות'ים",
     "summary": "רשויות האכיפה בארצות הברית עצרו עובד משרד האנרגיה בחשד שניסה לספק תמיכה חומרית, חומרים לבניית חומרי נפץ וכטב\"מים לחות'ים בתימן.",
     "axis": "תימן וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T00:26:10+00:00",
     "last_update_at": "2026-10-02T00:26:10+00:00",
     "what_is_not_verified": "נכונות האישומים המשפטיים שהוגשו נגד העובד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_fd12238300a4dd69",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-arrests-energy-department-employee-under-claims-backing-yemens",
       "published_at": "2026-10-02T00:26:10+00:00"
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
     "id": "YEMEN-10020235-04",
     "title": "תקיפות אוויריות בתימן (צנעא, תעז, סעדה ועמראן)",
     "summary": "כוחות אוויר וגורמים צבאיים ביצעו סדרת תקיפות אוויריות (כולל 13 ו-15 גיחות בתעז), ובמקביל נשמעו פיצוצים בצנעא לפי דיווחים מקומיים ותקשורתיים.",
     "axis": "הזירה הפנימית בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T16:31:47+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T16:31:47+00:00",
     "last_update_at": "2026-10-02T02:30:24+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים המדויקים בכל אתר שהופצץ.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_0309aebd03bf161d",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-coalition-accuses-houthis-drone-attack-medina",
       "published_at": "2026-10-02T02:30:24+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0309aebd03bf161d",
       "url": "https://www.sabanew.net/viewstory/153358",
       "published_at": "2026-10-02T00:06:29+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_f3347b5ae5ddc65d",
       "url": "https://www.sabanew.net/viewstory/153357",
       "published_at": "2026-10-01T22:02:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_0309aebd03bf161d",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-afp-say-explosions-heard-sanaa",
       "published_at": "2026-10-01T21:22:04+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_9ad315a5c1263138",
       "url": "https://www.sabanew.net/viewstory/153353",
       "published_at": "2026-10-01T19:07:49+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_0309aebd03bf161d",
       "url": "https://www.newarab.com/news/trump-threatens-bombing-escalation-iran-vows-forceful-response",
       "published_at": "2026-10-01T16:31:47+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-10020235-05",
     "title": "התקבצות צבאית חות'ית בגבול סעודיה והכנות לעימות",
     "summary": "החות'ים הגבירו את הגיוס הצבאי והעברת כלי נשק לאזורים המישוריים ולמחוז סעדה הסמוך לגבול סעודיה, לקראת עימות אפשרי.",
     "axis": "תימן-סעודיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T14:06:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T14:06:49+00:00",
     "last_update_at": "2026-10-01T14:06:49+00:00",
     "what_is_not_verified": "כוונותיהם המבצעיות המדויקות של החות'ים והאם יפתחו בפלישה קרקעית משמעותית לשטח סעודיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/focus-saada-yemens-houthis-amass-forces-near-saudi-border",
       "published_at": "2026-10-01T14:06:49+00:00"
      }
     ],
     "places": [
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה לפיה החות'ים מתכננים פלישה קרקעית מלאה לתוך שטחי סעודיה.",
    "היקף הנזק המדויק בתחנת הכוח במדינה בעקבות פגיעת הכטב\"ם.",
    "האם המעצר של עובד משרד האנרגיה בארה\"ב הניב העברת אמצעי לחימה בפועל לחות'ים."
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
     "value": 3.0762,
     "unit": "ILS",
     "change_pct": 0.08,
     "source_id": "src_ecb",
     "as_of": "2026-10-01T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "התנגדות לתוקפנות של הקואליציה בראשות סעודיה",
      "תמיכה בפעולות נגד ישראל וסעודיה בהתאם לקו האיראני"
     ],
     "inferred": [
      "להפעיל לחץ צבאי וכלכלי על סעודיה באמצעות פגיעה בתשתיות ואיומי גבול",
      "להרחיב את השליטה בשטחים נוספים בתימן"
     ],
     "forecast": [
      "הגברת ההתקפות באמצעות כטב\"מים וטילים לעבר יעדים בסעודיה",
      "החמרת העימות באזורי הגבול של סעדה"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה והממשלה התימנית",
     "declared": [
      "הגנה על שטחי הממלכה ותשתיות חיוניות (כגון תחנות חשמל ומעבר סחורות)",
      "בלימת ההתקדמות של החות'ים בתוך תימן"
     ],
     "inferred": [
      "החלשת היכולות הצבאיות והאמל\"ח של החות'ים באמצעות תקיפות אוויריות נרחבות",
      "מניעת פתיחת חזית גבול נוספת שתאפשר לחות'ים לחדור לשטח סעודיה"
     ],
     "forecast": [
      "המשך התקיפות האוויריות נגד מעוזי חות'ים בצנעא, סעדה ותעז",
      "הדגשת שיתוף הפעולה האזורי לבלימת איומי החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-coalition-accuses-houthis-drone-attack-medina",
     "accessed_at": "2026-10-02T02:35:03+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-afp-say-explosions-heard-sanaa",
     "accessed_at": "2026-10-02T02:35:03+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/focus-saada-yemens-houthis-amass-forces-near-saudi-border",
     "accessed_at": "2026-10-02T02:35:03+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153353",
     "accessed_at": "2026-10-02T02:35:03+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48178",
     "accessed_at": "2026-10-02T02:35:03+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-01T06:27:49+00:00",
  "changes": {
   "YEMEN-10020235-01": {
    "kind": "new"
   },
   "YEMEN-10020235-02": {
    "kind": "new"
   },
   "YEMEN-10020235-03": {
    "kind": "new"
   },
   "YEMEN-10020235-04": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפות אוויריות ומבצעים של צבא תימן הלגיטימי נגד המיליציה החות'ית",
    "score": 1.0
   },
   "YEMEN-10020235-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-01T2340__iran-202610012340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-01T23:40:39+00:00",
   "window": {
    "from": "2026-09-30T23:40:39+00:00",
    "to": "2026-10-01T23:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610012340"
   },
   "summary": "המערכה בין ארצות הברית וישראל לבין איראן מתאפיינת בלחץ כלכלי וצבאי גובר של וושינגטון הכולל מצור ימי, פגיעה ביצוא הנפט וריכוז כוחות צי באזור. מנגד, הזירה הימית במצר הורמוז ממשיכה לבעור בעקבות פגיעות במכליות, לצד חקירות של תוכניות פגיעה בנתיבי תעופה ובסיסים צבאיים באירופה. המתיחות מלווה במאבקים דיפלומטיים באו\"ם שבהם מעורבות רוסיה וסין, וכן באיומים הדדיים לקראת אפשרות להסלמה צבאית נרחבת.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "הסלמה ימית בעקבות ירי טילים לעבר מכליות ומצור אמריקאי על נמלים"
    },
    {
     "name": "המערכה הכלכלית והסנקציות",
     "status": "החרפת העיצומים האמריקאיים ועצירת העמסת נפט גולמי איראני"
    },
    {
     "name": "הזירה המדינית והבין-לאומית",
     "status": "חסימת מנגנוני פיקוח באו\"ם באמצעות וטו רוסי-סיני והיערכות צבאית אמריקאית"
    }
   ],
   "events": [
    {
     "id": "IRAN-10012340-01",
     "title": "פגיעת טיל במכלית נפט במצר הורמוז",
     "summary": "מכלית-על לנפט עלתה באש במצר הורמוז לאחר שנפגעה מטיל במרחק של כשמונה קילומטרים מחופי עומאן, על פי דיווחים בתקשורת האיראנית.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T20:16:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T20:16:30+00:00",
     "last_update_at": "2026-10-01T20:16:30+00:00",
     "what_is_not_verified": "זהות הגורם ששיגר את הטיל לא צוינה ולא אומתה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/oil-supertanker-hit-hormuz-iranian-media",
       "published_at": "2026-10-01T20:16:30+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז, עומאן",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-10012340-02",
     "title": "הטלת סנקציות אמריקאיות על מגזרי הרכב והרכבות באיראן",
     "summary": "משרד האוצר של ארצות הברית הטיל עיצומים חדשים על מגזרי הרכב והמסילות של איראן במסגרת מבצע לבידוד כלכלי של המדינה.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T18:40:09+00:00",
     "last_update_at": "2026-10-01T18:46:36+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-sanctions-target-irans-auto-rail-sectors-blockade-chokes-ship-lanes",
       "published_at": "2026-10-01T18:46:36+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610016404",
       "published_at": "2026-10-01T18:40:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10012340-03",
     "title": "עיצומים אמריקאיים על רשת פיננסית בראשות אזרח ישראלי ומולדובי",
     "summary": "ארצות הברית הטילה סנקציות על רשת פיננסית שסייעה לאיראן לעקוף הגבלות ולהעביר כספים למשמרות המהפכה ולשלוחותיהן.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T20:20:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T20:20:33+00:00",
     "last_update_at": "2026-10-01T20:20:33+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21535356",
       "published_at": "2026-10-01T20:20:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10012340-04",
     "title": "מעצר בעל אזרחות איראנית-בריטית בחשד למעורבות בתוכנית לפגוע בבסיס פיירפורד",
     "summary": "המשטרה בבריטניה עצרה אזרח בעל אזרחות כפולה בחשד להכנת מעשי טרור הקשורים לבסיס חיל האוויר המלכותי פיירפורד, המשמש לתקיפות באיראן.",
     "axis": "בריטניה ואירופה מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T17:54:32+00:00",
     "last_update_at": "2026-10-01T21:51:00+00:00",
     "what_is_not_verified": "מידת המעורבות הישירה של איראן בתוכנית בבסיס הבריטי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610011828",
       "published_at": "2026-10-01T21:51:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/uk-police-arrest-dual-uk-iranian-man-fairford-air-base-investigation",
       "published_at": "2026-10-01T18:46:36+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21534599",
       "published_at": "2026-10-01T17:54:32+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      },
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "IRAN-10012340-05",
     "title": "טענות ואיומים בנוגע לחשד לקשר איראני בתקרית טיסת פליי דובאי",
     "summary": "נשיא ארצות הברית הצהיר כי איראן תספוג תגובה קשה אם יוכח קשר למתקפה על הטיסה לישראל, בעוד גורם ישראלי ציין כי כרגע הקשר נשלל.",
     "axis": "ישראל-ארה\"ב מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T11:26:46+00:00",
     "last_update_at": "2026-10-01T20:30:24+00:00",
     "what_is_not_verified": "קיומו של קשר ישיר בין הטייס או המתקפה במטוס לבין שלטונות איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/trump-vows-hit-iran-very-hard-if-linked-flydubai-attack",
       "published_at": "2026-10-01T20:30:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjrab7ncfl",
       "published_at": "2026-10-01T18:25:54+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131179",
       "published_at": "2026-10-01T18:18:39+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sywkgaj9gl",
       "published_at": "2026-10-01T17:07:09+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cqgmrm7xd8wyo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-01T11:26:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10012340-06",
     "title": "וטו באו\"ם על פאנל מומחים לבחינת מתקני הגרעין של איראן",
     "summary": "רוסיה וסין הטילו וטו במועצת הביטחון של האו\"ם נגד הקמת צוות מומחים בתמיכת ארצות הברית בנושא מתקני הגרעין האיראניים.",
     "axis": "הזירה המדינית והגרעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T12:00:00+00:00",
     "last_update_at": "2026-10-01T12:00:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_c3567e027609c62d",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168505",
       "published_at": "2026-10-01T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "IRAN-10012340-07",
     "title": "הודעת שר האוצר האמריקאי על אפס יצוא נפט גולמי איראני במכליות",
     "summary": "שר האוצר של ארצות הברית פרסם כי איראן לא העמיסה כלל נפט גולמי על מכליות במהלך חודש ספטמבר כתוצאה מהמצור והסנקציות.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T17:55:00+00:00",
     "last_update_at": "2026-10-01T22:31:55+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_8cba82832dfd0541",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/no-iranian-oil-exports-september-bessent",
       "published_at": "2026-10-01T22:31:55+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_8cba82832dfd0541",
       "url": "https://t.me/abualiexpress/131184",
       "published_at": "2026-10-01T20:10:35+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_8cba82832dfd0541",
       "url": "https://www.iranintl.com/en/202610014929",
       "published_at": "2026-10-01T17:55:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10012340-08",
     "title": "מתן פטור זמני מסנקציות לטיסות בין איראן לעיר נג'ף בעיראק",
     "summary": "משרד האוצר האמריקאי העניק רישיון מיוחד לחברת תעופה עיראקית לבצע טיסות בין עיראק לאיראן עד סוף חודש אוקטובר, חרף ההגבלות על התעופה האיראנית.",
     "axis": "סנקציות וכלכלה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T16:05:52+00:00",
     "last_update_at": "2026-10-01T16:05:52+00:00",
     "what_is_not_verified": "האם יאושר פטור קבוע לטיסות אלו מעבר לאוקטובר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/2026/10/01/washington-decides-complete-ban-on-iran-iraq-flights-is-not-worth-the-political-cost/",
       "published_at": "2026-10-01T16:05:52+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ף, עיראק",
       "lat": 32.001,
       "lon": 44.33
      }
     ]
    },
    {
     "id": "IRAN-10012340-09",
     "title": "העברת סיוע צבאי אמריקאי למצרים על רקע המערכה מול איראן",
     "summary": "ממשל ארצות הברית אישר העברת סיוע ביטחוני למצרים בסך שלוש מאות ועשרים מיליון דולר תוך ויתור על תנאים קודמים עקב תפקידה במלחמה.",
     "axis": "ישראל-ארה\"ב מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T15:52:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T15:52:27+00:00",
     "last_update_at": "2026-10-01T15:52:27+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21533734",
       "published_at": "2026-10-01T15:52:27+00:00"
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
     "id": "IRAN-10012340-10",
     "title": "שילוח כוחות צי ונחיתה אמריקאיים לעבר המזרח התיכון",
     "summary": "קבוצת תקיפה של נושאת מטוסים וכוח נחיתה הכולל אלפי לוחמים עזבו את סן דייגו כחלק מריכוז כוחות צבאיים נרחב סביב איראן לקראת נובמבר.",
     "axis": "ישראל-ארה\"ב מול איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T15:50:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T15:50:33+00:00",
     "last_update_at": "2026-10-01T22:48:40+00:00",
     "what_is_not_verified": "כוונות מבצעיות מדויקות של הנשיא טראמפ לתקוף בנובמבר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1372795",
       "published_at": "2026-10-01T22:48:40+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131171",
       "published_at": "2026-10-01T15:50:33+00:00"
      }
     ],
     "places": [
      {
       "name": "סן דייגו, ארצות הברית",
       "lat": 32.7157,
       "lon": -117.1638
      }
     ]
    }
   ],
   "not_verified": [
    "זהות המשגרים של הטיל שפגע במכלית הנפט ליד עומאן",
    "קשר ישיר בין איראן לתקרית בטיסת פליי דובאי לישראל",
    "מידת ההכוונה האיראנית של החשוד שנעצר סמוך לבסיס פיירפורד בבריטניה",
    "הערכות על תוכנית תקיפה ודאית של ארצות הברית או ישראל במהלך חודש נובמבר"
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
     "value": 3.0762,
     "unit": "ILS",
     "change_pct": 0.08,
     "source_id": "src_ecb",
     "as_of": "2026-10-01T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "חסימת מקורות ההכנסה והמימון של המשטר האיראני באמצעות מבצע כלכלי",
      "תגובה קשה וחריפה נגד איראן אם יוכח קשר למתקפה על הטיסה לישראל"
     ],
     "inferred": [
      "הפעלת לחץ מרבי על מנת לכפות על איראן הגעה להסכם בתנאים אמריקאיים",
      "הרתעה והכנת תשתית צבאית לתקיפה רחבה באמצעות תגבור כוחות ימיים"
     ],
     "forecast": [
      "המשך אכיפה קפדנית של המצור הימי והרחבת הסנקציות על מגזרים נוספים"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "פתרון סוגיות באמצעים דיפלומטיים תוך דרישה לערבויות מוחשיות מארה\"ב לסיום המלחמה",
      "הגנה עצמית בעוצמה מרבית נגד תוקפנות וטרור אמריקאיים"
     ],
     "inferred": [
      "שימור הכלכלה המקומית וניסיונות לעקוף את המצור והעיצומים הבין-לאומיים",
      "הישענות על תמיכה רוסית וסינית במוסדות הבין-לאומיים לבלימת לחץ מערבי"
     ],
     "forecast": [
      "המשך פעילות עקיפה ושיבוש תנועת שיט באזור המפרץ כדי לאותת על מחיר המצור"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "בדיקת נסיבות אירוע הטיסה והדגשת ההתמודדות מול שטיפת מוח איסלאמיסטית קיצונית"
     ],
     "inferred": [
      "היערכות צבאית וביטחונית מתמדת לאפשרות של הסלמה או תקיפה ישירה מול איראן"
     ],
     "forecast": [
      "המשך תיאום מודיעיני וביטחוני הדוק עם ארצות הברית והמדינות השותפות באזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/trump-vows-hit-iran-very-hard-if-linked-flydubai-attack",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cqgmrm7xd8wyo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/2026/10/01/washington-decides-complete-ban-on-iran-iraq-flights-is-not-worth-the-political-cost/",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610014929",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21533734",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1372795",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/no-iranian-oil-exports-september-bessent",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131171",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168505",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sywkgaj9gl",
     "accessed_at": "2026-10-01T23:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-01T05:25:59+00:00",
  "changes": {
   "IRAN-10012340-01": {
    "kind": "new"
   },
   "IRAN-10012340-02": {
    "kind": "new"
   },
   "IRAN-10012340-03": {
    "kind": "new"
   },
   "IRAN-10012340-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרת בריטניה על מעורבות איראנית לכאורה ליד בסיס חיל האוויר",
    "score": 1.0
   },
   "IRAN-10012340-05": {
    "kind": "new"
   },
   "IRAN-10012340-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מחלוקת דיפלומטית סביב משלחת איראן לאו\"ם בארה\"ב",
    "score": 0.817
   },
   "IRAN-10012340-07": {
    "kind": "new"
   },
   "IRAN-10012340-08": {
    "kind": "new"
   },
   "IRAN-10012340-09": {
    "kind": "possible",
    "prev": "אכיפת הסגר הימי של פיקוד המרכז האמריקאי על נמלי איראן",
    "score": 0.467
   },
   "IRAN-10012340-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-30T2340__ukraine-202609302340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-30T23:40:39+00:00",
   "window": {
    "from": "2026-09-29T23:40:39+00:00",
    "to": "2026-09-30T23:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609302340"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות הפצצות אוויריות כבדות של רוסיה על תשתיות אנרגיה, אזורים עירוניים ואתרים כלכליים באוקראינה, לצד פעילות הגנה ותקיפה נגדית של אוקראינה במזרח ובדרום. במקביל, מתנהלת מערכה דיפלומטית וכלכלית סביב סנקציות, הגבלות על אמנים, ואיומים מצד רוסיה כלפי נאט\"ו.",
   "fronts": [
    {
     "name": "חזית מזרח דונבאס",
     "status": "פעיל"
    },
    {
     "name": "חזית האוויר והתשתיות בקייב",
     "status": "פעיל"
    },
    {
     "name": "חזית דרום זפוריז'יה",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09302340-01",
     "title": "תקיפת מטוס אוקראיני בדונבאס",
     "summary": "מטוס תקיפה אוקראיני ביצע גיחה בגובה נמוך והטיל תחמושת מדויקת מדגם AASM HAMMER על מטרה רוסית במזרח דונבאס",
     "axis": "חזית האוויר והקרקע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T23:37:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T23:37:46+00:00",
     "last_update_at": "2026-09-30T23:37:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48151",
       "published_at": "2026-09-30T23:37:46+00:00"
      }
     ],
     "places": [
      {
       "name": "דונבאס, אוקראינה",
       "lat": 47.9864,
       "lon": 37.2746
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-02",
     "title": "פציעת איש חילוץ בקייב",
     "summary": "איש חילוץ נפצע במתקפה רוסית שנייה על קייב",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T22:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T22:33:00+00:00",
     "last_update_at": "2026-09-30T22:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4169575-recordholding-rescue-worker-injured-in-second-russian-shelling-attack-in-kyiv.html",
       "published_at": "2026-09-30T22:33:00+00:00"
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
     "id": "UKRAINE-09302340-03",
     "title": "פגיעה באזרחים ונזק במחוז קייב",
     "summary": "מתקפה רוסית פגעה בחמישה מחוזות בקייב והובילה לפציעת אישה ונזק למבנים",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T18:27:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T18:27:00+00:00",
     "last_update_at": "2026-09-30T20:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4169795-russian-attack-in-kyiv-regions-boryspil-district-injures-woman.html",
       "published_at": "2026-09-30T20:27:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055875/",
       "published_at": "2026-09-30T18:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בוריספיל, אוקראינה",
       "lat": 50.3512,
       "lon": 30.9508
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-04",
     "title": "שימוש ברחפן חיתוך פלגה על ידי רוסיה",
     "summary": "רוסיה השתמשה לראשונה ברחפן המצויד בראש קרב המיועד לחיתוך עמודי חשמל",
     "axis": "חזית התשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T16:25:07+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T16:25:07+00:00",
     "last_update_at": "2026-09-30T18:19:35+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-uses-drone-with-warhead-designed-to-cut-power-pylons-for-1st-time-zelensky-adviser-says/",
       "published_at": "2026-09-30T18:19:35+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-strikes-ukrainian-power-pylon-with-steel-cutting-drone-for-1st-time-zelenskys-adviser-says/",
       "published_at": "2026-09-30T16:25:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09302340-05",
     "title": "דחיית ערעור חברת נכסים רוסית בצ'כיה",
     "summary": "בית משפט מנהלי עליון בצ'כיה דחה ערעור של חברת ניהול נכסים רוסית על הקפאת 61 נכסים",
     "axis": "חזית הסנקציות והנכסים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T17:25:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T17:25:00+00:00",
     "last_update_at": "2026-09-30T17:25:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055866/",
       "published_at": "2026-09-30T17:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פראג, צ'כיה",
       "lat": 50.0875,
       "lon": 14.4213
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-06",
     "title": "פינוי נפגעים באמצעות רובוט קרקעי בזפוריז'יה",
     "summary": "כוחות אוקראיניים פינו ארבעה חיילים פצועים מקו החזית באמצעות רכב קרקעי בלתי מאויש",
     "axis": "חזית דרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T16:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T16:41:00+00:00",
     "last_update_at": "2026-09-30T16:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055856/",
       "published_at": "2026-09-30T16:41:00+00:00"
      }
     ],
     "places": [
      {
       "name": "הוליאיפולה, אוקראינה",
       "lat": 47.6655,
       "lon": 36.2657
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-07",
     "title": "תקיפת פצצות אוויריות בסומי",
     "summary": "תקיפה רוסית באמצעות פצצות אוויריות מונחות פגעה בסומי ופצעה שישה בני אדם",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T16:28:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T16:28:00+00:00",
     "last_update_at": "2026-09-30T16:28:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055854/",
       "published_at": "2026-09-30T16:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סומי, אוקראינה",
       "lat": 50.912,
       "lon": 34.8028
      }
     ]
    },
    {
     "id": "UKRAINE-09302340-08",
     "title": "נפילת כטב\"ם במחוז רובנו",
     "summary": "כטב\"ם רוסי נחת במחוז רובנו באוקראינה מבלי להתפוצץ",
     "axis": "חזית ההפצצות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T11:28:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-30T11:28:36+00:00",
     "last_update_at": "2026-09-30T11:28:36+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48122",
       "published_at": "2026-09-30T11:28:36+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות הקרמלין לפיהן רוסיה מקפידה בקפדנות על כל התקנים ההומניטריים כלפי עצורים אוקראיניים",
    "דיווחים על היערכות נאט\"ו לבלוקאדה ימית ואווירית של מחוז קלינינגרד",
    "הערכות לפיהן ולדימיר פוטין הורה אישית על תקיפות אתרים אזרחיים כדי לזרוע פחד"
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
     "value": 1.1355,
     "unit": "USD",
     "change_pct": 0.0,
     "source_id": "src_ecb",
     "as_of": "2026-09-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה במפעלים ובמפעלים לייצור נשק באירופה המספקים נשק לקייב כמטרות צבאיות לגיטימיות"
     ],
     "inferred": [
      "שחיקת הכלכלה האוקראינית והרסת תשתית האנרגיה כדי לשתק את העורף לקראת החורף",
      "יצירת הרתעה מול נאט\"ו באמצעות איומים גרעיניים סביב קלינינגרד"
     ],
     "forecast": [
      "המשך מתקפות אוויריות אינטנסיביות על מרכזי אוכלוסייה ותשתיות חיוניות באוקראינה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על המדינה והשבת ילדים אוקראינים שפונו או נלקחו"
     ],
     "inferred": [
      "שימור רציפות תפקודית של הכלכלה למרות נזקי התקיפות והתראות האזעקה הממושכות",
      "פיתוח והטמעה של אמצעים טכנולוגיים מתקדמים כמו רובוטים קרקעיים וחימוש מדויק"
     ],
     "forecast": [
      "פנייה מתמשכת לבעלי ברית מערביים בדרישה לסיוע כלכלי וצבאי לייצוב שוק האנרגיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russia-strikes-ukrainian-power-pylon-with-steel-cutting-drone-for-1st-time-zelenskys-adviser-says/",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/30/8055854/",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48122",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4169795-russian-attack-in-kyiv-regions-boryspil-district-injures-woman.html",
     "accessed_at": "2026-09-30T23:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-29T16:37:24+00:00",
  "changes": {
   "UKRAINE-09302340-01": {
    "kind": "new"
   },
   "UKRAINE-09302340-02": {
    "kind": "possible",
    "prev": "פגיעת כטב\"מים וטילים בבניין האקדמיה למדעים בקייב",
    "score": 0.633
   },
   "UKRAINE-09302340-03": {
    "kind": "new"
   },
   "UKRAINE-09302340-04": {
    "kind": "new"
   },
   "UKRAINE-09302340-05": {
    "kind": "new"
   },
   "UKRAINE-09302340-06": {
    "kind": "new"
   },
   "UKRAINE-09302340-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פגיעת פצצות דואה בבית ספר ובאזור מגורים בסומי",
    "score": 0.817
   },
   "UKRAINE-09302340-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-01T2357__north-202610012357.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-01T23:57:59+00:00",
   "window": {
    "from": "2026-09-30T23:57:59+00:00",
    "to": "2026-10-01T23:57:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610012357"
   },
   "summary": "בזירה הצפונית נמשכת המתיחות סביב המצב הביטחוני בסוריה והפעילות לאורך גבול לבנון, שם צבא לבנון סיכל ניסיונות הברחת אמצעי לחימה. במקביל, גורמים רשמיים בסוריה ובטורקיה מכחישים דיווחים על קיום מגעים חשאיים בינן לבין חיזבאללה, בעוד ישראל ממשיכה בפעילות אווירית בגזרה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה (תקיפות אוויריות, סיכולי הברחות ודיונים על מנגנוני ביטחון)"
    },
    {
     "name": "החזית הסורית",
     "status": "מתוחה (אירועי אבטחתי פנימיים, התארגנויות חמושים והכחשות קשרים אזוריים)"
    }
   ],
   "events": [
    {
     "id": "NORTH-10012357-01",
     "title": "מפגן כוח של חמושים בדמשק",
     "summary": "חמושים סונים קיימו מפגן כוח במדים צבאיים ועם סממנים דתיים ברחובות שכונת אל-מידאן בדמשק.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T20:42:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T20:42:23+00:00",
     "last_update_at": "2026-10-01T20:42:23+00:00",
     "what_is_not_verified": "היקף כוחם האמיתי של הגורמים ומעורבותם הישירה בארגונים",
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
       "name": "אל-מידאן, דמשק, סוריה",
       "lat": 33.4933,
       "lon": 36.2969
      }
     ]
    },
    {
     "id": "NORTH-10012357-02",
     "title": "תקיפה ופציעת קצין בצבא סוריה",
     "summary": "חמושים לא מזוהים ירו ופצעו קצין במשרד ההגנה הסורי בעיר אל-סאנאמן שבדרום סוריה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T17:46:41+00:00",
     "last_update_at": "2026-10-01T17:46:41+00:00",
     "what_is_not_verified": "זהותם המדויקת של התוקפים ומניעיהם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_9acd1d6db00421ca",
       "url": "https://english.enabbaladi.net/archives/2026/10/gunmen-target-syrian-army-officer-in-daraa/",
       "published_at": "2026-10-01T17:46:41+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-סאנאמן, סוריה",
       "lat": 33.0732,
       "lon": 36.1834
      }
     ]
    },
    {
     "id": "NORTH-10012357-03",
     "title": "תפיסת אמצעי לחימה והברחה בגבול סוריה-לבנון",
     "summary": "הצבא הלבנוני תפס מטעני נפבוא, נפצים וחומר נפץ מסוג טי.אן.טי שהוברחו משטח סוריה ללבנון, בעוד המבריחים נמלטו חזרה לסוריה.",
     "axis": "לבנון-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T12:40:54+00:00",
     "last_update_at": "2026-10-01T16:58:55+00:00",
     "what_is_not_verified": "היעד הסופי של אמצעי הלחימה המוברחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_c49c63eaddea846d",
       "url": "https://english.almanar.com.lb/article/133317/",
       "published_at": "2026-10-01T16:58:55+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_c281ae6a82c102f2",
       "url": "https://www.aa.com.tr/en/middle-east/lebanese-army-foils-attempt-to-smuggle-540-pounds-of-tnt-from-syria/4075348",
       "published_at": "2026-10-01T16:29:01+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_45acc9cc0b514bea",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960733/lebanese-army-seizes-245-kg-of-tnt-explosives-in-attempted-smuggling-f/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960733",
       "published_at": "2026-10-01T12:40:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10012357-04",
     "title": "הכחשת פגישה חשודה בין סוריה לחיזבאללה בטורקיה",
     "summary": "ממשלת טורקיה ומשרד החוץ הסורי הכחישו דיווחים על קיום פגישה חשאית בין פקידים סורים לחיזבאללה על אדמת טורקיה.",
     "axis": "טורקיה-סוריה-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T10:44:21+00:00",
     "last_update_at": "2026-10-01T20:02:42+00:00",
     "what_is_not_verified": "האם התקיימו מגעים חשאיים בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_878316b2318bd6a0",
       "url": "https://www.aljazeera.com/news/2026/10/1/syria-denies-officials-held-secret-talks-with-hezbollah-in-turkiye?traffic_source=rss",
       "published_at": "2026-10-01T20:02:42+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_878316b2318bd6a0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-echoes-denial-syria-hezbollah-meeting-its-turf",
       "published_at": "2026-10-01T17:34:23+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_3ffb0c8d494e40d6",
       "url": "https://www.aa.com.tr/en/turkiye/turkiye-syria-reject-claims-of-meeting-between-syrian-government-hezbollah-officials/4075402",
       "published_at": "2026-10-01T17:22:33+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_f67d97ee72d2a576",
       "url": "https://www.maariv.co.il/breaking-news/article-1372691",
       "published_at": "2026-10-01T15:51:06+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_878316b2318bd6a0",
       "url": "https://t.me/alexmehacarmel/48154",
       "published_at": "2026-10-01T10:44:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10012357-05",
     "title": "תקיפות חיל האוויר הישראלי במרחב לבנון",
     "summary": "דובר צה\"ל דיווח על מאות תקיפות של חיל האוויר במרחב הביטחוני בלבנון במהלך החודש האחרון.",
     "axis": "ישראל-לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T06:00:12+00:00",
     "last_update_at": "2026-10-01T06:58:01+00:00",
     "what_is_not_verified": "פירוט מלא של המטרות שהותקפו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131140",
       "published_at": "2026-10-01T06:58:01+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25256",
       "published_at": "2026-10-01T06:00:12+00:00"
      }
     ],
     "places": [
      {
       "name": "לבנון",
       "lat": 40.3757,
       "lon": -76.4626
      }
     ]
    }
   ],
   "not_verified": [
    "קיומה או אי-קיומה של פגישה חשאית בין נציגים סורים לחיזבאללה בטורקיה",
    "היקף ההתארגנות של כוחות חמושים ואופיים המדויק בדמשק ובדרום סוריה"
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
     "value": 3.0762,
     "unit": "ILS",
     "change_pct": 0.08,
     "source_id": "src_ecb",
     "as_of": "2026-10-01T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים בגזרה הצפונית ובלבנון"
     ],
     "inferred": [
      "מניעת התחמשות מחודשת של חיזבאללה והברחות אמצעי לחימה דרך סוריה"
     ],
     "forecast": [
      "המשך התקיפות האוויריות והלחץ המבצעי בלבנון ובגבולותיה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "דחיית טענות על קשרים או פגישות תיאום עם חיזבאללה"
     ],
     "inferred": [
      "שמירה על ריבונות והתמודדות עם חוסר יציבות ביטחוני פנימי ואיומי חמושים"
     ],
     "forecast": [
      "המשך מאמצי ייצוב השלטון הפנימי ומניעת זליגת עימותים לשטחה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "שמירה על נאמנות להנהגת הארגון ולדרכו"
     ],
     "inferred": [
      "היערכות מחדש לנוכח לחצים צבאיים ומדיניים פנימיים ואזוריים"
     ],
     "forecast": [
      "המשך שימור יכולותיו חרף הלחצים והעימותים בגזרה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/1/syria-denies-officials-held-secret-talks-with-hezbollah-in-turkiye?traffic_source=rss",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/133317/",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/turkiye/turkiye-syria-reject-claims-of-meeting-between-syrian-government-hezbollah-officials/4075402",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/gunmen-target-syrian-army-officer-in-daraa/",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960733/lebanese-army-seizes-245-kg-of-tnt-explosives-in-attempted-smuggling-f/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960733",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1372691",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-echoes-denial-syria-hezbollah-meeting-its-turf",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131140",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48154",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25256",
     "accessed_at": "2026-10-01T23:57:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-01T05:36:53+00:00",
  "changes": {
   "NORTH-10012357-01": {
    "kind": "new"
   },
   "NORTH-10012357-02": {
    "kind": "new"
   },
   "NORTH-10012357-03": {
    "kind": "new"
   },
   "NORTH-10012357-04": {
    "kind": "new"
   },
   "NORTH-10012357-05": {
    "kind": "possible",
    "prev": "יציאת כוחות צק\"ח גולני לרענון אחרי פעילות בדרום לבנון",
    "score": 0.633
   }
  }
 }
};
