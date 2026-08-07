from PIL import Image

path = r"C:\Users\Suyog Darokar\.gemini\antigravity-ide\brain\09984eee-fc74-451c-8af4-b947c7bd4fe7\media__1785940794646.jpg"
out_path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl_cutout.png"

img = Image.open(path)
w, h = img.size

# Crop right portion where girl is located in the reference image
# Reference image is 1024x695. Girl is on x from ~520 to 1024.
girl_crop = img.crop((510, 0, w, h))

from rembg import remove
print("Removing background from cropped girl section...")
out = remove(girl_crop)
out.save(out_path, "PNG")
print("Done! Saved clean girl cutout:", out.size)
