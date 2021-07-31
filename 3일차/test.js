// function declaration
/*
function hello(a, b) {
  console.log("hello~!");
  console.log(a + b);
  return a + b;
}
*/

// call function
// hello(10, 5);

// const test = hello(10, 5); // return 값을 변수에 전달한다, return이 없으면 아무것도 변수에 전달이 안된다
// console.log(test);

// named function declaration
/*function Hi() {
  console.log("hi");
}
Hi();
*/
// anonymouse function declaration
/*
let Hi2 = function () {
  console.log("hi2");
};
Hi2();

// let Hi3 = Hi();
*/

// js hoisting, var, function, class, let, const
// es6 added let, const, class ... is get a Temporal Dead Zone
/*
function Hi() { // this can hoising
  console.log("hi");
}
let Hi2 = function () { // this can't hoisting bcz anonymouse function is no named
  console.log("hi2");
};
Hi();
Hi2();
*/

// call back function
// functions can be passed as parameters.
// bcz js function are first-class function
/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의?",
  function () {
    console.log("동의");
  },
  function () {
    console.log("비동의");
  }
);
*/

// function declaration
// function test(){}
// function expression
// let test = function(){}

// variable(var, let), constant(const)
var A = 1; // can reallocation, hoisting
let B = 2; // can reallocation, hoisting with TDZ
const C = 3; // can't reallocation, hoisting with TDZ

// scope
/*
function LocalScopeA() {
  var A = 111;
  console.log(A);
}

function GlobalScopeA() {
  A = 222;
  console.log(A);
}

function ScopeByLet() {
  // let is block scope
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
  // console.log(i);
}

function ScopeByVar() {
  // var is function level scope
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
  console.log(i);
}

// LocalScopeA(); // 111

// console.log(A); // 1

// GlobalScopeA(); // 222

// console.log(A); // 222

// ScopeByLet();
ScopeByVar();
*/

// arrow function
// used like anonymouse function
/*
let anonyfunction = function () {
  console.log("anonymouse");
};
anonyfunction();

let arrowfunction = () => console.log("arrow");
arrowfunction();
*/

/*
let gugudan = () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
};
gugudan();
*/

// Lexical scope
// important Declaration position
/*
var x = 1;

function first() {
  var x = 10;
  second();
}
function second() {
  console.log(x);
}

first();
second();
*/

// scope chain
// variable find first near one
/*
var x = 1;
function first() {
  var x = 10;
  function second() {
    console.log(10);
  }
  second();
  console.log(x);
}

first();
*/

// closure
// ONE PIECE Tony Chopper
// 사람이 언제 죽는다고 생각하나?
// 총알이 심장을 관통했을 때? 아니
// 불치병에 걸렸을 때? 아니
// 맹독 버섯스프를 마셨을 때? 아니
// 사람들에게서 잊혀졌을때다
/*
function otherfunc() {
  var x = 10;
  var innerfunc = function () {
    console.log(x);
  };
  return innerfunc;
}

var inner = otherfunc();
inner();
*/

// object
/*
let user1 = new Object({ age: 20 });
user1.name = "kim";

let user2 = {
  name: "kim",
  age: 20,
};
user2.test = 1;
delete user2.test;
user2["bird"] = true;
delete user2["bird"];

console.log(`${typeof user1} : ${user1}`);
console.log(`${typeof user2} : ${user2}`);

console.log(`${user1.name} is ${user1.age}`);
console.log(`${user2.name} is ${user2.age}`);
*/

let check = (obj) => {
  if (obj.age > 40) {
    return (obj.check = true);
  }
};

let person = { name: "kim", age: 50 };
check(person);
console.log(person);
