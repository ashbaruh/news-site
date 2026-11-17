/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-17T0340__yemen-202611170340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-17T03:40:37+00:00",
   "window": {
    "from": "2026-11-16T03:40:37+00:00",
    "to": "2026-11-17T03:40:37+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "yemen-202611170340"
   },
   "summary": "הזירה התימנית חווה תפנית מבצעית חדה עם התקדמות מהירה של החות'ים לעבר החוף הדרומי, כיבוש אזורי מצר באב אל-מנדב והתקרבותם לכדי עשרות קילומטרים מבירת הממשלה הזמנית בעדן. כוחות הממשלה הנתמכים בידי סעודיה נאלצו לסגת ממערב המדינה ומחלקים במחוזות לחג' ומאריב כדי לייצב קו הגנה על עדן, מה שהוביל לזעזוע פיקודי בריאד ולהחלפת מפקד הקואליציה. במקביל, החות'ים ממשיכים לשגר תקיפות כטב\"מים לעבר יעדים בעומק סעודיה לצד ניסיונות של חברות ספנות לשוב באופן חלקי למרחב הים האדום.",
   "fronts": [
    {
     "name": "חזית מצר באב אל-מנדב ודרום-מערב תימן",
     "status": "נסיגת כוחות הממשלה והשתלטות חות'ית על קו החוף וצירים אסטרטגיים"
    },
    {
     "name": "מבואות העיר עדן ומחוז לחג'",
     "status": "היערכות הגנתית של צבא תימן לבלימת כוחות החות'ים המתקדמים"
    },
    {
     "name": "חזית מאריב ותעז",
     "status": "נסיגה חלקית של כוחות הקואליציה וניסיונות לשבור את המצור על תעז"
    },
    {
     "name": "חזית עומק סעודיה מול תימן",
     "status": "שיגורי כטב\"מים וטילים חות'יים לעבר יעדים צבאיים ואזרחיים ויירוטם על ידי סעודיה"
    },
    {
     "name": "נתיבי השיט בים האדום ובמצר באב אל-מנדב",
     "status": "הגברת אחיזה יבשתית חות'ית במקביל למאמצי חידוש תנועת ספנות מסחרית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11170340-01",
     "title": "התקדמות החות'ים לעבר עדן ונסיגת כוחות הממשלה מאזור מצר באב אל-מנדב",
     "summary": "החות'ים השתלטו על שטחים בחוף הדרומי ובמצר באב אל-מנדב, בהם אזור אל-מודארבה וראס אל-ערה במחוז לחג', והתקרבו למרחק של כ-60 קילומטרים מעדן, בעוד כוחות הממשלה הנתמכים בידי סעודיה נסוגו במטרה להגן על העיר.",
     "axis": "דרום תימן ומצר באב אל-מנדב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T07:35:10+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T07:35:10+00:00",
     "last_update_at": "2026-11-16T23:57:49+00:00",
     "what_is_not_verified": "מידת השליטה המוחלטת של החות'ים במצר באב אל-מנדב ונתוני השטח המדויקים שנכבשו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/16/live-houthis-advance-in-yemen-as-tankers-hit-sea-mines-in-strait-of-hormuz?traffic_source=rss",
       "published_at": "2026-11-16T23:57:49+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/11/houthis-retake-bab-al-mandeb-and-move-toward-aden.php",
       "published_at": "2026-11-16T22:03:46+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmy97qperq9eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-16T21:40:07+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49645",
       "published_at": "2026-11-16T20:12:24+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/16/saudi-arabia-challenged-yemeni-allies-ceding-ground-houthis",
       "published_at": "2026-11-16T19:04:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-dismisses-commander-anti-houthi-coalition",
       "published_at": "2026-11-16T18:04:04+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/yemens-saudi-backed-forces-retreat-defend-aden-houthis-advance-what-know",
       "published_at": "2026-11-16T17:28:26+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21865337",
       "published_at": "2026-11-16T15:55:21+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-seize-ground-yemen-israeli-strikes-target-lebanon",
       "published_at": "2026-11-16T15:52:21+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cqvg2xgyvnjpo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-16T11:09:38+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/third-us-aircraft-carrier-arrives-iran-says-tankers-hit-mines",
       "published_at": "2026-11-16T07:35:10+00:00"
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
     "id": "YEMEN-11170340-02",
     "title": "הדחת מפקד כוחות הקואליציה הפועלת בתימן בידי סעודיה",
     "summary": "צו מלכותי בסעודיה הורה על סיום תפקידו של מפקד הקואליציה התומכת בממשלת תימן והעברתו לתפקיד יועץ, ועל מינוי רמטכ\"ל צבא סעודיה לפקד על הקואליציה במקומו בעקבות נסיגת הכוחות.",
     "axis": "הפיקוד הצבאי הסעודי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T15:52:21+00:00",
     "last_update_at": "2026-11-16T18:04:04+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_90dabe9a4b6fd9cc",
       "url": "https://www.newarab.com/news/saudi-arabia-dismisses-commander-anti-houthi-coalition",
       "published_at": "2026-11-16T18:04:04+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_90dabe9a4b6fd9cc",
       "url": "https://www.al-monitor.com/originals/2026/11/yemens-saudi-backed-forces-retreat-defend-aden-houthis-advance-what-know",
       "published_at": "2026-11-16T17:28:26+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_90dabe9a4b6fd9cc",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21865337",
       "published_at": "2026-11-16T15:55:21+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_90dabe9a4b6fd9cc",
       "url": "https://www.newarab.com/news/houthis-seize-ground-yemen-israeli-strikes-target-lebanon",
       "published_at": "2026-11-16T15:52:21+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11170340-03",
     "title": "יירוט שני כלי טיס בלתי מאוישים מעל שטח סעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדה של שני כלי טיס בלתי מאוישים ששוגרו בידי המיליציה החות'ית לעבר אזורי מכה וריאד.",
     "axis": "עומק סעודיה מול תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T13:36:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T13:36:12+00:00",
     "last_update_at": "2026-11-16T13:36:12+00:00",
     "what_is_not_verified": "נזקים או מיקומי יירוט מדויקים מעבר להודעת הקואליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_f4702c7c36edb613",
       "url": "https://www.sabanew.net/viewstory/155880",
       "published_at": "2026-11-16T13:36:12+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      }
     ]
    },
    {
     "id": "YEMEN-11170340-04",
     "title": "דיווח צבא תימן על מאות תקיפות ואבידות לשורות החות'ים",
     "summary": "צבא תימן טוען כי ביצע מאות תקיפות נגד החות'ים וכי נפגעו עשרות רבות של לוחמים חות'ים בעוד כוחות הממשלה נערכים מחדש להגנת עדן.",
     "axis": "מבואות עדן ותעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T01:38:13+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T01:38:13+00:00",
     "last_update_at": "2026-11-17T01:38:13+00:00",
     "what_is_not_verified": "אמיתות מספרי הנפגעים והיקף התקיפות המדויק שנטען על ידי צבא תימן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/17/yemen-army-reports-661-attacks-on-houthis-amid-houthi-push-towards-aden?traffic_source=rss",
       "published_at": "2026-11-17T01:38:13+00:00"
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
     "id": "YEMEN-11170340-05",
     "title": "הרחבת פעילות חברות ספנות בינלאומיות בנתיב הים האדום",
     "summary": "חברות הספנות מארסק והפאג-לויד הודיעו על החזרת קווי שירות נוספים למעבר דרך הים האדום ותעלת סואץ במסגרת שיתוף הפעולה ביניהן.",
     "axis": "הים האדום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T15:45:05+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T15:45:05+00:00",
     "last_update_at": "2026-11-16T15:45:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/maersk-hapag-lloyd-expand-suez-canal-return-with-three-more-gemini-services/",
       "published_at": "2026-11-16T15:45:05+00:00"
      }
     ],
     "places": [
      {
       "name": "הים האדום",
       "lat": 20.2966,
       "lon": 38.5343
      },
      {
       "name": "תעלת סואץ, מצרים",
       "lat": 30.6053,
       "lon": 32.3331
      }
     ]
    }
   ],
   "not_verified": [
    "טענת החות'ים לשליטה מלאה ומוחלטת בכל מרחב מצר באב אל-מנדב",
    "מספר הנפגעים החות'ים המדויק (173) ומספר התקיפות (661) שנטענו בידי צבא תימן",
    "ההיקף המדויק של הנזקים שנגרמו לתשתיות בסעודיה בעקבות תקיפות החות'ים האחרונות"
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
     "value": 3.224,
     "unit": "ILS",
     "change_pct": 0.41,
     "source_id": "src_ecb",
     "as_of": "2026-11-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית (שלטון צנעא)",
     "declared": [
      "השגת שליטה על מצר באב אל-מנדב ודרום תימן"
     ],
     "inferred": [
      "כיבוש העיר עדן והפלת הממשלה המוכרת בינלאומית",
      "הפעלת לחץ ישיר על סעודיה באמצעות פגיעה בעומק שטחה",
      "שליטה בנתיבי השיט הבינלאומיים בים האדום ובמפרץ עדן לקבלת מנוף לחץ אזורי"
     ],
     "forecast": [
      "המשך מאמצי התקדמות קרקעיים מואצים לעבר מבואות העיר עדן",
      "החרפת שיגורי הטילים והכטב\"מים נגד תשתיות אנרגיה ובסיסים בסעודיה"
     ]
    },
    {
     "actor": "ממשלת תימן וכוחות הקואליציה בהובלת סעודיה",
     "declared": [
      "בלימת ההתקדמות החות'ית והגנה על הבירה הזמנית עדן",
      "שבירת המצור על העיר תעז"
     ],
     "inferred": [
      "ארגון מחדש של הפיקוד הצבאי לאחר שרשרת כישלונות ונסיגות",
      "צמצום חשיפת הכוחות והתמקדות בהגנה על נכסים חיוניים במקום החזקת קווי חוף מבודדים"
     ],
     "forecast": [
      "קרבות בלימה קשים סביב פריפרית מחוז לחג' והכניסות לעדן",
      "הגברת מעורבות חיל האוויר הסעודי לבלימת שיירות האויב המתקדמות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/17/yemen-army-reports-661-attacks-on-houthis-amid-houthi-push-towards-aden?traffic_source=rss",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/yemens-saudi-backed-forces-retreat-defend-aden-houthis-advance-what-know",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cqvg2xgyvnjpo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/maersk-hapag-lloyd-expand-suez-canal-return-with-three-more-gemini-services/",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/16/saudi-arabia-challenged-yemeni-allies-ceding-ground-houthis",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21865337",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/11/houthis-retake-bab-al-mandeb-and-move-toward-aden.php",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthis-seize-ground-yemen-israeli-strikes-target-lebanon",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155880",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49645",
     "accessed_at": "2026-11-17T03:40:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T00:42:13+00:00",
  "changes": {
   "YEMEN-11170340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "נסיגת כוחות ממשלת תימן והכוחות הדרומיים ממצר באב אל-מנדב וחוף הים האדום",
    "score": 1.0
   },
   "YEMEN-11170340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיגור טילים וכטב\"מים חות'יים לעבר יעדים בסעודיה ובדרום תימן",
    "score": 0.817
   },
   "YEMEN-11170340-03": {
    "kind": "new"
   },
   "YEMEN-11170340-04": {
    "kind": "possible",
    "prev": "שחרור חד-צדדי של שש מאות שבויים על ידי החות'ים",
    "score": 0.467
   },
   "YEMEN-11170340-05": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-17T0040__iran-202611170040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-17T00:40:39+00:00",
   "window": {
    "from": "2026-11-16T00:40:39+00:00",
    "to": "2026-11-17T00:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611170040"
   },
   "summary": "הזירה מאופיינת במתיחות צבאית גבוהה הכוללת פריסה מוגברת של כוחות אמריקניים במרחב לצד חיכוך ימי מתמשך במצר הורמוז הכולל פגיעה במכליות. במקביל, מתנהל עימות מודיעיני ופוליטי סביב תוכניות תקיפה הדדיות ואיומים ישירים על בכירי ממשל בארה\"ב ובסיסים באזור.",
   "fronts": [
    {
     "name": "החזית הימית (מצר הורמוז)",
     "status": "פעילה עם תקיפות מוקשים על מכליות נפט"
    },
    {
     "name": "החזית האמריקנית-איראנית הישירה",
     "status": "מתיחות גבוהה הכוללת תגבור כוחות ותוכניות פגיעה בבכירים"
    },
    {
     "name": "חזית המיליציות והשלוחות",
     "status": "התעצמות ופעילות של שלוחות איראניות בעיראק וביתר הציר השיעי"
    }
   ],
   "events": [
    {
     "id": "IRAN-11170040-01",
     "title": "איומי תוכנית פגיעה בבכירי ממשל אמריקניים",
     "summary": "מודיעין …",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T23:18:40+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T23:18:40+00:00",
     "last_update_at": "2026-11-17T00:28:11+00:00",
     "what_is_not_verified": "האם לאיראן יש יכולת ונכונות להוציא את התוכנית לפועל, והאם חומרים אכן הוסתרו בשטחי ארה\"ב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_cnn",
       "url": "https://www.ynet.co.il/news/article/h17glzfame",
       "published_at": "2026-11-17T00:28:11+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_cnn",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21867715",
       "published_at": "2026-11-16T23:35:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_cnn",
       "url": "https://www.maariv.co.il/breaking-news/article-1389267",
       "published_at": "2026-11-16T23:28:55+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_cnn",
       "url": "https://t.me/alexmehacarmel/49651",
       "published_at": "2026-11-16T23:18:40+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-11170040-02",
     "title": "תקיפת מכליות נפט במצר הורמוז",
     "summary": "מכליות נפט נפגעו ממוקשים ימיים במצר הורמוז, כאשר דווח על מספר תקריות בתוך כיממה ואחת המכליות טבעה או עלתה באש.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T20:38:00+00:00",
     "last_update_at": "2026-11-16T23:57:49+00:00",
     "what_is_not_verified": "היקף הנזק המלא בכלל האירועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_ukmto",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/16/live-houthis-advance-in-yemen-as-tankers-hit-sea-mines-in-strait-of-hormuz?traffic_source=rss",
       "published_at": "2026-11-16T23:57:49+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_ukmto",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-tanker-transiting-strait-hormuz-attacked-near-oman",
       "published_at": "2026-11-16T21:51:17+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_ukmto",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-still-retains-2500-ballistic-missiles-report",
       "published_at": "2026-11-16T21:15:56+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_ukmto",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-tv-tanker-ablaze-after-hitting-mine-strait-hormuz-fourth-24",
       "published_at": "2026-11-16T20:38:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      },
      {
       "name": "ח'סב, עומאן",
       "lat": 26.1841,
       "lon": 56.247
      }
     ]
    },
    {
     "id": "IRAN-11170040-03",
     "title": "הפעלת מערכות הגנה אווירית באספהאן",
     "summary": "מערכות הגנה אוווירית הופעלו בעיר אספהאן שבאיראן בעקבות דיווחים על פעילות חריגה.",
     "axis": "איראן מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T17:59:53+00:00",
     "last_update_at": "2026-11-16T19:56:34+00:00",
     "what_is_not_verified": "זהות הגורם שתקף או הופעל מעל העיר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133756",
       "published_at": "2026-11-16T19:56:34+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-media-air-defence-systems-activated-isfahan",
       "published_at": "2026-11-16T18:00:04+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1389199",
       "published_at": "2026-11-16T17:59:53+00:00"
      }
     ],
     "places": [
      {
       "name": "אספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    },
    {
     "id": "IRAN-11170040-04",
     "title": "כניסת נושאת מטוסים שלישית לאזור",
     "summary": "נושאת המטוסים האמריקנית תיאודור רוזוולט נכנסה לתחום האחריות של פיקוד המרכז, ובכך ישנן שלוש נושאות מטוסים אמריקניות במזרח התיכון.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T06:29:47+00:00",
     "last_update_at": "2026-11-16T21:13:02+00:00",
     "what_is_not_verified": "לא צוין מידע בלתי מאומת בנושא זה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_df5f5ea6e31cad2a",
       "url": "https://www.theguardian.com/us-news/2026/nov/16/aircraft-middle-east-trump-military",
       "published_at": "2026-11-16T21:13:02+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_ae39b0d1e6e52f67",
       "url": "https://www.walla.co.il/news/military/383961578",
       "published_at": "2026-11-16T06:29:47+00:00"
      }
     ],
     "places": [
      {
       "name": "המזרח התיכון",
       "lat": 39.3014,
       "lon": -76.5888
      }
     ]
    }
   ],
   "not_verified": [
    "יכולתה של איראן להוציא לפועל מתקפה רדיואקטיבית או כימית בוושינגטון",
    "האם חומרים מסוכנים אכן הוסתרו בתוך שטח ארה\"ב",
    "קיומו של מזל\"ט אמריקני שהורט מעל אספהאן"
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
     "value": 3.224,
     "unit": "ILS",
     "change_pct": 0.41,
     "source_id": "src_ecb",
     "as_of": "2026-11-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הצבת תנאים לפתיחת מצר הורמוז",
      "הכחשת תוכניות פיגוע בוושינגטון"
     ],
     "inferred": [
      "שימור יכולות הלחימה וארסנל הטילים",
      "שיבוש תנועת הסחר הימי והאנרגיה במפרץ"
     ],
     "forecast": [
      "המשך פעילות שיבוש ימית במצר הורמוז",
      "תגובות נקודתיות באמצעות שלוחות ונכסים צבאיים"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "שמירה על חופש השייט במצר הורמוז באמצעות ליווי ימי",
      "הערכת מצב ביטחונית סביב איומים על בכירים"
     ],
     "inferred": [
      "הרתעת איראן באמצעות תגבור כוחות ונוכחות של שלוש נושאות מטוסים",
      "זהירות מפני היגררות למלחמה כוללת רחבה מדי"
     ],
     "forecast": [
      "המשך נוכחות צבאית מוגברת במרחב",
      "בחינת אפשרויות תגובה במקרה של פגיעה בנכסים אמריקניים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הזהרת העולם מפני האיום הגרעיני והטילים של איראן שאינו נעצר בגבולותיה"
     ],
     "inferred": [
      "שאיפה ללחוץ על ארה\"ב לחידוש הלחימה ותקיפת תשתיות איראניות",
      "חשש מהסכם עתידי בין ארה\"ב לאיראן שיותיר את ישראל במלכוד אסטרטגי"
     ],
     "forecast": [
      "המשך דיונים פנימיים וניסיונות תיאום מול הממשל האמריקני",
      "היערכות לאפשרות של פעילות צבאית עצמאית או בתיאום חלקי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/16/live-houthis-advance-in-yemen-as-tankers-hit-sea-mines-in-strait-of-hormuz?traffic_source=rss",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/nov/16/aircraft-middle-east-trump-military",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21867715",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1389199",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-media-air-defence-systems-activated-isfahan",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133756",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49651",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383961578",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/h17glzfame",
     "accessed_at": "2026-11-17T00:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T07:11:36+00:00",
  "changes": {
   "IRAN-11170040-01": {
    "kind": "new"
   },
   "IRAN-11170040-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "פגיעת מוקשים ימיים בשתי מכליות נפט במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11170040-03": {
    "kind": "new"
   },
   "IRAN-11170040-04": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תגבור כוחות הצי האמריקאי בכניסת נושאת מטוסים שלישית לאזור פיקוד מרכז",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-16T2058__ukraine-202611162058.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-16T20:58:25+00:00",
   "window": {
    "from": "2026-11-15T20:58:25+00:00",
    "to": "2026-11-16T20:58:25+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611162058"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במתכונת של תקיפות אוויריות הדדיות, כולל מתקפות כטב\"מים נרחבות של אוקראינה לעבר עומק רוסיה ופגיעה בתשתיות תחבורה כמו גשר קרים, לצד הפגזות רוסיות על מתקנים אזרחיים ואנרגטיים באוקראינה. במקביל מתנהלים מגעים דיפלומטיים סבוכים וחילוקי דעות סביב השתתפות מעצמות אירופה בשולחן המשא ומתן לצד ארה\"ב, רוסיה ואוקראינה.",
   "fronts": [
    {
     "name": "חזית האוויר והתשתיות",
     "status": "פעילה מאוד עם מתקפות כטב\"מים וטילים הדדיות"
    },
    {
     "name": "חזית זפוריז'יה וקמישוואחה",
     "status": "פעילה עם תקיפות והשלכות הומניטריות קשות"
    },
    {
     "name": "חזית חצי האי קרים וגשר קרים",
     "status": "יעד לתקיפות חוזרות עם שיבושי תחבורה"
    },
    {
     "name": "זירת הים השחור",
     "status": "פעילה מבחינת איומים על ספנות ומסחר"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11162058-01",
     "title": "סגירת שדות תעופה במוסקבה",
     "summary": "שדות התעופה במוסקבה נסגרו להמראות ונחיתות בעקבות מתקפה אוקראינית.",
     "axis": "מתקפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T20:49:47+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T20:49:47+00:00",
     "last_update_at": "2026-11-16T20:49:47+00:00",
     "what_is_not_verified": "היקף הנזק המלא והתוצאות של המתקפה אינם מאומתים ממקור רשמי ישיר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49646",
       "published_at": "2026-11-16T20:49:47+00:00"
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
     "id": "UKRAINE-11162058-02",
     "title": "סיום פעולות חילוץ בקמישוואחה",
     "summary": "הסתיימו פעולות החיפוש וההצלה בעקבות תקיפה קודמת ביישוב קמישוואחה, כאשר מספר ההרוגים עלה ל-72 וארבעה נוספים נעדרים.",
     "axis": "החזית היבשתית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T18:58:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T18:58:00+00:00",
     "last_update_at": "2026-11-16T20:19:40+00:00",
     "what_is_not_verified": "גורלם הסופי של ארבעת הנעדרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_6aefc4bdfd604735",
       "url": "https://kyivindependent.com/komyshuvakha-rescue-operation-cease-two-weeks-after-russian-strike-72-dead-4-still-missing/",
       "published_at": "2026-11-16T20:19:40+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_6768d8706e4a079a",
       "url": "https://www.ukrinform.net/rubric-ato/4185328-search-and-rescue-operations-completed-in-komyshuvakha-death-toll-rises-to-72.html",
       "published_at": "2026-11-16T19:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_d1ca90be52720f59",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/16/8063170/",
       "published_at": "2026-11-16T18:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קמישוואחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11162058-03",
     "title": "חידוש תנועת כלי רכב בגשר קרים",
     "summary": "תנועת כלי הרכב בגשר קרים חודשה חלקית בנתיב יחיד עם זרימה מתחלפת בעקבות תקיפה אוקראינית.",
     "axis": "תשתיות ותחבורה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T12:45:09+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T12:45:09+00:00",
     "last_update_at": "2026-11-16T20:02:01+00:00",
     "what_is_not_verified": "חומרת הנזק המדויקת למבנה הגשר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_2c934115468db41f",
       "url": "https://tass.com/society/2219169",
       "published_at": "2026-11-16T20:02:01+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_128a740dd338da6e",
       "url": "https://meduza.io/en/news/2026/11/16/after-ukraine-s-latest-attack-moscow-calls-damage-to-the-crimean-bridge-insignificant-but-osint-analysts-say-its-main-road-span-is-visibly-deformed",
       "published_at": "2026-11-16T17:58:34+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_2c934115468db41f",
       "url": "https://www.theguardian.com/world/2026/nov/16/ukraine-drone-kerch-bridge-russia-occupied-crimea",
       "published_at": "2026-11-16T12:45:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11162058-04",
     "title": "תקיפה ופציעת אישה בזפוריז'יה",
     "summary": "כוחות רוסיים תקפו את העיר זפוריז'יה, וכתוצאה מכך נפצעה אישה.",
     "axis": "החזית היבשתית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T19:19:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T19:19:00+00:00",
     "last_update_at": "2026-11-16T19:19:00+00:00",
     "what_is_not_verified": "פרטים מלאים על אמצעי הלחימה ששימשו בתקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_4612fc9a02509036",
       "url": "https://www.ukrinform.net/rubric-ato/4185324-russian-forces-attack-zaporizhzhia-woman-injured.html",
       "published_at": "2026-11-16T19:19:00+00:00"
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
     "id": "UKRAINE-11162058-05",
     "title": "נפילת שברי כטב\"ם בקייב",
     "summary": "שברי כטב\"ם רוסי נפלו במחוז דשניאנסקי בקייב וגרמו לשריפה בחצר בניין מגורים, אשר כובתה.",
     "axis": "מתקפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T19:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T19:00:00+00:00",
     "last_update_at": "2026-11-16T19:00:00+00:00",
     "what_is_not_verified": "נזקים נוספים מעבר לשריפה בחצר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_8d4c6614a3a74461",
       "url": "https://www.ukrinform.net/rubric-ato/4185302-drone-attack-fire-extinguished-in-courtyard-of-kyiv-apartment-building.html",
       "published_at": "2026-11-16T19:00:00+00:00"
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
     "id": "UKRAINE-11162058-06",
     "title": "שקיעת אוניית משאת בים השחור",
     "summary": "אוניית משאת טבעה בים השחור בבולגריה בעקבות מתקפת כטב\"ם מדווחת, וכל 12 אנשי הצוות חולצו.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T19:02:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T19:02:57+00:00",
     "last_update_at": "2026-11-16T19:02:57+00:00",
     "what_is_not_verified": "זהות אלגורם האחראי הישיר לשיגור הכטב\"ם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/cargo-ship-sinks-in-bulgarias-black-sea-after-reported-drone-attack-all-12-crew-rescued/",
       "published_at": "2026-11-16T19:02:57+00:00"
      }
     ],
     "places": [
      {
       "name": "הים השחור, בולגריה",
       "lat": 42.7088,
       "lon": 27.7186
      }
     ]
    }
   ],
   "not_verified": [
    "{'string': 'טענות על שימוש של כטב\"מים אוקראיניים במסופי תקשורת ישראליים ולוויינים זרים.'}",
    "{'string': 'היקף הנזק המדויק בגשר קרים בעקבות התקיפה האחרונה.'}",
    "{'string': 'ההסכמות המדויקות סביב פורמט השיחות העתידיות והשתתפות אירופה בהן.'}"
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
     "value": 1.1014,
     "unit": "USD",
     "change_pct": -0.34,
     "source_id": "src_ecb",
     "as_of": "2026-11-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "להשיג סיום מכובד למלחמה והבטחת ביטחון למדינה",
      "לפגוע ביכולות האנרגיה והתשתיות של רוסיה כתגובה ללחימה",
      "להסיר מגבלות על שירותי לווין לפעילות הגנה"
     ],
     "inferred": [
      "שחיקת הכלכלה ומערך האנרגיה הרוסי באמצעות מתקפות עומק",
      "שמירת מעורבות אירופית ואמריקאית איתנה במערכה המדינית והצבאית"
     ],
     "forecast": [
      "המשך מאמצים לשימוש בכטב\"מים מתקדמים נגד תשתיות עורפיות ברוסיה",
      "הגברת הלחץ הדיפלומטי לשילוב נציגים אירופיים בשיחות השלום"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך הגנה על שטחים כבושים ושיתוף פעולה צבאי",
      "דחיית מעורבות אירופית לא מתואמת בשיחות השלום"
     ],
     "inferred": [
      "פגיעה שיטתית במערך החשמל והאנרגיה האוקראיני כדי לשבור את העורף לקראת החורף",
      "ניסיון לנהל משא ומתן ישירות מול ארה\"ב בתנאים שלה"
     ],
     "forecast": [
      "הגנה אווירית מוגברת סביב מתקנים קריטיים ומוסקבה",
      "המשך תקיפות על רשת החשמל והתשתיות האוקראיניות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/16/ukraine-drone-kerch-bridge-russia-occupied-crimea",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/cargo-ship-sinks-in-bulgarias-black-sea-after-reported-drone-attack-all-12-crew-rescued/",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/16/after-ukraine-s-latest-attack-moscow-calls-damage-to-the-crimean-bridge-insignificant-but-osint-analysts-say-its-main-road-span-is-visibly-deformed",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/16/8063170/",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/society/2219169",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49646",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4185302-drone-attack-fire-extinguished-in-courtyard-of-kyiv-apartment-building.html",
     "accessed_at": "2026-11-16T20:58:25+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T00:40:35+00:00",
  "changes": {
   "UKRAINE-11162058-01": {
    "kind": "new"
   },
   "UKRAINE-11162058-02": {
    "kind": "new"
   },
   "UKRAINE-11162058-03": {
    "kind": "new"
   },
   "UKRAINE-11162058-04": {
    "kind": "new"
   },
   "UKRAINE-11162058-05": {
    "kind": "possible",
    "prev": "דיפלומטים מערביים נשארים בקייב חרף איומי רוסיה והתגברות התקיפות",
    "score": 0.633
   },
   "UKRAINE-11162058-06": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-17T1122__north-202611171122.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-17T11:22:23+00:00",
   "window": {
    "from": "2026-11-16T11:22:23+00:00",
    "to": "2026-11-17T11:22:23+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611171122"
   },
   "summary": "בזזרה הצפונית מתנהלת פעילות צבאית עצימה הכוללת תקיפות ארטילריות ואוויריות של צה\"ל בדרום לבנון ובבקעת הלבנון כנגד תשתיות ומשלוחי נשק של חיזבאללה, לצד פעילות קרקעית נקודתית ומעצרים גם באזור הגבול עם סוריה. ישראל שומרת על לחץ צבאי גבוה במקביל למאמצים דיפלומטיים בינלאומיים בנוגע להסדרים עתידיים בגבול לבנון. חיזבאללה ממשיך במקביל במאמצי שיקום והתעצמות חשאית.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעיל"
    },
    {
     "name": "החזית הסורית",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "NORTH-11171122-01",
     "title": "תקיפה ארטילרית ישראלית בדרום לבנון",
     "summary": "בוצע ירי ארטילרי ישראלי במספר אזורים בדרום לבנון, בהם האזור שבין חדאת'א לחריס, וואדי אל-סלוקי, וואדי אל-חג'ייר ונהר זוחר.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T08:12:23+00:00",
     "last_update_at": "2026-11-17T10:27:02+00:00",
     "what_is_not_verified": "היקף הנזק המדויק אינו מפורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_0e447213cf7e1376",
       "url": "https://english.almanar.com.lb/article/151857/",
       "published_at": "2026-11-17T10:27:02+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_0e447213cf7e1376",
       "url": "https://english.almanar.com.lb/article/151737/",
       "published_at": "2026-11-17T08:12:23+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.165,
       "lon": 35.3916
      },
      {
       "name": "חריס, לבנון",
       "lat": 33.1768,
       "lon": 35.3799
      }
     ]
    },
    {
     "id": "NORTH-11171122-02",
     "title": "פעילות כטב\"מים ישראליים מעל ביירות",
     "summary": "דווח על פעילות כלי טיס בלתי מאוישים של ישראל מעל פרוורי הדרום של ביירות (הדאחיה).",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T10:10:43+00:00",
     "last_update_at": "2026-11-17T10:10:43+00:00",
     "what_is_not_verified": "מטרת הפעילות הספציפית מעל האזור אינה מפורטת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_1e9bba5973c31e45",
       "url": "https://english.almanar.com.lb/article/151847/",
       "published_at": "2026-11-17T10:10:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11171122-03",
     "title": "התפנות תושבים בכפר כויא בדרום סוריה",
     "summary": "תושבים מקומיים בכפר כויא במחוז דרעא התפנו בעקבות פעילות כוחות צה\"ל וירי שביצעו הכוחות בלילה, תוך חסימת דרכי גישה באבנים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T09:03:24+00:00",
     "last_update_at": "2026-11-17T09:03:24+00:00",
     "what_is_not_verified": "המידע מבוסס על דיווחים מקומיים וכלי תקשורת סורים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133776",
       "published_at": "2026-11-17T09:03:24+00:00"
      }
     ],
     "places": [
      {
       "name": "כויא, סוריה",
       "lat": 32.7478,
       "lon": 35.8281
      }
     ]
    },
    {
     "id": "NORTH-11171122-04",
     "title": "פשיטה וכניסת כוחות צה\"ל לכפר מעריה בדרום סוריה",
     "summary": "כוחות צה\"ל, הכוללים כלים צבאיים, נכנסו לכפר מעריה בדרום סוריה, ביצעו פשיטות על בתים וירי ארטילרי לעבר שטחים חקלאיים סמוכים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T01:51:59+00:00",
     "last_update_at": "2026-11-17T01:51:59+00:00",
     "what_is_not_verified": "פרטים מלאים על נפגעים או ממצאים בפשיטה אינם ידועים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-troops-fire-on-homes-beat-elderly-man-in-southern-syria/4127208",
       "published_at": "2026-11-17T01:51:59+00:00"
      }
     ],
     "places": [
      {
       "name": "מעריה, סוריה",
       "lat": 32.7646,
       "lon": 35.7994
      }
     ]
    },
    {
     "id": "NORTH-11171122-05",
     "title": "מעצר שני אחים מהכפר שבעא על ידי צה\"ל",
     "summary": "כוחות צה\"ל (חטיבה 810) עצרו שני אחים, פעילי הפלוגות הלבנוניות הפועלות בהכוונת חיזבאללה, במהלך פעילות בכפר שבעא בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T14:33:28+00:00",
     "last_update_at": "2026-11-16T15:02:00+00:00",
     "what_is_not_verified": "לא ידועים פרטים מלאים על תוצאות חקירת העצורים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968277/netanyahus-government-maintains-military-pressure-as-israel-faces-inte/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968277",
       "published_at": "2026-11-16T15:02:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133733",
       "published_at": "2026-11-16T14:47:35+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25620",
       "published_at": "2026-11-16T14:33:28+00:00"
      }
     ],
     "places": [
      {
       "name": "שבעא, לבנון",
       "lat": 33.3445,
       "lon": 35.7494
      }
     ]
    },
    {
     "id": "NORTH-11171122-06",
     "title": "תקיפה אווירית ישראלית באזור בקעת הלבנון המזרחית",
     "summary": "חיל האוויר הישראלי תקף אזור מבודד באזור אל-שערא - ג'נתא בבקעת הלבנון המזרחית, במסגרת פעולה נגד משלוח אמצעי לחימה המיועד לחיזבאללה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T10:26:00+00:00",
     "last_update_at": "2026-11-16T15:52:21+00:00",
     "what_is_not_verified": "יש דיווחים סותרים על מספר ההרוגים (אין אישור רשמי לנפגעים).",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-seize-ground-yemen-israeli-strikes-target-lebanon",
       "published_at": "2026-11-16T15:52:21+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968277/netanyahus-government-maintains-military-pressure-as-israel-faces-inte/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968277",
       "published_at": "2026-11-16T15:02:00+00:00"
      },
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/the-idf-struck-a-hezbollah-weapons-shipment-that-crossed-the-border-from-syria-into-lebanon/",
       "published_at": "2026-11-16T10:26:00+00:00"
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
    "מספר הנפגעים המדויק בתקיפה באזור ג'נתא בבקעת הלבנון",
    "היקף הנזק המלא בכפרים כויא ומעריה בדרום סוריה",
    "פרטים מלאים על תוכן המידע שהושחת או פוענח ממכשירי הטלפון של פעילי חיזבאללה העצורים"
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
     "value": 3.224,
     "unit": "ILS",
     "change_pct": 0.41,
     "source_id": "src_ecb",
     "as_of": "2026-11-16T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הסרת כל איום על אזרחי מדינת ישראל",
      "פעילות ממוקד נגד ארגון הטרור חיזבאללה"
     ],
     "inferred": [
      "סיכול הברחות אמצעי לחימה מלבנון ומסוריה",
      "שמירת חופש פעולה צבאי ומניעת התעצמות מחדש של חיזבאללה מעבר לקו האבטחה"
     ],
     "forecast": [
      "המשך התקיפות נגד נסיונות הברחה ושיקום יכולות של חיזבאללה",
      "שמירת נוכחות ולחץ צבאי בגבול סוריה ולבנון"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "התעצמות מחודשת ושיקום יכולות צבאיות ואמצעי לחימה (כגון רחפנים ורקטות)",
      "שימוש בנתיבי הברחה דרך סוריה והקמת יכולות ייצור מקומיות"
     ],
     "forecast": [
      "המשך מאמצי ההצטיידויות וההברחה חרף התקיפות הישראליות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/the-idf-struck-a-hezbollah-weapons-shipment-that-crossed-the-border-from-syria-into-lebanon/",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/151847/",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-troops-fire-on-homes-beat-elderly-man-in-southern-syria/4127208",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968277/netanyahus-government-maintains-military-pressure-as-israel-faces-inte/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968277",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthis-seize-ground-yemen-israeli-strikes-target-lebanon",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133733",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25620",
     "accessed_at": "2026-11-17T11:22:23+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T21:10:57+00:00",
  "changes": {
   "NORTH-11171122-01": {
    "kind": "possible",
    "prev": "תקיפות והפגזות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11171122-02": {
    "kind": "new"
   },
   "NORTH-11171122-03": {
    "kind": "new"
   },
   "NORTH-11171122-04": {
    "kind": "new"
   },
   "NORTH-11171122-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "מעצר פעילים בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11171122-06": {
    "kind": "possible",
    "prev": "תקיפת אמצעי לחימה בגבול סוריה-לבנון",
    "score": 0.4
   }
  }
 }
};
