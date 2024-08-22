//clipboard初始化  
let clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
    $(".clipboard_success").css({
        display: "block"
    })
    setTimeout(() => {
        $(".clipboard_success").stop().animate({
            right: 0
        }, 0.2)
        $(".clipboard_success").delay(2400).animate({
            right: -210
        }, 0.2)
    }, 0);
});
clipboard.on('error', function (e) {});