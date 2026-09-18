/* ============================================================
   player.js — נגן מוזיקה (YouTube IFrame API), ווידג'ט קבוע בפינת הדף
   ------------------------------------------------------------
   לפי המפרט: כמה פלייליסטים מוגדרים, החלפה מתוך הדף, אחד כברירת מחדל
   שמתחיל לנגן בכניסה.

   מגבלות חיצוניות שהקוד מכבד:
   1. כללי YouTube: הנגן חייב להיות גלוי, לפחות 200×200 פיקסלים.
      אסור להסתיר אותו ולהשמיע רק צליל. לכן "מזעור" = עצירה.
   2. דפדפנים חוסמים השמעה אוטומטית עם צליל לפני אינטראקציה עם הדף.
      לכן: מנסים לנגן. נחסם? מתחילים בלחיצה הראשונה בכל מקום בדף.
   3. YouTube לא מנגן בדף שנפתח כקובץ (שגיאה 153). צריך לפתוח מכתובת —
      דרך open-site.bat או מהאתר באינטרנט.

   החלפת פלייליסט = בניית הנגן מחדש. נבדק: הפקודה "טען פלייליסט" של YouTube
   לא אמינה (לפעמים נתקעת על השיר הקודם). בנייה מחדש עובדת תמיד.

   שיר שבעליו חסמו הטמעה (נפוץ בפלייליסטים של מוזיקה) — מדלגים עליו אוטומטית.
   ============================================================ */

