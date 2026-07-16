// Theme toggle logic
export function initTheme() {
  const toggleBtns = document.querySelectorAll('.theme-toggle');
  
  // Check local storage or system preference
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateIcon(currentTheme);

  const switchTheme = () => {
    currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateIcon(currentTheme);
  };

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', switchTheme);
  });

  function updateIcon(theme) {
    const iconName = theme === 'dark' ? 'sunny-outline' : 'moon-outline';
    const textStr = theme === 'dark' ? 'Dark' : 'Light';
    toggleBtns.forEach(btn => {
      const iconContainer = btn.querySelector('.theme-toggle-icon');
      const textContainer = btn.querySelector('.theme-toggle-text');
      if (iconContainer) iconContainer.innerHTML = `<ion-icon name="${iconName}"></ion-icon>`;
      if (textContainer) textContainer.innerText = textStr;
    });
  }
}
