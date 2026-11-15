/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-14T0045__yemen-202611140045.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-14T00:45:29+00:00",
   "window": {
    "from": "2026-11-13T00:45:29+00:00",
    "to": "2026-11-14T00:45:29+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "yemen-202611140045"
   },
   "summary": "בזירה התימנית נרשמת החרפה משמעותית בלחימה הקרקעית והאווירית בין תנועת החות'ים לבין כוחות ממשלת תימן והקואליציה בראשות סעודיה. החות'ים מרחיבים את תקיפותיהם לעומק שטח סעודיה ומפעילים לחץ צבאי גובר על מבואות העיר עדן וסביבות מצר באב אל-מנדב. במקביל, כוחות הממשלה מקימים קווי ביצור סביב עיר הבירה הזמנית ומדווחים על מכות אש נרחבות לבלימת ההתקדמות.",
   "fronts": [
    {
     "name": "מבואות עדן ודרום מערב תימן",
     "status": "התקדמות חות'ית לעבר רכסים שולטים והקמת מערכי הגנה וביצורים של כוחות הממשלה."
    },
    {
     "name": "מצר באב אל-מנדב וחוף ים סוף",
     "status": "שליטה חות'ית מוגברת בעקבות נסיגת כוחות הממשלה בספטמבר ולחימה מתמשכת."
    },
    {
     "name": "גבול תימן - סעודיה ועומק סעודיה",
     "status": "חידוש שיגורי כטב\"מים וטילים בליסטיים לעבר נמלי תעופה, מתקני נפט וריכוזי כוחות."
    },
    {
     "name": "תעז, לחג', מארב ואל-ג'וף",
     "status": "קרבות עזים, חילופי אש, הפגזות ופעילות צלפים לאורך קווי המגע."
    }
   ],
   "events": [
    {
     "id": "YEMEN-11140045-01",
     "title": "החות'ים טוענים שביצעו תקיפות של כטב\"מים וטילים נגד יעדים בסעודיה ובתוך תימן",
     "summary": "הדובר הצבאי של החות'ים מסר כי כוחותיהם שיגרו כטב\"מים לעבר שדה התעופה הבינלאומי בריאד ולעבר תחנת שאיבה של צינור נפט, וכן שיגרו טילים בליסטיים לעבר ריכוזי כוחות באזור ג'אזאן וביעדים שונים בתימן.",
     "axis": "חות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T20:58:21+00:00",
     "last_update_at": "2026-11-13T20:58:21+00:00",
     "what_is_not_verified": "סעודיה לא אישרה את טענות החות'ים בדבר הפגיעות והנזקים הנטענים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-they-attacked-riyadh-airport-and-saudi-oil-pipeline",
       "published_at": "2026-11-13T20:58:21+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'אזאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      },
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-11140045-02",
     "title": "כוחות ממשלת תימן מתבצרים במבואות עדן עקב התקדמות החות'ים",
     "summary": "גורמי צבא תימניים דיווחו על עבודות ביצור נרחבות צפונית ומערבית לעדן, הכוללות חפירת מנהרות והצבת שקי חול, נוכח השתלטות כוחות החות'ים על עמדות שולטות ורכסים בסמוך למצר באב אל-מנדב ולמחוז לחג'.",
     "axis": "החות'ים - ממשלת תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T17:24:41+00:00",
     "last_update_at": "2026-11-13T17:24:41+00:00",
     "what_is_not_verified": "היקף ההתקדמות המדויק ומספר הנפגעים בקרבות האחרונים בחוף הים האדום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/yemen-govt-forces-fortify-aden-defences-houthis-advance",
       "published_at": "2026-11-13T17:24:41+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      }
     ]
    },
    {
     "id": "YEMEN-11140045-03",
     "title": "נציב זכויות האדם של האו\"ם דורש להשיב את גופת איש צוות שמת בשבי החות'ים",
     "summary": "הנציב העליון לזכויות אדם דרש מהשלטונות החות'יים להעביר את גופתו של עובד האו\"ם שנפטר בנסיבות לא ברורות לאחר שהוחזק במעצר במשך יותר משנתיים, וקרא לשחרר עשרות אנשי סיוע שעדיין עצורים.",
     "axis": "החות'ים - קהילה בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T17:34:32+00:00",
     "last_update_at": "2026-11-13T17:47:08+00:00",
     "what_is_not_verified": "סיבת המוות והנסיבות המדויקות שבהן מת איש הצוות בשבי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/un-rights-chief-demands-houthis-return-body-yemeni-staff-member",
       "published_at": "2026-11-13T17:47:08+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/un-rights-chief-demands-houthis-return-body-staff-member-who-died",
       "published_at": "2026-11-13T17:34:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11140045-04",
     "title": "צבא תימן מדווח על תקיפת מאות מטרות חות'יות ומאות נפגעים",
     "summary": "גורמי הצבא התימני הודיעו על ביצוע מאות תקיפות נגד ריכוזי כוחות חות'יים, שבהן נהרגו ונפצעו מאות חמושים, בהם מפקדים.",
     "axis": "החות'ים - ממשלת תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T14:15:34+00:00",
     "last_update_at": "2026-11-13T14:15:34+00:00",
     "what_is_not_verified": "מספר התקיפות המדויק ומספר הנפגעים לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_74aa8cf558494285",
       "url": "https://www.sabanew.net/viewstory/155735",
       "published_at": "2026-11-13T14:15:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-11140045-05",
     "title": "קריאות בינלאומיות להגברת הלחץ על החות'ים והארכת עיצומי מועצת הביטחון",
     "summary": "משרד החוץ של צרפת קרא להגביר את הלחץ על החות'ים להפסקת תקיפותיהם באזור, במקביל להחלטת מועצת הביטחון של האו\"ם להאריך בשנה את משטר הסנקציות על תימן.",
     "axis": "החות'ים - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T16:54:12+00:00",
     "last_update_at": "2026-11-13T16:54:12+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/france-calls-more-pressure-houthis-end-attacks-saudi-arabia",
       "published_at": "2026-11-13T16:54:12+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "פגיעה ממשית בשדה התעופה המלכותי בריאד או בצינור הנפט מזרח-מערב של סעודיה.",
    "היקף הנפגעים והאבידות שצבא תימן טוען שהסב לחות'ים (מאות נפגעים ומאות גיחות).",
    "הדיווחים של החות'ים על גרימת נפגעים רבים בקרב כוחות תחת פיקוד סעודי בלחג' ואל-ג'וף."
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "פגיעה במתקנים אסטרטגיים ובשדות תעופה של סעודיה.",
      "תקיפת בסיסים ומחסני נשק של כוחות הקואליציה בתימן."
     ],
     "inferred": [
      "ביסוס אחיזה מוחלטת בנתיבי השיט בבאב אל-מנדב וניתוק קווי האספקה לעדן.",
      "הפעלת לחץ כלכלי וצבאי על סעודיה להפסקת התמיכה בממשלת תימן."
     ],
     "forecast": [
      "המשך ניסיונות התקדמות לעבר חופי מפרץ עדן ומבואות העיר.",
      "החרפת שיגורי הכטב\"מים לעבר יעדי תשתית סעודיים להרתעת הקואליציה."
     ]
    },
    {
     "actor": "ממשלת תימן והקואליציה",
     "declared": [
      "הגנה על מרחב עדן ובלימת המתקפות החות'יות באזור תעז ולחג'.",
      "הפעלת לחץ בינלאומי להטלת עיצומים והגדרת החות'ים כארגון טרור."
     ],
     "inferred": [
      "מניעת נפילת הבירה הזמנית עדן והימנעות מאיבוד מוחלט של הגישה לים.",
      "שמירה על תמיכה צבאית וכלכלית בינלאומית ומפרצית מול שחיקת הכוחות."
     ],
     "forecast": [
      "התבצרות ממושכת במבואות עדן תוך הסתמכות על תקיפות אוויר וסיוע סעודי.",
      "המשך חוסר היכולת לשוב ולכבוש שטחים שאבדו לאורך חוף ים סוף בטווח הקצר."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/un-rights-chief-demands-houthis-return-body-yemeni-staff-member",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/france-calls-more-pressure-houthis-end-attacks-saudi-arabia",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-forces-fortify-aden-defences-houthis-advance",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155735",
     "accessed_at": "2026-11-14T00:45:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T18:59:42+00:00",
  "changes": {
   "YEMEN-11140045-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת מתקני נפט בסעודיה על ידי החות'ים",
    "score": 0.817
   },
   "YEMEN-11140045-02": {
    "kind": "new"
   },
   "YEMEN-11140045-03": {
    "kind": "new"
   },
   "YEMEN-11140045-04": {
    "kind": "new"
   },
   "YEMEN-11140045-05": {
    "kind": "possible",
    "prev": "לחץ דיפלומטי סעודי לסיווג החות'ים כארגון טרור",
    "score": 0.467
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-15T0040__iran-202611150040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-15T00:40:22+00:00",
   "window": {
    "from": "2026-11-14T00:40:22+00:00",
    "to": "2026-11-15T00:40:22+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611150040"
   },
   "summary": "המתיחות בין איראן לבין ארה\"ב וישראל מתעצמת במוקדים ימיים וסביב סוגיית הגרעין. במצר הורמוז נפגעו מיכליות נפט ואיראן הודיעה על יירוט כטב\"ם אמריקני, לצד איומים איראניים בפגיעה בבסיסי ארה\"ב. במקביל, בישראל נערכים לפעולה אפשרית מול התחדשות תוכנית הגרעין האיראנית על רקע היעדר פיקוח בינלאומי, בעוד בארה\"ב מתלבטים האם לתקוף או לפנות לנתיב דיפלומטי בפסגות בינלאומיות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "הסלמה ימית הכוללת פגיעה במיכליות נפט, איומי מוקשים ויירוט כטב\"ם אמריקני"
    },
    {
     "name": "חזית הגרעין האיראני",
     "status": "חשש מאיבוד פיקוח סבא\"א על מתקן העשרה באיספהאן והיערכות ישראלית לפעולה"
    },
    {
     "name": "החזית המדינית והמודיעינית מול ארה\"ב",
     "status": "התרעות על כוונות פגיעה בבכירים אמריקנים וחילוקי דעות פוליטיים בוושינגטון סביב המשך הלחימה"
    },
    {
     "name": "חזית מדינות המפרץ",
     "status": "דרישה רשמית לפיצויים כספיים מאיראן על אלפי שיגורי טילים וכטב\"מים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11150040-01",
     "title": "פגיעה במיכליות נפט במצר הורמוז",
     "summary": "חיל הים של משמרות המהפכה טוען כי מספר מיכליות נפט נפגעו ממוקשים ימיים ועלו באש במצר הורמוז עקב שייט בנתיבים אסורים.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T12:27:12+00:00",
     "last_update_at": "2026-11-14T23:46:29+00:00",
     "what_is_not_verified": "האם מדובר במוקשים ימיים כפי שטוענת איראן או בתקיפות ישירות ומבצע תודעה, ומספרן המדויק של המיכליות שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/irans-navy-says-three-tankers-fire-after-hitting-mines-hormuz",
       "published_at": "2026-11-14T23:46:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-says-two-oil-tankers-hit-mines-strait-hormuz",
       "published_at": "2026-11-14T22:20:55+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1388393",
       "published_at": "2026-11-14T22:00:53+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hktw00kl0zl",
       "published_at": "2026-11-14T16:13:25+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/oil-tanker-fire-strait-hormuz-iran-navy",
       "published_at": "2026-11-14T12:27:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-02",
     "title": "יירוט כלי טיס בלתי מאויש אמריקני מעל האי קשם",
     "summary": "משמרות המהפכה באיראן הודיעו כי יירטו והפילו כטב\"ם אמריקני מסוג פרדטור מעל האי קשם באמצעות מערכת הגנה אווירית מתקדמת.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T12:33:51+00:00",
     "last_update_at": "2026-11-14T12:33:51+00:00",
     "what_is_not_verified": "אין אימות או אישור רשמי מצד צבא ארה\"ב על הפלת הכטב\"ם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-said-it-intercepted-us-mq-1-predator-drone-over-qeshm-island",
       "published_at": "2026-11-14T12:33:51+00:00"
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
     "id": "IRAN-11150040-03",
     "title": "העברת מודיעין ישראלי לארה\"ב על כוונות פגיעה בבכירי הבית הלבן",
     "summary": "המוסד העביר לסוכנות הביון המרכזית בארה\"ב מידע מודיעיני אודות תוכנית איראנית לפגוע בנשיא טראמפ ובבכירי ממשלו, מה שהוביל להגברת אבטחה סביבם.",
     "axis": "ישראל-איראן-ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T18:03:33+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T18:03:33+00:00",
     "last_update_at": "2026-11-14T18:03:33+00:00",
     "what_is_not_verified": "דיווח המבוסס על גורמים בכירים ללא הצגת מסמכים או אישור פומבי רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21850141",
       "published_at": "2026-11-14T18:03:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-04",
     "title": "חשש סבא\"א ממתקן העשרה איראני באיספהאן",
     "summary": "סבא\"א מביעה דאגה בדו\"ח חשאי בנוגע למתקן העשרה באיספהאן שמיקומו המדויק ומצבו אינם ידועים לה, ואינה יכולה לקבוע שלא הוסט ממנו חומר גרעיני.",
     "axis": "גרעין איראני",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T16:13:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T16:13:25+00:00",
     "last_update_at": "2026-11-14T17:12:55+00:00",
     "what_is_not_verified": "מיקומו המדויק ומצבו של המתקן ומצב האורניום המועשר שבו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21850341",
       "published_at": "2026-11-14T17:12:55+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hktw00kl0zl",
       "published_at": "2026-11-14T16:13:25+00:00"
      }
     ],
     "places": [
      {
       "name": "איספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    },
    {
     "id": "IRAN-11150040-05",
     "title": "איום טלוויזיוני באיראן בטיל מותאם נגד בסיסים באירופה",
     "summary": "הטלוויזיה הממלכתית של איראן שידרה אזהרה לפיה גרסאות מותאמות של הטיל ח'רמשהר יוכלו לפגוע בבסיסים צבאיים של ארה\"ב באירופה, וציינה במפורש בסיס בבריטניה.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T19:04:34+00:00",
     "last_update_at": "2026-11-14T19:46:06+00:00",
     "what_is_not_verified": "היכולת המבצעית בפועל של הטיל המותאם להגיע ליעדים אלה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133648",
       "published_at": "2026-11-14T19:46:06+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611141458",
       "published_at": "2026-11-14T19:04:34+00:00"
      }
     ],
     "places": [
      {
       "name": "רפא\"ף פיירפורד, בריטניה",
       "lat": 51.6851,
       "lon": -1.7865
      }
     ]
    },
    {
     "id": "IRAN-11150040-06",
     "title": "דרישת מדינות המפרץ לפיצויים מאיראן במועצת הביטחון",
     "summary": "מועצת שיתוף הפעולה של מדינות המפרץ פנתה למועצת הביטחון בדרישה לחייב את איראן לשלם פיצויים על נזקי אלפי טילים וכטב\"מים ששוגרו מאז פברואר, ולהכלילן בכל מו\"מ.",
     "axis": "איראן-מדינות המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T14:34:56+00:00",
     "last_update_at": "2026-11-14T14:34:56+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49577",
       "published_at": "2026-11-14T14:34:56+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-07",
     "title": "הכחשת משמרות המהפכה לתקיפות סייבר בצרפת והאשמת ישראל",
     "summary": "דובר משמרות המהפכה דחה את האשמות צרפת לגבי חבלה במערכות קירור במרכולים, וטען כי מדובר בפרובוקציה ישראלית שנועדה להשחיר את איראן באירופה.",
     "axis": "איראן-אירופה-ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T20:08:15+00:00",
     "last_update_at": "2026-11-14T20:39:02+00:00",
     "what_is_not_verified": "זהות מבצעי מתקפת הסייבר בצרפת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_fcb05e069e954cce",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irans-irgc-denies-role-french-supermarket-cyberattacks",
       "published_at": "2026-11-14T20:39:02+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_fcb05e069e954cce",
       "url": "https://en.irna.ir/news/86321812/General-Mohebbi-Rdiculous-claim-of-attack-on-cooling-systems",
       "published_at": "2026-11-14T20:08:15+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11150040-08",
     "title": "הדחת מפקדי ספינות מלחמה של צבא ארה\"ב בזירת איראן",
     "summary": "הצי האמריקני הדיח מפקדים בכירים, בהם מפקדת משחתת שפעלה לתמיכה במבצעים מול איראן ומפקדי צוללת תקיפה גרעינית, בעילה של אובדן אמון ותאונות.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T16:34:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:34:57+00:00",
     "last_update_at": "2026-11-14T16:34:57+00:00",
     "what_is_not_verified": "הקשר הישיר המלא בין ההדחות לבין הפעילות המבצעית מול איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/loss-confidence-us-navy-fires-commanders-warships-deployed-against-iran",
       "published_at": "2026-11-14T16:34:57+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר המיכליות המדויק שנפגעו במצר הורמוז והאם מדובר במוקשים ימיים או בפגיעות ישירות",
    "טענת איראן בדבר יירוט מוצלח של כטב\"ם אמריקני מעל האי קשם",
    "מיקומו המדויק ומצבו של מתקן העשרת האורניום האיראני באיספהאן",
    "מידת המוכנות של טילי ח'רמשהר לפגוע בבסיסים באירופה ובבריטניה",
    "כוונות ממשיות ומעשיות של איראן להתנקש בנשיא טראמפ ובבכירי ממשלו"
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הרתעת כלי שיט ממעבר בנתיבים לא מורשים במצר הורמוז",
      "יירוט כלי טיס זרים החודרים לתחומה ומניעת משימות סיור",
      "הכחשת מעורבות בחבלות סייבר באירופה וייחוסן לישראל"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי עולמי באמצעות פגיעה בחופש השיט במצר הורמוז",
      "קידום תוכנית הגרעין והרחקת פיקוח בינלאומי תוך יצירת מרחב עמימות"
     ],
     "forecast": [
      "המשך הגבלות ופגיעות ממוקדות בשיט במצר הורמוז להעלאת מחירי האנרגיה",
      "האצת השיח הפנימי והמעשי לקראת פריצת דרך בתוכנית הגרעין"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעה מוחלטת מאיראן להגיע לנשק גרעיני",
      "הסרת האיום הקיומי הנשקף מחידוש פרויקט הגרעין"
     ],
     "inferred": [
      "הכשרת הקרקע המדינית והצבאית לתקיפה עצמאית באיראן ללא תלות בארה\"ב",
      "הפעלת לחץ מודיעיני ופוליטי על הממשל האמריקני שלא להגיע להסדר עם טהרן"
     ],
     "forecast": [
      "המשך עדכון בנק המטרות והגברת הכוננות לפעולה צבאית באיראן",
      "העמקת התיאום המודיעיני עם בעלות ברית מערביות נגד כוונות תקיפה איראניות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "תגבור מערכות הגנה לישראל והגנה על כוחות אמריקניים במרחב",
      "בחינת אפשרות להימנע מתקיפות באיראן אם לא יהיו פרובוקציות חדשות"
     ],
     "inferred": [
      "ניסיון להכיל את העימות מול איראן כדי להתמקד בפסגות בינלאומיות וביחסים מול סין ורוסיה",
      "מאבק פוליטי פנימי בין חתירה לסיום המלחמה לבין הפעלת לחץ מקסימלי"
     ],
     "forecast": [
      "המשך הימנעות מתקיפה יזומה רחבה באיראן כל עוד לא ייחצו קווים אדומים ישירים",
      "העלאת סוגיית איראן והפיקוח על הגרעין במסגרת מגעים דיפלומטיים מול המעצמות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/irans-navy-says-three-tankers-fire-after-hitting-mines-hormuz",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611141458",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86321812/General-Mohebbi-Rdiculous-claim-of-attack-on-cooling-systems",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21850341",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1388393",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/loss-confidence-us-navy-fires-commanders-warships-deployed-against-iran",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133648",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49577",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hktw00kl0zl",
     "accessed_at": "2026-11-15T00:40:22+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T06:56:57+00:00",
  "changes": {
   "IRAN-11150040-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת מוקשים במכליות נפט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-11150040-02": {
    "kind": "new"
   },
   "IRAN-11150040-03": {
    "kind": "new"
   },
   "IRAN-11150040-04": {
    "kind": "possible",
    "prev": "התרעת סבא\"א בנוגע לאתר גרעין בלתי מפוקח באספהאן",
    "score": 0.633
   },
   "IRAN-11150040-05": {
    "kind": "new"
   },
   "IRAN-11150040-06": {
    "kind": "new"
   },
   "IRAN-11150040-07": {
    "kind": "new"
   },
   "IRAN-11150040-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-14T1642__ukraine-202611141642.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-14T16:42:29+00:00",
   "window": {
    "from": "2026-11-13T16:42:29+00:00",
    "to": "2026-11-14T16:42:29+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611141642"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת תוך כדי תקיפות אוויריות והתקפות רחפנים הדדיות בעומק שטח רוסיה ובחזיתות השונות באוקראינה. במקביל, מתנהלים מגעים דיפלומטיים בינלאומיים סביב אפשרות לפסגות בין מעצמות ודיונים על עתיד הביטחון באירופה וויתורים טריטורιαליים.",
   "fronts": [
    {
     "name": "החזית המזרחית",
     "status": "פעילה עם קרבות ולחימה מקומית"
    },
    {
     "name": "החזית הדרומית",
     "status": "פעילה עם תקיפות כטב\"מים וארטילריה"
    },
    {
     "name": "הים השחור",
     "status": "פעיל עם תקיפות על כלי שיט ותשתיות ימיות"
    },
    {
     "name": "עומק רוסיה",
     "status": "פעיל תחת מתקפות רחפנים אוקראיניות על תשתיות אנרגיה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11141642-01",
     "title": "פסגה משולשת מתוכננת בין רוסיה, סין וארצות הברית",
     "summary": "דובר הקרמלין הודיע כי תתקיים פגישה משולשת בין נשיאי רוסיה, סין וארצות הברית בשנג'ן שבסין.",
     "axis": "דיפלומטיה ומגעים מדיניים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T16:01:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:01:00+00:00",
     "last_update_at": "2026-11-14T16:34:29+00:00",
     "what_is_not_verified": "האם סוגיית המלחמה באוקראינה תעלה בפגישה המשולשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49582",
       "published_at": "2026-11-14T16:34:29+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133635",
       "published_at": "2026-11-14T16:29:04+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/14/8062880/",
       "published_at": "2026-11-14T16:01:00+00:00"
      }
     ],
     "places": [
      {
       "name": "שנג'ן, סין",
       "lat": 22.5446,
       "lon": 114.0545
      }
     ]
    },
    {
     "id": "UKRAINE-11141642-02",
     "title": "תקיפת ספינת מששא מול חופי רומניה",
     "summary": "ספינת מששא נפגעה מכטב\"ם במים הטריטוריאליים של רומניה ליד ספינטו גאורגה.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T16:05:32+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:05:32+00:00",
     "last_update_at": "2026-11-14T16:05:32+00:00",
     "what_is_not_verified": "קשר בין טיסת מטוס סיור איטלקי לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49580",
       "published_at": "2026-11-14T16:05:32+00:00"
      }
     ],
     "places": [
      {
       "name": "ספינטו גאורגה, רומניה",
       "lat": 45.866,
       "lon": 25.7865
      }
     ]
    },
    {
     "id": "UKRAINE-11141642-03",
     "title": "הרוגים ופצועים בתקיפות באזור זפוריז'יה",
     "summary": "תקיפות רוסיות בזפוריז'יה ובקוּשוּהוּם גרמו להרוגים ולעשרות פצועים, כולל פגיעה במבנים.",
     "axis": "החזית הדרומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T10:43:28+00:00",
     "last_update_at": "2026-11-14T15:52:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184708-injury-toll-after-russian-attack-on-zaporizhzhia-rises-to-22.html",
       "published_at": "2026-11-14T15:52:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/14/8062868/",
       "published_at": "2026-11-14T14:16:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4184669-russians-strike-zaporizhzhia-residential-building-educational-institution-damaged-15-injured.html",
       "published_at": "2026-11-14T12:19:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/at-least-7-killed-80-injured-in-russian-attacks-across-ukraine-zaporizhzhia-among-worst-hit/",
       "published_at": "2026-11-14T10:43:28+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      },
      {
       "name": "קוּשוּהוּם, אוקראינה",
       "lat": 47.7154,
       "lon": 35.2072
      }
     ]
    },
    {
     "id": "UKRAINE-11141642-04",
     "title": "תקיפת צוללת או כטב\"ם אוקראיני על מתקן נפט ברוסיה",
     "summary": "שירות הביטחון של אוקראינה תקף באמצעות רחפנים ארוכי טווח את מתקן הצינורות סמרה ברוסיה.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T13:29:02+00:00",
     "last_update_at": "2026-11-14T13:56:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/14/8062866/",
       "published_at": "2026-11-14T13:56:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-hits-key-russian-oil-hub-military-airbase-in-latest-long-range-strikes/",
       "published_at": "2026-11-14T13:29:02+00:00"
      }
     ],
     "places": [
      {
       "name": "פרוסבט, רוסיה",
       "lat": 55.5691,
       "lon": 65.0768
      },
      {
       "name": "סמרה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    },
    {
     "id": "UKRAINE-11141642-05",
     "title": "בולגריה מפסיקה אספקת נשק ותחמושת לאוקראינה",
     "summary": "ראש ממשלת בולגריה הודיע כי המדינה מפסיקה לספק נשק ותחמושת ממאגריה הצבאיים לאוקראינה.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T12:55:21+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T12:55:21+00:00",
     "last_update_at": "2026-11-14T13:28:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4184679-bulgaria-halts-arms-and-ammunition-supplies-to-ukraine-from-its-military-stockpiles.html",
       "published_at": "2026-11-14T13:28:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2218193",
       "published_at": "2026-11-14T12:55:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11141642-06",
     "title": "הגבלות על מערכת סטארשילד באוקראינה",
     "summary": "הנשיא זלנסקי האשים את חברת ספייס אקס בהטלת מגבלות מהירות על מערכת הלוויינים הצבאית סטארשילד בשטחי החזית.",
     "axis": "החזית הטכנולוגית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T02:06:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T02:06:00+00:00",
     "last_update_at": "2026-11-14T12:30:32+00:00",
     "what_is_not_verified": "האם המניעים של ספייס אקס פוליטיים או טכניים לחלוטין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-says-starshield-restrictions-give-russia-more-room-to-attack-accuses-spacex-of-treating-occupied-territories-as-not-ours/",
       "published_at": "2026-11-14T12:30:32+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/14/spacex-not-honest-slowing-starshield-elon-musk-volodymyr-zelenskyy",
       "published_at": "2026-11-14T11:05:33+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/14/ukraine-war-briefing-zelenskyy-says-starshield-restrictions-continue-on-entire-front-line",
       "published_at": "2026-11-14T02:06:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "דיווחים ברוסיה על הסרת האיסור הלא רשמי על חיסול זלנסקי וצמרת הצבא האוקראיני",
    "דיווחים בתקשורת הגרמנית על דרישה רוסית לנסיגת פינלנד מנאט\"ו וויתורים טריטוריאליים נרחבים במסגרת שיחות שלום",
    "הצעה אמריקאית לכאורה לוותר על הדונבאס בתמורה לחברות בנאט\"ו לאוקראינה"
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
     "value": 1.1052,
     "unit": "USD",
     "change_pct": -0.26,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "שינוי אדריכלות הביטחון באירופה",
      "בלימת התרחבות נאט\"ו"
     ],
     "inferred": [
      "השתלטות על שטחים נוספים באוקראינה ופגיעה בתשתיות אנרגיה וייצוא",
      "כפיית הסדר מדיני בתנאים רוסיים דרך משא ומתן עקיף עם מעצמות"
     ],
     "forecast": [
      "המשך לחץ צבאי ותקיפות אוויריות על ערי אוקראינה",
      "ניצול מפגשים דיפלומטיים בינלאומיים לחיזוק מעמדה"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונותה והשבת כל שטחי המדינה",
      "קבלת סיוע צבאי מתקדם הכולל הגנה אווירית ומטוסי קרב"
     ],
     "inferred": [
      "מניעת הגעה להסכמות בינלאומיות מעל ראשה שיכללו ויתורים טריטוריאליים",
      "שיבוש שרשרת האספקה והאנרגיה הרוסית באמצעות תקיפות עומק"
     ],
     "forecast": [
      "המשך דרישה למעורבות ישירה בכל דיון על עתידה המדיני",
      "הישענות על סיוע מערבי למרות קשיים נקודתיים באספקת ציוד"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/14/ukraine-war-briefing-zelenskyy-says-starshield-restrictions-continue-on-entire-front-line",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/zelensky-says-starshield-restrictions-give-russia-more-room-to-attack-accuses-spacex-of-treating-occupied-territories-as-not-ours/",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/14/8062866/",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2218193",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133635",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49580",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4184679-bulgaria-halts-arms-and-ammunition-supplies-to-ukraine-from-its-military-stockpiles.html",
     "accessed_at": "2026-11-14T16:42:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T00:40:39+00:00",
  "changes": {
   "UKRAINE-11141642-01": {
    "kind": "new"
   },
   "UKRAINE-11141642-02": {
    "kind": "new"
   },
   "UKRAINE-11141642-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "פגיעה רוסית בזפוריז'יה עם עשרות פצועים",
    "score": 0.817
   },
   "UKRAINE-11141642-04": {
    "kind": "possible",
    "prev": "תקיפת כטב\"ם על בית חולים בקייב",
    "score": 0.467
   },
   "UKRAINE-11141642-05": {
    "kind": "possible",
    "prev": "פולין סירבה לממן נשק אמריקאי לאוקראינה במסגרת קרן ייעודית",
    "score": 0.467
   },
   "UKRAINE-11141642-06": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-15T0049__north-202611150049.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-15T00:49:07+00:00",
   "window": {
    "from": "2026-11-14T00:49:07+00:00",
    "to": "2026-11-15T00:49:07+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611150049"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית ואיסופית של ישראל בדרום לבנון ובדרום סוריה, הכוללת תקיפות מהאוויר ועבודות הנדסיות במרחב הגבול. במקביל, השלטונות בדמשק ובביירות מתמודדים עם אתגרי פנים מורכבים הכוללים פיגועי תופת, הברחות נשק ומשבר פליטים. ברמה האזורית, טורקיה מחזקת בריתות ביטחוניות בעלות זיקה לסוריה, בעוד גורמים בישראל מתנים הסדרים עתידיים בהרחקת כוחותיה מהזירה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "חיכוך צבאי מתמשך הכולל תקיפות אוויריות ואיסוף מודיעיני ישראלי מול לחצים להסדרת מנדט יוניפי\"ל ויישום החלטה 1701"
    },
    {
     "name": "דמשק ודרום סוריה",
     "status": "חוסר יציבות פנימי ופיגועי תופת לצד פעילות קרקעית הנדסית של ישראל בגבול דרעא"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "מאמצי אכיפה של צבא לבנון נגד מחסני נשק בפרברי ביירות ברקע משבר כלכלי ואתגרי פליטים"
    },
    {
     "name": "מעורבות טורקיה בזירה הצפונית",
     "status": "העמקת תיאום והסכמי הגנה אזוריים הנוגעים לסוריה מול דרישות ישראליות לסילוק כוחותיה מהמרחב הסורי"
    }
   ],
   "events": [
    {
     "id": "NORTH-11150049-01",
     "title": "פיצוץ מכונית תופת בפרבר של דמשק",
     "summary": "מטען שהוטמן במכונית התפוצץ בעיר ג'רמאנא שבפרברי דמשק, וגרם למותם של אב ובתו ולפציעת אדם נוסף, בעוד כוחות הביטחון פתחו בחקירה.",
     "axis": "דמשק ודרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T18:51:01+00:00",
     "last_update_at": "2026-11-14T22:43:12+00:00",
     "what_is_not_verified": "זהות המבצעים המדויקת לא אומתה, אם כי בעבר יוחסו פיגועים דומים לתאי המדינה האסלאמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/11/14/explosion-near-syrias-capital-kills-father-and-child?traffic_source=rss",
       "published_at": "2026-11-14T22:43:12+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/car-bomb-near-syria-capital-kills-two-people-including-child",
       "published_at": "2026-11-14T21:14:41+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/11/14/deadly-car-bomb-blast-kills-two-near-syrias-capital?traffic_source=rss",
       "published_at": "2026-11-14T19:46:36+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/2-killed-including-girl-in-car-blast-in-syria-s-rural-damascus/4125396",
       "published_at": "2026-11-14T18:51:01+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'רמאנא, סוריה",
       "lat": 33.4864,
       "lon": 36.3483
      }
     ]
    },
    {
     "id": "NORTH-11150049-02",
     "title": "תקיפה אווירית ישראלית בדרום לבנון",
     "summary": "כלי טיס של חיל האוויר הישראלי ביצע תקיפה בפאתי הכפר קנטרה לכיוון ואדי אל-חג'יר שבדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:28:21+00:00",
     "last_update_at": "2026-11-14T16:28:21+00:00",
     "what_is_not_verified": "היקף הנפגעים או הנזק המדויק בתקיפה לא פורט בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_86b7b6be3b90edf4",
       "url": "https://english.almanar.com.lb/article/150897/",
       "published_at": "2026-11-14T16:28:21+00:00"
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
     "id": "NORTH-11150049-03",
     "title": "פשיטת צבא לבנון על מחסן אמצעי לחימה בפרבר הדרומי של ביירות",
     "summary": "כוחות צבא לבנון ערכו מבצע ביטחוני מיוחד באזור ע'בירי, פשטו על מחסן אמצעי לחימה, החרימו כמות גדולה של נשק ותחמושת ועצרו חשוד אחד לחקירה.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T16:17:37+00:00",
     "last_update_at": "2026-11-14T16:17:37+00:00",
     "what_is_not_verified": "ההודעה הרשמית של צבא לבנון לא ציינה לאיזה ארגון השתייכו אמצעי הלחימה שנתפסו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6fc8f5206f6fae30",
       "url": "https://www.newarab.com/news/lebanese-army-says-seized-arms-depot-southern-beirut-suburb",
       "published_at": "2026-11-14T16:17:37+00:00"
      }
     ],
     "places": [
      {
       "name": "ע'בירי, לבנון",
       "lat": 33.8598,
       "lon": 35.5057
      }
     ]
    },
    {
     "id": "NORTH-11150049-04",
     "title": "שריפה כילתה מחנה פליטים סורים בבקעת הלבנון",
     "summary": "דליקה שפרצה במחנה פליטים סורים בבר אליאס החריבה עשרות אוהלים והותירה כחמש מאות בני אדם ללא קורת גג, ללא נפגעים בנפש.",
     "axis": "הזירה הפנים-לבנונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T12:34:16+00:00",
     "last_update_at": "2026-11-14T23:12:18+00:00",
     "what_is_not_verified": "הגורם לפרוץ השריפה במחנה לא צוין.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/fire-destroys-syrian-refugee-camp-in-lebanon-leaving-nearly-500-homeless/4125459",
       "published_at": "2026-11-14T23:12:18+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967994/fire-breaks-out-at-syrian-refugee-camp-in-bar-elias-video/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967994",
       "published_at": "2026-11-14T12:34:16+00:00"
      }
     ],
     "places": [
      {
       "name": "בר אליאס, לבנון",
       "lat": 33.7744,
       "lon": 35.9044
      }
     ]
    },
    {
     "id": "NORTH-11150049-05",
     "title": "עבודות הנדסיות של צה\"ל לסלילת דרך בדרום סוריה",
     "summary": "יחידות הנדסה של צה\"ל החלו בעבודות לפינוי שטח ולהקמת דרך חדשה באזור ואדי סיחאן בסמוך לכפר עבידין במערב מחוז דרעא.",
     "axis": "דמשק ודרום סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T12:59:12+00:00",
     "last_update_at": "2026-11-14T12:59:12+00:00",
     "what_is_not_verified": "המידע נסמך על מקור רוסי בלבד וטרם התקבל אישור רשמי מגורמים ישראליים או סוריים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49576",
       "published_at": "2026-11-14T12:59:12+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11150049-06",
     "title": "הפעלת טייסת כטב\"מים ייעודית של השב\"כ בדרום לבנון",
     "summary": "טייסת כלי טיס בלתי מאוישים שהוקמה בשירות הביטחון הכללי פועלת באופן מבצעי עצמאי בדרום לבנון, לצד פעילותה ברצועת עזה וביהודה ושומרון.",
     "axis": "דרום לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T17:45:43+00:00",
     "last_update_at": "2026-11-14T17:45:43+00:00",
     "what_is_not_verified": "היקף הפעילות המדויק וסוגי הכלים המופעלים בזירה הלבנונית נותרו חסויים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21850469",
       "published_at": "2026-11-14T17:45:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11150049-07",
     "title": "טורקיה וקטאר חתמו על הסכם הגנה הדדית עם התייחסות לסוריה",
     "summary": "באיסטנבול נחתם הסכם הגנה משותף בין טורקיה לקטאר הכולל התחייבות לסיוע הדדי במקרה של תקיפה חיצונית ועמדות מתואמות בנושאי ביטחון אזורי וסוריה.",
     "axis": "מעורבות טורקיה בזירה הצפונית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T06:55:03+00:00",
     "last_update_at": "2026-11-14T15:28:52+00:00",
     "what_is_not_verified": "פרטי התיאום המבצעי המדויקים בסוריה לא פורטו בהצהרה המשותפת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95030",
       "published_at": "2026-11-14T15:28:52+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/politics/turkiye-qatar-reaffirm-defense-ties-call-for-diplomacy-on-iran/4124881",
       "published_at": "2026-11-14T06:55:03+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      }
     ]
    },
    {
     "id": "NORTH-11150049-08",
     "title": "הצהרת נשיא לבנון בנוגע להחלטה 1701 ומנדט יוניפי\"ל",
     "summary": "נשיא לבנון הדגיש בפני סגנית מזכ\"ל האו\"ם כי חידוש מנדט כוח יוניפי\"ל הוא עדיפות עליונה, וכי החלטה 1701 חייבת להישאר הבסיס החוקי לכל הסדר ביטחוני בדרום המדינה.",
     "axis": "דרום לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T08:16:26+00:00",
     "last_update_at": "2026-11-14T08:16:26+00:00",
     "what_is_not_verified": "טרם סוכם מנגנון חלופי רשמי למניעת ואקום ביטחוני במידה והמנדט ישתנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967967/aoun-unifils-mandate-must-be-renewed-with-resolution-1701-remaining-th/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967967",
       "published_at": "2026-11-14T08:16:26+00:00"
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
     "id": "NORTH-11150049-09",
     "title": "דיווח על מגעים להסדר ביטחוני ישראלי מול סוריה בדרישה לסילוק כוחות זרים",
     "summary": "פורסם כי בישראל נבחנת אפשרות להסכם ביטחוני מול דמשק שיכלול אזור מפורז בדרום סוריה וחזרה להסכם 1974 למעט מוצב החרמון, לצד דרישה לפינוי כוחות טורקיים ורוסיים מהמדינה.",
     "axis": "דמשק ודרום סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T04:07:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T04:07:41+00:00",
     "last_update_at": "2026-11-14T04:07:41+00:00",
     "what_is_not_verified": "המגעים מול גורמים אמריקניים נסמכים על הדלפה בעיתונות הלבנונית ולא אומתו רשמית בירושלים או בדמשק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49572",
       "published_at": "2026-11-14T04:07:41+00:00"
      }
     ],
     "places": [
      {
       "name": "הר החרמון, סוריה",
       "lat": 33.4169,
       "lon": 35.8564
      }
     ]
    }
   ],
   "not_verified": [
    "זהות האחראים לפיצוץ מכונית התופת בג'רמאנא שבסוריה טרם נקבעה באופן רשמי.",
    "הדיווח הרוסי על אודות סלילת ציר חדש בידי כוחות הנדסה של צה\"ל באזור דרעא בסוריה לא אושר בידי ישראל.",
    "ההשתייכות הארגונית של מחסן הנשק והתחמושת שנתפס בפרבר הדרומי של ביירות לא צוינה בהודעת צבא לבנון.",
    "הדיווחים על יוזמה ישראלית להסכם ביטחוני מול דמשק והתנייתו בנסיגת כוחות טורקיה נשענים על מקורות תקשורתיים בלבד."
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
     "value": 3.2107,
     "unit": "ILS",
     "change_pct": 0.23,
     "source_id": "src_ecb",
     "as_of": "2026-11-13T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "סיכול התעצמות ואיומי טרור בקרבת הגבולות הצפוניים.",
      "שמירה על חופש פעולה ביטחוני עצמאי של גופי המודיעין וצה\"ל."
     ],
     "inferred": [
      "יצירת מרחב אבטחה מפורז מנשק כבד בדרום סוריה תוך שימור נקודות תצפית שולטות בחרמון.",
      "בלימת ההשפעה והנוכחות הצבאית של טורקיה ורוסיה בסוריה."
     ],
     "forecast": [
      "המשך פעילות איסוף באמצעות כטב\"מים ותקיפות מדויקות נגד התארגנויות חשודות בדרום לבנון."
     ]
    },
    {
     "actor": "לבנון (הממשל וצבא לבנון)",
     "declared": [
      "הבטחת הארכת המנדט של כוח יוניפי\"ל ושימור החלטה 1701 כבסיס לכל הסדר ביטחוני.",
      "הכפפת אמצעי הלחימה במדינה לסמכות בלעדית של מוסדות המדינה."
     ],
     "inferred": [
      "ריסון השפעתו הצבאית והעצמאית של חזבאללה ללא גרימת מלחמת אזרחים פנימית.",
      "הפחתת הסיכון לעימות ישיר עם ישראל במטרה לקדם שיקום כלכלי."
     ],
     "forecast": [
      "המשך פשיטות נקודתיות של הצבא על מצבורי תחמושת לצד הימנעות מעימות חזיתי כולל."
     ]
    },
    {
     "actor": "סוריה (שלטון המעבר)",
     "declared": [
      "חקירת אירועי הטרור, השבת היציבות הביטחונית ועידוד כניסת אזרחים זרים ותיירות.",
      "הפעלת כוחות ביטחון פנים להגנה על ריכוזי אוכלוסייה."
     ],
     "inferred": [
      "בלימת התעוררות תאי המדינה האסלאמית לאחר חילופי השלטון בדמשק.",
      "מניעת חיכוך צבאי ישיר עם ישראל במרחב הגבול הדרומי."
     ],
     "forecast": [
      "המשך התמודדות מורכבת עם פיגועי חבלה בפרברי הבירה ומאמץ לייצב את מעברי הגבול."
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "חיזוק קשרי ההגנה והסחר עם קטאר וגיבוש עמדות משותפות בנושאי ביטחון אזורי וסוריה.",
      "התנגדות לפגיעה באוכלוסייה אזרחית במרחב המזרח התיכון."
     ],
     "inferred": [
      "שמירה על אחיזה ומעמד השפעה מכריע בסוריה למרות לחצים מדיניים לנסיגת כוחותיה.",
      "ביצור מעמדה ככוח אזורי מוביל באמצעות בריתות הגנה הדדיות."
     ],
     "forecast": [
      "סירוב לסגת מהשטחים שבשליטתה בסוריה ללא ערבויות ביטחוניות לאינטרסים שלה."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/11/14/deadly-car-bomb-blast-kills-two-near-syrias-capital?traffic_source=rss",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/150897/",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/politics/turkiye-qatar-reaffirm-defense-ties-call-for-diplomacy-on-iran/4124881",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21850469",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/967967/aoun-unifils-mandate-must-be-renewed-with-resolution-1701-remaining-th/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967967",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanese-army-says-seized-arms-depot-southern-beirut-suburb",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49572",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95030",
     "accessed_at": "2026-11-15T00:49:07+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-14T07:02:45+00:00",
  "changes": {
   "NORTH-11150049-01": {
    "kind": "new"
   },
   "NORTH-11150049-02": {
    "kind": "new"
   },
   "NORTH-11150049-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תפיסת מחסן אמצעי לחימה בפרברי ביירות",
    "score": 0.65
   },
   "NORTH-11150049-04": {
    "kind": "new"
   },
   "NORTH-11150049-05": {
    "kind": "possible",
    "prev": "העברת נפט עיראקי דרך שטח סוריה",
    "score": 0.467
   },
   "NORTH-11150049-06": {
    "kind": "possible",
    "prev": "ירי ארטילרי ישראלי לעבר עיירות בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11150049-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "חתימת הסכם הגנה הדדי בין טורקיה לקטר",
    "score": 1.0
   },
   "NORTH-11150049-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מגעים דיפלומטיים להחלפת כוח יוניפי\"ל בדרום לבנון",
    "score": 0.817
   },
   "NORTH-11150049-09": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "דיווח על מתווה ביטחוני בין ישראל לדמשק ביוזמת איזנקוט",
    "score": 1.0
   }
  }
 }
};
