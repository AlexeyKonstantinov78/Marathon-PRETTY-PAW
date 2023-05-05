import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';

import './index.scss';
import { slidersInit } from './modules/sliders';

//use modules

slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination'
  }
});

slidersInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 26
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;