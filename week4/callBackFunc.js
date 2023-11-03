// 콜백함수? : 다른 코드의 인자로 넘겨주는 함수를 뜻한다.
// 즉, 콜백 함수는 다른 코드(함수 또는 메서드)에게 인자로 넘겨줌으로써 그 제어권도 함께 위임한 함수.

// 대표적인 예1
setTimeout(function () {
    console.log("Hi");
}, 10000);

// 대표적인 예2
const numArr = [1,2,3,4,5,6]
numArr.forEach(function(prop) {
    console.log(prop);
})

// 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
var count = 0;
var cbFunc = function () {
    console.log(count);
    if (++count > 4) clearInterval(timer); // clearInterval의 매개변수는 setInterval을 호출하는 식별자 명과 일치해야한다.
}

var timer = setInterval(cbFunc, 300); // 반복해서 매개변수로 받은 콜백함수의 로직을 수행

// 2. 인자에 대한 제어권을 갖는다.
var newArr = [10,20,30].map(function(currentValue, index) { // 매개변수로 들어가는 식별자 명은 사람의 구분을 위함. 사용자가 임으로 값의 순서를 바꾸더라도, 인자에 대한 제어권이 함수에 있기 때문에 원치않는 결과가 반환될 수 있음.
    console.log(currentValue, index);
    return currentValue+3;
});
console.log(newArr);
