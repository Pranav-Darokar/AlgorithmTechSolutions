import sys
from rembg import remove
from PIL import Image

input_path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl.png"
output_path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl_cutout.png"

print("Loading image...")
inp = Image.open(input_path)
print("Removing background...")
out = remove(inp)
print("Saving image...")
out.save(output_path, "PNG")
print("Done background removal!")
