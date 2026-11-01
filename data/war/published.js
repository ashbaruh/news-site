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
  "draft": "drafts/iran/2026-11-01T1140__iran-202611011140.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-01T11:40:30+00:00",
   "window": {
    "from": "2026-10-31T11:40:30+00:00",
    "to": "2026-11-01T11:40:30+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611011140"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל עומד בפני צומת מתוח בין חידוש התקיפות לבין מאמצי תיווך דיפלומטיים לקראת בחירות האמצע בארה\"ב. בוושינגטון ובירושלים מתקיימים דיונים על יעדי תקיפה נוספים בתוכנית הגרעין תוך שמירה על עמימות, בעוד טהרן מציבה תנאים מחמירים לפתיחת מצר הורמוז ומאיימת במענה צבאי נרחב ללא גבולות גיאוגרפיים.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "המצר סגור לתנועה חופשית; מתנהל משא ומתן קשוח על תנאי פתיחתו בתוך יומיים"
    },
    {
     "name": "תוכנית הגרעין האיראנית",
     "status": "ארה\"ב מאותתת על תוכניות לתקוף אתרים בודדים שנותרו, בעוד איראן מסרבת לכל מו\"מ על הגרעין ושוקלת מחדש את מדיניות האיסור על נשק גרעיני"
    },
    {
     "name": "הזירה המדינית והבינלאומית",
     "status": "שיחות תיווך עקיפות בדוחה והחרפה דיפלומטית חריפה של איראן נגד בריטניה"
    },
    {
     "name": "חזית לבנון ושלוחות אזוריות",
     "status": "דרישה איראנית להפסקת התקיפות בלבנון, לצד חשש בביירות ממעורבות מחודשת של חיזבאללה בלחימה"
    }
   ],
   "events": [
    {
     "id": "IRAN-11011140-01",
     "title": "הגשת ראיות איראניות לארגון הימאות הבינלאומי על תקיפות בנמלים ובתשתיות ימיות",
     "summary": "איראן העבירה מסמכים ותיעודים לארגון הימאות הבינלאומי המציגים לטענתה תקיפות אמריקניות וישראליות נגד נמליה וכלי שיט אזרחיים, והתריעה מפני פגיעה בבטיחות השיט במפרץ, בהורמוז ובמפרץ עומאן.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T10:42:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T10:42:32+00:00",
     "last_update_at": "2026-11-01T10:42:32+00:00",
     "what_is_not_verified": "אמיתות הראיות והיקף הנזקים הנטענים לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86309209/Exclusive-Iran-submits-evidence-of-US-Israeli-attacks-on-ports",
       "published_at": "2026-11-01T10:42:32+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "IRAN-11011140-02",
     "title": "הצהרת תנאים לפתיחת מצר הורמוז על ידי שר החוץ של איראן",
     "summary": "שר החוץ של איראן הציג מתווה מקוצר של יומיים לפתיחה מחדש של מצר הורמוז בכפוף להכרה אמריקנית בנתיב שיט חדש מול עומאן, הסרת סנקציות, נסיגת כוחות והפסקת הלחימה בזירות השונות.",
     "axis": "מצר הורמוז והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T23:26:13+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T23:26:13+00:00",
     "last_update_at": "2026-11-01T07:53:23+00:00",
     "what_is_not_verified": "נכונות ארה\"ב להיענות לתנאים אינה מאומתת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-657",
       "published_at": "2026-11-01T07:53:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-hormuz-could-be-reopened-two-days-if-conditions-met",
       "published_at": "2026-11-01T07:33:35+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610317760",
       "published_at": "2026-10-31T23:26:13+00:00"
      }
     ],
     "places": [
      {
       "name": "דוחה, קטאר",
       "lat": 25.2856,
       "lon": 51.5264
      }
     ]
    },
    {
     "id": "IRAN-11011140-03",
     "title": "הכרזת משרד החוץ האיראני על גופים צבאיים ומודיעיניים בריטיים כארגוני טרור וארגונים עוינים",
     "summary": "טהרן הודיעה על הגדרת חיל הים וחיל האוויר של בריטניה כארגוני טרור ועל ארגון הביון הבריטי כגוף עוין, בתגובה לצעדים בריטיים נגד משמרות המהפכה וסיוע לישראל ולארה\"ב.",
     "axis": "איראן מול המערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T06:04:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T06:04:50+00:00",
     "last_update_at": "2026-11-01T07:53:23+00:00",
     "what_is_not_verified": "ההשלכות המעשיות של הצעד מעבר להצהרה הדיפלומטית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-657",
       "published_at": "2026-11-01T07:53:23+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132910",
       "published_at": "2026-11-01T06:36:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-designates-britains-royal-navy-raf-terrorist-groups-report-says",
       "published_at": "2026-11-01T06:04:50+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-11011140-04",
     "title": "שיחת טראמפ ונתניהו והתייחסות לאתרי הגרעין של איראן",
     "summary": "נשיא ארצות הברית שוחח טלפונית עם ראש ממשלת ישראל על רקע היערכות להסלמה, והתבטא בפומבי כי נותרו אתרים בודדים לטיפול וכי לארה\"ב יש תוכניות פעולה מהירות אך היא אינה ממהרת להחליט על תקיפה.",
     "axis": "ארה\"ב וישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T17:00:36+00:00",
     "last_update_at": "2026-11-01T08:24:50+00:00",
     "what_is_not_verified": "מצבם המדויק של אתרי הגרעין האיראניים והתוכן המלא של השיחה בין המנהיגים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/1/trump-at-halloween-party-as-himself-says-hes-in-no-hurry-with-iran?traffic_source=rss",
       "published_at": "2026-11-01T08:24:50+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132909",
       "published_at": "2026-11-01T06:28:01+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hkinj5xtgl",
       "published_at": "2026-10-31T23:18:29+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49178",
       "published_at": "2026-10-31T23:08:40+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261031-iran-s-khamenei-warns-us-and-israel-against-new-attacks",
       "published_at": "2026-10-31T17:00:36+00:00"
      }
     ],
     "places": [
      {
       "name": "מאר א-לאגו, ארצות הברית",
       "lat": 26.677,
       "lon": -80.0379
      },
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-11011140-05",
     "title": "איומי תגובה מצד הנהגת איראן ובכירי הממשל לכל תקיפה מחודשת",
     "summary": "המנהיג העליון של איראן, יו\"ר ועדת הביטחון בפרלמנט וסגן יו\"ר הפרלמנט הזהירו כי תקיפה חדשה מצד ישראל וארה\"ב תגרור תגובה מיידית ונרחבת ללא מגבלות גיאוגרפיות, תוך הדגשה כי תוכנית הגרעין אינה נושא למשא ומתן.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T15:32:19+00:00",
     "last_update_at": "2026-11-01T09:26:03+00:00",
     "what_is_not_verified": "בנק המטרות המדויק ויכולת המימוש המעשית של האיומים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94913",
       "published_at": "2026-11-01T09:26:03+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-657",
       "published_at": "2026-11-01T07:53:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-lawmaker-warns-harsher-reply-new-threats",
       "published_at": "2026-11-01T06:41:30+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261031-iran-s-khamenei-warns-us-and-israel-against-new-attacks",
       "published_at": "2026-10-31T17:00:36+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94903",
       "published_at": "2026-10-31T15:32:19+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-11011140-06",
     "title": "מגעים דיפלומטיים בתיווך קטארי ומכתב אמריקני לטהרן",
     "summary": "משלחת איראנית קיימה שיחות בדוחה מול מתווכים קטארים למניעת חידוש הלחימה, במקביל למכתב שהעביר סגן נשיא ארה\"ב ואשר הוגדר על ידי גורם ביטחון איראני כשינוי גישה חיובי.",
     "axis": "דיפלומטיה ותיווך אזורי",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-31T15:46:29+00:00",
     "last_update_at": "2026-11-01T08:14:00+00:00",
     "what_is_not_verified": "נוסח המכתב האמריקני המלא וסיכויי הצלחת השיחות לפני תאריך היעד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/1/iran-security-chief-says-us-letter-signals-positive-shift?traffic_source=rss",
       "published_at": "2026-11-01T08:14:00+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/will-iran-take-vance-lifeline-avoid-another-us-attack",
       "published_at": "2026-10-31T17:23:39+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iranian-envoys-meet-qatari-mediators-threat-looms-us-strikes-after-midterms",
       "published_at": "2026-10-31T15:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "דוחה, קטאר",
       "lat": 25.2856,
       "lon": 51.5264
      }
     ]
    },
    {
     "id": "IRAN-11011140-07",
     "title": "הצהרת משמרות המהפכה על קליטת מטוסי קרב רוסיים",
     "summary": "דובר משמרות המהפכה באיראן ציין כי הושלם הליך הרכישה של מטוסי סוחוי 35 מרוסיה וכי קליטתם בפועל תתבצע לאחר סיום המלחמה הנוכחית.",
     "axis": "התעצמות צבאית איראנית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T20:03:37+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T20:03:37+00:00",
     "last_update_at": "2026-11-01T05:42:17+00:00",
     "what_is_not_verified": "מועד האספקה המדויק ומידת השלמת ההכשרות בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-receive-russian-su-35-jets-after-war-ends-irgc-says",
       "published_at": "2026-11-01T05:42:17+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132904",
       "published_at": "2026-10-31T20:03:37+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-11011140-08",
     "title": "היערכות עורפית בישראל לתרחישי פגיעת טילים",
     "summary": "שירותי הכבאות בישראל ערכו תרגיל מסכם המדמה חילוץ נפגעים מאירועי קריסת מבנים ופגיעת טילים כבדים על רקע המתיחות והחשש מהסלמה מול איראן.",
     "axis": "מוכנות העורף הישראלי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T10:46:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T10:46:53+00:00",
     "last_update_at": "2026-11-01T10:46:53+00:00",
     "what_is_not_verified": "לא פורטו מיקומי התרגיל המדויקים בארץ.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_7bd073726144f33a",
       "url": "https://www.israelhayom.co.il/news/local/article/21750536",
       "published_at": "2026-11-01T10:46:53+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת איראן לגבי 168 ילדים שנהרגו במינאב כתוצאה מתקיפות אמריקניות וישראליות",
    "ההערכה האמריקנית לפיה נותרו רק אתר גרעין אחד או שניים הניתנים להשמדה תוך עשר דקות",
    "טענות על תקיפת ספינות אזרחיות ונמלים בידי ארה\"ב וישראל כפי שהוגשו ל-IMO",
    "מועד האספקה המעשי של מטוסי סוחוי 35 מרוסיה לאיראן",
    "היקף ההתחייבות של חיזבאללה שלא להצטרף לעימות עתידי בין איראן לישראל"
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
     "actor": "איראן",
     "declared": [
      "הסרת כלל הסנקציות שהוטלו מאז יולי 2026 ושחרור כספים מוקפאים בקטאר כתנאי לפתיחת מצר הורמוז",
      "הכרה רשמית בנתיב שיט חדש במצר הורמוז שנקבע יחד עם עומאן",
      "מתן מענה צבאי מיידי, קשה וללא הגבלות גיאוגרפיות לכל תקיפה חדשה נגדה"
     ],
     "inferred": [
      "שימוש בחסימת מצר הורמוז כמנוף לחץ כלכלי על המערב לעצירת פעולות ישראל וארה\"ב",
      "חיזוק כושר ההרתעה הצבאי באמצעות רכש אמל\"ח מתקדם מרוסיה כדי לשקם אבדות"
     ],
     "forecast": [
      "המשך מיקוח נוקשה בתיווך קטארי תוך שמירה על איום סגירת המצר עד להשגת ויתורים בסנקציות",
      "תגובה באש לעבר יעדים אזוריים אם תותקף שוב על ידי ארה\"ב או ישראל"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "העדפה לפתרון דיפלומטי למשבר מול טהרן לפני קבלת החלטה על תקיפות חדשות",
      "החזקת תוכניות מבצעיות מוכנות להשמדת אתרי הגרעין הנותרים באיראן בהתראה קצרה"
     ],
     "inferred": [
      "ניסיון להכיל את הלחימה או לדחותה מעבר למועד בחירות האמצע משיקולים פוליטיים פנימיים",
      "הפעלת איום צבאי אמין במקביל לפתיחת ערוץ דיפלומטי באמצעות מכתב סגן הנשיא"
     ],
     "forecast": [
      "מיצוי ערוצי התיווך הקטארים בימים הקרובים לצורך פתיחת נתיבי השיט ללא ויתורים מרחיקי לכת",
      "הוצאה לפועל של פעולות צבאיות ממוקדות אם המגעים המדיניים יקרסו לאחר תאריך היעד"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מוכנות צבאית ועורפית מחודשת לאפשרות של הסלמה וחידוש חילופי האש מול איראן"
     ],
     "inferred": [
      "תיאום הדוק עם הממשל האמריקני לגבי אופי התגובה וחידוש הפעילות נגד יעדי גרעין באיראן",
      "שאיפה לנטרול מוחלט של איום הגרעין האיראני ומניעת התערבות של שלוחות אזוריות"
     ],
     "forecast": [
      "המשך הגברת הכוננות בעורף ובמערכי ההגנה לקראת תרחישי תקיפה הדדיים",
      "פעולה משולבת או מתואמת מול ארה\"ב אם יוחלט על חידוש ההפצצות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/1/iran-security-chief-says-us-letter-signals-positive-shift?traffic_source=rss",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/iranian-envoys-meet-qatari-mediators-threat-looms-us-strikes-after-midterms",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261031-iran-s-khamenei-warns-us-and-israel-against-new-attacks",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610317760",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86309209/Exclusive-Iran-submits-evidence-of-US-Israeli-attacks-on-ports",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/local/article/21750536",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-receive-russian-su-35-jets-after-war-ends-irgc-says",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132904",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49178",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94903",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hkinj5xtgl",
     "accessed_at": "2026-11-01T11:40:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-31T00:40:32+00:00",
  "changes": {
   "IRAN-11011140-01": {
    "kind": "new"
   },
   "IRAN-11011140-02": {
    "kind": "possible",
    "prev": "תקיפות ופגיעות במכליות נפט במצר הורמוז",
    "score": 0.467
   },
   "IRAN-11011140-03": {
    "kind": "new"
   },
   "IRAN-11011140-04": {
    "kind": "new"
   },
   "IRAN-11011140-05": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "יוזמות באיראן לפרישה מהאמנה למניעת הפצת נשק גרעיני והשלמת תוכנית תגובה",
    "score": 0.817
   },
   "IRAN-11011140-06": {
    "kind": "possible",
    "prev": "מאמצי תיווך בינלאומיים בין וושינגטון לטהרן",
    "score": 0.467
   },
   "IRAN-11011140-07": {
    "kind": "new"
   },
   "IRAN-11011140-08": {
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
