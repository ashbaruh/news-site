/* ============================================================
   athletes.js — מאגר ישויות אישי: ספורטאים ישראלים בעולם
   ------------------------------------------------------------
   לפי המפרט: רשימה שבעל האתר מנהל ומאשר — לא זיהוי אוטומטי מלא.

   הגדרת "ישראלי" (מהמפרט):
     כדורגל  — ישראלי, בכל ליגה בעולם מחוץ לישראל
     כדורסל — ישראלי ב-NBA
   (ESPN מאשר אזרחות ישראלית. מקום לידה לא אומת פרטנית.)

   status:
     'abroad'   — ESPN אישר: משחק בקבוצה מחוץ לישראל. מקבל תוצאות ומשחקים באתר.
     'manual'   — לא נמצא ב-ESPN (ליגות נמוכות). הקבוצה מרשימת ספטמבר 2025, לא אומתה.
     'returned' — ESPN מראה קבוצה ישראלית. חזר לארץ — לא במעקב "ישראלים בחו"ל".
     'inactive' — ESPN מסמן לא פעיל.

   espn_id — המזהה אצל ESPN. בעזרתו האתר מושך תוצאות, משחקים קרובים וסטטיסטיקה.
   club    — הקבוצה כפי ש-ESPN הראה ב-16/09/2026. האתר מתעדכן לבד אם השחקן עובר.

   לעריכה: להוסיף/להסיר שורה. שחקן חדש? צריך espn_id —
   מחפשים את השם ב-espn.com, והמספר מופיע בכתובת: /player/_/id/<המספר>/
   ============================================================ */

window.DB = window.DB || {};

