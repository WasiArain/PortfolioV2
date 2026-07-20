export function initReveal() {
  // Select all elements marked for scroll reveal animation
  const elements = document.querySelectorAll('.reveal');

  // Accessibility Check: If the user prefers reduced motion, disable animations
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => {
      // Force elements to be visible immediately without transition
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('active');
    });
    return; // Exit function early
  }

  // Configuration for the Intersection Observer
  const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before the element enters the viewport from the bottom
  };

  // Create the Intersection Observer to handle reveal logic
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      // Check if the observed element is currently in the viewport
      if (entry.isIntersecting) {
        // Add the 'active' class to trigger CSS transitions
        entry.target.classList.add('active');
        
        // Unobserve the element so the animation only happens once per page load
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Attach the observer to all reveal elements
  elements.forEach(el => observer.observe(el));
}
