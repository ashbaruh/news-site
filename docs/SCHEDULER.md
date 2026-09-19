# מתזמן חיצוני — cron-job.org (חינם)

התזמון של GitHub לא אמין: ב-19/09/2026 העדכון של 04:00 רץ ב-07:58.
cron-job.org "מעיר" את GitHub בדיוק בשעה. התזמונים של GitHub נשארים כגיבוי.
ריצה כפולה לא מזיקה, כי כל משימה בודקת אם כבר רצה.

**הדרך הקלה:** לפתוח את `docs/cron-setup.html` בלחיצה כפולה. יש שם כפתור "העתק" ליד כל ערך.

## 3 משימות — כולן בדקה 40 (חוץ מהנתונים)
| # | שם | URL | שעות (ישראל) | דקה |
|---|---|---|---|---|
| 1 | עדכון ביניים | `https://api.github.com/repos/ashbaruh/news-site/actions/workflows/war-brief.yml/dispatches` | 3, 11, 17 | 40 |
| 2 | ניתוח יומי | `https://api.github.com/repos/ashbaruh/news-site/actions/workflows/war-daily.yml/dispatches` | 2, 5, 13 | 40 |
| 3 | עדכון נתונים | `https://api.github.com/repos/ashbaruh/news-site/actions/workflows/update-data.yml/dispatches` | כל השעות | 17 |

## שלב א — מפתח ב-GitHub (פעם אחת)
1. GitHub → תמונת הפרופיל → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**
2. **Token name:** `cron-job news-site` · **Expiration:** 366 days
3. **Repository access:** Only select repositories → `ashbaruh/news-site`
4. **Repository permissions → Actions:** `Read and write` (שום הרשאה אחרת)
5. **Generate token** → להעתיק (מתחיל ב-`github_pat_`).
   **לא לשלוח אותו לאף אחד** (גם לא ל-Claude) — מדביקים רק ב-cron-job.org.

המפתח יכול רק להפעיל את המשימות של האתר הזה. אם הוא דלף — מוחקים אותו באותו מסך ויוצרים חדש.

## שלב ב — cron-job.org
1. הרשמה חינמית ב-https://cron-job.org
2. **Settings** (של החשבון) → **Time zone** = `Asia/Jerusalem` → Save
3. לכל אחת מ-3 המשימות: **Create cronjob**
   - **Title:** השם מהטבלה
   - **URL:** מהטבלה
   - **Execution schedule → Custom:** Days of month = כל הימים · Days of week = כל הימים · Months = כל החודשים · **Hours** = לפי הטבלה · **Minutes** = לפי הטבלה
   - לשונית **Advanced**:
     - **Request method:** `POST`
     - **Headers** — ארבע שורות (Key / Value):
       - `Authorization` / `Bearer ` ואחריו המפתח (עם רווח אחרי Bearer)
       - `Accept` / `application/vnd.github+json`
       - `X-GitHub-Api-Version` / `2022-11-28`
       - `Content-Type` / `application/json`
     - **Request body:** `{"ref":"main"}`
   - **Test run** → אמור לחזור **204** → **Save**

## איך יודעים שזה עובד
- ב-cron-job.org: ליד כל משימה — היסטוריה עם 204 בירוק.
- ב-GitHub → **Actions**: ריצות עם הסימון `workflow_dispatch` בשעות שבטבלה.
- 401 או 403 = המפתח שגוי או חסרה הרשאת Actions. 404 = טעות ב-URL. 422 = טעות ב-Request body.
