#!/usr/bin/env node
/* ============================================================
   פרסום עדכון הביניים לערוץ הטלגרם (t.me/chadar_matzav).
   רץ אחרי tools/war_brief.py ב-war-brief.yml.

   - התווית (מאומת / דיווח ראשוני / אושר ע"י צה"ל...) מחושבת ע"י אותו קוד של האתר
     (assets/js/reliability.js) — לא מחושבת מחדש כאן, כדי שהערוץ והאתר לא יסתרו זה את זה.
   - רק כותרות בניסוח מקורי + קישור לזירה באתר. לא מעתיקים טקסט ממקורות.
   - כל עדכון (slot) מתפרסם פעם אחת בלבד: data/war/telegram_status.json.
   - אין מפתחות (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID ב-GitHub Secrets) — לא קורה כלום.

   הרצה:  node tools/telegram_brief.js            (מפרסם)
          node tools/telegram_brief.js --dry-run  (רק מדפיס את ההודעה)
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const STATUS = path.join(ROOT, 'data', 'war', 'telegram_status.json');
const MAX_AGE_H = 14;          // כמו באתר: עדכון ישן מ-14 שעות לא מוצג
const PER_ARENA = 3;
const TG_LIMIT = 4000;         // טלגרם: עד 4096 תווים להודעה

/* ---------- שורת שווקים ----------
   רק מקורות שהאתר כבר משתמש בהם, עם רישוי מתאים (data/sources.js): CoinGecko, ECB (דרך Frankfurter), בנק ישראל, NY Fed, FRED.
   נפט לא נכלל: באתר הוא מגיע רק מווידג'ט TradingView, שאסור לחלץ ממנו מספרים.
   מקור שלא עונה — פשוט לא מופיע. אין נתון → אין שורה. */
async function getJSON(url, ms) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), ms || 8000);
  try { const r = await fetch(url, { signal: ctl.signal }); if (!r.ok) throw new Error('http ' + r.status); return await r.json(); }
  finally { clearTimeout(t); }
}
const sign = n => (n > 0 ? '+' : n < 0 ? '−' : '') + Math.abs(n).toFixed(1) + '%';
const fmt = (n, d) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

