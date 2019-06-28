// why THIS is a confusion
function myFunc1 () {
  console.log(this);
  console.log('-----------------');
}

// myFunc1();

myFunc1.call({});
