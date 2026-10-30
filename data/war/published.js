/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-30T0044__yemen-202610300044.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-30T00:44:39+00:00",
   "window": {
    "from": "2026-10-29T00:44:39+00:00",
    "to": "2026-10-30T00:44:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610300044"
   },
   "summary": "הלחימה בין החות'ים לבין ממשלת תימן והקואליציה בהובלת סעודיה הסלימה בצורה חדה בעקבות קריסת שביתת הנשק. החות'ים הרחיבו את מתקפות הטילים והכטב\"מים לעבר יעדים צבאיים, נמלי תעופה ומתקני נפט בעומק סעודיה ובמקביל תקפו את נמל התעופה בעדן והידקו את המצור על תעז. מנגד, הקואליציה פועלת ליירוט האיומים ומבצעת תקיפות אוויריות בתימן, לצד פעילות צבאית קרקעית של כוחות הממשלה.",
   "fronts": [
    {
     "name": "חזית תימן - ערב הסעודית",
     "status": "הסלמה בתקיפות טילים וכטב\"מים חות'יים לעבר יעדי תשתית, נמלי תעופה וערים, לצד יירוטים ותקיפות אוויריות של הקואליציה"
    },
    {
     "name": "חזית פנים-תימן (תעז ועדן)",
     "status": "עימותים פעילים, הידוק מצור חות'י על תעז ושיגור טילים לעבר נמל התעופה הבינלאומי בעדן"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10300044-01",
     "title": "טענת החות'ים לביצוע שש תקיפות נגד נמלי תעופה ומתקני נפט בסעודיה",
     "summary": "הדובר הצבאי של החות'ים טען כי הארגון ביצע שש תקיפות בסעודיה, כולל שיגור טילים בליסטיים לעבר בתי זיקוק בראס תנורה וראבג', מתקן אראמקו באבקאיק, נמל התעופה הבינלאומי בריאד, מתקפה באמצעות כטב\"ם על נמל תעופה בדמאם ופגיעה במפקדה בנג'ראן.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T21:25:49+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T21:25:49+00:00",
     "last_update_at": "2026-10-30T00:11:20+00:00",
     "what_is_not_verified": "התקיפות לא אושרו רשמית בידי סעודיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/30/houthi-forces-claim-six-attacks-on-saudi-airports-oil-facilities?traffic_source=rss",
       "published_at": "2026-10-30T00:11:20+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-six-attacks-saudi-arabia-airports-and-oil-facilities",
       "published_at": "2026-10-29T21:25:49+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס תנורה, ערב הסעודית",
       "lat": 26.7074,
       "lon": 50.0674
      },
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אבקאיק, ערב הסעודית",
       "lat": 25.9356,
       "lon": 49.6683
      }
     ]
    },
    {
     "id": "YEMEN-10300044-02",
     "title": "יירוט שני טילים בליסטיים שנורו לעבר ריאד",
     "summary": "הקואליציה בהובלת סעודיה מסרה כי מערכות ההגנה האווירית יירטו והשמידו שני טילים בליסטיים ששיגרו החות'ים לעבר הבירה ריאד.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T17:53:58+00:00",
     "last_update_at": "2026-10-29T19:54:16+00:00",
     "what_is_not_verified": "מידת הדיוק של היירוטים והיקף הנזק בשטח אם היה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_3258bc02a71ad281",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/coalition-says-it-shot-down-two-missiles-fired-riyadh",
       "published_at": "2026-10-29T19:54:16+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3258bc02a71ad281",
       "url": "https://www.sabanew.net/viewstory/154859",
       "published_at": "2026-10-29T17:53:58+00:00"
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
     "id": "YEMEN-10300044-03",
     "title": "יירוט טיל שיוט ששוגר לעבר האזור המערבי בסעודיה",
     "summary": "הקואליציה הודיעה על יירוט והשמדה של טיל שיוט ששוגר בידי החות'ים לעבר האזור המערבי.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T23:46:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T23:46:34+00:00",
     "last_update_at": "2026-10-29T23:46:34+00:00",
     "what_is_not_verified": "מיקומו המדויק של היירוט ונתיב הטיל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3484265789e2887d",
       "url": "https://www.sabanew.net/viewstory/154865",
       "published_at": "2026-10-29T23:46:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10300044-04",
     "title": "פיצוצים ואזהרות הגנה אזרחית בריאד ובערים נוספות בסעודיה",
     "summary": "כתבים בריאד דיווחו על שמיעת שמונה פיצוצים לפחות במקביל להתרעות סלולריות מפני איום אווירי עוין, ואזהרות הגנה אזרחית פורסמו בריאד, באל-ח'רג' ובנג'ראן.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T18:31:57+00:00",
     "last_update_at": "2026-10-29T18:31:57+00:00",
     "what_is_not_verified": "מהות הפיצוצים במדויק (נפילות או יירוטים).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-saudi-strike-kills-12-blasts-heard-riyadh",
       "published_at": "2026-10-29T18:31:57+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "נג'ראן, ערב הסעודית",
       "lat": 17.544,
       "lon": 44.2247
      }
     ]
    },
    {
     "id": "YEMEN-10300044-05",
     "title": "טענות לשימוש בחומרים רעילים בהפגזות במחוז תעז",
     "summary": "רשויות מקומיות בתעז והכוחות המזוינים של תימן הודיעו כי הם מתייחסים ברצינות לדיווחים לפיהם החות'ים השתמשו בפגזים המכילים חומרים רעילים אסורים נגד אזרחים ואנשי התנגדות, שגרמו למקרי חנק ועילפון.",
     "axis": "פנים-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T12:43:39+00:00",
     "last_update_at": "2026-10-29T22:40:39+00:00",
     "what_is_not_verified": "אין אימות עצמאי לשימוש בפועל בחומרים רעילים מעבר להודעות הרשמיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3c7f0198baa4fdfe",
       "url": "https://www.sabanew.net/viewstory/154864",
       "published_at": "2026-10-29T22:40:39+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_3c7f0198baa4fdfe",
       "url": "https://www.newarab.com/news/yemeni-authorities-accuse-houthis-using-toxic-substances",
       "published_at": "2026-10-29T12:43:39+00:00"
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
     "id": "YEMEN-10300044-06",
     "title": "הפגזות שוטפות ופגיעה באמבולנסים בתעז",
     "summary": "מושל תעז טען כי החות'ים מפגיזים אזרחים מדי שעה ופוגעים באמבולנסים בעיר.",
     "axis": "פנים-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T22:20:34+00:00",
     "last_update_at": "2026-10-29T22:20:34+00:00",
     "what_is_not_verified": "תדירות ההפגזות והיקף הפגיעה המדויק באמבולנסים לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_a39dd7e40a7e12bc",
       "url": "https://www.sabanew.net/viewstory/154863",
       "published_at": "2026-10-29T22:20:34+00:00"
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
     "id": "YEMEN-10300044-07",
     "title": "תקיפות אוויריות במחוז תעז וטענות לנפגעים",
     "summary": "גורמי בריאות חות'יים דיווחו כי תקיפות סעודיות באזור אל-ברח בנפת מקבנה שבמחוז תעז הביאו למותם של 12 בני אדם ולפציעת שלושה. בנוסף נטען לתקיפה של מפעל צבע באזור.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T12:43:39+00:00",
     "last_update_at": "2026-10-29T18:31:57+00:00",
     "what_is_not_verified": "מניין ההרוגים והאחריות לתקיפה הספציפית נמסרו מצד החות'ים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-saudi-strike-kills-12-blasts-heard-riyadh",
       "published_at": "2026-10-29T18:31:57+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/netanyahu-sows-election-doubts-baseless-arab-fraud-claim",
       "published_at": "2026-10-29T17:51:19+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-authorities-accuse-houthis-using-toxic-substances",
       "published_at": "2026-10-29T12:43:39+00:00"
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
     "id": "YEMEN-10300044-08",
     "title": "מתקפת טילים על נמל התעופה הבינלאומי בעדן",
     "summary": "הצבא התימני והרשויות דיווחו כי שני טילים בליסטיים ששיגרו החות'ים פגעו בנמל התעופה הבינלאומי של עדן, פצעו אזרחים וגרמו נזק.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T07:47:09+00:00",
     "last_update_at": "2026-10-29T18:31:57+00:00",
     "what_is_not_verified": "היקף הנזק ומספר הפצועים המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_4ba67e6022fe3681",
       "url": "https://www.newarab.com/news/houthis-say-saudi-strike-kills-12-blasts-heard-riyadh",
       "published_at": "2026-10-29T18:31:57+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_4ba67e6022fe3681",
       "url": "https://www.sabanew.net/viewstory/154853",
       "published_at": "2026-10-29T16:18:06+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_4ba67e6022fe3681",
       "url": "https://www.newarab.com/news/yemeni-authorities-accuse-houthis-using-toxic-substances",
       "published_at": "2026-10-29T12:43:39+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_4ba67e6022fe3681",
       "url": "https://www.newarab.com/news/no-majority-israeli-elections-trump-mulls-next-steps-iran",
       "published_at": "2026-10-29T07:47:09+00:00"
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
     "id": "YEMEN-10300044-09",
     "title": "החרפת המצור על תעז ועומס חמור בבתי החולים",
     "summary": "העיר תעז נתונה תחת מצור מהודק של החות'ים שהביא לחסימת צירי אספקה, עליית מחירים חדה ומחסור קריטי בציוד רפואי, לצד הגעת מאות פצועים לבתי חולים בעקבות קרבות מתמשכים.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T07:47:09+00:00",
     "last_update_at": "2026-10-29T16:46:33+00:00",
     "what_is_not_verified": "אין אימות בלתי תלוי לגבי כמויות האספקה המדויקות שנותרו בתוך העיר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-hospitals-buckle-fighting-escalates",
       "published_at": "2026-10-29T16:46:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemeni-authorities-accuse-houthis-using-toxic-substances",
       "published_at": "2026-10-29T12:43:39+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/no-majority-israeli-elections-trump-mulls-next-steps-iran",
       "published_at": "2026-10-29T07:47:09+00:00"
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
     "id": "YEMEN-10300044-10",
     "title": "מבצעי סיכול ותקיפה מצד כוחות צבא תימן",
     "summary": "הכוחות המזוינים של תימן הודיעו על ביצוע 982 פעולות תקיפה שבהן נוטרלו 324 מפקדים ולוחמים חות'ים, וכן הושמדו ונוטרלו 108 כלי רכב ומערכות.",
     "axis": "פנים-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T15:01:53+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T15:01:53+00:00",
     "last_update_at": "2026-10-29T15:01:53+00:00",
     "what_is_not_verified": "מספרי הנפגעים והכלים המושמדים לא אומתו על ידי מקור עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_84b08fed440a1b0b",
       "url": "https://www.sabanew.net/viewstory/154846",
       "published_at": "2026-10-29T15:01:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10300044-11",
     "title": "השקת מסמך עקרונות שבטיים להגנת אזרחים בז'נבה",
     "summary": "מנהיגי שבטים מתימן הציגו באו\"ם בז'נבה קוד אתי שמטרתו להגן על אזרחים ולהקל על הכנסת סיוע הומניטרי, שעליו חתמו כ-5,000 מנהיגים מאזורים שבשליטת הממשלה ובשליטת החות'ים.",
     "axis": "פנים-תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T17:00:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T17:00:17+00:00",
     "last_update_at": "2026-10-29T17:00:17+00:00",
     "what_is_not_verified": "מידת היישום וההשפעה המעשית של המסמך על הלחימה בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-tribal-leaders-present-set-principles-ease-wars-humanitarian",
       "published_at": "2026-10-29T17:00:17+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות החות'ים לביצוע שש תקיפות מדויקות שפגעו בנמלי תעופה ובמתקני אראמקו בסעודיה",
    "מספר ההרוגים המדויק (12 בני אדם) בתקיפה באל-ברח שיוחסה לסעודיה",
    "הטענות בדבר שימוש חות'י בפגזים המכילים חומרים רעילים אסורים בתעז",
    "הנתונים של צבא תימן על נטרול 324 חות'ים והשמדת 108 כלי רכב"
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
     "value": 3.1159,
     "unit": "ILS",
     "change_pct": -0.32,
     "source_id": "src_ecb",
     "as_of": "2026-10-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "תקיפת נמלי תעופה, מתקני נפט ומפקדות של סעודיה בתגובה ללחימה",
      "הפעלת כוח צבאי נגד יעדי ממשלת תימן בעדן וסביב תעז"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וביטחוני ישיר על סעודיה כדי לפגוע בתוכניות הגיוון הכלכלי שלה",
      "הכרעת כיסי ההתנגדות של הממשלה בתעז והרחבת השליטה הטריטוריאלית"
     ],
     "forecast": [
      "המשך שיגורי טילים וכטב\"מים לעבר תשתיות אנרגיה ותעופה בסעודיה",
      "החרפת הלחץ הצבאי וההומניטרי על העיר הנצורה תעז"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה וממשלת תימן",
     "declared": [
      "יירוט והשמדת טילי שיוט וטילים בליסטיים המכוונים לשטח סעודיה",
      "דרישה ממועצת הביטחון של האו\"ם לבלום את חימוש החות'ים ולהגדירם כארגון טרור"
     ],
     "inferred": [
      "שמירה על נכסים אסטרטגיים וביטחון פנים בסעודיה תוך מניעת שיבוש התעופה והנפט",
      "הגנה על מרכזי השלטון של הממשלה המוכרת בעדן ושבירת המצור סביב תעז"
     ],
     "forecast": [
      "המשך פעולות יירוט אווירי אינטנסיביות ותקיפות תגובה אוויריות בתימן",
      "הגברת הפעילות הדיפלומטית מול מועצת הביטחון להטלת סנקציות נוספות על החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/30/houthi-forces-claim-six-attacks-on-saudi-airports-oil-facilities?traffic_source=rss",
     "accessed_at": "2026-10-30T00:44:39+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemens-hospitals-buckle-fighting-escalates",
     "accessed_at": "2026-10-30T00:44:39+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-tribal-leaders-present-set-principles-ease-wars-humanitarian",
     "accessed_at": "2026-10-30T00:44:39+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/no-majority-israeli-elections-trump-mulls-next-steps-iran",
     "accessed_at": "2026-10-30T00:44:39+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154846",
     "accessed_at": "2026-10-30T00:44:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-29T00:40:26+00:00",
  "changes": {
   "YEMEN-10300044-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הוראת פינוי לצוות שגרירות ארצות הברית בסעודיה עקב איומי החות'ים",
    "score": 0.817
   },
   "YEMEN-10300044-02": {
    "kind": "new"
   },
   "YEMEN-10300044-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "שיגור טיל בליסטי לעבר בית הזיקוק ראס תנורה בסעודיה",
    "score": 0.65
   },
   "YEMEN-10300044-04": {
    "kind": "possible",
    "prev": "אישור הסכם הגנה משותף בין טורקיה, סעודיה ופקיסטן",
    "score": 0.467
   },
   "YEMEN-10300044-05": {
    "kind": "new"
   },
   "YEMEN-10300044-06": {
    "kind": "new"
   },
   "YEMEN-10300044-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "דיווח על תקיפות אוויריות סעודיות במחוז אל-ג'וף",
    "score": 0.65
   },
   "YEMEN-10300044-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת טילים בשדה התעופה הבינלאומי של עדן",
    "score": 1.0
   },
   "YEMEN-10300044-09": {
    "kind": "new"
   },
   "YEMEN-10300044-10": {
    "kind": "new"
   },
   "YEMEN-10300044-11": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-30T0040__iran-202610300040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-30T00:40:40+00:00",
   "window": {
    "from": "2026-10-29T00:40:40+00:00",
    "to": "2026-10-30T00:40:40+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610300040"
   },
   "summary": "העימות בין ארצות הברית וישראל לבין איראן מצוי ברמת מתיחות גבוהה הכוללת פגיעה בנתיבי השיט במצר הורמוז ודיווחים על חילופי אש ופעילות הגנה אווירית בדרום איראן. במקביל לתגבור כוחות צבאיים והצגת תוכניות תקיפה לנשיא ארצות הברית, מתקיימים מאמצי תיווך אזוריים לבלימת הסלמה והשגת הפוגה זמנית. בישראל ובאיראן נשמרת דריכות ביטחונית ומודיעינית מוגברת סביב החלטות הממשל בוושינגטון ותנאי הצדדים למשא ומתן.",
   "fronts": [
    {
     "name": "מצר הורמוז והמרחב הימי",
     "status": "מתיחות חריפה עקב פגיעה במכליות נפט באמצעות מוקשים וקליעים וסגר חלקי"
    },
    {
     "name": "המערכה האווירית והקרקעית באיראן",
     "status": "כוננות הגנה אווירית גבוהה ודיווחים על תקיפות מטרות באי קשם"
    },
    {
     "name": "הציר המדיני והדיפלומטי",
     "status": "מגעים בתיווך קטאר וגורמים אזוריים סביב מכתב אמריקני ותנאים מוקדמים של טהראן"
    },
    {
     "name": "החזית המודיעינית והפנימית",
     "status": "חשיפת רשתות ריגול של איראן בישראל וטיפול בהדלפות מידע ביטחוני בארצות הברית"
    }
   ],
   "events": [
    {
     "id": "IRAN-10300040-01",
     "title": "פגיעה במכליות נפט במצר הורמוז",
     "summary": "התרחשו פגיעות בכלי שיט במצר הורמוז, כאשר גורמים איראניים דיווחו על ארבע מכליות שנפגעו ממוקשים ימיים לאחר שנעו בנתיבים לא מורשים, ובמקביל דווח על פגיעת קליע במכלית אחרת שעברה במצר.",
     "axis": "מצר הורמוז והמפרץ הפרסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T18:36:49+00:00",
     "last_update_at": "2026-10-30T00:00:00+00:00",
     "what_is_not_verified": "לא אומת היקף הנזק המדויק, מספר המכליות שנפגעו בפועל וזהות הגורם ששיגר את הקליע או הניח את המוקשים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/30/iran-war-live-irgc-says-four-tankers-struck-mines-in-strait-of-hormuz?traffic_source=rss",
       "published_at": "2026-10-30T00:00:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tanker-struck-projectile-strait-hormuz",
       "published_at": "2026-10-29T18:36:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10300040-02",
     "title": "דיווחים על תקיפה אמריקנית ופעילות הגנה אווירית באי קשם",
     "summary": "מקורות תקשורתיים דיווחו על תקיפה של צבא ארצות הברית נגד יעדים איראניים באי קשם בדרום איראן, לצד דיווחים מקבילים על פעילות מערכות נגד מטוסים ויירוט לכאורה של מטוס קרב.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T20:10:04+00:00",
     "last_update_at": "2026-10-29T22:09:10+00:00",
     "what_is_not_verified": "אין אימות רשמי לביצוע התקיפה האמריקנית, לתוצאותיה או להפלת כלי טיס כלשהו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94895",
       "published_at": "2026-10-29T22:09:10+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1382875",
       "published_at": "2026-10-29T22:02:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49101",
       "published_at": "2026-10-29T20:10:04+00:00"
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
     "id": "IRAN-10300040-03",
     "title": "תדרוך הנשיא טראמפ והיערכות לאפשרות של מתקפה אמריקנית באיראן",
     "summary": "ראשי מערכת הביטחון האמריקנית, בהם מפקד פיקוד המרכז ושר ההגנה, הציגו לנשיא ארצות הברית חלופות לפעולה צבאית נגד איראן, על רקע אזהרות שהועברו למדינות המפרץ בדבר אפשרות למבצע קצר ועצים לאחר הבחירות.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T19:10:17+00:00",
     "last_update_at": "2026-10-29T22:28:28+00:00",
     "what_is_not_verified": "טרם אושרה החלטה סופית של הממשל האמריקני לפתוח במערכה צבאית ומועד הפעולה נותר לא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1382877",
       "published_at": "2026-10-29T22:28:28+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hj3b7xzpzl",
       "published_at": "2026-10-29T20:39:04+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/centcom-chief-briefs-trump-iran-strike-options",
       "published_at": "2026-10-29T20:05:14+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-senator-briefed-trumps-plans-restart-iran-war-says-proposal-insane",
       "published_at": "2026-10-29T20:04:08+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132812",
       "published_at": "2026-10-29T19:52:04+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21739271",
       "published_at": "2026-10-29T19:48:59+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/quotes/u-s-warns-gulf-of-possible-short-intense-renewal-of-iran-war-after-midterms/",
       "published_at": "2026-10-29T19:10:42+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/quotes/washington-prepares-gulf-arab-nations-for-possible-iran-strikes-after-midterms/",
       "published_at": "2026-10-29T19:10:17+00:00"
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
     "id": "IRAN-10300040-04",
     "title": "מגעים דיפלומטיים לחילופי מסרים והצבת תנאים בין ארצות הברית לאיראן",
     "summary": "סגן נשיא ארצות הברית העביר איגרת לגורם ביטחוני בכיר באיראן במטרה לחדש מגעים להפסקת אש ולפתיחת מצר הורמוז תמורת הקלת עיצומים, בעוד הנהגת איראן הבהירה כי התקדמות תיתכן רק במילוי שבעה תנאים מוקדמים שהציגה.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T15:46:36+00:00",
     "last_update_at": "2026-10-29T23:34:21+00:00",
     "what_is_not_verified": "תוכן המכתב המדויק שנוי במחלוקת בין הגרסאות השונות, ואין אימות לגבי תגובה רשמית מצד איראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-qalibaf-says-progress-only-possible-when-tehrans-seven-conditions",
       "published_at": "2026-10-29T23:34:21+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-envoy-says-iran-talks-very-close-agreement-de-escalation-process",
       "published_at": "2026-10-29T22:52:16+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307156/Senior-security-source-Iran-has-not-responded-to-letter-by-US",
       "published_at": "2026-10-29T20:37:18+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307146/Ghalibaf-US-carrot-and-stick-approach-will-not-work-against",
       "published_at": "2026-10-29T19:33:05+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/29/jd-vance-letter-may-offer-last-chance-to-avert-fresh-conflict-between-us-and-iran",
       "published_at": "2026-10-29T19:32:24+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132810",
       "published_at": "2026-10-29T19:15:01+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/vance-outreach-iran-related-medical-supplies-says-trump",
       "published_at": "2026-10-29T15:46:36+00:00"
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
     "id": "IRAN-10300040-05",
     "title": "היערכות ביטחונית בישראל ומחלוקות סביב פעולה התקפית באיראן",
     "summary": "גורמי ביטחון בישראל חשפו ויכוחים בצמרת המדינית והצבאית בנוגע לדחיפת ראש הממשלה לפעולה יזומה מול איראן בסמוך לבחירות, כאשר צה\"ל ממשיך בהיערכות בחזיתות השונות וממתין להחלטות הממשל בוושינגטון.",
     "axis": "ישראל - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T18:11:16+00:00",
     "last_update_at": "2026-10-29T22:00:00+00:00",
     "what_is_not_verified": "פרטי הפעולה הישראלית שנשקלה ומניעי מקבלי ההחלטות מבוססים על הדלפות גורמים עלומים ולא אומתו רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_ynet",
       "url": "https://www.ynet.co.il/news/article/yokra14942037",
       "published_at": "2026-10-29T22:00:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_ynet",
       "url": "https://www.ynet.co.il/news/article/rykqnm11pml",
       "published_at": "2026-10-29T21:50:57+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_ynet",
       "url": "https://www.iranintl.com/en/202610298666",
       "published_at": "2026-10-29T19:17:38+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_ynet",
       "url": "https://www.israelhayom.co.il/magazine/hashavua/article/21737015",
       "published_at": "2026-10-29T18:11:16+00:00"
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
     "id": "IRAN-10300040-06",
     "title": "הדחת קצין אמריקני בכיר בגין הדלפת חומרים מסווגים על איראן",
     "summary": "מזכיר ההגנה של ארצות הברית הדיח קצין בדרגת לוטננט גנרל אשר שימש כמתכנן צבאי בפנטגון, לאחר שהודה במסירת מידע מודיעיני רגיש הנוגע לאיראן ולמלחמה לעיתונאים.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T17:46:30+00:00",
     "last_update_at": "2026-10-30T00:02:12+00:00",
     "what_is_not_verified": "פרטי המסמכים המדויקים שהודלפו והשפעתם הישירה על התוכניות המבצעיות לא פורטו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21740040",
       "published_at": "2026-10-30T00:02:12+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/29/pentagon-fires-general-it-says-leaked-classified-information-to-media?traffic_source=rss",
       "published_at": "2026-10-29T19:02:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/senior-us-general-fired-accused-leaking-classified-information",
       "published_at": "2026-10-29T17:46:30+00:00"
      }
     ],
     "places": [
      {
       "name": "הפנטגון, ארצות הברית",
       "lat": 38.8733,
       "lon": -77.0553
      }
     ]
    },
    {
     "id": "IRAN-10300040-07",
     "title": "כתב אישום נגד חייל צה\"ל בגין ריגול לטובת המודיעין האיראני",
     "summary": "הפרקליטות הצבאית הגישה כתב אישום נגד חייל בשירות צה\"ל אשר קיים קשר עם גורמי מודיעין מאיראן במשך כשנה והעביר להם מידע ביטחוני על בסיסים, כוננויות ופעילות מבצעית תמורת כספים.",
     "axis": "ישראל - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T17:08:58+00:00",
     "last_update_at": "2026-10-29T17:14:50+00:00",
     "what_is_not_verified": "מידת הנזק המבצעי הממשי שנגרם לביטחון המדינה עקב מסירת המידע נותרה חסויה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383959387",
       "published_at": "2026-10-29T17:14:50+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94893",
       "published_at": "2026-10-29T17:08:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10300040-08",
     "title": "הכרזת תקיפות של כוחות החות'ים נגד יעדים בסעודיה",
     "summary": "הכוחות החות'ים בתימן טענו כי ביצעו שש התקפות נגד שדות תעופה ומתקני נפט בשטח ערב הסעודית, במקביל למגעים שהתקיימו בטהראן.",
     "axis": "תימן - סעודיה והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T00:11:20+00:00",
     "last_update_at": "2026-10-30T00:11:20+00:00",
     "what_is_not_verified": "אין אימות עצמאי או אישור מצד ערב הסעודית לפגיעה בפועל בשדות התעופה או במתקני הנפט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/30/houthi-forces-claim-six-attacks-on-saudi-airports-oil-facilities?traffic_source=rss",
       "published_at": "2026-10-30T00:11:20+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נכונות הדיווחים על תקיפה שביצע צבא ארצות הברית באי קשם שבדרום איראן",
    "הטענה האיראנית בדבר יירוט מטוס קרב עוין מעל שטח המדינה",
    "ההודעה על פגיעת מוקשים בארבע מכליות נפט שנעו במצר הורמוז",
    "הדיווח החות'י על פגיעות בשדות תעופה ובמתקני נפט ברחבי ערב הסעודית",
    "הערכות לגבי כוונת ארצות הברית לצאת למבצע צבאי קצר ועצים מיד לאחר יום הבחירות",
    "טענות על ניסיונות של גורמים בישראל להצית עימות צבאי יזום מול איראן טרם הבחירות"
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
     "value": 3.1159,
     "unit": "ILS",
     "change_pct": -0.32,
     "source_id": "src_ecb",
     "as_of": "2026-10-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "קידום תהליך להרגעת המתיחות והגעה להפוגה בלחימה בתיווך בינלאומי",
      "הבטחת פתיחת מצר הורמוז לשיט חופשי בתוך שבוע ימים",
      "הגעה להסכמות מחייבות מצד טהראן בנוגע לתוכנית הגרעין שלה"
     ],
     "inferred": [
      "הפעלת הרתעה צבאית מוגברת באמצעות הצגת אפשרויות תקיפה מוכנות לנשיא",
      "כפיית תנאי משא ומתן על איראן תוך שימוש באיום במבצע צבאי עצים"
     ],
     "forecast": [
      "המשך ריכוז כוחות ימיים ואוויריים במפרץ הפרסי לצד בדיקת מיצוי המסלול המדיני",
      "הוצאה לפועל של מהלומה צבאית מוגבלת אם השיחות הדיפלומטיות יגיעו למבוי סתום"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "התניית כל התקדמות מדינית בקבלת שבעת התנאים שהציגה למתווכים",
      "דחיית גישת המקל והגזר האמריקנית ואי היענות ללחצים ואיומים",
      "אכיפת הגבלות תנועה ופיקוח על כלי שיט במצר הורמוז"
     ],
     "inferred": [
      "שימוש בחסימת מצר הורמוז ובפגיעה בנתיבי הנפט כמנוף לחץ כלכלי על המערב",
      "הפעלת שלוחות אזוריות כדי להרחיב את טווח האיומים בלי לקחת אחריות רשמית"
     ],
     "forecast": [
      "הימנעות מקבלת דרישות ארצות הברית ללא הסרת עיצומים משמעותית",
      "הגברת פעולות השיבוש הימי במצר הורמוז וחיזוק מערכי ההגנה האווירית"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על כוננות מבצעית גבוהה ומוכנות להגנה ולהתקפה מול איראן"
     ],
     "inferred": [
      "שאיפה להנחתת מכה מקדימה או יזומה נגד יעדים איראניים",
      "תיאום מהלכים הדוק והמתנה להחלטות הממשל והצבא בארצות הברית"
     ],
     "forecast": [
      "המשך מעקב דרוך אחר ריכוז הכוחות האמריקני ותגובה מהירה במקרה של תקיפה בטהראן",
      "העמקת הפעילות לסיכול תשתיות ריגול וגיוס סוכנים של המודיעין האיראני בארץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/30/houthi-forces-claim-six-attacks-on-saudi-airports-oil-facilities?traffic_source=rss",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/senior-us-general-fired-accused-leaking-classified-information",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/in_the_news/quotes/washington-prepares-gulf-arab-nations-for-possible-iran-strikes-after-midterms/",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/29/jd-vance-letter-may-offer-last-chance-to-avert-fresh-conflict-between-us-and-iran",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610298666",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86307146/Ghalibaf-US-carrot-and-stick-approach-will-not-work-against",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21740040",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1382877",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-envoy-says-iran-talks-very-close-agreement-de-escalation-process",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132810",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49101",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94893",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383959387",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rykqnm11pml",
     "accessed_at": "2026-10-30T00:40:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-29T06:22:52+00:00",
  "changes": {
   "IRAN-10300040-01": {
    "kind": "possible",
    "prev": "יירוט כלי טיס בלתי מאויש אמריקני באזור מצר הורמוז",
    "score": 0.467
   },
   "IRAN-10300040-02": {
    "kind": "new"
   },
   "IRAN-10300040-03": {
    "kind": "possible",
    "prev": "אזהרה אמריקנית למדינות המפרץ מפני פעולה צבאית נגד איראן",
    "score": 0.467
   },
   "IRAN-10300040-04": {
    "kind": "possible",
    "prev": "מגעים דיפלומטיים של מדינות המפרץ למניעת חידוש הלחימה",
    "score": 0.467
   },
   "IRAN-10300040-05": {
    "kind": "possible",
    "prev": "היערכות צה\"ל למבצע אפשרי נגד איראן",
    "score": 0.467
   },
   "IRAN-10300040-06": {
    "kind": "new"
   },
   "IRAN-10300040-07": {
    "kind": "new"
   },
   "IRAN-10300040-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-30T0042__ukraine-202610300042.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-30T00:42:53+00:00",
   "window": {
    "from": "2026-10-29T00:42:53+00:00",
    "to": "2026-10-30T00:42:53+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610300042"
   },
   "summary": "הלחימה נמשכת בעוצמה כאשר צבא רוסיה מבצע תקיפות כבדות של טילים וכטב\"מים על תשתיות וריכוזי אוכלוסייה בערי העורף באוקראינה, במקביל לתקיפות תגובה אוקראיניות בעומק שטח רוסיה. לצד זאת נרשמה הפוגה מקומית ומתוחמת לצרכים הומניטריים באזור אולשקי שבמחוז חרסון, בעוד מאמצי התיווך המדיניים מתאפיינים בהעברת מסרים ראשוניים בנושאי שטח ודרישות להסדרי קבע.",
   "fronts": [
    {
     "name": "חזית חרסון / אולשקי",
     "status": "רגיעה זמנית מקומית במסגרת הפסקת אש הומניטרית ופינוי מוקשים"
    },
    {
     "name": "העורף האוקראיני (דניפרו, קייב, צ'רניהיב)",
     "status": "תחת גלי תקיפות רוסיות באמצעות טילים וכטב\"מים נגד תשתיות אנרגיה ותחבורה"
    },
    {
     "name": "עומק שטח רוסיה (מחוז וולגוגרד ואזורי גבול)",
     "status": "מטרה לתקיפות אוקראיניות נגד בסיסי אוויר ותשתיות תקשורת"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10300042-01",
     "title": "הפסקת אש הומניטרית ומבצע פינוי באולשקי שבמחוז חרסון",
     "summary": "הפוגה מקומית בלחימה נשמרה באולשקי ובסביבת חרסון לצורך פינוי אזרחים וחלוקת סיוע, תוך השלמת פינוי מוקשים בצירים לקראת מעבר שיירה.",
     "axis": "חזית הדרום / חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T04:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T01:48:26+00:00",
     "last_update_at": "2026-10-29T21:10:15+00:00",
     "what_is_not_verified": "לא אומת מספר האזרחים המדויק שיתפנו בפועל והאם כולם יועברו דרך שטח רוסיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/30/residents-of-russian-occupied-oleshky-have-until-friday-afternoon-to-leave-aid-distribution-for-those-who-stay-is-scheduled-to-begin-under-a-temporary-ceasefire",
       "published_at": "2026-10-29T21:10:15+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/ck1l393pyrylo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-29T20:05:57+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/route-demining-completed-in-russian-occupied-oleshky-as-humanitarian-convoy-prepares-to-enter-ukraines-ombudsman-says/",
       "published_at": "2026-10-29T19:40:50+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060343/",
       "published_at": "2026-10-29T18:20:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2210441",
       "published_at": "2026-10-29T17:47:50+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/29/ukraine-war-briefing-oleshky-truce-holding-and-demining-under-way-to-enable-humanitarian-corridor-kyiv-says",
       "published_at": "2026-10-29T01:48:26+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי",
       "lat": 46.6261,
       "lon": 32.722
      },
      {
       "name": "חרסון",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-02",
     "title": "תקיפות אוויריות וטילים רוסיים על דניפרו, קייב וערים נוספות",
     "summary": "רוסיה שיגרה טילים וכטב\"מים לעבר מספר מוקדים; בתקיפה על תחנת רכבת בדניפרו נהרגו ונפצעו אזרחים ומאות אלפים נותקו מחשמל, ופגיעות טילים נרשמו גם בקייב.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T12:00:00+00:00",
     "last_update_at": "2026-10-29T23:36:48+00:00",
     "what_is_not_verified": "יש פער בדיווחים על מספר ההרוגים בדניפרו (בין 13 ל-14, או 19 במצטבר עם ערים נוספות)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-night-attacks-kill-1-in-kyiv-leave-350-000-in-dnipro-without-power/",
       "published_at": "2026-10-29T23:36:48+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4179544-zelensky-russian-strikes-killed-19-people-in-dnipro-chernihiv-kremenchuk.html",
       "published_at": "2026-10-29T20:23:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russias-mass-murder-deadly-russian-strikes-on-dnipro-chernihiv-kremenchuk/",
       "published_at": "2026-10-29T19:42:55+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c9p8gdlz1p2ko?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-29T14:17:35+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168702",
       "published_at": "2026-10-29T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו",
       "lat": 51.5567,
       "lon": 30.6122
      },
      {
       "name": "קייב",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "צ'רניהיב",
       "lat": 51.4941,
       "lon": 31.2943
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-03",
     "title": "תקיפת טילי נפטון על שדה תעופה צבאי בוולגוגרד",
     "summary": "הצי האוקראיני ביצע תקיפה באמצעות טילי נפטון נגד שדה התעופה מרינובקה במחוז וולגוגרד, והשמיד שני מטוסי קרב מסוג סו-34.",
     "axis": "עומק רוסיה / תקיפות אוקראיניות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T16:55:34+00:00",
     "last_update_at": "2026-10-29T19:42:55+00:00",
     "what_is_not_verified": "לא הוצג אימות עצמאי או אישור רוסי להשמדת המטוסים ופגיעה במשגר איסקנדר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-russias-mass-murder-deadly-russian-strikes-on-dnipro-chernihiv-kremenchuk/",
       "published_at": "2026-10-29T19:42:55+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060351/",
       "published_at": "2026-10-29T18:46:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49094",
       "published_at": "2026-10-29T16:55:34+00:00"
      }
     ],
     "places": [
      {
       "name": "מרינובקה, מחוז וולגוגרד",
       "lat": 48.6924,
       "lon": 43.8321
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-04",
     "title": "מעצר נהג באזור קייב בחשד לסיוע להכוונת תקיפות רוסיות",
     "summary": "שירות הביטחון של אוקראינה עצר נהג בחברת לוגיסטיקה החשוד בהעברת מידע למודיעין הרוסי לצורך פגיעה במתקני אנרגיה.",
     "axis": "ביטחון פנים באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T23:46:00+00:00",
     "last_update_at": "2026-10-29T23:46:00+00:00",
     "what_is_not_verified": "ההאשמות מבוססות על הודעת שירות הביטחון האוקראיני בלבד ללא הכרעה שיפוטית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_sbu",
       "url": "https://www.ukrinform.net/rubric-ato/4179321-sbu-detains-driver-suspected-of-directing-russian-attacks-on-kyiv-regions-thermal-power-plants.html",
       "published_at": "2026-10-29T23:46:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז קייב",
       "lat": 50.4731,
       "lon": 30.4674
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-05",
     "title": "דיווח על מכליות דלק רוסי העושות דרכן לארצות הברית",
     "summary": "ארגון גרינפיס איתר שבע מכליות דלק המובילות סולר מרוסיה לכיוון ארצות הברית במסגרת הסכמות שנויות במחלוקת.",
     "axis": "כלכלה וסנקציות בינלאומיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T19:04:17+00:00",
     "last_update_at": "2026-10-29T22:08:58+00:00",
     "what_is_not_verified": "לא ברור אם המכליות יורשו לפרוק את המטען בנמלי ארצות הברית בשל מעמדן החוקי והפוליטי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/seven-russian-tankers-shipping-diesel-to-us-identified-located-media-reports/",
       "published_at": "2026-10-29T22:08:58+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/29/seven-oil-tankers-288000-tonnes-russian-diesel-sail-us-putin-trump",
       "published_at": "2026-10-29T19:04:17+00:00"
      }
     ],
     "places": [
      {
       "name": "האוקיינוס האטלנטי",
       "lat": 13.5819,
       "lon": -38.3203
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-06",
     "title": "מגעים דיפלומטיים ותנאים לפסגה ושיחות שלום",
     "summary": "נשיאי פינלנד ונורווגיה העבירו מסר מנשיא אוקראינה לנשיא רוסיה בדבר נכונות לפגישה ישירה ולדיון בסוגיות שטח, בעוד הקרמלין מדגיש צורך בהסדר קבוע ולא בהפוגה זמנית.",
     "axis": "משא ומתן ומדיניות בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T18:33:00+00:00",
     "last_update_at": "2026-10-29T23:37:44+00:00",
     "what_is_not_verified": "לא מאומת האם יתקיימו שיחות באבו דאבי או פגישה אישית בין פוטין לזלנסקי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2210591",
       "published_at": "2026-10-29T23:37:44+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2210569",
       "published_at": "2026-10-29T20:42:18+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/29/ukraine-says-zelensky-is-ready-to-discuss-territory-with-putin-in-person",
       "published_at": "2026-10-29T18:51:24+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060345/",
       "published_at": "2026-10-29T18:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "אבו דאבי",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-07",
     "title": "הפעלת צריחי הגנה אווירית אוטומטיים באוקראינה",
     "summary": "מערכות נשק רובוטיות מבוססות בינה מלאכותית, המופעלות בידי חטיבות הגנה אווירית פרטיות, יירטו עשרות כטב\"מים וטילים מעל שמי קייב ומוקדים נוספים.",
     "axis": "הגנה אווירית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T18:37:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T18:37:00+00:00",
     "last_update_at": "2026-10-29T18:37:00+00:00",
     "what_is_not_verified": "הנתונים מבוססים על הודעת ארגון הפיתוח בלבד ללא בדיקה חיצונית של כמות ההפלות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_brave1",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060346/",
       "published_at": "2026-10-29T18:37:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-10300042-08",
     "title": "דיווח רוסי על שימוש אוקראיני במסופי תקשורת לוויינית אירופיים",
     "summary": "גורמי ניתוח רוסיים טוענים כי אוקראינה החלה לצייד כטב\"מים ארוכי טווח במסופי תקשורת חלופיים שאינם מוגבלים מעל שטח רוסיה לצורך שיבוש ופגיעה בעומק המדינה.",
     "axis": "טכנולוגיה ותקיפות בעומק רוסיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T18:58:32+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T18:58:32+00:00",
     "last_update_at": "2026-10-29T18:58:32+00:00",
     "what_is_not_verified": "מקור הטענה הוא ערוץ טלגרם המזוהה עם מומחים רוסים, ולא הוצגו הוכחות עצמאיות לתפוצת השימוש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49098",
       "published_at": "2026-10-29T18:58:32+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הנפגעים הכולל והמדויק בסדרת התקיפות הרוסיות על דניפרו וערים סמוכות",
    "הטענה לפגיעה והשמדה מלאה של מטוסי קרב ומשגר איסקנדר בשדה התעופה מרינובקה",
    "הטענה לגבי הפסקת תקיפות אוקראיניות על בתי זיקוק רוסיים בעקבות לחץ אמריקני",
    "דיווח על הטבעת ספינה ישראלית בים השחור בידי כשב\"מים וטענת השתייכותה לצי צללים",
    "נתוני האבדות הרוסיות לחודש אוקטובר שפורסמו על ידי המטה הכללי האוקראיני",
    "היתכנות הפריקה החוקית של מכליות הנפט הרוסי בנמלי ארצות הברית",
    "מועד ותנאי כינוס המשא ומתן המדיני באבו דאבי"
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
     "value": 1.113,
     "unit": "USD",
     "change_pct": -0.03,
     "source_id": "src_ecb",
     "as_of": "2026-10-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "נכונות לפגישה אישית וישירה בין זלנסקי לפוטין כדי לדון בסוגיות שטח",
      "הגנה על תשתיות קריטיות ודרישה לקבלת מיירטים ומערכות הגנה אווירית"
     ],
     "inferred": [
      "שימור לחץ צבאי על שדות תעופה ומתקנים בעומק רוסיה לצמצום עוצמת ההפצצות",
      "הפחתת המתיחות מול הממשל האמריקני על רקע חששות מקיצוץ בסיוע הצבאי"
     ],
     "forecast": [
      "המשך ניסיונות להביא להפוגות מקומיות נקודתיות במקביל להחרפת המחסור במיירטים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת שלום יציב ובר קיימא במקום הפסקות אש זמניות",
      "נכונות להידברות עם מדינות אירופה תוך הבעת עמדה של מוכנות לעימות רחב"
     ],
     "inferred": [
      "המשך שחיקת רשת החשמל והמורל האוקראיני באמצעות מתקפות עומק על תשתיות",
      "ניצול הפוגות הומניטריות מוגבלות לשיפור מעמדה הדיפלומטי מול גורמים בינלאומיים"
     ],
     "forecast": [
      "הגברת קצב שיגורי הטילים הבליסטיים כפי שעולה מהתרעות המודיעין"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c9p8gdlz1p2ko?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/oct/29/seven-oil-tankers-288000-tonnes-russian-diesel-sail-us-putin-trump",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/seven-russian-tankers-shipping-diesel-to-us-identified-located-media-reports/",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/29/ukraine-says-zelensky-is-ready-to-discuss-territory-with-putin-in-person",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060346/",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2210569",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49098",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4179321-sbu-detains-driver-suspected-of-directing-russian-attacks-on-kyiv-regions-thermal-power-plants.html",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168702",
     "accessed_at": "2026-10-30T00:42:53+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-29T06:25:04+00:00",
  "changes": {
   "UKRAINE-10300042-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הפסקת אש מקומית ופינוי הומניטרי באולשקי שבמחוז חרסון",
    "score": 1.0
   },
   "UKRAINE-10300042-02": {
    "kind": "possible",
    "prev": "תקיפות כטב\"מים רוסיים בחרקוב",
    "score": 0.467
   },
   "UKRAINE-10300042-03": {
    "kind": "new"
   },
   "UKRAINE-10300042-04": {
    "kind": "new"
   },
   "UKRAINE-10300042-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "התחייבות אוקראינית שלא לתקוף מכליות דלק רוסי לארה\"ב",
    "score": 0.65
   },
   "UKRAINE-10300042-06": {
    "kind": "possible",
    "prev": "הכנות לשיחות תלת-צדדיות באבו דאבי לאחר 4 בנובמבר",
    "score": 0.633
   },
   "UKRAINE-10300042-07": {
    "kind": "new"
   },
   "UKRAINE-10300042-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-30T0049__north-202610300049.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-30T00:49:24+00:00",
   "window": {
    "from": "2026-10-29T00:49:24+00:00",
    "to": "2026-10-30T00:49:24+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610300049"
   },
   "summary": "הגזרה הצפונית מתאפיינת בחיכוך צבאי ישיר בדרום לבנון ובדרום סוריה, לצד מאמצים דיפלומטיים ותהליכי שיקום מקבילים. כוחות צבא ישראליים מקיימים נוכחות ומבצעים פשיטות ומעצרים מעבר לגבול בסוריה ובלבנון, מה שמעורר תסיסה אזרחית ומחאות נרחבות. במקביל מתנהלים מגעים עקיפים ומשולשים להסדרת המציאות הביטחונית, בעוד חזבאללה וההנהגה בסוריה מנסים לייצב את שליטתם מול אתגרים פנימיים ומשברים אזוריים.",
   "fronts": [
    {
     "name": "חזית דרום לבנון וישראל",
     "status": "פעילות צבאית ישראלית מתמשכת, מגעים מדיניים וניסיונות אזרחיים לבנוניים לחזור לאזורי הקו הצהוב"
    },
    {
     "name": "חזית דרום סוריה וישראל",
     "status": "התרחבות פעילות מעצרים ופשיטות ישראליות במחוזות קוניטרה ודרעא הגוררת גל מחאות נרחב"
    },
    {
     "name": "גבול סוריה-ירדן",
     "status": "מתיחות ביטחונית בעקבות תקיפות אוויריות ירדניות נגד יעדי טרור שגרמו לפגיעה באזרחים"
    },
    {
     "name": "צפון-מזרח סוריה",
     "status": "פעילות חברות אנרגיה זרות ומשא ומתן סביב ניהול משאבי הנפט באזור הכורדי"
    }
   ],
   "events": [
    {
     "id": "NORTH-10300049-01",
     "title": "מחאות בסוריה בעקבות הרג אזרח ומעצרים בידי כוחות ישראליים בדרום המדינה",
     "summary": "הפגנות התקיימו במספר מחוזות בסוריה, כולל מול מטה האומות המאוחדות בדמשק, במחאה על הרג אזרח סורי בעל מוגבלות בידי צבא ישראל ועל המשך מעצרם של עשרות תושבים במהלך פשיטות ליליות באזור קוניטרה ודרעא.",
     "axis": "דרום סוריה וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T13:06:20+00:00",
     "last_update_at": "2026-10-29T13:06:20+00:00",
     "what_is_not_verified": "המספר המדויק של העצורים המוחזקים בישראל ונסיבות הירי המדויקות אינם מאומתים מעבר לטענות המפגינים ומשפחותיהם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/how-israels-expanding-occupation-deepening-syrias-dilemma",
       "published_at": "2026-10-29T13:06:20+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-10300049-02",
     "title": "זעם בלבנון בעקבות תיעוד חייל ישראלי בכנסייה שנפגעה בכפר קוזח",
     "summary": "תצלום של חייל ישראלי על רקע כנסיית סנט ג'וזף ההיסטורית שניזוקה בכפר קוזח בדרום לבנון עורר גינויים וקריאות להגנה על אתרי דת, בעוד הגישה לכפר חסומה בשל הפעילות הצבאית של ישראל באזור.",
     "axis": "דרום לבנון וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T14:14:14+00:00",
     "last_update_at": "2026-10-29T14:14:14+00:00",
     "what_is_not_verified": "היקף הנזק המדויק במבנה הכנסייה ונסיבות הפגיעה המקוריות בה אינם מאומתים ממקור רשמי עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israeli-soldier-poses-damaged-lebanon-church-sparking-anger",
       "published_at": "2026-10-29T14:14:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10300049-03",
     "title": "תדרוך נשיא לבנון אודות המשא ומתן המשולש שהתקיים בטמפה",
     "summary": "נשיא לבנון ז'וזף עון קיים פגישה עם מפקד הצבא וראשי המשלחת הלבנונית, וקיבל עדכון מקיף על תוצאות השיחות המשולשות בין לבנון, ארצות הברית וישראל שנערכו בארצות הברית.",
     "axis": "משא ומתן לבנון-ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T11:21:19+00:00",
     "last_update_at": "2026-10-29T11:21:19+00:00",
     "what_is_not_verified": "תוכן ההסכמות או המחלוקות המדויקות במפגש בטמפה לא פורטו בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965411/president-aoun-briefed-by-military-delegation-on-results-of-lebanese-u/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965411",
       "published_at": "2026-10-29T11:21:19+00:00"
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
     "id": "NORTH-10300049-04",
     "title": "כניסת אזרחים לבנונים לשטח הקו הצהוב בדרום לבנון",
     "summary": "קבוצת צעירים לבנונים נכנסה אל הכפר קנטרה הנמצא בתחום הקו הצהוב, תיעדה את המקום ושבה לאזור שבשליטת צבא לבנון, לצד דיווחים על מעצרם בידי מנגנוני הביטחון המקומיים.",
     "axis": "דרום לבנון וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T06:45:01+00:00",
     "last_update_at": "2026-10-29T06:45:01+00:00",
     "what_is_not_verified": "הדיווח על מעצר הצעירים בידי מנגנוני הביטחון הלבנוניים וקיומן של כניסות דומות בכפרים נוספים מוגדרים כדיווחים לא מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132760",
       "published_at": "2026-10-29T06:45:01+00:00"
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
     "id": "NORTH-10300049-05",
     "title": "ביקורת בסוריה על היעדר תגובה ממשלתית לתקיפות אוויריות ירדניות",
     "summary": "תושבים בסוריה הביעו מחאה בעקבות שתיקת הממשל בדמשק אל מול הפצצות ירדניות במחוז דרעא שכוונות לפעילי המדינה האסלאמית אך פגעו גם באזרחים, חרף מחלוקת בין שתי המדינות בנוגע לרמת התיאום הביטחוני המוקדם.",
     "axis": "דרום סוריה וירדן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T16:46:39+00:00",
     "last_update_at": "2026-10-29T16:46:39+00:00",
     "what_is_not_verified": "מידת התיאום המוקדם בפועל בין עמאן לדמשק לפני התקיפה נותרה במחלוקת בין הצדדים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/anger-syria-over-govt-inaction-after-jordanian-airstrikes",
       "published_at": "2026-10-29T16:46:39+00:00"
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
     "id": "NORTH-10300049-06",
     "title": "הצהרת חזבאללה בדבר שיקום דרום ביירות ואי-ויתור על אדמות לבנון",
     "summary": "בכיר חזבאללה עלי דעמוש הדגיש במהלך אירוע בפרבר הדרומי של ביירות כי הארגון לא יוותר על אף שעל מאדמת לבנון, וקרא לממשלת לבנון לסייע בפיצוי תושבים ובשיקום ענפי החקלאות והייצור בעקבות נזקי הלחימה מול ישראל.",
     "axis": "לבנון וחיזבאללה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T14:41:31+00:00",
     "last_update_at": "2026-10-29T14:41:31+00:00",
     "what_is_not_verified": "מידת יכולתו ומחויבותו של הממשל הלבנוני להעביר בפועל כספי פיצויים לחקלאים ולתעשיינים באזורים שנפגעו אינה ברורה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/144577/",
       "published_at": "2026-10-29T14:41:31+00:00"
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
     "id": "NORTH-10300049-07",
     "title": "ביקור ראש ממשלת עיראק בדמשק ותרומה לשיקום אתרים דתיים",
     "summary": "ראש ממשלת עיראק ערך ביקור רשמי ראשון בדמשק מאז חילופי השלטון בסוריה, נפגש עם שר החוץ הסורי והודיע על תרומה כספית לשיקום המסגד האומיי ומקדש סיידה זיינב.",
     "axis": "יחסי סוריה-עיראק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T13:50:47+00:00",
     "last_update_at": "2026-10-29T13:50:47+00:00",
     "what_is_not_verified": "אופן יישום העברת הכספים הפרטיים ולוחות הזמנים לביצוע עבודות השיקום באתרים לא צוינו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iraq-pm-donates-10m-syrias-umayyad-sayyida-zainab-mosques",
       "published_at": "2026-10-29T13:50:47+00:00"
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
     "id": "NORTH-10300049-08",
     "title": "חברת נפט אמריקאית מקדמת הכפלת תפוקה בצפון-מזרח סוריה",
     "summary": "הנהלת חברת הנפט האמריקאית הודיעה על תוכניות להכפלת תפוקת הנפט בשדות המנוהלים על ידי גורמים כורדיים בצפון-מזרח סוריה, לצד טיפול במפגעי זיהום סביבתי.",
     "axis": "צפון-מזרח סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T15:34:41+00:00",
     "last_update_at": "2026-10-29T15:34:41+00:00",
     "what_is_not_verified": "מעמדה המשפטי והעתידי של חברת הנפט הכורדית המקומית ביחס להסכמי הפיתוח נותר לא ברור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3c999b02f0bbb2fe",
       "url": "https://www.al-monitor.com/originals/2026/10/us-oil-firm-hkn-aims-double-syrias-output-it-takes-over-kurdish-run-fields",
       "published_at": "2026-10-29T15:34:41+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות על מעצר אזרחים שנכנסו לקנטרה בידי כוחות הביטחון של לבנון",
    "מידת התיאום המבצעי המוקדם בין צבא ירדן למשטר בדמשק לפני התקיפות בדרעא",
    "מספרם הכולל והמדויק של האזרחים הסורים העצורים בידי ישראל מאז חילופי השלטון",
    "ההסכמות המדויקות שהושגו במפגש המשא ומתן המשולש בטמפה"
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
     "value": 3.1159,
     "unit": "ILS",
     "change_pct": -0.32,
     "source_id": "src_ecb",
     "as_of": "2026-10-29T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "התאמת המציאות בגבולותיה לצורכי הביטחון שלה לאחר מתקפת שבעה באוקטובר",
      "סיכול התבססות תשתיות עוינות בסמוך לקו הגבול בלבנון ובדרום סוריה"
     ],
     "inferred": [
      "יצירת אזורי חיץ ביטחוניים בעומק דרום לבנון ודרום סוריה כדי למנוע איומים עתידיים",
      "הפעלת לחץ צבאי ופשיטות מעצר מתמשכות להרתעת גורמים מקומיים מפני שיתוף פעולה עם פעילי טרור"
     ],
     "forecast": [
      "המשך אחיזה מבצעית הדוקה באזורי הגבול תוך ניהול משא ומתן דיפלומטי על קווי נסיגה או הסדרה"
     ]
    },
    {
     "actor": "חזבאללה ולבנון",
     "declared": [
      "אי-ויתור על אף שעל מאדמת לבנון והתנגדות לכל נוכחות צבאית ישראלית",
      "שיקום התשתיות, החקלאות והמבנים שנפגעו בלחימה וחיזוק החוסן העצמי של האוכלוסייה"
     ],
     "inferred": [
      "שימור הלגיטימציה של הארגון ככוח מגן לאומי לנוכח הפגיעה הקשה בבסיסיו בדרום ובביירות",
      "הישענות על המערכת המדינית הלבנונית לקידום הפסקת אש והסדרים בגבול באמצעות תיווך בינלאומי"
     ],
     "forecast": [
      "המשך עידוד חזרת תושבים לגבול לצד שיקום הדרגתי של יכולותיו הכלכליות והחברתיות"
     ]
    },
    {
     "actor": "השלטון החדש בסוריה",
     "declared": [
      "הגנה על ריבונות המדינה ודחיית כל פגיעה צבאית זרה בשטחה ללא תיאום",
      "שיקום היחסים הדיפלומטיים והכלכליים עם מדינות האזור וחיזוק מעמד האתרים ההיסטוריים"
     ],
     "inferred": [
      "שאיפה לייצב את השליטה המרכזית במחוזות הדרום והמזרח על רקע משאבים מוגבלים",
      "הימנעות מעימות ישיר עם ישראל וירדן חרף הזעם הציבורי הגובר ברחוב הסורי"
     ],
     "forecast": [
      "המשך גינויים רשמיים רפויים לצד הימנעות מפעולה צבאית נגד חדירות ישראליות או ירדניות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/144577/",
     "accessed_at": "2026-10-30T00:49:24+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-oil-firm-hkn-aims-double-syrias-output-it-takes-over-kurdish-run-fields",
     "accessed_at": "2026-10-30T00:49:24+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965411/president-aoun-briefed-by-military-delegation-on-results-of-lebanese-u/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965411",
     "accessed_at": "2026-10-30T00:49:24+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/iraq-pm-donates-10m-syrias-umayyad-sayyida-zainab-mosques",
     "accessed_at": "2026-10-30T00:49:24+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132760",
     "accessed_at": "2026-10-30T00:49:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-29T06:27:35+00:00",
  "changes": {
   "NORTH-10300049-01": {
    "kind": "new"
   },
   "NORTH-10300049-02": {
    "kind": "new"
   },
   "NORTH-10300049-03": {
    "kind": "new"
   },
   "NORTH-10300049-04": {
    "kind": "new"
   },
   "NORTH-10300049-05": {
    "kind": "new"
   },
   "NORTH-10300049-06": {
    "kind": "possible",
    "prev": "תקיפות והפגזות של צה\"ל בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10300049-07": {
    "kind": "new"
   },
   "NORTH-10300049-08": {
    "kind": "new"
   }
  }
 }
};
