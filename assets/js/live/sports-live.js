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
  setInterval(load, 5 * 60 * 1000);
})();
