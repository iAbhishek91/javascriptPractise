function curry1(fn) {
  return function f1 (a) {
    if (arguments.length === 0 || a === '_') {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  }
}

function curry2(fn) {
  return function f2 (a, b) {
    if(arguments.length === 0 ) {
      return f2;
    } else if(arguments.length === 1) {
      if (a === '_') return f2;
      else {
        return curry1(function (_b) {
          return fn.call(this, a, _b);
        })
      }
    } else {
      if (a === '_') {
        return curry1(function (_a) {
          return fn.call(this, _a, b);
        })
      } else if(b === '_') {
        return curry1(function (_b) {
          return fn.call(this, a, _b);
        })
      } else {
        return fn.apply(this, arguments);
      }
    }
  }
}

function curry3(fn) {
  return function f3(a, b, c) {
    if(arguments.length === 0) {
      return f3;
    } else if(arguments.length === 1){
      return curry1(function (params) {
        
      });
    }
  }
}

// paths(array of path, object)

function path (pathArray, obj){
  let iteration = 0;
  let objUnderOperation = obj;
  while(iteration < pathArray.length) {
    objUnderOperation = objUnderOperation[pathArray[iteration]];
    iteration +=1;
  }
  return objUnderOperation;
}

function pathOrDefault (dflt, path, obj) {

}

const pathCurry = curry2(path);

console.log(pathCurry(['a', 'b'], {a: {b: 10}}));
console.log(pathCurry(['a', 'b'])({a: {b: 10}}));
console.log(pathCurry('_', {a: {b: 10}})(['a', 'b']));
console.log(pathCurry(['a', 1, 'b'], {a: [{b: 10}, {b: 20}]}));
