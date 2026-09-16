/* ============================================================
   events-iran.js — 15 אירועי דמה לזירת "איראן – ישראל – ארה״ב"
   ------------------------------------------------------------
   ⚠️ כל הנתונים כאן מומצאים לחלוטין. אלה אינם דיווחים אמיתיים.
      מטרתם היחידה: לבדוק שמודל הנתונים מחזיק מים לפני שבונים עליו.

   שלוש טבלאות:
     events      — מה קרה, מתי, באיזו זירה, באיזה ציר
     reports     — קישור אירוע↔מקור. כאן יושב source_root_id
     revisions   — היסטוריית שינויים. לא דורסים גרסה קודמת, מוסיפים שורה

   source_root_id = "מאיפה הטענה באמת הגיעה במקור".
   שני דיווחים עם אותו source_root_id = אימות אחד, לא שניים.
   ============================================================ */

window.DB = window.DB || {};

window.DB.events = [

  /* ---------- מקרה 1: מקור יחיד ---------- */
  {
    id: 'EV-001', arena: 'iran',
    title: 'דיווח על פיצוץ במתקן תעשייתי ליד נתנז',
    axis: 'ציר מרכז איראן',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-16T04:20:00+03:00',
    first_reported_at: '2026-09-16T04:55:00+03:00',
    last_update_at: '2026-09-16T04:55:00+03:00',
    summary: 'ערוץ טלגרם בודד פרסם דיווח על פיצוץ במתקן תעשייתי. אין אישור נוסף, אין אימות גיאולוקציה, אין תגובה רשמית.',
    what_is_not_verified: 'עצם האירוע, מיקומו המדויק, וזהות המתקן. הכל נשען על פוסט אחד.'
  },

  /* ---------- מקרה 2: שני מקורות עצמאיים באמת ---------- */
  {
    id: 'EV-002', arena: 'iran',
    title: 'פגיעה במערך מכ"ם בקרבת בנדר עבאס',
    axis: 'ציר דרום – מפרץ',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-15T22:10:00+03:00',
    first_reported_at: '2026-09-15T23:40:00+03:00',
    last_update_at: '2026-09-16T07:15:00+03:00',
    summary: 'דיווח שטח של סוכנות ידיעות מערבית, ובנפרד לחלוטין — ניתוח תמונת לוויין מסחרית שמראה נזק במיקום התואם. שני נתיבי מידע שאינם תלויים זה בזה.',
    what_is_not_verified: 'היקף הנזק המדויק וזהות התוקף.'
  },

  /* ---------- מקרה 3: שני מקורות שמעתיקים זה מזה (כשל מקור משותף) ---------- */
  {
    id: 'EV-003', arena: 'iran',
    title: 'טענה על תנועת שיירת משגרים בדרום איראן',
    axis: 'ציר דרום – מפרץ',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-16T01:00:00+03:00',
    first_reported_at: '2026-09-16T01:30:00+03:00',
    last_update_at: '2026-09-16T05:05:00+03:00',
    summary: 'שני פרסומים נפרדים — ערוץ טלגרם ואתר חדשות. נראה כמו שני מקורות, אבל אתר החדשות ציטט את אותו פוסט טלגרם. מקור-שורש אחד. זה לא אימות כפול.',
    what_is_not_verified: 'הכל. ריבוי הפרסומים כאן הוא הד, לא אישור.'
  },

  /* ---------- מקרה 4: מקור רשמי יחיד שמצוטט ע"י סוכנות ---------- */
  {
    id: 'EV-004', arena: 'iran',
    title: 'הודעת דובר צה"ל על יירוט כטב"ם מעל מרחב אווירי',
    axis: 'ציר ישראל',
    claim_type: 'statement',
    lifecycle: 'active',
    occurred_at: '2026-09-16T06:40:00+03:00',
    first_reported_at: '2026-09-16T06:52:00+03:00',
    last_update_at: '2026-09-16T08:00:00+03:00',
    summary: 'הודעת דובר רשמית, שסוכנות ידיעות פרסמה כציטוט. שני פרסומים — דובר אחד. מאומת שההודעה נמסרה; לא מאומת באופן עצמאי מה שקרה בשטח.',
    what_is_not_verified: 'פרטי היירוט עצמו לא אומתו ע"י צד שלישי בלתי תלוי.'
  },

  /* ---------- מקרה 5: תיקון בדיעבד ---------- */
  {
    id: 'EV-005', arena: 'iran',
    title: 'מספר הנפגעים באתר תעשייתי — תוקן כלפי מטה',
    axis: 'ציר מרכז איראן',
    claim_type: 'incident',
    lifecycle: 'corrected',
    occurred_at: '2026-09-14T18:00:00+03:00',
    first_reported_at: '2026-09-14T19:20:00+03:00',
    last_update_at: '2026-09-15T11:30:00+03:00',
    summary: 'הדיווח הראשוני מסר 12 נפגעים. כעבור 16 שעות תוקן ל-3 ע"י אותו מקור, וסוכנות שנייה ובלתי תלויה דיווחה עצמאית על המספר המתוקן. הגרסה הראשונה לא נמחקה — היא שמורה בהיסטוריית השינויים.',
    what_is_not_verified: 'הסיבה לפער בין הדיווח הראשוני למתוקן.'
  },

  /* ---------- מקרה 6: מעבר סטטוס מ"ראשוני" ל"מאומת" ---------- */
  {
    id: 'EV-006', arena: 'iran',
    title: 'נזק לתשתית נמל — מדיווח ראשוני לאימות',
    axis: 'ציר דרום – מפרץ',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-16T05:30:00+03:00',
    first_reported_at: '2026-09-16T06:10:00+03:00',
    last_update_at: '2026-09-16T09:40:00+03:00',
    summary: 'התחיל כפוסט טלגרם בודד ב-06:10. ב-09:40 נוספו דיווח שטח של סוכנות ואימות גיאולוקציה עצמאי — ורק אז עבר לסטטוס מאומת.',
    what_is_not_verified: 'זהות הגורם האחראי.'
  },

  /* ---------- מקרה 7: הצהרה רשמית משתי סוכנויות של אותה מדינה ---------- */
  {
    id: 'EV-007', arena: 'iran',
    title: 'הצהרה איראנית רשמית על נכונות למגעים',
    axis: 'ציר מדיני',
    claim_type: 'statement',
    lifecycle: 'active',
    occurred_at: '2026-09-15T14:00:00+03:00',
    first_reported_at: '2026-09-15T14:25:00+03:00',
    last_update_at: '2026-09-15T15:10:00+03:00',
    summary: 'שתי סוכנויות מדינתיות איראניות סיקרו בנפרד — שני מקורות-שורש שונים. ובכל זאת לא אימות עצמאי: שתיהן מאותה משפחת מקורות. זה מקרה שונה מ-EV-003, שבו גם השורש היה זהה.',
    what_is_not_verified: 'הכוונה בפועל מאחורי ההצהרה, ואם היא מייצגת עמדה מוסכמת.'
  },

  /* ---------- מקרה 8: מקור אחד חסום ברישוי ---------- */
  {
    id: 'EV-008', arena: 'iran',
    title: 'עלייה בפרמיות ביטוח ימי במיצרי הורמוז',
    axis: 'ציר כלכלי – ספנות',
    claim_type: 'data',
    lifecycle: 'active',
    occurred_at: '2026-09-16T08:00:00+03:00',
    first_reported_at: '2026-09-16T08:30:00+03:00',
    last_update_at: '2026-09-16T08:30:00+03:00',
    summary: 'דיווח על עלייה בפרמיות. מקור אחד חסום מפרסום כי מצב הרישוי שלו לא ברור — הוא נשמר במאגר אבל לא מוצג.',
    what_is_not_verified: 'הנתון המספרי המדויק, שמגיע ממקור שלא ניתן להציג כרגע.'
  },

  /* ---------- מקרה 9: דיווח שנמשך/בוטל ---------- */
  {
    id: 'EV-009', arena: 'iran',
    title: 'דיווח על פיצוצים בצפון טהרן — נמשך',
    axis: 'ציר מרכז איראן',
    claim_type: 'incident',
    lifecycle: 'retracted',
    occurred_at: '2026-09-15T02:00:00+03:00',
    first_reported_at: '2026-09-15T02:15:00+03:00',
    last_update_at: '2026-09-15T09:00:00+03:00',
    summary: 'ערוץ טלגרם דיווח על פיצוצים ומחק את הפוסט כעבור 7 שעות. הדיווח נשאר במערכת מסומן כבוטל — כדי שיהיה תיעוד למה זה הופיע ולמה ירד.',
    what_is_not_verified: 'הכל. הדיווח בוטל ע"י מפרסמו.'
  },

  /* ---------- מקרה 10: הערכה אנליטית, לא דיווח שטח ---------- */
  {
    id: 'EV-010', arena: 'iran',
    title: 'הערכת מכון מחקר: המשך לחץ על צירי אספקה',
    axis: 'ציר אסטרטגי',
    claim_type: 'assessment',
    lifecycle: 'active',
    occurred_at: '2026-09-16T00:00:00+03:00',
    first_reported_at: '2026-09-16T02:00:00+03:00',
    last_update_at: '2026-09-16T02:00:00+03:00',
    summary: 'הערכה של מכון מחקר, לא דיווח על אירוע שקרה. מסומנת כהערכה כדי שלא תיספר בטעות כעובדה מאומתת.',
    what_is_not_verified: 'זו תחזית מטבעה — אין מה לאמת בה בשלב זה.'
  },

  /* ---------- מקרה 11: לוויין + מכון מחקר ---------- */
  {
    id: 'EV-011', arena: 'iran',
    title: 'פריסת סוללות הגנה אווירית באזור מתקני נפט',
    axis: 'ציר דרום – מפרץ',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-14T10:00:00+03:00',
    first_reported_at: '2026-09-14T16:00:00+03:00',
    last_update_at: '2026-09-15T12:00:00+03:00',
    summary: 'תמונת לוויין מסחרית, ובמקביל הערכה עצמאית של מכון מחקר שהגיעה לאותה מסקנה מנתונים אחרים. שני נתיבים נפרדים.',
    what_is_not_verified: 'מועד הפריסה המדויק ומצב המבצעי של הסוללות.'
  },

  /* ---------- מקרה 12: מהלך אמריקאי — שתי סוכנויות, הודעה אחת ---------- */
  {
    id: 'EV-012', arena: 'iran',
    title: 'הודעה אמריקאית על תנועת כוח ימי לאזור',
    axis: 'ציר ארה"ב',
    claim_type: 'statement',
    lifecycle: 'active',
    occurred_at: '2026-09-15T17:00:00+03:00',
    first_reported_at: '2026-09-15T17:30:00+03:00',
    last_update_at: '2026-09-15T18:20:00+03:00',
    summary: 'שתי סוכנויות ידיעות מערביות נפרדות פרסמו — אבל שתיהן מצטטות את אותה הודעה רשמית. מקור-שורש אחד.',
    what_is_not_verified: 'מיקום בפועל, לוחות זמנים והרכב הכוח.'
  },

  /* ---------- מקרה 13: נתון כלכלי ---------- */
  {
    id: 'EV-013', arena: 'iran',
    title: 'נפט ברנט +4.2% ביום מסחר אחד',
    axis: 'ציר כלכלי – אנרגיה',
    claim_type: 'data',
    lifecycle: 'active',
    occurred_at: '2026-09-16T09:00:00+03:00',
    first_reported_at: '2026-09-16T09:05:00+03:00',
    last_update_at: '2026-09-16T09:05:00+03:00',
    summary: 'נתון מסחר. אימות של נתוני שוק שונה במהותו מאימות דיווח שטח — מסומן כ"נתון" ולא כ"אירוע".',
    what_is_not_verified: 'הקישור הסיבתי בין תנועת המחיר לאירועים בזירה.'
  },

  /* ---------- מקרה 14: סתירה בין שני צדדים ---------- */
  {
    id: 'EV-014', arena: 'iran',
    title: 'טענה על פגיעה בצנרת — מוכחשת',
    axis: 'ציר דרום – מפרץ',
    claim_type: 'incident',
    lifecycle: 'disputed',
    occurred_at: '2026-09-15T20:00:00+03:00',
    first_reported_at: '2026-09-15T20:45:00+03:00',
    last_update_at: '2026-09-16T07:00:00+03:00',
    summary: 'צד אחד טוען שהייתה פגיעה, צד שני מכחיש. שני המקורות עצמאיים זה מזה — אבל שניהם צדדים מעוניינים. סתירה פתוחה, לא "מאומת".',
    what_is_not_verified: 'עצם הפגיעה. יש שתי גרסאות סותרות ואין צד שלישי.'
  },

  /* ---------- מקרה 15: אימות מאוחר של אירוע ישן ---------- */
  {
    id: 'EV-015', arena: 'iran',
    title: 'אימות מאוחר: תקיפה מלפני שלושה ימים',
    axis: 'ציר סוריה',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-13T03:00:00+03:00',
    first_reported_at: '2026-09-13T04:00:00+03:00',
    last_update_at: '2026-09-16T10:00:00+03:00',
    summary: 'האירוע קרה לפני שלושה ימים ודווח אז כלא מאומת. האימות הגיאולוקציה הגיע רק היום. זו הסיבה שצריך להפריד בין "מתי קרה" ל"מתי אומת".',
    what_is_not_verified: 'זהות התוקף — לא אומתה גם כעת.'
  },

  /* ---------- מקרה 16: אירוע מתמשך שעדיין נמשך ---------- */
  {
    id: 'EV-016', arena: 'iran',
    title: 'קרבות נמשכים על ציר אספקה מזרחי',
    axis: 'ציר מזרח – גבול',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-14T06:00:00+03:00',
    occurred_to: null,        // null + is_ongoing=true  →  עדיין נמשך
    is_ongoing: true,
    first_reported_at: '2026-09-14T08:30:00+03:00',
    last_update_at: '2026-09-16T09:20:00+03:00',
    summary: 'לא אירוע נקודתי אלא לחימה שנמשכת שלושה ימים ברציפות. אין לה "שעה שבה קרתה" — יש לה התחלה, והיא עדיין פתוחה.',
    what_is_not_verified: 'קווי השליטה המדויקים בציר ושאלת ההכרעה.'
  },

  /* ---------- מקרה 17: אירוע מתמשך שהסתיים ---------- */
  {
    id: 'EV-017', arena: 'iran',
    title: 'גל תקיפות בן שלושה ימים — הסתיים',
    axis: 'ציר דרום – מפרץ',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-11T20:00:00+03:00',
    occurred_to: '2026-09-14T04:00:00+03:00',   // טווח סגור
    is_ongoing: false,
    first_reported_at: '2026-09-11T22:00:00+03:00',
    last_update_at: '2026-09-14T12:00:00+03:00',
    summary: 'מערכה בת שלושה ימים עם התחלה וסוף מוגדרים. מוצגת כטווח זמן, לא כנקודה בזמן.',
    what_is_not_verified: 'מספר התקיפות הכולל בתוך הגל.'
  },

  /* ---------- מקרה 18: אימות שבוטל בדיעבד (הורדת סטטוס) ---------- */
  {
    id: 'EV-018', arena: 'iran',
    title: 'פגיעה במתקן אחסון — האימות בוטל בדיעבד',
    axis: 'ציר מרכז איראן',
    claim_type: 'incident',
    lifecycle: 'active',
    occurred_at: '2026-09-13T11:00:00+03:00',
    first_reported_at: '2026-09-13T13:00:00+03:00',
    last_update_at: '2026-09-16T08:10:00+03:00',
    summary: 'האירוע היה מסומן "מאומת" במשך יומיים, על סמך שני מקורות שנראו עצמאיים. ב-16/09 התברר ששניהם קיבלו את המידע מאותו גורם אנונימי. השורש עודכן — והסטטוס ירד אוטומטית בחזרה.',
    what_is_not_verified: 'עצם הפגיעה. הבסיס היחיד הוא גורם אנונימי אחד.'
  }
];

