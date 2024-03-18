let list = document.getElementById('list');

document.getElementById('Beforeend').addEventListener('click', beforeendFunc);
document.getElementById('Beforebegin').addEventListener('click', beforebeginFunc);
document.getElementById('Afterend').addEventListener('click', afterendFunc);
document.getElementById('Afterbegin').addEventListener('click', afterbeginFunc);

let data = '<li>콩나물국밥</li>';

function beforeendFunc(){
    // list.innerHTML = data; // 기존 데이터 날려버림
    list.insertAdjacentHTML('beforeend',data);
} 

function beforebeginFunc(){
    list.insertAdjacentHTML('beforebegin',data);
} 

function afterendFunc(){
    list.insertAdjacentHTML('afterend',data);
} 

function afterbeginFunc(){
    list.insertAdjacentHTML('afterbegin',data);
} 
