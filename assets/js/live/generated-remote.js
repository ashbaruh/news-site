/* ============================================================
   generated-remote.js — הנתונים העדכניים מהמשימה בענן
   ------------------------------------------------------------
   המשימה האוטומטית (GitHub Actions) שומרת את התוצאה ב-GitHub כל שעה.
   העותק המקומי (data/generated/feeds.js) לא מתעדכן לבד.
   לכן: בכל טעינה בודקים את הגרסה ב-GitHub. אם היא חדשה יותר — משתמשים בה.
   אם GitHub לא זמין — ממשיכים עם העותק המקומי, בלי שגיאה.
   ============================================================ */

(function () {
  var URL = window.DB.config.generated_remote;
  if (!URL || window.LiveNet.SIM_DOWN) return;

  function valid(g) {
    if (!g || typeof g !== 'object' || typeof g.generated_at !== 'string') return false;
    if (isNaN(new Date(g.generated_at).getTime())) return false;
    // כל מקטע חייב להיות אובייקט עם ok בוליאני — אחרת לא סומכים על הקובץ
    return ['boi', 'globes', 'ifa', 'tv', 'ligat_haal', 'ai', 'animals', 'av_en'].every(function (k) {
      return !g[k] || (typeof g[k] === 'object' && typeof g[k].ok === 'boolean');
    });
  }

  window.LiveNet.getJSON(URL + '?t=' + Math.floor(Date.now() / 60000)).then(function (remote) {
    if (!valid(remote)) throw new Error('מבנה לא צפוי');
    var local = window.DB.generated;
    if (local && local.generated_at && new Date(local.generated_at) >= new Date(remote.generated_at)) return;
    window.DB.generated = remote;
    document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'generated' } }));
  }).catch(function () { /* GitHub לא זמין — נשארים עם העותק המקומי */ });
})();
