"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  num = 10;
}

showFirstMessage("hello world!");
console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 7));
// console.log(calc(11, 23));
// console.log(calc(42, 3));

function ret() {
  let num = 50;
 //

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log ("hello");
};

logger();

const calc = (a, b) => a + b;
const calc1 = (a, b) => {
   console.log("1");
   return a + b;
};
