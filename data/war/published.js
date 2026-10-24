/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-23T2340__yemen-202610232340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-23T23:40:24+00:00",
   "window": {
    "from": "2026-10-22T23:40:24+00:00",
    "to": "2026-10-23T23:40:24+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610232340"
   },
   "summary": "בזירה התימנית נמשכת הסלמה קרקעית משמעותית מצד הכוחות החות'יים, המטילים מצור ממושך על העיר תעז, מנתקים צירי אספקה ופוגעים באוכלוסייה אזרחית. במקביל, פעילות החות'ים ממשיכה לאיים על הביטחון האזורי ועל ערב הסעודית, דבר המניע מהלכים דיפלומטיים והיערכויות הגנתיות ברחבי המזרח התיכון. במישור הימי נרשמים חיכוכי גבול ופגיעה באזרחים בים האדום לצד לחץ מתמשך על נתיבי השיט.",
   "fronts": [
    {
     "name": "חזית תעז והחוף המערבי",
     "status": "לחימה פעילה, מצור מתמשך של החות'ים על תעז וחסימת עורק התחבורה לעדן"
    },
    {
     "name": "הגנת ערב הסעודית והמפרץ",
     "status": "כוננות מפני מתקפות חות'יות וצמצום נוכחות דיפלומטית אמריקאית"
    },
    {
     "name": "המרחב הימי בים האדום ובאב אל-מנדב",
     "status": "מתיחות סביב נתיבי השיט וחיכוכים מול משמר החופים של אריתריאה"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10232340-01",
     "title": "מצור חות'י ומשבר הומניטרי בעיר תעז",
     "summary": "כוחות חות'יים מכתרים את העיר תעז מזה עשרים יום, חוסמים את ציר התנועה לעדן ומונעים כניסת סיוע הומניטרי למאות אלפי תושבים, מה שהוביל למחסור חמור במים, בדלק ובמזון.",
     "axis": "פנים-תימן: מחוז תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T06:37:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T06:37:34+00:00",
     "last_update_at": "2026-10-23T20:44:02+00:00",
     "what_is_not_verified": "הנתונים המדויקים על מספר התושבים המנותקים והיקף הפגיעה באספקת המים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/23/time-running-out-to-reach-yemens-taiz-amid-deepening-crisis-un-says?traffic_source=rss",
       "published_at": "2026-10-23T20:44:02+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/time-running-out-yemens-taiz-after-20-days-under-houthi-siege-un-warns",
       "published_at": "2026-10-23T18:42:06+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/un-sounds-alarm-besieged-yemen-city-taiz",
       "published_at": "2026-10-23T18:39:42+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/un-sounds-alarm-besieged-yemen-city-taiz",
       "published_at": "2026-10-23T18:30:37+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168654",
       "published_at": "2026-10-23T12:00:00+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-hints-new-strikes-iran-ministers-gather-istanbul",
       "published_at": "2026-10-23T06:37:34+00:00"
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
     "id": "YEMEN-10232340-02",
     "title": "הרוגים בהפגזות חות'יות באזור תעז",
     "summary": "גורמים מקומיים מדווחים על פגיעה באזרחים ובמשפחות כתוצאה מהפגזות של המיליציה החות'ית באזור אל-אקרוד ובמחוז תעז, לצד הלוויות שנערכו להרוגים.",
     "axis": "פנים-תימן: מחוז תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T14:04:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:04:55+00:00",
     "last_update_at": "2026-10-23T22:02:21+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק והנסיבות הספציפיות של כל תקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_1058f61e118b9523",
       "url": "https://www.sabanew.net/viewstory/154521",
       "published_at": "2026-10-23T22:02:21+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_1058f61e118b9523",
       "url": "https://www.sabanew.net/viewstory/154518",
       "published_at": "2026-10-23T20:08:47+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_1058f61e118b9523",
       "url": "https://www.sabanew.net/viewstory/154501",
       "published_at": "2026-10-23T14:04:55+00:00"
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
     "id": "YEMEN-10232340-03",
     "title": "הצהרת טורקיה לגבי אי-השתתפות בלחימה ישירה נגד החות'ים",
     "summary": "שר ההגנה של טורקיה הבהיר כי ארצו אינה מתכוונת לשלוח כוחות ללחימה ישירה מול החות'ים במסגרת הסכם ההגנה המשותף עם ערב הסעודית ופקיסטן, וכי הסיוע מתמקד בהרתעה.",
     "axis": "מדיני-ביטחוני אזורי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T20:27:03+00:00",
     "last_update_at": "2026-10-23T20:27:03+00:00",
     "what_is_not_verified": "היקף הסיוע הצבאי העתידי שתאשר טורקיה אם תוגש בקשה סעודית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-has-no-plans-fight-houthis-under-saudi-pact-minister-says-0",
       "published_at": "2026-10-23T20:27:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10232340-04",
     "title": "פעילות ימית של אריתריאה נגד דייגים תימנים",
     "summary": "כוחות חיל הים של אריתריאה יורים לעבר סירות דייגים תימנים מול חופי חודיידה ועוצרים אותם לצורך עבודות כפייה במתקני כליאה במדינה.",
     "axis": "הים האדום: חופי תימן-אריתריאה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T10:44:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T10:44:23+00:00",
     "last_update_at": "2026-10-23T10:44:23+00:00",
     "what_is_not_verified": "טענות הדדיות לגבי חציית גבולות ימיים וריבוניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/investigations/eritrea-detains-yemeni-fishermen-forced-labour",
       "published_at": "2026-10-23T10:44:23+00:00"
      }
     ],
     "places": [
      {
       "name": "חודיידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      }
     ]
    },
    {
     "id": "YEMEN-10232340-05",
     "title": "פינוי נציגויות דיפלומטיות אמריקאיות ברקע מתקפות החות'ים",
     "summary": "מחלקת המדינה של ארצות הברית הורתה על עזיבת צוותים לא חיוניים מסעודיה ומצמצמת כוח אדם בשגרירויות באזור, בין היתר עקב החשש מהסלמה ומהתגברות תקיפות מצד החות'ים.",
     "axis": "חצי האי ערב: ארצות הברית - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T22:53:08+00:00",
     "last_update_at": "2026-10-23T22:53:08+00:00",
     "what_is_not_verified": "מידת ההשפעה הישירה של מתקפות החות'ים לעומת המתיחות מול איראן על ההחלטה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_cnn",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694739",
       "published_at": "2026-10-23T22:53:08+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק כתוצאה מפעולות הצבא וההפגזות בתעז ובאל-אקרוד",
    "היקף התקיפות החות'יות המדויק לעבר שטח סעודיה בימים האחרונים",
    "שיעור הפגיעה המדויק באספקת המים והמזון בתוך העיר הנצורה תעז"
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "המיליציה החות'ית (אנצאר אללה)",
     "declared": [
      "המשך המערכה הצבאית בתימן והפעלת לחץ על הממשלה המוכרת ובעלי בריתה"
     ],
     "inferred": [
      "כיבוש מוחלט של העיר תעז והשתלטות על צירי מסחר ונמלים מרכזיים לאורך החוף המערבי",
      "הפעלת לחץ אזורי על סעודיה ועל נתיבי השיט הבינלאומיים בים האדום ובאב אל-מנדב"
     ],
     "forecast": [
      "החרפת הלחץ הצבאי על תעז ושימוש במצור כמנוף מיקוח מול הכוחות הנתמכים בידי סעודיה"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת והקואליציה התומכת בה",
     "declared": [
      "קריאה להתערבות בינלאומית דחופה לפתיחת המצור על תעז ולהגדרת החות'ים כארגון טרור"
     ],
     "inferred": [
      "בלימת ההתקדמות החות'ית לעבר החוף ומניעת ניתוק מוחלט של דרום המדינה ממרכזה",
      "גיוס תמיכה צבאית ומדינית ממדינות האזור כגון סעודיה וטורקיה להגברת ההרתעה"
     ],
     "forecast": [
      "המשך הישענות על קואליציות אזוריות ולחץ דיפלומטי באו\"ם להקלת המצור האזרחי על תעז"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/23/time-running-out-to-reach-yemens-taiz-amid-deepening-crisis-un-says?traffic_source=rss",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/un-sounds-alarm-besieged-yemen-city-taiz",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694739",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/turkey-has-no-plans-fight-houthis-under-saudi-pact-minister-says-0",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/investigations/eritrea-detains-yemeni-fishermen-forced-labour",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154501",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168654",
     "accessed_at": "2026-10-23T23:40:24+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T23:45:34+00:00",
  "changes": {
   "YEMEN-10232340-01": {
    "kind": "new"
   },
   "YEMEN-10232340-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעות באזרחים מהפגזות וצליפה של החות'ים בתעז",
    "score": 0.817
   },
   "YEMEN-10232340-03": {
    "kind": "new"
   },
   "YEMEN-10232340-04": {
    "kind": "new"
   },
   "YEMEN-10232340-05": {
    "kind": "possible",
    "prev": "פינוי מטה חברת ארמקו בדהראן עקב התגברות המתקפות",
    "score": 0.467
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-24T0457__iran-202610240457.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-24T04:57:57+00:00",
   "window": {
    "from": "2026-10-23T04:57:57+00:00",
    "to": "2026-10-24T04:57:57+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610240457"
   },
   "summary": "העימות הצבאי והכלכלי בין ארצות הברית וישראל לבין איראן עומד בפני סכנת החרפה, כאשר גורמי ממשל בוושינגטון מאותתים על אפשרות לחידוש תקיפות רחבות, בעוד ישראל לוחצת להקדים פעולות אלו. במקביל נרשמת פעילות עוינת מוגברת בנתיבי השיט סביב מצר הורמוז לצד תקיפות מצד שלוחות אזוריות ואיומים בפגיעה בתשתיות קריטיות ובדיפלומטים. מאמצי התיווך הבינלאומיים מתקשים להביא לפריצת דרך נוכח חילופי איומים תכופים ומבוי סתום במשא ומתן הגרעיני.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ הפרסי",
     "status": "שיא בפגיעות בכלי שיט מסחריים וסגר ימי פעיל"
    },
    {
     "name": "הזירה האווירית והצבאית ארה\"ב-ישראל-איראן",
     "status": "כוננות גבוהה ואיומים בהתחדשות מבצעי תקיפה נרחבים"
    },
    {
     "name": "חזית שלוחות איראן (החות'ים בסעודיה)",
     "status": "ירי טילים בליסטיים לעבר יעדים במפרץ ופעילות יירוט"
    },
    {
     "name": "החזית המדינית והגרעינית",
     "status": "מגעים דיפלומטיים ללא פריצת דרך וקיפאון בפיקוח על מתקני הגרעין"
    }
   ],
   "events": [
    {
     "id": "IRAN-10240457-01",
     "title": "הצהרת נשיא ארה\"ב על אפשרות לפעולה צבאית נוספת נגד איראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ התייחס בעצרת בפלורידה לאפשרות של חידוש או הרחבת הפעולה הצבאית מול איראן, במקביל למחירי הנפט הגבוהים והבחירות הקרבות.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T17:24:11+00:00",
     "last_update_at": "2026-10-23T21:46:29+00:00",
     "what_is_not_verified": "העיתוי המדויק ואופי המבצע הצבאי אם אכן יתרחש אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/florida-trump-vows-deal-cuba-after-iran-gets-settled",
       "published_at": "2026-10-23T21:46:29+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/trump-says-us-may-do-another-military-operation-against-iran",
       "published_at": "2026-10-23T20:46:30+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132441",
       "published_at": "2026-10-23T19:55:34+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hylsjfknfx",
       "published_at": "2026-10-23T17:24:11+00:00"
      }
     ],
     "places": [
      {
       "name": "פורט מאיירס, פלורידה, ארצות הברית",
       "lat": 26.6406,
       "lon": -81.8723
      }
     ]
    },
    {
     "id": "IRAN-10240457-02",
     "title": "תגובת יועץ המנהיג העליון באיראן לאיומי ארה\"ב וישראל",
     "summary": "מוחמד מוח'בר, יועץ למנהיג העליון באיראן, הצהיר כי איומי המלחמה של ארצות הברית וישראל מעידים על ייאוש וכי לאיראן יש מנופי לחץ בתחומי הנפט והאנרגיה.",
     "axis": "איראן-ישראל-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T16:54:58+00:00",
     "last_update_at": "2026-10-24T04:00:32+00:00",
     "what_is_not_verified": "אין אימות עצמאי למהלכים המבצעיים המתוכננים על ידי איראן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_692a438243b538ef",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-netanyahu-threats-betray-desperation-aide-irans-supreme-leader",
       "published_at": "2026-10-24T04:00:32+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_692a438243b538ef",
       "url": "https://en.irna.ir/news/86301177/Trump-and-Netanyahu-s-threats-reveal-desperation-Advisor-to",
       "published_at": "2026-10-23T16:54:58+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10240457-03",
     "title": "שיא בתקיפות על כלי שיט במצר הורמוז ובאזור המפרץ",
     "summary": "נתונים ממכוני מחקר וארגון הימאות הבינלאומי מצביעים על חודש אוקטובר כחודש בעל מספר התקיפות הגבוה ביותר על מכליות וספינות מסחר במצר הורמוז ובנתיבי מים סמוכים.",
     "axis": "איראן-ארה\"ב",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T18:30:37+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T18:30:37+00:00",
     "last_update_at": "2026-10-24T02:51:40+00:00",
     "what_is_not_verified": "זהות המבצעים הישירה בכל תקיפה ומספר כלי השיט המדויק שנפגע בכל תקרית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_imo",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/october-sees-highest-number-ship-attacks-record-report-says",
       "published_at": "2026-10-24T02:51:40+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_imo",
       "url": "https://www.maariv.co.il/breaking-news/article-1380593",
       "published_at": "2026-10-23T21:39:50+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_imo",
       "url": "https://www.al-monitor.com/originals/2026/10/signs-point-renewed-major-us-military-ops-against-iran",
       "published_at": "2026-10-23T18:30:37+00:00"
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
     "id": "IRAN-10240457-04",
     "title": "ארה\"ב מצמצמת נוכחות דיפלומטית עקב חשש מאיומים ופגיעה בבכירים",
     "summary": "ארצות הברית מפנה עובדים שאינם חיוניים מסעודיה ומצמצמת צוותים בשגרירויות במדינות נוספות באזור, על רקע התרעות מודיעיניות על כוונות איראניות לפגוע בדיפלומטים אמריקנים.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T00:12:22+00:00",
     "last_update_at": "2026-10-24T01:10:02+00:00",
     "what_is_not_verified": "פרטי המזימות המודיעיניות והיקף הפינוי המדויק מכל נציגות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694799",
       "published_at": "2026-10-24T01:10:02+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/ry7xypt2ge",
       "published_at": "2026-10-24T00:12:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10240457-05",
     "title": "תכנון איראני לפגיעה בתשתיות תקשורת וכבלים תת-ימיים",
     "summary": "בכירים איראנים מסרו כי טהראן מחזיקה בתוכניות לפגוע בכבלי אינטרנט תת-ימיים במפרץ במקרה של תקיפה אמריקנית או ישראלית נגדה, כדי לשבש שירותים כלכליים ומערכות בנקאות.",
     "axis": "איראן-ארה\"ב-ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T16:57:41+00:00",
     "last_update_at": "2026-10-23T16:57:41+00:00",
     "what_is_not_verified": "קיומן הממשי של התוכניות המבצעיות ויכולת המימוש שלהן בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48867",
       "published_at": "2026-10-23T16:57:41+00:00"
      }
     ],
     "places": [
      {
       "name": "המפרץ הפרסי",
       "lat": 36.3237,
       "lon": 50.012
      }
     ]
    },
    {
     "id": "IRAN-10240457-06",
     "title": "קריאות בינלאומיות למניעת הסלמה צבאית ומאמצי תיווך דיפלומטיים",
     "summary": "שרי חוץ של מדינות מאירופה והמזרח התיכון שהתכנסו באיסטנבול, לצד פקיסטן ובריטניה, קראו להימנע מתקיפות חדשות נגד איראן ולפתור את המשבר בערוצים מדיניים.",
     "axis": "מדיני-דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T14:45:25+00:00",
     "last_update_at": "2026-10-24T04:53:09+00:00",
     "what_is_not_verified": "מידת ההשפעה של המאמצים הדיפלומטיים על החלטות הממשלים בוושינגטון ובירושלים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_997176ffdfcf11d5",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/miliband-says-uk-redoubling-diplomatic-efforts-end-iran-war",
       "published_at": "2026-10-24T04:53:09+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_997176ffdfcf11d5",
       "url": "https://www.theguardian.com/world/2026/oct/23/european-middle-eastern-ministers-summit-iran-us-israel",
       "published_at": "2026-10-23T17:18:34+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://en.irna.ir/news/86301122/Pakistan-says-in-close-contact-with-Iran-US-urges-restraint",
       "published_at": "2026-10-23T14:45:25+00:00"
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
     "id": "IRAN-10240457-07",
     "title": "קריאת סבא\"א לחידוש הפיקוח על מתקני הגרעין באיראן",
     "summary": "יו\"ר הסוכנות הבינלאומית לאנרגיה אטומית רפאל גרוסי קרא להשבה מהירה של פקחי הסוכנות לאיראן והזהיר מהתערערות מנגנון מניעת הפצת הנשק הגרעיני.",
     "axis": "גרעין איראני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T12:00:00+00:00",
     "last_update_at": "2026-10-23T12:00:00+00:00",
     "what_is_not_verified": "האם איראן תאפשר את שובם של הפקחים ומצב המתקנים בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_un_news",
       "source_root_id": "fh_bbcefb93ad6d8f14",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168664",
       "published_at": "2026-10-23T12:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10240457-08",
     "title": "יירוט טיל בליסטי ששוגר על ידי החות'ים לעבר ריאד",
     "summary": "מערך ההגנה האווירית של הקואליציה בהובלת סעודיה יירט טיל בליסטי ששוגר על ידי כוחות חות'יים מתימן לעבר הבירה ריאד.",
     "axis": "שלוחות איראן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T00:00:00+00:00",
     "last_update_at": "2026-10-24T00:00:00+00:00",
     "what_is_not_verified": "מיקום היירוט המדויק ומידת הנזק או הנפגעים מרסיסים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/24/iran-war-live-israel-launches-targeted-hebron-operation-after-attack?traffic_source=rss",
       "published_at": "2026-10-24T00:00:00+00:00"
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
    "דיווח על פינוי מדעני גרעין רוסים מאיראן במטוס מיוחד",
    "דיווח ראשוני על פיצוצים בלתי מוסברים במצר הורמוז",
    "דיווח ממקורות טורקיים על מועד פתיחה מיידי של מתקפה נגד איראן",
    "מידע מודיעיני אודות שלבי ההתקדמות של מזימות התנקשות בבכירים אמריקנים",
    "תוכניות איראניות לפגיעה מכוונת בכבלי תקשורת תת-ימיים במפרץ"
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "נכונות לבצע פעולות צבאיות נוספות להפחתת האיום האיראני והורדת מחירי הדלק",
      "פתיחות עקרונית להגעה להסכם דיפלומטי אם הצד השני יסכים לתנאים"
     ],
     "inferred": [
      "הפעלת מצור כלכלי ממושך לריסון היכולות האיראניות",
      "הרחקת נציגים דיפלומטיים עקב איומים ביטחוניים ישירים על אנשיה"
     ],
     "forecast": [
      "המשך אכיפת המצור הימי לצד אפשרות למכות מנע אוויריות מוגבלות",
      "שמירה על נוכחות צבאית מוגברת במקביל להיערכות לשינויי המדיניות לקראת הבחירות"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "שימוש במנופי לחץ בתחומי האנרגיה והנפט כדי לשנות את מאזן הכוחות",
      "הגדרת איומי ארה\"ב וישראל כביטוי של ייאוש וחולשה"
     ],
     "inferred": [
      "שיבוש נתיבי השיט המסחרי במצר הורמוז ליצירת לחץ כלכלי עולמי",
      "הרתעת יריבותיה באמצעות איום על תשתיות אזוריות ופגיעה באישים אמריקנים"
     ],
     "forecast": [
      "המשך הגבלת שיתוף הפעולה עם פקחי הגרעין הבינלאומיים",
      "החרפת התקיפות הא-סימטריות במפרץ אם יחודשו התקיפות הישירות בשטחה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "תפיסת ביטחון לאומי המדגישה גביית מחיר משולחיהם של מבצעי תקיפות",
      "היערכות פנימית לאפשרות של בידוד וסנקציות כלכליות"
     ],
     "inferred": [
      "דחיפה לחידוש ולהקדמת התקיפות הצבאיות בשטח איראן",
      "האצת פיתוח יכולות מודיעין וחלל לניטור רציף של שטח האויב"
     ],
     "forecast": [
      "המשך הפעלת לחץ על הממשל האמריקני לפעולה צבאית משותפת ומהירה",
      "הגברת הכוננות המבצעית בחזיתות השונות לאפשרות של הסלמה אזורית נרחבת"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/24/iran-war-live-israel-launches-targeted-hebron-operation-after-attack?traffic_source=rss",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/signs-point-renewed-major-us-military-ops-against-iran",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/23/european-middle-eastern-ministers-summit-iran-us-israel",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86301122/Pakistan-says-in-close-contact-with-Iran-US-urges-restraint",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694799",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380593",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/miliband-says-uk-redoubling-diplomatic-efforts-end-iran-war",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132441",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48867",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168664",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/ry7xypt2ge",
     "accessed_at": "2026-10-24T04:57:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-23T15:25:37+00:00",
  "changes": {
   "IRAN-10240457-01": {
    "kind": "possible",
    "prev": "הנשיא טראמפ מצהיר על כוונה לסיים את המלחמה ומאיים בהמשך תקיפות נגד איראן",
    "score": 0.467
   },
   "IRAN-10240457-02": {
    "kind": "new"
   },
   "IRAN-10240457-03": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "עליית מחירי הנפט בעולם על רקע המתיחות והאיומים במצר הורמוז",
    "score": 0.817
   },
   "IRAN-10240457-04": {
    "kind": "new"
   },
   "IRAN-10240457-05": {
    "kind": "new"
   },
   "IRAN-10240457-06": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מגעים דיפלומטיים ותיווך בינלאומי סביב מצר הורמוז והמשבר",
    "score": 1.0
   },
   "IRAN-10240457-07": {
    "kind": "possible",
    "prev": "האצת שיקום מתקני הגרעין האיראניים והפצת הנחיות התגוננות",
    "score": 0.467
   },
   "IRAN-10240457-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-24T0500__ukraine-202610240500.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-24T05:00:36+00:00",
   "window": {
    "from": "2026-10-23T05:00:36+00:00",
    "to": "2026-10-24T05:00:36+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610240500"
   },
   "summary": "הלחימה בין אוקראינה לרוסיה כוללת מתקפות אוויריות הדדיות נרחבות, הכוללות פגיעות בתשתיות אנרגיה בחצי האי קרים, במחוז קרסנודאר וברוסטוב, לצד הפגזות ושיגורי טילים לעבר קייב, חרקוב ומתקני תעשייה ברוסיה. במקביל למגעים דיפלומטיים ותיאום הפסקת אש מקומית באזור אולשקי, נרשמים עיכובים באספקת מיירטים והגבלות מתמשכות על תקשורת הלוויינים של צבא אוקראינה. בציר המדיני מתקיימים מגעים לקראת שיחות משולשות בהשתתפות ארצות הברית לצד מהלכים כלכליים שנויים במחלוקת סביב סנקציות ודלק.",
   "fronts": [
    {
     "name": "חזית חרסון (אזור אולשקי)",
     "status": "הכרזה על הפסקת אש מקומית למטרות הומניטריות החל מ-27 באוקטובר"
    },
    {
     "name": "עומק השטח הרוסי (רוסטוב, אוריול, טולייטי, טמאן)",
     "status": "מתקפות אוקראיניות ממוקדות נגד תשתיות אנרגיה ומפעלים תעשייתיים"
    },
    {
     "name": "העורף האוקראיני (קייב, חרקוב)",
     "status": "מתקפות רוסיות באמצעות טילים בליסטיים, חימוש מצרר וכלי טיס בלתי מאוישים"
    },
    {
     "name": "חצי האי קרים",
     "status": "השבתת חשמל נרחבת עקב פגיעה במערכות אספקת האנרגיה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10240500-01",
     "title": "השבתת חשמל נרחבת בחצי האי קרים ופגיעה בתחנת כוח בטמאן",
     "summary": "הפסקת חשמל נרחבת פגעה בחצי האי קרים בעקבות מתקפת כלי טיס בלתי מאוישים, ובמקביל נגרם נזק לתחנת משנה של רשת החשמל בטמאן שבמחוז קרסנודאר ברוסיה.",
     "axis": "חצי האי קרים ומחוז קרסנודאר",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T04:25:00+00:00",
     "last_update_at": "2026-10-24T04:41:36+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומשך השבתת החשמל אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/mass-blackouts-reported-across-occupied-crimea/",
       "published_at": "2026-10-24T04:41:36+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177692-largescale-blackout-hits-crimea-after-drone-attack.html",
       "published_at": "2026-10-24T04:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "טמאן, רוסיה",
       "lat": 45.2159,
       "lon": 36.7191
      },
      {
       "name": "חצי האי קרים, אוקראינה",
       "lat": 45.2835,
       "lon": 34.2008
      }
     ]
    },
    {
     "id": "UKRAINE-10240500-02",
     "title": "הסכם הפסקת אש הומניטרית בעיר אולשקי",
     "summary": "רוסיה ואוקראינה סיכמו על הפסקת כל הפעולות הצבאיות באזור העיר אולשקי החל מ-27 באוקטובר כדי לאפשר העברת סיוע הומניטרי ופינוי אזרחים.",
     "axis": "חזית חרסון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T16:10:34+00:00",
     "last_update_at": "2026-10-24T01:20:54+00:00",
     "what_is_not_verified": "מידת היישום בפועל של הפסקת האש בשטח לא אומתה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_efbb461d8e997419",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
       "published_at": "2026-10-24T01:20:54+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_efbb461d8e997419",
       "url": "https://www.ukrinform.net/rubric-ato/4177661-general-staff-ukraine-to-implement-ceasefire-in-oleshky-area-starting-october-27.html",
       "published_at": "2026-10-23T20:59:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_efbb461d8e997419",
       "url": "https://www.theguardian.com/world/live/2026/oct/23/starlink-ukraine-musk-trump-russia-black-sea-strikes-france-milan-europe-protests-latest-news-updates",
       "published_at": "2026-10-23T19:51:21+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ea640f492639d562",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059482/",
       "published_at": "2026-10-23T19:24:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_efbb461d8e997419",
       "url": "https://www.theguardian.com/world/2026/oct/23/ukraine-troops-report-ongoing-problems-with-starlink-satellite-network",
       "published_at": "2026-10-23T16:10:34+00:00"
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
     "id": "UKRAINE-10240500-03",
     "title": "תקיפה אוקראינית על מפעל כימי בטולייטי",
     "summary": "כוחות אוקראיניים תקפו מתקן של מפעל כימי בעיר טולייטי שבשטח רוסיה.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T03:36:11+00:00",
     "last_update_at": "2026-10-24T03:36:11+00:00",
     "what_is_not_verified": "מידת הנזק ואמצעי התקיפה אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48880",
       "published_at": "2026-10-24T03:36:11+00:00"
      }
     ],
     "places": [
      {
       "name": "טולייטי, רוסיה",
       "lat": 53.5099,
       "lon": 49.4189
      }
     ]
    },
    {
     "id": "UKRAINE-10240500-04",
     "title": "יירוט כלי טיס בלתי מאוישים על ידי ההגנה האווירית של אוקראינה",
     "summary": "מערך ההגנה האווירית האוקראיני ניטרל קרוב ל-2,300 מתוך 2,597 כלי טיס בלתי מאוישים תוקפים ששיגרה רוסיה במהלך השבוע החולף.",
     "axis": "המרחב האווירי של אוקראינה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T03:27:00+00:00",
     "last_update_at": "2026-10-24T03:27:00+00:00",
     "what_is_not_verified": "נתוני השיגור והיירוט נמסרו על ידי צד אחד ואינם מאומתים באופן עצמאי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177690-russia-launched-2597-drones-at-ukraine-over-past-week-air-defenses-neutralized-over-87.html",
       "published_at": "2026-10-24T03:27:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10240500-05",
     "title": "המשך הגבלות המהירות על רשת סטארלינק באוקראינה",
     "summary": "נשיא אוקראינה וגורמים רשמיים מדווחים כי הגבלות המהירות על מסופי התקשורת הלוויינית סטארלינק והגרסה הצבאית סטארשילד מוסיפות לחול, לצד עיכוב באספקת טילי יירוט.",
     "axis": "סיוע טכנולוגי וצבאי לאוקראינה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T17:42:00+00:00",
     "last_update_at": "2026-10-24T03:11:42+00:00",
     "what_is_not_verified": "מקור ההנחיה להטלת המגבלות והמניע המדויק אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21694840",
       "published_at": "2026-10-24T03:11:42+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-lawmakers-demand-answers-from-elon-musk-over-ukraine-starlink-restrictions/",
       "published_at": "2026-10-23T23:25:08+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/23/zelensky-says-speed-restrictions-remain-on-starlink-and-its-military-version-starshield-in-ukraine-despite-trump-s-assurances",
       "published_at": "2026-10-23T20:13:10+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-23T18:52:17+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059475/",
       "published_at": "2026-10-23T17:42:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10240500-06",
     "title": "תקיפת טילים רוסית על קייב",
     "summary": "כוחות רוסיים שיגרו טילים בליסטיים וחימוש מצרר לעבר בירת אוקראינה.",
     "axis": "חזית קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T02:28:06+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T02:28:06+00:00",
     "last_update_at": "2026-10-24T02:28:06+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזקים בקייב לא צוין ולא אומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-maybe-not-such-a-big-humanitarian-as-putin-he-quips-as-ukraines-relations-with-trump-unravel/",
       "published_at": "2026-10-24T02:28:06+00:00"
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
     "id": "UKRAINE-10240500-07",
     "title": "החזרת שבעה אזרחים אוקראינים במסגרת חילופי שבויים",
     "summary": "אוקראינה החזירה לשטחה שבעה אזרחים נוספים במסגרת הליך חילופי שבויים מול רוסיה.",
     "axis": "חילופי שבויים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T01:31:00+00:00",
     "last_update_at": "2026-10-24T01:31:00+00:00",
     "what_is_not_verified": "זהות המשוחררים מן הצד הרוסי לא פורטה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4177476-ukraine-repatriates-seven-more-civilians-in-exchange-with-russia.html",
       "published_at": "2026-10-24T01:31:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10240500-08",
     "title": "משלוח מכליות דלק מרוסיה לכיוון צפון אמריקה",
     "summary": "מכליות הנושאות סולר רוסי יצאו לכיוון צפון אמריקה במסגרת הבנות בין ארצות הברית לרוסיה, במקביל להקלה זמנית בסנקציות על דלק רוסי.",
     "axis": "סנקציות ומסחר בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T01:20:54+00:00",
     "last_update_at": "2026-10-24T01:20:54+00:00",
     "what_is_not_verified": "מועד הגעת המטענים המדויק ותנאי ההסכם המלאים לא אומתו באופן בלתי תלוי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
       "published_at": "2026-10-24T01:20:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10240500-09",
     "title": "עמדת זלנסקי לגבי הקפאת המלחמה בקו המגע ומגעים משולשים",
     "summary": "נשיא אוקראינה הצהיר על נכונות להסכם שיקפיא את הלחימה בקו המגע הקיים ללא הכרה רשמית בכיבוש, וציין כי שיחות משולשות בהשתתפות רוסיה וארצות הברית יחלו בנובמבר.",
     "axis": "משא ומתן דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T19:45:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T19:45:30+00:00",
     "last_update_at": "2026-10-24T01:12:00+00:00",
     "what_is_not_verified": "הסכמת הצד הרוסי למתווה הקפאה בקו המגע אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_abc",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059494/",
       "published_at": "2026-10-24T01:12:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_abc",
       "url": "https://kyivindependent.com/trilateral-peace-talks-with-russia-us-negotiators-to-begin-in-november-zelensky-says/",
       "published_at": "2026-10-23T19:45:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10240500-10",
     "title": "הפסקת חשמל ברוסטוב בעקבות תקיפה",
     "summary": "זרם החשמל הושבת בעיר רוסטוב שברוסיה בעקבות פגיעה מן הצד האוקראיני.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T23:23:21+00:00",
     "last_update_at": "2026-10-23T23:23:21+00:00",
     "what_is_not_verified": "סוג החימוש ששימש בתקיפה אינו מאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48878",
       "published_at": "2026-10-23T23:23:21+00:00"
      }
     ],
     "places": [
      {
       "name": "רוסטוב, רוסיה",
       "lat": 47.2223,
       "lon": 39.7199
      }
     ]
    },
    {
     "id": "UKRAINE-10240500-11",
     "title": "תקיפת טילי שיוט על מפעל לייצור רכיבי טילים באוריול",
     "summary": "טילי שיוט ששוגרו מאוקראינה פגעו במפעל פרוטון בעיר אוריול ברוסיה, אתר המשמש לייצור רכיבים למערכות טילים.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T15:08:59+00:00",
     "last_update_at": "2026-10-23T19:26:37+00:00",
     "what_is_not_verified": "היקף הנזק המבני במפעל לא אומת מגורם רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48871",
       "published_at": "2026-10-23T19:26:37+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48863",
       "published_at": "2026-10-23T15:08:59+00:00"
      }
     ],
     "places": [
      {
       "name": "אוריול, רוסיה",
       "lat": 52.9709,
       "lon": 36.0642
      }
     ]
    },
    {
     "id": "UKRAINE-10240500-12",
     "title": "פגיעת כלי טיס בלתי מאויש בתחנת דלק בחרקוב",
     "summary": "כלי טיס בלתי מאויש של צבא רוסיה פגע בתחנת תדלוק בעיר חרקוב.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T17:21:01+00:00",
     "last_update_at": "2026-10-23T17:21:01+00:00",
     "what_is_not_verified": "נפגעים ונזק ברכוש לא פורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48868",
       "published_at": "2026-10-23T17:21:01+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על אובדן ששת מיליארדי דולרים של אוקראינה עקב השבתת נמלים",
    "טענת בכירים לשעבר בארצות הברית על מעורבות ישירה של אילון מאסק בהגבלת סטארשילד",
    "טענה בדבר הרעלת אנשי צבא אוקראינים על ידי נערה בשליחות שירות הביטחון הרוסי",
    "מידת ההתקדמות בשיחות בין השליח האמריקני לנשיא רוסיה בסנקט פטרבורג"
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
     "value": 1.1193,
     "unit": "USD",
     "change_pct": -0.11,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "סיום הלחימה והקפאת המצב לאורך קו המגע הנוכחי",
      "אי-הכרה בשטחים הכבושים כשייכים לרוסיה",
      "הסרת מגבלות המהירות על רשתות סטארלינק וקבלת טילי יירוט שהובטחו"
     ],
     "inferred": [
      "פגיעה שיטתית במערכי אנרגיה ותעשייה צבאית בעומק רוסיה כדי להפעיל לחץ על מוסקבה",
      "שימור רצף הלחימה תוך הימנעות מנסיגה חד-צדדית משטחי דונבאס"
     ],
     "forecast": [
      "המשך הסתמכות על מערכות יירוט מערביות לצד ניסיונות להבטיח את רשתות התקשורת הלוויינית",
      "נכונות להשתתף בשיחות משולשות בנובמבר תוך עמידה על קווי גבול זמניים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "החלת משטר הפסקת אש מקומי בחזית חרסון סמוך לאולשקי לאפשר סיוע",
      "חידוש משא ומתן משולש בהשתתפות ארצות הברית ואוקראינה",
      "ייצוא דלק לשווקים בינלאומיים במסגרת הבנות להסרת סנקציות"
     ],
     "inferred": [
      "שחיקת התשתיות האזרחיות והאנרגטיות של אוקראינה באמצעות מתקפות כטב\"מים וטילים מסיביות",
      "העמקת השליטה בשטחים הכבושים והשפעה על ההנהגה הפוליטית באוקראינה"
     ],
     "forecast": [
      "המשך תקיפות מרוחקות לצד עמידה בהפוגות מקומיות נקודתיות",
      "ניצול ערוצי המשא ומתן עם ארצות הברית להקלה נוספת במשטר העיצומים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21694840",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/trilateral-peace-talks-with-russia-us-negotiators-to-begin-in-november-zelensky-says/",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/23/zelensky-says-speed-restrictions-remain-on-starlink-and-its-military-version-starshield-in-ukraine-despite-trump-s-assurances",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059494/",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48868",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-society/4177476-ukraine-repatriates-seven-more-civilians-in-exchange-with-russia.html",
     "accessed_at": "2026-10-24T05:00:36+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-23T15:28:58+00:00",
  "changes": {
   "UKRAINE-10240500-01": {
    "kind": "new"
   },
   "UKRAINE-10240500-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "הסכמה על הפסקת אש מקומית באולשקי בתיווך מלניה טראמפ",
    "score": 1.0
   },
   "UKRAINE-10240500-03": {
    "kind": "new"
   },
   "UKRAINE-10240500-04": {
    "kind": "new"
   },
   "UKRAINE-10240500-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מגבלות מתמשכות על רשת סטארלינק עבור צבא אוקראינה",
    "score": 1.0
   },
   "UKRAINE-10240500-06": {
    "kind": "new"
   },
   "UKRAINE-10240500-07": {
    "kind": "possible",
    "prev": "עסקת חילופי שבויים הדדית בין רוסיה לאוקראינה",
    "score": 0.467
   },
   "UKRAINE-10240500-08": {
    "kind": "new"
   },
   "UKRAINE-10240500-09": {
    "kind": "new"
   },
   "UKRAINE-10240500-10": {
    "kind": "new"
   },
   "UKRAINE-10240500-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעת טילי שיוט אוקראיניים במפעל בעיר אוריול",
    "score": 1.0
   },
   "UKRAINE-10240500-12": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-23T2342__north-202610232342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-23T23:42:39+00:00",
   "window": {
    "from": "2026-10-22T23:42:39+00:00",
    "to": "2026-10-23T23:42:39+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610232342"
   },
   "summary": "בגזרה הצפונית נמשכת פעילות צבאית ישראלית הכוללת ירי ארטילרי וגיחות כטב\"מים בדרום לבנון ובמרחב קוניטרה בסוריה, לצד מחאות מקומיות נגד החדירות הישראליות בדרום סוריה. בזירה הפנים-לבנונית מתפתחת מחלוקת פוליטית סביב תפיסת מצבורי חומרי נפץ של חזבאללה ושאלת ההעמדה לדין של הארגון, במקביל לצמצום כוח האדם הדיפלומטי האמריקני במדינה. במקביל, נרשמת מתיחות מדינית סביב עמדות טורקיה וישראל, והשפעתן על היציבות במרחב הסורי והאזורי.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "חילופי אש ארטילריים, גיחות כטב\"מים ונוכחות צבאית ישראלית ברצועת ביטחון"
    },
    {
     "name": "דרום סוריה (קוניטרה / א-סווידאא')",
     "status": "הפגזות ישראליות נקודתיות, מחאות עממיות ומתיחות פנימית בין הפלגים"
    },
    {
     "name": "פנים לבנון (ביירות ומוסדות המדינה)",
     "status": "משבר פוליטי סביב חימוש חזבאללה והיערכות דיפלומטית אמריקנית להסלמה"
    }
   ],
   "events": [
    {
     "id": "NORTH-10232342-01",
     "title": "הפגזות ארטילריות ותקיפות ישראליות בדרום לבנון",
     "summary": "צבא ישראל ביצע הפגזות ארטילריות ותקיפות לעבר שורת עיירות וכפרים בדרום לבנון, לצד טיסות של כלי טיס בלתי מאוישים.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T15:00:52+00:00",
     "last_update_at": "2026-10-23T23:19:40+00:00",
     "what_is_not_verified": "אין אימות עצמאי מעבר לסוכנות הידיעות הלאומית הלבנונית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_nna",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-military-shells-southern-lebanon-towns-and-villages",
       "published_at": "2026-10-23T23:19:40+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_nna",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-artillery-shelling-hit-southern-lebanon-amid-intensified-drone-activity/4098794",
       "published_at": "2026-10-23T15:00:52+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-ח'יאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      },
      {
       "name": "א-נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "בית יהון, לבנון",
       "lat": 33.1582,
       "lon": 35.4212
      }
     ]
    },
    {
     "id": "NORTH-10232342-02",
     "title": "פעילות כלי טיס בלתי מאוישים ישראליים מעל ביירות וסביבתה",
     "summary": "דיווחים על פעילות כטב\"מים ישראליים בגובה נמוך בשמי ביירות, הפרברים הדרומיים וצור.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T15:00:52+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T15:00:52+00:00",
     "last_update_at": "2026-10-23T17:34:45+00:00",
     "what_is_not_verified": "היקף הגידול המדויק בפעילות והאם מדובר בסימן למתקפה קרובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/are-israels-drones-signalling-new-escalation-hezbollah",
       "published_at": "2026-10-23T17:34:45+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-artillery-shelling-hit-southern-lebanon-amid-intensified-drone-activity/4098794",
       "published_at": "2026-10-23T15:00:52+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      },
      {
       "name": "צור, לבנון",
       "lat": 33.2721,
       "lon": 35.1964
      }
     ]
    },
    {
     "id": "NORTH-10232342-03",
     "title": "מחלוקת בממשלת לבנון על הפניית תיק פיצוצי דהר אל-בידר למועצה המשפטית",
     "summary": "הפניית תיק תפיסת 800 ק\"ג חומרי נפץ של חיזבאללה למועצה המשפטית עוררה ויכוח פוליטי סוער בתוך ישיבת הממשלה הלבנונית.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T14:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:00:00+00:00",
     "last_update_at": "2026-10-23T14:00:00+00:00",
     "what_is_not_verified": "היעד הסופי המדויק של חומרי הנפץ שנתפסו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/964415/dahr-al-baidar-explosives-case-sparks-cabinet-dispute-over-judicial-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964415",
       "published_at": "2026-10-23T14:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-בידר, לבנון",
       "lat": 33.8103,
       "lon": 35.7619
      }
     ]
    },
    {
     "id": "NORTH-10232342-04",
     "title": "ירי ארטילרי ישראלי לעבר כפרים במחוז קוניטרה בסוריה",
     "summary": "כוחות ישראליים שיגרו אש ארטילרית שפגעה בפאתי שני כפרים באזור קוניטרה בדרום סוריה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T15:48:09+00:00",
     "last_update_at": "2026-10-23T15:48:09+00:00",
     "what_is_not_verified": "היקף הנפגעים או הנזק המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-artillery-fire-hits-outskirts-of-2-villages-in-syria-s-quneitra-province/4098847",
       "published_at": "2026-10-23T15:48:09+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-חמידיה, סוריה",
       "lat": 34.6638,
       "lon": 37.0159
      }
     ]
    },
    {
     "id": "NORTH-10232342-05",
     "title": "הפגנות בסוריה נגד חדירות ותקיפות צה\"ל בדרום המדינה",
     "summary": "מאות אזרחים הפגינו ברחבי סוריה במחאה על פשיטות ותקיפות חוזרות של כוחות צה\"ל בדרום, בעקבות תקרית שבה נהרג אדם בעל מוגבלות.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T15:30:27+00:00",
     "last_update_at": "2026-10-23T15:30:27+00:00",
     "what_is_not_verified": "נסיבות התקרית המדויקות בה נהרג האזרח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/hundreds-syrians-protest-repeated-israeli-incursions",
       "published_at": "2026-10-23T15:30:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10232342-06",
     "title": "הצהרות שגריר ארה\"ב בטורקיה לגבי המנהיג הדרוזי בסוריה ויחסי ישראל-טורקיה",
     "summary": "השגריר תום באראכ מתח ביקורת על השיח' חכמת אלהג'רי בדרום סוריה, טען לקשר שלו לסחר בסמים, והגדיר את יחסי ישראל וטורקיה כריב נעורים.",
     "axis": "סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T18:01:43+00:00",
     "last_update_at": "2026-10-23T19:54:16+00:00",
     "what_is_not_verified": "האשמות לגבי ייצור וסחר בקפטגון על ידי גורמים מקומיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21694357",
       "published_at": "2026-10-23T19:54:16+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132439",
       "published_at": "2026-10-23T18:33:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132437",
       "published_at": "2026-10-23T18:01:43+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידאא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      },
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-10232342-07",
     "title": "צמצום נוכחות דיפלומטית אמריקנית בשגרירות בביירות",
     "summary": "מחלקת המדינה האמריקנית פועלת לצמצום כוח האדם בשגרירות ארה\"ב בלבנון על רקע חשש גובר מהסלמה אזורית.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T22:53:08+00:00",
     "last_update_at": "2026-10-23T22:53:08+00:00",
     "what_is_not_verified": "מספר אנשי הצוות המדויק שעוזב את ביירות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694739",
       "published_at": "2026-10-23T22:53:08+00:00"
      }
     ],
     "places": [
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    }
   ],
   "not_verified": [
    "טענות השגריר באראכ על מעורבות הנהגת הדרוזים בסוריה בייצור וסחר בסמים",
    "ההערכות לפיהן כטב\"מים מעל ביירות מעידים על תקיפה ישראלית רחבה ומיידית",
    "מספר הנפגעים המדויק בתקיפות ובחדירות צה\"ל בדרום סוריה ובדרום לבנון"
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "שמירה על אזור ביטחון בדרום לבנון עד לפירוק חזבאללה מנשקו ותשתיותיו הצבאיות",
      "מניעת התבססות איומים ופגיעה בתשתיות עוינות בסוריה ובלבנון"
     ],
     "inferred": [
      "הפעלת לחץ צבאי ופסיכולוגי רציף על חיזבאללה וממשלת לבנון כדי לאלץ נסיגה של הארגון מקו הגבול",
      "יצירת חיץ ביטחוני קרקעי ואווירי בדרום סוריה למניעת התקרבות גורמים עוינים"
     ],
     "forecast": [
      "המשך החזקת אזור הביטחון בדרום לבנון ללא קשר לתוצאות הבחירות בישראל",
      "המשך תקיפות נקודתיות וגיחות איסוף מודיעין בשמי לבנון וסוריה"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "הבעת גינוי לאירועי טרור ופגיעה באתרי פולחן דתיים באזור",
      "התנגדות להליכים משפטיים ופוליטיים פנימיים בלבנון נגד הארגון ופעילותו"
     ],
     "inferred": [
      "שימור המאגר הצבאי וחומרי הנפץ לשימוש עתידי, והדיפת ניסיונות ממשלת לבנון להגביל את כוחו",
      "שמירה על יכולת הרתעה מול ישראל חרף הלחץ הצבאי והמדיני הגובר"
     ],
     "forecast": [
      "המשך התנגדות עיקשת לפירוק מנשק במסגרת המשא ומתן עם ישראל",
      "החרפת העימותים הפוליטיים בתוך ממשלת לבנון מול השרים המתנגדים לארגון"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הגדרת הכיבוש הישראלי כמקור המרכזי לאי-יציבות אזורית",
      "קידום פתרונות דיפלומטיים ומניעת הסלמות צבאיות נוספות במזרח התיכון"
     ],
     "inferred": [
      "ביסוס מעמדה כמתווכת אזורית מובילה וצמצום חופש הפעולה הצבאי של ישראל בסוריה",
      "בלימת השפעתם של כוחות מקומיים הנתמכים על ידי ישראל או ארה\"ב בדרום סוריה"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים מול שותפות אזוריות לגיבוש עמדה נגד מהלכי ישראל",
      "שמירה על ערוצי שיח פתוחים מול ארה\"ב כדי למנוע הידרדרות לעימות רחב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/hundreds-syrians-protest-repeated-israeli-incursions",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-artillery-fire-hits-outskirts-of-2-villages-in-syria-s-quneitra-province/4098847",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21694739",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/964415/dahr-al-baidar-explosives-case-sparks-cabinet-dispute-over-judicial-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964415",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-military-shells-southern-lebanon-towns-and-villages",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/are-israels-drones-signalling-new-escalation-hezbollah",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132437",
     "accessed_at": "2026-10-23T23:42:39+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T23:52:33+00:00",
  "changes": {
   "NORTH-10232342-01": {
    "kind": "new"
   },
   "NORTH-10232342-02": {
    "kind": "new"
   },
   "NORTH-10232342-03": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "משבר בממשלת לבנון סביב פרשת הובלת חומרי הנפץ",
    "score": 0.817
   },
   "NORTH-10232342-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פיצוץ מבנה נטוש וירי לעבר שטחים חקלאיים בדרום סוריה",
    "score": 0.65
   },
   "NORTH-10232342-05": {
    "kind": "down",
    "from": "verified",
    "to": "initial",
    "prev": "תקיפות והפגזות צה\"ל בדרום לבנון ופעילות בכפרים",
    "score": 0.65
   },
   "NORTH-10232342-06": {
    "kind": "new"
   },
   "NORTH-10232342-07": {
    "kind": "new"
   }
  }
 }
};
