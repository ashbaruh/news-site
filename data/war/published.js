/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-16T0042__yemen-202611160042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-16T00:42:13+00:00",
   "window": {
    "from": "2026-11-15T00:42:13+00:00",
    "to": "2026-11-16T00:42:13+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611160042"
   },
   "summary": "כוחות ממשלת תימן והפלגים הדרומיים נסוגו מעמדותיהם לאורך מצר באב אל-מנדב ורצועת חוף הים האדום במטרה להתרכז בהגנת הבירה הזמנית עדן. תנועת החות'ים ניצלה את הפינוי להשתלטות מהירה על רצועת חוף נרחבת ולהתקדמות קרקעית משמעותית במחוז לחג' עד למרחק של כשישים קילומטרים מעדן. במקביל להסלמה היבשתית, החות'ים הגבירו את ירי הטילים והכטב\"מים לעבר יעדים בעומק סעודיה ובמרחב עדן.",
   "fronts": [
    {
     "name": "מצר באב אל-מנדב ורצועת חוף הים האדום",
     "status": "נסיגה מוחלטת של כוחות הממשלה והשתלטות חות'ית על מרחב החוף מד'ובאב ועד ח'ור עמירה"
    },
    {
     "name": "מחוז לחג' ומבואות עדן",
     "status": "התקדמות קרקעית של החות'ים עד למרחק של כשישים קילומטרים מעדן והקמת ביצורים עירוניים על ידי כוחות הממשלה"
    },
    {
     "name": "החזית האווירית מול ערב הסעודית",
     "status": "שיגורי טילים בליסטיים וכטב\"מים לעבר ריאד, מתקני נפט והמחוז המזרחי, לצד יירוטים של הקואליציה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11160042-01",
     "title": "נסיגת כוחות ממשלת תימן והכוחות הדרומיים ממצר באב אל-מנדב וחוף הים האדום",
     "summary": "כוחות ממשלת תימן והכוחות המזוינים הדרומיים החלו בנסיגה ובהיערכות מחדש מאזור מצר באב אל-מנדב ונמל התעופה בד'ובאב, כדי לרכז כוחות להגנה על העיר עדן וסביבתה.",
     "axis": "החוף המערבי ובאב אל-מנדב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T08:46:28+00:00",
     "last_update_at": "2026-11-16T00:15:21+00:00",
     "what_is_not_verified": "היקף הכוחות המדויק שנסוג ומידת השליטה המלאה שנותרה בידי הממשלה בנקודות תצפית ספציפיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.newarab.com/news/houthis-advance-aden-govt-bolsters-city-defences",
       "published_at": "2026-11-16T00:15:21+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/16/iran-war-live-tehran-warns-it-may-strike-first-before-another-us-attack?traffic_source=rss",
       "published_at": "2026-11-16T00:00:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://t.me/alexmehacarmel/49618",
       "published_at": "2026-11-15T20:54:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.france24.com/en/middle-east/20261115-yemen-houthis-advance-to-within-60-kilometres-of-aden-military-sources-say",
       "published_at": "2026-11-15T19:28:54+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.aljazeera.com/news/2026/11/15/yemeni-government-forces-redeploy-from-bab-al-mandeb-to-defend-aden?traffic_source=rss",
       "published_at": "2026-11-15T17:33:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.ynet.co.il/news/article/ryhk11pdrge",
       "published_at": "2026-11-15T16:48:11+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
       "published_at": "2026-11-15T16:46:30+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.newarab.com/news/yemen-forces-withdraw-area-near-bab-al-mandeb-strait",
       "published_at": "2026-11-15T10:27:26+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3291e87dad202ee3",
       "url": "https://www.al-monitor.com/originals/2026/11/yemeni-government-force-retreats-strait-major-setback-war-against-houthis",
       "published_at": "2026-11-15T08:46:28+00:00"
      }
     ],
     "places": [
      {
       "name": "ד'ובאב, תימן",
       "lat": 13.0597,
       "lon": 43.5117
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-11160042-02",
     "title": "התקדמות כוחות החות'ים במחוז לחג' לעבר פאתי עדן",
     "summary": "החות'ים השתלטו על שטחים שפונו לאורך רצועת החוף מד'ובאב עד ח'ור עמירה ועל שני מחוזות בלחג', התמקמו במחנה אל-ח'רז במרחק של כשישים קילומטרים מעדן, ועל פי דיווח כיתרו שלוש חטיבות באזור ראס אל-ערה.",
     "axis": "חזית לחג' ודרום תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T19:28:54+00:00",
     "last_update_at": "2026-11-16T00:15:21+00:00",
     "what_is_not_verified": "היקף הכיתור של שלוש חטיבות כוחות הענקים ומגן המולדת בראס אל-ערה לא אומת מעבר לדיווח בודד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-advance-aden-govt-bolsters-city-defences",
       "published_at": "2026-11-16T00:15:21+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49618",
       "published_at": "2026-11-15T20:54:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261115-yemen-houthis-advance-to-within-60-kilometres-of-aden-military-sources-say",
       "published_at": "2026-11-15T19:28:54+00:00"
      }
     ],
     "places": [
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      },
      {
       "name": "ראס אל-ערה, תימן",
       "lat": 12.6084,
       "lon": 43.9158
      }
     ]
    },
    {
     "id": "YEMEN-11160042-03",
     "title": "שיגור טילים וכטב\"מים חות'יים לעבר יעדים בסעודיה ובדרום תימן",
     "summary": "החות'ים שיגרו שני טילים בליסטיים לעבר שדה התעופה הבינלאומי ח'אלד ומרכז העסקים בריאד, ושישה טילים נוספים לעבר מחנה צבאי בלחג'. הקואליציה הערבית מסרה כי יירטה שני טילים ושלושה כטב\"מים ששוגרו לעבר ריאד והמחוז המזרחי בסעודיה.",
     "axis": "הזירה האווירית מול סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T03:46:26+00:00",
     "last_update_at": "2026-11-15T18:44:54+00:00",
     "what_is_not_verified": "מידת הפגיעה בפועל בשטח ריאד לעומת הצלחת היירוטים של הקואליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-fired-missiles-riyadh-airport-and-financial-district",
       "published_at": "2026-11-15T18:44:54+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-attacks-kill-eight-yemen-strike-riyadh-airport",
       "published_at": "2026-11-15T08:59:06+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-670",
       "published_at": "2026-11-15T07:52:17+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-led-coalition-intercepts-missiles-towards-riyadh-drones-eastern-province",
       "published_at": "2026-11-15T03:46:26+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-11160042-04",
     "title": "טענות הדדיות בנוגע לשיגור כטב\"מים לעבר מכה ומדינה",
     "summary": "הקואליציה הודיעה על השמדת שני כטב\"מים באזור מכה, בעוד הדובר הצבאי של החות'ים הכחיש כוונה לפגוע במקומות הקדושים וטען כי התקיפות מתמקדות במתקני נפט ובסיסים צבאיים בלבד.",
     "axis": "הזירה האווירית מול סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T14:29:16+00:00",
     "last_update_at": "2026-11-15T18:24:02+00:00",
     "what_is_not_verified": "האם הכטב\"מים יועדו לאתרים במכה או לאתרים צבאיים ומתקני נפט סמוכים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-deny-targeting-mecca-or-medina-saudi-drone-attacks",
       "published_at": "2026-11-15T18:24:02+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155827",
       "published_at": "2026-11-15T14:29:16+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      }
     ]
    },
    {
     "id": "YEMEN-11160042-05",
     "title": "מתקפת טילים ופיצוצים באזור עדן",
     "summary": "מתקפת טילים של החות'ים בקרבת עדן הביאה למותם של שמונה בני אדם, ובמקביל נשמעו שני פיצוצים בתוך העיר עדן בעת היערכות כוחות הממשלה להגנתה.",
     "axis": "חזית עדן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T08:59:06+00:00",
     "last_update_at": "2026-11-15T18:44:54+00:00",
     "what_is_not_verified": "זהות ההרוגים ונסיבות הפיצוצים המדויקות בתוך עדן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-fired-missiles-riyadh-airport-and-financial-district",
       "published_at": "2026-11-15T18:44:54+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-attacks-kill-eight-yemen-strike-riyadh-airport",
       "published_at": "2026-11-15T08:59:06+00:00"
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
     "id": "YEMEN-11160042-06",
     "title": "שחרור חד-צדדי של שש מאות שבויים על ידי החות'ים",
     "summary": "החות'ים שחררו באופן חד-צדדי שש מאות לוחמים ואנשי כוחות ממשלה שנשבו, בהליך שתואם עם הוועד הבינלאומי של הצלב האדום.",
     "axis": "פוליטי ומדיני בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T08:59:06+00:00",
     "last_update_at": "2026-11-15T21:19:08+00:00",
     "what_is_not_verified": "טענות החות'ים בדבר סיכול מכוון של עסקאות חילופי שבויים מצד סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/yemens-houthis-unilaterally-release-600-war-detainees?traffic_source=rss",
       "published_at": "2026-11-15T21:19:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-free-600-pro-government-fighters-icrc-says",
       "published_at": "2026-11-15T16:21:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-attacks-kill-eight-yemen-strike-riyadh-airport",
       "published_at": "2026-11-15T08:59:06+00:00"
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
    "טענת ערוץ טלגרם בדבר כיתור שלוש חטיבות של אל-עמאליקה ומגן המולדת בראס אל-ערה",
    "טענת הקואליציה על שיגור כטב\"מים חות'יים ישירות לעבר מכה, מול הכחשת החות'ים",
    "מידת הפגיעה המדויקת של שני הטילים הבליסטיים ששוגרו לעבר ריאד"
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
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "תקיפת מתקני נפט ובסיסים צבאיים בלבד בסעודיה",
      "יוזמה הומניטרית בשחרור שש מאות שבויים"
     ],
     "inferred": [
      "השגת שליטה מלאה על נתיב השיט האסטרטגי בבאב אל-מנדב",
      "הפעלת לחץ צבאי ישיר להפלת הבירה הזמנית עדן ומיטוט כוחות הממשלה",
      "הרחקת סעודיה מהמערכה באמצעות פגיעה בעומק שטחה"
     ],
     "forecast": [
      "המשך לחץ צבאי לעבר מבואות עדן והרחבת התקיפות הרקטות על ריכוזי כוחות סביבה",
      "חיזוק עמדות אש ותצפית לאורך חוף הים האדום ובאב אל-מנדב"
     ]
    },
    {
     "actor": "ממשלת תימן והכוחות הדרומיים",
     "declared": [
      "היערכות מחדש לצורך מתן עדיפות עליונה לאבטחת הבירה עדן והמחוזות הסמוכים לה",
      "חיזוק קווי החזית מול האיומים הקיימים"
     ],
     "inferred": [
      "ויתור על החזקת מצר באב אל-מנדב עקב נחיתות מבצעית וחוסר יכולת לבלום את החות'ים בשתי חזיתות במקביל",
      "ריכוז כלל הכוחות להקמת קו הגנה אחרון סביב עדן"
     ],
     "forecast": [
      "קרבות בלימה קשים סביב מחוז לחג' ומבואות עדן תוך הסתמכות על ביצורים עירוניים",
      "פנייה לסיוע אווירי מוגבר מצד הקואליציה הערבית"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט איומי טילים וכטב\"מים המכוונים לערים ולמתקנים חיוניים"
     ],
     "inferred": [
      "מניעת קריסת ממשלת תימן בעדן במקביל לניסיון להכיל תקיפות בשטחה הריבוני",
      "הגנה על מרכזי אנרגיה וכלכלה מרכזיים מפני שחיקה"
     ],
     "forecast": [
      "הגברת תקיפות האוויר לסיכול התקדמות החות'ים לעבר עדן",
      "תגבור מערכות ההגנה האווירית סביב ריאד והמחוז המזרחי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/yemens-houthis-unilaterally-release-600-war-detainees?traffic_source=rss",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-led-coalition-intercepts-missiles-towards-riyadh-drones-eastern-province",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261115-yemen-houthis-advance-to-within-60-kilometres-of-aden-military-sources-say",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-fired-missiles-riyadh-airport-and-financial-district",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthi-attacks-kill-eight-yemen-strike-riyadh-airport",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155827",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49618",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/ryhk11pdrge",
     "accessed_at": "2026-11-16T00:42:13+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T07:09:28+00:00",
  "changes": {
   "YEMEN-11160042-01": {
    "kind": "new"
   },
   "YEMEN-11160042-02": {
    "kind": "possible",
    "prev": "טענת החות'ים להפלת כלי טיס של סעודיה במחוז אל-ג'וף",
    "score": 0.467
   },
   "YEMEN-11160042-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "יירוט טילים בליסטיים וכלי טיס בלתי מאוישים ששוגרו מסוג חות'י לעבר סעודיה",
    "score": 1.0
   },
   "YEMEN-11160042-04": {
    "kind": "new"
   },
   "YEMEN-11160042-05": {
    "kind": "new"
   },
   "YEMEN-11160042-06": {
    "kind": "possible",
    "prev": "דיווח צבא תימן על מאות תקיפות ואבדות בקרב החות'ים",
    "score": 0.467
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-16T0711__iran-202611160711.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-16T07:11:36+00:00",
   "window": {
    "from": "2026-11-15T07:11:36+00:00",
    "to": "2026-11-16T07:11:36+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611160711"
   },
   "summary": "העימות בין ארצות הברית וישראל לבין איראן מחריף במישור הצבאי והימי, כאשר ארצות הברית מתגברת את נוכחותה במזרח התיכון לשלוש נושאות מטוסים ומטילה מצור ימי וכלכלי הדוק. בתגובה, איראן מפעילה אמצעי לחימה נגד יעדים אמריקאיים בבחריין וממשיכה לשבש את נתיבי השיט במצר הורמוז באמצעות מוקשים. במקביל, ישראל והמעצמות נערכות להתפתחויות מדיניות וביטחוניות סביב יכולות הטילים והגרעין של איראן והשפעת שלוחותיה באזור.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "מיקוש נתיבי שיט, פיצוצי מכליות נפט והטלת מצור ימי על ידי כוחות ארצות הברית"
    },
    {
     "name": "בחריין",
     "status": "מתקפות כטב\"מים איראניות לעבר בסיס ומכ\"מים אמריקאיים ויירוטים של כוחות מקומיים"
    },
    {
     "name": "עיראק",
     "status": "מתיחות ולחץ ביטחוני של השלטון המרכזי מול מיליציית גדודי חיזבאללה הנתמכת בידי איראן"
    },
    {
     "name": "ישראל - איראן",
     "status": "עיסוק מודיעיני ואסטרטגי ביכולות הטילים של טהרן ופגישות קבינט מדיני-ביטחוני בנושא"
    }
   ],
   "events": [
    {
     "id": "IRAN-11160711-01",
     "title": "תגבור כוחות הצי האמריקאי בכניסת נושאת מטוסים שלישית לאזור פיקוד מרכז",
     "summary": "נושאת המטוסים האמריקאית תיאודור רוזוולט נכנסה לתחום אחריות פיקוד המרכז של צבא ארצות הברית והצטרפה לשתי נושאות מטוסים נוספות באזור, במטרה לאכוף הסגר ולהגביר את המוכנות הצבאית.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-16T00:00:00+00:00",
     "last_update_at": "2026-11-16T06:34:49+00:00",
     "what_is_not_verified": "ההיקף המדויק של כלל כלי השיט בצי והכוונות המבצעיות המיידיות של ממשל טראמפ לגבי חידוש התקיפות אינם מאומתים רשמית מעבר להצהרות כלליות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133705",
       "published_at": "2026-11-16T06:34:49+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961578",
       "published_at": "2026-11-16T06:29:47+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388872",
       "published_at": "2026-11-16T05:44:29+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611154375",
       "published_at": "2026-11-16T00:06:34+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/16/iran-war-live-tehran-warns-it-may-strike-first-before-another-us-attack?traffic_source=rss",
       "published_at": "2026-11-16T00:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11160711-02",
     "title": "פגיעת מוקשים ימיים בשתי מכליות נפט במצר הורמוז",
     "summary": "משמרות המהפכה הודיעו כי שתי מכליות נפט עלו על מוקשים ימיים במצר הורמוז בעת שניסו לעבור בנתיב שיט שאיראן הגדירה כאסור ומסוכן, והזהירו חברות נפט משיתוף פעולה עם ארצות הברית.",
     "axis": "איראן - המפרץ / ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T00:00:00+00:00",
     "last_update_at": "2026-11-16T06:16:41+00:00",
     "what_is_not_verified": "זהות המכליות שנפגעו, היקף הנזק הממשי ואימות עצמאי של נסיבות הפיצוצים מעבר להודעת משמרות המהפכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_c751cba4bdeabb2d",
       "url": "https://en.irna.ir/news/86322979/Two-more-tankers-hit-naval-mines-in-Strait-of-Hormuz-says-IRGC",
       "published_at": "2026-11-16T06:16:41+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_c751cba4bdeabb2d",
       "url": "https://www.maariv.co.il/breaking-news/article-1388869",
       "published_at": "2026-11-16T05:28:36+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9defbd50a83f4802",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-two-oil-tankers-hit-mines-hormuz-strait",
       "published_at": "2026-11-16T04:47:53+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_c751cba4bdeabb2d",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/16/iran-war-live-tehran-warns-it-may-strike-first-before-another-us-attack?traffic_source=rss",
       "published_at": "2026-11-16T00:00:00+00:00"
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
     "id": "IRAN-11160711-03",
     "title": "מתקפת כטב\"מים איראנית לעבר בסיס אמריקאי בבחריין ויירוטים בשמי הממלכה",
     "summary": "איראן שיגרה כלי טיס בלתי מאוישים לעבר בסיס צבאי ומערכות מכ\"ם של צבא ארצות הברית בבחריין. משרד החוץ וצבא בחריין הודיעו כי מערכות ההגנה האווירית יירטו את האיומים מעל שטחה.",
     "axis": "איראן - ארה\"ב / בחריין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T08:11:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T08:11:35+00:00",
     "last_update_at": "2026-11-16T06:32:29+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למטרות ומידת הפגיעה במערכות המכ\"ם כפי שטענו באיראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-embassy-bahrain-urges-americans-exercise-heightened-vigilance",
       "published_at": "2026-11-16T06:32:29+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.theguardian.com/world/2026/nov/15/iran-launches-drone-attacks-against-us-military-base-in-bahrain",
       "published_at": "2026-11-15T18:03:56+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
       "published_at": "2026-11-15T16:46:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_cbcab1594018c47d",
       "url": "https://www.theguardian.com/world/live/2026/nov/15/middle-east-crisis-live-iran-bahrain-strikes-gulf-donald-trump-us-israel-yemen-houthis",
       "published_at": "2026-11-15T15:59:04+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.france24.com/en/iran-claims-drone-attack-on-us-military-base-in-bahrain",
       "published_at": "2026-11-15T15:29:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.france24.com/en/bahrain-says-air-defences-destroyed-several-iranian-drones-attacking-us-base",
       "published_at": "2026-11-15T13:55:32+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.france24.com/en/middle-east/20261115-iran-claims-attack-on-us-military-airbase-in-bahrain",
       "published_at": "2026-11-15T09:57:35+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_a5c9a09de1d2e387",
       "url": "https://www.walla.co.il/news/military/383961449",
       "published_at": "2026-11-15T08:11:35+00:00"
      }
     ],
     "places": [
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      }
     ]
    },
    {
     "id": "IRAN-11160711-04",
     "title": "החרפת הלחץ הכלכלי והצהרות ארצות הברית על הרחבת המצור היבשתי על איראן",
     "summary": "שר האוצר של ארצות הברית הצהיר כי הממשל מרחיב את מערכת הלחצים נגד איראן אל מעבר למצור הימי כדי לפגוע בנתיבי אספקה יבשתיים, וחזה קריסה כלכלית חמורה במדינה.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T17:34:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T17:34:58+00:00",
     "last_update_at": "2026-11-16T00:06:34+00:00",
     "what_is_not_verified": "מידת ההשפעה הריאלית של הצעדים והיקף ההתכווצות של הכלכלה האיראנית בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611154375",
       "published_at": "2026-11-16T00:06:34+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611151817",
       "published_at": "2026-11-15T17:34:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11160711-05",
     "title": "הכנות לפסגה משולשת בין ארצות הברית, סין ורוסיה בנושא המלחמה והגרעין",
     "summary": "מנהיגי ארצות הברית, רוסיה וסין צפויים להיפגש בשנג'ן לפסגה משולשת שתעסוק בין היתר במלחמה מול איראן, במאגרי הגרעין ובהסדרי ביטחון בינלאומיים.",
     "axis": "מעצמות - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T18:17:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T18:17:34+00:00",
     "last_update_at": "2026-11-16T03:01:15+00:00",
     "what_is_not_verified": "הסכמות קונקרטיות שיושגו בפסגה ותוכן הדיונים המדויק מאחורי הקלעים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9ab1a0167d07839f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/china-confirms-meeting-trump-putin",
       "published_at": "2026-11-16T03:01:15+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_9ab1a0167d07839f",
       "url": "https://www.israelhayom.co.il/news/world-news/other/article/21857960",
       "published_at": "2026-11-15T18:17:34+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    },
    {
     "id": "IRAN-11160711-06",
     "title": "נחיתת מטוס מטען צבאי רוסי בטהרן",
     "summary": "מטוס תובלה רוסי מסוג איליושין 76 המריא ממוסקבה ונחת בטהרן, כאשר מדובר בטיסת מטען רוסית שנייה שמגיעה לעיר בתוך שבוע.",
     "axis": "רוסיה - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T06:23:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T06:23:01+00:00",
     "last_update_at": "2026-11-16T06:23:01+00:00",
     "what_is_not_verified": "אופי וסוג המטען שהועבר במטוס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133704",
       "published_at": "2026-11-16T06:23:01+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "IRAN-11160711-07",
     "title": "הערכת מודיעין אמריקאית לגבי מלאי הטילים של איראן",
     "summary": "לפי דיווח על הערכות מודיעין של ארצות הברית, איראן מחזיקה כאלפיים וחמש מאות טילים וממשיכה לשקם את מאגריה תוך שימוש ברכיבים שאגרה מראש, למרות פגיעות קודמות במתקני ייצור.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T08:32:48+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T08:32:48+00:00",
     "last_update_at": "2026-11-15T08:32:48+00:00",
     "what_is_not_verified": "המספר המדויק של הטילים התקינים ומצב אתרי הייצור בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95034",
       "published_at": "2026-11-15T08:32:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11160711-08",
     "title": "מבצע ממשלתי בעיראק נגד הברחות נפט של גדודי חיזבאללה",
     "summary": "ראש ממשלת עיראק פתח במבצע נגד הברחות נפט באזור ג'ורף א-סח'ר הנשלט בידי המיליציה הפרו-איראנית גדודי חיזבאללה, על רקע לחץ אמריקאי להגביר את הפיקוח על המיליציות ונשקן.",
     "axis": "עיראק - שלוחות איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T22:24:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T22:24:49+00:00",
     "last_update_at": "2026-11-16T04:53:42+00:00",
     "what_is_not_verified": "הטענות על מעורבות ישירה של המיליציה בהברחות לעומת טענותיה שמדובר בסחיטה פוליטית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/16/iraqi-armed-group-denies-involvement-in-oil-smuggling-calls-probe-a-lie?traffic_source=rss",
       "published_at": "2026-11-16T04:53:42+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/11/iraqi-pms-crackdown-on-oil-smuggling-raises-tensions-with-kataib-hezbollah.php",
       "published_at": "2026-11-15T22:24:49+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ורף א-סח'ר, עיראק",
       "lat": 32.8682,
       "lon": 44.2159
      }
     ]
    },
    {
     "id": "IRAN-11160711-09",
     "title": "חשיפת פעולות מוסד היסטוריות לחטיפת קצינים איראנים במסגרת פרשת רון ארד",
     "summary": "תחקיר עיתונאי פירט כי המוסד הישראלי חטף בעבר שני קצינים איראנים בכירים כדי להשיג מידע על הנווט השבוי, בעוד שכיום ההערכה המודיעינית המעודכנת היא שארד מעולם לא הועבר לאיראן.",
     "axis": "ישראל - איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T12:01:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T12:01:33+00:00",
     "last_update_at": "2026-11-16T07:02:10+00:00",
     "what_is_not_verified": "אישור רשמי של מדינת ישראל לפרטי המבצעים ולגורלם המדויק של הקצינים האיראנים המוזכרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_ee2c790d3a6371eb",
       "url": "https://www.ynet.co.il/news/article/yokra14959427",
       "published_at": "2026-11-16T07:02:10+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_ee2c790d3a6371eb",
       "url": "https://www.ynet.co.il/news/article/s1q6q00vrzx",
       "published_at": "2026-11-16T05:10:27+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "fh_ee2c790d3a6371eb",
       "url": "https://www.walla.co.il/news/military/383961534",
       "published_at": "2026-11-16T03:50:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_ee2c790d3a6371eb",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/mossad-abducted-iranian-general-turkey-tortured-him-weeks-killing-him",
       "published_at": "2026-11-16T02:02:24+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_ee2c790d3a6371eb",
       "url": "https://t.me/alexmehacarmel/49598",
       "published_at": "2026-11-15T12:03:05+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_ee2c790d3a6371eb",
       "url": "https://t.me/lelotsenzura/95037",
       "published_at": "2026-11-15T12:01:33+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת משמרות המהפכה על פגיעה מוצלחת במכ\"ם הגנה אווירית של צבא ארצות הברית בבחריין",
    "שמות, נפגעים והיקף הנזק הממשי של שתי מכליות הנפט שנפגעו ממוקשים במצר הורמוז",
    "תכולת המטען הצבאי של מטוס התובלה הרוסי שנחת בטהרן",
    "מספר הטילים המדויק שנותר ברשות איראן לפי דיווחי המודיעין האמריקאי",
    "פרטי חיסולו והשלכת גופתו של הגנרל האיראני עלי-רזא עסכרי המוזכרים בתחקיר עיתונאי"
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
     "actor": "ארצות הברית",
     "declared": [
      "אכיפת מצור כלכלי וימי על נמלי איראן ונתיבי האספקה שלה כדי להביא לקריסתה הכלכלית",
      "הגנה על כוחות ומתקנים אמריקאיים באזור המפרץ מפני מתקפות איראניות ושלוחותיהן"
     ],
     "inferred": [
      "הרתעת איראן מחידוש מתקפות רחבות באמצעות ריכוז כוח ימי של שלוש נושאות מטוסים",
      "דחיפה לשיחות משולשות עם רוסיה וסין לצורך הסדרת סוגיית הגרעין והמלחמה באיראן"
     ],
     "forecast": [
      "המשך הגברת הכוננות הימית ושימור הלחץ הכלכלי לקראת אפשרות לחידוש תקיפות ממוקדות"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "אזהרה גלויה מפני מעבר בנתיבים אמריקאיים במצר הורמוז והגדרתם כמלכודת אש",
      "תקיפת בסיסים אמריקאיים באזור כמענה ישיר לתקיפות של ארצות הברית"
     ],
     "inferred": [
      "הפעלת לחץ נגדי על סחר הנפט העולמי כדי לכפות סיום של המצור הימי האמריקאי",
      "שימור רציפות אספקה צבאית באמצעות שיתוף פעולה אווירי עם רוסיה ושיקום מלאי הטילים"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות באמצעות כטב\"מים ושיבוש ממוקד של תנועת המכליות במצר הורמוז"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "המשך פעילות מודיעינית וביטחונית לבירור גורלם של נעדרים ושבויים"
     ],
     "inferred": [
      "תיאום מהלכים אסטרטגיים וביטחוניים מול ארצות הברית בנוגע לאיום הטילים והגרעין האיראני",
      "מיקוד הקשב המודיעיני והצבאי באיראן תוך מעקב אחר שאר הזירות האזוריות"
     ],
     "forecast": [
      "העמקת שיתוף הפעולה המודיעיני עם וושינגטון נוכח שינויי פריסת הכוחות באזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/16/iraqi-armed-group-denies-involvement-in-oil-smuggling-calls-probe-a-lie?traffic_source=rss",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261115-iran-claims-attack-on-us-military-airbase-in-bahrain",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/nov/15/middle-east-crisis-live-iran-bahrain-strikes-gulf-donald-trump-us-israel-yemen-houthis",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611151817",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86322979/Two-more-tankers-hit-naval-mines-in-Strait-of-Hormuz-says-IRGC",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/other/article/21857960",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/11/iraqi-pms-crackdown-on-oil-smuggling-raises-tensions-with-kataib-hezbollah.php",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388869",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/mossad-abducted-iranian-general-turkey-tortured-him-weeks-killing-him",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133704",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49598",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95037",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383961534",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1q6q00vrzx",
     "accessed_at": "2026-11-16T07:11:36+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T17:22:41+00:00",
  "changes": {
   "IRAN-11160711-01": {
    "kind": "new"
   },
   "IRAN-11160711-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פיצוץ וטביעת מכליות נפט ממוקשים ימיים במצר הורמוז",
    "score": 0.65
   },
   "IRAN-11160711-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מתקפת כטב\"מים איראנית לעבר מתקן מכ\"ם ובסיס אמריקאי בבחריין ויירוטם",
    "score": 1.0
   },
   "IRAN-11160711-04": {
    "kind": "new"
   },
   "IRAN-11160711-05": {
    "kind": "new"
   },
   "IRAN-11160711-06": {
    "kind": "new"
   },
   "IRAN-11160711-07": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "הערכות מודיעין אמריקאיות על מלאי הטילים של איראן",
    "score": 1.0
   },
   "IRAN-11160711-08": {
    "kind": "new"
   },
   "IRAN-11160711-09": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פרסום על חטיפת וחיסול קצינים איראנים בידי המוסד בעבר",
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
  "draft": "drafts/north/2026-11-16T2110__north-202611162110.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-16T21:10:57+00:00",
   "window": {
    "from": "2026-11-15T21:10:57+00:00",
    "to": "2026-11-16T21:10:57+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611162110"
   },
   "summary": "הזירה הצפונית מתאפיינת בהמשך הפעילות הצבאית של ישראל בדרום לבנון ובמרחב הגבול עם סוריה, הכוללת תקיפות נגד הברחות אמצעי לחימה ופעולות מעצר נגד גורמים הקשורים לחיזבאללה. במקביל, מתנהלים דיונים דיפלומטיים אינטנסיביים בין לבנון לבין גורמים בינלאומיים ואמריקאיים סביב יישום החלטה 1701 והסדרים עתידיים לאחר סיום מנדט יוניפי\"ל.",
   "fronts": [
    {
     "name": "החזית הלבנונית-ישראלית",
     "status": "פעיל - תקיפות אוויריות, פעולות קרקעיות, מעצרים וחילופי אש"
    },
    {
     "name": "הציר הסורי-לבנוני",
     "status": "פעיל - מעבר אמצעי לחימה ותקיפות ממוקדמות"
    }
   ],
   "events": [
    {
     "id": "NORTH-11162110-01",
     "title": "תקיפת אמצעי לחימה בגבול סוריה-לבנון",
     "summary": "חיל האוויר הישראלי תקף משלוח אמצעי לחימה במרחב ג'נתא שיועד לחיזבאללה",
     "axis": "ישראל-לבנון-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T08:41:26+00:00",
     "last_update_at": "2026-11-16T15:52:21+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
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
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133717",
       "published_at": "2026-11-16T08:49:39+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25613",
       "published_at": "2026-11-16T08:41:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11162110-02",
     "title": "מעצר פעילים בדרום לבנון",
     "summary": "כוחות צה\"ל עצרו שני פעילי טרור מהפלוגות הלבנוניות הפועלות בחסות חיזבאללה",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T09:46:12+00:00",
     "last_update_at": "2026-11-16T15:02:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968277/netanyahus-government-maintains-military-pressure-as-israel-faces-inte/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968277",
       "published_at": "2026-11-16T15:02:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1389140",
       "published_at": "2026-11-16T14:55:38+00:00"
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
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968245/israeli-army-says-it-arrested-two-members-of-lebanese-resistance-briga/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968245",
       "published_at": "2026-11-16T12:07:13+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israel-abducts-2-lebanese-brothers-carries-out-strikes-in-lebanon/4126389",
       "published_at": "2026-11-16T09:46:12+00:00"
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
     "id": "NORTH-11162110-03",
     "title": "תקיפות והפגזות בדרום לבנון",
     "summary": "מל\"ט ישראלי התפוצץ מעל שקרא והתקיימה הפגזה בסביבת מייפדון וכפר תבנית",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T15:29:46+00:00",
     "last_update_at": "2026-11-16T15:32:13+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9c8c7d68bfbe30d1",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-drone-blast-artillery-shelling-hit-southern-lebanon-state-media",
       "published_at": "2026-11-16T15:32:13+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_9c8c7d68bfbe30d1",
       "url": "https://english.almanar.com.lb/article/151577/",
       "published_at": "2026-11-16T15:29:46+00:00"
      }
     ],
     "places": [
      {
       "name": "מייפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      },
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על היקף הנזק המדויק בתקיפות בג'נתא",
    "פרטי ההסכמים העתידיים להחלפת כוחות יוניפי\"ל שטרם גובשו רשמית"
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
      "הסרת איומים מעל אזרחי ישראל",
      "מניעת הברחות אמצעי לחימה לחיזבאללה דרך סוריה ולבנון"
     ],
     "inferred": [
      "שמירה על חופש פעולה צבאי בתוך לבנון וסוריה",
      "שחיקת היכולות הצבאיות של חיזבאללה ושלוחותיו"
     ],
     "forecast": [
      "המשך התקיפות נגד תשתיות הברחה והתחמשות",
      "שמירה על נוכחות צבאית במרחבי חיכוך בדרום לבנון"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "התנגדות לנוכחות ולפעילות הצבאית של ישראל בשטח לבנון"
     ],
     "inferred": [
      "שיקום ויכולת הצטיידות באמל\"ח דרך גבול סוריה",
      "שמירה על מעמדו הצבאי והפוליטי חרף הלחץ הבינלאומי"
     ],
     "forecast": [
      "המשך ניסיונות ההברחה והתחזקות בתמיכת גורמים אזוריים",
      "היערכות לאפשרות של עימות מתמשך מול ישראל"
     ]
    },
    {
     "actor": "לבנון (הדרג המדיני)",
     "declared": [
      "יישום החלטה 1701 ודרישה לנסיגה ישראלית משטחים לבנוניים",
      "שמירה על ריבונות לאומית ופריסת צבא לבנון בגבול"
     ],
     "inferred": [
      "ניסיון למנוע וואקום ביטחוני לאחר סיום מנדט יוניפי\"ל באמצעות מעורבות בינלאומית",
      "תמרון דיפלומטי בין לחצי ארצות הברית לבין השפעת חיזבאללה"
     ],
     "forecast": [
      "המשך מגעים להשגת הסדר ביטחוני חדש לפני סוף השנה",
      "ניסיונות להרחיב את פריסת כוחות הביטחון המקומיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/151577/",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-abducts-2-lebanese-brothers-carries-out-strikes-in-lebanon/4126389",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968245/israeli-army-says-it-arrested-two-members-of-lebanese-resistance-briga/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968245",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1389140",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-drone-blast-artillery-shelling-hit-southern-lebanon-state-media",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthis-seize-ground-yemen-israeli-strikes-target-lebanon",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133733",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25620",
     "accessed_at": "2026-11-16T21:10:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-16T07:20:49+00:00",
  "changes": {
   "NORTH-11162110-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפה אווירית ישראלית באזור א-שערה בבקאע בגבול לבנון-סוריה",
    "score": 0.65
   },
   "NORTH-11162110-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מעצר שני אחים בכפר שבעא בדרום לבנון בידי כוח ישראלי",
    "score": 1.0
   },
   "NORTH-11162110-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות, ירי ארטילרי וטיסות נמוכות בדרום לבנון ובביירות",
    "score": 0.65
   }
  }
 }
};
