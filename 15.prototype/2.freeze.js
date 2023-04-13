// 동결 Object.freeze: 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 freeze)
const papa = { name: 'papa' };
const dog = { name: '빙고', emoji: '🐶', owner: papa };
Object.freeze(dog);
dog.name = '바둑이';
console.log(dog); // 변경안됨
dog.age = 4;
console.log(dog); // 추가안됨
delete dog.name;
console.log(dog); // 삭제안됨
papa.name = '파파야';
console.log(dog); // owner 변경 완료

// 밀봉 Object.seal: 수정 ⭕️, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '나비';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions: 추가만 ❌
const tiger = { name: '범' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흥';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
