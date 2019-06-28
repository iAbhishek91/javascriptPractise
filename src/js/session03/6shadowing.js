// "use strict";

var a1 = {
  prop1: 'prop1',
  prop2: 'prop2',
};

var b1 = Object.create(a1);

b1.prop1 = 'prop Updated';
b1.propNew = 'prop added';

console.log(b1);
console.log(b1.__proto__);

// a1.prop1 = 'prop1 updated';
// console.log(b1);
// console.log(b1.__proto__);