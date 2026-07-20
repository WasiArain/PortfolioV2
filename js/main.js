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
import { initScrollToTop } from './utils/Scroll-to-Top.js';

// Initialize core functionalities when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize immediate visual components and security
  initPreloader();
  initTheme();
  initNav();
  initAntiCopy();
  initScrollToTop();

  // Listen for the custom event dispatched when the preloader finishes
  // This ensures heavy animations don't stutter during initial load
  document.addEventListener('preloaderComplete', () => {
    // Initialize the typewriter effect for the hero section
    const twEl = document.querySelector('.typewriter');
    if (twEl) {
      new TypeLoop(twEl, [
        "Building Fast, Beautiful\nWeb Experiences",
        "Crafting High-Converting\nE-Commerce Stores",
        "Developing Scalable\nCMS Architecture"
      ]);
    }

    // Defer the initialization of heavier components to ensure smooth thread execution
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        initHeroBg();
        initReveal();
        initServicesCarousel();
        initPortfolio();
        initTestimonials();
        initVanillaTilt();
      });
    } else {
      // Fallback for browsers that do not support requestIdleCallback
      setTimeout(() => {
        initHeroBg();
        initReveal();
        initServicesCarousel();
        initPortfolio();
        initTestimonials();
        initVanillaTilt();
      }, 100);
    }
  });
});

// Function to initialize the Vanilla-Tilt hover effects on specific elements
function initVanillaTilt() {
  // Check if the library is loaded and the user hasn't requested reduced motion
  if (window.VanillaTilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15, // Maximum tilt rotation
      speed: 400, // Speed of the enter/exit transition
      glare: true, // Add a glare effect
      "max-glare": 0.2, // Maximum glare opacity
      gyroscope: false // Disable device orientation tilt to avoid weird behavior on mobile
    });
  }
}
