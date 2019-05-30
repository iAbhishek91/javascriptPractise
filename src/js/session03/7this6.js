// implicit binding
function myFunc1 () {
  console.log(this.a);
}

const myObj1 = {
  a: 10,
  func: myFunc1
}

myObj1.func();

// const myObj2 = {
//   a: 20,
//   obj1: myObj1
// }

// myObj2.obj1.func();
