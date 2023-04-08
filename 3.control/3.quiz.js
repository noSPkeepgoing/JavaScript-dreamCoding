// quiz!
let num = 2;

// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력
// if 사용
if (num % 2) {
  console.log('👎');
} else {
  console.log('👍');
}
// ternary 사용
let emoji = num % 2 ? '👎' : '👍';
console.log(emoji);
