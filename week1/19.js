// while
let i = 0;

// while (조건) {
    // 메인로직 증감
// }

while ( i < 10) {
    console.log(i);
    i++;
}

// while 문을 활용하여, 3초과 100 미만읜 숫자 중 5의 배수만 출력해보아라

let j = 3;

while ( j < 100 ) {
    if ( j % 5 === 0 ) {
        console.log(j);
    };
    // 증감식을 while문 내부에서 반드시 처리해주어야 한다.
    j++;
}

// do ~ while
// 일단 한 번 실행하고 조건을 확인한다.

let z = 0;

do {
    console.log(z);
    z++;
} while ( z < 10 );

// (복습) + break
for ( let u = 0 ; u < 11 ; u++ ) {
    if ( u === 5 ) {
        break; // break를 만난 순간 for문 블록밖으로 나간다.
    }
    console.log(u);
}

for ( let u = 0 ; u < 11 ; u++ ) {
    if ( u === 5 ) {
        continue; // continue를 만나면 해당 순서의 로직을 그만두고, 다음 순서의 로직으로 넘어간다.
        // ㄴ 현재의 코드에서는 5를 출력하지 않고, 6을 출력하는 로직으로 넘어감.
    }
    console.log(u);
}