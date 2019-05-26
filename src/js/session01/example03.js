function c () {
  var a = 6000000000;
  while (a > 0) {
    a -= 1;
  }
  
  console.log('completed c!!');
}

function b () {
  c();
  console.log('completed b!!');
}

function a () {
  b();
  console.log('completed a!!');
}

a();
