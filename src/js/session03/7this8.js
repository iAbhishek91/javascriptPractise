// const obj1 = {
//   name: 'rob'
// };

// const obj2 = {
//   name: 'kate',
// }

// function greetGoodMorning (context) {
//   console.log(`Good Morning ${context.name.toUpperCase()}`);
// }

// greetGoodMorning(obj1);
// greetGoodMorning(obj2);

// --------------------- new design - power of THIS
const obj1 = {
  name: 'rob'
};

const obj2 = {
  name: 'kate',
}

function greetGoodMorning () {
  console.log(this);
  console.log(`Good Morning ${this.name}`);
}

// greetGoodMorning();
// greetGoodMorning.apply(obj1);
const kate = greetGoodMorning.bind(obj2);
kate();