/* ============================================================
   reports — כל שורה היא "מקור X דיווח על אירוע Y".
   source_root_id הוא השדה שמונע כשל מקור משותף.
   ============================================================ */

window.DB.reports = [
  /* EV-001 — מקור אחד */
  { event_id: 'EV-001', source_id: 'src_tg_osint_a', source_root_id: 'root_tg_a_4471', published_at: '2026-09-16T04:55:00+03:00', url: '#', note: 'פוסט מקורי' },

  /* EV-002 — שני שורשים עצמאיים */
  { event_id: 'EV-002', source_id: 'src_reuters',  source_root_id: 'root_reuters_field_0915', published_at: '2026-09-15T23:40:00+03:00', url: '#', note: 'דיווח כתב שטח' },
  { event_id: 'EV-002', source_id: 'src_planet',   source_root_id: 'root_planet_img_0916',   published_at: '2026-09-16T07:15:00+03:00', url: '#', note: 'ניתוח תמונת לוויין' },

  /* EV-003 — שני מקורות, שורש אחד */
  { event_id: 'EV-003', source_id: 'src_tg_osint_a', source_root_id: 'root_tg_a_4488', published_at: '2026-09-16T01:30:00+03:00', url: '#', note: 'פוסט מקורי' },
  { event_id: 'EV-003', source_id: 'src_jpost',      source_root_id: 'root_tg_a_4488', published_at: '2026-09-16T05:05:00+03:00', url: '#', note: 'מצטט את פוסט הטלגרם' },

  /* EV-004 — דובר רשמי + סוכנות שמצטטת אותו */
  { event_id: 'EV-004', source_id: 'src_idf_spox', source_root_id: 'root_idf_spox_0916a', published_at: '2026-09-16T06:52:00+03:00', url: '#', note: 'הודעה רשמית' },
  { event_id: 'EV-004', source_id: 'src_ap',       source_root_id: 'root_idf_spox_0916a', published_at: '2026-09-16T08:00:00+03:00', url: '#', note: 'ציטוט ההודעה' },

  /* EV-005 — תיקון */
  { event_id: 'EV-005', source_id: 'src_reuters', source_root_id: 'root_reuters_field_0914', published_at: '2026-09-14T19:20:00+03:00', url: '#', note: 'דיווח ראשוני' },
  { event_id: 'EV-005', source_id: 'src_reuters', source_root_id: 'root_reuters_field_0914', published_at: '2026-09-15T11:30:00+03:00', url: '#', note: 'תיקון מאותו מקור' },
  { event_id: 'EV-005', source_id: 'src_ap',      source_root_id: 'root_ap_field_0915',      published_at: '2026-09-15T11:50:00+03:00', url: '#', note: 'דיווח עצמאי שתומך במספר המתוקן' },

  /* EV-006 — מעבר סטטוס: התחיל באחד, נוספו שניים */
  { event_id: 'EV-006', source_id: 'src_tg_osint_b',   source_root_id: 'root_tg_b_2201',        published_at: '2026-09-16T06:10:00+03:00', url: '#', note: 'דיווח ראשוני' },
  { event_id: 'EV-006', source_id: 'src_ap',           source_root_id: 'root_ap_field_0916',    published_at: '2026-09-16T09:10:00+03:00', url: '#', note: 'דיווח שטח עצמאי' },
  { event_id: 'EV-006', source_id: 'src_geoconfirmed', source_root_id: 'root_geoc_ver_0916',    published_at: '2026-09-16T09:40:00+03:00', url: '#', note: 'אימות גיאולוקציה' },

  /* EV-007 — שתי סוכנויות, אותה משפחה + אותו שורש */
  { event_id: 'EV-007', source_id: 'src_irna',   source_root_id: 'root_ir_presidency_0915', published_at: '2026-09-15T14:25:00+03:00', url: '#', note: 'הודעת לשכה' },
  { event_id: 'EV-007', source_id: 'src_tasnim', source_root_id: 'root_ir_tasnim_own_0915', published_at: '2026-09-15T15:10:00+03:00', url: '#', note: 'סיקור נפרד, אבל אותה משפחת מקורות' },

  /* EV-008 — מקור חסום ברישוי */
  { event_id: 'EV-008', source_id: 'src_reuters',      source_root_id: 'root_reuters_mkt_0916', published_at: '2026-09-16T08:30:00+03:00', url: '#', note: 'סקירת שוק' },
  { event_id: 'EV-008', source_id: 'src_unknown_blog', source_root_id: 'root_blog_0916',        published_at: '2026-09-16T08:35:00+03:00', url: '#', note: 'רישוי לא ברור — חסום' },

  /* EV-009 — בוטל */
  { event_id: 'EV-009', source_id: 'src_tg_osint_b', source_root_id: 'root_tg_b_2190', published_at: '2026-09-15T02:15:00+03:00', url: '#', note: 'הפוסט נמחק מאז' },

  /* EV-010 — הערכה */
  { event_id: 'EV-010', source_id: 'src_isw', source_root_id: 'root_isw_assess_0916', published_at: '2026-09-16T02:00:00+03:00', url: '#', note: 'הערכה יומית' },

  /* EV-011 — לוויין + מכון, שני שורשים */
  { event_id: 'EV-011', source_id: 'src_planet', source_root_id: 'root_planet_img_0914', published_at: '2026-09-14T16:00:00+03:00', url: '#', note: 'תמונת לוויין' },
  { event_id: 'EV-011', source_id: 'src_isw',    source_root_id: 'root_isw_assess_0915', published_at: '2026-09-15T12:00:00+03:00', url: '#', note: 'ניתוח נפרד' },

  /* EV-012 — שתי סוכנויות, הודעה אחת */
  { event_id: 'EV-012', source_id: 'src_reuters', source_root_id: 'root_us_statement_0915', published_at: '2026-09-15T17:30:00+03:00', url: '#', note: 'ציטוט הודעה' },
  { event_id: 'EV-012', source_id: 'src_ap',      source_root_id: 'root_us_statement_0915', published_at: '2026-09-15T18:20:00+03:00', url: '#', note: 'ציטוט אותה הודעה' },

  /* EV-013 — נתון שוק */
  { event_id: 'EV-013', source_id: 'src_reuters', source_root_id: 'root_market_feed_0916', published_at: '2026-09-16T09:05:00+03:00', url: '#', note: 'נתוני מסחר' },

  /* EV-014 — סתירה */
  { event_id: 'EV-014', source_id: 'src_irna',     source_root_id: 'root_ir_mod_0915',  published_at: '2026-09-15T20:45:00+03:00', url: '#', note: 'טוען שהייתה פגיעה' },
  { event_id: 'EV-014', source_id: 'src_idf_spox', source_root_id: 'root_idf_spox_0916b', published_at: '2026-09-16T07:00:00+03:00', url: '#', note: 'מכחיש' },

  /* EV-015 — אימות מאוחר */
  { event_id: 'EV-015', source_id: 'src_tg_osint_a',   source_root_id: 'root_tg_a_4390',     published_at: '2026-09-13T04:00:00+03:00', url: '#', note: 'דיווח ראשוני, לפני 3 ימים' },
  { event_id: 'EV-015', source_id: 'src_geoconfirmed', source_root_id: 'root_geoc_ver_0916b', published_at: '2026-09-16T10:00:00+03:00', url: '#', note: 'אימות גיאולוקציה שהגיע היום' },

  /* EV-016 — אירוע מתמשך, שני שורשים עצמאיים */
  { event_id: 'EV-016', source_id: 'src_ap',           source_root_id: 'root_ap_field_0914',  published_at: '2026-09-14T08:30:00+03:00', url: '#', note: 'דיווח שטח, מתעדכן מדי יום' },
  { event_id: 'EV-016', source_id: 'src_geoconfirmed', source_root_id: 'root_geoc_ver_0916c', published_at: '2026-09-16T09:20:00+03:00', url: '#', note: 'אימות גיאולוקציה של מיקומים בציר' },

  /* EV-017 — טווח סגור */
  { event_id: 'EV-017', source_id: 'src_isw',    source_root_id: 'root_isw_assess_0914',  published_at: '2026-09-14T12:00:00+03:00', url: '#', note: 'סיכום הגל' },
  { event_id: 'EV-017', source_id: 'src_planet', source_root_id: 'root_planet_img_0913',  published_at: '2026-09-13T15:00:00+03:00', url: '#', note: 'תמונות לוויין מתוך הגל' },

  /* EV-018 — שני מקורות שנראו עצמאיים, ואז התברר שהשורש זהה.
     שים לב: שניהם נושאים עכשיו את אותו source_root_id.
     זה השינוי היחיד שנדרש — הסטטוס יורד מעצמו. */
  { event_id: 'EV-018', source_id: 'src_reuters', source_root_id: 'root_anon_official_0913', published_at: '2026-09-13T13:00:00+03:00', url: '#', note: 'מצטט "גורם המעורה בפרטים"' },
  { event_id: 'EV-018', source_id: 'src_jpost',   source_root_id: 'root_anon_official_0913', published_at: '2026-09-13T16:30:00+03:00', url: '#', note: 'התברר ב-16/09: אותו גורם אנונימי' }
];

