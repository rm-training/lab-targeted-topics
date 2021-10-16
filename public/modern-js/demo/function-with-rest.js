// function adder()
// takes any number of arguments
// returns their sum
// ex: adder(1,2,3,4,5,6);
function adder() {
	// prior to es2015....
	// we'd convert arguments, which is array-like, to a real array
	var args = Array.prototype.slice.call(arguments);

	console.log(args);

	return args.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
}

let sum = adder(1, 2, 3);
console.log(sum);