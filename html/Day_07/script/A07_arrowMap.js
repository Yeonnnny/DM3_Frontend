let arr = [10,11,100,101,1000];
console.log(arr.length);

// 1) forEach는 배열의 개수만큼 순환하는 함수. 
let total = 0;
arr.forEach(function(item,index,ary){
    //console.log(item, index, ary);
    total += item;
});
console.log('배열의 총합-1 : '+total);


// 2) 화살표함수로 변경한 경우 
total = 0;
arr.forEach((item)=> total += item);
console.log('배열의 총합-2 : '+total);

/*---------------------------------------
    map : 배열의 요소 변경
    배열요소 전체를 순환하면서 결과값으로 새로운 배열을 만들어 반환함.
    원본 배열의 값은 변경하지 않음.
---------------------------------------*/
let result = arr.map((item)=> item*2);
console.log('map 함수 처리 결과 : '+result);
console.log('원본 배열 : '+arr);


/*---------------------------------------
    filter() : 배열의 요소를 삭제(필터링)
    배열 요소를 수환하면서 true가 반환되면 그 조건이 true인 요소들로 새로운 배열을 만들어 반환함.
    원본 배열의 값은 변경하지 않음.
---------------------------------------*/

result = arr.filter((item)=>{
    if(item%2==0) return true;
    else return false;
})
console.log('filter 함수 처리 결과 :'+result);
console.log('원본 배열 : '+arr);





