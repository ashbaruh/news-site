"""
war_approval_selftest.py — בדיקה חיה של מנגנון האישור מול GitHub (רץ רק מ-war-approval-test.yml).
טיוטת דמה נוצרת בתיקייה זמנית, נפתחת בקשה עם כותרת 🧪, ונסגרת מיד עם הסבר. שום דבר לא מתפרסם.
"""

import json
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path[:0] = [HERE, os.path.join(HERE, "mac")]
import ingest_war as iw      # noqa: E402
import war_approval as wa    # noqa: E402
import test_analyze as ta    # noqa: E402

tmp = tempfile.mkdtemp()
iw.WAR = os.path.join(tmp, "war")
iw.INBOX, iw.DRAFTS, iw.REJECTED = (os.path.join(iw.WAR, d) for d in ("inbox", "drafts", "rejected"))
os.makedirs(iw.INBOX)
doc = ta.an.build("yemen", ta.ITEMS, ta.FAKE_EVENTS, ta.FAKE_OVERVIEW, 24, "low", "selftest", ta.NOW)
json.dump(doc, open(os.path.join(iw.INBOX, "t.json"), "w", encoding="utf-8"), ensure_ascii=False)
for line in iw.ingest(*iw.load_sources()):
    print(line)
drafts = sorted(os.path.relpath(os.path.join(d, f), iw.WAR).replace(os.sep, "/")
                for d, _, fs in os.walk(iw.DRAFTS) for f in fs)
nd = os.path.join(tmp, "new.json")
json.dump({"drafts": drafts, "failed": []}, open(nd, "w", encoding="utf-8"))

opened = {}
real_gh = wa.gh


def gh(method, path, body=None):
    if method == "POST" and path == "/issues":
        body = dict(body, title="🧪 בדיקת מערכת — אפשר להתעלם (נתוני דמה)")
    res = real_gh(method, path, body)
    if method == "POST" and path == "/issues":
        opened.update(res)
    return res


wa.gh = gh
wa.open_issue(nd)
n = opened.get("number")
if not n:
    sys.exit("❌ הבקשה לא נפתחה")
real_gh("POST", f"/issues/{n}/comments",
        {"body": "🧪 זו בדיקה אוטומטית של מנגנון האישור (נתוני דמה). נסגרת אוטומטית — לא צריך לעשות כלום."})
real_gh("PATCH", f"/issues/{n}", {"state": "closed", "state_reason": "not_planned"})
print(f"✅ נפתחה ונסגרה בקשה מספר {n}: {opened.get('html_url')}")
