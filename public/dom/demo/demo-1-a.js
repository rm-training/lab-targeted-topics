'use strict';

console.group("Demo File A");
console.log('hello from demo-1 A.js');

// Ex: Selecting something in the page that has not necessarily been parsed yet...
const selectedThing = document.getElementById('header');
console.log('Did I find the H1"?', selectedThing);
console.groupEnd("Demo File A");