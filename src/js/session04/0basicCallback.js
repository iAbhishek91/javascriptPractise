function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function caculator (a, b, cb) {
  console.log(cb(a, b));
}

caculator(10, 40, div);