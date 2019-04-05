// linear curry
// const add = a => b => a + b;


// ramda curry function
function curry(fn) {
  return function f2(a) {
    if (arguments.length === 0) {
      return f2;
    } else if (arguments.length === 1) {
      return function f1(b) {
        return fn.call(this, a, b); // same as: fn(a, b);
      };
    } else {
      return fn.apply(this, arguments); // same as: fn(a, b);
    }
  }
}

// same logic for add(2), subtract(2), multiply(2), modulo(2), mathMod(2), divide(2) inc(1), dec(1), 
function add(a,b){
  return a + b;
};

const addCurry = curry(add);

console.log(addCurry(3, 5));
console.log(addCurry(3)(5));
console.log(addCurry()(3)(5));
console.log(addCurry()()(3)(5));


// another type of usecase
const inc = addCurry(1);
console.log(inc(inc(inc(10))));
