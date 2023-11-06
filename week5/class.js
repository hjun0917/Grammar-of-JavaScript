// 클래스라는 설계도를 만들어보자
class Person {
    // 사람 : name, age
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // 메서드 형태의 동사 표현
    sayHello() {
        // console.log(this.name + " Hello");
        console.log(`${this.name}님 안녕하세요.`)
    }

    sayAge() {
        console.log(`${this.age}살 입니다.`)
    }
}

// 설계도를 통해 실제 사물(인스턴스)를 만들어보자
const person1 = new Person("형준", "29");
const person2 = new Person("진영", "27");

person1.sayHello();
console.log(person2);

person2.sayAge();