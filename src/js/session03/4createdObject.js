// arrow function cant be a function
var classEs6 = () => {
  this.a = 10;
  this.b = 20;
}

var instance = new classEs6();
console.log(instance);