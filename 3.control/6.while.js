// while(조건) {}
// 조건이 false가 될 때까지 {} 코드 블럭을 반복 수행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('수행되는즁,,');
  if (i === 100) {
    break;
  }
  i++;
}

do {
  console.log('do-while : 수행되는즁,,');
} while (isActive);
