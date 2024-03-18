/*
    Math 객체는 수학과 관련된 값이나 함수를 제공
    1) 값 : PI(원주율), E(오일러 상수)
        Math.PI
    2) 함수 

*/

// Math에 선언된 상수 출력
console.log(`원주율 : ${Math.PI}`);
console.log(`오일러 상수 : ${Math.E}`);


// abs(n) : 절대값 반환 
// (JS Falsy 값으로 판정하는 몇 개의 데이터가 있음 : undefined, null, 0, '')
//     Truely값으로 판정하는 데이터 : [], 비어있지 않은 문자열, 배열, 0을 제외한 숫자
console.log("-------------abs(n)------------");
console.log(`Math.abs(-1): ${Math.abs(-1)}`);                // 1
console.log(`Math.abs('-2'): ${Math.abs('-2')}`);            // 2
console.log(`Math.abs(null): ${Math.abs(null)}`);            // 0
console.log(`Math.abs(''): ${Math.abs('')}`);                // 0
console.log(`Math.abs(' '): ${Math.abs(' ')}`);              // 0
console.log(`Math.abs('Korea'): ${Math.abs('Korea')}`);      // NaN
console.log(`Math.abs(undefined): ${Math.abs(undefined)}`);  //*NaN*
console.log(`Math.abs(): ${Math.abs()}`);                    // NaN
console.log(`Math.abs([]): ${Math.abs([])}`);                // 0
console.log(`Math.abs([1,-1]): ${Math.abs([1,-1])}`);        // NaN 


// ceil(n) : (올림)주어진 숫자보다 큰쪽으로 가까운 정수
console.log("-------------ceil(n)------------");
console.log(`Math.ceil(0.95) : ${Math.ceil(0.95)}`);          // 1
console.log(`Math.ceil(5.00001) : ${Math.ceil(5.00001)}`);    // 6
console.log(`Math.ceil(5) : ${Math.ceil(5)}`);                // 5
console.log(`Math.ceil(-0.95) : ${Math.ceil(-0.95)}`);        // 0  
console.log(`Math.ceil(-5.00001) : ${Math.ceil(-5.00001)}`);  // -5


// floor(n) : (내림)주어진 숫자보다 작은쪽으로 가까운 정수
console.log("-------------floor(n)------------");
console.log(`Math.floor(0.95) : ${Math.floor(0.95)}`);          // 0
console.log(`Math.floor(5.00001) : ${Math.floor(5.00001)}`);    // 5
console.log(`Math.floor(5) : ${Math.floor(5)}`);                // 5
console.log(`Math.floor(-0.95) : ${Math.floor(-0.95)}`);        // -1  
console.log(`Math.floor(-5.00001) : ${Math.floor(-5.00001)}`);  // -6


// trunc(n) : 절삭(버림)
console.log("-------------trunc(n)------------");
console.log(`Math.trunc(0.95) : ${Math.trunc(0.95)}`);          // 0
console.log(`Math.trunc(5.00001) : ${Math.trunc(5.00001)}`);    // 5
console.log(`Math.trunc(5) : ${Math.trunc(5)}`);                // 5
console.log(`Math.trunc(-0.95) : ${Math.trunc(-0.95)}`);        // -0
console.log(`Math.trunc(-5.00001) : ${Math.trunc(-5.00001)}`);  // -5


// round(n) : 반올림
console.log("-------------round(n) : 소수점 n 자리 등 이하 반올림을 직접 제어할 수 없음");
console.log(`Math.round(0.95) : ${Math.round(0.95)}`);          // 1
console.log(`Math.round(5.00001) : ${Math.round(5.00001)}`);    // 5
console.log(`Math.round(5) : ${Math.round(5)}`);                // 5
console.log(`Math.round(-0.95) : ${Math.round(-0.95)}`);        // -1
console.log(`Math.round(-5.00001) : ${Math.round(-5.00001)}`);  // -5
console.log(`Math.round(-5.6) : ${Math.round(-5.6)}`);          // -6
console.log(`Math.round(-5.5) : ${Math.round(-5.5)}`);          // -5 (-0.5는 반올림하지 않음)
console.log(`Math.round(-5.51) : ${Math.round(-5.51)}`);        // -6 (-0.51은 반올림 함)
console.log(`Math.round(5.5) : ${Math.round(5.5)}`);            // 6 (+0.5는 반올림 함)
console.log(`Math.round(5.3) : ${Math.round(5.3)}`);            // 5
console.log(`Math.round(5.30129,-1) : ${Math.round(5.30129,-1)}`);   // 소수점 자릿수 지정 X


// 참고
console.log("-------------NaN, Infinity------------");
console.log(`0/0 : ${0/0}`);         // NaN
console.log(`10/0 : ${10/0}`);       // Infinity (양의 무한대)
console.log(`10/-0 : ${10/-0}`);     // -Infinity (음의 무한대)


// min(n), max(n) : 최소값, 최대값 
console.log("-------------max(n)------------");
console.log(`Math.max(1,5,3) : ${Math.max(1,5,3)}`);        // 5
console.log(`Math.max(-1,-5,-3) : ${Math.max(-1,-5,-3)}`);  // -1
console.log(`Math.max() : ${Math.max()}`);                  // -Infinity
console.log(`Math.max(-0.95) : ${Math.max(-0.95)}`);        // -0.95

console.log("-------------min(n)------------");
console.log(`Math.min(1,5,3) : ${Math.min(1,5,3)}`);        // 1
console.log(`Math.min(-1,-5,-3) : ${Math.min(-1,-5,-3)}`);  // -5
console.log(`Math.min() : ${Math.min()}`);                  // Infinity
console.log(`Math.min(-0.95) : ${Math.min(-0.95)}`);        // -0.95



// [연습] let ary = [1,5,3] 배열에 저장된 데이터의 최댓값, 최솟값을 구하려면?
let ary = [1,5,3];
console.log(`---- [연습] : let ary = [1,5,3]; ----`)
console.log(`Math.max(...ary) : ${Math.max(...ary)}`);
console.log(`Math.min(...ary) : ${Math.min(...ary)}`);


// pow(n1,n2) : 거듭제곱 구하는 연산자 
console.log("-------------pow(n1,n2)------------");
console.log(`Math.pow(5,3) : ${Math.pow(5,3)}`);       // 5**3 과 동일
console.log(`5**3 : ${5**3}`);       
console.log(`Math.pow(4,0.5) : ${Math.pow(4,0.5)}`);   // 2
console.log(`4**0.5 : ${4**0.5}`);       
console.log(`Math.pow(4,-2) : ${Math.pow(4,-2)}`);     // 0.0625
console.log(`4**-2 : ${4**-2}`);       


console.log(`Math.pow(-5,3) : ${Math.pow(-5,3)}`);     // -125
// console.log(`-5**3 : ${-5**3}`);        // Syntax 오류 (연산자 우선순위 때문에)
console.log(`(-5)**3 : ${(-5)**3}`);       // 괄호로 묶으면 됨


console.log(`Math.pow(-4,-2) : ${Math.pow(-4,-2)}`);         // 0.0625
console.log(`Math.pow(-5,-3) : ${Math.pow(-5,-3)}`);         // -0.008
console.log(`Math.pow(-4,-0.5) : ${Math.pow(-4,-0.5)}`);     // NaN


// random() : 난수 발생 (0 이상 ~ 1미만)
console.log("-------------random()------------");
for(let i =0;i<5;i++){
    console.log(Math.random());
}


// 예 : 0~50까지 ( 50 포함 정수)를 5번 출력하시오
for(let i =0;i<5;i++){
    console.log(Math.floor(Math.random()*51));
}
























