' ============================================================
' פתיחת האתר עם מוזיקה — לחיצה כפולה (בלי חלון שחור).
' מריץ שרת קטן ברקע (אם עוד לא רץ) ופותח את האתר בדפדפן בכתובת http://localhost:8777
' למה צריך: YouTube לא מנגן כשהאתר נפתח כקובץ (index.html), רק מכתובת.
' השרת ממשיך לרוץ ברקע עד כיבוי/הפעלה מחדש של המחשב — אז אפשר לפתוח שוב גם את index.html,
' והדף יעבור לבד לכתובת שבה המוזיקה עובדת.
' ============================================================
Option Explicit
Dim shell, fso, folder, url, http, running
Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
folder = fso.GetParentFolderName(WScript.ScriptFullName)
url = "http://localhost:8777/index.html"

running = False
On Error Resume Next
Set http = CreateObject("MSXML2.XMLHTTP")
http.Open "GET", "http://localhost:8777/open-site.vbs", False
http.Send
If Err.Number = 0 Then
  If http.Status = 200 Then running = True
End If
Err.Clear
On Error GoTo 0

If Not running Then
  shell.CurrentDirectory = folder
  ' חלון מוסתר (0). מקשיב רק למחשב הזה (127.0.0.1) — לא נגיש מבחוץ. (pythonw לא עובד כאן — נבדק)
  shell.Run "cmd /c python -m http.server 8777 --bind 127.0.0.1 --directory """ & folder & """", 0, False
  WScript.Sleep 2500
End If

shell.Run url
