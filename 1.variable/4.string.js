// 문자열 타입
let string = 'hi';
string = `heyy`;
console.log(string);

// 특수 문자 출력하는 방법
string = "'heyyy'";
console.log(string);

string = 'hi\nthere!\t\theyyyy\\';
console.log(string);

// 템플릿 리터럴 (Template Literal) : ``
// 긴 문자열을 더 편리하게 사용가능
let id = 'papaa';
let greetings = "'hi!, " + id + "🕺🏻\nhave a good day!'";
console.log(greetings);

greetings = `hi!, ${id}🕺🏻
have a goooooood day!`;
console.log(greetings);
