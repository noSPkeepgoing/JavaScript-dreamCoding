// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행함
// 순회하는 숫자를 다 출력
// 순회하는 숫자의 두배인 값을 다 출력
// function interate(max, action)

//나의 풀이
function my_interate(max, action) {
  action(max);
}

function my_print(max) {
  while (max !== 0) {
    console.log(max);
    max--;
  }
}

function my_print2(max) {
  while (max !== 0) {
    console.log(max * 2);
    max--;
  }
}
my_interate(3, my_print);
my_interate(3, my_print2);

// 또 다른 풀이
function interate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}
interate(3, log);
interate(3, doubleAndLog);

interate(3, (num) => console.log(num));
interate(3, (num) => console.log(num * 2));

console.clear();
setTimeout(() => {
  console.log('....loding');
}, 3000);
