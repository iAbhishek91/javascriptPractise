// rest

const alpha = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [ ten, twenty, ...rest] = alpha;

console.log(ten);
console.log(twenty);
console.log(rest);

// spread

const abhi = ['audi', 'bmw', 'ferrari'];

const john = [...abhi, 'RR'];

console.log(john);