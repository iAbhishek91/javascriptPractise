const A = require('./classOne');

class B extends A {
  static myMethodB() {
    console.log(this.myMethodA());
  }

  get myMethodB1() {
    return myMethodA1();
    // return 10;
  }
  myMethodB2() {
    console.log(this.myMethodB1);
  }
};

B.myMethodB();

const b = new B();
b.myMethodB2();