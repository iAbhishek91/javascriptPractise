const promise = new Promise((resolve, reject) => {
  let a = 10;
  if (a > 10) {
    resolve('resolved');
  }
  reject('error occured');
});

promise.then(data => console.log()).catch((e) => console.log(e.message));