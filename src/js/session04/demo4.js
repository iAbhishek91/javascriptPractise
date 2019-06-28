const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');
const filePath1 = path.join(__dirname, 'sample1.txt');
const filePath2 = path.join(__dirname, 'sample2.txt');

const grapes = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8',(error, data) => {
      if (error) reject(error);
  
      resolve(data);
    });
  });
};

const orange = async (data1) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath1, 'utf8',(error, data) => {
      if (error) reject(error);
  
      resolve(`${data1} + ${data}`);
    });
  });
};

const apple = async (data1) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath2, 'utf8',(error, data) => {
      if (error) reject(error);
  
      resolve(`${data1} + ${data}`);
    });
  });
};

const execute = async () => {
 const a = await grapes();
 const b = await orange(a);
 const c = await apple(b);
 console.log(c)
}

execute()