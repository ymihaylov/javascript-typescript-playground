// Closures are created whenever a function is created in JavaScript, at function creation time.

const outerFun = (a: number) => {
	let b = 10;

	const innerFun = () => {
	  let sum = a + b;
	  console.log(`the sum of the two numbers is ${sum}`);
	}

	return innerFun;
  }

let checkClousure = outerFun(5);
console.log(checkClousure);

checkClousure();
