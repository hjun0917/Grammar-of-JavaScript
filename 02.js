// 데이터 타입
// JS는 데이터 타입이 RunTime에 결정된다.
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// -> 터미널에 코드가 실행될 때, 데이터 타입이 결정된다.

// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// 1-2. 실수(float)
// 실수형도 정수와 마찬가지로 number 타입을 가진다.
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// 1-3. 지수(Exp)
// 지수형도 정수와 마찬가지로 number 타입을 가진다.
let num3 = 2.5e5; // 2.5 * 10^5 
console.log(num3); // 결과값 250,000
console.log(typeof num3);

// 1-4.
let num4 = "Hello" / 2;
console.log(num4); // NaN : Not a Number

// 1-5. Infinity(무한대)
let num5 = 1 / 0;
console.log(num5);

// 1-6. - Infinity(무한대)
let num6 = -1 / 0;
console.log(num6);