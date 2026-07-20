export function initTestimonials() {
  // Select the container for the testimonial carousel
  const container = document.querySelector('.testimonial-carousel');
  if (!container) return;

  // Array containing testimonial data
  const testimonials = [
    {
      name: "[Placeholder Client]",
      role: "CEO, E-Commerce Brand",
      text: "<!-- PASTE REAL TESTIMONIAL HERE --> Wasi is an exceptional frontend developer. He transformed our Shopify store into a lightning-fast experience."
    },
    {
      name: "[Placeholder Client 2]",
      role: "Agency Director",
      text: "<!-- PASTE REAL TESTIMONIAL HERE --> A highly skilled professional. Delivered the WordPress custom theme ahead of schedule with perfect Core Web Vitals."
    }
  ];

  // Track the currently displayed testimonial
  let currentIdx = 0;

  // Function to update the DOM with the current testimonial content
  function renderTestimonial() {
    const t = testimonials[currentIdx];
    container.innerHTML = `
      <p style="font-size: 1.25rem; font-style: italic; margin-bottom: 1.5rem;">"${t.text}"</p>
      <h4 style="color: var(--color-primary);">${t.name}</h4>
      <span style="font-size: 0.85rem; color: var(--text-secondary);">${t.role}</span>
    `;
  }

  // Initial render
  renderTestimonial();

  // Simple auto-advance mechanism for the carousel (every 5 seconds)
  setInterval(() => {
    // Increment index and loop back to the start if necessary
    currentIdx = (currentIdx + 1) % testimonials.length;

    // Fade out
    container.style.opacity = '0';

    // Wait for the fade-out transition, update content, then fade back in
    setTimeout(() => {
      renderTestimonial();
      container.style.opacity = '1';
    }, 300); // 300ms matches typical CSS transition durations
  }, 5000);
}
