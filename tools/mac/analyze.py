"""
analyze.py — רץ על המק. לוקח חומר שנאסף, מריץ את הבינה המקומית (LM Studio), ומייצר קובץ לפי החוזה.
=========================================================================================================
הרצה (במק, כש-LM Studio פתוח עם השרת המקומי מופעל):
    python3 tools/mac/analyze.py --arena iran --collected collected-iran.json

חלוקת העבודה — מותאמת למודל קטן (9B):
  קוד רגיל  : מקורות, קישורים, תאריכים, רשימת מקורות מצוטטים, הרכבת הקובץ, בדיקה מול החוזה.
  הבינה     : חילוץ אירועים, תקצירים, "מה לא מאומת", חזיתות, מטרות (מוצהרת/מוסקת/תחזית) —
              רק מתוך הטקסט שנמסר לה.
  כלל שמרני : שני דיווחים נחשבים עצמאיים רק אם הבינה אמרה במפורש שכל אחד מהם מקור ראשוני.
              אחרת — אותו מקור-שורש. מודל קטן יכול לגרום רק ל"פחות מאומת", לא ל"יותר מאומת".

קלט (collected.json) — נאסף ע"י קוד, לא ע"י הבינה:
  {"items": [{"source_id": "src_isw", "url": "https://...", "published_at": "2026-09-17T06:00:00+00:00",
              "title": "...", "text": "..."}]}
  כל source_id חייב להיות רשום ב-data/sources.js.

פלט: outbox/<arena>-<זמן>.json — עבר את בדיקת החוזה. אם לא עבר: outbox/failed/ עם השגיאות.
"""

import argparse
import hashlib
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import war_contract as wc  # noqa: E402

LM_URL = os.environ.get("LM_STUDIO_URL", "http://localhost:1234/v1/chat/completions")
LM_MODEL = os.environ.get("LM_STUDIO_MODEL", "qwen3.5-9b")   # נבדק במק של בעל האתר (17/09/2026): זה המזהה
# מהירות שנמדדה במק (MacBook Air M5, 16GB, Q4_K_M): ~8.7 טוקנים לשנייה.
# ניתוח זירה אחת צפוי לקחת 10-15 דקות — לכן זמן המתנה ארוך לכל קריאה.
LM_TIMEOUT = int(os.environ.get("LM_STUDIO_TIMEOUT", "1800"))
MAX_ITEMS = 40            # מודל קטן + 16GB זיכרון: לא להעמיס הקשר ארוך מדי
MAX_TEXT_PER_ITEM = 1800  # תווים מכל כתבה


# ------------------------------------------------------------------ בינה מקומית

# ---- ספק הבינה ----
# gemini   — בענן (GitHub Actions), מפתח ב-GEMINI_API_KEY (secret ב-GitHub, אף פעם לא בקוד)
# lmstudio — מקומי במק (גיבוי)
# ברירת מחדל: gemini אם יש מפתח בסביבה, אחרת lmstudio.
PROVIDER = os.environ.get("LLM_PROVIDER") or ("gemini" if os.environ.get("GEMINI_API_KEY") else "lmstudio")
GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta"
_gemini_model = [m for m in os.environ.get("GEMINI_MODEL", "").split(",") if m]  # ריק → נבחר אוטומטית


def _gemini_request(path, body=None):
    key = os.environ.get("GEMINI_API_KEY", "")
    if not key:
        raise RuntimeError("חסר GEMINI_API_KEY")
    req = urllib.request.Request(GEMINI_BASE + path,
                                 data=json.dumps(body).encode("utf-8") if body is not None else None,
                                 headers={"Content-Type": "application/json", "x-goog-api-key": key})  # בכותרת, לא בכתובת
    with urllib.request.urlopen(req, timeout=LM_TIMEOUT) as r:
        return json.loads(r.read().decode("utf-8"))


