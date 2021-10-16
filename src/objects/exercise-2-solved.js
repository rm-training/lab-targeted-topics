class Calculator {  
  constructor(value = 0) {
    this.value = value;
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  add() {
    this.value += this.stack.reduce((total, current) => {
      return total + current;
    }, 0);

    // empties the stack!
    this.stack = [];

    return this.value;
  }

  mul() {
    this.value *= this.stack.reduce((total, current) => {
      return total + current;
    }, 0);

    // empties the stack!
    this.stack = [];

    return this.value;
  }

  get() {
    return this.value;
  }
}

// we're doing CommonJS modules here for simplicity with Node
module.exports = Calculator;
