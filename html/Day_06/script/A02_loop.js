/*
    반복문과 제어문

    1) 반복문 : while, do~while, for문
        - for문의 종류는 3가지 
        - continue, break
        ** return : 함수 내에서 사용
        
    2) 제어문 : if, switch~case문
*/

// 1) for-1
let arr =[1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// 2) for~in 반복문 : 값을 뽑아오는 것이 아니라, 인덱스를 뽑아옴 
for(let j in arr){
    console.log(arr[j]);
}

// 3) for~of 반복문 : 값을 뽑아옴 (자바의 향상된 for문과 동일함)
let city =['서울','대전','대구','부산'];
for(let c of city){
    console.log(c);
}


// 1~50사이의 데이터 중 3의 배수 혹은 5의 배수인 경우만 출력
for(let i =1;i<51;i++){
    if(i%3==0 || i%5==0){
        console.log(i);
    }
}

console.log("----------------------")
//----------------------------------
let y = "10a";
let result = 10/y; // NaN ==> false처럼 동작함

console.log(result);

// 거짓같은 값 (Falsy): https://developer.mozilla.org/ko/docs/Glossary/Falsy
// Falsy로 평가되는 값의 예제
// [], {}, 연산의 결과가 Infinity인 것 주의! 이것은 true임
// "": 이것은 false임
console.log("----- Falsy Test")
if(10/-0){
    console.log("실행됨");
}

let temp = 10/-0; // 0, 0.0, -0.0
console.log(temp);





// ------------ 출력 : alert()
// ------------ 압력 : prompt(), prompt("message"), prompt("message", 초기값)

// (연습) 키보드로부터 숫자를 입력받아서 양수이면 "양수", 아니면 "음수"로 경고창으로 출력

// let data = prompt("숫자를 입력하세요 : ");

// console.log(isNaN(data)); // 숫자가 아닌 것만 true, 숫자면 false

// if(isNaN(data)==false){ 
//     if(parseInt(data)>=0){
//         alert("양수");
//     }else alert("음수");
// }

// 중첩 for문 : 별찍기
for(let i =1; i<6;i++){
    for(let j =0;j<i;j++){
        document.write('*');
    }
    document.write('<br>');
}


















