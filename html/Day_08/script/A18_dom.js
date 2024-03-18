/*******************************************
    (1번) input 데이터를 읽어 결과 처리하기
********************************************/
let target1 = document.getElementById('target1');

document.getElementById('calc1').addEventListener('click',calcBMI);

function calcBMI(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    
    if(height.value.trim().length==0 || isNaN(height.value.trim())){
        alert('키를 제대로 입력하세요');
        height.select();
        return;
    }
    
    if(weight.value.trim().length==0||isNaN(weight.value.trim())){
        alert('몸무게를 제대로 입력하세요');
        weight.select();
        return;
    }
    
    // let bmi = weight.value/((height.value*0.01)**2); // .value는 문자열인데 +연산(+연산은 문자열 결합이 진행됨)을 제외한 연산에서는 숫자로 변경되어 연산
    let bmi = parseFloat(weight.value)/((parseFloat(height.value)*0.01)**2); 
    
    target1.innerHTML=`당신의 키는 ${height.value}cm, 몸무게는 ${weight.value}kg, bmi는 ${Math.round(bmi*100)/100}입니다.`;
}




/*******************************************
    (2번) select 값을 읽어 결과 처리하기
********************************************/

let language = document.getElementById('language');  // select box
let calc2 = document.getElementById('calc2');        // 버튼
let target2 = document.getElementById('target2');

// 버튼에 걸린 이벤트
calc2.addEventListener('click',()=>{
    let value = language.value;
    let result = `당신이 선택한 기술력은 ${value}입니다.`;
    target2.innerHTML= result;
});

// select 상자에 걸린 이벤트
language.addEventListener('change',function(){
    let value = this.value;  // this : 이벤트를 일으킨 source 즉, language를 가리킴
    console.log(value);
    let result = `당신이 선택한 기술력은 ${value}입니다.`;
    target2.innerHTML= result;
})
// language.addEventListener('change',()=>{ //..? 지역변수라는 개념이 없어서 this를 쓰면, 문서 전체에서 this라는 변수를 찾음. 그래서 undefined로 나오는 것임
//     let value = this.value;  // this : 이벤트를 일으킨 source 즉, language를 가리킴
//     console.log(value);
//     let result = `당신이 선택한 기술력은 ${value}입니다.`;
//     target2.innerHTML= result;
// })



/*****************************
    (3) 연습문제
*****************************/

let calc3 = document.getElementById('calc3');
calc3.addEventListener('click', operate);

function operate(){
    
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    
    if(x.value.trim().length==0 || isNaN(x.value.trim())){
        alert('숫자를 정확히 입력해주세요');
        x.select();
        return;
    }
    if(y.value.trim().length==0 || isNaN(y.value.trim())){
        alert('숫자를 정확히 입력해주세요');
        y.select();
        return;
    }
    let operation = document.getElementById('operation');
    
    let val_x = parseInt(x.value.trim());
    let val_y = parseInt(y.value.trim());
    let result=0;

    switch (operation.value) {
        case "plus":
            result = val_x+val_y;
            break;
        case "minus":
            result = val_x-val_y;
            break;
        case "multiple":
            result = val_x*val_y;
            break;
        case "divide":
            if(val_y==0) {alert('0으로 나눌 수 없습니다.'); y.select();return;}
            result = val_x/val_y;
            break;
    }

    // 결과값 넣기
    document.getElementById('target3').value = result;
}

document.getElementById('clear').addEventListener('click',()=>{
    document.getElementById('form3').reset();
});




/*-------------------------------------
    (4) radio 버튼의 값 읽어 처리하기
-------------------------------------*/


document.getElementById('calc4').addEventListener('click',function(){
    // let gender = document.querySelector('input[type="radio"]:checked'); // 현재 페이지에 라디오 버튼이 여러개 존재한다면
    let gender = document.querySelector('.gender:checked'); // 딱 한 개의 값만 읽어옴
    
    let genderTemp = gender.value;
    
    document.getElementById('target4').innerHTML = genderTemp;
    
});

/*-------------------------------------
    (5) checkbox 읽어 처리하기(넷플릭스)
-------------------------------------*/


document.getElementById('calc5').addEventListener('click',function(){
    let drama = document.querySelectorAll('.netflix:checked'); //배열
    
    let dramaTemp ='';
    drama.forEach((drama) => {
        dramaTemp+=drama.value+", ";
    });
    
    document.getElementById('target5').innerHTML = `당신이 선택한 드라마는 ${dramaTemp.slice(0,-2)}입니다.`;
    
});



/*-------------------------------------
    (6) Textarea 읽어 처리하기
-------------------------------------*/

document.getElementById('textbox').addEventListener('keyup', function(){ // keyup : 키보드 눌렀다가 뗴는 순간마다 event
    let count = this.value.length; // 글자수
    document.getElementById('count').innerHTML=`총 글자수 : ${count}`;
});


document.getElementById('calc6').addEventListener('click',function(){
    let copy = document.getElementById('textbox').value;
    document.getElementById('target6').innerHTML = copy;
});



/*-------------------------------------
(7) input color, date 읽어오기
-------------------------------------*/

document.getElementById('calc7').addEventListener('click',function(){
    let color = document.getElementById('color').value;
    let date = document.getElementById('date').value;
    document.getElementById('target7').innerHTML = `당신이 선택한 색은 ${color}이고, 날짜는 ${date}입니다.`;
});


document.getElementById('color').addEventListener('change',function(){
    alert(`당신이 선택한 색은 ${this.value}입니다.`);
});
document.getElementById('date').addEventListener('change',function(){
    alert(`당신이 선택한 날짜는 ${this.value}입니다.`);
});


