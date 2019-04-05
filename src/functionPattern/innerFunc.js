// sync
async function name1(name) {
  return await process.nextTick(() => {
    const random = Math.round(Math.random() * 10);
    if (random % 2) {
      console.log('rejected abhishek');
      return new Error('rejected abhishek');
    }
    else {
      console.log(`resolved ${name}`);
      return 'resolved abhishek'
    }
  });
}

function mainFunc(funcName) {
  return function(name) {
    return new Promise((resolve, reject) => {
      const result = funcName(name);
      if (result instanceof Error) reject(result);
      else resolve(result);
    });
  }
}

mainFunc(name1)('sutapa')
  .then((data) => {
    console.log('data: ' + data);
  }).catch((err) => {
    console.log('error: ' + err);
  });
