from PIL import Image, ImageDraw, ImageFont
import pathlib

OUT = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\og-image.png")
LOGO = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo.png")

W, H = 1200, 630
royal_dark = (15, 40, 71)
royal = (26, 58, 107)
gold = (201, 168, 76)
white = (255, 255, 255)

img = Image.new("RGB", (W, H), royal_dark)
draw = ImageDraw.Draw(img)

# subtle gradient
for y in range(H):
    t = y / H
    r = int(royal_dark[0] * (1 - t) + royal[0] * t)
    g = int(royal_dark[1] * (1 - t) + royal[1] * t)
    b = int(royal_dark[2] * (1 - t) + royal[2] * t)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# gold accent bar
draw.rectangle([(0, 0), (W, 8)], fill=gold)

# Logo
logo = Image.open(LOGO).convert("RGBA")
logo.thumbnail((180, 180), Image.LANCZOS)
img.paste(logo, (80, 80), logo)

# Try to load a strong font; fall back if missing
def load_font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
    ]
    for c in candidates:
        try:
            return ImageFont.truetype(c, size)
        except Exception:
            continue
    return ImageFont.load_default()

title_font = load_font(72, bold=True)
sub_font = load_font(36)
small_font = load_font(28)

# Headline
draw.text((80, 290), "Structure. Capital.", font=title_font, fill=white)
draw.text((80, 380), "Wealth.", font=title_font, fill=gold)

# Tagline
draw.text(
    (80, 490),
    "Become fundable. Acquire capital. Build lasting wealth.",
    font=sub_font,
    fill=(255, 255, 255, 200),
)

# URL bottom right
url_text = "topnochwealth.com"
url_bbox = draw.textbbox((0, 0), url_text, font=small_font)
url_w = url_bbox[2] - url_bbox[0]
draw.text((W - url_w - 80, H - 70), url_text, font=small_font, fill=gold)

img.save(OUT, "PNG", optimize=True)
print(f"Saved: {OUT}")
print(f"Size: {W}x{H}")
