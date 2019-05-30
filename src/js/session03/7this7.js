// implicit binding lost

global.a = "I am global";

function myFunc1 () {
  console.log(this.a);
}

const myObj1 = {
  a: 10,
  func: myFunc1
}

// reference to other object
const myFunc1Ref = myObj1.func;

myFunc1Ref();

// call back function
function myFunc2 (callback) {
  callback();
}

myFunc2(myObj1.func);