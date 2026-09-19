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

# (workflow, שעות, דקה) — אותן שעות כמו ב-CLAUDE.md
JOBS = [
    ("war-daily.yml", (2, 5, 13), 40),        # ניתוח עמוק 02:40 + השלמות
    ("war-brief.yml", (3, 11, 17), 40),       # עדכון ביניים — מוכן ב-04:00 / 12:00 / 18:00
    ("update-data.yml", tuple(range(24)), 17),  # חדשות — כל שעה
]
WINDOW = timedelta(minutes=20)       # מועד שהוחמץ (למשל בזמן החלפת שעון) — עדיין מופעל עד 20 דק' אחריו
RUN_FOR = timedelta(hours=5, minutes=30)
TICK = 20


def due(now):
    """המועדים שהגיעו ועדיין בחלון (now בשעון ישראל). מחזיר [(workflow, slot)]."""
    out = []
    for wf, hours, minute in JOBS:
        for day in (0, -1):
            base = (now + timedelta(days=day)).replace(minute=minute, second=0, microsecond=0)
            for h in hours:
                s = base.replace(hour=h)
                if s <= now < s + WINDOW:
                    out.append((wf, s))
    return out


def quiet_minute(now):
    """רגע בטוח להחלפת שעון — לא בסמוך לאף מועד."""
    return all(abs(now.minute - m) > 4 for _, _, m in JOBS)


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


def main():
    start = datetime.now(IL)
    print(f"שעון התחיל {start:%d/%m %H:%M:%S}")
    done = set()
    while True:
        now = datetime.now(IL)
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
