// this do not point to function's lexical scope
var a = 10;

function myFunc() {
  a += 1;
  var b = 10;
  console.log(this.a);
  console.log(this.b);
}

myFunc();