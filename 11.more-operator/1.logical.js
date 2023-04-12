// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐯', owner: 'papa' };

if (obj1 && obj2) {
  console.log('둘 다 true');
}

let result = obj1 && obj2;
console.log(result); // obj2 출력

result = obj1 || obj2;
console.log(result); // obj1 출력

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야할 경우
// 조건이 falshy일 때 || 무언가를 해야할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('has no owner');
  }
  animal.owner = 'sunny';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('already has owner');
  }
  animal.owner = 'new sunny';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본 값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 할당됨: 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'heyy';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
