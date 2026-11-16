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
  "draft": "drafts/iran/2026-11-15T1722__iran-202611151722.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-15T17:22:41+00:00",
   "window": {
    "from": "2026-11-14T17:22:41+00:00",
    "to": "2026-11-15T17:22:41+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611151722"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתרחב לתקיפות ישירות במפרץ, לצד איומים על חופש השיט והאצת תוכנית הגרעין. טהראן שיגרה כטב\"מים לעבר בסיס אמריקאי בבחריין והפעילה מיקוש ימי במצר הורמוז, בעוד שלוחיה החות'ים מגבירים את הלחץ בים סוף ובסעודיה. במקביל, ישראל מגבירה את התיאום המודיעיני עם הממשל האמריקאי ונערכת להסלמה רב-זירתית נוכח התקדמות הפעילות הגרעינית האיראנית.",
   "fronts": [
    {
     "name": "מפרץ בחריין",
     "status": "חידוש תקיפות כטב\"מים איראניות לעבר מתקנים אמריקאיים ויירוטים של צבא בחריין"
    },
    {
     "name": "מצר הורמוז",
     "status": "חסימה ואכיפה איראנית אלימה הכוללת פיצוץ מכליות באמצעות מוקשים ימיים"
    },
    {
     "name": "הזירה התימנית והים האדום",
     "status": "התקדמות החות'ים באזור באב אל-מנדב וירי רקטי וכטב\"מים לעבר יעדים בסעודיה"
    },
    {
     "name": "הציר המודיעיני-מדיני (ישראל-ארה\"ב-איראן)",
     "status": "היערכות ביטחונית ותיאום מודיעיני מול האצת תוכניות הגרעין והטילים בטהראן"
    }
   ],
   "events": [
    {
     "id": "IRAN-11151722-01",
     "title": "מתקפת כטב\"מים איראנית לעבר מתקן מכ\"ם ובסיס אמריקאי בבחריין ויירוטם",
     "summary": "משמרות המהפכה האיראניים שיגרו כטב\"מים לעבר מתקן מכ\"ם של ההגנה האווירית האמריקאית בבסיס בבחריין. מערכות ההגנה של בחריין יירטו את כלי הטיס, ומדינות באזור כדוגמת סעודיה, מצרים, ירדן וקטר גינו את המתקפה.",
     "axis": "איראן מול ארה\"ב ומדינות המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T08:11:35+00:00",
     "last_update_at": "2026-11-15T16:46:30+00:00",
     "what_is_not_verified": "מידת הפגיעה המדויקת במכ\"ם והנזק שנגרם בשטח לא אומתו באופן עצמאי מעבר לטענות הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
       "published_at": "2026-11-15T16:46:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/nov/15/middle-east-crisis-live-iran-bahrain-strikes-gulf-donald-trump-us-israel-yemen-houthis",
       "published_at": "2026-11-15T15:59:04+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/iran-claims-drone-attack-on-us-military-base-in-bahrain",
       "published_at": "2026-11-15T15:29:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/bahrain-says-air-defences-destroyed-several-iranian-drones-attacking-us-base",
       "published_at": "2026-11-15T13:55:32+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133679",
       "published_at": "2026-11-15T13:40:04+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/15/bahrain-accuses-iran-of-attacking-its-territory-to-settle-score-with-us?traffic_source=rss",
       "published_at": "2026-11-15T12:36:19+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/iran-targets-us-military-radar-in-bahrain-in-retaliatory-drone-strikes?traffic_source=rss",
       "published_at": "2026-11-15T12:15:51+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-joins-condemnation-iranian-attacks-bahrain",
       "published_at": "2026-11-15T11:46:46+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261115-iran-claims-attack-on-us-military-airbase-in-bahrain",
       "published_at": "2026-11-15T09:57:35+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961449",
       "published_at": "2026-11-15T08:11:35+00:00"
      }
     ],
     "places": [
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      },
      {
       "name": "א-רפאע, בחריין",
       "lat": 26.1315,
       "lon": 50.5503
      }
     ]
    },
    {
     "id": "IRAN-11151722-02",
     "title": "פיצוץ וטביעת מכליות נפט ממוקשים ימיים במצר הורמוז",
     "summary": "הצי ומשמרות המהפכה של איראן טענו כי מכליות נפט עלו באש וטבעו לאחר שפגעו במוקשים ימיים בעת שניסו לחצות נתיב אסור בדרום מצר הורמוז, והזהירו כלי שיט נוספים שלא להפר את ההנחיות.",
     "axis": "חופש השיט ומצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T23:46:29+00:00",
     "last_update_at": "2026-11-15T15:30:14+00:00",
     "what_is_not_verified": "זהות המכליות שטבעו או ניזוקו ומספרן המדויק (שתיים או שלוש) לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/two-oil-tankers-ablaze-after-striking-naval-mines-strait-hormuz",
       "published_at": "2026-11-15T15:30:14+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkpkuvwrzg",
       "published_at": "2026-11-15T13:58:32+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/irans-navy-says-three-tankers-fire-after-hitting-mines-hormuz",
       "published_at": "2026-11-14T23:46:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-03",
     "title": "הסלמה מול החות'ים בתימן ונסיגת כוחות הנתמכים בידי סעודיה",
     "summary": "כוחות ממשלת תימן הנתמכים בידי סעודיה נסוגו מאזור מצר באב אל-מנדב לכיוון עדן, בעוד הקואליציה בראשות סעודיה יירטה שני טילים בליסטיים וכטב\"מים ששיגרו החות'ים לעבר ריאד והמחוז המזרחי.",
     "axis": "תימן והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T03:46:26+00:00",
     "last_update_at": "2026-11-15T16:46:30+00:00",
     "what_is_not_verified": "היקף הנזק המלא והשליטה המוחלטת בנתיבי השיט בים סוף לא אומתו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/anti-houthi-forces-retreat-yemen-iran-strikes-bahrain",
       "published_at": "2026-11-15T16:46:30+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/yemeni-government-force-retreats-strait-major-setback-war-against-houthis",
       "published_at": "2026-11-15T08:46:28+00:00"
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
       "name": "מצר באב אל-מנדב, תימן",
       "lat": 12.6671,
       "lon": 43.4565
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "IRAN-11151722-04",
     "title": "שיחות של ראש המוסד בארה\"ב ועדכון הקבינט בישראל בנושא איראן",
     "summary": "ראש המוסד שב מביקור בארצות הברית שבו שיתף מידע מודיעיני עם בכירים אמריקאים וראש הסי-אי-איי, והגיע לתדרך את שרי הקבינט המדיני-ביטחוני ואת ראש הממשלה בנוגע לאיראן.",
     "axis": "תיאום ישראל-ארה\"ב מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:55:01+00:00",
     "last_update_at": "2026-11-15T16:24:02+00:00",
     "what_is_not_verified": "תוכן המידע המודיעיני שהועבר ופרטי הדיונים הסגורים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388736",
       "published_at": "2026-11-15T16:24:02+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21857285",
       "published_at": "2026-11-15T16:16:43+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sy9qslprfg",
       "published_at": "2026-11-15T15:55:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-05",
     "title": "התרעת ראש ממשלת ישראל מפני חידוש תוכנית הגרעין האיראנית",
     "summary": "ראש הממשלה נתניהו הצהיר כי איראן פועלת לחדש את תוכנית הגרעין שלה, העשרת האורניום ופיתוח הנשק, וקרא להקמת ממשלת אחדות לאומית כדי להסיר איום קיומי זה.",
     "axis": "הגרעין האיראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T17:45:01+00:00",
     "last_update_at": "2026-11-14T18:27:05+00:00",
     "what_is_not_verified": "הסטטוס המדויק של חידוש העשרת האורניום המואצת באיראן לא אומת מעבר להצהרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49585",
       "published_at": "2026-11-14T18:27:05+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133641",
       "published_at": "2026-11-14T17:45:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-06",
     "title": "איראן מפתחת מערכת היתוך גרעיני ראשונה מייצור מקומי",
     "summary": "ראש הארגון לאנרגיה אטומית של איראן הודיע כי המדינה נערכת להפעיל מערכת היתוך גרעיני ראשונה שפותחה כולה באופן מקומי.",
     "axis": "הגרעין האיראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:38:50+00:00",
     "last_update_at": "2026-11-15T15:38:50+00:00",
     "what_is_not_verified": "היכולת המבצעית והטכנולוגית הממשית של מערכת ההיתוך המוצהרת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86322711/Iran-to-launch-first-fully-indigenous-nuclear-fusion-system",
       "published_at": "2026-11-15T15:38:50+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-11151722-07",
     "title": "הערכות מודיעין אמריקאיות על מלאי הטילים של איראן",
     "summary": "הערכות מודיעין בארצות הברית מצביעות על כך שאיראן מחזיקה כ-2,500 טילים וממשיכה לשקם את מחסניה באמצעות רכיבים שנאגרו מראש, למרות פגיעות קודמות במתקני ייצור.",
     "axis": "מערך הטילים של איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T08:32:48+00:00",
     "last_update_at": "2026-11-15T08:32:48+00:00",
     "what_is_not_verified": "המספר המדויק של הטילים התקינים ויכולת הייצור בפועל לא אומתו.",
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
     "id": "IRAN-11151722-08",
     "title": "האשמת איראן את ישראל בניסיון יצירת 'דגל כוזב' בסייבר מול צרפת",
     "summary": "דובר משמרות המהפכה דחה טענות של צרפת על תקיפת סייבר איראנית נגד מערכות קירור במרכולים, וטען כי מדובר במבצע 'דגל כוזב' ישראלי שנועד להסית מדינות באירופה נגד טהראן.",
     "axis": "סייבר ולוחמה חשאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T11:50:59+00:00",
     "last_update_at": "2026-11-15T11:50:59+00:00",
     "what_is_not_verified": "זהות מבצעי מתקפת הסייבר על המרכולים בצרפת לא אומתה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-blames-israel-cyber-attack-supermarket-fridges",
       "published_at": "2026-11-15T11:50:59+00:00"
      }
     ],
     "places": [
      {
       "name": "פריז, צרפת",
       "lat": 48.8535,
       "lon": 2.3484
      }
     ]
    },
    {
     "id": "IRAN-11151722-09",
     "title": "פרסום על חטיפת וחיסול קצינים איראנים בידי המוסד בעבר",
     "summary": "תחקיר עיתונאי חשף כי ישראל חטפה בעבר שני גנרלים איראנים בטורקיה ובסוריה לצורך חקירה בניסיון לאתר מידע על רון ארד, כאשר אחד מהם חוסל וגופתו הושלכה לים והשני שוחרר בדרום אפריקה.",
     "axis": "מבצעים חשאיים ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T11:45:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T11:45:24+00:00",
     "last_update_at": "2026-11-15T12:03:05+00:00",
     "what_is_not_verified": "פרטי המבצעים ההיסטוריים, מקום מותם או נסיבות שחרורם מבוססים על הדלפות ומקורות עבר ולא על הודעה ישראלית רשמית.",
     "is_new_in_window": true,
     "reports": [
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
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
       "published_at": "2026-11-15T11:45:24+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "IRAN-11151722-10",
     "title": "תרגול היערכות צה\"ל לתרחישי הסלמה ושיבוש קשר מול איראן ושלוחותיה",
     "summary": "אגף התקשוב בצה\"ל ביצע תרגיל בפיקוד הצפון ובפיקוד הדרום המדמה אובדן קשר ושיבוש מערכות במסגרת היערכות להסלמה מול איראן והצטרפות שלוחותיה לתקיפת העורף הישראלי.",
     "axis": "היערכות צבאית ישראלית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T07:07:25+00:00",
     "last_update_at": "2026-11-15T07:07:25+00:00",
     "what_is_not_verified": "מועד התממשות תרחישי ההסלמה וההיקף של מעורבות השלוחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961437",
       "published_at": "2026-11-15T07:07:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-11",
     "title": "טענה איראנית לשינוי ראש קרב בטיל ח'ורמשהר לטווח בסיסים אמריקאיים באירופה",
     "summary": "הטלוויזיה הממלכתית באיראן דיווחה כי שינוי משקלו של ראש הקרב בטיל הבליסטי ח'ורמשהר יאפשר לפגוע בבסיסים של צבא ארצות הברית המוצבים באירופה.",
     "axis": "מערך הטילים של איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T19:46:06+00:00",
     "last_update_at": "2026-11-14T19:46:06+00:00",
     "what_is_not_verified": "ההיתכנות הטכנולוגית המבצעית והטווח האמיתי של הטיל לאחר שינוי המשקל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133648",
       "published_at": "2026-11-14T19:46:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11151722-12",
     "title": "ביקורת רוסית על הלחץ המערבי בסבא\"א סביב הגרעין האיראני",
     "summary": "רוסיה מתחה ביקורת על מדינות המערב וטענה כי הן מנצלות את מנגנוני הפיקוח של הסוכנות הבינלאומית לאנרגיה אטומית להפעלת לחץ פוליטי על טהראן, דבר הפוגע בניטרליות הסוכנות.",
     "axis": "המישור המדיני-בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T16:42:26+00:00",
     "last_update_at": "2026-11-15T16:42:26+00:00",
     "what_is_not_verified": "ההשפעה הממשית של עמדת רוסיה על דיוני מועצת הנגידים של סבא\"א.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86322767/Russia-says-Western-pressure-on-Iran-undermines-IAEA-impartiality",
       "published_at": "2026-11-15T16:42:26+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר מכליות הנפט שטבעו או נפגעו בפועל במצר הורמוז וזהותן",
    "מידת הפגיעה הממשית במתקן המכ\"ם האמריקאי בבסיס בבחריין",
    "רמת ההתקדמות המבצעית של פרויקט ההיתוך הגרעיני המוצהר באיראן",
    "מספר הטילים המבצעיים המדויק שנותר בידי איראן וקצב הייצור הנוכחי",
    "מעורבות איראנית ישירה במתקפת הסייבר על מערכות קירור בצרפת",
    "ההערכות והפרטים המודיעיניים ההיסטוריים שנחשפו לגבי נסיבות מותם או היעלמותם של רון ארד והקצינים האיראנים"
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
      "תקיפת יעדים של מדינות המשתפות פעולה צבאית עם ארה\"ב כמענה לגיטימי",
      "אכיפת איסור מעבר בנתיבים מוגדרים במצר הורמוז",
      "פיתוח יכולות טכנולוגיות גרעיניות עצמאיות"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וכלכלי ישיר על וושינגטון ובעלות בריתה במפרץ באמצעות שיבוש נתיבי סחר",
      "הרחבת טווח האיום הטילאי כדי להרתיע את המערב מפעולה ישירה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות באמצעות כטב\"מים ושמירה על הגבלות השיט במצר הורמוז",
      "המשך קידום אלמנטים בתוכנית הגרעין ושיקום מערכי הטילים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול תוכנית הגרעין האיראנית ומניעת השגת נשק להשמדה המונית",
      "הקמת ממשלת אחדות לאומית לצורך התמודדות עם האיומים הביטחוניים"
     ],
     "inferred": [
      "חיזוק התיאום המבצעי והמודיעיני עם ארצות הברית לקראת אפשרות של פעולה צבאית",
      "הכנת המערכות הצבאיות והתקשוביות לתרחיש של מלחמה אזורית בכמה חזיתות"
     ],
     "forecast": [
      "הגברת שיתוף המודיעין עם גורמי ביטחון אמריקאיים",
      "המשך אימונים ותרגולים של כוחות צה\"ל לתרחישי הסלמה ישירים"
     ]
    },
    {
     "actor": "ארצות הברית ומדינות המפרץ",
     "declared": [
      "גינוי תקיפות איראן כהפרה של החוק הבינלאומי ועקרונות השכנות הטובה",
      "הפעלת מערכות הגנה אוויריות להגנה על המרחב הריבוני והבסיסים"
     ],
     "inferred": [
      "שמירה על נוכחות צבאית במפרץ תוך ניסיון למנוע פגיעה בתשתיות אסטרטגיות ובנתיבי אנרגיה",
      "בלימת ההתפשטות של השלוחות האיראניות בתימן ובאזור באב אל-מנדב"
     ],
     "forecast": [
      "חיזוק מערכי ההגנה האווירית בבחריין ובסעודיה",
      "המשך יירוט איומים בליסטיים וכטב\"מים בתימן ובמפרץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/iran-targets-us-military-radar-in-bahrain-in-retaliatory-drone-strikes?traffic_source=rss",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-led-coalition-intercepts-missiles-towards-riyadh-drones-eastern-province",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261115-iran-claims-attack-on-us-military-airbase-in-bahrain",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/nov/15/middle-east-crisis-live-iran-bahrain-strikes-gulf-donald-trump-us-israel-yemen-houthis",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86322767/Russia-says-Western-pressure-on-Iran-undermines-IAEA-impartiality",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388736",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-blames-israel-cyber-attack-supermarket-fridges",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133648",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49598",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95037",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383961437",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sy9qslprfg",
     "accessed_at": "2026-11-15T17:22:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T00:40:22+00:00",
  "changes": {
   "IRAN-11151722-01": {
    "kind": "new"
   },
   "IRAN-11151722-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה במיכליות נפט במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11151722-03": {
    "kind": "new"
   },
   "IRAN-11151722-04": {
    "kind": "possible",
    "prev": "הדחת מפקדי ספינות מלחמה של צבא ארה\"ב בזירת איראן",
    "score": 0.467
   },
   "IRAN-11151722-05": {
    "kind": "new"
   },
   "IRAN-11151722-06": {
    "kind": "new"
   },
   "IRAN-11151722-07": {
    "kind": "new"
   },
   "IRAN-11151722-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הכחשת משמרות המהפכה לתקיפות סייבר בצרפת והאשמת ישראל",
    "score": 0.65
   },
   "IRAN-11151722-09": {
    "kind": "new"
   },
   "IRAN-11151722-10": {
    "kind": "new"
   },
   "IRAN-11151722-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "איום טלוויזיוני באיראן בטיל מותאם נגד בסיסים באירופה",
    "score": 1.0
   },
   "IRAN-11151722-12": {
    "kind": "possible",
    "prev": "חשש סבא\"א ממתקן העשרה איראני באיספהאן",
    "score": 0.467
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
  "draft": "drafts/north/2026-11-15T1725__north-202611151725.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-15T17:25:38+00:00",
   "window": {
    "from": "2026-11-14T17:25:38+00:00",
    "to": "2026-11-15T17:25:38+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611151725"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית קרקעית ואווירית אינטנסיבית של כוחות צה\"ל בדרום לבנון להשמדת תשתיות תת-קרקעיות של חיזבאללה, לצד תקיפות ארטילריות ואוויריות נרחבות. במקביל נרשמת דריכות מדינית בביירות סביב תום מנדט כוח יוניפי\"ל וביקורים דיפלומטיים מערביים וערביים. בסוריה נמשכת אי-היציבות הביטחונית המתבטאת בפיגועי מטענים בפרברי הבירה לצד ניסיונות של השלטון להרחיב תיאום כלכלי ואזורי.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות מבצעית שוטפת של צה\"ל להשמדת תשתיות חיזבאללה, תקיפות באש והפגזות יומיומיות"
    },
    {
     "name": "הזירה הפנימית בסוריה",
     "status": "פיגועי טרור ומטעני חבלה באזור דמשק לצד מאמצי שיקום ותיאום גבולות מול ירדן"
    },
    {
     "name": "הזירה הפוליטית-מדינית בלבנון",
     "status": "מגעים דיפלומטיים סביב מנדט יוניפי\"ל והסדרים עתידיים בהשתתפות נציגי ארה\"ב וסעודיה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11151725-01",
     "title": "השמדת תוואי תת-קרקעי של חיזבאללה במג'דל זון בדרום לבנון",
     "summary": "כוחות חטיבה 300 בפיקוד אוגדה 91 ובשיתוף יהל\"ם השמידו תוואי תת-קרקעי באורך של כ-35 מטרים ובו שני חדרי שהייה בכפר מג'דל זון להסרת איומים.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T15:05:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T15:05:46+00:00",
     "last_update_at": "2026-11-15T15:17:23+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21856851",
       "published_at": "2026-11-15T15:17:23+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388711",
       "published_at": "2026-11-15T15:13:13+00:00"
      },
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
     "id": "NORTH-11151725-02",
     "title": "תקיפות אוויריות, ארטילריה ופיצוצים יזומים של צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות אוויריות, ירי ארטילרי ופיצוצים יזומים במספר כפרים ואזורים בדרום לבנון, בהם כפרתבנית, אלקנטרה, אל-ח'יאם, ואדי אל-חג'יר וחדאת'א, לצד טיסות מטוסי קרב בגובה נמוך מעל ביירות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T08:57:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T08:57:58+00:00",
     "last_update_at": "2026-11-15T12:26:22+00:00",
     "what_is_not_verified": "פירוט היקף הנפגעים או הנזקים כתוצאה מהתקיפות לא צוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151167/",
       "published_at": "2026-11-15T12:26:22+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151127/",
       "published_at": "2026-11-15T10:41:34+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151087/",
       "published_at": "2026-11-15T09:18:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133668",
       "published_at": "2026-11-15T09:00:50+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/151077/",
       "published_at": "2026-11-15T08:57:58+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ח'יאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11151725-03",
     "title": "פיצוץ מכונית תופת בפרבר דמשק",
     "summary": "מטען שהוטמן במכונית התפוצץ בעיר ג'רמאנא בפרברי דמשק, והביא למותם של שני בני אדם, בהם ילדה, ולפציעתו של אדם נוסף.",
     "axis": "הזירה הפנימית בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:51:01+00:00",
     "last_update_at": "2026-11-15T07:52:17+00:00",
     "what_is_not_verified": "זהות הגורם המבצע אינה ודאית, כוחות הביטחון פתחו בחקירה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-670",
       "published_at": "2026-11-15T07:52:17+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/car-bomb-damascus-suburb-kills-two-including-child",
       "published_at": "2026-11-15T03:45:46+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/car-bomb-near-syria-capital-kills-two-people-including-child",
       "published_at": "2026-11-14T21:14:41+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/2-killed-including-girl-in-car-blast-in-syria-s-rural-damascus/4125396",
       "published_at": "2026-11-14T18:51:01+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'רמאנא, סוריה",
       "lat": 33.4864,
       "lon": 36.3483
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11151725-04",
     "title": "שריפה במחנה פליטים סורים בבקעת הלבנון",
     "summary": "דליקה כילתה לחלוטין מחנה פליטים סורים באזור בר אליאס שבמזרח בקעת הלבנון, השמידה 59 אוהלים והותירה כ-500 בני אדם מחוסרי בית, ללא נפגעים בנפש.",
     "axis": "לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T23:12:18+00:00",
     "last_update_at": "2026-11-15T14:55:40+00:00",
     "what_is_not_verified": "הסיבה לפרוץ הדליקה במחנה לא צוינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/flames-engulf-syrian-refugee-camp-in-eastern-lebanon?traffic_source=rss",
       "published_at": "2026-11-15T14:55:40+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/fire-destroys-syrian-refugee-camp-in-lebanon-leaving-nearly-500-homeless/4125459",
       "published_at": "2026-11-14T23:12:18+00:00"
      }
     ],
     "places": [
      {
       "name": "בר אליאס, לבנון",
       "lat": 33.7744,
       "lon": 35.9044
      }
     ]
    },
    {
     "id": "NORTH-11151725-05",
     "title": "ביטול הגבלות הכניסה לאזרחי ארה\"ב ובריטניה בסוריה",
     "summary": "הרשויות בסוריה ביטלו את הדרישה שהוטלה זמן קצר קודם לכן לקבלת אישור כניסה מראש עבור אזרחי ארצות הברית ובריטניה, והחזירו את האפשרות לקבלת אשרה עם ההגעה.",
     "axis": "הזירה הפנימית בסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:14:17+00:00",
     "last_update_at": "2026-11-14T18:14:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49584",
       "published_at": "2026-11-14T18:14:17+00:00"
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
     "id": "NORTH-11151725-06",
     "title": "חשיפת תחקיר על פעולות מודיעין של ישראל בסוריה, טורקיה ולבנון בתיק רון ארד",
     "summary": "תחקיר עיתונאי בארה\"ב חשף כי ישראל חטפה בעבר בכירים איראנים מדמשק ומאיסטנבול כדי להשיג מידע על רון ארד, וכי ההערכות הנוכחיות גורסות שארד מת בלבנון בשנת 1988 ונקבר באזור נבי שית.",
     "axis": "ישראל - לבנון - סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T11:16:16+00:00",
     "last_update_at": "2026-11-15T12:03:05+00:00",
     "what_is_not_verified": "אמיתות הטענות לגבי גורל הנווט ומעשי החטיפה וההריגה מבוססת על תחקיר עיתונאי וגורמים עלומים ולא אומתה רשמית",
     "is_new_in_window": true,
     "reports": [
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
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
       "published_at": "2026-11-15T11:45:24+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/h1uvp3hrzg",
       "published_at": "2026-11-15T11:16:16+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      },
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "NORTH-11151725-07",
     "title": "חתימת הסכמי שיתוף פעולה בין סוריה לירדן בדמשק",
     "summary": "ממשלות סוריה וירדן חתמו בדמשק על 11 הסכמים ותזכירי הבנות בתחומי תחבורה, מעברי גבול, תעופה ומזון במסגרת מועצת התיאום העליונה, זמן קצר לאחר תקיפות ירדניות בדרום סוריה.",
     "axis": "הזירה הפנימית בסוריה",
     "claim_type": "incident",
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
     "id": "NORTH-11151725-08",
     "title": "פגישת נשיא לבנון עם יועץ שר החוץ הסעודי בבעבדא",
     "summary": "נשיא לבנון ז'וזף עון נועד בארמון בעבדא עם הנסיך יזיד בן פרחאן, יועצו של שר החוץ הסעודי, לדיון בהתפתחויות האחרונות.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T13:20:35+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-15T13:20:35+00:00",
     "last_update_at": "2026-11-15T13:20:35+00:00",
     "what_is_not_verified": "תוכן השיחות המדויק מעבר לדיון בהתפתחויות לא פורט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968098/president-aoun-meets-saudi-foreign-ministers-adviser-in-baabda/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968098",
       "published_at": "2026-11-15T13:20:35+00:00"
      }
     ],
     "places": [
      {
       "name": "בעבדא, לבנון",
       "lat": 33.8336,
       "lon": 35.5446
      }
     ]
    },
    {
     "id": "NORTH-11151725-09",
     "title": "הגעת שגריר ארה\"ב באו\"ם מייק וולץ ללבנון",
     "summary": "שגריר ארצות הברית באו\"ם מייק וולץ נחת בלבנון במסגרת ביקור רשמי במדינה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-15T09:00:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-15T09:00:07+00:00",
     "last_update_at": "2026-11-15T09:00:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968069/us-ambassador-to-the-united-nations-mike-waltz-arrives-in-lebanon/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968069",
       "published_at": "2026-11-15T09:00:07+00:00"
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
     "id": "NORTH-11151725-10",
     "title": "תרגיל הקמת בית חולים שדה נייד בחטיבת כרמלי",
     "summary": "חטיבת המילואים כרמלי קיימה אימון הקמה ראשון של בית חולים שדה נייד עם חדר ניתוח, לאחר פעילות מבצעית בעזה, בלבנון ובסוריה.",
     "axis": "ישראל - לבנון",
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
    }
   ],
   "not_verified": [
    "הממצאים והטענות בנוגע לנסיבות מותו או מקום קבורתו של רון ארד בלבנון מבוססים על תחקיר תקשורתי ולא אומתו רשמית",
    "מידת השיוך של מחסן הנשק שנתפס ברובע הדאחייה על ידי צבא לבנון לארגון חיזבאללה",
    "זהות האחראים לפיצוץ מכונית התופת בג'רמאנא שבפרברי דמשק",
    "סיבת השריפה שפרצה במחנה הפליטים בבר אליאס"
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
      "הסרת איומים במרחב הביטחוני בדרום לבנון",
      "מניעת פגיעה של חיזבאללה באזרחי ישראל ובכוחות צה\"ל",
      "מחויבות להסכם הפסקת האש"
     ],
     "inferred": [
      "השמדה שיטתית של תשתיות צבאיות תת-קרקעיות של חיזבאללה סמוך לגבול",
      "הפעלת לחץ צבאי רציף בדרום לבנון למניעת התבססות מחודשת של חיזבאללה"
     ],
     "forecast": [
      "צה\"ל ימשיך בפעולות חשיפה והשמדה ממוקדות של מנהרות ומחסני נשק בדרום לבנון",
      "תימשך הכוננות הלוגיסטית והרפואית של יחידות צה\"ל לאפשרות של הסלמה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "זכות ההתנגדות להגן על המדינה ולפעול לשחרור אדמות כבושות בכל האמצעים",
      "קריאה להידברות פנים-לבנונית על בסיס הסכם הטאיף והחוקה",
      "היעדר התנגדות לקיום משא ומתן עקיף עם ישראל"
     ],
     "inferred": [
      "שימור הלגיטימציה של הנשק והמערך הצבאי בזירה הפוליטית בלבנון",
      "הסוואת תשתיות צבאיות במרחבים אזרחיים ובקרבת עמדות יוניפי\"ל"
     ],
     "forecast": [
      "המשך ניסיונות להיאחז פוליטית וצבאית במרחב תוך הדיפת קריאות לפירוק מנשק",
      "נכונות למהלכים דיפלומטיים עקיפים להבטחת אינטרסים מול ישראל"
     ]
    },
    {
     "actor": "סוריה (הממשל החדש)",
     "declared": [
      "הקמת מרשם נפגעים לאומי כחלק ממהלכי צדק מעברי והכרה בזכויות קורבנות",
      "הידוק שיתוף הפעולה הכלכלי, התחבורתי והביטחוני עם ירדן"
     ],
     "inferred": [
      "חיזוק המשילות הפנימית והתמודדות עם תאי טרור של המדינה האסלאמית",
      "עידוד כניסת תיירים ופתיחות בינלאומית באמצעות הקלת נהלי כניסה"
     ],
     "forecast": [
      "המשך מאמצים לשיקום מוסדות המדינה והכלכלה מול אתגרי טרור בלתי פוסקים",
      "העמקת תיאום הגבולות עם מדינות שכנות כדי למנוע חיכוכים צבאיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/15/flames-engulf-syrian-refugee-camp-in-eastern-lebanon?traffic_source=rss",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/151077/",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/fire-destroys-syrian-refugee-camp-in-lebanon-leaving-nearly-500-homeless/4125459",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/syria-and-jordan-from-civilian-airstrike-crisis-to-higher-coordination-council/",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21855116",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968069/us-ambassador-to-the-united-nations-mike-waltz-arrives-in-lebanon/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968069",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388711",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/car-bomb-damascus-suburb-kills-two-including-child",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/car-bomb-near-syria-capital-kills-two-people-including-child",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133668",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49598",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25612",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95037",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/h1uvp3hrzg",
     "accessed_at": "2026-11-15T17:25:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-15T00:49:07+00:00",
  "changes": {
   "NORTH-11151725-01": {
    "kind": "possible",
    "prev": "הפעלת טייסת כטב\"מים ייעודית של השב\"כ בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11151725-02": {
    "kind": "possible",
    "prev": "הצהרת נשיא לבנון בנוגע להחלטה 1701 ומנדט יוניפי\"ל",
    "score": 0.633
   },
   "NORTH-11151725-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פיצוץ מכונית תופת בפרבר של דמשק",
    "score": 1.0
   },
   "NORTH-11151725-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שריפה כילתה מחנה פליטים סורים בבקעת הלבנון",
    "score": 1.0
   },
   "NORTH-11151725-05": {
    "kind": "new"
   },
   "NORTH-11151725-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "טורקיה וקטאר חתמו על הסכם הגנה הדדית עם התייחסות לסוריה",
    "score": 0.817
   },
   "NORTH-11151725-07": {
    "kind": "new"
   },
   "NORTH-11151725-08": {
    "kind": "new"
   },
   "NORTH-11151725-09": {
    "kind": "new"
   },
   "NORTH-11151725-10": {
    "kind": "new"
   }
  }
 }
};
