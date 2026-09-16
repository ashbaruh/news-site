@echo off
rem ============================================================
rem  פתיחת האתר במחשב — לחיצה כפולה על הקובץ הזה.
rem  למה צריך את זה: YouTube לא מנגן כשהאתר נפתח כקובץ (index.html),
rem  רק כשהוא נפתח מכתובת. הקובץ הזה מריץ שרת קטן במחשב ופותח את האתר בדפדפן.
rem  סגירת החלון השחור = סגירת השרת.
rem ============================================================
cd /d "%~dp0"
echo.
echo   Opening the site at http://localhost:8777
echo   Keep this window open while using the site. Close it to stop.
echo.
start "" http://localhost:8777/index.html
python -m http.server 8777 --bind 127.0.0.1
if errorlevel 1 (
  echo.
  echo   Python was not found or port 8777 is busy.
  pause
)
