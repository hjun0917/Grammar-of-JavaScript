// 함수 = function(기능)
// input, output

// 1. 함수 선언문
// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y/* 매개변수*/) {
    return x+y; // 메인 로직
}
// 2. 함수 표현식
let add2 = function (x,y) { // () 앞에 함수의 이름을 표기하지 않음 -> 앞에 add2 라는 이름을 가지고 있기 때문
    return x+y;
};
// ㄴ 1과 2는 동일하게 동작을하지만 표현의 방식이 다른 것

// 함수를 호출한다.(=사용한다.)
// 함수명() -> add(입력값)
console.log(add(2, 3));

let functionResult = add2(3, 4);
console.log(functionResult);

// input -> 매개변수(매개체가 되는 변수!)
// output : return 문 뒤에 오는 값 : 반환 값