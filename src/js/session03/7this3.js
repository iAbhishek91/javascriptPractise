// this do not point to function's lexical scope
var a = 10;

function myFunc() {
  a += 1;
  console.log(this.a);
}

myFunc();