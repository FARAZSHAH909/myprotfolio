@echo off
setlocal enabledelayedexpansion
title Portfolio Git Push Automation
color 0B

echo ===================================================
echo       Faraz Shah Portfolio - Git Auto-Push
echo ===================================================
echo.

cd /d "%~dp0"

echo [1/3] Checking Git Status...
git status -s
echo.

echo [2/3] Staging all files...
git add .
echo Files staged successfully.
echo.

set /p commit_msg="Enter commit message (Press Enter for default 'Update portfolio'): "
if "%commit_msg%"=="" (
    set commit_msg=Update portfolio
)

echo.
echo [3/3] Committing and Pushing to GitHub...
git commit -m "%commit_msg%"
echo.

git push origin main

if %ERRORLEVEL% EQU 0 (
    color 0A
    echo.
    echo ===================================================
    echo      SUCCESS: Code uploaded to GitHub!
    echo      Repo: https://github.com/FARAZSHAH909/myprotfolio
    echo ===================================================
) else (
    color 0C
    echo.
    echo ===================================================
    echo      ERROR: Failed to push to GitHub.
    echo      Please check your internet or credentials.
    echo ===================================================
)

echo.
pause
