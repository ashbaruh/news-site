/* ============================================================
   positive-live.js — תוכן חיובי: התקדמות רפואית
   ------------------------------------------------------------
   מקור: וואלה "חדשות בריאות". הפיד מעורבב — אזהרות, סיפורי מחלה,
   ותוכן ממומן — ולכן יש סינון בשלושה שלבים:

   1. ממומן ("בשיתוף", "בחסות") → נזרק תמיד.
      המפרט דורש הפרדה בין תוכן אובייקטיבי למקודם.
   2. שלילי (אזהרה, מוות, טפיל...) → נזרק.
   3. חיובי (אושרה, פריצת דרך, תקווה...) → נכנס.

   תיוג — כלל שמרני בכוונה:
     ✅ אושר     — רק אם הכותרת אומרת במפורש שמשהו אושר או קיים כבר.
     🔬 בבדיקה   — כל השאר.
   עדיף להבטיח פחות מדי מאשר ליצור ציפיות שווא.

   זה סינון לפי מילות מפתח, בלי בינה. כשהמק יחובר — יוחלף בסיווג אמיתי.
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var N = window.LiveNet;

  var FEED = 'https://rss.walla.co.il/feed/578';

  var SPONSORED = /בשיתוף|בחסות|תוכן שיווקי|פרסומי|שיתוף פעולה/;
  var NEGATIVE  = /מזהיר|אזהרה|סכנה|מסוכן|נקשר ל|מוות|מותו|נפטר|התאבד|משלמים את המחיר|משלמות את המחיר|קורבן|טפיל|אמבה|פשע|סירב|מחסור|קריסה|שערורי|חשד|תחקיר|מדאיג|מבהיל|חולה ב|חליתי|סוג הגידול/;
  /* רק התקדמות רפואית: תרופות, טיפולים, מחקרים, אישורים.
     לא סיפורים אישיים מרגשים ("חיים חדשים", "תקווה") — הם לא "טיפול בדרך",
     ותג 🔬 עליהם רק מבלבל. לא הטבות ושירותים ("ללא עלות"). */
  var POSITIVE  = /פריצת דרך|טיפול חדש|הטיפול החדש|תרופה חדשה|התרופה החדשה|אושרה תרופה|גלולת|אושרה|אושר |אישר|קיבלה אישור|לראשונה|מחקר חדש|המחקר שגילה|גילו|מגלה|נכנסה לסל|נכנס לסל|סל התרופות|מכפילה|דוחים|מונע|מונעת|זמינה בישראל/;
  var APPROVED  = /אושרה|אושר |אישר|קיבלה אישור|נכנסה לסל|נכנס לסל|סל התרופות|כבר בשימוש/;

  function classify(title) {
    if (SPONSORED.test(title)) return { keep: false, reason: 'sponsored' };
    if (NEGATIVE.test(title))  return { keep: false, reason: 'negative' };
    if (!POSITIVE.test(title)) return { keep: false, reason: 'neutral' };
    // "תהיה זמינה" = עוד לא. עתיד אף פעם לא מקבל ✅.
    var approved = APPROVED.test(title) && !/תהיה|יהיה|צפוי|צפויה|בקרוב/.test(title);
    return { keep: true, tag: approved ? 'approved' : 'research' };
  }

  function fetchPositive() {
    return N.getRss(FEED, 'walla.co.il').then(function (items) {
      var cutoff = Date.now() - 45 * 86400000;
      var counts = { sponsored: 0, negative: 0, neutral: 0 };
      var kept = [];
      items.forEach(function (i) {
        var c = classify(i.title);
        if (!c.keep) { counts[c.reason]++; return; }
        if (new Date(i.date).getTime() < cutoff) return;
        kept.push({ title: i.title, link: i.link, date: i.date, tag: c.tag });
      });
      return {
        data: { medical: kept.slice(0, 4), scanned: items.length, dropped: counts },
        data_time: new Date().toISOString()
      };
    });
  }

  function load() {
    if (!R.isDisplayable(R.sourceById('src_walla'))) return;
    window.LiveCache.get('feeds_positive', fetchPositive, C.cadence.feeds.refresh_every, N.SIM_DOWN).then(function (entry) {
      entry.source_id = 'src_walla';
      window.DB.live.positive = entry;
      document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'positive' } }));
    });
  }

  window.DB.live = window.DB.live || {};
  load();
  setInterval(load, 5 * 60 * 1000);
})();
