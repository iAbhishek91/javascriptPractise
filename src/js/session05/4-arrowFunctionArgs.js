function a (a1, a2 , a3) {
  console.log(arguments);
}

a(10, 20, 30);

console.log('--------------------------------------');

const b = (b1, b2, b3) => {
  console.log(arguments);
}

b(11, 21, 31);

