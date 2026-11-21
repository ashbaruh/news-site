/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-21T1749__yemen-202611211749.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-21T17:49:36+00:00",
   "window": {
    "from": "2026-11-20T17:49:36+00:00",
    "to": "2026-11-21T17:49:36+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611211749"
   },
   "summary": "הלחימה בתימן ובמרחב סעודיה מתאפיינת בהסלמה הדדית שכוללת תקיפות אוויריות של הקואליציה בראשות סעודיה נגד יעדים חות'יים לצד שיגורים חוזרים של טילים וכטב\"מים מצד החות'ים לעבר בירת סעודיה ומחוזות סמוכים. במקביל, החות'ים מטילים מצור על ערים כמו תעז ומאיימים על נמלי סעודיה בים האדום, בעוד ממשלת תימן פועלת בזירה הדיפלומטית להגברת הלחץ הבינלאומי על הארגון.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית",
     "status": "פעיל ומתמשך"
    },
    {
     "name": "החזית החות'ית מול סעודיה",
     "status": "הסלמה ותקיפות הדדיות"
    },
    {
     "name": "מרחב הים האדום ומצרי באב אל-מנדב",
     "status": "מתיחות ואיומים על נתיבי שיט ונמלים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11211749-01",
     "title": "תקיפות הקואליציה בראשות סעודיה בתימן",
     "summary": "הקואליציה בראשות סעודיה ביצעה עשרות תקיפות באזורים שונים בתימן, כולל נמל חודידה ומחוזות נוספים.",
     "axis": "הזירה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T17:07:42+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T17:07:42+00:00",
     "last_update_at": "2026-11-21T17:00:49+00:00",
     "what_is_not_verified": "מספר הנפגעים שמסרו החות'ים אינו מאומת עצמאית.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-led-coalition-carried-out-71-strikes-24-hours-houthis-say",
       "published_at": "2026-11-21T17:00:49+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-676",
       "published_at": "2026-11-21T07:51:32+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-coalition-launches-operation-houthis-vow-reprisals",
       "published_at": "2026-11-20T17:07:42+00:00"
      }
     ],
     "places": [
      {
       "name": "חודידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "צנעא, תימן",
       "lat": 15.3539,
       "lon": 44.2059
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11211749-02",
     "title": "שיגור טילים וכטב\"מים מאת החות'ים לעבר סעודיה",
     "summary": "החות'ים שיגרו טילים בליסטיים וכטב\"מים לעבר ריאד ויעדים נוספים בסעודיה, וחלקם לייר בידי הקואליציה.",
     "axis": "תימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T17:07:42+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T17:07:42+00:00",
     "last_update_at": "2026-11-21T09:49:44+00:00",
     "what_is_not_verified": "היקף הנזק המלא בריאד אינו מפורט במלואו.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/houthis-launch-strikes-on-saudi-arabia",
       "published_at": "2026-11-21T09:49:44+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/qatari-delegation-visits-iran-talks-end-war-us",
       "published_at": "2026-11-21T09:34:00+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156157",
       "published_at": "2026-11-21T01:23:14+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156156",
       "published_at": "2026-11-21T00:08:19+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-coalition-launches-operation-houthis-vow-reprisals",
       "published_at": "2026-11-20T17:07:42+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "ג'יזאן, סעודיה",
       "lat": 16.8947,
       "lon": 42.558
      }
     ]
    },
    {
     "id": "YEMEN-11211749-03",
     "title": "איומי החות'ים על נמלי סעודיה בים האדום",
     "summary": "החות'ים איימו לתקוף את נמלי סעודיה בים האדום והזהירו כלי טיס ואוניות להימנע מהמרחב האווירי והימי.",
     "axis": "הים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T17:07:42+00:00",
     "last_update_at": "2026-11-20T19:09:58+00:00",
     "what_is_not_verified": "לא מאומת האם כל האיומים יומחשו הלכה למעשה.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthi-attacks-adds-concerns-over-trump-saudi-nuclear-power-pact",
       "published_at": "2026-11-20T19:09:58+00:00"
      },
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/houthis-order-ships-to-leave-saudi-red-sea-ports-after-hodeidah-airstrikes/",
       "published_at": "2026-11-20T17:19:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-coalition-launches-operation-houthis-vow-reprisals",
       "published_at": "2026-11-20T17:07:42+00:00"
      }
     ],
     "places": [
      {
       "name": "חודידה, תימן",
       "lat": 14.7979,
       "lon": 42.9545
      },
      {
       "name": "ג'דה, סעודיה",
       "lat": 21.5504,
       "lon": 39.1742
      }
     ]
    },
    {
     "id": "YEMEN-11211749-04",
     "title": "פגיעה באישה מירי קנאץ בתעז",
     "summary": "אישה נפגעה מירי צלף חות'י בדרום תעז.",
     "axis": "הזירה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:29:27+00:00",
     "last_update_at": "2026-11-21T15:29:27+00:00",
     "what_is_not_verified": "זהות הצלף או נסיבות מדויקות מעבר לדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/156183",
       "published_at": "2026-11-21T15:29:27+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים בקרב האזרחים עקב התקיפות שדווחו על ידי החות'ים (41 הרוגים או נפגעים נוספים)",
    "יכולתם המלאה של החות'ים לממש את כל איומי הפגיעה בנמלי הים האדום של סעודיה"
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תגובה על מבצעים מיוחדים של הקואליציה",
      "פגיעה בתשתיות ובנמלים של סעודיה בים האדום ובריאד"
     ],
     "inferred": [
      "שיבוש הפעילות הכלכלית והאנרגטית בסעודיה",
      "הרתיעה של הקואליציה מהמשך התקיפות בתימן"
     ],
     "forecast": [
      "המשך שיגורים לעבר יעדים בשטח סעודיה",
      "הגברת האיומים על נתיבי השיט והתשתיות האזוריות"
     ]
    },
    {
     "actor": "הקואליציה בראשות סעודיה",
     "declared": [
      "פגיעה ביכולות צבאיות, אמצעי לחימה ונמלים המשמשים את החות'ים להבריחת נשק",
      "יירוט טילים וכטב\"מים המכוונים לעבר שטח סעודיה"
     ],
     "inferred": [
      "בלימת התעצמות החות'ים והגנה על התשתיות האסטרטגיות של סעודיה",
      "שמירה על הלגיטימציה של ממשלת תימן המוכרת"
     ],
     "forecast": [
      "המשך פעולות צבאיות ממוקדות נגד תשתיות חות'יות בתימן",
      "חיזוק שיתוף הפעולה הדיפלומטי הבינלאומי נגד החות'ים"
     ]
    },
    {
     "actor": "ממשלת תימן",
     "declared": [
      "קריאה לקהילה הבינלאומית להכיר בחות'ים כארגון טרור",
      "התרעה על מצב זכויות האדם והמצור בתימן ובפרט בתעז"
     ],
     "inferred": [
      "גיוס לחץ דיפלומתי עולמי לבידוד החות'ים",
      "החלשת הלגיטימציה והיכולות הכלכליות של המיליציה"
     ],
     "forecast": [
      "המשך הפניות והפניות לגופים בינלאומיים ולאו\"ם",
      "ניסיונות להשגת סיוע הומניטרי ומדיני"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/houthis-launch-strikes-on-saudi-arabia",
     "accessed_at": "2026-11-21T17:49:36+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/houthis-order-ships-to-leave-saudi-red-sea-ports-after-hodeidah-airstrikes/",
     "accessed_at": "2026-11-21T17:49:36+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-676",
     "accessed_at": "2026-11-21T17:49:36+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/saudi-coalition-launches-operation-houthis-vow-reprisals",
     "accessed_at": "2026-11-21T17:49:36+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/156183",
     "accessed_at": "2026-11-21T17:49:36+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-21T00:42:47+00:00",
  "changes": {
   "YEMEN-11211749-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות מבצע מיוחד של הקואליציה בתימן",
    "score": 1.0
   },
   "YEMEN-11211749-02": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "יירוט טילים בליסטיים מעל ריאד",
    "score": 1.0
   },
   "YEMEN-11211749-03": {
    "kind": "new"
   },
   "YEMEN-11211749-04": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-21T1745__iran-202611211745.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-21T17:45:08+00:00",
   "window": {
    "from": "2026-11-20T17:45:08+00:00",
    "to": "2026-11-21T17:45:08+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202611211745"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך סביב סגר ימי מתמשך שמפעילה ארה\"ב והתקפות איראניות על כלי שיט במצר הורמוז, לצד חילופי האיומים והעמדות סביב תוכנית הגרעין והסכמים עתידיים. איראן מאיימת לשבור את המצור האמריקאי בכל אמצעי, בעוד וושינגטון מציבה תנאים נוקשים ודוחה טענות על פגיעה בכלים אמריקאיים באזור.",
   "fronts": [
    {
     "name": "חזית איראן - ארה\"ב וישראל",
     "status": "פעיל ומתוח"
    },
    {
     "name": "זירת מצר הורמוז והמפרץ",
     "status": "פעיל עם שיבושי תנועה ותקיפות ימיות"
    }
   ],
   "events": [
    {
     "id": "IRAN-11211745-01",
     "title": "משלחת מקטאר ביקרה בטהרן",
     "summary": "משלחת מקטאר קיימה שיחות בטהרן עם בכירים איראניים במסגרת מאמצים דיפלומטיים להביא לסיום העימות.",
     "axis": "ציר איראן-תווך",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T14:28:58+00:00",
     "last_update_at": "2026-11-21T17:31:59+00:00",
     "what_is_not_verified": "פרטי ההסכמות או התוצאות המדויקות של השיחות אינם מאומתים מעבר לקיומן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_2caa646b10f3d0c6",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/qatari-delegation-visits-tehran-talks-iran-says",
       "published_at": "2026-11-21T17:31:59+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_2caa646b10f3d0c6",
       "url": "https://www.maariv.co.il/breaking-news/article-1390720",
       "published_at": "2026-11-21T14:28:58+00:00"
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
     "id": "IRAN-11211745-02",
     "title": "הכחשת ארה\"ב לגבי פגיעה במטוס F-16 מעל המפרץ",
     "summary": "פיקוד המרכז של ארה\"ב הכחיש את הטענה האיראנית כי מערכות הגנה אווירית פגעו במטוס קרב אמריקאי וגרמו לו לנחות נחיתת חירום.",
     "axis": "ציר איראן-ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:22:24+00:00",
     "last_update_at": "2026-11-21T16:46:27+00:00",
     "what_is_not_verified": "האמת מאחורי הטענה האיראנית לפגיעה במטוס לעומת ההכחשה האמריקאית המוחלטת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_e6fb12815973f9d8",
       "url": "https://www.al-monitor.com/originals/2026/11/us-denies-iranian-account-missile-damaged-f-16-over-gulf",
       "published_at": "2026-11-21T16:46:27+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_e6fb12815973f9d8",
       "url": "https://www.maariv.co.il/breaking-news/article-1390738",
       "published_at": "2026-11-21T15:31:12+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_c7f4bfa537dcc4d9",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-denies-iran-hit-f-16-fighter-jet",
       "published_at": "2026-11-21T15:29:28+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_e6fb12815973f9d8",
       "url": "https://t.me/lelotsenzura/95090",
       "published_at": "2026-11-21T15:22:24+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11211745-03",
     "title": "יירוט לכאורה של מזל\"ט ריגול חוף איראן",
     "summary": "משמרות המהפכה של איראן הודיעו על יירוט והשמדת מזל\"ט ריגול של האויב מול חופי בושהר במפרץ הפרסי.",
     "axis": "ציר איראן-ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T15:45:11+00:00",
     "last_update_at": "2026-11-21T15:45:11+00:00",
     "what_is_not_verified": "זהות המזל\"ט והוכחות עצמאיות לאירוע היירוט אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_2bf2d83db3074620",
       "url": "https://en.irna.ir/news/86328562/Enemy-spy-drone-downed-off-Iran-s-southern-coast-IRGC",
       "published_at": "2026-11-21T15:45:11+00:00"
      }
     ],
     "places": [
      {
       "name": "בושהר, איראן",
       "lat": 28.9311,
       "lon": 50.8458
      }
     ]
    },
    {
     "id": "IRAN-11211745-04",
     "title": "תקריות במצר הורמוז ומכליות נפגעות",
     "summary": "נרשמו פגיעות במכליות שיט בסמוך לעומאן על רקע שיבושים מתמשכים במצר הורמוז.",
     "axis": "ציר איראן-המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T15:01:18+00:00",
     "last_update_at": "2026-11-21T15:01:18+00:00",
     "what_is_not_verified": "האחריות הישירה של גורמים ספציפיים לכל אחת מהתקריות במצר אינה מפורטת במלואה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_538c563d4dacf698",
       "url": "https://www.aljazeera.com/news/2026/11/21/tankers-hit-in-strait-of-hormuz-as-iran-tightens-grip-on-shipping?traffic_source=rss",
       "published_at": "2026-11-21T15:01:18+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר הורמוז",
       "lat": 26.4494,
       "lon": 56.2028
      }
     ]
    }
   ],
   "not_verified": [
    "הטענה האיראנית על פגיעה במטוס F-16 אמריקאי מעל המפרץ",
    "הטענה האיראנית על יירוט מזל\"ט ריגול מול חופי בושהר",
    "יציאת מכליות ענק איראניות מאי ח'ארכ לעבר סין פריצת המצור",
    "פיתוח נשק כימי על ידי איראן כפי שטוענים גורמים מסוימים"
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "שבירת המצור הימי האמריקאי בכל אמצעי נדרש",
      "מתן תגובה מהירה ונחרצת לכל תוקפנות חדשה",
      "סירוב לייצוא חומרים מועשרים מחוץ למדינה"
     ],
     "inferred": [
      "ניסיון לעקוף את הסנקציות והסגר באמצעות ייצוא אנרגיה",
      "שימור יכולות הרתעה צבאיות ואמצעי לחימה תת-קרקעיים"
     ],
     "forecast": [
      "המשך החיכוך במצר הורמוז ופגיעה בנתיבי השיט",
      "התמודדות עם לחץ כלכלי ופנימי גובר"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "השגת עסקה קבוע שתמנע מאיראן נשק גרעיני לטווח ארוך",
      "המשך אכיפת סגר ימי על איראן"
     ],
     "inferred": [
      "שחיקת היכולות האיראניות ושמירה על חופש השייט באמצעות נוכחות צבאית",
      "מניעת הסלמה אזורית רחבה מדי במקביל ללחץ כלכלי"
     ],
     "forecast": [
      "המשך האכיפה הימית והפעילות המודיעינית באזור המפרץ",
      "התניה של כל הקלה בעסקה עתידית בתנאים נוקשים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/11/21/tankers-hit-in-strait-of-hormuz-as-iran-tightens-grip-on-shipping?traffic_source=rss",
     "accessed_at": "2026-11-21T17:45:08+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/us-denies-iranian-account-missile-damaged-f-16-over-gulf",
     "accessed_at": "2026-11-21T17:45:08+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86328562/Enemy-spy-drone-downed-off-Iran-s-southern-coast-IRGC",
     "accessed_at": "2026-11-21T17:45:08+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1390738",
     "accessed_at": "2026-11-21T17:45:08+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-denies-iran-hit-f-16-fighter-jet",
     "accessed_at": "2026-11-21T17:45:08+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95090",
     "accessed_at": "2026-11-21T17:45:08+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-21T00:40:58+00:00",
  "changes": {
   "IRAN-11211745-01": {
    "kind": "new"
   },
   "IRAN-11211745-02": {
    "kind": "new"
   },
   "IRAN-11211745-03": {
    "kind": "new"
   },
   "IRAN-11211745-04": {
    "kind": "possible",
    "prev": "החרפת המשבר הסביבתי והכלכלי במצר הורמוז עקב הלחימה הימית",
    "score": 0.467
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-21T1748__ukraine-202611211748.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-21T17:48:56+00:00",
   "window": {
    "from": "2026-11-20T17:48:56+00:00",
    "to": "2026-11-21T17:48:56+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202611211748"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת בעצימות גבוהה, הכוללת מתקפות אוויריות נרחבות על תשתיות אנרגיה וגשרים באוקראינה, לצד פגיעה במטרות רוסיות בהן גשר קרים וספינות מטען. במקביל, מתקיימים מגעים דיפלומטיים בינלאומיים בנוגע לאפשרות של משא ומתן עתידי בהשתתפות אוקראינה, ארצות הברית ומדינות אירופה.",
   "fronts": [
    {
     "name": "חזית מזרח ומערב אוקראינה (חרקיב, דניפרו, חרסון)",
     "status": "פעיל וקשה"
    },
    {
     "name": "חזית העורף ותשתיות האנרגיה (קייב, אודסה, לביב)",
     "status": "התקפות אוויריות נרחבות"
    },
    {
     "name": "חזית ימית (ים סוף / מפרץ פינלנד וגשר קרים)",
     "status": "תקיפות הדדיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11211748-01",
     "title": "תקיפת כטב\"ם על ספינת מטען בפינלנד",
     "summary": "ספינת מטען הקשורה לצבא רוסיה נפגעה מכטב\"ם באזור מפרץ פינלנד ועלתה באש.",
     "axis": "ימי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T15:37:00+00:00",
     "last_update_at": "2026-11-21T17:39:48+00:00",
     "what_is_not_verified": "הסיכון המדויק לפיצוץ חומרי המטען",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_787a27d9f46f4040",
       "url": "https://kyivindependent.com/russian-military-linked-cargo-ship-catches-fire-after-reported-drone-strike-in-gulf-of-finland/",
       "published_at": "2026-11-21T17:39:48+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_787a27d9f46f4040",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/21/8063980/",
       "published_at": "2026-11-21T15:37:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מפרץ פינלנד",
       "lat": 59.8737,
       "lon": 26.323
      }
     ]
    },
    {
     "id": "UKRAINE-11211748-02",
     "title": "פגיעות בתשתיות חשמל במחוז אודסה",
     "summary": "לאחר מתקפה נרחבת של רוסיה, צוותי אנרגיה הצליחו לייצב חלקית את האספקה אך המצב במחוז אודסה נותר קשה.",
     "axis": "עורף ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T15:38:00+00:00",
     "last_update_at": "2026-11-21T16:54:00+00:00",
     "what_is_not_verified": "לוח הזמנים המלא לתיקון כלל התשתיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_d283d2f6b366ace5",
       "url": "https://www.ukrinform.net/rubric-ato/4187223-electricity-supply-situation-remains-difficult-in-odesa-region-ministry-of-energy.html",
       "published_at": "2026-11-21T16:54:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_ad9d9081e1d13e23",
       "url": "https://www.ukrinform.net/rubric-ato/4187206-russian-forces-attack-odesa-region-civilian-infrastructure-damaged.html",
       "published_at": "2026-11-21T15:38:00+00:00"
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
     "id": "UKRAINE-11211748-03",
     "title": "איתור ראש קרב שלא התפוצץ בקייב",
     "summary": "ראש קרב של טיל בליסטי מסוג איסקנדר-M שלא התפוצץ אותר באזור פודולסקי בקייב.",
     "axis": "עורף אוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T16:50:22+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-21T16:50:22+00:00",
     "last_update_at": "2026-11-21T16:50:22+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49798",
       "published_at": "2026-11-21T16:50:22+00:00"
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
     "id": "UKRAINE-11211748-04",
     "title": "נפגעים במחוזות דניפרופטרובסק וחרסון",
     "summary": "מתקפות רוסיות באמצעות כטב\"מים וארטילריה פגעו במספר מחוזות וגרמו לפציעתם של בני אדם.",
     "axis": "דרום ומזרח אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T16:48:00+00:00",
     "last_update_at": "2026-11-21T16:48:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_26a50a33b134c7ff",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/21/8063987/",
       "published_at": "2026-11-21T16:48:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      },
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-11211748-05",
     "title": "פגיעה גשר קרים והערכת נזקים",
     "summary": "הכוחות האוקראיניים פגעו בגשר קרים, ושר ההגנה האוקראיני מעריך שייקח חודשים ארוכים לתקן את החלקים ההרוסים.",
     "axis": "דרום אוקראינה וים המלח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T11:20:04+00:00",
     "last_update_at": "2026-11-21T16:13:00+00:00",
     "what_is_not_verified": "משך הזמן המדויק שייקח לרוסים לתקן את הגשר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_0fa9fd6932cc3b6c",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/21/8063984/",
       "published_at": "2026-11-21T16:13:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_0fa9fd6932cc3b6c",
       "url": "https://kyivindependent.com/russia-could-take-a-year-to-clear-collapsed-crimean-bridge-section-ukraines-defense-minister-says/",
       "published_at": "2026-11-21T12:21:40+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_b7ab98a34aa1159b",
       "url": "https://tass.com/society/2222879",
       "published_at": "2026-11-21T11:20:04+00:00"
      }
     ],
     "places": [
      {
       "name": "גשר קרים",
       "lat": 45.2786,
       "lon": 36.5393
      }
     ]
    },
    {
     "id": "UKRAINE-11211748-06",
     "title": "פגיעת טילים ורחפנים בשטח פולין",
     "summary": "טילים רוסיים וכטב\"ם חדרו לשטח פולין והתרסקו, מה שהוביל להאשמות מצד פולין על פרובוקציה מכוונת.",
     "axis": "גבול פולין-אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T16:16:01+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T16:16:01+00:00",
     "last_update_at": "2026-11-21T15:07:05+00:00",
     "what_is_not_verified": "האם חדירת המסוק הפיני קשורה ישירות",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_ef9222cae95ca22a",
       "url": "https://www.theguardian.com/world/video/2026/nov/21/cctv-shows-unknown-object-crashing-and-exploding-near-poland-ukraine-border-video",
       "published_at": "2026-11-21T15:07:05+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_ef9222cae95ca22a",
       "url": "https://www.bbc.co.uk/news/articles/cqx2x9dklxnro?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-21T02:09:46+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_e1531b8b6c9e641f",
       "url": "https://www.theguardian.com/world/2026/nov/20/russian-missiles-drone-poland-attacks-ukraine",
       "published_at": "2026-11-20T16:16:01+00:00"
      }
     ],
     "places": [
      {
       "name": "גבול פולין-אוקראינה",
       "lat": 51.5082,
       "lon": 23.6178
      }
     ]
    },
    {
     "id": "UKRAINE-11211748-07",
     "title": "גירוש דיפלומט רוסי מדנמרק",
     "summary": "דנמרק החליטה לגרש את הנספח הצבאי הרוסי בעקבות חשד למעורבות במזימת חיסול.",
     "axis": "דיפלומטי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-21T10:26:36+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-21T10:26:36+00:00",
     "last_update_at": "2026-11-21T14:03:50+00:00",
     "what_is_not_verified": "המעורבות הישירה של מוסקבה במזימת החיסול",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_88cda4f7e8b257e8",
       "url": "https://www.theguardian.com/world/2026/nov/20/denmark-russian-diplomat-us-ukrainian-rapper-attempted-killing",
       "published_at": "2026-11-21T14:03:50+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_88cda4f7e8b257e8",
       "url": "https://www.bbc.co.uk/news/articles/cmde1lj4yjxno?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-21T10:26:36+00:00"
      }
     ],
     "places": [
      {
       "name": "קופנהגן, דנמרק",
       "lat": 55.6867,
       "lon": 12.5701
      }
     ]
    },
    {
     "id": "UKRAINE-11211748-08",
     "title": "מתקפות טילים נרחבות על קייב ולביב",
     "summary": "רוסיה ביצעה מתקפה משולבת של טילים וכטב\"מים שהביאה לפגיעה בגשרים בקייב ולהרוגים ופצועים בלביב.",
     "axis": "כלל אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T22:35:07+00:00",
     "last_update_at": "2026-11-20T22:35:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_51b1635a8a845f1b",
       "url": "https://meduza.io/en/feature/2026/11/21/russia-launches-massive-attack-on-ukraine-a-day-after-putin-s-meeting-with-trump-and-xi",
       "published_at": "2026-11-20T22:35:07+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "לביב, אוקראינה",
       "lat": 49.842,
       "lon": 24.0316
      }
     ]
    },
    {
     "id": "UKRAINE-11211748-09",
     "title": "מתקפת טילים על קריווי ריה",
     "summary": "כוחות רוסיים תקפו את העיר קריווי ריה באמצעות טילים בליסטיים וכטב\"מים, מה שהביא לפציעת 20 אזרחים ולפגיעה במבנים.",
     "axis": "מרכז אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T20:17:28+00:00",
     "last_update_at": "2026-11-20T20:17:28+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_eb66ed2093e9f707",
       "url": "https://meduza.io/en/news/2026/11/20/russian-ballistic-missile-strike-on-ukraine-s-kryvyi-rih-injures-20-including-three-children",
       "published_at": "2026-11-20T20:17:28+00:00"
      }
     ],
     "places": [
      {
       "name": "קריווי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      }
     ]
    }
   ],
   "not_verified": [
    "מעורבות ישירה של המודיעין הרוסי בניסיון החיסול של הראפר בדנמרק",
    "היקף הנזק המדויק על הספינה שעלתה באש בגלל סכנת פיצוץ מטען בלתי ידוע"
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
     "value": 1.099,
     "unit": "USD",
     "change_pct": -0.02,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על תשתיות קריטיות וחיזוק מערכות ההגנה האווירית",
      "דרישה למחויבויות ביטחוניות ברורות בדומה לסעיף 5 של נאט\"ו",
      "השתתפות מלאה של אירופה בכל תהליך משא ומתן עתידי"
     ],
     "inferred": [
      "פגיעה בנתיבי הלוגיסטיקה והתשתיות של רוסיה (כגון גשר קרים וספינות צבאיות) כדי לשפר את עמדת המיקוח"
     ],
     "forecast": [
      "המשך ניסיונות להשיג טילי הגנה מתקדמים בעזרת בעלות בריתה באירופה",
      "הגברת השימוש בכטב\"מים מתקדמים מבוססי בינה מלאכותית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך פגיעה במטרות צבאיות ובתשתיות תומכות לחימה של אוקראינה"
     ],
     "inferred": [
      "שחיקת היכולות הכלכליות והאנרגטיות של אוקראינה באמצעות מתקפות עצימות",
      "יצירת הרתעה מול מדינות אירופה התומכות באוקראינה"
     ],
     "forecast": [
      "המשך תקיפות אוויריות ושימוש באמצעי הטעיה נגד כטב\"מים אוקראיניים",
      "ניסיונות שיקום איטיים של התשתיות שנפגעו כמו גשר קרים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmde1lj4yjxno?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/20/denmark-russian-diplomat-us-ukrainian-rapper-attempted-killing",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russia-could-take-a-year-to-clear-collapsed-crimean-bridge-section-ukraines-defense-minister-says/",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/20/russian-ballistic-missile-strike-on-ukraine-s-kryvyi-rih-injures-20-including-three-children",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/21/8063984/",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/society/2222879",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49798",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4187206-russian-forces-attack-odesa-region-civilian-infrastructure-damaged.html",
     "accessed_at": "2026-11-21T17:48:56+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-20T07:53:39+00:00",
  "changes": {
   "UKRAINE-11211748-01": {
    "kind": "new"
   },
   "UKRAINE-11211748-02": {
    "kind": "possible",
    "prev": "פגיעות רוסיות במחוז דניפרופטרובסק",
    "score": 0.467
   },
   "UKRAINE-11211748-03": {
    "kind": "new"
   },
   "UKRAINE-11211748-04": {
    "kind": "new"
   },
   "UKRAINE-11211748-05": {
    "kind": "possible",
    "prev": "אזהרת פוטין לתגובה על תקיפת גשר קרים וסירוב למו\"מ",
    "score": 0.467
   },
   "UKRAINE-11211748-06": {
    "kind": "new"
   },
   "UKRAINE-11211748-07": {
    "kind": "new"
   },
   "UKRAINE-11211748-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "מתקפת טילים וכטב\"מים רוסית נרחבת על קייב ופגיעה בגשרים",
    "score": 0.817
   },
   "UKRAINE-11211748-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-21T0340__north-202611210340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-21T03:40:37+00:00",
   "window": {
    "from": "2026-11-20T03:40:37+00:00",
    "to": "2026-11-21T03:40:37+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202611210340"
   },
   "summary": "בדרום לבנון נרשמת פעילות צבאית התקפית מצד צה\"ל הכוללת גיחות אוויר, ירי ארטילרי ופעולות הנדסיות מול כפרים ומרחבים סמוכים לגבול. במקביל, הממשל בביירות מצהיר על שאיפה לריבונות מלאה ובלעדיות על החזקת הנשק, בעוד דיווחים עיתונאיים מייחסים לחיזבאללה שחיקה מבצעית ורצון להימנע מעימות רחב. בזירה הסורית נמשכים מאמצים לשיקום קשרים אזוריים דרך חידוש קווי תעופה לצד התמודדות עם אתגרים בריאותיים וסוגיות משפטיות פנימיות.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "חילופי אש ותקיפות ישראליות ממוקדות במספר גזרות"
    },
    {
     "name": "הזירה הפוליטית-צבאית בלבנון",
     "status": "מאמצי ממשל לבסס ריבונות מול חיזבאללה הנתון בשחיקה"
    },
    {
     "name": "סוריה",
     "status": "שיקום הדרגתי של קשרים בינלאומיים לצד התמודדות פנימית בריאותית ומשפטית"
    }
   ],
   "events": [
    {
     "id": "NORTH-11210340-01",
     "title": "תקיפות אוויריות וארטילריות של צה\"ל בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות אוויריות, הפגזות ארטילריות ופעולות הריסה במספר מוקדים בדרום לבנון, בהם חדאת'א, כפר תבנית, מיפדון וזוטר א-שרקיה.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T08:02:56+00:00",
     "last_update_at": "2026-11-20T22:24:59+00:00",
     "what_is_not_verified": "היקף הנזק המדויק, מטרות התקיפה וקיומן של הצתות מכוונות בידי כוחות צה\"ל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/153292/",
       "published_at": "2026-11-20T22:24:59+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/153272/",
       "published_at": "2026-11-20T20:25:51+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-attacks-hit-4-districts-in-southern-lebanon-cause-fires-damage/4132366",
       "published_at": "2026-11-20T15:00:05+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/153197/",
       "published_at": "2026-11-20T14:41:43+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/153182/",
       "published_at": "2026-11-20T14:40:07+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133938",
       "published_at": "2026-11-20T08:02:56+00:00"
      }
     ],
     "places": [
      {
       "name": "חדאת'א, לבנון",
       "lat": 33.1561,
       "lon": 35.3912
      }
     ]
    },
    {
     "id": "NORTH-11210340-02",
     "title": "דיווח על פניית חיזבאללה לאיראן בבקשה לפטור מהשתתפות בלחימה",
     "summary": "בעיתון הלבנוני נדאא אל-ווטן נטען כי חיזבאללה פנה לטהראן בבקשה להימנע ממעורבות במלחמה בעקבות שחיקה ביכולותיו הצבאיות, קשיים בהשגת אמצעי לחימה וביקורת בקרב העדה השיעית.",
     "axis": "לבנון - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T16:47:26+00:00",
     "last_update_at": "2026-11-20T16:47:26+00:00",
     "what_is_not_verified": "עצם הפנייה של חיזבאללה לטהראן ועמדת ההנהגה האיראנית בנושא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21897878",
       "published_at": "2026-11-20T16:47:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11210340-03",
     "title": "הצהרת ראש ממשלת לבנון על ריבונות מלאה ופירוק נשק חוץ-מדינתי",
     "summary": "ראש ממשלת לבנון נואף סלאם הדגיש כי העצמאות מחייבת סיום הנוכחות הישראלית בארצו, בלעדיות של המדינה על החלטות מלחמה ושלום, ואיסור על קיום נשק שאינו תחת שליטתה.",
     "axis": "לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T14:03:32+00:00",
     "last_update_at": "2026-11-20T14:03:32+00:00",
     "what_is_not_verified": "יכולת הממשלה הלבנונית לממש בפועל את פירוק הנשק וסמכויות השליטה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968945/salam-lebanons-independence-remains-incomplete-without-ending-israeli/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968945",
       "published_at": "2026-11-20T14:03:32+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11210340-04",
     "title": "ברכת נשיא ארצות הברית לנשיא לבנון לרגל יום העצמאות",
     "summary": "דונלד טראמפ בירך את נשיא לבנון ג'וזף עון, ציין כי קיימת הזדמנות לחיזוק הריבונות, היציבות והשלום עם השכנות, ושיבח את החלטות הממשלה הלבנונית.",
     "axis": "לבנון - ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T12:08:10+00:00",
     "last_update_at": "2026-11-20T12:08:10+00:00",
     "what_is_not_verified": "צעדים מעשיים שיקודמו בעקבות הברכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/968915/trump-sees-opportunity-for-peace-with-neighbors-as-lebanon-marks-indep/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968915",
       "published_at": "2026-11-20T12:08:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11210340-05",
     "title": "הסכם בין סוריה למצרים על חידוש טיסות ישירות",
     "summary": "רשויות התעופה של סוריה ומצרים סיכמו על חידוש הטיסות הישירות בין קהיר לדמשק ולחלב בתחילת חודש דצמבר, כחלק מחידוש קשרי התעופה הבינלאומיים של סוריה.",
     "axis": "סוריה - מצרים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T16:23:48+00:00",
     "last_update_at": "2026-11-20T17:53:13+00:00",
     "what_is_not_verified": "מועד ההפעלה הסופי של לוחות הטיסות של חברת התעופה הסורית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-and-egypt-resume-direct-flights-december",
       "published_at": "2026-11-20T17:53:13+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/egyptair-to-resume-direct-flights-to-syria-in-december/",
       "published_at": "2026-11-20T16:23:48+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "חלב, סוריה",
       "lat": 36.1992,
       "lon": 37.1637
      }
     ]
    },
    {
     "id": "NORTH-11210340-06",
     "title": "סדנה בחלב לשיקום סוריה בראיית טורקיה",
     "summary": "בעיר חלב שבסוריה התקיימה סדנה שעסקה בדיפלומטיה אזרחית ובבחינת שיתופי פעולה לשיקום המדינה תחת החזון המדיני של טורקיה.",
     "axis": "סוריה - טורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-20T12:19:00+00:00",
     "last_update_at": "2026-11-20T12:19:00+00:00",
     "what_is_not_verified": "זהות המשתתפים המדויקת והסכמים מעשיים שגובשו בסדנה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/diplomacy/aleppo-workshop-explores-civil-diplomacy-syrias-reconstruction",
       "published_at": "2026-11-20T12:19:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חלב, סוריה",
       "lat": 36.1992,
       "lon": 37.1637
      }
     ]
    },
    {
     "id": "NORTH-11210340-07",
     "title": "היערכות למבצע חיסון נגד פוליו בדיר א-זור",
     "summary": "משרד הבריאות בסוריה נערך לחסן יותר מ-371 אלף ילדים במחוז דיר א-זור בעקבות איתור שלושה מקרי תחלואה מאומתים בנגיף הפוליו.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-19T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T15:34:02+00:00",
     "last_update_at": "2026-11-20T15:34:02+00:00",
     "what_is_not_verified": "המועד המדויק שבו יחל מבצע החיסונים בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/11/deir-ezzor-polio-campaign-to-target-371000-children/",
       "published_at": "2026-11-20T15:34:02+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    },
    {
     "id": "NORTH-11210340-08",
     "title": "בירור משפטי בסוריה בעקבות גזרי דין מוות נגד בכירי משטר אסד לשעבר",
     "summary": "בסוריה נמשכים הדיונים המשפטיים לגבי אפשרות ערעור והפחתת עונשים ביחס לגזרי דין מוות שהוטלו על בשאר אל-אסד ובכירים לשעבר בגין פשעים נגד האנושות.",
     "axis": "סוריה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-20T13:13:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-20T13:13:26+00:00",
     "last_update_at": "2026-11-20T13:13:26+00:00",
     "what_is_not_verified": "האם יוגשו ערעורים רשמיים והאם ניתן יהיה לאכוף את פסקי הדין כלפי נאשמים שנמלטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/what-follows-syrias-death-sentences-assad-era-officials",
       "published_at": "2026-11-20T13:13:26+00:00"
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
    "נכונות הדיווח הלבנוני בדבר בקשת פטור ממלחמה שהעביר חיזבאללה לאיראן",
    "טענות על הצתות מכוונות שביצעו כוחות צה\"ל במתחמים אזרחיים בדרום לבנון",
    "יכולתה של המערכת המשפטית בסוריה להביא להסגרת מורשעים שנעדרים מהמדינה"
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
     "value": 3.3428,
     "unit": "ILS",
     "change_pct": 1.65,
     "source_id": "src_ecb",
     "as_of": "2026-11-20T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "פגיעה בתשתיות ובמטרות צבאיות בדרום לבנון"
     ],
     "inferred": [
      "הפעלת לחץ צבאי רציף להרחקת איומים מהגבול הצפוני",
      "הרתעת חיזבאללה מפני פתיחת מערכה כוללת"
     ],
     "forecast": [
      "המשך פעילות סיכול ואש ארטילרית ממוקדת בגזרת הגבול"
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "שאיפה לצמצם שחיקה צבאית ולהימנע מהרחבת העימות הישיר מול ישראל",
      "בלימת ביקורת ציבורית מבית בקרב האוכלוסייה השיעית"
     ],
     "forecast": [
      "שמירה על פרופיל פעילות מוגבל תוך תלות בהחלטות הנהגת איראן"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "סיום הנוכחות הצבאית הישראלית בשטח לבנון",
      "החלת ריבונות בלעדית של המדינה על החלטות מלחמה ושלום ועל החזקת נשק"
     ],
     "inferred": [
      "ניצול חולשת חיזבאללה כדי לחזק את הלגיטימציה של מוסדות המדינה",
      "הידוק שיתוף הפעולה המדיני והכלכלי מול ארצות הברית"
     ],
     "forecast": [
      "קושי מעשי בפירוק מיידי של ארגונים חמושים ללא הסכמה פנימית רחבה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "חידוש נתיבי תעופה בין-לאומיים ושיתופי פעולה אזוריים",
      "מאבק בהתפרצויות בריאותיות ובלימת נגיף הפוליו"
     ],
     "inferred": [
      "חתירה להכרה אזורית ובינלאומית מחודשת כדי לתמוך בשיקום המשק",
      "ביסוס סמכות מוסדות השלטון והמשפט מול שרידי שלטון אסד"
     ],
     "forecast": [
      "המשך פתיחת קווי תעופה ומגעים דיפלומטיים נוספים באזור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/153182/",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-attacks-hit-4-districts-in-southern-lebanon-cause-fires-damage/4132366",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/diplomacy/aleppo-workshop-explores-civil-diplomacy-syrias-reconstruction",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/11/deir-ezzor-polio-campaign-to-target-371000-children/",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21897878",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/968915/trump-sees-opportunity-for-peace-with-neighbors-as-lebanon-marks-indep/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-968915",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/what-follows-syrias-death-sentences-assad-era-officials",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133938",
     "accessed_at": "2026-11-21T03:40:37+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-20T08:13:44+00:00",
  "changes": {
   "NORTH-11210340-01": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "תקיפות אוויריות של צה\"ל בכפר תבנית בדרום לבנון",
    "score": 1.0
   },
   "NORTH-11210340-02": {
    "kind": "new"
   },
   "NORTH-11210340-03": {
    "kind": "new"
   },
   "NORTH-11210340-04": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "הצהרת צבא לבנון ליום העצמאות על ריבונות ונשק המדינה",
    "score": 0.65
   },
   "NORTH-11210340-05": {
    "kind": "new"
   },
   "NORTH-11210340-06": {
    "kind": "possible",
    "prev": "טורקיה מביעה תמיכה באיחוד סוריה ובשילוב ה-YPG",
    "score": 0.467
   },
   "NORTH-11210340-07": {
    "kind": "new"
   },
   "NORTH-11210340-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "מעצר גנרל לשעבר ממשטר אסד בסוריה",
    "score": 1.0
   }
  }
 }
};
