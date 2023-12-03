let shorts = document.getElementById('shorts');
let others = document.getElementById('others');
let othersname = document.getElementById('registerform');

//トグルボタンのオン/オフを引数として状態を保存する関数
function savetoggle(status){
    localStorage.setItem('togglestatus',status);
}

//復元したいトグルボタンを引数としてオン/オフの状態を復元する関数
function restoretoggle(toggle){
    let status = localStorage.getItem('togglestatus');   
    if(status !== null){
        if(status.checked){
            toggle.checked = true;
        } else {
            toggle.checked = false;
        }
    }
}

//トグルボタンの状態をポップアップを開いた時に復元する
document.addEventListener('load',() => {
    restoretoggle(shorts);
    restoretoggle(others);
})

//shortsを非表示をオン/オフで切り替え
'DOMContentLoaded change'.split(' ').forEach((eventname1) => {
    shorts.addEventListener('eventname1',() => {
        savetoggle(shorts);
        if(this.checked){
            let shortsTab = document.querySelector("#items > ytd-mini-guide-entry-renderer:nth-child(2)");//左のサイドメニューのショートのアイコン
            shortsTab.style.display = "none";
            
            let menuicon = document.querySelector("#guide-button");//ハンバーガーメニューボタン
            menuicon.addEventListener('click',() => {
                let shortsInMeun = document.querySelector("#items > ytd-guide-entry-renderer:nth-child(2)");//メニュー内のショートボタン
                shortsInMeun.style.display = "none";
            });
        } else {

        }
    })
})

//表示の制限をオンにしたときに登録フォームを表示する
'DOMContentLoaded change'.split(' ').forEach((eventname2) => {
    others.addEventListener('eventname2',() => {
        savetoggle(others);
        if(this.checked){
            othersname.style.display = "block";
        } else {
            othersname.style.display = "none";

        }
    })
})

//submitボタンを押して入力されたチャンネルを取得
othersname.addEventListener('submit',(event) => {
    event.preventDefault();// デフォルトのフォーム送信を防ぐ

    let registername= document.getElementById('registername').value;
})

