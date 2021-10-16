// How we'd define a function and set defaults
// prior to es6+
function saySomething(name, words) {
  // using typeof checks to compare it against undefined
  name = typeof name === 'undefined' ? 'Anon' : name;
  words = typeof words === 'undefined' ? 'nothing' : words;

  console.log(`${name} says: ${words}`);
}

saySomething();
saySomething('Ryan', 'Hello');

//
// You can use functions to set defaults, too
//
// function getter() {
//   return 25;
// }
// function testFunction(x = getter()) {
//   console.log('X is', x);
// }
// testFunction();
// testFunction(5);

// Default values can reference previously
// declared arguments, too
// function testMe(x=10, y=x+2) {
//   console.log(x, y);
// }