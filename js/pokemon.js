var pokemonSwiper = new Swiper(".pokemon-container", {
  autoplay: false, //自动滑动
  loop: true, // 循环模式选项
  parallax: true,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper(".pokemon-container");
var pokemonSwiper = document.querySelector(".pokemon-container").swiper;