def gemini_model():
    """בוחר את מודל ה-Flash העדכני ביותר שזמין לחשבון (לא תמונה/קול, יציב לפני preview).
    סדר: 2 מודלי Flash, ואחריהם Flash-Lite כגיבוי אחרון — חינמי, מכסה גבוהה יותר, פחות עמוס, איכות מעט נמוכה."""
    global _gemini_model
    if _gemini_model:
        return _gemini_model[0]
    models = _gemini_request("/models?pageSize=200").get("models", [])
    cands, lites = [], []
    for m in models:
        name = m.get("name", "").split("/")[-1]
        if "generateContent" not in (m.get("supportedGenerationMethods") or []):
            continue
        if "flash" not in name or re.search(r"image|tts|audio|live|embed|thinking-exp|native", name):
            continue
        ver = tuple(int(x) for x in re.findall(r"\d+", name.split("flash")[0])) or (0,)
        stable = not re.search(r"preview|exp", name)
        (lites if "lite" in name else cands).append((stable, ver, len(name) * -1, name))
    if not cands and not lites:
        raise RuntimeError("לא נמצא מודל Flash זמין בחשבון")
    _gemini_model = ([c[3] for c in sorted(cands, reverse=True)][:2] +
                     [c[3] for c in sorted(lites, reverse=True)][:1])
    return _gemini_model[0]


def _strip_for_gemini(schema):
    """responseSchema של Gemini לא מכיר חלק מהמילים של JSON Schema — מסירים אותן."""
    if isinstance(schema, dict):
        return {k: _strip_for_gemini(v) for k, v in schema.items()
                if k not in ("additionalProperties", "strict", "$schema")}
    if isinstance(schema, list):
        return [_strip_for_gemini(x) for x in schema]
    return schema


_exhausted = set()   # מודלים שהמכסה היומית שלהם נגמרה בריצה הנוכחית


class QuotaExhausted(RuntimeError):
    """המכסה היומית של Gemini נגמרה — אין טעם לנסות שוב היום."""


def _http_error_text(e):
    try:
        err = json.loads(e.read().decode("utf-8")).get("error", {})
        msg = err.get("message", "")
        # פרטי המכסה (למשל ...PerDay...) יושבים ב-details, לא בהודעה
        ids = re.findall(r'"quotaId":\s*"([^"]+)"', json.dumps(err.get("details", [])))
        # מזהה המכסה בהתחלה — כדי שלא ייחתך (באג 17/09/2026: "PerDay" נחתך, והגיבוי לא הופעל)
        if ids:
            msg = "[" + ", ".join(sorted(set(ids))) + "] " + msg
    except Exception:
        msg = ""
    return f"HTTP {e.code}: {msg[:600]}"


