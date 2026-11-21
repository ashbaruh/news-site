/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-21T0042__yemen-202611210042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-21T00:42:47+00:00",
   "window": {
    "from": "2026-11-20T00:42:47+00:00",
    "to": "2026-11-21T00:42:47+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611210042"
   },
   "summary": "הלחימה בזירת תימן וסעודיה מסלימה באופן ניכר, כאשר הקואליציה בראשות סעודיה פוצחה במבצע מיוחד נגד נמלים ויעדים בתימן (ובהם חודידה), בעוד המיליציה החות'ית מגיבה בשיגור טילים לעבר ריאד ותקיפת תשתיות אנרגיה ונמלים בשטח סעודיה. במקביל, כוחות ממשלת תימן מתכוננים לעימות אפשרי בעדן בעקבות התקדמות החות'ים.",
   "fronts": [
    {
     "name": "חזית תימן-סעודיה",
     "status": "פעילה והסלימה לאחרונה עם תקיפות אוויריות ושיגורי טילים הדדיים"
    },
    {
     "name": "חזית פנים תימן (עדן וחודידה)",
     "status": "מתיחות וקרבות מנוהלים סביב נמל חודידה והיערכות בעדן"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11210042-01",
     "title": "יירוט טילים בליסטיים מעל ריאד",
     "summary": "הקואליציה בהובלת סעודיה הודיעה שיירטה והשמידה שלושה טילים בליסטיים ששוגרו לעבר הבירה",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T00:00:06+00:00",
     "last_update_at": "2026-11-21T00:08:19+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6d71a9e89d32e07d",
       "url": "https://www.sabanew.net/viewstory/156156",
       "published_at": "2026-11-21T00:08:19+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_3ef05b0389e725fd",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/three-houthi-ballistic-missiles-intercepted-over-riyadh-saudi-led",
       "published_at": "2026-11-21T00:00:08+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_6d71a9e89d32e07d",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/21/iran-war-live-saudi-led-coalition-repels-houthi-missiles?traffic_source=rss",
       "published_at": "2026-11-21T00:00:06+00:00"
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
     "id": "YEMEN-11210042-02",
     "title": "תקיפות מבצע מיוחד של הקואליציה בתימן",
     "summary": "הקואליציה בהובלת סעודיה פתחה במבצע מיוחד ותקפה את נמל חודידה ויעדים במחוזות סעדה, צנעא ותעז",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T16:57:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T16:57:08+00:00",
     "last_update_at": "2026-11-20T19:30:24+00:00",
     "what_is_not_verified": "מספר ההרוגים שמדווחים החות'ים אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-coalition-launches-special-operation-yemens-houthis-vow-reprisals",
       "published_at": "2026-11-20T19:30:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-retaliate-coalition-strikes-attack-saudi-power-station-and-port",
       "published_at": "2026-11-20T17:44:37+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-coalition-launches-operation-houthis-vow-reprisals",
       "published_at": "2026-11-20T17:07:42+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-41-killed-saudi-led-coalition-launches-special-operation",
       "published_at": "2026-11-20T16:57:08+00:00"
      }
     ],
     "places": [
      {
       "name": "חודידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11210042-03",
     "title": "תקיפות תגובה חות'יות על מתקני אנרגיה ונמלים בסעודיה",
     "summary": "החות'ים תקפו תחנת כוח באל-שוקייק ואת נמל ג'יזאן בתגובה לתקיפות הקואליציה",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T17:44:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T17:44:37+00:00",
     "last_update_at": "2026-11-20T17:44:37+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-retaliate-coalition-strikes-attack-saudi-power-station-and-port",
       "published_at": "2026-11-20T17:44:37+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'יזאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      },
      {
       "name": "אל-שוקייק, סעודיה",
       "lat": 17.7218,
       "lon": 42.026
      }
     ]
    },
    {
     "id": "YEMEN-11210042-04",
     "title": "פגיעה בגורד שחקים בריאד",
     "summary": "מתקפה פגעה במגדל ברובע הפיננסי בריאד",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T22:44:02+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T22:44:02+00:00",
     "last_update_at": "2026-11-20T00:42:47+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-escalate-war-missile-hits-riyadhs-tallest-building",
       "published_at": "2026-11-19T22:44:02+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "נתוני הנפגעים וההרוגים בתימן עקב תקיפות הקואליציה (41 הרוגים) לאומתו באופן עצמאי.",
    "הסיבה המדויקת לפיצוץ שנשמע בריאד לפני הודעות היירוט.",
    "יכולתה של סעודיה לאבטח מתקנים גרעיניים עתידיים לאור התקיפות החות'יות."
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים בתימן",
     "declared": [
      "להגיב על תקיפות הקואליציה בפגיעה בנמלים, תחנות כוח ומתקנים בסעודיה",
      "לפגוע במרחב האווירי והתשתיות של סעודיה"
     ],
     "inferred": [
      "לשבש את הכלכלה הסעודית ואת היציבות הביטחונית בממלכה",
      "להפעיל לחץ נגד הסכמים אסטרטגיים של סעודיה"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר יעדים בתוך סעודיה",
      "החרפת האיומים על נמלי הים האדום"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה",
     "declared": [
      "להשמיד יכולות צבאיות ואמצעי לחימה של החות'ים בנמל חודידה ובמחוזות נוספים",
      "ליירט ולסכל איומים אוויריים המכוונים לעבר שטח סעודיה"
     ],
     "inferred": [
      "לבלום את ההתעצמות וההתקפות החות'יות נהדף לפגוע בנתיבי הברחת האמצעים",
      "להגן על תשתיות הליבה והכלכלה של סעודיה"
     ],
     "forecast": [
      "המשך מבצעים צבאיים נגד תשתיות חות'יות בתימן",
      "הדגשת האבטחה סביב מתקנים אסטרטגיים בממלכה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/21/iran-war-live-saudi-led-coalition-repels-houthi-missiles?traffic_source=rss",
     "accessed_at": "2026-11-21T00:42:47+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-coalition-launches-special-operation-yemens-houthis-vow-reprisals",
     "accessed_at": "2026-11-21T00:42:47+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-retaliate-coalition-strikes-attack-saudi-power-station-and-port",
     "accessed_at": "2026-11-21T00:42:47+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthis-escalate-war-missile-hits-riyadhs-tallest-building",
     "accessed_at": "2026-11-21T00:42:47+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156156",
     "accessed_at": "2026-11-21T00:42:47+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-20T08:09:08+00:00",
  "changes": {
   "YEMEN-11210042-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "יירוט כטב\"מים וטילים חות'יים על ידי הקואליציה בהובלת סעודיה",
    "score": 0.817
   },
   "YEMEN-11210042-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הסלמת הקרבות בתוך תימן ותקיפות אוויריות בצנעא",
    "score": 0.817
   },
   "YEMEN-11210042-03": {
    "kind": "new"
   },
   "YEMEN-11210042-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעה במגדל קרן ההשקעות הציבורית בריאד בתקיפה חות'ית",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-21T0040__iran-202611210040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-21T00:40:58+00:00",
   "window": {
    "from": "2026-11-20T00:40:58+00:00",
    "to": "2026-11-21T00:40:58+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611210040"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתאפיין בהמשך הלחימה והמצור הימי סביב מצר הורמוז, לצד היערכות אפשרית לחידוש תקיפות צבאיות אוויריות. במקביל נשמרים מגעים דיפלומטיים עקיפים להפסקת הלחימה, כאשר טהראן מציבה דרישות לסיום הסגר ומניעת הוצאת האורניום, בעוד וושינגטון מחריפה את הלחץ הכלכלי באמצעות סנקציות. שלוחותיה של איראן, בדגש על החות'ים בתימן, ממשיכות לתקוף מטרות אסטרטגיות במפרץ, ובפרט בשטח סעודיה.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "סגור לשיט, מתקפות על מכליות ואכיפת מצור ימי"
    },
    {
     "name": "הזירה האווירית והגרעינית מול איראן",
     "status": "דריכות צבאית, דיונים על חידוש תקיפות וחשש מפיתוח נשק בלתי קונבנציונלי"
    },
    {
     "name": "החזית הסעודית מול החות'ים",
     "status": "מתקפות טילים וכטב\"מים מתמשכות ויירוטים מעל ריאד"
    },
    {
     "name": "החזית הכלכלית",
     "status": "מבצע בידוד כלכלי, סנקציות על רשתות הברחת נפט וסגירת גבולות יבשתיים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11210040-01",
     "title": "סנקציות אמריקאיות על רשת נאמני נפט של איראן",
     "summary": "משרד האוצר של ארצות הברית הטיל עיצומים על ארבעה איראנים, בהם איש מודיעין לשעבר במשמרות המהפכה, בטענה שסייעו לעקוף סנקציות ומצור ימי באמצעות גביית כספי מכירת נפט עבור המשטר.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T21:39:12+00:00",
     "last_update_at": "2026-11-21T00:10:21+00:00",
     "what_is_not_verified": "מידת הרווח האישי של הנאמנים מהכספים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611208412",
       "published_at": "2026-11-21T00:10:21+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-sanctions-iranian-oil-trustees-it-accuses-evading-sanctions",
       "published_at": "2026-11-20T21:39:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11210040-02",
     "title": "עמדות סותרות בין טראמפ לוואנס בנוגע למלחמה והתקיפות באיראן",
     "summary": "במסיבת עיתונאים בבית הלבן נמנע סגן הנשיא ג'יי די ואנס מלאשר כי היה מורה על תקיפות נגד מתקני הגרעין באיראן כפי שטראמפ דרש, בעוד טראמפ הדגיש כי לא יאפשר לאיראן להשיג נשק גרעיני וטען שתנאי טהראן להסכם אינם מקובלים עליו.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T18:48:55+00:00",
     "last_update_at": "2026-11-20T22:22:40+00:00",
     "what_is_not_verified": "האם התקיים עימות אישי מאחורי הקלעים או שזהו תיאום עמדות בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/vance-refuses-endorse-iran-strikes-despite-pressure-trump",
       "published_at": "2026-11-20T22:22:40+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-vice-president-vance-declines-say-he-would-have-ordered-iran-strikes",
       "published_at": "2026-11-20T20:46:52+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133972",
       "published_at": "2026-11-20T18:48:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11210040-03",
     "title": "הצהרות שר החוץ האיראני על המשך מגעים דיפלומטיים ותנאי מצר הורמוז",
     "summary": "שר החוץ של איראן, עבאס עראקצ'י, הצהיר כי המגעים מול ארצות הברית דרך מתווכים נמשכים, אך הציב קווים אדומים ובראשם אי-הוצאת אורניום מועשר מהמדינה והשארת מצר הורמוז סגור עד מילוי תנאיה של טהראן.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T22:00:41+00:00",
     "last_update_at": "2026-11-20T23:46:29+00:00",
     "what_is_not_verified": "זהות המתווכים המדויקת ומהות שבעת התנאים שהציגה טהראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/araqchi-says-iran-wants-diplomacy-end-war-trump-says-terms-unacceptable",
       "published_at": "2026-11-20T23:46:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-wants-trump-state-explicitly-he-wants-deal-araghchi-says",
       "published_at": "2026-11-20T22:09:33+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1390611",
       "published_at": "2026-11-20T22:00:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11210040-04",
     "title": "השמדת תחמושת באי קשם באיראן",
     "summary": "סוכנות הידיעות תסנים דיווחה כי עשן ופיצוץ שנצפו באי קשם נבעו מפעולת השמדה של תחמושת שלא התפוצצה, לאחר שמוקדם יותר דווח על מתקפת טילים באזור.",
     "axis": "ישראל-ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T17:46:30+00:00",
     "last_update_at": "2026-11-20T17:46:30+00:00",
     "what_is_not_verified": "האם מדובר בתקיפה צבאית או בהשמדת נפל מקומית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/explosion-irans-qeshm-island-linked-disposal-unexploded-munitions-tasnim-reports",
       "published_at": "2026-11-20T17:46:30+00:00"
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
     "id": "IRAN-11210040-05",
     "title": "דיווחים על שקילת חידוש התקיפות נגד איראן והיערכות ישראלית-אמריקאית",
     "summary": "בארה\"ב ובישראל נבחנת האפשרות לחדש את המתקפות הצבאיות עקב הערכות כי איראן משקמת את מערך הטילים ומעבירה תשתיות גרעין וצבא למתקנים תת-קרקעיים.",
     "axis": "ישראל-ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T12:53:51+00:00",
     "last_update_at": "2026-11-20T22:20:39+00:00",
     "what_is_not_verified": "המועד המדויק או ההחלטה הסופית על פתיחת מתקפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/h1w7ygrrfl",
       "published_at": "2026-11-20T22:20:39+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/byhnq6aagl",
       "published_at": "2026-11-20T12:57:22+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95084",
       "published_at": "2026-11-20T12:53:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11210040-06",
     "title": "החרפת המשבר הסביבתי והכלכלי במצר הורמוז עקב הלחימה הימית",
     "summary": "מתקפות על מכליות דלק, מוקשים ימיים והמצור הימי הובילו לדליפות נפט נרחבות במצר הורמוז ולשיבוש מוחלט של תנועת הנפט והמסחר הימי באזור.",
     "axis": "המפרץ-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T12:00:38+00:00",
     "last_update_at": "2026-11-20T12:00:38+00:00",
     "what_is_not_verified": "היקף הדליפה המדויק ורמת הפגיעה בכלל המכליות במרחב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_20d7efb1733fd583",
       "url": "https://www.theguardian.com/world/video/2026/nov/20/how-the-war-in-iran-turned-the-gulf-into-a-climate-catastrophe-video-explainer",
       "published_at": "2026-11-20T12:00:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11210040-07",
     "title": "יירוט טילי חות'ים מעל ריאד בידי הקואליציה הסעודית",
     "summary": "הקואליציה בהובלת סעודיה הודיעה על יירוט שלושה טילים ששוגרו לעבר ריאד, במקביל לאזעקות חירום שהופעלו בעיר.",
     "axis": "החות'ים-המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T00:00:06+00:00",
     "last_update_at": "2026-11-21T00:00:06+00:00",
     "what_is_not_verified": "מידת הנזק או נפילת שברי יירוט בריאד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/21/iran-war-live-saudi-led-coalition-repels-houthi-missiles?traffic_source=rss",
       "published_at": "2026-11-21T00:00:06+00:00"
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
     "id": "IRAN-11210040-08",
     "title": "דיווח על יציאת מכלית נפט איראנית מהאי חארג לסין",
     "summary": "מכלית ענק של הצי האיראני עמוסה במיליוני חביות נפט יצאה מהאי חארג לעבר סין, למרות המצור והסנקציות הכלכליות שהטילה ארה\"ב.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T20:42:33+00:00",
     "last_update_at": "2026-11-20T20:42:33+00:00",
     "what_is_not_verified": "אימות רשמי על הגעת המכלית ליעדה או תפיסתה בדרך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49779",
       "published_at": "2026-11-20T20:42:33+00:00"
      }
     ],
     "places": [
      {
       "name": "האי חארג, איראן",
       "lat": 29.2406,
       "lon": 50.3117
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה שאיראן מרכיבה פצצה מלוכלכת לצורך פגיעה בארצות הברית הוגדרה כשמועה בלבד",
    "ההערכות לפיהן תקיפה ישראלית-אמריקאית תתבצע בטווח הזמן המיידי לא אומתו רשמית",
    "דיווחים על פניית חיזבאללה לקבלת פטור מהלחימה מול ישראל לא אומתו על ידי גורם רשמי",
    "נסיבות הפיצוץ באי קשם נותרו סותרות בין השמדת תחמושת למתקפת טילים",
    "הדיווח לפיו מכלית הענק מהאי חארג תצליח להגיע לסין חרף המצור אינו מאומת"
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני על ידי איראן",
      "חנק כלכלי של משטר טהראן באמצעות מצור ימי וסנקציות",
      "שליטה מלאה במצר הורמוז"
     ],
     "inferred": [
      "הימנעות מהסתבכות במלחמה קרקעית ממושכת לקראת מערכות בחירות עתידיות",
      "כפיית תנאי כניעה כלכליים ומדיניים ללא צורך במערכה צבאית כוללת"
     ],
     "forecast": [
      "החרפת האכיפה הכלכלית סביב גבולות איראן לצד הימנעות מהכרעה צבאית מהירה"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הגעה להסכם שיבטיח מניעת מלחמות נוספות",
      "אי-הוצאת אורניום מועשר מחוץ לשטח המדינה",
      "השארת מצר הורמוז סגור עד להיענות לשבעת תנאיה"
     ],
     "inferred": [
      "שיקום מהיר של מערכי הטילים והעברת יכולות גרעין לאתרים מבוצרים מתחת לקרקע",
      "שימוש בשליטה בנתיבי השיט כקלף מיקוח מול הלחץ הכלכלי"
     ],
     "forecast": [
      "המשך מינוף הסגירה של מצר הורמוז במקביל למגעים דיפלומטיים עקיפים מול המתווכים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על כוננות ומוכנות להגנה מפני מתקפת פתע איראנית"
     ],
     "inferred": [
      "שאיפה לחידוש התקיפות על מנת לסכל את שיקום מערך הטילים ותוכנית הגרעין האיראנית",
      "הרחבת יכולות היירוט מתוך צורך להתמודד עם שחיקת חימושים ומערכה ממושכת"
     ],
     "forecast": [
      "המשך לחץ צבאי ומדיני על הממשל האמריקאי להסכמה על תקיפות מנע"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/21/iran-war-live-saudi-led-coalition-repels-houthi-missiles?traffic_source=rss",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/explosion-irans-qeshm-island-linked-disposal-unexploded-munitions-tasnim-reports",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/video/2026/nov/20/how-the-war-in-iran-turned-the-gulf-into-a-climate-catastrophe-video-explainer",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611208412",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1390611",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-wants-trump-state-explicitly-he-wants-deal-araghchi-says",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133972",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49779",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95084",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/byhnq6aagl",
     "accessed_at": "2026-11-21T00:40:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-20T07:41:40+00:00",
  "changes": {
   "IRAN-11210040-01": {
    "kind": "new"
   },
   "IRAN-11210040-02": {
    "kind": "new"
   },
   "IRAN-11210040-03": {
    "kind": "new"
   },
   "IRAN-11210040-04": {
    "kind": "new"
   },
   "IRAN-11210040-05": {
    "kind": "possible",
    "prev": "הערכת עלות הלחימה האמריקאית מול איראן",
    "score": 0.467
   },
   "IRAN-11210040-06": {
    "kind": "possible",
    "prev": "פגיעות מוקשים במכליות נפט במצר הורמוז",
    "score": 0.467
   },
   "IRAN-11210040-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "שיגור טילים של החות'ים לעבר מרכז ריאד",
    "score": 0.817
   },
   "IRAN-11210040-08": {
    "kind": "possible",
    "prev": "היערכות איראנית לשבירת המצור הימי באמצעות מיכליות",
    "score": 0.633
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-20T0753__ukraine-202611200753.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-20T07:53:39+00:00",
   "window": {
    "from": "2026-11-19T07:53:39+00:00",
    "to": "2026-11-20T07:53:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611200753"
   },
   "summary": "המערכה מתאפיינת בהסלמה אווירית משמעותית מצד רוסיה נגד יעדי תשתית, גשרים בבירה קייב ורשתות אנרגיה במערב ובמרכז אוקראינה, במקביל לתקיפות עומק של כטב\"מים אוקראיניים נגד מפעלים כימיים ברוסיה. הלחימה הקרקעית נמשכת באינטנסיביות רבה בקווי המגע, בעיקר בגזרת פוקרובסק, בעוד הצדדים מציגים עמדות קשיחות ביחס להפסקות אש ומשא ומתן מדיני. הזירה הבינלאומית מלווה במתחים ביטחוניים סביב המרחב האווירי של מדינות שכנות ודיונים סביב סוגיות סחר וסנקציות אנרגיה.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "לחימה בעצימות גבוהה ביותר עם מאות היתקלויות קרביות ביממה"
    },
    {
     "name": "מרחב קייב והדנייפרו",
     "status": "מתקפות טילים וכטב\"מים כבדות נגד גשרים ותשתיות מים וחשמל"
    },
    {
     "name": "מערב אוקראינה (לבוב)",
     "status": "פגיעות טילים וכטב\"מים בתחנות רכבת, מתקני אנרגיה והפסקות חשמל"
    },
    {
     "name": "העורף הרוסי (סמולנסק)",
     "status": "תקיפות כטב\"מים אוקראיניות נגד מתקני תעשייה ביטחונית וכימית"
    },
    {
     "name": "מרחב חצי האי קרים",
     "status": "מתיחות שיא עקב תקיפות חוזרות ונזק כבד לגשר קרץ'"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11200753-01",
     "title": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב ופגיעה בגשרים",
     "summary": "רוסיה שיגרה מתקפת טילים בליסטיים וכטב\"מים על קייב שפגעה במתקני תשתית ובגשרים שעל נהר הדנייפרו, בהם גשר פודילסקו-ווסקרסנסקי שבו הופסקה התנועה, וכן גשרי דרניצקי ופיבדני.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T23:29:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-19T23:29:29+00:00",
     "last_update_at": "2026-11-20T07:02:22+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק ומספר הגשרים שהותקפו (דיווחים שונים מציינים 3 או 4 גשרים, ובין 3 ל-5 הרוגים)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/20/russian-missile-and-drone-attack-on-kyiv-kills-three-and-damages-three-dnipro-bridges-mayor-says",
       "published_at": "2026-11-20T07:02:22+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186645-three-killed-15-injured-in-russian-attack-on-kyiv.html",
       "published_at": "2026-11-20T06:00:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186643-kyivs-podilskyi-and-darnytskyi-bridges-damaged-in-russian-ballistic-attack-mayor.html",
       "published_at": "2026-11-20T05:39:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49762",
       "published_at": "2026-11-20T01:58:07+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49761",
       "published_at": "2026-11-20T01:35:01+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49760",
       "published_at": "2026-11-20T00:19:28+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-launches-mass-missile-attack-against-ukraine-after-putin-vows-revenge/",
       "published_at": "2026-11-19T23:41:36+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49758",
       "published_at": "2026-11-19T23:29:29+00:00"
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
     "id": "UKRAINE-11200753-02",
     "title": "תקיפות רוסיות במחוז לבוב ופגיעה בתחנת רכבת ובתשתיות אנרגיה",
     "summary": "שני בני אדם נהרגו ונפצעו נוספים בעקבות תקיפה רוסית בתחנת הרכבת סקניליב, וכן נגרם נזק למתקן אנרגיה במחוז לבוב שהוביל להפסקות חשמל.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T06:12:00+00:00",
     "last_update_at": "2026-11-20T07:07:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק מעבר לדיווחים הראשוניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063746/",
       "published_at": "2026-11-20T07:07:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063738/",
       "published_at": "2026-11-20T06:12:00+00:00"
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
     "id": "UKRAINE-11200753-03",
     "title": "תקיפת כטב\"מים אוקראינית על מפעל דשנים וחומרי נפץ ברוסיה",
     "summary": "כטב\"מים אוקראיניים תקפו מפעל כימי בעיר דורוגובוז' במחוז סמולנסק ברוסיה, המייצר דשנים ומרכיבים לחומרי נפץ, וגרמו להתלקחות שרפה.",
     "axis": "העורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T02:59:39+00:00",
     "last_update_at": "2026-11-20T06:56:24+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למתקני המפעל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/20/ukrainian-drones-hit-russian-fertilizer-plant-that-also-makes-components-for-explosives",
       "published_at": "2026-11-20T06:56:24+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drones-reportedly-strike-russian-chemical-plant/",
       "published_at": "2026-11-20T02:59:39+00:00"
      }
     ],
     "places": [
      {
       "name": "דורוגובוז', רוסיה",
       "lat": 54.9148,
       "lon": 33.2989
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-04",
     "title": "פגיעות רוסיות במחוז דניפרופטרובסק",
     "summary": "תקיפות ליליות של צבא רוסיה גרמו לפציעת חמישה בני אדם, לשרפות במבני מגורים בעיר ז'ובטי וודי, ולפגיעות במתקני תשתית ובתחנת דלק בקריבי ריה.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T06:39:00+00:00",
     "last_update_at": "2026-11-20T06:39:00+00:00",
     "what_is_not_verified": "לא מאומת האם ישנם נפגעים נוספים תחת ההריסות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063741/",
       "published_at": "2026-11-20T06:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קריבי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "ז'ובטי וודי, אוקראינה",
       "lat": 48.3465,
       "lon": 33.5028
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-05",
     "title": "פגיעת כטב\"ם רוסי בבית חולים בחרקוב",
     "summary": "כטב\"ם רוסי פגע במתקן רפואי בעיר חרקוב וגרם לפציעתם של ארבעה בני אדם.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T04:25:00+00:00",
     "last_update_at": "2026-11-20T04:25:00+00:00",
     "what_is_not_verified": "מצב הפצועים ומידת הנזק למבנה בית החולים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186633-russian-drone-hits-hospital-in-kharkiv-four-people-injured.html",
       "published_at": "2026-11-20T04:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-06",
     "title": "חשד להפרת המרחב האווירי של פולין במהלך מתקפה על אוקראינה",
     "summary": "צבא פולין פתח בחקירה בעקבות חשד לעצמים בלתי מזוהים שחדרו למרחב האווירי הפולני בזמן מתקפה רוסית נרחבת על אוקראינה, והופעלו התרעות במחוזות הגבול.",
     "axis": "המרחב האווירי האזורי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T06:39:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T06:39:00+00:00",
     "last_update_at": "2026-11-20T06:39:00+00:00",
     "what_is_not_verified": "האם אכן הייתה חדירה בפועל של עצמים לשטח פולין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063740/",
       "published_at": "2026-11-20T06:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ז'שוב, פולין",
       "lat": 50.0375,
       "lon": 22.0047
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-07",
     "title": "קרבות עזים בקווי החזית בדגש על גזרת פוקרובסק",
     "summary": "נרשמו 278 היתקלויות קרביות לאורך קו החזית ביממה אחת, כאשר העימותים הרבים ביותר התרחשו בגזרת פוקרובסק.",
     "axis": "חזית המזרח",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T07:33:00+00:00",
     "last_update_at": "2026-11-20T07:33:00+00:00",
     "what_is_not_verified": "שינויים טריטוריאליים ספציפיים בעקבות העימותים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4186670-war-update-278-clashes-on-front-line-over-past-day-pokrovsk-sector-hottest.html",
       "published_at": "2026-11-20T07:33:00+00:00"
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
     "id": "UKRAINE-11200753-08",
     "title": "הצעת חוק רוסית לפטור מחובות למתגייסים למלחמה",
     "summary": "ממשלת רוסיה הגישה לדומה הצעת חוק המאפשרת לאזרחים בהליכי פשיטת רגל להתגייס לצבא ולשמור על נכסים בשווי של עד 10 מיליון רובל על חשבון הנושים.",
     "axis": "מדיניות הפנים והגיוס ברוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T07:35:43+00:00",
     "last_update_at": "2026-11-20T07:35:43+00:00",
     "what_is_not_verified": "מועד אישור החוק הסופי וכניסתו לתוקף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/cards/russia-wants-people-in-bankruptcy-to-sign-up-to-fight-in-ukraine-under-a-new-bill-recruits-could-keep-their-property-and-creditors-would-take-the-loss",
       "published_at": "2026-11-20T07:35:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11200753-09",
     "title": "אזהרת פוטין לתגובה על תקיפת גשר קרים וסירוב למו\"מ",
     "summary": "נשיא רוסיה הצהיר כי ארצו תגיב באופן מכאיב על תקיפת מעבר הרכב ומסילת הרכבת בגשר קרים, והודיע על סירוב למשא ומתן עם קייב.",
     "axis": "משא ומתן ומדיניות ביטחון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T19:07:36+00:00",
     "last_update_at": "2026-11-19T20:19:11+00:00",
     "what_is_not_verified": "אופי ומועד התגובה הצבאית המדויקת עליה איים פוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21894437",
       "published_at": "2026-11-19T20:19:11+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/19/putin-vows-painful-response-to-ukraine-bombing-of-kerch-bridge",
       "published_at": "2026-11-19T19:07:36+00:00"
      }
     ],
     "places": [
      {
       "name": "קרץ', קרים",
       "lat": 45.3563,
       "lon": 36.4671
      }
     ]
    },
    {
     "id": "UKRAINE-11200753-10",
     "title": "הגעת מכליות סולר רוסי לברזיל במקום לארה\"ב",
     "summary": "ארבע מכליות שהובילו סולר רוסי במסגרת הבנות בין ארצות הברית לרוסיה הגיעו לברזיל מבלי לעגון בנמלים אמריקאיים.",
     "axis": "סנקציות ואנרגיה בינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T07:36:57+00:00",
     "last_update_at": "2026-11-20T07:36:57+00:00",
     "what_is_not_verified": "הסיבה המדויקת לשינוי יעד המכליות לברזיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_the_maritime_executive",
       "url": "https://meduza.io/en/news/2026/11/20/russian-diesel-tankers-sent-to-the-u-s-under-trump-putin-deal-arrive-in-brazil",
       "published_at": "2026-11-20T07:36:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11200753-11",
     "title": "קריאת מנהיגי אירופה להפסקת אש אנרגטית בחורף",
     "summary": "מנהיגי גרמניה, צרפת, בריטניה ואוקראינה קראו לרוסיה להסכים להפסקת אש בחורף על תשתיות אנרגיה ולאפשר ייצוא מזון בטוח בים השחור.",
     "axis": "יוזמות מדיניות והפסקת אש",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T21:05:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T21:05:00+00:00",
     "last_update_at": "2026-11-19T21:05:00+00:00",
     "what_is_not_verified": "עמדת רוסיה בפועל ביחס להצעה הספציפית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/coalition-of-the-willing-calls-on-russia-to-accept-winter-energy-truce/",
       "published_at": "2026-11-19T21:05:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ברלין, גרמניה",
       "lat": 52.5174,
       "lon": 13.3951
      }
     ]
    }
   ],
   "not_verified": [
    "טענת קושנר כי רוסיה חשה בנוח עם ערבויות הגנה דמויות נאט\"ו לאוקראינה",
    "מספר הנפגעים המדויק ומספר הגשרים שנפגעו בקייב (דיווחים על 3 או 4 גשרים, ובין 3 ל-5 הרוגים)",
    "דיווחים על חדירת עצמים בלתי מזוהים למרחב האווירי של פולין",
    "הערכות לגבי כמות אבדות כוח האדם הכוללת של צבא רוסיה"
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
     "value": 1.0992,
     "unit": "USD",
     "change_pct": 0.22,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "תגובה מכאיבה ופגיעה קשה בעקבות הפגיעה בגשר קרים",
      "סירוב לקיים משא ומתן עם הנהגת אוקראינה לאחר הפגיעה בגשר",
      "דרישה מסבא\"א לציין בבירור את האחראי לתקיפות על תחנת הכוח הגרעינית בזפוריז'יה"
     ],
     "inferred": [
      "פגיעה ברציפות התחבורתית והתשתיתית של אוקראינה על ידי הרס גשרים מרכזיים",
      "הגברת הלחץ על האוכלוסייה באמצעות פגיעה במערכות חשמל ומים לקראת החורף",
      "שימוש בתמריצים כלכליים לגיוס חיילים חדשים להתמודדות עם מצוקת כוח אדם"
     ],
     "forecast": [
      "המשך מיקוד התקיפות האוויריות בגשרי נהר הדנייפרו ובתשתיות אנרגיה",
      "החרפת התגובות הצבאיות בתגובה לכל פגיעה נוספת בנכסים אסטרטגיים בחצי האי קרים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "דרישה ממעצמות העולם לעצור כל מסחר עם רוסיה כדי לסיים את המלחמה",
      "קריאה יחד עם בעלות ברית אירופיות להפסקת אש אנרגטית בחורף ולנתיבי מזון בטוחים בים השחור"
     ],
     "inferred": [
      "פגיעה בשרשראות האספקה של צבא רוסיה באמצעות תקיפת תעשיית חומרי הנפץ והדשנים",
      "שיבוש צירי תנועה רוסיים מרכזיים בחצי האי קרים לערעור העורף הלוגיסטי",
      "הגנה מרבית על תשתיות חיוניות בבירה ובמערב המדינה מול תקיפות בליסטיות"
     ],
     "forecast": [
      "המשך ניסיונות תקיפה בעומק שטח רוסיה נגד מפעלי תעשייה ביטחונית ואנרגיה",
      "מאמץ מוגבר לייצב את אספקת החשמל והתנועה בערים הגדולות תחת גלי תקיפה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/19/putin-vows-painful-response-to-ukraine-bombing-of-kerch-bridge",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21894437",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/coalition-of-the-willing-calls-on-russia-to-accept-winter-energy-truce/",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/20/russian-diesel-tankers-sent-to-the-u-s-under-trump-putin-deal-arrive-in-brazil",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/20/8063740/",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49758",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4186670-war-update-278-clashes-on-front-line-over-past-day-pokrovsk-sector-hottest.html",
     "accessed_at": "2026-11-20T07:53:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T19:09:54+00:00",
  "changes": {
   "UKRAINE-11200753-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים רוסית על קייב ופגיעה בסביבת שגרירויות זרות",
    "score": 1.0
   },
   "UKRAINE-11200753-02": {
    "kind": "new"
   },
   "UKRAINE-11200753-03": {
    "kind": "new"
   },
   "UKRAINE-11200753-04": {
    "kind": "new"
   },
   "UKRAINE-11200753-05": {
    "kind": "new"
   },
   "UKRAINE-11200753-06": {
    "kind": "possible",
    "prev": "מעצר אזרח רוסי בארצות הברית בחשד לריגול נגד חברת ביטחון המסייעת לאוקראינה",
    "score": 0.467
   },
   "UKRAINE-11200753-07": {
    "kind": "new"
   },
   "UKRAINE-11200753-08": {
    "kind": "new"
   },
   "UKRAINE-11200753-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרת פוטין על תגובה כואבת והשעיית יוזמות להפסקת אש",
    "score": 1.0
   },
   "UKRAINE-11200753-10": {
    "kind": "new"
   },
   "UKRAINE-11200753-11": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-20T0813__north-202611200813.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-20T08:13:44+00:00",
   "window": {
    "from": "2026-11-19T08:13:44+00:00",
    "to": "2026-11-20T08:13:44+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611200813"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית ישראלית עצימה הכוללת הפצצות בבקאע וסיכול העברות נשק מגבול סוריה, לצד הפגזות ותקיפות בדרום לבנון ותנועת כוחות קרקעיים לעבר קוניטרה. במקביל, הממשל הסורי החדש מרחיב את אכיפת הסדר הפנימי ומעמיד לדין בכירים לשעבר, בעוד טורקיה מחזקת את השפעתה המדינית והביטחונית בסוריה ובלבנון.",
   "fronts": [
    {
     "name": "דרום לבנון והבקאע מול ישראל",
     "status": "לחימה בעצימות מתמשכת, תקיפות אוויריות והפגזות ישראליות נגד מטרות חיזבאללה ותשתיות הברחה"
    },
    {
     "name": "גבול ישראל - סוריה (רמת הגולן וקוניטרה)",
     "status": "מתיחות ופעילות כוחות קרקעיים ישראליים מעבר לקו במרחב הכפרי"
    },
    {
     "name": "השפעת טורקיה בלבנון ובסוריה",
     "status": "התרחבות מעורבות דיפלומטית, הסכמי שיתוף פעולה צבאי ותמיכה בהרחבת ריבונות הממשל בסוריה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11200813-01",
     "title": "תקיפות אוויריות של צה\"ל בכפר תבנית בדרום לבנון",
     "summary": "מטוסי קרב ישראליים תקפו יעדים בכפר תבנית שבדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T08:02:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T08:02:56+00:00",
     "last_update_at": "2026-11-20T08:02:56+00:00",
     "what_is_not_verified": "אין אימות עצמאי לזהות המטרות או לנזק שנגרם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133938",
       "published_at": "2026-11-20T08:02:56+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      }
     ]
    },
    {
     "id": "NORTH-11200813-02",
     "title": "ירי ארטילרי ואש מקלעים ישראלית בדרום לבנון",
     "summary": "הפגזות ארטילריות כוונו למספר אזורים בדרום לבנון כולל ואדי אל-סלוקי, ואדי אל-חג'יר, ואדי זיבקין, פאתי תולין, אל-מנסורי ומיפדון, לצד ירי מקלעים לעבר אל-קנטרה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T07:40:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T07:40:32+00:00",
     "last_update_at": "2026-11-20T07:40:32+00:00",
     "what_is_not_verified": "היקף הפגיעות והנפגעים המדויק אינו ידוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/152992/",
       "published_at": "2026-11-20T07:40:32+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-11200813-03",
     "title": "תקיפת חיל האוויר הישראלי במרחב ג'נתא בבקאע",
     "summary": "חיל האוויר הישראלי תקף אתר ששימש בעבר לייצור טילים ואחסון אמל\"ח של חיזבאללה בג'נתא כדי למנוע את שיקומו לאחר הגעת מחבלים לאתר.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T15:03:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T15:03:34+00:00",
     "last_update_at": "2026-11-19T20:03:38+00:00",
     "what_is_not_verified": "אין אימות בלתי תלוי לגבי אופי המבנה שהותקף והאם הכיל אמל\"ח פעיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-hit-eastern-lebanon-target-homes-buildings-in-south/4131515",
       "published_at": "2026-11-19T20:03:38+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133922",
       "published_at": "2026-11-19T18:00:39+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25660",
       "published_at": "2026-11-19T17:59:48+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968784/israeli-army-claims-it-struck-former-hezbollah-missile-facility-in-leb/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968784",
       "published_at": "2026-11-19T15:03:34+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      },
      {
       "name": "א-נבי שית, לבנון",
       "lat": 33.8887,
       "lon": 36.1181
      }
     ]
    },
    {
     "id": "NORTH-11200813-04",
     "title": "תקיפת משלוח אמל\"ח שהועבר מסוריה ללבנון",
     "summary": "חיל האוויר הישראלי תקף משלוח של אמצעי לחימה במרחב ג'נתא בגבול סוריה-לבנון, שיועד עבור ארגון חיזבאללה.",
     "axis": "סוריה - לבנון - ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T17:30:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T17:30:18+00:00",
     "last_update_at": "2026-11-19T17:30:18+00:00",
     "what_is_not_verified": "פרטי המשלוח המדויקים ותוצאות הסיכול לא אומתו עצמאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133919",
       "published_at": "2026-11-19T17:30:18+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'נתא, לבנון",
       "lat": 33.8391,
       "lon": 36.0996
      }
     ]
    },
    {
     "id": "NORTH-11200813-05",
     "title": "התקדמות כוחות ישראליים לעיירה אל-רפיד בקוניטרה",
     "summary": "כוחות ישראליים הכוללים תשעה כלי רכב צבאיים התקדמו לעבר העיירה אל-רפיד באזור הכפרי של קוניטרה בסוריה.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T22:08:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T22:08:30+00:00",
     "last_update_at": "2026-11-19T22:08:30+00:00",
     "what_is_not_verified": "הדיווח נסמך על מקורות סוריים בלבד ללא אישור ישראלי או גורם רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/152942/",
       "published_at": "2026-11-19T22:08:30+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-רפיד, סוריה",
       "lat": 32.9559,
       "lon": 35.9009
      }
     ]
    },
    {
     "id": "NORTH-11200813-06",
     "title": "הצהרת צבא לבנון ליום העצמאות על ריבונות ונשק המדינה",
     "summary": "צבא לבנון הדגיש את מחויבותו להשבת הריבונות על כלל שטח המדינה והשארת הנשק בשליטת המדינה בלבד, לצד המשך פריסתו בדרום המדינה חרף פעולות ישראל.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T14:11:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T14:11:31+00:00",
     "last_update_at": "2026-11-19T14:11:31+00:00",
     "what_is_not_verified": "מידת היכולת של צבא לבנון לאכוף פירוק נשק של ארגונים במדינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968780/lebanese-army-on-independence-day-restoring-sovereignty-and-placing-we/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968780",
       "published_at": "2026-11-19T14:11:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ירזה, לבנון",
       "lat": 33.8309,
       "lon": 35.5551
      }
     ]
    },
    {
     "id": "NORTH-11200813-07",
     "title": "ביקור בילאל ארדואן בלבנון והידוק הקשרים עם טורקיה",
     "summary": "בילאל ארדואן ביקר בביירות ובטריפולי ונפגש עם בכירים בהנהגה הלבנונית, במקביל לאישור הסכם שיתוף פעולה צבאי בין לבנון לטורקיה בשווי מאה מיליון לירות טורקיות.",
     "axis": "טורקיה - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T19:36:30+00:00",
     "last_update_at": "2026-11-19T19:36:30+00:00",
     "what_is_not_verified": "המניעים הפוליטיים המלאים והמשמעות המבצעית של ההסכם הצבאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/analysis/how-bilal-erdogans-visit-signals-turkeys-long-game-lebanon",
       "published_at": "2026-11-19T19:36:30+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "טריפולי, לבנון",
       "lat": 34.4374,
       "lon": 35.8349
      }
     ]
    },
    {
     "id": "NORTH-11200813-08",
     "title": "מעצר גנרל לשעבר ממשטר אסד בסוריה",
     "summary": "כוחות הביטחון של השלטונות החדשים בסוריה עצרו את רואד עלי זידאן, קצין לשעבר במשטר אסד, באשמת תכנון מארב באלעוטייבה בשנת 2014 שבו נהרגו 175 חמושים אסלאמיסטים.",
     "axis": "סוריה - פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T21:41:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T21:41:17+00:00",
     "last_update_at": "2026-11-19T22:59:02+00:00",
     "what_is_not_verified": "פרטי החקירה והראיות המדויקות נגד העצור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syrian-authorities-arrest-ex-general-over-2014-massacre",
       "published_at": "2026-11-19T22:59:02+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-arrests-former-regime-officer-accused-of-orchestrating-2014-massacre-near-damascus/4131609",
       "published_at": "2026-11-19T21:41:17+00:00"
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
     "id": "NORTH-11200813-09",
     "title": "טורקיה מביעה תמיכה באיחוד סוריה ובשילוב ה-YPG",
     "summary": "שר החוץ הטורקי הקאן פידאן הצהיר כי אנקרה תומכת במאמצי הממשלה הסורית להרחבת הריבונות והשלמת שילובו של ארגון ה-YPG.",
     "axis": "טורקיה - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T09:52:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-19T09:52:00+00:00",
     "last_update_at": "2026-11-19T09:52:00+00:00",
     "what_is_not_verified": "פרטי מתווה השילוב של הלוחמים הכורדים במוסדות סוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/ankara-backs-stable-unified-syria-ypg-integration-fm-fidan/news",
       "published_at": "2026-11-19T09:52:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נכונות הדיווח ממקורות סוריים אודות כניסת תשעה כלי רכב צבאיים של צה\"ל לאל-רפיד בקוניטרה",
    "האם האתר שהותקף בג'נתא הכיל אמל\"ח פעיל בזמן התקיפה מעבר לתשתיות כניסה",
    "מידת ההתקדמות המעשית בשילוב כוחות YPG בתוך המנגנונים הסוריים בהתאם להצהרת טורקיה"
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
     "value": 3.2887,
     "unit": "ILS",
     "change_pct": 0.76,
     "source_id": "src_ecb",
     "as_of": "2026-11-19T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת שיקום יכולות חיזבאללה והסרת איומים על אזרחי ישראל וכוחותיה",
      "סיכול העברות ומשלוחי אמצעי לחימה מסוריה ללבנון"
     ],
     "inferred": [
      "ביסוס אחיזה ונוכחות בשטחי חיץ ('הקו הצהוב') בלבנון ובסוריה",
      "פגיעה מונעת ומתמשכת במערכי ייצור והתעצמות ללא תלות בהסדרה מדינית"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות בבקאע ובגבול סוריה במידה ויזוהו נסיונות שיקום והברחה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "מיקוד בהישרדות, שיקום תשתיות וארגון מחדש במימון חיצוני תוך הימנעות מהסלמה יזומה מיידית",
      "חידוש ערוצי הברחת אמל\"ח מגבול סוריה לתשתיות הייצור בבקאע"
     ],
     "forecast": [
      "המשך ניסיונות התבססות מחדש במתקנים ישנים תחת לחץ צבאי ישראלי רציף"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "תמיכה בסוריה יציבה ומאוחדת והחלת ריבונות המדינה על כלל השטח",
      "שילוב ארגון ה-YPG במסגרת המדינה הסורית"
     ],
     "inferred": [
      "תקיעת יתד והעמקת ההשפעה הצבאית והמוסדית בלבנון בעקבות השינויים במפה האזורית",
      "דחיקת שחקנים אזוריים מתחרים ויצירת תלות ביטחונית וכלכלית באנקרה"
     ],
     "forecast": [
      "המשך קידום מגעים ביטחוניים ופרויקטים אזרחיים בלבנון ובסוריה"
     ]
    },
    {
     "actor": "השלטון החדש בסוריה",
     "declared": [
      "מיצוי הדין עם בכירים לשעבר במשטר אסד המואשמים בביצוע פשעים ומעשי טבח",
      "החזרת עקורים באמצעות שיקום תשתיות, פתיחת צירים ופינוי הריסות"
     ],
     "inferred": [
      "חיזוק הלגיטימציה השלטונית הפנימית על ידי העמדה לדין של אנשי המשטר הקודם",
      "ביסוס הריבונות והסמכות המרכזית בתיאום מדיני עם טורקיה"
     ],
     "forecast": [
      "מעצרים ומשפטים נוספים של אנשי ביטחון לשעבר לצד פעולות שיקום הדרגתיות בערים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/152942/",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-arrests-former-regime-officer-accused-of-orchestrating-2014-massacre-near-damascus/4131609",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/ankara-backs-stable-unified-syria-ypg-integration-fm-fidan/news",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968780/lebanese-army-on-independence-day-restoring-sovereignty-and-placing-we/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968780",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syrian-authorities-arrest-ex-general-over-2014-massacre",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133919",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25660",
     "accessed_at": "2026-11-20T08:13:44+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-19T19:19:38+00:00",
  "changes": {
   "NORTH-11200813-01": {
    "kind": "new"
   },
   "NORTH-11200813-02": {
    "kind": "new"
   },
   "NORTH-11200813-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפת צה\"ל נגד אתר לייצור ואחסון אמצעי לחימה של חזבאללה בג'נתא",
    "score": 1.0
   },
   "NORTH-11200813-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת צה\"ל לסיכול משלוח אמצעי לחימה מסוריה ללבנון",
    "score": 1.0
   },
   "NORTH-11200813-05": {
    "kind": "new"
   },
   "NORTH-11200813-06": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הצהרת צבא לבנון על עדיפות פירוז הנשק וביסוס הריבונות",
    "score": 1.0
   },
   "NORTH-11200813-07": {
    "kind": "new"
   },
   "NORTH-11200813-08": {
    "kind": "possible",
    "prev": "מינויים כלכליים חדשים של נשיא סוריה",
    "score": 0.633
   },
   "NORTH-11200813-09": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הצהרת שר החוץ הטורקי על תמיכה באחדות סוריה ושילוב כוחות כורדיים",
    "score": 1.0
   }
  }
 }
};
