/*--------------------------------
    배열을 처리하는 함수
    
    1) join("문자열") : 전달인자의 문자열을 구분자로 하여, 배열을 문자열로 반환
    2) reverse() : 배열을 뒤집음
    3) slice(start, end) : 배열의 일부분을 반환, 음수 -1은 마지막 데이터를 의미. 원본을 건들이지 않음.
    4) splice(n[,m,...x]) : 원본에 영향을 미침. 부분배열로 추출하거나 다른 값으로 대체
    5) sort() : 오름차순 정렬. 원본에 영향을 미침
    6) concat()
    7) push(item), pop() : 배열의 끝에 데이터를 삽입하거나 추출. 원본이 수정됨. stack 자료구조처럼 동작
    8) unshift(item), shift() : 배열의 앞에 데이터를 삽입... (이하 동일 / 생략)
    9) toString() : 배열을 문자열로 반환

---------------------------------*/


let arr =[1,2,3,4,5,6,7,8,9,10];
console.log(arr.join("/"));
console.log(typeof arr.join("/"));

//console.log(arr.reverse()); // 원본이 변경됨

let temp = arr.slice(1,5);   // 새로운 복사본  (deep copy)
console.log(temp);

arr[2] = 30;
console.log(arr);   // 원본
console.log(temp);  



temp = arr.slice(0,-1); // -1: 마지막 데이터 바로 전까지
temp = arr.slice(0,-2); 
console.log("부분배열의 결과 : ",temp);

// splice()
let color = ['빨','주','노','초','파','남','보'];
temp=color.splice(4); // 인덱스 4~끝까지
console.log(temp);
console.log(color); // 원본에 영향을 미침 


// 특정위치의 데이터 자르기
color = ['빨','주','노','초','파','남','보'];
temp = color.splice(2,1); // splice(시작 위치, 시작 위치부터 가져올 개수)
console.log(temp);
console.log(color); // 원본에 영향을 미침 

color = ['빨','주','노','초','파','남','보'];
temp = color.splice(2,1,'Yellow','노랑'); // 인덱스가 2인위치에서 데이터를 1개 가져오고, 원본에는 'Yellow','노랑'를 삽입
console.log(temp);
console.log(color); // 원본에 영향을 미침 


// concat()
let food = ['라볶이','뼈해장국','파스타'];
let drink = ['물','주스','커피'];
let fruit = ['사과','포도','딸기'];

let lunch = food.concat(drink);
console.log(lunch);

lunch = food.concat(drink,fruit);
console.log(lunch);


//toString()
console.log(lunch.toString());


let data ='짜장면';
food.push(data);
console.log(food);

data = food.pop(); // 마지막 값을 꺼냄
console.log(data); 
console.log(food); // 원본에서도 삭제됨


//
food = ['라볶이'];
data = food.pop(); // 마지막 값을 꺼냄
console.log(data); 


data = food.pop(); // 마지막 값을 꺼냄
console.log(data); 


// unshift(item), shift()
drink = ['물','주스','커피'];

data = drink.shift();
console.log(data);
console.log(drink);

drink.unshift('맥주');
console.log(drink);


//----------------------------------
let ar1 = [1,2,3,6,4,8,7];
ar1.sort(); // 원본에 영향을 미침
console.log(ar1);














































































































































