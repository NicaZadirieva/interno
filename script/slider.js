function initializeSwiper(swiperClass) {
  var swiper = new Swiper(swiperClass, {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
