// 클래스을 베이스로한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('playing...');
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('hunting...');
  }
}

const dog1 = new Dog('망망', '🐶');
const tiger1 = new Tiger('어흥', '🐯');
dog1.printName();
tiger1.printName();
dog1.play();
tiger1.hunt();

console.log(dog1 instanceof Dog); // True
console.log(dog1 instanceof Animal); // True
console.log(dog1 instanceof Tiger); // False
console.log(tiger1 instanceof Dog); // False
console.log(tiger1 instanceof Animal); // True
console.log(tiger1 instanceof Tiger); // True
