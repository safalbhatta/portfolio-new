#!/bin/bash

# Update Project 1 - Skin Disease Classification
sed -i '' 's|<a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>|<a href="https://skin-disease-classification-using-cnn-u5kx.onrender.com" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i></a>|' index.html

# Restore project 2, 3, 4 links with correct URLs
# This is a complex replacement, so we'll do it step by step

# First, let's use Python for more precise replacements
python3 << 'PYTHON'
import re

with open('index.html', 'r') as f:
    content = f.read()

# Project 1 - Skin Disease Classification (first occurrence)
content = content.replace(
    '''<div class="project-card">
          <div class="project-image">
            <img src="assets/images/project1.jpg"''',
    '''<div class="project-card">
          <div class="project-image">
            <img src="assets/images/project1.jpg"'''
)

# Replace the first project's external link
content = re.sub(
    r'(<!-- Project 1.*?<a href=")#(" class="project-link"><i class="fas fa-external-link-alt">)',
    r'\1https://skin-disease-classification-using-cnn-u5kx.onrender.com" target="_blank\2',
    content,
    count=1,
    flags=re.DOTALL
)

# Replace the second project
content = re.sub(
    r'(alt="Facial Recognition".*?<a href=")#(" class="project-link"><i class="fas fa-external-link-alt">)',
    r'\1https://prompt-analyzer20.onrender.com" target="_blank\2',
    content,
    count=1,
    flags=re.DOTALL
)

# Replace the third project
content = re.sub(
    r'(alt="E-commerce Platform".*?<a href=")#(" class="project-link"><i class="fas fa-external-link-alt">)',
    r'\1https://gif-fusion.onrender.com" target="_blank\2',
    content,
    count=1,
    flags=re.DOTALL
)

# Replace the fourth project
content = re.sub(
    r'(alt="Weather App".*?<a href=")#(" class="project-link"><i class="fas fa-external-link-alt">)',
    r'\1https://imagetoolify.netlify.app" target="_blank\2',
    content,
    count=1,
    flags=re.DOTALL
)

with open('index.html', 'w') as f:
    f.write(content)

print("✅ Projects updated successfully!")
PYTHON

