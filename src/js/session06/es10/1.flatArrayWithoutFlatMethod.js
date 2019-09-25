// Instead of using inbuilt flat method we can use "reduce" and "concat" method

// concat will consider each argument to be added in the array.
// an argument can be a element or an array
const arr1 = [].concat(...[1, 2, [3]]); // equivalent [].concat(1, 2, 3, [5, 6])
console.log(arr1); // [ 1, 2, 3 ]

const arr2 = [].concat(...[1, 2, [3, [4]]]);
console.log(arr2); // [ 1, 2, 3, [ 4 ] ]

// note this cant fill array hole
const arr3 = [].concat(...[1, 2, ,[3]]);
console.log(arr3); // [ 1, 2, undefined, 3 ]

// Note below do not work
const arr4 = [1, 2, [3]];
const arr5 = [...arr4];
console.log(arr5); // [ 1, 2, [ 3 ] ]
