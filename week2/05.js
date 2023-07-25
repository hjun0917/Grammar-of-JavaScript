// 일급객체로써의 함수 (2)
const person = {
    name: "john",
    age: 30,
    isMarried: true,
    sayHello: function () {
        // console.log("Hello, My name is " + this.name);
        console.log(`Hello, My name is ${this.name}`); // ${} : 이 부분에 자바스크립트의 문법을 사용할 수 있다.
    },
    // sayHello: () => {
    //     console.log(`Hello, My name is ${this.name}`); // this.name이 undefined로 출력됨 -> why? 화살표 함수는 this를 바인딩하지 않는다.
    // },
};

person.sayHello();
