// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hey');
}

// 변수(let, const)와 클래스는 선언만 호이스팅 되고, 초기화는 안됨
// 초기화 전에 변수에 접근하면 커파일(빌드) 에러가 발생
console.log(hi);
console.log(func1);
console.log(new Cat());
let hi = 'hi';
// 표현식으로 함수를 선언하면 초기화 전에 접근이 불가능
let func1 = function () {};
class Cat {}

let x = 1;
{
  console.log(x); // error
  let x = 2;
}
