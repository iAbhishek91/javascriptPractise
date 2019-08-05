// rest
const alpha = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
};

const { a, b, ...rest} = alpha;

console.log(rest);

// spread

const abhi = {
  fname: 'abhi',
  lname: 'das',
  address: 'london',
  company: 'lloyds'
};

const john = {
  ...abhi,
  fname: 'john',
  lname: 'D',
};

console.log(john);