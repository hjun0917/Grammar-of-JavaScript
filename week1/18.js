// for, while => ~동안 : 반복문

// for (초기값; 조건식 ; 증감식) {
// }

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// 배열과 for문을 짝꿍이다.
const arr = ["one","two","three","four","five"];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}

// (문제) 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시
for(let i = 0; i < 11; i++) {
    if (i%2 === 0 && i > 0) {
        console.log(i);
    }
}

// for ~ in 문
// 객체의 속성을 출력하는 문법

let person = {
    name : "형준",
    age : "29",
    gender : "male"
}

for (let key in person) {
    console.log(key + " : " + person[key]);
}