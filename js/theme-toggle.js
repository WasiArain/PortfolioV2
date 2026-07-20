// Module responsible for handling the light/dark theme toggle functionality
export function initTheme() {
  // Select all theme toggle buttons across the interface (header, mobile menu, etc.)
  const toggleBtns = document.querySelectorAll('.theme-toggle');

  // Determine initial theme:
  // 1. Check local storage for user's previous preference
  // 2. Fall back to system-level color scheme preference
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply the determined theme to the root HTML element
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Update UI icons and text to reflect the initial state
  updateIcon(currentTheme);

  // Core function to flip the current theme
  const switchTheme = () => {
    // Toggle the theme value
    currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    // Apply new theme to DOM
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Persist choice in local storage
    localStorage.setItem('theme', currentTheme);
    
    // Update the UI
    updateIcon(currentTheme);
  };

  // Attach the switch function to all toggle buttons
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', switchTheme);
  });

  // Helper function to update the icon and text of the toggle buttons based on current theme
  function updateIcon(theme) {
    // When in dark mode, the button should offer to switch to light mode (sunny icon)
    // When in light mode, the button should offer to switch to dark mode (moon icon)
    const iconName = theme === 'dark' ? 'sunny-outline' : 'moon-outline';
    const textStr = theme === 'dark' ? 'Light' : 'Dark'; // Note: Logic adjusted so button text reflects what clicking it will do
    
    toggleBtns.forEach(btn => {
      const iconContainer = btn.querySelector('.theme-toggle-icon');
      const textContainer = btn.querySelector('.theme-toggle-text');
      
      if (iconContainer) iconContainer.innerHTML = `<ion-icon name="${iconName}"></ion-icon>`;
      if (textContainer) textContainer.innerText = textStr;
    });
  }
}
