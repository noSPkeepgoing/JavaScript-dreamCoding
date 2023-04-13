// 코드 블럭: {}, if() {}, for() {}, function() {} ...
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
  console.log(a);
}
console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
console.log(message);

// 함수 외부에서는 함수의 매겨변수를 참조할 수 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
