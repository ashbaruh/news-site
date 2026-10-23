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
  "draft": "drafts/iran/2026-10-23T1525__iran-202610231525.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-23T15:25:37+00:00",
   "window": {
    "from": "2026-10-22T15:25:37+00:00",
    "to": "2026-10-23T15:25:37+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610231525"
   },
   "summary": "העימות הצבאי והכלכלי בין ארצות הברית וישראל לבין איראן מחריף תחת מצור ימי אמריקאי ממושך ואיומים הדדיים בחידוש תקיפות נרחבות. וושינגטון וירושלים נערכות לאפשרות של מהלומות צבאיות נוספות על תשתיות גרעין וטילים, בעוד טהרן מאיימת לפגוע במתקני אנרגיה וטכנולוגיה ברחבי המפרץ ופועלת לשיקום אתריה שנפגעו. במקביל, פעילות החות'ים בים האדום ושיבושי השיט במצרי הורמוז ובאב אל-מנדב גורמים לעלייה חדה במחירי הנפט ומניעים מאמצי תיווך בינלאומיים.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "מתיחות ביטחונית גבוהה, מצור ימי אמריקאי על נמלים ואיומים איראניים בפגיעה בנתיבי שיט ובתשתיות אזוריות"
    },
    {
     "name": "עימות צבאי-אסטרטגי (ארה\"ב וישראל מול איראן)",
     "status": "חילופי איומים בהסלמה, היערכות לתקיפת אתרי גרעין וטילים לצד כוננות ספיגה והתגוננות באיראן"
    },
    {
     "name": "הים האדום ובאב אל-מנדב (שלוחות איראן)",
     "status": "תקיפות פעילי חות'ים נגד יעדים סעודיים ואיומים על צירי סחר ימיים"
    },
    {
     "name": "הזירה המדינית והאנרגטית הבינלאומית",
     "status": "עליית מחירי הנפט בעולם מעל 115 דולר ומגעים דיפלומטיים בריכוז טורקיה, רוסיה ופקיסטן"
    }
   ],
   "events": [
    {
     "id": "IRAN-10231525-01",
     "title": "הנשיא טראמפ מצהיר על כוונה לסיים את המלחמה ומאיים בהמשך תקיפות נגד איראן",
     "summary": "נשיא ארצות הברית דונלד טראמפ הצהיר כי ניתן לסיים את המלחמה מול איראן במהירות או להמתין לדעיכתה, וציין כי ייתכן שארצות הברית תמשיך להכות באיראן, מה שיוביל לירידת מחירי הדלק.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T20:31:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T20:31:06+00:00",
     "last_update_at": "2026-10-23T15:04:33+00:00",
     "what_is_not_verified": "האופן והמועד המדויקים שבהם המלחמה תסתיים או יחודשו התקיפות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380513",
       "published_at": "2026-10-23T15:04:33+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132381",
       "published_at": "2026-10-23T06:45:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132373",
       "published_at": "2026-10-22T20:31:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10231525-02",
     "title": "אזהרות איראניות מפני תקיפות תגמול במפרץ ועמידה במצב חירום",
     "summary": "בכירים בטהרן, בהם מוחסן רזאי, הודיעו כי תקיפה ישראלית-אמריקנית חדשה תיענה במתקפות ללא קווים אדומים נגד מתקני נפט, מרכזי נתונים ובינה מלאכותית וכבלים תת-ימיים במדינות המפרץ, בעוד מפקד כוחות היבשה קרא למוכנות עקב ניסיונות לפגוע בלכידות הצבא.",
     "axis": "איראן-מדינות המפרץ/ישראל/ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T15:03:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T15:03:00+00:00",
     "last_update_at": "2026-10-23T13:27:04+00:00",
     "what_is_not_verified": "מידת היישום המעשי של פגיעה בתשתיות אזרחיות במדינות המפרץ בעת תקיפה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_54212169dce761f0",
       "url": "https://www.theguardian.com/business/2026/oct/23/oil-five-month-high-fears-us-renews-strikes-iran",
       "published_at": "2026-10-23T13:27:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_54212169dce761f0",
       "url": "https://en.irna.ir/news/86301057/Enemy-seeks-to-disrupt-armed-forces-cohesion-Iranian-commander",
       "published_at": "2026-10-23T13:21:52+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_54212169dce761f0",
       "url": "https://www.theguardian.com/world/2026/oct/22/iran-threatens-seven-gulf-countries-us-israel-renew-attacks",
       "published_at": "2026-10-22T15:03:00+00:00"
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
     "id": "IRAN-10231525-03",
     "title": "היערכות ודיונים לקראת גל תקיפות אמריקאי-ישראלי אפשרי לאחר הבחירות",
     "summary": "דיווחים מצביעים על כך שממשל טראמפ וישראל שוקלים חידוש מתקפות צבאיות מקיפות נגד מאגרי טילים, מתקני תשתית ואתרי גרעין באיראן, לרבות אפשרות שימוש בפצצה כבדה נגד מתחם תת-קרקעי בהר המכוש.",
     "axis": "ארה\"ב/ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T15:34:34+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T15:34:34+00:00",
     "last_update_at": "2026-10-23T11:32:09+00:00",
     "what_is_not_verified": "האם אכן תתקבל החלטה על תקיפה לאחר בחירות האמצע או הבחירות בישראל, והיקף המטרות המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610234921",
       "published_at": "2026-10-23T11:32:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/how-netanyahu-could-attack-iran-force-israel-unity-government-after-elections",
       "published_at": "2026-10-23T10:36:51+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/nyt-reports-plans-for-fresh-strikes-on-iran-after-the-us-midterm-elections",
       "published_at": "2026-10-23T08:40:09+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21691337",
       "published_at": "2026-10-23T03:52:26+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/iran-pushes-hard-on-its-nuclear-rebuild-daring-trump-to-strike-again/",
       "published_at": "2026-10-23T00:43:00+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/video/20261022-reports-show-us-and-israel-plan-new-strikes-on-iran",
       "published_at": "2026-10-22T15:34:34+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10231525-04",
     "title": "מצור ימי אמריקאי על נמלי איראן ושיבוש ייצוא הנפט",
     "summary": "ארצות הברית ממשיכה להטיל מצור על נמלי איראן שהגיע ל-100 ימים ומנע ייצוא נפט בסך מיליארדי דולרים, מה שגרר צניחה במשלוחי נפט שהוגדרו כמלזיים שהועברו לסין.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T18:48:35+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T18:48:35+00:00",
     "last_update_at": "2026-10-23T11:32:09+00:00",
     "what_is_not_verified": "הערכת היקף הנזק הכספי הכולל למשק האיראני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610234921",
       "published_at": "2026-10-23T11:32:09+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610222999",
       "published_at": "2026-10-23T06:58:57+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132372",
       "published_at": "2026-10-22T18:48:35+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10231525-05",
     "title": "עליית מחירי הנפט בעולם על רקע המתיחות והאיומים במצר הורמוז",
     "summary": "מחיר חבית נפט מסוג ברנט עלה מעל 115 דולר לחבית עקב חששות מהסלמה בעימות הצבאי, חידוש תקיפות אמריקאיות ואיומים להפרעות בנתיבי השיט במצר הורמוז.",
     "axis": "איראן-מפרץ הורמוז/שוק האנרגיה",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T16:10:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T16:10:36+00:00",
     "last_update_at": "2026-10-23T13:27:04+00:00",
     "what_is_not_verified": "טענות הדדיות בדבר בימוי מתקפות והנחת מוקשים ימיים במצר.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_3271d01f4095b676",
       "url": "https://www.theguardian.com/business/2026/oct/23/oil-five-month-high-fears-us-renews-strikes-iran",
       "published_at": "2026-10-23T13:27:04+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_3271d01f4095b676",
       "url": "https://t.me/lelotsenzura/94744",
       "published_at": "2026-10-22T16:10:36+00:00"
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
     "id": "IRAN-10231525-06",
     "title": "האצת שיקום מתקני הגרעין האיראניים והפצת הנחיות התגוננות",
     "summary": "תצלומי לוויין חשפו עבודות שיקום מהירות במתקני ייצור וגרעין באיראן שנפגעו בעבר, במקביל לפרסום הנחיות אזרחיות באיראן להתגוננות מפני תקיפות באתרי גרעין וקריאות באו\"ם נגד התנהלות סבא\"א.",
     "axis": "איראן-גרעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T17:38:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T17:38:36+00:00",
     "last_update_at": "2026-10-23T12:11:17+00:00",
     "what_is_not_verified": "סטטוס הפעילות המבצעית בתוך המתקנים התת-קרקעיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_9f7e790cb8c21517",
       "url": "https://en.irna.ir/news/86301031/Iran-demands-end-to-selective-IAEA-statute-implementation",
       "published_at": "2026-10-23T12:11:17+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_9f7e790cb8c21517",
       "url": "https://www.fdd.org/analysis/iran-pushes-hard-on-its-nuclear-rebuild-daring-trump-to-strike-again/",
       "published_at": "2026-10-23T00:43:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_9f7e790cb8c21517",
       "url": "https://t.me/alexmehacarmel/48833",
       "published_at": "2026-10-22T17:38:36+00:00"
      }
     ],
     "places": [
      {
       "name": "נתנז, איראן",
       "lat": 33.5071,
       "lon": 51.9136
      },
      {
       "name": "וינה, אוסטריה",
       "lat": 48.2084,
       "lon": 16.3725
      }
     ]
    },
    {
     "id": "IRAN-10231525-07",
     "title": "התרחבות איומי החות'ים בים האדום ופגיעה באינטרסים סעודיים",
     "summary": "פעולות תקיפה של החות'ים בתימן על תשתיות נפט סעודיות ושליטתם במצר באב אל-מנדב מגבירות את הלחץ האזורי, לצד דיווחים על תקיפות אוויריות סעודיות בצנעא והרחבת מפעל טילים סעודי להרתעה מול איראן.",
     "axis": "שלוחות איראן (חות'ים)-ערב הסעודית/נתיבי שיט",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T10:46:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T10:46:29+00:00",
     "last_update_at": "2026-10-23T12:10:20+00:00",
     "what_is_not_verified": "מידת התיאום והשליטה הישירה של טהרן במהלכי החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-bab-al-mandab-and-saudi-arabia-tehrans-strategic-calculus-balance",
       "published_at": "2026-10-23T12:10:20+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86301006/Saudi-airstrikes-target-Yemen-s-capital-Sanaa",
       "published_at": "2026-10-23T11:34:22+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-saudi-missile-plant-expansion-may-produce-more-powerful-missiles-study",
       "published_at": "2026-10-23T10:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "מוח'א, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    },
    {
     "id": "IRAN-10231525-08",
     "title": "מגעים דיפלומטיים ותיווך בינלאומי סביב מצר הורמוז והמשבר",
     "summary": "שרים ממדינות אירופה והמזרח התיכון נועדו באיסטנבול לדיון במצב מצר הורמוז, בעוד רוסיה ופקיסטן מנסות לקדם ערוצי הידברות וריסון בין ארצות הברית, איראן ומדינות המפרץ.",
     "axis": "דיפלומטיה אזורית ובינלאומית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-22T14:41:19+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-22T14:41:19+00:00",
     "last_update_at": "2026-10-23T14:45:25+00:00",
     "what_is_not_verified": "נכונות הצדדים הלוחמים להתפשר על בסיס היוזמות השונות.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://en.irna.ir/news/86301122/Pakistan-says-in-close-contact-with-Iran-US-urges-restraint",
       "published_at": "2026-10-23T14:45:25+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://www.al-monitor.com/originals/2026/10/european-mideast-foreign-ministers-hold-talks-istanbul",
       "published_at": "2026-10-23T12:30:28+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "fh_3d16de44a96bb57f",
       "url": "https://www.fdd.org/analysis/washington-should-resist-russias-gulf-mediation-bid/",
       "published_at": "2026-10-22T14:41:19+00:00"
      }
     ],
     "places": [
      {
       "name": "איסטנבול, טורקיה",
       "lat": 41.0064,
       "lon": 28.9759
      },
      {
       "name": "מנאמה, בחריין",
       "lat": 26.2235,
       "lon": 50.5822
      }
     ]
    }
   ],
   "not_verified": [
    "קיומה ומועדה המדויק של תוכנית תקיפה אמריקאית-ישראלית לאחר בחירות האמצע או הבחירות בישראל",
    "ההיתכנות המבצעית של הטלת פצצה כבדה מסוג MOAB על מתחם הר המכוש",
    "טענות הנשיא טראמפ כי איראן מביימת תקיפות ומניחה מוקשים ימיים במצר הורמוז",
    "היקף הנזק הכלכלי הבלעדי של המצור הימי הנאמד ב-25 מיליארד דולר",
    "ההערכות לפיהן תקיפה צבאית תביא להפלת המשטר בטהרן או לכפיית ממשלת אחדות בישראל"
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
     "actor": "איראן",
     "declared": [
      "להגיב ללא קווים אדומים נגד מתקני אנרגיה, תקשורת וטכנולוגיה במדינות המפרץ במקרה של תקיפה",
      "לדרוש את הפסקת האכיפה המפלה והפוליטית לטענתה של סבא\"א",
      "לשמור על לכידות הכוחות המזוינים והמוכנות של העורף"
     ],
     "inferred": [
      "לשקם במהירות את רכיבי תוכנית הגרעין והטילים שנפגעו באתרים תת-קרקעיים",
      "להפעיל לחץ על מחירי הנפט העולמיים כדי לאלץ את ארצות הברית לסגת מהמצור ומהמלחמה",
      "לנתק את הקשרים הביטחוניים בין וושינגטון למדינות המפרץ"
     ],
     "forecast": [
      "האצת ביצור מתקני הגרעין בהר המכוש תוך המשך איומים על חופש השיט במצר הורמוז",
      "החרפת פעולות התגמול באמצעות תקיפות א-סימטריות או דרך שלוחות במקרה של תקיפה אמריקאית"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "לסיים את העימות מול איראן ולהביא להורדה מהירה של מחירי הדלק",
      "להמשיך במצור הימי על הנמלים האיראניים ככל שיידרש",
      "למנוע מאיראן השגת נשק גרעיני בעקבות הסכנה בשימוש בו"
     ],
     "inferred": [
      "מיטוט היכולת הכלכלית של איראן באמצעות חנק ייצוא הנפט",
      "יצירת הרתעה צבאית ישירה שתמנע את התחדשות תוכנית הנשק הגרעיני",
      "בחינת תקיפות צבאיות ממוקדות לאחר סיום מערכת הבחירות הפנימית"
     ],
     "forecast": [
      "המשך אכיפת המצור הימי במפרץ הפרסי",
      "הוצאה לפועל של גל תקיפות מוגבל או נרחב נגד מתקני טילים וגרעין אם ייכשלו המגעים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומי טרור מיידיים ופעולה נגד שלוחות הנתמכות בידי משמרות המהפכה"
     ],
     "inferred": [
      "מניעת שיקום תשתיות הגרעין והטילים של איראן באמצעים צבאיים",
      "תיאום הדוק עם ארצות הברית למהלומה צבאית משותפת נגד מתקנים מבוצרים באיראן",
      "רתימת המצב הביטחוני והמערכה לצרכים פוליטיים פנימיים לאחר הבחירות"
     ],
     "forecast": [
      "המשך היערכות ואימונים לקראת תקיפות באיראן בשיתוף פעולה עם צבא ארצות הברית",
      "הגברת מאמצי הסיכול נגד מוקדי ייצור אמל\"ח איראניים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/european-mideast-foreign-ministers-hold-talks-istanbul",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/washington-should-resist-russias-gulf-mediation-bid/",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/video/20261022-reports-show-us-and-israel-plan-new-strikes-on-iran",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/business/2026/oct/23/oil-five-month-high-fears-us-renews-strikes-iran",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610222999",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86301122/Pakistan-says-in-close-contact-with-Iran-US-urges-restraint",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21691337",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380513",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemen-bab-al-mandab-and-saudi-arabia-tehrans-strategic-calculus-balance",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132372",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48833",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94744",
     "accessed_at": "2026-10-23T15:25:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T23:40:42+00:00",
  "changes": {
   "IRAN-10231525-01": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "דיווחים והערכות בנוגע לתוכניות לתקיפה ישראלית-אמריקאית באיראן",
    "score": 1.0
   },
   "IRAN-10231525-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "איומים איראניים לתקוף יעדי נפט, תקשורת וטכנולוגיה במדינות המפרץ",
    "score": 1.0
   },
   "IRAN-10231525-03": {
    "kind": "new"
   },
   "IRAN-10231525-04": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פיקוד מרכז האמריקאי מציין 100 ימי מצור ימי על איראן",
    "score": 1.0
   },
   "IRAN-10231525-05": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "טענות איראניות על פגיעה במכליות במצר הורמוז והכחשה אמריקאית",
    "score": 1.0
   },
   "IRAN-10231525-06": {
    "kind": "new"
   },
   "IRAN-10231525-07": {
    "kind": "new"
   },
   "IRAN-10231525-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-23T1528__ukraine-202610231528.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-23T15:28:58+00:00",
   "window": {
    "from": "2026-10-22T15:28:58+00:00",
    "to": "2026-10-23T15:28:58+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610231528"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בחילופי מהלומות כבדים בעומק השטחים, לרבות תקיפות כטב\"מים וטילים על מוסקבה, אוריול, חרקיב, צ'רניהיב ודניפרו. במקביל להסלמה הצבאית ולפגיעות בנתיבי השיט, סוכם על מתווה מקומי ראשוני להפסקת אש הומניטרית בעיר אולשקי שבמחוז חרסון ובוצעה עסקת חילופי שבויים. עם זאת, המאמצים המדיניים להסדר כולל נתקלים במחלוקות טריטוריאליות חריפות סביב מעמד השטחים הכבושים בדונבאס.",
   "fronts": [
    {
     "name": "אולשקי (מחוז חרסון)",
     "status": "הסכמה על הפסקת אש מקומית זמנית לצורך פינוי וסיוע הומניטרי החל מ-29 באוקטובר"
    },
    {
     "name": "צפון אוקראינה (סומי וצ'רניהיב)",
     "status": "פעילות גוברת של חוליות חבלה וסיור רוסיות לצד תקיפות על יעדים אזרחיים"
    },
    {
     "name": "הים השחור ואזור החוף",
     "status": "איומים על השיט האזרחי ותקיפות כטב\"מים סמוך לגבולות רומניה ומולדובה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10231528-01",
     "title": "הסכמה על הפסקת אש מקומית באולשקי בתיווך מלניה טראמפ",
     "summary": "הבית הלבן הודיע כי רוסיה ואוקראינה הגיעו להסכמה על הפסקת אש מקומית בעיר הכבושה אולשקי במחוז חרסון, החל מ-29 באוקטובר 2026, במטרה לאפשר סיוע ופינוי אזרחים.",
     "axis": "משא ומתן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T13:38:06+00:00",
     "last_update_at": "2026-10-23T15:27:23+00:00",
     "what_is_not_verified": "מידת היישום בפועל של הפסקת האש החל מהמועד שנקבע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380521",
       "published_at": "2026-10-23T15:27:23+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2207035",
       "published_at": "2026-10-23T15:15:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/23/starlink-ukraine-musk-trump-russia-black-sea-strikes-france-milan-europe-protests-latest-news-updates",
       "published_at": "2026-10-23T15:12:14+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4177544-melania-trump-announces-localized-ceasefire-between-russia-and-ukraine-for-oleshky.html",
       "published_at": "2026-10-23T14:59:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/23/ukraine-troops-report-ongoing-problems-with-starlink-satellite-network",
       "published_at": "2026-10-23T14:57:50+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059447/",
       "published_at": "2026-10-23T14:51:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48860",
       "published_at": "2026-10-23T14:06:33+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/23/russia-ukraine-agree-to-ceasefire-to-evacuate-oleshky-residents",
       "published_at": "2026-10-23T13:58:22+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059437/",
       "published_at": "2026-10-23T13:41:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380494",
       "published_at": "2026-10-23T13:40:01+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/breaking-russia-ukraine-agree-to-oleshky-ceasefire-mediated-by-melania-trump-white-house-says/",
       "published_at": "2026-10-23T13:38:06+00:00"
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
     "id": "UKRAINE-10231528-02",
     "title": "פגיעת טילי שיוט אוקראיניים במפעל בעיר אוריול",
     "summary": "דווח על פגיעת טילי שיוט אוקראיניים מדגם פלמינגו במפעל פרוטון בעיר אוריול שבשטח רוסיה.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T15:03:56+00:00",
     "last_update_at": "2026-10-23T15:08:59+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ואימות רשמי של דגם הטיל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48863",
       "published_at": "2026-10-23T15:08:59+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48862",
       "published_at": "2026-10-23T15:03:56+00:00"
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
     "id": "UKRAINE-10231528-03",
     "title": "מתקפת כטב\"מים אוקראינית על אזור מוסקבה והשבתת נמלי תעופה",
     "summary": "כטב\"מים אוקראיניים שוגרו לעבר אזור מוסקבה, יורטו ליד נמלי התעופה וגרמו להשבתת הפעילות והגבלות תעופה בארבעה נמלי תעופה מרכזיים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T12:57:18+00:00",
     "last_update_at": "2026-10-23T14:56:03+00:00",
     "what_is_not_verified": "מספר הכטב\"מים המדויק שפגע או יורט בכל נמל תעופה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48861",
       "published_at": "2026-10-23T14:56:03+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-drone-attack-triggers-shut-down-of-moscow-airports-drone-debris-reported-on-tarmac/",
       "published_at": "2026-10-23T14:28:19+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/23/all-four-moscow-airports-shut-down-one-declares-air-raid-alert-and-begins-evacuating-passengers",
       "published_at": "2026-10-23T12:57:18+00:00"
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
     "id": "UKRAINE-10231528-04",
     "title": "תקיפה רוסית על יעדים אזרחיים בצ'רניהיב",
     "summary": "תקיפה רוסית בשעות היום פגעה בשני בתי עסק פרטיים בעיר צ'רניהיב, והביאה להרג של אדם אחד ולפציעתם של לפחות 25 בני אדם נוספים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:48:30+00:00",
     "last_update_at": "2026-10-23T14:48:30+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-daytime-attack-on-chernihiv-civilian-businesses-kills-1-injures-at-least-25/",
       "published_at": "2026-10-23T14:48:30+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'רניהיב, אוקראינה",
       "lat": 51.4941,
       "lon": 31.2943
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-05",
     "title": "עסקת חילופי שבויים הדדית בין רוסיה לאוקראינה",
     "summary": "משרד ההגנה הרוסי דיווח על עסקת חילופי שבויים שבה הוחזרו 270 אנשי צבא רוסים בתמורה ל-270 שבויים אוקראינים.",
     "axis": "משא ומתן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:09:39+00:00",
     "last_update_at": "2026-10-23T14:09:39+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2206993",
       "published_at": "2026-10-23T14:09:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10231528-06",
     "title": "תקיפות רוסיות על רובע אוסנוביאנסקי בחרקיב",
     "summary": "כוחות רוסיים תקפו את רובע אוסנוביאנסקי בחרקיב באמצעות כטב\"מים, גרמו לפציעת שני ילדים ולנזק למבני מגורים, מכוניות ומבנה קרקס.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T10:55:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:10:00+00:00",
     "last_update_at": "2026-10-23T14:10:00+00:00",
     "what_is_not_verified": "דגם הכטב\"מים המדויק (זוהו ראשונית כגראן-3 ושאהד רקטי)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059442/",
       "published_at": "2026-10-23T14:10:00+00:00"
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
     "id": "UKRAINE-10231528-07",
     "title": "תקיפת כטב\"ם רוסי והטבעת ספינת משא אזרחית מול חופי רומניה",
     "summary": "ספינת משא אזרחית טבעה בים השחור מול חופי רומניה בעקבות פגיעת כטב\"ם רוסי, אדם אחד נהרג ושלושה אנשי צוות נעדרים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T13:48:45+00:00",
     "last_update_at": "2026-10-23T13:48:45+00:00",
     "what_is_not_verified": "גורל שלושת אנשי הצוות הנעדרים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/civilian-cargo-ship-sinks-off-coast-of-romania-after-russian-drone-strike-authorities-say/",
       "published_at": "2026-10-23T13:48:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10231528-08",
     "title": "תקיפות רוסיות חוזרות ונשנות על תשתיות בעיר דניפרו",
     "summary": "פגיעות רוסיות בתשתיות קריטיות ומבני מגורים בעיר דניפרו גרמו להרג של אדם אחד ולפציעת חמישה נוספים.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T13:25:00+00:00",
     "last_update_at": "2026-10-23T13:25:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059430/",
       "published_at": "2026-10-23T13:25:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-09",
     "title": "התרסקות שברי כטב\"ם בשטח מולדובה",
     "summary": "שברי כטב\"ם אותרו בסמוך למבנה מגורים בכפר קישטלניצה שבמולדובה, בעקבות חדירת כלי טיס למרחב האווירי במהלך תקיפות על אוקראינה.",
     "axis": "תקיפות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-23T14:20:00+00:00",
     "last_update_at": "2026-10-23T14:20:00+00:00",
     "what_is_not_verified": "זהות משגר הכטב\"ם המדויקת ששבריו אותרו במולדובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059443/",
       "published_at": "2026-10-23T14:20:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קישטלניצה, מולדובה",
       "lat": 47.5684,
       "lon": 28.6598
      }
     ]
    },
    {
     "id": "UKRAINE-10231528-10",
     "title": "הגברת פעילות חוליות סיור וחבלה רוסיות בסומי ובצ'רניהיב",
     "summary": "כוחות הביטחון של אוקראינה זיהו חדירות של חוליות חבלה וסיור רוסיות במטרה לאסוף מודיעין על עמדות הגנה ולהניח מוקשים.",
     "axis": "חזיתות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T13:00:00+00:00",
     "last_update_at": "2026-10-23T13:00:00+00:00",
     "what_is_not_verified": "היקף החוליות הפועלות בשטח ומיקומיהן המדויקים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177491-russian-sabotage-and-reconnaissance-groups-step-up-activity-in-sumy-and-chernihiv-regions-sbgs.html",
       "published_at": "2026-10-23T13:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10231528-11",
     "title": "מגבלות מתמשכות על רשת סטארלינק עבור צבא אוקראינה",
     "summary": "גורמים באוקראינה מדווחים כי רשת סטארלינק ומערכת סטארשילד ממשיכות להיתקל במגבלות טכניות, הפוגעות בהפעלת כטב\"מים ומערכות הגנה אווירית.",
     "axis": "סיוע צבאי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-23T02:16:26+00:00",
     "last_update_at": "2026-10-23T11:01:08+00:00",
     "what_is_not_verified": "הגורם האחראי הישיר להמשך המגבלות והאטת הרשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-23T11:01:08+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/23/trump-musk-zelenskyy-who-is-blaming-who-in-ukraine-starlink-row",
       "published_at": "2026-10-23T02:16:26+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "מתווה תוכנית השלום האמריקאית הכוללת אזור מפורז בדונבאס וויתור על חברות בנאט\"ו",
    "שקילת הקלות סנקציות נוספות על רוסיה על ידי ממשל טראמפ",
    "הפעלת רשת בוטים רוסית המשתמשת בזיופי עמוק נגד מועמדים בארצות הברית",
    "טענות על תופעות דתיות חריגות הקשורות לתמונת לוחם גדוד אספניולה שנהרג",
    "מעורבות ישירה של גורמי מודיעין רוסיים בריגול בגרמניה"
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
      "הפסקת אש וערבויות ביטחון כתנאי ראשוני לשלום צודק",
      "סירוב מוחלט לוויתור על שטחים ריבוניים לטובת רוסיה"
     ],
     "inferred": [
      "הפעלת לחץ ישיר על העורף הרוסי באמצעות פגיעה בנמלי תעופה ובמפעלים צבאיים",
      "הבטחת מסדרונות הומניטריים להצלת אוכלוסייה מנותקת"
     ],
     "forecast": [
      "המשך דרישה לערבויות בינלאומיות נוקשות טרם כניסה לשיחות שלום מהותיות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "הכרה בשטחים הכבושים כשטח רוסי היסטורי ולא כוויתור טריטוריאלי",
      "הסכמה עקרונית לחידוש מגעים תלת-צדדיים לדיון בסוגיות ביטחון סופיות"
     ],
     "inferred": [
      "שחיקת התשתיות האזרחיות והתעשייתיות של אוקראינה באמצעות גלי תקיפות מתמשכים",
      "ניצול הקלות סנקציות כלכליות ויוזמות מקומיות להפחתת הלחץ המדיני"
     ],
     "forecast": [
      "המשך הלחימה תוך הצבת תנאי כניעה טריטוריאליים נוקשים בכל משא ומתן עתידי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cq74pjpmx0e8o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/23/trump-musk-zelenskyy-who-is-blaming-who-in-ukraine-starlink-row",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/civilian-cargo-ship-sinks-off-coast-of-romania-after-russian-drone-strike-authorities-say/",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380494",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/23/all-four-moscow-airports-shut-down-one-declares-air-raid-alert-and-begins-evacuating-passengers",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/23/8059443/",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2206993",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48861",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4177491-russian-sabotage-and-reconnaissance-groups-step-up-activity-in-sumy-and-chernihiv-regions-sbgs.html",
     "accessed_at": "2026-10-23T15:28:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-22T23:42:59+00:00",
  "changes": {
   "UKRAINE-10231528-01": {
    "kind": "new"
   },
   "UKRAINE-10231528-02": {
    "kind": "possible",
    "prev": "פגיעת כטב\"ם אוקראיני בעגורן בעיר ליפצק ברוסיה",
    "score": 0.467
   },
   "UKRAINE-10231528-03": {
    "kind": "new"
   },
   "UKRAINE-10231528-04": {
    "kind": "new"
   },
   "UKRAINE-10231528-05": {
    "kind": "new"
   },
   "UKRAINE-10231528-06": {
    "kind": "new"
   },
   "UKRAINE-10231528-07": {
    "kind": "new"
   },
   "UKRAINE-10231528-08": {
    "kind": "new"
   },
   "UKRAINE-10231528-09": {
    "kind": "new"
   },
   "UKRAINE-10231528-10": {
    "kind": "new"
   },
   "UKRAINE-10231528-11": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מחלוקת ודיווחים סותרים סביב הגבלות התקשורת הלוויינית של סטארלינק",
    "score": 1.0
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
