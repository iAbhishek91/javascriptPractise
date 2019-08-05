// this is not possbile to access a static member inside a non-static member
// this.a or normal a will throw typeError
// however we can use A.a() to access this
class A {
  static a() {
    return 10;
  }

  getA() {
    console.log(A.a());
  }
}

const a = new A();

a.getA();