def gemini_json(system, user, schema, temperature=0.2):
    base = {"systemInstruction": {"parts": [{"text": system}]},
            "contents": [{"role": "user", "parts": [{"text": user}]}]}
    gemini_model()
    cfg = {"temperature": temperature, "responseMimeType": "application/json"}
    # הסכמה נשלחת בתוך ההנחיה, לא כפרמטר: נבדק 17/09/2026 — responseJsonSchema ו-responseSchema
    # נדחו ב-400 ("invalid argument") על חומר אמיתי. הפלט נבדק ממילא מול החוזה אחר כך.
    attempts = [
        {"systemInstruction": base["systemInstruction"],
         "contents": [{"role": "user", "parts": [{"text": user + "\n\nהחזר JSON בלבד, בדיוק לפי הסכמה הזו:\n"
                                                  + json.dumps(schema, ensure_ascii=False)}]}],
         "generationConfig": cfg},
    ]
    errors = []
    resp = None
    for model in _gemini_model:
        if model in _exhausted:
            continue                                # המכסה היומית של המודל הזה כבר נגמרה בריצה הזו
        path = f"/models/{model}:generateContent"
        next_model = False
        for variant, body in enumerate(attempts, 1):   # 400 (צורת בקשה לא נתמכת) ממשיך לצורה הבאה
            code = None
            for wait in (0, 30, 90, 180):          # עומס זמני (503) / מכסה לדקה → המתנה ארוכה; הניתוח לא דחוף
                time.sleep(wait)
                try:
                    resp = _gemini_request(path, body)
                    gemini_json.used_model = model
                    print(f"      Gemini: {model} · צורת בקשה {variant} · ניסיון אחרי {wait} שנ'")
                    break
                except urllib.error.HTTPError as e:
                    code = e.code
                    msg = _http_error_text(e)
                    errors.append(f"{model} צורה {variant}: {msg}")
                    print(f"      Gemini: {model} · צורה {variant} · {msg[:160]}")
                    if code == 429 and re.search(r"per ?day|PerDay|daily|free_tier_requests", msg, re.I):
                        # המכסה היומית נספרת לכל מודל בנפרד — עוברים למודל הבא, לא מבזבזים עוד בקשות על זה
                        _exhausted.add(model)
                        next_model = True
                        break
                    if code not in (429, 500, 503):
                        break
            if resp is not None or next_model or code != 400:
                break
        if resp is not None:
            break
        if not next_model and code not in (429, 500, 503):
            break                                   # שגיאה שאינה עומס/מכסה — מודל אחר לא יעזור
    if resp is None and all(m in _exhausted for m in _gemini_model):
        raise QuotaExhausted(" | ".join(errors[-3:]))
    if resp is None:
        raise RuntimeError(" | ".join(errors))
    u = resp.get("usageMetadata") or {}
    llm_json.last_usage = {"prompt_tokens": u.get("promptTokenCount"), "completion_tokens": u.get("candidatesTokenCount")}
    cand = (resp.get("candidates") or [{}])[0]
    text = "".join(p.get("text", "") for p in (cand.get("content") or {}).get("parts", []) if not p.get("thought"))
    if not text:
        raise RuntimeError(f"Gemini החזיר תשובה ריקה (finishReason={cand.get('finishReason')})")
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text.strip())
    return json.loads(text)


def llm_json(system, user, schema, temperature=0.1):
    """קריאה לבינה עם פלט JSON במבנה קבוע. הספק נקבע ב-PROVIDER."""
    if PROVIDER == "gemini":
        return gemini_json(system, user, schema)
    return lmstudio_json(system, user, schema, temperature)


def active_model_name():
    """המודל שבאמת ענה (אם Gemini עבר לגיבוי — שם הגיבוי מופיע בניתוח), אחרת המודל הראשי."""
    if PROVIDER != "gemini":
        return LM_MODEL
    return getattr(gemini_json, "used_model", None) or gemini_model()


def lmstudio_json(system, user, schema, temperature=0.1):
    """קריאה לשרת המקומי של LM Studio עם פלט JSON במבנה קבוע (structured output)."""
    body = {
        "model": LM_MODEL,
        "temperature": temperature,
        "messages": [{"role": "system", "content": system}, {"role": "user", "content": user}],
        "response_format": {"type": "json_schema", "json_schema": {"name": "out", "strict": True, "schema": schema}},
    }
    req = urllib.request.Request(LM_URL, data=json.dumps(body).encode("utf-8"),
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=LM_TIMEOUT) as r:
        resp = json.loads(r.read().decode("utf-8"))
    llm_json.last_usage = resp.get("usage") or {}
    content = resp["choices"][0]["message"]["content"]
    # מודלים "חושבים" לפעמים כותבים <think>...</think> לפני התשובה — מסירים
    content = re.sub(r"<think>.*?</think>", "", content, flags=re.S)
    content = re.sub(r"^```(?:json)?\s*|\s*```$", "", content.strip())
    return json.loads(content)


llm_json.last_usage = {}


