// 表示を許可するチャンネルのリスト
let allow_channels = [];

// 無限スクロールを利用して、スクロールをするたびに表示を許可するチャンネル以外を非表示にする
$(window).scroll(function () {
    var pageBottom = document.body.clientHeight - window.innerHeight;
    var currentPos = window.scrollY;
    if (pageBottom <= currentPos) {
        console.log("aaaaa");
        deleteOtherChannel();
    }
});

window.onload = function () {
    var channels = document.querySelectorAll("#items")[2].querySelectorAll("a");
    channels[7].click();
    channels = document.querySelectorAll("#items")[2].querySelectorAll("a");


    channels[channels.length - 1].click();

    for (var i = 0; i < channels.length; i++) {
        allow_channels.push(channels[i].innerText.trim()); // チャンネル名から余分なスペースを削除
    }
    console.log(allow_channels);
    deleteOtherChannel();
}

window.onunload = function () {
    deleteOtherChannel();
}

// 許可したチャンネル以外を非表示にする
function deleteOtherChannel() {
    var contents = document.querySelectorAll("#contents > ytd-rich-item-renderer");
    for (var i = 0; i < contents.length; i++) {
        try {
            var channelName = contents[i].querySelector("#channel-name").innerText.trim(); // チャンネル名から余分なスペースを削除
            if (!allow_channels.includes(channelName)) {
                contents[i].remove();
            } else {
                console.log(channelName);
            }
        } catch (e) {
        }
    }
}
