from PIL import Image, ImageDraw, ImageFont
import os

W, H = 720, 1280

# Newsletter palette
TEAL = (95, 138, 139)
BG = (214, 228, 229)
NAVY = (27, 42, 59)
WHITE = (255, 255, 255)

BASE = "/home/ubuntu/lzbcolumbus/client/public/images"
LOGO_PATH = f"{BASE}/lazboy-columbus-logo-hero.png"
PHOTO_PATH = f"{BASE}/gallery-1.jpg"
OUT_PATH = "/home/ubuntu/lzbcolumbus/spotify-canvas-v3.png"

# Fonts
SERIF_BOLD    = "/usr/share/fonts/noto/NotoSerif-Bold.ttf"
SERIF_ITALIC  = "/usr/share/fonts/noto/NotoSerif-BoldItalic.ttf"
SANS          = "/usr/share/fonts/noto/static/Roboto-Bold.ttf"
SANS_REG      = "/usr/share/fonts/noto/static/Roboto-Regular.ttf" if os.path.exists("/usr/share/fonts/noto/static/Roboto-Regular.ttf") else SANS

f_header = ImageFont.truetype(SERIF_ITALIC, 54)
f_hl     = ImageFont.truetype(SERIF_BOLD, 88)
f_sub    = ImageFont.truetype(SERIF_ITALIC, 42)
f_body   = ImageFont.truetype(SANS_REG, 32)
f_url    = ImageFont.truetype(SANS, 36)

canvas = Image.new("RGBA", (W, H), BG)
draw = ImageDraw.Draw(canvas)

# ── TEAL HEADER ──────────────────────────────────────────
header_h = 120
draw.rectangle([(0, 0), (W, header_h)], fill=TEAL)
hdr = "La-Z-Boy of Columbus"
bb = draw.textbbox((0,0), hdr, font=f_header)
draw.text(((W-(bb[2]-bb[0]))//2, (header_h-(bb[3]-bb[1]))//2 + 4), hdr, font=f_header, fill=WHITE)

# ── PHOTO ────────────────────────────────────────────────
photo = Image.open(PHOTO_PATH).convert("RGBA")
pw, ph_target = W - 40, 440
r = pw / photo.width
nh = int(photo.height * r)
photo = photo.resize((pw, nh), Image.LANCZOS)
if nh > ph_target:
    top = (nh - ph_target) // 3
    photo = photo.crop((0, top, pw, top + ph_target))
else:
    photo = photo.resize((pw, ph_target), Image.LANCZOS)

mask = Image.new("L", (pw, ph_target), 0)
ImageDraw.Draw(mask).rounded_rectangle([(0,0),(pw,ph_target)], radius=18, fill=255)
photo.putalpha(mask)
py = header_h + 24
canvas.alpha_composite(photo, (20, py))

# ── LOGO over photo ──────────────────────────────────────
logo = Image.open(LOGO_PATH).convert("RGBA")
lw = 230
logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
lx, ly = 36, py + ph_target - logo.height - 18
ImageDraw.Draw(canvas).rounded_rectangle(
    [(lx-12, ly-8),(lx+lw+12, ly+logo.height+8)], radius=12, fill=(255,255,255,215))
canvas.alpha_composite(logo, (lx, ly))

# ── HEADLINE ─────────────────────────────────────────────
draw = ImageDraw.Draw(canvas)
hl_y = py + ph_target + 40
for i, line in enumerate(["Sink Into", "Something", "Comfortable."]):
    bb = draw.textbbox((0,0), line, font=f_hl)
    draw.text(((W-(bb[2]-bb[0]))//2, hl_y + i*96), line, font=f_hl, fill=NAVY)

# ── SUBLINE ───────────────────────────────────────────────
sub_y = hl_y + 3*96 + 16
sub = "Locally owned. Family run."
bb = draw.textbbox((0,0), sub, font=f_sub)
draw.text(((W-(bb[2]-bb[0]))//2, sub_y), sub, font=f_sub, fill=TEAL)

# ── DIVIDER ───────────────────────────────────────────────
div_y = sub_y + 64
draw.rectangle([(60, div_y),(W-60, div_y+2)], fill=TEAL)

# ── ADDRESS ───────────────────────────────────────────────
addr_y = div_y + 28
addr = "Columbus Park Crossing  ·  706-653-1070"
bb = draw.textbbox((0,0), addr, font=f_body)
draw.text(((W-(bb[2]-bb[0]))//2, addr_y), addr, font=f_body, fill=NAVY)

# ── URL PILL ──────────────────────────────────────────────
pill_y = addr_y + 70
pill_w, pill_h = 440, 72
pill_x = (W - pill_w) // 2
draw.rounded_rectangle([(pill_x, pill_y),(pill_x+pill_w, pill_y+pill_h)], radius=36, fill=TEAL)
url = "lzbcolumbus.com"
bb = draw.textbbox((0,0), url, font=f_url)
draw.text(((W-(bb[2]-bb[0]))//2, pill_y+(pill_h-(bb[3]-bb[1]))//2-2), url, font=f_url, fill=WHITE)

# ── TEAL FOOTER ───────────────────────────────────────────
draw.rectangle([(0, H-44),(W, H)], fill=TEAL)

canvas = canvas.convert("RGB")
canvas.save(OUT_PATH, "PNG", quality=95)
print(f"Saved: {OUT_PATH} — size {canvas.size}")
