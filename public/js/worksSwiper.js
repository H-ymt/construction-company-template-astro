import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let worksSwiper;

function initSwiper() {
  worksSwiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    loop: true,
    rewind: true,
    slidesPerView: 1,
    parallax: true,

    // スワイプ中にリンクをクリックしないようにする
    preventClicks: true,

    // pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

initSwiper();

document.addEventListener("astro:after-swap", () => {
  if (worksSwiper && worksSwiper.initialized) {
    worksSwiper.destroy(true, true);
  }
  initSwiper();
});
