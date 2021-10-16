const userA = {
  id: 5,
  username: 'JimBob',
};

const userB = {
  id: 22,
  username: 'Destiny',
};

const visitors = new Set();

visitors.add(userA);
visitors.add(userB);

console.log(visitors);
console.log(visitors.size);
console.log(visitors.has(userA));

// looping through with for..of
// notice: array destructuring for key/val pair
for (const val of visitors) {
  console.log(val);
}

// looping over values
// using the iterable
for (const val of visitors.values()) {
  console.log(val);
}

visitors.clear();
