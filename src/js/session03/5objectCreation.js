//object.create
var a1 = {
  prop1: 'prop1',
  prop2: 'prop2',
  b: {},
  c: () => {}
};

var b1 = Object.create(a1);
console.log(a1.__proto__);
console.log(b1);


// -----------------------------------------
function a2 () {
  this.a = 10;
  this.b = 20;
  c = 30;
  this.f = () => {}
}

console.log(new a2());

