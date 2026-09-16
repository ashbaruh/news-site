/* ============================================================
   universe-sp100.js — מאגר המניות לסריקת "התרסקו / טסו"
   ------------------------------------------------------------
   S&P 100: מאה החברות הגדולות בארה"ב.
   למה דווקא הן: המפרט דורש לסנן "מניות שוליות שזזות על מחזור זעיר".
   במאגר של חברות ענק, הבעיה הזו לא קיימת מלכתחילה.

   מקור הרשימה: ויקיפדיה, רשימה נכון ל-22/09/2025.
   נבדק מול CNBC ב-16/09/2026: כל הסימולים קיימים ונסחרים.
   הוסר GOOG — כפילות של GOOGL (שתיהן אלפבית).

   ההרכב משתנה כמה פעמים בשנה. סימול שייצא מהמסחר פשוט ידולג.
   ============================================================ */

window.DB = window.DB || {};

window.DB.universe_sp100 = {
  as_of: '2025-09-22',
  checked_at: '2026-09-16',
  symbols: [
    'AAPL','ABBV','ABT','ACN','ADBE','AMAT','AMD','AMGN','AMT','AMZN',
    'AVGO','AXP','BA','BAC','BKNG','BLK','BMY','BNY','BRK.B','C',
    'CAT','CL','CMCSA','COF','COP','COST','CRM','CSCO','CVS','CVX',
    'DE','DHR','DIS','DUK','EMR','FDX','GD','GE','GEV','GILD',
    'GM','GOOGL','GS','HD','HONA','IBM','INTC','INTU','ISRG','JNJ',
    'JPM','KO','LIN','LLY','LMT','LOW','LRCX','MA','MCD','MDLZ',
    'MDT','META','MMM','MO','MRK','MS','MSFT','MU','NEE','NFLX',
    'NKE','NOW','NVDA','ORCL','PEP','PFE','PG','PLTR','PM','QCOM',
    'RTX','SBUX','SCHW','SO','SPG','T','TMO','TMUS','TSLA','TXN',
    'UBER','UNH','UNP','UPS','USB','V','VZ','WFC','WMT','XOM'
  ]
};
