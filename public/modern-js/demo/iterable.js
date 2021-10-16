// Iterables
// are any object that define iteration behavior
// by setting their iterator property with a generator function
// uses the new Symbol.iterator symbol

const cat = {
  name: 'Felix',
  age: 10,
  // by setting this up
  // we can loop over this object
  * [Symbol.iterator]() {
    let { age } = this;
    while (age > 0) {
      yield age;
      age--;
    }
    yield 'dead';
  },
};

for (const age of cat) {
  console.log(`${cat.name} is ${age}`);
}

// Practical example:
// support for..of with objects
const dog = {
  name: 'Fido',
  legs: 4,
  * [Symbol.iterator]() {
    for (const prop in this) {
      yield this[prop];
    }
  },
};

for (const val of dog) {
  console.log(val);
}
