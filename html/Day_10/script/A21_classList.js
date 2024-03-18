

let target = document.getElementById('target');
let content = document.getElementById('content');


// 특정 타겟에 걸린 클래스 가져오기
document.getElementById('get').addEventListener('click', function(){
    let data ='';
    
    data = content.classList; // 반환: ClassList의 value값을 가져옴
    output(data); // red visible
    console.log(data);
    
});


// add()를 이용하여 class 추가 (1개 또는 여러개 추가 가능)
document.getElementById('add').addEventListener('click', function(){
    content.classList.add('info', 'blue');
});


// remove()를 이용하여 class 삭제 (1개 또는 여러개 삭제 가능)
document.getElementById('remove').addEventListener('click', function(){
    content.classList.remove('info', 'blue');
});


// replace()를 이용하여 class 교체 (교체 대상이 존재해야 함. 존재하지 않으면 실행 X)
document.getElementById('replace').addEventListener('click', function(){
    content.classList.replace('red','green');
});


// contains()를 이용하여 class 존재 여부 확인 (boolean 반환)
document.getElementById('contains').addEventListener('click', function(){
    let result = content.classList.contains('danger');
    output(result);
    // if(content.classList.contains('blue')) alert('글씨는 blue 색상입니다. ');
    // else alert('글씨는 blue 색상이 아닙니다.');
});


// toggle()를 이용하여 class 토글
document.getElementById('toggle').addEventListener('click', function(){
    content.classList.toggle('visible'); 
    
});


function output(data){
    target.innerHTML = data;
}































