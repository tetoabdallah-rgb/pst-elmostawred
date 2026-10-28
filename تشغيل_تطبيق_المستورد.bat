@echo off
chcp 65001 >nul
title PST Store - المستورد | متجر الأجهزة الإلكترونية
cd /d "%~dp0"

echo ======================================================================
echo              PST Store - متجر المستورد للأجهزة والإكسسوارات
echo               لابتوبات استيراد وجديد - هواتف ذكية - إكسسوارات
echo ======================================================================
echo.
echo [1/1] جاري فتح التطبيق في نافذة الهاتف التفاعلية...

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
