import numpy as np
from PIL import Image, ImageDraw
from rembg import remove

input_path = r"C:\Users\Suyog Darokar\.gemini\antigravity-ide\brain\09984eee-fc74-451c-8af4-b947c7bd4fe7\media__1785940794646.jpg"
output_path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl_cutout.png"

# Load image
img = Image.open(input_path).convert("RGBA")
w, h = img.size

# Crop girl region (x: 500 to w)
crop_left = 500
cropped_img = img.crop((crop_left, 0, w, h))

# Remove background
out_rembg = remove(cropped_img)

# Create a polygon mask for the laptop lid relative to crop_left=500
# Laptop lid polygon in original image coordinates:
# Top-Left: (518, 355), Top-Right: (695, 365), Bottom-Right: (725, 512), Bottom-Left: (550, 496)
polygon_orig = [
    (518, 355),
    (695, 365),
    (725, 512),
    (550, 496)
]
polygon_crop = [(x - crop_left, y) for (x, y) in polygon_orig]

# Draw laptop mask
laptop_mask = Image.new("L", cropped_img.size, 0)
draw = ImageDraw.Draw(laptop_mask)
draw.polygon(polygon_crop, fill=255)

# Blend: where laptop_mask is 255, use original cropped_img pixels with alpha 255
# Otherwise use out_rembg
out_final = Image.composite(cropped_img, out_rembg, laptop_mask)

# Crop tight bounding box
bbox = out_final.getbbox()
if bbox:
    out_final = out_final.crop(bbox)

out_final.save(output_path, "PNG")
print("Successfully generated exact girl cutout with 100% visible silver laptop! Size:", out_final.size)
