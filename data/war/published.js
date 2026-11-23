/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-22T1800__yemen-202611221800.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-22T18:00:28+00:00",
   "window": {
    "from": "2026-11-21T18:00:28+00:00",
    "to": "2026-11-22T18:00:28+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611221800"
   },
   "summary": "העימות בתימן מתרחב כאשר תנועת החות'ים מקדמת תגבורות לעבר גבולות מחוז אביין במטרה להפעיל לחץ על עדן, ובמקביל מתבצרת במצר באב אל-מנדב לאחר נסיגת כוחות יריבים. בחזית החיצונית נמשכים ניסיונות הפגיעה של החות'ים בתשתיות אנרגיה בסעודיה, לצד פעילות יירוט אינטנסיבית של הקואליציה ודיווחים על קבלת סיוע צבאי חיצוני.",
   "fronts": [
    {
     "name": "מצר באב אל-מנדב ודרום החוף המערבי",
     "status": "התבצרות והעברת אמצעי לחימה חות'יים בעקבות נסיגת הכוחות הדרומיים"
    },
    {
     "name": "חזית אביין–אל-בידא",
     "status": "הסלמה ותקיפות אוויריות נגד תגבורות חות'יות סביב מעבר עקבת ת'רה"
    },
    {
     "name": "חזית סעודיה והים האדום",
     "status": "שיגורי טילים בליסטיים וכטב\"מים לעבר מתקני נפט והפעלת מערכות הגנה אווירית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11221800-01",
     "title": "טענת החות'ים על תקיפת בית הזיקוק בראביע' ויירוטי טילים וכטב\"מים על ידי הקואליציה בסעודיה",
     "summary": "החות'ים טענו כי תקפו את בית הזיקוק בראביע' שבחוף הים האדום בסעודיה, בעוד הקואליציה בהובלת סעודיה הודיעה על יירוט והשמדה של טיל בליסטי וכלי טיס בלתי מאויש ששוגרו לעבר מערב ודרום הממלכה.",
     "axis": "הזירה הסעודית–תימנית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T07:59:32+00:00",
     "last_update_at": "2026-11-22T17:30:08+00:00",
     "what_is_not_verified": "אין אימות עצמאי או אישור רשמי סעודי לפגיעה בבית הזיקוק בראביע'",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156249",
       "published_at": "2026-11-22T17:30:08+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-attacked-saudi-arabias-rabigh-oil-refinery",
       "published_at": "2026-11-22T16:54:47+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/22/houthis-report-attack-on-sanaa-as-saudi-arabia-intercepts-drone?traffic_source=rss",
       "published_at": "2026-11-22T13:16:45+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-missiles-target-saudi-arabia-iran-drones-strike-bahrain",
       "published_at": "2026-11-22T09:33:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-677",
       "published_at": "2026-11-22T07:59:32+00:00"
      }
     ],
     "places": [
      {
       "name": "ראביע', ערב הסעודית",
       "lat": 22.799,
       "lon": 39.0336
      }
     ]
    },
    {
     "id": "YEMEN-11221800-02",
     "title": "התבצרות כוחות חות'יים במצר באב אל-מנדב ובאזורי החוף",
     "summary": "כוחות חות'יים החלו לבסס את אחיזתם במצר באב אל-מנדב ובסביבתו לאחר נסיגת הכוחות הדרומיים, תוך חפירת שוחות עמוקות, הקמת סוללות עפר, פריסת צלפים ומערכות מכ\"ם, ותגבור האי מיון.",
     "axis": "מצר באב אל-מנדב וחוף הים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T18:44:24+00:00",
     "last_update_at": "2026-11-21T18:44:24+00:00",
     "what_is_not_verified": "היקף פריסת הציוד הטכנולוגי והמכ\"מים באי מיון ובקו החוף מבוסס על עדי ראייה ומקורות שדה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-entrenching-positions-around-bab-al-mandeb",
       "published_at": "2026-11-21T18:44:24+00:00"
      }
     ],
     "places": [
      {
       "name": "האי מיון, תימן",
       "lat": 12.6518,
       "lon": 43.4278
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11221800-03",
     "title": "תקיפות אוויריות והרחבת הלחימה באזור אביין ואל-בידא",
     "summary": "כלי טיס צבאיים ביצעו תקיפות אינטנסיביות נגד עמדות ותגבורות חות'יות במעבר עקבת ת'רה, בהרי אל-כור ובגבעת אל-אירסאל, בעקבות תנועות חות'יות המאיימות לכתר את עדן.",
     "axis": "חזית אביין–אל-בידא",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T13:35:25+00:00",
     "last_update_at": "2026-11-22T13:35:25+00:00",
     "what_is_not_verified": "זהות כלי הטיס התוקפים לא נמסרה במפורש בדיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-war-fronts-expand-houthis-attempt-encircle-aden",
       "published_at": "2026-11-22T13:35:25+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-בידא, תימן",
       "lat": 13.9881,
       "lon": 45.5729
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-11221800-04",
     "title": "הודעת צבא תימן על מאות פעולות נגד החות'ים",
     "summary": "צבא תימן הודיע על ביצוע 639 פעולות צבאיות נגד כוחות החות'ים, שבהן נהרגו ונפצעו 86 לוחמים והושמדו או הושבתו 64 כלי רכב צבאיים.",
     "axis": "פנים תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T14:57:50+00:00",
     "last_update_at": "2026-11-22T14:57:50+00:00",
     "what_is_not_verified": "נתוני הנפגעים והאבדות לא אומתו על ידי מקורות בלתי תלויים או על ידי החות'ים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_063b2996a29cb10d",
       "url": "https://www.sabanew.net/viewstory/156243",
       "published_at": "2026-11-22T14:57:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11221800-05",
     "title": "דיווח על מומחים זרים ומשלוחי אמל\"ח עבור החות'ים",
     "summary": "בכיר סעודי טען כי טיסה שהחזירה משלחת חות'ית מטהראן הובילה מומחים מקוריאה הצפונית, ממשמרות המהפכה ומחזבאללה, לצד כספים ורכיבי כטב\"מים וטילים שנפרקו בנמל אל-חודיידה, וכן על משלוח נשק רוסי מוסתר.",
     "axis": "אספקה והתעצמות החות'ים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T15:46:20+00:00",
     "last_update_at": "2026-11-22T15:46:20+00:00",
     "what_is_not_verified": "הטענות על הימצאות מומחים זרים וציוד צבאי במטוס ובמשלוחי חיטה מבוססות על דברי בכיר סעודי ללא תיעוד עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49824",
       "published_at": "2026-11-22T15:46:20+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11221800-06",
     "title": "פעילות מדינית של הממשלה המוכרת בתימן נגד איומי החות'ים",
     "summary": "בכירים בממשלת תימן קיימו מגעים עם דיפלומטים מערביים, בהם שגריר גרמניה, ובירכו על גינויים בין-לאומיים של התקפות החות'ים ופגיעתם בביטחון השיט ובאזור.",
     "axis": "הזירה המדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T12:56:29+00:00",
     "last_update_at": "2026-11-22T17:47:36+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_15246c3d6ca49b2a",
       "url": "https://www.sabanew.net/viewstory/156250",
       "published_at": "2026-11-22T17:47:36+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ed263e3b0a5ddf6b",
       "url": "https://www.sabanew.net/viewstory/156227",
       "published_at": "2026-11-22T12:56:29+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "פגיעה בפועל בבית הזיקוק בראביע'",
    "טענות על נוכחות מומחים צבאיים מקוריאה הצפונית ומחזבאללה בתימן",
    "הברחת נשק וטכנולוגיה רוסית בתוך מטעני חיטה לנמל אל-חודיידה",
    "היקף האבדות וההשמדות של ציוד צבאי שעליו הצהיר צבא תימן",
    "דיווחים על פגיעה בחברת נפט בצנעא"
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת אנצאר אללה (החות'ים)",
     "declared": [
      "תקיפת מתקני אנרגיה בערב הסעודית"
     ],
     "inferred": [
      "שליטה על נתיב השיט הבין-לאומי בבאב אל-מנדב",
      "כיתור העיר עדן וניתוק דרכי הגישה אליה דרך מחוז אביין",
      "הרתעת סעודיה מפני מעורבות בלחימה"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה מרחוק של יעדי תשתית סעודיים",
      "הגברת הלחץ הקרקעי על פאתי מחוז אביין"
     ]
    },
    {
     "actor": "ממשלת תימן והכוחות הדרומיים",
     "declared": [
      "בלימת הסכנה החות'ית לחופש השיט וליציבות האזורית",
      "פגיעה בכוחות החות'ים ובציודם הצבאי"
     ],
     "inferred": [
      "מניעת נפילת עדן ושימור השליטה במחוזות הדרום",
      "גיוס תמיכה בין-לאומית ומדינית מול פעילות החות'ים"
     ],
     "forecast": [
      "המשך הסתמכות על תקיפות מהאוויר לבלימת שיירות תגבורת",
      "חיזוק קווי ההגנה במבואות המזרחיים של עדן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת ערב הסעודית",
     "declared": [
      "יירוט והשמדת איומים אוויריים וטילים המשוגרים לעבר שטח הממלכה"
     ],
     "inferred": [
      "הגנה על מתקני הנפט ונתיבי היצוא שלאורך חוף הים האדום",
      "מניעת העברות אמצעי לחימה ומומחים זרים לנמלי תימן"
     ],
     "forecast": [
      "שימור רמת כוננות גבוהה של מערכי ההגנה האווירית באזור החוף המערבי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/22/houthis-report-attack-on-sanaa-as-saudi-arabia-intercepts-drone?traffic_source=rss",
     "accessed_at": "2026-11-22T18:00:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-677",
     "accessed_at": "2026-11-22T18:00:28+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemens-war-fronts-expand-houthis-attempt-encircle-aden",
     "accessed_at": "2026-11-22T18:00:28+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156227",
     "accessed_at": "2026-11-22T18:00:28+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49824",
     "accessed_at": "2026-11-22T18:00:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-21T17:49:36+00:00",
  "changes": {
   "YEMEN-11221800-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיגור טילים וכטב\"מים מאת החות'ים לעבר סעודיה",
    "score": 0.65
   },
   "YEMEN-11221800-02": {
    "kind": "new"
   },
   "YEMEN-11221800-03": {
    "kind": "new"
   },
   "YEMEN-11221800-04": {
    "kind": "new"
   },
   "YEMEN-11221800-05": {
    "kind": "possible",
    "prev": "איומי החות'ים על נמלי סעודיה בים האדום",
    "score": 0.633
   },
   "YEMEN-11221800-06": {
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
  "draft": "drafts/ukraine/2026-11-23T0044__ukraine-202611230044.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-23T00:44:14+00:00",
   "window": {
    "from": "2026-11-22T00:44:14+00:00",
    "to": "2026-11-23T00:44:14+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611230044"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במלוא העוצמה, כאשר רוסיה ממשיכה לבצע תקיפות אוויריות נרחבות נגד תשתיות אזרחיות ואנרגיה בקייב, חארקוב ובמחוזות נוספים, לצד פגיעה במטרות ימיות וספינות מטען ומלחמה גם מחוץ לגבולות אוקראינה (כמו בלוב ובים הבלטי). מנגד, אוקראינה מגיבה בתקיפות נגד נכסים רוסיים, בין היתר באמצעות כלי שיט בלתי מאוישים ופגיעה במתקנים בתוך השטח הרוסי. במקביל, מתנהל לחץ דיפלומטי בינלאומי ומדינות אירופה וארה\"ב דנות בארכיטקטורת הביטחון ובמנגנוני הסיוע הממשלתיים.",
   "fronts": [
    {
     "name": "החזית המזרחית (דונייצק)",
     "status": "פעילה והתקפית"
    },
    {
     "name": "החזית הצפון-מזרחית (חארקוב)",
     "status": "פעילה עם הפגזות חוזרות"
    },
    {
     "name": "עורף קייב והמרכז",
     "status": "תחת מתקפות כטב\"מים וטילים"
    },
    {
     "name": "זירת הים התיכון והים הבלטי",
     "status": "פעילות ימית ותקיפות כלי שיט"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11230044-01",
     "title": "עימותים במנזר קייב פצ'רסק",
     "summary": "התרחשו עימותים בשטח מנזר קייב פצ'רסק.",
     "axis": "חזית פנים אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T00:30:00+00:00",
     "last_update_at": "2026-11-23T00:30:00+00:00",
     "what_is_not_verified": "פרטים מלאים על נסיבות העימותים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_aed81a5f2b0a14df",
       "url": "https://www.ukrinform.net/rubric-emergencies/4187399-clashes-break-out-at-kyiv-pechersk-lavra.html",
       "published_at": "2026-11-23T00:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מנזר קייב פצ'רסק, אוקראינה",
       "lat": 50.4342,
       "lon": 30.5587
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-02",
     "title": "גיוס תרומות באזור לבוב",
     "summary": "התקיים מכרז צדקה שאסף כספים לתמיכה במגיני אוקראינה.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T23:36:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T23:36:00+00:00",
     "last_update_at": "2026-11-22T23:36:00+00:00",
     "what_is_not_verified": "לא צויין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_4e7ee6a602ee1917",
       "url": "https://www.ukrinform.net/rubric-society/4187282-charity-auction-in-lviv-region-raises-uah-60-mln-to-support-ukrainian-defenders.html",
       "published_at": "2026-11-22T23:36:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11230044-03",
     "title": "איתור שברי טילי שיוט בפולין",
     "summary": "הרשויות בפולין איתרו שברי טילי שיוט רוסיים ממספר אתרים במזרח המדינה בעקבות חדירה למרחב האווירי.",
     "axis": "גבול אוקראינה-פולין/נאט\"ו",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T22:49:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T22:49:25+00:00",
     "last_update_at": "2026-11-22T23:26:30+00:00",
     "what_is_not_verified": "האם שברי הטילים שייכים לאירוע תקיפה ספציפי או נפלו כתוצאה מיירט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_0d98fb200aa2a447",
       "url": "https://kyivindependent.com/polish-authorities-find-russian-missile-remains-at-three-sites-following-airspace-incursion/",
       "published_at": "2026-11-22T23:26:30+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_0d98fb200aa2a447",
       "url": "https://www.ynet.co.il/news/article/h1ocd5g17g",
       "published_at": "2026-11-22T22:49:25+00:00"
      }
     ],
     "places": [
      {
       "name": "נובי ליפובייץ, פולין",
       "lat": 50.4403,
       "lon": 22.8375
      },
      {
       "name": "רודניק, פולין",
       "lat": 50.4448,
       "lon": 22.244
      },
      {
       "name": "מולודיץ', פולין",
       "lat": 50.1585,
       "lon": 22.8318
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-04",
     "title": "תקיפת בית זיקוק במחוז רוסטוב",
     "summary": "דווח על תקיפת בית זיקוק במחוז רוסטוב על ידי כוחות אוקראיניים.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T23:12:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T23:12:10+00:00",
     "last_update_at": "2026-11-22T23:12:10+00:00",
     "what_is_not_verified": "היקף הנזק המלא בבית הזיקוק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/49843",
       "published_at": "2026-11-22T23:12:10+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז רוסטוב, רוסיה",
       "lat": 44.4977,
       "lon": 42.5301
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-05",
     "title": "תקיפת ספינת מלחמה רוסית בלוב ותקיפות נוספות",
     "summary": "סירות נפץ בלתי מאוישות פגעו בספינת המלחמה 'מרקורי' בבנגאזי שבלוב, ובמקביל דווח על תקיפת ספינה בים הבלטי ומתקפת כטב\"מים על אזור קייב.",
     "axis": "זירת הים התיכון והים הבלטי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T22:49:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T22:49:25+00:00",
     "last_update_at": "2026-11-22T22:49:25+00:00",
     "what_is_not_verified": "אחריות רשמית של אוקראינה לתקיפה בלוב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_src_ynet",
       "url": "https://www.ynet.co.il/news/article/h1ocd5g17g",
       "published_at": "2026-11-22T22:49:25+00:00"
      }
     ],
     "places": [
      {
       "name": "בנגאזי, לוב",
       "lat": 32.12,
       "lon": 20.0812
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-06",
     "title": "הפגזות ומניין הרוגים בסלובייאנסק",
     "summary": "כוחות רוסיים הפגיזו את העיר סלובייאנסק במחוז דונייצק, דבר שהביא למותם של שני בני אדם ולפציעתם של שלושה נוספים.",
     "axis": "החזית המזרחית (דונייצק)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T21:52:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T21:52:00+00:00",
     "last_update_at": "2026-11-22T21:52:00+00:00",
     "what_is_not_verified": "לא צויין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_d642b2229f865b01",
       "url": "https://www.ukrinform.net/rubric-ato/4187484-russian-forces-strike-sloviansk-killing-two-injuring-three-others.html",
       "published_at": "2026-11-22T21:52:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלובייאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-07",
     "title": "טיבוע ספינת מלחמה רוסית בבנגאזי",
     "summary": "קורבטה רוסית בשם 'מרקורי' נפגעה קשות וטבעה בנמל בנגאזי בעקבות מתקפת כלי שיט בלתי מאוישים.",
     "axis": "זירת הים התיכון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T21:33:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T21:33:44+00:00",
     "last_update_at": "2026-11-22T21:33:44+00:00",
     "what_is_not_verified": "זהות המפעילים המדויקים של כלי הצי הימי הבלתי מאויש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_libyan_officials",
       "url": "https://www.theguardian.com/world/2026/nov/22/blast-russian-ship-suspected-drone-attack-benghazi-libya",
       "published_at": "2026-11-22T21:33:44+00:00"
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
     "id": "UKRAINE-11230044-08",
     "title": "ניסיונות רוסיים לניתוק מקורות אנרגיה באודסה ובדניפרופטרובסק",
     "summary": "נשיא אוקראינה ציין כי כוחות רוסיים מנסים לנתק את אזורי אודסה ודניפרופטרובסק ממקורות האנרגיה שלהם.",
     "axis": "תשתיות אנרגיה ואתרים אסטרטגיים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T21:32:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T21:32:00+00:00",
     "last_update_at": "2026-11-22T21:32:00+00:00",
     "what_is_not_verified": "הצלחתם המלאה של הניתוקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_2eb1e9f5a3d4bf79",
       "url": "https://www.ukrinform.net/rubric-ato/4187483-russia-tries-to-cut-off-odesa-and-dnipropetrovsk-regions-from-energy-sources-zelensky.html",
       "published_at": "2026-11-22T21:32:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      },
      {
       "name": "דניפרופטרובסק, אוקראינה",
       "lat": 48.468,
       "lon": 35.0418
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-09",
     "title": "הפגזות אוקראיניות על הרפובליקה העממית של דונייצק",
     "summary": "דווח על 45 הפגזות אוקראיניות באזורים מיושבים בדונייצק שהביאו לפציעת שבעה אזרחים.",
     "axis": "החזית המזרחית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T21:30:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T21:30:05+00:00",
     "last_update_at": "2026-11-22T21:30:05+00:00",
     "what_is_not_verified": "אמינות הנתונים הנמסרים מצד רשויות רוסיה/דונייצק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_2953b86a61a1b989",
       "url": "https://tass.com/defense/2223091",
       "published_at": "2026-11-22T21:30:05+00:00"
      }
     ],
     "places": [
      {
       "name": "דונייצק, אוקראינה",
       "lat": 48.0159,
       "lon": 37.8013
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-10",
     "title": "פגיעת כטב\"ם ג'אהד בגן ילדים בחארקוב",
     "summary": "כטב\"ם מסוג שהאד פגע בגן ילדים ברובע נמישליאנסקי שבחארקוב, ומספר בני אדם נפצעו.",
     "axis": "החזית הצפון-מזרחית (חארקוב)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T21:02:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T21:02:00+00:00",
     "last_update_at": "2026-11-22T21:02:00+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק וחומרת פציעתם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_1a07c5fbbaa31ce9",
       "url": "https://www.ukrinform.net/rubric-ato/4187482-shahed-drone-strikes-kindergarten-in-kharkiv-several-injured.html",
       "published_at": "2026-11-22T21:02:00+00:00"
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
     "id": "UKRAINE-11230044-11",
     "title": "נזק לגן ילדים בהורלובקה מתקיפת כטב\"ם אוקראיני",
     "summary": "כטב\"מים אוקראיניים פגעו וגרמו נזק לגן ילדים, לבנייני מגורים ולרכבים בהורלובקה.",
     "axis": "החזית המזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T20:48:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T20:48:32+00:00",
     "last_update_at": "2026-11-22T20:48:32+00:00",
     "what_is_not_verified": "היקף הנזק המלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_7bb524ee96c79ccc",
       "url": "https://tass.com/emergencies/2223089",
       "published_at": "2026-11-22T20:48:32+00:00"
      }
     ],
     "places": [
      {
       "name": "הורלובקה, אוקראינה",
       "lat": 48.3059,
       "lon": 38.0028
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-12",
     "title": "תקיפות רוסיות נוספות בחארקוב",
     "summary": "נמשכות התקיפות הרוסיות בחארקוב, עם דיווח על פגיעה ברובע חולודנוהירסקי.",
     "axis": "החזית הצפון-מזרחית (חארקוב)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T20:31:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T20:31:00+00:00",
     "last_update_at": "2026-11-22T20:31:00+00:00",
     "what_is_not_verified": "פרטים על נפגעים נוספים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_f6a1a995a7cb7510",
       "url": "https://www.ukrinform.net/rubric-ato/4187481-russian-attacks-on-kharkiv-continue-strike-reported-in-one-district.html",
       "published_at": "2026-11-22T20:31:00+00:00"
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
     "id": "UKRAINE-11230044-13",
     "title": "חילוץ פעוט וגופות מהריסות בדימר",
     "summary": "כוחות ההצלה חילצו ילד בחיים ומספר גופות מתחת להריסות של בניין מגורים שהופצץ בדימר שבמחוז קייב.",
     "axis": "עורף קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T19:29:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T19:29:00+00:00",
     "last_update_at": "2026-11-22T19:29:00+00:00",
     "what_is_not_verified": "גורלם של נעדרים נוספים תחת ההריסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_333d42f144bd3f1d",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064075/",
       "published_at": "2026-11-22T19:29:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דימר, אוקראינה",
       "lat": 50.7864,
       "lon": 30.3039
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-14",
     "title": "פגיעה בחנות במחוז קייב והרוגים",
     "summary": "פגיעת כטב\"ם בחנות מכולת ובסופרמרקט ביישוב וישנבֶה שבמחוז קייב גרמה למותם של שלושה בני אדם ולפציעתם של 15 נוספים.",
     "axis": "עורף קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T18:44:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T18:44:00+00:00",
     "last_update_at": "2026-11-22T18:44:00+00:00",
     "what_is_not_verified": "מספר סופי של נפגעים מתחת להריסות האזור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_1380b4c93aecb8a5",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064090/",
       "published_at": "2026-11-22T18:44:00+00:00"
      }
     ],
     "places": [
      {
       "name": "וישנבה, אוקראינה",
       "lat": 50.3917,
       "lon": 30.3679
      }
     ]
    },
    {
     "id": "UKRAINE-11230044-15",
     "title": "הפסקות חשמל חירום במספר מחוזות באוקראינה",
     "summary": "חברת האנרגיה הלאומית של אוקראינה דיווחה על הפסקות חשמל חירום בחמישה מחוזות בעקבות תקיפות רוסיות על מתקני אנרגיה.",
     "axis": "תשתיות אנרגיה ואתרים אסטרטגיים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T17:30:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T17:30:00+00:00",
     "last_update_at": "2026-11-22T17:30:00+00:00",
     "what_is_not_verified": "מועד מדויק לתיקון מלא של התשתיות בכל האזורים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e096a145397852b8",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064085/",
       "published_at": "2026-11-22T17:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז זפוריז'יה, אוקראינה",
       "lat": 46.4609,
       "lon": 34.8643
      }
     ]
    }
   ],
   "not_verified": [
    "מעורבות ישירה ורשמית של אוקראינה בתקיפות הספינות בבנגאזי ובלוב",
    "דיווחים על קשר של מדינות בלטיות לתקיפות במובלעת קלינינגרד",
    "היקף הנזק המדויק בבתי הזיקוק במחוז רוסטוב"
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
     "value": 1.099,
     "unit": "USD",
     "change_pct": -0.02,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שטחי המדינה",
      "קבלת תמיכה צבאית וכלכלית בינלאומית"
     ],
     "inferred": [
      "שיבוש נתיבי האספקה והלוגיסטיקה הימיים והיבשתיים של רוסיה",
      "פגיעה בתשתיות עורפיות בתוך רוסיה ובנכסים רוסיים מחוץ לגבולות המדינה"
     ],
     "forecast": [
      "המשך מאמצים להשגת מערכות הגנה אווירית מתקדמות מבני ברית",
      "הרחבת פעילות הכטב\"מים נגד נכסים ימיים ויבשתיים של רוסיה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בתשתיות הצבאיות והתומכות של אוקראינה"
     ],
     "inferred": [
      "שחיקת משק האנרגיה האוקראיני לקראת עונת החורף",
      "שיבוש רשתות החשמל והתשתיות האזרחיות כדי לשבור את הרוח הציבורית"
     ],
     "forecast": [
      "המשך שימוש במתקפות אוויריות מרוכזות של כטב\"מים וטילים ארוכי טווח",
      "התגוננות מפני מתקפות סימטריות ואסימטריות על צי המטען והמלחמה הימי שלה"
     ]
    },
    {
     "actor": "ארצות הברית ובעלות בריתה",
     "declared": [
      "קיום דיונים על ארכיטקטורת ביטחון לאחר הסכסוך",
      "בחינת אפשרויות למתן ערבויות ביטחוניות דומות לסעיף 5"
     ],
     "inferred": [
      "שאיפה להפחתת הנטל הכלכלי על ארה\"ב והעברת נטל המימון לאירופה",
      "ניסיון למנוע זליגה רחבה של העימות למדינות נאט\"ו"
     ],
     "forecast": [
      "המשך לחץ מדיני לקידום פתרונות דיפלומטיים עתידיים",
      "וויכוחים פנימיים באירופה לגבי מתווה התקציב ותמיכה ישירה באוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/22/blast-russian-ship-suspected-drone-attack-benghazi-libya",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/polish-authorities-find-russian-missile-remains-at-three-sites-following-airspace-incursion/",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064085/",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2223089",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49843",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4187481-russian-attacks-on-kharkiv-continue-strike-reported-in-one-district.html",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/h1ocd5g17g",
     "accessed_at": "2026-11-23T00:44:14+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-22T07:24:50+00:00",
  "changes": {
   "UKRAINE-11230044-01": {
    "kind": "new"
   },
   "UKRAINE-11230044-02": {
    "kind": "new"
   },
   "UKRAINE-11230044-03": {
    "kind": "new"
   },
   "UKRAINE-11230044-04": {
    "kind": "new"
   },
   "UKRAINE-11230044-05": {
    "kind": "new"
   },
   "UKRAINE-11230044-06": {
    "kind": "new"
   },
   "UKRAINE-11230044-07": {
    "kind": "new"
   },
   "UKRAINE-11230044-08": {
    "kind": "new"
   },
   "UKRAINE-11230044-09": {
    "kind": "new"
   },
   "UKRAINE-11230044-10": {
    "kind": "possible",
    "prev": "פגיעת כטב״ם באוניה רוסית בים הבלטי",
    "score": 0.467
   },
   "UKRAINE-11230044-11": {
    "kind": "new"
   },
   "UKRAINE-11230044-12": {
    "kind": "possible",
    "prev": "תקיפות רוסיות במחוז סומי",
    "score": 0.467
   },
   "UKRAINE-11230044-13": {
    "kind": "new"
   },
   "UKRAINE-11230044-14": {
    "kind": "possible",
    "prev": "פגיעת כטב״ם במבנה מגורים במחוז קייב",
    "score": 0.467
   },
   "UKRAINE-11230044-15": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-23T0045__north-202611230045.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-23T00:45:49+00:00",
   "window": {
    "from": "2026-11-22T00:45:49+00:00",
    "to": "2026-11-23T00:45:49+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611230045"
   },
   "summary": "בזירה הצפונית נמשכות פעולות הנדסיות והרס מבנים מצד כוחות צה\"ל בדרום לבנון, לצד מחאות מקומיות של תושבים וגינויים מצד הנהגת לבנון. במקביל, בגבול סוריה ולבנון מתבצעות תפיסות אמצעי לחימה והברחות, ובדרום סוריה מדווח על פעילות צבאית ישראלית שוטפת והגבלות על חקלאים מקומיים.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעיל חלקית עם פעולות צה\"ל והתרחשויות בגבול"
    },
    {
     "name": "חזית סוריה",
     "status": "פעיל עם עימותים מקומיים, מוקשים, ופעילות צבאית באזור הגבול"
    }
   ],
   "events": [
    {
     "id": "NORTH-11230045-01",
     "title": "ביקור דוברת צה\"ל בבית ספר בדרום לבנון",
     "summary": "דוברת צה\"ל בערבית ביקרה בבית ספר בכפר דבל ועוררה ביקורת מצד ראש ממשלת לבנון והעירייה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T21:06:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T21:06:23+00:00",
     "last_update_at": "2026-11-22T22:55:18+00:00",
     "what_is_not_verified": "הטענות על אופי הביקור וההקשר שלו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1bxcal1qe",
       "published_at": "2026-11-22T22:55:18+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21910055",
       "published_at": "2026-11-22T21:06:23+00:00"
      }
     ],
     "places": [
      {
       "name": "דבל",
       "lat": 33.2492,
       "lon": 35.3489
      }
     ]
    },
    {
     "id": "NORTH-11230045-02",
     "title": "פיצוצים והריסת מבנים בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו פיצוצים והרס מבנים במספר מוקדים בדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T11:02:22+00:00",
     "last_update_at": "2026-11-22T22:54:33+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכל כפר וכפר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-carries-out-more-demolitions-southern-lebanon",
       "published_at": "2026-11-22T22:54:33+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134053",
       "published_at": "2026-11-22T14:51:42+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/153742/",
       "published_at": "2026-11-22T11:02:22+00:00"
      }
     ],
     "places": [
      {
       "name": "קנטרה",
       "lat": 33.2735,
       "lon": 35.4591
      },
      {
       "name": "כפר טיבנית",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-11230045-03",
     "title": "פיצוץ מוקש בצפון-מערב סוריה",
     "summary": "פיצוץ מוקש נותר מעברה של מלחמת האזרחים הרג חמישה ילדים בכפר בסוריה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T17:30:44+00:00",
     "last_update_at": "2026-11-22T22:09:36+00:00",
     "what_is_not_verified": "זהות הגורם המדויק שהניח את המוקש הספציפי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/landmine-blast-kills-5-children-northwest-syria",
       "published_at": "2026-11-22T22:09:36+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/landmine-explosion-kills-4-children-injures-2-in-northwestern-syria/4133764",
       "published_at": "2026-11-22T17:30:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11230045-04",
     "title": "השמדת חומרי נפץ וסמים בסוריה",
     "summary": "מחלקת המלחמה בסמים של סוריה השמידה כמויות גדולות של סמים וחומרים אסורים.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T18:21:01+00:00",
     "last_update_at": "2026-11-22T18:21:01+00:00",
     "what_is_not_verified": "היקף התפשטות הרשתות מעבר לנתונים הרשמיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_73c06d2022eb4871",
       "url": "https://english.enabbaladi.net/archives/2026/11/syrias-anti-narcotics-department-destroys-drugs-seized-in-security-operations/",
       "published_at": "2026-11-22T18:21:01+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11230045-05",
     "title": "תפיסת משלוח חומרי נפץ בגבול לבנון-סוריה",
     "summary": "הצבא הלבנוני תפס משלוח חומרי נפץ מסוג סי-פור וטי-אנ-טי שהוברחו מסוריה ועצר חשודים.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T10:43:03+00:00",
     "last_update_at": "2026-11-22T10:43:03+00:00",
     "what_is_not_verified": "היעד הסופי של משלוח חומרי הנפץ ומעורבות ארגונים נסתרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/969192/sources-to-lbci-lebanese-army-seizes-264-kilograms-of-explosives-smugg/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969192",
       "published_at": "2026-11-22T10:43:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11230045-06",
     "title": "מניעת מסיק זיתים והגבלות על חקלאים בדרום סוריה",
     "summary": "כוחות ישראליים מנעו מחקלאים מקומיים לקטוף זיתים באזור קוניטרה ודרעא ודרשו מהם לעזוב את האדמות.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T12:59:14+00:00",
     "last_update_at": "2026-11-22T12:59:14+00:00",
     "what_is_not_verified": "היקף הפעילות המלא של הביצורים בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/153792/",
       "published_at": "2026-11-22T12:59:14+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ראפד",
       "lat": 32.9559,
       "lon": 35.9009
      }
     ]
    }
   ],
   "not_verified": [
    "טענות שר החוץ הטורקי על חימוש שבוע של פלגים דרוזים בסוריה על ידי ישראל",
    "הקשר המדויק בין משלוחי חומרי הנפץ שהוברחו מסוריה לבין גורמים צבאיים ספציפיים",
    "מניעי החטיפה של הפעיל בסווידא בידי משמרות הלאום"
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
     "actor": "ישראל",
     "declared": [
      "פירוק תשתיות טרור ומניעת התבססות"
     ],
     "inferred": [
      "יצירת אזורי חיץ ביטחוניים בדרום לבנון ובדרום סוריה"
     ],
     "forecast": [
      "המשך פעולות הנדסיות וסיכול איומים בגבולות הצפון"
     ]
    },
    {
     "actor": "לבנון / ממשלת לבנון",
     "declared": [
      "שמירה על ריבונות המדינה וגינוי פעולות צבאיות זרות"
     ],
     "inferred": [
      "ניסיון להפעיל לחץ מדיני נגד הנוכחות הישראלית בשטחי הגבול"
     ],
     "forecast": [
      "המשך מחאות והימנעות מקבלת ברכות עצמאות רשמיות כמחאה"
     ]
    },
    {
     "actor": "סוריה / שלטונות סוריה",
     "declared": [
      "טיהור שטחים ממוקשים וניהול כלכלה וביטחון פנים"
     ],
     "inferred": [
      "ניסיון לשקם מוסדות ולבלום הברחות גבול"
     ],
     "forecast": [
      "המשך פינוי אמצעי לחימה וניסיונות ייצוב פנים-ארציים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/153792/",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/landmine-explosion-kills-4-children-injures-2-in-northwestern-syria/4133764",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/syrias-anti-narcotics-department-destroys-drugs-seized-in-security-operations/",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21910055",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/969192/sources-to-lbci-lebanese-army-seizes-264-kilograms-of-explosives-smugg/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969192",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-carries-out-more-demolitions-southern-lebanon",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/landmine-blast-kills-5-children-northwest-syria",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134053",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1bxcal1qe",
     "accessed_at": "2026-11-23T00:45:49+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-22T07:31:24+00:00",
  "changes": {
   "NORTH-11230045-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11230045-02": {
    "kind": "possible",
    "prev": "הקמת אנדרטאות זיכרון צבאיות בידי חיילי מילואים בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11230045-03": {
    "kind": "possible",
    "prev": "העברת סמכויות והחלטות טורקיות בנוגע למוסדות לימוד בצפון סוריה",
    "score": 0.467
   },
   "NORTH-11230045-04": {
    "kind": "possible",
    "prev": "אזהרת שר החוץ הטורקי מפני פעילות ישראלית בסוריה",
    "score": 0.633
   },
   "NORTH-11230045-05": {
    "kind": "new"
   },
   "NORTH-11230045-06": {
    "kind": "new"
   }
  }
 }
};
