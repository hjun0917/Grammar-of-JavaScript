// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "배", "바나나"]; // index는 0부터 시작

// 1-2. 크기 지정
let number = new Array(5); // 크기가 5인 배열을 만들어줘

console.log(number); // number.length
console.log(fruits); // fruits.length

// 2. 요소 접근
console.log(fruits[0]); // 배열은 index로 접근, [] -> 반드시 대괄호를 사용

// 3. 배열 메소드
// 3-1. push
console.log("1 ->",fruits);
fruits.push("오렌지");
console.log("2 ->",fruits);

// 3-2. pop -> 배열의 마지막 요소를 삭제
console.log("3 ->",fruits);
fruits.pop();
console.log("4 ->",fruits);

// 3-3. shift -> 배열의 맨 앞의 요소를 삭제
console.log("5 ->",fruits);
fruits.shift();
console.log("6 ->",fruits);

// 3-4. unshift -> 배열의 맨 앞에 요소를 삽임
console.log("7 ->",fruits);
fruits.unshift("복숭아");
console.log("8 ->",fruits);

// 3-5. splice -> 시작 인덱스와 끝 인덱스의 요소를 지정/삭제, 그리고 지정한 요소를 삽입
fruits.splice(1, 2, "포도");
console.log("splice ->", fruits);

// 3-6. slice -> 시작 인덱스와 끝 인덱스를 지정, 시작 인덱스의 요소(포함)부터 끝 인덱스의 요소(미포함) 사이의 값으로 배열을 만듬
let slicedFruits = fruits.slice(0,2);
console.log(slicedFruits);