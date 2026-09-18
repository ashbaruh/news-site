"""
stamp_assets.py — מוסיף לכל קובץ JS/CSS מקומי חתימת גרסה בכתובת (?v=...).

למה: הדפדפן שומר קבצים במטמון, ואחרי עדכון האתר המשתמש היה יכול לראות
גרסה ישנה עד שהמטמון מתיישן. חתימה שמשתנה עם התוכן = הדפדפן מוריד מיד.

הרצה: python tools/stamp_assets.py   (מעדכן את index.html ו-legal.html במקום)
"""
import hashlib
import io
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ["index.html", "legal.html"]
ATTR_RX = re.compile(r'(?P<attr>(?:src|href)=")(?P<path>(?:assets|data)/[^"?#]+\.(?:js|css))(?:\?v=[0-9a-f]+)?(?P<end>")')

# קבצים שהמשימות בענן כותבות מחדש (נתונים) — בלי חתימה, אחרת החתימה ב-HTML
# תישאר ישנה אחרי עדכון אוטומטי והדפדפן יציג נתון ישן.
SKIP_PREFIXES = ("data/generated/", "data/war/")


def digest(rel_path: str) -> str | None:
    f = ROOT / rel_path
    if not f.is_file():
        return None
    return hashlib.md5(f.read_bytes()).hexdigest()[:8]


def stamp(page: str) -> bool:
    p = ROOT / page
    if not p.is_file():
        return False
    src = io.open(p, encoding="utf-8").read()

    def repl(m: re.Match) -> str:
        if m.group("path").startswith(SKIP_PREFIXES):
            return f'{m.group("attr")}{m.group("path")}{m.group("end")}'
        d = digest(m.group("path"))
        if not d:
            return m.group(0)
        return f'{m.group("attr")}{m.group("path")}?v={d}{m.group("end")}'

    out = ATTR_RX.sub(repl, src)
    if out == src:
        return False
    io.open(p, "w", encoding="utf-8", newline="\n").write(out)
    return True


def main() -> int:
    changed = [page for page in PAGES if stamp(page)]
    print("עודכנו: " + (", ".join(changed) if changed else "אין שינוי"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
