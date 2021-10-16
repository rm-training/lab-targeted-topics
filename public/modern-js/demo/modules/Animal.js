const somePrivateJunk = 10;
const somePublicJunk = 5;

class Animal {
  constructor(name, sound, has_tail, num_legs) {
    this.name = name;
    this.sound = sound;
    this.has_tail = has_tail;
    this.num_legs = num_legs;
  }

  speak() {
    return `${this.name} says: ${this.sound}`;
  }

  get isSpry() {
    return this.has_tail && this.num_legs > 3;
  }

  static compare(animal1, animal2) {
    return animal1 === animal2;
  }
}

// named export, Animal
export { Animal };

// export multiple things
// export { Animal, somePublicJunk };

// export and alias
// export { Animal as SuperAnimal };

// setting a default export (only one per module)
export default Animal;
