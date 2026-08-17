import sys
from rembg import remove
from PIL import Image
import io

input_path = 'public/students/Nitin Lahare.jpeg'
output_path = 'public/students/Nitin Lahare.jpeg'

try:
    with open(input_path, 'rb') as i:
        input_bytes = i.read()
        
    print("Removing background...")
    # Remove background
    output_bytes = remove(input_bytes)

    # Open as PIL Image
    img = Image.open(io.BytesIO(output_bytes))

    print("Adding white background...")
    # Create white background image
    white_bg = Image.new("RGBA", img.size, "WHITE")
    white_bg.paste(img, (0, 0), img)

    # Save as RGB (jpeg)
    white_bg.convert('RGB').save(output_path, "JPEG")
    print("Successfully removed background and added white background.")
except Exception as e:
    print(f"Error: {e}")
