// default binding difference between node and browser
function myFunc1 () {
  var b = 20;
  console.log(this.a);
  console.log(this.b);
}

// console.log(this); // not binded to global object
var a = 10;
global.a = a;




myFunc1();