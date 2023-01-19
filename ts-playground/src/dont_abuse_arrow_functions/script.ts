// ===
// 1. arguments objects is not supported
console.log('1. =====================');
{
const fn1 = () => {
	// console.log(arguments); // Cannot find name arguments
};

function fn2(a: string, b: string) {
	console.log('arguments', arguments);
}

fn2("hello", "word");

// Solution: Spread operator
// @ts-ignore
const fn3 = (...args) => {
	console.log(args); // array
};

fn3(1, 2, 3);
}

// 2. There is no way to change this pointer through apply, call, bind
console.log('2. =====================');
{
	const thisObj = {
		name: 'fatfish'
	};

	// Arrow function determines who is this when its defined
	const fn1 = () => {
		// The containing arrow function captures the global value of 'this'
		// @ts-ignore§
		console.log('this-fn1', this); // Window
	};

	fn1.call(thisObj);

	function fn2() {
		// @ts-ignore
		console.log('this-fn2', this); // thisObject
	}

	fn2.call(thisObj);
}

// 3. Please don’t use arrow functions in constructors
console.log('3. =====================');
{
	function Person (name: string, age: number) {
		// this.name = name;
		// this.string = string;
	}
}
