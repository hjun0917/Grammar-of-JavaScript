// 화살표 함수
// ES6 신 문법
function add(x,y) {
    return x+y;
}

// 1-1. 기본적인 화살표 함수
// ㄴ 기본 function 문법에 익숙해지고 난 후에 사용할 것을 추천
let arrowFunc01 = (x,y) => {
    return x+y;   
}

// 1-2. 한 줄로
// ㄴ 중괄호 내부의 로직이 한 줄일 경우에 가능
let arrowFunc02 = (x,y) => x+y;

// -------------------------

function testFunc(x){
    return x;
}

// 화살표 함수로!
// ㄴ 매개변수가 하나일 경우 소괄호 표기를 하지 않아도 된다.
let arrowFunc03 = x => x;