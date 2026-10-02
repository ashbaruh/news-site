/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-02T1630__yemen-202610021630.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-02T16:30:27+00:00",
   "window": {
    "from": "2026-10-01T16:30:27+00:00",
    "to": "2026-10-02T16:30:27+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202610021630"
   },
   "summary": "הלחימה בתימן מחריפה בעקבות מתקפה חות'ית שחיזקה את אחיזתם בחוף הים האדום ובבאב אל-מנדב, מה שמגביר את משבר הביטחון התזונתי החמור בקרב האוכלוסייה. במקביל, נמשכות תקיפות של החות'ים מול סעודיה, כולל האשמות על פגיעה בתשתיות חשמל, דבר המעורר היערכות ביטחונית אזורית ומדינית רחבה.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית (תעז ועדן)",
     "status": "פעילה ומתלקחת"
    },
    {
     "name": "חזית הים האדום ומצר באב אל-מנדב",
     "status": "במוקד מתיחות אסטרטגית"
    },
    {
     "name": "חזית סעודיה",
     "status": "תחת איומי כטב\"מים וטילים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10021630-01",
     "title": "פגזים וצלפים פגעו באזורים מגורים בעיר תעז",
     "summary": "הפגזה וירי צלפים של החות'ים פגעו באזורים מגורים וגרמו לפציעת אזרחים ביניהם ילדים ואישה.",
     "axis": "תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T14:37:25+00:00",
     "last_update_at": "2026-10-02T16:06:56+00:00",
     "what_is_not_verified": "היקף הנפגעים המלא אינו מאומת מעבר לדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_932304052cd6f328",
       "url": "https://www.sabanew.net/viewstory/153384",
       "published_at": "2026-10-02T16:06:56+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ba71ce3ce367e159",
       "url": "https://www.sabanew.net/viewstory/153378",
       "published_at": "2026-10-02T14:37:25+00:00"
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
     "id": "YEMEN-10021630-02",
     "title": "הסלמה צבאית רחבה וקרבות קשים בין החות'ים לכוחות הממשלה בתעז",
     "summary": "עימותים קשים ואבדות כבדות בלחימה בין החות'ים לכוחות הממשלה בתימן, לצד תקיפות אוויריות נרחבות של הקואליציה.",
     "axis": "תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T00:06:29+00:00",
     "last_update_at": "2026-10-02T15:03:31+00:00",
     "what_is_not_verified": "מספר ההרוגים המדויק אינו מאומת ממקור ניטרלי עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6ab033cb6cbb943f",
       "url": "https://www.newarab.com/news/yemen-hunger-crisis-could-become-absolutely-devastating-un",
       "published_at": "2026-10-02T15:03:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_6ab033cb6cbb943f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/least-80-dead-fighting-between-houthis-and-pro-government-forces-last-24",
       "published_at": "2026-10-02T08:55:47+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_6ab033cb6cbb943f",
       "url": "https://www.newarab.com/news/yemen-govt-launched-20-strikes-houthi-sites-taiz-province",
       "published_at": "2026-10-02T07:58:36+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_6ab033cb6cbb943f",
       "url": "https://www.sabanew.net/viewstory/153363",
       "published_at": "2026-10-02T04:14:18+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_0309aebd03bf161d",
       "url": "https://www.sabanew.net/viewstory/153358",
       "published_at": "2026-10-02T00:06:29+00:00"
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
     "id": "YEMEN-10021630-03",
     "title": "תקיפה לכאורה של תחנת כוח במדינה",
     "summary": "הקואליציה בראשות סעודיה האשימה את החות'ים בביצוע מתקפת כטב\"מים על תחנת חשמל בעיר מדינה, טענה שהוכחשה על ידי החות'ים.",
     "axis": "סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T18:22:01+00:00",
     "last_update_at": "2026-10-02T07:58:36+00:00",
     "what_is_not_verified": "האחריות לתקיפה והנזק המדויק בתחנה אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_816a9077ea3b2652",
       "url": "https://www.newarab.com/news/yemen-govt-launched-20-strikes-houthi-sites-taiz-province",
       "published_at": "2026-10-02T07:58:36+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_816a9077ea3b2652",
       "url": "https://www.sabanew.net/viewstory/153361",
       "published_at": "2026-10-02T03:58:43+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_816a9077ea3b2652",
       "url": "https://www.france24.com/en/middle-east/20261002-saudi-led-coalition-houthis-striking-medina-power-station",
       "published_at": "2026-10-02T02:39:43+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_816a9077ea3b2652",
       "url": "https://t.me/alexmehacarmel/48178",
       "published_at": "2026-10-01T18:22:01+00:00"
      }
     ],
     "places": [
      {
       "name": "מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "YEMEN-10021630-04",
     "title": "יירוט כטב\"מים וטילים סמוך לעדן ובחמיס משית",
     "summary": "הגנות אוויריות יירטו והפילו כלטי\"ב מתאבדים וטילים בלסטיים ששיגרו החות'ים לעבר עדן וחמיס משית.",
     "axis": "תימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T03:58:43+00:00",
     "last_update_at": "2026-10-02T05:58:01+00:00",
     "what_is_not_verified": "פרטי הנזק המלאים מהטילים והכטב\"מים אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_59e2557480a59893",
       "url": "https://t.me/alexmehacarmel/48195",
       "published_at": "2026-10-02T05:58:01+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_59e2557480a59893",
       "url": "https://www.sabanew.net/viewstory/153362",
       "published_at": "2026-10-02T04:01:31+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_816a9077ea3b2652",
       "url": "https://www.sabanew.net/viewstory/153361",
       "published_at": "2026-10-02T03:58:43+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      },
      {
       "name": "חמיס משית, סעודיה",
       "lat": 18.3,
       "lon": 42.7333
      }
     ]
    }
   ],
   "not_verified": [
    "מעורבות ישירה של אנשי משמרות המהפכה האיראניים בניהול השטח של החות'ים.",
    "היקף הנזק המדויק בתחנת הכוח במדינה.",
    "מספר הנפגעים המדויק בלחימה הקרקעית בתעז."
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "המשך פעילות נגד ממשלת תימן הנתמכת בידי סעודיה",
      "הכחשת תקיפת אתרים קדושים או אזרחיים בסעודיה"
     ],
     "inferred": [
      "הרחבת השליטה הטריטוריאלית בתימן, לרבות חוף הים האדום ומרחב באב אל-מנדב",
      "הפעלת לחץ צבאי על סעודיה וגורמים אזוריים"
     ],
     "forecast": [
      "המשך ניסיונות התקדמות קרקעית באזורים שבשליטת הממשלה",
      "המשך שיגור כטב\"מים וטילים לעבר יעדים בסעודיה ובמרחב הימי"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "בלימת התוקפנות של המיליציה החות'ית",
      "הגנה על תשתיות קריטיות ואתרים קדושים"
     ],
     "inferred": [
      "יצירת חזית דיפלומטית וביטחונית אזורית רחבה יחד עם שותפות כמו פקיסטן וטורקיה",
      "תמיכה צבאית ישירה בכוחות הממשלה בתימן"
     ],
     "forecast": [
      "כינוס פגישות חירום ביטחוניות להגברת התיאום",
      "המשך תקיפות אוויריות נגד ריכוזי כוחות חות'יים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261002-saudi-led-coalition-houthis-striking-medina-power-station",
     "accessed_at": "2026-10-02T16:30:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/least-80-dead-fighting-between-houthis-and-pro-government-forces-last-24",
     "accessed_at": "2026-10-02T16:30:27+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-govt-launched-20-strikes-houthi-sites-taiz-province",
     "accessed_at": "2026-10-02T16:30:27+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153361",
     "accessed_at": "2026-10-02T16:30:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48195",
     "accessed_at": "2026-10-02T16:30:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-02T02:35:03+00:00",
  "changes": {
   "YEMEN-10021630-01": {
    "kind": "new"
   },
   "YEMEN-10021630-02": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפות אוויריות בתימן (צנעא, תעז, סעדה ועמראן)",
    "score": 1.0
   },
   "YEMEN-10021630-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"ם על תחנת כוח במדינה",
    "score": 1.0
   },
   "YEMEN-10021630-04": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "יירוט טילים בתוך סעודיה",
    "score": 0.817
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-02T1621__iran-202610021621.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-02T16:21:27+00:00",
   "window": {
    "from": "2026-10-01T16:21:27+00:00",
    "to": "2026-10-02T16:21:27+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "iran-202610021621"
   },
   "summary": "העימות הצבאי והכלכלי בין ארצות הברית וישראל לבין איראן מחריף ומלווה בהזרמת נושאות מטוסים ומערכות הגנה אמריקאיות להגנה על מתקני נפט במפרץ. במקביל לסנקציות חריפות שפגעו בהעמסת הנפט האיראני ובמטבע המקומי, מדינות ה-G7 מפעילות מאגרי חירום לייצוב שוק האנרגיה. בגזרת השלוחות, החות'ים מואשמים בפגיעה בתשתיות אנרגיה בסעודיה, בעוד חזבאללה מצהיר על כוונתו להימנע מפתיחת מערכה ישירה.",
   "fronts": [
    {
     "name": "המפרץ הפרסי ומצר הורמוז",
     "status": "שיבושי אנרגיה מתמשכים, אבטחת שיירות ופריסת מערכות הגנה ונושאות מטוסים אמריקאיות סביב שדות נפט וגז"
    },
    {
     "name": "ציר איראן - ארה\"ב (כלכלי וצבאי)",
     "status": "סנקציות תעופה ונפט הדוקות, התרסקות שער הריאל האיראני ואיומי תגובה הדדיים על רקע מבוי סתום במשא ומתן"
    },
    {
     "name": "הזירה התימנית (חות'ים מול סעודיה והים האדום)",
     "status": "האשמות על פגיעה בתשתיות חשמל בסעודיה לצד חשש מלחץ משולב על נתיבי השיט בבאב אל-מנדב"
    },
    {
     "name": "הזירה הצפונית (חזבאללה - ישראל)",
     "status": "חזבאללה מצהיר על שמירת נשקו והימנעות ממתן אמתלה לעימות חדש כחזית סיוע"
    }
   ],
   "events": [
    {
     "id": "IRAN-10021621-01",
     "title": "מדינות ה-G7 סיכמו על שחרור עשרות מיליוני חביות נפט וסולר בשל המשבר במצר הורמוז",
     "summary": "מדינות פורום ה-G7 גינו את תקיפותיה של איראן נגד שכנותיה וסיכמו על שחרור של עד מאה מיליון חביות נפט וסולר ממאגרי החירום לאורך ארבעה חודשים, במטרה להקל על מחירי האנרגיה ולייצב את האספקה בעקבות השיבושים במצר הורמוז.",
     "axis": "איראן - ארה\"ב והמערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T14:49:00+00:00",
     "last_update_at": "2026-10-02T15:48:34+00:00",
     "what_is_not_verified": "היקף ההשפעה המעשי של שחרור המאגרים על מחירי השוק ומשך המשבר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/g7-countries-rebuke-iran-attack-neighbours",
       "published_at": "2026-10-02T15:48:34+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/g7-plans-oil-and-diesel-supply-offers-100-million-barrels-macron-says",
       "published_at": "2026-10-02T14:49:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10021621-02",
     "title": "תגבור כוחות וסוללות הגנה של ארצות הברית במזרח התיכון",
     "summary": "צבא ארצות הברית שיגר קבוצת קרב של נושאת מטוסים שלישית לאזור, לצד כוח נחיתה אמפיבי, ופרס סוללות טילי פטריוט להגנה על שדות נפט וגז בערב הסעודית ובקטאר על רקע הלחימה מול איראן.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T01:17:37+00:00",
     "last_update_at": "2026-10-02T04:29:17+00:00",
     "what_is_not_verified": "המועד המדויק להגעת מלוא הכוחות הנוספים ואפשרויות התקיפה שייבחרו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21535879",
       "published_at": "2026-10-02T04:29:17+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/02/us-third-aircraft-carrier-middle-east-iran",
       "published_at": "2026-10-02T01:17:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10021621-03",
     "title": "החרפת הלחץ הכלכלי האמריקאי והחרגת טיסות לעיר נג'ף",
     "summary": "שר האוצר האמריקאי הצהיר כי איראן לא הטעינה נפט על מכליות בספטמבר, בעוד הממשל הטיל עיצומים על עשרות חברות תעופה איראניות אך העניק היתר זמני לטיסות עיראקיות בין איראן לנג'ף.",
     "axis": "איראן - ארה\"ב ועיראק",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T16:05:52+00:00",
     "last_update_at": "2026-10-01T20:10:35+00:00",
     "what_is_not_verified": "האם היתר הטיסות לנג'ף יהפוך להחרגה קבועה",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131184",
       "published_at": "2026-10-01T20:10:35+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/2026/10/01/washington-decides-complete-ban-on-iran-iraq-flights-is-not-worth-the-political-cost/",
       "published_at": "2026-10-01T16:05:52+00:00"
      }
     ],
     "places": [
      {
       "name": "נג'ף, עיראק",
       "lat": 32.001,
       "lon": 44.33
      }
     ]
    },
    {
     "id": "IRAN-10021621-04",
     "title": "שיקום חלקי של ייצוא הנפט הגולמי דרך מצר הורמוז",
     "summary": "ייצוא הנפט הגולמי מהאזור שב ברובו להיקפיו שלפני המלחמה באמצעות צינורות עוקפים, העברות בין אוניות וליווי צבאי אמריקאי, אך מעבר תזקיקים וסולר ממשיך להיתקל בקשיים.",
     "axis": "מצר הורמוז והמפרץ הפרסי",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T15:52:14+00:00",
     "last_update_at": "2026-10-01T16:21:27+00:00",
     "what_is_not_verified": "היקף הזרימה המדויק של תזקיקי סולר בנתיבים החלופיים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/business/2026/oct/01/crude-oil-exports-strait-of-hormuz-transport-gulf-region-diesel",
       "published_at": "2026-10-01T15:52:14+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10021621-05",
     "title": "מתקפת כטב\"מים על תחנת חשמל בעיר אל-מדינה והכחשה חות'ית",
     "summary": "הקואליציה בראשות ערב הסעודית האשימה את החות'ים בשיגור כטב\"מים לעבר תחנת הכוח טייבה המספקת חשמל למסגד הנביא בעיר מדינה. מנגד, החות'ים הכחישו כל מעורבות בתקיפה.",
     "axis": "שלוחות איראן - המפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T18:22:01+00:00",
     "last_update_at": "2026-10-02T02:39:43+00:00",
     "what_is_not_verified": "זהות המשגר בפועל לנוכח ההכחשה הרשמית של החות'ים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261002-saudi-led-coalition-houthis-striking-medina-power-station",
       "published_at": "2026-10-02T02:39:43+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48178",
       "published_at": "2026-10-01T18:22:01+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מדינה, ערב הסעודית",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "IRAN-10021621-06",
     "title": "הודעת חזבאללה על אי-פתיחת חזית נוספת בעימות האמריקאי-איראני",
     "summary": "מקור פוליטי בכיר בחזבאללה מסר כי הארגון אינו מתכוון לפתוח במערכת סיוע שלישית בעת חידוש העימות בין ארצות הברית לאיראן, אלא יתמקד בשימור נשקו וחופש פעולתו.",
     "axis": "חזבאללה - ישראל וארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T07:23:07+00:00",
     "last_update_at": "2026-10-02T07:23:07+00:00",
     "what_is_not_verified": "עמדת הארגון הרשמית בזמן אמת אם תתרחש תקיפה ישירה נגד איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131191",
       "published_at": "2026-10-02T07:23:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10021621-07",
     "title": "בדיקת חשד למעורבות איראנית באירוע טיסת פליי דובאי",
     "summary": "נשיא ארצות הברית דונלד טראמפ הצהיר כי הרשויות בוחנות האם הטייס באירוע מטוס חברת פליי דובאי היה מקושר לאיראן, וציין כי לפי המידע שבידיו התשובה חיובית אך העניין עודנו בבדיקה.",
     "axis": "איראן - ארה\"ב והמפרץ",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-01T17:13:59+00:00",
     "last_update_at": "2026-10-02T13:10:20+00:00",
     "what_is_not_verified": "ממצאי הבדיקה הסופיים ואימות הקשר הישיר של הטייס למשטר האיראני",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131216",
       "published_at": "2026-10-02T13:10:20+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48175",
       "published_at": "2026-10-01T17:40:19+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94448",
       "published_at": "2026-10-01T17:13:59+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10021621-08",
     "title": "אזהרות איראניות מתגובה חריפה לכל תקיפה",
     "summary": "משמרות המהפכה ובכירים במערך הביטחון הלאומי ומשרד החוץ של איראן איימו במענה כואב ומשמיד לכל פעולה צבאית, והגדירו את מהלכי ארצות הברית וישראל כאלימות מדינתית.",
     "axis": "איראן - ישראל וארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T14:02:59+00:00",
     "last_update_at": "2026-10-02T15:17:08+00:00",
     "what_is_not_verified": "אופי התגובה האיראנית המעשית והיכולת להוציאה לפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_0e7b7fb128f4a6e0",
       "url": "https://en.irna.ir/news/86281056/Rezaei-Fantasies-of-worst-president-in-US-history-do-not-shape",
       "published_at": "2026-10-02T15:17:08+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_e7591f8286c2326b",
       "url": "https://en.irna.ir/news/86281012/Iran-Silence-on-US-Israeli-crimes-complicity-in-violence",
       "published_at": "2026-10-02T14:11:02+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_089eccbc68f29d89",
       "url": "https://en.irna.ir/news/86281010/IRGC-warns-of-painful-devastating-response-to-any-aggression",
       "published_at": "2026-10-02T14:02:59+00:00"
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
     "id": "IRAN-10021621-09",
     "title": "מעצר אזרח בישראל בחשד לפעילות עבור איראן",
     "summary": "שירות הביטחון הכללי ומשטרת ישראל עצרו תושב באקה אל-גרבייה בחשד שעמד בקשר ברשת עם גורם עוין וביצע משימות בעבור תשלום כספי מטעם גורמים איראניים.",
     "axis": "איראן - ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T07:14:21+00:00",
     "last_update_at": "2026-10-02T07:14:21+00:00",
     "what_is_not_verified": "פרטי המשימות המדויקות שביצע החשוד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/defense/article/21536362",
       "published_at": "2026-10-02T07:14:21+00:00"
      }
     ],
     "places": [
      {
       "name": "באקה אל-גרבייה, ישראל",
       "lat": 32.4197,
       "lon": 35.0428
      }
     ]
    },
    {
     "id": "IRAN-10021621-10",
     "title": "הגשת כתבי אישום בארצות הברית על סיוע לחות'ים ולחמאס",
     "summary": "רשויות המשפט בארצות הברית הגישו כתבי אישום נגד עובד במשרד האנרגיה בוושינגטון בחשד לרכישת רכיבי כטב\"מים וחומרי נפץ עבור החות'ים, ונגד שלושה מעורבים נוספים במימון חמאס.",
     "axis": "שלוחות איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T15:00:09+00:00",
     "last_update_at": "2026-10-02T15:00:09+00:00",
     "what_is_not_verified": "מידת הגעתם של חומרים בפועל לידי הכוחות בתימן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/analysis/2026/10/02/us-charges-engineer-with-supporting-houthis-louisiana-brothers-and-florida-man-with-financing-hamas/",
       "published_at": "2026-10-02T15:00:09+00:00"
      }
     ],
     "places": [
      {
       "name": "ריצ'לנד, וושינגטון, ארה\"ב",
       "lat": 46.2804,
       "lon": -119.2752
      }
     ]
    }
   ],
   "not_verified": [
    "מעורבות ישירה של איראן באירוע טייס פליי דובאי",
    "אחריות החות'ים לתקיפת תחנת הכוח טייבה באל-מדינה בעקבות הכחשתם",
    "הערכות על כוונת ישראל לבצע תקיפה באיראן לפני חודש נובמבר",
    "טענות על יכולת שימוש עתידית של איראן בארגון אל-קאעידה כגיבוי למלחמה",
    "מידת ההיתכנות להפיכת היתר הטיסות מנג'ף להסדר קבוע"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "מניעת הגעה של איראן לנשק גרעיני",
      "הגנה על אספקת האנרגיה העולמית ושדות הנפט של בעלות בריתה במפרץ",
      "בידוד כלכלי של המשטר בטהראן והפסקת ייצוא הנפט שלו"
     ],
     "inferred": [
      "הרתעת איראן מפני פגיעה בנתיבי שיט באמצעות נוכחות צבאית רחבה",
      "שמירה על יציבות ממשלת עיראק באמצעות החרגות נקודתיות של עיצומים"
     ],
     "forecast": [
      "המשך הגברת הנוכחות הצבאית במפרץ והחזקת מאגרי נפט פתוחים לוויסות שוק האנרגיה"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "מתן תגובה כואבת ומשמידה לכל תוקפנות או איום צבאי",
      "שלילת טענות הניצחון של נשיא ארצות הברית והצגת עמידה איתנה"
     ],
     "inferred": [
      "חיפוש דרכים חלופיות למסחר וייצוא נפט נוכח המצור הימי והכלכלי",
      "הפעלת מנופי לחץ על נתיבי שיט באמצעות שלוחות אזוריות כדי לערער את שוק האנרגיה"
     ],
     "forecast": [
      "החרפת המשבר הכלכלי הפנימי והמשך ניסיונות עקיפת העיצומים במסלולים צפוניים ומקוונים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול התבססות שלוחות איראן ומניעת השגת נשק גרעיני"
     ],
     "inferred": [
      "מוכנות לפעולה צבאית ישירה נגד יעדים איראניים ופגיעה ברשתות הריגול הפנימיות",
      "חיזוק שיתוף הפעולה החשאי והגלוי עם מדינות האזור"
     ],
     "forecast": [
      "שימור דריכות מבצעית גבוהה וסיכול מוקדי גיוס והפעלה מבית ומחוץ"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/analysis/2026/10/02/us-charges-engineer-with-supporting-houthis-louisiana-brothers-and-florida-man-with-financing-hamas/",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261002-saudi-led-coalition-houthis-striking-medina-power-station",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/business/2026/oct/01/crude-oil-exports-strait-of-hormuz-transport-gulf-region-diesel",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86281010/IRGC-warns-of-painful-devastating-response-to-any-aggression",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/defense/article/21536362",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/g7-plans-oil-and-diesel-supply-offers-100-million-barrels-macron-says",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131216",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48175",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94448",
     "accessed_at": "2026-10-02T16:21:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-01T23:40:39+00:00",
  "changes": {
   "IRAN-10021621-01": {
    "kind": "new"
   },
   "IRAN-10021621-02": {
    "kind": "same",
    "from": "assessment",
    "to": "shared_root",
    "prev": "שילוח כוחות צי ונחיתה אמריקאיים לעבר המזרח התיכון",
    "score": 0.65
   },
   "IRAN-10021621-03": {
    "kind": "up",
    "from": "initial",
    "to": "verified",
    "prev": "מתן פטור זמני מסנקציות לטיסות בין איראן לעיר נג'ף בעיראק",
    "score": 1.0
   },
   "IRAN-10021621-04": {
    "kind": "same",
    "from": "initial",
    "to": "assessment",
    "prev": "פגיעת טיל במכלית נפט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-10021621-05": {
    "kind": "new"
   },
   "IRAN-10021621-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הודעת שר האוצר האמריקאי על אפס יצוא נפט גולמי איראני במכליות",
    "score": 0.65
   },
   "IRAN-10021621-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "טענות ואיומים בנוגע לחשד לקשר איראני בתקרית טיסת פליי דובאי",
    "score": 0.65
   },
   "IRAN-10021621-08": {
    "kind": "new"
   },
   "IRAN-10021621-09": {
    "kind": "possible",
    "prev": "מעצר בעל אזרחות איראנית-בריטית בחשד למעורבות בתוכנית לפגוע בבסיס פיירפורד",
    "score": 0.467
   },
   "IRAN-10021621-10": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-02T0606__ukraine-202610020606.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-02T06:06:04+00:00",
   "window": {
    "from": "2026-10-01T06:06:04+00:00",
    "to": "2026-10-02T06:06:04+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610020606"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהסלמה בתקיפות הדדיות בעומק העורף, כאשר כוחות רוסיים מכוונים אל תשתיות תחבורה ואזורי מגורים בקייב באמצעות נחילי כטב\"מים, בעוד אוקראינה ממשיכה לפגוע בבתי זיקוק ובמתקני תעשייה בתוך שטח רוסיה. במקביל, המתיחות מול מדינות המערב מחריפה בעקבות איומים גלויים של ההנהגה הרוסית בשימוש בכלל מאגרי הנשק שלה נגד נאט\"ו. מאמצי ההגנה האווירית האוקראינית מיירטים חלק ניכר מן האיומים, אך הפגיעה בתשתיות קריטיות ממשיכה להכביד על שני הצדדים.",
   "fronts": [
    {
     "name": "עורף אוקראינה וקייב",
     "status": "מתקפות מתמשכות של כטב\"מים וטילים רוסיים על גשרים, תשתיות אנרגיה ומבני מגורים"
    },
    {
     "name": "עורף רוסיה (מתקני נפט ואנרגיה)",
     "status": "פגיעות כטב\"מים אוקראיניים בבתי זיקוק, מפעלים כימיים ומאגרי דלק"
    },
    {
     "name": "הזירה המדינית והאסטרטגית מול נאט\"ו והאיחוד האירופי",
     "status": "החרפת איומים גרעיניים והצהרות על מוכנות לעימות רחב היקף"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10020606-01",
     "title": "מתקפת כטב\"מים וטילים רוסית על קייב ופגיעה בגשרים ובבנייני מגורים",
     "summary": "כוחות רוסיים תקפו את קייב בכטב\"מים, פגעו שוב בגשר הדרומי וגרמו נזק למבנה מגורים בן 25 קומות במחוז דרניצקי. בעקבות כך נסגרו גשרים ושונו נתיבי תחבורה.",
     "axis": "מתקפות אוויריות על עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T14:31:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T14:31:03+00:00",
     "last_update_at": "2026-10-02T05:04:11+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק וממדי הנזק המלאים לתשתיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/russian-strike-kills-1-injures-2-in-kyiv-as-southern-bridge-hit-again-overnight/",
       "published_at": "2026-10-02T05:04:11+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170242-russian-attack-in-kyivs-darnytskyi-district-leaves-25story-residential-building-damaged.html",
       "published_at": "2026-10-02T04:59:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056065/",
       "published_at": "2026-10-02T04:17:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056063/",
       "published_at": "2026-10-02T03:22:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1372797",
       "published_at": "2026-10-02T02:53:55+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmn8e8344v5qo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-01T14:31:03+00:00"
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
     "id": "UKRAINE-10020606-02",
     "title": "יירוט נרחב של כטב\"מים רוסיים על ידי ההגנה האווירית האוקראינית",
     "summary": "חיל האוויר האוקראיני דיווח על שיגור של 108 כטב\"מים על ידי רוסיה, כאשר 88 מהם יורטו או שובשו באמצעות לוחמה אלקטרונית ונשק נ\"מ.",
     "axis": "לוחמה אווירית והגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T18:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T05:15:00+00:00",
     "last_update_at": "2026-10-02T05:15:00+00:00",
     "what_is_not_verified": "היקף הפגיעות המדויק ב-11 המוקדים שצוינו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056077/",
       "published_at": "2026-10-02T05:15:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריאנסק, רוסיה",
       "lat": 53.2789,
       "lon": 34.3659
      },
      {
       "name": "פרימורסקו-אחטרסק, רוסיה",
       "lat": 46.0491,
       "lon": 38.1712
      }
     ]
    },
    {
     "id": "UKRAINE-10020606-03",
     "title": "תקיפות כטב\"מים אוקראיניות על מתקני נפט ותעשייה ברוסיה",
     "summary": "פיצוצים ושריפות נרשמו באזור בית הזיקוק ומפעל כימי בוולגוגרד, לצד דיווחים על פגיעה במתקני נפט באזור סמארה ובמטרות נוספות.",
     "axis": "פגיעה בתשתיות אנרגיה בעורף הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T12:09:34+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T12:09:34+00:00",
     "last_update_at": "2026-10-02T04:38:00+00:00",
     "what_is_not_verified": "היקף הנזק הממשי למתקני התעשייה ומהות המוקדים שעלו באש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056068/",
       "published_at": "2026-10-02T04:38:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-reportedly-strike-oil-facilities-in-russias-volgograd-samara-regions/",
       "published_at": "2026-10-02T04:33:17+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48190",
       "published_at": "2026-10-02T02:55:28+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/01/ukraine-russian-oil-refinery-strikes-defying-trump-fuel-price-warnings",
       "published_at": "2026-10-01T12:09:34+00:00"
      }
     ],
     "places": [
      {
       "name": "וולגוגרד, רוסיה",
       "lat": 48.7082,
       "lon": 44.5153
      },
      {
       "name": "סמארה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    },
    {
     "id": "UKRAINE-10020606-04",
     "title": "פוטין מאיים בשימוש בכל אמצעי הלחימה שברשות רוסיה",
     "summary": "נשיא רוסיה הצהיר כי ארצו תגיב בכל הנשק שברשותה במקרה של תקיפה מצד נאט\"ו, ודחה אפשרות להפסקת פגיעה בספינות תמורת הפסקת תקיפת בתי הזיקוק.",
     "axis": "העימות המדיני-אסטרטגי מול המערב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T16:38:32+00:00",
     "last_update_at": "2026-10-01T23:46:17+00:00",
     "what_is_not_verified": "נכונות הטענות בדבר הסכמות קודמות להפסקת פגיעה במתקני אנרגיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/putin-vows-russia-will-respond-with-all-weapons-at-our-disposal-if-attacked-by-nato/",
       "published_at": "2026-10-01T23:46:17+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/01/by-putin-s-own-estimate-ukrainian-strikes-on-russian-refineries-have-cost-russia-1-of-gdp-but-he-says-stopping-them-isn-t-worth-halting-attacks-on-ukrainian-vessels",
       "published_at": "2026-10-01T19:42:03+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/live/2026/oct/01/europe-latest-news-updates-russia-strikes-ukraine-nato",
       "published_at": "2026-10-01T16:38:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10020606-05",
     "title": "הערכות אוקראיניות על אבדות הצבא הרוסי",
     "summary": "המטה הכללי של צבא אוקראינה דיווח כי צבא רוסיה איבד 1,520 חיילים ביממה האחרונה, לצד עשרות מערכות ארטילריה וכלים משוריינים.",
     "axis": "שחיקת כוחות בחזית",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T03:49:00+00:00",
     "last_update_at": "2026-10-02T05:17:00+00:00",
     "what_is_not_verified": "אימות עצמאי של נתוני הנפגעים והאבדות הרוסיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4170247-russian-army-loses-1520-troops-in-war-against-ukraine-over-past-day.html",
       "published_at": "2026-10-02T05:17:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056064/",
       "published_at": "2026-10-02T03:49:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות רוסיות על עייפות הציבור האוקראיני מהשלטון הנוכחי",
    "מספר האבדות המדויק של כוחות הצבא הרוסי",
    "הדיווחים של בלומברג על דחיית בקשת סיוע של 27 מיליארד אירו מצד האיחוד האירופי",
    "מידת המעורבות של גורמים זרים בפריצות לבתיהם של חברי פרלמנט בפינלנד",
    "נכונות הדיווח בדבר הסכמה לעצירת תקיפות הדדיות על מתקני אנרגיה"
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
     "value": 1.1298,
     "unit": "USD",
     "change_pct": -0.5,
     "source_id": "src_ecb",
     "as_of": "2026-10-01T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "תגובה בכל אמצעי הלחימה העומדים לרשותה במקרה של תקיפה מצד נאט\"ו",
      "המשך פגיעה במטרות כלכליות וספינות אוקראיניות בתגובה לתקיפת בתי הזיקוק"
     ],
     "inferred": [
      "שיבוש התחבורה והתשתיות האזרחיות בקייב לשם הפעלת לחץ פסיכולוגי ומוראלי",
      "הרחקת נאט\"ו ממעורבות ישירה באמצעות הרתעה ואיומים בשימוש בנשק לא קונבנציונלי"
     ],
     "forecast": [
      "המשך התקיפות האוויריות על תשתיות מפתח אוקראיניות לקראת תקופות קור",
      "החרפת הרטוריקה התקיפה מול מדינות הגבול של נאט\"ו"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "המשך הפגיעה בבתי זיקוק ובמתקנים כלכליים של רוסיה",
      "הטלת סנקציות נוספות על אוליגרכים רוסים"
     ],
     "inferred": [
      "שחיקת היכולת הכלכלית של רוסיה לממן את המלחמה ופגיעה באספקת הדלק הצבאית",
      "הפגנת עצמאות מבצעית חרף לחצים בין-לאומיים לצמצום הפגיעה במתקני אנרגיה"
     ],
     "forecast": [
      "הגברת מאמצי השיגור של כטב\"מים ארוכי טווח אל תוך מחוזות עמוקים ברוסיה",
      "המשך לחץ לקבלת מערכות הגנה אווירית נוספות משותפותיה באירופה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmn8e8344v5qo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/live/2026/oct/01/europe-latest-news-updates-russia-strikes-ukraine-nato",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/putin-vows-russia-will-respond-with-all-weapons-at-our-disposal-if-attacked-by-nato/",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1372797",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/01/by-putin-s-own-estimate-ukrainian-strikes-on-russian-refineries-have-cost-russia-1-of-gdp-but-he-says-stopping-them-isn-t-worth-halting-attacks-on-ukrainian-vessels",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/02/8056064/",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48190",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4170247-russian-army-loses-1520-troops-in-war-against-ukraine-over-past-day.html",
     "accessed_at": "2026-10-02T06:06:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-30T23:40:39+00:00",
  "changes": {
   "UKRAINE-10020606-01": {
    "kind": "possible",
    "prev": "פציעת איש חילוץ בקייב",
    "score": 0.633
   },
   "UKRAINE-10020606-02": {
    "kind": "new"
   },
   "UKRAINE-10020606-03": {
    "kind": "new"
   },
   "UKRAINE-10020606-04": {
    "kind": "possible",
    "prev": "שימוש ברחפן חיתוך פלגה על ידי רוסיה",
    "score": 0.467
   },
   "UKRAINE-10020606-05": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-02T1646__north-202610021646.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-02T16:46:03+00:00",
   "window": {
    "from": "2026-10-01T16:46:03+00:00",
    "to": "2026-10-02T16:46:03+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "north-202610021646"
   },
   "summary": "הגזרה הצפונית מתאפיינת במתיחות ביטחונית מתמשכת בדרום לבנון ובדרום סוריה מול כוחות צה\"ל, לצד מאמצים דיפלומטיים לבנוניים לגיבוש מנגנון נסיגה ופיקוח. בסוריה נמשכת אי-יציבות פנימית עם התנקשויות ומפגני כוח חמושים בדמשק ובדרום המדינה, במקביל להידוק שיתוף הפעולה האזרחי מצד טורקיה. שלטונות לבנון פועלים מול ארצות הברית והמוסדות הבינלאומיים לשיקום אזורי ההרס ולביסוס סמכות המדינה בדרום.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "פעילות צבאית ישראלית נקודתית לצד חיכוך סביב תנועת תושבים ומאמצי שיקום של הממשלה"
    },
    {
     "name": "דרום סוריה (דרעא וסווידא)",
     "status": "תקריות ירי, מתיחות ביטחונית מקומית ופשיטות של צה\"ל"
    },
    {
     "name": "דמשק והמרכז הסורי",
     "status": "נוכחות כלי טיס ישראליים, פעילות ארגונים חמושים והתרחבות השפעה טורקית"
    }
   ],
   "events": [
    {
     "id": "NORTH-10021646-01",
     "title": "דיווח על כלי טיס בלתי מאוישים ישראליים בשמי דמשק",
     "summary": "מקורות בסוריה דיווחו על הימצאותם של חמישה כלי טיס ישראליים ללא טייס מדגם הרמס מעל הבירה דמשק.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T16:07:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T16:07:58+00:00",
     "last_update_at": "2026-10-02T16:07:58+00:00",
     "what_is_not_verified": "לא נמסר אישור רשמי של צה\"ל או גורם ישראלי אחר אודות גיחות כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48210",
       "published_at": "2026-10-02T16:07:58+00:00"
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
     "id": "NORTH-10021646-02",
     "title": "פשיטה צבאית ישראלית ומעצר תושבים בדרום סוריה",
     "summary": "כוחות ישראליים ביצעו פשיטה לתוך כפר בדרום סוריה ועצרו שני תושבים מקומיים, לצד טענה סורית על מאות פשיטות ישראליות מאז סוף שנת 2024.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T11:59:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T11:59:46+00:00",
     "last_update_at": "2026-10-02T11:59:46+00:00",
     "what_is_not_verified": "שמות הכפר, העצורים והיקף הפשיטות המדויק אינם מאומתים במלואם מעבר להצהרת הצד הסורי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-forces-detain-2-syrians-during-incursion-into-southern-syrian-village/4076107",
       "published_at": "2026-10-02T11:59:46+00:00"
      }
     ],
     "places": [
      {
       "name": "דרום סוריה",
       "lat": 35.9664,
       "lon": 40.8012
      }
     ]
    },
    {
     "id": "NORTH-10021646-03",
     "title": "פעילות צבאית ישראלית וירי בדרום לבנון",
     "summary": "טנק של צה\"ל ביצע ירי פגזים לעבר העיירה ביוט א-סיאד, ובמקביל דווח על פעולת הריסה שביצעו כוחות ישראליים בעיירה בית ליף בדרום המדינה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T10:53:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T10:53:00+00:00",
     "last_update_at": "2026-10-02T11:35:00+00:00",
     "what_is_not_verified": "אין פירוט על נפגעים או על היקף ההרס המדויק במבנים שנהרסו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_1d22afaf1e6de9b0",
       "url": "https://english.almanar.com.lb/article/133547/",
       "published_at": "2026-10-02T11:35:00+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_2503b9bbfa8e4a89",
       "url": "https://english.almanar.com.lb/article/133522/",
       "published_at": "2026-10-02T10:53:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בית ליף, לבנון",
       "lat": 33.1321,
       "lon": 35.334
      }
     ]
    },
    {
     "id": "NORTH-10021646-04",
     "title": "כניסת אזרחים לכפר נבטיה אל-פוקא חרף אזהרות צה\"ל",
     "summary": "ראש עיריית נבטיה אל-פוקא נכנס יחד עם תושבים מקומיים לשטח הכפר למרות אזהרות ישראליות, תוך ניצול היעדר תקיפות אוויריות בזמן ביקור ראש ממשלת לבנון בעיר.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T09:30:47+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T09:30:47+00:00",
     "last_update_at": "2026-10-02T09:30:47+00:00",
     "what_is_not_verified": "לא פורסמו פרטים רשמיים על משך השהייה של התושבים או על תגובה ישירה בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/131199",
       "published_at": "2026-10-02T09:30:47+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      }
     ]
    },
    {
     "id": "NORTH-10021646-05",
     "title": "ביקור ראש ממשלת לבנון בדרום המדינה ודרישה להסדר נסיגה",
     "summary": "ראש הממשלה נואף סלאם סייר באזור נבטיה, הניח אבן פינה למטה הגנה אזרחית, הציג מכרזים לשיקום תשתיות, ובמקביל קידם שיחות מול ארצות הברית בנוגע לקביעת לוח זמנים לנסיגה ישראלית ומנגנון פיקוח הדדי.",
     "axis": "לבנון - זירה פנימית ובינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T04:09:10+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-02T04:09:10+00:00",
     "last_update_at": "2026-10-02T12:44:12+00:00",
     "what_is_not_verified": "טרם סוכמו זהות הגוף המפקח והתנאים הסופיים להסכם מול קרן המטבע והבנק העולמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960931/aoun-salam-discuss-washington-talks-nabatieh-visit-and-cabinet-measure/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960931",
       "published_at": "2026-10-02T12:44:12+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960913/salam-seeks-withdrawal-timeline-and-new-un-force-as-rubio-tackles-veri/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960913",
       "published_at": "2026-10-02T11:16:53+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/lebanon-s-prime-minister-calls-for-full-israeli-withdrawal-one-army/4075905",
       "published_at": "2026-10-02T09:16:42+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/lebanon-pm-says-scale-war-recovery-beyond-states-capacity",
       "published_at": "2026-10-02T09:15:04+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960825/pm-salam-visits-nabatieh-let-us-all-rally-under-the-banner-of-our-stat/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960825",
       "published_at": "2026-10-02T04:09:10+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה, לבנון",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "ביירות, לבנון",
       "lat": 33.8892,
       "lon": 35.5026
      }
     ]
    },
    {
     "id": "NORTH-10021646-06",
     "title": "פתיחת מוסד חינוך טורקי בבירת סוריה",
     "summary": "טורקיה הודיעה על פתיחת בית ספר על שמו של ארדואן בדמשק, בעל קיבולת של כאלף תלמידים, כחלק מהרחבת שיתוף הפעולה בין אנקרה לדמשק.",
     "axis": "טורקיה - סוריה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-02T12:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-02T12:33:00+00:00",
     "last_update_at": "2026-10-02T12:33:00+00:00",
     "what_is_not_verified": "לא פורטו ההסכמים הרחבים המלאים שגובשו בין משרדי החינוך של שתי המדינות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/turkish-school-named-after-erdogan-to-open-in-syrias-damascus/news",
       "published_at": "2026-10-02T12:33:00+00:00"
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
     "id": "NORTH-10021646-07",
     "title": "תקריות ירי ופגיעה בקצין צבא בדרום סוריה",
     "summary": "חמושים לא מזוהים ירו ופצעו קשה קצין במשרד ההגנה הסורי בעיר א-סנמין שבמחוז דרעא, ובמקביל חמושים פתחו באש לעבר עמדות ביטחון ובתים באזור מזרעה במחוז סווידא.",
     "axis": "סוריה - זירה פנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-30T17:46:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T17:46:41+00:00",
     "last_update_at": "2026-10-02T13:45:33+00:00",
     "what_is_not_verified": "זהות המבצעים באזור סווידא לא אומתה, ומעורבותו של מפקד מקומי בא-סנמין נותרה בגדר האשמות מקומיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_9acd1d6db00421ca",
       "url": "https://www.aa.com.tr/en/middle-east/gunmen-open-fire-on-security-posts-homes-in-southern-syria/4076245",
       "published_at": "2026-10-02T13:45:33+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_9acd1d6db00421ca",
       "url": "https://english.enabbaladi.net/archives/2026/10/gunmen-target-syrian-army-officer-in-daraa/",
       "published_at": "2026-10-01T17:46:41+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סנמין, סוריה",
       "lat": 33.0732,
       "lon": 36.1834
      },
      {
       "name": "סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      }
     ]
    },
    {
     "id": "NORTH-10021646-08",
     "title": "מצעד חמושים אסלאמיסטים בשכונת אל-מידאן בדמשק",
     "summary": "חמושים סונים במדים צבאיים קיימו תהלוכת מפגן כוח ברחובות שכונת אל-מידאן בדמשק תוך נשיאת סרטי שהאדה ודגלים שונים.",
     "axis": "סוריה - זירה פנימית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-01T20:42:23+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-01T20:42:23+00:00",
     "last_update_at": "2026-10-01T20:42:23+00:00",
     "what_is_not_verified": "השיוך הארגוני הרשמי של החמושים ומידת השפעתם על גורמי השלטון המרכזי בעיר אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48183",
       "published_at": "2026-10-01T20:42:23+00:00"
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
    "מספר הפשיטות הישראליות הכולל בסוריה מאז סוף 2024",
    "זהות מבצעי הירי במחוז סווידא ומבצעי ההתנקשות בא-סנמין",
    "אישור ישראלי בדבר גיחות כלי הטיס מעל דמשק",
    "פרטי מנגנון הפיקוח וההסדרים הסופיים עם קרן המטבע בלבנון"
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
     "value": 3.0653,
     "unit": "ILS",
     "change_pct": -0.35,
     "source_id": "src_ecb",
     "as_of": "2026-10-02T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "השגת נסיגה ישראלית מלאה מדרום לבנון וקביעת לוח זמנים מוגדר",
      "פריסת סמכות המדינה וצבא יחיד על כלל שטח המדינה",
      "גיוס סיוע כספי בינלאומי לשיקום אזורי הדרום ההרוסים"
     ],
     "inferred": [
      "מניעת חידוש העימות הצבאי הכולל תוך דחיקת חופש הפעולה של חיזבאללה",
      "חיזוק הלגיטימציה של מוסדות המדינה מול הציבור המקומי"
     ],
     "forecast": [
      "המשך הסתמכות על תיווך אמריקאי לקביעת מנגנוני פיקוח על הגבול",
      "התקדמות איטית בשיקום האזרחי בשל תלות בהסכמי מימון בינלאומיים"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הרחבת שיתוף הפעולה האזרחי והחינוכי עם המשטר בדמשק"
     ],
     "inferred": [
      "ביסוס השפעה רכה ומעמד מדיני בתוך הבירה הסורית"
     ],
     "forecast": [
      "המשך פיתוח מיזמים אזרחיים ודיפלומטיים בסוריה לצורך העמקת האחיזה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על יישובי הצפון ומניעת התבססות איומים מעבר לגבול"
     ],
     "inferred": [
      "שימור חופש פעולה מודיעיני ומבצעי בשמי סוריה ובדרום לבנון",
      "אכיפת הגבלות תנועה ופירוק תשתיות חשודות במרחב הגבול"
     ],
     "forecast": [
      "המשך פעולות מנע נקודתיות וסיכולים במידה ותזוהה התקרבות לגבול"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/133522/",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/gunmen-open-fire-on-security-posts-homes-in-southern-syria/4076245",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/turkish-school-named-after-erdogan-to-open-in-syrias-damascus/news",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/10/gunmen-target-syrian-army-officer-in-daraa/",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960825/pm-salam-visits-nabatieh-let-us-all-rally-under-the-banner-of-our-stat/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960825",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/lebanon-pm-says-scale-war-recovery-beyond-states-capacity",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/131199",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48183",
     "accessed_at": "2026-10-02T16:46:03+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-01T23:57:59+00:00",
  "changes": {
   "NORTH-10021646-01": {
    "kind": "new"
   },
   "NORTH-10021646-02": {
    "kind": "new"
   },
   "NORTH-10021646-03": {
    "kind": "new"
   },
   "NORTH-10021646-04": {
    "kind": "new"
   },
   "NORTH-10021646-05": {
    "kind": "new"
   },
   "NORTH-10021646-06": {
    "kind": "new"
   },
   "NORTH-10021646-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפה ופציעת קצין בצבא סוריה",
    "score": 1.0
   },
   "NORTH-10021646-08": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מפגן כוח של חמושים בדמשק",
    "score": 1.0
   }
  }
 }
};
