// given an object
const obj1 = {
	id: 5,
	name: 'Silly Object',
	get thingy() {
		return this.id + 'THINGY';
	}
};

// Copying pre-es6
let target = {};
for (let prop in obj1) {
	if (obj1.hasOwnProperty(prop)) {
		target[prop] = obj1[prop];
	}
}

console.log('Cloned:', target, obj1);

// // cloning...
// const clonedObj1 = Object.assign({}, obj1);
// console.log('Cloned with assign', clonedObj1);

// // Example usage
// // merging...
// Object.assign(obj1, {
// 	id: 10,
// });
// console.log('Merged with assign', obj1);