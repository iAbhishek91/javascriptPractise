class A {
  static method1 (data) {
    console.log(data);
  }

  method2 (data) {
    console.log('method2 in parent');
    console.log(data);
  }
}

class B extends A {
  method3 () {
    console.log('method2 in child');
    this.method2('I am from child class')
  }
}

const objB = new B();
objB.method3();