function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Student(name,gender, school) {
    Person.call(this, name, gender);
    this.school = school;
}

function Employee(name, gender, company) {
    Person.call(this, name, gender);
    this.company = company;
}

var kd = new Student("형준", "male", "목대");
var adult = new Employee("진영", "female", "다공")

// console.log(kd, adult)

// bind, arrow function 두 가지는 유사하며, 많이 쓰임

var obj = {
    a : 1,
    b : function() {
        console.log("b ==> ",this) // 메소드로서의 호출
        var innerFunc = function() {
            console.log("innerFunc ==> ",this) // 함수로서의 호출, BUT!!! bind로 obj를 묶어줌.
        }.bind(this);
        innerFunc();
    }
};
obj.b();