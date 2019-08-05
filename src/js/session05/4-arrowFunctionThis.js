function a () {
  this.a = 10;
  console.log(this.a); 
}

a();

console.log(this.a);

console.log('--------------------------------------');

const b = () => {
  this.b = 20;
  console.log(this.b);
}

b();

console.log(this.b);
