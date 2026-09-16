/* ============================================================
   athletes.js — מאגר ישויות אישי: ספורטאים ישראלים בעולם
   ------------------------------------------------------------
   לפי המפרט: רשימה שבעל האתר מנהל ומאשר — לא זיהוי אוטומטי.
   מונע טעויות כששחקן עובר קבוצה.

   הגדרת "ישראלי" (מהמפרט):
     כדורגל  — שחקן שנולד בישראל, בכל ליגה בעולם (לא ליגת העל)
     כדורסל — ישראלי ששחק ב-NBA

   status:
     'confirmed'  — הופיע בחדשות בספטמבר 2026 עם הקבוצה הנוכחית
     'unverified' — מרשימת הלגיונרים של ספטמבר 2025. ייתכן שעבר קבוצה,
                    חזר לארץ, או פרש. לבדוק לפני שמסתמכים.
   club_verified: false — השחקן פעיל, אבל הקבוצה עצמה לא אומתה.

   מקורות: ספורט 1 "לגיונרים" (ספטמבר 2026), וואלה "ישראלים ב-NBA"
           (ספטמבר 2026), "חולה על כדורגל" מפת הלגיונרים (07/09/2025).
   ============================================================ */

window.DB = window.DB || {};

window.DB.athletes = {
  checked_at: '2026-09-16',

  players: [
    /* ---------------- NBA ---------------- */
    { name: 'דני אבדיה', sport: 'כדורסל', league: 'NBA', club: 'פורטלנד טרייל בלייזרס', country: 'ארה"ב', status: 'confirmed' },
    { name: 'בן שרף',    sport: 'כדורסל', league: 'NBA', club: 'ברוקלין נטס',          country: 'ארה"ב', status: 'confirmed' },
    { name: 'דני וולף',  sport: 'כדורסל', league: 'NBA', club: 'ברוקלין נטס',          country: 'ארה"ב', status: 'confirmed' },

    /* ---------------- כדורגל — אומת ספטמבר 2026 ---------------- */
    { name: 'אוסקר גלוך',   sport: 'כדורגל', league: 'ארדיביזי',    club: 'אייאקס',         country: 'הולנד',  status: 'confirmed' },
    { name: 'מנור סולומון', sport: 'כדורגל', league: 'פרמייר ליג',  club: 'ווסטהאם',        country: 'אנגליה', status: 'confirmed' },
    { name: 'ענאן חלאילי',  sport: 'כדורגל', league: 'פרמייר ליג',  club: 'קריסטל פאלאס',   country: 'אנגליה', status: 'confirmed' },
    { name: 'דניאל פרץ',    sport: 'כדורגל', league: 'אנגליה',      club: "סאות'המפטון",    country: 'אנגליה', status: 'confirmed' },
    { name: 'רועי רביבו',   sport: 'כדורגל', league: 'לה ליגה',     club: "אלצ'ה",          country: 'ספרד',   status: 'confirmed' },
    { name: 'עומרי גאנדלמן', sport: 'כדורגל', league: 'סרייה A',    club: "לצ'ה",           country: 'איטליה', status: 'confirmed' },
    { name: 'תאי בריבו',    sport: 'כדורגל', league: 'MLS',         club: 'די.סי. יונייטד', country: 'ארה"ב',  status: 'confirmed' },
    { name: 'ליאל עבדה',    sport: 'כדורגל', league: 'MLS',         club: 'שארלוט',         country: 'ארה"ב',  status: 'confirmed', club_verified: false },
    { name: 'עידן טוקלומטי', sport: 'כדורגל', league: 'MLS',        club: 'שארלוט',         country: 'ארה"ב',  status: 'confirmed', club_verified: false },

    /* ---------------- כדורגל — לבדיקה (רשימת ספטמבר 2025) ---------------- */
    { name: "ג'וזף גנדה",     sport: 'כדורגל', club: 'הנובר 96',              country: 'גרמניה',     status: 'unverified' },
    { name: 'עומר חנין',      sport: 'כדורגל', club: 'דואיסבורג',             country: 'גרמניה',     status: 'unverified' },
    { name: 'סתיו למקין',     sport: 'כדורגל', club: 'טווענטה',               country: 'הולנד',      status: 'unverified' },
    { name: 'תאי עבד',        sport: 'כדורגל', club: 'PSV (משנה)',            country: 'הולנד',      status: 'unverified' },
    { name: 'תמיר גלזר',      sport: 'כדורגל', club: 'איביסה',                country: 'ספרד',       status: 'unverified' },
    { name: 'אוריין גורן',    sport: 'כדורגל', club: 'ברצלונה (נוער)',        country: 'ספרד',       status: 'unverified' },
    { name: 'מוחמד אבו פאני', sport: 'כדורגל', club: 'פרנצווארוש',            country: 'הונגריה',    status: 'unverified' },
    { name: 'גבי קניקובסקי',  sport: 'כדורגל', club: 'פרנצווארוש',            country: 'הונגריה',    status: 'unverified' },
    { name: 'משה סמל',        sport: 'כדורגל', club: 'פושקאש אקדמיה',         country: 'הונגריה',    status: 'unverified' },
    { name: 'כארם זועבי',     sport: 'כדורגל', club: 'ריו אבה',               country: 'פורטוגל',    status: 'unverified' },
    { name: 'אור ישראלוב',    sport: 'כדורגל', club: 'קבוצה בליגה הפורטוגלית', country: 'פורטוגל',   status: 'unverified' },
    { name: 'יניב אדרי',      sport: 'כדורגל', club: 'אשטרלה אמדורה (משנה)',  country: 'פורטוגל',    status: 'unverified' },
    { name: 'בר לין',         sport: 'כדורגל', club: 'קבוצה בליגה האוקראינית', country: 'אוקראינה',  status: 'unverified' },
    { name: 'רועי בן שמעון',  sport: 'כדורגל', club: 'קבוצה בליגה האלבנית',   country: 'אלבניה',     status: 'unverified' },
    { name: 'ניתאי גריס',     sport: 'כדורגל', club: 'אוליביירנסה',           country: 'פורטוגל',    status: 'unverified' },
    { name: 'קייס גאנם',      sport: 'כדורגל', club: 'שריף טירספול',          country: 'מולדובה',    status: 'unverified' },
    { name: 'ליאם חרמש',      sport: 'כדורגל', club: 'שריף טירספול',          country: 'מולדובה',    status: 'unverified' },
    { name: 'גיא דהן',        sport: 'כדורגל', club: 'זימברו קישינב',         country: 'מולדובה',    status: 'unverified' },
    { name: 'עומרי גלזר',     sport: 'כדורגל', club: 'הכוכב האדום בלגרד',     country: 'סרביה',      status: 'unverified' },
    { name: 'ביברס נאתכו',    sport: 'כדורגל', club: 'פרטיזן בלגרד',          country: 'סרביה',      status: 'unverified' },
    { name: 'דיא סבע',        sport: 'כדורגל', club: 'אדנאספור',              country: 'טורקיה',     status: 'unverified' },
    { name: 'רמזי ספורי',     sport: 'כדורגל', club: 'אנטליאספור',            country: 'טורקיה',     status: 'unverified' },
    { name: 'עופרי ארד',      sport: 'כדורגל', club: 'קאיראט אלמאטי',         country: 'קזחסטן',     status: 'unverified' },
    { name: 'דן גלזר',        sport: 'כדורגל', club: 'קאיראט אלמאטי',         country: 'קזחסטן',     status: 'unverified' },
    { name: 'תומר יוספי',     sport: 'כדורגל', club: 'פוליסיה ז\'יטומיר',     country: 'אוקראינה',   status: 'unverified' },
    { name: 'הישאם לאיוס',    sport: 'כדורגל', club: 'לבדיאקוס',              country: 'יוון',       status: 'unverified' },
    { name: 'רועי קהת',       sport: 'כדורגל', club: 'סומגאיט',               country: "אזרבייג'ן",  status: 'unverified' },
    { name: 'בר כהן',         sport: 'כדורגל', club: 'אראז נחצ\'יבאן',        country: "אזרבייג'ן",  status: 'unverified' },
    { name: "מחמוד ג'אבר",    sport: 'כדורגל', club: 'סנט אטיין',             country: 'צרפת',       status: 'unverified' },
    { name: 'עידן נחמיאס',    sport: 'כדורגל', club: 'לודוגורץ',              country: 'בולגריה',    status: 'unverified' },
    { name: 'ניקיטה סטוינוב', sport: 'כדורגל', club: 'דינמו בוקרשט',          country: 'רומניה',     status: 'unverified' },
    { name: 'יגאל בקר',       sport: 'כדורגל', club: 'אקריטאס',               country: 'קפריסין',    status: 'unverified' },
    { name: 'עבדאללה חליחל',  sport: 'כדורגל', club: 'דינמו טביליסי',         country: 'גאורגיה',    status: 'unverified' },
    { name: 'מונס דאבור',     sport: 'כדורגל', club: 'שבאב אל אהלי',          country: 'איחוד האמירויות', status: 'unverified' },
    { name: 'עדן קארצב',      sport: 'כדורגל', club: 'שנזן פנג סיטי',         country: 'סין',        status: 'unverified' },
    { name: 'יהב גורפינקל',   sport: 'כדורגל', club: "צ'נגדו",                country: 'סין',        status: 'unverified' },
    { name: 'דין דוד',        sport: 'כדורגל', club: 'יוקוהמה מריני',         country: 'יפן',        status: 'unverified' },
    { name: 'נטע לביא',       sport: 'כדורגל', club: "מאצ'ידה זלביה",         country: 'יפן',        status: 'unverified' },
    { name: 'ברק בראונשטיין', sport: 'כדורגל', club: 'לי מאן',                country: 'הונג קונג',  status: 'unverified' },
    { name: "דור תורג'מן",    sport: 'כדורגל', club: 'ניו אינגלנד רבולושן',   country: 'ארה"ב',      status: 'unverified' },
    { name: 'עילי פיינגולד',  sport: 'כדורגל', club: 'ניו אינגלנד רבולושן',   country: 'ארה"ב',      status: 'unverified' },
    { name: 'דקל קינן',       sport: 'כדורגל', club: 'לוס אנג\'לס פורס',      country: 'ארה"ב',      status: 'unverified' }
  ],

  /* שמות שעלו בחדשות ולא ברור מי הם בדיוק — לא נכנסו לרשימה */
  to_check: [
    'שחקן בשם "אבו פרחי" ערך בכורה ב-MLS (ספורט 1, ספטמבר 2026) — שם מלא וקבוצה לא ידועים'
  ]
};
