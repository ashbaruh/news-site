/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-08T0048__yemen-202611080048.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-08T00:48:04+00:00",
   "window": {
    "from": "2026-11-07T00:48:04+00:00",
    "to": "2026-11-08T00:48:04+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611080048"
   },
   "summary": "הלחימה בין החות'ים לבין הקואליציה בהובלת סעודיה וממשלת תימן החריפה באופן ניכר וכוללת חילופי מהלומות כבדים. החות'ים שיגרו תקיפות משולבות של טילים וכטב\"מים לעבר יעדי תשתית, נפט ובסיסים בעומק סעודיה, במקביל לתקיפות אוויריות נרחבות שגרמו לנפגעים רבים באזור צנעא ובמחוז תעז. במקביל, ממשלת תימן פתחה במבצע רחב היקף לכיבוש מחדש של שטחים, בעוד ברקע מתנהל מאמץ סעודי לגיוס תמיכה צבאית בינלאומית וחיכוך סביב מעורבות זרה.",
   "fronts": [
    {
     "name": "חזית העורף הסעודי וגבול סעודיה-תימן",
     "status": "הסלמה בתקיפות טילים וכטב\"מים לעבר ריאד ומתקני ארמקו, לצד יירוטים והגברת כוננות"
    },
    {
     "name": "חזית מחוז צנעא",
     "status": "הפצצות אוויריות אינטנסיביות ודיווחים על עשרות הרוגים ופצועים בכפרים סביב הבירה"
    },
    {
     "name": "חזית מחוז תעז",
     "status": "עימותים פעילים, מצור ופגיעות קטלניות בריכוזי אוכלוסייה ובשווקים תחת האשמות הדדיות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11080048-01",
     "title": "תקיפות אוויריות מיוחסות לסעודיה במחוז צנעא",
     "summary": "עשרות בני אדם נהרגו ונפצעו בסדרת תקיפות מהאוויר שפגעו באזור בני חשיש ובכפר א-שריעה ממזרח לבירה. החות'ים האשימו את סעודיה בתקיפות, וגורמי רפואה דיווחו על פגיעה באנשי חילוץ וצוותים רפואיים.",
     "axis": "צנעא, תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T15:55:28+00:00",
     "last_update_at": "2026-11-07T23:19:49+00:00",
     "what_is_not_verified": "סעודיה לא קיבלה אחריות רשמית לתקיפות ומסרה כי הנושא בבדיקה, ומספר הנפגעים המדויק נמסר רק על ידי מקורות חות'יים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/death-toll-air-strikes-near-yemeni-capital-rises-33-houthis-say",
       "published_at": "2026-11-07T23:19:49+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/houthi-run-health-ministry-says-airstrikes-kill-33-near-yemen-capital",
       "published_at": "2026-11-07T20:46:28+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/7/yemeni-govt-forces-report-advances-as-houthis-say-deadly-strikes-hit-sanaa?traffic_source=rss",
       "published_at": "2026-11-07T19:06:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-strikes-kill-least-27-yemens-sanaa-houthis-say",
       "published_at": "2026-11-07T18:45:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-27-killed-saudi-strikes-yemens-sanaa-province",
       "published_at": "2026-11-07T15:55:28+00:00"
      }
     ],
     "places": [
      {
       "name": "בני חשיש, תימן",
       "lat": 15.4547,
       "lon": 44.3782
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      }
     ]
    },
    {
     "id": "YEMEN-11080048-02",
     "title": "תקיפות טילים וכטב\"מים של החות'ים נגד יעדים בסעודיה ובתימן",
     "summary": "החות'ים טענו כי שיגרו שש מתקפות שכללו טילים וכלי טיס בלתי מאוישים לעבר מתקני נפט של חברת ארמקו, שדה התעופה בריאד וריכוזי כוחות סעודיים משני עברי הגבול. הקואליציה הסעודית הודיעה על יירוט טיל שנורה לעבר מחוז ריאד.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T18:32:34+00:00",
     "last_update_at": "2026-11-07T20:26:58+00:00",
     "what_is_not_verified": "היקף הפגיעות המדויק באתרי ארמקו ובשדה התעופה לא אומת באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-lifts-alert-jazan-home-aramco-refinery-targeted-houthis",
       "published_at": "2026-11-07T20:26:58+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-strikes-kill-least-27-yemens-sanaa-houthis-say",
       "published_at": "2026-11-07T18:45:33+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-claim-attacks-saudi-aramco-sites-riyadh-airport-and-troops",
       "published_at": "2026-11-07T18:32:34+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'אזאן, ערב הסעודית",
       "lat": 16.8947,
       "lon": 42.558
      }
     ]
    },
    {
     "id": "YEMEN-11080048-03",
     "title": "מבצע התקפי רחב היקף של צבא ממשלת תימן",
     "summary": "כוחות ממשלת תימן הודיעו על תקיפת 875 עמדות והתקהלויות של החות'ים במסגרת מבצע צבאי בשם שחר תימן, שמטרתו השתלטות מחדש על שטחים ובהם הבירה צנעא, וטענו לנטרול עשרות מפקדים ולוחמים.",
     "axis": "חזיתות הלחימה הפנימית בתימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T15:57:06+00:00",
     "last_update_at": "2026-11-07T18:45:33+00:00",
     "what_is_not_verified": "אין אימות עצמאי להיקף הפגיעות בפועל במסגרת המבצע ולמספר הנפגעים מקרב החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-strikes-kill-least-27-yemens-sanaa-houthis-say",
       "published_at": "2026-11-07T18:45:33+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155375",
       "published_at": "2026-11-07T15:57:06+00:00"
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
     "id": "YEMEN-11080048-04",
     "title": "פיצוץ קטלני בשוק במחוז תעז והאשמות הדדיות",
     "summary": "לפחות שלושים בני אדם נהרגו ונפצעו בפיצוץ בשוק אל-הדרה במחוז תעז. הרשויות המקומיות וכוחות הממשלה האשימו את החות'ים בשיגור טיל בליסטי, ואילו החות'ים טענו כי מטוסי קרב סעודיים הפציצו את המקום.",
     "axis": "מחוז תעז, תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T09:37:16+00:00",
     "last_update_at": "2026-11-07T18:45:33+00:00",
     "what_is_not_verified": "זהות הגורם שביצע את התקיפה או סוג החימוש שפגע בשוק אינם מאומתים עקב גרסאות סותרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-strikes-kill-least-27-yemens-sanaa-houthis-say",
       "published_at": "2026-11-07T18:45:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-dozens-killed-wounded-taiz-market-explosion",
       "published_at": "2026-11-07T14:59:10+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/yemen-30-dead-in-strikes-on-taiz-market",
       "published_at": "2026-11-07T09:37:16+00:00"
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
     "id": "YEMEN-11080048-05",
     "title": "דיווחים והכחשות בנוגע לפריסת חיילים סורים לתמיכה בסעודיה ובממשלת תימן",
     "summary": "גורמים רשמיים בתימן טענו כי אלפי לוחמים סורים מיועדים להיפרס בסעודיה ובתימן וחלקם כבר נפרסו בגבול. מנגד, מקור דיפלומטי סורי הכחיש כל כוונה לשלוח כוחות וציין כי שיתוף הפעולה הביטחוני מתמקד באימונים וייעוץ.",
     "axis": "הגבול הסעודי-תימני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T15:46:49+00:00",
     "last_update_at": "2026-11-07T18:30:23+00:00",
     "what_is_not_verified": "נוכחות פיזית של לוחמים סורים בשטח תימן או סעודיה שנויה במחלוקת מוחלטת ואינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
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
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11080048-06",
     "title": "תיאום בין ממשלת תימן לממשלת לבנון לבלימת מעורבות חזבאללה",
     "summary": "שרת החוץ של ממשלת תימן הודיעה כי ממשלתה תנקוט צעדים משותפים עם לבנון במטרה להפסיק את תמיכת אנשי חזבאללה בפעולות הצבאיות של החות'ים.",
     "axis": "הזירה המדינית-ביטחונית של תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-08T00:14:15+00:00",
     "last_update_at": "2026-11-08T00:14:15+00:00",
     "what_is_not_verified": "מהות הצעדים המעשיים שיינקטו לעצירת הסיוע של חזבאללה לחות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-and-lebanon-work-towards-halting-hezbollah-support-houthis",
       "published_at": "2026-11-08T00:14:15+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "אחריות סעודיה לתקיפות האוויריות שגרמו להרג אזרחים באזור בני חשיש ובכפר א-שריעה בצנעא",
    "מספר ההרוגים והפצועים המדויק בתקיפות באזור צנעא (נע בין 25 ל-33 הרוגים בדיווחים השונים)",
    "האחראי לפיצוץ בשוק אל-הדרה בתעז (טיל בליסטי חות'י לפי הממשלה לעומת תקיפה אווירית סעודית לפי החות'ים)",
    "דיווחים על הגעת אלפי לוחמים ומומחים מצבא סוריה לסעודיה ולתימן, שהוכחשו רשמית על ידי סוריה",
    "מידת הנזק הממשי שנגרם למתקני חברת ארמקו ולשדה התעופה בריאד בעקבות שיגורי החות'ים",
    "היקף ההישגים ומספר הנפגעים שנטען כי נגרמו במבצע שחר תימן של כוחות הממשלה"
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
     "actor": "תנועת אנצאר אללה (החות'ים)",
     "declared": [
      "הטלת משוואה של מצור תחת מצור והסלמה מול הסלמה מול סעודיה",
      "המשך פגיעה בריכוזי כוחות, קצינים ותשתיות בעומק שטח סעודיה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי וצבאי ישיר על ריאד כדי לכפות עליה הפסקת אש בתנאים נוחים",
      "ערעור הביטחון הפנימי בסעודיה ושיבוש תוכניות הפיתוח הכלכלי שלה"
     ],
     "forecast": [
      "המשך שיגורי כטב\"מים וטילים לעבר מתקני אנרגיה ונמלי תעופה בסעודיה בתגובה להפצצות בתימן"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "יירוט והשמדת איומים אוויריים וטילים המשוגרים לעבר שטח הממלכה",
      "תמיכה בממשלת תימן המוכרת בינלאומית מול המורדים"
     ],
     "inferred": [
      "שחיקת היכולות הצבאיות של החות'ים והרחקת האיום מגבולותיה הדרומיים של סעודיה",
      "גיוס בריתות ביטחוניות וכוחות חיצוניים כדי לחזק את המערך הצבאי בלי להסתבך בלחימה קרקעית רחבה"
     ],
     "forecast": [
      "המשך תקיפות מהאוויר נגד מטרות חות'יות בצנעא וברחבי תימן לצד הגברת מערכי ההגנה האווירית"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "השבת השליטה על כלל השטחים שנכבשו בידי החות'ים כולל הבירה צנעא במסגרת מבצע שחר תימן",
      "נקיטת צעדים משותפים עם לבנון להפסקת תמיכת חזבאללה בחות'ים"
     ],
     "inferred": [
      "ניצול ההסלמה בין סעודיה לחות'ים כדי לקבל סיוע צבאי זר ולהרחיב את אחיזתה הקרקעית",
      "החלשת הלגיטימציה של החות'ים על ידי הדגשת הפגיעה באזרחים ובמצור על תעז"
     ],
     "forecast": [
      "המשך מאמצים התקפיים מול מוקדי שליטה של החות'ים במקביל ללחץ דיפלומטי על מוקדי התמיכה האזוריים שלהם"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/7/yemeni-govt-forces-report-advances-as-houthis-say-deadly-strikes-hit-sanaa?traffic_source=rss",
     "accessed_at": "2026-11-08T00:48:04+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-denies-plans-send-troops-yemen-saudi-military-ties-deepen",
     "accessed_at": "2026-11-08T00:48:04+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/yemen-30-dead-in-strikes-on-taiz-market",
     "accessed_at": "2026-11-08T00:48:04+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-and-lebanon-work-towards-halting-hezbollah-support-houthis",
     "accessed_at": "2026-11-08T00:48:04+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-denies-plans-send-troops-yemen",
     "accessed_at": "2026-11-08T00:48:04+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155375",
     "accessed_at": "2026-11-08T00:48:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-07T06:33:07+00:00",
  "changes": {
   "YEMEN-11080048-01": {
    "kind": "possible",
    "prev": "מות עובד או\"ם במתקן מעצר חות'י בצנעא",
    "score": 0.633
   },
   "YEMEN-11080048-02": {
    "kind": "possible",
    "prev": "דיווח על סיוע צבאי סורי לכוחות הסעודיים והתימניים מול החות'ים",
    "score": 0.633
   },
   "YEMEN-11080048-03": {
    "kind": "new"
   },
   "YEMEN-11080048-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה קטלנית בשוק אל-חדארה במחוז תעז",
    "score": 1.0
   },
   "YEMEN-11080048-05": {
    "kind": "new"
   },
   "YEMEN-11080048-06": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-08T0040__iran-202611080040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-08T00:40:26+00:00",
   "window": {
    "from": "2026-11-07T00:40:26+00:00",
    "to": "2026-11-08T00:40:26+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611080040"
   },
   "summary": "העימות הצבאי בין איראן לארצות הברית מתרחב במרחב הימי והיבשתי סביב מצר הורמוז ומפרץ עומאן, תוך חילופי מהלומות הכוללים השבתת ספינות, פיצוצים באתרי חוף איראניים וסגירת מעברים. במקביל להחרפת המצור והאיומים בשיגור טילים לטווחים מוגדלים, מתנהלים ערוצי תיווך עקיפים באמצעות מדינות האזור בניסיון להגיע להסדרים סביב סוגיית הגרעין ועצירת המלחמה.",
   "fronts": [
    {
     "name": "מצר הורמוז ומפרץ עומאן",
     "status": "הסלמה צבאית הכוללת מצור ימי, פגיעה בכלי שיט, מוקשים ימיים והפעלת מערכות הגנה בחוף"
    },
    {
     "name": "החזית היבשתית והסנקציות",
     "status": "אכיפת סגר ומצור על מעברים יבשתיים וצירי סחר על ידי ארה\"ב ופקיסטן"
    },
    {
     "name": "הציר הדיפלומטי והגרעיני",
     "status": "מגעים בתיווך קטאר ושיחות אזוריות לצד הצעת פרסים אמריקניים בנושא תוכנית הגרעין"
    }
   ],
   "events": [
    {
     "id": "IRAN-11080040-01",
     "title": "פיצוצים ודיווחים על תקיפות בדרום איראן ובמצר הורמוז",
     "summary": "הדי פיצוצים נשמעו באי קשם ובערים ג'אסכ, סיריק ובנדר עבאס, לצד דיווחים על הפעלת מערכות הגנה אווירית ותקיפות אמריקניות לעבר מטרות באזור.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T19:38:44+00:00",
     "last_update_at": "2026-11-08T00:00:56+00:00",
     "what_is_not_verified": "אין אישור רשמי לגורם הפיצוצים ולמידת הנזק; זהות משגרי הטילים בקשם אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/8/iran-war-live-explosions-hit-qeshm-us-moves-to-block-land-supply-routes?traffic_source=rss",
       "published_at": "2026-11-08T00:00:56+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-reported-irans-qeshm-island-and-port-jask",
       "published_at": "2026-11-07T20:31:57+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21799721",
       "published_at": "2026-11-07T20:06:08+00:00"
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
       "name": "ג'אסכ, איראן",
       "lat": 25.6436,
       "lon": 57.7746
      },
      {
       "name": "בנדר עבאס, איראן",
       "lat": 27.1842,
       "lon": 56.2893
      }
     ]
    },
    {
     "id": "IRAN-11080040-02",
     "title": "פגיעה והשבתת ספינת משא במפרץ עומאן על ידי כוחות ארה\"ב",
     "summary": "כלי טיס של צבא ארה\"ב ירה חימוש מדויק לעבר ספינת משא שהפליגה תחת דגל סנט קיטס ונוויס לאחר שביקרה בנמל איראני וניסתה להפר את המצור הימי.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T20:46:40+00:00",
     "last_update_at": "2026-11-07T21:27:14+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_centcom",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-military-says-it-disabled-cargo-vessel-gulf-oman",
       "published_at": "2026-11-07T21:27:14+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_centcom",
       "url": "https://www.maariv.co.il/breaking-news/article-1385971",
       "published_at": "2026-11-07T20:46:40+00:00"
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
     "id": "IRAN-11080040-03",
     "title": "פגיעת מוקשים ימיים במכליות נפט באזור מצר הורמוז",
     "summary": "באיראן דווח כי שתי מכליות נפט נפגעו ממוקשים ימיים בקרבת מצר הורמוז.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T21:52:19+00:00",
     "last_update_at": "2026-11-07T21:52:19+00:00",
     "what_is_not_verified": "זהות המכליות, מידת הנזק ומי שהניח את המוקשים אינם מאומתים מעבר לדיווח האיראני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1385985",
       "published_at": "2026-11-07T21:52:19+00:00"
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
     "id": "IRAN-11080040-04",
     "title": "הקמת כוח משימה אמריקני וסגירת מעברים להרחבת המצור היבשתי על איראן",
     "summary": "פיקוד המרכז של ארה\"ב הכריז על הקמת כוח משימה לסיכול העברות נשק וציוד בגבולות היבשתיים ובים הכספי, כאשר פקיסטן פועלת לסגירת מעברי גבול עם איראן.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T13:38:11+00:00",
     "last_update_at": "2026-11-07T23:31:16+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49395",
       "published_at": "2026-11-07T23:31:16+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-military-says-it-disabled-cargo-vessel-gulf-oman",
       "published_at": "2026-11-07T21:27:14+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133241",
       "published_at": "2026-11-07T17:54:01+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/expanding-naval-blockade-us-military-looks-restrict-iranian-land-commerce",
       "published_at": "2026-11-07T13:46:45+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkgxuo3azl",
       "published_at": "2026-11-07T13:38:11+00:00"
      }
     ],
     "places": [
      {
       "name": "הים הכספי",
       "lat": 41.779,
       "lon": 50.5608
      }
     ]
    },
    {
     "id": "IRAN-11080040-05",
     "title": "איראן מכריזה על המשך סגירת הורמוז והסרת מגבלות טווח הטילים",
     "summary": "דוברים מטעם צבא איראן ומשמרות המהפכה הודיעו כי מצר הורמוז יישאר סגור עד להיענות לדרישותיהם וכי הוסרו המגבלות על טווחי הטילים הבליסטיים.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T19:17:55+00:00",
     "last_update_at": "2026-11-07T21:21:02+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_irna_fars",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-army-says-forces-stronger-start-war-hormuz-stay-closed",
       "published_at": "2026-11-07T21:21:02+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_irna_fars",
       "url": "https://www.iranintl.com/en/202611076051",
       "published_at": "2026-11-07T19:17:55+00:00"
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
     "id": "IRAN-11080040-06",
     "title": "מגעים דיפלומטיים ותיווך בינלאומי לסיום הלחימה והסדרי גרעין",
     "summary": "קטאר מקדמת מתווה להפסקת הלחימה ולביקור פקחי גרעין באתרים שהותקפו, במקביל למגעים עקיפים בהובלת הממשל האמריקני ושיחות של שר החוץ האיראני עם מקביליו באזור.",
     "axis": "דיפלומטיה אזורית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-07T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-07T07:00:04+00:00",
     "last_update_at": "2026-11-07T21:21:02+00:00",
     "what_is_not_verified": "קיומה והיתכנותה של פריצת דרך מעשית במו\"מ טרם אומתו באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-army-says-forces-stronger-start-war-hormuz-stay-closed",
       "published_at": "2026-11-07T21:21:02+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21799721",
       "published_at": "2026-11-07T20:06:08+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49382",
       "published_at": "2026-11-07T17:42:38+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94967",
       "published_at": "2026-11-07T15:26:16+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/07/strait-of-hormuz-qatar-plan-iran-nuclear-inspections",
       "published_at": "2026-11-07T07:00:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11080040-07",
     "title": "פרסום פרס כספי אמריקני על מידע הנוגע לתוכנית הגרעין האיראנית",
     "summary": "תוכנית תגמולים אמריקנית הציעה סכום של עד עשרים מיליון דולר וסיוע במעבר עבור מסירת מידע על כוח אדם וטכנולוגיות בתוכנית הגרעין של איראן.",
     "axis": "גרעין איראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-06T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-07T21:21:02+00:00",
     "last_update_at": "2026-11-07T21:21:02+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_d6df014b118c395d",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-army-says-forces-stronger-start-war-hormuz-stay-closed",
       "published_at": "2026-11-07T21:21:02+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "גורם הפיצוצים המדויק ומידת הנזק באי קשם, ג'אסכ, סיריק ובנדר עבאס",
    "זהות הגורם שפגע במכליות הנפט באמצעות מוקשים במצר הורמוז",
    "ההיתכנות של פריצת דרך ממשית במגעים הדיפלומטיים שמנהל סגן הנשיא האמריקני או קטאר"
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
      "המשך סגירת מצר הורמוז עד להיענות ארצות הברית לדרישותיה",
      "הסרת ההגבלות על טווח הטילים הבליסטיים ומוכנות למענה ללא מגבלות גאוגרפיות",
      "מימוש הזכות להגנה עצמית וקידום הסדרים ביטחוניים אזוריים ללא מעורבות מעצמות זרות"
     ],
     "inferred": [
      "יצירת לחץ כלכלי ואנרגטי עולמי כדי לכפות על ארצות הברית להפסיק את הלחימה",
      "שימור יכולות ההרתעה והגרעין חרף התקיפות הממוקדות והמצור"
     ],
     "forecast": [
      "איראן תמשיך לשבש את התנועה הימית במצר הורמוז כל עוד הלחץ הכלכלי והמבצעי נגדה יימשך"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת הגעה של איראן לנשק גרעיני",
      "הטלת מצור ימי והרחבתו לחסימת תנועת אמצעי לחימה וסחורות מוחרמות ביבשה ובים הכספי",
      "פגיעה מוגבלת במערכי ההגנה האווירית האיראניים שהופעלו נגד מטוסיה"
     ],
     "inferred": [
      "חניקת עורקי הייצוא וההכנסות של המשטר האיראני כדי לכפות ויתורים דיפלומטיים",
      "הימנעות מכניסה למערכה קרקעית רחבה ומינוף כוח המשימה לעצירת זרימת נשק"
     ],
     "forecast": [
      "ארה\"ב תמשיך להפעיל לחץ צבאי וכלכלי תוך בחינת אפשרויות למגעים עקיפים לצמצום העימות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/8/iran-war-live-explosions-hit-qeshm-us-moves-to-block-land-supply-routes?traffic_source=rss",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/expanding-naval-blockade-us-military-looks-restrict-iranian-land-commerce",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/07/strait-of-hormuz-qatar-plan-iran-nuclear-inspections",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611076051",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21799721",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1385985",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-army-says-forces-stronger-start-war-hormuz-stay-closed",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133241",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49382",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94967",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkgxuo3azl",
     "accessed_at": "2026-11-08T00:40:26+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-07T06:29:53+00:00",
  "changes": {
   "IRAN-11080040-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אמריקניות באי קשם באיראן",
    "score": 0.817
   },
   "IRAN-11080040-02": {
    "kind": "new"
   },
   "IRAN-11080040-03": {
    "kind": "new"
   },
   "IRAN-11080040-04": {
    "kind": "new"
   },
   "IRAN-11080040-05": {
    "kind": "possible",
    "prev": "הערכות מצב ודריכות מוגברת בצבא איראן",
    "score": 0.633
   },
   "IRAN-11080040-06": {
    "kind": "new"
   },
   "IRAN-11080040-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הצעת פרס כספי אמריקני עבור מידע על תוכנית הגרעין האיראנית",
    "score": 0.65
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
