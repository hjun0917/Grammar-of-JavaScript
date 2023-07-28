/**
 * 런타임(Run Time) : 코드가 돌아가는 그 환경
 * 1. 노드
 * 2. 브라우저
 * 전역 환경에서 this 는 -> node = global 객체, 브라우저 = window 객체
 */

// 함수는 그 자체로 호출이 가능
// 메서드는 객체 내부의 동작을 표현하므로 객체와 함께 호출
// CASE 1 : 함수
var func = function (x) {
    console.log("this : ", this, ", (전달)인자 : ", x);
};
func(1); // this :  window 객체 , (전달인자 :  1
// CASE 2 : 메서드
var obj = {
    method: func,
};
obj.method(2); // this :  { method: [Function: func] } , (전달인자 :  2
