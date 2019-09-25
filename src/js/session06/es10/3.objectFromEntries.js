// existing "entries" method

const me = {
  fName: 'Abhishek',
  lName: 'Das',
};

// changes key value pair in to a array
console.log(Object.entries(me)); // [ [ 'fName', 'Abhishek' ], [ 'lName', 'Das' ] ]

// fromEntries is new in es10
// just the opposite
console.log(Object.fromEntries(Object.entries(me))); // { fName: 'Abhishek', lName: 'Das' }