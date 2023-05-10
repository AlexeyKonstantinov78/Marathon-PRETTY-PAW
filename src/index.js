import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';

import './index.scss';
import { menuControl } from './modules/menuControl';
import { slidersInit } from './modules/sliders';
import { videoBagraundInit } from './modules/videoBackgrauund';
//use modules

menuControl();

slidersInit('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
  },
});

slidersInit('.career__slider', {
  pagination: {
    el: '.career__slider-pagination',
  },
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      //pagination: false,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      //pagination: false,
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      // pagination: false,
    },
    1600: {
      slidesPerView: 'auto',
      spaceBetween: 40,
      // pagination: false,
    },
  },
});

videoBagraundInit();