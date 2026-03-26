from PIL import Image, ImageDraw, ImageFont, ImageFilter
import requests
import os

# Canvas size: 720x1280
W, H = 720, 1280

# Brand colors
NAVY = (0, 51, 73)       # #003349
RUST = (194, 91, 60)     # #C25B3C
WHITE = (255, 255, 255)
LIGHT_NAVY = (0, 65, 95)

# Paths
BASE = "/home/ubuntu/lzbcolumbus/client/public/images"
LOGO_PATH = f"{BASE}/lazboy-columbus-logo-hero.png"
PHOTO_PATH = f"{BASE}/gallery-1.jpg"  # Real showroom/lifestyle photo
OUT_PATH = "/home/ubuntu/lzbcolumbus/spotify-canvas-v2.png"

# --- Load real photo ---
photo = Image.open(PHOTO_PATH).convert("RGBA")
# Crop to fill top 55% of canvas (720 x 704)
photo_target_w = W
photo_target_h = int(H * 0.55)
# Scale to fill width
ratio = photo_target_w / photo.width
new_h = int(photo.height * ratio)
photo = photo.resize((photo_target_w, new_h), Image.LANCZOS)
# Center crop vertically
if new_h > photo_target_h:
    top = (new_h - photo_target_h) // 2
    photo = photo.crop((0, top, photo_target_w, top + photo_target_h))
else:
    photo = photo.resize((photo_target_w, photo_target_h), Image.LANCZOS)

# --- Create canvas ---
canvas = Image.new("RGBA", (W, H), NAVY)

# Paste photo at top
canvas.paste(photo, (0, 0))

# Dark gradient overlay on bottom of photo for blending
gradient = Image.new("RGBA", (W, photo_target_h), (0, 0, 0, 0))
draw_grad = ImageDraw.Draw(gradient)
for i in range(photo_target_h):
    alpha = int(200 * (i / photo_target_h) ** 2)
    draw_grad.line([(0, i), (W, i)], fill=(0, 51, 73, alpha))
canvas.alpha_composite(gradient, (0, 0))

# --- Load and place logo over photo (bottom of photo area) ---
logo = Image.open(LOGO_PATH).convert("RGBA")
logo_target_w = 340
ratio = logo_target_w / logo.width
logo = logo.resize((logo_target_w, int(logo.height * ratio)), Image.LANCZOS)
logo_x = (W - logo_target_w) // 2
logo_y = photo_target_h - logo.height - 24

# Semi-transparent pill behind logo for legibility
draw_temp = ImageDraw.Draw(canvas)
pad = 20
draw_temp.rounded_rectangle(
    [(logo_x - pad, logo_y - 10), (logo_x + logo_target_w + pad, logo_y + logo.height + 10)],
    radius=12,
    fill=(0, 0, 0, 120)
)
canvas.paste(logo, (logo_x, logo_y), logo)

# --- Rust accent bar ---
draw = ImageDraw.Draw(canvas)
bar_y = photo_target_h
draw.rectangle([(0, bar_y), (W, bar_y + 8)], fill=RUST)

# --- Text ---
draw = ImageDraw.Draw(canvas)

# Try to load a font, fall back to default
try:
    font_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 62)
    font_medium = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf", 36)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
    font_url = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 30)
except:
    font_large = ImageFont.load_default()
    font_medium = font_large
    font_small = font_large
    font_url = font_large

# Headline
headline_y = bar_y + 50
lines = ["Sink Into", "Something", "Comfortable."]
for i, line in enumerate(lines):
    bbox = draw.textbbox((0, 0), line, font=font_large)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, headline_y + i * 72), line, font=font_large, fill=WHITE)

# Subline in rust
sub_y = headline_y + len(lines) * 72 + 16
sub_text = "Locally owned. Columbus, GA."
bbox = draw.textbbox((0, 0), sub_text, font=font_medium)
tw = bbox[2] - bbox[0]
draw.text(((W - tw) // 2, sub_y), sub_text, font=font_medium, fill=RUST)

# Divider line
div_y = sub_y + 56
draw.rectangle([(60, div_y), (W - 60, div_y + 2)], fill=(255, 255, 255, 60))

# URL pill
pill_y = div_y + 24
pill_w, pill_h = 360, 58
pill_x = (W - pill_w) // 2
draw.rounded_rectangle([(pill_x, pill_y), (pill_x + pill_w, pill_y + pill_h)], radius=29, fill=RUST)
url_text = "lzbcolumbus.com"
bbox = draw.textbbox((0, 0), url_text, font=font_url)
tw = bbox[2] - bbox[0]
th = bbox[3] - bbox[1]
draw.text(((W - tw) // 2, pill_y + (pill_h - th) // 2 - 2), url_text, font=font_url, fill=WHITE)

# Save
canvas = canvas.convert("RGB")
canvas.save(OUT_PATH, "PNG", quality=95)
print(f"Saved: {OUT_PATH} ({canvas.size})")
