const fs = require('fs');
const path = require('path');

const function1 = () => new Promise((resolve, reject) => {

  fs.readFile(path.resolve(__dirname, 'sample.txt'), 'utf8', (err, data) => {

    if (err) reject('error while reading the file : sample.txt', err);

    resolve(data);

  });

});

const function2 = () => new Promise((resolve, reject) => {

  fs.readFile(path.resolve(__dirname, 'sample.txt'), 'utf8', (err, data) => {

    if (err) reject('error while reading the file : sample.txt', err);

    resolve(data);

  });

});


async function myAsyncFunc () {
  try {
    const a = await function1();
    const b = await function2();
    console.log(a === b);
  } catch (e) {console.log(e)};
}

function myNormalFunction () {
  function1().then(data1 => {
    function2().then(data => console.log(data === data1)).catch(err => console.log(err));
  }).catch(err => console.log(err));
}

myNormalFunction();

myAsyncFunc();