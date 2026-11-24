/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-24T0051__yemen-202611240051.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-24T00:51:30+00:00",
   "window": {
    "from": "2026-11-23T00:51:30+00:00",
    "to": "2026-11-24T00:51:30+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611240051"
   },
   "summary": "הזירה בתימן וסביבתה כוללת עימותים מתמשכים בין החות'ים לבין הקואליציה בהובלת סעודיה וממשלת תימן המוכרת, לצד ניסיונות תקיפה חות'יים לעבר סעודיה ופעילות התרחבות פנימית של החות'ים במחוזות כמו תאיז. במקביל, מתנהלים דיווחים על מעורבות אזורית פוטנציאלית ופעילות למניעת חדירות באזורים שכנים.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (תאיז, לחג' וחודיידה)",
     "status": "פעיל"
    },
    {
     "name": "חזית סעודיה-תימן (שיגורים ותקיפות אוויריות)",
     "status": "פעיל"
    },
    {
     "name": "חזית הים האדום ומצר באב אל-מנדב",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11240051-01",
     "title": "יירוט כטב\"ם חות'י לכגאה סעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדת כטב\"ם ששוגר על ידי המיליציה החות\"ית לכיוון סעודיה.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T23:30:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T23:30:48+00:00",
     "last_update_at": "2026-11-23T23:30:48+00:00",
     "what_is_not_verified": "פרטים נוספים מעבר להודעת הקואליציה אינם מאומתים ממקור נוסף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3567d8e979d41309",
       "url": "https://www.sabanew.net/viewstory/156310",
       "published_at": "2026-11-23T23:30:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11240051-02",
     "title": "תקיפה אווירית של הקואליציה בעיר חודיידה",
     "summary": "ממשלת החות'ים דיווחה כי תקיפה של הקואליציה בהובלת סעודיה פגעה במתקן תקשורת במחוז חודיידה וגרמה להרוגים ופצועים.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T07:44:03+00:00",
     "last_update_at": "2026-11-23T18:04:42+00:00",
     "what_is_not_verified": "הטענות על מספר הנפגעים והנזק אינן מאומתות באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-run-government-says-saudi-airstrikes-killed-injured-civilians",
       "published_at": "2026-11-23T18:04:42+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-say-saudi-attack-kills-17",
       "published_at": "2026-11-23T16:24:20+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-and-us-trade-threats-tankers-burn-hormuz",
       "published_at": "2026-11-23T07:44:03+00:00"
      }
     ],
     "places": [
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11240051-03",
     "title": "פגיעה באוטובוסים ובכלי רכב במחוז לחג' באמצעות תקיפה",
     "summary": "התקיימו דיווחים סותרים לגבי הגורם האחראי לתקיפת אוטובוסים ומשאיות מסחר במחוז לחג', כאשר ממשלת תימן הנתמכת בידי סעודיה מאשימה את החות'ים, ומנגד החות'ים מאשימים את תקיפות הקואליציה הסעודית.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T14:28:39+00:00",
     "last_update_at": "2026-11-23T19:27:43+00:00",
     "what_is_not_verified": "זהות התוקף המדויק ומספר הנפגעים המדויקים אינם מאומתים ממקור עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156308",
       "published_at": "2026-11-23T19:27:43+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-run-government-says-saudi-airstrikes-killed-injured-civilians",
       "published_at": "2026-11-23T18:04:42+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-backed-yemeni-government-civilians-killed-injured-houthi-attack",
       "published_at": "2026-11-23T16:30:04+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-say-saudi-attack-kills-17",
       "published_at": "2026-11-23T16:24:20+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156287",
       "published_at": "2026-11-23T14:28:39+00:00"
      }
     ],
     "places": [
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-11240051-04",
     "title": "שיגור טיל בליסטי לעבר מערב סעודיה ויירוטו",
     "summary": "הקואליציה דיווחה כי יירוט והשמדת טיל בליסטי ששוגר על ידי החות'ים לעבר האזור המערבי של סעודיה.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T00:21:32+00:00",
     "last_update_at": "2026-11-23T16:24:20+00:00",
     "what_is_not_verified": "הנזק המדויק בשטח אינו מאומת ממקור עצמאי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-say-saudi-attack-kills-17",
       "published_at": "2026-11-23T16:24:20+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-attack-saudi-arabias-rabigh-oil-refinery",
       "published_at": "2026-11-23T00:21:32+00:00"
      }
     ],
     "places": [
      {
       "name": "רביג', סעודיה",
       "lat": 22.799,
       "lon": 39.0336
      }
     ]
    },
    {
     "id": "YEMEN-11240051-05",
     "title": "שיגור טיל בליסטי מצדה ונפילה בדמר",
     "summary": "הכוחות אלמסלחה של ממשלת תימן דיווחו על זיהוי שיגור טיל בליסטי חות'י מסדה שנפל בדמאר.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T16:16:22+00:00",
     "last_update_at": "2026-11-23T16:16:22+00:00",
     "what_is_not_verified": "פרטי הנפילה והנזק אינם מאומתים ממקור ראשוני נייטרלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156294",
       "published_at": "2026-11-23T16:16:22+00:00"
      }
     ],
     "places": [
      {
       "name": "צדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "דמר, תימן",
       "lat": 14.543,
       "lon": 44.4001
      }
     ]
    },
    {
     "id": "YEMEN-11240051-06",
     "title": "תקיפה נטענת על בית זיקוק לנפט ברביג'",
     "summary": "החות'ים טענו כי ביצעו פעולה שפעה ישירות על בית הזיקוק לנפט רביג' שבחוף הים האדום בסעודיה.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T00:21:32+00:00",
     "last_update_at": "2026-11-23T00:51:30+00:00",
     "what_is_not_verified": "היקף הנזק לא אושר על ידי הרשויות בסעודיה וסרטוני התיעוד לא אומתו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-attack-saudi-arabias-rabigh-oil-refinery",
       "published_at": "2026-11-23T00:21:32+00:00"
      }
     ],
     "places": [
      {
       "name": "רביג', סעודיה",
       "lat": 22.799,
       "lon": 39.0336
      }
     ]
    },
    {
     "id": "YEMEN-11240051-07",
     "title": "סיכול ניסיונות חדירה של חוליות חות'יות מירדן לישראל",
     "summary": "דווח כי סוכלו מספר ניסיונות של חוליות חות'יות לחדור לישראל דרך ירדן, כולל מעצר של חוליית 'בריגדות המוות' בעמאן.",
     "axis": "זירת תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T15:19:09+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-23T15:19:09+00:00",
     "last_update_at": "2026-11-23T15:19:09+00:00",
     "what_is_not_verified": "פרטי הפעילות החשאית והדיווח אינם מאומתים בהודעה רשמית של ממשלת ישראל או ירדן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49854",
       "published_at": "2026-11-23T15:19:09+00:00"
      }
     ],
     "places": [
      {
       "name": "עמאן, ירדן",
       "lat": 31.9516,
       "lon": 35.924
      }
     ]
    }
   ],
   "not_verified": [
    "פריסת 10,000 חיילים סודאנים בתימן לסיוע לסעודיה",
    "הגעת יועצים צבאיים סורים או מומחי רחפנים סורים לתימן לסיוע לסעודיה",
    "דיווחים על היקף הנזק המדויק בתקיפות על מתקני הנפט ברביג' ובחודיידה",
    "פרטי סיכול ניסיונות החדירה של חוליות חות'יות מירדן לישראל"
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
     "value": 3.3498,
     "unit": "ILS",
     "change_pct": 0.21,
     "source_id": "src_ecb",
     "as_of": "2026-11-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "פגיעה בתשתיות אנרגיה וביטחון בסעודיה",
      "תמיכה בפעילות נגד קואליציה וגורמים יריבים בתימן"
     ],
     "inferred": [
      "הרחבת ההשפעה האזורית והפעלת לחץ על ישראל וסעודיה",
      "הרחבת גיוס כוח אדם מקומי באזורי שליטה כמו תאיז"
     ],
     "forecast": [
      "המשך שיגורי טילים וכטב\"מים לעבר יעדים בסעודיה",
      "המשך מאמצי גיוס לחיזוק הקווים הקדמיים בתימן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "יירוט איומים אוויריים והגנה על תשתיות הממלכה",
      "בלימת ההתקדמות והפעילות של המיליציה החות'ית"
     ],
     "inferred": [
      "שמירה על יציבות שלטונית בתימן ומניעת שליטה מוחלטת של החות'ים במוקדי אוכלוסייה",
      "בחינת שיתופי פעולה אזוריים להגברת הלחץ על החות'ים"
     ],
     "forecast": [
      "המשך תקיפות אוויריות נגד ריכוזי חות'ים ומתקנים",
      "חיזוק אמצעי ההגנה האווירית והמודיעין"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-backed-yemeni-government-civilians-killed-injured-houthi-attack",
     "accessed_at": "2026-11-24T00:51:30+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemens-houthis-attack-saudi-arabias-rabigh-oil-refinery",
     "accessed_at": "2026-11-24T00:51:30+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156294",
     "accessed_at": "2026-11-24T00:51:30+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49854",
     "accessed_at": "2026-11-24T00:51:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-23T11:11:58+00:00",
  "changes": {
   "YEMEN-11240051-01": {
    "kind": "new"
   },
   "YEMEN-11240051-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה אווירית של הקואליציה על מבנה תקשורת באל-חודיידה",
    "score": 1.0
   },
   "YEMEN-11240051-03": {
    "kind": "new"
   },
   "YEMEN-11240051-04": {
    "kind": "possible",
    "prev": "יירוט כלי טיס בלתי מאויש ששוגר לעבר דרום סעודיה",
    "score": 0.467
   },
   "YEMEN-11240051-05": {
    "kind": "new"
   },
   "YEMEN-11240051-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "טענת החות'ים לתקיפת בית הזיקוק ראביג' בסעודיה ויירוט טיל בליסטי",
    "score": 1.0
   },
   "YEMEN-11240051-07": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-23T0040__iran-202611230040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-23T00:40:53+00:00",
   "window": {
    "from": "2026-11-22T00:40:53+00:00",
    "to": "2026-11-23T00:40:53+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611230040"
   },
   "summary": "הזירה מאופיינת במתיחות צבאית נמשכת לצד מגעים עקיפים והצהרות איום הדדיות בין איראן לבין ארה\"ב וישראל. איראן ממשיכה לפעול מול בסיסים במפרץ ותשתיות ימיות, בעוד וושינגטון מאיימת בחידוש התקיפות ואכיפת מצור ימי, ומדינות המפרץ מביעות חשש כבד מהסלמה.",
   "fronts": [
    {
     "name": "החזית הימית במפרץ ובמצר הורמוז",
     "status": "פעיל ומתוח"
    },
    {
     "name": "חזית המפרץ והמדינות השכנות",
     "status": "פעיל"
    },
    {
     "name": "החזית האיראנית הפנימית (משבר אנרגיה וכלכלה)",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-11230040-01",
     "title": "תקיפה באתר תעשייתי בבחריין",
     "summary": "בחריין דיווחה כי פגיעה איראנית באתר תעשייתי אזרחי גרמה לפציעתם של שני בני אדם, בהם תושב מקומי ואזרח זר.",
     "axis": "איראן מול המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T11:46:28+00:00",
     "last_update_at": "2026-11-22T18:40:54+00:00",
     "what_is_not_verified": "היקף הנזק המלא והאחריות המדויקת נתונים במחלוקת בין הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_b79bed2078e518be",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/bahrain-says-iranian-strike-wounds-two-one-critically",
       "published_at": "2026-11-22T18:40:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_90997303cc125af7",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-strike-wounds-two-bahrain-saudi-condemns-criminal-attacks",
       "published_at": "2026-11-22T18:30:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_ef74af6c5e78a96d",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-qatar-join-condemnation-iran-attack-bahrain",
       "published_at": "2026-11-22T13:27:42+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_ab4e08dc0d8b4380",
       "url": "https://www.al-monitor.com/originals/2026/11/bahrain-says-iran-strikes-industrial-facility-air-defences-intercept-attacks",
       "published_at": "2026-11-22T11:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "אי סיתרה, בחריין",
       "lat": 26.148,
       "lon": 50.6315
      },
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      }
     ]
    },
    {
     "id": "IRAN-11230040-02",
     "title": "פגיעת מוקשים ימיים במכליות נפט מזרחיות למצר הורמוז",
     "summary": "צי איראן דיווח ששתי מכליות ענק נפגעו ממוקשים ימיים והעלו אש לאחר שנכנסו לאזור אסור ממזרח למצר הורמוז.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T16:43:01+00:00",
     "last_update_at": "2026-11-22T23:59:22+00:00",
     "what_is_not_verified": "הנסיבות המדויקות של פגיעת המוקשים וזהות כלי השיט במדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_5a3c98123284fa91",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/22/iran-war-live-tankers-set-ablaze-in-hormuz-as-irgc-warns-of-unrest-threat?traffic_source=rss",
       "published_at": "2026-11-22T23:59:22+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_f8599be2608172c3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-supertankers-hit-mines-near-hormuz-iranian-navy-says",
       "published_at": "2026-11-22T17:13:51+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_aa0a3fa2ac3d41a5",
       "url": "https://en.irna.ir/news/86329579/Two-more-violating-oil-tankers-catch-fire-in-Strait-of-Hormuz",
       "published_at": "2026-11-22T16:43:01+00:00"
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
     "id": "IRAN-11230040-03",
     "title": "חשיפת משגר טילים חדש באיראן",
     "summary": "איראן חשפה משגר המסוגל לשגר שני טילים בו-זמנית במסגרת סיור של בכירים בבסיס תת-קרקעי.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T18:20:30+00:00",
     "last_update_at": "2026-11-22T18:20:30+00:00",
     "what_is_not_verified": "יכולותיו המבצעיות האמיתיות של המשגר החדש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4b64795fe38ec3e9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-unveils-new-launcher-can-fire-two-missiles-once",
       "published_at": "2026-11-22T18:20:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11230040-04",
     "title": "הפרכת דיווחים על תנועת המכלית האיראנית Khat Shekan",
     "summary": "שירות המעקב TankerTrackers ותקשורת זרה קבעו כי הדיווחים על ניסיון פריצת מצור של מכלית איראנית התבססו על זיוף נתוני מעקב (AIS Spoofing) ושאין מכלית כזו.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T11:44:53+00:00",
     "last_update_at": "2026-11-22T12:19:42+00:00",
     "what_is_not_verified": "הזהות המלאה של הגורמים האחראים לזיוף הנתונים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_the_week_tankertrackers",
       "url": "https://t.me/alexmehacarmel/49818",
       "published_at": "2026-11-22T12:19:42+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_the_week_tankertrackers",
       "url": "https://t.me/abualiexpress/134045",
       "published_at": "2026-11-22T11:44:53+00:00"
      }
     ],
     "places": [
      {
       "name": "המפרץ הפרסי",
       "lat": 36.3237,
       "lon": 50.012
      }
     ]
    },
    {
     "id": "IRAN-11230040-05",
     "title": "הפסקות חשמל מתוזמנות ברחבי איראן",
     "summary": "איראן החלה בהפסקות חשמל מתוזמנות בשל מחסור בדלק ונזקים לתשתיות האנרגיה מהמלחמה.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T11:27:14+00:00",
     "last_update_at": "2026-11-22T13:17:58+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכלל תחנות הכוח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_8e57ea10e100ba90",
       "url": "https://www.iranintl.com/en/202611223193",
       "published_at": "2026-11-22T13:17:58+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_8e57ea10e100ba90",
       "url": "https://t.me/lelotsenzura/95105",
       "published_at": "2026-11-22T11:27:14+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה לפיה מומחים מצפון קוריאה ורוסיה מסייעים לכוחות בתימן דרך טיסות של חברת מהאן אייר אינה מאומתת ממקור ראשון.",
    "הדיווחים על פגיעת האמריקאים במיכלית נפט ועל נסיגת מיכלית שנייה אינם מאומתים.",
    "היקף הנזק המדויק באתרי הגרעין והטילים באיראן עקב התקיפות הקודמות אינו ברור."
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "המשכת דרך הדיפלומטיה להפסקת המלחמה",
      "יצירת הרתעה יציבה ומתמשכת נגד איומים"
     ],
     "inferred": [
      "שיקום יכולות טילים ושימוש בשלוחים באזור למרות התקיפות",
      "בחינת תגובות ארה\"ב דרך פעילות ימית ותקיפות במפרץ"
     ],
     "forecast": [
      "המשך מאמצי שיקום התשתיות הצבאיות תחת לחץ כלכלי פנימי",
      "תגובות נקודתיות במרחב הימי נגד מדיניות ארה\"ב"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "איום בחידוש התקיפות נגד איראן בתחילת השנה החדשה אם לא יושג הסכם",
      "הטבעת כל כשיט שינסה לפרוץ את המצור הימי"
     ],
     "inferred": [
      "שמירה על לחץ צבאי וכלכלי הדוק על טהרן",
      "מניעת הברחות נפט והתעצמות איראנית"
     ],
     "forecast": [
      "אפשרות ממשית לחידוש המערכה הצבאית אם המשא ומתן ייכשל",
      "אכיפה קפדנית של המצור הימי"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על מוכנות גבוהה לחידוש הלחימה מול איראן"
     ],
     "inferred": [
      "היערכות לאפשרות של הסלמה רב-זירתית הכוללת את שלוחות איראן",
      "תיאום הדוק עם ארה\"ב בנוגע לאיומי הגרעין והטילים"
     ],
     "forecast": [
      "המשך כוננות גבוהה ושחיקת כוחות סדיר וקבע עקב המתיחות",
      "היערכות לתגובה אם איראן תחדש את התקיפות הישירות או דרך שליחים"
     ]
    },
    {
     "actor": "מדינות המפרץ (בחריין, סעודיה, קטאר)",
     "declared": [
      "גינוי חריף של התקיפות האיראניות נגד מתקנים אזרחיים ותשתיות",
      "סולידריות מלאה עם בחריין מול פגיעה בריבונותה"
     ],
     "inferred": [
      "חשש עמוק מהיסחפות לגל חדש של עימותים אזוריים",
      "הפעלת לחץ מדיני להשגת הסדר שימנע חידוש מלחמה כוללת"
     ],
     "forecast": [
      "דרישה להגברת ההגנה האווירית והימית באזור",
      "המשך תיווך ולצידו קריאות להרגעת הרוחות מול טהרן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/22/iran-war-live-tankers-set-ablaze-in-hormuz-as-irgc-warns-of-unrest-threat?traffic_source=rss",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/bahrain-says-iran-strikes-industrial-facility-air-defences-intercept-attacks",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611223193",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86329579/Two-more-violating-oil-tankers-catch-fire-in-Strait-of-Hormuz",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-unveils-new-launcher-can-fire-two-missiles-once",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134045",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49818",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95105",
     "accessed_at": "2026-11-23T00:40:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-22T07:22:00+00:00",
  "changes": {
   "IRAN-11230040-01": {
    "kind": "new"
   },
   "IRAN-11230040-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פגיעה במכליות נפט במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11230040-03": {
    "kind": "new"
   },
   "IRAN-11230040-04": {
    "kind": "new"
   },
   "IRAN-11230040-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-24T1140__ukraine-202611241140.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-24T11:40:30+00:00",
   "window": {
    "from": "2026-11-23T11:40:30+00:00",
    "to": "2026-11-24T11:40:30+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611241140"
   },
   "summary": "הלחימה הקרקעית באוקראינה נותרה קפואה ברובה, אך המלחמה מתעצמת במרחב האווירי ובעומק שטחי שתי המדינות באמצעות מתקפות כטב\"מים וטילים רחבות היקף. רוסיה ממשיכה להטיל אש כבדה על תשתיות אנרגיה ואזורים עירוניים באוקראינה, בעוד אוקראינה מרחיבה את טווח הפעולה ההתקפי שלה ומבצעת תקיפות עומק חריגות, כולל בזירות בינלאומיות ובתוך שטח רוסיה. במקביל, אירועים חריגים כמו חדירת כטב\"ם לפולין מעלים את מפלס המתיחות מול נאט\"ו.",
   "fronts": [
    {
     "name": "חזית המזרח (דונבאס)",
     "status": "קפואה/לחימה קרקעית מוגבלת"
    },
    {
     "name": "חזית הדרום (זפוריז'ה, אודסה)",
     "status": "פעילה תחת תקיפות אוויריות וטילים"
    },
    {
     "name": "מרחב האוויר ועומק רוסיה",
     "status": "פעיל מאוד עם מתקפות כטב\"מים הדדיות"
    },
    {
     "name": "החזית המזרח-אירופאית (פולין ואסטוניה)",
     "status": "מתיחות גוברת עקב זליגת אמצעי לחימה וצעדי אבטחה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11241140-01",
     "title": "תקיפת רכבת אוקראינית במחוז ז'יטומיר",
     "summary": "רוסיה תקפה רכבת אוקראינית ותשתיות אנרגיה במחוז ז'יטומיר בלילה.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T10:21:00+00:00",
     "last_update_at": "2026-11-24T11:36:30+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_fdf054c78e7193e0",
       "url": "https://t.me/alexmehacarmel/49880",
       "published_at": "2026-11-24T11:36:30+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_fdf054c78e7193e0",
       "url": "https://www.ukrinform.net/rubric-ato/4188006-zelensky-russia-focused-its-attacks-on-zhytomyr-region-last-night-defenses-worked.html",
       "published_at": "2026-11-24T10:21:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11241140-02",
     "title": "פגיעה בבית חולים עירוני באודסה",
     "summary": "מתקפה רוסית פגעה בבניין בית חולים עירוני באודסה.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T11:36:00+00:00",
     "last_update_at": "2026-11-24T11:36:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_8934e795d121807d",
       "url": "https://www.ukrinform.net/rubric-ato/4188038-hospital-damaged-in-russian-attack-on-odesa.html",
       "published_at": "2026-11-24T11:36:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-11241140-03",
     "title": "תקיפת כטב\"ם אוקראיני על ספינה רוסית בלוב",
     "summary": "נשיא אוקראינה אישר שאוקראינה ביצעה מתקפת כטב\"ם נגד ספינת מטען/מלחמה רוסית בנמל בבנגאזי שבלוב.",
     "axis": "זירות ימיות ובינלאומיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T15:41:23+00:00",
     "last_update_at": "2026-11-24T11:29:15+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_046b66da205f5450",
       "url": "https://www.theguardian.com/world/live/2026/nov/24/russia-ukraine-poland-drone-patriots-latest-news-updates",
       "published_at": "2026-11-24T11:29:15+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_046b66da205f5450",
       "url": "https://kyivindependent.com/strikes-on-russian-ship-in-libya-are-lawful-self-defense-ukraine-says/",
       "published_at": "2026-11-24T10:56:53+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_046b66da205f5450",
       "url": "https://www.theguardian.com/world/2026/nov/24/ukraine-war-briefing-kyiv-strike-on-russian-ships-in-benghazi-condemned-by-un-backed-libya-government",
       "published_at": "2026-11-24T01:08:35+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_534e9b3fd87e580e",
       "url": "https://www.bbc.co.uk/news/articles/cr894gjz0j0yo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-23T15:41:23+00:00"
      }
     ],
     "places": [
      {
       "name": "בנגאזי, לוב",
       "lat": 32.12,
       "lon": 20.0812
      }
     ]
    },
    {
     "id": "UKRAINE-11241140-04",
     "title": "החלטת אסטוניה לסגור את מעברי הגבול עם רוסיה",
     "summary": "אסטוניה הודיעה על סגירת מעברי הגבול היבשתיים עם רוסיה החל מה-1 בדצמבר בעקבות ניסיון הצתה שיוחס למודיעין הרוסי.",
     "axis": "סנקציות ומדיניות גבולות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T11:25:49+00:00",
     "last_update_at": "2026-11-24T11:25:49+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_e06abd56cf780dab",
       "url": "https://meduza.io/en/feature/2026/11/24/why-is-estonia-closing-its-border-with-russia-estonian-foreign-minister-margus-tsahkna-explains-in-a-column-for-politico",
       "published_at": "2026-11-24T11:25:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11241140-05",
     "title": "תקיפת ריכוז משאיות צבאיות רוסיות במחוז בריאנסק",
     "summary": "הכוחות המזוינים של אוקראינה תקפו אזור שבו רוכזו משאיות צבאיות רוסיות ליד ברסטוק ברוסיה.",
     "axis": "תקיפות שטח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T11:19:00+00:00",
     "last_update_at": "2026-11-24T11:19:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_66eaaf21632bf6da",
       "url": "https://www.ukrinform.net/rubric-ato/4188026-ukrainian-forces-hit-russian-military-truck-concentration-area-in-bryansk-region.html",
       "published_at": "2026-11-24T11:19:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11241140-06",
     "title": "תקיפת כטב\"ם אוקראיני על תחנת אוטובוס בדונייצק",
     "summary": "דווח על פציעת שבעה בני אדם כתוצאה מתקיפת כטב\"ם אוקראיני בתחנת אוטובוס בדונייצק.",
     "axis": "תקיפות שטח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T11:17:27+00:00",
     "last_update_at": "2026-11-24T11:17:27+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_cfe12c4d3c940a81",
       "url": "https://tass.com/politics/2223899",
       "published_at": "2026-11-24T11:17:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11241140-07",
     "title": "כרטיסי סל ליטאיים בכטב\"מים רוסיים",
     "summary": "בדיקות גילו כרטיסי סל ליטאיים בתוך כטב\"מים רוסיים שתקפו את אוקראינה.",
     "axis": "טכנולוגיה ומודיעין",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T10:40:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T10:40:19+00:00",
     "last_update_at": "2026-11-24T10:40:19+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_15min",
       "url": "https://meduza.io/en/news/2026/11/24/lithuanian-sim-cards-found-in-russian-drones-that-attacked-ukraine",
       "published_at": "2026-11-24T10:40:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11241140-08",
     "title": "הענקת אזרחות סרבית לאלי קדירוב",
     "summary": "שלטונות סרביה העניקו אזרחות לאלי קדירוב, בנו של מנהיג צ'צ'ניה רמזן קדירוב.",
     "axis": "דיפלומטיה ומדיניות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T10:30:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T10:30:04+00:00",
     "last_update_at": "2026-11-24T10:30:04+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/24/chechen-leader-ramzan-kadyrov-s-son-granted-serbian-citizenship",
       "published_at": "2026-11-24T10:30:04+00:00"
      }
     ],
     "places": [
      {
       "name": "סרביה",
       "lat": 44.0243,
       "lon": 21.0766
      }
     ]
    },
    {
     "id": "UKRAINE-11241140-09",
     "title": "תקיפת כטב\"ם FPV בזפוריז'ה",
     "summary": "מתקפת כטב\"ם רוסית זורעת הרס רב והורגת שני בני אדם, ופוגעת באישה באורח קשה בזפוריז'ה.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T08:11:10+00:00",
     "last_update_at": "2026-11-24T10:05:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_2c746d2cc3f1553b",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064366/",
       "published_at": "2026-11-24T10:05:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_35561fdb62b7fdde",
       "url": "https://meduza.io/en/news/2026/11/24/russian-strikes-kill-two-in-ukraine-s-zaporizhzhia-injure-dozens",
       "published_at": "2026-11-24T08:11:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11241140-10",
     "title": "שיגור מאות כטב\"מים אוקראיניים לעבר מוסקבה ורוסיה",
     "summary": "מאות כטב\"מים אוקראיניים שוגרו לעבר מוסקבה ויעדים נוספים ברוסיה, והובילו לשיבושים בנתב\"ג המקומיים.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-24T08:22:29+00:00",
     "last_update_at": "2026-11-24T08:22:29+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_b772c3ab1235b985",
       "url": "https://meduza.io/en/news/2026/11/24/355-ukrainian-drones-flew-toward-moscow-overnight-prompting-flight-restrictions-at-two-airports",
       "published_at": "2026-11-24T08:22:29+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7098,
       "lon": 37.0537
      }
     ]
    },
    {
     "id": "UKRAINE-11241140-11",
     "title": "חדירת כטב\"ם רוסי למרחב האווירי של פולין",
     "summary": "כטב\"ם מונע מנוע סילון רוסי חדר לשטח פולין לעומק של כ-20 קילומטרים ושהה שם תשע דקות לפני שחזר לאוקראינה.",
     "axis": "הפרת מרחב אוווירי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T23:17:52+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T23:17:52+00:00",
     "last_update_at": "2026-11-24T09:12:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_969cfd8e26b6e9a4",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064356/",
       "published_at": "2026-11-24T09:12:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_969cfd8e26b6e9a4",
       "url": "https://t.me/alexmehacarmel/49866",
       "published_at": "2026-11-23T23:17:52+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות רוסיות לגבי המספר המדויק של מאות כטב\"מים שהופלו",
    "ההערכות המלאות לגבי הנזקים המדויקים בספינה בלוב"
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
     "value": 1.0939,
     "unit": "USD",
     "change_pct": -0.46,
     "source_id": "src_ecb",
     "as_of": "2026-11-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונות המדינה",
      "פגיעה ביעדים צבאיים ולגיטימיים של רוסיה גם במרחב הימי ובעומק שטחה"
     ],
     "inferred": [
      "יצירת הרתעה מול התשתיות הרוסיות",
      "גיוס תמיכה מערבית רחבה באמצעות הוכחת יכולות התקפיות"
     ],
     "forecast": [
      "המשך מתקפות כטב\"מים בעומק רוסיה ובנמלים זרים שבהם יש נוכחות רוסית",
      "הדגשת הצורך בסיוע הגנה אווירית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המבצע הצבאי המיוחד",
      "פגיעה בתשתיות האנרגיה והצבא של אוקראינה"
     ],
     "inferred": [
      "שחיקת משק החשמל האוקראיני לקראת החורף",
      "ניסיון להכתיב תנאי משא ומתן שישמרו על השפעתה באזור"
     ],
     "forecast": [
      "המשך הפצצות אוויריות כבדות על מתקני אנרגיה באוקראינה",
      "שמירה על לחץ קרקעי ואי-קידום הסכמות שלום בתנאים לא נוחים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr894gjz0j0yo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/24/ukraine-war-briefing-kyiv-strike-on-russian-ships-in-benghazi-condemned-by-un-backed-libya-government",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/strikes-on-russian-ship-in-libya-are-lawful-self-defense-ukraine-says/",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/24/355-ukrainian-drones-flew-toward-moscow-overnight-prompting-flight-restrictions-at-two-airports",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/24/8064356/",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2223899",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49866",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4188026-ukrainian-forces-hit-russian-military-truck-concentration-area-in-bryansk-region.html",
     "accessed_at": "2026-11-24T11:40:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-23T22:19:08+00:00",
  "changes": {
   "UKRAINE-11241140-01": {
    "kind": "new"
   },
   "UKRAINE-11241140-02": {
    "kind": "new"
   },
   "UKRAINE-11241140-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפת כלי שיט רוסיים מול חופי לוב",
    "score": 1.0
   },
   "UKRAINE-11241140-04": {
    "kind": "new"
   },
   "UKRAINE-11241140-05": {
    "kind": "new"
   },
   "UKRAINE-11241140-06": {
    "kind": "new"
   },
   "UKRAINE-11241140-07": {
    "kind": "new"
   },
   "UKRAINE-11241140-08": {
    "kind": "new"
   },
   "UKRAINE-11241140-09": {
    "kind": "new"
   },
   "UKRAINE-11241140-10": {
    "kind": "new"
   },
   "UKRAINE-11241140-11": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-23T2219__north-202611232219.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-23T22:19:52+00:00",
   "window": {
    "from": "2026-11-22T22:19:52+00:00",
    "to": "2026-11-23T22:19:52+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611232219"
   },
   "summary": "הגזרה הצפונית של ישראל מתאפיינת בפעילות צבאית מתמשכת מול חיזבאללה בלבנון ובמרחב הגבול הסורי, לצד מתיחות פוליטית ודיפלומטית סביב נוכחות ישראלית ותקיפות ממוקדמות. במקביל, ממשלת לבנון מתמודדת עם לחצים פנימיים וחיצוניים, כולל ביקורת חריפה על פעילות צה\"ל בתוך מוסדות חינוך ותסכול מול נוכחות צבאית זרה בגבולה.",
   "fronts": [
    {
     "name": "חזית לבנון-ישראל",
     "status": "פעילה ומתוחה"
    },
    {
     "name": "גבול לבנון-סוריה",
     "status": "מוקד הברחות ופעילות צבאית"
    }
   ],
   "events": [
    {
     "id": "NORTH-11232219-01",
     "title": "תקיפת צה\"ל בברעשית",
     "summary": "צה\"ל תקף בכפר ברעשית שבדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T13:21:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T13:21:49+00:00",
     "last_update_at": "2026-11-23T13:21:49+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134100",
       "published_at": "2026-11-23T13:21:49+00:00"
      }
     ],
     "places": [
      {
       "name": "ברעשית, לבנון",
       "lat": 33.1195,
       "lon": 35.4328
      }
     ]
    },
    {
     "id": "NORTH-11232219-02",
     "title": "ביקור דוברת צה\"ל בבית ספר בדבל",
     "summary": "דוברת צה\"ל בערבית ביקרה בבית ספר בכפר דבל ועוררה סערה מדינית ותקשורתית.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T04:59:23+00:00",
     "last_update_at": "2026-11-23T08:48:32+00:00",
     "what_is_not_verified": "הטענות על אופי הביקור ותאום מוקדם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383962666",
       "published_at": "2026-11-23T08:48:32+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134075",
       "published_at": "2026-11-23T06:23:29+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383962633",
       "published_at": "2026-11-23T04:59:23+00:00"
      }
     ],
     "places": [
      {
       "name": "דבל, לבנון",
       "lat": 33.2492,
       "lon": 35.3489
      }
     ]
    },
    {
     "id": "NORTH-11232219-03",
     "title": "סיכול הברחת חלקי חומרי נפץ בגבול לבנון-סוריה",
     "summary": "הצבא הלבנוני סיכל מספר ניסיונות הברחת חומרי נפץ מסוריה לתוך שטח לבנון ועצר חשודים.",
     "axis": "לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T15:10:00+00:00",
     "last_update_at": "2026-11-23T15:10:00+00:00",
     "what_is_not_verified": "זהות המקבל המיועד של חומרי הנפץ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b992fc98216ef237",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/969342/four-smuggling-attempts-733-kilograms-of-explosives-seized-in-lebanon/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969342",
       "published_at": "2026-11-23T15:10:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11232219-04",
     "title": "תקיפת מתקן הייצור של חיזבאללה בגבול סוריה",
     "summary": "צה\"ל תקף מתקן תת-קרקעי לייצור והחסנת טילי מדויקים של חיזבאללה בג'נתא סמוך לגבול סוריה.",
     "axis": "ישראל - לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T09:44:28+00:00",
     "last_update_at": "2026-11-23T09:44:28+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/hezbollah-precision-guided-missile-manufacturing-site-on-syrian-border/",
       "published_at": "2026-11-23T09:44:28+00:00"
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
    "זהות הגורם המדויק שנועד לקבל את חומרי הנפץ שהוברחו מסוריה ללבנון",
    "היקף הנזק המלא במתקן הייצור בג'נתא"
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
     "value": 3.3498,
     "unit": "ILS",
     "change_pct": 0.21,
     "source_id": "src_ecb",
     "as_of": "2026-11-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התחמשות חיזבאללה והרחקת איומים בגזרה הצפונית"
     ],
     "inferred": [
      "פגיעה בתשתיות צבאיות ותת-קרקעיות של חיזבאללה סמוך לגבול סוריה"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות נגד תשתיות טרור והברחות"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך התנגדות לכינונו של מצב כפוי והללת ציר ההתנגדות"
     ],
     "inferred": [
      "שימור יכולות שיקום וייצור אמצעי לחימה דרך גבול סוריה"
     ],
     "forecast": [
      "המשך מאמצי התעמולה והגברת ההסתה נגד גורמים מתונים"
     ]
    },
    {
     "actor": "לבנון (ממשל רשמי)",
     "declared": [
      "שמירה על ריבונות המדינה וגינוי הפרות ריבונות מצד ישראל"
     ],
     "inferred": [
      "ניסיון לאזן בין לחצים בינלאומיים לבין התמודדות עם תשתיות חיזבאללה בשטחה"
     ],
     "forecast": [
      "הגברת הפיקוח בגבול סוריה למניעת הברחות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/hezbollah-precision-guided-missile-manufacturing-site-on-syrian-border/",
     "accessed_at": "2026-11-23T22:19:52+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/969342/four-smuggling-attempts-733-kilograms-of-explosives-seized-in-lebanon/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969342",
     "accessed_at": "2026-11-23T22:19:52+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134075",
     "accessed_at": "2026-11-23T22:19:52+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383962633",
     "accessed_at": "2026-11-23T22:19:52+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-23T00:45:49+00:00",
  "changes": {
   "NORTH-11232219-01": {
    "kind": "new"
   },
   "NORTH-11232219-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ביקור דוברת צה\"ל בבית ספר בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11232219-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תפיסת משלוח חומרי נפץ בגבול לבנון-סוריה",
    "score": 0.65
   },
   "NORTH-11232219-04": {
    "kind": "new"
   }
  }
 }
};
