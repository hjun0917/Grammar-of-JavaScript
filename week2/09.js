/**
 * Set
 * 고유한 값을 저장하는 자료구조이다.
 * 값만 저장한다.
 * 키를 저장하지 않는다.
 * 값이 중복되지 않는 유일한 요소로만 구성된다.
 * 기능 : 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인
 */

const mySet = new Set();
mySet.add("value1"); // Map은 key-value를 셋팅(set)해줬지만, Set은 value만 셋팅(add)해준다.
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");

console.log(mySet);
console.log(mySet.size);
console.log(mySet.has("value1"));
console.log(mySet.has("value2"));
console.log(mySet.has("value3"));

// iterator
for (const value of mySet.values()) {
    console.log(value);
}

// 삭제
mySet.delete("value1");
console.log(mySet);

// 전체 삭제
mySet.clear();
console.log(mySet);
