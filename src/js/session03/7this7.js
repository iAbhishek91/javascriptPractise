// implicit binding lost

// global.a = "I am global";

function myFunc1 () {
  console.log(this.a);
}

const myObj1 = {
  a: 10,
  func: myFunc1
}

// reference to other object
const myFunc1Ref1 = myObj1.func;
const myFunc1Ref2 = myFunc1;

myObj1.func();
myFunc1Ref1();
myFunc1Ref2();

// call back function
// function myFunc2 (callback) {
//   callback();
// }

// myFunc2(myObj1.func);