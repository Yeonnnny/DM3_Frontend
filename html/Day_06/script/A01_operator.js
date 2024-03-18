/* 
    자바스크립트 연산자 

    산술연산자 : + - * / % **(거듭제곱 연산자)
    증감연산자 : ++ --
    비교연산자 : ==(===) !=(!==)  >  <  >=  <=
    논리연산자 : && || !(단항)
    삼항연산자 : 조건연산자  (조건식)? 참 : 거짓 ==> 참, 거짓 위치에 실행문을 넣을 수 있음
    typeof    : 단항연산자, 오른쪽의 데이터(변수)의 타입을 알려줌
    비트연산자 : >>  <<  ~(1은 0으로, 0은 1로: 1's complement 연산자)
    대입연산자 : LeftValue = RightValue
    복합대입연산자 : += 등등

    # 새롭게 추가된 연산자
    전개연산자(spread operator) : ... 
        - 배열, 객체에 포함된 요소들을 펼치는 연산자
        - 함수의 파라미터에서 사용되는 경우
        - 대입연산자에서 사용되는 경우

*/


let a = 3;
console.log("3의 3제곱 = "+a**3);


let x = '3';
console.log(x == 3);   // == : 동등연산자 (auto-unboxing해서값이 같은 경우 true)
console.log(x === 3);  // === : 일치연산자 (타입 고려 O)

console.log(x != 3);   //false
console.log(x !== 3);  //true


let y=10;
console.log( 8<y<20 ); // 1)8<y ->true 2) true(=1)<20 ==> true

//y가 8~20 사이의 숫자인지확인하려면
console.log(`y(10)가 8~20 사이인지? : ${y>8 && y<20}`);


/* Short circuit(단축평가)
    - 왼쪽 연산의 결과에 따라 오른쪽 연산을 할 것인가 말 것인가 결정하는 기능
    - 관계 연산자에서 사용됨

    &&
    T && ? ==> ?
    F && ? ==> F

    ||
    T || ? ==> T
    F || ? ==> ?

*/

let b = 1;

b>1 || console.log("출력될까요??"); // 왼쪽이 false니까 오른쪽을 해봄
b==1 || console.log("출력될까요!!"); // 왼쪽이 true니까 오른쪽을 안함

b>1 && console.log("출력될까요??"); // 왼쪽이 false니까 오른쪽을 안함
b==1 && console.log("출력될까요!!"); // 왼쪽이 true니까 오른쪽을 해봄

//-------- 조건연산자(삼항연산자)
let c=5;
let d=3;
c>d? console.log(`${c}가 ${d}보다 크다`) : console.log(`${c}가 ${d}보다 작다`) ;


//-------- 스프레드 연산자
let obj1 = {name:'홍길동'};
let obj2 = {name:'임꺽정'};


let obj = [obj1,obj2];
let temp = [...obj];  // obj와 같이 배열을 하나로 묶을 때 사용할 수 있다.

console.log(obj);
console.log(temp);

//-------------------- Not
let obj3 = {name:'손오공'};
let obj4 = {age:30};
// let obj_ = [...obj3, ...obj4]; // 오류 : iterable 데이터만 펼쳐질 수 있다.
// console.log('손오공 객체를 펼침 : '+obj_);

//--------------------- OK
let ary1 = [1,2,3,4,5];
let ary2 = [11,12,13,14,15];

let ary = [...ary1, ...ary2];
console.log(ary);


//--------- ... : 스프레드 연산자는 껍데기를 벗기는 연산자임

let obj11  = {name : '홍길동'};  // name : '홍길동'
let obj22  = {name : '임꺽정'};
let obj33 = [...obj1, ...obj2];   // 오류! 왜??? [ele1, ele2, ...] 배열안에는 ,로 나열되어야 함
let obj32  = {...obj1, ...obj2};   // 오류 아님! 왜??? {키 : 값}
let obj31 = [obj1,obj2];          // 오류 아님

console.log(obj33);
console.log(obj32);
console.log(obj31);



obj1  = {name : '홍길동'};
obj2  = {addr : '제주도 제주시'};

let obj44 = {...obj1, ...obj2};
console.log(obj44);              // 이 결과는 무엇일까요?


















