console.log('start');

process.nextTick(() => {
  setTimeout(() => {console.log( 'deffered with timer')}, 2000);
});

setTimeout(() => {
  console.log('defined by setTimeout');
}, 0);

process.nextTick(() => {
  console.log( 'deffered without timer');
});


console.log('end');
