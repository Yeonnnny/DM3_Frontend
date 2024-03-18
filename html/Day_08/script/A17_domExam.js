let images=[];
for(let i=0;i<5;i++){
    images.push(`../img/smile${i+1}.png`);
}

let eventSource = document.getElementsByTagName('span')[0];

let timer;
let i=0;

eventSource.addEventListener('mouseenter',()=>{
    timer = setInterval(()=>{
        document.getElementsByTagName('img')[0].setAttribute('src',images[i++]);
        if(i>4) i=0;
    },500);    
})
eventSource.addEventListener('mouseleave',()=>{
    clearInterval(timer);
})

