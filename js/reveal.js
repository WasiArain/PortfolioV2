export function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('active');
    });
    return;
  }

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // Reveal once per element
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}
