// class A {
//   static method1 (data) {
//     console.log(data);
//   }

//   method4() {}

//   method2 (data) {
//     console.log('method2 in parent');
//     console.log(data);
//   }
// }

// class B extends A {
//   method3 () {
//     console.log('method2 in child');
//     this.method2('I am from child class')
//     A.method1('abhishek');
//   }
// }

// const objB = new B();
// objB.method3();


class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getAB() {
    console.log(this.a , this.b)
  }
}

const c1 = new C(10,20);
const c2 = new C('rob','bob');
c1.getAB()
c2.getAB()