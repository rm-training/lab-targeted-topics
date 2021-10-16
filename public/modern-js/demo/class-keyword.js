// Prior to the class keyword
// we would define constructor functions
// to help create objects that relate to one another in an OO-ish way
//
// Animal -> animal instances
//

// our "class" and "constructor" rolled into one
function Animal(name, sound, has_tail, num_legs) {
  // setting instance-level properties
  this.name = name;
  this.sound = sound;
  this.has_tail = has_tail;
  this.num_legs = num_legs;
}

// this is a shared method every instance will have access to
Animal.prototype.speak = function () {
  return `${this.name} says: ${this.sound}`;
};

// create instances using the 'new' keyword
const cat = new Animal('Felix', 'meow', true, 4);

console.log(cat.speak());

// if we want sub-classes here
function Dog(name) {
  Animal.call(this, name, 'Bark', true, 4);
}

Dog.prototype = Object.create(Animal.prototype);
const doggy = new Dog('Fido');

console.log(doggy.speak());
