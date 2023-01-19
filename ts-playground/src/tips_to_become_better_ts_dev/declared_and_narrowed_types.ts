function foo(x: string | number) {
	if (typeof x === 'string') {
		// type of x is narrowed to string
		console.log(x.length);

		// Declaration type >= narowed type
		x = 1;
		// console.log(x.length); // errror - x is now number
	}
}