async function marketsLine() {
  const rows = [], credit = [];
  const row = (icon, name, val, chg) => rows.push(icon + ' ' + esc(name) + ': <b>' + esc(val) + '</b>' + (chg ? ' (' + esc(chg) + ')' : ''));
  // קריפטו — CoinGecko
  try {
    const j = await getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true');
    [['bitcoin', '₿', 'ביטקוין'], ['ethereum', '💠', 'את\'ריום']].forEach(([id, ic, nm]) => {
      const c = j && j[id];
      if (c && isFinite(c.usd)) row(ic, nm, fmt(c.usd, 0) + '$', isFinite(c.usd_24h_change) ? sign(c.usd_24h_change) + ' ב-24ש\'' : '');
    });
    if (rows.length) credit.push('CoinGecko');
  } catch (e) { console.log('שווקים: CoinGecko לא זמין — ' + e.message); }
  // מטבעות — ECB דרך Frankfurter (שער יציג יומי)
  try {
    const end = new Date(), start = new Date(Date.now() - 10 * 86400000), ymd = d => d.toISOString().slice(0, 10);
    const j = await getJSON('https://api.frankfurter.dev/v1/' + ymd(start) + '..' + ymd(end) + '?base=EUR&symbols=USD,ILS,GBP');
    const dates = Object.keys((j && j.rates) || {}).sort();
    if (dates.length >= 2) {
      const cur = j.rates[dates[dates.length - 1]], prev = j.rates[dates[dates.length - 2]];
      const pair = (fn) => { const a = fn(cur), b = fn(prev); return isFinite(a) && isFinite(b) ? [a, (a / b - 1) * 100] : null; };
      const usd = pair(r => r.ILS / r.USD), eur = pair(r => r.ILS), gbp = pair(r => r.ILS / r.GBP), eurusd = pair(r => r.USD);
      if (usd) row('💵', 'דולר', fmt(usd[0], 3) + '₪', sign(usd[1]));
      if (eur) row('💶', 'אירו', fmt(eur[0], 3) + '₪', sign(eur[1]));
      if (gbp) row('💷', 'לירה שטרלינג', fmt(gbp[0], 3) + '₪', sign(gbp[1]));
      if (eurusd) row('🔁', 'אירו/דולר', fmt(eurusd[0], 4), sign(eurusd[1]));
      if (usd || eur) credit.push('ECB ' + dates[dates.length - 1].split('-').reverse().slice(0, 2).join('/'));
    }
  } catch (e) { console.log('שווקים: Frankfurter לא זמין — ' + e.message); }
  // ריבית בנק ישראל — מהקובץ שהמשימה בענן כבר מושכת (data/generated/feeds.json), בלי בקשה נוספת
  try {
    const boi = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'generated', 'feeds.json'), 'utf8')).boi;
    const d = boi && boi.ok && boi.data;
    if (d && isFinite(d.rate)) {
      row('🏦', 'ריבית בנק ישראל', d.rate.toFixed(2) + '%', isFinite(d.previous_rate) && d.previous_rate !== d.rate ? 'קודם ' + d.previous_rate.toFixed(2) + '%' : '');
      credit.push('בנק ישראל');
    }
  } catch (e) { console.log('שווקים: ריבית בנק ישראל לא זמינה — ' + e.message); }
  // ריבית הפד — הפדרל ריזרב של ניו יורק
  try {
    // כמו באתר (markets-live.js): כמה ימים אחורה, והאחרון שיש בו טווח יעד. הערכים מגיעים לפעמים כמחרוזת.
    const j = await getJSON('https://markets.newyorkfed.org/api/rates/unsecured/effr/last/5.json');
    const rows5 = ((j && j.refRates) || []).filter(r => r && r.targetRateFrom != null && r.targetRateTo != null)
      .sort((a, b) => (a.effectiveDate < b.effectiveDate ? 1 : -1));
    const r = rows5[0], lo = r && Number(r.targetRateFrom), hi = r && Number(r.targetRateTo);
    if (r && isFinite(lo) && isFinite(hi)) {
      row('🇺🇸', 'ריבית הפד', lo.toFixed(2) + '–' + hi.toFixed(2) + '%', '');
      credit.push('NY Fed');
    } else {
      console.log('שווקים: NY Fed — אין טווח יעד בתשובה (' + JSON.stringify(j).slice(0, 200) + ')');
    }
  } catch (e) { console.log('שווקים: NY Fed לא זמין — ' + e.message); }
  // נפט ומדדים — FRED (מפתח אישי חינמי). סגירה יומית, באיחור של יום מסחר. אין מפתח → החלק לא מופיע.
  const fredKey = (process.env.FRED_API_KEY || '').trim();   // רווח/שורה חדשה בהדבקה למפתח → שגיאה 400
  if (fredKey) {
    const FRED = [['DCOILBRENTEU', '🛢', 'נפט ברנט', 2, '$'], ['DCOILWTICO', '🛢', 'נפט WTI', 2, '$'],
                  ['SP500', '🇺🇸', 'S&P 500', 0, ''], ['NASDAQCOM', '💻', 'נאסד"ק', 0, ''],
                  ['VIXCLS', '😨', 'מדד הפחד VIX', 1, ''], ['DGS10', '🏛', 'אג"ח ארה"ב 10 שנים', 2, '%']];
    let last = '';
    for (const [id, ic, nm, dec, unit] of FRED) {
      try {
        const j = await getJSON('https://api.stlouisfed.org/fred/series/observations?series_id=' + id +
          '&api_key=' + encodeURIComponent(fredKey) + '&file_type=json&sort_order=desc&limit=10');
        const obs = ((j && j.observations) || []).filter(o => o.value !== '.' && isFinite(Number(o.value)));
        if (obs.length >= 2) {
          const a = Number(obs[0].value), b = Number(obs[1].value);
          const chg = unit === '%' ? ((a - b >= 0 ? '+' : '−') + Math.abs(a - b).toFixed(2) + ' נק\'') : sign((a / b - 1) * 100);
          row(ic, nm, fmt(a, dec) + unit, chg);
          if (obs[0].date > last) last = obs[0].date;
        }
      } catch (e) {
        console.log('שווקים: FRED ' + id + ' לא זמין — ' + String(e.message).split(fredKey).join('***'));
        if (id === 'DCOILBRENTEU') {   // פעם אחת: הסיבה ש-FRED מחזיר (בלי המפתח עצמו)
          try {
            const r = await fetch('https://api.stlouisfed.org/fred/series/observations?series_id=' + id + '&api_key=' +
              encodeURIComponent(fredKey) + '&file_type=json&limit=1');
            console.log('שווקים: FRED אומר — ' + (await r.text()).slice(0, 300).split(fredKey).join('***') +
              ' | אורך המפתח: ' + fredKey.length + ', רק אותיות קטנות וספרות: ' + /^[a-z0-9]+$/.test(fredKey));
          } catch (e2) { /* לא חשוב */ }
        }
      }
    }
    if (last) credit.push('FRED ' + last.split('-').reverse().slice(0, 2).join('/'));
  } else {
    console.log('שווקים: אין FRED_API_KEY — נפט ומדדים לא יופיעו');
  }
  if (!rows.length) return '';
  return '📈 <b>שווקים וכלכלה</b>\n' + rows.join('\n') + '\n<i>' + esc(credit.join(' · ')) + '</i>';
}

