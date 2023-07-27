// user 객체를 생성
var user = {
    name: "aaa",
    age: 30,
};

// 이름을 변경하는 함수 changeName 정의
// 입력값 : 변경대상 user 객체, 변경하고자하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근하여 변경하지 않고, 아예 새로운 객체를 반환 -> 불변
var changeName = function (user, newName) {
    return {
        name: newName,
        age: user.age,
    };
};

// 변경한 user의 정보를 user2의 변수에 할당
// 가변이기 때문에 user1도 영향을 받음
var user2 = changeName(user, "bbb");

// 결국 아래의 로직은 실행되지 않음
if (user !== user2) {
    console.log("이름이 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);
