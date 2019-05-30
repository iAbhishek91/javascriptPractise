// this do not point to function itself
function myFunc () {
  console.log(this.name);
}

myFunc();
console.log('-------------------------');
console.log(myFunc.name);