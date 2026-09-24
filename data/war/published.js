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
  "draft": "drafts/iran/2026-09-24T2340__iran-202609242340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-24T23:40:37+00:00",
   "window": {
    "from": "2026-09-23T23:40:37+00:00",
    "to": "2026-09-24T23:40:37+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609242340"
   },
   "summary": "העימות המשולש בין ישראל, ארה\"ב ואיראן נמשך במקביל לדיפלומטיה בעצרת האו\"ם, שם החליפו הצדדים איומים והצעות לתיווך פוטנציאלי. בעוד איראן מאותתת על אפשרות לפתיחת מצר הורמוז בתמורה להסרת סנקציות והפסקת אש, ישראל וארה\"ב מהדקות את הלחץ הצבאי והכלכלי באמצעות סנקציות על תעופה וחיזוק עמדות אסטרטגיות.",
   "fronts": [
    {
     "name": "ישראל - איראן",
     "status": "פעיל ומתוח"
    },
    {
     "name": "ארה\"ב - איראן",
     "status": "פעיל עם מגעים דיפלומטיים עקיפים"
    },
    {
     "name": "המפרץ והים האדום",
     "status": "מוסל מיוחס לאיומי סנקציות ותעופה"
    }
   ],
   "events": [
    {
     "id": "IRAN-09242340-01",
     "title": "נציג ישראל באו\"ם העניק נתב סטארלינק לנציג איראן",
     "summary": "שגריר ישראל באו\"ם ניגש לנציג האיראני והציע לו לקחת מכשיר סטארלינק לטהרן כדי לאפשר חירות לעם האיראני, אך הנציג האיראני נמנע מלקבלו.",
     "axis": "ישראל - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T16:43:27+00:00",
     "last_update_at": "2026-09-24T23:25:08+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47982",
       "published_at": "2026-09-24T23:25:08+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21486641",
       "published_at": "2026-09-24T22:04:15+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkmrm1179zg",
       "published_at": "2026-09-24T20:18:04+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bk97a2fqzg",
       "published_at": "2026-09-24T16:43:27+00:00"
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
     "id": "IRAN-09242340-02",
     "title": "איראן הציעה תנאים לפתיחת מצר הורמוז וחידוש שיחות הגרעין",
     "summary": "איראן העבירה לארה\"ב הצעה באמצעות מתווכים לפתוח את מצר הורמוז בתוך שישה ימים ולהתחיל בשיחות גרעין, בתנאי שארה\"ב תסיר סנקציות על ייצוא הנפט, תסייום את המלחמה בחזיתות ותשחרר כספים מוקפאים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T17:55:14+00:00",
     "last_update_at": "2026-09-24T23:18:14+00:00",
     "what_is_not_verified": "האם ארה\"ב תענה בחיוב להצעה והאם התנאים ייושמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21486797",
       "published_at": "2026-09-24T23:18:14+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/24/ed-miliband-meets-iran-foreign-minister-us-ultimatum-strait-hormuz",
       "published_at": "2026-09-24T21:57:34+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609249795",
       "published_at": "2026-09-24T17:55:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09242340-03",
     "title": "קולומביה ופרו ניתקו יחסים דיפלומטיים עם איראן",
     "summary": "משרד החוץ בקולומביה הודיע על ניתוק היחסים עם איראן בשל קשריה לארגוני טרור ונרקו-טרור, בעקבות צעד דומה שנקטה פרו בתחילת החודש.",
     "axis": "איראן - אמריקה הלטינית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T23:05:55+00:00",
     "last_update_at": "2026-09-24T23:05:55+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21486769",
       "published_at": "2026-09-24T23:05:55+00:00"
      }
     ],
     "places": [
      {
       "name": "בוגוטה, קולומביה",
       "lat": 4.6534,
       "lon": -74.0836
      }
     ]
    },
    {
     "id": "IRAN-09242340-04",
     "title": "נשיא איראן הצהיר כי ארה\"ב צריכה לבחור אם לסיים את המלחמה",
     "summary": "נשיא איראן מסעוד פזשקיאן טען בראיונות ובנאומים כי טהרן אינה מעוניינת להמשיך להילחם וכי נתון בידי ארה\"ב לבחור מתי תסתיים המלחמה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T22:49:53+00:00",
     "last_update_at": "2026-09-24T23:30:26+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/us-must-choose-whether-end-war-iran-president-fox-news",
       "published_at": "2026-09-24T23:30:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-president-says-it-us-choose-if-it-wants-end-iran-war",
       "published_at": "2026-09-24T22:49:53+00:00"
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
     "id": "IRAN-09242340-05",
     "title": "הסנאט האמריקאי דחה החלטה להגבלת סמכויות המלחמה של טראמפ נגד איראן",
     "summary": "הסנאט בארצות הברית דחה ברוב דחוק החלטה שהגישו דמוקרטים לעצירת הפעילות הצבאית נגד איראן ללא אישור קונגרס.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T19:46:39+00:00",
     "last_update_at": "2026-09-24T19:46:39+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/us-senate-rejects-resolution-curbing-trumps-iran-war-powers",
       "published_at": "2026-09-24T19:46:39+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-09242340-06",
     "title": "הגעת צוללת השישית של צה\"ל לישראל ומסר לאיראן",
     "summary": "הצוללת אח\"י דרקון הגיעה לישראל לאחר מסע מגרמניה, ושר הביטחון הצהיר כי המרחק אינו מעניק חסינות לאיראן באוויר, ביבשה ובים.",
     "axis": "ישראל - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T16:17:32+00:00",
     "last_update_at": "2026-09-24T16:17:32+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/b1jtoim9ml",
       "published_at": "2026-09-24T16:17:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09242340-07",
     "title": "טורקיה ואיחוד האמירויות השעו טיסות של חברות תעופה איראניות",
     "summary": "רשויות התעופה בטורקיה ובאיחוד האמירויות החליטו להשעות את כל הטיסות של חברות התעופה האיראניות על רקע הסנקציות האמריקאיות.",
     "axis": "איראן - המפרץ וטורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T15:22:53+00:00",
     "last_update_at": "2026-09-24T16:00:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/2026/09/24/is-turkey-turning-on-tehran-or-just-dodging-the-treasury-department/",
       "published_at": "2026-09-24T16:00:17+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202609248286",
       "published_at": "2026-09-24T15:22:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09242340-08",
     "title": "איראן מאיימת על מדינות המפרץ ומזהירה מחזית נוספת בים האדום",
     "summary": "בכירים ויועצים צבאיים באיראן איימו לתקוף מדינות במפרץ הפרסי אם יצטרפו לסנקציות על התעופה, והזהירו מפני פתיחת חזית חדשה בים האדום ומצר באב אל-מנדב בתיאום עם החות'ים.",
     "axis": "איראן - ארה\"ב/המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T11:27:46+00:00",
     "last_update_at": "2026-09-24T11:30:42+00:00",
     "what_is_not_verified": "האם יתממשו האיומים לתקיפה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130728",
       "published_at": "2026-09-24T11:30:42+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130727",
       "published_at": "2026-09-24T11:27:46+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "פרטי ההצעה המלאים שהגישה איראן דרך מתווכים לגבי מצר הורמוז ותנאיה המדויקים",
    "מידת ההיתכנות של פתיחת החזית הנוספת בים האדום על ידי איראן ושלוחותיה",
    "האם ארה\"ב תענה בחיוב להצעות הפשרה של איראן"
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
     "value": 3.0482,
     "unit": "ILS",
     "change_pct": 1.06,
     "source_id": "src_ecb",
     "as_of": "2026-09-24T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הסרת הסנקציות הכלכליות ונפט",
      "סיום המלחמה בכל החזיתות כולל לבנון",
      "שחרור כספים מוקפאים בחו\"ל"
     ],
     "inferred": [
      "הפחתת הלחץ הכלכלי המאיים על יציבות המשטר",
      "מציאת דרך לצאת מהעימות הצבאי מבלי לאבד פנים"
     ],
     "forecast": [
      "איראן תמשיך לשלב איומים אזוריים עם פניות למשא ומתן עקיף",
      "טהרן תנסה להיעזר בשלוחותיה להפעלת לחץ במצבי מפתח ימיים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות איראנית והסרת האיום האיראני",
      "קידום שינוי משטר ומתן תמיכה מורלית וטכנולוגית לאזרחי איראן"
     ],
     "inferred": [
      "המשך בידוד בינלאומי של טהרן",
      "העמקת שיתוף הפעולה האסטרטגי מול שלוחות איראן"
     ],
     "forecast": [
      "שמירה על מוכנות צבאית גבוהה והרתעה מול איומים רחוקים וקרובים"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הגבלת תוכנית הגרעין האיראנית ופעילותה האזורית"
     ],
     "inferred": [
      "הימנעות מהסתבכות במלחמה כוללת חדשה וממושכת ללא אישור קונגרס",
      "הפעלת לחץ כלכלי ומדיני מקסימלי יחד עם בעלות ברית"
     ],
     "forecast": [
      "המשך בחינת מגעים עקיפים לצד שמירת הסנקציות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/us-senate-rejects-resolution-curbing-trumps-iran-war-powers",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/2026/09/24/is-turkey-turning-on-tehran-or-just-dodging-the-treasury-department/",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/24/ed-miliband-meets-iran-foreign-minister-us-ultimatum-strait-hormuz",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609248286",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21486769",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-president-says-it-us-choose-if-it-wants-end-iran-war",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130727",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47982",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/b1jtoim9ml",
     "accessed_at": "2026-09-24T23:40:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-23T23:40:31+00:00",
  "changes": {
   "IRAN-09242340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "נאום נשיא איראן בעצרת האו\"ם",
    "score": 0.817
   },
   "IRAN-09242340-02": {
    "kind": "new"
   },
   "IRAN-09242340-03": {
    "kind": "new"
   },
   "IRAN-09242340-04": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "מגעים דיפלומטיים עקיפים בין איראן לארה\"ב בניו יורק",
    "score": 0.817
   },
   "IRAN-09242340-05": {
    "kind": "new"
   },
   "IRAN-09242340-06": {
    "kind": "new"
   },
   "IRAN-09242340-07": {
    "kind": "new"
   },
   "IRAN-09242340-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-24T2350__ukraine-202609242350.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-24T23:50:56+00:00",
   "window": {
    "from": "2026-09-23T23:50:56+00:00",
    "to": "2026-09-24T23:50:56+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609242350"
   },
   "summary": "המלחמה בין רוסיה לבין אוקראינה נמשכת בלחימה אינטנסיבית לאורך קו החזית, בדגש על תקיפות אוויריות ושימוש גובר ברחפנים וטכנולוגיות בלתי מאוישות מצד שתי המדינות. במקביל, נמשכים מאמצים דיפלומטיים בינלאומיים להענקת סיוע צבאי וכלכלי רחב למערך ההגנה והתשתיות של אוקראינה.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "פעיל עם עימותים מרובים"
    },
    {
     "name": "גזרת מוקרי יאלי",
     "status": "פעיל עם תנועות כוחות"
    },
    {
     "name": "דונבאס",
     "status": "לחימה מתמשכת"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09242350-01",
     "title": "שימוש ברחפנים ורובוטים קרקעיים",
     "summary": "הקורפוס השלישי של צבא אוקראינה הפך ליחידה הראשונה המשתמשת בכלי רכב קרקעיים בלתי מאוישים לפינוי מוקשים ותמיכה במבצעי התקפה.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T23:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T23:30:00+00:00",
     "last_update_at": "2026-09-24T23:30:00+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_6c5a6b9e4ea8de0b",
       "url": "https://www.ukrinform.net/rubric-ato/4167492-third-army-corps-uses-ground-robots-for-mine-clearance-and-assault-support-in-operation-vivaldi.html",
       "published_at": "2026-09-24T23:30:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-02",
     "title": "סיוע כלכלי משוויץ",
     "summary": "שוויץ תספק מימון לאחסון תבואה זמני ולפיתוח המגזר האורגני.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T22:25:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T22:25:00+00:00",
     "last_update_at": "2026-09-24T22:25:00+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_c64b5e5dffa843df",
       "url": "https://www.ukrinform.net/rubric-economy/4167479-switzerland-to-provide-funding-for-ukrainian-grain-storage-support-organic-sector.html",
       "published_at": "2026-09-24T22:25:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-03",
     "title": "הקצאת כספים מארצות הברית להשבת ילדים",
     "summary": "ארצות הברית הקצתה 27 מיליון דולר למען השבת ושיקום ילדים אוקראינים.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T22:19:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T22:19:23+00:00",
     "last_update_at": "2026-09-24T22:19:23+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/us-allocates-27-million-for-the-return-of-ukrainian-children-kidnapped-by-russia/",
       "published_at": "2026-09-24T22:19:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-04",
     "title": "הצהרת צרפת על גיוס אפשרי ברוסיה",
     "summary": "נשיא צרפת עמנואל מקרון הצהיר כי ישנם סימנים לכך שרוסיה מתכוננת לגייס 300,000 חיילים נוספים.",
     "axis": "רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T21:24:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T21:24:44+00:00",
     "last_update_at": "2026-09-24T21:24:44+00:00",
     "what_is_not_verified": "האם רוסיה אכן תבצע גיוס בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_meduza",
       "url": "https://meduza.io/en/news/2026/09/25/macron-says-france-sees-signs-russia-is-preparing-to-mobilize-300-000-more-men",
       "published_at": "2026-09-24T21:24:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-05",
     "title": "סיוע כספי מנורווגיה",
     "summary": "נורווגיה מתכננת להקצות 9 מיליארד דולר לתמיכה באוקראינה בשנה הבאה.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T20:58:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T20:58:00+00:00",
     "last_update_at": "2026-09-24T20:58:00+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_6451e69c08f72583",
       "url": "https://www.ukrinform.net/rubric-economy/4167753-norway-to-allocate-9b-to-support-ukraine-in-2027.html",
       "published_at": "2026-09-24T20:58:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-06",
     "title": "תקיפת מרכז מסחרי בלוגנסק",
     "summary": "דווח כי כוחות אוקראיניים תקפו מרכז מסחרי בלוגנסק.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T20:48:22+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T20:48:22+00:00",
     "last_update_at": "2026-09-24T20:48:22+00:00",
     "what_is_not_verified": "פרטי התקיפה המלאים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/47978",
       "published_at": "2026-09-24T20:48:22+00:00"
      }
     ],
     "places": [
      {
       "name": "לוגנסק, אוקראינה",
       "lat": 48.5717,
       "lon": 39.2973
      }
     ]
    },
    {
     "id": "UKRAINE-09242350-07",
     "title": "עימותים בחזית",
     "summary": "נרשמו מאות עימותים חמושים לאורך קו החזית, כולל עשרות תקיפות בגזרת פוקרובסק.",
     "axis": "שני הצדדים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T20:20:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T20:20:00+00:00",
     "last_update_at": "2026-09-24T20:20:00+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_eb7ea1c50db104e3",
       "url": "https://www.ukrinform.net/rubric-ato/4167760-war-update-185-clashes-on-front-line-27-attacks-repelled-in-pokrovsk-sector.html",
       "published_at": "2026-09-24T20:20:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פוקרובסק, אוקראינה",
       "lat": 48.2771,
       "lon": 37.1772
      }
     ]
    },
    {
     "id": "UKRAINE-09242350-08",
     "title": "עסקת טילי פטריוט",
     "summary": "נשיא אוקראינה הודיע על השגת הסכם לקבלת חבילת טילי מיירט עבור מערכות הגנה אווירית מסוג פטריוט.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T17:29:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T17:29:00+00:00",
     "last_update_at": "2026-09-24T18:56:22+00:00",
     "what_is_not_verified": "זהות המדינה המספקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/ukraine-strikes-very-important-deal-on-new-batch-of-patriot-missiles-zelensky-says/",
       "published_at": "2026-09-24T18:56:22+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_kyiv_independent",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/24/8054938/",
       "published_at": "2026-09-24T17:29:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-09",
     "title": "שריפה בתחנת סטאלינק בפולין",
     "summary": "פרצה שריפה בתחנת סטארלינק בווולה קרובובסקה בפולין, ויש חשד כי מדובר בחבלה רוסית.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T18:13:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T18:13:43+00:00",
     "last_update_at": "2026-09-24T18:13:43+00:00",
     "what_is_not_verified": "האם מדובר בחבלה רוסית מכוונת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_src_kyivind",
       "url": "https://kyivindependent.com/polish-deputy-pm-says-starlink-station-fire-possibly-russian-sabotage/",
       "published_at": "2026-09-24T18:13:43+00:00"
      }
     ],
     "places": [
      {
       "name": "ווולה קרובובסקה, פולין",
       "lat": 51.8627,
       "lon": 20.9187
      }
     ]
    },
    {
     "id": "UKRAINE-09242350-10",
     "title": "יירוט רחפנים מעל אזורים ברוסיה",
     "summary": "כוחות ההגנה האווירית של רוסיה יירטו עשרות כטב\"מים אוקראיניים מעל אזורים רוסיים.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T17:54:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T17:54:43+00:00",
     "last_update_at": "2026-09-24T17:54:43+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_a46966531c30fd73",
       "url": "https://tass.com/politics/2192427",
       "published_at": "2026-09-24T17:54:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-11",
     "title": "תקיפות רוסיות על מרכזי נתונים בקייב",
     "summary": "תקיפה רוסית פגעה במרכזי נתונים וציוד מיתוג של ספקי אינטרנט בקייב, מה שגרם לשיבושים.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T16:47:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T16:47:00+00:00",
     "last_update_at": "2026-09-24T16:47:00+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_domonet_kievnet_faust",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/24/8054936/",
       "published_at": "2026-09-24T16:47:00+00:00"
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
     "id": "UKRAINE-09242350-12",
     "title": "נחיתת טיל קינז'ל בקייב",
     "summary": "טיל קינז'ל רוסי נחת במגרש חניה בקייב ולא התפוצץ.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T16:42:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T16:42:27+00:00",
     "last_update_at": "2026-09-24T16:42:27+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/47967",
       "published_at": "2026-09-24T16:42:27+00:00"
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
     "id": "UKRAINE-09242350-13",
     "title": "פגיעה במסופי לוגיסטיקה ואחסון",
     "summary": "הכוחות המזוינים של רוסיה פגעו במסופי לוגיסטיקה ואחסון המשמשים לתמיכה בצבא אוקראינה.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T15:48:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T15:48:03+00:00",
     "last_update_at": "2026-09-24T15:48:03+00:00",
     "what_is_not_verified": "לא מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_c660a8629db8ea2c",
       "url": "https://tass.com/defense/2192363",
       "published_at": "2026-09-24T15:48:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09242350-14",
     "title": "התקדמות אוקראינית בגזרת מוקרי יאלי",
     "summary": "דווח כי כוחות אוקראיניים התקדמו בגזרת מוקרי יאלי במחוז דונייצק והשתלטו על שטחים.",
     "axis": "אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T02:36:12+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T02:36:12+00:00",
     "last_update_at": "2026-09-24T02:36:12+00:00",
     "what_is_not_verified": "היקף השליטה המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_osint",
       "url": "https://t.me/alexmehacarmel/47953",
       "published_at": "2026-09-24T02:36:12+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על תוכניות רוסיות לשיגור רחפנים מאוניות אזרחיות בדרום אירופה",
    "דיווחים על התקדמות מוקחשת או חלקית בגזרת מוקרי יאלי",
    "טענות על גיוס עתידי של 300,000 חיילים ברוסיה"
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
     "value": 1.1367,
     "unit": "USD",
     "change_pct": -0.39,
     "source_id": "src_ecb",
     "as_of": "2026-09-24T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "החזרת ילדים חטופים",
      "חיזוק ההגנה האווירית באמצעות טילי פטריוט",
      "דחיית דרישות הוויתורים הטריטוריאליים של רוסיה"
     ],
     "inferred": [
      "פגיעה בתשתיות ובמאגרי אנרגיה רוסיים כדי לשבש את הלוגיסטיקה שלה",
      "שימור ותמיכה בכלכלה ובתשתיות המקומיות בסיוע בינלאומי"
     ],
     "forecast": [
      "המשך קבלת סיוע צבאי וכלכלי ממדינות המערב",
      "ניסיון לייצב את קווי החזית מול הלחץ הרוסי"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השלמת ההשתלטות על אזור דונבאס",
      "פגיעה בתשתיות התקשורת והלוגיסטיקה של אוקראינה"
     ],
     "inferred": [
      "הגברת הלחץ ההיברידי והצבאי על מדינות אירופה התומכות באוקראינה",
      "הכנה אפשרית להרחבת כוח האדם הצבאי"
     ],
     "forecast": [
      "המשך התקיפות על תשתיות קריטיות באוקראינה",
      "הגברת פעילות החיכוך סביב גבולות נאטו"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/polish-deputy-pm-says-starlink-station-fire-possibly-russian-sabotage/",
     "accessed_at": "2026-09-24T23:50:56+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/25/macron-says-france-sees-signs-russia-is-preparing-to-mobilize-300-000-more-men",
     "accessed_at": "2026-09-24T23:50:56+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/24/8054936/",
     "accessed_at": "2026-09-24T23:50:56+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2192363",
     "accessed_at": "2026-09-24T23:50:56+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47953",
     "accessed_at": "2026-09-24T23:50:56+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4167760-war-update-185-clashes-on-front-line-27-attacks-repelled-in-pokrovsk-sector.html",
     "accessed_at": "2026-09-24T23:50:56+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-24T05:17:11+00:00",
  "changes": {
   "UKRAINE-09242350-01": {
    "kind": "new"
   },
   "UKRAINE-09242350-02": {
    "kind": "new"
   },
   "UKRAINE-09242350-03": {
    "kind": "new"
   },
   "UKRAINE-09242350-04": {
    "kind": "new"
   },
   "UKRAINE-09242350-05": {
    "kind": "new"
   },
   "UKRAINE-09242350-06": {
    "kind": "new"
   },
   "UKRAINE-09242350-07": {
    "kind": "new"
   },
   "UKRAINE-09242350-08": {
    "kind": "new"
   },
   "UKRAINE-09242350-09": {
    "kind": "new"
   },
   "UKRAINE-09242350-10": {
    "kind": "new"
   },
   "UKRAINE-09242350-11": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הרשעת סוכן מודיעין בגין הכוונת תקיפות בקייב",
    "score": 0.817
   },
   "UKRAINE-09242350-12": {
    "kind": "possible",
    "prev": "מתקפת טילים ורחפנים נרחבת על קייב",
    "score": 0.633
   },
   "UKRAINE-09242350-13": {
    "kind": "new"
   },
   "UKRAINE-09242350-14": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דיווחים על התקדמות אוקראינית בדונייצק",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-24T2358__north-202609242358.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-24T23:58:01+00:00",
   "window": {
    "from": "2026-09-23T23:58:01+00:00",
    "to": "2026-09-24T23:58:01+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609242358"
   },
   "summary": "בגזרה הצפונית מתנהלים עימותים נקודתיים בדרום לבנון לצד צמצום מסוים בכוחות הקרקע של צה\"ל באזור. במקביל, ממשלת לבנון מנסה להרחיק את ארצה מהעימות האזורי ומנהלת דיפלומטיה בינלאומית מול איראן ופקקיסטן כדי להבטיח את ריבונותה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעיל עם צמצום כוחות ופעילות דיפלומטית למניעת הסלמה"
    },
    {
     "name": "החזית הסורית",
     "status": "מתיחות מדינית והצהרות הדדיות באו\"ם"
    }
   ],
   "events": [
    {
     "id": "NORTH-09242358-01",
     "title": "תקיפה אווירית בכפר צורבא",
     "summary": "חיל האוויר הישראלי תקף ר טנדר בכפר צורבא שבדרום לבנון",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T14:51:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T14:51:45+00:00",
     "last_update_at": "2026-09-24T14:51:45+00:00",
     "what_is_not_verified": "פרטים נוספים על נפגעים לא צוינו במקור הראשוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_b12b09ccabcb28c2",
       "url": "https://english.almanar.com.lb/article/130427/",
       "published_at": "2026-09-24T14:51:45+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר צורבא, לבנון",
       "lat": 33.3277,
       "lon": 35.6927
      }
     ]
    },
    {
     "id": "NORTH-09242358-02",
     "title": "טיסת מטוס קרב מעל צור",
     "summary": "מטוס קרב ישראלי תועד בשמי העיר צור שבדרום לבנון",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T16:31:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T16:31:24+00:00",
     "last_update_at": "2026-09-24T16:31:24+00:00",
     "what_is_not_verified": "לא דווח על פעולת תקיפה ספציפית של המטוס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130748",
       "published_at": "2026-09-24T16:31:24+00:00"
      }
     ],
     "places": [
      {
       "name": "צור, לבנון",
       "lat": 33.2721,
       "lon": 35.1964
      }
     ]
    },
    {
     "id": "NORTH-09242358-03",
     "title": "צמצום כוחות צה\"ל בדרום לבנון",
     "summary": "צבא ההגנה לישראל צמצם את מספר חטיבות הלחימה באזור הביטחון בדרום לבנון מ-8 ל-6 ושיחרר כוחות מילואים",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T14:04:59+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T14:04:59+00:00",
     "last_update_at": "2026-09-24T14:04:59+00:00",
     "what_is_not_verified": "היקף מדויק של כלל כוחות המילואים ששוחררו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/130417/",
       "published_at": "2026-09-24T14:04:59+00:00"
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
     "id": "NORTH-09242358-04",
     "title": "פגישת ראשי ממשלת לבנון ונשיא איראן באו\"ם",
     "summary": "ראש ממשלת לבנון נג'יב מיקאתי נועד עם נשיא איראן במסגרת עצרת האו\"ם והדגיש כי לבנון אינה זירה למלחמות אזוריות",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T12:49:09+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T12:49:09+00:00",
     "last_update_at": "2026-09-24T18:32:08+00:00",
     "what_is_not_verified": "לא צוינו פרטים מלאים על ההסכמות שהושגו בפגישה מעבר להצהרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-pm-tells-iran-president-country-cannot-be-arena-regional-wars",
       "published_at": "2026-09-24T18:32:08+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/959564/lebanese-pm-salam-calls-tehran-to-nominate-new-ambassador-to-lebanon-w/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959564",
       "published_at": "2026-09-24T13:16:16+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/959555/lebanese-pm-nawaf-salam-meets-iranian-president-masoud-pezeshkian-in-n/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959555",
       "published_at": "2026-09-24T12:49:09+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק סיטי, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על היקף שיתוף הפעולה המדויק בין קצינים בשיעה בצבא לבנון לבין חיזבאללה",
    "ההערכות המלאות לגבי השלכות צמצום הכוחות בלבנון על מוכנות צה\"ל"
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
     "value": 3.0482,
     "unit": "ILS",
     "change_pct": 1.06,
     "source_id": "src_ecb",
     "as_of": "2026-09-24T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת איומים מצד חיזבאללה וגורמים אזוריים",
      "עמידה על זכותה של ישראל בגולן ובגבול הצפון"
     ],
     "inferred": [
      "הקלה על עומס המילואים באמצעות התאמת פריסת הכוחות בדרום לבנון"
     ],
     "forecast": [
      "המשך פעילות צבאית נקודתיות בהתאם לצורך המבצעי",
      "שמירה על נוכחות ברצועת הביטחון בדרום לבנון"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "מניעת הפיכת לבנון לזירה של עימותים אזוריים או שליחת מסרים",
      "דרישה לנסיגה מלאה של ישראל משטח לבנון"
     ],
     "inferred": [
      "ניסיון להפחית את ההשפעה האיראנית הישירה על קבלת ההחלטות במדינה"
     ],
     "forecast": [
      "חיזוק סמכות המדינה והצבא בכלל השטחים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/130417/",
     "accessed_at": "2026-09-24T23:58:01+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/959555/lebanese-pm-nawaf-salam-meets-iranian-president-masoud-pezeshkian-in-n/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959555",
     "accessed_at": "2026-09-24T23:58:01+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanon-pm-tells-iran-president-country-cannot-be-arena-regional-wars",
     "accessed_at": "2026-09-24T23:58:01+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130748",
     "accessed_at": "2026-09-24T23:58:01+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-23T23:42:30+00:00",
  "changes": {
   "NORTH-09242358-01": {
    "kind": "new"
   },
   "NORTH-09242358-02": {
    "kind": "new"
   },
   "NORTH-09242358-03": {
    "kind": "possible",
    "prev": "תקיפות אוויריות וארטילריות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-09242358-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "נאום נשיא סוריה באו\"ם והתייחסות לרמת הגולן ולבסיסים זרים",
    "score": 0.817
   }
  }
 }
};
