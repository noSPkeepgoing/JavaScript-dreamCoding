// 주어진 seconds(초)가 지나면 callback 함수를 호출
// seconds < 0 일 경우 에러를 던짐
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수가 존재하여야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 큰 수여야 함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('히히');
  }, 2);
} catch (error) {}
