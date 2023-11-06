class Car {
    constructor (modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    makeNoise() {
        console.log(`${this._modelName} 빵!!!`);
    }

    createdYear() {
        console.log(`${this._modelYear}년에 생산된 차량입니다.`);
    }

// Getter, Setter 
    get modelName() {
        return this._modelName;
    }

    set modelName(value) {
        if(typeof value !== 'string') {
            console.log("문자로 입력해주세요.");
            return;
        }

        this._modelName = value;
    }
    
    get modelYear() {
        return this._modelYear;
    }

    set modelYear(value) {
        if(typeof value !== 'string') {
            console.log("문자로 입력해주세요.");
            return;
        }

        this._modelYear = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if(typeof value !== 'string') {
            console.log("문자로 입력해주세요.");
            return;
        }

        this._type = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        if(typeof value !== 'string') {
            console.log("문자로 입력해주세요.");
            return;
        }

        this.price = value;
    }
}

class ElectronicCar extends Car {
    constructor(modelName, modelYear, price, chargeTime) {
        super(modelName,modelYear, "electronic", price);
        this._chargeTime = chargeTime;
    }

    get chargeTime() {
        return this._chargeTime;
    }

    set chargeTime(value) {
        this._chargeTime = value;
    }
}

const car1 = new Car("k3", "2023", "gasolin", "3,000만원");
const car2 = new Car("bus", "2020", "electronic", "3억원");
const car3 = new Car("poter", "2015", "dizel", "6000만원");

car2.makeNoise();
car3.createdYear();

// getter 예시
console.log(car1.modelName);
// setter 예시
car1.modelName = 1;
console.log(car1.modelName);

console.log("----------------------------------");
const eleCar1 = new ElectronicCar("tesla", "2023", "7000만원", "90minite");
console.log(eleCar1);
eleCar1.makeNoise();