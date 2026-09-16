/* ============================================================
   economy-live.js — כותרות כלכלה מוואלה (עברית, חי מהדפדפן)
   ------------------------------------------------------------
   וואלה כסף — חדשות, כסף עולמי, קריפטו.
   מתמזג באתר עם כותרות גלובס שמגיעות מהמשימה בענן,
   ומסונן לפי מה שנוגע לרשימת המכשירים (config.market_keywords).
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var N = window.LiveNet;

  var FEEDS = [
    'https://rss.walla.co.il/feed/557',     // חדשות כסף
    'https://rss.walla.co.il/feed/112',     // כסף עולמי
    'https://rss.walla.co.il/feed/13373'    // קריפטו
  ];

  function fetchEconomy() {
    return N.pool(FEEDS, 3, function (u) { return N.getRss(u, 'walla.co.il'); }).then(function (res) {
      var seen = {}, all = [], failed = 0;
      res.forEach(function (r) {
        if (!r || r.error) { failed++; return; }
        r.forEach(function (i) {
          if (seen[i.link]) return;
          seen[i.link] = true;
          all.push(i);
        });
      });
      if (failed === FEEDS.length) throw new Error('כל הפידים נכשלו');
      all.sort(function (a, b) { return a.date < b.date ? 1 : -1; });
      return { data: { items: all.slice(0, 60), failed: failed }, data_time: new Date().toISOString() };
    });
  }

  function load() {
    if (!R.isDisplayable(R.sourceById('src_walla'))) return;
    window.LiveCache.get('feeds_economy', fetchEconomy, 30 * 60, N.SIM_DOWN).then(function (entry) {
      entry.source_id = 'src_walla';
      window.DB.live.economy = entry;
      document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'economy' } }));
    });
  }

  window.DB.live = window.DB.live || {};
  load();
  setInterval(load, 5 * 60 * 1000);
})();
