/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-19T0047__yemen-202611190047.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-19T00:47:43+00:00",
   "window": {
    "from": "2026-11-18T00:47:43+00:00",
    "to": "2026-11-19T00:47:43+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611190047"
   },
   "summary": "הלחימה בתימן נמשכת ביתר שאת כאשר כוחות החות'ים מתקדמים באזורים אסטרטגיים לעבר העיר עדן ומבצעים תקיפות אוויריות באמצעות טילים וכטב\"מים לעבר סעודיה. מנגד, הקואליציה בהובלת סעודיה מבצעת תקיפות נגד תשתיות שיגור בתימן, מחליפה את הפיקוד הצבאי הבכיר ומחפשת אחר חימוש וציוד הגנתי נוסף מבעלי בריתה. ארגונים בינלאומיים מביעים דאגה מהחמרת המצב ההומניטרי והפגיעה באזרחים ובילדים.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (עדן, סעדה ותיז)",
     "status": "פעילה עם התקדמות של החות'ים ותקיפות נגד של הקואליציה"
    },
    {
     "name": "החזית האווירית מול סעודיה",
     "status": "פעילה עם שיגור טילים וכטב\"מים מצד החות'ים וירוטי נגד של סעודיה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11190047-01",
     "title": "השמדת משגרי טילים בסעדה",
     "summary": "הקואליציה בהובלת סעודיה דיווחה כי השמידה פלטפורמת שיגור טילים בתימן, לאחר שנעשה בה שימוש לנסות ולתקוף אזורים בסעודיה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T23:28:42+00:00",
     "last_update_at": "2026-11-19T00:01:02+00:00",
     "what_is_not_verified": "טענת הקואליציה כי נעשה שימוש במשגיר להתקפה אינה מאומתת ממקור בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_9abe0f07f7bc4026",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-saudi-led-coalition-strikes-yemen-ships-on-fire-in-hormuz?traffic_source=rss",
       "published_at": "2026-11-19T00:01:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_e74cd4f8aa5b18dd",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/coalition-says-missile-launch-platform-destroyed-saada",
       "published_at": "2026-11-18T23:28:42+00:00"
      }
     ],
     "places": [
      {
       "name": "סעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-11190047-02",
     "title": "יירוט טילים וכטב\"מים מעל שמי סעודיה",
     "summary": "דווח על יירוט טילים וכטב\"מים שעשו דרכם לעבר ריאד ואזורים בדרום סעודיה, לצד טענות החות'ים על תקיפת יעדים שונים בהם נמל תעופה ומרכז פיננסי.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T02:06:39+00:00",
     "last_update_at": "2026-11-18T23:19:58+00:00",
     "what_is_not_verified": "טענות החות'ים על פגיעה מדויקת ביעדים כמו נמל התעופה קิง ח'אליד ומרכזים פיננסיים אינן מאומתות באופן מלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_24922a06d013d188",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-defence-minister-discusses-defence-cooperation-us-centcom-chief",
       "published_at": "2026-11-18T23:19:58+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_24922a06d013d188",
       "url": "https://www.maariv.co.il/breaking-news/article-1390018",
       "published_at": "2026-11-18T22:10:57+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_24922a06d013d188",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-targeted-king-khalid-airport-and-financial-centre",
       "published_at": "2026-11-18T20:29:12+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_24922a06d013d188",
       "url": "https://www.sabanew.net/viewstory/156044",
       "published_at": "2026-11-18T16:13:24+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_24922a06d013d188",
       "url": "https://www.france24.com/en/middle-east/20261118-middle-east-live-kuwait-bahrain-report-drone-and-missile-attacks",
       "published_at": "2026-11-18T02:06:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'זאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      },
      {
       "name": "ח'מיס מושייט, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    },
    {
     "id": "YEMEN-11190047-03",
     "title": "פניית סעודיה לספקים בינלאומיים והצטיידות צבאית",
     "summary": "סעודיה קיימה פגישות עם שותפים מערביים ובכירים בטורקיה במטרה להשיג מערכות הגנה אווירית וציוד צבאי נוסף כדי להתמודד עם איומי החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T21:46:20+00:00",
     "last_update_at": "2026-11-18T21:46:20+00:00",
     "what_is_not_verified": "היקף העסקאות המדויק והציוד הספציפי שסופק בפועל אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turn-weapons-spigot-saudi-arabia-asks-partners-gear-deter-houthis",
       "published_at": "2026-11-18T21:46:20+00:00"
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
     "id": "YEMEN-11190047-04",
     "title": "פיצוץ מטען נסתר בתיז",
     "summary": "ארבעה ילדים נפגעו כתוצאה מפיצוץ מטען חבלה שהושאר מפעילות קודמת באזור תיז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T18:29:09+00:00",
     "last_update_at": "2026-11-18T18:29:09+00:00",
     "what_is_not_verified": "לא צוינו פרטים נוספים מעבר לדיווח המקומי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_bd37b842b169ee4e",
       "url": "https://www.sabanew.net/viewstory/156050",
       "published_at": "2026-11-18T18:29:09+00:00"
      }
     ],
     "places": [
      {
       "name": "תיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11190047-05",
     "title": "התקדמות החות'ים ושינויים פיקודיים בצד הסעודי והממשלתי בתימן",
     "summary": "החות'ים ממשיכים להתקדם באזורים אסטרטגיים מערבית לעיר הבירה הזמנית עדן ובאזורים נוספים, בעוד סעודיה ממנה רמטכ\"ל חדש לעד כוחות הקואליציה וכוחות דרומיים מבצעים היערכות מחדש.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T15:55:41+00:00",
     "last_update_at": "2026-11-18T18:22:41+00:00",
     "what_is_not_verified": "ההשפעה המדויקת של חילופי הפיקוד על שדה הקורב אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_aece35dffcff1bb9",
       "url": "https://www.al-monitor.com/originals/2026/11/amid-setbacks-saudi-arabia-braces-yemen-war-stretch-2027-report",
       "published_at": "2026-11-18T18:22:41+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_aece35dffcff1bb9",
       "url": "https://www.newarab.com/news/saudi-arabia-appoints-new-yemen-commander-amid-setbacks",
       "published_at": "2026-11-18T17:20:36+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_aece35dffcff1bb9",
       "url": "https://www.france24.com/en/middle-east/20261118-yemen-why-the-houthis-may-besiege-aden-rather-than-storm-it",
       "published_at": "2026-11-18T15:55:41+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    }
   ],
   "not_verified": [
    "טענות החות'ים על פגיעה מדויקת במרכזים הפיננסיים ובנמל התעופה בריאד",
    "היקף ומהירות האספקה המדויקים שיועברו כסלאח מן תרכיא ושותפות נוספות לסעודיה"
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
     "value": 3.2639,
     "unit": "ILS",
     "change_pct": 0.54,
     "source_id": "src_ecb",
     "as_of": "2026-11-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת יעדים אסטרטגיים בשטח סעודיה כגון נמלי תעופה ומרכזים פיננסיים"
     ],
     "inferred": [
      "השתלטות על שטחים נוספים בתימן ובאזור מצר באב אל-מנדב",
      "יצירת לחץ צבאי מתמשך על ממשלת תימן וסעודיה"
     ],
     "forecast": [
      "המשך ניסיונות כיתור או כיבוש של העיר עדן",
      "שימור לחץ אש על סעודיה באמצעות כטב\"מים וטילים"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה",
     "declared": [
      "הגנה על שטחי הממלכה ותשתיותיה מפני תקיפות החות'ים",
      "ריכוז הפיקוד הצבאי תחת רמטכ\"ל סעודיה לשיפור התפקוד בקרב"
     ],
     "inferred": [
      "בלימת התקדמות החות'ים באזורים הסטרגיים בתימן",
      "הצטיידות בדחיפות במערכות הגנה אווירית וחלקי חילוף"
     ],
     "forecast": [
      "היערכות לעימות ממושך גם אל תוך השנה הבאה",
      "חיזוק שיתופי פעולה צבאיים אזוריים ומערביים להשגת הרתעה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-saudi-led-coalition-strikes-yemen-ships-on-fire-in-hormuz?traffic_source=rss",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/amid-setbacks-saudi-arabia-braces-yemen-war-stretch-2027-report",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261118-yemen-why-the-houthis-may-besiege-aden-rather-than-storm-it",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1390018",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turn-weapons-spigot-saudi-arabia-asks-partners-gear-deter-houthis",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-appoints-new-yemen-commander-amid-setbacks",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156050",
     "accessed_at": "2026-11-19T00:47:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-18T00:40:25+00:00",
  "changes": {
   "YEMEN-11190047-01": {
    "kind": "new"
   },
   "YEMEN-11190047-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "שיגור כטב\"מים חות'יים לעבר צינור הנפט מזרח-מערב בסעודיה",
    "score": 0.817
   },
   "YEMEN-11190047-03": {
    "kind": "new"
   },
   "YEMEN-11190047-04": {
    "kind": "new"
   },
   "YEMEN-11190047-05": {
    "kind": "possible",
    "prev": "התקדמות כוחות חות'יים לעבר עדן וקרבות במאריב ובאל-ג'וף",
    "score": 0.633
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-19T0040__iran-202611190040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-19T00:40:30+00:00",
   "window": {
    "from": "2026-11-18T00:40:30+00:00",
    "to": "2026-11-19T00:40:30+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611190040"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל ממשיך לכלול איומים הדדיים על נתיבי נפט ותשתיות, לצד צעדי ענישה כלכליים וסנקציות מצד וושינגטון נגד שלוחות איראניות. במקביל, מתנהלים חיכוכים צבאיים עקיפים ואירועים ימיים במפרץ ובמצר הורמוז, לצד דיפלומטיה אזורית וביקורים של בכירים צבאיים.",
   "fronts": [
    {
     "name": "המפרץ ומרחב הימי",
     "status": "מתוח עם אירועים ימיים ואיומים על תשתיות נפט"
    },
    {
     "name": "החזית העיראקית",
     "status": "חיכוך סביב פעילות המיליציות הפרו-איראניות"
    }
   ],
   "events": [
    {
     "id": "IRAN-11190040-01",
     "title": "פגיעת קליע במכלית עה במפרץ עומאן",
     "summary": "מכלית נפגעה על ידי קליע לא ידוע בחדר המכונות בזמן שהפליגה דרך מצר הורמוז.",
     "axis": "איראן - ארה\"ב ומפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T23:13:28+00:00",
     "last_update_at": "2026-11-18T23:13:28+00:00",
     "what_is_not_verified": "זהות אלגורם שירה את אלקליע והיקף הנזק המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_497021c795b387be",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tanker-struck-unknown-projectile-near-omans-khasab-ukmto-says",
       "published_at": "2026-11-18T23:13:28+00:00"
      }
     ],
     "places": [
      {
       "name": "ח'סב, עומאן",
       "lat": 26.1841,
       "lon": 56.247
      }
     ]
    },
    {
     "id": "IRAN-11190040-02",
     "title": "תקיפת מכליות נפט מזרחית להורמוז",
     "summary": "חיל הים האיראני דיווח ששלוש מכליות נפט עלו באש לאחר שפגעו במוקשים ימיים באזור מזרחית למצר הורמוז.",
     "axis": "איראן - ארה\"ב ומפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T20:34:34+00:00",
     "last_update_at": "2026-11-19T00:01:02+00:00",
     "what_is_not_verified": "האם המכליות אכן נפגעו ממוקשים ימיים והנסיבות המדויקות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_4bb7ea2007893ce2",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/19/iran-war-live-saudi-led-coalition-strikes-yemen-ships-on-fire-in-hormuz?traffic_source=rss",
       "published_at": "2026-11-19T00:01:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4bb7ea2007893ce2",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-navy-says-three-oil-tankers-caught-fire-east-hormuz",
       "published_at": "2026-11-18T20:34:34+00:00"
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
     "id": "IRAN-11190040-03",
     "title": "עצירת חשוד פקיסטני בקשירת קשר להתנקשות בארה\"ב",
     "summary": "אזרח פקיסטני נדון ללמעלה מ-27 שנות מאסר בארה\"ב בגין תכנון להתנקש בדונלד טראמפ כנקמה על חיסול קאסם סולימאני.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T00:21:33+00:00",
     "last_update_at": "2026-11-18T00:40:30+00:00",
     "what_is_not_verified": "הקשר הישיר והרשמי של משטר איראן למזימה מעבר לקביעת בית המשפט.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_bfb38fb8f3de1d73",
       "url": "https://www.theguardian.com/us-news/2026/nov/17/pakistani-man-jailed-trump-murder-plot",
       "published_at": "2026-11-18T00:21:33+00:00"
      }
     ],
     "places": [
      {
       "name": "ברוקלין, ארצות הברית",
       "lat": 40.6526,
       "lon": -73.9497
      }
     ]
    },
    {
     "id": "IRAN-11190040-04",
     "title": "הטלת סנקציות אמריקאיות על רשתות חזבאללה ואיראן",
     "summary": "משרד האוצר האמריקאי הטיל סנקציות על ארגון צדקה ומקבץ חברי רשת להברחת זהב וכספים המזוהים עם חזבאללה ומשמרות המהפכה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T19:11:01+00:00",
     "last_update_at": "2026-11-18T22:56:19+00:00",
     "what_is_not_verified": "היקף הפעילות המלא של הרשתות המוברחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_977bcb531000bb5e",
       "url": "https://www.aljazeera.com/news/2026/11/18/us-steps-up-pressure-on-iran-backed-hezbollah-with-new-sanctions?traffic_source=rss",
       "published_at": "2026-11-18T22:56:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_958b4ee6f77d9ed3",
       "url": "https://www.al-monitor.com/originals/2026/11/us-sanctions-hezbollah-linked-charity-push-against-irans-proxies-treasury-says",
       "published_at": "2026-11-18T19:48:43+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_977bcb531000bb5e",
       "url": "https://t.me/abualiexpress/133877",
       "published_at": "2026-11-18T19:11:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11190040-05",
     "title": "ביקור מפקד כוח קודס בעיראק",
     "summary": "מפקד כוח קודס איסמאעיל קאאני הגיע לבגדד כדי לתווך בין הממשלה לבין מיליציות פרו-איראניות סביב איום פוטנציאלי להשתלטות על מעוז.",
     "axis": "איראן - עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T20:41:35+00:00",
     "last_update_at": "2026-11-18T23:01:57+00:00",
     "what_is_not_verified": "התוצאות הסופיות של המגעים והאם תתבצע פעולה צבאית עיראקית נגד המיליציות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_reports",
       "url": "https://www.iranintl.com/en/202611186127",
       "published_at": "2026-11-18T23:01:57+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_reports",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21885917",
       "published_at": "2026-11-18T20:41:35+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    }
   ],
   "not_verified": [
    "טענות איראן כי שלוש מכליות נפט נפגעו עקב מוקשים ימיים",
    "היקף הנזק וההשלכות הסביבתיות של פגיעת הקליע במכלית ליד עומאן",
    "תוצאות ביקורו של מפקד כוח קודס בעיראק"
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
     "value": 3.2639,
     "unit": "ILS",
     "change_pct": 0.54,
     "source_id": "src_ecb",
     "as_of": "2026-11-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הבטחת ביטחון אזורי ללא התערבות זרה",
      "תגובה ואיומים על תשתיות נפט ושל ארה\"ב וישראל"
     ],
     "inferred": [
      "שימור השפעה באמצעות שלוחות אזוריות",
      "ניסיון לבלום סנקציות ולערער את חופש השיט במפרץ"
     ],
     "forecast": [
      "המשך הפעלת רשתות פרוקסי",
      "הגברת הלחץ סביב נתיבי סחר ונפט"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הפעלת לחץ כלכלי וסנקציות על רשתות הטרור ושלחויות איראן",
      "אזהרות מפני תגובה חסרת תקדים על תקיפות כימיות או בלתי קונבנציונליות"
     ],
     "inferred": [
      "בלימת ההתבססות והמימון של זרועות איראן באזור",
      "שמירה על נוכחות צבאית במפרץ וסביבתו"
     ],
     "forecast": [
      "המשך אכיפת סנקציות ממוקדות",
      "היערכות לתגובה במקרה של פגיעה בכוחות אמריקאיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/18/us-steps-up-pressure-on-iran-backed-hezbollah-with-new-sanctions?traffic_source=rss",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/us-sanctions-hezbollah-linked-charity-push-against-irans-proxies-treasury-says",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/nov/17/pakistani-man-jailed-trump-murder-plot",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611186127",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21885917",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-navy-says-three-oil-tankers-caught-fire-east-hormuz",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133877",
     "accessed_at": "2026-11-19T00:40:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-18T07:53:48+00:00",
  "changes": {
   "IRAN-11190040-01": {
    "kind": "new"
   },
   "IRAN-11190040-02": {
    "kind": "possible",
    "prev": "תקיפת כלי שיט במצר הורמוז",
    "score": 0.633
   },
   "IRAN-11190040-03": {
    "kind": "possible",
    "prev": "חשיפת תוכניות לפגיעה בנציגויות ישראליות ובכירים אמריקנים",
    "score": 0.4
   },
   "IRAN-11190040-04": {
    "kind": "new"
   },
   "IRAN-11190040-05": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-18T0755__ukraine-202611180755.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-18T07:55:12+00:00",
   "window": {
    "from": "2026-11-17T07:55:12+00:00",
    "to": "2026-11-18T07:55:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611180755"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהסלמה הדדית של מהלומות ארוכות טווח נגד תשתיות אסטרטגיות, הבולטת שבהן היא פגיעה משמעותית בגשר קרים לצד תקיפת מתקני נפט בתוך רוסיה. במקביל, כוחות רוסיה ממשיכים בהפצצות אינטנסיביות על מרחבים עירוניים בחזיתות המזרח ועל מתקני חשמל וגשרים בקייב, דבר שיוצר משבר הומניטרי ומחריף את העומס על העורף האוקראיני. במקביל למערכה הצבאית, מתקיימת פעילות דיפלומטית ענפה הכוללת מגעים לקראת פסגה בינלאומית בסין ומחלוקות בקרב מדינות המערב באשר להיקף וליעד התקיפות האוקראיניות.",
   "fronts": [
    {
     "name": "מצר קרץ' וחצי האי קרים",
     "status": "פגיעה קשה במקטע הכביש של גשר קרים בעקבות מתקפה משולבת ושיבוש תנועת כלי שיט, לצד המשך פעילות רכבות חלקית"
    },
    {
     "name": "מחוז חרקוב",
     "status": "הפגזות ותקיפות רוסיות מתמשכות על יישובים ואזורים אזרחיים, הגורמות להרוגים ולפצועים"
    },
    {
     "name": "מחוז דונצק",
     "status": "תקיפות והפגזות רוסיות קטלניות על מרכזי אוכלוסייה בהם סלוביאנסק והסביבה"
    },
    {
     "name": "עומק שטח רוסיה",
     "status": "פגיעות בכטב\"מים אוקראיניים בבתי זיקוק לנפט ושיבושים נרחבים בתנועת התעופה האזרחית"
    },
    {
     "name": "עורף אוקראינה וקייב",
     "status": "מצוקת אנרגיה חריפה והפסקות חשמל ממושכות כתוצאה מפגיעות רוסיות בתשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11180755-01",
     "title": "מתקפה אוקראינית משולבת גרמה להרס מקטע כביש בגשר קרים",
     "summary": "כוחות אוקראינה פגעו בגשר קרים באמצעות שילוב של כטב\"מים וטילים, מה שהביא לקריסת קשת ומקטע כביש לים ולחסימת תנועת כלי שיט, בעוד שתנועת הרכבות חודשה באופן חלקי.",
     "axis": "חצי האי קרים ומצר קרץ'",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T08:59:47+00:00",
     "last_update_at": "2026-11-18T06:46:00+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למסילת הרכבת והטענות על שימוש בטכנולוגיות ניווט עצמאיות ללא מערכות לוויין זרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063385/",
       "published_at": "2026-11-18T06:46:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cw772jk4rvmxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-17T21:24:35+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49685",
       "published_at": "2026-11-17T19:46:41+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49681",
       "published_at": "2026-11-17T19:14:12+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/17/ukraine-releases-footage-of-strike-on-crimean-bridge-video",
       "published_at": "2026-11-17T17:48:38+00:00"
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
       "name": "מצר קרץ', קרים",
       "lat": 45.281,
       "lon": 36.5492
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-02",
     "title": "פגיעות וקורבנות בתקיפות רוסיות במחוז חרקוב",
     "summary": "תקיפות שביצעו כוחות רוסיים על יישובים במחוז חרקוב, כולל פגיעה בשוק בעיר זלאטופיל, גרמו להרג אדם אחד ולפציעת לפחות 11 בני אדם, בהם ילד.",
     "axis": "מחוז חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:14:00+00:00",
     "last_update_at": "2026-11-18T07:37:00+00:00",
     "what_is_not_verified": "המספר הכולל המדויק של הנפגעים בכלל מוקדי הפגיעה במחוז.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_49f50b34e048d8be",
       "url": "https://www.ukrinform.net/rubric-ato/4185867-russian-attacks-kill-one-injures-eight-in-kharkiv-region.html",
       "published_at": "2026-11-18T07:37:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_49f50b34e048d8be",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063392/",
       "published_at": "2026-11-18T07:14:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זלאטופיל, אוקראינה",
       "lat": 49.3896,
       "lon": 36.2127
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-03",
     "title": "תקיפות רוסיות במחוז דונצק גבו את חייהם של ארבעה אזרחים",
     "summary": "הפגזות ותקיפות של כוחות רוסיים פגעו ביישובים סלוביאנסק, שבבקיבקה ויסנוהירקה שבמחוז דונצק והובילו למותם של ארבעה בני אדם.",
     "axis": "מחוז דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T06:42:00+00:00",
     "last_update_at": "2026-11-18T06:42:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המלא בשטחים שאינם בשליטת המנהל האזורי (כמו מריופול ווולנובאחה).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_146484b4e07aa0ad",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063387/",
       "published_at": "2026-11-18T06:42:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      },
      {
       "name": "שבבקיבקה, אוקראינה",
       "lat": 48.7506,
       "lon": 37.4908
      },
      {
       "name": "יסנוהירקה, אוקראינה",
       "lat": 48.7787,
       "lon": 37.5537
      }
     ]
    },
    {
     "id": "UKRAINE-11180755-04",
     "title": "יירוט נרחב של כטב\"מים רוסיים בשמי אוקראינה",
     "summary": "מערך ההגנה האווירית של אוקראינה יירט ונטרל 126 כלי טיס בלתי מאוישים ששוגרו על ידי רוסיה במהלך שעות הלילה.",
     "axis": "הגנה אווירית באוקראינה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:19:00+00:00",
     "last_update_at": "2026-11-18T07:19:00+00:00",
     "what_is_not_verified": "סך כל הכטב\"מים ששוגרו במקור ושיעור הפגיעות בתשתיות לעומת יירוטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4185864-air-defence-neutralises-126-russian-drones-used-to-attack-ukraine-overnight.html",
       "published_at": "2026-11-18T07:19:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-05",
     "title": "מתקפת כטב\"מים אוקראינית על בתי זיקוק בקרסנודאר",
     "summary": "כלי טיס בלתי מאוישים פגעו בשני בתי זיקוק לנפט באזור סברסקי שבמחוז קרסנודאר ברוסיה.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T04:56:50+00:00",
     "last_update_at": "2026-11-18T04:56:50+00:00",
     "what_is_not_verified": "מידת הנזק המעשי שנגרם למתקני הזיקוק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/2-russian-oil-refineries-reportedly-targeted-in-overnight-drone-attack-on-krasnodar-krai/",
       "published_at": "2026-11-18T04:56:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-06",
     "title": "השבתת טיסות ונמלי תעופה ברוסיה עקב איומי כטב\"מים",
     "summary": "התרחבות מתקפות הכטב\"מים של אוקראינה הובילה לשיבושים משמעותיים והגבלות טיסה יומיות בעשרות נמלי תעופה ברחבי רוסיה.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T07:10:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T07:10:00+00:00",
     "last_update_at": "2026-11-18T07:10:00+00:00",
     "what_is_not_verified": "היקף ההשפעה הכלכלית המדויק על ענף התעופה האזרחית ברוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/articles/2026/11/18/8063391/",
       "published_at": "2026-11-18T07:10:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-07",
     "title": "מחלוקת פומבית בין גרמניה ובריטניה לארצות הברית בנוגע לתקיפות בעומק רוסיה",
     "summary": "שרי ההגנה של גרמניה ובריטניה דחו בחריפות את הביקורת של בכיר בפנטגון שכינה את התקיפות האוקראיניות בעומק רוסיה בלתי מועילות להשגת יעדי הלחימה.",
     "axis": "הזירה הבינלאומית והסיוע הצבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T22:01:14+00:00",
     "last_update_at": "2026-11-18T03:54:30+00:00",
     "what_is_not_verified": "עמדת ממשל ארצות הברית הרשמית מעבר להצהרות של סגן תת-מזכיר ההגנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/germany-uk-push-back-after-us-criticizes-ukraines-deep-strikes-into-russia/",
       "published_at": "2026-11-18T03:54:30+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/18/ukraine-war-briefing-us-criticises-kyiv-deep-strikes-russia",
       "published_at": "2026-11-18T01:41:14+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/18/quite-a-stupid-thing-german-defense-minister-rejects-u-s-criticism-of-ukraine-s-strikes-deep-inside-russia",
       "published_at": "2026-11-17T22:01:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-08",
     "title": "הכחשת דרישה רוסית לעזיבת פינלנד את נאט\"ו",
     "summary": "נשיא פינלנד ודובר הקרמלין הכחישו במקביל טענות עיתונאיות לפיהן רוסיה הציבה דרישה שפינלנד תפרוש מנאט\"ו כחלק משיחות שלום על אוקראינה.",
     "axis": "משא ומתן ומדיניות חוץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:24:53+00:00",
     "last_update_at": "2026-11-18T07:24:53+00:00",
     "what_is_not_verified": "תוכן המגעים החסויים המלאים שנערכו בשיחות טלפון בין פוטין למנהיגים אירופיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/18/moscow-and-helsinki-agree-on-one-thing-russia-never-demanded-finland-leave-nato",
       "published_at": "2026-11-18T07:24:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-09",
     "title": "האשמות אוקראיניות בדבר שימוש רוסי בגז מדמיע בשדה הקרב",
     "summary": "חקירה באוקראינה בשיתוף הארגון למניעת הפצת נשק כימי קבעה כי צבא רוסיה השתמש ברימוני גז מדמיע נגד חיילים אוקראינים בניגוד לאמנות הבינלאומיות.",
     "axis": "חזית הלחימה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-17T20:23:17+00:00",
     "last_update_at": "2026-11-17T20:23:17+00:00",
     "what_is_not_verified": "היקף 14 אלף התקריות הנטענות על ידי אוקראינה, שרוסיה מכחישה באופן גורף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/17/ukrainian-investigation-finds-russia-used-tear-gas-against-ukrainian-troops-ap-reports",
       "published_at": "2026-11-17T20:23:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11180755-10",
     "title": "משבר אנרגיה והפסקות חשמל חמורות בקייב",
     "summary": "תקיפות חוזרות ונשנות של רוסיה על תשתיות אנרגיה יצרו הפסקות חשמל קשות וממושכות בבירת אוקראינה והובילו לביקורת פנימית נגד ראש העיר.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T17:19:57+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T17:19:57+00:00",
     "last_update_at": "2026-11-18T07:00:36+00:00",
     "what_is_not_verified": "היקף האחריות הניהולית המיוחסת לראש העיר קליצ'קו אל מול חומרת הפגיעה הרוסית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/18/russian-attacks-kyiv-power-outages-mayor-in-perilous-position",
       "published_at": "2026-11-18T07:00:36+00:00"
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
     "id": "UKRAINE-11180755-11",
     "title": "הגעת פוטין לסין לקראת פסגה משולשת",
     "summary": "נשיא רוסיה נחת בסין לקראת מפגש פסגה משותף עם נשיא סין ונשיא ארצות הברית דונלד טראמפ.",
     "axis": "דיפלומטיה בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-17T19:16:36+00:00",
     "last_update_at": "2026-11-17T19:46:41+00:00",
     "what_is_not_verified": "סדר היום המלא של הפסגה וההסכמות שיושגו בה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49685",
       "published_at": "2026-11-17T19:46:41+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133819",
       "published_at": "2026-11-17T19:16:36+00:00"
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
     "id": "UKRAINE-11180755-12",
     "title": "התקדמות בשיחות בין משרד האוצר האוקראיני לקרן המטבע הבינלאומית",
     "summary": "שלב הדיונים הפרונטלי בוורשה בין משרד האוצר של אוקראינה לנציגי קרן המטבע הסתיים בהתקדמות משמעותית בנוגע לסיוע בהיקף של כ-1.6 מיליארד דולר.",
     "axis": "כלכלה וסיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T07:42:00+00:00",
     "last_update_at": "2026-11-18T07:42:00+00:00",
     "what_is_not_verified": "מועד האישור הסופי והעברת הכספים בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_7f2483820f1bcd72",
       "url": "https://www.ukrinform.net/rubric-economy/4185863-16-bln-at-stake-finance-ministry-reports-significant-progress-in-talks-with-imf-mission.html",
       "published_at": "2026-11-18T07:42:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ורשה, פולין",
       "lat": 52.2334,
       "lon": 21.0711
      }
     ]
    }
   ],
   "not_verified": [
    "טענות רוסיות על קיומם של כעשרים בתי כלא סודיים ומתקני עינויים המופעלים על ידי אוקראינה",
    "מספר האבדות הכולל של הצבא הרוסי המדווח על ידי המטה הכללי של אוקראינה",
    "הטענה כי תקיפת גשר קרים הסתמכה כולה על תקשורת מקומית עצמאית לחלוטין ללא לוויינים זרים",
    "היקף השימוש המדויק בגז מדמיע בשדה הקרב לפי הנתון האוקראיני של כ-14 אלף מקרים"
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
      "פגיעה בנתיבי אספקה צבאיים רוסיים ובסמלי שליטה דוגמת גשר קרים",
      "ערעור הפעילות הכלכלית ותשתיות האנרגיה שמממנות את מאמץ המלחמה של רוסיה"
     ],
     "inferred": [
      "יצירת מנוף לחץ סמלי ומבצעי לקראת מגעים מדיניים ופסגות בינלאומיות",
      "הפגנת עצמאות טכנולוגית צבאית שאינה תלויה באופן מלא במערכות מערביות"
     ],
     "forecast": [
      "המשך מיקוד מאמצי התקיפה בנמלי תעופה, מאגרי דלק ותשתיות לוגיסטיקה ברוסיה",
      "החרפת הוויכוח הפנימי והחיצוני מול שותפות מערביות על לגיטימיות התקיפות בעומק"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה במערכי כטב\"מים ומרכזי שליטה צבאיים של אוקראינה בחזית",
      "שלילת טענות בדבר דרישות להוצאת מדינות שכנות מברית נאט\"ו"
     ],
     "inferred": [
      "שחיקת כושר העמידה של העורף האוקראיני באמצעות פגיעה ממוקדת במערכות החשמל לקראת החורף",
      "הפגנת נוכחות מדינית בינלאומית לצד מעצמות מתחרות כדי לחלץ עמדת מיקוח עדיפה"
     ],
     "forecast": [
      "המשך גלי תקיפות באמצעות כטב\"מים וטילים לעבר תשתיות אנרגיה וגשרים מרכזיים באוקראינה",
      "הידוק שיתוף הפעולה הדיפלומטי מול סין במטרה לבלום לחצים מערביים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq7825234lgmo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/18/russian-attacks-kyiv-power-outages-mayor-in-perilous-position",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/germany-uk-push-back-after-us-criticizes-ukraines-deep-strikes-into-russia/",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/17/ukrainian-investigation-finds-russia-used-tear-gas-against-ukrainian-troops-ap-reports",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/articles/2026/11/18/8063391/",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133819",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49685",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-economy/4185863-16-bln-at-stake-finance-ministry-reports-significant-progress-in-talks-with-imf-mission.html",
     "accessed_at": "2026-11-18T07:55:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-17T19:30:52+00:00",
  "changes": {
   "UKRAINE-11180755-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה אוקראינית משמעותית על גשר קרים והקרסת מקטע ממנו",
    "score": 1.0
   },
   "UKRAINE-11180755-02": {
    "kind": "new"
   },
   "UKRAINE-11180755-03": {
    "kind": "new"
   },
   "UKRAINE-11180755-04": {
    "kind": "possible",
    "prev": "חדירת כטב\"מים רוסיים למרחב האווירי של מולדובה וסגירת מעברי גבול",
    "score": 0.467
   },
   "UKRAINE-11180755-05": {
    "kind": "new"
   },
   "UKRAINE-11180755-06": {
    "kind": "new"
   },
   "UKRAINE-11180755-07": {
    "kind": "new"
   },
   "UKRAINE-11180755-08": {
    "kind": "new"
   },
   "UKRAINE-11180755-09": {
    "kind": "new"
   },
   "UKRAINE-11180755-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים בליסטיים רוסית על גשרים בקייב",
    "score": 1.0
   },
   "UKRAINE-11180755-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "נחיתת פוטין בסין לקראת פסגה משולשת",
    "score": 1.0
   },
   "UKRAINE-11180755-12": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-19T0048__north-202611190048.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-19T00:48:28+00:00",
   "window": {
    "from": "2026-11-18T00:48:28+00:00",
    "to": "2026-11-19T00:48:28+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611190048"
   },
   "summary": "הזירה הצפונית כוללת עימותים והתבססות צבאית ישראלית מתמשכת בדרום לבנון ובדרום סוריה, לצד פעולות סיכול נגד תשתיות חיזבאללה. במקביל, מתנהלים מגעים דיפלומטיים והצהרות סביב הסכמי ההפרדה ומאבק רגולטורי וכלכלי בינלאומי נגד רשתות המימן של ארגון הטרור.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה (תקיפות, השמדת תת-קרקע ופעילות שיקום תשתיות של חיזבאללה)"
    },
    {
     "name": "החזית הסורית",
     "status": "פעילה (פשיטות, תקיפות אוויריות וחיכוך באזור קוניטרה ודרעא)"
    }
   ],
   "events": [
    {
     "id": "NORTH-11190048-01",
     "title": "הריגת אנשי ביטחון בסוריה",
     "summary": "שני אנשי ביטחון סורים נהרגו וארבעה נפצעו במהלך מבצע או פשיטה באזור דמשק",
     "axis": "הזירה הסורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T23:34:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T23:34:33+00:00",
     "last_update_at": "2026-11-18T23:34:33+00:00",
     "what_is_not_verified": "זהות החשודים או פרטים מדויקים על נסיבות הפעולה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_eaef453d049014c9",
       "url": "https://www.aa.com.tr/en/middle-east/2-syrian-security-officers-killed-4-wounded-in-raid-near-damascus/4129908",
       "published_at": "2026-11-18T23:34:33+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'רמאנה, סוריה",
       "lat": 33.4864,
       "lon": 36.3483
      }
     ]
    },
    {
     "id": "NORTH-11190048-02",
     "title": "גינוי קטארי על פעולות ישראל בסוריה",
     "summary": "משרד החוץ של קטאר גינה את המשך הפעולות והכניסות של צבא ישראל במחוזות בסוריה",
     "axis": "הזירה הסורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T22:26:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T22:26:34+00:00",
     "last_update_at": "2026-11-18T22:26:34+00:00",
     "what_is_not_verified": "לא מאומתות טענות קטאר בדבר הפרת החוק הבינלאומי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/qatar-condemns-israeli-incursions-syria",
       "published_at": "2026-11-18T22:26:34+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-11190048-03",
     "title": "ירי ארטילרי ישראלי לדרום לבנון",
     "summary": "דווח על ירי ארטילרי ישראלי לעבר עיירה בדרום לבנון",
     "axis": "הזירה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T21:53:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T21:53:01+00:00",
     "last_update_at": "2026-11-18T21:53:01+00:00",
     "what_is_not_verified": "פרטים מלאים על הנזק או נפגעים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1390017",
       "published_at": "2026-11-18T21:53:01+00:00"
      }
     ],
     "places": [
      {
       "name": "בית יחון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-11190048-04",
     "title": "תקיפה אווירית ישראלית בקנטרה",
     "summary": "חיל האוויר הישראלי תקף את העיירה קנטרה בדרום לבנון",
     "axis": "הזירה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T20:13:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T20:13:45+00:00",
     "last_update_at": "2026-11-18T20:13:45+00:00",
     "what_is_not_verified": "תוצאות התקיפה המדויקות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strike-targets-southern-lebanons-qantara",
       "published_at": "2026-11-18T20:13:45+00:00"
      }
     ],
     "places": [
      {
       "name": "קנטרה, לבנון",
       "lat": 33.2735,
       "lon": 35.4591
      }
     ]
    },
    {
     "id": "NORTH-11190048-05",
     "title": "סנקציות אמריקאיות נגד גופים הקשורים לחיזבאללה",
     "summary": "משרד האוצר האמריקאי הטיל סנקציות על ארגון צדקה ומקורבים לחיזבאללה בגין הברחות ומימון",
     "axis": "הזירה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T15:20:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T15:20:43+00:00",
     "last_update_at": "2026-11-18T22:56:19+00:00",
     "what_is_not_verified": "היקף ההשפעה המדויק של הסנקציות בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_958b4ee6f77d9ed3",
       "url": "https://www.aljazeera.com/news/2026/11/18/us-steps-up-pressure-on-iran-backed-hezbollah-with-new-sanctions?traffic_source=rss",
       "published_at": "2026-11-18T22:56:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_958b4ee6f77d9ed3",
       "url": "https://www.al-monitor.com/originals/2026/11/us-sanctions-hezbollah-linked-charity-push-against-irans-proxies-treasury-says",
       "published_at": "2026-11-18T19:48:43+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_958b4ee6f77d9ed3",
       "url": "https://www.al-monitor.com/originals/2026/11/us-sanctions-hezbollah-linked-charity-bid-squeeze-iran",
       "published_at": "2026-11-18T19:35:02+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_958b4ee6f77d9ed3",
       "url": "https://t.me/abualiexpress/133877",
       "published_at": "2026-11-18T19:11:01+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b8af2806615b1567",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968660/us-sanctions-lebanese-association-gold-companies-and-individuals-over/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968660",
       "published_at": "2026-11-18T15:20:43+00:00"
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
     "id": "NORTH-11190048-06",
     "title": "תקיפה אווירית ישראלית בחאדאת' שבדרום לבנון",
     "summary": "דווח על תקיפה אווירית ישראלית שהצתתה את פאתי העיירה חאדאת' בדרום לבנון",
     "axis": "הזירה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T19:19:11+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T19:19:11+00:00",
     "last_update_at": "2026-11-18T19:19:11+00:00",
     "what_is_not_verified": "פרטים על נפגעים בגוף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/152567/",
       "published_at": "2026-11-18T19:19:11+00:00"
      }
     ],
     "places": [
      {
       "name": "חאדאת', לבנון",
       "lat": 33.165,
       "lon": 35.3916
      }
     ]
    },
    {
     "id": "NORTH-11190048-07",
     "title": "תרגיל משותף של ישראל ויוון",
     "summary": "…",
     "axis": "הזזרה הרחבה מול איראן והמרחב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T16:36:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T16:36:36+00:00",
     "last_update_at": "2026-11-18T18:11:37+00:00",
     "what_is_not_verified": "קיומן או היערכותן של תקיפות משפליות בפועל נגד יעדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_0d17ad0cbdb69426",
       "url": "https://www.israelhayom.co.il/news/defense/article/21884616",
       "published_at": "2026-11-18T18:11:37+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_0d17ad0cbdb69426",
       "url": "https://www.ynet.co.il/news/article/bypiihi0zl",
       "published_at": "2026-11-18T16:36:36+00:00"
      }
     ],
     "places": [
      {
       "name": "תל אביב, ישראל",
       "lat": 32.0853,
       "lon": 34.7818
      }
     ]
    },
    {
     "id": "NORTH-11190048-08",
     "title": "הצהרת שר החוץ הסורי על הסכם ההפרדה",
     "summary": "שר החוץ הסורי הצהיר כי סוריה מחויבת להבנות הביטחוניות עם ישראל ולהחייאת הסכם הפרדת הכוחות משנת 1974",
     "axis": "הזירה הסורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T17:14:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T17:14:08+00:00",
     "last_update_at": "2026-11-18T17:14:08+00:00",
     "what_is_not_verified": "האם ישראל תסכים לתנאים אלו בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-remains-committed-to-security-understanding-with-israel-revival-of-1974-disengagement-deal-foreign-minister/4129670",
       "published_at": "2026-11-18T17:14:08+00:00"
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
     "id": "NORTH-11190048-09",
     "title": "הרוג ופצועים בתקיפה באזור החוף בסוריה",
     "summary": "איש ביטחון סורי נהרג ושניים נוספים נפצעו בתקיפה של חמושים בלתי מזוהים במחוז טרטוס",
     "axis": "הזירה הסורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T13:02:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T13:02:18+00:00",
     "last_update_at": "2026-11-18T13:02:18+00:00",
     "what_is_not_verified": "זהות התוקפים המדויקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_b7203dbd515a5c2a",
       "url": "https://www.newarab.com/news/syrian-security-officer-killed-attack-coast",
       "published_at": "2026-11-18T13:02:18+00:00"
      }
     ],
     "places": [
      {
       "name": "טרטוס, סוריה",
       "lat": 34.8936,
       "lon": 35.8852
      }
     ]
    },
    {
     "id": "NORTH-11190048-10",
     "title": "פעילות חיזבאללה לשיקום תשתיות קשר בלבנון",
     "summary": "נצפו פעילי חיזבאללה מתקינים ותוואי כבלי תקשורת על עמודי חשמל ותשתיות של המדינה בלבנון",
     "axis": "הזירה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T09:46:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T09:46:29+00:00",
     "last_update_at": "2026-11-18T09:46:29+00:00",
     "what_is_not_verified": "היקף פריסת הכבלים בכלל אזורי לבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/hezbollah-is-rebuilding-its-command-and-control-systems-by-exploiting-lebanese-state-infrastructure/",
       "published_at": "2026-11-18T09:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      }
     ]
    },
    {
     "id": "NORTH-11190048-11",
     "title": "ירי ותקיפה ישראלית באזור דרעא בסוריה",
     "summary": "כוחות ישראליים ירו והפגיזו את פאתי הכפר קויה בדרום סוריה בניסיון התקדמות",
     "axis": "הזירה הסורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T09:44:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T09:44:10+00:00",
     "last_update_at": "2026-11-18T09:44:10+00:00",
     "what_is_not_verified": "היקף הנזק המלא בכפר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/israeli-forces-fire-on-homes-in-syrias-daraa-countryside/",
       "published_at": "2026-11-18T09:44:10+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-11190048-12",
     "title": "השמדת תוואי תת-קרקעי בהר דב",
     "summary": "כוחות צה\"ל מחטיבה 810 השמידו תוואי תת-קרקעי של חיזבאללה במרחב הר דב",
     "axis": "הזירה הלבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T08:02:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T08:02:54+00:00",
     "last_update_at": "2026-11-18T08:02:54+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25649",
       "published_at": "2026-11-18T08:02:54+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף הפעילות המלא של רשתות ההברחה הטורקיות-לבנוניות מטעם חיזבאללה",
    "האם ישראל תבצע תקיפה רחבה נגד איראן או תרחיב את אזורי החיץ בסוריה ולבנון"
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
     "value": 3.2639,
     "unit": "ILS",
     "change_pct": 0.54,
     "source_id": "src_ecb",
     "as_of": "2026-11-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "שליטה באזורי הביטחון בלבנון ובסוריה עד להסרת כל האיומים ופירוז הארגונים",
      "מניעת התבססות גורמי טרור בסמוך לגבולות"
     ],
     "inferred": [
      "יצירת מציאות של שטחי חיץ קבועים באזורים הסמוכים לגבול",
      "המשך לחץ צבאי ומודיעיני ממוקד"
     ],
     "forecast": [
      "המשך פעילות צבאית נקודתית ואפשרות להסלמה נוספת במקרה של התלקחות"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "גינוי תקיפות ישראל ופעולותיה בזירות השונות"
     ],
     "inferred": [
      "שיקום מערכות הפיקוד, השליטה ותשתיות התקשורת האוטונומיות תחת תשתיות מדינה בלבנון",
      "ניסיון לעקוף סנקציות כלכליות באמצעות רשתות הברחה"
     ],
     "forecast": [
      "המשך מאמצי ההתחמשות והשיקום המבצעי חרף הלחץ הצבאי והכלכלי"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "מחויבות להבנות הביטחוניות ולהחייאת הסכם הפרדת הכוחות משנת 1974",
      "שמירה על ריבונות שטחי המדינה"
     ],
     "inferred": [
      "שאיפה לבלום את הפעילות הצבאית הישראלית בשטחה באמצעות לחץ דיפלומטי בינלאומי",
      "התמודדות עם חמושים מקומיים בשטחה"
     ],
     "forecast": [
      "המשך קריאות לקהילה הבינלאומית להתערבות ומאמצים לייצוב אזורי השליטה של המשטר"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/18/us-steps-up-pressure-on-iran-backed-hezbollah-with-new-sanctions?traffic_source=rss",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/hezbollah-is-rebuilding-its-command-and-control-systems-by-exploiting-lebanese-state-infrastructure/",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/152567/",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/us-sanctions-hezbollah-linked-charity-bid-squeeze-iran",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-remains-committed-to-security-understanding-with-israel-revival-of-1974-disengagement-deal-foreign-minister/4129670",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/israeli-forces-fire-on-homes-in-syrias-daraa-countryside/",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21884616",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968660/us-sanctions-lebanese-association-gold-companies-and-individuals-over/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968660",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1390017",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-air-strike-targets-southern-lebanons-qantara",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syrian-security-officer-killed-attack-coast",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133877",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25649",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bypiihi0zl",
     "accessed_at": "2026-11-19T00:48:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-18T00:42:08+00:00",
  "changes": {
   "NORTH-11190048-01": {
    "kind": "new"
   },
   "NORTH-11190048-02": {
    "kind": "new"
   },
   "NORTH-11190048-03": {
    "kind": "possible",
    "prev": "מגעים בינלאומיים לגיבוש כוח חלופי ליוניפי\"ל בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11190048-04": {
    "kind": "new"
   },
   "NORTH-11190048-05": {
    "kind": "new"
   },
   "NORTH-11190048-06": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפה ישראלית בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11190048-07": {
    "kind": "new"
   },
   "NORTH-11190048-08": {
    "kind": "possible",
    "prev": "קריאת שר החוץ הטורקי לישראל לכבד את הסכם הפרדת הכוחות מול סוריה",
    "score": 0.467
   },
   "NORTH-11190048-09": {
    "kind": "possible",
    "prev": "תקיפת חמושים נגד סיור ביטחון פנים באזור טרטוס",
    "score": 0.633
   },
   "NORTH-11190048-10": {
    "kind": "new"
   },
   "NORTH-11190048-11": {
    "kind": "new"
   },
   "NORTH-11190048-12": {
    "kind": "new"
   }
  }
 }
};
