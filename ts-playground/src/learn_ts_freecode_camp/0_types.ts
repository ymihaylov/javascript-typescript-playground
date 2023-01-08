// ====
// let sport = "football";
// sport = 1; // This throw an error because TypeScript, duh


// === type definition
// let id: number = 5;
// let firstname: string = "Lary";
// let hasDog: boolean = true;
//
// let lastname: string; // declare without assignment
// lastname = "Page";


// === TS infers the types of declared variables
// let id = 5; // TS knows it's an integer
// let hasDog = true; // TS knows it's an boolean
// hasDog = 1; // Error!


// === Union type
// let age: string | number;
// age = 26;
// age = '26'; // no error


// === Primitive vs reference types
// - Reference types are arrays, objects and functions
// - Primitive types
// x and y both contain primitive data, and they're completely independent of each other
let x = 2;
let y = 1;

x = y;

y = 100;

console.log(x); // it's 1 even though y changed to 100, x is still 1. It's not a reference!
console.log(y); // 100

// - Reference types
// They're referred to a memory location where the object is stored
let point1 = {x: 1, y: 1};
let point2 = point1;

point1.x = 200; // this change the point2.x also, and point2.x becomes 200

console.log(point1.x, point2.x); // 200, 200
