// 자바스크립트의 함수는 거의 모든 걸 할 수 있음
// 함수처럼 사용, 생성자 함수로도 사용(클래스)
// 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체)이 생성됨
const dog = {
  name: 'Dog',
  play: function () {
    // ❌
    console.log('강아징강노는중');
  },
};
dog.play();
const obj = new dog.play(); // 이거 안 좋음❌
console.log(obj);

// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('공양이가노는중');
  },
};
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용 못 함

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔
 * 2. 생성자 함수로 사용이 불가능함 (무거운 프로토 타입을 만들지 ❌)
 * 3. 함수 자체 arguments가 없음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *      - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */
