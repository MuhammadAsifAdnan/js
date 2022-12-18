function foo(result) {
  return new Promise((resolve, reject) => {
    if (result) {
      resolve("Foo resolved, (second)");
    } else {
      reject("Foo rejected");
    }
  });
}

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  console.log("Result: (third)", result);
  return result;
}

const num = 2;

setTimeout(() => multiplyBy2(num), 0); // goes into callback queue

var x = 0;
for (let i = 0; i < 10000000; i++) {
  // blocks the execution thread by some time
  x += i * i;
}
const f = foo(true)
  .then((val) => console.log(val))
  .catch((err) => console.log(err)); // goes into micro-task queue, which gets precedence over the callback queue

console.log("Hello world (first)", x); // line by line execution

// async function myAsyncFunction() {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     const JSONusersData = await users.json();
//     console.log(JSONusersData.map((user) => user.email));
// }

// import { foo } from "./src/broken-promise/imported-promise.js";

// // console.log("Hello node");
// // console.log(typeof window);

// // setTimeout(function () {
// //   console.log("After sometime", brokenPromise.promise());
// // }, 1000);

// // foo();
// // const brokenPromise = require("./src/broken-promise/index.js");

// const promise = new Promise((resolve, reject) => {
//   resolve("hello mello");
// });

// // console.log(promise);

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// // class MyPromise {
// //   resolveChain = [];

// //   constructor(executionFunction) {
// //     executionFunction(this.resolve, this.reject);
// //   }

// //   resolve = (value) => {
// //     this.resolveChain.forEach((callback) => {
// //       value = callback(value);
// //     });

// //     then = (callback) => {
// //       this.resolveChain.push(callback);
// //       return this;
// //     };
// //   };
// // }
