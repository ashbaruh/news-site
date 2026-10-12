#!/usr/bin/env node
/* ============================================================
   פרסום הניתוח העמוק לערוץ הטלגרם — הודעה (או כמה, אם ארוך) לכל זירה.
   מקור: data/war/published.js (רק ניתוחים שאושרו ופורסמו באתר).
   התוויות מחושבות ע"י reliability.js של האתר. כל ניתוח מתפרסם פעם אחת: data/war/telegram_deep_status.json.

   הרצה:  node tools/telegram_deep.js            (מפרסם)
          node tools/telegram_deep.js --dry-run  (רק מדפיס)
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const STATUS = path.join(ROOT, 'data', 'war', 'telegram_deep_status.json');
const LIMIT = 3900;           // טלגרם: עד 4096 תווים להודעה
const MAX_AGE_H = 30;         // ניתוח ישן מזה — לא מפורסם

function loadSite() {
  const win = { location: { protocol: 'https:', hostname: 'public.site', search: '', pathname: '/' } };
  win.window = win;
  const ctx = vm.createContext(win);
  for (const rel of ['data/config.js', 'data/sources.js', 'assets/js/reliability.js', 'data/war/published.js']) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
  }
  win.DB.config.publish_mode = 'public';
  return win;
}

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const when = iso => { const d = new Date(iso); return isNaN(d) ? '' :
  d.toLocaleString('he-IL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jerusalem', hour12: false }); };
const ICON = { verified: '✅', initial: '🟡', shared_root: '🟠', disputed: '⚠️', assessment: '🔎', unverified: '⚪', retracted: '❌' };

/* בלוקים של זירה אחת — כל בלוק נשאר שלם בתוך הודעה */
function arenaBlocks(win, arena, a) {
  const R = win.Reliability, C = win.DB.config;
  const base = (C.brand.public_url || '').replace(/\/?$/, '/');
  const out = [];
  out.push('🔎 <b><u>ניתוח עומק · ' + esc(arena.name) + '</u></b>\n<i>' + esc(when(a.generated_at)) + ' · ' +
           a.events.length + ' אירועים · חלון של 24 שעות</i>');
  out.push('<b>תמונת מצב</b>\n' + esc(a.summary));
  if ((a.fronts || []).length) {
    out.push('<b>חזיתות</b>\n' + a.fronts.map(f => '▪️ <b>' + esc(f.name) + '</b> — ' + esc(f.status)).join('\n'));
  }
  const evs = a.events.map(ev => {
    const r = R.assess(ev) || {};
    return (ICON[r.level] || '•') + ' <b>' + esc(ev.title) + '</b>' + (r.label ? ' <i>(' + esc(r.label) + ')</i>' : '') +
           '\n' + esc(ev.summary) +
           (ev.what_is_not_verified ? '\n<i>לא אומת: ' + esc(ev.what_is_not_verified) + '</i>' : '');
  });
  evs.forEach((t, i) => out.push((i === 0 ? '<b>אירועים מרכזיים</b>\n' : '') + t));
  (a.strategic_goals || []).forEach((g, i) => {
    const part = (lbl, arr) => (arr || []).length ? '\n<u>' + lbl + ':</u> ' + arr.map(esc).join(' · ') : '';
    const body = part('הצהרות', g.declared) + part('הערכה', g.inferred) + part('תחזית', g.forecast);
    if (body) out.push((i === 0 ? '<b>מטרות הצדדים ותחזית</b>\n' : '') + '🎯 <b>' + esc(g.actor) + '</b>' + body);
  });
  if ((a.economy || []).length) {
    out.push('<b>השלכות כלכליות</b>\n' + a.economy.map(e =>
      '📊 ' + esc(e.indicator || e.name || '') + (e.value != null ? ': ' + esc(e.value) + (e.unit ? ' ' + esc(e.unit) : '') : '') + (e.change_pct != null ? ' (' + (e.change_pct > 0 ? '+' : '') + esc(e.change_pct) + '%)' : '') +
      (e.note || e.description ? ' — ' + esc(e.note || e.description) : '')).join('\n'));
  }
  if ((a.not_verified || []).length) out.push('<b>מה עדיין לא אומת</b>\n' + a.not_verified.map(x => '• ' + esc(x)).join('\n'));
  out.push('<a href="' + esc(base + '#arena=' + arena.id) + '">מקורות, מפה ופירוט מלא באתר ←</a>\n' +
           '<i>נכתב בעזרת בינה מלאכותית ועלול לכלול טעויות. התוויות מחושבות לפי מספר המקורות ואינן אישור שהאירוע קרה.</i>' + '\n📢 להצטרפות לערוץ: @chadar_matzav');
  return out;
}

/* מאחד בלוקים להודעות של עד LIMIT תווים */
function pack(blocks) {
  const msgs = []; let cur = '';
  for (const b of blocks) {
    const piece = b.length > LIMIT ? b.slice(0, LIMIT - 1) + '…' : b;
    if (cur && (cur.length + 2 + piece.length) > LIMIT) { msgs.push(cur); cur = piece; }
    else cur = cur ? cur + '\n\n' + piece : piece;
  }
  if (cur) msgs.push(cur);
  if (msgs.length > 1) msgs.forEach((m, i) => { msgs[i] = m + '\n\n<i>(' + (i + 1) + '/' + msgs.length + ')</i>'; });
  return msgs;
}

function build(win, now) {
  const C = win.DB.config, P = win.DB.war_published || {}, res = [];
  for (const arena of C.arenas) {
    const p = P[arena.id];
    const a = p && p.analysis;
    if (!a || !Array.isArray(a.events) || !a.events.length) continue;
    if (now - new Date(a.generated_at).getTime() > MAX_AGE_H * 3600000) continue;
    res.push({ arena: arena.id, generated_at: a.generated_at, messages: pack(arenaBlocks(win, arena, a)) });
  }
  return res;
}

async function send(token, chat, text) {
  const r = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text, parse_mode: 'HTML', link_preview_options: { is_disabled: true } })
  });
  const b = await r.json().catch(() => ({}));
  if (!r.ok || !b.ok) throw new Error(b.description || String(r.status));   // בלי הכתובת — יש בה את המפתח
  return b.result.message_id;
}

async function main() {
  const dry = process.argv.includes('--dry-run');
  const items = build(loadSite(), Date.now());
  if (!items.length) return console.log('טלגרם (עומק): אין ניתוח טרי');
  if (dry) {
    for (const it of items) it.messages.forEach((m, i) => console.log(`\n===== ${it.arena} ${i + 1}/${it.messages.length} [${m.length}] =====\n` + m));
    return;
  }
  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return console.log('טלגרם (עומק): אין מפתחות — מדלג');
  let st = {}; try { st = JSON.parse(fs.readFileSync(STATUS, 'utf8')); } catch (e) { /* קובץ חדש */ }
  for (const it of items) {
    if (st[it.arena] === it.generated_at) { console.log(`טלגרם (עומק): ${it.arena} כבר פורסם`); continue; }
    try {
      for (const m of it.messages) { await send(token, chat, m); await new Promise(r => setTimeout(r, 1500)); }
      st[it.arena] = it.generated_at;
      fs.writeFileSync(STATUS, JSON.stringify(st, null, 1) + '\n');
      console.log(`טלגרם (עומק): ${it.arena} פורסם (${it.messages.length} הודעות)`);
    } catch (e) { console.log(`טלגרם (עומק): ${it.arena} נכשל — ${e.message}`); process.exitCode = 1; }
  }
}

if (require.main === module) main();
module.exports = { build, loadSite };
