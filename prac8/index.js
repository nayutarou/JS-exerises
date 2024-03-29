"use strict";

//テキストボックスの要素の取得
const item = document.getElementById("name")
const item2 = document.getElementById("text")
//追加場所となる要素を取得 
const list = document.getElementById("li");

const p = document.getElementById("p");
 

function send() {
    const cElement = document.createElement("p");
    // li要素を生成
    const createElement = document.createElement("li");
    // 生成したli要素にテキスト部分を設定
    cElement.textContent = "投稿 : " + item2.value;

    createElement.textContent = item.value;

    //生成した要素の子要素に追加
    p.append(createElement,cElement);
}
