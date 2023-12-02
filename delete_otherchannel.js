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
        /*
         * 追加情報を追加＆表示する処理を実行
         */
    }
});

window.onload = function(){
    console.log("delete_otherchannel.js loaded");
}


function deleteOtherChannel(){
    var contents = document.querySelectorAll("#contents > ytd-rich-item-renderer");
    for (var i = 0; i < contents.length; i++) {
        console.log(contents[i].querySelector("#channel-name"));
    }
}