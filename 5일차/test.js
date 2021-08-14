// 'use strict'
// Javascript
// v8 engien(C++)
// Memory Heap, Call Stack
// JS = Single Tread = 하나의 실행 흐름
// JS 엔진 실행 확인 사이트
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// 동기는 순차적으로
// 비동기는 동시적으로

// last study Object
// let user = {
//     name : "mms"
// }

// Object flag
// writable: true, 작성이 가능하도록
// enumerable: true, : 순환
// configurable: true 플래스 설정
// let user = {
//     name : "mms",
//     // writable: true,
//     // enumerable: true,
//     // configurable: true
// }
// let des = Object.getOwnPropertyDescriptors(user, "name");

// console.log(des);

// 객체 수정
// Object.defineProperty(user, "name", {
//     writable : false
// });

// user.name = "lee";
// Object.defineProperty(user, "name", {
//     configurable : false
// })

// console.log(user);

// 프로퍼티에는 크게 두 종류가 있다
// - 데이터 프로퍼티
// - 접근자 프로퍼티 : getter settet

// let user = {
//     name : "minseung"
//     , subname : "mms"
//     , get fullname() {
//         return `${this.name} ${this.subname}`
//     }
//     , set fullname(value) {
//         [this.name, this.subname] = value.split(" ");
//     }
// }

// console.log(user.fullname);
// user.fullname = "moon minseung";
// console.log(user.fullname);

// function User(name, birtday) {
//     this.name = name;
//     this.birtday = birtday;

//     Object.defineProperty(this, "age", {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birtday.getFullYear();
//         }
//     });

//     Object.defineProperty(this, "name", {
//         writable : false
//     })
// }

// let user = new User("minseung", new Date(1997, 2, 5));

// console.log(user.age);

// Prototype
// __proto__ 프로퍼티를 이용해서 객체 extends 상속이 가능하다
// let animal = {
//     eats : true
//     , walk() {
//         console.log(`${this.eats} walk`);
//     }
// };

// let chicken = {
//     eats : true
//     , walk() {
//         console.log("walk");
//     }
// }

// let chicken = {
//     fly : true
//     // , eats : false
//     , __proto__ : animal
// }

// chicken.walk();
// chicken.eats = false;
// chicken.walk();

// // 객체는 기본적인 Object Prototype을 상속 받는다
// let object = {}
// console.log(object)

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let user = new User("minseung");
// console.log(user.name);

// class Animal {
//     constructor(eats) {
//         this.eats = eats;
//     }
//     walk(){
//         console.log(`${this.eats} walk`);
//     }
// }

// function Animal2(name) {
//     this.name = name;
    
//     this.walk = () => {
//         console.log(name);
//     }
//     return {
//         wlak2 : function() {
//             console.log(name);
//         }
//     }
// }

// let animal2 = new Animal2("a");
// animal2.wlak2();

// let animal = new Animal(true);
// animal.walk();

class User{
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    get name() {
        return this._name;
    }
    
    set name(value) {
        if(value.length < 4) {
            console.log("이름이 너무 짧다");
            return;
        }
        this._name = value;
    }

    get gender() {
        return this._gender;
    }
    set gender(value) {
        if(value == "남성") this._gender = "male";
        else if(value="여성") this._gender = "female";
        else this._gender = "gender";
    }

    call() {
        console.log("hi");
    }
}

let user = new User("abcd", "남성");
console.log(user.name);
console.log(user.gender);
user.call();

function User1(name, gender, age) {
    this.name = name;
    this.gender = (gender == 'male') ? '남성' : (gender == 'female') ? '여성' : '잡성';
    this.age = age;

    const check = (age) => {
        console.error("f")
    }
}