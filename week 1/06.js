// 연산자

// 1. 더하기 연산자
// ㄴ + 연산자는 문자열을 우선시 한다.
console.log(1+1); // 2, number
console.log(1+"1"); // 11, string

// + 연산자 이외는 숫자를 우선시 한다.
// 2. 빼기 연산자
console.log(1-1); // 0, number
console.log("1"-1); // 0, number

// 3. 곱하기 연산자(*)
// 4. 나누기 연산자(/)
// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5/2); // 2.5
console.log(5%2); // 1

// 6. 할당 연산자
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x); // 10

// 6-2. 더하기-등호 연산자(+=)
x += 5;
console.log(x); // 15
x += 5;
console.log(x); // 20

// 6-3. 빼기-등호 연산자(-=)
// x 를 -10으로 만들어보자
// (1)
// x -= 30;
// console.log(x);
// (2)
// x = x - 30;
// console.log(x)

// 6-4. 곱하기-등호 연산자(*=)

// 7. 비교 연산자
// 7-1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환
console.log(2 === 2); // true
console.log(2 === "2"); // false

// 7-2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환
console.log(2 !== 2); // false
console.log(2 !== "2"); // true

// 7-3. 크기 비교 연산자(<, <=, >, >=)

// 8. 논리 연산자
// 8-1 논리 곱 연산자(&&)
// ㄴ 모두 true 일 경우에만 true를 반환
console.log(true && true); // T
console.log(true && false); // F
console.log(false && true); // F
console.log(false && false); // F

// 8-2 논리 합 연산자(||)
// ㄴ 값 중 하나라도 true 일 경우 true를 반환
console.log(true || true); // T
console.log(true || false); // T
console.log(false || true); // T
console.log(false || false); // F

// 8-3 논리 부정 연산자 (!)
// ㄴ 값을 반대로 바꾸는 것 true -> false
console.log(!true) // false
console.log(!false) // true
let a = true;
console.log(!a); // false

// 9. 삼항 연산자
// 조건에 따라 값을 선택한다.
// (조건) y가 10 초과면 크다. 이하면 작거나 같다. 를 출력하는 삼항 연산자를 작성해주세요.
let y = 10;
let result = y <= 10 ? "작거나 같다." : "크다.";
console.log(result);

// 10. 타입 연산자 (typeof)
console.log(typeof "5"); // string
