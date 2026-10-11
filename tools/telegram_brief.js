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
function buildMessage(win, now) {
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
      return (ICON[r.level] || '•') + ' ' + esc(ev.title) + (r.label ? ' <i>(' + esc(r.label) + ')</i>' : '');
    });
    blocks.push('<b>' + esc(arena.name) + '</b>\n' + lines.join('\n') +
                '\n<a href="' + esc(base + '#arena=' + arena.id) + '">לפירוט ולמקורות ←</a>');
  }
  if (!blocks.length) return null;

  const head = '⚡ <b>' + esc(C.brand.site_name) + ' · עדכון ' + hhmm(b.slot || b.generated_at) + '</b>';
  const foot = '<i>נכתב בעזרת בינה מלאכותית ועלול לכלול טעויות. התווית מחושבת לפי מספר המקורות, ואינה אישור שהאירוע קרה.</i>';
  let text = head + '\n\n' + blocks.join('\n\n') + '\n\n' + foot;
  // ארוך מדי? מורידים זירות מהסוף עד שנכנס (לא חותכים באמצע תגית HTML)
  while (text.length > TG_LIMIT && blocks.length > 1) {
    blocks.pop();
    text = head + '\n\n' + blocks.join('\n\n') + '\n\n' + foot;
  }
  return { slot: b.slot || b.generated_at, text };
}

function readStatus() {
  try { return JSON.parse(fs.readFileSync(STATUS, 'utf8')); } catch (e) { return {}; }
}

async function main() {
  const dry = process.argv.includes('--dry-run');
  const msg = buildMessage(loadSite(), Date.now());
  if (!msg) { console.log('טלגרם: אין עדכון טרי לפרסום'); return; }
  if (dry) { console.log(msg.text); console.log('\n[' + msg.text.length + ' תווים]'); return; }

  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) { console.log('טלגרם: אין TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID — מדלג'); return; }

  const st = readStatus();
  if (st.last_slot === msg.slot) { console.log('טלגרם: העדכון של ' + msg.slot + ' כבר פורסם'); return; }

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
module.exports = { buildMessage, loadSite };
