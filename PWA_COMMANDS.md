# PWA Setup Commands

## Installation (Optional - next-pwa not required)

```bash
# Note: next-pwa is optional. We're using manual service worker.
# If you want to use next-pwa instead:
# npm install next-pwa
```

## Verification

```powershell
# Run verification script
.\verify-pwa.ps1

# Expected output:
# ✅ manifest.json exists
# ✅ manifest.json structure valid
# ⚠️  pwa-192.png not found (create placeholder)
# ⚠️  pwa-512.png not found (create placeholder)
# ✅ sw.js exists
# ✅ manifest reference found
# ✅ themeColor configured
```

## Build & Test

```bash
# Build for production
npm run build

# Start production server
npm start

# Test PWA features:
# 1. Open http://localhost:3000
# 2. Open Chrome DevTools → Application → Manifest
# 3. Check "Add to Home Screen" prompt
# 4. Test offline functionality
```

## Icon Generation (Temporary Placeholders)

For development, create simple placeholder icons:

```powershell
# Using PowerShell (requires .NET or ImageMagick)
# Or use online tool: https://www.pwabuilder.com/imageGenerator

# Placeholder creation (manual):
# 1. Create 512×512px image with #c0841a background
# 2. Add "اس" text in white, centered
# 3. Save as public/pwa-512.png
# 4. Resize to 192×192px → public/pwa-192.png
# 5. Resize to 180×180px → public/apple-touch-icon.png
```

## Lighthouse Testing

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select:
   - ✅ Progressive Web App
   - ✅ Mobile
4. Click "Analyze page load"
5. Expected scores:
   - PWA: > 90
   - Performance: > 80
   - Accessibility: > 90
   - Best Practices: > 90

## Mobile Testing

1. Build and deploy to server
2. Open on mobile Chrome/Safari
3. Look for "Add to Home Screen" banner
4. Install app
5. Test:
   - Standalone display
   - Offline functionality
   - App shortcuts
   - Splash screen

---

**Status:** ✅ PWA setup complete, ready for icon generation and testing