SYSTEM = (
    "אתה עוזר מחקר זהיר. אתה עובד רק עם הטקסטים שנמסרו לך. אסור להוסיף ידע חיצוני, שמות, מספרים או אירועים "
    "שלא מופיעים בטקסט. אם משהו לא ברור — כתוב שהוא לא מאומת. כתוב בעברית בלבד (בלי אותיות ערביות או לטיניות "
    "בתוך מילים עבריות), בניסוח עובדתי מקורי, בלי להעתיק משפטים. "
    "מקור ראשוני (first_hand) = רק מי שראה/צילם בעצמו, או הודעה רשמית של הגוף שעליו מדובר. "
    "כלי תקשורת שמדווח מה צד אחר טוען, מצטט, או כותב 'לפי דיווחים' — אינו מקור ראשוני."
)

EVENTS_SCHEMA = {
    "type": "object", "additionalProperties": False, "required": ["events"],
    "properties": {"events": {"type": "array", "maxItems": 25, "items": {
        "type": "object", "additionalProperties": False,
        "required": ["title", "summary", "axis", "claim_type", "occurred_hint", "is_ongoing",
                     "what_is_not_verified", "support", "places"],
        "properties": {
            "title": {"type": "string"}, "summary": {"type": "string"}, "axis": {"type": "string"},
            "claim_type": {"type": "string", "enum": ["incident", "statement", "assessment", "data"]},
            "occurred_hint": {"type": "string", "description": "תאריך/שעה ISO אם מופיע בטקסט, אחרת ריק"},
            "is_ongoing": {"type": "boolean"},
            "what_is_not_verified": {"type": "string"},
            "support": {"type": "array", "minItems": 1, "items": {
                "type": "object", "additionalProperties": False,
                "required": ["item", "first_hand", "origin"],
                "properties": {
                    "item": {"type": "integer", "description": "מספר הכתבה ברשימה"},
                    "first_hand": {"type": "boolean", "description": "true רק אם הכתבה עצמה מדווחת ממקור ראשון (כתב שלה בשטח, תמונת לוויין שלה, הודעה רשמית של הגוף עצמו). אם היא מצטטת אחרים, מביאה טענה של צד, או כותבת 'לפי דיווחים' — false"},
                    "origin": {"type": "string", "description": "מאיפה המידע הגיע במקור, בקצרה (למשל: 'הודעת דובר צה\"ל', 'פוסט בטלגרם של ערוץ X'). ריק אם לא ידוע"},
                }}},
            "places": {"type": "array", "maxItems": 3, "description": "מקומות ספציפיים שבהם האירוע קרה (עיר/נמל/בסיס). רק אם מופיעים בטקסט. לא מדינה שלמה",
                       "items": {"type": "object", "additionalProperties": False, "required": ["name_en", "name_he"],
                                 "properties": {"name_en": {"type": "string", "description": "שם המקום באנגלית + מדינה, למשל 'Hodeidah, Yemen'"},
                                                "name_he": {"type": "string", "description": "שם המקום בעברית"}}}},
        }}}},
}

OVERVIEW_SCHEMA = {
    "type": "object", "additionalProperties": False,
    "required": ["summary", "fronts", "not_verified", "strategic_goals"],
    "properties": {
        "summary": {"type": "string"},
        "fronts": {"type": "array", "minItems": 1, "maxItems": 8, "items": {
            "type": "object", "additionalProperties": False, "required": ["name", "status"],
            "properties": {"name": {"type": "string"}, "status": {"type": "string"}}}},
        "not_verified": {"type": "array", "maxItems": 12, "items": {"type": "string"}},
        "strategic_goals": {"type": "array", "maxItems": 4, "items": {
            "type": "object", "additionalProperties": False,
            "required": ["actor", "declared", "inferred", "forecast"],
            "properties": {"actor": {"type": "string"},
                           "declared": {"type": "array", "maxItems": 4, "items": {"type": "string"}},
                           "inferred": {"type": "array", "maxItems": 4, "items": {"type": "string"}},
                           "forecast": {"type": "array", "maxItems": 3, "items": {"type": "string"}}}}},
    },
}


