/* ============================================================
   freshness.js — תג "עודכן לאחרונה" + מצב "מידע מיושן"
   ------------------------------------------------------------
   4 מצבים מפורשים לפי המפרט:
     עדכני / מתעכב / מיושן / מקור לא זמין

   עיקרון: הגיל נמדד לפי *זמן הנתון עצמו*, לא לפי מתי פנינו למקור.
   אם פנינו למקור לפני דקה והוא החזיר מחיר מלפני שעה — המחיר בן שעה.
   ============================================================ */

window.Freshness = (function () {

  /* שני שעונים:
     - נתוני דמה: "עכשיו" מקובע, כדי שהתגים שלהם יישארו יציבים.
     - נתונים חיים: השעון האמיתי. */
  var DEMO_NOW = new Date('2026-09-16T10:05:00+03:00');

  function now(live) { return live ? new Date() : DEMO_NOW; }

  /* גיל בשניות, בלי שבת-ראשון (לפי UTC) */
  function businessSeconds(fromIso, ref) {
    var t = new Date(fromIso).getTime(), end = ref.getTime(), sec = 0;
    var HOUR = 3600 * 1000;
    while (t < end) {
      var step = Math.min(HOUR, end - t);
      var day = new Date(t).getUTCDay();          // 0 = ראשון, 6 = שבת
      if (day !== 0 && day !== 6) sec += step / 1000;
      t += step;
    }
    return sec;
  }

  /* ----------------------------------------------------------
     החישוב הכללי.
     cadenceKey — מפתח ב-config.cadence
     dataIso    — זמן הנתון
     ok         — false = הפנייה האחרונה למקור נכשלה
     live       — true = נתון אמיתי (שעון אמיתי)
     ---------------------------------------------------------- */
  function evaluate(cadenceKey, dataIso, ok, live) {
    var cfg = window.DB.config.cadence[cadenceKey];
    var ref = now(live);

    if (!dataIso) {
      if (ok === false) return { level: 'down', label: 'מקור לא זמין', time: '—', age_text: 'אין נתון שמור' };
      return { level: 'loading', label: 'טוען…', time: '—', age_text: '' };
    }

    var ageText = ago(dataIso, live);
    if (ok === false) {
      return { level: 'down', label: 'מקור לא זמין', time: hhmm(dataIso),
               age_text: 'הנתון האחרון שנשמר: ' + ageText };
    }
    if (!cfg) return { level: 'unknown', label: 'לא ידוע', time: hhmm(dataIso), age_text: ageText };

    var ageSec = cfg.business_days ? businessSeconds(dataIso, ref) : (ref - new Date(dataIso)) / 1000;
    var level = 'fresh', label = 'עדכני';
    if (ageSec > cfg.stale_at)     { level = 'stale';   label = 'מידע מיושן'; }
    else if (ageSec > cfg.max_age) { level = 'delayed'; label = 'מתעכב'; }

    return { level: level, label: label, time: hhmm(dataIso), age_text: ageText };
  }

  /* תג לפינה לפי רשומה ב-DB.freshness (נתוני הדמה) */
  function state(key) {
    var d = (window.DB.freshness || {})[key];
    if (!d) return { level: 'unknown', label: 'לא ידוע', time: '—', age_text: '' };
    return evaluate(key, d.updated_at, d.ok, false);
  }

  /* מבין כמה מצבים — הגרוע ביותר. כך תג הפינה לא "מייפה" מקור שנפל. */
  var RANK = { fresh: 0, loading: 1, unknown: 1, delayed: 2, stale: 3, down: 4 };
  function worst(states) {
    return states.reduce(function (w, s) { return (RANK[s.level] > RANK[w.level]) ? s : w; });
  }

  function hhmm(iso) {
    var d = new Date(iso);
    return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }

  function ago(iso, live) {
    var sec = Math.max(0, (now(live) - new Date(iso)) / 1000);
    if (sec < 90)          return 'לפני פחות מדקה';
    if (sec < 3600)        return 'לפני ' + Math.round(sec / 60) + ' דקות';
    if (sec < 36 * 3600)   return 'לפני ' + Math.round(sec / 3600) + ' שעות';
    return 'לפני ' + Math.round(sec / 86400) + ' ימים';
  }

  /* בידוד כיווניות: בתוך טקסט עברי, "16/09 04:55" או "-0.45%" מתהפכים.
     התווים האלה (LRI…PDI) מסמנים "זה בלוק משמאל לימין" — ולא נראים על המסך. */
  function ltr(s) { return '⁦' + s + '⁩'; }

  function dateTimeText(iso) {
    var d = new Date(iso);
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    return ltr(dd + '/' + mm + ' ' + hhmm(iso));
  }

  function dateText(iso) {
    var d = new Date(iso);
    return ltr(String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0'));
  }

  return {
    state: state, evaluate: evaluate, worst: worst,
    hhmm: hhmm, ago: ago, dateTimeText: dateTimeText, dateText: dateText, ltr: ltr,
    now: function () { return DEMO_NOW; }
  };
})();
