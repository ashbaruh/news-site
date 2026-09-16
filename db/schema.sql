-- ============================================================
-- schema.sql — מודל המידע המינימלי (שלב 0)
-- מיועד ל-Supabase / PostgreSQL.
-- בשלב 1 לא מריצים את זה — זה "קיבוע" של המבנה בקוד,
-- כדי שקבצי הדמה והמסד האמיתי ידברו באותה שפה.
-- ============================================================

-- ---------- זירות ----------
create table arenas (
  id              text primary key,        -- 'iran', 'ukraine', 'yemen', 'north'
  name            text not null,
  enabled         boolean not null default true,
  map_confidence  text not null default 'medium'
                  check (map_confidence in ('high','medium','low'))
);

-- ---------- מקורות ----------
create table sources (
  id                  text primary key,
  name                text not null,
  kind                text,                -- סוכנות / דובר רשמי / טלגרם / לוויין / מכון מחקר
  -- נקבע ברגע חיבור המקור, לא בדיעבד:
  license_mode        text not null
                      check (license_mode in
                        ('link_only','summary_ok','licensed_data','personal_only','unclear')),
  -- שני מקורות מאותה משפחה אינם שני אימותים עצמאיים:
  independence_group  text not null,
  note                text,
  connected_at        timestamptz not null default now()
);

-- ---------- אירועים ----------
create table events (
  id                  text primary key,
  arena_id            text not null references arenas(id),
  title               text not null,
  summary             text,
  axis                text,                -- ציר/חזית גיאוגרפית בשם, לא "הלחימה נמשכת"
  claim_type          text not null default 'incident'
                      check (claim_type in ('incident','statement','assessment','data')),
  lifecycle           text not null default 'active'
                      check (lifecycle in ('active','corrected','retracted','disputed')),
  -- חותמות זמן נפרדות בכוונה:
  occurred_at         timestamptz,         -- מתי קרה / מתי התחיל
  -- אירוע מתמשך: occurred_to = מתי הסתיים.
  -- null + is_ongoing=true  →  עדיין נמשך
  -- null + is_ongoing=false →  אירוע נקודתי
  occurred_to         timestamptz,
  is_ongoing          boolean not null default false,
  first_reported_at   timestamptz,         -- מתי דווח לראשונה
  last_update_at      timestamptz,         -- מתי עודכן אצלנו לאחרונה
  what_is_not_verified text,               -- הסעיף המפורש "מה לא מאומת"
  created_at          timestamptz not null default now()
);

-- ---------- קישור אירוע ↔ מקור ----------
-- כאן יושב הלב: source_root_id.
create table event_reports (
  id              bigserial primary key,
  event_id        text not null references events(id) on delete cascade,
  source_id       text not null references sources(id),
  -- "מאיפה הטענה באמת הגיעה": אותה תמונת לוויין / אותו סרטון /
  -- אותה הודעת דובר / אותו פוסט טלגרם.
  -- שני דיווחים עם אותו source_root_id = אימות אחד, לא שניים.
  source_root_id  text not null,
  url             text,
  published_at    timestamptz not null,
  note            text
);

create index on event_reports (event_id);
create index on event_reports (source_root_id);

-- ---------- היסטוריית שינויים ----------
-- הכלל: אף פעם לא דורסים שורה קיימת. כל שינוי = שורה חדשה.
create table event_revisions (
  id          bigserial primary key,
  event_id    text not null references events(id) on delete cascade,
  at          timestamptz not null default now(),
  kind        text not null
              check (kind in ('created','correction','retraction','status_change',
                              'downgrade','source_added','note')),
  -- לשינויי סטטוס: מאיפה לאן. 'downgrade' = הסטטוס ירד.
  -- קיומה של שורת downgrade מחייבת את הממשק להציג לקורא
  -- שהאתר הציג בעבר משהו חזק יותר. אין שינוי בשקט.
  from_level  text,
  to_level    text,
  text        text not null
);

alter table event_revisions add constraint downgrade_has_levels
  check (kind <> 'downgrade' or (from_level is not null and to_level is not null));

create index on event_revisions (event_id, at);

-- ============================================================
-- סטטוס האימות אינו שדה במסד — הוא מחושב.
-- זה מכוון: אי אפשר "לסמן מאומת" בטעות או ביד.
-- הוא נגזר מספירת source_root_id + independence_group.
-- הלוגיקה בפועל: assets/js/reliability.js → assess()
-- ============================================================

create view event_verification as
select
  e.id                                        as event_id,
  count(r.id)                                 as report_count,
  count(distinct r.source_root_id)            as root_count,
  count(distinct s.independence_group)        as group_count,
  case
    when e.lifecycle = 'retracted'            then 'retracted'
    when e.lifecycle = 'disputed'             then 'disputed'
    when e.claim_type = 'assessment'          then 'assessment'
    -- נתון מדיד לא נספר לפי כמות מקורות:
    when e.claim_type = 'data'
         and count(r.id) > 0                  then 'verified'
    when count(r.id) = 0                      then 'unverified'
    when count(r.id) = 1                      then 'initial'
    when count(distinct r.source_root_id) < 2 then 'shared_root'
    when count(distinct s.independence_group) < 2 then 'shared_root'
    else 'verified'
  end                                         as level
from events e
left join event_reports r on r.event_id = e.id
left join sources s       on s.id = r.source_id
group by e.id, e.lifecycle, e.claim_type;
