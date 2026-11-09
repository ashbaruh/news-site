/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-08T1656__yemen-202611081656.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-08T16:56:02+00:00",
   "window": {
    "from": "2026-11-07T16:56:02+00:00",
    "to": "2026-11-08T16:56:02+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611081656"
   },
   "summary": "הלחימה בזירה התימנית מסלימה מחדש בעקבות קריסת הפסקת האש, כאשר החות'ים חידשו את תקיפות הטילים והכטב\"מים ארוכות הטווח לתוך שטח סעודיה ופגעו ברובע העסקים בריאד. במקביל, מתנהלת לחימה עצימה ותקיפות אוויריות קטלניות בריכוזי אוכלוסייה במחוזות צנעא ותעז וכן לאורך חוף הים האדום בין כוחות הממשלה הנתמכים בידי סעודיה לבין החות'ים. הלחימה המתרחבת מחריפה באופן דרמטי את המשבר ההומניטרי ומלווה בדיווחים על ניסיונות של סעודיה לגייס כוחות זרים לסיוע בהגנת גבולותיה.",
   "fronts": [
    {
     "name": "חזית עומק סעודיה (ריאד, אבקאיק, מחוז הדרום)",
     "status": "פעילה - ירי מוגבר של טילים בליסטיים, טילי שיוט וכטב\"מים חות'יים לעבר תשתיות אנרגיה ומרכזים שלטוניים לצד יירוטים של הקואליציה"
    },
    {
     "name": "חזית מחוז תעז",
     "status": "פעילה - חילופי אש, פגיעות באזרחים, פגיעות ברכבים ופיצוץ קטלני בשוק מקומי המלווה בהאשמות הדדיות"
    },
    {
     "name": "חזית מחוז צנעא",
     "status": "פעילה - תקיפות אוויריות של הקואליציה כנגד מטרות באזור הבירה עם נפגעים אזרחיים רבים"
    },
    {
     "name": "חזית חוף הים האדום",
     "status": "פעילה - מתקפה קרקעית של כוחות הממשלה כנגד מעוזי החות'ים תוך הסלמה מתמשכת"
    },
    {
     "name": "חזית גבול סעודיה - תימן",
     "status": "מתוחה - דיווחים על עיבוי כוחות והיערכות לפריסת כוחות זרים לסיוע לממלכה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11081656-01",
     "title": "פגיעה במגדל חברת אראמקו בריאד במסגרת מתקפת טילים וכטב\"מים חות'ית",
     "summary": "החות'ים שיגרו טילים בליסטיים, טילי שיוט וכטב\"מים לעבר יעדים בסעודיה, בהם המרכז הפיננסי ונמל התעופה בריאד ומתקני נפט. מגדל חברת אראמקו בבירה הסעודית ספג נזק שכלל ניפוץ חלונות בכמה קומות; משרד האנרגיה הסעודי והקואליציה טענו כי המבנה נפגע מרסיסי יירוט, בעוד החות'ים טענו לפגיעות ישירות במסגרת ארבעה מבצעים צבאיים.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T08:00:10+00:00",
     "last_update_at": "2026-11-08T14:49:27+00:00",
     "what_is_not_verified": "האם המגדל נפגע מפגיעה ישירה של טיל בליסטי או מנפילת שברי יירוט כפי שטוענת סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21806102",
       "published_at": "2026-11-08T14:49:27+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attack-saudi-arabias-king-khalad-airport",
       "published_at": "2026-11-08T14:36:30+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attack-riyadh-financial-centre",
       "published_at": "2026-11-08T14:05:09+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133283",
       "published_at": "2026-11-08T13:48:11+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49401",
       "published_at": "2026-11-08T13:29:26+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/aramco-skyscraper-damaged-riyadh-targeted-houthi-missiles",
       "published_at": "2026-11-08T11:39:44+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/saudi-aramco-tower-damaged-after-houthi-missile-attacks-riyadh",
       "published_at": "2026-11-08T10:26:45+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-aramco-building-riyadh-struck-us-imposes-iran-blockade",
       "published_at": "2026-11-08T09:31:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-aramco-building-riyadh-damaged-falling-debris-attempted-attack",
       "published_at": "2026-11-08T09:14:43+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/yemens-houthis-claim-attack-riyadh-financial-district-aramco-skyscraper-damaged",
       "published_at": "2026-11-08T08:30:26+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261108-yemen-s-houthis-claim-attack-on-aramco-building-in-riyadh-s-financial-district",
       "published_at": "2026-11-08T08:11:54+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-664",
       "published_at": "2026-11-08T08:00:10+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אבקאיק, סעודיה",
       "lat": 25.9356,
       "lon": 49.6683
      }
     ]
    },
    {
     "id": "YEMEN-11081656-02",
     "title": "עשרות הרוגים ופצועים בתקיפה אווירית בכפר א-שריעה במחוז צנעא",
     "summary": "החות'ים דיווחו כי לפחות שלושים ושלושה בני אדם נהרגו, מרביתם נשים וילדים, וכארבעים נפצעו בתקיפות אוויריות של הקואליציה בהובלת סעודיה מזרחית לבירה צנעא, כאשר לפי הדיווחים הותקפו גם צוותי רפואה במקום. סעודיה לא הגיבה רשמית על הפגיעה ומסרה כי הנושא בבדיקה.",
     "axis": "פנים-תימן: צנעא",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T15:55:28+00:00",
     "last_update_at": "2026-11-08T08:00:10+00:00",
     "what_is_not_verified": "אחריות הקואליציה הסעודית ומספרי הנפגעים המדויקים, אשר נמסרו רק על ידי גורמי בריאות חות'יים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-664",
       "published_at": "2026-11-08T08:00:10+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c65yn1v99ypmo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-08T04:03:12+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/houthi-run-health-ministry-says-airstrikes-kill-33-near-yemen-capital",
       "published_at": "2026-11-07T20:46:28+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-33-killed-saudi-strikes-yemens-sanaa-province",
       "published_at": "2026-11-07T15:55:28+00:00"
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
     "id": "YEMEN-11081656-03",
     "title": "פיצוץ קטלני בשוק הומה במחוז תעז והטחת האשמות הדדיות",
     "summary": "פיצוץ בשוק אל-חדארה במחוז תעז גבה את חייהם של עשרות אזרחים והביא לפציעתם של רבים נוספים. ממשלת תימן והרשויות המקומיות האשימו את החות'ים בירי טיל בליסטי לעבר השוק, בעוד החות'ים הכחישו זאת וטענו כי מטוסי קרב סעודיים הפציצו את המקום.",
     "axis": "פנים-תימן: תעז",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T14:59:10+00:00",
     "last_update_at": "2026-11-08T16:36:55+00:00",
     "what_is_not_verified": "מי הגורם שביצע את התקיפה על השוק והאם מדובר בטיל בליסטי חות'י או בהפצצה אווירית סעודית",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-condemns-saudi-aggression-after-dozens-killed-attack-taiz-market",
       "published_at": "2026-11-08T16:36:55+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-33-killed-saudi-strikes-yemens-sanaa-province",
       "published_at": "2026-11-07T15:55:28+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-dozens-killed-wounded-taiz-market-explosion",
       "published_at": "2026-11-07T14:59:10+00:00"
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
     "id": "YEMEN-11081656-04",
     "title": "דיווחים על פריסת לוחמים סורים בגבול סעודיה-תימן לצד הכחשה רשמית מדמשק",
     "summary": "מקורות צבאיים וביטחוניים בתימן טענו בפני סוכנות הידיעות הצרפתית כי אלפי חיילים סורים עתידים להיפרס, וחלקם כבר הוצבו משני צדי הגבול בין סעודיה לתימן כדי לסייע לסעודיה בלחימה. מנגד, גורם דיפלומטי סורי רשמי הכחיש את הטענות באופן גורף ומסר כי שיתוף הפעולה הביטחוני עם סעודיה מתמקד באימונים והחלפת מומחיות.",
     "axis": "גבול סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T15:46:49+00:00",
     "last_update_at": "2026-11-08T08:01:01+00:00",
     "what_is_not_verified": "האם חיילים סורים אכן נפרסו בפועל בשטח או שמא מדובר בהסכם עתידי או בדיווח שקרי שהוכחש בידי סוריה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133265",
       "published_at": "2026-11-08T08:01:01+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/thousands-syrian-troops-deploy-yemen-saudi-arabia-sources-afp",
       "published_at": "2026-11-07T18:30:23+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-plans-send-troops-yemen-saudi-military-ties-deepen",
       "published_at": "2026-11-07T16:46:27+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133233",
       "published_at": "2026-11-07T16:10:22+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-denies-plans-send-troops-yemen",
       "published_at": "2026-11-07T15:46:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11081656-05",
     "title": "התרסקות טיל חות'י כושל במחוז אל-ביידאא'",
     "summary": "טיל ששיגרו החות'ים במחוז אל-ביידאא' שבתימן כשל במהלך מעופו ונפל בחזרה אל הקרקע זמן קצר לאחר השיגור.",
     "axis": "פנים-תימן: אל-ביידאא'",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T14:17:59+00:00",
     "last_update_at": "2026-11-08T14:17:59+00:00",
     "what_is_not_verified": "יעד הטיל, דגם הטיל והאם היו נפגעים בהתרסקות",
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
       "name": "אל-ביידאא', תימן",
       "lat": 13.9881,
       "lon": 45.5729
      }
     ]
    },
    {
     "id": "YEMEN-11081656-06",
     "title": "פגיעות של החות'ים באזרחים ובאמבולנס בדרום-מזרח תעז",
     "summary": "דיווחים רשמיים של סוכנות הידיעות של ממשלת תימן מסרו על פגיעות מכוונות של החות'ים ברכבים אזרחיים ובאמבולנס באזור דרום-מזרח מחוז תעז, שהביאו לפציעת שתי נשים ולמותו ופציעתו של מספר אזרחים נוספים.",
     "axis": "פנים-תימן: תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T14:07:32+00:00",
     "last_update_at": "2026-11-08T14:18:37+00:00",
     "what_is_not_verified": "זהות הנפגעים ואימות מחוץ לסוכנות הממשלתית התימנית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155423",
       "published_at": "2026-11-08T14:18:37+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155421",
       "published_at": "2026-11-08T14:07:32+00:00"
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
    "האם המגדל של חברת אראמקו בריאד ספג פגיעה ישירה של טיל או נפגע מרסיסי יירוט בלבד",
    "האחריות לפיצוץ שגבה עשרות קורבנות בשוק אל-חדארה בתעז (טיל חות'י מול הפצצה אווירית סעודית)",
    "מספר ההרוגים והפצועים המדויק בתקיפה בכפר א-שריעה ליד צנעא",
    "טענות על הגעת אלפי לוחמים סורים להגנת גבולות סעודיה מול תימן (הוכחשו על ידי סוריה)",
    "דיווחים על השבתת נמל התעופה בריאד למשך שבועיים עקב תקיפות עבר"
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
      "הוצאה לפועל של פעולות צבאיות ממוקדות כנגד מטרות כלכליות וצבאיות בסעודיה בתגובה לתקיפות הקואליציה",
      "תגובה וענישה על פגיעה באזרחים בתימן"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ישיר על סעודיה דרך איום על תאגיד אראמקו והמרכז הפיננסי כדי לערער את יציבותה",
      "שימור הישגים טריטוריאליים בתימן והרתעת הקואליציה מהמשך התקיפות האוויריות"
     ],
     "forecast": [
      "המשך שיגור טילים וכטב\"מים לעבר יעדי תשתית ונפט בסעודיה ככל שהפצצות הקואליציה יימשכו"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט האיומים האוויריים של החות'ים",
      "תמיכה בממשלת תימן המוכרת בינלאומית והחזרת היציבות"
     ],
     "inferred": [
      "הגנה על מרכזי הכלכלה הלאומיים ותוכניות הגיוון הכלכלי מפני שיבוש חות'י",
      "חיפוש משענת וסיוע צבאי מבעלות ברית אזוריות לאבטחת הגבול הדרומי והמתקנים האסטרטגיים"
     ],
     "forecast": [
      "הגברת מאמצי ההגנה האווירית ותקיפות תגמול אוויריות ממוקדות על מעוזי חות'ים בצנעא ובאזורי השיגור"
     ]
    },
    {
     "actor": "ממשלת תימן (הנתמכת על ידי סעודיה)",
     "declared": [
      "המשך המתקפה הצבאית לאורך חוף הים האדום ופגיעה בריכוזי כוחות חות'יים",
      "גינוי תקיפות החות'ים על סעודיה והאשמתם בפשעים נגד אזרחים בתעז"
     ],
     "inferred": [
      "ניצול הסיוע הסעודי להחזרת שטחים שנכבשו על ידי החות'ים לאורך החוף ובאזורי מפתח",
      "הטלת האחריות המלאה למשבר ההומניטרי על התנועה החות'ית"
     ],
     "forecast": [
      "המשך חיכוך צבאי עז בתעז ובחוף הים האדום ללא הכרעה מהירה, תוך החרפת מצב העקורים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-plans-send-troops-yemen-saudi-military-ties-deepen",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c65yn1v99ypmo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261108-yemen-s-houthis-claim-attack-on-aramco-building-in-riyadh-s-financial-district",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21806102",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-condemns-saudi-aggression-after-dozens-killed-attack-taiz-market",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-denies-plans-send-troops-yemen",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155421",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133233",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49404",
     "accessed_at": "2026-11-08T16:56:02+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-08T00:48:04+00:00",
  "changes": {
   "YEMEN-11081656-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות טילים וכטב\"מים של החות'ים נגד יעדים בסעודיה ובתימן",
    "score": 0.817
   },
   "YEMEN-11081656-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות מיוחסות לסעודיה במחוז צנעא",
    "score": 1.0
   },
   "YEMEN-11081656-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פיצוץ קטלני בשוק במחוז תעז והאשמות הדדיות",
    "score": 1.0
   },
   "YEMEN-11081656-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "דיווחים והכחשות בנוגע לפריסת חיילים סורים לתמיכה בסעודיה ובממשלת תימן",
    "score": 1.0
   },
   "YEMEN-11081656-05": {
    "kind": "new"
   },
   "YEMEN-11081656-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-08T1646__iran-202611081646.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-08T16:46:38+00:00",
   "window": {
    "from": "2026-11-07T16:46:38+00:00",
    "to": "2026-11-08T16:46:38+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611081646"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל מתמקד באכיפת סגר צבאי וכלכלי נרחב, הכולל יירוט כלי שיט במפרץ עומאן ושיבוש נתיבי סחר יבשתיים וימיים. במקביל נרשמות פגיעות במכליות נפט במצר הורמוז, פיצוצים מדווחים במוקדים בדרום איראן, ותקיפה של החות'ים נגד יעדי נפט בריאד. לצד המתיחות הצבאית הגוברת והיערכות כוחות ימיים אמריקאיים, מתנהלים ניסיונות תיווך ומגעים דיפלומטיים עקיפים באמצעות מדינות באזור בניסיון לבלום הסלמה רחבה.",
   "fronts": [
    {
     "name": "מצר הורמוז ומפרץ עומאן",
     "status": "פגיעות במכליות נפט, יירוט כלי שיט על ידי ארצות הברית והגבלות על תנועת הסחר הימי"
    },
    {
     "name": "דרום איראן ונמלי המפרץ",
     "status": "דיווחים על פיצוצים, תקיפות נטענות והפעלת מערכות הגנה אווירית בנמלים ובאיים"
    },
    {
     "name": "גבולות איראן ונתיבי האספקה היבשתיים",
     "status": "הפעלת כוח משימה אמריקאי לחסימת הברחות וסגירת מעברים מצד פקיסטן"
    },
    {
     "name": "זירת חצי האי ערב והמפרץ (שלוחות איראן)",
     "status": "תקיפות החות'ים לעבר מטרות בערב הסעודית והיערכות ביטחונית במדינות המפרץ"
    }
   ],
   "events": [
    {
     "id": "IRAN-11081646-01",
     "title": "תקיפת כלי שיט במפרץ עומאן על ידי צבא ארצות הברית",
     "summary": "מטוס צבאי אמריקאי שיגר חימוש מדויק לעבר ספינת משא שהפליגה תחת דגל סנט קיטס והשבית אותה, לאחר שיצאה מנמל איראני וניסתה להפר את הסגר.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T05:46:27+00:00",
     "last_update_at": "2026-11-08T15:09:19+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר להודעת פיקוד המרכז האמריקאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-suggests-blasts-are-not-us-attacks-both-sides-report-ships-hit",
       "published_at": "2026-11-08T15:09:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/us-military-says-it-disabled-cargo-vessel-gulf-oman",
       "published_at": "2026-11-08T05:46:27+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ עומאן",
       "lat": 24.2138,
       "lon": 58.9846
      }
     ]
    },
    {
     "id": "IRAN-11081646-02",
     "title": "פגיעה במכליות נפט ופיצוצים במצר הורמוז",
     "summary": "משמרות המהפכה דיווחו כי שלוש מכליות נפט עלו באש וספגו פיצוצים בעקבות תנועה במסלול לא מורשה, במקביל לדיווחים איראניים על פגיעת מוקשים בספינות.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T11:33:56+00:00",
     "last_update_at": "2026-11-08T15:09:19+00:00",
     "what_is_not_verified": "נסיבות הדליקות וזהות הגורמים שפגעו במכליות אינן מאומתות באופן עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-suggests-blasts-are-not-us-attacks-both-sides-report-ships-hit",
       "published_at": "2026-11-08T15:09:19+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611083614",
       "published_at": "2026-11-08T14:02:56+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-three-tankers-ablaze-strait-hormuz",
       "published_at": "2026-11-08T11:33:56+00:00"
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
     "id": "IRAN-11081646-03",
     "title": "פיצוצים ודיווחים על תקיפות בדרום איראן",
     "summary": "הדי פיצוצים נשמעו במספר מוקדים בדרום איראן ובהם האי קשם, לצד דיווחים על הפעלת מערכות הגנה בבנדר עבאס ותקיפה נטענת בנמל ג'אסכ; גורמים רשמיים באיראן לא אישרו ירי טילים אמריקאי וייחסו חלק לפעילות צבאית מקומית.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T19:38:44+00:00",
     "last_update_at": "2026-11-08T15:09:19+00:00",
     "what_is_not_verified": "האם התרחשה תקיפה אמריקאית בנמלים ובאי קשם או שמדובר בפעילות פנימית של צבא איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-suggests-blasts-are-not-us-attacks-both-sides-report-ships-hit",
       "published_at": "2026-11-08T15:09:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/iran-suggests-blasts-are-not-us-attacks-both-sides-report-ships-hit",
       "published_at": "2026-11-08T14:46:42+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133250",
       "published_at": "2026-11-07T19:57:38+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133249",
       "published_at": "2026-11-07T19:56:10+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94976",
       "published_at": "2026-11-07T19:39:20+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94975",
       "published_at": "2026-11-07T19:38:44+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם, איראן",
       "lat": 26.7687,
       "lon": 55.8477
      },
      {
       "name": "בנדר עבאס, איראן",
       "lat": 27.1842,
       "lon": 56.2893
      },
      {
       "name": "ג'אסכ, איראן",
       "lat": 25.6436,
       "lon": 57.7746
      }
     ]
    },
    {
     "id": "IRAN-11081646-04",
     "title": "הקמת כוח משימה אמריקאי לחסימת נתיבי אספקה לאיראן ותגובת טהראן",
     "summary": "פיקוד המרכז האמריקאי הודיע על הקמת כוח משימה שמטרתו שיבוש העברת אמצעי לחימה דרך גבולותיה היבשתיים של איראן ובים הכספי; דובר משמרות המהפכה דחה את היוזמה וכינה אותה משחק מילים.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T23:31:16+00:00",
     "last_update_at": "2026-11-08T16:03:12+00:00",
     "what_is_not_verified": "מידת היכולת המעשית של כוח המשימה לעצור לחלוטין הברחות בצפון איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iron-gate-plan-merely-wordplay-iran-mocks-us-military-initiative-disrupt",
       "published_at": "2026-11-08T16:03:12+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611089896",
       "published_at": "2026-11-08T16:01:55+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/8/us-task-force-to-cut-off-irans-transport-of-advanced-weapons-what-we-know?traffic_source=rss",
       "published_at": "2026-11-08T14:06:19+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49395",
       "published_at": "2026-11-07T23:31:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11081646-05",
     "title": "העברת כוחות ימיים אמריקאיים למזרח התיכון",
     "summary": "נושאת המטוסים תיאודור רוזוולט וקבוצת התקיפה שלה עזבו את סינגפור והחלו בתנועה דרך מצר מלאקה לעבר אזור האחריות של פיקוד המרכז של צבא ארצות הברית.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T15:09:44+00:00",
     "last_update_at": "2026-11-08T15:09:44+00:00",
     "what_is_not_verified": "מועד ההגעה המדויק ויכולת המימוש של תקיפות רחבות היקף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133289",
       "published_at": "2026-11-08T15:09:44+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11081646-06",
     "title": "מגעים דיפלומטיים ותיווך עקיף בין ארצות הברית לאיראן",
     "summary": "משלחת מעיראק ביקרה בטהראן להעברת מסר מארצות הברית בעקבות ביקור שליח אמריקאי בבגדאד, לצד דיווחים על מגעים לסיום הלחימה באמצעות תיווך קטרי ופקיסטני.",
     "axis": "דיפלומטיה עקיפה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T15:26:16+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T15:26:16+00:00",
     "last_update_at": "2026-11-08T16:20:49+00:00",
     "what_is_not_verified": "תוכן המסרים ומידת ההסכמה של שני הצדדים לפגישה ישירה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21807291",
       "published_at": "2026-11-08T16:20:49+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94967",
       "published_at": "2026-11-07T15:26:16+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "IRAN-11081646-07",
     "title": "מתקפת החות'ים על מבנה חברת ארמקו בריאד",
     "summary": "פגיעה התרחשה בגורד שחקים השייך לחברת הנפט ארמקו במרכז הפיננסי של ריאד, במתקפה שלקחו עליה אחריות המורדים החות'ים מתימן.",
     "axis": "החות'ים-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-08T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T08:11:54+00:00",
     "last_update_at": "2026-11-08T14:02:56+00:00",
     "what_is_not_verified": "סוג החימוש שבו נעשה שימוש במתקפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611083614",
       "published_at": "2026-11-08T14:02:56+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
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
     "id": "IRAN-11081646-08",
     "title": "התבטאות איראנית בדבר שימושים צבאיים בטכנולוגיה גרעינית",
     "summary": "בכיר איראני טען בריאיון כי שימוש צבאי בטכנולוגיה גרעינית אינו מחייב פצצה נגד אזרחים אלא יכול לשמש מטרות טקטיות וצבאיות, והצהיר כי יש להגיע להעשרת אורניום ברמה של שמונים אחוזים.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-08T10:52:22+00:00",
     "last_update_at": "2026-11-08T10:52:22+00:00",
     "what_is_not_verified": "האם הצהרה זו משקפת החלטת מדיניות מחייבת של המשטר בטהראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133274",
       "published_at": "2026-11-08T10:52:22+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "דיווחים על תקיפה אמריקאית בנמל ג'אסכ ובאי קשם ב-7 בנובמבר",
    "הסיבה המדויקת לפיצוצים בדרום איראן (תקיפה חיצונית מול פעילות צבאית מקומית)",
    "מידת ההתקדמות והנכונות לפגישה ישירה במסגרת המגעים העקיפים בין ארצות הברית לאיראן",
    "היקף הנזק המדויק במכליות הנפט שנפגעו במצר הורמוז"
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
     "actor": "איראן",
     "declared": [
      "שמירה על זכויות השיט בהתאם להנחיות המקומיות במצר הורמוז ומניעת הפרתן על ידי כלי שיט זרים",
      "הגנה על המדינה באמצעות אמצעי לחימה מתקדמים והרתעה מפני איומים חיצוניים",
      "החזקת יכולת טכנולוגית להעשרת אורניום ברמה של עד שמונים אחוזים"
     ],
     "inferred": [
      "ערעור הביטחון בנתיבי השיט הבינלאומיים בתגובה ללחץ הכלכלי והמצור האמריקאי",
      "שמירה על ערוצי אספקה צפוניים ומגעים מדיניים כדי למנוע קריסה כלכלית"
     ],
     "forecast": [
      "המשך פעולות הטרדה נקודתיות במצר הורמוז תוך הימנעות מהודאה רשמית בעימות ישיר עם ארה\"ב",
      "שימוש בקלף הגרעיני והעשרת האורניום כאמצעי לחץ במשא ומתן העקיף"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "אכיפת סגר כלכלי וצבאי על איראן ושיבוש העברות נשק בלתי מורשות דרך היבשה והים",
      "הצעת תגמול כספי עבור מידע בנוגע לתוכנית הגרעין האיראנית"
     ],
     "inferred": [
      "הפעלת לחץ מרבי במטרה לכפות על טהראן הסכם חדש או ויתורים אסטרטגיים",
      "בחינת ערוצי הידברות במקביל לעיבוי הנוכחות הצבאית והרתעת הציר האיראני"
     ],
     "forecast": [
      "הגברת האכיפה נגד ספינות סוחר בקרבת חופי איראן עם הגעת נושאת מטוסים נוספת לאזור",
      "המשך תנודה בין איומים בתקיפות רחבות לבין ניסיונות למיצוי מגעים דיפלומטיים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "אזהרה מפני מבצעים שטרם הושלמו נגד איראן והדגשת חומרת האיום הנשקף ממנה"
     ],
     "inferred": [
      "דחיפה להגברת הלחץ הצבאי האמריקאי על מתקניה של איראן",
      "סיכול התבססות שלוחותיה של איראן ואיסוף מודיעין על גבולותיה"
     ],
     "forecast": [
      "המשך תיאום ביטחוני הדוק עם ארצות הברית והיערכות לתגובה במקרה של הסלמה כוללת"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/8/us-task-force-to-cut-off-irans-transport-of-advanced-weapons-what-we-know?traffic_source=rss",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/iran-suggests-blasts-are-not-us-attacks-both-sides-report-ships-hit",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261108-yemen-s-houthis-claim-attack-on-aramco-building-in-riyadh-s-financial-district",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611083614",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21807291",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iron-gate-plan-merely-wordplay-iran-mocks-us-military-initiative-disrupt",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133274",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49395",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94967",
     "accessed_at": "2026-11-08T16:46:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-08T00:40:26+00:00",
  "changes": {
   "IRAN-11081646-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה והשבתת ספינת משא במפרץ עומאן על ידי כוחות ארה\"ב",
    "score": 1.0
   },
   "IRAN-11081646-02": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעת מוקשים ימיים במכליות נפט באזור מצר הורמוז",
    "score": 1.0
   },
   "IRAN-11081646-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פיצוצים ודיווחים על תקיפות בדרום איראן ובמצר הורמוז",
    "score": 1.0
   },
   "IRAN-11081646-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הקמת כוח משימה אמריקני וסגירת מעברים להרחבת המצור היבשתי על איראן",
    "score": 1.0
   },
   "IRAN-11081646-05": {
    "kind": "new"
   },
   "IRAN-11081646-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מגעים דיפלומטיים ותיווך בינלאומי לסיום הלחימה והסדרי גרעין",
    "score": 1.0
   },
   "IRAN-11081646-07": {
    "kind": "new"
   },
   "IRAN-11081646-08": {
    "kind": "new"
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
