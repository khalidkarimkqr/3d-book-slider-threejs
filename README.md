<div align="center">

# 📘 3D Interactive Book Portfolio 📘

### A stunning 3D book experience built with React Three Fiber

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![](https://img.shields.io/badge/Jotai-000000?style=for-the-badge)

[![wakatime](https://wakatime.com/badge/user/your-user-id/project/your-project-id.svg)](https://wakatime.com/badge/user/your-user-id/project/your-project-id)

</div>

![Demo GIF](./public/demo.gif)

## 🚀 Features

- **Realistic 3D Book** - Physics-based page turning animations
- **Interactive UI** - Intuitive navigation controls
- **Audio Feedback** - Page flip sound effects
- **Customizable Content** - Easy to add your own images
- **Responsive Design** - Works on various screen sizes
- **Performance Optimized** - Smooth animations even on modest hardware

## 🎮 How to Use

### Basic Navigation
- Click on page corners to turn pages naturally
- Use the bottom navigation panel to jump to specific pages
- The book will smoothly animate to your selected page

### Adding Your Content
1. Replace images in `public/textures/` with your own
2. Update the `pictures` array in `UI.jsx` with your filenames
3. Customize the book appearance by editing parameters in `Book.jsx`

## 🛠️ Configuration

In `Book.jsx`, you can adjust these parameters:

```javascript
// Physical properties
const PAGE_WIDTH = 1.28;          // Book width
const PAGE_HEIGHT = 1.71;         // Book height
const PAGE_DEPTH = 0.003;         // Page thickness

// Animation properties
const PAGE_SEGMENTS = 30;         // Page detail level
const easingFactor = 0.5;         // Page turning speed
const insideCurveStrength = 0.18; // Page bending intensity
