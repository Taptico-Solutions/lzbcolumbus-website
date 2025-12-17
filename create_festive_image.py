from PIL import Image, ImageDraw, ImageFont
import os

def create_festive_image(input_path, output_path):
    # Open the original image
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Create a transparent overlay
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # Add a subtle dark gradient at the bottom for text readability
    # (Simulating gradient by drawing semi-transparent rectangles)
    for y in range(height - 150, height):
        alpha = int(255 * ((y - (height - 150)) / 150) * 0.7)
        draw.line([(0, y), (width, y)], fill=(0, 51, 73, alpha)) # Dark Blue tint
        
    # Add "Happy New Year" text
    # Note: Using default font since we can't easily load custom fonts without paths
    # Ideally we would use a nice serif font
    
    # Draw a decorative border
    border_width = 20
    draw.rectangle([border_width, border_width, width - border_width, height - border_width], 
                   outline="#E6E2D5", width=3) # Cream border
    
    # Save the result
    # Since we can't easily render high-quality text with default PIL fonts,
    # we will just save the image with the border and gradient, 
    # and let the HTML handle the text overlay for better quality/accessibility.
    # OR we can try to find a font.
    
    # Let's try to use a system font if available, otherwise default
    try:
        font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
        font_size = int(width / 15)
        font = ImageFont.truetype(font_path, font_size)
        
        text = "Happy New Year"
        text2 = "2026"
        
        # Calculate text position (centered, bottom)
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (width - text_width) / 2
        y = height - 180
        
        # Draw text shadow
        draw.text((x+2, y+2), text, font=font, fill=(0, 0, 0, 128))
        # Draw text
        draw.text((x, y), text, font=font, fill="#E6E2D5")
        
        # Draw 2026
        font_size_2 = int(width / 8)
        font2 = ImageFont.truetype(font_path, font_size_2)
        bbox2 = draw.textbbox((0, 0), text2, font=font2)
        text_width2 = bbox2[2] - bbox2[0]
        
        x2 = (width - text_width2) / 2
        y2 = y + text_height + 10
        
        draw.text((x2+3, y2+3), text2, font=font2, fill=(0, 0, 0, 128))
        draw.text((x2, y2), text2, font=font2, fill="#E6E2D5")
        
    except Exception as e:
        print(f"Could not load font: {e}")
    
    # Composite and save
    final_img = Image.alpha_composite(img, overlay)
    final_img = final_img.convert("RGB")
    final_img.save(output_path, quality=95)
    print(f"Saved festive image to {output_path}")

if __name__ == "__main__":
    create_festive_image(
        "/home/ubuntu/lzbcolumbus/client/public/images/family-photo-real.jpg",
        "/home/ubuntu/lzbcolumbus/client/public/images/family-photo-2026.jpg"
    )
