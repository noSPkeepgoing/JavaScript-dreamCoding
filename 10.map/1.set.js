// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(5));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6); // 중복이 불가능
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전체 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🥐', price: 1000 };
const obj2 = { name: '🥨', price: 5000 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// Quiz
obj1.price = 2000;
objs.add(obj1);
console.log(objs);

// Quiz
const obj3 = { name: '🥨', price: 5000 };
objs.add(obj3);
console.log(objs);
