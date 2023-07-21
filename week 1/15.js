// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1. 객체를 생성하는 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name : "홍길동",
    age : 30,
    gender : "남자"
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 25, "여자");

// 2. 접근하는 방법
console.log("1" /* 구분자 */, person2.name);
console.log("2" /* 구분자 */, person2.age);
console.log("3" /* 구분자 */, person2.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.keys() : 객체가 가진 key을 가져오는 메서드
let keys = Object.keys(person); // 배열의 형태로 담긴다!!
console.log("keys =>", keys);

// 3-2. values
let values = Object.values(person); // 배열의 형태로 담긴다!!
console.log("values =>", values)

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열! (2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries);

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson /* 어디에 복사할래? */, person /* 뭘 복사할래? */, {age : 31, gender : "여자"});
console.log("newPerson =>", newPerson)

// 3-5. 객체 비교
let person3 = {
    name : "홍길동",
    age : 30,
    gender : "남자"
}

let person4 = {
    name : "홍길동",
    age : 30,
    gender : "남자"
}

console.log(person3 === person4) // false
// 객체와 배열은 다른 데이터 타입에 비해 크기가 크다.
// 따라서 메모리에 저장할 때, 별도의 공간에 저장을 한다.
// 객체와 배열의 변수가 가지는 값은 별도 공간에 대한 주소 값이다.

console.log(JSON.stringify(person3) === JSON.stringify(person4));

// 3-6. 객체 병합
let person5 = {
    name : "홍길동",
    age : 30
}

let person6 = {
    gender : "남자"
}

// ... : spread operator
let perfectMan = {...person5, ...person6};
console.log("perfectMan =>", perfectMan);