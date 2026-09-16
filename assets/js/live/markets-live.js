/* ============================================================
   markets-live.js — חיבור מקורות שוק אמיתיים
   ------------------------------------------------------------
   מחובר:
     CoinGecko → BTC, ETH, DOGE
     CNBC      → ZIM, NCLH, PFE, S&P 500, נאסד"ק 100, נפט WTI,
                 USD/ILS, EUR/ILS, EUR/USD (שערים חיים)
     ECB       → שקל/לאו (ILS/RON), וגיבוי לשלושת השערים אם CNBC נופל
     NY Fed    → ריבית הפד

   CNBC מסומן "שימוש אישי בלבד". במצב פרסום ציבורי לא פונים אליו בכלל.

   כלל ברזל: אם מקור אמיתי נופל, *לא* חוזרים בשקט למספרי דמה.
   מציגים את הנתון האמיתי האחרון שנשמר + "מקור לא זמין", או "—".

   בדיקה: הוסף לכתובת ?simulate=down כדי לראות איך נראית נפילת מקור.
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var N = window.LiveNet;
  var SIM_DOWN = N.SIM_DOWN, getJSON = N.getJSON, num = N.num, parseNum = N.parseNum;

  window.DB.live = window.DB.live || {};

  function ymd(d) { return d.toISOString().slice(0, 10); }

  /* ---------- CoinGecko ---------- */

  var COINS = { 'BTC': 'bitcoin', 'ETH': 'ethereum', 'DOGE': 'dogecoin' };

  function fetchCrypto() {
    var ids = Object.keys(COINS).map(function (k) { return COINS[k]; }).join(',');
    return getJSON('https://api.coingecko.com/api/v3/simple/price?ids=' + ids +
                   '&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true')
    .then(function (res) {
      var prices = res || {};
      var quotes = {}, oldest = Infinity;

      Object.keys(COINS).forEach(function (sym) {
        var c = prices[COINS[sym]];
        if (!c || num(c.usd) === null) return;
        quotes[sym] = { price: c.usd, change: num(c.usd_24h_change), change_basis: '24 שעות' };
        if (num(c.last_updated_at)) oldest = Math.min(oldest, c.last_updated_at * 1000);
      });

      if (!Object.keys(quotes).length || !isFinite(oldest)) throw new Error('המקור החזיר תשובה ריקה');

      // זמן הנתון = הישן מבין המחירים (לא מייפים)
      return { data: quotes, data_time: new Date(oldest).toISOString() };
    });
  }

  /* ---------- CNBC ---------- */

  /* הסימול אצלנו ← הסימול אצל CNBC */
  var CNBC_SYMBOLS = {
    'ZIM': 'ZIM', 'NCLH': 'NCLH', 'PFE': 'PFE',
    'SPX 500': '.SPX', 'NDX 100': '.NDX',
    'USOIL': '@CL.1',                          // חוזה WTI הקרוב — הקירוב הסטנדרטי ל"נפט"
    'USD/ILS': 'ILS=', 'EUR/ILS': 'EURILS=', 'EUR/USD': 'EUR='
  };

  function fetchCnbc() {
    var ours = Object.keys(CNBC_SYMBOLS);
    var theirs = ours.map(function (k) { return CNBC_SYMBOLS[k]; });
    var url = 'https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=' +
              encodeURIComponent(theirs.join('|')) + '&requestMethod=itv&noform=1&output=json';

    return getJSON(url).then(function (j) {
      var list = (j && j.FormattedQuoteResult && j.FormattedQuoteResult.FormattedQuote) || [];
      if (!Array.isArray(list)) list = [list];

      var bySymbol = {};
      list.forEach(function (q) { if (q && q.symbol) bySymbol[q.symbol] = q; });

      var quotes = {}, oldestIntraday = Infinity;
      var tooOldClose = Date.now() - 4 * 86400000;

      ours.forEach(function (sym) {
        var q = bySymbol[CNBC_SYMBOLS[sym]];
        if (!q || String(q.code) !== '0') return;
        var price = parseNum(q.last);
        if (price === null || price <= 0) return;

        var lt = String(q.last_time || '');
        // תאריך בלי שעה = מחיר סגירה (הבורסה עוד לא נפתחה / כבר נסגרה)
        var isClose = /^\d{4}-\d{2}-\d{2}$/.test(lt);
        var t = isClose
          ? new Date(lt + 'T16:00:00-04:00')
          : new Date(lt.replace(/([+-]\d\d)(\d\d)$/, '$1:$2'));
        if (isNaN(t.getTime())) return;

        quotes[sym] = {
          price: price,
          change: parseNum(q.change_pct),
          change_basis: 'מול הסגירה הקודמת',
          as_of: t.toISOString(),
          closed: isClose,
          delayed: q.realTime === false || q.realTime === 'false',
          // מחיר סגירה ישן מ-4 ימים = משהו לא בסדר, גם אם הבורסה "סגורה"
          old_close: isClose && t.getTime() < tooOldClose
        };
        if (!isClose) oldestIntraday = Math.min(oldestIntraday, t.getTime());
      });

      if (!Object.keys(quotes).length) throw new Error('המקור החזיר תשובה ריקה');

      // גיל המקור נמדד רק לפי מה שנסחר עכשיו. אם הכל סגור — הנתון עדכני כפי שהוא.
      var dataTime = isFinite(oldestIntraday) ? new Date(oldestIntraday) : new Date();
      return { data: quotes, data_time: dataTime.toISOString() };
    });
  }

  /* ---------- ECB (דרך Frankfurter) ---------- */

  function fetchFx() {
    var end = new Date(), start = new Date(Date.now() - 10 * 86400000);
    var url = 'https://api.frankfurter.dev/v1/' + ymd(start) + '..' + ymd(end) + '?base=EUR&symbols=USD,ILS,RON';

    return getJSON(url).then(function (j) {
      var rates = (j && j.rates) || {};
      var dates = Object.keys(rates).sort();
      if (dates.length < 2) throw new Error('אין מספיק ימי מסחר בתשובה');

      var cur = rates[dates[dates.length - 1]], prev = rates[dates[dates.length - 2]];
      ['USD', 'ILS', 'RON'].forEach(function (c) {
        if (!num(cur[c]) || !num(prev[c])) throw new Error('מבנה תשובה לא צפוי');
      });

      function pair(fn) {
        var a = fn(cur), b = fn(prev);
        return { price: a, change: (a / b - 1) * 100, change_basis: 'מול יום העסקים הקודם' };
      }

      var asOf = dates[dates.length - 1];
      return {
        data: {
          'USD/ILS': pair(function (r) { return r.ILS / r.USD; }),  // שער צולב דרך האירו
          'EUR/ILS': pair(function (r) { return r.ILS; }),
          'EUR/USD': pair(function (r) { return r.USD; }),
          'ILS/RON': pair(function (r) { return r.RON / r.ILS; })   // כמה לאו רומני לשקל אחד
        },
        // ECB מפרסם בסביבות 16:00 שעון מרכז אירופה. זה זמן הנתון, בקירוב.
        data_time: asOf + 'T16:00:00+02:00'
      };
    });
  }

  /* ---------- ריבית הפד (NY Fed) ---------- */

  function fetchFed() {
    // שנה אחורה של ימי עסקים — כדי למצוא מתי טווח היעד השתנה לאחרונה
    return getJSON('https://markets.newyorkfed.org/api/rates/unsecured/effr/last/250.json').then(function (j) {
      var rows = ((j && j.refRates) || []).filter(function (r) {
        return r && /^\d{4}-\d{2}-\d{2}$/.test(r.effectiveDate) &&
               num(r.percentRate) !== null && num(r.targetRateFrom) !== null && num(r.targetRateTo) !== null;
      }).sort(function (a, b) { return a.effectiveDate < b.effectiveDate ? -1 : 1; });

      if (!rows.length) throw new Error('המקור החזיר תשובה ריקה');
      var last = rows[rows.length - 1];

      var change = null;
      for (var i = rows.length - 1; i > 0; i--) {
        if (rows[i].targetRateTo !== rows[i - 1].targetRateTo) {
          change = { date: rows[i].effectiveDate,
                     from: [rows[i - 1].targetRateFrom, rows[i - 1].targetRateTo],
                     to:   [rows[i].targetRateFrom, rows[i].targetRateTo] };
          break;
        }
      }

      return {
        data: {
          effr: last.percentRate,
          target: [last.targetRateFrom, last.targetRateTo],
          date: last.effectiveDate,
          last_change: change,
          window_start: rows[0].effectiveDate
        },
        // הריבית של יום מסוים מתפרסמת בבוקר יום העסקים הבא. סוף יום המסחר ≈ זמן הנתון.
        data_time: last.effectiveDate + 'T17:00:00-04:00'
      };
    });
  }

  /* ---------- טעינה ---------- */

  var SOURCES = [
    { key: 'crypto', source_id: 'src_coingecko', fetcher: fetchCrypto },
    { key: 'cnbc',   source_id: 'src_cnbc',      fetcher: fetchCnbc },
    { key: 'fx_ecb', source_id: 'src_ecb',       fetcher: fetchFx },
    { key: 'fed',    source_id: 'src_nyfed',     fetcher: fetchFed }
  ];

  function loadAll() {
    SOURCES.forEach(function (s) {
      // מקור שאסור להציג במצב הפרסום הנוכחי — לא פונים אליו בכלל
      if (!R.isDisplayable(R.sourceById(s.source_id))) return;

      var every = C.cadence[s.key].refresh_every;
      window.LiveCache.get(s.key, s.fetcher, every, SIM_DOWN).then(function (entry) {
        entry.source_id = s.source_id;
        window.DB.live[s.key] = entry;
        document.dispatchEvent(new CustomEvent('live:update', { detail: { key: s.key } }));
      });
    });
  }

  loadAll();
  // בודקים כל דקה. המטמון מחליט אם באמת לפנות למקור.
  setInterval(loadAll, 60 * 1000);
})();
