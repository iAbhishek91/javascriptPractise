var myObj = {
  name: 'abhi',
  'not-allowed-key-format': undefined,
  '1.23': null,
  array: [1,2,3,4],
  innerObject: {
    street: '20 London wall',
  },
  'function': () => 10 + 10,
  expression: 10 + 10,
}

console.log(myObj["not-allowed-key-format"]);
console.log(myObj.function());
console.log(myObj["1.23"]);
console.log(myObj.expression)