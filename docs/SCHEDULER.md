# מתזמן חיצוני — cron-job.org

התזמון של GitHub לא אמין (19/09/2026: עדכון 04:00 רץ ב-07:58; העדכון השעתי רץ פעם ב-2.5–5 שעות).
cron-job.org (חינם) "מעיר" את GitHub בדיוק בשעה. התזמונים של GitHub נשארים כגיבוי —
ריצה כפולה לא עולה כלום: כל משימה בודקת אם כבר בוצעה.

## חלק 1 — מפתח מוגבל ב-GitHub (פעם אחת)
1. GitHub → תמונת הפרופיל → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**
2. **Token name:** `cron-job news-site` · **Expiration:** שנה
3. **Repository access:** Only select repositories → `ashbaruh/news-site`
4. **Permissions → Repository permissions → Actions:** `Read and write` (שום הרשאה אחרת)
5. **Generate token** → להעתיק (מתחיל ב-`github_pat_`). **לא לשלוח אותו לאף אחד** — מדביקים רק ב-cron-job.org.

המפתח יכול רק להפעיל את המשימות של האתר הזה. אי אפשר איתו לשנות קבצים, למחוק או לראות סודות.
אם הוא דלף — מוחקים אותו באותו מסך, ויוצרים חדש.

## חלק 2 — cron-job.org
הרשמה חינמית ב-https://cron-job.org. בהגדרות החשבון: **Time zone = Asia/Jerusalem**.

לכל משימה: **Create cronjob** →
- **URL** — מהטבלה
- **Schedule** — מהטבלה (Custom)
- **Advanced → Request method:** `POST`
- **Advanced → Headers** (ארבע שורות):
  - `Authorization` = `Bearer ` + המפתח
  - `Accept` = `application/vnd.github+json`
  - `X-GitHub-Api-Version` = `2022-11-28`
  - `Content-Type` = `application/json`
- **Advanced → Request body:** `{"ref":"main"}`
- **Test run** → צריך לחזור **204**.

| משימה | URL | מתי (שעון ישראל) |
|---|---|---|
| עדכון ביניים | `https://api.github.com/repos/ashbaruh/news-site/actions/workflows/war-brief.yml/dispatches` | 03:40 · 11:40 · 17:40 |
| ניתוח יומי | `https://api.github.com/repos/ashbaruh/news-site/actions/workflows/war-daily.yml/dispatches` | 10:25 · 13:00 |
| עדכון נתונים | `https://api.github.com/repos/ashbaruh/news-site/actions/workflows/update-data.yml/dispatches` | כל שעה, בדקה 17 |

## איך יודעים שזה עובד
ב-GitHub → **Actions**: ריצות עם הסימון `workflow_dispatch` בשעות שבטבלה.
