let check = document.getElementById("check");
let score = document.getElementsByTagName("input");

check.addEventListener('click', validation)

function validation(){
    let total=0;
    for(let i =0; i<score.length-1;i++){
    
        if(!(score[i].value>=0 && score[i].value<=100)){
            alert("0~100사이의 점수를 입력해주세요");
            score[i].select();
            return;
        }

        if (i<=3) total+=score[i].value*0.1;
        else total+=score[i].value*0.2;

    }
    // console.log(total);
    let avg = document.getElementById("avg");
    // console.log(avg);
    avg.innerHTML = total+'';
}




