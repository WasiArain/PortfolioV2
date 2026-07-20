// A class to handle the looping typewriter text effect
export class TypeLoop {
  constructor(element, strings, config = {}) {
    this.element = element; // The DOM element where text will be rendered
    this.strings = strings; // Array of strings to cycle through
    this.loopNum = 0; // Tracks which string is currently active
    this.txt = ''; // Current characters displayed
    this.isDeleting = false; // State flag: typing or deleting
    this.typeSpeed = config.typeSpeed || 100; // Base speed for typing (ms)
    this.deleteSpeed = config.deleteSpeed || 50; // Base speed for deleting (ms)
    this.delay = config.delay || 2000; // Pause duration when a full string is completed (ms)

    // Accessibility feature: Pause animations if the user prefers reduced motion
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.prefersReducedMotion) {
      // Just render the first string statically and skip the loop
      this.element.innerHTML = `<span class="wrap">${this.strings[0]}</span>`;
    } else {
      // Start the typing loop
      this.tick();
    }
  }

  // The recursive function that handles typing and deleting logic
  tick() {
    // Determine the current string based on loopNum
    const i = this.loopNum % this.strings.length;
    const fullTxt = this.strings[i];

    // Update the current text string based on state
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1); // Remove a character
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1); // Add a character
    }

    // Inject the text along with a blinking cursor into the DOM
    this.element.innerHTML = `<span class="wrap">${this.txt}<span class="cursor">|</span></span>`;

    // Introduce slight randomness to typing speed for a more human feel
    let delta = this.typeSpeed - Math.random() * 50;

    // Deleting is generally faster than typing
    if (this.isDeleting) { delta /= 2; }

    // State transitions
    if (!this.isDeleting && this.txt === fullTxt) {
      // Finished typing the current string; pause before deleting
      delta = this.delay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      // Finished deleting; move to the next string and pause briefly before typing
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    // Schedule the next tick
    setTimeout(() => this.tick(), delta);
  }
}
