// Exercises online
//
// https://repl.it/@mrmorris/EverlastingWorthwhileSyndrome
//

// Exercise 1
//
// Given two variables, swap their values in one line of code.
// => thing1 = 'banana'
// => thing2 = 'apple'

let thing1 = 'apple';
let thing2 = 'banana';

// @todo solution goes here...

// Exercise 2
//
// Given an object, in one line, assign the keys as variables 
// that reference their corresponding values within the object
//
// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
const elvis = { name: 'elvis', title: 'hip swinger' }

// @todo solution goes here...

// Exercise 3
//
// Now, in one line, assign variables to the values of the 
// object using DIFFERENT variable names (person, job) than the keys already in the object
//
// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'

// @todo ...solution goes here...

// Exercise 4
//
// Concatenate the following arrays into ONE array named 'newArray':
//   console.log(newArray) => [ 1, 2, 3, 'a', 'b', 'c', 'bacon', 'mango', 'pecan pie' ]

const numbers = [1, 2, 3]
const letters = ['a', 'b', 'c']
const foods = ['bacon', 'mango', 'pecan pie']

// @todo ... solution goes here ...

// Exercise 5
//
// Split the following string into an array using es6,
// so this this works:
// 	console.log(wordArray) => [ 'm', 'c', 'G', 'o', 'o' ]

const someWord = 'mcGoo'

// @todo ...solution goes here...

// Exercise 6
//
// Convert the following function into an arrow function:
function sayHello(name) {
	return 'Hello, ' + name;
}


// don't edit me..
export default {
	one: {
	  thing1,
	  thing2,
	},
	two: {
	  name,
	  title,
	  elvis,
	},
	three: {
	  person,
	  job,
	  elvis,
	},
	four: {
	  newArray,
	},
	five: {
	  wordArray,
	},
	six: {
	  sayHello,
	},
};