/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-28T0613__yemen-202610280613.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-28T06:13:05+00:00",
   "window": {
    "from": "2026-10-27T06:13:05+00:00",
    "to": "2026-10-28T06:13:05+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610280613"
   },
   "summary": "הלחימה בזירה התימנית החריפה באופן ניכר, כאשר עימותים קרקעיים כבדים ופעילות אווירית מתחוללים במרחב האסטרטגי של מצר באב אל-מנדב ודרום-מערב המדינה. החות'ים ממשיכים לשגר טילים בליסטיים לעבר יעדים צבאיים ותשתיות נפט מרכזיות בעומק סעודיה, כולל באזור המזרחי וריאד. במקביל, סעודיה מהדקת את שיתוף הפעולה הביטחוני עם שותפות אזוריות על מנת לייצר הרתעה מול ההתקפות מתימן.",
   "fronts": [
    {
     "name": "חזית מצר באב אל-מנדב וחוף הים האדום",
     "status": "קרבות עזים בין כוחות הממשלה הנתמכים בסעודיה לבין החות'ים, לצד תקיפות אוויריות מרובות"
    },
    {
     "name": "חזית סעודיה - תימן (עורף סעודיה)",
     "status": "ירי בליסטי חות'י מתמשך לעבר ערים ומתקני נפט מרכזיים, אל מול יירוטים של מערכות ההגנה"
    },
    {
     "name": "חזית צנעא והמרכז ההררי",
     "status": "ביצור מואץ של תשתיות תת-קרקעיות ומערכי מנהרות על ידי החות'ים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10280613-01",
     "title": "יירוט טיל בליסטי ששוגר לעבר טאיף",
     "summary": "הקואליציה בהובלת סעודיה יירטה והשמידה טיל בליסטי ששוגר על ידי החות'ים לעבר העיר טאיף.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T01:11:10+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T01:11:10+00:00",
     "last_update_at": "2026-10-28T01:11:10+00:00",
     "what_is_not_verified": "אין אימות עצמאי לשיגור או לתוצאות היירוט מעבר להודעת הקואליציה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154756",
       "published_at": "2026-10-28T01:11:10+00:00"
      }
     ],
     "places": [
      {
       "name": "טאיף, ערב הסעודית",
       "lat": 21.2703,
       "lon": 40.4158
      }
     ]
    },
    {
     "id": "YEMEN-10280613-02",
     "title": "מתקפת טילים על בית הזיקוק בראס תנורה ופיצוצים בריאד",
     "summary": "החות'ים טענו כי שיגרו טיל בליסטי לעבר בית הזיקוק בראס תנורה וגרמו לשרפות, בעוד הקואליציה הודיעה על יירוט שלושה טילים לעבר האזור המזרחי, ופיצוצים נשמעו בבירה ריאד.",
     "axis": "תימן - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T13:51:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T13:51:29+00:00",
     "last_update_at": "2026-10-27T13:51:29+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת למתקני הנפט בראס תנורה והשפעתה על הפעילות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-claim-attack-saudi-oil-refinery-blasts-shake-riyadh",
       "published_at": "2026-10-27T13:51:29+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס תנורה, ערב הסעודית",
       "lat": 26.7074,
       "lon": 50.0674
      },
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      },
      {
       "name": "אל-ח'ובאר, ערב הסעודית",
       "lat": 26.304,
       "lon": 50.196
      }
     ]
    },
    {
     "id": "YEMEN-10280613-03",
     "title": "קרבות עזים ותקיפות אוויריות באזור מצר באב אל-מנדב",
     "summary": "עימותים קשים בין כוחות הממשלה לחות'ים בדרום-מערב תימן וסביב באב אל-מנדב הביאו למותם של קרוב למאה לוחמים, במקביל לתקיפות אוויריות סעודיות באי מיון, בד'ובאב ובמוח'א.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T20:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T17:08:15+00:00",
     "last_update_at": "2026-10-27T17:08:15+00:00",
     "what_is_not_verified": "מספרי הנפגעים המדויקים ומידת ההתקדמות הקרקעית של כל צד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/fresh-clashes-yemen-kill-97-combatants-military-sources",
       "published_at": "2026-10-27T17:08:15+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      },
      {
       "name": "האי מיון, תימן",
       "lat": 12.6518,
       "lon": 43.4278
      },
      {
       "name": "מוח'א, תימן",
       "lat": 13.3179,
       "lon": 43.2501
      }
     ]
    },
    {
     "id": "YEMEN-10280613-04",
     "title": "עבודות תשתית וחפירת מנהרות של החות'ים מדרום לצנעא",
     "summary": "ניתוח תצלומי לוויין חשף פעולות חפירה והקמת מערך תת-קרקעי בהר אידריס באזור בית בוס, כולל פריצת ציר עפר חדש באורך של כ-2.8 קילומטרים.",
     "axis": "פנים-תימן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T20:28:48+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T20:28:48+00:00",
     "last_update_at": "2026-10-27T20:28:48+00:00",
     "what_is_not_verified": "ייעודם המדויק של המבנים החדשים והמנהרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49026",
       "published_at": "2026-10-27T20:28:48+00:00"
      }
     ],
     "places": [
      {
       "name": "בית בוס, צנעא, תימן",
       "lat": 15.2827,
       "lon": 44.2058
      }
     ]
    },
    {
     "id": "YEMEN-10280613-05",
     "title": "סיוע לווייני רוסי בתקיפות נגד מטרות סעודיות",
     "summary": "מחקר גיאומרחבי ודיווחים הצביעו על התאמה מלאה בין תנועת לווייני ביון רוסיים לבין מתקפות טילים וכטב\"מים חות'יות על תשתיות נפט ובסיסים בסעודיה.",
     "axis": "תימן - סעודיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T17:55:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T17:55:57+00:00",
     "last_update_at": "2026-10-27T17:55:57+00:00",
     "what_is_not_verified": "מידת המעורבות הישירה של גורמי ממשל רוסיים או סיניים בהעברת המידע בזמן אמת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/russian-satellites-help-irans-allies-strike-saudi-arabia",
       "published_at": "2026-10-27T17:55:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10280613-06",
     "title": "אישור הסכם הגנה בין טורקיה, סעודיה ופקיסטן",
     "summary": "ועדה בפרלמנט הטורקי אישרה הסכם הגנה משותף עם סעודיה ופקיסטן, הכולל התחייבות לסיוע הדדי בעת מתקפה ושיתוף פעולה צבאי, על רקע המתיחות עם החות'ים.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T23:55:31+00:00",
     "last_update_at": "2026-10-27T23:55:31+00:00",
     "what_is_not_verified": "מועד ההצבעה במליאת הפרלמנט הטורקי והיקף הסיוע הצבאי בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/turkey-committee-approves-pact-saudi-arabia-and-pakistan",
       "published_at": "2026-10-27T23:55:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10280613-07",
     "title": "שיחות בטהרן להפסקת התקיפות החות'יות",
     "summary": "משלחת מסעודיה, פקיסטן וטורקיה נועדה בטהרן במטרה לבלום את ההסלמה והתקיפות מתימן, אך איראן השיבה שאין לה מנוף לחץ מספק על החות'ים.",
     "axis": "תימן - סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T20:48:19+00:00",
     "last_update_at": "2026-10-27T20:48:19+00:00",
     "what_is_not_verified": "פרטי השיחות המלאים שפורסמו בדיווחים עיתונאיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21720893",
       "published_at": "2026-10-27T20:48:19+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "טענת החות'ים על גרימת שרפות ענק במתקני בית הזיקוק בראס תנורה",
    "מספר הנפגעים המדויק בקרבות סביב מצר באב אל-מנדב",
    "מידת ההתקדמות הקרקעית הנטענת של כוחות ממשלת תימן",
    "היקף שיתוף הפעולה המודיעיני הישיר של ממשלת רוסיה בהכוונת פגיעות החות'ים"
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
     "value": 3.0496,
     "unit": "ILS",
     "change_pct": -0.98,
     "source_id": "src_ecb",
     "as_of": "2026-10-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים (אנצאר אללה)",
     "declared": [
      "פגיעה במתקני נפט ותשתיות אסטרטגיות סעודיות בתגובה לפעולות הקואליציה",
      "בלימת התקדמות כוחות הקואליציה וצבא תימן בגזרת באב אל-מנדב"
     ],
     "inferred": [
      "שימור השליטה במעברים ימיים חיוניים ושיפור כושר ההישרדות של פיקוד התנועה באמצעות ביצורים תת-קרקעיים",
      "הפעלת לחץ כלכלי כבד על סעודיה כדי לכפות שינוי במאזן הכוחות"
     ],
     "forecast": [
      "המשך ניסיונות שיגור של טילים וכטב\"מים לעבר מתקנים רגישים בסעודיה",
      "החרפת הקרבות על צירי השליטה לחופי הים האדום ומצר באב אל-מנדב"
     ]
    },
    {
     "actor": "סעודיה והקואליציה הערבית",
     "declared": [
      "הגנה על שטח הממלכה ויירוט האיומים הבליסטיים הנורים מתימן",
      "סיוע לכוחות ממשלת תימן החוקית להשבת שטחים מידי החות'ים"
     ],
     "inferred": [
      "בניית מערך בריתות אזורי והרתעתי מול איומי הטילים",
      "הרחקת החות'ים מנתיבי השיט הבינלאומיים במצר באב אל-מנדב"
     ],
     "forecast": [
      "הגברת התקיפות האוויריות הממוקדות לאורך חופי הים האדום",
      "המשך קידום הסכמי הגנה ורכש צבאי עם בעלות ברית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21720893",
     "accessed_at": "2026-10-28T06:13:05+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/turkey-committee-approves-pact-saudi-arabia-and-pakistan",
     "accessed_at": "2026-10-28T06:13:05+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154756",
     "accessed_at": "2026-10-28T06:13:05+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49026",
     "accessed_at": "2026-10-28T06:13:05+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-27T15:59:51+00:00",
  "changes": {
   "YEMEN-10280613-01": {
    "kind": "new"
   },
   "YEMEN-10280613-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "יירוט טילים מעל מחוז המזרח ופיצוצים בריאד",
    "score": 1.0
   },
   "YEMEN-10280613-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "עימותים ליד מצר באב אל-מנדב",
    "score": 1.0
   },
   "YEMEN-10280613-04": {
    "kind": "new"
   },
   "YEMEN-10280613-05": {
    "kind": "new"
   },
   "YEMEN-10280613-06": {
    "kind": "new"
   },
   "YEMEN-10280613-07": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-28T0040__iran-202610280040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-28T00:40:27+00:00",
   "window": {
    "from": "2026-10-27T00:40:27+00:00",
    "to": "2026-10-28T00:40:27+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610280040"
   },
   "summary": "העימות בין איראן לבין ישראל וארה\"ב נמשך במקביל למאמצים דיפלומטיים אזוריים של שכנות איראן לבלום הסלמה ולדרוש את הבטחת חופש השיט במצר הורמוז. איראן מעמיקה את שיתוף הפעולה הכלכלי והאנרגטי עם רוסיה על אף הסנקציות והסגר הימי האמריקאי, בעוד שבזירה הפנימית בישראל ובארה\"ב מתנהל שיח ער לקראת אפשרות של פעולות צבאיות נוספות והשפעתן הפוליטית.",
   "fronts": [
    {
     "name": "הזירה הישראלית-איראנית",
     "status": "פעיל ומתוח לקראת הכרעות אפשריות"
    },
    {
     "name": "מפרץ הורמוז והסגר הימי",
     "status": "במוקד חיכוך ולחץ דיפלומטי אזורי"
    },
    {
     "name": "ציר איראן-רוסיה",
     "status": "מתהדק בתחומי הכלכלה והאנרגיה"
    }
   ],
   "events": [
    {
     "id": "IRAN-10280040-01",
     "title": "פגישת בכירים מסעודיה, פקיסטן וטורקיה בטהראן",
     "summary": "בכירים מסעודיה, טורקיה ופקיסטן קיימו שיחות בטהראן עם נציגי איראן בנוגע לדרכים למניעת התחדשות הלחימה באזור, הפסקת תקיפות החות'ים וסוגיות נוספות.",
     "axis": "ציר איראן מול המפרץ והמערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T23:24:17+00:00",
     "last_update_at": "2026-10-27T22:56:56+00:00",
     "what_is_not_verified": "האם הושגו הסכמות מעשיות בנוגע לתקיפות החות'ים או מנופי הלחץ האיראניים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610277978",
       "published_at": "2026-10-27T22:56:56+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21720893",
       "published_at": "2026-10-27T20:48:19+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261026-iran-talks-mecca-pact-nations-war",
       "published_at": "2026-10-26T23:24:17+00:00"
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
     "id": "IRAN-10280040-02",
     "title": "ועידת פורום המדינות המייצאות גז ברוסיה",
     "summary": "נשיא איראן השתתף בוועידת פורום המדינות המייצאות גז ברוסיה, קים פגישות עם נשיא רוסיה ושוחח עמו על פרויקטים משותפים באנרגיה.",
     "axis": "ציר איראן-רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T20:11:40+00:00",
     "last_update_at": "2026-10-27T22:29:31+00:00",
     "what_is_not_verified": "פירוט מלא של ההסכמות המסחריות והטכניות בין המדינות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_b9df37756e35252b",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/27/iran-war-live-pezeshkian-says-middle-east-can-solve-own-issues-without-us?traffic_source=rss",
       "published_at": "2026-10-27T22:29:31+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_b9df37756e35252b",
       "url": "https://en.irna.ir/news/86305393/Pezeshkian-Gas-Exporting-Countries-Forum-summit-was-constructive",
       "published_at": "2026-10-27T21:51:02+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_3e028a1599a066f6",
       "url": "https://en.irna.ir/news/86305375/President-Pezeshkian-departs-Moscow-for-Tehran",
       "published_at": "2026-10-27T20:23:20+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_9065245742bb0115",
       "url": "https://en.irna.ir/news/86305374/Iranian-Russian-presidents-pledge-to-expand-bilateral-ties",
       "published_at": "2026-10-27T20:11:40+00:00"
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
     "id": "IRAN-10280040-03",
     "title": "הופעת נאשמים בבית משפט בלונדון בגין סיוע למודיעין איראן",
     "summary": "שני גברים הובאו בפני בית משפט בלונדון באשמת סיוע למודיעין איראני בהכנת תקיפות נגד עיתונאי איראן אינטרנשיונל ובסיס צבאי בריטי המשמש מפציצים אמריקאיים.",
     "axis": "ציר איראן מול המערב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T17:44:16+00:00",
     "last_update_at": "2026-10-27T21:02:38+00:00",
     "what_is_not_verified": "האם הפעולות הושלמו בפועל מעבר לשלב האיסוף.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610271521",
       "published_at": "2026-10-27T21:02:38+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610278185",
       "published_at": "2026-10-27T17:44:16+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    }
   ],
   "not_verified": [
    "היקף ההשפעה המדויק של המשלחת הסעודית-טורקית-פקיסטנית על מדיניות איראן והחות'ים",
    "קיומם בפועל של טילים איראניים חדשים המאיימים על אירופה או ארה\"ב",
    "האם תתבצע תקיפה ישראלית או אמריקאית נוספת באיראן בטווח הקצר"
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
     "value": 3.0496,
     "unit": "ILS",
     "change_pct": -0.98,
     "source_id": "src_ecb",
     "as_of": "2026-10-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הרחבת הקשרים הכלכליים והאנרגטיים עם רוסיה ומדינות האזור",
      "יצירת סדר ביטחוני אזורי ללא התערבות ארה\"ב"
     ],
     "inferred": [
      "עקפה חלק מהסנקציות והסגר הימי באמצעות הידוק קשרים עם מוסקבה",
      "ניצול דיפלומטיה אזורית כדי להפחית לחץ מבלי לוותר על נכסים אסטרטגיים"
     ],
     "forecast": [
      "המשך הידוק הברית עם רוסיה",
      "המשך מאמצי שיקום והתעצמות צבאית"
     ]
    },
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "מניעת התחמשות גרעינית איראנית",
      "בלימת שלוחות איראן והבטחת חופש השיט במפרץ ובמיצרים"
     ],
     "inferred": [
      "המשך אכיפת סגר ימי ופיקוח על ייצוא האנרגיה האיראני",
      "הכנה לאפשרות של עימות צבאי נוסף במידת הצורך"
     ],
     "forecast": [
      "שמירה על נוכחות צבאית במפרץ ובאזור",
      "המשך לחץ מדיני וכלכלי על טהראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/27/iran-war-live-pezeshkian-says-middle-east-can-solve-own-issues-without-us?traffic_source=rss",
     "accessed_at": "2026-10-28T00:40:27+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261026-iran-talks-mecca-pact-nations-war",
     "accessed_at": "2026-10-28T00:40:27+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610278185",
     "accessed_at": "2026-10-28T00:40:27+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86305374/Iranian-Russian-presidents-pledge-to-expand-bilateral-ties",
     "accessed_at": "2026-10-28T00:40:27+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21720893",
     "accessed_at": "2026-10-28T00:40:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-27T05:30:29+00:00",
  "changes": {
   "IRAN-10280040-01": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "פגישת בכירים בטהראן במסגרת הסכם מכה",
    "score": 1.0
   },
   "IRAN-10280040-02": {
    "kind": "new"
   },
   "IRAN-10280040-03": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-28T0051__ukraine-202610280051.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-28T00:51:58+00:00",
   "window": {
    "from": "2026-10-27T00:51:58+00:00",
    "to": "2026-10-28T00:51:58+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610280051"
   },
   "summary": "הלחימה באוקראינה נמשכת בעיצומן של התנגשויות קרקעיות ותקיפות אוויריות הדדיות, לצד פתיחת הפוגה הומניטרית מקומית באזור אולשקי. במקביל מתנהלים מגעים דיפלומטיים שונים הכוללים שיחות בין מנהיגים אירופאים למוסקבה והיערכות לפגישות משולשות עתידיות.",
   "fronts": [
    {
     "name": "חזית פוקרובסק",
     "status": "פעילה וחמה"
    },
    {
     "name": "חזית קופיאנסק",
     "status": "פעילה עם פעילות מיוחדת"
    },
    {
     "name": "חזית חרסון ואולשקי",
     "status": "הפוגה מקומית זמנית"
    },
    {
     "name": "עורף קייב וחארקוב",
     "status": "תחת תקיפות טילים וכטב\"מים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10280051-01",
     "title": "תקיפה באזור מפעל הפלדה בליפצק",
     "summary": "שריפה פרצה באזור מפעל פלדה לאחר הפעלת מערכות הגנה אווירית בעקבות תקיפה מדווחת.",
     "axis": "תקיפות אוויריות ועורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T21:41:31+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T21:41:31+00:00",
     "last_update_at": "2026-10-27T23:29:56+00:00",
     "what_is_not_verified": "היקף הנזק המלא והאחריות המדויקת של התקיפה אינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_exilenova_plus",
       "url": "https://kyivindependent.com/fires-burn-in-russian-city-of-lipetsk-after-reported-ukrainian-attack/",
       "published_at": "2026-10-27T23:29:56+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_exilenova_plus",
       "url": "https://t.me/alexmehacarmel/49029",
       "published_at": "2026-10-27T21:41:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ליפצק, רוסיה",
       "lat": 52.6051,
       "lon": 39.5964
      }
     ]
    },
    {
     "id": "UKRAINE-10280051-02",
     "title": "תקיפת בניין מגורים בחארקוב",
     "summary": "כוחות רוסיים פגעו בבניין מגורים במחוז בחארקוב ודווחו נפגעים ראשוניים.",
     "axis": "חזית המזרח והצפון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T21:45:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T21:45:00+00:00",
     "last_update_at": "2026-10-27T21:45:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_4d8f079e415544d8",
       "url": "https://www.ukrinform.net/rubric-ato/4178779-russian-forces-strike-apartment-building-in-kharkiv-casualties-reported.html",
       "published_at": "2026-10-27T21:45:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חארקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10280051-03",
     "title": "הפוגה מקומית באולשקי ותחילת פינוי",
     "summary": "הפוגה מקומית בלחימה החלה באולשקי לשם מתן אפשרות למעבר ציוד הומניטרי ופינוי אזרחים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T01:30:27+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T01:30:27+00:00",
     "last_update_at": "2026-10-27T17:59:24+00:00",
     "what_is_not_verified": "פרטי המסלולים המדויקים ויעדי הפינוי הסופיים של כלל התושבים אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_01b970b7b7fa3481",
       "url": "https://tass.com/world/2209053",
       "published_at": "2026-10-27T17:59:24+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_01b970b7b7fa3481",
       "url": "https://www.theguardian.com/world/2026/oct/27/oleshky-truce-ukraine-russia-putin",
       "published_at": "2026-10-27T17:43:02+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_01b970b7b7fa3481",
       "url": "https://meduza.io/en/feature/2026/10/27/trapped-without-food-electricity-or-medicine-civilians-in-occupied-oleshky-finally-have-a-chance-to-escape-but-even-those-wishing-to-go-to-ukraine-will-reportedly-be-taken-to-russia-first",
       "published_at": "2026-10-27T17:37:05+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_01b970b7b7fa3481",
       "url": "https://www.bbc.co.uk/news/articles/ck20wjnv3w0jo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-27T15:13:24+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_4e5c8adc40fbc9e8",
       "url": "https://www.theguardian.com/world/2026/oct/27/ukraine-war-briefing-russian-strikes-kyiv-truce-begins-oleshky",
       "published_at": "2026-10-27T01:30:27+00:00"
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
     "id": "UKRAINE-10280051-04",
     "title": "מבצע ותחת פני הקרקע בגזרת קופיאנסק",
     "summary": "כוחות אוקראיניים ביצעו התקדמות תת-קרקעית במסגרת מבצע 'ולס' בגזרת קופיאנסק.",
     "axis": "חזית המזרח והצפון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T17:37:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T17:37:00+00:00",
     "last_update_at": "2026-10-27T23:32:00+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק בצד הרוסי אינו מאומת ממקור חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_98c11994b857275b",
       "url": "https://www.ukrinform.net/rubric-ato/4178572-soldier-who-held-position-alone-for-491-days-nominated-for-hero-of-ukraine-title.html",
       "published_at": "2026-10-27T23:32:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_98c11994b857275b",
       "url": "https://kyivindependent.com/ukraine-war-latest-zelensky-reveals-details-of-operation-veles/",
       "published_at": "2026-10-27T19:20:27+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_98c11994b857275b",
       "url": "https://kyivindependent.com/ukraines-veles-pipeline-operation-near-kupiansk-eliminates-over-100-russian-troops-zelensky-says/",
       "published_at": "2026-10-27T18:05:12+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_98c11994b857275b",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/27/8059988/",
       "published_at": "2026-10-27T17:37:00+00:00"
      }
     ],
     "places": [
      {
       "name": "קופיאנסק, אוקראינה",
       "lat": 49.7133,
       "lon": 37.6142
      }
     ]
    },
    {
     "id": "UKRAINE-10280051-05",
     "title": "תקיפות טילים בליסטיים בקייב ובסביבתה",
     "summary": "כוחות רוסיים שיגרו טילים בליסטיים לעבר אזורים שונים בקייב ובמחוז קייב בשבועיים האחרונים.",
     "axis": "תקיפות אוויריות ועורף",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T01:30:27+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T01:30:27+00:00",
     "last_update_at": "2026-10-27T19:15:00+00:00",
     "what_is_not_verified": "מספר הטילים המדויק שפגע ביעדים לעומת אלה שיורטו מבוסס על הצהרות רשמיות בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_4e5c8adc40fbc9e8",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/27/8059999/",
       "published_at": "2026-10-27T19:15:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_4e5c8adc40fbc9e8",
       "url": "https://www.theguardian.com/world/2026/oct/27/ukraine-war-briefing-russian-strikes-kyiv-truce-begins-oleshky",
       "published_at": "2026-10-27T01:30:27+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    }
   ],
   "not_verified": [
    "{'string': 'פרטי ההסכמים המלאים סביב הסרת סנקציות אפשרית מעל קרן ההשקעות הרוסית במסגרת עסקאות דלק.'}",
    "{'string': 'זהותם המדויקת של המסלולים והיעדים הסופיים במסגרת הפינוי מאולשקי.'}"
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
     "value": 1.115,
     "unit": "USD",
     "change_pct": -0.34,
     "source_id": "src_ecb",
     "as_of": "2026-10-27T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על תשתיות האנרגיה והתחבורה",
      "השגת חבילות סיוע צבאי נוספות וטילים למערכות הגנה אווירית",
      "קידום מעורבות אירופאית ובינלאומית בהליכי משא ומתן"
     ],
     "inferred": [
      "שחיקת הכוחות הרוסיים בגזרות המפתח כמו קופיאנסק ופוקרובסק",
      "יצירת לחץ באמצעות פגיעה במטרות בעורף הרוסי"
     ],
     "forecast": [
      "המשך הדרישה לאספקת טילי פטריוט מתקדמים",
      "ניסיון להרחיב את ההפוגות ההומניטריות לאזורים נוספים תחת כיבוש"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך לחץ צבאי במספר חזיתות עיקריות באוקראינה",
      "עמידה על דרישותיה במסגרת שיחות ההסדרה"
     ],
     "inferred": [
      "ניצול תקיפות אוויריות כדי לפגוע בעורף ובכלכלה האוקראינית",
      "השגת הקלות בסנקציות הכלכליות הבינלאומיות"
     ],
     "forecast": [
      "המשך מתקפות טילים וכטב\"מים על ערים מרכזיות באוקראינה",
      "הידוק שיתופי פעולה עקיפים והשתלבות באירועים בינלאומיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ck20wjnv3w0jo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/27/ukraine-war-briefing-russian-strikes-kyiv-truce-begins-oleshky",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraines-veles-pipeline-operation-near-kupiansk-eliminates-over-100-russian-troops-zelensky-says/",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/27/trapped-without-food-electricity-or-medicine-civilians-in-occupied-oleshky-finally-have-a-chance-to-escape-but-even-those-wishing-to-go-to-ukraine-will-reportedly-be-taken-to-russia-first",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/27/8059999/",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2209053",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49029",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4178572-soldier-who-held-position-alone-for-491-days-nominated-for-hero-of-ukraine-title.html",
     "accessed_at": "2026-10-28T00:51:58+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-27T05:36:14+00:00",
  "changes": {
   "UKRAINE-10280051-01": {
    "kind": "new"
   },
   "UKRAINE-10280051-02": {
    "kind": "new"
   },
   "UKRAINE-10280051-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "הפסקת אש מקומית באולשקי ופינוי אזרחים",
    "score": 1.0
   },
   "UKRAINE-10280051-04": {
    "kind": "new"
   },
   "UKRAINE-10280051-05": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "מתקפת טילים בליסטיים על קייב",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-27T0542__north-202610270542.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-27T05:42:57+00:00",
   "window": {
    "from": "2026-10-26T05:42:57+00:00",
    "to": "2026-10-27T05:42:57+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610270542"
   },
   "summary": "בגזרה הצפונית נרשמות הפרעות הפסקת אש והיערכות מבצעית הכוללת פיתוח אמצעים טכנולוגיים כמו מערכות לייזר מול איומי רחפנים. בסוריה פועלת טורקיה להעמקת מעורבותה בתחום החינוך והתשתית לצד אירועים ביטחוניים פנימיים, בעוד דיפלומטיה אזורית מתקיימת בטהראן בניסיון לגבש מסגרת ביטחונית עצמאית.",
   "fronts": [
    {
     "name": "החזית הצפונית (ישראל-לבנון)",
     "status": "פעילה חלקית עם הפרות הפסקת אש והיערכות"
    },
    {
     "name": "הזירה הסורית",
     "status": "פעילה מבחינת מעורבות טורקית, אירועי פיצוצים ותיאומים אזוריים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10270542-01",
     "title": "תקיפות והפרות הפסקת אש בדרום לבנון",
     "summary": "בוצעה פגיעת תקיפה מהאוויר בפאתי קנטרה, וכן כוחות ביצעו פיצוצים בזוַתר א-שרקיה.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:41:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T00:41:24+00:00",
     "last_update_at": "2026-10-27T00:41:24+00:00",
     "what_is_not_verified": "היקף הנזק המלא והנפגעים אינם מפורטים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_186fdab9a5d44a9a",
       "url": "https://www.aa.com.tr/en/middle-east/israel-carries-out-strikes-in-southern-lebanon-in-fresh-ceasefire-violations/4101864",
       "published_at": "2026-10-27T00:41:24+00:00"
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
     "id": "NORTH-10270542-02",
     "title": "פיתוח מערכת לייזר טקטית לגבול הצפון",
     "summary": "פותחה מערכת לייזר טקטית המיועדת להציב מענה לרחפני סיב אופטי בגבול הצפון.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T09:41:33+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T09:41:33+00:00",
     "last_update_at": "2026-10-26T09:41:33+00:00",
     "what_is_not_verified": "לוח הזמנים המדויק והמיקום המדויק להצבה טרם פורטו במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "fh_6ea372a1a2a1a100",
       "url": "https://www.walla.co.il/news/military/383958910",
       "published_at": "2026-10-26T09:41:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10270542-03",
     "title": "פתיחת בית ספר טורקי בינלאומי בדמשק",
     "summary": "נפתח בית הספר הבינלאומי הטורקי על שם רצ'פ טאיפ ארדואן באזור ארטואז בדמשק.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-04T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-26T10:37:17+00:00",
     "last_update_at": "2026-10-26T10:37:17+00:00",
     "what_is_not_verified": "הפרטים המלאים על תוכניות הלימודים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "fh_7345416726caef8f",
       "url": "https://israel-alma.org/turkish-involvement-in-syrias-education-sector-a-new-school-in-damascus-named-after-erdogan/",
       "published_at": "2026-10-26T10:37:17+00:00"
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
     "id": "NORTH-10270542-04",
     "title": "פיצוץ במחסן תחמושת בסראקיב",
     "summary": "אירע פיצוץ אדיר במחסן תחמושת באזור סראקיב במחוז אידליב.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T17:15:26+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T17:15:26+00:00",
     "last_update_at": "2026-10-26T17:15:26+00:00",
     "what_is_not_verified": "נסיבות הפיצוץ המדויקות נבדקות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132606",
       "published_at": "2026-10-26T17:15:26+00:00"
      }
     ],
     "places": [
      {
       "name": "סראקיב, סוריה",
       "lat": 35.8636,
       "lon": 36.8031
      }
     ]
    },
    {
     "id": "NORTH-10270542-05",
     "title": "פגישה רב-צדדית בטהראן בנושאי ביטחון אזורי",
     "summary": "נציגים בכירים מאיראן, טורקיה, סעודיה ופקיסטן נפגשו בטהראן כדי לדון בשיתוף פעולה ביטחוני אזורי ומניעת הסלמה.",
     "axis": "איראן וסוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T16:01:53+00:00",
     "last_update_at": "2026-10-27T03:55:43+00:00",
     "what_is_not_verified": "ההשפעה המעשית של ההבנות טרם הוכחה בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_0d8ba6a4c1394dbf",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-meeting-mecca-pact-states-will-mark-beginning-real",
       "published_at": "2026-10-27T03:55:43+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_0d8ba6a4c1394dbf",
       "url": "https://www.france24.com/en/middle-east/20261026-iran-talks-mecca-pact-nations-war",
       "published_at": "2026-10-26T23:24:17+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_0d8ba6a4c1394dbf",
       "url": "https://english.almanar.com.lb/article/143167/",
       "published_at": "2026-10-26T17:50:33+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_0d8ba6a4c1394dbf",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-saudi-arabia-pakistan-turkey-cooperate-regional-security",
       "published_at": "2026-10-26T17:46:08+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_0d8ba6a4c1394dbf",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/964856/iran-security-chief-says-very-good-discussions-held-with-mecca-pact-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964856",
       "published_at": "2026-10-26T16:01:53+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על כוונות פעולה מצד חיזבאללה או איראן סביב מועד הבחירות",
    "פרטים מלאים על נסיבות הפיצוץ במחסן התחמושת בסראקיב"
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
     "value": 3.0799,
     "unit": "ILS",
     "change_pct": -1.33,
     "source_id": "src_ecb",
     "as_of": "2026-10-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "בניית ביטחון אזורי מתוך האזור ללא התערבות זרה"
     ],
     "inferred": [
      "יצירת חזית דיפלומטית וביטחונית עצמאית עם מעצמות אזוריות כמו טורקיה וסעודיה"
     ],
     "forecast": [
      "המשך הידברות במסגרת בריתות אזוריות לצד תמיכה בצירים המקורבים"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "חיזוק שיתוף הפעולה לשם שלום וביטחון אזורי"
     ],
     "inferred": [
      "העמקת ההשפעה התרבותית, החינוכית והביטחונית בשטחי סוריה"
     ],
     "forecast": [
      "הרחבת המעורבות בשיקום תשתיות ומוסדות חינוך בסוריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/turkish-involvement-in-syrias-education-sector-a-new-school-in-damascus-named-after-erdogan/",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/143167/",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-carries-out-strikes-in-southern-lebanon-in-fresh-ceasefire-violations/4101864",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261026-iran-talks-mecca-pact-nations-war",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/964856/iran-security-chief-says-very-good-discussions-held-with-mecca-pact-co/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-964856",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-saudi-arabia-pakistan-turkey-cooperate-regional-security",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132606",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958910",
     "accessed_at": "2026-10-27T05:42:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-26T17:05:35+00:00",
  "changes": {
   "NORTH-10270542-01": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות והפגזות של צבא ישראל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10270542-02": {
    "kind": "new"
   },
   "NORTH-10270542-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "פתיחת בית ספר טורקי בידיש בדמשק",
    "score": 1.0
   },
   "NORTH-10270542-04": {
    "kind": "new"
   },
   "NORTH-10270542-05": {
    "kind": "new"
   }
  }
 }
};
