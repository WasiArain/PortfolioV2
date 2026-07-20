export function initNav() {
  // Select navigation and layout elements
  const header = document.getElementById('navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobilePanel = document.querySelector('.mobile-nav-panel');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .mobile-nav-panel a');

  // Apply a glassmorphism background effect to the header when scrolling past 50px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('glass');
    } else {
      header.classList.remove('glass');
    }
  });

  // Handle the mobile menu toggle button functionality
  if (mobileBtn && mobilePanel) {
    mobileBtn.addEventListener('click', () => {
      // Toggle the slide-out menu and prevent body scrolling when open
      mobilePanel.classList.toggle('open');
      document.body.style.overflow = mobilePanel.classList.contains('open') ? 'hidden' : '';

      // Switch the toggle icon between menu and close
      const icon = mobileBtn.querySelector('ion-icon');
      if (icon) {
        icon.setAttribute('name', mobilePanel.classList.contains('open') ? 'close-outline' : 'menu-outline');
      }
    });
  }

  // Active link highlighting via IntersectionObserver to track scroll position
  const observerOptions = {
    root: null,
    // Trigger when section is in the top portion of the viewport
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If a section is intersecting the viewport according to options
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          // Remove active state from all links
          link.classList.remove('active');
          // Add active state to the link corresponding to the current section
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  // Observe all sections that have IDs
  sections.forEach(sec => observer.observe(sec));

  // Implement smooth scrolling for all navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Only intercept in-page anchor links
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Close the mobile navigation panel if it's open
          if (mobilePanel && mobilePanel.classList.contains('open')) {
            mobilePanel.classList.remove('open');
            document.body.style.overflow = '';
            const icon = mobileBtn.querySelector('ion-icon');
            if (icon) icon.setAttribute('name', 'menu-outline');
          }

          // Calculate the exact scroll position, factoring in the sticky header height
          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          // Execute the smooth scroll
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
