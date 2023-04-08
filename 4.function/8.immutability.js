// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 👎
// 상태 변경이 필요한 경우에는 새로운 상태를(오브젝트, 값) 만들어서 반환 👍
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  num = 5; // ❌
  console.log(num);
}
const value = 3;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'papa'; // ❌❌❌❌❌❌❌❌❌
  console.log(obj);
}
const sun = { name: 'sun' };
displayObj(sun);

function changeName(obj) {
  // 변수 이름부터 변경하는 느낌을 주도록
  return { ...obj, name: 'papap' }; // 반환할 때는 새로운 오브젝트를 만들어 반환
}
