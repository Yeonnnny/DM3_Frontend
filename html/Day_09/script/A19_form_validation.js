/*
    회원가입 Form 기능 구현
*/

document.getElementById('join').addEventListener('click',validation);

function validation(){
    
    // 1) 아이디 길이 체크
    let id = document.getElementById('id');
    if(!(id.value.trim().length>=3 && id.value.trim().length<=5)){
        alert('아이디는 3~5 글자 사이로 입력해주세요');
        id.select();
        return;
    }
    
    // 2) 비밀번호 길이 체크
    let pwd = document.getElementById('pwd');
    if(!(pwd.value.trim().length>=3 && pwd.value.trim().length<=5)){
        alert('비밀번호는 3~5 글자 사이로 입력해주세요');
        pwd.select();
        return;
    }
    
    // 3) 비밀번호와 비밀번호 확인 값이 같은지 확인
    let pwd_confirm = document.getElementById('pwdConfirm');
    if(pwd.value.trim()!=pwd_confirm.value.trim()){
        alert('비밀번호가 일지하지 않습니다.');
        pwd_confirm.select();
        return;
    }
    
    // 4) 이름이 입력되었는지 확인
    let pname = document.getElementById('name');
    if(pname.value.trim().length==0){
        alert('이름을 입력해주세요');
        pname.select();
        return;
    }

    // 5) 성별 체크 확인 
    let gender = document.querySelector('.gender:checked');

    // 6) 선택한 모든 취미 확인
    let hobbies = document.querySelectorAll('.hobby:checked');
    let hobby ='';
    hobbies.forEach((item)=>{
        hobby+=item.value+", ";
    });

    // 7) 전화번호가 숫자인지, 8자리로 입력했는지 확인
    let local_num = document.getElementById('localnum');
    let phone = document.getElementById('phone');
    if(isNaN(phone.value.trim())||phone.value.trim().length!=8){
        alert('전화번호는 숫자로만 8자리 입력해주세요');
        phone.select();
        return;
    }
    
    //회원정보 경고창에 출력
    let result =`${id.value}, ${pwd.value}, ${pname.value}, ${gender.value}, ${hobby.slice(0,-2)}, ${local_num.value})${phone.value}`;
    alert(result);

    // form 초기화
    document.getElementById('joinForm').reset();
}    

// 아이디 확인 버튼 클릭 시 아이디 길이 확인 
document.getElementById('btn_id').addEventListener('click',()=>{
    let id = document.getElementById('id');
    if(!(id.value.trim().length>=3 && id.value.trim().length<=5)){
        alert('아이디는 3~5 글자 사이로 입력해주세요');
        id.select();
        return;
    }else{
        alert('사용 가능한 아이디입니다.');
        document.getElementById('pwd').select();
    }
});

// 비밀번호 길이 확인 
document.getElementById('btn_pwd').addEventListener('click',()=>{
    let pwd = document.getElementById('pwd');
    let pwd_confirm = document.getElementById('pwdConfirm');
    if(pwd.value.trim()!=pwd_confirm.value.trim()){
        alert('비밀번호가 일지하지 않습니다.');
        pwd_confirm.select();
        return;
    }else{
        alert('비밀번호가 일치합니다.');
        pname.select();
    }
});

// 비밀번호 확인 버튼 클릭 시 비밀번호값과 확인값이 일치하는지 확인
document.getElementById('pwdConfirm').addEventListener('focus',function(){
    let pwd = document.getElementById('pwd');
    if(!(pwd.value.trim().length>=3 && pwd.value.trim().length<=5)){
        alert('비밀번호는 3~5 글자 사이로 입력해주세요');
        pwd.select();
        return;
    }
    else{
        alert('사용 가능한 비밀번호입니다.');
        document.getElementById('name').select();
    }
});

    
// 취소 버튼 클릭 시 form 초기화
document.getElementById('cancel').addEventListener('click',()=>{
    document.getElementById('joinForm').reset();
})
    