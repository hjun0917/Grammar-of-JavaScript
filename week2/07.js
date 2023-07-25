function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
/**
 * const multiplyByTwo = function (x) {
        return x * 2;
    };
 */

const multiplyByThree = multiplyBy(3);
/**
 * const multiplyByThree = function (x) {
        return x * 3;
    };
 */

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(10), multiplyByThree(3)); // 20 + 9 = 29
console.log(result);
