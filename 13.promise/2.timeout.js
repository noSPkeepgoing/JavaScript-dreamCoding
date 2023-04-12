// 자바스크립트 언어 자체는 동기적으로 수행
// 여러가지 API를 이용해 비동기적으로 처리할 수 있음
function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}
execute();
