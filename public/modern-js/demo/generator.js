// generators return an Iterator (which follow the iterator protocol)
// an object with .next() and .done
function* loopDrip(x) {
  for (let i = 0; i < x; i++) {
    yield i;
  }
}

const gen = loopDrip(10);

// we can control the iteration
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// or use it in for loops
for (val of gen) {
  console.log(val);
}