# קריאה אחת לזירה (חוסך חצי מהמכסה היומית): אירועים + תמונת מצב באותה תשובה
ARENA_SCHEMA = {
    "type": "object", "additionalProperties": False,
    "required": ["events"] + OVERVIEW_SCHEMA["required"],
    "properties": dict(EVENTS_SCHEMA["properties"], **OVERVIEW_SCHEMA["properties"]),
}


# ------------------------------------------------------------------ הרכבה (קוד רגיל)

# אותיות ערביות שמודל קטן לפעמים "מערבב" בתוך מילה עברית ("טهران", "מאומتת") → האות העברית המקבילה.
# מופעל רק על טקסט שיש בו עברית — טקסט ערבי שלם (למשל שם מקור) לא נוגע.
AR_TO_HE = str.maketrans({
    "ا": "א", "أ": "א", "إ": "א", "آ": "א", "ب": "ב", "ت": "ת", "ث": "ת", "ج": "ג", "ح": "ח", "خ": "ח",
    "د": "ד", "ذ": "ד", "ر": "ר", "ز": "ז", "س": "ס", "ش": "ש", "ص": "צ", "ض": "צ", "ط": "ט", "ظ": "ט",
    "ع": "ע", "غ": "ג", "ف": "פ", "ق": "ק", "ك": "כ", "ل": "ל", "م": "מ", "ن": "נ", "ه": "ה", "ة": "ה",
    "و": "ו", "ي": "י", "ى": "י", "ء": "", "ئ": "י", "ؤ": "ו"})


def fix_mixed_script(s):
    if re.search(r"[א-ת]", s) and re.search(r"[\u0600-\u06FF]", s):
        s = s.translate(AR_TO_HE)
        s = re.sub(r"[\u064B-\u065F\u0670]", "", s)          # ניקוד ערבי
        # אותיות סופיות בסוף מילה (אחרי ההמרה: "טהראנ" → "טהראן")
        s = re.sub(r"[כמנפצ](?![א-ת])", lambda m: "ךםןףץ"["כמנפצ".index(m.group(0))], s)
    if re.search(r"[א-ת]", s):
        s = re.sub(r"(?<=[א-ת])[A-Z](?=[א-ת\s])", "", s)       # אות לטינית בודדת בתוך מילה ("לפעT")
        # אותיות קוריאניות/סיניות/יפניות שנתקעו בטקסט עברי ("לע랑") — מוסרות
        s = re.sub(r"[\u1100-\u11FF\u3040-\u30FF\u3400-\u9FFF\uAC00-\uD7AF]+", "", s)
    return s


def clean(s, n):
    s = re.sub(r"<[^>]*>", " ", str(s or ""))              # החוזה אוסר HTML — מנקים מראש
    s = s.replace("javascript:", "").replace("data:text", "")
    s = fix_mixed_script(s)
    return re.sub(r"\s+", " ", s).strip()[:n]


def slug(s):
    s = re.sub(r"[^a-z0-9]+", "_", s.lower())
    return s.strip("_")[:40]


def event_roots(items, support):
    """
    מקור-שורש לכל דיווח באירוע, בכלל שמרני:
      first_hand=true → השורש הוא הכתבה עצמה (מקור + קישור) — יכול להוסיף עצמאות.
      אחרת           → השורש זהה לשורש הראשון של האירוע — לעולם לא מוסיף עצמאות.
                       (אולי הוא מצטט בדיוק את הדיווח הראשוני — אין לנו דרך לדעת.)
    תוצאה: אירוע נחשב מאומת רק אם יש לו לפחות שני דיווחים שהבינה הצהירה עליהם כראשוניים,
    ממשפחות מקורות שונות. מודל קטן יכול לטעות רק לכיוון "פחות מאומת".
    """
    def own(s):
        it = items[s["item"]]
        return "fh_" + hashlib.sha1((it["source_id"] + it["url"]).encode()).hexdigest()[:16]

    # טלגרם לעולם לא מקור ראשוני (החלטת בעל האתר: טלגרם לבד לא הופך אירוע למאומת) — נאכף בקוד, לא בבינה
    support = [dict(s, first_hand=False) if items[s["item"]]["source_id"].startswith("src_tg_") else s
               for s in support]
    first_fh = next((own(s) for s in support if s.get("first_hand")), None)
    if first_fh:
        shared = first_fh
    else:
        o = slug(support[0].get("origin") or "")
        shared = "or_" + (o if len(o) >= 3 else "unknown_origin")
    return [own(s) if s.get("first_hand") else shared for s in support]


