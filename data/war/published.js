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
  "draft": "drafts/iran/2026-11-18T0753__iran-202611180753.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-18T07:53:48+00:00",
   "window": {
    "from": "2026-11-17T07:53:48+00:00",
    "to": "2026-11-18T07:53:48+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611180753"
   },
   "summary": "העימות בין איראן לארצות הברית וישראל מחריף תוך גלישה לפגיעה ישירה בנתיבי השיט במצר הורמוז ובבסיסים במדינות המפרץ. טהרן תוקפת תשתיות וספינות ומקשיחה את עמדותיה המדיניות בעקבות השינויים הפוליטיים בוושינגטון, בעוד ארצות הברית וישראל מקדמות היערכות צבאית ומרחיבות את התקיפות נגד מטרות צבאיות איראניות. לצד העימות הצבאי הישיר נמשכים מאמצי סיכול של יוזמות תקיפה והתנקשות איראניות ברחבי העולם.",
   "fronts": [
    {
     "name": "מצר הורמוז ונתיבי השיט במפרץ",
     "status": "הסלמה הכוללת פגיעה בכלי שיט מסחריים והפלת כלי טיס"
    },
    {
     "name": "בסיסים ומטרות במדינות המפרץ (כווית ובחריין)",
     "status": "שיגורי כטב\"מים וטילים איראניים אל עבר מתקנים ובסיסים אמריקניים"
    },
    {
     "name": "תשתיות ובסיסים בשטח איראן",
     "status": "תקיפות אמריקניות ממוקדות נגד מערכי שיגור וטענות לפגיעה במתקנים חיוניים"
    },
    {
     "name": "זירה בינלאומית וסיכול פיגועים",
     "status": "סיכול רשתות התנקשות ופגיעה ביעדים ישראליים ואמריקניים בחו\"ל"
    }
   ],
   "events": [
    {
     "id": "IRAN-11180753-01",
     "title": "תקיפת כלי שיט במצר הורמוז",
     "summary": "כלי שיט של חברת הנפט הלאומית של אבו דאבי הותקף במצר הורמוז. כתוצאה מכך נפצעו 11 אנשי צוות ואדם נוסף מוגדר נעדר. במקביל דווח על פגיעה במכלית גז באזור.",
     "axis": "איראן - המפרץ / נתיבי שיט",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T18:20:59+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T18:20:59+00:00",
     "last_update_at": "2026-11-18T07:27:54+00:00",
     "what_is_not_verified": "זהות הגורם המבצע המדויק של הירי לעבר כלי השיט לא צוינה בהודעה הרשמית של החברה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_adnoc",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uae-company-says-11-wounded-one-missing-after-vessel-attacked-hormuz",
       "published_at": "2026-11-18T07:27:54+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_adnoc",
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
     "id": "IRAN-11180753-02",
     "title": "תקיפות כטב\"מים וטילים לעבר כווית ובחריין",
     "summary": "הופעלו התרעות ובוצעו יירוטים בעקבות מתקפות כטב\"מים וטילים לעבר כווית ובחריין. צבא איראן קיבל אחריות על תקיפת מערכות פטריוט ומשגרי כטב\"מים בבסיס עלי א-סאלם בכווית.",
     "axis": "איראן - מדינות המפרץ / ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T22:44:51+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T22:44:51+00:00",
     "last_update_at": "2026-11-18T06:59:03+00:00",
     "what_is_not_verified": "תוצאות התקיפה ונזקיה בבסיס עלי א-סאלם טרם אומתו או אושרו על ידי פיקוד המרכז האמריקני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/kuwait-slams-iranian-attacks-its-territory",
       "published_at": "2026-11-18T06:59:03+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133826",
       "published_at": "2026-11-18T06:25:17+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86325322/Iranian-Army-targets-US-Patriot-systems-at-Kuwait-s-Ali-Al-Salem",
       "published_at": "2026-11-18T06:10:45+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261118-middle-east-live-kuwait-bahrain-report-drone-and-missile-attacks",
       "published_at": "2026-11-18T02:06:39+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49690",
       "published_at": "2026-11-17T23:26:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49689",
       "published_at": "2026-11-17T22:44:51+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס עלי א-סאלם, כווית",
       "lat": 29.3498,
       "lon": 47.5202
      }
     ]
    },
    {
     "id": "IRAN-11180753-03",
     "title": "הפלת כטב\"ם אמריקאי סמוך למצר הורמוז",
     "summary": "מערכות ההגנה האווירית של איראן הפילו כלי טיס בלתי מאויש אמריקאי מדגם לוקאס בסמוך למצר הורמוז.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T12:51:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T12:51:19+00:00",
     "last_update_at": "2026-11-17T12:51:19+00:00",
     "what_is_not_verified": "אין אישור רשמי מגורמי ביטחון אמריקניים על אובדן כלי הטיס.",
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
    },
    {
     "id": "IRAN-11180753-04",
     "title": "תקיפה אמריקנית באתר שיגור באי קשם ותקיפות תשתית באיראן",
     "summary": "ארצות הברית תקפה אתר שיגור טילים של משמרות המהפכה באי קשם. דובר משרד החוץ האיראני טען כי הותקפו מאגרי מים ומתקני התפלה במספר מחוזות.",
     "axis": "איראן - ארה\"ב / ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T14:39:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T14:39:16+00:00",
     "last_update_at": "2026-11-18T07:22:25+00:00",
     "what_is_not_verified": "היקף הפגיעה במתקנים אזרחיים ושימוש אמריקני אפשרי בפצצות גרפיט אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-foreign-minister-vows-unforgettable-response-if-us-israeli-attacks",
       "published_at": "2026-11-18T07:22:25+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261118-middle-east-live-kuwait-bahrain-report-drone-and-missile-attacks",
       "published_at": "2026-11-18T02:06:39+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rk11unk50zl",
       "published_at": "2026-11-17T17:24:50+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261117-iran-us-graphite-blackout-bombs-infrastructure",
       "published_at": "2026-11-17T14:39:16+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      },
      {
       "name": "ח'ומיין, איראן",
       "lat": 33.4203,
       "lon": 49.6868
      },
      {
       "name": "הפתכל, איראן",
       "lat": 31.4463,
       "lon": 49.5289
      }
     ]
    },
    {
     "id": "IRAN-11180753-05",
     "title": "חשיפת תוכניות לפגיעה בנציגויות ישראליות ובכירים אמריקנים",
     "summary": "בארצות הברית נגזר מאסר ממושך על אזרח פקיסטני בגין קשירת קשר להתנקש בדונלד טראמפ בשליחות משמרות המהפכה. במקביל סוכלו כוונות פיגוע ביוון ובשגרירות ישראל בבנגקוק.",
     "axis": "פעילות איראן בחו\"ל - ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T18:36:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:36:24+00:00",
     "last_update_at": "2026-11-18T00:28:32+00:00",
     "what_is_not_verified": "הפרטים המודיעיניים לגבי גיוס אנשי הדת בבנגקוק נשענים על הדלפות ממקורות ביטחון ולא על הודעה משפטית רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611184127",
       "published_at": "2026-11-18T00:28:32+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/nov/17/pakistani-man-jailed-trump-murder-plot",
       "published_at": "2026-11-18T00:21:33+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611173617",
       "published_at": "2026-11-17T22:13:09+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkghwzqagx",
       "published_at": "2026-11-17T18:36:24+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      },
      {
       "name": "בנגקוק, תאילנד",
       "lat": 13.7525,
       "lon": 100.4935
      },
      {
       "name": "אתונה, יוון",
       "lat": 37.9756,
       "lon": 23.7348
      }
     ]
    },
    {
     "id": "IRAN-11180753-06",
     "title": "הקשחת עמדות איראן במשא ומתן בעקבות תוצאות הבחירות בארה\"ב",
     "summary": "הנהגת איראן הקשיחה את דרישותיה בשיחות מול ארצות הברית לאחר שראתה בבחירות האמצע תבוסה למדיניות המלחמה של טראמפ ואישור ליעילות הלחץ הכלכלי במצר הורמוז.",
     "axis": "משא ומתן מדיני איראן - ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T06:15:18+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T06:15:18+00:00",
     "last_update_at": "2026-11-18T07:30:37+00:00",
     "what_is_not_verified": "הערכות מודיעין נותרו חלוקות לגבי כוונותיה האמיתיות של טהרן בשיחות והאם פניה להסלמה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/ry6bstcazg",
       "published_at": "2026-11-18T07:30:37+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21878106",
       "published_at": "2026-11-18T07:03:35+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133825",
       "published_at": "2026-11-18T06:15:18+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות איראן בדבר פגיעה ישירה של ארצות הברית במאגרי מים ומתקני התפלה אזרחיים",
    "דיווחים על שימוש צבא ארה\"ב בפצצות גרפיט לשיבוש רשת החשמל באיראן",
    "מידע מודיעיני אודות תוכנית איראנית לשימוש בנשק כימי או בפצצה מלוכלכת בוושינגטון",
    "היקף הנזק הממשי במערכות פטריוט בבסיס עלי א-סאלם בכווית",
    "מידת הרצינות של איראן בהגעה להסכם מדיני לעומת היערכות לתוכנית הסלמה"
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
      "תגובה חריפה לכל תוקפנות נגד מתקנים ותשתיות במדינה",
      "הגנה על הריבונות ותקיפת יעדים צבאיים אמריקניים באזור בתגובה לפעולותיהם"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי דרך שיבוש הסחר הימי במצר הורמוז לשם השפעה על הפוליטיקה הפנימית בארה\"ב",
      "שיפור עמדות המיקוח במשא ומתן המדיני באמצעות מנופי לחץ צבאיים ואזוריים"
     ],
     "forecast": [
      "המשך מתקפות ממוקדות באמצעות כטב\"מים וטילים נגד אינטרסים מערביים במפרץ",
      "החרפת פעולות ההטרדה במרחב הימי לצד שמירה על ערוצי המשא ומתן במקביל"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הבטחת חופש השיט והביטחון הימי במפרץ",
      "אזהרה מתגובה חסרת תקדים לכל ניסיון פגיעה באמצעים לא קונבנציונליים או פעולות טרור"
     ],
     "inferred": [
      "שחיקת היכולות הצבאיות של משמרות המהפכה באמצעות תקיפות ממוקדות ומצור ימי",
      "בלימת ההסלמה האיראנית מבלי להיגרר לעימות אזורי כולל וממושך"
     ],
     "forecast": [
      "הגברת פריסת הכוחות ונושאות המטוסים במרחב לחיזוק ההרתעה",
      "ביצוע תקיפות תגמול ממוקדות נגד מערכי שיגור כטב\"מים וטילים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התרעה מפני שאיפות ההשמדה והתחמשות הגרעין של המשטר האיראני"
     ],
     "inferred": [
      "תיאום מבצעי הדוק מול פיקוד המרכז האמריקני לקראת אפשרות של מהלומה צבאית נרחבת באיראן",
      "סיכול ממוקד ומתמשך של תשתיות טרור וניסיונות פיגוע איראניים נגד יעדים ישראליים בעולם"
     ],
     "forecast": [
      "המשך שיתוף הפעולה המודיעיני וההיערכות לפעולה התקפית בשטח איראן בתיאום עם וושינגטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261117-iran-us-graphite-blackout-bombs-infrastructure",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/nov/17/pakistani-man-jailed-trump-murder-plot",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611173617",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86325322/Iranian-Army-targets-US-Patriot-systems-at-Kuwait-s-Ali-Al-Salem",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21878106",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-foreign-minister-vows-unforgettable-response-if-us-israeli-attacks",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133825",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49689",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95053",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/ry6bstcazg",
     "accessed_at": "2026-11-18T07:53:48+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T19:20:31+00:00",
  "changes": {
   "IRAN-11180753-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעה במכלית גז במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11180753-02": {
    "kind": "possible",
    "prev": "שיגור כטב\"מים של החות'ים לעבר קו צינור הנפט מזרח-מערב בסעודיה",
    "score": 0.467
   },
   "IRAN-11180753-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "טענה להפלת כטב\"ם אמריקאי במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11180753-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיגור כטב\"מים איראניים לבסיס אמריקאי בבחריין ותקיפת תגובה באי קשם",
    "score": 1.0
   },
   "IRAN-11180753-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "סיכול מזימה לפגיעה באיש עסקים ישראלי ביוון",
    "score": 1.0
   },
   "IRAN-11180753-06": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-18T0755__ukraine-202611180755.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-18T07:55:12+00:00",
   "window": {
    "from": "2026-11-17T07:55:12+00:00",
    "to": "2026-11-18T07:55:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611180755"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהסלמה הדדית של מהלומות ארוכות טווח נגד תשתיות אסטרטגיות, הבולטת שבהן היא פגיעה משמעותית בגשר קרים לצד תקיפת מתקני נפט בתוך רוסיה. במקביל, כוחות רוסיה ממשיכים בהפצצות אינטנסיביות על מרחבים עירוניים בחזיתות המזרח ועל מתקני חשמל וגשרים בקייב, דבר שיוצר משבר הומניטרי ומחריף את העומס על העורף האוקראיני. במקביל למערכה הצבאית, מתקיימת פעילות דיפלומטית ענפה הכוללת מגעים לקראת פסגה בינלאומית בסין ומחלוקות בקרב מדינות המערב באשר להיקף וליעד התקיפות האוקראיניות.",
   "fronts": [
    {
     "name": "מצר קרץ' וחצי האי קרים",
     "status": "פגיעה קשה במקטע הכביש של גשר קרים בעקבות מתקפה משולבת ושיבוש תנועת כלי שיט, לצד המשך פעילות רכבות חלקית"
    },
    {
     "name": "מחוז חרקוב",
     "status": "הפגזות ותקיפות רוסיות מתמשכות על יישובים ואזורים אזרחיים, הגורמות להרוגים ולפצועים"
    },
    {
     "name": "מחוז דונצק",
     "status": "תקיפות והפגזות רוסיות קטלניות על מרכזי אוכלוסייה בהם סלוביאנסק והסביבה"
    },
    {
     "name": "עומק שטח רוסיה",
     "status": "פגיעות בכטב\"מים אוקראיניים בבתי זיקוק לנפט ושיבושים נרחבים בתנועת התעופה האזרחית"
    },
    {
     "name": "עורף אוקראינה וקייב",
     "status": "מצוקת אנרגיה חריפה והפסקות חשמל ממושכות כתוצאה מפגיעות רוסיות בתשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11180755-01",
     "title": "מתקפה אוקראינית משולבת גרמה להרס מקטע כביש בגשר קרים",
     "summary": "כוחות אוקראינה פגעו בגשר קרים באמצעות שילוב של כטב\"מים וטילים, מה שהביא לקריסת קשת ומקטע כביש לים ולחסימת תנועת כלי שיט, בעוד שתנועת הרכבות חודשה באופן חלקי.",
     "axis": "חצי האי קרים ומצר קרץ'",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T08:59:47+00:00",
     "last_update_at": "2026-11-18T06:46:00+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למסילת הרכבת והטענות על שימוש בטכנולוגיות ניווט עצמאיות ללא מערכות לוויין זרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063385/",
       "published_at": "2026-11-18T06:46:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw772jk4rvmxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T21:24:35+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49685",
       "published_at": "2026-11-17T19:46:41+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49681",
       "published_at": "2026-11-17T19:14:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/17/ukraine-releases-footage-of-strike-on-crimean-bridge-video",
       "published_at": "2026-11-17T17:48:38+00:00"
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
       "name": "מצר קרץ', קרים",
       "lat": 45.281,
       "lon": 36.5492
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-02",
     "title": "פגיעות וקורבנות בתקיפות רוסיות במחוז חרקוב",
     "summary": "תקיפות שביצעו כוחות רוסיים על יישובים במחוז חרקוב, כולל פגיעה בשוק בעיר זלאטופיל, גרמו להרג אדם אחד ולפציעת לפחות 11 בני אדם, בהם ילד.",
     "axis": "מחוז חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:14:00+00:00",
     "last_update_at": "2026-11-18T07:37:00+00:00",
     "what_is_not_verified": "המספר הכולל המדויק של הנפגעים בכלל מוקדי הפגיעה במחוז.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_49f50b34e048d8be",
       "url": "https://www.ukrinform.net/rubric-ato/4185867-russian-attacks-kill-one-injures-eight-in-kharkiv-region.html",
       "published_at": "2026-11-18T07:37:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_49f50b34e048d8be",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063392/",
       "published_at": "2026-11-18T07:14:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זלאטופיל, אוקראינה",
       "lat": 49.3896,
       "lon": 36.2127
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-03",
     "title": "תקיפות רוסיות במחוז דונצק גבו את חייהם של ארבעה אזרחים",
     "summary": "הפגזות ותקיפות של כוחות רוסיים פגעו ביישובים סלוביאנסק, שבבקיבקה ויסנוהירקה שבמחוז דונצק והובילו למותם של ארבעה בני אדם.",
     "axis": "מחוז דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T06:42:00+00:00",
     "last_update_at": "2026-11-18T06:42:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המלא בשטחים שאינם בשליטת המנהל האזורי (כמו מריופול ווולנובאחה).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_146484b4e07aa0ad",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063387/",
       "published_at": "2026-11-18T06:42:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      },
      {
       "name": "שבבקיבקה, אוקראינה",
       "lat": 48.7506,
       "lon": 37.4908
      },
      {
       "name": "יסנוהירקה, אוקראינה",
       "lat": 48.7787,
       "lon": 37.5537
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-04",
     "title": "יירוט נרחב של כטב\"מים רוסיים בשמי אוקראינה",
     "summary": "מערך ההגנה האווירית של אוקראינה יירט ונטרל 126 כלי טיס בלתי מאוישים ששוגרו על ידי רוסיה במהלך שעות הלילה.",
     "axis": "הגנה אווירית באוקראינה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:19:00+00:00",
     "last_update_at": "2026-11-18T07:19:00+00:00",
     "what_is_not_verified": "סך כל הכטב\"מים ששוגרו במקור ושיעור הפגיעות בתשתיות לעומת יירוטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4185864-air-defence-neutralises-126-russian-drones-used-to-attack-ukraine-overnight.html",
       "published_at": "2026-11-18T07:19:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-05",
     "title": "מתקפת כטב\"מים אוקראינית על בתי זיקוק בקרסנודאר",
     "summary": "כלי טיס בלתי מאוישים פגעו בשני בתי זיקוק לנפט באזור סברסקי שבמחוז קרסנודאר ברוסיה.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T04:56:50+00:00",
     "last_update_at": "2026-11-18T04:56:50+00:00",
     "what_is_not_verified": "מידת הנזק המעשי שנגרם למתקני הזיקוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/2-russian-oil-refineries-reportedly-targeted-in-overnight-drone-attack-on-krasnodar-krai/",
       "published_at": "2026-11-18T04:56:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-06",
     "title": "השבתת טיסות ונמלי תעופה ברוסיה עקב איומי כטב\"מים",
     "summary": "התרחבות מתקפות הכטב\"מים של אוקראינה הובילה לשיבושים משמעותיים והגבלות טיסה יומיות בעשרות נמלי תעופה ברחבי רוסיה.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T07:10:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T07:10:00+00:00",
     "last_update_at": "2026-11-18T07:10:00+00:00",
     "what_is_not_verified": "היקף ההשפעה הכלכלית המדויק על ענף התעופה האזרחית ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/articles/2026/11/18/8063391/",
       "published_at": "2026-11-18T07:10:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-07",
     "title": "מחלוקת פומבית בין גרמניה ובריטניה לארצות הברית בנוגע לתקיפות בעומק רוסיה",
     "summary": "שרי ההגנה של גרמניה ובריטניה דחו בחריפות את הביקורת של בכיר בפנטגון שכינה את התקיפות האוקראיניות בעומק רוסיה בלתי מועילות להשגת יעדי הלחימה.",
     "axis": "הזירה הבינלאומית והסיוע הצבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T22:01:14+00:00",
     "last_update_at": "2026-11-18T03:54:30+00:00",
     "what_is_not_verified": "עמדת ממשל ארצות הברית הרשמית מעבר להצהרות של סגן תת-מזכיר ההגנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/germany-uk-push-back-after-us-criticizes-ukraines-deep-strikes-into-russia/",
       "published_at": "2026-11-18T03:54:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/18/ukraine-war-briefing-us-criticises-kyiv-deep-strikes-russia",
       "published_at": "2026-11-18T01:41:14+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/18/quite-a-stupid-thing-german-defense-minister-rejects-u-s-criticism-of-ukraine-s-strikes-deep-inside-russia",
       "published_at": "2026-11-17T22:01:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-08",
     "title": "הכחשת דרישה רוסית לעזיבת פינלנד את נאט\"ו",
     "summary": "נשיא פינלנד ודובר הקרמלין הכחישו במקביל טענות עיתונאיות לפיהן רוסיה הציבה דרישה שפינלנד תפרוש מנאט\"ו כחלק משיחות שלום על אוקראינה.",
     "axis": "משא ומתן ומדיניות חוץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:24:53+00:00",
     "last_update_at": "2026-11-18T07:24:53+00:00",
     "what_is_not_verified": "תוכן המגעים החסויים המלאים שנערכו בשיחות טלפון בין פוטין למנהיגים אירופיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/18/moscow-and-helsinki-agree-on-one-thing-russia-never-demanded-finland-leave-nato",
       "published_at": "2026-11-18T07:24:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-09",
     "title": "האשמות אוקראיניות בדבר שימוש רוסי בגז מדמיע בשדה הקרב",
     "summary": "חקירה באוקראינה בשיתוף הארגון למניעת הפצת נשק כימי קבעה כי צבא רוסיה השתמש ברימוני גז מדמיע נגד חיילים אוקראינים בניגוד לאמנות הבינלאומיות.",
     "axis": "חזית הלחימה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T20:23:17+00:00",
     "last_update_at": "2026-11-17T20:23:17+00:00",
     "what_is_not_verified": "היקף 14 אלף התקריות הנטענות על ידי אוקראינה, שרוסיה מכחישה באופן גורף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/17/ukrainian-investigation-finds-russia-used-tear-gas-against-ukrainian-troops-ap-reports",
       "published_at": "2026-11-17T20:23:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-10",
     "title": "משבר אנרגיה והפסקות חשמל חמורות בקייב",
     "summary": "תקיפות חוזרות ונשנות של רוסיה על תשתיות אנרגיה יצרו הפסקות חשמל קשות וממושכות בבירת אוקראינה והובילו לביקורת פנימית נגד ראש העיר.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T17:19:57+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T17:19:57+00:00",
     "last_update_at": "2026-11-18T07:00:36+00:00",
     "what_is_not_verified": "היקף האחריות הניהולית המיוחסת לראש העיר קליצ'קו אל מול חומרת הפגיעה הרוסית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/18/russian-attacks-kyiv-power-outages-mayor-in-perilous-position",
       "published_at": "2026-11-18T07:00:36+00:00"
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
     "id": "UKRAINE-11180755-11",
     "title": "הגעת פוטין לסין לקראת פסגה משולשת",
     "summary": "נשיא רוסיה נחת בסין לקראת מפגש פסגה משותף עם נשיא סין ונשיא ארצות הברית דונלד טראמפ.",
     "axis": "דיפלומטיה בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T19:16:36+00:00",
     "last_update_at": "2026-11-17T19:46:41+00:00",
     "what_is_not_verified": "סדר היום המלא של הפסגה וההסכמות שיושגו בה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49685",
       "published_at": "2026-11-17T19:46:41+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133819",
       "published_at": "2026-11-17T19:16:36+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-12",
     "title": "התקדמות בשיחות בין משרד האוצר האוקראיני לקרן המטבע הבינלאומית",
     "summary": "שלב הדיונים הפרונטלי בוורשה בין משרד האוצר של אוקראינה לנציגי קרן המטבע הסתיים בהתקדמות משמעותית בנוגע לסיוע בהיקף של כ-1.6 מיליארד דולר.",
     "axis": "כלכלה וסיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:42:00+00:00",
     "last_update_at": "2026-11-18T07:42:00+00:00",
     "what_is_not_verified": "מועד האישור הסופי והעברת הכספים בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_7f2483820f1bcd72",
       "url": "https://www.ukrinform.net/rubric-economy/4185863-16-bln-at-stake-finance-ministry-reports-significant-progress-in-talks-with-imf-mission.html",
       "published_at": "2026-11-18T07:42:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ורשה, פולין",
       "lat": 52.2334,
       "lon": 21.0711
      }
     ]
    }
   ],
   "not_verified": [
    "טענות רוסיות על קיומם של כעשרים בתי כלא סודיים ומתקני עינויים המופעלים על ידי אוקראינה",
    "מספר האבדות הכולל של הצבא הרוסי המדווח על ידי המטה הכללי של אוקראינה",
    "הטענה כי תקיפת גשר קרים הסתמכה כולה על תקשורת מקומית עצמאית לחלוטין ללא לוויינים זרים",
    "היקף השימוש המדויק בגז מדמיע בשדה הקרב לפי הנתון האוקראיני של כ-14 אלף מקרים"
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
      "פגיעה בנתיבי אספקה צבאיים רוסיים ובסמלי שליטה דוגמת גשר קרים",
      "ערעור הפעילות הכלכלית ותשתיות האנרגיה שמממנות את מאמץ המלחמה של רוסיה"
     ],
     "inferred": [
      "יצירת מנוף לחץ סמלי ומבצעי לקראת מגעים מדיניים ופסגות בינלאומיות",
      "הפגנת עצמאות טכנולוגית צבאית שאינה תלויה באופן מלא במערכות מערביות"
     ],
     "forecast": [
      "המשך מיקוד מאמצי התקיפה בנמלי תעופה, מאגרי דלק ותשתיות לוגיסטיקה ברוסיה",
      "החרפת הוויכוח הפנימי והחיצוני מול שותפות מערביות על לגיטימיות התקיפות בעומק"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה במערכי כטב\"מים ומרכזי שליטה צבאיים של אוקראינה בחזית",
      "שלילת טענות בדבר דרישות להוצאת מדינות שכנות מברית נאט\"ו"
     ],
     "inferred": [
      "שחיקת כושר העמידה של העורף האוקראיני באמצעות פגיעה ממוקדת במערכות החשמל לקראת החורף",
      "הפגנת נוכחות מדינית בינלאומית לצד מעצמות מתחרות כדי לחלץ עמדת מיקוח עדיפה"
     ],
     "forecast": [
      "המשך גלי תקיפות באמצעות כטב\"מים וטילים לעבר תשתיות אנרגיה וגשרים מרכזיים באוקראינה",
      "הידוק שיתוף הפעולה הדיפלומטי מול סין במטרה לבלום לחצים מערביים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/18/russian-attacks-kyiv-power-outages-mayor-in-perilous-position",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/germany-uk-push-back-after-us-criticizes-ukraines-deep-strikes-into-russia/",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/17/ukrainian-investigation-finds-russia-used-tear-gas-against-ukrainian-troops-ap-reports",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/articles/2026/11/18/8063391/",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133819",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49685",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-economy/4185863-16-bln-at-stake-finance-ministry-reports-significant-progress-in-talks-with-imf-mission.html",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T19:30:52+00:00",
  "changes": {
   "UKRAINE-11180755-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה אוקראינית משמעותית על גשר קרים והקרסת מקטע ממנו",
    "score": 1.0
   },
   "UKRAINE-11180755-02": {
    "kind": "new"
   },
   "UKRAINE-11180755-03": {
    "kind": "new"
   },
   "UKRAINE-11180755-04": {
    "kind": "possible",
    "prev": "חדירת כטב\"מים רוסיים למרחב האווירי של מולדובה וסגירת מעברי גבול",
    "score": 0.467
   },
   "UKRAINE-11180755-05": {
    "kind": "new"
   },
   "UKRAINE-11180755-06": {
    "kind": "new"
   },
   "UKRAINE-11180755-07": {
    "kind": "new"
   },
   "UKRAINE-11180755-08": {
    "kind": "new"
   },
   "UKRAINE-11180755-09": {
    "kind": "new"
   },
   "UKRAINE-11180755-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים בליסטיים רוסית על גשרים בקייב",
    "score": 1.0
   },
   "UKRAINE-11180755-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "נחיתת פוטין בסין לקראת פסגה משולשת",
    "score": 1.0
   },
   "UKRAINE-11180755-12": {
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
