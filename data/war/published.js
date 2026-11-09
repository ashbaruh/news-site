/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-09T0712__yemen-202611090712.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-09T07:12:02+00:00",
   "window": {
    "from": "2026-11-08T07:12:02+00:00",
    "to": "2026-11-09T07:12:02+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611090712"
   },
   "summary": "העימות בתימן וסביבתה מחריף משמעותית עם קריסת הפסקת האש, כאשר כוחות ממשלת תימן והקואליציה מנהלים מתקפה רחבה בחזיתות מארב, תעז וחוף הים האדום. במקביל, החות'ים חידשו את הפגיעות בעומק שטח סעודיה וגרמו נזק למגדל אראמקו בריאד, לצד מארבים ממוקדים סמוך למצר באב אל-מנדב. הלחימה מלווה במשבר הומניטרי הולך ומעמיק ודיווחים על פריסת כוחות סיוע זרים לאורך הגבול.",
   "fronts": [
    {
     "name": "ריאד ועומק ערב הסעודית",
     "status": "ירי טילים בליסטיים חות'יים ופגיעה במתקנים אזרחיים וכלכליים, לצד יירוטים של הקואליציה"
    },
    {
     "name": "חזיתות מארב, תעז וטור אל-באחה",
     "status": "מתקפה יבשתית ואווירית משולבת של כוחות הממשלה במסגרת מבצע 'שחר תימן' לצד הפגזות חות'יות"
    },
    {
     "name": "מצר באב אל-מנדב ורכס כהבוב (מחוז לחג')",
     "status": "מארבי נ\"ט חות'יים נגד שיירות משוריינות פרו-סעודיות"
    },
    {
     "name": "חוף הים האדום",
     "status": "הסלמה בלחימה במסגרת מתקפת כוחות ממשלת תימן והחרפת משבר העקורים"
    },
    {
     "name": "גבול סעודיה-תימן",
     "status": "דיווחים על היערכות ופריסת כוחות קרקעיים, כולל תגבורת סורית מדווחת"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11090712-01",
     "title": "פגיעה במגדל חברת אראמקו במרכז הפיננסי בריאד כתוצאה ממתקפת טילים חות'ית",
     "summary": "מגדל משרדים של חברת הנפט אראמקו במרכז הפיננסי על שם המלך עבדאללה בריאד ניזוק בעקבות מתקפת טילים של החות'ים. לפי משרד האנרגיה הסעודי הנזק נגרם משברי יירוט של ניסיון תקיפה, בעוד מקורות אחרים וסרטונים מצביעים על פגיעה ישירה של טיל בליסטי במבנה.",
     "axis": "תימן - ערב הסעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T08:11:54+00:00",
     "last_update_at": "2026-11-08T21:37:36+00:00",
     "what_is_not_verified": "האם המבנה נפגע מפגיעה ישירה של טיל בליסטי או משברי יירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.bbc.co.uk/news/articles/c6ly3mjx958eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-08T21:37:36+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.al-monitor.com/originals/2026/11/houthi-attack-damages-aramco-building-riyadhs-financial-district",
       "published_at": "2026-11-08T20:46:28+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.sabanew.net/viewstory/155449",
       "published_at": "2026-11-08T20:03:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://t.me/abualiexpress/133283",
       "published_at": "2026-11-08T13:48:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://t.me/alexmehacarmel/49401",
       "published_at": "2026-11-08T13:29:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.newarab.com/news/aramco-skyscraper-damaged-riyadh-targeted-houthi-missiles",
       "published_at": "2026-11-08T11:39:44+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.newarab.com/news/trump-says-unlikely-attack-iran-araghchi-warns-us-talks",
       "published_at": "2026-11-08T09:31:01+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_9dbbc5a541220a1a",
       "url": "https://www.france24.com/en/middle-east/20261108-yemen-s-houthis-claim-attack-on-aramco-building-in-riyadh-s-financial-district",
       "published_at": "2026-11-08T08:11:54+00:00"
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
     "id": "YEMEN-11090712-02",
     "title": "מבצע שחר תימן: מתקפה נרחבת של כוחות ממשלת תימן נגד עמדות החות'ים",
     "summary": "כוחות ממשלת תימן בסיוע הקואליציה פתחו במבצע שבו בוצעו עשרות תקיפות אוויריות, תקיפות כטב\"מים ומאות תקיפות ארטילריה ורקטות בחזיתות מארב, תעז וטור אל-באחה. מנגד, החות'ים דיווחו על עשרות תקיפות של הקואליציה שהביאו לנפגעים אזרחיים.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T14:22:14+00:00",
     "last_update_at": "2026-11-08T23:05:33+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בקרב לוחמי החות'ים והאזרחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c3c648edbfc2c804",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-attacks-against-houthi-positions",
       "published_at": "2026-11-08T23:05:33+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_c3c648edbfc2c804",
       "url": "https://www.sabanew.net/viewstory/155439",
       "published_at": "2026-11-08T16:17:33+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_c3c648edbfc2c804",
       "url": "https://www.france24.com/en/yemen-s-humanitarian-crisis-worsens",
       "published_at": "2026-11-08T14:22:14+00:00"
      }
     ],
     "places": [
      {
       "name": "מארב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "טור אל-באחה, תימן",
       "lat": 12.9995,
       "lon": 44.4645
      }
     ]
    },
    {
     "id": "YEMEN-11090712-03",
     "title": "פציעת תשעה אזרחים בהפגזה חות'ית בתעז",
     "summary": "הפגזה שביצעו החות'ים במחוז תעז פצעה תשעה אזרחים, ביניהם שני ילדים ושתי נשים.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T04:03:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T04:03:19+00:00",
     "last_update_at": "2026-11-09T04:03:19+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_387b69e7fb4c11c1",
       "url": "https://www.sabanew.net/viewstory/155463",
       "published_at": "2026-11-09T04:03:19+00:00"
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
     "id": "YEMEN-11090712-04",
     "title": "השמדת כן שיגור טילים בליסטיים בצנעא על ידי הקואליציה",
     "summary": "כוחות הקואליציה בהובלת ערב הסעודית הודיעו כי השמידו עמדת שיגור לטילים בליסטיים באזור הבירה צנעא.",
     "axis": "תימן - ערב הסעודית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T18:28:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T18:28:00+00:00",
     "last_update_at": "2026-11-08T18:28:00+00:00",
     "what_is_not_verified": "היקף הנזק הממשי ואימות השמדת הכן בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155445",
       "published_at": "2026-11-08T18:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11090712-05",
     "title": "מארבי נ\"ט חות'יים נגד משוריינים ברכס כהבוב סמוך למצר באב אל-מנדב",
     "summary": "החות'ים הציגו תיעוד של מארבי טילי נ\"ט מונחים מרכסי הרי כהבוב במחוז לחג' לעבר שיירות משוריינות של כוחות הנתמכים על ידי סעודיה, וטענו לפגיעות ישירות והשמדת כלים.",
     "axis": "באב אל-מנדב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T17:45:26+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T17:45:26+00:00",
     "last_update_at": "2026-11-08T17:45:26+00:00",
     "what_is_not_verified": "כמות המשוריינים המדויקת שהושמדה ומועד הצילום המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49410",
       "published_at": "2026-11-08T17:45:26+00:00"
      }
     ],
     "places": [
      {
       "name": "כהבוב, לחג', תימן",
       "lat": 12.938,
       "lon": 43.6504
      }
     ]
    },
    {
     "id": "YEMEN-11090712-06",
     "title": "התרסקות טיל חות'י במחוז אל-ביידאא לאחר שיגור כושל",
     "summary": "טיל ששיגרו החות'ים ממחוז אל-ביידאא בתימן כשל במהלך מעופו והתרסק בחזרה לקרקע.",
     "axis": "פנים-תימני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T14:17:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T14:17:59+00:00",
     "last_update_at": "2026-11-08T14:17:59+00:00",
     "what_is_not_verified": "היעד המקורי שאליו שוגר הטיל והסיבה לכשל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49404",
       "published_at": "2026-11-08T14:17:59+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ביידאא, תימן",
       "lat": 13.9881,
       "lon": 45.5729
      }
     ]
    },
    {
     "id": "YEMEN-11090712-07",
     "title": "דיווח על פריסת חיילים סורים בגבול תימן-סעודיה",
     "summary": "סוכנות הידיעות הצרפתית דיווחה ממקורות תימנים כי מאות חיילים סורים הוצבו משני עברי הגבול בין סעודיה לתימן כסיוע סורי לסעודיה במלחמתה נגד החות'ים, כחלק משלב פריסה ראשון של כ-3,000 חיילים.",
     "axis": "גבול תימן - ערב הסעודית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T08:01:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T08:01:01+00:00",
     "last_update_at": "2026-11-08T08:01:01+00:00",
     "what_is_not_verified": "אישור רשמי מטעם סוריה או ערב הסעודית על נוכחות כוחות סוריים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133265",
       "published_at": "2026-11-08T08:01:01+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים על פגיעה ישירה של טיל בליסטי במגדל אראמקו לעומת גרסת סעודיה שמדובר בנזק מנפילת שברי יירוט",
    "הדיווח על פריסת מאות עד אלפי חיילים סורים בגבול סעודיה-תימן לטובת סעודיה",
    "מספר הנפגעים והאבידות המדויק של החות'ים (267 נפגעים/נסוגים) במבצע 'שחר תימן'",
    "טענת החות'ים על נפגעים אזרחיים ב-91 תקיפות קואליציה בשש מחוזות",
    "אימות השמדת כן שיגור הטילים הבליסטיים בצנעא על ידי כוחות הקואליציה",
    "היעד ומטרת השיגור של הטיל החות'י שהתרסק במחוז אל-ביידאא"
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
     "value": 3.199,
     "unit": "ILS",
     "change_pct": 0.86,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "תקיפת מתקני חברת אראמקו ותשתיות אסטרטגיות סעודיות בתגובה ללחימה",
      "פגיעה בריכוזי כוחות סעודיים ופרו-סעודיים בצירי מצר באב אל-מנדב"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומורלי על ההנהגה הסעודית בריאד לעצירת המבצעים הצבאיים בתימן",
      "שיבוש התקדמות כוחות ממשלת תימן באמצעות ירי מרחוק והטרדות נ\"ט"
     ],
     "forecast": [
      "המשך ניסיונות שיגור טילים וכטב\"מים לעבר יעדי אנרגיה ותשתיות בריאד ובסעודיה",
      "הגברת מארבים ופעולות גרילה ממוקדות בצירי הגישה למצר באב אל-מנדב"
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה בהובלת ערב הסעודית",
     "declared": [
      "פגיעה בריכוזי מיליציות החות'ים, ביצוריהם ותגבורותיהם במסגרת מבצע 'שחר תימן'",
      "השמדת יכולות ומשגרי טילים בליסטיים המאיימים על עומק סעודיה ועל האזור"
     ],
     "inferred": [
      "הכרעת החות'ים במספר חזיתות מפתח במקביל (תעז, מארב, חוף הים האדום) כדי להחזיר שטחים לשליטה ממשלתית",
      "הגנה על הבירה ריאד ומתקני הנפט תוך צמצום דיווחים על נזקים ישירים"
     ],
     "forecast": [
      "המשך הפעלת אש כבדה מהאוויר והיבשה בחזיתות הלחימה הפנימיות בתימן",
      "הידוק ההגנה האווירית סביב מתקנים אסטרטגיים בסעודיה ותגבור כוחות לאורך הגבול"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/houthi-attack-damages-aramco-building-riyadhs-financial-district",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c6ly3mjx958eo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/yemen-s-humanitarian-crisis-worsens",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-claim-attacks-against-houthi-positions",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/trump-says-unlikely-attack-iran-araghchi-warns-us-talks",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155445",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133265",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49404",
     "accessed_at": "2026-11-09T07:12:02+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-08T16:56:02+00:00",
  "changes": {
   "YEMEN-11090712-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה במגדל חברת אראמקו בריאד במסגרת מתקפת טילים וכטב\"מים חות'ית",
    "score": 1.0
   },
   "YEMEN-11090712-02": {
    "kind": "new"
   },
   "YEMEN-11090712-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעות של החות'ים באזרחים ובאמבולנס בדרום-מזרח תעז",
    "score": 0.817
   },
   "YEMEN-11090712-04": {
    "kind": "possible",
    "prev": "עשרות הרוגים ופצועים בתקיפה אווירית בכפר א-שריעה במחוז צנעא",
    "score": 0.633
   },
   "YEMEN-11090712-05": {
    "kind": "new"
   },
   "YEMEN-11090712-06": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "התרסקות טיל חות'י כושל במחוז אל-ביידאא'",
    "score": 1.0
   },
   "YEMEN-11090712-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "דיווחים על פריסת לוחמים סורים בגבול סעודיה-תימן לצד הכחשה רשמית מדמשק",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-09T0705__iran-202611090705.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-09T07:05:57+00:00",
   "window": {
    "from": "2026-11-08T07:05:57+00:00",
    "to": "2026-11-09T07:05:57+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611090705"
   },
   "summary": "העימות הצבאי והכלכלי בין ארצות הברית לאיראן נמשך, כאשר וושינגטון מקדמת מצור יבשתי ומבצעת תקיפות נקודתיות בדרום איראן, לצד פעולות איראניות לשיבוש השיט במצר הורמוז. במקביל, מאמצי תיווך דיפלומטיים בהובלת קטאר נתקלים בחילוקי דעות עמוקים לגבי תנאי ההסדר, הפשרת נכסים וסוגיית הגרעין. בישראל מביעים דאגה מהתקדמות הנשק הגרעיני, בעוד שלוחות איראן באזור, דוגמת החות'ים, ממשיכות לתקוף מטרות אסטרטגיות במפרץ.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "מתיחות צבאית סביב חופש השיט, תקיפות הדדיות ושיבוש מערכות ניווט ימיות"
    },
    {
     "name": "הזירה המדינית-כלכלית (ארה\"ב-איראן)",
     "status": "משא ומתן תקוע במקביל להטלת מצור יבשתי ולחץ על מעברי הגבול בעיראק"
    },
    {
     "name": "החזית הישראלית מול הגרעין האיראני",
     "status": "התרעות על התקדמות הנשקה אל מול טענות אמריקניות על פגיעה בתשתיות"
    },
    {
     "name": "שלוחות אזוריות (החות'ים בתימן)",
     "status": "המשך ירי ותקיפות נגד מטרות תשתית ונפט במדינות המפרץ"
    }
   ],
   "events": [
    {
     "id": "IRAN-11090705-01",
     "title": "תקיפה אמריקנית באי קשם בדרום איראן",
     "summary": "האי קשם הותקף בידי ארה\"ב במהלך הלילה; גורם מחוזי באיראן מסר כי לא נפגעו תשתיות חיוניות או שירותים וכי האתרים שהותקפו מרוחקים מאזורי מגורים ומסחר.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T22:19:04+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T22:19:04+00:00",
     "last_update_at": "2026-11-09T05:34:32+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת והיקף הפגיעה בפועל מעבר להצהרת הגורם האיראני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-official-says-no-vital-infrastructure-damaged-us-attack-qeshm",
       "published_at": "2026-11-09T05:34:32+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611086475",
       "published_at": "2026-11-08T22:19:04+00:00"
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
     "id": "IRAN-11090705-02",
     "title": "פגיעה במערכות ניווט ושיבוש תנועת שיט במצר הורמוז",
     "summary": "חיל הים של משמרות המהפכה הודיע על הרס עזרי ניווט בסלעים הדרומיים של מצר הורמוז, וטען כי כלי שיט בלתי מורשים לא חצו את הנתיב והברחת הנפט נעצרה.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T04:46:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T04:46:36+00:00",
     "last_update_at": "2026-11-09T05:52:51+00:00",
     "what_is_not_verified": "האם כלל תנועת השיט וההברחות אכן נבלמו לחלוטין כפי שנטען על ידי איראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-oil-smuggling-through-hormuz-strait-has-been-completely-halted",
       "published_at": "2026-11-09T05:52:51+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-says-no-unauthorised-vessels-transited-strait-hormuz-overnight-after",
       "published_at": "2026-11-09T04:46:36+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-03",
     "title": "הפעלת מצור יבשתי וצוות אמריקאי לאכיפת סנקציות",
     "summary": "הנשיא טראמפ הכריז על כניסתו לתוקף של מצור יבשתי נגד איראן, וארצות הברית הקימה כוח משימה ייעודי לפגיעה במשלוחי נשק וציוד בגבולות היבשתיים ובאזור הים הכספי.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T16:01:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T16:01:55+00:00",
     "last_update_at": "2026-11-09T03:00:00+00:00",
     "what_is_not_verified": "היקף היישום המעשי של המצור היבשתי ויכולת האכיפה המלאה לאורך הגבולות הצפוניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/theheadline/article/f969hl021",
       "published_at": "2026-11-09T03:00:00+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/9/iran-war-live-trump-says-land-blockade-in-effect-drone-cuts-power-in-iraq?traffic_source=rss",
       "published_at": "2026-11-09T00:00:34+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611089896",
       "published_at": "2026-11-08T16:01:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-04",
     "title": "לחץ אמריקאי על עיראק לסגירת מעברי גבול עם איראן",
     "summary": "משרד האוצר האמריקני דרש מעיראק לסגור את מרבית מעברי הגבול שלה עם איראן כחלק מהלחץ הכלכלי, למעט שני מעברים, בעוד בגדאד מנהלת מגעים בנושא ומזהירה מפגיעה בכלכלתה.",
     "axis": "עיראק-איראן-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T19:47:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T19:47:33+00:00",
     "last_update_at": "2026-11-08T19:47:33+00:00",
     "what_is_not_verified": "האם עיראק תיעתר לדרישה האמריקנית לסגור את המעברים בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-asks-iraq-shut-most-iran-border-crossings-iraqi-foreign-minister-says",
       "published_at": "2026-11-08T19:47:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-05",
     "title": "הבנות בין עיראק לארה\"ב לייצוא נפט במצר הורמוז",
     "summary": "שר החוץ העיראקי הודיע על השגת הבנות עם וושינגטון שיאפשרו ייצוא נפט עיראקי דרך נתיב שיט ליד עומאן, לאחר שהנזקים לעיראק משיבושי המלחמה הגיעו לעשרות מיליארדי דולרים.",
     "axis": "עיראק-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T19:47:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T19:47:33+00:00",
     "last_update_at": "2026-11-08T19:47:33+00:00",
     "what_is_not_verified": "האופן שבו יאובטח הנתיב הימי בפועל מול פעילות הכוחות האיראניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iraq-has-reached-understandings-us-allow-oil-exports-through-hormuz-minister-says",
       "published_at": "2026-11-08T19:47:33+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז, עומאן",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    },
    {
     "id": "IRAN-11090705-06",
     "title": "תיווך קטארי ופגישת פסגה בבית הלבן",
     "summary": "ראש ממשלת קטאר מגיע לוושינגטון לפגישה עם הנשיא טראמפ וסגנו ואנס במטרה לקדם מתווה פשרה בין איראן לארה\"ב הכולל הקלות כלכליות ופתיחה של מצר הורמוז.",
     "axis": "דיפלומטיה אזורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T20:57:01+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T20:57:01+00:00",
     "last_update_at": "2026-11-09T06:48:01+00:00",
     "what_is_not_verified": "פרטי המתווה המדויקים שהובאו מטהרן ומידת ההסכמה של ממשל ארה\"ב לקבלם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133316",
       "published_at": "2026-11-09T06:48:01+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1386448",
       "published_at": "2026-11-09T05:43:19+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21809667",
       "published_at": "2026-11-09T05:28:08+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/trump-meet-qatars-prime-minister-iran-diplomacy-faces-hurdles",
       "published_at": "2026-11-09T01:46:31+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49419",
       "published_at": "2026-11-08T20:57:01+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-11090705-07",
     "title": "התבטאויות רוביו וגורמים בארה\"ב על קיפאון במשא ומתן",
     "summary": "שר החוץ של ארה\"ב מרקו רוביו ציין כי אין פריצת דרך במגעים והגדיר את דרישות טהרן כבלתי סבירות, בעוד שר החוץ האיראני עראקג'י טען כי המגעים הואטו בעקבות הבחירות בארה\"ב.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T22:12:24+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T22:12:24+00:00",
     "last_update_at": "2026-11-09T06:40:15+00:00",
     "what_is_not_verified": "האם השיחות הדיפלומטיות הופסקו לחלוטין או נמשכות בערוצים עקיפים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133315",
       "published_at": "2026-11-09T06:40:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-iranian-foreign-minister-comments-paused-us-iran-mediation",
       "published_at": "2026-11-09T05:19:13+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/9/rubio-says-war-on-iran-unpopular-but-necessary-to-stop-nuclear-threat?traffic_source=rss",
       "published_at": "2026-11-09T04:02:18+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49423",
       "published_at": "2026-11-08T22:29:22+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94985",
       "published_at": "2026-11-08T22:12:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-08",
     "title": "הצהרות טראמפ בריאיון בנושא הגרעין והעימות",
     "summary": "טראמפ טען בריאיון כי אין בכוונתו להסלים את הלחימה, ציין כי חומר הגרעין קבור תחת סלעים והזכיר אפשרות לפעולה עתידית באתר הר המכוש במידת הצורך.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T00:12:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T00:12:15+00:00",
     "last_update_at": "2026-11-09T06:23:01+00:00",
     "what_is_not_verified": "מצב מתקני הגרעין והחומר המבוקע בפועל מתחת להריסות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133313",
       "published_at": "2026-11-09T06:23:01+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21809568",
       "published_at": "2026-11-09T01:19:56+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21809548",
       "published_at": "2026-11-09T00:12:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-09",
     "title": "שיחת נתניהו וטראמפ בנושא הגרעין האיראני",
     "summary": "ראש ממשלת ישראל שוחח עם נשיא ארה\"ב והעלה אזהרה בדבר התקדמות איראן בנושא הנשק הגרעיני.",
     "axis": "ישראל-ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T04:48:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-09T04:48:05+00:00",
     "last_update_at": "2026-11-09T04:48:05+00:00",
     "what_is_not_verified": "התוכן המלא של השיחה ורמת ההתקדמות האיראנית שעלתה בה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21809665",
       "published_at": "2026-11-09T04:48:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-10",
     "title": "אכיפת סנקציות ושימוש במתקני אחסון נפט בסין",
     "summary": "מסמך חסוי חשף כי איראן מפעילה מסופי נפט ומתקני אחסון בסין כדי לעקוף את הסנקציות האמריקניות ולאפשר המשך פעילות של מכליות נפט מוחרמות.",
     "axis": "איראן-סין-ארה\"ב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-09T02:48:03+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-09T02:48:03+00:00",
     "last_update_at": "2026-11-09T02:48:03+00:00",
     "what_is_not_verified": "אותנטיות המסמך המודלף במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611090040",
       "published_at": "2026-11-09T02:48:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11090705-11",
     "title": "תקיפת החות'ים נגד מגדל חברת ארמקו בריאד",
     "summary": "החות'ים בתימן, הנתמכים בידי איראן, לקחו אחריות על תקיפת בניין רב-קומות של חברת הנפט הסעודית ארמקו בריאד, שגרמה לניפוץ חלונות ללא נפגעים.",
     "axis": "שלוחות איראן (חות'ים)-המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T08:11:54+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T08:11:54+00:00",
     "last_update_at": "2026-11-08T08:11:54+00:00",
     "what_is_not_verified": "סוג החימוש שפגע במבנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261108-yemen-s-houthis-claim-attack-on-aramco-building-in-riyadh-s-financial-district",
       "published_at": "2026-11-08T08:11:54+00:00"
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
    "טענת איראן על עצירה מוחלטת של הברחות הנפט ותנועת הספינות הלא מורשות בהורמוז",
    "דיווח על תוכניות מלחמה אמריקניות הכוללות פלישה קרקעית לדרום איראן או כווית דרך עיראק",
    "סעיפי המתווה הקטארי המלאים וסכומי הכספים המוקפאים שיופשרו",
    "מידת הנזק המדויקת שנגרמה בתקיפה האמריקנית באי קשם",
    "מצב ההנשקה הגרעינית של איראן והיקף החומר המצוי תחת ההריסות באתרים שהותקפו"
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
     "value": 3.199,
     "unit": "ILS",
     "change_pct": 0.86,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת השגת נשק גרעיני בידי איראן",
      "העדפת פתרון דיפלומטי אך דחיית דרישות איראניות מופרזות",
      "אכיפת מצור כלכלי יבשתי וימי מלא"
     ],
     "inferred": [
      "שאיפה לסיים את העימות הצבאי בשל לחץ ציבורי פנימי לאחר בחירות האמצע",
      "בלימת ציר הסחר והאספקה בין איראן לשכנותיה"
     ],
     "forecast": [
      "המשך הגברת הלחץ הכלכלי על מעברי הגבול לצד בדיקת ערוצי תיווך מול קטאר",
      "שמירה על אופציה צבאית מוגבלת נגד אתרים מבוצרים כמו הר המכוש"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "חסימת נתיבי הברחה ומעבר כלי שיט עוינים במצר הורמוז",
      "אי-כניעה לתכתיבים אמריקניים ודרישה להסרת הסנקציות והפשרת נכסים",
      "העמקת הקשרים עם רוסיה, סין ומדינות האזור"
     ],
     "inferred": [
      "מינוף השיבושים במצר הורמוז כדי לכפות ויתורים כלכליים על וושינגטון",
      "עקיפת המצור באמצעות מתקני נפט בסין ונתיבים יבשתיים חלופיים"
     ],
     "forecast": [
      "המשך ניסיונות התשה ימיים ושימוש בשלוחות אזוריות במפרץ",
      "המתנה להתבהרות המפה הפוליטית בוושינגטון לפני הגעה להבנות"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "התרעה מפני התקדמות איראן בנושא הנשק הגרעיני"
     ],
     "inferred": [
      "מניעת הסכם אמריקאי-איראני חלקי שיותיר בידי איראן יכולות גרעיניות",
      "דרישה לפעולה נחרצת נגד מתקנים מבוצרים תת-קרקעיים"
     ],
     "forecast": [
      "המשך לחץ מדיני על הממשל בוושינגטון שלא להקל בסנקציות",
      "היערכות לפעילות עצמאית במקרה של התקדמות לקראת הנשקה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/9/rubio-says-war-on-iran-unpopular-but-necessary-to-stop-nuclear-threat?traffic_source=rss",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/trump-meet-qatars-prime-minister-iran-diplomacy-faces-hurdles",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261108-yemen-s-houthis-claim-attack-on-aramco-building-in-riyadh-s-financial-district",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611090040",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21809665",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1386448",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/watch-iranian-foreign-minister-comments-paused-us-iran-mediation",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133313",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49423",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94985",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/theheadline/article/f969hl021",
     "accessed_at": "2026-11-09T07:05:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-08T16:46:38+00:00",
  "changes": {
   "IRAN-11090705-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פיצוצים ודיווחים על תקיפות בדרום איראן",
    "score": 0.817
   },
   "IRAN-11090705-02": {
    "kind": "new"
   },
   "IRAN-11090705-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הקמת כוח משימה אמריקאי לחסימת נתיבי אספקה לאיראן ותגובת טהראן",
    "score": 1.0
   },
   "IRAN-11090705-04": {
    "kind": "new"
   },
   "IRAN-11090705-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "פגיעה במכליות נפט ופיצוצים במצר הורמוז",
    "score": 1.0
   },
   "IRAN-11090705-06": {
    "kind": "new"
   },
   "IRAN-11090705-07": {
    "kind": "new"
   },
   "IRAN-11090705-08": {
    "kind": "new"
   },
   "IRAN-11090705-09": {
    "kind": "new"
   },
   "IRAN-11090705-10": {
    "kind": "new"
   },
   "IRAN-11090705-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מתקפת החות'ים על מבנה חברת ארמקו בריאד",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-09T0040__ukraine-202611090040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-09T00:40:33+00:00",
   "window": {
    "from": "2026-11-08T00:40:33+00:00",
    "to": "2026-11-09T00:40:33+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611090040"
   },
   "summary": "רוסיה מגבירה את התקיפות המשולבות באמצעות טילים בליסטיים וכלי טיס בלתי מאוישים לעבר תשתיות אנרגיה, תחבורה וריכוזי אוכלוסייה ברחבי אוקראינה במטרה להפעיל לחץ לקראת חידוש המגעים הדיפלומטיים. אוקראינה מגיבה בתקיפות עומק נגד צירי אספקה, עמדות שליטה ברחפנים ומתקני כוח בתוך שטח רוסיה ובאזורים הכבושים. במקביל להמשך חילופי האש והפגיעה ברשתות החשמל, מתגבשים מגעים ראשוניים בין הצדדים בתיווך אמריקאי ובינלאומי באבו דאבי.",
   "fronts": [
    {
     "name": "חזית הדרום (זפוריז'יה וחרסון)",
     "status": "תקיפות אינטנסיביות, הפגזות רוסיות על עשרות יישובים, פגיעה באנשי חילוץ ורוטציית כוחות רוסית בגדה השמאלית"
    },
    {
     "name": "חזית המזרח (דונצק וחארקיב)",
     "status": "הגברת תקיפות רוסיות על קרמטורסק והפגזות חוזרות בחארקיב, לצד תקיפות אוקראיניות על מרכזי שליטה"
    },
    {
     "name": "עורף אוקראינה ותשתיות אנרגיה",
     "status": "פגיעות קשות בתחנות כוח, גשרים ומערכות חשמל באודסה, קייב ודניפרופטרובסק, המאלצות השבתות חשמל סדורות"
    },
    {
     "name": "עומק רוסיה וצירי אספקה",
     "status": "תקיפות כטב\"מים אוקראיניות נגד גשרים, תחנות כוח ומערכי שיגור במחוזות רוסטוב, בריאנסק וקורסק"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11090040-01",
     "title": "היערכות למשא ומתן דיפלומטי באבו דאבי",
     "summary": "הכנות לקראת שיחות תלת-צדדיות בהשתתפות נציגי ארצות הברית, אוקראינה ורוסיה באבו דאבי, לצד כוונה של צרפת ונציגים אירופים להשתתף בשיחות כדי להציג את דרישות הביטחון של אירופה.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T04:10:42+00:00",
     "last_update_at": "2026-11-08T23:31:01+00:00",
     "what_is_not_verified": "הרכב המשלחות המלא ומידת המוכנות של הצדדים להגיע להסכמות ממשיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2214549",
       "published_at": "2026-11-08T23:31:01+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2214543",
       "published_at": "2026-11-08T22:18:36+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/europeans-will-participate-in-abu-dhabi-peace-talks-french-foreign-minister-says/",
       "published_at": "2026-11-08T14:15:47+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2214477",
       "published_at": "2026-11-08T13:53:45+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061819/",
       "published_at": "2026-11-08T13:19:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/08/ukraine-war-briefing-russia-ramping-up-attacks-to-pressure-kyiv-at-trilateral-talks-zelenskyy-says",
       "published_at": "2026-11-08T04:10:42+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות הערביות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11090040-02",
     "title": "מתקפות רוסיות על תשתיות אנרגיה וחשמל באוקראינה",
     "summary": "רוסיה שיגרה טילים וכלי טיס בלתי מאוישים לעבר מתקני אנרגיה במספר מחוזות באוקראינה, ובהם אודסה, דניפרופטרובסק וקייב, דבר שגרם לניתוקי חשמל נרחבים ולהגבלות צריכה.",
     "axis": "תקיפות תשתיות ועורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T04:10:42+00:00",
     "last_update_at": "2026-11-08T21:00:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקני האנרגיה ומספר הטילים המדויק שפגעו ביעדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-economy/4182749-power-outage-schedules-to-be-in-effect-in-some-ukrainian-regions-on-monday.html",
       "published_at": "2026-11-08T21:00:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4182739-russian-forces-launch-massive-attack-on-odesa-regions-energy-infrastructure.html",
       "published_at": "2026-11-08T19:40:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ukraine-hits-key-bridge-on-highway-of-death-linking-mainland-russia-to-occupied-regions/",
       "published_at": "2026-11-08T18:44:31+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2214489",
       "published_at": "2026-11-08T14:43:48+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061791/",
       "published_at": "2026-11-08T10:09:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/08/ukraine-war-briefing-russia-ramping-up-attacks-to-pressure-kyiv-at-trilateral-talks-zelenskyy-says",
       "published_at": "2026-11-08T04:10:42+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      },
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    },
    {
     "id": "UKRAINE-11090040-03",
     "title": "פגיעה בצוותי חילוץ והצלה בקומישובאחה",
     "summary": "רחפנים רוסיים תקפו את עובדי שירות החירום של אוקראינה בעת שפעלו באתר שבו הופצץ מבנה ששימש לחלוקת סיוע, שבו נרשמו עשרות הרוגים ונעדרים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T09:58:00+00:00",
     "last_update_at": "2026-11-08T18:55:00+00:00",
     "what_is_not_verified": "קיומם של נפגעים נוספים תחת ההריסות וגורל 45 הנעדרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4182730-two-rescuers-injured-in-russian-drone-attack-on-komyshuvakha.html",
       "published_at": "2026-11-08T18:55:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061823/",
       "published_at": "2026-11-08T13:56:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061790/",
       "published_at": "2026-11-08T09:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קומישובאחה, אוקראינה",
       "lat": 48.6403,
       "lon": 37.4558
      }
     ]
    },
    {
     "id": "UKRAINE-11090040-04",
     "title": "פגיעות כטב\"מים אוקראיניים בגשר ותחנות כוח במחוז רוסטוב",
     "summary": "שברי כלי טיס בלתי מאוישים פגעו בגשר מעל נהר מיוס בכביש אסטרטגי המחבר את מחוז רוסטוב לשטחים שבשליטת רוסיה, וכן בתחנות כוח באזור.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T17:24:18+00:00",
     "last_update_at": "2026-11-08T18:44:31+00:00",
     "what_is_not_verified": "מידת הפגיעה התפקודית בגשר ורמת הנזק בתחנות הכוח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ukraine-hits-key-bridge-on-highway-of-death-linking-mainland-russia-to-occupied-regions/",
       "published_at": "2026-11-08T18:44:31+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drones-hit-key-bridge-power-stations-in-russias-rostov-oblast-governor-says/",
       "published_at": "2026-11-08T17:39:36+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2214511",
       "published_at": "2026-11-08T17:24:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11090040-05",
     "title": "פגיעה בעמדות פיקוד ושליטה על כטב\"מים רוסיים",
     "summary": "צבא אוקראינה פגע בארבע תחנות קרקעיות לשליטה בכלי טיס בלתי מאוישים של רוסיה, כולל מתקן של יחידת רוביקון בברדיאנסק ומוקדים נוספים בשטחים כבושים וברוסיה.",
     "axis": "חזית המזרח והדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T12:54:00+00:00",
     "last_update_at": "2026-11-08T12:54:00+00:00",
     "what_is_not_verified": "היקף האבדות והנזק המדויק בקרב מפעילי הכטב\"מים הרוסים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061816/",
       "published_at": "2026-11-08T12:54:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ברדיאנסק, אוקראינה",
       "lat": 46.7557,
       "lon": 36.7888
      },
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-11090040-06",
     "title": "תקיפה רוסית נגד כלי שיט ומטענים בים השחור ובנמל צ'ורנומורסק",
     "summary": "רוסיה הודיעה על פגיעה בשני כלי שיט ובמטענים דו-שימושיים שיועדו לצבא אוקראינה בנמל צ'ורנומורסק ובמימי הים השחור.",
     "axis": "הזירה הימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T14:42:57+00:00",
     "last_update_at": "2026-11-08T14:42:57+00:00",
     "what_is_not_verified": "סוג המטענים המדויק ומידת הנזק הממשית לכלי השיט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2214487",
       "published_at": "2026-11-08T14:42:57+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'ורנומורסק, אוקראינה",
       "lat": 46.3013,
       "lon": 30.6549
      }
     ]
    },
    {
     "id": "UKRAINE-11090040-07",
     "title": "חידוש אספקת החשמל החיצונית לתחנת הכוח הגרעינית בזפוריז'יה",
     "summary": "עובדי אנרגיה אוקראינים החזירו לפעולה קו מתח גבוה המספק הזנת חשמל חיצונית חיונית לתחנת הכוח הגרעינית בזפוריז'יה.",
     "axis": "ביטחון גרעיני ותשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T17:50:00+00:00",
     "last_update_at": "2026-11-08T17:50:00+00:00",
     "what_is_not_verified": "יציבות הקו להמשך פעילות תחת תנאי לחימה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-economy/4182723-ukrainian-energy-workers-restore-external-power-supply-to-znpp.html",
       "published_at": "2026-11-08T17:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אנרהודר, אוקראינה",
       "lat": 47.4901,
       "lon": 34.6603
      }
     ]
    },
    {
     "id": "UKRAINE-11090040-08",
     "title": "רוטציית כוחות ותגבור רוסי באולשקי בחסות הפוגה הומניטרית",
     "summary": "נשיא אוקראינה ציין כי צבא רוסיה ניצל מבצע הומניטרי באולשקי כדי לבצע החלפת כוחות ולהכניס תגבורות צבאיות לגדה השמאלית של הדנייפר.",
     "axis": "חזית הדרום (חרסון)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T15:45:00+00:00",
     "last_update_at": "2026-11-08T15:45:00+00:00",
     "what_is_not_verified": "היקף הכוחות והציוד הצבאי שהוכנסו בפועל לאזור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061833/",
       "published_at": "2026-11-08T15:45:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    }
   ],
   "not_verified": [
    "אמיתות הנתונים שפורסמו מהדלפת שירות הסטטיסטיקה הרוסי בנוגע להיקף של מעל 450 אלף הרוגים",
    "מידת הנזק המדויקת לגשר מעל נהר מיוס ולתחנות הכוח במחוז רוסטוב",
    "מספר הנפגעים הסופי והנעדרים תחת ההריסות בקומישובאחה",
    "ההרכב הרשמי של נציגי המשא ומתן ממדינות אירופה ומידת השפעתם בשיחות אבו דאבי",
    "דיווחים על גיוס בכפייה של אזרחים במוסקבה לטובת חוזים צבאיים",
    "היקף הפגיעה בכלי השיט בנמל צ'ורנומורסק והאם נשאו ציוד צבאי"
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
     "value": 1.1165,
     "unit": "USD",
     "change_pct": -0.53,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על שמי המדינה והשגת מערכות יירוט נוספות מארצות הברית",
      "החמרת הסנקציות הבינלאומיות על תעשיית ייצור הטילים של רוסיה",
      "ייצוג אינטרסים ביטחוניים מלא בשיחות המשא ומתן באבו דאבי"
     ],
     "inferred": [
      "שיבוש קווי האספקה הלוגיסטיים הרוסיים באמצעות תקיפת גשרים ותחנות כוח בעומק רוסיה",
      "התמודדות עם מחסור בכוח אדם לוחם בחטיבות המוצנחות והסתגלות לשיטות אימון מערביות"
     ],
     "forecast": [
      "המשך הגבלות חשמל ופגיעה באורח החיים האזרחי כתוצאה מהרס מתקני האנרגיה לקראת החורף",
      "התמקדות בתקיפת עמדות שליטה ברחפנים ובסיסי לוגיסטיקה רוסיים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "נכונות לחידוש שיחות תלת-צדדיות להסדרת המשבר",
      "פגיעה במתקנים שמשרתים את התעשייה הביטחונית וכוחות הצבא של אוקראינה"
     ],
     "inferred": [
      "הפעלת לחץ מרבי על הנהגת אוקראינה והאוכלוסייה האזרחית באמצעות פגיעה במערכות חשמל לפני שיחות המשא ומתן",
      "שימוש בהפוגות הומניטריות לצורך התעצמות צבאית, רוטציה ותגבור כוחות בחזיתות הדרום"
     ],
     "forecast": [
      "המשך שיגור מטחי כטב\"מים וטילים בליסטיים נגד מתקנים אסטרטגיים באוקראינה",
      "ניסיון להכתיב עמדות כוח במשא ומתן תוך ניצול שינויי הממשל בארצות הברית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/08/ukraine-war-briefing-russia-ramping-up-attacks-to-pressure-kyiv-at-trilateral-talks-zelenskyy-says",
     "accessed_at": "2026-11-09T00:40:33+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukrainian-drones-hit-key-bridge-power-stations-in-russias-rostov-oblast-governor-says/",
     "accessed_at": "2026-11-09T00:40:33+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/08/8061833/",
     "accessed_at": "2026-11-09T00:40:33+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2214487",
     "accessed_at": "2026-11-09T00:40:33+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-economy/4182723-ukrainian-energy-workers-restore-external-power-supply-to-znpp.html",
     "accessed_at": "2026-11-09T00:40:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-08T00:46:41+00:00",
  "changes": {
   "UKRAINE-11090040-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "רוסיה תשלח דיפלומטים ובכירים צבאיים לשיחות שלום באבו דאבי",
    "score": 0.817
   },
   "UKRAINE-11090040-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "טענות רוסיות על תקיפות אוקראיניות במחוז לוהנסק ונגד תשתיות אנרגיה",
    "score": 0.65
   },
   "UKRAINE-11090040-03": {
    "kind": "possible",
    "prev": "זיהוי אנשי צוות אוויר רוסיים החשודים בהפצצת בית ספר בקומישובאחה",
    "score": 0.633
   },
   "UKRAINE-11090040-04": {
    "kind": "new"
   },
   "UKRAINE-11090040-05": {
    "kind": "new"
   },
   "UKRAINE-11090040-06": {
    "kind": "new"
   },
   "UKRAINE-11090040-07": {
    "kind": "new"
   },
   "UKRAINE-11090040-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-09T0043__north-202611090043.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-09T00:43:35+00:00",
   "window": {
    "from": "2026-11-08T00:43:35+00:00",
    "to": "2026-11-09T00:43:35+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611090043"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות מבצעית התקפית רציפה של צה\"ל בדרום לבנון ובדרום סוריה, הכוללת תקיפות אוויריות, ארטילריה ופשיטות לאיתור תשתיות אמצעי לחימה. במקביל ללחימה מתקיימים מאמצים דיפלומטיים בהובלה צרפתית לגיבוש הסדר לנסיגת ישראל וחיזוק מנגנוני פיקוח חלופיים בגבול. בזירה הפנים-לבנונית גוברות הקריאות מצד הממשלה וההנהגה הנוצרית לניטרליות ולריכוז כלל הנשק בידי צבא המדינה כדי למנוע הידרדרות נוספת.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה פעילה, תקיפות אוויר והפגזות צה\"ל מול איתור תשתיות צבאיות"
    },
    {
     "name": "דרום סוריה",
     "status": "פשיטות וחיפושים קרקעיים של כוחות צה\"ל בכפרים ובמוסדות"
    },
    {
     "name": "הזירה המדינית הלבנונית",
     "status": "מאמצים ממשלתיים להגבלת חופש הפעולה של פלגים חמושים וקידום ניטרליות"
    }
   ],
   "events": [
    {
     "id": "NORTH-11090043-01",
     "title": "תקיפות אוויריות והפגזות ארטילריות של צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות אוויריות באזור שבין נבטיה אל-פוקא לכפר תבנית, הפגיזו בארטילריה מספר אזורים בהם ואדי אל-חוג'יר ובארע'שית, וביצעו פיצוצים באל-קנטרה ועייתא אל-ג'בל.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T13:45:47+00:00",
     "last_update_at": "2026-11-08T13:45:47+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומספר הנפגעים בתקיפות לא צוינו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_ab2712bdf1ecea55",
       "url": "https://english.almanar.com.lb/article/148092/",
       "published_at": "2026-11-08T13:45:47+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      },
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-11090043-02",
     "title": "איתור אמצעי לחימה ודירה מבצעית סמוך לעמדות האו\"ם",
     "summary": "כוחות צה\"ל איתרו דירה מבצעית, רקטות, מטענים ומחסן אמצעי לחימה בתוך בית אזרחי בדרום לבנון, במרחק של כמאתיים מטרים מעמדות יוניפי\"ל.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T16:34:10+00:00",
     "last_update_at": "2026-11-08T16:39:59+00:00",
     "what_is_not_verified": "שם הכפר הספציפי שבו נמצאו אמצעי הלחימה לא צוין בהודעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25558",
       "published_at": "2026-11-08T16:39:59+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1386344",
       "published_at": "2026-11-08T16:34:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11090043-03",
     "title": "פשיטה של כוחות ישראליים על בית ספר ובתים בדרום סוריה",
     "summary": "כוחות קרקעיים של צה\"ל בליווי ארבעה עשר כלי רכב צבאיים פרצו שער של בית ספר וערכו חיפושים במבני מגורים בדרום סוריה.",
     "axis": "דרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T01:38:51+00:00",
     "last_update_at": "2026-11-08T01:38:51+00:00",
     "what_is_not_verified": "זהות העיירה המדויקת והאם היו מעצרים או נפגעים בפשיטה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-troops-storm-school-raid-homes-in-southern-syria/4115617",
       "published_at": "2026-11-08T01:38:51+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11090043-04",
     "title": "גיבוש יוזמה מדינית צרפתית להסדר ביטחוני בדרום לבנון",
     "summary": "צרפת מקדמת תוכנית להסדר הכוללת נסיגה ישראלית מדרום לבנון בתמורה לערבויות ביטחון ברצועה של ארבעה קילומטרים, והרחבת סמכויות משקיפי האו\"ם במקום כוח יוניפי\"ל.",
     "axis": "דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T17:31:58+00:00",
     "last_update_at": "2026-11-08T17:31:58+00:00",
     "what_is_not_verified": "האם ההצעה הוצגה רשמית לצדדים והאם זכתה להסכמה כלשהי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133301",
       "published_at": "2026-11-08T17:31:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11090043-05",
     "title": "חקירת אזרח לבנוני על ידי כוחות הביטחון של ישראל",
     "summary": "תושב דיר מימאס שוחרר ממעצר ישראלי בן יומיים וסיפר כי נחקר אודות נוכחות פעילי חיזבאללה באזורו ועל קשריו עם צבא לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T15:03:20+00:00",
     "last_update_at": "2026-11-08T15:03:20+00:00",
     "what_is_not_verified": "אימות טענותיו של הנחקר לגבי מהלך החקירה והאיומים מצד החוקרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49405",
       "published_at": "2026-11-08T15:03:20+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      }
     ]
    },
    {
     "id": "NORTH-11090043-06",
     "title": "הצהרת שר החוץ של לבנון בעניין פירוק נשק של פלגים חמושים",
     "summary": "שר החוץ הלבנוני הדגיש במהלך כינוס בקנדה כי נשק חייב להימצא אך ורק בידי צבא המדינה, והצהיר כי ביירות נחושה לסיים את הנוכחות החמושה הבלתי מורשית.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T10:49:53+00:00",
     "last_update_at": "2026-11-08T10:49:53+00:00",
     "what_is_not_verified": "לוח הזמנים וסיכויי היישום המעשי של החלטות הממשלה בלבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966928/fm-raggi-meets-lebanese-diaspora-in-montreal-vows-to-restore-state-sov/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966928",
       "published_at": "2026-11-08T10:49:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11090043-07",
     "title": "קריאת הפטריארך המארוני לאימוץ מדיניות ניטרליות בלבנון",
     "summary": "הפטריארך בשארה אל-ראעי קרא להרחיק את לבנון מעימותים ומלחמות אזוריות, והתייחס לדרישות דחופות של תושבי חמישה כפרים נוצריים הסמוכים לגבול הדרומי.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T07:34:38+00:00",
     "last_update_at": "2026-11-08T07:34:38+00:00",
     "what_is_not_verified": "תוכן עשר הדרישות שהעבירו תושבי כפרי הגבול",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966904/patriarch-al-rahi-calls-for-lebanons-neutrality-warns-against-new-war/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966904",
       "published_at": "2026-11-08T07:34:38+00:00"
      }
     ],
     "places": [
      {
       "name": "בכרכי, לבנון",
       "lat": 33.9679,
       "lon": 35.6339
      }
     ]
    },
    {
     "id": "NORTH-11090043-08",
     "title": "הערכת מצב לגבי נכונות חיזבאללה להצטרף לעימות רחב",
     "summary": "מכון מחקר מעריך כי הסבירות שחיזבאללה ייזום מלחמה כוללת נגד ישראל נמוכה ומטרתו לשקם את כוחו, אולם קיימים חילוקי דעות פנימיים וגורמים שעשויים לפעול באופן עצמאי.",
     "axis": "דרום לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T11:48:09+00:00",
     "last_update_at": "2026-11-08T11:48:09+00:00",
     "what_is_not_verified": "מידת ההשפעה הממשית של הגורמים התומכים בהסלמה בתוך פיקוד הארגון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "fh_9136dab491b21fbf",
       "url": "https://israel-alma.org/u-s-vs-iran-will-hezbollah-join-the-conflict-a-situation-assessment/",
       "published_at": "2026-11-08T11:48:09+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות ערוץ ארבע עשרה על משא ומתן של גדי איזנקוט עם גורמים זרים בנוגע לנסיגה מלבנון, אשר הוכחשו נחרצות",
    "דיווחים על פריצת שער בית ספר על ידי ארבעה עשר כלי רכב צבאיים בדרום סוריה שהתבססו על כלי תקשורת סוריים בלבד",
    "מידת ההסכמה של ממשלת ישראל וממשלת לבנון למתווה ההצעה הצרפתית להקמת כוח משקיפים חדש",
    "טענות הנחקר הלבנוני ששוחרר בנוגע לתוכן שאלות החוקרים וכוונותיהם לשלום"
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
     "value": 3.199,
     "unit": "ILS",
     "change_pct": 0.86,
     "source_id": "src_ecb",
     "as_of": "2026-11-06T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "חשיפה ונטרול של מחסני אמצעי לחימה ודירות מבצעיות בקרבת הגבול וסמוך למוצבי האו\"ם",
      "מניעת התבססות ואיסוף מודיעין מצד חיזבאללה במרחב הגבול הדרומי של לבנון"
     ],
     "inferred": [
      "הפעלת לחץ צבאי ממושך ליצירת אזור חיץ ביטחוני ונסיגת כוחות חיזבאללה מעבר לקו הגבול",
      "סיכול התבססות של גורמים עוינים והשגת חופש פעולה מודיעיני וצבאי בדרום סוריה"
     ],
     "forecast": [
      "המשך פעילות כירורגית להשמדת מחסני תחמושת לצד דחיית הסדרים בינלאומיים שאינם כוללים מנגנוני אכיפה נוקשים"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שאיפה למנוע הידרדרות למלחמה כוללת כדי לאפשר שיקום של המערכים הצבאיים והארגוניים שנפגעו",
      "שימור יכולות מקומיות ומודיעיניות בדרום לבנון באמצעות פעילות חשאית והימנעות מחיכוך ישיר נרחב"
     ],
     "forecast": [
      "העדפת פעולות מוגבלות או ממוקדות בלבד, תוך התגברות מתחים פנימיים בין גורמים מתונים לגורמים המזוהים עם משמרות המהפכה"
     ]
    },
    {
     "actor": "ממשלת לבנון וההנהגה הלבנונית",
     "declared": [
      "החזרת הריבונות המלאה של המדינה וסיום הנוכחות הצבאית הישראלית",
      "הגבלת החזקת הנשק לידי צבא לבנון בלבד ואיסור על פעילות צבאית של ארגונים בלתי מורשים",
      "שמירה על ניטרליות המדינה כדי למנוע הפיכתה לזירת לחימה למען אינטרסים חיצוניים"
     ],
     "inferred": [
      "ניסיון להשתחרר מהתלות המדינית והצבאית בהכתבות של איראן ושלוחותיה",
      "רצון להבטיח סיוע כלכלי ובינלאומי באמצעות שיתוף פעולה עם יוזמות דיפלומטיות מערביות"
     ],
     "forecast": [
      "קושי מעשי בפירוק חיזבאללה מנשקו ללא הסכמה פנימית רחבה או לחץ בינלאומי כבד"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/u-s-vs-iran-will-hezbollah-join-the-conflict-a-situation-assessment/",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/148092/",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-troops-storm-school-raid-homes-in-southern-syria/4115617",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/966904/patriarch-al-rahi-calls-for-lebanons-neutrality-warns-against-new-war/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966904",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1386344",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133301",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49405",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25558",
     "accessed_at": "2026-11-09T00:43:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-08T00:49:12+00:00",
  "changes": {
   "NORTH-11090043-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פעילות סריקה של צה\"ל בבית יהון בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11090043-02": {
    "kind": "new"
   },
   "NORTH-11090043-03": {
    "kind": "possible",
    "prev": "הסכם שיתוף פעולה צבאי בין סוריה לסעודיה והכחשת פריסת כוחות",
    "score": 0.467
   },
   "NORTH-11090043-04": {
    "kind": "possible",
    "prev": "צה\"ל חושף צוות קרב רובוטי משולב ופועל בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11090043-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מעצר אזרח לבנוני במחסום צה\"ל בין בורג' אל-מלוכ לדיר מימאס",
    "score": 0.817
   },
   "NORTH-11090043-06": {
    "kind": "new"
   },
   "NORTH-11090043-07": {
    "kind": "new"
   },
   "NORTH-11090043-08": {
    "kind": "new"
   }
  }
 }
};
