/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-22T2345__yemen-202609222345.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-22T23:45:13+00:00",
   "window": {
    "from": "2026-09-21T23:45:13+00:00",
    "to": "2026-09-22T23:45:13+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609222345"
   },
   "summary": "הלחימה בתימן מחריפה בעקבות התקדמות צבאית של החות'ים לעבר חוף הים האדום ומצר באב אל-מנדב, לצד המשך תקיפות מצידם לעבר שטחי סעודיה. במקביל, סעודיה מקבלת סיוע צבאי הגנתי מבריטניה להתמודדות עם האיומים, והזירה משתלבת במתיחות רחבה יותר מול איראן והמעצמות.",
   "fronts": [
    {
     "name": "חזית חוף הים האדום ובאב אל-מנדב",
     "status": "פעיל ומתקדם"
    },
    {
     "name": "חזית תימן פנים הארץ והרמות",
     "status": "לחימה עצימה"
    },
    {
     "name": "חזית תימן-סעודיה",
     "status": "התקפות חות'יות ומעורבות הגנתית בריטית-סעודית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09222345-01",
     "title": "התקדמות החות'ים והלחימה בתימן",
     "summary": "החות'ים ביצעו התקדמות מהירה לאורך חוף הים האדום בתימן, השתלטו על נמל מוקה ועל אזורים סביב מצר באב אל-מנדב, ומנהלים קרבות מול כוחות הממשלה התימנית הנתמכים בידי סעודיה באזורים הרריים וברחבי מחוזות שונים.",
     "axis": "ציר החות'ים ומולם ממשלת תימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T13:49:22+00:00",
     "last_update_at": "2026-09-22T19:19:02+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומדדי ההשתלטות המלאים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian",
       "url": "https://www.theguardian.com/world/video/2026/sep/22/how-the-civil-war-in-yemen-could-affect-global-shipping-routes-explainer",
       "published_at": "2026-09-22T19:19:02+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_guardian",
       "url": "https://www.longwarjournal.org/archives/2026/09/houthis-fight-for-key-yemeni-highlands-continue-striking-saudi-arabia.php",
       "published_at": "2026-09-22T14:09:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_guardian",
       "url": "https://www.theguardian.com/world/2026/sep/22/yemen-houthis-battle-strategic-red-sea-heights",
       "published_at": "2026-09-22T13:57:36+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_guardian",
       "url": "https://www.newarab.com/news/uk-deploys-raf-tanker-refuel-saudi-jets-amid-houthi-attacks",
       "published_at": "2026-09-22T13:49:22+00:00"
      }
     ],
     "places": [
      {
       "name": "מוקה, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-09222345-02",
     "title": "תקיפות החות'ים נגד סעודיה",
     "summary": "החות'ים ממשיכים לבצע מתקפות של כטב\"מים וטילים לעבר שטחי סעודיה.",
     "axis": "ציר החות'ים מול סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T13:49:22+00:00",
     "last_update_at": "2026-09-22T14:09:00+00:00",
     "what_is_not_verified": "נזק מדויק לכל אתר בסעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lwj",
       "source_root_id": "or_fdd_s_long_war_journal",
       "url": "https://www.longwarjournal.org/archives/2026/09/houthis-fight-for-key-yemeni-highlands-continue-striking-saudi-arabia.php",
       "published_at": "2026-09-22T14:09:00+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_fdd_s_long_war_journal",
       "url": "https://www.newarab.com/news/uk-deploys-raf-tanker-refuel-saudi-jets-amid-houthi-attacks",
       "published_at": "2026-09-22T13:49:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09222345-03",
     "title": "אישור בריטי לסיוע צבאי הגנתי לסעודיה ותדלוק אווירי",
     "summary": "בריטניה אישרה בקשה סעודית לספק סיוע הגנתי הכולל מטוסי תדלוק אווירי ממטוס ריפואל לבריטניה בקפריסין, במטרה לסייע למטוסי קרב סעודיים להתגונן מפני מתקפות החות'ים.",
     "axis": "בריטניה וסעודיה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T05:27:30+00:00",
     "last_update_at": "2026-09-22T13:49:22+00:00",
     "what_is_not_verified": "מועד הפעילות המדויק של המטוס בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_21df67c7626312b2",
       "url": "https://www.newarab.com/news/uk-deploys-raf-tanker-refuel-saudi-jets-amid-houthi-attacks",
       "published_at": "2026-09-22T13:49:22+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_5981542cd8470f06",
       "url": "https://www.bbc.co.uk/news/articles/cqlykpe4dk0yo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-22T08:53:03+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_21df67c7626312b2",
       "url": "https://t.me/abualiexpress/130590",
       "published_at": "2026-09-22T05:27:30+00:00"
      }
     ],
     "places": [
      {
       "name": "אקרוטירי, קפריסין",
       "lat": 34.6008,
       "lon": 32.9562
      }
     ]
    },
    {
     "id": "YEMEN-09222345-04",
     "title": "פגישה ודיונים בין ארה\"ב לאיראן באו\"ם סביב חסימת החות'ים",
     "summary": "נציגים מאיראן ומארצות הברית קיימו פגישות ישירות במסגרת עצרת האו\"ם בניו יורק, כאשר איראן דורשת הפסקת אש הקשורה להסרת המצור על החלקים שבשליטת החות'ים בתימן.",
     "axis": "איראן וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T20:58:37+00:00",
     "last_update_at": "2026-09-22T20:58:37+00:00",
     "what_is_not_verified": "התוצאות הסופיות של המשא ומתן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_middle_east_eye",
       "url": "https://www.middleeasteye.net/news/iran-and-us-held-direct-un-talks-islamic-republic-terms-reopen-hormuz-hardening",
       "published_at": "2026-09-22T20:58:37+00:00"
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
     "id": "YEMEN-09222345-05",
     "title": "קריאות בינלאומיות של האיחוד האירופי ומדינות ה-G7 להפסקת חימוש החות'ים",
     "summary": "מדינות ה-G7 ומנהלת החוץ של האיחוד האירופי קראו לעצור את חימוש החות'ים ואת ההתקפות שלהם המאיימות על הביטחון הימי והאנרגיה העולמית במצר באב אל-מנדב ובים האדום.",
     "axis": "קהילה בינלאומית מול החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T08:20:33+00:00",
     "last_update_at": "2026-09-22T20:26:55+00:00",
     "what_is_not_verified": "תגובת החות'ים המלאה לדרישות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_8abcd057ac1de899",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/eu-top-diplomat-meets-irans-araghchi-discuss-strait-hormuz",
       "published_at": "2026-09-22T20:26:55+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_c40c3388e6adf35e",
       "url": "https://www.bbc.co.uk/news/articles/cwm2qpmepmlzo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-22T13:39:09+00:00"
      },
      {
       "source_id": "src_gcaptain",
       "source_root_id": "fh_8abcd057ac1de899",
       "url": "https://gcaptain.com/kallas-urges-eu-to-bolster-red-sea-mission-against-houthi-threat/",
       "published_at": "2026-09-22T08:20:33+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בקרבות האחרונים בתימן",
    "פרטי ההסכמות המדויקים בפגישות ארה\"ב-איראן בניו יורק בנוגע לתימן"
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
     "value": 3.0178,
     "unit": "ILS",
     "change_pct": 0.21,
     "source_id": "src_ecb",
     "as_of": "2026-09-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "סיום הנוכחות הזרה בתימן",
      "תמיכה במערכה האזורית"
     ],
     "inferred": [
      "השתלטות על נתיבי סחר אסטרטגיים בים האדום ובבאב אל-מנדב",
      "הרחבת השליטה הטריטוריאלית בתימן מול כוחות הממשלה"
     ],
     "forecast": [
      "המשך ניסיונות כיבוש של אזורים נוספים בתימן",
      "המשך איום על הספנות הבינלאומית ותקיפות נגד סעודיה"
     ]
    },
    {
     "actor": "סעודיה",
     "declared": [
      "הגנה על ביטחון הממלכה מפני תקיפות כטב\"מים וטילים"
     ],
     "inferred": [
      "בלימת ההתקדמות החות'ית בגבולותיה ובאזור הים האדום",
      "גיוס תמיכה צבאית ודיפלומטית בינלאומית מול האיומים מבתימן"
     ],
     "forecast": [
      "המשך שיתוף פעולה צבאי ואווירי עם בעלות ברית כמו בריטניה",
      "המשך תמיכה בכוחות המקומיים בתימן הלחמים בחות'ים"
     ]
    },
    {
     "actor": "בריטניה",
     "declared": [
      "סיוע צבאי הגנתי לסעודיה להגנה מפני מתקפות החות'ים",
      "הגנה על אינטרסים כלכליים ונתיבי אנרגיה"
     ],
     "inferred": [
      "מניעת ערעור יציבות אזורי באב אל-מנדב והים האדום מבלי להיגרר למעורבות התקפית בתוך תימן"
     ],
     "forecast": [
      "הפעלת מטוסי התדלוק מאקרוטירי לתקופה מוגבלת הנתונה לבחינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwm2qpmepmlzo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/kallas-urges-eu-to-bolster-red-sea-mission-against-houthi-threat/",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/22/yemen-houthis-battle-strategic-red-sea-heights",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/09/houthis-fight-for-key-yemeni-highlands-continue-striking-saudi-arabia.php",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/eu-top-diplomat-meets-irans-araghchi-discuss-strait-hormuz",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/uk-deploys-raf-tanker-refuel-saudi-jets-amid-houthi-attacks",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130590",
     "accessed_at": "2026-09-22T23:45:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T23:41:12+00:00",
  "changes": {
   "YEMEN-09222345-01": {
    "kind": "new"
   },
   "YEMEN-09222345-02": {
    "kind": "new"
   },
   "YEMEN-09222345-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "הסכמת בריטניה לספק תדלוק אווירי הגנתי לסעודיה",
    "score": 0.65
   },
   "YEMEN-09222345-04": {
    "kind": "new"
   },
   "YEMEN-09222345-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-22T2340__iran-202609222340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-22T23:40:34+00:00",
   "window": {
    "from": "2026-09-21T23:40:34+00:00",
    "to": "2026-09-22T23:40:34+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609222340"
   },
   "summary": "ארצות הברית ואיראן מקיימות מגעים מדיניים לצד איומים צבאיים הדדיים סביב עתיד תוכנית הגרעין והסנקציות הכלכליות. במקביל, נשמרת מתיחות גבוהה סביב חופש השיט במצר הורמוז, כאשר איראן מתנה את פתיחתו בהסרת המצור והפסקת פעילות צבאית אזורית.",
   "fronts": [
    {
     "name": "ארה\"ב - איראן",
     "status": "מגעים דיפלומטיים לצד איומי הסלמה"
    },
    {
     "name": "ישראל - איראן",
     "status": "מתיחות צבאית ואזהרות הדדיות"
    }
   ],
   "events": [
    {
     "id": "IRAN-09222340-01",
     "title": "חקירת תובעים בארה\"ב נגד בייננס",
     "summary": "תובעים פדרליים בארה\"ב מנהלים חקירה נגד בייננס בחשד להפרת סנקציות על איראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T23:11:18+00:00",
     "last_update_at": "2026-09-22T23:11:18+00:00",
     "what_is_not_verified": "האם בייננס אפשרה ביודעין מסחר שהפר את הסנקציות אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-prosecutors-probing-binance-possible-iran-sanctions-violations",
       "published_at": "2026-09-22T23:11:18+00:00"
      }
     ],
     "places": [
      {
       "name": "מנהטן, ארה\"ב",
       "lat": 40.758,
       "lon": -73.9855
      },
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-09222340-02",
     "title": "איומי שגריר ישראל באו\"ם נגד מנהיגי איראן",
     "summary": "שגריר ישראל באו\"ם דני דנון הצהיר שישראל יודעת היכן מנהיגי איראן מסתתרים ושיתפסתם היא עניין של ימים אם יתקפו.",
     "axis": "ישראל - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T23:05:49+00:00",
     "last_update_at": "2026-09-22T23:05:49+00:00",
     "what_is_not_verified": "היכולת המעשית לתפוס את המנהיגים אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47925",
       "published_at": "2026-09-22T23:05:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09222340-03",
     "title": "פיצוץ ליד האי קשם באיראן",
     "summary": "דווח על קול פיצוץ בסמוך לאי קשם במצר הורמוז.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T21:47:59+00:00",
     "last_update_at": "2026-09-22T22:10:34+00:00",
     "what_is_not_verified": "סיבת הפיצוץ והשפעתו אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosion-heard-near-irans-qeshm-island",
       "published_at": "2026-09-22T22:10:34+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1369739",
       "published_at": "2026-09-22T21:47:59+00:00"
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
     "id": "IRAN-09222340-04",
     "title": "פגישה בין נציגי איראן וארה\"ב בניו יורק",
     "summary": "עראקצ'י נפגש עם וויטקוף וקושנר בשולי עצרת האו\"ם, ובהמשך הוצגו תנאי איראן לפתיחת מצר הורמוז.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T17:35:49+00:00",
     "last_update_at": "2026-09-22T21:51:29+00:00",
     "what_is_not_verified": "פרטי ההסכמות המלאים אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21468159",
       "published_at": "2026-09-22T21:51:29+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/22/iran-us-talks-sidelines-un-summit-trump-israel-us",
       "published_at": "2026-09-22T21:21:59+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/iran-submits-conditions-reopening-hormuz-us-representative-state-media-says",
       "published_at": "2026-09-22T20:46:34+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130637",
       "published_at": "2026-09-22T19:55:42+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47923",
       "published_at": "2026-09-22T19:34:47+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sylxyex5fx",
       "published_at": "2026-09-22T17:35:49+00:00"
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
     "id": "IRAN-09222340-05",
     "title": "אישור ועדה בפרלמנט האיראני לגבי מצר הורמוז",
     "summary": "הוועדה לביטחון לאומי בפרלמנט האיראני אישרה עונשים למפר תקנות המעבר במצר הורמוז.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T21:22:45+00:00",
     "last_update_at": "2026-09-22T21:22:45+00:00",
     "what_is_not_verified": "אכיפת החוק בפועל אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86271781/Iran-parliament-commission-approves-penalties-for-violators-of",
       "published_at": "2026-09-22T21:22:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09222340-06",
     "title": "פגישת שר החוץ האיראני עם מקביליו מאזרבייג'ן ואוסטריה",
     "summary": "עראקצ'י קים פגישות עם שרי החוץ של אזרבייג'ן ואוסטריה בשולי עצרת האו\"ם בניו יורק.",
     "axis": "איראן - מדינות שונות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T21:05:49+00:00",
     "last_update_at": "2026-09-22T21:05:49+00:00",
     "what_is_not_verified": "תוכן השיחות המלא אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86271767/Araghchi-meets-Azeri-and-Austrian-counterparts-in-New-York",
       "published_at": "2026-09-22T21:05:49+00:00"
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
     "id": "IRAN-09222340-07",
     "title": "ביטול טיסות מאיראן לבגדאד ומסקט",
     "summary": "איראן ביטלה טיסות מטהרן לבגדאד ומסקט בעקבות לחץ אמריקאי והגבלות אזוריות.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T19:40:00+00:00",
     "last_update_at": "2026-09-22T19:40:00+00:00",
     "what_is_not_verified": "היקף ההשפעה המלא על חברות תעופה אחרות אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609228176",
       "published_at": "2026-09-22T19:40:00+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      },
      {
       "name": "מסקט, עומאן",
       "lat": 23.6124,
       "lon": 58.5938
      }
     ]
    },
    {
     "id": "IRAN-09222340-08",
     "title": "הסגרה צפויה של האקר איראני־טורקי לארה\"ב",
     "summary": "מונטנגרו תסגיר לארה\"ב את האקר אמיר באראטי הקשור למשמרות המהפכה.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T18:56:02+00:00",
     "last_update_at": "2026-09-22T18:56:02+00:00",
     "what_is_not_verified": "מועד ההסגרה המדויק אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609227447",
       "published_at": "2026-09-22T18:56:02+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "האם בייננס אפשרה ביודעין מסחר שהפר סנקציות",
    "סיבת הפיצוץ ליד האי קשם",
    "ההיתכנות והמועד של תקיפה אמריקאית אפשרית באתר הגרעין"
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
     "value": 3.0178,
     "unit": "ILS",
     "change_pct": 0.21,
     "source_id": "src_ecb",
     "as_of": "2026-09-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארה\"ב",
     "declared": [
      "להפעיל לחץ כלכלי מסיבי על איראן",
      "למנוע מאיראן להחזיק בנשק גרעיני"
     ],
     "inferred": [
      "לנסות לכפות הסדר אזורי דרך איומי כוח ומגעים דיפלומטיים"
     ],
     "forecast": [
      "המשך סנקציות ולחץ כלכלי עד להשגת הסכם או הסלמה נוספת"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "דרישה להסרת המצור הימי, שחרור נכסים מוקפאים וסיום המלחמה בחזיתות כתנאי לפתיחת מצר הורמוז"
     ],
     "inferred": [
      "ניסיון למנף את השליטה בנתיבי שיט כדי להקל על הלחץ הכלכלי הבינלאומי"
     ],
     "forecast": [
      "המשך מאבק דיפלומטי ושימוש בשלוחים אזוריים להפעלת לחץ"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התנגדות להתבססות איראנית ומניעת איומים מצד שלוחיה"
     ],
     "inferred": [
      "היערכות לכל תרחיש עימות מול איראן והזירות השונות"
     ],
     "forecast": [
      "המשך כוננות גבוהה ופעילות מודיעינית ומבצעית מול ציר איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/iran-submits-conditions-reopening-hormuz-us-representative-state-media-says",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/22/iran-us-talks-sidelines-un-summit-trump-israel-us",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609227447",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86271767/Araghchi-meets-Azeri-and-Austrian-counterparts-in-New-York",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21468159",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369739",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosion-heard-near-irans-qeshm-island",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130637",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47923",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sylxyex5fx",
     "accessed_at": "2026-09-22T23:40:34+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-22T10:40:28+00:00",
  "changes": {
   "IRAN-09222340-01": {
    "kind": "new"
   },
   "IRAN-09222340-02": {
    "kind": "new"
   },
   "IRAN-09222340-03": {
    "kind": "new"
   },
   "IRAN-09222340-04": {
    "kind": "new"
   },
   "IRAN-09222340-05": {
    "kind": "possible",
    "prev": "תקיפת מכליות במצר הורמוז",
    "score": 0.467
   },
   "IRAN-09222340-06": {
    "kind": "new"
   },
   "IRAN-09222340-07": {
    "kind": "new"
   },
   "IRAN-09222340-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-23T1527__ukraine-202609231527.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-23T15:27:54+00:00",
   "window": {
    "from": "2026-09-22T15:27:54+00:00",
    "to": "2026-09-23T15:27:54+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609231527"
   },
   "summary": "הלחימה באוקראינה נמשכת ביתר שאת, כאשר הכוחות הרוסיים ממשיכים לתקוף באמצעות רקטות, כטב\"מים ופצצות אוויריות מטרות בעורף האוקראיני ובערים שונות כגון קייב, קרמטורסק וחרקוב, וגובים קורבנות אדם ונזקים לתשתיות. במקביל, הזירה הדיפלומטית רוחשת פגישות רמי מעלה באו\"ם בניו יורק בין ראשי המעצמות לאוקראינה סביב מתווה סיום הלחימה וסנקציות, בעוד באירופה מתגברות המחלוקות סביב הקלת הגבלות על אוליגרכים רוסים לצד מתיחות גוברת סביב חדירות לכאורה למרחב האווירי של נאט\"ו.",
   "fronts": [
    {
     "name": "חזית המזרח",
     "status": "פעילה ואינטנסיבית"
    },
    {
     "name": "זירת העורף והתשתיות",
     "status": "נתונה לתקיפות אוויריות כוונות"
    },
    {
     "name": "זירת הים השחור",
     "status": "פעילה ומאויימת"
    },
    {
     "name": "המרחב האווירי והגבולות המערביים",
     "status": "מותח עם אירועי חדירה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09231527-01",
     "title": "תקיפת כוחות רוסיים באמצעות משגרי אורגן בקרמטורסק",
     "summary": "כוחות רוסיים תקפו את העיר קרמטורסק במחוז דונצק באמצעות משגרי רקטות מרובים מסוג אורגן, וכתוצאה מכך נפצעו אזרחים.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T14:51:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:51:00+00:00",
     "last_update_at": "2026-09-23T15:22:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_24d8641056d1199f",
       "url": "https://www.ukrinform.net/rubric-ato/4167255-russia-strikes-kramatorsk-with-uragan-mlrs-injuring-nine.html",
       "published_at": "2026-09-23T15:22:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_24d8641056d1199f",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054773/",
       "published_at": "2026-09-23T14:51:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קרמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-09231527-02",
     "title": "חדירת מסוק צבאי רוסי למרחב האווירי של פולין",
     "summary": "מסוק צבאי רוסי מסוג אם-8 חדר למרחב האווירי של פולין למשך שניות ספורות לאחר שהגיע מאזור קלינינגרד.",
     "axis": "הגבול המערבי והמרחב האווירי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T11:08:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:37:17+00:00",
     "last_update_at": "2026-09-23T15:04:25+00:00",
     "what_is_not_verified": "הטענה הרוסית אינה קיימת שכן רוסיה לא הגיבה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_e961293f3fa3c464",
       "url": "https://meduza.io/en/news/2026/09/23/poland-says-russian-military-helicopter-violated-its-airspace",
       "published_at": "2026-09-23T15:04:25+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_7b79300d808d6b1a",
       "url": "https://kyivindependent.com/russian-mi-8-helicopter-violates-polish-airspace-near-kaliningrad-poland-says/",
       "published_at": "2026-09-23T14:37:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09231527-03",
     "title": "החלטת האיחוד האירופי להסיר שני אוליגרכים מרשימת הסנקציות",
     "summary": "המדינות החברות באירופה הסכימו להאריך את הסנקציות על מעורבים במלחמה אך הסירו מהרשימה את האוליגרכים אלישר אוסמוב ומיכאיל פרידמן.",
     "axis": "זירת הסנקציות הדיפלומטית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T18:07:19+00:00",
     "last_update_at": "2026-09-23T14:42:34+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_a1eea572aadc917b",
       "url": "https://meduza.io/en/feature/2026/09/23/a-triumph-of-money-filth-and-hypocrisy-eu-decision-to-lift-sanctions-on-russian-billionaires-fridman-and-usmanov-draws-backlash",
       "published_at": "2026-09-23T14:42:34+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_a1eea572aadc917b",
       "url": "https://www.theguardian.com/world/2026/sep/22/eu-removes-oligarchs-from-russia-sanctions-list-as-deadline-looms",
       "published_at": "2026-09-22T18:07:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09231527-04",
     "title": "תקיפות כטב\"מים ופגיעות בתשתיות בקייב",
     "summary": "תקיפות רוסיות בקייב ובסביבתה גרמו להרוגים, פצועים, פגיעה בתשתיות אנרגיה ותחבורה ושיבושי אינטרנט.",
     "axis": "העורף והתשתיות באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T10:57:12+00:00",
     "last_update_at": "2026-09-23T14:40:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_526236dd64d6833d",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054770/",
       "published_at": "2026-09-23T14:40:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_526236dd64d6833d",
       "url": "https://www.ukrinform.net/rubric-ato/4167199-russian-attacks-on-kyiv-kill-two-injure-at-least-36.html",
       "published_at": "2026-09-23T13:39:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_4974374d8a694bdd",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054745/",
       "published_at": "2026-09-23T12:26:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_526236dd64d6833d",
       "url": "https://t.me/alexmehacarmel/47929",
       "published_at": "2026-09-23T10:57:12+00:00"
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
     "id": "UKRAINE-09231527-05",
     "title": "תקיפת כטב\"ם על כלי רכב במחוז חרקוב",
     "summary": "כטב\"ם רוסי פגע במכונית פרטית בכפר בזרוקי שבמחוז חרקוב, מה שהביא למותו של אזרח ולפציעת אזרחית.",
     "axis": "חזית הצפון-מזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:27:00+00:00",
     "last_update_at": "2026-09-23T14:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_23601a01549dc37b",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054767/",
       "published_at": "2026-09-23T14:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בזרוקי, אוקראינה",
       "lat": 50.0077,
       "lon": 34.6354
      }
     ]
    },
    {
     "id": "UKRAINE-09231527-06",
     "title": "פגיעה בכלי שיט בים השחור ופינוי אנשי צוות",
     "summary": "כוחות משמר הגבול של אוקראינה פינו אנשי צוות מספינה שהותקפה בידי כוחות רוסיים בים השחור באזור אודסה.",
     "axis": "זירת הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:20:00+00:00",
     "last_update_at": "2026-09-23T14:20:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_421f7ee07c543cf0",
       "url": "https://www.ukrinform.net/rubric-ato/4167214-ukrainian-border-guards-evacuate-15-crew-members-from-vessel-attacked-by-russia-in-black-sea.html",
       "published_at": "2026-09-23T14:20:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09231527-07",
     "title": "פגיעת פצצות אוויריות באולקסנדריבקה במחוז דונצק",
     "summary": "תקיפה רוסית באמצעות פצצות אוויריות על הכפר אולקסנדריבקה הרסה בניינים וגרמה להרוגים ולפצועים, כאשר אנשים נוספים נותרו לכודים תחת ההריסות.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-23T12:16:00+00:00",
     "last_update_at": "2026-09-23T12:16:00+00:00",
     "what_is_not_verified": "מספר הלכודים המדויק תחת ההריסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_c0dfc6491c41b1d8",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054742/",
       "published_at": "2026-09-23T12:16:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אולקסנדריבקה, אוקראינה",
       "lat": 48.7074,
       "lon": 36.9208
      }
     ]
    },
    {
     "id": "UKRAINE-09231527-08",
     "title": "פגישה בין מזכיר המדינה האמריקאי לשר החוץ הרוסי בניו יורק",
     "summary": "מרקו רוביו וסרגיי לברוב קיימו פגישה סגורה בשולי עצרת האו\"ם בניו יורק.",
     "axis": "הזירה הדיפלומטית הבינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:15:00+00:00",
     "last_update_at": "2026-09-23T14:15:00+00:00",
     "what_is_not_verified": "תוכן השיחות הסגורות והפרטים המלאים עליהן אינם ידועים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054766/",
       "published_at": "2026-09-23T14:15:00+00:00"
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
     "id": "UKRAINE-09231527-09",
     "title": "פגישת זלנסקי וטראמפ בניו יורק",
     "summary": "נשיא אוקראינה ודונלד טראמפ נפגשו לשיחה בת כ-40 דקות בניו יורק ודנו בנושאי סיום המלחמה, סיוע צבאי והפוגת אנרגיה.",
     "axis": "הזירה הדיפלומטית הבינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T13:24:54+00:00",
     "last_update_at": "2026-09-23T14:15:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_030a4fb2cfbe5ae2",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054766/",
       "published_at": "2026-09-23T14:15:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_f1b4fac7142f8b95",
       "url": "https://meduza.io/en/feature/2026/09/23/after-trump-and-zelensky-meet-in-new-york-ukrainian-president-says-he-hopes-war-will-end-before-winter",
       "published_at": "2026-09-23T13:24:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    }
   ],
   "not_verified": [
    "תוכן השיחות המלא והמדויק בפגישה הסגורה בין מרקו רוביו לסרגיי לברוב",
    "היקף הנזקים המלא והזמן המדויק לחידוש מלא של רשת האינטרנט בקייב",
    "מספר האנשים המדויק הנותרים לכודים תחת ההריסות באולקסנדריבקה",
    "כוונותיה המדויקות של רוסיה באשר למטרות בדיקת מוכנות ההגנה האווירית בפולין"
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
     "value": 1.1411,
     "unit": "USD",
     "change_pct": -0.45,
     "source_id": "src_ecb",
     "as_of": "2026-09-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "התייחסות לכל מטען צבאי לקייב כיעד לגיטימי"
     ],
     "inferred": [
      "שחיקת התשתיות האזרחיות והאנרגטיות של אוקראינה לקראת החורף",
      "בחינת יכולות התגובה של נאט\"ו במרחב האווירי המזרחי"
     ],
     "forecast": [
      "המשך לחץ צבאי לאורך החזית במזרח ובמרחב האווירי",
      "ניצול מנופים כלכליים ומדיניים מול המערב"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "דרישה לשחזור הריבונות הטריטוריאלית המלאה לרבות חצי האי קרים",
      "שאיפה לסיום המלחמה לפני עונת החורף"
     ],
     "inferred": [
      "ניסיון להגביר את הלחץ הדיפלומטי על אירופה לשמור על משטר סנקציות נוקשה",
      "גיוס סיוע צבאי מערבי מתקדם ופתרונות להסרת המצור על הים השחור"
     ],
     "forecast": [
      "המשך מאמצי הגנה מול התקיפות האוויריות והקרקעיות",
      "חיפוש פורמטים דיפלומטיים לקידום הפוגה או הסדר"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "קריאה להביא לסיום המלחמה",
      "הפעלת כלים כלכליים ומכסים פוטנציאליים על קונים מרכזיים של אנרגיה רוסית"
     ],
     "inferred": [
      "תיווך זהיר לצורך בחינת אפשרויות להפוגה באנרגיה ובמלחמה",
      "שמירה על מעורבות מבוקרת מבלי להיגרר לעימות ישיר"
     ],
     "forecast": [
      "המשך מגעים עקיפים וישירים לצד הפעלת לחץ כלכלי ממוקד"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/22/eu-removes-oligarchs-from-russia-sanctions-list-as-deadline-looms",
     "accessed_at": "2026-09-23T15:27:54+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-mi-8-helicopter-violates-polish-airspace-near-kaliningrad-poland-says/",
     "accessed_at": "2026-09-23T15:27:54+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/09/23/after-trump-and-zelensky-meet-in-new-york-ukrainian-president-says-he-hopes-war-will-end-before-winter",
     "accessed_at": "2026-09-23T15:27:54+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/23/8054766/",
     "accessed_at": "2026-09-23T15:27:54+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47929",
     "accessed_at": "2026-09-23T15:27:54+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4167214-ukrainian-border-guards-evacuate-15-crew-members-from-vessel-attacked-by-russia-in-black-sea.html",
     "accessed_at": "2026-09-23T15:27:54+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-22T23:44:35+00:00",
  "changes": {
   "UKRAINE-09231527-01": {
    "kind": "new"
   },
   "UKRAINE-09231527-02": {
    "kind": "new"
   },
   "UKRAINE-09231527-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "החלטת האיחוד האירופי על סנקציות והסרת אוליגרכים",
    "score": 1.0
   },
   "UKRAINE-09231527-04": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "פגיעת כטב\"מים בקייב",
    "score": 0.817
   },
   "UKRAINE-09231527-05": {
    "kind": "new"
   },
   "UKRAINE-09231527-06": {
    "kind": "new"
   },
   "UKRAINE-09231527-07": {
    "kind": "new"
   },
   "UKRAINE-09231527-08": {
    "kind": "new"
   },
   "UKRAINE-09231527-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-22T2346__north-202609222346.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-22T23:46:03+00:00",
   "window": {
    "from": "2026-09-21T23:46:03+00:00",
    "to": "2026-09-22T23:46:03+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609222346"
   },
   "summary": "הזירה הצפונית מתאפיינת במתיחות ביטחונית גבוהה ובמוקדי חיכוך נמשכים בין ישראל לבין לבנון וסוריה. ישראל ממשיכה בפעילות מבצעית הכוללת תקיפות ארטילריות ואוויריות בדרום לבנון ובדרום סוריה, לצד היערכות והארכת מצב החירום עקב חשש מהסלמה רחבה. במקביל, ממשלת לבנון שומרת על יציבות פוליטית זמנית, ורוסיה ממשיכה בתהליך של צמצום נוכחותה הצבאית בבסיס חמימים בסוריה.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעילה ומתוחה עם חילופי אש ותקיפות צה\"ל"
    },
    {
     "name": "חזית סוריה",
     "status": "פעילה עם פשיטות, ירי ארטילרי ושינויים בהיערכות כוחות זרים"
    }
   ],
   "events": [
    {
     "id": "NORTH-09222346-01",
     "title": "ירי ארטילרי ותקיפות ישראליות בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו ירי ארטילרי ותקיפות מהאוויר לעבר מרחבים שונים בדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T16:42:29+00:00",
     "last_update_at": "2026-09-22T19:16:18+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129877/",
       "published_at": "2026-09-22T19:16:18+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129867/",
       "published_at": "2026-09-22T19:00:31+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129817/",
       "published_at": "2026-09-22T16:42:29+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-09222346-02",
     "title": "הארכת מצב החירום המלחמתי בישראל",
     "summary": "ישראל האריכה באופן בלתי צפוי את מצב החירום המלחמתי עד לתאריך 6 באוקטובר בשל דיווחים מודיעיניים על הסלמה אפשרית בחזיתות איראן ולבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T14:06:00+00:00",
     "last_update_at": "2026-09-22T14:06:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/959165/multiple-fronts-rising-tensions-israel-extends-wartime-emergency/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959165",
       "published_at": "2026-09-22T14:06:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09222346-03",
     "title": "חציית גבול של אזרחים ישראלים לסוריה והשבתם",
     "summary": "14 אזרחים ישראלים חצו את הגבול לאזור סוריה מאזור אלוני הבשן, וכוח צה\"ל החזיר אותם לשטח ישראל והעבירם למשטרה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T16:43:07+00:00",
     "last_update_at": "2026-09-22T16:44:30+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_6b67326bd3635ea2",
       "url": "https://www.maariv.co.il/breaking-news/article-1369680",
       "published_at": "2026-09-22T16:44:30+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_6b67326bd3635ea2",
       "url": "https://t.me/idf_telegram/25174",
       "published_at": "2026-09-22T16:43:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09222346-04",
     "title": "תקיפות ארטילריות וחדירת כוחות ישראליים לדרום סוריה",
     "summary": "הצבא הישראלי ירה פגזי ארטילריה ונרות תאורה באזור דרעא, וביצע כניסה וחיפוש בבתים באזור קוניטרה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T07:18:01+00:00",
     "last_update_at": "2026-09-22T16:10:55+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/09/israel-shells-daraa-countryside-enters-quneitra/",
       "published_at": "2026-09-22T16:10:55+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-raid-village-near-un-post-in-southern-syria/4064046",
       "published_at": "2026-09-22T07:18:01+00:00"
      }
     ],
     "places": [
      {
       "name": "עבדין, סוריה",
       "lat": 32.7805,
       "lon": 35.8247
      }
     ]
    },
    {
     "id": "NORTH-09222346-05",
     "title": "תקרית בין צה\"ל לצבא לבנון בדיר מימאס",
     "summary": "התפתחו מתחים בין כוחות צה\"ל לחיילי חטיבה 7 של צבא לבנון שהקימו עמדת תצפית זמנית בדיר מימאס, מה שהוביל להשלכת רימוני הלם ולנסיגת הכוח הלבנוני.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T11:33:31+00:00",
     "last_update_at": "2026-09-22T11:33:31+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/could-the-september-18-incident-in-the-village-of-deir-mimas-in-southern-lebanon-between-the-idf-and-the-laf-have-been-avoided-had-the-lebanese-force-not-been-commanded-by-a-shiite-officer/",
       "published_at": "2026-09-22T11:33:31+00:00"
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
     "id": "NORTH-09222346-06",
     "title": "צמצום נוכחות ונכסים רוסיים בבסיס חמימים בסוריה",
     "summary": "תיעוד רשמי הראה כי רוסיה צמצמה משמעותית את נכסיה האוויריים בבסיס חמימים בסוריה מאז נפילת משטר אסד, והמתקנים צפויים להפוך למרכזי אימון משותפים.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-22T08:03:08+00:00",
     "last_update_at": "2026-09-22T08:03:08+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/russia-is-scaling-back-not-leaving-syria/",
       "published_at": "2026-09-22T08:03:08+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על כך שנוכחותו של קצין שיעי ספציפי בצבא לבנון נוצלה במכוון על ידי חיזבאללה למטרות השפעה פוליטית אינן מאומתות ממקור רשמי נייטרלי",
    "ההערכות המודיעיניות המדויקות שהביאו להארכת מצב החירום בישראל אינן חשופות במלואן"
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
     "value": 3.0178,
     "unit": "ILS",
     "change_pct": 0.21,
     "source_id": "src_ecb",
     "as_of": "2026-09-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת סיכונים ביטחוניים בגבולות הצפון",
      "מניעת הפרעות לפעילות המבצעית בשטחי המרחב"
     ],
     "inferred": [
      "שימור חופש פעולה מבצעי בדרום לבנון ובדרום סוריה",
      "היערכות למנוע התבססות עוינת בגבולות הצפוניים"
     ],
     "forecast": [
      "המשך פעילות צבאית ממוקדת במרחבי הגבול",
      "כוננות גבוהה והיערכות לאפשרות של הסלמה רחבה"
     ]
    },
    {
     "actor": "צבא לבנון",
     "declared": [
      "אבטחת חקלאים ואזרחים מקומיים בדרום לבנון",
      "תיאום פעולות דרך מנגנוני התיאום הבינלאומיים"
     ],
     "inferred": [
      "ניסיון לשמור על נוכחות בשטח למרות לחצים מצד ישראל וגורמים פנים-לבנוניים"
     ],
     "forecast": [
      "המשך חיכוך פוטנציאלי מול פעילות צה\"ל בדרום לבנון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/russia-is-scaling-back-not-leaving-syria/",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129817/",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-raid-village-near-un-post-in-southern-syria/4064046",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/israel-shells-daraa-countryside-enters-quneitra/",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/959165/multiple-fronts-rising-tensions-israel-extends-wartime-emergency/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959165",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369680",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25174",
     "accessed_at": "2026-09-22T23:46:03+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-22T05:24:19+00:00",
  "changes": {
   "NORTH-09222346-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפות והפגזות ישראליות בדרום לבנון",
    "score": 0.65
   },
   "NORTH-09222346-02": {
    "kind": "new"
   },
   "NORTH-09222346-03": {
    "kind": "new"
   },
   "NORTH-09222346-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות והפגזות של צבא ההגנה לישראל בדרום סוריה",
    "score": 1.0
   },
   "NORTH-09222346-05": {
    "kind": "new"
   },
   "NORTH-09222346-06": {
    "kind": "new"
   }
  }
 }
};
