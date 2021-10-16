// given two objects
const userA = {
  id: 5,
  username: 'JimBob',
};

const userB = {
  id: 22,
  username: 'Destiny',
};

// and a map
const visitTracker = new Map();

// we can use the objects as map keys
// and store abitrary information along with those objects
visitTracker.set(userA, 0);
visitTracker.set(userB, 0);

console.log(visitTracker);
console.log(visitTracker.size);
console.log(visitTracker.has(userA));

// we can loop through with for..of
// notice: array destructuring for key/val pair
for (const [key, val] of visitTracker) {
  console.log(key, val);
}

// we can loop over .values()
// using the iterable
for (const val of visitTracker.values()) {
  console.log(val);
}

// we can empty them out
visitTracker.clear();
