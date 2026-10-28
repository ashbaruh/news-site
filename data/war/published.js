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
  "draft": "drafts/iran/2026-10-28T1648__iran-202610281648.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-28T16:48:25+00:00",
   "window": {
    "from": "2026-10-27T16:48:25+00:00",
    "to": "2026-10-28T16:48:25+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610281648"
   },
   "summary": "הזירה מתאפיינת בהיערכות צבאית של ארצות הברית וישראל לאפשרות של חידוש התקיפות נגד איראן בעקבות מבוי סתום בדיפלומטיה ובשיחות הגרעין. במקביל, נשמרת מתיחות דיפלומטית סביב פעילות אזורית של איראן ושלוחותיה מול מדינות המפרץ, לצד תנועות כוחות וחימוש אמריקאיות באזור.",
   "fronts": [
    {
     "name": "החזית האמריקאית-ישראלית מול איראן",
     "status": "היערכות להסלמה ותקיפות אפשריות"
    },
    {
     "name": "החזית הדיפלומטית מול המפרץ",
     "status": "מתיחות וחיכוך מדיני"
    }
   ],
   "events": [
    {
     "id": "IRAN-10281648-01",
     "title": "אזהרת ארה\"ב למדינות המפרץ על אפשרות למערכה נגד איראן",
     "summary": "ארצות הברית הזהירה מדינות ערביות במפרץ להיערך למתקפה צבאית קצרה ועצימה נגד איראן לאחר בחירות האמצע בארה\"ב, במטרה להפעיל לחץ להסכמים.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T08:25:06+00:00",
     "last_update_at": "2026-10-28T16:41:56+00:00",
     "what_is_not_verified": "האם התקיפה תתרחש בפועל במועד שצוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_the_wall_street_journal",
       "url": "https://www.middleeasteye.net/news/us-warns-gulf-intense-strikes-iran-after-midterms-report",
       "published_at": "2026-10-28T16:41:56+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_the_wall_street_journal",
       "url": "https://t.me/abualiexpress/132713",
       "published_at": "2026-10-28T08:25:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10281648-02",
     "title": "דחיית הצעה קטariות לסיום המלחמה מצד איראן",
     "summary": "איראן דחתה הצעה של קטר לסיום העימות, ומסרה כי אינה גמישה בנושא הגרעין.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T12:14:30+00:00",
     "last_update_at": "2026-10-28T12:14:30+00:00",
     "what_is_not_verified": "פרטים מלאים על טיוטת ההסכם הקטארי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_reuters",
       "url": "https://www.middleeasteye.net/news/iran-rejects-unacceptable-proposal-qatar-end-war-us",
       "published_at": "2026-10-28T12:14:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10281648-03",
     "title": "זימון שגריר איראן בכווית למחאה רשמית",
     "summary": "כווית זימנה את שגריר איראן למחאה רשמית על התערבות לכאורה בענייניה הפנימיים.",
     "axis": "איראן מול מדינות המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T12:46:09+00:00",
     "last_update_at": "2026-10-28T12:46:09+00:00",
     "what_is_not_verified": "תגובת איראן המלאה לזימון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_0ae72a5c4ce7e18f",
       "url": "https://www.iranintl.com/en/202610281703",
       "published_at": "2026-10-28T12:46:09+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10281648-04",
     "title": "חשיפת משגר טילים חדש בטהרן",
     "summary": "האיראנים חשפו משגר טילים חדש במרכז וליסר בטהרן לעיני הציבור.",
     "axis": "איראן מול ישראל וארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T09:09:57+00:00",
     "last_update_at": "2026-10-28T09:09:57+00:00",
     "what_is_not_verified": "היכולות המבצעיות המדויקות של המשגר שנחשף",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94866",
       "published_at": "2026-10-28T09:09:57+00:00"
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
    "עיתוי מדויק של תקיפה אמריקאית-ישראלית אפשרית",
    "תוצאות סופיות של המגעים הדיפלומטיים וההצעות של קטר"
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
     "value": 3.1259,
     "unit": "ILS",
     "change_pct": 2.5,
     "source_id": "src_ecb",
     "as_of": "2026-10-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארה\"ב וישראל",
     "declared": [
      "מניעת יכולת גרעינית מאיראן והסרת איומים קיומיים"
     ],
     "inferred": [
      "היערכות למבצעים צבאיים נוספים כדי לאלץ את טהרן למשא ומתן",
      "תגבור כוחות צבאיים והיערכות במפרץ ובים התיכון"
     ],
     "forecast": [
      "חידוש תקיפות צבאיות לאחר בחירות האמצע בארה\"ב",
      "הגברת הלחץ הצבאי והכלכלי על איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610281703",
     "accessed_at": "2026-10-28T16:48:25+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/news/iran-rejects-unacceptable-proposal-qatar-end-war-us",
     "accessed_at": "2026-10-28T16:48:25+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132713",
     "accessed_at": "2026-10-28T16:48:25+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94866",
     "accessed_at": "2026-10-28T16:48:25+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-28T00:40:27+00:00",
  "changes": {
   "IRAN-10281648-01": {
    "kind": "new"
   },
   "IRAN-10281648-02": {
    "kind": "new"
   },
   "IRAN-10281648-03": {
    "kind": "new"
   },
   "IRAN-10281648-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-28T1659__ukraine-202610281659.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-28T16:59:57+00:00",
   "window": {
    "from": "2026-10-27T16:59:57+00:00",
    "to": "2026-10-28T16:59:57+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610281659"
   },
   "summary": "המלחמה בין רוסיה ואוקראינה נמשכת תוך כדי מאמצים דיפלומטיים לקיום שיחות תלת-צדדיות אפשריות ותקיפות אוויריות הדדיות. בצד האוקראיני מתבצעות היערכויות להגנה מפני מזל\"טים וטילים, לצד קבלת חבילות סיוע רחבות מהולנד ומבריטניה. מנגד, רוסיה ממשיכה בהתקפות על תשתיות ומדווחת על מגעים ביטחוניים וטכנולוגיים שונים.",
   "fronts": [
    {
     "name": "חזית הדרום",
     "status": "כוללת הפסקת אש מקומית באזור אולשקי והיערכות לפינוי"
    },
    {
     "name": "עומק אוקראינה",
     "status": "תקיפות אוויריות ופגיעה בתשתיות ובמתקני אנרגיה"
    },
    {
     "name": "עומק רוסיה",
     "status": "תקיפות נגד מטרות תעשייתיות כמו מפעלים במחוז טולה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10281659-01",
     "title": "הפסקת אש מקומית ופינוי באולשקי",
     "summary": "הפסקת אש מקומית החלה באולשקי שבמחוז חרסון ופונתה דרך רוסיה ובלארוס",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T03:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T17:43:02+00:00",
     "last_update_at": "2026-10-28T16:16:00+00:00",
     "what_is_not_verified": "פרטי המסלול המדויק מחוץ לבלארוס לא מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b8197aac3940f87a",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/28/8060134/",
       "published_at": "2026-10-28T16:16:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_b8197aac3940f87a",
       "url": "https://meduza.io/en/news/2026/10/28/russian-military-plane-to-transport-evacuees-from-occupied-ukrainian-town-through-russia-and-belarus-documents-show",
       "published_at": "2026-10-28T15:55:46+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b8197aac3940f87a",
       "url": "https://t.me/alexmehacarmel/49055",
       "published_at": "2026-10-28T15:27:08+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_b8197aac3940f87a",
       "url": "https://www.bbc.co.uk/news/articles/c6lye1w9p2l8o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-27T22:11:08+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_01b970b7b7fa3481",
       "url": "https://www.theguardian.com/world/2026/oct/27/oleshky-truce-ukraine-russia-putin",
       "published_at": "2026-10-27T17:43:02+00:00"
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
     "id": "UKRAINE-10281659-02",
     "title": "תקיפת תחנת דלק בדניפרופטרובסק",
     "summary": "כטב\"ם תקף תחנת דלק של אוקרנפטה במחוז דניפרופטרובסק ופצע אדם",
     "axis": "עומק אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T15:41:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T15:41:00+00:00",
     "last_update_at": "2026-10-28T15:41:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_85bf12045854c45e",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/28/8060127/",
       "published_at": "2026-10-28T15:41:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10281659-03",
     "title": "שריפה במפעל אזוט בנובמוסקובסק",
     "summary": "שריפה פרצה במפעל אזוט בעיר נובמוסקובסק במחוז טולה בעקבות תקיפה",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T12:58:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T12:58:55+00:00",
     "last_update_at": "2026-10-28T12:58:55+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49049",
       "published_at": "2026-10-28T12:58:55+00:00"
      }
     ],
     "places": [
      {
       "name": "נובמוסקובסק, רוסיה",
       "lat": 54.011,
       "lon": 38.2909
      }
     ]
    },
    {
     "id": "UKRAINE-10281659-04",
     "title": "שיחות מנהיגי פינלנד ונורווגיה עם פוטין",
     "summary": "נשיא פינלנד וראש ממשלת נורווגיה קיימו שיחת טלפון עם נשיא רוסיה",
     "axis": "דיפלומטיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T18:28:23+00:00",
     "last_update_at": "2026-10-28T14:30:06+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_207a6eabe6548ece",
       "url": "https://meduza.io/en/feature/2026/10/28/putin-turns-a-half-hour-call-with-european-leaders-into-a-90-minute-history-lecture-trump-says-a-three-way-summit-could-happen-very-soon",
       "published_at": "2026-10-28T14:30:06+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_207a6eabe6548ece",
       "url": "https://meduza.io/en/news/2026/10/28/putin-spent-a-call-with-finnish-and-norwegian-leaders-lecturing-them-on-slavic-history-ft-reports",
       "published_at": "2026-10-28T09:50:42+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_207a6eabe6548ece",
       "url": "https://www.bbc.co.uk/news/articles/c6vgj813mlelo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-27T18:28:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10281659-05",
     "title": "סיוע צבאי מהולנד",
     "summary": "הולנד הודיעה על חבילת סיוע צבאי בשווי 500 מיליון אירו והתחלת פרויקט הגנה אווירית",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T15:33:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T15:33:00+00:00",
     "last_update_at": "2026-10-28T16:30:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b59261e6523bb6aa",
       "url": "https://www.ukrinform.net/rubric-polytics/4179112-ukraine-and-netherlands-begin-work-on-air-defense-project.html",
       "published_at": "2026-10-28T16:30:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_899670afd98939aa",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/28/8060125/",
       "published_at": "2026-10-28T15:33:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "{'string': 'פרטי המסלול המדויק והחזרת התושבים מאולשקי דרך בלארוס לאוקראינה'}",
    "{'string': 'תאריך מדויק לקיום שיחות אבו דאבי'}"
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
     "value": 1.1133,
     "unit": "USD",
     "change_pct": -0.15,
     "source_id": "src_ecb",
     "as_of": "2026-10-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "לקבל מערכות הגנה אווירית ומימון להגנה מפני תקיפות חורף",
      "לקיים שיחות משא ומתן באבו דאבי"
     ],
     "inferred": [
      "שמירת תמיכה מערבית וצמצום הפגיעה בתשתיות קריטיות"
     ],
     "forecast": [
      "קבלת ציוד הגנה נוסף מבעלות ברית אירופיות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פיתוח יכולות עצמאיות בתחום הלוויינים והגנה אווירית",
      "המשך קידום עמדותיה במפגשים דיפלומטיים בינלאומיים"
     ],
     "inferred": [
      "ניסיון לערער את מערך הלוגיסטיקה והאנרגיה האוקראיני לקראת החורף"
     ],
     "forecast": [
      "המשך לחץ צבאי באמצעות כטב\"מים וטילים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c6vgj813mlelo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-28T16:59:57+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/27/oleshky-truce-ukraine-russia-putin",
     "accessed_at": "2026-10-28T16:59:57+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/28/putin-spent-a-call-with-finnish-and-norwegian-leaders-lecturing-them-on-slavic-history-ft-reports",
     "accessed_at": "2026-10-28T16:59:57+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/28/8060125/",
     "accessed_at": "2026-10-28T16:59:57+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49049",
     "accessed_at": "2026-10-28T16:59:57+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4179112-ukraine-and-netherlands-begin-work-on-air-defense-project.html",
     "accessed_at": "2026-10-28T16:59:57+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-28T00:51:58+00:00",
  "changes": {
   "UKRAINE-10281659-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "הפוגה מקומית באולשקי ותחילת פינוי",
    "score": 1.0
   },
   "UKRAINE-10281659-02": {
    "kind": "new"
   },
   "UKRAINE-10281659-03": {
    "kind": "new"
   },
   "UKRAINE-10281659-04": {
    "kind": "new"
   },
   "UKRAINE-10281659-05": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-28T1706__north-202610281706.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-28T17:06:33+00:00",
   "window": {
    "from": "2026-10-27T17:06:33+00:00",
    "to": "2026-10-28T17:06:33+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610281706"
   },
   "summary": "בזירה הצפונית נמשכת המתיחות כאשר חיזבאללה דוחה דרישות לדיון על פירוק מנשקו ודורש נסיגה ישראלית מלאה, בעוד טורקיה מעמיקה את מעורבותה הצבאית והימית בסוריה. במקביל, סוריה מתמודדת עם תקיפות אוויריות בגבולה הדרומי ומקיימת שיתופי פעולה אזוריים והדוקים עם עיראק וגורמים נוספים.",
   "fronts": [
    {
     "name": "חזית לבנון-ישראל",
     "status": "פעילה ומתוחה"
    },
    {
     "name": "חזית סוריה",
     "status": "פעילה מבחינת מעורבות זרה, תקיפות גבול ושיקום"
    }
   ],
   "events": [
    {
     "id": "NORTH-10281706-01",
     "title": "תקיפות אוויריות ירדניות בדרום סוריה",
     "summary": "סוריה זימנה את שגריר ירדן בעקבות תקיפות אוויריות שגרמו להרוגים אזרחיים, וסגרה את מעברי הגבול.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T01:08:05+00:00",
     "last_update_at": "2026-10-28T16:47:18+00:00",
     "what_is_not_verified": "מספר הנפגעים המדויק אינו מאומת ממקור ראשון בטקסטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syria-summons-jordanian-ambassador-for-deadly-airstrikes-in-daraa/4104152",
       "published_at": "2026-10-28T16:47:18+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/28/victims-of-jordans-air-strikes-in-syria?traffic_source=rss",
       "published_at": "2026-10-28T12:35:19+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49034",
       "published_at": "2026-10-28T01:08:05+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא, סוריה",
       "lat": 32.6228,
       "lon": 36.1068
      }
     ]
    },
    {
     "id": "NORTH-10281706-02",
     "title": "ביקור ראש ממשלת עיראק בדמשק",
     "summary": "ראש ממשלת עיראק הגיע לביקור רשמי בדמשק ונפגש עם נשיא סוריה לקידום קשרים כלכליים ואנרגיה.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T09:02:36+00:00",
     "last_update_at": "2026-10-28T15:14:47+00:00",
     "what_is_not_verified": "ההסכמות המלאות אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/iraqi-pm-visits-syria-neighbours-seek-boost-economic-ties",
       "published_at": "2026-10-28T15:14:47+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/28/iraqi-pm-ali-al-zaidi-meets-ahmed-al-sharaa-in-historic-syria-visit?traffic_source=rss",
       "published_at": "2026-10-28T13:47:39+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/iraq-syria-discuss-oil-exports-via-baniyas-pipeline-with-capacity-of-2m-barrels-per-day/4103512",
       "published_at": "2026-10-28T09:02:36+00:00"
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
     "id": "NORTH-10281706-03",
     "title": "הצהרת מנהיג חיזבאללה על נשק הארגון והסכמים",
     "summary": "מזכירות חיזבאללה הדגישה כי ההתנגדות תימשך וכי פסולה כל דיון בפירוק מנשקה כל עוד נמשכת התקיפה הישראלית.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T13:42:27+00:00",
     "last_update_at": "2026-10-28T16:47:47+00:00",
     "what_is_not_verified": "טיעונים על תוצאות הבחירות בישראל כהפסד אינם מאומתים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3ef5a70b6740f402",
       "url": "https://english.almanar.com.lb/article/144322/",
       "published_at": "2026-10-28T16:47:47+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3b9577929c79db66",
       "url": "https://english.almanar.com.lb/article/144312/",
       "published_at": "2026-10-28T16:23:20+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_650c71a90bdbf94f",
       "url": "https://english.almanar.com.lb/article/144302/",
       "published_at": "2026-10-28T16:22:35+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_45035b570eca0003",
       "url": "https://english.almanar.com.lb/article/144282/",
       "published_at": "2026-10-28T16:13:33+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_950f2f1bc54184f3",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965266/hezbollah-chief-calls-israeli-election-results-a-form-of-defeat-reject/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965266",
       "published_at": "2026-10-28T13:42:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10281706-04",
     "title": "תוכנית בניין כוח ימית טורקית לסוריה",
     "summary": "משרד ההגנה הטורקי הכריז על תוכנית לפיתוח ושדרוג כוחות הים של סוריה, הכוללת תחזוקה, אימונים ובניית תשתיות.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T12:11:50+00:00",
     "last_update_at": "2026-10-28T12:11:50+00:00",
     "what_is_not_verified": "היקף הביצוע המלא של השדרוג אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_unknown_origin",
       "url": "https://israel-alma.org/turkeys-force-buildup-for-the-syrian-navy/",
       "published_at": "2026-10-28T12:11:50+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10281706-05",
     "title": "תקרית אש בצפון מערב סוריה",
     "summary": "כוחות הביטחון בסוריה הרגו חבר חמוש זר בחילופי אש במחנה באזור אידליב.",
     "axis": "הגזרה הצפונית של ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T15:29:31+00:00",
     "last_update_at": "2026-10-28T15:29:31+00:00",
     "what_is_not_verified": "גרסאות הצדדים לגבי נסיבות פתיחת האש אינן מאומתות באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syria-says-french-jihadist-killed-shootout-govt-forces",
       "published_at": "2026-10-28T15:29:31+00:00"
      }
     ],
     "places": [
      {
       "name": "אידליב, סוריה",
       "lat": 35.9302,
       "lon": 36.6353
      }
     ]
    }
   ],
   "not_verified": [
    "מספר הנפגעים המדויק בתקיפות ירדן בדרום סוריה",
    "היקף ההישגים המעשיים של תוכנית בניין הכוח הימית הטורקית בסוריה"
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
     "value": 3.1259,
     "unit": "ILS",
     "change_pct": 2.5,
     "source_id": "src_ecb",
     "as_of": "2026-10-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך ההתנגדות נגד ישראל",
      "סירוב מוחלט לדון בפירוק נשק כל עוד נמשכת התוקפנות"
     ],
     "inferred": [
      "שמירת יכולות צבאיות עצמאיות בלבנון",
      "הישענות על איראן כמקור כוח מרכזי"
     ],
     "forecast": [
      "המשך סירוב לדרישות פירוק נשק",
      "היערכות להסלמה מול כל פעולה צבאית ישראלית"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "פיתוח ושדרוג כוחות הים של סוריה",
      "שיתופי פעולה צבאיים וכלכליים אזוריים"
     ],
     "inferred": [
      "הרחבת ההשפעה הגיאופוליטית והימית במרחב סוריה",
      "בניית מעורבות מבנית בצבא סוריה החדש"
     ],
     "forecast": [
      "העמקת הנוכחות והסיוע הצבאי והימי בסוריה"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "חיזוק קשרי המסחר והאנרגיה עם עיראק",
      "השבת יציבות ביטחונית וכלכלית לאחר מלחמה ארוכה"
     ],
     "inferred": [
      "ניסיון לבסס מחדש את ריבונותה בגבולותיה",
      "חיפוש חלופות כלכליות אזוריות"
     ],
     "forecast": [
      "המשך חיזוק הקשרים האזוריים והתמודדות עם איומים בגבולות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/28/iraqi-pm-ali-al-zaidi-meets-ahmed-al-sharaa-in-historic-syria-visit?traffic_source=rss",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    },
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/turkeys-force-buildup-for-the-syrian-navy/",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/144282/",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/iraq-syria-discuss-oil-exports-via-baniyas-pipeline-with-capacity-of-2m-barrels-per-day/4103512",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965266/hezbollah-chief-calls-israeli-election-results-a-form-of-defeat-reject/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965266",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/syria-says-french-jihadist-killed-shootout-govt-forces",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49034",
     "accessed_at": "2026-10-28T17:06:33+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-27T05:42:57+00:00",
  "changes": {
   "NORTH-10281706-01": {
    "kind": "possible",
    "prev": "תקיפות והפרות הפסקת אש בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10281706-02": {
    "kind": "possible",
    "prev": "פתיחת בית ספר טורקי בינלאומי בדמשק",
    "score": 0.633
   },
   "NORTH-10281706-03": {
    "kind": "new"
   },
   "NORTH-10281706-04": {
    "kind": "new"
   },
   "NORTH-10281706-05": {
    "kind": "new"
   }
  }
 }
};
