/* ============================================================
   sources.js — טבלת המקורות
   ------------------------------------------------------------
   שני שדות קריטיים לפי המפרט:

   1) license_mode — נקבע ברגע חיבור המקור, לא בדיעבד:
        'link_only'     → כותרת מינימלית + קישור בלבד
        'summary_ok'    → מותר ניסוח עצמאי משלנו + קישור
        'licensed_data' → נתונים לפי תנאי ה-API
        'personal_only' → לא מוצג בגרסה הציבורית
        'unclear'       → חסום מפרסום עד בדיקה

   2) independence_group — "משפחת מקורות".
      שני מקורות מאותה משפחה (למשל שתי סוכנויות מדינתיות של אותה מדינה)
      לא נחשבים שני אימותים עצמאיים, גם אם הם פרסמו בנפרד.
   ============================================================ */

window.DB = window.DB || {};

window.DB.sources = [
  {
    id: 'src_reuters', name: 'רויטרס', kind: 'סוכנות ידיעות',
    license_mode: 'link_only', independence_group: 'wire_west',
    note: 'דורש רישיון לשימוש ציבורי בנפח — כרגע קישור בלבד'
  },
  {
    id: 'src_ap', name: 'AP', kind: 'סוכנות ידיעות',
    license_mode: 'link_only', independence_group: 'wire_west_ap',
    note: 'דורש רישיון לשימוש ציבורי בנפח — כרגע קישור בלבד'
  },
  {
    id: 'src_jpost', name: 'Jerusalem Post', kind: 'מדיה',
    license_mode: 'link_only', independence_group: 'media_il',
    note: ''
  },
  {
    id: 'src_idf_spox', name: 'דובר צה"ל', kind: 'דובר רשמי',
    license_mode: 'summary_ok', independence_group: 'official_il',
    note: 'הודעה רשמית — מותר לסכם בניסוח עצמאי'
  },
  {
    id: 'src_irna', name: 'IRNA', kind: 'סוכנות מדינתית',
    license_mode: 'summary_ok', independence_group: 'official_ir',
    note: 'מקור מדינתי — לתייג תמיד כצד מעוניין'
  },
  {
    id: 'src_tasnim', name: 'Tasnim', kind: 'סוכנות מדינתית',
    license_mode: 'summary_ok', independence_group: 'official_ir',
    note: 'אותה משפחת מקורות כמו IRNA — לא אימות עצמאי'
  },
  {
    id: 'src_tg_osint_a', name: 'ערוץ טלגרם OSINT א\'', kind: 'טלגרם ציבורי',
    license_mode: 'personal_only', independence_group: 'osint_tg_a',
    note: 'שכבת "לא מאומת עדיין" בלבד'
  },
  {
    id: 'src_tg_osint_b', name: 'ערוץ טלגרם OSINT ב\'', kind: 'טלגרם ציבורי',
    license_mode: 'personal_only', independence_group: 'osint_tg_b',
    note: 'שכבת "לא מאומת עדיין" בלבד'
  },
  {
    id: 'src_geoconfirmed', name: 'GeoConfirmed', kind: 'אימות גיאולוקציה',
    license_mode: 'summary_ok', independence_group: 'osint_geo',
    note: 'שכבת אימות משלימה — לא תחליף למקור'
  },
  {
    id: 'src_isw', name: 'ISW', kind: 'מכון מחקר',
    license_mode: 'summary_ok', independence_group: 'think_tank_isw',
    note: 'הערכות, לא דיווחי שטח'
  },
  {
    id: 'src_alma', name: 'Alma Research Center', kind: 'מכון מחקר',
    license_mode: 'summary_ok', independence_group: 'think_tank_alma',
    note: 'מתמחה בחזית הצפונית'
  },
  {
    id: 'src_planet', name: 'Planet Labs (לוויין)', kind: 'תמונות לוויין',
    license_mode: 'licensed_data', independence_group: 'sat_planet',
    note: 'שימוש לפי תנאי הרישיון בלבד'
  },
  /* ---------- מקורות נתונים אמיתיים (שלב 2) ---------- */
  {
    id: 'src_coingecko', name: 'CoinGecko', kind: 'API נתוני קריפטו',
    license_mode: 'licensed_data', independence_group: 'data_coingecko',
    attribution: 'נתוני קריפטו: CoinGecko',
    note: 'API ציבורי חינמי, ללא מפתח. מחייב קרדיט גלוי. לבדוק שוב את תנאי השימוש לפני פרסום ציבורי (שלב 8).'
  },
  {
    id: 'src_ecb', name: 'ECB (דרך Frankfurter)', kind: 'API שערי מטבע',
    license_mode: 'licensed_data', independence_group: 'data_ecb',
    attribution: 'שערי ייחוס: הבנק המרכזי האירופי (ECB), דרך Frankfurter',
    note: 'שער ייחוס יומי, לא מחיר מסחר בזמן אמת. מתפרסם בימי עסקים בלבד, בסביבות 16:00 שעון מרכז אירופה. משמש גם גיבוי לשערים החיים, ומקור יחיד לשקל/לאו.'
  },
  {
    id: 'src_cnbc', name: 'CNBC', kind: 'נתוני מסחר (לא רשמי)',
    license_mode: 'personal_only', independence_group: 'data_cnbc',
    attribution: 'נתוני מסחר: CNBC',
    note: 'כתובת פנימית של אתר CNBC, לא שירות ציבורי מתועד, ואין תנאי שימוש מפורסמים. לכן "שימוש אישי בלבד": נחסם אוטומטית בגרסה הציבורית. לפני העלאה לאוויר צריך מקור מורשה במקומו.'
  },
  {
    id: 'src_walla', name: 'וואלה', kind: 'פידי RSS',
    license_mode: 'link_only', independence_group: 'media_walla',
    attribution: 'כותרות וקישורים: וואלה',
    note: 'וואלה מציעה את פידי ה-RSS לשימוש באפליקציות ובאתרים חיצוניים. מוצגים רק כותרת מקורית, תאריך וקישור — בלי תקציר ובלי תמונות. ' +
          '⚠️ בפיד עצמו כתוב: "available for non-commercial use only" — מתאים לאתר אישי; לבדוק מחדש אם האתר יהפוך מסחרי.'
  },
  {
    id: 'src_ifa', name: 'ההתאחדות לכדורגל בישראל', kind: 'לוח משחקים רשמי',
    license_mode: 'link_only', independence_group: 'official_ifa',
    attribution: 'תוצאות: ההתאחדות לכדורגל בישראל',
    note: 'מקור רשמי. עובדות בלבד (תאריך, קבוצות, תוצאה) + קישור לעמוד המשחק. העמוד מציג רק משחקים ששוחקו — משחקים עתידיים מגיעים מלוח השידורים.'
  },
  {
    id: 'src_livegames', name: 'LiveGames', kind: 'לוח שידורי ספורט',
    license_mode: 'link_only', independence_group: 'data_livegames',
    attribution: 'שידורים: LiveGames',
    note: 'עובדות בלבד (ערוץ, שעה, משחק) + קישור ללוח המלא. כולל גם משחקי נוער/נשים בלי סימון — ' +
          'המשימה בענן מסננת לפי הכלל "כל קבוצה משחקת פעם אחת במחזור" (נבדק 16/09/2026: 7 משחקים, 14 קבוצות, בלי כפילויות).'
  },
  /* ---------- פינת AI (דרך המשימה בענן) ---------- */
  {
    id: 'src_ai_labs', name: 'Anthropic · Google DeepMind · OpenAI · Google', kind: 'בלוגים רשמיים של חברות AI',
    license_mode: 'link_only', independence_group: 'official_ai_labs',
    attribution: 'כותרות: הבלוגים הרשמיים של החברות (תורגמו אוטומטית)',
    note: 'כותרת מתורגמת + קישור בלבד. ל-Anthropic אין RSS — נקרא עמוד החדשות. מ-OpenAI מתקבלים רק פוסטים מסוג Product/Research/Company/Safety (סיפורי לקוחות מסוננים).'
  },
  {
    id: 'src_geektime', name: 'גיקטיים', kind: 'RSS — חדשות טכנולוגיה',
    license_mode: 'link_only', independence_group: 'media_geektime',
    attribution: 'כותרות: גיקטיים',
    note: 'כותרת מקורית + קישור בלבד. רק כתבות שעוסקות ב-AI. נמשך דרך המשימה בענן (המקור חוסם קריאה ישירה).'
  },
  {
    id: 'src_hf', name: 'Hugging Face', kind: 'API ציבורי — דמואים במגמה',
    license_mode: 'licensed_data', independence_group: 'data_hf',
    attribution: 'דמואים: Hugging Face Spaces',
    note: 'API ציבורי מתועד. מסוננים: תוכן לא הולם, כלים להסרת סימני מים, דמואים שלא עובדים כרגע, עותקים כפולים, ודמואים עם פחות מ-40 סימוני אהבתי.'
  },
  {
    id: 'src_espn', name: 'ESPN', kind: 'נתוני ספורט (לא רשמי)',
    license_mode: 'personal_only', independence_group: 'data_espn',
    attribution: 'נתוני משחקים: ESPN',
    note: 'כתובת פנימית של אתר ESPN, לא שירות ציבורי מתועד. "שימוש אישי בלבד" — נחסם אוטומטית בגרסה הציבורית. ' +
          'נבדקה חלופה מורשית: TheSportsDB בחינם מחזיר רק משחק בית אחד לקבוצה — לא מספיק. ' +
          'נבדק 16/09/2026: הנתונים תאמו את הדיווחים בספורט 1 (גלוך: שער ובישול ב-5:1 על וילם II).'
  },
  {
    id: 'src_nyfed', name: 'הפדרל ריזרב של ניו יורק', kind: 'API רשמי — ריביות',
    license_mode: 'licensed_data', independence_group: 'data_nyfed',
    attribution: 'ריבית: Federal Reserve Bank of New York',
    note: 'מקור רשמי, ללא מפתח. ריבית אפקטיבית (EFFR) + טווח היעד של הפד.'
  },
  {
    id: 'src_boi', name: 'בנק ישראל', kind: 'נתונים רשמיים — ריביות',
    license_mode: 'licensed_data', independence_group: 'data_boi',
    attribution: 'ריבית: בנק ישראל',
    note: 'מקור רשמי ללא מפתח. השרת שלהם לא מאפשר קריאה ישירה מאתר אחר, ולכן נמשך ע"י המשימה האוטומטית בענן (tools/update_data.py). אם המשימה לא רצה — גיבוי: תמונת מצב ידנית.'
  },
  {
    id: 'src_globes', name: 'גלובס', kind: 'פידי RSS — כלכלה',
    license_mode: 'link_only', independence_group: 'media_globes',
    attribution: 'כותרות וקישורים: גלובס',
    note: 'כותרת מקורית + קישור בלבד. נמשך ע"י המשימה בענן כי המקור חוסם קריאה ישירה. (כלכליסט נבדק — חוסם לגמרי.)'
  },
  {
    id: 'src_gnn', name: 'Good News Network', kind: 'RSS באנגלית — חדשות טובות',
    license_mode: 'link_only', independence_group: 'media_gnn',
    attribution: 'כותרות: Good News Network (תורגמו אוטומטית)',
    note: 'מוצגת כותרת מתורגמת אוטומטית + קישור. בלי תקציר ובלי תמונות. נמשך ע"י המשימה בענן כי המקור חוסם קריאה ישירה.'
  },
  {
    id: 'src_whathifi', name: 'What Hi-Fi?', kind: 'RSS באנגלית — ביקורות אודיו/וידאו',
    license_mode: 'link_only', independence_group: 'media_whathifi',
    attribution: 'כותרות: What Hi-Fi? (תורגמו אוטומטית)',
    note: 'מוצגת כותרת מתורגמת אוטומטית + קישור. כתבות מבצעים מסוננות. נמשך ע"י המשימה בענן.'
  },

  {
    id: 'src_unknown_blog', name: 'בלוג לא מזוהה', kind: 'לא ידוע',
    license_mode: 'unclear', independence_group: 'unknown',
    note: 'חסום מפרסום עד בדיקת רישוי'
  }
];
