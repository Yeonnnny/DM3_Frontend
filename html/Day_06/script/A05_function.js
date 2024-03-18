// 함수의 정의 : 나머지 연산자를 이용
// 1) 함수 내부에서 arguments라는 배열 객체를 이용하여 정확한 인자의 개수를 전달 받도록 제어
// 2) 매개변수 위치에서 ...연산자를 이용해서 배열의 형태로 모두 전달 받을 수도 있음

function add(a,b, ...c){
    // if(arguments.length != 2) return 0;
    // return a+b;
    console.log(a);
    console.log(b);
    console.log(c);
}

let result = add(10,11);
console.log(result);

result = add(10); // b는 undefined -> 연산 불가 -> Not a Number (NaN)
console.log(result);

result = add(1,2,3,4,5);
console.log(result);

//----- 함수 반환하기
function temp(){
    return function(){
        console.log(2*3);
    };
}

let x = temp();
x();
temp()();

console.log(typeof x);
console.log(x);

// ----- 함수 반환하기-2
function temp2(a,b){
    let result =a*b;
    console.log(result);
    return function(){
        return result;
    };
}
/*
    closure 함수
    클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 
    자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수
 */

let tmp=temp2(5,7)(); // 지역변수에 접근할 수 있음 => closure 
console.log(tmp); // 35


function temp3(){
    return function(a,b){
        return a*b;
    };
}
tmp = temp3()(6,8);
console.log(tmp);

