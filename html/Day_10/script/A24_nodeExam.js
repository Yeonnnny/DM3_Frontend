/*
    1) 고객의 이름, 연락처, 이메일을 입력받은 후 추카버튼 클릭하면
    2) 입력된 고객의 정보가 화면 하단에 계속 추가되도록 함
    3) 모든 정보는 반드시 입력 받아야 함, 태그의 옵션 중 required 사용
    4) css는 선택사항
*/


// click 시
// document.getElementById('btn').addEventListener('click',function(event){
//     console.log(event);
//     event.preventDefault();
// });



let btn = document.getElementById('btn');
let list = document.getElementById('list');

btn.addEventListener('click', validation);

function validation(){
    let name = document.getElementById('name');   
    if(name.value.trim().length ==0){
        alert("이름을 입력하세요");
        name.select();
        return;
    }
    
    let phone = document.getElementById('phone');
    if(phone.value.trim().length != 11 || isNaN(phone.value.trim())){
        alert("전화번호는 기호를 제외한 숫자 11자리로 입력하세요.");
        phone.select();
        return;
    }
    
    let email = document.getElementById('email');
    if(email.value.trim().length==0){
        alert("이메일을 입력하세요");
        email.select();
        return;
    }
    
    let data = `<tr> 
    <td>${name.value}</td> 
    <td>${phone.value}</td> 
    <td> ${email.value}</td>
    </tr>`;
    
    list.insertAdjacentHTML('beforeend',data);
};

document.getElementById('email').addEventListener('focus',()=>{
    let phone = document.getElementById('phone');
    if(phone.value.trim().length != 11 || isNaN(phone.value.trim())){
        alert("전화번호는 기호를 제외한 숫자 11자리로 입력하세요.");
        phone.select();
        return;
    }
});



// if(!('@' in email.value.trim())){
//     alert("이메일을 정확히 입력하세요");
//     email.select();
// }












