from PIL import Image

path = r"c:\Users\Suyog Darokar\Desktop\Algorith tech\src\assets\hero_girl_cutout.png"
img = Image.open(path)
print("Original size:", img.size)

# Get bounding box of non-transparent pixels
bbox = img.getbbox()
print("Bounding box:", bbox)

if bbox:
    # Add a tiny padding around bbox
    w, h = img.size
    pad = 10
    crop_box = (
        max(0, bbox[0] - pad),
        max(0, bbox[1] - pad),
        min(w, bbox[2] + pad),
        min(h, bbox[3] + pad)
    )
    cropped = img.crop(crop_box)
    cropped.save(path, "PNG")
    print("Saved tightly cropped cutout! New size:", cropped.size)
