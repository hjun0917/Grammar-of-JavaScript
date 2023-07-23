/*

*/

// 2015년도 이전 -> var
// (1) es6 -> let(변수), const(상수)
const a = 1;
// a = 2; 재할당 x

let b = 1;
b = 2;
// let b = 3; 재선언 x

var c = 1;
c = 2; // 재할당 o
var c = 3; // 재선언 o

console.log(a);
console.log(b);
console.log(c);

// (2) arrow function

// 함수 선언문
function add () {

}

// 함수 표현식
var add = function () {

}

var add = () => {
    return 1;
}

var add = () => 1;

var add = x => 1;

// (3) 삼항 연산자
// condition ? true인 경우 : false인 경우;