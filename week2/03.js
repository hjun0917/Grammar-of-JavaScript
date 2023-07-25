// 단축 속성명 : property shorthand
const name = "abc";
const age = 30;

const obj1 = { name, age };
const obj2 = { name: name, age: age };
// obj1과 obj2는 동일, key-value의 이름이 같을 경우 단축하여 표기가 가능하다.

// 전개 구문 : spread operator (...)
// destructuring과 함께 가장 많이 쓰이는 es6 문법 중 하나
let arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]
console.log(...arr); // 1 2 3

let arr2 = [...arr, 4];
let arr3 = [1, 2, 3, 4];
console.log(arr2);
console.log(arr3);
// arr2, arr3 는 동일하다.
// 객체에서도 사용 가능

let user = {
    naem: name,
    age: age,
};

let user2 = {
    ...user,
    birthday: "birthday",
};

console.log(user);
console.log(user2);

// 나머지 매개변수 (rest parameter)
let word = "없다";
function exampleFunc(a, b, c, ...args) {
    console.log(`나머지는 ${args.length === 0 ? "없다" : "있다"}.`);
    console.log(a, b, c);
    console.log(...args); // ...을 빼주면 배열 형태로 출력된다.
}

exampleFunc(1, 2, 3);
exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴 (Template Literal)
console.log(`hello world ${3 + 3}`); // 백틱(`)과 ${}를 사용하여, 수식을 표현할 수 있다.
console.log(`hello world,
my name is js`); // 백틱(`)을 사용하면 멀티라인을 지원한다.
