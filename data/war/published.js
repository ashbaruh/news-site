/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-24T1406__yemen-202610241406.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-24T14:06:29+00:00",
   "window": {
    "from": "2026-10-23T14:06:29+00:00",
    "to": "2026-10-24T14:06:29+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610241406"
   },
   "summary": "הלחימה בין החות'ים לקואליציה בהובלת סעודיה מסלימה בשני מוקדים מקבילים: שיגור טילים בליסטיים לעבר ערי סעודיה לצד תקיפות אוויריות בצנעא, והידוק המצור וההפגזות של החות'ים סביב העיר תעז. סעודיה מקדמת הסכמי הגנה בינלאומיים לחיזוק ביטחונה, בעוד ארצות הברית מפנה אנשי צוות דיפלומטיים מהממלכה עקב החשש מהאיומים החות'יים.",
   "fronts": [
    {
     "name": "חזית תימן - סעודיה",
     "status": "הסלמה בשיגור טילים בליסטיים לעבר ריאד, טאיף וינבוע, מול תקיפות אוויריות של הקואליציה בצנעא"
    },
    {
     "name": "חזית פנים-תימנית (תעז וחוף ים סוף)",
     "status": "מצור חות'י מתמשך על תעז עם שיבוש קשה באספקה הומניטרית וחילופי אש"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10241406-01",
     "title": "תקיפה אווירית סעודית בעיר צנעא",
     "summary": "כלי טיס של הקואליציה בהובלת סעודיה פגעו במבנה מגורים באזור עסר במערב הבירה צנעא, וכתוצאה מכך נהרגו שלושה בני אדם ונפצעו נוספים.",
     "axis": "סעודיה - צנעא",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T08:07:34+00:00",
     "last_update_at": "2026-10-24T11:47:27+00:00",
     "what_is_not_verified": "זהות המבנה ומספר הנפגעים המדויק מבוססים על דיווחי תקשורת המזוהה עם החות'ים וטרם אומתו ממקור עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/three-killed-saudi-air-strike-sanaa-says-houthi-linked-media",
       "published_at": "2026-10-24T11:47:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-warns-us-against-attacks-saudi-forces-launch-strikes",
       "published_at": "2026-10-24T08:07:34+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-10241406-02",
     "title": "יירוט טילים בליסטיים לעבר טאיף וינבוע והתרעות במערב סעודיה",
     "summary": "הקואליציה בראשות סעודיה יירטה שני טילים בליסטיים ששוגרו על ידי החות'ים לעבר טאיף וינבוע. שירותי ההגנה האזרחית בממלכה הפעילו התרעות קצרות על סכנה אפשרית במחוזות מכה, ג'דה, טאיף וינבוע.",
     "axis": "תימן - מערב סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T08:07:34+00:00",
     "last_update_at": "2026-10-24T09:22:35+00:00",
     "what_is_not_verified": "לא נמסרו פרטים עצמאיים על היקף הנזק או מיקומי נפילת שברי היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154537",
       "published_at": "2026-10-24T09:22:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-destroyed-houthi-ballistic-missiles-fired",
       "published_at": "2026-10-24T09:14:58+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-civil-defence-issues-potential-danger-warning-mecca-jeddah",
       "published_at": "2026-10-24T08:52:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-warns-us-against-attacks-saudi-forces-launch-strikes",
       "published_at": "2026-10-24T08:07:34+00:00"
      }
     ],
     "places": [
      {
       "name": "טאיף, סעודיה",
       "lat": 21.2703,
       "lon": 40.4158
      },
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-10241406-03",
     "title": "יירוט טיל בליסטי לעבר ריאד וכטב\"ם במזרח סעודיה",
     "summary": "מערכות ההגנה האווירית של סעודיה יירטו טיל בליסטי ששוגר על ידי החות'ים לעבר הבירה ריאד, לאחר יירוט קודם של כלי טיס בלתי מאויש באזור המזרחי של המדינה.",
     "axis": "תימן - ריאד",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T01:49:40+00:00",
     "last_update_at": "2026-10-24T03:20:02+00:00",
     "what_is_not_verified": "לא אומתו פרטי הפגיעה או היירוט מעבר להודעת דובר כוחות הקואליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154523",
       "published_at": "2026-10-24T03:20:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-ballistic-missile-aimed-riyadh-destroyed",
       "published_at": "2026-10-24T01:49:40+00:00"
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
     "id": "YEMEN-10241406-04",
     "title": "החרפת המצור וההפגזות של החות'ים על העיר תעז",
     "summary": "החות'ים ממשיכים לכתר את העיר תעז ולחסום את הכביש הראשי המוביל לעדן, מה שגרם למחסור חמור במים, בדלק ובמזון לפי האו\"ם. במקביל נמסר על הרוגים ופצועים בקרב אזרחים כתוצאה מהפגזות חות'יות על שכונות מגורים.",
     "axis": "פנים-תימן (תעז)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T18:28:09+00:00",
     "last_update_at": "2026-10-24T14:04:06+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל והיקף ההפרות שיוחסו לחות'ים בדיווחים מקומיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154552",
       "published_at": "2026-10-24T14:04:06+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154533",
       "published_at": "2026-10-24T06:17:09+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154521",
       "published_at": "2026-10-23T22:02:21+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/un-sounds-alarm-besieged-yemen-city-taiz",
       "published_at": "2026-10-23T18:39:42+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/un-sounds-alarm-besieged-yemen-city-taiz",
       "published_at": "2026-10-23T18:30:37+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/10/the-houthis-red-sea-power-play.php",
       "published_at": "2026-10-23T18:28:09+00:00"
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
     "id": "YEMEN-10241406-05",
     "title": "פינוי דיפלומטי ואזהרות מסע אמריקאיות בשל איומי החות'ים",
     "summary": "מחלקת המדינה האמריקאית הורתה לעובדים לא חיוניים ולמשפחותיהם לעזוב את סעודיה והוציאה אזהרות מסע אזוריות על רקע העלייה בהתקפות של החות'ים.",
     "axis": "סעודיה - ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T20:28:11+00:00",
     "last_update_at": "2026-10-23T22:53:08+00:00",
     "what_is_not_verified": "האם חל שינוי מהותי ביכולות הצבאיות של החות'ים, כאשר במחלקת המדינה הבהירו שהאזהרות אינן מעידות על כך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694739",
       "published_at": "2026-10-23T22:53:08+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-issues-travel-advisories-across-middle-east-citing-houthi-threat",
       "published_at": "2026-10-23T20:28:11+00:00"
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
     "id": "YEMEN-10241406-06",
     "title": "פקיסטן אשררה ברית הגנה עם סעודיה וטורקיה",
     "summary": "פקיסטן השלימה את הליך האשרור של הסכם ההגנה המשותף שנחתם במכה מול סעודיה וטורקיה, על רקע התגברות האיומים הביטחוניים מצד החות'ים וחיפוש סעודיה אחר בעלות ברית.",
     "axis": "סעודיה - פקיסטן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T10:49:29+00:00",
     "last_update_at": "2026-10-24T10:49:29+00:00",
     "what_is_not_verified": "המועד שבו טורקיה תשלים את הליך האשרור הפנימי שלה ואופן היישום המבצעי של ההסכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/pakistan-ratifies-mecca-pact-saudi-arabia-faces-attacks-and-israel-holds-military-drills",
       "published_at": "2026-10-24T10:49:29+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      }
     ]
    }
   ],
   "not_verified": [
    "מספר ההרוגים והפצועים הסופי בתקיפה האווירית בצנעא",
    "מידת הנזק או נפילת רסיסים ביירוטי הטילים בטאיף, ינבוע וריאד",
    "הטענות על ביצוע עשרים ואחת הפרות חות'יות בתעז בתוך יממה אחת"
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
     "actor": "החות'ים",
     "declared": [
      "המשך הלחימה נגד הקואליציה בהובלת סעודיה",
      "תקיפת יעדים בריאד ובמערב סעודיה"
     ],
     "inferred": [
      "הפעלת לחץ על סעודיה באמצעות ירי לעומק שטחה כדי לצמצם את מעורבותה בתימן",
      "הכנעת מוקדי התנגדות פנימיים והשלמת ההשתלטות על נתיבי גישה מרכזיים בתעז ובחוף ים סוף"
     ],
     "forecast": [
      "המשך ניסיונות שיגור של טילים וכטב\"מים לעבר מתקנים וערים בסעודיה",
      "החרפת הלחץ הצבאי והמצור על תעז"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה",
     "declared": [
      "יירוט וסיכול איומי הטילים והכטב\"מים המשוגרים מסביבת החות'ים",
      "פגיעה ביעדים צבאיים של החות'ים בצנעא ובמוקדי שיגור"
     ],
     "inferred": [
      "מניעת פגיעה בריכוזי אוכלוסייה ובמתקני אנרגיה חיוניים בערים כמו ריאד וינבוע",
      "בניית קואליציית הגנה אזורית רחבה עם מדינות כמו פקיסטן וטורקיה להרתעת החות'ים"
     ],
     "forecast": [
      "המשך ביצוע תקיפות מנע ותגובה אוויריות בתימן",
      "האצת התיאום הביטחוני המשותף עם בעלות ברית במסגרת הסכמי הגנה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-issues-travel-advisories-across-middle-east-citing-houthi-threat",
     "accessed_at": "2026-10-24T14:06:29+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694739",
     "accessed_at": "2026-10-24T14:06:29+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/10/the-houthis-red-sea-power-play.php",
     "accessed_at": "2026-10-24T14:06:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/pakistan-ratifies-mecca-pact-saudi-arabia-faces-attacks-and-israel-holds-military-drills",
     "accessed_at": "2026-10-24T14:06:29+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/un-sounds-alarm-besieged-yemen-city-taiz",
     "accessed_at": "2026-10-24T14:06:29+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154521",
     "accessed_at": "2026-10-24T14:06:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-23T23:40:24+00:00",
  "changes": {
   "YEMEN-10241406-01": {
    "kind": "new"
   },
   "YEMEN-10241406-02": {
    "kind": "new"
   },
   "YEMEN-10241406-03": {
    "kind": "new"
   },
   "YEMEN-10241406-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הרוגים בהפגזות חות'יות באזור תעז",
    "score": 1.0
   },
   "YEMEN-10241406-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פינוי נציגויות דיפלומטיות אמריקאיות ברקע מתקפות החות'ים",
    "score": 1.0
   },
   "YEMEN-10241406-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-25T0040__iran-202610250040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-25T00:40:43+00:00",
   "window": {
    "from": "2026-10-24T00:40:43+00:00",
    "to": "2026-10-25T00:40:43+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610250040"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל עומד בפני הסלמה אפשרית על רקע איומי תקיפה מיידיים מצד וושינגטון לצד שיח מקביל על חידוש המשא ומתן. במקביל, שלוחותיה של איראן, בדגש על החות'ים בתימן, מגבירות את האיומים והפגיעות ביעדים אזוריים ובמתקני תחבורה ותעופה במפרץ, דבר שהוביל לצמצום כוח אדם ואזהרות מסע אמריקניות. בחזית הישראלית ניכרות היערכות לפעולות באיראן והאשמות הדדיות בנוגע לחידוש פרויקט הגרעין האיראני.",
   "fronts": [
    {
     "name": "ציר ארה\"ב - איראן",
     "status": "מתיחות צבאית גבוהה ואיומים בתקיפות לצד ניסיונות תיווך ומגעים להסכם"
    },
    {
     "name": "ציר ישראל - איראן",
     "status": "כוננות ביטחונית, דיווחים על טיסות מבצעיות במרחב והצהרות על איום הגרעין"
    },
    {
     "name": "ציר החות'ים - סעודיה וארה\"ב",
     "status": "התקפות טילים ואיומים ישירים על שדות תעופה ומתקני נפט בסעודיה"
    },
    {
     "name": "החזית העיראקית",
     "status": "חשש מזליגת המלחמה ושימוש במרחב האווירי לתקיפות נגד איראן ומיליציות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10250040-01",
     "title": "הצהרות טראמפ על אפשרות לתקיפה באיראן או השגת הסכם",
     "summary": "נשיא ארצות הברית דונלד טראמפ הצהיר כי וושינגטון שוקלת תקיפה אפשרית נגד איראן בטווח הזמן המיידי, או לחלופין הגעה להסכם משמעותי עמה, במטרה למנוע ממנה לצמיתות פיתוח נשק גרעיני.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T15:21:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T15:21:57+00:00",
     "last_update_at": "2026-10-25T00:00:00+00:00",
     "what_is_not_verified": "האם אכן תתבצע תקיפה צבאית או שיושג הסכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/25/iran-war-live-trump-hints-at-possible-sunday-iran-attack-or-deal-reached?traffic_source=rss",
       "published_at": "2026-10-25T00:00:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-could-strike-iran-tomorrow-or-strike-beautiful-deal",
       "published_at": "2026-10-24T23:13:48+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/ry9t11rq2gx",
       "published_at": "2026-10-24T15:21:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-02",
     "title": "השלמת תוכניות תקיפה בצבא ארצות הברית נגד איראן",
     "summary": "פורסם כי צבא ארצות הברית השלים את תוכניותיו לביצוע תקיפות נוספות באיראן וממתין לקבלת אישור מהבית הלבן.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:05:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:05:45+00:00",
     "last_update_at": "2026-10-24T21:31:56+00:00",
     "what_is_not_verified": "האם התוכניות יאושרו ומתי ייושמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380834",
       "published_at": "2026-10-24T21:31:56+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
       "published_at": "2026-10-24T14:05:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-03",
     "title": "האשמות מצד נשיא איראן וקריאה לחידוש המשא ומתן",
     "summary": "נשיא איראן מסעוד פזשכיאן הטיל את האשמה בכישלון ההסכם הזמני על ארצות הברית, אך קרא לחדש את המאמצים להשלמתו, תוך אזהרה איראנית מתגובה חמורה אם יותקפו שוב.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T13:46:37+00:00",
     "last_update_at": "2026-10-24T21:30:11+00:00",
     "what_is_not_verified": "האם הצדדים ישובו לשיחות משא ומתן בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/24/iran-blames-us-for-deal-failure-urges-new-try-amid-fear-of-new-attacks?traffic_source=rss",
       "published_at": "2026-10-24T21:30:11+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
       "published_at": "2026-10-24T14:05:45+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-pezeshkian-blames-us-interim-deal-failure-urges-new-try",
       "published_at": "2026-10-24T13:46:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-04",
     "title": "התרעת המודיעין האמריקני מפני מזימות איראניות נגד אנשיו",
     "summary": "מנהל המודיעין הלאומי של ארצות הברית פרסם מזכר שלפיו איראן הגבירה את מאמציה לפגוע באנשי סגל ובאזרחים אמריקנים והתוכניות הגיעו לשלבים מתקדמים, במקביל לצמצום הצוותים הדיפלומטיים בסעודיה.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T07:36:02+00:00",
     "last_update_at": "2026-10-24T16:46:39+00:00",
     "what_is_not_verified": "פרטי המזימות המדויקים ומידת ישימותן המיידית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-has-ramped-efforts-target-us-personnel-intelligence-memo-warns",
       "published_at": "2026-10-24T16:46:39+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmn8w1ddg2x9o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-24T07:36:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-05",
     "title": "עדכון אזהרות מסע אמריקניות במזרח התיכון עקב איומי החות'ים",
     "summary": "מחלקת המדינה האמריקנית עדכנה את אזהרות המסע עבור מספר מדינות במזרח התיכון בעקבות מה שהוגדר כאיום בתוקפנות אזורית גוברת מצד החות'ים הנתמכים בידי איראן.",
     "axis": "ארה\"ב-חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T15:36:42+00:00",
     "last_update_at": "2026-10-24T15:36:42+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_dec32b4d756f9049",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-updates-gulf-middle-east-travel-advisories-over-threat-houthi",
       "published_at": "2026-10-24T15:36:42+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-06",
     "title": "אזהרות ואיומים של החות'ים נגד נמל התעופה בריאד",
     "summary": "דובר תנועת החות'ים חידש את האזהרות מפני שימוש בנמל התעופה הבינלאומי בריאד והגדיר אותו יעד צבאי, לצד דיווחים על תקיפות נגד מתקני נפט ושדות תעופה.",
     "axis": "שלוחות איראן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T17:50:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T17:50:25+00:00",
     "last_update_at": "2026-10-24T23:05:18+00:00",
     "what_is_not_verified": "מידת הפגיעה בפועל בשדות התעופה ובמתקני הנפט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-renew-warning-against-using-riyadh-airport",
       "published_at": "2026-10-24T23:05:18+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
       "published_at": "2026-10-24T17:50:25+00:00"
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
     "id": "IRAN-10250040-07",
     "title": "הכחשת החות'ים בדבר שיגור טילים לעבר מכה ומדינה",
     "summary": "החות'ים הכחישו דיווחים סעודיים על כך ששיגרו טילים לעבר הערים מכה ומדינה, וטענו כי פעולותיהם מתמקדות אך ורק במתקני נפט ובבסיסים צבאיים.",
     "axis": "שלוחות איראן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T18:44:03+00:00",
     "last_update_at": "2026-10-24T18:44:03+00:00",
     "what_is_not_verified": "האם שוגרו טילים לעבר הערים הקדושות כפי שטענה סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-deny-report-they-attacked-mecca-and-medina",
       "published_at": "2026-10-24T18:44:03+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      },
      {
       "name": "מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "IRAN-10250040-08",
     "title": "דיווחים על טיסות ותקיפות במרחב האווירי של עיראק לעבר איראן",
     "summary": "מחויבותה של בגדאד להישאר מחוץ לעימות נבחנת לנוכח דיווחים על גיחות מטוסים ישראליים דרך המרחב האווירי העיראקי לעבר איראן, תקיפות על מחסני מיליציות ותקיפות כטב\"מים על בסיסי אופוזיציה כורדית.",
     "axis": "ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:05:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T00:05:00+00:00",
     "last_update_at": "2026-10-25T00:05:00+00:00",
     "what_is_not_verified": "אימות רשמי של הטיסות והתקיפות הישראליות בשטח עיראק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610242914",
       "published_at": "2026-10-25T00:05:00+00:00"
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
     "id": "IRAN-10250040-09",
     "title": "פגישה בין ראש הרשות השופטת באיראן למנהיג העליון מוג'תבא ח'אמנאי",
     "summary": "הרשות השופטת באיראן דיווחה על פגישה נדירה של העומד בראשה עם המנהיג העליון מוג'תבא ח'אמנאי, שבה דנו בין היתר בפיצויים בגין נזקים שנגרמו מהתקיפות של ארצות הברית וישראל שבהן נהרג אביו.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T18:28:59+00:00",
     "last_update_at": "2026-10-24T18:28:59+00:00",
     "what_is_not_verified": "האם המנהיג מוג'תבא אכן נראה או קיים את הפגישה בפועל שכן טרם הופיע בציבור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_23e46287383b5b88",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-judiciary-says-chief-holds-rare-meeting-supreme-leader",
       "published_at": "2026-10-24T18:28:59+00:00"
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
     "id": "IRAN-10250040-10",
     "title": "הפסקת חשמל באי קיש באיראן",
     "summary": "התרחשה הפסקת חשמל באי קיש שבאיראן.",
     "axis": "ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T23:32:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T23:32:18+00:00",
     "last_update_at": "2026-10-24T23:32:18+00:00",
     "what_is_not_verified": "הסיבה להפסקת החשמל והאם קשורה לפעילות צבאית או חבלה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48906",
       "published_at": "2026-10-24T23:32:18+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קיש, איראן",
       "lat": 26.5351,
       "lon": 53.972
      }
     ]
    },
    {
     "id": "IRAN-10250040-11",
     "title": "הצהרות נתניהו על חידוש תוכנית הגרעין האיראנית",
     "summary": "ראש ממשלת ישראל בנימין נתניהו טען בסרטון בחירות כי איראן חידשה את תוכנית הגרעין שלה ומבקשת להשמיד את ישראל בתוך זמן קצר, טענה שנדחתה בידי יריבו הפוליטי כשימוש ביטחוני לצורכי קמפיין.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T19:33:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T19:33:03+00:00",
     "last_update_at": "2026-10-24T19:33:03+00:00",
     "what_is_not_verified": "האם תוכנית הגרעין אכן חודשה ומצב התקדמותה המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/bkjwk8qhfx",
       "published_at": "2026-10-24T19:33:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-12",
     "title": "דיווח על אי-התערבות חיזבאללה בלחימה נוספת בין ישראל לאיראן",
     "summary": "פורסם כי חיזבאללה העביר מסר שלא יתערב אם תפרוץ שוב מלחמה, ובמקביל הודיע גורם במשרד החוץ האיראני כי אין לטהראן צורך בהתערבות הארגון.",
     "axis": "ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:05:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:05:45+00:00",
     "last_update_at": "2026-10-24T14:05:45+00:00",
     "what_is_not_verified": "נכונות הדיווח על העברת המסר מחיזבאללה ומקורותיו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
       "published_at": "2026-10-24T14:05:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-13",
     "title": "התבטאות דובר משמרות המהפכה על מעמדה של איראן",
     "summary": "דובר משמרות המהפכה הצהיר כי בעימות סופי איראן תהפוך למעצמת-העל הבלתי מעורערת של העולם.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T12:26:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T12:26:00+00:00",
     "last_update_at": "2026-10-24T12:26:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48886",
       "published_at": "2026-10-24T12:26:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "דיווחים על טיסות של מטוסי קרב ישראליים לעבר איראן דרך המרחב האווירי העיראקי",
    "דיווחים על תקיפות נגד מחסני מערכות הגנה מתוצרת סין של מיליציות בעיראק",
    "הטענה הסעודית על יירוט טילי חות'ים ששוגרו לעבר מכה ומדינה",
    "טענות על כוונת חיזבאללה שלא להתערב במקרה של חידוש הלחימה",
    "הטענה של נתניהו בדבר חידוש מלא של תוכנית הגרעין האיראנית בתוך זמן קצר",
    "הסיבה המדויקת להפסקת החשמל באי קיש באיראן"
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
     "actor": "ארצות הברית",
     "declared": [
      "מניעה קבועה של פיתוח נשק גרעיני בידי איראן",
      "הגעה להסכם ארוך טווח שיבטיח את עצירת הגרעין"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וסנקציות כלכליות לכפיית ויתורים על טהראן",
      "הגנה על כוחות ונציגויות במפרץ מפני תקיפות שלוחות איראן"
     ],
     "forecast": [
      "המשך איומים בפעולה צבאית לצד ניסיון למצות מגעים דיפלומטיים",
      "תגובה ממוקדת אם ייפגעו חיילים או אזרחים אמריקנים באזור"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "חידוש המשא ומתן להשלמת הסכם",
      "תגובה חריפה בעוצמה גבוהה לכל תקיפה צבאית, כולל מוגבלת",
      "מיצוי זכויות ופיצויים על נזקי התקיפות מצד ישראל וארצות הברית"
     ],
     "inferred": [
      "שמירה על שרידות המשטר ושיקום התשתיות לאחר הפגיעות הקודמות",
      "הפעלת לחץ אזורי באמצעות שלוחות להרתעת יריביה"
     ],
     "forecast": [
      "המשך איתותים על מוכנות לדיפלומטיה תוך איומים בתגובה צבאית קשה",
      "הגברת פעילות א-סימטרית באמצעות גורמים בעלי ברית במרחב"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול חידוש תוכנית הגרעין האיראנית ומניעת השמדת ישראל"
     ],
     "inferred": [
      "הכנת תשתיות מבצעיות לתקיפה צבאית נרחבת באיראן",
      "הפעלת לחץ מקסימלי במטרה לערער את הנהגת הרפובליקה האסלאמית"
     ],
     "forecast": [
      "המשך פעילות איסוף וטיסות מבצעיות במרחב האזורי",
      "תיאום מהלכים צבאיים הדוק מול הממשל האמריקני"
     ]
    },
    {
     "actor": "החות'ים (שלוחי איראן בתימן)",
     "declared": [
      "הגדרת נמל התעופה בריאד ומתקני נפט סעודיים כמטרות צבאיות לפגיעה"
     ],
     "inferred": [
      "שיבוש התחבורה והכלכלה במפרץ במטרה ללחוץ על סעודיה וארצות הברית",
      "הפגנת נאמנות לציר האיראני כחלק ממאמץ ההרתעה האזורי"
     ],
     "forecast": [
      "המשך שיגורי טילים וכטב\"מים לעבר יעדים אסטרטגיים בסעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/24/iran-blames-us-for-deal-failure-urges-new-try-amid-fear-of-new-attacks?traffic_source=rss",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/iran-has-ramped-efforts-target-us-personnel-intelligence-memo-warns",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmn8w1ddg2x9o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610242914",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380834",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-judiciary-says-chief-holds-rare-meeting-supreme-leader",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48886",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-24T04:57:57+00:00",
  "changes": {
   "IRAN-10250040-01": {
    "kind": "new"
   },
   "IRAN-10250040-02": {
    "kind": "new"
   },
   "IRAN-10250040-03": {
    "kind": "new"
   },
   "IRAN-10250040-04": {
    "kind": "new"
   },
   "IRAN-10250040-05": {
    "kind": "new"
   },
   "IRAN-10250040-06": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "יירוט טיל בליסטי ששוגר על ידי החות'ים לעבר ריאד",
    "score": 0.817
   },
   "IRAN-10250040-07": {
    "kind": "new"
   },
   "IRAN-10250040-08": {
    "kind": "new"
   },
   "IRAN-10250040-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תגובת יועץ המנהיג העליון באיראן לאיומי ארה\"ב וישראל",
    "score": 1.0
   },
   "IRAN-10250040-10": {
    "kind": "new"
   },
   "IRAN-10250040-11": {
    "kind": "possible",
    "prev": "קריאת סבא\"א לחידוש הפיקוח על מתקני הגרעין באיראן",
    "score": 0.467
   },
   "IRAN-10250040-12": {
    "kind": "possible",
    "prev": "הצהרת נשיא ארה\"ב על אפשרות לפעולה צבאית נוספת נגד איראן",
    "score": 0.467
   },
   "IRAN-10250040-13": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-25T0043__ukraine-202610250043.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-25T00:43:27+00:00",
   "window": {
    "from": "2026-10-24T00:43:27+00:00",
    "to": "2026-10-25T00:43:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610250043"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות מהלומות כטב\"מים הדדיות עמוקות, הכוללות פגיעות במתקנים כימיים בסיביר ופגיעות רוסיות בערים אוקראיניות כמו חרקוב ודניפרופטרובסק. במקביל נרשמות הבנות נקודתיות להפוגה הומניטרית בעיר אולשקי, לצד מתיחות סביב שירותי הלוויין הצבאיים ומגעים עקיפים בנושאי סנקציות ואנרגיה.",
   "fronts": [
    {
     "name": "עומק שטח רוסיה",
     "status": "תקיפות כטב\"מים אוקראיניות על מפעלי תעשייה באומסק ובטוליאטי"
    },
    {
     "name": "גבול צפון-מזרח (בלגורוד ובריאנסק)",
     "status": "חילופי אש ותקיפות כטב\"מים מתמשכות על מבנים ותשתיות"
    },
    {
     "name": "מזרח אוקראינה (דונייצק וחרקוב)",
     "status": "תקיפות אוויריות ופגיעות כטב\"מים במבנים אזרחיים ומוסדות"
    },
    {
     "name": "דרום אוקראינה (אולשקי וחרסון)",
     "status": "הסכמה על הפוגה לצורך פינוי וסיוע הומניטרי"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10250043-01",
     "title": "תקיפות כטב\"מים אוקראיניות בעומק שטח רוסיה ובמחוז אומסק בסיביר",
     "summary": "כלי טיס בלתי מאוישים אוקראיניים פגעו במפעל הכימי אומסקי קאוצ'וק ובמחסן באומסק שבסיביר במרחק של כאלפיים וחמש מאות קילומטרים מהגבול, וגרמו לשריפות במתחם הייצור.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:33:00+00:00",
     "last_update_at": "2026-10-24T16:48:06+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת והטענה להשמדת מחסן ומפעל כימי במלואם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-reportedly-strike-russian-targets-2-500-kilometers-from-border/",
       "published_at": "2026-10-24T16:48:06+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177846-drones-attack-industrial-hub-in-russias-omsk-social-media.html",
       "published_at": "2026-10-24T16:07:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48892",
       "published_at": "2026-10-24T15:33:45+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48889",
       "published_at": "2026-10-24T14:44:41+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059557/",
       "published_at": "2026-10-24T14:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אומסק, רוסיה",
       "lat": 54.9914,
       "lon": 73.3715
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-02",
     "title": "תקיפות אוקראיניות במחוזות בלגורוד ובריאנסק ברוסיה",
     "summary": "פגיעות כטב\"מים וארטילריה גרמו לנפגעים ולנזק למרכזי קניות וכלי רכב באזור בלגורוד, שבוקינו וקלימובו שברוסיה.",
     "axis": "גבול רוסיה-אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T17:36:39+00:00",
     "last_update_at": "2026-10-24T23:50:00+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל והיקף הנזק המדויק למבנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://tass.com/politics/2207373",
       "published_at": "2026-10-24T23:50:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://kyivindependent.com/massive-ukrainian-drone-attack-hits-shopping-center-in-russias-belgorod-oblast-locals-say/",
       "published_at": "2026-10-24T23:27:09+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://tass.com/politics/2207345",
       "published_at": "2026-10-24T20:03:27+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://tass.com/emergencies/2207321",
       "published_at": "2026-10-24T17:36:39+00:00"
      }
     ],
     "places": [
      {
       "name": "בלגורוד, רוסיה",
       "lat": 50.5956,
       "lon": 36.5873
      },
      {
       "name": "שבקינו, רוסיה",
       "lat": 50.4049,
       "lon": 36.8797
      },
      {
       "name": "קלימובו, רוסיה",
       "lat": 52.3791,
       "lon": 32.1971
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-03",
     "title": "מתקפות כטב\"מים וטילים רוסיות על מחוז דניפרופטרובסק",
     "summary": "פגיעות של כלי טיס בלתי מאוישים רוסיים במבנה מגורים ובחנות מכולת במחוז דניפרופטרובסק גרמו להרוגים ולפצועים, בהם ילדים.",
     "axis": "דניפרופטרובסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T15:08:00+00:00",
     "last_update_at": "2026-10-24T21:42:59+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_548c199d57c420ca",
       "url": "https://kyivindependent.com/deadly-russian-drone-strike-targets-apartment-in-dnipropetrovsk-oblast-killing-3-injuring-12/",
       "published_at": "2026-10-24T21:42:59+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_548c199d57c420ca",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059558/",
       "published_at": "2026-10-24T15:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניקופול, אוקראינה",
       "lat": 47.5692,
       "lon": 34.3917
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-04",
     "title": "פגיעות רוסיות במחוז חרקוב",
     "summary": "מתקפות של רחפנים ופצצות על יעדים בעיר חרקוב, בפרבר בזלודבקה ובעיר לוזובה גרמו להרוגים, לפצועים ולשריפה במחסן מסחרי.",
     "axis": "חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:28:00+00:00",
     "last_update_at": "2026-10-24T21:01:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b851f4b9424b8989",
       "url": "https://www.ukrinform.net/rubric-ato/4177887-russian-drone-attack-on-kharkiv-kills-one-person-and-injures-others.html",
       "published_at": "2026-10-24T21:01:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b851f4b9424b8989",
       "url": "https://www.ukrinform.net/rubric-ato/4177872-russian-attack-sparks-warehouse-fire-in-kharkiv-suburb.html",
       "published_at": "2026-10-24T18:32:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b851f4b9424b8989",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059556/",
       "published_at": "2026-10-24T14:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "לוזובה, אוקראינה",
       "lat": 48.8842,
       "lon": 36.316
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-05",
     "title": "הסכם על הפוגה הומניטרית בעיר הכבושה אולשקי",
     "summary": "נציגי זכויות האדם של אוקראינה ורוסיה תיאמו פרטים להפסקת פעולות צבאיות והכנסת סיוע הומניטרי ופינוי אזרחים באולשקי שבאזור חרסון.",
     "axis": "חרסון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T01:20:54+00:00",
     "last_update_at": "2026-10-24T18:02:15+00:00",
     "what_is_not_verified": "מועד היישום המדויק בשטח והיקף הסיוע שיסופק בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_1e6e981238c873f3",
       "url": "https://tass.com/politics/2207325",
       "published_at": "2026-10-24T18:02:15+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_be739f59130a36ed",
       "url": "https://www.ukrinform.net/rubric-society/4177862-lubinets-discusses-details-of-oleshky-humanitarian-mission-with-russian-ombudswoman.html",
       "published_at": "2026-10-24T16:59:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_1e6e981238c873f3",
       "url": "https://kyivindependent.com/european-parliament-vice-president-ends-hunger-strike-following-oleshky-ceasefire-announcement/",
       "published_at": "2026-10-24T14:22:27+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
       "published_at": "2026-10-24T01:20:54+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-06",
     "title": "מחלוקת והגבלות על שירות סטארלינק בצבא אוקראינה",
     "summary": "אילון מאסק טען כי צבא אוקראינה הפר את תנאי השירות המסחרי בעת שימוש בסטארלינק למתקפות כטב\"מים, בעוד קייב הודיעה כי החיבור התייצב לאחר שיבושים.",
     "axis": "סיוע ותקשורת צבאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T12:12:40+00:00",
     "last_update_at": "2026-10-24T21:25:58+00:00",
     "what_is_not_verified": "האמצעים הטכניים המדויקים שננקטו להגבלת הרשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-zelenskyy-military-starlink-satellite-connection-stable-after-restrictions",
       "published_at": "2026-10-24T21:25:58+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2207339",
       "published_at": "2026-10-24T19:35:32+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48903",
       "published_at": "2026-10-24T19:34:12+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cwkg5md14j8go?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-24T12:12:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10250043-07",
     "title": "עסקאות אנרגיה וחשד להפרת סנקציות במיזם גז באלסקה",
     "summary": "חברת הגז הרוסית נובאטק מימנה בחשאי מיזם גז טבעי באלסקה, נושא שעלה במגעים שקיימו שליחים אמריקאים בקרמלין במסגרת שיחות הקשורות למלחמה.",
     "axis": "משא ומתן וסנקציות",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T01:20:54+00:00",
     "last_update_at": "2026-10-25T00:29:15+00:00",
     "what_is_not_verified": "האם הממשל האמריקאי אישר או יאשר את השותפות והחרגת הסנקציות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://kyivindependent.com/sanctioned-russian-energy-giant-secretly-funded-us-gas-project-nyt-reports/",
       "published_at": "2026-10-25T00:29:15+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://t.me/alexmehacarmel/48893",
       "published_at": "2026-10-24T15:45:06+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
       "published_at": "2026-10-24T01:20:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10250043-08",
     "title": "הטלת סנקציות אוקראיניות על תעשיית הנשק הרוסית",
     "summary": "אוקראינה הטילה סנקציות על חמישים ואחד אזרחים רוסים וארבעים וארבעה תאגידים המעורבים בייצור ואספקת ציוד לטילים ארוכי טווח.",
     "axis": "מדיני וסנקציות",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T12:12:05+00:00",
     "last_update_at": "2026-10-24T12:12:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-sanctions-russian-arms-suppliers-as-moscow-ramps-up-attacks/",
       "published_at": "2026-10-24T12:12:05+00:00"
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
    "טענת מאסק על מידת השפעת סגירת הפרצה בסטארלינק על הפעילות הצבאית האוקראינית",
    "היקף ההרס המלא במפעל הכימי באומסק",
    "דיווחים על מקור הכטב\"ם שנמצא בלטביה ומידת הקשר שלו ללוחמה אלקטרונית",
    "השלמת עסקת ייצוא הגז מאלסקה בשיתוף החברה הרוסית"
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
      "הגנה על המרחב האווירי ופגיעה בתשתיות הצבאיות והתעשייתיות של רוסיה",
      "הבטחת סיוע הומניטרי לאזרחים באזורים הכבושים כמו אולשקי",
      "שמירה על יציבות מערכות התקשורת הלוויינית בחזית"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומורלי על רוסיה באמצעות פגיעה בעומק שטחה",
      "הרחבת הסנקציות על תעשיית הטילים כדי לפגוע בכושר הייצור הרוסי"
     ],
     "forecast": [
      "המשך מאמצים לפתח ולרכוש כטב\"מים ארוכי טווח מונעי סילון",
      "הסתמכות גוברת על מערכות תקשורת ממשלתיות חלופיות למניעת מגבלות מסחריות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה ביעדים צבאיים ומניעת תקיפות על שטחה הריבוני",
      "קיום מחויבויות להפוגה הומניטרית נקודתית באולשקי"
     ],
     "inferred": [
      "ניסיון להתיש את מערכות ההגנה האווירית של אוקראינה באמצעות מטחי כטב\"מים נרחבים",
      "מינוף עסקאות דלק ואנרגיה להקלה בעיצומי המערב במסגרת שיחות מדיניות"
     ],
     "forecast": [
      "המשך תקיפת יעדי עורף באוקראינה לצד חיזוק שיתוף הפעולה הצבאי-טכנולוגי עם קוריאה הצפונית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwkg5md14j8go?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-sanctions-russian-arms-suppliers-as-moscow-ramps-up-attacks/",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059556/",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2207339",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48893",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-society/4177862-lubinets-discusses-details-of-oleshky-humanitarian-mission-with-russian-ombudswoman.html",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-24T05:00:36+00:00",
  "changes": {
   "UKRAINE-10250043-01": {
    "kind": "new"
   },
   "UKRAINE-10250043-02": {
    "kind": "new"
   },
   "UKRAINE-10250043-03": {
    "kind": "new"
   },
   "UKRAINE-10250043-04": {
    "kind": "possible",
    "prev": "פגיעת כלי טיס בלתי מאויש בתחנת דלק בחרקוב",
    "score": 0.633
   },
   "UKRAINE-10250043-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "הסכם הפסקת אש הומניטרית בעיר אולשקי",
    "score": 1.0
   },
   "UKRAINE-10250043-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "המשך הגבלות המהירות על רשת סטארלינק באוקראינה",
    "score": 0.65
   },
   "UKRAINE-10250043-07": {
    "kind": "possible",
    "prev": "משלוח מכליות דלק מרוסיה לכיוון צפון אמריקה",
    "score": 0.4
   },
   "UKRAINE-10250043-08": {
    "kind": "possible",
    "prev": "תקיפת טילים רוסית על קייב",
    "score": 0.633
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-24T1410__north-202610241410.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-24T14:10:50+00:00",
   "window": {
    "from": "2026-10-23T14:10:50+00:00",
    "to": "2026-10-24T14:10:50+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610241410"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות צבאית קרקעית והנדסית של כוחות צה\"ל בדרום לבנון לצד נוכחות ופעילות ביטחונית בדרום סוריה, שמעוררות הפגנות ומחאות נרחבות בשטח הסורי. במקביל, בצד הלבנוני מתגלעות מחלוקות פוליטיות חריפות סביב פעילות חזבאללה ואחסון אמצעי לחימה, בשעה שמתרבים דיווחים על שאיפת הארגון להימנע מחידוש מלחמה כוללת.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות מתמשכת של צה\"ל הכוללת סלילת צירים, פיצוצים וירי ארטילרי במוקדים שונים."
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "חיכוך פוליטי גובר סביב שאלת פירוק התשתיות הצבאיות של חזבאללה ותפיסות אמל\"ח."
    },
    {
     "name": "דרום סוריה ורמת הגולן",
     "status": "מתיחות סביב שהיית כוחות צה\"ל ברצועת ביטחון, מחאות עממיות ותסיסה ביטחונית בהובלת מיליציות מקומיות."
    }
   ],
   "events": [
    {
     "id": "NORTH-10241410-01",
     "title": "פעילות צבאית ועבודות הנדסיות של כוחות צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו פעולות פיצוץ והריסה בעיירות א-טייבה ואל-חיאם, ירו פגזי ארטילריה ופצצות תאורה לעבר כפרים שונים, והפעילו דחפורים לסלילת ציר תנועה מאזור סדאנה לעבר ואדי שבעא.",
     "axis": "חזית ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T11:29:48+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T11:29:48+00:00",
     "last_update_at": "2026-10-24T12:02:33+00:00",
     "what_is_not_verified": "היקף הנזקים המדויק ומטרות סלילת הציר אינם מאומתים מגורם ישראלי רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f6d8b5d26a70fd1b",
       "url": "https://english.almanar.com.lb/article/142262/",
       "published_at": "2026-10-24T12:02:33+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_91bda05d3e91f8f9",
       "url": "https://english.almanar.com.lb/article/142227/",
       "published_at": "2026-10-24T11:29:48+00:00"
      }
     ],
     "places": [
      {
       "name": "שבעא, לבנון",
       "lat": 33.3445,
       "lon": 35.7494
      },
      {
       "name": "אל-חיאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      }
     ]
    },
    {
     "id": "NORTH-10241410-02",
     "title": "מחלוקת בממשלת לבנון סביב פרשת חומרי נפץ של חזבאללה",
     "summary": "עימות פרץ בישיבת ממשלת לבנון בעקבות יוזמה להעביר למועצת המשפט חקירה הנוגעת לתפיסת מאות קילוגרמים של חומרי חבלה באזור דהר אל-בידר, צעד שנתקל בהתנגדות שרים המזוהים עם חזבאללה.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T14:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:00:00+00:00",
     "last_update_at": "2026-10-23T14:10:50+00:00",
     "what_is_not_verified": "היעד המבצעי של חומרי החבלה וההשלכות המשפטיות הישירות על ארגון חזבאללה אינם מאומתים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/964415/dahr-al-baidar-explosives-case-sparks-cabinet-dispute-over-judicial-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964415",
       "published_at": "2026-10-23T14:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10241410-03",
     "title": "הפגנות ומחאות ברחבי סוריה נגד פעילות כוחות צה\"ל בדרום המדינה",
     "summary": "אזרחים הפגינו במספר מוקדים בדמשק, חומס ודרעא במחאה על חדירות ופעולות של צה\"ל במחוזות דרעא וקוניטרה, וכן על כניסת כוחות לאזור החיץ ברמת הגולן.",
     "axis": "חזית ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T03:26:45+00:00",
     "last_update_at": "2026-10-24T10:19:03+00:00",
     "what_is_not_verified": "מידת המעורבות המאורגנת של השלטון הסורי החדש בארגון ההפגנות אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132467",
       "published_at": "2026-10-24T10:19:03+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21695477",
       "published_at": "2026-10-24T08:22:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/protest-rallies-held-syria-against-repeated-israeli-incursions-attacks",
       "published_at": "2026-10-24T03:26:45+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-10241410-04",
     "title": "הסלמה ומתיחות ביטחונית במחוז א-סווידאא שבדרום סוריה",
     "summary": "מיליציית המשמר הלאומי בהנהגת השיח' הדרוזי חכמת אלהג'רי ביצעה תקיפת כטב\"ם נגד מחסום של מנגנוני הביטחון הסוריים, לצד האשמות על קבלת נשק ותמיכה מישראל וביקורת מצד השליח האמריקני.",
     "axis": "הזירה הפנים-סורית והגבול הדרומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T12:56:27+00:00",
     "last_update_at": "2026-10-23T18:33:01+00:00",
     "what_is_not_verified": "היקף אספקת הנשק הישראלי הנטענת לקבוצות הדרוזיות אינו מאומת באופן רשמי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132439",
       "published_at": "2026-10-23T18:33:01+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israeli-agenda-behind-suweida-unrest-analysts-warn",
       "published_at": "2026-10-23T12:56:27+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10241410-05",
     "title": "דיווח על העברת מסר מחזבאללה בדבר הימנעות מהתערבות בעימות בין ישראל לאיראן",
     "summary": "לפי דיווחים בעיתונות הערבית, חזבאללה העביר מסר ליו\"ר הפרלמנט הלבנוני כי אין בכוונתו לפתוח במערכה נוספת מול ישראל אם יתחדשו העימותים הישירים בין ישראל לאיראן.",
     "axis": "חזית ישראל - לבנון / איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:05:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:05:45+00:00",
     "last_update_at": "2026-10-24T14:05:45+00:00",
     "what_is_not_verified": "אמיתות העברת המסר לא אושרה על ידי חזבאללה או גורם רשמי בלבנון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
       "published_at": "2026-10-24T14:05:45+00:00"
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
     "id": "NORTH-10241410-06",
     "title": "טיסות איסוף מודיעין באמצעות כטב\"מים מעל ביירות ופרבריה",
     "summary": "כלי טיס בלתי מאוישים נצפו בגובה נמוך בשמי ביירות והדאחייה, תוך דיונים פרשניים בשאלה האם מדובר בשינוי דפוס לקראת הסלמה או בהמשך איסוף שגרתי והפעלת לחץ פסיכולוגי.",
     "axis": "חזית ישראל - לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T17:34:45+00:00",
     "last_update_at": "2026-10-23T17:34:45+00:00",
     "what_is_not_verified": "לא אומת האם חל גידול כמותי בפועל בפעילות הטיסות או כוונות מיידיות לתקיפה רחבה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/are-israels-drones-signalling-new-escalation-hezbollah",
       "published_at": "2026-10-23T17:34:45+00:00"
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
    "נכונות הדיווח על התחייבות חזבאללה שלא לפעול במקרה של עימות ישראלי-איראני.",
    "הטענה כי צה\"ל הקים מנחת מסוקים חדש באזור הכפר יחמר א-שקיף.",
    "היקף אספקת אמצעי הלחימה הישראליים הנטענת לקבוצות חמושות באזור א-סווידאא.",
    "הערכות לגבי כוונות מבצעיות מיידיות לתקיפה רחבה בעקבות טיסות כטב\"מים מעל ביירות."
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
      "החזקת אזור ביטחון בדרום לבנון עד לפירוק חזבאללה מנשקו והסרת תשתיותיו הצבאיות.",
      "שמירה על אזור ביטחון בדרום סוריה לצורך הגנה ומניעת התבססות איומים."
     ],
     "inferred": [
      "ביסוס תשתיות צבאיות וצירי תנועה בשטח דרום לבנון לשיפור השליטה והמעקב.",
      "ניצול המתיחויות הפנימיות בדרום סוריה ליצירת אזורי השפעה וחיץ מול השלטון המרכזי."
     ],
     "forecast": [
      "המשך פעילות הנדסית וכתישת תשתיות מקומיות בקו המגע ללא כניסה למהלך התקפי נרחב בטווח המיידי."
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "התנגדות לניסיונות שלטוניים בלבנון להפליל את פעילותו הצבאית או להעמידו לדין בגין החזקת אמל\"ח."
     ],
     "inferred": [
      "רצון להימנע מחידוש מלחמה רחבה מול ישראל בעקבות שחיקת יכולותיו והלחץ הפוליטי הפנימי בלבנון.",
      "שימור שרידי מערכי הלחימה והשפעתו על מוקדי קבלת ההחלטות בביירות."
     ],
     "forecast": [
      "המשך בלימת יוזמות פירוק מנשק בלבנון תוך הימנעות מיוזמה התקפית יזומה נגד ישראל."
     ]
    },
    {
     "actor": "סוריה (השלטון החדש)",
     "declared": [
      "התנגדות עקרונית לפגיעה בריבונות הסורית ודרישה לנסיגת ישראל מאזור הגולן, קוניטרה ודרעא."
     ],
     "inferred": [
      "תיעול הזעם הציבורי למחאות נגד ישראל כדי להפחית לחצים פנימיים ולבסס לגיטימציה שלטונית.",
      "בלימת התקוממויות מקומיות של מיליציות בדרום המדינה המאיימות על יציבות המשטר."
     ],
     "forecast": [
      "המשך מחאות והצהרות לוחמניות לצד ניסיונות להשתלט על מוקדי המרידה בדרום סוריה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/142227/",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21695477",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/964415/dahr-al-baidar-explosives-case-sparks-cabinet-dispute-over-judicial-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964415",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/protest-rallies-held-syria-against-repeated-israeli-incursions-attacks",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/are-israels-drones-signalling-new-escalation-hezbollah",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132439",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
     "accessed_at": "2026-10-24T14:10:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-23T23:42:39+00:00",
  "changes": {
   "NORTH-10241410-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הפגזות ארטילריות ותקיפות ישראליות בדרום לבנון",
    "score": 0.817
   },
   "NORTH-10241410-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מחלוקת בממשלת לבנון על הפניית תיק פיצוצי דהר אל-בידר למועצה המשפטית",
    "score": 1.0
   },
   "NORTH-10241410-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הפגנות בסוריה נגד חדירות ותקיפות צה\"ל בדרום המדינה",
    "score": 0.65
   },
   "NORTH-10241410-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרות שגריר ארה\"ב בטורקיה לגבי המנהיג הדרוזי בסוריה ויחסי ישראל-טורקיה",
    "score": 1.0
   },
   "NORTH-10241410-05": {
    "kind": "new"
   },
   "NORTH-10241410-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "פעילות כלי טיס בלתי מאוישים ישראליים מעל ביירות וסביבתה",
    "score": 1.0
   }
  }
 }
};
