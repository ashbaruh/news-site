/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-11T0050__yemen-202611110050.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-11T00:50:45+00:00",
   "window": {
    "from": "2026-11-10T00:50:45+00:00",
    "to": "2026-11-11T00:50:45+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611110050"
   },
   "summary": "בזירת תימן והחות'ים נמשכת הלחימה הפעילה הכוללת תקיפות מהאוויר ושיגורי טילים בין החות'ים לבין סעודיה, לצד עימותים קרקעיים מקומיים. מעורבות זו מתבטאת בתקיפות הדדיות על תשתיות וערים כמו צנעא וריאד, בזמן שהממשלה המוכרת בתימן והחות'ים ממשיכים במאבקם.",
   "fronts": [
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעילה עם תקיפות אוויריות ושיגורי טילים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11110050-01",
     "title": "הרוגה ופצוע מירי מיליציות חותיות בתימן",
     "summary": "מיליציות חותיות הרגו ילדה ופצעו אזרח בדרום ובמערב תעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T18:45:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T18:45:49+00:00",
     "last_update_at": "2026-11-10T18:45:49+00:00",
     "what_is_not_verified": "לא צוינו פרטים נוספים על זהות הפצועים מעבר למדווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155572",
       "published_at": "2026-11-10T18:45:49+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11110050-02",
     "title": "תקיפות אוויריות בצנעא ויירוט טילים בריאד",
     "summary": "החות'ים דיווחו על תקיפות אוויריות בכמה אתרים בצנעא, בעוד הרשויות בסעודיה מסרו שהגנה אווירית השמידה שני טילים ששוגרו לעבר ריאד.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T07:25:44+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T07:25:44+00:00",
     "last_update_at": "2026-11-10T07:25:44+00:00",
     "what_is_not_verified": "היקף הנזק המלא בצנעא אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-claims-war-effectively-over-iran-presses-conditions",
       "published_at": "2026-11-10T07:25:44+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11110050-03",
     "title": "פגיעה במגדלי אראמכו בריאד",
     "summary": "תועד נזק שגרמו החות'ים למגדלי חברת אראמכו בריאד בירת סעודיה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T08:06:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T08:06:01+00:00",
     "last_update_at": "2026-11-10T08:06:01+00:00",
     "what_is_not_verified": "היקף הנזק המדויק אינו מפורט מעבר לתיעוד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133389",
       "published_at": "2026-11-10T08:06:01+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11110050-04",
     "title": "תקיפת מתקן גז בצנעא",
     "summary": "ערב הסעודית תקפה מתקן גז בצנעא.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T02:42:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T02:42:59+00:00",
     "last_update_at": "2026-11-10T02:42:59+00:00",
     "what_is_not_verified": "תוצאות התקיפה המלאות אינן מפורטות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49451",
       "published_at": "2026-11-10T02:42:59+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    }
   ],
   "not_verified": [
    "היקף הנזק המדויק במתקני אראמכו ובצנעא אינו מאומת לחלוטין",
    "פרטי הפעילות הקרקעית המדויקים בתעז אינם מאומתים במלואם"
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
     "value": 3.1663,
     "unit": "ILS",
     "change_pct": -0.14,
     "source_id": "src_ecb",
     "as_of": "2026-11-10T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "פגיעה בתשתיות ובמטרות בתוך סעודיה"
     ],
     "inferred": [
      "הפעלת לחץ צבאי על סעודיה ובעלות בריתה",
      "שימור יכולות הלחימה והירי למרות התקיפות נגדם"
     ],
     "forecast": [
      "המשך שיגורים ותקיפות לעבר יעדים בסעודיה"
     ]
    },
    {
     "actor": "ערב הסעודית",
     "declared": [
      "הגנה על שטחי הממלכה ויירוט איומים"
     ],
     "inferred": [
      "פגיעה ביכולות הצבאיות ובתשתיות של החות'ים בתימן באמצעות תקיפות אוויריות"
     ],
     "forecast": [
      "המשך תגובות צבאיות ותקיפות נגד יעדי חות'ים כמו צנעא"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/trump-claims-war-effectively-over-iran-presses-conditions",
     "accessed_at": "2026-11-11T00:50:45+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155572",
     "accessed_at": "2026-11-11T00:50:45+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133389",
     "accessed_at": "2026-11-11T00:50:45+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49451",
     "accessed_at": "2026-11-11T00:50:45+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-10T11:54:36+00:00",
  "changes": {
   "YEMEN-11110050-01": {
    "kind": "possible",
    "prev": "השעיית ישיבות הממשלה בתימן עקב ירי טילים",
    "score": 0.467
   },
   "YEMEN-11110050-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפות אוויריות של סעודיה והקואליציה בתימן",
    "score": 1.0
   },
   "YEMEN-11110050-03": {
    "kind": "new"
   },
   "YEMEN-11110050-04": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-11T0040__iran-202611110040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-11T00:40:26+00:00",
   "window": {
    "from": "2026-11-10T00:40:26+00:00",
    "to": "2026-11-11T00:40:26+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611110040"
   },
   "summary": "הזירה מתאפיינת ברגיעה צבאית יחסית ובהצהרות אמריקאיות על סיום קרוב של העימות הישיר, לצד הפעלת לחץ כלכלי חסר תקדים וסנקציות על איראן. במקביל, נמשכת פעילות חשאית ענפה של רשתות טרור וסייבר איראניות מול יעדים מערביים, יחד עם חיכוך גובר סביב תשתיות אנרגיה בעיראק.",
   "fronts": [
    {
     "name": "החזית האמריקאית-איראנית הישירה",
     "status": "רגיעה צבאית מדווחת לצד לחץ כלכלי ודיפלומטי"
    },
    {
     "name": "חזית הטרור והסייבר באירופה ובארה\"ב",
     "status": "פעילה, כולל סיכול פיגועים וחשיפת חוליות"
    },
    {
     "name": "הזירה האזורית בעיראק ובמפרץ",
     "status": "מתיחות סביב מיליציות פרו-איראניות ותשתיות אנרגיה"
    }
   ],
   "events": [
    {
     "id": "IRAN-11110040-01",
     "title": "סיכול רשת טרור ותכנון פיגועים בארה\"ב ובאירופה",
     "summary": "כתבי אישום בארה\"ב חושפים שפעילי משמרות המהפכה תכננו כ-20 פיגועים נגד יהודים ויעדים בארה\"ב ובאירופה, כולל תכנון תקיפת בסיס ובית כנסת.",
     "axis": "ציר איראן-שלוחות מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T21:13:56+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T21:13:56+00:00",
     "last_update_at": "2026-11-11T00:18:35+00:00",
     "what_is_not_verified": "פרטי התוכניות המלאים מעבר לכתבי האישום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21826034",
       "published_at": "2026-11-11T00:18:35+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611104351",
       "published_at": "2026-11-11T00:00:38+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-charges-three-iranian-operatives-over-uk-airbase-plot",
       "published_at": "2026-11-10T22:30:23+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-backed-militant-helped-plot-attack-uks-fairford-base-us-jail-justice",
       "published_at": "2026-11-10T21:46:31+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21825896",
       "published_at": "2026-11-10T21:30:47+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-charges-three-iranian-operatives-over-uk-air-base-plot",
       "published_at": "2026-11-10T21:13:56+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      },
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "IRAN-11110040-02",
     "title": "שריפה במתקן הגז שדה פארס הדרומי באיראן",
     "summary": "שריפה פרצה באחת מפלטפורמות הגז בשדה פארס הדרומי באיראן ודלקה, אך השלטונות דיווחו כי היא טופלה וכובתה.",
     "axis": "הזירה הפנימית והכלכלית באיראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T21:52:16+00:00",
     "last_update_at": "2026-11-10T23:38:02+00:00",
     "what_is_not_verified": "סיבת השריפה המדויקת (דליפה או תאונה תפעולית).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_fars_news_agency",
       "url": "https://www.aljazeera.com/news/2026/11/10/fire-contained-on-platform-in-irans-south-pars-gas-field?traffic_source=rss",
       "published_at": "2026-11-10T23:38:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_fars_news_agency",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/fire-breaks-out-platform-irans-south-pars-field",
       "published_at": "2026-11-10T22:23:29+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_fars_news_agency",
       "url": "https://en.irna.ir/news/86318479/Fire-on-South-Pars-Phase-14-gas-platform-contained",
       "published_at": "2026-11-10T21:52:16+00:00"
      }
     ],
     "places": [
      {
       "name": "שדה פארס הדרומי, איראן",
       "lat": 27.4845,
       "lon": 52.6595
      }
     ]
    },
    {
     "id": "IRAN-11110040-03",
     "title": "האשמת איראן במתקפת סייבר על מקררים בצרפת",
     "summary": "שירות המודיעין הצרפתי האשים בכירים במשמרות המהפכה באחריות למתקפת סייבר ששיבשה מערכות קירור באתרי מסחר בצרפת.",
     "axis": "ציר איראן מול אירופה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T13:45:13+00:00",
     "last_update_at": "2026-11-10T20:10:11+00:00",
     "what_is_not_verified": "תגובת איראן הרשמית שמכחישה את המעורבות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_fdd_french_intelligence",
       "url": "https://www.fdd.org/in_the_news/france-blames-irgc-for-supermarket-fridge-cyberattack/",
       "published_at": "2026-11-10T20:10:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_fdd_french_intelligence",
       "url": "https://t.me/alexmehacarmel/49475",
       "published_at": "2026-11-10T20:10:08+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_fdd_french_intelligence",
       "url": "https://www.bbc.co.uk/news/articles/cmg474vk6dyqo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-10T13:45:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11110040-04",
     "title": "מניעת נחיתת מטוס נבחרת הכדורגל של איראן בעיראק עקב סנקציות",
     "summary": "התעופה האזרחית בעיראק מנעה ממטוס שהוביל את נבחרת איראן לנחות בבצרה בשל סנקציות אמריקאיות על חברות תעופה איראניות.",
     "axis": "ציר איראן-עיראק-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T20:23:03+00:00",
     "last_update_at": "2026-11-10T21:46:31+00:00",
     "what_is_not_verified": "פרטים נוספים מעבר לדיווח פקידי נמל התעופה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_basra_airport_officials_and_reuters",
       "url": "https://www.al-monitor.com/originals/2026/11/iraq-bars-plane-carrying-irans-soccer-team-landing-basra-over-us-sanctions",
       "published_at": "2026-11-10T21:46:31+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_basra_airport_officials_and_reuters",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/10/iraq-blocks-iranian-football-teams-plane-from-landing-over-us-sanctions?traffic_source=rss",
       "published_at": "2026-11-10T20:23:03+00:00"
      }
     ],
     "places": [
      {
       "name": "בצרה, עיראק",
       "lat": 30.4952,
       "lon": 47.8091
      }
     ]
    },
    {
     "id": "IRAN-11110040-05",
     "title": "מתקפת כטב\"ם על שדה הגז כור מור בכורדיסטן העיראקית",
     "summary": "שדה הגז כור מור בצפון עיראק הותקף באמצעות כטב\"ם חשוד, מה שגרם לשריפה שכובתה.",
     "axis": "ציר השלוחות באזור עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T17:56:38+00:00",
     "last_update_at": "2026-11-10T18:15:14+00:00",
     "what_is_not_verified": "זהות המבצעים הישירה של התקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_dana_gas_rudaw",
       "url": "https://www.fdd.org/analysis/attack-targets-khor-mor-gas-field-in-iraqi-kurdistan/",
       "published_at": "2026-11-10T18:15:14+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_dana_gas_rudaw",
       "url": "https://www.longwarjournal.org/archives/2026/11/attack-targets-khor-mor-gas-field-in-iraqi-kurdistan.php",
       "published_at": "2026-11-10T17:56:38+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על תכנון מדויק של כ-20 פיגועים ספציפיים באירופה ובארה\"ב מעבר למה שצוין בכתבי האישום",
    "הסיבה המדויקת לפרוץ השריפה במתקן הגז בפארס הדרומי",
    "זהותם המדויקת של האחראים לתקיפת שדה הגז כור מור בעיראק"
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
     "value": 3.1663,
     "unit": "ILS",
     "change_pct": -0.14,
     "source_id": "src_ecb",
     "as_of": "2026-11-10T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "מניעת השגת נשק גרעיני על ידי איראן",
      "בלימת ההשפעה האיראנית והתוקפנות באזור"
     ],
     "inferred": [
      "המשך לחץ כלכלי כבד כדי לייתר את הצורך בפעולות צבאיות נרחבות",
      "סיכול מוקדם של תשתיות טרור איראניות במערב"
     ],
     "forecast": [
      "שימור רגיעה צבאית יחסית כל עוד נשמר הלחץ הכלכלי",
      "הגברת האכיפה נגד רשתות הריגול והטרור האיראניות בחו\"ל"
     ]
    },
    {
     "actor": "איראן ושלוחותיה",
     "declared": [
      "דרישה להסרת הסנקציות ולקבלת פיצויים כלכליים",
      "עמידה על תנאים מקדימים לכל דיאלוג עתידי עם וושינגטון"
     ],
     "inferred": [
      "המשך הפעלת רשתות חשאיות ושלוחים לתקיפת יעדים מערביים כיצרת מנוף לחץ",
      "התאמת היערכות צבאית והפקת לקחים מסבבים קודמים"
     ],
     "forecast": [
      "המשך מאמצי התחמשות ושיפור יכולות טילים וסייבר",
      "ניסיון לעקוף סנקציות כלכליות באמצעות שיתופי פעולה אזוריים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/10/iraq-blocks-iranian-football-teams-plane-from-landing-over-us-sanctions?traffic_source=rss",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/iraq-bars-plane-carrying-irans-soccer-team-landing-basra-over-us-sanctions",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmg474vk6dyqo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/attack-targets-khor-mor-gas-field-in-iraqi-kurdistan/",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611104351",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86318479/Fire-on-South-Pars-Phase-14-gas-platform-contained",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21825896",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/11/attack-targets-khor-mor-gas-field-in-iraqi-kurdistan.php",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/fire-breaks-out-platform-irans-south-pars-field",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49475",
     "accessed_at": "2026-11-11T00:40:26+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-10T11:40:26+00:00",
  "changes": {
   "IRAN-11110040-01": {
    "kind": "possible",
    "prev": "ארה\"ב פינתה מטוסים מבסיס חיל האוויר המלכותי מילדנהול בבריטניה",
    "score": 0.633
   },
   "IRAN-11110040-02": {
    "kind": "new"
   },
   "IRAN-11110040-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "צרפת תפעל לסנקציות נגד איראן בעקבות מתקפת סייבר על מקררים מסחריים",
    "score": 1.0
   },
   "IRAN-11110040-04": {
    "kind": "new"
   },
   "IRAN-11110040-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-11T0050__ukraine-202611110050.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-11T00:50:00+00:00",
   "window": {
    "from": "2026-11-10T00:50:00+00:00",
    "to": "2026-11-11T00:50:00+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611110050"
   },
   "summary": "הלחימה באוקראינה נמשכת במתכונת של מלחמת התשה עם קרבות קשים בקו החזית ותקיפות אוויריות הדדיות, הכוללות פגיעות בתשתיות אנרגיה ועורף. במקביל למגעים דיפלומטיים ותלת-צדדיים המתקיימים באיחוד האמירויות, מתגלעים חילוקי דעות בינלאומיים בנוגע להיקף הסיוע, אספקת טילים ומנגנוני ביטחון עתידיים.",
   "fronts": [
    {
     "name": "חזית המזרח (דונצק / קושטנטיניבקה)",
     "status": "לחימה פעילה וניסיונות הבקעה רוסיים"
    },
    {
     "name": "חזית הדרום (אודסה / חרסון / דניפרו)",
     "status": "תקיפות אוויריות והפצצות הדדיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11110050-01",
     "title": "הצבעה באו\"ם על החלטה נגד האדרה נאצית",
     "summary": "53 מדינות התנגדו להחלטה נגד האדרה נאצית ו-117 תמכו בה.",
     "axis": "דיפלומטיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:34:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T00:34:48+00:00",
     "last_update_at": "2026-11-11T00:34:48+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_src_tass",
       "url": "https://tass.com/politics/2215801",
       "published_at": "2026-11-11T00:34:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11110050-02",
     "title": "תקיפה אוקראינית על נמל אוסט לוגה",
     "summary": "כוחות אוקראיניים תקפו את נמל אוסט לוגה במחוז לנינגרד.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:24:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T00:24:31+00:00",
     "last_update_at": "2026-11-11T00:24:31+00:00",
     "what_is_not_verified": "נזקי התקיפה אינם מפורטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/49482",
       "published_at": "2026-11-11T00:24:31+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסט לוגה, רוסיה",
       "lat": 59.6592,
       "lon": 28.2695
      }
     ]
    },
    {
     "id": "UKRAINE-11110050-03",
     "title": "נפגעים אזרחיים בהפצצות בדונצק",
     "summary": "שלושה אזרחים, ביניהם מתבגר, נפצעו בהתקפות אוקראיניות על הרפובליקה העממית של דונצק במהלך היממה האחרונה, שכללו 31 מתקפות הפגזה.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:10:02+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T00:10:02+00:00",
     "last_update_at": "2026-11-11T00:10:02+00:00",
     "what_is_not_verified": "זהות המותקפים המלאה והיקף הנזק המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_src_tass",
       "url": "https://tass.com/emergencies/2215799",
       "published_at": "2026-11-11T00:10:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11110050-04",
     "title": "מעצר חשודה בהכוונת תקיפות בדניפרו",
     "summary": "שירות הביטחון של אוקראינה עצר תושבת מקומית בדניפרו בחשד שהכוונת תקיפות רוסיות על תשתיות אנרגיה ולוגיסטיקה בוצעה בהוראת שירות הביטחון הפדרלי של רוסיה.",
     "axis": "עורף ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T23:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T23:30:00+00:00",
     "last_update_at": "2026-11-10T23:30:00+00:00",
     "what_is_not_verified": "חומרת האישומים המשפטיים טרם הוכחה בבית משפט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_02beef4f62f9db5c",
       "url": "https://www.ukrinform.net/rubric-crime/4183155-ssu-detains-dnipro-resident-suspected-of-directing-russian-strikes.html",
       "published_at": "2026-11-10T23:30:00+00:00"
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
     "id": "UKRAINE-11110050-05",
     "title": "תקיפה אוקראינית על נמל רחפנים בשדה התעופה דונצק",
     "summary": "כוחות אוקראיניים תקפו נמל רחפנים בשדה התעופה הכבוש בדונצק.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T21:46:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T21:46:53+00:00",
     "last_update_at": "2026-11-10T21:46:53+00:00",
     "what_is_not_verified": "היקף ההרס המדויק במקום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_480fce6cb6816a5d",
       "url": "https://kyivindependent.com/ukraine-strikes-drone-port-at-occupied-donetsk-airport/",
       "published_at": "2026-11-10T21:46:53+00:00"
      }
     ],
     "places": [
      {
       "name": "שדה התעופה דונצק, אוקראינה",
       "lat": 48.0714,
       "lon": 37.7408
      }
     ]
    },
    {
     "id": "UKRAINE-11110050-06",
     "title": "מעצר חייל צבא ארה\"ב בבריטניה בחשד לריגול",
     "summary": "משטרת בריטניה עצרה חייל בכיר בצבא ארה\"ב ליד גלוסטר בחשד שעבד עבור מודיעין רוסיה.",
     "axis": "עורף ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T21:29:56+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T21:29:56+00:00",
     "last_update_at": "2026-11-10T21:29:56+00:00",
     "what_is_not_verified": "אמיתות החשדות והאם הועבר מידע בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_src_meduza",
       "url": "https://meduza.io/en/news/2026/11/11/british-police-arrest-senior-u-s-army-soldier-near-gloucester-on-suspicion-of-spying-for-russia",
       "published_at": "2026-11-10T21:29:56+00:00"
      }
     ],
     "places": [
      {
       "name": "גלוסטר, בריטניה",
       "lat": 51.8654,
       "lon": -2.2458
      },
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "UKRAINE-11110050-07",
     "title": "פגיעת כטב\"מ בבניין מגורים בסמולנסק",
     "summary": "כטב\"מ אוקראיני פגע בבניין מגורים בסמולנסק.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T21:11:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T21:11:27+00:00",
     "last_update_at": "2026-11-10T21:11:27+00:00",
     "what_is_not_verified": "מספר הנפגעים והנזק המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_src_tg_carmel",
       "url": "https://t.me/alexmehacarmel/49477",
       "published_at": "2026-11-10T21:11:27+00:00"
      }
     ],
     "places": [
      {
       "name": "סמולנסק, רוסיה",
       "lat": 54.7814,
       "lon": 32.0461
      }
     ]
    },
    {
     "id": "UKRAINE-11110050-08",
     "title": "מתקפה רוסית בדרום מחוז אודסה",
     "summary": "תקיפה רוסית בדרום מחוז אודסה גרמה למותו של גבר בן 69 ולפציעת אישה בת 70, וכן לנזק לתשתיות ולבניין מגורים.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T18:32:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T18:32:00+00:00",
     "last_update_at": "2026-11-10T19:59:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא לכלל המבנים שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_oleh_kiper_odesa_oblast_military_adminis",
       "url": "https://www.ukrinform.net/rubric-ato/4183538-russian-forces-strike-southern-odesa-region-killing-one-injuring-another.html",
       "published_at": "2026-11-10T19:59:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_oleh_kiper_odesa_oblast_military_adminis",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/10/8062218/",
       "published_at": "2026-11-10T18:32:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11110050-09",
     "title": "תקיפת רחפני FPV על עובדי עירייה בקראמטורסק",
     "summary": "רחפני FPV רוסיים תקפו פעמיים רכב של חברת שירות עירונית בקראמטורסק, הרגו שני עובדים ופצעו קשה עובד נוסף.",
     "axis": "תקיפות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T18:16:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T18:16:00+00:00",
     "last_update_at": "2026-11-10T18:16:00+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_oleksandr_honcharenko_kramatorsk_city_mi",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/10/8062215/",
       "published_at": "2026-11-10T18:16:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קראמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    }
   ],
   "not_verified": [
    "ההיתכנות והפרטים המדויקים של עסקת חילופי שבויים בהיקף של אלפים באבו דאבי",
    "קיומה הרשמי ותוכנה המלא של רשימת הגבלת מחולות מדינות 'לא ידידותיות' במכון הממלכתי לתרבות ברוסיה",
    "ההערכות המדויקות לגבי אחוז הפגיעה ביכולות הזיקוק של רוסיה בעקבות התקיפות"
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
     "value": 1.1214,
     "unit": "USD",
     "change_pct": 0.19,
     "source_id": "src_ecb",
     "as_of": "2026-11-10T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת ערבויות ביטחון מקובלות",
      "הסדרת הפסקת אש בתחום האנרגיה ובזירה הימית",
      "השגת סיוע צבאי מהיר ומערכות הגנה אווירית"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והאנרגטיות של רוסיה באמצעות תקיפות ארוכות טווח",
      "חיזוק עמדת המיקוח לקראת משא ומתן באמצעות הצלחות בשדה הקרב"
     ],
     "forecast": [
      "המשך מאמצים לקבלת מטוסי קרב ומערכות הגנה מתקדמות ממדינות המערב",
      "לחץ מתמשך על שותפות בינלאומיות לשמירת הסנקציות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת יעדי המבצע הצבאי המיוחד",
      "ערעור התשתיות הכלכליות והדמוגרפיות של אוקראינה באמצעות מלחמת ערים"
     ],
     "inferred": [
      "ניצול מלחמת ההתשה להשגת יתרון בשטח לאור עייפות אפשרית של הצדדים",
      "סיכול גיבוש חבילות סיוע מערביות לאוקראינה"
     ],
     "forecast": [
      "המשך התקיפות על מתקני אנרגיה ואספקה באוקראינה לקראת עונת החורף",
      "ניהול משא ומתן זהה מול ארה\"ב תוך ניסיון למנוע מעורבות אירופית ישירה בתנאים שאינם מקובלים עליה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-strikes-drone-port-at-occupied-donetsk-airport/",
     "accessed_at": "2026-11-11T00:50:00+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/11/british-police-arrest-senior-u-s-army-soldier-near-gloucester-on-suspicion-of-spying-for-russia",
     "accessed_at": "2026-11-11T00:50:00+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/10/8062215/",
     "accessed_at": "2026-11-11T00:50:00+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2215799",
     "accessed_at": "2026-11-11T00:50:00+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49477",
     "accessed_at": "2026-11-11T00:50:00+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4183538-russian-forces-strike-southern-odesa-region-killing-one-injuring-another.html",
     "accessed_at": "2026-11-11T00:50:00+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-10T10:52:12+00:00",
  "changes": {
   "UKRAINE-11110050-01": {
    "kind": "new"
   },
   "UKRAINE-11110050-02": {
    "kind": "new"
   },
   "UKRAINE-11110050-03": {
    "kind": "new"
   },
   "UKRAINE-11110050-04": {
    "kind": "new"
   },
   "UKRAINE-11110050-05": {
    "kind": "new"
   },
   "UKRAINE-11110050-06": {
    "kind": "new"
   },
   "UKRAINE-11110050-07": {
    "kind": "new"
   },
   "UKRAINE-11110050-08": {
    "kind": "new"
   },
   "UKRAINE-11110050-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-11T0052__north-202611110052.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-11T00:52:04+00:00",
   "window": {
    "from": "2026-11-10T00:52:04+00:00",
    "to": "2026-11-11T00:52:04+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611110052"
   },
   "summary": "בגזרה הצפונית מתנהלת מתיחות מתמשכת סביב לבנון וסוריה הכוללת תקריות ירי לעבר כוחות בינלאומיים, פעילות צבאית ישראלית מקומית והמשך קמפיינים אזרחיים ופוליטיים של חיזבאללה לצד היערכות דיפלומטית בינלאומית ליום שאחרי סיום מנדט יוניפי\"ל. במקביל, שיתופי פעולה כלכליים ואזוריים בין סוריה למדינות שכנות כמו ירדן מקודמים לצד חששות ביטחוניים מורכבים.",
   "fronts": [
    {
     "name": "חזית לבנון-ישראל",
     "status": "פעיל במתכונת של תקריות נקודתיות, הפרות ריבונות, וירי לעבר כוחות או\"ם למרות הפסקת האש"
    },
    {
     "name": "חזית סוריה-ישראל",
     "status": "פעיל עם נוכחות ופעילות פולשנית של כוחות קרקעיים בשטחי קוניטרה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11110052-01",
     "title": "ירי לעבר סיור יוניפי\"ל בדרום לבנון",
     "summary": "כוח שמירת השלום של האו\"ם דיווח כי סיור שלו נפגע מירי של כעשרים קליעים באזור דרום לבנון, והכוח השיב באש עד שהירי נפסק ללא נפגעים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T16:43:29+00:00",
     "last_update_at": "2026-11-10T22:03:50+00:00",
     "what_is_not_verified": "זהות התוקפים לא זוהתה בידי כוח האו\"ם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_68882c9f1e7f316b",
       "url": "https://www.aljazeera.com/news/2026/11/10/unifil-patrol-comes-under-fire-in-southern-lebanon?traffic_source=rss",
       "published_at": "2026-11-10T22:03:50+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_df25b5246d0ce361",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-peacekeepers-say-came-under-fire-southern-lebanon",
       "published_at": "2026-11-10T20:56:16+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_bd51567c13b5e665",
       "url": "https://www.aa.com.tr/en/middle-east/un-peacekeepers-come-under-fire-in-southern-lebanon-mission-says/4119542",
       "published_at": "2026-11-10T20:42:28+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_f18dc47784ed33f4",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967342/unifil-patrol-comes-under-gunfire-near-south-lebanons-wadi-jilou-no-pe/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967342",
       "published_at": "2026-11-10T16:43:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11110052-02",
     "title": "אזרח ישראלי חצה את הגבול ללבנון ונכנס לעמדת או\"ם",
     "summary": "אזרח ישראלי חצה את הגבול באזור ראש הנקרה, נכנס לעמדת יוניפי\"ל ואותר זמן קצר לאחר מכן על ידי כוח או\"ם שהעביר אותו לצה\"ל.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T15:03:10+00:00",
     "last_update_at": "2026-11-10T19:31:12+00:00",
     "what_is_not_verified": "הנסיבות המדויקות שהביאו את האזרח לחצות את הגבול",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "fh_36e1b85a0b363f04",
       "url": "https://www.walla.co.il/news/military/383960909",
       "published_at": "2026-11-10T19:31:12+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_36e1b85a0b363f04",
       "url": "https://t.me/abualiexpress/133431",
       "published_at": "2026-11-10T15:38:04+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "fh_36e1b85a0b363f04",
       "url": "https://t.me/idf_telegram/25571",
       "published_at": "2026-11-10T15:36:09+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_36e1b85a0b363f04",
       "url": "https://t.me/lelotsenzura/95001",
       "published_at": "2026-11-10T15:03:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11110052-03",
     "title": "רצח פוליטיקאי עיראקי בביירות",
     "summary": "גופתו של חבר הפרלמנט העיראקי לשעבר אחמד אל-עלוואני נמצאה בדירה בביירות לאחר שנחנק למוות, ומנגנוני הביטחון פתחו בחקירה ועצרו חשודים.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-10T19:42:19+00:00",
     "last_update_at": "2026-11-10T23:14:56+00:00",
     "what_is_not_verified": "הזהות המלאה של כל המעורבים ברצח והמניע הישיר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_f825a0a3eaddadcf",
       "url": "https://www.aa.com.tr/en/middle-east/former-iraqi-lawmaker-killed-in-beirut-probe-launched/4119598",
       "published_at": "2026-11-10T23:14:56+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_f825a0a3eaddadcf",
       "url": "https://www.ynet.co.il/news/article/bymhybbafe",
       "published_at": "2026-11-10T21:30:53+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_f825a0a3eaddadcf",
       "url": "https://www.al-monitor.com/originals/2026/11/ex-iraqi-mp-ahmed-alwani-found-dead-lebanon-what-know",
       "published_at": "2026-11-10T21:12:31+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_f825a0a3eaddadcf",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21825473",
       "published_at": "2026-11-10T19:42:19+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11110052-04",
     "title": "פעילות כוחות צבא ישראל במרחב קוניטרה בסוריה",
     "summary": "כוחות צבא ישראל ביצעו פלישות והקימו מחסומים זמניים באזורים שונים במרחב קוניטרה בסוריה לצורך בידוק עוברי דרך.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-10T12:41:09+00:00",
     "last_update_at": "2026-11-10T12:41:09+00:00",
     "what_is_not_verified": "משך השהות המדויק והיקף הכוחות המלא בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/148792/",
       "published_at": "2026-11-10T12:41:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11110052-05",
     "title": "טיסות כטב\"ם בשמי ביירות",
     "summary": "כטב\"ם ישראלי תועד כשהוא מסתובב מעל שמי ביירות ופרוורי הדרום כהפרה של ריבונות לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-10T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-10T12:38:18+00:00",
     "last_update_at": "2026-11-10T12:38:18+00:00",
     "what_is_not_verified": "יעדי הטיסה המדויקים של כלי הטיס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3dc673e97f18b406",
       "url": "https://english.almanar.com.lb/article/148852/",
       "published_at": "2026-11-10T12:38:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    }
   ],
   "not_verified": [
    "זהות התוקפים שירותו אש לעבר סיור יוניפי\"ל בוואדי ג'ילו",
    "ההחלטות המדויקות לגבי מבנה הביטחון שיחליף את יוניפי\"ל לאחר תום המנדט",
    "היקף הפעילות המלא של כוחות צבא ישראל בעומק השטחים הסוריים בקוניטרה"
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
     "value": 3.1663,
     "unit": "ILS",
     "change_pct": -0.14,
     "source_id": "src_ecb",
     "as_of": "2026-11-10T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת הפרות ריבונות בגבול לבנון",
      "סיכול תשתיות טרור ופגיעה במקורות מימון של ציר ההתנגדות"
     ],
     "inferred": [
      "שמירה על חופש פעולה מבצעי בדרום לבנון ובמרחב הגבול הסורי",
      "מניעת התבססות מחודשת של חיזבאללה באזורים הסמוכים לגבול"
     ],
     "forecast": [
      "המשך פעילות צבאית מוגבלת או סיכולים ממוקדים בגזרה לפי הצורך",
      "התמודדות עם ריק ביטחוני עתידי בלבנון אם יפונה כוח יוניפי\"ל"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "חלוקת מענקי סיוע לתושבים שנפגעו באזורים שונים בלבנון במסגרת קמפיין התחייבות",
      "תמיכה באוכלוסייה המקומית והבלטת חולשת הרשויות הרשמיות בטיפול בנפגעים"
     ],
     "inferred": [
      "שימור מעמדו כמגן הקהילה השיעית והאוכלוסייה בדרום לבנון ובביירות",
      "חיזוק ההשפעה האזרחית במקביל למאבק הצבאי והמדיני"
     ],
     "forecast": [
      "המשך חלוקת סיוע וקידום קמפיינים ציבוריים להשפעה פוליטית בלבנון",
      "היערכות להסלמה נוספת מול ישראל בגזרה הצפונית"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "חיזוק הריבונות הלאומית ומוסדות המדינה",
      "הכנת שדה התעופה בקלייעת לתחילת טיסות ניסוי ופעילות מסחרית"
     ],
     "inferred": [
      "ניסיון לייצב את הכלכלה ולשמור על תפקוד הצבא למרות לחצים פוליטיים וביטחוניים פנימיים וחיצוניים",
      "הימנעות מעימות ישיר עם חיזבאללה תוך דרישה לאכיפת החוק סביב כוחות האו\"ם"
     ],
     "forecast": [
      "המשך מאמצים לגיבוש הסדרים בינלאומיים למניעת ואקום ביטחוני לאחר סיום מנדט יוניפי\"ל",
      "פתיחת נמל התעופה בקלייעת לקראת סוף חודש נובמבר כמתוכנן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/10/unifil-patrol-comes-under-fire-in-southern-lebanon?traffic_source=rss",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/148852/",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/ex-iraqi-mp-ahmed-alwani-found-dead-lebanon-what-know",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/former-iraqi-lawmaker-killed-in-beirut-probe-launched/4119598",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21825473",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/967342/unifil-patrol-comes-under-gunfire-near-south-lebanons-wadi-jilou-no-pe/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967342",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-peacekeepers-say-came-under-fire-southern-lebanon",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133431",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25571",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95001",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383960909",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bymhybbafe",
     "accessed_at": "2026-11-11T00:52:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-10T11:55:51+00:00",
  "changes": {
   "NORTH-11110052-01": {
    "kind": "possible",
    "prev": "תקיפות והפגזות ישראליות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11110052-02": {
    "kind": "new"
   },
   "NORTH-11110052-03": {
    "kind": "new"
   },
   "NORTH-11110052-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פצועים מאש צבא ישראל בדרום סוריה",
    "score": 0.65
   },
   "NORTH-11110052-05": {
    "kind": "new"
   }
  }
 }
};
