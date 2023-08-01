var fullName = "Ciryl Gane";

var fighter = {
    fullName: "John Jones",
    opponent: {
        fullName: "Francis Ngannou",
        getFullName: function () {
            return this.fullName;
        },
    },

    getName: function () {
        return this.fullName;
    },

    // 화살표 함수는 this 바인딩하지 않는다. 따라서 전역 객체를 바라보게 된다. (?)
    getFirstName: () => {
        return this.fullName.split(" ")[0];
    },

    // 클로저 : "fighter.getLastName" -> 해당 부분을 보면 함수 호출시 괄호를 열고 닫지 않음.
    // 따라서, 해당 함수를 실행할때에 this는 전역 객체를 바라본다.
    getLastName: (function () {
        return this.fullName.split(" ")[1];
        // 스스로 선언 후 호출까지 함. -> 호출의 주체가 없다. why? 스스로 선언하고 호출까지 바로 하여서(즉시 실행)
    })(),
};

console.log("Not", fighter.opponent.getFullName(), "VS", fighter.getName());
console.log(
    "It is",
    fighter.getName(),
    "VS",
    fighter.getFirstName(),
    fighter.getLastName
);

/**
 * Not Francis Ngannou VS John Jones
 * It is John Jones VS Ciryl Gane
 */
