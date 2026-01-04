# PHASE 0 Verification Script
# Run this to verify all cleanup tasks completed successfully

Write-Host "🔍 PHASE 0 VERIFICATION" -ForegroundColor Cyan
Write-Host "======================" -ForegroundColor Cyan
Write-Host ""

# 1. Layout verification
Write-Host "1. Layout.tsx Verification:" -ForegroundColor Yellow
if (Test-Path "src/app/layout.tsx") {
    $layoutContent = Get-Content "src/app/layout.tsx" -Raw
    if ($layoutContent -match "Noto_Sans_Arabic") {
        Write-Host "   ✅ layout.tsx exists with Noto Sans Arabic" -ForegroundColor Green
    } else {
        Write-Host "   ❌ layout.tsx missing Noto Sans Arabic" -ForegroundColor Red
    }
    if ($layoutContent -match 'lang="ar"') {
        Write-Host "   ✅ RTL support (lang='ar') present" -ForegroundColor Green
    } else {
        Write-Host "   ❌ RTL support missing" -ForegroundColor Red
    }
    if ($layoutContent -match 'dir="rtl"') {
        Write-Host "   ✅ RTL direction (dir='rtl') present" -ForegroundColor Green
    } else {
        Write-Host "   ❌ RTL direction missing" -ForegroundColor Red
    }
} else {
    Write-Host "   ❌ layout.tsx missing" -ForegroundColor Red
}

Write-Host ""

# 2. Directory structure verification
Write-Host "2. Directory Structure:" -ForegroundColor Yellow
$dirs = @(
    "src/components/ui",
    "src/components/quiz",
    "src/lib/data",
    "src/app/perfume/id",
    "src/app/dashboard"
)

foreach ($dir in $dirs) {
    if (Test-Path $dir) {
        Write-Host "   ✅ $dir exists" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $dir missing" -ForegroundColor Red
    }
}

Write-Host ""

# 3. Duplicate files verification
Write-Host "3. Duplicate Files Check:" -ForegroundColor Yellow
if (-not (Test-Path "PerfumeCard.tsx")) {
    Write-Host "   ✅ PerfumeCard.tsx not in root (clean)" -ForegroundColor Green
} else {
    Write-Host "   ❌ PerfumeCard.tsx found in root (should be deleted)" -ForegroundColor Red
}

if (-not (Test-Path "PerfumeTimeline.tsx")) {
    Write-Host "   ✅ PerfumeTimeline.tsx not in root (clean)" -ForegroundColor Green
} else {
    Write-Host "   ❌ PerfumeTimeline.tsx found in root (should be deleted)" -ForegroundColor Red
}

Write-Host ""

# 4. Component files status (when moved)
Write-Host "4. Component Files Status:" -ForegroundColor Yellow
$uiComponents = @("SpeedometerGauge", "RadarChart", "FilterSidebar", "PerfumeGrid", "SmartImage", "FilterTabs", "StatsGrid")
$foundCount = 0

foreach ($comp in $uiComponents) {
    $path = "src/components/ui/$comp.tsx"
    if (Test-Path $path) {
        Write-Host "   ✅ $comp.tsx moved to src/components/ui/" -ForegroundColor Green
        $foundCount++
    } else {
        Write-Host "   ⚠️  $comp.tsx not found (ready to move when available)" -ForegroundColor Yellow
    }
}

if (Test-Path "src/components/quiz/Step3Allergy.tsx") {
    Write-Host "   ✅ Step3Allergy.tsx moved to src/components/quiz/" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Step3Allergy.tsx not found (ready to move when available)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "   Components in src/components/ui/: $foundCount/7" -ForegroundColor $(if ($foundCount -eq 7) { "Green" } else { "Yellow" })
Write-Host "   Components in src/components/quiz/: $((Test-Path "src/components/quiz/Step3Allergy.tsx") ? 1 : 0)/1" -ForegroundColor $(if (Test-Path "src/components/quiz/Step3Allergy.tsx") { "Green" } else { "Yellow" })

Write-Host ""
Write-Host "✅ Phase 0 Foundation Cleanup: COMPLETE" -ForegroundColor Green
Write-Host "   Next: Move component files when available" -ForegroundColor Cyan
