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
  "draft": "drafts/iran/2026-09-23T2340__iran-202609232340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-23T23:40:31+00:00",
   "window": {
    "from": "2026-09-22T23:40:31+00:00",
    "to": "2026-09-23T23:40:31+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609232340"
   },
   "summary": "העימות בין איראן לבין ישראל וארה\"ב נמשך במקביל למגעים דיפלומטיים וחילופי איומים באו\"ם. בעוד ארה\"ב וישראל שומרות על לחץ צבאי וכלכלי ומפעילות סנקציות, איראן מאיימת על חופש השיוט במצר הורמוז ומסרבת להיכנע לדרישות המערב, תוך כדי מחלוקות פנימיות בטהרן על עצם קיום המגעים.",
   "fronts": [
    {
     "name": "הזירה הישראלית-איראנית",
     "status": "פעיל"
    },
    {
     "name": "הזירה האמריקנית-איראנית",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-09232340-01",
     "title": "נאום נשיא איראן בעצרת האו\"ם",
     "summary": "נשיא איראן מסעוד פזשכיאן נאם בעצרת הכללית של האו\"ם, תקף את ארצות הברית וישראל והציג תמונות של אזרחים שנהרגו בתקיפות, בעוד הדיפלומטים האמריקנים עזבו את האולם.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:24:39+00:00",
     "last_update_at": "2026-09-23T20:40:51+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_afp",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-general-assembly-2026-arab-and-muslim-leaders-denounce-militarism",
       "published_at": "2026-09-23T20:40:51+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_afp",
       "url": "https://www.france24.com/en/iran-s-pezeshkian-tells-un-his-country-is-victim-of-us-terrorism",
       "published_at": "2026-09-23T14:57:47+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_afp",
       "url": "https://t.me/abualiexpress/130677",
       "published_at": "2026-09-23T14:24:39+00:00"
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
     "id": "IRAN-09232340-02",
     "title": "מגעים דיפלומטיים עקיפים בין איראן לארה\"ב בניו יורק",
     "summary": "נציגים אמריקנים ושר החוץ האיראני קיימו פגישה בת שלושה שעות בניו יורק בתיווך קטאר.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T10:41:41+00:00",
     "last_update_at": "2026-09-23T10:41:41+00:00",
     "what_is_not_verified": "האם איראן חזרה בה מתנאים מוקדמים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_united_nations",
       "url": "https://www.theguardian.com/world/2026/sep/23/iran-denies-dropping-preconditions-very-productive-three-hour-un-talks-new-york",
       "published_at": "2026-09-23T10:41:41+00:00"
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
     "id": "IRAN-09232340-03",
     "title": "הטלת סנקציות חדשות מצד קנדה",
     "summary": "קנדה הודיעה על הטלת סנקציות נגד עשרה אישים וגופים איראניים המעורבים בדיכוי דיגיטלי ובהפרת זכויות אדם.",
     "axis": "איראן מול המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T22:36:46+00:00",
     "last_update_at": "2026-09-23T22:36:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_f332493177c3d172",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/canada-sanctions-ten-iranian-individuals-and-entities",
       "published_at": "2026-09-23T22:36:46+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09232340-04",
     "title": "פגישת שרי החוץ של איראן ודרום קוריאה",
     "summary": "שר החוץ של איראן עבאס עראקצ'י נפגש עם מקבילו מדרום קוריאה בניו יורק.",
     "axis": "איראן מול המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T20:49:48+00:00",
     "last_update_at": "2026-09-23T20:49:48+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_9d19be97a5a03c1d",
       "url": "https://en.irna.ir/news/86272995/Iranian-and-South-Korean-foreign-ministers-meet-in-New-York",
       "published_at": "2026-09-23T20:49:48+00:00"
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
    "{'item': 0, 'text': 'דיווחים לפיהם גופים סיניים סיפקו לאיראן צילומי לווין ברזולוציה גבוהה של בסיס בירדן לפני מתקפת טילים.'}",
    "{'item': 4, 'text': \"טענת מזכיר המדינה האמריקני שמיליציות שיעיות בעיראק תקפו את סעודיה לצד החות'ים.\"}"
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
     "value": 3.0161,
     "unit": "ILS",
     "change_pct": -0.06,
     "source_id": "src_ecb",
     "as_of": "2026-09-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "אי כניעה ללחץ אמריקני",
      "דרישה לפתיחת מצר הורמוז בהתאם לתנאים איראניים"
     ],
     "inferred": [
      "שמירת היכולת האזורית באמצעות שלוחותיה",
      "ניסיון לפצל את החזית הדיפלומטית נגדה"
     ],
     "forecast": [
      "המשך המתיחות סביב נתיבי השיט",
      "המשך העימות המילולי והדיפלומטי באו\"ם"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "מניעת נשק גרעיני מאיראן",
      "תמיכה בבני בריתה במפרץ מול תקיפות"
     ],
     "inferred": [
      "הפעלת לחץ מקסימלי הכולל סנקציות ובידוד כלכלי",
      "דרישה לפירוק המיליציות האיראניות בעיראק"
     ],
     "forecast": [
      "הגברת הלחץ הדיפלומטי והכלכלי על גופים המסייעים לאיראן",
      "שמירת האופציה הצבאית פתוחה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "פגיה ביכולות הזרועות האיראניות באזור",
      "בלימת איום הגרעין האיראני"
     ],
     "inferred": [
      "הכנה למערכה רב-זירתית רחבה מול איראן ושלוחותיה",
      "הידוק שיתוף הפעולה האסטרטגי עם ארה\"ב"
     ],
     "forecast": [
      "המשך הפעילות המודיעינית והמבצעית נגד ציר הפרוקסי",
      "התראה בינלאומית מפני התבססות איראנית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/iran-s-pezeshkian-tells-un-his-country-is-victim-of-us-terrorism",
     "accessed_at": "2026-09-23T23:40:31+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/23/iran-denies-dropping-preconditions-very-productive-three-hour-un-talks-new-york",
     "accessed_at": "2026-09-23T23:40:31+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86272995/Iranian-and-South-Korean-foreign-ministers-meet-in-New-York",
     "accessed_at": "2026-09-23T23:40:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/canada-sanctions-ten-iranian-individuals-and-entities",
     "accessed_at": "2026-09-23T23:40:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130677",
     "accessed_at": "2026-09-23T23:40:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-22T23:40:34+00:00",
  "changes": {
   "IRAN-09232340-01": {
    "kind": "possible",
    "prev": "איומי שגריר ישראל באו\"ם נגד מנהיגי איראן",
    "score": 0.467
   },
   "IRAN-09232340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגישה בין נציגי איראן וארה\"ב בניו יורק",
    "score": 1.0
   },
   "IRAN-09232340-03": {
    "kind": "new"
   },
   "IRAN-09232340-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פגישת שר החוץ האיראני עם מקביליו מאזרבייג'ן ואוסטריה",
    "score": 0.817
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-24T0517__ukraine-202609240517.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-24T05:17:11+00:00",
   "window": {
    "from": "2026-09-23T05:17:11+00:00",
    "to": "2026-09-24T05:17:11+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609240517"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתר שאת, כאשר רוסיה מבצעת מתקפות טילים כבדות וקטלניות מהאוויר לעבר קייב ואודסה, בעוד אוקראינה ממשיכה בפעילות רחפנים ובלחימה קרקעית במחוז דונייצק. בזירה הדיפלומטית, נשיא אוקראינה זלנסקי דורש באו\"ם הגברת סנקציות ולחץ כלכלי על מוסקבה, ומנגד רוסיה מבהירה כי לא תסכים להפסקת אש במהלך משא ומתן.",
   "fronts": [
    {
     "name": "חזית קייב ומערך ההגנה האווירית",
     "status": "פעיל ותחת תקיפות טילים כבדות"
    },
    {
     "name": "חזית דונייצק ומוקרי יאלי",
     "status": "פעיל עם דיווחים על התקדמות אוקראינית"
    },
    {
     "name": "חזית הדרום ואודסה",
     "status": "פעיל תחת מתקפות מהאוויר"
    },
    {
     "name": "הזירה האווירית ומרחב הרחפנים ארוכי הטווח",
     "status": "פעיל מאוד משני הצדדים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09240517-01",
     "title": "מתקפת טילים ורחפנים נרחבת על קייב",
     "summary": "מתקפת טילים ורחפנים פגעה במספר מחוזות בקייב, גרמה להרוגים ופצועים, שריפות והרס מבנים ותשתיות.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T22:28:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T22:28:54+00:00",
     "last_update_at": "2026-09-24T04:59:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק והיקף הנזק המלא אינם מאומתים במלואם בכל המקורות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_88b41b7d8e0c31fb",
       "url": "https://www.ukrinform.net/rubric-ato/4167407-massive-missile-attack-on-kyiv-2-killed-at-least-8-injured-fires-and-damage-reported-in-three-districts.html",
       "published_at": "2026-09-24T04:59:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_88b41b7d8e0c31fb",
       "url": "https://www.ukrinform.net/rubric-ato/4167405-russians-strike-kyiv-with-ballistic-missiles-us-has-ability-to-respond-strongly-zelensky.html",
       "published_at": "2026-09-24T04:39:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_57c382e50f381285",
       "url": "https://www.ukrinform.net/rubric-ato/4167404-kyiv-hit-by-massive-russian-missile-strike-two-killed-at-least-six-injured.html",
       "published_at": "2026-09-24T04:16:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_88b41b7d8e0c31fb",
       "url": "https://www.theguardian.com/world/2026/sep/24/ukraine-war-briefing-kyiv-attacked-zelenskyy-urges-united-nations-choke-russia-revenues",
       "published_at": "2026-09-24T00:45:05+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_9bf2c14305dd19e6",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/24/8054830/",
       "published_at": "2026-09-23T23:10:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_eb00b7c0b32ad8c0",
       "url": "https://kyivindependent.com/russian-ballistic-missiles-rock-kyiv-as-air-defenses-engaged/",
       "published_at": "2026-09-23T22:28:54+00:00"
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
     "id": "UKRAINE-09240517-02",
     "title": "תקיפת כוחות רוסיים באודסה",
     "summary": "כוחות רוסיים תקפו את העיר אודסה וגרמו לנזק למתקני רפואה, חינוך ומבני מגורים.",
     "axis": "תקיפות והגנה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T23:40:00+00:00",
     "last_update_at": "2026-09-23T23:40:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים טרם פורטו במלואם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b404879e8802c6b3",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/24/8054831/",
       "published_at": "2026-09-23T23:40:00+00:00"
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
     "id": "UKRAINE-09240517-03",
     "title": "גיוס חסיד ברסלב באוקראינה",
     "summary": "אזרח ישראלי חסיד ברסלב נעצר באוקראינה לאחר שניסה לשוב לישראל מאומן, והוצב כרופא בחרקוב בשל חובת גיוס.",
     "axis": "עורף וגיוס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T02:54:05+00:00",
     "last_update_at": "2026-09-24T02:54:05+00:00",
     "what_is_not_verified": "לא מאומתות אפשרויות השילוב העתידיות ברבנות הצבאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_2b2ed8f24b9e6f39",
       "url": "https://www.ynet.co.il/news/article/skk1mh119me",
       "published_at": "2026-09-24T02:54:05+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "אומן, אוקראינה",
       "lat": 48.7498,
       "lon": 30.2203
      }
     ]
    },
    {
     "id": "UKRAINE-09240517-04",
     "title": "דיווחים על התקדמות אוקראינית בדונייצק",
     "summary": "התקיימו דיווחים על התקדמות כוחות אוקראיניים בגזרת מוקרי יאלי, לרבות השתלטות על הכפר מירנה וחציית הנהר.",
     "axis": "חזית הקרקע",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-24T02:36:12+00:00",
     "last_update_at": "2026-09-24T02:36:12+00:00",
     "what_is_not_verified": "הדיווחים מבוססים על מקורות OSINT ולאומתו רשמית באופן מלא ממקור ראשון",
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
    },
    {
     "id": "UKRAINE-09240517-05",
     "title": "הרשעת סוכן מודיעין בגין הכוונת תקיפות בקייב",
     "summary": "תושב קייב שהעביר מיקומים לכוחות הביטחון הבלארוסיים והכוון תקיפות רוסיות על מתקני אנרגיה נידון ל-15 שנות מאסר.",
     "axis": "עורף וביטחון פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-24T03:59:00+00:00",
     "last_update_at": "2026-09-24T03:59:00+00:00",
     "what_is_not_verified": "לא ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_31a185082800d7e4",
       "url": "https://www.ukrinform.net/rubric-ato/4167402-agent-of-russian-and-belarusian-intelligence-services-who-adjusted-strikes-on-energy-facilities-in-kyiv-sentenced-to-15-years-in-prison.html",
       "published_at": "2026-09-24T03:59:00+00:00"
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
    "טענות על היקף ההתקדמות המדויק של כוחות אוקראינה בגזרת מוקרי יאלי המבוססות על מקורות OSINT",
    "תוצאות מדויקות ונתוני נפגעים מלאים מתקיפות הטילים על קייב ואודסה",
    "מספר הלחימה והאבדות המדויק בצדדים כפי שצוין בנאומים שונים באו\"ם"
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
     "actor": "אוקראינה",
     "declared": [
      "עצירת התוקפנות הרוסית ושחרור כל השטחים",
      "הגברת סנקציות בינלאומיות וחסימת הכנסות האנרגיה של רוסיה",
      "הבטחת חופש השייט וייצוא הדגנים בים השחור"
     ],
     "inferred": [
      "שאיפה לקבלת מערכות הגנה מתקדמות ומיירטים להגנת האוכלוסייה",
      "שמירה על לגיטימציה בינלאומית ותמיכה צבאית וכלכלית רצופה"
     ],
     "forecast": [
      "המשך מאמצי התקיפה בעומק השטח הרוסי באמצעות רחפנים",
      "דרישה בלתי מתפשרת להפסקת אש מלאה כתנאי לדיפלומטיה משמעותית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך מה שמכונה המבצע המיוחד ללא עצירות או הפוגות",
      "כיבוש שטחים נוספים במחוז דונייצק"
     ],
     "inferred": [
      "שחיקת התשתיות האזרחיות והאנרגטיות של אוקראינה לקראת חורף קשה",
      "ניסיון למנוע שיקום מלאי החימוש של אוקראינה"
     ],
     "forecast": [
      "המשך מתקפות טילים ורחפנים נרחבות על מוקדי שלטון ותשתיות",
      "דחיית כל מתווה הפסקת אש שלא משרת את מטרותיה הצבאיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/24/ukraine-war-briefing-kyiv-attacked-zelenskyy-urges-united-nations-choke-russia-revenues",
     "accessed_at": "2026-09-24T05:17:11+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-ballistic-missiles-rock-kyiv-as-air-defenses-engaged/",
     "accessed_at": "2026-09-24T05:17:11+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/24/8054831/",
     "accessed_at": "2026-09-24T05:17:11+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47953",
     "accessed_at": "2026-09-24T05:17:11+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4167402-agent-of-russian-and-belarusian-intelligence-services-who-adjusted-strikes-on-energy-facilities-in-kyiv-sentenced-to-15-years-in-prison.html",
     "accessed_at": "2026-09-24T05:17:11+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skk1mh119me",
     "accessed_at": "2026-09-24T05:17:11+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-23T15:27:54+00:00",
  "changes": {
   "UKRAINE-09240517-01": {
    "kind": "new"
   },
   "UKRAINE-09240517-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת כוחות רוסיים באמצעות משגרי אורגן בקרמטורסק",
    "score": 0.65
   },
   "UKRAINE-09240517-03": {
    "kind": "new"
   },
   "UKRAINE-09240517-04": {
    "kind": "new"
   },
   "UKRAINE-09240517-05": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "תקיפות כטב\"מים ופגיעות בתשתיות בקייב",
    "score": 0.817
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-23T2342__north-202609232342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-23T23:42:30+00:00",
   "window": {
    "from": "2026-09-22T23:42:30+00:00",
    "to": "2026-09-23T23:42:30+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609232342"
   },
   "summary": "בזירה הצפונית מתנהלות חילופי הלם ואש בין ישראל לבין חיזבאללה בדרום לבנון לצד הפרות הפסקת אש, כאשר במקביל מתנהלת לוחמה מדינית והצהרתית מול סוריה סביב מעמד רמת הגולן והנוכחות הזרה במדינה. ישראל נערכת למספר תרחישי הסלמה אזוריים רחבים הכוללים את הגזרה הצפונית והלבנונית, בעוד סוריה פועלת לשיקום דיפלומטי בינלאומי ולחיזוק הריבונות.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה עם תקיפות והפרות הפסקת אש"
    },
    {
     "name": "החזית הסורית",
     "status": "מתיחות מדינית והצהרתית סביב רמת הגולן"
    }
   ],
   "events": [
    {
     "id": "NORTH-09232342-01",
     "title": "תקיפות אוויריות וארטילריות בדרום לבנון",
     "summary": "כוחות צבא ישראל ביצעו תקיפות אוויריות וירי ארטילרי במספר מרחבים בדרום לבנון.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-23T14:54:35+00:00",
     "last_update_at": "2026-09-23T21:26:53+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינם מפורטים במלואם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strikes-target-southern-lebanon-3",
       "published_at": "2026-09-23T21:26:53+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/130267/",
       "published_at": "2026-09-23T19:18:57+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/130217/",
       "published_at": "2026-09-23T16:16:38+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130679",
       "published_at": "2026-09-23T14:54:35+00:00"
      }
     ],
     "places": [
      {
       "name": "אלקנטרה, לבנון",
       "lat": 33.2735,
       "lon": 35.4591
      },
      {
       "name": "אל-ח'יאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      }
     ]
    },
    {
     "id": "NORTH-09232342-02",
     "title": "נאום נשיא סוריה באו\"ם והתייחסות לרמת הגולן ולבסיסים זרים",
     "summary": "נשיא סוריה הצהיר בעצרת הכללית של האו\"ם כי רמת הגולן תישאר סורית, גינה את התקיפות הישראליות, וציין כי בסיסים זרים במדינה צומצמו לשניים והוסבו למרכזי אימונים.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T13:07:56+00:00",
     "last_update_at": "2026-09-23T20:26:04+00:00",
     "what_is_not_verified": "התכנים והמספרים שנמסרו לגבי הבסיסים לא אומתו ממקור חיצוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_24c5373d741272fa",
       "url": "https://english.enabbaladi.net/archives/2026/09/al-sharaa-highlights-recovery-golan-in-un-address/",
       "published_at": "2026-09-23T20:26:04+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_24c5373d741272fa",
       "url": "https://www.france24.com/en/middle-east/20260923-golan-heights-will-remain-syrian-president-al-sharaa-vows-to-un",
       "published_at": "2026-09-23T13:31:32+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_24c5373d741272fa",
       "url": "https://t.me/alexmehacarmel/47936",
       "published_at": "2026-09-23T13:07:56+00:00"
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
     "id": "NORTH-09232342-03",
     "title": "תגובת שר הביטחון הישראלי על רמת הגולן",
     "summary": "שר הביטחון של ישראל הצהיר שרמת הגולן תישאר תחת ריבונות ישראלית לנצח בתגובה לדברי נשיא סוריה.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-23T14:49:22+00:00",
     "last_update_at": "2026-09-23T14:49:22+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_5d90df03873a9690",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/959403/golan-part-of-israel-forever-says-israeli-defence-minister/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959403",
       "published_at": "2026-09-23T14:49:22+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות סוריה על צמצום הבסיסים הזרים לשניים והסבתם למרכזי אימונים בלבד",
    "היקף התשתיות שהושמדו במרחבי האבטחה בסוריה"
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
     "value": 3.0161,
     "unit": "ILS",
     "change_pct": -0.06,
     "source_id": "src_ecb",
     "as_of": "2026-09-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "שמירת ריבונות ישראל ברמת הגולן לנצח",
      "הכנה למספר תרחישי הסלמה רחבים בגזרה הצפונית ומולה"
     ],
     "inferred": [
      "בלימת התבססות עוינת בגבול הצפון ולבנון",
      "שמירת חופש פעולה מבצעי בסוריה ובלבנון"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות בדרום לבנון",
      "עלייה ברמת הכוננות לקראת עימות אזורי רחב"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "השבת הריבונות המלאה והבטחת אי הימצאות בסיסים זרים עוינים",
      "עמידה על כך שרמת הגולן היא שטח סורי"
     ],
     "inferred": [
      "יציאה מבידוד מדיני באמצעות פנייה לגורמים בינלאומיים",
      "שיקום פנימי של המדינה ותשתיותיה"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים לחיזוק הלגיטימציה הבינלאומית של השלטון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/130217/",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/al-sharaa-highlights-recovery-golan-in-un-address/",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260923-golan-heights-will-remain-syrian-president-al-sharaa-vows-to-un",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/959403/golan-part-of-israel-forever-says-israeli-defence-minister/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-959403",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strikes-target-southern-lebanon-3",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130679",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47936",
     "accessed_at": "2026-09-23T23:42:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-22T23:46:03+00:00",
  "changes": {
   "NORTH-09232342-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות ארטילריות וחדירת כוחות ישראליים לדרום סוריה",
    "score": 0.65
   },
   "NORTH-09232342-02": {
    "kind": "new"
   },
   "NORTH-09232342-03": {
    "kind": "new"
   }
  }
 }
};
