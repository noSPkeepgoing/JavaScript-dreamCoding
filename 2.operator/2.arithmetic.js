// 산술 연산자 (Arithmetic Operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수(거듭제곱)

console.log(9 + 3);
console.log(9 - 3);
console.log(9 * 3);
console.log(9 / 3);
console.log(9 % 3);
console.log(9 ** 3); // es7에 추가된 기능
console.log(Math.pow(9, 3)); // es7 이전에 사용했던 방법

// + 연산자 주의점!
let text = '하나아' + '두우울';
console.log(text);
text = '1' + 1; // number + string 은 string
console.log(text);
