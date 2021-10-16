// Note: this won't run in all versions of node (let alone the browser)
// To try it out locally w/ Node, run it w/ 'esm' module
//
// # install deps if you haven't already
// npm install
// # then run it
// node -r esm {your-script}

// import the default, assign to DefaultAnimal
import DefaultAnimal from './modules/Animal.js';

// import named export, Animal
import { Animal } from './modules/Animal.js';

// importing more than one thing
// import { Animal, somePublicJunk } from './modules/Animal.js';

// aliasing
// import { Animal as MyOwnAnimal } from './modules/Animal.js';

// importing everything
// import * as AnimalModule from './modules/Animal.js';

// from here down we can just use our imports as we normally would...

const cat = new Animal('Felix', 'meow', true, 4);
console.log(cat);

const catFromDefault = new DefaultAnimal('Felix', 'meow', true, 4);
console.log(catFromDefault);
