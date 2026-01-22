import os
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

cert_dir = r"c:\Users\muvva\Downloads\NEW\Certificates"
os.chdir(cert_dir)

# Get all JPG files
jpg_files = list(Path('.').glob('*.jpg'))

print(f"Regenerating {len(jpg_files)} certificate images with better styling...")

for jpg_file in jpg_files:
    # Create a professional-looking certificate image
    img = Image.new('RGB', (1000, 700), color=(230, 240, 250))
    draw = ImageDraw.Draw(img)
    
    # Create gradient effect by drawing colored rectangles
    for i in range(700):
        color = (30 + int((200-30) * i / 700), 58 + int((120-58) * i / 700), 95 + int((200-95) * i / 700))
        draw.line([(0, i), (1000, i)], fill=color)
    
    # Add decorative border
    draw.rectangle([20, 20, 980, 680], outline=(255, 215, 0), width=5)
    draw.rectangle([40, 40, 960, 660], outline=(255, 255, 255), width=2)
    
    # Add certificate text
    cert_name = jpg_file.stem.replace('_', ' ').replace('Certificate ', '').replace('.jpg', '')
    
    # Draw title
    draw.text((50, 250), "CERTIFICATE OF COMPLETION", fill=(255, 255, 255), font=None)
    
    # Draw certificate name
    draw.text((50, 350), cert_name, fill=(255, 215, 0), font=None)
    
    # Draw footer
    draw.text((50, 600), "Issued to: Muvva Babu Dhanush Kumar", fill=(255, 255, 255), font=None)
    
    # Save
    img.save(jpg_file, 'JPEG', quality=90)
    print(f"✓ Updated: {jpg_file}")

print("Certificate images updated successfully!")
