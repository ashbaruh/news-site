/* ============================================================
   sports-live.js — ישראלים בחו"ל: תוצאות ומשחקים קרובים (ESPN)
   ------------------------------------------------------------
   לכל שחקן במאגר (data/athletes.js) עם status='abroad' ו-espn_id:
     overview — 5 המשחקים האחרונים עם סטטיסטיקה אישית + המשחק הבא
     athlete  — הקבוצה הנוכחית (פעם ביום). עבר קבוצה? האתר יראה.

   ESPN מסומן "שימוש אישי בלבד". במצב פרסום ציבורי — לא פונים אליו.
   ============================================================ */

(function () {
  var C = window.DB.config;
  var R = window.Reliability;
  var N = window.LiveNet;
  var A = window.DB.athletes;
  if (!A || !R.isDisplayable(R.sourceById('src_espn'))) return;

  var BASE = 'https://site.web.api.espn.com/apis/common/v3/sports/';
  function path(p) { return p.sport === 'nba' ? 'basketball/nba' : 'soccer'; }

  var tracked = A.players.filter(function (p) { return p.status === 'abroad' && p.espn_id; });

  /* ---------- שחקן אחד ---------- */

  function fetchOverview(p) {
    return N.getJSON(BASE + path(p) + '/athletes/' + encodeURIComponent(p.espn_id) + '/overview').then(function (o) {
      var gl = o.gameLog || {};
      var stat = (gl.statistics || [])[0] || {};
      // לפי התוויות הקצרות (APP, G, A, YC, RC בכדורגל; MIN, PTS, REB, AST בכדורסל)
      var names = stat.labels || [];
      var byEvent = {};
      (stat.events || []).forEach(function (se) { byEvent[se.eventId] = se.stats || []; });

      var games = Object.keys(gl.events || {}).map(function (id) {
        var e = gl.events[id] || {};
        var s = byEvent[id] || [];
        var st = {};
        names.forEach(function (n, i) { st[n] = s[i]; });
        var home = e.atVs === 'vs';
        var ts = N.parseNum(home ? e.homeTeamScore : e.awayTeamScore);
        var os = N.parseNum(home ? e.awayTeamScore : e.homeTeamScore);
        if (!e.gameDate || isNaN(new Date(e.gameDate).getTime())) return null;
        return {
          id: String(id),
          date: e.gameDate,
          home: home,
          team_abbr: e.team && e.team.abbreviation,
          opponent: e.opponent && e.opponent.displayName,
          team_score: ts, opp_score: os,
          result: e.gameResult,          // W / L / D
          league: e.leagueShortName || e.leagueName,
          note: e.eventNote || '',
          stats: st
        };
      }).filter(Boolean);

      var nx = o.nextGame && o.nextGame.league && (o.nextGame.league.events || [])[0];
      var next = null;
      if (nx && nx.date && !isNaN(new Date(nx.date).getTime())) {
        var comps = nx.competitors || [];
        var homeC = comps.filter(function (c) { return c.homeAway === 'home'; })[0];
        var awayC = comps.filter(function (c) { return c.homeAway === 'away'; })[0];
        next = {
          id: String(nx.id),
          date: nx.date,
          home: homeC ? homeC.displayName : '',
          away: awayC ? awayC.displayName : '',
          name: nx.name,
          league: o.nextGame.league.shortName || o.nextGame.league.name,
          location: nx.location || ''
        };
      }
      return { data: { games: games, next: next }, data_time: new Date().toISOString() };
    });
  }

  function fetchTeam(p) {
    return N.getJSON(BASE + path(p) + '/athletes/' + encodeURIComponent(p.espn_id)).then(function (a) {
      var at = a.athlete || a;
      return { data: { team: at.team ? at.team.displayName : null, active: at.active !== false },
               data_time: new Date().toISOString() };
    });
  }

  function loadPlayer(p) {
    var cad = C.cadence.sports;
    return Promise.all([
      window.LiveCache.get('sp_ov:' + p.espn_id, function () { return fetchOverview(p); }, cad.refresh_every, N.SIM_DOWN),
      window.LiveCache.get('sp_tm:' + p.espn_id, function () { return fetchTeam(p); }, cad.team_every, N.SIM_DOWN)
    ]).then(function (res) { return { player: p, ov: res[0], tm: res[1] }; });
  }

  /* ---------- קבוצות ישראליות באירופה ----------
     סורקים את כל המפעלים האירופיים (כולל מוקדמות), 3 חודשים: קודם, נוכחי, הבא.
     לא קשור לקבוצות מסוימות — כל קבוצה ישראלית שתעלה לאירופה בעתיד תזוהה לבד. */

  var UEFA = {
    'uefa.champions': 'ליגת האלופות', 'uefa.champions_qual': 'מוקדמות ליגת האלופות',
    'uefa.europa': 'הליגה האירופית', 'uefa.europa_qual': 'מוקדמות הליגה האירופית',
    'uefa.europa.conf': 'ליגת הקונפרנס', 'uefa.europa.conf_qual': 'מוקדמות ליגת הקונפרנס'
  };
  // "מכבי", "הפועל", "בית"ר", "עירוני", "בני סכנין" — שמות שקיימים רק בכדורגל הישראלי
  var ISRAELI = /\b(maccabi|hapoel|beitar|ironi|bnei sakhnin|bnei yehuda)\b/i;

  function ym(offset) {
    var d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset);
    return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0');
  }

  function fetchEurope() {
    var jobs = [];
    Object.keys(UEFA).forEach(function (comp) {
      [-1, 0, 1].forEach(function (off) { jobs.push({ comp: comp, month: ym(off) }); });
    });
    return N.pool(jobs, 4, function (jb) {
      return N.getJSON('https://site.api.espn.com/apis/site/v2/sports/soccer/' + jb.comp + '/scoreboard?limit=200&dates=' + jb.month)
        .then(function (s) { return { comp: jb.comp, events: (s && s.events) || [] }; });
    }).then(function (res) {
      var seen = {}, games = [], failed = 0;
      res.forEach(function (r) {
        if (!r || r.error) { failed++; return; }
        r.events.forEach(function (e) {
          if (!e || !e.id || seen[e.id] || !ISRAELI.test(e.name || '')) return;
          var c = (e.competitions || [])[0] || {};
          var comps = c.competitors || [];
          var home = comps.filter(function (x) { return x.homeAway === 'home'; })[0];
          var away = comps.filter(function (x) { return x.homeAway === 'away'; })[0];
          if (!home || !away || !home.team || !away.team) return;
          seen[e.id] = true;
          var st = (e.status && e.status.type) || {};
          games.push({
            id: String(e.id),
            date: e.date,
            comp: r.comp,
            home: home.team.displayName, away: away.team.displayName,
            home_score: N.parseNum(home.score), away_score: N.parseNum(away.score),
            home_winner: home.winner === true, away_winner: away.winner === true,
            completed: st.completed === true,
            detail: st.shortDetail || ''
          });
        });
      });
      if (failed === res.length) throw new Error('כל הבקשות נכשלו');
      games.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
      return { data: { games: games }, data_time: new Date().toISOString() };
    });
  }

  function loadEurope() {
    window.LiveCache.get('sp_europe', fetchEurope, C.cadence.sports.refresh_every, N.SIM_DOWN).then(function (entry) {
      window.DB.live.europe = entry;
      document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'sports' } }));
    });
  }

  /* ---------- הרכבה ---------- */

  function load() {
    N.pool(tracked, 4, loadPlayer).then(function (rows) {
      var ok = rows.filter(function (r) { return r && !r.error; });
      var failed = rows.length - ok.filter(function (r) { return r.ov && r.ov.ok; }).length;
      var anyData = ok.some(function (r) { return r.ov && r.ov.data; });
      var times = ok.map(function (r) { return r.ov && r.ov.fetched_at; }).filter(Boolean).sort();

      window.DB.live.sports = {
        ok: anyData && failed < rows.length,
        partial_failures: failed,
        total: rows.length,
        data: anyData ? ok : null,
        data_time: times.length ? times[0] : null,     // הישן מבין השחקנים — לא מייפים
        source_id: 'src_espn'
      };
      document.dispatchEvent(new CustomEvent('live:update', { detail: { key: 'sports' } }));
    });
  }

  window.DB.live = window.DB.live || {};
  load();
  loadEurope();
  setInterval(function () { load(); loadEurope(); }, 5 * 60 * 1000);
})();
