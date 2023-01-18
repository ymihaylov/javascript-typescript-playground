console.time("Timer 1");

const myList = [11, 22, 33, 44, 55, 66];

for (let i in myList) {
	console.log(i); // this is the index
}

console.log('=======');

for (let v of myList) {
	console.log(v); // this is the value
}

console.log('=======');

myList.forEach((v) => console.log(v)); // print value

console.timeEnd("Timer 1");
