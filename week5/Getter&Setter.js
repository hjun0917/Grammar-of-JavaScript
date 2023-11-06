// Getter와 Setter

class Rectangle {
    constructor (height, width) {
        this._height = height;
        this._width = width;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        // 검증 1
        if (value <= 0) {
            console.log('[오류] 가로길이는 0보다 커야 합니다.');
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 길이는 숫자여야 합니다.');
            return;
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        // 검증 1
        if (value <= 0) {
            console.log('[오류] 세로길이는 0보다 커야 합니다.');
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 길이는 숫자여야 합니다.');
            return;
        }
        this._height = value;
    }

    // getArea : 가로 * 세로 = 넓이
    getArea() {
        const a = this._width * this._height;
        console.log(`넓이는 ${a}입니다.`)
    }
}

// instancec 생성
const rect1 = new Rectangle(10,20);
// rect1.height = -10;
console.log(rect1);
rect1.getArea();