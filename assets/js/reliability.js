/* ============================================================
   reliability.js — מנוע האמינות
   ------------------------------------------------------------
   זה הקובץ החשוב ביותר בשלב הזה.
   הוא ממיר "רשימת דיווחים" ל"סטטוס אימות", לפי כללים מפורשים.

   הכלל המרכזי מהמפרט:
   שני מקורות שחוזרים לאותו מקור-שורש אינם שני אימותים עצמאיים.
   ============================================================ */

window.Reliability = (function () {

  var IDF_GROUP = 'official_il';

  function sourceById(id) {
    return (window.DB.sources || []).find(function (s) { return s.id === id; });
  }

  /* האם מקור מותר להצגה במצב הפרסום הנוכחי */
  function isDisplayable(source) {
    if (!source) return false;
    var mode = window.DB.config.publish_mode;
    if (source.license_mode === 'unclear') return false;               // תמיד חסום
    if (source.license_mode === 'personal_only' && mode === 'public') return false;
    return true;
  }

  /* מה מותר להציג מהמקור הזה */
  function licenseLabel(source) {
    switch (source.license_mode) {
      case 'link_only':     return 'קישור בלבד';
      case 'summary_ok':    return 'סיכום מותר';
      case 'licensed_data': return 'נתונים מורשים';
      case 'personal_only': return 'שימוש אישי בלבד';
      case 'unclear':       return 'חסום — רישוי לא ברור';
      default:              return '—';
    }
  }

  /* כל הדיווחים של אירוע */
  /* מקבל אירוע או מזהה. ניתוח מהבינה הפרטית מגיע עם הדיווחים וההיסטוריה בתוך האירוע;
     נתוני הדמה — בטבלאות נפרדות (DB.reports / DB.revisions). */
  function reportsFor(ev) {
    if (ev && typeof ev === 'object' && Array.isArray(ev.reports)) return ev.reports;
    var id = (ev && typeof ev === 'object') ? ev.id : ev;
    return (window.DB.reports || []).filter(function (r) { return r.event_id === id; });
  }

  function revisionsFor(ev) {
    if (ev && typeof ev === 'object' && Array.isArray(ev.revisions)) return ev.revisions;
    if (ev && typeof ev === 'object' && Array.isArray(ev.reports)) return [];
    var id = (ev && typeof ev === 'object') ? ev.id : ev;
    return (window.DB.revisions || []).filter(function (r) { return r.event_id === id; });
  }

  /* ----------------------------------------------------------
     החישוב עצמו.
     מחזיר אובייקט עם: level, label, reason, ומידע נלווה.
     ---------------------------------------------------------- */
  function assess(event) {
    var reports = reportsFor(event);

    // רק דיווחים ממקורות שמותר להציג נספרים לתצוגה,
    // אבל הספירה לאימות מתבצעת על כל הדיווחים —
    // כי רישוי הוא שאלת פרסום, לא שאלת אמת.
    var roots  = {};
    var groups = {};
    reports.forEach(function (r) {
      roots[r.source_root_id] = true;
      var s = sourceById(r.source_id);
      if (s) groups[s.independence_group] = true;
    });

    var rootCount  = Object.keys(roots).length;
    var groupCount = Object.keys(groups).length;

    // הודעה רשמית של צה"ל (דובר צה"ל / הערוץ הרשמי בטלגרם) = מאושר (החלטת בעל האתר, 21/09/2026).
    // מסומן "אושר ע"י צה"ל" — לא "אומת ב-N מקורות", כדי שיהיה ברור על מה האישור מבוסס.
    var idf = reports.some(function (r) { var s = sourceById(r.source_id); return s && s.independence_group === IDF_GROUP; });

    var blocked = reports.filter(function (r) { return !isDisplayable(sourceById(r.source_id)); });

    var base = {
      reports: reports,
      revisions: revisionsFor(event),
      root_count: rootCount,
      group_count: groupCount,
      report_count: reports.length,
      blocked_count: blocked.length
    };

    /* --- מצבי מחזור חיים גוברים על חישוב האימות --- */
    if (event.lifecycle === 'retracted') {
      return merge(base, { level: 'retracted', label: 'בוטל',
        reason: 'הדיווח נמשך ע"י מפרסמו. נשמר לתיעוד בלבד.' });
    }
    if (event.lifecycle === 'disputed') {
      return merge(base, { level: 'disputed', label: 'שנוי במחלוקת',
        reason: 'קיימות גרסאות סותרות משני צדדים מעוניינים. אין צד שלישי שהכריע.' });
    }
    if (event.claim_type === 'assessment') {
      return merge(base, { level: 'assessment', label: 'הערכה',
        reason: 'ניתוח/תחזית, לא דיווח על אירוע שהתרחש. לא נספר כעובדה מאומתת.' });
    }
    // נתון מדיד ממקור נתונים — אימות נתונים שונה במהותו מאימות דיווח שטח,
    // ולכן לא נספר לפי כמות מקורות.
    if (event.claim_type === 'data' && reports.length > 0) {
      return merge(base, { level: 'verified', label: 'נתון',
        reason: 'נתון מדיד ממקור נתונים. אימות נתונים שונה מאימות דיווח שטח — לא נספר לפי כמות מקורות.' });
    }

    /* --- אין דיווחים --- */
    if (reports.length === 0) {
      return merge(base, { level: 'unverified', label: 'ללא מקור',
        reason: 'אין דיווח מקושר.' });
    }

    /* --- פחות משני מקורות עצמאיים, אבל צה"ל הודיע --- */
    if (idf && (rootCount < 2 || groupCount < 2)) {
      return merge(base, { level: 'verified', label: 'אושר ע"י צה"ל',
        reason: 'הודעה רשמית של צה"ל.' });
    }

    /* --- מקור אחד בלבד --- */
    if (reports.length === 1) {
      return merge(base, { level: 'initial', label: 'דיווח ראשוני',
        reason: 'מקור אחד בלבד. אין אימות עצמאי.' });
    }

    /* --- כמה דיווחים, אבל מקור-שורש אחד = כשל מקור משותף --- */
    if (rootCount < 2) {
      return merge(base, { level: 'shared_root', label: 'מקור-שורש משותף',
        reason: 'יש ' + reports.length + ' פרסומים, אבל כולם חוזרים למקור אחד. זה אימות אחד, לא ' + reports.length + '.' });
    }

    /* --- שורשים שונים, אבל אותה משפחת מקורות --- */
    if (groupCount < 2) {
      return merge(base, { level: 'shared_root', label: 'מקורות תלויים',
        reason: 'המקורות שייכים לאותה משפחה (למשל שתי סוכנויות מדינתיות של אותה מדינה). לא אימות עצמאי.' });
    }

    /* --- מאומת ---
       הניסוח אומר בדיוק מה נבדק: כמה מקורות עצמאיים דיווחו. לא "זה קרה" (סעיף 9 בביקורת, 18/09/2026). */
    var n      = Math.min(rootCount, groupCount);
    var label  = 'אומת ב-' + n + ' מקורות';
    var reason = rootCount + ' מקורות-שורש עצמאיים מ-' + groupCount + ' משפחות מקורות שונות.';

    if (event.claim_type === 'statement') {
      label  = 'אומת שנאמר — התוכן לא אומת';
      reason += ' שים לב: מאומת שההצהרה נמסרה — לא תוכנה.';
    }
    if (event.lifecycle === 'corrected') {
      label  = 'אומת ב-' + n + ' מקורות (תוקן)';
      reason += ' הגרסה הקודמת נשמרה בהיסטוריה.';
    }

    return merge(base, { level: 'verified', label: label, reason: reason });
  }

  /* אימות מאוחר: אומת יותר מ-12 שעות אחרי שהאירוע קרה.
     באירוע מתמשך זה חסר משמעות — הוא עדיין קורה. */
  function isLateVerification(event) {
    if (event.is_ongoing) return false;
    var reports = reportsFor(event);
    if (reports.length < 2) return false;
    var last = reports.map(function (r) { return new Date(r.published_at).getTime(); })
                      .sort(function (a, b) { return b - a; })[0];
    // באירוע עם טווח, נמדד מ*סוף* האירוע — לא מתחילתו.
    var ref = new Date(event.occurred_to || event.occurred_at).getTime();
    return (last - ref) > 12 * 60 * 60 * 1000;
  }

  /* ----------------------------------------------------------
     הורדת סטטוס בדיעבד.
     מחזיר את שורת ההיסטוריה האחרונה מסוג 'downgrade', אם יש.
     קיומה אומר: האתר הציג את זה בעבר כמשהו חזק יותר.
     חובה להראות את זה לקורא — לא לשנות בשקט.
     ---------------------------------------------------------- */
  function downgrade(event) {
    var d = revisionsFor(event).filter(function (r) { return r.kind === 'downgrade'; });
    return d.length ? d[d.length - 1] : null;
  }

  /* כמה זמן האירוע הוצג בסטטוס השגוי, בשעות */
  function downgradeDurationHours(event) {
    var d = downgrade(event);
    if (!d) return 0;
    var ups = revisionsFor(event).filter(function (r) {
      return r.to_level === d.from_level && new Date(r.at) < new Date(d.at);
    });
    if (!ups.length) return 0;
    return Math.round((new Date(d.at) - new Date(ups[ups.length - 1].at)) / 3600000);
  }

  /* ----------------------------------------------------------
     תיאור זמן האירוע.
     נקודתי / טווח סגור / מתמשך ופתוח.
     ---------------------------------------------------------- */
  function timeSpan(event) {
    if (event.is_ongoing) {
      return { kind: 'ongoing', text: 'מאז ' + window.Freshness.dateTimeText(event.occurred_at) + ' · נמשך' };
    }
    if (event.occurred_to) {
      return { kind: 'range', text: window.Freshness.dateTimeText(event.occurred_at) +
                                    ' ← ' + window.Freshness.dateTimeText(event.occurred_to) };
    }
    return { kind: 'point', text: 'קרה: ' + window.Freshness.dateTimeText(event.occurred_at) };
  }

  function merge(a, b) {
    var out = {};
    Object.keys(a).forEach(function (k) { out[k] = a[k]; });
    Object.keys(b).forEach(function (k) { out[k] = b[k]; });
    return out;
  }

  return {
    assess: assess,
    reportsFor: reportsFor,
    revisionsFor: revisionsFor,
    sourceById: sourceById,
    isDisplayable: isDisplayable,
    licenseLabel: licenseLabel,
    isLateVerification: isLateVerification,
    downgrade: downgrade,
    downgradeDurationHours: downgradeDurationHours,
    timeSpan: timeSpan
  };
})();
