/*
    Number 클래스 : 숫자를 다루는 클래스
*/



//문자열을 숫자로 변환
console.log('--------Number()-------');
let data = "2.5";
let temp = Number(data);

console.log(temp);
console.log(typeof temp);

//문자열을 숫자로 변환
data = "2.5a7";
console.log(typeof data);   //string
let temp1 = Number(data);

console.log(temp1);         //NaN (변환 불가)
console.log(typeof temp1);  //number : NaN이 number로 판단됨 -> 근데 type이 바뀌는건 별 의미가 없음


// 변환하는 또다른 방법
console.log('--------parse~()-------');
console.log(parseInt(data));   // 2.5a7 => 2 (변환가능한 부분까지 변환)
console.log(parseFloat(data)); // 2.5a7 => 2.5 (변환가능한 부분까지 변환)


console.log(`Float형 최댓값 : ${Number.MAX_VALUE}`);
console.log(`Float형 최솟값 : ${Number.MIN_VALUE}`);
console.log(`int형 최댓값 : ${Number.MAX_SAFE_INTEGER}`);
console.log(`int형 최솟값 : ${Number.MIN_SAFE_INTEGER}`);

