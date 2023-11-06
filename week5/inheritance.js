class Animal {
    constructor (name) {
        this._name = name;
    }

    speak() {
        console.log(`${this._name} Hi!`);
    }
}

class Dog extends Animal {
    // 부모에게서 내려받은 메서드를 재정의할 수 있음
    // overriding
    speak() {
        console.log(`${this._name} barks!`);
    }
}

const people = new Animal("hj");
const puppy = new Animal("terry");
people.speak();
puppy.speak();
