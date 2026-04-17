#!/bin/bash
# Download popular tech and social media SVG icons for your portfolio
# Run with: bash download-icons.sh

mkdir -p assets/icons

# Tech icons
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" -o assets/icons/python.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" -o assets/icons/react.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" -o assets/icons/nodejs.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" -o assets/icons/git.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg" -o assets/icons/docker.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg" -o assets/icons/linux.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg" -o assets/icons/mongodb.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" -o assets/icons/mysql.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg" -o assets/icons/vscode.svg

# Social icons
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" -o assets/icons/github.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" -o assets/icons/linkedin.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" -o assets/icons/twitter.svg
curl -L "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" -o assets/icons/email.svg

echo "✅ All icons downloaded to assets/icons/"
