const arr3 = [1,2, [3,4, [5,6, [7]]]];

// supported 
// > in node 12.10.0 not in LTS node 10.16.3
// > chrome 77
console.log(arr3.flat());
console.log(arr3.flat(1));
console.log(arr3.flat(2));
console.log(arr3.flat(3));
