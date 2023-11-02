// 불변 객체(얕은 복사와 깊은 복사)

// 변경 X
var user = {
    name : "Kim",
    gemder : "male",
};

var changeName = function (user, newName) {
    var nweUser = user;
    nweUser.name = newName;
    return nweUser;
};

var user2 = changeName(user, "lim");

if (user !== user2) {
    console.log("유저 정보가 변경되었습니다.")
}

console.log(user.name, user2.name);
console.log(user === user2);

// 변경 O
var user = {
    name : "Kim",
    gemder : "male",
};

var changeName = function (user, newName) {
    return {
        name : newName,
        gender : user.gemder,
    };
};

var user2 = changeName(user, "lim");

if (user !== user2) {
    console.log("유저 정보가 변경되었습니다.")
}

console.log(user.name, user2.name);
console.log(user === user2);

// 얕은 복사
var copyObject = function (target) { // target은 Object(객체)
    var result = {};

    for (var prop in target) { // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근이 가능
        result[prop] = target[prop]
    }
    return result;
}

// 예시[변경 O] -> 얕은 복사로 코드질 향상
// 중첩 객체에 대해서는 완벽한 복사를 할 수 없다. 1depth
var people = {
    name: "Kim",
    gender: "male",
    age: 29,
}

var people2 = copyObject(people);
people2.name = "Go";

if (people !== people2) {
    console.log("정보가 변경되었습니다.")
}

console.log(people.name);
console.log(people2.name);

// 깊은 복사, recursive
var copyObjectDeep = function(target) {
	var result = {};
	if (typeof target === 'object' && target !== null) {
		for (var prop in target) {
			result[prop] = copyObjectDeep(target[prop]);
		}
	} else {
		result = target;
    }
	return result;
}

console.log("============================================================")

var obj = {
	a: 1,
	b: {
		c: null,
		d: [1, 2],
	}
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);

