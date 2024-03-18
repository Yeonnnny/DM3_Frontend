/************************************
    [정보처리기사 처리 프로그램]
*************************************/



let subjectScore = document.getElementsByClassName('subjectScore');

// 점수를 입력하는 input 상자에 이벤트 설정
for (let i = 0; i < subjectScore.length; i++) {
    subjectScore[i].addEventListener('keyup',scoreInput);
}

// 결과확인 버튼 클릭 시 이벤트 설정
document.getElementById('btn').addEventListener('click', finalResult);



function scoreInput() {
    let subjectScore = this.value;
    if( !(parseFloat(subjectScore)>=0&&parseFloat(subjectScore)<=100) || isNaN(subjectScore.trim())){
        alert('0~100 사이의 점수를 입력하세요.')
        this.select();
        return;
    }
}

let total=0;
function finalResult() { 
    let totalScore = 0;
    // 각 과목 점수 조회를 위해
    let sub = document.getElementsByClassName('sub');
    // sub.forEach((element) => {
    //     totalScore+=(parseFloat(element.value)*0.1);
    // });
    for(let i=0;i<sub.length;i++){
        totalScore+= (parseFloat(sub[i].value)*0.1);
    }
    // 프로젝트 점수 조회를 위해
    let project = document.getElementsByClassName('project');
    for(let i=0;i<project.length;i++){
        totalScore+= (parseFloat(project[i].value)*0.2);
    }
    // 출석점수 조회를 위해
    let attendence = document.getElementsByClassName('attendence')[0];
    totalScore+=parseFloat(attendence.value)*0.2

    document.getElementById('avg').innerHTML = totalScore;
}