import numpy as np
from PIL import Image
from rembg import remove

input_path = r"C:\Users\Suyog Darokar\.gemini\antigravity-ide\brain\09984eee-fc74-451c-8af4-b947c7bd4fe7\media__1785940794646.jpg"
output_path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl_cutout.png"

# Load original image (1024 x 695)
img = Image.open(input_path).convert("RGBA")
w, h = img.size

# Crop region from x=490 to end (where laptop and girl are)
crop_x = 490
cropped_img = img.crop((crop_x, 0, w, h))

# Remove background with rembg
out_cropped = remove(cropped_img)

# Convert to numpy arrays
rgb_np = np.array(cropped_img)
out_np = np.array(out_cropped)

# Laptop Lid area relative to crop_x (crop_x = 490):
# In original image, laptop lid is roughly x in [505, 705], y in [350, 520]
# So in cropped image, x_crop in [15, 215], y in [350, 520]
for y in range(340, 530):
    for x in range(10, 220):
        # Calculate slope/boundary of laptop lid top edge
        # Laptop top edge goes from (x_crop=15, y=355) down to (x_crop=195, y=500)
        # Check if pixel belongs to laptop lid in RGB
        r, g, b, _ = rgb_np[y, x]
        # Laptop lid pixels in reference image are light silver/grey: R > 150, G > 150, B > 160
        # and not pure white (R < 250, G < 250, B < 250)
        if 130 <= r <= 245 and 130 <= g <= 245 and 135 <= b <= 245:
            # Set alpha to 255 (opaque) and restore original RGB color
            out_np[y, x] = [r, g, b, 255]

# Convert back to PIL Image
result = Image.fromarray(out_np)

# Tight crop around result
bbox = result.getbbox()
if bbox:
    result = result.crop(bbox)

result.save(output_path, "PNG")
print("Saved clean cutout with visible silver laptop! Size:", result.size)
