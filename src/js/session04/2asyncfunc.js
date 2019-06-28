function asyncFunc1 () {
  setTimeout(() => {
    console.log(' I am from async function - 1');
  }, 5000);
}

function asyncFunc2 () {
  setTimeout(() => {
    console.log(' I am from async function - 2');
  }, 4000);
}

function asyncFunc3 () {
  setTimeout(() => {
    console.log(' I am from async function - 3');
  }, 6000);
}


asyncFunc1();
asyncFunc2();
asyncFunc3();