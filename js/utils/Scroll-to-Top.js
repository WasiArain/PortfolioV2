// Scroll-to-Top button functionality module
export function initScrollToTop() {
  // Select the floating scroll-up button
  const scrollUpBtn = document.querySelector('.scroll-up-btn');
  
  // Guard clause if button is not present
  if (!scrollUpBtn) return;

  // Listen for scroll events to determine when to show/hide the button
  window.addEventListener('scroll', () => {
    // Show the button when scrolled past 500px, otherwise hide it
    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // Handle the click action on the scroll-up button
  scrollUpBtn.addEventListener('click', () => {
    // Remove global smooth scroll temporarily if necessary, but here we just force auto
    document.documentElement.style.scrollBehavior = "auto";
    
    // Instantly jump to the top of the page
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}