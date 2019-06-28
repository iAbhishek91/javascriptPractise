const promiseObj = new Promise((resolve, reject) => {
  if (false) resolve('resolved');
  reject('rejected');
});

promiseObj
  .then(data => console.log(data))
  .catch(data => console.log(data));

