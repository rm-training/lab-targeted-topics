// Class Property Decorators
function readonly(target, property, descriptor) {
	descriptor.writable = false;
	return descriptor;
}
class User {
	constructor(firstname, lastName) {
		this.firstname = firstname;
		this.lastName = lastName;
	}
	@readonly
	getFullName() {
		return this.firstname + ' ' + this.lastName;
	}
}
User.prototype.getFullName = function () {
	return 'HACKED!';
}


//
// Class Decorator
//
function withLoginStatus(UserRef) {
	return class extends UserRef {
		constructor(...args) {
			super(...args);
			this.isLoggedIn = false;
		}
		setLoggedIn() {
			this.isLoggedIn = true;
		}
	}
}
@withLoginStatus
class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}