/* ============================================================
   revisions — היסטוריית שינויים.
   הכלל: אף פעם לא דורסים. כל שינוי = שורה חדשה.
   ============================================================ */

window.DB.revisions = [
  { event_id: 'EV-005', at: '2026-09-14T19:20:00+03:00', kind: 'created',   text: 'פורסם לראשונה: "12 נפגעים באתר".' },
  { event_id: 'EV-005', at: '2026-09-15T11:30:00+03:00', kind: 'correction',text: 'תוקן ל-3 נפגעים. המקור פרסם תיקון רשמי. הגרסה הקודמת נשמרה.' },

  { event_id: 'EV-006', at: '2026-09-16T06:10:00+03:00', kind: 'created',       text: 'נפתח כדיווח ראשוני ממקור טלגרם יחיד.' },
  { event_id: 'EV-006', at: '2026-09-16T09:10:00+03:00', kind: 'source_added',  text: 'נוסף דיווח שטח של סוכנות — מקור-שורש שני.' },
  { event_id: 'EV-006', at: '2026-09-16T09:40:00+03:00', kind: 'status_change', text: 'עבר מ"דיווח ראשוני" ל"מאומת" לאחר אימות גיאולוקציה עצמאי.' },

  { event_id: 'EV-009', at: '2026-09-15T02:15:00+03:00', kind: 'created',   text: 'פורסם כדיווח ראשוני לא מאומת.' },
  { event_id: 'EV-009', at: '2026-09-15T09:00:00+03:00', kind: 'retraction',text: 'המקור מחק את הפוסט. הדיווח סומן כבוטל ולא נמחק מהמערכת.' },

  { event_id: 'EV-014', at: '2026-09-15T20:45:00+03:00', kind: 'created',       text: 'נפתח על בסיס טענה של צד אחד.' },
  { event_id: 'EV-014', at: '2026-09-16T07:00:00+03:00', kind: 'status_change', text: 'התקבלה הכחשה מצד שני. סומן כשנוי במחלוקת.' },

  { event_id: 'EV-015', at: '2026-09-13T04:00:00+03:00', kind: 'created',       text: 'דווח כלא מאומת.' },
  { event_id: 'EV-015', at: '2026-09-16T10:00:00+03:00', kind: 'status_change', text: 'אומת גיאוגרפית 3 ימים לאחר האירוע — "אימות מאוחר".' },

  { event_id: 'EV-003', at: '2026-09-16T05:05:00+03:00', kind: 'note', text: 'נוסף פרסום שני, אך זוהה כמצטט את אותו מקור-שורש. לא שודרג לסטטוס מאומת.' },

  { event_id: 'EV-016', at: '2026-09-14T08:30:00+03:00', kind: 'created', text: 'נפתח כאירוע מתמשך. טרם הסתיים.' },
  { event_id: 'EV-016', at: '2026-09-16T09:20:00+03:00', kind: 'source_added', text: 'נוסף אימות גיאולוקציה. האירוע עדיין פתוח.' },

  { event_id: 'EV-017', at: '2026-09-11T22:00:00+03:00', kind: 'created', text: 'נפתח כאירוע מתמשך.' },
  { event_id: 'EV-017', at: '2026-09-14T12:00:00+03:00', kind: 'note',    text: 'נקבע מועד סיום לגל. האירוע נסגר כטווח.' },

  /* --- הורדת סטטוס: המקרה החדש --- */
  { event_id: 'EV-018', at: '2026-09-13T13:00:00+03:00', kind: 'created', text: 'נפתח על בסיס דיווח ראשוני.' },
  { event_id: 'EV-018', at: '2026-09-13T16:30:00+03:00', kind: 'status_change',
    from_level: 'initial', to_level: 'verified',
    text: 'נוסף פרסום שני שנראה עצמאי. עלה לסטטוס מאומת.' },
  { event_id: 'EV-018', at: '2026-09-16T08:10:00+03:00', kind: 'downgrade',
    from_level: 'verified', to_level: 'shared_root',
    text: 'התברר ששני הפרסומים מצטטים את אותו גורם אנונימי. מקור-השורש תוקן, והאימות בוטל אוטומטית.' }
];
