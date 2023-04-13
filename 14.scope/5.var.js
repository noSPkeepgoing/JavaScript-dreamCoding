// Var의 특징
// -> 일반 코딩 방식과 어긋남
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수를 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어려움
someting = '🥯';
console.log(someting); // 🥯 출력;

// 2. 중복 선언이 가능
var foo = '🥯';
var foo = '🥯';
console.log(foo); // 🥯 출력됨;;;

// 3. 블록 레벨 스코프 ❌
var bread = '빵';
{
  var bread = '🥯';
  {
    var bread = '🥨';
  }
}
console.log(bread); // 🥨 출력됨 ㅇ0ㅇ!!

// 4. 함수 레벨 스코프만 지원
function example() {
  var pretzel = '🥨';
}
console.log(pretzel); // error
