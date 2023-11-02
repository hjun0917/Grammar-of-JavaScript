//action point 1 : 결과 값 예상해보기
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
a();

// 적용 실습 -> 호이스팅을 적용하기 전에는 첫 console.log에서 에러가 날 것으로 예상을 했음.
function a () {
    var b;
    function b() {};
    console.log(b); // [Function: b]
    b = 'bbb';
    console.log(b); // bbb
    console.log(b); // bbb
}
a();

console.log("==================================================================================")

var a = 1;
var outer = function () {
    var inner = function () {
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a);
}
outer();
console.log(a);