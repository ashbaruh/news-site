/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-29T0040__yemen-202610290040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-29T00:40:26+00:00",
   "window": {
    "from": "2026-10-28T00:40:26+00:00",
    "to": "2026-10-29T00:40:26+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610290040"
   },
   "summary": "הלחימה בתימן התחדשה בעוצמה גבוהה עם מתקפות של החות'ים לעבר מוקדי שליטה של הממשלה המוכרת ובראשם שדה התעופה בעדן וסביבת תעיז. במקביל החות'ים מגבירים את שיגורי הטילים והכטב\"מים לעבר יעדים ותשתיות נפט ותעופה בסעודיה, שמצידה מגיבה בתקיפות אוויריות. ההסלמה הובילה להערכות ביטחונית בינלאומית מוגברת, כולל פינוי סגל אמריקאי מסעודיה ויוזמות הגנה ותיווך אזוריות.",
   "fronts": [
    {
     "name": "חזית עדן ודרום תימן",
     "status": "פעילה - ירי טילים חות'יים לעבר שדה התעופה הבינלאומי של עדן ופגיעה באזרחים ובתנועה האווירית."
    },
    {
     "name": "חזית תעיז",
     "status": "פעילה - מצור והתקפות חות'יות הגורמים לפגיעה באספקה ובשירותי רפואה."
    },
    {
     "name": "חזית צפון תימן (אל-ג'וף)",
     "status": "פעילה - דיווחים על תקיפות אוויריות מצד סעודיה עם אבדות בנפש."
    },
    {
     "name": "חזית תימן - סעודיה",
     "status": "פעילה ובהסלמה - שיגורי טילים לעבר תשתיות אנרגיה ושדות תעופה בסעודיה ותקיפות מנע/תגובה אוויריות."
    }
   ],
   "events": [
    {
     "id": "YEMEN-10290040-01",
     "title": "פגיעת טילים בשדה התעופה הבינלאומי של עדן",
     "summary": "שני טילים פגעו בשטח שדה התעופה של עדן לאחר הוראת פינוי שפרסמו החות'ים עקב נוכחות מטוס תובלה צבאי סעודי. התקיפה גרמה לפציעת אזרחים, נזק חומרי והשבתת תנועת המטוסים.",
     "axis": "החות'ים - ממשלת תימן וסעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T15:50:27+00:00",
     "last_update_at": "2026-10-29T00:06:54+00:00",
     "what_is_not_verified": "לא אומת באופן עצמאי האם המטוס הסעודי נפגע או נשא אמצעי לחימה, וכן מספר הנפגעים המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/evening-update-34",
       "published_at": "2026-10-29T00:06:54+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/air-traffic-suspended-after-missiles-target-aden-airport",
       "published_at": "2026-10-28T21:30:28+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-deadly-saudi-strikes-hit-yemen-they-target-aden",
       "published_at": "2026-10-28T18:50:07+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israel-election-netanyahu-bloc-leads-no-majority",
       "published_at": "2026-10-28T15:50:27+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה עדן, תימן",
       "lat": 12.8295,
       "lon": 45.0316
      }
     ]
    },
    {
     "id": "YEMEN-10290040-02",
     "title": "דיווח על תקיפות אוויריות סעודיות במחוז אל-ג'וף",
     "summary": "החות'ים דיווחו על תקיפות של סעודיה שפגעו בשוק ובתחנת דלק במחוז אל-ג'וף שבצפון-מערב תימן, והביאו להרג של ארבעה עשר בני אדם ולפציעת חמישה עשר נוספים.",
     "axis": "סעודיה - החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T18:50:07+00:00",
     "last_update_at": "2026-10-28T18:50:07+00:00",
     "what_is_not_verified": "מספר ההרוגים והנפגעים וזהות התוקף לא אומתו באופן בלתי תלוי מלבד דיווחי כלי התקשורת של החות'ים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-say-deadly-saudi-strikes-hit-yemen-they-target-aden",
       "published_at": "2026-10-28T18:50:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10290040-03",
     "title": "שיגור טיל בליסטי לעבר בית הזיקוק ראס תנורה בסעודיה",
     "summary": "הדובר הצבאי של החות'ים הצהיר כי שוגר טיל בליסטי לעבר מתקן הזיקוק ראס תנורה במחוז המזרחי של סעודיה, על רקע החרפת ההתקפות נגד ריאד.",
     "axis": "החות'ים - סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T11:04:59+00:00",
     "last_update_at": "2026-10-28T11:04:59+00:00",
     "what_is_not_verified": "הפגיעה בפועל ונזקיה לא אומתו על ידי מקור רשמי סעודי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/egypts-saudi-support-raises-fears-economic-fallout",
       "published_at": "2026-10-28T11:04:59+00:00"
      }
     ],
     "places": [
      {
       "name": "ראס תנורה, סעודיה",
       "lat": 26.7074,
       "lon": 50.0674
      }
     ]
    },
    {
     "id": "YEMEN-10290040-04",
     "title": "הוראת פינוי לצוות שגרירות ארצות הברית בסעודיה עקב איומי החות'ים",
     "summary": "שגרירות ארצות הברית בריאד הורתה לעובדים שאינם עובדי חירום ולבני משפחותיהם לעזוב את סעודיה, בעקבות תקיפות מתמשכות של החות'ים בטילים וכטב\"מים על שדות תעופה ותשתיות אזרחיות.",
     "axis": "ארצות הברית - סעודיה - החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T23:03:34+00:00",
     "last_update_at": "2026-10-28T23:03:34+00:00",
     "what_is_not_verified": "היקף העובדים שעזבו בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-says-it-ordered-non-emergency-embassy-staff-leave-saudi-arabia",
       "published_at": "2026-10-28T23:03:34+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10290040-05",
     "title": "החרפת המשבר הבריאותי והמצור בעיר תעיז",
     "summary": "משרד הבריאות של תימן התריע מפני קריסה בריאותית והומניטרית בתעיז עקב המצור של החות'ים, אשר מונע שירותי בריאות ממאות אלפי תושבים, לצד דיווחים על תקיפות חות'יות בעיר.",
     "axis": "ממשלת תימן - החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T15:50:27+00:00",
     "last_update_at": "2026-10-28T23:23:49+00:00",
     "what_is_not_verified": "לא אומתו הטענות על שימוש בחומרים רעילים בפגזים ופגיעה באמבולנס המוזכרות בכותרות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-health-ministry-warns-against-escalating-health-and-humanitarian",
       "published_at": "2026-10-28T23:23:49+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154807",
       "published_at": "2026-10-28T22:46:45+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154806",
       "published_at": "2026-10-28T20:21:08+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/154803",
       "published_at": "2026-10-28T18:32:17+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israel-election-netanyahu-bloc-leads-no-majority",
       "published_at": "2026-10-28T15:50:27+00:00"
      }
     ],
     "places": [
      {
       "name": "תעיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-10290040-06",
     "title": "דיווח על הפלת מטוס קרב סעודי",
     "summary": "ערוץ דיווח מקוון מסר כי מטוס קרב סעודי מסוג אף-15 הופל בשמי תימן.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T22:29:04+00:00",
     "last_update_at": "2026-10-28T22:29:04+00:00",
     "what_is_not_verified": "ההפלה, מיקומה המדויק, זהות המטוס והגורם המפיל אינם מאומתים כלל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49073",
       "published_at": "2026-10-28T22:29:04+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10290040-07",
     "title": "אישור הסכם הגנה משותף בין טורקיה, סעודיה ופקיסטן",
     "summary": "ועדת החוץ בפרלמנט הטורקי אישרה הסכם הגנה משותף עם סעודיה ופקיסטן הקובע סיוע הדדי בעת תקיפה חמושה, על רקע העימותים המתגברים מול החות'ים, כאשר טורקיה הבהירה כי חייליה לא יישלחו להילחם בתימן.",
     "axis": "טורקיה - סעודיה - פקיסטן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-27T23:55:31+00:00",
     "last_update_at": "2026-10-28T00:40:26+00:00",
     "what_is_not_verified": "טרם אושר סופית במליאת הפרלמנט הטורקי.",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/turkey-committee-approves-pact-saudi-arabia-and-pakistan",
       "published_at": "2026-10-27T23:55:31+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת הפלת מטוס קרב סעודי מסוג אף-15 בתימן.",
    "דיווחים על פגזים המכילים חומרים רעילים שנורו בתעיז.",
    "פגיעה מדויקת ונזקים בבית הזיקוק ראס תנורה בסעודיה.",
    "מספר הנפגעים המדויק בתקיפות המיוחסות לסעודיה באל-ג'וף."
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
     "value": 3.1259,
     "unit": "ILS",
     "change_pct": 2.5,
     "source_id": "src_ecb",
     "as_of": "2026-10-28T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת החות'ים (אנצאר אללה)",
     "declared": [
      "מניעת הגעת משלוחי נשק סעודיים לכוחות הממשלה התימנית בעדן.",
      "תקיפת מטרות תשתית ונפט בסעודיה בתגובה לפעולותיה."
     ],
     "inferred": [
      "הפעלת לחץ צבאי וכלכלי ישיר על ריאד להפסקת התמיכה בממשלת תימן.",
      "השתלטות על מוקדי כוח נוספים בתימן וערעור הלגיטימציה של ממשלת עדן."
     ],
     "forecast": [
      "המשך ניסיונות לפגוע בשדות תעופה ובמתקני אנרגיה בתוך תימן ובשטח סעודיה.",
      "החרפת האיומים הצבאיים מול כוחות אזוריים המסייעים לסעודיה."
     ]
    },
    {
     "actor": "סעודיה והקואליציה התומכת בממשלת תימן",
     "declared": [
      "הגנה על שטח סעודיה ותשתיותיה האזרחיות והכלכליות מפני פגיעה.",
      "חיזוק הסכמי הגנה אזוריים לבלימת איומים ביטחוניים."
     ],
     "inferred": [
      "בלימת התקדמות החות'ים ומניעת קריסת ממשלת תימן המוכרת.",
      "בניית מעטפת הרתעה רב-לאומית הכוללת את פקיסטן, טורקיה ומצרים לצמצום חשיפה לתקיפות."
     ],
     "forecast": [
      "המשך פעילות סיכול אווירית בתימן לצד קידום מגעים מדיניים וביטחוניים אזוריים לסיום הלחימה."
     ]
    },
    {
     "actor": "ממשלת תימן (המוכרת בינלאומית)",
     "declared": [
      "הסרת המצור של החות'ים מעל העיר תעיז והגנה על תושביה.",
      "קריאה למועצת הביטחון ולקהילה הבינלאומית לגנות את ההתקפות על מתקנים אזרחיים ושדות תעופה."
     ],
     "inferred": [
      "שמירה על השליטה בנכסים חיוניים בעדן ובדרום תימן כדי למנוע את קריסת המשטר.",
      "גיוס סיוע צבאי, כספי והומניטרי בינלאומי להמשך תפקוד מוסדותיה."
     ],
     "forecast": [
      "המשך תלות מוחלטת בסיוע צבאי ופיננסי סעודי לעצירת מתקפות החות'ים."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-health-ministry-warns-against-escalating-health-and-humanitarian",
     "accessed_at": "2026-10-29T00:40:26+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/turkey-committee-approves-pact-saudi-arabia-and-pakistan",
     "accessed_at": "2026-10-29T00:40:26+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154803",
     "accessed_at": "2026-10-29T00:40:26+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49073",
     "accessed_at": "2026-10-29T00:40:26+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-28T06:13:05+00:00",
  "changes": {
   "YEMEN-10290040-01": {
    "kind": "new"
   },
   "YEMEN-10290040-02": {
    "kind": "possible",
    "prev": "סיוע לווייני רוסי בתקיפות נגד מטרות סעודיות",
    "score": 0.467
   },
   "YEMEN-10290040-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "מתקפת טילים על בית הזיקוק בראס תנורה ופיצוצים בריאד",
    "score": 1.0
   },
   "YEMEN-10290040-04": {
    "kind": "new"
   },
   "YEMEN-10290040-05": {
    "kind": "new"
   },
   "YEMEN-10290040-06": {
    "kind": "new"
   },
   "YEMEN-10290040-07": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "אישור הסכם הגנה בין טורקיה, סעודיה ופקיסטן",
    "score": 1.0
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-29T0622__iran-202610290622.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-29T06:22:52+00:00",
   "window": {
    "from": "2026-10-28T06:22:52+00:00",
    "to": "2026-10-29T06:22:52+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610290622"
   },
   "summary": "המתיחות בין ישראל וארצות הברית לבין איראן ושלוחותיה מתאפיינת בהיערכות לפעולה צבאית לצד ניסיונות תיווך אזוריים. ארצות הברית מתגברת כוחות ומזהירה שותפות במפרץ מפני אפשרות של מערכה עצימה, בעוד מערכת הביטחון בישראל נערכת למבצע נוסף חרף חוסר ההכרעה הפוליטי. במקביל, טהרן מפגינה יכולות צבאיות ויירוט במצר הורמוז, בעוד גורמים דיפלומטיים בוחנים נוסחאות להפסקת אש והסרת עיצומים.",
   "fronts": [
    {
     "name": "איראן - ארה\"ב",
     "status": "כוננות צבאית לתקיפות הדדיות לצד ערוצי תקשורת עקיפים ומגעים דיפלומטיים"
    },
    {
     "name": "ישראל - איראן",
     "status": "דריכות שיא והערכות מצב לתקיפה אפשרית והתרחבות המלחמה"
    },
    {
     "name": "ישראל - לבנון (חזבאללה)",
     "status": "תקיפות נקודתיות של צה\"ל וסירוב חזבאללה להתפרק מנשקו תוך הישענות על איראן"
    },
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "חיכוך צבאי הכולל יירוט כלי טיס בלתי מאוישים וניסיונות גיבוש הסדר לפתיחת הנתיב הימי"
    }
   ],
   "events": [
    {
     "id": "IRAN-10290622-01",
     "title": "יירוט כלי טיס בלתי מאויש אמריקני באזור מצר הורמוז",
     "summary": "משמרות המהפכה באיראן הודיעו כי יירטו כלי טיס בלתי מאויש מתוצרת ארצות הברית מדגם MQ-1 במרחב האווירי ממזרח למצר הורמוז, מול סיריק, באמצעות מערכת הגנה אווירית חדשה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T05:36:13+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T05:36:13+00:00",
     "last_update_at": "2026-10-29T05:36:13+00:00",
     "what_is_not_verified": "אין אימות עצמאי להפלת המל\"ט מעבר להודעת משמרות המהפכה באיראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/irgc-says-it-shot-down-us-made-drone-near-hormuz-strait-hormuz",
       "published_at": "2026-10-29T05:36:13+00:00"
      }
     ],
     "places": [
      {
       "name": "סיריק, איראן",
       "lat": 26.5177,
       "lon": 57.1018
      }
     ]
    },
    {
     "id": "IRAN-10290622-02",
     "title": "אזהרה אמריקנית למדינות המפרץ מפני פעולה צבאית נגד איראן",
     "summary": "בארצות הברית הוזהרו מספר מדינות במפרץ להיערך לקראת מערכה צבאית קצרה ועצימה מול איראן לאחר בחירות האמצע.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T08:25:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T08:25:06+00:00",
     "last_update_at": "2026-10-29T00:06:54+00:00",
     "what_is_not_verified": "האזהרה מבוססת על פרסום עיתונאי בוול סטריט ג'ורנל ולא על הודעה רשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/evening-update-34",
       "published_at": "2026-10-29T00:06:54+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkh00ojlafl",
       "published_at": "2026-10-28T21:48:04+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132713",
       "published_at": "2026-10-28T08:25:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10290622-03",
     "title": "פניית סגן נשיא ארצות הברית לבכיר במשטר האיראני",
     "summary": "סגן נשיא ארצות הברית ג'יי די ואנס שיגר מכתב למוחסן רזאי מהמחנה הניצי באיראן, במטרה לבחון היתכנות למנוע את חידוש האש או לדון באספקה רפואית.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T20:13:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T20:13:18+00:00",
     "last_update_at": "2026-10-29T00:00:00+00:00",
     "what_is_not_verified": "פרטי המכתב ותוכנו המדויק מבוססים על דיווחים בתקשורת ועל התייחסות חלקית של טראמפ",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/29/iran-war-live-tehran-presses-7-day-hormuz-plan-trump-denies-peace-talks?traffic_source=rss",
       "published_at": "2026-10-29T00:00:00+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/rkh00ojlafl",
       "published_at": "2026-10-28T21:48:04+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21731158",
       "published_at": "2026-10-28T20:18:49+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1382403",
       "published_at": "2026-10-28T20:13:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10290622-04",
     "title": "היערכות צה\"ל למבצע אפשרי נגד איראן",
     "summary": "צמרת הביטחון בישראל מקיימת הערכות מצב לבחינת פעולה נגד איראן והשלוחות שלה, כאשר שר הביטחון הדגיש כי הצבא יבצע כל החלטה שתתקבל בנושא.",
     "axis": "ישראל - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T12:46:43+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T12:46:43+00:00",
     "last_update_at": "2026-10-28T15:34:14+00:00",
     "what_is_not_verified": "מועד ומתכונת המבצע האפשרי אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132738",
       "published_at": "2026-10-28T15:34:14+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383959188",
       "published_at": "2026-10-28T12:46:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10290622-05",
     "title": "חשיפת משגר טילים חדש בטהרן",
     "summary": "גורמים באיראן הציגו משגר טילים חדש מסוג TEL במרכז וליעסר בטהרן בפני הציבור.",
     "axis": "איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T09:09:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T09:09:57+00:00",
     "last_update_at": "2026-10-28T09:09:57+00:00",
     "what_is_not_verified": "היכולות המבצעיות של המשגר המוצג לא אומתו באופן בלתי תלוי",
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
    },
    {
     "id": "IRAN-10290622-06",
     "title": "הצהרת מנהיג חזבאללה על מעורבות איראן והתנגדות לפירוק מנשק",
     "summary": "מזכ\"ל חזבאללה נעים קאסם הצהיר כי איראן רואה בעדיפות עליונה את הפסקת התקיפות הישראליות בלבנון ונסיגת צה\"ל, והבהיר כי הארגון מסרב להתפרק מנשקו.",
     "axis": "חזבאללה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T17:06:01+00:00",
     "last_update_at": "2026-10-29T06:09:57+00:00",
     "what_is_not_verified": "מידת ההשפעה המעשית של המגעים בין ארה\"ב לאיראן על הלחימה בשטח אינה מאומתת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86306544/Hezbollah-chief-says-Iran-prioritizes-ending-Israeli-attacks",
       "published_at": "2026-10-29T06:09:57+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/evening-update-34",
       "published_at": "2026-10-29T00:06:54+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132743",
       "published_at": "2026-10-28T17:06:01+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10290622-07",
     "title": "תנועות והיערכות של צבא ארצות הברית באזור המזרח התיכון ואירופה",
     "summary": "זוהו מהלכים של צבא ארצות הברית הכוללים תגבור נוכחות ימית בים התיכון והיערכות מחדש של מערך מטוסי התדלוק באירופה, על רקע כוננות לעימות מול איראן.",
     "axis": "ארה\"ב - איראן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T08:25:06+00:00",
     "last_update_at": "2026-10-28T11:19:01+00:00",
     "what_is_not_verified": "הקשר הישיר בין פריסת הכוחות למבצע ספציפי נגד איראן נסמך על הערכות מכוני מחקר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "or_inss",
       "url": "https://www.walla.co.il/news/military/383959224",
       "published_at": "2026-10-28T11:19:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_inss",
       "url": "https://t.me/abualiexpress/132713",
       "published_at": "2026-10-28T08:25:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10290622-08",
     "title": "מגעים דיפלומטיים של מדינות המפרץ למניעת חידוש הלחימה",
     "summary": "מדינות המפרץ מקדמות יוזמת הסדר שמטרתה לפתוח מחדש את מצר הורמוז תמורת הסרת עיצומים מעל איראן ונסיגת חות'ים, במטרה למנוע סבב לחימה נוסף בין איראן לארה\"ב.",
     "axis": "מדינות המפרץ - איראן - ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T05:00:55+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T05:00:55+00:00",
     "last_update_at": "2026-10-28T06:22:52+00:00",
     "what_is_not_verified": "קיומו של הסכם סופי והסכמת כלל הצדדים לתנאים טרם אומתו",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/28/gulf-states-multipart-peace-deal-avert-renewal-us-iran-war",
       "published_at": "2026-10-28T05:00:55+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת משמרות המהפכה על יירוט מוצלח של כלי טיס בלתי מאויש אמריקני מדגם MQ-1 מעל מצר הורמוז",
    "הדיווח לפיו ארצות הברית התריעה בפני מדינות המפרץ על תקיפה צפויה לאחר בחירות האמצע",
    "תוכן המכתב שנמסר על ידי סגן הנשיא ואנס למוחסן רזאי והאם נועד לסיוע רפואי או למניעת הסלמה",
    "הערכות לגבי סכנת קריסה כלכלית בצמרת משמרות המהפכה",
    "קיומם של ניסויי טילים שבוצעו באיראן בימים האחרונים"
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
     "actor": "איראן",
     "declared": [
      "שמירה על ערוצים פתוחים למתווכים כדי לאפשר מרחב לדיפלומטיה",
      "דרישה להפסקת התקיפות הישראליות בלבנון ולהסגת כוחות צה\"ל משטחה",
      "המשך קידום דיפלומטיית האנרגיה חרף פעולות עוינות"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וסמלי במצר הורמוז לצורך שיפור עמדות המיקוח להסרת עיצומים",
      "שימור יכולות ההרתעה וההשפעה באמצעות ארגוני השלוחים"
     ],
     "forecast": [
      "המשך איתותים צבאיים מדודים סביב מצר הורמוז במקביל לניהול מגעים עקיפים",
      "החרפת הוויכוח הפנימי בנוגע להסכם הגרעין אם יימשך הלחץ הכלכלי והצבאי"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "הכחשת כוונה ליזום מלחמה והדגשת הרצון למנוע חידוש אש",
      "הפעלת בידוד כלכלי נרחב לצורך החלשת המשטר האיראני",
      "הגבלת מגעים לסוגיות הומניטריות של אספקה רפואית"
     ],
     "inferred": [
      "הכנת תשתית מבצעית לתקיפה עצימה וקצרה להרתעת איראן",
      "שימוש באיום צבאי כדי לאלץ את טהרן להסכים לפיקוח גרעיני מחודש"
     ],
     "forecast": [
      "תגבור נוסף של כוחות צבאיים בזירה לקראת החלטה על פעולה לאחר בחירות האמצע",
      "מיצוי ערוצי הידברות חשאים לפני הוצאה לפועל של תקיפה נרחבת"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הודעת מערכת הביטחון כי הצבא יבצע כל החלטה שתתקבל בנושא איראן"
     ],
     "inferred": [
      "רצון לנצל שעת כושר מבצעית לפגיעה במערכי הגרעין והטילים באיראן",
      "תיאום צבאי שוטף מול מפקדת פיקוד המרכז של ארה\"ב כהכנה לעימות אזורי"
     ],
     "forecast": [
      "המשך קידום תוכניות תקיפה ללא קשר למבנה הממשלה הזמנית",
      "פעילות מתמשכת לסיכול התעצמות חזבאללה ומניעת התבססות שלוחות איראן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/10/29/iran-war-live-tehran-presses-7-day-hormuz-plan-trump-denies-peace-talks?traffic_source=rss",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/28/gulf-states-multipart-peace-deal-avert-renewal-us-iran-war",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86306544/Hezbollah-chief-says-Iran-prioritizes-ending-Israeli-attacks",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21731158",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1382403",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/evening-update-34",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132713",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94866",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383959224",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/rkh00ojlafl",
     "accessed_at": "2026-10-29T06:22:52+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-28T16:48:25+00:00",
  "changes": {
   "IRAN-10290622-01": {
    "kind": "new"
   },
   "IRAN-10290622-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "assessment",
    "prev": "אזהרת ארה\"ב למדינות המפרץ על אפשרות למערכה נגד איראן",
    "score": 1.0
   },
   "IRAN-10290622-03": {
    "kind": "new"
   },
   "IRAN-10290622-04": {
    "kind": "new"
   },
   "IRAN-10290622-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "חשיפת משגר טילים חדש בטהרן",
    "score": 1.0
   },
   "IRAN-10290622-06": {
    "kind": "new"
   },
   "IRAN-10290622-07": {
    "kind": "new"
   },
   "IRAN-10290622-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-29T0625__ukraine-202610290625.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-29T06:25:04+00:00",
   "window": {
    "from": "2026-10-28T06:25:04+00:00",
    "to": "2026-10-29T06:25:04+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610290625"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהמשך חילופי מהלומות אוויריות בעומק העורף, לצד לחץ קרקעי של כוחות רוסיים במספר גזרות. אוקראינה ביצעה מתקפת כטב\"מים נרחבת לעבר מוסקבה ופגעה במתקני תעשייה ברוסיה, בעוד הצבא הרוסי תקף בחרקוב והתקדם נקודתית במחוז זפוריז'יה. במקביל נשמרת הפסקת אש מקומית מוגבלת לפינוי אזרחים באולשקי, ומתקיימים מגעים דיפלומטיים לקראת שיחות תלת-צדדיות עתידיות.",
   "fronts": [
    {
     "name": "חזית זפוריז'יה",
     "status": "התקדמות קרקעית רוסית סמוך ליישובים ווזדביז'יבקה ולוהיבסקה"
    },
    {
     "name": "חזית חרסון",
     "status": "הפסקת אש מקומית מחזיקה מעמד באזור אולשקי ופעילות לפינוי מוקשים הומניטרי"
    },
    {
     "name": "חזית חרקוב",
     "status": "תקיפות כטב\"מים רוסיות לעבר מוסדות ותשתיות עירוניות"
    },
    {
     "name": "עורף רוסיה",
     "status": "מתקפות כטב\"מים אוקראיניות רחבות לעבר מחוז מוסקבה ומפעלי תעשייה ביטחונית וכימית"
    },
    {
     "name": "חזית דונצק",
     "status": "לחימה פעילה ופגיעות כטב\"מים באזורי קו המגע דוגמת קרמטורסק"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10290625-01",
     "title": "תקיפות כטב\"מים רוסיים בחרקוב",
     "summary": "כוחות רוסיים ביצעו תקיפות באמצעות כלי טיס בלתי מאוישים על מוסד חינוכי ועל מחוזות חולודנוגורסק וסלטיב בעיר חרקוב.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T05:59:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T05:59:00+00:00",
     "last_update_at": "2026-10-29T05:59:00+00:00",
     "what_is_not_verified": "היקף הנזק המדויק ומספר הנפגעים אינם מפורטים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4179219-russian-forces-strike-educational-institution-in-kharkiv.html",
       "published_at": "2026-10-29T05:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-02",
     "title": "מתקפת כטב\"מים על מפעל כימי בבשקורטוסטן",
     "summary": "דווח על תקיפת כלי טיס בלתי מאוישים ועשן סמוך למפעל הכימי של חברת באשקיר סודה בעיר סטרליטמק, מפעל המייצר חומרים לתעשייה הביטחונית הרוסית.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-29T05:19:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T05:19:00+00:00",
     "last_update_at": "2026-10-29T05:19:00+00:00",
     "what_is_not_verified": "מידת הנזק למתקן לא אומתה והרשויות ברוסיה לא הגיבו רשמית על הפגיעה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_astra_exilenova",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060194/",
       "published_at": "2026-10-29T05:19:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סטרליטמק, רוסיה",
       "lat": 53.6194,
       "lon": 55.9616
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-03",
     "title": "מתקפת כטב\"מים אוקראינית רחבת היקף על מוסקבה ומחוזות סמוכים",
     "summary": "רשויות ברוסיה דיווחו על מתקפה של יותר מ-600 כטב\"מים לעבר מוסקבה והמחוז, שגרמה להגבלות תעופה במספר נמלי תעופה; ראש העיר טען להפלת עשרות כטב\"מים.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T22:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T22:34:12+00:00",
     "last_update_at": "2026-10-28T23:24:00+00:00",
     "what_is_not_verified": "מספר הכטב\"מים המדויק ששוגרו ושיירטו, וכן השלכות הפגיעה בשטח שלא דווחו על ידי הרשויות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060184/",
       "published_at": "2026-10-28T23:24:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/moscow-comes-under-drone-fire-overnight-grounding-flights-at-major-airports/",
       "published_at": "2026-10-28T22:34:12+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "נארו-פומינסק, רוסיה",
       "lat": 55.3843,
       "lon": 36.7235
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-04",
     "title": "הפסקת אש מקומית ופינוי הומניטרי באולשקי שבמחוז חרסון",
     "summary": "הפסקת אש בתיווך אמריקאי נשמרה באולשקי הכבושה לצורך פינוי אזרחים ופינוי מוקשים, כאשר לפי מסמכים התושבים יפונו דרך רוסיה ובלארוס בליווי נציב זכויות האדם האוקראיני.",
     "axis": "חזית הדרום / חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T15:27:08+00:00",
     "last_update_at": "2026-10-29T01:48:26+00:00",
     "what_is_not_verified": "אופן המשך מעבר המפונים מגומל שבבלארוס אל תוך שטחי אוקראינה טרם פורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/29/ukraine-war-briefing-oleshky-truce-holding-and-demining-under-way-to-enable-humanitarian-corridor-kyiv-says",
       "published_at": "2026-10-29T01:48:26+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-society/4179132-demining-underway-along-civilian-evacuation-routes-from-oleshky-to-lubinets.html",
       "published_at": "2026-10-29T01:40:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/28/russian-military-plane-to-transport-evacuees-from-occupied-ukrainian-town-through-russia-and-belarus-documents-show",
       "published_at": "2026-10-28T15:55:46+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49055",
       "published_at": "2026-10-28T15:27:08+00:00"
      }
     ],
     "places": [
      {
       "name": "אולשקי, אוקראינה",
       "lat": 46.6261,
       "lon": 32.722
      },
      {
       "name": "חרסון, אוקראינה",
       "lat": 46.6401,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-05",
     "title": "התקדמות כוחות רוסיים במחוז זפוריז'יה",
     "summary": "אנליסטים צבאיים מקבוצת DeepState דיווחו כי כוחות רוסיים רשמו התקדמות בקרקע בסמוך ליישובים ווזדביז'יבקה ולוהיבסקה.",
     "axis": "חזית זפוריז'יה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T21:38:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T21:38:00+00:00",
     "last_update_at": "2026-10-28T21:38:00+00:00",
     "what_is_not_verified": "לא נמסר אישור רשמי של צבא אוקראינה או צבא רוסיה להתקדמות זו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_deepstate",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/28/8060176/",
       "published_at": "2026-10-28T21:38:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ווזדביז'יבקה, אוקראינה",
       "lat": 47.7473,
       "lon": 36.0798
      },
      {
       "name": "לוהיבסקה, אוקראינה",
       "lat": 47.5255,
       "lon": 36.0365
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-06",
     "title": "הריגת מומחי סילוק פצצות בפעילות פינוי מוקשים בסומי",
     "summary": "שני עובדים משירות החירום הממלכתי של אוקראינה נהרגו במהלך פעילות לפינוי מוקשים הומניטרי באזור סומי.",
     "axis": "חזית סומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-29T00:30:00+00:00",
     "last_update_at": "2026-10-29T00:30:00+00:00",
     "what_is_not_verified": "נסיבות הפיצוץ המדויקות אינן מפורטות בדיווח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_ukrinform",
       "url": "https://www.ukrinform.net/rubric-ato/4179118-two-state-emergency-service-bomb-disposal-experts-killed-during-demining-operation-in-sumy-region.html",
       "published_at": "2026-10-29T00:30:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10290625-07",
     "title": "מתנדב קנדי נהרג מפגיעת כטב\"ם רוסי בקרמטורסק",
     "summary": "מייסד ארגון סיוע קנדי נהרג מפגיעת כלי טיס בלתי מאויש מסוג FPV בעת שעסק בחילוץ בעלי חיים בעיר קרמטורסק שבחזית דונצק.",
     "axis": "חזית דונצק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T23:56:51+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T23:56:51+00:00",
     "last_update_at": "2026-10-28T23:56:51+00:00",
     "what_is_not_verified": "אין פרטים על נפגעים נוספים באירוע.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_raincoast_dog_rescue_society_kyiv_indepe",
       "url": "https://kyivindependent.com/canadian-volunteer-killed-by-russian-drone-while-rescuing-animals-in-donetsk-oblast/",
       "published_at": "2026-10-28T23:56:51+00:00"
      }
     ],
     "places": [
      {
       "name": "קרמטורסק, אוקראינה",
       "lat": 48.7389,
       "lon": 37.5844
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-08",
     "title": "הכנות לשיחות תלת-צדדיות באבו דאבי לאחר 4 בנובמבר",
     "summary": "גורמים רשמיים בקרמלין ובקייב התייחסו לחידוש מתוכנן של מגעים תלת-צדדיים בין רוסיה, ארה\"ב ואוקראינה באיחוד האמירויות, כאשר קיומן והמועד המדויק תלויים במצב בשדה הקרב.",
     "axis": "משא ומתן ומדיניות בינלאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T14:30:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T14:30:06+00:00",
     "last_update_at": "2026-10-29T00:54:00+00:00",
     "what_is_not_verified": "התאריך הסופי והרכב המשלחות טרם נקבעו סופית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060187/",
       "published_at": "2026-10-29T00:54:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/29/kremlin-says-u-s-russia-ukraine-peace-talks-will-take-place-in-abu-dhabi-after-november-4-depending-on-battlefield-conditions",
       "published_at": "2026-10-28T22:26:41+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2209811",
       "published_at": "2026-10-28T21:15:39+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2209747",
       "published_at": "2026-10-28T18:33:43+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/10/28/putin-turns-a-half-hour-call-with-european-leaders-into-a-90-minute-history-lecture-trump-says-a-three-way-summit-could-happen-very-soon",
       "published_at": "2026-10-28T14:30:06+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-09",
     "title": "תקיפה אוקראינית ושריפה במפעל אזוט בנובומוסקובסק",
     "summary": "שריפה פרצה במפעל אזוט בעיר נובומוסקובסק שבמחוז טולה ברוסיה בעקבות תקיפה מן הצד האוקראיני.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T12:58:55+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T12:58:55+00:00",
     "last_update_at": "2026-10-28T12:58:55+00:00",
     "what_is_not_verified": "מידת הנזק וסוג אמצעי הלחימה שפגע במפעל אינם מאומתים בדיווח הקצר.",
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
       "name": "נובומוסקובסק, רוסיה",
       "lat": 54.011,
       "lon": 38.2909
      }
     ]
    },
    {
     "id": "UKRAINE-10290625-10",
     "title": "התחייבות אוקראינית שלא לתקוף מכליות דלק רוסי לארה\"ב",
     "summary": "נשיא אוקראינה ולדימיר זלנסקי הצהיר כי ארצו לא תתקוף ספינות המובילות סולר מרוסיה לארצות הברית בשל זיקתן לארה\"ב.",
     "axis": "הזירה הימית ומסחר",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T14:27:58+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T14:27:58+00:00",
     "last_update_at": "2026-10-28T14:27:58+00:00",
     "what_is_not_verified": "אין פירוט לגבי מנגנון הזיהוי או היקף המכליות שחוסות תחת הצהרה זו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49051",
       "published_at": "2026-10-28T14:27:58+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "היקף הנזק והפגיעות בעקבות מתקפת הכטב\"מים על חברת באשקיר סודה בסטרליטמק.",
    "המספר המדויק של כלי הטיס הבלתי מאוישים שיורטו או פגעו במתקפה ההמונית על אזור מוסקבה.",
    "תוואי המעבר המדויק של אזרחי אולשקי מבלארוס לתוך שטח אוקראינה.",
    "התאריך המוסכם והרכב המשתתפים המלא במפגש המתוכנן באבו דאבי.",
    "היקף הנזק הממשי במפעל אזוט במחוז טולה בעקבות התקיפה."
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
      "להרחיב את ההשתתפות הבינלאומית בבית דין מיוחד לפשעי התוקפנות הרוסית",
      "להשיג צעדי דה-אסקלציה בתחום האנרגיה והים ושחרור שבויים בשיחות עתידיות",
      "לא לפגוע בספינות מסחר המובילות דלק רוסי לארצות הברית"
     ],
     "inferred": [
      "פגיעה ביכולות הייצור של התעשייה הביטחונית הרוסית באמצעות מתקפות כטב\"מים בעומק רוסיה",
      "הקלת המצוקה ההומניטרית באזורים כבושים תוך שמירה על התיאום עם המערב"
     ],
     "forecast": [
      "המשך מיקוד התקיפות בעורף הרוסי לצד ניסיון למצות ערוצי פינוי אזרחים בחסות בינלאומית"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "התניית שיחות המשא ומתן העתידיות במצב בשדה הקרב ובמצב הכללי",
      "המשך קידום מטרות מדיניות לעולם רב-קוטבי ופיתוח מערכי לוויינים עצמאיים"
     ],
     "inferred": [
      "שימוש בהתקדמות הטריטוריאלית בחזית לשיפור עמדות המיקוח לקראת מגעים מדיניים",
      "המשך שחיקת התשתיות האוקראיניות תוך הסכמה מוגבלת לנתיבים הומניטריים מבוקרים"
     ],
     "forecast": [
      "הגברת הלחץ הצבאי על קו החזית לקראת מועד השיחות המתוכנן בנובמבר"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/29/ukraine-war-briefing-oleshky-truce-holding-and-demining-under-way-to-enable-humanitarian-corridor-kyiv-says",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/canadian-volunteer-killed-by-russian-drone-while-rescuing-animals-in-donetsk-oblast/",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/28/putin-turns-a-half-hour-call-with-european-leaders-into-a-90-minute-history-lecture-trump-says-a-three-way-summit-could-happen-very-soon",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/29/8060187/",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2209747",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49051",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4179118-two-state-emergency-service-bomb-disposal-experts-killed-during-demining-operation-in-sumy-region.html",
     "accessed_at": "2026-10-29T06:25:04+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-28T16:59:57+00:00",
  "changes": {
   "UKRAINE-10290625-01": {
    "kind": "new"
   },
   "UKRAINE-10290625-02": {
    "kind": "new"
   },
   "UKRAINE-10290625-03": {
    "kind": "new"
   },
   "UKRAINE-10290625-04": {
    "kind": "down",
    "from": "verified",
    "to": "shared_root",
    "prev": "הפסקת אש מקומית ופינוי באולשקי",
    "score": 1.0
   },
   "UKRAINE-10290625-05": {
    "kind": "new"
   },
   "UKRAINE-10290625-06": {
    "kind": "new"
   },
   "UKRAINE-10290625-07": {
    "kind": "new"
   },
   "UKRAINE-10290625-08": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "שיחות מנהיגי פינלנד ונורווגיה עם פוטין",
    "score": 1.0
   },
   "UKRAINE-10290625-09": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "שריפה במפעל אזוט בנובמוסקובסק",
    "score": 1.0
   },
   "UKRAINE-10290625-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-29T0627__north-202610290627.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-29T06:27:35+00:00",
   "window": {
    "from": "2026-10-28T06:27:35+00:00",
    "to": "2026-10-29T06:27:35+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202610290627"
   },
   "summary": "הגזרה הצפונית מתאפיינת בהמשך העימות האש בין צה\"ל לבין חזבאללה בדרום לבנון לצד דחייה מוחלטת מצד ארגון הטרור של דרישות פירוק הנשק. במקביל, טורקיה מעמיקה את מעורבותה הצבאית והימית בבניין הכוח של הצי הסורי, בעוד ישראל ממשיכה בפעילות מבצעית הכוללת תקיפות ואמצעים שונים בגבולות סוריה ולבנון.",
   "fronts": [
    {
     "name": "חזית לבנון - ישראל",
     "status": "פעילה (תקיפות צה\"ל, שיגור מיירטים, ונאומים לוחמניים של חזבאללה)"
    },
    {
     "name": "חזית סוריה - ישראל",
     "status": "פעילה חלקית (דיווחים על תקיפות ומציאת תחמושת ישראלית)"
    },
    {
     "name": "מעורבות טורקיה בסוריה",
     "status": "העמקת שיתוף פעולה ובניין כוח ימי"
    }
   ],
   "events": [
    {
     "id": "NORTH-10290627-01",
     "title": "תקיפות והפגזות של צה\"ל בדרום לבנון",
     "summary": "הצבא הישראלי ביצע תקיפות אוויריות, ירי ארטילרי והרס באזורים שונים בדרום לבנון, כולל שיגור מיירט לעבר מטרה חשודה.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T17:59:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T17:59:28+00:00",
     "last_update_at": "2026-10-29T03:30:35+00:00",
     "what_is_not_verified": "הפרטים המדויקים על תוצאות כל תקיפה אינם מאומתים במלואם מעבר להודעות הרשמיות והדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_anadolu",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-army-says-it-launched-interceptor-at-suspected-aerial-target-in-southern-lebanon/4104450",
       "published_at": "2026-10-29T03:30:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_anadolu",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/evening-update-34",
       "published_at": "2026-10-29T00:06:54+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_anadolu",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-launches-explosive-thermal-balloons-over-southern-lebanon",
       "published_at": "2026-10-28T22:04:20+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_anadolu",
       "url": "https://english.almanar.com.lb/article/144417/",
       "published_at": "2026-10-28T21:07:23+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_anadolu",
       "url": "https://www.maariv.co.il/breaking-news/article-1382412",
       "published_at": "2026-10-28T20:39:37+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_anadolu",
       "url": "https://t.me/idf_telegram/25505",
       "published_at": "2026-10-28T20:39:08+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_anadolu",
       "url": "https://english.almanar.com.lb/article/144372/",
       "published_at": "2026-10-28T19:56:15+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_anadolu",
       "url": "https://t.me/lelotsenzura/94874",
       "published_at": "2026-10-28T19:36:03+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_anadolu",
       "url": "https://english.almanar.com.lb/article/144337/",
       "published_at": "2026-10-28T17:59:28+00:00"
      }
     ],
     "places": [
      {
       "name": "דיר מימאס, לבנון",
       "lat": 33.3021,
       "lon": 35.5467
      },
      {
       "name": "ברעשית, לבנון",
       "lat": 33.1785,
       "lon": 35.4372
      }
     ]
    },
    {
     "id": "NORTH-10290627-02",
     "title": "נאום מזכ\"ל חזבאללה נעים קאסם",
     "summary": "מזכ\"ל חזבאללה דחה על הסף את פירוק נשק הארגון, הגדיר את הסכם המסגרת עם ישראל כמבוטל, וטען כי תוצאות הבחירות בישראל מהוות ביטוי לתבוסה.",
     "axis": "ישראל - לבנון וחיזבאללה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T13:42:27+00:00",
     "last_update_at": "2026-10-29T00:06:54+00:00",
     "what_is_not_verified": "טענותיו של קאסם לגבי השפעת ההסכם עם איראן על הפחתת התקיפות אינן מאומתות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_middle_east_eye",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/evening-update-34",
       "published_at": "2026-10-29T00:06:54+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_middle_east_eye",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-leader-rules-out-groups-disarmament",
       "published_at": "2026-10-28T20:47:43+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_middle_east_eye",
       "url": "https://t.me/abualiexpress/132743",
       "published_at": "2026-10-28T17:06:01+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_middle_east_eye",
       "url": "https://english.almanar.com.lb/article/144322/",
       "published_at": "2026-10-28T16:47:47+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_middle_east_eye",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965266/hezbollah-chief-calls-israeli-election-results-a-form-of-defeat-reject/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965266",
       "published_at": "2026-10-28T13:42:27+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10290627-03",
     "title": "גילוי פצצה ישראלית בלתי מפוצצת בסוריה",
     "summary": "תושבים מקומיים בסוריה דיווחו על מציאת פצצה ישראלית מדגם ספייס 250 באזור דיר א-זור, ששימשה לכאורה נגד מחסן תחמושת.",
     "axis": "ישראל - סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-28T21:42:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-28T21:42:41+00:00",
     "last_update_at": "2026-10-28T21:42:41+00:00",
     "what_is_not_verified": "הדיווח מבוסס על תושבים מקומיים וטענות שלאומתו באופן רשמי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_telegram_carmel",
       "url": "https://t.me/alexmehacarmel/49072",
       "published_at": "2026-10-28T21:42:41+00:00"
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
     "id": "NORTH-10290627-04",
     "title": "תוכנית בניין כוח של טורקיה עבור הצי הסורי",
     "summary": "משרד ההגנה הטורקי הכריז על תוכנית לבניית כוח ופיתוח יכולות הצי הסורי, הכוללת תחזוקה, אימונים ופיתוח תשתיות נמלים.",
     "axis": "סוריה - טורקיה",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-28T12:11:50+00:00",
     "last_update_at": "2026-10-28T12:11:50+00:00",
     "what_is_not_verified": "היקף היישום המעשה של התוכנית בשטח אינו מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_alma",
       "source_root_id": "or_alma_research_center",
       "url": "https://israel-alma.org/turkeys-force-buildup-for-the-syrian-navy/",
       "published_at": "2026-10-28T12:11:50+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות תושבים בסוריה על מציאת פצצת ספייס 250 ישראלית באזור דיר א-זור",
    "טענות חזבאללה כי ההסכם בין איראן לארצות הברית הפחית את התוקפנות נגד לבנון",
    "הכחשות טורקיות לגבי אופי התקיפות המיוחסות לישראל בסוריה"
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
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות עוינת וסיכול איומים בגבול הצפון"
     ],
     "inferred": [
      "פגיעה בתשתיות צבאיות ואמצעי לחימה המועברים בגבולות סוריה ולבנון",
      "שימור חופש פעולה מבצעי בלבנון ובסוריה"
     ],
     "forecast": [
      "המשך התקיפות והפעילות המבצעית בדרום לבנון",
      "היערכות להסלמה אפשרית מול איראן ושלוחותיה"
     ]
    },
    {
     "actor": "חזבאללה",
     "declared": [
      "סירוב מוחלט לדון בפירוק נשק ההתנגדות",
      "דחיית הסכם המסגרת והחלטה 1701 במתכונת הנוכחית כפגיעה בריבונות"
     ],
     "inferred": [
      "הישענות על התמיכה האיראנית לחיזוק מעמדו",
      "שימור יכולת הלחימה וההתנגדות לנוכחות הישראלית"
     ],
     "forecast": [
      "המשך הדחייה של כל הסדר מדיני הכולל פריקה מנשק",
      "התרסה מתמשכת נגד המדיניות הישראלית והאמריקאית"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "פיתוח ובניין כוח של הצי והכוחות הסוריים"
     ],
     "inferred": [
      "הרחבת ההשפעה והנוכחות האסטרטגית של אנקרה בסוריה ובזירה הימית"
     ],
     "forecast": [
      "העמקת שיתוף הפעולה הצבאי-ימי עם סוריה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_alma",
     "url": "https://israel-alma.org/turkeys-force-buildup-for-the-syrian-navy/",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/144322/",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israeli-army-says-it-launched-interceptor-at-suspected-aerial-target-in-southern-lebanon/4104450",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965266/hezbollah-chief-calls-israeli-election-results-a-form-of-defeat-reject/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965266",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1382412",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-leader-rules-out-groups-disarmament",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132743",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49072",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25505",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94874",
     "accessed_at": "2026-10-29T06:27:35+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-28T17:06:33+00:00",
  "changes": {
   "NORTH-10290627-01": {
    "kind": "possible",
    "prev": "תקיפות אוויריות ירדניות בדרום סוריה",
    "score": 0.467
   },
   "NORTH-10290627-02": {
    "kind": "possible",
    "prev": "הצהרת מנהיג חיזבאללה על נשק הארגון והסכמים",
    "score": 0.4
   },
   "NORTH-10290627-03": {
    "kind": "new"
   },
   "NORTH-10290627-04": {
    "kind": "same",
    "from": "initial",
    "to": "assessment",
    "prev": "תוכנית בניין כוח ימית טורקית לסוריה",
    "score": 1.0
   }
  }
 }
};
