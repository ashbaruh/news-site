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
  "draft": "drafts/iran/2026-11-22T0722__iran-202611220722.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-22T07:22:00+00:00",
   "window": {
    "from": "2026-11-21T07:22:00+00:00",
    "to": "2026-11-22T07:22:00+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611220722"
   },
   "summary": "הזירה מאופיינת בהסלמה צבאית הכוללת תקיפות של משמרות המהפכה האיראניים נגד בסיסים אמריקאיים בבחריין ופעילות פוגענית נגד נתיבי השיט במצר הורמוז, לצד לחץ כלכלי ומצור אמריקאי שטהרן מגדירה כפעולת מלחמה. איראן ממשיכה באיומים על המרחב האווירי שלה ומשבר האנרגיה הפנימי, בעוד מעצמות אזוריות ובינלאומיות מזהירות מפני התרחבות ההשלכות הכלכליות והאזוריים של העימות.",
   "fronts": [
    {
     "name": "איראן מול ארה\"ב ובחריין",
     "status": "פעיל והסלמה"
    },
    {
     "name": "מצר הורמוז וסחר ימי",
     "status": "חסום ותחת תקיפות"
    },
    {
     "name": "לבנון (התערבות איראנית ונסיגה ישראלית)",
     "status": "מתיחות מדינית ומשפטית"
    }
   ],
   "events": [
    {
     "id": "IRAN-11220722-01",
     "title": "תקיפת בסיסים אמריקאיים בבחריין",
     "summary": "משמרות המהפכה של איראן ביצעו פעולה התקפית ושיגרו טילים בליסטיים וכטב\"מים לעבר בסיסים אמריקאיים בבחריין, ובנוסף דווח על פגיעה במתקן אזרחי ושריפה.",
     "axis": "איראן מול ארה\"ב ובחריין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T19:54:14+00:00",
     "last_update_at": "2026-11-22T06:05:58+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בבסיסים וההתרחשויות המלאות סביב היירוטים אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://en.irna.ir/news/86328844/IRGC-hits-two-US-patriot-radar-systems-in-Bahrain",
       "published_at": "2026-11-22T06:05:58+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.al-monitor.com/originals/2026/11/bahrain-says-iran-struck-industrial-site-tankers-hit-hormuz",
       "published_at": "2026-11-22T03:30:22+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/21/iran-war-live-iran-targets-us-military-in-bahrain-houthi-strikes-continue?traffic_source=rss",
       "published_at": "2026-11-21T23:59:03+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.maariv.co.il/breaking-news/article-1390856",
       "published_at": "2026-11-21T21:46:48+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.maariv.co.il/breaking-news/article-1390841",
       "published_at": "2026-11-21T20:54:15+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.maariv.co.il/breaking-news/article-1390834",
       "published_at": "2026-11-21T20:31:38+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21902124",
       "published_at": "2026-11-21T20:27:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://t.me/abualiexpress/134021",
       "published_at": "2026-11-21T20:19:49+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_39ca6cfb13272e3e",
       "url": "https://www.maariv.co.il/breaking-news/article-1390824",
       "published_at": "2026-11-21T19:54:14+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס חיל האוויר שייח' עיסא, בחריין",
       "lat": 25.9144,
       "lon": 50.5926
      },
      {
       "name": "ג'ופייר, בחריין",
       "lat": 26.2146,
       "lon": 50.6041
      }
     ]
    },
    {
     "id": "IRAN-11220722-02",
     "title": "טענה איראנית על פגיעה במטוס קרב אמריקאי",
     "summary": "באיראן טענו כי מערכות ההגנה האווירית פגעו במטוס F-16 אמריקאי ואילצו אותו לבצע נחיתת חירום, בעוד פיקוד המרכז של צבא ארה\"ב הכחיש את הטענה בתוקף.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:22:24+00:00",
     "last_update_at": "2026-11-21T16:46:27+00:00",
     "what_is_not_verified": "נכונות הטענה על פגיעת טיל איראני במטוס והנזק הנטען.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-denies-iranian-account-missile-damaged-f-16-over-gulf",
       "published_at": "2026-11-21T16:46:27+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95090",
       "published_at": "2026-11-21T15:22:24+00:00"
      }
     ],
     "places": [
      {
       "name": "דובאי, איחוד האמירויות הערביות",
       "lat": 25.0743,
       "lon": 55.1886
      }
     ]
    },
    {
     "id": "IRAN-11220722-03",
     "title": "פגיעה במכליות נפט במצר הורמוז",
     "summary": "דווח על שתי מכליות שהותקפו ונפגעו במצר הורמוז, כאשר נתיב השיט נותר חסום ברובו עקב תקיפות כלי שיט.",
     "axis": "איראן מול חופש השיט הבינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T16:02:59+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T16:02:59+00:00",
     "last_update_at": "2026-11-22T03:30:22+00:00",
     "what_is_not_verified": "זהותם המדויקת של הגורמים שביצעו את התקיפות הספציפיות על כל מכלית ומכלית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/bahrain-says-iran-struck-industrial-site-tankers-hit-hormuz",
       "published_at": "2026-11-22T03:30:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/endurance-athlete-swims-in-hormuz-strait",
       "published_at": "2026-11-21T16:02:59+00:00"
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
    "הטענה האיראנית לפיה נפגע מטוס F-16 אמריקאי ונאלץ לנחות נחיתת חירום",
    "הדיווחים המדויקים על היקף הנזק בשני בסיסי ארה\"ב בבחריין",
    "התוכניות המדויקות של ארה\"ב בנוגע להרחבת המצור היבשתי והימי על איראן"
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
      "המרחב האווירי של איראן הוא קו אדום וכל הפרשיות ייענו בתגובה נחרצת",
      "שבירת המצור הכלכלי והימי האמריקאי המוגדר כפעולת מלחמה"
     ],
     "inferred": [
      "יצירת הרתעה מול ארה\"ב באמצעות תקיפת בסיסים במפרץ",
      "ניצול חוסר ההחלטיות לכאורה בצד האמריקאי כדי לשנות את מאזן הכוחות האזורי"
     ],
     "forecast": [
      "המשך ניסיונות לשבור את המצור הימי על ידי שליחת מכליות נפט",
      "תגובות נוספות בנכסים אמריקאיים באזור אם הלחץ הכלכלי יימשך"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "הגנה על כוחות ויעדים אמריקאיים במפרץ מפני תקיפות איראניות",
      "מניעת התבססות והשפעה שלילית של איראן ושלוחותיה במרחב"
     ],
     "inferred": [
      "העדפת הפעלת לחץ כלכלי ומצור הדוק על טהרן כתחליף למלחמה כוללת חדשה",
      "שמירה על חופש השיט במצר הורמוז למרות האיומים והפגיעה במכליות"
     ],
     "forecast": [
      "תגובה צבאית אפשרית על מתקפת הטילים והכטב\"מים בבחריין",
      "הידוק נוסף של הסנקציות והמצור הכלכלי על איראן בשיתוף מדינות המפרץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/21/iran-war-live-iran-targets-us-military-in-bahrain-houthi-strikes-continue?traffic_source=rss",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/bahrain-says-iran-struck-industrial-site-tankers-hit-hormuz",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/endurance-athlete-swims-in-hormuz-strait",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86328844/IRGC-hits-two-US-patriot-radar-systems-in-Bahrain",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21902124",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1390824",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134021",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95090",
     "accessed_at": "2026-11-22T07:22:00+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-21T17:45:08+00:00",
  "changes": {
   "IRAN-11220722-01": {
    "kind": "new"
   },
   "IRAN-11220722-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "הכחשת ארה\"ב לגבי פגיעה במטוס F-16 מעל המפרץ",
    "score": 1.0
   },
   "IRAN-11220722-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקריות במצר הורמוז ומכליות נפגעות",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-22T0724__ukraine-202611220724.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-22T07:24:50+00:00",
   "window": {
    "from": "2026-11-21T07:24:50+00:00",
    "to": "2026-11-22T07:24:50+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611220724"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתאת מתקפות אוויריות הדדיות, הכוללות שימוש נרחב בכטב״מים ובטילי שיוט מצד רוסיה אל עבר עורף ותשתיות באוקראינה, לצד דיווחים על פעילות התקפית אוקראינית במרחבים ימיים ויבשתיים. במקביל, נמשכים מאמצי התמיכה הצבאית והדיפלומטית במדינות המערב, תוך כדי התרחבות מתיחות אזורית למדינות שכנות עקב זליגת אמצעי לחימה למרחבים אווויריים זרים.",
   "fronts": [
    {
     "name": "חזית האוויר וההגנה האווירית",
     "status": "פעיל מאוד עם מתקפות כטב״מים וטילים נרחבות"
    },
    {
     "name": "החזית הימית (הים הבלטי ומפרץ פינלנד)",
     "status": "פעיל עם אירועי תקיפת כלי שיט וזליגת מתח"
    },
    {
     "name": "החזית המזרחית והמרכזית באוקראינה",
     "status": "פעיל עם תקיפות קרקעיות ואוויריות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11220724-01",
     "title": "מתקפת כטב״מים רוסית נרחבת על אוקראינה",
     "summary": "כוחות רוסיה תקפו את אוקראינה באמצעות מספר רב של כטב״מים, ומערכות ההגנה האווירית האוקראיניות יירטו או שיבשו את מרביתם.",
     "axis": "חזית האוויר",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T06:27:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T06:27:00+00:00",
     "last_update_at": "2026-11-22T06:48:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_24000463485182ac",
       "url": "https://www.ukrinform.net/rubric-ato/4187288-air-defenses-down-161-of-186-russian-drones-launched-against-ukraine-since-evening.html",
       "published_at": "2026-11-22T06:48:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_51bbf9821af5439a",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064012/",
       "published_at": "2026-11-22T06:27:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11220724-02",
     "title": "פגיעת כטב״ם במבנה מגורים במחוז קייב",
     "summary": "מתקפת כטב״מים רוסית פגעה בבניין מגורים בן חמש קומות במחוז קייב, גרמה להרס נרחב, לפינוי תושבים ולפציעת בני אדם.",
     "axis": "החזית הצפונית-מרכזית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T04:49:11+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T04:49:11+00:00",
     "last_update_at": "2026-11-22T05:56:00+00:00",
     "what_is_not_verified": "האם שבעה אנשים לכודים תחת ההריסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_5adf5aec755815f9",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064011/",
       "published_at": "2026-11-22T05:56:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_e4c1c885f6a588b7",
       "url": "https://www.ukrinform.net/rubric-ato/4187278-residential-building-damaged-in-russian-drone-attack-in-vyshhorod-district-residents-evacuated.html",
       "published_at": "2026-11-22T05:30:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_ea1c59f0fb189f18",
       "url": "https://kyivindependent.com/apartment-building-destroyed-in-kyiv-oblast-following-russian-drone-attack/",
       "published_at": "2026-11-22T04:49:11+00:00"
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
     "id": "UKRAINE-11220724-03",
     "title": "תקיפות רוסיות במחוז סומי",
     "summary": "כוחות רוסיים תקפו מספר יישובים במחוז סומי וגרמו לפציעתם של מספר אזרחים.",
     "axis": "החזית המזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T05:52:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T05:52:00+00:00",
     "last_update_at": "2026-11-22T05:52:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_3f65066788f04cb2",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064009/",
       "published_at": "2026-11-22T05:52:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11220724-04",
     "title": "פגיעת כטב״ם באוניה רוסית בים הבלטי",
     "summary": "אוניית מטען רוסית נפגעה מכטב״ם בים הבלטי ועלתה באש, וצוותה פונה.",
     "axis": "הזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T19:20:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T19:20:22+00:00",
     "last_update_at": "2026-11-22T02:19:48+00:00",
     "what_is_not_verified": "האחריות המדויקת של אוקראינה למתקפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_finnish_border_guard_and_defense_ministr",
       "url": "https://www.theguardian.com/world/2026/nov/22/ukraine-war-briefing-russian-cargo-ship-hit-by-drone-in-baltic-sea-as-finland-pm-says-conflict-spilling-over",
       "published_at": "2026-11-22T02:19:48+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_finnish_border_guard_and_defense_ministr",
       "url": "https://tass.com/world/2222939",
       "published_at": "2026-11-21T20:00:01+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_finnish_border_guard_and_defense_ministr",
       "url": "https://www.bbc.co.uk/news/articles/cj752ddve27ko?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-21T19:20:22+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ פינלנד, הים הבלטי",
       "lat": 59.8737,
       "lon": 26.323
      }
     ]
    },
    {
     "id": "UKRAINE-11220724-05",
     "title": "חתימת הסכם לייצור כטב״מים בבריטניה עבור אוקראינה",
     "summary": "אוקראינה ובריטניה חתמו על הסכם שבו בריטניה תייצר כטב״מים ארוכי טווח וטווח ביניים עבור אוקראינה על אדמת בריטניה.",
     "axis": "זירת הסיוע הבינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T01:30:56+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T01:30:56+00:00",
     "last_update_at": "2026-11-22T01:30:56+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_654f0d5e420a53d8",
       "url": "https://kyivindependent.com/uk-to-produce-middle-strike-long-range-drones-for-ukraine-in-britain/",
       "published_at": "2026-11-22T01:30:56+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "UKRAINE-11220724-06",
     "title": "חדירות מרחב אוווירי של מדינות שכנות",
     "summary": "מולדובה ופינלנד דיווחו על חדירות של כלי טיס רוסיים למרחב האווירי שלהן, יום לאחר נפילת טילים וזלזולים בפולין.",
     "axis": "הזירה האזורית והגבולית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T23:35:21+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T23:35:21+00:00",
     "last_update_at": "2026-11-21T23:35:21+00:00",
     "what_is_not_verified": "הקשר המדויק בין החדירות לפעילות המבצעית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5784f0bf0363baa9",
       "url": "https://kyivindependent.com/moldova-finland-report-russian-airspace-violations-day-after-suspected-russian-missiles-flew-into-poland/",
       "published_at": "2026-11-21T23:35:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11220724-07",
     "title": "נפילת עצמים וטילים באזור גבול פולין",
     "summary": "טילי שיוט וכטב״ם פגעו או נפלו בשטח פולין במהלך מתקפות אוויריות רוסיות באוקראינה, והובילו לגינוי מצד פולין.",
     "axis": "הזירה הגבולית עם נאט״ו",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T15:07:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:07:05+00:00",
     "last_update_at": "2026-11-21T15:07:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_polish_officials_and_defense_minister",
       "url": "https://www.theguardian.com/world/video/2026/nov/21/cctv-shows-unknown-object-crashing-and-exploding-near-poland-ukraine-border-video",
       "published_at": "2026-11-21T15:07:05+00:00"
      }
     ],
     "places": [
      {
       "name": "גבול פולין-אוקראינה",
       "lat": 51.5082,
       "lon": 23.6178
      }
     ]
    },
    {
     "id": "UKRAINE-11220724-08",
     "title": "פגיעות בתשתיות אנרגיה באוקראינה",
     "summary": "הכוחות הרוסיים תקפו מתקן אנרגיה שסיפק חשמל למפעלים ביטחוניים אוקראיניים.",
     "axis": "החזית האסטרטגית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T15:53:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:53:15+00:00",
     "last_update_at": "2026-11-21T15:53:15+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_e80768169bb62e39",
       "url": "https://tass.com/defense/2222907",
       "published_at": "2026-11-21T15:53:15+00:00"
      }
     ],
     "places": [
      {
       "name": "ויניצה, אוקראינה",
       "lat": 49.232,
       "lon": 28.468
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק תחת הריסות הבניין בדימר",
    "הקשר המדויק והאחריות הבלעדית לתקיפת האוניה בים הבלטי",
    "טענות הצדדים על היקפי האבידות והנזקים"
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
     "actor": "רוסיה",
     "declared": [
      "פגיעה בתשתיות צבאיות ותומכות לחימה של אוקראינה"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והצבאיות של אוקראינה",
      "הרחבת הלחץ על העורף האוקראיני באמצעות מתקפות בלתי פוסקות"
     ],
     "forecast": [
      "המשך תקיפות האנרגיה והתשתיות לקראת החורף",
      "ניסיונות שיבוש נתיבי האספקה הימיים והיבשתיים של אוקראינה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שמי המדינה ויירוט האיומים האוויריים",
      "חיזוק קשרי הייצור הביטחוני עם בריתות בינלאומיות"
     ],
     "inferred": [
      "פיתוח יכולות תקיפה עצמאיות וימיות מרוחקות",
      "גיוס תמיכה דיפלומטית וכלכלית רחבה ממדינות המערב והקונגרס האמריקאי"
     ],
     "forecast": [
      "המשך שיתופי פעולה ביטחוניים להקמת קווי ייצור כטב״מים בשטח מדינות זרות",
      "הרחבת הפעילות נגד יעדים צבאיים ולוגיסטיים בעומק שטחי האויב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cj752ddve27ko?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-22T07:24:50+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/nov/21/cctv-shows-unknown-object-crashing-and-exploding-near-poland-ukraine-border-video",
     "accessed_at": "2026-11-22T07:24:50+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/moldova-finland-report-russian-airspace-violations-day-after-suspected-russian-missiles-flew-into-poland/",
     "accessed_at": "2026-11-22T07:24:50+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/22/8064009/",
     "accessed_at": "2026-11-22T07:24:50+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2222907",
     "accessed_at": "2026-11-22T07:24:50+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4187278-residential-building-damaged-in-russian-drone-attack-in-vyshhorod-district-residents-evacuated.html",
     "accessed_at": "2026-11-22T07:24:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-21T17:48:56+00:00",
  "changes": {
   "UKRAINE-11220724-01": {
    "kind": "new"
   },
   "UKRAINE-11220724-02": {
    "kind": "new"
   },
   "UKRAINE-11220724-03": {
    "kind": "new"
   },
   "UKRAINE-11220724-04": {
    "kind": "possible",
    "prev": "תקיפת כטב\"ם על ספינת מטען בפינלנד",
    "score": 0.633
   },
   "UKRAINE-11220724-05": {
    "kind": "new"
   },
   "UKRAINE-11220724-06": {
    "kind": "new"
   },
   "UKRAINE-11220724-07": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "פגיעת טילים ורחפנים בשטח פולין",
    "score": 1.0
   },
   "UKRAINE-11220724-08": {
    "kind": "possible",
    "prev": "פגיעות בתשתיות חשמל במחוז אודסה",
    "score": 0.467
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-22T0731__north-202611220731.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-22T07:31:24+00:00",
   "window": {
    "from": "2026-11-21T07:31:24+00:00",
    "to": "2026-11-22T07:31:24+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611220731"
   },
   "summary": "בגזרה הצפונית, לבנון מציינת את יום עצמאותה תוך עימות מדיני פנימי וחיצוני סביב דרישות לפירוק נשק שאינו של המדינה ולסיום הנוכחות הישראלית, במקביל לתחילת העברת מוצבי יוניפי\"ל לצבא לבנון. בסוריה, טורקיה מעורבת בארגון מחדש של מוסדות חינוך בצפון המדינה ומביעה חשש מפני שיתוף פעולה ישראלי אפשרי עם קבוצות דרומיות, בעוד צה\"ל ממשיך בפעילות מבצעית ומקומית.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה חלקית עם חילופי אש ותהליכי מסירת מוצבים"
    },
    {
     "name": "החזית הסורית",
     "status": "מתיחות מדינית והתערבות טורקית בצפון ובדרום"
    }
   ],
   "events": [
    {
     "id": "NORTH-11220731-01",
     "title": "קצין צה\"ל ביקר בני משפחה בקוניטרה",
     "summary": "אל\"מ דרוזי בצה\"ל הגיע לכפר בדרום סוריה כדי לפגוש את אמו ואחיו אחרי שנים רבות.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T06:45:01+00:00",
     "last_update_at": "2026-11-22T06:45:01+00:00",
     "what_is_not_verified": "זהות המקורות המדויקים בסוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134027",
       "published_at": "2026-11-22T06:45:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11220731-02",
     "title": "אזהרת שר החוץ הטורקי מפני פעילות ישראלית בסוריה",
     "summary": "שר החוץ הטורקי האשים את ישראל במתן תמיכה צבאית לשבט דרוזי בסוריה ובהתרעה מפני עימות אזורי רחב.",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T03:56:04+00:00",
     "last_update_at": "2026-11-22T03:56:04+00:00",
     "what_is_not_verified": "האם ישראל מתכננת מבצע צבאי בסוריה באמצעות דרוזים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-says-israel-could-use-druze-support-launch-syria-operation",
       "published_at": "2026-11-22T03:56:04+00:00"
      }
     ],
     "places": [
      {
       "name": "סווידא, סוריה",
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
     "id": "NORTH-11220731-03",
     "title": "נשיא לבנון דורש נסיגה ישראלית ופירוק נשק מחוץ למדינה",
     "summary": "נשיא לבנון דרש בנאום יום העצמאות נסיגת כוחות ישראליים והכפפת כל הנשק למרות המדינה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T14:08:49+00:00",
     "last_update_at": "2026-11-22T02:38:38+00:00",
     "what_is_not_verified": "לוחות זמנים מדויקים ליישום הדרישות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_dd95a1eb8f5eaea2",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-occupation-iranian-interference-threat-lebanese-sovereignty-aoun",
       "published_at": "2026-11-22T02:38:38+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_11e059f6a1ed0dc6",
       "url": "https://www.aljazeera.com/news/2026/11/21/lebanese-president-demands-israel-withdrawal-decries-irans-interference?traffic_source=rss",
       "published_at": "2026-11-21T23:44:00+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3aea6b768f90670c",
       "url": "https://english.almanar.com.lb/article/153612/",
       "published_at": "2026-11-21T18:56:51+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_dd95a1eb8f5eaea2",
       "url": "https://t.me/abualiexpress/134012",
       "published_at": "2026-11-21T18:03:52+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_7ced414e1314ae80",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/969114/in-independence-day-speech-aoun-demands-israeli-withdrawal-end-to-fore/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969114",
       "published_at": "2026-11-21T14:08:49+00:00"
      }
     ],
     "places": [
      {
       "name": "דבייה, לבנון",
       "lat": 33.9388,
       "lon": 35.5912
      },
      {
       "name": "נאהר אל-כאלב, לבנון",
       "lat": 33.9555,
       "lon": 35.5968
      }
     ]
    },
    {
     "id": "NORTH-11220731-04",
     "title": "תקיפות צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות ואש לעבר עיירות בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T10:50:12+00:00",
     "last_update_at": "2026-11-21T18:50:05+00:00",
     "what_is_not_verified": "היקף הנזק המלא בכל מוקד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_9f3fae1ecc544e0a",
       "url": "https://english.almanar.com.lb/article/153602/",
       "published_at": "2026-11-21T18:50:05+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_9f3fae1ecc544e0a",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-launches-renewed-attacks-on-southern-lebanese-towns/4132847",
       "published_at": "2026-11-21T10:50:12+00:00"
      }
     ],
     "places": [
      {
       "name": "בראשית, לבנון",
       "lat": 33.1785,
       "lon": 35.4372
      }
     ]
    },
    {
     "id": "NORTH-11220731-05",
     "title": "הקמת אנדרטאות זיכרון צבאיות בידי חיילי מילואים בדרום לבנון",
     "summary": "חיילי מילואים ישראלים הקימו לוחות זיכרון לחיילים שנפלו במוקדי קרב שונים בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:17:00+00:00",
     "last_update_at": "2026-11-21T15:17:00+00:00",
     "what_is_not_verified": "האם הפעולה אושרה רשמית בידי פיקוד הצבא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israeli-reservists-erect-military-memorials-inside-south-lebanon",
       "published_at": "2026-11-21T15:17:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מארון א-ראס, לבנון",
       "lat": 33.1031,
       "lon": 35.445
      },
      {
       "name": "בינת ג'ביל, לבנון",
       "lat": 33.1195,
       "lon": 35.4328
      }
     ]
    },
    {
     "id": "NORTH-11220731-06",
     "title": "העברת סמכויות והחלטות טורקיות בנוגע למוסדות לימוד בצפון סוריה",
     "summary": "השלטונות בטורקיה החליטו על סגירת מוסדות להשכלה גבוהה בצפון סוריה שפעלו בחסות אוניברסיטאות טורקיות והעברתם למערכת המקומית.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T16:04:16+00:00",
     "last_update_at": "2026-11-21T16:04:16+00:00",
     "what_is_not_verified": "ההשלכות המלאות על כלל הסטודנטים באזור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_b18efdc4a71e2e42",
       "url": "https://english.enabbaladi.net/archives/2026/11/turkey-approves-transfer-of-university-branches-in-syria/",
       "published_at": "2026-11-21T16:04:16+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'רבלוס, סוריה",
       "lat": 36.8181,
       "lon": 38.0098
      },
      {
       "name": "עפרין, סוריה",
       "lat": 36.5084,
       "lon": 36.8701
      },
      {
       "name": "אל-בב, סוריה",
       "lat": 36.3711,
       "lon": 37.5144
      }
     ]
    },
    {
     "id": "NORTH-11220731-07",
     "title": "יוניפי\"ל החל בהעברת מוצבים לצבא לבנון",
     "summary": "כוח יוניפי\"ל החל בתהליך מסירת מוצבים בדרום לבנון לידי צבא לבנון לקראת סיום המנדט.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T15:03:00+00:00",
     "last_update_at": "2026-11-21T15:48:20+00:00",
     "what_is_not_verified": "המנגנון המדויק שימלא את הוואקום הביטחוני באופן סופי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_e36915cec14e6692",
       "url": "https://www.aa.com.tr/en/middle-east/unifil-begins-handing-over-positions-in-southern-lebanon-to-lebanese-army/4133076",
       "published_at": "2026-11-21T15:48:20+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_e36915cec14e6692",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/969113/unifils-exit-looms-who-will-fill-the-security-vacuum-in-southern-leban/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969113",
       "published_at": "2026-11-21T15:03:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 39.371,
       "lon": -84.2128
      }
     ]
    },
    {
     "id": "NORTH-11220731-08",
     "title": "עמדת חיזבאללה ביום העצמאות הלבנוני",
     "summary": "ארגון חיזבאללה פרסם הודעה לפיה אין עצמאות אמיתית כל עוד נמשכת הנוכחות הישראלית בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T09:59:00+00:00",
     "last_update_at": "2026-11-21T09:59:00+00:00",
     "what_is_not_verified": "צעדים מעשיים שינקוט הארגון מול דרישות המדינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_8cb780f0df36241e",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/969060/hezbollah-no-true-independence-while-israeli-occupation-continues/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969060",
       "published_at": "2026-11-21T09:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 39.371,
       "lon": -84.2128
      }
     ]
    }
   ],
   "not_verified": [
    "האם ישראל מתכננת מבצע צבאי בסוריה בתמיכה דרוזית",
    "ההיתכנות המדויקת של הסכמות פירוק הנשק בלבנון"
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
     "declared": [],
     "inferred": [
      "שמירת חופש פעולה מבצעי בדרום לבנון ובמרחב הגבול",
      "מניעת התחמשות ושיקום כוחו של חיזבאללה"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות במקרה של הפרות",
      "שחיקה נוספת בהסכמים ללא הכרעה מדינית ברורה"
     ]
    },
    {
     "actor": "לבנון (ממשל וצבא)",
     "declared": [
      "יישום החלטות ריבוניות ופירוק נשק שאינו בשליטת המדינה",
      "דרישה לנסיגה ישראלית מלאה"
     ],
     "inferred": [
      "ניסיון להיעזר בגורמים בינלאומיים למילוי ואקום ביטחוני לאחר נסיגת יוניפי\"ל"
     ],
     "forecast": [
      "קשיים באכיפת פירוק הנשק מול חיזבאללה",
      "כניסה לתקופת מעבר רגישה בבסיסי בדרום הארץ"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הגנה על אינטרסים באזור והסדרת מוסדות חינוך בצפון סוריה",
      "אזהרה מפני הרחבת מעורבות זרה"
     ],
     "inferred": [
      "ביסוס השפעה אזרחית ושלטונית באזורים בצפון סוריה",
      "בלימת מהלכים אזוריים של ישראל"
     ],
     "forecast": [
      "המשך מעורבות דיפלומטית ואזרחית בצפון סוריה",
      "התנגדות פומבית לפעולות ישראליות בגבולות סוריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/21/lebanese-president-demands-israel-withdrawal-decries-irans-interference?traffic_source=rss",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/153602/",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/unifil-begins-handing-over-positions-in-southern-lebanon-to-lebanese-army/4133076",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/turkey-approves-transfer-of-university-branches-in-syria/",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/969060/hezbollah-no-true-independence-while-israeli-occupation-continues/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-969060",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-occupation-iranian-interference-threat-lebanese-sovereignty-aoun",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/israeli-reservists-erect-military-memorials-inside-south-lebanon",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134012",
     "accessed_at": "2026-11-22T07:31:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-21T03:40:37+00:00",
  "changes": {
   "NORTH-11220731-01": {
    "kind": "new"
   },
   "NORTH-11220731-02": {
    "kind": "possible",
    "prev": "בירור משפטי בסוריה בעקבות גזרי דין מוות נגד בכירי משטר אסד לשעבר",
    "score": 0.633
   },
   "NORTH-11220731-03": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "הצהרת ראש ממשלת לבנון על ריבונות מלאה ופירוק נשק חוץ-מדינתי",
    "score": 0.65
   },
   "NORTH-11220731-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות וארטילריות של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11220731-05": {
    "kind": "new"
   },
   "NORTH-11220731-06": {
    "kind": "new"
   },
   "NORTH-11220731-07": {
    "kind": "new"
   },
   "NORTH-11220731-08": {
    "kind": "possible",
    "prev": "ברכת נשיא ארצות הברית לנשיא לבנון לרגל יום העצמאות",
    "score": 0.467
   }
  }
 }
};
