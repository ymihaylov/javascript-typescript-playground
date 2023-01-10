// ==
type MyFunction = ((a: number, b: number) => number);

const myTest = (callMe: MyFunction) => {
	console.log(callMe(2, 5));
};

myTest((a: number, b: number) => a + b);
