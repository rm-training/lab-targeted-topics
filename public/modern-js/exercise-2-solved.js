
// Exercise 7
//
// Convert the following to ES6
// use classes instead of object.prototype...
// class, constructor, super

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  static checkType(shape) {
    if (shape.width === shape.height) {
      return 'square';
    }
    return 'shape';
  }
}

class Rectangle extends Shape {
  constructor(id, x, y, width) {
    super(id, x, y);
    this.width = width;
    this.height = width;
  }

  changeWidth(width) {
    this.width = width;
    this.height = width;
  }

}


// Exercise 8
//
// There is an additional method on all shapes
// Make sure this is added into your class definition (above)
// And modify it so that it doesn't need to use 'bind', 'call' or retain context
Shape.prototype.moveLater = function (x, y, ms) {
  setTimeout(function () {
    this.move(x, y);
  }.bind(this), ms);
}

export {
  Shape,
  Rectangle
}