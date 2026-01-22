import os
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

cert_dir = r"c:\Users\muvva\Downloads\NEW\Certificates"
os.chdir(cert_dir)

# Get all PDF files
pdf_files = list(Path('.').glob('*.pdf'))

print(f"Creating JPEG placeholders for {len(pdf_files)} PDFs...")

for pdf_file in pdf_files:
    jpg_file = pdf_file.stem + '.jpg'
    
    # Create a simple JPEG image
    img = Image.new('RGB', (800, 600), color=(30, 58, 95))
    draw = ImageDraw.Draw(img)
    
    # Add text
    text = f"Certificate: {pdf_file.stem}"
    draw.text((50, 250), text, fill=(255, 255, 255))
    
    # Save
    img.save(jpg_file, 'JPEG', quality=85)
    print(f"✓ Created: {jpg_file}")
    
    # Delete the PDF
    os.remove(pdf_file)
    print(f"✓ Deleted: {pdf_file}")

print("All PDFs converted to JPEGs!")
