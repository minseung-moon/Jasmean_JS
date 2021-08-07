// Object
/*
let user = new Object({ name: "kim", age: 30 });
let user2 = { name: "kim", age: 30 };

console.log(user);
console.log(user2);
*/

let mms = {
  name: "minseung moon",
  gender: "male",
  age: 25,
  height: 168,
};

// console.log(`제이름은 ${mms.name}, 나이는 ${age}`);

// mms 안에 name이라는 속성이 있는지 확인
//console.log("name" in mms);

// mms 안의 속성(key) 값을 가져온다
// for (let info in mms) {
//   console.log(info);
//   console.log(mms[info]);
// }

// 값 복사
/*
let test = mms; // Reference copy(Object Type)
console.log(test);
test.name = "mms";
console.log(test);
console.log(mms);

let a = 10;
let b = a; // value copy(Primitive Type)
b = 5;
console.log(b);
console.log(a);

let c = mms.age;
b = 20;

console.log(b);
console.log(mms);
*/

// let user = {
//   name: "mms",
//   age: 20,
//   test: {
//     a: 10,
//   },
// };

// shallow copy 얕은 복사
//let user2 = user;

// deep + shallow copy 반깊이 복사
/*
let user2 = {};
for (let info in user) {
  user2[info] = user[info];
}
*/

/*
const user2 = { ...user };

console.log(user);
console.log(user2);

user2.test.a = 20;
console.log(user);
console.log(user2);
*/

// map, filter, find
/*
let arr = [{ name: "kim" }, { name: "lee" }, { name: "gu" }];
arr.map((item) => {
  console.log(item);
});

console.log(
  arr.filter((item) => {
    return item.name == "kim";
  })
);

let tmp = {
  age: 10,
};
tmp = null;
console.log(tmp);
*/

/*
let user = {
  name: "mms",
  age: 20,
  test: {
    a: 10,
  },

  intro() {
    console.log(`hi i am ${this.age}`);
  },
};

user.intro();

let user2 = { ...user };
user2.age = 100;
user2.intro();
*/

/*
let age = 30;
function test() {
  let age = 10;
  console.log(this.age);
}
test();
*/

function user3(name) {
  this.name = name;
  this.age = "mail";
}
let user4 = new user3("kim");
let user5 = new user3("lee");

console.log(user3);
console.log(user4);
console.log(user5);
