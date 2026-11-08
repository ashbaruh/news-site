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
  "draft": "drafts/ukraine/2026-11-08T0046__ukraine-202611080046.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-08T00:46:41+00:00",
   "window": {
    "from": "2026-11-07T00:46:41+00:00",
    "to": "2026-11-08T00:46:41+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611080046"
   },
   "summary": "רוסיה מנהלת מערכת תקיפות נרחבת באמצעות עשרות טילים בליסטיים וכטב\"מים נגד תשתיות אנרגיה, תחבורה ומטרות אזרחיות בקייב ובמחוזות נוספים. מנגד, אוקראינה מתמודדת עם מחסור חמור במערכות הגנה אווירית מסוג פטריוט במקביל לתקיפת יעדי אנרגיה בעומק רוסיה. במקביל להסלמה הצבאית, מתקיימים מגעים דיפלומטיים לשיחות עתידיות לקראת אפשרות למשא ומתן באבו דאבי.",
   "fronts": [
    {
     "name": "מרחב קייב והעורף האוקראיני",
     "status": "ספיגת מתקפות בליסטיות וכטב\"מים רוסיים, פגיעה בגשרים ובתשתיות חשמל ומים"
    },
    {
     "name": "מחוז חרקוב",
     "status": "הפגזות רוסיות מתמשכות עם נפגעים בקרב אזרחים וחיילים"
    },
    {
     "name": "מחוז זפוריז'יה (קומישובאחה)",
     "status": "המשך פעולות חילוץ בעקבות הפצצות אוויריות כבדות"
    },
    {
     "name": "מחוז לוהנסק",
     "status": "טענות רוסיות על תקיפות אוקראיניות נגד מבנים ואזרחים"
    },
    {
     "name": "עומק רוסיה (סרטוב)",
     "status": "תקיפות כטב\"מים אוקראיניות נגד בתי זיקוק ותשתיות אנרגיה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11080046-01",
     "title": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב ותשתיותיה",
     "summary": "כוחות רוסיה שיגרו עשרות טילים בליסטיים ומאות כטב\"מים לעבר קייב ומחוזות נוספים, תוך פגיעה בגשר הצפוני על הדנייפר, מבני מגורים, מחסנים ותשתיות אנרגיה שגרמו להפסקות חשמל ומים.",
     "axis": "חזית האוויר והעורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T02:40:00+00:00",
     "last_update_at": "2026-11-07T19:57:00+00:00",
     "what_is_not_verified": "מספר הטילים המדויק (דיווח על 36 לעומת 40 טילים בליסטיים) ומספר המתקנים שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_8d4eb13de4f4b4ab",
       "url": "https://www.ukrinform.net/rubric-ato/4182521-prosecutors-office-building-damaged-in-russian-attack-on-kyiv.html",
       "published_at": "2026-11-07T19:57:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_8d4eb13de4f4b4ab",
       "url": "https://www.ukrinform.net/rubric-ato/4182519-fire-at-warehouse-in-kyiv-region-caused-by-russian-attack-extinguished.html",
       "published_at": "2026-11-07T19:39:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_8d4eb13de4f4b4ab",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061745/",
       "published_at": "2026-11-07T16:25:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_c4cae6acb594da36",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061738/",
       "published_at": "2026-11-07T15:11:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_c43f99875e334410",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061735/",
       "published_at": "2026-11-07T14:26:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_8d4eb13de4f4b4ab",
       "url": "https://www.theguardian.com/world/2026/nov/07/blackout-water-shortage-kyiv-russia-strike-ukraine-energy-grid",
       "published_at": "2026-11-07T13:03:03+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_8d4eb13de4f4b4ab",
       "url": "https://t.me/alexmehacarmel/49358",
       "published_at": "2026-11-07T02:40:00+00:00"
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
     "id": "UKRAINE-11080046-02",
     "title": "הפגזות רוסיות באזור חרקוב גרמו להרוגה ופצועים",
     "summary": "הפגזות של צבא רוסיה על העיר חרקוב וסביבתה הביאו למותה של אישה ולפציעת אזרחים נוספים.",
     "axis": "חזית מזרח אוקראינה (חרקוב)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T19:19:00+00:00",
     "last_update_at": "2026-11-07T19:19:00+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל והיקף הנזק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4182512-woman-killed-others-injured-in-russian-attacks-on-kharkiv-region-since-morning.html",
       "published_at": "2026-11-07T19:19:00+00:00"
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
     "id": "UKRAINE-11080046-03",
     "title": "הודעת גרמניה על מיצוי יכולת אספקת סוללות פטריוט לאוקראינה",
     "summary": "שר ההגנה הגרמני בוריס פיסטוריוס הצהיר כי גרמניה אינה יכולה לספק עוד מערכות פטריוט לאוקראינה בעת הנוכחית עקב פערים בהגנתה שלה, וקרא למדינות אחרות להגביר את תרומתן.",
     "axis": "סיוע צבאי בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T16:00:00+00:00",
     "last_update_at": "2026-11-07T17:55:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/germany-cannot-provide-ukraine-with-more-patriot-systems-for-now-defense-minister-says/",
       "published_at": "2026-11-07T17:55:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061743/",
       "published_at": "2026-11-07T16:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11080046-04",
     "title": "רוסיה תשלח דיפלומטים ובכירים צבאיים לשיחות שלום באבו דאבי",
     "summary": "סגן שר החוץ הרוסי סרגיי ריאבקוב ובכירים בצבא ישתתפו לראשונה במשא ומתן לשלום שצפוי להתקיים באבו דאבי.",
     "axis": "משא ומתן דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T21:58:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T21:58:58+00:00",
     "last_update_at": "2026-11-07T21:58:58+00:00",
     "what_is_not_verified": "המועד המדויק והרכב המשתתפים המלא בשיחות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russia-to-send-senior-diplomats-military-officials-to-upcoming-peace-talks-in-abu-dhabi/",
       "published_at": "2026-11-07T21:58:58+00:00"
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
     "id": "UKRAINE-11080046-05",
     "title": "טענות פריצה למאגרי מידע רוסיים המצביעים על כ-450 אלף הרוגים במלחמה",
     "summary": "האקרים טוענים כי השיגו נתונים ממאגר הדמוגרפיה הפנימי של רוססטאט, המעידים על עד 450,000 מקרי מוות הקשורים למלחמה באוקראינה בין 2022 ל-2026.",
     "axis": "אבדות ולוחמת מידע",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T19:40:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T19:40:00+00:00",
     "last_update_at": "2026-11-07T23:35:18+00:00",
     "what_is_not_verified": "אמיתות הנתונים והמאגרים שהודלפו על ידי ההאקרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1385992",
       "published_at": "2026-11-07T23:35:18+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/hackers-claim-leaked-russian-data-reveals-up-to-450-000-war-related-deaths-in-ukraine/",
       "published_at": "2026-11-07T19:40:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11080046-06",
     "title": "טענות רוסיות על תקיפות אוקראיניות במחוז לוהנסק ונגד תשתיות אנרגיה",
     "summary": "גורמים רשמיים ברוסיה טענו כי תקיפות אוקראיניות פגעו במבני מגורים ורכבים בלוהנסק ופצעו שני אזרחים, ובנוסף טענו להמשך פגיעה מכוונת בתשתיות אנרגיה רוסיות.",
     "axis": "חזית המזרח / שטח רוסי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T20:13:34+00:00",
     "last_update_at": "2026-11-07T20:37:30+00:00",
     "what_is_not_verified": "היקף הפגיעות המדויק ומידת אמיתות הטענות הרוסיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_cb1f4bdbd4a1f9ab",
       "url": "https://tass.com/emergencies/2214333",
       "published_at": "2026-11-07T20:37:30+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_cb1f4bdbd4a1f9ab",
       "url": "https://tass.com/politics/2214327",
       "published_at": "2026-11-07T20:13:34+00:00"
      }
     ],
     "places": [
      {
       "name": "לוהנסק, אוקראינה",
       "lat": 48.5717,
       "lon": 39.2973
      }
     ]
    },
    {
     "id": "UKRAINE-11080046-07",
     "title": "תקיפה אוקראינית מדווחת נגד בית זיקוק בסרטוב",
     "summary": "דיווח על תקיפה שביצעו כוחות אוקראיניים נגד בית זיקוק לנפט בסרטוב שבעומק רוסיה.",
     "axis": "עומק רוסיה / תקיפת תשתיות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T01:29:36+00:00",
     "last_update_at": "2026-11-07T01:29:36+00:00",
     "what_is_not_verified": "היקף הנזק והאמצעים ששימשו לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49355",
       "published_at": "2026-11-07T01:29:36+00:00"
      }
     ],
     "places": [
      {
       "name": "סרטוב, רוסיה",
       "lat": 51.53,
       "lon": 46.0347
      }
     ]
    },
    {
     "id": "UKRAINE-11080046-08",
     "title": "זיהוי אנשי צוות אוויר רוסיים החשודים בהפצצת בית ספר בקומישובאחה",
     "summary": "המודיעין הצבאי האוקראיני פרסם את שמותיהם של קולונל רוסי ושישה טייסי מטוסי קרב החשודים בביצוע תקיפה אווירית על בית ספר שבו חולק סיוע במחוז זפוריז'יה, בה נהרגו 55 בני אדם.",
     "axis": "פשעי מלחמה ומודיעין",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T13:59:00+00:00",
     "last_update_at": "2026-11-07T13:59:00+00:00",
     "what_is_not_verified": "מעורבותם האישית המדויקת של הטייסים שפורסמו מעבר להודעת המודיעין האוקראיני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b71c472d2e596af2",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061730/",
       "published_at": "2026-11-07T13:59:00+00:00"
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
     "id": "UKRAINE-11080046-09",
     "title": "ביקור בכירי צבא אוקראינה במפקדת קורפוס הנחתים",
     "summary": "מפקד הכוחות המזוינים של אוקראינה דראפטי ומפקד כוחות היבשה זאיץ ביקרו בעמדת הפיקוד של קורפוס הנחתים ה-30 של הצי.",
     "axis": "פיקוד ושליטה באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T20:56:00+00:00",
     "last_update_at": "2026-11-07T20:56:00+00:00",
     "what_is_not_verified": "מיקום מדויק של עמדת הפיקוד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4182529-drapatyi-zaits-visit-marine-corps-headquarters.html",
       "published_at": "2026-11-07T20:56:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11080046-10",
     "title": "תרומת כטב\"מי קרב ליחידת המודיעין המיוחדת של אוקראינה",
     "summary": "היחידה המיוחדת פרימארי של המודיעין הצבאי האוקראיני קיבלה כטב\"מי קרב בשווי 4.2 מיליון הריבניה מתורמים.",
     "axis": "הצטיידות וסיוע אוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T22:42:00+00:00",
     "last_update_at": "2026-11-07T22:42:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4182312-dius-prymary-unit-receives-uah-42m-worth-of-combat-drones-from-donors.html",
       "published_at": "2026-11-07T22:42:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת ההאקרים על 450,000 הרוגים רוסים ממאגר הנתונים של רוססטאט",
    "הדיווחים על היקף השימוש במערכות תקשורת לוויינית ישראליות בכטב\"מים אוקראיניים",
    "מספר הטילים המדויק שנורה לעבר קייב (מקורות שונים טענו ל-36 או 40 טילים בליסטיים)",
    "דיווחים על החזקת חיילים במרתף עינויים ליד קייב"
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
      "השגת טילי יירוט ומערכות הגנה אווירית נוספות מסוג פטריוט מבעלות הברית",
      "הבאת האחראים הרוסים להפצצות אזרחיות לדין",
      "תיקון מהיר של רשת החשמל והתחבורה שנפגעו בתקיפות"
     ],
     "inferred": [
      "פגיעה בתשתיות נפט ואנרגיה בעומק רוסיה כדי להעלות את מחיר המלחמה עבור מוסקבה",
      "הפעלת לחץ על מדינות המערב להגברת הסיוע הצבאי בטרם יחמיר החורף"
     ],
     "forecast": [
      "המשך דרישה דחופה מארה\"ב וממדינות אירופה לאספקת טילי יירוט נוכח החוסר הגובר",
      "הגברת מאמצי המיגון וההתאמה של חלופות תחבורה ואנרגיה בערים המרכזיות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "שיגור דיפלומטים ובכירים צבאיים לשיחות משא ומתן באבו דאבי",
      "שלילת נוכחות של מדינות אירופיות בשולחן המשא ומתן על אוקראינה"
     ],
     "inferred": [
      "השבתת תשתיות האנרגיה והתחבורה באוקראינה לקראת החורף כדי לשבור את כושר העמידה של העורף",
      "השגת עמדת מיקוח עדיפה וקביעת עובדות בשטח לקראת משא ומתן אפשרי"
     ],
     "forecast": [
      "המשך גלי התקיפות המשולבים של טילים וכטב\"מים לעבר יעדי תשתית אסטרטגיים",
      "המשך גיוס כוח אדם בשיטות לחץ מבוזרות כדי להימנע מהכרזה על גיוס המוני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/07/blackout-water-shortage-kyiv-russia-strike-ukraine-energy-grid",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/hackers-claim-leaked-russian-data-reveals-up-to-450-000-war-related-deaths-in-ukraine/",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1385992",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/07/8061730/",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2214327",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49355",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-society/4182312-dius-prymary-unit-receives-uah-42m-worth-of-combat-drones-from-donors.html",
     "accessed_at": "2026-11-08T00:46:41+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-07T06:30:53+00:00",
  "changes": {
   "UKRAINE-11080046-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מתקפה בליסטית ורחפנים רוסית נרחבת על קייב ותשתיות אנרגיה",
    "score": 1.0
   },
   "UKRAINE-11080046-02": {
    "kind": "possible",
    "prev": "מבצע חילוץ ברחפן של חייל אוקראיני פצוע באזור חרקוב",
    "score": 0.467
   },
   "UKRAINE-11080046-03": {
    "kind": "new"
   },
   "UKRAINE-11080046-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מגעים דיפלומטיים והכנות למשא ומתן תלת-צדדי באבו דאבי",
    "score": 0.817
   },
   "UKRAINE-11080046-05": {
    "kind": "new"
   },
   "UKRAINE-11080046-06": {
    "kind": "possible",
    "prev": "תקיפות כטב\"מים וטילים אוקראיניות בעומק שטח רוסיה",
    "score": 0.467
   },
   "UKRAINE-11080046-07": {
    "kind": "new"
   },
   "UKRAINE-11080046-08": {
    "kind": "new"
   },
   "UKRAINE-11080046-09": {
    "kind": "new"
   },
   "UKRAINE-11080046-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-08T0049__north-202611080049.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-08T00:49:12+00:00",
   "window": {
    "from": "2026-11-07T00:49:12+00:00",
    "to": "2026-11-08T00:49:12+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611080049"
   },
   "summary": "בדרום לבנון נמשכת הפעילות המבצעית והקרקעית של צה\"ל תוך הטמעת מערכי לחימה רובוטיים מתקדמים, ביצוע סריקות ומעצר חשודים במחסומים, ברקע טענות להמשך תקיפות חרף הפסקת האש. במקביל, ממשלת לבנון מנסה לקדם ריבונות בלעדית על הנשק ולבלום את מעורבות חיזבאללה בזירות אזוריות, בעוד המשטר בסוריה מפתח שיתוף פעולה צבאי עם סעודיה ומכחיש שליחת כוחות ללחימה מחוץ לגבולותיו.",
   "fronts": [
    {
     "name": "דרום לבנון - קו המגע",
     "status": "פעילות מבצעית מתמשכת של צה\"ל הכוללת סריקות, מחסומים והפעלת אמצעים רובוטיים בלתי מאוישים."
    },
    {
     "name": "לבנון - ריבונות ומשילות מול חיזבאללה",
     "status": "מאמצים דיפלומטיים של ממשלת לבנון לריכוז החלטות המלחמה וריסון מעורבות חיזבאללה, לצד מתיחות בינלאומית מול ארצות הברית."
    },
    {
     "name": "סוריה - ציר ביטחוני ואזורי",
     "status": "שיקום היכולות הצבאיות לאחר נפילת אסד באמצעות הסכם הכשרה עם סעודיה, לצד הכחשת מעורבות בלחימה בתימן."
    }
   ],
   "events": [
    {
     "id": "NORTH-11080049-01",
     "title": "צה\"ל חושף צוות קרב רובוטי משולב ופועל בדרום לבנון",
     "summary": "צבא ההגנה לישראל הציג מערך לחימה רובוטי משולב הפועל בדרום לבנון, הכולל כלי רכב כבדים בלתי מאוישים, כלבים רובוטיים לגילוי חומרי נפץ ורחפנים חמושים לסריקת מבנים ומנהרות. הרמטכ\"ל אייל זמיר סייר בעיירה אל-חיאם והורה להאיץ את הטמעת היכולות ביחידות הלוחמות.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-05T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T16:19:20+00:00",
     "last_update_at": "2026-11-07T16:19:20+00:00",
     "what_is_not_verified": "רמת האוטונומיה המלאה של הכלים בשטח ותוצאות פעילותם המבצעית מעבר למידע שנמסר בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israel-unveils-robotic-system-attacks-southern-lebanon",
       "published_at": "2026-11-07T16:19:20+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חיאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      }
     ]
    },
    {
     "id": "NORTH-11080049-02",
     "title": "פעילות סריקה של צה\"ל בבית יהון בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו פעילות סריקה בעיירה בית יהון שבדרום לבנון במסגרת פעילות מבצעית מתמשכת באזור.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T09:44:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T09:44:36+00:00",
     "last_update_at": "2026-11-07T09:44:36+00:00",
     "what_is_not_verified": "היקף הפעילות, יעדיה המדויקים ותוצאותיה בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/147762/",
       "published_at": "2026-11-07T09:44:36+00:00"
      }
     ],
     "places": [
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-11080049-03",
     "title": "מעצר אזרח לבנוני במחסום צה\"ל בין בורג' אל-מלוכ לדיר מימאס",
     "summary": "כוחות צה\"ל עיכבו ועצרו מהנדס בדימוס בן שישים וחמש במחסום זמני שהוצב בדרום לבנון, לאחר בדיקת מסמכים וחיפוש במכשירו הנייד, והעבירו אותו למקום לא ידוע.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T15:00:00+00:00",
     "last_update_at": "2026-11-07T15:00:00+00:00",
     "what_is_not_verified": "עילת המעצר הביטחונית ומקום הימצאו הנוכחי של העצור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/966774/israels-army-detains-65-year-old-retired-engineer-at-south-lebanon-che/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966774",
       "published_at": "2026-11-07T15:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      },
      {
       "name": "בורג' אל-מלוכ, לבנון",
       "lat": 33.323,
       "lon": 35.5632
      }
     ]
    },
    {
     "id": "NORTH-11080049-04",
     "title": "טענות קטאר בדבר המשך הפצצות בלבנון למרות הפסקת האש",
     "summary": "ראש ממשלת קטאר הצהיר כי ארצו עוקבת אחר המצב בלבנון לאחר הפסקת האש, וציין כי ההפצצות באזור נמשכות במקביל למאמצי התיווך למניעת הסלמה.",
     "axis": "מדיני - לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T13:11:11+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T13:11:11+00:00",
     "last_update_at": "2026-11-07T13:11:11+00:00",
     "what_is_not_verified": "היקף ההפצצות הנטענות והצדדים המעורבים בהפרות הפסקת האש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/147807/",
       "published_at": "2026-11-07T13:11:11+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11080049-05",
     "title": "גירוש הקונסול הכללי של לבנון בארצות הברית על רקע עמדות עבר",
     "summary": "מחלקת המדינה של ארצות הברית הכריזה על קונסול לבנון במישיגן כאישיות בלתי רצויה והורתה לו לעזוב, בעקבות פרסומים ישנים ברשת ששיבחו את הפיגוע במגורי הנחתים בביירות בשנת 1983.",
     "axis": "לבנון - יחסי חוץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T04:50:31+00:00",
     "last_update_at": "2026-11-07T21:48:48+00:00",
     "what_is_not_verified": "טענת מקורבי הקונסול כי החשבון המדובר נפרץ בעבר ושאינו אחראי לפרסומים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanese-consul-michigan-ordered-leave-over-old-tweets",
       "published_at": "2026-11-07T21:48:48+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/americas/us-declares-lebanese-consul-general-in-detroit-persona-non-grata-report/4115358",
       "published_at": "2026-11-07T16:22:46+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966795/lebanese-consul-in-michigan-to-return-to-lebanon-sunday/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966795",
       "published_at": "2026-11-07T12:39:18+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/966745/hiba-nasr-us-declares-lebanese-consul-in-michigan-persona-non-grata-ov/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966745",
       "published_at": "2026-11-07T04:50:31+00:00"
      }
     ],
     "places": [
      {
       "name": "דטרויט, ארצות הברית",
       "lat": 42.3316,
       "lon": -83.0466
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-11080049-06",
     "title": "תיאום צעדים בין לבנון לתימן לבלימת תמיכת חיזבאללה בחות'ים",
     "summary": "שרת החוץ של תימן הודיעה על נקיטת צעדים משותפים עם ממשלת לבנון במטרה לעצור את תמיכת אנשי חיזבאללה בפעילות הצבאית של החות'ים, ובירכה על מאמצי ביירות לרכז את השליטה בנשק ובקבלת החלטות המלחמה בידי המדינה.",
     "axis": "לבנון - חיזבאללה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T00:14:15+00:00",
     "last_update_at": "2026-11-08T00:14:15+00:00",
     "what_is_not_verified": "אופי הצעדים המעשיים שינקטו ומידת יכולתה של ממשלת לבנון לפקח על פעילות חיזבאללה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-and-lebanon-work-towards-halting-hezbollah-support-houthis",
       "published_at": "2026-11-08T00:14:15+00:00"
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
     "id": "NORTH-11080049-07",
     "title": "הסכם שיתוף פעולה צבאי בין סוריה לסעודיה והכחשת פריסת כוחות",
     "summary": "דמשק חתמה על הסכם שיתוף פעולה ביטחוני עם ריאד המתמקד בהכשרת כוחות ובניית יכולות, כאשר גורמים רשמיים בסוריה הכחישו בתוקף דיווחים על כוונה לשלוח אלפי חיילים ללחימה מחוץ למדינה.",
     "axis": "סוריה - ביטחון אזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T12:59:31+00:00",
     "last_update_at": "2026-11-07T18:30:23+00:00",
     "what_is_not_verified": "אמיתות הדיווחים הזרים בדבר הגעת חיילים ומומחים צבאיים סורים לתימן ולסעודיה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/thousands-syrian-troops-deploy-yemen-saudi-arabia-sources-afp",
       "published_at": "2026-11-07T18:30:23+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-says-military-deal-with-saudi-arabia-focuses-on-training-denies-sending-troops-to-yemen/4115383",
       "published_at": "2026-11-07T17:19:27+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-plans-send-troops-yemen-saudi-military-ties-deepen",
       "published_at": "2026-11-07T16:46:27+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21798154",
       "published_at": "2026-11-07T16:26:26+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-denies-plans-send-troops-yemen-says-military-cooperation-saudi",
       "published_at": "2026-11-07T15:48:19+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-denies-plans-send-troops-yemen",
       "published_at": "2026-11-07T15:46:49+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/966804/syrian-diplomatic-source-denies-claims-troops-sent-to-yemen-state-medi/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966804",
       "published_at": "2026-11-07T12:59:31+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה כי אלפי חיילים סורים כבר נפרסו או עתידים להיפרס בערב הסעודית ובתימן.",
    "היקף ההפרות וההפצצות בלבנון לאחר הפסקת האש שהוזכרו בהצהרת ראש ממשלת קטאר.",
    "טענת מקורבי הקונסול הלבנוני כי חשבונו ברשת החברתית נפרץ בעבר.",
    "הסיבה המדויקת למעצרו של האזרח הלבנוני נקד בשארה במחסום צה\"ל בדרום לבנון."
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
      "האצת שילוב צוותי קרב רובוטיים מתקדמים ביחידות הלוחמות לצורך איתור איומים וסריקת מבנים ותוואי תת-קרקעי."
     ],
     "inferred": [
      "המשך סיכול פעילות עוינת ושימור חופש פעולה ביטחוני בדרום לבנון תוך מזעור סיכון לחיילים."
     ],
     "forecast": [
      "התרחבות השימוש בכלים אוטונומיים ורובוטיים בפעולות סריקה ופשיטה נקודתיות לאורך קו הגבול."
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "ביסוס סמכות המדינה על כלל שטחה והחזקת בלעדיות מלאה על נשק והחלטות מלחמה ושלום.",
      "בלימת התמיכה הצבאית של גורמים בחיזבאללה במיליציות אזוריות כגון החות'ים."
     ],
     "inferred": [
      "ניסיון להשתחרר מהתלות בכוחו הצבאי של חיזבאללה ולשפר את היחסים עם מדינות ערב והמערב."
     ],
     "forecast": [
      "המשך קשיים באכיפה ממשית של פירוק חיזבאללה מנשקו לצד התמקדות בצעדים דיפלומטיים."
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "מיקוד בעניינים פנימיים והכחשת כל כוונה לשלוח כוחות צבאיים לפעילות מחוץ לשטח המדינה.",
      "התמקדות בהכשרת הכוחות הסוריים, בניית יכולותיהם והחלפת מומחיות במסגרת שיתוף פעולה עם סעודיה."
     ],
     "inferred": [
      "שיקום מנגנוני הביטחון לאחר חילופי השלטון תוך קבלת גיבוי ומימון ממדינות המפרץ והימנעות מעימותים חיצוניים."
     ],
     "forecast": [
      "המשך הידוק הקשרים המקצועיים והצבאיים עם סעודיה תוך שמירה על גבולות המדינה והימנעות ממעורבות בעימותים אזוריים."
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות צבאיות והשפעה פוליטית בלבנון למרות לחצי הממשלה והפסקת האש.",
      "המשך תמיכה חשאית בגורמי הציר האזורי תוך שמירה על פרופיל נמוך מול מעקב צה\"ל."
     ],
     "forecast": [
      "המשך פעילות מתחת לרדאר בדרום לבנון וניסיונות התחמקות ממערכי הגילוי והסריקה של צה\"ל."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/147807/",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-plans-send-troops-yemen-saudi-military-ties-deepen",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-says-military-deal-with-saudi-arabia-focuses-on-training-denies-sending-troops-to-yemen/4115383",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21798154",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/966804/syrian-diplomatic-source-denies-claims-troops-sent-to-yemen-state-medi/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-966804",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-denies-plans-send-troops-yemen-says-military-cooperation-saudi",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-denies-plans-send-troops-yemen",
     "accessed_at": "2026-11-08T00:49:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-07T09:12:05+00:00",
  "changes": {
   "NORTH-11080049-01": {
    "kind": "possible",
    "prev": "אזהרה מפני משבר תזונה ופגיעה בקרקעות חקלאיות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11080049-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות ארטילריה, ירי מקלעים ופיצוצים של צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-11080049-03": {
    "kind": "new"
   },
   "NORTH-11080049-04": {
    "kind": "new"
   },
   "NORTH-11080049-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "הכרזת קונסול לבנון במישיגן כאישיות בלתי רצויה בארה\"ב",
    "score": 1.0
   },
   "NORTH-11080049-06": {
    "kind": "possible",
    "prev": "מעצר חברי חיזבאללה וחקירת משלוח חומרי נפץ בלבנון",
    "score": 0.633
   },
   "NORTH-11080049-07": {
    "kind": "possible",
    "prev": "הכחשת ממשלת סוריה בדבר העברת משרדים ממשלתיים מדמשק",
    "score": 0.633
   }
  }
 }
};
