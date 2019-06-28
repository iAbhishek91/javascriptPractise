var a = 10;

function funcCallback (cb, errorCb) {
  if (a > 10) {
    cb('a is greater than 10');
  }
  errorCb('a is not greater than 10');
}

funcCallback(
  data => console.log(data),
  error => console.log(error),
);