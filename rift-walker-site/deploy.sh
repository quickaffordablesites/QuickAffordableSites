#!/bin/bash

# ============================================
# The Rift Walker - Deployment Script
# Usage: ./deploy.sh [platform]
# Platforms: netlify, github, vercel, local
# ============================================

set -e

PLATFORM="${1:-netlify}"
SITE_NAME="The Rift Walker"

echo "================================"
echo "🎲 $SITE_NAME"
echo "Deployment Script"
echo "================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found"
    echo "Please run this script from the rift-walker-site directory"
    exit 1
fi

# Verification steps
echo -e "${BLUE}→${NC} Verifying site structure..."
if [ ! -d "css" ] || [ ! -d "js" ]; then
    echo "❌ Error: Missing css/ or js/ directories"
    exit 1
fi
echo -e "${GREEN}✓${NC} Site structure verified"
echo ""

# Deploy based on platform
case $PLATFORM in
    netlify)
        echo -e "${BLUE}→${NC} Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "❌ Netlify CLI not found. Install it:"
            echo "   npm install -g netlify-cli"
            exit 1
        fi
        echo -e "${YELLOW}→${NC} Run: netlify deploy --prod --dir=."
        echo ""
        echo "Or drag the rift-walker-site folder into:"
        echo "https://app.netlify.com"
        ;;
        
    github)
        echo -e "${BLUE}→${NC} Setting up GitHub Pages..."
        if [ ! -d ".git" ]; then
            echo "Initializing git repository..."
            git init
            git config user.email "you@example.com"
            git config user.name "Your Name"
        fi
        
        echo "Adding files..."
        git add .
        git commit -m "Deploy The Rift Walker website" || true
        
        echo ""
        echo "Next steps:"
        echo "1. Create a repository on GitHub"
        echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/rift-walker-site"
        echo "3. Run: git push -u origin main"
        echo "4. Go to Settings > Pages and enable GitHub Pages"
        ;;
        
    vercel)
        echo -e "${BLUE}→${NC} Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "❌ Vercel CLI not found. Install it:"
            echo "   npm install -g vercel"
            exit 1
        fi
        echo "Run: vercel --prod"
        ;;
        
    local)
        echo -e "${BLUE}→${NC} Starting local server..."
        echo -e "${YELLOW}→${NC} Server will be available at http://localhost:8000"
        echo ""
        echo "Ctrl+C to stop"
        echo ""
        cd "$(dirname "$0")"
        
        # Try Python first
        if command -v python3 &> /dev/null; then
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            python -m SimpleHTTPServer 8000
        elif command -v npx &> /dev/null; then
            npx http-server
        else
            echo "❌ Could not find Python or Node.js"
            echo "Install Python 3 or Node.js to run the local server"
            exit 1
        fi
        ;;
        
    *)
        echo "❌ Unknown platform: $PLATFORM"
        echo ""
        echo "Available platforms:"
        echo "  ./deploy.sh netlify   - Deploy to Netlify (recommended)"
        echo "  ./deploy.sh github    - Deploy to GitHub Pages"
        echo "  ./deploy.sh vercel    - Deploy to Vercel"
        echo "  ./deploy.sh local     - Run local development server"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✓${NC} Deployment prepared"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "Roll on. 🎲"
