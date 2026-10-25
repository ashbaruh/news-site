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
  "draft": "drafts/iran/2026-10-25T0040__iran-202610250040.json",
  "analysis": {
   "contract_version": 1,
   "arena": "iran",
   "generated_at": "2026-10-25T00:40:43+00:00",
   "window": {
    "from": "2026-10-24T00:40:43+00:00",
    "to": "2026-10-25T00:40:43+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "iran-202610250040"
   },
   "summary": "העימות בין איראן לבין ארצות הברית וישראל עומד בפני הסלמה אפשרית על רקע איומי תקיפה מיידיים מצד וושינגטון לצד שיח מקביל על חידוש המשא ומתן. במקביל, שלוחותיה של איראן, בדגש על החות'ים בתימן, מגבירות את האיומים והפגיעות ביעדים אזוריים ובמתקני תחבורה ותעופה במפרץ, דבר שהוביל לצמצום כוח אדם ואזהרות מסע אמריקניות. בחזית הישראלית ניכרות היערכות לפעולות באיראן והאשמות הדדיות בנוגע לחידוש פרויקט הגרעין האיראני.",
   "fronts": [
    {
     "name": "ציר ארה\"ב - איראן",
     "status": "מתיחות צבאית גבוהה ואיומים בתקיפות לצד ניסיונות תיווך ומגעים להסכם"
    },
    {
     "name": "ציר ישראל - איראן",
     "status": "כוננות ביטחונית, דיווחים על טיסות מבצעיות במרחב והצהרות על איום הגרעין"
    },
    {
     "name": "ציר החות'ים - סעודיה וארה\"ב",
     "status": "התקפות טילים ואיומים ישירים על שדות תעופה ומתקני נפט בסעודיה"
    },
    {
     "name": "החזית העיראקית",
     "status": "חשש מזליגת המלחמה ושימוש במרחב האווירי לתקיפות נגד איראן ומיליציות"
    }
   ],
   "events": [
    {
     "id": "IRAN-10250040-01",
     "title": "הצהרות טראמפ על אפשרות לתקיפה באיראן או השגת הסכם",
     "summary": "נשיא ארצות הברית דונלד טראמפ הצהיר כי וושינגטון שוקלת תקיפה אפשרית נגד איראן בטווח הזמן המיידי, או לחלופין הגעה להסכם משמעותי עמה, במטרה למנוע ממנה לצמיתות פיתוח נשק גרעיני.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T15:21:57+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T15:21:57+00:00",
     "last_update_at": "2026-10-25T00:00:00+00:00",
     "what_is_not_verified": "האם אכן תתבצע תקיפה צבאית או שיושג הסכם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/liveblog/2026/10/25/iran-war-live-trump-hints-at-possible-sunday-iran-attack-or-deal-reached?traffic_source=rss",
       "published_at": "2026-10-25T00:00:00+00:00"
      },
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/trump-says-could-strike-iran-tomorrow-or-strike-beautiful-deal",
       "published_at": "2026-10-24T23:13:48+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/ry9t11rq2gx",
       "published_at": "2026-10-24T15:21:57+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-02",
     "title": "השלמת תוכניות תקיפה בצבא ארצות הברית נגד איראן",
     "summary": "פורסם כי צבא ארצות הברית השלים את תוכניותיו לביצוע תקיפות נוספות באיראן וממתין לקבלת אישור מהבית הלבן.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:05:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:05:45+00:00",
     "last_update_at": "2026-10-24T21:31:56+00:00",
     "what_is_not_verified": "האם התוכניות יאושרו ומתי ייושמו",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_maariv",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.maariv.co.il/breaking-news/article-1380834",
       "published_at": "2026-10-24T21:31:56+00:00"
      },
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
     "id": "IRAN-10250040-03",
     "title": "האשמות מצד נשיא איראן וקריאה לחידוש המשא ומתן",
     "summary": "נשיא איראן מסעוד פזשכיאן הטיל את האשמה בכישלון ההסכם הזמני על ארצות הברית, אך קרא לחדש את המאמצים להשלמתו, תוך אזהרה איראנית מתגובה חמורה אם יותקפו שוב.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T13:46:37+00:00",
     "last_update_at": "2026-10-24T21:30:11+00:00",
     "what_is_not_verified": "האם הצדדים ישובו לשיחות משא ומתן בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_aljazeera",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.aljazeera.com/news/2026/10/24/iran-blames-us-for-deal-failure-urges-new-try-amid-fear-of-new-attacks?traffic_source=rss",
       "published_at": "2026-10-24T21:30:11+00:00"
      },
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
       "published_at": "2026-10-24T14:05:45+00:00"
      },
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/irans-pezeshkian-blames-us-interim-deal-failure-urges-new-try",
       "published_at": "2026-10-24T13:46:37+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-04",
     "title": "התרעת המודיעין האמריקני מפני מזימות איראניות נגד אנשיו",
     "summary": "מנהל המודיעין הלאומי של ארצות הברית פרסם מזכר שלפיו איראן הגבירה את מאמציה לפגוע באנשי סגל ובאזרחים אמריקנים והתוכניות הגיעו לשלבים מתקדמים, במקביל לצמצום הצוותים הדיפלומטיים בסעודיה.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T07:36:02+00:00",
     "last_update_at": "2026-10-24T16:46:39+00:00",
     "what_is_not_verified": "פרטי המזימות המדויקים ומידת ישימותן המיידית",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_almonitor",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.al-monitor.com/originals/2026/10/iran-has-ramped-efforts-target-us-personnel-intelligence-memo-warns",
       "published_at": "2026-10-24T16:46:39+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cmn8w1ddg2x9o?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-24T07:36:02+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-05",
     "title": "עדכון אזהרות מסע אמריקניות במזרח התיכון עקב איומי החות'ים",
     "summary": "מחלקת המדינה האמריקנית עדכנה את אזהרות המסע עבור מספר מדינות במזרח התיכון בעקבות מה שהוגדר כאיום בתוקפנות אזורית גוברת מצד החות'ים הנתמכים בידי איראן.",
     "axis": "ארה\"ב-חות'ים",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T15:36:42+00:00",
     "last_update_at": "2026-10-24T15:36:42+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_dec32b4d756f9049",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/us-updates-gulf-middle-east-travel-advisories-over-threat-houthi",
       "published_at": "2026-10-24T15:36:42+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-06",
     "title": "אזהרות ואיומים של החות'ים נגד נמל התעופה בריאד",
     "summary": "דובר תנועת החות'ים חידש את האזהרות מפני שימוש בנמל התעופה הבינלאומי בריאד והגדיר אותו יעד צבאי, לצד דיווחים על תקיפות נגד מתקני נפט ושדות תעופה.",
     "axis": "שלוחות איראן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T17:50:25+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T17:50:25+00:00",
     "last_update_at": "2026-10-24T23:05:18+00:00",
     "what_is_not_verified": "מידת הפגיעה בפועל בשדות התעופה ובמתקני הנפט",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/yemens-houthis-renew-warning-against-using-riyadh-airport",
       "published_at": "2026-10-24T23:05:18+00:00"
      },
      {
       "source_id": "src_france24",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
       "published_at": "2026-10-24T17:50:25+00:00"
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
     "id": "IRAN-10250040-07",
     "title": "הכחשת החות'ים בדבר שיגור טילים לעבר מכה ומדינה",
     "summary": "החות'ים הכחישו דיווחים סעודיים על כך ששיגרו טילים לעבר הערים מכה ומדינה, וטענו כי פעולותיהם מתמקדות אך ורק במתקני נפט ובבסיסים צבאיים.",
     "axis": "שלוחות איראן-סעודיה",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T18:44:03+00:00",
     "last_update_at": "2026-10-24T18:44:03+00:00",
     "what_is_not_verified": "האם שוגרו טילים לעבר הערים הקדושות כפי שטענה סעודיה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/houthis-deny-report-they-attacked-mecca-and-medina",
       "published_at": "2026-10-24T18:44:03+00:00"
      }
     ],
     "places": [
      {
       "name": "מכה, סעודיה",
       "lat": 21.4208,
       "lon": 39.8269
      },
      {
       "name": "מדינה, סעודיה",
       "lat": 24.4712,
       "lon": 39.6111
      }
     ]
    },
    {
     "id": "IRAN-10250040-08",
     "title": "דיווחים על טיסות ותקיפות במרחב האווירי של עיראק לעבר איראן",
     "summary": "מחויבותה של בגדאד להישאר מחוץ לעימות נבחנת לנוכח דיווחים על גיחות מטוסים ישראליים דרך המרחב האווירי העיראקי לעבר איראן, תקיפות על מחסני מיליציות ותקיפות כטב\"מים על בסיסי אופוזיציה כורדית.",
     "axis": "ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-25T00:05:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-25T00:05:00+00:00",
     "last_update_at": "2026-10-25T00:05:00+00:00",
     "what_is_not_verified": "אימות רשמי של הטיסות והתקיפות הישראליות בשטח עיראק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_iranintl",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.iranintl.com/en/202610242914",
       "published_at": "2026-10-25T00:05:00+00:00"
      }
     ],
     "places": [
      {
       "name": "בגדאד, עיראק",
       "lat": 33.3062,
       "lon": 44.3872
      }
     ]
    },
    {
     "id": "IRAN-10250040-09",
     "title": "פגישה בין ראש הרשות השופטת באיראן למנהיג העליון מוג'תבא ח'אמנאי",
     "summary": "הרשות השופטת באיראן דיווחה על פגישה נדירה של העומד בראשה עם המנהיג העליון מוג'תבא ח'אמנאי, שבה דנו בין היתר בפיצויים בגין נזקים שנגרמו מהתקיפות של ארצות הברית וישראל שבהן נהרג אביו.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T18:28:59+00:00",
     "last_update_at": "2026-10-24T18:28:59+00:00",
     "what_is_not_verified": "האם המנהיג מוג'תבא אכן נראה או קיים את הפגישה בפועל שכן טרם הופיע בציבור",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_mee",
       "source_root_id": "fh_23e46287383b5b88",
       "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-judiciary-says-chief-holds-rare-meeting-supreme-leader",
       "published_at": "2026-10-24T18:28:59+00:00"
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
     "id": "IRAN-10250040-10",
     "title": "הפסקת חשמל באי קיש באיראן",
     "summary": "התרחשה הפסקת חשמל באי קיש שבאיראן.",
     "axis": "ישראל-איראן",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T23:32:18+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T23:32:18+00:00",
     "last_update_at": "2026-10-24T23:32:18+00:00",
     "what_is_not_verified": "הסיבה להפסקת החשמל והאם קשורה לפעילות צבאית או חבלה",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48906",
       "published_at": "2026-10-24T23:32:18+00:00"
      }
     ],
     "places": [
      {
       "name": "האי קיש, איראן",
       "lat": 26.5351,
       "lon": 53.972
      }
     ]
    },
    {
     "id": "IRAN-10250040-11",
     "title": "הצהרות נתניהו על חידוש תוכנית הגרעין האיראנית",
     "summary": "ראש ממשלת ישראל בנימין נתניהו טען בסרטון בחירות כי איראן חידשה את תוכנית הגרעין שלה ומבקשת להשמיד את ישראל בתוך זמן קצר, טענה שנדחתה בידי יריבו הפוליטי כשימוש ביטחוני לצורכי קמפיין.",
     "axis": "ישראל-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T19:33:03+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T19:33:03+00:00",
     "last_update_at": "2026-10-24T19:33:03+00:00",
     "what_is_not_verified": "האם תוכנית הגרעין אכן חודשה ומצב התקדמותה המדויק",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ynet",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ynet.co.il/news/elections2026/article/bkjwk8qhfx",
       "published_at": "2026-10-24T19:33:03+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "IRAN-10250040-12",
     "title": "דיווח על אי-התערבות חיזבאללה בלחימה נוספת בין ישראל לאיראן",
     "summary": "פורסם כי חיזבאללה העביר מסר שלא יתערב אם תפרוץ שוב מלחמה, ובמקביל הודיע גורם במשרד החוץ האיראני כי אין לטהראן צורך בהתערבות הארגון.",
     "axis": "ישראל-איראן",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T14:05:45+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:05:45+00:00",
     "last_update_at": "2026-10-24T14:05:45+00:00",
     "what_is_not_verified": "נכונות הדיווח על העברת המסר מחיזבאללה ומקורותיו",
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
     "id": "IRAN-10250040-13",
     "title": "התבטאות דובר משמרות המהפכה על מעמדה של איראן",
     "summary": "דובר משמרות המהפכה הצהיר כי בעימות סופי איראן תהפוך למעצמת-העל הבלתי מעורערת של העולם.",
     "axis": "ארה\"ב-איראן",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T12:26:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T12:26:00+00:00",
     "last_update_at": "2026-10-24T12:26:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48886",
       "published_at": "2026-10-24T12:26:00+00:00"
      }
     ],
     "places": []
    }
   ],
   "not_verified": [
    "דיווחים על טיסות של מטוסי קרב ישראליים לעבר איראן דרך המרחב האווירי העיראקי",
    "דיווחים על תקיפות נגד מחסני מערכות הגנה מתוצרת סין של מיליציות בעיראק",
    "הטענה הסעודית על יירוט טילי חות'ים ששוגרו לעבר מכה ומדינה",
    "טענות על כוונת חיזבאללה שלא להתערב במקרה של חידוש הלחימה",
    "הטענה של נתניהו בדבר חידוש מלא של תוכנית הגרעין האיראנית בתוך זמן קצר",
    "הסיבה המדויקת להפסקת החשמל באי קיש באיראן"
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
     "actor": "ארצות הברית",
     "declared": [
      "מניעה קבועה של פיתוח נשק גרעיני בידי איראן",
      "הגעה להסכם ארוך טווח שיבטיח את עצירת הגרעין"
     ],
     "inferred": [
      "הפעלת לחץ צבאי וסנקציות כלכליות לכפיית ויתורים על טהראן",
      "הגנה על כוחות ונציגויות במפרץ מפני תקיפות שלוחות איראן"
     ],
     "forecast": [
      "המשך איומים בפעולה צבאית לצד ניסיון למצות מגעים דיפלומטיים",
      "תגובה ממוקדת אם ייפגעו חיילים או אזרחים אמריקנים באזור"
     ]
    },
    {
     "actor": "איראן",
     "declared": [
      "חידוש המשא ומתן להשלמת הסכם",
      "תגובה חריפה בעוצמה גבוהה לכל תקיפה צבאית, כולל מוגבלת",
      "מיצוי זכויות ופיצויים על נזקי התקיפות מצד ישראל וארצות הברית"
     ],
     "inferred": [
      "שמירה על שרידות המשטר ושיקום התשתיות לאחר הפגיעות הקודמות",
      "הפעלת לחץ אזורי באמצעות שלוחות להרתעת יריביה"
     ],
     "forecast": [
      "המשך איתותים על מוכנות לדיפלומטיה תוך איומים בתגובה צבאית קשה",
      "הגברת פעילות א-סימטרית באמצעות גורמים בעלי ברית במרחב"
     ]
    },
    {
     "actor": "ישראל",
     "declared": [
      "סיכול חידוש תוכנית הגרעין האיראנית ומניעת השמדת ישראל"
     ],
     "inferred": [
      "הכנת תשתיות מבצעיות לתקיפה צבאית נרחבת באיראן",
      "הפעלת לחץ מקסימלי במטרה לערער את הנהגת הרפובליקה האסלאמית"
     ],
     "forecast": [
      "המשך פעילות איסוף וטיסות מבצעיות במרחב האזורי",
      "תיאום מהלכים צבאיים הדוק מול הממשל האמריקני"
     ]
    },
    {
     "actor": "החות'ים (שלוחי איראן בתימן)",
     "declared": [
      "הגדרת נמל התעופה בריאד ומתקני נפט סעודיים כמטרות צבאיות לפגיעה"
     ],
     "inferred": [
      "שיבוש התחבורה והכלכלה במפרץ במטרה ללחוץ על סעודיה וארצות הברית",
      "הפגנת נאמנות לציר האיראני כחלק ממאמץ ההרתעה האזורי"
     ],
     "forecast": [
      "המשך שיגורי טילים וכטב\"מים לעבר יעדים אסטרטגיים בסעודיה"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_aljazeera",
     "url": "https://www.aljazeera.com/news/2026/10/24/iran-blames-us-for-deal-failure-urges-new-try-amid-fear-of-new-attacks?traffic_source=rss",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_almonitor",
     "url": "https://www.al-monitor.com/originals/2026/10/iran-has-ramped-efforts-target-us-personnel-intelligence-memo-warns",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cmn8w1ddg2x9o?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_france24",
     "url": "https://www.france24.com/en/middle-east/20261024-yemen-s-houthi-rebels-claim-new-attacks-on-oil-facilities-and-airports-across-saudi-arabia",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_iranintl",
     "url": "https://www.iranintl.com/en/202610242914",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_maariv",
     "url": "https://www.maariv.co.il/breaking-news/article-1380834",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_mee",
     "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iran-judiciary-says-chief-holds-rare-meeting-supreme-leader",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48886",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    },
    {
     "source_id": "src_ynet",
     "url": "https://www.ynet.co.il/news/article/r1qzdvqhfe",
     "accessed_at": "2026-10-25T00:40:43+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-24T04:57:57+00:00",
  "changes": {
   "IRAN-10250040-01": {
    "kind": "new"
   },
   "IRAN-10250040-02": {
    "kind": "new"
   },
   "IRAN-10250040-03": {
    "kind": "new"
   },
   "IRAN-10250040-04": {
    "kind": "new"
   },
   "IRAN-10250040-05": {
    "kind": "new"
   },
   "IRAN-10250040-06": {
    "kind": "same",
    "from": "initial",
    "to": "shared_root",
    "prev": "יירוט טיל בליסטי ששוגר על ידי החות'ים לעבר ריאד",
    "score": 0.817
   },
   "IRAN-10250040-07": {
    "kind": "new"
   },
   "IRAN-10250040-08": {
    "kind": "new"
   },
   "IRAN-10250040-09": {
    "kind": "same",
    "from": "shared_root",
    "to": "initial",
    "prev": "תגובת יועץ המנהיג העליון באיראן לאיומי ארה\"ב וישראל",
    "score": 1.0
   },
   "IRAN-10250040-10": {
    "kind": "new"
   },
   "IRAN-10250040-11": {
    "kind": "possible",
    "prev": "קריאת סבא\"א לחידוש הפיקוח על מתקני הגרעין באיראן",
    "score": 0.467
   },
   "IRAN-10250040-12": {
    "kind": "possible",
    "prev": "הצהרת נשיא ארה\"ב על אפשרות לפעולה צבאית נוספת נגד איראן",
    "score": 0.467
   },
   "IRAN-10250040-13": {
    "kind": "new"
   }
  }
 },
 "ukraine": {
  "draft": "drafts/ukraine/2026-10-25T0043__ukraine-202610250043.json",
  "analysis": {
   "contract_version": 1,
   "arena": "ukraine",
   "generated_at": "2026-10-25T00:43:27+00:00",
   "window": {
    "from": "2026-10-24T00:43:27+00:00",
    "to": "2026-10-25T00:43:27+00:00"
   },
   "model": {
    "name": "gemini-3.8-flash",
    "run_id": "ukraine-202610250043"
   },
   "summary": "הלחימה בין רוסיה לאוקראינה נמשכת באמצעות מהלומות כטב\"מים הדדיות עמוקות, הכוללות פגיעות במתקנים כימיים בסיביר ופגיעות רוסיות בערים אוקראיניות כמו חרקוב ודניפרופטרובסק. במקביל נרשמות הבנות נקודתיות להפוגה הומניטרית בעיר אולשקי, לצד מתיחות סביב שירותי הלוויין הצבאיים ומגעים עקיפים בנושאי סנקציות ואנרגיה.",
   "fronts": [
    {
     "name": "עומק שטח רוסיה",
     "status": "תקיפות כטב\"מים אוקראיניות על מפעלי תעשייה באומסק ובטוליאטי"
    },
    {
     "name": "גבול צפון-מזרח (בלגורוד ובריאנסק)",
     "status": "חילופי אש ותקיפות כטב\"מים מתמשכות על מבנים ותשתיות"
    },
    {
     "name": "מזרח אוקראינה (דונייצק וחרקוב)",
     "status": "תקיפות אוויריות ופגיעות כטב\"מים במבנים אזרחיים ומוסדות"
    },
    {
     "name": "דרום אוקראינה (אולשקי וחרסון)",
     "status": "הסכמה על הפוגה לצורך פינוי וסיוע הומניטרי"
    }
   ],
   "events": [
    {
     "id": "UKRAINE-10250043-01",
     "title": "תקיפות כטב\"מים אוקראיניות בעומק שטח רוסיה ובמחוז אומסק בסיביר",
     "summary": "כלי טיס בלתי מאוישים אוקראיניים פגעו במפעל הכימי אומסקי קאוצ'וק ובמחסן באומסק שבסיביר במרחק של כאלפיים וחמש מאות קילומטרים מהגבול, וגרמו לשריפות במתחם הייצור.",
     "axis": "עומק שטח רוסיה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:33:00+00:00",
     "last_update_at": "2026-10-24T16:48:06+00:00",
     "what_is_not_verified": "מידת הנזק המדויקת והטענה להשמדת מחסן ומפעל כימי במלואם",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukrainian-forces-reportedly-strike-russian-targets-2-500-kilometers-from-border/",
       "published_at": "2026-10-24T16:48:06+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.ukrinform.net/rubric-ato/4177846-drones-attack-industrial-hub-in-russias-omsk-social-media.html",
       "published_at": "2026-10-24T16:07:00+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48892",
       "published_at": "2026-10-24T15:33:45+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48889",
       "published_at": "2026-10-24T14:44:41+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059557/",
       "published_at": "2026-10-24T14:33:00+00:00"
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
     "id": "UKRAINE-10250043-02",
     "title": "תקיפות אוקראיניות במחוזות בלגורוד ובריאנסק ברוסיה",
     "summary": "פגיעות כטב\"מים וארטילריה גרמו לנפגעים ולנזק למרכזי קניות וכלי רכב באזור בלגורוד, שבוקינו וקלימובו שברוסיה.",
     "axis": "גבול רוסיה-אוקראינה",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T17:36:39+00:00",
     "last_update_at": "2026-10-24T23:50:00+00:00",
     "what_is_not_verified": "מספר הנפגעים הכולל והיקף הנזק המדויק למבנים",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://tass.com/politics/2207373",
       "published_at": "2026-10-24T23:50:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://kyivindependent.com/massive-ukrainian-drone-attack-hits-shopping-center-in-russias-belgorod-oblast-locals-say/",
       "published_at": "2026-10-24T23:27:09+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://tass.com/politics/2207345",
       "published_at": "2026-10-24T20:03:27+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "fh_3332b61b681025b1",
       "url": "https://tass.com/emergencies/2207321",
       "published_at": "2026-10-24T17:36:39+00:00"
      }
     ],
     "places": [
      {
       "name": "בלגורוד, רוסיה",
       "lat": 50.5956,
       "lon": 36.5873
      },
      {
       "name": "שבקינו, רוסיה",
       "lat": 50.4049,
       "lon": 36.8797
      },
      {
       "name": "קלימובו, רוסיה",
       "lat": 52.3791,
       "lon": 32.1971
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-03",
     "title": "מתקפות כטב\"מים וטילים רוסיות על מחוז דניפרופטרובסק",
     "summary": "פגיעות של כלי טיס בלתי מאוישים רוסיים במבנה מגורים ובחנות מכולת במחוז דניפרופטרובסק גרמו להרוגים ולפצועים, בהם ילדים.",
     "axis": "דניפרופטרובסק",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T15:08:00+00:00",
     "last_update_at": "2026-10-24T21:42:59+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_548c199d57c420ca",
       "url": "https://kyivindependent.com/deadly-russian-drone-strike-targets-apartment-in-dnipropetrovsk-oblast-killing-3-injuring-12/",
       "published_at": "2026-10-24T21:42:59+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_548c199d57c420ca",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059558/",
       "published_at": "2026-10-24T15:08:00+00:00"
      }
     ],
     "places": [
      {
       "name": "ניקופול, אוקראינה",
       "lat": 47.5692,
       "lon": 34.3917
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-04",
     "title": "פגיעות רוסיות במחוז חרקוב",
     "summary": "מתקפות של רחפנים ופצצות על יעדים בעיר חרקוב, בפרבר בזלודבקה ובעיר לוזובה גרמו להרוגים, לפצועים ולשריפה במחסן מסחרי.",
     "axis": "חרקוב",
     "claim_type": "incident",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T14:28:00+00:00",
     "last_update_at": "2026-10-24T21:01:00+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b851f4b9424b8989",
       "url": "https://www.ukrinform.net/rubric-ato/4177887-russian-drone-attack-on-kharkiv-kills-one-person-and-injures-others.html",
       "published_at": "2026-10-24T21:01:00+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_b851f4b9424b8989",
       "url": "https://www.ukrinform.net/rubric-ato/4177872-russian-attack-sparks-warehouse-fire-in-kharkiv-suburb.html",
       "published_at": "2026-10-24T18:32:00+00:00"
      },
      {
       "source_id": "src_pravda_ua",
       "source_root_id": "fh_b851f4b9424b8989",
       "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059556/",
       "published_at": "2026-10-24T14:28:00+00:00"
      }
     ],
     "places": [
      {
       "name": "חרקוב, אוקראינה",
       "lat": 49.9923,
       "lon": 36.231
      },
      {
       "name": "לוזובה, אוקראינה",
       "lat": 48.8842,
       "lon": 36.316
      }
     ]
    },
    {
     "id": "UKRAINE-10250043-05",
     "title": "הסכם על הפוגה הומניטרית בעיר הכבושה אולשקי",
     "summary": "נציגי זכויות האדם של אוקראינה ורוסיה תיאמו פרטים להפסקת פעולות צבאיות והכנסת סיוע הומניטרי ופינוי אזרחים באולשקי שבאזור חרסון.",
     "axis": "חרסון",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": true,
     "first_reported_at": "2026-10-24T01:20:54+00:00",
     "last_update_at": "2026-10-24T18:02:15+00:00",
     "what_is_not_verified": "מועד היישום המדויק בשטח והיקף הסיוע שיסופק בפועל",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_tass",
       "source_root_id": "fh_1e6e981238c873f3",
       "url": "https://tass.com/politics/2207325",
       "published_at": "2026-10-24T18:02:15+00:00"
      },
      {
       "source_id": "src_ukrinform",
       "source_root_id": "fh_be739f59130a36ed",
       "url": "https://www.ukrinform.net/rubric-society/4177862-lubinets-discusses-details-of-oleshky-humanitarian-mission-with-russian-ombudswoman.html",
       "published_at": "2026-10-24T16:59:00+00:00"
      },
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_1e6e981238c873f3",
       "url": "https://kyivindependent.com/european-parliament-vice-president-ends-hunger-strike-following-oleshky-ceasefire-announcement/",
       "published_at": "2026-10-24T14:22:27+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
       "published_at": "2026-10-24T01:20:54+00:00"
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
     "id": "UKRAINE-10250043-06",
     "title": "מחלוקת והגבלות על שירות סטארלינק בצבא אוקראינה",
     "summary": "אילון מאסק טען כי צבא אוקראינה הפר את תנאי השירות המסחרי בעת שימוש בסטארלינק למתקפות כטב\"מים, בעוד קייב הודיעה כי החיבור התייצב לאחר שיבושים.",
     "axis": "סיוע ותקשורת צבאית",
     "claim_type": "statement",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T12:12:40+00:00",
     "last_update_at": "2026-10-24T21:25:58+00:00",
     "what_is_not_verified": "האמצעים הטכניים המדויקים שננקטו להגבלת הרשת",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_guardian",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-zelenskyy-military-starlink-satellite-connection-stable-after-restrictions",
       "published_at": "2026-10-24T21:25:58+00:00"
      },
      {
       "source_id": "src_tass",
       "source_root_id": "or_unknown_origin",
       "url": "https://tass.com/world/2207339",
       "published_at": "2026-10-24T19:35:32+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "or_unknown_origin",
       "url": "https://t.me/alexmehacarmel/48903",
       "published_at": "2026-10-24T19:34:12+00:00"
      },
      {
       "source_id": "src_bbc",
       "source_root_id": "or_unknown_origin",
       "url": "https://www.bbc.co.uk/news/articles/cwkg5md14j8go?at_medium=RSS&at_campaign=rss",
       "published_at": "2026-10-24T12:12:40+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10250043-07",
     "title": "עסקאות אנרגיה וחשד להפרת סנקציות במיזם גז באלסקה",
     "summary": "חברת הגז הרוסית נובאטק מימנה בחשאי מיזם גז טבעי באלסקה, נושא שעלה במגעים שקיימו שליחים אמריקאים בקרמלין במסגרת שיחות הקשורות למלחמה.",
     "axis": "משא ומתן וסנקציות",
     "claim_type": "assessment",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T01:20:54+00:00",
     "last_update_at": "2026-10-25T00:29:15+00:00",
     "what_is_not_verified": "האם הממשל האמריקאי אישר או יאשר את השותפות והחרגת הסנקציות",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://kyivindependent.com/sanctioned-russian-energy-giant-secretly-funded-us-gas-project-nyt-reports/",
       "published_at": "2026-10-25T00:29:15+00:00"
      },
      {
       "source_id": "src_tg_carmel",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://t.me/alexmehacarmel/48893",
       "published_at": "2026-10-24T15:45:06+00:00"
      },
      {
       "source_id": "src_guardian",
       "source_root_id": "fh_b706153e98f92cad",
       "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
       "published_at": "2026-10-24T01:20:54+00:00"
      }
     ],
     "places": []
    },
    {
     "id": "UKRAINE-10250043-08",
     "title": "הטלת סנקציות אוקראיניות על תעשיית הנשק הרוסית",
     "summary": "אוקראינה הטילה סנקציות על חמישים ואחד אזרחים רוסים וארבעים וארבעה תאגידים המעורבים בייצור ואספקת ציוד לטילים ארוכי טווח.",
     "axis": "מדיני וסנקציות",
     "claim_type": "data",
     "lifecycle": "active",
     "occurred_at": "2026-10-24T00:00:00+00:00",
     "is_ongoing": false,
     "first_reported_at": "2026-10-24T12:12:05+00:00",
     "last_update_at": "2026-10-24T12:12:05+00:00",
     "what_is_not_verified": "לא צוין — יש להתייחס כלא מאומת.",
     "is_new_in_window": true,
     "reports": [
      {
       "source_id": "src_kyivind",
       "source_root_id": "or_unknown_origin",
       "url": "https://kyivindependent.com/ukraine-sanctions-russian-arms-suppliers-as-moscow-ramps-up-attacks/",
       "published_at": "2026-10-24T12:12:05+00:00"
      }
     ],
     "places": [
      {
       "name": "קייב, אוקראינה",
       "lat": 50.45,
       "lon": 30.5241
      }
     ]
    }
   ],
   "not_verified": [
    "טענת מאסק על מידת השפעת סגירת הפרצה בסטארלינק על הפעילות הצבאית האוקראינית",
    "היקף ההרס המלא במפעל הכימי באומסק",
    "דיווחים על מקור הכטב\"ם שנמצא בלטביה ומידת הקשר שלו ללוחמה אלקטרונית",
    "השלמת עסקת ייצוא הגז מאלסקה בשיתוף החברה הרוסית"
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
     "actor": "אוקראינה",
     "declared": [
      "הגנה על המרחב האווירי ופגיעה בתשתיות הצבאיות והתעשייתיות של רוסיה",
      "הבטחת סיוע הומניטרי לאזרחים באזורים הכבושים כמו אולשקי",
      "שמירה על יציבות מערכות התקשורת הלוויינית בחזית"
     ],
     "inferred": [
      "הפעלת לחץ כלכלי ומורלי על רוסיה באמצעות פגיעה בעומק שטחה",
      "הרחבת הסנקציות על תעשיית הטילים כדי לפגוע בכושר הייצור הרוסי"
     ],
     "forecast": [
      "המשך מאמצים לפתח ולרכוש כטב\"מים ארוכי טווח מונעי סילון",
      "הסתמכות גוברת על מערכות תקשורת ממשלתיות חלופיות למניעת מגבלות מסחריות"
     ]
    },
    {
     "actor": "רוסיה",
     "declared": [
      "פגיעה ביעדים צבאיים ומניעת תקיפות על שטחה הריבוני",
      "קיום מחויבויות להפוגה הומניטרית נקודתית באולשקי"
     ],
     "inferred": [
      "ניסיון להתיש את מערכות ההגנה האווירית של אוקראינה באמצעות מטחי כטב\"מים נרחבים",
      "מינוף עסקאות דלק ואנרגיה להקלה בעיצומי המערב במסגרת שיחות מדיניות"
     ],
     "forecast": [
      "המשך תקיפת יעדי עורף באוקראינה לצד חיזוק שיתוף הפעולה הצבאי-טכנולוגי עם קוריאה הצפונית"
     ]
    }
   ],
   "sources_cited": [
    {
     "source_id": "src_bbc",
     "url": "https://www.bbc.co.uk/news/articles/cwkg5md14j8go?at_medium=RSS&at_campaign=rss",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_guardian",
     "url": "https://www.theguardian.com/world/2026/oct/24/ukraine-war-briefing-russian-diesel-tankers-headed-for-north-america-says-moscow-as-us-tries-to-revive-peace-talks",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_kyivind",
     "url": "https://kyivindependent.com/ukraine-sanctions-russian-arms-suppliers-as-moscow-ramps-up-attacks/",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_pravda_ua",
     "url": "https://www.pravda.com.ua/eng/news/2026/10/24/8059556/",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_tass",
     "url": "https://tass.com/world/2207339",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_tg_carmel",
     "url": "https://t.me/alexmehacarmel/48893",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    },
    {
     "source_id": "src_ukrinform",
     "url": "https://www.ukrinform.net/rubric-society/4177862-lubinets-discusses-details-of-oleshky-humanitarian-mission-with-russian-ombudswoman.html",
     "accessed_at": "2026-10-25T00:43:27+00:00"
    }
   ]
  },
  "auto": true,
  "previous_generated_at": "2026-10-24T05:00:36+00:00",
  "changes": {
   "UKRAINE-10250043-01": {
    "kind": "new"
   },
   "UKRAINE-10250043-02": {
    "kind": "new"
   },
   "UKRAINE-10250043-03": {
    "kind": "new"
   },
   "UKRAINE-10250043-04": {
    "kind": "possible",
    "prev": "פגיעת כלי טיס בלתי מאויש בתחנת דלק בחרקוב",
    "score": 0.633
   },
   "UKRAINE-10250043-05": {
    "kind": "same",
    "from": "verified",
    "to": "verified",
    "prev": "הסכם הפסקת אש הומניטרית בעיר אולשקי",
    "score": 1.0
   },
   "UKRAINE-10250043-06": {
    "kind": "same",
    "from": "shared_root",
    "to": "shared_root",
    "prev": "המשך הגבלות המהירות על רשת סטארלינק באוקראינה",
    "score": 0.65
   },
   "UKRAINE-10250043-07": {
    "kind": "possible",
    "prev": "משלוח מכליות דלק מרוסיה לכיוון צפון אמריקה",
    "score": 0.4
   },
   "UKRAINE-10250043-08": {
    "kind": "possible",
    "prev": "תקיפת טילים רוסית על קייב",
    "score": 0.633
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
