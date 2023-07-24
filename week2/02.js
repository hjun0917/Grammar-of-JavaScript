// 구조분해할당 : destructuring
// 배열이나 객체의 속성을 분해하여 각각을 지정한 변수에 할당하는 것

// (1) 배열
let [value1, value2] = [1, "new"];
console.log("1->", value1);
console.log("2->", value2);

// let arr = [1, 2, 3];
let arr = [1, 2, 3, 4];
// let [a, b, c] = arr;
let [a, b, c, d = 10] = arr; // 해당과 같이 초기값을 지정해줄 수 있음.
console.log("c->", c);
console.log("d->", d); // undefined, null은 보통 개발자가 명시적으로 없다는 것을 표현했을 경우

// (2) 객체
let user = {
    name: "abc",
    age: 30,
    birthday: "yesterday",
};

// let { name, age } = {
//     name: "abc",
//     age: 30,
// };

// console.log(name);
// console.log(typeof name);
// console.log(age);
// console.log(typeof age);

// let { name: newName, age: newAge } = user;

// console.log(newName);
// console.log(newAge);

let { name, age, birthday = "today" } = user;

console.log(name);
console.log(age);
console.log(birthday);
