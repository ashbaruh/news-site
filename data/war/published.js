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
  "draft": "drafts/ukraine/2026-11-19T0340__ukraine-202611190340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-19T03:40:32+00:00",
   "window": {
    "from": "2026-11-18T03:40:32+00:00",
    "to": "2026-11-19T03:40:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611190340"
   },
   "summary": "העימות בין אוקראינה לרוסיה מאופיין בהסלמה בתקיפות אוקראיניות על תשתיות אסטרטגיות בעומק רוסיה ובגשר קרים, לצד לחימה עצימה בחזית חרקוב הכוללת קרבות בתוואי תת-קרקעי והפצצות כטב\"מים. במקביל למגעים דיפלומטיים סביב תנאי סיום המלחמה ופסגה משולשת בסין, המערב מקדם חבילות סיוע פיננסיות וסנקציות כדי לשמר את כושר העמידה של קייב. התלות של אוקראינה ברשתות תקשורת חלופיות מתרחבת על רקע מגבלות שמטילות חברות אספקה אזרחיות.",
   "fronts": [
    {
     "name": "חזית חרקוב",
     "status": "לחימה קרקעית הכוללת קרבות במנהרות ותקיפות כטב\"מים רוסיים על מרכזים עירוניים."
    },
    {
     "name": "חצי האי קרים ומצר קרץ'",
     "status": "מתקפות חוזרות של צבא אוקראינה על גשר קרים באמצעות טילים וכטב\"מים, שהביאו לחסימת תנועה ונזק."
    },
    {
     "name": "עורף תשתיות הנפט ברוסיה",
     "status": "מערכה מתמשכת של כטב\"מים אוקראיניים שפגעה ביכולת הזיקוק ברוסיה בהיקף נרחב."
    },
    {
     "name": "הציר המדיני והסנקציות",
     "status": "ניסיונות גיבוש הסכמות באבו דאבי ופגישות בשנג'ן, לצד קידום חבילת מימון של האיחוד האירופי."
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11190340-01",
     "title": "מתקפה חוזרת על גשר קרים ופגיעה בחלק המסילתי",
     "summary": "כוחות אוקראיניים תקפו שוב את גשר קרים בלילה שבין 18 ל-19 בנובמבר. הרשויות שהוצבו על ידי רוסיה הודיעו על השבתת תנועת כלי הרכב, ודיווחים ציינו פגיעה במסלול הרכבת.",
     "axis": "חצי האי קרים ומצר קרץ'",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T17:09:43+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T17:09:43+00:00",
     "last_update_at": "2026-11-19T01:22:59+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למסילת הרכבת והטענה כי נהרסה כליל אינם מאומתים רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_b682dd132a864cfe",
       "url": "https://meduza.io/en/news/2026/11/19/ukraine-attacks-crimean-bridge-overnight-ahead-of-meeting-between-trump-putin-and-xi",
       "published_at": "2026-11-19T01:22:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b682dd132a864cfe",
       "url": "https://t.me/alexmehacarmel/49725",
       "published_at": "2026-11-19T00:25:28+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_b682dd132a864cfe",
       "url": "https://kyivindependent.com/ukrainian-forces-once-more-hit-russias-crimean-bridge-days-after-devastating-strike/",
       "published_at": "2026-11-19T00:04:38+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b682dd132a864cfe",
       "url": "https://www.theguardian.com/world/2026/nov/19/kerch-bridge-crimea-russia-attacked-again-ukraine",
       "published_at": "2026-11-18T23:27:37+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_b682dd132a864cfe",
       "url": "https://tass.com/emergencies/2220833",
       "published_at": "2026-11-18T22:54:02+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_b682dd132a864cfe",
       "url": "https://www.bbc.co.uk/news/videos/ckvg28jy77z5o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-18T17:09:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11190340-02",
     "title": "חשיפת שימוש ברחפני ממסר וטילים מתוצרת הולנדית בתקיפות גשר קרים",
     "summary": "דיווחים חשפו כי בתקיפות האחרונות על גשר קרים נעשה שימוש בטילי רוטה שפותחו על ידי חברה מהולנד, וכן ברשת כטב\"מים ששימשו כתחנות ממסר לעקיפת מגבלות תקשורת.",
     "axis": "חצי האי קרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T19:48:13+00:00",
     "last_update_at": "2026-11-19T02:16:26+00:00",
     "what_is_not_verified": "הטענה הרוסית בדבר סיוע של מטוס מודיעין בתקיפה אינה מאומתת, ופרטי התשתית הטכנולוגית טרם הובררו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/ukraine-war-briefing-russia-embassy-netherlands-destinus-missiles-kerch-crimea-bridge-strike",
       "published_at": "2026-11-19T02:16:26+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/news/audio/2026/nov/18/how-ukraine-landed-a-blow-to-putins-prize-bridge-the-latest",
       "published_at": "2026-11-18T21:18:57+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49715",
       "published_at": "2026-11-18T20:26:32+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/18/ukraine-hit-the-crimean-bridge-with-ruta-missiles-from-a-firm-russian-born-mikhail-kokorich-founded-in-switzerland-after-the-u-s-barred-him-from-his-own-startup-s-technology",
       "published_at": "2026-11-18T19:48:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11190340-03",
     "title": "פגיעה נרחבת בבתי זיקוק לנפט ברוסיה בעקבות תקיפות כטב\"מים אוקראיניים",
     "summary": "מתקפות כלי טיס בלתי מאוישים מאוקראינה פגעו בלפחות 15 מתוך 35 בתי זיקוק גדולים ברוסיה בתוך 20 יום, והביאו לירידה של כ-45% בהיקף זיקוק הנפט במדינה.",
     "axis": "העורף הרוסי",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T18:14:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T18:14:00+00:00",
     "last_update_at": "2026-11-19T00:47:47+00:00",
     "what_is_not_verified": "נתוני הפגיעה מבוססים על הערכות מקורות בתעשייה ולא על פרסום רשמי של ממשלת רוסיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-strikes-cut-russian-oil-refinery-processing-by-45-reuters-reports/",
       "published_at": "2026-11-19T00:47:47+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/ukrainian-drone-attacks-have-cut-the-amount-of-oil-russia-refines-by-45-since-late-october-reuters-reports",
       "published_at": "2026-11-18T21:05:24+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063514/",
       "published_at": "2026-11-18T18:14:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאזאן, רוסיה",
       "lat": 54.6296,
       "lon": 39.7425
      },
      {
       "name": "ירוסלבל, רוסיה",
       "lat": 57.6264,
       "lon": 39.8934
      },
      {
       "name": "קירישי, רוסיה",
       "lat": 59.4503,
       "lon": 32.0106
      }
     ]
    },
    {
     "id": "UKRAINE-11190340-04",
     "title": "התקפות כטב\"מים רוסיים ופגיעות באוכלוסייה במחוז חרקוב",
     "summary": "כוחות רוסיים תקפו מבני מגורים, סניף דואר ושוק בערים צ'והויב וזלטופיל במחוז חרקוב באמצעות כטב\"מים, תקיפות שהובילו לנפגעים בגוף.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T18:18:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T18:18:00+00:00",
     "last_update_at": "2026-11-18T18:18:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא בצ'והויב נמצא בבדיקה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063512/",
       "published_at": "2026-11-18T18:18:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'והויב, אוקראינה",
       "lat": 49.8366,
       "lon": 36.6899
      },
      {
       "name": "זלטופיל, אוקראינה",
       "lat": 49.3896,
       "lon": 36.2127
      }
     ]
    },
    {
     "id": "UKRAINE-11190340-05",
     "title": "קרבות תת-קרקעיים במנהרות באזור חרקוב",
     "summary": "חיילים אוקראינים מנהלים לחימה נגד כוחות רוסיים בתוך צינור גז ומנהרות סובייטיות ישנות במחוז חרקוב כדי להתגונן מפגיעות כטב\"מים.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T17:00:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T17:00:04+00:00",
     "last_update_at": "2026-11-18T17:00:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_945e1a7dc4136475",
       "url": "https://www.bbc.co.uk/news/videos/c8p3vw4q6nzzo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-18T17:00:40+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_2cfc3ba5b526dd64",
       "url": "https://www.bbc.co.uk/news/articles/c32l507ev4v4o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-18T17:00:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11190340-06",
     "title": "הצעת הנציבות האירופית להלוואה בסך 45 מיליארד אירו לאוקראינה",
     "summary": "הנציבות האירופית הציעה מתן הלוואה בהיקף 45 מיליארד אירו לקייב בשנת 2027 לחיזוק ההגנה והמשק, כאשר ההחזר יותנה בפיצויים שרוסיה תשלם בעתיד.",
     "axis": "סיוע בינלאומי ומדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T22:34:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T22:34:03+00:00",
     "last_update_at": "2026-11-18T22:34:03+00:00",
     "what_is_not_verified": "אישור ההצעה על ידי כל 27 המדינות החברות באיחוד טרם הושלם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/18/eu-loan-ukraine-cash-crisis-defences-von-der-leyen-kyiv",
       "published_at": "2026-11-18T22:34:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11190340-07",
     "title": "חשיפת עמדות המשא ומתן של רוסיה בשיחות אבו דאבי",
     "summary": "במסגרת שיחות שנערכו באבו דאבי דרשה רוסיה צמצום כוחות נאט\"ו לגבולות 1997 והפסקת הגדרתה כאיום, ובתמורה הציעה להפחית נוכחות צבאית בבלארוס ובמובלעת קלינינגרד.",
     "axis": "משא ומתן דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T20:29:16+00:00",
     "last_update_at": "2026-11-18T21:38:19+00:00",
     "what_is_not_verified": "פרטי הוויתורים המדויקים של רוסיה בבלארוס ובקלינינגרד והסכמת הצדדים אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/u-s-warns-russia-it-should-make-peace-with-ukraine-now-while-trump-still-has-room-to-negotiate-the-kyiv-independent-reports",
       "published_at": "2026-11-18T21:38:19+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/18/russia-is-prepared-to-reduce-its-military-presence-in-the-kaliningrad-region-and-belarus-if-its-demands-are-met-bloomberg-reports",
       "published_at": "2026-11-18T20:29:16+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11190340-08",
     "title": "האשמות אירופיות על שימוש רוסי בנשק כימי בחזית",
     "summary": "הנציבות האירופית קראה למצות את הדין עם רוסיה בעקבות דוח חקירה אוקראיני שהצביע על שימוש נרחב ושיטתי בחומרים כימיים לאורך קווי הלחימה.",
     "axis": "זירה בינלאומית ומשפטית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T18:21:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T18:21:00+00:00",
     "last_update_at": "2026-11-18T18:21:00+00:00",
     "what_is_not_verified": "ממצאי הדוח האוקראיני טרם אומתו בחקירה עצמאית של הארגון למניעת הפצת נשק כימי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063517/",
       "published_at": "2026-11-18T18:21:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11190340-09",
     "title": "צעדי כוננות בפולין מפני פעולות חבלה רוסיות בגבול קלינינגרד",
     "summary": "שר ההגנה הפולני הודיע על סיכול תוכנית חבלה רוסית שנועדה להטיל אשמה על אוקראינה סמוך לגבול קלינינגרד, וביקש להרחיב את פריסת הצבא להגנת הרכבות.",
     "axis": "הגבול הפולני-רוסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T19:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-18T19:00:00+00:00",
     "last_update_at": "2026-11-18T19:00:00+00:00",
     "what_is_not_verified": "תוכנית החבלה המיוחסת למודיעין הרוסי נסמכת על טענות של גורמי ביטחון פולניים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_rmf24",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063521/",
       "published_at": "2026-11-18T19:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11190340-10",
     "title": "פסגה משולשת בעיר שנג'ן בהשתתפות מנהיגי ארה\"ב, סין ורוסיה",
     "summary": "נשיאי ארה\"ב, סין ורוסיה התכנסו למפגש משולש בעיר שנג'ן, על רקע דיווחים סותרים לגבי היקף הדיונים שיתקיימו בפועל בנושא המלחמה באוקראינה.",
     "axis": "דיפלומטיה בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-18T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-18T10:53:21+00:00",
     "last_update_at": "2026-11-19T03:00:12+00:00",
     "what_is_not_verified": "האם התקיימו שיחות מהותיות על אוקראינה בפסגה שנוי במחלוקת בין גורמים רשמיים למקורות תקשורתיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/what-china-hopes-to-gain-from-the-trump-putin-summit/",
       "published_at": "2026-11-19T03:00:12+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/ukraine-attacks-crimean-bridge-overnight-ahead-of-meeting-between-trump-putin-and-xi",
       "published_at": "2026-11-19T01:22:59+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/19/u-s-warns-russia-it-should-make-peace-with-ukraine-now-while-trump-still-has-room-to-negotiate-the-kyiv-independent-reports",
       "published_at": "2026-11-18T21:38:19+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/commentisfree/2026/nov/18/the-guardian-view-on-the-trump-xi-and-putin-meeting-it-may-be-a-first-but-its-not-progress",
       "published_at": "2026-11-18T18:35:14+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49706",
       "published_at": "2026-11-18T15:28:28+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133851",
       "published_at": "2026-11-18T12:51:14+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c9n70gd320mpo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-18T10:53:21+00:00"
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
    "טענת ערוצים אוקראיניים בדבר השמדה מוחלטת של קטע מסילת הרכבת בגשר קרים",
    "טענת מקורות רוסיים על מעורבות מטוס מודיעין בהכוונת התקיפה בגשר קרים",
    "ההערכה כי תפוקת בתי הזיקוק ברוסיה פחתה ב-45%, הנסמכת על מקורות אלמוניים בתעשייה",
    "הדיווחים שלפיהם סין סירבה לדון בסוגיית המלחמה באוקראינה במהלך הפסגה בשנג'ן",
    "נכונות רוסיה להסיג כוחות או נשק גרעיני מבלארוס ומקלינינגרד במסגרת ויתורים הדדיים"
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
     "value": 1.0968,
     "unit": "USD",
     "change_pct": -0.19,
     "source_id": "src_ecb",
     "as_of": "2026-11-18T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה עצמית ופגיעה בלוגיסטיקה ובנכסים אסטרטגיים של הצבא הרוסי",
      "המשך פינוי אזרחים מאזורי כיבוש במחוז חרסון"
     ],
     "inferred": [
      "ערעור חופש הפעולה הלוגיסטי של רוסיה בקרים ופגיעה בהכנסותיה מאנרגיה לפני שיחות מדיניות",
      "הפחתת התלות במערכות מערביות מוגבלות באמצעות פיתוח אמצעי תקיפה ותקשורת עצמאיים"
     ],
     "forecast": [
      "המשך מאמצי התקיפה הממוקדים נגד צירי אספקה ובתי זיקוק נוספים בתוך רוסיה",
      "הישענות גוברת על מקורות מימון אירופיים ארוכי טווח לנוכח שינויים פוליטיים בארה\"ב"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הסגת נוכחות כוחות נאט\"ו לגבולות שנת 1997",
      "הפסקת הגדרתה של רוסיה כאיום או כאויב על ידי מדינות המערב",
      "קידום מנגנונים למניעת תקריות בים הבלטי ובים השחור"
     ],
     "inferred": [
      "שימור היתרון בשטח באמצעות לחץ מתמשך במחוז חרקוב ופגיעה בתשתיות ייצוא אוקראיניות",
      "הפעלת לחץ מדיני להסרת סנקציות ולצמצום אספקת הנשק לקייב"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות באמצעות כטב\"מים וטילים נגד ערים ותשתיות אוקראיניות",
      "ניסיון למנף ערוצים דיפלומטיים בינלאומיים לצורך השגת ויתורים ביטחוניים מנאט\"ו"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c9n70gd320mpo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/commentisfree/2026/nov/18/the-guardian-view-on-the-trump-xi-and-putin-meeting-it-may-be-a-first-but-its-not-progress",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/what-china-hopes-to-gain-from-the-trump-putin-summit/",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/19/u-s-warns-russia-it-should-make-peace-with-ukraine-now-while-trump-still-has-room-to-negotiate-the-kyiv-independent-reports",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/18/8063521/",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/emergencies/2220833",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133851",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49706",
     "accessed_at": "2026-11-19T03:40:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-18T07:55:12+00:00",
  "changes": {
   "UKRAINE-11190340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפה אוקראינית משולבת גרמה להרס מקטע כביש בגשר קרים",
    "score": 0.65
   },
   "UKRAINE-11190340-02": {
    "kind": "new"
   },
   "UKRAINE-11190340-03": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "מתקפת כטב\"מים אוקראינית על בתי זיקוק בקרסנודאר",
    "score": 0.65
   },
   "UKRAINE-11190340-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעות וקורבנות בתקיפות רוסיות במחוז חרקוב",
    "score": 1.0
   },
   "UKRAINE-11190340-05": {
    "kind": "new"
   },
   "UKRAINE-11190340-06": {
    "kind": "new"
   },
   "UKRAINE-11190340-07": {
    "kind": "new"
   },
   "UKRAINE-11190340-08": {
    "kind": "same",
    "from": "assessment",
    "to": "initial",
    "prev": "האשמות אוקראיניות בדבר שימוש רוסי בגז מדמיע בשדה הקרב",
    "score": 0.65
   },
   "UKRAINE-11190340-09": {
    "kind": "new"
   },
   "UKRAINE-11190340-10": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הגעת פוטין לסין לקראת פסגה משולשת",
    "score": 1.0
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
