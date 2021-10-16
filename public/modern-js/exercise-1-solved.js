// Exercise 1
//
// Given two variables, swap their values in one line of code.
// => thing1 = 'banana'
// => thing2 = 'apple'

let thing1 = "apple";
let thing2 = "banana";

[thing1, thing2] = [thing2, thing1];

// Exercise 2
//
// Given an object, in one line, assign the keys as variables that reference their corresponding values within the object
// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
var elvis = { name: "elvis", title: "hip swinger" };

let { name, title } = elvis;

// Exercise 3
//
// Now, in one line, assign variables to the values of the object using DIFFERENT names than the keys already in the object.
// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'

let { name: person, title: job } = elvis;

// Exercise 4
//
// Concatenate the following arrays into ONE array using es6:
// console.log(newArray) => [ 1, 2, 3, 'a', 'b', 'c', 'bacon', 'mango', 'pecan pie' ]

var numbers = [1, 2, 3];
var letters = ["a", "b", "c"];
var foods = ["bacon", "mango", "pecan pie"];

const newArray = [...numbers, ...letters, ...foods];

// Exercise 5
//
// Split the following string into an array using es6:
// console.log(wordArray) => [ 'm', 'c', 'G', 'o', 'o' ]

var someWord = "mcGoo";

const wordArray = [...someWord];

// Exercise 6
//
// Convert the following function into an arrow function:
const sayHello = (name) => {
  return "Hello, " + name;
};

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