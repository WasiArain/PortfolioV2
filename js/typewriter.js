export class TypeLoop {
  constructor(element, strings, config = {}) {
    this.element = element;
    this.strings = strings;
    this.loopNum = 0;
    this.txt = '';
    this.isDeleting = false;
    this.typeSpeed = config.typeSpeed || 100;
    this.deleteSpeed = config.deleteSpeed || 50;
    this.delay = config.delay || 2000;

    // Pause if reduced motion
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (this.prefersReducedMotion) {
      this.element.innerHTML = `<span class="wrap">${this.strings[0]}</span>`;
    } else {
      this.tick();
    }
  }

  tick() {
    const i = this.loopNum % this.strings.length;
    const fullTxt = this.strings[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = `<span class="wrap">${this.txt}<span class="cursor">|</span></span>`;

    let delta = this.typeSpeed - Math.random() * 50;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.delay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}
