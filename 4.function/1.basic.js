// 사용예제 1
function add(num1, num2) {
  console.log('add function');
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `hi, ${lastName} ${firstName}`;
}
let lastName1 = 'CHOI';
let firstName1 = 'sun';
console.log(fullName(firstName1, lastName1));

let lastName2 = 'CHOI';
let firstName2 = 'papa';
console.log(fullName(firstName2, lastName2));
