/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-20T2343__yemen-202610202343.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-20T23:43:23+00:00",
   "window": {
    "from": "2026-10-19T23:43:23+00:00",
    "to": "2026-10-20T23:43:23+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610202343"
   },
   "summary": "הלחימה בין החות'ים לבין ממשלת תימן הנתמכת בידי סעודיה התחדשה במלוא עוצמתה בעקבות קריסת הפסקת האש, ומתאפיינת בפגיעות קטלניות במחנות צבאיים במחוז שבווה ובהידוק המצור על תעז. במקביל, החות'ים מגבירים את שיגורי הטילים והכטב\"מים לעבר יעדים ותשתיות בסעודיה, דבר שגרם לשיבוש פעילות כלכלית ולהשבתת נמלי תעופה. בתגובה, שותפות בינלאומיות בראשות בריטניה מתגברות את מערכי ההגנה האווירית של סעודיה, בעוד ניסיונות תיווך אזוריים נותרו ללא מענה.",
   "fronts": [
    {
     "name": "חזית מחוז שבווה",
     "status": "הסלמה חריפה ומתקפות טילים חות'יות על מחנות אימונים של הממשלה"
    },
    {
     "name": "חזית העיר ומחוז תעז",
     "status": "מצור חות'י מתהדק, חסימת צירי אספקה, הפגזות וחילופי אש"
    },
    {
     "name": "חזית תימן-סעודיה (עורף סעודי)",
     "status": "תקיפות אינטנסיביות של טילים וכטב\"מים חות'יים מול פריסת הגנה אווירית זרה"
    },
    {
     "name": "הזירה הימית (ים סוף ומצר באב אל-מנדב)",
     "status": "שיבושי שיט ותנועת פליטים מתימן לחופי ג'יבוטי עקב הקרבות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10202343-01",
     "title": "תקיפה קטלנית של החות'ים על מחנה אימונים של כוחות הביטחון במחוז שבווה",
     "summary": "מתקפת טילים בליסטיים פגעה במחנה אל-עלאם במחוז שבווה וגרמה למותם של 73 מגויסי כוחות ביטחון ולפציעת מעל 200, כאשר נמשכים חיפושים אחר 14 נעדרים.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T06:20:12+00:00",
     "last_update_at": "2026-10-20T21:44:38+00:00",
     "what_is_not_verified": "גורלם של 14 הנעדרים וזהות מפקדי הבסיס המדויקת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/death-toll-houthi-strike-yemen-government-camp-rises-73",
       "published_at": "2026-10-20T21:44:38+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/death-toll-houthi-strike-yemen-govt-camp-rises-73",
       "published_at": "2026-10-20T15:29:38+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cv0ld6lrr2zeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-20T14:09:42+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hy00zea43fl",
       "published_at": "2026-10-20T12:04:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/diplomatic-visits-attempt-hold-all-out-us-iran-war",
       "published_at": "2026-10-20T06:20:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10202343-02",
     "title": "שיגור טיל בליסטי לעבר ריאד והשמדת פלטפורמת השיגור בידי הקואליציה",
     "summary": "הקואליציה בהובלת סעודיה הודיעה כי השמידה פלטפורמת שיגור של טיל בליסטי ששוגר על ידי החות'ים לעבר הבירה ריאד.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T17:14:17+00:00",
     "last_update_at": "2026-10-20T19:12:27+00:00",
     "what_is_not_verified": "מיקום מדויק של המשגר שהושמד ונזקי הפגיעה בריאד עצמה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_63ae07bc225142f4",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-says-it-destroyed-houthi-launcher-used-riyadh-attack",
       "published_at": "2026-10-20T19:12:27+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_63ae07bc225142f4",
       "url": "https://www.sabanew.net/viewstory/154337",
       "published_at": "2026-10-20T17:14:17+00:00"
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
     "id": "YEMEN-10202343-03",
     "title": "הידוק המצור החות'י והפגזות על העיר תעז",
     "summary": "החות'ים מכתרים את העיר תעז, חוסמים את ציר הגישה לעדן ופוגעים בשכונות מגורים, תוך גרימת עקירה המונית של תושבים ופגיעה באזרחים.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T12:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T12:00:00+00:00",
     "last_update_at": "2026-10-20T15:30:42+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בכל שכונה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/un-demands-aid-access-besieged-yemen-city-taiz",
       "published_at": "2026-10-20T15:30:42+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemen-displacement-tops-250k-houthis-tighten-siege-taiz-what-know",
       "published_at": "2026-10-20T15:14:59+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168629",
       "published_at": "2026-10-20T12:00:00+00:00"
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
     "id": "YEMEN-10202343-04",
     "title": "דיווח על תקיפות אוויריות באזור אל-משמה במחוז תעז",
     "summary": "כלי תקשורת חות'יים דיווחו על שלוש תקיפות אוויריות שכוונו לאזור אל-נשמה בנפת אל-מעאפר.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T22:31:14+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T22:31:14+00:00",
     "last_update_at": "2026-10-20T22:31:14+00:00",
     "what_is_not_verified": "זהות המטוסים התוקפים והיקף הנזק בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-media-report-more-air-strikes-taiz",
       "published_at": "2026-10-20T22:31:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10202343-05",
     "title": "הצבת מטוסי קרב בריטיים להגנה על שמי סעודיה",
     "summary": "בריטניה החליטה לפרוס מטוסי טייפון שיבצעו משימות הגנה מפני טילים וכטב\"מים חות'יים מעל ערי סעודיה ותשתיותיה, ללא השתתפות בתקיפות התקפיות.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T10:53:59+00:00",
     "last_update_at": "2026-10-20T18:55:52+00:00",
     "what_is_not_verified": "מועד פריסת המטוסים המדויק בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/20/aje-onl-nf_uk-to-deploy-fighter-jets-to-defend-saudi-arabia_1-201026?traffic_source=rss",
       "published_at": "2026-10-20T18:55:52+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/uk-news/2026/oct/20/uk-raf-typhoon-fighters-saudi-arabia-houthi-attacks",
       "published_at": "2026-10-20T18:30:16+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ckr5yqe1r1llo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-20T13:54:35+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hy00zea43fl",
       "published_at": "2026-10-20T12:04:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/uk-fly-raf-missions-defending-saudi-against-houthi-attacks",
       "published_at": "2026-10-20T10:53:59+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10202343-06",
     "title": "היעדר מענה ליוזמת התיווך האיראנית בין סעודיה לחות'ים",
     "summary": "שר החוץ האיראני עבאס עראקצ'י מסר כי לא התקבל מענה מריאד או מהחות'ים להצעתו לתווך בסכסוך ולהביא להפסקת הלחימה.",
     "axis": "מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T20:32:37+00:00",
     "last_update_at": "2026-10-20T21:46:26+00:00",
     "what_is_not_verified": "עמדותיהם הבלתי רשמיות של הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-says-saudi-arabia-houthis-have-not-answered-mediation-offer",
       "published_at": "2026-10-20T21:46:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-foreign-minister-says-no-response-saudi-arabia-and-yemens-houthis",
       "published_at": "2026-10-20T20:32:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10202343-07",
     "title": "הטלת הגבלות ביטחוניות על משרד החות'ים בבגדאד",
     "summary": "ממשלת עיראק אסרה על נציגות החות'ים בשטחה לעסוק בפעילות פוליטית ותקשורתית, הגבילה את תנועותיהם ומנעה פעילות עוינת נגד מדינות האזור.",
     "axis": "אזורי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T13:56:40+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T13:56:40+00:00",
     "last_update_at": "2026-10-20T13:56:40+00:00",
     "what_is_not_verified": "תגובת הנציגות החות'ית להנחיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/exclusive-iraq-imposes-restrictions-houthis-baghdad-office",
       "published_at": "2026-10-20T13:56:40+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "YEMEN-10202343-08",
     "title": "דחיית ועידת ההשקעות בריאד עקב תקיפות החות'ים",
     "summary": "סעודיה הודיעה על דחיית כנס ההשקעות הבינלאומי לשנת 2027 בעקבות הפגיעה בתשתיות והתגברות התקיפות של החות'ים על הממלכה.",
     "axis": "כלכלי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-19T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T08:37:32+00:00",
     "last_update_at": "2026-10-20T08:44:31+00:00",
     "what_is_not_verified": "המועד המדויק החדש שייקבע לכנס",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132234",
       "published_at": "2026-10-20T08:44:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-arabia-postpones-its-davos-desert-after-attacks",
       "published_at": "2026-10-20T08:37:32+00:00"
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
    "גורלם המדויק של 14 הנעדרים מתקיפת הטילים בשבווה",
    "מספר הנפגעים הכולל בכל תקריות הירי וההפגזות בשכונות העיר תעז",
    "המועד המדויק שבו יוצבו מטוסי הטייפון הבריטיים בסעודיה",
    "המועד החדש שייקבע לוועידת ההשקעות הסעודית FII בשנת 2027"
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
     "value": 3.1077,
     "unit": "ILS",
     "change_pct": -0.02,
     "source_id": "src_ecb",
     "as_of": "2026-10-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה בריכוזי כוחות סעודיים ומחנות הכפופים להם",
      "המשך פעולות צבאיות מול יעדים סעודיים"
     ],
     "inferred": [
      "הכרעת המערכה הקרקעית בדרום ובמרכז תימן באמצעות כיבוש תעז ושיבוש מקורות האנרגיה בשבווה",
      "הפעלת לחץ כלכלי וביטחוני כבד על ריאד כדי להרתיעה ממעורבות בתימן"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות קרקעית באזור שבווה ותעז לצד שיגורים מרוחקים של טילים לעומק סעודיה"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "יירוט והשמדה של פלטפורמות שיגור חות'יות המאיימות על ריאד",
      "תמיכה בממשלת תימן המוכרת והגנה על שלמות הממלכה"
     ],
     "inferred": [
      "בלימת ההתפשטות החות'ית בתימן ומניעת קריסת ערי הדרום",
      "הגנה על תשתיות הנפט, התעופה והמיזמים הכלכליים של חזון 2030 באמצעות תמיכה צבאית זרה"
     ],
     "forecast": [
      "הישענות גוברת על הגנה אווירית בינלאומית וחיזוק בריתות הגנה אזוריות"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "הכשרת כוחות ביטחון ומשטרה חדשים להתמודדות מול החות'ים",
      "דרישה לפתיחת מעברי הסיוע והסרת המצור מעל העיר תעז"
     ],
     "inferred": [
      "מניעת נפילת מחוזות האנרגיה במזרח ובדרום לידי החות'ים",
      "שמירה על נתיבי הגישה שנותרו לעיר הבירה הזמנית עדן"
     ],
     "forecast": [
      "המשך ספיגת אבדות בבסיסי האימונים והתגברות מצוקת האוכלוסייה והעקורים באזורי הקרבות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/10/20/aje-onl-nf_uk-to-deploy-fighter-jets-to-defend-saudi-arabia_1-201026?traffic_source=rss",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/iran-says-saudi-arabia-houthis-have-not-answered-mediation-offer",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckr5yqe1r1llo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/uk-news/2026/oct/20/uk-raf-typhoon-fighters-saudi-arabia-houthi-attacks",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-foreign-minister-says-no-response-saudi-arabia-and-yemens-houthis",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-arabia-postpones-its-davos-desert-after-attacks",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154337",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132234",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168629",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hy00zea43fl",
     "accessed_at": "2026-10-20T23:43:23+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T07:54:29+00:00",
  "changes": {
   "YEMEN-10202343-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "תקיפת טילים בליסטיים של החות'ים על מחנה אימונים במחוז שבווה",
    "score": 1.0
   },
   "YEMEN-10202343-02": {
    "kind": "new"
   },
   "YEMEN-10202343-03": {
    "kind": "new"
   },
   "YEMEN-10202343-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות אוויריות באזור בני מעאד' שבמחוז סעדה",
    "score": 0.65
   },
   "YEMEN-10202343-05": {
    "kind": "new"
   },
   "YEMEN-10202343-06": {
    "kind": "possible",
    "prev": "דחיית הצבעת הפרלמנט המצרי על סיוע צבאי לסעודיה מול החות'ים",
    "score": 0.467
   },
   "YEMEN-10202343-07": {
    "kind": "new"
   },
   "YEMEN-10202343-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצהרת החות'ים על שש תקיפות נגד יעדים בסעודיה וסגירת נמל התעופה בריאד",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-20T2340__iran-202610202340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-20T23:40:36+00:00",
   "window": {
    "from": "2026-10-19T23:40:36+00:00",
    "to": "2026-10-20T23:40:36+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610202340"
   },
   "summary": "המתיחות בין איראן לקואליציה בהובלת ארה\"ב וישראל מתעצמת תוך שחיקת ערוצי התיווך והחרפת הסיכונים בנתיבי השיט. טהראן מסרבת להתפשר על מאגרי האורניום וסביב מצר הורמוז נרשמו תקריות ביטחוניות חמורות שכללו פגיעות מוקשים במכליות נפט. במקביל, ישראל וארה\"ב מציגות פומבית יעד של הפלת המשטר ומתגברות כוחות צבאיים נרחבים באזור לקראת אפשרות של התחדשות הלחימה הישירה.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "הסלמה ימית בעקבות פיצוצי מוקשים במכליות ואיומים על חופש השיט"
    },
    {
     "name": "ציר הגרעין והמו\"מ המדיני",
     "status": "מבוי סתום בעקבות סירוב איראני להוצאת חומר מועשר והצבת תנאים לארה\"ב"
    },
    {
     "name": "החזית הצבאית הישירה (ישראל-ארה\"ב מול איראן)",
     "status": "כוננות שיא, תגבור כוחות אמריקאיים ואיומים ישירים בחידוש התקיפות"
    },
    {
     "name": "צפון עיראק וכורדיסטן",
     "status": "מתיחות ביטחונית וטענות איראניות לפעילות עוינת ורשתות רחפנים"
    }
   ],
   "events": [
    {
     "id": "IRAN-10202340-01",
     "title": "התפוצצות ופגיעת מוקש ימי במכלית נפט במצר הורמוז",
     "summary": "חיל הים של משמרות המהפכה הודיע כי מכלית על עלתה על מוקש ימי ועלתה באש מדרום למצר הורמוז, בעוד דיווח ישראלי ציין פגיעה בשתי מכליות.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T12:01:48+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T12:01:48+00:00",
     "last_update_at": "2026-10-20T20:06:21+00:00",
     "what_is_not_verified": "מספר המכליות שנפגעו בפועל והגורם שהטמין את המוקש הימי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86298772/Super-tanker-catches-fire-after-hitting-mine-in-Hormuz",
       "published_at": "2026-10-20T20:06:21+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/byfornn2gg",
       "published_at": "2026-10-20T12:01:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10202340-02",
     "title": "סיום ביקור התיווך של מפקד צבא פקיסטן בטהראן והקשחת עמדות איראן בנושא הגרעין",
     "summary": "מפקד צבא פקיסטן עזב את טהראן לאחר פגישות עם ההנהגה האיראנית, שבהן הבהירו בכירי המשטר כי לא יוותרו על האורניום המועשר ולא יקיימו שיחות עם ארה\"ב לפני מילוי תנאיהם.",
     "axis": "איראן - ארה\"ב - פקיסטן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T16:55:48+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T16:55:48+00:00",
     "last_update_at": "2026-10-20T19:30:00+00:00",
     "what_is_not_verified": "פרטי מתווה הפשרה והאם הושגו הבנות חשאיות כלשהן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610200868",
       "published_at": "2026-10-20T19:30:00+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86298747/Pakistani-Army-chief-departs-for-Islamabad",
       "published_at": "2026-10-20T19:18:40+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21672049",
       "published_at": "2026-10-20T19:06:35+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-tells-pakistan-army-chief-no-talks-washington-until-demands-are-met",
       "published_at": "2026-10-20T17:46:31+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132262",
       "published_at": "2026-10-20T16:55:48+00:00"
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
     "id": "IRAN-10202340-03",
     "title": "אזהרות פיקוד הצבא האיראני מפני תגובה קשה לכל מתקפה מחודשת",
     "summary": "הרמטכ\"ל האיראני עבדאללהי ומפקדים בכירים הזהירו במהלך ביקור במתקן ייצור כטב\"מים כי כל תקיפה מחודשת תיתקל בתגובה תקיפה בהרבה, תוך הפקת לקחים מעימותי העבר.",
     "axis": "איראן - ישראל - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T20:50:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T20:50:46+00:00",
     "last_update_at": "2026-10-20T21:06:17+00:00",
     "what_is_not_verified": "רמת המוכנות המבצעית בפועל של מערכי הכטב\"מים האיראניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-military-chief-warns-stronger-response-any-new-attack",
       "published_at": "2026-10-20T21:06:17+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86298787/Top-Iranian-general-warns-of-harsher-retaliation-if-war-resumes",
       "published_at": "2026-10-20T20:50:46+00:00"
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
     "id": "IRAN-10202340-04",
     "title": "הצהרות נתניהו וטראמפ בדבר הפלת המשטר בטהראן והאופציה הצבאית",
     "summary": "ראש הממשלה נתניהו הכריז כי הפלת שלטון האייתוללות היא יעד מרכזי ואישר כי שוחח על כך עם הנשיא טראמפ, שהזהיר מצדו כי יחליט אם לפעול בדרך נוקשה יותר.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T17:27:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T17:27:00+00:00",
     "last_update_at": "2026-10-20T21:24:00+00:00",
     "what_is_not_verified": "קיומה של תוכנית מבצעית מוסכמת ומיידית להפלת המשטר באיראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610204555",
       "published_at": "2026-10-20T21:24:00+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/netanyahu-is-fighting-for-his-political-career-expert-says-a-week-ahead-of-crucial-vote",
       "published_at": "2026-10-20T20:03:50+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/20/netanyahu-says-he-discussed-eliminating-irans-regime-with-trump?traffic_source=rss",
       "published_at": "2026-10-20T19:51:09+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610209049",
       "published_at": "2026-10-20T17:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ירושלים, ישראל",
       "lat": 31.7788,
       "lon": 35.2258
      }
     ]
    },
    {
     "id": "IRAN-10202340-05",
     "title": "מעצר חשודים בבריטניה בסיוע למודיעין האיראני בבסיס פיירפורד",
     "summary": "משטרת בריטניה עצרה מחדש שני גברים בחשד לשיתוף פעולה עם המודיעין האיראני סביב בסיס חיל האוויר המלכותי פיירפורד, ששימש מפציצים אמריקניים לתקיפות באיראן.",
     "axis": "בריטניה - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T17:46:31+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T17:46:31+00:00",
     "last_update_at": "2026-10-20T20:17:53+00:00",
     "what_is_not_verified": "האופי המדויק של הפעילות המודיעינית שבוצעה עבור איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/20/uk-police-re-arrest-two-men-on-suspicion-of-assisting-iranian-intelligence?traffic_source=rss",
       "published_at": "2026-10-20T20:17:53+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/uk-police-arrest-pair-suspicion-helping-iranian-intelligence-over-raf-fairford",
       "published_at": "2026-10-20T17:46:31+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-10202340-06",
     "title": "תגבור כוחות צבא ארה\"ב במזרח התיכון",
     "summary": "צבא ארצות הברית מקדם כוחות משמעותיים, כולל קבוצת תקיפה של נושאת מטוסים וכוחות נחתים, להרחבת חופש הפעולה הצבאי אל מול איראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T15:53:38+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T15:53:38+00:00",
     "last_update_at": "2026-10-20T19:00:25+00:00",
     "what_is_not_verified": "המועד המדויק להגעת הכוחות והחלטת הנשיא על היקף התקיפות לאחר הבחירות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21671857",
       "published_at": "2026-10-20T19:00:25+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132257",
       "published_at": "2026-10-20T15:53:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10202340-07",
     "title": "טענות איראניות על היערכות רחפנים אוקראינית בכורדיסטן העיראקית",
     "summary": "מקור ביטחוני בטהראן טען כי אוקראינה פרסה אלפי רחפנים בצפון עיראק כחלק מפעילות עוינת בחסות נאט\"ו כנגד המדינה.",
     "axis": "איראן - עיראק",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T19:21:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T19:21:32+00:00",
     "last_update_at": "2026-10-20T19:21:32+00:00",
     "what_is_not_verified": "עצם קיום רשת הרחפנים הזעירים האוקראינית בכורדיסטן העיראקית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48761",
       "published_at": "2026-10-20T19:21:32+00:00"
      }
     ],
     "places": [
      {
       "name": "סולימאניה, עיראק",
       "lat": 35.5571,
       "lon": 45.4426
      }
     ]
    }
   ],
   "not_verified": [
    "טענת איראן על פריסת אלפי רחפנים אוקראיניים בכורדיסטן העיראקית",
    "קיומו של הסכם עיראקי רשמי לגירוש ארגוני האופוזיציה הכורדיים-איראניים",
    "מספר המכליות המדויק שנפגעו ממוקשים ימיים במצר הורמוז",
    "הדיווח לפיו איראן מאיצה את השלמת מרכיב ההנשקה לפצצה",
    "דיווחים על ביטול של תקיפות משולבות של ארה\"ב וישראל בשבועות האחרונים",
    "פרטי ההצעה לשחרור 6 מיליארד דולר מוקפאים תמורת פיקוח באתרי הגרעין"
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
     "value": 3.1077,
     "unit": "ILS",
     "change_pct": -0.02,
     "source_id": "src_ecb",
     "as_of": "2026-10-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "אי-ויתור על החומר הגרעיני המועשר והשארתו בתחומי המדינה",
      "התניית כל משא ומתן עם וושינגטון בצעדים מקדימים ובהסרת הסנקציות",
      "תגובה צבאית תקיפה ועוצמתית יותר לכל פעולה צבאית נגדה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי עולמי באמצעות פגיעה בביטחון השיט במצר הורמוז",
      "שימור יכולות הסף הגרעיניות כקלף מיקוח וכגורם הרתעה"
     ],
     "forecast": [
      "המשך העלאת רמת הסיכון לספינות מסחר במפרץ במטרה ללחוץ על הקהילה הבינלאומית",
      "התבצרות בעמדות הנוקשות עד להתבהרות התוצאות הפוליטיות בארה\"ב ובישראל"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הפלת המשטר בטהראן כיעד מרכזי עליון",
      "הסרת האיום הגרעיני וההתעצמות הצבאית האיראנית"
     ],
     "inferred": [
      "דחיפה לחידוש המערכה הצבאית ההתקפית בשיתוף מלא עם הממשל האמריקני",
      "סיכול כל הסדר ביניים שיאפשר למשטר להמשיך להחזיק באורניום מועשר"
     ],
     "forecast": [
      "המשך היערכות מבצעית למתקפה אפשרית כנגד מתקני ההנשקה והתשתיות",
      "החרפת המסרים הפומביים נגד טהראן במקביל למהלכים פוליטיים פנימיים"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הצבת אולטימטום מרומז להכרעה בין פתרון בהסכמה לבין פעולה בדרך נוקשה",
      "הרתעת איראן מפני פגיעה באינטרסים ובנתיבי השיט הבינלאומיים"
     ],
     "inferred": [
      "ריכוז כוח אש משמעותי במפרץ כדי לאפשר אופציה של מתקפה רחבה",
      "בחינת אפשרות להחלפת שלטון בטהראן תוך שימוש במנופי לחץ מקסימליים"
     ],
     "forecast": [
      "עיבוי נוסף של המערך הצבאי באזור עד סוף נובמבר לקראת הכרעות אפשריות",
      "הגברת האכיפה הימית והמודיעינית סביב נתיבי האנרגיה במצר הורמוז"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/20/uk-police-re-arrest-two-men-on-suspicion-of-assisting-iranian-intelligence?traffic_source=rss",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/uk-police-arrest-pair-suspicion-helping-iranian-intelligence-over-raf-fairford",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/netanyahu-is-fighting-for-his-political-career-expert-says-a-week-ahead-of-crucial-vote",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610209049",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86298787/Top-Iranian-general-warns-of-harsher-retaliation-if-war-resumes",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21671857",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-military-chief-warns-stronger-response-any-new-attack",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132257",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48761",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/byfornn2gg",
     "accessed_at": "2026-10-20T23:40:36+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T05:11:52+00:00",
  "changes": {
   "IRAN-10202340-01": {
    "kind": "possible",
    "prev": "איומים איראניים על תשתיות תקשורת ואנרגיה במצר הורמוז",
    "score": 0.467
   },
   "IRAN-10202340-02": {
    "kind": "new"
   },
   "IRAN-10202340-03": {
    "kind": "new"
   },
   "IRAN-10202340-04": {
    "kind": "new"
   },
   "IRAN-10202340-05": {
    "kind": "new"
   },
   "IRAN-10202340-06": {
    "kind": "possible",
    "prev": "אזהרות ביטחוניות של נציגויות ארצות הברית במזרח התיכון",
    "score": 0.467
   },
   "IRAN-10202340-07": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-20T2342__ukraine-202610202342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-20T23:42:05+00:00",
   "window": {
    "from": "2026-10-19T23:42:05+00:00",
    "to": "2026-10-20T23:42:05+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610202342"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהמשך מתקפות אוויריות נרחבות על תשתיות אנרגיה וריכוזי אוכלוסייה, לצד פגיעה בשיט המסחרי בים השחור. במקביל ללחץ הצבאי מתנהלים מגעים דיפלומטיים אינטנסיביים בהובלת שליחים מארצות הברית ומדינות אירופה לגיבוש מסגרת להפסקת הלחימה. ברקע המגעים ניכרים חיכוכים בנוגע להיקף הסיוע והמודיעין האמריקני הניתן לקייב ומגבלות על מערכות תקשורת לווייניות.",
   "fronts": [
    {
     "name": "מחוז דונצק",
     "status": "תקיפות אוויריות ופגיעות הדדיות בתשתיות חשמל וחימום באזורים בשליטת שני הצדדים"
    },
    {
     "name": "מרחב הים השחור ונמלי הדרום",
     "status": "הסלמה בתקיפות כוחות רוסיה נגד ספינות מטען ותגבור נוכחות צבאית מצד ברית נאט\"ו"
    },
    {
     "name": "עורף אוקראינה ומתקני אנרגיה",
     "status": "מתקפות כטבמים וטילים מרוכזות על ערים ותשתיות אזרחיות, שהובילו להרחבת מצב החירום הממשלתי"
    },
    {
     "name": "מחוז סומי",
     "status": "פעילות צבאית קרקעית שכללה לחימה ושביית חיילים על ידי הכוחות האוקראיניים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10202342-01",
     "title": "שיחות מדיניות באוסלו לקראת גיבוש מתווה להסדר וביקור שליח ארצות הברית ברוסיה",
     "summary": "נציגי ארצות הברית, אוקראינה, נורווגיה ופינלנד נפגשו באוסלו לדיון בביטחון, ערבויות עתידיות ומתווה לסיום הלחימה. השליח האמריקני סטיב ויטקוף צפוי להמשיך לסנקט פטרבורג לפגישות עם ההנהגה הרוסית.",
     "axis": "משא ומתן ומדיניות בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T16:41:39+00:00",
     "last_update_at": "2026-10-20T23:33:14+00:00",
     "what_is_not_verified": "ההסכמות המדויקות על תנאי הערבויות הביטחוניות והנכונות של רוסיה לקבל את ההצעות שיוצגו בפניה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/21/ukraine-war-briefing-us-envoy-witkoff-to-meet-putin-after-constructive-talks-with-zelenskyy-in-norway",
       "published_at": "2026-10-20T23:33:14+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2204981",
       "published_at": "2026-10-20T22:28:01+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2204969",
       "published_at": "2026-10-20T20:44:01+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/20/trump-says-putin-and-zelensky-don-t-need-to-meet-face-to-face-to-reach-a-peace-deal",
       "published_at": "2026-10-20T20:16:02+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/20/8058978/",
       "published_at": "2026-10-20T18:29:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/20/8058977/",
       "published_at": "2026-10-20T18:10:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/witkoff-to-visit-st-petersburg-after-zelensky-talks-norways-pm-says/",
       "published_at": "2026-10-20T17:50:08+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/20/nyt-trump-s-envoys-plan-to-meet-putin-in-st-petersburg-on-wednesday-and-seek-the-release-of-an-american-held-in-russia",
       "published_at": "2026-10-20T16:41:39+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסלו, נורווגיה",
       "lat": 59.9133,
       "lon": 10.739
      },
      {
       "name": "סנקט פטרבורג, רוסיה",
       "lat": 59.9387,
       "lon": 30.3162
      }
     ]
    },
    {
     "id": "UKRAINE-10202342-02",
     "title": "חידוש שיתוף המודיעין וההתרעות האמריקניות עם צבא אוקראינה",
     "summary": "נשיא אוקראינה מסר כי ארצות הברית חידשה את שיתוף המודיעין הצבאי והעברת התרעות מוקדמות מפני ירי טילים בליסטיים רוסיים, לאחר השעיה זמנית.",
     "axis": "סיוע ביטחוני ומודיעין",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T19:32:28+00:00",
     "last_update_at": "2026-10-20T21:34:57+00:00",
     "what_is_not_verified": "הסיבה המדויקת להשעיית המודיעין בעבר והיקף המידע המועבר בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-confirms-ballistic-missile-early-warning-systems-operational-after-skipped-alerts/",
       "published_at": "2026-10-20T21:34:57+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq5ynkx3xy11o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-20T21:27:39+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/20/us-has-resumed-sharing-intelligence-with-ukraine-about-russian-strikes-says-zelenskyy",
       "published_at": "2026-10-20T19:32:28+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסלו, נורווגיה",
       "lat": 59.9133,
       "lon": 10.739
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-10202342-03",
     "title": "פגיעה רוסית קטלנית בתשתית אנרגיה בעיר קרמטורסק",
     "summary": "תקיפה רוסית על קרמטורסק פגעה בעובדי חברת החימום העירונית בעת מילוי תפקידם, וגרמה למותם של שלושה בני אדם ולפציעת שניים נוספים.",
     "axis": "מחוז דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T10:04:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T22:05:00+00:00",
     "last_update_at": "2026-10-20T22:05:00+00:00",
     "what_is_not_verified": "סוג החימוש המדויק שבו השתמשו הכוחות הרוסיים בתקיפה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/21/8058891/",
       "published_at": "2026-10-20T22:05:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קרמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-10202342-04",
     "title": "מתקפות כטבמים רוסיים על קייב וחרקוב עם נפגעים בנפש",
     "summary": "כלי טיס בלתי מאוישים רוסיים תקפו יעדים בקייב ובחרקוב, גרמו להרוגים ולעשרות פצועים ופגעו בכלי רכב ובפארק ציבורי.",
     "axis": "תקיפות עורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T11:03:55+00:00",
     "last_update_at": "2026-10-20T20:56:00+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל ברחבי אוקראינה כתוצאה מגל התקיפות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4176504-russian-drone-attack-on-kyiv-injury-toll-rises-to-18-one-dead.html",
       "published_at": "2026-10-20T20:56:00+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21669570",
       "published_at": "2026-10-20T13:56:41+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hyanchv2fe",
       "published_at": "2026-10-20T11:03:55+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10202342-05",
     "title": "תקיפות רוסיות על ספינות מטען ונמלים באזור הים השחור",
     "summary": "הצבא הרוסי תקף חמש ספינות מטען אזרחיות, בהן שלוש ספינות בנמל רני ושתי ספינות נוספות שהיו בדרכן לאודסה, בעקבות כך נאט\"ו מעבה את פריסת כוחותיה בזירה.",
     "axis": "זירת הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T17:43:40+00:00",
     "last_update_at": "2026-10-20T17:43:40+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים המדויק על גבי הספינות שהותקפו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/20/nato-black-sea-deployment-escalating-russian-attacks-ships",
       "published_at": "2026-10-20T17:43:40+00:00"
      }
     ],
     "places": [
      {
       "name": "רני, אוקראינה",
       "lat": 45.4554,
       "lon": 28.2791
      },
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10202342-06",
     "title": "תקיפות אוקראיניות על תשתיות אנרגיה ומרכזי נתונים של רוסיה",
     "summary": "כוחות אוקראינה פגעו בתשתיות חשמל בעיר צ'יסטיאקובה שבמחוז דונצק, לצד שיבושי חשמל בחצי האי קרים ופגיעה במרכזי נתונים ברוסיה ששיבשה דיונים בבתי משפט.",
     "axis": "תקיפות עומק ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T18:21:20+00:00",
     "last_update_at": "2026-10-20T23:25:50+00:00",
     "what_is_not_verified": "מידת השיבוש הכוללת שנגרמה למערכות המשפט והאנרגיה הרוסיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-reportedly-strike-energy-infrastructure-in-occupied-donetsk-oblast-blackouts-in-crimea/",
       "published_at": "2026-10-20T23:25:50+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-drone-strikes-on-yandex-data-centers-disrupt-russian-court-hearings-media-reports/",
       "published_at": "2026-10-20T18:21:20+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'יסטיאקובה, אוקראינה",
       "lat": 48.0261,
       "lon": 38.6181
      },
      {
       "name": "קרים",
       "lat": 45.2835,
       "lon": 34.2008
      }
     ]
    },
    {
     "id": "UKRAINE-10202342-07",
     "title": "מחלוקת ושיבושים בהפעלת מערכות התקשורת הלוויינית של סטארלינק באוקראינה",
     "summary": "הגבלות שהוטלו על מערכת התקשורת הצבאית סטארשילד פגעו בפעילות המבצעית של צבא אוקראינה, ועוררו ביקורת ודיונים בין הנהלת החברה לממשל האמריקני.",
     "axis": "סיוע טכנולוגי וצבאי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T22:59:38+00:00",
     "last_update_at": "2026-10-20T23:33:14+00:00",
     "what_is_not_verified": "האם המהלך תואם ואושר מראש על ידי נשיא ארצות הברית או בוצע בהחלטה חד־צדדית של אילון מאסק בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/21/ukraine-war-briefing-us-envoy-witkoff-to-meet-putin-after-constructive-talks-with-zelenskyy-in-norway",
       "published_at": "2026-10-20T23:33:14+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48765",
       "published_at": "2026-10-20T23:23:38+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/21/did-trump-know-musk-was-about-to-restrict-ukraine-s-military-starlink-service-wsj-reports-they-discussed-the-decision-afterward-some-sources-say-they-also-spoke-beforehand",
       "published_at": "2026-10-20T22:59:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10202342-08",
     "title": "הרחבת מצב החירום במשק האוקראיני עקב פגיעות בתשתיות",
     "summary": "ממשלת אוקראינה הרחיבה את צו מצב החירום מהמשק החשמלי גם לתחומי אספקת המים, החימום, התחבורה, רשתות התקשורת ומרכזי הנתונים.",
     "axis": "עורף ותשתיות אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-16T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T17:27:00+00:00",
     "last_update_at": "2026-10-20T17:27:00+00:00",
     "what_is_not_verified": "לוח הזמנים לתיקון הנזקים ביעדי התשתית השונים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_1292",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/20/8058971/",
       "published_at": "2026-10-20T17:27:00+00:00"
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
     "id": "UKRAINE-10202342-09",
     "title": "החלטת בולגריה שלא להשתתף בתוכנית הסיוע הכספי החדשה לאוקראינה",
     "summary": "ראש ממשלת בולגריה הודיע כי ארצו אינה יכולה לתרום למימון חבילת הסיוע הכספי של האיחוד האירופי עבור אוקראינה.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T20:05:00+00:00",
     "last_update_at": "2026-10-20T20:05:00+00:00",
     "what_is_not_verified": "האם מדינות נוספות באיחוד האירופי יסרבו להשתתף בתוכנית המימון.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4176494-bulgaria-will-not-contribute-to-new-eu-financial-assistance-program-for-ukraine-pm.html",
       "published_at": "2026-10-20T20:05:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10202342-10",
     "title": "העברת חבילת סיוע הומניטרי מווייטנאם לאוקראינה",
     "summary": "וייטנאם העבירה לאוקראינה חבילת סיוע הומניטרי בהיקף כספי של חצי מיליון דולר.",
     "axis": "סיוע בינלאומי",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T23:27:00+00:00",
     "last_update_at": "2026-10-20T23:27:00+00:00",
     "what_is_not_verified": "פירוט הציוד והמוצרים המדויקים שנכללו בחבילת הסיוע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4176260-vietnam-provides-ukraine-with-humanitarian-aid-package.html",
       "published_at": "2026-10-20T23:27:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על תיאום מוקדם בין אילון מאסק לדונלד טראמפ להאטת מערכת סטארלינק באוקראינה",
    "ההצעה האמריקנית המדויקת שתוצג ברוסיה בנוגע לשטחים ולחברות בנאט\"ו",
    "דיווחים על שיתוף מודיעין לווייני בין רוסיה לאיראן",
    "מספר הנפגעים המלא בתקיפות על ספינות סוחר בנמל רני ובדרך לאודסה"
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
     "value": 1.1215,
     "unit": "USD",
     "change_pct": -0.09,
     "source_id": "src_ecb",
     "as_of": "2026-10-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת ערבויות ביטחון מוצקות המקבילות לסעיף 5 של ברית נאט\"ו לאחר תום המלחמה",
      "עמידה על העיקרון ששום הסדר לא ייקבע בלעדיה ואי־הסכמה לכניעה או לדיונים מעל ראשה",
      "בלימת הפגיעה באזרחים וסיום מהיר של המלחמה כדי למנוע אובדן חיי אדם נוספים"
     ],
     "inferred": [
      "הפעלת לחץ על וושינגטון להמשך רציף של שיתוף המודיעין ואספקת מיירטי פטריוט",
      "נכונות להגביל פגיעות בבתי זיקוק רוסיים בתמורה להגנה על שמי המדינה",
      "הבטחת מקורות מימון וציוד חלופי לאור סימני עייפות או סירוב מצד חלק ממדינות אירופה"
     ],
     "forecast": [
      "המשך הגנה על מתקני אנרגיה תוך ניסיון לשמר תמיכה אמריקנית בעידן של חילוקי דעות",
      "דרישה לנוכחות פעילה בכל ערוץ משא ומתן רב־צדדי עתידי מול מוסקבה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה ביעדים צבאיים ובתשתיות המשמשות את המאמץ המלחמתי של אוקראינה"
     ],
     "inferred": [
      "שחיקת כושר העמידה של העורף האוקראיני באמצעות פגיעה מסיבית במערכות החשמל והחימום לקראת החורף",
      "שיבוש נתיבי הסחר והיצוא החקלאי האוקראיני בים השחור כדי להעמיק את המשבר הכלכלי של קייב",
      "הפעלת לחץ מקסימלי לקראת פגישות מדיניות כדי להשיג הכרה בשליטה בשטחים שנכבשו"
     ],
     "forecast": [
      "המשך פגיעה ממוקדת במתקני אנרגיה ונמלים כקלף מיקוח מול ארצות הברית במגעים הדיפלומטיים",
      "בחינת הצעות השליח האמריקני תוך שמירה על דרישות טריטוריאליות נוקשות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "חתירה לסיום מהיר של המלחמה ודרישה מאוקראינה להפגין נכונות להסדר מדיני",
      "קידום פתרונות מעשיים ומסגרת ביטחונית וכלכלית כוללת לאירופה"
     ],
     "inferred": [
      "שימוש בסיוע הביטחוני, במודיעין ובמערכות תקשורת כאמצעי לחץ על הנהגת אוקראינה לקבלת פשרות",
      "שאיפה להפחתת מחירי הדלק בעולם ומניעת הסלמה שפוגעת באינטרסים כלכליים אמריקניים",
      "חתירה למגעים ישירים מול מוסקבה ובייג'ינג תוך עקיפת גורמים בינלאומיים במידת הצורך"
     ],
     "forecast": [
      "המשך מסעות דילוגים דיפלומטיים בין מוסקבה, קייב ובירות אירופה לבחינת מתווה הפסקת אש",
      "החרפת הוויכוח הפנימי בוושינגטון בין תומכי המשך הסיוע למצדדי נסיגה ממחויבויות ביטחוניות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq5ynkx3xy11o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/21/ukraine-war-briefing-us-envoy-witkoff-to-meet-putin-after-constructive-talks-with-zelenskyy-in-norway",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21669570",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-drone-strikes-on-yandex-data-centers-disrupt-russian-court-hearings-media-reports/",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/21/did-trump-know-musk-was-about-to-restrict-ukraine-s-military-starlink-service-wsj-reports-they-discussed-the-decision-afterward-some-sources-say-they-also-spoke-beforehand",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/20/8058971/",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2204969",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48765",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4176260-vietnam-provides-ukraine-with-humanitarian-aid-package.html",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyanchv2fe",
     "accessed_at": "2026-10-20T23:42:05+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T05:15:06+00:00",
  "changes": {
   "UKRAINE-10202342-01": {
    "kind": "new"
   },
   "UKRAINE-10202342-02": {
    "kind": "new"
   },
   "UKRAINE-10202342-03": {
    "kind": "new"
   },
   "UKRAINE-10202342-04": {
    "kind": "new"
   },
   "UKRAINE-10202342-05": {
    "kind": "new"
   },
   "UKRAINE-10202342-06": {
    "kind": "new"
   },
   "UKRAINE-10202342-07": {
    "kind": "new"
   },
   "UKRAINE-10202342-08": {
    "kind": "new"
   },
   "UKRAINE-10202342-09": {
    "kind": "new"
   },
   "UKRAINE-10202342-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-20T2344__north-202610202344.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-20T23:44:32+00:00",
   "window": {
    "from": "2026-10-19T23:44:32+00:00",
    "to": "2026-10-20T23:44:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610202344"
   },
   "summary": "הלחימה והפעילות המבצעית של צה\"ל בדרום לבנון נמשכות באמצעות תקיפות מהאוויר, אש ארטילרית והשמדת תשתיות, במקביל לשיחות צבאיות עקיפות בארצות הברית בין ישראל ללבנון על יישום הסכם המסגרת. בזירה הפנים-לבנונית מתגברים החיכוכים בין רשויות המדינה לחיזבאללה בעקבות הברחות נשק, בעוד הארגון מוסיף לשקם את מוסדותיו. בסוריה נרשמת מתיחות ביטחונית על רקע תקיפות רחפנים בא-סווידא, נוכחות צבאית טורקית ממושכת בצפון וטענות לא מאומתות על פעילות ישראלית בדרום המדינה.",
   "fronts": [
    {
     "name": "דרום לבנון וישראל",
     "status": "פעילות מבצעית פעילה הכוללת תקיפות צה\"ל מהאוויר, אש ארטילרית והשמדת תשתיות, לצד מגעים צבאיים-טכניים בארה\"ב ליישום הסדרי ביטחון ונסיגה."
    },
    {
     "name": "הזירה הפנים-לבנונית מול חיזבאללה",
     "status": "מתיחות סביב אכיפת החוק ותפיסות אמצעי לחימה של הארגון, לצד חזרת מוסדות אזרחיים של חיזבאללה לפעילות בחסות שרים בממשלה."
    },
    {
     "name": "דרום סוריה",
     "status": "חוסר יציבות ביטחוני הכולל תקיפות רחפנים על עמדות ביטחון פנים בא-סווידא, לצד טענות לא מאומתות בדבר היערכות ישראלית באזור ג'בל א-ערב."
    },
    {
     "name": "צפון סוריה וטורקיה",
     "status": "המשך אחיזה צבאית של טורקיה בשטח סוריה בהתאם להצהרות רשמיות של אנקרה על השארת הכוחות עד הבטחת גבולותיה."
    }
   ],
   "events": [
    {
     "id": "NORTH-10202344-01",
     "title": "התקפות רחפנים נגד עמדות ביטחון סוריות במחוז א-סווידא",
     "summary": "קבוצות חמושות תקפו באמצעות כלי טיס בלתי מאוישים ממולכדים עמדות של כוחות ביטחון הפנים באזור הכפרי המערבי של מחוז א-סווידא בדרום סוריה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T23:01:52+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T23:01:52+00:00",
     "last_update_at": "2026-10-20T23:01:52+00:00",
     "what_is_not_verified": "זהות הקבוצות החמושות שביצעו את התקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/armed-groups-target-syrian-security-posts-in-suwayda-with-explosive-laden-drones/4095191",
       "published_at": "2026-10-20T23:01:52+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10202344-02",
     "title": "שיחות צבאיות-טכניות בין ישראל ללבנון בפלורידה",
     "summary": "משלחות צבאיות מישראל ומלבנון קיימו שיחות בפיקוד המרכז של צבא ארצות הברית בטמפה, בתיווך אמריקני. השיחות התמקדו ביישום הסכם המסגרת ובנסיגת כוחות מאזורי פיילוט.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T13:50:00+00:00",
     "last_update_at": "2026-10-20T20:56:07+00:00",
     "what_is_not_verified": "מידת ההתקדמות בשיחות ומועד השגת הסכמות מעשיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-israel-military-technical-talks-in-florida-conclude-first-day-to-resume-wednesday/4095149",
       "published_at": "2026-10-20T20:56:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israel-seeks-cast-lebanon-army-failing-ahead-us-talks",
       "published_at": "2026-10-20T15:51:04+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958223",
       "published_at": "2026-10-20T14:31:40+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963902/will-lebanon-israel-talks-in-florida-contain-tensions-before-israels-e/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963902",
       "published_at": "2026-10-20T13:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "טמפה, ארצות הברית",
       "lat": 27.945,
       "lon": -82.4583
      }
     ]
    },
    {
     "id": "NORTH-10202344-03",
     "title": "האשמות ישראליות כלפי צבא לבנון בנוגע לחיזבאללה",
     "summary": "צבא ישראל האשים גורמים בצבא לבנון בשיתוף פעולה עם חיזבאללה, סיכול אכיפת הסדרי הביטחון ואי-פירוק אתר צבאי בכפרא. צבא לבנון דחה את הטענות והגדירן כשקריות.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T13:50:00+00:00",
     "last_update_at": "2026-10-20T15:51:04+00:00",
     "what_is_not_verified": "הטענות בדבר תיאום של קצינים לבנונים עם חיזבאללה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/news/israel-seeks-cast-lebanon-army-failing-ahead-us-talks",
       "published_at": "2026-10-20T15:51:04+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/963902/will-lebanon-israel-talks-in-florida-contain-tensions-before-israels-e/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963902",
       "published_at": "2026-10-20T13:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "כפרא, לבנון",
       "lat": 33.1805,
       "lon": 35.354
      }
     ]
    },
    {
     "id": "NORTH-10202344-04",
     "title": "צווי חקירה בלבנון לבכירים בחיזבאללה בפרשת חומרי הנפץ",
     "summary": "שופט בלבנון הורה לזמן לחקירה שני בכירים בארגון חיזבאללה בעקבות תפיסת משאית שנשאה כחצי טון חומרי נפץ במחסום דהר אל-בידר. חיזבאללה הודה שהמטען שייך לו ודרש את השבתו.",
     "axis": "לבנון הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T10:41:15+00:00",
     "last_update_at": "2026-10-20T15:27:15+00:00",
     "what_is_not_verified": "האם הוצאו צווי מעצר בפועל נגד הבכירים, נוכח הכחשות של גורמים בחיזבאללה ומקורות שיפוטיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_afp",
       "url": "https://www.newarab.com/news/lebanon-judge-question-hezbollah-officials-over-explosives",
       "published_at": "2026-10-20T15:27:15+00:00"
      },
      {
       "source_id": "src_alma",
       "source_root_id": "or_afp",
       "url": "https://israel-alma.org/hezbollah-demands-its-explosives-back-a-test-of-lebanese-sovereignty/",
       "published_at": "2026-10-20T10:41:15+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    },
    {
     "id": "NORTH-10202344-05",
     "title": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
     "summary": "מטוסי קרב ישראליים ביצעו תקיפות בסביבת העיירות כפר תבנית, א-נבטיה אל-פוקא ואל-קנטרה. בנוסף בוצע ירי ארטילרי ישראלי לעבר פאתי בית יהון בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T13:03:25+00:00",
     "last_update_at": "2026-10-20T17:38:15+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים בתקיפות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_aa485f06ffa57e19",
       "url": "https://english.almanar.com.lb/article/140612/",
       "published_at": "2026-10-20T17:38:15+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_c61aade92a0951ad",
       "url": "https://english.almanar.com.lb/article/140522/",
       "published_at": "2026-10-20T13:03:25+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "א-נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      },
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-10202344-06",
     "title": "השמדת תשתיות טרור של חיזבאללה בידי אוגדה 91",
     "summary": "כוחות צה\"ל מאוגדה 91 השמידו מעל 540 תשתיות טרור במסגרת פעילות במרחב הביטחוני בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T09:18:40+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T09:18:40+00:00",
     "last_update_at": "2026-10-20T09:18:40+00:00",
     "what_is_not_verified": "מיקומים מדויקים ומאפייני כלל התשתיות שהושמדו מעבר להודעת הצבא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25412",
       "published_at": "2026-10-20T09:18:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-07",
     "title": "הודעת טורקיה על המשך הצבת כוחותיה בסוריה",
     "summary": "שר ההגנה הטורקי ישר גולר הודיע כי ארצו תמשיך להחזיק את כוחות הצבא שלה בשטח סוריה (ובעיראק) עד להשגת ביטחון מלא בגבולות ובאזור.",
     "axis": "טורקיה-סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T09:50:50+00:00",
     "last_update_at": "2026-10-20T13:47:01+00:00",
     "what_is_not_verified": "לוח הזמנים או התנאים הקונקרטיים להערכת השגת הביטחון המלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_afp",
       "url": "https://t.me/abualiexpress/132251",
       "published_at": "2026-10-20T13:47:01+00:00"
      },
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_afp",
       "url": "https://www.dailysabah.com/politics/war-on-terror/turkiye-says-troops-will-stay-in-syria-iraq-until-borders-are-secured",
       "published_at": "2026-10-20T13:21:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_afp",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/963876/turkey-troops-to-stay-in-syria-iraq-until-border-security-ensured-defe/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963876",
       "published_at": "2026-10-20T09:50:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-08",
     "title": "הצהרת שר הביטחון הישראלי על מוכנות לתמרון בלבנון",
     "summary": "שר הביטחון ישראל כ\"ץ הצהיר כי ישראל ערוכה לבצע תמרון צבאי בלבנון אם חיזבאללה יצטרף למתקפה איראנית על ישראל.",
     "axis": "ישראל-לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T14:07:36+00:00",
     "last_update_at": "2026-10-20T14:07:36+00:00",
     "what_is_not_verified": "רמת הכוננות המעשית של הכוחות להפעלת תוכניות תמרון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94717",
       "published_at": "2026-10-20T14:07:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-09",
     "title": "דיווחים על העברת ציוד צבאי ישראלי להר הדרוזים בסוריה",
     "summary": "מקורות סוריים ורוסיים טענו כי מסוקי צה\"ל העבירו כמויות של ציוד צבאי, אמצעי לחימה ומכ\"מים לפסגת ג'בל א-ערב בא-סווידא, תוך חשש בדמשק מפעולה לפני הבחירות בישראל.",
     "axis": "ישראל-סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T14:56:32+00:00",
     "last_update_at": "2026-10-20T14:56:32+00:00",
     "what_is_not_verified": "עצם קיום העברות הציוד, הקמת הבסיס בפסגת ההר, והכוונות המיוחסות לפעולה צבאית לפני הבחירות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48745",
       "published_at": "2026-10-20T14:56:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10202344-10",
     "title": "פתיחה מחדש של מרכז בריאות של חיזבאללה בחסות שר הבריאות הלבנוני",
     "summary": "מרכז הבריאות דאר אל-חוורא בדאחייה של ביירות, השייך לארגון הבריאות האסלאמי של חיזבאללה, חזר לפעול לאחר שיקום מנזקי המלחמה במעמד שר הבריאות של לבנון.",
     "axis": "לבנון הפנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-20T10:47:46+00:00",
     "last_update_at": "2026-10-20T10:47:46+00:00",
     "what_is_not_verified": "מידת ההשפעה המעשית של החסות הממשלתית על הגבלת פעילות חיזבאללה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/under-the-health-ministers-patronage-hezbollah-rebuilds-its-state-within-a-state/",
       "published_at": "2026-10-20T10:47:46+00:00"
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
     "id": "NORTH-10202344-11",
     "title": "יוניפי\"ל ממשיך בפעילותו בשטח בלבנון",
     "summary": "כוח האו\"ם הזמני בלבנון הודיע כי הוא ממשיך בפעילות המבצעית בשטח, בעוד מועצת הביטחון של האו\"ם בוחנת חלופות לתקופה שלאחר סיום המנדט המתוכנן לסוף דצמבר.",
     "axis": "דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-20T10:48:35+00:00",
     "last_update_at": "2026-10-20T15:54:46+00:00",
     "what_is_not_verified": "המתווה המדויק שיוסכם במועצת הביטחון של האו\"ם לאחר תום המנדט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/un-force-says-operations-continue-in-lebanon-as-security-council-weighs-post-mission-options/4094898",
       "published_at": "2026-10-20T15:54:46+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/963888/unifil-mission-continues-operations-as-security-council-considers-post/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963888",
       "published_at": "2026-10-20T10:48:35+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על העברת ציוד צבאי ומערכות מכ\"ם על ידי מסוקים ישראליים לפסגת ג'בל א-ערב בסוריה",
    "החשש בדמשק מפעולה צבאית ישראלית קרובה שנועדה להשפיע על הבחירות בישראל",
    "זהות הגורמים העומדים מאחורי תקיפות הרחפנים הממולכדים נגד עמדות הביטחון בא-סווידא",
    "הוצאת צווי מעצר בפועל על ידי התביעה בלבנון נגד בכירי חיזבאללה חוסיין עבדאללה ועלי איוב",
    "הטענות הישראליות בדבר שיתוף פעולה ישיר ותיאום בין קצינים בצבא לבנון לחיזבאללה בכפרא"
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
     "value": 3.1077,
     "unit": "ILS",
     "change_pct": -0.02,
     "source_id": "src_ecb",
     "as_of": "2026-10-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "פירוק תשתיות צבאיות של חיזבאללה במרחב הביטחוני בדרום לבנון",
      "דרישה מצבא לבנון לאכוף הסדרי ביטחון ולמנוע הימצאות אמצעי לחימה של חיזבאללה בדרום",
      "מוכנות לתמרון קרקעי בלבנון בתרחיש של הצטרפות חיזבאללה למתקפה איראנית"
     ],
     "inferred": [
      "הפעלת לחץ מדיני וצבאי על הממשל בלבנון כדי להרחיק את חיזבאללה מהגבול לפני יישום נסיגות",
      "ביסוס חופש פעולה מודיעיני ומבצעי בדרום סוריה לסיכול איומים בגבול"
     ],
     "forecast": [
      "המשך הפעילות לטיהור תשתיות סמוכות גבול בדרום לבנון במקביל לגרירת רגליים במו\"מ הצבאי בפלורידה עד הבחירות בישראל"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "דרישה לנסיגה ישראלית מלאה מדרום לבנון וסיום התקיפות היומיומיות",
      "הקמת מנגנון פיקוח ליישום הסדרי הביטחון באזורי הפיילוט המוגדרים",
      "אכיפת החוק המדינתי על העברת אמצעי לחימה והחרמת משלוחים בלתי מורשים"
     ],
     "inferred": [
      "שמירה על ערוץ המשא ומתן עם ישראל בחסות ארה\"ב כדי למנוע הידרדרות למלחמה רחבה",
      "ניסיון לתמרן בין דרישות הקהילה הבינלאומית לבין הימנעות מעימות פנים-לבנוני אלים וישיר מול חיזבאללה"
     ],
     "forecast": [
      "המשך השתתפות במפגשים בטמפה ללא פריצת דרך משמעותית, לצד חיכוך הדרגתי מוגבל מול מנגנוני ההברחה של חיזבאללה"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "החזקת אמצעי לחימה לצורך שימוש נגד כוחות ישראל בדרום לבנון",
      "דרישה משלטונות לבנון להחזיר חומרי נפץ שהוחרמו ולשחרר את פעיליו העצורים"
     ],
     "inferred": [
      "שימור יכולות ההתחמשות וההברחה בתוך שטח לבנון על אף הלחץ הממשלתי",
      "שיקום המערכים האזרחיים והרפואיים בביירות וסביבתה לביסוס הלגיטימציה בקרב בסיס התמיכה שלו"
     ],
     "forecast": [
      "ניסיונות חוזרים להעברת נשק לדרום תוך הפעלת לחץ פוליטי על מערכת המשפט והביטחון בלבנון לקבור את החקירות"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "המשך החזקת כוחות צבאיים בשטח סוריה ועיראק עד להבטחה מלאה של ביטחון הגבולות והאזור"
     ],
     "inferred": [
      "מניעת התבססות של ישויות עוינות לאנקרה לאורך הגבול ושמירה על מנופי השפעה פוליטיים וצבאיים בסוריה"
     ],
     "forecast": [
      "המשך הפריסה הצבאית בצפון סוריה ללא כוונה לסגת בעתיד הנראה לעין כל עוד לא הושג הסדר התואם את דרישותיה הביטחוניות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/under-the-health-ministers-patronage-hezbollah-rebuilds-its-state-within-a-state/",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/140522/",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/un-force-says-operations-continue-in-lebanon-as-security-council-weighs-post-mission-options/4094898",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/war-on-terror/turkiye-says-troops-will-stay-in-syria-iraq-until-borders-are-secured",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/963888/unifil-mission-continues-operations-as-security-council-considers-post/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-963888",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-judge-question-hezbollah-officials-over-explosives",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132251",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48745",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25412",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94717",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958223",
     "accessed_at": "2026-10-20T23:44:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-20T07:58:20+00:00",
  "changes": {
   "NORTH-10202344-01": {
    "kind": "new"
   },
   "NORTH-10202344-02": {
    "kind": "possible",
    "prev": "אזהרות בינלאומיות ללבנון מהתערבות בעימות בין ישראל לאיראן",
    "score": 0.467
   },
   "NORTH-10202344-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "האשמות ישראליות כלפי צבא לבנון על אי-פירוק אתר חיזבאללה",
    "score": 0.65
   },
   "NORTH-10202344-04": {
    "kind": "new"
   },
   "NORTH-10202344-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות והפגזות צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10202344-06": {
    "kind": "new"
   },
   "NORTH-10202344-07": {
    "kind": "new"
   },
   "NORTH-10202344-08": {
    "kind": "new"
   },
   "NORTH-10202344-09": {
    "kind": "possible",
    "prev": "דיווח על פגישות ישראליות עם מנהיגים דרוזים מסויידאא והעברת נשק",
    "score": 0.467
   },
   "NORTH-10202344-10": {
    "kind": "new"
   },
   "NORTH-10202344-11": {
    "kind": "new"
   }
  }
 }
};
