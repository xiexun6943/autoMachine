(window.onresize = function () {
    const html = document.documentElement;
    const clientWidth = document.documentElement.clientWidth;
    // alert(clientWidth)
    if (clientWidth >= 750) {
        html.style.fontSize = '100px';
    } else {
        const curWidthRatio = (clientWidth / 750) * 100;
        html.style.fontSize = curWidthRatio + 'px';
        // console.log(html.style.fontSize);
    }
})();
// 缩放
try {
    // 禁用双击缩放
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    let lastTouchEnd = 0;
    document.addEventListener(
        "touchend",
        function(event) {
            var now = new Date().getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        },
        false
    );
    // 禁用双指手势操作
    document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
    });
} catch (error) {}
