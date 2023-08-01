// 1. 가장 나이든 유저
// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요.
var user = {
    name: "john",
    age: 20,
};

var getAged = function (user, passedTime) {
    // 여기를 작성해 주세요!
    // (1)
    // var user2 = {
    //     name: user.name,
    //     age: user.age + passedTime,
    // };

    // (2) for in
    var user2 = {};
    for (var prop in user) {
        // 해당 코드에서 prop은 user가 가지고 있는 key값이 된다.
        user2[prop] = user[prop];
    }
    user2.age += passedTime;
    return user2;

    // x
    // var user2 = user;
    // user2.age = user.age + passedTime;
    // return user2;

    /**
     * 오답인 이유는 위의 방식에서는 user와 user2가 동일한 객체이기 때문이다.
     */
};

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
        console.log("Failed! user2 doesn't exist!");
    } else if (user1 !== user2) {
        console.log(
            "Passed! If you become older, you will be different from you in the past!"
        );
    } else {
        console.log("Failed! User same with past one");
    }
};

agedUserMustBeDifferentFromUser(user, agedUser);
