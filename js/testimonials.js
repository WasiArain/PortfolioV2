export function initTestimonials() {
  const container = document.querySelector('.testimonial-carousel');
  if (!container) return;

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

  let currentIdx = 0;

  function renderTestimonial() {
    const t = testimonials[currentIdx];
    container.innerHTML = `
      <p style="font-size: 1.25rem; font-style: italic; margin-bottom: 1.5rem;">"${t.text}"</p>
      <h4 style="color: var(--color-primary);">${t.name}</h4>
      <span style="font-size: 0.85rem; color: var(--text-secondary);">${t.role}</span>
    `;
  }

  renderTestimonial();

  // Simple auto-advance
  setInterval(() => {
    currentIdx = (currentIdx + 1) % testimonials.length;
    container.style.opacity = '0';
    setTimeout(() => {
      renderTestimonial();
      container.style.opacity = '1';
    }, 300);
  }, 5000);
}