# אירוע שהוא טענה/הודעה/האשמה של צד → "הצהרה": אימות = שהדברים נאמרו, לא שהם נכונים.
# נאכף בקוד (נבדק 17/09/2026: "טענה להפלת F-15" סומנה "מאומת" כי שני כלי תקשורת דיווחו על ההודעה).
STATEMENT_RX = re.compile(r"(?<![א-ת])[ולה]?(טענ|לטענת|האשמ|האשי|הכחש|מכחיש|הודיע|הודעת|הצהר|איים|איומ|לדברי|טוענ|מאשימ)")


def claim_type_for(ev):
    ct = ev.get("claim_type") if ev.get("claim_type") in wc.CLAIM_TYPES else "incident"
    if ct == "incident" and STATEMENT_RX.search(str(ev.get("title") or "")):
        return "statement"
    return ct


def event_places(raw, geocode):
    """הבינה נותנת רק שם מקום. הקואורדינטות — מקוד (OpenStreetMap). שם שלא נמצא — לא מוצג על המפה."""
    out = []
    for p in (raw or [])[:3]:
        if not isinstance(p, dict) or not geocode:
            continue
        hit = geocode(clean(p.get("name_en"), 120))
        if hit:
            out.append({"name": clean(p.get("name_he"), 80) or clean(p.get("name_en"), 80), "lat": hit[0], "lon": hit[1]})
    return out


def parse_time(s, fallback):
    try:
        d = datetime.fromisoformat(str(s).replace("Z", "+00:00"))
        return d if d.tzinfo else d.replace(tzinfo=timezone.utc)
    except Exception:
        return fallback


