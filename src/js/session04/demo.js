const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

// fs.readFile(filePath, 'utf8',(error, data) => {
//   if (error) console.log(error);

//   console.log(data);
// });

const myFunc = (success, failure) => {
  fs.readFile(filePath, 'utf8',(error, data) => {
    if (error) failure(error);
  
    success(data);
  });
}

const success = (data) => console.log(data);
const failure = (error) => console.log(error);

myFunc(success, failure);