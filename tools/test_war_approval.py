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
        wa.gh = lambda method, path, body=None: self.calls.append((method, path, body)) or {"html_url": "x"}
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
        self.body = self.calls[-1][2]["body"]

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
        wa.approve(self.event("מאשר רק את תימן"))
        self.assertEqual([d.split("/")[1] for d in self.approved()], ["yemen"])

    def test_not_approve_is_rejection(self):
        wa.approve(self.event("לא מאשר, יש טעויות"))
        self.assertEqual(self.approved(), [])
        self.assertEqual(self.calls[-1][2]["state"], "closed")

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
