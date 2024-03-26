"use strict";

let pon = document.getElementById("pon");
let qaa = document.getElementById("qq");
let rs = document.getElementById("rs");
let result = document.getElementById("result");

function btnClick1(){
    pon.classList.remove("display")
    let x = Math.floor(Math.random() * (3));
    qaa.textContent= "グー";
    switch (x) {
        case 1 : 
            rs.textContent = "ぐー";
            result.textContent = "あいこ";
            break;
        case 2 :
            rs.textContent = "チョキ"; 
            result.textContent = "かち";
            break;
        case 3 :
            rs.textContent = "ぱー";
            result.textContent = "you lose";
            break;
    }
}

function btnClick2(){
    pon.classList.remove("display")
    let y = Math.floor(Math.random() * (3));
    qaa.textContent = "ちょき";
    switch (y) {
        case 1 : 
            rs.textContent = "ぐー";
            result.textContent = "you lose";
            break;
        case 2 :
            rs.textContent = "チョキ"; 
            result.textContent = "あいこ";
            break;
        case 3 :
            rs.textContent = "ぱー";
            result.textContent = "かち";
            break;
    }
}
function btnClick3(){
    pon.classList.remove("display")
    let z = Math.floor(Math.random() * (3));
    qaa.textContent = "ぱー";
 
    switch (z) {
        case 1 : 
            rs.textContent = "ぐー";
            result.textContent = "かち";
            break;
        case 2 :
            rs.textContent = "チョキ"; 
            result.textContent = "you lose";
            break;
        case 3 :
            rs.textContent = "ぱー";
            result.textContent = "あいこ";
            break;
    }
}