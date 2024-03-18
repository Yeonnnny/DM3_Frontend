/* ------------------------------
    구조분해 할당 (배열)
--------------------------------*/

let one = [10,20,30];

let a = one[0];
let b = one[1];
let c = one[2];
console.log(a,b,c);


//Javascript 에서는 =의 왼쪽에는 변수가 무조건 하나여야 함

// 1) 배열 요소를 각각 분해해서 변수에 저장하는 방법
let [a1,b1,c1] = one;
console.log(a1,b1,c1);


// 2) 분해하는 방법 (필요한 요소만 추출)
let [a2,b2,c2,d2] = one; // 배열의 길이를 아는 경우에만 사용 가능함
console.log(c2);
console.log(typeof c2); // number
console.log(d2);


// 3) 두 변수의 값 교환하기 (예전 방식)
let x = 10;
let y = 20;

//
// let temp;
// temp=x;
// x=y;
// y=temp;

// 
[y,x]=[x,y] ;

console.log("두 변수의 데이터값 교환 :",x,y);



/* ------------------------------
    구조분해 할당 (객체)
--------------------------------*/

let objOne = {
    name:'손오공',
    age : 29
};

// 예전 방식
// let name = obj['name']; // obj.name 

// 구조분해할당-1
let {name,age} = objOne;
console.log("객체의 구조 분해 할당 : ",name,age);


//--------- 분해할 때 객체의 이름과 분해하는 이름이 같아야 함
//          다른 이름을 사용하려고하는 경우에는 별칭을 사용
let objTwo = {
    name:'저팔계',
    age : 25
};

// 구조분해할당-2
let {name:nickName, age:hisAge} = objTwo;
console.log(nickName, hisAge);


// 구조분해할당-3 : default parameter 사용
let {name:k, age:l, address='서울'} = objTwo;
console.log(k,l,address);

















