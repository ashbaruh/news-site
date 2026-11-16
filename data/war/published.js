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
  "draft": "drafts/ukraine/2026-11-16T0040__ukraine-202611160040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-16T00:40:35+00:00",
   "window": {
    "from": "2026-11-15T00:40:35+00:00",
    "to": "2026-11-16T00:40:35+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611160040"
   },
   "summary": "העימות הצבאי בין אוקראינה לרוסיה ממשיך להתרחב בעומק שטחי שני הצדדים לצד לחצים בזירה הבינלאומית. כוחות אוקראינה מרחיבים תקיפות ארוכות טווח נגד תשתיות דלק, מפעלים ושדות תעופה צבאיים בתוך רוסיה, בעוד הצבא הרוסי מגביר מתקפות אוויריות ממוקדות על תשתיות אנרגיה וערים באוקראינה. ברקע המתיחות, עולות יוזמות והצעות להסדרים הכוללים ויתורים טריטוריאליים תמורת הצטרפות לנאט\"ו, לצד איומים רוסיים על נוכחות דיפלומטית מערבית.",
   "fronts": [
    {
     "name": "חזית הדונבאס",
     "status": "לחימה נמשכת, הפגזות הדדיות ודיונים מדיניים סביב נסיגה אפשרית"
    },
    {
     "name": "עורף רוסיה (מחוזות אסטרחן, אוריול, קורסק, לנינגרד וטטרסטן)",
     "status": "מתקפות כטב\"מים אוקראיניות ממושכות נגד מתקני אנרגיה, בסיסים צבאיים ומפעלים"
    },
    {
     "name": "העורף האוקראיני (קייב, חרקוב, אודסה, צ'רקאסי)",
     "status": "תקיפות אוויריות רוסיות על תשתיות קריטיות ומוסדות, והיערכות למתקפת טילים בליסטיים"
    },
    {
     "name": "הגבול הצפון-מזרחי והמדינות הבלטיות",
     "status": "מתיחות ביטחונית גבוהה וסגירת מעברי גבול בעקבות ניסיונות חבלה וריגול רוסיים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11160040-01",
     "title": "נפילת לוחמת ומפעילת כטב\"מים אוקראינית בקרבות",
     "summary": "מאמנת האגרוף התאילנדי ומפעילת הכטב\"מים ריאנה, הלוחמת הראשונה בגדוד המתנדבים הצ'צ'ני על שם שייח' מנצור, נהרגה בקרב מול כוחות רוסיה.",
     "axis": "קווי העימות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T16:44:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T16:44:37+00:00",
     "last_update_at": "2026-11-16T00:34:00+00:00",
     "what_is_not_verified": "המיקום המדויק ונסיבות המוות בשדה הקרב לא פורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4184949-ukrainian-athlete-and-servicewoman-rayana-killed-in-action.html",
       "published_at": "2026-11-16T00:34:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/fantastic-female-warrior-drone-operator-rayana-killed-fighting-russian-forces/",
       "published_at": "2026-11-15T16:44:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-02",
     "title": "תקיפות אוקראיניות ופגיעה באזרחים באזור דונצק",
     "summary": "כוחות אוקראינה שיגרו עשרות קליעים לעבר שטחי דונצק, וכתוצאה מכך נהרג אזרח אחד ונפצעו שמונה נוספים.",
     "axis": "דונבאס",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T00:08:12+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T00:08:12+00:00",
     "last_update_at": "2026-11-16T00:08:12+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח הרוסי על היקף הנפגעים ומספר השיגורים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2218427",
       "published_at": "2026-11-16T00:08:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-03",
     "title": "טענת אוקראינה לפגיעה נרחבת ביכולת זיקוק הנפט של רוסיה",
     "summary": "נשיא אוקראינה טען כי מתקפות הכטב\"מים של כוחותיו השביתו למעלה ממחצית מיכולת זיקוק הנפט של רוסיה, כתגובה לפגיעה בתשתיות האנרגיה האוקראיניות.",
     "axis": "עורף רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T20:20:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T20:20:37+00:00",
     "last_update_at": "2026-11-15T23:30:24+00:00",
     "what_is_not_verified": "היקף הפגיעה המדויק בכושר הזיקוק של רוסיה לא אומת באופן בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drone-attacks-neutralized-55-of-russias-oil-refining-capacity-zelensky-says/",
       "published_at": "2026-11-15T23:30:24+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133700",
       "published_at": "2026-11-15T20:20:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-04",
     "title": "חשש ממיקוש שטח עירוני בחרסון",
     "summary": "תושבים בעיר חרסון הוזהרו מפני אפשרות שכוחות רוסיים פיזרו מוקשים או מטעני חבלה ברחוב בעיר.",
     "axis": "חזית הדרום",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T22:34:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T22:34:00+00:00",
     "last_update_at": "2026-11-15T22:34:00+00:00",
     "what_is_not_verified": "לא אומת אם הונחו בפועל מוקשים בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184839-residents-warned-of-possible-russian-mining-of-area-in-kherson.html",
       "published_at": "2026-11-15T22:34:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-11160040-05",
     "title": "אסטוניה סוגרת מעברי גבול עם רוסיה בעקבות ניסיון חבלה במפעל כטב\"מים",
     "summary": "רשויות אסטוניה הודיעו על סגירת כל מעברי הגבול עם רוסיה לאחר סיכול ניסיון הצתה וחבלה במפעל המייצר כטב\"מים עבור אוקראינה, פעולה שיוחסה למודיעין הצבאי הרוסי.",
     "axis": "הזירה הבינלאומית והגבול הצפון-מזרחי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T03:06:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:51:00+00:00",
     "last_update_at": "2026-11-15T22:17:09+00:00",
     "what_is_not_verified": "מידת המעורבות הישירה של המודיעין הרוסי מעבר להצהרות שלטונות אסטוניה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/15/estonia-to-close-all-border-crossings-with-russia-after-attack-on-drone-maker",
       "published_at": "2026-11-15T22:17:09+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/estonia-to-close-border-with-russia-after-moscow-linked-sabotage-attempt-on-drone-maker/",
       "published_at": "2026-11-15T20:13:19+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062971/",
       "published_at": "2026-11-15T15:51:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-06",
     "title": "ביקור הנסיך הארי בלבוב ותמיכה בפצועי מלחמה",
     "summary": "הנסיך הארי ערך ביקור פתע במערב אוקראינה, נפגש עם פצועי מלחמה ואנשי צוות רפואי, והביע תמיכה בניצחון אוקראינה במסגרת משחקי אינוויקטוס המקומיים.",
     "axis": "מערב אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:27:00+00:00",
     "last_update_at": "2026-11-15T22:00:24+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/uk-news/2026/nov/15/prince-harry-ukraine-war-surprise-trip-invictus-games",
       "published_at": "2026-11-15T22:00:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/prince-harry-visits-lviv-to-support-ukrainian-veterans-at-invictus-games/",
       "published_at": "2026-11-15T17:05:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062969/",
       "published_at": "2026-11-15T15:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לבוב, אוקראינה",
       "lat": 49.842,
       "lon": 24.0316
      }
     ]
    },
    {
     "id": "UKRAINE-11160040-07",
     "title": "פגיעת כטב\"ם רוסי במוסד חינוכי בחרקוב ופיצוצים בערים באוקראינה",
     "summary": "כטב\"ם רוסי פגע במבנה חינוכי לילדים ברובע שבצ'נקיבסקי בחרקוב, במקביל לדיווחים על פיצוצים ואזעקות בחרקוב ובצ'רקאסי.",
     "axis": "צפון-מזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T21:24:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T21:24:06+00:00",
     "last_update_at": "2026-11-15T21:37:00+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק במוסד החינוכי ובצ'רקאסי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184978-russian-drone-hits-childrens-educational-facility-in-kharkiv.html",
       "published_at": "2026-11-15T21:37:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2218411",
       "published_at": "2026-11-15T21:24:06+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "צ'רקאסי, אוקראינה",
       "lat": 49.4447,
       "lon": 32.0588
      }
     ]
    },
    {
     "id": "UKRAINE-11160040-08",
     "title": "אזהרה אוקראינית מפני גל תקיפות טילים בליסטיים",
     "summary": "נשיא אוקראינה התריע בהתבסס על מידע מודיעיני כי רוסיה נערכת לביצוע מתקפות נרחבות נוספות באמצעות טילים בליסטיים.",
     "axis": "העורף האוקראיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T19:35:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T19:35:39+00:00",
     "last_update_at": "2026-11-15T21:19:00+00:00",
     "what_is_not_verified": "מועד ומיקומי התקיפה הצפויים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184977-russia-preparing-new-ballistic-missile-strikes-on-ukraine-zelensky.html",
       "published_at": "2026-11-15T21:19:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49616",
       "published_at": "2026-11-15T19:35:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-09",
     "title": "מתקפות כטב\"מים אוקראיניות ופציעת אזרחים ברילסק שבמחוז קורסק",
     "summary": "מטעני חבלה שהוטלו מכטב\"מים אוקראיניים בעיר רילסק שבמחוז קורסק הביאו לפציעת שני אזרחים באורח קשה ולשיבוש פעילות חבלנים.",
     "axis": "מחוז קורסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T20:47:12+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T20:47:12+00:00",
     "last_update_at": "2026-11-15T20:58:20+00:00",
     "what_is_not_verified": "אין אימות בלתי תלוי לטענת מושל המחוז הרוסי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2218409",
       "published_at": "2026-11-15T20:58:20+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2218405",
       "published_at": "2026-11-15T20:47:12+00:00"
      }
     ],
     "places": [
      {
       "name": "רילסק, רוסיה",
       "lat": 51.5705,
       "lon": 34.6835
      }
     ]
    },
    {
     "id": "UKRAINE-11160040-10",
     "title": "פניית זלנסקי להסרת הגבלות רשת סטארלינק",
     "summary": "נשיא אוקראינה קרא לממשל האמריקני ולאילון מאסק לבטל את ההגבלות והאטת מהירות הרשת הלוויינית, בטענה שהדבר מקשה על בלימת המתקפות הרוסיות.",
     "axis": "סיוע צבאי וטכנולוגי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T19:32:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T19:32:39+00:00",
     "last_update_at": "2026-11-15T19:32:39+00:00",
     "what_is_not_verified": "ההשפעה המדויקת של האטת הרשת על הלחימה בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c6m25zg88k45o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-15T19:32:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-11",
     "title": "דיפלומטים מערביים נשארים בקייב חרף איומי רוסיה והתגברות התקיפות",
     "summary": "שגרירויות מערביות ומערך משלחת האיחוד האירופי בקייב הודיעו על הישארותם בעיר חרף איומים מצד מוסקבה להתפנות ועלייה בעוצמת התקיפות שפוגעות בתשתיות חשמל ומים.",
     "axis": "קייב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T17:36:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T17:36:00+00:00",
     "last_update_at": "2026-11-15T18:52:25+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/15/western-diplomats-stay-put-kyiv-russia-strikes-ukraine",
       "published_at": "2026-11-15T18:52:25+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062985/",
       "published_at": "2026-11-15T17:36:00+00:00"
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
     "id": "UKRAINE-11160040-12",
     "title": "תקיפות אוקראיניות על בסיס אווירי באסטרחן ואתר כטב\"מים באוריול",
     "summary": "צבא אוקראינה תקף את שדה התעופה הצבאי אחטובינסק במחוז אסטרחן, שם נרשם פיצוץ משני במחסן חימוש ומכ\"ם נפגע, וכן מתחם אחסון ושיגור כטב\"מים במחוז אוריול.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T12:48:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T12:48:00+00:00",
     "last_update_at": "2026-11-15T18:02:19+00:00",
     "what_is_not_verified": "נזקי התקיפה בפועל לא אושרו בידי משרד ההגנה הרוסי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-launches-mass-attack-on-odesa-oblast-as-ukraine-strikes-airfield-drone-launch-site-in-russia/",
       "published_at": "2026-11-15T18:02:19+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49599",
       "published_at": "2026-11-15T12:48:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אחטובינסק, רוסיה",
       "lat": 48.2848,
       "lon": 46.1644
      }
     ]
    },
    {
     "id": "UKRAINE-11160040-13",
     "title": "השבתת מכלי דלק בנמל אוסט-לוגה ברוסיה בעקבות תקיפה",
     "summary": "תצלומי לוויין הצביעו על שריפתם המלאה של לפחות חמישה מכלי אחסון דלק בנמל היצוא אוסט-לוגה במפרץ הפיני, כתוצאה מפגיעת כטב\"מים אוקראיניים.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T16:53:00+00:00",
     "last_update_at": "2026-11-15T16:53:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062982/",
       "published_at": "2026-11-15T16:53:00+00:00"
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
     "id": "UKRAINE-11160040-14",
     "title": "הצעת ארה\"ב לחילופי שטחים בנאט\"ו ועמדת זלנסקי",
     "summary": "זלנסקי ציין כי גורמים אמריקניים העלו לראשונה את האפשרות של נסיגה מחלקי דונבאס תמורת הצטרפות לנאט\"ו; הוא שלל ויתור ישיר אך ציין כי יביא זאת למשאל עם רק אם יינתן סיוע וערבויות ביטחון מלאות.",
     "axis": "מגעים מדיניים ומשא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T03:38:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T03:38:18+00:00",
     "last_update_at": "2026-11-15T18:02:19+00:00",
     "what_is_not_verified": "פרטי ההצעה האמריקנית המדויקת לא פורסמו באופן רשמי בידי וושינגטון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russia-launches-mass-attack-on-odesa-oblast-as-ukraine-strikes-airfield-drone-launch-site-in-russia/",
       "published_at": "2026-11-15T18:02:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/15/ukraine-war-briefing-us-proposes-kyiv-cede-land-to-russia-for-nato-membership-zelenskyy-says",
       "published_at": "2026-11-15T03:38:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11160040-15",
     "title": "פגיעות במפעל כימי בטטרסטן ותקיפה בטגנרוג",
     "summary": "כוחות אוקראיניים פגעו במפעל כימי בעיר ניז'נקמסק שבטטרסטן וביצעו תקיפה באזור טגנרוג לחופי ים אזוב.",
     "axis": "עורף רוסיה וחוף ים אזוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T01:56:13+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T01:56:13+00:00",
     "last_update_at": "2026-11-15T02:52:48+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בניז'נקמסק ובטגנרוג",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49595",
       "published_at": "2026-11-15T02:52:48+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49594",
       "published_at": "2026-11-15T01:56:13+00:00"
      }
     ],
     "places": [
      {
       "name": "ניז'נקמסק, רוסיה",
       "lat": 55.6413,
       "lon": 51.816
      },
      {
       "name": "טגנרוג, רוסיה",
       "lat": 47.2155,
       "lon": 38.9284
      }
     ]
    }
   ],
   "not_verified": [
    "טענת אוקראינה להשבתת 55% מכושר זיקוק הנפט של רוסיה",
    "דיווח הרשויות בדונצק על מספר הנפגעים וההפגזות האוקראיניות",
    "הדיווח על מיקוש ברחוב ספציפי בעיר חרסון",
    "היקף הנזקים המדויק בתקיפות על שדה התעופה באחטובינסק ובמתקנים בטטרסטן ובטגנרוג",
    "פרטי הצעת ארצות הברית לחילופי שטחים עבור כניסה לנאט\"ו"
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
     "actor": "אוקראינה",
     "declared": [
      "אי-כניעה לוויתור על שטחי דונבאס ללא ערבויות ביטחון ומשאל עם",
      "השבתת תשתיות נפט וצבא רוסיות בתגובה לתקיפות בעורף",
      "האצת רפורמות להצטרפות לאיחוד האירופי ודרישה להסרת מגבלות תקשורת"
     ],
     "inferred": [
      "שחיקת היכולות הלוגיסטיות והכלכליות של רוסיה בעומק שטחה כדי לכפות מנופי לחץ",
      "שמירה על מעורבות מערבית ודיפלומטית רציפה בבירה קייב כמגן מפני תקיפות קטלניות"
     ],
     "forecast": [
      "המשך מיקוד בפגיעה במתקני אנרגיה ובסיסים אוויריים ברוסיה בעזרת כטב\"מים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "דרישה להסכם ביטחון אירופי כולל כתנאי לסיום המלחמה",
      "דרישה לפינוי נציגויות מערביות מקייב בעקבות סכנת פגיעה"
     ],
     "inferred": [
      "הרס שיטתי של מערכות האנרגיה והתשתיות האזרחיות באוקראינה להכרעת העורף",
      "שיבוש שרשראות אספקה וייצור נשק במדינות המערב באמצעות פעולות חבלה עקיפות"
     ],
     "forecast": [
      "החרפת מתקפות הטילים הבליסטיים על יעדים אסטרטגיים באוקראינה לקראת החורף"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c6m25zg88k45o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/15/ukraine-war-briefing-us-proposes-kyiv-cede-land-to-russia-for-nato-membership-zelenskyy-says",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-russia-launches-mass-attack-on-odesa-oblast-as-ukraine-strikes-airfield-drone-launch-site-in-russia/",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/15/8062982/",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2218405",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133700",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49594",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4184977-russia-preparing-new-ballistic-missile-strikes-on-ukraine-zelensky.html",
     "accessed_at": "2026-11-16T00:40:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T07:05:39+00:00",
  "changes": {
   "UKRAINE-11160040-01": {
    "kind": "new"
   },
   "UKRAINE-11160040-02": {
    "kind": "possible",
    "prev": "הפגזות אוקראיניות על שטחי דונצק",
    "score": 0.467
   },
   "UKRAINE-11160040-03": {
    "kind": "possible",
    "prev": "שיחות להחלפת שבויים רחבת היקף בין אוקראינה לרוסיה",
    "score": 0.467
   },
   "UKRAINE-11160040-04": {
    "kind": "new"
   },
   "UKRAINE-11160040-05": {
    "kind": "possible",
    "prev": "מתקפת כטב\"מים על טגנרוג ברוסיה",
    "score": 0.467
   },
   "UKRAINE-11160040-06": {
    "kind": "new"
   },
   "UKRAINE-11160040-07": {
    "kind": "new"
   },
   "UKRAINE-11160040-08": {
    "kind": "new"
   },
   "UKRAINE-11160040-09": {
    "kind": "new"
   },
   "UKRAINE-11160040-10": {
    "kind": "new"
   },
   "UKRAINE-11160040-11": {
    "kind": "new"
   },
   "UKRAINE-11160040-12": {
    "kind": "new"
   },
   "UKRAINE-11160040-13": {
    "kind": "new"
   },
   "UKRAINE-11160040-14": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצעת ארה\"ב לנסיגה מדונבאס תמורת הצטרפות לנאט\"ו",
    "score": 1.0
   },
   "UKRAINE-11160040-15": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת כטב\"ם במפעל פטרוכימי בניז'נקמסק בטטרסטן",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-16T0720__north-202611160720.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-16T07:20:49+00:00",
   "window": {
    "from": "2026-11-15T07:20:49+00:00",
    "to": "2026-11-16T07:20:49+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611160720"
   },
   "summary": "הגזרה הצפונית מתאפיינת בחיכוך צבאי ישיר בדרום לבנון ובבקאע לצד פעילות קרקעית נקודתית של צה\"ל לאיתור תשתיות ולמעצר חשודים. ישראל מרחיבה תקיפות לעומק הבקאע בסמוך לגבול סוריה, בעוד חיזבאללה עוקב אחר היערכות הכוחות ומנסה לשקם יכולות. במקביל, בסוריה נמשכת התמודדות עם נוכחות ישראלית קרקעית באזור קוניטרה לצד הידוק התיאום הכלכלי והביטחוני עם ירדן.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות שוטפת של צה\"ל הכוללת פשיטות, השמדת תוואים תת-קרקעיים, מעצרים, ירי ארטילרי וחיכוך מול תצפיות חיזבאללה"
    },
    {
     "name": "בקאע וגבול לבנון-סוריה",
     "status": "הסלמה נקודתית עם חידוש תקיפות אוויריות ישראליות באזור א-שערה לאחר הפוגה ממושכת"
    },
    {
     "name": "דרום סוריה (קוניטרה)",
     "status": "מתיחות מתמשכת סביב חדירות צה\"ל ודרישות אזרחיות מקומיות להחזרת כוחות צבא סוריה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11160720-01",
     "title": "מעצר שני אחים בכפר שבעא בדרום לבנון בידי כוח ישראלי",
     "summary": "כוח צבאי ישראלי נכנס לפנות בוקר לבית בעיירה שבעא דרך ציר ברכת א-נקאר, עצר שני אחים בשם מוחמד ואסעד פארס חמדאן והעבירם לשטח ישראל.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T04:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T07:05:47+00:00",
     "last_update_at": "2026-11-16T07:08:43+00:00",
     "what_is_not_verified": "צה\"ל לא התייחס רשמית לדיווח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_b72fb0858afbd575",
       "url": "https://www.ynet.co.il/news/article/skaivq000me",
       "published_at": "2026-11-16T07:08:43+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_b72fb0858afbd575",
       "url": "https://english.almanar.com.lb/article/151277/",
       "published_at": "2026-11-16T07:05:47+00:00"
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
     "id": "NORTH-11160720-02",
     "title": "תקיפה אווירית ישראלית באזור א-שערה בבקאע בגבול לבנון-סוריה",
     "summary": "מטוסי קרב ישראליים ביצעו תקיפה אווירית באזור ג'רוד א-שערה בבקאע, בצד הלבנוני של הגבול עם סוריה, לראשונה מזה מספר חודשים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-16T02:30:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-16T06:13:43+00:00",
     "last_update_at": "2026-11-16T07:08:43+00:00",
     "what_is_not_verified": "ההערכה כי התקיפה נועדה לסכל הברחת אמל\"ח לחזבאללה אינה מאומתת רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_69bf198f4a8980a3",
       "url": "https://www.ynet.co.il/news/article/skaivq000me",
       "published_at": "2026-11-16T07:08:43+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_69bf198f4a8980a3",
       "url": "https://english.almanar.com.lb/article/151262/",
       "published_at": "2026-11-16T06:41:13+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_69bf198f4a8980a3",
       "url": "https://t.me/abualiexpress/133701",
       "published_at": "2026-11-16T06:13:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11160720-03",
     "title": "השמדת תוואי תת-קרקעי של חיזבאללה בכפר מג'דל זון",
     "summary": "כוחות חטיבה 300 ולוחמי יהל\"ם השמידו תוואי תת-קרקעי באורך כ-35 מטרים ובו שני חדרי שהייה במהלך פעילות במרחב הכפר מג'דל זון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T15:05:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:05:46+00:00",
     "last_update_at": "2026-11-15T15:05:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25610",
       "published_at": "2026-11-15T15:05:46+00:00"
      }
     ],
     "places": [
      {
       "name": "מג'דל זון, לבנון",
       "lat": 33.1503,
       "lon": 35.226
      }
     ]
    },
    {
     "id": "NORTH-11160720-04",
     "title": "תקיפות אוויריות, ירי ארטילרי וטיסות נמוכות בדרום לבנון ובביירות",
     "summary": "מטוסי קרב ביצעו תקיפות בכפרתבנית ואל-קנטרה וטסו בגובה נמוך מעל ביירות, לצד ירי ארטילרי לעבר שורת יעדים בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T09:00:50+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T09:00:50+00:00",
     "last_update_at": "2026-11-15T12:26:22+00:00",
     "what_is_not_verified": "אין אימות עצמאי לכלל נקודות הירי המדויקות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_c016a0430bd682e2",
       "url": "https://english.almanar.com.lb/article/151167/",
       "published_at": "2026-11-15T12:26:22+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_c016a0430bd682e2",
       "url": "https://t.me/abualiexpress/133668",
       "published_at": "2026-11-15T09:00:50+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11160720-05",
     "title": "חשיפת תחקיר על פעולות המוסד לאיתור רון ארד בלבנון, סוריה וטורקיה",
     "summary": "תחקיר בעיתונות הזרה חושף כי המוסד חטף בעבר קצינים איראנים בסוריה ובאיסטנבול וביצע פשיטות בנבי שית בלבנון בניסיון להתחקות אחר עקבותיו של רון ארד.",
     "axis": "ישראל - סוריה - לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T12:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T12:01:33+00:00",
     "last_update_at": "2026-11-16T07:02:10+00:00",
     "what_is_not_verified": "נסיבות מותם או היעלמותם של הקצינים האיראנים וגורלו המדויק של רון ארד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/yokra14959427",
       "published_at": "2026-11-16T07:02:10+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961534",
       "published_at": "2026-11-16T03:50:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/mossad-abducted-iranian-general-turkey-tortured-him-weeks-killing-him",
       "published_at": "2026-11-16T02:02:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkpspipazl",
       "published_at": "2026-11-15T22:36:22+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/mossad-abducted-two-iranian-generals-over-ron-arad-disappearance",
       "published_at": "2026-11-15T17:44:26+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49598",
       "published_at": "2026-11-15T12:03:05+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95037",
       "published_at": "2026-11-15T12:01:33+00:00"
      }
     ],
     "places": [
      {
       "name": "נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "NORTH-11160720-06",
     "title": "סדנת פעילים בקוניטרה בדרישה להגנה מול חדירות צה\"ל",
     "summary": "פעילים סורים קיימו סדנה בקוניטרה וקראו להחזרת צבא סוריה לאזורים שאליהם נכנסו כוחות ישראליים ולסיוע בשיקום האוכלוסייה והתשתיות בדרום סוריה.",
     "axis": "סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T19:07:50+00:00",
     "last_update_at": "2026-11-15T19:07:50+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_1a565a03cce8c684",
       "url": "https://english.enabbaladi.net/archives/2026/11/syrian-activists-in-quneitra-call-for-concrete-action-to-support-southern-syria/",
       "published_at": "2026-11-15T19:07:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11160720-07",
     "title": "חתימת שורת הסכמי שיתוף פעולה בין סוריה לירדן בדמשק",
     "summary": "משלחות ממשלתיות מסוריה ומירדן חתמו בדמשק על 11 מסמכי הבנות ופרוטוקולים בתחומי תחבורה, מעברי גבול, תעופה וחקלאות במסגרת המועצה לתיאום עליון.",
     "axis": "סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T17:20:22+00:00",
     "last_update_at": "2026-11-15T17:20:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/syria-and-jordan-from-civilian-airstrike-crisis-to-higher-coordination-council/",
       "published_at": "2026-11-15T17:20:22+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11160720-08",
     "title": "חטיבת כרמלי קיימה תרגיל הקמת בית חולים שדה נייד לאחר פעילות בסוריה ובלבנון",
     "summary": "לוחמי חטיבת המילואים כרמלי ערכו אימון הקמה ראשון של בית חולים שדה נייד עם חדר ניתוח המיועד להעניק טיפול רפואי עשרות קילומטרים מעבר לגבול.",
     "axis": "ישראל - סוריה - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T17:02:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T17:02:14+00:00",
     "last_update_at": "2026-11-15T17:02:14+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25612",
       "published_at": "2026-11-15T17:02:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11160720-09",
     "title": "דיונים על עתיד יוניפי\"ל והצעת מודל כוח רב-לאומי בלבנון",
     "summary": "בכיר אמריקאי צפוי להציג בביירות חלופות לכוח יוניפי\"ל על בסיס מודל כוח המשקיפים בסיני, בעוד בלבנון מתנגדים לאישור מראש ומדגישים את החלטה 1701.",
     "axis": "ישראל - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T15:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T15:00:00+00:00",
     "last_update_at": "2026-11-15T15:05:00+00:00",
     "what_is_not_verified": "פרטי ההצעות הרשמיות שיוצגו בפועל בשיחות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_58b90676a56f9d17",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968102/exclusive-lbci-interview-un-official-stresses-importance-of-resolution/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968102",
       "published_at": "2026-11-15T15:05:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_58b90676a56f9d17",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968083/unifils-successor-washingtons-vision-meets-lebanons-red-lines/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968083",
       "published_at": "2026-11-15T15:00:00+00:00"
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
     "id": "NORTH-11160720-10",
     "title": "תפיסת נשק בידי צבא לבנון ברובע הדאחייה בביירות",
     "summary": "צבא לבנון פשט על מחסן באזור אל-מושארפיה בדאחייה והחרים אמצעי לחימה ותחמושת במסגרת מאבק בסחר בנשק, מבלי לייחסם רשמית לחיזבאללה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T10:25:41+00:00",
     "last_update_at": "2026-11-15T10:25:41+00:00",
     "what_is_not_verified": "שיוך אמצעי הלחימה שנתפסו לארגון חיזבאללה או תיאום אפשרי של הפעולה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/weapons-seizure-in-beiruts-dahiyeh-a-significant-security-achievement-or-a-false-impression-of-progress-in-disarming-hezbollah/",
       "published_at": "2026-11-15T10:25:41+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות כלי התקשורת בלבנון על חטיפת שני האחים בידי כוח צה\"ל בשבעא טרם זכו להתייחסות או אישור רשמי של צה\"ל",
    "ההשערה כי התקיפה בא-שערה נועדה לסיכול משלוח הברחת אמל\"ח לחיזבאללה",
    "שיוך מחסן הנשק שפשט עליו צבא לבנון בדאחייה לארגון חיזבאללה",
    "טענות תחקיר הניו יורק טיימס בדבר הריגת גנרל איראני בידי המוסד בטורקיה והשלכתו לים",
    "נסיבות מותו ומיקום קבורתו של הנווט רון ארד בכפר נבי שית"
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
     "actor": "ישראל",
     "declared": [
      "הסרת איומים על אזרחי ישראל וכוחות הביטחון והשמדת תשתיות טרור",
      "מחויבות להסכם הפסקת האש בדרום לבנון"
     ],
     "inferred": [
      "שימור חופש פעולה התקפי בלבנון ופגיעה בצירי הברחות אמל\"ח בגבול סוריה",
      "בחינת יכולות רפואיות מתקדמות ללחימה בעומק שטח האויב"
     ],
     "forecast": [
      "המשך פשיטות קרקעיות נקודתיות להשמדת תשתיות בדרום לבנון תוך תגובה תקיפה לכל ניסיון התעצמות"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "שמירה על נוכחות פעילה ומחויבות חוקתית ומשפטית להתנגדות לתוקפנות הישראלית"
     ],
     "inferred": [
      "שיקום מערכים צבאיים במרחב הקו הצהוב ובעומק, ואיסוף מודיעין לאיתור נקודות תורפה אצל צה\"ל",
      "שימור השפעה פוליטית ואזרחית בלבנון דרך איגודים מקצועיים ומערכות מקומיות"
     ],
     "forecast": [
      "המשך מעקב וחיכוך מבוקר מול כוחות צה\"ל תוך ניסיון להימנע מהידרדרות ללחימה מלאה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "חיזוק שיתוף הפעולה הכלכלי, האקדמי והביטחוני מול ירדן"
     ],
     "inferred": [
      "שאיפה לביסוס לגיטימציה שלטונית ויציבות כלכלית מול משבר שער החליפין והגירעון",
      "הימנעות מעימות ישיר עם ישראל למרות חדירות כוחותיה באזור קוניטרה"
     ],
     "forecast": [
      "המשך הידוק קשרים אזוריים עם מדינות ערב שכנות לטובת שיקום כלכלי ופתיחת מעברים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/weapons-seizure-in-beiruts-dahiyeh-a-significant-security-achievement-or-a-false-impression-of-progress-in-disarming-hezbollah/",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/151167/",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/syria-and-jordan-from-civilian-airstrike-crisis-to-higher-coordination-council/",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/968083/unifils-successor-washingtons-vision-meets-lebanons-red-lines/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968083",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/mossad-abducted-iranian-general-turkey-tortured-him-weeks-killing-him",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/mossad-abducted-two-iranian-generals-over-ron-arad-disappearance",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133668",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49598",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25612",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95037",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383961534",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkpspipazl",
     "accessed_at": "2026-11-16T07:20:49+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T17:25:38+00:00",
  "changes": {
   "NORTH-11160720-01": {
    "kind": "new"
   },
   "NORTH-11160720-02": {
    "kind": "new"
   },
   "NORTH-11160720-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "השמדת תוואי תת-קרקעי של חיזבאללה במג'דל זון בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11160720-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות, ארטילריה ופיצוצים יזומים של צה\"ל בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11160720-05": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "חשיפת תחקיר על פעולות מודיעין של ישראל בסוריה, טורקיה ולבנון בתיק רון ארד",
    "score": 1.0
   },
   "NORTH-11160720-06": {
    "kind": "new"
   },
   "NORTH-11160720-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "חתימת הסכמי שיתוף פעולה בין סוריה לירדן בדמשק",
    "score": 1.0
   },
   "NORTH-11160720-08": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תרגיל הקמת בית חולים שדה נייד בחטיבת כרמלי",
    "score": 1.0
   },
   "NORTH-11160720-09": {
    "kind": "possible",
    "prev": "הגעת שגריר ארה\"ב באו\"ם מייק וולץ ללבנון",
    "score": 0.633
   },
   "NORTH-11160720-10": {
    "kind": "new"
   }
  }
 }
};
