from PIL import Image
from collections import Counter

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def extract_colors(image_path):
    img = Image.open(image_path)
    width, height = img.size
    
    # Crop to the bottom half to get secondary colors
    # The secondary colors are in the bottom row
    bottom_half = img.crop((0, height // 2, width, height))
    
    # Resize to speed up processing
    bottom_half = bottom_half.resize((100, 50))
    
    pixels = list(bottom_half.getdata())
    
    # Filter out white/near-white background pixels
    filtered_pixels = [p for p in pixels if not (p[0] > 240 and p[1] > 240 and p[2] > 240)]
    
    # Get most common colors
    counts = Counter(filtered_pixels)
    most_common = counts.most_common(10)
    
    print("Dominant colors in bottom half:")
    for color, count in most_common:
        print(f"{rgb_to_hex(color)} (count: {count})")

if __name__ == "__main__":
    extract_colors("/home/ubuntu/upload/Screenshot2025-12-14at3.53.35PM.png")
