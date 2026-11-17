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
  "draft": "drafts/iran/2026-11-17T1920__iran-202611171920.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-17T19:20:31+00:00",
   "window": {
    "from": "2026-11-16T19:20:31+00:00",
    "to": "2026-11-17T19:20:31+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611171920"
   },
   "summary": "העימות הצבאי הישיר והעקיף בין ארצות הברית וישראל לבין איראן ושלוחותיה ממשיך להסלים, במקביל למבוי סתום לאחר חודשי לחימה ממושכים. הזירה מתאפיינת בחילופי מהלומות ישירים של תקיפות אוויריות ושיגורי כטב\"מים באזור המפרץ, פגיעה בספנות ובצינורות נפט, לצד עיבוי כוחות ימיים אמריקאיים חסר תקדים. במקביל, המאמצים המודיעיניים והסיכוליים מתרחבים אל מחוץ למזרח התיכון תוך החלפת איומים על שימוש בנשק בלתי קונבנציונלי.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "פעילה - חילופי תקיפות בין כוחות ארה\"ב לאיראן ופגיעה בספנות מסחרית"
    },
    {
     "name": "החזית הישראלית-איראנית (סיכול בינלאומי והיערכות לתקיפה)",
     "status": "מתוחה - היערכות לפעולות עומק וסיכול מזימות טרור בחו\"ל"
    },
    {
     "name": "שלוחות איראן בעיראק ובתימן",
     "status": "פעילה - שיגורים של החות'ים לעבר יעדי תשתית סעודיים וסירוב מיליציות עיראקיות לסגת ממוקדי אחיזה"
    }
   ],
   "events": [
    {
     "id": "IRAN-11171920-01",
     "title": "פגיעה במכלית גז במצר הורמוז",
     "summary": "מכלית להובלת גז עלתה באש וצוותה נטש אותה לאחר שנפגעה מעצם ששוגר לעברה בעת ששטה במצר הורמוז.",
     "axis": "איראן - ארה\"ב / ספנות במפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T18:20:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:20:59+00:00",
     "last_update_at": "2026-11-17T18:20:59+00:00",
     "what_is_not_verified": "זהות המשגר או סוג העצם שפגע בכלי השיט לא אומתו באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/17/inferno-engulfs-gas-tanker-in-strait-of-hormuz-after-reported-strike-video",
       "published_at": "2026-11-17T18:20:59+00:00"
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
     "id": "IRAN-11171920-02",
     "title": "שיגור כטב\"מים איראניים לבסיס אמריקאי בבחריין ותקיפת תגובה באי קשם",
     "summary": "משמרות המהפכה שיגרו כלי טיס בלתי מאוישים לעבר מתקן או בסיס של צבא ארה\"ב בבחריין, ובתגובה תקפה ארה\"ב מערכות הגנה באי קשם בדרום איראן.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T15:42:47+00:00",
     "last_update_at": "2026-11-17T17:29:02+00:00",
     "what_is_not_verified": "מידת הנזק, תוצאות היירוט ודיווחים על היקף התקיפה בקשם נסמכים על מקורות המזוהים עם הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611177708",
       "published_at": "2026-11-17T17:29:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133808",
       "published_at": "2026-11-17T15:42:47+00:00"
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
     "id": "IRAN-11171920-03",
     "title": "סיכול מזימה לפגיעה באיש עסקים ישראלי ביוון",
     "summary": "רשויות הביטחון ביוון ובצפון מקדוניה עצרו חוליה הקשורה לרשת פשיעה הפועלת בשירות איראן, במטרה לפגוע באיש עסקים ישראלי.",
     "axis": "ישראל - איראן (חו\"ל)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T13:32:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T13:32:43+00:00",
     "last_update_at": "2026-11-17T18:36:24+00:00",
     "what_is_not_verified": "פרטי החקירה המלאים וזהות כלל המעורבים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkghwzqagx",
       "published_at": "2026-11-17T18:36:24+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21867113",
       "published_at": "2026-11-17T13:32:43+00:00"
      }
     ],
     "places": [
      {
       "name": "אתונה, יוון",
       "lat": 37.9756,
       "lon": 23.7348
      }
     ]
    },
    {
     "id": "IRAN-11171920-04",
     "title": "שיגור כטב\"מים של החות'ים לעבר קו צינור הנפט מזרח-מערב בסעודיה",
     "summary": "תנועת החות'ים בתימן הודיעה כי שיגרה חמישה כלי טיס בלתי מאוישים לעבר שתי תחנות שאיבה של צינור הנפט באזור ריאד.",
     "axis": "החות'ים - סעודיה / איראן - המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:05:25+00:00",
     "last_update_at": "2026-11-17T18:05:25+00:00",
     "what_is_not_verified": "לא התקבל אישור רשמי מצד סעודיה על פגיעה או עצם השיגור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-launched-drones-towards-saudi-east-west-pipeline",
       "published_at": "2026-11-17T18:05:25+00:00"
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
     "id": "IRAN-11171920-05",
     "title": "הגעת נושאת מטוסים אמריקאית שלישית למזרח התיכון",
     "summary": "פיקוד המרכז של ארה\"ב פרסם על הגעת נושאת המטוסים תיאודור רוזוולט לצד ג'ורג' וושינגטון, כחלק מעיבוי הכוחות וההרתעה באזור.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T21:13:02+00:00",
     "last_update_at": "2026-11-17T17:09:12+00:00",
     "what_is_not_verified": "אין פרטים בלתי מאומתים לגבי עצם פריסת הכוחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133813",
       "published_at": "2026-11-17T17:09:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/nov/16/aircraft-middle-east-trump-military",
       "published_at": "2026-11-16T21:13:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11171920-06",
     "title": "דיווחים אמריקאיים על תוכנית איראנית לפגיעה בבכירים באמצעות פצצה מלוכלכת והכחשה איראנית",
     "summary": "בארה\"ב נבדק מידע מודיעיני שלפיו איראן בוחנת מזימה לפגוע בבכירים בוושינגטון בנשק כימי או פצצה מלוכלכת, בעוד יו\"ר הפרלמנט האיראני דחה את הטענות כתעמולה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T23:18:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T23:18:40+00:00",
     "last_update_at": "2026-11-17T17:53:45+00:00",
     "what_is_not_verified": "במערכת המודיעין האמריקאית קיימים ספקות ומחלוקות באשר לאמינות המידע וליכולת הביצוע של איראן; הבית הלבן ציין כי אין איום אמין כעת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86325040/Ghalibaf-slams-US-dirty-bomb-allegations-as-fresh-anti-Iran",
       "published_at": "2026-11-17T17:53:45+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/trump-reported-iranian-plot-dirty-bomb-washington",
       "published_at": "2026-11-17T16:03:34+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21873039",
       "published_at": "2026-11-17T14:20:12+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49651",
       "published_at": "2026-11-16T23:18:40+00:00"
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
     "id": "IRAN-11171920-07",
     "title": "סירוב גדודי חזבאללה בעיראק לסגת מג'ורף א-סח'ר",
     "summary": "המיליציה הפרו-איראנית גדודי חזבאללה דחתה את האולטימטום של ראש ממשלת עיראק להתפנות ממעוזה מדרום לבגדאד בעקבות טענות להברחת נפט.",
     "axis": "המיליציות בעיראק - ארה\"ב / ממשלת עיראק",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T18:33:36+00:00",
     "last_update_at": "2026-11-17T18:33:36+00:00",
     "what_is_not_verified": "לא אומתו טענות הממשלה בדבר הברחות הנפט מתוך האזור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-backed-iraqi-group-refuses-withdraw-stronghold-kataeb-hezbollahiran",
       "published_at": "2026-11-17T18:33:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11171920-08",
     "title": "טענה להפלת כטב\"ם אמריקאי במצר הורמוז",
     "summary": "מערכות ההגנה האווירית של איראן יירטו והפילו כלי טיס בלתי מאויש של ארה\"ב בסמוך למצר הורמוז.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T12:51:19+00:00",
     "last_update_at": "2026-11-17T12:51:19+00:00",
     "what_is_not_verified": "ההפלה נמסרה בערוץ דיווחים ואין עליה אישור אמריקאי רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95053",
       "published_at": "2026-11-17T12:51:19+00:00"
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
    "טענות המודיעין האמריקאי בדבר כוונת איראן להפעיל פצצה מלוכלכת או נשק כימי בשטח ארה\"ב",
    "הדיווח על הפלת כטב\"ם אמריקאי מדגם לוקאס מעל מצר הורמוז",
    "הטענה לשימוש אמריקאי בפצצות גרפיט לפגיעה בתשתיות חשמל באיראן",
    "תוצאות הפגיעה בצינור הנפט הסעודי מזרח-מערב על ידי כטב\"מים חות'יים"
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
     "value": 3.2463,
     "unit": "ILS",
     "change_pct": 0.69,
     "source_id": "src_ecb",
     "as_of": "2026-11-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "שמירה על מוכנות מלאה להגנה על המדינה והביטחון הלאומי",
      "הכחשת מעורבות בתוכניות לפיגועי פצצה מלוכלכת בארה\"ב"
     ],
     "inferred": [
      "שימור יכולת התשה ארוכת טווח נגד כוחות ארה\"ב וישראל",
      "שיבוש נתיבי השיט והאנרגיה הבינלאומיים במפרץ לגביית מחיר כלכלי מהמערב"
     ],
     "forecast": [
      "המשך שימוש מבוקר בכטב\"מים ומיליציות אזוריות לצד הימנעות מהתנגשות חזיתית כוללת"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "אזהרה מפני פגיעה ביעדים אמריקאיים ואיום בהשמדה בתגובה לתקיפה ישירה",
      "בדיקת איומים מודיעיניים על כוונות פיגוע בוושינגטון"
     ],
     "inferred": [
      "הפגנת עוצמה והרתעה באמצעות פריסת נושאות מטוסים נוספות ללא היגררות למלחמה ממושכת",
      "בלימת הפעילות הצבאית וההברחות של שלוחות איראן בעיראק ובאזור"
     ],
     "forecast": [
      "שמירה על נוכחות צבאית מוגברת ותקיפות נקודתיות של מתקני שיגור והגנה איראניים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "אזהרה מפני מוטיבציה איראנית גבוהה לפגוע ביעדים ישראליים בחו\"ל"
     ],
     "inferred": [
      "שאיפה לתיאום מבצעי מלא וגיבוי אמריקאי לקראת מהלומה צבאית משמעותית באיראן",
      "סיכול מתמשך של רשתות טרור וחיסול איראניות בזירה הבינלאומית"
     ],
     "forecast": [
      "דחיית פעולה צבאית גלויה עצמאית עד להשגת תיאום מרבי עם כוחות ארה\"ב באזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/17/trump-reported-iranian-plot-dirty-bomb-washington",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611177708",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86325040/Ghalibaf-slams-US-dirty-bomb-allegations-as-fresh-anti-Iran",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21873039",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-backed-iraqi-group-refuses-withdraw-stronghold-kataeb-hezbollahiran",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133813",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49651",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95053",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkghwzqagx",
     "accessed_at": "2026-11-17T19:20:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T00:40:39+00:00",
  "changes": {
   "IRAN-11171920-01": {
    "kind": "new"
   },
   "IRAN-11171920-02": {
    "kind": "new"
   },
   "IRAN-11171920-03": {
    "kind": "new"
   },
   "IRAN-11171920-04": {
    "kind": "new"
   },
   "IRAN-11171920-05": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "כניסת נושאת מטוסים שלישית לאזור",
    "score": 1.0
   },
   "IRAN-11171920-06": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "איומי תוכנית פגיעה בבכירי ממשל אמריקניים",
    "score": 1.0
   },
   "IRAN-11171920-07": {
    "kind": "new"
   },
   "IRAN-11171920-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת מכליות נפט במצר הורמוז",
    "score": 0.817
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-17T1930__ukraine-202611171930.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-17T19:30:52+00:00",
   "window": {
    "from": "2026-11-16T19:30:52+00:00",
    "to": "2026-11-17T19:30:52+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611171930"
   },
   "summary": "העימות בין רוסיה לאוקראינה הסלים עם מתקפה אוקראינית מוצלחת שגרמה להרס מקטע מגשר קרים, לצד מתקפות טילים בליסטיים וכטב\"מים רוסיות מסיביות שפגעו בגשרים בקייב ובאתרים אזרחיים, וחלקן אף גלשו למרחב האווירי של מולדובה. במקביל לתקיפות ההדדיות בעומק השטח, מדינות אירופה מגבירות את הסיוע הצבאי והתעשייתי לאוקראינה חרף ביקורת אמריקאית על תקיפות בעומק רוסיה, ורוסיה מקדמת צעדי חקיקה להרחבת גיוס נשים בשל מצוקת כוח אדם בחזית.",
   "fronts": [
    {
     "name": "חצי האי קרים ומצר קרץ'",
     "status": "הסלמה עקב תקיפה קשה על גשר קרים, קריסת מקטעים וחסימת שיט"
    },
    {
     "name": "מרחב קייב",
     "status": "ספיגת תקיפות טילים בליסטיים מסיביות נגד תשתיות תחבורה וגשרים"
    },
    {
     "name": "גבול אוקראינה-מולדובה",
     "status": "דריכות ביטחונית וסגירת מעברים בעקבות חדירת כטב\"מים רוסיים והתרסקותם"
    },
    {
     "name": "ויניצה",
     "status": "תקיפות אוויריות רוסיות חוזרות שפוגעות במרכז העיר"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11171930-01",
     "title": "תקיפה אוקראינית משמעותית על גשר קרים והקרסת מקטע ממנו",
     "summary": "כוחות אוקראינה ביצעו מתקפה רב-שלבית באמצעות טילים וכטב\"מים שהביאה לפגיעה קשה ולהתמוטטות מקטע מקשת גשר הכביש של גשר קרים, וכן לפגיעה במקטע הרכבת וחסימת נתיב השיט במצר קרץ'.",
     "axis": "חצי האי קרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T08:59:47+00:00",
     "last_update_at": "2026-11-17T19:20:42+00:00",
     "what_is_not_verified": "סוגי החימוש המדויקים (האם טילי פלמינגו, כטב\"מים או שילוב), היקף ההרס המדויק בגשר הרכבת, וטענות על אישור אמריקאי מוקדם לתקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-entire-section-of-crimean-bridge-collapses-after-seven-phase-operation-zelensky-reveals/",
       "published_at": "2026-11-17T19:20:42+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49681",
       "published_at": "2026-11-17T19:14:12+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4185747-strike-on-kerch-bridge-marks-another-impressive-success-for-ukraine-austrian-colonel.html",
       "published_at": "2026-11-17T18:05:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/17/ukraine-releases-footage-of-strike-on-crimean-bridge-video",
       "published_at": "2026-11-17T17:48:38+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/how-ukraine-struck-kerch-bridge-symbol-vladimir-putin-rule",
       "published_at": "2026-11-17T17:30:40+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T17:19:57+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw772jk4rvmxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T16:56:38+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/ukraine-kerch-bridge-attack-russia-crimea-analysis",
       "published_at": "2026-11-17T16:40:26+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49672",
       "published_at": "2026-11-17T16:18:42+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/crz9dgz28zwdo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T15:38:10+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133773",
       "published_at": "2026-11-17T08:59:47+00:00"
      }
     ],
     "places": [
      {
       "name": "גשר קרים, חצי האי קרים",
       "lat": 45.2786,
       "lon": 36.5393
      },
      {
       "name": "מצר קרץ', חצי האי קרים",
       "lat": 45.281,
       "lon": 36.5492
      }
     ]
    },
    {
     "id": "UKRAINE-11171930-02",
     "title": "מתקפת טילים בליסטיים רוסית על גשרים בקייב",
     "summary": "רוסיה שיגרה מתקפת טילים בליסטיים רחבת היקף על אוקראינה, במסגרתה נפגעו שני גשרים מרכזיים בקייב, כולל גשר סברני שהתנועה עליו הוגבלה.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T17:19:57+00:00",
     "last_update_at": "2026-11-17T19:20:42+00:00",
     "what_is_not_verified": "מידת הנזק המבני המלא לשני הגשרים ומספר הנפגעים במתקפה בקייב.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-entire-section-of-crimean-bridge-collapses-after-seven-phase-operation-zelensky-reveals/",
       "published_at": "2026-11-17T19:20:42+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2219917",
       "published_at": "2026-11-17T19:01:04+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T17:19:57+00:00"
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
     "id": "UKRAINE-11171930-03",
     "title": "חדירת כטב\"מים רוסיים למרחב האווירי של מולדובה וסגירת מעברי גבול",
     "summary": "שבעה כלי טיס בלתי מאוישים רוסיים חדרו למרחב האווירי של מולדובה במהלך תקיפה על אוקראינה; חלקם התרסקו בשטחה ואחד נצפה מעל עיר הבירה קישינב, מה שהוביל לסגירה זמנית של המרחב האווירי ושישה מעברי גבול.",
     "axis": "מולדובה - גבול אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:00:00+00:00",
     "last_update_at": "2026-11-17T18:37:20+00:00",
     "what_is_not_verified": "מיקום ההתרסקות של כלי הטיס השישי והשביעי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/7-drones-cross-into-moldovan-airspace-during-latest-russian-attack-against-ukraine-1-spotted-over-chisinau/",
       "published_at": "2026-11-17T18:37:20+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063339/",
       "published_at": "2026-11-17T18:36:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063332/",
       "published_at": "2026-11-17T18:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קישינב, מולדובה",
       "lat": 47.0245,
       "lon": 28.8323
      },
      {
       "name": "קלטיטורי, מולדובה",
       "lat": 47.0658,
       "lon": 28.9271
      }
     ]
    },
    {
     "id": "UKRAINE-11171930-04",
     "title": "תקיפה רוסית שנייה באותו יום על ויניצה",
     "summary": "רוסיה תקפה את מרכז העיר ויניצה בפעם השנייה בתוך יממה, גרמה לשריפה במבנה ולפציעת ארבעה בני אדם מטראומה אקוסטית והלם.",
     "axis": "ויניצה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:01:00+00:00",
     "last_update_at": "2026-11-17T18:01:00+00:00",
     "what_is_not_verified": "סוג החימוש שפגע במבנה בויניצה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063333/",
       "published_at": "2026-11-17T18:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ויניצה, אוקראינה",
       "lat": 49.232,
       "lon": 28.468
      }
     ]
    },
    {
     "id": "UKRAINE-11171930-05",
     "title": "אישור נוכחות חיילים צרפתים באוקראינה ותגובת רוסיה",
     "summary": "דוברת צבא צרפת אישרה כי כוחות צרפתיים שוהים באוקראינה לצורכי אימון ותיקון ציוד הרחק מקו החזית, בעוד שרוסיה הכריזה כי מדובר במעורבות ישירה במלחמה וכי הם מהווים מטרות לגיטימיות.",
     "axis": "הזירה הבינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T18:56:30+00:00",
     "last_update_at": "2026-11-17T18:56:30+00:00",
     "what_is_not_verified": "מספר החיילים הצרפתים המדויק ומיקומם הספציפי בתוך אוקראינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/17/france-confirms-its-troops-are-in-ukraine-russia-says-they-are-legitimate-targets",
       "published_at": "2026-11-17T18:56:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-06",
     "title": "מימון גרמני ונורווגי לרכש נשק אמריקאי עבור אוקראינה",
     "summary": "גרמניה ונורווגיה ישקיעו 300 מיליון דולר כל אחת במימון חבילת נשק אמריקאי חדשה לאוקראינה במסגרת יוזמת PURL.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T19:05:00+00:00",
     "last_update_at": "2026-11-17T19:05:00+00:00",
     "what_is_not_verified": "פירוט מערכות הנשק המדויקות בחבילת הרכש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4185771-germany-norway-to-contribute-300m-each-toward-us-arms-purchases-for-ukraine-pistorius.html",
       "published_at": "2026-11-17T19:05:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-07",
     "title": "אספקת מכ\"מים גרמניים עבור מערכת ההגנה האווירית פרייה",
     "summary": "גרמניה הודיעה כי תספק לאוקראינה מכ\"מים בעלי ביצועים גבוהים שישמשו רכיב מפתח במערכת ההגנה העתידית נגד טילים בליסטיים מדגם פרייה.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T18:34:00+00:00",
     "last_update_at": "2026-11-17T18:34:00+00:00",
     "what_is_not_verified": "לוח הזמנים לאספקת המכ\"מים ומועד פריסת המערכת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4185759-germany-to-supply-ukraine-with-new-radars-for-future-freyja-air-defense-system-pistorius.html",
       "published_at": "2026-11-17T18:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-08",
     "title": "הסכם לייצור נשק משותף בין פינלנד לאוקראינה",
     "summary": "… ומערכות נשק בשטח פינלנד, המשלב ניסיון מבצעי אוקראיני ויכולות תעשייתיות פיניות.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T16:27:43+00:00",
     "last_update_at": "2026-11-17T16:27:43+00:00",
     "what_is_not_verified": "אילו מערכות נשק ספציפיות ייוצרו במסגרת שיתוף הפעולה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49673",
       "published_at": "2026-11-17T16:27:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-09",
     "title": "העלאת גיל השירות הצבאי לנשים ברוסיה",
     "summary": "הדומה הרוסית אישרה בקריאה ראשונה הצעת חוק להעלאת גיל הפטור משירות לנשים מ-45 ל-50, וגיל המילואים עד 55 לקצינות, על רקע מחסור בכוח אדם ביחידות הלוחמות והרפואיות.",
     "axis": "מדיניות פנים ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T16:15:22+00:00",
     "last_update_at": "2026-11-17T16:15:22+00:00",
     "what_is_not_verified": "המועד הסופי לאישור החוק והשפעתו המספרית על שורות הצבא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/17/russia-moves-to-raise-military-service-age-limit-for-women-amid-troop-shortages",
       "published_at": "2026-11-17T16:15:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11171930-10",
     "title": "נחיתת פוטין בסין לקראת פסגה משולשת",
     "summary": "נשיא רוסיה פוטין נחת בסין לקראת השתתפות בפסגה משולשת מתוכננת עם נשיא סין ונשיא ארה\"ב טראמפ בשנג'ן.",
     "axis": "משא ומתן ומגעים דיפלומטיים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T16:40:26+00:00",
     "last_update_at": "2026-11-17T19:16:36+00:00",
     "what_is_not_verified": "סדר היום המדויק של הפסגה והאם המלחמה באוקראינה תעמוד במוקד הדיונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133819",
       "published_at": "2026-11-17T19:16:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/17/ukraine-kerch-bridge-attack-russia-crimea-analysis",
       "published_at": "2026-11-17T16:40:26+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    }
   ],
   "not_verified": [
    "טענת מקור רוסי על אישור אמריקאי מוקדם לתקיפת גשר קרים בתגובה למתקפות סייבר",
    "מספר האבדות המדויק של כוחות רוסיה ואוקראינה במהלך חודש אוקטובר",
    "היקף הנזק המלא והשבתת תנועת הרכבות בגשר קרים",
    "דיווח על שריפה במתחם פטרוכימי בבשקורטוסטאן"
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
     "value": 1.0989,
     "unit": "USD",
     "change_pct": -0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "פגיעה במשגרי טילים בליסטיים רוסיים וצפון קוריאניים",
      "הסרת מגבלות תקשורת הלוויינים סטרשילד בשטחים הכבושים",
      "השגת 40 מטוסי F-16 נוספים ותקציב סיוע מאירופה"
     ],
     "inferred": [
      "ניתוק נתיבי האספקה הלוגיסטיים של צבא רוסיה לחצי האי קרים",
      "יצירת מנוף לחץ ומבוכה פוליטית לרוסיה לקראת פסגות בינלאומיות"
     ],
     "forecast": [
      "המשך ניסיונות לפגוע במסדרון היבשתי בדרום אוקראינה ובצירי אספקה לקרים",
      "הגברת הלחץ הדיפלומטי על מדינות המערב לאספקת מערכות הגנה אווירית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בכוחות צרפתיים באוקראינה כיעדים לגיטימיים",
      "טענה כי חימוש אוקראינה רק מאריך את משך העימות"
     ],
     "inferred": [
      "פגיעה שיטתית בתשתיות הגשרים והתחבורה של אוקראינה בקייב ובערים מרכזיות",
      "השלמת פערי כוח אדם בחזית באמצעות הרחבת חובת הגיוס והמילואים לנשים"
     ],
     "forecast": [
      "תקיפות תגובה נרחבות נגד תשתיות אסטרטגיות באוקראינה בעקבות הפגיעה בגשר קרים",
      "המשך שימוש בנתיבי טיסה סמוכים למולדובה לשיבוש מערכי ההגנה של אוקראינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/17/ukraine-kerch-bridge-attack-russia-crimea-analysis",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/7-drones-cross-into-moldovan-airspace-during-latest-russian-attack-against-ukraine-1-spotted-over-chisinau/",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/17/russia-moves-to-raise-military-service-age-limit-for-women-amid-troop-shortages",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/17/8063333/",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2219917",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133819",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49673",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4185759-germany-to-supply-ukraine-with-new-radars-for-future-freyja-air-defense-system-pistorius.html",
     "accessed_at": "2026-11-17T19:30:52+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T20:58:25+00:00",
  "changes": {
   "UKRAINE-11171930-01": {
    "kind": "possible",
    "prev": "חידוש תנועת כלי רכב בגשר קרים",
    "score": 0.467
   },
   "UKRAINE-11171930-02": {
    "kind": "possible",
    "prev": "נפילת שברי כטב\"ם בקייב",
    "score": 0.633
   },
   "UKRAINE-11171930-03": {
    "kind": "new"
   },
   "UKRAINE-11171930-04": {
    "kind": "new"
   },
   "UKRAINE-11171930-05": {
    "kind": "new"
   },
   "UKRAINE-11171930-06": {
    "kind": "new"
   },
   "UKRAINE-11171930-07": {
    "kind": "new"
   },
   "UKRAINE-11171930-08": {
    "kind": "new"
   },
   "UKRAINE-11171930-09": {
    "kind": "new"
   },
   "UKRAINE-11171930-10": {
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
