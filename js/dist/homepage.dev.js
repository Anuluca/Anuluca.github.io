"use strict";

//新版头图
$(".note_guide").mouseenter(function () {
  $(".zhegaia").stop().animate(
    {
      width: "0",
    },
    150
  );
  $(".zhegaib,.zhegaic,.zhegaid").stop().animate(
    {
      width: "100%",
    },
    150
  );
  $(".guidePic").css({
    backgroundImage:
      "url('../../images/other/YfLHgA.jpg')",
  });
});
$(".nintendo_guide").mouseenter(function () {
  $(".zhegaib").stop().animate(
    {
      width: "0",
    },
    150
  );
  $(".zhegaia,.zhegaic,.zhegaid").stop().animate(
    {
      width: "100%",
    },
    150
  );
  $(".guidePic").css({
    backgroundImage:
      "url('../../images/other/IMG_6139.JPG')",
  });
});
$(".jay_guide").mouseenter(function () {
  $(".zhegaic").stop().animate(
    {
      width: "0",
    },
    150
  );
  $(".zhegaia,.zhegaib,.zhegaid").stop().animate(
    {
      width: "100%",
    },
    150
  );
  $(".guidePic").css({
    backgroundImage:
      "url('../../images/other/2145F6682FBCE287815AF6DC59D0C5A5.png')",
  });
});
$(".home_guide").mouseenter(function () {
  $(".zhegaid").stop().animate(
    {
      width: "0",
    },
    150
  );
  $(".zhegaia,.zhegaib,.zhegaic").stop().animate(
    {
      width: "100%",
    },
    150
  );
  $(".guidePic").css({
    backgroundImage:
      "url('../../images/other/waoh6O.jpg')",
  });
}); // $(".slide-a").click(function(){
//     window.location.href = "/"
//     }
// )
//作品

$(".shits>div")
  .mouseenter(function () {
    $(this).find(".shit_title_img").animate(
      {
        width: "310px",
        height: "190px",
        marginTop: "10px",
        marginLeft: "8px",
      },
      150
    );
    $(this).find("span:first-of-type").animate(
      {
        bottom: "20px",
        fontSize: "22px",
      },
      80
    );
    $(this).find("span:last-of-type").animate(
      {
        height: "0px",
      },
      200
    );
  })
  .stop()
  .mouseleave(function () {
    $(this).find(".shit_title_img").animate(
      {
        width: "300px",
        height: "180px",
        marginTop: "14px",
        marginLeft: "14px",
      },
      150
    );
    $(this).find("span:first-of-type").animate(
      {
        bottom: "30px",
        fontSize: "18px",
      },
      80
    );
    $(this).find("span:last-of-type").animate(
      {
        height: "12px",
      },
      200
    );
  })
  .stop();
$(".ps-container img")
  .stop()
  .click(function (e) {
    e.stopPropagation();
  })
  .stop();
var zooming = "";
var mySwiper = new Swiper(".swiper-container", {
  autoplay: true,
  //自动滑动
  loop: true,
  // 循环模式选项
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
}); //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例

new Swiper(".swiper-container");
var mySwiper = document.querySelector(".swiper-container").swiper;
mySwiper.slideNext();
var psSwiper = new Swiper(".ps-container", {
  autoplay: false,
  //自动滑动
  loop: true,
  // 循环模式选项
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
}); //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例

new Swiper(".ps-container");
var psSwiper = document.querySelector(".ps-container").swiper;
psSwiper.slideNext();
var cardSwiper = new Swiper(".card-container", {
  autoplay: false,
  //自动滑动
  loop: true,
  // 循环模式选项
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
}); //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例

new Swiper(".card-container");
var cardSwiper = document.querySelector(".card-container").swiper;
cardSwiper.slideNext();
