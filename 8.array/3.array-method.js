// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍎', '🍊', '🍋'];

// 특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 index를 찾을 때
console.log(fruits.indexOf('🍎'));

// 배열 안에 특정한 아이템이 있는지 찾을 때
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
fruits.push('🍑'); // 배열 자체를 수정 (update)
console.log(fruits);
console.log(fruits.length);

// 추가 - 제일 앞
fruits.unshift('🥭'); // 배열 자체를 수정 (update)
console.log(fruits);
console.log(fruits.length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정 (update)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
const firstItem = fruits.shift(); // 배열 자체를 수정 (update)
console.log(fruits);
console.log(firstItem);

// 중간에 추가 또는 제거
const deleted = fruits.splice(1, 1);
console.log(fruits); // 배열 자체를 수정 (update)
console.log(deleted);
fruits.splice(1, 0, '🍑', '🍓');
console.log(fruits); // 배열 자체를 수정 (update)

// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙임
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.log(arr3); // 배열 자체를 수정 (update)

console.clear();

// 중첩 배열을 하나의 배열로 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // 한단계까지만
console.log(arr.flat(2)); // 두단계까지만
console.log(arr); // 기존 배열은 수정되지 않음

arr = arr.flat(2);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정 (update)
console.log(arr);

arr.fill('a', 1, 3);
console.log(arr);

arr.fill('b', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' ');
console.log(text);
