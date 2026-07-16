# Wasi Ullah | Front-End Developer Portfolio v2

This is the fully vanilla, production-grade personal portfolio website for Wasi Ullah.

## Architecture

- **Stack:** Plain HTML5, CSS3, Vanilla JavaScript (ES6+).
- **No Build Tools:** Zero backend, zero bundler, zero `npm install` step.
- **Hosting:** Deployable as-is to GitHub Pages or any static host.
- **Third-party libraries used:**
  - [Three.js](https://threejs.org/) for the hero section particle network background.
  - [Vanilla-Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) for 3D card tilt-on-hover micro-interactions.
  - [Ionicons](https://ionic.io/ionicons) for lightweight SVG iconography.
  - Hand-rolled `IntersectionObserver` reveal engine (replacing heavier ScrollReveal.js).

## How to Run & Deploy

1. Clone or download this repository.
2. Open `index.html` in your browser directly, or serve it using any local static file server (e.g., `npx serve`, VS Code Live Server).
3. **To Deploy to GitHub Pages:** Push this code to the `main` branch of a GitHub repository, go to Settings > Pages, and select the `main` branch as the source. It will deploy automatically.

## Note on Anti-Copy Features

The site includes a deterrence layer against copying and dragging (`user-select: none`, intercepted `dragstart`, intercepted `contextmenu`). This is purely a UI friction layer intended for deterrence and does not constitute real DRM (client-side JS can always be bypassed by advanced users via dev tools). Essential fields like email and phone numbers are explicitly excluded from this to ensure good usability (`user-select: text`).