def build(arena, items, events_out, overview, window_hours, map_confidence, run_id, now, geocode=None):
    wfrom = now - timedelta(hours=window_hours)
    events, used = [], {}
    for i, ev in enumerate(events_out.get("events", [])):
        support = [s for s in ev.get("support", []) if isinstance(s.get("item"), int) and 0 <= s["item"] < len(items)]
        if not support:
            continue                                   # אירוע בלי כתבה תומכת — נזרק (הבינה המציאה?)
        uniq, seen = [], set()
        for s in support:
            if items[s["item"]]["url"] not in seen:
                seen.add(items[s["item"]]["url"])
                uniq.append(s)
        reports = []
        for s, rid in zip(uniq, event_roots(items, uniq)):
            it = items[s["item"]]
            used[it["source_id"]] = it
            reports.append({"source_id": it["source_id"], "source_root_id": rid,
                            "url": it["url"], "published_at": it["published_at"]})
        times = sorted(parse_time(r["published_at"], now) for r in reports)
        occurred = parse_time(ev.get("occurred_hint"), times[0])
        if occurred > times[0]:
            occurred = times[0]                         # אירוע לא יכול לקרות אחרי שדווח
        last = max(times[-1], wfrom)
        events.append({
            "id": f"{arena.upper()}-{now:%m%d%H%M}-{i + 1:02d}",
            "title": clean(ev.get("title"), 200) or "ללא כותרת",
            "summary": clean(ev.get("summary"), 1200) or "—",
            "axis": clean(ev.get("axis"), 80) or "לא צוין",
            "claim_type": claim_type_for(ev),
            "lifecycle": "active",
            "occurred_at": occurred.isoformat(timespec="seconds"),
            "is_ongoing": bool(ev.get("is_ongoing")),
            "first_reported_at": times[0].isoformat(timespec="seconds"),
            "last_update_at": min(last, now).isoformat(timespec="seconds"),
            "what_is_not_verified": clean(ev.get("what_is_not_verified"), 600) or "לא צוין — יש להתייחס כלא מאומת.",
            "is_new_in_window": times[0] >= wfrom,
            "reports": reports,
            "places": event_places(ev.get("places"), geocode),
        })

    fronts = [{"name": clean(f.get("name"), 80), "status": clean(f.get("status"), 800)}
              for f in overview.get("fronts", []) if clean(f.get("name"), 80)] or \
             [{"name": "כללי", "status": "הבינה לא זיהתה חזיתות בשם בחומר שנאסף."}]

    def lst(v, n, ln):
        return [clean(x, ln) for x in (v or [])[:n] if clean(x, ln)]

    return {
        "contract_version": wc.CONTRACT_VERSION,
        "arena": arena,
        "generated_at": now.isoformat(timespec="seconds"),
        "window": {"from": wfrom.isoformat(timespec="seconds"), "to": now.isoformat(timespec="seconds")},
        "model": {"name": clean(active_model_name(), 80), "run_id": run_id},
        "summary": clean(overview.get("summary"), 1500) or "—",
        "fronts": fronts,
        "events": events[:wc.MAX_EVENTS],
        "not_verified": lst(overview.get("not_verified"), 40, 600),
        # המפה: רמת הביטחון נקבעת ע"י אדם (בהגדרות הזירה), לא ע"י הבינה
        "map": {"confidence": map_confidence, "is_assessment": True,
                "note": "הערכה אנליטית מבוססת דיווחים — לא קו שליטה מאומת בשטח.", "layers": []},
        "economy": [],   # מגמות כלכליות — יתווספו מנתוני שוק (קוד), לא מהבינה
        "strategic_goals": [{"actor": clean(g.get("actor"), 80) or "לא צוין",
                             "declared": lst(g.get("declared"), 10, 400),
                             "inferred": lst(g.get("inferred"), 10, 400),
                             "forecast": lst(g.get("forecast"), 10, 400)}
                            for g in overview.get("strategic_goals", [])[:10]],
        "sources_cited": [{"source_id": sid, "url": it["url"], "accessed_at": now.isoformat(timespec="seconds")}
                          for sid, it in sorted(used.items())],
    }


def numbered(items):
    return "\n\n".join(f"[{i}] מקור: {it['source_id']} · פורסם: {it['published_at']}\n"
                       f"כותרת: {clean(it.get('title'), 200)}\n{clean(it.get('text'), MAX_TEXT_PER_ITEM)}"
                       for i, it in enumerate(items))


# גבולות כל זירה — נבדק 17/09/2026: בלי זה נכנסו לזירת הצפון נושאים מתימן ומהים השחור
ARENA_SCOPE = {
    "iran": 'העימות בין איראן לבין ישראל וארה"ב: תקיפות, גרעין, הורמוז, סנקציות, שלוחות איראן כשהן פועלות מול ישראל/ארה"ב/המפרץ',
    "ukraine": "המלחמה בין רוסיה לאוקראינה: חזיתות, תקיפות, סיוע צבאי, סנקציות, משא ומתן",
    "yemen": "תימן והחות'ים: הלחימה בתימן, תקיפות מול סעודיה וישראל, הים האדום ומצר באב אל-מנדב",
    "north": "הגזרה הצפונית של ישראל: לבנון וחיזבאללה, סוריה, ומעורבות טורקיה בסוריה ובלבנון",
}


