/* ============================================================
   lifestyle-live.js — רכב + תיירות, מפידי RSS של וואלה
   ------------------------------------------------------------
   רכב           ← "מבחני רכב" (כולו רלוונטי לשוק הישראלי)
   יעדים         ← "טיולים בעולם"
   חדשות תעופה   ← "חדשות תיירות", מסונן: מילת תעופה *וגם* קשר לישראל
   מבצעים חריגים ← אין עדיין מקור. נאמר במפורש באתר.

   מוצג: כותרת מקורית + תאריך + קישור. בלי תקצירים ובלי תמונות.
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var N = window.LiveNet;

  var FEEDS = {
    cars:         'https://rss.walla.co.il/feed/4701',
    destinations: 'https://rss.walla.co.il/feed/779',
    travel_news:  'https://rss.walla.co.il/feed/2500',
    tech_reviews: 'https://rss.walla.co.il/feed/4001',
    tech_news:    'https://rss.walla.co.il/feed/4000'
  };

  /* קולנוע ביתי / סטריאו: סקירות ומוצרים. לא מבצעים על ציוד (לפי המפרט). */
  var AV = /טלוויזי|מסך|רמקול|סאונד|אודיו|אוזני|מקרן|סטריאו|OLED|QLED|מגבר|Dolby|דולבי|Sonos|סונוס|Bose|הום סינמה|קולנוע ביתי|סאונדבר|Soundbar|היי-פיי|Hi-Fi/i;
  var AV_EXCLUDE = /מבצע|הנחה|דיל|בזול|קופון|בשיתוף|בחסות|תחקיר|מרגל|פרטיות|פריצה|האקר/;

  /* סינון תעופה. כותרת נכנסת אם:
     א. היא מזכירה חברת תעופה ישראלית / נתב"ג / קו חדש — זה כבר מספיק, או
     ב. יש בה מילת תעופה *וגם* קשר לישראל.
     ובכל מקרה — לא אם זו כתבת רכילות על שכר או תקרית בטיסה.
     "טייס שלא הצליח לנחות" בחו"ל — לא נכנס. "ארקיע פותחת קו לפיליפינים" — נכנס. */
  var ISRAELI_ROUTES = /נתב["״]ג|אל על|ארקיע|ישראייר|פותחת קו|קו ישיר|קו חדש|טיסות ישירות/;
  var AVIATION = /טיס|תעופה|איירליינס|אירליינס|איירווייז|airlines|המראה|נמל התעופה|שדה התעופה/i;
  var ISRAEL_LINK = /ישראל|ישראלים|חוזרת|מבטלת|מחדשת/;
  var NOISE = /מרוויח|משכורת|שכר |השתולל|הודבק|נשך|צפו/;

  function isAviation(title) {
    if (NOISE.test(title)) return false;
    return ISRAELI_ROUTES.test(title) || (AVIATION.test(title) && ISRAEL_LINK.test(title));
  }

  function recent(items, days) {
    var cutoff = Date.now() - days * 86400000;
    return items.filter(function (i) { return new Date(i.date).getTime() >= cutoff; });
  }

  /* סקירות + חדשות טק, מסוננות לאודיו/וידאו, בלי כפילויות, חצי שנה אחורה */
  function avItems(data) {
    var seen = {}, all = [];
    (data.tech_reviews || []).concat(data.tech_news || []).forEach(function (i) {
      if (seen[i.link] || !AV.test(i.title) || AV_EXCLUDE.test(i.title)) return;
      seen[i.link] = true;
      all.push(i);
    });
    all.sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    return recent(all, 180).slice(0, 3);
  }

  function fetchFeeds() {
    var keys = Object.keys(FEEDS);
    return N.pool(keys, 3, function (k) { return N.getRss(FEEDS[k], 'walla.co.il'); }).then(function (res) {
      var data = {}, failed = [];
      keys.forEach(function (k, i) {
        if (res[i] && !res[i].error) data[k] = res[i];
        else failed.push(k);
      });
      if (failed.length === keys.length) throw new Error('כל הפידים נכשלו');

      var out = {
        cars: data.cars ? data.cars.slice(0, 4) : null,
        destinations: data.destinations ? data.destinations.slice(0, 3) : null,
        aviation: data.travel_news
          ? recent(data.travel_news.filter(function (i) { return isAviation(i.title); }), 21).slice(0, 3)
          : null,
        av: (data.tech_reviews || data.tech_news) ? avItems(data) : null,
        failed: failed
      };
      return { data: out, data_time: new Date().toISOString() };
    });
  }

  function load() {
    if (!R.isDisplayable(R.sourceById('src_walla'))) return;
    window.LiveCache.get('feeds_lifestyle', fetchFeeds, C.cadence.feeds.refresh_every, N.SIM_DOWN).then(function (entry) {
      entry.source_id = 'src_walla';
      window.DB.live.lifestyle = entry;
      document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'lifestyle' } }));
    });
  }

  window.DB.live = window.DB.live || {};
  load();
  setInterval(load, 5 * 60 * 1000);
})();
