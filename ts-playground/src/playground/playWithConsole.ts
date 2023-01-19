console.group("Hello")

console.log("Name: Yavor")
console.log("Age: 30")

console.groupEnd()

console.group("Assert");
console.assert(2 + 4 === 5, "Expected 2 + 3 = 5")
console.groupEnd();

console.log('%cHello world!', 'color: red; font-weight: bold;');

function a() {
	console.trace();
}

function b() {
	a();
}

b();

const testObjDir = {
	id: 1,
	name: 'John Doe',
	address: {
	  street: '123 Main St',
	  city: 'New York',
	  zip: 10001
	}
  };
console.dir(testObjDir);

