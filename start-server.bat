@echo off
echo ====================================================
echo Starting Arsalan Qayum DevOps Portfolio Web Server...
echo ====================================================
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
