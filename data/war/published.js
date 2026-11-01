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
  "draft": "drafts/ukraine/2026-11-01T1654__ukraine-202611011654.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-01T16:54:25+00:00",
   "window": {
    "from": "2026-10-31T16:54:25+00:00",
    "to": "2026-11-01T16:54:25+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611011654"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעוצמה גבוהה, כאשר רוסיה מפעילה כטב\"מים נגד יעדי אנרגיה ומבנים אזרחיים בעורף האוקראיני, לצד תקיפת כלי שיט בים השחור. במקביל, כוחות אוקראינה מבצעים תקיפות עומק נגד מתקני זיקוק ותעשייה ביטחונית ברוסיה, ומשלבים כלים בלתי מאוישים יבשתיים ואוויריים בחזית. ברקע התקיפות ההדדיות התבצעה הפוגה מקומית חריגה לצורך חילוץ הומניטרי מהעיר אולשקי, בעוד המגעים והעמדות להסדר מדיני רחב נותרים מסויגים ורחוקים מפתרון.",
   "fronts": [
    {
     "name": "גזרת לימאן",
     "status": "קרבות פעילים הכוללים שימוש בכרב\"מים ורחפנים"
    },
    {
     "name": "מחוז חרסון (אולשקי)",
     "status": "הפוגה מקומית שהתקיימה לצורך מבצע הומניטרי ופינוי אוכלוסייה"
    },
    {
     "name": "הים השחור ומרחב אודסה",
     "status": "פגיעות בכלי שיט באמצעות כטב\"מים"
    },
    {
     "name": "עורף אוקראינה",
     "status": "מתקפות כטב\"מים רוסיות מסיביות על מתקני אנרגיה ומטרות אזרחיות"
    },
    {
     "name": "עורף רוסיה",
     "status": "תקיפות אוקראיניות ממוקדות נגד בתי זיקוק ומפעלי נשק"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11011654-01",
     "title": "תקיפת כטב\"מים רוסית במחוז ויניצה",
     "summary": "מתקפה רוסית באמצעות כטב\"ם פגעה במעונות סטודנטים באזור קוזיאטין במחוז ויניצה, וגרמה למותן של נערה ואישה ולפציעת ארבעה בני אדם.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T16:25:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T16:25:00+00:00",
     "last_update_at": "2026-11-01T16:25:00+00:00",
     "what_is_not_verified": "בתחילה דווח על גבר שנהרג במקום, אך המידע תוקן בהמשך לנערה בת 13.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060746/",
       "published_at": "2026-11-01T16:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קוזיאטין, אוקראינה",
       "lat": 49.7196,
       "lon": 28.8354
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-02",
     "title": "פגיעת כטב\"מים בצ'רנוביץ",
     "summary": "מתקפת כטב\"מים רוסית פגעה בבניין משרדים בעיר צ'רנוביץ ופצעה אדם מבוגר מרסיסים, בעוד כטב\"ם נוסף יורט בסמוך.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T14:08:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T14:08:00+00:00",
     "last_update_at": "2026-11-01T14:08:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060740/",
       "published_at": "2026-11-01T14:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'רנוביץ, אוקראינה",
       "lat": 48.2865,
       "lon": 25.9377
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-03",
     "title": "פגיעות רוסיות בתשתיות אנרגיה באוקראינה",
     "summary": "תקיפות רוסיות פגעו בתשתיות אנרגיה בארבעה מחוזות באוקראינה, פצעו עובדי חברת חשמל והביאו לניתוק מאות אלפים מאספקת החשמל.",
     "axis": "תשתיות אנרגיה באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T11:42:47+00:00",
     "last_update_at": "2026-11-01T11:44:46+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_dtek",
       "url": "https://kyivindependent.com/russian-attacks-kill-1-injure-47-over-past-day-leaving-hundreds-of-thousands-without-electricity/",
       "published_at": "2026-11-01T11:44:46+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_dtek",
       "url": "https://tass.com/emergencies/2211529",
       "published_at": "2026-11-01T11:42:47+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11011654-04",
     "title": "תקיפה אוקראינית על מפעל כימי ומערכות הגנה אווירית ברוסיה",
     "summary": "כוחות אוקראינה פגעו במפעל הכימי בקמנסק שבמחוז רוסטוב המייצר דלק לרקטות, וכן במערכת פנציר-אס2 וברכב פיקוד של מערכת אס-400.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T11:27:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T11:27:00+00:00",
     "last_update_at": "2026-11-01T14:07:08+00:00",
     "what_is_not_verified": "היקף הנזק המדויק מבוסס על הערכת הנשיא האוקראיני בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-confirms-attack-on-russian-rocket-fuel-factory-missile-launcher-system/",
       "published_at": "2026-11-01T14:07:08+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4180240-zelensky-reports-strikes-on-russian-defense-industry-plant-air-defense-assets-worth-70-million.html",
       "published_at": "2026-11-01T11:27:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11011654-05",
     "title": "תקיפה בבית הזיקוק בקסטובו ברוסיה",
     "summary": "שריפה פרצה בבית זיקוק בעיר קסטובו במחוז ניז'ני נובגורוד בעקבות תקיפת כטב\"מים אוקראינית בלילה.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T02:54:16+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T02:54:16+00:00",
     "last_update_at": "2026-11-01T03:25:48+00:00",
     "what_is_not_verified": "מידת הנזק התפעולי הנוכחי שנגרם למתקן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-oil-refinery-in-kstovo-ablaze-after-reported-overnight-drone-strike/",
       "published_at": "2026-11-01T03:25:48+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49181",
       "published_at": "2026-11-01T02:54:16+00:00"
      }
     ],
     "places": [
      {
       "name": "קסטובו, מחוז ניז'ני נובגורוד, רוסיה",
       "lat": 56.1496,
       "lon": 44.198
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-06",
     "title": "השלמת פינוי אזרחים ובעלי חיים מאולשקי",
     "summary": "הושלם מבצע הומניטרי לפינוי תושבים וחיות מחמד מהעיירה הכבושה אולשקי במחוז חרסון דרך בלארוס, בחסות הפסקת אש זמנית.",
     "axis": "מחוז חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T16:55:47+00:00",
     "last_update_at": "2026-11-01T14:20:00+00:00",
     "what_is_not_verified": "משך תוקפה המדויק של הפסקת האש המקומית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060742/",
       "published_at": "2026-11-01T14:20:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060737/",
       "published_at": "2026-11-01T13:47:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://t.me/alexmehacarmel/49171",
       "published_at": "2026-10-31T21:10:21+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.theguardian.com/world/2026/oct/31/oleshky-evacuees-reunite-with-families-after-truce-allows-crossing-into-ukraine",
       "published_at": "2026-10-31T19:17:22+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_580b5a3da2165815",
       "url": "https://www.bbc.co.uk/news/videos/cmy83w0jwznpo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-31T16:55:47+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, מחוז חרסון, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-07",
     "title": "קרב כרב\"מים בגזרת לימאן",
     "summary": "מפעילי רחפנים רוסים בלמו מתקפה של כלים רובוטיים קרקעיים (כרב\"מים) של צבא אוקראינה, והשמידו עשרות מהם לפי הטענה.",
     "axis": "גזרת לימאן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T15:21:15+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T15:21:15+00:00",
     "last_update_at": "2026-11-01T15:21:15+00:00",
     "what_is_not_verified": "לא מאומת האם כל 28 הכלים הושמדו באותה המתקפה בדיוק כפי שנטען.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49197",
       "published_at": "2026-11-01T15:21:15+00:00"
      }
     ],
     "places": [
      {
       "name": "לימאן, אוקראינה",
       "lat": 48.9801,
       "lon": 37.8168
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-08",
     "title": "תקיפת כלי שיט מול חופי אודסה",
     "summary": "משרד ההגנה הרוסי טען כי כוחותיו תקפו באמצעות כטב\"ם ספינה שהובילה מטענים עבור הצבא האוקראיני סמוך לאודסה.",
     "axis": "הים השחור / אודסה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T14:52:25+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-01T14:52:25+00:00",
     "last_update_at": "2026-11-01T14:52:25+00:00",
     "what_is_not_verified": "הפגיעה בכלי השיט ואופי המטען לא אומתו על ידי מקורות עצמאיים או אוקראיניים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2211547",
       "published_at": "2026-11-01T14:52:25+00:00"
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
     "id": "UKRAINE-11011654-09",
     "title": "יוזמות להגבלת אשרות כניסה לספורטאים מרוסיה ובלארוס",
     "summary": "פינלנד ושוודיה מקדמות חקיקה והנחיות באיחוד האירופי למניעת כניסת ספורטאים מרוסיה ומבלארוס לתחרויות בינלאומיות בתחומן.",
     "axis": "הזירה המדינית / סנקציות בינלאומיות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T14:34:00+00:00",
     "last_update_at": "2026-11-01T16:03:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060752/",
       "published_at": "2026-11-01T16:03:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/foreign-minister-sybiha-calls-for-russian-athlete-travel-ban-as-moscows-ice-hockey-return-risks-forcing-ukraine-out/",
       "published_at": "2026-11-01T15:50:02+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060700/",
       "published_at": "2026-11-01T14:34:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פא Falun, שוודיה",
       "lat": 60.607,
       "lon": 15.6323
      }
     ]
    },
    {
     "id": "UKRAINE-11011654-10",
     "title": "עמדות הקרמלין לגבי פורמט השיחות עם אוקראינה",
     "summary": "בכירי הקרמלין הצהירו כי שיחות המשא ומתן צריכות להתחיל במבנה משולש, טענו שפוטין אינו מסרב לפגוש את זלנסקי במוסקבה, ודרשו מאירופה לשנות את גישתה.",
     "axis": "הזירה המדינית / משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-01T10:15:11+00:00",
     "last_update_at": "2026-11-01T10:53:08+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211521",
       "published_at": "2026-11-01T10:53:08+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211519",
       "published_at": "2026-11-01T10:49:38+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211517",
       "published_at": "2026-11-01T10:15:11+00:00"
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
     "id": "UKRAINE-11011654-11",
     "title": "התרעת שגרירות ארצות הברית על איום ביטחוני במוסקבה",
     "summary": "שגרירות ארצות הברית פרסמה אזהרה מפני מתקפת טרור במוזיאון צאריצינו במוסקבה, והשירות הפדרלי הרוסי אישר כי קיבל את ההתרעה ונוקט צעדים.",
     "axis": "ביטחון פנים ברוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T16:43:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T16:43:32+00:00",
     "last_update_at": "2026-10-31T16:54:25+00:00",
     "what_is_not_verified": "טיב האיום המדויק וזהות הגורמים העומדים מאחוריו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_fsb",
       "url": "https://meduza.io/en/news/2026/10/31/u-s-embassy-warns-of-mass-casualty-threat-at-moscow-s-tsaritsyno-museum-fsb-confirms-receiving-the-warning",
       "published_at": "2026-10-31T16:43:32+00:00"
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
    "טענת משרד ההגנה הרוסי על פגיעה בכלי שיט צבאי באזור אודסה",
    "מספר הנפגעים והאבידות המדויק שכל צד מייחס ליריבו באוקטובר 2026",
    "ההיקף הכספי המדויק של הנזק שנגרם למערכות ההגנה האווירית הרוסיות",
    "מהימנות הדיווח על השמדת 28 כרב\"מים אוקראיניים בהתקפה יחידה בלימאן",
    "מהות האיום הביטחוני במוזיאון צאריצינו במוסקבה"
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
      "הגברת הלחץ הבינלאומי להשגת שלום באמצעות החלטות תקיפות ואותות נחרצים לרוסיה",
      "הטלת חרם ואיסור כניסה על ספורטאים מרוסיה ומבלארוס לאירופה"
     ],
     "inferred": [
      "פגיעה ביכולות התעשייה הצבאית והאנרגיה הרוסית לצמצום כושר הלחימה של האויב",
      "הרחבת השימוש במערכים בלתי מאוישים מגוונים לפיצוי על מגבלות כוח אדם"
     ],
     "forecast": [
      "המשך מאמצי תקיפת מטרות עומק כלכליות ותעשייתיות בשטח רוסיה",
      "פעילות דיפלומטית ענפה למניעת שיקום מעמדה הבינלאומי של מוסקבה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "ניהול שיחות בנושא אוקראינה תחילה בפורמט משולש",
      "דרישה מאירופה לזנוח את המטרה להביס את רוסיה כתנאי למשא ומתן"
     ],
     "inferred": [
      "הכרעת כושר העמידה האוקראיני לקראת החורף באמצעות שחיקת רשת החשמל והאנרגיה",
      "המשך כיבוש טריטוריאלי במזרח מעבר לגבולות חבל דונבאס"
     ],
     "forecast": [
      "התגברות התקיפות האוויריות על תשתיות חיוניות באוקראינה",
      "הצבת תנאי פתיחה נוקשים בכל ערוץ משא ומתן אפשרי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/videos/cmy83w0jwznpo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/31/oleshky-evacuees-reunite-with-families-after-truce-allows-crossing-into-ukraine",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/foreign-minister-sybiha-calls-for-russian-athlete-travel-ban-as-moscows-ice-hockey-return-risks-forcing-ukraine-out/",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/31/u-s-embassy-warns-of-mass-casualty-threat-at-moscow-s-tsaritsyno-museum-fsb-confirms-receiving-the-warning",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/01/8060700/",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2211517",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49197",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4180240-zelensky-reports-strikes-on-russian-defense-industry-plant-air-defense-assets-worth-70-million.html",
     "accessed_at": "2026-11-01T16:54:25+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-31T06:12:28+00:00",
  "changes": {
   "UKRAINE-11011654-01": {
    "kind": "possible",
    "prev": "מתקפת כטב\"מים רוסית על חרקוב",
    "score": 0.467
   },
   "UKRAINE-11011654-02": {
    "kind": "new"
   },
   "UKRAINE-11011654-03": {
    "kind": "new"
   },
   "UKRAINE-11011654-04": {
    "kind": "new"
   },
   "UKRAINE-11011654-05": {
    "kind": "possible",
    "prev": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק",
    "score": 0.467
   },
   "UKRAINE-11011654-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מבצע הומניטרי ופינוי אזרחים מהעיר אולשקי הכבושה",
    "score": 1.0
   },
   "UKRAINE-11011654-07": {
    "kind": "new"
   },
   "UKRAINE-11011654-08": {
    "kind": "possible",
    "prev": "פגיעה באוניית משא מדרום לאודסה",
    "score": 0.633
   },
   "UKRAINE-11011654-09": {
    "kind": "new"
   },
   "UKRAINE-11011654-10": {
    "kind": "new"
   },
   "UKRAINE-11011654-11": {
    "kind": "possible",
    "prev": "סגירת מערכת העיתון נובאיה גזטה במוסקבה",
    "score": 0.633
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
