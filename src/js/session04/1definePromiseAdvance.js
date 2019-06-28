const fs = require('fs');
const path = require('path');

const promiseObj = new Promise((resolve, reject) => {

  fs.readFile(path.resolve(__dirname, 'sample.txt'), 'utf8', (err, data) => {

    if (err) reject('error while reading the file : sample.txt', err);

    resolve(data);

  });

});

promiseObj
  .then(data => console.log(data))
  .catch(err => console.log(err));