// 오브젝트는 단 하나의 prototype을 가리킬 수 있는 (부모는 하나만!)
// 하지만 여러개의 함수들을 상속하고 싶을 때 사용
// Mixin!
const play = {
  play: function () {
    console.log(`${this.name} 놀장`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자장`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('bingo');
console.log(dog);
dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('mew');
tiger.play();
tiger.sleep();
