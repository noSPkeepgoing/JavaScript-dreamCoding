// 주석 Comments
// 한줄 짜리 주석을 작성
// TODO(papa): 해야할 일을 작성
// TODO(papa): ~기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 ❌
 * 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음
 * 필요할 때만!
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
