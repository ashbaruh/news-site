/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-12T1859__yemen-202611121859.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-12T18:59:42+00:00",
   "window": {
    "from": "2026-11-11T18:59:42+00:00",
    "to": "2026-11-12T18:59:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611121859"
   },
   "summary": "הזירה בתימן כוללת המשך עימותים קרקעיים מול החות'ים לצד תקיפות בלתי פוסקות מצידם לעבר תשתיות נפט וערים בסעודיה. במקביל, סעודיה פועלת בזירה הדיפלומטית הבינלאומית להגדרת החות'ים כארגון טרור, בעוד הקואליציה ממשיכה ביירוט איומים אוויריים.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית",
     "status": "פעיל עם עימותים צבאיים וקרבות קרקעיים"
    },
    {
     "name": "החזית הסעודית-חות'ית",
     "status": "פעיל עם שיגורי טילים וכטב\"מים מתמשכים ויירוטים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11121859-01",
     "title": "תקיפת מתקני נפט בסעודיה על ידי החות'ים",
     "summary": "החות'ים טענו שתקפו את צינור הנפט המזרחי-מערבי ומתקן נפט בינבוע, ואילו הקואליציה בראשות סעודיה דיווחה על יירוט טילים וכטב\"מים לעבר יעדים במדינה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T17:35:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T17:35:54+00:00",
     "last_update_at": "2026-11-12T18:14:10+00:00",
     "what_is_not_verified": "האם התקיפות בפועל פגעו במתקני הנפט בסעודיה והאמת לגבי יעדי הטילים המוצהרים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-says-no-need-iran-deal-four-tankers-hit-hormuz",
       "published_at": "2026-11-12T18:14:10+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-attacked-pumping-station-saudi-arabias-east-west",
       "published_at": "2026-11-12T17:33:04+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-deny-targeting-mecca-amid-saudi-missile-interceptions",
       "published_at": "2026-11-12T13:06:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-downplays-iran-deal-prospects-israel-kills-10-gaza",
       "published_at": "2026-11-12T07:22:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/ghalibaf-says-iran-seeks-deal-after-rubio-downplays-war",
       "published_at": "2026-11-11T17:35:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11121859-02",
     "title": "לחימה ועימותים באזור מאריב ותעז",
     "summary": "התקיימו עימותים וקרבות שונים שכללו פעילות צבאית באזור מאריב וכן פגזים ופעולות באזור תעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T15:09:01+00:00",
     "last_update_at": "2026-11-12T15:55:10+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155701",
       "published_at": "2026-11-12T15:55:10+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49527",
       "published_at": "2026-11-12T15:38:44+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155696",
       "published_at": "2026-11-12T15:09:01+00:00"
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
     "id": "YEMEN-11121859-03",
     "title": "לחץ דיפלומטי סעודי לסיווג החות'ים כארגון טרור",
     "summary": "סעודיה מפעילה לחץ על האיחוד האירופי להגדיר את תנועת החות'ים כארגון טרור, סוגיה שמעוררת חשש פאן-אירופי לגבי תהליך השלום העתידי.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T16:47:36+00:00",
     "last_update_at": "2026-11-12T16:47:36+00:00",
     "what_is_not_verified": "האם האיחוד האירופי ייענה לבקשת סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-puts-pressure-eu-label-yemens-houthis-terrorist-group",
       "published_at": "2026-11-12T16:47:36+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענות ההדדיות על פגיעה במתקני אנרגיה סעודיים כמו מתקן ינבוע או צינור הנפט",
    "האם החות'ים כוונו לאזור מכה או שברי טילים שנפלו שם הגיעו מיירוטים",
    "נתוני הנפגעים והתוצאות המדויקות של העימותים בתעז ובמאריב"
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
     "value": 3.2032,
     "unit": "ILS",
     "change_pct": 1.0,
     "source_id": "src_ecb",
     "as_of": "2026-11-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת תשתיות הנפט והמתקנים הצבאיים של סעודיה"
     ],
     "inferred": [
      "שיבוש הכלכלה וייצוא הנפט של סעודיה",
      "הפעלת לחץ אזורי באמצעות פגיעה בעומק סעודיה"
     ],
     "forecast": [
      "המשך שיגור איומים אוויריים לעבר סעודיה",
      "שמירה על נוכחות צבאית אקטיבית בחזיתות הפנימיות בתימן"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטחי הממלכה ויירוט איומים אוויריים",
      "דחיפה בינלאומית להגדרת החות'ים כארגון טרור"
     ],
     "inferred": [
      "בלימת הפעילות הצבאית של החות'ים והגנה על מתקני האנרגיה החיוניים"
     ],
     "forecast": [
      "המשך התקיפות האוויריות נגד מעוזי החות'ים",
      "הגברת המאמצים הדיפלומטיים לבידוד החות'ים בזירה העולמית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-puts-pressure-eu-label-yemens-houthis-terrorist-group",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-attacked-pumping-station-saudi-arabias-east-west",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/ghalibaf-says-iran-seeks-deal-after-rubio-downplays-war",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155696",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49527",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:50:52+00:00",
  "changes": {
   "YEMEN-11121859-01": {
    "kind": "possible",
    "prev": "שיגור טילי שיוט, טילים בליסטיים וכטב\"מים לעבר סעודיה ויירוטם",
    "score": 0.633
   },
   "YEMEN-11121859-02": {
    "kind": "possible",
    "prev": "דיון בהסלמה הצבאית ובמצור על תעז",
    "score": 0.633
   },
   "YEMEN-11121859-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דרישה תימנית להגדרת החות'ים כארגון טרור בליגה הערבית",
    "score": 0.65
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-13T1800__iran-202611131800.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-13T18:00:28+00:00",
   "window": {
    "from": "2026-11-12T18:00:28+00:00",
    "to": "2026-11-13T18:00:28+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611131800"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתנהל במקביל ללחצים דיפלומטיים, כאשר וושינגטון שוקלת להגביר את הסנקציות ודוחה הסכמים חדשים, בעוד טהרן ממשיכה בפעולות צבאיות ישירות ועקיפות, כולל שיגור כטב\"מים ופעילות סייבר התקפית. במקביל, מדינות המפרץ חוששות מהסלמה אזורית רחבה ופועלות לעקוף נתיבי שיוט מאוימים.",
   "fronts": [
    {
     "name": "החזית הישירה איראן-ארה\"ב במפרץ",
     "status": "פעיל עם חילופי מהלומות ויירוטים"
    },
    {
     "name": "חזית הסייבר והמודיעין באירופה",
     "status": "פעיל הכולל סיכול ריגול ותקיפות סייבר"
    },
    {
     "name": "חזית הכלכלה והאנרגיה במפרץ",
     "status": "מתיחות סביב נתיבי שיט ותשתיות נפט"
    }
   ],
   "events": [
    {
     "id": "IRAN-11131800-01",
     "title": "תקיפת כטב\"מים איראניים לעבר בחריין וירוטם",
     "summary": "משמרות המהפכה שיגרו שני כטב\"מים לעבר בחריין, והם יורטו על ידי כוחות ארצות הברית.",
     "axis": "איראן מול ארה\"ב ובחריין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T13:41:22+00:00",
     "last_update_at": "2026-11-13T14:23:23+00:00",
     "what_is_not_verified": "טענת משמרות המהפכה כי פגעו במערכת מכ\"ם אמריקאית בבחריין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c749a0bc305879d3",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-says-it-shot-down-two-iranian-drones-heading-towards-bahrain",
       "published_at": "2026-11-13T14:23:23+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_c749a0bc305879d3",
       "url": "https://www.theguardian.com/world/2026/nov/13/iran-us-radar-bahrain-sirik-hormuz",
       "published_at": "2026-11-13T13:52:11+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_c749a0bc305879d3",
       "url": "https://www.al-monitor.com/originals/2026/11/irans-irgc-claims-attack-us-target-bahrain-what-know",
       "published_at": "2026-11-13T13:41:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11131800-02",
     "title": "הרשעת מרגלים בשירות איראן בבריטניה",
     "summary": "שתי דמויות הורשעו בבריטניה בסיוע למודיעין האיראני במעקב אחר עיתונאים מתנגדי משטר.",
     "axis": "איראן מול אופוזיציה ומדינות המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T19:15:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T19:15:30+00:00",
     "last_update_at": "2026-11-13T14:28:45+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_71eb818622337e6e",
       "url": "https://www.iranintl.com/en/202611135399",
       "published_at": "2026-11-13T14:28:45+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_2a0679db36c4cf3b",
       "url": "https://www.ynet.co.il/news/article/symsxw4cfx",
       "published_at": "2026-11-13T11:11:11+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_71eb818622337e6e",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21843838",
       "published_at": "2026-11-13T06:03:13+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_33af20556b73ff89",
       "url": "https://www.theguardian.com/uk-news/2026/nov/12/two-men-found-guilty-over-iranian-attempts-to-eliminate-uk-based-journalists",
       "published_at": "2026-11-12T19:15:30+00:00"
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
     "id": "IRAN-11131800-03",
     "title": "מתקפת סייבר איראנית על תשתיות קירור בצרפת",
     "summary": "צרפת האשימה רשמית יחידה של משמרות המהפכה באחריות למתקפת סייבר שפעה במפעלים ומרכולים.",
     "axis": "איראן מול אירופה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T15:48:55+00:00",
     "last_update_at": "2026-11-13T15:48:55+00:00",
     "what_is_not_verified": "הקשר המדויק בין קבוצת ההאקרים לחזיתות שונות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_0f10a21ecbc735d1",
       "url": "https://www.fdd.org/analysis/france-is-latest-victim-of-iranian-cyber-sabotage-first-unleashed-on-israel/",
       "published_at": "2026-11-13T15:48:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11131800-04",
     "title": "פיצוץ בכלי שיט במצר הורמוז",
     "summary": "דווח על פיצוץ בכלי שיט שהוביל גז במצר הורמוז לפי טענות משמרות המהפכה.",
     "axis": "איראן מול מעבר ימי במפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T06:49:26+00:00",
     "last_update_at": "2026-11-13T06:49:26+00:00",
     "what_is_not_verified": "נסיבות הפיצוץ המדויקות ומצב כלי השיט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21844062",
       "published_at": "2026-11-13T06:49:26+00:00"
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
    "טענת איראן על פגיעה במערכת מכ\"ם אמריקאית בבחריין",
    "היקף השיקום המדויק של יכולות הטילים הבליסטיים של איראן",
    "תוכניותיהם המבצעיות העתידיות של הממשל האמריקאי וישראל"
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "להגיב לתקיפות אמריקאיות ולפגוע באינטרסים שלהן",
      "להפגין עוצמה צבאית ויכולת הסבת נזק"
     ],
     "inferred": [
      "לערער את הביטחון של מדינות המפרץ המארחות כוחות זרים",
      "להמשיך בפיתוח יכולות צבאיות וגרעיניות בסתר"
     ],
     "forecast": [
      "המשך פעילות חבלנית באמצעות שלוחות וסייבר",
      "שימור מתח נמוך עד בינוני במצר הורמוז"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "להפעיל לחץ כלכלי ודיפלומטי מוגבר על משטר האייתוללות",
      "לבלום תקיפות ואיומים נגד בנות בריתה במפרץ"
     ],
     "inferred": [
      "למנוע הידרדרות למלחמה כוללת רחבה שתפגע בכלכלה",
      "להגביל את השפעת המיליציות הנתמכות בידי איראן בעיראק"
     ],
     "forecast": [
      "הגברת הסנקציות והימנעות מהסכם מהיר",
      "שמירה על נוכחות צבאית הגנתית במפרץ"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "לבלום את התעצמותה של איראן ומניעת נשק גרעיני",
      "התגוננות מפני איומים אזוריים"
     ],
     "inferred": [
      "שכנוע הממשל האמריקאי לשוב למערכה רחבה נגד איראן",
      "היערכות לתרחישי קיצון של מתקפת פתע איראנית"
     ],
     "forecast": [
      "המשך לחץ מדיני ומודיעיני על וושינגטון",
      "שמירה על דריכות גבוהה מול שלוחות איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/irans-irgc-claims-attack-us-target-bahrain-what-know",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/france-is-latest-victim-of-iranian-cyber-sabotage-first-unleashed-on-israel/",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/uk-news/2026/nov/12/two-men-found-guilty-over-iranian-attempts-to-eliminate-uk-based-journalists",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611135399",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21844062",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-says-it-shot-down-two-iranian-drones-heading-towards-bahrain",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/symsxw4cfx",
     "accessed_at": "2026-11-13T18:00:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-13T00:40:30+00:00",
  "changes": {
   "IRAN-11131800-01": {
    "kind": "new"
   },
   "IRAN-11131800-02": {
    "kind": "new"
   },
   "IRAN-11131800-03": {
    "kind": "new"
   },
   "IRAN-11131800-04": {
    "kind": "possible",
    "prev": "פגיעה במכליות נפט וזיהום נרחב במצר הורמוז",
    "score": 0.467
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-12T0044__ukraine-202611120044.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-12T00:44:50+00:00",
   "window": {
    "from": "2026-11-11T00:44:50+00:00",
    "to": "2026-11-12T00:44:50+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611120044"
   },
   "summary": "העימות בין אוקראינה לרוסיה ממשיך להתאפיין בלחימה בעצימות גבוהה ובמהלומות ארוכות טווח נגד תשתיות עורפיות של שני הצדדים. במקביל לתקיפות טילים וכטב\"מים על קייב, אודסה ומתקני נפט בעומק רוסיה, נערכו שיחות משולשות בהשתתפות ארצות הברית שהניבו הסכם על חילופי שבויים. עם זאת, המחלוקות הטריטוריאליות והמבוי הסתום בנושאי ביטחון כולל מותירים את השגת הפסקת האש ללא פריצת דרך.",
   "fronts": [
    {
     "name": "דונבאס",
     "status": "עמדות קשיחות בנוגע לשליטה ולדרישות נסיגה טריטוריאליות"
    },
    {
     "name": "זפורוז'יה ודרום אוקראינה",
     "status": "פעילות התקפית מלווה בלכידת לוחמים זרים ותקיפות מונחות"
    },
    {
     "name": "עורף רוסיה (סיביר ואזור סנקט פטרבורג)",
     "status": "מתקפות כטב\"מים אוקראיניות נרחבות נגד בתי זיקוק ונמלים"
    },
    {
     "name": "עורף אוקראינה (קייב ואודסה)",
     "status": "תקיפות מתמשכות בטילים בליסטיים ובכטב\"מים סילוניים על יעדים אזרחיים ותשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11120044-01",
     "title": "מתקפת כטב\"מים אוקראינית נרחבת על אומסק ובית הזיקוק בסיביר",
     "summary": "כוחות אוקראינה ביצעו תקיפה ממושכת באמצעות כטב\"מים לעבר העיר אומסק שבסיביר, כ-2,500 ק\"מ מגבול אוקראינה. דווח על שריפה בבית הזיקוק המקומי ועל פגיעה אפשרית בתחנת כוח, לצד ביטול אירועי תרבות והתרעות שנמשכו שעות.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T15:14:11+00:00",
     "last_update_at": "2026-11-11T22:41:46+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקני האנרגיה בבית הזיקוק ובתחנת הכוח טרם אומת רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russias-largest-oil-refinery-slammed-by-drones-in-8-hr-attack-2-500-km-from-ukraine/",
       "published_at": "2026-11-11T22:41:46+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_kyiv_independent",
       "url": "https://meduza.io/en/news/2026/11/11/russia-s-omsk-under-drone-alert-for-seven-hours-amid-ukrainian-attack-governor-urges-residents-to-stay-indoors",
       "published_at": "2026-11-11T18:08:49+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/49502",
       "published_at": "2026-11-11T16:49:20+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/49497",
       "published_at": "2026-11-11T15:14:11+00:00"
      }
     ],
     "places": [
      {
       "name": "אומסק, רוסיה",
       "lat": 54.9914,
       "lon": 73.3715
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-02",
     "title": "סיום שיחות אבו דאבי והסכמה על עסקת חילופי שבויים",
     "summary": "השיחות המשולשות בין רוסיה, אוקראינה וארצות הברית באבו דאבי ננעלו בהסכמה על עסקת חילופי שבויים נרחבת ודיון בערבויות ביטחוניות, אולם ללא פריצת דרך בסוגיית השטחים ובמערך הביטחון האירופי.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T12:28:23+00:00",
     "last_update_at": "2026-11-11T19:15:44+00:00",
     "what_is_not_verified": "מספר השבויים שישוחררו ומועד הביצוע המדויק לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://kyivindependent.com/ukraine-war-latest-large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/",
       "published_at": "2026-11-11T19:15:44+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.bbc.co.uk/news/articles/ck792we7zrz4o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-11T18:04:58+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062404/",
       "published_at": "2026-11-11T17:47:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-talks-in-abu-dhabi-bring-progress-on-prisoners-but-not-on-peace",
       "published_at": "2026-11-11T17:03:43+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://meduza.io/en/feature/2026/11/11/russia-ukraine-peace-talks-conclude-in-abu-dhabi-with-prisoner-exchange-agreement-but-no-breakthrough-on-territory",
       "published_at": "2026-11-11T13:10:29+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://meduza.io/en/news/2026/11/11/ukrainian-negotiator-says-peace-talks-with-russia-could-produce-a-deal-before-the-new-year",
       "published_at": "2026-11-11T12:28:23+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות הערביות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-03",
     "title": "תקיפת טילים בליסטיים רוסית על קייב",
     "summary": "צבא רוסיה שיגר טילים בליסטיים לעבר עיר הבירה קייב שעות ספורות לאחר סיום סבב השיחות באבו דאבי.",
     "axis": "מערכי עורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T23:27:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T23:27:06+00:00",
     "last_update_at": "2026-11-11T23:27:06+00:00",
     "what_is_not_verified": "פרטי המטרות המדויקות והנזקים בקייב טרם פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russia-attacks-kyiv-with-ballistic-missiles-hours-after-peace-talks-end/",
       "published_at": "2026-11-11T23:27:06+00:00"
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
     "id": "UKRAINE-11120044-04",
     "title": "פגיעת כטב\"ם סילוני רוסי בשוק בצ'ורנומורסק",
     "summary": "פגיעת כלי טיס מונחה בעל הנעת סילון בשוק מרכזי בצ'ורנומורסק שבמחוז אודסה גרמה למותם של ארבעה בני אדם ולפציעתם של לפחות תשעה נוספים, לצד פגיעה במבני מגורים וברכבים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:27:00+00:00",
     "last_update_at": "2026-11-11T17:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_78cb47b0dfd0bdb9",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062304/",
       "published_at": "2026-11-11T17:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'ורנומורסק, אוקראינה",
       "lat": 46.3013,
       "lon": 30.6549
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-05",
     "title": "הפלת מסוקים רוסיים באש כוחותיהם במחוז לנינגרד",
     "summary": "בלוגרים צבאיים רוסיים דיווחו על הפלת עד שלושה מסוקי קרב רוסיים באש כוחותיהם ומותם של שבעה אנשי צוות בעת ניסיון ליירט מתקפת כטב\"מים אוקראינית מעל אזור לנינגרד ואוסט-לוגה.",
     "axis": "צפון-מערב רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T12:45:08+00:00",
     "last_update_at": "2026-11-11T18:56:06+00:00",
     "what_is_not_verified": "האובדן המדויק של המסוקים ונסיבות מות הטייסים לא אושרו רשמית בידי הרשויות הרוסיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49508",
       "published_at": "2026-11-11T18:56:06+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/11/russian-pro-war-military-bloggers-report-pilots-killed-during-ukrainian-drone-attack-on-leningrad-region",
       "published_at": "2026-11-11T12:45:08+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסט-לוגה, רוסיה",
       "lat": 59.6592,
       "lon": 28.2695
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-06",
     "title": "הסכמת שגרירי האיחוד האירופי על חבילת סנקציות חדשה נגד רוסיה",
     "summary": "נציגי מדינות האיחוד האירופי אישרו עקרונית הטלת סנקציות על 145 ישויות ויחידים, כולל 50 בנקים רוסיים, חברות הקשורות לצי הצללים של הנפט וגורמים הפועלים בתחום הסייבר והלוחמה ההיברידית.",
     "axis": "הזירה הבינלאומית והכלכלית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:33:00+00:00",
     "last_update_at": "2026-11-11T17:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062400/",
       "published_at": "2026-11-11T17:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-07",
     "title": "לכידת שבוי מלחמה מאינדונזיה בשורות צבא רוסיה",
     "summary": "אוקראינה הודיעה על לכידתו של אזרח אינדונזי שלחם בשורות צבא רוסיה במחוז זפורוז'יה שבדרום המדינה, לאחר שיחידתו הותקפה על ידי כטב\"מים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T05:33:27+00:00",
     "last_update_at": "2026-11-11T19:03:34+00:00",
     "what_is_not_verified": "היקף הגיוס של אזרחים זרים נוספים מאינדונזיה וממדינות אחרות אינו מאומת מעבר לנתוני הפרויקט האוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_i_want_to_live",
       "url": "https://kyivindependent.com/ukraine-captures-first-indonesian-prisoner-of-war-as-russia-steps-up-foreign-recruitment/",
       "published_at": "2026-11-11T19:03:34+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_i_want_to_live",
       "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-indonesian-pow-prisoner-of-war-russia",
       "published_at": "2026-11-11T05:33:27+00:00"
      }
     ],
     "places": [
      {
       "name": "זפורוז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-08",
     "title": "מותו של שגריר רוסיה בארצות הברית",
     "summary": "משרד החוץ של רוסיה הודיע על מותו הפתאומי של השגריר בוושינגטון, אלכסנדר דרצ'ייב, בגיל 66.",
     "axis": "דיפלומטיה בין-מעצמתית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T16:39:57+00:00",
     "last_update_at": "2026-11-11T16:54:18+00:00",
     "what_is_not_verified": "סיבת ומנגנון המוות לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hyocvzgcme",
       "published_at": "2026-11-11T16:54:18+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21832201",
       "published_at": "2026-11-11T16:39:57+00:00"
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
     "id": "UKRAINE-11120044-09",
     "title": "נסיעת שליחי ארצות הברית לפגישות במוסקבה ובדבלין",
     "summary": "השליחים סטיב ויטקוף וג'ארד קושנר מתכננים להיפגש במוסקבה עם ולדימיר פוטין ולאחר מכן בדבלין עם וולודימיר זלנסקי כדי לעדכן על תוצאות שיחות אבו דאבי.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T14:30:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T14:30:54+00:00",
     "last_update_at": "2026-11-11T17:56:29+00:00",
     "what_is_not_verified": "תוכן ההצעות שיוצגו בפגישות והסכמות עתידיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://kyivindependent.com/zelensky-arrives-in-dublin-for-european-political-community-summit-expects-a-debrief-from-witkoff-kushner/",
       "published_at": "2026-11-11T17:56:29+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062404/",
       "published_at": "2026-11-11T17:47:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062401/",
       "published_at": "2026-11-11T17:41:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://meduza.io/en/news/2026/11/11/they-re-bringing-something-kushner-and-witkoff-to-meet-putin-in-moscow-day-after-abu-dhabi-peace-talks",
       "published_at": "2026-11-11T14:30:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "דבלין, אירלנד",
       "lat": 53.3494,
       "lon": -6.2606
      }
     ]
    }
   ],
   "not_verified": [
    "טענות בלוגרים צבאיים על הפלת שלושה מסוקים רוסיים באש כוחותיהם ליד לנינגרד",
    "היקף הנזק המדויק לבית הזיקוק באומסק ולתחנת הכוח בעיר",
    "מספרם הכולל של אזרחים זרים שלוחמים או נהרגו בשירות צבא רוסיה",
    "נסיבות וסיבת המוות של השגריר הרוסי אלכסנדר דרצ'ייב",
    "טענת רוסיה בנוגע לקיומה של רשת בתי כלא ועינויים באוקראינה"
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
     "value": 1.1127,
     "unit": "USD",
     "change_pct": -0.78,
     "source_id": "src_ecb",
     "as_of": "2026-11-11T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת שחרור של שבויים במסגרת עסקאות חילופין",
      "התקדמות במסלול ההצטרפות לאיחוד האירופי וקבלת ערבויות ביטחון",
      "סירוב מוחלט לדרישות לנסיגה משטחי דונבאס"
     ],
     "inferred": [
      "פגיעה בתשתיות הזיקוק והאנרגיה של רוסיה כדי לייצר לחץ כלכלי ומבצעי",
      "רצון להגיע למסגרת הסדרה לפני סוף השנה תוך שימור תמיכת המערב"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים לעומק השטח הרוסי במקביל למגעים עם שליחי הממשל האמריקני"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת ניצחון והחזרת כל השטחים הנתבעים על ידה בטרם חתימה על הסכם שלום",
      "הגעה להבנות בעניין מערך הביטחון האירופי ודרישות ביטחוניות מול אוקראינה"
     ],
     "inferred": [
      "הפעלת לחץ צבאי כבד על תשתיות האנרגיה והמרכזים העירוניים באוקראינה לקראת המשך השיחות",
      "שימור ערוצי ההידברות הדיפלומטיים מול ארצות הברית כדי למקסם הישגים מדיניים"
     ],
     "forecast": [
      "המשך תקיפות הטילים על ערי אוקראינה תוך בחינת תנאי הפסקת אש בתחומי האנרגיה והים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ck792we7zrz4o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-indonesian-pow-prisoner-of-war-russia",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21832201",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/zelensky-arrives-in-dublin-for-european-political-community-summit-expects-a-debrief-from-witkoff-kushner/",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/11/they-re-bringing-something-kushner-and-witkoff-to-meet-putin-in-moscow-day-after-abu-dhabi-peace-talks",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062401/",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49508",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyocvzgcme",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-11T00:50:00+00:00",
  "changes": {
   "UKRAINE-11120044-01": {
    "kind": "new"
   },
   "UKRAINE-11120044-02": {
    "kind": "new"
   },
   "UKRAINE-11120044-03": {
    "kind": "new"
   },
   "UKRAINE-11120044-04": {
    "kind": "new"
   },
   "UKRAINE-11120044-05": {
    "kind": "new"
   },
   "UKRAINE-11120044-06": {
    "kind": "new"
   },
   "UKRAINE-11120044-07": {
    "kind": "new"
   },
   "UKRAINE-11120044-08": {
    "kind": "new"
   },
   "UKRAINE-11120044-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-13T0050__north-202611130050.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-13T00:50:27+00:00",
   "window": {
    "from": "2026-11-12T00:50:27+00:00",
    "to": "2026-11-13T00:50:27+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611130050"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחימה מתמשכת בדרום לבנון, הכוללת תקיפות של צה\"ל לצד עיסוק פוליטי ומשפטי בלבנון במעמד השטחים הכבושים ובנוכחות זרה. במקביל, מתנהל שיח דיפלומטי וכלכלי בין לבנון לטורקיה תוך חיכוך פוליטי פנימי בביירות סביב מידת ההשפעה של איראן על קבלת ההחלטות במדינה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11130050-01",
     "title": "אישור חוק איסור עסקאות נדל\"ן באזורים כבושים בלבנון",
     "summary": "הפרלמנט הלבנוני אישר בהצבעה תיקונים לטיוטת חוק האוסרת על עסקאות נדל\"ן ומכירת קרקעות באזורים הכבושים בידי הצבא הישראלי.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T22:54:58+00:00",
     "last_update_at": "2026-11-12T22:54:58+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_15dced32988c4eea",
       "url": "https://english.almanar.com.lb/article/150182/",
       "published_at": "2026-11-12T22:54:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11130050-02",
     "title": "תקיפות צה\"ל בדרום לבנון",
     "summary": "הצבא הישראלי תקף באזור רכס עלי א-טאהר, כפר תבנית וקנטרה שבדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T12:44:17+00:00",
     "last_update_at": "2026-11-12T12:44:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133535",
       "published_at": "2026-11-12T12:44:17+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "קנטרה",
       "lat": 33.2735,
       "lon": 35.4591
      }
     ]
    },
    {
     "id": "NORTH-11130050-03",
     "title": "דיונים רשמיים בין נשיא לבנון לבנו של נשיא טורקיה",
     "summary": "נשיא לבנון אירח את בלו ארדואן בבארבא. נשיא לבנון הביע ציפייה לשיתוף פעולה עם טורקיה, בעוד בלו ארדואן הצהיר על תמיכת ארצו במאמצי לבנון להרחיב את ריבונות המדינה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T06:54:44+00:00",
     "last_update_at": "2026-11-12T06:54:44+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_6e183e6046ff3f89",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967590/president-aoun-calls-for-stronger-lebanon-turkey-ties-as-bilal-erdogan/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967590",
       "published_at": "2026-11-12T06:54:44+00:00"
      }
     ],
     "places": [
      {
       "name": "בארבא",
       "lat": 33.8336,
       "lon": 35.5446
      }
     ]
    },
    {
     "id": "NORTH-11130050-04",
     "title": "עימות מילולי בפרלמנט הלבנוני סביב עמדת איראן",
     "summary": "ראש מפלגת הכתאיב סמי ג'ומאייל מחה בפרלמנט על דבריו של יו\"ר הפרלמנט האיראני על חזית משותפת, ויו\"ר הפרלמנט נבי ברי השיב כי לבנון חופשית להחליט.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T06:26:48+00:00",
     "last_update_at": "2026-11-12T06:26:48+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_eb63e4da3a1155ee",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967570/sami-gemayel-challenges-iranian-parliament-speakers-remarks-berri-resp/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967570",
       "published_at": "2026-11-12T06:26:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11130050-05",
     "title": "הקמת גדודי תקיפה בזרוע היבשה הישראלית",
     "summary": "זרוע היבשה בישראל החלה להקים גדודי תקיפה ייעודיים לקראת תמרון עתידי בעזה ובלבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T03:48:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T03:48:07+00:00",
     "last_update_at": "2026-11-12T03:48:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "fh_b0fb4ef83a46c544",
       "url": "https://www.walla.co.il/news/military/383960981",
       "published_at": "2026-11-12T03:48:07+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "פרטי התכנון המדויקים של גדודי התקיפה החדשים בזרוע היבשה"
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
     "value": 3.2032,
     "unit": "ILS",
     "change_pct": 1.0,
     "source_id": "src_ecb",
     "as_of": "2026-11-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הכנה למבצעים אפשריים והיערכות ביטחונית בגזרה"
     ],
     "inferred": [
      "בניית כוח יבשתי מותאם לתמרון בלבנון ופגיעה בתשתיות חיזבאללה"
     ],
     "forecast": [
      "המשך פעילות צבאית ולחימה בעצימות משתנה בדרום לבנון"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "הגנה על ריבונות המדינה ואיסור עסקאות נדל\"ן באזורים הכבושים",
      "חיזוק קשרים ושיתופי פעולה כלכליים ומדיניים עם טורקיה"
     ],
     "inferred": [
      "ניסיון לאזן בין השפעות חיצוניות (איראן, טורקיה) לבין שמירה על עצמאות מוסדות המדינה"
     ],
     "forecast": [
      "המשך ניסיונות החקיקה והדיפלומטיה להשבת ריבונות וגיוס סיוע לשיקום"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/150182/",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/967570/sami-gemayel-challenges-iranian-parliament-speakers-remarks-berri-resp/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967570",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133535",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383960981",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:57:53+00:00",
  "changes": {
   "NORTH-11130050-01": {
    "kind": "new"
   },
   "NORTH-11130050-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות צה\"ל בדרום לבנון בזמן נאום מזכ\"ל חיזבאללה",
    "score": 0.65
   },
   "NORTH-11130050-03": {
    "kind": "possible",
    "prev": "דיונים מדיניים בנפרד על תפקיד יוניפי\"ל ונוכחות ביטחונית בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11130050-04": {
    "kind": "new"
   },
   "NORTH-11130050-05": {
    "kind": "new"
   }
  }
 }
};
