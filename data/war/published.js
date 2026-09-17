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
 },
 "iran": {
  "draft": "drafts/iran/2026-09-17T1539__iran-202609171539.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-17T15:39:00+00:00",
   "window": {
    "from": "2026-09-16T15:39:00+00:00",
    "to": "2026-09-17T15:39:00+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609171539"
   },
   "summary": "הדיווחים עוסקים במתיחות מול איראן במישורים שונים: חקירות האו\"ם לגבי תקיפות אמריקאיות, האשמות בינלאומיות נגד איראן בפשעים נגד האנושות, מאמצים דיפלומטיים של סין מול איראן בעקבות לחץ סעודי והתקדמות החות'ים בתימן, וכן התפתחויות פנים-איראניות, הצהרות על סיום או המשך עימות, ופעילות אכיפה וריגול.",
   "fronts": [
    {
     "name": "החזית האמריקאית-איראנית",
     "status": "פעיל / דיפלומטי"
    },
    {
     "name": "חזית תימן והים ה (אדום)",
     "status": "הסלמה והתקדמות חות'ית"
    },
    {
     "name": "חזית המפרץ וסעודיה",
     "status": "תקיפות אנרגיה ויירוטים"
    },
    {
     "name": "הזירה הפנים-איראנית",
     "status": "מחאות, משבר כלכלי ודיכוי"
    }
   ],
   "events": [
    {
     "id": "IRAN-09171539-01",
     "title": "דחיית מינוי ארה\"ב לסוכנות לאנרגיה אטומית",
     "summary": "איראן דחתה את מינוי ארה\"ב למועצת הנגידים של הסוכנות לאנרגיה אטומית.",
     "axis": "דיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T15:18:17+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T15:18:17+00:00",
     "last_update_at": "2026-09-17T15:18:17+00:00",
     "what_is_not_verified": "לא מאומת מעבר להצהרה הרשמית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_4d4805c8064e0e9f",
       "url": "https://en.irna.ir/news/86266841/Iran-strongly-rejects-membership-of-US-to-IAEA-BoG",
       "published_at": "2026-09-17T15:18:17+00:00"
      }
     ],
     "places": [
      {
       "name": "לונדון, בריטניה",
       "lat": 51.5074,
       "lon": -0.1278
      }
     ]
    },
    {
     "id": "IRAN-09171539-02",
     "title": "דו\"ח האו\"ם על תקיפות במינאב ולאמרד",
     "summary": "משלחת חקירת עובדות של האו\"ם קבעה שיש בסיס סביר להאמין שארה\"ב ביצעה תקיפות צבאיות על בית ספר ומתקן ספורט שהרגו אזרחים בפברואר.",
     "axis": "בין-לאומי",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-02-28T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T13:22:35+00:00",
     "last_update_at": "2026-09-17T15:07:47+00:00",
     "what_is_not_verified": "האחריות האמריקאית נדחתה או לא אושרה על ידי ארה\"ב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "or_un_experts",
       "url": "https://www.bbc.co.uk/news/articles/cm9w4n5nverdo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-09-17T15:07:47+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_un_experts",
       "url": "https://www.theguardian.com/world/2026/sep/17/iran-school-bombing-un-mission-us-military-behind-attack",
       "published_at": "2026-09-17T13:22:35+00:00"
      }
     ],
     "places": [
      {
       "name": "מינאב, איראן",
       "lat": 27.1506,
       "lon": 57.0753
      },
      {
       "name": "לאמרד, איראן",
       "lat": 27.3334,
       "lon": 53.1816
      }
     ]
    },
    {
     "id": "IRAN-09171539-03",
     "title": "האשמת איראן בפשעים נגד האנושות",
     "summary": "אמנסטי אינטרנשיונל האשימה את הרשויות באיראן בביצוע פשעים נגד האנושות במהלך דיכוי המחאות.",
     "axis": "זכויות אדם",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-16T20:09:08+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-16T20:09:08+00:00",
     "last_update_at": "2026-09-17T14:55:34+00:00",
     "what_is_not_verified": "טענות ארגון זכויות האדם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "fh_f3ae84b5f538c817",
       "url": "https://www.france24.com/en/amnesty-accuses-iran-of-crimes-against-humanity",
       "published_at": "2026-09-17T14:55:34+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_1e170c6e17634220",
       "url": "https://www.france24.com/en/amnesty-says-iran-committed-crimes-against-humanity-in-protests-crackdown",
       "published_at": "2026-09-16T20:09:08+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09171539-04",
     "title": "פניית סין לאיראן לבלימת החות'ים",
     "summary": "סין פנתה בחשאי לאיראן בבקשה שתפעיל את השפעתה על החות'ים בתימן כדי לבלום את התקדמותם בעקבות פנייה סעודית.",
     "axis": "דיפלומטי-אזורי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T12:44:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T12:44:25+00:00",
     "last_update_at": "2026-09-17T13:22:18+00:00",
     "what_is_not_verified": "המגעים החשאיים מבוססים על מקורות אנונימיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21444786",
       "published_at": "2026-09-17T13:22:18+00:00"
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
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1rmtuyyfe",
       "published_at": "2026-09-17T12:44:25+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09171539-05",
     "title": "העברת חוק הסנקציות על איראן ורוסיה בארה\"ב",
     "summary": "בית הנבחרים של ארה\"ב העביר את חוק הסנקציות לקראת חתימת הנשיא.",
     "axis": "אמריקאי-איראני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T12:11:45+00:00",
     "last_update_at": "2026-09-17T12:11:45+00:00",
     "what_is_not_verified": "לא מאומת האם נחתם סופית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_3959f0afeb9f592d",
       "url": "https://www.iranintl.com/en/202609175386",
       "published_at": "2026-09-17T12:11:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09171539-06",
     "title": "תקיפת צינור הנפט בסעודיה ויירוט כטב\"מים",
     "summary": "צינור הנפט המזרחי-מערבי בסעודיה נפגע בתקיפת כטב\"מים שמקורה בעיראק, והיו אירועי יירוט כטב\"מים בממלכה.",
     "axis": "המפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-11T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-16T17:36:16+00:00",
     "last_update_at": "2026-09-17T12:44:25+00:00",
     "what_is_not_verified": "זהות המפעילים המדויקת של המיליציות בעיראק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/s1rmtuyyfe",
       "published_at": "2026-09-17T12:44:25+00:00"
      },
      {
       "source_id": "src_lwj",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.longwarjournal.org/archives/2026/09/iraq-continues-investigating-attack-on-saudi-arabia-from-iraqi-territory.php",
       "published_at": "2026-09-16T19:58:59+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/commentisfree/2026/sep/16/the-guardian-view-on-the-houthi-advance-in-yemen-another-vital-middle-east-artery-becomes-a-battlefield",
       "published_at": "2026-09-16T17:36:16+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      }
     ]
    },
    {
     "id": "IRAN-09171539-07",
     "title": "הרשעת ישראלי בריגול עבור איראן",
     "summary": "בית משפט גזר 13.5 שנות מאסר על אלכסנדר גרנובסקי שהורשע בביצוע משימות עבור מפעיל איראני.",
     "axis": "פנים-ישראלי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-16T15:50:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-16T15:50:45+00:00",
     "last_update_at": "2026-09-16T15:50:45+00:00",
     "what_is_not_verified": "לא מאומת מעבר לפרטי כתב האישום וגזר הדין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/47755",
       "published_at": "2026-09-16T15:50:45+00:00"
      }
     ],
     "places": [
      {
       "name": "פתח תקווה, ישראל",
       "lat": 32.0878,
       "lon": 34.886
      },
      {
       "name": "חדרה, ישראל",
       "lat": 32.4407,
       "lon": 34.9401
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על מגעים ישירים והסכמים קרבים בין איראן לארה\"ב",
    "פרטי הפנייה החשאית של סין לאיראן לפי מקורות אנונימיים",
    "ההערכות המדויקות על היקף הנזק לאתרי צבא בארה\"ב"
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
     "value": 3.0333,
     "unit": "ILS",
     "change_pct": 0.07,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "דחיית ההתערבות האמריקאית במוסדות בינלאומיים",
      "המשך פיתוח טכנולוגיות הגנה והרתעה"
     ],
     "inferred": [
      "שמירה על שליטה באזורי מעבר ימיים אסטרטגיים כמו מצר הורמוז",
      "ניסיון להתמודד עם משבר כלכלי פנימי ובידוד בינלאומי"
     ],
     "forecast": [
      "המשך שימוש בבעלי ברית אזוריים כמנופי לחץ",
      "שמירה על קו נוקשה מול סנקציות מערביות"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [
      "העברת סנקציות נוספות על איראן",
      "רצון להגיע לסיום העימות או לפתרון דיפלומטי לפי הצהרות נשיא ארה\"ב"
     ],
     "inferred": [
      "החלשת היכולות הצבאיות והגרעיניות של איראן",
      "התמודדות עם שחיקה של משאבים צבאיים באסיה והמפרץ"
     ],
     "forecast": [
      "שילוב של לחץ כלכלי, סנקציות ואיומים צבאיים מתמשכים"
     ]
    },
    {
     "actor": "סין",
     "declared": [
      "קריאה פומבית לאיפוק ושמירה על חופש השיט"
     ],
     "inferred": [
      "רצון למנוע פגיעה באספקת האנרגיה ובאינטרסים הכלכליים שלה במפרץ ובתימן"
     ],
     "forecast": [
      "המשך תיווך חשאי ודיפלומטי מול טהרן למניעת הסלמה רחבה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/exclusive-china-presses-iran-help-rein-houthis-after-saudi-appeal-sources-say",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cm9w4n5nverdo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/amnesty-says-iran-committed-crimes-against-humanity-in-protests-crackdown",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/commentisfree/2026/sep/16/the-guardian-view-on-the-houthi-advance-in-yemen-another-vital-middle-east-artery-becomes-a-battlefield",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609175386",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86266841/Iran-strongly-rejects-membership-of-US-to-IAEA-BoG",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21444786",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_lwj",
     "url": "https://www.longwarjournal.org/archives/2026/09/iraq-continues-investigating-attack-on-saudi-arabia-from-iraqi-territory.php",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47755",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/s1rmtuyyfe",
     "accessed_at": "2026-09-17T15:39:00+00:00"
    }
   ]
  },
  "previous_generated_at": null,
  "changes": {}
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-17T1541__ukraine-202609171541.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-17T15:41:49+00:00",
   "window": {
    "from": "2026-09-16T15:41:49+00:00",
    "to": "2026-09-17T15:41:49+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609171541"
   },
   "summary": "הדיווחים מתמקדים בהסלמה בתקיפות אוויריות הדדיות: אוקראינה מדווחת על פגיעות במטרות אנרגיה וצבא בעומק רוסיה (ירוסלבל ורוסטוב) ויירוט כטב\"מים, בעוד רוסיה ממשיכה בתקיפות שגרמו לנזקים באזורים שונים באוקראינה (זפורוז'יה וקייב). במקביל, ארה\"ב מקדמת סנקציות חדשות, ופולין מעלה את דריכות חיל האוויר שלה עקב פרובוקציות ופעילות גבול.",
   "fronts": [
    {
     "name": "חזית האוויר ועומק רוסיה",
     "status": "פעיל מאוד עם תקיפות הדדיות באמצעות כטב\"מים וטילים"
    },
    {
     "name": "חזית הדרום והמזרח באוקראינה",
     "status": "לחימה קרקעית, תקיפות על תשתיות ואזרחים (זפורוז'יה)"
    },
    {
     "name": "הזירה הדיפלומטית והכלכלית",
     "status": "החמרת סנקציות מצד המערב וגינויים הדדיים"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09171541-01",
     "title": "תקיפת כטב\"ם על אוטובוס בזפורוז'יה",
     "summary": "חמישה בני אדם נפצעו כתוצאה מתקיפת רחפן פצוע על אוטובוס ברובע קוסמיצני בזפורוז'יה.",
     "axis": "חזית הדרום והמזרח באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T14:55:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T14:55:00+00:00",
     "last_update_at": "2026-09-17T14:55:00+00:00",
     "what_is_not_verified": "חומרת הפציעות המלאה מעבר לדיווחים הראשוניים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e08242be673c5ae9",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/17/8053949/",
       "published_at": "2026-09-17T14:55:00+00:00"
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
     "id": "UKRAINE-09171541-02",
     "title": "תקיפות כטב\"ם ומפעלים ברוסיה (ירוסלבל ורוסטוב)",
     "summary": "אוקראינה ביצעה תקיפות כטב\"מים שהובילו לנזק בבית זיקוק בירוסלבל ובשדה תעופה צבאי ברוסטוב על הדון, וכן ניתוקי חשמל באזורים שונים.",
     "axis": "עומק רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T07:28:46+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T07:28:46+00:00",
     "last_update_at": "2026-09-17T07:28:46+00:00",
     "what_is_not_verified": "מספר הכלים המדויק שנפגע לעומת מספר הכלים שנטען שייורטו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/09/17/ukrainian-drone-attack-sets-russian-oil-refinery-on-fire-cuts-power-to-part-of-russian-city",
       "published_at": "2026-09-17T07:28:46+00:00"
      }
     ],
     "places": [
      {
       "name": "ירוסלבל, רוסיה",
       "lat": 57.6264,
       "lon": 39.8934
      },
      {
       "name": "רוסטוב על הדון, רוסיה",
       "lat": 47.261,
       "lon": 39.7249
      }
     ]
    },
    {
     "id": "UKRAINE-09171541-03",
     "title": "אישור סנקציות חדשות על רוסיה בבית הנבחרים האמריקאי",
     "summary": "בית הנבחרים של ארצות הברית הצביע על חבילת סנקציות מקיפה נגד הכלכלה הרוסית, מגזר האנרגיה ותעשיית הביטחון.",
     "axis": "הזירה הבינלאומית והכלכלית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T10:46:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T10:46:29+00:00",
     "last_update_at": "2026-09-17T14:51:51+00:00",
     "what_is_not_verified": "השפעת הסנקציות בפועל על עצירת המכונה הצבאית הרוסית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_86a5b83ea3baaddd",
       "url": "https://kyivindependent.com/sanctions-from-hell-can-west-finally-choke-off-kremlins-war-machine/",
       "published_at": "2026-09-17T14:51:51+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_86a5b83ea3baaddd",
       "url": "https://meduza.io/en/news/2026/09/17/sanctions-from-hell-from-us-will-complicate-peace-talks-kremlin-says",
       "published_at": "2026-09-17T10:46:29+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון, ארה\"ב",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "UKRAINE-09171541-04",
     "title": "פגיעה במפעל הפלדה זפורוז'סטאל",
     "summary": "רוסיה תקפה באמצעות שני טילים בליסטיים את מפעל הפלדה זפורוז'סטאל, מה שהביא לפציעת עובד אחד.",
     "axis": "חזית הדרום והמזרח באוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T14:27:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T14:27:29+00:00",
     "last_update_at": "2026-09-17T14:27:29+00:00",
     "what_is_not_verified": "היקף הנזק המדויק לתשתיות הייצור במפעל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_metinvest",
       "url": "https://kyivindependent.com/russian-forces-strike-major-ukrainian-steel-plant-for-4th-time-in-a-month-injuring-1-worker/",
       "published_at": "2026-09-17T14:27:29+00:00"
      }
     ],
     "places": [
      {
       "name": "זפורוז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    }
   ],
   "not_verified": [
    "טענות רוסיה כי אירועי בוצ'ה בוימו על ידי קייב וכי הקורבנות לא היו אזרחים תושבי המקום",
    "טענות גרינפיס ומדביסקי אינטליגנציה כי אין ראיות לפגיעות אוקראיניות בתשתיות תחנת הכוח הגרעינית בזפורוז'יה",
    "ההערכות והדיווחים המודיעיניים על כך שרוסיה מבצעת מתקפות היברידיות מתוכננות ברחבי אירופה להטלת פחד או שיבוש",
    "מספר הכלים המדויק שהושמדו או יורטו בשמי רוסיה ואוקראינה לפי הודעות המשרדים הצבאיים"
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
     "value": 1.1481,
     "unit": "USD",
     "change_pct": -0.49,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "פגיעה במטרות צבאיות, בתי זיקוק ושדות תעופה צבאיים בעומק רוסיה",
      "הרחבת ייצור אמצעי יירוט מקומיים כנגד רחפנים מתקדמים"
     ],
     "inferred": [
      "שיבוש הלוגיסטיקה ותעשיית האנרגיה הרוסית כדי להקשות על מימון המלחמה",
      "גיוס תמיכה מערבית נוספת ואמצעי הגנה אווירית"
     ],
     "forecast": [
      "המשך ניסיונות פגיעה במטרות תשתית בתוך שטחי רוסיה",
      "התבססות על אמצעי יירוט מתוצרת מקומית מול איומי כטב\"מים מהירים"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "סיום הסכסוך בתנאים של רוסיה ומאבק נגד תשתיות צבאיות ואנרגיה באוקראינה",
      "חשיפת פעילות שלטענתה מוכיחה זיופים באירועים כמו בוצ'ה"
     ],
     "inferred": [
      "הפעלת לחץ מתמשך על תשתיות קריטיות באוקראינה ובדיקת חולשות במערך ההגנה של נאט\"ו",
      "תגובה למכה הכלכלית מאירופה ומארה\"ב דרך הגברת פעולות היברידיות"
     ],
     "forecast": [
      "הגברת התקיפות על מתקני אנרגיה ותעשייה באוקראינה",
      "המשך מאמצים דיפלומטיים ותקשורתיים לערעור הלגיטימציה של ההנהגה בקייב"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/russian-forces-strike-major-ukrainian-steel-plant-for-4th-time-in-a-month-injuring-1-worker/",
     "accessed_at": "2026-09-17T15:41:49+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/17/sanctions-from-hell-from-us-will-complicate-peace-talks-kremlin-says",
     "accessed_at": "2026-09-17T15:41:49+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/17/8053949/",
     "accessed_at": "2026-09-17T15:41:49+00:00"
    }
   ]
  },
  "previous_generated_at": null,
  "changes": {}
 },
 "north": {
  "draft": "drafts/north/2026-09-17T1542__north-202609171542.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-17T15:42:37+00:00",
   "window": {
    "from": "2026-09-16T15:42:37+00:00",
    "to": "2026-09-17T15:42:37+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609171542"
   },
   "summary": "הדיווחים עוסקים בשיחות בפריז על עתיד לבנון ויוניפי\"ל, תקיפות בדרום לבנון, הבנות לכאורה בין ארה\"ב לחות'ים בעומאן, יוזמה של טורקיה לגבי הים השחור, ופגישות דיפלומטיות אזוריות הכוללות את טורקיה, סוריה וירדן.",
   "fronts": [
    {
     "name": "לבנון-ישראל",
     "status": "פעיל, כולל תקיפות בדרום לבנון ודיפלומטיה בינלאומית"
    },
    {
     "name": "תימן והים האדום",
     "status": "מתיחות, השתלטות חות'ית ומגעים עקיפים עם ארה\"ב"
    },
    {
     "name": "סוריה",
     "status": "תהליכי ייצוב מחדש, משפטים ופעילות דיפלומטית"
    }
   ],
   "events": [
    {
     "id": "NORTH-09171542-01",
     "title": "תקיפות והפצצות בדרום לבנון",
     "summary": "התקפות ופיצוצים יזומים באל מנצורי בדרום לבנון",
     "axis": "לבנון-ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T13:52:01+00:00",
     "last_update_at": "2026-09-17T14:37:30+00:00",
     "what_is_not_verified": "לא מאומת מי עומד מאחורי כל פיצוץ ספציפי מלבד דיווחים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/128167/",
       "published_at": "2026-09-17T14:37:30+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/128157/",
       "published_at": "2026-09-17T14:06:00+00:00"
      },
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94373",
       "published_at": "2026-09-17T13:54:15+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/130393",
       "published_at": "2026-09-17T13:52:01+00:00"
      }
     ],
     "places": [
      {
       "name": "אל מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      }
     ]
    },
    {
     "id": "NORTH-09171542-02",
     "title": "שיחות בפריז על עתיד לבנון ויוניפי\"ל",
     "summary": "מנהיגי צרפת, לבנון וירדן נפגשו בפריז לדון בתמיכה בצבא לבנון ובהערכות לקראת סיום משימת יוניפי\"ל",
     "axis": "לבנון-בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-17T09:05:35+00:00",
     "last_update_at": "2026-09-17T14:46:07+00:00",
     "what_is_not_verified": "האם יוקם כוח רב-לאומי חדש בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/lebanon-on-paris-talks-the-general-sentiment-here-is-very-little-hope",
       "published_at": "2026-09-17T14:46:07+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/macron-hosts-lebanon-security-talks-un-mission-nears-end",
       "published_at": "2026-09-17T13:30:28+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/lebanon-unifil-withdrawal-at-the-heart-of-paris-talks",
       "published_at": "2026-09-17T13:23:41+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958327/macron-a-sovereign-stable-lebanon-is-key-to-regional-peace/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958327",
       "published_at": "2026-09-17T11:58:18+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958324/jordan-france-reaffirm-support-for-lebanons-sovereignty-state-institut/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958324",
       "published_at": "2026-09-17T11:42:00+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/macron-pushes-israeli-withdrawal-paris-meeting-lebanon",
       "published_at": "2026-09-17T11:12:30+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/958286/aoun-in-paris-lebanon-has-chosen-the-state-now-it-needs-international/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958286",
       "published_at": "2026-09-17T09:05:35+00:00"
      }
     ],
     "places": [
      {
       "name": "פריז, צרפת",
       "lat": 48.8535,
       "lon": 2.3484
      }
     ]
    },
    {
     "id": "NORTH-09171542-03",
     "title": "הסכם הבנות בין ארה\"ב לחות'ים בעומאן",
     "summary": "מקורות דיווחו שארצות הברית הגיעה להבנות עם החות'ים בעומאן לפיהן ארה\"ב תימנע מהתערבות בתימן בתמורה לאי-פגיעה בספינות אמריקאיות",
     "axis": "תימן-ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T15:33:21+00:00",
     "last_update_at": "2026-09-17T15:33:21+00:00",
     "what_is_not_verified": "האם ארה\"ב אכן התחייבה רשמית שלא להתערב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/us-intervention-table-yemen-despite-saudi-pressure",
       "published_at": "2026-09-17T15:33:21+00:00"
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
     "id": "NORTH-09171542-04",
     "title": "משפט על האלימות בסוריה",
     "summary": "בית משפט בסוריה גזר עונשי מאסר ומוות על מעורבים באלימות באזור החוף",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T12:31:14+00:00",
     "last_update_at": "2026-09-17T13:42:13+00:00",
     "what_is_not_verified": "פרטי הביצוע המלאים של גזרי הדין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/syrian-court-issues-death-prison-sentences-for-2025-coastal-violence/4060210",
       "published_at": "2026-09-17T13:42:13+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/17/syrian-court-sentences-three-linked-to-coastal-violence?traffic_source=rss",
       "published_at": "2026-09-17T12:31:14+00:00"
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
     "id": "NORTH-09171542-05",
     "title": "הצעה טורקית להפסקת תקיפות בים השחור",
     "summary": "טורקיה העבירה הצעה לרוסיה ואוקראינה לעצירת פגיעה בספינות אזרחיות בים השחור",
     "axis": "רוסיה-אוקראינה-טורקיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-17T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-17T08:02:56+00:00",
     "last_update_at": "2026-09-17T12:55:00+00:00",
     "what_is_not_verified": "האם הצדדים יסכימו להצעה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_dailysabah",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.dailysabah.com/politics/turkiye-proposes-deal-to-end-black-sea-attacks/news",
       "published_at": "2026-09-17T12:55:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/world-news/958251/turkey-proposes-russia-ukraine-deal-to-end-black-sea-shipping-attacks/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958251",
       "published_at": "2026-09-17T08:02:56+00:00"
      }
     ],
     "places": [
      {
       "name": "אנקרה, טורקיה",
       "lat": 39.9208,
       "lon": 32.854
      }
     ]
    }
   ],
   "not_verified": [
    "קיומו המדויק של הסכם מחייב בין ארה\"ב לחות'ים בעומאן",
    "ההצלחה בפועל של היוזמה הטורקית בים השחור",
    "פרטי ההסכם המסגרת המלאים בין לבנון לישראל"
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
     "value": 3.0333,
     "unit": "ILS",
     "change_pct": 0.07,
     "source_id": "src_ecb",
     "as_of": "2026-09-17T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "לבנון",
     "declared": [
      "חיזוק סמכות המדינה והצבא בכל השטח",
      "גיוס תמיכה בינלאומית ארוכת טווח"
     ],
     "inferred": [
      "רצון למנוע וואקום ביטחוני לאחר סיום משימת יוניפי\"ל"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים להבטחת סיוע צבאי וכלכלי"
     ]
    },
    {
     "actor": "טורקיה",
     "declared": [
      "הצעת פתרונות להפסקת תקיפות ספינות בים השחור",
      "הרחבת שיתופי פעולה אזוריים (כגון באפגניסטן וסוריה)"
     ],
     "inferred": [
      "ניסיון לבסס מעמד של מתווך אזורי מרכזי"
     ],
     "forecast": [
      "המשך ניסיונות תיווך בסכסוכים ימיים ואזוריים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/17/syrian-court-sentences-three-linked-to-coastal-violence?traffic_source=rss",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/128157/",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/macron-hosts-lebanon-security-talks-un-mission-nears-end",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/syrian-court-issues-death-prison-sentences-for-2025-coastal-violence/4060210",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_dailysabah",
     "url": "https://www.dailysabah.com/politics/turkiye-proposes-deal-to-end-black-sea-attacks/news",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/lebanon-unifil-withdrawal-at-the-heart-of-paris-talks",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/world-news/958251/turkey-proposes-russia-ukraine-deal-to-end-black-sea-shipping-attacks/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958251",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/us-intervention-table-yemen-despite-saudi-pressure",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130393",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94373",
     "accessed_at": "2026-09-17T15:42:37+00:00"
    }
   ]
  },
  "previous_generated_at": null,
  "changes": {}
 }
};
