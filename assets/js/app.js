/* ============================================================
   app.js — מרכיב את דף הבית מהנתונים
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var F = window.Freshness;

  var $ = function (sel) { return document.querySelector(sel); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  };

  /* שם קריא לרמת אימות — לשימוש בהיסטוריית השינויים */
  var LEVEL_NAMES = {
    verified: 'מאומת', initial: 'דיווח ראשוני', shared_root: 'מקור-שורש משותף',
    disputed: 'שנוי במחלוקת', retracted: 'בוטל', assessment: 'הערכה', unverified: 'ללא מקור'
  };
  function levelName(l) { return LEVEL_NAMES[l] || l || '—'; }

  /* ---------- נתונים מהמשימה האוטומטית בענן (data/generated/feeds.js) ---------- */
  function generated(name) {
    var g = window.DB.generated;
    var e = g && g[name];
    if (!e) return { entry: null, state: F.evaluate('generated', null, undefined, true) };
    // הגיל נמדד מהבדיקה האחרונה של המשימה. נכשלה → "מקור לא זמין" עם הנתון הקודם.
    var st = F.evaluate('generated', e.ok ? e.checked_at : (e.fetched_at || null), e.ok, true);
    return { entry: e, state: st };
  }

  /* כותרת (בעברית, או מתורגמת אוטומטית) + תאריך + קישור.
     במעבר עכבר על כותרת מתורגמת — הכותרת המקורית באנגלית. */
  function headlineItem(i) {
    if (!/^https:\/\//.test(i.link || '')) return '';   // רק קישורים מאובטחים — הגנה מקישור זדוני
    var translated = !!i.title_en;
    var text = translated ? (i.title_he || i.title_en) : i.title;
    var tip = translated ? ('מקור: ' + i.title_en) : '';
    return '<li><a href="' + esc(i.link) + '" target="_blank" rel="noopener noreferrer"' +
             (translated ? ' lang="he" title="' + esc(tip) + '"' : '') + '>' + esc(text) + '</a>' +
           ' <span class="locked">· ' + F.dateText(i.date) + '</span>' +
           (translated
             ? (i.title_he ? ' <span class="tag-demo" title="' + esc(tip) + '">תורגם אוטומטית</span>'
                           : ' <span class="tag-demo">באנגלית — התרגום נכשל</span>')
             : '') +
           '</li>';
  }

  /* ---------- קבוצות ישראליות באירופה (משותף לפינת הספורט ול"היום בקצרה") ---------- */
  var EN_HE_CLUBS = [
    [/hapoel be'?er|hapoel beer/i, 'הפועל ב"ש'], [/maccabi tel.?aviv/i, 'מכבי ת"א'], [/hapoel tel.?aviv/i, 'הפועל ת"א'],
    [/maccabi haifa/i, 'מכבי חיפה'], [/hapoel haifa/i, 'הפועל חיפה'], [/beitar jerusalem/i, 'בית"ר י-ם'],
    [/hapoel jerusalem/i, 'הפועל י-ם'], [/maccabi netanya/i, 'מכבי נתניה'], [/bnei sakhnin/i, 'בני סכנין'],
    [/maccabi petah|maccabi petach/i, 'מכבי פ"ת'], [/hapoel petah|hapoel petach/i, 'הפועל פ"ת'],
    [/kiryat shmona/i, 'הפועל ק"ש'], [/hapoel ramat gan/i, 'הפועל ר"ג'], [/tiberias/i, 'עירוני דורות טבריה']
  ];
  var ISRAELI_EN = /\b(maccabi|hapoel|beitar|ironi|bnei sakhnin|bnei yehuda)\b/i;
  var UEFA_HE = {
    'uefa.champions': 'ליגת האלופות', 'uefa.champions_qual': 'מוקדמות ליגת האלופות',
    'uefa.europa': 'הליגה האירופית', 'uefa.europa_qual': 'מוקדמות הליגה האירופית',
    'uefa.europa.conf': 'ליגת הקונפרנס', 'uefa.europa.conf_qual': 'מוקדמות ליגת הקונפרנס'
  };

  function clubHe(en) {
    for (var i = 0; i < EN_HE_CLUBS.length; i++) if (EN_HE_CLUBS[i][0].test(en)) return EN_HE_CLUBS[i][1];
    return en;
  }
  function localDate(iso) {
    var d = new Date(iso);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /* משחק אירופי → { israeliHe, opponent, israeliHome, result: W/L/D, extra, channel } */
  function europeView(g) {
    var ilHome = ISRAELI_EN.test(g.home);
    var il = ilHome ? g.home : g.away, opp = ilHome ? g.away : g.home;
    var he = clubHe(il);
    var res = '';
    if (g.completed) {
      var ils = ilHome ? g.home_score : g.away_score, ops = ilHome ? g.away_score : g.home_score;
      var ilWin = ilHome ? g.home_winner : g.away_winner, opWin = ilHome ? g.away_winner : g.home_winner;
      res = ils > ops ? 'W' : ils < ops ? 'L' : 'D';
    }
    var extra = /pen/i.test(g.detail) ? 'בפנדלים' : /aet/i.test(g.detail) ? 'אחרי הארכה' : '';
    // תיקו במשחק, אבל יש מנצח — הוכרע בפנדלים, או בסיכום שני משחקים (שלב מוקדמות)
    if (g.completed && res === 'D' && (ilWin || opWin)) {
      if (extra === 'בפנדלים') { res = ilWin ? 'W' : 'L'; }
      else { extra = ilWin ? '· עלתה בסיכום שני המשחקים' : '· הודחה בסיכום שני המשחקים'; }
    }
    var tv = null;
    var lh = window.DB.generated && window.DB.generated.ligat_haal && window.DB.generated.ligat_haal.data;
    if (lh && R.isDisplayable(R.sourceById('src_livegames'))) {
      tv = (lh.one_sided_tv || []).filter(function (t) { return t.israeli_team === he && t.date === localDate(g.date); })[0] || null;
    }
    return { he: he, opp: opp, ilHome: ilHome, result: res, extra: extra, tv: tv,
             comp: UEFA_HE[g.comp] || g.comp,
             score: g.completed ? F.ltr((ilHome ? g.home_score : g.away_score) + '–' + (ilHome ? g.away_score : g.home_score)) : '' };
  }

  /* ---------- תג טריות לכל פינה ---------- */
  function freshTag(key, stateOverride) {
    var s = stateOverride || F.state(key);
    var txt = (s.level === 'down' || s.level === 'loading') ? s.label : ('עודכן ב-' + s.time + ' · ' + s.label);
    return '<span class="fresh-tag ' + s.level + '" title="' + esc(s.age_text) + '">' + esc(txt) + '</span>';
  }

  /* ---------- שלד פינה ---------- */
  function corner(num, title, key, innerHTML, wide, stateOverride) {
    return '' +
      '<section class="corner' + (wide ? ' wide' : '') + '">' +
        '<header>' +
          '<span class="num">' + num + '</span>' +
          '<h2>' + esc(title) + '</h2>' +
          freshTag(key, stateOverride) +
        '</header>' +
        '<div class="body">' + innerHTML + '</div>' +
      '</section>';
  }

  /* ============================================================
     ראש הדף
     ============================================================ */
  function renderHeader() {
    $('#brand').innerHTML = esc(C.brand.site_name.slice(0, -1)) + '<span>' + esc(C.brand.site_name.slice(-1)) + '</span>';
    $('#tagline').textContent = C.brand.tagline;
    $('#clock').textContent = 'שעון האתר: ' + F.dateTimeText(F.now().toISOString()) +
                              ' · מצב פרסום: ' + (C.publish_mode === 'public' ? 'ציבורי' : 'אישי');
    // נפתח כקובץ (C:/…/index.html)? הכל עובד חוץ מהמוזיקה — YouTube לא מנגן בדף שנפתח כקובץ.
    if (location.protocol === 'file:') {
      var note = document.createElement('div');
      note.className = 'file-note';
      note.textContent = '🎵 האתר נפתח כקובץ, ולכן הנגן לא עובד בתוך הדף (מגבלה של YouTube). ' +
                         'לפתיחה עם נגן: לחיצה כפולה על "open-site.vbs" בתיקיית האתר (אחר כך גם index.html יעבור לבד). ' +
                         'או: כפתור "נגן ב-YouTube" בנגן למטה.';
      document.body.insertBefore(note, document.body.firstChild);
    }
  }

  /* ------------------------------------------------------------
     "היום בקצרה" — נבנה מהנתונים האמיתיים בכללים פשוטים, בלי בינה.
     כל שורה נכתבת רק אם יש לה נתון אמיתי מאחוריה. אין נתון → אין שורה.
     ------------------------------------------------------------ */
  function renderDaily() {
    var live = window.DB.live || {};
    var lines = [];
    function pc(v) { return F.ltr((v > 0 ? '+' : '') + v.toFixed(2) + '%'); }

    // 1. מלחמות — ניתוח מאושר (אם יש), אחרת נתוני הדמה עם סימון
    var pubArenas = C.arenas.map(function (a) { return { a: a, p: publishedFor(a.id) }; })
      .filter(function (o) { return o.p && Date.now() - new Date(o.p.analysis.generated_at).getTime() < 72 * 3600000; });
    var evs = (window.DB.events || []).filter(function (e) { return e.arena === 'iran'; });
    var verifiedToday = evs.filter(function (e) {
      return R.assess(e).level === 'verified' && e.last_update_at.slice(0, 10) === '2026-09-16';
    }).length;
    if (pubArenas.length) {
      // שורה אחת: כל זירה + מספר אירועים (לחיצה עוברת לזירה). מתחת — תמונת מצב קצרה של הזירה שעודכנה אחרונה.
      var newest = pubArenas.slice().sort(function (x, y) {
        return x.p.analysis.generated_at < y.p.analysis.generated_at ? 1 : -1;
      })[0];
      var chips = pubArenas.map(function (o) {
        var an = o.p.analysis;
        var ver = an.events.filter(function (e) { return R.assess(e).level === 'verified'; }).length;
        return '<button type="button" class="arena-chip" data-goto="' + esc(o.a.id) + '" title="' +
               esc(F.dateTimeText(an.generated_at)) + (ver ? ' · ' + ver + ' מאומתים' : '') + '">' +
               esc(o.a.name) + ' <span class="n">' + F.ltr(String(an.events.length)) + '</span></button>';
      }).join('');
      lines.push('<b>מלחמות</b> <span class="chips-row">' + chips + '</span>' +
                 '<div class="daily-sum clamp2">' + esc(newest.a.name) + ' — ' + esc(newest.p.analysis.summary) + '</div>');
    } else if (evs.length) {
      lines.push('<b>מלחמות</b> <span class="tag-demo">דמה</span>: ' + verifiedToday + ' אירועים אומתו היום בזירת איראן. ' +
                 'הניתוח האמיתי יופיע כאן אחרי שתאשר את הניתוח היומי הראשון.');
    }

    // 2. שווקים — המכשיר שזז הכי הרבה ברשימה + נפט + דולר
    var syms = (window.DB.markets.watchlist || []).map(function (w) { return w.symbol; });
    var moves = [];
    syms.forEach(function (s) {
      var r = resolveQuote(s);
      if (r && !r.down && r.q.change !== null && r.q.change !== undefined) moves.push({ s: s, c: r.q.change, q: r.q });
    });
    if (moves.length) {
      var big = moves.slice().sort(function (a, b) { return Math.abs(b.c) - Math.abs(a.c); })[0];
      var parts = ['הכי זז ברשימה: ' + F.ltr(big.s) + ' ' + pc(big.c)];
      var oil = moves.filter(function (m) { return m.s === 'USOIL'; })[0];
      var usd = moves.filter(function (m) { return m.s === 'USD/ILS'; })[0];
      if (oil && oil !== big) parts.push('נפט ' + pc(oil.c));
      if (usd && usd !== big) parts.push('דולר/שקל ' + F.ltr(usd.q.price.toFixed(3)) + ' (' + pc(usd.c) + ')');
      lines.push('<b>שווקים</b>: ' + parts.join(' · ') + '.');
    }

    // 3ב. ספורט — ישראלים שכבשו/בישלו (או 20+ נקודות ב-NBA) ב-36 השעות האחרונות
    var sp = live.sports && live.sports.data;
    if (sp) {
      var stars = [];
      sp.forEach(function (row) {
        var ov = row.ov && row.ov.data;
        if (!ov) return;
        (ov.games || []).forEach(function (g) {
          var age = Date.now() - new Date(g.date).getTime();
          if (age < 0 || age > 36 * 3600000) return;
          var s = g.stats || {}, bits = [];
          if (row.player.sport === 'nba') { if (+s.PTS >= 20) bits.push(F.ltr(s.PTS + ' נק\'')); }
          else {
            if (+s.G) bits.push(+s.G === 1 ? 'כבש' : 'כבש ' + F.ltr(String(s.G)));
            if (+s.A) bits.push(+s.A === 1 ? 'בישל' : 'בישל ' + F.ltr(String(s.A)));
          }
          if (bits.length) stars.push(esc(row.player.name) + ' ' + bits.join(' ו') + ' (' + esc(row.player.club) + ' ' +
            F.ltr((g.team_score !== null ? g.team_score : '?') + '–' + (g.opp_score !== null ? g.opp_score : '?')) + ')');
        });
      });
      if (stars.length) lines.push('<b>ספורט</b>: ' + stars.slice(0, 3).join(' · ') + '.');
    }

    // 3ג. קבוצה ישראלית באירופה — היום, או תוצאה מאתמול
    var eu = live.europe && live.europe.data;
    if (eu) {
      var todayL = localDate(new Date().toISOString());
      var yest = localDate(new Date(Date.now() - 86400000).toISOString());
      var euLines = (eu.games || []).filter(function (g) {
        var d = localDate(g.date);
        return d === todayL || (d === yest && g.completed);
      }).map(function (g) {
        var v = europeView(g);
        if (!g.completed) {
          return esc(localDate(g.date) === todayL ? 'היום' : '') + ' ' + F.ltr(F.hhmm(g.date)) + ' ' + esc(v.he) + ' נגד ' + esc(v.opp) +
                 ' (' + esc(v.comp) + (v.tv ? ', ' + esc(v.tv.channel) : '') + ')';
        }
        var word = { W: 'ניצחה', L: 'הפסידה', D: 'סיימה בתיקו' }[v.result] || '';
        return esc(v.he) + ' ' + word + ' ' + v.score + ' את ' + esc(v.opp) + ' (' + esc(v.comp) + ')';
      });
      if (euLines.length) lines.push('<b>באירופה</b>: ' + euLines.join(' · ') + '.');
    }

    // 3ד. AI — ההכרזה הראשונה, אם יש
    var gai = window.DB.generated && window.DB.generated.ai && window.DB.generated.ai.data;
    var launch = gai && (gai.news || []).filter(function (n) { return n.launch; })[0];
    if (launch && /^https:\/\//.test(launch.link)) {
      lines.push('<b>AI</b>: <a href="' + esc(launch.link) + '" target="_blank" rel="noopener noreferrer">' +
                 esc(launch.title_he || launch.title || launch.title_en) + '</a> <span class="locked">(' + esc(launch.source) + ')</span>');
    }

    // 4. ריבית
    var gb = window.DB.generated && window.DB.generated.boi && window.DB.generated.boi.data;
    var fed = live.fed && live.fed.data;
    if (gb || fed) {
      var rp = [];
      if (gb) rp.push('בנק ישראל ' + F.ltr(gb.rate.toFixed(2) + '%'));
      if (fed) rp.push('הפד ' + F.ltr(fed.target[0].toFixed(2) + '%–' + fed.target[1].toFixed(2) + '%'));
      lines.push('<b>ריבית</b>: ' + rp.join(' · ') + '.');
    }

    // 5. הכותרת הכלכלית הראשונה שנוגעת לרשימה
    var gg = window.DB.generated && window.DB.generated.globes && window.DB.generated.globes.data;
    var top = gg && gg.market && gg.market.filter(function (i) {
      return Object.keys(C.market_keywords || {}).some(function (k) { return C.market_keywords[k].test(i.title); });
    })[0];
    if (top) {
      lines.push('<b>בכותרות</b>: <a href="' + esc(top.link) + '" target="_blank" rel="noopener noreferrer">' + esc(top.title) + '</a> ' +
                 '<span class="locked">(גלובס)</span>');
    }

    $('#daily-list').innerHTML = lines.length
      ? lines.map(function (t) { return '<li>' + t + '</li>'; }).join('')
      : '<li class="locked">טוען נתונים…</li>';
    bindDailyChips();
  }

  document.addEventListener('live:update', renderDaily);

  /* ============================================================
     1. מלחמות / גיאופוליטיקה
     ------------------------------------------------------------
     לכל זירה: ניתוח מאושר מהבינה הפרטית (data/war/published.js) אם יש.
     אין? באיראן — נתוני הדמה של שלב 1 (מסומנים). בשאר — "ממתין לניתוח ראשון".
     ============================================================ */
  var activeFilter = 'all';
  var activeArena = null;

  function publishedFor(arenaId) {
    var p = window.DB.war_published || {};
    return p[arenaId] && p[arenaId].analysis ? p[arenaId] : null;
  }

  var CONF_WORD = { high: 'מקורות מיפוי חזקים', medium: 'מקורות חלקיים', low: 'הערכה בלבד, מקורות מוגבלים' };

  /* מצב העדכון של הפינה = הניתוח המאושר האחרון (מכל הזירות) */
  function warsState() {
    var p = window.DB.war_published || {}, latest = null;
    Object.keys(p).forEach(function (k) {
      var g = p[k] && p[k].analysis && p[k].analysis.generated_at;
      if (g && (!latest || g > latest)) latest = g;
    });
    return F.evaluate('wars', latest, latest ? true : undefined, true);
  }

  function renderWars() {
    if (!activeArena) {
      var firstPublished = C.arenas.filter(function (a) { return publishedFor(a.id); })[0];
      activeArena = firstPublished ? firstPublished.id : 'iran';
    }
    var arena = C.arenas.filter(function (a) { return a.id === activeArena; })[0] || C.arenas[0];
    var pub = publishedFor(arena.id);
    var isDemo = !pub && arena.id === 'iran' && (window.DB.events || []).length > 0;

    var tabs = C.arenas.map(function (a) {
      var has = !!publishedFor(a.id);
      var label = esc(a.name) + (has ? '' : ' · ממתין');
      return '<button type="button" data-arena="' + esc(a.id) + '" class="' + (a.id === arena.id ? 'active' : '') + '">' + label + '</button>';
    }).join('');

    var html = '<div class="arena-tabs">' + tabs + '</div>';

    if (pub) {
      html += publishedHead(arena, pub);
    } else if (isDemo) {
      html += '<div class="window-note"><span class="tag-demo">דמה</span> ' +
        '<b>חלון זמן:</b> 48 השעות האחרונות · <b>זירה:</b> ' + esc(arena.name) +
        ' · נתוני דמה משלב 1, עד שיאושר ניתוח ראשון מהבינה הפרטית.</div>' +
        mapBox(arena.map_confidence, '', []);
    } else {
      html += '<div class="window-note">אין עדיין ניתוח מאושר לזירה הזו. ' +
        'ניתוח יופיע כאן אחרי שהמחשב הפרטי ישלח אותו, הוא יעבור את הבדיקה, ואתה תאשר אותו.</div>';
      $('#wars-slot').innerHTML = corner(1, 'מלחמות / גיאופוליטיקה', 'wars', html, true, warsState());
      bindWarTabs();
      return;
    }

    html +=
      '<div class="filters">' +
        '<span class="lbl">סינון לפי סטטוס:</span>' +
        '<button type="button" data-f="all" class="' + (activeFilter === 'all' ? 'active' : '') + '">הכל</button>' +
        '<button type="button" data-f="verified" class="' + (activeFilter === 'verified' ? 'active' : '') + '">מאומת בלבד</button>' +
        '<button type="button" data-f="notverified" class="' + (activeFilter === 'notverified' ? 'active' : '') + '">לא מאומת</button>' +
        '<button type="button" data-f="changed" class="' + (activeFilter === 'changed' ? 'active' : '') + '">שונה/תוקן</button>' +
      '</div>' +
      '<div id="events"></div>' +
      '<div id="not-verified-section"></div>' +
      (pub ? publishedTail(pub) : '');

    $('#wars-slot').innerHTML = corner(1, 'מלחמות / גיאופוליטיקה', 'wars', html, true, warsState());
    renderEvents();
    bindWarTabs();
    if (pub) drawWarMap(pub.analysis.events);

    Array.prototype.forEach.call(document.querySelectorAll('#wars-slot .filters button'), function (b) {
      b.addEventListener('click', function () {
        activeFilter = b.dataset.f;
        Array.prototype.forEach.call(document.querySelectorAll('#wars-slot .filters button'), function (x) {
          x.classList.toggle('active', x === b);
        });
        renderEvents();
      });
    });
  }

  function bindDailyChips() {
    Array.prototype.forEach.call(document.querySelectorAll('#daily-list .arena-chip'), function (b) {
      b.addEventListener('click', function () {
        activeArena = b.dataset.goto;
        renderWars();
        document.getElementById('wars-slot').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function bindWarTabs() {
    Array.prototype.forEach.call(document.querySelectorAll('#wars-slot .arena-tabs button'), function (b) {
      b.addEventListener('click', function () { activeArena = b.dataset.arena; renderWars(); });
    });
  }

  function mapBox(confidence, note, layers, points) {
    return '<div class="map-box">' +
      '<div class="map-head">' +
        '<span>🗺️ מפת הערכה — <b>אינה קו שליטה מאומת בשטח בזמן אמת</b></span>' +
        '<span>· מופקת פעם ביום</span>' +
        '<span>· רמת ביטחון המיפוי: <span class="conf ' + esc(confidence) + '">' + esc(CONF_WORD[confidence] || confidence) + '</span></span>' +
      '</div>' +
      (note ? '<div class="map-note">' + esc(note) + '</div>' : '') +
      ((layers || []).length ? '<ul class="rows map-layers">' + layers.map(function (l) {
          return '<li><span class="conf ' + esc(l.confidence) + '">●</span> <b>' + esc(l.name) + '</b> — ' + esc(l.description) +
                 ' <span class="locked">(' + esc(CONF_WORD[l.confidence] || l.confidence) + ')</span></li>';
        }).join('') + '</ul>' : '') +
      (points
        ? '<div class="map-canvas live" id="war-map" aria-label="מפת אירועים"></div>' +
          '<div class="map-legend"><span class="dot verified"></span>מאומת <span class="dot initial"></span>דיווח ראשוני ' +
          '<span class="dot shared_root"></span>מקור משותף <span class="dot other"></span>הערכה/אחר · ' +
          '<span class="dash"></span>מקווקו = שכבת הערכה (אזור פעילות / זיקה בין מקומות) · ' +
          '<span class="locked">נקודה = מקום שהוזכר בדיווח, לא מיקום מדויק ולא קו שליטה</span></div>'
        : '<div class="map-canvas">אין בניתוח הזה אירועים עם מקום מוגדר — המפה תוצג כשיהיו</div>') +
    '</div>';
  }

  /* ---- מפת אירועים: נקודה לכל מקום שהוזכר. המיקום חושב בקוד (OpenStreetMap), לא ע"י הבינה ---- */
  var LEAFLET = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';
  var leafletLoading = null, warMap = null;

  function loadLeaflet() {
    if (window.L) return Promise.resolve(window.L);
    if (leafletLoading) return leafletLoading;
    leafletLoading = new Promise(function (resolve, reject) {
      var css = document.createElement('link');
      css.rel = 'stylesheet'; css.href = LEAFLET + 'leaflet.min.css';
      css.integrity = 'sha384-c6Rcwz4e4CITMbu/NBmnNS8yN2sC3cUElMEMfP3vqqKFp7GOYaaBBCqmaWBjmkjb'; css.crossOrigin = 'anonymous';
      document.head.appendChild(css);
      var js = document.createElement('script');
      js.src = LEAFLET + 'leaflet.min.js';
      js.integrity = 'sha384-NElt3Op+9NBMCYaef5HxeJmU4Xeard/Lku8ek6hoPTvYkQPh3zLIrJP7KiRocsxO'; js.crossOrigin = 'anonymous';
      js.onload = function () { resolve(window.L); };
      js.onerror = function () { leafletLoading = null; reject(new Error('leaflet')); };
      document.head.appendChild(js);
    });
    return leafletLoading;
  }

  function inArena(p) {
    var a = C.arenas.filter(function (x) { return x.id === activeArena; })[0];
    var b = a && a.map_box;
    return !b || (p.lat >= b[0] && p.lon >= b[1] && p.lat <= b[2] && p.lon <= b[3]);
  }

  /* outside=true → מקומות מחוץ לאזור הזירה (מוצגים כטקסט מתחת למפה, לא כנקודה) */
  function mapPoints(events, outside) {
    var pts = [];
    (events || []).forEach(function (ev) {
      (ev.places || []).forEach(function (p) {
        if (typeof p.lat === 'number' && typeof p.lon === 'number' && inArena(p) === !outside) pts.push({ ev: ev, p: p });
      });
    });
    return pts;
  }

  /* ---- שכבת הערכה על המפה ----
     מחושבת בקוד מתוך המקומות שהוזכרו בדיווחים (לא הבינה קובעת):
       • עיגול מקווקו = אזור שבו התקבצו כמה דיווחים ("אזור פעילות").
       • קו מקווקו = שני מקומות שנזכרו באותו דיווח.
     שני אלה הם הערכה בלבד — לא קו שליטה ולא תנועת כוחות מאומתת. */
  function degDist(a, b) {
    var dy = a.lat - b.lat;
    var dx = (a.lon - b.lon) * Math.cos((a.lat + b.lat) / 2 * Math.PI / 180);
    return Math.sqrt(dx * dx + dy * dy);
  }

  function assessLayer(L, pts, events) {
    var group = L.layerGroup(), used = [], drew = false;

    pts.forEach(function (o, i) {                      // אשכול מקומות קרובים (עד ~130 ק"מ)
      if (used[i]) return;
      var cl = [o]; used[i] = 1;
      pts.forEach(function (o2, j) {
        if (!used[j] && degDist(o.p, o2.p) <= 1.2) { cl.push(o2); used[j] = 1; }
      });
      if (cl.length < 2) return;
      var lat = 0, lon = 0;
      cl.forEach(function (x) { lat += x.p.lat; lon += x.p.lon; });
      lat /= cl.length; lon /= cl.length;
      var far = 0;
      cl.forEach(function (x) { far = Math.max(far, degDist({ lat: lat, lon: lon }, x.p)); });
      L.circle([lat, lon], {
        radius: far * 111000 + 18000, className: 'assess-area',
        color: '#8b949e', weight: 1.5, dashArray: '6 6', fillOpacity: 0.07, interactive: true
      }).bindPopup('<div dir="rtl"><b>אזור פעילות — הערכה</b><br>' +
        F.ltr(String(cl.length)) + ' מקומות שהוזכרו בדיווחים באזור הזה.<br>' +
        '<span class="locked">הערכה אוטומטית, לא קו שליטה מאומת.</span></div>').addTo(group);
      drew = true;
    });

    (events || []).forEach(function (ev) {             // קו בין מקומות של אותו דיווח
      var ps = (ev.places || []).filter(function (p) {
        return typeof p.lat === 'number' && typeof p.lon === 'number' && inArena(p);
      });
      for (var k = 1; k < ps.length; k++) {
        L.polyline([[ps[k - 1].lat, ps[k - 1].lon], [ps[k].lat, ps[k].lon]], {
          className: 'assess-link', color: '#8b949e', weight: 2, dashArray: '4 7', opacity: 0.75
        }).bindPopup('<div dir="rtl"><b>' + esc(ev.title) + '</b><br>' +
          esc(ps[k - 1].name) + ' ← ' + esc(ps[k].name) + '<br>' +
          '<span class="locked">נזכרו יחד באותו דיווח — הערכה, לא תנועת כוחות מאומתת.</span></div>').addTo(group);
        drew = true;
      }
    });

    return drew ? group : null;
  }

  function drawWarMap(events) {
    var el = document.getElementById('war-map');
    if (!el) return;
    if (warMap) { warMap.remove(); warMap = null; }
    var pts = mapPoints(events);
    loadLeaflet().then(function (L) {
      if (!document.body.contains(el)) return;          // המשתמש עבר זירה בינתיים
      warMap = L.map(el, { scrollWheelZoom: false, attributionControl: true });
      // שכבת המפה — לפי כללי השימוש של כל שירות (נבדק 17/09/2026):
      //   אתר (http/https) → OpenStreetMap: חינם לשימוש קל, עם קרדיט וכתובת אתר (הדפדפן שולח אותה).
      //   נפתח כקובץ → Esri אפור-כהה: OSM חוסם דף בלי כתובת אתר ("Access blocked"). שימוש אישי במחשב בלבד.
      //   (Wikimedia הוסר — השירות מיועד לאתרי ויקימדיה. CARTO דורש מפתח.)
      if (location.protocol === 'file:') {
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          { maxZoom: 12, attribution: 'מפה: &copy; Esri' }).addTo(warMap);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
          { maxZoom: 12, pane: 'overlayPane' }).addTo(warMap);
      } else {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 12, className: 'osm-dark',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
        }).addTo(warMap);
      }
      var bounds = [];
      pts.forEach(function (o) {
        var a = R.assess(o.ev);
        var cls = ['verified', 'initial', 'shared_root'].indexOf(a.level) > -1 ? a.level : 'other';
        var m = L.circleMarker([o.p.lat, o.p.lon], { radius: 8, weight: 2, className: 'war-pt ' + cls });
        m.bindPopup('<div dir="rtl"><b>' + esc(o.ev.title) + '</b><br>📍 ' + esc(o.p.name) +
                    '<br><span class="badge ' + esc(a.level) + '">' + esc(levelName(a.level)) + '</span></div>');
        m.addTo(warMap);
        bounds.push([o.p.lat, o.p.lon]);
      });
      if (pts.length >= 2) {                            // שכבת הערכה — רק כשיש לפחות שני מקומות ממופים
        var assess = assessLayer(L, pts, events);
        if (assess) {
          assess.addTo(warMap);
          L.control.layers(null, { 'שכבת הערכה (מקווקו)': assess }, { collapsed: false, position: 'bottomleft' }).addTo(warMap);
        }
      }
      if (bounds.length === 1) warMap.setView(bounds[0], 7);
      else warMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 8 });
    }).catch(function () {
      el.textContent = 'המפה לא נטענה (אין חיבור לשרת המפות). האירועים מופיעים ברשימה למטה.';
    });
  }

  function changeSummary(changes) {
    var n = { new: 0, up: 0, down: 0 };
    Object.keys(changes || {}).forEach(function (k) { if (n[changes[k].kind] !== undefined) n[changes[k].kind]++; });
    return F.ltr(String(n.new)) + ' חדשים · ' + F.ltr(String(n.up)) + ' עלו ברמת האימות · ' + F.ltr(String(n.down)) + ' ירדו';
  }

  /* ראש הניתוח: חלון זמן, מקור הניתוח, סיכום, חזיתות, מפה */
  function publishedHead(arena, pub) {
    var a = pub.analysis;
    return '<div class="window-note">' +
        '<b>חלון זמן:</b> ' + F.dateTimeText(a.window.from) + ' ← ' + F.dateTimeText(a.window.to) +
        ' · <b>זירה:</b> ' + esc(arena.name) +
        ' · נוצר ' + F.dateTimeText(a.generated_at) + ' ע"י ' + esc(a.model.name) +
        ' · <span class="tag-demo">אושר לפרסום</span>' +
        ' · <span class="locked">נכתב בעזרת בינה מלאכותית ועלול לכלול טעויות — ' +
        '<a href="legal.html">הבהרות</a></span>' +
        (pub.previous_generated_at ? ' · <b>השוואה</b> לניתוח מ-' + F.dateTimeText(pub.previous_generated_at) + ': ' +
          changeSummary(pub.changes) : '') +
      '</div>' +
      '<p class="war-summary">' + esc(a.summary) + '</p>' +
      '<h3 class="sub">חזיתות וצירים</h3><ul class="rows">' + a.fronts.map(function (f) {
        return '<li><b>' + esc(f.name) + '</b> — ' + esc(f.status) + '</li>';
      }).join('') + '</ul>' +
      mapBox(a.map.confidence, a.map.note, a.map.layers, mapPoints(a.events).length) +
      (function () {
        var far = mapPoints(a.events, true);
        return far.length ? '<p class="locked filter-note">מחוץ לאזור המפה: ' + far.map(function (o) {
          return esc(o.p.name) + ' (' + esc(o.ev.title) + ')'; }).join(' · ') + '</p>' : '';
      })();
  }

  /* סוף הניתוח: כלכלה, מטרות (מוצהרת/מוסקת/תחזית), מקורות */
  function publishedTail(pub) {
    var a = pub.analysis;
    var eco = (a.economy || []).length
      ? '<h3 class="sub">מגמות כלכליות נלוות</h3><ul class="rows">' + a.economy.map(function (x) {
          var ch = (x.change_pct === null || x.change_pct === undefined) ? '' :
            ' <span class="' + (x.change_pct >= 0 ? 'up' : 'down') + '">' + F.ltr((x.change_pct >= 0 ? '+' : '') + x.change_pct + '%') + '</span>';
          var src = R.sourceById(x.source_id);
          return '<li><b>' + esc(x.indicator) + '</b>: ' + F.ltr(esc(String(x.value)) + ' ' + esc(x.unit)) + ch +
                 ' <span class="locked">· ' + esc(src ? src.name : x.source_id) + ' · ' + F.dateTimeText(x.as_of) + '</span></li>';
        }).join('') + '</ul>'
      : '';

    function col(title, items, cls) {
      return '<div class="goal-col ' + cls + '"><div class="goal-h">' + title + '</div>' +
        (items.length ? '<ul>' + items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'
                      : '<div class="locked">—</div>') + '</div>';
    }
    var goals = (a.strategic_goals || []).length
      ? '<h3 class="sub">מטרות אסטרטגיות — מופרדות, לא כעובדה אחת</h3>' + a.strategic_goals.map(function (g) {
          return '<div class="goal-actor"><b>' + esc(g.actor) + '</b><div class="goal-grid">' +
            col('מטרה מוצהרת', g.declared, 'declared') +
            col('מטרה מוסקת (הערכה)', g.inferred, 'inferred') +
            col('תחזית', g.forecast, 'forecast') + '</div></div>';
        }).join('')
      : '';

    var cited = '<details class="cited-box"><summary>מקורות (' + F.ltr(String(a.sources_cited.length)) + ')</summary>' +
      '<ul class="rows cited">' + a.sources_cited.map(function (c) {
        var src = R.sourceById(c.source_id);
        var ok = R.isDisplayable(src) && /^https:\/\//.test(c.url || '');
        return '<li>' + esc(src ? src.name : c.source_id) +
          (ok ? ' · <a href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer">קישור</a>' : ' · <span class="locked">לא מוצג במצב הפרסום הנוכחי</span>') +
          ' <span class="locked">· נבדק ' + F.dateTimeText(c.accessed_at) + '</span></li>';
      }).join('') + '</ul>' +
      '<p class="locked filter-note">רמות האימות מחושבות באתר מתוך המקורות — הבינה לא קובעת מה מאומת. ' +
      'טיוטה: ' + esc(pub.draft) + '</p></details>';

    return eco + goals + cited;
  }

  function passesFilter(a, ev) {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'verified')    return a.level === 'verified';
    if (activeFilter === 'notverified') return ['initial', 'shared_root', 'unverified', 'disputed', 'retracted'].indexOf(a.level) > -1;
    if (activeFilter === 'changed') {
      var pub = publishedFor(activeArena);
      var ch = pub && pub.changes ? pub.changes[ev.id] : null;
      return a.revisions.length > 0 || !!(ch && (ch.kind === 'up' || ch.kind === 'down'));
    }
    return true;
  }

  function renderEvents() {
    var pub = publishedFor(activeArena);
    var source = pub ? pub.analysis.events : (window.DB.events || []).filter(function (e) { return e.arena === activeArena; });
    var list = source.slice().sort(function (x, y) { return new Date(y.last_update_at) - new Date(x.last_update_at); });

    var shown = [];
    var html = list.map(function (ev) {
      var a = R.assess(ev);
      if (!passesFilter(a, ev)) return '';
      shown.push({ ev: ev, a: a });
      return eventCard(ev, a, pub && pub.changes ? pub.changes[ev.id] : null);
    }).join('');

    $('#events').innerHTML = html || '<p class="locked">אין אירועים בסינון הזה.</p>';

    // סעיף נפרד ומפורש "מה לא מאומת": מה שהאתר חישב + מה שהניתוח עצמו ציין
    var nv = shown.filter(function (o) {
      return ['initial', 'shared_root', 'unverified', 'disputed'].indexOf(o.a.level) > -1;
    });
    var extra = pub ? (pub.analysis.not_verified || []) : [];
    $('#not-verified-section').innerHTML = (!nv.length && !extra.length) ? '' :
      '<h3 class="sub">⚠️ מה לא מאומת (' + (nv.length + extra.length) + ' פריטים)</h3>' +
      '<ul class="rows">' +
        nv.map(function (o) { return '<li><b>' + esc(o.ev.title) + '</b> — ' + esc(o.a.reason) + '</li>'; }).join('') +
        extra.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
      '</ul>';
  }

  function eventCard(ev, a, change) {
    var rootCounts = {};
    a.reports.forEach(function (r) { rootCounts[r.source_root_id] = (rootCounts[r.source_root_id] || 0) + 1; });

    var rows = a.reports.map(function (r) {
      var s = R.sourceById(r.source_id);
      var dup = rootCounts[r.source_root_id] > 1;
      var ok  = R.isDisplayable(s);
      return '<tr class="' + (dup ? 'same-root ' : '') + (ok ? '' : 'blocked') + '">' +
        '<td>' + esc(s ? s.name : r.source_id) + '</td>' +
        '<td>' + esc(s ? s.kind : '—') + '</td>' +
        '<td class="root">' + (dup ? 'משותף לכמה פרסומים' : 'עצמאי') + '</td>' +
        '<td>' + F.dateTimeText(r.published_at) + '</td>' +
        '<td><span class="badge lic">' + esc(s ? R.licenseLabel(s) : '—') + '</span>' +
            (ok ? '' : ' <span class="badge lic">לא מוצג</span>') + '</td>' +
      '</tr>';
    }).join('');

    var timeline = !a.revisions.length ? '' :
      '<h4>היסטוריית שינויים</h4><ul class="timeline">' +
      a.revisions.map(function (v) {
        var move = (v.from_level || v.to_level)
          ? ' <span class="move">' + esc(levelName(v.from_level)) + ' ← ' + esc(levelName(v.to_level)) + '</span>'
          : '';
        return '<li class="' + v.kind + '"><span class="t">' + F.dateTimeText(v.at) + '</span>' + move +
               '<br>' + esc(v.text) + '</li>';
      }).join('') + '</ul>';

    var late = R.isLateVerification(ev) ? ' <span class="badge late">אימות מאוחר</span>' : '';
    // מהמפרט: מה חדש בחלון הזמן, ומה עדכון/אימות מאוחר של אירוע ישן
    if (ev.is_new_in_window === true)  late += ' <span class="badge ongoing">חדש בחלון</span>';
    if (ev.is_new_in_window === false) late += ' <span class="badge lic">עדכון לאירוע קודם</span>';
    // מה השתנה מול הניתוח המאושר הקודם (חושב בקוד, לפי קישורים משותפים)
    if (change && change.kind === 'new')  late += ' <span class="badge change-new">🆕 חדש מהניתוח הקודם</span>';
    if (change && change.kind === 'up')   late += ' <span class="badge change-up">⬆️ עלה: ' + esc(levelName(change.from)) + ' ← ' + esc(levelName(change.to)) + '</span>';
    if (change && change.kind === 'down') late += ' <span class="badge change-down">⬇️ ירד: ' + esc(levelName(change.from)) + ' ← ' + esc(levelName(change.to)) + '</span>';
    var reasonClass = a.level === 'verified' ? 'ok' : (a.level === 'shared_root' ? 'bad' : '');

    var span = R.timeSpan(ev);
    var ongoing = (span.kind === 'ongoing') ? ' <span class="badge ongoing">נמשך כעת</span>' : '';

    /* הורדת סטטוס — מוצגת בגלוי, גם בשורה הסגורה וגם בפירוט.
       זה מכוון: שינוי בשקט הוא מה שהורס אמון. */
    var dg = R.downgrade(ev);
    var dgBadge = dg ? ' <span class="badge downgraded">האימות בוטל</span>' : '';
    var dgNote  = !dg ? '' :
      '<div class="downgrade-note">' +
        '<b>⚠️ שינוי סטטוס לאחור.</b> אירוע זה הוצג באתר כ<b>' + esc(levelName(dg.from_level)) + '</b> ' +
        'במשך כ-' + R.downgradeDurationHours(ev) + ' שעות, עד ' + F.dateTimeText(dg.at) + '.<br>' +
        esc(dg.text) +
      '</div>';

    return '' +
    '<details class="event' + (ev.lifecycle === 'retracted' ? ' is-retracted' : '') + '">' +
      '<summary>' +
        '<span class="badge ' + a.level + '">' + esc(a.label) + '</span>' +
        '<span class="ttl">' + esc(ev.title) + '</span>' + late + ongoing + dgBadge +
        '<span class="meta">' + esc(ev.id) + ' · ' + esc(ev.axis) +
          ' · ' + esc(span.text) +
          ' · עודכן: ' + F.dateTimeText(ev.last_update_at) +
          ' · ' + a.report_count + ' פרסומים / ' + a.root_count + ' מקורות-שורש' +
        '</span>' +
      '</summary>' +
      '<div class="detail">' +
        dgNote +
        '<h4>תמצית</h4><p>' + esc(ev.summary) + '</p>' +
        '<div class="reason ' + reasonClass + '"><b>למה הסטטוס הזה:</b> ' + esc(a.reason) + '</div>' +
        '<div class="not-verified"><b>מה לא מאומת:</b> ' + esc(ev.what_is_not_verified) + '</div>' +
        '<h4>מקורות</h4>' +
        '<table class="src"><thead><tr>' +
          '<th>מקור</th><th>סוג</th><th>מקור-שורש</th><th>פורסם</th><th>רישוי</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table>' +
        (a.blocked_count ? '<p class="locked">' + a.blocked_count + ' מקור/ות לא מוצג/ים במצב הפרסום הנוכחי.</p>' : '') +
        timeline +
      '</div>' +
    '</details>';
  }

  /* ============================================================
     2. כלכלה + שווקים
     ============================================================ */
  /* המקורות החיים של פינת השווקים */
  var LIVE_SOURCES = {
    crypto: 'src_coingecko',
    fx_ecb: 'src_ecb',
    fed:    'src_nyfed'
  };

  /* לכל סימול: רשימת מקורות לפי סדר עדיפות. הראשון שעובד — מוצג.
     מניות, מדדים ונפט מוצגים בווידג'טים של TradingView (CNBC חסם גישה — 403 ו-CORS). */
  var SYMBOL_SOURCES = {
    'BTC': ['crypto'], 'ETH': ['crypto'], 'DOGE': ['crypto'],
    'USD/ILS': ['fx_ecb'], 'EUR/ILS': ['fx_ecb'], 'EUR/USD': ['fx_ecb'],
    'ILS/RON': ['fx_ecb']
  };

  /* המקורות שמותר להציג במצב הפרסום הנוכחי, עבור סימול */
  function allowedKeys(symbol) {
    return (SYMBOL_SOURCES[symbol] || []).filter(function (k) {
      return R.isDisplayable(R.sourceById(LIVE_SOURCES[k]));
    });
  }

  /* ---- TradingView (גרסה ציבורית בלבד) ---- */
  function tvEnabled() {
    return !!C.tradingview && R.isDisplayable(R.sourceById('src_tradingview'));
  }
  function tvSymbol(symbol) {
    return tvEnabled() && !allowedKeys(symbol).length ? (C.tradingview.symbols[symbol] || null) : null;
  }

  var tvRendered = false;
  /* הווידג'טים נטענים פעם אחת בכרטיס נפרד — כרטיס השווקים מתרענן כל דקה, ו-iframe שנבנה מחדש נטען מאפס */
  function renderMarketsTV() {
    var slot = $('#markets-tv-slot');
    if (!slot || tvRendered) return;
    if (!tvEnabled()) { slot.innerHTML = ''; return; }
    tvRendered = true;
    var syms = window.DB.markets.watchlist.map(function (w) {
      return { name: tvSymbol(w.symbol), displayName: w.symbol };
    }).filter(function (x) { return x.name; });

    slot.innerHTML = corner('2ב', 'מחירים ומפת חום של S&P 500 — TradingView', 'markets',
      '<div class="tv-grid">' +
        (syms.length ? '<div class="tv-box" id="tv-quotes"></div>' : '') +
        '<div class="tv-box" id="tv-hot"></div>' +
      '</div>' +
      '<p class="locked">מחירי מניות, מדדים ונפט — ווידג\'טים רשמיים של TradingView (בהשהיה לפי הבורסה).</p>', true,
      { level: 'loading', label: 'חי — מתעדכן בתוך TradingView', age_text: 'הרענון נעשה בתוך הווידג\'ט עצמו' });

    function mount(id, file, cfg) {
      var box = document.getElementById(id);
      if (!box) return;
      box.innerHTML = '<div class="tradingview-widget-container"><div class="tradingview-widget-container__widget"></div>' +
        '<div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">' +
        'נתונים: TradingView</a></div></div>';
      var sc = document.createElement('script');
      sc.src = 'https://s3.tradingview.com/external-embedding/' + file;
      sc.async = true;
      sc.textContent = JSON.stringify(cfg);        // כך TradingView קורא את ההגדרות
      box.firstChild.appendChild(sc);
    }
    var common = { colorTheme: 'dark', isTransparent: true, locale: 'he_IL', width: '100%' };
    if (syms.length) {
      mount('tv-quotes', 'embed-widget-market-quotes.js', Object.assign({
        height: 420, showSymbolLogo: true,
        symbolsGroups: [{ name: 'רשימת המעקב', symbols: syms }]
      }, common));
    }
    mount('tv-hot', 'embed-widget-stock-heatmap.js', {
      dataSource: C.tradingview.heatmap_source || 'SPX500', exchanges: [], grouping: 'sector',
      blockSize: 'market_cap_basic', blockColor: 'change', hasTopBar: false, isDataSetEnabled: false,
      isZoomEnabled: true, hasSymbolTooltip: true, isMonoSize: false,
      colorTheme: 'dark', locale: 'he_IL', width: '100%', height: 420
    });
  }

  /* מחזיר { key, q, down, fallback } או null */
  function resolveQuote(symbol) {
    var live = window.DB.live || {};
    var keys = allowedKeys(symbol);
    var i, e;
    // 1. מקור תקין לפי סדר העדיפות
    for (i = 0; i < keys.length; i++) {
      e = live[keys[i]];
      if (e && e.ok && e.data && e.data[symbol]) return { key: keys[i], q: e.data[symbol], down: false, fallback: i > 0 };
    }
    // 2. אין מקור תקין — הנתון האמיתי האחרון שנשמר, מסומן "ישן"
    for (i = 0; i < keys.length; i++) {
      e = live[keys[i]];
      if (e && e.data && e.data[symbol]) return { key: keys[i], q: e.data[symbol], down: true, fallback: i > 0 };
    }
    return null;
  }

  function fmtPrice(sym, v) {
    var d = /\//.test(sym) ? 4 : (v >= 1000 ? 0 : (v >= 1 ? 2 : 5));
    return v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  }

  function fmtChange(c) {
    if (c === null || c === undefined) return '<span class="locked">—</span>';
    var cls = c >= 0 ? 'up' : 'down';
    return '<span class="' + cls + '">' + F.ltr((c >= 0 ? '+' : '') + c.toFixed(2) + '%') + '</span>';
  }

  function renderMarkets() {
    var m = window.DB.markets;
    var live = window.DB.live || {};

    var quotes = '<div class="quotes">' + m.watchlist.map(function (q) {
      var keys = allowedKeys(q.symbol);

      /* --- גרסה ציבורית: סימול בלי מקור מותר מוצג בווידג'ט TradingView שמתחת --- */
      if (!keys.length && tvSymbol(q.symbol)) return '';

      /* --- סימול שאין לו מקור חי מותר: דמה, מסומן --- */
      if (!keys.length) {
        var cls = q.change >= 0 ? 'up' : 'down';
        return '<div class="quote demo" title="נתון דמה — אין עדיין מקור מחובר">' +
               '<b>' + esc(q.symbol) + ' <span class="tag-demo">דמה</span></b>' +
               '<span class="p">' + F.ltr(esc(q.price)) + '</span> ' +
               '<span class="' + cls + '">' + F.ltr((q.change >= 0 ? '+' : '') + q.change + '%') + '</span></div>';
      }

      /* --- סימול עם מקור חי --- */
      var r = resolveQuote(q.symbol);

      // אין שום נתון אמיתי: "—". לעולם לא נופלים חזרה למספר דמה.
      if (!r) {
        var anyTried = keys.some(function (k) { return live[k]; });
        return '<div class="quote' + (anyTried ? ' is-down' : '') + '">' +
               '<b>' + esc(q.symbol) + ' <span class="tag-live' + (anyTried ? ' off' : '') + '">' + (anyTried ? 'לא זמין' : 'טוען') + '</span></b>' +
               '<span class="p">—</span></div>';
      }

      var lq = r.q;
      var stale = r.down || lq.old_close;
      var tag = stale ? 'ישן' : (lq.closed ? 'סגירה' : 'חי');
      var tagCls = stale ? ' off' : (lq.closed ? ' closed' : '');

      var tips = [];
      if (lq.closed)        tips.push('הבורסה סגורה — מחיר הסגירה מ-' + F.dateText(lq.as_of));
      else if (lq.as_of)    tips.push('נתון מ-' + F.dateTimeText(lq.as_of));
      if (lq.delayed)       tips.push('בהשהיה');
      if (lq.change_basis)  tips.push('שינוי: ' + lq.change_basis);
      if (r.fallback)       tips.push('מקור גיבוי: שער ייחוס יומי של ECB');

      return '<div class="quote live' + (stale ? ' is-down' : '') + '" title="' + esc(tips.join(' · ')) + '">' +
             '<b>' + esc(q.symbol) + ' <span class="tag-live' + tagCls + '">' + tag + '</span>' +
               (lq.delayed ? ' <span class="tag-demo">השהיה</span>' : '') +
               (r.fallback ? ' <span class="tag-demo">ECB</span>' : '') + '</b>' +
             '<span class="p">' + F.ltr(esc(fmtPrice(q.symbol, lq.price))) + '</span> ' +
             fmtChange(lq.change) + '</div>';
    }).join('') + '</div>';

    /* --- שורת סטטוס לכל מקור חי: מאיפה, מתי, כמה טרי, קרדיט --- */
    var liveStates = [];
    var srcLines = Object.keys(LIVE_SOURCES).map(function (key) {
      if (key === 'fed') return '';                   // ריבית מוצגת בסעיף הכלכלה
      var src = R.sourceById(LIVE_SOURCES[key]);
      if (!src || !R.isDisplayable(src)) return '';   // מקור חסום — לא מוצג ולא נספר

      var entry = live[key];
      var st = F.evaluate(key, entry && entry.data_time, entry ? entry.ok : undefined, true);
      liveStates.push(st);

      var syms = Object.keys(SYMBOL_SOURCES).filter(function (s) {
        return allowedKeys(s).indexOf(key) > -1 && m.watchlist.some(function (w) { return w.symbol === s; });
      });

      var when = '';
      if (entry && entry.data_time) {
        if (key === 'fx_ecb') when = 'שער ייחוס יומי מ-' + F.dateText(entry.data_time);
        else when = 'נתון מ-' + F.hhmm(entry.data_time);
      }

      var extra = (entry && entry.ok === false)
        ? ' · <span class="down">הפנייה האחרונה נכשלה' + (entry.data ? ', מוצג הנתון האחרון שנשמר' : '') + '</span>'
        : '';

      var personal = src.license_mode === 'personal_only'
        ? ' · <span class="tag-demo">שימוש אישי בלבד</span>' : '';

      return '<li class="src-line">' +
        '<span class="fresh-tag ' + st.level + '">' + esc(st.label) + '</span> ' +
        '<b>' + esc(src.name) + '</b>' + personal + ' — ' + esc(syms.join(', ')) +
        (when ? ' · ' + esc(when) : '') + extra +
        '<div class="locked">' + esc(src.attribution || '') + '</div>' +
      '</li>';
    }).join('');

    var demoSyms = m.watchlist.filter(function (q) { return !allowedKeys(q.symbol).length && !tvSymbol(q.symbol); })
                              .map(function (q) { return q.symbol; });

    var statusBlock =
      '<ul class="rows src-status">' + srcLines +
        (demoSyms.length
          ? '<li class="src-line"><span class="tag-demo">דמה</span> ' + esc(demoSyms.join(', ')) +
            ' <span class="locked">— אין מקור מורשה במצב הפרסום הנוכחי.</span></li>'
          : '') +
      '</ul>';

    // תג הפינה = המצב הגרוע ביותר מבין המקורות החיים
    var headerState = liveStates.length ? F.worst(liveStates) : null;

    headerState = liveStates.length ? F.worst(liveStates) : null;

    var demoTag = ' <span class="tag-demo">דמה</span>';

    /* --- ריביות --- */
    function pct(v) { return F.ltr((Math.round(v * 100) / 100).toFixed(2) + '%'); }
    function range(a, b) { return F.ltr((Math.round(a * 100) / 100).toFixed(2) + '%–' + (Math.round(b * 100) / 100).toFixed(2) + '%'); }
    function dmy(isoDate) { var p = isoDate.split('-'); return F.ltr(p[2] + '/' + p[1] + '/' + p[0]); }

    var rateItems = [];

    // בנק ישראל — מהמשימה האוטומטית בענן. אם אין ממנה נתון בכלל — תמונת המצב הידנית כגיבוי.
    var gb = generated('boi');
    var snap = window.DB.rates_snapshot && window.DB.rates_snapshot.boi;
    var boiSrc = R.sourceById('src_boi');
    var fromJob = gb.entry && gb.entry.data;
    var boi = fromJob ? gb.entry.data : snap;
    if (boi && R.isDisplayable(boiSrc)) {
      var bst = fromJob ? gb.state : F.evaluate('boi', snap.checked_at, true, true);
      if (fromJob) liveStates.push(bst);
      var dir = boi.previous_rate === null || boi.previous_rate === undefined ? ''
              : boi.rate < boi.previous_rate ? 'הורדה' : (boi.rate > boi.previous_rate ? 'העלאה' : 'ללא שינוי');
      var how = fromJob
        ? 'עודכן אוטומטית' + (gb.entry.checked_at ? ' · נבדק ' + F.dateTimeText(gb.entry.checked_at) : '') +
          (gb.entry.ok === false ? ' · <span class="down">הבדיקה האחרונה נכשלה, מוצג הנתון האחרון שנשמר</span>' : '')
        : 'תמונת מצב ידנית מ-' + F.dateText(snap.checked_at) + ' — המשימה האוטומטית עדיין לא רצה';
      rateItems.push(
        '<li><span class="fresh-tag ' + bst.level + '">' + esc(bst.label) + '</span> ' +
        '<b>בנק ישראל: ' + pct(boi.rate) + '</b>' +
        (boi.effective_from ? ' · בתוקף מ-' + dmy(boi.effective_from) : '') +
        (dir ? ' (' + dir + ' מ-' + pct(boi.previous_rate) + ')' : '') +
        '<div class="locked">' + how + ' · ' + esc(boiSrc.attribution) + '</div></li>');
    }

    // הפד — חי
    var fedSrc = R.sourceById('src_nyfed');
    if (R.isDisplayable(fedSrc)) {
      var fe = live.fed;
      var fst = F.evaluate('fed', fe && fe.data_time, fe ? fe.ok : undefined, true);
      liveStates.push(fst);
      var fedTxt;
      if (fe && fe.data) {
        var d = fe.data;
        fedTxt = '<b>הפד: ' + range(d.target[0], d.target[1]) + '</b>' +
                 ' <span class="locked">(טווח יעד)</span> · אפקטיבית ' + pct(d.effr) + ' ב-' + dmy(d.date);
        if (d.last_change) {
          var up = d.last_change.to[1] > d.last_change.from[1];
          fedTxt += '<div>שינוי אחרון: ' + dmy(d.last_change.date) + ' — ' + (up ? 'העלאה' : 'הורדה') +
                    ' מ-' + range(d.last_change.from[0], d.last_change.from[1]) + '</div>';
        } else {
          fedTxt += '<div>ללא שינוי מאז ' + dmy(d.window_start) + '</div>';
        }
        if (fe.ok === false) fedTxt += ' <span class="down">· הפנייה האחרונה נכשלה, מוצג הנתון האחרון שנשמר</span>';
      } else {
        fedTxt = '<b>הפד:</b> ' + (fe ? '<span class="down">לא זמין</span>' : 'טוען…');
      }
      rateItems.push('<li><span class="fresh-tag ' + fst.level + '">' + esc(fst.label) + '</span> ' + fedTxt +
                     '<div class="locked">' + esc(fedSrc.attribution) + '</div></li>');
    }
    headerState = liveStates.length ? F.worst(liveStates) : null;

    /* --- חדשות שמזיזות שוק: גלובס (מהמשימה בענן) + וואלה כסף (חי), מסונן לרשימה --- */
    function marketTags(title) {
      if (C.market_noise && C.market_noise.test(title)) return [];
      return Object.keys(C.market_keywords || {}).filter(function (k) { return C.market_keywords[k].test(title); });
    }

    var gg = generated('globes');
    var globesOk = R.isDisplayable(R.sourceById('src_globes')) && gg.entry && gg.entry.data;
    var wallaEco = live.economy;
    var wallaOk = R.isDisplayable(R.sourceById('src_walla')) && wallaEco && wallaEco.data;

    var pool = [].concat(
      globesOk ? gg.entry.data.market.map(function (i) { i.src = 'גלובס'; return i; }) : [],
      wallaOk ? wallaEco.data.items.map(function (i) { i.src = 'וואלה'; return i; }) : []
    );
    var cutoff = new Date(Date.now() - 48 * 3600 * 1000).toISOString();
    var seenTitles = {};
    var marketNews = pool
      .filter(function (i) { return i.date >= cutoff; })
      .map(function (i) { return { i: i, tags: marketTags(i.title) }; })
      .filter(function (x) {
        var key = x.i.title.replace(/[^א-תA-Za-z0-9]/g, '').slice(0, 40);
        if (!x.tags.length || seenTitles[key]) return false;
        seenTitles[key] = true;
        return true;
      })
      .sort(function (a, b) { return a.i.date < b.i.date ? 1 : -1; })
      .slice(0, 6);

    var marketNewsHtml;
    if (!globesOk && !wallaOk) {
      marketNewsHtml = '<p class="locked">' + (wallaEco || gg.entry ? '<span class="down">המקורות לא זמינים כרגע.</span>' : 'טוען…') + '</p>';
    } else if (!marketNews.length) {
      marketNewsHtml = '<p class="locked">אין ב-48 השעות האחרונות כותרות שנוגעות למכשירים ברשימה.</p>';
    } else {
      marketNewsHtml = '<ul class="rows news">' + marketNews.map(function (x) {
        return '<li><a href="' + esc(x.i.link) + '" target="_blank" rel="noopener noreferrer">' + esc(x.i.title) + '</a>' +
               ' <span class="locked">· ' + esc(x.i.src) + ' · ' + F.dateTimeText(x.i.date) + '</span>' +
               '<div class="mk-tags">נוגע ל: ' + x.tags.map(function (t) { return '<span class="tag-demo">' + esc(t) + '</span>'; }).join(' ') + '</div></li>';
      }).join('') + '</ul>';
    }
    marketNewsHtml += '<p class="locked filter-note">גלובס' + (globesOk ? ' (נבדק ' + F.dateTimeText(gg.entry.checked_at) + ' · <span class="fresh-tag ' + gg.state.level + '">' + esc(gg.state.label) + '</span>)' : ' (לא זמין)') +
                      ' + וואלה כסף. סינון לפי מילות מפתח של המכשירים ברשימה — ללא בינה.</p>';

    var globesTopHtml = globesOk && gg.entry.data.top.length
      ? '<ul class="rows news">' + gg.entry.data.top.map(function (i) {
          return '<li><a href="' + esc(i.link) + '" target="_blank" rel="noopener noreferrer">' + esc(i.title) + '</a>' +
                 ' <span class="locked">· ' + F.dateTimeText(i.date) + '</span></li>';
        }).join('') + '</ul>' +
        '<p class="locked filter-note">כותרות וקישורים: גלובס. כלכליסט נבדק וחוסם גישה.</p>'
      : '<p class="locked">' + (gg.entry ? '<span class="down">גלובס לא זמין כרגע.</span>' : 'המשימה האוטומטית עדיין לא הביאה נתונים.') + '</p>';

    var html =
      '<h3 class="sub">Watchlist</h3>' + quotes + statusBlock +
      '<h3 class="sub">חדשות שמזיזות שוק <span class="locked">(רק מה שנוגע לרשימה שלך)</span></h3>' + marketNewsHtml +
      '<h3 class="sub">ריבית</h3>' +
      '<ul class="rows src-status">' + rateItems.join('') + '</ul>' +
      '<h3 class="sub">כלכלה — כתבות ראשיות מגלובס</h3>' + globesTopHtml;

    $('#markets-slot').innerHTML = corner(2, 'כלכלה + שווקים פיננסיים', 'markets', html, true, headerState);
  }

  // כשמגיע נתון חי — מציירים מחדש רק את פינת השווקים
  document.addEventListener('live:update', renderMarkets);

  /* ============================================================
     3. AI
     ============================================================ */
  function renderAI() {
    var g = generated('ai');
    var newsOk = R.isDisplayable(R.sourceById('src_ai_labs')) || R.isDisplayable(R.sourceById('src_geektime'));
    var toolsOk = R.isDisplayable(R.sourceById('src_hf'));

    if (!g.entry || !g.entry.data) {
      $('#ai-slot').innerHTML = corner(3, 'AI', 'ai',
        '<p class="locked">המשימה האוטומטית עדיין לא הביאה נתונים.</p>', false, g.state);
      return;
    }
    var d = g.entry.data;

    /* חדשות — לכל היותר 2 ביום (לפי המפרט) */
    var newsHtml = !newsOk ? '<p class="locked">אין מקור מורשה במצב הפרסום הנוכחי.</p>'
      : !(d.news || []).length ? '<p class="locked">אין ב-3 הימים האחרונים הכרזה או חדשה משמעותית.</p>'
      : '<ul class="rows news">' + d.news.map(function (n) {
          var item = headlineItem(n);
          var tags = '<span class="badge lic">' + esc(n.source) + '</span> ' +
                     (n.launch ? '<span class="badge lic ai-launch">🚀 הכרזה</span> ' : '');
          return item.replace('<li>', '<li>' + tags);
        }).join('') + '</ul>';

    /* כלים ודמואים חינמיים — Hugging Face במגמה */
    var toolsHtml = !toolsOk ? '<p class="locked">אין מקור מורשה במצב הפרסום הנוכחי.</p>'
      : !(d.tools || []).length ? '<p class="locked">אין כרגע דמואים חדשים שעברו את הסינון.</p>'
      : '<ul class="rows news">' + d.tools.map(function (t) {
          if (!/^https:\/\//.test(t.link || '')) return '';
          return '<li><a href="' + esc(t.link) + '" target="_blank" rel="noopener noreferrer"><b>' + esc(t.title) + '</b></a>' +
                 ' <span class="locked">· ❤ ' + F.ltr(String(t.likes || 0)) + '</span>' +
                 '<div class="sp-player" title="' + esc(t.desc_en || '') + '">' + esc(t.desc_he || t.desc_en || '') +
                 (t.desc_he ? ' <span class="tag-demo">תורגם</span>' : '') + '</div></li>';
        }).join('') + '</ul>';

    var html =
      '<h3 class="sub">חדשות — מקסימום 2 ביום</h3>' + newsHtml +
      '<p class="locked filter-note">נבחרות לפי כללים קבועים, בלי בינה: הכרזה על מודל/מוצר קודמת לכל, ' +
        'אחריה חדשות תעשייה בעברית, ואחריה פוסטים כלליים. ממקורות שונים. נבדקו ' + (d.candidates || 0) + ' כתבות מ-3 הימים האחרונים.' +
        ((d.failed_sources || []).length ? ' <span class="down">לא נטענו: ' + esc(d.failed_sources.join(', ')) + '</span>' : '') + '</p>' +
      '<h3 class="sub">כלים · דמואים חינמיים (במגמה)</h3>' + toolsHtml +
      '<p class="locked filter-note">Hugging Face Spaces · מסוננים: תוכן לא הולם, הסרת סימני מים, דמואים שלא עובדים, עותקים.</p>' +
      '<div class="src-line locked"><span class="fresh-tag ' + g.state.level + '">' + esc(g.state.label) + '</span> ' +
        'נבדק ' + F.dateTimeText(g.entry.checked_at) +
        (g.entry.ok === false ? ' · <span class="down">הבדיקה האחרונה נכשלה, מוצג הנתון האחרון שנשמר</span>' : '') +
        ' · Anthropic, Google DeepMind, OpenAI, Google, גיקטיים, Hugging Face</div>';

    $('#ai-slot').innerHTML = corner(3, 'AI', 'ai', html, false, g.state);
  }

  document.addEventListener('live:update', function (ev) {
    if (ev.detail && ev.detail.key === 'generated') renderAI();
  });

  /* ============================================================
     4. ספורט
     ============================================================ */
  /* ישראלים בחו"ל בגרסה הציבורית: כותרות מוואלה ו-ONE (כותרת + קישור) + רשימת השחקנים.
     סטטיסטיקה מלאה (שערים/בישולים/נקודות) — רק בגרסה האישית, כי אין מקור חינמי שמותר להציג לציבור. */
  function abroadHeadlinesHtml() {
    var g = generated('abroad');
    var walla = R.isDisplayable(R.sourceById('src_walla')), one = R.isDisplayable(R.sourceById('src_one'));
    var d = g.entry && g.entry.data;
    if (!d || (!walla && !one)) {
      return '<h3 class="sub">ישראלים בחו"ל</h3><p class="locked">אין עדיין נתונים מהמשימה בענן.</p>';
    }
    var items = (d.items || []).filter(function (i) {
      return (i.source === 'ONE' ? one : walla) && /^https:\/\//.test(i.link || '');
    });
    var news = items.length
      ? '<ul class="rows">' + items.slice(0, 10).map(function (i) {
          return headlineItem(i).replace('</li>', ' <span class="locked">· ' + esc(i.source) + '</span>' +
            (i.players || []).map(function (n) { return ' <span class="badge lic">' + esc(n) + '</span>'; }).join('') + '</li>');
        }).join('') + '</ul>'
      : '<p class="locked">אין השבוע כותרות על השחקנים שבמעקב.</p>';

    var players = d.players || [];
    function list(sport) {
      return players.filter(function (p) { return p.sport === sport; }).map(function (p) {
        return '<span class="chip"><b>' + esc(p.name) + '</b> <span class="locked">' + esc(p.club) + '</span></span>';
      }).join(' ');
    }
    var eu = (d.europe || []).filter(function (i) {
      return (i.source === 'ONE' ? one : walla) && /^https:\/\//.test(i.link || '');
    });
    var europe = '<h3 class="sub">קבוצות ישראליות באירופה — בחדשות השבוע</h3>' + (eu.length
      ? '<ul class="rows">' + eu.slice(0, 6).map(function (i) {
          return headlineItem(i).replace('</li>', ' <span class="locked">· ' + esc(i.source) + '</span></li>');
        }).join('') + '</ul>'
      : '<p class="locked">אין השבוע כותרות על משחקים אירופיים של קבוצות ישראליות.</p>');

    return europe +
      '<h3 class="sub">ישראלים בחו"ל — בחדשות השבוע ' + freshTag('generated', g.state) + '</h3>' + news +
      '<details class="abroad-list"><summary>השחקנים במעקב (' + F.ltr(String(players.length)) + ')</summary>' +
        '<div class="chips"><div class="locked">NBA</div>' + list('nba') + '</div>' +
        '<div class="chips"><div class="locked">כדורגל</div>' + list('soccer') + '</div>' +
        '<p class="locked">הקבוצות לפי בדיקה מ-' + esc((window.DB.athletes || {}).checked_at || '') + '. ' +
        'תוצאות וסטטיסטיקה לכל שחקן מוצגות רק בגרסה האישית.</p>' +
      '</details>' +
      '<p class="locked">כותרות וקישורים: וואלה, ONE · נבדק ' + F.dateTimeText(g.entry.checked_at) + '</p>';
  }

  function renderSports() {
    var src = R.sourceById('src_espn');
    var A = window.DB.athletes || { players: [] };
    var sp = (window.DB.live || {}).sports;

    if (!R.isDisplayable(src)) {
      // ESPN חסום (מצב ציבורי) — ליגת העל עדיין מוצגת, כי מקורותיה מורשים
      $('#sports-slot').innerHTML = corner(4, 'ספורט', 'sports', ligatHaalHtml() + abroadHeadlinesHtml(), false,
                                            generated('ligat_haal').state);
      return;
    }

    var st = F.evaluate('sports', sp && sp.data_time, sp ? sp.ok : undefined, true);
    var DAY = 86400000;

    function relDay(iso) {
      var d = new Date(iso), now = new Date();
      var a = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      var b = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      var diff = Math.round((a - b) / DAY);
      return diff === 0 ? 'היום' : diff === 1 ? 'מחר' : diff === -1 ? 'אתמול' : F.dateText(iso);
    }

    function plural(n, one, many) { return n === 1 ? one : F.ltr(String(n)) + ' ' + many; }

    function soccerLine(s) {
      var parts = [], app = String(s.APP || '');
      if (/start/i.test(app)) parts.push('פתח');
      else if (/sub/i.test(app)) parts.push('נכנס כמחליף');
      var g = +s.G || 0, a = +s.A || 0, yc = +s.YC || 0, rc = +s.RC || 0;
      if (g) parts.push(plural(g, 'שער', 'שערים'));
      if (a) parts.push(plural(a, 'בישול', 'בישולים'));
      if (yc) parts.push('צהוב');
      if (rc) parts.push('🟥 אדום');
      return parts.join(', ');
    }

    function nbaLine(s) {
      if (!s.MIN || s.MIN === '0') return 'לא שיחק';
      return F.ltr((s.PTS || 0) + ' נק\'') + ', ' + F.ltr((s.REB || 0) + ' ריב\'') + ', ' + F.ltr((s.AST || 0) + ' אס\'') +
             ' <span class="locked">(' + F.ltr(s.MIN + ' דק\'') + ')</span>';
    }

    var RESULT = { W: 'ניצחון', L: 'הפסד', D: 'תיקו' };

    var results = {}, fixtures = {}, moved = [];
    var now = Date.now();

    ((sp && sp.data) || []).forEach(function (row) {
      var p = row.player;
      var ov = row.ov && row.ov.data;
      var tm = row.tm && row.tm.data;
      var was = (A.espn_team_at_check || {})[p.espn_id];
      if (tm && tm.team && was && tm.team !== was) moved.push({ p: p, from: was, to: tm.team });
      if (!ov) return;

      (ov.games || []).forEach(function (g) {
        var t = new Date(g.date).getTime();
        if (t > now || now - t > 7 * DAY) return;
        var key = g.id + ':' + g.team_abbr;
        var r = results[key] || (results[key] = { g: g, club: p.club, players: [] });
        r.players.push({ p: p, line: p.sport === 'nba' ? nbaLine(g.stats) : soccerLine(g.stats) });
      });

      var nx = ov.next;
      if (nx) {
        var t2 = new Date(nx.date).getTime();
        if (t2 >= now - 3 * 3600000 && t2 - now <= 7 * DAY) {
          var f = fixtures[nx.id] || (fixtures[nx.id] = { n: nx, players: [] });
          // בדיקת עקביות: המשחק הבא אמור לכלול את הקבוצה של השחקן. לא כולל? לא מציגים כוודאי.
          var team = (tm && tm.team) || was || '';
          var core = team.toLowerCase().replace(/\b(fc|cf|sc|ac|afc|fk|sk|united|city)\b/g, '').replace(/[^a-zÀ-ɏ]+/g, ' ').trim().split(' ')[0] || '';
          var inMatch = !core || (nx.home + ' ' + nx.away).toLowerCase().indexOf(core) > -1;
          f.players.push({ p: p, mismatch: !inMatch, team: team });
        }
      }
    });

    var resList = Object.keys(results).map(function (k) { return results[k]; })
      .sort(function (a, b) { return a.g.date < b.g.date ? 1 : -1; }).slice(0, 8);
    var fixList = Object.keys(fixtures).map(function (k) { return fixtures[k]; })
      .sort(function (a, b) { return a.n.date < b.n.date ? -1 : 1; }).slice(0, 8);

    var resultsHtml;
    if (!sp) resultsHtml = '<p class="locked">טוען נתונים של ' + A.players.filter(function (p) { return p.status === 'abroad'; }).length + ' שחקנים…</p>';
    else if (!sp.data) resultsHtml = '<p class="locked"><span class="down">המקור לא זמין כרגע.</span></p>';
    else if (!resList.length) resultsHtml = '<p class="locked">אין משחקים של ישראלים ב-7 הימים האחרונים.</p>';
    else resultsHtml = '<ul class="rows sport">' + resList.map(function (r) {
      var g = r.g;
      var score = (g.team_score !== null && g.opp_score !== null) ? F.ltr(g.team_score + '–' + g.opp_score) : '';
      var cls = g.result === 'W' ? 'up' : g.result === 'L' ? 'down' : '';
      return '<li><span class="locked">' + esc(relDay(g.date)) + ' · ' + esc(g.league || '') + '</span><br>' +
        '<b>' + esc(r.club) + '</b> ' + score + ' ' + esc(g.opponent || '') +
        (RESULT[g.result] ? ' <span class="' + cls + '">(' + RESULT[g.result] + ')</span>' : '') +
        (g.note ? ' <span class="locked">· ' + esc(g.note) + '</span>' : '') +
        r.players.map(function (x) {
          return '<div class="sp-player">' + esc(x.p.name) + (x.line ? ': ' + x.line : '') + '</div>';
        }).join('') + '</li>';
    }).join('') + '</ul>';

    var fixHtml;
    if (!sp || !sp.data) fixHtml = '';
    else if (!fixList.length) fixHtml = '<p class="locked">אין משחקים של ישראלים ב-7 הימים הקרובים.</p>';
    else fixHtml = '<ul class="rows sport">' + fixList.map(function (f) {
      var n = f.n;
      return '<li><b>' + esc(relDay(n.date)) + ' ' + F.ltr(F.hhmm(n.date)) + '</b> · ' +
        esc(n.home) + ' – ' + esc(n.away) + ' <span class="locked">· ' + esc(n.league || '') + '</span>' +
        '<div class="sp-player">' + f.players.map(function (x) {
          return esc(x.p.name) + (x.mismatch
            ? ' <span class="tag-demo" title="' + esc('ב-ESPN רשום ב-' + x.team + ', אבל המשחק הבא שלו לא של הקבוצה הזו') + '">⚠️ לא תואם לקבוצה שלו — ייתכן שעבר</span>'
            : '');
        }).join(', ') + '</div></li>';
    }).join('') + '</ul>';

    /* --- ליגת העל: משחקי היום (או המחזור הבא) + ערוץ, ותוצאות המחזור האחרון --- */
    function ligatHaalHtml() {
      var g = generated('ligat_haal');
      var okIfa = R.isDisplayable(R.sourceById('src_one_data')), okTv = R.isDisplayable(R.sourceById('src_livegames'));
      if (!g.entry || !g.entry.data) {
        return '<h3 class="sub">ליגת העל בכדורגל</h3><p class="locked">המשימה האוטומטית עדיין לא הביאה נתונים.</p>';
      }
      var d = g.entry.data;
      function localIso() { var n = new Date(); return new Date(n.getTime() - n.getTimezoneOffset() * 60000).toISOString().slice(0, 10); }
      function dm(iso) { var p = iso.split('-'); return F.ltr(p[2] + '/' + p[1]); }
      var today = localIso();
      var up = okTv ? (d.upcoming || []).filter(function (u) { return u.date >= today; }) : [];
      var todays = up.filter(function (u) { return u.date === today; });
      var show = todays.length ? todays : up.filter(function (u) {
        // המחזור הבא: כל המשחקים עד 3 ימים מהמשחק הקרוב
        return up.length && (new Date(u.date) - new Date(up[0].date)) <= 3 * 86400000;
      });
      var title = todays.length ? 'ליגת העל בכדורגל — היום' : 'ליגת העל בכדורגל — המחזור הבא';

      var upHtml = !okTv ? '<p class="locked">לוח המשחקים הקרובים: <a href="https://www.one.co.il/Soccer/League/1" target="_blank" rel="noopener noreferrer">ב-ONE</a></p>'
        : !show.length ? '<p class="locked">לא נמצאו משחקים בלוח השידורים לימים הקרובים.</p>'
        : '<ul class="rows sport">' + show.map(function (u) {
            var day = u.date === today ? 'היום' : dm(u.date);
            return '<li><b>' + esc(day === 'היום' ? '' : day + ' ') + F.ltr(esc(u.time)) + '</b> · ' + esc(u.home) + ' – ' + esc(u.away) +
                   '<div class="sp-player">📺 ' + esc(u.channels.join(' / ')) + '</div></li>';
          }).join('') + '</ul>';

      var res = okIfa ? (d.results || []) : [];
      var resHtml = res.length
        ? '<h3 class="sub">ליגת העל — תוצאות המחזור האחרון</h3><ul class="rows sport">' + res.map(function (r) {
            var sc = r.score.split('-');
            return '<li><span class="locked">' + dm(r.date) + '</span> · ' +
                   '<a href="' + esc(r.link) + '" target="_blank" rel="noopener noreferrer">' +
                   esc(r.home) + ' ' + F.ltr(esc(sc[0].trim()) + '–' + esc((sc[1] || '').trim())) + ' ' + esc(r.away) + '</a></li>';
          }).join('') + '</ul>'
        : (!okIfa
            ? '<p class="locked filter-note">תוצאות וטבלת ליגת העל: <a href="https://www.one.co.il/Soccer/League/1" target="_blank" rel="noopener noreferrer">ב-ONE</a></p>'
            : d.results_available === false
              ? '<p class="locked filter-note">תוצאות ליגת העל לא זמינות כרגע — המקור לא נקרא בימים האחרונים.</p>'
              : '');

      return '<h3 class="sub">' + title + '</h3>' + upHtml + resHtml +
        '<p class="locked filter-note">' + (okTv ? 'משחקים וערוצים: <a href="https://www.livegames.co.il/broadcastspage.aspx" target="_blank" rel="noopener noreferrer">LiveGames</a> · ' : '') +
        (okIfa ? 'תוצאות: <a href="https://www.one.co.il/Soccer/League/1" target="_blank" rel="noopener noreferrer">ONE</a> · ' : '') + 'נבדק ' + F.dateTimeText(g.entry.checked_at) + ' · <span class="fresh-tag ' + g.state.level + '">' + esc(g.state.label) + '</span></p>';
    }

    /* --- קבוצות ישראליות באירופה --- */
    function europeHtml() {
      var eu = (window.DB.live || {}).europe;
      var h = '<h3 class="sub">קבוצות ישראליות באירופה</h3>';
      if (!eu) return h + '<p class="locked">טוען…</p>';
      if (!eu.data) return h + '<p class="locked"><span class="down">המקור לא זמין כרגע.</span></p>';
      var games = eu.data.games || [];
      var nowT = Date.now();
      var up = games.filter(function (g) { return !g.completed && new Date(g.date).getTime() > nowT - 3 * 3600000; }).slice(0, 5);
      var done = games.filter(function (g) { return g.completed && nowT - new Date(g.date).getTime() < 45 * DAY; })
                      .sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 5);
      if (!up.length && !done.length) return h + '<p class="locked">אין קבוצות ישראליות במפעלים האירופיים בחודשים האחרונים.</p>';

      var RES = { W: ['ניצחון', 'up'], L: ['הפסד', 'down'], D: ['תיקו', ''] };
      var html = '';
      if (up.length) {
        html += '<ul class="rows sport">' + up.map(function (g) {
          var v = europeView(g);
          var teams = v.ilHome ? '<b>' + esc(v.he) + '</b> – ' + esc(v.opp) : esc(v.opp) + ' – <b>' + esc(v.he) + '</b>';
          return '<li><b>' + esc(relDay(g.date)) + ' ' + F.ltr(F.hhmm(g.date)) + '</b> · ' + teams +
                 '<div class="sp-player">' + esc(v.comp) + (v.tv ? ' · 📺 ' + esc(v.tv.channel) : '') + '</div></li>';
        }).join('') + '</ul>';
      }
      if (done.length) {
        html += '<div class="locked" style="margin-top:6px">תוצאות אחרונות:</div><ul class="rows sport">' + done.map(function (g) {
          var v = europeView(g);
          var r = RES[v.result] || ['', ''];
          return '<li><span class="locked">' + esc(relDay(g.date)) + '</span> · <b>' + esc(v.he) + '</b> ' + v.score + ' ' + esc(v.opp) +
                 (r[0] ? ' <span class="' + r[1] + '">(' + r[0] + (v.extra ? ' ' + v.extra : '') + ')</span>' : '') +
                 ' <span class="locked">· ' + esc(v.comp) + '</span></li>';
        }).join('') + '</ul>';
      }
      return h + html + '<p class="locked filter-note">כל המפעלים האירופיים, כולל מוקדמות · קבוצה ישראלית מזוהה לבד · ' +
             'התוצאה מוצגת מנקודת המבט של הקבוצה הישראלית · ESPN' + (up.some(function (g) { return europeView(g).tv; }) ? ' · ערוצים: LiveGames' : '') + '</p>';
    }

    var movedHtml = moved.length
      ? '<p class="locked filter-note">⚠️ ייתכן שעברו קבוצה (לפי ESPN): ' + moved.map(function (m) {
          return esc(m.p.name) + ' — ' + esc(m.from) + ' ← ' + esc(m.to);
        }).join(' · ') + '</p>'
      : '';

    var html =
      '<h3 class="sub">תוצאות ישראלים — 7 הימים האחרונים</h3>' + resultsHtml +
      '<h3 class="sub">ישראלים בחו"ל — משחקים קרובים</h3>' + fixHtml + movedHtml +
      ligatHaalHtml() + europeHtml() +
      (sp ? '<div class="src-line locked"><span class="fresh-tag ' + st.level + '">' + esc(st.label) + '</span> ' +
        (sp.data_time ? 'נבדק ' + F.dateTimeText(sp.data_time) : '') +
        (sp.partial_failures ? ' · <span class="down">' + sp.partial_failures + ' מתוך ' + sp.total + ' שחקנים לא נטענו</span>' : '') +
        ' · ' + esc(src.attribution) + ' · <span class="tag-demo">שימוש אישי בלבד</span></div>' : '');

    $('#sports-slot').innerHTML = corner(4, 'ספורט', 'sports', html, false, st);
  }

  document.addEventListener('live:update', function (ev) {
    if (ev.detail && (ev.detail.key === 'sports' || ev.detail.key === 'generated')) renderSports();
  });

  /* ============================================================
     5. תוכן חיובי
     ============================================================ */
  function renderPositive() {
    var demoTag = ' <span class="tag-demo">דמה</span>';
    var src = R.sourceById('src_walla');
    var liveOk = R.isDisplayable(src);
    var e = (window.DB.live || {}).positive;
    var st = F.evaluate('feeds', e && e.data_time, e ? e.ok : undefined, true);

    var TAGS = { approved: '✅ אושר', research: '🔬 בבדיקה' };
    var TAG_TIPS = {
      approved: 'הכותרת מציינת במפורש שהטיפול אושר או כבר קיים',
      research: 'מחקר, טיפול בדרך, או שלא ברור מהכותרת שכבר אושר — לא ליצור ציפיות'
    };

    var medical;
    if (!liveOk) {
      medical = '<p class="locked">אין מקור מורשה במצב הפרסום הנוכחי.</p>';
    } else if (!e) {
      medical = '<p class="locked">טוען…</p>';
    } else if (!e.data) {
      medical = '<p class="locked"><span class="down">הפיד לא זמין כרגע.</span></p>';
    } else if (!e.data.medical.length) {
      medical = '<p class="locked">אין כתבות חיוביות חדשות ב-45 הימים האחרונים.</p>';
    } else {
      medical = '<ul class="rows news">' + e.data.medical.map(function (i) {
        return '<li><span class="badge lic med-' + i.tag + '" title="' + esc(TAG_TIPS[i.tag]) + '">' + TAGS[i.tag] + '</span> ' +
               '<a href="' + esc(i.link) + '" target="_blank" rel="noopener noreferrer">' + esc(i.title) + '</a>' +
               ' <span class="locked">· ' + F.dateText(i.date) + '</span></li>';
      }).join('') + '</ul>';
    }

    /* חיות — Good News Network, כותרות מתורגמות, מהמשימה בענן */
    function animalsBlock() {
      var gsrc = R.sourceById('src_gnn');
      if (!R.isDisplayable(gsrc)) return '<p class="locked">אין מקור מורשה במצב הפרסום הנוכחי.</p>';
      var g = generated('animals');
      if (!g.entry || !g.entry.data) {
        return '<p class="locked"><span class="fresh-tag ' + g.state.level + '">' + esc(g.state.label) + '</span> ' +
               'המשימה האוטומטית עדיין לא הביאה נתונים.</p>';
      }
      return '<ul class="rows news">' + g.entry.data.map(headlineItem).join('') + '</ul>' +
        '<div class="src-line locked"><span class="fresh-tag ' + g.state.level + '">' + esc(g.state.label) + '</span> ' +
          'נבדק ' + F.dateTimeText(g.entry.checked_at) +
          (g.entry.ok === false ? ' · <span class="down">הבדיקה האחרונה נכשלה, מוצג הנתון האחרון שנשמר</span>' : '') +
          ' · ' + esc(gsrc.attribution) + '</div>';
    }

    var dr = e && e.data && e.data.dropped;
    var html =
      '<h3 class="sub">התקדמות רפואית</h3>' + medical +
      (liveOk && e && e.data
        ? '<p class="locked filter-note">נסרקו ' + e.data.scanned + ' כותרות · סוננו ' + dr.negative + ' שליליות' +
          (dr.sponsored ? ' ו-' + dr.sponsored + ' ממומנות' : '') +
          ' · ✅ ניתן רק כשכתוב במפורש שאושר. סינון לפי מילות מפתח, ללא בינה.</p>'
        : '') +
      '<h3 class="sub">חתולים וחיות</h3>' + animalsBlock() +
      (liveOk
        ? '<div class="src-line locked"><span class="fresh-tag ' + st.level + '">' + esc(st.label) + '</span> ' +
          (e && e.data_time ? 'נבדק ב-' + F.hhmm(e.data_time) : '') +
          (e && e.ok === false ? ' · <span class="down">הפנייה האחרונה נכשלה, מוצג הנתון האחרון שנשמר</span>' : '') +
          ' · ' + esc(src.attribution) + '</div>'
        : '');

    $('#positive-slot').innerHTML = corner(5, 'תוכן חיובי', 'positive', html, false, liveOk ? st : undefined);
  }

  document.addEventListener('live:update', function (ev) {
    if (ev.detail && (ev.detail.key === 'positive' || ev.detail.key === 'generated')) renderPositive();
  });

  /* ============================================================
     6. רכב + תיירות + קולנוע ביתי
     ============================================================ */
  function renderLifestyle() {
    var d = window.DB.lifestyle;
    var demoTag = ' <span class="tag-demo">דמה</span>';
    var li = function (x) { return '<li>' + esc(x.title) + '</li>'; };

    var src = R.sourceById('src_walla');
    var e = (window.DB.live || {}).lifestyle;
    var st = F.evaluate('feeds', e && e.data_time, e ? e.ok : undefined, true);
    var liveOk = R.isDisplayable(src);

    /* כותרת מקורית + תאריך + קישור. בלי תקציר ובלי תמונה (רישוי: קישור בלבד). */
    function newsList(items, emptyMsg) {
      if (!e) return '<p class="locked">טוען…</p>';
      if (items === null || items === undefined) return '<p class="locked"><span class="down">הפיד לא זמין כרגע.</span></p>';
      if (!items.length) return '<p class="locked">' + esc(emptyMsg) + '</p>';
      return '<ul class="rows news">' + items.map(function (i) {
        return '<li><a href="' + esc(i.link) + '" target="_blank" rel="noopener noreferrer">' + esc(i.title) + '</a>' +
               ' <span class="locked">· ' + F.dateText(i.date) + '</span></li>';
      }).join('') + '</ul>';
    }

    var ld = (e && e.data) || {};
    var liveHtml = !liveOk
      ? '<p class="locked">אין מקור מורשה במצב הפרסום הנוכחי.</p>'
      : '<h3 class="sub">רכב — מבחנים וסקירות</h3>' + newsList(ld.cars, 'אין מבחנים חדשים.') +
        '<h3 class="sub">תיירות — יעדים</h3>' + newsList(ld.destinations, 'אין כתבות יעדים חדשות.') +
        '<h3 class="sub">תיירות — חדשות תעופה שנוגעות לטיסות מ/אל ישראל</h3>' +
          newsList(ld.aviation, 'אין חדשות תעופה רלוונטיות ב-3 השבועות האחרונים.') +
          '<p class="locked filter-note">סינון אוטומטי לפי מילות מפתח (תעופה + קשר לישראל), ללא בינה — ייתכנו פספוסים.</p>' +
        '<h3 class="sub">תיירות — מבצעים חריגים מישראל</h3>' +
          '<p class="locked">עדיין אין מקור מתאים. לא נמצא פיד פתוח של מבצעי טיסות וחופשות.</p>' +
        '<div class="src-line locked"><span class="fresh-tag ' + st.level + '">' + esc(st.label) + '</span> ' +
          (e && e.data_time ? 'נבדק ב-' + F.hhmm(e.data_time) : '') +
          (e && e.ok === false ? ' · <span class="down">הפנייה האחרונה נכשלה, מוצג הנתון האחרון שנשמר</span>' : '') +
          ' · ' + esc(src.attribution) + '</div>';

    /* קולנוע ביתי: עברית (וואלה, חי מהדפדפן) + אנגלית (What Hi-Fi, מתורגם, מהמשימה בענן).
       ממוזגים לפי תאריך, 5 האחרונים. */
    var gav = generated('av_en');
    var avEnOk = R.isDisplayable(R.sourceById('src_whathifi')) && gav.entry && gav.entry.data;
    var avAll = [].concat(liveOk && ld.av ? ld.av : [], avEnOk ? gav.entry.data : [])
      .sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 5);
    var avHtml = (liveOk || avEnOk)
      ? '<h3 class="sub">קולנוע ביתי / סטריאו — סקירות ומוצרים</h3>' +
          (avAll.length ? '<ul class="rows news">' + avAll.map(headlineItem).join('') + '</ul>'
                        : '<p class="locked">אין סקירות אודיו/וידאו חדשות.</p>') +
          '<p class="locked filter-note">וואלה (עברית) + What Hi-Fi? (אנגלית, כותרות מתורגמות אוטומטית). כתבות מבצעים מסוננות.' +
          (avEnOk ? ' · אנגלית נבדקה ' + F.dateTimeText(gav.entry.checked_at) + ' · ' +
                    '<span class="fresh-tag ' + gav.state.level + '">' + esc(gav.state.label) + '</span>' : '') + '</p>'
      : '<h3 class="sub">קולנוע ביתי / סטריאו' + demoTag + '</h3><ul class="rows">' + d.av.map(li).join('') + '</ul>';

    var html = liveHtml + avHtml +
      '<h3 class="sub">&nbsp;</h3>' +
      '<div class="sponsored-box">' +
        '<div class="hdr">🏷️ תוכן מקודם — מוצרים שאני מקדם. לא ביקורת אובייקטיבית.</div>' +
        ((C.promoted_products || []).length
          ? '<ul class="rows">' + C.promoted_products.map(function (p) {
              return '<li>' + (p.url ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a>' : esc(p.title)) +
                     (p.desc ? ' <span class="locked">— ' + esc(p.desc) + '</span>' : '') + '</li>';
            }).join('') + '</ul>'
          : '<p class="locked">מקום שמור למוצרים שלי — יתווספו בהמשך.</p>') +
      '</div>';

    $('#lifestyle-slot').innerHTML = corner(6, 'רכב + תיירות + קולנוע ביתי', 'lifestyle', html, false,
                                            liveOk ? st : undefined);
  }

  document.addEventListener('live:update', function (ev) {
    if (ev.detail && (ev.detail.key === 'lifestyle' || ev.detail.key === 'generated')) renderLifestyle();
  });

  /* ============================================================
     7. נגן מוזיקה (ווידג'ט קבוע)
     ============================================================ */
  /* נגן המוזיקה — assets/js/player.js */

  function renderFooter() {
    // רק קישורים אמיתיים — placeholder ("#") לא מוצג, כדי שלא יהיו קישורים שלא מובילים לשום מקום
    $('#social').innerHTML = C.social.filter(function (s) { return /^https:\/\//.test(s.url || ''); }).map(function (s) {
      return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + '</a>';
    }).join('');
  }

  /* ---------- הרצה ---------- */
  renderHeader();
  renderDaily();
  renderWars();
  renderMarkets();
  renderMarketsTV();
  renderAI();
  renderSports();
  renderPositive();
  renderLifestyle();
  renderFooter();
})();
