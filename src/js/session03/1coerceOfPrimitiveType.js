// we are able to access property and methods as primitype are internally
// coerced to their respective object
// string to String
// number to Number
// boolean to Boolean
var strPrimitive = 'abhi';
var strObj = new String('abhi');

console.log(strPrimitive === strObj);

console.log(strPrimitive instanceof String);
console.log(strObj instanceof String);

console.log(strPrimitive.length);

//------------------------------------------------
var simpleNumber = 10.79;
var simpleBoolean = false;

console.log(simpleNumber.toFixed(0));
console.log(simpleBoolean.valueOf());