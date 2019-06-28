const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

const a = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8',(error, data) => {
      if (error) reject(error);
  
      resolve(data);
    });
  });
};

const b = async () => {
  const result = await a();
  console.log(result);
};

b();