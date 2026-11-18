/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-18T0040__yemen-202611180040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-18T00:40:25+00:00",
   "window": {
    "from": "2026-11-17T00:40:25+00:00",
    "to": "2026-11-18T00:40:25+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611180040"
   },
   "summary": "הלחימה בזירה התימנית מסלימה עם התקדמות קרקעית של הכוחות החות'ים לעבר עדן ולאורך חופי ים סוף, לצד מוקדי לחימה במאריב ובאל-ג'וף. החות'ים ממשיכים לשגר כלי טיס בלתי מאוישים לעבר תשתיות אנרגיה בריאד, ומנגד סעודיה מבצעת תקיפות אוויריות בתימן וממנה מפקד חדש לניהול המערכה. ברקע האיומים, ארצות הברית מגבירה את מעורבותה באמצעות שיגור עשרות מומחי הגנה אווירית לסיוע לממלכה הסעודית.",
   "fronts": [
    {
     "name": "דרום-מערב תימן וחוף הים האדום",
     "status": "התקדמות חות'ית וטענה להשתלטות על שטחים נרחבים"
    },
    {
     "name": "דרום תימן - ציר עדן",
     "status": "לחץ והתקדמות של החות'ים לעבר העיר הדרומית"
    },
    {
     "name": "מחוזות מאריב ואל-ג'וף",
     "status": "עימותים כבדים בין החות'ים לכוחות הממשלה"
    },
    {
     "name": "עומק ערב הסעודית (אזור ריאד)",
     "status": "תקיפות באמצעות כטב\"מים חות'יים לעבר מתקני נפט והיערכות הגנה אווירית"
    },
    {
     "name": "צפון-מערב תימן (חודיידה וצעדה)",
     "status": "תקיפות אוויריות סעודיות אינטנסיביות נגד יעדים ומבנים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11180040-01",
     "title": "טענה של טאקר קרלסון על כיבוש שטחים בסעודיה על ידי החות'ים",
     "summary": "מגיש הפודקאסטים האמריקאי טאקר קרלסון טען בריאיון כי הכוחות החות'ים מחזיקים בשטחים מתוך ערב הסעודית ומאיימים ישירות על הממלכה, תוך ביקורת על היעדר סיקור בתקשורת האמריקאית.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T23:02:18+00:00",
     "last_update_at": "2026-11-17T23:02:18+00:00",
     "what_is_not_verified": "היקף ומיקום הנוכחות החות'ית הנטענת בתוך שטח סעודיה אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-are-occupying-part-saudi-arabia-tucker-carlson-says",
       "published_at": "2026-11-17T23:02:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11180040-02",
     "title": "הצגת מטול נ\"ט אמריקאי מדגם PSRL-1 למכירה בצפון תימן",
     "summary": "סוחר כלי נשק באזור שבשליטת החות'ים בצפון תימן הציג למכירה מטול רקטות אמריקאי מתקדם נגד טנקים, תוך פירוט מאפייניו הטכניים ושדרוגיו ביחס לדגם המקורי.",
     "axis": "פנים תימן / שוק הנשק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T22:40:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T22:40:29+00:00",
     "last_update_at": "2026-11-17T22:40:29+00:00",
     "what_is_not_verified": "נתיב ההגעה של המטול האמריקאי לשוק הנשק המקומי בתימן אינו ברור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49688",
       "published_at": "2026-11-17T22:40:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11180040-03",
     "title": "הכרזת החות'ים על השתלטות על שטח נרחב בדרום-מערב תימן",
     "summary": "החות'ים מסרו בהודעה רשמית כי כוחותיהם השתלטו על שטח של שבעת אלפים ומאה קילומטרים רבועים מידי נאמני סעודיה, לאורך רצועת החוף הנושקת לים האדום בדרום-מערב תימן.",
     "axis": "דרום-מערב תימן והים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:22:18+00:00",
     "last_update_at": "2026-11-17T18:22:18+00:00",
     "what_is_not_verified": "היקף השטח שנכבש בפועל ושליטתם המלאה לא אומתו באופן בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133816",
       "published_at": "2026-11-17T18:22:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11180040-04",
     "title": "שיגור כטב\"מים חות'יים לעבר צינור הנפט מזרח-מערב בסעודיה",
     "summary": "החות'ים הודיעו כי שיגרו חמישה כלי טיס בלתי מאוישים לעבר שתי תחנות שאיבה של צינור הנפט הסעודי באזור ריאד.",
     "axis": "תקיפות חות'יות בסעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:05:25+00:00",
     "last_update_at": "2026-11-17T18:05:25+00:00",
     "what_is_not_verified": "אין אישור סעודי רשמי לפגיעה בתחנות השאיבה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-launched-drones-towards-saudi-east-west-pipeline",
       "published_at": "2026-11-17T18:05:25+00:00"
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
     "id": "YEMEN-11180040-05",
     "title": "הגעת משלחת יועצי הגנה אווירית מארצות הברית לערב הסעודית",
     "summary": "מפקד פיקוד המרכז האמריקאי צפוי להגיע לסעודיה יחד עם עשרות מומחי הגנה אווירית כדי לבחון ולסייע בהגנת הממלכה מפני מתקפות אוויריות מצד החות'ים.",
     "axis": "סיוע אמריקאי-סעודי",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T17:51:09+00:00",
     "last_update_at": "2026-11-17T17:51:09+00:00",
     "what_is_not_verified": "מועד ההגעה המדויק ומספר היועצים הסופי טרם אושרו רשמית על ידי הפנטגון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/us-centcom-commander-expected-saudi-arabia-dozens-air-defence-experts-sources-say",
       "published_at": "2026-11-17T17:51:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11180040-06",
     "title": "תקיפות אוויריות של סעודיה בחודיידה ובצעדה",
     "summary": "משרד הבריאות המנוהל על ידי החות'ים דיווח על תקיפה סעודית כפולה נגד מפעל ספוג ליד חודיידה שגרמה למותם של ארבעה עשר בני אדם ולפציעת עשרה, ועל תקיפה נוספת במחוז צעדה שפגעה בצוות פינוי מוקשים ובמחלצים.",
     "axis": "התקיפות הסעודיות בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T17:31:31+00:00",
     "last_update_at": "2026-11-17T17:31:31+00:00",
     "what_is_not_verified": "אמיתות מספרי הנפגעים והטענה שהתקיפה השנייה כוונה ביודעין לאנשי הצלה ועיתונאים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-double-tap-strike-factory-yemens-hodeida-kills-14-houthi-health",
       "published_at": "2026-11-17T17:31:31+00:00"
      }
     ],
     "places": [
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "כיתאף, צעדה, תימן",
       "lat": 17.2379,
       "lon": 44.3962
      }
     ]
    },
    {
     "id": "YEMEN-11180040-07",
     "title": "מינוי גנרל סעודי חדש לפיקוח על המערכה בתימן",
     "summary": "ערב הסעודית מינתה את הגנרל פיאד רוויילי, בעל רקע בלוחמה אווירית, לפקח על ניהול המלחמה בתימן על רקע קשיים ונסיגות של הכוחות הנתמכים על ידי סעודיה בשטח.",
     "axis": "פיקוד סעודי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T16:05:58+00:00",
     "last_update_at": "2026-11-17T16:05:58+00:00",
     "what_is_not_verified": "מידת השינוי האופרטיבי שיוביל המינוי בשדה הקרב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-appoints-gen-ruwaili-oversee-yemen-war-after-setbacks-what-know",
       "published_at": "2026-11-17T16:05:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11180040-08",
     "title": "אי-ודאות סביב מעמדו של שר ההגנה התימני עקב היעדרות ממושכת",
     "summary": "היעדרותו של שר ההגנה של הממשלה המוכרת בתימן מאירועים ומפגשים צבאיים, בעקבות תקיפת שיירתו בספטמבר, מעוררת מגעים ודיונים בהנהגה המדינית לגבי החלפתו האפשרית.",
     "axis": "פנים ממשלת תימן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T11:09:38+00:00",
     "last_update_at": "2026-11-17T11:09:38+00:00",
     "what_is_not_verified": "זהות המחליף והאם תתקבל החלטה רשמית להדחתו של השר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-defence-ministers-disappearance-fuels-speculation",
       "published_at": "2026-11-17T11:09:38+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    },
    {
     "id": "YEMEN-11180040-09",
     "title": "התקדמות כוחות חות'יים לעבר עדן וקרבות במאריב ובאל-ג'וף",
     "summary": "דיווחים מצביעים על התקדמות נוספת של כוחות החות'ים בכיוון העיר עדן שבדרום, לצד עימותים נרחבים באזורי מאריב ואל-ג'וף.",
     "axis": "קרקעי - פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T07:26:06+00:00",
     "last_update_at": "2026-11-17T07:26:06+00:00",
     "what_is_not_verified": "מרחק ההתקדמות המדויק לעבר עדן ומצב השליטה במוקדי הקרבות במאריב ובאל-ג'וף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-us-tensions-climb-amid-tanker-attacks-blast-qeshm",
       "published_at": "2026-11-17T07:26:06+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה של טאקר קרלסון על אחיזה פיזית וכיבוש שטחים בסעודיה על ידי כוחות חות'יים",
    "מידת הנזק והפגיעה המדויקת בתחנות השאיבה של צינור מזרח-מערב בסעודיה",
    "מספר הנפגעים המדויק בתקיפות האוויריות בחודיידה ובצעדה",
    "נתיב האספקה שבאמצעותו הגיע מטול הנ\"ט האמריקאי לשוק הנשק בצפון תימן",
    "ההיקף המדויק של כיבוש שבעת אלפים ומאה קמ\"ר בדרום-מערב תימן"
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
     "value": 3.2463,
     "unit": "ILS",
     "change_pct": 0.69,
     "source_id": "src_ecb",
     "as_of": "2026-11-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "השתלטות ו'שחרור' שטחים בדרום-מערב תימן הנושקים לים האדום",
      "פגיעה בתשתיות אסטרטגיות ובצינורות נפט בתוך ערב הסעודית"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וכלכלי מתמשך על ריאד להפסקת מעורבותה במלחמה",
      "ביסוס אחיזה מוחלטת בנמלים ובפתחי השיט של הים האדום ודחיקת כוחות הממשלה"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה אוויריים בעומק סעודיה והעמקת הפעילות ההתקפית לעבר מאריב ועדן"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "הגנה על מרחב הממלכה ותשתיות האנרגיה מפני תקיפות כטב\"מים וטילים",
      "המשך תקיפת יעדי החות'ים ומניעת התעצמותם הצבאית"
     ],
     "inferred": [
      "ייצוב קווי החזית המעורערים בתימן באמצעות ארגון מחדש של הפיקוד הצבאי",
      "חיזוק מערך ההגנה האווירית בעזרת מומחים וטכנולוגיות מארצות הברית כדי לבלום שחיקה במעמד הביטחוני"
     ],
     "forecast": [
      "הידוק שיתוף הפעולה הצבאי עם ארצות הברית והתמקדות במגננה לצד פשיטות אוויריות נקודתיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-appoints-gen-ruwaili-oversee-yemen-war-after-setbacks-what-know",
     "accessed_at": "2026-11-18T00:40:25+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-double-tap-strike-factory-yemens-hodeida-kills-14-houthi-health",
     "accessed_at": "2026-11-18T00:40:25+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/iran-us-tensions-climb-amid-tanker-attacks-blast-qeshm",
     "accessed_at": "2026-11-18T00:40:25+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133816",
     "accessed_at": "2026-11-18T00:40:25+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49688",
     "accessed_at": "2026-11-18T00:40:25+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T03:40:37+00:00",
  "changes": {
   "YEMEN-11180040-01": {
    "kind": "possible",
    "prev": "הדחת מפקד כוחות הקואליציה הפועלת בתימן בידי סעודיה",
    "score": 0.467
   },
   "YEMEN-11180040-02": {
    "kind": "new"
   },
   "YEMEN-11180040-03": {
    "kind": "possible",
    "prev": "דיווח צבא תימן על מאות תקיפות ואבידות לשורות החות'ים",
    "score": 0.467
   },
   "YEMEN-11180040-04": {
    "kind": "possible",
    "prev": "יירוט שני כלי טיס בלתי מאוישים מעל שטח סעודיה",
    "score": 0.633
   },
   "YEMEN-11180040-05": {
    "kind": "new"
   },
   "YEMEN-11180040-06": {
    "kind": "new"
   },
   "YEMEN-11180040-07": {
    "kind": "new"
   },
   "YEMEN-11180040-08": {
    "kind": "new"
   },
   "YEMEN-11180040-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "התקדמות החות'ים לעבר עדן ונסיגת כוחות הממשלה מאזור מצר באב אל-מנדב",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-17T1920__iran-202611171920.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-17T19:20:31+00:00",
   "window": {
    "from": "2026-11-16T19:20:31+00:00",
    "to": "2026-11-17T19:20:31+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611171920"
   },
   "summary": "העימות הצבאי הישיר והעקיף בין ארצות הברית וישראל לבין איראן ושלוחותיה ממשיך להסלים, במקביל למבוי סתום לאחר חודשי לחימה ממושכים. הזירה מתאפיינת בחילופי מהלומות ישירים של תקיפות אוויריות ושיגורי כטב\"מים באזור המפרץ, פגיעה בספנות ובצינורות נפט, לצד עיבוי כוחות ימיים אמריקאיים חסר תקדים. במקביל, המאמצים המודיעיניים והסיכוליים מתרחבים אל מחוץ למזרח התיכון תוך החלפת איומים על שימוש בנשק בלתי קונבנציונלי.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "פעילה - חילופי תקיפות בין כוחות ארה\"ב לאיראן ופגיעה בספנות מסחרית"
    },
    {
     "name": "החזית הישראלית-איראנית (סיכול בינלאומי והיערכות לתקיפה)",
     "status": "מתוחה - היערכות לפעולות עומק וסיכול מזימות טרור בחו\"ל"
    },
    {
     "name": "שלוחות איראן בעיראק ובתימן",
     "status": "פעילה - שיגורים של החות'ים לעבר יעדי תשתית סעודיים וסירוב מיליציות עיראקיות לסגת ממוקדי אחיזה"
    }
   ],
   "events": [
    {
     "id": "IRAN-11171920-01",
     "title": "פגיעה במכלית גז במצר הורמוז",
     "summary": "מכלית להובלת גז עלתה באש וצוותה נטש אותה לאחר שנפגעה מעצם ששוגר לעברה בעת ששטה במצר הורמוז.",
     "axis": "איראן - ארה\"ב / ספנות במפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T18:20:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:20:59+00:00",
     "last_update_at": "2026-11-17T18:20:59+00:00",
     "what_is_not_verified": "זהות המשגר או סוג העצם שפגע בכלי השיט לא אומתו באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/17/inferno-engulfs-gas-tanker-in-strait-of-hormuz-after-reported-strike-video",
       "published_at": "2026-11-17T18:20:59+00:00"
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
     "id": "IRAN-11171920-02",
     "title": "שיגור כטב\"מים איראניים לבסיס אמריקאי בבחריין ותקיפת תגובה באי קשם",
     "summary": "משמרות המהפכה שיגרו כלי טיס בלתי מאוישים לעבר מתקן או בסיס של צבא ארה\"ב בבחריין, ובתגובה תקפה ארה\"ב מערכות הגנה באי קשם בדרום איראן.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T15:42:47+00:00",
     "last_update_at": "2026-11-17T17:29:02+00:00",
     "what_is_not_verified": "מידת הנזק, תוצאות היירוט ודיווחים על היקף התקיפה בקשם נסמכים על מקורות המזוהים עם הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611177708",
       "published_at": "2026-11-17T17:29:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133808",
       "published_at": "2026-11-17T15:42:47+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      }
     ]
    },
    {
     "id": "IRAN-11171920-03",
     "title": "סיכול מזימה לפגיעה באיש עסקים ישראלי ביוון",
     "summary": "רשויות הביטחון ביוון ובצפון מקדוניה עצרו חוליה הקשורה לרשת פשיעה הפועלת בשירות איראן, במטרה לפגוע באיש עסקים ישראלי.",
     "axis": "ישראל - איראן (חו\"ל)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T13:32:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T13:32:43+00:00",
     "last_update_at": "2026-11-17T18:36:24+00:00",
     "what_is_not_verified": "פרטי החקירה המלאים וזהות כלל המעורבים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkghwzqagx",
       "published_at": "2026-11-17T18:36:24+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21867113",
       "published_at": "2026-11-17T13:32:43+00:00"
      }
     ],
     "places": [
      {
       "name": "אתונה, יוון",
       "lat": 37.9756,
       "lon": 23.7348
      }
     ]
    },
    {
     "id": "IRAN-11171920-04",
     "title": "שיגור כטב\"מים של החות'ים לעבר קו צינור הנפט מזרח-מערב בסעודיה",
     "summary": "תנועת החות'ים בתימן הודיעה כי שיגרה חמישה כלי טיס בלתי מאוישים לעבר שתי תחנות שאיבה של צינור הנפט באזור ריאד.",
     "axis": "החות'ים - סעודיה / איראן - המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:05:25+00:00",
     "last_update_at": "2026-11-17T18:05:25+00:00",
     "what_is_not_verified": "לא התקבל אישור רשמי מצד סעודיה על פגיעה או עצם השיגור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-launched-drones-towards-saudi-east-west-pipeline",
       "published_at": "2026-11-17T18:05:25+00:00"
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
     "id": "IRAN-11171920-05",
     "title": "הגעת נושאת מטוסים אמריקאית שלישית למזרח התיכון",
     "summary": "פיקוד המרכז של ארה\"ב פרסם על הגעת נושאת המטוסים תיאודור רוזוולט לצד ג'ורג' וושינגטון, כחלק מעיבוי הכוחות וההרתעה באזור.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T21:13:02+00:00",
     "last_update_at": "2026-11-17T17:09:12+00:00",
     "what_is_not_verified": "אין פרטים בלתי מאומתים לגבי עצם פריסת הכוחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133813",
       "published_at": "2026-11-17T17:09:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/nov/16/aircraft-middle-east-trump-military",
       "published_at": "2026-11-16T21:13:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11171920-06",
     "title": "דיווחים אמריקאיים על תוכנית איראנית לפגיעה בבכירים באמצעות פצצה מלוכלכת והכחשה איראנית",
     "summary": "בארה\"ב נבדק מידע מודיעיני שלפיו איראן בוחנת מזימה לפגוע בבכירים בוושינגטון בנשק כימי או פצצה מלוכלכת, בעוד יו\"ר הפרלמנט האיראני דחה את הטענות כתעמולה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T23:18:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T23:18:40+00:00",
     "last_update_at": "2026-11-17T17:53:45+00:00",
     "what_is_not_verified": "במערכת המודיעין האמריקאית קיימים ספקות ומחלוקות באשר לאמינות המידע וליכולת הביצוע של איראן; הבית הלבן ציין כי אין איום אמין כעת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86325040/Ghalibaf-slams-US-dirty-bomb-allegations-as-fresh-anti-Iran",
       "published_at": "2026-11-17T17:53:45+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/trump-reported-iranian-plot-dirty-bomb-washington",
       "published_at": "2026-11-17T16:03:34+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21873039",
       "published_at": "2026-11-17T14:20:12+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49651",
       "published_at": "2026-11-16T23:18:40+00:00"
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
     "id": "IRAN-11171920-07",
     "title": "סירוב גדודי חזבאללה בעיראק לסגת מג'ורף א-סח'ר",
     "summary": "המיליציה הפרו-איראנית גדודי חזבאללה דחתה את האולטימטום של ראש ממשלת עיראק להתפנות ממעוזה מדרום לבגדאד בעקבות טענות להברחת נפט.",
     "axis": "המיליציות בעיראק - ארה\"ב / ממשלת עיראק",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T18:33:36+00:00",
     "last_update_at": "2026-11-17T18:33:36+00:00",
     "what_is_not_verified": "לא אומתו טענות הממשלה בדבר הברחות הנפט מתוך האזור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-backed-iraqi-group-refuses-withdraw-stronghold-kataeb-hezbollahiran",
       "published_at": "2026-11-17T18:33:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11171920-08",
     "title": "טענה להפלת כטב\"ם אמריקאי במצר הורמוז",
     "summary": "מערכות ההגנה האווירית של איראן יירטו והפילו כלי טיס בלתי מאויש של ארה\"ב בסמוך למצר הורמוז.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T12:51:19+00:00",
     "last_update_at": "2026-11-17T12:51:19+00:00",
     "what_is_not_verified": "ההפלה נמסרה בערוץ דיווחים ואין עליה אישור אמריקאי רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95053",
       "published_at": "2026-11-17T12:51:19+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    }
   ],
   "not_verified": [
    "טענות המודיעין האמריקאי בדבר כוונת איראן להפעיל פצצה מלוכלכת או נשק כימי בשטח ארה\"ב",
    "הדיווח על הפלת כטב\"ם אמריקאי מדגם לוקאס מעל מצר הורמוז",
    "הטענה לשימוש אמריקאי בפצצות גרפיט לפגיעה בתשתיות חשמל באיראן",
    "תוצאות הפגיעה בצינור הנפט הסעודי מזרח-מערב על ידי כטב\"מים חות'יים"
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
     "value": 3.2463,
     "unit": "ILS",
     "change_pct": 0.69,
     "source_id": "src_ecb",
     "as_of": "2026-11-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "שמירה על מוכנות מלאה להגנה על המדינה והביטחון הלאומי",
      "הכחשת מעורבות בתוכניות לפיגועי פצצה מלוכלכת בארה\"ב"
     ],
     "inferred": [
      "שימור יכולת התשה ארוכת טווח נגד כוחות ארה\"ב וישראל",
      "שיבוש נתיבי השיט והאנרגיה הבינלאומיים במפרץ לגביית מחיר כלכלי מהמערב"
     ],
     "forecast": [
      "המשך שימוש מבוקר בכטב\"מים ומיליציות אזוריות לצד הימנעות מהתנגשות חזיתית כוללת"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "אזהרה מפני פגיעה ביעדים אמריקאיים ואיום בהשמדה בתגובה לתקיפה ישירה",
      "בדיקת איומים מודיעיניים על כוונות פיגוע בוושינגטון"
     ],
     "inferred": [
      "הפגנת עוצמה והרתעה באמצעות פריסת נושאות מטוסים נוספות ללא היגררות למלחמה ממושכת",
      "בלימת הפעילות הצבאית וההברחות של שלוחות איראן בעיראק ובאזור"
     ],
     "forecast": [
      "שמירה על נוכחות צבאית מוגברת ותקיפות נקודתיות של מתקני שיגור והגנה איראניים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "אזהרה מפני מוטיבציה איראנית גבוהה לפגוע ביעדים ישראליים בחו\"ל"
     ],
     "inferred": [
      "שאיפה לתיאום מבצעי מלא וגיבוי אמריקאי לקראת מהלומה צבאית משמעותית באיראן",
      "סיכול מתמשך של רשתות טרור וחיסול איראניות בזירה הבינלאומית"
     ],
     "forecast": [
      "דחיית פעולה צבאית גלויה עצמאית עד להשגת תיאום מרבי עם כוחות ארה\"ב באזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/17/trump-reported-iranian-plot-dirty-bomb-washington",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611177708",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86325040/Ghalibaf-slams-US-dirty-bomb-allegations-as-fresh-anti-Iran",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21873039",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-backed-iraqi-group-refuses-withdraw-stronghold-kataeb-hezbollahiran",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133813",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49651",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95053",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkghwzqagx",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T00:40:39+00:00",
  "changes": {
   "IRAN-11171920-01": {
    "kind": "new"
   },
   "IRAN-11171920-02": {
    "kind": "new"
   },
   "IRAN-11171920-03": {
    "kind": "new"
   },
   "IRAN-11171920-04": {
    "kind": "new"
   },
   "IRAN-11171920-05": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "כניסת נושאת מטוסים שלישית לאזור",
    "score": 1.0
   },
   "IRAN-11171920-06": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "איומי תוכנית פגיעה בבכירי ממשל אמריקניים",
    "score": 1.0
   },
   "IRAN-11171920-07": {
    "kind": "new"
   },
   "IRAN-11171920-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת מכליות נפט במצר הורמוז",
    "score": 0.817
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-17T1930__ukraine-202611171930.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-17T19:30:52+00:00",
   "window": {
    "from": "2026-11-16T19:30:52+00:00",
    "to": "2026-11-17T19:30:52+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611171930"
   },
   "summary": "העימות בין רוסיה לאוקראינה הסלים עם מתקפה אוקראינית מוצלחת שגרמה להרס מקטע מגשר קרים, לצד מתקפות טילים בליסטיים וכטב\"מים רוסיות מסיביות שפגעו בגשרים בקייב ובאתרים אזרחיים, וחלקן אף גלשו למרחב האווירי של מולדובה. במקביל לתקיפות ההדדיות בעומק השטח, מדינות אירופה מגבירות את הסיוע הצבאי והתעשייתי לאוקראינה חרף ביקורת אמריקאית על תקיפות בעומק רוסיה, ורוסיה מקדמת צעדי חקיקה להרחבת גיוס נשים בשל מצוקת כוח אדם בחזית.",
   "fronts": [
    {
     "name": "חצי האי קרים ומצר קרץ'",
     "status": "הסלמה עקב תקיפה קשה על גשר קרים, קריסת מקטעים וחסימת שיט"
    },
    {
     "name": "מרחב קייב",
     "status": "ספיגת תקיפות טילים בליסטיים מסיביות נגד תשתיות תחבורה וגשרים"
    },
    {
     "name": "גבול אוקראינה-מולדובה",
     "status": "דריכות ביטחונית וסגירת מעברים בעקבות חדירת כטב\"מים רוסיים והתרסקותם"
    },
    {
     "name": "ויניצה",
     "status": "תקיפות אוויריות רוסיות חוזרות שפוגעות במרכז העיר"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11171930-01",
     "title": "תקיפה אוקראינית משמעותית על גשר קרים והקרסת מקטע ממנו",
     "summary": "כוחות אוקראינה ביצעו מתקפה רב-שלבית באמצעות טילים וכטב\"מים שהביאה לפגיעה קשה ולהתמוטטות מקטע מקשת גשר הכביש של גשר קרים, וכן לפגיעה במקטע הרכבת וחסימת נתיב השיט במצר קרץ'.",
     "axis": "חצי האי קרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T08:59:47+00:00",
     "last_update_at": "2026-11-17T19:20:42+00:00",
     "what_is_not_verified": "סוגי החימוש המדויקים (האם טילי פלמינגו, כטב\"מים או שילוב), היקף ההרס המדויק בגשר הרכבת, וטענות על אישור אמריקאי מוקדם לתקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-entire-section-of-crimean-bridge-collapses-after-seven-phase-operation-zelensky-reveals/",
       "published_at": "2026-11-17T19:20:42+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49681",
       "published_at": "2026-11-17T19:14:12+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4185747-strike-on-kerch-bridge-marks-another-impressive-success-for-ukraine-austrian-colonel.html",
       "published_at": "2026-11-17T18:05:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/17/ukraine-releases-footage-of-strike-on-crimean-bridge-video",
       "published_at": "2026-11-17T17:48:38+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/how-ukraine-struck-kerch-bridge-symbol-vladimir-putin-rule",
       "published_at": "2026-11-17T17:30:40+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T17:19:57+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw772jk4rvmxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T16:56:38+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/ukraine-kerch-bridge-attack-russia-crimea-analysis",
       "published_at": "2026-11-17T16:40:26+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49672",
       "published_at": "2026-11-17T16:18:42+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/crz9dgz28zwdo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T15:38:10+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133773",
       "published_at": "2026-11-17T08:59:47+00:00"
      }
     ],
     "places": [
      {
       "name": "גשר קרים, חצי האי קרים",
       "lat": 45.2786,
       "lon": 36.5393
      },
      {
       "name": "מצר קרץ', חצי האי קרים",
       "lat": 45.281,
       "lon": 36.5492
      }
     ]
    },
    {
     "id": "UKRAINE-11171930-02",
     "title": "מתקפת טילים בליסטיים רוסית על גשרים בקייב",
     "summary": "רוסיה שיגרה מתקפת טילים בליסטיים רחבת היקף על אוקראינה, במסגרתה נפגעו שני גשרים מרכזיים בקייב, כולל גשר סברני שהתנועה עליו הוגבלה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T17:19:57+00:00",
     "last_update_at": "2026-11-17T19:20:42+00:00",
     "what_is_not_verified": "מידת הנזק המבני המלא לשני הגשרים ומספר הנפגעים במתקפה בקייב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-entire-section-of-crimean-bridge-collapses-after-seven-phase-operation-zelensky-reveals/",
       "published_at": "2026-11-17T19:20:42+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2219917",
       "published_at": "2026-11-17T19:01:04+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T17:19:57+00:00"
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
     "id": "UKRAINE-11171930-03",
     "title": "חדירת כטב\"מים רוסיים למרחב האווירי של מולדובה וסגירת מעברי גבול",
     "summary": "שבעה כלי טיס בלתי מאוישים רוסיים חדרו למרחב האווירי של מולדובה במהלך תקיפה על אוקראינה; חלקם התרסקו בשטחה ואחד נצפה מעל עיר הבירה קישינב, מה שהוביל לסגירה זמנית של המרחב האווירי ושישה מעברי גבול.",
     "axis": "מולדובה - גבול אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:00:00+00:00",
     "last_update_at": "2026-11-17T18:37:20+00:00",
     "what_is_not_verified": "מיקום ההתרסקות של כלי הטיס השישי והשביעי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/7-drones-cross-into-moldovan-airspace-during-latest-russian-attack-against-ukraine-1-spotted-over-chisinau/",
       "published_at": "2026-11-17T18:37:20+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063339/",
       "published_at": "2026-11-17T18:36:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063332/",
       "published_at": "2026-11-17T18:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קישינב, מולדובה",
       "lat": 47.0245,
       "lon": 28.8323
      },
      {
       "name": "קלטיטורי, מולדובה",
       "lat": 47.0658,
       "lon": 28.9271
      }
     ]
    },
    {
     "id": "UKRAINE-11171930-04",
     "title": "תקיפה רוסית שנייה באותו יום על ויניצה",
     "summary": "רוסיה תקפה את מרכז העיר ויניצה בפעם השנייה בתוך יממה, גרמה לשריפה במבנה ולפציעת ארבעה בני אדם מטראומה אקוסטית והלם.",
     "axis": "ויניצה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:01:00+00:00",
     "last_update_at": "2026-11-17T18:01:00+00:00",
     "what_is_not_verified": "סוג החימוש שפגע במבנה בויניצה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063333/",
       "published_at": "2026-11-17T18:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ויניצה, אוקראינה",
       "lat": 49.232,
       "lon": 28.468
      }
     ]
    },
    {
     "id": "UKRAINE-11171930-05",
     "title": "אישור נוכחות חיילים צרפתים באוקראינה ותגובת רוסיה",
     "summary": "דוברת צבא צרפת אישרה כי כוחות צרפתיים שוהים באוקראינה לצורכי אימון ותיקון ציוד הרחק מקו החזית, בעוד שרוסיה הכריזה כי מדובר במעורבות ישירה במלחמה וכי הם מהווים מטרות לגיטימיות.",
     "axis": "הזירה הבינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T18:56:30+00:00",
     "last_update_at": "2026-11-17T18:56:30+00:00",
     "what_is_not_verified": "מספר החיילים הצרפתים המדויק ומיקומם הספציפי בתוך אוקראינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/17/france-confirms-its-troops-are-in-ukraine-russia-says-they-are-legitimate-targets",
       "published_at": "2026-11-17T18:56:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-06",
     "title": "מימון גרמני ונורווגי לרכש נשק אמריקאי עבור אוקראינה",
     "summary": "גרמניה ונורווגיה ישקיעו 300 מיליון דולר כל אחת במימון חבילת נשק אמריקאי חדשה לאוקראינה במסגרת יוזמת PURL.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T19:05:00+00:00",
     "last_update_at": "2026-11-17T19:05:00+00:00",
     "what_is_not_verified": "פירוט מערכות הנשק המדויקות בחבילת הרכש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4185771-germany-norway-to-contribute-300m-each-toward-us-arms-purchases-for-ukraine-pistorius.html",
       "published_at": "2026-11-17T19:05:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-07",
     "title": "אספקת מכ\"מים גרמניים עבור מערכת ההגנה האווירית פרייה",
     "summary": "גרמניה הודיעה כי תספק לאוקראינה מכ\"מים בעלי ביצועים גבוהים שישמשו רכיב מפתח במערכת ההגנה העתידית נגד טילים בליסטיים מדגם פרייה.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:34:00+00:00",
     "last_update_at": "2026-11-17T18:34:00+00:00",
     "what_is_not_verified": "לוח הזמנים לאספקת המכ\"מים ומועד פריסת המערכת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4185759-germany-to-supply-ukraine-with-new-radars-for-future-freyja-air-defense-system-pistorius.html",
       "published_at": "2026-11-17T18:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-08",
     "title": "הסכם לייצור נשק משותף בין פינלנד לאוקראינה",
     "summary": "… ומערכות נשק בשטח פינלנד, המשלב ניסיון מבצעי אוקראיני ויכולות תעשייתיות פיניות.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T16:27:43+00:00",
     "last_update_at": "2026-11-17T16:27:43+00:00",
     "what_is_not_verified": "אילו מערכות נשק ספציפיות ייוצרו במסגרת שיתוף הפעולה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49673",
       "published_at": "2026-11-17T16:27:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-09",
     "title": "העלאת גיל השירות הצבאי לנשים ברוסיה",
     "summary": "הדומה הרוסית אישרה בקריאה ראשונה הצעת חוק להעלאת גיל הפטור משירות לנשים מ-45 ל-50, וגיל המילואים עד 55 לקצינות, על רקע מחסור בכוח אדם ביחידות הלוחמות והרפואיות.",
     "axis": "מדיניות פנים ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T16:15:22+00:00",
     "last_update_at": "2026-11-17T16:15:22+00:00",
     "what_is_not_verified": "המועד הסופי לאישור החוק והשפעתו המספרית על שורות הצבא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/17/russia-moves-to-raise-military-service-age-limit-for-women-amid-troop-shortages",
       "published_at": "2026-11-17T16:15:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-10",
     "title": "נחיתת פוטין בסין לקראת פסגה משולשת",
     "summary": "נשיא רוסיה פוטין נחת בסין לקראת השתתפות בפסגה משולשת מתוכננת עם נשיא סין ונשיא ארה\"ב טראמפ בשנג'ן.",
     "axis": "משא ומתן ומגעים דיפלומטיים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T16:40:26+00:00",
     "last_update_at": "2026-11-17T19:16:36+00:00",
     "what_is_not_verified": "סדר היום המדויק של הפסגה והאם המלחמה באוקראינה תעמוד במוקד הדיונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133819",
       "published_at": "2026-11-17T19:16:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/ukraine-kerch-bridge-attack-russia-crimea-analysis",
       "published_at": "2026-11-17T16:40:26+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    }
   ],
   "not_verified": [
    "טענת מקור רוסי על אישור אמריקאי מוקדם לתקיפת גשר קרים בתגובה למתקפות סייבר",
    "מספר האבדות המדויק של כוחות רוסיה ואוקראינה במהלך חודש אוקטובר",
    "היקף הנזק המלא והשבתת תנועת הרכבות בגשר קרים",
    "דיווח על שריפה במתחם פטרוכימי בבשקורטוסטאן"
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
     "value": 1.0989,
     "unit": "USD",
     "change_pct": -0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "פגיעה במשגרי טילים בליסטיים רוסיים וצפון קוריאניים",
      "הסרת מגבלות תקשורת הלוויינים סטרשילד בשטחים הכבושים",
      "השגת 40 מטוסי F-16 נוספים ותקציב סיוע מאירופה"
     ],
     "inferred": [
      "ניתוק נתיבי האספקה הלוגיסטיים של צבא רוסיה לחצי האי קרים",
      "יצירת מנוף לחץ ומבוכה פוליטית לרוסיה לקראת פסגות בינלאומיות"
     ],
     "forecast": [
      "המשך ניסיונות לפגוע במסדרון היבשתי בדרום אוקראינה ובצירי אספקה לקרים",
      "הגברת הלחץ הדיפלומטי על מדינות המערב לאספקת מערכות הגנה אווירית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בכוחות צרפתיים באוקראינה כיעדים לגיטימיים",
      "טענה כי חימוש אוקראינה רק מאריך את משך העימות"
     ],
     "inferred": [
      "פגיעה שיטתית בתשתיות הגשרים והתחבורה של אוקראינה בקייב ובערים מרכזיות",
      "השלמת פערי כוח אדם בחזית באמצעות הרחבת חובת הגיוס והמילואים לנשים"
     ],
     "forecast": [
      "תקיפות תגובה נרחבות נגד תשתיות אסטרטגיות באוקראינה בעקבות הפגיעה בגשר קרים",
      "המשך שימוש בנתיבי טיסה סמוכים למולדובה לשיבוש מערכי ההגנה של אוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/17/ukraine-kerch-bridge-attack-russia-crimea-analysis",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/7-drones-cross-into-moldovan-airspace-during-latest-russian-attack-against-ukraine-1-spotted-over-chisinau/",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/17/russia-moves-to-raise-military-service-age-limit-for-women-amid-troop-shortages",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063333/",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2219917",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133819",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49673",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4185759-germany-to-supply-ukraine-with-new-radars-for-future-freyja-air-defense-system-pistorius.html",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T20:58:25+00:00",
  "changes": {
   "UKRAINE-11171930-01": {
    "kind": "possible",
    "prev": "חידוש תנועת כלי רכב בגשר קרים",
    "score": 0.467
   },
   "UKRAINE-11171930-02": {
    "kind": "possible",
    "prev": "נפילת שברי כטב\"ם בקייב",
    "score": 0.633
   },
   "UKRAINE-11171930-03": {
    "kind": "new"
   },
   "UKRAINE-11171930-04": {
    "kind": "new"
   },
   "UKRAINE-11171930-05": {
    "kind": "new"
   },
   "UKRAINE-11171930-06": {
    "kind": "new"
   },
   "UKRAINE-11171930-07": {
    "kind": "new"
   },
   "UKRAINE-11171930-08": {
    "kind": "new"
   },
   "UKRAINE-11171930-09": {
    "kind": "new"
   },
   "UKRAINE-11171930-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-18T0042__north-202611180042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-18T00:42:08+00:00",
   "window": {
    "from": "2026-11-17T00:42:08+00:00",
    "to": "2026-11-18T00:42:08+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611180042"
   },
   "summary": "הלחימה והמתיחות בדרום לבנון ובדרום סוריה נמשכות בעצימות ממוקדת באמצעות פשיטות קרקעיות של צה\"ל, תקיפות אוויריות וסיכול נתיבי הברחה מסוריה. במקביל, מתנהל מאבק מדיני בין ארצות הברית, צרפת וישראל בנוגע לעתיד הנוכחות הבינלאומית בדרום לבנון עם סיום מנדט יוניפי\"ל. בציר הדיפלומטי המקביל, טורקיה וסוריה מציגות עמדה מתואמת בדרישה מישראל לכבד את הסכם הפרדת הכוחות ברמת הגולן.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות מבצעית ישראלית הכוללת תקיפות מן האוויר, מעצרים ממוקדים ומחלוקת דיפלומטית על החלפת יוניפי\"ל"
    },
    {
     "name": "גבול סוריה-לבנון",
     "status": "ניסיונות הברחת אמל\"ח וכטב\"מים מאיראן דרך סוריה לחזבאללה לצד תקיפות סיכול ישראליות"
    },
    {
     "name": "דרום סוריה",
     "status": "חיכוך קרקעי מול כוחות צה\"ל באזור דרעא ומתיחות ביטחונית נמשכת במחוז א-סווידא"
    },
    {
     "name": "ציר טורקיה-סוריה",
     "status": "הידוק מגעים דיפלומטיים ותיאום עמדות מדיניות הדורשות מישראל נסיגה להסכמי 1974"
    }
   ],
   "events": [
    {
     "id": "NORTH-11180042-01",
     "title": "תקיפה ישראלית בדרום לבנון",
     "summary": "בוצעה תקיפה אווירית באל-מנצורי והפצצה בפאתי אל-הבאריה בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T20:29:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T20:29:58+00:00",
     "last_update_at": "2026-11-17T20:29:58+00:00",
     "what_is_not_verified": "היקף הנזק או הנפגעים בתקיפות לא צוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f58f2c142fedd9eb",
       "url": "https://english.almanar.com.lb/article/152092/",
       "published_at": "2026-11-17T20:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-11180042-02",
     "title": "מעצר שני אחים בעיירה שבעא על ידי כוחות צה\"ל",
     "summary": "כוח צבאי ישראלי פשט על בית בפאתי העיירה שבעא ועצר שני אחים, שלפי מחקר ישראלי משתייכים למיליציית פלוגות ההתנגדות הלבנונית הפועלת בחסות חזבאללה.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T03:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T12:58:15+00:00",
     "last_update_at": "2026-11-17T15:00:00+00:00",
     "what_is_not_verified": "קיימת מחלוקת לגבי שיוכם הארגוני של העצורים, אם מדובר באזרחים או בפעילי מיליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968441/a-family-torn-apart-israel-abducts-two-brothers-in-chebaa-17-months-af/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968441",
       "published_at": "2026-11-17T15:00:00+00:00"
      },
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/hezbollahs-lebanese-resistance-brigades-the-threat-from-within-the-civilian-environment-in-shebaa/",
       "published_at": "2026-11-17T12:58:15+00:00"
      }
     ],
     "places": [
      {
       "name": "שבעא, לבנון",
       "lat": 33.3445,
       "lon": 35.7494
      }
     ]
    },
    {
     "id": "NORTH-11180042-03",
     "title": "פעילות צה\"ל בכפר כויא בדרום סוריה ומנוסת תושבים",
     "summary": "תושבים מקומיים התפנו מהכפר כויא במחוז דרעא בעקבות פעילות כוחות צה\"ל וירי בשטח הכפר, וחסמו צירי גישה באבנים כדי למנוע כניסת כוחות נוספים.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T09:03:24+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T09:03:24+00:00",
     "last_update_at": "2026-11-17T09:03:24+00:00",
     "what_is_not_verified": "אין אימות רשמי של צה\"ל לפעילות זו או לתוצאותיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133776",
       "published_at": "2026-11-17T09:03:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11180042-04",
     "title": "תקיפת חמושים נגד סיור ביטחון פנים באזור טרטוס",
     "summary": "חמושים בלתי מזוהים תקפו סיור של משרד הפנים הסורי באזור הכפרי של טרטוס, הרגו איש ביטחון ופצעו ארבעה נוספים.",
     "axis": "מערב סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T23:34:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T23:34:57+00:00",
     "last_update_at": "2026-11-17T23:34:57+00:00",
     "what_is_not_verified": "זהות החמושים והמניע לתקיפה אינם ידועים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/attack-on-patrol-in-western-syria-kills-security-officer-wounds-4-others/4128476",
       "published_at": "2026-11-17T23:34:57+00:00"
      }
     ],
     "places": [
      {
       "name": "טרטוס, סוריה",
       "lat": 34.8936,
       "lon": 35.8852
      }
     ]
    },
    {
     "id": "NORTH-11180042-05",
     "title": "קריאת שר החוץ הטורקי לישראל לכבד את הסכם הפרדת הכוחות מול סוריה",
     "summary": "במסיבת עיתונאים משותפת באנקרה עם מקבילו הסורי, הצהיר שר החוץ של טורקיה כי על ישראל לדבוק בהסכם הפרדת הכוחות משנת 1974.",
     "axis": "טורקיה-סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T16:54:09+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T16:54:09+00:00",
     "last_update_at": "2026-11-17T16:54:09+00:00",
     "what_is_not_verified": "תגובת ישראל להצהרה זו לא צוינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/152017/",
       "published_at": "2026-11-17T16:54:09+00:00"
      }
     ],
     "places": [
      {
       "name": "אנקרה, טורקיה",
       "lat": 39.9208,
       "lon": 32.854
      }
     ]
    },
    {
     "id": "NORTH-11180042-06",
     "title": "מגעים בינלאומיים לגיבוש כוח חלופי ליוניפי\"ל בדרום לבנון",
     "summary": "ארצות הברית וצרפת מקיימות דיונים על החלפת כוח יוניפי\"ל שמנדטו יפוג בסוף השנה בכוח ממוקד יותר, כאשר ישראל מתנגדת להצעה הצרפתית לשיגור כוח אירופי-אמריקאי נרחב.",
     "axis": "דרום לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T14:51:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T14:51:00+00:00",
     "last_update_at": "2026-11-17T15:26:06+00:00",
     "what_is_not_verified": "המבנה הסופי של הכוח הבינלאומי החדש טרם סוכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sy1xr1qrzx",
       "published_at": "2026-11-17T15:26:06+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968434/us-france-discuss-alternative-to-unifil-as-washington-pushes-for-small/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968434",
       "published_at": "2026-11-17T14:51:00+00:00"
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
     "id": "NORTH-11180042-07",
     "title": "חקירת פעילי חזבאללה שנעצרו בצפון לבנון נפגעה עקב הדלפה",
     "summary": "חקירת חמישה פעילי חזבאללה שנעצרו בין בשרי לכורה נמשכת, אך דליפת המידע אפשרה לחזבאללה לקחת מכשיר טלפון מדירת מסתור בנהראן.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T07:20:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T07:20:04+00:00",
     "last_update_at": "2026-11-17T07:20:04+00:00",
     "what_is_not_verified": "מהות המשימה שאותה ניסו הפעילים להוציא לפועל אינה ידועה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968387/investigation-into-five-hezbollah-detainees-ongoing-as-leaked-news-rep/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968387",
       "published_at": "2026-11-17T07:20:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11180042-08",
     "title": "תקיפת משלוח אמצעי לחימה שהוברח מסוריה ללבנון",
     "summary": "צה\"ל תקף משלוח אמצעי לחימה, שעל פי דיווחים כלל כטב\"מים, בעת כניסתו מסוריה לאזור ג'נתא שבבקעת הלבנון.",
     "axis": "גבול לבנון-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T11:40:16+00:00",
     "last_update_at": "2026-11-17T11:40:16+00:00",
     "what_is_not_verified": "סוג אמצעי הלחימה במשלוח והאם כלל כטב\"מים אינם מאומתים סופית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/how-is-hezbollah-rebuilding-its-drone-capabilities-evidence-of-smuggling-from-iran-international-procurement-and-suspected-theft-of-fiber-optic-cables-in-lebanon/",
       "published_at": "2026-11-17T11:40:16+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      }
     ]
    }
   ],
   "not_verified": [
    "טענת ערוץ 12 על נסיגת צה\"ל מהכפר רשף בגלל מחסור בכוחות והמעבר לשליטה מרחוק",
    "הדיווחים שלפיהם משלוח הנשק שהותקף בג'נתא ב-16 בנובמבר הכיל כטב\"מים",
    "טענות האקרים בדבר השגת פרטי מחבלי חזבאללה והצעתם למכירה ברשת",
    "היקף הנפגעים והנזק בעקבות פעילות צה\"ל בכפר כויא בדרום סוריה",
    "זהות היורים בתקרית הפגיעה בסיור משרד הפנים בטרטוס"
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
     "value": 3.2463,
     "unit": "ILS",
     "change_pct": 0.69,
     "source_id": "src_ecb",
     "as_of": "2026-11-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הבטחת ביטחון תושבי הצפון באמצעות מניעת התעצמות חזבאללה"
     ],
     "inferred": [
      "התנגדות לכוח רב-לאומי רחב שאינו אפקטיבי בדרום לבנון ודרישה לחופש פעולה מבצעי",
      "סיכול מתמשך של נתיבי ההברחה וההתבססות של חזבאללה ומיליציות בגבול סוריה-לבנון"
     ],
     "forecast": [
      "המשך סיכולים ותקיפות אוויריות ממוקדות בבקעת הלבנון ובדרום לבנון במקביל להחרפת הלחץ הדיפלומטי בנושא יוניפי\"ל"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [],
     "inferred": [
      "שיקום מערכי הכטב\"מים והחימוש דרך הברחות יבשתיות מסוריה",
      "שימור רשתות גיוס של מיליציות מקומיות באזורים לא-שיעיים כגון פלוגות ההתנגדות בשבעא"
     ],
     "forecast": [
      "המשך ניסיונות רכש והברחה מסוריה במקביל לפעילות חשאית לאיסוף מידע ומאמצי מידור בתוך לבנון"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "דרישה מישראל לדבוק בהסכם הפרדת הכוחות מול סוריה משנת 1974"
     ],
     "inferred": [
      "חיזוק הקשר וההשפעה מול הממשל הסורי ויצירת חזית דיפלומטית משותפת מול ישראל",
      "קידום אינטרסים כלכליים ומסדרונות מעבר אזוריים"
     ],
     "forecast": [
      "המשך הצהרות מדיניות תקיפות נגד פעולות ישראל בגבול סוריה ותיאום נוסף מול דמשק"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/how-is-hezbollah-rebuilding-its-drone-capabilities-evidence-of-smuggling-from-iran-international-procurement-and-suspected-theft-of-fiber-optic-cables-in-lebanon/",
     "accessed_at": "2026-11-18T00:42:08+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/152017/",
     "accessed_at": "2026-11-18T00:42:08+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/attack-on-patrol-in-western-syria-kills-security-officer-wounds-4-others/4128476",
     "accessed_at": "2026-11-18T00:42:08+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968387/investigation-into-five-hezbollah-detainees-ongoing-as-leaked-news-rep/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968387",
     "accessed_at": "2026-11-18T00:42:08+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133776",
     "accessed_at": "2026-11-18T00:42:08+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sy1xr1qrzx",
     "accessed_at": "2026-11-18T00:42:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T11:22:23+00:00",
  "changes": {
   "NORTH-11180042-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפה ארטילרית ישראלית בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11180042-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מעצר שני אחים מהכפר שבעא על ידי צה\"ל",
    "score": 1.0
   },
   "NORTH-11180042-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התפנות תושבים בכפר כויא בדרום סוריה",
    "score": 1.0
   },
   "NORTH-11180042-04": {
    "kind": "new"
   },
   "NORTH-11180042-05": {
    "kind": "new"
   },
   "NORTH-11180042-06": {
    "kind": "new"
   },
   "NORTH-11180042-07": {
    "kind": "new"
   },
   "NORTH-11180042-08": {
    "kind": "possible",
    "prev": "תקיפה אווירית ישראלית באזור בקעת הלבנון המזרחית",
    "score": 0.633
   }
  }
 }
};
