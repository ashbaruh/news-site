/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-05T0626__yemen-202610050626.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-05T06:26:42+00:00",
   "window": {
    "from": "2026-10-04T06:26:42+00:00",
    "to": "2026-10-05T06:26:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610050626"
   },
   "summary": "הלחימה בתימן הסלימה משמעותית עם פתיחת מבצע צבאי נרחב מצד ממשלת תימן הנתמכת על ידי סעודיה נגד החות'ים, במקביל להתקדמות קרקעית של החות'ים וניתוק צירי אספקה מרכזיים באזור תעז. כמו כן, נרשמו תקיפות הדדיות בין החות'ים לבין מטרות בשטח סעודיה ופעילות ימית חשודה בדרום תימן.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (תעז וצעדה)",
     "status": "פעיל והסלמה חריפה"
    },
    {
     "name": "הזירה מול סעודיה",
     "status": "תקיפות הדדיות"
    },
    {
     "name": "הזירה הימית (מפרץ עדן ובאב אל-מנדב)",
     "status": "פעיל עם אירועים חריגים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10050626-01",
     "title": "הכרזת הממשלה התימנית על מבצע צבאי נרחב",
     "summary": "הנהגת ממשלת תימן הוציאה הודעה רשמית על פתיחת מבצע צבאי רחב היקף שמטרתו להשתלט מחדש על כלל השטחים הנמצאים בשליטת החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T12:46:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T12:46:33+00:00",
     "last_update_at": "2026-10-05T06:20:41+00:00",
     "what_is_not_verified": "היקף הצלחת המבצע בפועל בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c84f70e7a3e5fff9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-over-1120-attacks-against-houthi",
       "published_at": "2026-10-05T06:20:41+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_c7fc39076d5a6301",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/5/yemen-govt-forces-commence-major-combat-operation-against-houthis?traffic_source=rss",
       "published_at": "2026-10-05T03:11:03+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_e92ddaf0bdc05219",
       "url": "https://www.theguardian.com/world/2026/oct/05/saudi-backed-yemen-government-military-drive-retake-houthi-territory",
       "published_at": "2026-10-05T00:38:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_5e345afcfeb88677",
       "url": "https://www.al-monitor.com/originals/2026/10/yemeni-government-launches-offensive-seize-all-areas-iran-backed-houthis",
       "published_at": "2026-10-04T12:46:33+00:00"
      }
     ],
     "places": [
      {
       "name": "צעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10050626-02",
     "title": "התקדמות החות'ים וניתוק ציר אספקה לתעז",
     "summary": "כוחות חות'ים השתלטו על אזורים במרחב תעז וניתקו את ציר האספקה המרכזי המחבר בינה לבין עדן.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:52:50+00:00",
     "last_update_at": "2026-10-04T19:34:17+00:00",
     "what_is_not_verified": "ההשלכות המלאות על עמידות העיר עדן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131344",
       "published_at": "2026-10-04T19:34:17+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-presidency-announces-offensive-retake-houthi-territory",
       "published_at": "2026-10-04T14:22:09+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-cut-vital-aden-taiz-road-yemen",
       "published_at": "2026-10-04T08:52:50+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-10050626-03",
     "title": "תקיפות אוויריות בצנעא ודיווחים על פגיעה במתקן בסעודיה",
     "summary": "התקיימו תקיפות אוויריות בעיר צנעא שיוחסו לסעודיה, ובמקביל דווח על תקיפה לעבר מתקני נפט באזור ריאד שבה לקחו אחריות החות'ים, אולם הקואליציה בראשות סעודיה הכחישה את הדיווחים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-04T08:21:37+00:00",
     "last_update_at": "2026-10-04T23:31:00+00:00",
     "what_is_not_verified": "האם התקיפה בריאד אכן פגעה במתקן אראמכו כפי שטוענים החות'ים, או שמדובר בטענות מטעות לדברי הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-saudi-air-strike-hits-foam-factory-yemens-sanaa",
       "published_at": "2026-10-04T23:31:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94484",
       "published_at": "2026-10-04T17:14:58+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-claims-attack-saudi-capital-misleading",
       "published_at": "2026-10-04T10:09:39+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/yemen-s-houthis-claim-attacks-on-aramco-facilities-in-riyadh",
       "published_at": "2026-10-04T08:21:37+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10050626-04",
     "title": "פיצוצים ליד מכלית דלק בדרום תימן",
     "summary": "סוכנות סחר ימבריטית דיווחה כי צוות של מכלית דלק הבחין במספר פיצוצים בסביבתו במפרץ עדן מדרום לנמל מוכה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T19:45:31+00:00",
     "last_update_at": "2026-10-04T19:45:31+00:00",
     "what_is_not_verified": "זהות הגורם האחראי לפיצוצים ומקורם המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_1e747119db5e4db3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-reported-near-tanker-southern-yemen-ukmto",
       "published_at": "2026-10-04T19:45:31+00:00"
      }
     ],
     "places": [
      {
       "name": "מוכה, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      },
      {
       "name": "מפרץ עדן",
       "lat": 12.6147,
       "lon": 47.5063
      }
     ]
    }
   ],
   "not_verified": [
    "היקף הנפגעים והנזקים האמיתי כתוצאה מהתקיפות ההדדיות בין החות'ים לסעודיה",
    "האחריות המדויקת לפיצוצים ליד המכלית במפרץ עדן",
    "התוצאות המעשיות של מתקפת הנגד הממשלתית בתימן"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ממשלת תימן והקואליציה בהובלת סעודיה",
     "declared": [
      "השתלטות מחדש על כלל השטחים המוחזקים בידי החות'ים",
      "החזרת שליטת המדינה לאורך כל שטח הרפובליקה"
     ],
     "inferred": [
      "בלמו או מנסים לבלם את ההתקדמות החות'ית המאיימת על ערים מרכזיות כמו עדן ותעז",
      "השבת תשתיות ושמירה על נתיבי שיט בינלאומיים"
     ],
     "forecast": [
      "המשך הלחימה הקרקעית והאווירית בטווח הקצר",
      "ניסיונות של סעודיה לספק גיבוי אווירי ולוגיסטי לממשלה התימנית"
     ]
    },
    {
     "actor": "החות'ים",
     "declared": [
      "המשך ההתנגדות לתוקפנות והגנה על האזורים שבשליטתם",
      "תגובה בעוצמה על כל פעולה צבאית נגדם"
     ],
     "inferred": [
      "הרחבת השליטה הקרקעית ויצירת לחץ צבאי על ערי הפיתוח והבירה הזמנית עדן",
      "שימור יכולת פגיעה בעומק סעודיה ובנתיבי השיט"
     ],
     "forecast": [
      "המשך ניסיונות כיתור והתקדמות באזור תעז",
      "הגברת שימוש בכטב\"מים ורקטות במקרה של מתקפה נגדם"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/5/yemen-govt-forces-commence-major-combat-operation-against-houthis?traffic_source=rss",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemeni-government-launches-offensive-seize-all-areas-iran-backed-houthis",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/yemen-s-houthis-claim-attacks-on-aramco-facilities-in-riyadh",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/saudi-backed-yemen-government-military-drive-retake-houthi-territory",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-reported-near-tanker-southern-yemen-ukmto",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthi-claims-attack-saudi-capital-misleading",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131344",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94484",
     "accessed_at": "2026-10-05T06:26:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-04T15:42:33+00:00",
  "changes": {
   "YEMEN-10050626-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "הכרזת ממשלת תימן על מבצע צבאי נרחב להשבת השליטה בשטחי החות'ים",
    "score": 0.65
   },
   "YEMEN-10050626-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "התקדמות חות'ית וחסימת ציר האספקה המרכזי בין תעז לעדן",
    "score": 1.0
   },
   "YEMEN-10050626-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "גל תקיפות אוויריות נרחב של סעודיה וממשלת תימן בצנעא ובמחוזות נוספים",
    "score": 1.0
   },
   "YEMEN-10050626-04": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-05T2340__iran-202610052340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-05T23:40:42+00:00",
   "window": {
    "from": "2026-10-04T23:40:42+00:00",
    "to": "2026-10-05T23:40:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610052340"
   },
   "summary": "העימות בין איראן מחד לבין ישראל וארה\"ב מאידך מתאפיין בהמשך לחץ כלכלי וסנקציות חריפות מצד וושינגטון המדרדרות את הכלכלה האיראנית, לצד אירועים ימיים במצר הורמוז והתרחבות החשדות לזירות חוץ כמו אירופה. במקביל, הזירות האזוריות רוחשות פעילות צבאית עצימה הכוללת מתקפות נגד בתימן וגיבוש בריתות הגנה חדשות במפרץ.",
   "fronts": [
    {
     "name": "הזירה הימית (הורמוז והים האדום)",
     "status": "פעיל ומתוח"
    },
    {
     "name": "הזירה הדיפלומטית-כלכלית (סנקציות ושיחות)",
     "status": "מוקפא עם הסלמה"
    },
    {
     "name": "זירת המפרץ ותימן (סעודיה מול שלוחחות איראן)",
     "status": "הסלמה צבאית"
    },
    {
     "name": "זירת אירופה (איומים על בסיסים אמריקאיים)",
     "status": "התעוררות איומים"
    }
   ],
   "events": [
    {
     "id": "IRAN-10052340-01",
     "title": "פגיעה במכלית שלישית ליד מצר הורמוז",
     "summary": "מכלית שלישית בתוך יומיים נפגעה בסמוך למצר הורמוז, על רקע ניסיונות לחץ כלכלי וסנקציות אמריקאיות.",
     "axis": "הזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T22:08:27+00:00",
     "last_update_at": "2026-10-05T22:08:27+00:00",
     "what_is_not_verified": "זהות אלגורם האחראי לפגיעה במכלית אינה מפורטת במלואה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610050957",
       "published_at": "2026-10-05T22:08:27+00:00"
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
     "id": "IRAN-10052340-02",
     "title": "ארה\"ב מפנה מפציצים מבסיס בבריטניה מחשש לאיום",
     "summary": "ארצות הברית פינתה מפציצי B-1 מבסיס האוויר פיירפורד בבריטניה בחזרה לארה\"ב, עקב חשיפת חשודים הקשורים לאיראן שפעלו בקרבת הבסיס.",
     "axis": "זירת אירופה והעורף האמריקאי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T05:50:01+00:00",
     "last_update_at": "2026-10-05T15:45:46+00:00",
     "what_is_not_verified": "הקשר הישיר והמוכח של ממשלת איראן לחוליה שנחשפה בבריטניה אינו מאומת לחלוטין מעבר לחשדות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/news/audio/2026/oct/05/why-did-us-withdraw-bombers-from-raf-fairford-the-latest",
       "published_at": "2026-10-05T15:45:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131361",
       "published_at": "2026-10-05T05:50:01+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-10052340-03",
     "title": "תקיפות ומתקפה נגד של הקואליציה בתימן מול החות'ים",
     "summary": "כוחות ממשלת תימן הנתמכים בסעודיה ובאמצעות קואליציה אווירית פתחו במתקפה נגד החות'ים וכבשו מחדש שטחים באזור מצרי באב אל-מנדב.",
     "axis": "זירת תימן והים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T15:21:54+00:00",
     "last_update_at": "2026-10-05T19:44:01+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף הנפגעים המדויק בכל זירות הלחימה בתימן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/05/saudi-forces-recapture-key-areas-strait-houthis-yemen",
       "published_at": "2026-10-05T19:44:01+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
       "published_at": "2026-10-05T19:17:05+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
       "published_at": "2026-10-05T15:21:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר באב אל-מנדב, תימן",
       "lat": 12.6671,
       "lon": 43.4565
      }
     ]
    },
    {
     "id": "IRAN-10052340-04",
     "title": "הפעלת מנגנון ברית מכה בין סעודיה, פקיסטן וטורקיה",
     "summary": "סעודיה, פקיסטן וטורקיה הכריזו על הפעלה מיידית של הסכם ההגנה הקולקטיבית (ברית מכה) והיערכות להצבת כוחות בממלכה בעקבות התקיפות האחרונות.",
     "axis": "המפרץ והקואליציות האזוריות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-05T18:25:54+00:00",
     "last_update_at": "2026-10-05T20:43:27+00:00",
     "what_is_not_verified": "ההשפעה המבצעית המדויקת בשטח של פריסת הכוחות טרם הוכחה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/saudi-arabia-turkey-and-pakistan-activate-mecca-pact-amid-war-houthis",
       "published_at": "2026-10-05T20:43:27+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48280",
       "published_at": "2026-10-05T18:25:54+00:00"
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
    "האחריות הישירה של איראן לניסיון הפגיעה בטיסת פליי דובאי נתונה במחלוקת והצהרות פוליטיות בלבד.",
    "היקף שיתוף הפעולה המדויק של מדינות אירופה עם הצדדים הלוחמים מעבר לטענות פקידי איראן.",
    "התוצאות המבצעיות של פריסת כוחות ברית מכה בסעודיה."
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הדגשת חוסר המשמעות של קיום שיחות עם ארצות הברית במצב הנוכחי",
      "דרישה שגורמים אירופיים יישאו באחריות על סיוע לתוקפים"
     ],
     "inferred": [
      "הפעלת לחץ ימי דרך פגיעה במכליות כדי לערער את שוק האנרגיה העולמי",
      "הכנת העורף האזרחי והנשים לעימות ממושך דרך אימונים והתארגנויות הגנה עירונית"
     ],
     "forecast": [
      "החמרת הבידוד הכלכלי עקב קריסת המטבע המקומי והכנסות הנפט",
      "המשך הסתמכות על שלוחות אזוריות לתקיפות נגד אינטרסים של יריבותיה"
     ]
    },
    {
     "actor": "ארצות הברית וישראל",
     "declared": [
      "הטלת סנקציות כלכליות נוקשות על בנקים וגופים הסוחרים עם איראן",
      "הזהרה מפני מתן גישה או סיוע לעסקים ולמוסדות פיננסיים הקשורים לטהרן"
     ],
     "inferred": [
      "הידוק הפיקוח המודיעיני ומניעת התבססות איראנית במרחבים שונים",
      "נקיטת משנה זהירות ואבטחה מוגברת על בסיסים ונכסים אסטרטגיים מפני חבלות"
     ],
     "forecast": [
      "הגברת הלחץ הכלכלי עד קצה מנופי ההשפעה",
      "המשך פעילות סיכול ומעקב אחר פעילות איראנית חוצת גבולות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/saudi-backed-yemeni-forces-expel-the-houthis-from-several-areas-around-key-strait-officials-say",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/yemen-air-campaign-houthis-saudi-led-coalition",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610050957",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/saudi-arabia-turkey-and-pakistan-activate-mecca-pact-amid-war-houthis",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131361",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48280",
     "accessed_at": "2026-10-05T23:40:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-05T09:35:06+00:00",
  "changes": {
   "IRAN-10052340-01": {
    "kind": "new"
   },
   "IRAN-10052340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פינוי מפציצי B-1 מבסיס בבריטניה בעקבות חשש מאיום איראני",
    "score": 1.0
   },
   "IRAN-10052340-03": {
    "kind": "new"
   },
   "IRAN-10052340-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-05T1927__ukraine-202610051927.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-05T19:27:55+00:00",
   "window": {
    "from": "2026-10-04T19:27:55+00:00",
    "to": "2026-10-05T19:27:55+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610051927"
   },
   "summary": "הלחימה באוקראינה מתאפיינת בהמשך תקיפות אוויריות אינטנסיביות מצד רוסיה על תשתיות ואזורי מגורים, מול ניסיונות יירוט אוקראיניים מתקדמים הכוללים מערכות אוטומטיות. במקביל, גרמניה ומדינות אירופיות נוספות מחזקות את הסיוע הצבאי והכלכלי לקייב, בעוד שרוסיה ממשיכה בלחץ צבאי וכלכלי.",
   "fronts": [
    {
     "name": "חזית המזרח (חארקוב)",
     "status": "פעיל ואינטנסיבי עם תקיפות אוויריות"
    },
    {
     "name": "חזית הדרום (זפוריז'ה)",
     "status": "פעיל עם תקיפות על תשתיות ומגורים"
    },
    {
     "name": "מרחב קייב והעורף",
     "status": "תחת מתקפות כטב\"מים וטילים ומערכות הגנה"
    },
    {
     "name": "זירת הים השחור",
     "status": "פעילה עם פגיעה בספינות סחר"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10051927-01",
     "title": "פגיעת כטב\"מ בגשר הצפוני בקייב",
     "summary": "כטב\"מ רוסי פגע בגשר הצפוני מעל נהר דניפרו בקייב, במהלך ביקור של קנצלר גרמניה",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-04T18:30:50+00:00",
     "last_update_at": "2026-10-05T01:00:20+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים המדויקים אינם מפורטים מעבר לשני פצועים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian",
       "url": "https://www.theguardian.com/world/2026/oct/05/ukraine-war-briefing-germanys-merz-pledges-1bn-in-military-aid-to-kyiv-as-russia-ramps-up-attacks",
       "published_at": "2026-10-05T01:00:20+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian",
       "url": "https://www.theguardian.com/world/video/2026/oct/04/russian-drone-hits-key-bridge-in-kyiv-on-german-chancellors-visit-video",
       "published_at": "2026-10-04T18:30:50+00:00"
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
     "id": "UKRAINE-10051927-02",
     "title": "תקיפת מבנה מגורים בחארקוב",
     "summary": "כוחות רוסיים תקפו את חארקוב באמצעות פצצות אוויריות מונחות, מה שהוביל להרוגים ופצועים רבים",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T01:00:20+00:00",
     "last_update_at": "2026-10-05T18:26:15+00:00",
     "what_is_not_verified": "זהות כל הנפגעים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_4741773569c7fb98",
       "url": "https://kyivindependent.com/ukraine-war-latest-kharkiv-devastated-by-russian-glide-bombs-children-among-victims-2/",
       "published_at": "2026-10-05T18:26:15+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_4741773569c7fb98",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/05/8056604/",
       "published_at": "2026-10-05T17:48:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_4741773569c7fb98",
       "url": "https://www.theguardian.com/world/2026/oct/05/ukraine-war-briefing-germanys-merz-pledges-1bn-in-military-aid-to-kyiv-as-russia-ramps-up-attacks",
       "published_at": "2026-10-05T01:00:20+00:00"
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
     "id": "UKRAINE-10051927-03",
     "title": "תקיפת בניין מגורים בזפוריז'ה",
     "summary": "רוסיה תקפה בניין מגורים בזפוריז'ה וגרמה לפצועים",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T18:35:00+00:00",
     "last_update_at": "2026-10-05T18:35:00+00:00",
     "what_is_not_verified": "מצבו הרפואי המלא של כלל הפצועים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_46d33fff2a24d5c8",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/05/8056607/",
       "published_at": "2026-10-05T18:35:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'ה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-10051927-04",
     "title": "פגיעה בספינת תבואה בים השחור",
     "summary": "ספינת תבואה טבעה בים השחור לאחר פגיעת כטב\"מ",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T12:44:28+00:00",
     "last_update_at": "2026-10-05T12:44:28+00:00",
     "what_is_not_verified": "זהות אלגורם המשגר המדויקת של הכטב\"ם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_abu_ali_express_telegram",
       "url": "https://t.me/abualiexpress/131385",
       "published_at": "2026-10-05T12:44:28+00:00"
      }
     ],
     "places": [
      {
       "name": "הים השחור",
       "lat": 43.8728,
       "lon": 33.9938
      }
     ]
    },
    {
     "id": "UKRAINE-10051927-05",
     "title": "נפילת שברי כטב\"מ בקייב",
     "summary": "שברי כטב\"מ רוסי נפלו במחוז פצ'רסקי בקייב וגרמו שריפה במכוניות חונות",
     "axis": "הגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T18:18:00+00:00",
     "last_update_at": "2026-10-05T18:18:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא למבנים סמוכים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_d97f0208995f3e6d",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/05/8056605/",
       "published_at": "2026-10-05T18:18:00+00:00"
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
    "טענות רוסיה כי אוקראינה ממשיכה לתקוף את תחנת הכוח הגרעינית בזפוריז'ה באופן המסכן את האזור",
    "טענות יחידה אוקראינית על הרגת 600 חיילים רוסים ביממה אחת",
    "פרטי הצעות השלום של הודו והתקדמות השיחות הדיפלומטיות",
    "מעורבות אפשרית של פעיל רוסי בקבוצה חמושה אוקראינית"
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
     "value": 1.1204,
     "unit": "USD",
     "change_pct": -0.19,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "עמידה ביעדי אספקת נשק מהשותפים",
      "חיזוק מערך ההגנה האווירית והתמודדות עם כטב\"מים סילוניים"
     ],
     "inferred": [
      "המשך פגיעה בתשתיות אנרגיה וזיקוק ברוסיה",
      "גיוס תמיכה מערבית כלכלית וצבאית רחבה"
     ],
     "forecast": [
      "שילוב מערכות יירוט רובוטיות נוספות להגנת הערים",
      "המשך מאמצים לקבלת מטוסי קרב וציוד כבד נוסף"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הגדלת תקציב הביטחון לשנים הקרובות למימון המלחמה",
      "הזהרת אזרחים ודיפלומטים זרים לעזוב את קייב"
     ],
     "inferred": [
      "שחיקת המורעה והתשתיות באוקראינה לקראת חורף",
      "שיבוש יכולות הייצוא והכלכלה האוקראינית"
     ],
     "forecast": [
      "המשך מתקפות אוויריות נרחבות על ערים מרכזיות באוקראינה",
      "הגברת הלחץ סביב אתרים אסטרטגיים ותשתיות אנרגיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/05/ukraine-war-briefing-germanys-merz-pledges-1bn-in-military-aid-to-kyiv-as-russia-ramps-up-attacks",
     "accessed_at": "2026-10-05T19:27:55+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-kharkiv-devastated-by-russian-glide-bombs-children-among-victims-2/",
     "accessed_at": "2026-10-05T19:27:55+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/05/8056605/",
     "accessed_at": "2026-10-05T19:27:55+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131385",
     "accessed_at": "2026-10-05T19:27:55+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-04T15:41:12+00:00",
  "changes": {
   "UKRAINE-10051927-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעות כטב\"מים בגשר הצפוני בקייב",
    "score": 1.0
   },
   "UKRAINE-10051927-02": {
    "kind": "new"
   },
   "UKRAINE-10051927-03": {
    "kind": "new"
   },
   "UKRAINE-10051927-04": {
    "kind": "new"
   },
   "UKRAINE-10051927-05": {
    "kind": "possible",
    "prev": "הצבת עמדות יירוט כטב\"מים באזור קייב",
    "score": 0.633
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-05T1933__north-202610051933.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-05T19:33:35+00:00",
   "window": {
    "from": "2026-10-04T19:33:35+00:00",
    "to": "2026-10-05T19:33:35+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610051933"
   },
   "summary": "בגזרה הצפונית נרשמת דריכות והתחממות במספר צירים: בחזית הסורית מדווחים עימותים ותקריות אבטחה שכללו סיכול חדירות וירי מוצבים, לצד גינויים אזוריים נגד פעילות צה\"ל במרחב החיץ והשלמת קו סופה 53. בחזית הלבנונית נמשכות תקיפות ארטילריות ממוקדות בדרום לבנון, לצד היערכות הממשלה והצבא בביירות לחיזוק השליטה הביטחונית והחברתית.",
   "fronts": [
    {
     "name": "החזית הסורית",
     "status": "מתיחות גוברת ותקריות אבטחה במרחב הגבול ודרום סוריה"
    },
    {
     "name": "החזית הלבנונית",
     "status": "פעילות צבאית מקומית ותהליכי היערכות של המדינה מול תשתיות חיזבאללה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10051933-01",
     "title": "חיסול חשוד בדרום סוריה",
     "summary": "חיילי צה\"ל חיסלו מחבל שחדר לבסיס צה\"ל בדרום סוריה",
     "axis": "הגזרה הסורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T19:16:40+00:00",
     "last_update_at": "2026-10-05T19:16:40+00:00",
     "what_is_not_verified": "זהות המחבל המלאה ומניעיו אינם מאומתים במלואם מעבר לדיווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131423",
       "published_at": "2026-10-05T19:16:40+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סוריה",
       "lat": 35.9664,
       "lon": 40.8012
      }
     ]
    },
    {
     "id": "NORTH-10051933-02",
     "title": "זיהוי וירי לעבר שני חשודים על אופנוע בדרום סוריה",
     "summary": "כוחות צה\"ל זיהו שני חשודים על אופנוע שנעו לעבר מוצב צה\"ל במרחב האבטחה והחיץ בדרום סוריה, פתחו בנוהל מעצר חשוד שכלל ירי ועצרו אותם",
     "axis": "הגזרה הסורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T13:22:43+00:00",
     "last_update_at": "2026-10-05T19:16:40+00:00",
     "what_is_not_verified": "מצבו הרפואי המדויק של הפצוע אינו מפורט מעבר לכך שהועבר לטיפול",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_e625c47f79c3d0f8",
       "url": "https://t.me/abualiexpress/131423",
       "published_at": "2026-10-05T19:16:40+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_e625c47f79c3d0f8",
       "url": "https://www.israelhayom.co.il/news/defense/article/21559690",
       "published_at": "2026-10-05T17:01:35+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_e625c47f79c3d0f8",
       "url": "https://www.walla.co.il/news/military/383956358",
       "published_at": "2026-10-05T13:54:26+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_e625c47f79c3d0f8",
       "url": "https://t.me/idf_telegram/25292",
       "published_at": "2026-10-05T13:42:59+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_e625c47f79c3d0f8",
       "url": "https://t.me/lelotsenzura/94498",
       "published_at": "2026-10-05T13:41:01+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_e625c47f79c3d0f8",
       "url": "https://www.ynet.co.il/news/article/skb9w711oze",
       "published_at": "2026-10-05T13:22:43+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר אל-חמדיה, סוריה",
       "lat": 35.6562,
       "lon": 36.3884
      }
     ]
    },
    {
     "id": "NORTH-10051933-03",
     "title": "איתור אמצעי לחימה בדרום סוריה",
     "summary": "כוחות חטיבת כרמלי איתרו מטעני נ\"ט ומוקשים במהלך פעילות לטיהור המרחב הביטחוני מאמצעי לחימה של המשטר הישן",
     "axis": "הגזרה הסורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T13:18:52+00:00",
     "last_update_at": "2026-10-05T13:18:52+00:00",
     "what_is_not_verified": "היקף מלא של כל אמצעי הלחימה שנותרו במרחב אינו ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25291",
       "published_at": "2026-10-05T13:18:52+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סוריה",
       "lat": 35.9664,
       "lon": 40.8012
      }
     ]
    },
    {
     "id": "NORTH-10051933-04",
     "title": "ירי ארטילרי ישראלי בדרום לבנון",
     "summary": "ארטילריה ישראלית תקפה את העיירה בית יהון בדרום לבנון",
     "axis": "הגזרה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T15:09:25+00:00",
     "last_update_at": "2026-10-05T15:09:25+00:00",
     "what_is_not_verified": "פרטים מלאים על נזקים ונפגעים אינם מפורטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_4b6c27418009a2e7",
       "url": "https://english.almanar.com.lb/article/134682/",
       "published_at": "2026-10-05T15:09:25+00:00"
      }
     ],
     "places": [
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-10051933-05",
     "title": "גינויים סוריים וערביים לפעילות ישראלית בשטח סוריה",
     "summary": "משרד החוץ הסורי, ירדן וקטר גינו את השלמת העבודות על קו סופה 53 והגדירו זאת כהפרה של הסכם הפרדת הכוחות משנת 1974 ושל ריבונות סוריה",
     "axis": "הגזרה הסורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-05T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-05T10:08:00+00:00",
     "last_update_at": "2026-10-05T16:51:27+00:00",
     "what_is_not_verified": "תגובת ישראל המלאה לגינויים אינה מפורטת במסמך זה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_772d6ded90d708b4",
       "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
       "published_at": "2026-10-05T16:51:27+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_bb16e77eabfcf249",
       "url": "https://www.aa.com.tr/en/middle-east/egypt-condemns-israeli-incursions-in-syria-calls-for-withdrawal-from-syrian-territory/4078446",
       "published_at": "2026-10-05T11:16:33+00:00"
      },
      {
       "source_id": "src_dailysabah",
       "source_root_id": "fh_d68b78f8cbf64e45",
       "url": "https://www.dailysabah.com/politics/turkiye-condemns-israels-deepening-incursion-into-syria/news",
       "published_at": "2026-10-05T10:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סוריה",
       "lat": 35.9664,
       "lon": 40.8012
      }
     ]
    }
   ],
   "not_verified": [
    "ההערכות המדויקות לגבי היקף השיקום של תשתיות חיזבאללה בלבנון",
    "האם הפיצוצים בתשתיות האנרגיה בסוריה נבעו מחבלה מכוונת או תקלה טכנית"
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
     "value": 3.0623,
     "unit": "ILS",
     "change_pct": -0.1,
     "source_id": "src_ecb",
     "as_of": "2026-10-05T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איום מאזרחי ישראל וכוחות צה\"ל בגבול סוריה"
     ],
     "inferred": [
      "שמירת מרחב אבטחה פעיל בדרום סוריה וסיכול כל ניסיון חדירה",
      "פגיעה בתשתיות צבאיות בגבולות הצפון"
     ],
     "forecast": [
      "המשך פעילות ביטחונית הדוקה ונוכחות צבאית במרחבי החיץ",
      "תגובה קשוחה לכל ניסיון התקרבות למוצבים"
     ]
    },
    {
     "actor": "חיזבאללה ולבנון",
     "declared": [
      "חיזוק הנוכחות והאחריות הביטחונית של צבא לבנון בדרום המדינה"
     ],
     "inferred": [
      "שימור יכולות צבאיות והתארגנות מחדש תחת לחץ פוליטי ומקומי"
     ],
     "forecast": [
      "המשך עימותים נמוכי עצימות ותגובות מקומיות מול פעילות צה\"ל"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/134682/",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/egypt-condemns-israeli-incursions-in-syria-calls-for-withdrawal-from-syrian-territory/4078446",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/turkiye-condemns-israels-deepening-incursion-into-syria/news",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/syrian-arab-condemnations-as-israel-resumes-work-on-sufa-53-line/",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21559690",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131423",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25291",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94498",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383956358",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skb9w711oze",
     "accessed_at": "2026-10-05T19:33:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-05T06:28:06+00:00",
  "changes": {
   "NORTH-10051933-01": {
    "kind": "new"
   },
   "NORTH-10051933-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "חיסול חשוד בדרום סוריה",
    "score": 0.817
   },
   "NORTH-10051933-03": {
    "kind": "possible",
    "prev": "תקיפות והפגזות ארטילריות בדרום לבנון",
    "score": 0.633
   },
   "NORTH-10051933-04": {
    "kind": "possible",
    "prev": "פציעת חיילי צה\"ל בתאונה מבצעית בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10051933-05": {
    "kind": "new"
   }
  }
 }
};
