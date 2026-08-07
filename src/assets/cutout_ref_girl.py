import sys
from rembg import remove
from PIL import Image

input_path = r"C:\Users\Suyog Darokar\.gemini\antigravity-ide\brain\09984eee-fc74-451c-8af4-b947c7bd4fe7\media__1785940794646.jpg"
output_path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl_cutout.png"

print("Loading reference image...")
inp = Image.open(input_path)
print("Removing background to extract exact girl cutout...")
out = remove(inp)
print("Saving extracted girl cutout...")
out.save(output_path, "PNG")
print("Done extracting exact girl cutout!")
