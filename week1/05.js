// 형 변환
// 형태를 바꾼다.
// 명시적 형 변환과 암시적 형 변환이 있음

// 1. 암시적 형 변환
// 1-1. 문자열
// ㄴ + 연산자와 함께 문자열과 다른 데이터 타입이 만나면 문자열이 우선시 된다.
let result1 = 1 + "2";
console.log(result1); // 12
console.log(typeof result1); // String

let result2 = "1" + true;
console.log(result2); // 1true
console.log(typeof result2); // String

let result3 = null + "1";
console.log(result3); // null1
console.log(typeof result3); // String

let result4 = undefined + "1";
console.log(result4); // undefined1
console.log(typeof result4); // String

let result5 = {} + "1";
console.log(result5); // [object Object]1
console.log(typeof result5); // String

// 1-2. 숫자
// 더하기 연산자가 아닌 연산자는 숫자를 우선시한다.
let result6 = "12" - 2;
console.log(result6); // 10
console.log(typeof result6); // Number

let result7 = "12" * "2";
console.log(result7); // 24
console.log(typeof result7); // Number

// 2. 명시적 형 변환
// 2-1. Boolean
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log("-------");
console.log(Boolean({})); // true
console.log(Boolean("false")); // true

// 2-2. 문자열
let result8 = String(123);
console.log(typeof result8); // String

let result9 = String(true);
console.log(typeof result9); // String

let result10 = String(false);
console.log(typeof result10); // String

let result11 = String(null);
console.log(typeof result11); // String

let result12 = String(undefined);
console.log(typeof result12); // String

// 2-3. Number
let result13 = Number("123");
console.log(typeof result13); // Number