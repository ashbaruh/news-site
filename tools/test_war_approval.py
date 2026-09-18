"""
בדיקות למנגנון האישור, בלי רשת ובלי GitHub:  python tools/test_war_approval.py
"""

import json
import os
import shutil
import sys
import tempfile
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "mac"))
import ingest_war as iw          # noqa: E402
import war_approval as wa        # noqa: E402
import test_analyze as ta        # noqa: E402  (מודל מזויף + טיוטה לדוגמה)

OWNER = "owner1"


class Approval(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.orig = (iw.WAR, iw.INBOX, iw.DRAFTS, iw.REJECTED, iw.APPROVED, iw.PUBLISHED, wa.ROOT)
        iw.WAR = os.path.join(self.tmp, "war")
        iw.INBOX, iw.DRAFTS, iw.REJECTED = (os.path.join(iw.WAR, d) for d in ("inbox", "drafts", "rejected"))
        iw.APPROVED, iw.PUBLISHED = os.path.join(iw.WAR, "approved.json"), os.path.join(iw.WAR, "published.js")
        wa.ROOT = self.tmp
        self.calls = []
        self.open_issues = []            # מה ש-GitHub מחזיר ל-GET /issues — רשימה, כמו ב-API האמיתי

        def fake_gh(method, path, body=None):
            self.calls.append((method, path, body))
            if method == "GET" and path.startswith("/issues"):
                return list(self.open_issues)
            if method == "POST" and path == "/issues":
                return {"number": 7, "html_url": "x"}
            return {}
        wa.gh = fake_gh
        os.makedirs(iw.INBOX)
        for arena in ("iran", "yemen"):
            doc = ta.an.build(arena, ta.ITEMS, ta.FAKE_EVENTS, ta.FAKE_OVERVIEW, 24, "low", arena + "-run", ta.NOW)
            json.dump(doc, open(os.path.join(iw.INBOX, arena + ".json"), "w", encoding="utf-8"), ensure_ascii=False)
        iw.ingest(ta.KNOWN, ta.GROUPS)
        self.drafts = sorted(os.path.relpath(os.path.join(d, f), iw.WAR).replace(os.sep, "/")
                             for d, _, fs in os.walk(iw.DRAFTS) for f in fs)
        nd = os.path.join(self.tmp, "new.json")
        json.dump({"drafts": self.drafts, "failed": ["ukraine: מעט מדי כתבות (1)"]}, open(nd, "w", encoding="utf-8"))
        wa.open_issue(nd)
        self.body = next(c[2]["body"] for c in self.calls if c[0] == "POST" and c[1] == "/issues")

    def tearDown(self):
        iw.WAR, iw.INBOX, iw.DRAFTS, iw.REJECTED, iw.APPROVED, iw.PUBLISHED, wa.ROOT = self.orig
        shutil.rmtree(self.tmp)

    def event(self, text, commenter=OWNER, assoc="OWNER", issue_user=wa.BOT, body=None):
        ev = {"repository": {"owner": {"login": OWNER}},
              "issue": {"number": 7, "state": "open", "user": {"login": issue_user}, "body": body or self.body},
              "comment": {"body": text, "user": {"login": commenter}, "author_association": assoc}}
        p = os.path.join(self.tmp, "event.json")
        json.dump(ev, open(p, "w", encoding="utf-8"), ensure_ascii=False)
        return p

    def approved(self):
        try:
            return json.load(open(iw.APPROVED, encoding="utf-8"))["approved"]
        except FileNotFoundError:
            return []

    def test_issue_has_preview_and_hidden_list(self):
        self.assertEqual(len(self.drafts), 2)
        self.assertIn("תמונת מצב", self.body)
        self.assertIn("✅ מאומת", self.body)
        self.assertIn("לא נותחו היום", self.body)
        self.assertIn("<!-- war-drafts:", self.body)
        self.assertNotIn("<script", self.body)
        self.assertNotIn("<img", self.body)

    def test_approve_all(self):
        wa.approve(self.event("מאשר"))
        self.assertEqual(sorted(self.approved()), self.drafts)
        iw.publish(ta.KNOWN)
        self.assertIn('"iran"', open(iw.PUBLISHED, encoding="utf-8").read())

    def test_approve_some_arenas(self):
        wa.approve(self.event("מאשר תימן"))
        self.assertEqual([d.split("/")[1] for d in self.approved()], ["yemen"])

    def test_approve_two_arenas(self):
        wa.approve(self.event("מאשר איראן תימן"))
        self.assertEqual(sorted(d.split("/")[1] for d in self.approved()), ["iran", "yemen"])

    def test_approve_two_arenas_with_vav_and_spaces(self):
        wa.approve(self.event("  מאשר   איראן ותימן  "))
        self.assertEqual(sorted(d.split("/")[1] for d in self.approved()), ["iran", "yemen"])

    def test_approve_one_arena(self):
        wa.approve(self.event("מאשר איראן"))
        self.assertEqual([d.split("/")[1] for d in self.approved()], ["iran"])

    def last_comment(self):
        return next(c[2]["body"] for c in reversed(self.calls) if c[0] == "POST" and c[1].endswith("/comments"))

    def test_ambiguous_phrases_publish_nothing(self):
        # סעיף 1 בביקורת: חלק מאלה אושרו בעבר ע"י חיפוש מילים חופשי ("אפשר אישור?" → הכל, "מאשר חוץ מאיראן" → איראן)
        for text in ["אני לא בטוח אם לאשר", "אפשר אישור?", "לאשר?", "אני לא בטוח שאני מאשר",
                     "מאשר חוץ מאיראן", "מאושר? תבדוק קודם את לבנון", "לא מאשר, יש טעויות", "מאשר!", "מאשר איראן איראן"]:
            with self.subTest(text=text):
                self.calls.clear()
                wa.approve(self.event(text))
                self.assertEqual(self.approved(), [])
                self.assertIn("פקודה לא מוכרת", self.last_comment())
                self.assertFalse(any(c[0] == "PATCH" for c in self.calls))   # לא נסגר — אפשר לכתוב שוב
                self.assertFalse(os.path.exists(os.path.join(self.tmp, "approval-result.json")))

    def test_arena_without_draft_publishes_nothing(self):
        wa.approve(self.event("מאשר איראן צפון"))       # יש טיוטות רק לאיראן ולתימן
        self.assertEqual(self.approved(), [])
        self.assertIn("אין בבקשה הזו טיוטה", self.last_comment())

    def test_parse_command(self):
        self.assertEqual(wa.parse_command("מאשר"), ("approve", []))
        self.assertEqual(wa.parse_command("מאשר צפון, אוקראינה"), ("approve", ["north", "ukraine"]))
        self.assertEqual(wa.parse_command("‏דוחה‎"), ("reject", None))
        self.assertEqual(wa.parse_command("דוחה הכל"), ("unknown", None))
        self.assertEqual(wa.parse_command(""), ("unknown", None))

    def test_reject(self):
        wa.approve(self.event("דוחה"))
        self.assertEqual(self.approved(), [])

    def test_stranger_cannot_approve(self):
        wa.approve(self.event("מאשר", commenter="attacker", assoc="NONE"))
        self.assertEqual(self.approved(), [])

    def test_owner_name_but_not_owner_association(self):
        wa.approve(self.event("מאשר", assoc="CONTRIBUTOR"))
        self.assertEqual(self.approved(), [])

    def test_issue_not_from_bot_ignored(self):
        wa.approve(self.event("מאשר", issue_user="attacker"))
        self.assertEqual(self.approved(), [])

    def test_bad_paths_in_hidden_list_ignored(self):
        evil = '<!-- war-drafts: ["../../index.html", "drafts/iran/../../x.json", "drafts/iran/nope.json"] -->'
        wa.approve(self.event("מאשר", body=evil))
        self.assertEqual(self.approved(), [])

    def test_random_comment_does_nothing(self):
        wa.approve(self.event("שאלה: למה אין את לבנון?"))
        self.assertEqual(self.approved(), [])

    # ---- סעיף 4: בקשות ישנות ----

    def test_open_issue_closes_older_request(self):
        old = {"number": 3, "user": {"login": wa.BOT}, "body": "x <!-- war-drafts: [] -->"}
        other = {"number": 4, "user": {"login": "someone"}, "body": "לא בקשת אישור"}
        self.open_issues = [old, other, {"number": 7, "user": {"login": wa.BOT}, "body": self.body}]
        self.calls.clear()
        nd = os.path.join(self.tmp, "new.json")
        wa.open_issue(nd)
        patched = [c[1] for c in self.calls if c[0] == "PATCH"]
        self.assertEqual(patched, ["/issues/3"])        # רק הישנה של הבוט, לא החדשה ולא של אדם אחר

    def test_same_drafts_cannot_be_approved_twice(self):
        wa.approve(self.event("מאשר"))
        os.remove(os.path.join(self.tmp, "approval-result.json"))
        self.calls.clear()
        wa.approve(self.event("מאשר"))                  # אותה בקשה/טיוטות שוב (כמו #6 ב-18/09)
        self.assertIn("כבר פורסמו", self.last_comment())
        self.assertFalse(os.path.exists(os.path.join(self.tmp, "approval-result.json")))

    def test_older_draft_than_published_is_refused(self):
        # טיוטה חדשה יותר של איראן כבר מאושרת → הטיוטה מהבקשה הזו ישנה
        newer = self.drafts[0].replace(".json", "_newer.json")
        with open(os.path.join(iw.WAR, self.drafts[0]), encoding="utf-8") as f:
            d = json.load(f)
        d["analysis"]["generated_at"] = "2099-01-01T00:00:00+00:00"
        with open(os.path.join(iw.WAR, newer), "w", encoding="utf-8") as f:
            json.dump(d, f, ensure_ascii=False)
        with open(iw.APPROVED, "w", encoding="utf-8") as f:
            json.dump({"approved": [newer]}, f)
        wa.approve(self.event("מאשר " + ("איראן" if "/iran/" in self.drafts[0] else "תימן")))
        self.assertEqual(self.approved(), [newer])
        self.assertIn("ישנות מהמפורסם", self.last_comment())

    def test_newer_request_exists(self):
        self.open_issues = [{"number": 9, "user": {"login": wa.BOT}, "body": "<!-- war-drafts: [] -->"}]
        wa.approve(self.event("מאשר"))
        self.assertEqual(self.approved(), [])
        self.assertIn("#9", self.last_comment())
        self.assertTrue(any(c[0] == "PATCH" for c in self.calls))

    def test_approved_file_written_atomically(self):
        wa.approve(self.event("מאשר"))
        self.assertFalse(os.path.exists(iw.APPROVED + ".tmp"))
        with open(iw.APPROVED, encoding="utf-8") as f:
            json.load(f)                                 # JSON תקין


class DailyRun(unittest.TestCase):
    """18/09/2026: הריצה נחתכה אחרי 60 דקות וכל הזירות אבדו. עכשיו: שמירה אחרי כל זירה + תקציב זמן."""

    def setUp(self):
        import war_daily as wd
        self.wd = wd
        self.tmp = tempfile.mkdtemp()
        self.orig_paths = (iw.WAR, iw.INBOX, iw.DRAFTS, iw.REJECTED, iw.APPROVED, iw.PUBLISHED)
        iw.WAR = os.path.join(self.tmp, "war")
        iw.INBOX, iw.DRAFTS, iw.REJECTED = (os.path.join(iw.WAR, d) for d in ("inbox", "drafts", "rejected"))
        iw.APPROVED, iw.PUBLISHED = os.path.join(iw.WAR, "approved.json"), os.path.join(iw.WAR, "published.js")
        self.orig_fns = (wd.cw.collect, wd.done_today, wd.economy_for, wd.Geocoder, wd.an.analyze_arena,
                         wd.time.sleep, wd.BUDGET_SEC, sys.argv)
        wd.cw.collect = lambda arena: list(ta.ITEMS)
        wd.done_today = lambda arena: False
        wd.economy_for = lambda arena: []
        wd.Geocoder = lambda: type("G", (), {"save": lambda self: None, "__call__": lambda self, n: None})()
        wd.time.sleep = lambda s: None
        self.nd = os.path.join(self.tmp, "new.json")

    def tearDown(self):
        wd = self.wd
        (wd.cw.collect, wd.done_today, wd.economy_for, wd.Geocoder, wd.an.analyze_arena,
         wd.time.sleep, wd.BUDGET_SEC, sys.argv) = self.orig_fns
        iw.WAR, iw.INBOX, iw.DRAFTS, iw.REJECTED, iw.APPROVED, iw.PUBLISHED = self.orig_paths
        shutil.rmtree(self.tmp)

    def run_main(self, arenas):
        sys.argv = ["war_daily.py", "--arenas", arenas, "--new-drafts", self.nd]
        self.wd.main()
        with open(self.nd, encoding="utf-8") as f:
            return json.load(f)

    def test_first_arena_saved_before_second_starts(self):
        seen = []

        def analyze(arena, items, *a, **k):
            if seen:                                         # הזירה הראשונה כבר שמורה כשהשנייה מתחילה
                with open(self.nd, encoding="utf-8") as f:
                    self.assertEqual(len(json.load(f)["drafts"]), 1)
                raise RuntimeError("הבינה עמוסה")            # השנייה נכשלת — הראשונה לא אובדת
            seen.append(arena)
            doc = ta.an.build(arena, ta.ITEMS, ta.FAKE_EVENTS, ta.FAKE_OVERVIEW, 24, "low", arena + "-run", ta.NOW)
            return doc, []
        self.wd.an.analyze_arena = analyze
        res = self.run_main("iran,yemen")
        self.assertEqual([d.split("/")[1] for d in res["drafts"]], ["iran"])
        self.assertTrue(any(f.startswith("yemen") for f in res["failed"]))

    def test_no_time_left_skips_instead_of_being_cut(self):
        self.wd.BUDGET_SEC = 0
        self.wd.an.analyze_arena = lambda *a, **k: self.fail("לא אמור להתחיל ניתוח בלי זמן")
        res = self.run_main("iran,north")
        self.assertEqual(res["drafts"], [])
        self.assertEqual(len([f for f in res["failed"] if "לא הספיק" in f]), 2)

    def test_open_issue_without_list_file(self):
        wa.open_issue(os.path.join(self.tmp, "missing.json"))   # לא זורק שגיאה, לא פותח בקשה


class Changes(unittest.TestCase):
    """"מה השתנה מאתמול": אותו אירוע מזוהה לפי קישור משותף; רמת אימות עלתה/ירדה/חדש."""

    def doc(self, events):
        return ta.an.build("iran", ta.ITEMS, {"events": events}, ta.FAKE_OVERVIEW, 24, "low", "r", ta.NOW)

    def test_new_up_down_same(self):
        ev = ta.ev
        fh = lambda i: {"item": i, "first_hand": True, "origin": ""}  # noqa: E731
        prev = self.doc([ev("עלה", [fh(0)]), ev("ירד", [fh(4), fh(1)]), ev("זהה", [fh(2)])])
        cur = self.doc([ev("עלה", [fh(0), fh(1)]), ev("ירד", [fh(4)]), ev("זהה", [fh(2)]), ev("חדש", [fh(5)])])
        ch = iw.compare(prev, cur, ta.GROUPS)
        kinds = {e["title"]: ch[e["id"]]["kind"] for e in cur["events"]}
        self.assertEqual(kinds, {"עלה": "up", "ירד": "down", "זהה": "same", "חדש": "new"})
        down = next(ch[e["id"]] for e in cur["events"] if e["title"] == "ירד")
        self.assertEqual((down["from"], down["to"]), ("verified", "initial"))

    def test_first_analysis_has_no_changes(self):
        self.assertEqual(iw.compare(None, self.doc([ta.ev("א", [{"item": 0, "first_hand": True, "origin": ""}])]), ta.GROUPS), {})


if __name__ == "__main__":
    unittest.main(verbosity=2)
