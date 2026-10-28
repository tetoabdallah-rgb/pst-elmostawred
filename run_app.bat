@echo off
chcp 65001 >nul
title PST Store - El-Mostawred
cd /d "%~dp0"
set "TARGET_FILE=%~dp0index.html"

where msedge >nul 2>nul
if %errorlevel% equ 0 (
    start msedge.exe --app="file:///%TARGET_FILE%" --window-size=430,880 --window-position=500,60
    exit
)

where chrome >nul 2>nul
if %errorlevel% equ 0 (
    start chrome.exe --app="file:///%TARGET_FILE%" --window-size=430,880 --window-position=500,60
    exit
)

start "" "%TARGET_FILE%"
exit
