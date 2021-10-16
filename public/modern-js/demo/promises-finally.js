const myProm = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 1000);
});

myProm.then((val) => {
	console.log(`Resolved with ${val}`);
}).finally(() => {
	// great spot for clean up
	console.log('Totally resolved');
}).then((val) => {
	// note: the original resolved value prior to finall()
	// was not modified by finall()
	console.log(`Resolved with ${val}`);
});

