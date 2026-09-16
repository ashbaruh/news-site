/* ============================================================
   net.js — עזרי רשת ובדיקת קלט, משותפים לכל המקורות החיים
   ============================================================ */

window.LiveNet = (function () {
  var SIM_DOWN = /[?&]simulate=down\b/.test(window.location.search);

  function getJSON(url) {
    if (SIM_DOWN) return Promise.reject(new Error('הדמיית תקלה (simulate=down)'));
    var ctrl = ('AbortController' in window) ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 12000);
    return fetch(url, ctrl ? { signal: ctrl.signal } : {}).then(function (r) {
      clearTimeout(timer);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }, function (e) {
      clearTimeout(timer);
      throw e;
    });
  }

  function getText(url) {
    if (SIM_DOWN) return Promise.reject(new Error('הדמיית תקלה (simulate=down)'));
    var ctrl = ('AbortController' in window) ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 15000);
    return fetch(url, ctrl ? { signal: ctrl.signal } : {}).then(function (r) {
      clearTimeout(timer);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }, function (e) {
      clearTimeout(timer);
      throw e;
    });
  }

  /* ----------------------------------------------------------
     קריאת RSS → [{ title, link, date }]
     רק כותרת, קישור ותאריך. תיאורים ותמונות לא נשמרים ולא מוצגים
     (זכויות יוצרים: "קישור בלבד" = כותרת מקורית מינימלית + קישור).
     allowedHost — קישור שלא מוביל לאתר המקור נזרק (הגנה מקישורים זדוניים).
     ---------------------------------------------------------- */
  function getRss(url, allowedHost) {
    return getText(url).then(function (xml) {
      var doc = new DOMParser().parseFromString(xml, 'application/xml');
      if (doc.getElementsByTagName('parsererror').length) throw new Error('RSS לא תקין');
      var items = Array.prototype.slice.call(doc.getElementsByTagName('item'));
      var out = [];
      items.forEach(function (it) {
        function tag(n) { var e = it.getElementsByTagName(n)[0]; return e ? (e.textContent || '').trim() : ''; }
        var title = tag('title').replace(/\s+/g, ' ');
        var link = tag('link');
        var date = new Date(tag('pubDate'));
        var host;
        try { host = new URL(link).hostname; } catch (e) { return; }
        if (!/^https:$/.test(new URL(link).protocol)) return;
        if (allowedHost && !(host === allowedHost || host.slice(-(allowedHost.length + 1)) === '.' + allowedHost)) return;
        if (!title || title.length > 300 || isNaN(date.getTime())) return;
        out.push({ title: title, link: link, date: date.toISOString() });
      });
      if (!out.length) throw new Error('הפיד ריק');
      return out;
    });
  }

  /* בודקים שמה שהגיע הוא באמת מספר תקין — לא מקבלים קלט כמו שהוא */
  function num(v) { return (typeof v === 'number' && isFinite(v)) ? v : null; }

  /* "7,585.73" / "-0.45%" → מספר */
  function parseNum(s) {
    if (typeof s === 'number') return num(s);
    if (typeof s !== 'string') return null;
    var v = parseFloat(s.replace(/[,%\s]/g, ''));
    return isFinite(v) ? v : null;
  }

  /* "45.66M" / "1.2B" / "850K" / "29,641,657" → מספר */
  function parseVolume(s) {
    if (typeof s === 'number') return num(s);
    if (typeof s !== 'string') return null;
    var m = s.replace(/,/g, '').match(/^\s*([\d.]+)\s*([KMB])?\s*$/i);
    if (!m) return null;
    var mult = { K: 1e3, M: 1e6, B: 1e9 }[(m[2] || '').toUpperCase()] || 1;
    var v = parseFloat(m[1]) * mult;
    return isFinite(v) ? v : null;
  }

  /* מריץ משימות אסינכרוניות, לכל היותר `limit` במקביל — כדי לא להציף מקור */
  function pool(items, limit, worker) {
    var results = new Array(items.length), next = 0;
    function run() {
      if (next >= items.length) return Promise.resolve();
      var i = next++;
      return Promise.resolve(worker(items[i], i)).then(
        function (r) { results[i] = r; },
        function (e) { results[i] = { error: e }; }
      ).then(run);
    }
    var runners = [];
    for (var k = 0; k < Math.min(limit, items.length); k++) runners.push(run());
    return Promise.all(runners).then(function () { return results; });
  }

  return { getJSON: getJSON, getText: getText, getRss: getRss, num: num, parseNum: parseNum, parseVolume: parseVolume,
           pool: pool, SIM_DOWN: SIM_DOWN };
})();
