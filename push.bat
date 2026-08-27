@echo off
cd /d "%~dp0"
echo Pushing updated portfolio to GitHub (https://github.com/FARAZSHAH909/myprotfolio.git)...
git push -u origin main
echo.
pause
