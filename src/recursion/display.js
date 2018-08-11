let display = (num) => {
  if(num<1) return;// stop condition
  console.log(num); // action
  display(num-1); // recursion
}

display(10);