/* טוען את קבצי האתר בסביבה מבודדת, כאילו זה דפדפן באתר הציבורי */
function loadSite() {
  const win = { location: { protocol: 'https:', hostname: 'public.site', search: '', pathname: '/' } };
  win.window = win;
  const ctx = vm.createContext(win);
  for (const rel of ['data/config.js', 'data/sources.js', 'assets/js/reliability.js', 'data/war/brief.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
  }
  win.DB.config.publish_mode = 'public';   // הערוץ ציבורי — מקורות "אישי בלבד" לא נחשבים
  return win;
}

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function hhmm(iso) {
  const d = new Date(iso);
  return isNaN(d) ? '' : d.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jerusalem', hour12: false });
}

const ICON = { verified: '✅', initial: '🟡', shared_root: '🟠', disputed: '⚠️', assessment: '🔎', unverified: '⚪', retracted: '❌' };

/* בונה את ההודעה. מחזיר null אם אין מה לפרסם. */
function buildMessage(win, now, markets) {
  const C = win.DB.config, R = win.Reliability, b = win.DB.war_brief;
  if (!b || !b.arenas) return null;
  const gen = new Date(b.generated_at).getTime();
  if (!(gen > 0) || now - gen > MAX_AGE_H * 3600000) return null;

  const base = (C.brand.public_url || '').replace(/\/?$/, '/');
  const blocks = [];
  for (const arena of C.arenas) {
    const a = b.arenas[arena.id];
    if (!a || !Array.isArray(a.events) || !a.events.length) continue;
    const lines = a.events.slice(0, PER_ARENA).map(ev => {
      const r = R.assess(ev) || {};
      return (ICON[r.level] || '•') + ' <b>' + esc(ev.title) + '</b>' + (r.label ? '\n      <i>' + esc(r.label) + '</i>' : '');
    });
    blocks.push('🔹 <b><u>' + esc(arena.name) + '</u></b>\n' + lines.join('\n') +
                '\n<a href="' + esc(base + '#arena=' + arena.id) + '">לפירוט ולמקורות ←</a>');
  }
  if (!blocks.length) return null;

  const head = '⚡ <b>' + esc(C.brand.site_name) + ' · עדכון ' + hhmm(b.slot || b.generated_at) + '</b>';
  const foot = '<i>נכתב בעזרת בינה מלאכותית ועלול לכלול טעויות. התווית מחושבת לפי מספר המקורות, ואינה אישור שהאירוע קרה.</i>' + '\n📢 להצטרפות לערוץ: @chadar_matzav';
  const mk = markets ? markets + '\n\n' : '';
  const build = () => head + '\n\n' + blocks.join('\n\n') + '\n\n' + mk + foot;
  let text = build();
  // ארוך מדי? מורידים זירות מהסוף עד שנכנס (לא חותכים באמצע תגית HTML)
  while (text.length > TG_LIMIT && blocks.length > 1) { blocks.pop(); text = build(); }
  return { slot: b.slot || b.generated_at, text };
}

function readStatus() {
  try { return JSON.parse(fs.readFileSync(STATUS, 'utf8')); } catch (e) { return {}; }
}

async function main() {
  const dry = process.argv.includes('--dry-run');
  const win = loadSite();
  if (!buildMessage(win, Date.now())) { console.log('טלגרם: אין עדכון טרי לפרסום'); return; }
  const msg = buildMessage(win, Date.now(), await marketsLine());
  if (!msg) { console.log('טלגרם: אין עדכון טרי לפרסום'); return; }
  if (dry) { console.log(msg.text); console.log('\n[' + msg.text.length + ' תווים]'); return; }

  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) { console.log('טלגרם: אין TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID — מדלג'); return; }

  const st = readStatus();
  if (st.last_slot === msg.slot) { console.log('טלגרם: העדכון של ' + msg.slot + ' כבר פורסם'); return; }
  // עדכון ישן מזה שכבר פורסם (למשל ריצה אוטומטית מאוחרת אחרי עדכון לפי בקשה) — לא מפרסמים אחורה בזמן (11/10/2026)
  if (st.last_slot && new Date(msg.slot) < new Date(st.last_slot)) { console.log('טלגרם: ' + msg.slot + ' ישן מהעדכון האחרון שפורסם — מדלג'); return; }

  const res = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text: msg.text, parse_mode: 'HTML', link_preview_options: { is_disabled: true } })
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.ok) {
    // לא מדפיסים את הכתובת (יש בה את המפתח) — רק את תיאור השגיאה של טלגרם
    console.log('טלגרם: הפרסום נכשל — ' + (body.description || res.status));
    process.exitCode = 1;
    return;
  }
  fs.writeFileSync(STATUS, JSON.stringify({ last_slot: msg.slot, posted_at: new Date().toISOString(), message_id: body.result && body.result.message_id }, null, 1) + '\n');
  console.log('טלגרם: פורסם (' + msg.slot + ')');
}

if (require.main === module) main();
module.exports = { buildMessage, loadSite, marketsLine };
