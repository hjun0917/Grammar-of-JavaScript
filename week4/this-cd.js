// Array.prototype.map123 = function (callBack, thisArg) {
//     var mappedArr = [];

//     for (var i = 0; i<this.length; i++) {
//         var mappedValue = callBack.call(thisArg || global, this[i]);
//         mappedArr[i] = mappedValue;
//     }
    
//     return mappedArr;
// }

// [1,2,3].map123(function(number) {
//     return number*2;
// })
 
/**
 * 에러, 로직 자체는 어느정도 이해가 감. 실제로 돌려보고 싶음.
e:\Edu\Grammar-of-JavaScript\week4\this-cd.js:12
[1,2,3].map123(function(number) {
        ^

TypeError: Cannot read properties of undefined (reading 'map123')
    at Object.<anonymous> (e:\Edu\Grammar-of-JavaScript\week4\this-cd.js:12:9)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

Node.js v20.9.0
 */

var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};

// ---------------------------------

// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
// var obj2 = {
// 	name: 'obj2',
// 	func: obj1.func
// };
// var callback2 = obj2.func();
// setTimeout(callback2, 1500);

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3); // this 바인딩을 위해서 obj3를 this 값으로 사용하기 위해 매개변수에 대입.
setTimeout(callback3, 2000); // result => obj3