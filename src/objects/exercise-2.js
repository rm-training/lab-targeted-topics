/*
 * Exercise: Classes
 *
 * 1. Create a class called `Calculator'.  It's constructor should
 *    accept a single argument, an initial value for the calculator.
 *
 *    If the caller doesn't provide an initial value, set it to zero.
 *
 * 2. A calculator should support a stack (i.e. an array of numbers)
 *    that starts out empty.
 *
 * 3. Create a prototype function called `push' that pushes a number
 *    onto the calculator's stack.
 *
 * 4. Create the following prototype functions:
 *
 *   add: Sums the stack then adds the sum to the calculator's value -- then empties the stack
 *   mul: Sums the stack then multiplies the sum by the calculator's value -- then empties the stack
 *   get: Returns the value of the current calculator value
 *
 * Tips:
 *
 * You can easily reduce array values...
 *
 *   let sum = this.stack.reduce((total, current) => {
 * 	    return total + current;
 *   }, 0);
 *
 * Example usage:
 *
 *   let c = new Calculator(5);
 *   c.push(5);   // Add 5 to the stack.
 *   c.push(10);  // Add 10 to the stack.
 *   c.add();     // Sum stack and add to 5,
 *                // Stack is now empty.
 *   c.get();     // returns 20
 *
 * Either test by executing this code directly
 *  node /src/exercise-2.js
 *
 * And make sure it passes all tests:
 *  npm test
 */

class Calculator {
  // implement your constructor...
  // and then some inherited methods: push, add, mul, get
}

// we're doing CommonJS modules here for simplicity with Node
module.exports = Calculator;


/**
 * There be code cheats below! Use them to speed up the pace if you like.
 */

// add() will sum all the numbers, you can use reduce like so:
// this.value += this.stack.reduce((total, current) => {
//   return total + current;
// }, 0);

// mul() will multiply the stack, you can use reduce like so:
// this.value *= this.stack.reduce((total, current) => {
//   return total + current;
// }, 0);