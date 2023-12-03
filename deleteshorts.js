window.addEventListener('load',() => {

    let shortsTab = document.querySelector("#items > ytd-mini-guide-entry-renderer:nth-child(2)");//左のサイドメニューのショートのアイコン
    shortsTab.style.display = "none";
});

let menuicon = document.querySelector("#guide-button");//ハンバーガーメニューボタン
menuicon.addEventListener('click',() => {
    let shortsInMeun = document.querySelector("#items > ytd-guide-entry-renderer:nth-child(2)");//メニュー内のショートボタン
    shortsInMeun.style.display = "none";
});