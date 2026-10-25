/* נוצר אוטומטית ע"י tools/ingest_war.py — רק ניתוחים שאושרו. לא לערוך ידנית. */
window.DB = window.DB || {};
window.DB.war_published = {
 "yemen": {
  "draft": "drafts/yemen/2026-10-25T0340__yemen-202610250340.json",
  "analysis": {
   "contract_version": 1,
   "arena": "yemen",
   "generated_at": "2026-10-25T03:40:27+00:00",
   "window": {
    "from": "2026-10-24T03:40:27+00:00",
    "to": "2026-10-25T03:40:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "yemen-202610250340"
   },
   "summary": "הלחימה בין תנועת החות'ים לבין הקואליציה בהובלת סעודיה וממשלת תימן הסלימה מחדש בעקבות קריסת שביתת הנשק. החות'ים מפעילים כטב\"מים וטילים בליסטיים לעבר יעדי תשתית, שדות תעופה ומתקני נפט בריאד ובמערב סעודיה, וכן תוקפים אתרים בעיר עדן ובאזורי משמר החופים. במקביל נמשכים עימותים קרקעיים ופגיעות באוכלוסייה אזרחית במוקדים שונים בדרום-מערב תימן, בפרט במחוז תעז.",
   "fronts": [
    {
     "name": "חזית סעודיה - תימן (עומק סעודיה)",
     "status": "הסלמה בתקיפות כטב\"מים וטילים לעבר שדות תעופה ומתקני נפט בריאד ובמערב סעודיה"
    },
    {
     "name": "חזית פנים-תימן (עדן ודרום המדינה)",
     "status": "תקיפות טילים של החות'ים על יעדי ממשל, משמר החופים ונמל התעופה בעדן ופיצוצים באזור לחג'"
    },
    {
     "name": "חזית מחוז תעז",
     "status": "התחדשות חילופי אש עזים ופעילות קרקעית באזור א-דבאב וג'בל האן לצד הפגזות"
    }
   ],
   "events": [
    {
     "id": "YEMEN-10250340-01",
     "title": "יירוט כלי טיס בלתי מאוישים מעל אזור ריאד",
     "summary": "כוחות הקואליציה בהובלת סעודיה הודיעו על יירוט והשמדה של שני כטב\"מים בשמי אזור ריאד. ההגנה האזרחית הסעודית הודיעה על חלוף הסכנה.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T23:23:29+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T23:23:29+00:00",
     "last_update_at": "2026-10-25T03:31:08+00:00",
     "what_is_not_verified": "אין אימות עצמאי להפלת הכטב\"מים מעבר להודעת הקואליציה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/minutes-after-danger-alert-saudi-civil-defence-says-danger-has-passed",
       "published_at": "2026-10-25T03:31:08+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/coalition-forces-intercept-another-drone-over-riyadh-spokesman-says",
       "published_at": "2026-10-25T02:29:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-destroyed-riyadh-region-explosions-rock-southern-yemen",
       "published_at": "2026-10-24T23:23:29+00:00"
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
     "id": "YEMEN-10250340-02",
     "title": "חידוש הטיסות בנמל התעופה הבינלאומי בריאד והתרעה חות'ית חוזרת",
     "summary": "נמל התעופה הבינלאומי בריאד הודיע על חידוש הטיסות לאחר סגירה בת שבועיים בעקבות מתקפות קודמות, בעוד דובר החות'ים שב והזהיר כי המקום נותר מטרה צבאית.",
     "axis": "סעודיה - תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T21:14:13+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T21:14:13+00:00",
     "last_update_at": "2026-10-25T03:30:34+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/riyadh-airport-resumes-flights-following-houthi-attacks",
       "published_at": "2026-10-25T03:30:34+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/yemens-houthis-renew-warning-against-using-riyadh-airport",
       "published_at": "2026-10-25T00:46:40+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-renew-warning-against-using-riyadh-airport",
       "published_at": "2026-10-24T23:05:18+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/riyadh-airport-resume-flights-sunday-following-closure-after-houthi",
       "published_at": "2026-10-24T21:14:13+00:00"
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
     "id": "YEMEN-10250340-03",
     "title": "מתקפות טילים על יעדים בעיר עדן",
     "summary": "טילים ששיגרו החות'ים פגעו במספר אתרים בעיר עדן, בהם אזור נמל התעופה ומתקנים של משמר החופים, לפי הודעות גורמי ממשל מקומיים.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T08:07:34+00:00",
     "last_update_at": "2026-10-24T21:08:51+00:00",
     "what_is_not_verified": "קיימת מחלוקת בין גופי הממשל האם נפגע נמל התעופה או רק מפקדות משמר החופים, וכן היקף הנזק והנפגעים אינם מאומתים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "fh_7ab28fb21d9cb041",
       "url": "https://www.aljazeera.com/news/2026/10/24/houthis-launch-attacks-on-saudi-arabia-and-yemens-aden?traffic_source=rss",
       "published_at": "2026-10-24T21:08:51+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_7ab28fb21d9cb041",
       "url": "https://www.sabanew.net/viewstory/154568",
       "published_at": "2026-10-24T19:31:23+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_7ab28fb21d9cb041",
       "url": "https://www.newarab.com/news/houthi-missiles-target-aden-airport-coastguard",
       "published_at": "2026-10-24T18:13:35+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "fh_7ab28fb21d9cb041",
       "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
       "published_at": "2026-10-24T17:50:25+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_ecdd2a28aa1df3dd",
       "url": "https://www.sabanew.net/viewstory/154558",
       "published_at": "2026-10-24T16:53:56+00:00"
      },
      {
       "source_id": "src_saba_aden",
       "source_root_id": "fh_11514788f42a68b8",
       "url": "https://www.sabanew.net/viewstory/154553",
       "published_at": "2026-10-24T14:56:30+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "fh_7ab28fb21d9cb041",
       "url": "https://www.newarab.com/news/houthis-attack-yemens-aden-say-saudi-strikes-kill-16",
       "published_at": "2026-10-24T08:07:34+00:00"
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
     "id": "YEMEN-10250340-04",
     "title": "טענות סעודיות ליירוט טילים והכחשה חות'ית לגבי פגיעה באתרים קדושים",
     "summary": "גורמים בסעודיה טענו כי יורטו טילים בליסטיים שכוונו לאזורי מכה ומדינה ונשרו רסיסים בערים ג'דה, טאיף וראביע'. מנגד, החות'ים הכחישו ירי לעבר ערים קדושות וטענו כי תקפו מתקני נפט ושדות תעופה.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T08:07:34+00:00",
     "last_update_at": "2026-10-24T23:23:29+00:00",
     "what_is_not_verified": "האם שוגרו טילים ישירות לכיוון מכה ומדינה או רק למתקני תשתית סמוכים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-destroyed-riyadh-region-explosions-rock-southern-yemen",
       "published_at": "2026-10-24T23:23:29+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-deny-report-they-attacked-mecca-and-medina",
       "published_at": "2026-10-24T18:44:03+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
       "published_at": "2026-10-24T17:50:25+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-says-houthi-missile-shrapnel-falls-jeddah-taif-rabigh-after",
       "published_at": "2026-10-24T17:19:12+00:00"
      },
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/houthis-attack-yemens-aden-say-saudi-strikes-kill-16",
       "published_at": "2026-10-24T08:07:34+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      },
      {
       "name": "ג'דה, סעודיה",
       "lat": 21.5504,
       "lon": 39.1742
      },
      {
       "name": "ראביע', סעודיה",
       "lat": 22.799,
       "lon": 39.0336
      }
     ]
    },
    {
     "id": "YEMEN-10250340-05",
     "title": "התחדשות קרבות ועימותים בדרום-מערב תימן ובמחוז תעז",
     "summary": "קרבות עזים התחדשו באזור א-דבאב ובסביבות ג'בל האן בדרום-מערב תימן, לצד דיווחים על פיצוצים עזים בין המחוזות לחג' ועדן.",
     "axis": "פנים-תימן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T23:23:29+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T23:23:29+00:00",
     "last_update_at": "2026-10-25T02:29:35+00:00",
     "what_is_not_verified": "היקף הנפגעים וזהות הכוחות המשתתפים באופן ספציפי בכל נקודה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/coalition-forces-intercept-another-drone-over-riyadh-spokesman-says",
       "published_at": "2026-10-25T02:29:35+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-destroyed-riyadh-region-explosions-rock-southern-yemen",
       "published_at": "2026-10-24T23:23:29+00:00"
      }
     ],
     "places": [
      {
       "name": "תעז, תימן",
       "lat": 13.5752,
       "lon": 44.0215
      },
      {
       "name": "לחג', תימן",
       "lat": 13.0578,
       "lon": 44.8836
      }
     ]
    },
    {
     "id": "YEMEN-10250340-06",
     "title": "צמצום מצבת כוח האדם בנציגות ארצות הברית בסעודיה",
     "summary": "ממשלת ארצות הברית צמצמה את צוות הנציגות שלה בסעודיה בתגובה להסלמת התקיפות מצד החות'ים.",
     "axis": "סעודיה - תימן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T16:46:39+00:00",
     "last_update_at": "2026-10-24T16:46:39+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-has-ramped-efforts-target-us-personnel-intelligence-memo-warns",
       "published_at": "2026-10-24T16:46:39+00:00"
      }
     ],
     "places": [
      {
       "name": "ריאד, סעודיה",
       "lat": 24.6389,
       "lon": 46.716
      }
     ]
    }
   ],
   "not_verified": [
    "טענת סעודיה כי טילי החות'ים שוגרו במישרין לעבר המקומות הקדושים במכה ובמדינה",
    "מספר הנפגעים המדויק והנזק שנגרם בפועל בתקיפות הטילים בעיר עדן",
    "מיקומן המדויק של פגיעות הטילים בעדן (בנמל התעופה עצמו או במתקני משמר החופים בלבד)"
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "תנועת החות'ים",
     "declared": [
      "פגיעה במתקני נפט ושדות תעופה בסעודיה",
      "המשך הגדרת שדה התעופה בריאד כיעד צבאי והתרעה מפני שימוש בו"
     ],
     "inferred": [
      "שיבוש הפעילות הכלכלית והתעופתית בסעודיה כדי ללחוץ לעצירת תקיפות הקואליציה",
      "פגיעה ביכולת התפקוד של ממשלת תימן בעיר עדן"
     ],
     "forecast": [
      "המשך שיגור כטב\"מים וטילים לעבר עומק סעודיה ומוקדי הממשל בדרום תימן"
     ]
    },
    {
     "actor": "הקואליציה בהובלת סעודיה",
     "declared": [
      "הגנה על ביטחון התושבים ויירוט איומים אוויריים בשמי הממלכה",
      "השבת הפעילות האזרחית והתעופתית בריאד לסדרה"
     ],
     "inferred": [
      "מניעת פגיעה בסמלי שלטון ובתשתיות קריטיות תוך בלימת הישגי החות'ים",
      "שמירה על הלגיטימציה של ממשלת תימן המוכרת"
     ],
     "forecast": [
      "הגברת מאמצי ההגנה האווירית סביב שדות תעופה ותקיפות תגובה בתימן"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/24/houthis-launch-attacks-on-saudi-arabia-and-yemens-aden?traffic_source=rss",
     "accessed_at": "2026-10-25T03:40:27+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/iran-has-ramped-efforts-target-us-personnel-intelligence-memo-warns",
     "accessed_at": "2026-10-25T03:40:27+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
     "accessed_at": "2026-10-25T03:40:27+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-destroyed-riyadh-region-explosions-rock-southern-yemen",
     "accessed_at": "2026-10-25T03:40:27+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/news/houthis-attack-yemens-aden-say-saudi-strikes-kill-16",
     "accessed_at": "2026-10-25T03:40:27+00:00"
    },
    {
     "source_id": "src_saba_aden",
     "url": "https://www.sabanew.net/viewstory/154553",
     "accessed_at": "2026-10-25T03:40:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-24T14:06:29+00:00",
  "changes": {
   "YEMEN-10250340-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "יירוט טיל בליסטי לעבר ריאד וכטב\"ם במזרח סעודיה",
    "score": 0.817
   },
   "YEMEN-10250340-02": {
    "kind": "new"
   },
   "YEMEN-10250340-03": {
    "kind": "new"
   },
   "YEMEN-10250340-04": {
    "kind": "possible",
    "prev": "יירוט טילים בליסטיים לעבר טאיף וינבוע והתרעות במערב סעודיה",
    "score": 0.467
   },
   "YEMEN-10250340-05": {
    "kind": "possible",
    "prev": "החרפת המצור וההפגזות של החות'ים על העיר תעז",
    "score": 0.633
   },
   "YEMEN-10250340-06": {
    "kind": "possible",
    "prev": "פקיסטן אשררה ברית הגנה עם סעודיה וטורקיה",
    "score": 0.467
   }
  }
 },
 "iran": {
  "draft": "drafts/iran/2026-10-25T1432__iran-202610251432.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-25T14:32:55+00:00",
   "window": {
    "from": "2026-10-24T14:32:55+00:00",
    "to": "2026-10-25T14:32:55+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "iran-202610251432"
   },
   "summary": "העימות האזורי מתאפיין במתיחות גבוהה סביב תוכנית הגרעין האיראנית ואיומי תקיפה הדדיים בין ארה\"ב וישראל לבין טהרן, לצד המשך פעילות החות'ים נגד סעודיה ותקיפות נגד יעדים כרדיים בעיראק. במקביל, ישראל מתמודדת עם מערכת בחירות פנים-ישראלית שבה סוגיית איראן עומדת במרכז השיח, וכן עם עימות מתמשך ברצועת עזה הכולל סיכול מימון איראני לטרור.",
   "fronts": [
    {
     "name": "החזית האיראנית-ישראלית-אמריקאית",
     "status": "פעיל ומתוח"
    },
    {
     "name": "חזית המפרץ ותימן (החות'ים)",
     "status": "פעיל"
    },
    {
     "name": "החזית העיראקית והכורדית",
     "status": "פעיל"
    }
   ],
   "events": [
    {
     "id": "IRAN-10251432-01",
     "title": "תקיפה במל\"ט מתאבד על מחנה האופוזיציה הכրדית באיראן בעיראק",
     "summary": "כוחות האבטחה והתקשורת דיווחו על תקיפת מל\"ט מתאבד נגד מחנה אופוזיציה כרדי איראני בצפון-מזרח ארביל.",
     "axis": "איראן מול שלוחותיה והכוחות באזור",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T05:20:56+00:00",
     "last_update_at": "2026-10-25T06:45:18+00:00",
     "what_is_not_verified": "זהות המפעילים המדויקת מלבד דיווחים על פעילות משמרות המהפכה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_mehr_news_agency_and_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/tehran-strikes-iranian-kurdish-base-iraq-drones-report-says",
       "published_at": "2026-10-25T06:45:18+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_mehr_news_agency_and_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-651",
       "published_at": "2026-10-25T06:33:05+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_mehr_news_agency_and_reuters",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/explosive-laden-drone-attacks-kurdish-opposition-camp",
       "published_at": "2026-10-25T05:20:56+00:00"
      }
     ],
     "places": [
      {
       "name": "ארביל, עיראק",
       "lat": 36.1912,
       "lon": 44.0094
      },
      {
       "name": "באליסאן, עיראק",
       "lat": 36.3965,
       "lon": 44.5485
      }
     ]
    },
    {
     "id": "IRAN-10251432-02",
     "title": "יירוט טילי בליסטיים ומל\"טים מעל ריאד ודרום סעודיה",
     "summary": "הקואליציה בהובלת סעודיה דיווחה על יירוט והשמדת טילים ומל\"טים ששוגרו על ידי החות'ים מתימן לעבר ריאד ואזורים דרומיים.",
     "axis": "החות'ים מול סעודיה והקואליציה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T00:46:40+00:00",
     "last_update_at": "2026-10-25T11:07:28+00:00",
     "what_is_not_verified": "פרטים מלאים על היקף הנזק או הפגיעות בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.iranintl.com/en/202610253322",
       "published_at": "2026-10-25T11:07:28+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-651",
       "published_at": "2026-10-25T06:33:05+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_saudi_led_coalition",
       "url": "https://www.al-monitor.com/originals/2026/10/saudi-says-riyadh-airport-partly-reopens-despite-renewed-houthi-threats",
       "published_at": "2026-10-25T00:46:40+00:00"
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
     "id": "IRAN-10251432-03",
     "title": "אולטימטום מצד מחוז מייסאן בעיראק סביב סגירת מעבר הגבול עם איראן",
     "summary": "יושב ראש מועצת מחוז מייסאן הציב אולטימטום לממשלת עיראק לפתוח את מעבר אל-שיב, והזהיר מפני התנתקות ואי-ציות אזרחי.",
     "axis": "עיראק פנים וקשריה עם איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-21T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T13:47:26+00:00",
     "last_update_at": "2026-10-25T13:47:26+00:00",
     "what_is_not_verified": "תגובת הממשלה המרכזית בבגדאד לאולטימטום.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48919",
       "published_at": "2026-10-25T13:47:26+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-04",
     "title": "כתם נפט בחופי איחוד האמירויות",
     "summary": "כתם נפט ממכלית נצפה בחופי איחוד האמירויות, מה שהוביל את הרשויות לסגור חופים באום אל-קיוין.",
     "axis": "המפרץ ומיצרי הורמוז",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T12:05:16+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T12:05:16+00:00",
     "last_update_at": "2026-10-25T12:05:16+00:00",
     "what_is_not_verified": "מקור הדליפה המדויק והגורם האחראי.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/video/newsfeed/2026/10/25/oil-slick-from-tanker-in-hormuz-strait-washes-up-on-uae-beaches?traffic_source=rss",
       "published_at": "2026-10-25T12:05:16+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-05",
     "title": "דיווח על תוכניות תקיפה חדשות של פנטגון ו-CENTCOM נגד איראן",
     "summary": "גורמים דיווחו כי הפנטגון הכין תוכניות תקיפה חדשות נגד איראן להפעלה אפשרית לאחר בחירות אמצע הכהונה.",
     "axis": "ארה\"ב וישראל מול איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T11:39:41+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T11:39:41+00:00",
     "last_update_at": "2026-10-25T11:39:41+00:00",
     "what_is_not_verified": "האם הנשיא טראמפ יאשר את התוכניות בפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/25/centcom-reportedly-has-plans-for-iran-strikes-will-trump-approve-them?traffic_source=rss",
       "published_at": "2026-10-25T11:39:41+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-06",
     "title": "אזהרת בכירים איראנים מפני פגיעה בדיפלומטים אמריקאים",
     "summary": "בכירים איראנים, בהם בכיר במשמרות המהפכה, מסרו כי חיסול בכירים איראנים הופך אנשי ממשל ודיפלומטים אמריקאים למטרות לגיטימיות.",
     "axis": "איראן מול ארה\"ב וישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T08:20:39+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T08:20:39+00:00",
     "last_update_at": "2026-10-25T08:20:39+00:00",
     "what_is_not_verified": "האם קיימת פעילות מבצעית בפועל להוצאת איומים אלו לפועל.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_lelotsenzura",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/lelotsenzura/94792",
       "published_at": "2026-10-25T08:20:39+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10251432-07",
     "title": "חיסול פעילי חמאס והג'יהאד האיסלאמי בעזה וסיכול מימון מאיראן וטורקיה",
     "summary": "צה\"ל ושב\"כ הודיעו על חיסול מחבלים שעסקו בהעברת מיליוני שקלים ממשטר איראן ומטורקיה לזרוע הצבאית של חמאס, וכן על השמדת מחסן אמל\"ח.",
     "axis": "ישראל מול חמאס והשלוחות האיראניות",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T08:35:30+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T08:35:30+00:00",
     "last_update_at": "2026-10-25T09:09:34+00:00",
     "what_is_not_verified": "לא מאומת מלבד הודעת דובר צה\"ל ושב\"כ.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/by0bghi3fg",
       "published_at": "2026-10-25T09:09:34+00:00"
      },
      {
       "source_id": "src_walla",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.walla.co.il/news/military/383958784",
       "published_at": "2026-10-25T08:49:39+00:00"
      },
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132524",
       "published_at": "2026-10-25T08:43:30+00:00"
      },
      {
       "source_id": "src_tg_idf",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/idf_telegram/25461",
       "published_at": "2026-10-25T08:35:30+00:00"
      }
     ],
     "places": [
      {
       "name": "עיר עזה, עזה",
       "lat": 31.5117,
       "lon": 34.4821
      },
      {
       "name": "נוציראת, עזה",
       "lat": 31.4554,
       "lon": 34.401
      }
     ]
    }
   ],
   "not_verified": [
    "קיומן של תוכניות מבצעיות סופיות של ארה\"ב לתקיפה מיידית באיראן.",
    "היקף הנזק המדויק מכתם הנפט בחופי איחוד האמירויות.",
    "האם הממשלה המרכזית בעיראק תגיב לדרישות מחוז מייסאן בנוגע למעבר הגבול."
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "איראן",
     "declared": [
      "הגנה על ריבונות אלדולה וכוננות עליונה",
      "דרישה לפינוי סנקציות"
     ],
     "inferred": [
      "המשך פיתוח יכולות צבאיות וגרעיניות",
      "הפעלת שלוחות אזוריות כדי להפעיל לחץ על ארה\"ב וישראל"
     ],
     "forecast": [
      "המשך איומים על אנשי ממשל אמריקאים ודיפלומטים",
      "שימור יכולת מיקוח סביב מיצר הורמוז"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "מניעת איום קיומי ואיום גרעיני מאיראן",
      "סיכול תשתיות הטרור והמימון של חמאס והציר השיעי"
     ],
     "inferred": [
      "שמירת אופציה צבאית התקפית בשיתוף ארה\"ב",
      "ניצול חלון הזמנים הנוכחי להסרת איומים"
     ],
     "forecast": [
      "הגברת הלחץ המדיני והביטחוני בהתאם לתוצאות הבחירות",
      "המשך סיכולים ממוקדים נגד צירים פיננסיים של חמאס"
     ]
    },
    {
     "actor": "ארה\"ב",
     "declared": [
      "הגנה על בעלות ברית במפרץ ובזירה",
      "מניעת השגת נשק גרעיני בידי איראן"
     ],
     "inferred": [
      "הכנת חלופות צבאיות למקרה של כישלון דיפלומטי",
      "היערכות להגנה על אנשיה מפני פגיעה מצד שלוחות איראן"
     ],
     "forecast": [
      "המשך הפעלת לחץ כלכלי ודיפלומטי",
      "שקילת תגובות צבאיות בהתאם להתפתחויות בשטח ובחירות"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/25/centcom-reportedly-has-plans-for-iran-strikes-will-trump-approve-them?traffic_source=rss",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/saudi-says-riyadh-airport-partly-reopens-despite-renewed-houthi-threats",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610253322",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/morning-update-651",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132524",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48919",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_idf",
     "url": "https://t.me/idf_telegram/25461",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_tg_lelotsenzura",
     "url": "https://t.me/lelotsenzura/94792",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_walla",
     "url": "https://www.walla.co.il/news/military/383958784",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/by0bghi3fg",
     "accessed_at": "2026-10-25T14:32:55+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T00:40:43+00:00",
  "changes": {
   "IRAN-10251432-01": {
    "kind": "possible",
    "prev": "הצהרות טראמפ על אפשרות לתקיפה באיראן או השגת הסכם",
    "score": 0.467
   },
   "IRAN-10251432-02": {
    "kind": "possible",
    "prev": "אזהרות ואיומים של החות'ים נגד נמל התעופה בריאד",
    "score": 0.633
   },
   "IRAN-10251432-03": {
    "kind": "same",
    "from": "assessment",
    "to": "initial",
    "prev": "דיווחים על טיסות ותקיפות במרחב האווירי של עיראק לעבר איראן",
    "score": 0.65
   },
   "IRAN-10251432-04": {
    "kind": "new"
   },
   "IRAN-10251432-05": {
    "kind": "same",
    "from": "assessment",
    "to": "assessment",
    "prev": "השלמת תוכניות תקיפה בצבא ארצות הברית נגד איראן",
    "score": 0.65
   },
   "IRAN-10251432-06": {
    "kind": "new"
   },
   "IRAN-10251432-07": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-25T1444__ukraine-202610251444.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-25T14:44:21+00:00",
   "window": {
    "from": "2026-10-24T14:44:21+00:00",
    "to": "2026-10-25T14:44:21+00:00"
   },
   "model": {
    "name": "gemini-3.5-flash-lite",
    "run_id": "ukraine-202610251444"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת ביתאת עצימות גבוהה, הכוללת מתקפות רחפנים וטילים הדדיות על תשתיות ומפעלים צבאיים עמוק בשטח רוסיה וברחבי אוקראינה. במקביל, גורמים רוסיים מאותתים על נכונות לחדש מגעים דיפלומטיים ותלת-צדדיים בחודש נובמבר הקרוב. בצדדים השונים נמשכים גם עימותים מדיניים ותקשורתיים בנוגע לאספקת טכנולוגיה ותמיכה צבאית.",
   "fronts": [
    {
     "name": "החזית המזרחית והדרומית",
     "status": "פעיל עם קרבות קשים"
    },
    {
     "name": "מרחב התקיפות האוויריות ועומק רוסיה",
     "status": "פעיל מאוד"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10251444-01",
     "title": "מתקפת טילים ורחפנים באזורים שונים ברוסיה ובשטחי הכיבוש",
     "summary": "רשויות וגורמים דיווחו על מתקפות טילים ורחפנים שפגעו במפעלים ומתקנים שונים ברוסיה, כולל מחוז ליפצק ומחוז אומסק, וכן על הפלת מאות רחפנים.",
     "axis": "מתקפות עומק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T02:37:44+00:00",
     "last_update_at": "2026-10-25T12:32:00+00:00",
     "what_is_not_verified": "היקף הנזקים המלא וזהות כל האמצעים שפגעו במטרות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_exilenova",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059629/",
       "published_at": "2026-10-25T12:32:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_exilenova",
       "url": "https://t.me/alexmehacarmel/48912",
       "published_at": "2026-10-25T11:29:38+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_exilenova",
       "url": "https://tass.com/defense/2207429",
       "published_at": "2026-10-25T07:11:26+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_exilenova",
       "url": "https://tass.com/politics/2207401",
       "published_at": "2026-10-25T04:45:49+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "or_exilenova",
       "url": "https://www.theguardian.com/world/2026/oct/25/ukraine-war-briefing-kyiv-targets-russian-occupied-crimea-as-uk-and-france-conduct-joint-military-exercise",
       "published_at": "2026-10-25T02:37:44+00:00"
      }
     ],
     "places": [
      {
       "name": "יילץ, רוסיה",
       "lat": 52.6151,
       "lon": 38.529
      },
      {
       "name": "אומסק, רוסיה",
       "lat": 54.9914,
       "lon": 73.3715
      }
     ]
    },
    {
     "id": "UKRAINE-10251444-02",
     "title": "מתקפות רוסיות על מטרות באוקראינה",
     "summary": "כוחות רוסיה תקפו באמצעות טילים, פצצות דאייה וכמאה וחמישים רחפנים מטרות שונות באוקראינה, וגרמו לנפגעים ולנזק ברכוש.",
     "axis": "החזית האווירית",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-25T02:37:44+00:00",
     "last_update_at": "2026-10-25T11:37:00+00:00",
     "what_is_not_verified": "פירוט מדויק של כל אתרי הפגיעה והנזקים האסטרטגיים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_4113d7c27c21d5be",
       "url": "https://www.ukrinform.net/rubric-ato/4177987-russian-drone-attack-in-kyiv-region-injures-woman.html",
       "published_at": "2026-10-25T11:37:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_29d7f1112c82a4fb",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059624/",
       "published_at": "2026-10-25T11:23:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_034f999fac225910",
       "url": "https://www.ukrinform.net/rubric-ato/4177961-zelensky-russia-launches-1600-guided-bombs-48-missiles-and-nearly-2300-attack-drones-at-ukraine-in-one-week.html",
       "published_at": "2026-10-25T09:38:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_5009c2f2997736bf",
       "url": "https://kyivindependent.com/russian-attacks-kill-8-injure-51-across-ukraine-over-past-day-as-drone-strikes-residential-building-in-vinnytsia/",
       "published_at": "2026-10-25T08:20:36+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_4113d7c27c21d5be",
       "url": "https://www.theguardian.com/world/2026/oct/25/ukraine-war-briefing-kyiv-targets-russian-occupied-crimea-as-uk-and-france-conduct-joint-military-exercise",
       "published_at": "2026-10-25T02:37:44+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      },
      {
       "name": "סינלניקובו, אוקראינה",
       "lat": 48.3269,
       "lon": 35.5247
      }
     ]
    },
    {
     "id": "UKRAINE-10251444-03",
     "title": "היערכות לחידוש שיחות והצהרות דיפלומטיות",
     "summary": "נציגי הקרמלין הודיעו כי רוסיה מוכנה לחדש שיחות תלת-צדדיות עם אוקראינה וארצות הברית לאחר חג האחדות הלאומית ב-4 בנובמבר.",
     "axis": "הציר הדיפלומטי",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T11:47:00+00:00",
     "last_update_at": "2026-10-25T13:28:00+00:00",
     "what_is_not_verified": "האם אוקראינה וארצות הברית אישרו רשמית את המתווה והמועדים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059632/",
       "published_at": "2026-10-25T13:28:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/moscow-ready-to-resume-trilateral-talks-with-ukraine-us-after-nov-4-kremlin-aide-says/",
       "published_at": "2026-10-25T13:05:29+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059626/",
       "published_at": "2026-10-25T11:47:00+00:00"
      }
     ],
     "places": [
      {
       "name": "מוסקבה, רוסיה",
       "lat": 55.7505,
       "lon": 37.6175
      }
     ]
    },
    {
     "id": "UKRAINE-10251444-04",
     "title": "טענות והגבלות על שימוש ברשת סטארלינק",
     "summary": "אילון מאסק טען שצבא אוקראינה הפר את תנאי השימוש בסטארלינק לצורכי תקיפה, בעוד ממשלת אוקראינה דיווחה שהחיבור נותר יציב.",
     "axis": "טכנולוגיה ותקשורת",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T19:34:12+00:00",
     "last_update_at": "2026-10-25T09:00:00+00:00",
     "what_is_not_verified": "הפרטים הטכניים המדויקים על אופן הגבלת השימוש והיקף הפגיעה בפעילות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_bbc",
       "source_root_id": "fh_051190cf06d9a5ca",
       "url": "https://www.bbc.co.uk/news/articles/cvx28ljp8n4xo?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-25T09:00:00+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_f51122aec14f1b49",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-zelenskyy-military-starlink-satellite-connection-stable-after-restrictions",
       "published_at": "2026-10-24T21:25:58+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_051190cf06d9a5ca",
       "url": "https://t.me/alexmehacarmel/48903",
       "published_at": "2026-10-24T19:34:12+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "נסיבות מותו של מיכאיל מאוואשי נבדקות וטרם הובהרו רשמית",
    "פרטי המיקום המדויקים של מערכות ההגנה סביב מעון ולדאי",
    "היקף הנזק המדויק במפעל אנרגיה ביילץ"
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
     "value": 1.1193,
     "unit": "USD",
     "change_pct": -0.11,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "רוסיה",
     "declared": [
      "המשך המבצע הצבאי באוקראינה",
      "נכונות עקרונית לחידוש שיחות לאחר ה-4 בנובמבר"
     ],
     "inferred": [
      "פגיעה בתשתיות הצבאיות והכלכליות של אוקראינה",
      "חיזוק מערכות ההגנה האווירית סביב אתרים אסטרטגיים ונשיאותיים"
     ],
     "forecast": [
      "הגברת לחץ האש באזורי החזית",
      "המשך ניסיונות לבסס עמדות מיקוח דיפלומטיות לקראת מגעים עתידיים"
     ]
    },
    {
     "actor": "אוקראינה",
     "declared": [
      "הגנה על ריבונות המדינה והמשך לחימה בכוחות הפולשים",
      "שמירה על רציפות תפקודית של תשתיות קריטיות"
     ],
     "inferred": [
      "שימוש במתקפות עומק נגד מתעשיית הביטחון והאנרגיה הרוסית לשם שיבוש הלחימה",
      "הישענות על סיוע טכנולוגי ובינלאומי למרות מגבלות מצד חברות פרטיות"
     ],
     "forecast": [
      "המשך פעילות בלתי פוסקת של רחפנים נגד מטרות בתוך שטחי רוסיה",
      "התמודדות עם קשיים לוגיסטיים וכלכליים כבדים כתוצאה מהמלחמה הממושכת"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cvx28ljp8n4xo?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-zelenskyy-military-starlink-satellite-connection-stable-after-restrictions",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/moscow-ready-to-resume-trilateral-talks-with-ukraine-us-after-nov-4-kremlin-aide-says/",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/25/8059626/",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/politics/2207401",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48903",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-ato/4177961-zelensky-russia-launches-1600-guided-bombs-48-missiles-and-nearly-2300-attack-drones-at-ukraine-in-one-week.html",
     "accessed_at": "2026-10-25T14:44:21+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-25T00:43:27+00:00",
  "changes": {
   "UKRAINE-10251444-01": {
    "kind": "possible",
    "prev": "תקיפות כטב\"מים אוקראיניות בעומק שטח רוסיה ובמחוז אומסק בסיביר",
    "score": 0.633
   },
   "UKRAINE-10251444-02": {
    "kind": "possible",
    "prev": "מתקפות כטב\"מים וטילים רוסיות על מחוז דניפרופטרובסק",
    "score": 0.467
   },
   "UKRAINE-10251444-03": {
    "kind": "new"
   },
   "UKRAINE-10251444-04": {
    "kind": "up",
    "from": "shared_root",
    "to": "verified",
    "prev": "מחלוקת והגבלות על שירות סטארלינק בצבא אוקראינה",
    "score": 1.0
   }
  }
 },
 "north": {
  "draft": "drafts/north/2026-10-25T0342__north-202610250342.json",
  "analysis": {
   "contract_version": 1,
   "arena": "north",
   "generated_at": "2026-10-25T03:42:23+00:00",
   "window": {
    "from": "2026-10-24T03:42:23+00:00",
    "to": "2026-10-25T03:42:23+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "north-202610250342"
   },
   "summary": "הגזרה הצפונית מתאפיינת בפעילות אש ישראלית מתמשכת בדרום לבנון לצד התבססות בשטח ואזהרות ביטחוניות חריגות בביירות, כאשר חיזבאללה מאותת על ניסיון להימנע מהרחבת העימות. בסוריה נרשמת אי-יציבות ביטחונית ועדתית גוברת מול הדרוזים, הנוצרים והכורדים, בד בבד עם חסימות צירים מרכזיים בדרום המדינה ואיומים מצד גורמים המקורבים לממשל בדמשק לפעול נגד ישראל במרחב הגולן.",
   "fronts": [
    {
     "name": "דרום לבנון - גבול ישראל",
     "status": "חילופי אש ותקיפות ישראליות מהאוויר ובירי ארטילרי, לצד טענות על פעולות הנדסיות והקמת מנחתי מסוקים של צה\"ל."
    },
    {
     "name": "דרום סוריה (סווידא, דרעא וקוניטרה)",
     "status": "חיכוך פנימי מול חמושים דרוזים החוסמים צירים ראשיים לעבר דמשק, לצד התבטאויות מאיימות נגד נוכחות ישראל בגולן."
    },
    {
     "name": "הזירה הפנים-סורית (מרכז וצפון-מזרח סוריה)",
     "status": "חיכוכים על רקע עדתי בין תומכי הממשל החדש למיעוטים נוצריים, כורדיים ועלוויים המלווים בהפגנות והתנכלויות לרכוש."
    }
   ],
   "events": [
    {
     "id": "NORTH-10250342-01",
     "title": "תקיפות ארטילריה וירי מהאוויר של צה\"ל בדרום לבנון",
     "summary": "נרשמה פעילות צבאית שכללה הפגזה ארטילרית לעבר אזור אל-מנצורי בנפת צור ותקיפה אווירית באזור ואדי אל-חג'יר בדרום לבנון.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T17:39:22+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T17:39:22+00:00",
     "last_update_at": "2026-10-24T19:31:20+00:00",
     "what_is_not_verified": "אין אימות עצמאי או הודעה רשמית של צה\"ל על תוצאות התקיפות או מטרותיהן המדויקות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_961bf1c55000604d",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-artillery-shells-town-southern-lebanons-tyre-district",
       "published_at": "2026-10-24T19:31:20+00:00"
      },
      {
       "source_id": "src_almanar",
       "source_root_id": "fh_961bf1c55000604d",
       "url": "https://english.almanar.com.lb/article/142367/",
       "published_at": "2026-10-24T17:39:22+00:00"
      }
     ],
     "places": [
      {
       "name": "אל-מנצורי, לבנון",
       "lat": 33.1737,
       "lon": 35.2111
      },
      {
       "name": "ואדי אל-חג'יר, לבנון",
       "lat": 33.2589,
       "lon": 35.459
      }
     ]
    },
    {
     "id": "NORTH-10250342-02",
     "title": "דיווח על הקמת מנחת מסוקים ישראלי בדרום לבנון",
     "summary": "בכלי תקשורת בלבנון נטען כי כוחות צה\"ל הכשירו מנחת מסוקים באזור אלפקעאני, מדרום לכפר יחמר א-שקיף לעבר א-טייבה בסמוך לבופור.",
     "axis": "ישראל - לבנון",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T08:32:26+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T08:32:26+00:00",
     "last_update_at": "2026-10-24T08:32:26+00:00",
     "what_is_not_verified": "הטענה מבוססת על מקורות תקשורת מקומיים בלבנון ללא אישור ישראלי רשמי או תיעוד מאומת בשטח.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132456",
       "published_at": "2026-10-24T08:32:26+00:00"
      }
     ],
     "places": [
      {
       "name": "יחמר א-שקיף, לבנון",
       "lat": 33.4868,
       "lon": 35.6729
      },
      {
       "name": "א-טייבה, לבנון",
       "lat": 33.9579,
       "lon": 36.1663
      }
     ]
    },
    {
     "id": "NORTH-10250342-03",
     "title": "חסימת ציר סווידא-דמשק ופעילות חמושים בדרום סוריה",
     "summary": "חמושים ממיליציית 'המשמר הלאומי' הדרוזית הנאמנה לחכמת אל-היג'רי חסמו את התנועה במחסום אום א-זיתון ושיבשו את הנסיעה בכביש הראשי המחבר בין סווידא לדמשק, לצד ניסיונות תקיפה וחדירה באזור הכפרי המערבי של המחוז.",
     "axis": "דרום סוריה - מתחים פנימיים וגבול ישראל",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:53:21+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T14:53:21+00:00",
     "last_update_at": "2026-10-24T14:53:21+00:00",
     "what_is_not_verified": "היקף התיאום הנטען בין המיליציה הדרוזית לבין צה\"ל בדרום סוריה נשען על הערכות פרשנים בלבד.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.newarab.com/news/hijris-national-guard-militia-closes-suweida-damascus-highway",
       "published_at": "2026-10-24T14:53:21+00:00"
      }
     ],
     "places": [
      {
       "name": "א-סווידא, סוריה",
       "lat": 32.7094,
       "lon": 36.5687
      },
      {
       "name": "דמשק, סוריה",
       "lat": 33.5131,
       "lon": 36.3096
      }
     ]
    },
    {
     "id": "NORTH-10250342-04",
     "title": "איומים מסוריה כלפי ישראל סביב שטחי הגולן, קוניטרה ודרעא",
     "summary": "עיתונאי סורי המקורב לנשיא אחמד א-שרע השמיע התבטאויות מאיימות נגד ישראל בעקבות הפגנות בסוריה, והצהיר כי העם הסורי יתקומם ולא יוותר על שטחים בגולן, בקוניטרה ובדרעא חרף היתרון הטכנולוגי הישראלי.",
     "axis": "סוריה - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T10:19:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T10:19:03+00:00",
     "last_update_at": "2026-10-24T10:19:03+00:00",
     "what_is_not_verified": "לא ברור אם דברי העיתונאי מבטאים מדיניות רשמית מוצהרת של הנהגת סוריה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_abualiexpress",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/abualiexpress/132467",
       "published_at": "2026-10-24T10:19:03+00:00"
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
     "id": "NORTH-10250342-05",
     "title": "דיווח על העברת מסר מחיזבאללה בדבר הימנעות מהתערבות במלחמה חדשה",
     "summary": "לפי דיווח עיתונאי, ארגון חיזבאללה העביר מסר כי לא יתערב בעימות צבאי עתידי אם יפרוץ מחדש בין ארצות הברית או ישראל לבין איראן, במקביל לאמירה איראנית לפיה אין לטהראן צורך בהתערבותו.",
     "axis": "חיזבאללה - איראן - ישראל",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:05:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:05:45+00:00",
     "last_update_at": "2026-10-24T14:05:45+00:00",
     "what_is_not_verified": "העברת המסר מבוססת על דיווח בעיתון א-שרק אל-אווסט ואינה מגובה בהודעה רשמית של חיזבאללה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
       "published_at": "2026-10-24T14:05:45+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "NORTH-10250342-06",
     "title": "אזהרת ביטחון של שגרירות ארצות הברית בביירות לאזרחיה",
     "summary": "נציגות ארצות הברית בלבנון פרסמה הנחיה חריגה הקוראת לתפוס מחסה מפני פציעות, להתרחק מחלונות ומדלתות זכוכית ולהחזיק מכשירי טלפון טעונים.",
     "axis": "לבנון - ביטחון פנים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T17:49:31+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T17:49:31+00:00",
     "last_update_at": "2026-10-24T17:49:31+00:00",
     "what_is_not_verified": "הסיבה המיידית שהובילה להוצאת ההתרעה אינה מפורטת בכתבה.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380783",
       "published_at": "2026-10-24T17:49:31+00:00"
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
     "id": "NORTH-10250342-07",
     "title": "הסלמת אלימות עדתית ופגיעה באוכלוסיות מיעוטים ברחבי סוריה",
     "summary": "השלטון החדש בסוריה מתמודד עם מתחים עדתיים חריפים, הכוללים מהומות והשחתת רכוש של נוצרים בעיירה א-סוקילבייה שבמחוז חמה, הפגנות נגד מוסדות כורדיים באזורי אל-חסכה וא-רקה, וחששות בקרב עלווים ודרוזים מפני רדיפה.",
     "axis": "סוריה - מתחים עדתיים ופנים-מדינתיים",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:22:24+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T14:22:24+00:00",
     "last_update_at": "2026-10-24T14:22:24+00:00",
     "what_is_not_verified": "מידת המעורבות הישירה של גורמי שלטון מרכזיים בתקריות האלימות המקומיות.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_newarab",
       "source_root_id": "or_the_new_arab",
       "url": "https://www.newarab.com/analysis/protecting-minorities-test-syrias-new-political-order",
       "published_at": "2026-10-24T14:22:24+00:00"
      }
     ],
     "places": [
      {
       "name": "א-רקה, סוריה",
       "lat": 35.9497,
       "lon": 39.0089
      }
     ]
    }
   ],
   "not_verified": [
    "הדיווח הלבנוני על כך שצה\"ל הכשיר מנחת מסוקים חדש בדרום הכפר יחמר א-שקיף.",
    "הטענה בעיתון א-שרק אל-אווסט לפיה חיזבאללה התחייב רשמית שלא להתערב במלחמה עתידית.",
    "הערכות פרשנים לפיהן פעילות המיליציה הדרוזית בסווידא מתואמת עם צבא ישראל."
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
     "value": 3.1215,
     "unit": "ILS",
     "change_pct": 0.44,
     "source_id": "src_ecb",
     "as_of": "2026-10-23T15:00:00+00:00"
    }
   ],
   "strategic_goals": [
    {
     "actor": "ישראל",
     "declared": [
      "הגנה על ביטחון הגבול ומניעת התעצמות איומים מלבנון ומסוריה."
     ],
     "inferred": [
      "המשך פגיעה במטרות תשתית ופעילי טרור בדרום לבנון ויצירת עומק ביטחוני לאורך הגבולות הצפוניים.",
      "ניצול פיצול הכוחות והחולשה השלטונית בדרום סוריה לשיבוש התבססות עוינת סמוך לרמת הגולן."
     ],
     "forecast": [
      "המשך ירי מדויק ותקיפות נקודתיות בדרום לבנון תוך שימור מרחב פעולה חופשי באוויר ובקרקע."
     ]
    },
    {
     "actor": "חיזבאללה",
     "declared": [],
     "inferred": [
      "צמצום החשיפה לעימות כולל חדש במטרה לשקם יכולות לאחר פגיעות קשות שספג הארגון.",
      "שמירה על פרופיל פעולה מוגבל אל מול לחצים מטהראן ומהזירה הלבנונית הפנימית."
     ],
     "forecast": [
      "הימנעות מיוזמה התקפית רחבה כדי לא להיגרר לעימות אזורי הרסני נוסף."
     ]
    },
    {
     "actor": "השלטון החדש בסוריה (משטר אחמד א-שרע)",
     "declared": [
      "אי-ויתור על שטחי הגולן, קוניטרה ודרעא ועמידה מול תקיפות ישראליות."
     ],
     "inferred": [
      "ניסיון להפגין ריבונות ורטוריקה לאומית כדי להרגיע את הציבור הסורי לנוכח אובדן שליטה פנימי.",
      "בלימת התפשטות מוקדי כוח עצמאיים של מיעוטים בדרום ובצפון-מזרח המדינה."
     ],
     "forecast": [
      "המשך קושי באכיפת שליטה אפקטיבית במחוזות הדרומיים לצד החרפת החיכוך המילולי והפוליטי מול ישראל."
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_almanar",
     "url": "https://english.almanar.com.lb/article/142367/",
     "accessed_at": "2026-10-25T03:42:23+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380783",
     "accessed_at": "2026-10-25T03:42:23+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israeli-artillery-shells-town-southern-lebanons-tyre-district",
     "accessed_at": "2026-10-25T03:42:23+00:00"
    },
    {
     "source_id": "src_newarab",
     "url": "https://www.newarab.com/analysis/protecting-minorities-test-syrias-new-political-order",
     "accessed_at": "2026-10-25T03:42:23+00:00"
    },
    {
     "source_id": "src_tg_abualiexpress",
     "url": "https://t.me/abualiexpress/132467",
     "accessed_at": "2026-10-25T03:42:23+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
     "accessed_at": "2026-10-25T03:42:23+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-24T14:10:50+00:00",
  "changes": {
   "NORTH-10250342-01": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "פעילות צבאית ועבודות הנדסיות של כוחות צה\"ל בדרום לבנון",
    "score": 0.65
   },
   "NORTH-10250342-02": {
    "kind": "new"
   },
   "NORTH-10250342-03": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הסלמה ומתיחות ביטחונית במחוז א-סווידאא שבדרום סוריה",
    "score": 0.817
   },
   "NORTH-10250342-04": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "הפגנות ומחאות ברחבי סוריה נגד פעילות כוחות צה\"ל בדרום המדינה",
    "score": 1.0
   },
   "NORTH-10250342-05": {
    "kind": "same",
    "from": "initial",
    "to": "initial",
    "prev": "דיווח על העברת מסר מחזבאללה בדבר הימנעות מהתערבות בעימות בין ישראל לאיראן",
    "score": 1.0
   },
   "NORTH-10250342-06": {
    "kind": "possible",
    "prev": "טיסות איסוף מודיעין באמצעות כטב\"מים מעל ביירות ופרבריה",
    "score": 0.633
   },
   "NORTH-10250342-07": {
    "kind": "new"
   }
  }
 }
};
