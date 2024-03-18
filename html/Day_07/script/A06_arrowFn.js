

// 선언적 함수
function one (x,y){
    return x-y;
}

let oneResult = one(12,10);
console.log(oneResult);

// 표현적 함수 (함수 리터럴을 변수에 대입)
let two = function(x,y){
    return x-y;
};

console.log(two(4,3));


// 화살표 함수 (ES6)
// 함수 리터럴 방식 변경
// 1- function 키워드 삭제
// 2- ) { 사이에 => 삽입
// 3- {} 안에 구문이 1줄이면 {} 생략하고 return 삭제 가능

// let three = (x,y)=>{
//     return x-y;
// };

let three = (x,y)=>x-y;
console.log(three(50,33));

// 화살표함수로 바꾸기
let four = function(x,y){
    console.log(`${x} + ${y} = ${x+y}`);
}
four(10,20);
// 수정 결과
let four1 = (x,y)=>console.log(`${x} + ${y} = ${x+y}`);
four1(10,20);

// 4- 매개변수가 1개인 경우, () 생략 가능
// 5- 매개변수가 하나도 없으면, () 생략 불가능

let five = x => {
    const result = x **2;
    console.log(`${x}의 제곱은 ${result}이다.`);
}
five(3);

let six = ()=>console.log("전달인자 없음");
six();


// 6- 함수의 매개변수 위치에 디폴트값 설정할 수 있음
//    디폴트값은 오른쪽에서부터 차곡차곡 채워야 한다.

let seven = (x=0,y)=>console.log(`${x} + ${y} = ${x+y}`);
// seven();
seven(5); // 5 + undefined = NaN
seven(5,6);


// Review
setInterval(function(){
    // 작업
},1000);

// 위와 동일한 표현
setInterval(() => {
    // 작업
}, 1000);




