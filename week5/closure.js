/** 

// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

console.log(increase());
// num = 100; // 치명적인 단점이 있어요.
console.log(increase());
console.log(increase());

*/

// 무엇을 보완해야할까?
// 1. 카운트 상태 (변수 num의 값) => increase 함수가 호출되기 전까지는 변경되면 안된다.
// 2. 이를 위해서 count 상태는 increase 함수만이 변경할 수 있어야한다.
// 3. 전역 변수 num이 문제가 되는 상황이다.

const increase = (function() {
    // 카운트 상태 변수
    let num = 0;

    // 클로저
    return function() {
        return ++num;
    }
})();

console.log(increase());
console.log(increase());
console.log(increase());

// 1. 위 코드가 실행되면, '즉시 실행 함수'가 호출된다. -> 함수가 반환 -> increase에 할당
// 2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의 '렉시컬 환경'을 기억하는 클로저이다.
// 3, 즉시 실행함수는 즉시 소멸된다.
// 결론 : num은 초기화 x. 외부에서 접근할 수 없는 은닉된 값 o
// 즉시 실행 함수??? (function(){...})() 같은 형태 -> 함수를 소괄호로 감싸는 형태