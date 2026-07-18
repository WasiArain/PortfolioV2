export function initNav() {
  const header = document.getElementById('navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobilePanel = document.querySelector('.mobile-nav-panel');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .mobile-nav-panel a');

  // Sticky nav background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('glass');
    } else {
      header.classList.remove('glass');
    }
  });

  // Mobile Menu Toggle
  if (mobileBtn && mobilePanel) {
    mobileBtn.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
      document.body.style.overflow = mobilePanel.classList.contains('open') ? 'hidden' : '';

      // Toggle icon
      const icon = mobileBtn.querySelector('ion-icon');
      if (icon) {
        icon.setAttribute('name', mobilePanel.classList.contains('open') ? 'close-outline' : 'menu-outline');
      }
    });
  }

  // Active link highlighting via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          // Close mobile panel if open
          if (mobilePanel && mobilePanel.classList.contains('open')) {
            mobilePanel.classList.remove('open');
            document.body.style.overflow = '';
            const icon = mobileBtn.querySelector('ion-icon');
            if (icon) icon.setAttribute('name', 'menu-outline');
          }

          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
