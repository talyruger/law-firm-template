#!/bin/bash
# Create a simple PNG logo using ImageMagick alternative or Python
python3 -c "
from PIL import Image, ImageDraw, ImageFont
import os

# Create a new image with navy blue background
width, height = 300, 120
image = Image.new('RGB', (width, height), color='#1B365D')
draw = ImageDraw.Draw(image)

try:
    # Try to use a system font
    font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 32)
    font_medium = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 16)
    font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 12)
except:
    # Fallback to default font
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Draw text
draw.text((80, 30), 'LAW FIRM', fill='white', font=font_large)
draw.text((80, 65), 'PROFESSIONAL LEGAL SERVICES', fill='#D4AF37', font=font_medium)
draw.text((80, 85), 'TEMPLATE', fill='#B8C5D1', font=font_small)

# Draw a simple scales icon
# Left scale
draw.ellipse([20, 40, 50, 70], outline='#D4AF37', width=2)
draw.line([35, 35, 35, 55], fill='#D4AF37', width=2)

# Right scale  
draw.ellipse([50, 40, 80, 70], outline='#D4AF37', width=2)
draw.line([65, 35, 65, 55], fill='#D4AF37', width=2)

# Center bar
draw.line([35, 45, 65, 45], fill='#D4AF37', width=3)

# Save the image
image.save('logo.png')
print('Logo created successfully')
"
