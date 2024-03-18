/*
    Window 객체가 제공해주는 메소드
    : alert(), confirm(), prompt()
*/

let btn_1 = document.getElementById('btn_01');
let btn_2 = document.getElementById('btn_02');
let btn_3 = document.getElementById('btn_03');
let result = document.getElementById('result');

// click : press & release
btn_1.addEventListener('click', ()=>{
    alert('경고창입니다.');
    result.innerHTML='<span style="color:red"> 경고창을 눌렀습니다.</span>'; // html을 해석해서 내용 전달
    // result.innerText='<span style="color:red"> 경고창을 눌렀습니다.</span>'; // 문자 그대로 내용 전당
});


btn_2.addEventListener('click', ()=>{
    let check  = confirm('확인창입니다.');  // 확인=>true / 취소=>false
    if(check) result.innerHTML ='<span style="color:blue"> 확인</span>을 클릭했습니다.';
    else result.innerHTML ='<span style="color:red">취소</span>를 클릭했습니다.';
});

btn_3.addEventListener('click', ()=>{
    let data = prompt('이름을 입력하세요');

    result.innerHTML =` 당신의 이름은 <span style="color:yellow">${data}</span>이군요! `;
});

// 새창 열기
let btn_4 = document.getElementById("btn_04");

btn_4.addEventListener('click',()=>{
    window.open('./gongji.html','공지사항','height=500px, left=100px, width=600px, menubar=no');
});


