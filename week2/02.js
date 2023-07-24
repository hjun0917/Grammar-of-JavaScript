// 구조분해할당 : destructuring
// 배열이나 객체의 속성을 분해하여 각각을 지정한 변수에 할당하는 것

// (1) 배열
let [value1, value2] = [1, "new"];
console.log("1->", value1);
let arr = [1, 2, 3];
let [a, b, c, d] = arr;
console.log(c);
console.log(d); // undefined, null은 보통 개발자가 명시적으로 없다는 것을 표현했을 경우
// let [a, b, c, d =4] = arr; -> 해당과 같이 초기값을 지정해줄 수 있음.

// (2) 객체
let person = {
    name : "a",
    age : 20
}

let {name, age} = {
    name : "a",
    age : 30
}
console.log(person.name);
console.log("이름 :",name, ", 나이 :",age);

// 새로운 이름으로 할당
let {
    name : newName,
    age : newAge
} = person;

console.log(name);
console.log(newName);

console.log(person);