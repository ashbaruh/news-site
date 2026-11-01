/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-01T0650__yemen-202611010650.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-01T06:50:01+00:00",
   "window": {
    "from": "2026-10-31T06:50:01+00:00",
    "to": "2026-11-01T06:50:01+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611010650"
   },
   "summary": "הלחימה בזירת תימן כוללת עימותים צבאיים בין הקואליציה בראשות סעודיה והממשלה המוכרת לבין המיליציה החות'ית, לצד תקיפות אוויריות ודיווחים על יירוטי כטב\"מים. במקביל, מתח בינלאומי גובר סביב פגיעת החות'ים בזכויות אדם ומעצר עובדי או\"ם, ובכלל זה מותו בשבי של עובד הארגון.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית והים האדום",
     "status": "פעיל ומסלים"
    },
    {
     "name": "החזית מול סעודיה",
     "status": "פעיל עם תקיפות וירוטים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11010650-01",
     "title": "תקיפות אוויריות על מתקן נפט באל-חודיידה",
     "summary": "כוחות הקואליציה בראשות סעודיה ביצעו שתי תקיפות אוויריות על מתקן נפט באזור בַּגִ'יל במחוז אל-חודיידה, מה שהביא לפציעת שלושה אזרחים לפי החות'ים.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T05:06:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T05:06:37+00:00",
     "last_update_at": "2026-11-01T05:06:37+00:00",
     "what_is_not_verified": "האם התקיפות אכן בוצעו על ידי הקואליציה בראשות סעודיה, והאם מספר הפצועים מדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_al_masirah_tv",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/three-civilians-injured-saudi-coalition-air-raids-hodeidah-houthis-say",
       "published_at": "2026-11-01T05:06:37+00:00"
      }
     ],
     "places": [
      {
       "name": "בג'יל, תימן",
       "lat": 15.0756,
       "lon": 43.1735
      },
      {
       "name": "אל-חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-11010650-02",
     "title": "מותו של עובד האו\"ם במעצר החות'ים",
     "summary": "מוחמד א-שאמי, עובד משרד הנציב העליון של האו\"ם לזכויות אדם שהוחזק במעצר שרירותי על ידי החות'ים מאז יוני 2024, מת בשבי, עובדה שנודעה למשפחתו באיחור.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T12:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T12:00:00+00:00",
     "last_update_at": "2026-11-01T04:49:15+00:00",
     "what_is_not_verified": "נסיבות המוות המדויקות והמועד המדויק שבו אירע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_un_statement",
       "url": "https://www.aljazeera.com/news/2026/11/1/un-demands-investigation-after-staffers-death-in-houthi-custody-in-yemen?traffic_source=rss",
       "published_at": "2026-11-01T04:49:15+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_un_statement",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/guterres-condemns-death-un-staff-member-houthi-custody",
       "published_at": "2026-11-01T01:53:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_un_statement",
       "url": "https://www.newarab.com/news/un-demands-probe-death-its-employee-houthi-custody",
       "published_at": "2026-10-31T20:12:21+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_un_statement",
       "url": "https://www.sabanew.net/viewstory/154941",
       "published_at": "2026-10-31T20:09:55+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_un_statement",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-demands-probe-death-staff-member-houthi-custody",
       "published_at": "2026-10-31T19:44:22+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_un_statement",
       "url": "https://www.sabanew.net/viewstory/154931",
       "published_at": "2026-10-31T16:40:36+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_un_statement",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168716",
       "published_at": "2026-10-31T12:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11010650-03",
     "title": "ירוט רחפנים מעל אזורים בסעודיה והכחשת החות'ים",
     "summary": "הקואליציה בראשות סעודיה דיווחה כי ייורטו רחפנים של החות'ים מעל אזורי מכה ומדינה, אך החות'ים הכחישו ביצוע תקיפות אלו.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T10:05:06+00:00",
     "last_update_at": "2026-10-31T20:41:20+00:00",
     "what_is_not_verified": "האם הרחפנים אכן שוגרו על ידי החות'ים ויורטו כנטען.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-weighs-joining-mecca-defence-pact-foreign-minister-says",
       "published_at": "2026-10-31T20:41:20+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.newarab.com/news/irans-khamenei-orders-unrestricted-response-threats",
       "published_at": "2026-10-31T10:05:06+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      },
      {
       "name": "מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "YEMEN-11010650-04",
     "title": "פעילות צבאית ונתונים של הכוחות המזוינים בתימן",
     "summary": "פורסמו נתונים מטעם הכוחות המזוינים על ביצוע אלפי פעולות איכון וחיסול של פעילי חודיידה והשמדת ציוד צבאי במסגרת מבצע 'פגר אלימן' (פג'ר אל-ימן).",
     "axis": "תימן והחות'ים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-31T14:45:29+00:00",
     "last_update_at": "2026-10-31T14:45:29+00:00",
     "what_is_not_verified": "הנתונים המדויקים על מספר הפעולות והנפגעים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0c72890bc4d10432",
       "url": "https://www.sabanew.net/viewstory/154928",
       "published_at": "2026-10-31T14:45:29+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "אחריות החות'ים על שיגור הכטב\"מים לעבר מכה ומדינה",
    "מספר הנפגעים המדויק בתקיפות באל-חודיידה",
    "נסיבות מותו המדויקות של עובד האו\"ם מוחמד א-שאמי"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "הכחשת מעורבות בתקיפות מסוימות בתוך סעודיה"
     ],
     "inferred": [
      "המשך לחץ צבאי ופגיעה בתשתיות סעודיות וימיות",
      "דיכוי אופוזיציה פנימית ועצירת גורמים בינלאומיים המזוהים עם האו\"ם"
     ],
     "forecast": [
      "המשך ההתכתשות מול הקואליציה בתימן ובאזורי הגבול",
      "החמרת הבידוד הבינלאומי עקב פגיעה בעובדי סיוע"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטחי הממלכה ומתקניה מפני תקיפות החות'ים",
      "השבת שלטון הממשלה המוכרת בתימן"
     ],
     "inferred": [
      "בניית בריתות הגנה אזוריות מול האיומים מצד תימן ואיראן",
      "תגובה צבאית באמצעות תקיפות אוויריות וירוט איומים"
     ],
     "forecast": [
      "הגברת שיתופי הפעולה הבינלאומיים והאזורית להגנת תשתיות סעודיה",
      "המשך פעילות צבאית נגד מעוזי החות'ים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/1/un-demands-investigation-after-staffers-death-in-houthi-custody-in-yemen?traffic_source=rss",
     "accessed_at": "2026-11-01T06:50:01+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-weighs-joining-mecca-defence-pact-foreign-minister-says",
     "accessed_at": "2026-11-01T06:50:01+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/irans-khamenei-orders-unrestricted-response-threats",
     "accessed_at": "2026-11-01T06:50:01+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154928",
     "accessed_at": "2026-11-01T06:50:01+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168716",
     "accessed_at": "2026-11-01T06:50:01+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-31T15:59:41+00:00",
  "changes": {
   "YEMEN-11010650-01": {
    "kind": "new"
   },
   "YEMEN-11010650-02": {
    "kind": "new"
   },
   "YEMEN-11010650-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "יירוט כטב\"מים וטילים מעל סעודיה",
    "score": 1.0
   },
   "YEMEN-11010650-04": {
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
  "draft": "drafts/ukraine/2026-10-31T0612__ukraine-202610310612.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-31T06:12:28+00:00",
   "window": {
    "from": "2026-10-30T06:12:28+00:00",
    "to": "2026-10-31T06:12:28+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "ukraine-202610310612"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במקביל לתקיפות הדדיות על תשתיות אנרגיה בעומק השטח, כאשר כוחות רוסיה פוגעים ברשת החשמל בקייב ואוקראינה מחדשת את הפגיעות בבתי זיקוק רוסיים. במקביל למאמצי סיוע בינלאומיים והפשרת עסקת טילי פטריוט עבור קייב, מתקיימת הפוגת אש נקודתית ראשונה מסוגה לפינוי תושבים מאולשקי שבדרום. בציר המדיני נרשם קיפאון ועימות חריף בין מוסקבה למדינות המערב במהלך מפגש ה-G20 בארה\"ב.",
   "fronts": [
    {
     "name": "ציר קייב והעורף האוקראיני",
     "status": "ספיגת מתקפות רוסיות על מתקני אנרגיה וחשמל לקראת עונת החורף"
    },
    {
     "name": "חזית חרקוב",
     "status": "מתקפות כטב\"מים רוסיות לצד דיווחים על הדיפת תקיפות בשטח"
    },
    {
     "name": "חזית הדרום (נהר הדנייפרו / אולשקי)",
     "status": "הפסקת אש מקומית זמנית לצורך פינוי הומניטרי של אזרחים"
    },
    {
     "name": "עורף רוסיה ומתקני הנפט",
     "status": "תקיפות כטב\"מים אוקראיניות על בתי זיקוק ואיומי תעופה באזורי פנים"
    },
    {
     "name": "הים השחור",
     "status": "פגיעות רוסיות בתנועת כלי שיט המובילים ציוד ומטען סמוך לחופי אוקראינה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10310612-01",
     "title": "פגיעה באוניית משא מדרום לאודסה",
     "summary": "צבא רוסיה תקף אוניית משא שהובילה מטען צבאי עבור הכוחות האוקראיניים בים, במרחק 18 ק\"מ מדרום לאודסה.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T05:45:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T05:45:19+00:00",
     "last_update_at": "2026-10-31T05:45:19+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח של משרד ההגנה הרוסי על זהות המטען או היקף הפגיעה באונייה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2211319",
       "published_at": "2026-10-31T05:45:19+00:00"
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
     "id": "UKRAINE-10310612-02",
     "title": "אישור מכירת טילי פטריוט מארה\"ב לאוקראינה",
     "summary": "מחלקת המדינה של ארצות הברית אישרה עסקת מכירה של 500 טילי הגנה אווירית מדגם פטריוט PAC-3 לאוקראינה בעלות מוערכת של כ-2.1 מיליארד דולר במימון בעלות ברית.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T19:24:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T19:24:00+00:00",
     "last_update_at": "2026-10-31T04:20:00+00:00",
     "what_is_not_verified": "מועד אספקת הטילים בפועל טרם נקבע, וזלנסקי ציין כי האספקה עלולה להימשך שנים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4179938-zelensky-500-patriot-interceptors-could-provide-ukraine-with-strong-defense-this-winter.html",
       "published_at": "2026-10-31T04:20:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/31/ukraines-zelenskyy-praises-us-over-21bn-patriot-missile-deal-but-warns-it-could-take-years",
       "published_at": "2026-10-31T02:18:17+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c3vgxznlx7jzo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-31T00:40:43+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2211295",
       "published_at": "2026-10-30T23:28:56+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/31/u-s-state-department-approves-potential-2-1-billion-sale-of-500-patriot-air-defense-missiles-to-ukraine",
       "published_at": "2026-10-30T23:08:18+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-approves-2-1-billion-patriot-missile-sale-to-ukraine-as-nato-commander-dismisses-delivery-concerns/",
       "published_at": "2026-10-30T21:24:53+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060570/",
       "published_at": "2026-10-30T19:24:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10310612-03",
     "title": "מתקפת כטב\"מים רוסית על חרקוב",
     "summary": "מתקפת מל\"טים רוסית פגעה בעיר חרקוב, גרמה לפציעתם של שלושה אזרחים ולנזק בעשרה מבני מגורים.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T05:08:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T05:08:00+00:00",
     "last_update_at": "2026-10-31T05:08:00+00:00",
     "what_is_not_verified": "אין אימות נוסף מחוץ לדיווח המקומי לגבי היקף הנזק המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4179940-three-injured-homes-damaged-in-russian-drone-strike-on-kharkiv.html",
       "published_at": "2026-10-31T05:08:00+00:00"
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
     "id": "UKRAINE-10310612-04",
     "title": "תקיפת מתקן אנרגיה בקייב",
     "summary": "פגיעה רוסית במתקן אנרגיה בקייב גרמה לניתוקי חשמל ואספקת מים בחלקים מהעיר.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T22:21:44+00:00",
     "last_update_at": "2026-10-30T22:21:44+00:00",
     "what_is_not_verified": "היקף הפגיעה המדויק בתשתיות והשבתתן המלאה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5db480ac3178c6f1",
       "url": "https://kyivindependent.com/russian-attack-hits-kyiv-energy-facility-leaving-parts-of-four-districts-without-power/",
       "published_at": "2026-10-30T22:21:44+00:00"
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
     "id": "UKRAINE-10310612-05",
     "title": "מבצע הומניטרי ופינוי אזרחים מהעיר אולשקי הכבושה",
     "summary": "הפוגת אש ייעודית אפשרה יציאת שיירת פינוי וסיוע הומניטרי מהעיר אולשקי שבמחוז חרסון דרך מסלול שעובר ברוסיה ובלארוס.",
     "axis": "חזית הדרום (חרסון)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T12:00:00+00:00",
     "last_update_at": "2026-10-30T20:27:00+00:00",
     "what_is_not_verified": "מספר המפונים המדויק שנוי במחלוקת בין הצדדים, וכן דיווחים על פינוי גופות מבית החולים המקומי טרם אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060573/",
       "published_at": "2026-10-30T20:27:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/30/evacuation-besieged-ukrainian-city-oleshky",
       "published_at": "2026-10-30T17:13:48+00:00"
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
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49118",
       "published_at": "2026-10-30T15:02:35+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168712",
       "published_at": "2026-10-30T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-06",
     "title": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק",
     "summary": "כלי טיס בלתי מאוישים של אוקראינה פגעו בבית הזיקוק של חברת רוסנפט בנובוקויבישבסק במחוז סמרה, וגרמו לסדרת שריפות במתקן.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T07:51:01+00:00",
     "last_update_at": "2026-10-30T09:09:24+00:00",
     "what_is_not_verified": "רמת הפגיעה ביכולת ייצור הדלק הסילוני והיקף הנזק המבני המדויק.",
     "is_new_in_window": true,
     "reports": [
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
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-07",
     "title": "התרעות כטב\"מים ושיבושי חשמל באזורי רוסיה",
     "summary": "שיבושי חשמל נרשמו במחוז קלינינגרד ברוסיה, והוטלו הגבלות תעופה בשדה התעופה באופה בעקבות התרעת כטב\"מים בבשקורטוסטן.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T04:47:00+00:00",
     "last_update_at": "2026-10-31T04:47:00+00:00",
     "what_is_not_verified": "הקשר הישיר בין הפסקות החשמל בקלינינגרד לאיומי הכטב\"מים או לפעילות אוקראינית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/power-outages-hit-russias-kaliningrad-oblast-explosions-reported-in-ufa-amid-drone-alerts/",
       "published_at": "2026-10-31T04:47:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אופה, רוסיה",
       "lat": 54.7261,
       "lon": 55.9475
      },
      {
       "name": "קלינינגרד, רוסיה",
       "lat": 54.7046,
       "lon": 20.4566
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-08",
     "title": "התחייבות קנדה והאיחוד האירופי לחבילות מימון לאוקראינה",
     "summary": "קנדה התחייבה להקצות 500 מיליון אירו להלוואת הסיוע לאוקראינה, והנציבות האירופית גיבשה מנגנון להעברת 45 מיליארד אירו נוספים עד סוף שנת 2027.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:16:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T00:16:53+00:00",
     "last_update_at": "2026-10-31T05:30:00+00:00",
     "what_is_not_verified": "עמידת אוקראינה בכלל התנאים הרגולטוריים של האיחוד האירופי לשחרור מלוא הכספים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4179945-canada-to-provide-500-million-to-support-ukraine.html",
       "published_at": "2026-10-31T05:30:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/31/8060588/",
       "published_at": "2026-10-31T05:22:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4179939-eu-and-canada-reaffirm-continued-support-for-ukraine.html",
       "published_at": "2026-10-31T04:45:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/canada-pledges-500-million-euros-toward-ukraine-support-loan-amid-2027-budget-shortfall/",
       "published_at": "2026-10-31T00:16:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10310612-09",
     "title": "עימות דיפלומטי בפסגת שרי החוץ של ה-G20 באטלנטה",
     "summary": "התמונה הקבוצתית המסורתית של שרי החוץ בוטלה עקב סירוב שרים אירופים להצטלם עם שר החוץ הרוסי לברוב, שלווה בהאשמות חריפות מצד האיחוד האירופי על שקרים בנושא המלחמה.",
     "axis": "מגעים מדיניים ודיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T18:44:05+00:00",
     "last_update_at": "2026-10-31T04:26:03+00:00",
     "what_is_not_verified": "הסכמה או היתכנות לשיחות ישירות בין נשיאי רוסיה ואוקראינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/31/ukraine-war-briefing-moscows-lavrov-snubbed-at-g20-in-atlanta",
       "published_at": "2026-10-31T04:26:03+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211313",
       "published_at": "2026-10-31T03:25:16+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/30/g20-foreign-ministers-group-photo-canceled-after-several-refuse-to-pose-with-russian-foreign-minister-sergey-lavrov",
       "published_at": "2026-10-30T18:44:05+00:00"
      }
     ],
     "places": [
      {
       "name": "אטלנטה, ארצות הברית",
       "lat": 33.7545,
       "lon": -84.3898
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-10",
     "title": "סגירת מערכת העיתון נובאיה גזטה במוסקבה",
     "summary": "עיתון האופוזיציה הרוסי הוותיק נובאיה גזטה הודיע על סגירת פעילותו לאחר פינויו ממשרדיו במוסקבה וחסימת פלטפורמות התרומות שלו.",
     "axis": "זירה פנימית ברוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T18:41:49+00:00",
     "last_update_at": "2026-10-30T19:10:31+00:00",
     "what_is_not_verified": "האם העיתון יצליח לחדש פעילות מפלטפורמות חלופיות בעתיד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_421d094b24ec1088",
       "url": "https://meduza.io/en/feature/2026/10/30/can-russia-s-independent-newspaper-novaya-gazeta-rise-from-the-ashes-a-third-time-editor-sergey-sokolov-discusses-what-comes-next",
       "published_at": "2026-10-30T19:10:31+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_421d094b24ec1088",
       "url": "https://meduza.io/en/feature/2026/10/30/as-novaya-gazeta-one-of-russia-s-best-known-independent-newspapers-is-forced-to-close-after-33-years-three-former-staffers-look-back-on-its-legacy",
       "published_at": "2026-10-30T18:41:49+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    }
   ],
   "not_verified": [
    "נתוני האבדות היומיים שמסרו צבאות אוקראינה ורוסיה אינם ניתנים לאימות עצמאי",
    "מספרם המדויק של האזרחים שפונו מאולשקי והיעד הסופי שבחרו",
    "טענות יצרנית הנשק האוקראינית על פיתוח מעקף טכנולוגי מלא להגבלות סטארלינק",
    "הטענות בדבר כוונת רוסיה להביא לקריסה כוללת של תשתיות החום והמים בחורף בערים מרכזיות"
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
      "הצטיידות ב-500 טילי פטריוט להגנה על שמי המדינה והתשתיות בחורף",
      "גיוס סיוע תקציבי וביטחוני רב-שנתי מהאיחוד האירופי וממדינות המערב",
      "המשך פגיעה במתקני אנרגיה המזינים את הצבא הרוסי"
     ],
     "inferred": [
      "שחיקת מקורות ההכנסה והדלק של צבא רוסיה באמצעות כטב\"מים ארוכי טווח חרף לחץ בינלאומי",
      "מזעור פגיעות לוגיסטית ופיתוח חלופות עצמאיות לתקשורת לוויינית בשדה הקרב"
     ],
     "forecast": [
      "המשך תלות עמוקה במימון אירופי והאצת אספקת מיירטים לפני שיא החורף",
      "מאמץ לשמר ערוצי פינוי הומניטריים מוגבלים באזורים נצורים תחת תיווך זר"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בנתיבי אספקת נשק מערבי ומטענים צבאיים בים וביבשה",
      "השלמת המשימה ההומניטרית באולשקי והעברת תושבים למרחבים בטוחים",
      "נכונות רטורית לקיום שיחות עם אוקראינה במוסקבה בלבד"
     ],
     "inferred": [
      "הפעלת לחץ על אזרחי אוקראינה באמצעות השבתת מערכות החשמל והמים לקראת החורף",
      "שבירת הבידוד המדיני הבינלאומי באמצעות חיכוך ישיר במפגשי ה-G20 ומגעים עם הממשל האמריקאי"
     ],
     "forecast": [
      "החרפת התקיפות על תחנות כוח ואנרגיה באוקראינה במקביל לקשיי שיווק הנפט מול סנקציות",
      "המשך חסימת פעילותם של גופי תקשורת וחברה אזרחית בלתי תלויים מבית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c60me298k1yeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/31/ukraine-war-briefing-moscows-lavrov-snubbed-at-g20-in-atlanta",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21740945",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/canada-pledges-500-million-euros-toward-ukraine-support-loan-amid-2027-budget-shortfall/",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/30/as-novaya-gazeta-one-of-russia-s-best-known-independent-newspapers-is-forced-to-close-after-33-years-three-former-staffers-look-back-on-its-legacy",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/31/8060588/",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2211313",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132819",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49118",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4179939-eu-and-canada-reaffirm-continued-support-for-ukraine.html",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168712",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T17:19:07+00:00",
  "changes": {
   "UKRAINE-10310612-01": {
    "kind": "new"
   },
   "UKRAINE-10310612-02": {
    "kind": "new"
   },
   "UKRAINE-10310612-03": {
    "kind": "possible",
    "prev": "הדיפת מתקפה רוסית באזור חרקוב ועליית מניין הקורבנות מאיזיום",
    "score": 0.467
   },
   "UKRAINE-10310612-04": {
    "kind": "new"
   },
   "UKRAINE-10310612-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פינוי אזרחים והפסקת אש הומניטרית בעיר אולשקי הכבושה",
    "score": 1.0
   },
   "UKRAINE-10310612-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק ברוסיה",
    "score": 1.0
   },
   "UKRAINE-10310612-07": {
    "kind": "new"
   },
   "UKRAINE-10310612-08": {
    "kind": "new"
   },
   "UKRAINE-10310612-09": {
    "kind": "new"
   },
   "UKRAINE-10310612-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-01T0655__north-202611010655.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-01T06:55:10+00:00",
   "window": {
    "from": "2026-10-31T06:55:10+00:00",
    "to": "2026-11-01T06:55:10+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611010655"
   },
   "summary": "הגזרה הצפונית של ישראל מתאפיינת בפעילות צבאית נמשכת של צה\"ל בדרום לבנון הכוללת הריסות ובניית צירי תנועה צבאיים, לצד לחץ מדיני מצד ממשלת לבנון לחידוש הסמכות הממלכתית. במקביל, סוריה מקיימת דיונים להצטרפות לברית ההגנה האזורית (הסכם מכה) ומתמודדת עם אתגרי ביטחון גבול מול ירדן.",
   "fronts": [
    {
     "name": "לבנון וחיזבאללה",
     "status": "פעילות צבאית ישראלית מתמשכת בדרום לבנון לצד מאמצי ממשלת לבנון לאכיפת סמכות המדינה."
    },
    {
     "name": "סוריה",
     "status": "בחינת השתלבות בריתות אזוריות (הסכם מכה) והתמודדות עם חיכוכי גבול מול ירדן."
    }
   ],
   "events": [
    {
     "id": "NORTH-11010655-01",
     "title": "פעילות צבאית והרס בדרום לבנון",
     "summary": "כוחות צה\"ל מבצעים פיצוצים, תקיפות אוויריות ובניית צירי תחבורה חדשים המקשרים בין מוצבים צבאיים בדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-31T09:32:47+00:00",
     "last_update_at": "2026-11-01T03:54:39+00:00",
     "what_is_not_verified": "היקף הנזק המדויק והשלכותיה המלאות של בניית הצירים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_lebanese_news_agency",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-builds-new-roads-linking-military-posts-in-southern-lebanon/4107704",
       "published_at": "2026-11-01T03:54:39+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_lebanese_news_agency",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-shells-south-lebanon-towns-builds-roads-connecting-military",
       "published_at": "2026-10-31T23:21:11+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_lebanese_news_agency",
       "url": "https://english.almanar.com.lb/article/145347/",
       "published_at": "2026-10-31T19:24:16+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_lebanese_news_agency",
       "url": "https://t.me/abualiexpress/132873",
       "published_at": "2026-10-31T12:45:42+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_lebanese_news_agency",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-launches-fresh-airstrikes-machine-gun-fire-in-southern-lebanon/4107257",
       "published_at": "2026-10-31T11:07:31+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_lebanese_news_agency",
       "url": "https://t.me/abualiexpress/132862",
       "published_at": "2026-10-31T09:32:47+00:00"
      }
     ],
     "places": [
      {
       "name": "ברעשית, לבנון",
       "lat": 33.1785,
       "lon": 35.4372
      },
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      },
      {
       "name": "אל-מנסורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-11010655-02",
     "title": "עמדת ממשלת לבנון וקריאה לריבונות",
     "summary": "שר החוץ של לבנון קרא לנסיגה ישראלית מלאה, יישום החלטה 1701, וגיוס תמיכת מדינות המפרץ לחידוש הסמכות של המדינה ומניעת פעילות צבאית של חיזבאללה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T02:25:16+00:00",
     "last_update_at": "2026-11-01T02:25:16+00:00",
     "what_is_not_verified": "האם החלטות הממשלה יושמו במלואן בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_lebanese_national_news_agency",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-foreign-minister-urges-gulf-states-help-restore-countrys",
       "published_at": "2026-11-01T02:25:16+00:00"
      }
     ],
     "places": [
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      }
     ]
    },
    {
     "id": "NORTH-11010655-03",
     "title": "דיונים על הצטרפות סוריה להסכם ההגנה של מכה",
     "summary": "שר החוץ הסורי אישר שמתקיימים דיונים לבחינת האפשרות שסוריה תצטרף לברית ההגנה של מכה יחד עם סעודיה, טורקיה ופקיסטן.",
     "axis": "סוריה-המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-31T10:48:07+00:00",
     "last_update_at": "2026-10-31T20:41:20+00:00",
     "what_is_not_verified": "תוצאות הדיונים בפועל ומועד ההצטרפות האפשרי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_asaad_al_shaibani",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-weighs-joining-mecca-defence-pact-foreign-minister-says",
       "published_at": "2026-10-31T20:41:20+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_asaad_al_shaibani",
       "url": "https://www.newarab.com/news/syria-mulls-joining-mecca-defence-pact-shaibani",
       "published_at": "2026-10-31T15:48:15+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_asaad_al_shaibani",
       "url": "https://www.newarab.com/news/mideast-leaders-call-calm-fears-mount-renewed-war",
       "published_at": "2026-10-31T13:46:06+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_asaad_al_shaibani",
       "url": "https://www.aa.com.tr/en/middle-east/syria-says-discussions-underway-on-joining-mecca-pact/4107245",
       "published_at": "2026-10-31T10:48:07+00:00"
      }
     ],
     "places": [
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      }
     ]
    },
    {
     "id": "NORTH-11010655-04",
     "title": "תקרית גבול בין ירדן לסוריה",
     "summary": "משמר הגבול הירדני עצם קבוצה חמושה שניסתה לחדור מסוריה לירדן, בהיתקלות שהביאה לנפגעים חמושים ולנסיגת חלקם חזרה לסוריה.",
     "axis": "ירדן-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T07:34:23+00:00",
     "last_update_at": "2026-10-31T20:07:18+00:00",
     "what_is_not_verified": "זהותם המדויקת של החמושים והקשרם הארגוני לפי דיווחי סוכנות פטרה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_petra",
       "url": "https://www.newarab.com/news/jordan-stops-armed-group-attempting-enter-syria",
       "published_at": "2026-10-31T20:07:18+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_petra",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/965686/jordan-stops-fighters-attempting-to-enter-from-syria-armed-forces-say/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965686",
       "published_at": "2026-10-31T07:34:23+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "זהותם המדויקת של 14 החמושים שניסו לחדור ממרחב סוריה לירדן.",
    "ההיתכנות והמועד הסופי להצטרפות סוריה להסכם ההגנה של מכה."
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
     "actor": "ישראל",
     "declared": [],
     "inferred": [
      "ביסוס שליטה מבצעית בדרום לבנון דרך תשתיות קבע ודרכים צבאיות",
      "מניעת התארגנויות עוינות בגבולות הצפון"
     ],
     "forecast": [
      "המשך פעילות הנדסית ותקיפות נקודתיות בדרום לבנון כל עוד אין הסדר כולל"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "נסיגה ישראלית מלאה מהשטחים הכבושים בלבנון",
      "יישום מלא של החלטה 1701 והחלת סמכות המדינה על כל הנשק והפעילות הצבאית"
     ],
     "inferred": [
      "ניסיון להיעזר בגורמים אזוריים ובינלאומיים לשיקום ריבונות המדינה"
     ],
     "forecast": [
      "המשך לחץ דיפלומטי לאכיפת הריבונות ולגיוס סיוע כלכלי ומדיני"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "חיזוק שיתוף הפעולה האזורי ובחינת הצטרפות להסכם ההגנה של מכה",
      "עמידה איתנה על דרישת השבת ריבונות על רמת הגולן"
     ],
     "inferred": [
      "רצון להשתלב במערכי הביטחון האזוריים של מדינות המפרץ וטורקיה לחיזוק הלגיטימציה של המשטר החדש"
     ],
     "forecast": [
      "המשך מגעים להצטרפות לבריתות אזוריות ותיאום גבולות הדוק מול ירדן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/145347/",
     "accessed_at": "2026-11-01T06:55:10+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-says-discussions-underway-on-joining-mecca-pact/4107245",
     "accessed_at": "2026-11-01T06:55:10+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/965686/jordan-stops-fighters-attempting-to-enter-from-syria-armed-forces-say/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965686",
     "accessed_at": "2026-11-01T06:55:10+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/syria-weighs-joining-mecca-defence-pact-foreign-minister-says",
     "accessed_at": "2026-11-01T06:55:10+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/jordan-stops-armed-group-attempting-enter-syria",
     "accessed_at": "2026-11-01T06:55:10+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132862",
     "accessed_at": "2026-11-01T06:55:10+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-31T16:00:25+00:00",
  "changes": {
   "NORTH-11010655-01": {
    "kind": "possible",
    "prev": "תקיפה ישראלית בכפר כפר טבנית שבדרום לבנון",
    "score": 0.467
   },
   "NORTH-11010655-02": {
    "kind": "new"
   },
   "NORTH-11010655-03": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "שיחות בסוריה על הצטרפות אפשרית להסכם מכה",
    "score": 1.0
   },
   "NORTH-11010655-04": {
    "kind": "new"
   }
  }
 }
};
