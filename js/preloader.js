export function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressText = document.getElementById('progress-text');
  if (!preloader) return;

  // Ensure the page doesn't scroll while preloading
  document.body.style.overflow = 'hidden';

  // Progress counter 0 to 100 over 5 seconds
  let count = 0;
  const target = 100;
  const duration = 5000;
  const intervalTime = duration / target; // ~50ms per tick

  if (progressText) {
    const counterInterval = setInterval(() => {
      count++;
      progressText.innerText = count + '%';
      if (count >= target) {
        clearInterval(counterInterval);
      }
    }, intervalTime);
  }

  // 5s hard-gated preloader per spec
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';

    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.style.overflow = '';

      // Trigger entrance animations after preloader
      document.dispatchEvent(new CustomEvent('preloaderComplete'));
    }, 500); // Wait for transition
  }, 5000);
}
