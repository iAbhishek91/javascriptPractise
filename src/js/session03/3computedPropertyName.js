const prefix = 'cool';

// es6: computed property name
var myObjWithPrefix = {
  [prefix + 'Name']: 'abhi',
  [prefix + 'Address']: '20 London wall',
}

console.log(myObjWithPrefix.coolName);
console.log(myObjWithPrefix.coolAddress);

