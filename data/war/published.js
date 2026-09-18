/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-18T1224__yemen-202609181224.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-18T12:24:02+00:00",
   "window": {
    "from": "2026-09-17T12:24:02+00:00",
    "to": "2026-09-18T12:24:02+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609181224"
   },
   "summary": "הלחימה בתימן התחדשה בעוצמה לאחר מתקפה רחבת היקף של המורדים החות'ים שהשתלטו על רצועת החוף בים האדום ועל מצר באב אל-מנדב, ומנהלים חילופי אש וירי תלע/כטב\"מים מול סעודיה וכוחות צבא תימן. העימות החמור הביא לעקירת עשרות אזרחים ולמשבר הומניטרי מתרחב, לצד ניסיונות תיווך ומאמצים דיפלומטיים אזוריים להרגעת הרוחות סביב נתיבי השיט האסטרטגיים.",
   "fronts": [
    {
     "name": "חזית חוף הים האדום ומצר באב אל-מנדב",
     "status": "פעיל ומתקדם"
    },
    {
     "name": "החזית הפנימית בתימן (מאריב ותעז)",
     "status": "פעיל"
    },
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעיל עם תקיפות אוויריות וטילים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09181224-01",
     "title": "התקדמות החות'ים וכיבוש רצועת החוף בים האדום",
     "summary": "המורדים החות'ים פתחו במתלפה וכבשו את כל רצועת החוף של תימן בים האדום ואת מצר באב אל-מנדב, תוך גרימת עקירת עשרות אלפי תושבים.",
     "axis": "זירת תימן והים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T11:36:21+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T11:36:21+00:00",
     "last_update_at": "2026-09-18T10:36:52+00:00",
     "what_is_not_verified": "היקף האבדות המדויק בכל צד.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/podcast/houthis-advance-hormuz-limbo-and-ed-sheeran-backlash",
       "published_at": "2026-09-18T10:36:52+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/yemen-conflict-displaces-112000-people-inside-country-thousands-flee-djibouti-un",
       "published_at": "2026-09-18T09:46:32+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bje0xwqyme",
       "published_at": "2026-09-18T08:43:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/scores-killed-houthis-yemen-govt-saudi-arabia-trade-attacks",
       "published_at": "2026-09-17T22:55:48+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/trump-declines-to-back-saudi-arabia-as-us-officials-reportedly-meet-iran-backed-houthis-in-oman",
       "published_at": "2026-09-17T18:47:26+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130397",
       "published_at": "2026-09-17T14:26:38+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-was-already-suffering-ngos-tell-tna-crisis-deepens",
       "published_at": "2026-09-17T11:36:21+00:00"
      }
     ],
     "places": [
      {
       "name": "מוחא, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    },
    {
     "id": "YEMEN-09181224-02",
     "title": "פגיעת רסיסי כטב\"מ במחוז א-טאיף בסעודיה",
     "summary": "סוכנות ההגנה האזרחית בסעודיה דיווחה על הרוג תימני ושני פצועים כתוצאה מנפילת רסיסי כטב\"מ שיורט במחוז א-טאיף.",
     "axis": "חזית תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T22:18:28+00:00",
     "last_update_at": "2026-09-18T08:33:45+00:00",
     "what_is_not_verified": "האם כטב\"מ זה נועד לפגוע בעיר מכה כפי שטענו גורמים סעודיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7cf3010b7389e8c6",
       "url": "https://www.sabanew.net/viewstory/152571",
       "published_at": "2026-09-18T08:33:45+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_14c21883baca06b5",
       "url": "https://www.newarab.com/news/scores-killed-houthis-yemen-govt-saudi-arabia-trade-attacks",
       "published_at": "2026-09-17T22:55:48+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7cf3010b7389e8c6",
       "url": "https://www.sabanew.net/viewstory/152560",
       "published_at": "2026-09-17T22:18:28+00:00"
      }
     ],
     "places": [
      {
       "name": "א-טאיף, סעודיה",
       "lat": 21.2703,
       "lon": 40.4158
      }
     ]
    },
    {
     "id": "YEMEN-09181224-03",
     "title": "תקיפות רחפנים ועימותים במחוז מאריב ובעז",
     "summary": "התנהלו חילופי אש ותקיפות באמצעות רחפנים מתאבדים ורחפני הטלה בין צבא תימן לכוחות החות'ים במחוזות מאריב ובעז.",
     "axis": "זירת הפנים בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T15:41:51+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T15:41:51+00:00",
     "last_update_at": "2026-09-18T08:39:15+00:00",
     "what_is_not_verified": "תוצאות מדויקות של הפגיעות בכל צד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_aeb1511654cbd02c",
       "url": "https://www.sabanew.net/viewstory/152572",
       "published_at": "2026-09-18T08:39:15+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_aeb1511654cbd02c",
       "url": "https://t.me/alexmehacarmel/47796",
       "published_at": "2026-09-18T01:26:48+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_aeb1511654cbd02c",
       "url": "https://t.me/alexmehacarmel/47795",
       "published_at": "2026-09-18T01:17:30+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_5ed5ee692157d0de",
       "url": "https://www.sabanew.net/viewstory/152545",
       "published_at": "2026-09-17T15:41:51+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-09181224-04",
     "title": "טענת החות'ים להפלת מטוס קרב סעודי",
     "summary": "המורדים החות'ים פרסמו תיעוד של מה שלטענתם הוא שרידי מטוס קרב סעודי מדגם אף-15 שהופל בשמי תימן.",
     "axis": "חזית תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T13:47:36+00:00",
     "last_update_at": "2026-09-17T14:53:00+00:00",
     "what_is_not_verified": "אימות רשמי מצד סעודיה לגבי אובדן המטוס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthis-claim-saudi-f-15-kill-as-yemen-fighting-escalates",
       "published_at": "2026-09-17T14:53:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47779",
       "published_at": "2026-09-17T14:03:55+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c8vgy3p6k3y9o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-17T13:47:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09181224-05",
     "title": "פגיעה בתשתיות אנרגיה בדרום סעודיה",
     "summary": "דווח על פגיעה בבתי זיקוק בדרום ערב הסעודית כתוצאה מתקיפות חות'יות.",
     "axis": "חזית תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T23:29:11+00:00",
     "last_update_at": "2026-09-17T23:29:11+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לבתי הזיקוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47794",
       "published_at": "2026-09-17T23:29:11+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סעודיה",
       "lat": 28.3667,
       "lon": 36.544
      }
     ]
    }
   ],
   "not_verified": [
    "האם אכן הופל מטוס קרב סעודי מדגם אף-15 כפי שטענו החות'ים",
    "טענות על תקיפת כטב\"מ חות'י שכוון לעיר מכה",
    "הפרטים המדויקים על הבנות שהושגו לכאורה בין ארצות הברית לחות'ים בעומאן"
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
     "value": 3.0333,
     "unit": "ILS",
     "change_pct": 0.07,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "סיום ההגמוניה הסעודית בתימן והפסקת ההתערבות",
      "הפסקת עוינות חיצונית ותשלום פיצויים"
     ],
     "inferred": [
      "השתלטות מלאה על נתיבי השיט בים האדום ובבאב אל-מנדב כמנוף לחץ אזורי",
      "ביסוס שליטה קרקעית באזורים האסטרטגיים בתימן"
     ],
     "forecast": [
      "המשך התקיפות לעבר יעדים בסעודיה ובאזור השיט",
      "ביצור הקווים שנכבשו לאורך חוף הים האדום"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הגנה על ביטחון המדינה ותשתיות האנרגיה שלה",
      "בלימת התוקפנות החות'ית"
     ],
     "inferred": [
      "ניסיון לגרור מעורבות צבאית אמריקנית או אזורית נגד החות'ים",
      "השגת הפסקת אש זמנית או פתרון דיפלומטי דרך מתווכים כמו עומאן וסין"
     ],
     "forecast": [
      "המשך תקיפות נגד ומאמצים לגייס תמיכה בינלאומית ומוסלמית נגד החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/yemen-conflict-displaces-112000-people-inside-country-thousands-flee-djibouti-un",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c8vgy3p6k3y9o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/houthis-claim-saudi-f-15-kill-as-yemen-fighting-escalates",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/scores-killed-houthis-yemen-govt-saudi-arabia-trade-attacks",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/152545",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130397",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47794",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bje0xwqyme",
     "accessed_at": "2026-09-18T12:24:02+00:00"
    }
   ]
  },
  "previous_generated_at": "2026-09-17T15:25:17+00:00",
  "changes": {
   "YEMEN-09181224-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root"
   },
   "YEMEN-09181224-02": {
    "kind": "new"
   },
   "YEMEN-09181224-03": {
    "kind": "new"
   },
   "YEMEN-09181224-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root"
   },
   "YEMEN-09181224-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-18T1115__iran-202609181115.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-18T11:15:09+00:00",
   "window": {
    "from": "2026-09-17T11:15:09+00:00",
    "to": "2026-09-18T11:15:09+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609181115"
   },
   "summary": "העימות בין איראן וארה\"ב נמשך בשטח, בים ובים סוף, תוך כדי דיווחים על תקיפות מנוגדות, לחץ כלכלי בדמות סנקציות אמריקאיות, ופעילות צבאית של שלוחות איראן באזור. במקביל, מתקיימים מגעים דיפלומטיים חשאיים וגלויים באו\"ם ובעומאן, לצד עבודות שיקום באתרי גרעין באיראן והחרפת מצבה הכלכלי-אנרגטי.",
   "fronts": [
    {
     "name": "הזירה הימית (הורמוז ומפרץ)",
     "status": "פעיל"
    },
    {
     "name": "החזית הדיפלומטית (או\"ם)",
     "status": "פעיל"
    },
    {
     "name": "חזית הגרעין האיראני",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-09181115-01",
     "title": "פגישת גורמי ארה\"ב וחברי חות'ים בעומאן",
     "summary": "גורמים אמריקניים נפגשו עם נציגי החות'ים בעומאן",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T18:47:26+00:00",
     "last_update_at": "2026-09-17T18:47:26+00:00",
     "what_is_not_verified": "פרטי הפגישה המלאים והתוצאות אינם מאומתים במלואם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/trump-declines-to-back-saudi-arabia-as-us-officials-reportedly-meet-iran-backed-houthis-in-oman",
       "published_at": "2026-09-17T18:47:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09181115-02",
     "title": "הטלת סנקציות אמריקאיות על חברות תעופה איראניות",
     "summary": "משרד האוצר האמריקאי הטיל סנקציות על עשרות חברות תעופה איראניות וקושרה אליהן",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T16:14:43+00:00",
     "last_update_at": "2026-09-17T16:14:43+00:00",
     "what_is_not_verified": "ההשפעה המלאה של הסנקציות אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130404",
       "published_at": "2026-09-17T16:14:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09181115-03",
     "title": "ממצאי האו\"ם לגבי תקיפות באיראן",
     "summary": "משלחת בדיקת עובדות של האו\"ם קבעה כי ישנם יסודות סבירים לכך שארה\"ב ביצעה פשעי מלחמה בתקיפות באיראן בפברואר",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T12:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T12:00:00+00:00",
     "last_update_at": "2026-09-18T10:43:18+00:00",
     "what_is_not_verified": "טענות האו\"ם אינן מאומתות רשמית על ידי ארה\"ב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_7f1ca498256eda7e",
       "url": "https://www.aljazeera.com/news/2026/9/18/united-nations-says-us-may-have-committed-war-crimes-in-iran-what-it-means?traffic_source=rss",
       "published_at": "2026-09-18T10:43:18+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_7f1ca498256eda7e",
       "url": "https://www.bbc.co.uk/news/articles/cm9w4n5nverdo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-17T20:34:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_7f1ca498256eda7e",
       "url": "https://www.theguardian.com/world/2026/sep/17/iran-school-bombing-un-mission-us-military-behind-attack",
       "published_at": "2026-09-17T13:22:35+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_9ff9aeb37e80c7d6",
       "url": "https://news.un.org/feed/view/en/story/2026/09/1168358",
       "published_at": "2026-09-17T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מינאב, איראן",
       "lat": 27.1506,
       "lon": 57.0753
      },
      {
       "name": "לאמזרד, איראן",
       "lat": 27.3334,
       "lon": 53.1816
      }
     ]
    },
    {
     "id": "IRAN-09181115-04",
     "title": "שיקום מתקן הגרעין טלקאן 2 בפרצ'ין",
     "summary": "תצלומי לווין חשפו כי איראן מאיצה את הבנייה והשיקום במתקן טלקאן 2 בפרצ'ין",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T06:22:29+00:00",
     "last_update_at": "2026-09-18T06:22:29+00:00",
     "what_is_not_verified": "הפעילות המדויקת המתקיימת כיום בתוך המתקן אינה מאומתת לחלוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130419",
       "published_at": "2026-09-18T06:22:29+00:00"
      }
     ],
     "places": [
      {
       "name": "פרצ'ין, איראן",
       "lat": 35.5121,
       "lon": 51.7774
      }
     ]
    },
    {
     "id": "IRAN-09181115-05",
     "title": "קריאת מדינות לאי-פגיעה במתקני גרעין",
     "summary": "15 מדינות קראו לאסוף כל מתקפה או איום נגד מתקני גרעין שלווים",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T10:39:59+00:00",
     "last_update_at": "2026-09-18T10:39:59+00:00",
     "what_is_not_verified": "היענות הצדדים להצהרה אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_0d76985dbe713c57",
       "url": "https://en.irna.ir/news/86267234/Fifteen-countries-call-for-prohibition-of-any-attack-or-threat",
       "published_at": "2026-09-18T10:39:59+00:00"
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
     "id": "IRAN-09181115-06",
     "title": "אי-פריסת כוחות של דרום קוריאה למזרח התיכון",
     "summary": "נשיא דרום קוריאה הבהיר כי ארצו לא תציב כוחות צבא במזרח התיכון למען עימות עם איראן",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T02:46:30+00:00",
     "last_update_at": "2026-09-18T05:54:29+00:00",
     "what_is_not_verified": "החלטה סופית לגבי אבטחת ניווט אינה מאומתת לחלוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_c8c836d383f56866",
       "url": "https://www.theguardian.com/world/2026/sep/18/south-korea-will-not-send-military-to-support-us-war-on-iran-defying-trump-pressure",
       "published_at": "2026-09-18T05:54:29+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_5dd3bdffd29176ac",
       "url": "https://www.al-monitor.com/originals/2026/09/south-koreas-lee-rules-out-military-involvement-middle-east-conflict",
       "published_at": "2026-09-18T04:46:33+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_1ed00c499a320ae4",
       "url": "https://www.al-monitor.com/originals/2026/09/south-koreas-lee-says-will-not-deploy-military-get-involved-middle-east-conflict",
       "published_at": "2026-09-18T02:46:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09181115-07",
     "title": "אישור ויזות לבכירי איראן לעצרת האו\"ם",
     "summary": "ארה\"ב אישרה ויזות לכניסת בכירי משטר איראנים לעצרת האו\"ם בניו יורק",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T00:06:26+00:00",
     "last_update_at": "2026-09-18T00:06:26+00:00",
     "what_is_not_verified": "רשימת הנוכחים המלאה אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hysrtryymx",
       "published_at": "2026-09-18T00:06:26+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "IRAN-09181115-08",
     "title": "טענה על תקיפת מיכלית במצרי הורמוז",
     "summary": "משמרות המהפכה טענו שתקפו מיכלית הנושאת דגל טוגו במצרי הורמוז",
     "axis": "ישראל-ארה\"ב מול איראן ושלוחותיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T21:35:09+00:00",
     "last_update_at": "2026-09-17T21:35:09+00:00",
     "what_is_not_verified": "נכונות הטענה בדבר התקיפה אינה מאומתת ממקור בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47793",
       "published_at": "2026-09-17T21:35:09+00:00"
      }
     ],
     "places": [
      {
       "name": "מצרי הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    }
   ],
   "not_verified": [
    "טענות האו\"ם על פשעי מלחמה מצד ארה\"ב באיראן",
    "טענת משמרות המהפכה על תקיפת מיכלית דגל טוגו במצרי הורמוז",
    "היקף הנזק המדויק בתשתיות הגז של איראן",
    "פרטי הפגישה החשאית בין ארה\"ב לחות'ים בעומאן"
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
     "value": 3.0333,
     "unit": "ILS",
     "change_pct": 0.07,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על מתקני גרעין והתנגדות לתקיפות עליהם"
     ],
     "inferred": [
      "שיקום תשתיות גרעין וגז נפגעות",
      "הפעלת לחץ ימי דרך שלוחות ופגיעה בנתיבי שיט"
     ],
     "forecast": [
      "המשך מאמצי שיקום מתקנים והגברת הלחץ האזורי לקראת חודשי החורף"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "בלימת שאיפות גרעיניות וצמצום ההשפעה האיראנית באזור"
     ],
     "inferred": [
      "הפעלת סנקציות כלכליות נרחבות על תעופה וגורמים איראניים",
      "בחינת אפשרויות לתקיפות נוספות או הרחבת העימות"
     ],
     "forecast": [
      "המשך התמודדות עם ביקורת בינלאומית בכינוסי האו\"ם בנוגע למדיניותה במזרח התיכון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/18/united-nations-says-us-may-have-committed-war-crimes-in-iran-what-it-means?traffic_source=rss",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/south-koreas-lee-says-will-not-deploy-military-get-involved-middle-east-conflict",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cm9w4n5nverdo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/trump-declines-to-back-saudi-arabia-as-us-officials-reportedly-meet-iran-backed-houthis-in-oman",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/18/south-korea-will-not-send-military-to-support-us-war-on-iran-defying-trump-pressure",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86267234/Fifteen-countries-call-for-prohibition-of-any-attack-or-threat",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130419",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47793",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/09/1168358",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hysrtryymx",
     "accessed_at": "2026-09-18T11:15:09+00:00"
    }
   ]
  },
  "previous_generated_at": "2026-09-17T15:39:00+00:00",
  "changes": {
   "IRAN-09181115-01": {
    "kind": "new"
   },
   "IRAN-09181115-02": {
    "kind": "new"
   },
   "IRAN-09181115-03": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment"
   },
   "IRAN-09181115-04": {
    "kind": "new"
   },
   "IRAN-09181115-05": {
    "kind": "new"
   },
   "IRAN-09181115-06": {
    "kind": "new"
   },
   "IRAN-09181115-07": {
    "kind": "new"
   },
   "IRAN-09181115-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-18T1200__ukraine-202609181200.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-18T12:00:57+00:00",
   "window": {
    "from": "2026-09-17T12:00:57+00:00",
    "to": "2026-09-18T12:00:57+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609181200"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת כאשר כוחות רוסיים תוקפים תשתיות ואזרחים בחזיתות שונות, לרבות אזור חרקוב ודונייצק, בעוד אוקראינה משיבה בתקיפות עומק באמצעות כטב\"מים על יעדים ברוסיה ובחצי האי קרים. במקביל, רוסיה מקיימת את הבחירות לפרלמנט תוך הידוק שליטה פנימית והחרמת נכסים מערביים, ואוקראינה מהדקת שיתופי פעולה אזוריים ואירופיים.",
   "fronts": [
    {
     "name": "החזית המזרחית (דונייצק)",
     "status": "פעיל - תקיפות נורות על עיירות כמו סלאביאנסק"
    },
    {
     "name": "החזית הצפון-מזרחית (חרקוב)",
     "status": "פעיל - תקיפות על תשתיות תחבורה ורכבות"
    },
    {
     "name": "מרחב קרים והים השחור",
     "status": "פעיל - תקיפות ממוקדמות של כוחות אוקראיניים על נכסים רוסיים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09181200-01",
     "title": "הארכת הסכם שיתוף פעולה בבטיחות גרעינית בין אוקראינה לשבדיה",
     "summary": "הפיקוח הרגולטורי הגרעיני של אוקראינה ורשות הבטיחות בקרינה של שבדיה האריכו בחמש שנים את הסכם שיתוף הפעולה ביניהם.",
     "axis": "סיוע ותיאום בין-לאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T11:40:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T11:40:00+00:00",
     "last_update_at": "2026-09-18T11:40:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_105c0f8e8eb6dd80",
       "url": "https://www.ukrinform.net/rubric-economy/4165446-ukraine-sweden-extend-cooperation-in-nuclear-safety.html",
       "published_at": "2026-09-18T11:40:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09181200-02",
     "title": "נורבגיה הקצתה למעלה מ-100 מיליון דולר לתמיכה בתקציב אוקראינה",
     "summary": "נורבגיה העבירה מעל 100 מיליון דולר לתמיכה בתקציב המדינה של אוקראינה.",
     "axis": "סיוע כלכלי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T11:34:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T11:34:00+00:00",
     "last_update_at": "2026-09-18T11:34:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_c0cd6c2af886e946",
       "url": "https://www.ukrinform.net/rubric-economy/4165458-norway-allocates-over-100m-to-ukraine-for-budget-support-zelensky.html",
       "published_at": "2026-09-18T11:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09181200-03",
     "title": "הונגריה חוסמת מחדש את סגירת אשכולות הצטרפות אוקראינה לאיחוד האירופי",
     "summary": "הונגריה החלה שוב לחסם את תהליך ההצטרפות של אוקראינה לאיחוד האירופי בדרישה ליישם את זכויות המיעוט ההונגרי.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T11:22:13+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T11:22:13+00:00",
     "last_update_at": "2026-09-18T11:22:13+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_7e9fe5261ca7173e",
       "url": "https://kyivindependent.com/zelensky-downplays-rift-as-hungary-renews-eu-accession-blockade-over-minority-rights/",
       "published_at": "2026-09-18T11:22:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09181200-04",
     "title": "כוחות רוסיים תקפו את סלאביאנסק ופצעו אזרחים",
     "summary": "כוחות רוסיה ביצעו שתי תקיפות באותו רובע בעיר סלאביאנסק, שהביאו לפציעתם של חמישה אזרחים ולנזק למבנים.",
     "axis": "החזית המזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T10:29:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T10:29:00+00:00",
     "last_update_at": "2026-09-18T11:19:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_3043b1b0361b6a64",
       "url": "https://www.ukrinform.net/rubric-ato/4165447-russian-forces-strike-sloviansk-five-civilians-injured.html",
       "published_at": "2026-09-18T11:19:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_7d462d7c2610f5f9",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054062/",
       "published_at": "2026-09-18T10:29:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלאביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-09181200-05",
     "title": "תקיפה אוקראינית על תחנת בקרה לכטב\"מים רוסיים בחצי האי קרים",
     "summary": "כוחות ההגנה של אוקראינה תקפו תחנת בקרה קרקעית לכטב\"מים מסוג אוריון בשדה התעופה סאקי בקרים, ופגעו במטרות נוספות.",
     "axis": "תקיפות עומק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T10:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T10:00:00+00:00",
     "last_update_at": "2026-09-18T11:01:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_444226cfb2e9c853",
       "url": "https://www.ukrinform.net/rubric-ato/4165441-ukrainian-forces-strike-russian-orion-drone-control-station-in-crimea.html",
       "published_at": "2026-09-18T11:01:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_1b5ed68928bee7e5",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054057/",
       "published_at": "2026-09-18T10:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "נובופדוריווקה, אוקראינה",
       "lat": 45.0943,
       "lon": 33.5752
      },
      {
       "name": "דונייצק, אוקראינה",
       "lat": 48.0159,
       "lon": 37.8013
      }
     ]
    },
    {
     "id": "UKRAINE-09181200-06",
     "title": "שברי כטב\"ם נמצאו בסמוך לקישינב שבמולדובה",
     "summary": "משטרת מולדובה איתרה שברי כטב\"ם בכפר קולוניצה הסמוך לקישינב, בעקבות דיווחים על פיצוץ בלילה.",
     "axis": "גבולות ומרחב אווירי סמוך",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T10:44:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T10:44:00+00:00",
     "last_update_at": "2026-09-18T10:44:00+00:00",
     "what_is_not_verified": "משרד ההגנה של מולדובה טען כי לא תועדו הפרות מרחב אווירי באותו לילה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054066/",
       "published_at": "2026-09-18T10:44:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קישינב, מולדובה",
       "lat": 47.0245,
       "lon": 28.8323
      }
     ]
    },
    {
     "id": "UKRAINE-09181200-07",
     "title": "פסגה להשקת יוזמת שיתוף הפעולה האזורי 'הקרפטים השמונה'",
     "summary": "נשיא אוקראינה הכריז על השקת יוזמת שיתוף הפעולה האזורי 'הקרפטים השמונה' (C8) המפגישה שכנות אירופיות ואת האיחוד האירופי.",
     "axis": "דיפלומטיה וסיתואציות אזוריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T09:12:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T09:12:12+00:00",
     "last_update_at": "2026-09-18T10:40:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_0b48ed88c89389df",
       "url": "https://www.ukrinform.net/rubric-polytics/4165431-zelensky-announces-eur-1b-in-deals-at-carpathian-eight-summit.html",
       "published_at": "2026-09-18T10:40:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_f19a5345beb90778",
       "url": "https://www.ukrinform.net/rubric-polytics/4165406-zelensky-announces-launch-of-new-carpathian-eight-initiative.html",
       "published_at": "2026-09-18T09:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_970f3ab36aad98a3",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054056/",
       "published_at": "2026-09-18T09:49:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_8491a3d23cf490ad",
       "url": "https://kyivindependent.com/zelensky-hosts-european-leaders-at-inaugural-carpathian-8-summit/",
       "published_at": "2026-09-18T09:12:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09181200-08",
     "title": "איגוד הביאתלון הבין-לאומי סירב לחדש את חברות רוסיה ובלארוס",
     "summary": "קונגרס איגוד הביאתלון הבין-לאומי החליט שלא לחדש את חברותן של רוסיה ובלארוס בארגון עקב אי-עמידה בתנאים.",
     "axis": "סנקציות ובידוד בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T10:03:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T10:03:00+00:00",
     "last_update_at": "2026-09-18T10:03:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_dd5d3bcd191967d0",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054058/",
       "published_at": "2026-09-18T10:03:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09181200-09",
     "title": "תקיפה רוסית על רכבת נוסעים באזור חרקוב",
     "summary": "כוחות רוסיה תקפו רכבת נוסעים באזור חרקוב, בתקיפה שגרמה להרג אדם אחד ולפציעתם של שמונה בני אדם.",
     "axis": "החזית הצפון-מזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T09:55:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T09:55:00+00:00",
     "last_update_at": "2026-09-18T10:18:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_8d2c542a4197f5b7",
       "url": "https://www.ukrinform.net/rubric-ato/4165423-russian-strike-hits-commuter-train-in-kharkiv-region-killing-one-and-injuring-seven.html",
       "published_at": "2026-09-18T10:18:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_fd9a33013c20ebba",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054036/",
       "published_at": "2026-09-18T09:55:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז חרקוב, אוקראינה",
       "lat": 50.0323,
       "lon": 36.2188
      }
     ]
    },
    {
     "id": "UKRAINE-09181200-10",
     "title": "פתיחת הבחירות לפרלמנט ברוסיה",
     "summary": "במוסקבה ובאזורים שונים ברוסיה החלו הבחירות לדומה הממלכתית המתקיימות במשך שלושה ימים לראשונה מאז הפלישה לאוקראינה.",
     "axis": "עורף רוסי ופוליטיקה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T22:33:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T22:33:34+00:00",
     "last_update_at": "2026-09-18T09:28:19+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_215ce3038a888605",
       "url": "https://kyivindependent.com/inside-russias-2026-parliamentary-election-banned-opposition-rigging-and-war/",
       "published_at": "2026-09-18T09:28:19+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_fb2c986b82d1b735",
       "url": "https://kyivindependent.com/russia-begins-3-day-legislative-elections-as-kremlin-seeks-to-project-support-for-war/",
       "published_at": "2026-09-18T07:47:51+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_294a9248d9fca50b",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21449301",
       "published_at": "2026-09-18T06:28:14+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_b963aa23db82cee9",
       "url": "https://meduza.io/en/news/2026/09/18/russia-begins-three-days-of-voting-for-its-450-seat-parliament-with-the-first-polling-stations-opening-in-the-far-eastern-regions-of-kamchatka-and-chukotka",
       "published_at": "2026-09-17T22:33:34+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-09181200-11",
     "title": "החרמת נכסי חברות זרות ברוסיה בהוראת פוטין",
     "summary": "נשיא רוסיה ולדימיר פוטין חתם על צו המעביר את נכסי החברות נסטלה ואושאן ברוסיה תחת ניהול זמני.",
     "axis": "כלכלה וסנקציות נגדיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T18:13:39+00:00",
     "last_update_at": "2026-09-18T04:53:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_3b65c8eeea1ae851",
       "url": "https://kyivindependent.com/putin-confiscates-nestle-auchan-assets-in-russia/",
       "published_at": "2026-09-18T04:53:26+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_757d9577986cb668",
       "url": "https://meduza.io/en/news/2026/09/17/putin-put-russian-assets-of-french-supermarket-chain-auchan-and-swiss-food-giant-nestle-under-temporary-management-neither-company-had-left-russia-after-the-full-scale-invasion",
       "published_at": "2026-09-17T18:13:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09181200-12",
     "title": "מתקפת רחפנים אוקראינית נרחבת על מחוז רוסטוב ומרחב מוסקבה",
     "summary": "עשרות רחפנים אוקראיניים יורטו מעל מחוז רוסטוב וגרמו לנזקים לבתים, ומאות רחפנים שווגו בדרכם למוסקבה.",
     "axis": "מתקפות עומק בשטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T07:07:52+00:00",
     "last_update_at": "2026-09-18T07:07:52+00:00",
     "what_is_not_verified": "טענות ערוצי טלגרם על פגיעה בבסיס אווירי ועל נזק למטוסי תובלה ומסוקים ברוסטוב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_bae56bcbdcc3dbad",
       "url": "https://meduza.io/en/news/2026/09/18/ukrainian-drones-damage-homes-in-russia-s-rostov-region-moscow-mayor-says-350-drones-were-headed-for-the-capital",
       "published_at": "2026-09-18T07:07:52+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז רוסטוב, רוסיה",
       "lat": 44.4977,
       "lon": 42.5301
      },
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על תוכניות רוסיות לגייס עד 300,000 איש בסתיו",
    "טענות על כוונת רוסיה לבצע תקיפות היברידיות או 'מקריות' במדינות נאט\"ו",
    "דיווחים על פגיעה במטוסי תובלה ומסוקים בבסיס ברוסטוב"
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
     "value": 1.1481,
     "unit": "USD",
     "change_pct": -0.49,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת תמיכה כלכלית ודיפלומטית רחבה מהאיחוד האירופי ומהשכנות",
      "פגיעה ביכולות הצבאיות של רוסיה באמצעות תקיפות כטב\"מים בעומק השטח"
     ],
     "inferred": [
      "שמירה על רציפות תפקודית של משק האנרגיה והתחבורה חרף התקיפות",
      "חיזוק הבריתות האזוריות כדי למנוע עייפות ממלחמה באירופה"
     ],
     "forecast": [
      "המשך מאמצי גיוס משאבים פיננסיים ממדינות המערב לקראת חודשי החורף",
      "הגברת הפעילות הדיפלומטית מול גושים אזוריים דוגמת יוזמת הקרפטים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "ביסוס הלגיטימציה לשלטונו של פוטין באמצעות קיום בחירות לפרלמנט",
      "המשך פגיעה בתשתיות ובקווי האספקה של אוקראינה"
     ],
     "inferred": [
      "צמצום ההשפעה והנוכחות של חברות מערביות המשיכות לפעול בשטחה באמצעות השתלטות עליהן",
      "ניסיון לערער את החוסן האזרחי האוקראיני על ידי תקיפת רכבות ותשתיות אזרחיות"
     ],
     "forecast": [
      "המשך לחץ צבאי בחזיתות המזרחיות והצפון-מזרחיות",
      "הידוק הפיקוח הכלכלי והפנימי בתוך רוסיה על רקע הבחירות והמלחמה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21449301",
     "accessed_at": "2026-09-18T12:00:57+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/putin-confiscates-nestle-auchan-assets-in-russia/",
     "accessed_at": "2026-09-18T12:00:57+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/18/ukrainian-drones-damage-homes-in-russia-s-rostov-region-moscow-mayor-says-350-drones-were-headed-for-the-capital",
     "accessed_at": "2026-09-18T12:00:57+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/18/8054036/",
     "accessed_at": "2026-09-18T12:00:57+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4165423-russian-strike-hits-commuter-train-in-kharkiv-region-killing-one-and-injuring-seven.html",
     "accessed_at": "2026-09-18T12:00:57+00:00"
    }
   ]
  },
  "previous_generated_at": "2026-09-17T15:41:49+00:00",
  "changes": {
   "UKRAINE-09181200-01": {
    "kind": "new"
   },
   "UKRAINE-09181200-02": {
    "kind": "new"
   },
   "UKRAINE-09181200-03": {
    "kind": "new"
   },
   "UKRAINE-09181200-04": {
    "kind": "new"
   },
   "UKRAINE-09181200-05": {
    "kind": "new"
   },
   "UKRAINE-09181200-06": {
    "kind": "new"
   },
   "UKRAINE-09181200-07": {
    "kind": "new"
   },
   "UKRAINE-09181200-08": {
    "kind": "new"
   },
   "UKRAINE-09181200-09": {
    "kind": "new"
   },
   "UKRAINE-09181200-10": {
    "kind": "new"
   },
   "UKRAINE-09181200-11": {
    "kind": "new"
   },
   "UKRAINE-09181200-12": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-18T1212__north-202609181212.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-18T12:12:43+00:00",
   "window": {
    "from": "2026-09-17T12:12:43+00:00",
    "to": "2026-09-18T12:12:43+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609181212"
   },
   "summary": "הגזרה הצפונית כוללת מתח צבאי מתמשך בין ישראל לבין לבנון וחיזבאללה, הכולל תקיפות ארטילריות, חיכוך ישיר מול צבא לבנון באזור דיר מימאס, וכן פעילות צבאית מתמשכת בדרום סוריה. במקביל, מתקיימים דיפלומטיה ומגעים בינלאומיים בנוגע לעתיד הביטחוני בדרום לבנון ומניעת וואקום ביטחוני לקראת פרישת כוחות.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם חיכוך צבאי ותקיפות הדדיות"
    },
    {
     "name": "החזית הסורית",
     "status": "פעילה עם כניסות כוחות ופעולות ביטחון פנים"
    }
   ],
   "events": [
    {
     "id": "NORTH-09181212-01",
     "title": "כניסת כלי רכב צבאיים לסוריה",
     "summary": "כוחות צבא ישראל נכנסו עם תשעה כלי רכב צבאיים לאזור דרום סוריה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-18T11:26:22+00:00",
     "last_update_at": "2026-09-18T11:59:13+00:00",
     "what_is_not_verified": "לא מאומת מלוא היקף הפעילות או מטרת ההתקדמות המדויקת מעבר לדיווחי המדיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_syrian_reports",
       "url": "https://english.almanar.com.lb/article/128512/",
       "published_at": "2026-09-18T11:59:13+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_syrian_reports",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-launch-new-incursion-into-southern-syria-with-9-military-vehicles/4061098",
       "published_at": "2026-09-18T11:26:22+00:00"
      }
     ],
     "places": [
      {
       "name": "ואדי אל-רקד, סוריה",
       "lat": 32.8011,
       "lon": 35.8268
      }
     ]
    },
    {
     "id": "NORTH-09181212-02",
     "title": "התקדמות כוחות ישראל באזור דיר מימאס ונסיגת צבא לבנון",
     "summary": "כוחות צבא ישראל התקדמו באזור דיר מימאס בדרום לבנון, דבר שהוביל לנסיגת צבא לבנון ממוצב חדש שהוקם בפתחו ולחיכוך בשטח שכלל זריקת רימוני הלם.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-18T05:59:50+00:00",
     "last_update_at": "2026-09-18T10:17:46+00:00",
     "what_is_not_verified": "פרטי האולטימטום הנטען וטענות על הקו הצהוב אינם מאומתים מגורם רשמי ישראלי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3374d7c6b3563f7e",
       "url": "https://english.almanar.com.lb/article/128457/",
       "published_at": "2026-09-18T10:17:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_3374d7c6b3563f7e",
       "url": "https://t.me/abualiexpress/130438",
       "published_at": "2026-09-18T09:59:53+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_3374d7c6b3563f7e",
       "url": "https://t.me/abualiexpress/130436",
       "published_at": "2026-09-18T09:41:20+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_03903f1ffde56534",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958443/israeli-patrol-approaches-lebanese-army-position-in-deir-mimas/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958443",
       "published_at": "2026-09-18T05:59:50+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      }
     ]
    },
    {
     "id": "NORTH-09181212-03",
     "title": "ירי ארטילרי ותקיפות בדרום לבנון",
     "summary": "כוחות צבא ישראל ביצעו ירי ארטילרי ותקיפות לעבר מרחבים שונים בדרום לבנון, שגרמו לפצועים באזור שקרא.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T23:15:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T23:15:55+00:00",
     "last_update_at": "2026-09-18T10:07:59+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים מעבר לדיווחים המקומיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_740912d0f1e16aac",
       "url": "https://english.almanar.com.lb/article/128447/",
       "published_at": "2026-09-18T10:07:59+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_79019ff703144d2c",
       "url": "https://english.almanar.com.lb/article/128437/",
       "published_at": "2026-09-18T10:06:58+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_740912d0f1e16aac",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-launches-fresh-attacks-in-southern-lebanon-despite-framework-deal/4060882",
       "published_at": "2026-09-18T08:20:16+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_740912d0f1e16aac",
       "url": "https://www.aa.com.tr/en/middle-east/israel-continues-attacks-on-southern-lebanon-as-aoun-says-assaults-obstruct-framework-formula-/4060665",
       "published_at": "2026-09-17T23:15:55+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר טיבניית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-09181212-04",
     "title": "עימותים מזוינים באל-סאנאמן בדרום סוריה",
     "summary": "עימותים פרצו בין כוחות הביטחון הפנים בסוריה לבין חברי חמושים במסגרת מבצע מעצר בדרום סוריה, מה שהוביל להרוגים ועוצר זמני.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T10:41:57+00:00",
     "last_update_at": "2026-09-17T12:12:43+00:00",
     "what_is_not_verified": "זהות כלל המעורבים המדויקת והקשר המלא של הקבוצות החמושות.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_8e70d253567054c5",
       "url": "https://english.enabbaladi.net/archives/2026/09/al-sanamayn-clashes-kill-three-internal-security-members/",
       "published_at": "2026-09-17T10:41:57+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-סאנאמן, סוריה",
       "lat": 33.0732,
       "lon": 36.1834
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על אולטימטום שהציב צה\"ל לצבא לבנון בדיר מימאס",
    "מספר הנפגעים המדויק בכלל האירועים בדרום לבנון ובסוריה"
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
     "value": 3.0333,
     "unit": "ILS",
     "change_pct": 0.07,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על מוכשרות מבצעית והגנה בגבול הצפון"
     ],
     "inferred": [
      "מניעת התבססות עוינת והרחקת איומים בגבולות לבנון וסוריה"
     ],
     "forecast": [
      "המשך פעילות נקודתית ואכיפת אזורי חיץ בגבולות הצפון"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "שאיפה ליישוב הסכמות מסגרת מדיניות והשגת גיבוי בינלאומי לצבא לבנון"
     ],
     "inferred": [
      "ניסיון למנוע עימות רחב תוך שמירה מוגבלת על נוכחות צבאית בדרום"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים בבמות הבינלאומיות למניעת הסлаמה נוספת"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/128437/",
     "accessed_at": "2026-09-18T12:12:43+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-continues-attacks-on-southern-lebanon-as-aoun-says-assaults-obstruct-framework-formula-/4060665",
     "accessed_at": "2026-09-18T12:12:43+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/al-sanamayn-clashes-kill-three-internal-security-members/",
     "accessed_at": "2026-09-18T12:12:43+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/958443/israeli-patrol-approaches-lebanese-army-position-in-deir-mimas/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958443",
     "accessed_at": "2026-09-18T12:12:43+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130436",
     "accessed_at": "2026-09-18T12:12:43+00:00"
    }
   ]
  },
  "previous_generated_at": "2026-09-17T15:42:37+00:00",
  "changes": {
   "NORTH-09181212-01": {
    "kind": "new"
   },
   "NORTH-09181212-02": {
    "kind": "new"
   },
   "NORTH-09181212-03": {
    "kind": "new"
   },
   "NORTH-09181212-04": {
    "kind": "new"
   }
  }
 }
};
