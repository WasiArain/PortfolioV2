export function initPreloader() {
  // Select preloader DOM elements
  const preloader = document.getElementById('preloader');
  const progressText = document.getElementById('progress-text');
  
  // Guard clause if preloader is not present
  if (!preloader) return;

  // Ensure the page doesn't scroll while the preloader is active
  document.body.style.overflow = 'hidden';

  // Configuration for the loading progress counter (0 to 100%)
  let count = 0;
  const target = 100; // Target percentage
  const duration = 5000; // Total duration in milliseconds (5 seconds)
  const intervalTime = duration / target; // Interval per percentage tick (~50ms)

  // Start the loading text counter if the element exists
  if (progressText) {
    const counterInterval = setInterval(() => {
      count++;
      progressText.innerText = count + '%'; // Update text
      
      // Stop interval once 100% is reached
      if (count >= target) {
        clearInterval(counterInterval);
      }
    }, intervalTime);
  }

  // 5-second hard-gated preloader removal per design specification
  setTimeout(() => {
    // Fade out the preloader
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';

    // Once fade out is complete, remove it from flow and restore scrolling
    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.style.overflow = '';

      // Dispatch a custom event to notify other scripts that the preloader is gone
      // This is crucial for triggering entrance animations (like Typewriter) at the right time
      document.dispatchEvent(new CustomEvent('preloaderComplete'));
    }, 500); // 500ms delay matches CSS transition duration
  }, duration);
}
