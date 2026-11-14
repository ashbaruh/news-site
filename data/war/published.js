/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-14T0045__yemen-202611140045.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-14T00:45:29+00:00",
   "window": {
    "from": "2026-11-13T00:45:29+00:00",
    "to": "2026-11-14T00:45:29+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "yemen-202611140045"
   },
   "summary": "בזירה התימנית נרשמת החרפה משמעותית בלחימה הקרקעית והאווירית בין תנועת החות'ים לבין כוחות ממשלת תימן והקואליציה בראשות סעודיה. החות'ים מרחיבים את תקיפותיהם לעומק שטח סעודיה ומפעילים לחץ צבאי גובר על מבואות העיר עדן וסביבות מצר באב אל-מנדב. במקביל, כוחות הממשלה מקימים קווי ביצור סביב עיר הבירה הזמנית ומדווחים על מכות אש נרחבות לבלימת ההתקדמות.",
   "fronts": [
    {
     "name": "מבואות עדן ודרום מערב תימן",
     "status": "התקדמות חות'ית לעבר רכסים שולטים והקמת מערכי הגנה וביצורים של כוחות הממשלה."
    },
    {
     "name": "מצר באב אל-מנדב וחוף ים סוף",
     "status": "שליטה חות'ית מוגברת בעקבות נסיגת כוחות הממשלה בספטמבר ולחימה מתמשכת."
    },
    {
     "name": "גבול תימן - סעודיה ועומק סעודיה",
     "status": "חידוש שיגורי כטב\"מים וטילים בליסטיים לעבר נמלי תעופה, מתקני נפט וריכוזי כוחות."
    },
    {
     "name": "תעז, לחג', מארב ואל-ג'וף",
     "status": "קרבות עזים, חילופי אש, הפגזות ופעילות צלפים לאורך קווי המגע."
    }
   ],
   "events": [
    {
     "id": "YEMEN-11140045-01",
     "title": "החות'ים טוענים שביצעו תקיפות של כטב\"מים וטילים נגד יעדים בסעודיה ובתוך תימן",
     "summary": "הדובר הצבאי של החות'ים מסר כי כוחותיהם שיגרו כטב\"מים לעבר שדה התעופה הבינלאומי בריאד ולעבר תחנת שאיבה של צינור נפט, וכן שיגרו טילים בליסטיים לעבר ריכוזי כוחות באזור ג'אזאן וביעדים שונים בתימן.",
     "axis": "חות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T20:58:21+00:00",
     "last_update_at": "2026-11-13T20:58:21+00:00",
     "what_is_not_verified": "סעודיה לא אישרה את טענות החות'ים בדבר הפגיעות והנזקים הנטענים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-attacked-riyadh-airport-and-saudi-oil-pipeline",
       "published_at": "2026-11-13T20:58:21+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'אזאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-11140045-02",
     "title": "כוחות ממשלת תימן מתבצרים במבואות עדן עקב התקדמות החות'ים",
     "summary": "גורמי צבא תימניים דיווחו על עבודות ביצור נרחבות צפונית ומערבית לעדן, הכוללות חפירת מנהרות והצבת שקי חול, נוכח השתלטות כוחות החות'ים על עמדות שולטות ורכסים בסמוך למצר באב אל-מנדב ולמחוז לחג'.",
     "axis": "החות'ים - ממשלת תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T17:24:41+00:00",
     "last_update_at": "2026-11-13T17:24:41+00:00",
     "what_is_not_verified": "היקף ההתקדמות המדויק ומספר הנפגעים בקרבות האחרונים בחוף הים האדום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-forces-fortify-aden-defences-houthis-advance",
       "published_at": "2026-11-13T17:24:41+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      }
     ]
    },
    {
     "id": "YEMEN-11140045-03",
     "title": "נציב זכויות האדם של האו\"ם דורש להשיב את גופת איש צוות שמת בשבי החות'ים",
     "summary": "הנציב העליון לזכויות אדם דרש מהשלטונות החות'יים להעביר את גופתו של עובד האו\"ם שנפטר בנסיבות לא ברורות לאחר שהוחזק במעצר במשך יותר משנתיים, וקרא לשחרר עשרות אנשי סיוע שעדיין עצורים.",
     "axis": "החות'ים - קהילה בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T17:34:32+00:00",
     "last_update_at": "2026-11-13T17:47:08+00:00",
     "what_is_not_verified": "סיבת המוות והנסיבות המדויקות שבהן מת איש הצוות בשבי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/un-rights-chief-demands-houthis-return-body-yemeni-staff-member",
       "published_at": "2026-11-13T17:47:08+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-rights-chief-demands-houthis-return-body-staff-member-who-died",
       "published_at": "2026-11-13T17:34:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11140045-04",
     "title": "צבא תימן מדווח על תקיפת מאות מטרות חות'יות ומאות נפגעים",
     "summary": "גורמי הצבא התימני הודיעו על ביצוע מאות תקיפות נגד ריכוזי כוחות חות'יים, שבהן נהרגו ונפצעו מאות חמושים, בהם מפקדים.",
     "axis": "החות'ים - ממשלת תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T14:15:34+00:00",
     "last_update_at": "2026-11-13T14:15:34+00:00",
     "what_is_not_verified": "מספר התקיפות המדויק ומספר הנפגעים לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_74aa8cf558494285",
       "url": "https://www.sabanew.net/viewstory/155735",
       "published_at": "2026-11-13T14:15:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11140045-05",
     "title": "קריאות בינלאומיות להגברת הלחץ על החות'ים והארכת עיצומי מועצת הביטחון",
     "summary": "משרד החוץ של צרפת קרא להגביר את הלחץ על החות'ים להפסקת תקיפותיהם באזור, במקביל להחלטת מועצת הביטחון של האו\"ם להאריך בשנה את משטר הסנקציות על תימן.",
     "axis": "החות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T16:54:12+00:00",
     "last_update_at": "2026-11-13T16:54:12+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/france-calls-more-pressure-houthis-end-attacks-saudi-arabia",
       "published_at": "2026-11-13T16:54:12+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "פגיעה ממשית בשדה התעופה המלכותי בריאד או בצינור הנפט מזרח-מערב של סעודיה.",
    "היקף הנפגעים והאבידות שצבא תימן טוען שהסב לחות'ים (מאות נפגעים ומאות גיחות).",
    "הדיווחים של החות'ים על גרימת נפגעים רבים בקרב כוחות תחת פיקוד סעודי בלחג' ואל-ג'וף."
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה במתקנים אסטרטגיים ובשדות תעופה של סעודיה.",
      "תקיפת בסיסים ומחסני נשק של כוחות הקואליציה בתימן."
     ],
     "inferred": [
      "ביסוס אחיזה מוחלטת בנתיבי השיט בבאב אל-מנדב וניתוק קווי האספקה לעדן.",
      "הפעלת לחץ כלכלי וצבאי על סעודיה להפסקת התמיכה בממשלת תימן."
     ],
     "forecast": [
      "המשך ניסיונות התקדמות לעבר חופי מפרץ עדן ומבואות העיר.",
      "החרפת שיגורי הכטב\"מים לעבר יעדי תשתית סעודיים להרתעת הקואליציה."
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה",
     "declared": [
      "הגנה על מרחב עדן ובלימת המתקפות החות'יות באזור תעז ולחג'.",
      "הפעלת לחץ בינלאומי להטלת עיצומים והגדרת החות'ים כארגון טרור."
     ],
     "inferred": [
      "מניעת נפילת הבירה הזמנית עדן והימנעות מאיבוד מוחלט של הגישה לים.",
      "שמירה על תמיכה צבאית וכלכלית בינלאומית ומפרצית מול שחיקת הכוחות."
     ],
     "forecast": [
      "התבצרות ממושכת במבואות עדן תוך הסתמכות על תקיפות אוויר וסיוע סעודי.",
      "המשך חוסר היכולת לשוב ולכבוש שטחים שאבדו לאורך חוף ים סוף בטווח הקצר."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/un-rights-chief-demands-houthis-return-body-yemeni-staff-member",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/france-calls-more-pressure-houthis-end-attacks-saudi-arabia",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-forces-fortify-aden-defences-houthis-advance",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155735",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T18:59:42+00:00",
  "changes": {
   "YEMEN-11140045-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת מתקני נפט בסעודיה על ידי החות'ים",
    "score": 0.817
   },
   "YEMEN-11140045-02": {
    "kind": "new"
   },
   "YEMEN-11140045-03": {
    "kind": "new"
   },
   "YEMEN-11140045-04": {
    "kind": "new"
   },
   "YEMEN-11140045-05": {
    "kind": "possible",
    "prev": "לחץ דיפלומטי סעודי לסיווג החות'ים כארגון טרור",
    "score": 0.467
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
  "draft": "drafts/ukraine/2026-11-14T0040__ukraine-202611140040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-14T00:40:39+00:00",
   "window": {
    "from": "2026-11-13T00:40:39+00:00",
    "to": "2026-11-14T00:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611140040"
   },
   "summary": "הלחימה הקרקעית והאווירית בין רוסיה לאוקראינה נמשכת בעוצמה גבוהה, כאשר מוקד הקרבות המרכזי מתרכז בגזרת פוקרובסק לצד תקיפות כטב\"מים וטילים על ערים באוקראינה ופגיעות בכירים בעומק שטח רוסיה. במקביל נרשמת היערכות דיפלומטית רחבה באירופה לקראת הצטרפות לשיחות על הסדר עתידי, חרף מחלוקות עמוקות סביב תנאי הפסקת האש ודרישות הביטחון של מוסקבה. במישור הבינלאומי מסתמנת מתיחות בנושאי חימוש וביטחון אזורי, כולל הגבלות תקציביות על רכש נשק בפולין ותקריות צבאיות במפרץ פינלנד.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "לחימה בעצימות גבוהה ביותר עם עשרות מתקפות רוסיות ביממה"
    },
    {
     "name": "קייב ועורף אוקראינה",
     "status": "ספיגת מתקפות כטב\"מים רוסיים על מבני ציבור ונהרות הבירה"
    },
    {
     "name": "זפוריז'יה",
     "status": "פגיעות בעיר ונפגעים אזרחיים רבים"
    },
    {
     "name": "מפרץ פינלנד ונמל אוסט-לוגה",
     "status": "פעילות כטב\"מים אוקראינית נגד כלי שיט צבאיים רוסיים"
    },
    {
     "name": "עומק רוסיה (מוסקבה)",
     "status": "פגיעות ממוקדות באמצעות פיצוץ מטעני חבלה ברכבים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11140040-01",
     "title": "פיצוץ מכונית תופת במוסקבה ופציעת בכיר אוקראיני לשעבר",
     "summary": "מכונית תופת התפוצצה בדרום מוסקבה ופצעה קשה את סרגיי זבורוטני, לשעבר דוברו ויועצו של ראש ממשלת אוקראינה לשעבר ניקולאי אזרוב. ועדת החקירות פתחה בחקירה.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T11:54:44+00:00",
     "last_update_at": "2026-11-13T19:41:51+00:00",
     "what_is_not_verified": "זהות המבצעים ומעורבות אוקראינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ex-pm-press-secretary-reportedly-injured-in-moscow-car-explosion/",
       "published_at": "2026-11-13T19:41:51+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49552",
       "published_at": "2026-11-13T14:18:57+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c5gm3gnwl42eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-13T13:11:23+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/13/car-bomb-attack-moscow-russia",
       "published_at": "2026-11-13T13:01:44+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21845700",
       "published_at": "2026-11-13T11:54:44+00:00"
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
     "id": "UKRAINE-11140040-02",
     "title": "הסכמה אירופית על משלחת משותפת לשיחות השלום",
     "summary": "מנהיגי האיחוד האירופי סיכמו על הקמת צוות משותף לשיחות עתידיות בנושא אוקראינה, שיכלול את מוסדות האיחוד ונציגים מחמש מדינות: גרמניה, צרפת, בריטניה, איטליה ופולין.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T02:01:35+00:00",
     "last_update_at": "2026-11-13T20:40:00+00:00",
     "what_is_not_verified": "מועד ומיקום השיחות העתידיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://kyivindependent.com/european-leaders-agree-on-joint-team-for-ukraine-peace-negotiations-costa-says/",
       "published_at": "2026-11-13T20:40:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://tass.com/world/2218035",
       "published_at": "2026-11-13T19:45:59+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_aa82f9f319c8f641",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062802/",
       "published_at": "2026-11-13T19:11:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_5333def1ea916825",
       "url": "https://tass.com/world/2218029",
       "published_at": "2026-11-13T19:01:28+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ca53c44b3651ca38",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062799/",
       "published_at": "2026-11-13T18:31:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_622dba54397de10c",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062795/",
       "published_at": "2026-11-13T17:43:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062792/",
       "published_at": "2026-11-13T17:29:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_f86bd6c7e9fffb40",
       "url": "https://www.theguardian.com/world/2026/nov/13/ukraine-war-briefing-europe-to-join-negotiations-says-kushner-as-putin-warns-against-peace-keepers",
       "published_at": "2026-11-13T03:38:51+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://www.bbc.co.uk/news/articles/ckn80j9jv3jxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-13T02:01:35+00:00"
      }
     ],
     "places": [
      {
       "name": "דבלין, אירלנד",
       "lat": 53.3494,
       "lon": -6.2606
      }
     ]
    },
    {
     "id": "UKRAINE-11140040-03",
     "title": "דיווח על דרישות רוסיות במשא ומתן להסדר והכחשת הקרמלין",
     "summary": "דיווח עיתונאי ייחס לרוסיה דרישות שפינלנד תעזוב את נאט\"ו, פירוז נמלי אודסה וניקולאייב והכרה בשליטה בדונבאס. דובר הקרמלין הכחיש את הטענות מכל וכל.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T13:37:17+00:00",
     "last_update_at": "2026-11-14T00:11:36+00:00",
     "what_is_not_verified": "עצם העלאת הדרישות בשיחות לא רשמיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/14/russia-demands-finland-leave-nato-bild-reports-moscow-denies-it-and-helsinki-is-outraged",
       "published_at": "2026-11-14T00:11:36+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49550",
       "published_at": "2026-11-13T13:37:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11140040-04",
     "title": "תקיפת כטב\"ם על בית חולים בקייב",
     "summary": "כטב\"ם פגע במכון הלאומי לטראומטולוגיה ואורתופדיה במרכז קייב וגרם לפציעת שלושה בני אדם, על רקע קשיים של מערכת סטארשילד בהפלת כלי הטיס.",
     "axis": "חזית העורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T03:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T11:24:30+00:00",
     "last_update_at": "2026-11-13T11:24:30+00:00",
     "what_is_not_verified": "מידת השפעת מגבלות המהירות של סטארשילד על האירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/13/russia-strikes-hospital-central-kyiv-spacex-starshield-system-fails",
       "published_at": "2026-11-13T11:24:30+00:00"
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
     "id": "UKRAINE-11140040-05",
     "title": "חילוץ שרידי כטב\"ם מנהר הדנייפרו בקייב",
     "summary": "צוותי חילוץ משו מנהר הדנייפרו ברובע אובולון שבקייב שרידים של כטב\"ם רוסי שנפל במתקפה שהתרחשה ב-11 בנובמבר.",
     "axis": "חזית העורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T23:26:00+00:00",
     "last_update_at": "2026-11-13T23:26:00+00:00",
     "what_is_not_verified": "דגם הכטב\"ם ומטרתו המקורית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_38b23cb3809ed3c2",
       "url": "https://www.ukrinform.net/rubric-ato/4184176-remains-of-russian-drone-recovered-from-dnipro-river-in-kyiv.html",
       "published_at": "2026-11-13T23:26:00+00:00"
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
     "id": "UKRAINE-11140040-06",
     "title": "קרבות עזים בקווי החזית ומתקפות בגזרת פוקרובסק",
     "summary": "במהלך היממה נרשמו 243 התנגשויות קרביות בין כוחות ההגנה של אוקראינה לצבא הרוסי, מתוכן כ-50 מתקפות רוסיות בגזרת פוקרובסק לבדה.",
     "axis": "דונבאס",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T21:58:00+00:00",
     "last_update_at": "2026-11-13T21:58:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בקרבות אלו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_0e1edc76395735e2",
       "url": "https://www.ukrinform.net/rubric-ato/4184540-war-update-243-clashes-on-front-line-fiercest-fighting-in-pokrovsk-sector.html",
       "published_at": "2026-11-13T21:58:00+00:00"
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
     "id": "UKRAINE-11140040-07",
     "title": "פגיעה רוסית בזפוריז'יה עם עשרות פצועים",
     "summary": "רוסיה תקפה בעיר זפוריז'יה, וכתוצאה מכך נפצעו 50 בני אדם, בהם 8 ילדים.",
     "axis": "החזית הדרומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T19:41:51+00:00",
     "last_update_at": "2026-11-13T19:41:51+00:00",
     "what_is_not_verified": "סוג החימוש ששימש לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ex-pm-press-secretary-reportedly-injured-in-moscow-car-explosion/",
       "published_at": "2026-11-13T19:41:51+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-11140040-08",
     "title": "פניית פינלנד לאוקראינה בעקבות תקיפת ספינה במפרץ פינלנד",
     "summary": "שר ההגנה הפיני אישר כי הלסינקי פנתה לקייב והבהירה את רגישות האזור בעקבות פגיעת כטב\"ם אוקראיני בקורבטה רוסית בנמל אוסט-לוגה.",
     "axis": "הזירה הימית והמדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T15:04:19+00:00",
     "last_update_at": "2026-11-13T15:04:19+00:00",
     "what_is_not_verified": "חומרת הנזק שנגרמה לקורבטה הרוסית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49554",
       "published_at": "2026-11-13T15:04:19+00:00"
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
     "id": "UKRAINE-11140040-09",
     "title": "פולין סירבה לממן נשק אמריקאי לאוקראינה במסגרת קרן ייעודית",
     "summary": "ראש ממשלת פולין דונלד טוסק הבהיר כי ארצו לא תממן רכישת אמצעי לחימה מתוצרת ארה\"ב עבור אוקראינה במסגרת תוכנית זו, בנימוק של גירעון תקציבי.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T19:03:00+00:00",
     "last_update_at": "2026-11-13T19:03:00+00:00",
     "what_is_not_verified": "ההשפעה המעשית על היקף אספקת החימוש הכולל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2218031",
       "published_at": "2026-11-13T19:03:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה שרוסיה דרשה את עזיבת פינלנד את נאט\"ו בשיחות בלתי רשמיות",
    "מידת האחריות של מודיעין אוקראיני לפיצוץ המכונית במוסקבה",
    "היקף הנזק המדויק לקורבטה הרוסית נארו-פומינסק במפרץ פינלנד"
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
     "value": 1.1052,
     "unit": "USD",
     "change_pct": -0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "התנגדות לנוכחות כוחות שמירת שלום אירופיים באוקראינה",
      "סירוב לויתורים טריטוריאליים בשטחים הנתבעים על ידה",
      "הכחשת דרישות לשינוי מעמד פינלנד בנאט\"ו"
     ],
     "inferred": [
      "שאיפה להכרה בינלאומית בסיפוח מחוזות אוקראינה ופירוז נמלי הים השחור",
      "ניסיון להרחיק את האיחוד האירופי ומוסדותיו ממעמד שווה ליד שולחן המשא ומתן"
     ],
     "forecast": [
      "המשך הלחץ הצבאי בדונבאס לביסוס עובדות בשטח לפני התקדמות לשיחות רשמיות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "שילוב מדינות אירופה ומוסדות האיחוד האירופי בשיחות להסדר עתידי",
      "קידום סדר יום הכולל צעדים להפסקת אש והפחתת הסלמה",
      "המשך פגיעה במטרות לוגיסטיות וצבאיות של רוסיה"
     ],
     "inferred": [
      "הסתמכות על תמיכה אירופית כדי לבלום לחץ לוויתורים טריטוריאליים",
      "המשך מבצעי חבלה ופגיעה ממוקדת בעומק רוסיה לשם ערעור הביטחון הפנימי שלה"
     ],
     "forecast": [
      "המשך קו הגנה נוקשה תוך דרישה לערבויות ביטחון בינלאומיות מחייבות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckn80j9jv3jxo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/13/russia-strikes-hospital-central-kyiv-spacex-starshield-system-fails",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21845700",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-ex-pm-press-secretary-reportedly-injured-in-moscow-car-explosion/",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/14/russia-demands-finland-leave-nato-bild-reports-moscow-denies-it-and-helsinki-is-outraged",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062792/",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2218031",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49554",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4184540-war-update-243-clashes-on-front-line-fiercest-fighting-in-pokrovsk-sector.html",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:44:50+00:00",
  "changes": {
   "UKRAINE-11140040-01": {
    "kind": "possible",
    "prev": "נסיעת שליחי ארצות הברית לפגישות במוסקבה ובדבלין",
    "score": 0.633
   },
   "UKRAINE-11140040-02": {
    "kind": "possible",
    "prev": "סיום שיחות אבו דאבי והסכמה על עסקת חילופי שבויים",
    "score": 0.467
   },
   "UKRAINE-11140040-03": {
    "kind": "new"
   },
   "UKRAINE-11140040-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפת טילים בליסטיים רוסית על קייב",
    "score": 0.817
   },
   "UKRAINE-11140040-05": {
    "kind": "new"
   },
   "UKRAINE-11140040-06": {
    "kind": "new"
   },
   "UKRAINE-11140040-07": {
    "kind": "new"
   },
   "UKRAINE-11140040-08": {
    "kind": "new"
   },
   "UKRAINE-11140040-09": {
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
