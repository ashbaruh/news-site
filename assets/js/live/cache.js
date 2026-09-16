/* ============================================================
   cache.js — המטמון המתגלגל
   ------------------------------------------------------------
   "זמן אמת = חוויה, לא שליפה מחדש מאפס בכל טעינה" (מהמפרט).

   איך זה עובד:
   1. כל מקור נשמר בדפדפן עם חותמת "מתי פנינו אליו".
   2. אם עוד לא עבר refresh_every — מציגים את השמור ולא פונים למקור.
   3. אם עבר — פונים. הצליח? שומרים. נכשל? *לא מוחקים* את הנתון הישן,
      אלא מסמנים אותו "מקור לא זמין", כדי שהקורא ידע שהוא ישן.

   הנתונים נשמרים רק בדפדפן של מי שצופה. אם השמירה חסומה
   (חלון גלישה פרטית וכו') — הכל עדיין עובד, רק בלי זיכרון בין טעינות.
   ============================================================ */

window.LiveCache = (function () {
  // מספר הגרסה עולה כשמבנה הנתונים של מקור משתנה, כדי לא להציג מטמון במבנה ישן
  var PREFIX = 'newssite:cache:v3:';
  var memory = {};

  function read(key) {
    try {
      var raw = window.localStorage.getItem(PREFIX + key);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* שמירה חסומה — ממשיכים מהזיכרון */ }
    return memory[key] || null;
  }

  function write(key, entry) {
    memory[key] = entry;
    try { window.localStorage.setItem(PREFIX + key, JSON.stringify(entry)); } catch (e) {}
  }

  function copy(o) {
    var out = {};
    Object.keys(o || {}).forEach(function (k) { out[k] = o[k]; });
    return out;
  }

  /* ----------------------------------------------------------
     get(key, fetcher, refreshEverySec, force)
     fetcher מחזיר Promise של { data, data_time }
     התוצאה: { data, data_time, fetched_at, ok, error, from_cache }
     ---------------------------------------------------------- */
  function get(key, fetcher, refreshEverySec, force) {
    var cached = read(key);
    var age = cached && cached.fetched_at
      ? (Date.now() - new Date(cached.fetched_at).getTime()) / 1000
      : Infinity;

    if (!force && cached && cached.ok && age < refreshEverySec) {
      var hit = copy(cached); hit.from_cache = true;
      return Promise.resolve(hit);
    }

    return fetcher().then(function (res) {
      var entry = { data: res.data, data_time: res.data_time,
                    fetched_at: new Date().toISOString(), ok: true };
      write(key, entry);
      return entry;
    }).catch(function (err) {
      // נכשל: משאירים את הנתון הישן (אם יש), ומסמנים במפורש שהמקור לא זמין
      var entry = cached ? copy(cached) : { data: null, data_time: null, fetched_at: null };
      entry.ok = false;
      entry.error = String((err && err.message) || err);
      entry.failed_at = new Date().toISOString();
      write(key, entry);
      return entry;
    });
  }

  return { get: get, read: read };
})();