def analyze_arena(arena, items, window_hours, map_confidence, known, log=lambda *_: None, geocode=None):
    """ניתוח זירה אחת: קריאה אחת לבינה → קובץ לפי החוזה. מחזיר (doc, errors). משמש גם את המק וגם את הענן."""
    now = datetime.now(timezone.utc).replace(microsecond=0)
    run_id = f"{arena}-{now:%Y%m%d%H%M}"
    log(f"[1/2] ניתוח {len(items)} כתבות (אירועים + תמונת מצב, בקריאה אחת)…")
    out = llm_json(SYSTEM,
                   f"הזירה: {ARENA_SCOPE.get(arena, arena)}.\n"
                   "כלול רק אירועים ששייכים לזירה הזו. אירועים של זירות אחרות (למשל תימן כשהזירה היא לבנון) — השמט.\n"
                   "משימה על הכתבות הבאות:\n"
                   "1. events — חלץ אירועים. לכל אירוע: אילו כתבות תומכות בו (לפי המספר), האם כל כתבה מקור ראשוני "
                   "או מצטטת אחרים, ומקומות ספציפיים שבהם קרה (אם מופיעים).\n"
                   "2. summary — 2-3 משפטים שמתארים את מצב הזירה עצמו (מה קורה, מי מול מי, מה השתנה). "
                   "אסור לפתוח ב'הדיווחים עוסקים' או לתאר את הכתבות. fronts — חזיתות/צירים בשם. not_verified — פרטים לא מאומתים.\n"
                   "3. strategic_goals — מטרות הצדדים בנפרד: מה הצהירו (declared), מה אפשר להסיק (inferred), "
                   "ותחזית זהירה (forecast).\n\n" + numbered(items), ARENA_SCHEMA)
    log("[2/2] הרכבה ובדיקת חוזה…")
    doc = build(arena, items, out, out, window_hours, map_confidence, run_id, now, geocode=geocode)
    return doc, wc.validate(doc, known)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--arena", required=True, choices=sorted(wc.ARENAS))
    ap.add_argument("--collected", required=True)
    ap.add_argument("--window-hours", type=int, default=24)
    ap.add_argument("--map-confidence", default="low", choices=sorted(wc.CONFIDENCE))
    ap.add_argument("--outbox", default=os.path.join(HERE, "outbox"))
    args = ap.parse_args()

    sources_js = open(os.path.join(ROOT, "data", "sources.js"), encoding="utf-8").read()
    known = wc.known_source_ids(sources_js)

    raw = json.load(open(args.collected, encoding="utf-8")).get("items", [])
    items = [it for it in raw if it.get("source_id") in known and str(it.get("url", "")).startswith("https://")]
    skipped = len(raw) - len(items)
    items = sorted(items, key=lambda it: it.get("published_at", ""), reverse=True)[:MAX_ITEMS]
    if not items:
        sys.exit("אין כתבות תקינות (מקור רשום + קישור https)")
    print(f"דולגו {skipped} כתבות ממקורות לא רשומים")

    doc, errors = analyze_arena(args.arena, items, args.window_hours, args.map_confidence, known, log=print)
    run_id = doc["model"]["run_id"]
    os.makedirs(args.outbox, exist_ok=True)
    if errors:
        os.makedirs(os.path.join(args.outbox, "failed"), exist_ok=True)
        path = os.path.join(args.outbox, "failed", run_id + ".json")
        json.dump({"errors": errors, "doc": doc}, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        sys.exit(f"[3/3] נכשל בבדיקת החוזה ({len(errors)} שגיאות). פרטים: {path}")
    groups = wc.source_groups(sources_js)
    levels = {}
    for e in doc["events"]:
        lv = wc.assess(e, groups)
        levels[lv] = levels.get(lv, 0) + 1
    path = os.path.join(args.outbox, run_id + ".json")
    json.dump(doc, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"[3/3] עבר את החוזה ✓  {len(doc['events'])} אירועים · רמות: {levels}\n      → {path}")


if __name__ == "__main__":
    main()
