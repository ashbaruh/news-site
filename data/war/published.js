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
  "draft": "drafts/iran/2026-11-14T0656__iran-202611140656.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-14T06:56:57+00:00",
   "window": {
    "from": "2026-11-13T06:56:57+00:00",
    "to": "2026-11-14T06:56:57+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611140656"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל מתאפיין בפגיעה קשה בחופש השיט ובמתיחות חריפה סביב מצר הורמוז, שם נרשמו פגיעות מוקשים במכליות וירידה משמעותית בתנועה הימית. במקביל להפעלת לחץ כלכלי כבד שפגע קשות בתפוקת הנפט של איראן, ממשיכה טהראן בפעולות תגמול צבאיות ממוקדות ובסירוב לפיקוח על מתקן העשרה באספהאן. בישראל ובארה\"ב נערכים לאיומים ישירים ולשיקום יכולות הטילים הבליסטיים של משמרות המהפכה, לצד פעילות דיפלומטית ומגעים לקראת פסגות בינלאומיות.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "הסלמה ימית, מיקוש מכליות נפט וצניחה חדה בהיקף התנועה המסחרית"
    },
    {
     "name": "ארה\"ב - איראן",
     "status": "עימות צבאי ממוקד הכולל תקיפת מכ\"ם בבחריין, איומים על בכירים וסגר ימי"
    },
    {
     "name": "ישראל - איראן",
     "status": "כוננות ביטחונית גבוהה, הערכות לשיקום ייצור הטילים האיראני ותיאום ימי עם ארה\"ב"
    },
    {
     "name": "החזית הגרעינית",
     "status": "מתיחות מול סבא\"א בעקבות מניעת גישה למתקן העשרה באספהאן"
    }
   ],
   "events": [
    {
     "id": "IRAN-11140656-01",
     "title": "תקרית ביטחונית וחשד לכטב\"מים בבסיס חיל האוויר לייקנהית'",
     "summary": "התרעות הופעלו וכוחות ביטחון הוקפצו בבסיס לייקנהית' בבריטניה בעקבות חשד לפעילות כלי טיס בלתי מאוישים, ימים ספורים לאחר פינוי כלי טיס אמריקניים מחשש לאיום איראני. האירוע הסתיים ללא נפגעים.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T20:30:40+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T20:30:40+00:00",
     "last_update_at": "2026-11-14T06:09:11+00:00",
     "what_is_not_verified": "זהות מפעילי הכטב\"מים והקשר הוודאי לאיראן אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkgqhdsafe",
       "published_at": "2026-11-14T06:09:11+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/other/article/21847591",
       "published_at": "2026-11-13T21:00:30+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133609",
       "published_at": "2026-11-13T20:30:40+00:00"
      }
     ],
     "places": [
      {
       "name": "בסיס לייקנהית', בריטניה",
       "lat": 52.4042,
       "lon": 0.5566
      }
     ]
    },
    {
     "id": "IRAN-11140656-02",
     "title": "פגיעת מוקשים במכליות נפט במצר הורמוז",
     "summary": "משמרות המהפכה הודיעו כי מכליות נפט ומכלית גז עלו באש או התפוצצו לאחר שפגעו במוקשים ימיים במצר הורמוז, בטענה שפעלו בנתיב לא מורשה.",
     "axis": "מצר הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T00:00:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T00:00:25+00:00",
     "last_update_at": "2026-11-14T05:48:36+00:00",
     "what_is_not_verified": "זהות המכליות המדויקת ומספרן הכולל אינם מאומתים מעבר להודעות האיראניות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_4e4356a7db97ba63",
       "url": "https://en.irna.ir/news/86320921/Two-offending-oil-tankers-catch-fire-after-hitting-naval-mines",
       "published_at": "2026-11-14T05:48:36+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4e4356a7db97ba63",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lng-carrier-explodes-after-hitting-mine-hormuz-irgc-says",
       "published_at": "2026-11-14T05:04:09+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_4e4356a7db97ba63",
       "url": "https://www.aljazeera.com/news/liveblog/2026/11/14/iran-war-live-fighting-grips-yemen-as-qatar-turkiye-sign-defence-deal?traffic_source=rss",
       "published_at": "2026-11-14T00:00:25+00:00"
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
     "id": "IRAN-11140656-03",
     "title": "דו\"ח על מתקפות ימיות ושיבוש התנועה במצר הורמוז",
     "summary": "ארגון הסחר הימי הבריטי דיווח על תקיפת שבע מכליות לפחות באזור מצר הורמוז בשבוע שקדם ל-11 בנובמבר, לצד ירידה חדה של כ-65 אחוזים בתנועת כלי השיט במצר.",
     "axis": "מצר הורמוז",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T05:29:07+00:00",
     "last_update_at": "2026-11-14T05:29:07+00:00",
     "what_is_not_verified": "זהות כלל הגורמים התוקפים בכל אחת מהתקריות הימיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_9eaf764b254192d6",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-says-seven-hormuz-tanker-attacks-recorded-week",
       "published_at": "2026-11-14T05:29:07+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      },
      {
       "name": "ראס אל-ח'ימה, איחוד האמירויות",
       "lat": 25.7738,
       "lon": 55.9382
      }
     ]
    },
    {
     "id": "IRAN-11140656-04",
     "title": "טענת איראן על השמדת מכ\"ם אמריקאי בבחריין",
     "summary": "משמרות המהפכה הודיעו כי תקפו והשמידו מערכת מכ\"ם התרעה מוקדמת של ארה\"ב בבחריין, בתגובה להפצצת מגדל תקשורת בסירק.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T13:52:11+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T13:52:11+00:00",
     "last_update_at": "2026-11-13T13:52:11+00:00",
     "what_is_not_verified": "מידת הנזק בפועל למכ\"ם האמריקאי והאישור מצד ארה\"ב לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/13/iran-us-radar-bahrain-sirik-hormuz",
       "published_at": "2026-11-13T13:52:11+00:00"
      }
     ],
     "places": [
      {
       "name": "סירק, איראן",
       "lat": 26.5177,
       "lon": 57.1018
      }
     ]
    },
    {
     "id": "IRAN-11140656-05",
     "title": "התרעת סבא\"א בנוגע לאתר גרעין בלתי מפוקח באספהאן",
     "summary": "סבא\"א הביעה דאגה עמוקה מכך שלא התאפשר לפקחיה לבקר במתקן להעשרת אורניום באספהאן, שאיראן דיווחה על קיומו בעבר.",
     "axis": "גרעין איראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T10:41:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T10:41:29+00:00",
     "last_update_at": "2026-11-13T12:28:28+00:00",
     "what_is_not_verified": "רמת הפעילות הנוכחית וכמות האורניום שהועשרה במתקן באספהאן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cm75261e3pdko?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-13T12:28:28+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95024",
       "published_at": "2026-11-13T10:41:29+00:00"
      }
     ],
     "places": [
      {
       "name": "אספהאן, איראן",
       "lat": 32.6708,
       "lon": 51.665
      }
     ]
    },
    {
     "id": "IRAN-11140656-06",
     "title": "איומים איראניים על חיי שר האוצר האמריקני",
     "summary": "שר האוצר האמריקני סקוט בסנט הודיע כי עבר להתגורר בבסיס צבאי עקב איומים איראניים על חייו, והצהיר כי הממשל ימשיך להגביר את הלחץ הכלכלי על טהראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T16:58:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T16:58:19+00:00",
     "last_update_at": "2026-11-13T19:15:15+00:00",
     "what_is_not_verified": "אופי ומהות האיומים המדויקים שהופנו כלפי בסנט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_cnbc",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21847431",
       "published_at": "2026-11-13T19:15:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_cnbc",
       "url": "https://t.me/abualiexpress/133606",
       "published_at": "2026-11-13T16:58:19+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11140656-07",
     "title": "פגישת מפקד הצי החמישי עם מפקד זרוע הים בישראל",
     "summary": "מפקד הצי החמישי של צבא ארה\"ב סיים ביקור בישראל ונפגש עם מפקד זרוע הים לדיון בתיאום מבצעי, שמירה על נתיבי השיט וביטחון אזורי בלחימה.",
     "axis": "ישראל - ארה\"ב - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T19:58:52+00:00",
     "last_update_at": "2026-11-13T19:58:52+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961304",
       "published_at": "2026-11-13T19:58:52+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11140656-08",
     "title": "נפילה חדה בהפקת הנפט האיראנית",
     "summary": "תפוקת הנפט של איראן לחודש אוקטובר צנחה בכמעט מחצית מרמות טרום המלחמה, לרמה הנמוכה מצורכי הזיקוק המקומיים שלה.",
     "axis": "כלכלת איראן ועיצומים",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T02:34:04+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-14T02:34:04+00:00",
     "last_update_at": "2026-11-14T02:34:04+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611135975",
       "published_at": "2026-11-14T02:34:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11140656-09",
     "title": "הערכה ישראלית על שיקום ייצור הטילים באיראן",
     "summary": "גורמי ביטחון בישראל מעריכים כי איראן שיקמה כחמישית מיכולת ייצור הטילים הבליסטיים שלה מאז מבצע שאגת הארי, ומביעים חשש מהסכם מדיני או מהפתעה מבצעית.",
     "axis": "ישראל - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T09:29:24+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T09:29:24+00:00",
     "last_update_at": "2026-11-13T09:29:24+00:00",
     "what_is_not_verified": "רמת הדיוק של ההערכה בדבר שיקום 20% מיכולות הייצור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383961269",
       "published_at": "2026-11-13T09:29:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11140656-10",
     "title": "יצוא נפט עיראקי חלופי דרך סוריה בעקבות המתיחות במצר",
     "summary": "עיראק העבירה כ-1.6 מיליון חביות נפט גולמי דרך סוריה מאז סוף אוקטובר כדי לעקוף שיבושים אפשריים במצר הורמוז.",
     "axis": "מצר הורמוז",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T20:01:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T20:01:17+00:00",
     "last_update_at": "2026-11-13T20:01:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49563",
       "published_at": "2026-11-13T20:01:17+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת משמרות המהפכה על השמדת מכ\"ם התרעה מוקדמת אמריקני בבחריין",
    "דיווחים על כטב\"ם בלתי מזוהה מעל בסיס חיל האוויר לייקנהית' ושיוכו לאיראן",
    "רמת שיקום ייצור הטילים הבליסטיים של איראן לכדי עשרים אחוזים",
    "הדיווח על נסיעת ראש המוסד לוושינגטון לשכנוע הממשל לחדש את המלחמה באיראן"
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
      "חיוב ארה\"ב להפסיק לאלתר את התוקפנות והסגר הימי",
      "מתן ערבויות מוחשיות נגד חידוש המתקפות והסרת צעדים חד-צדדיים",
      "שמירה על זכויותיה לפי המשפט הבינלאומי ואמנת האו\"ם"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי עולמי דרך פגיעה בנתיבי השיט במצר הורמוז",
      "שיקום יכולות ייצור הטילים וההרתעה הצבאית מול ישראל וארה\"ב",
      "שימור מרחב התמרון בתוכנית הגרעין ללא פיקוח הדוק באספהאן"
     ],
     "forecast": [
      "המשך שיבוש נקודתי של תנועת מכליות נפט במפרץ באמצעות מיקוש ואיומים",
      "תגובות צבאיות מדודות כנגד נוכחות ומתקנים אמריקניים באזור"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "המשך הגברת הלחץ הכלכלי ומבצע הנידוי הכלכלי נגד המשטר האיראני",
      "אבטחת נתיבי השיט הבינלאומיים במפרץ ואכיפת סגר ימי"
     ],
     "inferred": [
      "בלימת היכולות הגרעיניות והצבאיות של איראן ללא כניסה לעימות כולל בלתי מבוקר",
      "הגנה על כוחות ומתקנים צבאיים אמריקניים הפרוסים באזור ובאירופה"
     ],
     "forecast": [
      "שמירה על נוכחות ימית הדוקה במפרץ בשיתוף פעולה עם ישראל ובעלות ברית",
      "העלאת סוגיית המלחמה באיראן לדיון במסגרת שיחות פסגה עם סין ורוסיה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "שמירת יציבות האזור וביטחון נתיבי השיט בתיאום עם ארה\"ב"
     ],
     "inferred": [
      "מניעת הגעה להסכם מדיני שישאיר בידי איראן יכולות גרעין וייצור טילים",
      "דחיפת הממשל האמריקני לפעולה תקיפה כנגד משטר האייתוללות"
     ],
     "forecast": [
      "המשך העלאת כוננות ומוכנות מודיעינית ומבצעית מול שיקום מערכי הטילים באיראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/11/14/iran-war-live-fighting-grips-yemen-as-qatar-turkiye-sign-defence-deal?traffic_source=rss",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cm75261e3pdko?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/13/iran-us-radar-bahrain-sirik-hormuz",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611135975",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86320921/Two-offending-oil-tankers-catch-fire-after-hitting-naval-mines",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21847431",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/ukmto-says-seven-hormuz-tanker-attacks-recorded-week",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133606",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49563",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95024",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383961269",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkgqhdsafe",
     "accessed_at": "2026-11-14T06:56:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-13T18:00:28+00:00",
  "changes": {
   "IRAN-11140656-01": {
    "kind": "new"
   },
   "IRAN-11140656-02": {
    "kind": "new"
   },
   "IRAN-11140656-03": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "פיצוץ בכלי שיט במצר הורמוז",
    "score": 0.817
   },
   "IRAN-11140656-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תקיפת כטב\"מים איראניים לעבר בחריין וירוטם",
    "score": 1.0
   },
   "IRAN-11140656-05": {
    "kind": "new"
   },
   "IRAN-11140656-06": {
    "kind": "new"
   },
   "IRAN-11140656-07": {
    "kind": "new"
   },
   "IRAN-11140656-08": {
    "kind": "new"
   },
   "IRAN-11140656-09": {
    "kind": "new"
   },
   "IRAN-11140656-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-14T0040__ukraine-202611140040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-14T00:40:39+00:00",
   "window": {
    "from": "2026-11-13T00:40:39+00:00",
    "to": "2026-11-14T00:40:39+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611140040"
   },
   "summary": "הלחימה הקרקעית והאווירית בין רוסיה לאוקראינה נמשכת בעוצמה גבוהה, כאשר מוקד הקרבות המרכזי מתרכז בגזרת פוקרובסק לצד תקיפות כטב\"מים וטילים על ערים באוקראינה ופגיעות בכירים בעומק שטח רוסיה. במקביל נרשמת היערכות דיפלומטית רחבה באירופה לקראת הצטרפות לשיחות על הסדר עתידי, חרף מחלוקות עמוקות סביב תנאי הפסקת האש ודרישות הביטחון של מוסקבה. במישור הבינלאומי מסתמנת מתיחות בנושאי חימוש וביטחון אזורי, כולל הגבלות תקציביות על רכש נשק בפולין ותקריות צבאיות במפרץ פינלנד.",
   "fronts": [
    {
     "name": "גזרת פוקרובסק",
     "status": "לחימה בעצימות גבוהה ביותר עם עשרות מתקפות רוסיות ביממה"
    },
    {
     "name": "קייב ועורף אוקראינה",
     "status": "ספיגת מתקפות כטב\"מים רוסיים על מבני ציבור ונהרות הבירה"
    },
    {
     "name": "זפוריז'יה",
     "status": "פגיעות בעיר ונפגעים אזרחיים רבים"
    },
    {
     "name": "מפרץ פינלנד ונמל אוסט-לוגה",
     "status": "פעילות כטב\"מים אוקראינית נגד כלי שיט צבאיים רוסיים"
    },
    {
     "name": "עומק רוסיה (מוסקבה)",
     "status": "פגיעות ממוקדות באמצעות פיצוץ מטעני חבלה ברכבים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11140040-01",
     "title": "פיצוץ מכונית תופת במוסקבה ופציעת בכיר אוקראיני לשעבר",
     "summary": "מכונית תופת התפוצצה בדרום מוסקבה ופצעה קשה את סרגיי זבורוטני, לשעבר דוברו ויועצו של ראש ממשלת אוקראינה לשעבר ניקולאי אזרוב. ועדת החקירות פתחה בחקירה.",
     "axis": "רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T11:54:44+00:00",
     "last_update_at": "2026-11-13T19:41:51+00:00",
     "what_is_not_verified": "זהות המבצעים ומעורבות אוקראינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ex-pm-press-secretary-reportedly-injured-in-moscow-car-explosion/",
       "published_at": "2026-11-13T19:41:51+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49552",
       "published_at": "2026-11-13T14:18:57+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c5gm3gnwl42eo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-13T13:11:23+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/13/car-bomb-attack-moscow-russia",
       "published_at": "2026-11-13T13:01:44+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21845700",
       "published_at": "2026-11-13T11:54:44+00:00"
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
     "id": "UKRAINE-11140040-02",
     "title": "הסכמה אירופית על משלחת משותפת לשיחות השלום",
     "summary": "מנהיגי האיחוד האירופי סיכמו על הקמת צוות משותף לשיחות עתידיות בנושא אוקראינה, שיכלול את מוסדות האיחוד ונציגים מחמש מדינות: גרמניה, צרפת, בריטניה, איטליה ופולין.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T02:01:35+00:00",
     "last_update_at": "2026-11-13T20:40:00+00:00",
     "what_is_not_verified": "מועד ומיקום השיחות העתידיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://kyivindependent.com/european-leaders-agree-on-joint-team-for-ukraine-peace-negotiations-costa-says/",
       "published_at": "2026-11-13T20:40:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://tass.com/world/2218035",
       "published_at": "2026-11-13T19:45:59+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_aa82f9f319c8f641",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062802/",
       "published_at": "2026-11-13T19:11:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_5333def1ea916825",
       "url": "https://tass.com/world/2218029",
       "published_at": "2026-11-13T19:01:28+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ca53c44b3651ca38",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062799/",
       "published_at": "2026-11-13T18:31:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_622dba54397de10c",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062795/",
       "published_at": "2026-11-13T17:43:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062792/",
       "published_at": "2026-11-13T17:29:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_f86bd6c7e9fffb40",
       "url": "https://www.theguardian.com/world/2026/nov/13/ukraine-war-briefing-europe-to-join-negotiations-says-kushner-as-putin-warns-against-peace-keepers",
       "published_at": "2026-11-13T03:38:51+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_ace3d98314224561",
       "url": "https://www.bbc.co.uk/news/articles/ckn80j9jv3jxo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-13T02:01:35+00:00"
      }
     ],
     "places": [
      {
       "name": "דבלין, אירלנד",
       "lat": 53.3494,
       "lon": -6.2606
      }
     ]
    },
    {
     "id": "UKRAINE-11140040-03",
     "title": "דיווח על דרישות רוסיות במשא ומתן להסדר והכחשת הקרמלין",
     "summary": "דיווח עיתונאי ייחס לרוסיה דרישות שפינלנד תעזוב את נאט\"ו, פירוז נמלי אודסה וניקולאייב והכרה בשליטה בדונבאס. דובר הקרמלין הכחיש את הטענות מכל וכל.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T13:37:17+00:00",
     "last_update_at": "2026-11-14T00:11:36+00:00",
     "what_is_not_verified": "עצם העלאת הדרישות בשיחות לא רשמיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/14/russia-demands-finland-leave-nato-bild-reports-moscow-denies-it-and-helsinki-is-outraged",
       "published_at": "2026-11-14T00:11:36+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49550",
       "published_at": "2026-11-13T13:37:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-11140040-04",
     "title": "תקיפת כטב\"ם על בית חולים בקייב",
     "summary": "כטב\"ם פגע במכון הלאומי לטראומטולוגיה ואורתופדיה במרכז קייב וגרם לפציעת שלושה בני אדם, על רקע קשיים של מערכת סטארשילד בהפלת כלי הטיס.",
     "axis": "חזית העורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T03:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T11:24:30+00:00",
     "last_update_at": "2026-11-13T11:24:30+00:00",
     "what_is_not_verified": "מידת השפעת מגבלות המהירות של סטארשילד על האירוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/13/russia-strikes-hospital-central-kyiv-spacex-starshield-system-fails",
       "published_at": "2026-11-13T11:24:30+00:00"
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
     "id": "UKRAINE-11140040-05",
     "title": "חילוץ שרידי כטב\"ם מנהר הדנייפרו בקייב",
     "summary": "צוותי חילוץ משו מנהר הדנייפרו ברובע אובולון שבקייב שרידים של כטב\"ם רוסי שנפל במתקפה שהתרחשה ב-11 בנובמבר.",
     "axis": "חזית העורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T23:26:00+00:00",
     "last_update_at": "2026-11-13T23:26:00+00:00",
     "what_is_not_verified": "דגם הכטב\"ם ומטרתו המקורית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_38b23cb3809ed3c2",
       "url": "https://www.ukrinform.net/rubric-ato/4184176-remains-of-russian-drone-recovered-from-dnipro-river-in-kyiv.html",
       "published_at": "2026-11-13T23:26:00+00:00"
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
     "id": "UKRAINE-11140040-06",
     "title": "קרבות עזים בקווי החזית ומתקפות בגזרת פוקרובסק",
     "summary": "במהלך היממה נרשמו 243 התנגשויות קרביות בין כוחות ההגנה של אוקראינה לצבא הרוסי, מתוכן כ-50 מתקפות רוסיות בגזרת פוקרובסק לבדה.",
     "axis": "דונבאס",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T21:58:00+00:00",
     "last_update_at": "2026-11-13T21:58:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בקרבות אלו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_0e1edc76395735e2",
       "url": "https://www.ukrinform.net/rubric-ato/4184540-war-update-243-clashes-on-front-line-fiercest-fighting-in-pokrovsk-sector.html",
       "published_at": "2026-11-13T21:58:00+00:00"
      }
     ],
     "places": [
      {
       "name": "פוקרובסק, אוקראינה",
       "lat": 48.2771,
       "lon": 37.1772
      }
     ]
    },
    {
     "id": "UKRAINE-11140040-07",
     "title": "פגיעה רוסית בזפוריז'יה עם עשרות פצועים",
     "summary": "רוסיה תקפה בעיר זפוריז'יה, וכתוצאה מכך נפצעו 50 בני אדם, בהם 8 ילדים.",
     "axis": "החזית הדרומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T19:41:51+00:00",
     "last_update_at": "2026-11-13T19:41:51+00:00",
     "what_is_not_verified": "סוג החימוש ששימש לתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-war-latest-ex-pm-press-secretary-reportedly-injured-in-moscow-car-explosion/",
       "published_at": "2026-11-13T19:41:51+00:00"
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
     "id": "UKRAINE-11140040-08",
     "title": "פניית פינלנד לאוקראינה בעקבות תקיפת ספינה במפרץ פינלנד",
     "summary": "שר ההגנה הפיני אישר כי הלסינקי פנתה לקייב והבהירה את רגישות האזור בעקבות פגיעת כטב\"ם אוקראיני בקורבטה רוסית בנמל אוסט-לוגה.",
     "axis": "הזירה הימית והמדינית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T15:04:19+00:00",
     "last_update_at": "2026-11-13T15:04:19+00:00",
     "what_is_not_verified": "חומרת הנזק שנגרמה לקורבטה הרוסית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49554",
       "published_at": "2026-11-13T15:04:19+00:00"
      }
     ],
     "places": [
      {
       "name": "אוסט-לוגה, רוסיה",
       "lat": 59.6592,
       "lon": 28.2695
      }
     ]
    },
    {
     "id": "UKRAINE-11140040-09",
     "title": "פולין סירבה לממן נשק אמריקאי לאוקראינה במסגרת קרן ייעודית",
     "summary": "ראש ממשלת פולין דונלד טוסק הבהיר כי ארצו לא תממן רכישת אמצעי לחימה מתוצרת ארה\"ב עבור אוקראינה במסגרת תוכנית זו, בנימוק של גירעון תקציבי.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T19:03:00+00:00",
     "last_update_at": "2026-11-13T19:03:00+00:00",
     "what_is_not_verified": "ההשפעה המעשית על היקף אספקת החימוש הכולל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2218031",
       "published_at": "2026-11-13T19:03:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענה שרוסיה דרשה את עזיבת פינלנד את נאט\"ו בשיחות בלתי רשמיות",
    "מידת האחריות של מודיעין אוקראיני לפיצוץ המכונית במוסקבה",
    "היקף הנזק המדויק לקורבטה הרוסית נארו-פומינסק במפרץ פינלנד"
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
      "התנגדות לנוכחות כוחות שמירת שלום אירופיים באוקראינה",
      "סירוב לויתורים טריטוריאליים בשטחים הנתבעים על ידה",
      "הכחשת דרישות לשינוי מעמד פינלנד בנאט\"ו"
     ],
     "inferred": [
      "שאיפה להכרה בינלאומית בסיפוח מחוזות אוקראינה ופירוז נמלי הים השחור",
      "ניסיון להרחיק את האיחוד האירופי ומוסדותיו ממעמד שווה ליד שולחן המשא ומתן"
     ],
     "forecast": [
      "המשך הלחץ הצבאי בדונבאס לביסוס עובדות בשטח לפני התקדמות לשיחות רשמיות"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "שילוב מדינות אירופה ומוסדות האיחוד האירופי בשיחות להסדר עתידי",
      "קידום סדר יום הכולל צעדים להפסקת אש והפחתת הסלמה",
      "המשך פגיעה במטרות לוגיסטיות וצבאיות של רוסיה"
     ],
     "inferred": [
      "הסתמכות על תמיכה אירופית כדי לבלום לחץ לוויתורים טריטוריאליים",
      "המשך מבצעי חבלה ופגיעה ממוקדת בעומק רוסיה לשם ערעור הביטחון הפנימי שלה"
     ],
     "forecast": [
      "המשך קו הגנה נוקשה תוך דרישה לערבויות ביטחון בינלאומיות מחייבות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ckn80j9jv3jxo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/13/russia-strikes-hospital-central-kyiv-spacex-starshield-system-fails",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21845700",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-war-latest-ex-pm-press-secretary-reportedly-injured-in-moscow-car-explosion/",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/14/russia-demands-finland-leave-nato-bild-reports-moscow-denies-it-and-helsinki-is-outraged",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/13/8062792/",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2218031",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49554",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4184540-war-update-243-clashes-on-front-line-fiercest-fighting-in-pokrovsk-sector.html",
     "accessed_at": "2026-11-14T00:40:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:44:50+00:00",
  "changes": {
   "UKRAINE-11140040-01": {
    "kind": "possible",
    "prev": "נסיעת שליחי ארצות הברית לפגישות במוסקבה ובדבלין",
    "score": 0.633
   },
   "UKRAINE-11140040-02": {
    "kind": "possible",
    "prev": "סיום שיחות אבו דאבי והסכמה על עסקת חילופי שבויים",
    "score": 0.467
   },
   "UKRAINE-11140040-03": {
    "kind": "new"
   },
   "UKRAINE-11140040-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפת טילים בליסטיים רוסית על קייב",
    "score": 0.817
   },
   "UKRAINE-11140040-05": {
    "kind": "new"
   },
   "UKRAINE-11140040-06": {
    "kind": "new"
   },
   "UKRAINE-11140040-07": {
    "kind": "new"
   },
   "UKRAINE-11140040-08": {
    "kind": "new"
   },
   "UKRAINE-11140040-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-14T0702__north-202611140702.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-14T07:02:45+00:00",
   "window": {
    "from": "2026-11-13T07:02:45+00:00",
    "to": "2026-11-14T07:02:45+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611140702"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהמשך חילופי אש ארטילריים ונוכחות קרקעית ישראלית בדרום לבנון, לצד אי-ודאות סביב סיום מנדט יוניפי\"ל ומגעים להקמת מנגנון פיקוח חלופי. בתוך לבנון נרשמות פעולות אכיפה של הצבא והרשויות נגד מצבורי נשק ופעילים המיוחסים לחיזבאללה. בסוריה נמשכים תקריות ירי מקומיות וצעדים לייצוב אזרחי וכלכלי, במקביל למגעים ודיווחים על הסדרים ביטחוניים עתידיים והידוק הבריתות האזוריות של טורקיה.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות אש ארטילרית ישראלית ושליטה ביישובים, לצד דיונים בינלאומיים להחלפת כוח יוניפי\"ל"
    },
    {
     "name": "פנים לבנון",
     "status": "פעילות ביטחונית של צבא לבנון לאיתור מחסני נשק ומעצר חשודים בשיוך לחיזבאללה"
    },
    {
     "name": "דרום סוריה",
     "status": "דיווחים על מגעים עקיפים להסדרי ביטחון ואזור מפורז בכפוף לדרישות נסיגה של כוחות זרים"
    },
    {
     "name": "מזרח סוריה",
     "status": "מתיחות ביטחונית מקומית הכוללת תקיפות נגד כוחות המשטר ושימוש בציר יבשתי להובלת נפט מעיראק"
    },
    {
     "name": "הציר הטורקי-אזורי",
     "status": "חתימת ברית הגנה הדדית עם קטר ותיאום עמדות מדיניות וביטחוניות בסוגיית סוריה והאזור"
    }
   ],
   "events": [
    {
     "id": "NORTH-11140702-01",
     "title": "ירי ארטילרי ישראלי לעבר עיירות בדרום לבנון",
     "summary": "הפגזה ארטילרית ישראלית פגעה באל-קוסייר ובוואדי זיבקין בדרום לבנון.",
     "axis": "ישראל–לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T06:20:39+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T06:20:39+00:00",
     "last_update_at": "2026-11-14T06:20:39+00:00",
     "what_is_not_verified": "אין אימות ישראלי רשמי על הירי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/150572/",
       "published_at": "2026-11-14T06:20:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11140702-02",
     "title": "הפגזה ארטילרית ישראלית על כפר תבנית",
     "summary": "כתב רשת אל-מנאר דיווח על ירי ארטילרי ישראלי שפגע בעיירה כפר תבנית בדרום לבנון.",
     "axis": "ישראל–לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T19:13:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T19:13:57+00:00",
     "last_update_at": "2026-11-13T19:13:57+00:00",
     "what_is_not_verified": "הדיווח נסמך על כתב אל-מנאר ללא אישור ישראלי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_4e0beb46e6028522",
       "url": "https://english.almanar.com.lb/article/150477/",
       "published_at": "2026-11-13T19:13:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11140702-03",
     "title": "תפיסת מחסן אמצעי לחימה בפרברי ביירות",
     "summary": "מודיעין צבא לבנון פשט על מחסן באזור אל-מושארפיה בפרברים הדרומיים של ביירות, החרים כמות גדולה של כלי נשק ותחמושת ועצר אזרח לבנוני.",
     "axis": "פנים-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T12:16:21+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T12:16:21+00:00",
     "last_update_at": "2026-11-13T18:17:07+00:00",
     "what_is_not_verified": "זהות העצור והשיוך המדויק של הנשק שנמצא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanese-army-seizes-weapons-depot-in-beiruts-southern-suburbs/4124664",
       "published_at": "2026-11-13T18:17:07+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967862/lebanese-army-seizes-large-weapons-cache-in-beiruts-southern-suburbs/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967862",
       "published_at": "2026-11-13T12:16:21+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11140702-04",
     "title": "מעצר חמישה חשודים בקשר לחיזבאללה בצפון לבנון",
     "summary": "רשויות הביטחון בלבנון חוקרות חמישה גברים שנעצרו באזור אל-שירא בנפת כורה הסמוכה לברחליון, כאשר דמויות המקורבות לחיזבאללה דורשות לשחררם.",
     "axis": "פנים-לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T09:30:15+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T09:30:15+00:00",
     "last_update_at": "2026-11-13T15:10:00+00:00",
     "what_is_not_verified": "הזיקה הוודאית של העצורים לחיזבאללה וגורל הטלפונים הניידים שלהם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/967872/hezbollah-links-missing-phones-and-torn-documents-new-details-emerge-i/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967872",
       "published_at": "2026-11-13T15:10:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_lbci",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967806/lbci-sources-hezbollah-linked-figures-seek-release-of-five-detainees-a/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967806",
       "published_at": "2026-11-13T09:30:15+00:00"
      }
     ],
     "places": [
      {
       "name": "ברחליון, לבנון",
       "lat": 34.2589,
       "lon": 35.8762
      }
     ]
    },
    {
     "id": "NORTH-11140702-05",
     "title": "מגעים דיפלומטיים להחלפת כוח יוניפי\"ל בדרום לבנון",
     "summary": "ארצות הברית, צרפת ומדינות נוספות דנות בהקמת כוח פיקוח בינלאומי חדש להחלפת יוניפי\"ל שמנדטו צפוי להסתיים, לקראת ביקור השגריר מייק וולץ בביירות.",
     "axis": "ישראל–לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T17:45:02+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T17:45:02+00:00",
     "last_update_at": "2026-11-13T21:13:07+00:00",
     "what_is_not_verified": "המתכונת הסופית של המנגנון החלופי והסכמת כלל הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/mike-waltz-visit-beirut-lebanon-seeks-unifil-replacement",
       "published_at": "2026-11-13T21:13:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-considers-egypt-israel-style-mission-post-unifil-lebanon",
       "published_at": "2026-11-13T17:45:02+00:00"
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
     "id": "NORTH-11140702-06",
     "title": "דיווח על מתווה ביטחוני בין ישראל לדמשק ביוזמת איזנקוט",
     "summary": "פרסומים ציטטו מקורות דיפלומטיים לפיהם גדי איזנקוט פתוח להסכם ביטחוני שכולל נסיגה ישראלית משטחים בדרום סוריה ויצירת אזור מפורז, בכפוף לפינוי כוחות טורקיה ורוסיה.",
     "axis": "ישראל–סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-14T04:07:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-14T04:07:41+00:00",
     "last_update_at": "2026-11-14T04:07:41+00:00",
     "what_is_not_verified": "הדיווח נסמך על מקורות עיתונאיים ולא אושר רשמית בידי איזנקוט או גורם ישראלי מוסמך",
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
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-11140702-07",
     "title": "חתימת הסכם הגנה הדדי בין טורקיה לקטר",
     "summary": "נשיא טורקיה ואמיר קטר חתמו באיסטנבול על הסכם הגנה הדדי המעגן עמדה משותפת במקרה של תקיפה חיצונית והרחבת שיתוף הפעולה הצבאי והמדיני, לרבות בנושא סוריה.",
     "axis": "טורקיה–אזור",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T13:21:02+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T13:21:02+00:00",
     "last_update_at": "2026-11-14T06:55:03+00:00",
     "what_is_not_verified": "נוסח ההסכם וסעיפיו המבצעיים המדויקים לא פורסמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://www.aa.com.tr/en/politics/turkiye-qatar-reaffirm-defense-ties-call-for-diplomacy-on-iran/4124881",
       "published_at": "2026-11-14T06:55:03+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://www.al-monitor.com/originals/2026/11/turkey-qatar-sign-mutual-defence-agreement",
       "published_at": "2026-11-13T20:30:27+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://www.france24.com/en/middle-east/20261113-turkey-and-qatar-pledge-unified-stance-against-attacks-in-mutual-defence-pact",
       "published_at": "2026-11-13T20:06:40+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://www.al-monitor.com/originals/2026/11/turkey-qatar-sign-mutual-defence-agreement-pledge-unified-stance-against-attack",
       "published_at": "2026-11-13T16:46:47+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://t.me/abualiexpress/133605",
       "published_at": "2026-11-13T16:40:51+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://t.me/alexmehacarmel/49555",
       "published_at": "2026-11-13T15:45:03+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_d26c6bad959ac44c",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/967873/turkey-qatar-sign-mutual-defence-agreement-turkish-presidency-says/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967873",
       "published_at": "2026-11-13T13:21:02+00:00"
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
     "id": "NORTH-11140702-08",
     "title": "מתקפה נגד חיילים סורים בדיר א-זור",
     "summary": "חמושים לא מזוהים תקפו כוחות צבא סוריה בעיירה ג'דיד בכארה שבמזרח סוריה, הרגו חייל אחד ופצעו שניים נוספים.",
     "axis": "פנים-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T12:36:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T12:36:18+00:00",
     "last_update_at": "2026-11-13T12:36:18+00:00",
     "what_is_not_verified": "זהות החמושים שביצעו את התקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-soldier-killed-2-others-injured-in-attack-by-unidentified-gunmen-in-deir-ez-zor/4124102",
       "published_at": "2026-11-13T12:36:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11140702-09",
     "title": "העברת נפט עיראקי דרך שטח סוריה",
     "summary": "עיראק הזרימה כ-1.6 מיליון חביות נפט גולמי דרך סוריה כנתיב עוקף למצר הורמוז עקב חשש מהסלמה ביטחונית אזורית.",
     "axis": "עיראק–סוריה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T20:01:17+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-13T20:01:17+00:00",
     "last_update_at": "2026-11-13T20:01:17+00:00",
     "what_is_not_verified": "נתוני הנפח המדויקים וזהות הגורמים המאבטחים את המעבר בסוריה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49563",
       "published_at": "2026-11-13T20:01:17+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11140702-10",
     "title": "ביטול חובת אשרת כניסה מראש לתיירים בסוריה",
     "summary": "משרד הפנים הסורי ביטל הנחיה זמנית שחייבה אזרחים אמריקאים ובריטים באישור כניסה מוקדם, לאחר מחאה ציבורית רחבה.",
     "axis": "פנים-סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-13T15:38:59+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-13T15:38:59+00:00",
     "last_update_at": "2026-11-13T19:49:13+00:00",
     "what_is_not_verified": "המניעים המדויקים לשינוי המדיניות המהיר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-lifts-prior-entry-approval-requirement-for-us-british-citizens-after-controversy/4124717",
       "published_at": "2026-11-13T19:49:13+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/following-uproar-syria-reverses-visa-rules-tourists",
       "published_at": "2026-11-13T17:54:16+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/syria-rolls-back-new-visa-restrictions-us-citizens-after-backlash-what-know",
       "published_at": "2026-11-13T15:38:59+00:00"
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
    "נכונות המגעים המיוחסים לגדי איזנקוט בדבר הסכם ביטחוני ישיר או עקיף עם דמשק",
    "ההשתייכות של חמשת העצורים בצפון לבנון לארגון חיזבאללה",
    "הסעיפים המבצעיים והפרטים המלאים של הסכם ההגנה בין טורקיה לקטר"
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
      "מניעת התבססות איומים מעבר לגבול הצפוני והמשך פעילות צבאית בדרום לבנון"
     ],
     "inferred": [
      "חתירה לפירוק כוחות זרים עוינים בסוריה, בהם נוכחות טורקית ורוסית, ושמירה על נקודות שליטה אסטרטגיות בחרמון",
      "החלפת מנגנון יוניפי\"ל בכוח פיקוח יעיל יותר למניעת התעצמות חיזבאללה"
     ],
     "forecast": [
      "המשך פעילות סיכול ופגיעה ביעדים בדרום לבנון כל עוד לא נחתם הסדר ביטחוני חלופי יציב"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שימור יכולות צבאיות ואחסון אמצעי לחימה באזורים שונים בלבנון",
      "הפעלת לחץ על מערכת המשפט והביטחון בלבנון לשחרור עצורים המשויכים לארגון"
     ],
     "forecast": [
      "ניסיונות לשמר נוכחות ואחיזה חשאית במרחב הלבנוני לנוכח הלחץ הביטחוני והפנימי"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "חיזוק שיתוף הפעולה הביטחוני וההגנתי עם קטר למניעת התלקחות אזורית וקידום פתרונות דיפלומטיים בסוריה"
     ],
     "inferred": [
      "ביצור מעמדה כמעצמה אזורית המרחיבה בריתות צבאיות והשפעה בסוריה ובמפרץ"
     ],
     "forecast": [
      "העמקת התיאום הביטחוני והמדיני מול שותפות אזוריות תוך שמירה על דריסת רגל פעילה בסוריה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "הקלה על תנועת תיירים ואזרחים זרים כדי לסייע להתאוששות לאחר שנות העימות"
     ],
     "inferred": [
      "ייצוב המשטר וגיוס הכנסות באמצעות מעבר נפט עיראקי וחידוש קווי תעופה בין-לאומיים",
      "בחינת אפשרויות לצמצום הנוכחות הצבאית הישראלית בדרום המדינה דרך אזורים מפורזים"
     ],
     "forecast": [
      "המשך מאמצים להפגת בידוד בין-לאומי לצד התמודדות מתמשכת עם תקריות חמושים במזרח המדינה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/150477/",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/syria-rolls-back-new-visa-restrictions-us-citizens-after-backlash-what-know",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syria-lifts-prior-entry-approval-requirement-for-us-british-citizens-after-controversy/4124717",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261113-turkey-and-qatar-pledge-unified-stance-against-attacks-in-mutual-defence-pact",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/967873/turkey-qatar-sign-mutual-defence-agreement-turkish-presidency-says/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967873",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/following-uproar-syria-reverses-visa-rules-tourists",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133605",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49563",
     "accessed_at": "2026-11-14T07:02:45+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-13T00:50:27+00:00",
  "changes": {
   "NORTH-11140702-01": {
    "kind": "new"
   },
   "NORTH-11140702-02": {
    "kind": "new"
   },
   "NORTH-11140702-03": {
    "kind": "new"
   },
   "NORTH-11140702-04": {
    "kind": "new"
   },
   "NORTH-11140702-05": {
    "kind": "possible",
    "prev": "תקיפות צה\"ל בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11140702-06": {
    "kind": "new"
   },
   "NORTH-11140702-07": {
    "kind": "new"
   },
   "NORTH-11140702-08": {
    "kind": "new"
   },
   "NORTH-11140702-09": {
    "kind": "new"
   },
   "NORTH-11140702-10": {
    "kind": "new"
   }
  }
 }
};
