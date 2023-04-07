// 변수이름은 저장된 값을 잘 나타낼 수 있는 "의미있는" 이름
// 구체적일 수록 good

/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분
 * 영어를 여러 단어로 연결할경우 :camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 */

let apple;
let redApple;

// 나쁜예제 👎
let number = 20;

// 좋은예제 👍
let myAge = 20;

// 나쁜예제 👎
let audio1;
let audio2;

// 좋은 예제 👍
let backgroundAudio;
let windAudio;

// 꿀팁 🍯
// 추상적 > 구체적
let audioBackground;
let audioWind;
