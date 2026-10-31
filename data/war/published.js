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
  "draft": "drafts/iran/2026-10-31T0040__iran-202610310040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-31T00:40:32+00:00",
   "window": {
    "from": "2026-10-30T00:40:32+00:00",
    "to": "2026-10-31T00:40:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610310040"
   },
   "summary": "העימות בין איראן לבין ארה\"ב מתאפיין בהסלמה ימית חריפה במצר הורמוז, הכוללת פגיעות במכליות נפט ושיבוש נתיבי השיט לצד יירוט כטב\"מים. במקביל, וושינגטון מאותתת על כוונות לחדש תקיפות צבאיות מקיפות בזמן שנבחנים מאמצי תיווך דיפלומטיים בהובלת קטאר ופקיסטן. בטהרן מציגים מוכנות לפעולת תגמול רחבה ויוזמות חקיקה לנסיגה מהאמנה למניעת הפצת נשק גרעיני.",
   "fronts": [
    {
     "name": "מצר הורמוז והמרחב הימי במפרץ",
     "status": "פעילות התקפית ימית הכוללת פגיעה במכליות באמצעות מוקשים ימיים וירי בלתי מזוהה, לצד לכידת כטב\"ם אמריקני ומצור ימי"
    },
    {
     "name": "הזירה האווירית והפנים-איראנית",
     "status": "כוננות איראנית לתקיפות אמריקניות מתחדשות ודיווחים לא מאומתים על פגיעות בבסיסי שיגור בדרום המדינה"
    },
    {
     "name": "הציר הדיפלומטי והמדיני",
     "status": "משא ומתן עקיף בטהרן בתיווך קטארי ופקיסטני תחת איומי חידוש אש"
    }
   ],
   "events": [
    {
     "id": "IRAN-10310040-01",
     "title": "תקיפות ופגיעות במכליות נפט במצר הורמוז",
     "summary": "מספר מכליות נפט נפגעו או עלו באש במצר הורמוז, כאשר זרוע הים של משמרות המהפכה טענה כי מכליות סטו מנתיבים מורשים או הוצתו, וגורמים ימיים דיווחו על פגיעות קליעים ומוקשים מגנטיים.",
     "axis": "איראן - ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T11:26:35+00:00",
     "last_update_at": "2026-10-31T00:00:00+00:00",
     "what_is_not_verified": "הזהות המדויקת של הגורמים המשגרים ופרטי כל המכליות שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/31/iran-war-live-oil-tankers-hit-in-hormuz-trump-says-conflict-will-end-soon?traffic_source=rss",
       "published_at": "2026-10-31T00:00:00+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307702/IRGC-Fourth-offending-tanker-catches-fire-in-Strait-of-Hormuz",
       "published_at": "2026-10-30T21:16:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/oil-tanker-struck-unknown-projectile-while-exiting-hormuz-ukmto",
       "published_at": "2026-10-30T20:38:38+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/30/oman-rescues-25-from-burning-oil-tanker-in-strait-of-hormuz?traffic_source=rss",
       "published_at": "2026-10-30T18:33:29+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/limpet-mine-attack-hormuz-suggests-iran-may-be-shifting-tactics",
       "published_at": "2026-10-30T17:27:55+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610303203",
       "published_at": "2026-10-30T11:57:13+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkfxt1ftfe",
       "published_at": "2026-10-30T11:26:35+00:00"
      }
     ],
     "places": [
      {
       "name": "האי לאוואן",
       "lat": 26.8102,
       "lon": 53.3543
      }
     ]
    },
    {
     "id": "IRAN-10310040-02",
     "title": "השתלטות איראן על כטב\"ם אמריקני מעל האי קשם",
     "summary": "חיל הים של משמרות המהפכה הודיע כי לכד כלי טיס בלתי מאויש אמריקני לסיור והטעיה בעודו שלם ממערב למצר הורמוז לאחר השתלטות על מערכותיו.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T21:37:07+00:00",
     "last_update_at": "2026-10-30T21:37:07+00:00",
     "what_is_not_verified": "אישור אמריקני עצמאי על נפילת הכטב\"ם או אופן ההשתלטות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307704/IRGC-Navy-captures-second-US-drone-intact-over-Qeshm-island",
       "published_at": "2026-10-30T21:37:07+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם",
       "lat": 26.9502,
       "lon": 56.2691
      }
     ]
    },
    {
     "id": "IRAN-10310040-03",
     "title": "דיווחים בלתי מאומתים על תקיפות אמריקניות בדרום איראן",
     "summary": "מקורות איראניים לא רשמיים דיווחו על שתי תקיפות ממוקדות שביצעה ארה\"ב באזורי האי קשם ונמל ג'אסכ לצורך סיכול משגרים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T07:37:36+00:00",
     "last_update_at": "2026-10-30T07:37:36+00:00",
     "what_is_not_verified": "היעדר כל אישור רשמי אמריקני או איראני לקיומן של התקיפות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132817",
       "published_at": "2026-10-30T07:37:36+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם",
       "lat": 26.9502,
       "lon": 56.2691
      },
      {
       "name": "ג'אסכ",
       "lat": 25.6436,
       "lon": 57.7746
      }
     ]
    },
    {
     "id": "IRAN-10310040-04",
     "title": "איתור וסיכול חוליה הקשורה למודיעין זר במערב איראן",
     "summary": "משמרות המהפכה הודיעו על פירוק ופגיעה בחוליה בת שני אנשים המקושרת לשירותי מודיעין זרים במערב המדינה.",
     "axis": "איראן - ישראל/ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T19:45:48+00:00",
     "last_update_at": "2026-10-30T19:45:48+00:00",
     "what_is_not_verified": "זהות המודיעין הזר וזהות חברי החוליה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307681/IRGC-strikes-a-team-linked-to-foreign-intelligence-services-in",
       "published_at": "2026-10-30T19:45:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10310040-05",
     "title": "יוזמות באיראן לפרישה מהאמנה למניעת הפצת נשק גרעיני והשלמת תוכנית תגובה",
     "summary": "בכיר ביטחוני איראני מסר על השלמת תוכנית צבאית מעודכנת לתגובה נרחבת לתקיפות, ובמקביל הוגשו בפרלמנט הצעות לנסיגה מהאמנה למניעת הפצת נשק גרעיני.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T22:16:22+00:00",
     "last_update_at": "2026-10-30T22:16:22+00:00",
     "what_is_not_verified": "מועד מימוש אפשרי של הצעות הפרישה מהאמנה או פרטי תוכנית התגובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-finalises-new-plan-respond-any-new-attack-official-says",
       "published_at": "2026-10-30T22:16:22+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10310040-06",
     "title": "היערכות אמריקנית לתקיפות חדשות לצד מגעים מדיניים",
     "summary": "בארה\"ב מתבצעת הערכה והיערכות לאפשרות של חידוש תקיפות צבאיות באיראן, במקביל למגעים מדיניים ולניסיונות תיווך להפסקת הלחימה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T20:22:02+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T20:22:02+00:00",
     "last_update_at": "2026-10-31T00:19:20+00:00",
     "what_is_not_verified": "המועד המדויק לפתיחת סבב תקיפות והיקפו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-there-are-talks-tehran-wants-talk",
       "published_at": "2026-10-31T00:19:20+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21743550",
       "published_at": "2026-10-31T00:04:15+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/u-s-evaluates-renewed-strikes-on-iran/",
       "published_at": "2026-10-30T20:30:31+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610300238",
       "published_at": "2026-10-30T20:22:02+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-10310040-07",
     "title": "מאמצי תיווך בינלאומיים בין וושינגטון לטהרן",
     "summary": "משלחות תיווך מקטאר ומפקיסטן פועלות מול ההנהגה בטהרן במטרה לבלום את המשך ההסלמה ולהביא להסכם בין הצדדים הנצים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T07:31:01+00:00",
     "last_update_at": "2026-10-30T18:55:36+00:00",
     "what_is_not_verified": "הפרטים המדויקים של טיוטת ההסכם ועמדות הצדדים בנוגע לפשרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/30/pakistan-army-cautiously-optimistic-about-us-iran-mediation-efforts?traffic_source=rss",
       "published_at": "2026-10-30T18:55:36+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-pakistan-military-cautiously-optimistic-iran-us-mediation",
       "published_at": "2026-10-30T18:46:31+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610304599",
       "published_at": "2026-10-30T16:52:33+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610307228",
       "published_at": "2026-10-30T07:36:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132816",
       "published_at": "2026-10-30T07:31:01+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10310040-08",
     "title": "הצבת אמצעי הגנה אווירית באחוזת מאר-א-לאגו",
     "summary": "בארה\"ב תועדה פריסת מערכות הגנה מדגם אוונג'ר וטילי סטינגר בסמוך לאחוזת נשיא ארה\"ב בפלורידה על רקע חשש מאיומים איראניים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T11:26:35+00:00",
     "last_update_at": "2026-10-30T11:26:35+00:00",
     "what_is_not_verified": "האם הוצבו טילי סטינגר בתוך האחוזה עצמה או רק מערכות אוונג'ר ומה טיב האיום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkfxt1ftfe",
       "published_at": "2026-10-30T11:26:35+00:00"
      }
     ],
     "places": [
      {
       "name": "מאר-א-לאגו",
       "lat": 26.677,
       "lon": -80.0379
      }
     ]
    }
   ],
   "not_verified": [
    "דיווחים על שתי תקיפות אמריקניות ממוקדות בדרום איראן באזור האי קשם ונמל ג'אסכ",
    "הטענה לפיה טראמפ יחדש את התקיפות הצבאיות באיראן החל מ-4 בנובמבר",
    "הדיווח לפיו חיל הים של משמרות המהפכה השתלט על מערכות הבקרה של כטב\"ם אמריקני",
    "היקף הנזק המדויק והגורם האחראי לכל אחת מהפגיעות במכליות במצר הורמוז",
    "הערכות על קיומם של תאים איראניים רדומים המאיימים על נשיא ארה\"ב בפלורידה"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "הגעה לסיום מהיר של המלחמה מול איראן",
      "מניעת השגת נשק גרעיני בידי טהרן",
      "שמירה על חופש השיט במצר הורמוז ומניעת ייצוא נפט איראני"
     ],
     "inferred": [
      "הפעלת לחץ צבאי מוגבר על ידי ריכוז כוחות ואיום בתקיפות ישירות כדי לכפות ויתורים במשא ומתן",
      "הרתעת המשטר האיראני מפגיעה באינטרסים אמריקניים באמצעות פריסת מערכי הגנה"
     ],
     "forecast": [
      "המשך איומים צבאיים עד לפקיעת מועד המגעים הדיפלומטיים",
      "אפשרות לפעולות תגמול מוגבלות נגד מערכי שיגור ומוצבים באזור המפרץ אם השיחות ייכשלו"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הרתעת האויבים מפגיעה בריבונות ובזהות הלאומית",
      "הטלת מחיר כבד על ארה\"ב ובעלות בריתה במקרה של תקיפות חדשות",
      "שליטה במעבר כלי שיט בנתיבי מצר הורמוז"
     ],
     "inferred": [
      "שימוש בשיבוש הכלכלה העולמית וסחר הנפט כדי למנוע מתקפה אמריקנית רחבה",
      "איום בפריצה גרעינית וביטול מחויבויות בינלאומיות כמנוף לחץ במשא ומתן"
     ],
     "forecast": [
      "המשך פעולות הטרדה ושיבוש ימי מוגבלות במצר הורמוז",
      "שמירה על ערוצי המשא ומתן פתוחים מול מתווכים אזוריים במקביל להפגנת מוכנות צבאית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/30/pakistan-army-cautiously-optimistic-about-us-iran-mediation-efforts?traffic_source=rss",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/exclusive-pakistan-military-cautiously-optimistic-iran-us-mediation",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/in_the_news/u-s-evaluates-renewed-strikes-on-iran/",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610307228",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86307681/IRGC-strikes-a-team-linked-to-foreign-intelligence-services-in",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21743550",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-there-are-talks-tehran-wants-talk",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132816",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bkfxt1ftfe",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T00:40:40+00:00",
  "changes": {
   "IRAN-10310040-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה במכליות נפט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-10310040-02": {
    "kind": "possible",
    "prev": "דיווחים על תקיפה אמריקנית ופעילות הגנה אווירית באי קשם",
    "score": 0.633
   },
   "IRAN-10310040-03": {
    "kind": "new"
   },
   "IRAN-10310040-04": {
    "kind": "new"
   },
   "IRAN-10310040-05": {
    "kind": "possible",
    "prev": "מגעים דיפלומטיים לחילופי מסרים והצבת תנאים בין ארצות הברית לאיראן",
    "score": 0.633
   },
   "IRAN-10310040-06": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "תדרוך הנשיא טראמפ והיערכות לאפשרות של מתקפה אמריקנית באיראן",
    "score": 0.817
   },
   "IRAN-10310040-07": {
    "kind": "new"
   },
   "IRAN-10310040-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-30T1719__ukraine-202610301719.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-30T17:19:07+00:00",
   "window": {
    "from": "2026-10-29T17:19:07+00:00",
    "to": "2026-10-30T17:19:07+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610301719"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעוצמה, כאשר רוסיה תוקפת יעדי תשתית ותחבורה כדוגמת תחנת הרכבת בדניפרו, ואילו אוקראינה חידשה את מתקפות הכטב\"מים על בתי זיקוק בעומק שטח רוסיה. לצד חילופי האש, נרשמה הפוגה מקומית חריגה באזור אולשקי במחוז חרסון שאפשרה פינוי אזרחים. במקביל נמשכים מהלכים לקראת מגעים משולשים באבו דאבי, אף שרוסיה מסרבת לעצור את הלחימה ואירופה חוששת מהדרה מההסדרים המדיניים.",
   "fronts": [
    {
     "name": "מחוז חרסון / נהר הדניפרו",
     "status": "הפסקת אש מקומית זמנית לצורך מבצע סיוע ופינוי אזרחים בעיר אולשקי"
    },
    {
     "name": "מחוז חרקוב (איזיום והסביבה)",
     "status": "הדיפת מתקפות קרקעיות רוסיות לצד פגיעות של תקיפות אוויריות בריכוזי אוכלוסייה"
    },
    {
     "name": "מחוז דניפרופטרובסק (דניפרו)",
     "status": "ספיגת תקיפות טילים וכטב\"מים רוסיים ממוקדים נגד תחנת הרכבת ותשתיות"
    },
    {
     "name": "עומק שטח רוסיה (סמארה, נובוקויבישבסק ויעדים נוספים)",
     "status": "מתקפות כטב\"מים אוקראיניות על מתקני נפט ואנרגיה ומבצעי מארב של כוחות מיוחדים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10301719-01",
     "title": "פינוי אזרחים והפסקת אש הומניטרית בעיר אולשקי הכבושה",
     "summary": "מבצע סיוע ופינוי תושבים יצא לפועל בעיר אולשקי שבמחוז חרסון בחסות הפסקת אש מקומית ובתיווך אמריקאי, כאשר מפונים מועברים ליעדים באוקראינה וברוסיה.",
     "axis": "חזית הדרום (מחוז חרסון)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T10:05:56+00:00",
     "last_update_at": "2026-10-30T17:13:48+00:00",
     "what_is_not_verified": "המספר המדויק של המפונים לכל צד והיקף הסיוע שהוכנס בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/30/evacuation-besieged-ukrainian-city-oleshky",
       "published_at": "2026-10-30T17:13:48+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/society/2211123",
       "published_at": "2026-10-30T17:10:13+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49120",
       "published_at": "2026-10-30T16:45:47+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c60me298k1yeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-30T16:26:11+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/30/russia-s-human-rights-commissioner-says-humanitarian-mission-in-occupied-oleshkyis-wrapping-up",
       "published_at": "2026-10-30T16:22:35+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4179814-ukrainian-delegation-and-evacuated-residents-of-oleshky-heading-to-russias-anapa.html",
       "published_at": "2026-10-30T15:19:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/30/evacuation-humanitarian-aid-distribution-begin-in-russian-occupied-oleshky",
       "published_at": "2026-10-30T10:05:56+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      },
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      },
      {
       "name": "אנאפה, רוסיה",
       "lat": 44.8943,
       "lon": 37.3169
      }
     ]
    },
    {
     "id": "UKRAINE-10301719-02",
     "title": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק ברוסיה",
     "summary": "כלי טיס בלתי מאוישים פגעו במתקן דלקים וזיקוק נפט סמוך לעיר סמארה, מה שהוביל לדליקות במקום לאחר תקופה שבה הופסקו התקיפות על אתרים מסוג זה.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T07:51:01+00:00",
     "last_update_at": "2026-10-30T13:02:16+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקני הזיקוק ומספר בתי הזיקוק הנוספים שהותקפו לפי הטענה הרוסית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2210935",
       "published_at": "2026-10-30T13:02:16+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21740945",
       "published_at": "2026-10-30T09:09:24+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132819",
       "published_at": "2026-10-30T07:51:01+00:00"
      }
     ],
     "places": [
      {
       "name": "נובוקויבישבסק, רוסיה",
       "lat": 53.0992,
       "lon": 49.9484
      },
      {
       "name": "סמארה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    },
    {
     "id": "UKRAINE-10301719-03",
     "title": "תקיפה רוסית חוזרת על תחנת הרכבת בעיר דניפרו",
     "summary": "כוחות רוסים תקפו את מתחם תחנת הרכבת בדניפרו זה היום השני ברציפות, תקיפה שהביאה לפציעת אישה ולשריפה במתקן.",
     "axis": "מחוז דניפרופטרובסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T02:00:47+00:00",
     "last_update_at": "2026-10-30T15:54:00+00:00",
     "what_is_not_verified": "סוג החימוש ששימש לתקיפה השנייה והיקף הנזק המלא למסילות ולמבנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060507/",
       "published_at": "2026-10-30T15:54:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/30/ukraine-war-briefing-russian-drone-attack-dnipro-rail-platform",
       "published_at": "2026-10-30T02:00:47+00:00"
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
     "id": "UKRAINE-10301719-04",
     "title": "מארב ופעילות של כוחות מיוחדים אוקראיניים בתוך שטח רוסיה",
     "summary": "הכוחות למבצעים מיוחדים של צבא אוקראינה ביצעו מארב בשטח רוסיה, השמידו כלי רכב ותפסו מסמכים צבאיים.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T13:33:54+00:00",
     "last_update_at": "2026-10-30T14:39:00+00:00",
     "what_is_not_verified": "המיקום המדויק שבו בוצע המארב בתוך שטח הפדרציה הרוסית וסוג המסמכים שנתפסו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4179800-ukraines-sof-ambush-enemy-in-russia-and-seize-documents.html",
       "published_at": "2026-10-30T14:39:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49115",
       "published_at": "2026-10-30T13:33:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10301719-05",
     "title": "הדיפת מתקפה רוסית באזור חרקוב ועליית מניין הקורבנות מאיזיום",
     "summary": "מתקפה של כוחות רוסיים נהדפה במחוז חרקוב, במקביל להכרזה על יום אבל בעיר איזיום עקב עליית מניין ההרוגים מתקיפה אווירית רוסית לחמישה.",
     "axis": "חזית מחוז חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T14:59:00+00:00",
     "last_update_at": "2026-10-30T16:59:01+00:00",
     "what_is_not_verified": "המיקום המדויק שבו נהדפה המתקפה בתוך מחוז חרקוב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49122",
       "published_at": "2026-10-30T16:59:01+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4179811-october-31-declared-day-of-mourning-in-izium-as-death-toll-from-russian-airstrike-rises-to-five.html",
       "published_at": "2026-10-30T14:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "איזיום, אוקראינה",
       "lat": 49.1913,
       "lon": 37.2784
      }
     ]
    },
    {
     "id": "UKRAINE-10301719-06",
     "title": "הודעת נשיא אוקראינה על הרחבת יחידות התקיפה לטווח ארוך",
     "summary": "וולודימיר זלנסקי הצהיר כי אוקראינה מגדילה את יחידות התקיפה בעומק שטח רוסיה, ומפתח יכולות לפגוע ביעדים מרוחקים עד חצי האי ימאל ומערב סיביר.",
     "axis": "המערכה האסטרטגית בעומק",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T16:56:00+00:00",
     "last_update_at": "2026-10-30T16:56:00+00:00",
     "what_is_not_verified": "לוחות הזמנים לייצור הנשק וסוגי הטילים והמל\"טים החדשים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_a542e674a4174c49",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060539/",
       "published_at": "2026-10-30T16:56:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10301719-07",
     "title": "קרמלין שולל הפסקת אש לקראת שיחות אבו דאבי",
     "summary": "דובר הקרמלין הודיע כי מוסקבה מתנגדת להפסקת אש שתשמש כהפוגה עבור קייב וכי הלחימה לא תיעצר לקראת השיחות המשולשות המתוכננות.",
     "axis": "הזירה המדינית והדיפלומטית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T14:21:12+00:00",
     "last_update_at": "2026-10-30T15:02:38+00:00",
     "what_is_not_verified": "המועד הסופי והרכב המשתתפים המדויק של שיחות אבו דאבי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211035",
       "published_at": "2026-10-30T15:02:38+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211005",
       "published_at": "2026-10-30T14:21:12+00:00"
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
     "id": "UKRAINE-10301719-08",
     "title": "סירוב חברות אמריקאיות לקלוט סולר רוסי מעסקת טראמפ-פוטין",
     "summary": "מכליות הנושאות מאות אלפי טונות של סולר רוסי שטו לכיוון ארצות הברית במסגרת הסכם בין הנשיאים, אך חברות אמריקאיות נמנעות מרכישתו עקב חשש מהליכים משפטיים וחקירות.",
     "axis": "מדיניות סנקציות ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T19:04:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-29T19:04:17+00:00",
     "last_update_at": "2026-10-30T16:04:48+00:00",
     "what_is_not_verified": "האם המכליות יפרקו את המטען בארצות הברית או יופנו לברזיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49119",
       "published_at": "2026-10-30T16:04:48+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/us-news/2026/oct/29/seven-oil-tankers-288000-tonnes-russian-diesel-sail-us-putin-trump",
       "published_at": "2026-10-29T19:04:17+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת רוסאטום בדבר פגיעה מכוונת ומחמירה בעובדי תחנת הכוח הגרעינית בזפוריז'יה",
    "חלוקת המספרים המדויקת של האזרחים שהתפנו מאולשקי לרוסיה לעומת אלה שהתפנו לשטח שבשליטת אוקראינה",
    "הטענה הרוסית שארבעה מתקני זיקוק שונים הותקפו בגל התקיפות האחרון של אוקראינה",
    "הדיווחים על פריסת מבצעי גיוס כפוי ברחובות בעשרות מחוזות ברוסיה"
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
     "value": 1.1172,
     "unit": "USD",
     "change_pct": 0.38,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "להרחיב את יחידות התקיפה לטווח ארוך כדי לפגוע במטרות צבאיות ותשתיות בעומק רוסיה כמענה לפגיעה בעריה",
      "לדאוג לאספקה שוטפת של טילי הגנה אווירית עבור מערכות פטריוט",
      "להבטיח את ביטחון השיט בים השחור במסגרת שיחות מול טורקיה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי על תעשיית הדלק הרוסית על אף הסתייגויות מצד ארצות הברית",
      "הבטחת מעורבות בין-לאומית בהסדרי הפסקות אש ופינוי אזרחים משטחים כבושים"
     ],
     "forecast": [
      "המשך הגדלת טווח הפגיעה של מל\"טים לעומק מזרח רוסיה כדי לפגוע בתשתיות אנרגיה נוספות",
      "הגברת הלחץ הדיפלומטי על מדינות אירופה לקבלת מלאי מיידי של מיירטי הגנה אווירית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "התנגדות מוחלטת להפסקת אש שתאפשר מנוחה או היערכות מחדש לצבא אוקראינה",
      "המשך הפעילות הקרבית ללא עצירה לקראת שיחות המשא ומתן באבו דאבי"
     ],
     "inferred": [
      "החרבת צומתי תחבורה ותשתיות רכבת אוקראיניות כדי לפגוע בלוגיסטיקה ובתנועת כוחות ואזרחים",
      "ניסיון לעקוף סנקציות אנרגיה באמצעות הסכמים ישירים עם הממשל האמריקאי הנכנס"
     ],
     "forecast": [
      "המשך התקיפות האוויריות והבליסטיות על יעדי תשתית במרכז ומזרח אוקראינה",
      "חידוש הלחץ הצבאי בגזרת חרסון לאחר תום מועד הפסקת האש ההומניטרית באולשקי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c60me298k1yeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/us-news/2026/oct/29/seven-oil-tankers-288000-tonnes-russian-diesel-sail-us-putin-trump",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21740945",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/30/evacuation-humanitarian-aid-distribution-begin-in-russian-occupied-oleshky",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060539/",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2211005",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132819",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49119",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4179811-october-31-declared-day-of-mourning-in-izium-as-death-toll-from-russian-airstrike-rises-to-five.html",
     "accessed_at": "2026-10-30T17:19:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T00:42:53+00:00",
  "changes": {
   "UKRAINE-10301719-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הפסקת אש הומניטרית ומבצע פינוי באולשקי שבמחוז חרסון",
    "score": 1.0
   },
   "UKRAINE-10301719-02": {
    "kind": "new"
   },
   "UKRAINE-10301719-03": {
    "kind": "possible",
    "prev": "תקיפות אוויריות וטילים רוסיים על דניפרו, קייב וערים נוספות",
    "score": 0.633
   },
   "UKRAINE-10301719-04": {
    "kind": "new"
   },
   "UKRAINE-10301719-05": {
    "kind": "new"
   },
   "UKRAINE-10301719-06": {
    "kind": "new"
   },
   "UKRAINE-10301719-07": {
    "kind": "possible",
    "prev": "מגעים דיפלומטיים ותנאים לפסגה ושיחות שלום",
    "score": 0.633
   },
   "UKRAINE-10301719-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "דיווח על מכליות דלק רוסי העושות דרכן לארצות הברית",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-31T0050__north-202610310050.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-31T00:50:01+00:00",
   "window": {
    "from": "2026-10-30T00:50:01+00:00",
    "to": "2026-10-31T00:50:01+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610310050"
   },
   "summary": "הלחימה והמתיחות בדרום לבנון נמשכות לצד פעילות של כוחות ישראליים ודיווחים על פגיעה במבנים ותשתיות. בזירה הפנימית בלבנון גובר הלחץ המדינתי והמשפטי על חיזבאללה בעקבות חשיפת משלוחי אמצעי לחימה והעמדת מעורבים לדין. בסוריה מתמודדים אזורי המזרח והצפון עם נזקי שיטפונות קשים, לצד קשיים כלכליים תחת הממשל החדש.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה פעילה, פעילות קרקעית, הפגזות וירי ארטילרי"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "מתח פוליטי ומשפטי מול חיזבאללה וניסיונות ממשלתיים לפירוק נשק במחנות"
    },
    {
     "name": "מזרח וצפון סוריה",
     "status": "משבר הומניטרי ותשתיתי בעקבות שיטפונות וקשיים כלכליים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10310050-01",
     "title": "דיווח על פעילות צה\"ל בדרום לבנון",
     "summary": "לפי דיווחים, כוחות ישראליים פוצצו מבנים, הפגיזו עיירות, הציתו בתים וירו במקלעים באזורים שונים בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T22:51:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T22:51:23+00:00",
     "last_update_at": "2026-10-30T22:51:23+00:00",
     "what_is_not_verified": "הדיווח נסמך על כלי תקשורת ולא נמסר אישור רשמי של צה\"ל או פירוט מקומות מדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israel-blows-up-homes-shells-towns-in-southern-lebanon/4106993",
       "published_at": "2026-10-30T22:51:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-02",
     "title": "יירוט מטרה חשודה בדרום לבנון",
     "summary": "דיווח ברשת החברתית על יירוט של מטרה חשודה בשמי דרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T05:41:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T05:41:03+00:00",
     "last_update_at": "2026-10-30T05:41:03+00:00",
     "what_is_not_verified": "זהות המטרה, הגורם המיירט והמיקום המדויק אינם מפורטים מעבר להודעה בטלגרם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94897",
       "published_at": "2026-10-30T05:41:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-03",
     "title": "הגשת כתבי אישום בלבנון על משאית חומרי הנפץ של חיזבאללה",
     "summary": "בית הדין הצבאי בלבנון הגיש כתבי אישום נגד שלושה-עשר בני אדם, בהם פעילי חיזבאללה, על מעורבות בהברחת מטען חומרי נפץ שנתפס במחסום דהר אל-ביידר.",
     "axis": "לבנון (פנים)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T09:45:55+00:00",
     "last_update_at": "2026-10-30T16:55:22+00:00",
     "what_is_not_verified": "חלק מהנאשמים מזוהים רק בכינויים ולא נתפסו בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-court-charges-13-over-hezbollah-explosives-shipment",
       "published_at": "2026-10-30T16:55:22+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.newarab.com/news/lebanon-court-charges-13-over-seized-hezbollah-explosives-truck",
       "published_at": "2026-10-30T16:17:30+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://english.almanar.com.lb/article/144942/",
       "published_at": "2026-10-30T16:17:15+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/965612/dahr-al-baidar-explosives-case-takes-new-turn-as-13-face-charges/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965612",
       "published_at": "2026-10-30T15:10:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965561/military-prosecutor-charges-13-hezbollah-members-over-explosives-truck/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965561",
       "published_at": "2026-10-30T09:45:55+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-ביידר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      }
     ]
    },
    {
     "id": "NORTH-10310050-04",
     "title": "פרסום נתוני נפגעים על ידי משרד הבריאות הלבנוני",
     "summary": "משרד הבריאות בלבנון עדכן את מניין הנפגעים מפעולות ישראל במדינה.",
     "axis": "דרום לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T19:07:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T19:07:22+00:00",
     "last_update_at": "2026-10-30T19:07:22+00:00",
     "what_is_not_verified": "הנתונים מתבססים רק על דיווח משרד הבריאות הלבנוני ללא אימות חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a080a0d65aca9bef",
       "url": "https://english.almanar.com.lb/article/144982/",
       "published_at": "2026-10-30T19:07:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-05",
     "title": "התייעצויות ממשלת לבנון בנושא הנשק הפלסטיני במחנות",
     "summary": "ראש ממשלת לבנון נואף סלאם הודיע על פתיחת התייעצויות על תוכנית לאומית לניהול מחנות הפליטים והסדרת סוגיית הנשק הפלסטיני תחת הריבונות הלבנונית.",
     "axis": "לבנון (פנים)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T06:08:33+00:00",
     "last_update_at": "2026-10-30T06:08:33+00:00",
     "what_is_not_verified": "מידת ההסכמה וההיענות מצד הפלגים הפלסטיניים בשטח אינה ידועה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b60ceafba37a2fe1",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965519/pm-salam-addressing-the-situation-of-palestinian-refugees-in-lebanon-r/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965519",
       "published_at": "2026-10-30T06:08:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-06",
     "title": "שיחות בין לבנון לקטאר על תוכנית משק האנרגיה",
     "summary": "משרד האנרגיה הלבנוני דיווח על התקדמות במגעים עם קטאר לגיבוש מכתב כוונות בנושא תוכנית אנרגיה משולבת וסיוע בשיקום נזקי המלחמה בדרום.",
     "axis": "לבנון (פנים)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T13:07:10+00:00",
     "last_update_at": "2026-10-30T13:07:10+00:00",
     "what_is_not_verified": "טרם אושר מכתב הכוונות בממשלה הלבנונית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_62ac06f37c404d85",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965598/lebanon-qatar-make-progress-in-talks-on-energy-sector-proposal/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965598",
       "published_at": "2026-10-30T13:07:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-07",
     "title": "שיטפונות קטלניים במזרח ובצפון סוריה",
     "summary": "גשמים עזים גרמו לשיטפונות שגבו את חייהם של שבעה בני אדם וגרמו לנזקים כבדים לתשתיות במחוזות א-רקה, דיר א-זור, אל-חסכה, חלב ואידליב.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T19:46:34+00:00",
     "last_update_at": "2026-10-30T19:50:09+00:00",
     "what_is_not_verified": "גורלם של ארבעה נעדרים טרם התברר ופרטי אחד ההרוגים חסרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_x_sana",
       "url": "https://www.newarab.com/news/five-children-among-seven-dead-eastern-syria-floods",
       "published_at": "2026-10-30T19:50:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_x_sana",
       "url": "https://www.al-monitor.com/originals/2026/10/five-children-among-seven-dead-eastern-syria-floods",
       "published_at": "2026-10-30T19:46:34+00:00"
      }
     ],
     "places": [
      {
       "name": "א-רקה, סוריה",
       "lat": 35.9497,
       "lon": 39.0089
      },
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על הצתת בתים וירי מכונות ירייה בדרום לבנון מבוססות על דיווחים עיתונאיים ללא אישור רשמי",
    "זהות המטרה החשודה שיורטה בדרום לבנון אינה ידועה",
    "זהותם המלאה של חמישה מנאשמי פרשת משאית חומרי הנפץ בלבנון שמופיעים תחת כינויים בלבד"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "שימוש באמצעי הלחימה שנתפסו לצורך עימות עם ישראל והגנה על לבנון"
     ],
     "inferred": [
      "שימור יכולות צבאיות והתחמשות למרות לחצים פנימיים והסכמים מדיניים לפירוק נשק"
     ],
     "forecast": [
      "המשך חיכוך מול מערכת המשפט והממשל בלבנון סביב שינוע אמצעי לחימה"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "אכיפת ריבונות המדינה על מחנות הפליטים הפלסטיניים והעמדה לדין של גורמים הפוגעים בביטחון המדינה"
     ],
     "inferred": [
      "החזרת סמכויות הריבונות וצמצום האחיזה הצבאית החמושה של חיזבאללה ושל פלגים פלסטיניים"
     ],
     "forecast": [
      "המשך מאמצי הידברות זהירים לצד העמקה בפיקוח על מחסומים וצירים מרכזיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/144982/",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/five-children-among-seven-dead-eastern-syria-floods",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-blows-up-homes-shells-towns-in-southern-lebanon/4106993",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965598/lebanon-qatar-make-progress-in-talks-on-energy-sector-proposal/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965598",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-court-charges-13-over-hezbollah-explosives-shipment",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/five-children-among-seven-dead-eastern-syria-floods",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94897",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T00:49:24+00:00",
  "changes": {
   "NORTH-10310050-01": {
    "kind": "possible",
    "prev": "כניסת אזרחים לבנונים לשטח הקו הצהוב בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10310050-02": {
    "kind": "possible",
    "prev": "הצהרת חזבאללה בדבר שיקום דרום ביירות ואי-ויתור על אדמות לבנון",
    "score": 0.467
   },
   "NORTH-10310050-03": {
    "kind": "new"
   },
   "NORTH-10310050-04": {
    "kind": "new"
   },
   "NORTH-10310050-05": {
    "kind": "new"
   },
   "NORTH-10310050-06": {
    "kind": "new"
   },
   "NORTH-10310050-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "חברת נפט אמריקאית מקדמת הכפלת תפוקה בצפון-מזרח סוריה",
    "score": 0.65
   }
  }
 }
};
