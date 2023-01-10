// IIFE(Immediately Invoked Function Expression)

// === Regular Function.
function Greet() {
	console.log("Good Morning");
};
// Execution of Regular Function.
Greet();


// === IIFE creation and execution.
(function() {
	console.log("Good Morining");
})();

// The main benefits of using IIFE are data privacy and quick code execution.
