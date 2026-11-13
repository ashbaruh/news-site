/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-11-12T1859__yemen-202611121859.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-11-12T18:59:42+00:00",
   "window": {
    "from": "2026-11-11T18:59:42+00:00",
    "to": "2026-11-12T18:59:42+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202611121859"
   },
   "summary": "הזירה בתימן כוללת המשך עימותים קרקעיים מול החות'ים לצד תקיפות בלתי פוסקות מצידם לעבר תשתיות נפט וערים בסעודיה. במקביל, סעודיה פועלת בזירה הדיפלומטית הבינלאומית להגדרת החות'ים כארגון טרור, בעוד הקואליציה ממשיכה ביירוט איומים אוויריים.",
   "fronts": [
    {
     "name": "חזית תימן הפנימית",
     "status": "פעיל עם עימותים צבאיים וקרבות קרקעיים"
    },
    {
     "name": "החזית הסעודית-חות'ית",
     "status": "פעיל עם שיגורי טילים וכטב\"מים מתמשכים ויירוטים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-11121859-01",
     "title": "תקיפת מתקני נפט בסעודיה על ידי החות'ים",
     "summary": "החות'ים טענו שתקפו את צינור הנפט המזרחי-מערבי ומתקן נפט בינבוע, ואילו הקואליציה בראשות סעודיה דיווחה על יירוט טילים וכטב\"מים לעבר יעדים במדינה.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T17:35:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T17:35:54+00:00",
     "last_update_at": "2026-11-12T18:14:10+00:00",
     "what_is_not_verified": "האם התקיפות בפועל פגעו במתקני הנפט בסעודיה והאמת לגבי יעדי הטילים המוצהרים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-says-no-need-iran-deal-four-tankers-hit-hormuz",
       "published_at": "2026-11-12T18:14:10+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-attacked-pumping-station-saudi-arabias-east-west",
       "published_at": "2026-11-12T17:33:04+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-deny-targeting-mecca-amid-saudi-missile-interceptions",
       "published_at": "2026-11-12T13:06:43+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/trump-downplays-iran-deal-prospects-israel-kills-10-gaza",
       "published_at": "2026-11-12T07:22:27+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/ghalibaf-says-iran-seeks-deal-after-rubio-downplays-war",
       "published_at": "2026-11-11T17:35:54+00:00"
      }
     ],
     "places": [
      {
       "name": "ינבוע, סעודיה",
       "lat": 24.089,
       "lon": 38.0687
      },
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-11121859-02",
     "title": "לחימה ועימותים באזור מאריב ותעז",
     "summary": "התקיימו עימותים וקרבות שונים שכללו פעילות צבאית באזור מאריב וכן פגזים ופעולות באזור תעז.",
     "axis": "תימן והחות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T15:09:01+00:00",
     "last_update_at": "2026-11-12T15:55:10+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק בשטח",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155701",
       "published_at": "2026-11-12T15:55:10+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49527",
       "published_at": "2026-11-12T15:38:44+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.sabanew.net/viewstory/155696",
       "published_at": "2026-11-12T15:09:01+00:00"
      }
     ],
     "places": [
      {
       "name": "מאריב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      },
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-11121859-03",
     "title": "לחץ דיפלומטי סעודי לסיווג החות'ים כארגון טרור",
     "summary": "סעודיה מפעילה לחץ על האיחוד האירופי להגדיר את תנועת החות'ים כארגון טרור, סוגיה שמעוררת חשש פאן-אירופי לגבי תהליך השלום העתידי.",
     "axis": "תימן והחות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T16:47:36+00:00",
     "last_update_at": "2026-11-12T16:47:36+00:00",
     "what_is_not_verified": "האם האיחוד האירופי ייענה לבקשת סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-puts-pressure-eu-label-yemens-houthis-terrorist-group",
       "published_at": "2026-11-12T16:47:36+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הטענות ההדדיות על פגיעה במתקני אנרגיה סעודיים כמו מתקן ינבוע או צינור הנפט",
    "האם החות'ים כוונו לאזור מכה או שברי טילים שנפלו שם הגיעו מיירוטים",
    "נתוני הנפגעים והתוצאות המדויקות של העימותים בתעז ובמאריב"
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
     "value": 3.2032,
     "unit": "ILS",
     "change_pct": 1.0,
     "source_id": "src_ecb",
     "as_of": "2026-11-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "תקיפת תשתיות הנפט והמתקנים הצבאיים של סעודיה"
     ],
     "inferred": [
      "שיבוש הכלכלה וייצוא הנפט של סעודיה",
      "הפעלת לחץ אזורי באמצעות פגיעה בעומק סעודיה"
     ],
     "forecast": [
      "המשך שיגור איומים אוויריים לעבר סעודיה",
      "שמירה על נוכחות צבאית אקטיבית בחזיתות הפנימיות בתימן"
     ]
    },
    {
     "actor": "סעודיה והקואליציה",
     "declared": [
      "הגנה על שטחי הממלכה ויירוט איומים אוויריים",
      "דחיפה בינלאומית להגדרת החות'ים כארגון טרור"
     ],
     "inferred": [
      "בלימת הפעילות הצבאית של החות'ים והגנה על מתקני האנרגיה החיוניים"
     ],
     "forecast": [
      "המשך התקיפות האוויריות נגד מעוזי החות'ים",
      "הגברת המאמצים הדיפלומטיים לבידוד החות'ים בזירה העולמית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/saudi-arabia-puts-pressure-eu-label-yemens-houthis-terrorist-group",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-say-they-attacked-pumping-station-saudi-arabias-east-west",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/ghalibaf-says-iran-seeks-deal-after-rubio-downplays-war",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/155696",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49527",
     "accessed_at": "2026-11-12T18:59:42+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:50:52+00:00",
  "changes": {
   "YEMEN-11121859-01": {
    "kind": "possible",
    "prev": "שיגור טילי שיוט, טילים בליסטיים וכטב\"מים לעבר סעודיה ויירוטם",
    "score": 0.633
   },
   "YEMEN-11121859-02": {
    "kind": "possible",
    "prev": "דיון בהסלמה הצבאית ובמצור על תעז",
    "score": 0.633
   },
   "YEMEN-11121859-03": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דרישה תימנית להגדרת החות'ים כארגון טרור בליגה הערבית",
    "score": 0.65
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-11-13T0040__iran-202611130040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-11-13T00:40:30+00:00",
   "window": {
    "from": "2026-11-12T00:40:30+00:00",
    "to": "2026-11-13T00:40:30+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202611130040"
   },
   "summary": "העימות הצבאי והכלכלי בין איראן לבין ארצות הברית וישראל נמשך תוך חילופי מהלומות ואיומים הדדיים בזירה הימית והאווירית. ארצות הברית מאותתת על הקשחת עמדות ושלילת משא ומתן תוך הפעלת לחץ במצר הורמוז ותקיפות נקודתיות, בעוד איראן מתריעה מפני שיתוף פעולה אזורי ומציגה יכולות טילים. במקביל, ישראל מגבירה את מוכנותה המבצעית לתקיפה מול יכולות הגרעין והטילים, לצד מחלוקות פוליטיות פנימיות בנוגע לתזמון המבצע.",
   "fronts": [
    {
     "name": "מצר הורמוז והמפרץ",
     "status": "פגיעות במכליות נפט, זיהום נרחב ומצור כלכלי אמריקני"
    },
    {
     "name": "דרום איראן",
     "status": "דיווחים על תקיפות מטרות צבאיות בסירכ ובבסיסי משמרות המהפכה"
    },
    {
     "name": "הזירה המדינית והביטחונית בישראל",
     "status": "היערכות לתקיפת תשתיות הטילים והגרעין ודיונים פוליטיים פנימיים"
    },
    {
     "name": "ארה\"ב מול איראן",
     "status": "הקפאת ערוצי מו\"מ, איומים במתקפות והעברת בכירים אמריקנים לבסיסים מאובטחים"
    }
   ],
   "events": [
    {
     "id": "IRAN-11130040-01",
     "title": "הצהרות טראמפ על שלילת הצורך בהסכם עם איראן והסטת סגנו משיחות",
     "summary": "הנשיא טראמפ הודיע כי ארצות הברית אינה זקוקה עוד להסכם מול איראן, תוך אזכור שליטה בכספים איראניים ובמצר הורמוז, והעביר את סגנו ואנס לעסוק בסוגיות פנים.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T13:32:54+00:00",
     "last_update_at": "2026-11-12T21:12:51+00:00",
     "what_is_not_verified": "אין אימות עצמאי לגבי מעמדו המדויק של ואנס במשא ומתן מעבר לפרסומים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-sidelines-vance-iran-talks-says-no-need-negotiate",
       "published_at": "2026-11-12T21:12:51+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202611129077",
       "published_at": "2026-11-12T21:08:00+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/trump-removes-vance-from-iran-talks-as-u-s-launches-strikes-on-irgc-bases/",
       "published_at": "2026-11-12T20:12:33+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/trump-says-no-iran-deal-needed/",
       "published_at": "2026-11-12T19:17:10+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/95022",
       "published_at": "2026-11-12T13:32:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11130040-02",
     "title": "דיווחים על פגיעה ותקיפה באזור סירכ במחוז הורמוזגאן",
     "summary": "מקורות רשמיים ותקשורתיים באיראן דיווחו על תקיפה צבאית של גורם עוין באזור סירכ שבדרום המדינה, ובישראל יוחסה הפעולה לארצות הברית.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T17:50:48+00:00",
     "last_update_at": "2026-11-12T20:31:32+00:00",
     "what_is_not_verified": "היקף הנזק והנפגעים, וזהות הגורם התוקף באופן רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21842708",
       "published_at": "2026-11-12T20:31:32+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/southern-irans-sirik-attacked-report-says",
       "published_at": "2026-11-12T19:45:45+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1387923",
       "published_at": "2026-11-12T19:31:20+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133566",
       "published_at": "2026-11-12T19:19:21+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/h16dmu7azg",
       "published_at": "2026-11-12T17:50:48+00:00"
      }
     ],
     "places": [
      {
       "name": "סירכ, איראן",
       "lat": 26.5177,
       "lon": 57.1018
      }
     ]
    },
    {
     "id": "IRAN-11130040-03",
     "title": "הזהרת משרד החוץ האיראני מפני סיוע למערכה האמריקנית",
     "summary": "דובר משרד החוץ של איראן התריע בפני מדינות זרות שלא להעניק סיוע צבאי, ימי או לוגיסטי למערכה האמריקנית נגד איראן, ואיים כי הדבר ייחשב שותפות לתוקפנות.",
     "axis": "איראן - ארצות הברית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T19:13:25+00:00",
     "last_update_at": "2026-11-12T21:20:51+00:00",
     "what_is_not_verified": "השלכות מעשיות או פעולות תגובה שנקטה איראן בעקבות האזהרה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_240c958b1488e392",
       "url": "https://en.irna.ir/news/86320269/Iran-warns-foreign-governments-against-involvement-in-US-aggression",
       "published_at": "2026-11-12T21:20:51+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_240c958b1488e392",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tehran-warns-countries-against-backing-us-war-iran",
       "published_at": "2026-11-12T19:13:25+00:00"
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
     "id": "IRAN-11130040-04",
     "title": "הצגת טילים בליסטיים בטהראן ובבנדר עבאס",
     "summary": "באיראן הוצגו טילים בליסטיים מדגמים שונים לקהל בבירה טהראן ובעיר הנמל בנדר עבאס לציון יום השנה למותו של מייסד תוכנית הטילים.",
     "axis": "איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T20:26:15+00:00",
     "last_update_at": "2026-11-12T20:26:15+00:00",
     "what_is_not_verified": "אין פירוט מדויק של יכולות הטילים שהוצגו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133569",
       "published_at": "2026-11-12T20:26:15+00:00"
      }
     ],
     "places": [
      {
       "name": "טהראן, איראן",
       "lat": 35.6893,
       "lon": 51.3896
      },
      {
       "name": "בנדר עבאס, איראן",
       "lat": 27.1842,
       "lon": 56.2893
      }
     ]
    },
    {
     "id": "IRAN-11130040-05",
     "title": "העברת בכירים בממשל האמריקני למתקנים צבאיים עקב איומים",
     "summary": "בכירים בצמרת הממשל בארצות הברית הועברו לשהייה בבסיסים צבאיים מחשש לפגיעה ישירה מצד איראן.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T20:08:10+00:00",
     "last_update_at": "2026-11-12T20:08:10+00:00",
     "what_is_not_verified": "רשימת כל הבכירים והבסיסים הספציפיים שבהם הם שוהים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21842796",
       "published_at": "2026-11-12T20:08:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11130040-06",
     "title": "פגיעה במכליות נפט וזיהום נרחב במצר הורמוז",
     "summary": "במהלך העימות הימי פגעו מוקשים וטילים במכליות נפט במצר הורמוז, דבר שגרם לכתמי נפט משמעותיים ולנזק סביבתי שנצפה מהחלל.",
     "axis": "ארצות הברית - איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T03:00:07+00:00",
     "last_update_at": "2026-11-12T03:00:07+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לחי הימי והמספר המלא של המכליות שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/nov/12/oil-slicks-seen-from-space-the-devastating-impact-of-boat-strikes-on-fragile-gulf-ecosystems",
       "published_at": "2026-11-12T03:00:07+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-11130040-07",
     "title": "דריכות בישראל ופגישות עדכון לקראת החלטות צבאיות מול איראן",
     "summary": "בישראל נערכים לאפשרות של מהלכים צבאיים נגד מתקני הגרעין והטילים באיראן על רקע דיונים במערכת הביטחון ופגישות תדרוך פוליטיות בין ראש הממשלה לאופוזיציה.",
     "axis": "ישראל - איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T15:51:39+00:00",
     "last_update_at": "2026-11-13T00:32:20+00:00",
     "what_is_not_verified": "עיתוי הפעולה הישראלית והאם תינתן תמיכה אמריקנית מלאה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/yokra14957610",
       "published_at": "2026-11-13T00:32:20+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/geopolitics/article/21842284",
       "published_at": "2026-11-12T20:42:26+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/sywoliqaml",
       "published_at": "2026-11-12T16:08:32+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/11/eisenkot-meets-netanyahu-bid-avoid-iran-strikes",
       "published_at": "2026-11-12T15:51:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ירושלים, ישראל",
       "lat": 31.7788,
       "lon": 35.2258
      }
     ]
    }
   ],
   "not_verified": [
    "זהות התוקף והיקף הנזק הממשי בתקיפה המדווחת בסירכ",
    "מידת המוכנות של ישראל לצאת למבצע צבאי ללא תמיכה אמריקנית פעילה",
    "ההשפעה המדויקת של לחץ מדינות המפרץ על השהיית התקיפות של טראמפ",
    "טענות בנוגע לשינוי אסטרטגי פנימי במוסד הישראלי שנשענות על דיווח זר"
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
     "value": 3.2032,
     "unit": "ILS",
     "change_pct": 1.0,
     "source_id": "src_ecb",
     "as_of": "2026-11-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "שלילת הצורך בהסכם עם איראן",
      "שליטה במצר הורמוז ובכספים איראניים",
      "הגנה על בעלות ברית ונכונות לתקוף אם המצב יחמיר"
     ],
     "inferred": [
      "הפעלת מנופי לחץ מקסימליים להחלשת השלטון בטהראן",
      "הרחקת גורמים מתונים מניהול המגעים כדי לכפות כניעה או תקיפה"
     ],
     "forecast": [
      "המשך הגבלות השיט והחרפת העיצומים לצד אפשרות להרחבת תקיפות נקודתיות"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "אזהרת מדינות זרות מפני סיוע למאמץ המלחמתי האמריקני",
      "דחיית האשמות על פעילות ריגול באירופה",
      "הצגת מוכנות והרתעה באמצעות מערכי טילים בליסטיים"
     ],
     "inferred": [
      "ניסיון להרתיע את מדינות המפרץ ממתן גישה צבאית לכוחות זרים",
      "המשך שיקום ושימור מערך הטילים לצורכי הישרדות ומענה לתקיפות"
     ],
     "forecast": [
      "איראן תמשיך לאיים על נתיבי שיט ועל בסיסים אזוריים אם תחודש האש בעוצמה גבוהה"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מוכנות של מערכת הביטחון לכלל התרחישים המבצעיים",
      "צורך בפגיעה משמעותית ביכולות הטילים והגרעין של איראן"
     ],
     "inferred": [
      "העדפה לפעול בתיאום מלא עם ארצות הברית תוך שמירה על אופציה חד-צדדית",
      "חשש מפני דחיית המערכה והתעצמות איראנית מחודשת"
     ],
     "forecast": [
      "המשך לחץ מדיני וביטחוני להוצאת תקיפה משותפת לפועל או היערכות לפעולה עצמאית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/11/eisenkot-meets-netanyahu-bid-avoid-iran-strikes",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/in_the_news/trump-says-no-iran-deal-needed/",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/12/oil-slicks-seen-from-space-the-devastating-impact-of-boat-strikes-on-fragile-gulf-ecosystems",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202611129077",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86320269/Iran-warns-foreign-governments-against-involvement-in-US-aggression",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/geopolitics/article/21842284",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1387923",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tehran-warns-countries-against-backing-us-war-iran",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133569",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/95022",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/sywoliqaml",
     "accessed_at": "2026-11-13T00:40:30+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:40:37+00:00",
  "changes": {
   "IRAN-11130040-01": {
    "kind": "new"
   },
   "IRAN-11130040-02": {
    "kind": "new"
   },
   "IRAN-11130040-03": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "דובר משרד החוץ האיראני מאשים את ארצות הברית בהפצת מידע כוזב",
    "score": 0.65
   },
   "IRAN-11130040-04": {
    "kind": "new"
   },
   "IRAN-11130040-05": {
    "kind": "possible",
    "prev": "מעבר שר האוצר האמריקני לבסיס צבאי בשל איומים איראניים",
    "score": 0.467
   },
   "IRAN-11130040-06": {
    "kind": "possible",
    "prev": "הצהרת יו\"ר הפרלמנט האיראני קאליבאף על תנאי המשא ומתן ומצר הורמוז",
    "score": 0.467
   },
   "IRAN-11130040-07": {
    "kind": "possible",
    "prev": "נשיא איראן דורש פיצויים בינלאומיים בגין נזקי תקיפות ארה\"ב וישראל",
    "score": 0.467
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-11-12T0044__ukraine-202611120044.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-11-12T00:44:50+00:00",
   "window": {
    "from": "2026-11-11T00:44:50+00:00",
    "to": "2026-11-12T00:44:50+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202611120044"
   },
   "summary": "העימות בין אוקראינה לרוסיה ממשיך להתאפיין בלחימה בעצימות גבוהה ובמהלומות ארוכות טווח נגד תשתיות עורפיות של שני הצדדים. במקביל לתקיפות טילים וכטב\"מים על קייב, אודסה ומתקני נפט בעומק רוסיה, נערכו שיחות משולשות בהשתתפות ארצות הברית שהניבו הסכם על חילופי שבויים. עם זאת, המחלוקות הטריטוריאליות והמבוי הסתום בנושאי ביטחון כולל מותירים את השגת הפסקת האש ללא פריצת דרך.",
   "fronts": [
    {
     "name": "דונבאס",
     "status": "עמדות קשיחות בנוגע לשליטה ולדרישות נסיגה טריטוריאליות"
    },
    {
     "name": "זפורוז'יה ודרום אוקראינה",
     "status": "פעילות התקפית מלווה בלכידת לוחמים זרים ותקיפות מונחות"
    },
    {
     "name": "עורף רוסיה (סיביר ואזור סנקט פטרבורג)",
     "status": "מתקפות כטב\"מים אוקראיניות נרחבות נגד בתי זיקוק ונמלים"
    },
    {
     "name": "עורף אוקראינה (קייב ואודסה)",
     "status": "תקיפות מתמשכות בטילים בליסטיים ובכטב\"מים סילוניים על יעדים אזרחיים ותשתיות"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-11120044-01",
     "title": "מתקפת כטב\"מים אוקראינית נרחבת על אומסק ובית הזיקוק בסיביר",
     "summary": "כוחות אוקראינה ביצעו תקיפה ממושכת באמצעות כטב\"מים לעבר העיר אומסק שבסיביר, כ-2,500 ק\"מ מגבול אוקראינה. דווח על שריפה בבית הזיקוק המקומי ועל פגיעה אפשרית בתחנת כוח, לצד ביטול אירועי תרבות והתרעות שנמשכו שעות.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T15:14:11+00:00",
     "last_update_at": "2026-11-11T22:41:46+00:00",
     "what_is_not_verified": "היקף הנזק המדויק למתקני האנרגיה בבית הזיקוק ובתחנת הכוח טרם אומת רשמית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russias-largest-oil-refinery-slammed-by-drones-in-8-hr-attack-2-500-km-from-ukraine/",
       "published_at": "2026-11-11T22:41:46+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_kyiv_independent",
       "url": "https://meduza.io/en/news/2026/11/11/russia-s-omsk-under-drone-alert-for-seven-hours-amid-ukrainian-attack-governor-urges-residents-to-stay-indoors",
       "published_at": "2026-11-11T18:08:49+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/49502",
       "published_at": "2026-11-11T16:49:20+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyiv_independent",
       "url": "https://t.me/alexmehacarmel/49497",
       "published_at": "2026-11-11T15:14:11+00:00"
      }
     ],
     "places": [
      {
       "name": "אומסק, רוסיה",
       "lat": 54.9914,
       "lon": 73.3715
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-02",
     "title": "סיום שיחות אבו דאבי והסכמה על עסקת חילופי שבויים",
     "summary": "השיחות המשולשות בין רוסיה, אוקראינה וארצות הברית באבו דאבי ננעלו בהסכמה על עסקת חילופי שבויים נרחבת ודיון בערבויות ביטחוניות, אולם ללא פריצת דרך בסוגיית השטחים ובמערך הביטחון האירופי.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T12:28:23+00:00",
     "last_update_at": "2026-11-11T19:15:44+00:00",
     "what_is_not_verified": "מספר השבויים שישוחררו ומועד הביצוע המדויק לא פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://kyivindependent.com/ukraine-war-latest-large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/",
       "published_at": "2026-11-11T19:15:44+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.bbc.co.uk/news/articles/ck792we7zrz4o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-11-11T18:04:58+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062404/",
       "published_at": "2026-11-11T17:47:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-talks-in-abu-dhabi-bring-progress-on-prisoners-but-not-on-peace",
       "published_at": "2026-11-11T17:03:43+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://meduza.io/en/feature/2026/11/11/russia-ukraine-peace-talks-conclude-in-abu-dhabi-with-prisoner-exchange-agreement-but-no-breakthrough-on-territory",
       "published_at": "2026-11-11T13:10:29+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://meduza.io/en/news/2026/11/11/ukrainian-negotiator-says-peace-talks-with-russia-could-produce-a-deal-before-the-new-year",
       "published_at": "2026-11-11T12:28:23+00:00"
      }
     ],
     "places": [
      {
       "name": "אבו דאבי, איחוד האמירויות הערביות",
       "lat": 24.4538,
       "lon": 54.3774
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-03",
     "title": "תקיפת טילים בליסטיים רוסית על קייב",
     "summary": "צבא רוסיה שיגר טילים בליסטיים לעבר עיר הבירה קייב שעות ספורות לאחר סיום סבב השיחות באבו דאבי.",
     "axis": "מערכי עורף באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T23:27:06+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T23:27:06+00:00",
     "last_update_at": "2026-11-11T23:27:06+00:00",
     "what_is_not_verified": "פרטי המטרות המדויקות והנזקים בקייב טרם פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyiv_independent",
       "url": "https://kyivindependent.com/russia-attacks-kyiv-with-ballistic-missiles-hours-after-peace-talks-end/",
       "published_at": "2026-11-11T23:27:06+00:00"
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
     "id": "UKRAINE-11120044-04",
     "title": "פגיעת כטב\"ם סילוני רוסי בשוק בצ'ורנומורסק",
     "summary": "פגיעת כלי טיס מונחה בעל הנעת סילון בשוק מרכזי בצ'ורנומורסק שבמחוז אודסה גרמה למותם של ארבעה בני אדם ולפציעתם של לפחות תשעה נוספים, לצד פגיעה במבני מגורים וברכבים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:27:00+00:00",
     "last_update_at": "2026-11-11T17:27:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_78cb47b0dfd0bdb9",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062304/",
       "published_at": "2026-11-11T17:27:00+00:00"
      }
     ],
     "places": [
      {
       "name": "צ'ורנומורסק, אוקראינה",
       "lat": 46.3013,
       "lon": 30.6549
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-05",
     "title": "הפלת מסוקים רוסיים באש כוחותיהם במחוז לנינגרד",
     "summary": "בלוגרים צבאיים רוסיים דיווחו על הפלת עד שלושה מסוקי קרב רוסיים באש כוחותיהם ומותם של שבעה אנשי צוות בעת ניסיון ליירט מתקפת כטב\"מים אוקראינית מעל אזור לנינגרד ואוסט-לוגה.",
     "axis": "צפון-מערב רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T12:45:08+00:00",
     "last_update_at": "2026-11-11T18:56:06+00:00",
     "what_is_not_verified": "האובדן המדויק של המסוקים ונסיבות מות הטייסים לא אושרו רשמית בידי הרשויות הרוסיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49508",
       "published_at": "2026-11-11T18:56:06+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/11/11/russian-pro-war-military-bloggers-report-pilots-killed-during-ukrainian-drone-attack-on-leningrad-region",
       "published_at": "2026-11-11T12:45:08+00:00"
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
     "id": "UKRAINE-11120044-06",
     "title": "הסכמת שגרירי האיחוד האירופי על חבילת סנקציות חדשה נגד רוסיה",
     "summary": "נציגי מדינות האיחוד האירופי אישרו עקרונית הטלת סנקציות על 145 ישויות ויחידים, כולל 50 בנקים רוסיים, חברות הקשורות לצי הצללים של הנפט וגורמים הפועלים בתחום הסייבר והלוחמה ההיברידית.",
     "axis": "הזירה הבינלאומית והכלכלית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T17:33:00+00:00",
     "last_update_at": "2026-11-11T17:33:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062400/",
       "published_at": "2026-11-11T17:33:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בריסל, בלגיה",
       "lat": 50.8467,
       "lon": 4.3525
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-07",
     "title": "לכידת שבוי מלחמה מאינדונזיה בשורות צבא רוסיה",
     "summary": "אוקראינה הודיעה על לכידתו של אזרח אינדונזי שלחם בשורות צבא רוסיה במחוז זפורוז'יה שבדרום המדינה, לאחר שיחידתו הותקפה על ידי כטב\"מים.",
     "axis": "דרום אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T05:33:27+00:00",
     "last_update_at": "2026-11-11T19:03:34+00:00",
     "what_is_not_verified": "היקף הגיוס של אזרחים זרים נוספים מאינדונזיה וממדינות אחרות אינו מאומת מעבר לנתוני הפרויקט האוקראיני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_i_want_to_live",
       "url": "https://kyivindependent.com/ukraine-captures-first-indonesian-prisoner-of-war-as-russia-steps-up-foreign-recruitment/",
       "published_at": "2026-11-11T19:03:34+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_i_want_to_live",
       "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-indonesian-pow-prisoner-of-war-russia",
       "published_at": "2026-11-11T05:33:27+00:00"
      }
     ],
     "places": [
      {
       "name": "זפורוז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-08",
     "title": "מותו של שגריר רוסיה בארצות הברית",
     "summary": "משרד החוץ של רוסיה הודיע על מותו הפתאומי של השגריר בוושינגטון, אלכסנדר דרצ'ייב, בגיל 66.",
     "axis": "דיפלומטיה בין-מעצמתית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-11T16:39:57+00:00",
     "last_update_at": "2026-11-11T16:54:18+00:00",
     "what_is_not_verified": "סיבת ומנגנון המוות לא פורסמו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/hyocvzgcme",
       "published_at": "2026-11-11T16:54:18+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/article/21832201",
       "published_at": "2026-11-11T16:39:57+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארצות הברית",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "UKRAINE-11120044-09",
     "title": "נסיעת שליחי ארצות הברית לפגישות במוסקבה ובדבלין",
     "summary": "השליחים סטיב ויטקוף וג'ארד קושנר מתכננים להיפגש במוסקבה עם ולדימיר פוטין ולאחר מכן בדבלין עם וולודימיר זלנסקי כדי לעדכן על תוצאות שיחות אבו דאבי.",
     "axis": "משא ומתן מדיני",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-11-11T14:30:54+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-11T14:30:54+00:00",
     "last_update_at": "2026-11-11T17:56:29+00:00",
     "what_is_not_verified": "תוכן ההצעות שיוצגו בפגישות והסכמות עתידיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://kyivindependent.com/zelensky-arrives-in-dublin-for-european-political-community-summit-expects-a-debrief-from-witkoff-kushner/",
       "published_at": "2026-11-11T17:56:29+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_36c7f00febacb791",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062404/",
       "published_at": "2026-11-11T17:47:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062401/",
       "published_at": "2026-11-11T17:41:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_ce05bfe71b2aacd1",
       "url": "https://meduza.io/en/news/2026/11/11/they-re-bringing-something-kushner-and-witkoff-to-meet-putin-in-moscow-day-after-abu-dhabi-peace-talks",
       "published_at": "2026-11-11T14:30:54+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      },
      {
       "name": "דבלין, אירלנד",
       "lat": 53.3494,
       "lon": -6.2606
      }
     ]
    }
   ],
   "not_verified": [
    "טענות בלוגרים צבאיים על הפלת שלושה מסוקים רוסיים באש כוחותיהם ליד לנינגרד",
    "היקף הנזק המדויק לבית הזיקוק באומסק ולתחנת הכוח בעיר",
    "מספרם הכולל של אזרחים זרים שלוחמים או נהרגו בשירות צבא רוסיה",
    "נסיבות וסיבת המוות של השגריר הרוסי אלכסנדר דרצ'ייב",
    "טענת רוסיה בנוגע לקיומה של רשת בתי כלא ועינויים באוקראינה"
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
     "value": 1.1127,
     "unit": "USD",
     "change_pct": -0.78,
     "source_id": "src_ecb",
     "as_of": "2026-11-11T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "השגת שחרור של שבויים במסגרת עסקאות חילופין",
      "התקדמות במסלול ההצטרפות לאיחוד האירופי וקבלת ערבויות ביטחון",
      "סירוב מוחלט לדרישות לנסיגה משטחי דונבאס"
     ],
     "inferred": [
      "פגיעה בתשתיות הזיקוק והאנרגיה של רוסיה כדי לייצר לחץ כלכלי ומבצעי",
      "רצון להגיע למסגרת הסדרה לפני סוף השנה תוך שימור תמיכת המערב"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים לעומק השטח הרוסי במקביל למגעים עם שליחי הממשל האמריקני"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "השגת ניצחון והחזרת כל השטחים הנתבעים על ידה בטרם חתימה על הסכם שלום",
      "הגעה להבנות בעניין מערך הביטחון האירופי ודרישות ביטחוניות מול אוקראינה"
     ],
     "inferred": [
      "הפעלת לחץ צבאי כבד על תשתיות האנרגיה והמרכזים העירוניים באוקראינה לקראת המשך השיחות",
      "שימור ערוצי ההידברות הדיפלומטיים מול ארצות הברית כדי למקסם הישגים מדיניים"
     ],
     "forecast": [
      "המשך תקיפות הטילים על ערי אוקראינה תוך בחינת תנאי הפסקת אש בתחומי האנרגיה והים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/ck792we7zrz4o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/nov/11/ukraine-indonesian-pow-prisoner-of-war-russia",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/article/21832201",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/zelensky-arrives-in-dublin-for-european-political-community-summit-expects-a-debrief-from-witkoff-kushner/",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/11/11/they-re-bringing-something-kushner-and-witkoff-to-meet-putin-in-moscow-day-after-abu-dhabi-peace-talks",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/11/11/8062401/",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49508",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/hyocvzgcme",
     "accessed_at": "2026-11-12T00:44:50+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-11T00:50:00+00:00",
  "changes": {
   "UKRAINE-11120044-01": {
    "kind": "new"
   },
   "UKRAINE-11120044-02": {
    "kind": "new"
   },
   "UKRAINE-11120044-03": {
    "kind": "new"
   },
   "UKRAINE-11120044-04": {
    "kind": "new"
   },
   "UKRAINE-11120044-05": {
    "kind": "new"
   },
   "UKRAINE-11120044-06": {
    "kind": "new"
   },
   "UKRAINE-11120044-07": {
    "kind": "new"
   },
   "UKRAINE-11120044-08": {
    "kind": "new"
   },
   "UKRAINE-11120044-09": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-11-13T0050__north-202611130050.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-11-13T00:50:27+00:00",
   "window": {
    "from": "2026-11-12T00:50:27+00:00",
    "to": "2026-11-13T00:50:27+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202611130050"
   },
   "summary": "הגזרה הצפונית מתאפיינת בלחימה מתמשכת בדרום לבנון, הכוללת תקיפות של צה\"ל לצד עיסוק פוליטי ומשפטי בלבנון במעמד השטחים הכבושים ובנוכחות זרה. במקביל, מתנהל שיח דיפלומטי וכלכלי בין לבנון לטורקיה תוך חיכוך פוליטי פנימי בביירות סביב מידת ההשפעה של איראן על קבלת ההחלטות במדינה.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה"
    }
   ],
   "events": [
    {
     "id": "NORTH-11130050-01",
     "title": "אישור חוק איסור עסקאות נדל\"ן באזורים כבושים בלבנון",
     "summary": "הפרלמנט הלבנוני אישר בהצבעה תיקונים לטיוטת חוק האוסרת על עסקאות נדל\"ן ומכירת קרקעות באזורים הכבושים בידי הצבא הישראלי.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T22:54:58+00:00",
     "last_update_at": "2026-11-12T22:54:58+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_15dced32988c4eea",
       "url": "https://english.almanar.com.lb/article/150182/",
       "published_at": "2026-11-12T22:54:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11130050-02",
     "title": "תקיפות צה\"ל בדרום לבנון",
     "summary": "הצבא הישראלי תקף באזור רכס עלי א-טאהר, כפר תבנית וקנטרה שבדרום לבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T12:44:17+00:00",
     "last_update_at": "2026-11-12T12:44:17+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/133535",
       "published_at": "2026-11-12T12:44:17+00:00"
      }
     ],
     "places": [
      {
       "name": "כפר תבנית",
       "lat": 33.3519,
       "lon": 35.5186
      },
      {
       "name": "קנטרה",
       "lat": 33.2735,
       "lon": 35.4591
      }
     ]
    },
    {
     "id": "NORTH-11130050-03",
     "title": "דיונים רשמיים בין נשיא לבנון לבנו של נשיא טורקיה",
     "summary": "נשיא לבנון אירח את בלו ארדואן בבארבא. נשיא לבנון הביע ציפייה לשיתוף פעולה עם טורקיה, בעוד בלו ארדואן הצהיר על תמיכת ארצו במאמצי לבנון להרחיב את ריבונות המדינה.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T06:54:44+00:00",
     "last_update_at": "2026-11-12T06:54:44+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_6e183e6046ff3f89",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967590/president-aoun-calls-for-stronger-lebanon-turkey-ties-as-bilal-erdogan/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967590",
       "published_at": "2026-11-12T06:54:44+00:00"
      }
     ],
     "places": [
      {
       "name": "בארבא",
       "lat": 33.8336,
       "lon": 35.5446
      }
     ]
    },
    {
     "id": "NORTH-11130050-04",
     "title": "עימות מילולי בפרלמנט הלבנוני סביב עמדת איראן",
     "summary": "ראש מפלגת הכתאיב סמי ג'ומאייל מחה בפרלמנט על דבריו של יו\"ר הפרלמנט האיראני על חזית משותפת, ויו\"ר הפרלמנט נבי ברי השיב כי לבנון חופשית להחליט.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-11-12T06:26:48+00:00",
     "last_update_at": "2026-11-12T06:26:48+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_eb63e4da3a1155ee",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/967570/sami-gemayel-challenges-iranian-parliament-speakers-remarks-berri-resp/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967570",
       "published_at": "2026-11-12T06:26:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-11130050-05",
     "title": "הקמת גדודי תקיפה בזרוע היבשה הישראלית",
     "summary": "זרוע היבשה בישראל החלה להקים גדודי תקיפה ייעודיים לקראת תמרון עתידי בעזה ובלבנון.",
     "axis": "הגזרה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-11-12T03:48:07+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-11-12T03:48:07+00:00",
     "last_update_at": "2026-11-12T03:48:07+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_walla",
       "source_root_id": "fh_b0fb4ef83a46c544",
       "url": "https://www.walla.co.il/news/military/383960981",
       "published_at": "2026-11-12T03:48:07+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "פרטי התכנון המדויקים של גדודי התקיפה החדשים בזרוע היבשה"
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
     "value": 3.2032,
     "unit": "ILS",
     "change_pct": 1.0,
     "source_id": "src_ecb",
     "as_of": "2026-11-12T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הכנה למבצעים אפשריים והיערכות ביטחונית בגזרה"
     ],
     "inferred": [
      "בניית כוח יבשתי מותאם לתמרון בלבנון ופגיעה בתשתיות חיזבאללה"
     ],
     "forecast": [
      "המשך פעילות צבאית ולחימה בעצימות משתנה בדרום לבנון"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "הגנה על ריבונות המדינה ואיסור עסקאות נדל\"ן באזורים הכבושים",
      "חיזוק קשרים ושיתופי פעולה כלכליים ומדיניים עם טורקיה"
     ],
     "inferred": [
      "ניסיון לאזן בין השפעות חיצוניות (איראן, טורקיה) לבין שמירה על עצמאות מוסדות המדינה"
     ],
     "forecast": [
      "המשך ניסיונות החקיקה והדיפלומטיה להשבת ריבונות וגיוס סיוע לשיקום"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/150182/",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/967570/sami-gemayel-challenges-iranian-parliament-speakers-remarks-berri-resp/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-967570",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/133535",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383960981",
     "accessed_at": "2026-11-13T00:50:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-11-12T00:57:53+00:00",
  "changes": {
   "NORTH-11130050-01": {
    "kind": "new"
   },
   "NORTH-11130050-02": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "תקיפות צה\"ל בדרום לבנון בזמן נאום מזכ\"ל חיזבאללה",
    "score": 0.65
   },
   "NORTH-11130050-03": {
    "kind": "possible",
    "prev": "דיונים מדיניים בנפרד על תפקיד יוניפי\"ל ונוכחות ביטחונית בדרום לבנון",
    "score": 0.467
   },
   "NORTH-11130050-04": {
    "kind": "new"
   },
   "NORTH-11130050-05": {
    "kind": "new"
   }
  }
 }
};
