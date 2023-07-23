// 스코프, 전역 변수, 지역 변수, 화살표 함수
// js 의 스코프는? -> 변수의 영향 범위, 이 변수가 어디까지 영향을 끼칠 수 있는가?

function printX() {
    let x = 10; // 지역 변수 x
    console.log(x);
}

console.log(x);
printX();