function curry (fn) {
  return function f1(a) {
    if (arguments.length === 0) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  }
}

// mean([]), median([]), product([]), sum([]), negate(1)work with one array argument
function product(array) {
  return array.reduce((a,n) => a + n, 0);
}

const productCurry = curry(product);

console.log(productCurry([1,3,4,6,10]));
console.log(productCurry()([1,3,4,6,10]));
