// DOM에 접근해서 객체를 받아오는 방법

// 1) getElementById('아이디')
let id = document.getElementById('writer');
console.log(id);


// 2) getElementsByTagName()
let tags = document.getElementsByTagName('p');
console.log(tags.length);
console.log(tags);


// 3) getElementsByClassName()
let poem = document.getElementsByClassName('poem');

console.log(poem.length);
console.log(poem);
console.log(typeof poem);


// CSS의 선택자를 이용하여 객체를 가져오는 방법
// querySelector('CSS 선택자') 
// 문서 내의 CSS 선택자에 맞는 모든 데이터 중 첫 번째 데이터만 반환 
console.log('---------querySelector()------')
let poem2 = document.querySelector('.poem');

console.log('length :',poem2.length);  // undefined
console.log('poem2 :',poem2);

// querySelectorAll('CSS 선택자') 
// 문서 내의 CSS 선택자에 맞는 모든 데이터를 배열로 반환
// getElementByClassName() : HTMLCollections 타입으로 반환
// querySelectorAll() : nodeLists 타입으로 반환

console.log('---------querySelectorAll()------')
let poem3 = document.querySelectorAll('.poem');

console.log('length :',poem3.length);  // undefined
console.log('poem3 :',poem3); // getElementByClassName() 메서드와 차이



// HTML 요소의 특정 속성을 조회하거나 치환하는 메소드
// 조회 : HTMLObject.getAttribute(속성명) 
// 변경 : HTMLObject.setAttribute(속성명, 값) 

// 연습 : 꽃의 이미지 수정 
// click : 마우스로 클릭하면 
// mouseenter : 마우스를 갖다 대면
// mouseleave : 마우스를 떼면
document.getElementById('change').addEventListener('mouseenter',()=>{
    let alt = document.getElementById('image').getAttribute('alt');
    console.log(alt);
    document.getElementById('image').setAttribute('src', '../img/pasta.jpg');
});

document.getElementById('change').addEventListener('mouseleave',()=>{
    // let alt = document.getElementById('image').getAttribute('alt');
    // console.log(alt);
    document.getElementById('image').setAttribute('src','../img/sunflower.jpeg');
});


































































































































