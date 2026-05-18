from PIL import Image, ImageDraw

def create_circular_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Create mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
    
    # Apply mask
    result = Image.new("RGBA", img.size)
    result.paste(img, (0, 0), mask=mask)
    
    # Save
    result.save(output_path, "PNG")

create_circular_image(r"c:\xampp\htdocs\sikad-website\public\sikad-logo.png", r"c:\xampp\htdocs\sikad-website\public\sikad-logo-circle.png")
