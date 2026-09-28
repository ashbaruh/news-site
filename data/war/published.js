/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-27T2340__yemen-202609272340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-27T23:40:31+00:00",
   "window": {
    "from": "2026-09-26T23:40:31+00:00",
    "to": "2026-09-27T23:40:31+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202609272340"
   },
   "summary": "הלחימה בתימן הסלימה מחדש בעקבות קריסת שביתת הנשק, כאשר החות'ים ביצעו מתקפה רחבה והשתלטו על חופי ים סוף ואזור מצר באב אל-מנדב. במקביל נרשמות התנגשויות עזות והפצצות הדדיות בחזית העיר תעז בין כוחות הממשלה הנתמכים בידי סעודיה לבין החות'ים. העימות גולש לפגיעה במטרות בעומק סעודיה וגורר פריסת מערכי הגנה בין-לאומיים לצד ניסיונות תיווך פוליטיים שלא הבשילו.",
   "fronts": [
    {
     "name": "חזית תעז ודרום-מערב תימן",
     "status": "קרבות עזים, תקיפות אוויריות והפגזות הדדיות שמובילות לנפגעים רבים בקרב אזרחים ולוחמים"
    },
    {
     "name": "חזית חוף ים סוף ומצר באב אל-מנדב",
     "status": "שליטה חות'ית ברצועת החוף ואיומי מצור על נתיבי שיט וייצוא אנרגיה"
    },
    {
     "name": "חזית תימן מול סעודיה",
     "status": "שיגורי כטב\"מים וטילים לעבר ערים ומתקני נפט סעודיים, לצד הפצצות אוויריות ותגבור מערכי הגנה צרפתיים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09272340-01",
     "title": "תקיפה אווירית נגד שוק באזור תעז והתרחבות הנפגעים",
     "summary": "הפצצה אווירית פגעה בשוק בפאתי העיר תעז. החות'ים טענו כי מטוסי קרב של סעודיה ביצעו את התקיפה וגרמו לעשרות נפגעים, בהם הרוגים וילדים פצועים, בעוד דיווחים מקבילים מציינים לפחות שבעה הרוגים ועשרות פצועים.",
     "axis": "תימן - חזית תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T12:41:22+00:00",
     "last_update_at": "2026-09-27T22:09:17+00:00",
     "what_is_not_verified": "זהות הגורם המבצע המדויק ומספר הנפגעים המוחלט שנויים במחלוקת בין הצדדים ואינם מאומתים באופן עצמאי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-say-saudi-strikes-yemens-taiz-leave-dozens-casualties",
       "published_at": "2026-09-27T22:09:17+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/27/deadly-strike-hits-market-in-yemens-taiz?traffic_source=rss",
       "published_at": "2026-09-27T21:00:55+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-yemens-taiz-kills-seven",
       "published_at": "2026-09-27T12:41:22+00:00"
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
     "id": "YEMEN-09272340-02",
     "title": "הסלמת פעולות צבא תימן והתקפות אוויריות נגד החות'ים בתעז",
     "summary": "כוחות ממשלת תימן הודיעו על ביצוע מאות פעולות צבאיות בימים האחרונים נגד מטרות חות'יות, וכן על תקיפות אוויריות נגד מצבורי אמצעי לחימה והתקהלויות של החות'ים מצפון וממזרח לתעז.",
     "axis": "פנים תימן - צבא הממשלה מול החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T13:36:01+00:00",
     "last_update_at": "2026-09-27T16:59:16+00:00",
     "what_is_not_verified": "היקף הפגיעה במצבורים ומספר הפעולות המדויק מבוססים על הודעות צד אחד בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153083",
       "published_at": "2026-09-27T16:59:16+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153082",
       "published_at": "2026-09-27T16:49:19+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/recap-iran-says-war-us-not-over",
       "published_at": "2026-09-27T13:36:01+00:00"
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
     "id": "YEMEN-09272340-03",
     "title": "הפגזת כפרים ממערב לעיר תעז בידי החות'ים",
     "summary": "כוחות חות'יים ביצעו הפגזות לעבר כפרי א-ד'באב הממוקמים ממערב לעיר תעז.",
     "axis": "פנים תימן - חזית תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T15:49:04+00:00",
     "last_update_at": "2026-09-27T15:49:04+00:00",
     "what_is_not_verified": "מידת הנזק או נפגעים בהפגזה זו לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153080",
       "published_at": "2026-09-27T15:49:04+00:00"
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
     "id": "YEMEN-09272340-04",
     "title": "יירוט כלי טיס בלתי מאוישים מעל שטח סעודיה והשבתת מוסדות חינוך בריאד",
     "summary": "סעודיה יירטה שני כלי טיס בלתי מאוישים ששוגרו על ידי החות'ים לעבר הבירה ריאד, ובעקבות האירועים הועברו מוסדות חינוך בעיר למתכונת למידה מרחוק.",
     "axis": "החות'ים מול סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-26T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T12:41:22+00:00",
     "last_update_at": "2026-09-27T12:41:22+00:00",
     "what_is_not_verified": "הסיבה הרשמית למעבר בתי הספר ללמידה מרחוק לא צוינה בהודעות להורים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-yemens-taiz-kills-seven",
       "published_at": "2026-09-27T12:41:22+00:00"
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
     "id": "YEMEN-09272340-05",
     "title": "הצבת אמצעי הגנה וחיילים מצרפת בסעודיה לבלימת מתקפות החות'ים",
     "summary": "צרפת הודיעה על שיגור כוחות, יחידות מכ\"ם ומערכות הגנה אווירית לשטח סעודיה, במטרה לסייע בהגנה מפני שיגורי טילים וכלי טיס בלתי מאוישים מתימן.",
     "axis": "הגנת סעודיה ומעורבות בין-לאומית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T14:21:45+00:00",
     "last_update_at": "2026-09-27T15:38:31+00:00",
     "what_is_not_verified": "היקף הכוחות והמערכות המדויק שיוצב בפועל טרם נקבע ותלוי בבקשות ריאד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/french-military-support-saudi-arabia-defensive-fm",
       "published_at": "2026-09-27T15:38:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/french-military-deployment-saudi-arabia-strictly-defensive-minister-says",
       "published_at": "2026-09-27T14:21:45+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      }
     ]
    },
    {
     "id": "YEMEN-09272340-06",
     "title": "השתלטות החות'ים על חופי ים סוף וניסיון מצור על נתיבי נפט",
     "summary": "כוחות החות'ים השתלטו על רצועת החוף בים סוף כולל אזור מצר באב אל-מנדב, ומפעילים לחץ ומצור על ייצוא האנרגיה ומתקני הנפט של סעודיה.",
     "axis": "הים האדום ומצר באב אל-מנדב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T12:41:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T12:41:22+00:00",
     "last_update_at": "2026-09-27T15:38:31+00:00",
     "what_is_not_verified": "רמת היעילות וההשפעה הממשית של המצור על משלוחי הנפט הסעודיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/french-military-support-saudi-arabia-defensive-fm",
       "published_at": "2026-09-27T15:38:31+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/saudi-strike-yemens-taiz-kills-seven",
       "published_at": "2026-09-27T12:41:22+00:00"
      }
     ],
     "places": [
      {
       "name": "באב אל-מנדב, תימן",
       "lat": 12.714,
       "lon": 43.5008
      }
     ]
    },
    {
     "id": "YEMEN-09272340-07",
     "title": "הצעת תיווך מטעם חמאס ליישוב הסכסוך בתימן",
     "summary": "הנהגת חמאס הודיעה כי הציעה את עצמה כמתווכת בין הצדדים הלוחמים בתימן במטרה לנסות ולהביא לרגיעה.",
     "axis": "מגעים מדיניים ויוזמות אזוריות",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T11:13:31+00:00",
     "last_update_at": "2026-09-27T19:49:08+00:00",
     "what_is_not_verified": "האם מי מהצדדים הלוחמים בתימן השיב או קיבל את הצעת התיווך.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130914",
       "published_at": "2026-09-27T19:49:08+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/hamas-chief-calls-talks-abbas-endorses-gaza-roadmap",
       "published_at": "2026-09-27T11:13:31+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09272340-08",
     "title": "מעצרי אזרחים והטלת מצור בידי החות'ים במחוז ד'מאר",
     "summary": "החות'ים עצרו עשרות אזרחים והטילו מצור על כפר במחוז ד'מאר עקב קיום חגיגות לציון מהפכת עשרים ושישה בספטמבר.",
     "axis": "פנים תימן - דיכוי חות'י",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T15:06:13+00:00",
     "last_update_at": "2026-09-27T15:06:13+00:00",
     "what_is_not_verified": "אין אימות עצמאי למספר העצורים ולמצב המצור בשטח מעבר לדיווח הסוכנות הרשמית של הממשלה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/153075",
       "published_at": "2026-09-27T15:06:13+00:00"
      }
     ],
     "places": [
      {
       "name": "ד'מאר, תימן",
       "lat": 14.543,
       "lon": 44.4001
      }
     ]
    }
   ],
   "not_verified": [
    "זהות כלי הטיס שפגעו בשוק בתעז ומספר ההרוגים והפצועים המדויק",
    "מידת ההצלחה והנזק של תקיפות צבא תימן על מחסני האמל\"ח החות'יים",
    "הסיבה הרשמית המלאה להשבתת מוסדות החינוך בריאד",
    "האם התקבל מענה רשמי ליוזמת התיווך שהציג חמאס בתימן"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "התנועה החות'ית",
     "declared": [
      "הטלת מצור ימי על ייצוא הנפט והאנרגיה של סעודיה",
      "תגובה ותגמול צבאי על תקיפות אוויריות בשטח תימן"
     ],
     "inferred": [
      "ביסוס אחיזה מלאה בנתיבי השיט בים סוף ובמצר באב אל-מנדב כמנוף לחץ אזורי",
      "הרחבת השליטה הטריטוריאלית באזורי מפתח כמו תעז ומארב על חשבון כוחות הממשלה"
     ],
     "forecast": [
      "המשך ניסיונות שיגור כטב\"מים וטילים אל עבר עומק סעודיה ומתקני אנרגיה",
      "החרפת העימותים הקרקעיים במערב תימן ובחזית תעז"
     ]
    },
    {
     "actor": "סעודיה וממשלת תימן",
     "declared": [
      "הגנה על שטח סעודיה, עריה ומתקני הנפט מפני איומים",
      "בלימת המרד וההתקפות החות'יות על מוקדי שלטון ותשתיות"
     ],
     "inferred": [
      "הסתמכות גוברת על מערכות הגנה וסיוע צבאי מערבי לסיכול מתקפות אוויריות",
      "שימור שרידי השליטה הצבאית במוקדים אסטרטגיים כמו העיר תעז"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות של חיל האוויר נגד יעדי אמל\"ח והתקהלויות חות'יות",
      "הידוק שיתוף הפעולה ההגנתי מול שותפות בין-לאומיות במרחב הים האדום"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/9/27/deadly-strike-hits-market-in-yemens-taiz?traffic_source=rss",
     "accessed_at": "2026-09-27T23:40:31+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/french-military-deployment-saudi-arabia-strictly-defensive-minister-says",
     "accessed_at": "2026-09-27T23:40:31+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/hamas-chief-calls-talks-abbas-endorses-gaza-roadmap",
     "accessed_at": "2026-09-27T23:40:31+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/153075",
     "accessed_at": "2026-09-27T23:40:31+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130914",
     "accessed_at": "2026-09-27T23:40:31+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-26T23:53:15+00:00",
  "changes": {
   "YEMEN-09272340-01": {
    "kind": "new"
   },
   "YEMEN-09272340-02": {
    "kind": "possible",
    "prev": "תקיפות של כוחות תימניים נגד מוצבי חות'ים",
    "score": 0.633
   },
   "YEMEN-09272340-03": {
    "kind": "possible",
    "prev": "התקדמות כוחות הממשלה מול החות'ים והרוגים בעימותים",
    "score": 0.633
   },
   "YEMEN-09272340-04": {
    "kind": "new"
   },
   "YEMEN-09272340-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "אזהרת בכירים משימוש החות'ים באמצעי הגנה אווירי",
    "score": 0.65
   },
   "YEMEN-09272340-06": {
    "kind": "new"
   },
   "YEMEN-09272340-07": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "הצעת תיווך של חמאס בין הצדדים בתימן",
    "score": 0.65
   },
   "YEMEN-09272340-08": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-28T0547__iran-202609280547.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-28T05:47:10+00:00",
   "window": {
    "from": "2026-09-27T05:47:10+00:00",
    "to": "2026-09-28T05:47:10+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609280547"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך בשטח ובמישור הדיפלומטי, כאשר ארה\"ב דוחה את הצעות הפשרה של טהרן בנוגע למצר הורמוז ומגבירה את הלחץ הכלכלי והצבאי. במקביל, נרשמים אירועים מבצעיים כולל תקיפות באזור המפרץ, פעילות נגד נכסים אמריקאיים ומתיחות גוברת סביב צירי השיט והאנרגיה.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פעיל ומתוח עם עימותים ימיים וסגירת נתיבים"
    },
    {
     "name": "הזירה המדינית-בינלאומית",
     "status": "קיפאון מדיני וחילופי האשמות באו\"ם"
    }
   ],
   "events": [
    {
     "id": "IRAN-09280547-01",
     "title": "תקיפת כלי שיט במצר הורמוז",
     "summary": "נחתים אמריקאים נפגעו מפגיעת טיל שיוט איראני בכלי שיט במצר הורמוז.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-14T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-28T03:58:00+00:00",
     "last_update_at": "2026-09-28T05:44:58+00:00",
     "what_is_not_verified": "סוג כלי השיט ושמו לא נמסרו על ידי הגורמים הרשמיים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_nbc",
       "url": "https://t.me/abualiexpress/130921",
       "published_at": "2026-09-28T05:44:58+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_nbc",
       "url": "https://www.maariv.co.il/breaking-news/article-1371370",
       "published_at": "2026-09-28T03:58:00+00:00"
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
     "id": "IRAN-09280547-02",
     "title": "עמדות איראניות באו\"ם ובכירים איראנים על שלום ודיפלומטיה",
     "summary": "בכירים באיראן, בהם שר החוץ והנשיא, הצהירו כי הגיעו לעצרת האו\"ם בניו יורק כדי לכונן שלום אך נותרו איתנים מול תוקפנות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T19:34:56+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T19:34:56+00:00",
     "last_update_at": "2026-09-28T03:31:08+00:00",
     "what_is_not_verified": "הכוונה המעשית מאחורי הצהרות השלום לאומת המצב בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_74b02f6acc6f42ef",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-iran-came-new-york-forge-peace",
       "published_at": "2026-09-28T03:31:08+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_74b02f6acc6f42ef",
       "url": "https://www.aljazeera.com/news/liveblog/2026/9/28/iran-war-live-tehran-warns-its-fully-prepared-for-war-amid-hormuz-tensions?traffic_source=rss",
       "published_at": "2026-09-28T00:00:00+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_362612afe14ee7d3",
       "url": "https://en.irna.ir/news/86276558/Araghchi-says-he-and-President-Pezeshkian-came-to-New-York-to",
       "published_at": "2026-09-27T20:34:25+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_74b02f6acc6f42ef",
       "url": "https://en.irna.ir/news/86276544/No-plan-for-Iran-delegation-to-hold-talks-with-US-in-New-York",
       "published_at": "2026-09-27T19:34:56+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארה\"ב",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "IRAN-09280547-03",
     "title": "דחיית הצעה איראנית להפסקת אש ופתיחת מצר הורמוז",
     "summary": "נשיא ארה\"ב דונלד טראמפ והממשל האמריקאי דחו הצעה איראנית להפסקת אש בת שבעה ימים ופתיחת מצר הורמוז בתמורה להסרת סנקציות.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T06:34:43+00:00",
     "last_update_at": "2026-09-27T22:10:44+00:00",
     "what_is_not_verified": "מועד החידוש המדויק של השיחות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_e9a20f6d3c1b0752",
       "url": "https://www.france24.com/en/middle-east/20260927-trump-expects-iran-talks-next-week-after-rejecting-seven-day-truce-proposal",
       "published_at": "2026-09-27T22:10:44+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_e9a20f6d3c1b0752",
       "url": "https://www.al-monitor.com/originals/2026/09/washington-denounces-irans-truce-proposal-cynical",
       "published_at": "2026-09-27T16:30:20+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_e9a20f6d3c1b0752",
       "url": "https://www.theguardian.com/us-news/2026/sep/27/trump-un-ambassador-iran-war",
       "published_at": "2026-09-27T16:28:05+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_ec23dd50b1ff9826",
       "url": "https://www.theguardian.com/world/2026/sep/26/trump-dismiss-iran-seven-day-peace-deal-hormuz",
       "published_at": "2026-09-27T06:34:43+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09280547-04",
     "title": "מעצר חשודים בטרור ליד בסיס חיל האוויר הבריטי-אמריקאי פיירפורד",
     "summary": "משטרת בריטניה עצרה חמישה חשודים בחשד לעבירות נפץ וטרור סמוך לבסיס פיירפורד ששימש את ארה\"ב לתקיפות באיראן.",
     "axis": "איראן מול ארה\"ב ובריטניה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T07:46:37+00:00",
     "last_update_at": "2026-09-27T15:57:10+00:00",
     "what_is_not_verified": "הקשר הוודאי של איראן לתקיפה שסוכלו (נבדק על ידי המשטרה ונחשב לחשד סביר).",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21500801",
       "published_at": "2026-09-27T15:57:10+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hknexticze",
       "published_at": "2026-09-27T15:52:16+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/trump-says-men-arrested-uk-air-base-used-us-were-looking-do-big-damage",
       "published_at": "2026-09-27T07:46:37+00:00"
      }
     ],
     "places": [
      {
       "name": "פיירפורד, בריטניה",
       "lat": 51.7108,
       "lon": -1.782
      }
     ]
    },
    {
     "id": "IRAN-09280547-05",
     "title": "לכידת צוללת אוטונומית אמריקאית במצר הורמוז",
     "summary": "הצבא האיראני הודיע על לכידת צוללת אוטונומית שנייה של צבא ארה\"ב מסוג רימוס 600 במצר הורמוז.",
     "axis": "איראן מול ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T12:00:42+00:00",
     "last_update_at": "2026-09-27T12:00:42+00:00",
     "what_is_not_verified": "פרטי האירוע המדויקים מדווחים מצד גורמים איראניים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130879",
       "published_at": "2026-09-27T12:00:42+00:00"
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
    "מעורבות ישירה של איראן בניסיון הפיגוע שסוכל בבסיס פיירפורד בבריטניה נמצאת בבדיקה משטרתית ולא אומתה סופית.",
    "זהות כלי השיט שהותקף במצר הורמוז ב-14 בספטמבר לפי דיווח NBC.",
    "טענות על היקף מדויק של מלאי הנפט שנותר לסחר איראני מול סין."
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגעה לניו יורק כדי לכונן שלום",
      "עמידה איתנה מול כל תוקפנות"
     ],
     "inferred": [
      "שאיפה להסרת הסנקציות והמצור הימי בתמורה לפתיחת נתיבי השיט",
      "המשך לחץ באמצעות שלוחים ונכסים ימיים במפרץ"
     ],
     "forecast": [
      "המשך פעילות צבאית עקיפה וישירה במצר הורמוז",
      "חיפוש אפיקים דיפלומטיים עוקפים לשיכוך הלחץ הכלכלי"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הפעלת לחץ כלכלי וצבאי מקסימלי על איראן",
      "דחיית הצעות משא ומתן המותנות בהסרת סנקציות מראש"
     ],
     "inferred": [
      "רצון להביא לייבוש מוחלט של יכולות הסחר והייצוא האיראניות",
      "שמירה על חופש השיט במצר הורמוז בכוח הזרוע"
     ],
     "forecast": [
      "החמרת הלחץ הכלכלי בשבועות הקרובים",
      "היערכות לתגובות צבאיות נוספות במידה ותמשכנה תקיפות איראניות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/liveblog/2026/9/28/iran-war-live-tehran-warns-its-fully-prepared-for-war-amid-hormuz-tensions?traffic_source=rss",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/trump-says-men-arrested-uk-air-base-used-us-were-looking-do-big-damage",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260927-trump-expects-iran-talks-next-week-after-rejecting-seven-day-truce-proposal",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/26/trump-dismiss-iran-seven-day-peace-deal-hormuz",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86276544/No-plan-for-Iran-delegation-to-hold-talks-with-US-in-New-York",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21500801",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1371370",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/araghchi-says-iran-came-new-york-forge-peace",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130879",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hknexticze",
     "accessed_at": "2026-09-28T05:47:10+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-27T15:16:51+00:00",
  "changes": {
   "IRAN-09280547-01": {
    "kind": "new"
   },
   "IRAN-09280547-02": {
    "kind": "new"
   },
   "IRAN-09280547-03": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "דחיית ההצעה האיראנית בידי נשיא ארה\"ב",
    "score": 1.0
   },
   "IRAN-09280547-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מעצר חשודים בקרבת בסיס חיל האוויר פיירפורד בבריטניה",
    "score": 1.0
   },
   "IRAN-09280547-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תפיסת כלי שיט תת-ימי בלתי מאויש במצר הורמוז",
    "score": 1.0
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-27T1531__ukraine-202609271531.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-27T15:31:14+00:00",
   "window": {
    "from": "2026-09-26T15:31:14+00:00",
    "to": "2026-09-27T15:31:14+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202609271531"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה מתאפיינת בהמשך מתקפות כטב\"מים רוסיות מסיביות על מתקני תשתית, תקשורת ומבני מגורים בקייב ובערים נוספות, במקביל למאמץ אוקראיני מתמשך בגזרות המזרח ובראשן גזרת לימאן. בדרום המדינה, בגזרת חרסון, גובר הלחץ ההומניטרי על יישובים כבושים ומנותקים כמו אולשקי, שם פועלים כוחות אוקראיניים להצנחת אספקה באמצעות רחפנים תחת אש ויירוטים. בזירה המדינית נרשמת מתיחות גוברת סביב ניסיונות חבלה וסיוע צבאי, כאשר פולין מקדמת תוכניות ייצור חימוש ומגעים דיפלומטיים נדירים בין רוסיה לגרמניה מסתיימים ללא פריצת דרך.",
   "fronts": [
    {
     "name": "גזרת לימאן (דונצק)",
     "status": "פעילות התקפית אוקראינית במסגרת מבצע ויוואלדי ולחימה כבדה"
    },
    {
     "name": "חזית חרסון (אולשקי)",
     "status": "מצור רוסי על יישובים בגדה המזרחית של הדנייפר ומבצעי אספקה אוקראיניים באמצעות רחפנים"
    },
    {
     "name": "גזרות פוקרובסק וקונסטנטינובקה",
     "status": "קרבות עזים המוגדרים על ידי אוקראינה כמוקדי הלחימה הכבדים ביותר"
    },
    {
     "name": "העורף האוקראיני (קייב, זפוריז'יה, פסטוב, וישנבה)",
     "status": "ספיגת מתקפות כטב\"מים וטילים רוסיים לעבר מטרות אזרחיות, לוגיסטיות ותשתיות תקשורת"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09271531-01",
     "title": "פגיעת כטב\"ם סילוני בבניין מגורים ברובע דרניצקי בקייב",
     "summary": "כטב\"ם סילוני פגע בבניין מגורים בן תשע קומות ברובע דרניצקי שבקייב, גרם לשריפה בקומות העליונות ופצע אישה.",
     "axis": "חזית האוויר והעורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T14:51:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T14:51:00+00:00",
     "last_update_at": "2026-09-27T15:18:00+00:00",
     "what_is_not_verified": "היקף הנפגעים המלא טרם הוברר סופית בדיווחים הראשוניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055256/",
       "published_at": "2026-09-27T15:18:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4168564-drone-hits-apartment-building-in-kyivs-darnytskyi-district.html",
       "published_at": "2026-09-27T14:51:00+00:00"
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
     "id": "UKRAINE-09271531-02",
     "title": "פגיעות כטב\"מים במבנים אדמיניסטרטיביים ובמרכז תקשורת בקייב",
     "summary": "מבנה משרדים ומבנים שאינם למגורים נפגעו ברובע הולוסייבסקי ובאזורים נוספים בקייב, לצד פגיעה במשרדי חברת התקשורת קייבסטאר.",
     "axis": "חזית האוויר והעורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T07:25:02+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T07:25:02+00:00",
     "last_update_at": "2026-09-27T13:43:00+00:00",
     "what_is_not_verified": "רוסיה טענה שתקפה חוות שרתים של וודאפון, בעוד הצד האוקראיני דיווח על פגיעה בקייבסטאר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4168558-administrative-building-hit-in-kyivs-holosiivskyi-district.html",
       "published_at": "2026-09-27T13:43:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055250/",
       "published_at": "2026-09-27T13:19:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055241/",
       "published_at": "2026-09-27T11:53:00+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2193565",
       "published_at": "2026-09-27T07:25:02+00:00"
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
     "id": "UKRAINE-09271531-03",
     "title": "מבצע הטסת מזון ברחפנים לאולשקי הכבושה",
     "summary": "כוחות אוקראיניים העבירו באמצעות רחפנים כארבע טונות של מוצרי מזון לכמאה נקודות חלוקה בעיר אולשקי הנתונה תחת כיבוש רוסי וסובלת ממצור ומחסור חמור.",
     "axis": "חזית חרסון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T06:21:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T06:21:26+00:00",
     "last_update_at": "2026-09-27T13:23:00+00:00",
     "what_is_not_verified": "התאריך המדויק שבו נערך המבצע הספציפי והמספר המדויק של התושבים שנותרו בעיר (נע בין 2,000 ל-6,000 לפי מקורות שונים)",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48036",
       "published_at": "2026-09-27T13:23:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-military-delivers-4-tons-of-food-to-occupied-oleshky-by-drones-regional-authorities-said/",
       "published_at": "2026-09-27T13:08:41+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055242/",
       "published_at": "2026-09-27T12:05:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/27/hell-on-earth-last-residents-eat-weeds-to-survive-in-russian-occupied-oleshky",
       "published_at": "2026-09-27T11:00:04+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/feature/2026/09/27/a-humanitarian-crisis-is-gripping-russian-occupied-oleshky-as-food-deliveries-stop-and-safe-evacuation-becomes-nearly-impossible",
       "published_at": "2026-09-27T06:21:26+00:00"
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
     "id": "UKRAINE-09271531-04",
     "title": "התקדמות אוקראינית ומבצע ויוואלדי בגזרת לימאן",
     "summary": "נשיא אוקראינה דיווח על השגת תוצאות במסגרת מבצע התקפי בגזרת לימאן, וטען לנטרול של מעל עשרת אלפים חיילים רוסים במהלך השבוע בחזיתות השונות.",
     "axis": "חזית מזרח אוקראינה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T12:21:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T12:21:00+00:00",
     "last_update_at": "2026-09-27T13:35:28+00:00",
     "what_is_not_verified": "נתוני אבדות הרוסים ופירוט השטחים שנכבשו במבצע",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/zelensky-says-over-10-000-russian-troops-killed-or-wounded-this-week-as-ukrainian-military-advances-in-lyman-sector/",
       "published_at": "2026-09-27T13:35:28+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055245/",
       "published_at": "2026-09-27T12:35:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4168542-more-than-10600-russian-military-personnel-neutralized-at-front-over-past-week-zelensky.html",
       "published_at": "2026-09-27T12:21:00+00:00"
      }
     ],
     "places": [
      {
       "name": "לימאן, אוקראינה",
       "lat": 48.9801,
       "lon": 37.8168
      }
     ]
    },
    {
     "id": "UKRAINE-09271531-05",
     "title": "הצעת פולין להקמת מפעל לייצור טילי פטריוט בשטחה",
     "summary": "סגנית שר ההגנה של פולין הצהירה על נכונות ארצה לארח מפעל לייצור טילי יירוט למערכת פטריוט בשטחה כדי להבטיח את מיקומו באזור בטוח, במידה ואוקראינה תקבל רישיון ייצור.",
     "axis": "סיוע צבאי ורכש בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T13:23:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T13:23:00+00:00",
     "last_update_at": "2026-09-27T13:23:00+00:00",
     "what_is_not_verified": "האם יינתן אישור סופי ורישיון מארצות הברית והיכן המפעל יוקם בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_rmf24",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055251/",
       "published_at": "2026-09-27T13:23:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09271531-06",
     "title": "תקיפת צבא אוקראינה על אתר שיגור כטב\"מים ומחסני אויב בשטחים כבושים",
     "summary": "כוחות ההגנה של אוקראינה תקפו אתר שיגור של רחפני תקיפה וארבעה מחסני תחמושת ודלק של הכוחות הרוסיים בשטחים הנתונים לכיבוש.",
     "axis": "השטחים הכבושים במזרח ובדרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T11:28:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T11:28:00+00:00",
     "last_update_at": "2026-09-27T11:28:00+00:00",
     "what_is_not_verified": "המיקומים המדויקים של האתרים והיקף הנזק המאומת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4168528-defense-forces-strike-drone-launch-site-and-four-russian-warehouses-in-tot.html",
       "published_at": "2026-09-27T11:28:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09271531-07",
     "title": "מפגש ראשון בין שרי החוץ של גרמניה ורוסיה",
     "summary": "שר החוץ של גרמניה יוהאן ודפול נועד בניו יורק עם שר החוץ של רוסיה סרגיי לברוב וקרא להפסקת התוקפנות וההסלמה, בעוד לברוב דחה את הדברים והאשים את גרמניה בליבוי המלחמה.",
     "axis": "דיפלומטיה ויחסים בינלאומיים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T01:44:50+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T01:44:50+00:00",
     "last_update_at": "2026-09-27T02:30:02+00:00",
     "what_is_not_verified": "תוכן השיחות הסגורות מעבר להצהרות הרשמיות של הצדדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/27/ukraine-war-briefing-german-foreign-minister-urges-russia-to-abandon-dangerous-escalation-in-rare-meeting",
       "published_at": "2026-09-27T02:30:02+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/german-russian-foreign-ministers-meet-for-1st-time-since-full-scale-war-against-ukraine/",
       "published_at": "2026-09-27T01:44:50+00:00"
      }
     ],
     "places": [
      {
       "name": "ניו יורק, ארצות הברית",
       "lat": 40.7127,
       "lon": -74.006
      }
     ]
    },
    {
     "id": "UKRAINE-09271531-08",
     "title": "השמדת מחסן של חברת קרכר בתקיפה רוסית",
     "summary": "מחסן ציוד וסחורות של חברת קרכר נהרס כתוצאה ממתקפה רוסית, ללא נפגעים בקרב העובדים אך עם שיבושים צפויים באספקה.",
     "axis": "חזית האוויר והעורף האוקראיני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T13:26:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T13:26:00+00:00",
     "last_update_at": "2026-09-27T13:26:00+00:00",
     "what_is_not_verified": "המיקום המדויק של המחסן בתוך שטח אוקראינה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_5fd3b3eb862a4d5d",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055252/",
       "published_at": "2026-09-27T13:26:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת רוסיה כי הותקף מרכז נתונים של וודאפון בקייב לעומת הודעת אוקראינה על פגיעה במשרדי קייבסטאר",
    "המספר המדויק של הנפגעים והאבדות בקרב כוחות הצבא הרוסי (דיווח על 10,660 בשבוע)",
    "מספר התושבים המדויק שנותרו באולשקי (הערכות שנעות בין 2,000 ל-6,000)",
    "מיקומי הפגיעה המדויקים של התקיפה האוקראינית על מחסני הצבא ואתרי השיגור בשטחים הכבושים"
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
     "value": 1.1403,
     "unit": "USD",
     "change_pct": 0.32,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "המשך שחרור שטחים כבושים ופגיעה בכוח האדם של הצבא הרוסי",
      "אספקת סיוע הומניטרי דחוף לאזרחים אוקראינים הלכודים תחת כיבוש באולשקי",
      "השגת רישיונות ייצור ורכש מסיבי של טילי יירוט למערכות פטריוט"
     ],
     "inferred": [
      "הגנה מרבית על מתקני תקשורת ומידע מפני גלי תקיפות רוסיים ממוקדים",
      "הסתמכות גוברת על טכנולוגיית רחפנים לפעילות מבצעית ולוגיסטית באזורים מנותקים"
     ],
     "forecast": [
      "המשך לחץ התקפי בצפון מחוז דונצק לצד ניסיונות לשמר קווי אספקה הומניטריים מעבר לדנייפר"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה במרכזי תקשורת ואינטרנט המשמשים את הצבא האוקראיני",
      "מניעת פעילות ושיקום של תשתיות בידי הצד האוקראיני באזורי העימות"
     ],
     "inferred": [
      "שיתוק רשתות התקשורת והשידור באוקראינה באמצעות פגיעה חוזרת במרכזי נתונים",
      "הפעלת לחץ אזרחי ובידוד מוחלט של כיסים מיושבים באזורי שליטתה בדרום",
      "הרתעת מדינות אירופה מהעמקת הסיוע הצבאי לאוקראינה"
     ],
     "forecast": [
      "המשך גלי תקיפות כטב\"מים על תשתיות מפתח וערי אוקראינה לקראת החורף"
     ]
    },
    {
     "actor": "מדינות המערב (גרמניה, פולין)",
     "declared": [
      "דרישה מרוסיה להפסיק את התוקפנות וההסלמה הביטחונית",
      "היערכות פולנית לאירוח מתקני ייצור ומרכזי שירות לטילי פטריוט לצורכי הגנה"
     ],
     "inferred": [
      "רצון להבטיח את שרשרת ייצור החימוש בשטח בטוח מחוץ לטווח התקיפות הרוסיות באוקראינה",
      "הידוק הצעדים נגד פעילות ריגול וחבלה רוסית בשטח מדינות נאט\"ו"
     ],
     "forecast": [
      "האצת תוכניות ייצור ורכש ביטחוני במזרח אירופה לצד המשך קיפאון מדיני מלא מול מוסקבה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/27/ukraine-war-briefing-german-foreign-minister-urges-russia-to-abandon-dangerous-escalation-in-rare-meeting",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/german-russian-foreign-ministers-meet-for-1st-time-since-full-scale-war-against-ukraine/",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/09/27/a-humanitarian-crisis-is-gripping-russian-occupied-oleshky-as-food-deliveries-stop-and-safe-evacuation-becomes-nearly-impossible",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/27/8055252/",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/defense/2193565",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48036",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4168528-defense-forces-strike-drone-launch-site-and-four-russian-warehouses-in-tot.html",
     "accessed_at": "2026-09-27T15:31:14+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-26T23:41:57+00:00",
  "changes": {
   "UKRAINE-09271531-01": {
    "kind": "possible",
    "prev": "תקיפות רוסיות על קייב",
    "score": 0.633
   },
   "UKRAINE-09271531-02": {
    "kind": "possible",
    "prev": "פגיעה במפעל פרמצבטי בקייב",
    "score": 0.633
   },
   "UKRAINE-09271531-03": {
    "kind": "new"
   },
   "UKRAINE-09271531-04": {
    "kind": "new"
   },
   "UKRAINE-09271531-05": {
    "kind": "new"
   },
   "UKRAINE-09271531-06": {
    "kind": "new"
   },
   "UKRAINE-09271531-07": {
    "kind": "new"
   },
   "UKRAINE-09271531-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-27T2342__north-202609272342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-27T23:42:01+00:00",
   "window": {
    "from": "2026-09-26T23:42:01+00:00",
    "to": "2026-09-27T23:42:01+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202609272342"
   },
   "summary": "בגזרה הצפונית נמשכת הלחימה המקומית בדרום לבנון עם תקיפות אוויריות ישראליות בתגובה להפעלת כטב\"מים, חרף קיומו של הסכם מסגרת. במקביל, הנהגת חיזבאללה מתעקשת לשמר את קו ההתנגדות ולהיאבק פוליטית בהסכמי הממשלה הלבנונית, לצד ניסיונות ייצוב אזרחי. במקביל, בסוריה נרשמת פעילות ביטחונית נגד תאי טרור, לצד חידוש כשירות טיסות לילה בנמלי התעופה לאחר הסרת עיכוב ישראלי ממושך, בעוד המתיחות המדינית בין ישראל לטורקיה מחריפה סביב מהלכים משפטיים הדדיים.",
   "fronts": [
    {
     "name": "דרום לבנון (ישראל מול חיזבאללה)",
     "status": "חילופי אש ותקיפות תגובה של חיל האוויר הישראלי בעקבות שיגורי רחפנים"
    },
    {
     "name": "הזירה הפוליטית בלבנון",
     "status": "מתיחות גוברת בין חיזבאללה לשלטון המרכזי סביב משא ומתן מול ישראל וסוגיית העקורים"
    },
    {
     "name": "סוריה (ביטחון פנים ותעופה)",
     "status": "פעילות נגד תאי דאעש, הפעלת מערכות טיסה ליליות והפגנות על הפקעת מקרקעין"
    },
    {
     "name": "ישראל מול טורקיה",
     "status": "הסלמה מדינית-משפטית על רקע צווי מעצר והכנת תביעות בינלאומיות"
    }
   ],
   "events": [
    {
     "id": "NORTH-09272342-01",
     "title": "תקיפות חיל האוויר הישראלי בדרום לבנון בתגובה לשיגור רחפן",
     "summary": "כוחות ישראליים תקפו מהאוויר יעדים שונים בדרום לבנון, לרבות מרכז מסחרי ואתרים המשמשים לשיגור כטב\"מים וטילי נ\"ט, לאחר שרחפן נפץ שוגר לעבר כוחות צה\"ל הפועלים ברצועת הביטחון.",
     "axis": "ישראל–לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T06:28:08+00:00",
     "last_update_at": "2026-09-27T20:57:38+00:00",
     "what_is_not_verified": "היקף הנזקים המלא והאם היו נפגעים בתקיפות השונות בלבנון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/9/27/israeli-strikes-continue-in-southern-lebanon-despite-ceasefire?traffic_source=rss",
       "published_at": "2026-09-27T20:57:38+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/960017/what-comes-after-ali-al-taher-mapping-out-israels-next-move-in-souther/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960017",
       "published_at": "2026-09-27T14:23:07+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/recap-iran-says-war-us-not-over",
       "published_at": "2026-09-27T13:36:01+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130880",
       "published_at": "2026-09-27T12:25:06+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-continue-to-hit-southern-lebanon-despite-framework-deal/4070714",
       "published_at": "2026-09-27T10:38:29+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25229",
       "published_at": "2026-09-27T06:28:08+00:00"
      }
     ],
     "places": [
      {
       "name": "מיפדון, לבנון",
       "lat": 33.3451,
       "lon": 35.4741
      },
      {
       "name": "אל-חיאם, לבנון",
       "lat": 33.3272,
       "lon": 35.609
      },
      {
       "name": "סג'וד, לבנון",
       "lat": 33.4323,
       "lon": 35.5355
      }
     ]
    },
    {
     "id": "NORTH-09272342-02",
     "title": "נאום נעים קאסם לציון שנתיים למות נסראללה",
     "summary": "מזכ\"ל חיזבאללה הצהיר על המשך ההתנגדות החמושה נגד ישראל, דחה הסכמים וכניעה לטענתו של השלטון הלבנוני, והודיע על כוונה להשתתף במיזם לשיכון עקורים מן הלחימה.",
     "axis": "לבנון (חיזבאללה)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T12:27:13+00:00",
     "last_update_at": "2026-09-27T19:47:46+00:00",
     "what_is_not_verified": "פרטי מיזם השיכון והתקציבים שלו אינם מפורטים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f38aeaeb998d1a2a",
       "url": "https://english.almanar.com.lb/article/131427/",
       "published_at": "2026-09-27T19:47:46+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_f38aeaeb998d1a2a",
       "url": "https://www.al-monitor.com/originals/2026/09/hezbollah-plans-contribute-project-house-thousands-lebanese-displaced-chief-says",
       "published_at": "2026-09-27T17:46:55+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_f38aeaeb998d1a2a",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/hezbollah-chief-says-israel-unable-break-resistance",
       "published_at": "2026-09-27T15:51:19+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_3ce92d653f08ac57",
       "url": "https://english.almanar.com.lb/article/131372/",
       "published_at": "2026-09-27T15:44:50+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_35999b65dbc0cef3",
       "url": "https://english.almanar.com.lb/article/131362/",
       "published_at": "2026-09-27T15:40:40+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f324b22b00f2bbbc",
       "url": "https://english.almanar.com.lb/article/131347/",
       "published_at": "2026-09-27T15:37:45+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "fh_f38aeaeb998d1a2a",
       "url": "https://www.ynet.co.il/news/article/sjsmxjl5fx",
       "published_at": "2026-09-27T15:15:46+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_f38aeaeb998d1a2a",
       "url": "https://t.me/abualiexpress/130898",
       "published_at": "2026-09-27T14:59:22+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_f38aeaeb998d1a2a",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/960005/qassem-hezbollah-committed-to-resistance-reconstruction-and-full-liber/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960005",
       "published_at": "2026-09-27T12:27:13+00:00"
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
     "id": "NORTH-09272342-03",
     "title": "הסרת ההתנגדות הישראלית להפעלת מערכות ניווט בשדות תעופה בסוריה",
     "summary": "רשות התעופה האזרחית בסוריה הודיעה על סיום כיול ובדיקות טיסה למערכות ניווט חדישות בשדות התעופה בדמשק ובחלב, לאחר שדווח כי ישראל הסירה התנגדות ממושכת לבדיקות הכיול.",
     "axis": "ישראל–סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T17:00:35+00:00",
     "last_update_at": "2026-09-27T17:00:35+00:00",
     "what_is_not_verified": "עצם ההסכמה הישראלית השקטה מבוססת על מקורות דיפלומטיים ולא על אישור ישראלי רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/israel-quietly-lifts-block-syrian-airport-night-flights",
       "published_at": "2026-09-27T17:00:35+00:00"
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
     "id": "NORTH-09272342-04",
     "title": "הוראת נתניהו להכנת תיק משפטי נגד ארדואן",
     "summary": "ראש ממשלת ישראל הורה לצוות בין-משרדי להכין תיק משפטי נגד נשיא טורקיה בעקבות מהלכים טורקיים באינטרפול, תוך התמקדות ביחסי אנקרה עם חמאס והכורדים.",
     "axis": "ישראל–טורקיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T20:07:23+00:00",
     "last_update_at": "2026-09-27T21:30:29+00:00",
     "what_is_not_verified": "האם התיק המשפטי אכן יוגש בפועל לערכאה בינלאומית או ישמש כמנוף לחץ בלבד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_i24news",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/netanyahu-orders-preparation-possible-legal-case-against-erdogan-report",
       "published_at": "2026-09-27T21:30:29+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_i24news",
       "url": "https://t.me/alexmehacarmel/48047",
       "published_at": "2026-09-27T20:07:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09272342-05",
     "title": "סיכול חוליית דאעש בסוריה",
     "summary": "כוחות הביטחון בסוריה פירקו חוליה של ארגון המדינה האסלאמית שפעלה בארבעה מחוזות וביצעה חטיפות, התנקשויות והנחת מטענים.",
     "axis": "סוריה (פנים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T23:00:57+00:00",
     "last_update_at": "2026-09-27T23:00:57+00:00",
     "what_is_not_verified": "זהות ארבעת המחוזות המדויקים ומספר העצורים בחוליה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/world/syria-dismantles-isis-cell-operating-across-4-provinces/4071099",
       "published_at": "2026-09-27T23:00:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09272342-06",
     "title": "הפגנות ומתיחות סביב מיזמי בנייה באזור דמשק",
     "summary": "חברת נדל\"ן איימה בהליכים משפטיים נגד מפגינים שמחו על הפקעת קרקעות לטובת פרויקטים למגורים וריססו כתובות נגד שלטון אסד במתחם העבודות.",
     "axis": "סוריה (פנים)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-27T19:08:54+00:00",
     "last_update_at": "2026-09-27T19:08:54+00:00",
     "what_is_not_verified": "האם המפגינים מחזיקים בבעלות חוקית מתועדת על הקרקעות שהופקעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/09/damascus-abyat-real-estate-threatens-legal-action-against-project-opponents/",
       "published_at": "2026-09-27T19:08:54+00:00"
      }
     ],
     "places": [
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      },
      {
       "name": "קודסיא, סוריה",
       "lat": 33.5491,
       "lon": 36.2107
      }
     ]
    },
    {
     "id": "NORTH-09272342-07",
     "title": "קריאת שר האוצר הישראלי לסיפוח שטחים בדרום לבנון",
     "summary": "בצלאל סמוטריץ' קרא בפודקאסט לספח שטח בלבנון עד לנהר הליטני כדי למנוע הישנות של מלחמה וליצור הרתעה.",
     "axis": "ישראל–לבנון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-27T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-27T20:10:24+00:00",
     "last_update_at": "2026-09-27T20:10:24+00:00",
     "what_is_not_verified": "האם מדובר בעמדת ממשלה רשמית או בהצהרה פוליטית אישית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_ynet",
       "url": "https://www.newarab.com/news/smotrich-calls-west-bank-war-annexation-lebanon-gaza",
       "published_at": "2026-09-27T20:10:24+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענת ישראל בדבר העברת מפקדים ואמל\"ח של חיזבאללה לחבל אקלים א-תפאח",
    "הדיווח הלא-רשמי לפיו ישראל הסירה את התנגדותה לטיסות הכיול בסוריה",
    "הסיבות המדויקות לסדרת הפיצוצים במחסני תחמושת בסוריה במהלך ספטמבר",
    "היקף מעורבותה ומימונה של ממשלת טורקיה בארגון חמאס כפי שנטען בתיק הישראלי"
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
     "value": 3.0338,
     "unit": "ILS",
     "change_pct": -0.47,
     "source_id": "src_ecb",
     "as_of": "2026-09-25T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "המשך ההתנגדות המזוינת נגד ישראל עד לשחרור מלא של כל האדמות הלבנוניות",
      "דחיית כל הסכם כניעה או ויתור של השלטון הלבנוני וחזרה למשא ומתן עקיף בלבד",
      "סיוע בשיכון אלפי עקורים כתוצאה מהמלחמה"
     ],
     "inferred": [
      "הפעלת לחץ פוליטי על ממשלת לבנון כדי למנוע הסדרים מדיניים שאינם נוחים לארגון",
      "שיקום מעמדו הציבורי בקרב האוכלוסייה השיעית והלבנונית שנפגעה בלחימה"
     ],
     "forecast": [
      "המשך חיכוך צבאי נקודתי מול כוחות צה\"ל בדרום לבנון תוך שימוש בכטב\"מים ורחפנים",
      "החרפת העימות הפוליטי וההפגנות מול מוסדות השלטון בביירות"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "הסרת איומים מיידיים והגנה על כוחות צה\"ל במרחב הביטחוני בדרום לבנון",
      "שמירה על מחויבות להסכם מול לבנון תוך תגובה תקיפה לכל פעולת איבה"
     ],
     "inferred": [
      "הפעלת מנופי לחץ דיפלומטיים ומשפטיים כדי להרתיע את הנהגת טורקיה ממהלכים בינלאומיים",
      "שמירת חופש פעולה מודיעיני וצבאי בשטח לבנון למניעת התבססות מחודשת של חיזבאללה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדות נגד תשתיות צבאיות בדרום לבנון במקרה של הפרות",
      "המשך מתיחות מדינית והצהרתית מול הנהגת טורקיה בפורומים בינלאומיים"
     ]
    },
    {
     "actor": "הממשל הסורי",
     "declared": [
      "שיקום התשתיות האזרחיות והתעופה במדינה לאחר שנות מלחמה וסנקציות",
      "מאבק בטרור, סיכול תאי דאעש ומאבק ברשתות הברחת סמים"
     ],
     "inferred": [
      "השבת הלגיטימציה הבינלאומית והרחבת הקשרים הדיפלומטיים ללא עימות ישיר עם ישראל"
     ],
     "forecast": [
      "המשך התמקדות בשיקום כלכלי, החזרת פליטים וייצוב ביטחוני פנימי"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/video/newsfeed/2026/9/27/israeli-strikes-continue-in-southern-lebanon-despite-ceasefire?traffic_source=rss",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/131347/",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/hezbollah-plans-contribute-project-house-thousands-lebanese-displaced-chief-says",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/world/syria-dismantles-isis-cell-operating-across-4-provinces/4071099",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/damascus-abyat-real-estate-threatens-legal-action-against-project-opponents/",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/960005/qassem-hezbollah-committed-to-resistance-reconstruction-and-full-liber/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-960005",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/netanyahu-orders-preparation-possible-legal-case-against-erdogan-report",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/smotrich-calls-west-bank-war-annexation-lebanon-gaza",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130898",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48047",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25229",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sjsmxjl5fx",
     "accessed_at": "2026-09-27T23:42:01+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-27T00:07:02+00:00",
  "changes": {
   "NORTH-09272342-01": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "תקיפות צה\"ל והפגזות ארטילריות בדרום לבנון",
    "score": 1.0
   },
   "NORTH-09272342-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "ציון שנתיים לחיסול חסן נסראללה ופרסום תיעודים על ידי חזבאללה",
    "score": 0.65
   },
   "NORTH-09272342-03": {
    "kind": "possible",
    "prev": "הפעלת מסדרון אנרגיה יבשתי דרך סוריה לאספקת דלק לעיראק",
    "score": 0.467
   },
   "NORTH-09272342-04": {
    "kind": "new"
   },
   "NORTH-09272342-05": {
    "kind": "new"
   },
   "NORTH-09272342-06": {
    "kind": "new"
   },
   "NORTH-09272342-07": {
    "kind": "new"
   }
  }
 }
};
