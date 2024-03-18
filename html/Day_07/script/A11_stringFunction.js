/*-------------------------------------------
    문자열 관련 메소드
    : 문자열은 sequence이면서 immutable한 타입이다. (변경X)

    1) charAt(index), at(index) : index위치의 문자 1개 반환
    2) startsWith(str), endsWith(str), includes(str), search(str) : 특정 단어로 시작하는지/끝나는지/포함하는지/포함하는 곳의 시작 인덱스 위치(없으면:-1)
    3) replace(m,n) : 문자열 m을 찾아서 n으로 변경  
    4) slice(index1,index2) : 부분 문자열 반환 (index1부터 index2-1까지)
    5) substt(), subString() : 부분 문자열 반환 (ES5 이후에는 substr() 사용을 권장하지 않음)
-------------------------------------------*/

let data = 'abcdefg';

//charAt() / at()
console.log(data.charAt(3));
console.log(data.at(3));

data = 'Hello, world! Welcome to the Javascript~';
console.log(data.endsWith('~'));
console.log(data.startsWith('H'));
console.log(data.startsWith('Hello'));

console.log(data.includes('d!'));
console.log(data.includes('world')); // 반환값 boolean 
console.log(data.search('world')); // 7  => 반환값 index
console.log(data.search('earth')); // -1  => 반환값이 -1인 것은 문자열이 없음을 의미



//replace(m,n)
let text = data.replace('Hello','Hi');
console.log('원본 : '+data);
console.log('변경 : '+text);


// slice()
console.log('slice() :',data.slice(5,10));  // ', wor'까지 반환
console.log(data.slice(10,5));  // 앞<뒤 : 뒤는 앞보다 무조건 커야 함  => (추출실패 : 못가져옴)
console.log(data.slice(-5,-1));  // 'ript' : 음수 사용 가능
console.log(data.slice(-1,-5));  // 안됨. 앞<뒤 규칙을 어김


// substr(m,n) : m은 index, n은 개수 의미함  (depreated 될 것이므로 사용하지 말 것)
console.log('substr() : ',data.substr(5,10)); // index 5부터 10개 가져오기


//substring(n,m) : 부분 문자열 추출, n,m: index
data = 'Hello, world! Welcome to the Javascript~';
console.log("substring() : "+data.substring(5,10));
console.log("잎<뒤 규칙 없음 substring() : "+data.substring(10,5)); // 위와 똑같음. 앞<뒤 가 아니어도 됨
console.log("인덱스 음수 사용 불가 substring() : "+data.substring(-1,2));  // 음수인 경우, 0위치로 함 => 0위치에서 2위치 전까지 가벼옴


//spilt(str) : 구분문자열을 전달하여 문자열을 배열로 분리
let arr = data.split(' ');
console.log('split된 데이터 arr의 타입 : ', typeof arr);
console.log('split된 데이터 arr의 길이 : ', arr.length);
console.log('split된 데이터 arr : ', arr);

arr.forEach(item=>console.log(item));


// // find() : 배열
// console.log(arr.find('to'));


// trim() : 좌우 공백 제거
data =' Hello~       ';
console.log('문자열의 길이 .length : ',data.length);
console.log('좌우 공백을 제거한 문자열의 길이 .trim() : ', data.trim().length);
console.log('좌우 공백을 제거한 문자열.trim():',data.trim());





















