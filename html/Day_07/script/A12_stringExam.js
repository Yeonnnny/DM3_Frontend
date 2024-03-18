
let check = document.getElementById('check');
let userid = document.getElementById('userid');
let birthday = document.getElementById('birthday');


check.addEventListener('click', validation);


function validation(){
    let id = userid.value;
    if(!(id.trim().length>=5 && id.trim().length<=10)){
        alert("아이디는 5~10자리로 입력해야합니다. 정확하게 입력해주세요.")
        userid.select();
        return;
    }    
    
    let birth = birthday.value;
    if(!(birth.trim().length==8 || isNaN(birth))){
        alert("생년월일은 8자리 숫자로 입력해야합니다. 정확하게 입력해주세요.")
        birthday.select();
        return;
    }    
    
    alert("참잘했어요");
}