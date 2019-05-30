const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('print from console');
    resolve('resolved');
  }, 5000);
});

console.log('first line');
promise.then(data => console.log(data)).catch();
console.log('last line');