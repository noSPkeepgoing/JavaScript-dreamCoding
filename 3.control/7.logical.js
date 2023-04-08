// 논리 연산자 (Logical Operator)
// && 그리고
// || 또는
// ! 부정 (단항 연산자)
// !! 불리언 값으로 변환 (단항 연산자 응용)
let num = -1;
if (num >= 0 || num < 9) {
  console.log('히히 조건 만족');
}
if (num != 9) {
  console.log('헤헤 조건 충족!');
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text');
console.log(!!'text');
