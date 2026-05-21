@echo off
REM 🚀 AS CODE - Quick Start Script for Windows
REM دليل البدء السريع للويندوز

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║           ✨ AS CODE - Quick Start Setup ✨                    ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check Node.js
echo 📋 Checking Node.js...
node -v
npm -v
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies
    exit /b 1
)
echo.

REM Lint check
echo 🔍 Running lint check...
call npm run lint
echo ✅ Lint check completed!
echo.

echo ╔════════════════════════════════════════════════════════════════╗
echo ║                   🎉 Setup Complete! 🎉                       ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo 📚 Next Steps:
echo.
echo 1️⃣  Start Development:
echo     npm run dev
echo.
echo 2️⃣  Build for Production:
echo     npm run build
echo.
echo 3️⃣  Run Tests:
echo     npm run test
echo.
echo 4️⃣  Format Code:
echo     npm run format
echo.
pause
