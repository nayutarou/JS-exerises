"use strict";

let height = window.prompt("ユーザが身長を入力するダイヤログ");


if(height == false){

    window.alert("入力がないと判定できません");

}else if(height < 100){

    if(height < 90){
        window.alert("乗車できません");
    }else{
        window.alert("付き添いありで乗車可能です");
    }

}else if(height >= 100){
    
    let ticket = window.confirm("プレミアムチケットを持っていますか?");
    
    if(ticket == true){
        window.alert("プレミアムシートに乗車可能です");
    }else{
        window.alert("通常のシートに乗車可能です");
    }

}else{
    window.alert("半角数字で入力してください");
}