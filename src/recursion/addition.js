let add = (num) => {
  console.log(num); // action
  if(num<1) return 0; // stop condition
  return num + add(num-1); // action + recursion
};

console.log(add(5));