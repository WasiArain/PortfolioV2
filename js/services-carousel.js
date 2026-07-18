export function initServicesCarousel() {
  const wrapper = document.querySelector('.services-carousel-wrapper');
  const track = document.querySelector('.services-track');
  const cards = Array.from(document.querySelectorAll('.service-card'));
  const bulletContainer = document.getElementById('services-bullets');

  if (!track || !bulletContainer || cards.length === 0) return;

  let currentIndex = 0;
  let isHovered = false;

  // Create bullets
  cards.forEach((_, i) => {
    const b = document.createElement('div');
    b.classList.add('carousel-bullet');
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    bulletContainer.appendChild(b);
  });

  const bullets = Array.from(bulletContainer.querySelectorAll('.carousel-bullet'));

  function updateCarousel() {
    cards.forEach((card, i) => {
      // Reset classes
      card.className = 'service-card glass';

      const diff = (i - currentIndex + cards.length) % cards.length;

      if (diff === 0) {
        card.classList.add('active');
      } else if (diff === 1) {
        card.classList.add('next');
      } else if (diff === cards.length - 1) {
        card.classList.add('prev');
      } else {
        card.classList.add('hidden');
      }
    });

    bullets.forEach((b, i) => {
      b.classList.toggle('active', i === currentIndex);
    });
  }

  function next() {
    if (isHovered) return;
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }

  wrapper.addEventListener('mouseenter', () => isHovered = true);
  wrapper.addEventListener('mouseleave', () => isHovered = false);

  // Also pause if user touches (mobile)
  wrapper.addEventListener('touchstart', () => isHovered = true, { passive: true });
  wrapper.addEventListener('touchend', () => isHovered = false, { passive: true });

  updateCarousel();
  setInterval(next, 3000);
}
