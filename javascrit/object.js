//singleton  method  ==> object.create

//object literals

const mysum = Symbol("key1");

const user = {
  name: "nikhil",
  "full name": "nikhil chauhan",
  age: 18,
  [mysum]: "mykey1",
  id: "abc12",
  "last trip": ["mopday", "tuesday"],
};

console.log(user.age); //console.log(user["Full name"]); ==> second method to call value when key in "" and between space
console.log(user);

user.age = 12;
// Object.freeze(user)
user.age = 22;
console.log(user);

user.greeting = function () {
  console.log("hello");
};

console.log(user.greeting());

user.greeting2 = function () {
  console.log(`hello, ${this.name}`);
};

console.log(user.greeting2());

console.log(user);

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "nikhil",
      lastname: "chauihan",
    },
  },
};

console.log(regularuser.fullname.userfullname);

const obj = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = {obj , obj2}
// console.log(obj3);
// const obj3 = Object.assign(obj,obj2)
const obj3 = { ...obj, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "ni@gmail.com",
  },
  {
    id: 2,
    email: "ni@gmail.com",
  },

  {
    id: 1,
    email: "nik@gmail.com",
  },
  {
    id: 1,
    email: "nik@gmail.com",
  },
];

console.log(users[1]);

const tinderuser = new Object();
tinderuser.id = "123a";
tinderuser.name = "nik";
console.log(tinderuser);

console.log(tinderuser);
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty("name"));







const course = {
  name:"chaTGpt",
  id:123,
  courseinstuctor:"nik"
  
}
const {courseinstuctor: instrcto }= course
console.log(instrcto);