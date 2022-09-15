import Swiper from '../vendor/swiper.js';

// Pets slider
let sliderBestConfectioner = new Swiper(".pets__slider", {
  slidesPerView: 'auto',
  spaceBetween: 2,
  observer: true,
  freeMode: true,
  loop: true,
  navigation: {
      nextEl: ".best__slider-btn--next",
      prevEl: ".best__slider-btn--prev",
      clickable: true,
  },
  // breakpoints: {
  //   320: {
  //       slidesPerView: 'auto',
  //       freeMode: true,
  //       spaceBetween: 10,
  //     },
  //   1440: {
  //     slidesPerView: 3,
  //     spaceBetween: 23.5,
  //   }
  // }
});







