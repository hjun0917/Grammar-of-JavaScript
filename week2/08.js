// 자료 구조(Map, Set 등)의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다.

/**
 * (1) Map
 * Key - Value fair
 * Key에 어떤 데이터 타입(유형)도 다 들어올 수 있다.
 * Map은 키가 정렬된 순서로 저장되기 때문이다.
 * 기능 : 검색, 삭제, 크기, 여부 확인
 */

const myMap = new Map();
// myMap.set("key", "value");
// // ...
// myMap.get("key");

// 반복 !!! -'> method : keys, values, entries
myMap.set(1, "일");
myMap.set(2, "이");
myMap.set(3, "삼");

console.log(myMap.entries());

// for ... of
for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

for (const entry of myMap.entries()) {
    console.log(entry);
}

// map의 사이즈(길이)
console.log(myMap.size);
// 특정 key의 존재 여부, key 기반 검색
console.log(myMap.has(3)); // true
console.log(myMap.has(4)); // false
// 삭제
myMap.delete(1);
console.log(myMap.entries());
