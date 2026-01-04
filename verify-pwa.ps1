# PWA Verification Script for Ask Seba
# Checks all PWA requirements

Write-Host "🔍 PWA Verification - Ask Seba" -ForegroundColor Cyan
Write-Host ""

$errors = 0
$warnings = 0

# Check manifest.json
Write-Host "📄 Checking manifest.json..." -ForegroundColor Yellow
if (Test-Path "public/manifest.json") {
    Write-Host "  ✅ manifest.json exists" -ForegroundColor Green
    $manifest = Get-Content "public/manifest.json" -Raw | ConvertFrom-Json
    if ($manifest.name -and $manifest.short_name -and $manifest.icons) {
        Write-Host "  ✅ manifest.json structure valid" -ForegroundColor Green
    } else {
        Write-Host "  ❌ manifest.json structure invalid" -ForegroundColor Red
        $errors++
    }
} else {
    Write-Host "  ❌ manifest.json not found" -ForegroundColor Red
    $errors++
}

# Check PWA icons
Write-Host ""
Write-Host "🖼️  Checking PWA icons..." -ForegroundColor Yellow
$icons = @("public/pwa-192.png", "public/pwa-512.png", "public/apple-touch-icon.png")
foreach ($icon in $icons) {
    if (Test-Path $icon) {
        Write-Host "  ✅ $icon exists" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $icon not found (create placeholder)" -ForegroundColor Yellow
        $warnings++
    }
}

# Check service worker
Write-Host ""
Write-Host "⚙️  Checking service worker..." -ForegroundColor Yellow
if (Test-Path "public/sw.js") {
    Write-Host "  ✅ sw.js exists" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  sw.js not found" -ForegroundColor Yellow
    $warnings++
}

# Check layout.tsx metadata
Write-Host ""
Write-Host "📱 Checking layout.tsx metadata..." -ForegroundColor Yellow
$layout = Get-Content "src/app/layout.tsx" -Raw
if ($layout -match "manifest") {
    Write-Host "  ✅ manifest reference found" -ForegroundColor Green
} else {
    Write-Host "  ❌ manifest reference missing" -ForegroundColor Red
    $errors++
}

if ($layout -match "themeColor") {
    Write-Host "  ✅ themeColor configured" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  themeColor missing" -ForegroundColor Yellow
    $warnings++
}

if ($layout -match "appleWebApp") {
    Write-Host "  ✅ Apple Web App metadata found" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  Apple Web App metadata missing" -ForegroundColor Yellow
    $warnings++
}

# Check next.config.ts
Write-Host ""
Write-Host "⚙️  Checking next.config.ts..." -ForegroundColor Yellow
if (Test-Path "next.config.ts") {
    $config = Get-Content "next.config.ts" -Raw
    if ($config -match "reactStrictMode") {
        Write-Host "  ✅ React Strict Mode enabled" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  React Strict Mode not enabled" -ForegroundColor Yellow
        $warnings++
    }
} else {
    Write-Host "  ❌ next.config.ts not found" -ForegroundColor Red
    $errors++
}

# Summary
Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "  Errors: $errors" -ForegroundColor $(if ($errors -eq 0) { "Green" } else { "Red" })
Write-Host "  Warnings: $warnings" -ForegroundColor $(if ($warnings -eq 0) { "Green" } else { "Yellow" })

if ($errors -eq 0 -and $warnings -eq 0) {
    Write-Host ""
    Write-Host "✅ PWA setup complete! Ready for testing." -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. npm run build" -ForegroundColor White
    Write-Host "  2. Test with Lighthouse (Chrome DevTools)" -ForegroundColor White
    Write-Host "  3. Test install prompt on mobile device" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "⚠️  Please fix errors before deployment" -ForegroundColor Yellow
}

exit $errors
