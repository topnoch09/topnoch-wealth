"""
Process the new Topnoch Enterprises logo:
- logo-new.png (1600x1600, lion + script text, white bg) →
  - logo.png (lion only, transparent bg) — for header/footer/icons
  - logo-full.png (lion + script text, transparent bg) — for OG/large displays
"""
from PIL import Image
import pathlib

SRC = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo-new.png")
LION_OUT = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo.png")
FULL_OUT = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo-full.png")

# backup old logo
OLD = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo.png")
BACKUP = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo-old.png")
if OLD.exists() and not BACKUP.exists():
    OLD.replace(BACKUP)
    print(f"Backed up old logo -> {BACKUP.name}")

def white_to_transparent(img: Image.Image, threshold: int = 240) -> Image.Image:
    """Convert near-white pixels to transparent."""
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                px[x, y] = (r, g, b, 0)
    return img

def autocrop(img: Image.Image, pad: int = 20) -> Image.Image:
    """Crop transparent borders, leaving small padding."""
    bbox = img.getbbox()
    if not bbox:
        return img
    left, top, right, bottom = bbox
    w, h = img.size
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(w, right + pad)
    bottom = min(h, bottom + pad)
    return img.crop((left, top, right, bottom))

src = Image.open(SRC).convert("RGBA")
W, H = src.size
print(f"Source: {W}x{H}")

# 1) Full logo with text — make white transparent + autocrop
full = white_to_transparent(src.copy())
full = autocrop(full)
full.save(FULL_OUT, "PNG", optimize=True)
print(f"Saved full logo: {FULL_OUT.name} ({full.size[0]}x{full.size[1]})")

# 2) Lion-only — crop top portion (lion takes ~65% of height before script text)
lion_crop_bottom = int(H * 0.66)  # crop above script text
lion = src.crop((0, 0, W, lion_crop_bottom))
lion = white_to_transparent(lion)
lion = autocrop(lion)
lion.save(LION_OUT, "PNG", optimize=True)
print(f"Saved lion-only: {LION_OUT.name} ({lion.size[0]}x{lion.size[1]})")
