// 정직원과 알바를 나타낼 수 있는 클래스 생성
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해 한달 월급 계산 가능
// 정직원은 시간당 10000원
// 알바는 시간당 8000원

// 내 풀이..🥺
class staff {
  constructor(name, part, time) {
    this.name = name;
    this.part = part;
    this.time = time;
  }
}

class fullTime extends staff {
  pay() {
    return this.time * 10000;
  }
}

class partTime extends staff {
  pay() {
    return this.time * 8000;
  }
}
const sunn = new fullTime('sun', 's/w', 30);
const paaa = new partTime('paa', 's/w', 20);
console.log(sunn.pay());
console.log(paaa.pay());

console.clear();
// 다른 풀이
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}
const sun = new FullTimeEmployee('sun', 's/w', 30);
const paa = new PartTimeEmployee('paa', 's/w', 20);
console.log(sun.calculatePay());
console.log(paa.calculatePay());
