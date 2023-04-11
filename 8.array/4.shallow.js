// 얖은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어짐
// Array.from, concat, slice, spread(...), Object.assign
const pizza = { display: '🍕', price: 20000 };
const ramen = { display: '🍜', price: 10000 };
const sushi = { display: '🍣', price: 30000 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 25000;
console.log('store1', store1);
console.log('store2', store2);
