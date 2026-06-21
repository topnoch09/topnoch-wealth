import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw

LOGO_PATH = r"C:\Users\ea2en\Projects\top-noch-wealth\public\logo.png"
OUT_DIR = r"C:\Users\ea2en\Projects\top-noch-wealth\_tools"

JOBS = [
    {
        "url": "https://buy.stripe.com/6oU8wPa1o4YR1Dcad25gc0a",
        "color": (0, 0, 0),
        "filename": "topnoch-founders-club-mentorship-black-qr.png",
    },
    {
        "url": "https://buy.stripe.com/6oU7sLa1o8b381A1Gw5gc07",
        "color": (52, 97, 166),
        "filename": "topnoch-stripe-2-royalblue-qr.png",
    },
    {
        "url": "https://topnochenterprises.com/assessment",
        "color": (14, 107, 61),
        "filename": "topnoch-assessment-emerald-qr.png",
    },
    {
        "url": "https://buy.stripe.com/5kQfZh6Pc2QJbdMfxm5gc09",
        "color": (139, 105, 20),
        "filename": "topnoch-scw-method-gold-qr.png",
    },
]

for job in JOBS:
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=20,
        border=4,
    )
    qr.add_data(job["url"])
    qr.make(fit=True)

    img = qr.make_image(fill_color=job["color"], back_color="white").convert("RGBA")
    qr_w, qr_h = img.size

    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_size = qr_w // 4
    logo.thumbnail((logo_size, logo_size), Image.LANCZOS)

    pad = 16
    bg_size = (logo.size[0] + pad * 2, logo.size[1] + pad * 2)
    bg = Image.new("RGBA", bg_size, (255, 255, 255, 255))
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
    out_path = f"{OUT_DIR}\\{job['filename']}"
    img.save(out_path, "PNG", optimize=True)
    print(f"Saved: {out_path}")
    print(f"  URL: {job['url']}")
