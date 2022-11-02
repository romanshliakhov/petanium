import Swiper from '../vendor/swiper.js';

// Pets slider
let sliderBestConfectioner = new Swiper(".pets__slider", {
  slidesPerView: 'auto',
  spaceBetween: 2,
  observer: true,
  freeMode: true,
  loop: true,
  navigation: {
      nextEl: ".pets__slider-arrow--next",
      prevEl: ".pets__slider-arrow--prev",
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







