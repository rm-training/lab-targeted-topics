// given an array
const arr1 = [
  'a',
  2,
  () => 10,
  'leftovers'
];

// when left and right are [] arrays
// the right will be destructured into the left
let [a, num, fun, ...rest] = arr1;
console.log('Example 1:', a, num, fun(), rest);

// You can use defaults
[a = 0, b = 0] = [1];
console.log('Example 2:', a, b);

// You can ignore values
// here we are ignoring the second value from arr1
[a, , fun] = arr1;
console.log('Example 3:', a, fun);

// Neat: This can be used to swap a variable value
[a, b] = [b, a];
console.log('Example 4:', a, b);
