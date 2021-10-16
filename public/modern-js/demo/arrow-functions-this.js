function Human(name) {
  this.name = name;
}

// Example: Where arrow functions don't play nice...
//
// @todo - what happens if we change this to an arrow function?
Human.prototype.sayHello = function () {
  console.log(`${this.name} says Hello`);
};

const ryan = new Human('Ryan');
ryan.sayHello();

// Example: Where arrow functions shine:
//
// @todo - what happens if we run some asynchronous code?
// which, remember, can be run in another context...
Human.prototype.sayHelloLater = function () {
  setTimeout(function () {
    this.sayHello();
  }, 1000);

  // in the past we might try to retain context by...
  // 	var that = this;
  // or hard-bind the context...
  // 	var boundSayHello = this.sayHello.bind(this);
  // or pass in...
  //  function () {this.sayHello()}.bind(this);
};

ryan.sayHelloLater();
