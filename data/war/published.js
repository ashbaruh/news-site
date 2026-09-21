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
  "draft": "drafts/ukraine/2026-09-21T1718__ukraine-202609211718.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-09-21T17:18:52+00:00",
   "window": {
    "from": "2026-09-20T17:18:52+00:00",
    "to": "2026-09-21T17:18:52+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202609211718"
   },
   "summary": "המלחמה בין רוסיה לאוקראינה נמשכת תוך תקיפות אוויריות והפצצות של כוחות רוסיים על מרכזים עירוניים ותשתיות באוקראינה (כגון סלוביאנסק, חרסון וזפוריז'יה), לצד פעילות צבאית אוקראינית הכוללת תקיפות נגד מתקני אנרגיה וצבא ברוסיה. במקביל, מתקיימים דיפלומטיה ומגעים בינלאומיים סביב יוזמות הפסקת אאש אש ודרישות אמריקאיות ואחרות להגבלת תקיפות על מתקני זיקוק ברוסיה.",
   "fronts": [
    {
     "name": "חזית המזרח (דונצק)",
     "status": "פעיל עם תקיפות אוויריות ופגיעות במבנים"
    },
    {
     "name": "חזית הדרום (חרסון וזפוריז'יה)",
     "status": "פעיל עם הפצצות על תשתיות אזרחיות"
    },
    {
     "name": "חזית האוויר והאנרגיה (עומק רוסיה ואוקראינה)",
     "status": "פעיל עם תקיפות הדדיות על בסיסי רחפנים ובתי זיקוק"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-09211718-01",
     "title": "תקיפה אווירית בסלוביאנסק",
     "summary": "כוחות רוסיים תקפו מתקן רפואי שאינו פעיל באמצעות פצצת אוויר מתפוצצת, מה שהביא להרס חלקי של מבנה היסטורי.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T17:17:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T17:17:00+00:00",
     "last_update_at": "2026-09-21T17:17:00+00:00",
     "what_is_not_verified": "היקף הנזקים המלא אינו מאומת מעבר לדיווחים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_a3e3029943a92f5f",
       "url": "https://www.ukrinform.net/rubric-ato/4166409-russians-dropped-aerial-bomb-on-historic-building-in-sloviansk.html",
       "published_at": "2026-09-21T17:17:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-09211718-02",
     "title": "פגיעה במבנה מגורים בסלוביאנסק",
     "summary": "פגיעת רחפן רוסי בבניין מגורים בן חמש קומות גרמה למותו של אדם שנלכד תחת ההריסות.",
     "axis": "חזית המזרח",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T16:10:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:10:00+00:00",
     "last_update_at": "2026-09-21T16:10:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b537fdbef6b37df0",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/21/8054491/",
       "published_at": "2026-09-21T16:10:00+00:00"
      }
     ],
     "places": [
      {
       "name": "סלוביאנסק, אוקראינה",
       "lat": 48.8523,
       "lon": 37.6058
      }
     ]
    },
    {
     "id": "UKRAINE-09211718-03",
     "title": "תקיפה באזור בוריספיל",
     "summary": "שרפה במתקן מחסן באזור בוריספיל כובתה לאחר מתקפה רוסית.",
     "axis": "חזית קייב / מרכז אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T16:19:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:19:00+00:00",
     "last_update_at": "2026-09-21T16:19:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_a7aa585405b329b8",
       "url": "https://www.ukrinform.net/rubric-ato/4166389-fire-at-warehouse-in-boryspil-district-extinguished-after-russian-attack.html",
       "published_at": "2026-09-21T16:19:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בוריספיל, אוקראינה",
       "lat": 50.3512,
       "lon": 30.9508
      }
     ]
    },
    {
     "id": "UKRAINE-09211718-04",
     "title": "תקיפת מתקן בצורת' אובלאסט",
     "summary": "צילומי לוויין תיעדו נזק לבונקרים, מחסנים ואזור שיגור רחפנים בבסיס הרחפנים צימבולובו.",
     "axis": "העורק הרוסי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T16:13:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T16:13:00+00:00",
     "last_update_at": "2026-09-21T16:13:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_ukrainian_telegram_channel_absolutely_re",
       "url": "https://www.pravda.com.ua/eng/news/2026/09/21/8054488/",
       "published_at": "2026-09-21T16:13:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-09211718-05",
     "title": "תקיפות באזור חרסון",
     "summary": "כוחות רוסיים תקפו מבני מגורים, כנסייה, בית חולים ומבנים נוספים באזור חרסון, וכתוצאה מכך נפצעו שלושה אזרחים.",
     "axis": "חזית הדרום",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T15:59:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T15:59:00+00:00",
     "last_update_at": "2026-09-21T15:59:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_11a4363cc92b286e",
       "url": "https://www.ukrinform.net/rubric-ato/4166380-russians-attack-church-hospital-and-homes-in-kherson-region-injuring-three-people.html",
       "published_at": "2026-09-21T15:59:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז חרסון, אוקראינה",
       "lat": 46.6375,
       "lon": 32.6144
      }
     ]
    },
    {
     "id": "UKRAINE-09211718-06",
     "title": "נזק למתקנים אזרחיים בזפוריז'יה",
     "summary": "למעלה מ-50 מתקנים אזרחיים, בהם בנייני מגורים ובתים פרטיים, נגרם נזק כתוצאה מתקיפה בלילה.",
     "axis": "חזית זפוריז'יה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T15:39:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T15:39:00+00:00",
     "last_update_at": "2026-09-21T15:39:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_6fc34b936668e0c3",
       "url": "https://www.ukrinform.net/rubric-ato/4166377-more-than-50-civilian-facilities-damaged-in-zaporizhzhia-as-result-of-russian-attack.html",
       "published_at": "2026-09-21T15:39:00+00:00"
      }
     ],
     "places": [
      {
       "name": "זפוריז'יה, אוקראינה",
       "lat": 47.8508,
       "lon": 35.1183
      }
     ]
    },
    {
     "id": "UKRAINE-09211718-07",
     "title": "תקיפה במחוז בוצ'ה",
     "summary": "שרפה פרצה במתקן במחוז בוצ'ה בעקבות מתקפה רוסית.",
     "axis": "חזית קייב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T14:57:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T14:57:00+00:00",
     "last_update_at": "2026-09-21T14:57:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_17d9258a9e0a41ed",
       "url": "https://www.ukrinform.net/rubric-ato/4166365-russian-attack-sparks-fire-at-factory-in-bucha-district.html",
       "published_at": "2026-09-21T14:57:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מחוז בוצ'ה, אוקראינה",
       "lat": 50.5449,
       "lon": 29.8987
      }
     ]
    },
    {
     "id": "UKRAINE-09211718-08",
     "title": "תוצאות הבחירות ברוסיה",
     "summary": "מפלגת רוסיה המאוחדת זכתה ברוב בבחירות לפרלמנט הרוסי, כאשר עשרות מוותיקי המלחמה נבחרו לפרלמנט.",
     "axis": "העורף הרוסי",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T13:11:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T13:40:39+00:00",
     "last_update_at": "2026-09-21T13:40:39+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/sep/21/putin-consolidates-grip-russia-ukraine-war-veterans-elected-duma",
       "published_at": "2026-09-21T13:40:39+00:00"
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
    "ההערכות המודיעיניות האירופיות על מועד אפשרי למתח רוסית נגד נאט\"ו (תוך חודשים)",
    "האם עסקאות הדשן והפוטש בין ארה\"ב לבלארוס ימומשו במלואן ובאילו תנאים"
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
      "נכונות להסדר שלום ודה-אסקלציה בתנאים הדדיים",
      "המשך הגנה על שטחי המדינה"
     ],
     "inferred": [
      "פגיעה בתשתיות האנרגיה והתעשייה של רוסיה כדי לשבש את המאמץ המלחמתי"
     ],
     "forecast": [
      "המשך ניסיונות להשיג סיוע כספי וצבאי מערבי",
      "המשך תקיפות ממוקדות בעומק רוסיה"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המבצע הצבאי המיוחד והשגת יעדי השלטון"
     ],
     "inferred": [
      "ביסוס השליטה הפוליטית הפנימית באמצעות תוצאות הבחירות ושילוב וותיקי מלחמה",
      "הרחבת התשתיות לייצור אמצעי לחימה ורחפנים"
     ],
     "forecast": [
      "הגברת הלחץ הצבאי בחזיתות השונות באוקראינה",
      "התאמת חקיקת המס לכיסוי הוצאות הגנה ותיקון מתקנים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/sep/21/putin-consolidates-grip-russia-ukraine-war-veterans-elected-duma",
     "accessed_at": "2026-09-21T17:18:52+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/09/21/8054488/",
     "accessed_at": "2026-09-21T17:18:52+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4166365-russian-attack-sparks-fire-at-factory-in-bucha-district.html",
     "accessed_at": "2026-09-21T17:18:52+00:00"
    }
   ]
  },
  "auto": false,
  "previous_generated_at": "2026-09-20T23:40:40+00:00",
  "changes": {
   "UKRAINE-09211718-01": {
    "kind": "new"
   },
   "UKRAINE-09211718-02": {
    "kind": "new"
   },
   "UKRAINE-09211718-03": {
    "kind": "new"
   },
   "UKRAINE-09211718-04": {
    "kind": "new"
   },
   "UKRAINE-09211718-05": {
    "kind": "new"
   },
   "UKRAINE-09211718-06": {
    "kind": "new"
   },
   "UKRAINE-09211718-07": {
    "kind": "new"
   },
   "UKRAINE-09211718-08": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-09-21T1641__north-202609211641.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-09-21T16:41:55+00:00",
   "window": {
    "from": "2026-09-20T16:41:55+00:00",
    "to": "2026-09-21T16:41:55+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "north-202609211641"
   },
   "summary": "בגזרה הצפונית, ישראל ממשיכה בפעילות צבאית הכוללת תקיפות והפגזות בדרום לבנון ובדרום סוריה (במחוזות דרעא וקוניטרה). במקביל, מתרחשים פיצוצים במתקנים צבאיים בסוריה, ולבנון מקיימת מגעים דיפלומטיים עם קטאר וארצות הברית לחיזוק צבא לבנון ויציבות האזור.",
   "fronts": [
    {
     "name": "חזית לבנון",
     "status": "פעיל - תקיפות ישראליות ופעילות צבאית לצד מגעים מדיניים"
    },
    {
     "name": "חזית סוריה",
     "status": "פעיל - תקיפות ישראליות בדרום המדינה ופיצוצים במחסני תחמושת צבאיים"
    }
   ],
   "events": [
    {
     "id": "NORTH-09211641-01",
     "title": "תקיפות באל-עייס בדרום אטרף",
     "summary": "סדרה של פיצוצים ארעה במחסן תחמושת של צבא סוריה באזור אל-עייס. ארבעה בני אדם נפצעו והכוחות סגרו את הדרכים המובילות לאתר.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T07:00:28+00:00",
     "last_update_at": "2026-09-21T15:16:03+00:00",
     "what_is_not_verified": "סיבת הפיצוצים אינה מאומתת והרשויות לא סיפקו הסבר מיידי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/9/21/poor-storage-or-sabotage-series-of-explosions-in-syria-raises-fears?traffic_source=rss",
       "published_at": "2026-09-21T15:16:03+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/recap-iran-says-it-prepared-prolonged-war",
       "published_at": "2026-09-21T14:00:05+00:00"
      },
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/09/explosions-rock-aleppo-no-fatalities-reported/",
       "published_at": "2026-09-21T10:50:19+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/09/syrian-ammunition-depot-explodes-fourth-such-blast-month",
       "published_at": "2026-09-21T10:46:31+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-shake-military-site-aleppo-least-four-injured",
       "published_at": "2026-09-21T10:42:15+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/syrian-ammunition-depot-explodes-fourth-such-blast-month",
       "published_at": "2026-09-21T07:05:01+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.lbcgroup.tv/news/middleeastnews/958845/syrian-ammunition-depot-explodes-in-fourth-such-blast-this-month/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958845",
       "published_at": "2026-09-21T07:00:28+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-09211641-02",
     "title": "תקיפות ופעילות צבאית ישראלית בדרום לבנון",
     "summary": "הפצצות ותקיפות ארטילריה של צבא ישראל בוצעו במספר מוקדים בדרום לבנון ובכלל זה במרכבה, נבטיה אל-פוקא, זוכטאר א-שרקיה ואזורים נוספים.",
     "axis": "לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T10:09:48+00:00",
     "last_update_at": "2026-09-21T14:23:54+00:00",
     "what_is_not_verified": "היקף הנזק המדויק בכל אתר ואתר לא פורט במלואו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129447/",
       "published_at": "2026-09-21T14:23:54+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/analysis/scorched-earth-how-israel-remaking-south-lebanon",
       "published_at": "2026-09-21T13:49:22+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israeli-airstrikes-artillery-fire-hit-several-areas-in-southern-lebanon/4063210",
       "published_at": "2026-09-21T10:26:57+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-launch-overnight-air-raids-across-southern-lebanon",
       "published_at": "2026-09-21T10:09:48+00:00"
      }
     ],
     "places": [
      {
       "name": "מרכבה, לבנון",
       "lat": 33.2314,
       "lon": 35.5177
      },
      {
       "name": "נבטיה אל-פוקא, לבנון",
       "lat": 33.3619,
       "lon": 35.4987
      }
     ]
    },
    {
     "id": "NORTH-09211641-03",
     "title": "תקיפות ופלישות צבא ישראל בדרום סוריה",
     "summary": "כוחות צבא ישראל ביצעו הפגזות ארטילריה וירי מקלעים לעבר שטחים בדרום סוריה, כולל באזור דרעא וקוניטרה, וכן פשיטה לאזור רסם אל-חלבי.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-09-21T08:36:20+00:00",
     "last_update_at": "2026-09-21T14:00:22+00:00",
     "what_is_not_verified": "האם היו נפגעים נוספים מעבר לפגיעה בעזים ובאדמות חקלאיות לא דווח באופן מלא.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.enabbaladi.net/archives/2026/09/israel-escalates-attacks-in-daraa-and-quneitra/",
       "published_at": "2026-09-21T14:00:22+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "or_unknown_origin",
       "url": "https://english.almanar.com.lb/article/129432/",
       "published_at": "2026-09-21T13:37:57+00:00"
      },
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israel-shells-areas-in-syria-s-daraa-countryside-with-artillery-machine-gun-fire/4063066",
       "published_at": "2026-09-21T08:36:20+00:00"
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
     "id": "NORTH-09211641-04",
     "title": "הסכם שיתוף פעולה בין סוריה לאוקראינה בתחום פינוי מוקשים",
     "summary": "סוריה ואוקראינה חתמו על הסכם שיתוף פעולה בנושא פינוי מוקשים הומניטרי והתמודדות עם שרידי מלחמה.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-09-20T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-09-21T12:23:19+00:00",
     "last_update_at": "2026-09-21T12:23:19+00:00",
     "what_is_not_verified": "לוחות הזמנים המדויקים לביצוע המבצעי של ההסכם טרם פורטו.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_enabbaladi",
       "source_root_id": "fh_dd03e2a59413dcdc",
       "url": "https://english.enabbaladi.net/archives/2026/09/syria-ukraine-cooperate-on-humanitarian-demining/",
       "published_at": "2026-09-21T12:23:19+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "הסיבה המדויקת לסדרת הפיצוצים במחסני התחמושת בסוריה",
    "כוונותיה העתידיות של ישראל בנוגע להרחבת הפעילות הקרקעית או השליטה ברכסים בדרום לבנון"
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
      "מניעת התבססות ופעילות של חיזבאללה בדרום לבנון",
      "אכיפת ריבונות והגנה על גבולות המדינה"
     ],
     "inferred": [
      "המשך אסטרטגיית 'אדמה חרוכה' והשמדת תשתיות צבאיות בדרום לבנון ובדרום סוריה"
     ],
     "forecast": [
      "המשך התקיפות עד להשגת הסדר או שינוי מציאות ביטחונית בשטח"
     ]
    },
    {
     "actor": "לבנון",
     "declared": [
      "חיזוק סמכות המדינה והבטחת שחבר כלי הנשק יישארו בלעדית בידי המדינה",
      "תמיכה בהמשך הסיוע לצבא לבנון ובנוכחות בינלאומית בדרום המדינה"
     ],
     "inferred": [
      "ניסיון לבלום את ההשלכות ההרסניות של הלחימה באמצעות דיפלומטיה אזורית ובינלאומית"
     ],
     "forecast": [
      "המשך פנייה לגורמים בינלאומיים וערביים לסיוע בשיקום ובמניעת וואקום ביטחוני"
     ]
    },
    {
     "actor": "סוריה",
     "declared": [
      "שיקום הצבא והתמודדות עם שרידי מלחמה ומוקשים באמצעות שיתופי פעולה בינלאומיים"
     ],
     "inferred": [
      "ניסיון להתמודד עם אובדן שליטה או תקלות במחסני אמל\"ח על רקע הפיצוצים החוזרים ונשנים"
     ],
     "forecast": [
      "המשך מאמצי פינוי מוקשים ושיקום תשתיות אזרחיות וצבאיות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/9/21/poor-storage-or-sabotage-series-of-explosions-in-syria-raises-fears?traffic_source=rss",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/129432/",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/09/syrian-ammunition-depot-explodes-fourth-such-blast-month",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-shells-areas-in-syria-s-daraa-countryside-with-artillery-machine-gun-fire/4063066",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_enabbaladi",
     "url": "https://english.enabbaladi.net/archives/2026/09/syria-ukraine-cooperate-on-humanitarian-demining/",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/middleeastnews/958845/syrian-ammunition-depot-explodes-in-fourth-such-blast-this-month/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-958845",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-forces-launch-overnight-air-raids-across-southern-lebanon",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/scorched-earth-how-israel-remaking-south-lebanon",
     "accessed_at": "2026-09-21T16:41:55+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-09-21T02:49:06+00:00",
  "changes": {
   "NORTH-09211641-01": {
    "kind": "new"
   },
   "NORTH-09211641-02": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "ירי ארטילרי ופעילות צבאית דרום לבנון",
    "score": 0.65
   },
   "NORTH-09211641-03": {
    "kind": "possible",
    "prev": "פיצוץ מוצב צבאי בדרום סוריה ובחרמון",
    "score": 0.467
   },
   "NORTH-09211641-04": {
    "kind": "new"
   }
  }
 }
};
