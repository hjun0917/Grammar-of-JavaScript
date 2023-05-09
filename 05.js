// 형 변환
// 형태를 바꾼다.
// 명시적 형 변환과 암시적 형 변환이 있음

// 1. 암시적 형 변환
// 1-1. 문자열
let result1 = 1 + "2";
// console.log(result1); // 12
// console.log(typeof result1); // String

let result2 = "1" + true;
// console.log(result2); // 1true
// console.log(typeof result2); // String

let result3 = null + "1";
// console.log(result3); // null1
// console.log(typeof result3); // String

let result4 = undefined + "1";
// console.log(result4); // undefined1
// console.log(typeof result4); // String

let result5 = {} + "1";
// console.log(result5); // [object Object]1
// console.log(typeof result5); // String

// 1-2. 숫자