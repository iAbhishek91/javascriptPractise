// new binding
function myFunc () {
  console.log(this);
  this.a = 10;
  console.log(this);
}

const myObj = new myFunc();
console.log(myObj.a);
