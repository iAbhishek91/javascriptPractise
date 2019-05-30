
console.log(this);

function func1 () {
  console.log('------------------------------------------');
  console.log(global === this);
  console.log(this);

  // inner function
  function innerFunc (self) {
    console.log('-------------------inner function-----------------------');
    console.log(this === self);
    console.log(this);
  }
  innerFunc(this);

  func2(this);
}

function func2 (self) {
  console.log('------------------func 2------------------------');
  console.log(this === self);
  console.log(this);
}

func1();