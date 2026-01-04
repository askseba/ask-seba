# PWA Icon Setup Instructions

## Quick Start

### Option 1: Automated (If ImageMagick is installed)

```powershell
# Run the processing script
.\process-icons.ps1
```

This will automatically:
- Copy `asd1.jpg` to `public/icon-original.jpg`
- Resize to all required sizes
- Save as PNG files in `public/` directory

### Option 2: Manual Processing

If ImageMagick is not installed, follow these steps:

1. **Place the source image:**
   - Copy `asd1.jpg` to the project root directory

2. **Resize and convert to PNG:**
   
   Use one of these tools:
   
   **Online Tools:**
   - https://www.iloveimg.com/resize-image
   - https://www.pwabuilder.com/imageGenerator
   - https://www.resizepixel.com/
   
   **Desktop Tools:**
   - Photoshop/GIMP: Open → Resize → Export as PNG
   - Paint.NET (Windows): Image → Resize → Save as PNG
   - Preview (Mac): Tools → Adjust Size → Export as PNG

3. **Create these sizes and save to `public/` folder:**
   
   | Size | Filename | Purpose |
   |------|----------|---------|
   | 512×512px | `pwa-512.png` | PWA large icon |
   | 192×192px | `pwa-192.png` | PWA standard icon |
   | 180×180px | `apple-touch-icon.png` | Apple devices |
   | 32×32px | `favicon-32x32.png` | Browser favicon |
   | 16×16px | `favicon-16x16.png` | Browser favicon (small) |

## Verification

After creating the icons, run:

```powershell
# Check all icons exist
Test-Path "public/pwa-512.png"
Test-Path "public/pwa-192.png"
Test-Path "public/apple-touch-icon.png"
Test-Path "public/favicon-32x32.png"
Test-Path "public/favicon-16x16.png"

# Or use the verification script
.\process-icons.ps1
```

## File Locations

All icons should be in the `public/` directory:

```
public/
├── pwa-512.png          (512×512px)
├── pwa-192.png          (192×192px)
├── apple-touch-icon.png (180×180px)
├── favicon-32x32.png    (32×32px)
└── favicon-16x16.png    (16×16px)
```

## Testing

After icons are created:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Test in browser:**
   - Open Chrome DevTools → Application → Manifest
   - Verify icons appear correctly
   - Check favicon in browser tab

4. **Test PWA install:**
   - Open on mobile device
   - Check for "Add to Home Screen" prompt
   - Verify icon appears after installation

## Notes

- All icons must be PNG format
- Icons should have transparent or solid background
- Recommended: Square icons (aspect ratio 1:1)
- For best results, use high-quality source image (at least 512×512px)
