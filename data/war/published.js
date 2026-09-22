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
  "draft": "drafts/ukraine/2026-09-22T2344__ukraine-202609222344.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-22T23:44:35+00:00",
   "window": {
    "from": "2026-09-21T23:44:35+00:00",
    "to": "2026-09-22T23:44:35+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609222344"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת בשילוב תקיפות אוויריות, פגיעה בתשתיות אנרגיה ופעילות בחזיתות שונות, לצד מאמצים דיפלומטיים אמריקאיים ואירופיים לקדם הפסקת אש אנרגטית. בזירה הבינלאומית, האיחוד האירופי האריך את הסנקציות על רוסיה אך הסיר מהן אוליגרכים בולטים, דבר שעורר ביקורת חריפה מצד אוקראינה.",
   "fronts": [
    {
     "name": "חזית דונצק",
     "status": "פעיל עם חילופי אש ותקיפות מקומיות"
    },
    {
     "name": "חצי האי קרים",
     "status": "פעילות סיור ואיסוף מודיעין"
    },
    {
     "name": "עומק רוסיה",
     "status": "תקיפות כטב\"מים אוקראיניים על בתי זיקוק ותשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09222344-01",
     "title": "איתור עמדת הגנה אווירית בקרץ'",
     "summary": "אותרה עמדת מערכות הגנה אווירית סמוך לקרץ' בחצי האי קרים.",
     "axis": "חצי האי קרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T22:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T22:30:00+00:00",
     "last_update_at": "2026-09-22T22:30:00+00:00",
     "what_is_not_verified": "המידע מבוסס על מדיה חברתית בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_social_media",
       "url": "https://www.ukrinform.net/rubric-ato/4166592-s300s400-air-defense-position-reconnoitered-near-kerch-in-crimea-social-media.html",
       "published_at": "2026-09-22T22:30:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קרץ', קרים",
       "lat": 45.3563,
       "lon": 36.4671
      }
     ]
    },
    {
     "id": "UKRAINE-09222344-02",
     "title": "מעצר חשוד בריגול בסלביאנסק",
     "summary": "שירות הביטחון של אוקראינה עצצר סוכן מודיעין צבאי רוסי שכיוון פצצות ורחפני תקיפה בגזרת סלביאנסק.",
     "axis": "חזית דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T21:40:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T21:40:00+00:00",
     "last_update_at": "2026-09-22T21:40:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_3ffd197041d4b210",
       "url": "https://www.ukrinform.net/rubric-crime/4166552-ssu-detains-russian-strike-spotter-on-sloviansk-front.html",
       "published_at": "2026-09-22T21:40:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-09222344-03",
     "title": "תקיפת משגר וכלים באזור דונצק",
     "summary": "כוחות המשמר הלאומי של אוקראינה תקפו מערכת רקטות רב-קניה ושני תותחים מאחורי קווי האויב בגזרת דונצק.",
     "axis": "חזית דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T19:54:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T19:54:00+00:00",
     "last_update_at": "2026-09-22T19:54:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_18f87e78cb27eda8",
       "url": "https://www.ukrinform.net/rubric-ato/4166916-national-guard-troops-strike-mlrs-two-guns-behind-enemy-lines-on-donetsk-axis.html",
       "published_at": "2026-09-22T19:54:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09222344-04",
     "title": "החלטת האיחוד האירופי על סנקציות והסרת אוליגרכים",
     "summary": "מועצת האיחוד האירופי האריכה את הסנקציות על רוסיה בשלוש שנים והסירה מהרשימה את אלישר אוסמוב ומיכאיל פרידמן.",
     "axis": "דיפלומטיה וסנקציות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T17:15:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T17:15:00+00:00",
     "last_update_at": "2026-09-22T18:07:19+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_a1eea572aadc917b",
       "url": "https://www.theguardian.com/world/2026/sep/22/eu-removes-oligarchs-from-russia-sanctions-list-as-deadline-looms",
       "published_at": "2026-09-22T18:07:19+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_18eea524ebac863c",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/22/8054639/",
       "published_at": "2026-09-22T17:15:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09222344-05",
     "title": "פגיעת כטב\"מים בקייב",
     "summary": "כטב\"מים מונעים בסילון תקפו את קייב וגרמו לפציעת בני אדם.",
     "axis": "מרכז אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T17:21:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T17:21:50+00:00",
     "last_update_at": "2026-09-22T17:21:50+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_mayor_vitali_klitschko",
       "url": "https://kyivindependent.com/russian-jet-powered-drones-strike-kyiv-injuring-8/",
       "published_at": "2026-09-22T17:21:50+00:00"
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
     "id": "UKRAINE-09222344-06",
     "title": "יירוט רחפנים מעארב רוסיה",
     "summary": "כוחות ההגנה האווירית של רוסיה ייורטו כטב\"מים מעל אזורים שונים ומעל הים השחור.",
     "axis": "שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T17:51:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T17:51:10+00:00",
     "last_update_at": "2026-09-22T17:51:10+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_30db6f6fdda5439e",
       "url": "https://tass.com/politics/2191299",
       "published_at": "2026-09-22T17:51:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09222344-07",
     "title": "תקיפה אוקראינית על בית זיקוק בסמרה",
     "summary": "כטב\"מים אוקראינים תקפו בית זיקוק לנפט בסמרה שברוסיה.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T01:58:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T01:58:36+00:00",
     "last_update_at": "2026-09-22T11:36:45+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_visual_local_report",
       "url": "https://t.me/alexmehacarmel/47906",
       "published_at": "2026-09-22T11:36:45+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_visual_local_report",
       "url": "https://t.me/alexmehacarmel/47898",
       "published_at": "2026-09-22T01:58:36+00:00"
      }
     ],
     "places": [
      {
       "name": "סמרה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על תכנון מתקפה רוסית מסיבית חדשה נגד אוקראינה",
    "האם הושגה הסכמה כלשהי בין טראמפ וזלנסקי בנוגע לייצור משותף של טילי פטריוט",
    "היקף הנזק המדויק ממתקפות הכטב\"מים על בתי הזיקוק ברוסיה"
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
     "value": 1.1463,
     "unit": "USD",
     "change_pct": -0.23,
     "source_id": "src_ecb",
     "as_of": "2026-09-22T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת הפסקת אש הדדית על תשתיות אנרגיה",
      "קבלת חימוש הגנה אווירית ורישיונות לייצור טילי מיירט",
      "המשך וחיזוק הסנקציות על רוסיה"
     ],
     "inferred": [
      "שחיקת יכולות הזיקוק והכלכלה של רוסיה באמצעות תקיפות עומק",
      "מניעת הקלות לסנקציות על גורמים מקורבים לקרמלין"
     ],
     "forecast": [
      "אוקראינה תמשיך לנסות להבטיח אספקת טילי יירוט לקראת החורף"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת יעדי המלחמה המוגדרים בכל האמצעים",
      "המשך פעולות צבאיות והתקפות על תשתיות אוקראיניות"
     ],
     "inferred": [
      "ניצול מצוקת האנרגיה בחורף הקרוב כאמצעי לחץ על אוקראינה ואירופה",
      "הימנעות מהסכמות שיגבילו את חופש הפעולה הצבאי שלה"
     ],
     "forecast": [
      "הגברת לחץ התשתיות והתקיפות האוויריות עם התקרב עונת החורף"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/22/eu-removes-oligarchs-from-russia-sanctions-list-as-deadline-looms",
     "accessed_at": "2026-09-22T23:44:35+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-jet-powered-drones-strike-kyiv-injuring-8/",
     "accessed_at": "2026-09-22T23:44:35+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/22/8054639/",
     "accessed_at": "2026-09-22T23:44:35+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2191299",
     "accessed_at": "2026-09-22T23:44:35+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47898",
     "accessed_at": "2026-09-22T23:44:35+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4166916-national-guard-troops-strike-mlrs-two-guns-behind-enemy-lines-on-donetsk-axis.html",
     "accessed_at": "2026-09-22T23:44:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-22T05:23:27+00:00",
  "changes": {
   "UKRAINE-09222344-01": {
    "kind": "new"
   },
   "UKRAINE-09222344-02": {
    "kind": "new"
   },
   "UKRAINE-09222344-03": {
    "kind": "new"
   },
   "UKRAINE-09222344-04": {
    "kind": "new"
   },
   "UKRAINE-09222344-05": {
    "kind": "new"
   },
   "UKRAINE-09222344-06": {
    "kind": "new"
   },
   "UKRAINE-09222344-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפת כטב\"ם על בית זיקוק בסמרה",
    "score": 1.0
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
