# PWA Icon Processing Script
# Processes asd1.jpg into required PWA icon sizes

Write-Host "🖼️  PWA Icon Processing - Ask Seba" -ForegroundColor Cyan
Write-Host ""

$sourceImage = "asd1.jpg"
$publicDir = "public"

# Check if source image exists
if (-not (Test-Path $sourceImage)) {
    Write-Host "❌ Error: $sourceImage not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please:" -ForegroundColor Yellow
    Write-Host "  1. Place asd1.jpg in the project root" -ForegroundColor White
    Write-Host "  2. Run this script again" -ForegroundColor White
    exit 1
}

Write-Host "✅ Source image found: $sourceImage" -ForegroundColor Green

# Check if ImageMagick is available
$hasImageMagick = $false
if (Get-Command magick -ErrorAction SilentlyContinue) {
    $hasImageMagick = $true
    Write-Host "✅ ImageMagick found - using automated conversion" -ForegroundColor Green
} else {
    Write-Host "⚠️  ImageMagick not found - manual instructions will be provided" -ForegroundColor Yellow
}

Write-Host ""

# Create public directory if it doesn't exist
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir | Out-Null
    Write-Host "✅ Created $publicDir directory" -ForegroundColor Green
}

# Copy original to public
Copy-Item $sourceImage -Destination "$publicDir/icon-original.jpg" -Force
Write-Host "✅ Copied original to $publicDir/icon-original.jpg" -ForegroundColor Green

if ($hasImageMagick) {
    Write-Host ""
    Write-Host "🔄 Converting images with ImageMagick..." -ForegroundColor Yellow
    
    # Generate PWA icons
    $icons = @(
        @{size=512; name="pwa-512.png"},
        @{size=192; name="pwa-192.png"},
        @{size=180; name="apple-touch-icon.png"},
        @{size=32; name="favicon-32x32.png"},
        @{size=16; name="favicon-16x16.png"}
    )
    
    foreach ($icon in $icons) {
        $outputPath = "$publicDir/$($icon.name)"
        $size = "$($icon.size)x$($icon.size)"
        
        try {
            & magick $sourceImage -resize $size -quality 100 $outputPath
            if (Test-Path $outputPath) {
                Write-Host "  ✅ Created $($icon.name) ($size)" -ForegroundColor Green
            } else {
                Write-Host "  ❌ Failed to create $($icon.name)" -ForegroundColor Red
            }
        } catch {
            Write-Host "  ❌ Error creating $($icon.name): $_" -ForegroundColor Red
        }
    }
    
    Write-Host ""
    Write-Host "✅ Icon processing complete!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "📋 Manual Instructions:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Please resize $sourceImage to the following sizes and save as PNG:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  1. 512×512px → $publicDir/pwa-512.png" -ForegroundColor White
    Write-Host "  2. 192×192px → $publicDir/pwa-192.png" -ForegroundColor White
    Write-Host "  3. 180×180px → $publicDir/apple-touch-icon.png" -ForegroundColor White
    Write-Host "  4. 32×32px   → $publicDir/favicon-32x32.png" -ForegroundColor White
    Write-Host "  5. 16×16px   → $publicDir/favicon-16x16.png" -ForegroundColor White
    Write-Host ""
    Write-Host "Tools you can use:" -ForegroundColor Yellow
    Write-Host "  - Online: https://www.iloveimg.com/resize-image" -ForegroundColor White
    Write-Host "  - Online: https://www.pwabuilder.com/imageGenerator" -ForegroundColor White
    Write-Host "  - Photoshop/GIMP: Resize & Export as PNG" -ForegroundColor White
    Write-Host ""
}

# Verify created icons
Write-Host ""
Write-Host "🔍 Verifying icons..." -ForegroundColor Cyan
$requiredIcons = @(
    "pwa-512.png",
    "pwa-192.png",
    "apple-touch-icon.png",
    "favicon-32x32.png",
    "favicon-16x16.png"
)

$missingIcons = @()
foreach ($icon in $requiredIcons) {
    $iconPath = "$publicDir/$icon"
    if (Test-Path $iconPath) {
        $size = (Get-Item $iconPath).Length
        Write-Host "  ✅ $icon ($size bytes)" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $icon (missing)" -ForegroundColor Red
        $missingIcons += $icon
    }
}

if ($missingIcons.Count -eq 0) {
    Write-Host ""
    Write-Host "✅ All icons created successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Run: npm run build" -ForegroundColor White
    Write-Host "  2. Test with Lighthouse" -ForegroundColor White
    Write-Host "  3. Test install prompt on mobile" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "⚠️  Missing icons: $($missingIcons -join ', ')" -ForegroundColor Yellow
    Write-Host "Please create the missing icons manually." -ForegroundColor Yellow
}

exit $missingIcons.Count
