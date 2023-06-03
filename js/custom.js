//判断访问设备
// var u = navigator.userAgent;
// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// var windowWidth = $(window).width();
NProgress.start();

// 网页背景 - 繁星
$(document).ready(function () {
  var stars = 800; /*星星的密集程度，数字越大越多*/
  var $stars = $(".star-back");
  var r = 1200; /*星星的看起来的距离,值越大越远,可自行调制到自己满意的样子*/
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

// //获取当前时间
// var ifDrink = (new Date()).getHours()

$(function () {
  var str = function () {
    /*

     _                _                 
    / \   _ __  _   _| |_   _  ___ __ _ 
   / _ \ | '_ \| | | | | | | |/ __/ _` |
  / ___ \| | | | |_| | | |_| | (_| (_| |
 /_/   \_\_| |_|\__,_|_|\__,_|\___\__,_|
                                        
                              
        */
  };
  console.log(str.getMultiLine());
  let theme = sessionStorage.getItem("theme");
  if (theme === "light") {
    $("#toLightButton").css({ display: "none" });
    $("#toDarkButton").css({ display: "block" });
  } else {
    $("#toLightButton").css({ display: "block" });
    $("#toDarkButton").css({ display: "none" });
  }
  showOrHideToTop();
});

$(window).scroll(function () {
  showOrHideToTop();
});

Function.prototype.getMultiLine = function () {
  var lines = new String(this);
  lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
  return lines;
};

function showOrHideToTop() {
  if ($(window).scrollTop() > $("html").height() / 2) {
    $(".to_top").fadeIn(300);
  } else {
    $(".to_top").fadeOut(200);
  }
}

//gitalk&valine双评论端
$(".gitalk_btn").click(function () {
  $("#vcomments").css({ display: "none" });
  $("#gitalk-container").css({ display: "block" });

  $(".valine_btn").css({ color: "black" });
  $(".gitalk_btn").css({ color: "blue" });
  $(".moving").animate({
    width: "180px",
    marginLeft: "120px",
  });
});
$(".valine_btn").click(function () {
  $("#gitalk-container").css({ display: "none" });
  $("#vcomments").css({ display: "block" });

  $(".valine_btn").css({ color: "blue" });
  $(".gitalk_btn").css({ color: "white" });
  $(".moving").animate({
    width: "120px",
    marginLeft: "0px",
  });
});

//右下角链接互动
$(".link_l")
  .mouseenter(function () {
    $(this).stop().css({ backgroundColor: "white" });
    $(this).find("span").css({ color: "#3B3E40" });
    $(this).find("div").css({ "background-position": "0 -29px" });
  })
  .stop()
  .mouseleave(function () {
    $(this).stop().css({ backgroundColor: "rgba(0, 0, 0, 0.5)", border: "0" });
    $(this).find("span").css({ color: "white" });
    $(this).find("div").css({ "background-position": "0 0" });
  });

window.onload = function () {
  NProgress.done();
};
