/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-03T1012__yemen-202611031012.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-03T10:12:59+00:00",
   "window": {
    "from": "2026-11-02T10:12:59+00:00",
    "to": "2026-11-03T10:12:59+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611031012"
   },
   "summary": "הלחימה בתימן ובאזור הסובב אותה מתאפיינת בהתקדמות קרקעית של החות'ים לעבר אזורים אסטרטגיים וסביב עדן ותעז, לצד תקיפות אוויריות והתכתשויות מול ממשלת תימן והקואליציה בראשות סעודיה. במקביל, החות'ים ממשיכים לבצע שיגורים לעבר יעדים בתוך סעודיה, מה שמוביל לשיבושים ביטחוניים ודחיית אירועים בינלאומיים בממלכה.",
   "fronts": [
    {
     "name": "החזית הפנימית בתימן (תעז, לחג ועדן)",
     "status": "פעילה עם קרקעות וחילופי אש"
    },
    {
     "name": "החזית מול סעודיה (מתקפות כטב\"מים וטילים)",
     "status": "פעילה"
    },
    {
     "name": "ציר הים האדום ומצר באב אל-מנדב",
     "status": "פעיל ומאוים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11031012-01",
     "title": "דחיית גביע אסיאה בכדורגל בסעודיה",
     "summary": "התאחדות הכדורגל של אסיה הודיעה על דחיית טורניר גביע אסיאה 2027 בסעודיה מדצמבר/ינואר בעקבות המצב הביטחוני והתקיפות החות'יות.",
     "axis": "סעודיה והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T06:55:39+00:00",
     "last_update_at": "2026-11-03T09:58:46+00:00",
     "what_is_not_verified": "נסיבות השיבוץ והדחייה המדויקות מעבר להודעת ההתאחדות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_8b2321e388731958",
       "url": "https://www.newarab.com/news/asian-cup-latest-event-saudi-arabia-be-postponed",
       "published_at": "2026-11-03T09:58:46+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_8b2321e388731958",
       "url": "https://www.al-monitor.com/originals/2026/11/asian-cup-latest-event-saudi-arabia-be-postponed-over-safety",
       "published_at": "2026-11-03T08:30:46+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_8b2321e388731958",
       "url": "https://www.aljazeera.com/sports/2026/11/3/afc-reschedules-asian-cup-2027-in-saudi-arabia-amid-regional-conflict?traffic_source=rss",
       "published_at": "2026-11-03T06:55:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'דה, סעודיה",
       "lat": 21.5504,
       "lon": 39.1742
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אל-ח'ובאר, סעודיה",
       "lat": 26.304,
       "lon": 50.196
      }
     ]
    },
    {
     "id": "YEMEN-11031012-02",
     "title": "לחימה מתחדשת ואזורים נפגעים סביב תעז",
     "summary": "קרבות ולחימה מחודשת באזור תעז הותירו ילדים במצוקה נפשית וגרמו לנפגעים אזרחיים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-15T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T09:02:42+00:00",
     "last_update_at": "2026-11-03T09:02:42+00:00",
     "what_is_not_verified": "היקף הנפגעים המדויק באוכלוסייה האזרחית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/death-closer-school-yemens-children-struggle-war-trauma",
       "published_at": "2026-11-03T09:02:42+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-11031012-03",
     "title": "תיעוד הפרות ופשעים חות'יים בלחימה",
     "summary": "תיעוד של הפרות ופשעים המיוחסים לכוחות החות'יים באזורי תעז ולחג בתוך פרק זמן קצר.",
     "axis": "תימן והחות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T07:39:20+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T07:39:20+00:00",
     "last_update_at": "2026-11-03T07:39:20+00:00",
     "what_is_not_verified": "פרטי כל אירוע ואירוע המדווחים ברשת הזכויות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_54223a9137e1b3c4",
       "url": "https://www.sabanew.net/viewstory/155103",
       "published_at": "2026-11-03T07:39:20+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "לחג, תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-11031012-04",
     "title": "פינוי מוקשים שהונחו על ידי החות'ים",
     "summary": "פעילות פינוי מוקשים המדווחת כמבצע לפינוי אלפי מוקשים שהונחו על ידי המיליציות החות'יות.",
     "axis": "תימן והחות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T06:50:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T06:50:00+00:00",
     "last_update_at": "2026-11-03T06:50:00+00:00",
     "what_is_not_verified": "המיקום המדויק של כל מוקש שפונה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_e6e445652768c0eb",
       "url": "https://www.sabanew.net/viewstory/155100",
       "published_at": "2026-11-03T06:50:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11031012-05",
     "title": "כוחות ממשלת תימן מדווחים על התקדמות בלחג",
     "summary": "כוחות הממשלה המוכרת בינלאומית דיווחו על השתלטות מחדש על עמדות באזור אל-מקטירה שבצפון מחוז לחג והדפת המיליציות החות'יות.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T04:52:37+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T04:52:37+00:00",
     "last_update_at": "2026-11-03T04:52:37+00:00",
     "what_is_not_verified": "שליטה מלאה בשטח לאורך זמן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_bf0220de7cae86ec",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-gains-yemens",
       "published_at": "2026-11-03T04:52:37+00:00"
      }
     ],
     "places": [
      {
       "name": "לחג, תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-11031012-06",
     "title": "הצבא התימני מדווח על אלפי מבצעים נגד החות'ים",
     "summary": "הצבא התימני טען כי ביצע כאלפי פעולות ומבצעים נגד יעדים חות'יים במסגרת מבצע 'שחר תימן' במספר חזיתות.",
     "axis": "תימן והחות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T03:11:58+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T03:11:58+00:00",
     "last_update_at": "2026-11-03T03:11:58+00:00",
     "what_is_not_verified": "מספר הנפגעים והכלים המדויקים שנטען כי נפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_36fc97832f440ad1",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-army-says-it-launched-nearly-1000-operations-against-houthi",
       "published_at": "2026-11-03T03:11:58+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
      {
       "name": "אל-ביצא, תימן",
       "lat": 13.9881,
       "lon": 45.5729
      }
     ]
    },
    {
     "id": "YEMEN-11031012-07",
     "title": "תקיפות אוויריות מערבית לתעז",
     "summary": "כוחות הממשלה תקפו מהאוויר עמדות וכלי רכב של החות'ים באזור ג'בל חבשי מערבית לתעז, ודווח על פגיעה במפעל נעליים בצפון תעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T02:17:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T02:17:17+00:00",
     "last_update_at": "2026-11-03T02:17:17+00:00",
     "what_is_not_verified": "זהות האחראים המדויקים לכל פגיעה במפעל האזרחי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-launch-strikes-houthi-positions-west-taiz",
       "published_at": "2026-11-03T02:17:17+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "ג'בל חבשי, תימן",
       "lat": 13.465,
       "lon": 43.881
      }
     ]
    },
    {
     "id": "YEMEN-11031012-08",
     "title": "התקדמות החות'ים לעבר עדן",
     "summary": "מקורות צבאיים דיווחו שהחות'ים התקדמו לעבר מרחק של כ-80 קילומטרים מעדן, תוך איומים על נתיבי תחבורה ואזורים אסטרטגיים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T22:36:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T22:36:06+00:00",
     "last_update_at": "2026-11-02T22:36:06+00:00",
     "what_is_not_verified": "יציבות השליטה בשטח המקודם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemens-houthis-advance-within-80-km-aden-sources-say",
       "published_at": "2026-11-02T22:36:06+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "מצר באב אל-מנדב, תימן",
       "lat": 12.6671,
       "lon": 43.4565
      }
     ]
    },
    {
     "id": "YEMEN-11031012-09",
     "title": "פניית תימן לאו\"ם ולקהילה הבינלאומית",
     "summary": "ממשלת תימן קראה למועצת הביטחון ולקהילה הבינלאומית לתאם איתה כדי למנוע סיוע צבאי איראני לחות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T22:04:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T22:04:41+00:00",
     "last_update_at": "2026-11-02T22:04:41+00:00",
     "what_is_not_verified": "תגובת האו\"ם המלאה לקריאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0f586427d016a5dc",
       "url": "https://www.sabanew.net/viewstory/155089",
       "published_at": "2026-11-02T22:04:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11031012-10",
     "title": "הצהרת הכוחות המסוימים בתימן על יכולות טילים",
     "summary": "הכוחות המזוינים פרסמו אזהרה כי ינקטו צעדים מבצעיים נגד יכולות טילים של המיליציות החות'יות.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T19:35:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T19:35:50+00:00",
     "last_update_at": "2026-11-02T19:35:50+00:00",
     "what_is_not_verified": "טיב האמצעים שיושמו בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6b8efe02b21dd3b7",
       "url": "https://www.sabanew.net/viewstory/155080",
       "published_at": "2026-11-02T19:35:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11031012-11",
     "title": "פגיעה באזרחים כתוצאה מנפילת טילים דרומית לתעז",
     "summary": "נפגעים אזרחיים, כולל ילדים, כתוצאה מנפילת טיל חות'י לאחר כשל שיגור דרומית לתעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T19:24:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T19:24:40+00:00",
     "last_update_at": "2026-11-02T19:24:40+00:00",
     "what_is_not_verified": "נסיבות כשל השיגור המדויקות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_612dbb577630ab13",
       "url": "https://www.sabanew.net/viewstory/155076",
       "published_at": "2026-11-02T19:24:40+00:00"
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
     "id": "YEMEN-11031012-12",
     "title": "נפגעים מירי צלפים ומוקשים בתעז",
     "summary": "ארבעה ילדים נפצעו מירי צלפים של החות'ים ומפיצוץ מוקש קרקע בתעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T18:24:27+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T18:24:27+00:00",
     "last_update_at": "2026-11-02T18:24:27+00:00",
     "what_is_not_verified": "פרטי זיהוי הצלף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_304ae2a328b1d651",
       "url": "https://www.sabanew.net/viewstory/155072",
       "published_at": "2026-11-02T18:24:27+00:00"
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
     "id": "YEMEN-11031012-13",
     "title": "תקיפה על רכב סעודי בידי החות'ים",
     "summary": "כוחות חות'יים תקפו רכב סעודי במסגרת העימותים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T17:30:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T17:30:01+00:00",
     "last_update_at": "2026-11-02T17:30:01+00:00",
     "what_is_not_verified": "מיקום מדויק של התקיפה ברכב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49229",
       "published_at": "2026-11-02T17:30:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11031012-14",
     "title": "תקיפות כטב\"מים של החות'ים לעבר שדות תעופה בסעודיה",
     "summary": "המורדים החות'ים שיגרו כטב\"מים וטענו כי פגעו בשדות התעופה בג'זאן ובדמאם בסעודיה.",
     "axis": "סעודיה והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T17:17:53+00:00",
     "last_update_at": "2026-11-02T17:17:53+00:00",
     "what_is_not_verified": "מידת הנזק המדויק בכל שדה תעופה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-says-intensive-negotiations-us-avert-war",
       "published_at": "2026-11-02T17:17:53+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'זאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      },
      {
       "name": "דמאם, סעודיה",
       "lat": 26.4368,
       "lon": 50.104
      }
     ]
    },
    {
     "id": "YEMEN-11031012-15",
     "title": "מתקפת טילים של החות'ים על מרפאה בלחג ותקיפות נגד בסעודיה",
     "summary": "הרוגים ופצועים במתקפת טילים חות'ית על מרפאה בראס אל-ארה שבלחג, לצד תקיפות של הקואליציה בראשות סעודיה על נמל חודידה ואתרים נוספים בתימן.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T12:15:21+00:00",
     "last_update_at": "2026-11-02T12:15:21+00:00",
     "what_is_not_verified": "נתוני הנפגעים המלאים והסופיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/three-killed-houthis-strike-yemen-health-clinic-report",
       "published_at": "2026-11-02T12:15:21+00:00"
      }
     ],
     "places": [
      {
       "name": "לחג, תימן",
       "lat": 13.0578,
       "lon": 44.8836
      },
      {
       "name": "חודידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "ראס אל-ארה, תימן",
       "lat": 12.6084,
       "lon": 43.9158
      }
     ]
    },
    {
     "id": "YEMEN-11031012-16",
     "title": "החמרת המשבר ההומניטרי ועצור סביב תעז",
     "summary": "האו\"ם ומקורות שונים דיווחו על החמרת המשבר ההומניטרי בעיר תעז בדרום-מערב תימן בשל כיתור כוחות חות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T12:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T12:00:00+00:00",
     "last_update_at": "2026-11-02T12:00:00+00:00",
     "what_is_not_verified": "היקף האספקה החסרה המדויק לתושבים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/11/1168723",
       "published_at": "2026-11-02T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    }
   ],
   "not_verified": [
    "נתוני הנפגעים המדויקים בכל תקיפה צבאית של הצדדים",
    "מספר כלי הרכב והציוד שהושמדו בפועל במבצעים השונים",
    "היקף התמיכה הלוגיסטית האיראנית בפועל"
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "פגיעה בתשתיות ונכסים צבאיים של סעודיה"
     ],
     "inferred": [
      "הרחבת השליטה הטריטוריאלית בדרום תימן ובנתיבי הים האדום",
      "הפעלת לחץ על סעודיה ועל הממשלה המוכרת בינלאומית"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות לעבר אזורים מרכזיים בדרום תימן",
      "המשך שיגורים לעבר יעדים סעודיים וימיים"
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה בראשות סעודיה",
     "declared": [
      "נטרול יכולות טילים ומשאבים של החות'ים",
      "הגנה על תשתיות חיוניות ותושבים"
     ],
     "inferred": [
      "בלימת ההתקדמות החות'ית לעבר מוקדי שלטון כמו עדן",
      "מניעת קבלת סיוע צבאי חיצוני לחות'ים"
     ],
     "forecast": [
      "הגברת תקיפות האוויר והמבצעים הקרקעיים נגד מעוזי החות'ים",
      "פנייה מתמשכת לגורמים בינלאומיים לבלימת הפעילות החות'ית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/sports/2026/11/3/afc-reschedules-asian-cup-2027-in-saudi-arabia-amid-regional-conflict?traffic_source=rss",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/asian-cup-latest-event-saudi-arabia-be-postponed-over-safety",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-launch-strikes-houthi-positions-west-taiz",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/three-killed-houthis-strike-yemen-health-clinic-report",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155072",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49229",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/11/1168723",
     "accessed_at": "2026-11-03T10:12:59+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T20:40:22+00:00",
  "changes": {
   "YEMEN-11031012-01": {
    "kind": "new"
   },
   "YEMEN-11031012-02": {
    "kind": "new"
   },
   "YEMEN-11031012-03": {
    "kind": "new"
   },
   "YEMEN-11031012-04": {
    "kind": "new"
   },
   "YEMEN-11031012-05": {
    "kind": "new"
   },
   "YEMEN-11031012-06": {
    "kind": "new"
   },
   "YEMEN-11031012-07": {
    "kind": "possible",
    "prev": "תקיפות אוויריות של הקואליציה בהובלת סעודיה בנמל חודיידה ובאתרי נפט",
    "score": 0.467
   },
   "YEMEN-11031012-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "התקדמות כוחות החות'ים למרחק כשמונים קילומטרים מעדן והידוק המצור על תעז",
    "score": 1.0
   },
   "YEMEN-11031012-09": {
    "kind": "new"
   },
   "YEMEN-11031012-10": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הודעת צבא תימן על צעדים לנטרול יכולות הטילים של החות'ים",
    "score": 1.0
   },
   "YEMEN-11031012-11": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "נפילת טיל כושל של החות'ים באזור תעז",
    "score": 1.0
   },
   "YEMEN-11031012-12": {
    "kind": "new"
   },
   "YEMEN-11031012-13": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פשיטות קרקעיות של החות'ים על מוצבים צבאיים בגבול סעודיה",
    "score": 1.0
   },
   "YEMEN-11031012-14": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "שיגורי כטב\"מים של החות'ים לעבר יעדים בסעודיה",
    "score": 1.0
   },
   "YEMEN-11031012-15": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פגיעת טיל חות'י במרפאה בדרום תימן",
    "score": 1.0
   },
   "YEMEN-11031012-16": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-03T0959__iran-202611030959.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-03T09:59:47+00:00",
   "window": {
    "from": "2026-11-02T09:59:47+00:00",
    "to": "2026-11-03T09:59:47+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611030959"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך על רקע תקיפות אמריקאיות מוגבלות באיראן ומאמצים דיפלומטיים עקיפים שנמשכים סביב סוגיות הגרעין והשליטה במצר הורמוז. במקביל, בכירים באיראן משמיעים איומים להרחיב את טווח הלחימה למדינות אירופה ולארה\"ב, בעוד שוק האנרגיה והכלכלה העולמית מושגים קשות מהמתיחות הממושכת במפרץ.",
   "fronts": [
    {
     "name": "חזית איראן - ארה\"ב",
     "status": "פעיל עם תקיפות מוגבלות וחילופי איומים"
    },
    {
     "name": "חזית מצר הורמוז והכלכלה הימית",
     "status": "חסום או מנוטרל חלקית תחת איומים הדדיים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11030959-01",
     "title": "תקיפות אמריקאיות באי קשם ובבנדר לנגה",
     "summary": "צבא ארה\"ב ביצע תקיפות מוגבלות והגנתיות באיראן בתגובה לירי לעבר נכסים וכלי טיס אמריקאיים.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T02:23:43+00:00",
     "last_update_at": "2026-11-03T08:14:14+00:00",
     "what_is_not_verified": "היקף הנזק המדויק וזהות הנכסים שנפגעו באופן מלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-659",
       "published_at": "2026-11-03T08:14:14+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/03/us-strikes-irans-qeshm-island",
       "published_at": "2026-11-03T08:13:46+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-carries-out-defensive-strikes-irans-qeshm-island-officials-say",
       "published_at": "2026-11-03T05:46:31+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cx240mrm3g8vo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-03T03:39:08+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21764581",
       "published_at": "2026-11-03T02:23:43+00:00"
      }
     ],
     "places": [
      {
       "name": "אי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      },
      {
       "name": "בנדר לנגה, איראן",
       "lat": 26.5621,
       "lon": 54.8838
      }
     ]
    },
    {
     "id": "IRAN-11030959-02",
     "title": "איומים איראניים על הרחבת המלחמה לאירופה וארה\"ב",
     "summary": "גורמים צבאיים ופרלמנטריים באיראן איימו כי עימות עתידי יתרחב מעבר למזרח התיכון ויכלול תקיפות על מתקנים אמריקאיים ואירופיים.",
     "axis": "איראן מול ארה\"ב ואירופה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T08:14:14+00:00",
     "last_update_at": "2026-11-03T09:56:49+00:00",
     "what_is_not_verified": "האם איראן אכן מחזיקה ביכולות מבצעיות מדויקות לפגוע באירופה ובארה\"ב באמצעות טילים בין-יבשתיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611036564",
       "published_at": "2026-11-03T09:56:49+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133016",
       "published_at": "2026-11-03T09:28:24+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-659",
       "published_at": "2026-11-03T08:14:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11030959-03",
     "title": "הצעת איראן לתנאים לפתיחת מצר הורמוז",
     "summary": "איראן הציעה תוכנית עבודה לפתיחת מצר הורמוז ולחידוש שיחות הגרעין בתמורה להיענות לדרישותיה.",
     "axis": "איראן מול ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T17:04:54+00:00",
     "last_update_at": "2026-11-03T07:47:09+00:00",
     "what_is_not_verified": "האם ארה\"ב או בעלות בריתה יסכימו לתנאים שהציגה טהרן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133013",
       "published_at": "2026-11-03T07:47:09+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261102-iran-engages-us-in-intensive-negotiations-to-avert-fresh-war-outbreak",
       "published_at": "2026-11-02T17:42:22+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/video/20261102-iran-offers-deal-on-hormuz-strait-netanyahu-wants-to-finish-the-job",
       "published_at": "2026-11-02T17:04:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11030959-04",
     "title": "אימון צבאי של משמרות המהפכה בחמדאן",
     "summary": "נצפו טילים בשמי העיר חמדאן באיראן במסגרת אימון של משמרות המהפכה.",
     "axis": "איראן פנים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T16:58:54+00:00",
     "last_update_at": "2026-11-02T16:58:54+00:00",
     "what_is_not_verified": "לא מאומת האם מדובר באימון שגרתי בלבד או בהיערכות מיוחדת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49227",
       "published_at": "2026-11-02T16:58:54+00:00"
      }
     ],
     "places": [
      {
       "name": "חמדאן, איראן",
       "lat": 34.9726,
       "lon": 48.6564
      }
     ]
    }
   ],
   "not_verified": [
    "ה",
    "ט",
    "ע",
    "נ",
    "ה",
    "ש",
    "ל",
    "ח",
    "ב",
    "ר",
    "ה",
    "פ",
    "ר",
    "ל",
    "מ",
    "נ",
    "ט",
    "ה",
    "א",
    "י",
    "ר",
    "א",
    "נ",
    "י",
    "ל",
    "פ",
    "י",
    "ה",
    "א",
    "י",
    "ר",
    "א",
    "ן"
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על המדינה מפני תקיפות זרות",
      "דרישה להיענות לתנאיה כתנאי לפתיחת מצר הורמוז",
      "איום בהרחבת זירת הלחימה לאירופה ולארה\"ב"
     ],
     "inferred": [
      "שאיפה להסרת סנקציות ולבלום את הדרישות המערביות במו\"מ",
      "ניסיון להפעיל לחץ כלכלי על המערב באמצעות שיבוש נתיבי האנרגיה"
     ],
     "forecast": [
      "המשך שימוש באיומי טילים ובהסלמה ימית כדי לשפר עמדות מיקוח",
      "החרפת הרטוריקה נגד אירופה וארה\"ב"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הגנה על נכסים וכלים צבאיים באזור מפני תקיפות איראניות",
      "מניעת התבססות גרעינית צבאית איראנית"
     ],
     "inferred": [
      "שמירה על הרתעה באמצעות תקיפות נקודתיות מוגבלות מבלי להיגרר למלחמה כוללת לפני בחירות האמצע",
      "הפעלת לחץ מרבי על טהרן לצורך הגעה להסכם נוח"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות וממוקדות אם יימשכו האיומים או הירי לעבר כוחותיה",
      "המתנה לתוצאות הפוליטיות הפנימיות בארה\"ב לשם גיבוש מדיניות המשך"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/us-carries-out-defensive-strikes-irans-qeshm-island-officials-say",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cx240mrm3g8vo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/video/20261102-iran-offers-deal-on-hormuz-strait-netanyahu-wants-to-finish-the-job",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/03/us-strikes-irans-qeshm-island",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611036564",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21764581",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-659",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133013",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49227",
     "accessed_at": "2026-11-03T09:59:47+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T20:29:48+00:00",
  "changes": {
   "IRAN-11030959-01": {
    "kind": "new"
   },
   "IRAN-11030959-02": {
    "kind": "new"
   },
   "IRAN-11030959-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצעה איראנית לפתיחת מצר הורמוז וחידוש שיחות תוך יומיים",
    "score": 1.0
   },
   "IRAN-11030959-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "אימון טילים של משמרות המהפכה באיראן",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-03T1011__ukraine-202611031011.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-03T10:11:20+00:00",
   "window": {
    "from": "2026-11-02T10:11:20+00:00",
    "to": "2026-11-03T10:11:20+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611031011"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה ממשיכה להתאפיין בתקיפות אוויריות נרחבות של רוסיה על תשתיות אנרגיה, בתי חולים ומרכזים הומניטריים באוקראינה, לצד תקיפות נגד של כטב\"מים אוקראיניים על מתקני זיקוק בתוך רוסיה. במקביל, לאחר פקיעת הפוגה מקומית קצרה באולשקי, חודשו העימותים בחזית חרסון ודונייצק, בעוד המעצמות המערביות וארה\"ב מקדמות פלטפורמות דיפלומטיות לקראת שיחות משולשות ודיונים על ערבויות ביטחוניות.",
   "fronts": [
    {
     "name": "חזית המזרח (דונייצק וחרקוב)",
     "status": "פעילה עם לוחמה הנדסית ותקיפות טילים"
    },
    {
     "name": "חזית הדרום (זפוריז'יה וחרסון)",
     "status": "פעילה הכוללת תקיפות על מרכזים אזרחיים וחידוש עימותים לאחר הפוגה"
    },
    {
     "name": "עומק רוסיה (ירוסלבל)",
     "status": "תקיפות אוויריות אוקראיניות על תשתיות אנרגיה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11031011-01",
     "title": "תקיפות רוסיות על תשתית האנרגיה באוקראינה",
     "summary": "רוסיה ביצעה תקיפות מרובות על תשתיות אנרגיה ומתקני חשמל במספר מחוזות באוקראינה",
     "axis": "תשתיות ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T08:44:00+00:00",
     "last_update_at": "2026-11-03T09:59:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכל מתקן אינו מאומת לחלוטין מחוץ להודעות הרשמיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4180832-fm-sybiha-calls-russias-deliberate-prewinter-attacks-on-ukraines-energy-infrastructure-clear-sign-of-genocide.html",
       "published_at": "2026-11-03T09:59:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180773-russian-forces-damage-dtek-facility-in-southern-odesa-region.html",
       "published_at": "2026-11-03T08:58:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8060994/",
       "published_at": "2026-11-03T08:44:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-11031011-02",
     "title": "תקיפה רוסית על הוספיס ומתקנים רפואיים בדניפרו ובחרקוב",
     "summary": "טילים רוסיים פגעו בהוספיס לחולים סופניים ובמבנים רפואיים בדניפרו ובחרקוב וגרמו לנפגעים",
     "axis": "עורף ואוכלוסייה אזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T07:29:00+00:00",
     "last_update_at": "2026-11-03T09:08:00+00:00",
     "what_is_not_verified": "מספר הפצועים המדויק והנזק הסופי מחוץ לדיווחים הרשמיים המקומיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8061000/",
       "published_at": "2026-11-03T09:08:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/03/russia-attack-damages-hospital-in-ukraine-s-kharkiv-over-60-injured",
       "published_at": "2026-11-03T08:23:09+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180763-russian-strike-on-kharkiv-hospital-raises-injury-toll-to-73.html",
       "published_at": "2026-11-03T07:29:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      },
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-11031011-03",
     "title": "תקיפה רוסית על מרכז סיוע הומניטרי בקמישובוחה",
     "summary": "הפצצה רוסית פגעה במרכז חלוקת סיוע ובמקלט סמוך במחוז זפוריז'יה והרגה עשרות בני אדם",
     "axis": "עורף ואוכלוסייה אזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T01:13:52+00:00",
     "last_update_at": "2026-11-03T08:53:04+00:00",
     "what_is_not_verified": "הזהות המלאה של כלל ההרוגים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/video/2026/nov/03/rubble-deadly-strike-ukrainian-aid-centre-video",
       "published_at": "2026-11-03T08:53:04+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/03/russia-bombs-ukrainian-aid-centre-komyshuvakha",
       "published_at": "2026-11-03T01:13:52+00:00"
      }
     ],
     "places": [
      {
       "name": "קמישובוחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11031011-04",
     "title": "תקיפת כטב\"מים אוקראינית על בית הזיקוק בירוסלבל",
     "summary": "כטב\"מים אוקראיניים תקפו את בית הזיקוק בסלאבנפט-יאנוס בירוסלבל וגרמו לשריפה גדולה ולפצועים",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T02:35:47+00:00",
     "last_update_at": "2026-11-03T08:31:33+00:00",
     "what_is_not_verified": "טענות על השמדה מוחלטת של המתקן אינן מאומתות מעבר לדיווחים על שריפה ונזק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/03/ukrainian-drone-strike-sparks-major-fire-at-one-of-russia-s-largest-oil-refineries",
       "published_at": "2026-11-03T08:31:33+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49252",
       "published_at": "2026-11-03T03:58:45+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49249",
       "published_at": "2026-11-03T02:35:47+00:00"
      }
     ],
     "places": [
      {
       "name": "ירוסלבל, רוסיה",
       "lat": 57.6264,
       "lon": 39.8934
      }
     ]
    },
    {
     "id": "UKRAINE-11031011-05",
     "title": "חשיפת מזימת משקפיים ממולכדים בחזית",
     "summary": "רוסיה הודיעה שסיכלה מזימה אוקראינית להעברת משקפיים ממולכדים למפעילי רחפנים רוסים",
     "axis": "לוחמת רשת וחזית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T08:13:52+00:00",
     "last_update_at": "2026-11-03T08:13:52+00:00",
     "what_is_not_verified": "האם חיילים רוסים נפגעו בפועל מהמזימה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/h1fzuzvpze",
       "published_at": "2026-11-03T08:13:52+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11031011-06",
     "title": "בניית מנהרה תת-קרקעית במחוז דונייצק",
     "summary": "הכוחות האוקראיניים השלימו הקמת מנהרה באורך כשישה קילומטרים במחוז דונייצק לתנועה וללוגיסטיקה",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T08:34:00+00:00",
     "last_update_at": "2026-11-03T08:34:00+00:00",
     "what_is_not_verified": "לא צוינו פרטים בלתי מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8060992/",
       "published_at": "2026-11-03T08:34:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11031011-07",
     "title": "הכרזת פגישה משולשת באבו דאבי ודיונים בבריסל",
     "summary": "ארה\"ב הודיעה על קיום שיחות משולשות בין ארה\"ב, רוסיה ואוקראינה באבו דאבי ודיוני נאט\"ו בבריסל על ערבויות ביטחוניות",
     "axis": "דיפלומטיה ומדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T23:37:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T23:37:22+00:00",
     "last_update_at": "2026-11-03T08:38:00+00:00",
     "what_is_not_verified": "האם השיחות אכן יתקיימו ללא הפרעות מצב ביטחוני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8060993/",
       "published_at": "2026-11-03T08:38:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/03/trilateral-talks-between-russia-ukraine-and-us-set-for-november-10-11-in-abu-dhabi",
       "published_at": "2026-11-03T08:15:38+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bjip6quafe",
       "published_at": "2026-11-03T03:09:03+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/03/ukraine-war-briefing-us-to-mediate-talks-with-kyiv-and-moscow-in-abu-dhabi-next-week-says-witkoff",
       "published_at": "2026-11-03T02:00:38+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21764395",
       "published_at": "2026-11-02T23:37:22+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      },
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    }
   ],
   "not_verified": [
    "היקף פגיעות מדויק של חיילים רוסים במזימת המשקפיים הממולכדים",
    "מידת ההצלחה העתידית של פיתוח מנועי טורבו-סילון באוקראינה לייצור מיירטים",
    "פרטים מדויקים על מעורבות פוליטית חיצונית בהפגת אולשקי"
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
     "value": 1.1216,
     "unit": "USD",
     "change_pct": 0.39,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בתשתיות אסטרטגיות וצבאיות של אוקראינה"
     ],
     "inferred": [
      "שחיקת כושר העמידה של האוכלוסייה האזרחית באמצעות פגיעה במערכות חימום ואנרגיה לקראת החורף",
      "שיפור עמדות בשטח במהלך הפוגות זמניות"
     ],
     "forecast": [
      "המשך גלי תקיפות אוויריות כבדות על מתקני אנרגיה ואוכלוסייה",
      "המשך לחץ צבאי בחזיתות המזרחיות והדרומיות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שמי המדינה ופיתוח אמצעי יירוט עצמאיים נגד כטב\"מים"
     ],
     "inferred": [
      "שיבוש כלכלת האנרגיה הרוסית באמצעות תקיפת בתי זיקוק בעומק רוסיה",
      "שמירה על קשר דיפלומטי להשגת ערבויות ביטחוניות וסיוע מערבי"
     ],
     "forecast": [
      "הרחבת הייצור ההמוני של מיירטי כטב\"מים עד סוף השנה",
      "השתתפות בשיחות דיפלומטיות בתיווך אמריקני באבו דאבי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/03/ukraine-war-briefing-us-to-mediate-talks-with-kyiv-and-moscow-in-abu-dhabi-next-week-says-witkoff",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21764395",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/03/trilateral-talks-between-russia-ukraine-and-us-set-for-november-10-11-in-abu-dhabi",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/03/8060993/",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49249",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4180763-russian-strike-on-kharkiv-hospital-raises-injury-toll-to-73.html",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjip6quafe",
     "accessed_at": "2026-11-03T10:11:20+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T20:34:06+00:00",
  "changes": {
   "UKRAINE-11031011-01": {
    "kind": "new"
   },
   "UKRAINE-11031011-02": {
    "kind": "new"
   },
   "UKRAINE-11031011-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה רוסית קטלנית על מרכז סיוע הומניטרי בבית ספר בקומישובאחה",
    "score": 1.0
   },
   "UKRAINE-11031011-04": {
    "kind": "new"
   },
   "UKRAINE-11031011-05": {
    "kind": "new"
   },
   "UKRAINE-11031011-06": {
    "kind": "new"
   },
   "UKRAINE-11031011-07": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-03T1014__north-202611031014.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-03T10:14:40+00:00",
   "window": {
    "from": "2026-11-02T10:14:40+00:00",
    "to": "2026-11-03T10:14:40+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611031014"
   },
   "summary": "בזרוע הצפונית מתנהלת מתיחות מתמשכת הכוללת תקיפות והפרות הפסקת אש מצד ישראל בדרום לבנון ובקוניטרה, לצד מאמצים של חיזבאללה לשקם את יכולאתה ולחלק כספי שיקום. במקביל, ממשלת לבנון פועלת מול סוריה להחזרת פליטים ונוקטת צעדים כלכליים נגד בנקים המזוהים עם איראן.",
   "fronts": [
    {
     "name": "החזית הלבנונית-ישראלית",
     "status": "פעילה חלקית עם הפרות הפסקת אש ותקיפות"
    },
    {
     "name": "החזית הסורית-ישראלית",
     "status": "פעילה עם חדירות ותקיפות בקוניטרה"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "מתיחות פוליטית וכלכלית סביב פליטים, חיזבאללה וגופים איראניים"
    }
   ],
   "events": [
    {
     "id": "NORTH-11031014-01",
     "title": "פעילות צק\"ח 7 בלבנון",
     "summary": "כוחות צק\"ח 7 סיכמו שמונה חודשי לחימה בלבנון שכללו הגעה למקומות כמו קנטרה, הליטאני והבופור.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T10:02:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T10:02:16+00:00",
     "last_update_at": "2026-11-03T10:02:16+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25536",
       "published_at": "2026-11-03T10:02:16+00:00"
      }
     ],
     "places": [
      {
       "name": "קנטרה, לבנון",
       "lat": 33.2735,
       "lon": 35.4591
      },
      {
       "name": "ליטאני, לבנון",
       "lat": 33.552,
       "lon": 35.6924
      },
      {
       "name": "בופור, לבנון",
       "lat": 33.3243,
       "lon": 35.5321
      }
     ]
    },
    {
     "id": "NORTH-11031014-02",
     "title": "ביטול רישיון בנק סאדראת איראן בלבנון",
     "summary": "הבנק המרכזי של לבנון ביטל את רישיון הפעילות המקומי של בנק סאדראת איראן במטרה להגן על המערכת הפיננסית ולמנוע סיכוני סנקציות.",
     "axis": "לבנון - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-15T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T09:18:54+00:00",
     "last_update_at": "2026-11-03T09:18:54+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_karim_souaid",
       "url": "https://israel-alma.org/lebanon-revokes-bank-saderat-irans-license-but-the-real-test-is-hezbollahs-al-qard-al-hassan/",
       "published_at": "2026-11-03T09:18:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "בעלבכ, לבנון",
       "lat": 34.0097,
       "lon": 36.2117
      },
      {
       "name": "צידון, לבנון",
       "lat": 33.5642,
       "lon": 35.3753
      }
     ]
    },
    {
     "id": "NORTH-11031014-03",
     "title": "תקיפות והפרות הפסקת אש בדרום לבנון",
     "summary": "כוחות צבא ישראל הפגיזו בארטילריה וביצעו ירי מקלעים ומבצעים צבאיים במספר מרחבים בדרום לבנון, תוך הפרות של הסכם הפסקת האש.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T08:13:39+00:00",
     "last_update_at": "2026-11-03T08:24:50+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f882c63993d1048c",
       "url": "https://english.almanar.com.lb/article/146217/",
       "published_at": "2026-11-03T08:24:50+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_e0d95edb402ae8b4",
       "url": "https://english.almanar.com.lb/article/146182/",
       "published_at": "2026-11-03T08:13:39+00:00"
      }
     ],
     "places": [
      {
       "name": "אנגל/חיאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      }
     ]
    },
    {
     "id": "NORTH-11031014-04",
     "title": "מחלוקת בין חיזבאללה ואמל במועצת חלוסיה",
     "summary": "נציגי תנועת אמל במועצת הכפר חלוסיה איימו להתפטר בעקבות סכסוך עם נציגי חיזבאללה על שם הרחוב הראשי וסוגיות ציבוריות.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T06:54:50+00:00",
     "last_update_at": "2026-11-03T06:54:50+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/hezbollah-amal-tensions-surface-again-in-southern-lebanon/",
       "published_at": "2026-11-03T06:54:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11031014-05",
     "title": "פגישה בין נשיא לבנון למנהל המרכז למדיניות הגירה",
     "summary": "נשיא לבנון ז'וזף עון הצהיר כי לבנון אינה יכולה להכיל פליטים סורים נוספים וקרא לקהילה הבינלאומית להפנות סיוע לסוריה כדי לעודד את חזרתם.",
     "axis": "לבנון - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-03T06:28:40+00:00",
     "last_update_at": "2026-11-03T06:28:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966158/aoun-lebanon-can-no-longer-accommodate-more-syrian-refugees/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966158",
       "published_at": "2026-11-03T06:28:40+00:00"
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
     "id": "NORTH-11031014-06",
     "title": "חקירת פשעי מלחמה בצרפת על תקיפה בלבנון",
     "summary": "צרפת פתחה בחקירה שיפוטית בעקבות תלונה על פשעי מלחמה שהגיש אמן צרפתי-לבנוני על פגיעה בבניין מגורים בביירות בשנת 2024.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-03T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-03T06:03:07+00:00",
     "last_update_at": "2026-11-03T06:03:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_clemence_bectarte",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966145/french-judges-probe-war-crimes-complaint-against-israeli-army-in-leban/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966145",
       "published_at": "2026-11-03T06:03:07+00:00"
      }
     ],
     "places": [
      {
       "name": "פריז, צרפת",
       "lat": 48.8535,
       "lon": 2.3484
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11031014-07",
     "title": "אזהרות ישראליות לממשלת לבנון בנוגע לחיזבאללה",
     "summary": "ירושלים העבירה מסרים לממשלת לבנון לפיהם תגובה צבאית קשה תופעל אם חיזבאללה יאתגר את צה\"ל בקו הצהוב או בעורף, בזמן שחיזבאללה ממשיך בשיקום יכולותיו.",
     "axis": "ישראל - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T20:50:54+00:00",
     "last_update_at": "2026-11-02T20:50:54+00:00",
     "what_is_not_verified": "חידוש פסי ייצור ושיקום יכולות חיזבאללה צוין לפי מקורות מודיעיניים או דיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383959873",
       "published_at": "2026-11-02T20:50:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ירושלים, ישראל",
       "lat": 31.7788,
       "lon": 35.2258
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11031014-08",
     "title": "חלוקת כספי סיוע של חיזבאללה לנפגעים בדאחיה",
     "summary": "ראש המועצה המבצעת של חיזבאללה, עלי דעמוש, הכריז על חלוקת סיוע כספי למשפחות שבתיהן נהרסו במלחמה בדאחיה של ביירות.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T15:39:59+00:00",
     "last_update_at": "2026-11-02T15:39:59+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132992",
       "published_at": "2026-11-02T15:39:59+00:00"
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
     "id": "NORTH-11031014-09",
     "title": "שרפה במחסן זיקוקים בג'ורה אל-בלוט",
     "summary": "אש פרצה במחסן זיקוקים הממוקם מזרחית לביירות באזור ג'ורה אל-בלוט וגרמה להופעת עשן רב.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T08:55:52+00:00",
     "last_update_at": "2026-11-02T14:51:25+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132990",
       "published_at": "2026-11-02T14:51:25+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965972/smoke-seen-over-jouret-el-ballout-caused-by-warehouse-fire-involving-f/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965972",
       "published_at": "2026-11-02T08:55:52+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'ורה אל-בלוט, לבנון",
       "lat": 33.8945,
       "lon": 35.6294
      }
     ]
    },
    {
     "id": "NORTH-11031014-10",
     "title": "הרס מטע חקלאי בדרום לבנון בתקיפה ישראלית",
     "summary": "מטע חקלאי בדרום לבנון בבעלות השף חוסיין פאיאד נפגע ונהרס בתקיפה של כוחות ישראל.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T14:38:57+00:00",
     "last_update_at": "2026-11-02T14:38:57+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/news/dreams-destroyed-lebanese-chef-mourns-orchard-hit-israel",
       "published_at": "2026-11-02T14:38:57+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום לבנון",
       "lat": 33.2481,
       "lon": 35.5119
      }
     ]
    },
    {
     "id": "NORTH-11031014-11",
     "title": "תקיפה ישראלית בעיתא אל-ג'בל",
     "summary": "כוחות ישראל תקפו מבנה בעיתא אל-ג'בל שבדרום לבנון, ככל הנראה לאחר התרעת פינוי.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T14:26:21+00:00",
     "last_update_at": "2026-11-02T14:26:21+00:00",
     "what_is_not_verified": "קיומה של התרעת פינוי מדויקת הוסק מאופי התיעוד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132989",
       "published_at": "2026-11-02T14:26:21+00:00"
      }
     ],
     "places": [
      {
       "name": "עיתא אל-ג'בל, לבנון",
       "lat": 33.0991,
       "lon": 35.3408
      }
     ]
    },
    {
     "id": "NORTH-11031014-12",
     "title": "פגישת שר החוץ הסורי עם משלחת לבנונית בנושא הפליטים",
     "summary": "שר החוץ של סוריה קיבל משלחת לבנונית בראשות סגן ראש ממשלת לבנון לשיחות על סוגיות מינהליות, חברתיות וחינוכיות סביב חזרת פליטים.",
     "axis": "לבנון - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-02T12:50:48+00:00",
     "last_update_at": "2026-11-02T12:50:48+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_anadolu",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-foreign-minister-receives-lebanese-delegation-for-talks-on-refugee-returns/4108809",
       "published_at": "2026-11-02T12:50:48+00:00"
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
     "id": "NORTH-11031014-13",
     "title": "התקדמות כוחות ישראל לקוניטרה",
     "summary": "כוחות צבא ישראל התקדמו לתוך הכפר אל-אסבחה באזור הקפריסאי/כפרי של דרום קוניטרה באמצעות מספר כלי רכב צבאיים.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-02T22:51:40+00:00",
     "last_update_at": "2026-11-02T22:51:40+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_syria_tv_sijil",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-occupation-push-quneitra-syria-syrian-media-report",
       "published_at": "2026-11-02T22:51:40+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "קיומם של פסי ייצור חדשים לטילים ורקטות של חיזבאללה מצפון לליטאני",
    "היקף ההעברות הכספיות המדויק מאיראן לחיזבאללה"
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
     "value": 3.1393,
     "unit": "ILS",
     "change_pct": 0.35,
     "source_id": "src_ecb",
     "as_of": "2026-11-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת אתגורים מצד חיזבאללה בקו הצהוב ובעורף הישראלי"
     ],
     "inferred": [
      "אכיפת הסכמים צבאיים בלבנון ובדרום סוריה באמצעות פעילות מבצעית והתרעות"
     ],
     "forecast": [
      "המשך תקיפות נקודתיות בלבנון ובסוריה במקרה של הפרות מצד חיזבאללה או נוכחות עוינת"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [
      "תמיכה באוכלוסייה שנפגעה ומתן סיוע כספי לתושבי הדאחיה"
     ],
     "inferred": [
      "שיקום תשתיות צבאיות, מילוי מקום מפקדים שחוסלו והיערכות למלחמה עתידית"
     ],
     "forecast": [
      "המשך התעצמות שקטה ולחץ מקומי מול יריבים פוליטיים בלבנון לצד שמירה על פרופיל נמוך מול צה\"ל"
     ]
    },
    {
     "actor": "לבנון (ממשל)",
     "declared": [
      "הגנה על המערכת הפיננסית מסנקציות ודרישה להחזרת פליטים סורים לסוריה"
     ],
     "inferred": [
      "ניסיון לנתק זיקות פיננסיות מסוימות מגורמים איראניים כדי לעמוד בדרישות בינלאומיות"
     ],
     "forecast": [
      "הגברת התיאום עם סוריה בנושא הפליטים והחמרת הפיקוח על גופים פיננסיים מקומיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/hezbollah-amal-tensions-surface-again-in-southern-lebanon/",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/146182/",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syrian-foreign-minister-receives-lebanese-delegation-for-talks-on-refugee-returns/4108809",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965972/smoke-seen-over-jouret-el-ballout-caused-by-warehouse-fire-involving-f/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965972",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-occupation-push-quneitra-syria-syrian-media-report",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/dreams-destroyed-lebanese-chef-mourns-orchard-hit-israel",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132989",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25536",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383959873",
     "accessed_at": "2026-11-03T10:14:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-02T20:42:00+00:00",
  "changes": {
   "NORTH-11031014-01": {
    "kind": "new"
   },
   "NORTH-11031014-02": {
    "kind": "new"
   },
   "NORTH-11031014-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות וירי ארטילרי של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11031014-04": {
    "kind": "new"
   },
   "NORTH-11031014-05": {
    "kind": "new"
   },
   "NORTH-11031014-06": {
    "kind": "new"
   },
   "NORTH-11031014-07": {
    "kind": "new"
   },
   "NORTH-11031014-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הכרזת חזבאללה על חלוקת מענקי סיוע כספי לתושבי הדאחיה",
    "score": 1.0
   },
   "NORTH-11031014-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שריפה ופיצוץ במחסן זיקוקים באזור הר הלבנון",
    "score": 1.0
   },
   "NORTH-11031014-10": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "הרס נרחב למגזר החקלאי בדרום לבנון כתוצאה מהלחימה",
    "score": 1.0
   },
   "NORTH-11031014-11": {
    "kind": "new"
   },
   "NORTH-11031014-12": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "משלחת ממשלתית לבנונית קיימה שיחות בדמשק על השבת פליטים",
    "score": 1.0
   },
   "NORTH-11031014-13": {
    "kind": "new"
   }
  }
 }
};
