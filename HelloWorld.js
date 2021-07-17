// 변수
let number = 1;
let float = 180.4;
let string = "철수의 키 : ";
let bool = false;
let tmp; // defined
// NaN  // 숫자가 아닐 때(Not a Number)
// Infinity / -Infinity , 0으로 나눴을 때
// defined , 초기화 X

// 문자열 연결 연산자
console.log("철수의 키는 : " + float + "입니다"); // es5
console.log(`철수의 키는 : ${float}입니다`); // es6

// 타입
console.log(typeof number); //number
console.log(typeof float); //number
console.log(typeof string); //string
console.log(typeof bool); //boolean

// 타입 변환
console.log(String(number)); // es6 최신 기법
console.log(Number(string)); // es6 최신 기법
console.log(typeof String(number)); // es6 최신 기법
console.log(typeof Number(string)); // es6 최신 기법

// 산순연산자 및 증감연산자
console.log(number + float);
console.log(number - float);
console.log(number * float);
console.log(number / float);
console.log(number % float);
console.log(number ** float);
console.log(number++);
console.log(number--);
console.log(++number);
console.log(--number);

console.log();
