@echo off
echo ========================================
echo   AI GM - D&D 5e Solo Adventure Tool
echo ========================================
echo.
echo [*] Installing dependencies (if needed)...
call npm install --no-fund --no-audit 2>nul
echo.
echo [*] Starting development server...
echo [*] Open http://localhost:3000 in your browser
echo.
call npm run dev
pause
