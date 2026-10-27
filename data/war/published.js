/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-27T1559__yemen-202610271559.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-27T15:59:51+00:00",
   "window": {
    "from": "2026-10-26T15:59:51+00:00",
    "to": "2026-10-27T15:59:51+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610271559"
   },
   "summary": "העימות בין החות'ים בתימן לבין סעודיה והקואליציה האזורית חווה הסלמה ישירה שמתבטאת בירי טילים לעבר תשתיות נפט מרכזיות וערים בסעודיה. במקביל, כוחות הנתמכים על ידי סעודיה מנהלים מבצע קרקעי ואווירי נרחב בתוך שטחי תימן וסמוך למצר באב אל-מנדב. ברקע המתיחות מתרחבת מעורבותן של מצרים ובריטניה במאמצי ההגנה על הממלכה הסעודית.",
   "fronts": [
    {
     "name": "חזית תימן-סעודיה",
     "status": "הסלמה בתקיפות טילים בליסטיים לעבר מתקני נפט וערים, לצד יירוטים והגברת היערכות ההגנה"
    },
    {
     "name": "חזית פנים-תימן ומצר באב אל-מנדב",
     "status": "לחימה עצימה בין כוחות פרו-סעודיים לחות'ים, כולל מתקפות אוויריות במחוז תעז ועימותים במצר"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10271559-01",
     "title": "מתקפת טילים על בית הזיקוק ראס תנורה בסעודיה",
     "summary": "החות'ים שיגרו טיל בליסטי לעבר בית הזיקוק בראס תנורה במזרח סעודיה, ודיווחו על פגיעה שגרמה לשריפה, בעוד מקורות ביטחוניים דיווחו על שריפה שנבלמה.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T03:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T11:46:31+00:00",
     "last_update_at": "2026-10-27T14:15:22+00:00",
     "what_is_not_verified": "היקף הנזק וההשפעה על פעילות טעינת הנפט אינם ברורים, ואין אישור רשמי של הרשויות בסעודיה על פגיעה ישירה במתקן.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-oil-infrastructure-crosshairs-houthis-claim-ras-tanura-strike",
       "published_at": "2026-10-27T14:15:22+00:00"
      },
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/yemens-houthis-say-they-hit-saudi-ras-tanura-oil-refinery-with-missile/",
       "published_at": "2026-10-27T14:05:44+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-claim-attack-saudi-oil-refinery-blasts-shake-riyadh",
       "published_at": "2026-10-27T13:51:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/houthis-hit-saudi-oil-refinery-iran-warns-more-devastating-response-further-us-israeli",
       "published_at": "2026-10-27T13:48:20+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-say-they-hit-saudi-ras-tanura-oil-refinery-missile",
       "published_at": "2026-10-27T11:46:31+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס תנורה, ערב הסעודית",
       "lat": 26.7074,
       "lon": 50.0674
      }
     ]
    },
    {
     "id": "YEMEN-10271559-02",
     "title": "יירוט טילים מעל מחוז המזרח ופיצוצים בריאד",
     "summary": "הקואליציה בראשות סעודיה הודיעה על יירוט שלושה טילים בליסטיים שנורו לעבר מחוז המזרח, ובמקביל נשמעו פיצוצים עזים בעיר הבירה ריאד.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T04:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T07:15:43+00:00",
     "last_update_at": "2026-10-27T15:26:33+00:00",
     "what_is_not_verified": "לא הובהר מקור הפיצוצים בריאד והאם נגרמו מפגיעות או מיירוטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21719217",
       "published_at": "2026-10-27T15:26:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-claim-attack-saudi-oil-refinery-blasts-shake-riyadh",
       "published_at": "2026-10-27T13:51:29+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/eyes-israel-elections-iran-says-us-not-serious-talks",
       "published_at": "2026-10-27T07:15:43+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10271559-03",
     "title": "דיווח על פגיעה בנמל התעופה בג'דה",
     "summary": "ערוץ מקומי דיווח כי כוחות החות'ים פגעו בנמל התעופה של העיר ג'דה בסעודיה.",
     "axis": "תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T16:25:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T16:25:29+00:00",
     "last_update_at": "2026-10-26T16:25:29+00:00",
     "what_is_not_verified": "אין אימות נוסף או הודעה רשמית לגבי פגיעה בנמל התעופה בג'דה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48975",
       "published_at": "2026-10-26T16:25:29+00:00"
      }
     ],
     "places": [
      {
       "name": "ג'דה, ערב הסעודית",
       "lat": 21.5504,
       "lon": 39.1742
      }
     ]
    },
    {
     "id": "YEMEN-10271559-04",
     "title": "עימותים ליד מצר באב אל-מנדב",
     "summary": "החות'ים טענו כי בלמו התקדמות של כוחות הנתמכים בידי סעודיה ותקפו כלי טיס צבאיים סעודיים באזור מצר באב אל-מנדב.",
     "axis": "הים האדום ומצר באב אל-מנדב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T11:46:31+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T11:46:31+00:00",
     "last_update_at": "2026-10-27T11:46:31+00:00",
     "what_is_not_verified": "אין אישור בלתי תלוי או תגובה של הצד הסעודי על בלימת הכוחות או תקיפת כלי הטיס.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-say-they-hit-saudi-ras-tanura-oil-refinery-missile",
       "published_at": "2026-10-27T11:46:31+00:00"
      }
     ],
     "places": [
      {
       "name": "מצר באב אל-מנדב, תימן",
       "lat": 12.6671,
       "lon": 43.4565
      }
     ]
    },
    {
     "id": "YEMEN-10271559-05",
     "title": "מבצע שחר תימן של הכוחות הנתמכים בידי סעודיה",
     "summary": "הכוחות התימניים הפועלים בתמיכת סעודיה דיווחו על ביצוע למעלה מאלף פעולות נגד עמדות החות'ים ופגיעה במאות לוחמים וכלי רכב.",
     "axis": "הלחימה בתוך תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T13:48:20+00:00",
     "last_update_at": "2026-10-27T13:48:20+00:00",
     "what_is_not_verified": "לא פורט מספר ההרוגים מול הפצועים, ואין אימות עצמאי להיקף הפגיעות המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/news/houthis-hit-saudi-oil-refinery-iran-warns-more-devastating-response-further-us-israeli",
       "published_at": "2026-10-27T13:48:20+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10271559-06",
     "title": "הפצצות אוויריות במחוז תעז ועקירת תושבים",
     "summary": "כוחות הממשלה התימנית ביצעו תקיפות אוויריות במחוז תעז, בעוד נמסר על עקירתם של מעל מאתיים ושבעים אלף איש בעקבות ההפצצות.",
     "axis": "הלחימה בתוך תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T07:15:43+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T07:15:43+00:00",
     "last_update_at": "2026-10-27T15:26:33+00:00",
     "what_is_not_verified": "מספר העקורים הכולל וזהות הגורמים המדויקים שהפציצו בכל אזור לא אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21719217",
       "published_at": "2026-10-27T15:26:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/eyes-israel-elections-iran-says-us-not-serious-talks",
       "published_at": "2026-10-27T07:15:43+00:00"
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
     "id": "YEMEN-10271559-07",
     "title": "איום חות'י בעקבות אישור שליחת כוחות מצריים",
     "summary": "בכיר בתנועה החות'ית הגדיר את אישור הפרלמנט המצרי לשליחת כוחות להגנת סעודיה כהכרזת מלחמה על תימן.",
     "axis": "הזירה האזורית מול תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T15:33:13+00:00",
     "last_update_at": "2026-10-27T15:26:33+00:00",
     "what_is_not_verified": "האם כוחות מצריים נפרסו בפועל בשטח.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21719217",
       "published_at": "2026-10-27T15:26:33+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/mecca-pact-countries-iran-bid-stop-war-restarting",
       "published_at": "2026-10-26T15:33:13+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10271559-08",
     "title": "פריסת מטוסי קרב בריטיים בסעודיה",
     "summary": "שר ההגנה של בריטניה הודיע על שיגור מטוסי קרב לסעודיה במטרה לסייע בהגנה על ערים ומתקני נפט מפני תקיפות החות'ים.",
     "axis": "תימן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T11:28:59+00:00",
     "last_update_at": "2026-10-27T11:28:59+00:00",
     "what_is_not_verified": "מועד ההגעה המדויק ומספר המטוסים שנפרסו בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/opinion/blair-and-starmer-him-burnham-has-found-his-middle-east-war",
       "published_at": "2026-10-27T11:28:59+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת החות'ים על פגיעה מדויקת ונזקים נרחבים בבית הזיקוק בראס תנורה",
    "הדיווח הלא מאומת על פגיעה ישירה בנמל התעופה של ג'דה",
    "מספר הנפגעים והאבדות במבצע שחר תימן שפרסמו הכוחות הנתמכים בידי סעודיה",
    "היקף העקורים המדויק מקרב האוכלוסייה האזרחית בעקבות ההפצצות"
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
      "פגיעה בתשתיות אסטרטגיות ובנמלי נפט בסעודיה",
      "בלימת התקדמות הכוחות היריבים באזור מצר באב אל-מנדב",
      "הרתעת מדינות נוספות כמו מצרים מלהצטרף למערך ההגנה על סעודיה"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי כבד על סעודיה באמצעות פגיעה בעורק ייצוא הנפט",
      "חיזוק מעמדם כחלק בלתי נפרד מציר ההתנגדות בעימות האזורי"
     ],
     "forecast": [
      "המשך ירי טילים וכטב\"מים אל עבר יעדים בעומק שטח סעודיה והחרפת האיומים בנתיבי השיט"
     ]
    },
    {
     "actor": "סעודיה והקואליציה התומכת",
     "declared": [
      "הגנה על שטח הממלכה, עריה ומתקני הנפט החיוניים מפני מתקפות טילים וכטב\"מים",
      "פגיעה ביכולות הצבאיות של החות'ים באמצעות מבצע שחר תימן"
     ],
     "inferred": [
      "בניית מעטפת הגנה בינלאומית ואזורית בהשתתפות מצרים ובריטניה לצמצום הפגיעות הכלכלית",
      "הכרעת החות'ים בתוך שטח תימן כדי להפסיק את האיום על הגבולות"
     ],
     "forecast": [
      "הגברת פעילות היירוט והתקיפות בתוך תימן לצד הישענות גוברת על כוחות בעלי ברית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-say-they-hit-saudi-ras-tanura-oil-refinery-missile",
     "accessed_at": "2026-10-27T15:59:51+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/yemens-houthis-say-they-hit-saudi-ras-tanura-oil-refinery-with-missile/",
     "accessed_at": "2026-10-27T15:59:51+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21719217",
     "accessed_at": "2026-10-27T15:59:51+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/opinion/blair-and-starmer-him-burnham-has-found-his-middle-east-war",
     "accessed_at": "2026-10-27T15:59:51+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/mecca-pact-countries-iran-bid-stop-war-restarting",
     "accessed_at": "2026-10-27T15:59:51+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48975",
     "accessed_at": "2026-10-27T15:59:51+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-26T17:01:16+00:00",
  "changes": {
   "YEMEN-10271559-01": {
    "kind": "new"
   },
   "YEMEN-10271559-02": {
    "kind": "new"
   },
   "YEMEN-10271559-03": {
    "kind": "possible",
    "prev": "תקיפות החות'ים על יעדים בסעודיה",
    "score": 0.4
   },
   "YEMEN-10271559-04": {
    "kind": "new"
   },
   "YEMEN-10271559-05": {
    "kind": "new"
   },
   "YEMEN-10271559-06": {
    "kind": "possible",
    "prev": "משבר הומניטרי ופגיעה במגזר הבריאות בתעז",
    "score": 0.633
   },
   "YEMEN-10271559-07": {
    "kind": "new"
   },
   "YEMEN-10271559-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-27T0530__iran-202610270530.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-27T05:30:29+00:00",
   "window": {
    "from": "2026-10-26T05:30:29+00:00",
    "to": "2026-10-27T05:30:29+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610270530"
   },
   "summary": "הזירה מאופיינת במתיחות צבאית גבוהה סביב תכניות גרעין, איומי תקיפה הדדיים בין איראן, ישראל וארה\"ב, ופעילות דיפלומטית אזורית הכוללת יוזמות ביטחוניות של מדינות המפרץ והאזור ללא תלות מלאה בוושינגטון. במקביל, נמשכות הכנות צבאיות והזרמות תקציבים לשלוחות איראן לצד לחץ כלכלי וסנקציות אגרסיביות מצד ארה\"ב.",
   "fronts": [
    {
     "name": "ישראל - איראן וחיזבאללה",
     "status": "כוננות גבוהה ואיומי תקיפה הדדיים"
    },
    {
     "name": "ארה\"ב - איראן",
     "status": "החרפת סנקציות כלכליות ואיומים צבאיים"
    },
    {
     "name": "מדינות המפרץ והסכם מכה - איראן",
     "status": "דיאלוג מדיני לגיבוש מסגרת ביטחונית אזורית"
    }
   ],
   "events": [
    {
     "id": "IRAN-10270530-01",
     "title": "פגישת בכירים בטהראן במסגרת הסכם מכה",
     "summary": "בכירים ממדינות שונות ובהן סעודיה, טורקיה ופקיסטן נפגשו בטהראן עם הנהגת איראן לדון במנגנון ביטחון אזורי.",
     "axis": "ציר איראן והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T19:31:07+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T19:31:07+00:00",
     "last_update_at": "2026-10-27T05:06:32+00:00",
     "what_is_not_verified": "פרטי ההסכמות המדויקים בין הצדדים אינם מאומתים במלואם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_4a126ba57fadf36b",
       "url": "https://www.iranintl.com/en/202610266454",
       "published_at": "2026-10-27T05:06:32+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_4a126ba57fadf36b",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-meeting-mecca-pact-states-will-mark-beginning-real",
       "published_at": "2026-10-27T03:55:43+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_9af7b79153c710ec",
       "url": "https://www.france24.com/en/middle-east/20261026-iran-talks-mecca-pact-nations-war",
       "published_at": "2026-10-26T23:24:17+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_4a126ba57fadf36b",
       "url": "https://t.me/alexmehacarmel/48983",
       "published_at": "2026-10-26T19:31:07+00:00"
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
     "id": "IRAN-10270530-02",
     "title": "יירוט טילי חות'ים על ידי כוחות סעודיים",
     "summary": "כוחות סעודיים יירטו טילי חות'ים ששוגרו לעבר שטחי סעודיה.",
     "axis": "ציר איראן והשלוחות מול סעודיה והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T04:54:26+00:00",
     "last_update_at": "2026-10-27T04:54:26+00:00",
     "what_is_not_verified": "היקף הנזק המדויק או מספר הטילים שלא יורטו אינו מפורט.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_5f145060bf229ad8",
       "url": "https://www.aljazeera.com/news/2026/10/27/iran-saudi-turkiye-and-pakistan-agree-to-more-talks-amid-houthi-attacks?traffic_source=rss",
       "published_at": "2026-10-27T04:54:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10270530-03",
     "title": "דיווח על ספינה בוערת מול חופי עיראק",
     "summary": "גורמי ספנות דיווחו על ספינה שעולה באש מול חופי עיראק.",
     "axis": "ציר המפרץ והספנות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T00:00:00+00:00",
     "last_update_at": "2026-10-27T00:00:00+00:00",
     "what_is_not_verified": "סיבת השריפה המדויקת והזהות המלאה של הגורם לפגיעה אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_ukmto_report_via_al_jazeera",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/27/iran-war-live-iran-says-us-not-serious-on-talks-ship-on-fire-off-iraq?traffic_source=rss",
       "published_at": "2026-10-27T00:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10270530-04",
     "title": "חילוץ מלחים איראנים מול חופי סרי לנקה",
     "summary": "ארבעים מלחים איראנים שנתקעו חולצו על ידי הרשויות בסרי לנקה והוחזרו לאיראן.",
     "axis": "ציר איראן הבינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T03:47:28+00:00",
     "last_update_at": "2026-10-26T05:30:29+00:00",
     "what_is_not_verified": "סיבת התקיעות המקורית של המלחים בים.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_sri_lankan_authorities",
       "url": "https://www.bbc.co.uk/news/articles/c9p8g7e4k2xjo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-26T03:47:28+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "קיומו של מידע קונקרטי על פעולה איראנית מיידית או מעורבות חיזבאללה בבחירות בישראל",
    "דיווחים על שיגורי ניסוי טילים ספציפיים באזורים שונים באיראן",
    "נתונים מוחלטים על היקף התכווצות הכלכלה האיראנית הצפויה"
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
      "הקמת מנגנון ביטחון אזורי ללא ארה\"ב וישראל",
      "הגנה על נתיבי השיפון והתרת פעילות בטוחה במים"
     ],
     "inferred": [
      "שימור יכולות הלחימה של השלוחות באזור ובנייתן מחדש",
      "הרצון להפגין הרתעה באמצעות ניסויי טילים"
     ],
     "forecast": [
      "חיזוק שיתופי הפעולה האזוריים במסגרת הסכמי מכה",
      "המשך פיתוח והצגת יכולות טילים בליסטיים"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הסרת האיום הגרעיני האיראני",
      "היערכות לכלל התרחישים מול איראן ושלוחותיה בזמן בחירות"
     ],
     "inferred": [
      "מחלוקת פנימית בצמרת הביטחונית והמדינית סביב עיתוי תקיפה אפשרית",
      "ניסיון לשמור על מוכנות מול אפשרות התלקחות אזורית פתאומית"
     ],
     "forecast": [
      "המשך הדריכות הביטחונית הגבוהה עד להכרעה פוליטית ומדינית",
      "מעקב הדוק אחר פעילות איראן וחיזבאללה"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הפעלת לחץ כלכלי חסר תקדים ובידוד איראן",
      "מניעת השפעה שלילית של טהראן על היציבות האזורית"
     ],
     "inferred": [
      "שאיפה לצמצם את מרחב התמרון הכלכלי והצבאי של משטר האייתוללות",
      "תמיכה בשותפות אזוריות לבלימת ההשפעה האיראנית"
     ],
     "forecast": [
      "החמרת שלבי 'הבידוד הכלכלי' נגד איראן בחודשים הקרובים",
      "המשך האיומים הצבאיים מול טהראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/27/iran-war-live-iran-says-us-not-serious-on-talks-ship-on-fire-off-iraq?traffic_source=rss",
     "accessed_at": "2026-10-27T05:30:29+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c9p8g7e4k2xjo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-27T05:30:29+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261026-iran-talks-mecca-pact-nations-war",
     "accessed_at": "2026-10-27T05:30:29+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610266454",
     "accessed_at": "2026-10-27T05:30:29+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-says-meeting-mecca-pact-states-will-mark-beginning-real",
     "accessed_at": "2026-10-27T05:30:29+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48983",
     "accessed_at": "2026-10-27T05:30:29+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-26T16:57:05+00:00",
  "changes": {
   "IRAN-10270530-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "פגישת ברית מכה בטהרן",
    "score": 0.817
   },
   "IRAN-10270530-02": {
    "kind": "new"
   },
   "IRAN-10270530-03": {
    "kind": "new"
   },
   "IRAN-10270530-04": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-27T0536__ukraine-202610270536.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-27T05:36:14+00:00",
   "window": {
    "from": "2026-10-26T05:36:14+00:00",
    "to": "2026-10-27T05:36:14+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610270536"
   },
   "summary": "הלחימה בין רוסיה ואוקראינה נמשכת ביתאת עצימות גבוהה, הכוללת מתקפות טילים בליסטיים רוסיות על מרכזים אזרחיים וקייב לצד תקיפות תשתיות אנרגיה. במקביל, מתנהלים מגעים דיפלומטיים ותיווך בינלאומי המביאים להפסקות אש מקומיות מוגבלות לצורך סיוע הומניטרי באזורים נצורים כמו אולשקי. המערכה בים השחור ממשיכה להוות אזור סיכון מסחרי גבוה בשל פגיעות הדדיות בשיבח ימי.",
   "fronts": [
    {
     "name": "החזית האווירית ומרכזי השלטון (קייב והסביבה)",
     "status": "פעיל מאוד - תקיפות טילים בליסטיים"
    },
    {
     "name": "חזית הדרום (חרסון ואולשקי)",
     "status": "פעיל עם הפוגה הומניטרית מקומית"
    },
    {
     "name": "החזית המזרחית (לוגנסק וחרקיב)",
     "status": "פעיל - חילופי אש ותקיפות מחסנים"
    },
    {
     "name": "הזירה הימית (הים השחור)",
     "status": "פעיל ומסוכן לשיבח מסחרי"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10270536-01",
     "title": "מתקפת טילים בליסטיים על קייב",
     "summary": "כוחות רוסיה תקפו את קייב בטילים בליסטיים, מה שהביא להרוגים, פצועים ולפגיעה במתקנים רפואיים, מוסדות חינוך ותשתיות.",
     "axis": "תקיפות אוויריות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T20:16:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T20:16:41+00:00",
     "last_update_at": "2026-10-27T05:24:00+00:00",
     "what_is_not_verified": "היקף הנזק המלא והאחריות למיקום המדויק של כל פגיעה לפי גרסאות שונות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_0596b1e12e0b8f43",
       "url": "https://www.ukrinform.net/rubric-ato/4178447-russian-ballistic-missile-attack-on-kyiv-kills-one-injures-10-and-damages-medical-facilities-and-school.html",
       "published_at": "2026-10-27T05:24:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_0596b1e12e0b8f43",
       "url": "https://tass.com/emergencies/2208305",
       "published_at": "2026-10-27T04:26:36+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_50392301e02ab60e",
       "url": "https://tass.com/emergencies/2208291",
       "published_at": "2026-10-27T02:04:29+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_0596b1e12e0b8f43",
       "url": "https://www.theguardian.com/world/2026/oct/27/ukraine-war-briefing-russian-strikes-kyiv-truce-begins-oleshky",
       "published_at": "2026-10-27T01:30:27+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_0596b1e12e0b8f43",
       "url": "https://t.me/alexmehacarmel/48996",
       "published_at": "2026-10-27T01:30:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_0596b1e12e0b8f43",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/26/8059832/",
       "published_at": "2026-10-26T20:58:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5fa659f347683edb",
       "url": "https://kyivindependent.com/paramedics-caught-under-fire-as-russian-ballistic-missiles-slam-kyiv/",
       "published_at": "2026-10-26T20:16:41+00:00"
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
     "id": "UKRAINE-10270536-02",
     "title": "תקיפה בחרקיב שהביאה להרוגים",
     "summary": "שני בני אדם נהרגו וכמה נוספים נפצעו במתקפה רוסית על מחוז הבבארסקי בחרקיב.",
     "axis": "תקיפות אוויריות והפצצות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T22:55:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T22:55:00+00:00",
     "last_update_at": "2026-10-26T22:55:00+00:00",
     "what_is_not_verified": "סוג הנשק המדויק ששימש בתקיפה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_ihor_terekhov",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/27/8059817/",
       "published_at": "2026-10-26T22:55:00+00:00"
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
     "id": "UKRAINE-10270536-03",
     "title": "הפסקת אש מקומית באולשקי ופינוי אזרחים",
     "summary": "הוכרזה הפסקת אש מקומית במרחב אולשקי במחוז חרסון כדי לאפשר הכנסת סיוע הומניטרי ופינוי אזרחים.",
     "axis": "הומניטרי והפסקות אש",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T19:13:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-26T19:13:00+00:00",
     "last_update_at": "2026-10-27T04:58:00+00:00",
     "what_is_not_verified": "זהות המפקחים על הפסקת האש ופרטי מנגנון הסיוע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_melania_trump_s_chief_adviser",
       "url": "https://www.ukrinform.net/rubric-society/4178445-melania-trumps-chief-adviser-russia-pledges-to-respect-oleshky-residents-evacuation-choices.html",
       "published_at": "2026-10-27T04:58:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_melania_trump_s_chief_adviser",
       "url": "https://kyivindependent.com/local-ceasefire-in-besieged-oleshky-begins-ukrainian-russian-officials-say/",
       "published_at": "2026-10-27T02:58:18+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_melania_trump_s_chief_adviser",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21715193",
       "published_at": "2026-10-27T02:33:07+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_melania_trump_s_chief_adviser",
       "url": "https://www.theguardian.com/world/2026/oct/27/ukraine-war-briefing-russian-strikes-kyiv-truce-begins-oleshky",
       "published_at": "2026-10-27T01:30:27+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_melania_trump_s_chief_adviser",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/26/8059829/",
       "published_at": "2026-10-26T19:13:00+00:00"
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
     "id": "UKRAINE-10270536-04",
     "title": "דוח של ועדת האו\"ם על פשעי מלחמה באנרגיה",
     "summary": "ועדת חקירה של האו\"ם קבעה כי ההתקפות השיטתיות של רוסיה על תשתיות האנרגיה של אוקראינה מהועות פשעים נגד האנושות ופשעי מלחמה.",
     "axis": "הצהרות ומסקנות בינלאומיות",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T12:00:00+00:00",
     "last_update_at": "2026-10-27T03:13:39+00:00",
     "what_is_not_verified": "אינו מאומת לפי טענת רוסיה הרואה בנתונים מידע מומצא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_russian_permanent_mission",
       "url": "https://tass.com/politics/2208295",
       "published_at": "2026-10-27T03:13:39+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_russian_permanent_mission",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/26/8059830/",
       "published_at": "2026-10-26T19:17:00+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_russian_permanent_mission",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168670",
       "published_at": "2026-10-26T12:00:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10270536-05",
     "title": "תקיפה על מחסן תחמושת בלוגנסק",
     "summary": "כוחות אוקראיניים תקפו באמצעות רחפנים מחסן תחמושת רוסי באזור חרוסטלני שבמחוז לוגנסק.",
     "axis": "חזית מזרחית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:32:47+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T00:32:47+00:00",
     "last_update_at": "2026-10-27T00:32:47+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למחסן התחמושת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_exilenova_plus",
       "url": "https://kyivindependent.com/ukraine-reportedly-strikes-russian-ammunition-depot-in-occupied-luhansk-oblast/",
       "published_at": "2026-10-27T00:32:47+00:00"
      }
     ],
     "places": [
      {
       "name": "חרוסטלני, אוקראינה",
       "lat": 48.1351,
       "lon": 38.9199
      }
     ]
    },
    {
     "id": "UKRAINE-10270536-06",
     "title": "גיוס שכירי חרב מאפריקה על ידי רוסיה",
     "summary": "רוסיה מרחיבה את גיוס כוח האדם השכיר ממדינות אפריקה עקב אבידות כבדות ומחסור בכוח אדם בצבא.",
     "axis": "גיוס וכוח אדם",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T02:27:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-27T02:27:00+00:00",
     "last_update_at": "2026-10-27T02:27:00+00:00",
     "what_is_not_verified": "מספר המתגייסים המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_bloomberg",
       "url": "https://www.ukrinform.net/rubric-ato/4178288-russia-expanding-recruitment-of-african-mercenaries-amid-heavy-losses-in-ukraine-war-bloomberg.html",
       "published_at": "2026-10-27T02:27:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10270536-07",
     "title": "הרשעת מומחה מחשבים ברוסיה בגין תרומה לאוקראינה",
     "summary": "בית משפט צבאי ברוסיה גזר 13 שנות מאסר על מומחה מחשבים בגין מימון טרור לאחר שתרם כספים המקושרים לאוקראינה.",
     "axis": "עורף ודיכוי פנימי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-26T21:45:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-26T21:45:24+00:00",
     "last_update_at": "2026-10-26T21:45:24+00:00",
     "what_is_not_verified": "האם נתונים נוספים הועברו על ידי פלטפורמות נוספות מעבר למה שצוין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_department_one",
       "url": "https://meduza.io/en/news/2026/10/27/russia-sentences-an-it-specialist-to-13-years-for-donating-to-ukraine-s-military-binance-helped-investigators-prove-their-case",
       "published_at": "2026-10-26T21:45:24+00:00"
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
    "זהות הגורמים שיפקחו על הפסקת האש באולשקי וההסדרים המדויקים להפעלה",
    "המועד המדויק ומיקום הפגישה המשולשת בין רוסיה, אוקראינה וארצות הברית",
    "ההיתכנות המדויקת להשגת הסכם שלום לפני סוף השנה"
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
     "value": 1.1188,
     "unit": "USD",
     "change_pct": -0.04,
     "source_id": "src_ecb",
     "as_of": "2026-10-26T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "עדכון אסטרטגיית הביטחון הלאומי",
      "הקדמת שיחות תלת-צדדיות עם ארצות הברית ורוסיה",
      "הבטחת סיוע צבאי חיוני והגנה אווירית"
     ],
     "inferred": [
      "שאיפה לשמור על תמיכה בינלאומית ולמנוע את קריסת תשתיות האנרגיה בחורף",
      "הפחתת לחץ הומניטרי באזורים נצורים כמו אולשקי"
     ],
     "forecast": [
      "האצת מאמצים לקבלת חימושים קריטיים ממדינות המערב",
      "ניסיון להגיע להבנות דיפלומטיות טרם החמרת תנאי החורף"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך פעולות צבאיות ממוקדות ודחיית ממצאי ועדות החקירה של האו\"ם",
      "כיבוד הסכמות מקומיות ספציפיות לפינוי תושבים באולשקי"
     ],
     "inferred": [
      "התשה של העורף והתשתיות של אוקראינה באמצעות מתקפות שיטתיות לקראת החורף",
      "הרחבת גיוס שכירי חרב זרים לכיסוי אבדות כוח אדם"
     ],
     "forecast": [
      "המשך לחץ צבאי ואווירי על מרכזים אוקראיניים",
      "הימנעות מוויתורים רחבים במשא ומתן עד להשגת יתרון בשדה הקור"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/27/ukraine-war-briefing-russian-strikes-kyiv-truce-begins-oleshky",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21715193",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-reportedly-strikes-russian-ammunition-depot-in-occupied-luhansk-oblast/",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/10/27/russia-sentences-an-it-specialist-to-13-years-for-donating-to-ukraine-s-military-binance-helped-investigators-prove-their-case",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/26/8059830/",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2208295",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48996",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4178288-russia-expanding-recruitment-of-african-mercenaries-amid-heavy-losses-in-ukraine-war-bloomberg.html",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168670",
     "accessed_at": "2026-10-27T05:36:14+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-26T03:41:54+00:00",
  "changes": {
   "UKRAINE-10270536-01": {
    "kind": "new"
   },
   "UKRAINE-10270536-02": {
    "kind": "new"
   },
   "UKRAINE-10270536-03": {
    "kind": "new"
   },
   "UKRAINE-10270536-04": {
    "kind": "new"
   },
   "UKRAINE-10270536-05": {
    "kind": "new"
   },
   "UKRAINE-10270536-06": {
    "kind": "new"
   },
   "UKRAINE-10270536-07": {
    "kind": "new"
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
