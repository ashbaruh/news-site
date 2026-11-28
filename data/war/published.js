/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-28T0826__yemen-202611280826.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-28T08:26:38+00:00",
   "window": {
    "from": "2026-11-27T08:26:38+00:00",
    "to": "2026-11-28T08:26:38+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202611280826"
   },
   "summary": "העימות בתימן וסביבתה הסלים באופן חד עם חידוש חילופי המהלומות הישירות בין החות'ים לבין סעודיה, לצד התקדמות חות'ית לעבר עדן ואחיזה בקו החוף של באב אל-מנדב. במקביל לתקיפות חות'יות על תשתיות אנרגיה ושיגורים לעבר ריאד, הקואליציה תוקפת בצנעא וביעדים נוספים וכוחות ממשלת תימן מנהלים מערכה נרחבת במוקדים שונים. הזירה הימית שבה למוקד המתיחות עם אירוע השתלטות חמושים על ספינת משא בסמוך לחוף התימני.",
   "fronts": [
    {
     "name": "חזית סעודיה - חות'ים",
     "status": "הסלמה הכוללת שיגורי טילים וכטב\"מים לעבר ריאד וג'אזאן לצד תקיפות אוויריות סעודיות בצנעא ובמחוזות נוספים"
    },
    {
     "name": "פנים תימן (ממשלה מול חות'ים)",
     "status": "קרבות עצימים ומבצע צבאי נרחב של כוחות הממשלה, לצד התקדמות חות'ית לכיוון עדן ותקיפות במחוז תעז ולחג'"
    },
    {
     "name": "התווך הימי (הים האדום ובאב אל-מנדב)",
     "status": "מתיחות גוברת עקב שליטת החות'ים ברצועת החוף המערבית ודיווח על חטיפת ספינת משא"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11280826-01",
     "title": "יירוט טיל שיוט חות'י ששוגר לעבר ריאד",
     "summary": "מערכות ההגנה האווירית של סעודיה יירטו והשמידו טיל שיוט ששוגר על ידי הכוחות החות'יים לעבר הבירה ריאד.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T03:18:59+00:00",
     "last_update_at": "2026-11-28T07:58:45+00:00",
     "what_is_not_verified": "האם נגרם נזק משני כתוצאה משברי היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_63aa6ce91ccbcbd0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-683",
       "published_at": "2026-11-28T07:58:45+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_63aa6ce91ccbcbd0",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-air-defences-destroy-houthi-cruise-missile-over-riyadh",
       "published_at": "2026-11-28T03:55:53+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_63aa6ce91ccbcbd0",
       "url": "https://www.sabanew.net/viewstory/156641",
       "published_at": "2026-11-28T03:18:59+00:00"
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
     "id": "YEMEN-11280826-02",
     "title": "יירוט כלי טיס בלתי מאויש ששוגר לעבר ריאד",
     "summary": "הקואליציה בראשות סעודיה יירטה והשמידה כלי טיס בלתי מאויש ששיגרו החות'ים בכיוון ריאד.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T13:14:04+00:00",
     "last_update_at": "2026-11-27T16:46:57+00:00",
     "what_is_not_verified": "דגם כלי הטיס ומיקום היירוט המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_d13fb558324231bd",
       "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
       "published_at": "2026-11-27T16:46:57+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_d13fb558324231bd",
       "url": "https://www.sabanew.net/viewstory/156613",
       "published_at": "2026-11-27T13:14:04+00:00"
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
     "id": "YEMEN-11280826-03",
     "title": "מתקפה חות'ית על בית זיקוק בג'אזאן והשבתתו",
     "summary": "תקיפה שביצעו החות'ים לעבר מתקן נפט בג'אזאן גרמה לשריפה, למותו של עובד זר ולפציעת אחרים, והובילה לסגירה זמנית של האתר.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:29:58+00:00",
     "last_update_at": "2026-11-27T16:49:23+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקני הזיקוק",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/kuwait-summons-iran-ambassador-saudi-arabia-strikes-sanaa",
       "published_at": "2026-11-27T16:49:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
       "published_at": "2026-11-27T16:46:57+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
       "published_at": "2026-11-27T07:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'אזאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      }
     ]
    },
    {
     "id": "YEMEN-11280826-04",
     "title": "תקיפות אוויריות של הקואליציה בצנעא ובמחוז אל-בידא",
     "summary": "מטוסי הקואליציה ביצעו תקיפות אוויריות נגד מטרות בבירה צנעא ופגעו ברשתות תקשורת במספר נפות במחוז אל-בידא.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:29:58+00:00",
     "last_update_at": "2026-11-28T03:55:53+00:00",
     "what_is_not_verified": "מספר הנפגעים ומידת הנזק לתשתיות",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-air-defences-destroy-houthi-cruise-missile-over-riyadh",
       "published_at": "2026-11-28T03:55:53+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-civil-defence-says-danger-has-passed-eastern-province-al-kharj",
       "published_at": "2026-11-28T00:24:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/kuwait-summons-iran-ambassador-saudi-arabia-strikes-sanaa",
       "published_at": "2026-11-27T16:49:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
       "published_at": "2026-11-27T07:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "אל-בידא, תימן",
       "lat": 13.9881,
       "lon": 45.5729
      }
     ]
    },
    {
     "id": "YEMEN-11280826-05",
     "title": "מבצע 'שחר תימן' של כוחות הממשלה נגד יעדים חות'יים",
     "summary": "דובר כוחות הממשלה בתימן דיווח על ביצוע מאות תקיפות ארטילריה, גיחות אוויר ושיגורי רקטות, שבהן נפגעו או נהרגו עשרות לוחמים ומפקדים חות'ים ונהרס ציוד צבאי רב.",
     "axis": "פנים תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-27T16:48:37+00:00",
     "last_update_at": "2026-11-28T07:58:45+00:00",
     "what_is_not_verified": "אמיתות מספרי הנפגעים והכלים שהושמדו, שנמסרו מצד אחד בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_6c5fc9020f385446",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-683",
       "published_at": "2026-11-28T07:58:45+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_6c5fc9020f385446",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-forces-claim-121-houthi-fighters-killed-726-attacks",
       "published_at": "2026-11-28T02:26:50+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6c5fc9020f385446",
       "url": "https://www.sabanew.net/viewstory/156619",
       "published_at": "2026-11-27T16:48:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11280826-06",
     "title": "תקיפות והפגזות חות'יות באזור תעז",
     "summary": "התקפות באמצעות כטב\"מים, ירי רקטות וצלפים פגעו באזורי מגורים במחוז תעז, וגרמו למותם של אזרחים ולפציעת פעוטה.",
     "axis": "פנים תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T14:16:39+00:00",
     "last_update_at": "2026-11-28T07:58:45+00:00",
     "what_is_not_verified": "זהות האחראים המדויקת למתקפה הספציפית בעיר א-תורבה, נוכח דיווחים סותרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_426d8ceef6f3b196",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-683",
       "published_at": "2026-11-28T07:58:45+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_426d8ceef6f3b196",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-attacks-kill-three-civilians-and-wound-three-others-taiz-report",
       "published_at": "2026-11-28T03:29:15+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_426d8ceef6f3b196",
       "url": "https://www.sabanew.net/viewstory/156632",
       "published_at": "2026-11-27T21:57:28+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_936e151d572ca5b0",
       "url": "https://www.sabanew.net/viewstory/156615",
       "published_at": "2026-11-27T14:16:39+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "א-תורבה, תימן",
       "lat": 13.2076,
       "lon": 44.1177
      }
     ]
    },
    {
     "id": "YEMEN-11280826-07",
     "title": "דיווח חות'י על פגיעה קטלנית של חיל האוויר הסעודי בתעז",
     "summary": "כלי תקשורת המזוהים עם החות'ים טענו כי גיחה של מטוסי קרב סעודיים על מבנה מגורים בא-תורבה הביאה למותם של אזרחים רבים, בהם ילדים, וכן הותקפו מאגרי דלק בצעדָה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T16:46:57+00:00",
     "last_update_at": "2026-11-27T16:46:57+00:00",
     "what_is_not_verified": "האם התקיפה בא-תורבה בוצעה על ידי מטוסי סעודיה או שמדובר בירי חות'י",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-kills-11-yemens-taiz",
       "published_at": "2026-11-27T16:46:57+00:00"
      }
     ],
     "places": [
      {
       "name": "א-תורבה, תימן",
       "lat": 13.2076,
       "lon": 44.1177
      },
      {
       "name": "צעדה, תימן",
       "lat": 16.9409,
       "lon": 43.763
      }
     ]
    },
    {
     "id": "YEMEN-11280826-08",
     "title": "השתלטות חמושים על אוניית משא סמוך לחופי תימן",
     "summary": "חמושים ביצעו השתלטות על ספינת משא בעת ששטה בקרבת חופי תימן.",
     "axis": "הים האדום ומצר באב אל-מנדב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-28T07:57:23+00:00",
     "last_update_at": "2026-11-28T07:57:23+00:00",
     "what_is_not_verified": "זהות החמושים, שמה של האונייה ומצבו של הצוות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1393005",
       "published_at": "2026-11-28T07:57:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11280826-09",
     "title": "אשרור הסכם ההגנה המשולש בין טורקיה, סעודיה ופקיסטן",
     "summary": "טורקיה השלימה את אשרור ברית ההגנה המשותפת שנחתמה במכה, המאפשרת מתן סיוע צבאי לריאד בעקבות הישנות התקיפות החות'יות.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T08:58:04+00:00",
     "last_update_at": "2026-11-28T07:58:45+00:00",
     "what_is_not_verified": "מועד פריסת כוחות צבאיים טורקיים בסעודיה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-683",
       "published_at": "2026-11-28T07:58:45+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/erdogan-completes-turkeys-ratification-mecca-pact",
       "published_at": "2026-11-27T08:58:04+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "זהות האחראים לפגיעה הקטלנית בבניין מגורים בעיר א-תורבה (טענות סותרות בין הצדדים)",
    "מספר הנפגעים והאבדות המדויק במבצע 'שחר תימן'",
    "פרטי ספינת המשא שנחטפה וזהות החמושים שעלו עליה"
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
     "value": 3.3094,
     "unit": "ILS",
     "change_pct": -0.54,
     "source_id": "src_ecb",
     "as_of": "2026-11-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה במתקנים חיוניים ובבסיסים בשטח סעודיה בתגובה להפצצות הקואליציה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי על סעודיה דרך שיתוק מתקני אנרגיה כדי לכפות הפסקת תקיפות",
      "הרחבת השליטה הטריטוריאלית לעבר עדן וביסוס אחיזה במצר באב אל-מנדב"
     ],
     "forecast": [
      "המשך ניסיונות שיגור טילים וכטב\"מים לטווחים ארוכים והגברת הפעילות ההתקפית בדרום תימן"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט איומים בליסטיים ורחפנים",
      "תמיכה במאמצי ההגנה המשותפים במסגרת ברית מכה"
     ],
     "inferred": [
      "גביית מחיר מהחות'ים באמצעות פגיעה בתשתיות תקשורת ומטרות שלטוניות בצנעא ובמעוזיהם",
      "חיזוק קשרים ביטחוניים עם שותפות אזוריות להרתעת האיום החות'י"
     ],
     "forecast": [
      "המשך יירוטים והגברת גיחות הפצצה ממוקדות במוקדי שליטה חות'יים"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "פגיעה ביכולות הצבאיות של החות'ים וסיכול פעולותיהם באמצעות מבצע 'שחר תימן'",
      "גינוי תקיפות של ריכוזי אוכלוסייה אזרחית במחוזות תעז ולחג'"
     ],
     "inferred": [
      "בלימת התקדמות החות'ים במרחב הדרום והגנה על המובלעת הזמנית בעדן"
     ],
     "forecast": [
      "המשך פעולות יבשתיות וארטילריות במאמץ לבלום את לחץ הכוחות החות'יים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1393005",
     "accessed_at": "2026-11-28T08:26:38+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-683",
     "accessed_at": "2026-11-28T08:26:38+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/erdogan-completes-turkeys-ratification-mecca-pact",
     "accessed_at": "2026-11-28T08:26:38+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156615",
     "accessed_at": "2026-11-28T08:26:38+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-27T19:40:29+00:00",
  "changes": {
   "YEMEN-11280826-01": {
    "kind": "new"
   },
   "YEMEN-11280826-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "יירוט כלי טיס בלתי מאויש מעל ריאד",
    "score": 1.0
   },
   "YEMEN-11280826-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפה על מתקן זיקוק נפט בסעודיה",
    "score": 1.0
   },
   "YEMEN-11280826-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות אוויריות של סעודיה בתימן",
    "score": 1.0
   },
   "YEMEN-11280826-05": {
    "kind": "new"
   },
   "YEMEN-11280826-06": {
    "kind": "new"
   },
   "YEMEN-11280826-07": {
    "kind": "new"
   },
   "YEMEN-11280826-08": {
    "kind": "new"
   },
   "YEMEN-11280826-09": {
    "kind": "possible",
    "prev": "פגישת ברית הסכמת מכה באיסלאמבאד",
    "score": 0.4
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-28T0040__iran-202611280040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-28T00:40:19+00:00",
   "window": {
    "from": "2026-11-27T00:40:19+00:00",
    "to": "2026-11-28T00:40:19+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611280040"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתנהל בחזית ימית מתוחה הכוללת אכיפת מצור ימי אמריקני, תקיפת כלי שיט מפרים ומנגד איומים איראניים ופגיעה במכליות נפט במימי מצר הורמוז ומפרץ עומאן. במקביל, נרשמת מתיחות אזורית סביב תקריות חמושות כמו פגיעת כטב\"ם בכווית, לצד לחץ כלכלי חסר תקדים על איראן עקב סנקציות וקריסת המטבע המקומי.",
   "fronts": [
    {
     "name": "החזית הימית במפרץ ובמצר הורמוז",
     "status": "פעילה ומתוחה מאוד"
    },
    {
     "name": "הזירה האזורית והמפרציפית",
     "status": "פעילה עם השלכות ביטחוניות"
    }
   ],
   "events": [
    {
     "id": "IRAN-11280040-01",
     "title": "פיצוץ מכליות נפט כתוצאה מפגיעה במוקשים ימיים",
     "summary": "משמרות המהפכה של איראן דיווחו כי שתי מכליות נפט התפוצצו ועלו באש לאחר שפגעו במוקשים ימיים סמוך לנמל ח'סב ובחלקו המזרחי של מצר הורמוז.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T12:44:06+00:00",
     "last_update_at": "2026-11-28T00:06:49+00:00",
     "what_is_not_verified": "האם המכליות אכן נפגעו ממוקשים ימיים והנסיבות המדויקות של האירוע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_b080513b92f3e32e",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-two-oil-tankers-catch-fire-after-hitting-naval-mines",
       "published_at": "2026-11-28T00:06:49+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_92f20615187d127e",
       "url": "https://en.irna.ir/news/86333992/Oil-tanker-hits-mine-in-south-of-Strait-of-Hormuz",
       "published_at": "2026-11-27T12:44:06+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל ח'סב, עומאן",
       "lat": 26.2043,
       "lon": 56.2537
      },
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      },
      {
       "name": "אי ג'אנאם, עומאן",
       "lat": 26.3537,
       "lon": 56.3513
      }
     ]
    },
    {
     "id": "IRAN-11280040-02",
     "title": "תקיפה והשבתה של אוניית סוחר על ידי צבא ארה\"ב",
     "summary": "כוחות צבא ארה\"ב תקפו והשביתו את מערכת ההנעה של אוניית משא הנושאת את דגל פלאו לאחר שיצאה מנמל בנדר עבאס והפרה את המצור הימי.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T17:02:01+00:00",
     "last_update_at": "2026-11-27T23:55:16+00:00",
     "what_is_not_verified": "לא מאומתים פרטים מעבר לטענות הצבא האמריקני על נסיבות הפרת המצור.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_bef6f206a44200fc",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/27/us-disables-ship-attempting-to-breach-iran-blockade?traffic_source=rss",
       "published_at": "2026-11-27T23:55:16+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_b4c2db9b3db089e3",
       "url": "https://www.aljazeera.com/news/2026/11/27/us-military-says-it-disabled-merchant-ship-trying-to-breach-iran-blockade?traffic_source=rss",
       "published_at": "2026-11-27T22:22:02+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_711eaef35ab6e181",
       "url": "https://www.al-monitor.com/originals/2026/11/us-military-fires-ship-violating-iran-blockade",
       "published_at": "2026-11-27T21:30:26+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_b295a16e96fd15f7",
       "url": "https://www.iranintl.com/en/202611274132",
       "published_at": "2026-11-27T19:49:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_35b5e69745bea925",
       "url": "https://www.al-monitor.com/originals/2026/11/us-disables-ship-trying-leave-iran-tehran-vows-confront-blockade",
       "published_at": "2026-11-27T18:46:30+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_bef6f206a44200fc",
       "url": "https://t.me/alexmehacarmel/49967",
       "published_at": "2026-11-27T18:36:21+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_15b13b773cfff107",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/centcom-says-it-disabled-commercial-ship-trying-run-iran-blockade",
       "published_at": "2026-11-27T17:38:26+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_20783aedfa9c2c87",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21947352",
       "published_at": "2026-11-27T17:26:38+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_90c471befda442f6",
       "url": "https://www.maariv.co.il/breaking-news/article-1392912",
       "published_at": "2026-11-27T17:12:21+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_9403bad4f796c266",
       "url": "https://www.ynet.co.il/news/article/skvdvnvkqg",
       "published_at": "2026-11-27T17:08:45+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_bef6f206a44200fc",
       "url": "https://t.me/abualiexpress/134354",
       "published_at": "2026-11-27T17:02:01+00:00"
      }
     ],
     "places": [
      {
       "name": "בנדר עבאס, איראן",
       "lat": 27.1842,
       "lon": 56.2893
      },
      {
       "name": "מפרץ עומאן",
       "lat": 24.2138,
       "lon": 58.9846
      }
     ]
    },
    {
     "id": "IRAN-11280040-03",
     "title": "התקפה קטלנית בכווית באמצעות כטב\"ם",
     "summary": "מתקפת כטב\"ם בכווית הביאה למותם של שני אזרחים איטלקים ולפציעת אחרים, כאשר שר החוץ של איטליה הצהיר כי הכלי יוצר באיראן.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T23:47:40+00:00",
     "last_update_at": "2026-11-28T00:00:00+00:00",
     "what_is_not_verified": "איראן מכחישה את מעורבותה וטענה שהכלי לא שוגר משטחה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/28/iran-war-live-italy-says-drone-in-deadly-kuwait-attack-was-made-in-iran?traffic_source=rss",
       "published_at": "2026-11-28T00:00:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-killed-two-italians-kuwait-was-iranian-made-says-italys-foreign",
       "published_at": "2026-11-27T23:47:40+00:00"
      }
     ],
     "places": [
      {
       "name": "כווית",
       "lat": 29.3797,
       "lon": 47.9734
      }
     ]
    }
   ],
   "not_verified": [
    "האם המכליות במצר הורמוז אכן נפגעו ממוקשים ימיים כגרסת משמרות המהפכה או מסיבה אחרת",
    "האחריותשיר הלשכה האיראנית לשיגור הכטב\"ם שהותקף בכווית",
    "היקף הפעילות הצבאית המדויקת באתרים שצוינו על ידי ארה\"ב"
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
     "value": 3.3094,
     "unit": "ILS",
     "change_pct": -0.54,
     "source_id": "src_ecb",
     "as_of": "2026-11-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "שסר המצור הימי על נמליה",
      "סגירת מצר הורמוז ומניעת מעבר ספינות תחת מצור"
     ],
     "inferred": [
      "ניסיון לשמור על נתיבי ייצוא הנפט והכנסות למשטר למרות הסנקציות",
      "הפגנת כוח ימי דרך שלוחותיה וכוחות משמרות המהפכה"
     ],
     "forecast": [
      "המרת פעילות ימית בעימותים ישירים נוספים בתוואי המים",
      "העמקת תחושת המצוקה הכלכלית המקומית עקב סגירת נתיבי המסחר"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "אכיפת מצצור ימי מלא על נמלי איראן",
      "מניעת תנועת כלי שיט שמנסים להפר את הסנקציות"
     ],
     "inferred": [
      "חניקת הכלכלה האיראנית ובידודה הבין-לאומי",
      "הרחקת איומים ימיים מנתיבי המסחר המרכזיים במפרץ"
     ],
     "forecast": [
      "המשך תקיפת כלי שיט מפרים",
      "הגברת הלחץ הדיפלומטי והכלכלי על טהראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/28/iran-war-live-italy-says-drone-in-deadly-kuwait-attack-was-made-in-iran?traffic_source=rss",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/us-disables-ship-trying-leave-iran-tehran-vows-confront-blockade",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611274132",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86333992/Oil-tanker-hits-mine-in-south-of-Strait-of-Hormuz",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21947352",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1392912",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-killed-two-italians-kuwait-was-iranian-made-says-italys-foreign",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134354",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49967",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/skvdvnvkqg",
     "accessed_at": "2026-11-28T00:40:19+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-27T08:59:23+00:00",
  "changes": {
   "IRAN-11280040-01": {
    "kind": "new"
   },
   "IRAN-11280040-02": {
    "kind": "new"
   },
   "IRAN-11280040-03": {
    "kind": "possible",
    "prev": "תקיפת כטב\"ם בכווית והריגת טכנאים איטלקים",
    "score": 0.467
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-28T0821__ukraine-202611280821.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-28T08:21:21+00:00",
   "window": {
    "from": "2026-11-27T08:21:21+00:00",
    "to": "2026-11-28T08:21:21+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611280821"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בקרבות קרקעיים עזים בעיקר בגזרות קוסטיאנטיניבקה וחוליאיפולה, לצד חילופי מהלומות אוויריות נרחבים. רוסיה ממשיכה לתקוף תשתיות אזרחיות, אנרגיה וערים באוקראינה באמצעות מאות כטב\"מים וטילים, בעוד שאוקראינה מגיבה בתקיפות עומק נגד מתקני אנרגיה ויעדים בתוך רוסיה. במקביל, מתנהלים מגעים מדיניים וחילופי אוכלוסייה מוגבלים, לצד מתיחות גוברת בין קייב לוושינגטון סביב המגעים עם מוסקבה.",
   "fronts": [
    {
     "name": "ציר קוסטיאנטיניבקה (דונצק)",
     "status": "קרבות עזים ולחימה אינטנסיבית"
    },
    {
     "name": "ציר חוליאיפולה (זפוריז'יה)",
     "status": "לחימה פעילה ועימותים קרקעיים מרובים"
    },
    {
     "name": "עורף אוקראינה",
     "status": "ספיגת מתקפות כטב\"מים וטילים רוסיות על יעדי אנרגיה ומבנים עירוניים"
    },
    {
     "name": "עורף רוסיה",
     "status": "יעד לתקיפות כטב\"מים אוקראיניות ממושכות נגד מתקני דלק ותחבורה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11280821-01",
     "title": "תקיפת טילים רוסית בחרקיב",
     "summary": "כוחות רוסיים שיגרו מתקפת טילים על מחוז אוסנוביאנסקי בעיר חרקיב בבוקר 28 בנובמבר.",
     "axis": "חרקיב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T08:20:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T08:20:00+00:00",
     "last_update_at": "2026-11-28T08:20:00+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק בתקיפה זו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4189500-russian-forces-launch-missile-strike-on-kharkiv.html",
       "published_at": "2026-11-28T08:20:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקיב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-02",
     "title": "סיום פעולות החילוץ בניז'ין לאחר תקיפה קטלנית",
     "summary": "פעולות החילוץ במפעל בניז'ין הסתיימו; מניין ההרוגים עלה לשבעה ונוספו שבעה פצועים. אדם אחד חולץ מההריסות.",
     "axis": "צ'רניהיב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T07:50:00+00:00",
     "last_update_at": "2026-11-28T07:50:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/28/8065082/",
       "published_at": "2026-11-28T07:50:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניז'ין, אוקראינה",
       "lat": 51.0465,
       "lon": 31.8806
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-03",
     "title": "פגיעת כטב\"ם אוקראיני באוטובוס במחוז בריאנסק",
     "summary": "תשעה בני אדם נפצעו כתוצאה מפגיעת כטב\"ם מתאבד של צבא אוקראינה באוטובוס עובדים במחוז בריאנסק ברוסיה.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T07:49:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T07:49:10+00:00",
     "last_update_at": "2026-11-28T07:49:10+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/emergencies/2226349",
       "published_at": "2026-11-28T07:49:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-04",
     "title": "טענה רוסית ליירוט מאסיבי של כטב\"מים אוקראיניים",
     "summary": "ברוסיה טענו כי יורטו 1,246 כלי טיס בלתי מאוישים אוקראיניים במהלך שעות הלילה.",
     "axis": "עורף רוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T07:30:11+00:00",
     "last_update_at": "2026-11-28T07:30:11+00:00",
     "what_is_not_verified": "אמיתות המספר החריג של כלי הטיס שיורטו לכאורה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1393000",
       "published_at": "2026-11-28T07:30:11+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-05",
     "title": "הסרת איסור כניסה להונגריה למפקד אוקראיני",
     "summary": "הונגריה הסירה ממאגרי ההגירה את איסור הכניסה שהוטל על המפקד האוקראיני רוברט ברובדי ('מדיאר').",
     "axis": "דיפלומטיה ויחסי חוץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T07:29:00+00:00",
     "last_update_at": "2026-11-28T07:29:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_magyar_hang",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/28/8065081/",
       "published_at": "2026-11-28T07:29:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-06",
     "title": "התנגשויות קרביות בחזית קוסיאנטיניבקה וחוליאיפולה",
     "summary": "נרשמו 146 עימותים קרביים לאורך החזית ב-27 בנובמבר, כאשר הקרבות הקשים ביותר התנהלו בגזרות אלו.",
     "axis": "חזית המזרח והדרום",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-28T07:21:00+00:00",
     "last_update_at": "2026-11-28T07:21:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189484-war-update-146-clashes-over-past-day-heaviest-fighting-on-kostiantynivka-huliaipole-axes.html",
       "published_at": "2026-11-28T07:21:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קוסטיאנטיניבקה, אוקראינה",
       "lat": 48.5349,
       "lon": 37.6924
      },
      {
       "name": "חוליאיפולה, אוקראינה",
       "lat": 47.6655,
       "lon": 36.2657
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-07",
     "title": "נפגעים בתקיפות רוסיות במחוז דונצק",
     "summary": "ארבעה בני אדם נהרגו ושמונה נפצעו בתקיפות רוסיות בסלוביאנסק, מלוטרניבקה וקרמטורסק.",
     "axis": "דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T07:07:00+00:00",
     "last_update_at": "2026-11-28T07:07:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/28/8065080/",
       "published_at": "2026-11-28T07:07:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      },
      {
       "name": "קרמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      },
      {
       "name": "מלוטרניבקה, אוקראינה",
       "lat": 48.6676,
       "lon": 37.5135
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-08",
     "title": "מתקפת כטב\"מים רוסית נרחבת על אוקראינה",
     "summary": "רוסיה שיגרה 162 כטב\"מים. ההגנה האווירית יירטה 141 מהם. פגיעות נרשמו ב-13 אתרים ונפילות שברי יירוט בעוד 7 מקומות.",
     "axis": "העורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-28T06:29:00+00:00",
     "last_update_at": "2026-11-28T07:07:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/28/8065080/",
       "published_at": "2026-11-28T07:07:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189482-air-defenses-down-141-of-162-russian-drones-launched-against-ukraine-overnight.html",
       "published_at": "2026-11-28T07:00:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/28/8065077/",
       "published_at": "2026-11-28T06:29:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-09",
     "title": "תקיפה רוסית על תחנת כוח במחוז קייב",
     "summary": "כוחות רוסיים תקפו את תחנת המשנה החשמלית זארצ'יה בעיר בילה צרקווה במחוז קייב.",
     "axis": "קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T06:44:02+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T06:44:02+00:00",
     "last_update_at": "2026-11-28T06:44:02+00:00",
     "what_is_not_verified": "חומרת הנזק שנגרם לתחנת הכוח בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2226341",
       "published_at": "2026-11-28T06:44:02+00:00"
      }
     ],
     "places": [
      {
       "name": "בילה צרקווה, אוקראינה",
       "lat": 49.797,
       "lon": 30.1158
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-10",
     "title": "פגיעות ואבידות במחוז זפוריז'יה",
     "summary": "הכוחות הרוסיים ביצעו 701 תקיפות נגד 49 יישובים במחוז, וכתוצאה מכך אדם אחד נהרג וחמישה נפצעו.",
     "axis": "זפוריז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T03:19:04+00:00",
     "last_update_at": "2026-11-28T06:24:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4189470-russians-launch-701-attacks-on-zaporizhzhia-region-in-past-day-one-killed-five-injured.html",
       "published_at": "2026-11-28T06:24:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/28/ukraine-war-briefing-zelenskyy-criticises-trump-for-calling-putin-his-friend-kyiv-deploys-new-laser-weapon",
       "published_at": "2026-11-28T03:19:04+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-11",
     "title": "תקיפת כטב\"מים אוקראינית באופה, בשקורטוסטן",
     "summary": "כוחות אוקראיניים ביצעו תקיפה באמצעות כטב\"מים לעבר העיר אופה ברפובליקה הבשקירית.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T04:48:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T04:48:39+00:00",
     "last_update_at": "2026-11-28T04:48:39+00:00",
     "what_is_not_verified": "תוצאות התקיפה והמטרות שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49973",
       "published_at": "2026-11-28T04:48:39+00:00"
      }
     ],
     "places": [
      {
       "name": "אופה, רוסיה",
       "lat": 54.7261,
       "lon": 55.9475
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-12",
     "title": "שריפה סמוך לבית זיקוק במחוז רוסטוב",
     "summary": "מתקפת כטב\"מים אוקראינית פגעה באזור הסמוך לבית הזיקוק בנובושאחטינסק וגרמה לשריפה במקום.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T04:06:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T04:06:01+00:00",
     "last_update_at": "2026-11-28T04:06:01+00:00",
     "what_is_not_verified": "מידת הנזק למתקני הזיקוק עצמם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/fire-reported-near-oil-refinery-in-russias-rostov-oblast-amid-ukrainian-drone-attack/",
       "published_at": "2026-11-28T04:06:01+00:00"
      }
     ],
     "places": [
      {
       "name": "נובושאחטינסק, רוסיה",
       "lat": 47.7963,
       "lon": 39.8936
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-13",
     "title": "יירוט מבצעי ראשון באמצעות נשק לייזר אוקראיני",
     "summary": "מערכת לייזר אוקראינית ניסיונית בשם 'בליסק' יירטה בהצלחה כטב\"ם סילוני רוסי.",
     "axis": "לוחמה טכנולוגית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T03:19:04+00:00",
     "last_update_at": "2026-11-28T03:19:04+00:00",
     "what_is_not_verified": "מיקום היירוט והיכולת לפריסה מבצעית רחבה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_brave1",
       "url": "https://www.theguardian.com/world/2026/nov/28/ukraine-war-briefing-zelenskyy-criticises-trump-for-calling-putin-his-friend-kyiv-deploys-new-laser-weapon",
       "published_at": "2026-11-28T03:19:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-14",
     "title": "תקיפה אוקראינית על מתקן אנרגיה בסמרה",
     "summary": "כוחות אוקראיניים פגעו במתקן אנרגיה במחוז סמרה ברוסיה.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-28T00:11:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-28T00:11:23+00:00",
     "last_update_at": "2026-11-28T00:11:23+00:00",
     "what_is_not_verified": "סוג המתקן המדויק ורמת הפגיעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49970",
       "published_at": "2026-11-28T00:11:23+00:00"
      }
     ],
     "places": [
      {
       "name": "סמרה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-15",
     "title": "פגיעה במוסדות חינוך בקרמנצ'וק",
     "summary": "מתקפת כטב\"מים רוסית פגעה בשני מוסדות חינוך במרכז קרמנצ'וק ופצעה ארבעה בני אדם, בהם שלושה ילדים.",
     "axis": "פולטבה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T22:13:00+00:00",
     "last_update_at": "2026-11-27T22:13:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-drone-attack-on-kremenchuk-injures-4-including-3-children/",
       "published_at": "2026-11-27T22:13:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קרמנצ'וק, אוקראינה",
       "lat": 49.0929,
       "lon": 33.4308
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-16",
     "title": "ריינמטאל שוקלת לבטל הקמת מפעל תחמושת באוקראינה",
     "summary": "מנכ\"ל החברה הגרמנית ריינמטאל ציין כי החברה עלולה לסגת מתוכניתה עקב עיכובים ומכשולים בירוקרטיים.",
     "axis": "סיוע ותעשיות ביטחוניות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T19:24:47+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T19:24:47+00:00",
     "last_update_at": "2026-11-27T19:24:47+00:00",
     "what_is_not_verified": "ההחלטה הסופית של החברה בעניין הפרויקט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/rheinmetall-may-drop-plans-to-build-ammunition-plant-in-ukraine-ceo-says/",
       "published_at": "2026-11-27T19:24:47+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-17",
     "title": "ביקורת זלנסקי על התבטאויות טראמפ כלפי פוטין",
     "summary": "וולודימיר זלנסקי מתח ביקורת על נשיא ארה\"ב דונלד טראמפ שכינה את פוטין 'חבר', והשווה את מנהיג רוסיה לאדולף היטלר.",
     "axis": "דיפלומטיה ויחסי חוץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T10:36:58+00:00",
     "last_update_at": "2026-11-28T03:19:04+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_bbc",
       "url": "https://www.theguardian.com/world/2026/nov/28/ukraine-war-briefing-zelenskyy-criticises-trump-for-calling-putin-his-friend-kyiv-deploys-new-laser-weapon",
       "published_at": "2026-11-28T03:19:04+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_bbc",
       "url": "https://www.bbc.co.uk/news/articles/c820q9wgrpyyo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-27T18:00:40+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_bbc",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21946118",
       "published_at": "2026-11-27T10:36:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-18",
     "title": "קידום חקיקה ברוסיה להחמרת ענישה על תיעוד תקיפות",
     "summary": "סנאטורים ברוסיה הגישו הצעת חוק לקביעת עד חמש שנות מאסר בגין הפצת תמונות וסרטונים של תוצאות פגיעות אוקראיניות.",
     "axis": "פנים רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-27T15:35:14+00:00",
     "last_update_at": "2026-11-27T15:35:14+00:00",
     "what_is_not_verified": "מועד אישור החוק בדומה הרוסית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/11/27/no-reports-no-strikes-russia-s-pro-war-bloggers-slam-proposed-prison-sentences-for-sharing-photos-and-videos-of-ukrainian-attacks",
       "published_at": "2026-11-27T15:35:14+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-11280821-19",
     "title": "טענה להקפאת הסיוע הצבאי מצפון קוריאה לרוסיה",
     "summary": "המודיעין הצבאי האוקראיני דיווח כי צפון קוריאה עצרה משלוחי טילים, תחמושת ושיגור כוחות נוספים עקב מחלוקת דיפלומטית.",
     "axis": "יחסים צבאיים בין-לאומיים",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T15:09:05+00:00",
     "last_update_at": "2026-11-27T15:09:05+00:00",
     "what_is_not_verified": "אישור רשמי ממוסקבה או פיונגיאנג על הקפאת היחסים הצבאיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_hur",
       "url": "https://meduza.io/en/feature/2026/11/27/ukrainian-intelligence-says-north-korea-has-stopped-sending-troops-and-missiles-to-russia",
       "published_at": "2026-11-27T15:09:05+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11280821-20",
     "title": "ביצוע חילופי אזרחים בין רוסיה לאוקראינה",
     "summary": "23 אזרחים הוחזרו לאוקראינה ו-20 אזרחים הועברו לרוסיה בחסות הצלב האדום במעבר הגבול נוביה הוטה בבלארוס.",
     "axis": "הומניטרי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T12:50:12+00:00",
     "last_update_at": "2026-11-27T12:50:12+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_belta",
       "url": "https://t.me/alexmehacarmel/49960",
       "published_at": "2026-11-27T12:50:12+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת רוסיה ליירוט של 1,246 כטב\"מים אוקראיניים בלילה אחד",
    "טענת המודיעין האוקראיני לפיה צפון קוריאה השעתה את משלוחי הטילים והכוחות לרוסיה",
    "פרטי ומיקום היירוט בלייזר של כטב\"ם סילוני על ידי מערכת בליסק האוקראינית",
    "היקף הנזק המדויק שנגרם לבית הזיקוק בנובושאחטינסק ולתחנת הכוח בסמרה"
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
     "value": 1.0957,
     "unit": "USD",
     "change_pct": -0.16,
     "source_id": "src_ecb",
     "as_of": "2026-11-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "בלימת התוקפנות הרוסית ויירוט מתקפות אוויריות נגד ריכוזי אוכלוסין ותשתיות",
      "הגברת הלחץ הבינלאומי והאמריקאי על מוסקבה ודחיית כל פיוס ללא תנאים"
     ],
     "inferred": [
      "פגיעה בשרשראות האספקה ומתקני הנפט ברוסיה כדי לשחוק את יכולת ניהול המלחמה של מוסקבה",
      "פיתוח מואץ של מערכות נשק טכנולוגיות כגון לייזר כדי להתמודד עם המחסור במיירטים"
     ],
     "forecast": [
      "המשך מאמץ ההגנה האווירית לקראת החורף והחרפת המאמץ לפגוע במתקנים אסטרטגיים בעומק רוסיה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השמדת מתקני אנרגיה ודלק של אוקראינה",
      "סיכול תקיפות טרור וחבלה אוקראיניות בעורף הרוסי"
     ],
     "inferred": [
      "הפעלת לחץ כבד על תושבי אוקראינה והכלכלה שלה באמצעות פגיעה שיטתית במערך החשמל והחימום",
      "הסתרת פגיעות בעורף באמצעות ענישה פלילית על הפצת תיעודים ברשת"
     ],
     "forecast": [
      "המשך מתקפות הלחץ האוויריות המאסיביות על יעדי אנרגיה לפני ירידת הטמפרטורות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c820q9wgrpyyo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/28/ukraine-war-briefing-zelenskyy-criticises-trump-for-calling-putin-his-friend-kyiv-deploys-new-laser-weapon",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21946118",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/rheinmetall-may-drop-plans-to-build-ammunition-plant-in-ukraine-ceo-says/",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1393000",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/11/27/ukrainian-intelligence-says-north-korea-has-stopped-sending-troops-and-missiles-to-russia",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/28/8065077/",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2226341",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49960",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4189470-russians-launch-701-attacks-on-zaporizhzhia-region-in-past-day-one-killed-five-injured.html",
     "accessed_at": "2026-11-28T08:21:21+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-27T19:37:41+00:00",
  "changes": {
   "UKRAINE-11280821-01": {
    "kind": "new"
   },
   "UKRAINE-11280821-02": {
    "kind": "new"
   },
   "UKRAINE-11280821-03": {
    "kind": "new"
   },
   "UKRAINE-11280821-04": {
    "kind": "new"
   },
   "UKRAINE-11280821-05": {
    "kind": "new"
   },
   "UKRAINE-11280821-06": {
    "kind": "new"
   },
   "UKRAINE-11280821-07": {
    "kind": "new"
   },
   "UKRAINE-11280821-08": {
    "kind": "new"
   },
   "UKRAINE-11280821-09": {
    "kind": "possible",
    "prev": "מתקפה רוסית על פיסוצ'ין במחוז חרקוב",
    "score": 0.467
   },
   "UKRAINE-11280821-10": {
    "kind": "new"
   },
   "UKRAINE-11280821-11": {
    "kind": "new"
   },
   "UKRAINE-11280821-12": {
    "kind": "new"
   },
   "UKRAINE-11280821-13": {
    "kind": "new"
   },
   "UKRAINE-11280821-14": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפה אוקראינית במתקן דלק ברוסיה",
    "score": 0.65
   },
   "UKRAINE-11280821-15": {
    "kind": "new"
   },
   "UKRAINE-11280821-16": {
    "kind": "new"
   },
   "UKRAINE-11280821-17": {
    "kind": "new"
   },
   "UKRAINE-11280821-18": {
    "kind": "new"
   },
   "UKRAINE-11280821-19": {
    "kind": "new"
   },
   "UKRAINE-11280821-20": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "חילופי אזרחים בין רוסיה לאוקראינה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-27T0915__north-202611270915.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-27T09:15:40+00:00",
   "window": {
    "from": "2026-11-26T09:15:40+00:00",
    "to": "2026-11-27T09:15:40+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202611270915"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהמשך חילופי מהלכים צבאיים ממוקדים בין צה\"ל לחזבאללה, הכוללים פגיעה במשגרי רקטות בעין א-תינה ותקיפות בדרום לבנון לצד טיסות איסוף מעל ביירות. במקביל, מאמצי תיווך מערביים לעיצוב הסדר חדש מול חזבאללה ויוניפי\"ל נתקלים בסירוב של ארגון הטרור. בסוריה, הממשל החדש פועל לשיקום מעברי הגבול ולשילוב מיליציות זרות בצבא הסדיר, תהליך שמלווה בחיכוך פנימי ובחזרת פליטים מטורקיה.",
   "fronts": [
    {
     "name": "דרום לבנון ובקעת הלבנון (ישראל מול חזבאללה)",
     "status": "תקיפות אוויריות של צה\"ל להסרת איומי שיגור והריסת מתחמים, לצד כוננות של חזבאללה."
    },
    {
     "name": "ביירות והדאחייה",
     "status": "פעילות מתמשכת של כלי טיס ישראליים בלתי מאוישים לאיסוף מודיעין."
    },
    {
     "name": "צפון סוריה ומעברי הגבול עם טורקיה",
     "status": "תנועת שיבה של אזרחים סורים ועבודות תשתית לשיקום ושדרוג המעברים."
    },
    {
     "name": "הזירה הפנים-סורית",
     "status": "מאמצי מיסוד הצבא החדש מול התנגדות מיליציות מוסלמיות זרות."
    }
   ],
   "events": [
    {
     "id": "NORTH-11270915-01",
     "title": "תקיפת צה\"ל נגד משגרי רקטות של חזבאללה בעין א-תינה",
     "summary": "חיל האוויר של צה\"ל תקף עשרות קני שיגור ורקטות במחנה אימונים של יחידת רדואן באזור עין א-תינה, כאשר בצה\"ל צוין כי הפעולה נועדה להסיר איום של ירי.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T19:18:38+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-26T19:18:38+00:00",
     "last_update_at": "2026-11-27T07:53:01+00:00",
     "what_is_not_verified": "האם התקיפה בוצעה בעומק הבקאע או באזור דרום לבנון לפי הגדרות גאוגרפיות שונות המופיעות בדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134316",
       "published_at": "2026-11-27T07:53:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/134312",
       "published_at": "2026-11-27T07:43:01+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383963336",
       "published_at": "2026-11-26T19:37:05+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25702",
       "published_at": "2026-11-26T19:24:53+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95145",
       "published_at": "2026-11-26T19:18:38+00:00"
      }
     ],
     "places": [
      {
       "name": "עין א-תינה, לבנון",
       "lat": 33.5021,
       "lon": 35.6423
      }
     ]
    },
    {
     "id": "NORTH-11270915-02",
     "title": "תקיפות אוויריות ישראליות ופעילות הריסה בדרום לבנון",
     "summary": "כתב אל-מנאר דיווח על תקיפות מהאוויר של צה\"ל בכפר תבנית ובפאתי זוטר א-שרקיה, וכן על פעולת הריסה ישראלית בכפר אל-קנטרה.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T07:29:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T07:29:58+00:00",
     "last_update_at": "2026-11-27T08:10:10+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר לדיווחי כתב אל-מנאר מהשטח לגבי מידת הנזק ואופי פעולת ההריסה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_bb3b9b376ce930ce",
       "url": "https://english.almanar.com.lb/article/155732/",
       "published_at": "2026-11-27T08:10:10+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_4c44584365ad3bc7",
       "url": "https://english.almanar.com.lb/article/155717/",
       "published_at": "2026-11-27T08:02:39+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bb3b9b376ce930ce",
       "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
       "published_at": "2026-11-27T07:29:58+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית, לבנון",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "אל-קנטרה, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-11270915-03",
     "title": "פעילות כלי טיס בלתי מאוישים מעל הדאחייה בביירות",
     "summary": "כתב אל-מנאר דיווח על פעילות של כלי טיס ישראליים בלתי מאוישים מעל הפרברים הדרומיים של ביירות.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T08:46:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-27T08:46:34+00:00",
     "last_update_at": "2026-11-27T08:46:34+00:00",
     "what_is_not_verified": "היקף הטיסות ומטרתן המדויקת אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_2cfc3179bebf85b4",
       "url": "https://english.almanar.com.lb/article/155757/",
       "published_at": "2026-11-27T08:46:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-04",
     "title": "חשיפת מוצב מבוצר של חזבאללה שנבנה בשטח ישראל במרגלות החרמון",
     "summary": "צוות ynet ביקר במתחם שהקים חזבאללה כמתחם אוהלים לפני אוקטובר 2023 במרגלות החרמון, ודיווח כי המקום הוסווה כארעי אך בפועל כלל מוצב קבע מבוצר שהופצץ בתחילת המלחמה.",
     "axis": "ישראל-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T09:00:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-27T09:00:55+00:00",
     "last_update_at": "2026-11-27T09:00:55+00:00",
     "what_is_not_verified": "פרטי המבנה המבצעי המלאים לפני השמדתו מהאוויר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_7a395e74409be5b0",
       "url": "https://www.ynet.co.il/news/article/bjpj7w4j7l",
       "published_at": "2026-11-27T09:00:55+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-05",
     "title": "מגעים דיפלומטיים סביב יוניפי\"ל ונוסח הסכם מסגרת בלבנון",
     "summary": "לפי עיתון לבנוני, ממשל ארצות הברית מקדם השארת פונקציות מסוימות של יוניפי\"ל כמו פינוי מוקשים, בעוד צרפת מנסה לגבש החלטת או\"ם המשלבת את החלטה 1701 והסכם המסגרת, מהלך שנדחה בידי חזבאללה.",
     "axis": "דיפלומטיה סביב לבנון",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-27T06:15:15+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-27T06:15:15+00:00",
     "last_update_at": "2026-11-27T06:15:15+00:00",
     "what_is_not_verified": "הדיווח נסמך כולו על מקור עיתונאי יחיד באל-אח'באר ללא אישור רשמי של צרפת או ארצות הברית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21944795",
       "published_at": "2026-11-27T06:15:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-06",
     "title": "התנגדות ופילוג בקרב מיליציות זרות לשילוב בצבא סוריה",
     "summary": "התארגנות של לוחמים אוזבקים בסוריה האשימה את שירותי המודיעין של ממשלת המעבר ברדיפה ובמעצרים, על רקע סירוב של חלק מהפלגים להשתלב בצבא הסורי ולהתקרב למערב.",
     "axis": "הזירה הפנים-סורית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T19:37:16+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T19:37:16+00:00",
     "last_update_at": "2026-11-26T19:37:16+00:00",
     "what_is_not_verified": "מספר הלוחמים הזרים המדויק ומספר הנעדרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49947",
       "published_at": "2026-11-26T19:37:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11270915-07",
     "title": "שיקום ושדרוג מעברי גבול בינלאומיים ברחבי סוריה",
     "summary": "רשות המעברים והמכס בסוריה מקדמת פרויקטי שיקום והרחבה במעברי הגבול היבשתיים עם שכנותיה, בהם מעבר אל-ערידה מול לבנון ומעברים בגבולות טורקיה, ירדן ועיראק.",
     "axis": "סוריה ומעברי הגבול",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T15:00:08+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T15:00:08+00:00",
     "last_update_at": "2026-11-26T15:00:08+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים להשלמת העבודות ופתיחת המעברים מחדש.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/what-are-syrias-priorities-for-upgrading-border-crossings/",
       "published_at": "2026-11-26T15:00:08+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-הווא, סוריה",
       "lat": 36.2285,
       "lon": 36.7107
      }
     ]
    },
    {
     "id": "NORTH-11270915-08",
     "title": "המשך שיבת אזרחים סורים מטורקיה דרך מעבר קיליס",
     "summary": "תנועת חזרה מרצון של סורים מטורקיה למולדתם נמשכת דרך מעבר הגבול בקיליס בעקבות נפילת משטר אסד בדצמבר 2024.",
     "axis": "טורקיה-סוריה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-26T08:52:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-26T08:52:00+00:00",
     "last_update_at": "2026-11-26T09:15:40+00:00",
     "what_is_not_verified": "מספר החוזרים המדויק בתקופה הנוכחית.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/more-syrians-return-home-from-turkiye-through-kilis-border/news",
       "published_at": "2026-11-26T08:52:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות מומחה טורקי כי ישראל סייעה לכוחות אוקראיניים לפגוע בספינות בלוב כדי לשבש את יוזמת המולדת הכחולה הימית.",
    "הערכות לגבי כוונת חזבאללה האם יצטרף לעימות רחב בין ארה\"ב וישראל לבין איראן.",
    "טענות העיתון אל-אח'באר על פרטי ההצעה הצרפתית ושימור פונקציות יוניפי\"ל על ידי הממשל האמריקני.",
    "היקף הלוחמים הזרים המדויק בסוריה וטענות על מעצרים ורדיפות של פעילי מיליציה אוזבקים בידי המודיעין הסורי."
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
     "value": 3.3273,
     "unit": "ILS",
     "change_pct": -1.53,
     "source_id": "src_ecb",
     "as_of": "2026-11-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת פגיעה באזרחי המדינה ובכוחות צה\"ל והסרת איומים מיידיים.",
      "שמירה על מחויבות להסכם הפסקת האש תוך סיכול התחמשות ושיגור."
     ],
     "inferred": [
      "הרתעת חזבאללה מהתערבות במערכה אזורית רחבה יותר נגד איראן באמצעות שלילת יכולות רקטיות.",
      "ביסוס עליונות מודיעינית ואווירית בשמי לבנון כולל אזור ביירות."
     ],
     "forecast": [
      "המשך סיכול ממוקד של משגרים ואמצעי לחימה של כוח רדואן בכל מרחב שבו יאותרו איומים מיידיים."
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "דחיית הצעות לשינוי הסדרי הביטחון הבינלאומיים והתנגדות להסכם המסגרת מול ישראל."
     ],
     "inferred": [
      "שימור יכולות שיגור ומוכנות מבצעית להפעלה במקרה של התלקחות אזורית.",
      "הסוואת תשתיות צבאיות תחת מעטה אזרחי או ארעי."
     ],
     "forecast": [
      "הימנעות מתגובה רחבה בעת הזו לצד ניסיונות התעצמות מחדש במוקדים מרוחקים יותר מקו הגבול."
     ]
    },
    {
     "actor": "הממשל החדש בסוריה",
     "declared": [
      "שיקום מעברי הגבול הבינלאומיים לחיזוק הריבונות והכלכלה המקומית."
     ],
     "inferred": [
      "מיסוד הכוחות הצבאיים תחת פיקוד מרכזי ודחיקת פלגים חמושים קיצוניים שמסרבים לסור למרותו.",
      "חיזוק קשרים מסחריים והסדרת גבולות מול מדינות שכנות כטורקיה ולבנון."
     ],
     "forecast": [
      "התגברות החיכוך הפנימי מול מיליציות זרות המסרבות להתפרק או להצטרף לצבא הרשמי."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/155757/",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/more-syrians-return-home-from-turkiye-through-kilis-border/news",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/what-are-syrias-priorities-for-upgrading-border-crossings/",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21944795",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/iran-says-attack-kuwait-suspicious-offers-cooperate",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/134312",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49947",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25702",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95145",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383963336",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bjpj7w4j7l",
     "accessed_at": "2026-11-27T09:15:40+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-26T20:03:59+00:00",
  "changes": {
   "NORTH-11270915-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפת מחנה אימונים ואמצעי לחימה של חיזבאללה בדרום לבנון ובבקעת הלבנון",
    "score": 1.0
   },
   "NORTH-11270915-02": {
    "kind": "new"
   },
   "NORTH-11270915-03": {
    "kind": "new"
   },
   "NORTH-11270915-04": {
    "kind": "new"
   },
   "NORTH-11270915-05": {
    "kind": "new"
   },
   "NORTH-11270915-06": {
    "kind": "new"
   },
   "NORTH-11270915-07": {
    "kind": "new"
   },
   "NORTH-11270915-08": {
    "kind": "new"
   }
  }
 }
};
