// 조건문 중첩
let age = 10;
let gender = "여성";

if(age >= 20) {
    let result = gender === "여성" ? "성인 여성입니다." : "성인 남성입니다.";
    console.log(result);
} else {
    let result = gender === "여성" ? "미성년 여성입니다." : "미성년 남성입니다.";
    console.log(result);
}