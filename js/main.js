import { initPreloader } from './preloader.js';
import { initTheme } from './theme-toggle.js';
import { initNav } from './nav.js';
import { TypeLoop } from './typewriter.js';
import { initReveal } from './reveal.js';
import { initAntiCopy } from './utils/anti-copy.js';
import { initServicesCarousel } from './services-carousel.js';
import { initPortfolio } from './portfolio.js';
import { initTestimonials } from './testimonials.js';
import { initHeroBg } from './hero-bg.js';
// import { initScrollToTop } from './utils/Scroll-to-Top.js';

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initNav();
  initAntiCopy();
  // initScrollToTop();

  // Wait for preloader to finish before starting heavy animations
  document.addEventListener('preloaderComplete', () => {
    // Typewriter
    const twEl = document.querySelector('.typewriter');
    if (twEl) {
      new TypeLoop(twEl, [
        "Building Fast, Beautiful\nWeb Experiences",
        "Crafting High-Converting\nE-Commerce Stores",
        "Developing Scalable\nCMS Architecture"
      ]);
    }

    // Defer heavy stuff
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        initHeroBg();
        initReveal();
        initServicesCarousel();
        initPortfolio();
        initTestimonials();
        initVanillaTilt();
        // initScrollToTop();
      });
    } else {
      setTimeout(() => {
        initHeroBg();
        initReveal();
        initServicesCarousel();
        initPortfolio();
        initTestimonials();
        initVanillaTilt();
        // initScrollToTop();
      }, 100);
    }
  });
});

function initVanillaTilt() {
  if (window.VanillaTilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false
    });
  }
}
