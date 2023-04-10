// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 생성
// Counter 클래스 만들기

// 내가 한.. 거...
class myCounter {
  constructor(num) {
    if (num < 0) {
      this.num = 0;
    } else {
      this.num = num;
    }
  }

  count() {
    return this.num++;
  }
}

const my_counter = new myCounter(-5);
console.log(my_counter.count());
console.log(my_counter.count());
console.log(my_counter.count());

console.clear();
// 다른 풀이 방법
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}
const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
