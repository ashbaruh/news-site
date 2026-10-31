/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-31T0243__yemen-202610310243.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-31T02:43:21+00:00",
   "window": {
    "from": "2026-10-30T02:43:21+00:00",
    "to": "2026-10-31T02:43:21+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610310243"
   },
   "summary": "הלחימה בזירה התימנית התחדשה בעצימות גבוהה בין תנועת החות'ים לבין ממשלת תימן הנתמכת בידי הקואליציה בהובלת ערב הסעודית. החות'ים מרחיבים את פעילותם ההתקפית באמצעות מצור קרקעי על תעז ותקיפות טילים על מוסדות השלטון בעדן, לצד שיגורי כטב\"מים וטילים לעומק שטח סעודיה. מנגד, כוחות הקואליציה מיירטים איומים אוויריים ומבצעים תקיפות אוויריות במוקדי השליטה של המורדים.",
   "fronts": [
    {
     "name": "חזית פנים-תימנית: עדן",
     "status": "הסלמה בהתקפות טילים בליסטיים חות'יים לעבר סביבת נמל התעופה ומתחם ארמון הנשיאות"
    },
    {
     "name": "חזית פנים-תימנית: תעז וחוף הים האדום",
     "status": "כיתור ממושך והידוק מצור חות'י, ניתוק נתיבי אספקה לעדן והפגזות הדדיות"
    },
    {
     "name": "חזית תימן - ערב הסעודית",
     "status": "שיגורים תכופים של כטב\"מים וטילים חות'יים לעבר מחוזות בריאד, מערב ומזרח הממלכה, לצד יירוטים של הקואליציה"
    },
    {
     "name": "התווך הימי: באב אל-מנדב",
     "status": "מתיחות סביב חופש השיט ומעורבות דיפלומטית בינלאומית להבטחת המעברים הימיים"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10310243-01",
     "title": "מתקפת טילים על ארמון הנשיאות ונמל התעופה בעדן",
     "summary": "החות'ים שיגרו טילים בליסטיים לעבר מתחם ארמון הנשיאות אל-מעאשיק ולעבר נמל התעופה בעדן, מושב הממשלה המוכרת של תימן, ונשמעו פיצוצים בעיר.",
     "axis": "תימן פנימי - עדן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T18:52:23+00:00",
     "last_update_at": "2026-10-30T21:42:38+00:00",
     "what_is_not_verified": "היקף הנפגעים והנזק המדויק בארמון ובנמל התעופה אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_cb6b463783993736",
       "url": "https://www.newarab.com/news/strikes-blamed-houthis-target-yemen-presidential-palace",
       "published_at": "2026-10-30T21:42:38+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_cb6b463783993736",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-attack-aden-airport-and-presidential-palace-yemeni-government",
       "published_at": "2026-10-30T19:25:34+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_cb6b463783993736",
       "url": "https://www.sabanew.net/viewstory/154902",
       "published_at": "2026-10-30T18:52:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_cb6b463783993736",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosions-heard-yemens-government-held-aden",
       "published_at": "2026-10-30T18:52:23+00:00"
      }
     ],
     "places": [
      {
       "name": "עדן, תימן",
       "lat": 12.7896,
       "lon": 45.0285
      }
     ]
    },
    {
     "id": "YEMEN-10310243-02",
     "title": "יירוטי כטב\"מים וטילים בליסטיים של החות'ים מעל שטח ערב הסעודית",
     "summary": "הקואליציה בהובלת סעודיה דיווחה על יירוט כלי טיס בלתי מאוישים וטילים ששוגרו על ידי החות'ים לעבר מחוזות ריאד, מכה, אל-מדינה, האזור המזרחי והאזור הדרומי.",
     "axis": "תימן - ערב הסעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T17:42:12+00:00",
     "last_update_at": "2026-10-31T00:54:41+00:00",
     "what_is_not_verified": "עצם השיגור לעבר מכה ואל-מדינה שנוי במחלוקת והוכחש בתוקף על ידי החות'ים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_bb395063dfb8ba3f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthi-drone-intercepted-over-saudi-arabias-southern-region-coalition",
       "published_at": "2026-10-31T00:54:41+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_bb395063dfb8ba3f",
       "url": "https://www.newarab.com/news/strikes-blamed-houthis-target-yemen-presidential-palace",
       "published_at": "2026-10-30T21:42:38+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_bb395063dfb8ba3f",
       "url": "https://www.sabanew.net/viewstory/154907",
       "published_at": "2026-10-30T21:40:23+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "fh_bb395063dfb8ba3f",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-coalition-reports-drones-over-mecca-and-medina-houthis-deny-both",
       "published_at": "2026-10-30T20:49:10+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "fh_bb395063dfb8ba3f",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-led-coalition-says-it-downs-houthi-drone-over-medina-houthis-deny-attack",
       "published_at": "2026-10-30T19:46:34+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ef54bafd24742264",
       "url": "https://www.sabanew.net/viewstory/154897",
       "published_at": "2026-10-30T17:42:12+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מדינה, ערב הסעודית",
       "lat": 24.4712,
       "lon": 39.6111
      },
      {
       "name": "מכה, ערב הסעודית",
       "lat": 21.4208,
       "lon": 39.8269
      },
      {
       "name": "ריאד, ערב הסעודית",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    },
    {
     "id": "YEMEN-10310243-03",
     "title": "החרפת המצור והלחימה במחוז תעז",
     "summary": "החות'ים הידקו את כיתור העיר תעז והשתלטו על שישה מחוזות משנה, תוך ניתוק ציר האספקה המרכזי לעדן, שיבוש חמור באספקת מים ומזון ופגיעה באזרחים מהפגזות וצליפות.",
     "axis": "תימן פנימי - תעז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T07:31:50+00:00",
     "last_update_at": "2026-10-30T19:53:52+00:00",
     "what_is_not_verified": "נתוני הנפגעים המדויקים ומספרי חוסר האספקה נמסרו על ידי הרשויות המקומיות ולא אומתו עצמאית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_3fa84a43d3f26623",
       "url": "https://www.sabanew.net/viewstory/154905",
       "published_at": "2026-10-30T19:53:52+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_3fa84a43d3f26623",
       "url": "https://www.newarab.com/news/taiz-governor-says-city-didnt-choose-war-supplies-dwindle",
       "published_at": "2026-10-30T17:21:41+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_3fa84a43d3f26623",
       "url": "https://www.theguardian.com/world/2026/oct/30/houthis-taiz-stone-age-yemen-city-siege",
       "published_at": "2026-10-30T09:00:50+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_3fa84a43d3f26623",
       "url": "https://www.newarab.com/news/vote-count-ends-israel-eyes-turn-us-midterms-iran",
       "published_at": "2026-10-30T07:31:50+00:00"
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
     "id": "YEMEN-10310243-04",
     "title": "שיחות מדיניות בין שרי החוץ של סעודיה ורוסיה על מצר באב אל-מנדב ותימן",
     "summary": "שרי החוץ של סעודיה ורוסיה נפגשו בשולי כינוס שרי החוץ של קבוצת העשרים ודנו בהתפתחויות בתימן ובחופש השיט במצרי הורמוז ובאב אל-מנדב.",
     "axis": "מדיני - שיט בינלאומי",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T01:13:30+00:00",
     "last_update_at": "2026-10-31T01:13:30+00:00",
     "what_is_not_verified": "תוכן ההבנות והפרטים המדויקים שעלו בשיחות הסגורות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-and-russian-foreign-ministers-discuss-hormuz-yemen-g20",
       "published_at": "2026-10-31T01:13:30+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10310243-05",
     "title": "הוראת פינוי לצוותים דיפלומטיים אמריקאיים מערב הסעודית",
     "summary": "ארצות הברית הורתה לעובדי ממשל שאינם חיוניים ולבני משפחותיהם לעזוב את ערב הסעודית בעקבות סיכוני ביטחון ומתקפות חות'יות על נמלי תעופה ותשתיות.",
     "axis": "ארצות הברית - ערב הסעודית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-23T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T18:46:31+00:00",
     "last_update_at": "2026-10-30T18:46:31+00:00",
     "what_is_not_verified": "מספר העובדים ובני המשפחה שעזבו בפועל בעקבות ההנחיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/us-orders-non-emergency-staff-leave-saudi-arabia-over-security-risks",
       "published_at": "2026-10-30T18:46:31+00:00"
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
     "id": "YEMEN-10310243-06",
     "title": "העברת מרוץ דקר מערב הסעודית עקב המצב הביטחוני מול החות'ים",
     "summary": "מארגני מרוץ דקר לשנת 2027 הודיעו על העברתו מערב הסעודית למרוקו ופורטוגל בשל החששות הביטחוניים מהתחדשות העימות מול תנועת החות'ים.",
     "axis": "סעודיה - אזרחי/ביטחוני",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T16:42:33+00:00",
     "last_update_at": "2026-10-30T16:42:33+00:00",
     "what_is_not_verified": "אישור סופי של מועצת הספורט המוטורי העולמית ללוח הזמנים החדש",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/2027-dakar-rally-be-held-morocco-and-portugal-organisers",
       "published_at": "2026-10-30T16:42:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "YEMEN-10310243-07",
     "title": "עקירת מעל 280 אלף תושבים עקב חידוש הלחימה בתימן",
     "summary": "נציבות הפליטים של האו\"ם מסרה כי מעל 280 אלף בני אדם נעקרו מבתיהם בשל חידוש הלחימה במדינה, וכי הגישה לסיוע הומניטרי חסומה באזורים רבים בשל הסכנה.",
     "axis": "הומניטרי - תימן",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T12:00:00+00:00",
     "last_update_at": "2026-10-30T12:00:00+00:00",
     "what_is_not_verified": "הפילוח המדויק של הנעקרים לפי מחוזות ואזורי קרב",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168706",
       "published_at": "2026-10-30T12:00:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "טענות הקואליציה על שיגור כטב\"מים לעבר הערים מכה ואל-מדינה, שהוכחשו על ידי דובר החות'ים והוגדרו כבדיה",
    "מספר הנפגעים והנזקים הישירים מפגיעות הטילים במתחם מעאשיק ובנמל התעופה בעדן",
    "הדיווחים של צבא תימן על חיסול 336 מפקדים ופעילים חות'יים וביצוע 1,087 תקיפות"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת החות'ים",
     "declared": [
      "פגיעה במטרות צבאיות ושלטוניות של ממשלת תימן והקואליציה",
      "הכחשת תקיפת אתרים קדושים במכה ואל-מדינה"
     ],
     "inferred": [
      "הכנעת העיר תעז ובידודה כדי לקבע הישגים טריטוריאליים בדרך לעדן",
      "הפעלת לחץ צבאי וכלכלי ישיר על ערב הסעודית באמצעות איום על עורפה ומתקניה האזרחיים"
     ],
     "forecast": [
      "המשך שיגורי כטב\"מים וטילים לעבר סעודיה ולעבר יעדי ממשל בעדן",
      "החרפת המשבר ההומניטרי בתעז תוך ניסיונות להדק את השליטה במחוז"
     ]
    },
    {
     "actor": "ערב הסעודית והקואליציה בהובלתה",
     "declared": [
      "הגנה על שטח הממלכה ויירוט כלי טיס וטילים עוינים",
      "תמיכה בממשלת תימן המוכרת בינלאומית וסיכול יכולות הטרור החות'יות"
     ],
     "inferred": [
      "שמירה על יציבות ביטחונית וכלכלית בתוך סעודיה לצורך פרויקטים בינלאומיים והשקעות",
      "גיוס תמיכה דיפלומטית ובינלאומית נגד האיום החות'י בנתיבי השיט ובאזור"
     ],
     "forecast": [
      "הגברת פעילות היירוט האווירי והמשך תקיפות ממוקדות במוקדי שיגור בתימן",
      "העמקת התיאום האזורי והבינלאומי לבלימת ההשפעה על חופש השיט הימי"
     ]
    },
    {
     "actor": "ממשלת תימן המוכרת בינלאומית",
     "declared": [
      "הסרת המצור החות'י מעל תעז ופתיחת מסדרונות הומניטריים לאספקה",
      "הגנה על הבירה הזמנית עדן מפני התקפות המורדים"
     ],
     "inferred": [
      "מניעת קריסת עורקי החיים הכלכליים והתחבורתיים בין תעז לעדן",
      "השגת סיוע בינלאומי וצבאי מוגבר על רקע אובדן שטחים נרחבים"
     ],
     "forecast": [
      "המשך ניסיונות בלימה צבאיים סביב תעז ושימור אבטחת מוסדות השלטון בעדן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/us-orders-non-emergency-staff-leave-saudi-arabia-over-security-risks",
     "accessed_at": "2026-10-31T02:43:21+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/30/houthis-taiz-stone-age-yemen-city-siege",
     "accessed_at": "2026-10-31T02:43:21+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-and-russian-foreign-ministers-discuss-hormuz-yemen-g20",
     "accessed_at": "2026-10-31T02:43:21+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/2027-dakar-rally-be-held-morocco-and-portugal-organisers",
     "accessed_at": "2026-10-31T02:43:21+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154905",
     "accessed_at": "2026-10-31T02:43:21+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168706",
     "accessed_at": "2026-10-31T02:43:21+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T00:44:39+00:00",
  "changes": {
   "YEMEN-10310243-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת טילים על נמל התעופה הבינלאומי בעדן",
    "score": 1.0
   },
   "YEMEN-10310243-02": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "יירוט שני טילים בליסטיים שנורו לעבר ריאד",
    "score": 0.817
   },
   "YEMEN-10310243-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "החרפת המצור על תעז ועומס חמור בבתי החולים",
    "score": 1.0
   },
   "YEMEN-10310243-04": {
    "kind": "new"
   },
   "YEMEN-10310243-05": {
    "kind": "new"
   },
   "YEMEN-10310243-06": {
    "kind": "new"
   },
   "YEMEN-10310243-07": {
    "kind": "new"
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-31T0040__iran-202610310040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-31T00:40:32+00:00",
   "window": {
    "from": "2026-10-30T00:40:32+00:00",
    "to": "2026-10-31T00:40:32+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610310040"
   },
   "summary": "העימות בין איראן לבין ארה\"ב מתאפיין בהסלמה ימית חריפה במצר הורמוז, הכוללת פגיעות במכליות נפט ושיבוש נתיבי השיט לצד יירוט כטב\"מים. במקביל, וושינגטון מאותתת על כוונות לחדש תקיפות צבאיות מקיפות בזמן שנבחנים מאמצי תיווך דיפלומטיים בהובלת קטאר ופקיסטן. בטהרן מציגים מוכנות לפעולת תגמול רחבה ויוזמות חקיקה לנסיגה מהאמנה למניעת הפצת נשק גרעיני.",
   "fronts": [
    {
     "name": "מצר הורמוז והמרחב הימי במפרץ",
     "status": "פעילות התקפית ימית הכוללת פגיעה במכליות באמצעות מוקשים ימיים וירי בלתי מזוהה, לצד לכידת כטב\"ם אמריקני ומצור ימי"
    },
    {
     "name": "הזירה האווירית והפנים-איראנית",
     "status": "כוננות איראנית לתקיפות אמריקניות מתחדשות ודיווחים לא מאומתים על פגיעות בבסיסי שיגור בדרום המדינה"
    },
    {
     "name": "הציר הדיפלומטי והמדיני",
     "status": "משא ומתן עקיף בטהרן בתיווך קטארי ופקיסטני תחת איומי חידוש אש"
    }
   ],
   "events": [
    {
     "id": "IRAN-10310040-01",
     "title": "תקיפות ופגיעות במכליות נפט במצר הורמוז",
     "summary": "מספר מכליות נפט נפגעו או עלו באש במצר הורמוז, כאשר זרוע הים של משמרות המהפכה טענה כי מכליות סטו מנתיבים מורשים או הוצתו, וגורמים ימיים דיווחו על פגיעות קליעים ומוקשים מגנטיים.",
     "axis": "איראן - ארה\"ב והמפרץ",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T11:26:35+00:00",
     "last_update_at": "2026-10-31T00:00:00+00:00",
     "what_is_not_verified": "הזהות המדויקת של הגורמים המשגרים ופרטי כל המכליות שנפגעו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/31/iran-war-live-oil-tankers-hit-in-hormuz-trump-says-conflict-will-end-soon?traffic_source=rss",
       "published_at": "2026-10-31T00:00:00+00:00"
      },
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307702/IRGC-Fourth-offending-tanker-catches-fire-in-Strait-of-Hormuz",
       "published_at": "2026-10-30T21:16:01+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/oil-tanker-struck-unknown-projectile-while-exiting-hormuz-ukmto",
       "published_at": "2026-10-30T20:38:38+00:00"
      },
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/30/oman-rescues-25-from-burning-oil-tanker-in-strait-of-hormuz?traffic_source=rss",
       "published_at": "2026-10-30T18:33:29+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/limpet-mine-attack-hormuz-suggests-iran-may-be-shifting-tactics",
       "published_at": "2026-10-30T17:27:55+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610303203",
       "published_at": "2026-10-30T11:57:13+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkfxt1ftfe",
       "published_at": "2026-10-30T11:26:35+00:00"
      }
     ],
     "places": [
      {
       "name": "האי לאוואן",
       "lat": 26.8102,
       "lon": 53.3543
      }
     ]
    },
    {
     "id": "IRAN-10310040-02",
     "title": "השתלטות איראן על כטב\"ם אמריקני מעל האי קשם",
     "summary": "חיל הים של משמרות המהפכה הודיע כי לכד כלי טיס בלתי מאויש אמריקני לסיור והטעיה בעודו שלם ממערב למצר הורמוז לאחר השתלטות על מערכותיו.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T21:37:07+00:00",
     "last_update_at": "2026-10-30T21:37:07+00:00",
     "what_is_not_verified": "אישור אמריקני עצמאי על נפילת הכטב\"ם או אופן ההשתלטות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307704/IRGC-Navy-captures-second-US-drone-intact-over-Qeshm-island",
       "published_at": "2026-10-30T21:37:07+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם",
       "lat": 26.9502,
       "lon": 56.2691
      }
     ]
    },
    {
     "id": "IRAN-10310040-03",
     "title": "דיווחים בלתי מאומתים על תקיפות אמריקניות בדרום איראן",
     "summary": "מקורות איראניים לא רשמיים דיווחו על שתי תקיפות ממוקדות שביצעה ארה\"ב באזורי האי קשם ונמל ג'אסכ לצורך סיכול משגרים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T07:37:36+00:00",
     "last_update_at": "2026-10-30T07:37:36+00:00",
     "what_is_not_verified": "היעדר כל אישור רשמי אמריקני או איראני לקיומן של התקיפות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132817",
       "published_at": "2026-10-30T07:37:36+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קשם",
       "lat": 26.9502,
       "lon": 56.2691
      },
      {
       "name": "ג'אסכ",
       "lat": 25.6436,
       "lon": 57.7746
      }
     ]
    },
    {
     "id": "IRAN-10310040-04",
     "title": "איתור וסיכול חוליה הקשורה למודיעין זר במערב איראן",
     "summary": "משמרות המהפכה הודיעו על פירוק ופגיעה בחוליה בת שני אנשים המקושרת לשירותי מודיעין זרים במערב המדינה.",
     "axis": "איראן - ישראל/ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T19:45:48+00:00",
     "last_update_at": "2026-10-30T19:45:48+00:00",
     "what_is_not_verified": "זהות המודיעין הזר וזהות חברי החוליה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_irna",
       "source_root_id": "or_unknown_origin",
       "url": "https://en.irna.ir/news/86307681/IRGC-strikes-a-team-linked-to-foreign-intelligence-services-in",
       "published_at": "2026-10-30T19:45:48+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10310040-05",
     "title": "יוזמות באיראן לפרישה מהאמנה למניעת הפצת נשק גרעיני והשלמת תוכנית תגובה",
     "summary": "בכיר ביטחוני איראני מסר על השלמת תוכנית צבאית מעודכנת לתגובה נרחבת לתקיפות, ובמקביל הוגשו בפרלמנט הצעות לנסיגה מהאמנה למניעת הפצת נשק גרעיני.",
     "axis": "איראן - ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T22:16:22+00:00",
     "last_update_at": "2026-10-30T22:16:22+00:00",
     "what_is_not_verified": "מועד מימוש אפשרי של הצעות הפרישה מהאמנה או פרטי תוכנית התגובה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-finalises-new-plan-respond-any-new-attack-official-says",
       "published_at": "2026-10-30T22:16:22+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10310040-06",
     "title": "היערכות אמריקנית לתקיפות חדשות לצד מגעים מדיניים",
     "summary": "בארה\"ב מתבצעת הערכה והיערכות לאפשרות של חידוש תקיפות צבאיות באיראן, במקביל למגעים מדיניים ולניסיונות תיווך להפסקת הלחימה.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T20:22:02+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T20:22:02+00:00",
     "last_update_at": "2026-10-31T00:19:20+00:00",
     "what_is_not_verified": "המועד המדויק לפתיחת סבב תקיפות והיקפו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-there-are-talks-tehran-wants-talk",
       "published_at": "2026-10-31T00:19:20+00:00"
      },
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21743550",
       "published_at": "2026-10-31T00:04:15+00:00"
      },
      {
       "source_id": "src_fdd",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.fdd.org/in_the_news/u-s-evaluates-renewed-strikes-on-iran/",
       "published_at": "2026-10-30T20:30:31+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610300238",
       "published_at": "2026-10-30T20:22:02+00:00"
      }
     ],
     "places": [
      {
       "name": "וושינגטון",
       "lat": 38.8951,
       "lon": -77.0364
      }
     ]
    },
    {
     "id": "IRAN-10310040-07",
     "title": "מאמצי תיווך בינלאומיים בין וושינגטון לטהרן",
     "summary": "משלחות תיווך מקטאר ומפקיסטן פועלות מול ההנהגה בטהרן במטרה לבלום את המשך ההסלמה ולהביא להסכם בין הצדדים הנצים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T07:31:01+00:00",
     "last_update_at": "2026-10-30T18:55:36+00:00",
     "what_is_not_verified": "הפרטים המדויקים של טיוטת ההסכם ועמדות הצדדים בנוגע לפשרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/30/pakistan-army-cautiously-optimistic-about-us-iran-mediation-efforts?traffic_source=rss",
       "published_at": "2026-10-30T18:55:36+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/exclusive-pakistan-military-cautiously-optimistic-iran-us-mediation",
       "published_at": "2026-10-30T18:46:31+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610304599",
       "published_at": "2026-10-30T16:52:33+00:00"
      },
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610307228",
       "published_at": "2026-10-30T07:36:00+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132816",
       "published_at": "2026-10-30T07:31:01+00:00"
      }
     ],
     "places": [
      {
       "name": "טהרן",
       "lat": 35.6893,
       "lon": 51.3896
      }
     ]
    },
    {
     "id": "IRAN-10310040-08",
     "title": "הצבת אמצעי הגנה אווירית באחוזת מאר-א-לאגו",
     "summary": "בארה\"ב תועדה פריסת מערכות הגנה מדגם אוונג'ר וטילי סטינגר בסמוך לאחוזת נשיא ארה\"ב בפלורידה על רקע חשש מאיומים איראניים.",
     "axis": "איראן - ארה\"ב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T11:26:35+00:00",
     "last_update_at": "2026-10-30T11:26:35+00:00",
     "what_is_not_verified": "האם הוצבו טילי סטינגר בתוך האחוזה עצמה או רק מערכות אוונג'ר ומה טיב האיום",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/bkfxt1ftfe",
       "published_at": "2026-10-30T11:26:35+00:00"
      }
     ],
     "places": [
      {
       "name": "מאר-א-לאגו",
       "lat": 26.677,
       "lon": -80.0379
      }
     ]
    }
   ],
   "not_verified": [
    "דיווחים על שתי תקיפות אמריקניות ממוקדות בדרום איראן באזור האי קשם ונמל ג'אסכ",
    "הטענה לפיה טראמפ יחדש את התקיפות הצבאיות באיראן החל מ-4 בנובמבר",
    "הדיווח לפיו חיל הים של משמרות המהפכה השתלט על מערכות הבקרה של כטב\"ם אמריקני",
    "היקף הנזק המדויק והגורם האחראי לכל אחת מהפגיעות במכליות במצר הורמוז",
    "הערכות על קיומם של תאים איראניים רדומים המאיימים על נשיא ארה\"ב בפלורידה"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ארצות הברית",
     "declared": [
      "הגעה לסיום מהיר של המלחמה מול איראן",
      "מניעת השגת נשק גרעיני בידי טהרן",
      "שמירה על חופש השיט במצר הורמוז ומניעת ייצוא נפט איראני"
     ],
     "inferred": [
      "הפעלת לחץ צבאי מוגבר על ידי ריכוז כוחות ואיום בתקיפות ישירות כדי לכפות ויתורים במשא ומתן",
      "הרתעת המשטר האיראני מפגיעה באינטרסים אמריקניים באמצעות פריסת מערכי הגנה"
     ],
     "forecast": [
      "המשך איומים צבאיים עד לפקיעת מועד המגעים הדיפלומטיים",
      "אפשרות לפעולות תגמול מוגבלות נגד מערכי שיגור ומוצבים באזור המפרץ אם השיחות ייכשלו"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "הרתעת האויבים מפגיעה בריבונות ובזהות הלאומית",
      "הטלת מחיר כבד על ארה\"ב ובעלות בריתה במקרה של תקיפות חדשות",
      "שליטה במעבר כלי שיט בנתיבי מצר הורמוז"
     ],
     "inferred": [
      "שימוש בשיבוש הכלכלה העולמית וסחר הנפט כדי למנוע מתקפה אמריקנית רחבה",
      "איום בפריצה גרעינית וביטול מחויבויות בינלאומיות כמנוף לחץ במשא ומתן"
     ],
     "forecast": [
      "המשך פעולות הטרדה ושיבוש ימי מוגבלות במצר הורמוז",
      "שמירה על ערוצי המשא ומתן פתוחים מול מתווכים אזוריים במקביל להפגנת מוכנות צבאית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/30/pakistan-army-cautiously-optimistic-about-us-iran-mediation-efforts?traffic_source=rss",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/exclusive-pakistan-military-cautiously-optimistic-iran-us-mediation",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_fdd",
     "url": "https://www.fdd.org/in_the_news/u-s-evaluates-renewed-strikes-on-iran/",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610307228",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_irna",
     "url": "https://en.irna.ir/news/86307681/IRGC-strikes-a-team-linked-to-foreign-intelligence-services-in",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/usa/article/21743550",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-there-are-talks-tehran-wants-talk",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132816",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/bkfxt1ftfe",
     "accessed_at": "2026-10-31T00:40:32+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T00:40:40+00:00",
  "changes": {
   "IRAN-10310040-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פגיעה במכליות נפט במצר הורמוז",
    "score": 0.65
   },
   "IRAN-10310040-02": {
    "kind": "possible",
    "prev": "דיווחים על תקיפה אמריקנית ופעילות הגנה אווירית באי קשם",
    "score": 0.633
   },
   "IRAN-10310040-03": {
    "kind": "new"
   },
   "IRAN-10310040-04": {
    "kind": "new"
   },
   "IRAN-10310040-05": {
    "kind": "possible",
    "prev": "מגעים דיפלומטיים לחילופי מסרים והצבת תנאים בין ארצות הברית לאיראן",
    "score": 0.633
   },
   "IRAN-10310040-06": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "תדרוך הנשיא טראמפ והיערכות לאפשרות של מתקפה אמריקנית באיראן",
    "score": 0.817
   },
   "IRAN-10310040-07": {
    "kind": "new"
   },
   "IRAN-10310040-08": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-31T0612__ukraine-202610310612.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-31T06:12:28+00:00",
   "window": {
    "from": "2026-10-30T06:12:28+00:00",
    "to": "2026-10-31T06:12:28+00:00"
   },
   "model": {
    "name": "gemini-3.7-flash",
    "run_id": "ukraine-202610310612"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת במקביל לתקיפות הדדיות על תשתיות אנרגיה בעומק השטח, כאשר כוחות רוסיה פוגעים ברשת החשמל בקייב ואוקראינה מחדשת את הפגיעות בבתי זיקוק רוסיים. במקביל למאמצי סיוע בינלאומיים והפשרת עסקת טילי פטריוט עבור קייב, מתקיימת הפוגת אש נקודתית ראשונה מסוגה לפינוי תושבים מאולשקי שבדרום. בציר המדיני נרשם קיפאון ועימות חריף בין מוסקבה למדינות המערב במהלך מפגש ה-G20 בארה\"ב.",
   "fronts": [
    {
     "name": "ציר קייב והעורף האוקראיני",
     "status": "ספיגת מתקפות רוסיות על מתקני אנרגיה וחשמל לקראת עונת החורף"
    },
    {
     "name": "חזית חרקוב",
     "status": "מתקפות כטב\"מים רוסיות לצד דיווחים על הדיפת תקיפות בשטח"
    },
    {
     "name": "חזית הדרום (נהר הדנייפרו / אולשקי)",
     "status": "הפסקת אש מקומית זמנית לצורך פינוי הומניטרי של אזרחים"
    },
    {
     "name": "עורף רוסיה ומתקני הנפט",
     "status": "תקיפות כטב\"מים אוקראיניות על בתי זיקוק ואיומי תעופה באזורי פנים"
    },
    {
     "name": "הים השחור",
     "status": "פגיעות רוסיות בתנועת כלי שיט המובילים ציוד ומטען סמוך לחופי אוקראינה"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10310612-01",
     "title": "פגיעה באוניית משא מדרום לאודסה",
     "summary": "צבא רוסיה תקף אוניית משא שהובילה מטען צבאי עבור הכוחות האוקראיניים בים, במרחק 18 ק\"מ מדרום לאודסה.",
     "axis": "הים השחור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T05:45:19+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T05:45:19+00:00",
     "last_update_at": "2026-10-31T05:45:19+00:00",
     "what_is_not_verified": "אין אימות עצמאי לדיווח של משרד ההגנה הרוסי על זהות המטען או היקף הפגיעה באונייה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/defense/2211319",
       "published_at": "2026-10-31T05:45:19+00:00"
      }
     ],
     "places": [
      {
       "name": "אודסה, אוקראינה",
       "lat": 46.4843,
       "lon": 30.7323
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-02",
     "title": "אישור מכירת טילי פטריוט מארה\"ב לאוקראינה",
     "summary": "מחלקת המדינה של ארצות הברית אישרה עסקת מכירה של 500 טילי הגנה אווירית מדגם פטריוט PAC-3 לאוקראינה בעלות מוערכת של כ-2.1 מיליארד דולר במימון בעלות ברית.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T19:24:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T19:24:00+00:00",
     "last_update_at": "2026-10-31T04:20:00+00:00",
     "what_is_not_verified": "מועד אספקת הטילים בפועל טרם נקבע, וזלנסקי ציין כי האספקה עלולה להימשך שנים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4179938-zelensky-500-patriot-interceptors-could-provide-ukraine-with-strong-defense-this-winter.html",
       "published_at": "2026-10-31T04:20:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/31/ukraines-zelenskyy-praises-us-over-21bn-patriot-missile-deal-but-warns-it-could-take-years",
       "published_at": "2026-10-31T02:18:17+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c3vgxznlx7jzo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-31T00:40:43+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2211295",
       "published_at": "2026-10-30T23:28:56+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/31/u-s-state-department-approves-potential-2-1-billion-sale-of-500-patriot-air-defense-missiles-to-ukraine",
       "published_at": "2026-10-30T23:08:18+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/us-approves-2-1-billion-patriot-missile-sale-to-ukraine-as-nato-commander-dismisses-delivery-concerns/",
       "published_at": "2026-10-30T21:24:53+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060570/",
       "published_at": "2026-10-30T19:24:00+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10310612-03",
     "title": "מתקפת כטב\"מים רוסית על חרקוב",
     "summary": "מתקפת מל\"טים רוסית פגעה בעיר חרקוב, גרמה לפציעתם של שלושה אזרחים ולנזק בעשרה מבני מגורים.",
     "axis": "חזית חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T05:08:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T05:08:00+00:00",
     "last_update_at": "2026-10-31T05:08:00+00:00",
     "what_is_not_verified": "אין אימות נוסף מחוץ לדיווח המקומי לגבי היקף הנזק המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4179940-three-injured-homes-damaged-in-russian-drone-strike-on-kharkiv.html",
       "published_at": "2026-10-31T05:08:00+00:00"
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
     "id": "UKRAINE-10310612-04",
     "title": "תקיפת מתקן אנרגיה בקייב",
     "summary": "פגיעה רוסית במתקן אנרגיה בקייב גרמה לניתוקי חשמל ואספקת מים בחלקים מהעיר.",
     "axis": "עורף אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T22:21:44+00:00",
     "last_update_at": "2026-10-30T22:21:44+00:00",
     "what_is_not_verified": "היקף הפגיעה המדויק בתשתיות והשבתתן המלאה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5db480ac3178c6f1",
       "url": "https://kyivindependent.com/russian-attack-hits-kyiv-energy-facility-leaving-parts-of-four-districts-without-power/",
       "published_at": "2026-10-30T22:21:44+00:00"
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
     "id": "UKRAINE-10310612-05",
     "title": "מבצע הומניטרי ופינוי אזרחים מהעיר אולשקי הכבושה",
     "summary": "הפוגת אש ייעודית אפשרה יציאת שיירת פינוי וסיוע הומניטרי מהעיר אולשקי שבמחוז חרסון דרך מסלול שעובר ברוסיה ובלארוס.",
     "axis": "חזית הדרום (חרסון)",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T12:00:00+00:00",
     "last_update_at": "2026-10-30T20:27:00+00:00",
     "what_is_not_verified": "מספר המפונים המדויק שנוי במחלוקת בין הצדדים, וכן דיווחים על פינוי גופות מבית החולים המקומי טרם אומתו באופן בלתי תלוי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/30/8060573/",
       "published_at": "2026-10-30T20:27:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/30/evacuation-besieged-ukrainian-city-oleshky",
       "published_at": "2026-10-30T17:13:48+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49120",
       "published_at": "2026-10-30T16:45:47+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/c60me298k1yeo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-30T16:26:11+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/30/russia-s-human-rights-commissioner-says-humanitarian-mission-in-occupied-oleshkyis-wrapping-up",
       "published_at": "2026-10-30T16:22:35+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/49118",
       "published_at": "2026-10-30T15:02:35+00:00"
      },
      {
       "source_id": "src_un_news",
       "source_root_id": "or_unknown_origin",
       "url": "https://news.un.org/feed/view/en/story/2026/10/1168712",
       "published_at": "2026-10-30T12:00:00+00:00"
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
     "id": "UKRAINE-10310612-06",
     "title": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק",
     "summary": "כלי טיס בלתי מאוישים של אוקראינה פגעו בבית הזיקוק של חברת רוסנפט בנובוקויבישבסק במחוז סמרה, וגרמו לסדרת שריפות במתקן.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T07:51:01+00:00",
     "last_update_at": "2026-10-30T09:09:24+00:00",
     "what_is_not_verified": "רמת הפגיעה ביכולת ייצור הדלק הסילוני והיקף הנזק המבני המדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_israelhayom",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21740945",
       "published_at": "2026-10-30T09:09:24+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132819",
       "published_at": "2026-10-30T07:51:01+00:00"
      }
     ],
     "places": [
      {
       "name": "נובוקויבישבסק, רוסיה",
       "lat": 53.0992,
       "lon": 49.9484
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-07",
     "title": "התרעות כטב\"מים ושיבושי חשמל באזורי רוסיה",
     "summary": "שיבושי חשמל נרשמו במחוז קלינינגרד ברוסיה, והוטלו הגבלות תעופה בשדה התעופה באופה בעקבות התרעת כטב\"מים בבשקורטוסטן.",
     "axis": "עורף רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T04:47:00+00:00",
     "last_update_at": "2026-10-31T04:47:00+00:00",
     "what_is_not_verified": "הקשר הישיר בין הפסקות החשמל בקלינינגרד לאיומי הכטב\"מים או לפעילות אוקראינית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/power-outages-hit-russias-kaliningrad-oblast-explosions-reported-in-ufa-amid-drone-alerts/",
       "published_at": "2026-10-31T04:47:00+00:00"
      }
     ],
     "places": [
      {
       "name": "אופה, רוסיה",
       "lat": 54.7261,
       "lon": 55.9475
      },
      {
       "name": "קלינינגרד, רוסיה",
       "lat": 54.7046,
       "lon": 20.4566
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-08",
     "title": "התחייבות קנדה והאיחוד האירופי לחבילות מימון לאוקראינה",
     "summary": "קנדה התחייבה להקצות 500 מיליון אירו להלוואת הסיוע לאוקראינה, והנציבות האירופית גיבשה מנגנון להעברת 45 מיליארד אירו נוספים עד סוף שנת 2027.",
     "axis": "סיוע בינלאומי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-31T00:16:53+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-31T00:16:53+00:00",
     "last_update_at": "2026-10-31T05:30:00+00:00",
     "what_is_not_verified": "עמידת אוקראינה בכלל התנאים הרגולטוריים של האיחוד האירופי לשחרור מלוא הכספים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4179945-canada-to-provide-500-million-to-support-ukraine.html",
       "published_at": "2026-10-31T05:30:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/31/8060588/",
       "published_at": "2026-10-31T05:22:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-polytics/4179939-eu-and-canada-reaffirm-continued-support-for-ukraine.html",
       "published_at": "2026-10-31T04:45:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/canada-pledges-500-million-euros-toward-ukraine-support-loan-amid-2027-budget-shortfall/",
       "published_at": "2026-10-31T00:16:53+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10310612-09",
     "title": "עימות דיפלומטי בפסגת שרי החוץ של ה-G20 באטלנטה",
     "summary": "התמונה הקבוצתית המסורתית של שרי החוץ בוטלה עקב סירוב שרים אירופים להצטלם עם שר החוץ הרוסי לברוב, שלווה בהאשמות חריפות מצד האיחוד האירופי על שקרים בנושא המלחמה.",
     "axis": "מגעים מדיניים ודיפלומטיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T18:44:05+00:00",
     "last_update_at": "2026-10-31T04:26:03+00:00",
     "what_is_not_verified": "הסכמה או היתכנות לשיחות ישירות בין נשיאי רוסיה ואוקראינה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/31/ukraine-war-briefing-moscows-lavrov-snubbed-at-g20-in-atlanta",
       "published_at": "2026-10-31T04:26:03+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/politics/2211313",
       "published_at": "2026-10-31T03:25:16+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "or_unknown_origin",
       "url": "https://meduza.io/en/news/2026/10/30/g20-foreign-ministers-group-photo-canceled-after-several-refuse-to-pose-with-russian-foreign-minister-sergey-lavrov",
       "published_at": "2026-10-30T18:44:05+00:00"
      }
     ],
     "places": [
      {
       "name": "אטלנטה, ארצות הברית",
       "lat": 33.7545,
       "lon": -84.3898
      }
     ]
    },
    {
     "id": "UKRAINE-10310612-10",
     "title": "סגירת מערכת העיתון נובאיה גזטה במוסקבה",
     "summary": "עיתון האופוזיציה הרוסי הוותיק נובאיה גזטה הודיע על סגירת פעילותו לאחר פינויו ממשרדיו במוסקבה וחסימת פלטפורמות התרומות שלו.",
     "axis": "זירה פנימית ברוסיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T18:41:49+00:00",
     "last_update_at": "2026-10-30T19:10:31+00:00",
     "what_is_not_verified": "האם העיתון יצליח לחדש פעילות מפלטפורמות חלופיות בעתיד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_421d094b24ec1088",
       "url": "https://meduza.io/en/feature/2026/10/30/can-russia-s-independent-newspaper-novaya-gazeta-rise-from-the-ashes-a-third-time-editor-sergey-sokolov-discusses-what-comes-next",
       "published_at": "2026-10-30T19:10:31+00:00"
      },
      {
       "source_id": "src_meduza",
       "source_root_id": "fh_421d094b24ec1088",
       "url": "https://meduza.io/en/feature/2026/10/30/as-novaya-gazeta-one-of-russia-s-best-known-independent-newspapers-is-forced-to-close-after-33-years-three-former-staffers-look-back-on-its-legacy",
       "published_at": "2026-10-30T18:41:49+00:00"
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
    "נתוני האבדות היומיים שמסרו צבאות אוקראינה ורוסיה אינם ניתנים לאימות עצמאי",
    "מספרם המדויק של האזרחים שפונו מאולשקי והיעד הסופי שבחרו",
    "טענות יצרנית הנשק האוקראינית על פיתוח מעקף טכנולוגי מלא להגבלות סטארלינק",
    "הטענות בדבר כוונת רוסיה להביא לקריסה כוללת של תשתיות החום והמים בחורף בערים מרכזיות"
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
     "value": 1.1172,
     "unit": "USD",
     "change_pct": 0.38,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "אוקראינה",
     "declared": [
      "הצטיידות ב-500 טילי פטריוט להגנה על שמי המדינה והתשתיות בחורף",
      "גיוס סיוע תקציבי וביטחוני רב-שנתי מהאיחוד האירופי וממדינות המערב",
      "המשך פגיעה במתקני אנרגיה המזינים את הצבא הרוסי"
     ],
     "inferred": [
      "שחיקת מקורות ההכנסה והדלק של צבא רוסיה באמצעות כטב\"מים ארוכי טווח חרף לחץ בינלאומי",
      "מזעור פגיעות לוגיסטית ופיתוח חלופות עצמאיות לתקשורת לוויינית בשדה הקרב"
     ],
     "forecast": [
      "המשך תלות עמוקה במימון אירופי והאצת אספקת מיירטים לפני שיא החורף",
      "מאמץ לשמר ערוצי פינוי הומניטריים מוגבלים באזורים נצורים תחת תיווך זר"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה בנתיבי אספקת נשק מערבי ומטענים צבאיים בים וביבשה",
      "השלמת המשימה ההומניטרית באולשקי והעברת תושבים למרחבים בטוחים",
      "נכונות רטורית לקיום שיחות עם אוקראינה במוסקבה בלבד"
     ],
     "inferred": [
      "הפעלת לחץ על אזרחי אוקראינה באמצעות השבתת מערכות החשמל והמים לקראת החורף",
      "שבירת הבידוד המדיני הבינלאומי באמצעות חיכוך ישיר במפגשי ה-G20 ומגעים עם הממשל האמריקאי"
     ],
     "forecast": [
      "החרפת התקיפות על תחנות כוח ואנרגיה באוקראינה במקביל לקשיי שיווק הנפט מול סנקציות",
      "המשך חסימת פעילותם של גופי תקשורת וחברה אזרחית בלתי תלויים מבית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/c60me298k1yeo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/31/ukraine-war-briefing-moscows-lavrov-snubbed-at-g20-in-atlanta",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_israelhayom",
     "url": "https://www.israelhayom.co.il/news/world-news/europe/article/21740945",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/canada-pledges-500-million-euros-toward-ukraine-support-loan-amid-2027-budget-shortfall/",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_meduza",
     "url": "https://meduza.io/en/feature/2026/10/30/as-novaya-gazeta-one-of-russia-s-best-known-independent-newspapers-is-forced-to-close-after-33-years-three-former-staffers-look-back-on-its-legacy",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/31/8060588/",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2211313",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132819",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/49118",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-polytics/4179939-eu-and-canada-reaffirm-continued-support-for-ukraine.html",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    },
    {
     "source_id": "src_un_news",
     "url": "https://news.un.org/feed/view/en/story/2026/10/1168712",
     "accessed_at": "2026-10-31T06:12:28+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T17:19:07+00:00",
  "changes": {
   "UKRAINE-10310612-01": {
    "kind": "new"
   },
   "UKRAINE-10310612-02": {
    "kind": "new"
   },
   "UKRAINE-10310612-03": {
    "kind": "possible",
    "prev": "הדיפת מתקפה רוסית באזור חרקוב ועליית מניין הקורבנות מאיזיום",
    "score": 0.467
   },
   "UKRAINE-10310612-04": {
    "kind": "new"
   },
   "UKRAINE-10310612-05": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פינוי אזרחים והפסקת אש הומניטרית בעיר אולשקי הכבושה",
    "score": 1.0
   },
   "UKRAINE-10310612-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "מתקפת כטב\"מים אוקראינית על בית זיקוק בנובוקויבישבסק ברוסיה",
    "score": 1.0
   },
   "UKRAINE-10310612-07": {
    "kind": "new"
   },
   "UKRAINE-10310612-08": {
    "kind": "new"
   },
   "UKRAINE-10310612-09": {
    "kind": "new"
   },
   "UKRAINE-10310612-10": {
    "kind": "new"
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-31T0050__north-202610310050.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-31T00:50:01+00:00",
   "window": {
    "from": "2026-10-30T00:50:01+00:00",
    "to": "2026-10-31T00:50:01+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610310050"
   },
   "summary": "הלחימה והמתיחות בדרום לבנון נמשכות לצד פעילות של כוחות ישראליים ודיווחים על פגיעה במבנים ותשתיות. בזירה הפנימית בלבנון גובר הלחץ המדינתי והמשפטי על חיזבאללה בעקבות חשיפת משלוחי אמצעי לחימה והעמדת מעורבים לדין. בסוריה מתמודדים אזורי המזרח והצפון עם נזקי שיטפונות קשים, לצד קשיים כלכליים תחת הממשל החדש.",
   "fronts": [
    {
     "name": "דרום לבנון",
     "status": "לחימה פעילה, פעילות קרקעית, הפגזות וירי ארטילרי"
    },
    {
     "name": "הזירה הפנים-לבנונית",
     "status": "מתח פוליטי ומשפטי מול חיזבאללה וניסיונות ממשלתיים לפירוק נשק במחנות"
    },
    {
     "name": "מזרח וצפון סוריה",
     "status": "משבר הומניטרי ותשתיתי בעקבות שיטפונות וקשיים כלכליים"
    }
   ],
   "events": [
    {
     "id": "NORTH-10310050-01",
     "title": "דיווח על פעילות צה\"ל בדרום לבנון",
     "summary": "לפי דיווחים, כוחות ישראליים פוצצו מבנים, הפגיזו עיירות, הציתו בתים וירו במקלעים באזורים שונים בדרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T22:51:23+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T22:51:23+00:00",
     "last_update_at": "2026-10-30T22:51:23+00:00",
     "what_is_not_verified": "הדיווח נסמך על כלי תקשורת ולא נמסר אישור רשמי של צה\"ל או פירוט מקומות מדויק.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_anadolu",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aa.com.tr/en/middle-east/israel-blows-up-homes-shells-towns-in-southern-lebanon/4106993",
       "published_at": "2026-10-30T22:51:23+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-02",
     "title": "יירוט מטרה חשודה בדרום לבנון",
     "summary": "דיווח ברשת החברתית על יירוט של מטרה חשודה בשמי דרום לבנון.",
     "axis": "דרום לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T05:41:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T05:41:03+00:00",
     "last_update_at": "2026-10-30T05:41:03+00:00",
     "what_is_not_verified": "זהות המטרה, הגורם המיירט והמיקום המדויק אינם מפורטים מעבר להודעה בטלגרם.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94897",
       "published_at": "2026-10-30T05:41:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-03",
     "title": "הגשת כתבי אישום בלבנון על משאית חומרי הנפץ של חיזבאללה",
     "summary": "בית הדין הצבאי בלבנון הגיש כתבי אישום נגד שלושה-עשר בני אדם, בהם פעילי חיזבאללה, על מעורבות בהברחת מטען חומרי נפץ שנתפס במחסום דהר אל-ביידר.",
     "axis": "לבנון (פנים)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-30T09:45:55+00:00",
     "last_update_at": "2026-10-30T16:55:22+00:00",
     "what_is_not_verified": "חלק מהנאשמים מזוהים רק בכינויים ולא נתפסו בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-court-charges-13-over-hezbollah-explosives-shipment",
       "published_at": "2026-10-30T16:55:22+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.newarab.com/news/lebanon-court-charges-13-over-seized-hezbollah-explosives-truck",
       "published_at": "2026-10-30T16:17:30+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://english.almanar.com.lb/article/144942/",
       "published_at": "2026-10-30T16:17:15+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.lbcgroup.tv/news/news-bulletin-reports/965612/dahr-al-baidar-explosives-case-takes-new-turn-as-13-face-charges/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965612",
       "published_at": "2026-10-30T15:10:00+00:00"
      },
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_54da6f075e9c0d5b",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965561/military-prosecutor-charges-13-hezbollah-members-over-explosives-truck/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965561",
       "published_at": "2026-10-30T09:45:55+00:00"
      }
     ],
     "places": [
      {
       "name": "דהר אל-ביידר, לבנון",
       "lat": 33.8109,
       "lon": 35.7661
      }
     ]
    },
    {
     "id": "NORTH-10310050-04",
     "title": "פרסום נתוני נפגעים על ידי משרד הבריאות הלבנוני",
     "summary": "משרד הבריאות בלבנון עדכן את מניין הנפגעים מפעולות ישראל במדינה.",
     "axis": "דרום לבנון",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T19:07:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T19:07:22+00:00",
     "last_update_at": "2026-10-30T19:07:22+00:00",
     "what_is_not_verified": "הנתונים מתבססים רק על דיווח משרד הבריאות הלבנוני ללא אימות חיצוני.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_a080a0d65aca9bef",
       "url": "https://english.almanar.com.lb/article/144982/",
       "published_at": "2026-10-30T19:07:22+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-05",
     "title": "התייעצויות ממשלת לבנון בנושא הנשק הפלסטיני במחנות",
     "summary": "ראש ממשלת לבנון נואף סלאם הודיע על פתיחת התייעצויות על תוכנית לאומית לניהול מחנות הפליטים והסדרת סוגיית הנשק הפלסטיני תחת הריבונות הלבנונית.",
     "axis": "לבנון (פנים)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T06:08:33+00:00",
     "last_update_at": "2026-10-30T06:08:33+00:00",
     "what_is_not_verified": "מידת ההסכמה וההיענות מצד הפלגים הפלסטיניים בשטח אינה ידועה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_b60ceafba37a2fe1",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965519/pm-salam-addressing-the-situation-of-palestinian-refugees-in-lebanon-r/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965519",
       "published_at": "2026-10-30T06:08:33+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-06",
     "title": "שיחות בין לבנון לקטאר על תוכנית משק האנרגיה",
     "summary": "משרד האנרגיה הלבנוני דיווח על התקדמות במגעים עם קטאר לגיבוש מכתב כוונות בנושא תוכנית אנרגיה משולבת וסיוע בשיקום נזקי המלחמה בדרום.",
     "axis": "לבנון (פנים)",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T13:07:10+00:00",
     "last_update_at": "2026-10-30T13:07:10+00:00",
     "what_is_not_verified": "טרם אושר מכתב הכוונות בממשלה הלבנונית.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_lbci",
       "source_root_id": "fh_62ac06f37c404d85",
       "url": "https://www.lbcgroup.tv/news/lebanon-news/965598/lebanon-qatar-make-progress-in-talks-on-energy-sector-proposal/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965598",
       "published_at": "2026-10-30T13:07:10+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10310050-07",
     "title": "שיטפונות קטלניים במזרח ובצפון סוריה",
     "summary": "גשמים עזים גרמו לשיטפונות שגבו את חייהם של שבעה בני אדם וגרמו לנזקים כבדים לתשתיות במחוזות א-רקה, דיר א-זור, אל-חסכה, חלב ואידליב.",
     "axis": "סוריה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-30T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-30T19:46:34+00:00",
     "last_update_at": "2026-10-30T19:50:09+00:00",
     "what_is_not_verified": "גורלם של ארבעה נעדרים טרם התברר ופרטי אחד ההרוגים חסרים.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_x_sana",
       "url": "https://www.newarab.com/news/five-children-among-seven-dead-eastern-syria-floods",
       "published_at": "2026-10-30T19:50:09+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_x_sana",
       "url": "https://www.al-monitor.com/originals/2026/10/five-children-among-seven-dead-eastern-syria-floods",
       "published_at": "2026-10-30T19:46:34+00:00"
      }
     ],
     "places": [
      {
       "name": "א-רקה, סוריה",
       "lat": 35.9497,
       "lon": 39.0089
      },
      {
       "name": "דיר א-זור, סוריה",
       "lat": 35.3333,
       "lon": 40.15
      }
     ]
    }
   ],
   "not_verified": [
    "טענות על הצתת בתים וירי מכונות ירייה בדרום לבנון מבוססות על דיווחים עיתונאיים ללא אישור רשמי",
    "זהות המטרה החשודה שיורטה בדרום לבנון אינה ידועה",
    "זהותם המלאה של חמישה מנאשמי פרשת משאית חומרי הנפץ בלבנון שמופיעים תחת כינויים בלבד"
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
     "value": 3.1284,
     "unit": "ILS",
     "change_pct": 0.4,
     "source_id": "src_ecb",
     "as_of": "2026-10-30T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "חיזבאללה",
     "declared": [
      "שימוש באמצעי הלחימה שנתפסו לצורך עימות עם ישראל והגנה על לבנון"
     ],
     "inferred": [
      "שימור יכולות צבאיות והתחמשות למרות לחצים פנימיים והסכמים מדיניים לפירוק נשק"
     ],
     "forecast": [
      "המשך חיכוך מול מערכת המשפט והממשל בלבנון סביב שינוע אמצעי לחימה"
     ]
    },
    {
     "actor": "ממשלת לבנון",
     "declared": [
      "אכיפת ריבונות המדינה על מחנות הפליטים הפלסטיניים והעמדה לדין של גורמים הפוגעים בביטחון המדינה"
     ],
     "inferred": [
      "החזרת סמכויות הריבונות וצמצום האחיזה הצבאית החמושה של חיזבאללה ושל פלגים פלסטיניים"
     ],
     "forecast": [
      "המשך מאמצי הידברות זהירים לצד העמקה בפיקוח על מחסומים וצירים מרכזיים"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/144982/",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/five-children-among-seven-dead-eastern-syria-floods",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_anadolu",
     "url": "https://www.aa.com.tr/en/middle-east/israel-blows-up-homes-shells-towns-in-southern-lebanon/4106993",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_lbci",
     "url": "https://www.lbcgroup.tv/news/lebanon-news/965598/lebanon-qatar-make-progress-in-talks-on-energy-sector-proposal/en?src=rss&utm_campaign=rss&utm_source=Rss-articles&utm_term=Rss&utm_medium=Rss-965598",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/lebanese-court-charges-13-over-hezbollah-explosives-shipment",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/five-children-among-seven-dead-eastern-syria-floods",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94897",
     "accessed_at": "2026-10-31T00:50:01+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-30T00:49:24+00:00",
  "changes": {
   "NORTH-10310050-01": {
    "kind": "possible",
    "prev": "כניסת אזרחים לבנונים לשטח הקו הצהוב בדרום לבנון",
    "score": 0.467
   },
   "NORTH-10310050-02": {
    "kind": "possible",
    "prev": "הצהרת חזבאללה בדבר שיקום דרום ביירות ואי-ויתור על אדמות לבנון",
    "score": 0.467
   },
   "NORTH-10310050-03": {
    "kind": "new"
   },
   "NORTH-10310050-04": {
    "kind": "new"
   },
   "NORTH-10310050-05": {
    "kind": "new"
   },
   "NORTH-10310050-06": {
    "kind": "new"
   },
   "NORTH-10310050-07": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "חברת נפט אמריקאית מקדמת הכפלת תפוקה בצפון-מזרח סוריה",
    "score": 0.65
   }
  }
 }
};
