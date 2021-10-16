// Prior to ES6
// We only had Function Scope

// these vars are globally scoped
var x = 5;
var y = 10;

function hello(y) {
	// this var is function scoped
	var z = 13;
	console.log('X is', x);
	console.log('Y is', y);

	if (y > x) {
		// @todo this var is...?
		var z = 12;
		console.log('Z is', z);
	}
	console.log('Z is now', z);
}

hello(33);

// in a browser... without 'strict mode'
// this would output...?
console.log(window.x);