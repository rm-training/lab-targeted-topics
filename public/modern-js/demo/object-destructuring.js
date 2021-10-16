// given an object
const robot = {
	id: 5,
	name: 'Robot',
	speak: function () {
		return `${this.name} says: beep boop beep`;
	},
};

// the right will be desctructured into the left
let { name: robotName } = robot;
console.log("Example 1, robotName:", robotName);

// you must use var/let/const
// or ()
// causes SyntaxError
// because JavaScript interprets the left as a block statement
//{ name: robotName } = robot; // SyntaxError

// solution: wrap the whole thing in parenthesis
// or use var/let/const
({ name: robotName } = robot);
console.log("Example 2, wrapped:", robotName);

// you can use the same prop name/var names for convenience
let { name, id } = robot;
console.log("Example 3, same prop names:", name, id);

// You can use defaults
let { otherThingy: robotThingy = "Default Robot" } = robot;
console.log("Example 4, with Default:", robotThingy);

let { x = 5 } = {};
console.log("Example 5:", x); // 5!

// Use them in function args to pass object params
// as named function arguments
function initConfig({ setupFn, afterSetupFn, loggerId }) {
	console.log("Example 6:", setupFn, afterSetupFn, loggerId);
}
initConfig({
	setupFn: () => { },
	afterSetupFn: () => { },
	loggerId: 'AFJF32fDFE9',
});

// Or destructure return params
// to selectively fetch results from a large object
// this is similar to how ES6 Modules (import) works
function returner() {
	return {
		id: 1,
		other: () => { },
	}
}

let { other } = returner();
console.log("Example 7:", other);