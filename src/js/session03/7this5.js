// default binding difference between node and browser
function myFunc1 () {
  var b = 20;
  console.log(this.a);
  console.log(this.b);
}

var a = 10; // not binded to global object
// global.a = a;
myFunc1();