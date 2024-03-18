/*
    함수의 정의 (선언적 함수)

    function 함수이름(파라미터 선언부){
        실행문;
        [return 데이터 ;]
    }

    호출 (call)


*/

// JS hoisting : 정의부가 실행문보다 아래에 있으면, 정의부를 실행문보다 위로 올리는 것 (자동적으로 처리됨)

// 1) 함수의 정의 (선언적 함수)
function add(a,b){
    let result = a+b;
    return result;
}    
// 실행문
let result = add(10,20);
console.log(result);


// 2) 함수의 정의 (표현적 함수) : JS의 함수는 리터럴이므로 변수에 넣거나 반환할 수 있다.
let func = function(){ // anonymous function
    console.log("표현 함수")
};

//실행문
func();  // function은 선언이 아니므로 hoisting 불가능 !!!!!!


// 굳이 표현함수 사용하는 이유?
function substract(a,b){
    return a-b;
}

// x가 받는 값은 함수이다.
function myfunc (x,y){
    console.log("x의 타입은 ? "+ (typeof x));
    let result = x(1,2) * y;
    console.log('myfunc의 결과 : '+ result);
}

myfunc(substract, 20);



//----- Clock 처리하는 부분
let clock = document.getElementById('clock'); // target
let start = document.getElementById('start'); // 이벤트가 실행될 버튼 (Event Source)
let stop = document.getElementById('stop');   // 이벤트가 실행될 버튼


// 시스템 시간 얻어와서 HTML 문서에 출력
function makeHour(color) {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    let data = `<span style="color:${color};">${hour}:${min}:${sec}</span>`;
    
    clock.innerHTML = data;
}

makeHour('black');

let timer = '';


// 클릭을 해야만 실행됨
// start.addEventListener('click', function(){
//     timer = setInterval(function () {
//         let now = new Date();
//         let hour = now.getHours();
//         let min = now.getMinutes();
//         let sec = now.getSeconds();

//         let data = `<span style="color:red;">${hour}:${min}:${sec}</span>`;
        
//         clock.innerHTML = data;
//     },1000);
// });

// start.addEventListener('click', function(){
//     timer = setInterval(function(){
//         makeHour();
//     },1000);
// });

start.addEventListener('click', function(){
    timer = setInterval(() => {
        makeHour('red');
    }, 1000);
});


stop.addEventListener('click', function(){
    clearInterval(timer)
    makeHour('black');
});






