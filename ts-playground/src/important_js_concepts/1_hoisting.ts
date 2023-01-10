// Before the execution of the code, the interpreter appears to move the declaration of functions, variables, or classes
// to the top of their scope. This process is known as JavaScript hoisting.

// ====
// console.log(myName); // returns undefined, not throws an error "myName is not defined", because of hoisting declaration is on top.
// var myName = 5;

// - !!! let and const DO NOT enable hoisting in terms of variables and constants.


// ===
// function greet() {
// 	b = "Good morning";
// 	console.log(b);
// 	var b; // Raised to the top of the function
// }
// greet();
// console.log(b); // There's no globalv variable `b`. It's only local for funciton greet();


// ===
greet(); // No problem. The functions is hoisted.

function greet() {
	console.log("Hello world!")
}


// ===
// NOTE: Only declarations are hoisted, so when a function is used as an expression, an error occurs.
// greet(); // Cannot access 'greet' before initiazliation

// const greet = () => {
// 	console.log("Hello world!")
// }
