function hide_canvas() {
    let sidebar = document.querySelector('.book-sidebar')
    let overlay = document.querySelector('.off-canvas-overlay')
    sidebar.classList.remove('show')
    overlay.classList.remove('show')
}

function open_sidebar() {
    let sidebar = document.querySelector('.book-sidebar')
    let overlay = document.querySelector('.off-canvas-overlay')
    sidebar.classList.add('show')
    overlay.classList.add('show')
}

// 网页背景 - 繁星
$(document).ready(function () {
    var stars = 500; /*星星的密集程度，数字越大越多*/
    var $stars = $(".star-back");
    var r = 1000; /*星星的看起来的距离,值越大越远,可自行调制到自己满意的样子*/
    for (var i = 0; i < stars; i++) {
      var $star = $("<div/>").addClass("star");
      $stars.append($star);
    }
    $(".star").each(function () {
      var cur = $(this);
      var s = 0.2 + Math.random() * 1;
      var curR = r + Math.random() * 300;
      cur.css({
        transformOrigin: "0 0 " + curR + "px",
        transform:
          " translate3d(0,0,-" +
          curR +
          "px) rotateY(" +
          Math.random() * 360 +
          "deg) rotateX(" +
          Math.random() * -50 +
          "deg) scale(" +
          s +
          "," +
          s +
          ")",
      });
    });
  });
  
  //  获取当前主题
  function getTheme() {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "p3r");
    }
    $("#body-color").removeClass();
    $("#body-color").addClass(localStorage.getItem("theme"));
  }
  getTheme();
