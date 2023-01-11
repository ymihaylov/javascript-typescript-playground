// The async keyword is used with a function to indicate that it is an asynchronous function.
// A promise is returned by the async function.
// async function f() {
// 	console.log('Hello');
// 	return Promise.resolve(1);
// }

// f();

// ===
// Promise
let promise = new Promise(function (resolve, reject) {
	setTimeout(function() {
		const randomNumber = Math.floor(Math.random() * 10);
		console.log(`Random number: ${randomNumber}`);

		if (randomNumber % 2 === 0) {
			resolve('Hello!');
		}

		reject("Error");
	}, 4000);
});

function fakePromiseFunction() {
	setTimeout(function() {
		return "Hello!";
	}, 4000);
}

// async function
async function asyncFunc() {
	// Wait for the promise to be fulfilled
	try {
		// let result = fakePromiseFunction(); // result is undefined - it doesn't wait to return value.
		let result = await promise;
		console.log(result);
		console.log("Hi!");
	} catch (error) {
		console.log(error);
	}
}

asyncFunc();
