/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-17T1525__yemen-202609171525.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-17T15:25:17+00:00",
   "window": {
    "from": "2026-09-16T15:25:17+00:00",
    "to": "2026-09-17T15:25:17+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609171525"
   },
   "summary": "הלחימה בתימן מחמירה סביב מצר באב אלמנדב וקו החוף, כאשר החות'ים מתקדמים, חופרים תעלות ומדווחים על הפלת מטוס F-15 סעודי. ההסלמה מעוררת דאגה בינלאומית, מובילה לפניות סעודיות לסין ולבעלות ברית בבקשה לסיוע או להפסקת אש, וגורמת לעקירת עשרות אלפי תושבים.",
   "fronts": [
    {
     "name": "חזית תימן ומצר באב אלמנדב",
     "status": "הסלמה משמעותית והתקדמות של החות'ים"
    },
    {
     "name": "חזית סעודיה",
     "status": "מתקפות כטב\"מים וטילים ומצוקה בהגנה האווירית"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09171525-01",
     "title": "חפירת תעלות במצר באב אלמנדב",
     "summary": "החות'ים חפרו כעשרים קילומטרים של תעלות בהרים סביב מצר באב אלמנדב.",
     "axis": "ציר החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-08T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T14:26:38+00:00",
     "last_update_at": "2026-09-17T14:26:38+00:00",
     "what_is_not_verified": "לא מאומת מידע נוסף מעבר לתצלומי הלוויין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130397",
       "published_at": "2026-09-17T14:26:38+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09171525-02",
     "title": "הפלת מטוס F-15 סעודי בתימן",
     "summary": "החות'ים הודיעו והציגו שרידים של מטוס קרב סעודי מסוג F-15 שהופל בשמי תימן (במחוז מארב).",
     "axis": "ציר החות'ים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-16T14:23:05+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-16T14:23:05+00:00",
     "last_update_at": "2026-09-17T14:53:00+00:00",
     "what_is_not_verified": "האם אכן מדובר בהפלה ראשונה של מטוס קרב סעודי על ידי החות'ים",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_24084629f525e1ec",
       "url": "https://www.france24.com/en/houthis-claim-saudi-f-15-kill-as-yemen-fighting-escalates",
       "published_at": "2026-09-17T14:53:00+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_24084629f525e1ec",
       "url": "https://www.bbc.co.uk/news/articles/c8vgy3p6k3y9o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-17T13:47:36+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_24084629f525e1ec",
       "url": "https://t.me/abualiexpress/130345",
       "published_at": "2026-09-16T16:26:22+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_24084629f525e1ec",
       "url": "https://t.me/abualiexpress/130334",
       "published_at": "2026-09-16T14:23:05+00:00"
      }
     ],
     "places": [
      {
       "name": "מארב, תימן",
       "lat": 15.4579,
       "lon": 45.323
      }
     ]
    },
    {
     "id": "YEMEN-09171525-03",
     "title": "פניית סעודיה לסין בבקשה לעזרה",
     "summary": "בעקבות ההסלמה והתקדמות החות'ים, סעודיה פנתה לסין בבקשה לסיוע בריסון החות'ים.",
     "axis": "הציר הסעודי-מערבי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T12:46:29+00:00",
     "last_update_at": "2026-09-17T12:56:52+00:00",
     "what_is_not_verified": "פרטים מדויקים על כל תוכן השיחות החסאיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_gcaptain",
       "source_root_id": "or_unknown_origin",
       "url": "https://gcaptain.com/china-presses-iran-to-help-rein-in-houthis-after-saudi-appeal-sources-say/",
       "published_at": "2026-09-17T12:56:52+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47777",
       "published_at": "2026-09-17T12:50:54+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/exclusive-china-presses-iran-help-rein-houthis-after-saudi-appeal-sources-say",
       "published_at": "2026-09-17T12:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "בייג'ינג, סין",
       "lat": 39.9057,
       "lon": 116.3913
      }
     ]
    },
    {
     "id": "YEMEN-09171525-04",
     "title": "פגישת ארה\"ב עם מנהיגי החות'ים בעומאן",
     "summary": "נציגי ממשל ארצות הברית נפגשו עם מנהיגי החות'ים בשגרירות במסקט שבעומאן.",
     "axis": "ציר ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-16T14:56:40+00:00",
     "last_update_at": "2026-09-16T18:44:34+00:00",
     "what_is_not_verified": "מלוא ההבנות שהושגו בפגישה זו",
     "is_new_in_window": false,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_d1227348aa154cea",
       "url": "https://www.newarab.com/news/yemen-war-ramps-further-hormuz-stalemate-persists",
       "published_at": "2026-09-16T18:44:34+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_d1227348aa154cea",
       "url": "https://www.theguardian.com/world/2026/sep/16/us-officials-decide-against-backing-saudi-arabia-yemen-meeting-houthi-leaders",
       "published_at": "2026-09-16T14:56:40+00:00"
      }
     ],
     "places": [
      {
       "name": "מסקט, עומאן",
       "lat": 23.6124,
       "lon": 58.5938
      }
     ]
    },
    {
     "id": "YEMEN-09171525-05",
     "title": "האשמת סעודיה את החות'ים בירי כטב\"ם לעבר מכה",
     "summary": "ערב הסעודית האשימה את החות'ים בשיגור כטב\"ם לעבר העיר הקדושה מכה, טענה שהוכחשה על ידי החות'ים.",
     "axis": "הציר הסעודי-מערבי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-16T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-16T19:13:38+00:00",
     "last_update_at": "2026-09-16T20:08:24+00:00",
     "what_is_not_verified": "האחריות המדויקת לשיגור הכטב\"ם ומסלולו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20260916-saudi-arabia-accuses-houthis-of-targeting-mecca-calling-it-a-red-line",
       "published_at": "2026-09-16T20:08:24+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/saudi-arabia-accuses-houthis-of-targeting-mecca-warns-of-red-line",
       "published_at": "2026-09-16T19:13:38+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, ערב הסעודית",
       "lat": 21.4208,
       "lon": 39.8269
      }
     ]
    }
   ],
   "not_verified": [
    "טענת החות'ים כי זו הפלת מטוס הקרב הראשונה מסוגו",
    "טענות על הידלדלות מוחלטת של מלאי טילי היירוט בסעודיה",
    "בקשות רשמיות לפריסת הגנה אווירית זרה בסעודיה שלא זכו לאישור רשמי מצד המדינות המבוקשות"
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
     "value": 3.0333,
     "unit": "ILS",
     "change_pct": 0.07,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "הסרת ההגמוניה הסעודית מעל תימן",
      "הפסקת התערבות סעודיה בתימן ותשלום פיצויים",
      "שמירה על חופש השיט חוץ מאשר על ספינות סעודיות"
     ],
     "inferred": [
      "השתלטות על כל אזור החוף המערבי של תימן ומצר באב אלמנדב",
      "הרחבת ההשפעה האזורית כגורם בעל יכולת צבאית קריטית"
     ],
     "forecast": [
      "המשך הביצורים והחפירות באזור מצר באב אלמנדב",
      "המשך פגיעה בנכסים סעודיים עד להשגת הפסקת אש בתנאים שלהם"
     ]
    },
    {
     "actor": "ערב הסעודית",
     "declared": [
      "הגנה על העיר מכה ועל מתקנים חיוניים",
      "מניעת השתלטות עוינת על נתיבי השיט בים הסוף"
     ],
     "inferred": [
      "ניסיון לבלום את ההתקדמות החות'ית באמצעות לחץ דיפלומטי על סין ובעלות ברית",
      "חיפוש דרכים להפוגה או הפסקת אש זמנית"
     ],
     "forecast": [
      "הידוק שיתוף הפעולה עם שחקנים בינלאומיים להפעלת לחץ על איראן והחות'ים",
      "ניסיונות התארגנות מחדש מול קריסת כוחות בעלי ברית בתימן"
     ]
    },
    {
     "actor": "סין",
     "declared": [
      "קריאה לפומבי לאיפוק של כל הצדדים",
      "שמירה על חופש השיט בנתיבים הימיים"
     ],
     "inferred": [
      "דאגה עמוקה ליצוא הנפט והאנרגיה המגיעים מהמזרח התיכון",
      "ניצול מנופי השפעה מול איראן לשמירת היציבות הכלכלית"
     ],
     "forecast": [
      "המשך מגעים דיפלומטיים חשאיים מול טהראן לריסון המיליציות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/exclusive-china-presses-iran-help-rein-houthis-after-saudi-appeal-sources-say",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c8vgy3p6k3y9o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/saudi-arabia-accuses-houthis-of-targeting-mecca-warns-of-red-line",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_gcaptain",
     "url": "https://gcaptain.com/china-presses-iran-to-help-rein-in-houthis-after-saudi-appeal-sources-say/",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/16/us-officials-decide-against-backing-saudi-arabia-yemen-meeting-houthi-leaders",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/yemen-war-ramps-further-hormuz-stalemate-persists",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130334",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47777",
     "accessed_at": "2026-09-17T15:25:17+00:00"
    }
   ]
  },
  "previous_generated_at": null,
  "changes": {}
 }
};