window.DB.athletes = {
  checked_at: '2026-09-16',
  checked_with: 'ESPN',

  players: [
    /* ---------------- NBA ---------------- */
    { name: 'דני אבדיה', name_en: 'Deni Avdija', sport: 'nba', espn_id: '4683021', club: 'פורטלנד טרייל בלייזרס', status: 'abroad' },
    { name: 'בן שרף',    name_en: 'Ben Saraf',   sport: 'nba', espn_id: '5242502', club: 'ברוקלין נטס',          status: 'abroad' },
    { name: 'דני וולף',  name_en: 'Danny Wolf',  sport: 'nba', espn_id: '5107173', club: 'ברוקלין נטס',          status: 'abroad' },

    /* ---------------- כדורגל — בחו"ל, אומת ב-ESPN ---------------- */
    { name: 'אוסקר גלוך',     name_en: 'Oscar Gloukh',     sport: 'soccer', espn_id: '325609', club: 'אייאקס',              country: 'הולנד',     status: 'abroad' },
    { name: 'סתיו למקין',     name_en: 'Stav Lemkin',      sport: 'soccer', espn_id: '340691', club: 'טווענטה',             country: 'הולנד',     status: 'abroad' },
    { name: 'מנור סולומון',   name_en: 'Manor Solomon',    sport: 'soccer', espn_id: '257256', club: 'ווסטהאם',             country: 'אנגליה',    status: 'abroad' },
    { name: 'ענאן חלאילי',    name_en: 'Anan Khalaili',    sport: 'soccer', espn_id: '332648', club: 'קריסטל פאלאס',        country: 'אנגליה',    status: 'abroad' },
    { name: 'דניאל פרץ',      name_en: 'Daniel Peretz',    sport: 'soccer', espn_id: '305926', club: "סאות'המפטון",         country: 'אנגליה',    status: 'abroad' },
    { name: 'רועי רביבו',     name_en: 'Roy Revivo',       sport: 'soccer', espn_id: '323286', club: "אלצ'ה",               country: 'ספרד',      status: 'abroad' },
    { name: 'תאי עבד',        name_en: 'Tai Abed',         sport: 'soccer', espn_id: '324954', club: 'ריאל ויאדוליד',       country: 'ספרד',      status: 'abroad' },
    { name: 'אוריין גורן',    name_en: 'Orian Goren',      sport: 'soccer', espn_id: '416496', club: 'ברצלונה B',           country: 'ספרד',      status: 'abroad' },
    { name: 'עומרי גאנדלמן',  name_en: 'Omri Gandelman',   sport: 'soccer', espn_id: '326642', club: "לצ'ה",                country: 'איטליה',    status: 'abroad' },
    { name: "ג'וזף גנדה",     name_en: 'Joseph Ganda',     sport: 'soccer', espn_id: '307123', club: 'אינגולשטאט',          country: 'גרמניה',    status: 'abroad' },
    { name: 'עומר חנין',      name_en: 'Omer Hanin',       sport: 'soccer', espn_id: '300044', club: 'דואיסבורג',           country: 'גרמניה',    status: 'abroad' },
    { name: "מחמוד ג'אבר",    name_en: 'Mahmoud Jaber',    sport: 'soccer', espn_id: '321174', club: 'סנט אטיין',           country: 'צרפת',      status: 'abroad' },
    { name: 'כארם זועבי',     name_en: 'Karem Zoabi',      sport: 'soccer', espn_id: '386927', club: 'ריו אבה',             country: 'פורטוגל',   status: 'abroad' },
    { name: 'ליאם חרמש',      name_en: 'Liam Hermesh',     sport: 'soccer', espn_id: '389766', club: 'גראצר AK',            country: 'אוסטריה',   status: 'abroad' },
    { name: 'מוחמד אבו פאני', name_en: 'Mohammad Abu Fani', sport: 'soccer', espn_id: '289786', club: 'הכוכב האדום בלגרד',  country: 'סרביה',     status: 'abroad' },
    { name: 'ביברס נאתכו',    name_en: 'Bibras Natcho',    sport: 'soccer', espn_id: '92842',  club: 'פרטיזן בלגרד',        country: 'סרביה',     status: 'abroad', note: 'בן 38 — ייתכן שהמידע ב-ESPN ישן' },
    { name: 'עופרי ארד',      name_en: 'Ofri Arad',        sport: 'soccer', espn_id: '239031', club: 'FCSB',                country: 'רומניה',    status: 'abroad' },
    { name: 'בר לין',         name_en: 'Bar Linn',         sport: 'soccer', espn_id: '335158', club: 'קריבבאס',             country: 'אוקראינה',  status: 'abroad' },
    { name: 'גיא דהן',        name_en: 'Guy Dahan',        sport: 'soccer', espn_id: '323219', club: 'זימברו קישינב',       country: 'מולדובה',   status: 'abroad' },
    { name: 'דיא סבע',        name_en: 'Dia Saba',         sport: 'soccer', espn_id: '168385', club: 'אמד',                 country: 'טורקיה',    status: 'abroad' },
    { name: 'רמזי ספורי',     name_en: 'Ramzi Safuri',     sport: 'soccer', espn_id: '189620', club: 'אנטליאספור',          country: 'טורקיה',    status: 'abroad' },
    { name: 'יהב גורפינקל',   name_en: 'Yahav Gurfinkel',  sport: 'soccer', espn_id: '258216', club: 'אא"ק לרנקה',          country: 'קפריסין',   status: 'abroad' },
    { name: 'יגאל בקר',       name_en: 'Igal Becker',      sport: 'soccer', espn_id: '411774', club: 'אקריטאס כלורקאס',     country: 'קפריסין',   status: 'abroad' },
    { name: 'רועי קהת',       name_en: 'Roy Kehat',        sport: 'soccer', espn_id: '166951', club: 'סומגאיט',             country: "אזרבייג'ן", status: 'abroad' },
    { name: 'מונס דאבור',     name_en: 'Munas Dabbur',     sport: 'soccer', espn_id: '166948', club: 'שבאב אל אהלי',        country: 'איחוד האמירויות', status: 'abroad' },
    { name: 'עדן קארצב',      name_en: 'Eden Karzev',      sport: 'soccer', espn_id: '290457', club: 'שנזן שינפנגצ\'נג',    country: 'סין',       status: 'abroad' },
    { name: 'נטע לביא',       name_en: 'Neta Lavi',        sport: 'soccer', espn_id: '236617', club: "מאצ'ידה זלביה",       country: 'יפן',       status: 'abroad' },
    { name: 'דין דוד',        name_en: 'Dean David',       sport: 'soccer', espn_id: '230243', club: 'יוקוהמה מריני',       country: 'יפן',       status: 'abroad' },
    { name: 'תאי בריבו',      name_en: 'Tai Baribo',       sport: 'soccer', espn_id: '313068', club: 'די.סי. יונייטד',      country: 'ארה"ב',     status: 'abroad' },
    { name: 'ליאל עבדה',      name_en: 'Liel Abada',       sport: 'soccer', espn_id: '312976', club: 'שארלוט',              country: 'ארה"ב',     status: 'abroad' },
    { name: 'עידן טוקלומטי',  name_en: 'Idan Toklomati',   sport: 'soccer', espn_id: '340698', club: 'שארלוט',              country: 'ארה"ב',     status: 'abroad' },
    { name: "דור תורג'מן",    name_en: 'Dor Turgeman',     sport: 'soccer', espn_id: '305755', club: 'ניו אינגלנד רבולושן', country: 'ארה"ב',     status: 'abroad' },
    { name: 'עילי פיינגולד',  name_en: 'Ilay Feingold',    sport: 'soccer', espn_id: '343191', club: 'ניו אינגלנד רבולושן', country: 'ארה"ב',     status: 'abroad' },

    /* ---------------- כדורגל — לא נמצאו ב-ESPN (ליגות נמוכות), לא אומתו ---------------- */
    { name: 'ברק בראונשטיין', name_en: 'Barak Braunshtain', sport: 'soccer', club: 'לי מאן',              country: 'הונג קונג', status: 'manual' },
    { name: 'קייס גאנם',      sport: 'soccer', club: 'שריף טירספול',        country: 'מולדובה',   status: 'manual' },
    { name: 'ניקיטה סטוינוב', sport: 'soccer', club: 'דינמו בוקרשט',        country: 'רומניה',    status: 'manual' },
    { name: 'עבדאללה חליחל',  sport: 'soccer', club: 'דינמו טביליסי',       country: 'גאורגיה',   status: 'manual' },
    { name: 'רועי בן שמעון',  sport: 'soccer', club: 'קבוצה בליגה האלבנית', country: 'אלבניה',    status: 'manual' },
    { name: 'יניב אדרי',      sport: 'soccer', club: 'אשטרלה אמדורה (משנה)', country: 'פורטוגל',  status: 'manual' },

    /* ---------------- חזרו לארץ (ESPN מראה קבוצה ישראלית) — לא במעקב ---------------- */
    { name: 'עומרי גלזר',     sport: 'soccer', espn_id: '239030', club: 'מכבי חיפה',        status: 'returned' },
    { name: 'דן גלזר',        sport: 'soccer', espn_id: '225494', club: 'מכבי תל אביב',     status: 'returned' },
    { name: 'הישאם לאיוס',    sport: 'soccer', espn_id: '326644', club: 'מכבי תל אביב',     status: 'returned' },
    { name: 'גבי קניקובסקי',  sport: 'soccer', espn_id: '299111', club: 'מכבי תל אביב',     status: 'returned' },
    { name: 'תומר יוספי',     sport: 'soccer', espn_id: '289679', club: 'בית"ר ירושלים',    status: 'returned' },
    { name: 'עידן נחמיאס',    sport: 'soccer', espn_id: '308784', club: 'הפועל באר שבע',    status: 'returned' },
    { name: 'אור ישראלוב',    sport: 'soccer', espn_id: '340727', club: 'הפועל תל אביב',    status: 'returned' },
    { name: 'תמיר גלזר',      sport: 'soccer', espn_id: '315191', club: 'הפועל רמת גן',     status: 'returned' },
    { name: 'משה סמל',        sport: 'soccer', espn_id: '407622', club: 'הפועל רמת גן',     status: 'returned' },
    { name: 'בר כהן',         sport: 'soccer', espn_id: '305649', club: 'עירוני טבריה',     status: 'returned' },

    /* ---------------- לא פעיל ---------------- */
    { name: 'דקל קינן',       sport: 'soccer', espn_id: '35363', club: '—', status: 'inactive' }
  ],

  /* שם הקבוצה אצל ESPN בזמן הבדיקה (16/09/2026).
     האתר משווה לשם הנוכחי ב-ESPN — שונה? כנראה שהשחקן עבר קבוצה, ויוצג סימון. */
  espn_team_at_check: {
    '4683021': 'Portland Trail Blazers', '5242502': 'Brooklyn Nets', '5107173': 'Brooklyn Nets',
    '325609': 'Ajax Amsterdam', '340691': 'FC Twente', '257256': 'West Ham United', '332648': 'Crystal Palace',
    '305926': 'Southampton', '323286': 'Elche', '324954': 'Real Valladolid', '416496': 'Barcelona B',
    '326642': 'Lecce', '307123': 'FC Ingolstadt 04', '300044': 'MSV Duisburg', '321174': 'Saint-Étienne',
    '386927': 'Rio Ave', '389766': 'Grazer AK', '289786': 'Red Star Belgrade', '92842': 'Partizan Belgrade',
    '239031': 'FCSB', '335158': 'Kryvbas KR', '323219': 'Zimbru Chisinau', '168385': 'Amed SFK',
    '189620': 'Antalyaspor', '258216': 'AEK Larnaca', '411774': 'Akritas Chlorakas', '166951': 'Sumgayit',
    '166948': 'Shabab Al-Ahli', '290457': 'Shenzhen Xinpengcheng', '236617': 'Machida Zelvia',
    '230243': 'Yokohama F. Marinos', '313068': 'D.C. United', '312976': 'Charlotte FC', '340698': 'Charlotte FC',
    '305755': 'New England Revolution', '343191': 'New England Revolution'
  },

  to_check: [
    'שחקן בשם "אבו פרחי" ערך בכורה ב-MLS (ספורט 1, ספטמבר 2026) — שם מלא וקבוצה לא ידועים'
  ]
};
