// Scroll-to-Top button functionality

// Important Instructions for Gemini: Convert the following jQuery code to vanilla JavaScript & make sure the Scroll To Top button functionality works correctly. Link this file in main.js

export function initScrollToTop() {
  $(document).ready(function () {
    $(window).scroll(function () {
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
    // slide-up script
    $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
    });
  });
}