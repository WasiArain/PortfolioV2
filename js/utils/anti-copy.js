// Module to protect digital assets from basic theft methods
export function initAntiCopy() {
  // Disable drag-and-drop actions on all images
  // This prevents users from dragging an image to their desktop to save it
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Disable the right-click context menu specifically on images
  // This prevents the "Save image as..." option
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });
}
