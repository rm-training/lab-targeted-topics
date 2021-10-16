// simple iterator
// it manages its state
const loopMeIterator = {
  next() {
    const random = Math.random();
    return {
      value: random,
      done: random > 0.8,
    };
  },
};

// ultra basic
// we are calling on internals though :(
let result = loopMeIterator.next();
while (!result.done) {
  result = loopMeIterator.next();
  console.log(result);
}

// use a generator instead
function* loopMeGenerator() {
  let random = Math.random();
  while (random < 0.8) {
    yield random;
    random = Math.random();
  }
}

// similar iteration with the result of our generator
console.log('Now using generator');
const loopMe = loopMeGenerator();
result = loopMe.next();
while (!result.done) {
  result = loopMe.next();
  console.log(result);
}
