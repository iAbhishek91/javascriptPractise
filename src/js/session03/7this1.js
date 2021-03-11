// why THIS is a confusion
function myFunc1 () {
  console.log(this.subhojit);
  console.log('-----------------');
}

// myFunc1();

myFunc1.call({ });


function myFunc2 (...a1) {
  res = a1.reduce((a, n) => a + n)
  console.log(res)
}

data = [10,20,30,10,40]
myFunc2.apply({}, data)


function add (a, b) {
  return a + b
}

var add5 = add.bind({}, 5)
var add6 = add.bind({}, 6)

console.log(add5(6))
console.log(add5(6))