"""שעון פנימי — מפעיל את העדכונים בדקה המדויקת (שעון ישראל).

התזמון של GitHub לא אמין (19/09/2026: עדכון 04:00 רץ ב-07:58). השעון רץ בתוך GitHub Actions
כמשימה אחת ארוכה (עד ~5.5 שעות), בודק את השעה כל 20 שניות, ובזמן הנכון מפעיל workflow_dispatch.
לפני שהוא נגמר הוא מפעיל את עצמו מחדש (clock.yml), והתזמון השעתי שלו מקים אותו אם נפל.
בלי מפתח חיצוני: GITHUB_TOKEN מורשה להפעיל workflow_dispatch.

כפילות לא מזיקה (כל משימה בודקת אם כבר רצה), ובכל זאת לפני הפעלה בודקים אם כבר יש ריצה מאז המועד.
"""
import json
import os
import subprocess
import sys
import time
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo

IL = ZoneInfo("Asia/Jerusalem")

# Gemini נופל לפעמים ב-503 ("עומס") לכמה עשרות דקות (22/09/2026: 17:40 ו-18:10 נכשלו, והאתר נשאר
# עם העדכון של 12:00). לכן כל עדכון ביניים חוזר כל חצי שעה עד שהוא מצליח, במשך 3.5 שעות.
# ריצה שהמועד שלה כבר בוצע נגמרת תוך פחות מדקה בלי לקרוא לבינה — אז זה כמעט לא עולה כלום.
RETRIES = range(0, 211, 30)               # 0, 30, 60, ... 210 דקות אחרי המועד


def _slots(hours, minute, retries=(0,)):
    return sorted({((minute + r) // 60 + h) % 24 * 60 + (minute + r) % 60 for h in hours for r in retries})


# (workflow, [דקה-ביום]) — אותן שעות כמו ב-CLAUDE.md
JOBS = [
    ("war-daily.yml", _slots((2, 5, 13), 40)),                    # ניתוח עמוק 02:40 + השלמות
    ("war-brief.yml", _slots((3, 11, 17), 40, RETRIES)),          # ביניים — מוכן ב-04:00 / 12:00 / 18:00
    ("update-data.yml", _slots(range(24), 17)),                   # חדשות — כל שעה
]
WINDOW = timedelta(minutes=20)       # מועד שהוחמץ (למשל בזמן החלפת שעון) — עדיין מופעל עד 20 דק' אחריו
RUN_FOR = timedelta(hours=5, minutes=30)
TICK = 20


def due(now):
    """המועדים שהגיעו ועדיין בחלון (now בשעון ישראל). מחזיר [(workflow, slot)]."""
    out = []
    for wf, mins in JOBS:
        for day in (0, -1):
            midnight = (now + timedelta(days=day)).replace(hour=0, minute=0, second=0, microsecond=0)
            for m in mins:
                s = midnight + timedelta(minutes=m)
                if s <= now < s + WINDOW:
                    out.append((wf, s))
    return out


def quiet_minute(now):
    """רגע בטוח להחלפת שעון — לא בסמוך לאף מועד."""
    return all(abs(now.minute - m % 60) > 4 for _, mins in JOBS for m in mins)


def gh(*args):
    return subprocess.run(["gh", *args], capture_output=True, text=True, timeout=60)


def already_ran(wf, slot):
    r = gh("run", "list", "--workflow", wf, "--limit", "10", "--json", "createdAt")
    if r.returncode != 0:
        print(f"  לא הצלחתי לבדוק ריצות קודמות של {wf}: {r.stderr.strip()}")
        return False
    since = slot.astimezone(timezone.utc)
    for run in json.loads(r.stdout or "[]"):
        t = datetime.fromisoformat(run["createdAt"].replace("Z", "+00:00"))
        if t >= since:
            return True
    return False


def fire(wf):
    r = gh("workflow", "run", wf, "--ref", "main")
    ok = r.returncode == 0
    print(f"  {'הופעל' if ok else 'נכשל'}: {wf} {r.stderr.strip()}")
    return ok


def clock_code_sha():
    """הקומיט האחרון שנגע בשעון עצמו. אם הוא השתנה — הריצה הזו מריצה קוד ישן."""
    r = gh("api", "repos/{owner}/{repo}/commits?per_page=1&path=tools/clock.py", "--jq", ".[0].sha")
    return r.stdout.strip() if r.returncode == 0 else ""


def main():
    start = datetime.now(IL)
    print(f"שעון התחיל {start:%d/%m %H:%M:%S}")
    sha = clock_code_sha()
    checked = start
    done = set()
    while True:
        now = datetime.now(IL)
        # קוד חדש של השעון נכנס לתוקף תוך דקות ולא אחרי 5.5 שעות (22/09/2026)
        if sha and now - checked >= timedelta(minutes=10):
            checked = now
            new = clock_code_sha()
            if new and new != sha and quiet_minute(now):
                print(f"{now:%H:%M:%S} קוד השעון התעדכן — מחליף")
                fire("clock.yml")
                return 0
        for wf, slot in due(now):
            key = (wf, slot)
            if key in done:
                continue
            print(f"{now:%H:%M:%S} מועד {slot:%H:%M} — {wf}")
            if already_ran(wf, slot):
                print("  כבר רץ מאז המועד — מדלג")
                done.add(key)
            elif fire(wf):
                done.add(key)
        if now - start >= RUN_FOR and quiet_minute(now):
            print(f"{now:%H:%M:%S} מחליף שעון")
            fire("clock.yml")
            return 0
        time.sleep(TICK)


if __name__ == "__main__":
    sys.exit(main())
