/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-23T1111__yemen-202611231111.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-23T11:11:58+00:00",
   "window": {
    "from": "2026-11-22T11:11:58+00:00",
    "to": "2026-11-23T11:11:58+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611231111"
   },
   "summary": "הלחימה בין החות'ים לבין כוחות הממשלה והקואליציה מתרחבת בחזיתות הפנימיות, לצד המשך שיגורי טילים וכטב\"מים לעבר יעדים ותשתיות נפט בערב הסעודית. במקביל, הקואליציה מגיבה בתקיפות אוויריות על עמדות החות'ים ומתקני תקשורת בערי מפתח כמו אל-חודיידה ובצירי הגישה לדרום תימן. המרחב הימי סביב מפרץ עדן והים האדום נותר מתוח תחת נוכחות בינלאומית מוגברת לאבטחת נתיבי השיט.",
   "fronts": [
    {
     "name": "ציר מחוז אביאן - אל-בידא (שער הכניסה לעדן)",
     "status": "הסלמה בעקבות תגבור כוחות חות'יים ותקיפות אוויריות אינטנסיביות של כוחות הקואליציה"
    },
    {
     "name": "חזית חוף ים סוף וסעודיה",
     "status": "חילופי אש רחוקים הכוללים שיגורי טילים בליסטיים וכטב\"מים אל תשתיות סעודיות מול יירוטים ותקיפות באל-חודיידה"
    },
    {
     "name": "מרחב מפרץ עדן ומצר באב אל-מנדב",
     "status": "דריכות צבאית בינלאומית ופעילות אבטחה ימית לנוכח איומי פיראטיות והסלמה אזורית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11231111-01",
     "title": "תקיפה אווירית של הקואליציה על מבנה תקשורת באל-חודיידה",
     "summary": "הקואליציה בהובלת סעודיה ביצעה תקיפה אווירית על מתקן של חברת התקשורת הציבורית בעיר הנמל אל-חודיידה, וכתוצאה מכך נהרגו לפחות ארבעה בני אדם ונפצעו בין 10 ל-18 אנשים.",
     "axis": "תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T03:42:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T03:42:49+00:00",
     "last_update_at": "2026-11-23T08:03:11+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק אינו אחיד בדיווחים (10 או 18), והפרטים מבוססים על טענות התקשורת המזוהה עם החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-678",
       "published_at": "2026-11-23T08:03:11+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-and-us-trade-threats-tankers-burn-hormuz",
       "published_at": "2026-11-23T07:44:03+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-attack-yemens-hodeida-kills-four-wounds-18-others",
       "published_at": "2026-11-23T03:42:49+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11231111-02",
     "title": "טענת החות'ים לתקיפת בית הזיקוק ראביג' בסעודיה ויירוט טיל בליסטי",
     "summary": "החות'ים טענו כי שיגרו תקיפה לעבר בית הזיקוק ראביג' בחוף הים האדום של סעודיה והשיגו פגיעה ישירה. הקואליציה בהובלת סעודיה הודיעה כי יירטה והשמידה טיל בליסטי ששוגר לאזור המערבי.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T09:33:15+00:00",
     "last_update_at": "2026-11-23T00:21:32+00:00",
     "what_is_not_verified": "היקף הנזק בבית הזיקוק, אמיתות הפגיעה הישירה, ואמיתות הסרטונים המופצים ברשת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-attack-saudi-arabias-rabigh-oil-refinery",
       "published_at": "2026-11-23T00:21:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-missiles-target-saudi-arabia-iran-drones-strike-bahrain",
       "published_at": "2026-11-22T09:33:15+00:00"
      }
     ],
     "places": [
      {
       "name": "ראביג', ערב הסעודית",
       "lat": 22.799,
       "lon": 39.0336
      }
     ]
    },
    {
     "id": "YEMEN-11231111-03",
     "title": "הארכת הצבת יחידת הלחימה בפיראטיות הדרום-קוריאנית במפרץ עדן",
     "summary": "שר ההגנה של דרום קוריאה הבהיר כי המהלך להארכת פריסת יחידת צ'ונגהאי נגד פיראטיות במפרץ עדן נועד להגן על ספינות ואזרחים של המדינה בעקבות עלייה בפיראטיות, ואינו מהווה השתתפות במלחמה.",
     "axis": "מפרץ עדן והים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T02:24:14+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-23T02:24:14+00:00",
     "last_update_at": "2026-11-23T08:03:11+00:00",
     "what_is_not_verified": "הקשר המעשי בין הפריסה למתיחות האזורית הרחבה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-678",
       "published_at": "2026-11-23T08:03:11+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/south-korea-says-deployment-middle-easy-not-indirect-military",
       "published_at": "2026-11-23T02:24:14+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ עדן",
       "lat": 12.6147,
       "lon": 47.5063
      }
     ]
    },
    {
     "id": "YEMEN-11231111-04",
     "title": "הסלמה צבאית ותקיפות אוויריות בגבול מחוזות אל-בידא ואביאן",
     "summary": "מטוסים צבאיים ביצעו תקיפות אוויריות נגד תגבורות ועמדות של החות'ים בעקבת ת'רה, הרי אל-כור וגבעת אל-ארסאל בגבול אל-בידא ואביאן, ברקע מאמצי החות'ים להתקדם לעבר עדן.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-22T13:35:25+00:00",
     "last_update_at": "2026-11-22T13:35:25+00:00",
     "what_is_not_verified": "היקף האבדות המדויק בעקבות התקיפות והאם הושגה בלימה מוחלטת של ההתקדמות.",
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
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-11231111-05",
     "title": "יירוט כלי טיס בלתי מאויש ששוגר לעבר דרום סעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדת כלי טיס בלתי מאויש ששוגר על ידי תנועת החות'ים לכיוון האזור הדרומי של סעודיה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T17:30:08+00:00",
     "last_update_at": "2026-11-22T17:30:08+00:00",
     "what_is_not_verified": "סוג כלי הטיס ומיקום הפגיעה המיועד המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156249",
       "published_at": "2026-11-22T17:30:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11231111-06",
     "title": "טענות פקיד סעודי על הגעת מומחים זרים ואמצעי לחימה לחודיידה",
     "summary": "פקיד סעודי בכיר טען כי מטוס של חברת מהאן אייר הנחית בנמל אל-חודיידה מומחים מקוריאה הצפונית, סוריה, משמרות המהפכה וחזבאללה, לצד כספים, רכיבי כלי טיס בלתי מאוישים ומערכות הנחיה, וכן כי הוברח נשק רוסי במשלוחי חיטה.",
     "axis": "התעצמות החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T15:46:20+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-22T15:46:20+00:00",
     "last_update_at": "2026-11-22T15:46:20+00:00",
     "what_is_not_verified": "אמיתות טענות הפקיד הסעודי בדבר הגעת המומחים, סוגי הציוד והברחת הנשק הרוסי.",
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
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בתקיפה על מתקן התקשורת באל-חודיידה (10 מול 18 פצועים).",
    "הפגיעה הישירה והנזק שנגרם לבית הזיקוק ראביג' בסעודיה.",
    "טענות פקיד סעודי על נוכחות מומחים מקוריאה הצפונית ומשלוחי נשק רוסי מוסתרים בתימן.",
    "סרטונים המופצים ברשת המציגים שריפה במתקני בית הזיקוק בראביג'."
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
     "actor": "תנועת החות'ים (אנצאר אללה)",
     "declared": [
      "פגיעה בתשתיות אנרגיה ומתקנים אסטרטגיים סעודיים בחוף הים האדום",
      "המשך פעילות צבאית כחלק מעימות אזורי רחב"
     ],
     "inferred": [
      "כיתור העיר עדן וניתוק צירי האספקה של כוחות הממשלה",
      "הרחבת השליטה הטריטוריאלית בתימן ושיבוש היציבות הכלכלית בסעודיה"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות לעבר מחוזות הדרום והגברת ירי אמצעי לחימה ארוכי-טווח לעבר מטרות בסעודיה"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "יירוט איומים בליסטיים וכלי טיס בלתי מאוישים המכוונים לשטח הממלכה",
      "בלימת פעולות הטרור ופגיעה בריכוזי כוחות של החות'ים"
     ],
     "inferred": [
      "מניעת נפילת עדן ושימור שליטת כוחות הממשלה במחוזות הדרום",
      "פגיעה ברשתות התקשורת והפיקוד של החות'ים באל-חודיידה"
     ],
     "forecast": [
      "המשך תקיפות מנע מן האוויר ושימוש במערכי הגנה אווירית ליירוט שיגורים נוספים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/south-korea-says-deployment-middle-easy-not-indirect-military",
     "accessed_at": "2026-11-23T11:11:58+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemens-war-fronts-expand-houthis-attempt-encircle-aden",
     "accessed_at": "2026-11-23T11:11:58+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156249",
     "accessed_at": "2026-11-23T11:11:58+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49824",
     "accessed_at": "2026-11-23T11:11:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-22T18:00:28+00:00",
  "changes": {
   "YEMEN-11231111-01": {
    "kind": "new"
   },
   "YEMEN-11231111-02": {
    "kind": "new"
   },
   "YEMEN-11231111-03": {
    "kind": "new"
   },
   "YEMEN-11231111-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות אוויריות והרחבת הלחימה באזור אביין ואל-בידא",
    "score": 1.0
   },
   "YEMEN-11231111-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "טענת החות'ים על תקיפת בית הזיקוק בראביע' ויירוטי טילים וכטב\"מים על ידי הקואליציה בסעודיה",
    "score": 1.0
   },
   "YEMEN-11231111-06": {
    "kind": "same",
    "from": "assessment",
    "to": "initial",
    "prev": "דיווח על מומחים זרים ומשלוחי אמל\"ח עבור החות'ים",
    "score": 1.0
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
  "draft": "drafts/ukraine/2026-11-23T2219__ukraine-202611232219.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-23T22:19:08+00:00",
   "window": {
    "from": "2026-11-22T22:19:08+00:00",
    "to": "2026-11-23T22:19:08+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611232219"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת בלחימה אקטיבית הכוללת תקיפות אוויריות וימיות הדדיות, לצד מאבקים דיפלומטיים וכלכליים רחבים. אוקראינה ממשיכה לבצע תקיפות ארוכות טווח נגד תשתיות אנרגיה וכלים ימיים של רוסיה, בעוד רוסיה ממשיכה להפציץ את רשת החשמל והערים האוקראיניות. במקביל, מעצמות המערב מקדמות חבילות סנקציות חדשות ודנות בחיזוק הערבויות הביטחוניות לאוקראינה.",
   "fronts": [
    {
     "name": "חזית המזרח והדרום באוקראינה",
     "status": "פעיל וקבוע"
    },
    {
     "name": "חזית התשתיות והאנרגיה",
     "status": "הסלמה בתקיפות ההדדיות"
    },
    {
     "name": "החזית הימית (הים השחור ולוב)",
     "status": "פעילות אוקראינית התקפית"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11232219-01",
     "title": "תקיפת כלי שיט רוסיים מול חופי לוב",
     "summary": "כוחות אוקראיניים ביצעו מתקפה באמצעות רחופי ימיה נגד קורבטה ואוניית מטען רוסיות מול חופי לוב.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T15:41:23+00:00",
     "last_update_at": "2026-11-23T21:00:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק מחוץ לדיווחים הרשמיים והתקשורתיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4187865-zelensky-ukraine-to-continue-naval-strikes-after-hitting-two-russian-vessels-off-libya.html",
       "published_at": "2026-11-23T21:00:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2223623",
       "published_at": "2026-11-23T19:46:08+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russian-warship-sinks-off-libyan-coast-following-exemplary-ukrainian-drone-attack/",
       "published_at": "2026-11-23T19:11:38+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/23/footage-shows-ukrainian-marine-drones-targeting-russian-ships-video",
       "published_at": "2026-11-23T16:12:44+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
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
     "id": "UKRAINE-11232219-02",
     "title": "תקיפת בתי זיקוק ותשתיות אנרגיה ברוסיה",
     "summary": "כוחות אוקראיניים תקפו בית זיקוק לנפט ותחנת שאיבה ברוסיה, ופגעו במתקני אנרגיה נוספים.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T18:36:00+00:00",
     "last_update_at": "2026-11-23T19:53:00+00:00",
     "what_is_not_verified": "מלוא היקף הפגיעה במתקנים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_7f0d4a1041498c84",
       "url": "https://www.ukrinform.net/rubric-ato/4187846-general-staff-confirms-strike-on-lukoil-oil-refinery-in-perm.html",
       "published_at": "2026-11-23T19:53:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_7f0d4a1041498c84",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/23/8064292/",
       "published_at": "2026-11-23T18:36:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פרם, רוסיה",
       "lat": 58.0109,
       "lon": 56.2319
      }
     ]
    },
    {
     "id": "UKRAINE-11232219-03",
     "title": "פגיעה בתשתיות אנרגיה באוקראינה",
     "summary": "תקיפות פגעו במערכות החשמל ובמתקני אנרגיה באזורים שונים באוקראינה, והותירו מאות אלפי בתי אב ללא חשמל.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-23T19:19:18+00:00",
     "last_update_at": "2026-11-23T19:19:18+00:00",
     "what_is_not_verified": "זהות אמצעי הלחימה המדויקים בכל אתר ואתר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_e456cb702a7ea052",
       "url": "https://kyivindependent.com/over-350-000-homes-without-power-as-energy-crisis-deepens-in-dnipropetrovsk-oblast/",
       "published_at": "2026-11-23T19:19:18+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      }
     ]
    },
    {
     "id": "UKRAINE-11232219-04",
     "title": "יירוט רחפן שיוט רוסי באמצעות רחפן יירוט אוקראיני",
     "summary": "הצד האוקראיני דיווח על יירוט מוצלח ראשון של טיסן תוקף מסוג גראן-5 באמצעות רחפן יירוט מסוג SPYS.",
     "axis": "טכנולוגיה ואמצעי לחימה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T17:47:53+00:00",
     "last_update_at": "2026-11-23T19:35:00+00:00",
     "what_is_not_verified": "אמינות מלאה של התיעוד הוויזואלי ופרטי הביצוע המלאים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b93f8aa6c024e120",
       "url": "https://www.ukrinform.net/rubric-defense/4187843-germanukrainian-spys-interceptor-drone-shoots-down-russian-jetpowered-geran5.html",
       "published_at": "2026-11-23T19:35:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b93f8aa6c024e120",
       "url": "https://t.me/alexmehacarmel/49858",
       "published_at": "2026-11-23T17:47:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11232219-05",
     "title": "זימון נציג אסטוניה במשרד החוץ הרוסי",
     "summary": "רוסיה זימנה את הממונה על העסקים של אסטוניה והגישה מחאה חריפה על סגירת הגבול והאשמות נגד מוסקבה.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-23T22:09:24+00:00",
     "last_update_at": "2026-11-23T22:09:24+00:00",
     "what_is_not_verified": "טענות הדדיות לגבי שימוש במרחב אווירי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_680a98a52e01ceb9",
       "url": "https://meduza.io/en/news/2026/11/24/russia-protests-estonia-s-planned-land-border-closure-and-again-accuses-it-of-letting-ukrainian-drones-use-its-airspace",
       "published_at": "2026-11-23T22:09:24+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    }
   ],
   "not_verified": [
    "טענת רוסיה כי אסטוניה מאפשרת למל\"טים אוקראיניים לעבור במרחב האווירי שלה",
    "מספר האבדות המדויק בצבא רוסיה המבוסס על נתונים מודלפים",
    "טענות על היערכות רוסית לשגר לוויין עם נשק גרעיני"
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
      "השגת הפסקת אש מיידית ומקיפה על בסיס מגילת האו\"ם",
      "קבלת ערבויות ביטחוניות איתנות",
      "המשכת הפעילות הצבאית הימית והאווירית נגד נכסים רוסיים"
     ],
     "inferred": [
      "פגיעה ביכולת הכלכלית והאנרגטית של רוסיה כדי לשחוק את מאמץ המלחמה שלה",
      "שמירת תמיכת המערב ואספקת אמצעי הגנה אווירית מתקדמים"
     ],
     "forecast": [
      "אוקראינה תמשיך בניסיונות לפגוע בתשתיות עומק ברוסיה ובנכסיה הימיים",
      "הגברת התלות בסיוע טכנולוגי וצבאי מערבי להגנה מפני מל\"טים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשכת הפעילות הצבאית עד להשגת היעדים",
      "מניעת התרחבות נאט\"ו ותגובה על צעדים עוינים מצד מדינות אירופה"
     ],
     "inferred": [
      "המשך שחיקת תשתיות האנרגיה של אוקראינה לקראת עונת החורף",
      "ניסיון לערער את הלגיטימציה של הסיוע המערבי לאוקראינה"
     ],
     "forecast": [
      "הגברת התקיפות על מתקני אנרגיה ותחבורה באוקראינה",
      "המרת אמצעי תקיפה אוויריים בייצור מוגבר של כלי טיס בלתי מאוישים מתקדמים"
     ]
    },
    {
     "actor": "המערב (נאט\"ו והאיחוד האירופי)",
     "declared": [
      "שמירת התמיכה באוקראינה ואספקת ציוד הגנה אווירי",
      "הטלת סנקציות כלכליות נוספות על רוסיה ומניעת עקפתן"
     ],
     "inferred": [
      "היערכות ארוכת טווח לעימות אפשרי מול רוסיה וחיזוק הגבולות המזרחיים",
      "מניעת גלישה של העימות מחוץ לגבולות אוקראינה"
     ],
     "forecast": [
      "אישור חבילות סנקציות נוספות נגד מגזר האנרגיה הרוסי",
      "הרחבת הנוכחות והתרגילים הצבאיים במדינות הבלטיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cr894gjz0j0yo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/nov/23/footage-shows-ukrainian-marine-drones-targeting-russian-ships-video",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/over-350-000-homes-without-power-as-energy-crisis-deepens-in-dnipropetrovsk-oblast/",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/24/russia-protests-estonia-s-planned-land-border-closure-and-again-accuses-it-of-letting-ukrainian-drones-use-its-airspace",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/23/8064292/",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2223623",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49858",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-defense/4187843-germanukrainian-spys-interceptor-drone-shoots-down-russian-jetpowered-geran5.html",
     "accessed_at": "2026-11-23T22:19:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-23T00:44:14+00:00",
  "changes": {
   "UKRAINE-11232219-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפת ספינת מלחמה רוסית בלוב ותקיפות נוספות",
    "score": 0.817
   },
   "UKRAINE-11232219-02": {
    "kind": "possible",
    "prev": "תקיפת בית זיקוק במחוז רוסטוב",
    "score": 0.467
   },
   "UKRAINE-11232219-03": {
    "kind": "new"
   },
   "UKRAINE-11232219-04": {
    "kind": "new"
   },
   "UKRAINE-11232219-05": {
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
