import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw

URL = "https://topnochwealth.com/services#products"
LOGO_PATH = r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo.png"
OUTPUT_PATH = r"C:\Users\ea2en\Projects\top-noch-wealth\_tools\topnoch-services-qr.png"

qr = qrcode.QRCode(
    version=None,
    error_correction=ERROR_CORRECT_H,
    box_size=20,
    border=4,
)
qr.add_data(URL)
qr.make(fit=True)

royal_dark = (15, 40, 71)
img = qr.make_image(fill_color=royal_dark, back_color="white").convert("RGBA")
qr_w, qr_h = img.size

logo = Image.open(LOGO_PATH).convert("RGBA")
logo_size = qr_w // 4
logo.thumbnail((logo_size, logo_size), Image.LANCZOS)

pad = 16
bg_size = (logo.size[0] + pad * 2, logo.size[1] + pad * 2)
bg = Image.new("RGBA", bg_size, (255, 255, 255, 255))
draw = ImageDraw.Draw(bg)

mask = Image.new("L", bg_size, 0)
mdraw = ImageDraw.Draw(mask)
mdraw.rounded_rectangle((0, 0, bg_size[0], bg_size[1]), radius=24, fill=255)
bg.putalpha(mask)

bg_pos = ((qr_w - bg_size[0]) // 2, (qr_h - bg_size[1]) // 2)
img.paste(bg, bg_pos, bg)

logo_pos = (bg_pos[0] + pad, bg_pos[1] + pad)
img.paste(logo, logo_pos, logo)

final_size = 1200
img = img.resize((final_size, final_size), Image.LANCZOS)
img.save(OUTPUT_PATH, "PNG", optimize=True)
print(f"Saved: {OUTPUT_PATH}")
print(f"Size: {final_size}x{final_size}")
print(f"URL: {URL}")
