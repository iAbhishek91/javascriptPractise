function curry(fn) {
  return function f1(a) {
    if(arguments.length === 0 || a === '_') {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  }
}

// mean([]), median([]), product([]), sum([]), negate(1)work with one array argument
function mean(arr) {
  return (arr.reduce((a, n) => a+n, 0)) / arr.length;
}

const meanCurry = curry(mean);

console.log(meanCurry([3,5,6,10]));
console.log(meanCurry('_')([3,5,6,10]));