"""
share_card.py — כרטיס שיתוף (תמונה) מהעדכון האחרון: לסטטוס וואטסאפ, סטורי ופוסטים.
פורמט 1080x1920 (סטטוס וואטסאפ, סטורי באינסטגרם ובפייסבוק). רק כותרות בניסוח מקורי + תווית האימות מהאתר.
הרצה: python tools/share_card.py card.json out.png   (card.json — ראו telegram_brief.js / הסקריפט שמפיק אותו)
"""
import json, sys
from datetime import datetime
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT = sys.argv[3] if len(sys.argv) > 3 else "Heebo.ttf"
COL = {"verified": (34, 197, 94), "initial": (245, 158, 11), "shared_root": (249, 115, 22),
       "disputed": (239, 68, 68), "assessment": (56, 189, 248), "unverified": (148, 163, 184)}
ACC = (56, 189, 248)


def font(size, weight):
    f = ImageFont.truetype(FONT, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def wrap(d, text, f, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if d.textlength(t, font=f, direction="rtl") <= width:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur:
        lines.append(cur)
    return lines


def main(src, out):
    data = json.load(open(src, encoding="utf-8"))
    W, H, M = 1080, 1920, 70
    img = Image.new("RGB", (W, H), "#0b0f14")
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((W - 520, -260, W + 260, 520), fill=110)
    img = Image.composite(Image.new("RGB", (W, H), "#0f2a3a"), img, glow.filter(ImageFilter.GaussianBlur(140)))
    d = ImageDraw.Draw(img)
    for r in (120, 200, 280):                          # מכ"ם ברקע, בפינה
        d.ellipse((W - 150 - r, 140 - r, W - 150 + r, 140 + r), outline=(25, 70, 95), width=3)
    when = datetime.fromisoformat(data["slot"])
    rt = dict(direction="rtl", language="he", anchor="ra")
    d.text((W - M, 110), "חדר מצב", font=font(110, 800), fill="white", **rt)
    d.text((W - M, 245), f"עדכון מלחמות · {when:%d/%m} · {when:%H:%M}", font=font(40, 500), fill=ACC, **rt)
    y = 330
    for a in data["arenas"]:
        d.line((M, y, W - M, y), fill=(35, 48, 62), width=2)
        y += 26
        d.text((W - M, y), a["name"], font=font(46, 800), fill=ACC, **rt)
        y += 66
        for e in a["evs"]:
            f = font(40, 500)
            lines = wrap(d, e["t"], f, W - 2 * M - 50)
            d.ellipse((W - M - 22, y + 12, W - M - 2, y + 32), fill=COL.get(e["l"], (148, 163, 184)))
            for ln in lines:
                d.text((W - M - 42, y), ln, font=f, fill="white", **rt)
                y += 54
            d.text((W - M - 42, y), e["lb"], font=font(28, 400), fill=COL.get(e["l"], (148, 163, 184)), **rt)
            y += 50
        y += 6
    d.rectangle((0, H - 130, W, H), fill="#0f1b26")
    d.text((W // 2, H - 88), "ערוץ הטלגרם: t.me/chadar_matzav", font=font(40, 800), fill=ACC,
           direction="rtl", language="he", anchor="mm")
    d.text((W // 2, H - 38), "סיכום מסודר 3 פעמים ביום, עם הפרדה בין מאומת ללא מאומת", font=font(30, 500),
           fill="white", direction="rtl", language="he", anchor="mm")
    img.save(out)
    print(out, y)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
