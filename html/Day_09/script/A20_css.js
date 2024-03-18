/* *********************************
    1) 문서의 데이터에 접근하여 읽어온다.
************************************* */

document.getElementById('change').addEventListener('click',change);

function change(){
    let song = document.getElementById('song');
    song.style.color ='white';
    song.style.backgroundColor ='black';
    song.style.fontSize='1.2em';
    song.style.fontWeight='bolder';
}



document.getElementById('view').addEventListener('click',()=>{
    let box = document.getElementsByClassName('box')[0];
    box.style.visibility='visible';
});

let timer;
document.getElementById('changeColor').addEventListener('click',()=>{
    let box = document.getElementsByClassName('box')[0];
    timer = setInterval(() => {
        box.style.backgroundColor = `rgb(${Math.random()*256+1},${Math.random()*256+1},${Math.random()*256+1})`;
    }, 1000);
    
});
// box 선택하면 멈추기
document.getElementsByClassName('box')[0].addEventListener('click',()=>{
    clearInterval(timer);
});




document.getElementById('darkModeOn').addEventListener('click',()=>{
    document.getElementsByTagName('body')[0].style.backgroundColor='black';
    document.getElementsByTagName('body')[0].style.color='white';
})
document.getElementById('darkModeOff').addEventListener('click',()=>{
    document.getElementsByTagName('body')[0].style.backgroundColor='white';
    document.getElementsByTagName('body')[0].style.color='black';
})



















