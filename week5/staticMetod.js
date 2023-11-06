class Calculator {
    static add (a,b) {
        console.log("[계산기] 더하기를 진행합니다.");
        return a+b;
    }
    // static 키워드를 이용하면,
    // new 연산자로 인스턴스를 생성하지 않아도 클래스로 접근하여 바로 메서드를 이용할 수 있다.

    static substract(a, b) {
        console.log("[계산기] 빼기를 진행합니다.");
        return a-b;
    }
}

console.log(Calculator.add(3,5));
console.log(Calculator.substract(5,2));