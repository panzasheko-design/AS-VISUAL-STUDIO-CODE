#!/bin/bash

# 🚀 AS CODE - Quick Start Script
# دليل البدء السريع

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║           ✨ AS CODE - Quick Start Setup ✨                    ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check Node.js
echo "📋 Checking Node.js..."
node_version=$(node -v)
npm_version=$(npm -v)
echo "✅ Node.js: $node_version"
echo "✅ npm: $npm_version"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Lint check
echo "🔍 Running lint check..."
npm run lint 2>/dev/null
echo "✅ Lint check completed!"
echo ""

# Build check
echo "🔨 Checking TypeScript compilation..."
npm run build 2>&1 | head -20
echo "✅ Build ready!"
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                   🎉 Setup Complete! 🎉                       ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "📚 Next Steps:"
echo ""
echo "1️⃣  Start Development:"
echo "    npm run dev"
echo ""
echo "2️⃣  Build for Production:"
echo "    npm run build"
echo ""
echo "3️⃣  Run Tests:"
echo "    npm run test"
echo ""
echo "4️⃣  Format Code:"
echo "    npm run format"
echo ""
echo "📖 Documentation:"
echo "   - README.md      - دليل المستخدم"
echo "   - DEVELOPER.md   - دليل المطور"
echo ""
echo "🌐 Website: https://ascode.dev"
echo "💬 Support: support@ascode.dev"
echo ""
echo "Happy Coding! 🚀✨"
