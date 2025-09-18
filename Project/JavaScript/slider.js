const autoplayDelayMs = 2000; // 2 sekonda

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: autoplayDelayMs,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  centeredSlides: true,
  slidesPerView: 1,
});
