#!/usr/bin/env python3
"""
Script to download placeholder images for portfolio
Run this with: python3 download-images.py
"""

import os
import urllib.request
from pathlib import Path

def download_image(url, filename):
    """Download an image from URL to filename"""
    try:
        print(f"Downloading {filename}...")
        urllib.request.urlretrieve(url, filename)
        print(f"✓ {filename} downloaded")
        return True
    except Exception as e:
        print(f"✗ Error downloading {filename}: {e}")
        return False

def main():
    print("📸 Downloading placeholder images for your portfolio...\n")
    
    # Create images directory
    images_dir = Path("assets/images")
    images_dir.mkdir(parents=True, exist_ok=True)
    
    # Define images to download
    images = {
        "profile.jpg": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        "project1.jpg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        "project2.jpg": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        "project3.jpg": "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        "project4.jpg": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        "avatar1.jpg": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        "avatar2.jpg": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        "avatar3.jpg": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    }
    
    # Download all images
    success_count = 0
    for filename, url in images.items():
        filepath = images_dir / filename
        if download_image(url, filepath):
            success_count += 1
    
    print(f"\n✅ {success_count}/{len(images)} images downloaded successfully!")
    print(f"📁 Images saved to: {images_dir.absolute()}")
    print("\nNote: These are placeholder images from Unsplash.")
    print("Replace them with your own images when ready!")

if __name__ == "__main__":
    main()
