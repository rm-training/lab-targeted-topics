// given a function that expects aregs
function sum(a, b, c) {
	return a + b + c;
}
// and an array
const numbers = [1, 2, 3];

let result;

// it unwraps/extracts the values
result = sum(numbers[0], numbers[1], numbers[2]);
console.log('Sum result:', result);

// // Spread unwraps ANY iterable, like strings
// result = sum(..."john")
// console.log('String spread:', stringSpread);

// // Spread unwraps arrays in place
// console.log("Array spread:", ...[1, 2, 3]);

// // Example Use Case
// // Spread can be used to combine arrays in place
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArr = [...arr1, "middle", ...arr2];
// console.log('Combined array:', combinedArr);

// // Example use case
// // copying an array
//const arr3 = [...arr1];

// // And works with Objects as of ES2018
// const obj1 = { name: 'Jim' };
// const obj2 = { age: 50 };
// const combinedObj = { ...obj1, ...obj2 };
// console.log("Object spread:", combinedObj);