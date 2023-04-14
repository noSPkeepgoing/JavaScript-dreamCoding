// this 바인딩
// JAVA, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 기리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정되고 변경이 불가능함
// 근데 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`공양이 이름 : ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강앙지 이름 : ${this.name}`);
  };
}

const cat = new Cat('길막');
const dog = new Dog('보라');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터에서 전달된 콜백을 실행');
  printName();
}

printOnMonitor(cat.printName);
