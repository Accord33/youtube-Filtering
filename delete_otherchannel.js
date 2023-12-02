// window.onUnload = function(){
//     console.log("delete_otherchannel.js loaded");
// }

// スクロールが発生した時のイベント
$(window).scroll(function() {
    // pageBottom = [bodyの高さ] - [windowの高さ]
    var pageBottom = document.body.clientHeight - window.innerHeight;
    // スクロール量を取得
    var currentPos = window.scrollY;

    // スクロール量が最下部の位置を過ぎたか判定
    if (pageBottom <= currentPos) {
        // スクロールが画面末端に到達している時
        console.log("aaaaa");
        deleteOtherChannel();
    }
});

window.onload = function(){
    console.log("delete_otherchannel.js loaded");
    deleteOtherChannel();
}


function deleteOtherChannel(){
    var contents = document.querySelectorAll("#contents > ytd-rich-item-renderer");
    for (var i = 0; i < contents.length; i++) {
        try {
            // console.log(contents[i].querySelector("#channel-name").innerText);
            if (contents[i].querySelector("#channel-name").innerText != "のばまんゲームス") {
                contents[i].style.display = "none";
            }
        }
        catch(e){
            // console.log("error");
        }
    }
    // console.log(contents.length, channel_name.length);
}