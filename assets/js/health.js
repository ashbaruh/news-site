/* ============================================================
   health.js — נורת מצב העדכונים האוטומטיים (בקשת בעל האתר, 21/09/2026)
   ------------------------------------------------------------
   ירוק = הכול התעדכן בזמן (גם אם זה הצליח רק בניסיון החוזר).
   אדום = משהו באמת תקוע. הבדיקה לפי הזמן של הנתון עצמו, לא לפי "ניסיון נכשל":
     • עדכון נתונים (כל שעה)         — לא ישן מ-3 שעות
     • עדכון ביניים (04:00/12:00/18:00) — המועד האחרון שעבר (+50 דק' לניסיון החוזר) בוצע
     • ניתוח יומי לכל זירה           — לא ישן מ-36 שעות
   נבדקת הגרסה שב-GitHub (לא העותק המקומי) — כדי שגם בפתיחה כקובץ הנורה תשקף את מצב הבוטים.
   לחיצה על הנורה מציגה את הפירוט.
   ============================================================ */

(function () {
  var C = window.DB.config, F = window.Freshness;
  var el = document.getElementById('health');
  if (!el) return;
  var RAW = (C.generated_remote || '').replace('data/generated/feeds.json', '');
  var SLOTS = [4, 12, 18], GRACE_MIN = 50;
  var DATA_MAX_H = 3, ANALYSIS_MAX_H = 36;

  function hoursAgo(iso) { return (Date.now() - new Date(iso).getTime()) / 3600000; }

  /* המועד של עדכון הביניים שהיה אמור כבר להסתיים (לפי שעון ישראל) */
  function expectedSlot() {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jerusalem', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date());
    var h = +parts.filter(function (p) { return p.type === 'hour'; })[0].value % 24;
    var m = h * 60 + +parts.filter(function (p) { return p.type === 'minute'; })[0].value;
    var since = null;
    SLOTS.forEach(function (s) { if (m >= s * 60 + GRACE_MIN) since = m - s * 60; });
    if (since === null) since = m + 24 * 60 - SLOTS[SLOTS.length - 1] * 60;   // לפני 04:50 — המועד של 18:00 אתמול
    return new Date(Math.floor(Date.now() / 60000) * 60000 - since * 60000);
  }

  function parseJsVar(text, marker) {
    var i = text.indexOf(marker);
    return JSON.parse(text.slice(i + marker.length, text.lastIndexOf(';')));
  }

  function remote(path, marker, local) {
    if (!RAW || !window.LiveNet) return Promise.resolve(local);
    return window.LiveNet.getText(RAW + path + '?t=' + Math.floor(Date.now() / 60000))
      .then(function (t) { return parseJsVar(t, marker); })
      .catch(function () { return local; });                       // GitHub לא זמין — העותק המקומי
  }

  function check() {
    return Promise.all([
      remote('data/war/brief.js', 'window.DB.war_brief =', window.DB.war_brief),
      remote('data/war/published.js', 'window.DB.war_published =', window.DB.war_published)
    ]).then(function (r) {
      var brief = r[0] || {}, pub = r[1] || {}, rows = [];
      var gen = window.DB.generated && window.DB.generated.generated_at;
      rows.push({ ok: !!gen && hoursAgo(gen) <= DATA_MAX_H, name: 'נתונים (כל שעה)', at: gen });

      var slotOk = !!brief.slot && new Date(brief.slot).getTime() >= expectedSlot().getTime() - 60000;
      rows.push({ ok: slotOk, name: 'עדכון ביניים', at: brief.generated_at });

      C.arenas.forEach(function (a) {
        var g = pub[a.id] && pub[a.id].analysis && pub[a.id].analysis.generated_at;
        rows.push({ ok: !!g && hoursAgo(g) <= ANALYSIS_MAX_H, name: 'ניתוח ' + (a.short || a.name), at: g });
      });
      return rows;
    });
  }

  function paint(rows) {
    var bad = rows.filter(function (x) { return !x.ok; });
    el.className = 'health ' + (bad.length ? 'bad' : 'ok');
    el.title = bad.length ? 'עדכון תקוע: ' + bad.map(function (x) { return x.name; }).join(', ') : 'כל העדכונים האוטומטיים עובדים';
    el.innerHTML = '<span class="dot"></span>' + (bad.length ? '<span class="lbl">עדכון תקוע</span>' : '') +
      '<span class="health-pop">' + rows.map(function (x) {
        return '<span class="' + (x.ok ? 'ok' : 'bad') + '">' + '● ' + x.name + ' · ' +
               (x.at ? F.dateTimeText(x.at) : 'אין') + '</span>';
      }).join('') + '</span>';
  }

  function run() { check().then(paint).catch(function () { el.className = 'health'; }); }

  el.addEventListener('click', function () { el.classList.toggle('open'); });
  document.addEventListener('live:update', function (e) { if (e.detail && e.detail.key === 'generated') run(); });
  run();
  setInterval(run, 10 * 60000);
})();
