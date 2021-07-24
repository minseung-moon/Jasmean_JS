// 비교 연산자 : >, >=, <, <=, ==, ===, !, !=, !==
/*
let a = 10;
let b = 20;
console.log(a > b);

a = "z";
b = "a";
console.log(a > b);

a = "2";
b = 2;
console.log(a == b);
console.log(a === b);

console.log(0 == false);
console.log("" == false);
console.log(null == undefined);

console.log("" != false);
console.log(null !== undefined);
*/

// 19살 성인 남자면 출입 불가능
// 19살 성인 여자만 출입 가능
/*
let age = 16;
let gender = "남자";

let message = age >= 19 && gender === "여자" ? "입장하세요" : "출입 거부입니다";
console.log(message);
*/

/*
let age = 6;
let gender = "여자";
if (gender === "남자" && age >= 10) console.log("꼬맹이");
else if (gender === "남자" && age < 10) console.log("애기");
else  console.log("여자이다");
*/

/*
let Name = "";

if (Name == null) {
  Name = "Kim";
  console.log("Kim");
}
*/

/* undefined이면 옆에 있는 값을 대입
let height;
height = height ?? 100;
console.log(height);
*/

let count = 0;
// for while문

for (let i = 1; i <= 4; i += 2) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}

let a = "1";

switch (a) {
  case 1:
    console.log(1);
  case "1":
    console.log(2);
}
