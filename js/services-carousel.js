export function initServicesCarousel() {
  // Select DOM elements for the carousel
  const wrapper = document.querySelector('.services-carousel-wrapper');
  const track = document.querySelector('.services-track');
  const cards = Array.from(document.querySelectorAll('.service-card'));
  const bulletContainer = document.getElementById('services-bullets');

  // Guard clause if essential elements are missing
  if (!track || !bulletContainer || cards.length === 0) return;

  // Track the current active card and hover state for auto-play logic
  let currentIndex = 0;
  let isHovered = false;

  // Generate navigation bullets dynamically based on the number of cards
  cards.forEach((_, i) => {
    const b = document.createElement('div');
    b.classList.add('carousel-bullet');
    // Set the first bullet as active initially
    if (i === 0) b.classList.add('active');

    // Add click listener to navigate to the specific slide
    b.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    bulletContainer.appendChild(b);
  });

  // Store the newly created bullets in an array for easy updates
  const bullets = Array.from(bulletContainer.querySelectorAll('.carousel-bullet'));

  // Function to update CSS classes on cards to trigger CSS transitions
  function updateCarousel() {
    cards.forEach((card, i) => {
      // Reset all cards to default state
      card.className = 'service-card glass';

      // Calculate relative position of the card to the current index, handling wrap-around
      const diff = (i - currentIndex + cards.length) % cards.length;

      // Assign classes based on relative position to create the 3D depth effect
      if (diff === 0) {
        card.classList.add('active'); // Center card
      } else if (diff === 1) {
        card.classList.add('next');   // Card to the right
      } else if (diff === cards.length - 1) {
        card.classList.add('prev');   // Card to the left
      } else {
        card.classList.add('hidden'); // Cards in the back stack
      }
    });

    // Update active state on navigation bullets
    bullets.forEach((b, i) => {
      b.classList.toggle('active', i === currentIndex);
    });
  }

  // Function to advance the carousel to the next slide
  function next() {
    // Pause auto-play if the user is interacting with the carousel
    if (isHovered) return;

    // Increment index and wrap around to 0 at the end
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }

  // Event listeners to pause auto-play on mouse hover
  wrapper.addEventListener('mouseenter', () => isHovered = true);
  wrapper.addEventListener('mouseleave', () => isHovered = false);

  // Event listeners to pause auto-play on touch (mobile devices)
  wrapper.addEventListener('touchstart', () => isHovered = true, { passive: true });
  wrapper.addEventListener('touchend', () => isHovered = false, { passive: true });

  // Initialize the carousel layout
  updateCarousel();

  // Start auto-play interval (3 seconds per slide)
  setInterval(next, 3000);
}
