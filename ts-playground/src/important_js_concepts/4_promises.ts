// In JavaScript, asynchronous operations are managed by promises.
// Code that must wait for the output is referred to as "consuming code."

// There are three possible states for a promise.
// - Fulfilled: When the action is successfully finished, the condition is fulfilled.
// - Rejected: When an action fails, it is rejected.
// - Pending: Initial state of pending, neither fulfilled nor rejected.

// Returns a promise
let countValue = new Promise(function (resolve, reject) {
	// resolve("Promise resolved");
	reject("Promise rejected");
});

// Executes after a successful promise resolution
countValue.then(result => {
        console.log(result);
})
.catch(result => { // Executes after a reject
	console.log(result);
});
