function my_func () {
  this.a = 10;
}

my_func.prototype.my_name = function () { return 'abhishek'; }

my_func.prototype.my_address = function () { return '125 London wall'; }

const me = new my_func();

console.log(me.a); // a becomes a direct property
console.log(me.my_name()); // my_name stays in the __proto__ inheritance chain
console.log(me.my_address()); // my_address stays in the __proto__ inheritance chain