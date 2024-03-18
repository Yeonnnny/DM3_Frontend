/*
    실행 위치에 따른 결과

    - 자바 스크립트를 실행 시 코드가 html이 head 위치에 포함되어 있을 경우
        : HTML 파싱 도중에 Javascript fetch --> execute --> HTML parsing //파싱시간의 공백이 생김
    - async : HTML parsing과 동시에 JS fetch를 동시에 ! execute할 때 parsing을 멈춤. (전체 시간이 단축됨 but, 공백은 여전히 존재함)
    - defer : HTML parsing과 동시에 JS fetch를 동시에 JS execute를 HTML parsing 이후로 미룸 (전체 시간은 느려질 수 있으나, 공백이 없기 때문에 에러 발생하지 않음)
            : window.onload와 유사하게 동작함 (동시에 진행하지 못한다는게 defer와의 차이점임. parsing-> fetch->execute)

*/

// // 방법 1) Event
// window.onload = function(){
  
//     // 중첩 for문 : 별찍기
//     let data = '';
    
//     for(let i =1; i<6;i++){
//         for(let j =0;j<i;j++){
//             data +='*';
//         }
//         data += '<br>';
//     }
    
//     let result = document.getElementById("result"); // HTML 객체여야 함.
//     console.log('result='+result);
//     result.innerHTML = data;
// } 


// 방법 2) html의 script태그에 defer 명시해 줌
let data = '';

for(let i =1; i<6;i++){
    for(let j =0;j<i;j++){
        data +='*';
    }
    data += '<br>';
}

let result = document.getElementById("result"); // HTML 객체여야 함.
console.log('result='+result);
result.innerHTML = data;












