import requests
import os

url = "https://drive.google.com/uc?export=download&id=1DSYKyXFxeMfnfiYtb5wX8wOXwrbssAc4"
output_path = r"d:\LANDING PAGES\montanafinal\Sabbath\frontend\public\assets\sabbath_intro.mp4"

print(f"Downloading video to {output_path}...")

try:
    response = requests.get(url, stream=True)
    response.raise_for_status()
    
    with open(output_path, "wb") as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
            
    print("Download complete!")
except Exception as e:
    print(f"Error downloading: {e}")
