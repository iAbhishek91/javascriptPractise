// why THIS is a confusion
function myFunc1 () {
  console.log(this);
}

myFunc1();

myFunc1.call({});
