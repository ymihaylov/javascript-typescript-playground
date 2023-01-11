// === Arrays
const colors = ['red', 'green', 'blue', 'white', 'pink'];

// Like array concat
const MyFavColors = [...colors, 'yellow', 'black'];

console.log(MyFavColors);

// === Objects
let person: {firstname: string, lastname: string, age?: number} = {
	firstname: "Yavor",
	lastname: "Mihaylov"
};

person = {...person, age: 5};
console.log(person);
