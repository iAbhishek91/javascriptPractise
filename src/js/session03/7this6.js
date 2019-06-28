// implicit binding
//1003
function myFunc1 () {
  console.log(this.a);
}

// 1001
const myObj1 = {
  a: 10, // 1002
  func: myFunc1 // 1003
}

const myNewFunc = myObj1.func; // 1003

myObj1.func(); // 1001.1003
myNewFunc(); // 1003

//myObj1.func();

// const myObj2 = {
//   a: 20,
//   obj1: myObj1
// }

// myObj2.obj1.func();
