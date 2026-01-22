from PIL import Image
import os
import glob

def optimize_images(directory):
    print(f"Optimizing images in {directory}...")
    # Get all jpg/jpeg/png files
    files = glob.glob(os.path.join(directory, "*.[jJ][pP][gG]")) + \
            glob.glob(os.path.join(directory, "*.[pP][nN][gG]")) + \
            glob.glob(os.path.join(directory, "*.[jJ][pP][eE][gG]"))
    
    for file_path in files:
        try:
            # Check size
            size_mb = os.path.getsize(file_path) / (1024 * 1024)
            if size_mb < 0.5: # Skip if already small (< 500KB)
                continue
                
            img = Image.open(file_path)
            
            # Resize if too large (max dimension 1600px)
            max_size = 1600
            if img.width > max_size or img.height > max_size:
                img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            
            # Save smoothly
            img.save(file_path, optimize=True, quality=80)
            
            new_size_mb = os.path.getsize(file_path) / (1024 * 1024)
            print(f"Optimized {os.path.basename(file_path)}: {size_mb:.2f}MB -> {new_size_mb:.2f}MB")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    optimize_images(r"c:\Users\muvva\Downloads\NEW\Certificates")
