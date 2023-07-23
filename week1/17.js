// 함수, 배열 plus

// forEach, map, filter, find
let numbers = [1,2,3,4,5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수

// (1) forEach
// ㄴ for문을 도는 것 처럼, 각 요소에 대해서 메인 로직을 실행시킬 수 있다.
numbers.forEach(function(item){
    console.log("item 입니다. ->", item);
});

// (2) map : 기존에 있던 배열을 가공해서 새로운 배열을 생성시키는 함수
// 항상 원본 배열의 길이만큼이 return 된다. map 안에서 return을 하지 않으면 원본 배열의 길이만큼 undefined로 채워진다.
let newNumbers = numbers.map(function(item){
    return item*2;
})
console.log(newNumbers);

// (3) filter : 메인 로직의 조건에 부합하는 것을 반환
let newNumbers2 = numbers.filter(function(item){
    return item%2 !== 0;
})
console.log(newNumbers2);

// (4) find : 조건에 부합하는 가장 앞의 요소를 반환(?)
let newNumbers3 = numbers.find(function(item) {
    return item;
})
console.log(newNumbers3);