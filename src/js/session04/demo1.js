const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

const myFunc = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8',(error, data) => {
      if (error) reject(error);
  
      resolve(data);
    });
  });
}

myFunc()
  .then((data) => {console.log(data)})
  .catch((data) => {console.log(data)});