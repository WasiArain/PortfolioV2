export function initTestimonials() {
  // Select the container for the testimonial carousel
  const container = document.querySelector('.testimonial-carousel');
  if (!container) return;

  // Array containing testimonial data.
  // NOTE: these are illustrative placeholders (fictional names/roles loosely
  // tied to real projects in the portfolio grid) meant to show the carousel
  // working with realistic-looking content. Swap each `text` for a verified
  // client quote before this site takes real client traffic — publishing
  // invented names as if they were genuine endorsements is a real
  // reputational/legal risk (FTC-style deceptive-testimonial rules), not
  // just a copy nitpick.
  const testimonials = [
    {
      name: "Sarah Whitfield",
      role: "Founder, Masquerade Candle Shop",
      text: "Wasi is an exceptional front-end developer — he transformed our Shopify store into a fast, beautifully animated experience our customers actually enjoy shopping on."
    },
    {
      name: "David Okafor",
      role: "Director, Monki NYC",
      text: "A true professional. He delivered our custom WordPress theme ahead of schedule, with pixel-perfect design and near-perfect Core Web Vitals scores."
    },
    {
      name: "Amir Raza",
      role: "Owner, Jaries Pet Shop",
      text: "Our Wix store finally feels as good as our products look — Wasi made browsing and checkout effortless, and our customers noticed immediately."
    },
    {
      name: "Emily Carter",
      role: "Marketing Lead, Timeless Media",
      text: "The booking platform Wasi built for us is stunning and it actually works — smooth animations, zero friction, and a real lift in client inquiries."
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

  // Simple auto-advance mechanism for the carousel — each testimonial now
  // stays active for 3 seconds before the next one fades in.
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
  }, 3000);
}
