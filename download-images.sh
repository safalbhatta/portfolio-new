#!/bin/bash

# Script to download placeholder images for portfolio
# Run this with: bash download-images.sh

echo "📸 Downloading placeholder images for your portfolio..."

# Create images directory if it doesn't exist
mkdir -p assets/images

# Download profile image (professional male portrait)
echo "Downloading profile image..."
curl -L "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" \
  -o assets/images/profile.jpg

# Download project images
echo "Downloading project images..."

# Project 1 - AI/Medical related
curl -L "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" \
  -o assets/images/project1.jpg

# Project 2 - Face recognition/tech
curl -L "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop" \
  -o assets/images/project2.jpg

# Project 3 - E-commerce/shopping
curl -L "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop" \
  -o assets/images/project3.jpg

# Project 4 - Weather/technology
curl -L "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop" \
  -o assets/images/project4.jpg

# Download avatar images for testimonials
echo "Downloading testimonial avatars..."

curl -L "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" \
  -o assets/images/avatar1.jpg

curl -L "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" \
  -o assets/images/avatar2.jpg

curl -L "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" \
  -o assets/images/avatar3.jpg

echo "✅ All placeholder images downloaded successfully!"
echo "📁 Images saved to: assets/images/"
echo ""
echo "Note: These are placeholder images from Unsplash."
echo "Replace them with your own images when ready!"
