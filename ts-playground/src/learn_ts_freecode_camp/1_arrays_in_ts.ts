// === 101
let ids: number[] = [1, 2, 3, 4, 5]; // This array can contain only numbers
// ids.push('6'); // Error

let names: string[] = ["John", "Yavor", "Yoda"]; // contain only strings

let books: object[] = [
    {name: "Harry Potter", author: "J.K. Rolling"},
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
];
// books.push(5); // error - 5 is not an object

let arr = [1, "hello", true]; // any implicitly
let arrWithAny: any[] = [1, "hello", true]; // any basically reverts into JS


// === Array with union types
// let person: (string | number | boolean)[] = ["Yavor", 1, true];
// person[1] = {test: "test it"}; // Error person can't contain objects


// === TS will infer the types on initialization
// let person = ["Yavor", 1, true]; // same as above example, but implicitly union types assigned
// person[1] = {test: "test it"}; // Error person can't contain objects

// === Tuples - Arrays with fixed size and known types. It's stricter than normal array
// let person: [string, number, boolean] = ['Danny', 1, true];
// person[0] = 100; // Error - value at index 0 can only be string
// person.push("hello"); // This is fine ?!
// person[3] = 10; // Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
// console.log(person);
