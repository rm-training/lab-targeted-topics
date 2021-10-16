// Exercises online
//
// https://repl.it/@mrmorris/BoringPolishedLogic
//

// Exercise 7
//
// Convert the following constructor function
// to use the class keyword instead of object.prototype...
// class, constructor, super

function Shape(id, x, y) {
  this.id = id;
  this.move(x, y);
}

Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
}

Shape.checkType = function (shape) {
  if (shape.width === shape.height) {
    return 'square';
  }
  return 'shape';
}

function Rectangle(id, x, y, width) {
  Shape.call(this, id, x, y);
  this.width = width;
  this.height = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.changeWidth = function (width) {
  this.width = width;
  this.height = width;
}

// Exercise 8
//
// There is an additional method on all shapes
// Make sure this is added into your class definition (above)
// And modify it so that it doesn't need to use 'bind', 'call' or retain context
// hint: we're talking arrow functions

Shape.prototype.moveLater = function (x, y, ms) {
  // notice we're using bind() to maintain context
  setTimeout(function () {
    this.move(x, y);
  }.bind(this), ms);
}

// example usage
// shapeThing.moveLater(100, 100, 1);
// setTimeout(function () {
//   console.assert(shapeThing.x === 100 && shapeThing.y === 100);
// }, 3);

export {
  Shape,
  Rectangle
}