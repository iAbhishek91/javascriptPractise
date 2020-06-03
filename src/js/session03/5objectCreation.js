//object.create
var a1 = {
  prop1: 'prop1',
  prop2: 'prop2',
  b: {},
  c: () => {}
};

var b1 = Object.create(a1);
// console.log(a1.__proto__);
// console.log(b1.__proto__);

// -----------------------------------------
function a2 () {
  this.a = 10;
  this.b = 20;
  c = 30;
  this.f = () => {}
}

module.exports.request = new a2();

