// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eatting');
//   }
//   sleep() {
//     console.log('sleeping');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eatting');
//   }
//   sleep() {
//     console.log('sleeping');
//   }
//   play() {
//     console.log('playing');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eatting');
  }
  sleep() {
    console.log('sleeping');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('playing');
  }

  // 오버라이딩 overriding
  eat() {
    super.eat();
    console.log('this dog is eatting');
  }
}
const dog = new Dog('하양이', '주인');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
