/* ============================================================
   movers-live.js — "2 שהתרסקו · 2 שטסו"
   ------------------------------------------------------------
   לא "מי זז הכי הרבה היום", אלא "מי זז בצורה חריגה ביחס לעצמו".

   איך:
   1. מושכים מחיר ושינוי יומי ל-100 מניות S&P 100 (2 בקשות).
   2. לוקחים את 12 שירדו הכי הרבה ו-12 שעלו הכי הרבה.
   3. לכל אחת מושכים 90 ימי מסחר אחורה (נשמר 12 שעות).
   4. מחשבים את "התזוזה היומית הרגילה" שלה (סטיית תקן של התשואות).
   5. יחס = התזוזה היום ÷ התזוזה הרגילה.
   6. נכנסת לרשימה רק אם: זזה ≥3% וגם היחס ≥2.5.
   7. מייצרים הסבר בעברית מהמספרים — בלי בינה, בלי ניחושים.

   אם אף מניה לא עברה את הספים — אומרים את זה. לא ממלאים בכוח.
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var N = window.LiveNet;

  var QUOTE_URL = 'https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?requestMethod=itv&noform=1&output=json&symbols=';

  /* ---------- 1. מחירים לכל המאגר ---------- */

  function fetchUniverseQuotes() {
    var syms = window.DB.universe_sp100.symbols;
    var chunks = [];
    for (var i = 0; i < syms.length; i += 50) chunks.push(syms.slice(i, i + 50));

    return Promise.all(chunks.map(function (c) {
      return N.getJSON(QUOTE_URL + encodeURIComponent(c.join('|')));
    })).then(function (responses) {
      var quotes = [];
      responses.forEach(function (j) {
        var list = (j && j.FormattedQuoteResult && j.FormattedQuoteResult.FormattedQuote) || [];
        if (!Array.isArray(list)) list = [list];
        list.forEach(function (q) {
          if (!q || String(q.code) !== '0' || q.type !== 'STOCK') return;
          var price = N.parseNum(q.last), change = N.parseNum(q.change_pct);
          var lt = String(q.last_time || '');
          var sessionDate = lt.slice(0, 10);
          if (price === null || price <= 0 || change === null || !/^\d{4}-\d{2}-\d{2}$/.test(sessionDate)) return;
          quotes.push({
            sym: q.symbol,
            name: q.name || q.symbol,
            price: price,
            change: change,
            volume: N.parseVolume(q.volume),
            closed: /^\d{4}-\d{2}-\d{2}$/.test(lt),     // תאריך בלי שעה = מחיר סגירה
            session_date: sessionDate,
            as_of: lt
          });
        });
      });
      if (quotes.length < 20) throw new Error('התקבלו רק ' + quotes.length + ' מניות — תשובה חלקית מדי');
      return quotes;
    });
  }

  /* ---------- 3. היסטוריה למניה אחת (נשמרת במטמון) ---------- */

  function stamp(d) { return d.toISOString().slice(0, 10).replace(/-/g, '') + '000000'; }

  function fetchHistory(sym) {
    var end = new Date(), start = new Date(Date.now() - 150 * 86400000);   // ~100 ימי מסחר
    var url = 'https://ts-api.cnbc.com/harmony/app/bars/' + encodeURIComponent(sym) +
              '/1D/' + stamp(start) + '/' + stamp(end) + '/adjusted/EST5EDT.json';

    return N.getJSON(url).then(function (j) {
      var raw = (j && j.barData && j.barData.priceBars) || [];
      var bars = raw.map(function (b) {
        var t = String(b.tradeTime || '');
        return {
          d: t.slice(0, 4) + '-' + t.slice(4, 6) + '-' + t.slice(6, 8),
          c: N.parseNum(b.close),
          v: N.num(b.volume)
        };
      }).filter(function (b) { return /^\d{4}-\d{2}-\d{2}$/.test(b.d) && b.c !== null && b.c > 0; });

      if (bars.length < 40) throw new Error('היסטוריה קצרה מדי (' + bars.length + ' ימים)');
      return { data: bars, data_time: bars[bars.length - 1].d + 'T16:00:00-04:00' };
    });
  }

  function historyFor(sym) {
    return window.LiveCache.get('hist:' + sym, function () { return fetchHistory(sym); },
                                C.cadence.movers.history_every)
      .then(function (e) { if (!e.data) throw new Error(e.error || 'אין היסטוריה'); return e.data; });
  }

  /* ---------- 4-5. ניתוח ---------- */

  function stdev(a) {
    var m = a.reduce(function (s, x) { return s + x; }, 0) / a.length;
    return Math.sqrt(a.reduce(function (s, x) { return s + (x - m) * (x - m); }, 0) / (a.length - 1));
  }

  function analyze(q, bars) {
    // הבסיס להשוואה: רק ימים *לפני* יום המסחר שנמדד
    var base = bars.filter(function (b) { return b.d < q.session_date; });
    if (base.length < 31) return null;

    var rets = [];
    for (var i = 1; i < base.length; i++) rets.push(base[i].c / base[i - 1].c - 1);
    var r90 = rets.slice(-90);
    var typical = stdev(r90) * 100;                    // "התזוזה היומית הרגילה", באחוזים
    if (!(typical > 0)) return null;

    var last30 = base.slice(-30);
    var hi30 = Math.max.apply(null, last30.map(function (b) { return b.c; }));
    var lo30 = Math.min.apply(null, last30.map(function (b) { return b.c; }));
    var vols = last30.map(function (b) { return b.v; }).filter(function (v) { return v !== null && v > 0; });
    var avgVol = vols.length >= 20 ? vols.reduce(function (s, v) { return s + v; }, 0) / vols.length : null;

    // נפח היום: אם יום המסחר כבר קיים בהיסטוריה — לוקחים משם, כדי להשוות תפוחים לתפוחים
    // (נפח ה"ציטוט" נספר אחרת מנפח הנרות ההיסטוריים). במסחר חי אין ברירה — נפח חלקי מהציטוט.
    var sessionBar = bars.filter(function (b) { return b.d === q.session_date; })[0];
    var todayVol = (sessionBar && sessionBar.v) ? sessionBar.v : q.volume;

    return {
      sym: q.sym, name: q.name, price: q.price, change: q.change,
      typical: typical,
      ratio: Math.abs(q.change) / typical,
      days: r90.length,
      vol_ratio: (avgVol && todayVol) ? todayVol / avgVol : null,
      partial_volume: !q.closed,
      break_low: q.price < lo30,
      break_high: q.price > hi30,
      closed: q.closed
    };
  }

  /* ---------- 7. הסבר בעברית ---------- */

  function fx(v, d) { return v.toFixed(d); }
  var L = window.Freshness.ltr;   // שמספרים ואחוזים לא יתהפכו בתוך המשפט העברי

  function explain(a) {
    var down = a.change < 0;
    var parts = [];
    parts.push((down ? 'ירידה' : 'עלייה') + ' של ' + L(fx(Math.abs(a.change), 2) + '%') + ' — פי ' + fx(a.ratio, 1) +
               ' מהתזוזה היומית הרגילה שלה (' + L('±' + fx(a.typical, 2) + '%') + ' ב-' + a.days + ' ימי המסחר האחרונים).');

    if (a.vol_ratio !== null) {
      parts.push(a.partial_volume
        ? 'נפח מסחר עד עכשיו: פי ' + fx(a.vol_ratio, 1) + ' מממוצע של יום שלם.'
        : 'נפח מסחר פי ' + fx(a.vol_ratio, 1) + ' מהממוצע של 30 יום' +
          (a.vol_ratio >= 1.5 ? ' — המהלך מגובה במסחר ער.' : a.vol_ratio < 0.8 ? ' — מסחר דליל יחסית, זהירות בפרשנות.' : '.'));
    }
    var verb = a.closed ? 'נסגרה' : 'נסחרת';
    if (a.break_low)  parts.push(verb + ' מתחת לשפל של 30 הימים האחרונים.');
    if (a.break_high) parts.push(verb + ' מעל לשיא של 30 הימים האחרונים.');
    return parts.join(' ');
  }

  /* ---------- הרכבה ---------- */

  function fetchMovers() {
    var S = C.movers;
    return fetchUniverseQuotes().then(function (quotes) {
      var byChange = quotes.slice().sort(function (a, b) { return a.change - b.change; });
      var losers  = byChange.filter(function (q) { return q.change < 0; }).slice(0, S.candidates_per_side);
      var gainers = byChange.filter(function (q) { return q.change > 0; }).reverse().slice(0, S.candidates_per_side);
      var candidates = losers.concat(gainers);

      return N.pool(candidates, 4, function (q) {
        return historyFor(q.sym).then(function (bars) { return analyze(q, bars); });
      }).then(function (results) {
        var analyzed = [], missing = [];
        results.forEach(function (r, i) {
          if (r && !r.error) analyzed.push(r); else missing.push(candidates[i].sym);
        });

        function pick(dir) {
          var side = analyzed.filter(function (a) { return dir < 0 ? a.change < 0 : a.change > 0; })
                             .sort(function (a, b) { return b.ratio - a.ratio; });
          var passed = side.filter(function (a) { return Math.abs(a.change) >= S.min_move && a.ratio >= S.min_ratio; });
          passed.forEach(function (a) { a.why = explain(a); });
          return {
            list: passed.slice(0, S.show_per_side),
            // הכי קרובה לסף — כדי להסביר למה הרשימה ריקה, אם היא ריקה
            nearest: side.length ? { sym: side[0].sym, change: side[0].change, ratio: side[0].ratio } : null
          };
        }

        var crashed = pick(-1), flew = pick(1);
        var closed = quotes.every(function (q) { return q.closed; });
        var sessionDate = quotes.map(function (q) { return q.session_date; }).sort().pop();
        var intraday = quotes.filter(function (q) { return !q.closed; })
                             .map(function (q) { return new Date(q.as_of.replace(/([+-]\d\d)(\d\d)$/, '$1:$2')).getTime(); })
                             .filter(function (t) { return isFinite(t); });

        return {
          data: {
            crashed: crashed.list, flew: flew.list,
            nearest_down: crashed.nearest, nearest_up: flew.nearest,
            scanned: quotes.length, analyzed: analyzed.length, missing: missing,
            session_date: sessionDate, all_closed: closed
          },
          data_time: intraday.length ? new Date(Math.min.apply(null, intraday)).toISOString() : new Date().toISOString()
        };
      });
    });
  }

  /* ---------- טעינה ---------- */

  function load() {
    if (!R.isDisplayable(R.sourceById('src_cnbc'))) return;   // מקור חסום — לא פונים
    window.LiveCache.get('movers', fetchMovers, C.cadence.movers.refresh_every, N.SIM_DOWN).then(function (entry) {
      entry.source_id = 'src_cnbc';
      window.DB.live.movers = entry;
      document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'movers' } }));
    });
  }

  window.DB.live = window.DB.live || {};
  load();
  setInterval(load, 60 * 1000);
})();
