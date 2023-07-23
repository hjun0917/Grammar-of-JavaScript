// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. -> 변수

// 변수를 선언하 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = "Hello World!";
var myVar = "Test 1";
myVar = "GoodBye 1";
console.log(myVar);

// 2. let
let myLet = "Hello World@";
// let myLet = "TEest 2"; 재선언 불가능
myLet = "GoodBye 2";
console.log(myLet);

// 3. const
const myConst = "Hello World#";
// const myConst = "Test 3"; 재선언 불가능
// myConst = "GoodBye 3"; 재할당 불가능
console.log(myConst);