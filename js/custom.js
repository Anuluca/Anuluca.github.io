//判断访问设备
// var u = navigator.userAgent;
// var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// var windowWidth = $(window).width();
NProgress.start();

const textList = [
  "優しい人にならなくちゃ、心が悴む前に。",
  "Take a deep breath.",
  "have a rest ~ ☕️",
  "cursed.",
  "这里沉睡着Anuluca的灵魂。",
  "不妨记录一下现在灵感吧！",
  "就像一张破碎的脸",
];

document.getElementById("intro_text").innerText = textList.sort(
  () => 0.5 - Math.random()
)[0];

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
  // let theme = sessionStorage.getItem("theme");
  // if (theme === "light") {
  //   $("#toLightButton").css({ display: "none" });
  //   $("#toDarkButton").css({ display: "block" });
  // } else {
  //   $("#toLightButton").css({ display: "block" });
  //   $("#toDarkButton").css({ display: "none" });
  // }
  // showOrHideToTop();
});

// $(window).scroll(function () {
//   showOrHideToTop();
// });

Function.prototype.getMultiLine = function () {
  var lines = new String(this);
  lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
  return lines;
};

// function showOrHideToTop() {
//   if ($(window).scrollTop() > $("html").height() / 2) {
//     $(".to_top").fadeIn(300);
//   } else {
//     $(".to_top").fadeOut(200);
//   }
// }

//gitalk&valine双评论端
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

function changeSidebarSize() {
  if (!$(".book-sidebar-bottom").hasClass("sidebar-open")) {
    $(".book-sidebar-bottom").addClass("sidebar-open");
  } else {
    $(".book-sidebar-bottom").removeClass("sidebar-open");
  }
}

function changeTheme(type) {
  localStorage.setItem("theme", type);
  getTheme();
}

function jumpToPage(url) {
  window.location.href = url;
}

function openPage(url) {
  window.open(url);
}

function decodeAndOpenPage(url) {
  let decodedUurl = decodeBase64(url);
  window.open(decodedUurl);
}

// base64加密
function encodeBase64(str) {
  const utf8Bytes = new TextEncoder().encode(str);
  return btoa(String.fromCharCode(...utf8Bytes));
}

// base64解密
function decodeBase64(str) {
  const bytes = atob(str)
    .split("")
    .map((char) => char.charCodeAt(0));
  return new TextDecoder().decode(new Uint8Array(bytes));
}

// 页面加密
const encodePageList = [
  {
    id: "oldPhoto",
    dataId: "M2jkyNTQ=",
  },
  {
    id: "2016",
    dataId: "NsTM3Nzc=",
  },
  {
    id: "2019",
    dataId: "NdDA5OTI=",
  },
  {
    id: "2020",
    dataId: "MljIyNDA=",
  },
  {
    id: "2021",
    dataId: "MGzg0MzM=",
  },
  {
    id: "2022",
    dataId: "N0jY2",
  },
  {
    id: "2023",
    dataId: "NDk3NTU=",
  },
  {
    id: "side-story",
    dataId: "c22lkZVN0b3J5",
  },
];
encodePageList.map((item) => {
  $(`#${item.id}`).click(() => {
    // if (localStorage.getItem("sk") === "9808") {
    //   let decodedUurl = item.dataId.substring(0, 1) + item.dataId.substring(2);
    //   window.location.href = "/" + decodeBase64(decodedUurl);
    // }
    // localStorage.setItem("sk", "[{}]");
    localStorage.setItem("egap", item.dataId);
    window.location.href = "/decode";
  });
});

$("#encodeSubmit").click(() => {
  const base64Answer = encodeBase64($("#encodeInput").val());
  if (base64Answer === "6L6J") {
    // localStorage.setItem("sk", "9808");
    let str = localStorage.getItem("egap");
    window.location.href =
      "/" + decodeBase64(str.substring(0, 1) + str.substring(2));
  } else {
    $("#encodeInput").val("");
    $("#encodeInput").attr("placeholder", "密钥错误");
  }
});

//  获取当前主题
function getTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "sleep");
  }
  $("#body-color").addClass(localStorage.getItem("theme"));
  $("#body-color")
    .attr("class")
    .split(" ")
    .map((item) => {
      if (item !== localStorage.getItem("theme")) {
        $("#body-color").removeClass(item);
      }
    });
}
getTheme();

// 实时时间展示
function displayTime() {
  const now = new Date();
  const month = now.getMonth() + 1; // 月份从 0 开始，所以要加 1
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = ("0" + now.getMinutes()).slice(-2); // 分钟加 0

  let timeString = `${month}月${date}日 ${hours}:${minutes}`;
  document.getElementById("clock-button").innerHTML = timeString.replace(
    ":",
    "<span>:</span>"
  );
}
displayTime();
setInterval(displayTime, 60000); // 每60秒更新一次
let clockStatus = false
$("#clock-button").click(() => {
  clockStatus = !clockStatus
  const hideEles = [
    $(".book-sidebar"),
    $(".sidebar-toggle"),
    $(".footer-com"),
    $(".back-to-top"),
    $(".book-content"),
    $(".intro"),
    $(".links"),
    $(".languages"),
    $(".book-post-meta"),
    $(".book-tocbot"),
  ];
  if(clockStatus){
    hideEles.forEach((item) => {
      item.addClass("transition-1");
      item.addClass("opacity-0");
    });
    $(".bottom").addClass('not-show')
    $("#clock-button").addClass('bigger')
    $("body").addClass('ovh')
  }else{
    hideEles.forEach((item) => {
      item.removeClass("opacity-0");
      setTimeout(() => {
        item.removeClass("transition-1");
      }, 1000);
    });
    $(".bottom").removeClass('not-show')
    $("#clock-button").removeClass('bigger')
    $("body").removeClass('ovh')
  }
});

$("#side-exit").click(()=>{
  location.href="http://www.anuluca.com"
})