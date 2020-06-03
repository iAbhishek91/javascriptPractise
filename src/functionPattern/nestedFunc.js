const res = type => (acc, curr, i) => acc + `${type}: value-${i} ${curr}`;



const data = [12, 4, 88, 76, 909, 3];

const finalADD = data.reduce(res('ADD'), '');
const finalDIV = data.reduce(res('DIV'), '');

console.log(finalADD);
console.log(finalDIV);