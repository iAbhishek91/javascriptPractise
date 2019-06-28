// function asyncFunc1 () {
//   setTimeout(() => {
//     console.log(' I am from async function - 1');
//   }, 5000);
// }

const promiseFunc1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I am from async function - 1');
  }, 7000);
});

// function asyncFunc2 () {
//   setTimeout(() => {
//     console.log(' I am from async function - 2');
//   }, 4000);
// }

const promiseFunc2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I am from async function - 2');
  }, 5000);
});

// function asyncFunc3 () {
//   setTimeout(() => {
//     console.log(' I am from async function - 3');
//   }, 6000);
// }

const promiseFunc3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I am from async function - 3');
  }, 1000);
});

// first way
const allPromise = Promise.all([promiseFunc1, promiseFunc2, promiseFunc3]);

allPromise.then(data => console.log(data));