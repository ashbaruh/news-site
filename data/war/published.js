/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-09-21T2341__yemen-202609212341.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-09-21T23:41:12+00:00",
   "window": {
    "from": "2026-09-20T23:41:12+00:00",
    "to": "2026-09-21T23:41:12+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "yemen-202609212341"
   },
   "summary": "הלחימה בתימן מחריפה בעקבות מתקפה קרקעית רחבה של החות'ים שבה השתלטו על שטחים אסטרטגיים לאורך חוף הים האדום ומצר באב אל-מנדב, לצד שיגור תקיפות לעבר ערב הסעודית. סעודיה פנתה לסיוע צבאי חיצוני וקיבלה תמיכה הגנתית מבריטניה, בעוד שארה\"ב שקלה התערבות צבאית אך נסוגה מכך ברגע האחרון מחשש להסלמה רחבה יותר מול איראן. במקביל, המשבר יוצר גלי עקורים המוניים ופוגע בתנועת הסחר הימית בים האדום.",
   "fronts": [
    {
     "name": "חזית חוף הים האדום ומצר באב אל-מנדב",
     "status": "פעילה ומתקדמת בהשתלטות החות'ים"
    },
    {
     "name": "החזית החות'ית מול סעודיה",
     "status": "פעילה עם שיגור טילים ורחפנים לעבר ערב הסעודית"
    },
    {
     "name": "החזית הפנימית בתימן (טאיז ואזורים נוספים)",
     "status": "פעילה עם עימותים קרקעיים ופעילות רחפנים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-09212341-01",
     "title": "תקיפה אווירית סעודית בשוק מקומי",
     "summary": "החות'ים פרסמו תיעוד שלטענתם מציג תקיפה אווירית סעודית בשוק מקומי בכפר סמוך לבאב אל-מנדב.",
     "axis": "הזירה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T23:40:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T23:40:36+00:00",
     "last_update_at": "2026-09-21T23:40:36+00:00",
     "what_is_not_verified": "נכונות הטענה שמדובר בתקיפה סעודית והאם נגרם נזק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-air-strike-targets-local-market-village-near-bab-al-mandeb-yemen",
       "published_at": "2026-09-21T23:40:36+00:00"
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
     "id": "YEMEN-09212341-02",
     "title": "הסכמת בריטניה לספק תדלוק אווירי הגנתי לסעודיה",
     "summary": "ראש ממשלת בריטניה הודיע על הסכמה לבקשת סעודיה לספק תדלוק אווירי הגנתי זמני כדי לסייע בבלימת התקפות רחפנים וטילים של החות'ים.",
     "axis": "סעודיה-בריטניה-החות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T21:03:49+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T21:03:49+00:00",
     "last_update_at": "2026-09-21T23:30:21+00:00",
     "what_is_not_verified": "היקף הביצוע בפועל של המשימות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/uk-agrees-support-saudi-struggle-houthis-reports",
       "published_at": "2026-09-21T23:30:21+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/uks-burnham-agrees-saudi-request-refuelling-support",
       "published_at": "2026-09-21T22:24:10+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/uks-burnham-agrees-saudi-request-refuelling-support",
       "published_at": "2026-09-21T21:46:32+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/politics/2026/sep/21/uk-to-give-support-to-saudi-jets-in-attempt-to-counter-houthi-fighters",
       "published_at": "2026-09-21T21:33:09+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1369352",
       "published_at": "2026-09-21T21:03:49+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09212341-03",
     "title": "דרישה אירופית להגדלת כוח המשימה הימי בים האדום",
     "summary": "ראש המדיניות החוץ של האיחוד האירופי ציינה כי המשימה הימית בים האדום זקוקה ליותר מעשרה כלי שיט מלחמתיים בשל החמרה במצב.",
     "axis": "הים האדום",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T22:46:28+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T22:46:28+00:00",
     "last_update_at": "2026-09-21T22:46:28+00:00",
     "what_is_not_verified": "האם יוקצו כלי שיט נוספים בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/eus-kallas-says-red-sea-naval-mission-needs-more-10-ships",
       "published_at": "2026-09-21T22:46:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09212341-04",
     "title": "יירוט רחפון חות'י בטאיז",
     "summary": "כוחות ממשלת תימן הודיעו כי הפילו כלי טיס בלתי מאויש של החות'ים במרחב אל-כדחה שבמחוז טאיז.",
     "axis": "הזירה בתימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T16:13:24+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:13:24+00:00",
     "last_update_at": "2026-09-21T16:13:24+00:00",
     "what_is_not_verified": "פרטים נוספים על תוצאות היירוט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-say-houthi-drone-shot-down",
       "published_at": "2026-09-21T16:13:24+00:00"
      }
     ],
     "places": [
      {
       "name": "טאיז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      }
     ]
    },
    {
     "id": "YEMEN-09212341-05",
     "title": "ביטול תקיפה אמריקאית מתוכננת בתימן ברגע האחרון",
     "summary": "נשיא ארה\"ב דונלד טראמפ הורה לפנטגון להיערך לתקיפה בתימן לבקשת סעודיה, אך חזר בו וביטל את הפעולה ברגע האחרון עקב חשש מהסלמה מול איראן.",
     "axis": "ארה\"ב-תימן-סעודיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T16:08:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:08:03+00:00",
     "last_update_at": "2026-09-21T16:13:06+00:00",
     "what_is_not_verified": "האם התוכניות הצבאיות יוחזרו לשולחן בהמשך",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r16yyhrkze",
       "published_at": "2026-09-21T16:13:06+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1zkvhckmx",
       "published_at": "2026-09-21T16:13:06+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21459391",
       "published_at": "2026-09-21T16:08:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-09212341-06",
     "title": "גינוי האו\"ם להתקפה חות'ית על ריאד וגל עקורים בתימן",
     "summary": "האו\"ם גינה את התקפת החות'ים נגד סעודיה לרבות ניסיון פגיעה בריאד, ודיווח על זינוק במספר העקורים בתוך תימן למעל 130,000.",
     "axis": "סעודיה-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T12:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T12:00:00+00:00",
     "last_update_at": "2026-09-21T12:00:00+00:00",
     "what_is_not_verified": "מספר נפגעים מדויק כתוצאה מהתקיפה על ריאד",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/09/1168387",
       "published_at": "2026-09-21T12:00:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "היקף הנזק המדויק ממתקפות החות'ים בריאד ובמתקני הדלק הסעודיים",
    "מספר הנפגעים המדויק בלחימה האחרונה בתימן",
    "האם ארה\"ב תחדש את תוכניות התקיפה בתימן"
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
     "value": 3.0115,
     "unit": "ILS",
     "change_pct": -0.86,
     "source_id": "src_ecb",
     "as_of": "2026-09-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "החות'ים",
     "declared": [
      "מצור תמורת מצור ודרישה לפתיחת נמלים ושדות תעופה"
     ],
     "inferred": [
      "הרחבת השליטה הטריטוריאלית לאורך חוף הים האדום ומצר באב אל-מנדב",
      "הפעלת לחץ כלכלי וצבאי על סעודיה ועל נתיבי השיח הבינלאומיים"
     ],
     "forecast": [
      "המשך ניסיונות ביסוס השליטה בנתיבי הימאות בדרום ים האדום",
      "שימור לחץ צבאי באמצעות כטב\"מים וטילים"
     ]
    },
    {
     "actor": "ערב הסעודית",
     "declared": [
      "בקשת סיוע צבאי והגנתי מבעלות ברית לבלימת התקפות החות'ים"
     ],
     "inferred": [
      "חשש מפגיעה אקוטית בתשתיות אנרגיה וכלכלה",
      "ניסיון לבלום את ההתקדמות החות'ית בתימן באמצעים מדיניים וצבאיים"
     ],
     "forecast": [
      "הסתמכות מוגברת על מערכות הגנה וגיבוי זרות כמו בריטניה",
      "בחינת פתרונות מדיניים מול האיום החות'י"
     ]
    },
    {
     "actor": "ארצות הברית",
     "declared": [],
     "inferred": [
      "זהירות מפני הסלמה רחבה שתגרור עימות ישיר ומורחב מול איראן",
      "התלבטות באשר להיקף המעורבות הישירה בלחימה בתימן לצד סעודיה"
     ],
     "forecast": [
      "הימנעות מתקיפות ישירות בתימן בטווח הקצר כל עוד אין שינוי בהערכת הסיכון מול איראן"
     ]
    },
    {
     "actor": "בריטניה",
     "declared": [
      "מתן תמיכה הגנתית ותדלוק אווירי לזכות בייצוב האזור ובלימת התקפות על סעודיה"
     ],
     "inferred": [
      "רצון לשמור על זרימת האנרגיה מהמפרץ ולמנוע זעזועים כלכליים נוספים"
     ],
     "forecast": [
      "הפעלת משימות תדלוק אווירי הגנתי בלבד בהתאם לבקשה הסעודית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/eus-kallas-says-red-sea-naval-mission-needs-more-10-ships",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/politics/2026/sep/21/uk-to-give-support-to-saudi-jets-in-attempt-to-counter-houthi-fighters",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21459391",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369352",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemeni-government-forces-say-houthi-drone-shot-down",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/09/1168387",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1zkvhckmx",
     "accessed_at": "2026-09-21T23:41:12+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T05:23:04+00:00",
  "changes": {
   "YEMEN-09212341-01": {
    "kind": "new"
   },
   "YEMEN-09212341-02": {
    "kind": "new"
   },
   "YEMEN-09212341-03": {
    "kind": "new"
   },
   "YEMEN-09212341-04": {
    "kind": "new"
   },
   "YEMEN-09212341-05": {
    "kind": "new"
   },
   "YEMEN-09212341-06": {
    "kind": "possible",
    "prev": "שיגור טילים וכטב\"מים לעבר ריאד וינבוע",
    "score": 0.633
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-09-21T1634__iran-202609211634.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-09-21T16:34:17+00:00",
   "window": {
    "from": "2026-09-20T16:34:17+00:00",
    "to": "2026-09-21T16:34:17+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202609211634"
   },
   "summary": "העימות בין איראן לבין ארה\"ב וישראל נמשך כאשר ארה\"ב מפעילה לחץ כלכלי וסנקציות חדשות, ומאיימת לנקוט צעדים נוספים, בעוד איראן ושלוחותיה מאיימות להרחיב את המערכה וממשיכות לשלוט בצמתים אסטרטגיים ימיים. מדינות האזור כמו קטאר ואיחוד האמירויות קוראות למסגרת ביטחונית אזורית חדשה הכוללת את איראן כדי למנוע הידרדרות נוספת.",
   "fronts": [
    {
     "name": "החזית הימית (הורמוז)",
     "status": "פעילה ומתוחה עם פגיעה בכלי שיט וירידה משמעותית בתנועה"
    },
    {
     "name": "החזית הדיפלומטית והכלכלית",
     "status": "החרפת סנקציות מצד ארה\"ב וניסיונות גישור אזוריים"
    }
   ],
   "events": [
    {
     "id": "IRAN-09211634-01",
     "title": "ביטול תקיפה אמריקנית בתימן ברגע האחרון",
     "summary": "הנשיא האמריקני הורה לפנטגון להצטרף למערכה נגד החות'ים וביטל את התקיפה ברגע האחרון בשל חשש מהסלמה מול איראן.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:13:06+00:00",
     "last_update_at": "2026-09-21T16:13:06+00:00",
     "what_is_not_verified": "הפרטים מבוססים על דברי בכירים אמריקנים ולא על הודעה רשמית של הפנטגון",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1zkvhckmx",
       "published_at": "2026-09-21T16:13:06+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09211634-02",
     "title": "פגיעה במכלית נפט במצר הורמוז",
     "summary": "מכלית גפ\"ס נפגעה משברים של קלע לא מוכר במצר הורמוז, והמשיכה בדרכה כשכל אנשי הצוות בטוחים.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T14:03:15+00:00",
     "last_update_at": "2026-09-21T15:38:46+00:00",
     "what_is_not_verified": "זהות הקלע הלא מוכר ודפוס הפגיעה המלא",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_47258434404b4fc2",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lpg-tanker-hit-debris-unknown-projectile-hormuz",
       "published_at": "2026-09-21T15:38:46+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_47258434404b4fc2",
       "url": "https://www.france24.com/en/middle-east/20260921-projectile-hits-tanker-as-it-enters-the-strait-of-hormuz",
       "published_at": "2026-09-21T14:03:15+00:00"
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
     "id": "IRAN-09211634-03",
     "title": "ארה\"ב מאיימת לנתק חברות תעופה איראניות ממערכת הדולר",
     "summary": "מזכיר האוצר האמריקני הזהיר מפני ניתוק משדות תעופה וחברות המספקות שירותים לחברות תעופה איראניות ברחבי העולם.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T11:44:58+00:00",
     "last_update_at": "2026-09-21T15:18:12+00:00",
     "what_is_not_verified": "היactual implementation והיקף האכיפה בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_d23e9ec365e0dcb5",
       "url": "https://www.aljazeera.com/economy/2026/9/21/us-threatens-to-ground-iranian-airlines-worldwide-from-wednesday?traffic_source=rss",
       "published_at": "2026-09-21T15:18:12+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "fh_d23e9ec365e0dcb5",
       "url": "https://www.iranintl.com/en/202609218925",
       "published_at": "2026-09-21T11:44:58+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09211634-04",
     "title": "שיחת טלפון בין טראמפ לנשיא תימן",
     "summary": "נשיא ארה\"ב שוחח עם נשיא תימן שביקש תמיכה צבאית נגד החות'ים, אך מקורות ציינו כי טראמפ לא נתן התחייבות צבאית ישירה.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T14:46:29+00:00",
     "last_update_at": "2026-09-21T14:46:29+00:00",
     "what_is_not_verified": "תכנו המלא של השיחה והתחייבויות עתידיות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_four_sources_familiar_with_the_matter",
       "url": "https://www.al-monitor.com/originals/2026/09/trump-call-yemen-president-did-not-pledge-military-support-against-houthis-say",
       "published_at": "2026-09-21T14:46:29+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-09211634-05",
     "title": "סגירת מרכז שפה צרפתי בטהראן",
     "summary": "שלטונות איראן סגרו מרכז תרבות צרפתי המקושר לשגרירות, מה שהוביל להחלטת צרפת לזמן את שגריר איראן.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T06:46:27+00:00",
     "last_update_at": "2026-09-21T06:46:27+00:00",
     "what_is_not_verified": "הסיבות הרשמיות והמלאות לסגירה מצד איראן",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_2c187cec5274fa22",
       "url": "https://www.al-monitor.com/originals/2026/09/france-vows-response-after-iran-closes-language-centre-tehran",
       "published_at": "2026-09-21T06:46:27+00:00"
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
     "id": "IRAN-09211634-06",
     "title": "פגישתשרי הפנים של איראן ופקיסטן בטהראן",
     "summary": "שר הפנים של פקיסטן נפגש בטהראן עם שר הפנים של איראן לקידום קשרים דו-צדדיים והסכמים קודמים.",
     "axis": "ארה\"ב-ישראל מול איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T12:15:36+00:00",
     "last_update_at": "2026-09-21T14:33:04+00:00",
     "what_is_not_verified": "אינו מפורט מעבר לקיומה של הפגישה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "fh_2d3e85e9652f03cd",
       "url": "https://en.irna.ir/news/86270373/Iran-Pakistan-interior-ministers-meet-in-Tehran-to-advance-bilateral",
       "published_at": "2026-09-21T14:33:04+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "fh_fd213899a4726183",
       "url": "https://en.irna.ir/news/86270274/Pakistani-interior-minister-in-Tehran-for-talks-with-Iranian",
       "published_at": "2026-09-21T12:15:36+00:00"
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
    "האם ארה\"ב אכן תפתח מחדש בקרוב במערכת הפצצות נגד איראן",
    "תוכניותיו המדויקות של הנשיא טראמפ לגבי הפעולה הצבאית האפשרית",
    "זהות הגורם ששיגר את הקלע לעבר המכלית במצר הורמוז"
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
     "value": 3.0115,
     "unit": "ILS",
     "change_pct": -0.86,
     "source_id": "src_ecb",
     "as_of": "2026-09-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארה\"ב",
     "declared": [
      "עצירת הפעילות האיראנית המזיקה והפעלת לחץ כלכלי (מבצע 'אאוטקאסט כלכלי')",
      "מניעת שימוש בחברות תעופה איראניות בינלאומיות"
     ],
     "inferred": [
      "שאיפה ללחוץ על הכלכלה האיראנית עד קצה כדי להביא לשינוי התנהגות או קריסה",
      "הימנעות זמנית מפתיחת חזיתות נוספות מחשש להסלמה רחבה מדי"
     ],
     "forecast": [
      "החמרת הסנקציות והגבלות התעופה נגד גופים איראניים",
      "שמירה על כוננות צבאית גבוהה במפרץ ובבסיסים האזוריים"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "מוכנות למלחמה ממושכת מול ארה\"ב",
      "תגובה נחרצת לכל תוקפנות ואזהרה כלפי מדינות המארחות נכסים אמריקניים"
     ],
     "inferred": [
      "ניצול מנופים אזוריים (כגון מצר הורמוז ושלוחות) כדי לגבות מחיר מיריביה",
      "הסתגלות למצוקה כלכלית קשה בעקבות הפגיעה במגזר האנרגיה והתמ\"ג"
     ],
     "forecast": [
      "המשך איום ושיבוש של נתיבי השיט במפרץ",
      "חיזוק קשרים דיפלומטיים חלופיים עם שכנות כמו פקיסטן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/economy/2026/9/21/us-threatens-to-ground-iranian-airlines-worldwide-from-wednesday?traffic_source=rss",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/france-vows-response-after-iran-closes-language-centre-tehran",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20260921-projectile-hits-tanker-as-it-enters-the-strait-of-hormuz",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202609218925",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86270274/Pakistani-interior-minister-in-Tehran-for-talks-with-Iranian",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lpg-tanker-hit-debris-unknown-projectile-hormuz",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1zkvhckmx",
     "accessed_at": "2026-09-21T16:34:17+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T02:40:30+00:00",
  "changes": {
   "IRAN-09211634-01": {
    "kind": "new"
   },
   "IRAN-09211634-02": {
    "kind": "possible",
    "prev": "צבא איראן יירט כטב\"ם ביון אמריקאי במצר הורמוז",
    "score": 0.467
   },
   "IRAN-09211634-03": {
    "kind": "new"
   },
   "IRAN-09211634-04": {
    "kind": "new"
   },
   "IRAN-09211634-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "סגירת המרכז הצרפתי ללימוד שפות בטהרן וזימון השגריר",
    "score": 1.0
   },
   "IRAN-09211634-06": {
    "kind": "possible",
    "prev": "נסיעת שר החוץ של איראן לכינוס האו\"ם בניו יורק",
    "score": 0.633
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-09-22T0523__ukraine-202609220523.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-22T05:23:27+00:00",
   "window": {
    "from": "2026-09-21T05:23:27+00:00",
    "to": "2026-09-22T05:23:27+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609220523"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת תוך התמקדות בתשתיות אנרגיה, כאשר אוקראינה מבצעת תקיפות כטב\"מים נרחבות על בתי זיקוק בתוך רוסיה ורוסיה מגיבה במתקפות טילים על ערים באוקראינה. במקביל, מתקיימים מאמצים דיפלומטיים בינלאומיים בניו יורק ובאירופה סביב סוגיות סנקציות על רוסיה והסיוע הצבאי לאוקראינה.",
   "fronts": [
    {
     "name": "חזית המזרח והדרום (קו המגע באוקראינה)",
     "status": "פעיל"
    },
    {
     "name": "חזית התשתיות האנרגטיות (תקיפות עומק)",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09220523-01",
     "title": "פגישת זלנסקי ומקרון",
     "summary": "נשיא אוקראינה פגש את נשיא צרפת בניו יורק.",
     "axis": "דיפלומטיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T05:21:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T05:21:00+00:00",
     "last_update_at": "2026-09-22T05:21:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_611ee87e1f41a285",
       "url": "https://www.ukrinform.net/rubric-polytics/4166511-zelensky-met-with-macron-in-new-york.html",
       "published_at": "2026-09-22T05:21:00+00:00"
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
     "id": "UKRAINE-09220523-02",
     "title": "תקיפת כטב\"ם על בית זיקוק בסמרה",
     "summary": "כוחות אוקראיניים תקפו בלילה את בית הזיקוק לנפט בסמרה באמצעות כלי טיס בלתי מאויש.",
     "axis": "תקיפות אוויריות ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T01:58:36+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T01:58:36+00:00",
     "last_update_at": "2026-09-22T04:10:56+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_kyivind",
       "url": "https://kyivindependent.com/ukrainian-forces-strike-russian-oil-refinery-in-samara-oblast-in-overnight-drone-attack/",
       "published_at": "2026-09-22T04:10:56+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_kyivind",
       "url": "https://t.me/alexmehacarmel/47898",
       "published_at": "2026-09-22T01:58:36+00:00"
      }
     ],
     "places": [
      {
       "name": "סמרה, רוסיה",
       "lat": 53.1956,
       "lon": 50.1015
      }
     ]
    },
    {
     "id": "UKRAINE-09220523-03",
     "title": "פגיעת טילים בליסטיים בדניפרו",
     "summary": "מתקפת טילים בליסטיים רוסית בלילה פגעה בעיר דניפרו וגרמה להרוגים, פצועים ונזק למבנים.",
     "axis": "תקיפות אוויריות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T23:36:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T23:36:00+00:00",
     "last_update_at": "2026-09-22T04:04:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_e35a989014929f8f",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/22/8054526/",
       "published_at": "2026-09-22T04:04:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_931d1e7368e89317",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/22/8054525/",
       "published_at": "2026-09-21T23:36:00+00:00"
      }
     ],
     "places": [
      {
       "name": "דניפרו, אוקראינה",
       "lat": 51.5567,
       "lon": 30.6122
      },
      {
       "name": "קריווי ריה, אוקראינה",
       "lat": 47.9103,
       "lon": 33.3918
      },
      {
       "name": "פבלוגרד, אוקראינה",
       "lat": 48.5317,
       "lon": 35.8704
      }
     ]
    },
    {
     "id": "UKRAINE-09220523-04",
     "title": "הפעלת חיל האוויר הפולני",
     "summary": "פולין הציבה כלי טיס צבאיים במרחב האווירי שלה בתגובה לתקיפות רוסיות באוקראינה.",
     "axis": "הגנה אווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T20:18:47+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T20:18:47+00:00",
     "last_update_at": "2026-09-22T03:36:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_7ec6cdf7957c0f2d",
       "url": "https://www.ukrinform.net/rubric-ato/4166482-poland-scrambles-air-force-over-threat-of-russian-drones.html",
       "published_at": "2026-09-22T03:36:00+00:00"
      },
      {
       "source_id": "src_maariv",
       "source_root_id": "fh_0886f1f8194f0838",
       "url": "https://www.maariv.co.il/breaking-news/article-1369345",
       "published_at": "2026-09-21T20:18:47+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09220523-05",
     "title": "פגישת מקרון וטראמפ",
     "summary": "נשיא צרפת דן עם נשיא ארצות הברית בנושא אספקת מערכות הגנה אווירית ואמצעי יירוט לאוקראינה.",
     "axis": "דיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-09-22T02:47:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-22T02:47:18+00:00",
     "last_update_at": "2026-09-22T03:10:01+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_8cbf0e5379560ae0",
       "url": "https://tass.com/world/2190833",
       "published_at": "2026-09-22T03:10:01+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_e8ab62d55752e473",
       "url": "https://kyivindependent.com/macron-trump-discuss-securing-air-defense-systems-for-ukraine-ahead-of-un-general-assembly/",
       "published_at": "2026-09-22T02:47:18+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09220523-06",
     "title": "פגישת זלנסקי וראש ה-CIA באירלנד",
     "summary": "נשיא אוקראינה נפגש באופן בלתי רשמי עם מנהל סוכנות הביון המרכזית באירלנד בזמן תדלוק מטוסים.",
     "axis": "דיפלומטיה ומודיעין",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T20:24:00+00:00",
     "last_update_at": "2026-09-21T21:29:50+00:00",
     "what_is_not_verified": "תוכן השיחה המדויק לא נחשף באופן רשמי",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "or_reuters",
       "url": "https://meduza.io/en/news/2026/09/22/reuters-zelensky-meets-cia-director-john-ratcliffe-at-ireland-s-shannon-airport-less-than-a-month-after-ratcliffe-s-first-trip-to-moscow-for-talks",
       "published_at": "2026-09-21T21:29:50+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_reuters",
       "url": "https://tass.com/world/2190809",
       "published_at": "2026-09-21T20:45:06+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_reuters",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/21/8054519/",
       "published_at": "2026-09-21T20:24:00+00:00"
      }
     ],
     "places": [
      {
       "name": "נמל התעופה שאנון, אירלנד",
       "lat": 52.6987,
       "lon": -8.9216
      }
     ]
    },
    {
     "id": "UKRAINE-09220523-07",
     "title": "תקיפת בית הזיקוק במוסקבה",
     "summary": "כוחות אוקראיניים תקפו באמצעות כטב\"מים את בית הזיקוק במוסקבה, מה שהוביל לעצירת עיבוד הנפט במקום למשך שבועות.",
     "axis": "תקיפות אוויריות ואנרגיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T17:25:43+00:00",
     "last_update_at": "2026-09-21T18:04:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_reuters",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/21/8054511/",
       "published_at": "2026-09-21T18:04:00+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_reuters",
       "url": "https://meduza.io/en/news/2026/09/21/reuters-ukrainian-drone-attack-halts-oil-processing-at-moscow-refinery-on-final-day-of-russia-s-state-duma-election-repairs-could-take-weeks",
       "published_at": "2026-09-21T17:25:43+00:00"
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
    "תוכן השיחה המדויק בין זלנסקי לראש ה-CIA באירלנד",
    "ההערכות המדויקות לגבי משך הזמן הנדרש לתיקון בתי הזיקוק ברוסיה",
    "פרטים מלאים על הסכמים חדשים בתחום הכטב\"מים המוזכרים לקראת חתימה"
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
     "value": 1.149,
     "unit": "USD",
     "change_pct": 0.26,
     "source_id": "src_ecb",
     "as_of": "2026-09-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "עצירת תקיפות רוסיות וקבלת תמיכה בינלאומית",
      "הרחבת שיתופי הפעולה בתחום הביטחוני ותעשיית המזל\"טים"
     ],
     "inferred": [
      "פגיעה בכלכלה ובמשק האנרגיה של רוסיה באמצעות תקיפות עומק על בתי זיקוק",
      "הגברת הלחץ הבינלאומי באמצעות גיוס סנקציות וסיוע הגנתי"
     ],
     "forecast": [
      "המשך ניסיונות להשיג מערכות הגנה אווירית נוספות",
      "העמקת הפגיעה בתשתיות הכלכליות בתוך שטח רוסיה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המערכה הצבאית וביסוס השלטון והפרלמנט",
      "פיתוח פרויקטים אסטרטגיים בתחום האנרגיה כגון פרויקט ווסטוק נפט"
     ],
     "inferred": [
      "שחיקת התשתיות והיכולות הכלכליות של אוקראינה באמצעות מתקפות טילים בליסטיים",
      "התמודדות עם ההשלכות הכלכליות של תקיפות אוקראיניות על מתקני הזיקוק שלה"
     ],
     "forecast": [
      "המשך תקיפות ממוקדמות על תשתיות ואזורים עירוניים באוקראינה לקראת חודשי החורף",
      "מאמצים לעקוף או לבלום את השפעת הסנקציות הבינלאומיות בעזרת שווקים חלופיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/macron-trump-discuss-securing-air-defense-systems-for-ukraine-ahead-of-un-general-assembly/",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1369345",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/news/2026/09/21/reuters-ukrainian-drone-attack-halts-oil-processing-at-moscow-refinery-on-final-day-of-russia-s-state-duma-election-repairs-could-take-weeks",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/21/8054511/",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2190809",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/47898",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4166482-poland-scrambles-air-force-over-threat-of-russian-drones.html",
     "accessed_at": "2026-09-22T05:23:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T17:18:52+00:00",
  "changes": {
   "UKRAINE-09220523-01": {
    "kind": "new"
   },
   "UKRAINE-09220523-02": {
    "kind": "new"
   },
   "UKRAINE-09220523-03": {
    "kind": "new"
   },
   "UKRAINE-09220523-04": {
    "kind": "new"
   },
   "UKRAINE-09220523-05": {
    "kind": "new"
   },
   "UKRAINE-09220523-06": {
    "kind": "new"
   },
   "UKRAINE-09220523-07": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-22T0524__north-202609220524.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-22T05:24:19+00:00",
   "window": {
    "from": "2026-09-21T05:24:19+00:00",
    "to": "2026-09-22T05:24:19+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609220524"
   },
   "summary": "הגזרה הצפונית כוללת פעילות צבאיה מתמשכת של ישראל בדרום לבנון הכוללת תקיפות אוויריות וארטילריות, לצד תקריות וירי ארטילרי של צה\"ל בדרום סוריה במרחבי דרעא וקוניטרה. במקביל, נרשמו פיצוצים באתר צבאי באזור חלב שבסוריה ללא נפגעים, בעוד שגורמים מדיניים בלבנון מקיימים פגישות בינלאומיות לחיזוק צבא לבנון והיציבות.",
   "fronts": [
    {
     "name": "החזית הלבנונית",
     "status": "פעילה (תקיפות צה\"ל והפגזות בדרום לבנון)"
    },
    {
     "name": "החזית הסורית",
     "status": "פעילה (תקיפות צה\"ל בדרעא וקוניטרה, ופיצוץ מחסן אמל\"ח בחלב)"
    }
   ],
   "events": [
    {
     "id": "NORTH-09220524-01",
     "title": "תקיפות והפגזות ישראליות בדרום לבנון",
     "summary": "כוחות צה\"ל ביצעו תקיפות, הפגזות ארטילריה וירי מקלעים לעבר מספר כפרים ואזורים בדרום לבנון.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T10:26:57+00:00",
     "last_update_at": "2026-09-21T18:15:52+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף הנזק המדויק בכל אתר ואתר",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_866ce14b552cb596",
       "url": "https://english.almanar.com.lb/article/129492/",
       "published_at": "2026-09-21T18:15:52+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_866ce14b552cb596",
       "url": "https://t.me/abualiexpress/130567",
       "published_at": "2026-09-21T17:41:39+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_2be77b523935da06",
       "url": "https://english.almanar.com.lb/article/129447/",
       "published_at": "2026-09-21T14:23:54+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_866ce14b552cb596",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-artillery-fire-hit-several-areas-in-southern-lebanon/4063210",
       "published_at": "2026-09-21T10:26:57+00:00"
      }
     ],
     "places": [
      {
       "name": "נבטיה",
       "lat": 33.3812,
       "lon": 35.4825
      },
      {
       "name": "מרכבא",
       "lat": 33.2314,
       "lon": 35.5177
      },
      {
       "name": "כפר שובא",
       "lat": 33.3277,
       "lon": 35.6927
      }
     ]
    },
    {
     "id": "NORTH-09220524-02",
     "title": "פיצוץ במחסן תחמושת באזור אל-עיס בחלב",
     "summary": "אירעה שורת פיצוצים במחסן תחמושת סמוך לעיירה אל-עיס במרחב חלב שבסוריה, ללא נפגעים בנפש אך עם נזק חומרי.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T10:50:19+00:00",
     "last_update_at": "2026-09-21T20:11:14+00:00",
     "what_is_not_verified": "הסיבה המדויקת לפיצוץ והאם ישראל מעורבת בו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "fh_f830df4956d81be5",
       "url": "https://t.me/lelotsenzura/94386",
       "published_at": "2026-09-21T20:11:14+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "fh_f830df4956d81be5",
       "url": "https://t.me/abualiexpress/130572",
       "published_at": "2026-09-21T18:01:01+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "fh_f830df4956d81be5",
       "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21460050",
       "published_at": "2026-09-21T17:37:16+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_64bb516ab64e6174",
       "url": "https://english.enabbaladi.net/archives/2026/09/explosions-rock-aleppo-no-fatalities-reported/",
       "published_at": "2026-09-21T10:50:19+00:00"
      }
     ],
     "places": [
      {
       "name": "חלב",
       "lat": 36.1992,
       "lon": 37.1637
      }
     ]
    },
    {
     "id": "NORTH-09220524-03",
     "title": "תקיפות והפגזות של צבא ההגנה לישראל בדרום סוריה",
     "summary": "כוחות צה\"ל ביצעו ירי ארטילרי, אש מקלעים וחדירת סיור במרחבי דרעא וקוניטרה בדרום סוריה.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T08:36:20+00:00",
     "last_update_at": "2026-09-21T14:00:22+00:00",
     "what_is_not_verified": "לא מאומתים פרטים מלאים מעבר לדיווחים המקומיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_f4f9c02ab281fd3f",
       "url": "https://english.enabbaladi.net/archives/2026/09/israel-escalates-attacks-in-daraa-and-quneitra/",
       "published_at": "2026-09-21T14:00:22+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_f4f9c02ab281fd3f",
       "url": "https://english.almanar.com.lb/article/129432/",
       "published_at": "2026-09-21T13:37:57+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "fh_f4f9c02ab281fd3f",
       "url": "https://www.aa.com.tr/en/middle-east/israel-shells-areas-in-syria-s-daraa-countryside-with-artillery-machine-gun-fire/4063066",
       "published_at": "2026-09-21T08:36:20+00:00"
      }
     ],
     "places": [
      {
       "name": "דרעא",
       "lat": 32.6228,
       "lon": 36.1068
      },
      {
       "name": "עבידין",
       "lat": 32.7841,
       "lon": 35.8706
      }
     ]
    },
    {
     "id": "NORTH-09220524-04",
     "title": "זיהוי שווא והתרעות במרחב מלכיה",
     "summary": "דובר צה\"ל עדכן כי ההתרעות שהופעלו במרחב מלכיה התבררו כזיהוי שווא.",
     "axis": "הזירה הצפונית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T12:29:07+00:00",
     "last_update_at": "2026-09-21T12:35:28+00:00",
     "what_is_not_verified": "אין",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25169",
       "published_at": "2026-09-21T12:35:28+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25168",
       "published_at": "2026-09-21T12:29:07+00:00"
      }
     ],
     "places": [
      {
       "name": "מלכיה",
       "lat": 33.0992,
       "lon": 35.5117
      }
     ]
    }
   ],
   "not_verified": [
    "טענות לא רשמיות לפיהן ישראל עומדת מאחורי פיצוץ מחסן הנשק באזור אל-עיס בחלב",
    "ההערכות והדיווחים על אספקה צבאית מטורקיה לבסיסים סעודיים"
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
     "value": 3.0115,
     "unit": "ILS",
     "change_pct": -0.86,
     "source_id": "src_ecb",
     "as_of": "2026-09-21T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "מניעת התבססות עוינת",
      "אכיפת ביטחון בצפון"
     ],
     "inferred": [
      "פגיעה בתשתיות צבאיות ואמצעי לחימה בסוריה ובלבנון",
      "הרחקת איומים בגבולות הצפון"
     ],
     "forecast": [
      "המשך פעילות צבאית ממוקדת בהתאם להפרות או צרכים מבצעיים בגבולות לבנון וסוריה"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "חיזוק צבא לבנון והרחבת הסמכות של המדינה",
      "שמירה על יציבות ושיקום"
     ],
     "inferred": [
      "ניסיון לרתום סיוע בינלאומי וערבי למניעת וואקום ביטחוני וכלכלי"
     ],
     "forecast": [
      "המשך מאמצים דיפלומטיים לגיוס משאבים ותמיכה בצבא לבנון"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129432/",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-shells-areas-in-syria-s-daraa-countryside-with-artillery-machine-gun-fire/4063066",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/israel-escalates-attacks-in-daraa-and-quneitra/",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/middle-east/article/21460050",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/130572",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25168",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94386",
     "accessed_at": "2026-09-22T05:24:19+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T16:41:55+00:00",
  "changes": {
   "NORTH-09220524-01": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "תקיפות ופעילות צבאית ישראלית בדרום לבנון",
    "score": 1.0
   },
   "NORTH-09220524-02": {
    "kind": "possible",
    "prev": "תקיפות באל-עייס בדרום אטרף",
    "score": 0.4
   },
   "NORTH-09220524-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "תקיפות ופלישות צבא ישראל בדרום סוריה",
    "score": 1.0
   },
   "NORTH-09220524-04": {
    "kind": "new"
   }
  }
 }
};
