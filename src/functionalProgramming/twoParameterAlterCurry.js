function curry (fn) {
  return function f1 (a, b) {
    if (arguments.length === 0) {
      return f1;
    } else if( arguments.length === 1) {
      return function f2(b) {
        return fn.call(this, a, b);
      }
    } else {
      // return substract.apply(this, arguments);
      if (a === '_'){
        return function (_a) {
          return fn.call(this, _a, b);
        }
      } else if (b === '_'){
        return function (_b) {
          return fn.call(this, a, _b);
        }
      } else {
        return fn.apply(this, arguments);
      }
    }
  }
}

function substract(a, b) { return a - b ;} // 10 -1 = 9

const substractCurry = curry(substract);

console.log(substractCurry(10, 5));
console.log(substractCurry('_', 5)(10));
console.log(substractCurry(10)(5));
console.log(substractCurry(10, '_')(5));

const decWrong = substractCurry(1);
const decCorrect = substractCurry('_', 1);

console.log(decWrong(10)); // this is wrong
console.log(decCorrect(10)); // this is right as we can not alter the sequence of passing the parameter