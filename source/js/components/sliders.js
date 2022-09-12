import Swiper from '../vendor/swiper.js';

// Products slider
for (const sliderProducts of document.querySelectorAll('.products__slider')) {
  if (sliderProducts) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(max-width:576px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(sliderProducts, {
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          navigation: {
              nextEl: ".products__slider-btn--next",
              prevEl: ".products__slider-btn--prev",
              clickable: true,
          },
          breakpoints: {
            576: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 20,
            }
          }
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}


// Confectioner slider
let sliderBestConfectioner = new Swiper(".best__slider", {
  slidesPerView: 3,
  spaceBetween: 23.5,
  loop: true,
  navigation: {
      nextEl: ".best__slider-btn--next",
      prevEl: ".best__slider-btn--prev",
      clickable: true,
  },
  breakpoints: {
    320: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10,
      },
    1440: {
      slidesPerView: 3,
      spaceBetween: 23.5,
    }
  }
});


// Default slider
for (const container of  document.querySelectorAll('.container') ) {
  let mainSlider = new Swiper(container.querySelector('.slider'), {
    slidesPerView: 5,
    spaceBetween: 18,
    loop: true,
    adaptiveHeight: true,
    navigation: {
      nextEl: container.querySelector(".slider__btn--next"),
      prevEl: container.querySelector(".slider__btn--prev"),
      clickable: true,
  },
    breakpoints: {
      320: {
          slidesPerView: 'auto',
          freeMode: true,
          spaceBetween: 10,
        },
      1440: {
        slidesPerView: 5,
        spaceBetween: 18,
      }
    }
  });
}




