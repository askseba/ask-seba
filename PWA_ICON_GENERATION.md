# PWA Icon Generation Guide

## Required Icons

The PWA requires the following icons:

1. **pwa-192.png** (192×192px)
2. **pwa-512.png** (512×512px)
3. **apple-touch-icon.png** (180×180px)

## Design Specifications

### Colors:
- Background: `#c0841a` (Primary brand color)
- Text: `#FFFFFF` (White)
- Font: Noto Sans Arabic (Bold)

### Content:
- Text: "اس" (Arabic letters for "Ask Seba")
- Centered, large, bold
- Rounded corners (optional)

## Generation Methods

### Method 1: Online Tools
1. Visit https://www.pwabuilder.com/imageGenerator
2. Upload a 512×512px source image
3. Download generated icons

### Method 2: Image Editor (Photoshop/GIMP)
1. Create 512×512px canvas
2. Fill with `#c0841a`
3. Add "اس" text in white, centered
4. Export as PNG
5. Resize to 192×192px and 180×180px versions

### Method 3: Command Line (ImageMagick)
```bash
# Install ImageMagick first
# Create 512×512 icon
convert -size 512x512 xc:#c0841a -font "Noto-Sans-Arabic-Bold" -pointsize 200 -fill white -gravity center -annotate +0+0 "اس" public/pwa-512.png

# Create 192×192 icon
convert public/pwa-512.png -resize 192x192 public/pwa-192.png

# Create 180×180 Apple icon
convert public/pwa-512.png -resize 180x180 public/apple-touch-icon.png
```

### Method 4: Placeholder (Temporary)
For development, create simple colored squares:
```bash
# Using PowerShell (temporary placeholders)
# These will be replaced with proper icons later
```

## Placement

All icons should be placed in the `public/` directory:
```
public/
├── pwa-192.png
├── pwa-512.png
└── apple-touch-icon.png
```

## Testing

After adding icons:
1. Run `npm run build`
2. Test in Chrome DevTools → Application → Manifest
3. Verify icons appear correctly
4. Test install prompt on mobile device
