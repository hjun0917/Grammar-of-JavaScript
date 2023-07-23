// 조건문 - if, else if, switch

// 1. if 문
let x = 10;
// 기본 형태
if(x>0 /*true or false*/) {
    console.log("x는 양수입니다.") // 메인 로직
}

// (문제) y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
let y = "hello world";
let lengthY = y.length;

if(lengthY >= 5) {
    console.log(lengthY);
}

// 2. if-else 문
let z = -3;
// 기본 형태
if (z>0) {
    // main logic #1
    console.log("양수입니다.")
} else {
    // main logic #2
    console.log("음수입니다.")
}

// 3. if-else if-else 문
/*
기본 형태

if (조건1) {
    main logic #1
} else if (조건2) {
    main logic #2
} else {
    main logic #3
}
*/

// 4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택

let fruit = "김형준";

switch (fruit) {
    case "사과":
        console.log("사과입니다.");
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
    default:
        console.log("과일이 아닙니다.");
        break;
}