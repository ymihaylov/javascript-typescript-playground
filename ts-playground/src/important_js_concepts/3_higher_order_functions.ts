// === Call Back Function

const add = (a: number, b: number) => {
	return a + b;
}

const subs = (a: number, b: number) => {
	return Math.abs(a - b);
}

const mult = (a: number, b: number) => {
	return a * b;
}

// calculator is higher order function, `operator` is callback
const calculator = (a: number, b: number, operator: Function) => {
	return operator(a,  b);
};

console.log(calculator(2, 5, add));
