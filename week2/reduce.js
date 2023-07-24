let arr = [1,2,3,4,5];
let initialValue = 0;

// 배열 요소 더하기
let sumValue = arr.reduce(
    (acc, cur) => acc + cur, initialValue
)

console.log(sumValue);

// 배열 요소 빼기
let initialValue2 = 15;
let minusValue = arr.reduce(
    (acc, cur) => acc - cur, initialValue2
)

// 배열의 첫 순회 전의 누산기(acc)에는 initialValue의 값이 담기는 것으로 보임.

console.log(minusValue);