const promise = new Promise((resolve, reject) => {
  let a = 10;
  if (a > 10) {
    resolve('resolved');
  }
  throw new Error('error occured');
});

promise.then(data => console.log()).catch((e) => console.log(e.message));