(function () {
  var C = window.DB.config;
  var lists = C.playlists || [];
  if (!lists.length) return;

  var root = document.getElementById('player');
  var KEY_LIST = 'newssite:player:list';
  var KEY_MIN = 'newssite:player:minimized';
  var FILE_MSG = 'YouTube לא מנגן כשהאתר נפתח כקובץ. לפתוח דרך open-site.bat שבתיקיית האתר (או מהאתר באינטרנט).';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; });
  }

  var current = lists.filter(function (l) { return l.id === load(KEY_LIST); })[0] ||
                lists.filter(function (l) { return l.is_default; })[0] || lists[0];

  var PHONE = window.matchMedia ? window.matchMedia('(max-width: 700px)') : { matches: window.innerWidth < 700 };
  function isPhone() { return PHONE.matches; }

  /* ברירת מחדל: במחשב הנגן פתוח ומתחיל לנגן לבד; בטלפון סגור (כפתור עגול) כדי לא לתפוס מסך.
     בכל מקרה הבחירה האחרונה של הגולש נשמרת. */
  var minimized = load(KEY_MIN) !== null ? load(KEY_MIN) === '1' : isPhone();

  var player = null;        // הנגן הנוכחי
  var gen = 0;              // מספר הבנייה — אירועים מנגן ישן מתעלמים מהם
  var ready = false, skipped = 0, fatal = false, skipping = false;
  var interacted = false;   // האם הגולש כבר לחץ/הקליד בדף (מאפשר השמעה)
  var gestureArmed = false;
  var apiLoaded = false;

  /* ---------- מבנה ---------- */

  root.innerHTML =
    '<header>🎵 <span>מוזיקה בזמן גלישה</span>' +
      '<button class="toggle" id="pl-toggle" type="button" aria-label="סגירת הנגן">✕</button></header>' +
    '<div class="stage"></div>' +
    '<div class="now" id="pl-now">טוען…</div>' +
    '<div class="foot">' +
      /* פקדי מדיה נשארים משמאל לימין גם באתר עברי — זו המוסכמה הבינלאומית */
      '<div class="pl-controls" dir="ltr">' +
        '<button type="button" id="pl-prev" title="הקודם" aria-label="הקודם">⏮</button>' +
        '<button type="button" id="pl-play" title="נגן / השהה" aria-label="נגן או השהה">▶</button>' +
        '<button type="button" id="pl-next" title="הבא" aria-label="הבא">⏭</button>' +
      '</div>' +
      '<select id="pl-select" aria-label="בחירת פלייליסט">' +
        lists.map(function (l) {
          return '<option value="' + esc(l.id) + '"' + (l.id === current.id ? ' selected' : '') + '>' + esc(l.name) + '</option>';
        }).join('') +
      '</select>' +
    '</div>' +
    '<button type="button" class="pl-fab" id="pl-fab" title="מוזיקה" aria-label="פתיחת נגן המוזיקה">🎵</button>';

  var $ = function (id) { return document.getElementById(id); };

  function setNow(text, cls) {
    $('pl-now').textContent = text;
    $('pl-now').className = 'now' + (cls ? ' ' + cls : '');
  }

  /* סגור = כפתור עגול קטן בפינה, בלי נגן על המסך.
     כללי YouTube אוסרים להשמיע כשהנגן מוסתר — לכן סגירה משהה, ופתיחה ממשיכה מאותו מקום. */
  function setMinimized(on) {
    minimized = on;
    root.classList.toggle('minimized', on);
    $('pl-fab').title = on ? 'מוזיקה — ' + current.name : 'סגירת הנגן';
    store(KEY_MIN, on ? '1' : '0');
    if (on && ready && !fatal) { try { player.pauseVideo(); } catch (e) {} }
  }

  /* מצב לבדיקה ולעיצוב: data-state / data-list / data-first / data-error על הווידג'ט */
  function mark(k, v) { root.setAttribute('data-' + k, String(v)); }

  function startPlayback() {
    if (!ready || fatal) return;
    try { player.unMute(); } catch (e) {}
    player.playVideo();
  }

  /* ---------- אינטראקציה ראשונה עם הדף ---------- */

  function onFirstInteraction(ev) {
    interacted = true;
    // המוזיקה כבר מתנגנת מושתקת — מדליקים קול ומעדכנים את הכותרת
    try {
      if (ready && !fatal && player.isMuted && player.isMuted()) {
        player.unMute();
        var d = player.getVideoData ? player.getVideoData() : null;
        if (player.getPlayerState() === 1) setNow(d && d.title ? d.title : current.name);
      }
    } catch (e) { /* הנגן עוד לא מוכן */ }
    document.removeEventListener('pointerdown', onFirstInteraction, true);
    document.removeEventListener('keydown', onFirstInteraction, true);
    if (!gestureArmed) return;
    gestureArmed = false;
    // לחיצה על פקדי הנגן מטופלת בפקד עצמו
    if (ev && ev.target && root.contains(ev.target)) return;
    if (ready && !fatal) startPlayback();
  }
  document.addEventListener('pointerdown', onFirstInteraction, true);
  document.addEventListener('keydown', onFirstInteraction, true);

  function armGesture() {
    if (fatal) return;
    if (interacted) { startPlayback(); return; }   // כבר הייתה אינטראקציה — פשוט מנגנים
    gestureArmed = true;
    setNow('▶ לחיצה בכל מקום בדף תפעיל את המוזיקה', 'hint');
  }

  /* ---------- בניית הנגן ---------- */

  function build(startIndex) {
    var my = ++gen;
    ready = false; skipped = startIndex || 0; skipping = false;
    mark('list', current.id); mark('state', 'loading');
    root.removeAttribute('data-first'); root.removeAttribute('data-error');

    if (player) { try { player.destroy(); } catch (e) {} player = null; }
    // שם ייחודי לכל בנייה: YouTube זוכר נגנים לפי שם האלמנט,
    // ונגן חדש עם אותו שם "נבלע" ולא מדווח שהוא מוכן (נבדק).
    var elId = 'yt-player-' + my;
    root.querySelector('.stage').innerHTML = '<div id="' + elId + '"></div>';

    var vars = { listType: 'playlist', list: current.youtube_id, rel: 0, playsinline: 1, mute: 1, autoplay: 1 };
    if (startIndex) vars.index = startIndex;
    if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;

    player = new YT.Player(elId, {
      host: 'https://www.youtube-nocookie.com',          // פרטיות: בלי עוגיות מעקב עד שמנגנים
      width: '100%', height: '200',
      playerVars: vars,
      events: {
        onReady: function () {
          if (my !== gen) return;
          ready = true;
          mark('ready', 1);
          if (fatal) return;
          if (minimized) { setNow('▶ לחיצה על כפתור המוזיקה תפעיל', 'hint'); return; }
          // הדפדפן מרשה השמעה אוטומטית רק בלי קול — מנגנים מושתק, והקול נדלק בלחיצה הראשונה בדף
          if (!interacted) { try { player.mute(); } catch (e) {} }
          player.playVideo();
          setTimeout(function () {
            if (my !== gen || fatal || skipping) return;   // בזמן דילוג — לא להציג "לחץ להפעלה"
            var s = player.getPlayerState();
            if (s !== 1 && s !== 3) armGesture();
          }, 2500);
        },
        onStateChange: function (e) {
          if (my !== gen) return;
          mark('state', e.data);
          $('pl-play').textContent = (e.data === 1 || e.data === 3) ? '⏸' : '▶';
          var pl = player.getPlaylist && player.getPlaylist();
          if (pl && pl[0]) mark('first', pl[0]);
          if (e.data === 1) {
            skipped = 0;
            skipping = false;
            gestureArmed = false;
            var d = player.getVideoData ? player.getVideoData() : null;
            var name = d && d.title ? d.title : current.name;
            var muted = false;
            try { muted = player.isMuted && player.isMuted() && !interacted; } catch (e2) {}
            if (muted) setNow('🔇 ' + name + ' — לחיצה בכל מקום בדף תדליק את הקול', 'hint');
            else setNow(name);
          }
        },
        onError: function (e) {
          if (my !== gen) return;
          mark('error', e.data);
          // 100/101/150 — הסרטון הוסר, או שבעליו (לרוב חברת התקליטים) חסמו נגינה באתרים. מדלגים.
          if (e.data === 100 || e.data === 101 || e.data === 150) {
            if (skipped >= 10) {
              fatal = true; skipping = false;
              setNow('10 שירים ברצף בפלייליסט הזה חסומים לנגינה באתרים. בחר פלייליסט אחר.', 'err');
              return;
            }
            skipped++;
            skipping = true;
            setNow('דילוג על שיר שחסום לנגינה באתרים (' + skipped + ')…', 'hint');
            var list = player.getPlaylist && player.getPlaylist();
            if (list && list.length) {
              var idx = player.getPlaylistIndex();
              if (idx + 1 >= list.length) {
                fatal = true; skipping = false;
                setNow('אין בפלייליסט הזה שירים שמותר לנגן באתרים. בחר פלייליסט אחר.', 'err');
                return;
              }
              player.playVideoAt(idx + 1);
            } else {
              // רשימת השירים לא נטענה (השיר הראשון נחסם מיד). "טען פלייליסט" לא עובד כאן (נבדק 17/09/2026) —
              // בונים את הנגן מחדש, מתחיל מהשיר הבא. onReady ינסה לנגן, ואם הדפדפן מחכה ללחיצה — יבקש אותה.
              build(skipped);
              return;
            }
            // הדפדפן לא מתחיל לנגן לבד לפני לחיצה בדף. אם השיר הבא לא התחיל — לא להישאר תקוע על "דילוג…",
            // אלא לבקש לחיצה (נבדק 17/09/2026: בלי זה הנגן נתקע אחרי שיר חסום ראשון)
            var mySkip = skipped;
            setTimeout(function () {
              if (my !== gen || fatal || !skipping || skipped !== mySkip) return;
              var st = player.getPlayerState ? player.getPlayerState() : -1;
              if (st !== 1 && st !== 3) { skipping = false; armGesture(); }
            }, 3500);
            return;
          }
          fatal = true;
          if (e.data === 153) {
            setNow(location.protocol === 'file:' ? FILE_MSG : 'YouTube חסם את הנגן באתר הזה (שגיאה 153)', 'err');
          } else {
            setNow('שגיאת נגן (' + e.data + ')', 'err');
          }
        }
      }
    });
  }

  /* ---------- פקדים ---------- */

  $('pl-toggle').addEventListener('click', function () { setMinimized(true); });

  $('pl-fab').addEventListener('click', function () {           // כפתור המוזיקה הצף
    setMinimized(false);
    startPlayback();
  });

  $('pl-play').addEventListener('click', function () {
    if (!ready || fatal) return;
    var s = player.getPlayerState();
    if (s === 1 || s === 3) player.pauseVideo(); else startPlayback();
  });
  $('pl-next').addEventListener('click', function () { if (ready && !fatal) player.nextVideo(); });
  $('pl-prev').addEventListener('click', function () { if (ready && !fatal) player.previousVideo(); });

  $('pl-select').addEventListener('change', function () {
    var chosen = lists.filter(function (l) { return l.id === $('pl-select').value; })[0];
    if (!chosen || chosen === current) return;
    current = chosen;
    store(KEY_LIST, current.id);
    setNow('טוען ' + current.name + '…');
    if (apiLoaded && !fatal) build();
  });

  setMinimized(minimized);

  /* ---------- טעינת ה-API של YouTube ---------- */

  var prevReady = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = function () {
    if (prevReady) prevReady();
    apiLoaded = true;
    build();
  };
  if (location.protocol === 'file:') {
    // YouTube לא מנגן בדף שנפתח כקובץ (נבדק). לא פותחים חלון YouTube — רק מסבירים איך לפתוח נכון.
    fatal = true;
    root.querySelector('.stage').innerHTML = '';
    setNow('האתר נפתח כקובץ, ולכן אין מוזיקה. לפתיחה עם נגן: קיצור הדרך "חדר מצב", ' +
           'או האתר באינטרנט: ashbaruh.github.io/news-site', 'hint');
    return;
  }

  var s = document.createElement('script');
  s.src = 'https://www.youtube.com/iframe_api';
  s.onerror = function () { setNow('YouTube לא זמין כרגע', 'err'); };
  document.head.appendChild(s);
})();
