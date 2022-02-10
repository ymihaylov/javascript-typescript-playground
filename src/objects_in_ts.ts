// === Object type annotation
// let person: {
//     name: string;
//     age: number;
//     isDev: boolean;
// };
//
// // Assign person to the object with all necessary value types
// person = {
//     name: "Yavor",
//     age: 29,
//     isDev: true
// };

// person.isDev = "Yes!"; // Error! isDev should be boolean

// person = {
//     name: "Gosho",
//     age: 31
// };
// ERROR! missing isDev property


// === Interfaces 101
// Define signature of an object with interfaces
// interface Person {
//     name: string,
//     location: string,
//     isDev: boolean
// };
//
// let person1: Person = {
//     name: "Yavor",
//     location: "UK",
//     isDev: true
// };


// === Functions in interface
interface Speech {
    sayHi(name: string): string; // old school common js function
    sayBye: (name: string) => string; // es6 arrow function
}

let sayStuff: Speech = {
    sayHi: function(name: string) {
        return `Hello ${name}`;
    },
    sayBye: (name: string) => `Bye, bye, ${name}`
    // sayBye: function(name: string) {
    //     return `Bye, bye, ${name}`;
    // }
};

console.log(sayStuff.sayHi("Yavor"));
console.log(sayStuff.sayBye("Yavor"));
