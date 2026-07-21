# Wasi Ullah | Front-End Developer Portfolio v2

This is the fully vanilla, production-grade personal portfolio website for Wasi Ullah.

## Architecture

- **Stack:** Plain HTML5, CSS3, Vanilla JavaScript (ES6+).
- **No Build Tools:** Zero backend, zero bundler, zero `npm install` step for deployment. Purely static architecture.
- **Hosting:** Deployable as-is to GitHub Pages or any static host.
- **Third-party libraries used:**
  - [Three.js](https://threejs.org/) for the hero section particle network background.
  - [Vanilla-Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) for 3D card tilt-on-hover micro-interactions.
  - [Ionicons](https://ionic.io/ionicons) for lightweight SVG iconography.
  - Hand-rolled `IntersectionObserver` reveal engine.
  - Zero animation dependencies — all section background motion (SVG blob
    morphs, bouncing balls, rising bubbles, the rotating light frame) is
    hand-rolled CSS/SMIL, shipping 0kb of extra JavaScript.

## Code Structure

- `/index.html`: Main entry point and the sole view for the portfolio layout.
- `/css/`: Core stylesheets.
  - `variables.css` — design tokens (colors, typography, motion). Linked first.
  - `base.css` — resets, global typography, preloader styling. Linked second.
  - `sections.css` — layout and component styling for every section, plus the
    Hero/About background motion (Three.js particle canvas + the code-glyph
    float). Linked third.
  - `animations.css` — **all other** section background decoration (Services
    blobs, Portfolio balls, Experience bubbles, Social light frame, Contact/
    footer glow). Purely decorative, zero effect on layout, loaded via a
    `preload` + `onload` swap so it never blocks first paint.
  - `main.css` is deprecated — it previously `@import`-chained the four files
    above, which forces the browser to fetch+parse it before it can even
    discover the imports exist (an extra network round trip on the critical
    path). `index.html` now links each file directly instead. Safe to delete
    `main.css` from the repo.
- `/js/`: Modular vanilla JavaScript codebase. Each UI feature (portfolio,
  preloader, services carousel, testimonials, etc.) is isolated into its own
  ES module, initialized inside `main.js`. No JS was added for any of the new
  background animation work — it's all CSS/SVG.
- `/assets/`: Image resources and project thumbnails.

**Files safe to delete** (dead weight, not referenced by `index.html`):
`fonts/fonts.css`, the top-level `VanillaTilt.js`, and `js/vanilla-tilt.js`
(Vanilla-Tilt is loaded from a CDN instead) — all leftovers from earlier
exploration passes that are no longer wired up anywhere.

## Performance Notes

- The Google Fonts `@import` was trimmed from ~19 font families down to the
  4 actually used anywhere in the codebase (Lilita One, Sniglet, Pacifico,
  JetBrains Mono). This was the single largest performance regression in the
  project — every unused family was a render-blocking request for zero
  visual payoff.
- `<link rel="preconnect">` hints are set for every third-party origin the
  page talks to (Google Fonts, unpkg, cdnjs, Tawk.to).
- Tawk.to's live chat script is deferred until the site's own
  `preloaderComplete` event fires, so it doesn't compete for bandwidth with
  fonts/CSS/Three.js during the critical rendering window.
- All decorative section animations live in one deferred stylesheet
  (`animations.css`) and are disabled entirely below 992px viewport width —
  the same breakpoint the Three.js hero background already uses to skip
  itself on mobile.
- Every animation respects `prefers-reduced-motion`.

## How to Run & Deploy

1. Clone or download this repository.
2. Open `index.html` in your browser directly, or serve it using any local static file server (e.g., `npx serve`, VS Code Live Server).
3. **To Deploy to GitHub Pages:** Push this code to the `main` branch of a GitHub repository, go to Settings > Pages, and select the `main` branch as the source. It will deploy automatically.

## Note on Anti-Copy Features

The site includes a deterrence layer against copying and dragging (`user-select: none`, intercepted `dragstart`, intercepted `contextmenu`). This is purely a UI friction layer intended for deterrence and does not constitute real DRM (client-side JS can always be bypassed by advanced users via dev tools). Essential fields — email address, phone number, and WhatsApp number in the Contact section — are explicitly excluded from this via the `.selectable` class, so visitors can select and copy them normally.
